const fs = require('fs-extra');
var request = require('request');
const FixedArray = require('fixed-array');

export class Stats {
    constructor(totalBytes: number) {
        this.bytesTotal = totalBytes;
        this.startTime = new Date().getTime();
    }

    private startTime: number;
    public bpsLog = FixedArray(10);
    private lastUpdateTime: number;
    public bytesTotal: number;
    public bytesCompleted: number = 0;

    public getBytesRemaining(): number {
        return this.bytesTotal - this.bytesCompleted;
    }

    public getPercentage(): number {
        return parseFloat((1 - this.getBytesRemaining() / this.bytesTotal).toFixed(10));
    }

    public update(newBytesCompleted: number) {
        const currentTime = new Date().getTime();
        const bps =
            ((this.bytesCompleted + newBytesCompleted - this.bytesCompleted) / (currentTime - this.lastUpdateTime)) * 1000;
        this.bpsLog.push(bps);
        this.lastUpdateTime = currentTime;
        this.bytesCompleted += newBytesCompleted;
    }

    public getBytesPerSecond(): number {
        const mean = this.bpsLog.mean();
        if (mean < 0.0001) {
            return 0;
        }
        return mean;
    }

    public getTimeRemaining(): number {
        return this.getBytesRemaining() / this.getBytesPerSecond();
    }
}

export class Options {
    authToken?: string;
    onStart?: Function;
    onProgress?: Function;
    onEnd?: Function;
}

export class Download {
    constructor(remote: string, directory: string, filename: string) {
        this.remote = remote;
        this.directory = directory;
        this.filename = filename;
    }

    private req: any;

    public stats: Stats;
    remote: string;
    directory: string;
    filename: string;

    startTime: number;
    lastUpdateTime: number;
    endTime: number;

    public start() {
        const currentTime = new Date().getTime();
        this.startTime = currentTime;
        this.lastUpdateTime = currentTime;
    }

    public pause() {
        this.req.pause();
    }

    public resume() {
        this.req.resume();
    }

    public finish() {
        this.endTime = new Date().getTime();
    }

    public cancel() {
        this.req.abort();
    }

    private buildHeaders(authToken: string) {
        if (!authToken) {
            return {};
        }
        return {
            Origin: 'http://example.com',
            authorization: `Basic ${authToken}`,
        };
    }

    public download(options?: Options): Promise<any> {
        // return from(
        return new Promise((resolve, reject) => {
            fs.ensureDirSync(this.directory);

            let out = fs.createWriteStream(this.directory + '/' + this.filename);

            let headers = this.buildHeaders(options.authToken);

            let req = request({
                method: 'GET',
                uri: this.remote,
                headers: headers,
            });

            out.on('finish', () => {
                out.close();
                resolve(this.filename); // observer.complete();
            });

            req.pipe(out);

            req.on('response', (res) => {
                if (res.statusCode !== 200) {
                    // ! We have an error.
                    console.error({
                        msg: res.statusMessage,
                        code: res.statusCode,
                    });

                    reject({
                        msg: res.statusMessage,
                        code: res.statusCode,
                    });
                }
                const totalBytes = parseInt(res.headers['content-length']);
                this.stats = new Stats(totalBytes);
                if (options && options.onStart != null) {
                    options.onStart(this.stats);
                }
            });

            req.on('data', (chunk) => {
                this.stats.update(chunk.length);
                if (options && options.onProgress != null) {
                    options.onProgress(this.stats);
                }
            });

            req.on('end', (end) => {
                if (options && options.onEnd != null) {
                    options.onEnd(this.stats);
                    // out.close();
                    // resolve(this.filename);
                    // options.onEnd(end);
                }
            });

            req.once('error', (error) => {
                console.error('Download.ts->download() error', error);
                reject(error);
            });
        });
        // );
    }
}
