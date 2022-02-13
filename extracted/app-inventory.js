"use strict";
(self.webpackChunkdesktop = self.webpackChunkdesktop || []).push([[26], {
    94026: (Un, Be, p) => {
        p.r(Be), p.d(Be, {GuModule: () => lg});
        var e = p(5e3), V = p(21086), fe = p(23753), re = p(61709), S = p(24850), w = p(2994), P = p(92198),
            Ft = p(43164);

        function je(o, r, t, n) {
            const i = window && !!window.document && window.document.documentElement;
            let a = i && r ? window : t;
            if (o && (a = o && i && "string" == typeof o ? function (o, r, t) {
                return (t ? window.document : r).querySelector(o)
            }(o, t.nativeElement, n) : o, !a)) throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");
            return a
        }

        function Ke(o) {
            return o && !o.firstChange
        }

        const En = {
            clientHeight: "clientHeight",
            offsetHeight: "offsetHeight",
            scrollHeight: "scrollHeight",
            pageYOffset: "pageYOffset",
            offsetTop: "offsetTop",
            scrollTop: "scrollTop",
            top: "top"
        }, Nn = {
            clientHeight: "clientWidth",
            offsetHeight: "offsetWidth",
            scrollHeight: "scrollWidth",
            pageYOffset: "pageXOffset",
            offsetTop: "offsetLeft",
            scrollTop: "scrollLeft",
            top: "left"
        };

        class Rn {
            constructor(r = !0) {
                this.vertical = r, this.propsMap = r ? En : Nn
            }

            clientHeightKey() {
                return this.propsMap.clientHeight
            }

            offsetHeightKey() {
                return this.propsMap.offsetHeight
            }

            scrollHeightKey() {
                return this.propsMap.scrollHeight
            }

            pageYOffsetKey() {
                return this.propsMap.pageYOffset
            }

            offsetTopKey() {
                return this.propsMap.offsetTop
            }

            scrollTopKey() {
                return this.propsMap.scrollTop
            }

            topKey() {
                return this.propsMap.top
            }
        }

        function Jn(o) {
            return ["Window", "global"].some(t => Object.prototype.toString.call(o).includes(t))
        }

        function et(o, r) {
            return o ? r.document.documentElement : null
        }

        function Dt(o, r) {
            const t = function ({container: o, isWindow: r, axis: t}) {
                const {offsetHeightKey: n, clientHeightKey: i} = Gt(t);
                return Bt(o, r, n, i)
            }(r);
            return r.isWindow ? function (o, r, t) {
                const {axis: n, container: i, isWindow: a} = t, {offsetHeightKey: s, clientHeightKey: c} = Gt(n),
                    l = o + Lt(et(a, i), n, a), g = Bt(r.nativeElement, a, s, c), b = function (o, r, t) {
                        const n = r.topKey();
                        if (o.getBoundingClientRect) return o.getBoundingClientRect()[n] + Lt(o, r, t)
                    }(r.nativeElement, n, a) + g;
                return {height: o, scrolled: l, totalToScroll: b, isWindow: a}
            }(t, o, r) : function (o, r, t) {
                const {axis: n, container: i} = t;
                return {height: o, scrolled: i[n.scrollTopKey()], totalToScroll: i[n.scrollHeightKey()], isWindow: !1}
            }(t, 0, r)
        }

        function Gt(o) {
            return {offsetHeightKey: o.offsetHeightKey(), clientHeightKey: o.clientHeightKey()}
        }

        function Bt(o, r, t, n) {
            if (isNaN(o[t])) {
                const i = et(r, o);
                return i ? i[n] : 0
            }
            return o[t]
        }

        function Lt(o, r, t) {
            const n = r.pageYOffsetKey(), i = r.scrollTopKey(), a = r.offsetTopKey();
            return isNaN(window.pageYOffset) ? et(t, o)[i] : o.ownerDocument ? o.ownerDocument.defaultView[n] : o[a]
        }

        function jn(o, r, t) {
            let n, i;
            if (o.totalToScroll <= 0) return !1;
            const a = o.isWindow ? o.scrolled : o.height + o.scrolled;
            return t ? (n = (o.totalToScroll - a) / o.totalToScroll, i = r.down / 10) : (n = o.scrolled / (o.scrolled + (o.totalToScroll - a)), i = r.up / 10), n <= i
        }

        class eo {
            constructor({totalToScroll: r}) {
                this.lastScrollPosition = 0, this.lastTotalToScroll = 0, this.totalToScroll = 0, this.triggered = {
                    down: 0,
                    up: 0
                }, this.totalToScroll = r
            }

            updateScrollPosition(r) {
                return this.lastScrollPosition = r
            }

            updateTotalToScroll(r) {
                this.lastTotalToScroll !== r && (this.lastTotalToScroll = this.totalToScroll, this.totalToScroll = r)
            }

            updateScroll(r, t) {
                this.updateScrollPosition(r), this.updateTotalToScroll(t)
            }

            updateTriggeredFlag(r, t) {
                t ? this.triggered.down = r : this.triggered.up = r
            }

            isTriggeredScroll(r, t) {
                return t ? this.triggered.down === r : this.triggered.up === r
            }
        }

        function to(o) {
            const {scrollContainer: r, scrollWindow: t, element: n, fromRoot: i} = o,
                a = function ({windowElement: o, axis: r}) {
                    return function (o, r) {
                        const t = o.isWindow || r && !r.nativeElement ? r : r.nativeElement;
                        return Object.assign(Object.assign({}, o), {container: t})
                    }({axis: r, isWindow: Jn(o)}, o)
                }({axis: new Rn(!o.horizontal), windowElement: je(r, t, n, i)}), s = new eo({totalToScroll: Dt(n, a)}),
                l = {up: o.upDistance, down: o.downDistance};
            return function (o) {
                let r = (0, fe.R)(o.container, "scroll");
                return o.throttle && (r = r.pipe((0, Ft.p)(o.throttle))), r
            }({
                container: a.container,
                throttle: o.throttle
            }).pipe((0, re.zg)(() => (0, V.of)(Dt(n, a))), (0, S.U)(g => function (o, r, t) {
                const {scrollDown: n, fire: i} = function (o, r, t) {
                    const n = function (o, r) {
                        return o < r.scrolled
                    }(o, r);
                    return {fire: jn(r, t, n), scrollDown: n}
                }(o, r, t);
                return {scrollDown: n, fire: i, stats: r}
            }(s.lastScrollPosition, g, l)), (0, w.b)(({stats: g}) => s.updateScroll(g.scrolled, g.totalToScroll)), (0, P.h)(({
                                                                                                                                 fire: g,
                                                                                                                                 scrollDown: b,
                                                                                                                                 stats: {totalToScroll: C}
                                                                                                                             }) => function (o, r, t) {
                return !!(o && r || !t && r)
            }(o.alwaysCallback, g, s.isTriggeredScroll(C, b))), (0, w.b)(({
                                                                              scrollDown: g,
                                                                              stats: {totalToScroll: b}
                                                                          }) => {
                s.updateTriggeredFlag(b, g)
            }), (0, S.U)(io))
        }

        function io(o) {
            const {scrollDown: r, stats: {scrolled: t}} = o;
            return {type: r ? "[NGX_ISE] DOWN" : "[NGX_ISE] UP", payload: {currentScrollPosition: t}}
        }

        let tt = (() => {
            class o {
                constructor(t, n) {
                    this.element = t, this.zone = n, this.scrolled = new e.vpe, this.scrolledUp = new e.vpe, this.infiniteScrollDistance = 3.5, this.infiniteScrollUpDistance = 1.5, this.infiniteScrollThrottle = 50, this.infiniteScrollDisabled = !1, this.infiniteScrollContainer = null, this.scrollWindow = !0, this.immediateCheck = 1, this.horizontal = !1, this.alwaysCallback = !1, this.fromRoot = !1
                }

                ngAfterViewInit() {
                    this.infiniteScrollDisabled || this.setup()
                }

                ngOnChanges({infiniteScrollContainer: t, infiniteScrollDisabled: n, infiniteScrollDistance: i}) {
                    const a = Ke(t), s = Ke(n), c = Ke(i),
                        l = !s && !this.infiniteScrollDisabled || s && !n.currentValue || c;
                    (a || s || c) && (this.destroyScroller(), l && this.setup())
                }

                setup() {
                    "undefined" != typeof window && this.zone.runOutsideAngular(() => {
                        this.disposeScroller = to({
                            fromRoot: this.fromRoot,
                            alwaysCallback: this.alwaysCallback,
                            disable: this.infiniteScrollDisabled,
                            downDistance: this.infiniteScrollDistance,
                            element: this.element,
                            horizontal: this.horizontal,
                            scrollContainer: this.infiniteScrollContainer,
                            scrollWindow: this.scrollWindow,
                            throttle: this.infiniteScrollThrottle,
                            upDistance: this.infiniteScrollUpDistance
                        }).subscribe(t => this.zone.run(() => this.handleOnScroll(t)))
                    })
                }

                handleOnScroll({type: t, payload: n}) {
                    switch (t) {
                        case"[NGX_ISE] DOWN":
                            return this.scrolled.emit(n);
                        case"[NGX_ISE] UP":
                            return this.scrolledUp.emit(n);
                        default:
                            return
                    }
                }

                ngOnDestroy() {
                    this.destroyScroller()
                }

                destroyScroller() {
                    this.disposeScroller && this.disposeScroller.unsubscribe()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(e.SBq), e.Y36(e.R0b))
            }, o.\u0275dir = e.lG2({
                type: o,
                selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
                inputs: {
                    infiniteScrollDistance: "infiniteScrollDistance",
                    infiniteScrollUpDistance: "infiniteScrollUpDistance",
                    infiniteScrollThrottle: "infiniteScrollThrottle",
                    infiniteScrollDisabled: "infiniteScrollDisabled",
                    infiniteScrollContainer: "infiniteScrollContainer",
                    scrollWindow: "scrollWindow",
                    immediateCheck: "immediateCheck",
                    horizontal: "horizontal",
                    alwaysCallback: "alwaysCallback",
                    fromRoot: "fromRoot"
                },
                outputs: {scrolled: "scrolled", scrolledUp: "scrolledUp"},
                features: [e.TTD]
            }), o
        })(), ro = (() => {
            class o {
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275mod = e.oAB({type: o}), o.\u0275inj = e.cJS({providers: [], imports: [[]]}), o
        })();
        var d = p(69808), I = p(93075), Ut = p(52909), nt = p(40520), h = p(73307), B = p(28510), R = p(591),
            M = p(8929), ao = p(30567), ot = p(98723), x = p(72986), u = p(7625), it = p(27221), qt = p(22313);
        const so = ["iframe"];
        let Et = (() => {
            class o {
                constructor(t, n, i) {
                    this.sanitizer = t, this.modalService = n, this.environment = i, this.src = "", this.isIFrame = a => null !== a && "IFRAME" === a.tagName
                }

                get desktopClass() {
                    return "desktop" === this.environment.clientType
                }

                ngOnInit() {
                    this.src && (this.sanitizedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.src)), this.boundEventListener = this.eventListener.bind(this), window.addEventListener("message", this.boundEventListener, !1)
                }

                ngOnDestroy() {
                    this.removeEventListener()
                }

                removeEventListener() {
                    window.removeEventListener("message", this.boundEventListener)
                }

                onIframeLoad() {
                    this.postMessageData && this.sendPostMessage()
                }

                sendPostMessage() {
                    console.log("iframeHost->sendPostMessage() trying to send post message");
                    const t = this.iframe.nativeElement;
                    this.isIFrame(t) && t.contentWindow && (console.log("iframeHost->sendPostMessage() sending", this.postMessageData), t.contentWindow.postMessage(this.postMessageData, "*"))
                }

                eventListener(t) {
                    !t.data || !t.data.imco || (t.data.imco.close && (console.log("iframeHost->eventListener() event: close"), this.close()), t.data.imco.paymentsReady && (console.log("iframeHost->eventListener() event: paymentsReady"), this.onIframeLoad()))
                }

                close() {
                    this.removeEventListener(), this.modalService.hasOpenModals() && this.modalService.dismissAll()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(qt.H7), e.Y36(B.Qz), e.Y36(h.Ho))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-iframe-host"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(so, 5), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.iframe = i.first)
                    }
                },
                hostVars: 2,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("desktopEnvironment", n.desktopClass)
                },
                inputs: {src: "src", postMessageData: "postMessageData"},
                decls: 2,
                vars: 1,
                consts: [["id", "iframe", "frameborder", "0", 1, "iframe", 3, "src"], ["iframe", ""]],
                template: function (t, n) {
                    1 & t && e._UZ(0, "iframe", 0, 1), 2 & t && e.Q6J("src", n.sanitizedSrc, e.uOi)
                },
                styles: ["[_nghost-%COMP%]{width:100vw;height:100vh;border:0;display:flex;align-items:center;justify-content:center}.desktopEnvironment[_nghost-%COMP%]{height:calc(calc(var(--vh) * 100) - 28px)}.iframe[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute}@media only screen and (min-width: 1020px){.iframe[_ngcontent-%COMP%]{max-height:800px;max-width:1020px}}"]
            }), o
        })();
        var rt = p(7203);
        let Nt = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.environment = t, this.authService = n, this.http = i, this.modalService = a, this.authHostService = s, this._catalog = new R.X([]), this._activeDiscount = new R.X(null), this.dataStore = {
                        catalog: [],
                        activeDiscount: null
                    }, this.unsubscribe = new M.xQ
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get catalog$() {
                    return this._catalog.asObservable()
                }

                get activeDiscount$() {
                    return this._activeDiscount.asObservable()
                }

                fetchCatalog() {
                    this.catalogApi$().pipe((0, x.q)(1), (0, w.b)(t => this.handleDiscount(t)), (0, S.U)(t => t.products.map(n => this.formatPriceEth$(n))), (0, re.zg)(t => (0, ao.D)(t))).subscribe(t => {
                        console.log("PlatformPaymentsService->fetchCatalog()", t), this.dataStore.catalog = t, this._catalog.next([...this.dataStore.catalog])
                    })
                }

                handleDiscount(t) {
                    if (console.log("PlatformPaymentsService->handleDiscount()", t), !t.discountEnd) return void this.clearActiveDiscount();
                    const n = Date.now(), i = 1e3 * t.discountEnd - n;
                    console.log("PlatformPaymentsService->handleDiscount() timeToRefresh", i), i < 0 || (this.dataStore.activeDiscount = {
                        endTimestamp: t.discountEnd,
                        discountAmount: this.maxDiscount(t),
                        countdownSubscription: (0, ot.H)(i).pipe((0, u.R)(this.unsubscribe), (0, x.q)(1)).subscribe(a => this.fetchCatalog())
                    }, console.log("PlatformPaymentsService->handleDiscount() discount detected!", this.dataStore.activeDiscount), console.log("PlatformPaymentsService->handleDiscount() refreshing in ", i), console.log("PlatformPaymentsService->handleDiscount() endTimestamp ", this.dataStore.activeDiscount.endTimestamp), this._activeDiscount.next(this.dataStore.activeDiscount))
                }

                clearActiveDiscount() {
                    this.dataStore.activeDiscount && this.dataStore.activeDiscount.countdownSubscription && this.dataStore.activeDiscount.countdownSubscription.unsubscribe(), this.dataStore.activeDiscount = null, this._activeDiscount.next(null)
                }

                maxDiscount(t) {
                    return t.products.map(a => a.discount || 0).reduce((a, s) => s > a ? s : a, 0)
                }

                catalogApi$() {
                    return this.environment.production ? this.authHostService.get("/impay/catalog") : this.http.get("https://test-auth.apollo.gg/impay/catalog")
                }

                purchaseTokenApi$(t = !0) {
                    const n = this.authService.getUserId(), i = this.authService.getAuthHeader();
                    return this.environment.production ? this.authHostService.post(`/impay/${n}/create`, null, i) : this.http.post(`https://test-auth.apollo.gg/impay/${n}/create`, {}, {headers: i})
                }

                fetchPurchaseToken$(t = !0) {
                    return this.purchaseTokenApi$(t).pipe((0, it.K)(n => 401 === n.status && t ? this.authService.refreshToken().pipe((0, re.VS)(i => this.fetchPurchaseToken$(!1))) : (0, V.of)(n)))
                }

                launchShopFront(t, n, i) {
                    this.modalService.hasOpenModals() && this.modalService.dismissAll(), this.fetchPurchaseToken$().pipe((0, x.q)(1)).subscribe(({token: a}) => {
                        console.log("referrer", i);
                        const s = this.purchasingUiUrl("shop-front"), c = this.shopFrontQueryParams(t),
                            g = this.modalService.open(Et, {defaultStylings: !1, centered: !0}).componentInstance;
                        g.src = `${s}${c}`, this.postMessageData$(a, n, i).pipe((0, x.q)(1)).subscribe(b => {
                            g.postMessageData = b
                        })
                    })
                }

                shopFrontQueryParams(t) {
                    let n = "";
                    return t.forEach(i => {
                        !i || (n = `${n}&sku=${i.item.sku}-${i.quantity}`)
                    }), n
                }

                postMessageData$(t, n, i) {
                    return this.authService.account$.pipe((0, x.q)(1), (0, S.U)(a => ({
                        imco: {
                            token: t,
                            referrer: i,
                            currency: n,
                            userName: a.username,
                            appName: "Gods Unchained",
                            domain: "godsunchained.com"
                        }
                    })))
                }

                purchasingUiUrl(t) {
                    return `${this.environment.purchasingUiHost}/${t}?appId=com.immutable.gods-unchained`
                }

                launchHistory() {
                    this.modalService.hasOpenModals() && this.modalService.dismissAll(), this.fetchPurchaseToken$().pipe((0, x.q)(1)).subscribe(({token: t}) => {
                        const n = this.purchasingUiUrl("purchase-history"),
                            a = this.modalService.open(Et, {defaultStylings: !1, centered: !0}).componentInstance;
                        a.src = n, this.postMessageData$(t).pipe((0, x.q)(1)).subscribe(s => {
                            a.postMessageData = s
                        })
                    })
                }

                formatPriceEth$(t) {
                    return this.usdToEth$(Number(t.price)).pipe((0, x.q)(1), (0, S.U)(n => Object.assign(Object.assign({}, t), {priceEth: Ut.O$.from(n.WEI._hex)})), (0, it.K)(n => (0, V.of)(t)))
                }

                usdToEth$(t) {
                    const n = {value: t};
                    let i = new nt.WM;
                    return i = i.append(rt.Se, ""), i = i.append("Authorization", this.environment.purchasingApiKey), this.http.post(`${this.environment.purchasingApiHost}/purchasing-info/currency-conversion`, n, {headers: i})
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(h.Ho), e.LFG(h.mI), e.LFG(nt.eN), e.LFG(B.Qz), e.LFG(h.LI))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac, providedIn: "root"}), o
        })();
        var _ = p(61377), ae = p(1639), T = p(66088), po = p(49757), de = p(11735), at = p(20991), Y = p(64523),
            st = p(75778), v = p(41777);
        const Rt = {opacity: 0, transform: "translateY(-14px)"},
            mo = (0, v.X$)("shiftAndFadeAnimation", [(0, v.eR)("* => *", [(0, v.IO)(":enter", [(0, v.oB)(Rt)], {optional: !0}), (0, v.IO)(":leave", [(0, v.oB)({
                opacity: 1,
                transform: "translateY(0px)"
            }), (0, v.jt)("150ms ease-in-out", (0, v.oB)({
                opacity: 0,
                transform: "translateY(5px)"
            }))], {optional: !0}), (0, v.IO)(":enter", [(0, v.oB)(Rt), (0, v.jt)("150ms ease-in-out", (0, v.oB)({
                opacity: 1,
                transform: "translateY(0px)"
            }))], {optional: !0})])]);
        (0, v.X$)("fadeAnimation", [(0, v.eR)("* => *", [(0, v.IO)(":enter", [(0, v.oB)({opacity: 0})], {optional: !0}), (0, v.IO)(":leave", [(0, v.oB)({opacity: 1}), (0, v.jt)("200ms ease-in", (0, v.oB)({opacity: 0}))], {optional: !0}), (0, v.IO)(":enter", [(0, v.oB)({opacity: 0}), (0, v.jt)("200ms ease-out", (0, v.oB)({opacity: 1}))], {optional: !0})])]), p(63411);
        let Ue = (() => {
            class o {
                constructor() {
                    this.createListeners = {}, this.destroyListeners = {}
                }

                onContainerCreated(t, n) {
                    t = t.toLowerCase(), this.createListeners[t] = (this.createListeners[t] || []).concat(n)
                }

                onContainerDestroyed(t, n) {
                    t = t.toLowerCase(), this.destroyListeners[t] = (this.destroyListeners[t] || []).concat(n)
                }

                registerContainer(t, n, i) {
                    this.createListeners[t.toLowerCase()].forEach(a => a(n, i))
                }

                destroyContainer(t, n, i) {
                    this.destroyListeners[t.toLowerCase()].forEach(a => a(n, i))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();
        var m = p(52492), qe = p(79763), fo = p(24058), O = p(33403), j = p(98009), te = p(70655), Qt = p(61737),
            Ce = p(87545), f = p(52886), he = p(23569);

        class Co {
            constructor(r, t, n, i) {
                this.card = r, this.gridRowIndex = t, this.groupingIndex = n, this.cardRowIndex = i
            }
        }

        var N = (() => {
            return (o = N || (N = {}))[o.FORGING = 0] = "FORGING", o[o.SIGNING = 1] = "SIGNING", o[o.SELLING = 2] = "SELLING", N;
            var o
        })();
        let Se = (() => {
            class o {
                constructor() {
                    this.alive = !0, this.dataStore = {expandedCard: null}, this._expandedCard$ = new R.X(null)
                }

                ngOnDestroy() {
                    this.alive = !1
                }

                get expandedCard$() {
                    return this._expandedCard$.asObservable()
                }

                emitExpandedCard(t) {
                    this.dataStore.expandedCard = t, this._expandedCard$.next(Object.assign({}, this.dataStore).expandedCard)
                }

                expandCard(t, n, i, a) {
                    if (this.dataStore.expandedCard && this.dataStore.expandedCard.card.pc.proto === t.pc.proto) this.emitExpandedCard(null); else {
                        const s = new Co(t, n, i, a);
                        this.emitExpandedCard(s)
                    }
                }

                resetCardGrid() {
                    this.emitExpandedCard(null)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();

        class vo {
            constructor(r, t, n = [], i) {
                this.proto = r, this.quality = t, this.ids = n, this.keptId = i
            }
        }

        let ge = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k) {
                    this.gameApi = t, this.authService = n, this.cardsService = i, this.decksService = a, this.cardGridService = s, this.audioService = c, this.http = l, this.forgeWalletService = g, this.moduleConfigService = b, this.storageService = C, this.tokenRefreshService = k, this.unsubscribe = new M.xQ, this.alive = !0, this.dataStore = {
                        forgeCards: null,
                        previewCard: null,
                        fusingLevels: null,
                        transactionInProgress: null
                    }, this._forgeCards$ = new R.X(null), this._previewCard$ = new R.X(null), this._fusingLevels$ = new R.X(null), this._transactionInProgress$ = new R.X(null), this.moduleConfig$ = this.moduleConfigService.loadConfigurations(), this.watchForLogout()
                }

                watchForLogout() {
                    this.authService.account$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => null === t)).subscribe(t => {
                        this.emitForgeCards(null), this.emitPreviewCard(null)
                    })
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get forgeCards$() {
                    return this._forgeCards$.asObservable()
                }

                get previewCard$() {
                    return this._previewCard$.asObservable()
                }

                get fusingLevels$() {
                    return this._fusingLevels$.asObservable()
                }

                get transactionInProgress$() {
                    return this._transactionInProgress$.asObservable()
                }

                setTransactionInProgress(t) {
                    this.dataStore.transactionInProgress = t, this._transactionInProgress$.next(Object.assign(this.dataStore, {}).transactionInProgress)
                }

                clearTransactionInProgress() {
                    this.dataStore.transactionInProgress = void 0, this._transactionInProgress$.next(Object.assign(this.dataStore, {}).transactionInProgress)
                }

                emitForgeCards(t) {
                    this.dataStore.forgeCards = t, this._forgeCards$.next(this.dataStore.forgeCards)
                }

                emitPreviewCard(t) {
                    this.dataStore.previewCard = t, this._previewCard$.next(this.dataStore.previewCard)
                }

                fetchFusingLevels() {
                    this.gameApi.get("/fusing_levels").pipe((0, x.q)(1), (0, S.U)(t => {
                        const n = {};
                        for (const i in f.nJ) if ("number" == typeof f.nJ[i]) {
                            const a = t.find(s => s.quality === f.nJ[i]);
                            n[f.nJ[i]] = a
                        }
                        return n
                    })).subscribe(t => {
                        this.fusingLevels = t, this.dataStore.fusingLevels = t, this._fusingLevels$.next(Object.assign(this.dataStore, {}).fusingLevels)
                    })
                }

                isFuseableQualityMap(t, n) {
                    let i = !1;
                    return t.forEach((a, s) => {
                        this.isFuseable(a, s, n) && (i = !0)
                    }), i
                }

                isFuseable(t, n, i) {
                    if (n !== f.nJ.PLAIN) return !1;
                    const a = this.numberOfQualityToForgeSync(n, i);
                    return -1 !== a && t.length >= a
                }

                updateKeptId(t, n, i) {
                    if (null === this.dataStore.forgeCards || this.dataStore.forgeCards.proto !== t || this.dataStore.forgeCards.quality !== n) return !1;
                    const a = Object.assign(Object.assign({}, this.dataStore.forgeCards), {keptId: i});
                    this.audioService.forgeSelectCard.play(), this.emitForgeCards(a)
                }

                canAddToForge(t, n, i) {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        if (null === this.dataStore.forgeCards || this.dataStore.forgeCards.proto !== t || this.dataStore.forgeCards.quality !== n) return !0;
                        const a = yield this.numberOfQualityToForge(n);
                        return !(this.dataStore.forgeCards.ids.length >= a)
                    })
                }

                addToForge(t, n, i) {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        if (!(yield this.canAddToForge(t, n, i))) return !1;
                        const c = null === this.dataStore.forgeCards || this.dataStore.forgeCards.proto !== t || this.dataStore.forgeCards.quality !== n ? new vo(t, n, [i], i) : Object.assign(Object.assign({}, this.dataStore.forgeCards), {ids: [...this.dataStore.forgeCards.ids, i]});
                        this.emitForgeCards(c), this.updatePreviewCard();
                        const l = yield this.numberOfQualityToForge(n);
                        this.dataStore.forgeCards.ids.length >= l ? (this.audioService.forgeSelectCard.play(), this.audioService.forgeHeatingUp.play()) : this.audioService.forgeSelectCard.play()
                    })
                }

                removeFromForge(t, n, i) {
                    if (null === this.dataStore.forgeCards) return !1;
                    if (this.dataStore.forgeCards.ids.some(a => a === i)) {
                        const a = this.dataStore.forgeCards.ids.filter(l => l !== i),
                            s = i === this.dataStore.forgeCards.keptId ? a[0] : this.dataStore.forgeCards.keptId,
                            c = Object.assign(Object.assign({}, this.dataStore.forgeCards), {ids: a, keptId: s});
                        return this.emitForgeCards(0 === c.ids.length ? null : c), this.updatePreviewCard(), !0
                    }
                    return !1
                }

                updatePreviewCard() {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        if (!this.dataStore.forgeCards) return void this.emitPreviewCard(null);
                        const t = yield this.numberOfQualityToForge(this.dataStore.forgeCards.quality);
                        this.emitPreviewCard(this.dataStore.forgeCards && this.dataStore.forgeCards.ids.length === t ? {
                            protoId: this.dataStore.forgeCards.proto,
                            quality: this.getNextQuality(this.dataStore.forgeCards.quality)
                        } : null)
                    })
                }

                numberOfQualityToForgeSync(t, n) {
                    return n[t] ? n[t].amount : null
                }

                numberOfQualityToForge(t) {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        const n = yield this.fusingLevels$.pipe((0, P.h)(i => null !== i), (0, x.q)(1)).toPromise();
                        return n[t] ? n[t].amount : null
                    })
                }

                getNextQuality(t) {
                    switch (t) {
                        case f.nJ.DIAMOND:
                        case f.nJ.GOLD:
                            return f.nJ.DIAMOND;
                        case f.nJ.SHADOW:
                            return f.nJ.GOLD;
                        case f.nJ.METEORITE:
                            return f.nJ.SHADOW;
                        case f.nJ.PLAIN:
                            return f.nJ.METEORITE;
                        default:
                            return t
                    }
                }

                callForge(t = !1) {
                    if (!this.dataStore.forgeCards || void 0 === this.dataStore.forgeCards.keptId || !this.dataStore.forgeCards.ids) return (0, Qt._)("This is an error!");
                    const i = this.authService.getUserId(),
                        s = (this.authService.getGameSessionTicket(), this.dataStore.forgeCards.ids);
                    return this.moduleConfig$.pipe((0, Ce.w)(({fusingHost: c}) => this.forgeWalletService.selectedWallet$.pipe((0, S.U)(l => ({
                        wallet: l,
                        fusingHost: c
                    })))), (0, Ce.w)(({
                                          wallet: c,
                                          fusingHost: l
                                      }) => this.tokenRefreshService.autoRefreshToken(this.http.post(`${l}/forge/${t ? "validation" : ""}`, {
                        user_id: i,
                        address: c,
                        asset_id: [...s]
                    }))))
                }

                validateForge() {
                    return this.callForge(!0)
                }

                submitForge() {
                    return this.callForge()
                }

                postToForge(t) {
                    if (!this.dataStore.forgeCards || void 0 === this.dataStore.forgeCards.keptId || !this.dataStore.forgeCards.ids) return (0, Qt._)("This is an error!");
                    const n = this.dataStore.forgeCards.keptId, i = this.authService.getUserId(),
                        a = this.authService.getGameSessionTicket(),
                        s = this.dataStore.forgeCards.ids.filter(c => c !== n);
                    return this.forgeWalletService.loadSelectedWallet(), this.forgeWalletService.selectedWallet$.pipe((0, x.q)(1), (0, Ce.w)(c => this.gameApi.post(`/user/${i}/${t}?session=${a}`, {
                        card: n,
                        ids: s,
                        address: c
                    })))
                }

                finalizeForging() {
                    this.emitForgeCards(null), this.emitPreviewCard(null), this.cardGridService.resetCardGrid()
                }

                handleForgeSuccess() {
                    if (!this.dataStore.forgeCards) return !1;
                    const t = this.dataStore.forgeCards.ids, n = this.dataStore.forgeCards.proto,
                        i = this.dataStore.forgeCards.quality;
                    return this.cardsService.forgeUpdate(t, n, this.getNextQuality(i)), this.decksService.forgeUpdate(t, n, this.getNextQuality(i)), this.finalizeForging(), (0, V.of)(!0)
                }

                postTxHashForTracking(t) {
                    return this.moduleConfig$.pipe((0, Ce.w)(n => this.http.post(`${n.walletAPIHost}/tracking`, t)))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.Ft), e.LFG(h.mI), e.LFG(_.dK), e.LFG(j.D), e.LFG(Se), e.LFG(h.pk), e.LFG(nt.eN), e.LFG(he.d), e.LFG(_.LE), e.LFG(h.qy), e.LFG(_.$))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })(), ve = (() => {
            class o {
                constructor(t, n) {
                    this.gameApi = t, this.authService = n, this.unsubscribe = new M.xQ, this.dataStore = {
                        gauntletSlots: [],
                        gauntletFlux: 0,
                        refreshDate: null
                    }, this._gauntletSlots$ = new R.X([]), this._gauntletFlux$ = new R.X(0), this._refreshDate$ = new R.X(null)
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get gauntletSlots$() {
                    return this._gauntletSlots$.asObservable()
                }

                get gauntletFlux$() {
                    return this._gauntletFlux$.asObservable()
                }

                get refreshDate$() {
                    return this._refreshDate$.asObservable()
                }

                fetchGauntletSlots() {
                    const t = this.authService.getUserId();
                    this.gameApi.get(`/user/${t}/gauntlet`).pipe((0, x.q)(1), (0, S.U)(n => this.validateGauntletSlots(n))).subscribe(([n, i, a]) => {
                        this.dataStore.gauntletSlots = n, this._gauntletSlots$.next(Object.assign({}, this.dataStore).gauntletSlots), this.dataStore.gauntletFlux = i, this._gauntletFlux$.next(Object.assign({}, this.dataStore).gauntletFlux), a && this.watchForReset(a)
                    })
                }

                validateGauntletSlots(t) {
                    if (!t || !t.created_at) return [[], 0, null];
                    const n = Date.parse(t.created_at);
                    return Date.now() - n >= this.msInDay ? [[], 0, null] : [t.god_info, t.flux, t.created_at]
                }

                get msInDay() {
                    return 864e5
                }

                watchForReset(t) {
                    const n = Date.parse(t), i = new Date(n + this.msInDay + 5e3), a = i.getTime() - Date.now();
                    this.dataStore.refreshDate = i, this._refreshDate$.next(Object.assign({}, this.dataStore).refreshDate), (0, ot.H)(a).pipe((0, u.R)(this.unsubscribe), (0, x.q)(1)).subscribe(s => {
                        this.fetchGauntletSlots()
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.Ft), e.LFG(h.mI))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac, providedIn: "root"}), o
        })();
        var X = p(11130), ne = p(88632), D = p(36053);
        let pe = (() => {
            class o {
                constructor(t, n, i) {
                    this.gameApi = t, this.authService = n, this.assetsService = i, this.dataStore = {
                        allBoards: [],
                        ownedBoards: [],
                        allTrinkets: [],
                        ownedTrinkets: [],
                        loadouts: [],
                        protoCollectables: []
                    }, this._allBoards$ = new R.X([]), this._ownedBoards$ = new R.X([]), this._allTrinkets$ = new R.X([]), this._ownedTrinkets$ = new R.X([]), this._loadouts$ = new R.X([]), this._protoCollectables$ = new R.X([])
                }

                ngOnDestroy() {
                }

                get protoCollectables$() {
                    return this._protoCollectables$.asObservable()
                }

                get allBoards$() {
                    return this._allBoards$.asObservable()
                }

                get ownedBoards$() {
                    return this._ownedBoards$.asObservable()
                }

                get allTrinkets$() {
                    return this._allTrinkets$.asObservable()
                }

                get ownedTrinkets$() {
                    return this._ownedTrinkets$.asObservable()
                }

                get loadouts$() {
                    return this._loadouts$.asObservable()
                }

                fetchData() {
                    (0, D.aj)([this.fetchProtoCollectables(), this.assetsService.getBoardsAndTrinkets(), this.fetchAllLoadouts()]).pipe((0, x.q)(1)).subscribe(([t, n, i]) => {
                        this.emitProtoCollectables(t);
                        const a = n.filter(c => "board" === c.type).map(c => Object.assign(Object.assign(Object.assign({}, c), c.class_properties), {owned: !0}));
                        this.emitOwnedBoards(a), this.emitAllBoards(this.buildOutAllBoards(t, a));
                        const s = n.filter(c => "trinket" === c.type).map(c => Object.assign(Object.assign(Object.assign({}, c), c.class_properties), {owned: !0}));
                        this.emitOwnedTrinkets(s), this.emitAllTrinkets(this.buildOutAllTrinkets(t, s)), i && this.emitLoadouts(this.buildOutLoadouts(i))
                    })
                }

                buildOutAllBoards(t, n) {
                    const i = [...n];
                    return t.filter(s => "board" === s.type).forEach(s => {
                        this.isCollectableOwned(s.type, s.proto) || i.push(Object.assign(Object.assign({}, s), {owned: !1}))
                    }), i
                }

                buildOutAllTrinkets(t, n) {
                    const i = [...n];
                    return t.filter(s => "trinket" === s.type).forEach(s => {
                        this.isCollectableOwned(s.type, s.proto) || i.push(Object.assign(Object.assign({}, s), {owned: !1}))
                    }), i
                }

                buildOutLoadouts(t) {
                    const n = [];
                    return t.forEach(i => {
                        n.push(this.buildOutLoadout(i))
                    }), n
                }

                buildOutLoadout(t) {
                    return {
                        collection_id: t.collection_id,
                        board: this.dataStore.ownedBoards.find(n => n.asset_id === t.board.asset_id),
                        trinkets: t.trinket.map(n => Object.assign(Object.assign({}, n), this.dataStore.ownedTrinkets.find(i => i.asset_id === n.asset_id)))
                    }
                }

                isCollectableOwned(t, n) {
                    return !!this.dataStore[`owned${t.charAt(0).toUpperCase() + t.substring(1)}s`].find(i => i.proto === n)
                }

                emitProtoCollectables(t) {
                    this.dataStore.protoCollectables = t, this._protoCollectables$.next([...this.dataStore.protoCollectables])
                }

                emitAllBoards(t) {
                    this.dataStore.allBoards = t, this._allBoards$.next([...this.dataStore.allBoards])
                }

                emitOwnedBoards(t) {
                    this.dataStore.ownedBoards = t, this._ownedBoards$.next([...this.dataStore.ownedBoards])
                }

                emitOwnedTrinkets(t) {
                    this.dataStore.ownedTrinkets = t, this._ownedTrinkets$.next([...this.dataStore.ownedTrinkets])
                }

                emitAllTrinkets(t) {
                    this.dataStore.allTrinkets = t, this._allTrinkets$.next([...this.dataStore.allTrinkets])
                }

                emitLoadouts(t) {
                    this.dataStore.loadouts = t, this._loadouts$.next([...this.dataStore.loadouts])
                }

                fetchProtoCollectables() {
                    const t = this.authService.getUserId();
                    return this.gameApi.get(`/user/${t}/protocollectable`)
                }

                fetchAllLoadouts() {
                    const t = this.authService.getUserId(), n = this.authService.getGameSessionTicket();
                    return this.gameApi.get(`/user/${t}/collection?session=${n}`)
                }

                fetchLoadout(t) {
                    const n = this.authService.getUserId(), i = this.authService.getGameSessionTicket();
                    return this.gameApi.get(`/user/${n}/collection/${t}?session=${i}`)
                }

                createNewLoadout(t) {
                    const n = this.authService.getUserId(), i = this.authService.getGameSessionTicket();
                    return this.gameApi.post(`/user/${n}/collection?session=${i}`, t).pipe((0, x.q)(1), (0, w.b)(a => {
                        this.getThenUpdateLocalLoadouts(a, !0)
                    }))
                }

                updateLoadout(t) {
                    const n = this.authService.getUserId(), i = this.authService.getGameSessionTicket();
                    return this.gameApi.put(`/user/${n}/collection/${t.collection_id}?session=${i}`, t).pipe((0, x.q)(1), (0, w.b)(a => {
                        this.getThenUpdateLocalLoadouts(a)
                    }))
                }

                getThenUpdateLocalLoadouts(t, n) {
                    this.fetchLoadout(t).pipe((0, x.q)(1)).subscribe(i => {
                        let a = [];
                        if (n) a = [...this.dataStore.loadouts, this.buildOutLoadout(i)]; else {
                            const s = this.dataStore.loadouts.find(l => l.collection_id === t),
                                c = this.dataStore.loadouts.indexOf(s);
                            a = [...this.dataStore.loadouts.slice(0, c), this.buildOutLoadout(i), ...this.dataStore.loadouts.slice(c + 1)]
                        }
                        this.emitLoadouts(a)
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.Ft), e.LFG(h.mI), e.LFG(h.eQ))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();
        var W, Re, J = p(8561), $ = p(47313), Te = p(59633), y = p(49749), ct = p(62701), Ee = p(65171), Ne = p(65281),
            me = p(51395), K = p(6674), Ht = function () {
                return W || "undefined" != typeof window && (W = window.gsap) && W.registerPlugin && W
            }, lt = function (r, t) {
                return !!(void 0 === r ? t : r && !~(r + "").indexOf("false"))
            }, wo = function (r) {
                if (W = r || Ht()) {
                    Re = W.registerEase;
                    var i, t = W.parseEase(), n = function (s) {
                        return function (c) {
                            var l = .5 + c / 2;
                            s.config = function (g) {
                                return s(2 * (1 - g) * g * l + g * g)
                            }
                        }
                    };
                    for (i in t) t[i].config || n(t[i]);
                    for (i in Re("slow", be), Re("expoScale", gt), Re("rough", oe), Ae) "version" !== i && W.core.globals(i, Ae[i])
                }
            }, Yt = function (r, t, n) {
                var i = (r = Math.min(1, r || .7)) < 1 ? t || 0 === t ? t : .7 : 0, a = (1 - r) / 2, s = a + r, c = lt(n);
                return function (l) {
                    var g = l + (.5 - l) * i;
                    return l < a ? c ? 1 - (l = 1 - l / a) * l : g - (l = 1 - l / a) * l * l * l * g : l > s ? c ? 1 === l ? 0 : 1 - (l = (l - s) / a) * l : g + (l - g) * (l = (l - s) / a) * l * l * l : c ? 1 : g
                }
            }, Jt = function (r, t, n) {
                var i = Math.log(t / r), a = t - r;
                return n && (n = W.parseEase(n)), function (s) {
                    return (r * Math.exp(i * (n ? n(s) : s)) - r) / a
                }
            }, dt = function (r, t, n) {
                this.t = r, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - r)
            }, $t = function (r) {
                "object" != typeof r && (r = {points: +r || 20});
                for (var C, k, A, G, U, q, z, t = r.taper || "none", n = [], i = 0, a = 0 | (+r.points || 20), s = a, c = lt(r.randomize, !0), l = lt(r.clamp), g = W ? W.parseEase(r.template) : 0, b = .4 * (+r.strength || 1); --s > -1;) C = c ? Math.random() : 1 / a * s, k = g ? g(C) : C, A = "none" === t ? b : "out" === t ? (G = 1 - C) * G * b : "in" === t ? C * C * b : C < .5 ? (G = 2 * C) * G * .5 * b : (G = 2 * (1 - C)) * G * .5 * b, c ? k += Math.random() * A - .5 * A : s % 2 ? k += .5 * A : k -= .5 * A, l && (k > 1 ? k = 1 : k < 0 && (k = 0)), n[i++] = {
                    x: C,
                    y: k
                };
                for (n.sort(function (ee, E) {
                    return ee.x - E.x
                }), q = new dt(1, 1, null), s = a; s--;) q = new dt((U = n[s]).x, U.y, q);
                return z = new dt(0, 0, q.t ? q : q.next), function (ee) {
                    var E = z;
                    if (ee > E.t) {
                        for (; E.next && ee >= E.t;) E = E.next;
                        E = E.prev
                    } else for (; E.prev && ee <= E.t;) E = E.prev;
                    return z = E, E.v + (ee - E.t) / E.gap * E.c
                }
            }, be = Yt(.7);
        be.ease = be, be.config = Yt;
        var gt = Jt(1, 2);
        gt.config = Jt;
        var oe = $t();
        oe.ease = oe, oe.config = $t;
        var Ae = {SlowMo: be, RoughEase: oe, ExpoScaleEase: gt};
        for (var Wt in Ae) Ae[Wt].register = wo, Ae[Wt].version = "3.8.0";
        Ht() && W.registerPlugin(be);
        const xo = ["progressBar"], Mo = function (o, r) {
            return {"progressBar__divider--text--gameModeCard": o, "progressBar__divider--text--overlay": r}
        };

        function yo(o, r) {
            if (1 & o && (e.TgZ(0, "span", 3), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Udp("left", t.dividerPercentage + "%"), e.Q6J("ngClass", e.WLB(4, Mo, t.forGameModeCard, t.overlayDivderText)), e.xp6(1), e.hij(" ", t.dividerText, "\n")
            }
        }

        function ko(o, r) {
            if (1 & o && e._UZ(0, "span"), 2 & o) {
                const t = e.oxw();
                e.Gre("progressBar__divider progressBar__divider--", t.dividerOpacity, ""), e.Udp("left", t.dividerPercentage + "%")
            }
        }

        const Oo = function (o, r) {
            return {"progressBar__bar--supressAnimation": o, "progressBar__bar--empty": r}
        };

        function Po(o, r) {
            if (1 & o && e._UZ(0, "div", 4, 5), 2 & o) {
                const t = e.oxw();
                e.Gre("progressBar__bar progressBar__bar--", t.color, ""), e.Udp("width", t.percentage, "%"), e.Q6J("ngClass", e.WLB(7, Oo, t.supressAnimation, 0 === t.percentage)), e.uIk("aria-valuenow", t.percentage)
            }
        }

        let Ie = (() => {
            class o {
                constructor(t) {
                    this.elRef = t, this.color = "gold", this.showDivider = !1, this.dividerOpacity = "low", this.dividerPercentage = 50, this.dividerText = "", this.forGameModeCard = !1, this.overlayDivderText = !1, this.animateFirstValue = !1, this.animateDuration = .3, this.supressAnimation = !1
                }

                get getHeight() {
                    return this.height
                }

                get getLeftPadding() {
                    return .2 * this.height
                }

                get getRightPadding() {
                    return .2 * this.height
                }

                ngOnInit() {
                }

                ngAfterViewInit() {
                    this.animateFirstValue && "number" == typeof this.percentage && (y.p8.set(this.progressBarDom.nativeElement, {width: "0%"}), y.p8.to(this.progressBarDom.nativeElement, {
                        duration: this.animateDuration,
                        width: `${this.percentage}%`
                    }))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(e.SBq))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-progress-bar"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(xo, 5), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.progressBarDom = i.first)
                    }
                },
                hostVars: 6,
                hostBindings: function (t, n) {
                    2 & t && e.Udp("height", n.getHeight, "px")("padding-left", n.getLeftPadding, "px")("padding-right", n.getRightPadding, "px")
                },
                inputs: {
                    color: "color",
                    margin: "margin",
                    height: "height",
                    showDivider: "showDivider",
                    dividerOpacity: "dividerOpacity",
                    dividerPercentage: "dividerPercentage",
                    dividerText: "dividerText",
                    forGameModeCard: "forGameModeCard",
                    overlayDivderText: "overlayDivderText",
                    animateFirstValue: "animateFirstValue",
                    percentage: "percentage",
                    animateDuration: "animateDuration",
                    supressAnimation: "supressAnimation",
                    application: "application"
                },
                decls: 3,
                vars: 3,
                consts: [["class", "progressBar__divider--text", 3, "left", "ngClass", 4, "ngIf"], [3, "class", "left", 4, "ngIf"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 3, "class", "ngClass", "width", 4, "ngIf"], [1, "progressBar__divider--text", 3, "ngClass"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 3, "ngClass"], ["progressBar", ""]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, yo, 2, 7, "span", 0), e.YNc(1, ko, 1, 5, "span", 1), e.YNc(2, Po, 2, 10, "div", 2)), 2 & t && (e.Q6J("ngIf", n.showDivider || n.overlayDivderText), e.xp6(1), e.Q6J("ngIf", n.showDivider), e.xp6(1), e.Q6J("ngIf", null !== n.percentage))
                },
                directives: [d.O5, d.mk],
                // Flux Progress Bar!
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .progressBar__divider--text--gameModeCard[_ngcontent-%COMP%], .progressBar__divider--text--overlay[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .progressBar__divider--text--gameModeCard[_ngcontent-%COMP%], .progressBar__divider--text--overlay[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.48)
                }
                
                .progressBar__divider--text--gameModeCard[_ngcontent-%COMP%], .progressBar__divider--text--overlay[_ngcontent-%COMP%] {
                    line-height: 1.4
                }
                
                [_nghost-%COMP%] {
                    border-radius: 4px;
                    position: relative;
                    display: flex;
                    padding-left: 3%;
                    padding-right: 3%;
                    background: var(--gu-blue-dark);
                }
                
                .progressBar__divider[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * .15);
                    left: 50%;
                    top: 0;
                    height: 100%;
                    position: absolute;
                    background: var(--gu-blue-hover);
                }
                
                .progressBar__divider--text[_ngcontent-%COMP%] {
                    bottom: 120%;
                    left: 50%;
                    font-weight: 700;
                    position: absolute;
                    transform: translate(-50%)
                }
                
                .progressBar__divider--text--overlay[_ngcontent-%COMP%] {
                    bottom: 0%;
                    left: 50%;
                    font-weight: 700;
                    position: absolute;
                    transform: translate(-50%)
                }
                
                .progressBar__divider--text--gameModeCard[_ngcontent-%COMP%] {
                    font-weight: 400;
                    color: #7192b0;
                    font-style: italic
                }
                
                .progressBar__bar[_ngcontent-%COMP%] {
                    border-radius: 2px;
                    margin: auto 0;
                    height: 60%;
                    transition: .5s all ease-in-out
                }
                
                .progressBar__bar--supressAnimation[_ngcontent-%COMP%] {
                    transition: none
                }
                
                .progressBar__bar--yellow[_ngcontent-%COMP%] {
                    background: var(--gu-yellow);
                }
                
                .progressBar__bar--blue[_ngcontent-%COMP%] {
                    background: var(--gu-blue);
                }
                
                .progressBar__bar--aqua[_ngcontent-%COMP%] {
                    background: var(--gu-blue);
                }
                
                .progressBar__bar--gold[_ngcontent-%COMP%] {
                    background: var(--gu-yellow);
                }
                
                .progressBar__bar--empty[_ngcontent-%COMP%] {
                    box-shadow: none !important
                }
                `]
            }), o
        })();
        const So = ["progressBar"], To = ["leftShield"];

        function Ao(o, r) {
            if (1 & o && e._UZ(0, "img", 12), 2 & o) {
                const t = e.oxw();
                e.Q6J("src", t.playerProperties.image_url, e.LSH)
            }
        }

        function Io(o, r) {
            if (1 & o && (e.TgZ(0, "div", 13), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" ", t.playerAccount.username, " ")
            }
        }

        function Zo(o, r) {
            if (1 & o && e._UZ(0, "app-progress-bar", 22, 23), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("color", t.progressionAnimationData.progressBarColor)("showDivider", !0)("dividerPercentage", t.progressionAnimationData.progressSafetyLine)("percentage", t.progressionAnimationData.percentage)("supressAnimation", !0)("animateFirstValue", !1)
            }
        }

        function Fo(o, r) {
            if (1 & o && (e.TgZ(0, "div", 24, 25), e._UZ(2, "img", 26), e.TgZ(3, "div", 27), e._uU(4), e.ALo(5, "titlecase"), e.qZA(), e.TgZ(6, "div", 28), e._uU(7), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(4), e.hij(" ", e.lcZ(5, 2, t.progressionAnimationData.nextRankName), " "), e.xp6(3), e.hij(" ", t.progressionAnimationData.nextRankInitials, " ")
            }
        }

        function Do(o, r) {
            if (1 & o && (e.TgZ(0, "div", 14), e.YNc(1, Zo, 2, 6, "app-progress-bar", 15), e.TgZ(2, "div", 16, 17), e._UZ(4, "img", 18), e.TgZ(5, "div", 19), e._uU(6), e.ALo(7, "titlecase"), e.qZA(), e.TgZ(8, "div", 20), e._uU(9), e.qZA(), e.qZA(), e.YNc(10, Fo, 8, 4, "div", 21), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", !t.isMaxRank), e.xp6(1), e.ekj("progressBarArea__level--maxRank", t.isMaxRank), e.xp6(2), e.MGl("src", "/gu-assets/images/rank-progress/gu-progress-rank-cracks--", t.progressionAnimationData.shieldCrackCount, ".svg", e.LSH), e.xp6(2), e.hij(" ", e.lcZ(7, 9, t.progressionAnimationData.currentRankName), " "), e.xp6(2), e.ekj("progressBarArea__level__rankInitials--maxRank", t.isMaxRank), e.xp6(1), e.hij(" ", t.progressionAnimationData.currentRankInitials, " "), e.xp6(1), e.Q6J("ngIf", !t.isMaxRank)
            }
        }

        const Go = function (o) {
            return {"displayArea--loading": o}
        };
        y.p8.registerPlugin(oe);
        const Qe = "139, 225, 224",
            pt = oe.ease.config({strength: 6, points: 6, template: "power2.inOut", randomize: !1});
        let Bo = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g) {
                    this.guUserService = t, this.authService = n, this.progressionService = i, this.modalService = a, this.changeDetector = s, this.playService = c, this.resizeService = l, this.cdr = g, this.vh = 0, this.isMaxRank = !1, this.progressionAnimationData = {
                        percentage: 0,
                        shieldCrackCount: 0,
                        progressSafetyLine: 50,
                        currentRankName: "",
                        currentRankInitials: "",
                        nextRankName: "",
                        nextRankInitials: "",
                        progressBarColor: "aqua"
                    }, this.ranksListing = [], this.unsubscribe = new M.xQ, this.loading = !0, l.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({vh: b}) => {
                        this.vh = b
                    })).subscribe()
                }

                ngOnInit() {
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngAfterViewInit() {
                    this.getViewData().pipe().subscribe(() => {
                        this.setColorOfProgressBar(), this.progressionAnimationData.percentage = this.previousRankedProgression.win_points, this.progressionAnimationData.progressSafetyLine = this.previousRankedProgression.safety_line, this.setRankLevelLabels(this.previousRankedProgression), this.setShieldCracking(this.calcNewCracksCount(this.previousRankedProgression)), this.changeDetector.detectChanges(), this.loading = !1, this.createAnimationTimeline()
                    })
                }

                getViewData() {
                    return (0, D.aj)([this.fetchPlayer(), this.fetchAccount()])
                }

                createAnimationTimeline() {
                    if (this.isMaxRank) return !1;
                    this.setColorOfProgressBar(), this.progressionTL = y.p8.timeline({
                        paused: !0,
                        delay: 1,
                        onUpdate: () => this.setColorOfProgressBar()
                    });
                    const t = this.nextRankedProgression.rank_level - this.previousRankedProgression.rank_level;
                    t > 0 ? this.levelUp() : t < 0 && this.levelDown(), this.progressionTL.to(this.progressionAnimationData, 1, {
                        percentage: this.nextRankedProgression.win_points,
                        ease: "power2.inOut"
                    });
                    const n = this.calcNewCracksCount(this.nextRankedProgression);
                    n !== this.progressionAnimationData.shieldCrackCount && this.progressionTL.fromTo(this.leftShield.nativeElement, {
                        x: "-4px",
                        y: "-50%"
                    }, {
                        duration: .5,
                        x: "4px",
                        y: "-50%",
                        ease: pt,
                        clearProps: "x"
                    }).add(() => this.setShieldCracking(n), "-=0.3"), this.progressionTL.play()
                }

                calcNewCracksCount(t) {
                    let n = 3;
                    return t.loss_points < 37 ? n = 0 : t.loss_points < 53 ? n = 1 : t.loss_points < 78 && (n = 2), n
                }

                setShieldCracking(t) {
                    this.progressionAnimationData.shieldCrackCount = t
                }

                setColorOfProgressBar() {
                    const t = this.progressionAnimationData.percentage >= this.progressionAnimationData.progressSafetyLine ? "aqua" : "gold";
                    t !== this.progressionAnimationData.progressBarColor && (this.progressionAnimationData.progressBarColor = t)
                }

                setRankLevelLabels(t) {
                    const n = this.ranksListing[t.rank_level - 1], i = this.ranksListing[t.rank_level];
                    this.progressionAnimationData.currentRankName = n.level_name, this.progressionAnimationData.currentRankInitials = this.isMaxRank ? Math.trunc(t.rating).toString() : n.level_short_name, !this.isMaxRank && i && (this.progressionAnimationData.nextRankName = i.level_name, this.progressionAnimationData.nextRankInitials = i.level_short_name)
                }

                setUiElementsToNextLevel() {
                    this.progressionAnimationData.progressSafetyLine = this.nextRankedProgression.safety_line, this.setRankLevelLabels(this.nextRankedProgression), this.setShieldCracking(this.calcNewCracksCount(this.nextRankedProgression))
                }

                levelUp() {
                    const t = this.progressBar.progressBarDom.nativeElement;
                    this.progressionTL.to(this.progressionAnimationData, {
                        duration: 1.5,
                        percentage: 100,
                        ease: "power2.inOut"
                    }).set(t, {boxShadow: `0 0 ${2 * this.vh}px ${.5 * this.vh}px rgba(${Qe}, 0.4)`}).to(t, {
                        duration: .3,
                        boxShadow: `0 0 ${3.5 * this.vh}px ${4 * this.vh}px rgba(${Qe}, 0.7)`
                    }).to(t, {
                        duration: .2,
                        boxShadow: `0 0 ${5 * this.vh}px ${2 * this.vh}px rgba(${Qe}, 0)`
                    }).to(t, {
                        duration: .2,
                        boxShadow: `0 0 ${2 * this.vh}px ${.5 * this.vh}px rgba(${Qe}, 0.4)`
                    }).fromTo(this.leftShield.nativeElement, {x: "-4px", y: "-50%"}, {
                        duration: .5,
                        x: "4px",
                        y: "-50%",
                        ease: pt,
                        clearProps: "x"
                    }).add(() => this.setUiElementsToNextLevel(), "-=0.25").to(this.progressionAnimationData, {
                        duration: .6,
                        percentage: 0,
                        ease: "power2.inOut"
                    }, "-=0.5")
                }

                levelDown() {
                    this.progressionTL.to(this.progressionAnimationData, {
                        duration: 1.5,
                        percentage: 0,
                        ease: "power2.inOut"
                    }).fromTo(this.leftShield.nativeElement, {x: "-4px", y: "-50%"}, {
                        duration: .5,
                        x: "4px",
                        y: "-50%",
                        ease: pt,
                        clearProps: "x"
                    }).add(() => this.setUiElementsToNextLevel(), "-=0.25").set(this.progressionAnimationData, {percentage: 100})
                }

                mythicProgressPrevMock() {
                    return {
                        game_mode: 12,
                        rating: 1800,
                        rank_level: 11,
                        win_points: 34.035047,
                        loss_points: 0,
                        safety_line: 25
                    }
                }

                mythicProgressMock$() {
                    return (0, V.of)({
                        user_id: 49,
                        game_mode: 12,
                        rating: 1800,
                        rank_level: 11,
                        win_points: 34.035047,
                        loss_points: 0,
                        safety_line: 25
                    })
                }

                fetchAccount() {
                    return this.authService.account$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => !!t), (0, x.q)(1), (0, w.b)(t => {
                        this.playerAccount = t, this.cdr.detectChanges()
                    }), (0, re.zg)(t => (this.previousRankedProgression = this.progressionService.getStoredRankedProgression(t.id, this.gameModeId), (0, D.aj)([this.progressionService.getRankedProgressionById(t.id, this.gameModeId), this.progressionService.gameRanks$]))), (0, P.h)(([t, n]) => !!t && !!n), (0, w.b)(([t, n]) => (this.nextRankedProgression = t, this.ranksListing = n, this.isMaxRank = this.progressionService.isMaxRank(t, n), console.log("RankProgress->fetchAccount() finished: prev next", this.previousRankedProgression, this.nextRankedProgression), {})))
                }

                backToArena() {
                    this.playService.setPlaying(J.OC.OUT, this.gameModeId), this.modalService.destroyTopModal()
                }

                fetchPlayer() {
                    return this.guUserService.extendedAccountProperties$.pipe((0, x.q)(1), (0, w.b)(t => (this.playerProperties = t, t)))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ne.MZ), e.Y36(h.mI), e.Y36($.$z), e.Y36(T.Z), e.Y36(e.sBO), e.Y36(J.GT), e.Y36(K._), e.Y36(e.sBO))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-rank-modal-progress"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(So, 5), e.Gf(To, 5)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.progressBar = i.first), e.iGM(i = e.CRH()) && (n.leftShield = i.first)
                    }
                },
                inputs: {gameModeId: "gameModeId"},
                decls: 13,
                vars: 6,
                consts: [["src", "/gu-assets/images/backgrounds/god-of-nature.webp", "alt", "Illustration of the God of Nature background watermark", 1, "backgroundGodImagery", "left"], ["src", "/gu-assets/images/backgrounds/god-of-war.webp", "alt", "Illustration of the God of War background watermark", 1, "backgroundGodImagery", "right"], [1, "guLogo"], ["src", "/assets/images/launcher-mockup-gu-logo.png", 1, "guLogo__img"], ["fillColor", "colors.gunmetal.100", "size", "2x-small", 1, "matchCompleteHeading"], [1, "displayArea", 3, "ngClass"], [1, "playerDetailsAvatar"], ["class", "playerDetailsAvatar__image", 3, "src", 4, "ngIf"], ["class", "playerDetails__username", 4, "ngIf"], ["class", "progressBarArea", 4, "ngIf"], [1, "bottomContent"], ["size", "large", "text", "Continue", 3, "click"], [1, "playerDetailsAvatar__image", 3, "src"], [1, "playerDetails__username"], [1, "progressBarArea"], ["dividerText", "Shielded", "class", "progressBarArea__progressBar", "dividerOpacity", "medium", 3, "color", "showDivider", "dividerPercentage", "percentage", "supressAnimation", "animateFirstValue", 4, "ngIf"], [1, "progressBarArea__level", "progressBarArea__level--current"], ["leftShield", ""], [1, "progressBarArea__level__image", "progressBarArea__level__image--current", 3, "src"], [1, "progressBarArea__level__rankName"], [1, "progressBarArea__level__rankInitials"], ["class", "progressBarArea__level progressBarArea__level--next", 4, "ngIf"], ["dividerText", "Shielded", "dividerOpacity", "medium", 1, "progressBarArea__progressBar", 3, "color", "showDivider", "dividerPercentage", "percentage", "supressAnimation", "animateFirstValue"], ["progressBar", ""], [1, "progressBarArea__level", "progressBarArea__level--next"], ["rightShield", ""], ["src", "/gu-assets/images/rank-progress/gu-progress-rank-future.svg", 1, "progressBarArea__level__image"], [1, "progressBarArea__level__rankName", "progressBarArea__level__rankName--next"], [1, "progressBarArea__level__rankInitials", "progressBarArea__level__rankInitials--next"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "img", 0), e._UZ(1, "img", 1), e.TgZ(2, "div", 2), e._UZ(3, "img", 3), e.qZA(), e.TgZ(4, "gu-heading-text", 4), e._uU(5, " Ranked mode progression\n"), e.qZA(), e.TgZ(6, "div", 5), e.TgZ(7, "div", 6), e.YNc(8, Ao, 1, 1, "img", 7), e.qZA(), e.YNc(9, Io, 2, 1, "div", 8), e.YNc(10, Do, 11, 11, "div", 9), e.TgZ(11, "div", 10), e.TgZ(12, "gu-primary-hex-button", 11), e.NdJ("click", function () {
                        return n.backToArena()
                    }), e.qZA(), e.qZA(), e.qZA()), 2 & t && (e.xp6(6), e.Q6J("ngClass", e.VKq(4, Go, n.loading)), e.xp6(2), e.Q6J("ngIf", n.playerProperties), e.xp6(1), e.Q6J("ngIf", n.playerAccount), e.xp6(1), e.Q6J("ngIf", n.nextRankedProgression))
                },
                directives: [d.mk, d.O5, Ie],
                pipes: [d.rS],
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                .progressBarArea__level__rankInitials[_ngcontent-%COMP%], .progressBarArea__level__rankInitials--next[_ngcontent-%COMP%], .playerDetails__username[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .promoArea__text[_ngcontent-%COMP%], .progressBarArea__level__rankName[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .progressBarArea__level__rankInitials--next[_ngcontent-%COMP%], .playerDetails__username[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 2.96);
                    line-height: 1.3
                }
                
                .progressBarArea__level__rankInitials[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 4.2);
                    line-height: 1.3
                }
                
                .progressBarArea__level__rankName[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.9)
                }
                
                .promoArea__text[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.48)
                }
                
                .promoArea__text[_ngcontent-%COMP%] {
                    line-height: 1.4
                }
                
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    height: calc(var(--vh) * 100);
                    width: calc(var(--vw) * 100);
                    display: flex;
                    flex-flow: column nowrap;
                    background: #182531;
                    overflow: hidden
                }
                
                .backgroundGodImagery[_ngcontent-%COMP%] {
                    user-select: none;
                    pointer-events: none;
                    width: calc(var(--vw) * 55.85);
                    position: absolute;
                    top: -5%;
                    height: 110%
                }
                
                .backgroundGodImagery.left[_ngcontent-%COMP%] {
                    left: 0
                }
                
                .backgroundGodImagery.right[_ngcontent-%COMP%] {
                    right: 0
                }
                
                .guLogo[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 28px;
                    left: 0;
                    width: calc(var(--vh) * 7.7);
                    height: calc(var(--vh) * 7.7);
                    display: flex
                }
                
                .guLogo__img[_ngcontent-%COMP%] {
                    width: calc(var(--vh) * 4);
                    margin: auto
                }
                
                .matchCompleteHeading[_ngcontent-%COMP%] {
                    right: calc(var(--vh) * 3);
                    top: calc(28px + calc(var(--vh) * 3));
                    position: absolute
                }
                
                .displayArea[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * 11.5);
                    padding-bottom: calc(var(--vh) * 10);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    flex-grow: 1;
                    transition: opacity .15s ease-in-out
                }
                
                .displayArea--loading[_ngcontent-%COMP%] {
                    opacity: 0
                }
                
                .playerDetailsAvatar[_ngcontent-%COMP%] {
                    display: none;
                }
                
                .playerDetailsAvatar__image[_ngcontent-%COMP%] {
                    width: 90%;
                    height: 90%;
                    margin: auto;
                    border-radius: 50%;
                    overflow: hidden
                }
                
                .playerDetails__username[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * 1);
                    text-align: center;
                    font-size: 32px;
                    color: var(--gu-yellow);
                }
                
                .progressBarArea[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 57);
                    display: flex;
                    flex-flow: column nowrap;
                    position: relative;
                    margin-top: auto
                }
                
                .progressBarArea__progressBar[_ngcontent-%COMP%] {
                    height: calc(var(--vh) * 4.16);
                    margin-left: calc(var(--vw) * 6.6);
                    margin-right: calc(var(--vw) * 4.3);
                    padding: 0;
                    position: relative
                }
                
                .progressBarArea__level[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%)
                }
                
                .progressBarArea__level--current[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 7.5);
                    left: 0
                }
                
                .progressBarArea__level--next[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 5.6);
                    right: 0
                }
                
                .progressBarArea__level--maxRank[_ngcontent-%COMP%] {
                    position: static;
                    left: auto;
                    margin: 0 auto;
                    transform: none
                }
                
                .progressBarArea__level__image[_ngcontent-%COMP%] {
                    width: 100%;
                    display: block
                }
                
                .progressBarArea__level__image--current[_ngcontent-%COMP%] {
                    filter: drop-shadow(0 calc(var(--vh) * .1) calc(var(--vh) * 3.24) rgba(252, 247, 212, .3))
                }
                
                .progressBarArea__level__rankInitials[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -60%);
                    text-transform: uppercase
                }
                
                .progressBarArea__level__rankInitials--next[_ngcontent-%COMP%] {
                    color: var(--gu-blue-hover);
                }
                
                .progressBarArea__level__rankInitials--maxRank[_ngcontent-%COMP%] {
                    transform: translate(-50%, -68%)
                }
                
                .progressBarArea__level__rankName[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 110%;
                    left: 0;
                    width: 100%;
                    font-weight: 700;
                    text-align: center
                }
                
                .progressBarArea__level__rankName--next[_ngcontent-%COMP%] {
                    color: var(--gu-blue-hover);
                }
                
                .bottomContent[_ngcontent-%COMP%] {
                    margin-top: auto;
                    align-self: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative
                }
                
                .promoArea__text[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 6);
                    padding: calc(var(--vw) * 1.5);
                    width: calc(var(--vw) * 30.5);
                    border: calc(var(--vh) * .15) solid #3d5a74;
                    background: #182531;
                    text-align: center
                }
                `]
            }), o
        })(), Lo = (() => {
            class o {
                constructor() {
                }

                get isHighlighted() {
                    return this.highlighted
                }

                get isIndex0() {
                    return 0 === this.index
                }

                get isIndex1() {
                    return 1 === this.index
                }

                get isIndex2() {
                    return 2 === this.index
                }

                get isIndex3() {
                    return 3 === this.index
                }

                get isIndex4() {
                    return 4 === this.index
                }

                get isIndex5() {
                    return 5 === this.index
                }

                ngOnInit() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-gauntlet-circle"]],
                hostVars: 14,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("highlighted", n.isHighlighted)("index--0", n.isIndex0)("index--1", n.isIndex1)("index--2", n.isIndex2)("index--3", n.isIndex3)("index--4", n.isIndex4)("index--5", n.isIndex5)
                },
                inputs: {index: "index", highlighted: "highlighted"},
                decls: 6,
                vars: 0,
                consts: [[1, "gauntletCircle", "gauntletCircle--0"], [1, "gauntletCircle", "gauntletCircle--1"], [1, "gauntletCircle", "gauntletCircle--2"], [1, "gauntletCircle", "gauntletCircle--3"], [1, "gauntletCircle", "gauntletCircle--4"], [1, "gauntletCircle", "gauntletCircle--5"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "div", 0), e._UZ(1, "div", 1), e._UZ(2, "div", 2), e._UZ(3, "div", 3), e._UZ(4, "div", 4), e._UZ(5, "div", 5))
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}[_nghost-%COMP%]{position:absolute;height:calc(var(--vh) * 1.2);width:calc(var(--vh) * 1.2);border-radius:50%;background-color:#7f7f7f}.highlighted[_nghost-%COMP%]{background:linear-gradient(to bottom,#affaed 0%,#8be1e0 50%,#54bbcd 100%)}.index--0[_nghost-%COMP%]{top:0;left:50%;transform:translate(-50%)}.index--1[_nghost-%COMP%]{right:0;top:22%}.index--2[_nghost-%COMP%]{right:0;bottom:22%}.index--3[_nghost-%COMP%]{bottom:0;left:50%;transform:translate(-50%)}.index--4[_nghost-%COMP%]{left:0;bottom:22%}.index--5[_nghost-%COMP%]{left:0;top:22%}"]
            }), o
        })();

        function Uo(o, r) {
            if (1 & o && e._UZ(0, "app-flux-gauntlet-circle", 1), 2 & o) {
                const n = r.index;
                e.Q6J("highlighted", !!r.$implicit)("index", n)
            }
        }

        let qo = (() => {
            class o {
                constructor(t) {
                    this.gauntletService = t, this.highlightedIndices = [0, 0, 0, 0, 0, 0], this.unsubscribe = new M.xQ
                }

                ngOnInit() {
                    this.watchGauntlet()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                watchGauntlet() {
                    this.gauntletService.gauntletSlots$.pipe((0, u.R)(this.unsubscribe), (0, S.U)(t => t && 0 !== t.length ? t.map(n => n.wins) : [0, 0, 0, 0, 0, 0])).subscribe(t => this.highlightedIndices = t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ve))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-gauntlet-detail"]],
                inputs: {highlightedIndices: "highlightedIndices"},
                decls: 1,
                vars: 1,
                consts: [[3, "highlighted", "index", 4, "ngFor", "ngForOf"], [3, "highlighted", "index"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Uo, 1, 2, "app-flux-gauntlet-circle", 0), 2 & t && e.Q6J("ngForOf", n.highlightedIndices)
                },
                directives: [d.sg, Lo],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}[_nghost-%COMP%]{height:calc(var(--vh) * 6);width:calc(var(--vh) * 6);display:block;position:relative}"]
            }), o
        })();
        const Eo = [[["", "leftArea__subTitle", ""]], [["", "leftArea__title", ""]]],
            No = ["[leftArea__subTitle]", "[leftArea__title]"];
        let zt = (() => {
            class o {
                constructor() {
                }

                ngOnInit() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-progress-box"]],
                ngContentSelectors: No,
                decls: 8,
                vars: 0,
                consts: [["src", "/assets/images/rectangular-box/rectangular-box.webp", "alt", "", 1, "backgroundImage"], [1, "leftArea"], [1, "leftArea__subTitle"], [1, "leftArea__title"], [1, "rightArea"]],
                template: function (t, n) {
                    1 & t && (e.F$t(Eo), e._UZ(0, "img", 0), e.TgZ(1, "div", 1), e.TgZ(2, "div", 2), e.Hsn(3), e.qZA(), e.TgZ(4, "div", 3), e.Hsn(5, 1), e.qZA(), e.qZA(), e.TgZ(6, "div", 4), e._UZ(7, "app-flux-gauntlet-detail"), e.qZA())
                },
                directives: [qo],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.leftArea__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.leftArea__subTitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.leftArea__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.leftArea__subTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.11)}[_nghost-%COMP%]{width:100%;height:100%;display:flex;position:relative}.backgroundImage[_ngcontent-%COMP%]{position:absolute;object-fit:fill;width:100%;height:100%;top:0;left:0}.leftArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;z-index:1}.leftArea__subTitle[_ngcontent-%COMP%]{text-transform:uppercase;color:#fff}.leftArea__title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-transform:uppercase}.rightArea[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;margin-left:auto;z-index:1}"]
            }), o
        })();
        const Ro = ["gauntletToasts"], Qo = ["rewardsContainer"], Ho = ["rewardItems"], Yo = ["continueButton"],
            Jo = ["progressStepInfoText"], $o = ["progressBar"], Wo = ["starsUpgradeVideo"], zo = ["starsOpenVideo"],
            Vo = ["initialProgress"], jo = ["starsFinalNumbers"], Xo = ["starsFinalIcon"];

        function Ko(o, r) {
            if (1 & o && (e.TgZ(0, "div", 30), e.TgZ(1, "div", 31), e._UZ(2, "img", 32), e.qZA(), e.TgZ(3, "gu-heading-text", 33), e._uU(4), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("src", t.userAvatar, e.LSH), e.xp6(2), e.hij(" ", t.userName, " ")
            }
        }

        function ei(o, r) {
            if (1 & o && (e.TgZ(0, "div", 34), e.TgZ(1, "div", 35), e._UZ(2, "gu-card-pack-picture", 36), e.qZA(), e.TgZ(3, "div", 37), e.TgZ(4, "gu-paragraph-text", 38), e._uU(5), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("god", t.packsReward.god)("rarity", t.packsReward.rarity), e.xp6(3), e.AsE(" ", t.packRewardsCount, " ", 1 == t.packRewardsCount ? "Pack" : "Packs", " ")
            }
        }

        const ti = function (o, r) {
            return {
                rewardItem__innerContainer: !0,
                "rewardItem__innerContainer--openVideoActive": o,
                "rewardItem__innerContainer--upgradeVideoActive": r
            }
        };

        function ni(o, r) {
            if (1 & o && (e.TgZ(0, "div", 34), e.TgZ(1, "div", 39), e.TgZ(2, "picture", 40), e._UZ(3, "source", 41), e._UZ(4, "img", 42), e.qZA(), e._UZ(5, "video", 43, 44), e._UZ(7, "video", 45, 46), e._UZ(9, "gu-icon", 47, 48), e.TgZ(11, "gu-heading-text", 49, 50), e._uU(13), e.qZA(), e.qZA(), e.TgZ(14, "div", 37), e.TgZ(15, "gu-paragraph-text", 38), e._uU(16), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngClass", e.WLB(11, ti, t.animationState.showVialOpenVideo, t.animationState.showVialUpgradeVideo)), e.xp6(2), e.XOb("srcset", "\n              //images.godsunchained.com/star-vials/1024/", t.animationState.currentStarVialId, ".webp 1024w,\n              //images.godsunchained.com/star-vials/720/", t.animationState.currentStarVialId, ".webp   720w,\n              //images.godsunchained.com/star-vials/512/", t.animationState.currentStarVialId, ".webp   512w,\n              //images.godsunchained.com/star-vials/256/", t.animationState.currentStarVialId, ".webp   256w,\n              //images.godsunchained.com/star-vials/128/", t.animationState.currentStarVialId, ".webp   128w\n            ", e.LSH), e.xp6(1), e.MGl("src", "//images.godsunchained.com/star-vials/128/", t.animationState.currentStarVialId, ".png", e.LSH), e.xp6(1), e.Q6J("muted", !0), e.xp6(2), e.Q6J("muted", !0), e.xp6(6), e.hij(" +", t.starsRewardInfo.stars, " "), e.xp6(3), e.hij(" ", t.animationState.currentStarVial, " Vial ")
            }
        }

        function oi(o, r) {
            if (1 & o && (e.TgZ(0, "div", 34), e.TgZ(1, "div", 35), e._UZ(2, "gu-icon", 51), e.qZA(), e.TgZ(3, "div", 37), e.TgZ(4, "gu-paragraph-text", 38), e._uU(5), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.xp6(5), e.AsE(" ", t.display_value > 0 ? t.display_value + " " : "", "", t.display_name, " ")
            }
        }

        function ii(o, r) {
            1 & o && (e.TgZ(0, "div", 52, 53), e.TgZ(2, "app-flux-progress-box"), e.ynx(3, 54), e._uU(4, "gauntlet of the gods"), e.BQk(), e.ynx(5, 55), e._uU(6, "gather flux"), e.BQk(), e.qZA(), e.qZA())
        }

        let ri = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k, A, G, U, q, z) {
                    this.authService = t, this.playService = n, this.guGameService = i, this.progressionService = a, this.modalService = s, this.guUserService = c, this.changeDetector = l, this.resizeService = g, this.gauntletService = b, this.analyticsService = C, this.packService = k, this.filterService = A, this.starsService = G, this.cdr = U, this.fluxService = q, this.sealedService = z, this.unsubscribe = new M.xQ, this.xpData = {
                        latest_xp: [],
                        latest_total_xp: 0
                    }, this.showContinueButton = !1, this.loading = !0, this.specialRewards = [], this.animationState = {
                        percentage: 0,
                        progressStepText: "",
                        progressStepValue: 0,
                        currentLevel: 0,
                        xp: 0,
                        currentStarVial: "",
                        currentStarVialId: null,
                        currentTotalStars: 0,
                        disableCta: !0,
                        showVialOpenVideo: !1,
                        showVialUpgradeVideo: !1
                    }, this.GuGameModeId = O.B_, this.resizeService.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({vh: ee}) => this.vh = ee)).subscribe()
                }

                ngAfterViewInit() {
                    this.packService.fetchUnopenedPacks(), this.starsService.fetchUserStarsTotal(), this.fluxService.fetchFluxInfo(), this.gameModeId === O.B_.RANKED_CONSTRUCTED && this.gauntletService.fetchGauntletSlots(), this.gameModeId === O.B_.SEALED_DECK && this.sealedService.fetchSealed(), this.getViewData().subscribe(() => {
                        this.createProgressionAnimationTimeline(this.xpData.latest_xp)
                    }), this.guUserService.fetchExtendedAccount()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                getViewData() {
                    return (0, D.aj)([this.authService.account$, this.guUserService.getExtendedAccountProperties(), this.progressionService.accountThresholds$, this.playService.currentMatchId$]).pipe((0, P.h)(([t, n, i]) => !!t && !!n && i.length > 0), (0, x.q)(1), (0, S.U)(([t, n, i, a]) => (this.userId = n.user_id, this.userName = t.username, this.userAvatar = n.image_url, this.nextProgress = new $.oW(n.total_xp, n.xp_to_next, n.level), this.thresholds = i, [this.userId, a])), (0, Ce.w)(([t, n]) => (0, D.aj)([this.progressionService.fetchUserGameProgression({
                        userId: t,
                        gameModeId: this.gameModeId
                    }), this.starsService.fetchUserStarsRewards(n)])), (0, S.U)(([t, n]) => {
                        var i, a;
                        const s = this.nextProgress.xp - t.latest_total_xp;
                        return this.displayProgress = {
                            xp: s,
                            lvl: ut({xp: s, levelThresholds: this.thresholds})
                        }, this.levelUpCount = this.nextProgress.lvl - this.displayProgress.lvl, this.animationState.xp = this.displayProgress.xp, this.animationState.currentLevel = this.displayProgress.lvl, this.animationState.percentage = He({
                            xp: this.animationState.xp,
                            levelThresholds: this.thresholds
                        }), this.logGameCompleted(t.latest_game), this.xpData = {
                            latest_total_xp: t.latest_total_xp,
                            latest_xp: t.latest_xp
                        }, this.packsReward = this.packService.fixGodAlignments(this.filterService.sort(t.latest_reward, f.PE.DescRarity))[0], this.specialRewards = t.latest_special_reward || [], this.packRewardsCount = t.latest_reward.map(c => c.count).reduce((c, l) => c + l, 0), this.specialRewardsCount = this.specialRewards.length, this.hasEarnedRewards = this.packRewardsCount > 0 || this.specialRewardsCount > 0 || n.stars > 0, this.starsRewardInfo = n, this.animationState.currentStarVial = null === (i = null == n ? void 0 : n.clusters[0]) || void 0 === i ? void 0 : i.cluster_name, this.animationState.currentStarVialId = null === (a = null == n ? void 0 : n.clusters[0]) || void 0 === a ? void 0 : a.cluster_id, this.loading = !1, (0, V.of)({})
                    }), (0, it.K)(t => (console.error(t), (0, V.of)(!1))))
                }

                createProgressionAnimationTimeline(t) {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        this.progressionTL = y.p8.timeline({
                            paused: !0,
                            delay: .5
                        }), t.forEach((n, i) => this.addXpStepToProgressBar(n, i)), yield(0, ct.w)(0), this.progressionTL.add(() => {
                            var n;
                            (null === (n = this.starsUpgradeVideo) || void 0 === n ? void 0 : n.nativeElement) && (this.starsUpgradeVideo.nativeElement.pause(), this.starsOpenVideo.nativeElement.pause())
                        }), this.hasEarnedRewards && this.animateInRewards(), this.gauntletToasts && this.animateInGauntletToasts(), this.animateInCtaButton(), this.progressionTL.play()
                    })
                }

                animateInGauntletToasts() {
                    this.progressionTL.to(this.gauntletToasts.nativeElement, {
                        duration: .5,
                        y: 0,
                        opacity: 1,
                        ease: "power2.inOut"
                    })
                }

                hasLevelledUp(t) {
                    return -1 !== t && t !== this.animationState.currentLevel
                }

                addXpStepToProgressBar(t, n) {
                    if (0 === t.xp) return;
                    this.progressionTL.addLabel(`xpStep-${n}`, "+=0.5");
                    const i = this.animationState.xp + t.xp;
                    this.animationState.xp = i;
                    const a = ut({xp: i, levelThresholds: this.thresholds});
                    this.hasLevelledUp(a) && (this.progressionTL.to(this.animationState, {
                        duration: 1,
                        percentage: 100,
                        ease: "power2.inOut"
                    }).add(() => {
                        this.displayProgress.lvl = a
                    }), this.levelUpOnce(), this.animationState.currentLevel = a);
                    const s = He({xp: i, levelThresholds: this.thresholds});
                    this.progressionTL.to(this.animationState, 1, {
                        percentage: s,
                        ease: "power2.inOut"
                    }), this.animateTextLabel(t, n)
                }

                animateTextLabel(t, n) {
                    const i = this.progressStepInfoText.nativeElement;
                    this.progressionTL.add(() => {
                        this.animationState.progressStepText = t.display_name, this.animationState.progressStepValue = t.xp, this.changeDetector.detectChanges()
                    }, `xpStep-${n}`).set(i, {x: "-40%", opacity: 0}, `xpStep-${n}`).to(i, {
                        duration: 1.5,
                        x: "0%",
                        opacity: 1,
                        ease: "power2.inOut"
                    }, `xpStep-${n}`)
                }

                levelUpOnce() {
                    const t = this.progressBar.progressBarDom.nativeElement;
                    this.progressionTL.set(t, {boxShadow: `0 0 ${2 * this.vh}px ${.5 * this.vh}px rgba(${(0, Ee.hexToCssRgbString)(Ne.colors.apocyan[300])}, 0.4)`}).to(t, {
                        duration: .3,
                        boxShadow: `0 0 ${3.5 * this.vh}px ${4 * this.vh}px rgba(${(0, Ee.hexToCssRgbString)(Ne.colors.apocyan[300])}, 0.7)`
                    }).to(t, {
                        duration: .2,
                        boxShadow: `0 0 ${5 * this.vh}px ${2 * this.vh}px rgba(${(0, Ee.hexToCssRgbString)(Ne.colors.apocyan[300])}, 0)`
                    }).to(t, {
                        duration: .2,
                        boxShadow: `0 0 ${2 * this.vh}px ${.5 * this.vh}px rgba(${(0, Ee.hexToCssRgbString)(Ne.colors.apocyan[300])}, 0.4)`
                    }), this.progressionTL.to(this.animationState, {
                        duration: .4,
                        percentage: 0,
                        ease: "power2.inOut"
                    }, "-=0.2")
                }

                animateInCtaButton() {
                    this.progressionTL.to(this.continueButton.nativeElement, {
                        opacity: 1,
                        scale: 1,
                        ease: "power2.inOut",
                        duration: .5,
                        onComplete: () => {
                            this.animationState.disableCta = !1
                        }
                    })
                }

                animateInRewards() {
                    this.progressionTL.to(this.initialProgress.nativeElement, {
                        duration: .5,
                        opacity: 0,
                        ease: "power2.inOut"
                    }).to(this.rewardsContainer.nativeElement, {
                        duration: .5,
                        opacity: 1,
                        scale: 1,
                        ease: "power2.inOut"
                    }, "-=0.3"), Array.from(this.rewardItems.nativeElement.children).forEach((t, n) => {
                        this.progressionTL.to(t, {
                            duration: .2,
                            opacity: 1,
                            ease: "power2.inOut"
                        }, n > 0 ? "-=0.3" : "-=0").to(t, {
                            duration: .3,
                            transform: "scale(1.2)",
                            ease: "power2.inOut"
                        }, "-=0.15").to(t, {duration: .2, transform: "scale(1)", ease: "power2.inOut"})
                    })
                }

                continue() {
                    var t, n, i, a, s, c, l, g, b, C;
                    if (this.animationState.disableCta) return !1;
                    (null === (n = null === (t = this.starsRewardInfo) || void 0 === t ? void 0 : t.clusters) || void 0 === n ? void 0 : n.length) >= 1 && (null === (a = null === (i = this.starsRewardInfo) || void 0 === i ? void 0 : i.clusters[0]) || void 0 === a ? void 0 : a.cluster_id) !== (null === (s = this.starsRewardInfo) || void 0 === s ? void 0 : s.max_clusters) && this.animationState.currentStarVial !== (null === (c = this.starsRewardInfo) || void 0 === c ? void 0 : c.clusters[(null === (g = null === (l = this.starsRewardInfo) || void 0 === l ? void 0 : l.clusters) || void 0 === g ? void 0 : g.length) - 1].cluster_name) ? (this.playStarUpgrades(), this.animationState.disableCta = !0) : (null === (b = this.starsRewardInfo) || void 0 === b ? void 0 : b.stars) && this.animationState.currentTotalStars !== (null === (C = this.starsRewardInfo) || void 0 === C ? void 0 : C.stars) ? (this.playOpenStarVial(), this.animationState.disableCta = !0) : (this.guUserService.fetchExtendedAccount(), this.guGameService.getGameMode$(this.gameModeId).pipe((0, x.q)(1)).subscribe(k => {
                        this.close(), k && k.ranked ? this.modalService.createModal(Bo, {gameModeId: this.gameModeId}, {
                            blurredBackground: !1,
                            canCloseFromOutside: !1,
                            size: m.Cg.Fullscreen
                        }) : this.playService.setPlaying(J.OC.OUT, this.gameModeId)
                    }))
                }

                close() {
                    this.modalService.destroyTopModal()
                }

                logGameCompleted(t) {
                    "function" == typeof fbq && fbq("track", "ViewContent"), "function" == typeof gtag && gtag("event", "completed", {
                        event_category: "game",
                        event_label: "user"
                    }), this.guGameService.getGameMode$(this.gameModeId).pipe((0, x.q)(1)).subscribe(n => {
                        this.analyticsService.postEvent(new Te.Game.Completed.Event({
                            game_id: 1,
                            latest_id: t,
                            mode_id: this.gameModeId,
                            mode_name: n ? n.name : null
                        }))
                    })
                }

                playStarUpgrades() {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        const t = this.starsUpgradeVideo.nativeElement, n = a => {
                            this.animationState.currentStarVial = this.starsRewardInfo.clusters[this.starsRewardInfo.clusters.length - 1].cluster_name, this.animationState.currentStarVialId = this.starsRewardInfo.clusters[this.starsRewardInfo.clusters.length - 1].cluster_id, this.animationState.disableCta = !1, this.cdr.detectChanges(), Kt(t, n)
                        }, i = 1.7 * (this.starsRewardInfo.clusters[0].cluster_id - 1);
                        this.animationState.showVialUpgradeVideo = !0, t.currentTime = i, Xt(t, n), t.muted = !1, t.play(), yield(0, ct.w)(1700 * (this.starsRewardInfo.clusters.length - 1) - 20), t.pause(), this.animationState.disableCta = !0
                    })
                }

                playOpenStarVial() {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        const t = this.starsOpenVideo.nativeElement;
                        this.animationState.showVialUpgradeVideo = !1, this.animationState.showVialOpenVideo = !0;
                        const n = a => {
                            this.animationState.currentTotalStars = this.starsRewardInfo.stars, y.p8.to(this.starsFinalNumbers.nativeElement, {
                                duration: .5,
                                opacity: 1,
                                y: 0
                            }), y.p8.to(this.starsFinalIcon.nativeElement, {
                                duration: .5,
                                opacity: .5,
                                y: 0,
                                onComplete: () => {
                                    this.animationState.disableCta = !1, this.cdr.detectChanges()
                                }
                            }), this.cdr.detectChanges(), Kt(t, n)
                        };
                        t.currentTime = 1.7 * (this.starsRewardInfo.clusters[this.starsRewardInfo.clusters.length - 1].cluster_id - 1), Xt(t, n), t.muted = !1, t.play(), yield(0, ct.w)(1680), t.pause(), this.animationState.disableCta = !0
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.mI), e.Y36(J.GT), e.Y36(X.xV), e.Y36($.$z), e.Y36(T.Z), e.Y36(ne.MZ), e.Y36(e.sBO), e.Y36(K._), e.Y36(ve), e.Y36(_.yD), e.Y36(me.F), e.Y36(_.iZ), e.Y36(_.cM), e.Y36(e.sBO), e.Y36(_.TJ), e.Y36(Y.H))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-account-progression"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Ro, 5), e.Gf(Qo, 5), e.Gf(Ho, 5), e.Gf(Yo, 5), e.Gf(Jo, 5), e.Gf($o, 5), e.Gf(Wo, 5), e.Gf(zo, 5), e.Gf(Vo, 5), e.Gf(jo, 5), e.Gf(Xo, 5)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.gauntletToasts = i.first), e.iGM(i = e.CRH()) && (n.rewardsContainer = i.first), e.iGM(i = e.CRH()) && (n.rewardItems = i.first), e.iGM(i = e.CRH()) && (n.continueButton = i.first), e.iGM(i = e.CRH()) && (n.progressStepInfoText = i.first), e.iGM(i = e.CRH()) && (n.progressBar = i.first), e.iGM(i = e.CRH()) && (n.starsUpgradeVideo = i.first), e.iGM(i = e.CRH()) && (n.starsOpenVideo = i.first), e.iGM(i = e.CRH()) && (n.initialProgress = i.first), e.iGM(i = e.CRH()) && (n.starsFinalNumbers = i.first), e.iGM(i = e.CRH()) && (n.starsFinalIcon = i.first)
                    }
                },
                inputs: {gameModeId: "gameModeId"},
                features: [e._Bn([Ue])],
                decls: 38,
                vars: 16,
                consts: [[1, "backgroundImagery"], ["type", "image/webp", "srcset", "\n      //images.godsunchained.com/art2/250/916.webp   250w,\n      //images.godsunchained.com/art2/375/916.webp   375w,\n      //images.godsunchained.com/art2/500/916.webp   500w,\n      //images.godsunchained.com/art2/720/916.webp   720w,\n      //images.godsunchained.com/art2/1024/916.webp 1024w\n    "], ["type", "image/jpg", "srcset", "\n      //images.godsunchained.com/art2/250/916.jpg   250w,\n      //images.godsunchained.com/art2/375/916.jpg   375w,\n      //images.godsunchained.com/art2/500/916.jpg   500w,\n      //images.godsunchained.com/art2/720/916.jpg   720w,\n      //images.godsunchained.com/art2/1024/916.jpg 1024w\n    "], ["src", "//images.godsunchained.com/art2/720/916.jpg", "alt", "", 1, "backgroundImagery__img"], [1, "guLogo"], ["src", "/assets/images/launcher-mockup-gu-logo.png", 1, "guLogo__img"], ["fillColor", "colors.gunmetal.100", "size", "2x-small", 1, "matchCompleteHeading"], [1, "initialProgressDisplay"], ["initialProgress", ""], ["class", "playerDetails", 4, "ngIf"], [1, "progressBarArea"], ["kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100", 1, "progressBarArea__label", "left"], ["kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100", 1, "progressBarArea__label", "right"], ["color", "aqua", 1, "progressBarArea__bar", 3, "animateFirstValue", "percentage", "supressAnimation"], ["progressBar", ""], [1, "progressBarArea__stepInfo"], ["progressStepInfoText", ""], ["size", "x-large", 1, "progressBarArea__stepInfo__value"], ["size", "2x-small", 1, "progressBarArea__stepInfo__label"], [1, "continueButtonPlaceholder"], [1, "rewardContainer"], ["rewardsContainer", ""], ["size", "x-large", "align", "center", "fillGradient", "gradients.gold.simple", 1, "rewardContainer__title"], [1, "rewardContainer__rewardItems"], ["rewardItems", ""], ["class", "rewardContainer__rewardItems__rewardItem", 4, "ngIf"], ["class", "rewardContainer__rewardItems__rewardItem", 4, "ngFor", "ngForOf"], ["size", "large", "text", "Continue", 1, "continue", 3, "disabled", "click"], ["continueButton", ""], ["class", "fluxProgressToasts", 4, "ngIf"], [1, "playerDetails"], [1, "playerDetails__avatar"], [1, "playerDetails__avatar__img", 3, "src"], ["size", "small", "fillGradient", "gradients.gold.simple", "align", "center", 1, "playerDetails__userName"], [1, "rewardContainer__rewardItems__rewardItem"], [1, "rewardItem__innerContainer"], ["set", "core", 1, "rewardItem__innerContainer__picture", 3, "god", "rarity"], [1, "rewardItem__label"], ["fontWeight", "bold", "align", "center", "kind", "large", "fillColor", "colors.light.300"], [3, "ngClass"], [1, "rewardItem__innerContainer__starPicture"], ["type", "image/webp", 3, "srcset"], ["alt", "chest image", 1, "rewardItem__innerContainer__starPicture__img", 3, "src"], ["src", "/assets/videos/stars-upgrades.webm", "playsinline", "", "autoplay", "", 1, "rewardItem__innerContainer__video", "rewardItem__innerContainer__video--upgradeVideo", 3, "muted"], ["starsUpgradeVideo", ""], ["src", "/assets/videos/stars-opens.webm", "playsinline", "", "autoplay", "", 1, "rewardItem__innerContainer__video", "rewardItem__innerContainer__video--openVideo", 3, "muted"], ["starsOpenVideo", ""], ["iconLigature", "collectable_stars", "fillGradient", "gradients.apocyan.simple", 1, "rewardItem__innerContainer__icon", "rewardItem__innerContainer__icon--stars"], ["starsFinalIcon", ""], ["size", "x-large", "fillColor", "colors.light.100", 1, "rewardItem__innerContainer__starBigNumbers"], ["starsFinalNumbers", ""], ["iconLigature", "flux_symbol", "fillGradient", "gradients.gold.simple", 1, "rewardItem__innerContainer__icon"], [1, "fluxProgressToasts"], ["gauntletToasts", ""], ["leftArea__subTitle", ""], ["leftArea__title", ""]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "picture", 0), e._UZ(1, "source", 1), e._UZ(2, "source", 2), e._UZ(3, "img", 3), e.qZA(), e.TgZ(4, "div", 4), e._UZ(5, "img", 5), e.qZA(), e.TgZ(6, "gu-heading-text", 6), e._uU(7, " Match Complete\n"), e.qZA(), e.TgZ(8, "div", 7, 8), e.YNc(10, Ko, 5, 2, "div", 9), e.TgZ(11, "div", 10), e.TgZ(12, "gu-simple-text", 11), e._uU(13), e.qZA(), e.TgZ(14, "gu-simple-text", 12), e._uU(15), e.qZA(), e._UZ(16, "app-progress-bar", 13, 14), e.TgZ(18, "div", 15, 16), e.TgZ(20, "gu-heading-text", 17), e._uU(21), e.qZA(), e.TgZ(22, "gu-heading-text", 18), e._uU(23), e.qZA(), e.qZA(), e.qZA(), e._UZ(24, "div", 19), e.qZA(), e.TgZ(25, "div", 20, 21), e.TgZ(27, "gu-heading-text", 22), e._uU(28), e.qZA(), e.TgZ(29, "div", 23, 24), e.YNc(31, ei, 6, 4, "div", 25), e.YNc(32, ni, 17, 14, "div", 25), e.YNc(33, oi, 6, 2, "div", 26), e.qZA(), e._UZ(34, "div", 19), e.qZA(), e.TgZ(35, "gu-primary-hex-button", 27, 28), e.NdJ("click", function () {
                        return n.continue()
                    }), e.qZA(), e.YNc(37, ii, 7, 0, "div", 29)), 2 & t && (e.xp6(10), e.Q6J("ngIf", !n.loading), e.xp6(1), e.ekj("progressBarArea--hidden", n.loading), e.xp6(2), e.hij(" Level ", null == n.displayProgress ? null : n.displayProgress.lvl, " "), e.xp6(2), e.hij(" Level ", (null == n.displayProgress ? null : n.displayProgress.lvl) + 1, " "), e.xp6(1), e.Q6J("animateFirstValue", !1)("percentage", n.animationState.percentage)("supressAnimation", !0), e.xp6(5), e.hij(" +", n.animationState.progressStepValue, " "), e.xp6(2), e.hij(" ", n.animationState.progressStepText, " "), e.xp6(5), e.hij(" ", n.packRewardsCount + n.specialRewardsCount > 1 ? "Rewards" : "Reward", " Earned "), e.xp6(3), e.Q6J("ngIf", n.packsReward), e.xp6(1), e.Q6J("ngIf", n.starsRewardInfo && 0 !== (null == n.starsRewardInfo ? null : n.starsRewardInfo.stars)), e.xp6(1), e.Q6J("ngForOf", n.specialRewards), e.xp6(2), e.Q6J("disabled", n.animationState.disableCta), e.xp6(2), e.Q6J("ngIf", n.gameModeId === n.GuGameModeId.RANKED_CONSTRUCTED))
                },
                directives: [d.O5, Ie, d.sg, d.mk, zt],
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                .progressBarArea__stepInfo__value[_ngcontent-%COMP%], .progressBarArea__stepInfo__label[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .progressBarArea__stepInfo__label[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 2.22);
                    line-height: 1.4
                }
                
                .progressBarArea__stepInfo__value[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 6);
                    line-height: 1.3
                }
                
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                    background: #182531;
                    overflow: hidden;
                    height: calc(var(--vh) * 100);
                    width: calc(var(--vw) * 100);
                    padding-top: calc(var(--vh) * 10)
                }
                
                .backgroundImagery[_ngcontent-%COMP%] {
                    user-select: none;
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background: #0F1B27
                }
                
                .backgroundImagery__img[_ngcontent-%COMP%] {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    opacity: .1;
                    filter: grayscale(100%)
                }
                
                .guLogo[_ngcontent-%COMP%] {
                    display: none;
                }
                
                .guLogo__img[_ngcontent-%COMP%] {
                    width: calc(var(--vh) * 4);
                    margin: auto
                }
                
                .matchCompleteHeading[_ngcontent-%COMP%] {
                    right: calc(var(--vh) * 3);
                    top: calc(28px + calc(var(--vh) * 3));
                    position: absolute
                }
                
                .initialProgressDisplay[_ngcontent-%COMP%] {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center
                }
                
                .playerDetails[_ngcontent-%COMP%] {
                    margin-bottom: calc(var(--vh) * 3)
                }
                
                .playerDetails__avatar[_ngcontent-%COMP%] {
                    display: none;
                }
                
                .playerDetails__userName[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * 1.5);
                    position: relative
                }
                
                .progressBarArea[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 50);
                    display: flex;
                    flex-flow: row wrap;
                    position: relative
                }
                
                .progressBarArea--hidden[_ngcontent-%COMP%] {
                    opacity: 0
                }
                
                .progressBarArea__label[_ngcontent-%COMP%] {
                    margin-bottom: calc(var(--vh) * 1)
                }
                
                .progressBarArea__label.left[_ngcontent-%COMP%] {
                    padding-left: calc(var(--vw) * 1)
                }
                
                .progressBarArea__label.right[_ngcontent-%COMP%] {
                    padding-right: calc(var(--vw) * 1);
                    margin-left: auto
                }
                
                .progressBarArea__bar[_ngcontent-%COMP%] {
                    width: 100%;
                    height: calc(var(--vh) * 3.42);
                    padding-left: calc(var(--vw) * .5);
                    padding-right: calc(var(--vw) * .5)
                }
                
                .progressBarArea__stepInfo[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 2);
                    margin-left: auto;
                    margin-right: auto;
                    text-align: center;
                    color: #f6f6f6;
                    opacity: 0
                }
                
                .rewardContainer[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(.8);
                    opacity: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center
                }
                
                .rewardContainer__title[_ngcontent-%COMP%] {
                    position: relative
                }
                
                .rewardContainer__rewardItems[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 3);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative
                }
                
                .rewardContainer__rewardItems__rewardItem[_ngcontent-%COMP%] {
                    background: url(/assets/images/ui-embellishments/ui--reward-background.svg) no-repeat;
                    background-size: contain;
                    background-position: 50% 34%;
                    position: relative;
                    margin-right: calc(var(--vw) * 4);
                    width: calc(var(--vw) * 13)
                }
                
                .rewardContainer__rewardItems__rewardItem[_ngcontent-%COMP%]:last-child {
                    margin: 0
                }
                
                .rewardItem__innerContainer[_ngcontent-%COMP%] {
                    width: 100%;
                    padding-bottom: 113%;
                    position: relative
                }
                
                .rewardItem__innerContainer--openVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__starPicture[_ngcontent-%COMP%], .rewardItem__innerContainer--openVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__video--upgradeVideo[_ngcontent-%COMP%] {
                    opacity: 0
                }
                
                .rewardItem__innerContainer--openVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__video--openVideo[_ngcontent-%COMP%] {
                    opacity: 1
                }
                
                .rewardItem__innerContainer--upgradeVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__starPicture[_ngcontent-%COMP%] {
                    opacity: 0
                }
                
                .rewardItem__innerContainer--upgradeVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__video--upgradeVideo[_ngcontent-%COMP%] {
                    opacity: 1
                }
                
                .rewardItem__innerContainer--upgradeVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__video--openVideo[_ngcontent-%COMP%] {
                    opacity: 0
                }
                
                .rewardItem__innerContainer__picture[_ngcontent-%COMP%] {
                    position: absolute;
                    width: 68%;
                    left: 50%;
                    top: 27%;
                    transform: translate(-50%)
                }
                
                .rewardItem__innerContainer__video[_ngcontent-%COMP%], .rewardItem__innerContainer__starPicture[_ngcontent-%COMP%] {
                    position: absolute;
                    width: 140%;
                    left: 50%;
                    top: 2%;
                    transform: translate(-50%);
                    transition: opacity .2s ease-in-out
                }
                
                .rewardItem__innerContainer__video[_ngcontent-%COMP%] {
                    opacity: 0
                }
                
                .rewardItem__innerContainer__starPicture__img[_ngcontent-%COMP%] {
                    display: block;
                    width: 100%
                }
                
                .rewardItem__innerContainer__icon[_ngcontent-%COMP%] {
                    font-size: calc(var(--vw) * 10);
                    position: absolute;
                    top: 30.5%;
                    left: 0;
                    width: 100%;
                    text-align: center
                }
                
                .rewardItem__innerContainer__icon--stars[_ngcontent-%COMP%] {
                    font-size: calc(var(--vw) * 8);
                    top: 39%;
                    opacity: 0
                }
                
                .rewardItem__innerContainer__starBigNumbers[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, .5);
                    transform: translate(-50%, 15%);
                    opacity: 0
                }
                
                .rewardItem__label[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 9);
                    min-height: 50px
                }
                
                .fluxProgressToasts[_ngcontent-%COMP%] {
                    bottom: calc(var(--vh) * 3.5);
                    left: calc(var(--vh) * 3.5);
                    width: calc(var(--vw) * 24);
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    transform: translateY(50%);
                    opacity: 0
                }
                
                .fluxProgressToasts[_ngcontent-%COMP%] app-flux-progress-box[_ngcontent-%COMP%] {
                    padding: calc(var(--vh) * 4)
                }
                
                .continue[_ngcontent-%COMP%] {
                    transform: none !important;
                }
                
                .continueButtonPlaceholder[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 7.5);
                    height: 48px;
                    width: 100%
                }
                `],
                data: {
                    animation: [(0, v.X$)("fadeAndSlideIn", [(0, v.eR)(":enter", [(0, v.oB)({
                        opacity: 0,
                        transform: "translateY(calc(var(--vh) * 3))"
                    }), (0, v.jt)("250ms 250ms ease-in-out", (0, v.oB)({
                        opacity: 1,
                        transform: "translateY(0)"
                    }))])]), (0, v.X$)("fadeAndScaleIn", [(0, v.eR)(":enter", [(0, v.oB)({
                        opacity: 0,
                        transform: "scale(0.5)"
                    }), (0, v.jt)("250ms ease-in-out", (0, v.oB)({opacity: 1, transform: "scale(1)"}))])])]
                }
            }), o
        })();

        function ut({xp: o, levelThresholds: r}) {
            o < 0 && (o = 0);
            const {level: t} = r.find((n, i) => o >= n.total_xp && o < r[i + 1].total_xp);
            return t
        }

        function He({xp: o, levelThresholds: r}) {
            const t = ut({xp: o, levelThresholds: r}), a = r[t].total_xp;
            return (o - a) / (r[t + 1].total_xp - a) * 100
        }

        function Xt(o, r) {
            o.addEventListener("pause", r), o.addEventListener("ended", r)
        }

        function Kt(o, r) {
            o.removeEventListener("pause", r), o.removeEventListener("ended", r)
        }

        var Ze = p(94057);

        function ai(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 11), e.NdJ("click", function () {
                    const a = e.CHM(t).index;
                    return e.oxw().gotoTask(a)
                }), e.TgZ(1, "picture"), e._UZ(2, "img", 12), e.qZA(), e._UZ(3, "div", 13), e.TgZ(4, "gu-heading-text", 14), e._uU(5), e.qZA(), e.TgZ(6, "gu-simple-text", 15), e._uU(7), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit;
                e.xp6(2), e.Q6J("src", t.image, e.LSH), e.xp6(3), e.hij(" ", t.title, " "), e.xp6(2), e.hij(" ", t.subtitle, " ")
            }
        }

        let si = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g) {
                    this.router = t, this.environment = n, this.activeModal = i, this.playService = a, this.gameService = s, this.authService = c, this.akumaService = l, this.guGAmeService = g, this.tasks = [{
                        name: "play",
                        image: "/gu-assets/images/tutorial/play-games.webp",
                        title: "Play Games",
                        subtitle: "Level up in Ranked to unlock more rewards.",
                        route: "game/gu/game-modes"
                    }, {
                        name: "workshop",
                        image: "/gu-assets/images/tutorial/workshop.webp",
                        title: "Workshop",
                        subtitle: "Build a deck in the Workshop",
                        route: "game/gu/my-decks"
                    }]
                }

                ngOnInit() {
                    const t = this.authService.getUserId();
                    this.gameService.updateUserTutorialMissions(t, {mission: 1, completed: !0}).subscribe(i => {
                        this.guGAmeService.fetchGameModes()
                    }), this.gameService.refreshGameContext(), this.akumaService.postScreenEvent("tutorial", "Complete", "", "opened"), this.akumaService.postFlowEvent("tutorialComplete", "succeeded"), this.akumaService.postFlowEvent("tutorialReward", "started")
                }

                ngAfterViewInit() {
                    this.playService.setPlaying(J.OC.OUT, O.B_.TUTORIAL)
                }

                openPacks() {
                    this.akumaService.postControlEvent("tutorial", "Complete", "", "temple", "Btn", "pressed"), this.activeModal.dismiss(), this.akumaService.postFlowEvent("tutorialReward", "succeeded"), this.router.navigate([Ze.gv.routeContent(this.environment).openPacks.path])
                }

                close() {
                    this.akumaService.postControlEvent("tutorial", "Complete", "", "close", "Btn", "pressed"), this.activeModal.dismiss()
                }

                gotoTask(t) {
                    this.activeModal.dismiss(), this.akumaService.postControlEvent("tutorial", "Complete", "", this.tasks[t].name, "Btn", "pressed"), this.router.navigate([this.tasks[t].route])
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(de.F0), e.Y36(h.Ho), e.Y36(B.mX), e.Y36(J.GT), e.Y36(qe.hM), e.Y36(h.mI), e.Y36(_.jt), e.Y36(X.xV))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-tutorial-end-modal"]],
                decls: 18,
                vars: 1,
                consts: [["iconLigature", "close_x", 1, "closeButton", 3, "click"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "x-small", 1, "title"], ["fillColor", "colors.light.300", 1, "subtitle"], [1, "tasks"], ["class", "tasks__subTask", 3, "click", 4, "ngFor", "ngForOf"], [1, "freeStuff"], ["src", "/gu-assets/images/tutorial/free-stuff-banner-end.png", 1, "freeStuff__bgImage"], [1, "freeStuff__cta"], ["src", "/gu-assets/images/tutorial/free-core-pack.png", 1, "freeStuff__cardImage"], ["fillColor", "colors.light.300", 1, "freeStuff__text"], ["size", "medium", "text", "Open Packs", 1, "freeStuff__ctaBtn", 3, "click"], [1, "tasks__subTask", 3, "click"], ["alt", "", 1, "tasks__subTask__image", 3, "src"], [1, "tasks__subTask__imageShadow"], ["size", "x-small", 1, "tasks__subTask__title"], ["fillColor", "colors.light.300", 1, "tasks__subTask__subtitle"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.close()
                    }), e.qZA(), e.TgZ(1, "gu-heading-text", 1), e._uU(2, " Congratulations, Mortal\n"), e.qZA(), e.TgZ(3, "gu-simple-text", 2), e._uU(4, " You\u2019ve won your first match, but there is much more for you to master...\n"), e.qZA(), e.TgZ(5, "div", 3), e.YNc(6, ai, 8, 3, "div", 4), e.qZA(), e.TgZ(7, "div", 5), e.TgZ(8, "picture"), e._UZ(9, "img", 6), e.qZA(), e.TgZ(10, "div", 7), e.TgZ(11, "picture"), e._UZ(12, "img", 8), e.qZA(), e.TgZ(13, "gu-simple-text", 9), e._uU(14, " Head to the temple to open your "), e.TgZ(15, "strong"), e._uU(16, "3 Core Packs "), e.qZA(), e.qZA(), e.TgZ(17, "gu-primary-hex-button", 10), e.NdJ("click", function () {
                        return n.openPacks()
                    }), e.qZA(), e.qZA(), e.qZA()), 2 & t && (e.xp6(6), e.Q6J("ngForOf", n.tasks))
                },
                directives: [d.sg],
                styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;background-color:#0f1b27;border:2px solid #3D5A74;box-sizing:border-box;box-shadow:5px 5px 15px #0006;width:900px;align-items:center}.closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;font-size:15px;color:#8be1e0;cursor:pointer}.closeButton[_ngcontent-%COMP%]:hover{color:#f6f6f6}.title[_ngcontent-%COMP%]{margin:20px}.subTitle[_ngcontent-%COMP%]{margin:20px;text-align:center}.tasks[_ngcontent-%COMP%]{margin:20px;display:flex;cursor:pointer}.tasks__subTask[_ngcontent-%COMP%]{position:relative;width:250px;margin:10px}.tasks__subTask[_ngcontent-%COMP%]:hover{border:2px solid #54BBCD;border-radius:4px}.tasks__subTask__image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;display:block;border-radius:4px}.tasks__subTask__imageShadow[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0px;background:linear-gradient(180deg,rgba(15,27,39,0) 40.36%,rgba(15,27,39,.8) 67.86%,rgba(15,27,39,.95) 100%)}.tasks__subTask__title[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:80px;text-align:center}.tasks__subTask__subtitle[_ngcontent-%COMP%]{position:absolute;bottom:40px;right:0;left:0;text-align:center;width:170px;margin-left:auto;margin-right:auto}.freeStuff[_ngcontent-%COMP%]{position:relative;margin-bottom:30px}.freeStuff__bgImage[_ngcontent-%COMP%]{width:850px;display:block}.freeStuff__tooltip[_ngcontent-%COMP%]{display:inline;text-align:center}.freeStuff__cta[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:absolute;left:0;right:0;top:0px;bottom:0px}.freeStuff__ctaBtn[_ngcontent-%COMP%]{margin:0 20px}"]
            }), o
        })();
        var en = p(96727), ci = p(4390), li = p(78812), _t = p(83035), F = (() => {
            return (o = F || (F = {})).deckBuilder = "deck-builder", o.arena = "game-modes", o.workshop = "my-decks", o.trader = "trader", o.trailer = "trailer", o.openPacks = "temple", o.collections = "inventory", o.drafter = "drafter", o.forge = "forge", o.referrals = "referrals", o.myCards = "my-cards", o.raffle = "raffle", o.streamer = "streamer", o.spgp = "spgp", o.starStore = "star-store", o.playToEarn = "play-to-earn", F;
            var o
        })(), di = p(77391);
        let ht = (() => {
            class o {
                transform(t) {
                    return !t || t.length < 11 ? t : `${t.slice(0, 6)}...${t.slice(t.length - 4)}`
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275pipe = e.Yjl({name: "addressTruncate", type: o, pure: !0}), o
        })();
        p(18464);
        const gi = ["k", "m", "g", "t", "p", "e"];
        let Fe = (() => {
            class o {
                transform(t, n) {
                    let i;
                    if (Number.isNaN(t)) return null;
                    if (t < 1e3) return t;
                    i = Math.floor(Math.log(t) / Math.log(1e3));
                    const a = t / Math.pow(1e3, i);
                    if (Number.isNaN(a)) return null;
                    const s = gi[i - 1];
                    return `${a.toFixed(n)}${s}`
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275pipe = e.Yjl({name: "numberAbbreviation", type: o, pure: !0}), o
        })(), pi = (() => {
            class o {
                transform(t, n, ...i) {
                    const a = JSON.parse(JSON.stringify(t));
                    return Object.keys(a).filter(c => {
                        if (a[c].hasOwnProperty("children")) {
                            const l = this.transform(a[c].children, n);
                            a[c].children = l
                        }
                        return !Object.keys(n).includes(a[c].featureFlag) || n[a[c].featureFlag]
                    }).reduce((c, l) => (c[l] = a[l], c), {})
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275pipe = e.Yjl({name: "filterNavItemsByFeatureFlags", type: o, pure: !0}), o
        })();
        const ui = ["headerBar"], _i = ["*"];
        let hi = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k, A, G, U, q, z) {
                    this.router = t, this.ngZone = n, this.userService = i, this.navigationStateService = a, this.queueService = s, this.modalService = c, this.authService = l, this.navigation = g, this.cerberusModalService = b, this.platformPaymentsService = C, this.packService = k, this.environment = A, this.akumaService = G, this.starService = U, this.fluxService = q, this.featureFlagsService = z, this.unsubscribe = new M.xQ, this.navigationItems = {}, this.userMenuItems = {}, l.fetchAccount(), this.initMenuItems(), this.initUserProperties(), this.initRouteChanges(), this.initUnopenedPacks()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initMenuItems() {
                    (0, D.aj)([this.navigationStateService.navigationItems$, this.navigationStateService.userMenuItems$, this.featureFlagsService.getMany([_.vU.forgeEnabled, _.vU.playToEarnEnabled])]).pipe((0, u.R)(this.unsubscribe), (0, P.h)(([t, n, i]) => !!t && !!n)).subscribe(([t, n, i]) => {
                        this.enabledFeatures = i, this.navigationItems = t, this.userMenuItems = n
                    }), this.navigationStateService.storeNavigationItems(Object.assign({}, Ze.gv.routeContent(this.environment))), this.navigationStateService.storeUserMenuItems(Object.assign({}, Ze.gv.userMenuItemsContent(this.environment)))
                }

                initUnopenedPacks() {
                    this.packService.fetchUnopenedPacks(), this.packService.unopenedPacks$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => this.navigationStateService.toggleNotifyOpenPacks(!!t.length))
                }

                initRouteChanges() {
                    this.navigation.currentRoute$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        const n = Object.keys(F).filter(i => F[i] == t)[0];
                        this.akumaService.postControlEvent("gu", "Arena", "", n, "Mnu", "pressed")
                    })
                }

                initUserProperties() {
                    this.userService.fetchExtendedAccount(), this.fluxService.fetchFluxInfo(), this.starService.fetchUserStarsTotal(), (0, D.aj)([this.userService.extendedAccountProperties$, this.fluxService.fluxInfo$, this.starService.userStarTotal$]).pipe((0, u.R)(this.unsubscribe)).subscribe(([t, n, i]) => {
                        this.accountProperties = t, this.userStarsTotal = i, this.userFluxTotal = null == n ? void 0 : n.flux_available
                    })
                }

                onConnectWallet(t) {
                    (0, ci.rb)({url: Ze.gv.userMenuItemsContent(this.environment).connectWallet.url})
                }

                onShowTransactions(t) {
                    this.platformPaymentsService.launchHistory()
                }

                onLogout(t) {
                    this.modalService.destroyTopModal(), this.queueService.stopAllQueues(), this.authService.logout()
                }

                profileClicked() {
                    this.akumaService.postControlEvent("gu", "Arena", "", "profile", "Mnu", "pressed")
                }

                onLogoClick(t) {
                    this.akumaService.postControlEvent("gu", "Arena", "", "immutableLogo", "Btn", "pressed")
                }

                onExternalNavItemClick(t) {
                    this.akumaService.postControlEvent("gu", "Arena", "", t.detail.navItem.shortName, "Btn", "pressed")
                }

                onMenuDropDownOpen(t) {
                    this.akumaService.postControlEvent("gu", "Arena", "", t.detail.navItem.shortName, "Mnu", "pressed")
                }

                onUserDetailsClick(t) {
                    this.router.navigate(["/game/gu/star-store"])
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(de.F0), e.Y36(e.R0b), e.Y36(ne.MZ), e.Y36(li.f), e.Y36(_t.g), e.Y36(T.Z), e.Y36(h.mI), e.Y36(di.f), e.Y36(B.Qz), e.Y36(Nt), e.Y36(me.F), e.Y36(h.Ho), e.Y36(_.jt), e.Y36(_.cM), e.Y36(_.TJ), e.Y36(h.B3))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-desktop-header-provider"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(ui, 7), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.headerBar = i.first)
                    }
                },
                ngContentSelectors: _i,
                decls: 8,
                vars: 22,
                consts: [[3, "router", "ngZone", "navigationItems", "onLogoClick", "onExternalNavItemClick", "onMenuDropDownOpen"], ["headerBar", ""], ["slot", "userArea", 3, "menuItems", "userProperties", "userStarsTotal", "userFluxTotal", "router", "ngZone", "downloadLauncherUrl", "onShowTransactions", "onLogout", "onConnectWallet", "click", "onUserDetailsClick"]],
                template: function (t, n) {
                    1 & t && (e.F$t(), e.TgZ(0, "gu-header-bar", 0, 1), e.NdJ("onLogoClick", function (a) {
                        return n.onLogoClick(a)
                    })("onExternalNavItemClick", function (a) {
                        return n.onExternalNavItemClick(a)
                    })("onMenuDropDownOpen", function (a) {
                        return n.onMenuDropDownOpen(a)
                    }), e.ALo(2, "filterNavItemsByFeatureFlags"), e.TgZ(3, "gu-header-user-area", 2), e.NdJ("onShowTransactions", function (a) {
                        return n.onShowTransactions(a)
                    })("onLogout", function (a) {
                        return n.onLogout(a)
                    })("onConnectWallet", function (a) {
                        return n.onConnectWallet(a)
                    })("click", function () {
                        return n.profileClicked()
                    })("onUserDetailsClick", function (a) {
                        return n.onUserDetailsClick(a)
                    }), e.ALo(4, "filterNavItemsByFeatureFlags"), e.ALo(5, "numberAbbreviation"), e.ALo(6, "numberAbbreviation"), e.qZA(), e.qZA(), e.Hsn(7)), 2 & t && (e.Q6J("router", n.router)("ngZone", n.ngZone)("navigationItems", e.xi3(2, 10, n.navigationItems, n.enabledFeatures)), e.xp6(3), e.Q6J("menuItems", e.xi3(4, 13, n.userMenuItems, n.enabledFeatures))("userProperties", n.accountProperties)("userStarsTotal", e.xi3(5, 16, n.userStarsTotal, 2))("userFluxTotal", e.xi3(6, 19, n.userFluxTotal, 2))("router", n.router)("ngZone", n.ngZone)("downloadLauncherUrl", n.launcherUrl))
                },
                pipes: [pi, Fe],
                styles: ["[_nghost-%COMP%]{display:block;padding-top:80px;position:relative;z-index:22}gu-header-bar[_ngcontent-%COMP%]{background:transparent;position:absolute;top:0;left:0;width:100%}"]
            }), o
        })();
        var Ye = p(39765), mi = p(25774), fi = p(97993);
        let Ci = (() => {
            class o {
                constructor(t, n, i) {
                    this.vc = t, this.el = n, this.componentService = i, this.componentService.registerContainer(n.nativeElement.nodeName, this.vc, this.el)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(e.s_b), e.Y36(e.SBq), e.Y36(Ue))
            }, o.\u0275dir = e.lG2({type: o, selectors: [["", "evalInstantly", ""]]}), o
        })();

        function vi(o, r) {
            1 & o && (e.TgZ(0, "cerberus-announce-banner-control", 3), e._UZ(1, "gu-outage-banner"), e.qZA()), 2 & o && e.Q6J("closable", !1)
        }

        function bi(o, r) {
            1 & o && (e.TgZ(0, "cerberus-announce-banner-control", 4), e._UZ(1, "gu-ranked-weekend-cancelled-banner"), e.qZA())
        }

        function wi(o, r) {
            1 & o && (e.TgZ(0, "cerberus-announce-banner-control", 4), e._UZ(1, "cerberus-controllable-banner"), e.qZA())
        }

        function xi(o, r) {
            1 & o && (e.TgZ(0, "div", 8), e.TgZ(1, "div", 9), e.TgZ(2, "gu-paragraph-text", 10), e._uU(3, " PTR REALM - DOES NOT REPRESENT THE FINAL PRODUCT "), e.qZA(), e.qZA(), e.qZA())
        }

        function Mi(o, r) {
            if (1 & o && (e.TgZ(0, "main"), e.YNc(1, xi, 4, 0, "div", 5), e._UZ(2, "router-outlet", null, 6), e.GkF(4, 7), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", "ptr" === t.branch)
            }
        }

        let yi = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k, A, G, U, q, z, ee, E, dg, gg, pg, ug) {
                    this.gameService = n, this.authService = g, this.assetsService = q, this.ngRxStore = z, this.modalService = ee, this.audioService = E, this.vcr = dg, this.playService = gg, this.loggerService = pg, this.cerberusModalService = ug, this.inGame = !1, this.branch = "beta", this.Flags = _.vU, this.unsubscribe = new M.xQ, this.inTutorial = !1, this.checkClearLogs(), this.watchForInGame(), this.audioService.loginToLauncher.play(), n.checkInstallationPath(1), this.branch = n.getProperty(1, "branch"), g.account$.pipe((0, P.h)(Pe => !!Pe), (0, u.R)(this.unsubscribe)).subscribe(Pe => {
                        c.fetchAccountThresholdsByUserId(Pe.id)
                    }), c.fetchGameRanks(), t.fetchGameModes(), i.fetchProtoCards(), i.fetchInventory(), i.fetchQualityCount(), i.loadInventoryCards().pipe((0, u.R)(this.unsubscribe)).subscribe(), a.fetchStarterDecks(), a.fetchDecks(), U.fetchSealed(), n.setGuGameContext(), s.fetchExtendedAccount(), g.fetchAccount(), A.fetchFusingLevels(), G.fetchData(), n.fetchBranchesExtended(1), b.fetchFluxInfo(), C.fetchGauntletSlots(), k.loadSelectedWallet(), l.onContainerCreated("#comment", (Pe, _g) => this.modalService.setModalVCRs(Pe, this.vcr)), l.onContainerDestroyed("#comment", (Pe, _g) => this.modalService.setModalVCRs(null, null))
                }

                ngOnInit() {
                }

                ngOnDestroy() {
                    clearInterval(this.newSoldCardsCheckTimer), this.unsubscribe.next(), this.unsubscribe.complete()
                }

                getState(t) {
                    return t.activatedRouteData.state
                }

                checkClearLogs() {
                    !this.loggerService.shouldClearLogs() || this.loggerService.clearLogs()
                }

                watchForInGame() {
                    this.playService.playing$.pipe((0, u.R)(this.unsubscribe), (0, st.x)()).subscribe(t => {
                        switch (t.status) {
                            case J.OC.IN:
                                this.inGame = !0, t.gameModeId === O.B_.TUTORIAL && (this.inTutorial = !0);
                                break;
                            case J.OC.PROGRESSION_ACCOUNT:
                                t.gameModeId === O.B_.TUTORIAL && this.inTutorial ? (this.showTutorialEndModal(), this.inTutorial = !1) : this.modalService.createModal(ri, {gameModeId: t.gameModeId}, {
                                    canCloseFromOutside: !1,
                                    position: m.e1.Center,
                                    size: m.Cg.Fullscreen
                                });
                                break;
                            case J.OC.OUT:
                                t.gameModeId === O.B_.TUTORIAL && this.inTutorial && this.showTutorialEndModal(), this.inGame = !1, this.inTutorial = !1
                        }
                    })
                }

                showTutorialEndModal() {
                    const t = this.authService.getUserId();
                    this.gameService.getUserTutorialMissions(t).pipe((0, x.q)(1)).subscribe(n => {
                        n[0].completed ? this.playService.setPlaying(J.OC.OUT, O.B_.TUTORIAL) : this.cerberusModalService.open(si).result.then(s => {
                        }, s => {
                        })
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(X.xV), e.Y36(qe.hM), e.Y36(_.dK), e.Y36(j.D), e.Y36(ne.MZ), e.Y36($.$z), e.Y36(Ue), e.Y36(h.mI), e.Y36(_.TJ), e.Y36(ve), e.Y36(he.d), e.Y36(ge), e.Y36(pe), e.Y36(Y.H), e.Y36(h.eQ), e.Y36(en.yh), e.Y36(T.Z), e.Y36(h.pk), e.Y36(e.s_b), e.Y36(J.GT), e.Y36(fo.m), e.Y36(B.Qz))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-gu"]],
                features: [e._Bn([Ue])],
                decls: 5,
                vars: 4,
                consts: [["class", "announceBannerControl", 3, "closable", 4, "featureFlagIf"], ["class", "announceBannerControl", 4, "featureFlagIf"], [4, "ngIf"], [1, "announceBannerControl", 3, "closable"], [1, "announceBannerControl"], ["class", "ptrWatermark", 4, "ngIf"], ["o", "outlet"], ["evalInstantly", ""], [1, "ptrWatermark"], [1, "ptrWatermark__textWrapper"], ["kind", "x-large", "fillColor", "colors.light.100", 1, "ptrWatermark__textWrapper__text"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "cerberus-desktop-header-provider"), e.YNc(1, vi, 2, 1, "cerberus-announce-banner-control", 0), e.YNc(2, bi, 2, 0, "cerberus-announce-banner-control", 1), e.YNc(3, wi, 2, 0, "cerberus-announce-banner-control", 1), e.qZA(), e.YNc(4, Mi, 5, 1, "main", 2)), 2 & t && (e.xp6(1), e.Q6J("featureFlagIf", n.Flags.outageBannerEnabled), e.xp6(1), e.Q6J("featureFlagIf", n.Flags.rankedWeekendCancelledBannerEnabled), e.xp6(1), e.Q6J("featureFlagIf", n.Flags.showControllableBanner), e.xp6(1), e.Q6J("ngIf", !n.inGame))
                },
                directives: [hi, Ye.w, d.O5, mi.O, fi.i, de.lC, Ci],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}[_nghost-%COMP%]     router-outlet~*{position:absolute;width:100%;height:100%}main[_ngcontent-%COMP%]{position:relative;flex:1}.ptrWatermark[_ngcontent-%COMP%]{position:absolute;left:calc(-50vh + 15px);display:flex;top:50vh;user-select:none;pointer-events:none}.ptrWatermark__textWrapper[_ngcontent-%COMP%]{transform:rotate(-90deg);width:100vh;height:30px;margin:auto;justify-content:center;display:flex}.ptrWatermark__textWrapper__text[_ngcontent-%COMP%]{opacity:.5}"],
                data: {animation: [mo]}
            }), o
        })();
        var tn = p(51649), ie = p(531);

        function ki(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 10), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().copyClick()
                }), e._uU(1, " Copy "), e.qZA()
            }
        }

        function Oi(o, r) {
            1 & o && (e.TgZ(0, "gu-plain-square-button", 11), e._uU(1, " Copied! "), e.qZA())
        }

        let Pi = (() => {
            class o {
                constructor(t, n) {
                    this.activeModal = t, this.copyService = n, this.copied = !1
                }

                ctaClick() {
                    this.activeModal.close()
                }

                copyClick() {
                    this.copyService.copyText(this.deckCode), this.copied = !0
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(B.mX), e.Y36(_.tX))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-deck-codes-export-modal"]],
                inputs: {deckCode: "deckCode"},
                decls: 18,
                vars: 3,
                consts: [["goldBorder", "top"], ["top", "4x-large"], ["align", "center", "kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100"], ["both", "large", 1, "copySection"], ["align", "center", "kind", "small", "fillColor", "colors.light.300", 1, "copySection__code"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "class", "copySection__cta", "leftIconPosition", "true", "icon", "action_duplicate", 3, "click", 4, "ngIf"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "class", "copySection__cta copySection__cta--copied", "leftIconPosition", "true", "icon", "checkbox_tick", 4, "ngIf"], ["align", "center", "kind", "medium", "fillColor", "colors.light.100", 1, "text"], ["top", "2x-large", "bottom", "4x-large"], ["size", "large", 1, "cta", 3, "click"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_duplicate", 1, "copySection__cta", 3, "click"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "checkbox_tick", 1, "copySection__cta", "copySection__cta--copied"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "gu-modal-background", 0), e.TgZ(1, "gu-vertical-space", 1), e.TgZ(2, "gu-paragraph-text", 2), e._uU(3, " Copy your deck and share with your friends "), e.qZA(), e.qZA(), e.TgZ(4, "gu-vertical-space", 3), e.TgZ(5, "gu-paragraph-text", 4), e._uU(6), e.qZA(), e.YNc(7, ki, 2, 0, "gu-plain-square-button", 5), e.YNc(8, Oi, 2, 0, "gu-plain-square-button", 6), e.qZA(), e.TgZ(9, "gu-vertical-space"), e.TgZ(10, "gu-paragraph-text", 7), e._uU(11, " Players who you send this to can use the "), e.TgZ(12, "strong"), e._uU(13, "IMPORT DECK"), e.qZA(), e._uU(14, " feature when they create a new deck. "), e.qZA(), e.qZA(), e.TgZ(15, "gu-vertical-space", 8), e.TgZ(16, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                        return n.ctaClick()
                    }), e._uU(17, " GO BACK "), e.qZA(), e.qZA()), 2 & t && (e.xp6(6), e.hij(" ", n.deckCode, " "), e.xp6(1), e.Q6J("ngIf", !n.copied), e.xp6(1), e.Q6J("ngIf", n.copied))
                },
                directives: [d.O5],
                styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:640px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.heading[_ngcontent-%COMP%]{text-transform:uppercase}.copySection[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.copySection__code[_ngcontent-%COMP%]{max-width:320px;border:#527493 solid 1px;background:#1D2F41;padding:9px 16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-right:8px}.copySection__cta[_ngcontent-%COMP%]{min-width:120px}.copySection__cta--copied[_ngcontent-%COMP%]{cursor:default}"]
            }), o
        })();
        const Si = ["*"];
        let ue = (() => {
            class o {
                constructor(t) {
                    this.audioService = t, this.closeButtonClickFn = () => ({})
                }

                ngOnInit() {
                }

                closeButtonClick() {
                    this.audioService.clickTinyV2.play(), this.closeButtonClickFn()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-modal-sidebar"]],
                inputs: {closeButtonClickFn: "closeButtonClickFn"},
                ngContentSelectors: Si,
                decls: 2,
                vars: 0,
                consts: [["iconLigature", "close_x", 1, "closeButton", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.F$t(), e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.closeButtonClick()
                    }), e.qZA(), e.Hsn(1))
                },
                styles: ["[_nghost-%COMP%]{padding-top:calc(var(--vh) * 4.5);display:flex;flex-flow:column nowrap;align-items:center;width:calc(var(--vh) * 7.7);position:absolute;top:0;left:0;height:100%}.closeButton[_ngcontent-%COMP%]{width:calc(var(--vh) * 3);height:calc(var(--vh) * 3);font-size:calc(var(--vh) * 1.7);border-radius:50%;display:flex;line-height:1;border:2px solid var(--gu-blue);color:#f6f6f6;cursor:pointer}.closeButton[_ngcontent-%COMP%]:hover{background:var(--gu-blue)}.closeButton[_ngcontent-%COMP%]     i{margin:auto;line-height:1}"]
            }), o
        })(), Je = (() => {
            class o {
                constructor() {
                }

                ngOnInit() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-rectangular-spinner"]],
                decls: 5,
                vars: 0,
                consts: [[1, "rect1"], [1, "rect2"], [1, "rect3"], [1, "rect4"], [1, "rect5"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "div", 0), e._UZ(1, "div", 1), e._UZ(2, "div", 2), e._UZ(3, "div", 3), e._UZ(4, "div", 4))
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{width:calc(var(--vw) * 4);height:calc(var(--vh) * 5);display:flex;justify-content:center}div[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#affaed 0%,#8be1e0 50%,#54bbcd 100%);width:calc(var(--vw) * .2);margin-right:calc(var(--vw) * .2);animation:stretchDelay 1.2s infinite ease-in-out}div[_ngcontent-%COMP%]:last-child{margin:0}.rect2[_ngcontent-%COMP%]{animation-delay:-1.1s}.rect3[_ngcontent-%COMP%]{animation-delay:-1s}.rect4[_ngcontent-%COMP%]{animation-delay:-.9s}.rect5[_ngcontent-%COMP%]{animation-delay:-.8s}@keyframes stretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(.6)}}"]
            }), o
        })();
        var Q = p(57674);

        class se {
            constructor(r, t, n) {
                this.name = r, this.rules = t, this.groupingType = n
            }
        }

        class ce {
            constructor(r, t, n, i = [], a) {
                this.property = r, this.groups = t, this.includedInGroup = n, this.excludedTypes = i, this.noMatchingGroup = a
            }
        }

        var Z = (() => {
            return (o = Z || (Z = {}))[o.Packge = 0] = "Packge", o[o.Mana = 1] = "Mana", o[o.Keyword = 2] = "Keyword", o[o.Health = 3] = "Health", o[o.Attack = 4] = "Attack", o[o.Tribe = 5] = "Tribe", o[o.Card = 6] = "Card", o[o.Type = 7] = "Type", o[o.God = 8] = "God", o[o.Rarity = 9] = "Rarity", o[o.Set = 10] = "Set", o[o.Quality = 11] = "Quality", Z;
            var o
        })();

        class nn {
            constructor(r, t, n = null, i = []) {
                this.header = r, this.currentGrouping = t, this.image = n, this.cards = i
            }
        }

        class on {
            constructor(r, t, n = null, i = []) {
                this.header = "weapon" === r ? "relic" : r, this.currentGrouping = t, this.image = n, this.cards = i
            }
        }

        class rn {
            constructor(r, t, n, i = null, a = []) {
                this.header = "weapon" === r ? "relic" : r, this.currentGrouping = t, this.quality = n, this.image = i, this.cards = a
            }
        }

        let _e = (() => {
            class o {
                constructor(t) {
                    this.cardsService = t, this.gods = ["death", "deception", "light", "magic", "nature", "war", "neutral"], this.sets = ["genesis", "core", "etherbots", "promo", "mythic", "welcome", "trial", "order"], this.rarities = ["legendary", "epic", "rare", "common", "mythic"], this.types = ["spell", "weapon", "creature"], this.tribes = ["aether", "amazon", "anubian", "atlantean", "dragon", "nether", "olympian", "viking", "guild", "mystic", "structure", "wild"], this.qualities = ["no quality", "diamond", "gold", "shadow", "meteorite", "plain"], this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.numberIncludedInGroup = n => n < 9, this.stringIncludedInGroup = n => !!n, this._initGroupingRules(), this._initGroupings(), this.cardsService.inventory$.pipe((0, w.b)(n => this.inventoryCardsMap = n)).subscribe()
                }

                get groupings() {
                    return this._groupings
                }

                get groupingsNoQuality() {
                    return this._groupings.filter(t => t.groupingType !== Z.Quality)
                }

                get defaultGrouping() {
                    return this._groupings[0]
                }

                get groupingsNoTribe() {
                    return this._groupings.filter(t => t.groupingType !== Z.Tribe)
                }

                _initGroupingRules() {
                    this.godGrouping = new ce("god", this.gods, this.stringIncludedInGroup), this.setGrouping = new ce("set", this.sets, this.stringIncludedInGroup), this.rarityGrouping = new ce("rarity", this.rarities, this.stringIncludedInGroup), this.typeGrouping = new ce("type", this.types, this.stringIncludedInGroup), this.tribeGrouping = new ce("tribe", this.tribes, this.stringIncludedInGroup, ["weapon", "spell"], "none"), this.manaGrouping = new ce("mana", this.numbers, this.numberIncludedInGroup, [], "9+"), this.healthGrouping = new ce("health", this.numbers, this.numberIncludedInGroup, ["spell"], "9+"), this.attackGrouping = new ce("attack", this.numbers, this.numberIncludedInGroup, ["spell"], "9+"), this.qualityGrouping = new ce("quality", this.qualities, this.stringIncludedInGroup, [])
                }

                _initGroupings() {
                    this._groupings = [new se("Mana", this.manaGrouping, Z.Mana), new se("Health", this.healthGrouping, Z.Health), new se("Attack", this.attackGrouping, Z.Attack), new se("Tribe", this.tribeGrouping, Z.Tribe), new se("Type", this.typeGrouping, Z.Type), new se("God", this.godGrouping, Z.God), new se("Rarity", this.rarityGrouping, Z.Rarity), new se("Set", this.setGrouping, Z.Set), new se("Quality", this.qualityGrouping, Z.Quality)]
                }

                addToCardGrouping(t, n, i, a) {
                    const s = i.protoCard;
                    if (n.rules.excludedTypes.includes(s.type)) return t;
                    const c = s[n.rules.property],
                        l = n.rules.includedInGroup(c) ? c.toString() : n.rules.noMatchingGroup;
                    if (l) {
                        let g = t.get(l).cards;
                        g.push(i), t.get(l).cards = [...g]
                    }
                    return t
                }

                removeFromCardGrouping(t, n, i) {
                    const s = i.protoCard[n.rules.property];
                    return n.rules.includedInGroup(s) ? t.get(s.toString()).cards = t.get(s.toString()).cards.filter(c => c.id !== i.id) : n.rules.noMatchingGroup && (t.get(n.rules.noMatchingGroup).cards = t.get(n.rules.noMatchingGroup).cards.filter(c => c.id !== i.id)), t
                }

                createCardGrouping(t) {
                    const n = new Map;
                    for (let i of t.rules.groups) n.set(i.toString(), new nn(i.toString(), t));
                    return t.rules.noMatchingGroup && n.set(t.rules.noMatchingGroup, new nn(t.rules.noMatchingGroup, t)), n
                }

                groupProtos(t, n, i = null, a = !1, s) {
                    const c = this._createProtoGrouping(n), l = s || this.inventoryCardsMap;
                    for (let g of t) {
                        if (!a && !g.collectable || i && g.god !== i && "neutral" !== g.god || n.rules.excludedTypes.includes(g.type)) continue;
                        const b = g[n.rules.property], C = l[g.proto] || [],
                            k = C.length > 0 ? this.createQualityMap(C) : null;
                        if (n.rules.includedInGroup(b)) {
                            const A = c.get(b.toString());
                            if (!A || !A.cards) continue;
                            A.cards.push({pc: g, qualityMap: k})
                        } else n.rules.noMatchingGroup && c.get(n.rules.noMatchingGroup).cards.push({
                            pc: g,
                            qualityMap: k
                        })
                    }
                    return c
                }

                _createProtoGrouping(t) {
                    const n = new Map;
                    for (let i of t.rules.groups) n.set(i.toString(), new on(i.toString(), t));
                    return t.rules.noMatchingGroup && n.set(t.rules.noMatchingGroup, new on(t.rules.noMatchingGroup, t)), n
                }

                _createQualityGrouping(t) {
                    const n = new Map;
                    for (let i of t.rules.groups) {
                        const a = this.qualities.indexOf(i.toString());
                        n.set(i.toString(), new rn(i.toString(), t, a))
                    }
                    return t.rules.noMatchingGroup && n.set(t.rules.noMatchingGroup, new rn(t.rules.noMatchingGroup, t, 0)), n
                }

                newQualityMap() {
                    const t = new Map;
                    for (let n in f.nJ) "number" == typeof f.nJ[n] && t.set(f.nJ[n], []);
                    return t
                }

                createQualityMap(t) {
                    const n = this.newQualityMap();
                    return t.forEach(i => {
                        n.get(i.q).push(i)
                    }), n
                }

                groupQualities(t, n, i = null, a = !1, s) {
                    const c = this._createQualityGrouping(n), l = s || this.inventoryCardsMap;
                    for (let g of t) {
                        if (!a && !g.collectable || i && g.god !== i && "neutral" !== g.god || n.rules.excludedTypes.includes(g.type)) continue;
                        const C = l[g.proto] || [], k = C.length > 0 ? this.createQualityMap(C) : null;
                        null !== k && k.forEach((A, G) => {
                            if (A.length <= 0) return;
                            let U = this.qualities[G];
                            if (U || (U = "plain"), n.rules.includedInGroup(U)) {
                                const q = c.get(U);
                                if (!q || !q.cards) return;
                                q.cards.push({pc: g, ics: A})
                            } else n.rules.noMatchingGroup && c.get(n.rules.noMatchingGroup).cards.push({pc: g, ics: A})
                        })
                    }
                    return c
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.dK))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })(), H = (() => {
            class o {
                constructor(t, n, i) {
                    this.cardsService = t, this.elRef = n, this.audioService = i, this.quality = 5, this.sound = !0, this.unsubscribe = new M.xQ
                }

                ngOnInit() {
                    this.getCardProtoData()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngOnChanges(t) {
                    t.protoId && !t.protoId.firstChange && (this.protoSubscription.unsubscribe(), this.getCardProtoData())
                }

                onHover() {
                    this.sound && this.audioService.hoverItem.play()
                }

                getCardProtoData() {
                    this.protoSubscription = this.cardsService.getProtoCard(this.protoId).pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.cardProtoData = Object.assign(Object.assign({}, t), {id: this.protoId})
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.dK), e.Y36(e.SBq), e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-card2"]],
                inputs: {
                    protoId: "protoId",
                    quality: "quality",
                    responsiveSrcsetSizes: "responsiveSrcsetSizes",
                    sound: "sound"
                },
                features: [e.TTD],
                decls: 1,
                vars: 3,
                consts: [[3, "inputProtoData", "quality", "responsiveSrcsetSizes", "mouseenter"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "composited-card", 0), e.NdJ("mouseenter", function () {

                    }), e.qZA()), 2 & t && e.Q6J("inputProtoData", n.cardProtoData)("quality", n.quality)("responsiveSrcsetSizes", n.responsiveSrcsetSizes)
                },
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}[_nghost-%COMP%]{display:block;position:relative}"]
            }), o
        })();
        var xe = p(17268);
        const mt = function (o) {
            return {selected: o}
        };

        function Ti(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "button", 7), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(3).clickGroupingHeader(i.value.header)
                }), e.TgZ(1, "span", 8), e._uU(2), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(3);
                e.Q6J("ngClass", e.VKq(2, mt, -1 !== n.selectedHeaders.indexOf(t.value.header))), e.xp6(2), e.Oqu(n.shortenHeaderText(t.value.header))
            }
        }

        function Ai(o, r) {
            if (1 & o && (e.TgZ(0, "app-tooltip", 5), e.YNc(1, Ti, 3, 4, "button", 6), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.MGl("title", "Filter by ", t.value.header, ""), e.xp6(1), e.Q6J("ngIf", t.value.header)
            }
        }

        function Ii(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Ai, 2, 2, "app-tooltip", 2), e.ALo(2, "keyvalue"), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.Q6J("ngForOf", e.xi3(2, 1, t.cardGrouping, t.subGroupingOrder))
            }
        }

        function Zi(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "button", 7), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(3).clickGroupingHeader(i)
                }), e.TgZ(1, "span", 8), e._uU(2), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(3);
                e.Q6J("ngClass", e.VKq(2, mt, -1 !== n.selectedHeaders.indexOf(t))), e.xp6(2), e.Oqu(n.shortenHeaderText(t))
            }
        }

        function Fi(o, r) {
            if (1 & o && (e.TgZ(0, "app-tooltip", 5), e.YNc(1, Zi, 3, 4, "button", 6), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.MGl("title", "Filter by ", t, ""), e.xp6(1), e.Q6J("ngIf", t)
            }
        }

        function Di(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Fi, 2, 2, "app-tooltip", 2), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.Q6J("ngForOf", t.filterHeaders)
            }
        }

        function Gi(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div", 4), e._uU(2, "Filter by:"), e.qZA(), e.YNc(3, Ii, 3, 4, "ng-container", 0), e.YNc(4, Di, 2, 1, "ng-container", 0), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.Q6J("ngIf", t.cardGrouping), e.xp6(1), e.Q6J("ngIf", t.filterHeaders)
            }
        }

        function Bi(o, r) {
            1 & o && (e.TgZ(0, "div", 9), e._uU(1, " Sort by: "), e.qZA())
        }

        function Li(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-tooltip", 5), e.TgZ(1, "button", 7), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().clickSortOption(a)
                }), e._UZ(2, "gu-icon", 10), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.MGl("title", "Sort by ", t.name, ""), e.xp6(1), e.Q6J("ngClass", e.VKq(3, mt, n.activeSortOption === t)), e.xp6(1), e.Q6J("iconLigature", t.ligature)
            }
        }

        function Ui(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "form", 11), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().selectCheckbox()
                }), e._UZ(1, "input", 12), e._UZ(2, "label", 13), e.TgZ(3, "label", 14), e._uU(4, "Items in escrow"), e.qZA(), e._UZ(5, "input", 15), e._UZ(6, "label", 16), e.TgZ(7, "label", 17), e._uU(8, "Show Owned"), e.qZA(), e._UZ(9, "input", 18), e._UZ(10, "label", 19), e.TgZ(11, "label", 20), e._uU(12, "Show All"), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("formGroup", t.ownershipForm)
            }
        }

        class L {
            constructor(r, t, n, i) {
                this.name = r, this.ligature = t, this.sortAsc = n, this.sortDesc = i
            }
        }

        let ft = (() => {
            class o {
                constructor(t, n) {
                    this.fb = t, this.audio = n, this.sortOptions = [], this.showFilters = !0, this.unownedCheckboxVisible = !1, this.noSortByLabel = !1, this.showUnowned = !0, this.selectedHeaders = [], this.groupingHeaderChange = new e.vpe, this.sortChange = new e.vpe, this.unownedChange = new e.vpe, this.searchChange = new e.vpe, this.ownershipChange = new e.vpe, this.activeSortOption = this.sortOptions[0], this.activeSortAsc = !1, this.marked = !1, this.unsubscribe = new M.xQ, this.subGroupingOrder = (i, a) => {
                        const c = a.value.currentGrouping.rules,
                            g = i.value.currentGrouping.rules.groups.map(k => k.toString()).indexOf(i.key),
                            C = c.groups.map(k => k.toString()).indexOf(a.key);
                        return -1 === g ? 1 : -1 === C ? -1 : g - C
                    }
                }

                ngOnInit() {
                    this.initFormGroup()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngOnChanges(t) {
                    t.unownedCheckboxVisible && !t.unownedCheckboxVisible.firstChange && this.ownershipForm.setValue({ownership: "all"})
                }

                shortenHeaderText(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1, 2)
                }

                clickGroupingHeader(t) {
                    this.audio.clickTinyV1.play(), -1 === this.selectedHeaders.indexOf(t) ? this.selectedHeaders.push(t) : this.selectedHeaders = this.selectedHeaders.filter(n => n !== t), this.groupingHeaderChange.emit(this.selectedHeaders)
                }

                clickSortOption(t) {
                    this.audio.clickTinyV1.play(), t === this.activeSortOption ? this.activeSortAsc = !this.activeSortAsc : (this.activeSortOption = t, this.activeSortAsc = !0), this.sortChange.emit(this.activeSortAsc ? this.activeSortOption.sortAsc : this.activeSortOption.sortDesc)
                }

                initFormGroup() {
                    let initialOwnership = localStorage.getItem('collectionOwnership') || 'all';
                    this.ownershipForm = this.fb.group({ownership: initialOwnership}), this.ownershipForm.get("ownership").valueChanges.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        localStorage.setItem('collectionOwnership', t);
                        this.ownershipChange.emit(t)
                    });
                    this.ownershipChange.emit(initialOwnership);
                }

                selectCheckbox() {
                    this.audio.clickTinyV1.play()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(I.qu), e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-filter-sort-bar"]],
                inputs: {
                    sortOptions: "sortOptions",
                    showFilters: "showFilters",
                    cardGrouping: "cardGrouping",
                    filterHeaders: "filterHeaders",
                    unownedCheckboxVisible: "unownedCheckboxVisible",
                    noSortByLabel: "noSortByLabel",
                    showUnowned: "showUnowned",
                    selectedHeaders: "selectedHeaders"
                },
                outputs: {
                    groupingHeaderChange: "groupingHeaderChange",
                    sortChange: "sortChange",
                    unownedChange: "unownedChange",
                    searchChange: "searchChange",
                    ownershipChange: "ownershipChange"
                },
                features: [e.TTD],
                decls: 4,
                vars: 4,
                consts: [[4, "ngIf"], ["class", "filterLabel filterLabel--leftSpacing", 4, "ngIf"], ["class", "filterButtonAndTooltip", 3, "title", 4, "ngFor", "ngForOf"], ["class", "unownedCheckbox", 3, "formGroup", "click", 4, "ngIf"], [1, "filterLabel"], [1, "filterButtonAndTooltip", 3, "title"], ["class", "filterButton", 3, "ngClass", "click", 4, "ngIf"], [1, "filterButton", 3, "ngClass", "click"], [1, "filterButton__text"], [1, "filterLabel", "filterLabel--leftSpacing"], [1, "filterButton__icon", 3, "iconLigature"], [1, "unownedCheckbox", 3, "formGroup", "click"], ["value", "escrow", "name", "ownership", "formControlName", "ownership", "type", "radio", "id", "escrowCheckbox", 1, "form-check-input"], ["for", "escrowCheckbox", 1, "checker", "checker--radio"], ["for", "escrowCheckbox", 1, "form-check-label", "unownedCheckbox__text"], ["value", "owned", "name", "ownership", "formControlName", "ownership", "type", "radio", "id", "ownedCheckbox", 1, "form-check-input"], ["for", "ownedCheckbox", 1, "checker", "checker--radio"], ["for", "ownedCheckbox", 1, "form-check-label", "unownedCheckbox__text"], ["value", "all", "name", "ownership", "formControlName", "ownership", "type", "radio", "id", "allCheckbox", 1, "form-check-input"], ["for", "allCheckbox", 1, "checker", "checker--radio"], ["for", "allCheckbox", 1, "form-check-label", "unownedCheckbox__text"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Gi, 5, 2, "ng-container", 0), e.YNc(1, Bi, 2, 0, "div", 1), e.YNc(2, Li, 3, 5, "app-tooltip", 2), e.YNc(3, Ui, 13, 1, "form", 3)), 2 & t && (e.Q6J("ngIf", n.showFilters), e.xp6(1), e.Q6J("ngIf", !n.noSortByLabel), e.xp6(1), e.Q6J("ngForOf", n.sortOptions), e.xp6(1), e.Q6J("ngIf", n.unownedCheckboxVisible))
                },
                directives: [d.O5, d.sg, xe.K, d.mk, I._Y, I.JL, I.sg, I.Fj, I._, I.JJ, I.u],
                pipes: [d.Nd],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.filterLabel[_ngcontent-%COMP%], .filterButton__text[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.filterButton__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.filterLabel[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.11)}[_nghost-%COMP%]{display:flex}.filterLabel[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * .7);color:#7192b0;align-self:center}.filterLabel--leftSpacing[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1)}.filterButtonAndTooltip[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * .5)}.filterButtonAndTooltip[_ngcontent-%COMP%]:last-of-type{margin-right:0}.filterButton[_ngcontent-%COMP%]{width:calc(var(--vw) * 1.45);height:calc(var(--vw) * 1.45);margin-right:calc(var(--vw) * .2);border-radius:calc(var(--vh) * .4);display:flex;padding:0;cursor:pointer;border:calc(var(--vh) * .15) solid #182531;background:#0c1620;color:#7192b0;outline:none}.filterButton.selected[_ngcontent-%COMP%]{background:#3d5a74;border-color:#7192b0;color:#f6f6f6}.filterButton[_ngcontent-%COMP%]:hover{color:#f6f6f6;background:#3d5a74;border-color:#3d5a74}.filterButton__text[_ngcontent-%COMP%]{line-height:1;margin:auto}.filterButton__icon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * .9);margin:auto;line-height:1;display:flex}.unownedCheckbox[_ngcontent-%COMP%]{display:flex;margin-left:auto;align-items:center}.form-check-label[_ngcontent-%COMP%]{color:#7192b0}"]
            }), o
        })();
        var Ct = p(80013);
        const qi = function (o) {
            return {selected: o}
        };

        function Ei(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "app-tooltip", 2), e.TgZ(2, "button", 3), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().selectGrouping(a)
                }), e._UZ(3, "gu-icon", 4), e.qZA(), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.MGl("title", "Group by ", t.name, ""), e.xp6(1), e.Q6J("ngClass", e.VKq(3, qi, n.isSelected(t))), e.xp6(1), e.Q6J("iconLigature", "filter_" + t.name.toLowerCase())
            }
        }

        function Ni(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "input", 5), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().selectSearchBox()
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("formControl", t.searchControl)
            }
        }

        let vt = (() => {
            class o {
                constructor(t) {
                    this.audioService = t, this.displayGroupingName = !0, this.displaySearch = !0, this.groupingChange = new e.vpe, this.searchChange = new e.vpe, this.searchControl = new I.NI(""), this.unsubscribe = new M.xQ
                }

                ngOnInit() {
                    this.watchSearch()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                selectGrouping(t) {
                    this.audioService.clickTinyV1.play(), this.activeGrouping = t, this.groupingChange.emit(this.activeGrouping)
                }

                selectSearchBox() {
                    this.audioService.clickTinyV1.play()
                }

                isSelected(t) {
                    return this.activeGrouping.groupingType === t.groupingType
                }

                watchSearch() {
                    this.searchControl.valueChanges.pipe((0, u.R)(this.unsubscribe), (0, Ct.b)(500), (0, st.x)(), (0, w.b)(t => this.searchChanged(t))).subscribe()
                }

                searchChanged(t) {
                    this.searchChange.emit(t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-singular-active-filter-bar"]],
                inputs: {
                    groupings: "groupings",
                    activeGrouping: "activeGrouping",
                    displayGroupingName: "displayGroupingName",
                    displaySearch: "displaySearch"
                },
                outputs: {groupingChange: "groupingChange", searchChange: "searchChange"},
                decls: 2,
                vars: 2,
                consts: [[4, "ngFor", "ngForOf"], ["type", "search", "class", "searchBox", "placeholder", "Search...", 3, "formControl", "click", 4, "ngIf"], [1, "filterButtonAndTooltip", 3, "title"], [1, "filterButton", 3, "ngClass", "click"], [1, "filterButton__icon", 3, "iconLigature"], ["type", "search", "placeholder", "Search...", 1, "searchBox", 3, "formControl", "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Ei, 4, 5, "ng-container", 0), e.YNc(1, Ni, 1, 1, "input", 1)), 2 & t && (e.Q6J("ngForOf", n.groupings), e.xp6(1), e.Q6J("ngIf", n.displaySearch))
                },
                directives: [d.sg, d.O5, xe.K, d.mk, I.Fj, I.JJ, I.oH],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.searchBox[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.searchBox[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.searchBox[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:flex}.filterButton[_ngcontent-%COMP%]{width:calc(var(--vw) * 1.8);height:calc(var(--vw) * 1.8);border:calc(var(--vh) * .15) solid #182531;border-radius:calc(var(--vh) * .4);background:#0c1620;color:#7192b0;display:flex;padding:0;outline:none}.filterButton.selected[_ngcontent-%COMP%]{background:#3d5a74;border-color:#7192b0;color:#f6f6f6}.filterButton[_ngcontent-%COMP%]:hover{color:#f6f6f6;background:#3d5a74;border-color:#3d5a74}.filterButtonAndTooltip[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * .5)}.filterButton__icon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * 1);margin:auto;line-height:1;display:flex}.searchBox[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * .5);padding-left:calc(var(--vw) * .5);padding-right:calc(var(--vw) * .5);outline:none;background:#182531;color:#7192b0;border:1px solid #0f1b27;border-radius:calc(var(--vh) * .4)}.searchBox[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#7192b0}"]
            }), o
        })();

        function Ri(o, r) {
            if (1 & o && e._UZ(0, "img", 1), 2 & o) {
                const t = e.oxw();
                e.MGl("src", "/gu-assets/images/gods/", t.god.toLowerCase(), ".webp", e.LSH)
            }
        }

        let an = (() => {
            class o {
                constructor() {
                    this.size = "normal"
                }

                get isSmall() {
                    return "small" === this.size
                }

                get isEmpty() {
                    return !this.god
                }

                ngOnInit() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-god-badge"]],
                hostVars: 4,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("godBadge--small", n.isSmall)("godBadge--empty", n.isEmpty)
                },
                inputs: {size: "size", god: "god"},
                decls: 1,
                vars: 1,
                consts: [["class", "godBadge__image", "alt", "god badge illustration", 3, "src", 4, "ngIf"], ["alt", "god badge illustration", 1, "godBadge__image", 3, "src"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Ri, 1, 1, "img", 0), 2 & t && e.Q6J("ngIf", n.god)
                },
                directives: [d.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}[_nghost-%COMP%]{width:calc(var(--vw) * 3.64);height:calc(var(--vw) * 3.64);display:flex;background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);transition:all .5s ease-in-out;overflow:hidden;opacity:1;border:calc(var(--vh) * .3) solid #e0c58f;transform:rotate(45deg)}.godBadge--empty[_nghost-%COMP%]{box-shadow:none;border:calc(var(--vh) * .2) solid #527493}.godBadge--small[_nghost-%COMP%]{width:calc(var(--vw) * 2.9);height:calc(var(--vw) * 2.9);box-shadow:0 0 calc(var(--vw) * 2.9) #edd5a480,0 0 calc(var(--vw) * .8) #f7e3bc99}.godBadge__image[_ngcontent-%COMP%]{display:block;margin-left:-25%;margin-top:-25%;width:150%;height:150%;transform:rotate(-45deg)}"]
            }), o
        })();
        const Qi = ["*"];
        let $e = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.resizeService = t, this.sanitizer = n, this.elRef = i, this.renderer = a, this.columns = 4, this.columnGapVwMultiplyer = 1.2, this.rowGapVhMultiplyer = .5, this.vw = 0, this.vh = 0, this.unsubscribe = new M.xQ, t.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({
                                                                                                                                                                                                                                                                                                            vw: s,
                                                                                                                                                                                                                                                                                                            vh: c
                                                                                                                                                                                                                                                                                                        }) => {
                        this.vw = s, this.vh = c
                    })).subscribe()
                }

                get getStyle() {
                    return this.sanitizer.bypassSecurityTrustStyle(`grid-column-gap: ${this.vw * this.columnGapVwMultiplyer}px,\n      grid-row-gap: ${this.vh * this.rowGapVhMultiplyer}px`)
                }

                get getClass() {
                    let t;
                    switch (this.columns) {
                        case 4:
                            t = "four";
                            break;
                        case 7:
                            t = "seven";
                            break;
                        case 8:
                            t = "eight";
                            break;
                        case 10:
                            t = "ten";
                            break;
                        case 11:
                            t = "eleven"
                    }
                    return `${this.className ? this.className : ""} ${t}Columns`
                }

                ngOnInit() {
                    this.renderer.addClass(this.elRef.nativeElement, this.className)
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(qt.H7), e.Y36(e.SBq), e.Y36(e.Qsj))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-grid-display"]],
                hostVars: 4,
                hostBindings: function (t, n) {
                    2 & t && (e.Akn(n.getStyle), e.Tol(n.getClass))
                },
                inputs: {
                    columns: "columns",
                    columnGapVwMultiplyer: "columnGapVwMultiplyer",
                    rowGapVhMultiplyer: "rowGapVhMultiplyer",
                    className: "className"
                },
                ngContentSelectors: Qi,
                decls: 1,
                vars: 0,
                template: function (t, n) {
                    1 & t && (e.F$t(), e.Hsn(0))
                },
                styles: [`
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    width: 100%;
                    display: block
                }
                
                .fourColumns[_nghost-%COMP%] {
                    grid-row-gap: calc(var(--vh) * 4.5);
                    grid-column-gap: calc(var(--vw) * 1.2);
                    display: grid;
                    grid-template-columns:repeat(4, 1fr);
                    align-items: start;
                    grid-auto-rows: min-content;
                    grid-template-areas:"item item item item" "desc desc desc desc"
                }
                
                .sevenColumns[_nghost-%COMP%] {
                    grid-row-gap: calc(var(--vh) * 4.5);
                    grid-column-gap: calc(var(--vw) * 1.2);
                    display: grid;
                    grid-template-columns:repeat(8, 1fr);
                    align-items: start;
                    grid-auto-rows: min-content;
                    grid-template-areas:"item item item item item item item item" "desc desc desc desc desc desc desc desc"
                }
                
                .eightColumns[_nghost-%COMP%] {
                    grid-row-gap: calc(var(--vh) * 4.5);
                    grid-column-gap: calc(var(--vw) * 1.2);
                    display: grid;
                    grid-template-columns:repeat(8, 1fr);
                    align-items: start;
                    grid-auto-rows: min-content;
                    grid-template-areas:"item item item item item item item item" "desc desc desc desc desc desc desc desc"
                }
                
                .tenColumns[_nghost-%COMP%] {
                    grid-row-gap: calc(var(--vh) * 4.5);
                    grid-column-gap: calc(var(--vw) * 1.2);
                    display: grid;
                    grid-template-columns:repeat(8, 1fr);
                    align-items: start;
                    grid-auto-rows: min-content;
                    grid-template-areas:"item item item item item item item item" "desc desc desc desc desc desc desc desc"
                }
                
                .elevenColumns[_nghost-%COMP%] {
                    grid-row-gap: calc(var(--vh) * 4.5);
                    grid-column-gap: calc(var(--vw) * 1.2);
                    display: grid;
                    grid-template-columns:repeat(8, 1fr);
                    align-items: start;
                    grid-auto-rows: min-content;
                    grid-template-areas:"item item item item item item item item" "desc desc desc desc desc desc desc desc"
                }
                `]
            }), o
        })(), bt = (() => {
            class o {
                constructor(t, n) {
                    this.el = t, this.renderer = n, this.leftSideOrigin = "20% 50%", this.middleOrigin = "50% 50%", this.rightSideOrigin = "80% 50%", this.transformOrigin = this.middleOrigin
                }

                onEnter(t) {
                    // noop thanks
                }

                onLeave(t) {
                    // noop thanks
                }

                ngOnInit() {
                    this.initPosition()
                }

                ngOnDestroy() {
                    this.cloneImage && this.hideCard().then(() => this.cloneImage = null)
                }

                initPosition() {
                    // if (void 0 === this.cardIndex || void 0 === this.columnsCount) return;
                    // const t = this.cardIndex % this.columnsCount;
                    // 0 === t ? this.transformOrigin = this.leftSideOrigin : t === this.columnsCount - 1 && (this.transformOrigin = this.rightSideOrigin)
                }

                showCard() {
                    if (!this.cloneImage) {
                        this.cloneImage = this.renderer.createElement("composited-card");
                        const t = this.el.nativeElement.querySelector("composited-card");
                        this.cloneImage.inputProtoData = t.inputProtoData, this.cloneImage.quality = t.quality
                    }
                    this.renderer.appendChild(this.el.nativeElement, this.cloneImage), y.p8.set(this.cloneImage, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: this.el.nativeElement.offsetWidth,
                        transformOrigin: this.transformOrigin,
                        pointerEvents: "none",
                        opacity: 0,
                        zIndex: 1
                    }), y.p8.set(this.el.nativeElement, {zIndex: 1}), y.p8.to(this.cloneImage, {
                        duration: .3,
                        scale: 1.5,
                        opacity: 1
                    })
                }

                hideCard() {
                    return new Promise(t => {
                        y.p8.to(this.cloneImage, {
                            duration: .3, scale: 1, opacity: 0, onComplete: () => {
                                y.p8.set(this.el.nativeElement, {zIndex: "unset"}), this.cloneImage.remove(), t()
                            }
                        })
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(e.SBq), e.Y36(e.Qsj))
            }, o.\u0275dir = e.lG2({
                type: o,
                selectors: [["", "appSingleCardHoverFX", ""]],
                hostBindings: function (t, n) {
                    1 & t && e.NdJ("mouseenter", function (a) {
                        return n.onEnter(a)
                    })("mouseleave", function (a) {
                        return n.onLeave(a)
                    })
                },
                inputs: {cardIndex: "cardIndex", columnsCount: "columnsCount"}
            }), o
        })();

        function Hi(o, r) {
            if (1 & o && (e.TgZ(0, "div", 10), e._UZ(1, "gu-icon", 11), e.TgZ(2, "span", 12), e._uU(3), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw(2).$implicit, n = e.oxw(3);
                e.xp6(3), e.Oqu(n.calculateDisplayedCount(t.value))
            }
        }

        function Yi(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 7), e.TgZ(1, "app-card2", 8), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(3).selectCard(i.value)
                }), e.qZA(), e.YNc(2, Hi, 4, 1, "div", 9), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(2).$implicit, i = e.oxw();
                e.ekj("cardItemWrapper--dimmed", 0 === i.calculateDisplayedCount(t.value)), e.xp6(1), e.Q6J("protoId", n.pc.proto)("quality", t.key)("inputCw", 0)("inputCh", 0), e.xp6(1), e.Q6J("ngIf", i.showCardCounts)
            }
        }

        function Ji(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Yi, 3, 7, "div", 6), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw(3);
                e.xp6(1), e.Q6J("ngIf", t.value.length > 0 && n.calculateDisplayedCount(t.value) > 0)
            }
        }

        function $i(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Ji, 2, 1, "ng-container", 4), e.ALo(2, "keyvalue"), e.BQk()), 2 & o) {
                const t = e.oxw().$implicit;
                e.xp6(1), e.Q6J("ngForOf", e.lcZ(2, 1, t.qualityMap))
            }
        }

        function Wi(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, $i, 3, 3, "ng-container", 5), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.qualityMap)
            }
        }

        function zi(o, r) {
            if (1 & o && (e.TgZ(0, "div", 14), e._UZ(1, "app-card2", 15), e.qZA()), 2 & o) {
                const t = e.oxw().$implicit;
                e.xp6(1), e.Q6J("protoId", t.pc.proto)("quality", 5)("inputCw", 0)("inputCh", 0)
            }
        }

        function Vi(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, zi, 2, 4, "div", 13), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", !t.qualityMap && n.showUnowned)
            }
        }

        let ji = (() => {
            class o {
                constructor() {
                    this.columns = 8, this.showOnlyEscrow = !1, this.showUnowned = !1, this.filterCardIds = [], this.showCardCounts = !0, this.selectCardId = new e.vpe
                }

                ngOnInit() {
                }

                selectCard(t) {
                    const n = t.filter(i => !this.filterCardIds.includes(i.id))[0];
                    n && this.selectCardId.emit(n.id)
                }

                calculateDisplayedCount(t) {
                    return t.filter(n => !(this.filterCardIds.includes(n.id) || this.showOnlyEscrow && "escrow" !== n.status)).length
                }

                calculateOwnedCards(t) {
                    return t.reduce((n, i) => n + (i.qualityMap ? 1 : 0), 0)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-inventory-cards-quality"]],
                inputs: {
                    columns: "columns",
                    grouping: "grouping",
                    showOnlyEscrow: "showOnlyEscrow",
                    showUnowned: "showUnowned",
                    filterCardIds: "filterCardIds",
                    showCardCounts: "showCardCounts"
                },
                outputs: {selectCardId: "selectCardId"},
                decls: 10,
                vars: 12,
                consts: [[1, "groupedCardsHeader"], [1, "groupedCardsHeader__groupingName"], [1, "groupedCardsHeader__cardsCount"], [1, "cardGrid", 3, "columns", "columnGapVwMultiplyer"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "cardItemWrapper", 3, "cardItemWrapper--dimmed", 4, "ngIf"], [1, "cardItemWrapper"], ["appSingleCardHoverFX", "", 3, "protoId", "quality", "inputCw", "inputCh", "click"], ["class", "cardCount", 4, "ngIf"], [1, "cardCount"], ["iconLigature", "stat_card", 1, "cardCount__icon"], [1, "cardCount__count"], ["class", "cardItemWrapper cardItemWrapper--greyed", 4, "ngIf"], [1, "cardItemWrapper", "cardItemWrapper--greyed"], ["appSingleCardHoverFX", "", 3, "protoId", "quality", "inputCw", "inputCh"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0), e.TgZ(1, "h4", 1), e._uU(2), e.ALo(3, "titlecase"), e.ALo(4, "titlecase"), e.qZA(), e.TgZ(5, "h4", 2), e._uU(6), e.qZA(), e.qZA(), e.TgZ(7, "app-grid-display", 3), e.YNc(8, Wi, 2, 1, "ng-container", 4), e.YNc(9, Vi, 2, 1, "ng-container", 4), e.qZA()), 2 & t && (e.xp6(2), e.AsE(" ", e.lcZ(3, 8, n.grouping.currentGrouping.name), ": ", e.lcZ(4, 10, n.grouping.header), " "), e.xp6(4), e.AsE(" ", n.calculateOwnedCards(n.grouping.cards), " / ", n.grouping.cards.length, " "), e.xp6(1), e.Q6J("columns", n.columns)("columnGapVwMultiplyer", .8), e.xp6(1), e.Q6J("ngForOf", n.grouping.cards), e.xp6(1), e.Q6J("ngForOf", n.grouping.cards))
                },
                directives: [$e, d.sg, d.O5, H, bt],
                pipes: [d.rS, d.Nd],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardCount__count[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardCount__count[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block}.cardCount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cardCount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1);margin-right:calc(var(--vw) * .3);line-height:1;color:#f6f6f6}.cardCount__count[_ngcontent-%COMP%]{color:#f6f6f6}.cardItemWrapper--greyed[_ngcontent-%COMP%]{filter:grayscale(1)}.cardItemWrapper--greyed[_ngcontent-%COMP%]     app-card2{cursor:default}.cardItemWrapper--dimmed[_ngcontent-%COMP%]{filter:brightness(.6)}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}.cardGrid[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content}']
            }), o
        })();
        var wt = p(44290), Me = p(44416);

        function Xi(o, r) {
            1 & o && (e.TgZ(0, "div", 13), e.TgZ(1, "div", 14), e.TgZ(2, "gu-vertical-space", 15), e.TgZ(3, "gu-paragraph-text", 16), e._uU(4, " NOT FUSABLE "), e.qZA(), e._UZ(5, "gu-icon", 17), e.qZA(), e.qZA(), e.qZA())
        }

        const Ki = function (o) {
            return {"cardItem--escrow": o}
        }, er = function (o, r) {
            return {"cardItem--selected": o, "cardItem--dimmed": r}
        };

        function tr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 10), e.YNc(1, Xi, 6, 0, "div", 11), e.TgZ(2, "app-card2", 12), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw(2).$implicit, c = e.oxw();
                    return c.selectCard(c.card.pc.proto, s.key, a.id)
                }), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw(2).$implicit, i = e.oxw();
                e.Q6J("ngClass", e.VKq(5, Ki, "escrow" === t.status)), e.xp6(1), e.Q6J("ngIf", "escrow" === t.status), e.xp6(1), e.Q6J("protoId", i.card.pc.proto)("quality", n.key)("ngClass", e.WLB(7, er, i.isCardInForge(t.id), !i.isCardSelectable(n.key, t.id)))
            }
        }

        function nr(o, r) {
            1 & o && (e.TgZ(0, "p", 18), e._uU(1, " You cannot forge Diamond cards. "), e.qZA())
        }

        function or(o, r) {
            if (1 & o && (e.TgZ(0, "p", 18), e._uU(1), e.ALo(2, "titlecase"), e.qZA()), 2 & o) {
                const t = e.oxw(3).$implicit, n = e.oxw();
                e.xp6(1), e.AsE(" You need ", n.forgeService.fusingLevels[t.key].amount - t.value.length, " more ", e.lcZ(2, 2, n.forgeService.fusingLevels[t.key].name), " cards to forge ")
            }
        }

        function ir(o, r) {
            if (1 & o && e.YNc(0, or, 3, 4, "p", 19), 2 & o) {
                const t = e.oxw(2).$implicit, n = e.oxw();
                e.Q6J("ngIf", t.value.length < n.forgeService.fusingLevels[t.key].amount)
            }
        }

        function rr(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "header", 3), e.TgZ(2, "h4", 4), e._uU(3), e.ALo(4, "titlecase"), e.qZA(), e.TgZ(5, "h4", 5), e._uU(6), e.qZA(), e.qZA(), e.TgZ(7, "div", 6), e.YNc(8, tr, 3, 10, "div", 7), e.qZA(), e.YNc(9, nr, 2, 0, "p", 8), e.YNc(10, ir, 1, 1, "ng-template", null, 9, e.W1O), e.BQk()), 2 & o) {
                const t = e.MAs(11), n = e.oxw().$implicit, i = e.oxw();
                e.xp6(3), e.hij(" ", e.lcZ(4, 5, i.forgeService.fusingLevels[n.key].name), " "), e.xp6(3), e.hij(" ", n.value.length, " "), e.xp6(2), e.Q6J("ngForOf", n.value), e.xp6(1), e.Q6J("ngIf", 1 === n.key)("ngIfElse", t)
            }
        }

        function ar(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, rr, 12, 7, "ng-container", 2), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.value.length > 0)
            }
        }

        let sn = (() => {
            class o {
                constructor(t) {
                    this.forgeService = t, this.cardRowIndex = 0, this.unsubscribe = new M.xQ
                }

                get getClass() {
                    return `${this.className ? this.className : ""} column-${this.cardRowIndex}`
                }

                ngOnInit() {
                    this.initForgeCards()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initForgeCards() {
                    this.forgeService.forgeCards$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => this.forgeCards = t)
                }

                selectCard(t, n, i) {
                    n !== f.nJ.DIAMOND && (this.isCardInForge(i) ? this.forgeService.removeFromForge(t, n, i) : this.forgeService.addToForge(t, n, i))
                }

                isCardInForge(t) {
                    return this.forgeCards && this.forgeCards.ids && this.forgeCards.ids.some(n => n === t)
                }

                isCardSelectable(t, n) {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        return t !== f.nJ.DIAMOND && (!this.forgeCards || this.forgeCards.quality === t && (this.isCardInForge(n), !0))
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ge))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-app-expanded-cards"]],
                hostVars: 2,
                hostBindings: function (t, n) {
                    2 & t && e.Tol(n.getClass)
                },
                inputs: {card: "card", cardRowIndex: "cardRowIndex", className: "className"},
                decls: 5,
                vars: 6,
                consts: [[1, "cardName"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "cardHeader"], [1, "cardHeader__quality"], [1, "cardHeader__cardsCount"], [1, "cardSection"], ["class", "cardItem", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "cardSection__infoText", 4, "ngIf", "ngIfElse"], ["notDiamond", ""], [1, "cardItem", 3, "ngClass"], ["class", "cardItem__dropdown", "title", "Card is not in a state where it can be used for Fusing. Learn more by clicking on your profile, then on Transactions.", 4, "ngIf"], [1, "cardItem__card", 3, "protoId", "quality", "ngClass", "click"], ["title", "Card is not in a state where it can be used for Fusing. Learn more by clicking on your profile, then on Transactions.", 1, "cardItem__dropdown"], [1, "cardItem__dropdown__inner"], ["top", "x-large", 1, "cardItem__dropDown__inner_wrapper"], ["kind", "tag", "align", "center", "fillGradient", "gradients.gold.simple"], ["iconLigature", "alert_triangle", "align", "center", "fillGradientTarget", "bottom", "fillGradient", "gradients.gold.simple", 1, "cardItem__dropDown__inner_wrapper__icon", 2, "font-size", "16px"], [1, "cardSection__infoText"], ["class", "cardSection__infoText", 4, "ngIf"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "h1", 0), e._uU(1), e.ALo(2, "titlecase"), e.qZA(), e.YNc(3, ar, 2, 1, "ng-container", 1), e.ALo(4, "keyvalue")), 2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 2, n.card.pc.name)), e.xp6(2), e.Q6J("ngForOf", e.lcZ(4, 4, null == n.card ? null : n.card.qualityMap)))
                },
                directives: [d.sg, d.O5, d.mk, H],
                pipes: [d.rS, d.Nd],
                styles: ['@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.cardName[_ngcontent-%COMP%], .cardHeader__cardsCount[_ngcontent-%COMP%], .cardHeader__quality[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardSection__infoText[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.cardHeader__cardsCount[_ngcontent-%COMP%], .cardHeader__quality[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.cardSection__infoText[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.cardSection__infoText[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{padding:calc(var(--vw) * 1);margin-bottom:calc(var(--vh) * 4);grid-area:desc;display:flex;flex-direction:column;border:calc(var(--vh) * .3) solid #1d2f41;background:#08111a;position:relative}[_nghost-%COMP%]:before{content:"";position:absolute;border:calc(var(--vh) * 2.5) solid transparent;border-bottom-color:#1d2f41;top:calc(calc(var(--vh) * 2.5) * -2.05)}[_nghost-%COMP%]:after{content:"";position:absolute;border:calc(calc(var(--vh) * 2.5) * .85) solid transparent;border-bottom-color:#08111a;top:calc(calc(calc(var(--vh) * 2.5) * .85) * -2)}.column-0[_nghost-%COMP%]:before{left:calc(var(--vw) * 3.8)}.column-0[_nghost-%COMP%]:after{left:calc(var(--vw) * 4)}.column-1[_nghost-%COMP%]:before{left:calc(var(--vw) * 15)}.column-1[_nghost-%COMP%]:after{left:calc(var(--vw) * 15.2)}.column-2[_nghost-%COMP%]:before{left:calc(var(--vw) * 25.6)}.column-2[_nghost-%COMP%]:after{left:calc(var(--vw) * 25.8)}.column-3[_nghost-%COMP%]:before{left:calc(var(--vw) * 36.5)}.column-3[_nghost-%COMP%]:after{left:calc(var(--vw) * 36.7)}.cardName[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-transform:none}.cardHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.cardHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.cardHeader__quality[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.cardHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}.cardSection[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(5,1fr);align-items:start;grid-auto-rows:min-content;grid-column-gap:calc(var(--vh) * .3);margin-left:calc(var(--vw) * -.5)}.cardSection__infoText[_ngcontent-%COMP%]{font-style:italic;text-align:left;color:#f6f6f6;max-width:calc(var(--vw) * 8.5);margin-top:calc(var(--vh) * 2);margin-bottom:calc(var(--vh) * 2);margin-left:calc(var(--vw) * .5)}.cardItem[_ngcontent-%COMP%]{transition:.1s ease-in;transition-property:filter,transform;position:relative}.cardItem--escrow[_ngcontent-%COMP%]{padding-bottom:56px}.cardItem--selected[_ngcontent-%COMP%]{transform:scale(1.1);filter:drop-shadow(0 0 calc(var(--vh) * .8) rgba(89,168,205,.8))}.cardItem--dimmed[_ngcontent-%COMP%]{filter:brightness(.6)}.gridRow[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;align-items:start;grid-auto-rows:min-content;grid-template-areas:"item item item item item" "desc desc desc desc desc";grid-template-columns:repeat(5,1fr)}.cardItem__card[_ngcontent-%COMP%]{cursor:pointer}.cardItem__dropdown[_ngcontent-%COMP%]{position:absolute;background:linear-gradient(to bottom,#FFF2D8 0%,#C6A052 100%);padding:3px;width:76%;height:100px;bottom:0;left:54%;transform:translate(-50%);clip-path:polygon(0% 0%,100% 0%,100% calc(100% - var(--vh) * 4),50% 100%,0% calc(100% - var(--vh) * 4),0% 0%);-webkit-clip-path:polygon(0% 0%,100% 0%,100% calc(100% - var(--vh) * 4),50% 100%,0% calc(100% - var(--vh) * 4),0% 0%)}.cardItem__dropdown__inner[_ngcontent-%COMP%]{width:100%;height:100%;background:#0F1B27;clip-path:polygon(0% 0%,100% 0%,100% calc(100% - var(--vh) * 3.9),50% 100%,0% calc(100% - var(--vh) * 3.9),0% 0%);-webkit-clip-path:polygon(0% 0%,100% 0%,100% calc(100% - var(--vh) * 3.9),50% 100%,0% calc(100% - var(--vh) * 3.9),0% 0%);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:24px 0 20px}.cardItem__dropDown__inner_wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cardItem__dropDown__inner_wrapper__tooltip[_ngcontent-%COMP%]{position:relative}']
            }), o
        })();
        const sr = function (o) {
            return {"gridRow__cardItemWrapper--dimmed": o}
        };

        function cr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card2", 7), e.NdJ("click", function () {
                    const i = e.CHM(t), a = i.$implicit, s = i.index, c = e.oxw().index;
                    return e.oxw(2).onSelectCard(a, c, s)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw(3);
                e.Q6J("protoId", t.pc.proto)("quality", 5)("inputCh", 0)("inputCw", 0)("ngClass", e.VKq(5, sr, n.expandedCard && t.pc.proto !== n.expandedCard.card.pc.proto))
            }
        }

        function lr(o, r) {
            if (1 & o && e._UZ(0, "cerberus-app-expanded-cards", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function dr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, lr, 1, 2, "cerberus-app-expanded-cards", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function gr(o, r) {
            if (1 & o && e._UZ(0, "app-expanded-cards-signing", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function pr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, gr, 1, 2, "app-expanded-cards-signing", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function ur(o, r) {
            if (1 & o && e._UZ(0, "app-expanded-cards-selling", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function _r(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ur, 1, 2, "app-expanded-cards-selling", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function hr(o, r) {
            if (1 & o && (e.TgZ(0, "app-grid-display", 5), e.YNc(1, cr, 1, 7, "app-card2", 6), e.YNc(2, dr, 2, 1, "ng-container", 0), e.YNc(3, pr, 2, 1, "ng-container", 0), e.YNc(4, _r, 2, 1, "ng-container", 0), e.qZA()), 2 & o) {
                const t = r.$implicit, n = e.oxw(2);
                e.Q6J("columns", n.columns)("columnGapVwMultiplyer", .8), e.xp6(1), e.Q6J("ngForOf", t), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.FORGING), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.SIGNING), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.SELLING)
            }
        }

        function mr(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "header", 1), e.TgZ(2, "h4", 2), e._uU(3), e.ALo(4, "titlecase"), e.ALo(5, "titlecase"), e.qZA(), e.TgZ(6, "h4", 3), e._uU(7), e.qZA(), e.qZA(), e.YNc(8, hr, 5, 6, "app-grid-display", 4), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.AsE(" ", e.lcZ(4, 4, t.grouping.currentGrouping.name), ": ", e.lcZ(5, 6, t.grouping.header), " "), e.xp6(4), e.hij(" ", t.numCards, " "), e.xp6(1), e.Q6J("ngForOf", t.chunkedCards)
            }
        }

        let fr = (() => {
            class o {
                constructor(t, n, i) {
                    this.forgeService = t, this.utils = n, this.cardGridService = i, this.columns = 8, this.showOnlyEscrow = !1, this.showUnowned = !1, this.filterCardIds = [], this.showCardCounts = !0, this.showBundle = !1, this.selectCard = new e.vpe, this.ExpandedViewMode = N, this.numCards = 0, this.chunkedCards = [], this.alive = !0
                }

                ngOnInit() {
                    this.initChunk(), this.initExpandedCard()
                }

                ngOnDestroy() {
                    this.alive = !1, this.cardGridService.resetCardGrid()
                }

                onSelectCard(t, n, i) {
                    t && (this.cardGridService.expandCard(t, n, this.groupingIndex, i), this.selectCard.emit(t))
                }

                initChunk() {
                    this.forgeService.fusingLevels$.pipe((0, P.h)(t => null !== t), (0, x.q)(1)).subscribe(t => {
                        const n = this.grouping.cards.filter(i => this.doShowCard(i.pc, i.qualityMap, t));
                        this.numCards = n.length, this.chunkedCards = this.utils.chunk(n, this.columns)
                    })
                }

                initExpandedCard() {
                    this.cardGridService.expandedCard$.pipe((0, wt.o)(t => this.alive), (0, w.b)(t => this.expandedCard = t)).subscribe()
                }

                doShowCard(t, n, i) {
                    return !!n && (this.expandedViewMode === N.FORGING ? "core" === t.set && this.forgeService.isFuseableQualityMap(n, i) : this.expandedViewMode !== N.SELLING || this.isMarketplaceSellable(t.set))
                }

                isMarketplaceSellable(t) {
                    return "genesis" === t || "promo" === t || "etherbots" === t || "mythic" === t
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ge), e.Y36(Me.F), e.Y36(Se))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-inventory-cards-proto"]],
                inputs: {
                    columns: "columns",
                    grouping: "grouping",
                    showOnlyEscrow: "showOnlyEscrow",
                    showUnowned: "showUnowned",
                    filterCardIds: "filterCardIds",
                    showCardCounts: "showCardCounts",
                    showBundle: "showBundle",
                    expandedViewMode: "expandedViewMode",
                    groupingIndex: "groupingIndex"
                },
                outputs: {selectCard: "selectCard"},
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], [1, "groupedCardsHeader"], [1, "groupedCardsHeader__groupingName"], [1, "groupedCardsHeader__cardsCount"], ["className", "gridRow", 3, "columns", "columnGapVwMultiplyer", 4, "ngFor", "ngForOf"], ["className", "gridRow", 3, "columns", "columnGapVwMultiplyer"], ["class", "gridRow__cardItemWrapper", 3, "protoId", "quality", "inputCh", "inputCw", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "gridRow__cardItemWrapper", 3, "protoId", "quality", "inputCh", "inputCw", "ngClass", "click"], ["className", "gridRow__expandedCards", 3, "card", "cardRowIndex", 4, "ngIf"], ["className", "gridRow__expandedCards", 3, "card", "cardRowIndex"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, mr, 9, 8, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.numCards > 0)
                },
                directives: [d.O5, d.sg, $e, H, d.mk, sn],
                pipes: [d.rS],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardCount__count[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardCount__count[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-right:calc(var(--vw) * .55);display:block}.cardCount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cardCount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1);margin-right:calc(var(--vw) * .3);line-height:1;color:#f6f6f6}.cardCount__count[_ngcontent-%COMP%]{color:#f6f6f6}.gridRow__cardItemWrapper[_ngcontent-%COMP%]{position:relative;transition:.1s ease-in;transition-property:filter;cursor:pointer}.gridRow__cardItemWrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:105%;height:105%;background:url(/gu-assets/images/cards/forge-bundle-proto.svg) no-repeat;background-position:center right;background-size:76% auto}.gridRow__cardItemWrapper--dimmed[_ngcontent-%COMP%]{opacity:.4;cursor:default}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}']
            }), o
        })();

        function Cr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-inventory-cards-quality", 6), e.NdJ("selectCardId", function (i) {
                    return e.CHM(t), e.oxw(3).onSelectCardId(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw(2).$implicit, n = e.oxw();
                e.ekj("cardsListingArea__cardsListing--4Column", 4 === n.columns), e.Q6J("columns", n.columns)("grouping", t)("showCardCounts", n.showCardCounts)("showOnlyEscrow", n.showOnlyEscrow)("showUnowned", n.showUnowned)("filterCardIds", n.filterCardIds)("expandedViewMode", n.expandedViewMode)
            }
        }

        function vr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-inventory-cards-proto", 7), e.NdJ("selectCard", function (i) {
                    return e.CHM(t), e.oxw(3).onSelectCard(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw(2), n = t.index, i = t.$implicit, a = e.oxw();
                e.Q6J("columns", a.columns)("groupingIndex", n)("showBundle", a.showBundle)("grouping", i)("showCardCounts", a.showCardCounts)("showOnlyEscrow", a.showOnlyEscrow)("showUnowned", a.showUnowned)("filterCardIds", a.filterCardIds)("expandedViewMode", a.expandedViewMode)
            }
        }

        function br(o, r) {
            if (1 & o && (e.ynx(0), e.ynx(1, 3), e.YNc(2, Cr, 1, 9, "app-inventory-cards-quality", 4), e.YNc(3, vr, 1, 9, "app-inventory-cards-proto", 5), e.BQk(), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.Q6J("ngSwitch", t.mode), e.xp6(1), e.Q6J("ngSwitchCase", "quality"), e.xp6(1), e.Q6J("ngSwitchCase", "proto")
            }
        }

        function wr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, br, 4, 3, "ng-container", 2), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.cards.length > 0)
            }
        }

        function xr(o, r) {
            1 & o && (e.TgZ(0, "div", 8), e.TgZ(1, "h4", 9), e._uU(2, " No cards match your filters "), e.qZA(), e.qZA())
        }

        let xt = (() => {
            class o {
                constructor() {
                    this.columns = 8, this.showOnlyEscrow = !1, this.showUnowned = !1, this.filterCardIds = [], this.showCardCounts = !0, this.mode = "quality", this.showBundle = !1, this.selectCardId = new e.vpe, this.selectCard = new e.vpe
                }

                ngOnInit() {
                }

                calculateOwnedCards(t) {
                    return t.reduce((n, i) => n + (i.qualityMap ? 1 : 0), 0)
                }

                onSelectCardId(t) {
                    this.selectCardId.emit(t)
                }

                onSelectCard(t) {
                    this.selectCardId.emit(t)
                }

                calculateDisplayedCount(t) {
                    return t.filter(n => !this.filterCardIds.includes(n.id)).length
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-inventory-cards"]],
                inputs: {
                    displayedGroupedProtos: "displayedGroupedProtos",
                    columns: "columns",
                    showOnlyEscrow: "showOnlyEscrow",
                    showUnowned: "showUnowned",
                    filterCardIds: "filterCardIds",
                    showCardCounts: "showCardCounts",
                    mode: "mode",
                    showBundle: "showBundle",
                    expandedViewMode: "expandedViewMode"
                },
                outputs: {selectCardId: "selectCardId", selectCard: "selectCard"},
                decls: 2,
                vars: 2,
                consts: [[4, "ngFor", "ngForOf"], ["class", "noCardsToDisplay", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "cardsListingArea__cardsListing", 3, "columns", "grouping", "showCardCounts", "showOnlyEscrow", "showUnowned", "filterCardIds", "cardsListingArea__cardsListing--4Column", "expandedViewMode", "selectCardId", 4, "ngSwitchCase"], [3, "columns", "groupingIndex", "showBundle", "grouping", "showCardCounts", "showOnlyEscrow", "showUnowned", "filterCardIds", "expandedViewMode", "selectCard", 4, "ngSwitchCase"], [1, "cardsListingArea__cardsListing", 3, "columns", "grouping", "showCardCounts", "showOnlyEscrow", "showUnowned", "filterCardIds", "expandedViewMode", "selectCardId"], [3, "columns", "groupingIndex", "showBundle", "grouping", "showCardCounts", "showOnlyEscrow", "showUnowned", "filterCardIds", "expandedViewMode", "selectCard"], [1, "noCardsToDisplay"], [1, "noCardsToDisplay__text"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, wr, 2, 1, "ng-container", 0), e.YNc(1, xr, 3, 0, "div", 1)), 2 & t && (e.Q6J("ngForOf", n.displayedGroupedProtos), e.xp6(1), e.Q6J("ngIf", !n.displayedGroupedProtos || 0 === n.displayedGroupedProtos.length))
                },
                directives: [d.sg, d.O5, d.RF, d.n9, ji, fr],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.noCardsToDisplay__text[_ngcontent-%COMP%], .groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.noCardsToDisplay__text[_ngcontent-%COMP%], .groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block;padding-bottom:calc(var(--vh) * 12)}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}.noCardsToDisplay[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative}.noCardsToDisplay__text[_ngcontent-%COMP%]{line-height:1.1;color:#f6f6f6}']
            }), o
        })();

        function Mr(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "span", 13), e._uU(2), e.qZA(), e.BQk()), 2 & o) {
                const t = e.oxw(3).$implicit, n = e.oxw(2);
                e.xp6(2), e.Oqu(n.calculateDisplayedCount(t.ics))
            }
        }

        function yr(o, r) {
            if (1 & o && (e.TgZ(0, "span", 13), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(3).$implicit;
                e.xp6(1), e.Oqu(t.ics.length)
            }
        }

        function kr(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9), e._UZ(1, "gu-icon", 10), e.YNc(2, Mr, 3, 1, "ng-container", 11), e.YNc(3, yr, 2, 1, "ng-template", null, 12, e.W1O), e.qZA()), 2 & o) {
                const t = e.MAs(4), n = e.oxw(4);
                e.xp6(2), e.Q6J("ngIf", n.filterCardIds.length > 0)("ngIfElse", t)
            }
        }

        function Or(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "div", 6), e.TgZ(2, "app-card2", 7), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(2).selectCard(i.ics)
                }), e.qZA(), e.YNc(3, kr, 5, 2, "div", 8), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(2);
                e.xp6(1), e.ekj("cardItemWrapper--dimmed", 0 === n.calculateDisplayedCount(t.ics)), e.xp6(1), e.Q6J("protoId", t.pc.proto)("quality", t.ics[0].q)("inputCw", 0)("inputCh", 0), e.xp6(1), e.Q6J("ngIf", n.showCardCounts)
            }
        }

        function Pr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Or, 4, 7, "ng-container", 0), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.ics && t.ics.length)
            }
        }

        function Sr(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "header", 1), e.TgZ(2, "h4", 2), e._uU(3), e.ALo(4, "titlecase"), e.ALo(5, "titlecase"), e.qZA(), e.TgZ(6, "h4", 3), e._uU(7), e.qZA(), e.qZA(), e.TgZ(8, "app-grid-display", 4), e.YNc(9, Pr, 2, 1, "ng-container", 5), e.qZA(), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.AsE(" ", e.lcZ(4, 6, t.grouping.currentGrouping.name), ": ", e.lcZ(5, 8, t.grouping.header), " "), e.xp6(4), e.hij(" ", t.grouping.cards.length, " "), e.xp6(1), e.Q6J("columns", t.columns)("columnGapVwMultiplyer", .8), e.xp6(1), e.Q6J("ngForOf", t.grouping.cards)
            }
        }

        let Tr = (() => {
            class o {
                constructor() {
                    this.columns = 8, this.showOnlyEscrow = !1, this.showUnowned = !1, this.filterCardIds = [], this.showCardCounts = !0, this.mode = "quality", this.showBundle = !1, this.selectCardId = new e.vpe
                }

                ngOnInit() {
                }

                calculateOwnedCards(t) {
                    return t.reduce((n, i) => n + (i.qualityMap ? 1 : 0), 0)
                }

                onSelectCardId(t) {
                    this.selectCardId.emit(t)
                }

                onSelectCard(t) {
                    this.selectCardId.emit(t)
                }

                calculateDisplayedCount(t) {
                    return t.filter(n => !this.filterCardIds.includes(n.id)).length
                }

                selectCard(t) {
                    const n = t.filter(i => !this.filterCardIds.includes(i.id))[0];
                    n && this.selectCardId.emit(n.id)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-group-quality-inventory"]],
                inputs: {
                    grouping: "grouping",
                    columns: "columns",
                    showOnlyEscrow: "showOnlyEscrow",
                    showUnowned: "showUnowned",
                    filterCardIds: "filterCardIds",
                    showCardCounts: "showCardCounts",
                    mode: "mode",
                    showBundle: "showBundle"
                },
                outputs: {selectCardId: "selectCardId"},
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], [1, "groupedCardsHeader"], [1, "groupedCardsHeader__groupingName"], [1, "groupedCardsHeader__cardsCount"], [1, "cardGrid", 3, "columns", "columnGapVwMultiplyer"], [4, "ngFor", "ngForOf"], [1, "cardItemWrapper"], ["appSingleCardHoverFX", "", 3, "protoId", "quality", "inputCw", "inputCh", "click"], ["class", "cardCount", 4, "ngIf"], [1, "cardCount"], ["iconLigature", "stat_card", 1, "cardCount__icon"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "cardCount__count"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Sr, 10, 10, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.grouping.cards.length > 0)
                },
                directives: [d.O5, $e, d.sg, H, bt],
                pipes: [d.rS],
                styles: ['@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.noCardsToDisplay__text[_ngcontent-%COMP%], .groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardCount__count[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.noCardsToDisplay__text[_ngcontent-%COMP%], .groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardCount__count[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block;padding-bottom:calc(var(--vh) * 12)}.noCardsToDisplay[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative}.noCardsToDisplay__text[_ngcontent-%COMP%]{line-height:1.1;color:#f6f6f6}.cardCount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cardCount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1);margin-right:calc(var(--vw) * .3);line-height:1;color:#f6f6f6}.cardCount__count[_ngcontent-%COMP%]{color:#f6f6f6}.cardItemWrapper--greyed[_ngcontent-%COMP%]{filter:grayscale(1)}.cardItemWrapper--greyed[_ngcontent-%COMP%]     app-card2{cursor:default}.cardItemWrapper--dimmed[_ngcontent-%COMP%]{filter:brightness(.6)}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}.cardGrid[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content}']
            }), o
        })();
        const Ar = function (o) {
            return {"gridRow__cardItemWrapper--dimmed": o}
        };

        function Ir(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "app-card2", 7), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw(), a = i.$implicit, s = i.index, c = e.oxw().index;
                    return e.oxw(2).onSelectCard(a, c, s)
                }), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(3);
                e.xp6(1), e.Q6J("ngClass", e.VKq(5, Ar, n.expandedCard && t.pc.proto !== n.expandedCard.card.pc.proto))("protoId", t.pc.proto)("quality", t.ics[0].q)("inputCw", 0)("inputCh", 0)
            }
        }

        function Zr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Ir, 2, 7, "ng-container", 0), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.ics && t.ics.length)
            }
        }

        function Fr(o, r) {
            if (1 & o && e._UZ(0, "cerberus-app-expanded-cards", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function Dr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Fr, 1, 2, "cerberus-app-expanded-cards", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function Gr(o, r) {
            if (1 & o && e._UZ(0, "app-expanded-cards-signing", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function Br(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Gr, 1, 2, "app-expanded-cards-signing", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function Lr(o, r) {
            if (1 & o && e._UZ(0, "app-expanded-cards-selling", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function Ur(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Lr, 1, 2, "app-expanded-cards-selling", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function qr(o, r) {
            if (1 & o && (e.TgZ(0, "app-grid-display", 5), e.YNc(1, Zr, 2, 1, "ng-container", 6), e.YNc(2, Dr, 2, 1, "ng-container", 0), e.YNc(3, Br, 2, 1, "ng-container", 0), e.YNc(4, Ur, 2, 1, "ng-container", 0), e.qZA()), 2 & o) {
                const t = r.$implicit, n = e.oxw(2);
                e.Q6J("columns", n.columns)("columnGapVwMultiplyer", .8), e.xp6(1), e.Q6J("ngForOf", t), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.FORGING), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.SIGNING), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.SELLING)
            }
        }

        function Er(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "header", 1), e.TgZ(2, "h4", 2), e._uU(3), e.ALo(4, "titlecase"), e.ALo(5, "titlecase"), e.qZA(), e.TgZ(6, "h4", 3), e._uU(7), e.qZA(), e.qZA(), e.YNc(8, qr, 5, 6, "app-grid-display", 4), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.AsE(" ", e.lcZ(4, 4, t.grouping.currentGrouping.name), ": ", e.lcZ(5, 6, t.grouping.header), " "), e.xp6(4), e.hij(" ", t.numCards, " "), e.xp6(1), e.Q6J("ngForOf", t.chunkedCards)
            }
        }

        let Nr = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.forgeService = t, this.cardGridService = n, this.utils = i, this.groupingService = a, this.columns = 8, this.showOnlyEscrow = !1, this.showUnowned = !1, this.filterCardIds = [], this.showCardCounts = !0, this.mode = "quality", this.showBundle = !1, this.selectCardId = new e.vpe, this.ExpandedViewMode = N, this.numCards = 0, this.chunkedCards = [], this.alive = !0
                }

                ngOnInit() {
                    this.initChunk(), this.initExpandedCard()
                }

                ngOnDestroy() {
                    this.alive = !1
                }

                calculateOwnedCards(t) {
                    return t.reduce((n, i) => n + (i.qualityMap ? 1 : 0), 0)
                }

                onSelectCard(t, n, i) {
                    if (t) {
                        const a = this.groupingService.createQualityMap(t.ics);
                        this.cardGridService.expandCard({pc: t.pc, qualityMap: a}, n, this.groupingIndex, i)
                    }
                }

                calculateDisplayedCount(t) {
                    return t.filter(n => !this.filterCardIds.includes(n.id)).length
                }

                selectCard(t) {
                    const n = t.filter(i => !this.filterCardIds.includes(i.id))[0];
                    n && this.selectCardId.emit(n.id)
                }

                initChunk() {
                    this.forgeService.fusingLevels$.pipe((0, P.h)(t => null !== t)).subscribe(t => {
                        const n = this.grouping.cards.filter(i => this.doShowCard(i.pc, i.ics, t));
                        this.numCards = n.length, this.chunkedCards = this.utils.chunk(n, this.columns)
                    })
                }

                initExpandedCard() {
                    this.cardGridService.expandedCard$.pipe((0, wt.o)(t => this.alive), (0, w.b)(t => this.expandedCard = t)).subscribe()
                }

                doShowCard(t, n, i) {
                    return !!n && (this.expandedViewMode === N.FORGING ? "core" === t.set && this.forgeService.isFuseable(n, this.grouping.quality, i) : this.expandedViewMode !== N.SELLING || "core" !== t.set)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ge), e.Y36(Se), e.Y36(Me.F), e.Y36(_e))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-group-quality-forge"]],
                inputs: {
                    grouping: "grouping",
                    columns: "columns",
                    showOnlyEscrow: "showOnlyEscrow",
                    showUnowned: "showUnowned",
                    filterCardIds: "filterCardIds",
                    showCardCounts: "showCardCounts",
                    mode: "mode",
                    showBundle: "showBundle",
                    expandedViewMode: "expandedViewMode",
                    groupingIndex: "groupingIndex"
                },
                outputs: {selectCardId: "selectCardId"},
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], [1, "groupedCardsHeader"], [1, "groupedCardsHeader__groupingName"], [1, "groupedCardsHeader__cardsCount"], ["className", "gridRow", 3, "columns", "columnGapVwMultiplyer", 4, "ngFor", "ngForOf"], ["className", "gridRow", 3, "columns", "columnGapVwMultiplyer"], [4, "ngFor", "ngForOf"], [1, "gridRow__cardItemWrapper", 3, "ngClass", "protoId", "quality", "inputCw", "inputCh", "click"], ["className", "gridRow__expandedCards", 3, "card", "cardRowIndex", 4, "ngIf"], ["className", "gridRow__expandedCards", 3, "card", "cardRowIndex"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Er, 9, 8, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.numCards > 0)
                },
                directives: [d.O5, d.sg, $e, H, d.mk, sn],
                pipes: [d.rS],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardCount__count[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardCount__count[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-right:calc(var(--vw) * 1);display:block}.cardCount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cardCount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1);margin-right:calc(var(--vw) * .3);line-height:1;color:#f6f6f6}.cardCount__count[_ngcontent-%COMP%]{color:#f6f6f6}.gridRow__cardItemWrapper[_ngcontent-%COMP%]{position:relative;transition:.1s ease-in;transition-property:filter;cursor:pointer}.gridRow__cardItemWrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0%;right:0;width:35%;height:100%;background:url(/gu-assets/images/cards/forge-bundle-proto.svg) no-repeat;background-position:center;background-size:contain;transform:translate(25%)}.gridRow__cardItemWrapper--dimmed[_ngcontent-%COMP%]{opacity:.4;cursor:default}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}']
            }), o
        })();

        function Rr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "app-group-quality-inventory", 4), e.NdJ("selectCardId", function (i) {
                    return e.CHM(t), e.oxw(2).onSelectCard(i)
                }), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("showOnlyEscrow", n.showOnlyEscrow)("showUnowned", n.showUnowned)("grouping", t)("filterCardIds", n.filterCardIds)
            }
        }

        function Qr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-group-quality-forge", 5), e.NdJ("selectCardId", function (i) {
                    return e.CHM(t), e.oxw(2).onSelectCard(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw(), n = t.index, i = t.$implicit, a = e.oxw();
                e.Q6J("columns", a.columns)("groupingIndex", n)("expandedViewMode", a.expandedViewMode)("showOnlyEscrow", a.showOnlyEscrow)("showUnowned", a.showUnowned)("grouping", i)("filterCardIds", a.filterCardIds)
            }
        }

        function Hr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Rr, 2, 4, "ng-container", 2), e.YNc(2, Qr, 1, 7, "ng-template", null, 3, e.W1O), e.BQk()), 2 & o) {
                const t = e.MAs(3), n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", void 0 === n.expandedViewMode)("ngIfElse", t)
            }
        }

        function Yr(o, r) {
            1 & o && (e.TgZ(0, "div", 6), e.TgZ(1, "h4", 7), e._uU(2, " No cards match your filters "), e.qZA(), e.qZA())
        }

        let Mt = (() => {
            class o {
                constructor() {
                    this.columns = 8, this.showUnowned = !1, this.showOnlyEscrow = !1, this.filterCardIds = [], this.showCardCounts = !0, this.mode = "quality", this.showBundle = !1, this.selectCardId = new e.vpe
                }

                onSelectCard(t) {
                    this.selectCardId.emit(t)
                }

                get groupedQualities() {
                    return this.expandedViewMode === N.FORGING && this.displayedGroupedQualities ? [...this.displayedGroupedQualities].reverse() : this.displayedGroupedQualities
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-group-quality"]],
                inputs: {
                    displayedGroupedQualities: "displayedGroupedQualities",
                    columns: "columns",
                    showUnowned: "showUnowned",
                    showOnlyEscrow: "showOnlyEscrow",
                    filterCardIds: "filterCardIds",
                    showCardCounts: "showCardCounts",
                    mode: "mode",
                    showBundle: "showBundle",
                    expandedViewMode: "expandedViewMode",
                    loading: "loading"
                },
                outputs: {selectCardId: "selectCardId"},
                decls: 2,
                vars: 2,
                consts: [[4, "ngFor", "ngForOf"], ["class", "noCardsToDisplay", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["expandedViewBlock", ""], [3, "showOnlyEscrow", "showUnowned", "grouping", "filterCardIds", "selectCardId"], [3, "columns", "groupingIndex", "expandedViewMode", "showOnlyEscrow", "showUnowned", "grouping", "filterCardIds", "selectCardId"], [1, "noCardsToDisplay"], [1, "noCardsToDisplay__text"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Hr, 4, 2, "ng-container", 0), e.YNc(1, Yr, 3, 0, "div", 1)), 2 & t && (e.Q6J("ngForOf", n.groupedQualities), e.xp6(1), e.Q6J("ngIf", !(n.loading || n.displayedGroupedQualities && 0 !== n.displayedGroupedQualities.length)))
                },
                directives: [d.sg, d.O5, Tr, Nr],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.noCardsToDisplay__text[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.noCardsToDisplay__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block;padding-bottom:calc(var(--vh) * 12)}.noCardsToDisplay[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative}.noCardsToDisplay__text[_ngcontent-%COMP%]{line-height:1.1;color:#f6f6f6}"]
            }), o
        })();
        const Jr = ["groupsContainer"];

        function $r(o, r) {
            if (1 & o && (e.TgZ(0, "h3", 9), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.title)
            }
        }

        function Wr(o, r) {
            if (1 & o && (e.TgZ(0, "div", 10), e._UZ(1, "app-god-badge", 11), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("god", t.god.toLowerCase())
            }
        }

        function zr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-inventory-cards", 12, 13), e.NdJ("selectCardId", function (i) {
                    return e.CHM(t), e.oxw().selectCard(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("columns", t.columns)("mode", t.mode)("showUnowned", t.showUnowned)("showOnlyEscrow", t.showOnlyEscrow)("expandedViewMode", t.expandedViewMode)("displayedGroupedProtos", t.displayedGroupedProtos)("filterCardIds", t.filterCardIds)
            }
        }

        function Vr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-group-quality", 14, 13), e.NdJ("selectCardId", function (i) {
                    return e.CHM(t), e.oxw().selectCard(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("columns", t.columns)("showUnowned", t.showUnowned)("showOnlyEscrow", t.showOnlyEscrow)("expandedViewMode", t.expandedViewMode)("displayedGroupedQualities", t.displayedGroupedQualities)("filterCardIds", t.filterCardIds)
            }
        }

        let yt = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.resizeService = t, this.groupingService = n, this.filterService = i, this.audioService = a, this.activeGrouping = this.groupingService.defaultGrouping, this.filterCardIds = [], this.sound = !0, this.mode = "quality", this.columns = 8, this.showUnowned = !0, this.selectCardId = new e.vpe, this.GroupingType = Z, this.selectedHeaders = [], this.showOnlyEscrow = !1, this.activeSort = Q.PE.AscMana, this.sortOptions = [new L("Mana", "filter_mana", Q.PE.AscMana, Q.PE.DescMana), new L("Health", "filter_health", Q.PE.AscHealth, Q.PE.DescHealth), new L("Attack", "filter_attack", Q.PE.AscAttack, Q.PE.DescAttack), new L("Tribe", "filter_tribe", Q.PE.AscTribe, Q.PE.DescTribe), new L("Type", "filter_type", Q.PE.AscType, Q.PE.DescType), new L("God", "filter_god", Q.PE.AscGod, Q.PE.DescGod), new L("Rarity", "filter_rarity", Q.PE.AscRarity, Q.PE.DescRarity), new L("Set", "filter_set", Q.PE.AscSet, Q.PE.DescSet)], this.allGroupedProtos = [], this.allGroupedQualities = [], this.unsubscribe = new M.xQ, this.watchForResize()
                }

                ngOnInit() {
                }

                ngOnChanges(t) {
                    (t.protoCards || t.activeGrouping || t.god || t.inventoryCards) && this.inventoryCards && this.inventoryCards.length > 0 && this.initGroupings()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initGroupings() {
                    this.groupings = this.groupingService.groupings, this.groupingChange(this.activeGrouping)
                }

                watchForResize() {
                    this.resizeService.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({vh: t}) => this.vh = t)).subscribe()
                }

                groupingChange(t, n = !0) {
                    this.sortCards(this.activeSort), this.selectedHeaders = n ? [] : this.selectedHeaders, this.activeGrouping = t, t.groupingType === Z.Quality ? (this.protoGrouping = null, this.qualityGrouping = this.groupingService.groupQualities(this.protoCards, t, this.god, !1, this.customInventoryCardsMap), this.filterCardGroupingQuality()) : (this.qualityGrouping = null, this.protoGrouping = this.groupingService.groupProtos(this.protoCards, t, this.god, !1, this.customInventoryCardsMap), this.filterCardGrouping())
                }

                filterCardGrouping() {
                    if (!this.protoGrouping) return;
                    this.displayedGroupedProtos = [];
                    const n = Array.from(this.protoGrouping.values()).reverse().filter(i => 0 === this.selectedHeaders.length || -1 !== this.selectedHeaders.indexOf(i.header));
                    this.allGroupedProtos = n.map(i => {
                        const a = Object.assign({}, i);
                        return this.showOnlyEscrow && (a.cards = [...a.cards].filter(s => {
                            let c = !1;
                            return !!s.qualityMap && (s.qualityMap.forEach((l, g) => {
                                c = !!l.some(b => "escrow" === b.status) || c
                            }), c)
                        })), this.search && this.search.length > 0 && (this.search = this.search.toLowerCase(), a.cards = [...a.cards].filter(s => s.pc.name.toLowerCase().includes(this.search) || s.pc.tribe && s.pc.tribe.toLowerCase().includes(this.search) || s.pc.god.toLowerCase().includes(this.search) || s.pc.effect.toLowerCase().includes(this.search))), a
                    }).filter(i => i.cards.length > 0).reduce((i, a) => i.concat(a), []), this.loadGroup()
                }

                loadGroup() {
                    if (this.activeGrouping.groupingType === Z.Quality) return void this.loadGroupQuality();
                    if (!this.allGroupedProtos || 0 === this.allGroupedProtos.length) return;
                    this.displayedGroupedProtos.push(this.allGroupedProtos.pop());
                    let t = this.getDisplayedCardsCount(), n = this.isContainerScrollable(t);
                    for (; this.allGroupedProtos.length > 0 && (0 === t || !n);) this.displayedGroupedProtos.push(this.allGroupedProtos.pop()), t = this.getDisplayedCardsCount(), n = this.isContainerScrollable(t)
                }

                filterCardGroupingQuality() {
                    if (!this.qualityGrouping) return;
                    this.displayedGroupedQualities = [];
                    const n = Array.from(this.qualityGrouping.values()).reverse().filter(i => 0 === this.selectedHeaders.length || -1 !== this.selectedHeaders.indexOf(i.header));
                    this.allGroupedQualities = n.map(i => {
                        const a = Object.assign({}, i);
                        return this.showOnlyEscrow && (a.cards = [...a.cards].filter(s => {
                            let c = !1;
                            return c = s.ics.some(l => "escrow" === l.status), c
                        })), this.search && this.search.length > 0 && (this.search = this.search.toLowerCase(), a.cards = [...a.cards].filter(s => s.pc.name.toLowerCase().includes(this.search) || s.pc.tribe && s.pc.tribe.toLowerCase().includes(this.search) || s.pc.god.toLowerCase().includes(this.search) || s.pc.effect.toLowerCase().includes(this.search))), a
                    }).filter(i => i.cards.length > 0).reduce((i, a) => i.concat(a), []), this.loadGroupQuality()
                }

                loadGroupQuality() {
                    if (!this.allGroupedQualities || 0 === this.allGroupedQualities.length) return;
                    this.displayedGroupedQualities.push(this.allGroupedQualities.pop());
                    let t = this.getDisplayedCardsCountQuality(), n = this.isContainerScrollable(t);
                    for (; this.allGroupedQualities.length > 0 && (0 === t || !n);) this.displayedGroupedQualities.push(this.allGroupedQualities.pop()), t = this.getDisplayedCardsCountQuality(), n = this.isContainerScrollable(t)
                }

                groupingHeaderChange(t) {
                    this.selectedHeaders = t, this.activeGrouping.groupingType === Z.Quality ? this.filterCardGroupingQuality() : this.filterCardGrouping()
                }

                searchChange(t) {
                    this.search = t, this.activeGrouping.groupingType === Z.Quality ? this.filterCardGroupingQuality() : this.filterCardGrouping()
                }

                sortCards(t) {
                    this.protoCards = this.filterService.sortProtos(this.protoCards, t)
                }

                sortChange(t) {
                    this.activeSort = t, this.groupingChange(this.activeGrouping, !1)
                }

                unownedChange(t) {
                    this.showUnowned = t
                }

                ownershipChange(t) {
                    this.showUnowned = "all" === t, this.showOnlyEscrow = "escrow" === t, this.searchChange(this.search)
                }

                isContainerScrollable(t) {
                    const i = this.groupsContainer.nativeElement.clientHeight;
                    return Math.ceil(t / 8) * this.vh * 23.2 > 2 * i
                }

                selectCard(t) {
                    this.sound && this.audioService.clickItemV1.play(), this.selectCardId.emit(t)
                }

                getDisplayedCardsCount() {
                    return this.getFilterGroups(this.displayedGroupedProtos).reduce((n, i) => n + i.cards.reduce((a, s) => this.showUnowned || s.qualityMap ? a.concat(s) : a, []).length, 0)
                }

                getDisplayedCardsCountQuality() {
                    return this.getFilterGroups(this.displayedGroupedQualities).reduce((n, i) => n + i.cards.reduce((a, s) => this.showUnowned || s.ics ? a.concat(s) : a, []).length, 0)
                }

                getFilterGroups(t) {
                    let n = [];
                    if (this.expandedViewMode === N.SELLING) n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "genesis" === a.set)})); else {
                        if (this.expandedViewMode !== N.FORGING) return t;
                        n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "core" === a.set)}))
                    }
                    return n
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(_e), e.Y36(_.iZ), e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-cards-list"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Jr, 7), e.Gf(H, 5)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.groupsContainer = i.first), e.iGM(i = e.CRH()) && (n.cardComponents = i)
                    }
                },
                inputs: {
                    inventoryCards: "inventoryCards",
                    protoCards: "protoCards",
                    activeGrouping: "activeGrouping",
                    god: "god",
                    filterCardIds: "filterCardIds",
                    title: "title",
                    sound: "sound",
                    mode: "mode",
                    expandedViewMode: "expandedViewMode",
                    columns: "columns",
                    showUnowned: "showUnowned",
                    customInventoryCardsMap: "customInventoryCardsMap"
                },
                outputs: {selectCardId: "selectCardId"},
                features: [e.TTD],
                decls: 9,
                vars: 11,
                consts: [[1, "sectionHeader"], ["class", "sectionHeader__title", 4, "ngIf"], [1, "sectionHeader__groupings", 3, "activeGrouping", "groupings", "groupingChange", "searchChange"], [1, "sectionHeader__filterArea", 3, "sortOptions", "selectedHeaders", "cardGrouping", "unownedCheckboxVisible", "sortChange", "groupingHeaderChange", "unownedChange", "ownershipChange"], ["class", "sectionHeader__godArea", 4, "ngIf"], ["infiniteScroll", "", 1, "cardsListingArea", 3, "scrollWindow", "scrolled"], ["groupsContainer", ""], [3, "columns", "mode", "showUnowned", "showOnlyEscrow", "expandedViewMode", "displayedGroupedProtos", "filterCardIds", "selectCardId", 4, "ngIf"], [3, "columns", "showUnowned", "showOnlyEscrow", "expandedViewMode", "displayedGroupedQualities", "filterCardIds", "selectCardId", 4, "ngIf"], [1, "sectionHeader__title"], [1, "sectionHeader__godArea"], [1, "godArea__badge", 3, "god"], [3, "columns", "mode", "showUnowned", "showOnlyEscrow", "expandedViewMode", "displayedGroupedProtos", "filterCardIds", "selectCardId"], ["cardsContainer", ""], [3, "columns", "showUnowned", "showOnlyEscrow", "expandedViewMode", "displayedGroupedQualities", "filterCardIds", "selectCardId"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0), e.YNc(1, $r, 2, 1, "h3", 1), e.TgZ(2, "app-singular-active-filter-bar", 2), e.NdJ("groupingChange", function (a) {
                        return n.groupingChange(a)
                    })("searchChange", function (a) {
                        return n.searchChange(a)
                    }), e.qZA(), e.TgZ(3, "app-filter-sort-bar", 3), e.NdJ("sortChange", function (a) {
                        return n.sortChange(a)
                    })("groupingHeaderChange", function (a) {
                        return n.groupingHeaderChange(a)
                    })("unownedChange", function (a) {
                        return n.unownedChange(a)
                    })("ownershipChange", function (a) {
                        return n.ownershipChange(a)
                    }), e.qZA(), e.YNc(4, Wr, 2, 1, "div", 4), e.qZA(), e.TgZ(5, "section", 5, 6), e.NdJ("scrolled", function () {
                        return n.loadGroup()
                    }), e.YNc(7, zr, 2, 7, "app-inventory-cards", 7), e.YNc(8, Vr, 2, 6, "app-group-quality", 8), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngIf", n.title), e.xp6(1), e.Q6J("activeGrouping", n.activeGrouping)("groupings", n.groupings), e.xp6(1), e.Q6J("sortOptions", n.sortOptions)("selectedHeaders", n.selectedHeaders)("cardGrouping", n.activeGrouping.groupingType === n.GroupingType.Quality ? n.qualityGrouping : n.protoGrouping)("unownedCheckboxVisible", !(n.activeGrouping.groupingType === n.GroupingType.Quality || void 0 !== n.expandedViewMode)), e.xp6(1), e.Q6J("ngIf", n.god), e.xp6(1), e.Q6J("scrollWindow", !1), e.xp6(2), e.Q6J("ngIf", n.activeGrouping.groupingType !== n.GroupingType.Quality), e.xp6(1), e.Q6J("ngIf", n.activeGrouping.groupingType === n.GroupingType.Quality))
                },
                directives: [d.O5, vt, ft, tt, an, xt, Mt],
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                .sectionHeader__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .godArea__label[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .sectionHeader__title[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 2.96);
                    line-height: 1.3
                }
                
                .godArea__label[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.48)
                }
                
                [_nghost-%COMP%] {
                    display: flex;
                    flex-flow: column nowrap;
                    height: 100%;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    padding: 48px 48px 0px;
                }
                
                .sectionHeader[_ngcontent-%COMP%] {
                    height: calc(var(--vh) * 8.5);
                    position: relative
                }
                
                .sectionHeader__groupings[_ngcontent-%COMP%] {
                    position: absolute
                }
                
                .sectionHeader__title[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * .3);
                    padding-bottom: calc(var(--vh) * .8);
                    line-height: 1;
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    color: #f6f6f6;
                    border-bottom: solid #1d2f41;
                    border-width: calc(var(--vh) * .25)
                }
                
                .sectionHeader__rightSideArea[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * .8);
                    position: absolute;
                    right: 0;
                    top: 0;
                    display: flex;
                    align-items: flex-start;
                    height: 100%
                }
                
                .sectionHeader__filterArea[_ngcontent-%COMP%] {
                    bottom: calc(var(--vh) * 1);
                    right: calc(var(--vw) * 5);
                    position: absolute;
                    left: 0
                }
                
                .sectionHeader__godArea[_ngcontent-%COMP%] {
                    user-select: none;
                    pointer-events: none;
                    position: absolute;
                    right: 0;
                    top: 0;
                    display: flex;
                    align-items: flex-start
                }
                
                app-god-badge[_ngcontent-%COMP%] {
                    user-select: auto;
                    pointer-events: auto;
                    margin-top: calc(var(--vh) * 1)
                }
                
                .godArea__label[_ngcontent-%COMP%] {
                    color: #7192b0;
                    padding-top: calc(var(--vh) * 1.1);
                    padding-right: calc(var(--vw) * 2)
                }
                
                .cardsListingArea[_ngcontent-%COMP%] {
                    overflow: hidden;
                    overflow-y: auto;
                    flex: 1;
                    padding: 0 24px;
                }
                
                app-card {
                    cursor: pointer
                }
                `]
            }), o
        })(), jr = (() => {
            class o {
                constructor(t, n) {
                    this.el = t, this.renderer = n
                }

                onEnter(t) {
                    this.showCard()
                }

                onLeave(t) {
                    this.hideCard()
                }

                ngOnInit() {
                    this.baseImage = this.el.nativeElement, this.originalBrightness = this.baseImage.style.filter
                }

                ngOnDestroy() {
                    this.cloneImage && this.hideCard().then(() => this.cloneImage = null)
                }

                showCard() {
                    if (!this.cloneImage) {
                        this.cloneImage = this.renderer.createElement("composited-card");
                        const t = this.el.nativeElement.querySelector("composited-card");
                        this.cloneImage.inputProtoData = t.inputProtoData, this.cloneImage.quality = t.quality
                    }
                    this.renderer.appendChild(this.el.nativeElement.parentNode, this.cloneImage), y.p8.set(this.cloneImage, {
                        position: "absolute",
                        top: 20,
                        left: 15,
                        width: this.el.nativeElement.offsetWidth,
                        pointerEvents: "none",
                        opacity: 0,
                        zIndex: 1
                    }), y.p8.to(this.cloneImage, {
                        duration: .2,
                        x: 50,
                        scale: 1.6,
                        opacity: 1
                    }), y.p8.to(this.el.nativeElement, {duration: .2, filter: "brightness(1.0)"})
                }

                hideCard() {
                    return new Promise(t => {
                        y.p8.set(this.el.nativeElement, {filter: this.originalBrightness}), y.p8.to(this.cloneImage, {
                            duration: .2,
                            scale: 1,
                            left: 15,
                            opacity: 0,
                            onComplete: () => {
                                this.cloneImage.remove(), t()
                            }
                        })
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(e.SBq), e.Y36(e.Qsj))
            }, o.\u0275dir = e.lG2({
                type: o,
                selectors: [["", "appCardBundleHoverFX", ""]],
                hostBindings: function (t, n) {
                    1 & t && e.NdJ("mouseenter", function (a) {
                        return n.onEnter(a)
                    })("mouseleave", function (a) {
                        return n.onLeave(a)
                    })
                },
                inputs: {translateY: "translateY"}
            }), o
        })();

        function Xr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card2", 5), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().clickCard(a)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit;
                e.ekj("cardListing__card--removed", t.isRemoved), e.Q6J("protoId", t.card.proto)("quality", t.card.quality)
            }
        }

        let Kr = (() => {
            class o {
                constructor() {
                    this.chosenCards = [], this.unsubscribe = new M.xQ, this.chooserSelectCards = new e.vpe, this.closeBundleChooser = () => {
                    }, this.closeOverlay = () => {
                        this.closeBundleChooser(), this.chosenCards.length > 0 && this.chooserSelectCards.emit(this.chosenCards)
                    }
                }

                ngOnInit() {
                    this.initCards()
                }

                ngOnChanges(t) {
                    t.cards && !t.cards.firstChange && (this.cards = t.cards.currentValue, this.initCards())
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initCards() {
                    this.allCards = this.cards.map(t => ({card: t, isRemoved: !1}))
                }

                clickCard(t) {
                    this.chooserSelectCards.emit([t.card])
                }

                onMouseUp(t) {
                    let n = !0;
                    for (let i of t.path) if ("app-card2" === i.localName) {
                        n = !1;
                        break
                    }
                    n && this.closeOverlay()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-card-chooser-overlay"]],
                hostBindings: function (t, n) {
                    1 & t && e.NdJ("mouseup", function (a) {
                        return n.onMouseUp(a)
                    }, !1, e.evT)
                },
                inputs: {
                    cards: "cards",
                    gameModeId: "gameModeId",
                    gameModeType: "gameModeType",
                    closeBundleChooser: "closeBundleChooser"
                },
                outputs: {chooserSelectCards: "chooserSelectCards"},
                features: [e.TTD],
                decls: 6,
                vars: 2,
                consts: [[3, "closeButtonClickFn"], [1, "instructionsHeading"], [1, "instructionsHeading__title"], [1, "cardListing"], ["class", "cardListing__card", 3, "protoId", "quality", "cardListing__card--removed", "click", 4, "ngFor", "ngForOf"], [1, "cardListing__card", 3, "protoId", "quality", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.TgZ(1, "header", 1), e.TgZ(2, "h3", 2), e._uU(3, " Click to Remove "), e.qZA(), e.qZA(), e.TgZ(4, "div", 3), e.YNc(5, Xr, 1, 4, "app-card2", 4), e.qZA()), 2 & t && (e.Q6J("closeButtonClickFn", n.closeOverlay), e.xp6(5), e.Q6J("ngForOf", n.allCards))
                },
                directives: [ue, d.sg, H],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.instructionsHeading__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.instructionsHeading__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{background:rgba(15,27,39,.96);position:absolute;top:0;left:0;right:0;bottom:0;margin-left:calc(var(--vh) * -7.4);display:flex;flex-flow:column nowrap;z-index:1;box-shadow:0 0 calc(var(--vw) * 10) calc(var(--vw) * 2) #0c1620}[_nghost-%COMP%]     app-modal-sidebar{padding-top:calc(var(--vh) * .5);width:calc(var(--vw) * 3)}.instructionsHeading[_ngcontent-%COMP%]{height:calc(var(--vh) * 4.4);padding-top:calc(var(--vh) * .5)}.instructionsHeading__title[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .3);padding-bottom:calc(var(--vh) * 1);line-height:1;text-align:center;color:#f6f6f6}.continueButton[_ngcontent-%COMP%]{top:calc(var(--vh) * 2);right:calc(var(--vw) * 1);position:absolute}.cardListing[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 2);padding-bottom:calc(var(--vh) * 4.7);padding-left:calc(var(--vw) * .3);padding-right:calc(var(--vw) * .3);overflow-y:auto;flex:1;grid-row-gap:calc(var(--vh) * 1);display:grid;grid-template-columns:repeat(auto-fit,minmax(calc(var(--vw) * 11.35),max-content));justify-content:center}.cardListing__card[_ngcontent-%COMP%]{transition:all .15s ease-in-out;transform-origin:50% 50%}.cardListing__card[_ngcontent-%COMP%]:hover{transform:scale(1.23);transform-origin:50% 30%}.cardListing__card--removed[_ngcontent-%COMP%]{display:none}.cardListing__card--disabled[_ngcontent-%COMP%]{filter:grayscale(1)}"]
            }), o
        })();
        const ea = function (o, r) {
            return {transform: o, filter: r}
        };

        function ta(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card2", 5), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().clickCard(a)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = r.index, i = e.oxw();
                e.Q6J("translateY", i.cardTranslateY(n))("protoId", t.proto)("quality", t.quality)("ngStyle", e.WLB(4, ea, "translateY(" + i.cardTranslateY(n) + "px)", "brightness(" + i.cardBrightness(n) + ")"))
            }
        }

        function na(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card-chooser-overlay", 6), e.NdJ("chooserSelectCards", function (i) {
                    return e.CHM(t), e.oxw().onChooserSelectCards(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("@slideIn", void 0)("gameModeType", t.gameModeType)("gameModeId", t.gameModeId)("cards", t.bundle.cards)("closeBundleChooser", t.closeBundleChooser)
            }
        }

        let oa = (() => {
            class o {
                constructor(t) {
                    this.audioService = t, this.selectCards = new e.vpe, this.showCardChooserOverlay = !1, this.unsubscribe = new M.xQ, this.closeBundleChooser = () => {
                        this.audioService.clickTinyV2.play(), this.showCardChooserOverlay = !1
                    }
                }

                ngOnInit() {
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                cardTranslateY(t) {
                    const n = this.bundle.cards.length;
                    let i = 7.5;
                    return n > 1 && (i *= 7.5 / n), t * i
                }

                cardBrightness(t) {
                    const n = this.bundle.cards.length;
                    return t === n - 1 ? 1 : .8 * Math.pow((t + 1) / n, 1 / 3)
                }

                cardZIndex(t) {
                    return t
                }

                openBundleChooser() {
                    this.bundle.cards.length >= 2 && (this.showCardChooserOverlay = !0)
                }

                clickCard(t) {
                    this.audioService.clickItemV1.play(), this.bundle.cards.length >= 2 ? this.openBundleChooser() : this.selectCards.emit([t])
                }

                onChooserSelectCards(t) {
                    this.audioService.clickItemV1.play(), this.selectCards.emit(t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-card-bundle"]],
                inputs: {bundle: "bundle", gameModeId: "gameModeId", gameModeType: "gameModeType"},
                outputs: {selectCards: "selectCards"},
                decls: 7,
                vars: 5,
                consts: [[1, "bundleContainer"], [1, "bundleLabel"], [1, "cardLayers", 3, "click"], ["class", "cardLayers__card", "appCardBundleHoverFX", "", 3, "translateY", "protoId", "quality", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "gameModeType", "gameModeId", "cards", "closeBundleChooser", "chooserSelectCards", 4, "ngIf"], ["appCardBundleHoverFX", "", 1, "cardLayers__card", 3, "translateY", "protoId", "quality", "ngStyle", "click"], [3, "gameModeType", "gameModeId", "cards", "closeBundleChooser", "chooserSelectCards"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e.TgZ(1, "div", 1), e._uU(2), e.ALo(3, "titlecase"), e.qZA(), e.TgZ(4, "div", 2), e.NdJ("click", function () {
                        return n.openBundleChooser()
                    }), e.YNc(5, ta, 1, 7, "app-card2", 3), e.qZA(), e.qZA(), e.YNc(6, na, 1, 5, "app-card-chooser-overlay", 4)), 2 & t && (e.xp6(2), e.Oqu(e.lcZ(3, 3, n.bundle.header)), e.xp6(3), e.Q6J("ngForOf", n.bundle.cards), e.xp6(1), e.Q6J("ngIf", n.showCardChooserOverlay))
                },
                directives: [d.sg, d.O5, H, jr, d.PC, Kr],
                pipes: [d.rS],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.bundleLabel[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.bundleLabel[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}[_nghost-%COMP%]{display:block}.bundleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;position:relative}.bundleLabel[_ngcontent-%COMP%]{color:#7192b0;text-align:center}.cardLayers[_ngcontent-%COMP%]{width:calc(var(--vw) * 7.5);flex:1;position:relative}.cardLayers__card[_ngcontent-%COMP%]{position:absolute;left:0;top:0;cursor:pointer;width:100%}"],
                data: {
                    animation: [(0, v.X$)("slideIn", [(0, v.eR)(":enter", [(0, v.oB)({
                        opacity: 0,
                        transform: "translateY(25%)"
                    }), (0, v.jt)("150ms ease-in-out", (0, v.oB)({
                        opacity: 1,
                        transform: "translateY(0%)"
                    }))]), (0, v.eR)(":leave", [(0, v.jt)("150ms ease-in-out", (0, v.oB)({
                        opacity: 0,
                        transform: "translateY(25%)"
                    }))])])]
                }
            }), o
        })();

        function ia(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-primary-hex-button", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clickDelete()
                }), e.qZA()
            }
        }

        function ra(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "p", 8), e._uU(1, " Are you sure? "), e.TgZ(2, "span", 9), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().cancelDelete()
                }), e._uU(3, "Cancel"), e.qZA(), e.TgZ(4, "span", 10), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().confirmDelete()
                }), e._uU(5, "Yes, Delete"), e.qZA(), e.qZA()
            }
        }

        let aa = (() => {
            class o {
                constructor(t, n) {
                    this.akumaService = t, this.audioService = n, this.closeEditDeckOverlay = () => {
                    }, this.deckName = "", this.changeDeckName = new e.vpe, this.deleteDeck = new e.vpe, this.deckNameControl = new I.NI(""), this.confirmingDelete = !1, this.unsubscribe = new M.xQ, this.closeOverlay = () => {
                        this.audioService.clickTinyV2.play(), this.akumaService.postControlEvent("gu", "DeckEditor", "", "close", "Btn", "pressed"), this.closeEditDeckOverlay()
                    }
                }

                ngOnInit() {
                    this.inputDeckName = this.deckName, this.watchSearch()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                clickDelete() {
                    this.akumaService.postControlEvent("gu", "DeckEditor", "", "deleteDeck", "Btn", "pressed"), this.confirmingDelete = !0
                }

                confirmDelete() {
                    this.audioService.workshopDelete.play(), this.deleteDeck.emit()
                }

                cancelDelete() {
                    this.audioService.clickTinyV1.play(), this.confirmingDelete = !1
                }

                watchSearch() {
                    this.deckNameControl.valueChanges.pipe((0, u.R)(this.unsubscribe), (0, Ct.b)(500), (0, st.x)(), (0, w.b)(t => this.inputDeckName = t)).subscribe()
                }

                saveChanges() {
                    this.akumaService.postControlEvent("gu", "DeckEditor", "", "saveDeck", "Btn", "pressed"), this.changeDeckName.emit(this.inputDeckName)
                }

                playClickTinyV1() {
                    this.audioService.clickTinyV1.play()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.jt), e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-edit-deck"]],
                inputs: {closeEditDeckOverlay: "closeEditDeckOverlay", deckName: "deckName"},
                outputs: {changeDeckName: "changeDeckName", deleteDeck: "deleteDeck"},
                decls: 8,
                vars: 5,
                consts: [[3, "closeButtonClickFn"], [1, "instructionsHeading"], [1, "instructionsHeading__title"], ["text", "Save Changes", 1, "instructionsHeading__saveButton", 3, "click"], ["type", "search", "name", "deckNameControl", "maxlength", "15", 1, "form__textInput", 3, "ngModel", "formControl", "click", "ngModelChange"], ["class", "deleteDeck", "text", "Delete Deck", 3, "click", 4, "ngIf"], ["class", "deleteConfirmation", 4, "ngIf"], ["text", "Delete Deck", 1, "deleteDeck", 3, "click"], [1, "deleteConfirmation"], [1, "deleteConfirmation__cancel", 3, "click"], [1, "deleteConfirmation__confirm", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.TgZ(1, "header", 1), e.TgZ(2, "h3", 2), e._uU(3, " Edit Deck "), e.qZA(), e.TgZ(4, "gu-primary-hex-button", 3), e.NdJ("click", function () {
                        return n.saveChanges()
                    }), e.qZA(), e.qZA(), e.TgZ(5, "input", 4), e.NdJ("click", function () {
                        return n.playClickTinyV1()
                    })("ngModelChange", function (a) {
                        return n.inputDeckName = a
                    }), e.qZA(), e.YNc(6, ia, 1, 0, "gu-primary-hex-button", 5), e.YNc(7, ra, 6, 0, "p", 6)), 2 & t && (e.Q6J("closeButtonClickFn", n.closeOverlay), e.xp6(5), e.Q6J("ngModel", n.inputDeckName)("formControl", n.deckNameControl), e.xp6(1), e.Q6J("ngIf", !n.confirmingDelete), e.xp6(1), e.Q6J("ngIf", n.confirmingDelete))
                },
                directives: [ue, I.Fj, I.nD, I.JJ, I.oH, d.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.instructionsHeading__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.form__textInput[_ngcontent-%COMP%], .deleteConfirmation[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.instructionsHeading__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.deleteConfirmation[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.form__textInput[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.form__textInput[_ngcontent-%COMP%]{line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{background:rgba(15,27,39,.96);position:absolute;top:0;left:0;right:0;bottom:0;margin-left:calc(var(--vh) * -7.4);padding-top:calc(var(--vh) * 2);display:flex;flex-flow:column nowrap;z-index:2;box-shadow:0 0 calc(var(--vw) * 10) calc(var(--vw) * 2) #0c1620}[_nghost-%COMP%]     app-modal-sidebar{padding-top:calc(var(--vh) * .5);width:calc(var(--vw) * 3)}.instructionsHeading[_ngcontent-%COMP%]{height:calc(var(--vh) * 4.4);padding-top:calc(var(--vh) * .5)}.instructionsHeading__title[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .3);padding-bottom:calc(var(--vh) * 1);line-height:1;text-align:center;color:#f6f6f6}.instructionsHeading__saveButton[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2.4);position:absolute;right:0px;top:0px}.form__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);text-align:center;margin:0 auto;margin-top:calc(var(--vh) * 5);width:calc(var(--vw) * 25);background:#182531;color:#fff;border:1px solid #0f1b27;border-radius:calc(var(--vh) * .4)}.form__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.deleteDeck[_ngcontent-%COMP%]{width:20%;text-align:center;margin:0 auto;margin-top:calc(var(--vh) * 5)}.deleteConfirmation[_ngcontent-%COMP%]{text-align:center;margin-top:calc(var(--vh) * 5)}.deleteConfirmation__confirm[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);color:#df2600;cursor:pointer}.deleteConfirmation__cancel[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);color:#7192b0;cursor:pointer}"]
            }), o
        })();

        function sa(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-singular-active-filter-bar", 11), e.NdJ("groupingChange", function (i) {
                    return e.CHM(t), e.oxw().groupingChange(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("displaySearch", !1)("activeGrouping", t.activeGrouping)("groupings", t.groupings)
            }
        }

        function ca(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card-bundle", 13), e.NdJ("selectCards", function (i) {
                    return e.CHM(t), e.oxw(2).onSelectCards(i)
                }), e.qZA()
            }
            2 & o && e.Q6J("bundle", r.$implicit.value)
        }

        function la(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ca, 1, 1, "app-card-bundle", 12), e.ALo(2, "keyvalue"), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", e.lcZ(2, 1, t.cardGrouping))
            }
        }

        function da(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-edit-deck", 14), e.NdJ("deleteDeck", function () {
                    return e.CHM(t), e.oxw().deleteDeck()
                })("changeDeckName", function (i) {
                    return e.CHM(t), e.oxw().changeDeckName(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("@slideIn", void 0)("closeEditDeckOverlay", t.closeEditDeckOverlay)("deckName", t.deck.name)
            }
        }

        let cn = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g) {
                    this.guGameService = t, this.groupingService = n, this.decksService = i, this.modalService = a, this.akumaService = s, this.router = c, this.audioService = l, this.utils = g, this.activeGrouping = this.groupingService.defaultGrouping, this.deckSelectMode = !1, this.forAI = !1, this.deckCards = [], this.selectCards = new e.vpe, this.showEditDeckOverlay = !1, this.closeEditDeckOverlay = () => {
                        this.audioService.clickTinyV2.play(), this.showEditDeckOverlay = !1
                    }
                }

                ngOnInit() {
                    this.initGroupings()
                }

                ngOnChanges(t) {
                    t.deck || !t.deckCards || t.deckCards.firstChange ? this.groupingChange(this.activeGrouping) : this.handleDeckCardsChange(t.deckCards)
                }

                handleDeckCardsChange(t) {
                    const n = this.utils.diff(t.currentValue, t.previousValue);
                    0 !== n.length && (t.currentValue.length > t.previousValue.length ? this.handleAdd(n) : this.handleRemove(n))
                }

                handleAdd(t) {
                    this.groupingService.addToCardGrouping(this.cardGrouping, this.activeGrouping, t[0])
                }

                handleRemove(t) {
                    this.groupingService.removeFromCardGrouping(this.cardGrouping, this.activeGrouping, t[0])
                }

                initGroupings() {
                    this.groupings = this.groupingService.groupingsNoTribe.filter(t => t.groupingType !== Z.Quality), this.groupingChange(this.activeGrouping)
                }

                groupingChange(t) {
                    this.activeGrouping = t, this.cardGrouping = this.groupingService.createCardGrouping(t), this.deckCards.forEach(n => this.groupingService.addToCardGrouping(this.cardGrouping, t, n))
                }

                onSelectCards(t) {
                    this.selectCards.emit(t)
                }

                logSelectDeck() {
                    this.guGameService.getGameMode$(this.gameModeID).pipe((0, x.q)(1)).subscribe(t => {
                        this.akumaService.postControlEvent("gu", "DeckEditor", "", "selectDeck", "Btn", "pressed", {
                            mode_name: t.name,
                            deck_name: this.deck.name
                        })
                    })
                }

                saveDeck() {
                    this.decksService.saveActiveDeck(this.deckSelectMode).pipe((0, x.q)(1), (0, w.b)(t => {
                        t > -1 && this.deckSelectMode ? (this.logSelectDeck(), this.guGameService.updateGameModeDeck(this.gameModeID, t, this.forAI), this.modalService.destroyModalsStack(), this.router.navigate(["/game/gu/game-modes"])) : this.modalService.destroyTopModal()
                    })).subscribe()
                }

                openEditDeckOverlay() {
                    this.akumaService.postControlEvent("gu", "DeckEditor", "", "editDeck", "Btn", "pressed"), this.audioService.clickItemV1.play(), this.showEditDeckOverlay = !0
                }

                deleteDeck() {
                    this.closeEditDeckOverlay(), this.decksService.deleteDeck(this.deck.id), this.modalService.destroyTopModal()
                }

                changeDeckName(t) {
                    this.closeEditDeckOverlay(), this.decksService.updateActiveDeckName(t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(X.xV), e.Y36(_e), e.Y36(j.D), e.Y36(T.Z), e.Y36(_.jt), e.Y36(de.F0), e.Y36(h.pk), e.Y36(Me.F))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-active-deck"]],
                inputs: {
                    activeGrouping: "activeGrouping",
                    deckSelectMode: "deckSelectMode",
                    gameModeID: "gameModeID",
                    forAI: "forAI",
                    deckCards: "deckCards",
                    deck: "deck"
                },
                outputs: {selectCards: "selectCards"},
                features: [e.TTD],
                decls: 13,
                vars: 8,
                consts: [[1, "sectionHeader"], [1, "sectionHeader__title"], ["class", "sectionHeader__groupings", 3, "displaySearch", "activeGrouping", "groupings", "groupingChange", 4, "ngIf"], [1, "sectionHeader__rightSideArea"], ["iconLigature", "stat_card", 1, "rightSideArea__icon"], [1, "rightSideArea__cardsCount"], ["text", "EDIT DECK", "kind", "secondary", 1, "rightSideArea__editButton", 3, "disabled", "click"], [1, "rightSideArea__saveButton", 3, "text", "disabled", "click"], [1, "cardBundlesListing"], [4, "ngIf"], [3, "closeEditDeckOverlay", "deckName", "deleteDeck", "changeDeckName", 4, "ngIf"], [1, "sectionHeader__groupings", 3, "displaySearch", "activeGrouping", "groupings", "groupingChange"], [3, "bundle", "selectCards", 4, "ngFor", "ngForOf"], [3, "bundle", "selectCards"], [3, "closeEditDeckOverlay", "deckName", "deleteDeck", "changeDeckName"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0), e.TgZ(1, "h3", 1), e._uU(2), e.qZA(), e.YNc(3, sa, 1, 3, "app-singular-active-filter-bar", 2), e.TgZ(4, "div", 3), e._UZ(5, "gu-icon", 4), e.TgZ(6, "div", 5), e._uU(7), e.qZA(), e.TgZ(8, "gu-primary-hex-button", 6), e.NdJ("click", function () {
                        return n.openEditDeckOverlay()
                    }), e.qZA(), e.TgZ(9, "gu-primary-hex-button", 7), e.NdJ("click", function () {
                        return n.saveDeck()
                    }), e.qZA(), e.qZA(), e.qZA(), e.TgZ(10, "div", 8), e.YNc(11, la, 3, 3, "ng-container", 9), e.qZA(), e.YNc(12, da, 1, 3, "app-edit-deck", 10)), 2 & t && (e.xp6(2), e.Oqu(n.deck.name), e.xp6(1), e.Q6J("ngIf", n.deckCards), e.xp6(4), e.hij("", n.deckCards.length, "/30 Cards"), e.xp6(1), e.Q6J("disabled", "starter" === n.deck.deck_type || "sealed_deck" === n.deck.deck_type), e.xp6(1), e.Q6J("text", n.deckSelectMode ? "SELECT" : "SAVE DECK")("disabled", !!n.deckSelectMode && 30 !== n.deckCards.length), e.xp6(2), e.Q6J("ngIf", n.cardGrouping), e.xp6(1), e.Q6J("ngIf", n.showEditDeckOverlay))
                },
                directives: [d.O5, vt, d.sg, oa, aa],
                pipes: [d.Nd],
                styles: [`
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                .sectionHeader__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .rightSideArea__cardsCount[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .sectionHeader__title[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 2.96);
                    line-height: 1.3
                }
                
                .rightSideArea__cardsCount[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.9);
                    line-height: 1.2;
                    font-weight: 600
                }
                
                [_nghost-%COMP%] {
                    display: flex;
                    flex-flow: column nowrap;
                    position: relative
                }
                
                .sectionHeader[_ngcontent-%COMP%] {
                    height: calc(var(--vh) * 5.5);
                    margin-top: calc(var(--vh) * 2);
                    position: relative;
                    flex-shrink: 0
                }
                
                .sectionHeader__groupings[_ngcontent-%COMP%] {
                    position: absolute
                }
                
                .sectionHeader__title[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * .3);
                    padding-bottom: calc(var(--vh) * .8);
                    line-height: 1;
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    color: #f6f6f6;
                    border-bottom: solid #1d2f41;
                    border-width: calc(var(--vh) * .25)
                }
                
                .sectionHeader__rightSideArea[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * .4);
                    position: absolute;
                    right: 0;
                    top: 0;
                    display: flex;
                    align-items: flex-start;
                    height: 100%
                }
                
                .rightSideArea__icon[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 2);
                    margin-right: calc(var(--vw) * .5);
                    color: #f6f6f6;
                    line-height: 1
                }
                
                .rightSideArea__cardsCount[_ngcontent-%COMP%] {
                    color: #f6f6f6
                }
                
                .rightSideArea__editButton[_ngcontent-%COMP%], .rightSideArea__saveButton[_ngcontent-%COMP%] {
                    margin-left: calc(var(--vw) * 1.5);
                    position: relative
                }
                
                .cardBundlesListing[_ngcontent-%COMP%] {
                    flex: 1;
                    display: grid;
                    grid-template-columns:repeat(10, 1fr)
                }
                `],
                data: {
                    animation: [(0, v.X$)("slideIn", [(0, v.eR)(":enter", [(0, v.oB)({
                        opacity: 0,
                        transform: "translateY(25%)"
                    }), (0, v.jt)("150ms ease-in-out", (0, v.oB)({
                        opacity: 1,
                        transform: "translateY(0%)"
                    }))]), (0, v.eR)(":leave", [(0, v.jt)("150ms ease-in-out", (0, v.oB)({
                        opacity: 0,
                        transform: "translateY(25%)"
                    }))])])]
                }
            }), o
        })();

        function ga(o, r) {
            1 & o && e._UZ(0, "app-rectangular-spinner", 5)
        }

        function pa(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 6), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().exportClick()
                }), e._uU(1, " Share deck\n"), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("disabled", !t.activeDeck || !t.deckCardIds || !t.deckCardIds.length)
            }
        }

        function ua(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-cards-list", 7), e.NdJ("selectCardId", function (i) {
                    return e.CHM(t), e.oxw().selectCardId(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("protoCards", t.protoCards)("inventoryCards", t.inventoryCards)("god", t.god)("filterCardIds", t.deckCardIds)("customInventoryCardsMap", t.customInventoryCardsMap)
            }
        }

        function _a(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-active-deck", 8), e.NdJ("selectCards", function (i) {
                    return e.CHM(t), e.oxw().removeCards(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("deckCards", t.deckCards)("deckSelectMode", t.deckSelectMode)("gameModeID", t.gameModeID)("deck", t.activeDeck)("forAI", t.forAI)
            }
        }

        let De = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g) {
                    this.decksService = t, this.cardsService = n, this.modalService = i, this.moduleConfigService = a, this.audioService = s, this.akumaService = c, this.cerberusModalService = l, this.deckCodeService = g, this.filters = _.iZ.standardCardFilters(f.nE.All, f.PE.AscID, "genesis", ""), this.availableFilters = [{
                        name: "Quality",
                        options: _.iZ.qualityOptions
                    }, {name: "Rarity", options: _.iZ.rarityOptions}, {
                        name: "Tribe",
                        options: _.iZ.tribeOptions
                    }, {name: "Mana", options: _.iZ.manaOptions}, {
                        name: "Set",
                        options: _.iZ.setOptions
                    }], this.loading = !1, this.deckSelectMode = !1, this.unsubscribe = new M.xQ, this.protoCards = [], this.deckCardIds = [], this.Flags = _.vU, this.destroyModal = () => {
                        const C = this.cerberusModalService.open(ae.am, {
                            defaultStylings: !1,
                            centered: !0
                        }).componentInstance;
                        C.title = "You\u2019re about to leave", C.text = "Make sure you've saved your deck.", C.secondaryCtaText = "Cancel", C.primaryCtaText = "Confirm", C.onPrimaryCtaClick = () => {
                            this.modalService.destroyTopModal(), this.akumaService.postControlEvent("gu", "MyDecks", "", "close", "Btn", "pressed")
                        }
                    }
                }

                ngOnInit() {
                    this.initDecks(), this.initSelectMode(), this.initCards(), this.cardsService.checkToRefreshInventory()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initSelectMode() {
                    this.decksService.deckSelectMode$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => {
                        this.deckSelectMode = t.deckSelect, this.gameModeID = t.gameModeID, this.forAI = t.forAI
                    })).subscribe()
                }

                initDecks() {
                    this.decksService.activeDeckChange$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => null !== t), (0, w.b)(t => this.onActiveDeckChange(t))).subscribe()
                }

                onActiveDeckChange(t) {
                    switch (t.type) {
                        case ie.u4.Change:
                            this.selectNewDeck(t.deck);
                            break;
                        case ie.u4.CardLimit:
                        case ie.u4.DeckLimit:
                            break;
                        default:
                            this.selectNewDeck(t.deck)
                    }
                }

                selectNewDeck(t) {
                    this.activeDeck = t, this.god = t.god, this.deckCards = [...t.items], this.deckCardIds = [...t.items.map(n => n.id)]
                }

                initCards() {
                    this.loading = !0, (0, D.aj)([this.cardsService.inventoryCards$, this.cardsService.protoCards$]).pipe((0, u.R)(this.unsubscribe), (0, w.b)(([t, n]) => {
                        this.inventoryCards = t, this.protoCards = this.moduleConfigService.useDevApis() ? Array.from(n.values()) : Array.from(n.values()).filter(i => i.live), this.loading = !1
                    })).subscribe()
                }

                removeCards(t) {
                    this.audioService.clickItemV1.play(), this.decksService.removeCardsFromActiveDeck(t)
                }

                selectCardId(t) {
                    const n = this.inventoryCards.find(i => i.id === t);
                    this.decksService.pushToActiveDeck(n)
                }

                exportClick() {
                    const t = this.activeDeck.items.map(c => c.protoCard.lib_id),
                        i = this.deckCodeService.encodeDeck(t, this.activeDeck.god);
                    this.cerberusModalService.open(Pi, {
                        defaultStylings: !1,
                        centered: !0
                    }).componentInstance.deckCode = i
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(j.D), e.Y36(_.dK), e.Y36(T.Z), e.Y36(_.LE), e.Y36(h.pk), e.Y36(_.jt), e.Y36(B.Qz), e.Y36(tn.R))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-deck-builder"]],
                decls: 5,
                vars: 5,
                consts: [[3, "closeButtonClickFn"], ["class", "spinner", 4, "ngIf"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "external_link", "class", "exportCta", 3, "disabled", "click", 4, "featureFlagIf"], ["class", "card-selection", 3, "protoCards", "inventoryCards", "god", "filterCardIds", "customInventoryCardsMap", "selectCardId", 4, "ngIf"], [3, "deckCards", "deckSelectMode", "gameModeID", "deck", "forAI", "selectCards", 4, "ngIf"], [1, "spinner"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "external_link", 1, "exportCta", 3, "disabled", "click"], [1, "card-selection", 3, "protoCards", "inventoryCards", "god", "filterCardIds", "customInventoryCardsMap", "selectCardId"], [3, "deckCards", "deckSelectMode", "gameModeID", "deck", "forAI", "selectCards"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.YNc(1, ga, 1, 0, "app-rectangular-spinner", 1), e.YNc(2, pa, 2, 1, "gu-plain-square-button", 2), e.YNc(3, ua, 1, 5, "app-cards-list", 3), e.YNc(4, _a, 1, 5, "app-active-deck", 4)), 2 & t && (e.Q6J("closeButtonClickFn", n.destroyModal), e.xp6(1), e.Q6J("ngIf", n.loading), e.xp6(1), e.Q6J("featureFlagIf", n.Flags.deckCodesEnabled), e.xp6(1), e.Q6J("ngIf", !n.loading), e.xp6(1), e.Q6J("ngIf", n.activeDeck))
                },
                directives: [ue, d.O5, Ye.w, Je, yt, cn],
                styles: ["[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 calc(var(--vh) * 7.7);padding-top:calc(var(--vh) * 4.5);height:100%}app-cards-list[_ngcontent-%COMP%]{flex:1}app-active-deck[_ngcontent-%COMP%]{height:calc(var(--vh) * 37)}.spinner[_ngcontent-%COMP%]{margin:auto}.exportCta[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 3);right:calc(var(--vh) * 17)}"]
            }), o
        })();
        var ln = p(37371), dn = p(8611), ha = p(5969);

        function ma(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "header", 2), e.TgZ(2, "h1", 3), e._uU(3, " CONNECT YOUR WALLET "), e.qZA(), e.TgZ(4, "div", 4), e._uU(5, " We want to make sure your cards get to the right wallet. Please connect your wallet via the Gods Unchained website. "), e.qZA(), e.TgZ(6, "gu-primary-hex-button", 5), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().linkWallet()
                }), e.qZA(), e.qZA(), e.BQk()
            }
        }

        function fa(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "header", 2), e.TgZ(2, "h1", 3), e._uU(3, " CONFIRM YOUR WALLET "), e.qZA(), e.TgZ(4, "div", 4), e._uU(5, " We want to make sure your cards get to the right wallet. Please confirm this is the right address to send cards to. "), e.qZA(), e.TgZ(6, "div", 6), e._uU(7), e.qZA(), e.TgZ(8, "gu-primary-hex-button", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().confirmWallet()
                }), e.qZA(), e.TgZ(9, "a", 8), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().linkWallet()
                }), e._uU(10, "Link new wallet"), e.qZA(), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(7), e.hij(" ", t.playerWallets[0], " ")
            }
        }

        function Ca(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "header", 2), e.TgZ(2, "h1", 3), e._uU(3, " CONNECT YOUR WALLET "), e.qZA(), e.TgZ(4, "div", 4), e._uU(5, " It looks like you have more then one wallet linked to your account. To ensure your new card goes to the right place, please confirm which wallet you want linked. "), e.qZA(), e.TgZ(6, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().selectWallet()
                }), e.qZA(), e.qZA(), e.BQk()
            }
        }

        let gn = (() => {
            class o {
                constructor(t, n, i) {
                    this.modalService = t, this.forgeWalletService = n, this.settingsService = i, this.playerWallets = [], this.unsubscribe = new M.xQ
                }

                ngOnInit() {
                    this.watchWalletStatus()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                onHide() {
                    this.modalService.destroyTopModal()
                }

                watchWalletStatus() {
                    (0, D.aj)([this.forgeWalletService.playerWallets$, this.forgeWalletService.selectedWallet$]).pipe((0, u.R)(this.unsubscribe)).subscribe(([t, n]) => {
                        this.playerWallets = t, this.selectedWallet = n, this.selectedWallet && this.playerWallets && this.playerWallets.length > 0 && this.onHide()
                    })
                }

                linkWallet() {
                    window.open("https://www.godsunchained.com/?linkwallet=true", "_blank")
                }

                confirmWallet() {
                    this.forgeWalletService.saveSelectedWallet(this.playerWallets[0])
                }

                selectWallet() {
                    this.settingsService.openSettings("wallet")
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(T.Z), e.Y36(he.d), e.Y36(ha.g))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-wallet-modal"]],
                decls: 4,
                vars: 3,
                consts: [[1, "gradientOverlay"], [4, "ngIf"], [1, "header"], [1, "header__title"], [1, "header__text"], ["text", "LINK WALLET", 1, "okButton", 3, "click"], [1, "header__address"], ["text", "LOOKS GOOD", 1, "okButton", 3, "click"], [1, "linkWallet", 3, "click"], ["text", "SELECT WALLET", 1, "okButton", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "div", 0), e.YNc(1, ma, 7, 0, "ng-container", 1), e.YNc(2, fa, 11, 1, "ng-container", 1), e.YNc(3, Ca, 7, 0, "ng-container", 1)), 2 & t && (e.xp6(1), e.Q6J("ngIf", !n.playerWallets || 0 === n.playerWallets.length), e.xp6(1), e.Q6J("ngIf", n.playerWallets && 1 === n.playerWallets.length), e.xp6(1), e.Q6J("ngIf", n.playerWallets && n.playerWallets.length > 1))
                },
                directives: [d.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.header__title[_ngcontent-%COMP%], .header__subtitle[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.header__text[_ngcontent-%COMP%], .header__address[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.header__subtitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.header__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.header__address[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.header__address[_ngcontent-%COMP%]{line-height:1.4}.header__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.header__text[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;margin:auto;position:relative;margin-top:calc(var(--vh) * 14);width:calc(var(--vw) * 50);border:2px solid #182531;background-image:url(/gu-assets/images/backgrounds/trader-overlay-bg.webp);background-size:cover;background-position:center}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.gradientOverlay[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;border:1px solid #182531;background:radial-gradient(ellipse at center,rgba(12,22,32,0) -80%,#0c1620 70%)}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;padding-left:calc(var(--vw) * 8);padding-right:calc(var(--vw) * 8);padding-top:calc(var(--vh) * 4);padding-bottom:calc(var(--vh) * 4)}.header__title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:calc(var(--vh) * 2)}.header__subtitle[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1);padding-bottom:calc(var(--vh) * 1)}.header__text[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 2);text-align:center}.header__address[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 2);padding-top:calc(var(--vh) * 2);text-align:center}.okButton[_ngcontent-%COMP%]{width:100px;margin-top:calc(var(--vh) * 4);margin-bottom:calc(var(--vh) * 3)}.linkWallet[_ngcontent-%COMP%]{color:#affaed;cursor:pointer}"]
            }), o
        })();
        var pn = p(47760);
        let kt = (() => {
            class o {
                transform(t, n = 6) {
                    try {
                        const i = Ut.O$.from(t);
                        return (0, pn.Fn)(Number.parseFloat(Number((0, pn.dF)(i)).toFixed(n)))
                    } catch (i) {
                        return "0"
                    }
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275pipe = e.Yjl({name: "formatEther", type: o, pure: !0}), o
        })();
        const va = ["forgeCard"];

        function ba(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 3, 4), e.TgZ(2, "app-card2", 5), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw(2);
                    return s.selectCard(s.forgeCards.proto, s.forgeCards.quality, a)
                }), e.qZA(), e.TgZ(3, "gu-icon", 6), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw(2);
                    return s.removeCard(s.forgeCards.proto, s.forgeCards.quality, a)
                }), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw(2);
                e.xp6(2), e.Q6J("protoId", t.forgeCards.proto)("quality", t.forgeCards.quality)
            }
        }

        function wa(o, r) {
            if (1 & o && (e.TgZ(0, "div", 7), e._UZ(1, "gu-icon", 8), e.TgZ(2, "div", 9), e._uU(3), e.ALo(4, "numberAbbreviation"), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(3), e.hij(" ", e.xi3(4, 1, t.fluxTransactionCost, 2), " ")
            }
        }

        function xa(o, r) {
            if (1 & o && (e.TgZ(0, "div", 7), e._UZ(1, "gu-icon", 10), e.TgZ(2, "div", 11), e._uU(3), e.ALo(4, "formatEther"), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(3), e.hij(" ", t.tokenTransactionCost ? e.xi3(4, 1, t.tokenTransactionCost, 2) : "-", " ")
            }
        }

        function Ma(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ba, 4, 2, "div", 1), e.YNc(2, wa, 5, 4, "div", 2), e.YNc(3, xa, 5, 4, "div", 2), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", t.forgeCards.ids), e.xp6(1), e.Q6J("ngIf", t.fluxTransactionCost), e.xp6(1), e.Q6J("ngIf", t.tokenTransactionCost)
            }
        }

        function ya(o, r) {
            if (1 & o && (e.TgZ(0, "div", 3, 4), e._UZ(2, "app-card2", 12), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.xp6(2), e.Q6J("protoId", t.protoId)("quality", t.quality)
            }
        }

        function ka(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ya, 3, 2, "div", 1), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", t.fakeForgeCards)
            }
        }

        let un = (() => {
            class o {
                constructor(t) {
                    this.forgeService = t, this.unsubscribe = new M.xQ, this.initForgeCards()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initForgeCards() {
                    this.forgeService.forgeCards$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.forgeCards = t
                    })
                }

                selectCard(t, n, i) {
                    this.forgeService.updateKeptId(t, n, i)
                }

                removeCard(t, n, i) {
                    this.forgeService.removeFromForge(t, n, i)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ge))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-app-forge-cards"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(va, 5), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.forgeCardDoms = i)
                    }
                },
                inputs: {
                    fluxTransactionCost: "fluxTransactionCost",
                    tokenTransactionCost: "tokenTransactionCost",
                    fakeForgeCards: "fakeForgeCards"
                },
                decls: 2,
                vars: 2,
                consts: [[4, "ngIf"], ["class", "cardsArea__card", 4, "ngFor", "ngForOf"], ["class", "cardsArea__amount", 4, "ngIf"], [1, "cardsArea__card"], ["forgeCard", ""], [3, "protoId", "quality", "click"], ["iconLigature", "close_x", 1, "cardsArea__card__close", 3, "click"], [1, "cardsArea__amount"], ["iconLigature", "flux_symbol", 1, "cardsArea__amount__icon"], [1, "cardsArea__amount__number"], ["iconLigature", "GUToken", 1, "cardsArea__amount__icon", "cardsArea__amount__icon--token"], [1, "cardsArea__amount__number", "cardsArea__amount__number--token"], [3, "protoId", "quality"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Ma, 4, 3, "ng-container", 0), e.YNc(1, ka, 2, 1, "ng-container", 0)), 2 & t && (e.Q6J("ngIf", n.forgeCards), e.xp6(1), e.Q6J("ngIf", !n.forgeCards && n.fakeForgeCards.length))
                },
                directives: [d.O5, d.sg, H],
                pipes: [Fe, kt],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.cardsArea__amount__number[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardsArea__card__keepText[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.cardsArea__card__keepText[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex}.cardsArea__card[_ngcontent-%COMP%]{width:calc(var(--vw) * 7);margin-right:calc(var(--vw) * .2);padding-right:calc(var(--vw) * .5);padding-left:calc(var(--vw) * .15);padding-top:calc(var(--vh) * .6);transition:border .15s ease-in-out;border:calc(var(--vh) * .15) solid transparent;position:relative;display:flex;flex-direction:column;cursor:pointer;animation:.2s enter-card ease-in-out}.cardsArea__card[_ngcontent-%COMP%]:hover:not(.cardsArea__card--keep){border-color:#3d5a7480}@keyframes enter-card{0%{transform:translateY(15%);opacity:0}to{transform:translateY(0);opacity:1}}.cardsArea__card--keep[_ngcontent-%COMP%]{border-color:#3d5a74}.cardsArea__card__keepText[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .35);text-transform:uppercase;font-weight:600;line-height:1.1;margin:0;margin-top:calc(var(--vh) * .2);text-align:center;color:#f6f6f6}.cardsArea__card__close[_ngcontent-%COMP%]{top:calc(var(--vh) * 1.05);right:calc(var(--vw) * .4);position:absolute;width:calc(var(--vw) * 1.2);height:calc(var(--vw) * 1.2);font-size:calc(calc(var(--vw) * 1.2) * .5);border-radius:50%;display:flex;border:calc(var(--vh) * .15) solid #7192b0;color:#f6f6f6;background:#0c1620;cursor:pointer}.cardsArea__card__close[_ngcontent-%COMP%]:hover{background:#7192b0}.cardsArea__card__close[_ngcontent-%COMP%]     i{margin:auto}.cardsArea__amount[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 1.5);width:calc(var(--vw) * 5);display:flex;flex-direction:column;align-items:center;justify-content:center}.cardsArea__amount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 7.5);background:linear-gradient(to bottom,#f6f6f6 0%,#d7d7d7 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:calc(var(--vh) * -.5);line-height:1}.cardsArea__amount__number[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 3);background:linear-gradient(to bottom,#f6f6f6 0%,#d7d7d7 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;line-height:1}.cardsArea__amount__icon--token[_ngcontent-%COMP%], .cardsArea__amount__number--token[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}"]
            }), o
        })(), _n = (() => {
            class o {
                constructor(t) {
                    this.modalService = t
                }

                ngOnInit() {
                }

                onHide() {
                    this.modalService.destroyTopModal()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(T.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-info-modal"]],
                decls: 7,
                vars: 0,
                consts: [[1, "header"], [1, "header__title"], [1, "header__text"], ["src", "/gu-assets/images/misc/gu-fusing-chart@2x.webp", "alt", "Fusing information chart.", 1, "fuseImage"], ["kind", "primary", "size", "large", "text", "START FUSING", 1, "okButton", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0), e.TgZ(1, "h1", 1), e._uU(2, " WELCOME TO THE FORGE "), e.qZA(), e.TgZ(3, "div", 2), e._uU(4, " Fuse multiple cards to create one of higher quality "), e.qZA(), e.qZA(), e._UZ(5, "img", 3), e.TgZ(6, "gu-primary-hex-button", 4), e.NdJ("click", function () {
                        return n.onHide()
                    }), e.qZA())
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.header__title[_ngcontent-%COMP%], .header__subtitle[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.header__text[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.header__subtitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.header__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.header__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.header__text[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;margin:auto;position:relative;margin-top:calc(var(--vh) * 3);width:calc(var(--vw) * 60);height:calc(var(--vh) * 85);border:2px solid #182531;background:rgba(15,27,39,.6)}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;padding-left:calc(var(--vw) * 2);padding-right:calc(var(--vw) * 2)}.header__title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;padding-top:calc(var(--vh) * 1);padding-bottom:calc(var(--vh) * 2)}.header__subtitle[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1);padding-bottom:calc(var(--vh) * 1)}.header__text[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 2);text-align:center}.fuseImage[_ngcontent-%COMP%]{height:calc(var(--vh) * 57);margin-left:calc(var(--vw) * -7.43)}.okButton[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:calc(var(--vh) * 4)}"]
            }), o
        })();
        const Oa = ["groupsContainer"];

        function Pa(o, r) {
            1 & o && e._UZ(0, "gu-loading-spinner", 11)
        }

        function Sa(o, r) {
            if (1 & o && e._UZ(0, "app-inventory-cards", 12), 2 & o) {
                const t = e.oxw();
                e.Q6J("showBundle", !0)("expandedViewMode", t.expandedViewMode)("columns", 4)("showCardCounts", !1)("showUnowned", !1)("displayedGroupedProtos", t.displayedGroupedProtos)("filterCardIds", t.filterCardIds)
            }
        }

        function Ta(o, r) {
            if (1 & o && e._UZ(0, "app-group-quality", 13), 2 & o) {
                const t = e.oxw();
                e.Q6J("columns", 4)("loading", t.loading)("showCardCounts", !1)("expandedViewMode", t.expandedViewMode)("showUnowned", !1)("displayedGroupedQualities", t.displayedGroupedQualities)("filterCardIds", t.filterCardIds)
            }
        }

        let Aa = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.resizeService = t, this.groupingService = n, this.filterService = i, this.modalService = a, this.cardGridService = s, this.activeGrouping = this.groupingService.defaultGrouping, this.filterCardIds = [], this.selectCardId = new e.vpe, this.GroupingType = Z, this.selectedHeaders = [], this.showUnowned = !0, this.loading = !0, this.activeSort = f.PE.AscMana, this.sortOptions = [new L("Mana", "filter_mana", f.PE.AscMana, f.PE.DescMana), new L("Health", "filter_health", f.PE.AscHealth, f.PE.DescHealth), new L("Attack", "filter_attack", f.PE.AscAttack, f.PE.DescAttack), new L("Tribe", "filter_tribe", f.PE.AscTribe, f.PE.DescTribe), new L("Type", "filter_type", f.PE.AscType, f.PE.DescType), new L("God", "filter_god", f.PE.AscGod, f.PE.DescGod), new L("Rarity", "filter_rarity", f.PE.AscRarity, f.PE.DescRarity), new L("Set", "filter_set", f.PE.AscSet, f.PE.DescSet)], this.allGroupedProtos = [], this.allGroupedQualities = [], this.unsubscribe = new M.xQ, this.watchForResize()
                }

                checkForVariousChanges(t) {
                    return t.protoCards || t.activeGrouping || t.god || t.inventoryCards
                }

                ngOnChanges(t) {
                    this.checkForVariousChanges(t) && this.inventoryCards && this.inventoryCards.length > 0 && this.initGroupings()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initGroupings() {
                    this.groupings = this.groupingService.groupings, this.groupingChange(this.activeGrouping), this.loading = !1
                }

                watchForResize() {
                    this.resizeService.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({vh: t}) => this.vh = t)).subscribe()
                }

                groupingChange(t, n = !0) {
                    this.sortCards(this.activeSort), this.selectedHeaders = n ? [] : this.selectedHeaders, this.activeGrouping = t, t.groupingType === Z.Quality ? (this.protoGrouping = null, this.qualityGrouping = this.groupingService.groupQualities(this.protoCards, t, this.god), this.filterCardGroupingQuality()) : (this.qualityGrouping = null, this.protoGrouping = this.groupingService.groupProtos(this.protoCards, t, this.god), this.filterCardGrouping()), this.loading = !1
                }

                filterCardGrouping() {
                    if (!this.protoGrouping) return;
                    this.displayedGroupedProtos = [];
                    const n = Array.from(this.protoGrouping.values()).reverse().filter(i => 0 === this.selectedHeaders.length || -1 !== this.selectedHeaders.indexOf(i.header));
                    this.allGroupedProtos = n.map(i => {
                        const a = Object.assign({}, i);
                        return this.search && this.search.length > 0 && (this.search = this.search.toLowerCase(), a.cards = [...a.cards].filter(s => s.pc.name.toLowerCase().includes(this.search) || s.pc.tribe && s.pc.tribe.toLowerCase().includes(this.search) || s.pc.god.toLowerCase().includes(this.search) || s.pc.effect.toLowerCase().includes(this.search))), a
                    }).filter(i => i.cards.length > 0).reduce((i, a) => i.concat(a), []), this.loadGroup()
                }

                filterCardGroupingQuality() {
                    if (!this.qualityGrouping) return;
                    this.displayedGroupedQualities = [];
                    const n = Array.from(this.qualityGrouping.values()).reverse().filter(i => 0 === this.selectedHeaders.length || -1 !== this.selectedHeaders.indexOf(i.header));
                    this.allGroupedQualities = n.map(i => {
                        const a = Object.assign({}, i);
                        return this.search && this.search.length > 0 && (this.search = this.search.toLowerCase(), a.cards = [...a.cards].filter(s => s.pc.name.toLowerCase().includes(this.search) || s.pc.tribe && s.pc.tribe.toLowerCase().includes(this.search) || s.pc.god.toLowerCase().includes(this.search) || s.pc.effect.toLowerCase().includes(this.search))), a
                    }).filter(i => i.cards.length > 0).reduce((i, a) => i.concat(a), []), this.loadGroupQuality()
                }

                loadGroupQuality() {
                    if (!this.allGroupedQualities || 0 === this.allGroupedQualities.length) return;
                    this.displayedGroupedQualities.push(this.allGroupedQualities.pop());
                    let t = this.getDisplayedCardsCountQuality(), n = this.isContainerScrollable(t);
                    for (; this.allGroupedQualities.length > 0 && (0 === t || !n);) this.displayedGroupedQualities.push(this.allGroupedQualities.pop()), t = this.getDisplayedCardsCountQuality(), n = this.isContainerScrollable(t)
                }

                loadGroup() {
                    if (this.activeGrouping.groupingType === Z.Quality) return void this.loadGroupQuality();
                    if (!this.allGroupedProtos || 0 === this.allGroupedProtos.length) return;
                    this.displayedGroupedProtos.push(this.allGroupedProtos.pop());
                    let t = this.getDisplayedCardsCount(), n = this.isContainerScrollable(t);
                    for (; this.allGroupedProtos.length > 0 && (0 === t || !n);) this.displayedGroupedProtos.push(this.allGroupedProtos.pop()), t = this.getDisplayedCardsCount(), n = this.isContainerScrollable(t)
                }

                groupingHeaderChange(t) {
                    this.selectedHeaders = t, this.filterCardGrouping()
                }

                searchChange(t) {
                    this.cardGridService.resetCardGrid(), this.search = t, this.filterCardGroupingQuality()
                }

                sortCards(t) {
                    this.protoCards = this.filterService.sortProtos(this.protoCards, t)
                }

                sortChange(t) {
                    this.activeSort = t, this.groupingChange(this.activeGrouping, !1)
                }

                unownedChange(t) {
                    this.showUnowned = t
                }

                isContainerScrollable(t) {
                    if (void 0 !== this.expandedViewMode) return !1;
                    const n = this.groupsContainer.nativeElement.clientHeight;
                    return Math.ceil(t / 8) * this.vh * 23.2 > n
                }

                selectCard(t) {
                    this.selectCardId.emit(t)
                }

                getDisplayedCardsCount() {
                    return this.getFilterGroups(this.displayedGroupedProtos).reduce((n, i) => n + i.cards.reduce((a, s) => this.showUnowned || s.qualityMap ? a.concat(s) : a, []).length, 0)
                }

                getDisplayedCardsCountQuality() {
                    return this.getFilterGroups(this.displayedGroupedQualities).reduce((n, i) => n + i.cards.reduce((a, s) => this.showUnowned || s.ics ? a.concat(s) : a, []).length, 0)
                }

                getFilterGroups(t) {
                    let n = [];
                    if (this.expandedViewMode === N.SELLING) n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "genesis" === a.set)})); else {
                        if (this.expandedViewMode !== N.FORGING) return t;
                        n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "core" === a.set)}))
                    }
                    return n
                }

                fluxInfoModal() {
                    this.modalService.createModal(_n, null, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(_e), e.Y36(_.iZ), e.Y36(T.Z), e.Y36(Se))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-card-list"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Oa, 7), e.Gf(H, 5)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.groupsContainer = i.first), e.iGM(i = e.CRH()) && (n.cardComponents = i)
                    }
                },
                inputs: {
                    inventoryCards: "inventoryCards",
                    protoCards: "protoCards",
                    activeGrouping: "activeGrouping",
                    god: "god",
                    filterCardIds: "filterCardIds",
                    title: "title",
                    expandedViewMode: "expandedViewMode"
                },
                outputs: {selectCardId: "selectCardId"},
                features: [e.TTD],
                decls: 12,
                vars: 11,
                consts: [[1, "sectionHeader"], [1, "sectionHeader__titleContainer"], [1, "sectionHeader__title"], ["iconLigature", "help", "fillColor", "colors.light.700", 1, "sectionHeader__infoButton", 3, "click"], [1, "sectionHeader__groupings", 3, "displaySearch", "searchChange"], [1, "sectionHeader__filterArea", 3, "showFilters", "sortOptions", "selectedHeaders", "cardGrouping", "unownedCheckboxVisible", "sortChange", "groupingHeaderChange"], ["class", "loadingSpinner", 4, "ngIf"], ["infiniteScroll", "", 1, "cardsListingArea", 3, "scrollWindow", "scrolled"], ["groupsContainer", ""], ["mode", "proto", 3, "showBundle", "expandedViewMode", "columns", "showCardCounts", "showUnowned", "displayedGroupedProtos", "filterCardIds", 4, "ngIf"], [3, "columns", "loading", "showCardCounts", "expandedViewMode", "showUnowned", "displayedGroupedQualities", "filterCardIds", 4, "ngIf"], [1, "loadingSpinner"], ["mode", "proto", 3, "showBundle", "expandedViewMode", "columns", "showCardCounts", "showUnowned", "displayedGroupedProtos", "filterCardIds"], [3, "columns", "loading", "showCardCounts", "expandedViewMode", "showUnowned", "displayedGroupedQualities", "filterCardIds"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0), e.TgZ(1, "div", 1), e.TgZ(2, "h3", 2), e._uU(3), e.qZA(), e.TgZ(4, "gu-icon", 3), e.NdJ("click", function () {
                        return n.fluxInfoModal()
                    }), e.qZA(), e.qZA(), e.TgZ(5, "app-singular-active-filter-bar", 4), e.NdJ("searchChange", function (a) {
                        return n.searchChange(a)
                    }), e.qZA(), e.TgZ(6, "app-filter-sort-bar", 5), e.NdJ("sortChange", function (a) {
                        return n.sortChange(a)
                    })("groupingHeaderChange", function (a) {
                        return n.groupingHeaderChange(a)
                    }), e.qZA(), e.qZA(), e.YNc(7, Pa, 1, 0, "gu-loading-spinner", 6), e.TgZ(8, "section", 7, 8), e.NdJ("scrolled", function () {
                        return n.loadGroup()
                    }), e.YNc(10, Sa, 1, 7, "app-inventory-cards", 9), e.YNc(11, Ta, 1, 7, "app-group-quality", 10), e.qZA()), 2 & t && (e.xp6(3), e.Oqu(n.title), e.xp6(2), e.Q6J("displaySearch", !0), e.xp6(1), e.Q6J("showFilters", !1)("sortOptions", n.sortOptions)("selectedHeaders", n.selectedHeaders)("cardGrouping", n.protoGrouping)("unownedCheckboxVisible", !1), e.xp6(1), e.Q6J("ngIf", n.loading), e.xp6(1), e.Q6J("scrollWindow", !1), e.xp6(2), e.Q6J("ngIf", n.activeGrouping.groupingType !== n.GroupingType.Quality), e.xp6(1), e.Q6J("ngIf", n.activeGrouping.groupingType === n.GroupingType.Quality))
                },
                directives: [vt, ft, d.O5, tt, xt, Mt],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.sectionHeader__infoButton[_ngcontent-%COMP%], .sectionHeader__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.godArea__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.sectionHeader__infoButton[_ngcontent-%COMP%], .sectionHeader__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.godArea__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}.sectionHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1);padding-right:calc(var(--vh) * 1);padding-bottom:calc(var(--vh) * 1);padding-left:calc(var(--vh) * 2);margin-bottom:calc(var(--vh) * 3);background:linear-gradient(to right,#1d2f41 0%,#0f1b27 100%);position:relative;display:flex;justify-content:space-between;align-items:center;border:calc(var(--vh) * .15) solid #1d2f41}.sectionHeader__titleContainer[_ngcontent-%COMP%]{display:flex;align-items:center}.sectionHeader__title[_ngcontent-%COMP%]{text-transform:uppercase;line-height:1;background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.sectionHeader__infoButton[_ngcontent-%COMP%]{margin-left:calc(var(--vh) * .8);cursor:pointer}.sectionHeader__godArea[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;right:0;top:0;display:flex;align-items:flex-start}app-god-badge[_ngcontent-%COMP%]{user-select:auto;pointer-events:auto;margin-top:calc(var(--vh) * 1)}.godArea__label[_ngcontent-%COMP%]{color:#7192b0;padding-top:calc(var(--vh) * 1.1);padding-right:calc(var(--vw) * 2)}.cardsListingArea[_ngcontent-%COMP%]{overflow:hidden;overflow-y:auto;flex:1}.loadingSpinner[_ngcontent-%COMP%]{margin:0 auto}  app-card{cursor:pointer}"]
            }), o
        })();
        var Ia = p(40537);

        function Za(o, r) {
            if (1 & o && (e.ynx(0), e._UZ(1, "gu-simple-text-button", 29), e.BQk()), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(2);
                e.xp6(1), e.hYB("href", "", n.environment.guWebsite, "/fusing-next-step?request_id=", t.request_id, "")
            }
        }

        function Fa(o, r) {
            if (1 & o && (e.TgZ(0, "a", 30), e.TgZ(1, "gu-body-text", 24), e._uU(2), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(2);
                e.hYB("href", "", n.environment.GUCollectioimmutableXMarketplaceUrlGUInventory, "/", t.target_assets[0].id, "", e.LSH), e.xp6(2), e.hij(" ", t.target_assets[0].id, " ")
            }
        }

        const Da = function (o, r) {
            return {tableSection__rowEven: o, tableSection__rowOdd: r}
        };

        function Ga(o, r) {
            if (1 & o && (e.TgZ(0, "tr", 20), e.TgZ(1, "td", 21), e.TgZ(2, "gu-body-text", 22), e._uU(3), e.ALo(4, "date"), e.qZA(), e.TgZ(5, "gu-body-text", 23), e._uU(6), e.ALo(7, "date"), e.qZA(), e.qZA(), e.TgZ(8, "td", 21), e.TgZ(9, "gu-body-text", 24), e._uU(10), e.ALo(11, "titlecase"), e.YNc(12, Za, 2, 2, "ng-container", 9), e.qZA(), e.qZA(), e.TgZ(13, "td", 21), e.TgZ(14, "gu-body-text", 24), e._uU(15), e.qZA(), e.qZA(), e.TgZ(16, "td", 21), e.YNc(17, Fa, 3, 3, "a", 25), e.qZA(), e.TgZ(18, "td", 21), e.TgZ(19, "gu-body-text", 24), e._uU(20), e.ALo(21, "titlecase"), e.qZA(), e.qZA(), e.TgZ(22, "td", 21), e.TgZ(23, "gu-body-text", 26), e._uU(24), e.ALo(25, "numberAbbreviation"), e._UZ(26, "gu-icon", 27), e._uU(27), e.ALo(28, "formatEther"), e._UZ(29, "gu-icon", 28), e.qZA(), e.qZA(), e.TgZ(30, "td", 21), e.TgZ(31, "gu-body-text", 24), e._uU(32), e.ALo(33, "addressTruncate"), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                const t = r.$implicit, n = r.even, i = e.oxw(2);
                e.Q6J("ngClass", e.WLB(29, Da, n, !n)), e.xp6(3), e.hij(" ", e.xi3(4, 12, t.created_at, "dd/MM/YYYY"), " "), e.xp6(3), e.hij(" ", e.xi3(7, 15, t.created_at, "h:mm:ss"), " "), e.xp6(4), e.hij(" ", e.lcZ(11, 18, i.ForgeStatusMapping[t.status]), "\xa0 "), e.xp6(2), e.Q6J("ngIf", t.status !== i.ForgeStatus.COMPLETED && t.status !== i.ForgeStatus.VALIDATING_PAYMENT), e.xp6(3), e.hij(" ", t.request_id, " "), e.xp6(2), e.Q6J("ngIf", (null == t.target_assets[0] ? null : t.target_assets[0].id) > 0), e.xp6(3), e.AsE(" ", t.target_assets[0].name, " - ", e.lcZ(21, 20, i.QualityMapping[t.target_assets[0].quality]), " "), e.xp6(4), e.hij(" ", e.xi3(25, 22, t.flux_amount, 2), " "), e.xp6(3), e.hij(" \xa0 ", e.lcZ(28, 25, t.token_amount), " "), e.xp6(5), e.hij(" ", e.lcZ(33, 27, t.address), " ")
            }
        }

        function Ba(o, r) {
            if (1 & o && (e.TgZ(0, "div", 10), e.TgZ(1, "table", 11), e.TgZ(2, "thead"), e.TgZ(3, "tr"), e.TgZ(4, "th", 12), e.TgZ(5, "gu-body-text", 13), e._uU(6, " Date & Time "), e.qZA(), e.qZA(), e.TgZ(7, "th", 12), e.TgZ(8, "div", 14), e.TgZ(9, "gu-body-text", 13), e._uU(10, " Status "), e.qZA(), e._uU(11, " \xa0 "), e.TgZ(12, "app-tooltip", 15), e._UZ(13, "gu-icon", 16), e.qZA(), e.qZA(), e.qZA(), e.TgZ(14, "th", 12), e.TgZ(15, "div", 14), e.TgZ(16, "gu-body-text", 13), e._uU(17, " Fusing ID "), e.qZA(), e._uU(18, " \xa0 "), e.TgZ(19, "app-tooltip", 17), e._UZ(20, "gu-icon", 16), e.qZA(), e.qZA(), e.qZA(), e.TgZ(21, "th", 12), e.TgZ(22, "div", 14), e.TgZ(23, "gu-body-text", 13), e._uU(24, " Card ID "), e.qZA(), e._uU(25, " \xa0 "), e.TgZ(26, "app-tooltip", 18), e._UZ(27, "gu-icon", 16), e.qZA(), e.qZA(), e.qZA(), e.TgZ(28, "th", 12), e.TgZ(29, "gu-body-text", 13), e._uU(30, " Card Fused "), e.qZA(), e.qZA(), e.TgZ(31, "th", 12), e.TgZ(32, "gu-body-text", 13), e._uU(33, " Cost "), e.qZA(), e.qZA(), e.TgZ(34, "th", 12), e.TgZ(35, "gu-body-text", 13), e._uU(36, " Wallet "), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(37, "tbody"), e.YNc(38, Ga, 34, 32, "tr", 19), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(38), e.Q6J("ngForOf", t.items)
            }
        }

        function La(o, r) {
            1 & o && e._UZ(0, "gu-loading-spinner")
        }

        let Ua = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.authService = t, this.fusingService = n, this.modalService = i, this.environment = a, this.unsubscribe = new M.xQ, this.items = [], this.fusingRequestResponseLoading = !0
                }

                get QualityMapping() {
                    return f.Xl
                }

                get ForgeStatus() {
                    return rt.Og
                }

                get ForgeStatusMapping() {
                    return rt.oS
                }

                ngOnInit() {
                    const t = this.authService.getUserId();
                    this.fusingRequestResponseLoading = !0, this.fusingService.getFusingLatestsRequests(t).pipe((0, u.R)(this.unsubscribe), (0, Ia.x)(() => {
                        this.fusingRequestResponseLoading = !1
                    })).subscribe(n => {
                        this.items = n.records
                    })
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                onHide() {
                    this.modalService.destroyTopModal()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.mI), e.Y36(_.pH), e.Y36(T.Z), e.Y36(h.Ho))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-fusing-history-modal"]],
                decls: 12,
                vars: 2,
                consts: [["fillColor", "colors.light.500", "iconLigature", "close_x", 1, "closeModal", 3, "click"], [1, "wrapper"], [1, "header"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", 1, "header__title"], ["fillColor", "colors.light.300", 1, "header__subtitle"], ["href", "https://market.x.immutable.com/inventory", "text", "here", "fillColor", "colors.apocyan.500"], ["iconLigature", "leave_website"], ["class", "tableSection", 4, "ngIf"], [1, "footer"], [4, "ngIf"], [1, "tableSection"], [1, "tableSection__table"], [1, "tableSection__tableHeader"], ["fontWeight", "bold", "fillColor", "colors.light.500"], [1, "tableSection__tableHeaderContent"], ["title", "Status of your transaction."], ["fillColor", "colors.light.500", "iconLigature", "help", 1, "tableSection__tableHeaderIcon"], ["title", "Use this ID when you contact support."], ["title", "Use this ID to find your asset on Immutable X."], ["class", "tableSection__row tableSection__rowEven", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "tableSection__row", "tableSection__rowEven", 3, "ngClass"], [1, "tableSection__cell"], ["fontWeight", "bold", "fillColor", "colors.light.500", 1, "tableSection__cellDate"], ["size", "help", "fillColor", "colors.light.500"], ["fillColor", "colors.gunmetal.900"], [3, "href", 4, "ngIf"], ["fillColor", "colors.gunmetal.900", 1, "tableSection_cellContentCost"], ["iconLigature", "flux_symbol", "fillColor", "colors.dark.300"], ["iconLigature", "GUToken", "fillColor", "colors.gold.500"], ["text", "(Retry?)", "fillColor", "colors.gunmetal.900", 1, "tableSection__cellFusingId", 3, "href"], [3, "href"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.onHide()
                    }), e.qZA(), e.TgZ(1, "div", 1), e.TgZ(2, "header", 2), e.TgZ(3, "gu-heading-text", 3), e._uU(4, " Fusing History "), e.qZA(), e.TgZ(5, "gu-body-text", 4), e._uU(6, " A list of your past 60 fuses and their status. See your Immutable X inventory "), e.TgZ(7, "gu-simple-text-button", 5), e._UZ(8, "gu-icon", 6), e.qZA(), e.qZA(), e.qZA(), e.YNc(9, Ba, 39, 1, "div", 7), e.qZA(), e.TgZ(10, "div", 8), e.YNc(11, La, 1, 0, "gu-loading-spinner", 9), e.qZA()), 2 & t && (e.xp6(9), e.Q6J("ngIf", !n.fusingRequestResponseLoading), e.xp6(2), e.Q6J("ngIf", n.fusingRequestResponseLoading))
                },
                directives: [d.O5, xe.K, d.sg, d.mk],
                pipes: [d.uU, d.rS, Fe, kt, ht],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.closeModal[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.closeModal[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;margin:auto;position:relative;padding-top:calc(var(--vh) * 3.5);padding-bottom:calc(var(--vh) * 4);width:calc(var(--vw) * 80);height:calc(var(--vh) * 85);border:2px solid #1D2F41;background:#0F1B27}.closeModal[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 1.4);right:calc(var(--vh) * 1.4);cursor:pointer}.wrapper[_ngcontent-%COMP%]{overflow-y:auto}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;padding-left:calc(var(--vw) * 2);padding-right:calc(var(--vw) * 2);margin-bottom:calc(var(--vw) * 2)}.header__title[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * .8)}.tableSection[_ngcontent-%COMP%]{width:100%;padding-left:calc(var(--vw) * 3);padding-right:calc(var(--vw) * 3)}.tableSection__table[_ngcontent-%COMP%]{border-spacing:0;border-color:#1d2f41;width:100%}.tableSection__tableHeader[_ngcontent-%COMP%]{background-color:#1d2f41;padding-top:calc(var(--vw) * 1);padding-bottom:calc(var(--vw) * 1)}.tableSection__tableHeaderContent[_ngcontent-%COMP%]{display:flex;justify-content:center}.tableSection__tableHeaderIcon[_ngcontent-%COMP%]{cursor:pointer}.tableSection__rowEven[_ngcontent-%COMP%]{background-color:#f6f6f6}.tableSection__rowOdd[_ngcontent-%COMP%]{background-color:#d7d7d7}.tableSection__cell[_ngcontent-%COMP%]{width:calc(var(--vw) * 14.5);padding:10px;border-right:1px solid #464646;border-top:1px solid #464646;text-align:center}.tableSection__cell[_ngcontent-%COMP%]:first-child{background-color:#1d2f41;border-left:1px solid #464646}.tableSection__cellDate[_ngcontent-%COMP%]{display:block}.tableSection__cellFusingId[_ngcontent-%COMP%]{cursor:pointer}.tableSection__cellFusingId[_ngcontent-%COMP%]:hover{color:#0f1b27;border-color:#0f1b27}.tableSection_cellContentCost[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]
            }), o
        })(), hn = (() => {
            class o {
                constructor(t, n) {
                    this.forgeWalletService = t, this.addressTruncatePipe = n, this.unsubscribe = new M.xQ, this.addresses = [], this.truncateAddress = !1
                }

                ngOnInit() {
                    this.initWalletAddress()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initWalletAddress() {
                    this.forgeWalletService.playerWallets$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.addresses = this.getSelectOptions(t)
                    }), this.forgeWalletService.selectedWallet$.pipe((0, u.R)(this.unsubscribe), (0, x.q)(1)).subscribe(t => {
                        this.selectedWallet = t
                    })
                }

                onDropdownSelect(t) {
                    const i = t.detail.value || "";
                    i && this.forgeWalletService.saveSelectedWallet(i)
                }

                getSelectOptions(t) {
                    return t.map(n => ({
                        label: this.truncateAddress ? this.addressTruncatePipe.transform(n) : n,
                        value: n
                    }))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(he.d), e.Y36(ht))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-select-wallet-dropdown"]],
                inputs: {truncateAddress: "truncateAddress"},
                features: [e._Bn([ht])],
                decls: 1,
                vars: 2,
                consts: [["placeholder", "Select Wallet", "stretch", "true", 1, "select", 3, "options", "value", "change"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-select", 0), e.NdJ("change", function (a) {
                        return n.onDropdownSelect(a)
                    }), e.qZA()), 2 & t && e.Q6J("options", n.addresses)("value", n.selectedWallet)
                },
                styles: ["[_nghost-%COMP%]{height:40px}.select[_ngcontent-%COMP%]{margin:0}"]
            }), o
        })();

        function qa(o, r) {
            1 & o && (e.ynx(0), e.TgZ(1, "gu-body-text"), e._uU(2, "Wallet:"), e.qZA(), e._UZ(3, "cerberus-select-wallet-dropdown", 11), e.BQk())
        }

        let Ea = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.fluxService = t, this.godsService = n, this.forgeWalletService = i, this.modalService = a, this.unsubscribe = new M.xQ, this.fluxBalance = 0
                }

                ngOnInit() {
                    this.initFluxBalance(), this.initGodBalance(), this.initWalletAddress()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initFluxBalance() {
                    this.fluxService.fetchFluxInfo(), this.fluxService.fluxInfo$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => !!t)).subscribe(t => {
                        this.fluxBalance = t.flux_available
                    })
                }

                initGodBalance() {
                    this.godsService.godsInfo$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => !!t)).subscribe(t => {
                        this.godsBalance = t.balance
                    })
                }

                initWalletAddress() {
                    this.forgeWalletService.selectedWallet$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.selectedWallet = t, this.godsService.fetchGodsInfo(this.selectedWallet)
                    })
                }

                historyModal() {
                    this.modalService.createModal(Ua, null, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.TJ), e.Y36(_.pO), e.Y36(he.d), e.Y36(T.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-area-header"]],
                decls: 15,
                vars: 9,
                consts: [[1, "cardForgeArea__balanceArea-left"], [4, "ngIf"], ["size", "normal", "text", "History", "icon", "action_history", "leftIconPosition", "true", 1, "cardForgeArea__header-history__cta", 3, "click"], [1, "cardForgeArea__balanceArea-right"], [1, "cardForgeArea__balanceArea__balanceRow", "cardForgeArea__balanceArea__fluxBalanceRow"], ["iconLigature", "flux_symbol", 1, "cardForgeArea__balanceArea__balance__icon", "cardForgeArea__balanceArea__fluxBalance__icon"], [1, "cardForgeArea__balanceArea__balance__number", "cardForgeArea__balanceArea__fluxBalance__number"], ["src", "/assets/images/ui-embellishments/ui--simple-divider.png", "alt", "small divider", 1, "header__divider"], [1, "cardForgeArea__balanceArea__balanceRow", "cardForgeArea__balanceArea__godsBalanceRow"], ["iconLigature", "GUToken", "fillColor", "", 1, "cardForgeArea__balanceArea__balance__icon", "cardForgeArea__balanceArea__godsBalance__icon"], [1, "cardForgeArea__balanceArea__balance__number", "cardForgeArea__balanceArea__godsBalance__number"], ["truncateAddress", "true", 1, "forgeArea__header-selectWalletDropdown"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e.YNc(1, qa, 4, 0, "ng-container", 1), e.TgZ(2, "gu-plain-square-button", 2), e.NdJ("click", function () {
                        return n.historyModal()
                    }), e.qZA(), e.qZA(), e.TgZ(3, "div", 3), e.TgZ(4, "div", 4), e._UZ(5, "gu-icon", 5), e.TgZ(6, "h2", 6), e._uU(7), e.ALo(8, "numberAbbreviation"), e.qZA(), e.qZA(), e._UZ(9, "img", 7), e.TgZ(10, "div", 8), e._UZ(11, "gu-icon", 9), e.TgZ(12, "h2", 10), e._uU(13), e.ALo(14, "formatEther"), e.qZA(), e.qZA(), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngIf", n.selectedWallet), e.xp6(6), e.hij(" ", e.xi3(8, 3, n.fluxBalance, 2), " "), e.xp6(6), e.hij(" ", n.godsBalance ? e.xi3(14, 6, n.godsBalance, 2) : "-", " "))
                },
                directives: [d.O5, hn],
                pipes: [Fe, kt],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.cardForgeArea__balanceArea__balance__number[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardForgeArea__balanceArea__infoButton[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.cardForgeArea__balanceArea__balance__number[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.cardForgeArea__balanceArea__infoButton[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-bottom:calc(var(--vh) * 1.1);border-bottom:calc(var(--vh) * .15) solid #1d2f41}.forgeArea__header-selectWalletDropdown[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * 1);margin-right:calc(var(--vw) * 1);width:calc(var(--vw) * 11);z-index:1}.cardForgeArea__header-history__cta[_ngcontent-%COMP%]{width:calc(var(--vw) * 9)}.cardForgeArea__balanceArea-left[_ngcontent-%COMP%]{display:flex;align-items:center}.cardForgeArea__balanceArea-right[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.cardForgeArea__balanceArea__balanceRow[_ngcontent-%COMP%]{display:flex;justify-content:center}.cardForgeArea__balanceArea__balance__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.4)}.cardForgeArea__balanceArea__balance__number[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * .16)}.cardForgeArea__balanceArea__fluxBalance__icon[_ngcontent-%COMP%], .cardForgeArea__balanceArea__fluxBalance__number[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#f6f6f6 0%,#d7d7d7 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.cardForgeArea__balanceArea__godsBalance__icon[_ngcontent-%COMP%], .cardForgeArea__balanceArea__godsBalance__number[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.header__divider[_ngcontent-%COMP%]{margin-left:calc(var(--vh) * 1.1);margin-right:calc(var(--vh) * 1.1);height:calc(var(--vh) * 3.35);width:calc(var(--vh) * .2)}.cardForgeArea__balanceArea__infoButton[_ngcontent-%COMP%]{color:#7192b0;font-weight:700;text-transform:uppercase;text-align:center;cursor:pointer;white-space:nowrap}.cardForgeArea__balanceArea__infoButton__icon[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * .2);margin-top:calc(var(--vh) * -.1);width:calc(var(--vh) * 2);height:calc(var(--vh) * 2);border-radius:50%;border:calc(var(--vh) * .15) solid #7192b0;display:inline-flex;vertical-align:top}.cardForgeArea__balanceArea__infoButton__icon[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin:auto;line-height:1;font-weight:700;font-style:normal}"]
            }), o
        })(), Na = (() => {
            class o {
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-area-select-wallet"]],
                decls: 7,
                vars: 0,
                consts: [["fillColor", "colors.light.100", "align", "center"], [1, "forgeArea__selectWalletDropdown"], ["href", "https://godsunchained.com/manage-wallets", "text", "Manage Wallets"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-paragraph-text", 0), e._uU(1, " Select the wallet with $GODS and where your new card will be minted.\n"), e.qZA(), e._UZ(2, "cerberus-select-wallet-dropdown", 1), e.TgZ(3, "gu-paragraph-text", 0), e._uU(4, " If your wallet is not there, go to "), e._UZ(5, "gu-simple-text-button", 2), e._uU(6, " to connect it.\n"), e.qZA())
                },
                directives: [hn],
                styles: ["[_nghost-%COMP%]{height:100%;width:86%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto}.forgeArea__selectWalletDropdown[_ngcontent-%COMP%]{display:block;width:100%;margin-top:calc(var(--vh) * 1.6);margin-bottom:calc(var(--vh) * 1.4)}"]
            }), o
        })();
        const Ra = ["progressCircle"];

        function Qa(o, r) {
            if (1 & o && (e.O4$(), e._UZ(0, "circle", 16)), 2 & o) {
                const t = e.oxw(2);
                e.Udp("r", t.radius)("stroke-width", t.strokeWidth)("fill", t.fillColor)
            }
        }

        function Ha(o, r) {
            if (1 & o && (e.O4$(), e.TgZ(0, "svg", 1), e.TgZ(1, "defs"), e.TgZ(2, "linearGradient", 2), e._UZ(3, "stop", 3), e._UZ(4, "stop", 4), e._UZ(5, "stop", 5), e.qZA(), e.TgZ(6, "linearGradient", 6), e._UZ(7, "stop", 7), e._UZ(8, "stop", 8), e._UZ(9, "stop", 9), e.qZA(), e.TgZ(10, "linearGradient", 10), e._UZ(11, "stop", 11), e._UZ(12, "stop", 12), e.qZA(), e.qZA(), e.YNc(13, Qa, 1, 6, "circle", 13), e._UZ(14, "circle", 14, 15), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Udp("width", t.width)("height", t.width), e.xp6(13), e.Q6J("ngIf", t.showBackgroundRing), e.xp6(1), e.Udp("r", t.radius)("stroke-width", t.insetInnerStroke ? .33 * t.strokeWidth : t.strokeWidth)("stroke", t.gradientForStroke ? "url(#" + t.gradientForStroke + "-gradient)" : t.strokeColor)("fill", t.fillColor)("stroke-dasharray", t.circumference + " " + t.circumference)("stroke-dashoffset", t.circumferenceOfCircularSegment), e.ekj("progressRing__circle--supressAnimation", t.supressAnimation)
            }
        }

        let Ot = (() => {
            class o {
                constructor(t) {
                    this.elRef = t, this.percentage = 0, this.showBackgroundRing = !1, this.supressAnimation = !1, this.insetInnerStroke = !1
                }

                ngOnInit() {
                    this.calcCircle()
                }

                ngOnChanges(t) {
                    this.calcCircle()
                }

                get hostWidth() {
                    return this.width
                }

                get hostHeight() {
                    return this.width
                }

                calcCircle() {
                    this.radius = (this.width - this.strokeWidth) / 2, this.circumference = 2 * Math.PI * this.radius, this.circumferenceOfCircularSegment = this.circumference - this.percentage / 100 * this.circumference
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(e.SBq))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-progress-circle"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(Ra, 7), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.progressCircleDom = i.first)
                    }
                },
                hostVars: 4,
                hostBindings: function (t, n) {
                    2 & t && e.Udp("width", n.hostWidth, "px")("height", n.hostHeight, "px")
                },
                inputs: {
                    percentage: "percentage",
                    width: "width",
                    strokeColor: "strokeColor",
                    fillColor: "fillColor",
                    strokeWidth: "strokeWidth",
                    showBackgroundRing: "showBackgroundRing",
                    supressAnimation: "supressAnimation",
                    gradientForStroke: "gradientForStroke",
                    insetInnerStroke: "insetInnerStroke"
                },
                features: [e.TTD],
                decls: 1,
                vars: 1,
                consts: [["class", "progressRing", 3, "width", "height", 4, "ngIf"], [1, "progressRing"], ["id", "gold-gradient", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "#fff2d8"], ["offset", "50%", "stop-color", "#ebc98b"], ["offset", "100%", "stop-color", "#c6a052"], ["id", "aqua-gradient", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "#affaed"], ["offset", "50%", "stop-color", "#8be1e0"], ["offset", "100%", "stop-color", "#54bbcd"], ["id", "whiteToAqua-gradient", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "#ffffff"], ["offset", "100%", "stop-color", "#8be1e0"], ["class", "progressRing__circle--background", "fill", "transparent", "cx", "50%", "cy", "50%", 3, "r", "stroke-width", "fill", 4, "ngIf"], ["fill", "transparent", "cx", "50%", "cy", "50%", "stroke-linecap", "round", 1, "progressRing__circle"], ["progressCircle", ""], ["fill", "transparent", "cx", "50%", "cy", "50%", 1, "progressRing__circle--background"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Ha, 16, 19, "svg", 0), 2 & t && e.Q6J("ngIf", n.percentage > 0 || n.showBackgroundRing)
                },
                directives: [d.O5],
                styles: ["[_nghost-%COMP%]{display:block}.progressRing[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.progressRing__circle[_ngcontent-%COMP%]{transition:stroke-dashoffset .05s;transform:rotate(-90deg);transform-origin:50% 50%}.progressRing__circle--supressAnimation[_ngcontent-%COMP%]{transition:none}.progressRing__circle--background[_ngcontent-%COMP%]{stroke:#1d2f41}"]
            }), o
        })(), mn = (() => {
            class o {
                constructor() {
                }

                ngOnInit() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-inderterminate-loading"]],
                decls: 6,
                vars: 0,
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div"), e.TgZ(1, "div"), e.TgZ(2, "div"), e.TgZ(3, "div"), e.TgZ(4, "div"), e._UZ(5, "div"), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.qZA())
                },
                styles: ["@keyframes rotate{0%{transform:rotate(0)}50%{transform:rotate(180deg)}to{transform:rotate(360deg)}}[_nghost-%COMP%]{position:relative;width:150px;height:150px;display:block;padding:calc(var(--vh) * .8);border-radius:50%;border:calc(var(--vw) * .2) solid transparent;animation:rotate linear 3.5s infinite;border-top-color:#3d5a7480;border-left-color:#8be1e0;animation-timing-function:cubic-bezier(.55,.38,.21,.88);animation-duration:3s;will-change:transform}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{height:100%;padding:calc(var(--vh) * .8);border-radius:50%;border:calc(var(--vw) * .2) solid transparent;animation:rotate linear 3.5s infinite;border-top-color:#3d5a7480;border-left-color:#8be1e0;animation-timing-function:cubic-bezier(.55,.38,.21,.88);animation-duration:3s;will-change:transform}"]
            }), o
        })();
        const Ya = ["previewCardAreaDom"], Ja = ["previewCardDom"], $a = ["shimmerDom"], Wa = ["shimmerAreaDom"],
            za = ["smokeDom"], Va = ["cardForgeArea"], ja = ["ctaButton"], Xa = ["forgeCards"],
            Ka = ["finalCircularFuse"];

        function es(o, r) {
            if (1 & o && e._UZ(0, "gu-paragraph-text", 27), 2 & o) {
                const t = e.oxw();
                e.Q6J("innerHTML", t.uiStateInformation.instructionalMessage, e.oJD)
            }
        }

        function ts(o, r) {
            1 & o && (e.TgZ(0, "div", 28), e._UZ(1, "app-inderterminate-loading"), e.qZA())
        }

        const ns = function (o) {
            return {"cardForgeArea__etherscanLink--final": o}
        };

        function os(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-paragraph-text", 29), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw();
                    return i.openEtherscan(null != i.transactionInProgress && i.transactionInProgress.txHash ? i.transactionInProgress.txHash : i.completedTransactionTxHash)
                }), e._uU(1, " view transaction on etherscan.io "), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("ngClass", e.VKq(1, ns, t.completedTransactionTxHash))
            }
        }

        const is = function (o) {
            return {cardForgeArea__hideSelectWallet: o}
        }, rs = function () {
            return {breakpoint: "x-large", bottomSize: "3x-large"}
        }, as = function () {
            return {breakpoint: "2x-large", bottomSize: "6x-large"}
        }, ss = function (o, r) {
            return [o, r]
        };
        y.p8.registerPlugin(oe);
        const Pt = ({
                        currentQuality: o = "Meteorite",
                        nextQuality: r = "Shadow",
                        count: t = 4
                    } = {}) => ({
            initial: "Select a card to begin...",
            midway: `Select ${t} more <span>${o}</span> ${t > 1 ? "cards" : "card"} to forge a <span>${r}</span> card.`
        });
        let cs = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k, A, G, U, q) {
                    this.authService = t, this.analyticsService = n, this.cardsService = i, this.modalService = a, this.resizeService = s, this.forgeService = c, this.audioService = l, this.groupingService = g, this.socketService = b, this.fluxService = C, this.ethService = k, this.forgeWalletService = A, this.akuma = G, this.cerberusModalService = U, this.environment = q, this.startTime = +new Date, this.protoCards = [], this.uiStateInformation = {
                        preFuseCicleStrokeColor: "#8be1e0",
                        instructionalMessage: Pt().initial,
                        ctaText: "Start Fusing",
                        disableCta: !0,
                        previewLoading: !1,
                        inventoryLoading: !1,
                        finalFusingInProgress: !1,
                        currentForgeCardCount: 0
                    }, this.fluxBalance = 0, this.mainTL = y.p8.timeline({paused: !0}), this.finalTL = y.p8.timeline({paused: !0}), this.waitForFuseResponseTL = y.p8.timeline({paused: !0}), this.ExpandedViewMode = N, this.unsubscribe = new M.xQ, this.fakeForgeCards = [], this.finalFusePercentage = {value: 0}, this.preFusePercentage = {value: 0}, this.dog = "woof dog", this.selectedWallet = "", this.authService.fetchAccount(), this.resizeService.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               vh: z,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               vw: ee
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           }) => {
                        this.vh = z, this.vw = ee
                    })).subscribe()
                }

                logForgeViewed(t) {
                    this.analyticsService.postEvent(new Te.Forge.Viewed.Event(t)), this.akuma.postEvent("Screen", "forgeHome_opened")
                }

                logForgeCompleted(t) {
                    this.analyticsService.postEvent(new Te.Forge.Completed.Event(t))
                }

                ngOnInit() {
                    this.logForgeViewed({
                        can_fuse: !1,
                        end_time: this.endTime = +new Date,
                        flux: 0,
                        start_time: this.startTime
                    }), this.audioService.forgeAmbience.play(), this.initWalletAddress(), this.initFluxBalance(), this.initActiveGrouping(), this.loadCards(), this.initForgeCards(), this.createPreForgeAnimation(), this.initPreviewCardAndAnimationControl()
                }

                ngOnDestroy() {
                    this.forgeService.finalizeForging(), this.unsubscribe.next(), this.unsubscribe.complete(), this.audioService.forgeAmbience.stop(), this.resetForge()
                }

                initFluxWallet() {
                    (0, D.aj)([this.forgeWalletService.playerWallets$, this.forgeWalletService.selectedWallet$]).pipe((0, x.q)(1)).subscribe(([t, n]) => {
                        (!n || !t || 0 === t.length) && this.modalService.createModal(gn, null, {
                            blurredBackground: !0,
                            canCloseFromOutside: !1,
                            position: m.e1.Center,
                            size: m.Cg.Workarea
                        })
                    })
                }

                initWalletAddress() {
                    this.forgeWalletService.selectedWallet$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => !!t)).subscribe(t => {
                        this.selectedWallet = t
                    })
                }

                logEtherscanLink(t) {
                    !t || (console.info("---------------------------------------------------------------"), console.info("|"), console.info("|  Forge transaction underway!"), console.info("|  Check your progress at"), console.info(`|  https://etherscan.io/tx/${t}`), console.info("|"), console.info("---------------------------------------------------------------"))
                }

                clearTransactionInProgress() {
                    this.forgeService.clearTransactionInProgress()
                }

                initFluxBalance() {
                    this.fluxService.fetchFluxInfo(), this.fluxService.fluxInfo$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => !!t)).subscribe(t => {
                        this.fluxBalance = t.flux_available
                    })
                }

                initActiveGrouping() {
                    const t = this.groupingService.groupings.find(n => n.groupingType === Z.Quality);
                    this.activeGrouping = t || this.groupingService.defaultGrouping
                }

                initCards() {
                    this.uiStateInformation.inventoryLoading = !0, (0, D.aj)([this.cardsService.inventoryCards$, this.cardsService.protoCards$]).pipe((0, u.R)(this.unsubscribe), (0, w.b)(([t, n]) => {
                        this.inventoryCards = t, this.protoCards = Array.from(n.values()), this.uiStateInformation.inventoryLoading = !1
                    })).subscribe()
                }

                loadCards() {
                    this.uiStateInformation.inventoryLoading = !0;
                    const t = this.authService.getUserId(),
                        n = this.cardsService.fetchInventoryCardsMapV2(t).pipe((0, x.q)(1), (0, S.U)(i => this.cardsService.inventoryCardsMapV2ToV1(i)));
                    this.cardsService.getProtoCards$().pipe((0, x.q)(1), (0, re.zg)(i => n.pipe((0, S.U)(a => ({
                        inventory: a,
                        pc: i
                    }))))).subscribe(({inventory: i, pc: a}) => {
                        a && a.values && (this.inventoryCards = this.cardsService.convertToCards(a, i), this.protoCards = Array.from(a.values())), this.uiStateInformation.inventoryLoading = !1
                    })
                }

                animateForgeAreaToUpperPosition() {
                    y.p8.to(this.cardForgeAreaDom.nativeElement, {y: 4.5 * this.vh, ease: "power2.inOut", duration: .3})
                }

                animateForgeAreaToLowerPosition() {
                    y.p8.to(this.cardForgeAreaDom.nativeElement, {y: 13 * this.vh, ease: "power2.inOut", duration: .3})
                }

                initPreviewCardAndAnimationControl() {
                    this.forgeService.previewCard$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => {
                        this.previewCard = t, t ? (this.uiStateInformation.previewLoading = !0, this.forgeService.validateForge().pipe((0, x.q)(1)).subscribe(n => {
                            this.uiStateInformation.previewLoading = !1, this.mainTL.play(), this.fluxTransactionCost = n.flux_amount, this.tokenTransactionCost = n.token_amount
                        }, n => {
                            this.handleValidationFail(n.error.error)
                        })) : (this.mainTL.pause(), this.mainTL.seek(0), this.uiStateInformation.previewLoading = !1, this.fluxTransactionCost = 0, this.tokenTransactionCost = "")
                    })).subscribe()
                }

                initForgeCards() {
                    this.forgeService.forgeCards$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => {
                        t || (this.fluxTransactionCost = 0, this.tokenTransactionCost = "", this.uiStateInformation = Object.assign(Object.assign({}, this.uiStateInformation), {instructionalMessage: Pt().initial}), this.animateCircularProgress({preFusePercentage: 0}), this.animateForgeAreaToLowerPosition())
                    }), (0, P.h)(t => {
                        const n = t && t.ids ? t.ids.length : 0, i = this.uiStateInformation.currentForgeCardCount;
                        return this.uiStateInformation.currentForgeCardCount = n, !!t && n !== i
                    })).subscribe(t => {
                        this.forgeCards = t, this.handleUpdatedForgeCards(t)
                    })
                }

                handleUpdatedForgeCards(t) {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        const n = t && t.ids ? t.ids.length : 0,
                            i = yield this.forgeService.numberOfQualityToForge(t.quality);
                        if (n > 0) {
                            const a = this.forgeService.getNextQuality(t.quality);
                            this.uiStateInformation = Object.assign(Object.assign({}, this.uiStateInformation), {
                                instructionalMessage: Pt({
                                    count: i - n,
                                    currentQuality: this.forgeService.fusingLevels[t.quality].name,
                                    nextQuality: this.forgeService.fusingLevels[a].name
                                }).midway
                            });
                            const s = 100 * n / i;
                            100 !== s && (this.uiStateInformation.disableCta = !0), this.animateCircularProgress({preFusePercentage: s}), this.animateForgeAreaToUpperPosition()
                        }
                    })
                }

                ctaClick() {
                    "Continue" === this.uiStateInformation.ctaText ? (this.forgeService.handleForgeSuccess(), this.forgeService.finalizeForging(), this.resetForge()) : this.queryToStartFusing()
                }

                resetForge() {
                    this.loadCards(), this.completedTransactionTxHash = void 0, this.mainTL.pause(), this.mainTL.seek(0), this.finalTL.seek(0), this.finalTL.clear(), this.mainTL.remove(this.finalTL), this.mainTL.remove(this.waitForFuseResponseTL), this.forgeSubmitResult = void 0, this.fakeForgeCards = [], this.preFusePercentage.value = 0, this.finalFusePercentage.value = 0, this.uiStateInformation.ctaText = "Start Fusing", this.uiStateInformation.disableCta = !0, this.uiStateInformation.finalFusingInProgress = !1, this.uiStateInformation.preFuseCicleStrokeColor = "#8be1e0", y.p8.set([this.smokeDom.nativeElement, this.ctaButtonDom.nativeElement, this.cardForgeAreaDom.nativeElement], {clearProps: "all"})
                }

                queryToStartFusing() {
                    const n = this.cerberusModalService.open(ln.M, {
                        defaultStylings: !1,
                        centered: !0,
                        backdrop: "static"
                    }).componentInstance;
                    n.title = "FUSE THESE CARDS?", n.content = '\n      Fusing these cards is permanent. Once complete there is no turning back.\n      <br>\n      <br>\n      You will be charged flux, and your cards will be destroyed, no matter if this succeeds or fails.\n      Don\u2019t fret! If it does fail, you can retry the fusing from the </br> <span>\n      <gu-icon\n        style="display: inline-flex;"\n        iconLigature="action_history"\n        fillColor="colors.light.100">\n      </gu-icon\n    </span> History screen.\n      ', n.secondaryButton = {
                        text: "Back",
                        closeOnClick: !0
                    }, n.primaryButton = {
                        text: `\n      FUSE WITH ${this.fluxTransactionCost}&nbsp;\n      <span>\n        <gu-icon\n          style="display: inline-flex;"\n          iconLigature="flux_symbol"\n          fillColor="colors.light.100">\n        </gu-icon\n      </span>\n      `,
                        closeOnClick: !0,
                        onClick: () => {
                            this.startFusing()
                        }
                    }, n.type = "info"
                }

                startFusing() {
                    this.uiStateInformation.finalFusingInProgress = !0, this.waitForFinalFuseResponseAnimation(), this.forgeService.submitForge().pipe((0, x.q)(1)).subscribe(t => {
                        this.finalStageFuseAnimation(t.request_id), this.fluxService.fetchFluxInfo()
                    }, t => {
                        console.error("Forge->startFusing() FORGE SUBMIT error", t), this.handleFuseFailure(t)
                    })
                }

                openEtherscan(t) {
                    !t || window.open(`https://etherscan.io/tx/${t}`, "_blank")
                }

                handleFuseFailure(t) {
                    this.clearTransactionInProgress(), console.error("Forge->handleFuseFailure()", t), this.resetForge(), this.forgeService.finalizeForging(), this.handleValidationFail(t.error.error)
                }

                handleValidationFail(t) {
                    "You are locked from fusing because our bot prevention system detected unusual behavior" === t && this.modalService.createModal(dn.n, {}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: m.e1.Center,
                        size: m.Cg.StretchableWorkarea
                    }), this.mainTL.pause(), this.animateCircularProgress({
                        preFusePercentage: 0,
                        duration: 0
                    }), this.uiStateInformation.previewLoading = !1, this.uiStateInformation.instructionalMessage = t, "Fusing is temporarily disabled due to network congestion" === t && (this.uiStateInformation.instructionalMessage = '\n        Fusing is temporarily disabled due to high transaction fees on the network.\n        The Forge will reopen with the release of Immutable X minting.\n        <br>\n        <a href="https://www.reddit.com/r/GodsUnchained/comments/im80m1/trial_of_the_gods_on_minting_purchasing_and/" target="_blank">LEARN MORE</a>\n      '), this.uiStateInformation.disableCta = !0
                }

                animateEachCardIntoPreview(t) {
                    const n = y.p8.timeline(), i = this.previewCardDom.nativeElement,
                        a = oe.ease.config({strength: 8, points: 2, template: "power2.inOut", randomize: !1});
                    let s;
                    switch (t.length) {
                        case 2:
                            s = ["25%", "-25%"];
                            break;
                        case 3:
                            s = ["50%", "0%", "-50%"];
                            break;
                        case 4:
                            s = ["100%", "50%", "-50%", "-100%"];
                            break;
                        default:
                            s = ["100%", "50%", "0%", "-50%", "-100%"]
                    }
                    return t.forEach((c, l) => {
                        n.to(c, {
                            duration: .4,
                            y: "-120%",
                            x: s[l],
                            opacity: .3,
                            rotation: () => Math.floor(60 * Math.random()) * (1 === Math.floor(2 * Math.random()) ? 1 : -1),
                            ease: "power2.inOut"
                        }).add(() => {
                            l === t.length - 1 && this.audioService.ForgeFuseAnvil5.play()
                        }, "-=0.4").to(c, {
                            duration: .2,
                            opacity: 0,
                            ease: "power2.inOut"
                        }, "-=0.15").fromTo(i, {duration: .2, scale: 1}, {scale: .94, ease: a}, "-=0.2").add(() => {
                            l < t.length - 1 && this.audioService[`ForgeFuseAnvil${l + 1}`].play()
                        }, "-=0.2")
                    }), n
                }

                waitForFinalFuseResponseAnimation() {
                    const t = this.finalCircularFuseDom.elRef.nativeElement, n = this.previewCardDom.nativeElement;
                    this.waitForFuseResponseTL = y.p8.timeline({
                        repeat: -1,
                        paused: !0
                    }), this.waitForFuseResponseTL.add(() => {
                        this.uiStateInformation.disableCta = !0, this.uiStateInformation.ctaText = "Fusing ..."
                    }).set(t, {opacity: 1}).to(n, {
                        duration: .8,
                        opacity: .75
                    }).to(this.finalFusePercentage, {
                        duration: 1.6,
                        value: 100,
                        ease: "power2.inOut"
                    }, 0).to(n, {duration: .8, opacity: 1}, .8).to(t, {
                        duration: .3,
                        opacity: 0,
                        ease: "power2.inOut"
                    }, "-=0.3"), this.mainTL.pause(), this.mainTL.add(this.waitForFuseResponseTL.play(), "previewCardFloating"), this.mainTL.play()
                }

                finalStageFuseAnimation(t) {
                    const n = this.forgeCardsDom.forgeCardDoms.toArray().map(c => c.nativeElement),
                        i = this.previewCardDom.nativeElement, a = this.shimmerAreaDom.nativeElement,
                        s = this.ctaButtonDom.nativeElement;
                    this.waitForFuseResponseTL.kill(), this.uiStateInformation.preFuseCicleStrokeColor = "#c6a052", this.finalFusePercentage.value = 0, this.fluxTransactionCost = 0, this.tokenTransactionCost = "", this.finalTL = y.p8.timeline({paused: !0}), this.finalTL.to(this.cardForgeAreaDom.nativeElement, {
                        duration: .3,
                        y: 13 * this.vh,
                        ease: "power2.inOut"
                    }).to(i, {
                        duration: .3,
                        opacity: 1
                    }, "-=0.2").add(this.animateEachCardIntoPreview(n)).add("restingState").to(this.smokeDom.nativeElement, {
                        duration: 2.2,
                        opacity: .8,
                        scale: 1.15,
                        ease: "power0.easeNone"
                    }, "-=1.2").to(this.smokeDom.nativeElement, {
                        duration: 2.2,
                        opacity: 0,
                        scale: 1.35,
                        ease: "power0.easeNone"
                    }, "-=0.1").to([i, a], {
                        duration: .7,
                        scale: 1.25,
                        ease: "power2.inOut"
                    }, "restingState").to(s, {
                        duration: .6,
                        opacity: 1,
                        y: "170%",
                        scale: 1.2,
                        ease: "power2.inOut",
                        onComplete: () => {
                            this.uiStateInformation.disableCta = !0, this.uiStateInformation.ctaText = "Continue"
                        }
                    }, "restingState+=0.1").to(this.shimmerAreaDom.nativeElement, {
                        duration: .1,
                        opacity: .75
                    }, "restingState+=1.1").add(() => {
                        this.audioService.ForgeFuseShimmer.play()
                    }, "restingState+=1.1").to(this.shimmerDom.nativeElement, {
                        duration: .7,
                        y: "315%",
                        ease: "power2.inOut"
                    }, "restingState+=1.2").call(this.goToWebsiteModal.bind(this), [t], ">").to(this.shimmerAreaDom.nativeElement, {
                        duration: .1,
                        opacity: 0
                    }, "restingState+=1.8").add(() => this.audioService.ForgeFuseContinue.play(), "restingState+=1.9"), this.mainTL.pause(), this.mainTL.add(this.finalTL.play(), "previewCardFloating"), this.mainTL.play("previewCardFloating")
                }

                goToWebsiteModal(t) {
                    const i = this.cerberusModalService.open(ln.M, {
                        defaultStylings: !1,
                        centered: !0,
                        backdrop: "static"
                    }).componentInstance;
                    i.title = "YOU\u2019RE NOT DONE YET", i.content = "You still need to confirm with your web wallet. The fusing process will continue in your browser.", i.primaryButton = {
                        text: '\n      CONTINUE&nbsp;\n      <span>\n        <gu-icon\n          style="display: inline-flex;"\n          iconLigature="leave_website"\n          fillColor="colors.light.100">\n        </gu-icon\n      </span>\n      ',
                        closeOnClick: !0,
                        onClick: () => {
                            this.openForgeWebsite(t), this.forgeService.handleForgeSuccess(), this.forgeService.finalizeForging(), this.resetForge()
                        }
                    }
                }

                openForgeWebsite(t) {
                    window.open(`${this.environment.guWebsite}/fusing-next-step?request_id=${t}`)
                }

                createPreForgeAnimation() {
                    const t = this.previewCardDom.nativeElement, n = this.shimmerAreaDom.nativeElement,
                        i = y.p8.timeline({repeat: -1, paused: !0});
                    i.to([n, t], {duration: 2, y: "-9%", ease: "power2.inOut"}).to([n, t], {
                        duration: 2,
                        y: "-12%",
                        ease: "power2.inOut"
                    }), this.mainTL.set([n, t], {y: "0%", opacity: 0}).to([n, t], {
                        duration: .7,
                        y: "-12%",
                        opacity: 1,
                        ease: "power2.inOut",
                        onComplete: () => {
                            this.uiStateInformation.previewLoading = !1, this.uiStateInformation.disableCta = !1
                        }
                    }).add(i.play(), "previewCardFloating")
                }

                animateCircularProgress({preFusePercentage: t, duration: n = .65}) {
                    return new Promise(i => {
                        this.circularTween && this.circularTween.kill(), this.circularTween = y.p8.to(this.preFusePercentage, {
                            value: t,
                            ease: "power2.inOut",
                            onComplete: () => {
                                this.uiStateInformation = Object.assign({}, this.uiStateInformation), this.preFusePercentage.value = t, i()
                            },
                            duration: n
                        })
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.mI), e.Y36(_.yD), e.Y36(_.dK), e.Y36(T.Z), e.Y36(K._), e.Y36(ge), e.Y36(h.pk), e.Y36(_e), e.Y36(_.$c), e.Y36(_.TJ), e.Y36(h.ux), e.Y36(he.d), e.Y36(_.jt), e.Y36(B.Qz), e.Y36(h.Ho))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-next-step"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Ya, 7), e.Gf(Ja, 7, e.SBq), e.Gf($a, 7), e.Gf(Wa, 7), e.Gf(za, 7), e.Gf(Va, 7), e.Gf(ja, 7), e.Gf(Xa, 7), e.Gf(Ka, 7)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.previewCardAreaDom = i.first), e.iGM(i = e.CRH()) && (n.previewCardDom = i.first), e.iGM(i = e.CRH()) && (n.shimmerDom = i.first), e.iGM(i = e.CRH()) && (n.shimmerAreaDom = i.first), e.iGM(i = e.CRH()) && (n.smokeDom = i.first), e.iGM(i = e.CRH()) && (n.cardForgeAreaDom = i.first), e.iGM(i = e.CRH()) && (n.ctaButtonDom = i.first), e.iGM(i = e.CRH()) && (n.forgeCardsDom = i.first), e.iGM(i = e.CRH()) && (n.finalCircularFuseDom = i.first)
                    }
                },
                decls: 28,
                vars: 41,
                consts: [["title", "Forge", 1, "cardBrowserArea", 3, "expandedViewMode", "activeGrouping", "protoCards", "inventoryCards"], [1, "cardForgeArea"], [1, "cardForgeArea_selectWallet", 3, "ngClass"], [1, "cardForgeArea__circularAreaContainer", 3, "hidden"], [1, "cardForgeArea__circularArea"], ["cardForgeArea", ""], [1, "cardForgeArea__circularArea__progressCircle", 3, "percentage", "width", "strokeWidth", "showBackgroundRing", "supressAnimation", "strokeColor", "insetInnerStroke"], ["gradientForStroke", "whiteToAqua", 1, "cardForgeArea__circularArea__progressCircle", "cardForgeArea__circularArea__progressCircle--finalProgress", 3, "percentage", "width", "strokeWidth", "showBackgroundRing", "supressAnimation", "insetInnerStroke"], ["finalCircularFuse", ""], ["kind", "help", "align", "center", "class", "cardForgeArea__circularArea__instructionalText", 3, "innerHTML", 4, "ngIf"], [1, "cardForgeArea__ctaButton", 3, "text", "click"], ["ctaButton", ""], ["class", "cardForgeArea__circularArea__loading", 4, "ngIf"], [1, "cardForgeArea__circularArea__previewCardArea"], ["previewCardAreaDom", ""], ["src", "/assets/images/texture--smoke.webp", "alt", "", 1, "cardForgeArea__circularArea__previewCardArea__smoke"], ["smokeDom", ""], ["responsiveSrcsetSizes", "18.6vw", 1, "cardForgeArea__circularArea__previewCardArea__card", 3, "protoId", "quality"], ["previewCardDom", ""], [1, "cardForgeArea__circularArea__previewCardArea__shimmerArea"], ["shimmerAreaDom", ""], [1, "cardForgeArea__circularArea__previewCardArea__shimmerArea__shimmer"], ["shimmerDom", ""], ["top", "3x-large", 3, "responsiveSize"], ["class", "cardForgeArea__etherscanLink", "kind", "tag", "fillColor", "colors.apocyan.100", "align", "center", 3, "ngClass", "click", 4, "ngIf"], [1, "cardForgeArea__cardsToBeFused", 3, "fluxTransactionCost", "tokenTransactionCost", "fakeForgeCards"], ["forgeCards", ""], ["kind", "help", "align", "center", 1, "cardForgeArea__circularArea__instructionalText", 3, "innerHTML"], [1, "cardForgeArea__circularArea__loading"], ["kind", "tag", "fillColor", "colors.apocyan.100", "align", "center", 1, "cardForgeArea__etherscanLink", 3, "ngClass", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "cerberus-forge-card-list", 0), e.TgZ(1, "div", 1), e._UZ(2, "cerberus-forge-area-header"), e._UZ(3, "cerberus-forge-area-select-wallet", 2), e.TgZ(4, "div", 3), e.TgZ(5, "div", 4, 5), e._UZ(7, "app-progress-circle", 6), e._UZ(8, "app-progress-circle", 7, 8), e.YNc(10, es, 1, 1, "gu-paragraph-text", 9), e.TgZ(11, "gu-primary-hex-button", 10, 11), e.NdJ("click", function () {
                        return n.ctaClick()
                    }), e.qZA(), e.YNc(13, ts, 2, 0, "div", 12), e.TgZ(14, "div", 13, 14), e._UZ(16, "img", 15, 16), e._UZ(18, "app-card2", 17, 18), e.TgZ(20, "div", 19, 20), e._UZ(22, "i", 21, 22), e.qZA(), e.qZA(), e.qZA(), e.TgZ(24, "gu-vertical-space", 23), e.YNc(25, os, 2, 3, "gu-paragraph-text", 24), e.qZA(), e._UZ(26, "cerberus-app-forge-cards", 25, 26), e.qZA(), e.qZA()), 2 & t && (e.ekj("cardBrowserArea--disabled", n.uiStateInformation.finalFusingInProgress || n.uiStateInformation.previewLoading || !n.selectedWallet), e.Q6J("expandedViewMode", n.ExpandedViewMode.FORGING)("activeGrouping", n.activeGrouping)("protoCards", n.protoCards)("inventoryCards", n.inventoryCards), e.xp6(3), e.Q6J("ngClass", e.VKq(34, is, n.selectedWallet)), e.xp6(1), e.Q6J("hidden", !n.selectedWallet), e.xp6(3), e.Q6J("percentage", n.preFusePercentage.value)("width", 29 * n.vw)("strokeWidth", 2 * n.vh)("showBackgroundRing", !0)("supressAnimation", !0)("strokeColor", n.uiStateInformation.preFuseCicleStrokeColor)("insetInnerStroke", !0), e.xp6(1), e.Q6J("percentage", n.finalFusePercentage.value)("width", 29 * n.vw)("strokeWidth", 2 * n.vh)("showBackgroundRing", !1)("supressAnimation", !0)("insetInnerStroke", !0), e.xp6(2), e.Q6J("ngIf", n.uiStateInformation.instructionalMessage && !n.uiStateInformation.previewLoading && !n.uiStateInformation.finalFusingInProgress), e.xp6(1), e.Q6J("text", n.uiStateInformation.ctaText), e.uIk("disabled", n.uiStateInformation.disableCta), e.xp6(2), e.Q6J("ngIf", n.uiStateInformation.previewLoading), e.xp6(5), e.Q6J("protoId", null == n.previewCard ? null : n.previewCard.protoId)("quality", null == n.previewCard ? null : n.previewCard.quality), e.xp6(6), e.Q6J("responsiveSize", e.WLB(38, ss, e.DdM(36, rs), e.DdM(37, as))), e.xp6(1), e.Q6J("ngIf", (null == n.transactionInProgress ? null : n.transactionInProgress.txHash) || n.completedTransactionTxHash), e.xp6(1), e.ekj("cardForgeArea__cardsToBeFused--disabled", n.uiStateInformation.finalFusingInProgress), e.Q6J("fluxTransactionCost", n.fluxTransactionCost)("tokenTransactionCost", n.tokenTransactionCost)("fakeForgeCards", n.fakeForgeCards))
                },
                directives: [Aa, Ea, Na, d.mk, Ot, d.O5, H, un, mn],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-top:calc(var(--vh) * 2);padding-left:calc(var(--vw) * 3);padding-right:calc(var(--vw) * 3);display:flex;height:100%}.cardBrowserArea[_ngcontent-%COMP%]{width:calc(var(--vw) * 44);margin-right:calc(var(--vw) * 2.34)}.cardBrowserArea--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none;opacity:.5}.cardForgeArea[_ngcontent-%COMP%]{flex:1;display:flex;flex-flow:column nowrap;position:relative}.cardForgeArea__hideSelectWallet[_ngcontent-%COMP%]{display:none}.cardForgeArea__circularArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;transform:translateY(calc(var(--vh) * 13))}.cardForgeArea__circularArea__progressCircle[_ngcontent-%COMP%]{transform:rotate(180deg)}.cardForgeArea__circularArea__progressCircle--finalProgress[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;transform:rotate(180deg) translate(50%);transform-origin:50% 50%}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]{width:calc(var(--vh) * 21);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]     span{text-transform:capitalize;font-weight:700}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]     a{color:#affaed}.cardForgeArea__circularArea__previewCardArea[_ngcontent-%COMP%]{top:calc(var(--vh) * -1.3);margin-left:calc(var(--vw) * -.8);user-select:none;pointer-events:none;width:calc(var(--vw) * 18.6);position:absolute;z-index:1;transform:translateY(10%);cursor:pointer}.cardForgeArea__circularArea__previewCardArea__smoke[_ngcontent-%COMP%]{width:calc(var(--vw) * 35);bottom:calc(var(--vh) * 10);position:absolute;left:54%;transform:translate(-50%) scale(.6);transform-origin:50% 100%;opacity:0}.cardForgeArea__circularArea__previewCardArea__card[_ngcontent-%COMP%]{filter:drop-shadow(0 calc(var(--vh) * .5) calc(var(--vw) * 2) black);opacity:0}.cardForgeArea__circularArea__previewCardArea__shimmerArea[_ngcontent-%COMP%]{top:calc(var(--vh) * 4.3);bottom:calc(var(--vh) * 2.3);left:calc(var(--vw) * 2.55);right:calc(var(--vw) * 1.15);position:absolute;overflow:hidden;opacity:0}.cardForgeArea__circularArea__previewCardArea__shimmerArea__shimmer[_ngcontent-%COMP%]{position:absolute;width:150%;height:35%;background:linear-gradient(to bottom,rgba(255,255,255,0) 0%,white 50%,rgba(255,255,255,0) 100%);transform:rotate(15deg) translateY(-120%);top:0;left:-25%;mix-blend-mode:overlay}.cardForgeArea__ctaButton[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%,-10%);min-width:145px}.cardForgeArea__etherscanLink[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;text-transform:uppercase;text-decoration:underline;cursor:pointer}.cardForgeArea__etherscanLink--final[_ngcontent-%COMP%]{position:absolute;bottom:calc(var(--vh) * 3.24)}.cardForgeArea__cardsToBeFused[_ngcontent-%COMP%]{height:calc(var(--vh) * 18.66);margin-bottom:calc(var(--vh) * 3.24);margin-top:auto;display:flex;width:100%;justify-content:center}.cardForgeArea__cardsToBeFused--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none}.cardForgeArea__circularArea__loading[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}"]
            }), o
        })();
        var ls = p(19444);

        function ds(o, r) {
            if (1 & o && (e.TgZ(0, "div", 3), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.title)
            }
        }

        function gs(o, r) {
            if (1 & o && (e.TgZ(0, "div", 4), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.message)
            }
        }

        function ps(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 5), e.TgZ(1, "gu-primary-hex-button", 6), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().onOkCLick()
                }), e.qZA(), e.TgZ(2, "a", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().onCancelClick()
                }), e._uU(3, "No, Cancel"), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("disabled", t.loading)("text", t.okButtonText)
            }
        }

        let fn = (() => {
            class o {
                constructor(t) {
                    this.modalService = t, this.showButtons = !0, this.okButtonText = "Yes", this.loading = !1
                }

                get getClass() {
                    return this.direction
                }

                ngOnInit() {
                }

                onOkCLick() {
                    this.loading = !0, this.onOk()
                }

                onCancelClick() {
                    this.onCancel ? this.onCancel() : this.modalService.destroyTopModal()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(T.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-confirmation-modal"]],
                hostVars: 2,
                hostBindings: function (t, n) {
                    2 & t && e.Tol(n.getClass)
                },
                inputs: {
                    title: "title",
                    message: "message",
                    onOk: "onOk",
                    onCancel: "onCancel",
                    direction: "direction",
                    showButtons: "showButtons",
                    okButtonText: "okButtonText"
                },
                decls: 3,
                vars: 3,
                consts: [["class", "title-section", 4, "ngIf"], ["class", "message-section", 4, "ngIf"], ["class", "action-section", 4, "ngIf"], [1, "title-section"], [1, "message-section"], [1, "action-section"], [1, "okButton", 3, "disabled", "text", "click"], [1, "cancelButton", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, ds, 2, 1, "div", 0), e.YNc(1, gs, 2, 1, "div", 1), e.YNc(2, ps, 4, 2, "div", 2)), 2 & t && (e.Q6J("ngIf", n.title), e.xp6(1), e.Q6J("ngIf", n.message), e.xp6(1), e.Q6J("ngIf", n.showButtons))
                },
                directives: [d.O5],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cancelButton[_ngcontent-%COMP%], .message-section[_ngcontent-%COMP%], .title-section[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.title-section[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9);line-height:1.2;font-weight:600}.cancelButton[_ngcontent-%COMP%], .message-section[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{border:calc(var(--vh) * .15) solid #527493;background-color:#0c1620;position:relative;display:block;color:#f6f6f6;padding:calc(var(--vw) * 1.3);width:calc(var(--vw) * 20);display:flex;flex-flow:column nowrap;align-items:center}.down[_nghost-%COMP%]:before{border:calc(var(--vh) * 1.7) solid transparent;border-top-color:#527493;left:50%;bottom:calc(calc(var(--vh) * 1.7) * -2);transform:translate(-50%)}.up[_nghost-%COMP%]:before{border:calc(var(--vh) * 1.7) solid transparent;border-bottom-color:#527493;left:50%;top:calc(calc(var(--vh) * 1.7) * -2);transform:translate(-50%)}.right[_nghost-%COMP%]:before{border:calc(var(--vh) * 1.7) solid transparent;border-left-color:#527493;top:50%;right:calc(calc(var(--vh) * 1.7) * -2);transform:translateY(-50%)}.left[_nghost-%COMP%]:before{border:calc(var(--vh) * 1.7) solid transparent;border-right-color:#527493;top:50%;left:calc(calc(var(--vh) * 1.7) * -2);transform:translateY(-50%)}[_nghost-%COMP%]:before{content:"";position:absolute;width:0;height:0}.title-section[_ngcontent-%COMP%]{padding-bottom:calc(var(--vw) * 1.3);border-bottom:calc(var(--vh) * .15) solid #fff}.message-section[_ngcontent-%COMP%]{padding-bottom:calc(var(--vw) * 1.3);text-align:center}.action-section[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row-reverse;align-items:center;justify-content:center}.cancelButton[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * 1);text-transform:uppercase;font-weight:700;color:#8be1e0;flex-grow:0;cursor:pointer}.okButton[_ngcontent-%COMP%]{flex-grow:1}']
            }), o
        })();
        const us = ["previewCardAreaDom"], _s = ["previewCardDom"], hs = ["shimmerDom"], ms = ["shimmerAreaDom"],
            fs = ["smokeDom"], Cs = ["cardForgeArea"], vs = ["ctaButton"], bs = ["forgeCards"],
            ws = ["finalCircularFuse"];

        function xs(o, r) {
            if (1 & o && e._UZ(0, "gu-paragraph-text", 33), 2 & o) {
                const t = e.oxw();
                e.Q6J("innerHTML", t.uiStateInformation.instructionalMessage, e.oJD)
            }
        }

        function Ms(o, r) {
            1 & o && (e.TgZ(0, "div", 34), e._UZ(1, "app-inderterminate-loading"), e.qZA())
        }

        const ys = function (o) {
            return {"cardForgeArea__etherscanLink--final": o}
        };

        function ks(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-paragraph-text", 35), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw();
                    return i.openEtherscan(null != i.transactionInProgress && i.transactionInProgress.txHash ? i.transactionInProgress.txHash : i.completedTransactionTxHash)
                }), e._uU(1, " view transaction on etherscan.io "), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("ngClass", e.VKq(1, ys, t.completedTransactionTxHash))
            }
        }

        y.p8.registerPlugin(oe);
        const Tt = ({
                        currentQuality: o = "Meteorite",
                        nextQuality: r = "Shadow",
                        count: t = 4
                    } = {}) => ({
            initial: "Select a card to begin...",
            midway: `Select ${t} more <span>${o}</span> ${t > 1 ? "cards" : "card"} to forge a <span>${r}</span> card.`
        });
        let Cn = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k, A, G) {
                    this.authService = t, this.analyticsService = n, this.cardsService = i, this.modalService = a, this.resizeService = s, this.forgeService = c, this.audioService = l, this.groupingService = g, this.socketService = b, this.fluxService = C, this.ethService = k, this.forgeWalletService = A, this.akuma = G, this.startTime = +new Date, this.protoCards = [], this.uiStateInformation = {
                        preFuseCicleStrokeColor: "#8be1e0",
                        instructionalMessage: Tt().initial,
                        ctaText: "Start Fusing",
                        disableCta: !0,
                        previewLoading: !1,
                        inventoryLoading: !1,
                        finalFusingInProgress: !1,
                        currentForgeCardCount: 0
                    }, this.fluxBalance = 0, this.mainTL = y.p8.timeline({paused: !0}), this.finalTL = y.p8.timeline({paused: !0}), this.waitForFuseResponseTL = y.p8.timeline({paused: !0}), this.ExpandedViewMode = N, this.unsubscribe = new M.xQ, this.fakeForgeCards = [], this.finalFusePercentage = {value: 0}, this.preFusePercentage = {value: 0}, this.dog = "woof dog", this.resizeService.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    vh: U,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    vw: q
                                                                                                                                                                                                                                                                                                                                                                                                                                                                }) => {
                        this.vh = U, this.vw = q
                    })).subscribe()
                }

                logForgeViewed(t) {
                    this.analyticsService.postEvent(new Te.Forge.Viewed.Event(t)), this.akuma.postEvent("Screen", "forgeHome_opened")
                }

                logForgeCompleted(t) {
                    this.analyticsService.postEvent(new Te.Forge.Completed.Event(t))
                }

                ngOnInit() {
                    this.forgeService.transactionInProgress$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => this.transactionInProgress = t), this.logForgeViewed({
                        can_fuse: !1,
                        end_time: this.endTime = +new Date,
                        flux: 0,
                        start_time: this.startTime
                    }), this.audioService.forgeAmbience.play(), this.initFluxBalance(), this.initActiveGrouping(), this.initCards(), this.initForgeCards(), this.createPreForgeAnimation(), this.initPreviewCardAndAnimationControl(), this.initPreviousTransactionFromStorage()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete(), this.audioService.forgeAmbience.stop(), this.stopSocket()
                }

                initFluxWallet() {
                    (0, D.aj)([this.forgeWalletService.playerWallets$, this.forgeWalletService.selectedWallet$]).pipe((0, x.q)(1)).subscribe(([t, n]) => {
                        (!n || !t || 0 === t.length) && this.modalService.createModal(gn, null, {
                            blurredBackground: !0,
                            canCloseFromOutside: !1,
                            position: m.e1.Center,
                            size: m.Cg.Workarea
                        })
                    })
                }

                initPreviousTransactionFromStorage() {
                    if (this.transactionInProgress) {
                        if (!this.transactionInProgress.txHash) return void this.clearTransactionInProgress();
                        this.uiStateInformation.finalFusingInProgress = !0, this.animateCircularProgress({preFusePercentage: 100}), this.animateForgeAreaToUpperPosition(), this.previewCard = {
                            protoId: this.transactionInProgress.proto,
                            quality: this.transactionInProgress.quality - 1
                        }, this.fakeForgeCards = this.transactionInProgress.ids.map(() => ({
                            protoId: this.transactionInProgress.proto,
                            quality: this.transactionInProgress.quality
                        })), this.waitForFinalFuseResponseAnimation(), this.logEtherscanLink(this.transactionInProgress.txHash), (0, D.aj)([this.ethService.getTransaction$(this.transactionInProgress.txHash), this.ethService.getTransactionReceipt$(this.transactionInProgress.txHash)]).pipe((0, x.q)(1)).subscribe(([, t]) => {
                            null === t ? this.openSocketConnection() : 1 === t.status && this.handleSuccessfulPreviousFuse()
                        })
                    }
                }

                logEtherscanLink(t) {
                    !t || (console.info("---------------------------------------------------------------"), console.info("|"), console.info("|  Forge transaction underway!"), console.info("|  Check your progress at"), console.info(`|  https://etherscan.io/tx/${t}`), console.info("|"), console.info("---------------------------------------------------------------"))
                }

                clearTransactionInProgress() {
                    this.forgeService.clearTransactionInProgress()
                }

                handleSuccessfulPreviousFuse() {
                    this.clearTransactionInProgress(), this.forgeSubmitResult = "success", this.fluxService.fetchFluxInfo(), this.finalStageFuseAnimation(), this.cardsService.setNewInventoryCardCount(1)
                }

                initFluxBalance() {
                    this.fluxService.fetchFluxInfo(), this.fluxService.fluxInfo$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => !!t)).subscribe(t => {
                        this.fluxBalance = t.flux_available
                    })
                }

                initActiveGrouping() {
                    const t = this.groupingService.groupings.find(n => n.groupingType === Z.Quality);
                    this.activeGrouping = t || this.groupingService.defaultGrouping
                }

                initCards() {
                    this.uiStateInformation.inventoryLoading = !0, (0, D.aj)([this.cardsService.inventoryCards$, this.cardsService.protoCards$]).pipe((0, u.R)(this.unsubscribe), (0, w.b)(([t, n]) => {
                        this.inventoryCards = t, this.protoCards = Array.from(n.values()), this.uiStateInformation.inventoryLoading = !1
                    })).subscribe()
                }

                animateForgeAreaToUpperPosition() {
                    y.p8.to(this.cardForgeAreaDom.nativeElement, {y: 4.5 * this.vh, ease: "power2.inOut", duration: .3})
                }

                animateForgeAreaToLowerPosition() {
                    y.p8.to(this.cardForgeAreaDom.nativeElement, {y: 13 * this.vh, ease: "power2.inOut", duration: .3})
                }

                initPreviewCardAndAnimationControl() {
                    this.forgeService.previewCard$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => {
                        this.previewCard = t, t ? (this.uiStateInformation.previewLoading = !0, this.forgeService.validateForge().pipe((0, x.q)(1)).subscribe(n => {
                            this.uiStateInformation.previewLoading = !1, this.mainTL.play(), this.fluxTransactionCost = n.flux_cost
                        }, n => {
                            this.handleValidationFail(n.error.error)
                        })) : (this.mainTL.pause(), this.mainTL.seek(0), this.uiStateInformation.previewLoading = !1, this.fluxTransactionCost = 0)
                    })).subscribe()
                }

                initForgeCards() {
                    this.forgeService.forgeCards$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => {
                        t || (this.fluxTransactionCost = 0, this.uiStateInformation = Object.assign(Object.assign({}, this.uiStateInformation), {instructionalMessage: Tt().initial}), this.animateCircularProgress({preFusePercentage: 0}), this.animateForgeAreaToLowerPosition())
                    }), (0, P.h)(t => {
                        const n = t && t.ids ? t.ids.length : 0, i = this.uiStateInformation.currentForgeCardCount;
                        return this.uiStateInformation.currentForgeCardCount = n, !!t && n !== i
                    })).subscribe(t => {
                        this.forgeCards = t, this.handleUpdatedForgeCards(t)
                    })
                }

                handleUpdatedForgeCards(t) {
                    return (0, te.mG)(this, void 0, void 0, function* () {
                        const n = t && t.ids ? t.ids.length : 0,
                            i = yield this.forgeService.numberOfQualityToForge(t.quality);
                        if (n > 0) {
                            const a = this.forgeService.getNextQuality(t.quality);
                            this.uiStateInformation = Object.assign(Object.assign({}, this.uiStateInformation), {
                                instructionalMessage: Tt({
                                    count: i - n,
                                    currentQuality: this.forgeService.fusingLevels[t.quality].name,
                                    nextQuality: this.forgeService.fusingLevels[a].name
                                }).midway
                            });
                            const s = 100 * n / i;
                            100 !== s && (this.uiStateInformation.disableCta = !0), this.animateCircularProgress({preFusePercentage: s}), this.animateForgeAreaToUpperPosition()
                        }
                    })
                }

                ctaClick() {
                    switch (this.forgeSubmitResult) {
                        case"success":
                            this.forgeService.handleForgeSuccess(), this.forgeService.finalizeForging(), this.resetForge();
                            break;
                        case"fail":
                        case void 0:
                            this.queryToStartFusing()
                    }
                }

                resetForge() {
                    this.completedTransactionTxHash = void 0, this.mainTL.pause(), this.mainTL.seek(0), this.finalTL.seek(0), this.finalTL.clear(), this.mainTL.remove(this.finalTL), this.mainTL.remove(this.waitForFuseResponseTL), this.forgeSubmitResult = void 0, this.fakeForgeCards = [], this.preFusePercentage.value = 0, this.finalFusePercentage.value = 0, this.uiStateInformation.ctaText = "Start Fusing", this.uiStateInformation.disableCta = !0, this.uiStateInformation.finalFusingInProgress = !1, this.uiStateInformation.preFuseCicleStrokeColor = "#8be1e0", y.p8.set([this.smokeDom.nativeElement, this.ctaButtonDom.nativeElement, this.cardForgeAreaDom.nativeElement], {clearProps: "all"})
                }

                queryToStartFusing() {
                    this.modalService.createModal(fn, {
                        okButtonText: "Understood",
                        message: "Fusing these cards is permanent. Once complete, there is no turning back. Fusing may take multiple minutes.",
                        onOk: () => {
                            this.startFusing(), this.modalService.destroyTopModal()
                        },
                        direction: "up"
                    }, {position: m.e1.Custom, customPosition: ".cardForgeArea__ctaButton:bottom"})
                }

                startFusing() {
                    this.uiStateInformation.finalFusingInProgress = !0, this.forgeService.setTransactionInProgress(Object.assign(Object.assign({}, this.forgeCards), {reference: (0, ls.v4)()})), this.waitForFinalFuseResponseAnimation(), this.forgeService.submitForge().pipe((0, x.q)(1), (0, Ce.w)(t => (this.forgeService.setTransactionInProgress(Object.assign(Object.assign({}, this.transactionInProgress), {txHash: t})), this.logEtherscanLink(this.transactionInProgress.txHash), this.forgeService.postTxHashForTracking({
                        tx_hash: t,
                        reference: this.transactionInProgress.reference,
                        user_id: this.authService.getUserId()
                    })))).subscribe(t => {
                        this.unsubscribe.isStopped || this.openSocketConnection()
                    }, t => {
                        this.handleFuseFailure(t)
                    })
                }

                openEtherscan(t) {
                    !t || window.open(`https://etherscan.io/tx/${t}`, "_blank")
                }

                openSocketConnection() {
                    const t = i => {
                        this.socketMessagesSubscription = i.pipe((0, u.R)(this.unsubscribe)).subscribe(a => this.handleSocketMessage(a))
                    }, n = this.socketService.getOpenedConnection("forge");
                    n ? t(n.messages) : this.socketService.connect({
                        url: this.socketService.socketEndpoints.forge(this.authService.getUserId()),
                        socketName: "forge"
                    }).then(t, t)
                }

                handleFuseFailure(t) {
                    this.clearTransactionInProgress(), console.error("Forge->handleFuseFailure()", t), this.resetForge(), this.forgeService.finalizeForging(), this.handleValidationFail(t.error.error)
                }

                handleSocketConfirm(t) {
                    if (t >= 2) {
                        this.stopSocket(), this.forgeSubmitResult = "success", this.cardsService.setNewInventoryCardCount(1);
                        const n = this.fluxBalance - this.fluxTransactionCost, i = this.transactionInProgress.keptId,
                            a = this.transactionInProgress.proto;
                        this.cardsService.getProtoCard(a).pipe((0, x.q)(1)).subscribe(s => this.logForgeCompleted({
                            card_properties: s,
                            keep_id: i,
                            new_quality: "meteorite",
                            proto: a,
                            flux: n
                        })), this.fluxService.fetchFluxInfo(), this.completedTransactionTxHash = this.transactionInProgress.txHash, this.clearTransactionInProgress(), this.finalStageFuseAnimation()
                    }
                }

                handleSocketMessage(t) {
                    const {status: n, confirmations: i, reference: a} = t;
                    if ((0, te._T)(t, ["status", "confirmations", "reference"]), !this.transactionInProgress || a !== this.transactionInProgress.reference) return !1;
                    switch (n) {
                        case"not_found":
                            this.handleFuseFailure("not found!");
                            break;
                        case"rejected":
                            this.handleFuseFailure("rejected!");
                            break;
                        case"confirmed":
                            this.handleSocketConfirm(i)
                    }
                }

                stopSocket() {
                    this.socketService.disconnect({socketName: "forge"}), this.socketMessagesSubscription && this.socketMessagesSubscription.unsubscribe()
                }

                handleValidationFail(t) {
                    console.error("Forge->handleValidationFail()", t), "You are locked from fusing because our bot prevention system detected unusual behavior" === t && this.modalService.createModal(dn.n, {}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: m.e1.Center,
                        size: m.Cg.StretchableWorkarea
                    }), this.mainTL.pause(), this.animateCircularProgress({
                        preFusePercentage: 0,
                        duration: 0
                    }), this.uiStateInformation.previewLoading = !1, this.uiStateInformation.instructionalMessage = t, "Fusing is temporarily disabled due to network congestion" === t && (this.uiStateInformation.instructionalMessage = '\n        Fusing is temporarily disabled due to high transaction fees on the network.\n        The Forge will reopen with the release of Immutable X minting.\n        <br>\n        <a href="https://www.reddit.com/r/GodsUnchained/comments/im80m1/trial_of_the_gods_on_minting_purchasing_and/" target="_blank">LEARN MORE</a>\n      '), this.uiStateInformation.disableCta = !0
                }

                animateEachCardIntoPreview(t) {
                    const n = y.p8.timeline(), i = this.previewCardDom.nativeElement,
                        a = oe.ease.config({strength: 8, points: 2, template: "power2.inOut", randomize: !1});
                    let s;
                    switch (t.length) {
                        case 2:
                            s = ["25%", "-25%"];
                            break;
                        case 3:
                            s = ["50%", "0%", "-50%"];
                            break;
                        case 4:
                            s = ["100%", "50%", "-50%", "-100%"];
                            break;
                        default:
                            s = ["100%", "50%", "0%", "-50%", "-100%"]
                    }
                    return t.forEach((c, l) => {
                        n.to(c, {
                            duration: .4,
                            y: "-120%",
                            x: s[l],
                            opacity: .3,
                            rotation: () => Math.floor(60 * Math.random()) * (1 === Math.floor(2 * Math.random()) ? 1 : -1),
                            ease: "power2.inOut"
                        }).add(() => {
                            l === t.length - 1 && this.audioService.ForgeFuseAnvil5.play()
                        }, "-=0.4").to(c, {
                            duraiton: .2,
                            opacity: 0,
                            ease: "power2.inOut"
                        }, "-=0.15").fromTo(i, {duration: .2, scale: 1}, {scale: .94, ease: a}, "-=0.2").add(() => {
                            l < t.length - 1 && this.audioService[`ForgeFuseAnvil${l + 1}`].play()
                        }, "-=0.2")
                    }), n
                }

                waitForFinalFuseResponseAnimation() {
                    const t = this.finalCircularFuseDom.elRef.nativeElement, n = this.previewCardDom.nativeElement;
                    this.waitForFuseResponseTL = y.p8.timeline({
                        repeat: -1,
                        paused: !0
                    }), this.waitForFuseResponseTL.add(() => {
                        this.uiStateInformation.disableCta = !0, this.uiStateInformation.ctaText = "Fusing ..."
                    }).set(t, {opacity: 1}).to(n, {
                        duration: .8,
                        opacity: .75
                    }).to(this.finalFusePercentage, {
                        duraiton: 1.6,
                        value: 100,
                        ease: "power2.inOut"
                    }, 0).to(n, {duration: .8, opacity: 1}, .8).to(t, {
                        duration: .3,
                        opacity: 0,
                        ease: "power2.inOut"
                    }, "-=0.3"), this.mainTL.pause(), this.mainTL.add(this.waitForFuseResponseTL.play(), "previewCardFloating"), this.mainTL.play()
                }

                finalStageFuseAnimation() {
                    const t = this.forgeCardsDom.forgeCardDoms.toArray().map(s => s.nativeElement),
                        n = this.previewCardDom.nativeElement, i = this.shimmerAreaDom.nativeElement,
                        a = this.ctaButtonDom.nativeElement;
                    this.waitForFuseResponseTL.kill(), this.uiStateInformation.preFuseCicleStrokeColor = "#c6a052", this.finalFusePercentage.value = 0, this.fluxTransactionCost = 0, this.finalTL = y.p8.timeline({paused: !0}), this.finalTL.to(this.cardForgeAreaDom.nativeElement, {
                        duration: .3,
                        y: 13 * this.vh,
                        ease: "power2.inOut"
                    }).to(n, {
                        duration: .3,
                        opacity: 1
                    }, "-=0.2").add(this.animateEachCardIntoPreview(t)).add("restingState").to(this.smokeDom.nativeElement, {
                        duration: 2.2,
                        opacity: .8,
                        scale: 1.15,
                        ease: Power0.easeNone
                    }, "-=1.2").to(this.smokeDom.nativeElement, {
                        duration: 2.2,
                        opacity: 0,
                        scale: 1.35,
                        ease: Power0.easeNone
                    }, "-=0.1").to([n, i], {
                        duration: .7,
                        scale: 1.25,
                        ease: "power2.inOut"
                    }, "restingState").to(a, {
                        duration: .6,
                        opacity: 1,
                        y: "170%",
                        scale: 1.2,
                        ease: "power2.inOut",
                        onComplete: () => {
                            this.uiStateInformation.disableCta = !1, this.uiStateInformation.ctaText = "Continue"
                        }
                    }, "restingState+=0.1").to(this.shimmerAreaDom.nativeElement, {
                        duration: .1,
                        opacity: .75
                    }, "restingState+=1.1").add(() => {
                        this.audioService.ForgeFuseShimmer.play()
                    }, "restingState+=1.1").to(this.shimmerDom.nativeElement, {
                        duration: .7,
                        y: "315%",
                        ease: "power2.inOut"
                    }, "restingState+=1.2").to(this.shimmerAreaDom.nativeElement, {
                        duration: .1,
                        opacity: 0
                    }, "restingState+=1.8").add(() => this.audioService.ForgeFuseContinue.play(), "restingState+=1.9"), this.mainTL.pause(), this.mainTL.add(this.finalTL.play(), "previewCardFloating"), this.mainTL.play("previewCardFloating")
                }

                createPreForgeAnimation() {
                    const t = this.previewCardDom.nativeElement, n = this.shimmerAreaDom.nativeElement,
                        i = y.p8.timeline({repeat: -1, paused: !0});
                    i.to([n, t], {duration: 2, y: "-9%", ease: "power2.inOut"}).to([n, t], {
                        duration: 2,
                        y: "-12%",
                        ease: "power2.inOut"
                    }), this.mainTL.set([n, t], {y: "0%", opacity: 0}).to([n, t], {
                        duration: .7,
                        y: "-12%",
                        opacity: 1,
                        ease: "power2.inOut",
                        onComplete: () => {
                            this.uiStateInformation.previewLoading = !1, this.uiStateInformation.disableCta = !1
                        }
                    }).add(i.play(), "previewCardFloating")
                }

                animateCircularProgress({preFusePercentage: t, duration: n = .65}) {
                    return new Promise(i => {
                        this.circularTween && this.circularTween.kill(), this.circularTween = y.p8.to(this.preFusePercentage, {
                            value: t,
                            ease: "power2.inOut",
                            onComplete: () => {
                                this.uiStateInformation = Object.assign({}, this.uiStateInformation), this.preFusePercentage.value = t, i()
                            },
                            duration: n
                        })
                    })
                }

                fluxInfoModal() {
                    this.modalService.createModal(_n, null, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.mI), e.Y36(_.yD), e.Y36(_.dK), e.Y36(T.Z), e.Y36(K._), e.Y36(ge), e.Y36(h.pk), e.Y36(_e), e.Y36(_.$c), e.Y36(_.TJ), e.Y36(h.ux), e.Y36(he.d), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-app-forge-flux"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(us, 7), e.Gf(_s, 7, e.SBq), e.Gf(hs, 7), e.Gf(ms, 7), e.Gf(fs, 7), e.Gf(Cs, 7), e.Gf(vs, 7), e.Gf(bs, 7), e.Gf(ws, 7)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.previewCardAreaDom = i.first), e.iGM(i = e.CRH()) && (n.previewCardDom = i.first), e.iGM(i = e.CRH()) && (n.shimmerDom = i.first), e.iGM(i = e.CRH()) && (n.shimmerAreaDom = i.first), e.iGM(i = e.CRH()) && (n.smokeDom = i.first), e.iGM(i = e.CRH()) && (n.cardForgeAreaDom = i.first), e.iGM(i = e.CRH()) && (n.ctaButtonDom = i.first), e.iGM(i = e.CRH()) && (n.forgeCardsDom = i.first), e.iGM(i = e.CRH()) && (n.finalCircularFuseDom = i.first)
                    }
                },
                decls: 40,
                vars: 34,
                consts: [["title", "Cards", 1, "cardBrowserArea", 3, "expandedViewMode", "activeGrouping", "protoCards", "inventoryCards"], [1, "cardForgeArea"], [1, "cardForgeArea__heading"], [1, "cardForgeArea__fluxBalanceArea"], [1, "cardForgeArea__fluxBalanceArea__label"], [1, "cardForgeArea__fluxBalanceArea__balanceRow"], ["iconLigature", "flux_symbol", 1, "cardForgeArea__fluxBalanceArea__balance__icon"], [1, "cardForgeArea__fluxBalanceArea__balance__number"], [1, "cardForgeArea__fluxBalanceArea__infoButton", 3, "click"], [1, "cardForgeArea__fluxBalanceArea__infoButton__icon"], [1, "cardForgeArea__circularArea"], ["cardForgeArea", ""], [1, "cardForgeArea__circularArea__progressCircle", 3, "percentage", "width", "strokeWidth", "showBackgroundRing", "supressAnimation", "strokeColor", "insetInnerStroke"], ["gradientForStroke", "whiteToAqua", 1, "cardForgeArea__circularArea__progressCircle", "cardForgeArea__circularArea__progressCircle--finalProgress", 3, "percentage", "width", "strokeWidth", "showBackgroundRing", "supressAnimation", "insetInnerStroke"], ["finalCircularFuse", ""], ["kind", "help", "align", "center", "class", "cardForgeArea__circularArea__instructionalText", 3, "innerHTML", 4, "ngIf"], [1, "cardForgeArea__ctaButton", 3, "text", "click"], ["ctaButton", ""], ["class", "cardForgeArea__circularArea__loading", 4, "ngIf"], [1, "cardForgeArea__circularArea__previewCardArea"], ["previewCardAreaDom", ""], ["src", "/assets/images/texture--smoke.webp", "alt", "", 1, "cardForgeArea__circularArea__previewCardArea__smoke"], ["smokeDom", ""], ["responsiveSrcsetSizes", "18.6vw", 1, "cardForgeArea__circularArea__previewCardArea__card", 3, "protoId", "quality"], ["previewCardDom", ""], [1, "cardForgeArea__circularArea__previewCardArea__shimmerArea"], ["shimmerAreaDom", ""], [1, "cardForgeArea__circularArea__previewCardArea__shimmerArea__shimmer"], ["shimmerDom", ""], ["top", "3x-large"], ["class", "cardForgeArea__etherscanLink", "kind", "tag", "fillColor", "colors.apocyan.100", "align", "center", 3, "ngClass", "click", 4, "ngIf"], [1, "cardForgeArea__cardsToBeFused", 3, "fluxTransactionCost", "fakeForgeCards"], ["forgeCards", ""], ["kind", "help", "align", "center", 1, "cardForgeArea__circularArea__instructionalText", 3, "innerHTML"], [1, "cardForgeArea__circularArea__loading"], ["kind", "tag", "fillColor", "colors.apocyan.100", "align", "center", 1, "cardForgeArea__etherscanLink", 3, "ngClass", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "cerberus-half-screen-cards-list", 0), e.TgZ(1, "div", 1), e.TgZ(2, "h1", 2), e._uU(3, " The Forge "), e.qZA(), e.TgZ(4, "div", 3), e.TgZ(5, "label", 4), e._uU(6, "Flux"), e.qZA(), e.TgZ(7, "div", 5), e._UZ(8, "gu-icon", 6), e.TgZ(9, "h2", 7), e._uU(10), e.ALo(11, "numberAbbreviation"), e.qZA(), e.qZA(), e.TgZ(12, "a", 8), e.NdJ("click", function () {
                        return n.fluxInfoModal()
                    }), e._uU(13, " Fusing costs "), e.TgZ(14, "i", 9), e.TgZ(15, "span"), e._uU(16, "?"), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(17, "div", 10, 11), e._UZ(19, "app-progress-circle", 12), e._UZ(20, "app-progress-circle", 13, 14), e.YNc(22, xs, 1, 1, "gu-paragraph-text", 15), e.TgZ(23, "gu-primary-hex-button", 16, 17), e.NdJ("click", function () {
                        return n.ctaClick()
                    }), e.qZA(), e.YNc(25, Ms, 2, 0, "div", 18), e.TgZ(26, "div", 19, 20), e._UZ(28, "img", 21, 22), e._UZ(30, "app-card2", 23, 24), e.TgZ(32, "div", 25, 26), e._UZ(34, "i", 27, 28), e.qZA(), e.qZA(), e.qZA(), e.TgZ(36, "gu-vertical-space", 29), e.YNc(37, ks, 2, 3, "gu-paragraph-text", 30), e.qZA(), e._UZ(38, "cerberus-app-forge-cards", 31, 32), e.qZA()), 2 & t && (e.ekj("cardBrowserArea--disabled", n.uiStateInformation.finalFusingInProgress || n.uiStateInformation.previewLoading), e.Q6J("expandedViewMode", n.ExpandedViewMode.FORGING)("activeGrouping", n.activeGrouping)("protoCards", n.protoCards)("inventoryCards", n.inventoryCards), e.xp6(10), e.hij(" ", e.xi3(11, 31, n.fluxBalance, 2), " "), e.xp6(9), e.Q6J("percentage", n.preFusePercentage.value)("width", 29 * n.vw)("strokeWidth", 2 * n.vh)("showBackgroundRing", !0)("supressAnimation", !0)("strokeColor", n.uiStateInformation.preFuseCicleStrokeColor)("insetInnerStroke", !0), e.xp6(1), e.Q6J("percentage", n.finalFusePercentage.value)("width", 29 * n.vw)("strokeWidth", 2 * n.vh)("showBackgroundRing", !1)("supressAnimation", !0)("insetInnerStroke", !0), e.xp6(2), e.Q6J("ngIf", n.uiStateInformation.instructionalMessage && !n.uiStateInformation.previewLoading && !n.uiStateInformation.finalFusingInProgress), e.xp6(1), e.Q6J("text", n.uiStateInformation.ctaText), e.uIk("disabled", n.uiStateInformation.disableCta), e.xp6(2), e.Q6J("ngIf", n.uiStateInformation.previewLoading), e.xp6(5), e.Q6J("protoId", null == n.previewCard ? null : n.previewCard.protoId)("quality", null == n.previewCard ? null : n.previewCard.quality), e.xp6(7), e.Q6J("ngIf", (null == n.transactionInProgress ? null : n.transactionInProgress.txHash) || n.completedTransactionTxHash), e.xp6(1), e.ekj("cardForgeArea__cardsToBeFused--disabled", n.uiStateInformation.finalFusingInProgress), e.Q6J("fluxTransactionCost", n.fluxTransactionCost)("fakeForgeCards", n.fakeForgeCards))
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.cardForgeArea__heading[_ngcontent-%COMP%], .cardForgeArea__fluxBalanceArea__balance__number[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardForgeArea__fluxBalanceArea__infoButton[_ngcontent-%COMP%], .cardForgeArea__fluxBalanceArea__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.cardForgeArea__fluxBalanceArea__balance__number[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.cardForgeArea__heading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 5);line-height:1.3}.cardForgeArea__fluxBalanceArea__infoButton[_ngcontent-%COMP%], .cardForgeArea__fluxBalanceArea__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-top:calc(var(--vh) * 2);padding-left:calc(var(--vw) * 3);padding-right:calc(var(--vw) * 3);display:flex;height:100%}.cardBrowserArea[_ngcontent-%COMP%]{width:calc(var(--vw) * 44);margin-right:calc(var(--vw) * 2.34)}.cardBrowserArea--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none;opacity:.5}.cardForgeArea[_ngcontent-%COMP%]{flex:1;display:flex;flex-flow:column nowrap;position:relative}.cardForgeArea__heading[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-align:center;text-transform:uppercase}.cardForgeArea__fluxBalanceArea[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;flex-direction:column}.cardForgeArea__fluxBalanceArea__label[_ngcontent-%COMP%]{color:#f6f6f6;font-weight:700;text-transform:uppercase;text-align:center;margin:0}.cardForgeArea__fluxBalanceArea__balanceRow[_ngcontent-%COMP%]{margin-bottom:calc(var(--vh) * .5);display:flex;justify-content:center}.cardForgeArea__fluxBalanceArea__balance__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.4);background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.cardForgeArea__fluxBalanceArea__balance__number[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-left:calc(var(--vw) * -.1)}.cardForgeArea__fluxBalanceArea__infoButton[_ngcontent-%COMP%]{color:#7192b0;font-weight:700;text-transform:uppercase;text-align:center;cursor:pointer;white-space:nowrap}.cardForgeArea__fluxBalanceArea__infoButton__icon[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * .2);margin-top:calc(var(--vh) * -.1);width:calc(var(--vh) * 2);height:calc(var(--vh) * 2);border-radius:50%;border:calc(var(--vh) * .15) solid #7192b0;display:inline-flex;vertical-align:top}.cardForgeArea__fluxBalanceArea__infoButton__icon[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin:auto;line-height:1;font-weight:700;font-style:normal}.cardForgeArea__circularArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;transform:translateY(calc(var(--vh) * 13))}.cardForgeArea__circularArea__progressCircle[_ngcontent-%COMP%]{transform:rotate(180deg)}.cardForgeArea__circularArea__progressCircle--finalProgress[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;transform:rotate(180deg) translate(50%);transform-origin:50% 50%}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]{width:calc(var(--vh) * 21);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]     span{text-transform:capitalize;font-weight:700}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]     a{color:#affaed}.cardForgeArea__circularArea__previewCardArea[_ngcontent-%COMP%]{top:calc(var(--vh) * -1.3);margin-left:calc(var(--vw) * -.8);user-select:none;pointer-events:none;width:calc(var(--vw) * 18.6);position:absolute;z-index:1;transform:translateY(10%);cursor:pointer}.cardForgeArea__circularArea__previewCardArea__smoke[_ngcontent-%COMP%]{width:calc(var(--vw) * 35);bottom:calc(var(--vh) * 10);position:absolute;left:54%;transform:translate(-50%) scale(.6);transform-origin:50% 100%;opacity:0}.cardForgeArea__circularArea__previewCardArea__card[_ngcontent-%COMP%]{filter:drop-shadow(0 calc(var(--vh) * .5) calc(var(--vw) * 2) black);opacity:0}.cardForgeArea__circularArea__previewCardArea__shimmerArea[_ngcontent-%COMP%]{top:calc(var(--vh) * 4.3);bottom:calc(var(--vh) * 2.3);left:calc(var(--vw) * 2.55);right:calc(var(--vw) * 1.15);position:absolute;overflow:hidden;opacity:0}.cardForgeArea__circularArea__previewCardArea__shimmerArea__shimmer[_ngcontent-%COMP%]{position:absolute;width:150%;height:35%;background:linear-gradient(to bottom,rgba(255,255,255,0) 0%,white 50%,rgba(255,255,255,0) 100%);transform:rotate(15deg) translateY(-120%);top:0;left:-25%;mix-blend-mode:overlay}.cardForgeArea__ctaButton[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%,-10%);min-width:145px}.cardForgeArea__etherscanLink[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;text-transform:uppercase;text-decoration:underline;cursor:pointer}.cardForgeArea__etherscanLink--final[_ngcontent-%COMP%]{position:absolute;bottom:calc(var(--vh) * 3.24)}.cardForgeArea__cardsToBeFused[_ngcontent-%COMP%]{height:calc(var(--vh) * 18.66);margin-bottom:calc(var(--vh) * 3.24);margin-top:auto;display:flex;width:100%;justify-content:center}.cardForgeArea__cardsToBeFused--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none}.cardForgeArea__circularArea__loading[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}"]
            }), o
        })();

        function Os(o, r) {
            1 & o && (e.ynx(0), e._UZ(1, "cerberus-forge-next-step"), e.BQk())
        }

        function Ps(o, r) {
            1 & o && e._UZ(0, "cerberus-app-forge-flux")
        }

        let Ss = (() => {
            class o {
                constructor(t) {
                    this.featureFlagsService = t, this.unsubscribe = new M.xQ, this.Flags = _.vU, this.ffFusingNextStepEnabled = !1
                }

                ngOnInit() {
                    this.setFusingNextStepEnabledFF()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                setFusingNextStepEnabledFF() {
                    this.featureFlagsService.get(_.vU.fusingNextStepEnabled).pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.ffFusingNextStepEnabled = !!t
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.B3))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-routing"]],
                decls: 3,
                vars: 2,
                consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""]],
                template: function (t, n) {
                    if (1 & t && (e.YNc(0, Os, 2, 0, "ng-container", 0), e.YNc(1, Ps, 1, 0, "ng-template", null, 1, e.W1O)), 2 & t) {
                        const i = e.MAs(2);
                        e.Q6J("ngIf", n.ffFusingNextStepEnabled)("ngIfElse", i)
                    }
                },
                directives: [d.O5, cs, Cn],
                styles: ["[_nghost-%COMP%]{display:block}"]
            }), o
        })();

        function Ts(o, r) {
            if (1 & o && e._UZ(0, "gu-reward-display", 11), 2 & o) {
                const t = e.oxw().$implicit;
                e.Q6J("imageUrl", t.image_url)("text", t.title)
            }
        }

        function As(o, r) {
            if (1 & o && e._UZ(0, "gu-reward-display", 12), 2 & o) {
                const t = e.oxw().$implicit;
                e.Q6J("text", t.title)
            }
        }

        function Is(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Ts, 1, 2, "gu-reward-display", 9), e.YNc(2, As, 1, 1, "gu-reward-display", 10), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", "image" === t.type), e.xp6(1), e.Q6J("ngIf", "stars" === t.type)
            }
        }

        let vn = (() => {
            class o {
                constructor(t, n) {
                    this.modalService = t, this.akuma = n, this.rewards = []
                }

                ngOnInit() {
                    this.akuma.postEvent("Screen", "sealeddeckRewards_opened")
                }

                close() {
                    this.modalService.destroyTopModal()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(T.Z), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["gu-sealed-deck-rewards-modal"]],
                inputs: {rewards: "rewards"},
                decls: 11,
                vars: 1,
                consts: [[1, "backgroundImagery"], ["bottom", "medium", 1, "header"], ["src", "/assets/images/ui-embellishments/ui--deco-divider.svg", "alt", "small divider", 1, "header__divider", "header__divider--left"], ["size", "large", "fillGradient", "gradients.gold.simple", "align", "center"], ["src", "/assets/images/ui-embellishments/ui--deco-divider.svg", "alt", "small divider", 1, "header__divider"], ["align", "center", "fillColor", "colors.light.100", "kind", "large", 1, "titleText"], ["top", "2x-large", "bottom", "4x-large", 1, "rewardsSection"], [4, "ngFor", "ngForOf"], ["size", "large", "text", "CONFIRM", 1, "cta", 3, "click"], ["class", "rewardsSection__reward", 3, "imageUrl", "text", 4, "ngIf"], ["class", "rewardsSection__reward", "iconLigature", "collectable_stars", 3, "text", 4, "ngIf"], [1, "rewardsSection__reward", 3, "imageUrl", "text"], ["iconLigature", "collectable_stars", 1, "rewardsSection__reward", 3, "text"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "div", 0), e.TgZ(1, "gu-vertical-space", 1), e._UZ(2, "img", 2), e.TgZ(3, "gu-heading-text", 3), e._uU(4, " Collect your rewards! "), e.qZA(), e._UZ(5, "img", 4), e.qZA(), e.TgZ(6, "gu-paragraph-text", 5), e._uU(7, " These items have been added to your inventory.\n"), e.qZA(), e.TgZ(8, "gu-vertical-space", 6), e.YNc(9, Is, 3, 2, "ng-container", 7), e.qZA(), e.TgZ(10, "gu-primary-hex-button", 8), e.NdJ("click", function () {
                        return n.close()
                    }), e.qZA()), 2 & t && (e.xp6(9), e.Q6J("ngForOf", n.rewards))
                },
                directives: [d.sg, d.O5],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(var(--vh) * 100);width:calc(var(--vw) * 100);margin-top:28px;background-image:linear-gradient(180deg,#1d2f41 0%,#0f1b27 100%)}.backgroundImagery[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-image:url(https://images.godsunchained.com/art2/1024/1325.webp);opacity:.05}.header[_ngcontent-%COMP%]{display:flex;justify-content:center}.header__divider[_ngcontent-%COMP%]{margin:0 16px}.header__divider--left[_ngcontent-%COMP%]{transform:rotate(180deg)}.rewardsSection[_ngcontent-%COMP%]{display:flex;justify-content:center}.rewardsSection__reward[_ngcontent-%COMP%]{margin:0 8px}.cta[_ngcontent-%COMP%]{margin:0 auto}"]
            }), o
        })(), Zs = (() => {
            class o {
                constructor(t, n) {
                    this.activeModal = t, this.storageService = n
                }

                ngOnInit() {
                    this.storageService.set(["_USER_NOTIFIED"], !0)
                }

                close() {
                    this.storageService.set(["_USER_NOTIFIED"], !0), this.activeModal.close("CTA closed")
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(B.mX), e.Y36(h.qy))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-notify-user"]],
                decls: 16,
                vars: 0,
                consts: [["iconLigature", "close_x", 1, "modal__closeButton", 3, "click"], [1, "modal__header"], [1, "modal__content"], ["top", "3x-large", "bottom", "medium"], ["align", "center", "size", "x-small", "fillGradient", "gradients.gold.simple"], ["top", "medium", "bottom", "medium"], ["fillColor", "colors.light.800", "kind", "x-small", 1, "notifyText"], [1, "modal__btnsGroup"], [1, "modal__btn", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.close()
                    }), e.qZA(), e._UZ(1, "div", 1), e.TgZ(2, "div", 2), e.TgZ(3, "gu-vertical-space", 3), e.TgZ(4, "gu-heading-text", 4), e._uU(5, " WEEKEND RANKED UPDATE"), e.qZA(), e.qZA(), e.TgZ(6, "gu-vertical-space", 5), e.TgZ(7, "gu-paragraph-text", 6), e.TgZ(8, "ul"), e.TgZ(9, "li"), e._uU(10, " Weekend Ranked is cancelled due to card issues brought on by Update 0.26. "), e.qZA(), e.TgZ(11, "li"), e._uU(12, " The following weekend will host a double rewards Weekend Ranked event. "), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(13, "div", 7), e.TgZ(14, "gu-primary-hex-button", 8), e.NdJ("click", function () {
                        return n.close()
                    }), e._uU(15, " CLOSE "), e.qZA(), e.qZA(), e.qZA())
                },
                styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:650px;text-align:center}.modal__header[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c6a052 2.93%,#ebc98b 25.01%,#fff2d8 50.44%,#ebc98b 74.21%,#c6a052 96.95%);box-shadow:0 2px 5px #0000004d;height:3px;width:100%}.modal__content[_ngcontent-%COMP%]{background:linear-gradient(90deg,#0f1b27 1.39%,#0f1b27 12.6%,#1d2f41 50.06%,#0f1b27 87.64%,#0f1b27 98.63%);box-sizing:border-box;border:2px solid #3D5A74;display:flex;flex-direction:column;padding:0 calc(var(--vw) * 1.5);align-items:center}.modal__btnsGroup[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;padding:20px 0;width:50%}.modal__btn[_ngcontent-%COMP%]{padding:15px;margin:10px}.modal__closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;font-size:calc(var(--vh) * 2);color:#8be1e0;cursor:pointer}.modal__closeButton[_ngcontent-%COMP%]:hover{color:#fff}.notifyText[_ngcontent-%COMP%]{text-align:left}"]
            }), o
        })();
        var Fs = p(5284), It = p(87168);

        function Ds(o, r) {
            1 & o && e._UZ(0, "div", 22)
        }

        function Gs(o, r) {
            if (1 & o && e._UZ(0, "img", 23), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw();
                e.Q6J("src", n.isFinalLevel(t.level) ? "/gu-assets/images/rewards-progress/final-gem-point.png" : "/gu-assets/images/rewards-progress/gem-point.png", e.LSH)
            }
        }

        const Bs = function (o, r) {
            return {
                "progressBarContainer__nextReward__milestoneImage--inactive": o,
                "progressBarContainer__nextReward__lastMilestoneImage--inactive": r
            }
        };

        function Ls(o, r) {
            if (1 & o && e._UZ(0, "img", 24), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw();
                e.Q6J("ngClass", e.WLB(2, Bs, !n.isFinalLevel(t.level), n.isFinalLevel(t.level)))("src", n.isFinalLevel(t.level) ? "/gu-assets/images/rewards-progress/final-empty-point.png" : "/gu-assets/images/rewards-progress/empty-point.png", e.LSH)
            }
        }

        function Us(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div"), e.TgZ(2, "gu-simple-text", 25), e.TgZ(3, "strong"), e._uU(4), e.qZA(), e.qZA(), e.TgZ(5, "gu-simple-text", 26), e._uU(6), e.ALo(7, "titlecase"), e.qZA(), e.qZA(), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(4), e.Oqu(t.count), e.xp6(2), e.hij(" x ", e.lcZ(7, 2, "neutral" === t.god ? t.rarity : t.god), " Packs ")
            }
        }

        const qs = function (o, r) {
            return {progressBarContainer__nextReward__level: o, progressBarContainer__lastReward__level: r}
        };

        function Es(o, r) {
            if (1 & o && (e.TgZ(0, "div", 14), e._UZ(1, "reward-state", 15), e.YNc(2, Ds, 1, 0, "div", 16), e.TgZ(3, "picture"), e.YNc(4, Gs, 1, 1, "img", 17), e.YNc(5, Ls, 1, 5, "img", 18), e.qZA(), e.TgZ(6, "gu-paragraph-text", 19), e._uU(7), e.qZA(), e.TgZ(8, "div", 20), e.YNc(9, Us, 8, 4, "ng-container", 21), e.qZA(), e.qZA()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("rewardLevel", t.level)("isAchieved", t.achieved)("playerLevel", n.currentPlayerlevel)("finalRewardLevel", 6)("diety", n.getDietyType(t.reward)), e.xp6(1), e.Q6J("ngIf", t.achieved), e.xp6(2), e.Q6J("ngIf", t.achieved), e.xp6(1), e.Q6J("ngIf", !t.achieved), e.xp6(1), e.Q6J("ngClass", e.WLB(11, qs, !n.isFinalLevel(t.level), n.isFinalLevel(t.level))), e.xp6(1), e.hij(" Level ", t.level, ""), e.xp6(2), e.Q6J("ngForOf", t.reward)
            }
        }

        let bn = (() => {
            class o {
                constructor(t, n, i, a, s, c) {
                    this.progressionService = t, this.activeModal = n, this.userService = i, this.router = a, this.environment = s, this.akumaService = c, this.unsubscribe = new M.xQ, this.progressBarPercent = 0
                }

                ngOnInit() {
                    this.akumaService.postScreenEvent("quest", "NewPlayerRewards", "", "opened"), this.userService.extendedAccountProperties$.pipe((0, It.M)(this.progressionService.accountThresholds$), (0, u.R)(this.unsubscribe)).subscribe(([t, n]) => {
                        this.newPlayerRewards = n.slice(1, 7).map(i => {
                            let a = i;
                            return this.currentPlayerlevel = t.level, this.currentPlayerlevel >= a.level ? (a.achieved = !0, this.progressBarPercent += a.level > 1 ? 20 : 0) : a.achieved = !1, a
                        })
                    })
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                isNextLevel(t) {
                    return t === this.currentPlayerlevel + 1
                }

                isFinalLevel(t) {
                    return 6 === t
                }

                getDietyType(t) {
                    return t.find(n => "neutral" !== n.god).god
                }

                openPacks() {
                    this.akumaService.postControlEvent("quest", "NewPlayerRewards", "", "openPacks", "Btn", "pressed"), this.akumaService.postFlowEvent("questRewardClaim", "succeeded"), this.router.navigate([Ze.gv.routeContent(this.environment).openPacks.path])
                }

                close() {
                    this.activeModal.close()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36($.$z), e.Y36(B.mX), e.Y36(ne.MZ), e.Y36(de.F0), e.Y36(h.Ho), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-progression-rewards"]],
                decls: 20,
                vars: 5,
                consts: [["iconLigature", "close_x", "fillGradient", "gradients.gold.simple", 1, "closeButton", 3, "click"], [1, "modalContent__background"], ["type", "image/webp", "srcset", "/gu-assets/images/rewards-progress/hyperion-titan-background.webp"], ["src", "/gu-assets/images/rewards-progress/hyperion-titan-background.png", "alt", "", 1, "modalContent__background__img"], [1, "modalContent"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "x-small", 1, "modalContent__heading"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "small", 1, "modalContent__title"], ["iconligature", "filter_rarity", "fillgradient", "gradients.gold.simple", "fillgradienttarget", "bottom"], ["fillColor", "colors.light.300", 1, "modalContent__subTitle"], [1, "progressBarContainer"], ["color", "aqua", 1, "progressBarContainer__progressBar", 3, "percentage", "height", "showDivider", "animateFirstValue"], [1, "progressBarContainer__rewards"], ["class", "progressBarContainer__nextReward", 4, "ngFor", "ngForOf"], ["text", "Open Packs", 1, "openPacks_btn", 3, "click"], [1, "progressBarContainer__nextReward"], [3, "rewardLevel", "isAchieved", "playerLevel", "finalRewardLevel", "diety"], ["class", "progressBarContainer__nextReward__highlight", 4, "ngIf"], ["class", "progressBarContainer__nextReward__milestoneImage--active", "alt", "", 3, "src", 4, "ngIf"], ["alt", "", 3, "ngClass", "src", 4, "ngIf"], ["fillcolor", "colors.gunmetal.300", "kind", "tag", 3, "ngClass"], [1, "progressBarContainer__nextReward__milestoneRewards"], [4, "ngFor", "ngForOf"], [1, "progressBarContainer__nextReward__highlight"], ["alt", "", 1, "progressBarContainer__nextReward__milestoneImage--active", 3, "src"], ["alt", "", 3, "ngClass", "src"], ["fillColor", "colors.light.300", "kind", "large"], ["fillColor", "colors.light.300", "kind", "small"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.close()
                    }), e.qZA(), e.TgZ(1, "picture", 1), e._UZ(2, "source", 2), e._UZ(3, "img", 3), e.qZA(), e.TgZ(4, "div", 4), e.TgZ(5, "gu-heading-text", 5), e._uU(6, " Player Progress "), e.qZA(), e.TgZ(7, "gu-heading-text", 6), e._UZ(8, "gu-icon", 7), e._uU(9, " New Player Rewards "), e.qZA(), e.TgZ(10, "gu-simple-text", 8), e._uU(11, " Earn up to "), e.TgZ(12, "strong"), e._uU(13, "24 CORE PACKS"), e.qZA(), e._uU(14, " by playing ranked matches. "), e.qZA(), e.TgZ(15, "div", 9), e._UZ(16, "app-progress-bar", 10), e.TgZ(17, "div", 11), e.YNc(18, Es, 10, 14, "div", 12), e.qZA(), e.qZA(), e.TgZ(19, "gu-primary-hex-button", 13), e.NdJ("click", function () {
                        return n.openPacks()
                    }), e.qZA(), e.qZA()), 2 & t && (e.xp6(16), e.Q6J("percentage", n.progressBarPercent)("height", 12)("showDivider", !1)("animateFirstValue", !0), e.xp6(2), e.Q6J("ngForOf", n.newPlayerRewards))
                },
                styles: ['[_nghost-%COMP%]{position:relative;margin:auto;background:#0F1B27;box-shadow:0 20px 6px #030b13b3,0 16px 14px #00000036;border-radius:2px}@media only screen and (max-width: 1400px){[_nghost-%COMP%]{width:1065px;height:620px}}.closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;width:20px;height:20px;font-size:13px;border-radius:50%;display:flex;line-height:1;border:2px solid #EBC98B;cursor:pointer}.closeButton[_ngcontent-%COMP%]:hover{background:get("colors.gunmetal.300")}.closeButton[_ngcontent-%COMP%]     i{margin:auto;line-height:1}.modalContent[_ngcontent-%COMP%]{display:flex;flex-flow:column;position:absolute;top:0px;width:100%;height:100%}.modalContent__heading[_ngcontent-%COMP%]{margin:20px}.modalContent__background__img[_ngcontent-%COMP%], .modalContent__headerPicture__img[_ngcontent-%COMP%]{object-fit:cover;width:100%}.modalContent__title[_ngcontent-%COMP%]{margin-top:200px;align-self:center}@media only screen and (max-width: 1400px){.modalContent__title[_ngcontent-%COMP%]{margin-top:100px}}.modalContent__subTitle[_ngcontent-%COMP%]{align-self:center}.progressBarContainer[_ngcontent-%COMP%]{padding:5px;margin-top:270px;position:relative}@media only screen and (max-width: 1400px){.progressBarContainer[_ngcontent-%COMP%]{margin-top:170px}}.progressBarContainer__rewards[_ngcontent-%COMP%]{position:absolute;top:-80px;display:flex;flex-direction:row;width:100%;justify-content:space-evenly}.progressBarContainer__progressBar[_ngcontent-%COMP%]{border-top:.5px solid #C6A052;border-bottom:.5px solid #C6A052;margin-top:21px;margin-left:165px;margin-right:190px;clip-path:polygon(10px 0%,calc(100% - 10px) 0%,100% 50%,calc(100% - 10px) 100%,10px 100%,0% 50%)}@media only screen and (max-width: 1400px){.progressBarContainer__progressBar[_ngcontent-%COMP%]{margin-left:90px;margin-right:120px}}.progressBarContainer__nextReward[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.progressBarContainer__lastReward__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:20px}.progressBarContainer__nextReward__highlight[_ngcontent-%COMP%]{background:linear-gradient(270deg,rgba(0,0,0,0) -1.52%,#54bbcd 33.58%,#affaed 48.76%,#54bbcd 66.2%,rgba(0,0,0,0) 102.27%);box-shadow:0 0 3px #94e6fb80;width:50px;height:3px}.progressBarContainer__nextReward__milestoneImage--active[_ngcontent-%COMP%]{margin-top:22px}.progressBarContainer__nextReward__milestoneImage--inactive[_ngcontent-%COMP%]{margin-top:24px}.progressBarContainer__nextReward__lastMilestoneImage--inactive[_ngcontent-%COMP%]{margin-top:19px}.progressBarContainer__nextReward__level[_ngcontent-%COMP%]{margin-top:22px}.progressBarContainer__lastReward__level[_ngcontent-%COMP%]{margin-top:10px}.progressBarContainer__nextReward__milestoneRewards[_ngcontent-%COMP%]{display:flex;flex-flow:column;align-items:center}.openPacks_btn[_ngcontent-%COMP%]{position:absolute;bottom:20px;align-self:center}']
            }), o
        })();

        function Ns(o, r) {
            if (1 & o && (e.TgZ(0, "gu-heading-text", 14), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" ", null == t.account ? null : t.account.username + ' - ' + t.user.user_id, " ")
            }
        }

        function Rs(o, r) {
            if (1 & o && (e.TgZ(0, "gu-heading-text", 15), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" ", null == t.account ? null : t.account.username + ' - ' + t.user.user_id, " ")
            }
        }

        const Qs = function (o) {
            return {glow: o}
        };

        function Hs(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 16), e.TgZ(1, "gu-simple-text", 17), e._uU(2), e.qZA(), e._UZ(3, "gu-hex-progress-bar", 18), e.TgZ(4, "div", 19), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw(2);
                    return !!i.isNewUserEligibleForRewards && i.openRewardsModal()
                }), e.TgZ(5, "app-tooltip", 20), e._UZ(6, "i", 21), e._UZ(7, "gu-card-pack-picture", 22), e.qZA(), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw(2);
                e.xp6(2), e.hij(" Next milestone in " + t.user.xp_to_next + " XP - Level ", t.user.level + 1, " "), e.xp6(1), e.Q6J("progress", t.xpProgress), e.xp6(2), e.Q6J("autoClose", !t.isNewUserWithUnopenedPacks)("title", t.isNewUserWithUnopenedPacks ? "Click to see <br/> unlocked rewards" : t.nextReward.god + " Core " + t.nextReward.rarity + " pack"), e.xp6(1), e.Q6J("ngClass", e.VKq(7, Qs, t.isNewUserWithUnopenedPacks)), e.xp6(1), e.Q6J("god", t.nextReward.god)("rarity", t.nextReward.rarity)
            }
        }

        function Ys(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div", 1), e._UZ(2, "img", 2), e.qZA(), e.TgZ(3, "div", 3), e.TgZ(4, "div", 4), e.TgZ(5, "gu-simple-text", 5), e._uU(6), e.qZA(), e.YNc(7, Ns, 2, 1, "gu-heading-text", 6), e.YNc(8, Rs, 2, 1, "gu-heading-text", 7), e.TgZ(9, "div", 8), e.TgZ(10, "div", 9), e._UZ(11, "gu-icon", 10), e.TgZ(12, "gu-paragraph-text", 11), e._uU(13), e.qZA(), e.qZA(), e.TgZ(14, "div", 9), e._UZ(15, "gu-icon", 12), e.TgZ(16, "gu-paragraph-text", 11), e._uU(17), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.YNc(18, Hs, 8, 9, "div", 13), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.s9C("src", t.user.image_url, e.LSH), e.xp6(3), e.Udp("color", t.user.rank_color), e.xp6(1), e.hij(" ", t.user.rank, " "), e.xp6(1), e.Q6J("ngIf", t.userNameContainsEmoji), e.xp6(1), e.Q6J("ngIf", !t.userNameContainsEmoji), e.xp6(5), e.hij(" ", null == t.user ? null : t.user.won_matches + ' W - ' + t.user.lost_matches + ' L (' + (t.user.won_matches + t.user.lost_matches > 0 ? ((t.user.won_matches / (t.user.won_matches + t.user.lost_matches))*100).toFixed(0) : 0) + '%)', " "), e.xp6(4), e.hij(" ", null == t.user ? null : t.user.unique_card_count + ' unique cards', " "), e.xp6(1), e.Q6J("ngIf", t.showProgressBar && t.nextReward)
            }
        }

        var ze = (() => {
            return (o = ze || (ze = {})).v0 = "v0", o.v1 = "v1", ze;
            var o
        })();
        let wn = (() => {
            class o {
                constructor(t, n, i, a, s, c) {
                    this.guUserService = t, this.progressionService = n, this.packService = i, this.authService = a, this.cerberusModalService = s, this.akumaService = c, this.showProgressBar = !0, this.unsubscribe = new M.xQ, this.xpProgress = 0, this.isNewUserWithUnopenedPacks = !1, this.isNewUserEligibleForRewards = !1
                }

                ngOnInit() {
                    this.initUserDetails(), this.initUnopenedPacks()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initUnopenedPacks() {
                    this.packService.fetchUnopenedPacks(), this.packService.unopenedPacks$.pipe((0, It.M)(this.guUserService.extendedAccountProperties$), (0, u.R)(this.unsubscribe)).subscribe(([t, n]) => {
                        this.isNewUserEligibleForRewards = n.extra.progression_version === ze.v1 && n.level <= 6, this.isEligibleUserWithUnopenedPacks(t, n) && (this.isNewUserWithUnopenedPacks = !0, this.akumaService.postScreenEvent("arena", "PopNewRewardsUnlocked", "", "opened"), this.akumaService.postFlowEvent("questNotification", "started"))
                    })
                }

                isEligibleUserWithUnopenedPacks(t, n) {
                    return t.length > 0 && n.level > 0 && n.level <= 6 && this.isNewUserEligibleForRewards
                }

                initUserDetails() {
                    (0, D.aj)([this.guUserService.extendedAccountProperties$, this.authService.account$, this.progressionService.accountThresholds$]).pipe((0, u.R)(this.unsubscribe), (0, P.h)(([t, n, i]) => !!i.length && !!n)).subscribe(([t, n, i]) => {
                        this.account = n, this.user = t, this.userNameContainsEmoji = Fs.uA.stringContainsEmoji(this.account.username), this.xpProgress = He({
                            xp: t.total_xp,
                            levelThresholds: i
                        });
                        const a = this.packService.fixGodAlignments(i[this.user.level + 1].reward);
                        this.nextReward = this.chooseBestReward(a)
                    })
                }

                openRewardsModal() {
                    const t = this.cerberusModalService.open(bn);
                    this.akumaService.postControlEvent("arena", "PopNewRewardsUnlocked", "", "rewardPop", "Btn", "pressed"), this.akumaService.postFlowEvent("questNotification", "succeeded"), this.akumaService.postFlowEvent("questRewardClaim", "started"), t.result.then(i => {
                        this.akumaService.postControlEvent("quest", "NewPlayerRewards", "", "close", "Btn", "pressed")
                    }, i => {
                        this.akumaService.postControlEvent("quest", "NewPlayerRewards", "", "close", "Btn", "pressed")
                    })
                }

                chooseBestReward(t) {
                    if (1 === t.length) return t[0];
                    const n = {common: 0, rare: 1, epic: 2, legendary: 3, "shiny-legendary": 4};
                    return t.sort((a, s) => n[s.rarity] - n[a.rarity])[0]
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ne.MZ), e.Y36($.$z), e.Y36(me.F), e.Y36(h.mI), e.Y36(B.Qz), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-player-stats"]],
                inputs: {progressPercent: "progressPercent", showProgressBar: "showProgressBar"},
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], [1, "avatarArea"], ["alt", "player avatar image", 1, "avatar__profileImage", 3, "src"], [1, "textArea"], [1, "textArea__centered"], ["kind", "tag", "fillColor", "colors.gunmetal.100", 1, "playerRank"], ["size", "x-small", "class", "playerName", "fillColor", "colors.gold.500", 4, "ngIf"], ["size", "x-small", "class", "playerName", "fillGradient", "gradients.gold.simple", 4, "ngIf"], [1, "statDisplays"], [1, "statDisplays__stat"], ["iconLigature", "game_wins", "fillColor", "colors.gunmetal.100", 1, "statDisplays__stat__icon"], ["size", "2x-small", "fillColor", "colors.gunmetal.100", 1, "statDisplays__stat__value"], ["iconLigature", "cards_stack", "fillColor", "colors.gunmetal.100", 1, "statDisplays__stat__icon"], ["class", "progressBarArea", 4, "ngIf"], ["size", "x-small", "fillColor", "colors.gold.500", 1, "playerName"], ["size", "x-small", "fillGradient", "gradients.gold.simple", 1, "playerName"], [1, "progressBarArea"], ["kind", "help", 1, "progressBarArea__nextMilestone"], [3, "progress"], [3, "click"], [1, "progressBarArea__nextReward", 3, "autoClose", "title"], [1, "progressBarArea__nextReward__innerSquares", 3, "ngClass"], ["set", "core", 1, "progressBarArea__nextReward__packImage", 3, "god", "rarity"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Ys, 19, 9, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.user)
                },
                directives: [d.O5, xe.K, d.mk],
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                [_nghost-%COMP%] {
                    height: 100%;
                    display: flex;
                    flex-wrap: wrap
                }
                
                .textArea[_ngcontent-%COMP%] {
                    padding-left: calc(var(--vw) * 2.2);
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start
                }
                
                .textArea__centered[_ngcontent-%COMP%] {
                    margin: auto 0
                }
                
                .avatarArea[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 8);
                    height: calc(var(--vw) * 8);
                    position: relative;
                    border-radius: 50%;
                    overflow: hidden;
                    border: calc(var(--vh) * .6) solid #1D2F41;
                    box-shadow: 0 calc(var(--vh) * .6) calc(var(--vh) * 1.3) #0a0a0a99
                }
                
                .avatar__profileImage[_ngcontent-%COMP%] {
                    display: block;
                    width: 100%;
                    border-radius: 50%
                }
                
                .playerName[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * .4);
                    margin-bottom: calc(var(--vh) * 1.2)
                }
                
                .statDisplays[_ngcontent-%COMP%] {
                    display: flex;
                    justify-content: space-between;
                }
                
                .statDisplays__stat[_ngcontent-%COMP%] {
                    display: flex;
                    margin-right: calc(var(--vw) * 1.5);
                }
                
                .statDisplays__stat__icon[_ngcontent-%COMP%] {
                    margin-right: calc(var(--vw) * .5);
                    font-size: .9rem;
                }
                
                .statDisplays__stat__value[_ngcontent-%COMP%] {
                    font-size: .9rem;
                }
                
                .progressBarArea[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 2.2);
                    display: flex;
                    width: 100%;
                    position: relative
                }
                
                .progressBarArea__nextMilestone[_ngcontent-%COMP%] {
                    position: absolute;
                    bottom: 120%;
                    right: 8%
                }
                
                .progressBarArea__nextReward[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 52px;
                    height: 52px;
                    display: flex;
                    transform: translate(50%, -27%)
                }
                
                .progressBarArea__nextReward[_ngcontent-%COMP%] .tooltipBubble--top {
                    margin-top: -24px
                }
                
                .progressBarArea__nextReward__innerSquares[_ngcontent-%COMP%] {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: rotate(45deg);
                    border: 1px solid #C6A052;
                    padding: 4.8px;
                    background: #0F1B27
                }
                
                .progressBarArea__nextReward__innerSquares[_ngcontent-%COMP%]:before {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    border: 1px solid #AFFAED
                }
                
                .glow[_ngcontent-%COMP%] {
                    box-shadow: 0 0 10px #e5e5e5
                }
                
                .progressBarArea__nextReward__packImage[_ngcontent-%COMP%] {
                    margin: auto;
                    width: 48px;
                    transform: translateY(-6%)
                }
                
                gu-hex-progress-bar[_ngcontent-%COMP%] {
                    flex: 1
                }
                `]
            }), o
        })();

        class Js {
            constructor(r, t, n, i, a, s, c) {
                this.title = r, this.description = t, this.imageURL = n, this.linkURL = i, this.startTimestamp = Date.parse(a), this.endTimestamp = Date.parse(s), this.priority = c
            }
        }

        let xn = (() => {
            class o {
                constructor(t) {
                    this.gameApi = t, this.dataStore = {newsItems: []}, this._newsItems$ = new R.X(null), this.loadData()
                }

                get newsItems$() {
                    return this._newsItems$.asObservable()
                }

                getStreamerArticles() {
                    return (0, V.of)([{
                        title: "Streamer FAQ",
                        description: "How do I earn content? How do I sell items? All this and more...",
                        imageURL: "/gu-assets/images/art/catacomb-curator.webp",
                        linkURL: "https://godsunchained.com/",
                        startTimestamp: (new Date).toUTCString(),
                        endTimestamp: this.addWeek(new Date),
                        priority: 0
                    }, {
                        title: "Streamer Update v1",
                        description: "The low down on what we have changed!",
                        imageURL: "/gu-assets/images/art/crypto-kitties-vs-gods-unchained.webp",
                        linkURL: "https://godsunchained.com/",
                        startTimestamp: (new Date).toUTCString(),
                        endTimestamp: this.addWeek(new Date),
                        priority: 0
                    }, {
                        title: "Signing FAQ",
                        description: "What are stats? How do I sign and item?",
                        imageURL: "/gu-assets/images/art/evolution-of-gods-unchained.webp",
                        linkURL: "https://godsunchained.com/",
                        startTimestamp: (new Date).toUTCString(),
                        endTimestamp: this.addWeek(new Date),
                        priority: 0
                    }, {
                        title: "News 4",
                        description: "Some content here",
                        imageURL: "/gu-assets/images/art/hyperion-god-illustration.webp",
                        linkURL: "https://godsunchained.com/",
                        startTimestamp: (new Date).toUTCString(),
                        endTimestamp: this.addWeek(new Date),
                        priority: 0
                    }, {
                        title: "News 5",
                        description: "Some content here",
                        imageURL: "/gu-assets/images/art/C49.webp",
                        linkURL: "https://godsunchained.com/",
                        startTimestamp: (new Date).toUTCString(),
                        endTimestamp: this.addWeek(new Date),
                        priority: 0
                    }, {
                        title: "News 6",
                        description: "Some content here",
                        imageURL: "/gu-assets/images/art/C74.webp",
                        linkURL: "https://godsunchained.com/",
                        startTimestamp: (new Date).toUTCString(),
                        endTimestamp: this.addWeek(new Date),
                        priority: 0
                    }])
                }

                addWeek(t) {
                    return t.setDate(t.getDate() + 7), t.toUTCString()
                }

                loadData() {
                    this.gameApi.get("/news").pipe((0, S.U)(t => this.convertToNewsItems(t)), (0, w.b)(t => {
                        this.dataStore.newsItems = t, this._newsItems$.next(this.dataStore.newsItems)
                    })).subscribe()
                }

                convertToNewsItems(t) {
                    return t.map(n => new Js(n.title, n.description, n.image_url, n.link_url, n.start_timestamp, n.end_timestamp, n.priority))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.Ft))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();
        var Ge = (() => {
            return (o = Ge || (Ge = {})).standardPlayer = "standardPlayer", o.streamer = "streamer", Ge;
            var o
        })();

        function $s(o, r) {
            1 & o && (e.TgZ(0, "figure", 2), e._UZ(1, "img", 3), e.TgZ(2, "figcaption", 4), e.TgZ(3, "h6", 5), e._uU(4, "Marketplace Overlay"), e.qZA(), e.TgZ(5, "div", 6), e._uU(6, " Want to sell your content in your stream? "), e.qZA(), e.qZA(), e._UZ(7, "gu-primary-hex-button", 7), e.qZA())
        }

        function Ws(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "figure", 2), e._UZ(1, "img", 8), e.TgZ(2, "figcaption", 4), e.TgZ(3, "h6", 5), e._uU(4), e.qZA(), e.TgZ(5, "div", 6), e._uU(6), e.qZA(), e.qZA(), e.TgZ(7, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw().gotoNewsItem(i)
                }), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw().$implicit;
                e.xp6(1), e.Q6J("src", t.imageURL, e.LSH), e.xp6(3), e.Oqu(t.title), e.xp6(2), e.hij(" ", t.description, " ")
            }
        }

        function zs(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Ws, 8, 3, "figure", 0), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", n.canDisplay(t))
            }
        }

        let Vs = (() => {
            class o {
                constructor(t) {
                    this.akumaService = t
                }

                ngOnInit() {
                }

                isUserStreamer() {
                    return this.userType === Ge.streamer
                }

                canDisplay(t) {
                    const n = Date.now();
                    let i = !0, a = !1;
                    return t.startTimestamp && n < t.startTimestamp && (i = !1), t.endTimestamp && n > t.endTimestamp && (a = !0), i && !a
                }

                gotoNewsItem(t) {
                    this.akumaService.postControlEvent("gu", "Arena", "", "blog", "Btn", "pressed"), window.location.href = t.linkURL
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-news-list"]],
                inputs: {newsItems: "newsItems", userType: "userType"},
                decls: 2,
                vars: 2,
                consts: [["class", "newsItem", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "newsItem"], ["src", "https://images.godsunchained.com/marketing/Hyperion-1024x533.jpeg", 1, "newsItem__image"], [1, "newsItem__caption"], [1, "newsItem__caption__heading"], [1, "newsItem__caption__subHeading"], ["text", "MORE", "kind", "secondary", 1, "newsItem__linkButton"], [1, "newsItem__image", 3, "src"], ["text", "MORE", "kind", "secondary", 1, "newsItem__linkButton", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, $s, 8, 0, "figure", 0), e.YNc(1, zs, 2, 1, "ng-container", 1)), 2 & t && (e.Q6J("ngIf", (null == n.newsItems ? null : n.newsItems.length) > 0 && n.isUserStreamer()), e.xp6(1), e.Q6J("ngForOf", n.newsItems))
                },
                directives: [d.O5, d.sg],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.newsItem__caption__heading[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.newsItem__caption__subHeading[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.newsItem__caption__heading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.newsItem__caption__subHeading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-left:calc(var(--vw) * 1);padding-right:calc(var(--vw) * 1.5);display:flex;flex-flow:column nowrap;justify-content:flex-start;height:100%;overflow-y:auto}.newsItem[_ngcontent-%COMP%]{margin:0;border-radius:calc(var(--vw) * .45);overflow:hidden;box-shadow:0 calc(var(--vh) * .6) calc(var(--vh) * 3) calc(var(--vh) * .2) #0000004d;margin-left:calc(var(--vw) * -1);margin-right:calc(var(--vw) * -1);height:calc(var(--vh) * 23);margin-bottom:calc(var(--vh) * 2);flex:0 0 auto;position:relative;background:#182531;transition:all .15s ease-in-out}.newsItem[_ngcontent-%COMP%]:after{content:"";border-radius:calc(var(--vw) * .45);position:absolute;top:0;bottom:0;left:0;right:0;box-shadow:inset 0 0 calc(var(--vh) * .9) calc(var(--vh) * .3) #ffffff12,inset 0 0 calc(var(--vh) * .2) #ffffff21;pointer-events:none;user-select:none;z-index:1}.newsItem[_ngcontent-%COMP%]:before{content:"";position:absolute;top:-1px;left:-1px;right:-1px;height:90%;z-index:1;background:linear-gradient(to top,rgba(24,37,49,0) 0%,rgba(24,37,49,.9) 100%)}.newsItem[_ngcontent-%COMP%]:hover   .newsItem__image[_ngcontent-%COMP%]{opacity:.7}.newsItem__image[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * -1);margin-bottom:calc(var(--vh) * -1);width:100%;height:calc(100% + var(--vh) * 2);display:block;object-fit:cover;object-position:center;opacity:.45;transition:opacity .15s ease-in-out;z-index:0}.newsItem__caption[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 2.22);left:calc(var(--vw) * 1.77);z-index:2}.newsItem__cardpacks[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 13)}.newsItem__cardpacks[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:calc(var(--vw) * 6);margin-left:calc(var(--vw) * 1)}.newsItem__cardpacks[_ngcontent-%COMP%]   img.godpack[_ngcontent-%COMP%]{width:calc(var(--vw) * 4)}.newsItem__caption__heading[_ngcontent-%COMP%]{color:#f6f6f6}.newsItem__caption__subHeading[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .05);color:#8be1e0}.newsItem__linkButton[_ngcontent-%COMP%]{bottom:calc(var(--vh) * 2);min-width:calc(var(--vw) * 7.2);position:absolute;right:calc(var(--vw) * 1.77);cursor:pointer;z-index:2}']
            }), o
        })(), Mn = (() => {
            class o {
                constructor(t) {
                    this.contentService = t, this.source = "default", this.userType = Ge.standardPlayer, this.unsubscribe = new M.xQ
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngOnInit() {
                    this.contentService.newsItems$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => null !== t), (0, w.b)(t => {
                        this.newsItems = this.sortNews(t)
                    })).subscribe()
                }

                sortNews(t) {
                    return t.sort((n, i) => {
                        let a = n.priority - i.priority;
                        return 0 === a && (a = (n.startTimestamp ? n.startTimestamp : 0) - (i.startTimestamp ? i.startTimestamp : 0)), a
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(xn))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-news-provider"]],
                inputs: {source: "source", userType: "userType"},
                decls: 1,
                vars: 2,
                consts: [[3, "userType", "newsItems"]],
                template: function (t, n) {
                    1 & t && e._UZ(0, "app-news-list", 0), 2 & t && e.Q6J("userType", n.userType)("newsItems", n.newsItems)
                },
                directives: [Vs],
                styles: ["[_nghost-%COMP%]{display:block}"]
            }), o
        })();

        function js(o, r) {
            if (1 & o && (e._UZ(0, "img", 4), e.ALo(1, "lowercase")), 2 & o) {
                const t = e.oxw();
                e.MGl("src", "/gu-assets/images/gods/no-background/", e.lcZ(1, 1, t.god), "-color-cob.webp", e.LSH)
            }
        }

        function Xs(o, r) {
            1 & o && e._UZ(0, "gu-icon", 5)
        }

        function Ks(o, r) {
            1 & o && e._UZ(0, "gu-icon", 10)
        }

        function ec(o, r) {
            1 & o && e._UZ(0, "gu-icon", 10)
        }

        function tc(o, r) {
            1 & o && e._UZ(0, "gu-icon", 10)
        }

        function nc(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div", 6), e.YNc(2, Ks, 1, 0, "gu-icon", 7), e.qZA(), e.TgZ(3, "div", 8), e.YNc(4, ec, 1, 0, "gu-icon", 7), e.qZA(), e.TgZ(5, "div", 9), e.YNc(6, tc, 1, 0, "gu-icon", 7), e.qZA(), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.ekj("winCircle--complete", t.wins >= 2), e.xp6(1), e.Q6J("ngIf", t.wins >= 2), e.xp6(1), e.ekj("winCircle--complete", t.wins >= 1), e.xp6(1), e.Q6J("ngIf", t.wins >= 1), e.xp6(1), e.ekj("winCircle--complete", t.wins >= 3), e.xp6(1), e.Q6J("ngIf", t.wins >= 3)
            }
        }

        let yn = (() => {
            class o {
                constructor() {
                }

                get isHighlighted() {
                    return this.wins > 0
                }

                get hasUnlockBorder() {
                    return this.unlock && !this.isHighlighted
                }

                get isGreyed() {
                    return !this.unlock && !this.isHighlighted
                }

                get isIndex0() {
                    return 0 === this.index
                }

                get isIndex1() {
                    return 1 === this.index
                }

                get isIndex2() {
                    return 2 === this.index
                }

                get isIndex3() {
                    return 3 === this.index
                }

                get isIndex4() {
                    return 4 === this.index
                }

                get isIndex5() {
                    return 5 === this.index
                }

                ngOnInit() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-god-portrait"]],
                hostVars: 18,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("highlighted", n.isHighlighted)("unlockBorder", n.hasUnlockBorder)("greyed", n.isGreyed)("index--0", n.isIndex0)("index--1", n.isIndex1)("index--2", n.isIndex2)("index--3", n.isIndex3)("index--4", n.isIndex4)("index--5", n.isIndex5)
                },
                inputs: {index: "index", god: "god", wins: "wins", unlock: "unlock"},
                decls: 4,
                vars: 3,
                consts: [[1, "wrapper"], ["alt", "God portrait", "class", "godImage", 3, "src", 4, "ngIf"], ["iconLigature", "padlock", "class", "lock", 4, "ngIf"], [4, "ngIf"], ["alt", "God portrait", 1, "godImage", 3, "src"], ["iconLigature", "padlock", 1, "lock"], [1, "winCircle", "winCircle--0"], ["iconLigature", "game_wins", "class", "winCircle__icon", 4, "ngIf"], [1, "winCircle", "winCircle--1"], [1, "winCircle", "winCircle--2"], ["iconLigature", "game_wins", 1, "winCircle__icon"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e.YNc(1, js, 2, 3, "img", 1), e.YNc(2, Xs, 1, 0, "gu-icon", 2), e.YNc(3, nc, 7, 9, "ng-container", 3), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngIf", n.god), e.xp6(1), e.Q6J("ngIf", !n.god), e.xp6(1), e.Q6J("ngIf", n.wins > 0))
                },
                directives: [d.O5],
                pipes: [d.i8],
                styles: [`
                    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                        margin: 0
                    }
                    
                    body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                        font-family: Open Sans, sans-serif;
                        font-weight: 400
                    }
                    
                    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                        font-family: Unchained, serif;
                        font-weight: 700
                    }
                    
                    [_nghost-%COMP%] {
                        height: calc(var(--vh) * 10);
                        width: calc(var(--vh) * 10);
                        display: flex;
                        flex-direction: column;
                        overflow: hidden;
                        background-color: #000;
                        position: absolute;
                        transform: rotate(45deg)
                    }
                    
                    .unlockBorder[_nghost-%COMP%] {
                        border: 2px solid var(--gu-blue);
                    }
                    
                    .greyed[_nghost-%COMP%] {
                        filter: grayscale(1)
                    }
                    
                    .index--0[_nghost-%COMP%] {
                        top: 0;
                        left: 50%;
                        transform: translate(-50%) rotate(45deg)
                    }
                    
                    .index--1[_nghost-%COMP%] {
                        right: 0;
                        top: 17%
                    }
                    
                    .index--2[_nghost-%COMP%] {
                        right: 0;
                        bottom: 17%
                    }
                    
                    .index--3[_nghost-%COMP%] {
                        bottom: 0;
                        left: 50%;
                        transform: translate(-50%) rotate(45deg)
                    }
                    
                    .index--4[_nghost-%COMP%] {
                        left: 0;
                        bottom: 17%
                    }
                    
                    .index--5[_nghost-%COMP%] {
                        left: 0;
                        top: 17%
                    }
                    
                    .wrapper[_ngcontent-%COMP%] {
                        height: 100%;
                        width: 100%;
                        transform: rotate(-45deg)
                    }
                    
                    .godImage[_ngcontent-%COMP%] {
                        position: relative;
                        margin-top: calc(var(--vh) * -2);
                        margin-top: -20%;
                        margin-left: calc(var(--vh) * -4.2);
                        margin-left: -42%;
                        height: calc(var(--vh) * 20);
                        height: 200%
                    }
                    
                    .godImage--noGod[_ngcontent-%COMP%] {
                        filter: brightness(.1) contrast(0) blur(1px)
                    }
                    
                    .lock[_ngcontent-%COMP%] {
                        color: #272727;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: calc(var(--vh) * 4)
                    }
                    
                    .winCircle[_ngcontent-%COMP%] {
                        width: calc(var(--vh) * 2.5);
                        width: 25%;
                        height: calc(var(--vh) * 2.5);
                        height: 25%;
                        border-radius: 50%;
                        background-color: #000;
                        position: absolute;
                        border: 1px solid var(--gu-yellow);
                    }
                    
                    .winCircle--0[_ngcontent-%COMP%] {
                        left: 11%;
                        bottom: 15%
                    }
                    
                    .winCircle--1[_ngcontent-%COMP%] {
                        left: 50%;
                        transform: translate(-50%);
                        bottom: -10%
                    }
                    
                    .winCircle--2[_ngcontent-%COMP%] {
                        right: 9%;
                        bottom: 15%
                    }
                    
                    .winCircle--complete[_ngcontent-%COMP%] {
                        background: var(--gu-blue);
                        border: none
                    }
                    
                    .winCircle__icon[_ngcontent-%COMP%] {
                        font-size: calc(var(--vh) * 1.9);
                        text-align: center;
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        color: #000
                    }
                    
                    .line[_ngcontent-%COMP%] {
                        position: absolute;
                        width: 500px;
                        height: 1px;
                        border: solid var(--gu-red) 1px;
                    }
                    
                    .top[_ngcontent-%COMP%] {
                        top: 0;
                        left: 50%;
                        transform: translate(-50%)
                    }
                    
                    .bot[_ngcontent-%COMP%] {
                        bottom: 0;
                        left: 50%;
                        transform: translate(-50%)
                    }                
                `]
            }), o
        })(), kn = (() => {
            class o {
                transform(t, n, i = !0) {
                    if (t) {
                        let a = Math.floor((+new Date(t) - +new Date(n)) / 1e3), c = "";
                        return [{unit: 86400, symbol: "d"}, {unit: 3600, symbol: "h"}, {
                            unit: 60,
                            symbol: "m"
                        }, {unit: 1, symbol: "s"}].forEach(l => {
                            const g = Math.floor(a / l.unit);
                            a -= l.unit * g, c += `${g}${l.symbol} `
                        }), i || "-" !== c.slice(0, 1) ? c : "0d 0h 0m 0s"
                    }
                    return t
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275pipe = e.Yjl({name: "dateTo", type: o, pure: !0}), o
        })();

        function oc(o, r) {
            if (1 & o && e._UZ(0, "app-flux-god-portrait", 20), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.Q6J("index", t)("wins", null == n.gauntletSlots[t] ? null : n.gauntletSlots[t].wins)("god", null == n.gauntletSlots[t] ? null : n.gauntletSlots[t].god)("unlock", null == n.gauntletSlots[t] ? null : n.gauntletSlots[t].unlock)
            }
        }

        function ic(o, r) {
            if (1 & o && (e.TgZ(0, "div", 21), e._uU(1), e.ALo(2, "dateTo"), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" New Gauntlet begins in ", e.Dn7(2, 1, t.refreshDate, t.nowDate, !1), " ")
            }
        }

        function rc(o, r) {
            1 & o && (e.TgZ(0, "div", 21), e._uU(1, " Win a game to unlock your gauntlet. "), e.qZA())
        }

        const ac = function () {
            return [0, 1, 2, 3, 4, 5]
        };
        let sc = (() => {
            class o {
                constructor(t, n) {
                    this.modalService = t, this.gauntletService = n, this.gauntletSlots = [], this.gauntletFlux = 0, this.unsubscribe = new M.xQ, this.close = () => {
                        this.modalService.destroyTopModal()
                    }
                }

                ngOnInit() {
                    this.gauntletService.fetchGauntletSlots(), this.initGauntlet(), this.initDate(), this.initGauntletFlux()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get nowDate() {
                    return new Date
                }

                initGauntlet() {
                    this.gauntletService.gauntletSlots$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => this.gauntletSlots = t)
                }

                initDate() {
                    this.gauntletService.refreshDate$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => this.refreshDate = t)
                }

                initGauntletFlux() {
                    this.gauntletService.gauntletFlux$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => this.gauntletFlux = t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(T.Z), e.Y36(ve))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-gauntlet-progress-modal"]],
                decls: 53,
                vars: 5,
                consts: [[1, "gradientOverlay"], [1, "leftArea"], [1, "leftArea__subTitle"], [1, "leftArea__title"], [1, "leftArea__description"], [1, "leftArea__item"], [1, "leftArea__item__number"], [1, "leftArea__item__textArea"], [1, "leftArea__item__textArea__top"], [1, "leftArea__item__textArea__bottom"], [1, "rightArea"], [1, "rightArea__gauntlet"], [3, "index", "wins", "god", "unlock", 4, "ngFor", "ngForOf"], [1, "rightArea__gauntlet__flux"], [1, "rightArea__gauntlet__flux__text"], [1, "rightArea__gauntlet__flux__balance"], ["iconLigature", "flux_symbol", 1, "rightArea__gauntlet__flux__balance__icon"], [1, "rightArea__gauntlet__flux__balance__value"], ["class", "rightArea__countdown", 4, "ngIf"], ["size", "large", "text", "BEGIN", 1, "acceptButton", 3, "click"], [3, "index", "wins", "god", "unlock"], [1, "rightArea__countdown"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "div", 0), e.TgZ(1, "div", 1), e.TgZ(2, "div", 2), e._uU(3, " Flux and Fusing "), e.qZA(), e.TgZ(4, "div", 3), e._uU(5, " gauntlet of the gods "), e.qZA(), e.TgZ(6, "div", 4), e._uU(7, " Battle for each god and be rewarded for your effort "), e.qZA(), e.TgZ(8, "div", 5), e.TgZ(9, "div", 6), e._uU(10, " 1 "), e.qZA(), e.TgZ(11, "div", 7), e.TgZ(12, "div", 8), e._uU(13, " Win Ranked Constructed games "), e.qZA(), e.TgZ(14, "div", 9), e._uU(15, " Unlock gods as you move around the circle "), e.qZA(), e.qZA(), e.qZA(), e.TgZ(16, "div", 5), e.TgZ(17, "div", 6), e._uU(18, " 2 "), e.qZA(), e.TgZ(19, "div", 7), e.TgZ(20, "div", 8), e._uU(21, " Earn Flux "), e.qZA(), e.TgZ(22, "div", 9), e._uU(23, " Fuse identical cards into a better version "), e.qZA(), e.qZA(), e.qZA(), e.TgZ(24, "div", 5), e.TgZ(25, "div", 6), e._uU(26, " 3 "), e.qZA(), e.TgZ(27, "div", 7), e.TgZ(28, "div", 8), e._uU(29, " Enter the Forge "), e.qZA(), e.TgZ(30, "div", 9), e._uU(31, " Use Flux to fuse identical cards into better versions "), e.qZA(), e.qZA(), e.qZA(), e.TgZ(32, "div", 5), e.TgZ(33, "div", 6), e._uU(34, " 4 "), e.qZA(), e.TgZ(35, "div", 7), e.TgZ(36, "div", 8), e._uU(37, " Trade your wares "), e.qZA(), e.TgZ(38, "div", 9), e._uU(39, " Sell cards on the Marketplace for ETH "), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(40, "div", 10), e.TgZ(41, "div", 11), e.YNc(42, oc, 1, 4, "app-flux-god-portrait", 12), e.TgZ(43, "div", 13), e.TgZ(44, "div", 14), e._uU(45, " flux "), e.qZA(), e.TgZ(46, "div", 15), e._UZ(47, "gu-icon", 16), e.TgZ(48, "div", 17), e._uU(49), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.YNc(50, ic, 3, 5, "div", 18), e.YNc(51, rc, 2, 0, "div", 18), e.qZA(), e.TgZ(52, "gu-primary-hex-button", 19), e.NdJ("click", function () {
                        return n.close()
                    }), e.qZA()), 2 & t && (e.xp6(42), e.Q6J("ngForOf", e.DdM(4, ac)), e.xp6(7), e.hij(" ", n.gauntletFlux, " "), e.xp6(1), e.Q6J("ngIf", n.gauntletSlots.length && n.refreshDate), e.xp6(1), e.Q6J("ngIf", !n.gauntletSlots.length))
                },
                directives: [d.sg, d.O5, yn],
                pipes: [kn],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.rightArea__gauntlet__flux__balance__icon[_ngcontent-%COMP%], .rightArea__gauntlet__flux__balance__value[_ngcontent-%COMP%], .leftArea__item__number[_ngcontent-%COMP%], .leftArea__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.rightArea__gauntlet__flux__text[_ngcontent-%COMP%], .leftArea__subTitle[_ngcontent-%COMP%], .rightArea__countdown[_ngcontent-%COMP%], .leftArea__item__textArea__bottom[_ngcontent-%COMP%], .leftArea__description[_ngcontent-%COMP%], .leftArea__item__textArea__top[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.leftArea__item__number[_ngcontent-%COMP%], .leftArea__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.rightArea__gauntlet__flux__balance__value[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 5);line-height:1.3}.rightArea__gauntlet__flux__balance__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 6);line-height:1.3}.leftArea__item__textArea__top[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.rightArea__countdown[_ngcontent-%COMP%], .leftArea__item__textArea__bottom[_ngcontent-%COMP%], .leftArea__description[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.rightArea__gauntlet__flux__text[_ngcontent-%COMP%], .leftArea__subTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;justify-content:space-evenly;position:relative;margin:auto;margin-top:calc(var(--vh) * 5);width:calc(var(--vw) * 70);height:calc(var(--vh) * 80);border:1px solid #182531;background-image:url(/gu-assets/images/backgrounds/trader-overlay-bg.webp);background-size:cover;background-position:center}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.gradientOverlay[_ngcontent-%COMP%]{position:absolute;width:calc(var(--vw) * 70);height:calc(var(--vh) * 80);border:1px solid #182531;background:radial-gradient(ellipse at center,rgba(12,22,32,0) -80%,#0c1620 70%)}.flexWrapper[_ngcontent-%COMP%]{display:flex}.leftArea[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 10);display:flex;flex-flow:column nowrap}.leftArea__subTitle[_ngcontent-%COMP%]{text-transform:uppercase}.leftArea__title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-transform:uppercase}.leftArea__description[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.5);margin-bottom:calc(var(--vh) * 1)}.leftArea__item[_ngcontent-%COMP%]{display:flex;margin-top:calc(var(--vh) * 3)}.leftArea__item__button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.leftArea__item__number[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.leftArea__item__textArea[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;margin-left:calc(var(--vh) * 2);align-self:center}.leftArea__item__textArea__bottom[_ngcontent-%COMP%]{font-style:italic}.rightArea[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;margin-left:calc(var(--vh) * 2)}.rightArea__gauntlet[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 10);position:relative;height:calc(var(--vh) * 40);width:calc(var(--vh) * 40)}.rightArea__gauntlet__flux[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column}.rightArea__gauntlet__flux__text[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center}.rightArea__gauntlet__flux__balance[_ngcontent-%COMP%]{display:flex}.rightArea__gauntlet__flux__balance__icon[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.rightArea__gauntlet__flux__balance__value[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-left:calc(var(--vh) * 1)}.rightArea__countdown[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:calc(var(--vh) * 20);text-align:center;font-style:italic;color:#8295a2}.acceptButton[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);bottom:5%}"]
            }), o
        })();

        function cc(o, r) {
            1 & o && e._UZ(0, "app-rectangular-spinner", 4)
        }

        function lc(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-cards-list", 5), e.NdJ("selectCardId", function (i) {
                    return e.CHM(t), e.oxw().selectCardId(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("protoCards", t.protoCards)("inventoryCards", t.inventoryCards)("god", t.god)("filterCardIds", t.deckCardIds)("customInventoryCardsMap", t.customInventoryCardsMap)
            }
        }

        function dc(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-active-deck", 6), e.NdJ("selectCards", function (i) {
                    return e.CHM(t), e.oxw().removeCards(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("deckCards", t.deckCards)("deckSelectMode", t.deckSelectMode)("gameModeID", t.gameModeID)("deck", t.activeDeck)("forAI", t.forAI)
            }
        }

        let On = (() => {
            class o {
                constructor(t, n, i, a, s, c, l) {
                    this.decksService = t, this.cardsService = n, this.modalService = i, this.moduleConfigService = a, this.audioService = s, this.akumaService = c, this.sealedService = l, this.filters = _.iZ.standardCardFilters(f.nE.All, f.PE.AscID, "genesis", ""), this.availableFilters = [{
                        name: "Quality",
                        options: _.iZ.qualityOptions
                    }, {name: "Rarity", options: _.iZ.rarityOptions}, {
                        name: "Tribe",
                        options: _.iZ.tribeOptions
                    }, {name: "Mana", options: _.iZ.manaOptions}, {
                        name: "Set",
                        options: _.iZ.setOptions
                    }], this.loading = !1, this.deckSelectMode = !1, this.unsubscribe = new M.xQ, this.protoCards = [], this.deckCardIds = [], this.destroyModal = () => {
                        this.modalService.destroyTopModal(), this.akumaService.postControlEvent("gu", "MyDecks", "", "close", "Btn", "pressed")
                    }
                }

                ngOnInit() {
                    this.initDecks(), this.initSelectMode(), this.initCards()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initSelectMode() {
                    this.decksService.deckSelectMode$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => {
                        this.deckSelectMode = t.deckSelect, this.gameModeID = t.gameModeID, this.forAI = t.forAI
                    })).subscribe()
                }

                initDecks() {
                    this.decksService.activeDeckChange$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => null !== t), (0, w.b)(t => this.onActiveDeckChange(t))).subscribe()
                }

                onActiveDeckChange(t) {
                    switch (t.type) {
                        case ie.u4.Change:
                            this.selectNewDeck(t.deck);
                            break;
                        case ie.u4.CardLimit:
                        case ie.u4.DeckLimit:
                            break;
                        default:
                            this.selectNewDeck(t.deck)
                    }
                }

                selectNewDeck(t) {
                    this.activeDeck = t, this.deckCards = [...t.items], this.deckCardIds = [...t.items.map(n => n.id)]
                }

                initCards() {
                    this.loading = !0, (0, D.aj)([this.sealedService.sealedMode$, this.cardsService.protoCards$]).pipe((0, u.R)(this.unsubscribe), (0, P.h)(([t, n]) => t && n && n.size > 0)).subscribe(([t, n]) => {
                        const i = Array.from(n.values()).filter(s => t.protos.includes(s.proto));
                        this.sealedMode = t;
                        const a = t.protos.map((s, c) => {
                            const l = this.decksService.generateUniqueCardId(O.B_.SEALED_DECK, s, c);
                            return new f.Zb(l, s, 5, n.get(s))
                        });
                        this.customInventoryCardsMap = this.createInventoryCardsMap(a), this.inventoryCards = a, this.protoCards = i, this.loading = !1
                    })
                }

                createInventoryCardsMap(t) {
                    const n = {};
                    return t.forEach(i => {
                        const a = {q: i.quality, id: i.id};
                        n[i.proto] ? n[i.proto].push(a) : n[i.proto] = [a]
                    }), n
                }

                removeCards(t) {
                    this.audioService.clickItemV1.play(), this.decksService.removeCardsFromActiveDeck(t)
                }

                selectCardId(t) {
                    const n = this.inventoryCards.find(i => i.id === t);
                    this.decksService.pushToActiveDeck(n)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(j.D), e.Y36(_.dK), e.Y36(T.Z), e.Y36(_.LE), e.Y36(h.pk), e.Y36(_.jt), e.Y36(Y.H))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-sealed-deck-builder"]],
                decls: 4,
                vars: 4,
                consts: [[3, "closeButtonClickFn"], ["class", "spinner", 4, "ngIf"], ["class", "card-selection", 3, "protoCards", "inventoryCards", "god", "filterCardIds", "customInventoryCardsMap", "selectCardId", 4, "ngIf"], [3, "deckCards", "deckSelectMode", "gameModeID", "deck", "forAI", "selectCards", 4, "ngIf"], [1, "spinner"], [1, "card-selection", 3, "protoCards", "inventoryCards", "god", "filterCardIds", "customInventoryCardsMap", "selectCardId"], [3, "deckCards", "deckSelectMode", "gameModeID", "deck", "forAI", "selectCards"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.YNc(1, cc, 1, 0, "app-rectangular-spinner", 1), e.YNc(2, lc, 1, 5, "app-cards-list", 2), e.YNc(3, dc, 1, 5, "app-active-deck", 3)), 2 & t && (e.Q6J("closeButtonClickFn", n.destroyModal), e.xp6(1), e.Q6J("ngIf", n.loading), e.xp6(1), e.Q6J("ngIf", !n.loading), e.xp6(1), e.Q6J("ngIf", n.activeDeck))
                },
                directives: [ue, d.O5, Je, yt, cn],
                styles: ["[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 calc(var(--vh) * 7.7);padding-top:calc(var(--vh) * 4.5);height:100%}app-cards-list[_ngcontent-%COMP%]{flex:1}app-active-deck[_ngcontent-%COMP%]{height:calc(var(--vh) * 37)}.spinner[_ngcontent-%COMP%]{margin:auto}.exportCta[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 3);right:calc(var(--vh) * 17)}"]
            }), o
        })();
        var gc = p(98590);

        function pc(o, r) {
            1 & o && e._UZ(0, "app-card2", 10), 2 & o && e.Q6J("protoId", r.$implicit)
        }

        const uc = function (o, r, t) {
            return {"bottomSection__cards--three": o, "bottomSection__cards--four": r, "bottomSection__cards--five": t}
        };
        let _c = (() => {
            class o {
                constructor(t) {
                    this.activeModal = t, this.unownedProtos = []
                }

                secondaryCtaClick() {
                    this.activeModal.close({success: !1})
                }

                primaryCtaClick() {
                    this.activeModal.close({success: !0})
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(B.mX))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-deck-codes-unowned-cards-modal"]],
                inputs: {unownedProtos: "unownedProtos"},
                decls: 13,
                vars: 8,
                consts: [["background", "87055", 3, "onCloseSealedDeckModal"], ["slot", "topSectionSubtitle", "fillColor", "colors.light.300", "kind", "large", "align", "left", "fontWeight", "bold", 1, "topSection__subtitle"], ["slot", "topSectionTitle", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "large"], ["slot", "topSectionHelptext", "fillColor", "colors.light.500", "kind", "help", "align", "left", 1, "topSection__subtitle"], ["slot", "bottomSectionContent", "top", "large", "bottom", "small"], ["bottom", "large", 1, "bottomSection__cards", 3, "ngClass"], ["class", "bottomSection__cards__card", 3, "protoId", 4, "ngFor", "ngForOf"], ["slot", "bottomSectionCta", 1, "ctaSection"], ["size", "large", "text", "GO BACK", 1, "ctaSection__button", 3, "click"], ["size", "large", "text", "CONTINUE", 1, "ctaSection__button", 3, "click"], [1, "bottomSection__cards__card", 3, "protoId"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-two-section-modal", 0), e.NdJ("onCloseSealedDeckModal", function () {
                        return n.secondaryCtaClick()
                    }), e.TgZ(1, "gu-paragraph-text", 1), e._uU(2, " Some cards could not be imported "), e.qZA(), e.TgZ(3, "gu-heading-text", 2), e._uU(4, " You don't own these cards "), e.qZA(), e.TgZ(5, "gu-paragraph-text", 3), e._uU(6), e.qZA(), e.TgZ(7, "gu-vertical-space", 4), e.TgZ(8, "gu-vertical-space", 5), e.YNc(9, pc, 1, 1, "app-card2", 6), e.qZA(), e.qZA(), e.TgZ(10, "gu-vertical-space", 7), e.TgZ(11, "gu-secondary-hex-button", 8), e.NdJ("click", function () {
                        return n.secondaryCtaClick()
                    }), e.qZA(), e.TgZ(12, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                        return n.primaryCtaClick()
                    }), e.qZA(), e.qZA(), e.qZA()), 2 & t && (e.xp6(6), e.AsE(" ", n.unownedProtos.length, " card", 1 === n.unownedProtos.length ? "" : "s", " missing. Hit continue to continue deck building "), e.xp6(2), e.Q6J("ngClass", e.kEZ(4, uc, n.unownedProtos.length <= 3, 4 == n.unownedProtos.length, n.unownedProtos.length >= 5)), e.xp6(1), e.Q6J("ngForOf", n.unownedProtos))
                },
                directives: [d.mk, d.sg, H],
                styles: [".bottomSection__cards--three[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center}.bottomSection__cards--three[_ngcontent-%COMP%]   .bottomSection__cards__card[_ngcontent-%COMP%]{width:240px}.bottomSection__cards--four[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center}.bottomSection__cards--four[_ngcontent-%COMP%]   .bottomSection__cards__card[_ngcontent-%COMP%]{width:200px}.bottomSection__cards--five[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr)}.bottomSection__cards--five[_ngcontent-%COMP%]   .bottomSection__cards__card[_ngcontent-%COMP%]{width:160px}.bottomSection__cards__card[_ngcontent-%COMP%]{margin:0 16px;width:160px}.ctaSection[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.ctaSection__button[_ngcontent-%COMP%]{min-width:200px}.ctaSection__button[_ngcontent-%COMP%]:nth-child(2){margin-left:16px}"]
            }), o
        })();
        const hc = function () {
            return ["deckCode"]
        };
        let Pn = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.activeModal = t, this.deckCodeService = n, this.decksService = i, this.modalService = a, this.cerberusModalService = s, this.valid = !1, this.loading = !1
                }

                importClick() {
                    this.deckCodeService.decodeDeckCode(this.deckCode).pipe((0, x.q)(1)).subscribe(({
                                                                                                        ownedCards: t,
                                                                                                        unownedProtos: n,
                                                                                                        domain: i
                                                                                                    }) => {
                        t && t.length || n && n.length ? n && n.length ? this.showUnownedCardsModal(t, n, i) : this.openDeckbuilder(i, t) : this.showErrorModal()
                    }, t => {
                        this.showErrorModal(t.message)
                    })
                }

                showUnownedCardsModal(t, n, i) {
                    const a = this.cerberusModalService.open(_c);
                    a.componentInstance.unownedProtos = n, a.result.then(({success: c}) => {
                        c && this.openDeckbuilder(i, t)
                    }, () => {
                    })
                }

                openDeckbuilder(t, n) {
                    this.loading = !0, this.decksService.createDeck(new ie.$$(-1, "Imported Deck", t, "common", n)).pipe((0, x.q)(1)).subscribe(i => {
                        this.loading = !1, this.decksService.updateDeckSelectMode(!1), this.activeModal.close(), this.decksService.selectActiveDeck(i), this.modalService.createModal(De, {}, {
                            blurredBackground: !0,
                            canCloseFromOutside: !1,
                            position: m.e1.Center,
                            size: m.Cg.Workarea
                        })
                    }, i => {
                        this.loading = !1, this.showErrorModal()
                    })
                }

                showErrorModal(t = "Something went wrong, try again, or contact our support team.") {
                    const i = this.cerberusModalService.open(gc.I, {
                        defaultStylings: !1,
                        centered: !0
                    }).componentInstance;
                    i.title = "DECK COULD NOT BE IMPORTED", i.text = t, i.ctaText = "BACK", i.iconLigature = "alert_triangle", i.iconFillColor = "colors.god.war.primary"
                }

                onValueChange(t) {
                    const {newValue: n, valid: i} = t.detail;
                    this.deckCode = n, this.valid = i
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(B.mX), e.Y36(tn.R), e.Y36(j.D), e.Y36(T.Z), e.Y36(B.Qz))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-deck-codes-import-modal"]],
                decls: 14,
                vars: 5,
                consts: [["goldBorder", "top"], ["top", "2x-large"], ["align", "center", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "small"], ["top", "large"], ["align", "center", "kind", "small", "fontWeight", "bold", "fillColor", "colors.light.100"], [1, "inputSection"], ["align", "center", "placeholderText", "Enter a deck code here", "errorHelpText", "Please enter a valid deck code", 1, "inputSection__input", 3, "validateToPattern", "valid", "onValueChange"], ["align", "center", "kind", "help", "fontWeight", "bold", "fillColor", "colors.light.500"], ["top", "2x-large", "bottom", "3x-large"], ["size", "large", 1, "cta", 3, "loading", "disabled", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "gu-modal-background", 0), e.TgZ(1, "gu-vertical-space", 1), e.TgZ(2, "gu-heading-text", 2), e._uU(3, " Import a gods unchained deck "), e.qZA(), e.qZA(), e.TgZ(4, "gu-vertical-space", 3), e.TgZ(5, "gu-paragraph-text", 4), e._uU(6, " Deck Code "), e.qZA(), e.qZA(), e.TgZ(7, "gu-vertical-space", 5), e.TgZ(8, "gu-text-input", 6), e.NdJ("onValueChange", function (a) {
                        return n.onValueChange(a)
                    }), e.qZA(), e.TgZ(9, "gu-paragraph-text", 7), e._uU(10, " This can be from a friend or one you found online "), e.qZA(), e.qZA(), e.TgZ(11, "gu-vertical-space", 8), e.TgZ(12, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                        return n.importClick()
                    }), e._uU(13, " Import "), e.qZA(), e.qZA()), 2 & t && (e.xp6(8), e.Q6J("validateToPattern", e.DdM(4, hc))("valid", n.valid), e.xp6(4), e.Q6J("loading", n.loading)("disabled", !n.valid))
                },
                styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:750px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.inputSection[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:80px;width:100%;flex-direction:column}.inputSection__input[_ngcontent-%COMP%]{width:100%;margin-bottom:4px}.copySection__cta[_ngcontent-%COMP%]{min-width:120px}.copySection__cta--copied[_ngcontent-%COMP%]{cursor:default}"]
            }), o
        })();
        const mc = [{
            name: "deception",
            title: "Ludia",
            description: "Goddess of Deception",
            playstyle: "Are you paying attention? <br><br> Good deception players don\u2019t always move first, but they should always be one step ahead of their opponent. <br><br> You just need to be inside your opponent's head. Preferably to the hilt.",
            unavailable: !1
        }, {
            name: "death",
            title: "Malissus",
            description: "Goddess of Death",
            playstyle: "Everything has a price. <br><br> Death players can expect some of the strongest abilities in the game, but true power can only be achieved through sacrifice. <br><br> To really understand Death, you must be close to it.",
            unavailable: !1
        }, {
            name: "light",
            title: "Thaeriel",
            description: "God of Light",
            playstyle: "Take a leap of faith. <br><br> Thaeriel's disciples can be either zealous evangelists or stalwart apologists, but doctrine must be preserved. <br><br> Healing salvation is coming, your subjects just need a little more faith.",
            unavailable: !1
        }, {
            name: "magic",
            title: "Elyrian",
            description: "God of Magic",
            playstyle: "Patience is a virtue. <br><br> The most complex problems require the most elegant plans. Understanding every piece of the puzzle is the key to a perfect solution. <br><br> Even if that perfect solution is just a really big fireball.",
            unavailable: !1
        }, {
            name: "nature",
            title: "Aeona",
            description: "Goddess of Nature",
            playstyle: "No <i>man</i> may tame the wild. <br><br> You can\u2019t control a river, but you can direct it. To flourish you must follow your instincts, roll with the punches and trust in Aeona. <br><br> Nature will provide in the most unexpected ways.",
            unavailable: !1
        }, {
            name: "war",
            title: "Auros",
            description: "God of War",
            playstyle: "Lead from the front. <br><br> Your disciples are the greatest warriors alive, but they will not accept anything less than complete ferocity from their leader. Luckily, you know no other way. <br><br> There's always a bigger fish.",
            unavailable: !1
        }];

        function fc(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().importDeck()
                }), e._uU(1, " Import deck\n"), e.qZA()
            }
        }

        function Cc(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 8), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw();
                    return !a.unavailable && s.selectGod(a.name)
                })("mouseenter", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw();
                    return !a.unavailable && s.playHoverItem()
                }), e.TgZ(1, "div", 9), e._UZ(2, "img", 10), e.TgZ(3, "h2", 11), e._uU(4), e.qZA(), e.TgZ(5, "div", 12), e._uU(6), e.qZA(), e._UZ(7, "div", 13), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit;
                e.ekj("god--unavailable", t.unavailable), e.xp6(2), e.Q6J("src", "/gu-assets/images/gods/" + t.name + "-medium.webp", e.LSH), e.xp6(2), e.Oqu(t.title), e.xp6(2), e.Oqu(t.description), e.xp6(1), e.Q6J("innerHTML", t.playstyle, e.oJD)
            }
        }

        function vc(o, r) {
            1 & o && (e.TgZ(0, "div", 14), e._UZ(1, "img", 15), e._UZ(2, "img", 16), e._UZ(3, "img", 17), e._UZ(4, "img", 18), e._UZ(5, "img", 19), e._UZ(6, "img", 20), e.qZA())
        }

        let Sn = (() => {
            class o {
                constructor(t, n, i, a, s, c) {
                    this.modalService = t, this.decksService = n, this.authService = i, this.audioService = a, this.akumaService = s, this.cerberusModalService = c, this.deckSelect = !1, this.onGodSelect = () => {
                    }, this.gods = mc, this.unsubscribe = new M.xQ, this.GuGameModeType = O.tO, this.Flags = _.vU, this.close = () => {
                        this.akumaService.postControlEvent("gu", "GodChoose", "", "close", "Btn", "pressed"), this.modalService.destroyTopModal()
                    }
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                selectGod(t) {
                    this.akumaService.postControlEvent("gu", "GodChoose", "", "godSelect", "Btn", "pressed"), this.audioService.clickMediumV2.play(), this.gameModeType === O.tO.SEALED_DECK ? this.onGodSelect(t, this.close.bind(this)) : this.handleDeckBuilder(t)
                }

                handleDeckBuilder(t) {
                    this.decksService.createDeck(new ie.$$(-1, "Custom Deck", t, "common")).pipe((0, x.q)(1)).subscribe(() => {
                        this.deckSelect ? this.decksService.updateDeckSelectMode(!0, this.gameModeId, this.forAI) : this.decksService.updateDeckSelectMode(!1), this.close(), this.modalService.createModal(De, {deckSelectMode: this.deckSelect}, {
                            blurredBackground: !0,
                            canCloseFromOutside: !0,
                            position: m.e1.Center,
                            size: m.Cg.Workarea
                        })
                    })
                }

                playHoverItem() {
                    this.audioService.hoverItem.play()
                }

                importDeck() {
                    this.modalService.destroyTopModal(), this.cerberusModalService.open(Pn)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(T.Z), e.Y36(j.D), e.Y36(h.mI), e.Y36(h.pk), e.Y36(_.jt), e.Y36(B.Qz))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-god-select-modal"]],
                inputs: {
                    gameModeType: "gameModeType",
                    gameModeId: "gameModeId",
                    forAI: "forAI",
                    deckSelect: "deckSelect",
                    onGodSelect: "onGodSelect"
                },
                decls: 9,
                vars: 4,
                consts: [[3, "closeButtonClickFn"], [1, "pageTitle"], [1, "pageDescription"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.apocyan.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_download", "class", "importDeckCta", 3, "click", 4, "featureFlagIf"], [1, "godListing"], ["class", "god", 3, "god--unavailable", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "sealedPreloadSection", "style", "width: 1px; height: 1px; visibility: hidden; overflow: hidden", 4, "ngIf"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.apocyan.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_download", 1, "importDeckCta", 3, "click"], [1, "god", 3, "click", "mouseenter"], [1, "god__inner"], ["alt", "Illustration of God", 1, "god__image", 3, "src"], [1, "god__title"], [1, "god__description"], [1, "god__playStyle", 3, "innerHTML"], [1, "sealedPreloadSection", 2, "width", "1px", "height", "1px", "visibility", "hidden", "overflow", "hidden"], ["src", "https://images.godsunchained.com/god-art/1024/nature--aeona.webp"], ["src", "https://images.godsunchained.com/god-art/1024/war--auros.webp"], ["src", "https://images.godsunchained.com/god-art/1024/magic--elyrian.webp"], ["src", "https://images.godsunchained.com/god-art/1024/death--malissus.webp"], ["src", "https://images.godsunchained.com/god-art/1024/light--thaeriel.webp"], ["src", "https://images.godsunchained.com/god-art/1024/deception--ludia.webp"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.TgZ(1, "h1", 1), e._uU(2, "Choose a God"), e.qZA(), e.TgZ(3, "p", 2), e._uU(4, "Each deck must be aligned to a God. Choose which one you'd like to build around."), e.qZA(), e.YNc(5, fc, 2, 0, "gu-plain-square-button", 3), e.TgZ(6, "div", 4), e.YNc(7, Cc, 8, 6, "div", 5), e.qZA(), e.YNc(8, vc, 7, 0, "div", 6)), 2 & t && (e.Q6J("closeButtonClickFn", n.close), e.xp6(5), e.Q6J("featureFlagIf", n.Flags.deckCodesEnabled), e.xp6(2), e.Q6J("ngForOf", n.gods), e.xp6(1), e.Q6J("ngIf", n.gameModeType === n.GuGameModeType.SEALED_DECK))
                },
                directives: [ue, Ye.w, d.sg, d.O5],
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                .pageTitle[_ngcontent-%COMP%], .god__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .god__description[_ngcontent-%COMP%], .god__playStyle[_ngcontent-%COMP%], .pageDescription[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .god__title[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 3.7);
                    line-height: 1.3
                }
                
                .pageTitle[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 5);
                    line-height: 1.3
                }
                
                .god__description[_ngcontent-%COMP%], .god__playStyle[_ngcontent-%COMP%], .pageDescription[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.48)
                }
                
                .god__playStyle[_ngcontent-%COMP%], .pageDescription[_ngcontent-%COMP%] {
                    line-height: 1.4
                }
                
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    width: 100%;
                    height: calc(calc(var(--vh) * 100) - 28px - 80px);
                    display: flex;
                    flex-flow: column nowrap;
                    text-align: center;
                    padding: 0 80px;
                    padding-top: calc(var(--vh) * 5)
                }
                
                .pageTitle[_ngcontent-%COMP%] {
                    margin-bottom: calc(var(--vh) * 1);
                    background: var(--gu-yellow);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent
                }
                
                .pageDescription[_ngcontent-%COMP%] {
                    color: var(--gu-gray);
                }
                
                .godListing[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 1);
                    grid-column-gap: calc(var(--vw) * .6);
                    display: grid;
                    grid-template-columns:repeat(6, 1fr)
                }
                
                .god[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 14.84);
                    height: calc(var(--vh) * 63);
                    display: flex;
                    background: linear-gradient(to bottom, #affaed 0%, #8be1e0 50%, #54bbcd 100%);
                    border-radius: calc(var(--vh) * .4);
                    color: var(--gu-gray);
                    cursor: pointer
                }
                
                .god[_ngcontent-%COMP%]:hover:not(.god--unavailable) .god__image[_ngcontent-%COMP%] {
                    opacity: 1;
                    z-index: 1;
                }
                
                .god--unavailable[_ngcontent-%COMP%] {
                    color: #7192b0;
                    background: #1d2f41;
                    cursor: default
                }
                
                .god--unavailable[_ngcontent-%COMP%] .god__inner[_ngcontent-%COMP%] {
                    background: #0c1620
                }
                
                .god--unavailable[_ngcontent-%COMP%] .god__image[_ngcontent-%COMP%] {
                    opacity: .1;
                }
                
                .god__inner[_ngcontent-%COMP%] {
                    padding: calc(var(--vw) * 1.5);
                    margin: calc(var(--vh) * .18);
                    flex: 1;
                    border-radius: calc(var(--vh) * .4);
                    background: var(--gu-blue-dark);
                    overflow: hidden;
                    position: relative
                }
                
                .god__image[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    opacity: .35;
                }
                
                .god__title[_ngcontent-%COMP%] {
                    position: relative
                }
                
                .god__description[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * .5);
                    padding-bottom: calc(var(--vh) * 2.96);
                    color: var(--gu-gray);
                    position: relative
                }
                
                .god__playStyle[_ngcontent-%COMP%] {
                    position: relative;
                    padding: 8px;
                    background: rgba(0,0,0,0.25);
                }
                
                .sealedPreloadSection[_ngcontent-%COMP%] {
                    width: 1px;
                    height: 1px;
                    visibility: hidden;
                    overflow: hidden
                }
                
                .importDeckCta[_ngcontent-%COMP%] {
                    position: absolute;
                    right: 100px
                }
                `]
            }), o
        })();

        function bc(o, r) {
            if (1 & o && e._UZ(0, "app-modal-sidebar", 8), 2 & o) {
                const t = e.oxw();
                e.Q6J("closeButtonClickFn", t.destroyModal)
            }
        }

        function wc(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 9), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().importDeck()
                }), e._uU(1, " Import deck "), e.qZA()
            }
        }

        function xc(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-deck", 10), e.NdJ("selectDeck", function (i) {
                    return e.CHM(t), e.oxw().selectDeck(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.Q6J("displayGauntlet", n.displayGauntlets)("deck", t)("showDeckName", !0)("hideGodName", !0)
            }
        }

        class Oe {
            constructor(r, t) {
                this.name = r, this.type = t
            }
        }

        var le = (() => {
            return (o = le || (le = {}))[o.Death = 0] = "Death", o[o.Deception = 1] = "Deception", o[o.Light = 2] = "Light", o[o.Magic = 3] = "Magic", o[o.Nature = 4] = "Nature", o[o.War = 5] = "War", le;
            var o
        })();
        let Zt = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.decksService = t, this.modalService = n, this.akumaService = i, this.audioService = a, this.cerberusModalService = s, this.modalHosted = !1, this.forAI = !1, this.deckBuilderDeckSelect = !1, this.currentlyEditingDeckName = "", this.unsubscribe = new M.xQ, this.godFilters = [new Oe("Death", le.Death), new Oe("Deception", le.Deception), new Oe("Light", le.Light), new Oe("Magic", le.Magic), new Oe("Nature", le.Nature), new Oe("War", le.War)], this.activeGodFilters = [], this.Flags = _.vU, this.destroyModal = () => {
                        this.audioService.clickTinyV2.play(), this.modalService.destroyTopModal()
                    }
                }

                ngOnInit() {
                    this.initDecks(), this.initGameModes()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get bindModalHosted() {
                    return this.modalHosted
                }

                trackDecksBy(t, n) {
                    return n.items.reduce((i, a) => `${i},${a.id}`, n.id + ":")
                }

                initDecks() {
                    this.allDecks$ = (0, D.aj)([this.decksService.starterDecks$, this.decksService.userDecks$]).pipe((0, S.U)(([t, n]) => [...t, ...n.filter(a => "common" === a.deck_type).sort((d1, d2) => {
                        if (d1.god < d2.god) {
                            return -1;
                        }
                        if (d1.god > d2.god) {
                            return 1;
                        }
                        if (d1.name < d2.name) {
                            return -1;
                        }
                        if (d1.name > d2.name) {
                            return 1;
                        }
                        return 0;
                    })])), this.filteredDecks$ = this.allDecks$
                }

                initGameModes() {
                    void 0 !== this.gameModeId && (this.deckBuilderDeckSelect = !0), this.displayGauntlets = this.isRankedConstructed
                }

                get isRankedConstructed() {
                    return this.gameModeId === O.B_.RANKED_CONSTRUCTED
                }

                newDeck() {
                    this.akumaService.postControlEvent("gu", "MyDecks", "", "createDeck", "Btn", "pressed"), this.audioService.clickItemV2.play(), this.modalService.createModal(Sn, {
                        gameModeType: this.gameModeType,
                        gameModeId: this.gameModeId,
                        forAI: this.forAI,
                        deckSelect: this.deckBuilderDeckSelect
                    }, {blurredBackground: !0, canCloseFromOutside: !1, position: m.e1.Center, size: m.Cg.Workarea})
                }

                getFilteredStream(t, n) {
                    return t.pipe((0, S.U)(i => i.filter(a => this.filterStream(a, n))))
                }

                filterStream(t, n) {
                    const i = n.map(a => a.name.toLowerCase());
                    return !(n.length > 0 && -1 === i.indexOf(t.god.toLowerCase()))
                }

                filterDecks(t) {
                    this.filteredDecks$ = this.getFilteredStream(this.allDecks$, t)
                }

                godFilterChange(t) {
                    this.activeGodFilters = t, this.filterDecks(this.activeGodFilters)
                }

                selectDeck(t) {
                    this.akumaService.postControlEvent("gu", "MyDecks", "", "deckChosen", "Btn", "pressed"), this.deckBuilderDeckSelect ? this.deckBuilderDeckSelect && (this.decksService.updateDeckSelectMode(!0, this.gameModeId, this.forAI), this.audioService.workshopCustomize.play(), this.decksService.selectActiveDeck(t), this.modalService.createModal(De, {}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })) : (this.audioService.workshopCustomize.play(), this.decksService.updateDeckSelectMode(!1), this.decksService.selectActiveDeck(t), this.modalService.createModal(De, {}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    }))
                }

                importDeck() {
                    this.cerberusModalService.open(Pn, {defaultStylings: !1, centered: !0})
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(j.D), e.Y36(T.Z), e.Y36(_.jt), e.Y36(h.pk), e.Y36(B.Qz))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-my-decks"]],
                hostVars: 2,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("modal-hosted", n.bindModalHosted)
                },
                inputs: {
                    modalHosted: "modalHosted",
                    gameModeId: "gameModeId",
                    gameModeType: "gameModeType",
                    forAI: "forAI"
                },
                decls: 10,
                vars: 8,
                consts: [[3, "closeButtonClickFn", 4, "ngIf"], [1, "titleAndFiltering"], [1, "titleAndFiltering__filtering", 3, "godFilters", "displayGroupingName", "godFilterChangeList"], [1, "titleAndFiltering__title"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.apocyan.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_download", "class", "importDeckCta", 3, "click", 4, "featureFlagIf"], [1, "decksListing"], ["text", "Create a Deck", 1, "createButton", 3, "click"], ["class", "deck", "width", "calc(var(--vw) * 8.6)", "emptyContainerWidth", "calc(var(--vw) * 8.6)", "emptyContainerHeight", "calc(var(--vh) * 22)", 3, "displayGauntlet", "deck", "showDeckName", "hideGodName", "selectDeck", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "closeButtonClickFn"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.apocyan.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_download", 1, "importDeckCta", 3, "click"], ["width", "calc(var(--vw) * 8.6)", "emptyContainerWidth", "calc(var(--vw) * 8.6)", "emptyContainerHeight", "calc(var(--vh) * 22)", 1, "deck", 3, "displayGauntlet", "deck", "showDeckName", "hideGodName", "selectDeck"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, bc, 1, 1, "app-modal-sidebar", 0), e.TgZ(1, "header", 1), e.TgZ(2, "app-grouping-bar", 2), e.NdJ("godFilterChangeList", function (a) {
                        return n.godFilterChange(a)
                    }), e.qZA(), e.TgZ(3, "h3", 3), e._uU(4, "My Decks (Sorted by God, Name)"), e.qZA(), e.YNc(5, wc, 2, 0, "gu-plain-square-button", 4), e.qZA(), e.TgZ(6, "div", 5), e.TgZ(7, "app-create-new-button", 6), e.NdJ("click", function () {
                        return n.newDeck()
                    }), e.qZA(), e.YNc(8, xc, 1, 4, "app-deck", 7), e.ALo(9, "async"), e.qZA()), 2 & t && (e.Q6J("ngIf", n.modalHosted), e.xp6(2), e.Q6J("godFilters", n.godFilters)("displayGroupingName", !1), e.xp6(3), e.Q6J("featureFlagIf", n.Flags.deckCodesEnabled), e.xp6(3), e.Q6J("ngForOf", e.lcZ(9, 6, n.filteredDecks$))("ngForTrackBy", n.trackDecksBy))
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.titleAndFiltering__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.titleAndFiltering__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;height:calc(calc(var(--vh) * 100) - 28px - 80px)}.titleAndFiltering[_ngcontent-%COMP%]{display:flex;padding-top:calc(var(--vh) * 2);top:calc(var(--vh) * 1.5);justify-content:space-between;align-items:center;margin:0 80px;min-height:calc(calc(var(--vh) * 9) - calc(var(--vh) * 1.5));border-bottom:2px #1d2f41 solid;padding:20px 0}.titleAndFiltering__title[_ngcontent-%COMP%]{text-transform:uppercase;color:#f6f6f6}.decksListing[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content;grid-column-gap:calc(var(--vw) * 1.6);padding:0 calc(var(--vw) * 4.16);padding-top:calc(var(--vh) * 4);height:100%;overflow:hidden;overflow-y:auto}.decksListing[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-bottom:calc(var(--vh) * 6)}.createButton[_ngcontent-%COMP%]{width:calc(var(--vw) * 8.6);height:calc(var(--vh) * 23.5);margin-top:calc(var(--vh) * .5);justify-self:center}"],
                data: {
                    animation: [(0, v.X$)("deck", [(0, v.eR)(":enter", [(0, v.oB)({
                        transform: "scale(1.0)",
                        opacity: 0
                    }), (0, v.jt)("1s cubic-bezier(.8, -0.6, 0.2, 1.5)", (0, v.oB)({
                        transform: "scale(1)",
                        opacity: 1
                    }))]), (0, v.eR)(":leave", [(0, v.oB)({
                        transform: "scale(1)",
                        opacity: 1,
                        height: "*"
                    }), (0, v.jt)("1s cubic-bezier(.8, -0.6, 0.2, 1.5)", (0, v.oB)({
                        transform: "scale(1.0)",
                        opacity: 0
                    }))])])]
                }
            }), o
        })();
        const Mc = ["In this event, you will receive temporary copies of cards from Core and Welcome Set. These cards are not added to your account or to your wallet, rather they exist only for this event and disappear when it is over.", "From this sealed collection, you build a deck to play against others in the event. Everyone's sealed collection is random. You'll get cards from every domain, and can put any card you get into your sealed deck. For instance, you play with Light and Deception and War in the same deck!", "At the beginning of your run, before you receive cards, you will choose your domain. Several cards you receive will always be from the domain you choose. The rest will be randomly chosen from across Core and Welcome Set.", "Play until you reach 9 wins or 3 losses. Win more games to get bigger prizes. You'll win Stars, cards, and maybe even a trinket! Click below for complete rules and prize details."];

        function yc(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 7), e._UZ(1, "gu-paragraph-text", 8), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("text", t)
            }
        }

        let kc = (() => {
            class o {
                constructor(t, n) {
                    this.activeModal = t, this.akuma = n, this.infoTexts = Mc
                }

                ngOnInit() {
                    this.akuma.postEvent("Screen", "sealeddeckInfo_opened")
                }

                closeModal() {
                    this.activeModal.close("GuSealedDeckInfoModal closed")
                }

                clickFullDetails() {
                    window.open("https://playgu.co/Sealed-Deck", "_blank"), this.akuma.postEvent("Control", "sealeddeckInfo_FullDetailsBtn_pressed")
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(B.mX), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["gu-sealed-deck-info-modal"]],
                decls: 11,
                vars: 1,
                consts: [["background", "neutral", 3, "onCloseSealedDeckModal"], ["slot", "topSectionSubtitle", "fillColor", "colors.light.300", "kind", "large", "align", "left", "fontWeight", "bold", 1, "topSection__subtitle"], ["slot", "topSectionTitle", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "large"], ["slot", "bottomSectionContent", "top", "3x-large", "bottom", "x-large"], ["both", "medium", 4, "ngFor", "ngForOf"], ["slot", "bottomSectionCta", "size", "large", 1, "bottomSection__cta", 3, "click"], ["iconLigature", "leave_website", 1, "bottomSection__cta__icon"], ["both", "medium"], ["fillColor", "colors.light.100", "kind", "large", "align", "left", 3, "text"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-two-section-modal", 0), e.NdJ("onCloseSealedDeckModal", function () {
                        return n.closeModal()
                    }), e.TgZ(1, "gu-paragraph-text", 1), e._uU(2, " Sealed Deck Event: Core + Welcome Set "), e.qZA(), e.TgZ(3, "gu-heading-text", 2), e._uU(4, " Rules & Prizes "), e.qZA(), e.TgZ(5, "gu-vertical-space", 3), e.YNc(6, yc, 2, 1, "gu-vertical-space", 4), e.qZA(), e.TgZ(7, "gu-primary-hex-button", 5), e.NdJ("click", function () {
                        return n.clickFullDetails()
                    }), e._uU(8, " Full Details "), e.TgZ(9, "span"), e._UZ(10, "gu-icon", 6), e.qZA(), e.qZA(), e.qZA()), 2 & t && (e.xp6(6), e.Q6J("ngForOf", n.infoTexts))
                },
                directives: [d.sg],
                styles: [".bottomSection__cta__icon[_ngcontent-%COMP%]{margin-left:8px}"]
            }), o
        })();

        function Oc(o, r) {
            1 & o && e._UZ(0, "div", 3), 2 & o && e.ekj("winBoxes__win--filled", r.$implicit)
        }

        let Pc = (() => {
            class o {
                constructor() {
                    this.maxWins = 5, this.winCount = 0, this.winElements = new Array(this.maxWins).fill(!1)
                }

                ngOnInit() {
                }

                ngOnChanges() {
                    this.renderWins()
                }

                renderWins() {
                    for (let t = 0; t < this.winCount; t++) this.winElements[t] = !0
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-win-visualisation"]],
                inputs: {maxWins: "maxWins", winCount: "winCount"},
                features: [e.TTD],
                decls: 4,
                vars: 3,
                consts: [[1, "winBoxes"], ["class", "winBoxes__win", 3, "winBoxes__win--filled", 4, "ngFor", "ngForOf"], [1, "winSummary"], [1, "winBoxes__win"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e.YNc(1, Oc, 1, 2, "div", 1), e.qZA(), e.TgZ(2, "div", 2), e._uU(3), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngForOf", n.winElements), e.xp6(2), e.AsE("", n.winCount, " ", 1 == n.winCount ? "win" : "wins", ""))
                },
                directives: [d.sg],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.winSummary[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.winSummary[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap}.winBoxes[_ngcontent-%COMP%]{display:flex}.winBoxes__win[_ngcontent-%COMP%]{border:calc(var(--vh) * .18) solid #527493;background:#0f1b27;margin-right:calc(var(--vh) * 1.3);position:relative;width:calc(var(--vh) * 2);height:calc(var(--vh) * 2)}.winBoxes__win[_ngcontent-%COMP%]:after{content:"";position:absolute;width:calc(var(--vh) * 1.3);height:calc(var(--vh) * .18);right:calc(calc(var(--vh) * .18) * -1);top:50%;background:#527493;transform:translate(100%,-50%)}.winBoxes__win[_ngcontent-%COMP%]:last-child{margin-right:0}.winBoxes__win[_ngcontent-%COMP%]:last-child:after{display:none}.winBoxes__win--filled[_ngcontent-%COMP%]{border-width:0;background:url(win-box-background.bfd8ca476bd783be.svg);background-repeat:no-repeat;background-size:contain}.winBoxes__win--filled[_ngcontent-%COMP%]:after{right:0;background:#8be1e0}.winSummary[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .6);text-align:center;color:#7192b0}']
            }), o
        })();

        function Sc(o, r) {
            1 & o && e._UZ(0, "div", 3), 2 & o && e.ekj("lossBoxes__loss--filled", r.$implicit)
        }

        let Tc = (() => {
            class o {
                constructor() {
                    this.maxLosses = 3, this.lossCount = 0, this.lossElements = new Array(this.maxLosses).fill(!1)
                }

                ngOnInit() {
                }

                ngOnChanges() {
                    this.renderLosses()
                }

                renderLosses() {
                    for (let t = 0; t < this.lossCount; t++) this.lossElements[t] = !0
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-loss-visualisation"]],
                inputs: {maxLosses: "maxLosses", lossCount: "lossCount"},
                features: [e.TTD],
                decls: 4,
                vars: 3,
                consts: [[1, "lossBoxes"], ["class", "lossBoxes__loss", 3, "lossBoxes__loss--filled", 4, "ngFor", "ngForOf"], [1, "lossSummary"], [1, "lossBoxes__loss"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e.YNc(1, Sc, 1, 2, "div", 1), e.qZA(), e.TgZ(2, "div", 2), e._uU(3), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngForOf", n.lossElements), e.xp6(2), e.AsE("", n.lossCount, " ", 1 == n.lossCount ? "loss" : "losses", ""))
                },
                directives: [d.sg],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.lossSummary[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.lossSummary[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap}.lossBoxes[_ngcontent-%COMP%]{display:flex}.lossBoxes__loss[_ngcontent-%COMP%]{border:calc(var(--vh) * .18) solid #527493;background:#0f1b27;margin-right:calc(var(--vh) * 1.1);position:relative;width:calc(var(--vh) * 1.4);height:calc(var(--vh) * 1.4)}.lossBoxes__loss[_ngcontent-%COMP%]:after{content:"";position:absolute;width:calc(var(--vh) * 1.1);height:calc(var(--vh) * .18);right:calc(calc(var(--vh) * .18) * -1);top:50%;background:#527493;transform:translate(100%,-50%)}.lossBoxes__loss[_ngcontent-%COMP%]:last-child{margin-right:0}.lossBoxes__loss[_ngcontent-%COMP%]:last-child:after{display:none}.lossBoxes__loss--filled[_ngcontent-%COMP%]{border-width:0;background:url(loss-box-background.6418540d28bb1124.svg);background-repeat:no-repeat;background-size:contain}.lossBoxes__loss--filled[_ngcontent-%COMP%]:after{right:0;background:#e8a1a1}.lossSummary[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .5);text-align:center;color:#7192b0}']
            }), o
        })();
        var Ac = p(36787), Ic = p(61715), Tn = p(63764);
        let Zc = (() => {
            class o {
                onClick(t) {
                    t.stopPropagation()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275dir = e.lG2({
                type: o,
                selectors: [["", "click-stop-propagation", ""]],
                hostBindings: function (t, n) {
                    1 & t && e.NdJ("click", function (a) {
                        return n.onClick(a)
                    })
                }
            }), o
        })();
        var Fc = p(236);
        const Dc = ["queueBtnContainer"];

        function Gc(o, r) {
            1 & o && e.GkF(0)
        }

        function Bc(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9), e.TgZ(1, "div", 10), e._uU(2), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.hij(" ", t.mode.type === t.GuGameModeType.DIRECT_CHALLENGE ? "Start" : "Play", " ")
            }
        }

        function Lc(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9), e.TgZ(1, "div", 13), e._uU(2, "In Queue"), e.qZA(), e.TgZ(3, "div", 10), e._uU(4), e.ALo(5, "duration"), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(4), e.Oqu(e.lcZ(5, 1, t.secondsElapsed))
            }
        }

        function Uc(o, r) {
            1 & o && (e.ynx(0), e.TgZ(1, "div", 14), e._uU(2, "Hold to cancel"), e.qZA(), e.BQk())
        }

        function qc(o, r) {
            if (1 & o && (e.YNc(0, Lc, 6, 3, "div", 11), e.YNc(1, Uc, 3, 0, "ng-container", 12)), 2 & o) {
                const t = e.oxw();
                e.Q6J("ngIf", !t.isHovered), e.xp6(1), e.Q6J("ngIf", t.isHovered)
            }
        }

        const Ec = function (o, r, t, n) {
            return {hovered: o, active: r, pressed: t, "queue-button-container--disabled": n}
        }, Nc = function (o, r) {
            return {"width.px": o, "height.px": r}
        };
        let Rc = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k, A, G, U) {
                    this.playService = t, this.auth = n, this.queueService = i, this.el = a, this.guGameService = s, this.resizeService = c, this.modalService = l, this.gameService = g, this.loadoutService = b, this.audioService = C, this.akumaService = k, this.cerberusModal = A, this.featureFlagService = G, this.environment = U, this.disabled = !1, this.openDeckSelect = new e.vpe, this.secondsElapsed = 0, this.progressCirclePercentage = 0, this.echoPercentage = 50, this.isPressed = !1, this.isHovered = !1, this.timeUntilCancel = 2e3, this.unsubscribe = new M.xQ, this.gameModeReady = !1, this.GuGameModeType = O.tO, this.disableButton = !1, this.MIN_GAMES_PLAYED = 10, this.AFTER_EVERY_X_GAMES = 5, this.firstTryLaunch = true
                }

                ngOnInit() {
                    this.userId = this.auth.getUserId(), this.watchLoadouts(), this.queueService.getQueue(1, this.mode.id).pipe((0, u.R)(this.unsubscribe)).subscribe(t => this.queue = t), this.initTimer(), this.watchForHover(), this.checkWarningFeatureFlag(), this.resizeService.viewPortUnits$.pipe((0, u.R)(this.unsubscribe)).subscribe(({vw: t}) => {
                        this.width = t * this.diameterVwMultiplier, this.height = t * this.diameterVwMultiplier
                    })
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                watchLoadouts() {
                    this.loadoutService.loadouts$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => {
                        this.loadouts = t
                    })).subscribe()
                }

                getBoardId() {
                    const t = this.loadouts.find(n => n.collection_id === this.mode.selectedLoadoutId);
                    return t && t.board ? t.board.proto : void 0
                }

                getLoadoutId() {
                    const t = this.loadouts.find(n => n.collection_id === this.mode.selectedLoadoutId);
                    return t ? t.collection_id : 0
                }

                get isActive() {
                    return this.queue && "active" === this.queue.status
                }

                watchForHover() {
                    const t = (0, fe.R)(this.btnContainer.nativeElement, "mouseenter").pipe((0, S.U)(() => !0)),
                        n = (0, fe.R)(this.btnContainer.nativeElement, "mouseleave").pipe((0, S.U)(() => !1));
                    (0, Ac.T)(t, n).pipe((0, u.R)(this.unsubscribe), (0, Ct.b)(10), (0, w.b)(i => {
                        this.isHovered = i, i ? this.audioService.arenaHoverStart.play() : (this.isPressed = !1, this.progressCirclePercentage = 0)
                    })).subscribe()
                }

                logButtonInputted(t) {
                    this.akumaService.postControlEvent("gu", "Arena", "", "gameStart", "Btn", "pressed", {
                        mode_name: this.mode.name,
                        button_state: t
                    })
                }

                onMouseDown() {
                    this.disableButton = !0, this.guGameService.checkIfRequiresUpdate().pipe((0, x.q)(1)).subscribe(t => {
                        if (!t) return this.handleGameModePlayBtn(), (0, V.of)({});
                        this.guGameService.fetchGameModes(!0)
                    })
                }

                get isGameInstalled$() {
                    return this.gameService.currentGameContext$.pipe((0, S.U)(t => this.gameService.isInstalled(t)))
                }

                showInfoModal(t, n) {
                    this.modalService.createModal(Tn.S, {title: t, text: n}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: m.e1.Center,
                        size: m.Cg.StretchableWorkarea
                    })
                }

                handleGameModePlayBtn() {
                    this.isGameInstalled$.pipe((0, x.q)(1)).subscribe(t => {
                        if (!t) {
                            const i = `The game path was unable to be verified.\n          Please check ('Settings > GODS UNCHAINED > Installation Path') is set to ${this.gameService.getDefaultInstallPath()}, and click 'CLEAR VERSION'.`;
                            return console.error("GuQueueButton-?handleGameModePlayBtn() User not allowed to queue as game is not installed."), void this.showInfoModal("Unable to Queue", i)
                        }
                        switch (this.akumaService.postControlEvent("gu", "Arena", "", "gameMode", "PlayBtn", "pressed", {mode_name: O.tO[this.mode.type]}), this.mode.type) {
                            case O.tO.SOLO:
                                this.mode.id === O.B_.SOLO ? this.handleSingle() : this.mode.id === O.B_.SERVER_SOLO && this.handleServerGame(!0);
                                break;
                            case O.tO.DIRECT_CHALLENGE:
                            case O.tO.CONSTRUCTED:
                            case O.tO.SEALED_DECK:
                                this.handleServerGame();
                                break;
                            case O.tO.TUTORIAL:
                                this.handleTutorial();
                                break;
                            default:
                                console.warn("GuQueueButton->handleGameModePlayBtn() this.mode.type not recognized.", O.tO[this.mode.type])
                        }
                    }, t => {
                        console.error("GuQueueButton->handleGameModePlayBtn() User is unable to queue", t)
                    })
                }

                handleTutorial() {
                    this.audioService.arenaClickStart.play(), this.queueService.activeQueues$.pipe((0, x.q)(1)).subscribe(t => {
                        t.forEach(n => this.queueService.cancel(n))
                    }), this.gameService.getBranch$(1).pipe((0, x.q)(1), (0, It.M)(this.guGameService.getGameMode$(this.mode.id)), (0, w.b)(([t, n]) => {
                        this.playService.play({
                            realm: t.id,
                            mode: this.mode.id,
                            mission: n.properties.mission,
                            player: {
                                id: this.userId,
                                deck: {id: n.properties.player.deck.id, global: n.properties.player.deck.global},
                                collection: {id: n.properties.player.collection.id}
                            },
                            opponent: {
                                deck: {
                                    id: n.properties.opponent.deck.id,
                                    global: n.properties.opponent.deck.global
                                }, collection: {id: n.properties.opponent.collection.id}
                            }
                        })
                    })).subscribe()
                }

                handleSingle() {
                    if (this.audioService.arenaClickStart.play(), this.deck && this.opponentsDeck) this.queueService.activeQueues$.pipe((0, x.q)(1)).subscribe(t => {
                        t.forEach(n => this.queueService.cancel(n))
                    }), this.logButtonInputted("Start"), this.gameService.getBranch$(1).pipe((0, x.q)(1), (0, w.b)(t => {
                        this.guGameService.incrementGameModeCount(0).pipe((0, x.q)(1)).subscribe(), this.logQueueCompletedSolo(), this.playService.play({
                            realm: t.id,
                            mode: 0,
                            player: {
                                id: this.userId,
                                deck: {id: this.deck.id, global: this.deck.global},
                                collection: {id: this.getLoadoutId()}
                            },
                            opponent: {
                                id: this.userId,
                                deck: {id: this.opponentsDeck.id, global: this.opponentsDeck.global},
                                collection: {id: 0}
                            }
                        })
                    })).subscribe(); else {
                        const t = !!this.deck;
                        this.logButtonInputted("selectDeck"), this.openDeckSelect.emit({forAI: t})
                    }
                }

                buttonIsActive() {
                    this.logButtonInputted("Cancel"), this.disableButton = !1, this.audioService.clickMediumV1.play(), (0, ot.H)(0, 50).pipe((0, wt.o)(() => this.isPressed), (0, S.U)(t => 50 * t), (0, S.U)(t => (this.progressCirclePercentage = t / this.timeUntilCancel * 100, this.progressCirclePercentage >= 100)), (0, P.h)(t => t), (0, w.b)(() => {
                        this.audioService.arenaCancel.play(), this.cancel()
                    })).subscribe()
                }

                validateAndLaunchQueue() {
                    this.noWalletWarningRankedGame ? this.checkToShowModalIfNoWallet() : this.launchQueue()
                }

                checkToShowModalIfNoWallet() {
                    this.auth.fetchAccountDetails().pipe((0, x.q)(1)).subscribe(t => {
                        (null == t ? void 0 : t.addresses.length) < 1 && this.accountProperties ? this.showModalNoWallet() : this.launchQueue()
                    })
                }

                showModalNoWallet() {
                    const t = this.accountProperties.won_matches + this.accountProperties.lost_matches;
                    t === this.MIN_GAMES_PLAYED || t > this.MIN_GAMES_PLAYED && (t - this.MIN_GAMES_PLAYED) % this.AFTER_EVERY_X_GAMES == 0 ? this.showWarning() : this.launchQueue()
                }

                showWarning() {
                    const n = this.cerberusModal.open(ae.MZ, {defaultStylings: !1, centered: !0}).componentInstance;
                    n.title = "No wallet connected", n.content = `In order to receive the best prizes, you need to connect a wallet to your account. We are unable to give prizes for past events. Please go to the <a style="color: #8BE1E0; outline: none;" href=${this.environment.guManageWalletsURL}>Manage Wallets</a> page to add and connect.`, n.primaryButton = {
                        text: "LET ME PLAY!",
                        closeOnClick: !0,
                        onClick: () => this.launchQueue()
                    }, n.secondaryButton = {
                        text: "BACK", closeOnClick: !0, onClick: () => {
                            this.isPressed = !1, this.disableButton = !1
                        }
                    }, n.type = "info"
                }

                launchQueue() {
                    this.logButtonInputted("Start"), this.playService.start({
                        id: this.mode.id,
                        name: this.mode.name
                    }, this.userId, new J.Qc(this.userId, this.deck, this.getLoadoutId(), this.opponentsDeck), this.mode.type === O.tO.DIRECT_CHALLENGE ? this.challengeCode : "").pipe((0, x.q)(1)).subscribe(t => {
                        this.firstTryLaunch = true, this.queue = t, this.disableButton = !1, this.initTimer()
                    }, t => {
                        if (this.firstTryLaunch === true) {
                            this.firstTryLaunch = false;
                            setTimeout(() => {
                                this.launchQueue();
                            }, 500);
                        } else {
                            this.disableButton = !1;
                            this.showInfoModal("Unable to Queue", t);
                        }
                    })
                }

                handleServerGame(t = !1) {
                    if (this.isPressed = !0, !this.deck || !this.opponentsDeck && t) {
                        this.disableButton = !1;
                        const n = !!this.deck;
                        this.logButtonInputted("selectDeck"), this.openDeckSelect.emit({forAI: n})
                    } else this.isActive ? this.buttonIsActive() : (this.audioService.arenaClickStart.play(), this.validateAndLaunchQueue())
                }

                logQueueCompletedSolo() {
                    this.queueService.logQueueCompleted({
                        mode: {id: 0, name: "Solo"},
                        game_id: 1,
                        status: null,
                        startTimestamp: null,
                        params: null
                    })
                }

                cancel() {
                    this.isPressed = !1, this.progressCirclePercentage = 0, this.queueService.cancel(this.queue)
                }

                mouseUp(t) {
                    0 === t.button && (this.isPressed = !1, this.progressCirclePercentage = 0)
                }

                initTimer() {
                    this.updateTimer(), this.timer = (0, Ic.F)(1e3), this.timer.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => this.updateTimer())).subscribe()
                }

                updateTimer() {
                    if (null == this.queue || null === this.queue.startTimestamp) this.secondsElapsed = 0; else {
                        const n = (new Date).getTime() - this.queue.startTimestamp;
                        this.secondsElapsed = Math.round(n / 1e3)
                    }
                }

                checkWarningFeatureFlag() {
                    this.featureFlagService.get(_.vU.noWalletWarningRankedGame).pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.noWalletWarningRankedGame = t
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(J.GT), e.Y36(h.mI), e.Y36(_t.g), e.Y36(e.SBq), e.Y36(X.xV), e.Y36(K._), e.Y36(T.Z), e.Y36(qe.hM), e.Y36(pe), e.Y36(h.pk), e.Y36(_.jt), e.Y36(B.Qz), e.Y36(h.B3), e.Y36(h.Ho))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-gu-queue-button"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(Dc, 7), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.btnContainer = i.first)
                    }
                },
                hostBindings: function (t, n) {
                    1 & t && e.NdJ("mouseup", function (a) {
                        return n.mouseUp(a)
                    }, !1, e.evT)
                },
                inputs: {
                    mode: "mode",
                    deck: "deck",
                    opponentsDeck: "opponentsDeck",
                    diameterVwMultiplier: "diameterVwMultiplier",
                    challengeCode: "challengeCode",
                    disabled: "disabled",
                    accountProperties: "accountProperties"
                },
                outputs: {openDeckSelect: "openDeckSelect"},
                decls: 11,
                vars: 18,
                consts: [["click-stop-propagation", "", 1, "queue-button-container", 3, "ngClass", "id", "ngStyle", "mousedown"], ["queueBtnContainer", ""], [1, "outer-circle"], [3, "percentage", "strokeColor", "strokeWidth", "width"], [1, "inner-circle"], [1, "inner-circle-content"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["inactiveContent", ""], ["activeContent", ""], [1, "buttonText"], [1, "buttonText__title"], ["class", "buttonText", 4, "ngIf"], [4, "ngIf"], [1, "buttonText__label"], [1, "buttonText", "buttonText__hold"]],
                template: function (t, n) {
                    if (1 & t && (e.TgZ(0, "div", 0, 1), e.NdJ("mousedown", function (a) {
                        return 0 === a.button && n.onMouseDown()
                    }), e.TgZ(2, "div", 2), e._UZ(3, "app-progress-circle", 3), e.qZA(), e.TgZ(4, "div", 4), e.TgZ(5, "div", 5), e.YNc(6, Gc, 1, 0, "ng-container", 6), e.qZA(), e.qZA(), e.qZA(), e.YNc(7, Bc, 3, 1, "ng-template", null, 7, e.W1O), e.YNc(9, qc, 2, 2, "ng-template", null, 8, e.W1O)), 2 & t) {
                        const i = e.MAs(8), a = e.MAs(10);
                        e.s9C("id", null == n.mode ? null : n.mode.name), e.Q6J("ngClass", e.l5B(10, Ec, n.isHovered, n.isActive, n.isPressed, n.disableButton || n.disabled))("ngStyle", e.WLB(15, Nc, n.width, n.height)), e.xp6(3), e.Q6J("percentage", n.progressCirclePercentage)("strokeColor", "red")("strokeWidth", .06 * n.width)("width", n.width), e.xp6(3), e.Q6J("ngIf", n.isActive)("ngIfThen", a)("ngIfElse", i)
                    }
                },
                directives: [Zc, d.mk, d.PC, Ot, d.O5],
                pipes: [Fc.u],
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                .buttonText__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .buttonText__label[_ngcontent-%COMP%], .buttonText__hold[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .buttonText__title[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 2.96);
                    line-height: 1.3
                }
                
                .buttonText__hold[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.48)
                }
                
                .buttonText__label[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.29)
                }
                
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    display: inline-block;
                    position: relative;
                    transform-origin: 50% 50%;
                    transition: all .15s ease-in-out;
                    background: var(--gu-blue-dark);
                    border-radius: 50%;
                }
                
                [_nghost-%COMP%]:hover {
                    transform: scale(1.05);
                }
                
                .queue-button-container[_ngcontent-%COMP%] {
                    user-select: none;
                    cursor: pointer;
                    height: 100%;
                    border-radius: 50%;
                    overflow: hidden
                }
                
                .queue-button-container.pressed[_ngcontent-%COMP%] {
                    box-shadow: inset 2px 2px 5px #000
                }
                
                .queue-button-container--disabled[_ngcontent-%COMP%] {
                    user-select: none;
                    pointer-events: none;
                    opacity: .6
                }
                
                .outer-circle[_ngcontent-%COMP%] {
                    height: 100%;
                    background: var(--gu-yellow);
                }
                
                .inner-circle[_ngcontent-%COMP%] {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 88%;
                    height: 88%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    transition: all .15s ease;
                    background: var(--gu-blue-dark);
                }
                
                .inner-circle-content[_ngcontent-%COMP%] {
                    height: 100%;
                    display: flex
                }
                
                .buttonText[_ngcontent-%COMP%] {
                    margin: auto;
                    display: flex;
                    flex-flow: column nowrap;
                    text-align: center;
                    color: #f6f6f6
                }
                
                .buttonText__title[_ngcontent-%COMP%] {
                    line-height: 1
                }
                
                .buttonText__hold[_ngcontent-%COMP%] {
                    font-weight: 600
                }
                
                .buttonText__label[_ngcontent-%COMP%] {
                    font-weight: 600;
                    text-transform: uppercase;
                    color: #e0c58f
                }
                `]
            }), o
        })();
        const Qc = [[["", "slot", "inlinebeforetext"]], [["", "slot", "inlineaftertext"]], [["", "slot", "aftereverything"]]],
            Hc = ["[slot='inlineBeforeText']", "[slot='inlineAfterText']", "[slot='afterEverything']"];
        let Ve = (() => {
            class o {
                constructor() {
                }

                ngOnInit() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-create-new-button"]],
                inputs: {text: "text"},
                ngContentSelectors: Hc,
                decls: 6,
                vars: 1,
                consts: [["iconLigature", "add_item", 1, "icon"], [1, "text"]],
                template: function (t, n) {
                    1 & t && (e.F$t(Qc), e._UZ(0, "gu-icon", 0), e.TgZ(1, "div", 1), e.Hsn(2), e._uU(3), e.Hsn(4, 1), e.qZA(), e.Hsn(5, 2)), 2 & t && (e.xp6(3), e.hij(" ", n.text, " "))
                },
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .text[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .text[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.48)
                }
                
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    transition: transform .15s ease-in-out;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    border: calc(var(--vh) * .15) solid var(--gu-yellow);
                    cursor: pointer
                }
                
                [_nghost-%COMP%]:hover {
                    transform: scale(1.05)
                }
                
                .icon[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 3.5);
                    margin-bottom: calc(var(--vh) * 1);
                    line-height: 1;
                    color: var(--gu-yellow);
                }
                
                .text[_ngcontent-%COMP%] {
                    color: var(--gu-yellow);
                    width: 70%;
                    text-align: center;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                `]
            }), o
        })();

        function Yc(o, r) {
            if (1 & o && e._UZ(0, "app-card2", 12), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(2);
                e.Q6J("protoId", n.topThreeCards[t].proto)("quality", n.topThreeCards[t].quality)("sound", !1)
            }
        }

        function Jc(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Yc, 1, 3, "app-card2", 11), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.topThreeCards[t])
            }
        }

        function $c(o, r) {
            if (1 & o && e._UZ(0, "app-god-badge", 13), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("god", null == t.deck ? null : t.deck.god)
            }
        }

        function Wc(o, r) {
            if (1 & o && e._UZ(0, "app-flux-god-portrait", 14), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("wins", t.gauntletSlot.wins)("god", t.gauntletSlot.god)("unlock", t.gauntletSlot.unlock)
            }
        }

        function zc(o, r) {
            if (1 & o && e._UZ(0, "app-flux-god-portrait", 14), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("wins", 0)("god", t.deck.god)("unlock", !0)
            }
        }

        const Vc = function () {
            return [2, 1, 0]
        };

        function jc(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 4), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clickDeck()
                }), e.YNc(1, Jc, 2, 1, "ng-container", 5), e.YNc(2, $c, 1, 1, "app-god-badge", 6), e.YNc(3, Wc, 1, 3, "app-flux-god-portrait", 7), e.YNc(4, zc, 1, 3, "app-flux-god-portrait", 7), e.TgZ(5, "div", 8), e._UZ(6, "gu-icon", 9), e.TgZ(7, "div", 10), e._uU(8), e.qZA(), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", e.DdM(5, Vc)), e.xp6(1), e.Q6J("ngIf", !t.displayGauntlet), e.xp6(1), e.Q6J("ngIf", t.displayGauntlet && t.gauntletSlot), e.xp6(1), e.Q6J("ngIf", t.displayGauntlet && !t.gauntletSlot), e.xp6(4), e.hij("", t.deckCardCount, " / 30")
            }
        }

        function Xc(o, r) {
            if (1 & o && (e.TgZ(0, "footer", 15), e._uU(1), e.ALo(2, "titlecase"), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" ", e.lcZ(2, 1, t.deck.god), "\n")
            }
        }

        function Kc(o, r) {
            if (1 & o && e._UZ(0, "app-god-badge", 19), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("god", t.deck.god)
            }
        }

        function el(o, r) {
            if (1 & o && (e.TgZ(0, "div", 20), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" ", null == t.deck ? null : t.deck.god, " ")
            }
        }

        function tl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-create-new-button", 16), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().onEmptyDeckClick()
                }), e.YNc(1, Kc, 1, 1, "app-god-badge", 17), e.YNc(2, el, 2, 1, "div", 18), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("text", t.emptyText)("ngStyle", t.getEmptyDeckStyle()), e.xp6(1), e.Q6J("ngIf", null == t.deck ? null : t.deck.god), e.xp6(1), e.Q6J("ngIf", null == t.deck ? null : t.deck.god)
            }
        }

        function nl(o, r) {
            if (1 & o && (e.TgZ(0, "div", 21), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" ", null == t.deck ? null : t.deck.name, "\n")
            }
        }

        let An = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.cardsService = t, this.utils = n, this.audioService = i, this.gauntletService = a, this.showDeckName = !1, this.sound = !0, this.selectDeck = new e.vpe, this.topThreeCards = [], this.isLocked = !1, this.unsubscribe = new M.xQ
                }

                get isNotReady() {
                    return this.deck instanceof ie.$$ && this.deck.items.length < 30
                }

                get deckCardCount() {
                    return this.deck instanceof ie.$$ ? this.deck.items.length : 0
                }

                ngOnInit() {
                    this.getThumbnailData(), this.getGauntlet()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngOnChanges(t) {
                    t.deck && this.getThumbnailData()
                }

                onMouseEnter() {
                    this.sound && this.audioService.hoverItem.play()
                }

                getGauntlet() {
                    !this.displayGauntlet || this.gauntletService.gauntletSlots$.pipe((0, u.R)(this.unsubscribe), (0, S.U)(t => t.find(n => n.god === this.deck.god.toLowerCase()))).subscribe(t => {
                        this.gauntletSlot = t
                    })
                }

                getThumbnailData() {
                    this.deck && "sealed_deck" === this.deck.deck_type ? this.topThreeCards = this.deck.items.slice(0, 3) : this.cardsService.qualityCounts$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => t.size > 0), (0, w.b)(t => this.calcThumbnail(t))).subscribe()
                }

                calcThumbnail(t) {
                    if (!this.deck || !this.deck.items || 0 === this.deck.items.length) return void (this.topThreeCards = []);
                    const n = this.deck.items.filter(i => i.protoCard.god === this.deck.god);
                    this.calcTopThreeCards(t, n.length >= 3 ? n : this.deck.items)
                }

                calcTopThreeCards(t, n) {
                    // console.log(t);
                    // console.log(n);
                    this.topThreeCards = this.utils.calcTopCards(t, n, 3)
                }

                onEmptyDeckClick() {
                    this.sound && this.audioService.clickItemV2.play(), this.selectDeck.emit(this.deck ? this.deck : null)
                }

                clickDeck() {
                    this.selectDeck.emit(this.deck)
                }

                getEmptyDeckStyle() {
                    return {height: this.emptyContainerHeight, width: this.width}
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.dK), e.Y36(Me.F), e.Y36(h.pk), e.Y36(ve))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-deck"]],
                hostVars: 2,
                hostBindings: function (t, n) {
                    1 & t && e.NdJ("mouseenter", function () {
                        return n.onMouseEnter()
                    }), 2 & t && e.ekj("deck--deckIsNotFinished", n.isNotReady)
                },
                inputs: {
                    deck: "deck",
                    emptyText: "emptyText",
                    showDeckName: "showDeckName",
                    width: "width",
                    emptyContainerHeight: "emptyContainerHeight",
                    emptyContainerWidth: "emptyContainerWidth",
                    hideGodName: "hideGodName",
                    sound: "sound",
                    displayGauntlet: "displayGauntlet"
                },
                outputs: {selectDeck: "selectDeck"},
                features: [e.TTD],
                decls: 4,
                vars: 4,
                consts: [["class", "stackOfCards", 3, "click", 4, "ngIf"], ["class", "godInfo", 4, "ngIf"], ["class", "emptyDeckContainer", 3, "text", "ngStyle", "click", 4, "ngIf"], ["class", "deckName", 4, "ngIf"], [1, "stackOfCards", 3, "click"], [4, "ngFor", "ngForOf"], ["size", "small", "class", "godBadge", 3, "god", 4, "ngIf"], ["class", "fluxGodPortrait", 3, "wins", "god", "unlock", 4, "ngIf"], [1, "deckLockedOverlay"], ["iconLigature", "padlock", 1, "deckLockedOverlay__icon"], [1, "deckLockedOverlay__text"], ["class", "deckCard", 3, "protoId", "quality", "sound", 4, "ngIf"], [1, "deckCard", 3, "protoId", "quality", "sound"], ["size", "small", 1, "godBadge", 3, "god"], [1, "fluxGodPortrait", 3, "wins", "god", "unlock"], [1, "godInfo"], [1, "emptyDeckContainer", 3, "text", "ngStyle", "click"], ["size", "small", "class", "godBadge", "slot", "afterEverything", 3, "god", 4, "ngIf"], ["class", "godName", "slot", "inlineBeforeText", 4, "ngIf"], ["size", "small", "slot", "afterEverything", 1, "godBadge", 3, "god"], ["slot", "inlineBeforeText", 1, "godName"], [1, "deckName"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, jc, 9, 6, "div", 0), e.YNc(1, Xc, 3, 3, "footer", 1), e.YNc(2, tl, 3, 4, "app-create-new-button", 2), e.YNc(3, nl, 2, 1, "div", 3)), 2 & t && (e.Q6J("ngIf", 3 === (null == n.topThreeCards ? null : n.topThreeCards.length)), e.xp6(1), e.Q6J("ngIf", 3 === (null == n.topThreeCards ? null : n.topThreeCards.length) && !n.hideGodName), e.xp6(1), e.Q6J("ngIf", !n.topThreeCards || n.topThreeCards.length < 3), e.xp6(1), e.Q6J("ngIf", n.showDeckName))
                },
                directives: [d.O5, d.sg, H, an, yn, Ve, d.PC],
                pipes: [d.rS],
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .deckName[_ngcontent-%COMP%], .godInfo[_ngcontent-%COMP%], .godName[_ngcontent-%COMP%], .deckLockedOverlay__text[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .deckLockedOverlay__text[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.48)
                }
                
                .deckName[_ngcontent-%COMP%], .godInfo[_ngcontent-%COMP%], .godName[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.29)
                }
                
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    display: flex;
                    flex-flow: column nowrap;
                    position: relative;
                }
                
                .deck--deckIsNotFinished[_nghost-%COMP%] {
                    filter: grayscale(1);
                    cursor: pointer;
                }
                
                .deck--deckIsNotFinished[_nghost-%COMP%] .deckLockedOverlay[_ngcontent-%COMP%] {
                    display: flex;
                }
                
                .deck--deckIsNotFinished[_nghost-%COMP%] .card-front {
                    filter: brightness(.6);
                }
                
                [_nghost-%COMP%]:hover .deckCard[_ngcontent-%COMP%]:nth-child(1) {
                    transform: rotate(10deg) translate(calc(var(--vw) * 1.3), -5%);
                }
                
                [_nghost-%COMP%]:hover .deckCard[_ngcontent-%COMP%]:nth-child(2) {
                    transform: rotate(5deg) translate(calc(var(--vw) * .65), -2.5%)
                }
                
                .deckLockedOverlay[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    flex-flow: column nowrap;
                    display: none;
                    align-items: center;
                    padding-left: calc(var(--vw) * .5)
                }
                
                .deckLockedOverlay__icon[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 3.5);
                    font-size: calc(var(--vh) * 3.5)
                }
                
                .deckLockedOverlay__text[_ngcontent-%COMP%] {
                    font-weight: 700
                }
                
                .stackOfCards[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * -.4);
                    position: relative;
                    transition: all .15s ease-out
                }
                
                .stackOfCards[_ngcontent-%COMP%]:hover {
                    transform: scale(1.06)
                }
                
                .stackOfCards[_ngcontent-%COMP%]:hover .godBadge[_ngcontent-%COMP%] {
                    filter: brightness(110%)
                }
                
                .emptyDeckContainer[_ngcontent-%COMP%] {
                    background: var(--gu-blue-dark);
                    position: relative;
                    cursor: pointer;
                    transition: all .15s ease-out;
                    margin: 0 auto;
                    margin-top: calc(var(--vh) * 1.2);
                    height: 100%
                }
                
                .emptyDeckContainer[_ngcontent-%COMP%]:hover {
                    transform: scale(1.02)
                }
                
                .emptyDeckContainer[_ngcontent-%COMP%] + .deckName[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 3);
                    padding: 0
                }
                
                .emptyDeckContainer[_ngcontent-%COMP%] .godBadge[_ngcontent-%COMP%] {
                    right: calc(var(--vw) * -1.5);
                    bottom: calc(var(--vh) * -2.5)
                }
                
                .godName[_ngcontent-%COMP%] {
                    padding-bottom: calc(var(--vh) * .5);
                    font-weight: 600;
                    text-transform: capitalize
                }
                
                .deckCard[_ngcontent-%COMP%] {
                    position: relative;
                    transition: all .15s ease-in-out
                }
                
                .deckCard[_ngcontent-%COMP%]:nth-child(1), .deckCard[_ngcontent-%COMP%]:nth-child(2) {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%
                }
                
                .deckCard[_ngcontent-%COMP%]:nth-child(1) img, .deckCard[_ngcontent-%COMP%]:nth-child(2) img {
                    filter: drop-shadow(0px 0px 0px #182531)
                }
                
                .deckCard[_ngcontent-%COMP%]:nth-child(1) {
                    transform: rotate(5deg) translate(calc(var(--vw) * .5), -2.5%);
                    opacity: .3
                }
                
                .deckCard[_ngcontent-%COMP%]:nth-child(2) {
                    transform: rotate(2deg) translate(calc(var(--vw) * .3), -1.7%);
                    opacity: .6
                }
                
                .godInfo[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * .4);
                    font-weight: 600;
                    color: #e0c58f99;
                    text-align: center
                }
                
                .godBadge[_ngcontent-%COMP%] {
                    position: absolute;
                    bottom: calc(var(--vh) * -1.1);
                    right: calc(var(--vw) * -.8)
                }
                
                .deckName[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 1.5);
                    padding-left: calc(var(--vw) * .4);
                    color: #f6f6f6;
                    text-align: center
                }
                
                .fluxGodPortrait[_ngcontent-%COMP%] {
                    position: absolute;
                    bottom: calc(var(--vh) * -3.6);
                    right: calc(var(--vw) * -2.1);
                    transform: scale(.483) rotate(45deg)
                }
                `]
            }), o
        })();

        function ol(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-loadout-part", 24), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit, a = e.oxw();
                    return i[0].owned && a.toggleBoard(i[0])
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw();
                e.Q6J("board", t[0])("owned", t[0].owned)("count", n.filterBoards(t).length)("equipped", t[0] === n.selectedBoard)
            }
        }

        function il(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ol, 1, 4, "gu-loadout-part", 23), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", t[0].owned || !t[0].owned && n.showUnownedBoards)
            }
        }

        function rl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-loadout-part", 26), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit, a = e.oxw();
                    return i[0].owned && a.toggleTrinket(a.filterTrinkets(i)[0])
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw();
                e.ekj("loadoutItemsArea__listingArea__list__item--aboveAll", n.tempTrinket === n.filterTrinkets(t)[0]), e.Q6J("count", n.filterTrinkets(t).length)("trinket", t[0])("owned", null == n.filterTrinkets(t)[0] ? null : n.filterTrinkets(t)[0].owned)("equipped", n.isTrinketEquipped(t[0]))
            }
        }

        function al(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, rl, 1, 6, "gu-loadout-part", 25), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", t[0].owned || !t[0].owned && n.showUnownedTrinkets)
            }
        }

        function sl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 27), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clearAll()
                }), e._uU(1, " Clear "), e.qZA()
            }
        }

        function cl(o, r) {
            if (1 & o && (e.TgZ(0, "gu-heading-text", 28), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.selectedBoard.name)
            }
        }

        function ll(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-primary-hex-button", 29), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().saveOrSelect()
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("text", t.ctaButtonText)
            }
        }

        function dl(o, r) {
            if (1 & o && e._UZ(0, "img", 32), 2 & o) {
                const t = e.oxw(2);
                e.MGl("src", "https://images.godsunchained.com/collectables/boards/", t.selectedBoard.proto, "--preview.webp", e.LSH)
            }
        }

        function gl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.YNc(1, dl, 1, 1, "img", 30), e.TgZ(2, "gu-circular-close-button", 31), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clearBoard()
                }), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", t.selectedBoard)
            }
        }

        function pl(o, r) {
            1 & o && (e.TgZ(0, "gu-paragraph-text", 33), e._uU(1, " choose a board "), e.qZA())
        }

        function ul(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "i", 34), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clearTempTrinket()
                }), e.qZA()
            }
        }

        p(65694);
        const _l = function () {
            return {breakpoint: "x-large", size: "large"}
        }, hl = function (o) {
            return [o]
        };
        let In = (() => {
            class o {
                constructor(t, n, i) {
                    this.modalService = t, this.loadoutService = n, this.guGameService = i, this.allTrinkets = [[]], this.allBoards = [[]], this.selectedTrinkets = new Map, this.showUnownedBoards = !0, this.showUnownedTrinkets = !0, this.unsubscribe = new M.xQ, this.close = () => {
                        this.modalService.destroyTopModal()
                    }
                }

                ngOnInit() {
                    this.initCollectables(), this.initLoadout()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get ctaButtonText() {
                    let t = "Save";
                    return this.inSelectMode && (t = this.hasLoadoutChanged ? "Save and Select" : "Select"), t
                }

                get hasLoadoutChanged() {
                    if (!this.loadout || this.loadout.board !== this.selectedBoard) return !0;
                    {
                        const [t, n] = this.loadout.trinkets;
                        return t !== this.selectedTrinkets.get("left") || n !== this.selectedTrinkets.get("right")
                    }
                }

                get inSelectMode() {
                    return void 0 !== this.gameModeId
                }

                initLoadout() {
                    if (!this.loadout) return;
                    this.selectedBoard = this.loadout.board;
                    const t = this.loadout.trinkets.find(i => 1 === i.slot),
                        n = this.loadout.trinkets.find(i => 2 === i.slot);
                    t && this.selectedTrinkets.set("left", t), n && this.selectedTrinkets.set("right", n)
                }

                initCollectables() {
                    (0, D.aj)([this.loadoutService.allBoards$, this.loadoutService.allTrinkets$]).pipe((0, u.R)(this.unsubscribe), (0, S.U)(([t, n]) => {
                        const i = {}, a = {};
                        t.forEach(l => {
                            var g, b;
                            const C = `${l.name}-${null === (g = l.class_properties) || void 0 === g ? void 0 : g.quality}--${null === (b = l.class_properties) || void 0 === b ? void 0 : b.effort}`;
                            a[C] || (a[C] = []), a[C].push(l)
                        }), n.forEach(l => {
                            let g = `${l.name}`;
                            if (l.properties && l.properties.belly_color) {
                                const {belly_color: b, eyes_color: C, fur_color: k} = l.properties;
                                g += `-${b}-${C}-${k}`
                            }
                            i[g] || (i[g] = []), i[g].push(l)
                        });
                        const s = Object.keys(i).map(l => i[l]);
                        return [Object.keys(a).map(l => a[l]), s]
                    })).subscribe(([t, n]) => {
                        this.allBoards = t, this.allTrinkets = n
                    })
                }

                toggleBoard(t) {
                    t === this.selectedBoard || (this.selectedBoard = t)
                }

                clearSelected(t) {
                    this.selectedTrinkets.delete(t), this.clearTempTrinket()
                }

                clearBoard() {
                    this.selectedBoard = null
                }

                clearAll() {
                    this.tempTrinket = null, this.selectedTrinkets.delete("left"), this.selectedTrinkets.delete("right"), this.selectedBoard = null
                }

                clearTempTrinket() {
                    this.tempTrinket = null
                }

                toggleTrinket(t) {
                    this.tempTrinket = this.tempTrinket === t ? null : t
                }

                selectTrinket(t) {
                    !this.tempTrinket || (this.selectedTrinkets.set(t, this.tempTrinket), this.tempTrinket = null)
                }

                isTrinketEquipped(t) {
                    if (!t) return null;
                    let n = !1;
                    return (this.selectedTrinkets.has("left") && this.selectedTrinkets.get("left").asset_id === t.asset_id || this.selectedTrinkets.has("right") && this.selectedTrinkets.get("right").asset_id === t.asset_id) && (n = !0), this.tempTrinket && this.tempTrinket.asset_id === t.asset_id && (n = !0), n
                }

                createLoadout(t) {
                    return this.loadoutService.createNewLoadout(t)
                }

                updateLoadout(t) {
                    return this.loadoutService.updateLoadout(t)
                }

                filterTrinkets(t) {
                    return t.filter(i => {
                        let a = !0;
                        return this.selectedTrinkets.has("left") && this.selectedTrinkets.get("left").asset_id === i.asset_id && (a = !1), this.selectedTrinkets.has("right") && this.selectedTrinkets.get("right").asset_id === i.asset_id && (a = !1), a
                    })
                }

                filterBoards(t) {
                    return t.filter(i => {
                        let a = !0;
                        return this.selectedBoard && this.selectedBoard.asset_id === i.asset_id && (a = !1), a
                    })
                }

                saveLoadout() {
                    const t = [], n = this.selectedTrinkets.get("left"), i = this.selectedTrinkets.get("right");
                    n && t.push(Object.assign(Object.assign({}, n), {slot: 1})), i && t.push(Object.assign(Object.assign({}, i), {slot: 2}));
                    const a = {
                        board: {asset_id: this.selectedBoard.asset_id},
                        trinket: t.map(s => ({slot: s.slot, asset_id: s.asset_id}))
                    };
                    return this.loadout ? this.updateLoadout(Object.assign(Object.assign({}, a), {collection_id: this.loadout.collection_id})) : this.createLoadout(a)
                }

                saveOrSelect() {
                    return this.hasLoadoutChanged ? this.saveLoadout().pipe((0, x.q)(1)).subscribe(t => {
                        this.updateGameModeLoadout(t)
                    }) : this.updateGameModeLoadout(), this.inSelectMode ? this.modalService.destroyModalsStack() : this.close()
                }

                updateGameModeLoadout(t) {
                    if (void 0 !== t || this.loadout) return this.guGameService.updateGameModeLoadout(this.gameModeId, t || this.loadout.collection_id)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(T.Z), e.Y36(pe), e.Y36(X.xV))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-loadout-builder-modal"]],
                inputs: {loadout: "loadout", gameModeId: "gameModeId"},
                decls: 33,
                vars: 20,
                consts: [[1, "modalHeader"], ["kind", "large", "fontWeight", "bold", 1, "modalHeader__backBtn", 3, "click"], ["iconLigature", "chevron_left", 1, "modalHeader__backBtn__chevronIcon"], ["fillGradient", "gradients.gold.simple", "size", "small", 1, "modalHeader__sectionTitle", 3, "responsiveSize"], [1, "loadoutItemsArea"], [1, "loadoutItemsArea__listingArea", "loadoutItemsArea__listingArea--boards"], [1, "loadoutItemsArea__listingArea__header"], ["size", "x-small", 1, "loadoutItemsArea__listingArea__header__title"], ["labelText", "Show unowned", "kind", "small", 1, "loadoutItemsArea__listingArea__header__checkbox", 3, "checked", "onCheck"], [1, "loadoutItemsArea__listingArea__overflow"], [1, "loadoutItemsArea__listingArea__list"], [4, "ngFor", "ngForOf"], [1, "loadoutItemsArea__listingArea"], [1, "middleHeader"], ["icon", "action_trash", "borderColor", "colors.gunmetal.300", "fillColor", "colors.gunmetal.300", "class", "middleHeader__clearBtn", 3, "click", 4, "ngIf"], ["size", "2x-small", "fillGradient", "gradients.gold.simple", "class", "middleHeader__heading", 4, "ngIf"], ["class", "middleHeader__saveBtn", 3, "text", "click", 4, "ngIf"], [1, "selectedLoadoutItems"], [4, "ngIf"], ["class", "selectedLoadoutItems__noSelectedBoardsTitle", "align", "center", "fillColor", "colors.gunmetal.300", "fontWeight", "bold", "kind", "large", 4, "ngIf"], [1, "selectedLoadoutItems__trinket", "selectedLoadoutItems__trinket--left", 3, "trinket", "highlight", "xButtonClick", "trinketClick"], [1, "selectedLoadoutItems__trinket", "selectedLoadoutItems__trinket--right", 3, "trinket", "highlight", "xButtonClick", "trinketClick"], ["class", "clickAnywhereOverlay", 3, "click", 4, "ngIf"], [3, "board", "owned", "count", "equipped", "click", 4, "ngIf"], [3, "board", "owned", "count", "equipped", "click"], [3, "count", "trinket", "owned", "equipped", "loadoutItemsArea__listingArea__list__item--aboveAll", "click", 4, "ngIf"], [3, "count", "trinket", "owned", "equipped", "click"], ["icon", "action_trash", "borderColor", "colors.gunmetal.300", "fillColor", "colors.gunmetal.300", 1, "middleHeader__clearBtn", 3, "click"], ["size", "2x-small", "fillGradient", "gradients.gold.simple", 1, "middleHeader__heading"], [1, "middleHeader__saveBtn", 3, "text", "click"], ["class", "selectedLoadoutItems__img", "alt", "board preview image", 3, "src", 4, "ngIf"], [1, "selectedLoadoutItems__clearBoardButton", 3, "click"], ["alt", "board preview image", 1, "selectedLoadoutItems__img", 3, "src"], ["align", "center", "fillColor", "colors.gunmetal.300", "fontWeight", "bold", "kind", "large", 1, "selectedLoadoutItems__noSelectedBoardsTitle"], [1, "clickAnywhereOverlay", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0), e.TgZ(1, "gu-simple-text", 1), e.NdJ("click", function () {
                        return n.close()
                    }), e._UZ(2, "gu-icon", 2), e._uU(3, " Back "), e.qZA(), e.TgZ(4, "gu-heading-text", 3), e._uU(5, " build your loadout "), e.qZA(), e.qZA(), e.TgZ(6, "section", 4), e.TgZ(7, "div", 5), e.TgZ(8, "header", 6), e.TgZ(9, "gu-heading-text", 7), e._uU(10, " Boards "), e.qZA(), e.TgZ(11, "gu-checkbox-input", 8), e.NdJ("onCheck", function () {
                        return n.showUnownedBoards = !n.showUnownedBoards
                    }), e.qZA(), e.qZA(), e.TgZ(12, "div", 9), e.TgZ(13, "div", 10), e.YNc(14, il, 2, 1, "ng-container", 11), e.qZA(), e.qZA(), e.qZA(), e.TgZ(15, "div", 12), e.TgZ(16, "header", 6), e.TgZ(17, "gu-heading-text", 7), e._uU(18, " Trinkets "), e.qZA(), e.TgZ(19, "gu-checkbox-input", 8), e.NdJ("onCheck", function () {
                        return n.showUnownedTrinkets = !n.showUnownedTrinkets
                    }), e.qZA(), e.qZA(), e.TgZ(20, "div", 9), e.TgZ(21, "div", 10), e.YNc(22, al, 2, 1, "ng-container", 11), e.qZA(), e.qZA(), e.qZA(), e.qZA(), e.TgZ(23, "header", 13), e.YNc(24, sl, 2, 0, "gu-plain-square-button", 14), e.YNc(25, cl, 2, 1, "gu-heading-text", 15), e.YNc(26, ll, 1, 1, "gu-primary-hex-button", 16), e.qZA(), e.TgZ(27, "section", 17), e.YNc(28, gl, 3, 1, "ng-container", 18), e.YNc(29, pl, 2, 0, "gu-paragraph-text", 19), e.TgZ(30, "gu-selected-trinket", 20), e.NdJ("xButtonClick", function () {
                        return n.clearSelected("left")
                    })("trinketClick", function () {
                        return n.selectTrinket("left")
                    }), e.qZA(), e.TgZ(31, "gu-selected-trinket", 21), e.NdJ("xButtonClick", function () {
                        return n.clearSelected("right")
                    })("trinketClick", function () {
                        return n.selectTrinket("right")
                    }), e.qZA(), e.qZA(), e.YNc(32, ul, 1, 0, "i", 22)), 2 & t && (e.xp6(4), e.Q6J("responsiveSize", e.VKq(18, hl, e.DdM(17, _l))), e.xp6(7), e.Q6J("checked", n.showUnownedBoards), e.xp6(3), e.Q6J("ngForOf", n.allBoards), e.xp6(5), e.Q6J("checked", n.showUnownedTrinkets), e.xp6(3), e.Q6J("ngForOf", n.allTrinkets), e.xp6(2), e.Q6J("ngIf", n.selectedBoard || n.selectedTrinkets.get("left") || n.selectedTrinkets.get("right")), e.xp6(1), e.Q6J("ngIf", n.selectedBoard), e.xp6(1), e.Q6J("ngIf", n.selectedBoard), e.xp6(1), e.ekj("selectedLoadoutItems--active", !!n.selectedBoard), e.xp6(1), e.Q6J("ngIf", n.selectedBoard), e.xp6(1), e.Q6J("ngIf", !n.selectedBoard), e.xp6(1), e.Q6J("trinket", n.selectedTrinkets.get("left"))("highlight", !!n.tempTrinket), e.xp6(1), e.Q6J("trinket", n.selectedTrinkets.get("right"))("highlight", !!n.tempTrinket), e.xp6(1), e.Q6J("ngIf", n.tempTrinket))
                },
                directives: [d.sg, d.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;padding:0 64px}.modalHeader[_ngcontent-%COMP%]{width:100%;height:48px;margin:24px 0;display:flex;justify-content:center;align-items:center;position:relative}.modalHeader__backBtn[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;transform:translateY(-50%);cursor:pointer;text-transform:uppercase;color:#7192b0}.modalHeader__backBtn[_ngcontent-%COMP%]:hover{color:#f6f6f6}.loadoutItemsArea[_ngcontent-%COMP%]{height:70%;display:flex;justify-content:space-between;position:relative}.loadoutItemsArea__listingArea[_ngcontent-%COMP%]{flex:1;height:100%;position:relative;display:flex;flex-direction:column}.loadoutItemsArea__listingArea[_ngcontent-%COMP%]:first-child{margin-right:64px}.loadoutItemsArea__listingArea__overflow[_ngcontent-%COMP%]{height:100%;overflow:hidden;overflow-y:auto}.loadoutItemsArea__listingArea--trinkets[_ngcontent-%COMP%]{opacity:.35}.loadoutItemsArea__listingArea__header[_ngcontent-%COMP%]{position:relative;background:linear-gradient(to left,#0F1B27 0%,#1D2F41 100%);border:1px solid #1D2F41;display:flex;align-items:center;height:60px;padding:0 32px;margin-bottom:8px}.loadoutItemsArea__listingArea__header__checkbox[_ngcontent-%COMP%]{margin-left:auto}.loadoutItemsArea__listingArea__list[_ngcontent-%COMP%]{display:grid;grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));border-bottom:20px solid transparent;margin-right:16px}.middleHeader[_ngcontent-%COMP%]{height:60px;background:linear-gradient(to left,#0F1B27 0%,#1D2F41 100%);border:1px solid #1D2F41;display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 12px}.middleHeader__saveBtn[_ngcontent-%COMP%]{position:absolute;right:12px}.middleHeader__heading[_ngcontent-%COMP%]{margin:0 auto}.selectedLoadoutItems[_ngcontent-%COMP%]{height:35%;max-height:340px;position:relative;border-bottom:none;display:flex;align-items:center;justify-content:center}.selectedLoadoutItems__clearBoardButton[_ngcontent-%COMP%]{position:absolute;top:8px;left:8px}.selectedLoadoutItems__img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.selectedLoadoutItems__trinket[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-45%);width:10%;min-width:120px;max-width:190px}.selectedLoadoutItems__trinket--left[_ngcontent-%COMP%]{left:22.7%}.selectedLoadoutItems__trinket--right[_ngcontent-%COMP%]{right:22.7%}.selectedLoadoutItems__noSelectedBoardsTitle[_ngcontent-%COMP%]{text-transform:uppercase}.loadoutItemsArea__listingArea__list__board[_ngcontent-%COMP%], .loadoutItemsArea__listingArea__list__trinket[_ngcontent-%COMP%]{cursor:pointer;transition:.1s ease-in;transition-property:filter,transform}.loadoutItemsArea__listingArea__list__trinket--selected[_ngcontent-%COMP%], .loadoutItemsArea__listingArea__list__board--selected[_ngcontent-%COMP%]{transform:scale(1.07);filter:drop-shadow(0 0 calc(var(--vh) * 1.5) rgba(89,168,205,.8))}.loadoutItemsArea__listingArea__list__board--disabled[_ngcontent-%COMP%], .loadoutItemsArea__listingArea__list__trinket--disabled[_ngcontent-%COMP%]{opacity:.4;user-select:none;pointer-events:none}.selectedLoadoutItems__saveBtn[_ngcontent-%COMP%]{position:absolute;top:0;right:0;transform:translateY(-50%)}.clickAnywhereOverlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(15,27,39,.8);z-index:2}.selectedLoadoutItems__trinket[_ngcontent-%COMP%], .modalHeader[_ngcontent-%COMP%], .loadoutItemsArea__listingArea__list__item--aboveAll[_ngcontent-%COMP%]{z-index:3}.loadoutItemsArea__listingArea__list__item--aboveAll[_ngcontent-%COMP%]{position:relative}"]
            }), o
        })();

        function ml(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-loadout-display", 6), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().selectLoadout(a)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit;
                e.Q6J("board", t.board)("trinkets", t.trinkets)
            }
        }

        let Zn = (() => {
            class o {
                constructor(t, n, i) {
                    this.modalService = t, this.loadoutService = n, this.akumaService = i, this.unsubscribe = new M.xQ, this.close = () => {
                        this.akumaService.postControlEvent("gu", "Loadouts", "", "close", "Btn", "pressed"), this.modalService.destroyTopModal()
                    }
                }

                ngOnInit() {
                    this.loadoutService.fetchData(), this.initLoadouts()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initLoadouts() {
                    this.loadoutService.loadouts$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(t => {
                        this.loadouts = t
                    })).subscribe()
                }

                createLoadout() {
                    this.akumaService.postControlEvent("gu", "Loadouts", "", "createLoadout", "Btn", "pressed"), this.modalService.createModal(In, {gameModeId: this.gameModeId}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }

                selectLoadout(t) {
                    this.modalService.createModal(In, {loadout: t, gameModeId: this.gameModeId}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(T.Z), e.Y36(pe), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-my-loadouts-modal"]],
                inputs: {gameModeId: "gameModeId"},
                decls: 7,
                vars: 2,
                consts: [[3, "closeButtonClickFn"], [1, "titleAndFiltering"], [1, "titleAndFiltering__title"], [1, "loadoutsListing"], ["text", "Create Loadout", 1, "loadoutsListing__createNewLoadoutButton", 3, "click"], [3, "board", "trinkets", "click", 4, "ngFor", "ngForOf"], [3, "board", "trinkets", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.TgZ(1, "header", 1), e.TgZ(2, "h3", 2), e._uU(3, "Loadouts"), e.qZA(), e.qZA(), e.TgZ(4, "div", 3), e.TgZ(5, "app-create-new-button", 4), e.NdJ("click", function () {
                        return n.createLoadout()
                    }), e.qZA(), e.YNc(6, ml, 1, 2, "gu-loadout-display", 5), e.qZA()), 2 & t && (e.Q6J("closeButtonClickFn", n.close), e.xp6(6), e.Q6J("ngForOf", n.loadouts))
                },
                directives: [ue, Ve, d.sg],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.titleAndFiltering__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.titleAndFiltering__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;padding:0 80px}.loadoutItemsArea[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:space-between}.loadoutItemsArea__listing[_ngcontent-%COMP%]{width:48%;border:1px dashed gold}.selectedLoadoutItems[_ngcontent-%COMP%]{height:calc(var(--vh) * 30);border:1px dashed gold}[_nghost-%COMP%]{display:block;padding:calc(var(--vh) * 7.4) 0 0;height:calc(calc(var(--vh) * 100) - 28px - 80px)}.titleAndFiltering[_ngcontent-%COMP%]{position:absolute;top:0;left:calc(var(--vw) * 4.16);right:calc(var(--vw) * 4.16);height:calc(var(--vh) * 7.4);display:flex;justify-content:center;padding-top:calc(var(--vh) * 3)}.titleAndFiltering[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;width:100%;background:#1d2f41;height:calc(var(--vh) * .25)}.titleAndFiltering__title[_ngcontent-%COMP%]{text-transform:uppercase;color:#f6f6f6}.loadoutsListing[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content;padding:0 calc(var(--vw) * 4.16);padding-top:calc(var(--vh) * 6);height:100%;overflow:hidden;overflow-y:auto}']
            }), o
        })();

        function fl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-loadout-display", 2), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().chooseLoadout()
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("board", t.loadout.board)("trinkets", t.loadout.trinkets)("hideText", !0)
            }
        }

        function Cl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-create-new-button", 3), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().chooseLoadout()
                }), e.qZA()
            }
        }

        let vl = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.audioService = t, this.modalService = n, this.guGameService = i, this.loadoutService = a, this.akumaService = s, this.gameModeId = 0, this.unsubscribe = new M.xQ
                }

                ngOnInit() {
                    this.initLoadout()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initLoadout() {
                    (0, D.aj)([this.loadoutService.loadouts$, this.guGameService.gameModes$]).pipe((0, u.R)(this.unsubscribe), (0, S.U)(([t, {gameModes: n}]) => ({
                        loadouts: t,
                        gameMode: n.find(i => i.id === this.gameModeId)
                    })), (0, P.h)(({loadouts: t, gameMode: n}) => {
                        let i = !!t.length;
                        return i && !n.selectedLoadoutId && (i = !1), i
                    }), (0, S.U)(({
                                      loadouts: t,
                                      gameMode: n
                                  }) => t.find(i => i.collection_id === n.selectedLoadoutId))).subscribe(t => this.loadout = t)
                }

                logSelectLoadout() {
                    this.guGameService.getGameMode$(this.gameModeId).pipe((0, x.q)(1)).subscribe(t => {
                        this.akumaService.postControlEvent("gu", "Arena", "", "addLoadout", "Btn", "pressed", {mode_name: t.name})
                    })
                }

                chooseLoadout() {
                    this.logSelectLoadout(), this.audioService.transitionWorkshop.play(), this.modalService.createModal(Zn, {gameModeId: this.gameModeId}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.pk), e.Y36(T.Z), e.Y36(X.xV), e.Y36(pe), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-game-mode-loadout"]],
                inputs: {gameModeId: "gameModeId"},
                decls: 2,
                vars: 2,
                consts: [["class", "loadout", 3, "board", "trinkets", "hideText", "click", 4, "ngIf"], ["class", "create-button", "text", "Choose Loadout", 3, "click", 4, "ngIf"], [1, "loadout", 3, "board", "trinkets", "hideText", "click"], ["text", "Choose Loadout", 1, "create-button", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, fl, 1, 3, "gu-loadout-display", 0), e.YNc(1, Cl, 1, 0, "app-create-new-button", 1)), 2 & t && (e.Q6J("ngIf", n.loadout), e.xp6(1), e.Q6J("ngIf", !n.loadout))
                },
                directives: [d.O5, Ve],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{width:100%;height:100%;display:flex;transition:transform .15s ease-in-out;position:relative;cursor:pointer}[_nghost-%COMP%]:hover{transform:scale(1.02)}.create-button[_ngcontent-%COMP%]{position:absolute;width:100%;height:calc(var(--vh) * 14);top:0;left:0}.loadout[_ngcontent-%COMP%]  .board__titleArea__title{margin-bottom:calc(var(--vh) * 1.4)}.loadout[_ngcontent-%COMP%]  .innerContainer__qualityBar{height:calc(var(--vh) * .4)}.loadout[_ngcontent-%COMP%]  .icon{font-size:calc(var(--vh) * 2)}.loadout[_ngcontent-%COMP%]  .board__titleArea__title{font-size:calc(var(--vh) * 1.8)}.loadout[_ngcontent-%COMP%]  .board__titleArea__quality{font-size:calc(var(--vh) * 1)}"]
            }), o
        })();
        var Fn = p(14618), Dn = p(69931);

        function bl(o, r) {
            1 & o && e._UZ(0, "img", 7), 2 & o && e.Q6J("src", "/gu-assets/images/arena/update-lock.svg", e.LSH)
        }

        function wl(o, r) {
            1 & o && e._UZ(0, "img", 7), 2 & o && e.Q6J("src", "/gu-assets/images/arena/update-error.svg", e.LSH)
        }

        function xl(o, r) {
            1 & o && e.GkF(0)
        }

        const Ml = function () {
            return ["/game/gu/temple"]
        };

        function yl(o, r) {
            1 & o && (e.TgZ(0, "div", 8), e.TgZ(1, "h6", 9), e._uU(2, "Please Open Packs"), e.qZA(), e._UZ(3, "gu-primary-hex-button", 10), e.qZA()), 2 & o && (e.xp6(3), e.Q6J("routerLink", e.DdM(1, Ml)))
        }

        function kl(o, r) {
            if (1 & o && (e.TgZ(0, "div", 8), e.TgZ(1, "div", 11), e.TgZ(2, "div", 12), e._uU(3), e.qZA(), e.TgZ(4, "div", 13), e._uU(5), e.qZA(), e.qZA(), e._UZ(6, "app-progress-bar", 14), e.TgZ(7, "h5", 15), e._uU(8), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.hij("Level ", null == t.playerProperties ? null : t.playerProperties.level, ""), e.xp6(2), e.hij("Level ", null == t.lock ? null : t.lock.lvlReq, ""), e.xp6(1), e.Q6J("percentage", t.percentage)("height", t.progressBarHeight)("showDivider", !0)("animateFirstValue", !0), e.xp6(2), e.hij("Reach level ", null == t.lock ? null : t.lock.lvlReq, " to unlock")
            }
        }

        function Ol(o, r) {
            if (1 & o && (e.TgZ(0, "div", 20), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(3);
                e.xp6(1), e.hij("", t.updatePercentage, " %")
            }
        }

        function Pl(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, " DOWNLOAD IN PROGRESS "), e.qZA(), e.TgZ(3, "gu-paragraph-text", 18), e._uU(4, " You may not queue for a match until the update is complete "), e.qZA(), e.YNc(5, Ol, 2, 1, "div", 19), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(5), e.Q6J("ngIf", void 0 !== t.updatePercentage)
            }
        }

        function Sl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, "UPDATE REQUIRED"), e.qZA(), e.TgZ(3, "gu-primary-hex-button", 21), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).updateGame()
                }), e.qZA(), e.BQk()
            }
        }

        function Tl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, " DOWNLOAD FAILED "), e.qZA(), e.TgZ(3, "gu-paragraph-text", 18), e._uU(4, " Check your internet connection, and that you have sufficient disk space. "), e.qZA(), e.TgZ(5, "gu-primary-hex-button", 22), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).updateGame()
                }), e.qZA(), e.BQk()
            }
        }

        function Al(o, r) {
            if (1 & o && (e._UZ(0, "div", 16), e.TgZ(1, "div", 8), e.YNc(2, Pl, 6, 1, "ng-container", 17), e.YNc(3, Sl, 4, 0, "ng-container", 17), e.YNc(4, Tl, 6, 0, "ng-container", 17), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("ngIf", t.isUpdating && !t.updateError), e.xp6(1), e.Q6J("ngIf", t.isUpdateRequired && !t.isUpdating && !t.updateError), e.xp6(1), e.Q6J("ngIf", t.updateError)
            }
        }

        function Il(o, r) {
            1 & o && e._UZ(0, "div", 16)
        }

        function Zl(o, r) {
            1 & o && e._UZ(0, "div", 25)
        }

        function Fl(o, r) {
            if (1 & o && (e.TgZ(0, "div", 20), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(3);
                e.xp6(1), e.hij("", t.assetsUpdatePercentage, " %")
            }
        }

        function Dl(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, " UPDATE IN PROGRESS "), e.qZA(), e.TgZ(3, "gu-paragraph-text", 18), e._uU(4, " You may not queue for a match until the update is complete "), e.qZA(), e.YNc(5, Fl, 2, 1, "div", 19), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(5), e.Q6J("ngIf", void 0 !== t.assetsUpdatePercentage)
            }
        }

        function Gl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, " DOWNLOAD FAILED "), e.qZA(), e.TgZ(3, "gu-paragraph-text", 18), e._uU(4, " Check your internet connection, and that you have sufficient disk space. "), e.qZA(), e.TgZ(5, "gu-primary-hex-button", 22), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).updateNewAssets()
                }), e.qZA(), e.BQk()
            }
        }

        function Bl(o, r) {
            if (1 & o && (e.YNc(0, Il, 1, 0, "div", 23), e.YNc(1, Zl, 1, 0, "div", 24), e.TgZ(2, "div", 8), e.YNc(3, Dl, 6, 1, "ng-container", 17), e.YNc(4, Gl, 6, 0, "ng-container", 17), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Q6J("ngIf", !t.assetsUpdateError), e.xp6(1), e.Q6J("ngIf", t.assetsUpdateError), e.xp6(2), e.Q6J("ngIf", !t.assetsUpdateError), e.xp6(1), e.Q6J("ngIf", t.assetsUpdateError)
            }
        }

        function Ll(o, r) {
            1 & o && (e.TgZ(0, "div", 8), e.TgZ(1, "h6", 9), e._uU(2, "Locked"), e.qZA(), e.qZA())
        }

        let Ul = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.progressionService = t, this.guUserService = n, this.resizeService = i, this.ngrxStore = a, this.guGameService = s, this.isUpdating = !1, this.updateError = !1, this.isUpdateRequired = !1, this.isAssetsUpdateRequired = !1, this.assetsUpdateError = !1, this.assetsUpdateInProgress = !1, this.updatePercentage = 0, this.LockType = O.Gn, this.unsubscribe = new M.xQ
                }

                ngOnInit() {
                    this.lock.type === O.Gn.LEVEL && this.loadProgress(), this.resizeService.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({vh: t}) => this.progressBarHeight = 2.5 * t)).subscribe(), this.watchForUpdateState(), this.watchForAssetsUpdateState(), this.lock.type === O.Gn.ASSETS_UPDATE && !this.assetsUpdateInProgress && (this.assetsUpdateInProgress = !0, this.updateNewAssets())
                }

                ngOnChanges(t) {
                    for (const n in t) if (t.hasOwnProperty(n)) switch (n) {
                        case"lock":
                            if (t[n].previousValue && t[n].previousValue.type === O.Gn.UPDATE && t[n].currentValue.type === O.Gn.ASSETS_UPDATE && !this.assetsUpdateInProgress) {
                                this.assetsUpdateInProgress = !0, this.updateNewAssets();
                                break
                            }
                    }
                }

                updateGame() {
                    this.ngrxStore.dispatch(new Fn.Kg)
                }

                updateNewAssets() {
                    this.isAssetsUpdateRequired && this.ngrxStore.dispatch(new Fn.$9)
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                watchForUpdateState() {
                    this.ngrxStore.select((0, Dn.DM)()).pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => !!t)).subscribe(t => {
                        this.isUpdateRequired = t.isUpdateRequired, this.isUpdating = "downloading" === t.status || "extracting" === t.status, this.updateError = "error" === t.status, this.updatePercentage = t.percentage, "completed" === t.status && this.guGameService.fetchGameModes()
                    })
                }

                watchForAssetsUpdateState() {
                    this.ngrxStore.select((0, Dn.gP)()).pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => !!t)).subscribe(t => {
                        this.isAssetsUpdateRequired = t.isUpdateRequired, this.assetsUpdateInProgress = "downloading" === t.status, this.assetsUpdateError = "error" === t.status, this.assetsUpdatePercentage = t.percentage, "completed" === t.status && this.guGameService.fetchGameModes()
                    })
                }

                loadProgress() {
                    (0, D.aj)([this.guUserService.extendedAccountProperties$, this.progressionService.accountThresholds$]).pipe((0, u.R)(this.unsubscribe), (0, S.U)(([t, n]) => ({
                        playerProperties: t,
                        lvlThreshold: n.find(i => i.level === this.lock.lvlReq)
                    })), (0, w.b)(t => {
                        this.playerProperties = t.playerProperties, this.lvlThreshold = t.lvlThreshold, this.percentage = 100 * t.playerProperties.total_xp / t.lvlThreshold.exp
                    })).subscribe()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36($.$z), e.Y36(ne.MZ), e.Y36(K._), e.Y36(en.yh), e.Y36(X.xV))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-lock"]],
                inputs: {lock: "lock"},
                features: [e.TTD],
                decls: 13,
                vars: 3,
                consts: [["class", "lock__icon", 3, "src", 4, "ngIf"], [4, "ngTemplateOutlet"], ["cards", ""], ["level", ""], ["update", ""], ["updateAssets", ""], ["locked", ""], [1, "lock__icon", 3, "src"], [1, "lock__contentArea"], [1, "heading"], ["text", "Temple", 1, "lock_action_button", 3, "routerLink"], [1, "lock__contentArea__rankArea"], [1, "rank", "middle"], [1, "rank", "right"], [1, "lock__contentArea__progressBar", 3, "percentage", "height", "showDivider", "animateFirstValue"], [1, "lock__contentArea__reachHint"], [1, "lock__contentArea__dividerNormal"], [4, "ngIf"], ["kind", "tag", 1, "heading__info"], ["class", "heading__percentage", 4, "ngIf"], [1, "heading__percentage"], ["text", "Update", 1, "lock_action_button", 3, "click"], ["text", "Retry", 1, "lock_action_button", 3, "click"], ["class", "lock__contentArea__dividerNormal", 4, "ngIf"], ["class", "lock__contentArea__dividerError", 4, "ngIf"], [1, "lock__contentArea__dividerError"]],
                template: function (t, n) {
                    if (1 & t && (e.YNc(0, bl, 1, 1, "img", 0), e.YNc(1, wl, 1, 1, "img", 0), e.YNc(2, xl, 1, 0, "ng-container", 1), e.YNc(3, yl, 4, 2, "ng-template", null, 2, e.W1O), e.YNc(5, kl, 9, 7, "ng-template", null, 3, e.W1O), e.YNc(7, Al, 5, 3, "ng-template", null, 4, e.W1O), e.YNc(9, Bl, 5, 4, "ng-template", null, 5, e.W1O), e.YNc(11, Ll, 3, 0, "ng-template", null, 6, e.W1O)), 2 & t) {
                        const i = e.MAs(4), a = e.MAs(6), s = e.MAs(8), c = e.MAs(10), l = e.MAs(12);
                        e.Q6J("ngIf", !n.assetsUpdateError && !n.updateError), e.xp6(1), e.Q6J("ngIf", n.assetsUpdateError || n.updateError), e.xp6(1), e.Q6J("ngTemplateOutlet", n.lock.type === n.LockType.CARDS ? i : n.lock.type === n.LockType.UPDATE ? s : n.lock.type === n.LockType.ASSETS_UPDATE ? c : n.lock.type === n.LockType.LEVEL ? a : l)
                    }
                },
                directives: [d.O5, d.tP, de.rH, Ie],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.heading__percentage[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%], .lock__contentArea__reachHint[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .lock__contentArea__rankArea[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.lock__contentArea__reachHint[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.heading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.heading__percentage[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}[_nghost-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(15,27,39,.8);display:flex;flex-flow:column nowrap;z-index:1}.lock__icon[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 8);margin-bottom:calc(var(--vh) * 8);width:calc(var(--vw) * 10);margin-left:auto;margin-right:auto}.heading[_ngcontent-%COMP%]{margin-top:15px}.heading__info[_ngcontent-%COMP%]{color:#d7d7d7;margin:10px 35px}.lock_action_button[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2);align-self:center}.lock__contentArea[_ngcontent-%COMP%]{margin:0 auto;display:flex;text-align:center;flex-flow:column nowrap;color:#f6f6f6}.lock__contentArea__dividerNormal[_ngcontent-%COMP%]{height:5px;background:linear-gradient(90deg,#fff2d8 0%,#ebc98b 50.34%,#c6a052 100%);transform:scaleY(-1)}.lock__contentArea__dividerError[_ngcontent-%COMP%]{height:5px;background:linear-gradient(270deg,#d73333 0%,#ff8b01 100.97%);transform:scaleY(-1)}.lock__contentArea__rankArea[_ngcontent-%COMP%]{display:flex;position:relative;align-items:center;margin-bottom:calc(var(--vh) * 1)}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%]{white-space:nowrap}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{text-align:center;font-weight:700;position:absolute;width:100%}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{margin-left:auto}.lock__contentArea__reachHint[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2)}"]
            }), o
        })();
        var ql = p(55943);

        function El(o, r) {
            1 & o && e._UZ(0, "app-card2", 10), 2 & o && e.Q6J("protoId", r.$implicit)
        }

        let Nl = (() => {
            class o {
                constructor(t) {
                    this.activeModal = t, this.protos = [], this.god = "neutral", this.onContinueClicked = () => {
                    }
                }

                ngOnInit() {
                }

                closeModal() {
                    this.activeModal.close("GuSealedDeckWelcomeModal closed")
                }

                clickContinue() {
                    this.onContinueClicked(), this.closeModal()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(B.mX))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["gu-sealed-deck-welcome-modal"]],
                inputs: {
                    protos: "protos",
                    totalCards: "totalCards",
                    god: "god",
                    onContinueClicked: "onContinueClicked"
                },
                decls: 17,
                vars: 6,
                consts: [[3, "background", "onCloseSealedDeckModal"], ["slot", "topSectionSubtitle", "fillColor", "colors.light.300", "kind", "large", "align", "left", "fontWeight", "bold", 1, "topSection__subtitle"], ["slot", "topSectionTitle", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "large"], ["slot", "bottomSectionContent", "top", "large", "bottom", "small"], ["bottom", "large", 1, "bottomSection__cards"], ["class", "bottomSection__cards__card", 3, "protoId", 4, "ngFor", "ngForOf"], ["both", "medium"], ["fillColor", "colors.light.100", "kind", "large", "fontWeight", "bold", "align", "center"], ["fillColor", "colors.light.100", "kind", "large", "align", "center"], ["slot", "bottomSectionCta", "size", "large", 1, "bottomSection__cta", 3, "click"], [1, "bottomSection__cards__card", 3, "protoId"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-two-section-modal", 0), e.NdJ("onCloseSealedDeckModal", function () {
                        return n.closeModal()
                    }), e.TgZ(1, "gu-paragraph-text", 1), e._uU(2), e.ALo(3, "titlecase"), e.qZA(), e.TgZ(4, "gu-heading-text", 2), e._uU(5, " Sealed Deck Event "), e.qZA(), e.TgZ(6, "gu-vertical-space", 3), e.TgZ(7, "gu-vertical-space", 4), e.YNc(8, El, 1, 1, "app-card2", 5), e.qZA(), e.TgZ(9, "gu-vertical-space", 6), e.TgZ(10, "gu-paragraph-text", 7), e._uU(11), e.qZA(), e.qZA(), e.TgZ(12, "gu-vertical-space", 6), e.TgZ(13, "gu-paragraph-text", 8), e._uU(14, " Build a deck using any 30 of those cards you want, even those from other domains. Earn enough victories, and you will get to keep these three cards and win other prizes! "), e.qZA(), e.qZA(), e.qZA(), e.TgZ(15, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                        return n.clickContinue()
                    }), e._uU(16, " Continue "), e.qZA(), e.qZA()), 2 & t && (e.Q6J("background", n.god), e.xp6(2), e.hij(" You have chosen to align with the God of ", e.lcZ(3, 4, n.god), " "), e.xp6(6), e.Q6J("ngForOf", n.protos), e.xp6(3), e.hij(" You have received the blessing of ", n.totalCards, " cards to use during this event. "))
                },
                directives: [d.sg, H],
                pipes: [d.rS],
                styles: [".bottomSection__cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.bottomSection__cards__card[_ngcontent-%COMP%]{margin:0 16px;width:180px}@media only screen and (min-width: 1400px){.bottomSection__cards__card[_ngcontent-%COMP%]{width:240px}}"]
            }), o
        })();

        function Rl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-vertical-space", 5), e.TgZ(1, "gu-vertical-space", 6), e.TgZ(2, "gu-paragraph-text", 7), e._uU(3), e.ALo(4, "date"), e.qZA(), e.qZA(), e.TgZ(5, "gu-special-hex-button", 8), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clickJoinNow()
                }), e._uU(6, " JOIN WITH "), e.TgZ(7, "span", 9), e._uU(8), e.qZA(), e._UZ(9, "gu-icon", 10), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(3), e.hij(" Signup before ", e.Dn7(4, 3, t.gameMode.properties.entry_cutoff, "EEEE haa", "AEDT"), " AEDT "), e.xp6(2), e.Q6J("disabled", t.userStarTotal < t.gameMode.properties.entry_cost), e.xp6(3), e.Oqu(t.gameMode.properties.entry_cost)
            }
        }

        const Ql = function () {
            return ["days", "hours", "minutes", "seconds"]
        };

        function Hl(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 11), e.TgZ(1, "gu-vertical-space", 12), e.TgZ(2, "gu-paragraph-text", 13), e._uU(3, " Thank you for joining! The event will commence in: "), e.qZA(), e.qZA(), e._UZ(4, "gu-countdown-timer", 14), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(4), e.Q6J("targetTime", t.startTimestamp)("showFields", e.DdM(2, Ql))
            }
        }

        function Yl(o, r) {
            1 & o && e.GkF(0)
        }

        function Jl(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 15), e.TgZ(1, "gu-vertical-space", 16), e.TgZ(2, "gu-paragraph-text", 17), e._uU(3, " Your Record "), e.qZA(), e.qZA(), e.YNc(4, Yl, 1, 0, "ng-container", 18), e.qZA()), 2 & o) {
                e.oxw();
                const t = e.MAs(5);
                e.xp6(4), e.Q6J("ngTemplateOutlet", t)
            }
        }

        function $l(o, r) {
            1 & o && e.GkF(0)
        }

        function Wl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-vertical-space", 19), e.TgZ(1, "gu-vertical-space", 20), e.TgZ(2, "gu-paragraph-text", 17), e._uU(3, " You have completed your run! "), e.qZA(), e.qZA(), e.YNc(4, $l, 1, 0, "ng-container", 18), e.TgZ(5, "gu-special-hex-button", 21), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clickCollectRewards()
                }), e._uU(6, " Collect Rewards "), e.qZA(), e.qZA()
            }
            if (2 & o) {
                e.oxw();
                const t = e.MAs(5);
                e.xp6(4), e.Q6J("ngTemplateOutlet", t)
            }
        }

        function zl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-paragraph-text", 28), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).clickDropOut()
                }), e._uU(1, " DROP OUT "), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw(2);
                e.ekj("winsLosses__dropCta--disabled", t.queueActive)
            }
        }

        const Vl = function () {
            return {breakpoint: "x-large", bottomSize: "x-large"}
        }, jl = function (o) {
            return [o]
        };

        function Xl(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 22), e.TgZ(1, "gu-paragraph-text", 23), e._uU(2, " WINS "), e.qZA(), e._UZ(3, "gu-progress-step-counter", 24), e.qZA(), e.TgZ(4, "gu-vertical-space", 25), e.TgZ(5, "gu-paragraph-text", 23), e._uU(6, " LOSSES "), e.qZA(), e._UZ(7, "gu-progress-step-counter", 26), e.YNc(8, zl, 2, 2, "gu-paragraph-text", 27), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Q6J("responsiveSize", e.VKq(7, jl, e.DdM(6, Vl))), e.xp6(3), e.Q6J("filledSteps", t.wins)("totalSteps", t.gameMode.properties.max_wins), e.xp6(4), e.Q6J("filledSteps", t.losses)("totalSteps", t.gameMode.properties.max_losses), e.xp6(1), e.Q6J("ngIf", t.sealedModeStatus === t.SealedModeStatus.STARTED)
            }
        }

        let Kl = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k) {
                    this.audioService = t, this.sealedService = n, this.modalService = i, this.starsService = a, this.cerberusModalService = s, this.decksService = c, this.akuma = l, this.cardsService = g, this.packService = b, this.loadoutService = C, this.guGameService = k, this.sealedModeStatus = Y.r.AVAILABLE, this.wins = 0, this.losses = 0, this.userStarTotal = 0, this.unsubscribe = new M.xQ, this.SealedModeStatus = Y.r
                }

                get getClass() {
                    return this.sealedModeStatus === Y.r.STARTED || this.sealedModeStatus === Y.r.REWARDS_AVAILABLE
                }

                ngOnInit() {
                    this.watchSealMode(), this.initStars()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initStars() {
                    this.starsService.fetchUserStarsTotal(), this.starsService.userStarTotal$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => this.userStarTotal = t)
                }

                watchSealMode() {
                    this.sealedService.sealedMode$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.sealedMode = t, t && (this.wins = t.wins, this.losses = t.losses, this.startTimestamp = new Date(t.game_mode_data.properties.start_time_server).getTime() / 1e3)
                    })
                }

                clickCollectRewards() {
                    this.akuma.postEvent("Control", "arenaHome_SealedDeckCollectRewardsBtn_pressed"), this.akuma.postEvent("Flow", "_sealDeckRun_succeeded"), "function" == typeof gtag && gtag("event", "_sealDeckRun_succeeded"), this.collectRewards()
                }

                collectRewards() {
                    this.sealedService.claimRewards$(this.sealedMode.sealed_id).pipe((0, x.q)(1)).subscribe(t => {
                        this.handleRewards(t)
                    })
                }

                handleRewards(t) {
                    this.cardsService.fetchInventory(), this.packService.fetchUnopenedPacks(), this.loadoutService.fetchData(), this.modalService.destroyTopModal(), this.modalService.createModal(vn, {rewards: t}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Fullscreen
                    }), this.sealedService.fetchSealed()
                }

                onGodSelect(t, n) {
                    this.sealedService.enterSealed$(t).pipe((0, x.q)(1)).subscribe(i => {
                        this.decksService.fetchDecks(), this.starsService.fetchUserStarsTotal(), this.decksService.selectActiveDeckById(i.deck_id), this.decksService.updateDeckSelectMode(!0, O.B_.SEALED_DECK), n();
                        const a = i.prizes.map(s => s.proto);
                        this.openWelcomeModal(t, a, i.deck_id, i.protos.length)
                    }, i => {
                        this.showInfoModal("Unable to enter", i && i.error && "entry cutoff expired" === i.error.error ? "The entry cutoff for Sealed Deck has been reached." : i && i.error && "Not enough stars balance" === i.error.error ? "Insufficient stars balance." : "There was an error joining. Please try again later.")
                    })
                }

                openWelcomeModal(t, n, i, a) {
                    const c = this.cerberusModalService.open(Nl).componentInstance;
                    c.god = t, c.protos = n, c.totalCards = a, c.onContinueClicked = this.onWelcomeModalContinueClicked.bind(this, n, i)
                }

                onWelcomeModalContinueClicked(t, n) {
                    this.audioService.clickItemV2.play(), this.akuma.postEvent("Screen", "sealeddeckGodchosen_opened"), this.modalService.createModal(On, {}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }

                clickDropOut() {
                    this.akuma.postEvent("Control", "arenaHome_dropoutSealedBtn_pressed"), this.akuma.postEvent("Flow", "_sealedDeckRun_failed"), "function" == typeof gtag && gtag("event", "_sealedDeckRun_failed"), this.audioService.clickItemV1.play(), this.modalService.createModal(fn, {
                        okButtonText: "Drop out",
                        message: "Dropping out will finish this run of Sealed Deck, and award prizes for your current number of wins.",
                        onOk: () => {
                            this.collectRewards()
                        },
                        direction: "down"
                    }, {position: m.e1.Custom, customPosition: ".winsLosses__dropCta:top"})
                }

                clickJoinNow() {
                    this.akuma.postEvent("Control", "arenaHome_joinsSealedBtn_pressed", {cost: this.gameMode.properties.entry_cost}), this.akuma.postEvent("Flow", "_sealedDeckRun_started", {cost: this.gameMode.properties.entry_cost}), "function" == typeof gtag && gtag("event", "_sealedDeckRun_started", {cost: this.gameMode.properties.entry_cost}), this.guGameService.clearGameModeDeck(O.B_.SEALED_DECK, !1), this.guGameService.fetchGameModes(), this.audioService.clickItemV2.play(), this.modalService.createModal(Sn, {
                        gameModeType: O.tO.SEALED_DECK,
                        gameModeId: O.B_.SEALED_DECK,
                        onGodSelect: this.onGodSelect.bind(this)
                    }, {blurredBackground: !0, canCloseFromOutside: !1, position: m.e1.Center, size: m.Cg.Workarea})
                }

                showInfoModal(t, n) {
                    this.modalService.createModal(Tn.S, {title: t, text: n}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: m.e1.Center,
                        size: m.Cg.StretchableWorkarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.pk), e.Y36(Y.H), e.Y36(T.Z), e.Y36(_.cM), e.Y36(ql.Q), e.Y36(j.D), e.Y36(_.jt), e.Y36(_.dK), e.Y36(me.F), e.Y36(pe), e.Y36(X.xV))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["gu-sealed-mode-card"]],
                hostVars: 2,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("topBorder", n.getClass)
                },
                inputs: {gameMode: "gameMode", sealedModeStatus: "sealedModeStatus", queueActive: "queueActive"},
                decls: 6,
                vars: 4,
                consts: [["top", "x-small", "class", "section availableSection", 4, "ngIf"], ["top", "x-small", "class", "section waitingToStartSection", 4, "ngIf"], ["top", "x-small", "class", "section startedSection", 4, "ngIf"], ["top", "x-small", "class", "section rewardsSection", 4, "ngIf"], ["winsLossesTemplate", ""], ["top", "x-small", 1, "section", "availableSection"], ["bottom", "medium", 1, "availableSection__infoText"], ["align", "center", "fillColor", "colors.gunmetal.100"], [1, "availableSection__joinCta", 3, "disabled", "click"], [1, "availableSection__joinCta__price"], ["iconLigature", "collectable_stars", "fillGradientTarget", "top", "fillGradient", "gradients.apocyan.simple", 1, "availableSection__joinCta__icon"], ["top", "x-small", 1, "section", "waitingToStartSection"], ["bottom", "medium", 1, "waitingToStartSection__infoText"], ["align", "center", "fillColor", "colors.light.100", "fontWeight", "bold", "kind", "large"], ["size", "small", 1, "waitingToStartSection__countdown", 3, "targetTime", "showFields"], ["top", "x-small", 1, "section", "startedSection"], ["bottom", "medium", 1, "startedSection__infoText"], ["align", "left", "fillColor", "colors.light.100", "fontWeight", "bold", "kind", "large"], [4, "ngTemplateOutlet"], ["top", "x-small", 1, "section", "rewardsSection"], ["top", "large", "bottom", "medium", 1, "rewardsSection__infoText"], [1, "rewardsSection__joinCta", 3, "click"], ["bottom", "small", 1, "winsLosses", 3, "responsiveSize"], ["align", "center", "fillColor", "colors.gunmetal.100", "kind", "tag", 1, "winsLosses__tag"], ["fillGradient", "gradients.apocyan.simple", "fillGradientTarget", "top left", "bridgeColor", "colors.apocyan.300", "squareSize", "calc(var(--vh) * 2)", 1, "winsLosses__progress", 3, "filledSteps", "totalSteps"], [1, "winsLosses"], ["fillGradient", "gradients.god.war", "fillGradientTarget", "top left", "bridgeColor", "colors.god.war.tertiary", "squareSize", "calc(var(--vh) * 2)", 1, "winsLosses__progress", 3, "filledSteps", "totalSteps"], ["class", "winsLosses__dropCta", "align", "center", "fillColor", "colors.god.war.secondary", "kind", "tag", 3, "winsLosses__dropCta--disabled", "click", 4, "ngIf"], ["align", "center", "fillColor", "colors.god.war.secondary", "kind", "tag", 1, "winsLosses__dropCta", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Rl, 10, 7, "gu-vertical-space", 0), e.YNc(1, Hl, 5, 3, "gu-vertical-space", 1), e.YNc(2, Jl, 5, 1, "gu-vertical-space", 2), e.YNc(3, Wl, 7, 1, "gu-vertical-space", 3), e.YNc(4, Xl, 9, 9, "ng-template", null, 4, e.W1O)), 2 & t && (e.Q6J("ngIf", n.sealedModeStatus === n.SealedModeStatus.AVAILABLE), e.xp6(1), e.Q6J("ngIf", n.sealedModeStatus === n.SealedModeStatus.WAITING_TO_START), e.xp6(1), e.Q6J("ngIf", n.sealedModeStatus === n.SealedModeStatus.STARTED), e.xp6(1), e.Q6J("ngIf", n.sealedModeStatus === n.SealedModeStatus.REWARDS_AVAILABLE))
                },
                directives: [d.O5, d.tP],
                pipes: [d.uU],
                styles: ['[_nghost-%COMP%]{display:flex;flex-grow:1;justify-content:center;position:relative}.topBorder[_nghost-%COMP%]:before{display:block;position:absolute;content:"";border:#0F1B27;border-bottom:#1D2F41;border-style:solid;border-width:1px;height:2px;width:calc(var(--vw) * 26.56)}.section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.availableSection__joinCta[_ngcontent-%COMP%]{margin:0 auto}.availableSection__joinCta__price[_ngcontent-%COMP%]{background-image:linear-gradient(to top,#AFFAED 0%,#54BBCD 100%);color:transparent;-webkit-background-clip:text;background-clip:text}.availableSection__joinCta__icon[_ngcontent-%COMP%]{display:inline-flex}.availableSection__infoText[_ngcontent-%COMP%], .waitingToStartSection__infoText[_ngcontent-%COMP%]{margin-top:auto}.waitingToStartSection__countdown[_ngcontent-%COMP%]{align-self:center}.startedSection__infoText[_ngcontent-%COMP%]{margin-top:auto}.winsLosses[_ngcontent-%COMP%]{display:flex;align-items:center}.winsLosses__tag[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:64px;height:24px;background:#1D2F41}.winsLosses__progress[_ngcontent-%COMP%]{margin-left:12px}.winsLosses__dropCta[_ngcontent-%COMP%]{position:relative;text-decoration:underline;cursor:pointer;margin-left:auto;margin-right:16px}.winsLosses__dropCta--disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default;opacity:.6}.rewardsSection__joinCta[_ngcontent-%COMP%]{margin:auto auto 0}']
            }), o
        })();

        function ed(o, r) {
            if (1 & o && (e.ynx(0), e._uU(1), e.ALo(2, "date"), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" Event Starts: ", e.Dn7(2, 1, t.gameMode.properties.start_time_server, "EEEE h:mmaa", "AEDT"), " AEDT ")
            }
        }

        function td(o, r) {
            if (1 & o && (e.ynx(0), e._uU(1), e.ALo(2, "dateTo"), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" Time Remaining: ", e.Dn7(2, 1, t.gameMode.end_timestamp_server, t.nowDate, !1), " ")
            }
        }

        function nd(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 19), e.YNc(1, ed, 3, 5, "ng-container", 14), e.YNc(2, td, 3, 5, "ng-container", 14), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", t.sealedModeStatus === t.SealedModeStatus.AVAILABLE || t.sealedModeStatus === t.SealedModeStatus.WAITING_TO_START), e.xp6(1), e.Q6J("ngIf", t.sealedModeStatus === t.SealedModeStatus.STARTED || t.sealedModeStatus === t.SealedModeStatus.REWARDS_AVAILABLE)
            }
        }

        function od(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-vertical-space", 20), e.TgZ(1, "a", 21), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().learnMore()
                }), e._uU(2), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(2), e.hij(" ", t.gameMode.id === t.GuGameModeId.DIRECT_CHALLENGE ? "LEARN MORE" : "VIEW RULES & PRIZES", " ")
            }
        }

        function id(o, r) {
            if (1 & o && (e.TgZ(0, "div", 22), e._uU(1), e.ALo(2, "dateTo"), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" ", e.Dn7(2, 1, t.refreshDate, t.nowDate, !1), " ")
            }
        }

        function rd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 23), e._UZ(1, "app-win-visualisation", 24), e._UZ(2, "app-loss-visualisation", 25), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("winCount", t.wins), e.xp6(1), e.Q6J("lossCount", t.losses)
            }
        }

        function ad(o, r) {
            1 & o && (e.TgZ(0, "div", 31), e._UZ(1, "img", 32), e._UZ(2, "div", 33), e.TgZ(3, "label", 34), e._uU(4, "Weekend Event"), e.qZA(), e.qZA())
        }

        function sd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 26, 27), e.YNc(2, ad, 5, 0, "div", 28), e._UZ(3, "img", 29), e.TgZ(4, "div", 30), e._uU(5), e.qZA(), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("ngIf", t.gameMode.properties.sub_type === t.GuGameModeSubType.WEEKEND_EVENT), e.xp6(1), e.MGl("src", "/gu-assets/images/rank-progress/gu-progress-rank-cracks--", t.shieldCrackCount, ".svg", e.LSH), e.xp6(1), e.ekj("cardHeader__shield__rankInitials--maxRank", t.isMaxRank), e.xp6(1), e.hij(" ", t.currentRankInitials, " ")
            }
        }

        function cd(o, r) {
            1 & o && (e.TgZ(0, "div", 46), e._uU(1, " vs "), e.qZA())
        }

        function ld(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-deck", 47), e.NdJ("selectDeck", function (i) {
                    return e.CHM(t), e.oxw(3).selectDeck(i, !0)
                }), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw(3);
                e.Q6J("deck", t.selectedAIDeck)("emptyText", t.aiEmptyDeck)("hideGodName", !0)
            }
        }

        function dd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "div", 41), e.TgZ(2, "app-deck", 42), e.NdJ("selectDeck", function (i) {
                    return e.CHM(t), e.oxw(2).selectDeck(i)
                }), e.qZA(), e.YNc(3, cd, 2, 0, "div", 43), e.YNc(4, ld, 1, 3, "app-deck", 44), e.qZA(), e._UZ(5, "app-game-mode-loadout", 45), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw(2);
                e.xp6(2), e.Q6J("deck", t.selectedDeck)("emptyText", t.emptyDeckText)("hideGodName", !0), e.xp6(1), e.Q6J("ngIf", t.gameMode.type === t.GuGameModeType.SOLO), e.xp6(1), e.Q6J("ngIf", t.gameMode.type === t.GuGameModeType.SOLO), e.xp6(1), e.Q6J("gameModeId", t.gameMode.id)
            }
        }

        function gd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 50), e._UZ(1, "i", 51), e.TgZ(2, "gu-simple-text", 52), e.TgZ(3, "strong"), e._uU(4), e.qZA(), e.qZA(), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.xp6(4), e.Oqu(t)
            }
        }

        function pd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 48), e.YNc(1, gd, 5, 1, "div", 49), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.Q6J("ngForOf", t.tutorialBullets)
            }
        }

        function ud(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 35), e.YNc(1, dd, 6, 6, "ng-container", 36), e.YNc(2, pd, 2, 1, "ng-template", null, 37, e.W1O), e.TgZ(4, "div", 38), e.TgZ(5, "app-gu-queue-button", 39, 40), e.NdJ("openDeckSelect", function (i) {
                    return e.CHM(t), e.oxw().openDeckSelect(i)
                }), e.qZA(), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.MAs(3), n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", n.gameMode.type !== n.GuGameModeType.TUTORIAL)("ngIfElse", t), e.xp6(3), e.ekj("hidden", n.gameMode.lock), e.xp6(1), e.Q6J("mode", n.gameMode)("deck", n.getPlayDeck(n.selectedDeck))("opponentsDeck", n.getPlayDeck(n.selectedAIDeck))("challengeCode", n.challengeCodeVal)("accountProperties", n.accountProperties)("disabled", n.gameMode.id === n.GuGameModeId.DIRECT_CHALLENGE && n.challengeCode.invalid)
            }
        }

        function _d(o, r) {
            if (1 & o && (e.TgZ(0, "div", 53), e.TgZ(1, "div", 54), e._uU(2), e.ALo(3, "titlecase"), e.qZA(), e.TgZ(4, "div", 55), e._uU(5), e.ALo(6, "titlecase"), e.qZA(), e._UZ(7, "app-progress-bar", 56), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Oqu(e.lcZ(3, 9, t.currentRankName)), e.xp6(3), e.hij(" ", e.lcZ(6, 11, t.nextRankName), " "), e.xp6(2), e.Q6J("forGameModeCard", !0)("showDivider", !0)("dividerPercentage", t.gameModeRank.safety_line)("percentage", t.gameModeRank.win_points)("height", t.progressBarHeight)("animateFirstValue", !1)("supressAnimation", !0)
            }
        }

        function hd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 57), e.TgZ(1, "app-flux-progress-box", 58), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openGauntletProgress()
                }), e.ynx(2, 59), e._uU(3, "gauntlet of the gods"), e.BQk(), e.ynx(4, 60), e._uU(5, "gather flux"), e.BQk(), e.qZA(), e.qZA()
            }
        }

        function md(o, r) {
        }

        function fd(o, r) {
            1 & o && (e.TgZ(0, "div"), e.TgZ(1, "div", 61), e.TgZ(2, "picture"), e._UZ(3, "img", 62), e.qZA(), e.TgZ(4, "picture"), e._UZ(5, "img", 63), e.qZA(), e.TgZ(6, "div", 64), e._uU(7, " New players receive "), e.TgZ(8, "strong"), e._uU(9, "3 Core Packs "), e.qZA(), e.TgZ(10, "app-tooltip", 65), e._UZ(11, "gu-icon", 66), e.qZA(), e.qZA(), e.qZA(), e.qZA()), 2 & o && (e.xp6(10), e.Q6J("title", "Core Packs hold <br/> non-blockchain cards that can <br/> be used to expand your decks.")("position", "left"))
        }

        function Cd(o, r) {
            1 & o && (e.TgZ(0, "gu-paragraph-text", 78), e._uU(1, " Your code must be 3 - 40 characters long. "), e.qZA())
        }

        function vd(o, r) {
            1 & o && (e.TgZ(0, "gu-paragraph-text", 79), e._uU(1, " Create a code or use one given to you by another mortal. "), e.qZA())
        }

        const bd = function (o, r) {
            return {"directChallenge__form__field__input--invalid": o, "directChallenge__form__field__input--valid": r}
        };

        function wd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 67), e.TgZ(1, "div", 68), e.TgZ(2, "gu-paragraph-text", 69), e._uU(3, " Challenge code "), e.qZA(), e.TgZ(4, "app-tooltip", 70), e._UZ(5, "gu-icon", 71), e.qZA(), e.qZA(), e.TgZ(6, "form", 72), e.TgZ(7, "div", 73), e._UZ(8, "input", 74), e.TgZ(9, "gu-icon", 75), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().toggleVisibility()
                }), e.qZA(), e.qZA(), e.YNc(10, Cd, 2, 0, "gu-paragraph-text", 76), e.YNc(11, vd, 2, 0, "gu-paragraph-text", 77), e.qZA(), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(6), e.Q6J("formGroup", t.formGroup), e.xp6(2), e.Q6J("type", t.challengeCodeVisible ? "text" : "password")("ngClass", e.WLB(6, bd, t.challengeCode.invalid && t.challengeCode.touched, t.challengeCode.valid)), e.xp6(1), e.Q6J("iconLigature", t.challengeCodeVisible ? "action_hidePassword" : "action_showPassword"), e.xp6(1), e.Q6J("ngIf", t.challengeCode.invalid && t.challengeCode.touched), e.xp6(1), e.Q6J("ngIf", !t.challengeCode.invalid || !t.challengeCode.touched)
            }
        }

        function xd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "a", 80), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openLink("https://blog.godsunchained.com/2021/03/19/play-to-earn-with-weekend-ranked/")
                }), e._uU(1, " Event: Play to earn packs with Weekend Ranked!\n"), e.qZA()
            }
        }

        function Md(o, r) {
            if (1 & o && e._UZ(0, "app-lock", 81), 2 & o) {
                const t = e.oxw();
                e.Q6J("lock", t.gameMode.lock)
            }
        }

        function yd(o, r) {
            if (1 & o && e._UZ(0, "gu-sealed-mode-card", 82), 2 & o) {
                const t = e.oxw();
                e.Q6J("queueActive", t.queueActive)("gameMode", t.gameMode)("sealedModeStatus", t.sealedModeStatus)
            }
        }

        let Gn = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k, A, G, U, q) {
                    this.guGameService = t, this.modalService = n, this.resizeService = i, this.progressionService = a, this.el = s, this.cdr = c, this.fb = l, this.queueService = g, this.akumaService = b, this.audioService = C, this.cerberusModalService = k, this.sealedService = A, this.decksService = G, this.cerberusModal = U, this.environment = q, this.emptyDeckText = "Choose Deck", this.aiEmptyDeck = "Choose AI Deck", this.currentRankName = "", this.currentRankInitials = "", this.nextRankName = "", this.nextRankInitials = "", this.shieldCrackCount = 0, this.challengeCodeVal = "", this.challengeCodeVisible = !0, this.sentChallengeCodeInputAnalytics = !1, this.sealedModeStatus = Y.r.AVAILABLE, this.unsubscribe = new M.xQ, this.GuGameModeType = O.tO, this.GuGameModeSubType = O.zy, this.GuGameModeId = O.B_, this.SealedModeStatus = Y.r, this.MIN_GAMES_PLAYED = 11, this.AFTER_EVERY_X_GAMES = 5, this.tutorialBullets = ["Gameplay Basics", "How Mana Works", "How to Win"], i.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({vh: z}) => this.progressBarHeight = 2.5 * z)).subscribe()
                }

                get getClass() {
                    return this.gameMode && this.gameMode.id === O.B_.SEALED_DECK
                }

                ngOnInit() {
                    this.buildFormGroup(), this.initTimer(), this.initRanks(), this.watchQueue(), this.gameMode.id === O.B_.SEALED_DECK ? this.watchSealedMode() : (this.updateSelectedDecks(), this.watchForDeckSelection())
                }

                watchSealedMode() {
                    this.sealedService.sealedModeStatus$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.sealedModeStatus = t
                    }), this.sealedService.sealedMode$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.sealedMode = t
                    })
                }

                watchQueue() {
                    this.queueService.getQueue(1, this.gameMode.id).pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.queue = t, this.queueActive ? this.challengeCode.disable() : this.challengeCode.enable()
                    })
                }

                get queueActive() {
                    return this.queue && "active" === this.queue.status
                }

                get nowDate() {
                    return new Date
                }

                watchForDeckSelection() {
                    this.guGameService.gameModes$.pipe((0, u.R)(this.unsubscribe), (0, S.U)(({gameModes: t}) => t.find(n => n.id === this.gameMode.id)), (0, P.h)(t => null !== t), (0, S.U)(t => ({
                        lastSelectedDeckId: t.lastSelectedDeckId,
                        aiSelectedDeckId: t.aiSelectedDeckId
                    })), (0, w.b)(({lastSelectedDeckId: t, aiSelectedDeckId: n}) => {
                        this.gameMode.lastSelectedDeckId = t, this.gameMode.aiSelectedDeckId = n, this.updateSelectedDecks()
                    })).subscribe()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                openLink(t) {
                    window.open(t, "_blank")
                }

                get challengeCode() {
                    return this.formGroup.get("challengeCode")
                }

                buildFormGroup() {
                    this.formGroup = this.fb.group({challengeCode: ["", [I.kI.required, I.kI.minLength(3), I.kI.maxLength(40)]]}), this.challengeCode.valueChanges.subscribe(t => {
                        this.challengeCodeVal = t, this.sentChallengeCodeInputAnalytics || (this.sentChallengeCodeInputAnalytics = !0, this.akumaService.postControlEvent("gu", "Arena", "", "challengeCode", "Txt", "inputted"))
                    })
                }

                initTimer() {
                    this.gameMode && 1 === this.gameMode.rotation && this.gameMode.end_timestamp && (this.refreshDate = new Date(this.gameMode.end_timestamp))
                }

                initRanks() {
                    this.gameMode && this.gameMode.ranked && this.progressionService.userRankLevels$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => t && t.length > 0 && t.some(n => n.game_mode === this.gameMode.id)), (0, S.U)(t => t.find(n => n.game_mode === this.gameMode.id))).subscribe(t => {
                        this.gameModeRank = t, this.setRankLevelLabels(this.gameModeRank, this.isMaxRank), this.setShieldCracking(this.gameModeRank)
                    })
                }

                setRankLevelLabels(t, n) {
                    this.progressionService.gameRanks$.pipe((0, x.q)(1), (0, w.b)(i => {
                        this.isMaxRank = this.progressionService.isMaxRank(this.gameModeRank, i);
                        const a = i[t.rank_level - 1], s = i[t.rank_level];
                        this.currentRankName = a.level_name, this.currentRankInitials = n ? Math.trunc(t.rating).toString() : a.level_short_name, !this.isMaxRank && s && (this.nextRankName = s.level_name, this.nextRankInitials = s.level_short_name)
                    })).subscribe()
                }

                setShieldCracking(t) {
                    let n = 3;
                    t.loss_points < 37 ? n = 0 : t.loss_points < 53 ? n = 1 : t.loss_points < 78 && (n = 2), this.shieldCrackCount = n
                }

                ngOnChanges(t) {
                    this.initTimer(), t.allDecks && this.updateSelectedDecks()
                }

                updateSelectedDecks() {
                    this.selectedDeck = this.allDecks.find(t => t.id === this.gameMode.lastSelectedDeckId), this.gameMode.type === O.tO.SOLO && (this.selectedAIDeck = this.allDecks.find(t => t.id === this.gameMode.aiSelectedDeckId))
                }

                openDeckSelect({forAI: t}) {
                    this.selectDeck(void 0, t)
                }

                selectDeck(t, n = !1) {
                    this.akumaService.postControlEvent("gu", "Arena", "", "addDeck", "Btn", "pressed", {mode_name: this.gameMode.name}), this.gameMode.type === O.tO.SEALED_DECK ? (this.audioService.clickItemV2.play(), this.decksService.selectActiveDeckById(this.sealedMode.deck_id), this.decksService.updateDeckSelectMode(!0, O.B_.SEALED_DECK), this.modalService.createModal(On, {}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })) : (this.audioService.transitionWorkshop.play(), this.modalService.createModal(Zt, {
                        gameModeId: this.gameMode.id,
                        gameModeType: this.gameMode.type,
                        forAI: n,
                        modalHosted: !0
                    }, {blurredBackground: !0, canCloseFromOutside: !1, position: m.e1.Center, size: m.Cg.Workarea}))
                }

                getPlayDeck(t) {
                    return !t || t instanceof ie.$$ && 30 !== t.items.length ? null : {
                        id: t.id,
                        global: "starter" === t.deck_type
                    }
                }

                openGauntletProgress() {
                    this.akumaService.postControlEvent("gu", "Arena", "", "gatherFlux", "Btn", "pressed"), this.modalService.createModal(sc, null, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }

                toggleVisibility() {
                    this.challengeCodeVisible = !this.challengeCodeVisible
                }

                learnMore() {
                    switch (this.gameMode.id) {
                        case O.B_.DIRECT_CHALLENGE:
                            return void window.open("https://playgu.co/1v1", "_blank");
                        case O.B_.SEALED_DECK:
                            return void this.openSealedDeckInfoModal()
                    }
                }

                openSealedDeckInfoModal() {
                    this.akumaService.postEvent("Control", "arenaHome_rulesBtn_pressed"), this.audioService.clickItemV2.play(), this.cerberusModalService.open(kc)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(X.xV), e.Y36(T.Z), e.Y36(K._), e.Y36($.$z), e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(I.qu), e.Y36(_t.g), e.Y36(_.jt), e.Y36(h.pk), e.Y36(B.Qz), e.Y36(Y.H), e.Y36(j.D), e.Y36(B.Qz), e.Y36(h.Ho))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-game-mode-card"]],
                hostVars: 2,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("darkBackground", n.getClass)
                },
                inputs: {
                    gameMode: "gameMode",
                    allDecks: "allDecks",
                    index: "index",
                    stackOrderIndex: "stackOrderIndex",
                    isPrimaryCard: "isPrimaryCard",
                    accountProperties: "accountProperties"
                },
                features: [e.TTD],
                decls: 22,
                vars: 17,
                consts: [["alt", "background imagery", 1, "backgroundImagery", 3, "src"], [1, "cardHeader"], [1, "columnLeft"], [1, "cardHeader__heading"], ["bottom", "medium", "class", "cardHeader__subheading cardHeader__subheading--sealed", 4, "ngIf"], [1, "cardHeader__subheading"], ["top", "small", 4, "ngIf"], ["class", "cardHeader__timer", 4, "ngIf"], ["class", "cardHeader__winsAndLosses", 4, "ngIf"], ["class", "cardHeader__shield", 4, "ngIf"], ["class", "modeActionsArea", 4, "ngIf"], ["class", "progressArea", 4, "ngIf"], ["class", "fluxProgress", 4, "ngIf", "ngIfElse"], ["notRankedConstructed", ""], [4, "ngIf"], ["class", "directChallenge", 4, "ngIf"], ["class", "subtype__description", 3, "click", 4, "ngIf"], [3, "lock", 4, "ngIf"], ["class", "sealedModeCard", 3, "queueActive", "gameMode", "sealedModeStatus", 4, "ngIf"], ["bottom", "medium", 1, "cardHeader__subheading", "cardHeader__subheading--sealed"], ["top", "small"], [1, "cardHeader__subheading", "cardHeader__subheading--link", 3, "click"], [1, "cardHeader__timer"], [1, "cardHeader__winsAndLosses"], [3, "winCount"], [1, "cardHeader__winsAndLosses__losses", 3, "lossCount"], [1, "cardHeader__shield"], ["leftShield", ""], ["class", "cardHeader__subtypeRibbon", 4, "ngIf"], [1, "cardHeader__shield__image", 3, "src"], [1, "cardHeader__shield__rankInitials"], [1, "cardHeader__subtypeRibbon"], ["src", "/gu-assets/images/misc/gu-gmc-snipe.svg", 1, "cardHeader__subtypeRibbon__image"], [1, "cardHeader__subtypeRibbon__live"], [1, "cardHeader__subtypeRibbon__label"], [1, "modeActionsArea"], [4, "ngIf", "ngIfElse"], ["tutorialPoints", ""], [1, "modeActionsArea__ctas"], ["diameterVwMultiplier", "6.25", 3, "mode", "deck", "opponentsDeck", "challengeCode", "accountProperties", "disabled", "openDeckSelect"], ["queueButton", ""], [1, "gameCardDecks"], ["width", "calc(var(--vw) * 5.4)", "emptyContainerHeight", "calc(var(--vh) * 14)", "emptyContainerWidth", "calc(var(--vw) * 5.3)", 1, "gameCardDecks__deck", 3, "deck", "emptyText", "hideGodName", "selectDeck"], ["class", "vsText", 4, "ngIf"], ["width", "calc(var(--vw) * 5.3)", "emptyContainerHeight", "calc(var(--vh) * 14)", "emptyContainerWidth", "calc(var(--vw) * 5.3)", "class", "aiDeck", "class", "gameCardDecks__deck", 3, "deck", "emptyText", "hideGodName", "selectDeck", 4, "ngIf"], [1, "loadout", 3, "gameModeId"], [1, "vsText"], ["width", "calc(var(--vw) * 5.3)", "emptyContainerHeight", "calc(var(--vh) * 14)", "emptyContainerWidth", "calc(var(--vw) * 5.3)", 1, "gameCardDecks__deck", 3, "deck", "emptyText", "hideGodName", "selectDeck"], [1, "tutorialCard__bulletPoints"], ["class", "tutorialCard__bulletPoint", 4, "ngFor", "ngForOf"], [1, "tutorialCard__bulletPoint"], [1, "bullet"], ["fillColor", "colors.light.300"], [1, "progressArea"], [1, "progressArea__leftRank"], [1, "progressArea__rightRank"], ["dividerOpacity", "medium", "color", "aqua", 1, "progressArea__bar", 3, "forGameModeCard", "showDivider", "dividerPercentage", "percentage", "height", "animateFirstValue", "supressAnimation"], [1, "fluxProgress"], [3, "click"], ["leftArea__subTitle", ""], ["leftArea__title", ""], [1, "tutorial__freeStuff"], ["src", "/gu-assets/images/tutorial/free-stuff-banner-tutorial.png", 1, "tutorial__freeStuff__bgImage"], ["src", "/gu-assets/images/tutorial/free-core-pack.png", 1, "tutorial__freeStuff__cardImage"], [1, "cardHeader__subheading", "tutorial__freeStuff__text"], [1, "tutorial__freeStuff__tooltip", 3, "title", "position"], ["iconLigature", "little_help"], [1, "directChallenge"], [1, "directChallenge__heading"], ["kind", "small", "fontWeight", "bold", "fillColor", "colors.light.100"], ["size", "large", "title", "The first 2 mortals to enter the <br>same code will be matched <br>together. Make the code unique, <br>and only share it with the <br>mortal you want to challenge.", 1, "directChallenge__heading__icon"], ["title", "", "iconLigature", "help", "fillColor", "colors.gunmetal.100"], [1, "directChallenge__form", 3, "formGroup"], [1, "directChallenge__form__field"], ["name", "challengeCode", "formControlName", "challengeCode", "placeholder", "Enter a unique code", 1, "directChallenge__form__field__input", 3, "type", "ngClass"], ["fillColor", "colors.gunmetal.100", 1, "directChallenge__form__field__icon", 3, "iconLigature", "click"], ["kind", "help", "fontStyle", "italic", "fillColor", "colors.god.war.primary", 4, "ngIf"], ["kind", "help", "fontStyle", "italic", "fillColor", "colors.light.700", 4, "ngIf"], ["kind", "help", "fontStyle", "italic", "fillColor", "colors.god.war.primary"], ["kind", "help", "fontStyle", "italic", "fillColor", "colors.light.700"], [1, "subtype__description", 3, "click"], [3, "lock"], [1, "sealedModeCard", 3, "queueActive", "gameMode", "sealedModeStatus"]],
                template: function (t, n) {
                    if (1 & t && (e._UZ(0, "img", 0), e.TgZ(1, "header", 1), e.TgZ(2, "div", 2), e.TgZ(3, "h1", 3), e._uU(4), e.qZA(), e.YNc(5, nd, 3, 2, "gu-vertical-space", 4), e.TgZ(6, "div", 5), e._uU(7), e.qZA(), e.YNc(8, od, 3, 1, "gu-vertical-space", 6), e.YNc(9, id, 3, 5, "div", 7), e.YNc(10, rd, 3, 2, "div", 8), e.qZA(), e.YNc(11, sd, 6, 5, "div", 9), e.qZA(), e.YNc(12, ud, 7, 10, "div", 10), e.YNc(13, _d, 8, 13, "div", 11), e.YNc(14, hd, 6, 0, "div", 12), e.YNc(15, md, 0, 0, "ng-template", null, 13, e.W1O), e.YNc(17, fd, 12, 2, "div", 14), e.YNc(18, wd, 12, 9, "div", 15), e.YNc(19, xd, 2, 0, "a", 16), e.YNc(20, Md, 1, 1, "app-lock", 17), e.YNc(21, yd, 1, 3, "gu-sealed-mode-card", 18)), 2 & t) {
                        const i = e.MAs(16);
                        e.Q6J("src", n.gameMode.image_url, e.LSH), e.xp6(4), e.Oqu(n.gameMode.name), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.SEALED_DECK), e.xp6(2), e.Oqu(n.gameMode.description), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.DIRECT_CHALLENGE || n.gameMode.id === n.GuGameModeId.SEALED_DECK), e.xp6(1), e.Q6J("ngIf", 1 === n.gameMode.rotation && n.refreshDate), e.xp6(1), e.Q6J("ngIf", n.wins > 0 || n.losses > 0), e.xp6(1), e.Q6J("ngIf", n.gameMode.ranked && n.gameModeRank), e.xp6(1), e.Q6J("ngIf", n.gameMode.id !== n.GuGameModeId.SEALED_DECK || n.sealedModeStatus === n.SealedModeStatus.STARTED), e.xp6(1), e.Q6J("ngIf", n.gameMode.ranked && n.gameModeRank && !n.isMaxRank), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.RANKED_CONSTRUCTED)("ngIfElse", i), e.xp6(3), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.TUTORIAL), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.DIRECT_CHALLENGE), e.xp6(1), e.Q6J("ngIf", n.gameMode.properties.sub_type === n.GuGameModeSubType.WEEKEND_EVENT), e.xp6(1), e.Q6J("ngIf", n.gameMode.lock && n.isPrimaryCard), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.SEALED_DECK)
                    }
                },
                directives: [d.O5, Pc, Tc, Rc, An, vl, d.sg, Ie, zt, xe.K, I._Y, I.JL, I.sg, I.Fj, I.JJ, I.u, d.mk, Ul, Kl],
                pipes: [d.uU, kn, d.rS],
                styles: [`
                h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    margin: 0
                }
                
                body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif;
                    font-weight: 400
                }
                
                .cardHeader__shield__rankInitials[_ngcontent-%COMP%], .cardHeader__shield__rankInitials.cardHeader__shield__rankInitials--maxRank[_ngcontent-%COMP%], .cardHeader__heading[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {
                    font-family: Unchained, serif;
                    font-weight: 700
                }
                
                .subtype__description[_ngcontent-%COMP%],
                .directChallenge__form__inputHint[_ngcontent-%COMP%],
                .progressArea__rightRank[_ngcontent-%COMP%],
                .progressArea__leftRank[_ngcontent-%COMP%],
                .vsText[_ngcontent-%COMP%],
                .cardHeader__stats[_ngcontent-%COMP%],
                .cardHeader__subheading[_ngcontent-%COMP%],
                .directChallenge__form__field__input[_ngcontent-%COMP%],
                .cardHeader__timer[_ngcontent-%COMP%] {
                    font-family: Open Sans, sans-serif
                }
                
                .cardHeader__shield__rankInitials.cardHeader__shield__rankInitials--maxRank[_ngcontent-%COMP%],
                .cardHeader__heading[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 3.7);
                    line-height: 1.3
                }
                
                .cardHeader__shield__rankInitials[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 4.2);
                    line-height: 1.3
                }
                
                .cardHeader__timer[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.9)
                }
                
                .directChallenge__form__inputHint[_ngcontent-%COMP%],
                .progressArea__rightRank[_ngcontent-%COMP%],
                .progressArea__leftRank[_ngcontent-%COMP%],
                .vsText[_ngcontent-%COMP%],
                .cardHeader__stats[_ngcontent-%COMP%],
                .cardHeader__subheading[_ngcontent-%COMP%],
                .directChallenge__form__field__input[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.48)
                }
                
                .directChallenge__form__field__input[_ngcontent-%COMP%] {
                    line-height: 1.4
                }
                
                .subtype__description[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 1.11)
                }
                
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    border-radius: calc(var(--vw) * .45);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    height: 100%;
                    position: relative;
                    padding: calc(var(--vh) * 2.22) calc(var(--vw) * 1.09);
                    background: var(--gu-blue-dark);
                }
                
                [_nghost-%COMP%]:after {
                    content: "";
                    border-radius: calc(var(--vw) * .45);
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    pointer-events: none;
                    user-select: none;
                    z-index: 1
                }
                
                .darkBackground[_nghost-%COMP%] .backgroundImagery[_ngcontent-%COMP%] {
                    opacity: .08;
                }
                
                .backgroundImagery[_ngcontent-%COMP%] {
                    user-select: none;
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    opacity: .6;
                }
                
                .cardHeader[_ngcontent-%COMP%] {
                    display: flex;
                    position: relative
                }
                
                .cardHeader[_ngcontent-%COMP%] .columnLeft[_ngcontent-%COMP%] {
                    min-height: calc(var(--vh) * 11.55);
                    flex: 1
                }
                
                .cardHeader__heading[_ngcontent-%COMP%] {
                    text-transform: uppercase;
                    line-height: .95;
                    background: linear-gradient(to bottom, #fff2d8 0%, #ebc98b 50%, #c6a052 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: calc(var(--vh) * 1)
                }
                
                .cardHeader__subheading[_ngcontent-%COMP%] {
                    padding-left: calc(var(--vw) * .05);
                    color: #f6f6f6
                }
                
                .cardHeader__subheading--sealed[_ngcontent-%COMP%] {
                    color: #7192b0
                }
                
                .cardHeader__subheading--link[_ngcontent-%COMP%] {
                    text-transform: capitalize;
                    text-decoration: underline;
                    cursor: pointer
                }
                
                .cardHeader__timer[_ngcontent-%COMP%] {
                    color: #7192b0
                }
                
                .cardHeader__winsAndLosses[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 2);
                    display: flex
                }
                
                .cardHeader__winsAndLosses__losses[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * .4);
                    margin-left: calc(var(--vh) * 1.6);
                    padding-left: calc(var(--vh) * 1.6);
                    position: relative
                }
                
                .cardHeader__winsAndLosses__losses[_ngcontent-%COMP%]:before {
                    height: calc(var(--vh) * 1.4);
                    top: 0;
                    left: 0;
                    width: calc(var(--vh) * .15);
                    content: "";
                    position: absolute;
                    background: #7192b0
                }
                
                .cardHeader__winsAndLosses__losses[_ngcontent-%COMP%] .lossSummary {
                    margin-top: calc(var(--vh) * .7)
                }
                
                .cardHeader__stats[_ngcontent-%COMP%] {
                    color: #fff9
                }
                
                .cardHeader__shield[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 5);
                    margin-right: calc(var(--vw) * .2);
                    position: relative;
                    align-self: flex-start
                }
                
                .cardHeader__shield__image[_ngcontent-%COMP%] {
                    width: 100%;
                    display: block;
                    filter: drop-shadow(0 calc(var(--vh) * .1) calc(var(--vh) * 3.24) rgba(252, 247, 212, .3))
                }
                
                .cardHeader__shield__rankInitials[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -60%);
                    text-transform: uppercase;
                    color: #f6f6f6
                }
                
                .cardHeader__shield__rankInitials.cardHeader__shield__rankInitials--maxRank[_ngcontent-%COMP%] {
                    transform: translate(-50%, -68%)
                }
                
                .modeActionsArea[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * 3);
                    padding-right: calc(var(--vw) * .9);
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start
                }
                
                .cardHeader__subtypeRibbon[_ngcontent-%COMP%] {
                    position: relative;
                    z-index: 1;
                    margin-bottom: calc(var(--vh) * .5)
                }
                
                .cardHeader__subtypeRibbon__image[_ngcontent-%COMP%] {
                    position: absolute;
                    width: calc(var(--vw) * 6.5)
                }
                
                .cardHeader__subtypeRibbon__label[_ngcontent-%COMP%] {
                    position: absolute;
                    right: calc(var(--vw) * -.4);
                    top: 3px;
                    font-size: calc(var(--vw) * .6);
                    color: #fff;
                    font-weight: 700
                }
                
                .cardHeader__subtypeRibbon__live[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * .2);
                    height: calc(var(--vw) * .2);
                    background-color: #fff;
                    border-radius: 50%;
                    top: calc(var(--vw) * .5);
                    left: calc(var(--vw) * .3);
                    position: relative
                }
                
                .cardHeader__subtypeRibbon__live[_ngcontent-%COMP%]:after {
                    content: "";
                    display: block;
                    width: calc(var(--vw) * .2);
                    height: calc(var(--vw) * .2);
                    background-color: #fff;
                    animation: ping .8s ease-in-out infinite both;
                    position: absolute;
                    border-radius: 50%
                }
                
                @keyframes ping {
                    0% {
                        transform: scale(1);
                        opacity: 1
                    }
                    80% {
                        transform: scale(2.6);
                        opacity: .3
                    }
                    to {
                        transform: scale(3.2);
                        opacity: 0
                    }
                }
                
                .gameCardDecks[_ngcontent-%COMP%] {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: space-between;
                    width: calc(var(--vw) * 6.5);
                    margin-top: calc(var(--vh) * -1)
                }
                
                .gameCardDecks__deck[_ngcontent-%COMP%] .emptyDeckContainer {
                    margin-top: calc(var(--vh) * 1)
                }
                
                .gameCardDecks__deck[_ngcontent-%COMP%] .emptyDeckContainer .emptyDeckContainer__inner:before {
                    margin-bottom: calc(var(--vh) * .5);
                    font-size: calc(var(--vh) * 2);
                    font-family: gu-cons;
                    font-feature-settings: "liga" 1, normal;
                    speak: none;
                    font-style: normal;
                    font-weight: 400;
                    font-variant: normal;
                    text-transform: none;
                    vertical-align: middle;
                    letter-spacing: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    content: "add_item";
                    line-height: 1;
                    display: block;
                    color: inherit
                }
                
                .modeActionsArea__ctas[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 1.5);
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center
                }
                
                .modeActionsArea__ctas.hidden[_ngcontent-%COMP%] {
                    opacity: 0;
                    user-select: none;
                    pointer-events: none
                }
                
                .modeActionsArea__ctas--noMargin[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * -.5)
                }
                
                .vsText[_ngcontent-%COMP%] {
                    line-height: .9;
                    margin: auto;
                    margin-top: calc(var(--vh) * .9);
                    margin-bottom: calc(var(--vh) * .9);
                    font-weight: 600;
                    color: #f6f6f6
                }
                
                .progressArea[_ngcontent-%COMP%] {
                    padding-top: calc(var(--vh) * 4);
                    padding-left: calc(var(--vw) * .9);
                    padding-right: calc(var(--vw) * .9);
                    display: flex;
                    flex-flow: row wrap;
                    align-items: flex-end;
                    color: #f6f6f6;
                    position: relative
                }
                
                .progressArea__leftRank[_ngcontent-%COMP%] {
                    padding-left: calc(var(--vw) * .15);
                    font-weight: 700
                }
                
                .progressArea__rightRank[_ngcontent-%COMP%] {
                    padding-right: calc(var(--vw) * .15);
                    color: #FBC02D;
                    margin-left: auto;
                    font-weight: bold;
                }
                
                .progressArea__bar[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * .4);
                    width: 100%
                }
                
                .progress-title[_ngcontent-%COMP%] {
                    height: calc(var(--vh) * .92)
                }
                
                .tempLockedConsumablePlaceholder[_ngcontent-%COMP%] {
                    margin-left: calc(var(--vw) * -.5);
                    position: relative;
                    border: calc(var(--vh) * .25) dashed rgba(224, 197, 143, .3);
                    background-color: #58411326;
                    border-radius: calc(var(--vh) * .4);
                    display: flex
                }
                
                .tempLockedConsumablePlaceholder__icon[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 4);
                    color: #e0c58f4d;
                    line-height: 1;
                    margin: auto
                }
                
                .tempQuestsPlaceholder[_ngcontent-%COMP%] {
                    padding-left: calc(var(--vw) * .75);
                    padding-right: calc(var(--vw) * .75);
                    display: flex;
                    justify-content: space-between;
                    margin-top: auto;
                    position: relative
                }
                
                .tempQuestsPlaceholder__quest[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 4.79);
                    height: calc(var(--vw) * 4.79);
                    border-radius: 50%;
                    border: calc(var(--vh) * .25) dashed rgba(224, 197, 143, .3);
                    background-color: #58411326;
                    display: flex
                }
                
                .tempQuestsPlaceholder__quest__icon[_ngcontent-%COMP%] {
                    font-size: calc(var(--vh) * 3);
                    color: #e0c58f4d;
                    line-height: 1;
                    margin: auto
                }
                
                .subtype__description[_ngcontent-%COMP%] {
                    cursor: pointer;
                    border-width: 2px;
                    border-style: solid;
                    border-image-source: linear-gradient(to bottom, #fffdf0 0%, #fbebc1 14%, #e6c675 26%, #f6df6e 41%, #b27e18 59%, #deab61 73%, #a67b4b 85%, #664320 100%);
                    border-image-slice: 1;
                    text-align: center;
                    margin: calc(var(--vh) * 1) auto 0;
                    padding: calc(var(--vh) * 1) 0;
                    width: 90%;
                    color: #fff;
                    background-color: #182531;
                    font-weight: 700;
                    position: relative
                }
                
                .subtype__description__readModeLink[_ngcontent-%COMP%] {
                    background: linear-gradient(to bottom, #fff2d8 0%, #ebc98b 50%, #c6a052 100%);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    cursor: pointer
                }
                
                .loadout[_ngcontent-%COMP%] {
                    height: calc(var(--vh) * 14);
                    width: calc(var(--vw) * 5.4)
                }
                
                .fluxProgress[_ngcontent-%COMP%] {
                    padding-left: calc(var(--vw) * .75);
                    padding-right: calc(var(--vw) * .75);
                    height: calc(var(--vh) * 14);
                    display: flex;
                    margin-top: auto;
                    position: relative;
                    cursor: pointer
                }
                
                .fluxProgress[_ngcontent-%COMP%] app-flux-progress-box[_ngcontent-%COMP%] {
                    padding-left: calc(var(--vh) * 4);
                    padding-right: calc(var(--vh) * 4)
                }
                
                .directChallenge[_ngcontent-%COMP%] {
                    display: flex;
                    flex-direction: column;
                    margin-top: 32px;
                    position: relative
                }
                
                .directChallenge__heading[_ngcontent-%COMP%] {
                    display: flex
                }
                
                .directChallenge__heading__icon[_ngcontent-%COMP%] {
                    margin-left: 8px;
                    cursor: pointer;
                    display: flex;
                    text-align: center
                }
                
                .directChallenge__form[_ngcontent-%COMP%] {
                    display: flex;
                    flex-flow: column nowrap;
                    align-self: center;
                    width: 100%
                }
                
                .directChallenge__form__field[_ngcontent-%COMP%] {
                    display: flex;
                    align-items: center;
                    margin: 8px 0
                }
                
                .directChallenge__form__field__input[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 1.48);
                    padding-left: calc(var(--vw) * .83);
                    padding-right: calc(var(--vw) * .83);
                    padding-top: calc(var(--vh) * 1.29);
                    padding-bottom: calc(var(--vh) * 1.29);
                    margin-bottom: 0;
                    background: #182531;
                    color: #f6f6f6;
                    border: calc(var(--vh) * .15) solid #0f1b27;
                    border-radius: calc(var(--vh) * .4);
                    margin-top: 0;
                    width: 100%;
                    padding-right: 20px;
                    font-size: 16px
                }
                
                .directChallenge__form__field__input[_ngcontent-%COMP%]::-webkit-input-placeholder {
                    color: #fff
                }
                
                .directChallenge__form__field__input[_ngcontent-%COMP%]:disabled {
                    border-color: #979797;
                    color: #979797
                }
                
                .directChallenge__form__field__input--invalid[_ngcontent-%COMP%] {
                    border-color: #ff8b01
                }
                
                .directChallenge__form__field__input--valid[_ngcontent-%COMP%] {
                    border-color: #8be1e0
                }
                
                .directChallenge__form__field__icon[_ngcontent-%COMP%] {
                    position: absolute;
                    right: 12px;
                    cursor: pointer
                }
                
                .directChallenge__form__inputHint[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * .6);
                    text-shadow: 0 1px 1px rgba(0, 0, 0, .3)
                }
                
                .sealedModeCard[_ngcontent-%COMP%] {
                    margin-top: calc(var(--vh) * 2.5)
                }
                
                .tutorialCard__bulletPoints[_ngcontent-%COMP%] {
                    margin: 10px;
                    z-index: 1
                }
                
                .bullet[_ngcontent-%COMP%] {
                    padding: 4px;
                    box-shadow: inset 0 0 0 1.5px #c6a052;
                    border-radius: 2px;
                    display: flex;
                    transform: rotate(-45deg);
                    margin-right: 10px
                }
                
                .tutorialCard__bulletPoint[_ngcontent-%COMP%] {
                    display: flex;
                    align-items: center;
                    margin: 10px 0
                }
                
                .tutorial__freeStuff[_ngcontent-%COMP%] {
                    position: relative
                }
                
                .tutorial__freeStuff__bgImage[_ngcontent-%COMP%] {
                    width: 100%;
                    display: block;
                    margin-top: 35px
                }
                
                .tutorial__freeStuff__cardImage[_ngcontent-%COMP%] {
                    position: absolute;
                    top: -3vh;
                    left: 0px;
                    height: 6vw
                }
                
                .tutorial__freeStuff__text[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 40%;
                    left: 20%
                }
                
                .tutorial__freeStuff__tooltip[_ngcontent-%COMP%] {
                    display: inline;
                    text-align: center
                }
                `]
            }), o
        })();
        const kd = ["otherModesContainer"];

        function Od(o, r) {
            if (1 & o && e._UZ(0, "app-game-mode-card", 4, 5), 2 & o) {
                const t = e.oxw();
                e.Q6J("gameMode", t.gameModes[0])("allDecks", t.allDecks)("isPrimaryCard", !0)("accountProperties", t.accountProperties)
            }
        }

        function Pd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-game-mode-card", 7), e.NdJ("click", function (i) {
                    return e.CHM(t), e.oxw(2).animatedStackShuffle(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw(2);
                e.ekj("otherModes__mode--fadedOut", t.fadedOut), e.Q6J("gameMode", t.gameMode)("allDecks", n.allDecks)("accountProperties", n.accountProperties)("isPrimaryCard", !1), e.uIk("gameModeId", t.gameMode.id)("gameModeName", t.gameMode.name)
            }
        }

        function Sd(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Pd, 1, 8, "app-game-mode-card", 6), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", t.otherCompModes)
            }
        }

        const Td = function (o) {
            return {otherModes__disable: o}
        };
        let Ad = (() => {
            class o {
                constructor(t, n, i, a, s, c) {
                    this.resizeService = t, this.guGameService = n, this.akumaService = i, this.audioService = a, this.authService = s, this.userService = c, this.maxZIndexValue = 9, this.unsubscribe = new M.xQ, this.userWallets = [], t.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({vw: l}) => this.vw = 2.5 * l)).subscribe()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngOnInit() {
                    this.createCompOtherModes(this.gameModes.slice(1)), this.initAccountProperties()
                }

                ngAfterViewInit() {
                    this.resizeService.windowSize$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(() => {
                        this.takeMeasurements(), this.layoutStackOfCards()
                    })).subscribe(), this.assignInitialStackOrderIndexes(), this.layoutStackOfCards()
                }

                ngOnChanges(t) {
                    t.gameModes && !t.gameModes.firstChange && (this.createCompOtherModes(t.gameModes.currentValue.slice(1)), setTimeout(() => {
                        this.assignInitialStackOrderIndexes(), this.layoutStackOfCards()
                    }))
                }

                takeMeasurements() {
                    this.otherModesContainerWidth = this.otherModesContainer.nativeElement.offsetWidth, this.modeCardWidth = this.primaryModeCard.nativeElement.offsetWidth, this.overlapAmount = (this.otherModesContainerWidth - this.modeCardWidth) / (this.otherCompModes.length - 1)
                }

                createCompOtherModes(t) {
                    this.otherCompModes = t.map((n, i) => ({gameMode: n, stackOrderIndex: i, fadedOut: !1}))
                }

                layoutStackOfCards() {
                    Array.from(this.otherModesContainer.nativeElement.children).forEach((t, n) => {
                        if (t.getAttribute("data-id") !== this.clickedModeId) {
                            const a = t.getAttribute("data-stack-order-index");
                            y.p8.set(t, {zIndex: this.maxZIndexValue - a}), y.p8.to(t, {
                                duration: .25,
                                x: a * this.overlapAmount + "px",
                                opacity: 1,
                                ease: "power2.inOut"
                            })
                        }
                    })
                }

                getNativeEl(t) {
                    return this.otherModesContainer.nativeElement.querySelector(`[data-stack-order-index="${t}"]`)
                }

                assignInitialStackOrderIndexes() {
                    this.clickedModeId = "", Array.from(this.otherModesContainer.nativeElement.children).forEach((t, n) => {
                        t.setAttribute("data-stack-order-index", n), t.setAttribute("data-id", n)
                    })
                }

                reOrderStack(t) {
                    const n = Array.from(this.otherModesContainer.nativeElement.children);
                    this.getNativeEl(t).setAttribute("data-stack-order-index", -1), n.sort((s, c) => parseInt(s.getAttribute("data-stack-order-index"), 10) - parseInt(c.getAttribute("data-stack-order-index"), 10)), n.forEach((s, c) => s.setAttribute("data-stack-order-index", c));
                    const a = n.reduce((s, c) => (s[c.getAttribute("gameModeId")] = +c.dataset.stackOrderIndex + 1, s), {});
                    this.guGameService.storeUserGameModeOrderMap(a)
                }

                animatedStackShuffle(t) {
                    let n;
                    for (const c of t.path) if ("app-game-mode-card" === c.localName) {
                        n = parseInt(c.getAttribute("data-stack-order-index"), 10);
                        break
                    }
                    if (0 === n) return !1;
                    this.audioService.arenaCycleMode.play();
                    const i = this.getNativeEl(n);
                    this.clickedModeId = i.getAttribute("data-id");
                    const a = i.getAttribute("gamemodename");
                    this.akumaService.postControlEvent("gu", "Arena", "", "gameMode", "Tile", "pressed", {mode_name: a});
                    const s = y.p8.timeline({paused: !0});
                    s.to(i, {
                        duration: .25,
                        x: -1 * (this.modeCardWidth + .6 * this.vw),
                        ease: "power2.inOut"
                    }).set(i, {zIndex: this.maxZIndexValue}).add(() => this.reOrderStack(n)).to(i, {
                        duration: .25,
                        x: 0,
                        ease: "power2.inOut"
                    }).add(() => this.layoutStackOfCards(), "-=0.23"), s.play()
                }

                initAccountProperties() {
                    this.authService.account$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        0 === (null == t ? void 0 : t.addresses.length) && this.userService.fetchExtendedAccount()
                    }), this.userService.extendedAccountProperties$.pipe((0, u.R)(this.unsubscribe)).subscribe(t => {
                        this.accountProperties = t
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(X.xV), e.Y36(_.jt), e.Y36(h.pk), e.Y36(h.mI), e.Y36(ne.MZ))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-game-mode-switcher"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Gn, 5, e.SBq), e.Gf(kd, 5)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.primaryModeCard = i.first), e.iGM(i = e.CRH()) && (n.otherModesContainer = i.first)
                    }
                },
                inputs: {gameModes: "gameModes", allDecks: "allDecks"},
                features: [e.TTD],
                decls: 4,
                vars: 5,
                consts: [["class", "primaryMode", 3, "gameMode", "allDecks", "isPrimaryCard", "accountProperties", 4, "ngIf"], [1, "otherModes", 3, "ngClass"], ["otherModesContainer", ""], [4, "ngIf"], [1, "primaryMode", 3, "gameMode", "allDecks", "isPrimaryCard", "accountProperties"], ["primaryModeCard", ""], ["class", "otherModes__mode", 3, "gameMode", "allDecks", "accountProperties", "isPrimaryCard", "otherModes__mode--fadedOut", "click", 4, "ngFor", "ngForOf"], [1, "otherModes__mode", 3, "gameMode", "allDecks", "accountProperties", "isPrimaryCard", "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Od, 2, 4, "app-game-mode-card", 0), e.TgZ(1, "div", 1, 2), e.YNc(3, Sd, 2, 1, "ng-container", 3), e.qZA()), 2 & t && (e.Q6J("ngIf", n.gameModes[0]), e.xp6(1), e.Q6J("ngClass", e.VKq(3, Td, n.gameModes[0].lock)), e.xp6(2), e.Q6J("ngIf", n.otherCompModes))
                },
                directives: [d.O5, d.mk, Gn, d.sg],
                styles: [`
                @keyframes blink {
                    0% {
                        opacity: .2
                    }
                    20% {
                        opacity: 1
                    }
                    to {
                        opacity: .2
                    }
                }
                
                @keyframes glowing {
                    0% {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                    40% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    60% {
                        box-shadow: 0 0 10px #28a1ee
                    }
                    to {
                        box-shadow: 0 0 -10px #28a1ee
                    }
                }
                
                @keyframes moving-gradient {
                    0% {
                        background-position: left
                    }
                    to {
                        background-position: right
                    }
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg)
                    }
                }
                
                [_nghost-%COMP%] {
                    display: flex
                }
                
                .primaryMode[_ngcontent-%COMP%] {
                    width: calc(var(--vw) * 26.56);
                    z-index: 10
                }
                
                .otherModes[_ngcontent-%COMP%] {
                    flex: 1;
                    margin-left: calc(var(--vw) * 1.7);
                    position: relative
                }
                
                .otherModes__disable[_ngcontent-%COMP%] {
                    pointer-events: none;
                    opacity: .6
                }
                
                .otherModes__mode[_ngcontent-%COMP%] {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: calc(var(--vw) * 26.56)
                }
                
                .otherModes__mode[_ngcontent-%COMP%]:not([data-stack-order-index="0"]) {
                    cursor: pointer
                }
                
                .otherModes__mode[_ngcontent-%COMP%]:not([data-stack-order-index="0"]) .modeActionsArea {
                    user-select: none;
                    pointer-events: none
                }
                
                .otherModes__mode[_ngcontent-%COMP%]:not([data-stack-order-index="0"]):hover .backgroundImagery {
                    opacity: .6;
                }
                
                .otherModes__mode[_ngcontent-%COMP%]:not([data-stack-order-index="0"]):hover.darkBackground .backgroundImagery {
                    opacity: .25;
                }
                `]
            }), o
        })();
        const Id = ["refreshSection"], Zd = function (o) {
            return {"gameModes--refreshing": o}
        };

        function Fd(o, r) {
            if (1 & o && e._UZ(0, "app-game-mode-switcher", 7), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("gameModes", t.allGameModes)("allDecks", t.allDecks)("ngClass", e.VKq(3, Zd, t.fadeGameModeSwitcher))
            }
        }

        function Dd(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div", 1), e._UZ(2, "app-player-stats", 2), e.YNc(3, Fd, 1, 5, "app-game-mode-switcher", 3), e.qZA(), e.TgZ(4, "h2", 4, 5), e._uU(6), e.qZA(), e._UZ(7, "app-news-provider", 6), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.Q6J("ngIf", t.allGameModes && !!t.allGameModes.length), e.xp6(1), e.Q6J("hidden", !t.refreshing), e.xp6(2), e.hij(" ", t.refreshMsg, " ")
            }
        }

        let Gd = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g, b, C, k) {
                    this.gameService = t, this.decksService = n, this.guUserService = i, this.progressionService = a, this.modalService = s, this.sealedService = c, this.cerberusModalService = l, this.cardsService = g, this.packService = b, this.loadoutService = C, this.storageService = k, this.unsubscribe = new M.xQ, this.loaded = !1, this.refreshing = !1, this.refreshMsg = "REFRESHING...", this.fadeGameModeSwitcher = !1, this.fetchDecks()
                }

                notifyUser() {
                    this.storageService.get(["_USER_NOTIFIED"]) || this.cerberusModalService.open(Zs, {centered: !0})
                }

                ngOnInit() {
                    this.fetchGameModes(), this.initUserDetails(), this.progressionService.fetchUserRankLevel(), this.watchSealedEnded()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                watchSealedEnded() {
                    this.sealedService.sealedModeStatus$.pipe((0, u.R)(this.unsubscribe), (0, P.h)(t => t === Y.r.ENDED), (0, re.VS)(t => this.sealedService.sealedMode$), (0, re.VS)(t => this.sealedService.claimRewards$(t.sealed_id))).subscribe(t => {
                        this.cardsService.fetchInventory(), this.packService.fetchUnopenedPacks(), this.loadoutService.fetchData(), this.modalService.createModal(vn, {rewards: t}, {
                            blurredBackground: !0,
                            canCloseFromOutside: !1,
                            position: m.e1.Center,
                            size: m.Cg.Fullscreen
                        }), this.sealedService.fetchSealed()
                    })
                }

                fetchGameModes() {
                    this.gameService.gameModes$.pipe((0, u.R)(this.unsubscribe)).subscribe(({
                                                                                                gameModes: t,
                                                                                                refresh: n
                                                                                            }) => {
                        n && !this.refreshing ? this.showRefreshAnimation(t) : this.orderGameModes(t)
                    })
                }

                orderGameModes(t) {
                    const n = this.gameService.getUserGameModeOrderMap();
                    this.allGameModes = n ? [...t.sort((i, a) => n[i.id] - n[a.id])] : [...t.sort((i, a) => i.order - a.order)]
                }

                showRefreshAnimation(t = this.allGameModes) {
                    if ((!this.allGameModes || 0 === this.allGameModes.length) && (this.allGameModes = [...t.sort((s, c) => s.order - c.order)]), !this.refreshSection) return !1;
                    this.refreshing = !0, this.fadeGameModeSwitcher = !0, y.p8.timeline().to(this.refreshSection.nativeElement, {
                        duration: .25,
                        y: -25,
                        opacity: 1,
                        ease: "power2.out"
                    }).to({}, {duration: 1}).add(() => {
                        this.fadeGameModeSwitcher = !1, this.allGameModes = [...t.sort((s, c) => s.order - c.order)]
                    }).to(this.refreshSection.nativeElement, {
                        duration: .25,
                        y: 0,
                        opacity: 0,
                        ease: "power2.out"
                    }).add(() => this.refreshing = !1)
                }

                fetchDecks() {
                    (0, D.aj)([this.decksService.userDecks$, this.decksService.starterDecks$]).pipe((0, u.R)(this.unsubscribe), (0, w.b)(([t, n]) => {
                        this.userDecks = t,this.starterDecks = n, this.allDecks = [...t, ...n]
                    })).subscribe()
                }

                reOrderDecks(t) {
                    if (1 === t) {
                        const n = this.allGameModes.splice(t, 1)[0];
                        this.allGameModes.push(n)
                    }
                }

                initUserDetails() {
                    (0, D.aj)([this.guUserService.extendedAccountProperties$, this.progressionService.accountThresholds$]).pipe((0, u.R)(this.unsubscribe), (0, P.h)(([t, n]) => !!t && !!n.length)).subscribe(([t, n]) => {
                        this.user = t, this.loaded = !0, this.xpProgress = He({xp: t.total_xp, levelThresholds: n})
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(X.xV), e.Y36(j.D), e.Y36(ne.MZ), e.Y36($.$z), e.Y36(T.Z), e.Y36(Y.H), e.Y36(B.Qz), e.Y36(_.dK), e.Y36(me.F), e.Y36(pe), e.Y36(h.qy))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-game-modes"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(Id, 7), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.refreshSection = i.first)
                    }
                },
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], [1, "columnLeft"], [1, "playerStats"], ["class", "gameModes", 3, "gameModes", "allDecks", "ngClass", 4, "ngIf"], [1, "refreshSection", 3, "hidden"], ["refreshSection", ""], [1, "columnRight"], [1, "gameModes", 3, "gameModes", "allDecks", "ngClass"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Dd, 8, 3, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.loaded)
                },
                directives: [d.O5, wn, Mn, Ad, d.mk],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.refreshSection[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.refreshSection[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{height:calc(calc(var(--vh) * 100) - 28px - 80px);display:flex;justify-content:space-between;padding:calc(var(--vh) * 2) calc(var(--vw) * 3) 0}.columnLeft[_ngcontent-%COMP%]{width:calc(var(--vw) * 62.5)}.columnRight[_ngcontent-%COMP%]{width:calc(var(--vw) * 28)}.playerStats[_ngcontent-%COMP%]{width:calc(var(--vw) * 33);height:calc(var(--vh) * 23)}.gameModes[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2.5);height:calc(var(--vh) * 55);transition:all .25s ease-in}.gameModes--refreshing[_ngcontent-%COMP%]{opacity:.5;filter:brightness(.5);user-select:none;pointer-events:none}.refreshSection[_ngcontent-%COMP%]{opacity:0;position:absolute;left:calc(var(--vw) * 28.5);top:calc(var(--vh) * 60)}.demo[_ngcontent-%COMP%]{width:100%;overflow:auto;margin-bottom:calc(var(--vh) * 5)}.cardsListing--eight[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content}.cardsListing--four[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(4,1fr);align-items:start;grid-auto-rows:min-content}.cardsListing--ten[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(10,1fr);align-items:start;grid-auto-rows:min-content}.cardsListing--five[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(5,1fr);align-items:start;grid-auto-rows:min-content}.cardsListing--moo[_ngcontent-%COMP%]{width:20vw}"]
            }), o
        })();

        function Bd(o, r) {
            1 & o && (e.TgZ(0, "div", 3), e._UZ(1, "app-rectangular-spinner", 4), e.qZA())
        }

        function Ld(o, r) {
            if (1 & o && e._UZ(0, "app-cards-list", 5), 2 & o) {
                const t = e.oxw();
                e.Q6J("protoCards", t.protoCards)("inventoryCards", t.inventoryCards)("title", "Cards")("sound", !1)
            }
        }

        let Ud = (() => {
            class o {
                constructor(t, n) {
                    this.cardsService = t, this.modalService = n, this.protoCards = [], this.unsubscribe = new M.xQ, this.close = () => {
                        this.modalService.destroyTopModal()
                    }
                }

                ngOnInit() {
                    this.initCards(), this.cardsService.checkToRefreshInventory()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initCards() {
                    (0, D.aj)([this.cardsService.inventoryCards$, this.cardsService.protoCards$]).pipe((0, u.R)(this.unsubscribe), (0, w.b)(([t, n]) => {
                        this.inventoryCards = t, this.protoCards = Array.from(n.values())
                    })).subscribe()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.dK), e.Y36(T.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-my-cards"]],
                decls: 3,
                vars: 3,
                consts: [[3, "closeButtonClickFn"], ["class", "loadingContainer", 4, "ngIf"], ["class", "card-selection", 3, "protoCards", "inventoryCards", "title", "sound", 4, "ngIf"], [1, "loadingContainer"], [1, "loadingContainer__spinner"], [1, "card-selection", 3, "protoCards", "inventoryCards", "title", "sound"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.YNc(1, Bd, 2, 0, "div", 1), e.YNc(2, Ld, 1, 4, "app-cards-list", 2)), 2 & t && (e.Q6J("closeButtonClickFn", n.close), e.xp6(1), e.Q6J("ngIf", !n.protoCards.length), e.xp6(1), e.Q6J("ngIf", n.protoCards.length))
                },
                directives: [ue, d.O5, Je, yt],
                styles: ["[_nghost-%COMP%]{display:block;height:100%;padding:0 calc(var(--vw) * 4.16);height:calc(calc(var(--vh) * 100) - 28px - 80px);padding-top:calc(var(--vh) * 4)}[_nghost-%COMP%]     app-filter-sort-bar.sectionHeader__filterArea{right:0}.loadingContainer[_ngcontent-%COMP%]{display:flex;height:100%}.loadingContainer__spinner[_ngcontent-%COMP%]{margin:auto}"]
            }), o
        })();

        function qd(o, r) {
            1 & o && e._UZ(0, "app-rectangular-spinner", 2)
        }

        function Ed(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card2", 23), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).playHoverItem()
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = r.index;
                e.Q6J("protoId", t.proto)("quality", t.quality)("columnsCount", 5)("cardIndex", n)
            }
        }

        function Nd(o, r) {
            1 & o && (e.TgZ(0, "div", 18), e._UZ(1, "img", 24), e.TgZ(2, "h1", 11), e._uU(3, "Icons"), e.qZA(), e._UZ(4, "gu-primary-hex-button", 20), e.qZA())
        }

        const Rd = function (o) {
            return {label: "Total", icon: "game_wins", value: o}
        }, Qd = function (o) {
            return [o]
        };

        function Hd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "section", 3), e.TgZ(2, "div", 4), e._UZ(3, "app-player-stats", 5), e.qZA(), e.TgZ(4, "div", 6), e.TgZ(5, "div", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openInventoryCardsModal()
                }), e._UZ(6, "img", 8), e.TgZ(7, "div", 9), e.YNc(8, Ed, 1, 4, "app-card2", 10), e.qZA(), e.TgZ(9, "h1", 11), e._uU(10, "Cards"), e.qZA(), e._UZ(11, "gu-primary-hex-button", 12), e.qZA(), e.TgZ(12, "div", 13), e._UZ(13, "img", 14), e.TgZ(14, "h1", 11), e._uU(15, "Boards"), e.qZA(), e.TgZ(16, "gu-primary-hex-button", 15), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openMyBoardsModal()
                }), e.qZA(), e.qZA(), e.TgZ(17, "div", 13), e._UZ(18, "img", 16), e.TgZ(19, "h1", 11), e._uU(20, "Trinkets"), e.qZA(), e.TgZ(21, "gu-primary-hex-button", 17), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openMyBoardsModal()
                }), e.qZA(), e.qZA(), e.TgZ(22, "div", 18), e._UZ(23, "img", 19), e.TgZ(24, "h1", 11), e._uU(25, "Emotes"), e.qZA(), e._UZ(26, "gu-primary-hex-button", 20), e.qZA(), e.YNc(27, Nd, 5, 0, "div", 21), e.qZA(), e.qZA(), e._UZ(28, "app-news-provider", 22), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(3), e.MGl("leftLabel", "Collection Level ", t.userCollectionLevel, ""), e.MGl("rightLabel", "Level ", t.userCollectionLevel + 1, ""), e.Q6J("progressPercent", t.collectionProgress)("statDisplays", e.VKq(8, Qd, e.VKq(6, Rd, t.user.won_matches))), e.xp6(5), e.Q6J("ngForOf", t.topCards), e.xp6(19), e.Q6J("ngIf", !1)
            }
        }

        let Yd = (() => {
            class o {
                constructor(t, n, i, a, s, c, l) {
                    this.guUserService = t, this.authService = n, this.progressionService = i, this.cardsService = a, this.utils = s, this.modalService = c, this.audioService = l, this.showProgressBar = !1, this.loading = !1, this.accountLoaded = !1, this.topCards = [], this.unsubscribe = new M.xQ, this.inGame = !1, this.collectionProgress = 50, this.userCollectionLevel = 1
                }

                ngOnInit() {
                    this.getUserDetails(), this.getCardsData()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                getUserDetails() {
                    (0, D.aj)([this.guUserService.extendedAccountProperties$, this.authService.account$, this.progressionService.accountThresholds$]).pipe((0, u.R)(this.unsubscribe), (0, P.h)(([t, n, i]) => !!t && !!n), (0, w.b)(([t, n, i]) => {
                        this.user = t, this.account = n, this.accountLoaded = !0, this.percentage = this.progressionService.calcPercentage(new $.oW(t.total_xp, t.xp_to_next, t.level), i)
                    })).subscribe()
                }

                getCardsData() {
                    (0, D.aj)([this.cardsService.qualityCounts$, this.cardsService.inventoryCards$]).pipe((0, u.R)(this.unsubscribe), (0, w.b)(() => this.cardsService.setNewInventoryCardCount(0)), (0, P.h)(([t, n]) => t.size > 0 && n.length > 0)).subscribe(([t, n]) => {
                        this.calcTopCards(t, n)
                    })
                }

                openInventoryCardsModal() {
                    this.audioService.transitionWorkshop.play(), this.modalService.createModal(Ud, {modalHosted: !0}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }

                playHoverItem() {
                    this.audioService.hoverItem.play()
                }

                calcTopCards(t, n) {
                    this.topCards = this.utils.calcTopCards(t, n, 5)
                }

                openMyBoardsModal() {
                    this.audioService.transitionWorkshop.play(), this.modalService.createModal(Zn, {modalHosted: !0}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: m.e1.Center,
                        size: m.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ne.MZ), e.Y36(h.mI), e.Y36($.$z), e.Y36(_.dK), e.Y36(Me.F), e.Y36(T.Z), e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-inventory"]],
                inputs: {showProgressBar: "showProgressBar"},
                decls: 2,
                vars: 2,
                consts: [["class", "loadingSpinner", 4, "ngIf"], [4, "ngIf"], [1, "loadingSpinner"], [1, "mainContentColumn"], [1, "mainContentColumn__playerRow"], [1, "mainContentColumn__playerRow__playerStats", 3, "leftLabel", "rightLabel", "progressPercent", "statDisplays"], [1, "mainContentColumn__possessionGroups"], [1, "possessionGroup", 3, "click"], ["src", "/gu-assets/images/art/sorcerer-breaking-chains.webp", "alt", "", 1, "possessionGroup__background"], [1, "possessionGroup__items"], ["class", "possessionGroup__items__item", "appSingleCardHoverFX", "", 3, "protoId", "quality", "columnsCount", "cardIndex", "click", 4, "ngFor", "ngForOf"], [1, "possessionGroup__title"], ["text", "MORE CARDS", 1, "possessionGroup__cta"], [1, "possessionGroup"], ["src", "/gu-assets/images/art/game-setting-outside-temple.webp", "alt", "", 1, "possessionGroup__background"], ["text", "MORE BOARDS", 1, "possessionGroup__cta", 3, "click"], ["src", "/gu-assets/images/art/crypto-kitties-vs-gods-unchained.webp", "alt", "", 1, "possessionGroup__background"], ["text", "MORE TRINKETS", 1, "possessionGroup__cta", 3, "click"], [1, "possessionGroup", "possessionGroup--disabled"], ["src", "/gu-assets/images/art/agrodor-protector.webp", "alt", "", 1, "possessionGroup__background"], ["text", "COMING SOON", 1, "possessionGroup__cta"], ["class", "possessionGroup possessionGroup--disabled", 4, "ngIf"], [1, "newsListingColumn"], ["appSingleCardHoverFX", "", 1, "possessionGroup__items__item", 3, "protoId", "quality", "columnsCount", "cardIndex", "click"], ["src", "/gu-assets/images/art/rune-djinn.webp", "alt", "", 1, "possessionGroup__background"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, qd, 1, 0, "app-rectangular-spinner", 0), e.YNc(1, Hd, 29, 10, "ng-container", 1)), 2 & t && (e.Q6J("ngIf", n.loading), e.xp6(1), e.Q6J("ngIf", !n.inGame && n.user))
                },
                directives: [d.O5, Je, wn, d.sg, Mn, H, bt],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.possessionGroup__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.mainContentColumn__playerRow__recentAquisitions__subheading[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.possessionGroup__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.mainContentColumn__playerRow__recentAquisitions__subheading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{height:calc(calc(var(--vh) * 100) - 28px - 80px);display:flex;padding:calc(var(--vh) * 2) calc(var(--vw) * 4.16) 0 calc(var(--vw) * 4.16);justify-content:space-between}.loadingSpinner[_ngcontent-%COMP%]{margin:auto}.mainContentColumn[_ngcontent-%COMP%]{width:calc(var(--vw) * 62.5)}.mainContentColumn__playerRow[_ngcontent-%COMP%]{display:flex}.mainContentColumn__playerRow__playerStats[_ngcontent-%COMP%]{width:calc(var(--vw) * 35);margin-right:calc(var(--vw) * 2.08)}.mainContentColumn__playerRow__recentAquisitions[_ngcontent-%COMP%]{flex:1}.mainContentColumn__playerRow__recentAquisitions__subheading[_ngcontent-%COMP%]{margin-bottom:calc(var(--vh) * 1);color:#527493}.recentAquisitions__itemListing[_ngcontent-%COMP%]{height:calc(var(--vh) * 16.85);display:flex;justify-content:space-between}.recentAquisitions__itemListing__item[_ngcontent-%COMP%]{width:calc(var(--vw) * 6.66);background:yellowgreen}.mainContentColumn__possessionGroups[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2.5);position:relative}.possessionGroup[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 3);padding-bottom:calc(var(--vh) * 2);height:calc(var(--vh) * 37);padding-left:calc(var(--vw) * 1.5);padding-right:calc(var(--vw) * 1.5);border-radius:2px;overflow:hidden;box-shadow:0 calc(var(--vh) * .6) calc(var(--vh) * 3) calc(var(--vh) * .2) #00000026;position:absolute;top:0;left:0;width:100%;display:flex;flex-flow:row wrap;align-items:flex-end;justify-content:stretch;background:#0c1620;overflow:visible}.possessionGroup[_ngcontent-%COMP%]:after{content:"";border-radius:2px;position:absolute;top:0;bottom:0;left:0;right:0;box-shadow:inset 0 0 calc(var(--vh) * .9) calc(var(--vh) * .3) #fff0,inset 0 0 calc(var(--vh) * .2) #fff0;pointer-events:none;user-select:none;z-index:1}.possessionGroup[_ngcontent-%COMP%]:after{user-select:none;pointer-events:none;content:"";border:calc(var(--vh) * .15) solid rgba(255,255,255,.07);position:absolute;bottom:0;left:0;right:0}.possessionGroup[_ngcontent-%COMP%]:nth-child(1){position:relative;z-index:5}.possessionGroup[_ngcontent-%COMP%]:nth-child(2){top:calc(calc(var(--vh) * 7.3) * 1);z-index:4}.possessionGroup[_ngcontent-%COMP%]:nth-child(3){top:calc(calc(var(--vh) * 7.3) * 2);z-index:3}.possessionGroup[_ngcontent-%COMP%]:nth-child(4){top:calc(calc(var(--vh) * 7.3) * 3);z-index:2}.possessionGroup[_ngcontent-%COMP%]:nth-child(5){top:calc(calc(var(--vh) * 7.3) * 4);z-index:1}.possessionGroup__background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.3;object-fit:cover;object-position:center}.possessionGroup__items[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);padding-right:calc(var(--vw) * 1);grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(5,1fr);align-items:start;grid-auto-rows:min-content;width:100%;position:relative;align-self:flex-start}.possessionGroup__items__item[_ngcontent-%COMP%]{filter:drop-shadow(calc(var(--vh) * 1.75) calc(var(--vh) * .1) calc(var(--vh) * 1.75) rgba(0,0,0,.5))}.possessionGroup__items__item[_ngcontent-%COMP%]:last-child{margin:0}.possessionGroup__title[_ngcontent-%COMP%]{text-transform:uppercase;background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;position:relative}.possessionGroup__cta[_ngcontent-%COMP%]{margin-left:auto}.newsListingColumn[_ngcontent-%COMP%]{width:calc(var(--vw) * 28)}.possessionGroup--disabled[_ngcontent-%COMP%]   .possessionGroup__cta[_ngcontent-%COMP%]{user-select:none;pointer-events:none;filter:grayscale(1);opacity:.2}.possessionGroup--disabled[_ngcontent-%COMP%]   .possessionGroup__title[_ngcontent-%COMP%]{-webkit-text-fill-color:inherit;background-clip:inherit;background:transparent;color:#7192b0}.possessionGroup--disabled[_ngcontent-%COMP%]   .possessionGroup__background[_ngcontent-%COMP%]{opacity:.1}']
            }), o
        })();

        function Jd(o, r) {
            1 & o && e._UZ(0, "gu-icon", 13)
        }

        function $d(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9), e._UZ(1, "img", 10), e.YNc(2, Jd, 1, 0, "gu-icon", 11), e.TgZ(3, "div", 12), e._uU(4), e.TgZ(5, "span"), e._uU(6), e.ALo(7, "titlecase"), e.qZA(), e._uU(8), e.qZA(), e.qZA()), 2 & o) {
                const t = r.$implicit, n = r.last;
                e.xp6(1), e.MGl("src", "/gu-assets/images/cardpacks/cropped/", t.type, ".webp", e.LSH), e.xp6(1), e.Q6J("ngIf", !n), e.xp6(2), e.hij(" ", t.count, " "), e.xp6(1), e.Gre("pack__label__colored ", t.type.toLowerCase(), ""), e.xp6(1), e.hij(" ", e.lcZ(7, 8, t.type), " "), e.xp6(2), e.hij(" ", 1 === t.count ? "Pack" : "Packs", " ")
            }
        }

        function Wd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 7), e.YNc(1, $d, 9, 10, "div", 8), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", t.packGroups)
            }
        }

        let zd = (() => {
            class o {
                constructor(t, n, i) {
                    this.packService = t, this.utils = n, this.modalService = i
                }

                ngOnInit() {
                    this.packService.unopenedPacks$.pipe((0, P.h)(t => t && t.length > 0), (0, S.U)(t => t.filter(n => "starter" === n.pack_source)), (0, P.h)(t => t && t.length > 0), (0, x.q)(1), (0, S.U)(t => this.utils.groupBy(t, n => n.god)), (0, w.b)(t => {
                        this.packGroups = Array.from(t.keys()).map(n => ({type: n, count: t.get(n).length}))
                    })).subscribe()
                }

                continue() {
                    this.modalService.destroyTopModal(), this.onClose && this.onClose()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(me.F), e.Y36(Me.F), e.Y36(T.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-gu-welcome-modal"]],
                inputs: {onClose: "onClose"},
                decls: 11,
                vars: 2,
                consts: [[1, "welcomeTitle"], [1, "welcomeSubTitle"], ["class", "packListing", 4, "ngIf"], [1, "footerArea"], [1, "footerArea__visitTempleText"], [1, "footerArea__templteIcon", 3, "iconLigature"], ["size", "large", "text", "Continue", 1, "footerArea__continueCta", 3, "click"], [1, "packListing"], ["class", "pack", 4, "ngFor", "ngForOf"], [1, "pack"], [1, "pack__cardPackImage", 3, "src"], ["class", "pack__spacerPlusIcon", "iconLigature", "Mana", 4, "ngIf"], [1, "pack__label"], ["iconLigature", "Mana", 1, "pack__spacerPlusIcon"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "h2", 0), e._uU(1, "Welcome to Gods Unchained!"), e.qZA(), e.TgZ(2, "div", 1), e._uU(3, "As part of your welcome pack we have given you:"), e.qZA(), e.YNc(4, Wd, 2, 1, "div", 2), e.TgZ(5, "footer", 3), e.TgZ(6, "div", 4), e._uU(7, " Please visit the Temple "), e._UZ(8, "gu-icon", 5), e._uU(9, " to Open them "), e.qZA(), e.TgZ(10, "gu-primary-hex-button", 6), e.NdJ("click", function () {
                        return n.continue()
                    }), e.qZA(), e.qZA()), 2 & t && (e.xp6(4), e.Q6J("ngIf", n.packGroups), e.xp6(4), e.Q6J("iconLigature", "temple"))
                },
                directives: [d.O5, d.sg],
                pipes: [d.rS],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.welcomeTitle[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.pack__label[_ngcontent-%COMP%], .footerArea__visitTempleText[_ngcontent-%COMP%], .welcomeSubTitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.welcomeTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.footerArea__visitTempleText[_ngcontent-%COMP%], .welcomeSubTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9);line-height:1.2;font-weight:600}.pack__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}[_nghost-%COMP%]{width:calc(var(--vw) * 80);height:calc(var(--vh) * 80);padding-top:calc(var(--vh) * 8.33);display:flex;flex-flow:column nowrap;position:relative;text-align:center;margin:auto;margin-top:calc(var(--vh) * 2);background:#0c1620}[_nghost-%COMP%]:before{content:"";background-image:url(/gu-assets/images/backgrounds/gods.webp);background-size:cover;background-position:center;opacity:.4;position:absolute;top:0;left:0;right:0;bottom:0;box-shadow:inset 0 0 0 1px #fff3}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.welcomeTitle[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.welcomeSubTitle[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2);color:#fff}.packListing[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 9.25);display:flex;justify-content:center}.pack[_ngcontent-%COMP%]{height:calc(var(--vh) * 25);padding-right:calc(var(--vw) * 5.2);display:flex;flex-flow:column nowrap;align-items:center;position:relative}.pack[_ngcontent-%COMP%]:last-child{padding:0}.pack__cardPackImage[_ngcontent-%COMP%]{width:calc(var(--vw) * 12.18)}.pack__label[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .8);padding-top:calc(var(--vh) * 2);font-weight:600}.pack__label__colored.death[_ngcontent-%COMP%]{color:#2359ff}.pack__label__colored.deception[_ngcontent-%COMP%]{color:#e320ff}.pack__label__colored.light[_ngcontent-%COMP%]{color:#fbe29f}.pack__label__colored.magic[_ngcontent-%COMP%]{color:#003953}.pack__label__colored.nature[_ngcontent-%COMP%]{color:#2acf00}.pack__label__colored.war[_ngcontent-%COMP%]{color:#df2600}.pack__spacerPlusIcon[_ngcontent-%COMP%]{right:calc(var(--vw) * 2.4);font-size:calc(var(--vh) * 2);top:50%;position:absolute;line-height:1;transform:translateY(-50%)}.pack__spacerPlusIcon[_ngcontent-%COMP%], .footerArea__templteIcon[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.footerArea[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;margin-top:auto;position:relative}.footerArea__templteIcon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.2);line-height:1}.footerArea__continueCta[_ngcontent-%COMP%]{transform:translateY(50%)}']
            }), o
        })();
        var Vd = p(5231);
        let Bn = (() => {
            class o {
                constructor(t, n, i, a, s, c, l, g) {
                    this.gameService = t, this.authService = n, this.modalService = i, this.packService = a, this.storageService = s, this.appRef = c, this.progressionService = l, this.cerberusModalService = g
                }

                canActivate(t, n) {
                    const i = this.authService.getUserId();
                    return this.requiresManualUpdate() ? (this.forceManualUpdateModal(), !1) : (this.letUserIn(i), !0)
                }

                letUserIn(t) {
                    this.userHasStarterPacks$(t).pipe((0, x.q)(1)).subscribe(n => {
                        !0 === n && this.modalService.createModal(zd, {onClose: null}, {
                            canCloseFromOutside: !1,
                            position: m.e1.Center,
                            blurredBackground: !0,
                            size: m.Cg.Workarea
                        })
                    })
                }

                userHasStarterPacks$(t) {
                    return this.packService.fetchUnopenedPacksById().pipe((0, x.q)(1), (0, S.U)(n => {
                        if (!n || 0 === n.length) return !1;
                        const i = n.filter(a => "starter" === a.pack_source);
                        return i && i.length > 0
                    }))
                }

                doShowCardInfoModal$(t) {
                    const n = !!this.storageService.get(["seenCardInfoModal"]),
                        i = this.progressionService.getStoredAccountProgression(t);
                    return (0, V.of)(i.lvl >= 5 && !n)
                }

                currentVersion() {
                    if (window.bridge && window.bridge.version) return window.bridge.version()
                }

                extractMinorVersion(t) {
                    return t ? t.split(".")[1] : void 0
                }

                isOutdatedVersion(t) {
                    return t in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
                }

                requiresManualUpdate() {
                    const t = "PROD" !== this.launcherTarget(),
                        n = window.bridge && window.bridge.platform && "darwin" === window.bridge.platform(),
                        i = this.extractMinorVersion(this.currentVersion());
                    return (n || t) && this.isOutdatedVersion(i)
                }

                launcherTarget() {
                    return window.bridge && window.bridge.launcherTarget ? window.bridge.launcherTarget() : "PROD"
                }

                launcherDownloadLink() {
                    return "https://apollo-launcher.s3-us-west-2.amazonaws.com/Immutable-0.10.0.dmg"
                }

                forceManualUpdateModal() {
                    const t = this.launcherDownloadLink();
                    this.modalService.createModal(Vd.s, {
                        title: "Launcher Update",
                        message: "The Immutable Launcher must be manually updated to 0.10.0, please download, close, and install.",
                        okButtonText: "DOWNLOAD NOW",
                        onOk: () => window.open(t)
                    }, {
                        canCloseFromOutside: !1,
                        position: m.e1.Center,
                        size: m.Cg.StretchableFullscreen,
                        blurredBackground: !0
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(qe.hM), e.LFG(h.mI), e.LFG(T.Z), e.LFG(me.F), e.LFG(h.qy), e.LFG(e.z2F), e.LFG($.$z), e.LFG(B.Qz))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();
        const jd = [{
            path: "",
            component: yi,
            canActivate: [Bn],
            children: [{path: "", redirectTo: F.arena}, {path: "demo-sheet", component: ae.q6}, {
                path: "lore",
                component: ae.sZ
            }, {path: F.deckBuilder, component: De, data: {state: F.deckBuilder, reuse: !0}}, {
                path: F.arena,
                component: Gd,
                data: {state: F.arena}
            }, {path: F.workshop, component: Zt, data: {state: F.workshop}}, {
                path: F.openPacks,
                component: ae.kM,
                data: {state: F.openPacks}
            }, {path: F.collections, component: Yd, data: {state: F.collections}}, {
                path: F.forge,
                component: Ss,
                data: {state: F.forge, featureFlag: _.vU.forgeEnabled},
                canActivate: [at.s]
            }, {
                path: F.referrals,
                component: ae.el,
                data: {state: F.referrals, featureFlag: _.vU.referralsEnabled},
                canActivate: [at.s]
            }, {
                path: F.spgp,
                loadChildren: () => p.e(651).then(p.bind(p, 52651)).then(o => o.SocialIsolationModule),
                data: {state: F.spgp}
            }, {path: F.starStore, component: ae.gn, data: {state: F.starStore}}, {
                path: F.playToEarn,
                loadChildren: () => p.e(885).then(p.bind(p, 58885)).then(o => o.PlayToEarnModule),
                data: {state: F.playToEarn, featureFlag: _.vU.playToEarnEnabled},
                canActivate: [at.s]
            }]
        }];
        let Xd = (() => {
            class o {
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275mod = e.oAB({type: o}), o.\u0275inj = e.cJS({imports: [[de.Bz.forChild(jd)], de.Bz]}), o
        })();
        const Ln = function (o) {
            return {selected: o}
        };

        function Kd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "app-tooltip", 4), e.TgZ(2, "button", 5), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().selectGodFilter(a)
                }), e._UZ(3, "gu-icon", 6), e.qZA(), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.MGl("title", "Group by ", t.name, ""), e.xp6(1), e.Tol(t.name.toLowerCase()), e.Q6J("ngClass", e.VKq(6, Ln, n.isSelected(t)))("title", "Show decks for god: " + t.name), e.xp6(1), e.Q6J("iconLigature", "god_" + t.name.toLowerCase())
            }
        }

        let eg = (() => {
            class o {
                constructor(t) {
                    this.audio = t, this.godFilters = [], this.displayGroupingName = !0, this.godFilterChangeList = new e.vpe, this.activeGodFilters = []
                }

                ngOnInit() {
                }

                selectAllGodFilters() {
                    this.audio.clickTinyV1.play(), this.activeGodFilters = [], this.godFilterChangeList.emit(this.godFilters)
                }

                selectGodFilter(t) {
                    this.audio.clickTinyV1.play(), this.activeGodFilters.some(n => n.type === t.type) ? this.activeGodFilters = this.activeGodFilters.filter(n => n.type !== t.type) : this.activeGodFilters.push(t), this.godFilterChangeList.emit(this.activeGodFilters)
                }

                isSelected(t) {
                    return this.activeGodFilters.some(n => n.type === t.type)
                }

                get isAllGodFiltersSelected() {
                    return 0 === this.activeGodFilters.length
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(h.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-grouping-bar"]],
                inputs: {godFilters: "godFilters", displayGroupingName: "displayGroupingName"},
                outputs: {godFilterChangeList: "godFilterChangeList"},
                decls: 4,
                vars: 4,
                consts: [["title", "Show all Gods", 1, "groupingButtonAndTooltip"], [1, "groupingButton", "groupingButton--all", 3, "ngClass", "click"], ["iconLigature", "filter_all_gods", 1, "groupingButton__godIcon"], [4, "ngFor", "ngForOf"], [1, "groupingButtonAndTooltip", 3, "title"], [1, "groupingButton", "groupingButton--god", 3, "ngClass", "title", "click"], [1, "groupingButton__godIcon", 3, "iconLigature"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "app-tooltip", 0), e.TgZ(1, "button", 1), e.NdJ("click", function () {
                        return n.selectAllGodFilters()
                    }), e._UZ(2, "gu-icon", 2), e.qZA(), e.qZA(), e.YNc(3, Kd, 4, 8, "ng-container", 3)), 2 & t && (e.xp6(1), e.Q6J("ngClass", e.VKq(2, Ln, n.isAllGodFiltersSelected)), e.xp6(2), e.Q6J("ngForOf", n.godFilters))
                },
                directives: [xe.K, d.mk, d.sg],
                styles: ["[_nghost-%COMP%]{display:flex}.groupingButton[_ngcontent-%COMP%]{width:calc(var(--vw) * 1.8);height:calc(var(--vw) * 1.8);border:calc(var(--vh) * .15) solid #182531;border-radius:calc(var(--vh) * .4);background:#0c1620;color:#7192b0;display:flex;padding:0;outline:none}.groupingButton.selected[_ngcontent-%COMP%]{background:#3d5a74;border-color:#7192b0;color:#f6f6f6}.groupingButton[_ngcontent-%COMP%]:hover{color:#f6f6f6;background:#3d5a74;border-color:#3d5a74}.groupingButtonAndTooltip[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * .5)}.groupingButton--all[_ngcontent-%COMP%]   .groupingButton__godIcon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * 1.1)}.groupingButton__godIcon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * 1.3);margin:auto;line-height:1;display:flex}"]
            }), o
        })();
        const tg = ["groupsContainer"];

        function ng(o, r) {
            if (1 & o && e._UZ(0, "app-inventory-cards", 7), 2 & o) {
                const t = e.oxw();
                e.Q6J("showBundle", !0)("expandedViewMode", t.expandedViewMode)("columns", 4)("showCardCounts", !1)("showUnowned", !1)("displayedGroupedProtos", t.displayedGroupedProtos)("filterCardIds", t.filterCardIds)
            }
        }

        function og(o, r) {
            if (1 & o && e._UZ(0, "app-group-quality", 8), 2 & o) {
                const t = e.oxw();
                e.Q6J("columns", 4)("showCardCounts", !1)("expandedViewMode", t.expandedViewMode)("showUnowned", !1)("displayedGroupedQualities", t.displayedGroupedQualities)("filterCardIds", t.filterCardIds)
            }
        }

        let ig = (() => {
            class o {
                constructor(t, n, i) {
                    this.resizeService = t, this.groupingService = n, this.filterService = i, this.activeGrouping = this.groupingService.defaultGrouping, this.filterCardIds = [], this.selectCardId = new e.vpe, this.GroupingType = Z, this.selectedHeaders = [], this.showUnowned = !0, this.activeSort = f.PE.AscMana, this.sortOptions = [new L("Mana", "filter_mana", f.PE.AscMana, f.PE.DescMana), new L("Health", "filter_health", f.PE.AscHealth, f.PE.DescHealth), new L("Attack", "filter_attack", f.PE.AscAttack, f.PE.DescAttack), new L("Tribe", "filter_tribe", f.PE.AscTribe, f.PE.DescTribe), new L("Type", "filter_type", f.PE.AscType, f.PE.DescType), new L("God", "filter_god", f.PE.AscGod, f.PE.DescGod), new L("Rarity", "filter_rarity", f.PE.AscRarity, f.PE.DescRarity), new L("Set", "filter_set", f.PE.AscSet, f.PE.DescSet)], this.allGroupedProtos = [], this.allGroupedQualities = [], this.unsubscribe = new M.xQ, this.watchForResize()
                }

                checkForVariousChanges(t) {
                    return t.protoCards || t.activeGrouping || t.god || t.inventoryCards
                }

                ngOnChanges(t) {
                    this.checkForVariousChanges(t) && this.inventoryCards && this.inventoryCards.length > 0 && this.initGroupings()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initGroupings() {
                    this.groupings = this.groupingService.groupings, this.groupingChange(this.activeGrouping)
                }

                watchForResize() {
                    this.resizeService.viewPortUnits$.pipe((0, u.R)(this.unsubscribe), (0, w.b)(({vh: t}) => this.vh = t)).subscribe()
                }

                groupingChange(t, n = !0) {
                    this.sortCards(this.activeSort), this.selectedHeaders = n ? [] : this.selectedHeaders, this.activeGrouping = t, t.groupingType === Z.Quality ? (this.protoGrouping = null, this.qualityGrouping = this.groupingService.groupQualities(this.protoCards, t, this.god), this.filterCardGroupingQuality()) : (this.qualityGrouping = null, this.protoGrouping = this.groupingService.groupProtos(this.protoCards, t, this.god), this.filterCardGrouping())
                }

                filterCardGrouping() {
                    if (!this.protoGrouping) return;
                    this.displayedGroupedProtos = [];
                    const n = Array.from(this.protoGrouping.values()).reverse().filter(i => 0 === this.selectedHeaders.length || -1 !== this.selectedHeaders.indexOf(i.header));
                    this.allGroupedProtos = n.map(i => {
                        const a = Object.assign({}, i);
                        return this.search && this.search.length > 0 && (this.search = this.search.toLowerCase(), a.cards = [...a.cards].filter(s => s.pc.name.toLowerCase().includes(this.search) || s.pc.tribe && s.pc.tribe.toLowerCase().includes(this.search) || s.pc.god.toLowerCase().includes(this.search) || s.pc.effect.toLowerCase().includes(this.search))), a
                    }).filter(i => i.cards.length > 0).reduce((i, a) => i.concat(a), []), this.loadGroup()
                }

                filterCardGroupingQuality() {
                    if (!this.qualityGrouping) return;
                    this.displayedGroupedQualities = [];
                    const n = Array.from(this.qualityGrouping.values()).reverse().filter(i => 0 === this.selectedHeaders.length || -1 !== this.selectedHeaders.indexOf(i.header));
                    this.allGroupedQualities = n.map(i => {
                        const a = Object.assign({}, i);
                        return this.search && this.search.length > 0 && (this.search = this.search.toLowerCase(), a.cards = [...a.cards].filter(s => s.pc.name.toLowerCase().includes(this.search) || s.pc.tribe && s.pc.tribe.toLowerCase().includes(this.search) || s.pc.god.toLowerCase().includes(this.search) || s.pc.effect.toLowerCase().includes(this.search))), a
                    }).filter(i => i.cards.length > 0).reduce((i, a) => i.concat(a), []), this.loadGroupQuality()
                }

                loadGroupQuality() {
                    if (!this.allGroupedQualities || 0 === this.allGroupedQualities.length) return;
                    this.displayedGroupedQualities.push(this.allGroupedQualities.pop());
                    let t = this.getDisplayedCardsCountQuality(), n = this.isContainerScrollable(t);
                    for (; this.allGroupedQualities.length > 0 && (0 === t || !n);) this.displayedGroupedQualities.push(this.allGroupedQualities.pop()), t = this.getDisplayedCardsCountQuality(), n = this.isContainerScrollable(t)
                }

                loadGroup() {
                    if (this.activeGrouping.groupingType === Z.Quality) return void this.loadGroupQuality();
                    if (!this.allGroupedProtos || 0 === this.allGroupedProtos.length) return;
                    this.displayedGroupedProtos.push(this.allGroupedProtos.pop());
                    let t = this.getDisplayedCardsCount(), n = this.isContainerScrollable(t);
                    for (; this.allGroupedProtos.length > 0 && (0 === t || !n);) this.displayedGroupedProtos.push(this.allGroupedProtos.pop()), t = this.getDisplayedCardsCount(), n = this.isContainerScrollable(t)
                }

                groupingHeaderChange(t) {
                    this.selectedHeaders = t, this.filterCardGrouping()
                }

                searchChange(t) {
                    this.search = t, this.filterCardGrouping()
                }

                sortCards(t) {
                    this.protoCards = this.filterService.sortProtos(this.protoCards, t)
                }

                sortChange(t) {
                    this.activeSort = t, this.groupingChange(this.activeGrouping, !1)
                }

                unownedChange(t) {
                    this.showUnowned = t
                }

                isContainerScrollable(t) {
                    if (void 0 !== this.expandedViewMode) return !1;
                    const n = this.groupsContainer.nativeElement.clientHeight;
                    return Math.ceil(t / 8) * this.vh * 23.2 > n
                }

                selectCard(t) {
                    this.selectCardId.emit(t)
                }

                getDisplayedCardsCount() {
                    return this.getFilterGroups(this.displayedGroupedProtos).reduce((n, i) => n + i.cards.reduce((a, s) => this.showUnowned || s.qualityMap ? a.concat(s) : a, []).length, 0)
                }

                getDisplayedCardsCountQuality() {
                    return this.getFilterGroups(this.displayedGroupedQualities).reduce((n, i) => n + i.cards.reduce((a, s) => this.showUnowned || s.ics ? a.concat(s) : a, []).length, 0)
                }

                getFilterGroups(t) {
                    let n = [];
                    if (this.expandedViewMode === N.SELLING) n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "genesis" === a.set)})); else {
                        if (this.expandedViewMode !== N.FORGING) return t;
                        n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "core" === a.set)}))
                    }
                    return n
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(_e), e.Y36(_.iZ))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-half-screen-cards-list"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(tg, 7), e.Gf(H, 5)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.groupsContainer = i.first), e.iGM(i = e.CRH()) && (n.cardComponents = i)
                    }
                },
                inputs: {
                    inventoryCards: "inventoryCards",
                    protoCards: "protoCards",
                    activeGrouping: "activeGrouping",
                    god: "god",
                    filterCardIds: "filterCardIds",
                    title: "title",
                    expandedViewMode: "expandedViewMode"
                },
                outputs: {selectCardId: "selectCardId"},
                features: [e.TTD],
                decls: 8,
                vars: 9,
                consts: [[1, "sectionHeader"], [1, "sectionHeader__title"], [1, "sectionHeader__filterArea", 3, "showFilters", "sortOptions", "selectedHeaders", "cardGrouping", "unownedCheckboxVisible", "sortChange", "groupingHeaderChange"], ["infiniteScroll", "", 1, "cardsListingArea", 3, "scrollWindow", "scrolled"], ["groupsContainer", ""], ["mode", "proto", 3, "showBundle", "expandedViewMode", "columns", "showCardCounts", "showUnowned", "displayedGroupedProtos", "filterCardIds", 4, "ngIf"], [3, "columns", "showCardCounts", "expandedViewMode", "showUnowned", "displayedGroupedQualities", "filterCardIds", 4, "ngIf"], ["mode", "proto", 3, "showBundle", "expandedViewMode", "columns", "showCardCounts", "showUnowned", "displayedGroupedProtos", "filterCardIds"], [3, "columns", "showCardCounts", "expandedViewMode", "showUnowned", "displayedGroupedQualities", "filterCardIds"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0), e.TgZ(1, "h3", 1), e._uU(2), e.qZA(), e.TgZ(3, "app-filter-sort-bar", 2), e.NdJ("sortChange", function (a) {
                        return n.sortChange(a)
                    })("groupingHeaderChange", function (a) {
                        return n.groupingHeaderChange(a)
                    }), e.qZA(), e.qZA(), e.TgZ(4, "section", 3, 4), e.NdJ("scrolled", function () {
                        return n.loadGroup()
                    }), e.YNc(6, ng, 1, 7, "app-inventory-cards", 5), e.YNc(7, og, 1, 6, "app-group-quality", 6), e.qZA()), 2 & t && (e.xp6(2), e.Oqu(n.title), e.xp6(1), e.Q6J("showFilters", !1)("sortOptions", n.sortOptions)("selectedHeaders", n.selectedHeaders)("cardGrouping", n.protoGrouping)("unownedCheckboxVisible", !1), e.xp6(1), e.Q6J("scrollWindow", !1), e.xp6(2), e.Q6J("ngIf", n.activeGrouping.groupingType !== n.GroupingType.Quality), e.xp6(1), e.Q6J("ngIf", n.activeGrouping.groupingType === n.GroupingType.Quality))
                },
                directives: [ft, tt, d.O5, xt, Mt],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.sectionHeader__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.godArea__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.sectionHeader__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.godArea__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}.sectionHeader[_ngcontent-%COMP%]{height:calc(var(--vh) * 8.5);position:relative}.sectionHeader__groupings[_ngcontent-%COMP%]{position:absolute}.sectionHeader__title[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .3);padding-bottom:calc(var(--vh) * .8);text-transform:uppercase;line-height:1;position:absolute;width:100%;text-align:center;color:#f6f6f6;border-bottom:solid #1d2f41;border-width:calc(var(--vh) * .25)}.sectionHeader__rightSideArea[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .8);position:absolute;right:0;top:0;display:flex;align-items:flex-start;height:100%}.sectionHeader__filterArea[_ngcontent-%COMP%]{bottom:calc(var(--vh) * 1);right:0;position:absolute}.sectionHeader__godArea[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;right:0;top:0;display:flex;align-items:flex-start}app-god-badge[_ngcontent-%COMP%]{user-select:auto;pointer-events:auto;margin-top:calc(var(--vh) * 1)}.godArea__label[_ngcontent-%COMP%]{color:#7192b0;padding-top:calc(var(--vh) * 1.1);padding-right:calc(var(--vw) * 2)}.cardsListingArea[_ngcontent-%COMP%]{overflow:hidden;overflow-y:auto;flex:1}  app-card{cursor:pointer}"]
            }), o
        })();
        const rg = function (o, r) {
            return {rewardState__nextReward__container: o, rewardState__lastReward__container: r}
        }, ag = function (o, r, t, n, i, a) {
            return {
                "rewardState__nextReward__innerSquares--done": o,
                "rewardState__lastReward__innerSquares--done": r,
                "rewardState__nextReward__innerSquares--next": t,
                "rewardState__lastReward__innerSquares--next": n,
                "rewardState__nextReward__innerSquares--notDone": i,
                "rewardState__lastReward__innerSquares--notDone": a
            }
        }, sg = function (o, r) {
            return {rewardState__nextReward__packImage: o, rewardState__lastReward__packImage: r}
        };
        let cg = (() => {
            class o {
                isNextLevel() {
                    return this.rewardLevel === this.playerLevel + 1
                }

                isFinalLevel() {
                    return 6 === this.rewardLevel
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["reward-state"]],
                inputs: {
                    isAchieved: "isAchieved",
                    rewardLevel: "rewardLevel",
                    playerLevel: "playerLevel",
                    diety: "diety"
                },
                decls: 4,
                vars: 18,
                consts: [[3, "className", "ngClass"], [3, "ngClass"], ["alt", "", 3, "ngClass", "src"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e._UZ(1, "i", 1), e.TgZ(2, "picture"), e._UZ(3, "img", 2), e.qZA(), e.qZA()), 2 & t && (e.Q6J("className", n.isAchieved || n.isNextLevel() ? "activeState" : "inactiveState")("ngClass", e.WLB(5, rg, !n.isFinalLevel(), n.isFinalLevel())), e.xp6(1), e.Q6J("ngClass", e.HTZ(8, ag, !n.isFinalLevel() && n.isAchieved, n.isFinalLevel() && n.isAchieved, !n.isFinalLevel() && !n.isAchieved && n.isNextLevel(), n.isFinalLevel() && !n.isAchieved && n.isNextLevel(), !n.isFinalLevel() && !n.isAchieved && !n.isNextLevel(), n.isFinalLevel() && !n.isAchieved && !n.isNextLevel())), e.xp6(2), e.MGl("src", "/gu-assets/images/cardpacks/", n.diety, ".webp", e.LSH), e.Q6J("ngClass", e.WLB(15, sg, !n.isFinalLevel(), n.isFinalLevel())))
                },
                directives: [d.mk],
                styles: ['.rewardState__nextReward__innerSquares--done[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;transform:rotate(45deg);border:1px solid #AFFAED;padding:4px;background:#0F1B27}.rewardState__nextReward__innerSquares--done[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #54BBCD}.rewardState__lastReward__innerSquares--done[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;transform:rotate(45deg);border:1px solid #AFFAED;padding:4px;background:#0F1B27}.rewardState__lastReward__innerSquares--done[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #54BBCD}.rewardState__nextReward__innerSquares--next[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;transform:rotate(45deg);border:1px solid #FBE29F;padding:4px;background:#0F1B27}.rewardState__nextReward__innerSquares--next[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #FFD76E}.rewardState__lastReward__innerSquares--next[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;transform:rotate(45deg);border:1px solid #FBE29F;padding:4px;background:#0F1B27}.rewardState__lastReward__innerSquares--next[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #FFD76E}.rewardState__nextReward__innerSquares--notDone[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;transform:rotate(45deg);border:1px solid #7F7F7F;padding:4px;background:#0F1B27}.rewardState__nextReward__innerSquares--notDone[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #464646}.rewardState__lastReward__innerSquares--notDone[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;transform:rotate(45deg);border:1px solid #7F7F7F;padding:4px;background:#0F1B27}.rewardState__lastReward__innerSquares--notDone[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #464646}.rewardState__nextReward__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:20px;margin-top:6px}.rewardState__nextReward__packImage[_ngcontent-%COMP%]{margin:auto;width:42px;transform:translate(0)}.rewardState__lastReward__packImage[_ngcontent-%COMP%]{margin:auto;width:57px;transform:translate(0)}.activeState[_ngcontent-%COMP%]{opacity:1}.inactiveState[_ngcontent-%COMP%]{opacity:.6}']
            }), o
        })(), lg = (() => {
            class o {
                constructor() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275mod = e.oAB({type: o}), o.\u0275inj = e.cJS({
                providers: [Se, xn, d.JJ, j.D, Bn, _.TJ, ge, ve, _e, ne.MZ, pe, T.Z, Nt, $.$z],
                imports: [[B.Zd, ae.ic, d.ez, I.u5, Xd, ro, I.UX, po.m, ae.W2]]
            }), o
        })();
        e.B6R(Cn, [ig, Ot, d.O5, mn, H, d.mk, un], [Fe]), e.B6R(Zt, [d.O5, ue, eg, Ye.w, Ve, d.sg, An], [d.Ov]), e.B6R(bn, [Ie, d.sg, cg, d.O5, d.mk], [d.rS])
    }, 20991: (Un, Be, p) => {
        p.d(Be, {s: () => re});
        var e = p(73307), V = p(92198), fe = p(5e3);
        let re = (() => {
            class S {
                constructor(P) {
                    this.featureFlagService = P
                }

                canActivate(P, Ft) {
                    return this.featureFlagService.get(P.data.featureFlag).pipe((0, V.h)(Xe => !0 === Xe))
                }
            }

            return S.\u0275fac = function (P) {
                return new (P || S)(fe.LFG(e.B3))
            }, S.\u0275prov = fe.Yz7({token: S, factory: S.\u0275fac, providedIn: "root"}), S
        })()
    }
}]);