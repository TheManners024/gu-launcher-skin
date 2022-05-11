"use strict";

function gameModeSort(a, b) {
    // keep direct challenge first
    if (a.id === 6) {
        return -1;
    }
    if (b.id === 6) {
        return 1;
    }
    // the rest can sort with ranked first
    if (a.id === 13) {
        return -1;
    }
    if (b.id === 13) {
        return 1;
    }
    return 0;
}

(self.webpackChunkdesktop = self.webpackChunkdesktop || []).push([[900], {
    1900: (Et, Se, g) => {
        g.r(Se), g.d(Se, {GuModule: () => Kg});
        var e = g(5e3), oe = g(21086), ge = g(23753), ve = g(61709), O = g(24850), b = g(2994), S = g(92198),
            lt = g(43164);

        function Nt(o, r, t, n) {
            const i = window && !!window.document && window.document.documentElement;
            let a = i && r ? window : t;
            if (o && (a = o && i && "string" == typeof o ? function qt(o, r, t) {
                return (t ? window.document : r).querySelector(o)
            }(o, t.nativeElement, n) : o, !a)) throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");
            return a
        }

        function $e(o) {
            return o && !o.firstChange
        }

        const Q = {
            clientHeight: "clientHeight",
            offsetHeight: "offsetHeight",
            scrollHeight: "scrollHeight",
            pageYOffset: "pageYOffset",
            offsetTop: "offsetTop",
            scrollTop: "scrollTop",
            top: "top"
        }, ie = {
            clientHeight: "clientWidth",
            offsetHeight: "offsetWidth",
            scrollHeight: "scrollWidth",
            pageYOffset: "pageXOffset",
            offsetTop: "offsetLeft",
            scrollTop: "scrollLeft",
            top: "left"
        };

        class N {
            constructor(r = !0) {
                this.vertical = r, this.propsMap = r ? Q : ie
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

        function Te(o) {
            return ["Window", "global"].some(t => Object.prototype.toString.call(o).includes(t))
        }

        function W(o, r) {
            return o ? r.document.documentElement : null
        }

        function ue(o, r) {
            const t = function Jn({container: o, isWindow: r, axis: t}) {
                const {offsetHeightKey: n, clientHeightKey: i} = dt(t);
                return Ht(o, r, n, i)
            }(r);
            return r.isWindow ? function Ee(o, r, t) {
                const {axis: n, container: i, isWindow: a} = t, {offsetHeightKey: s, clientHeightKey: c} = dt(n),
                    d = o + Yt(W(a, i), n, a), u = Ht(r.nativeElement, a, s, c), x = function $n(o, r, t) {
                        const n = r.topKey();
                        if (o.getBoundingClientRect) return o.getBoundingClientRect()[n] + Yt(o, r, t)
                    }(r.nativeElement, n, a) + u;
                return {height: o, scrolled: d, totalToScroll: x, isWindow: a}
            }(t, o, r) : function Rt(o, r, t) {
                const {axis: n, container: i} = t;
                return {height: o, scrolled: i[n.scrollTopKey()], totalToScroll: i[n.scrollHeightKey()], isWindow: !1}
            }(t, 0, r)
        }

        function dt(o) {
            return {offsetHeightKey: o.offsetHeightKey(), clientHeightKey: o.clientHeightKey()}
        }

        function Ht(o, r, t, n) {
            if (isNaN(o[t])) {
                const i = W(r, o);
                return i ? i[n] : 0
            }
            return o[t]
        }

        function Yt(o, r, t) {
            const n = r.pageYOffsetKey(), i = r.scrollTopKey(), a = r.offsetTopKey();
            return isNaN(window.pageYOffset) ? W(t, o)[i] : o.ownerDocument ? o.ownerDocument.defaultView[n] : o[a]
        }

        function Wn(o, r, t) {
            let n, i;
            if (o.totalToScroll <= 0) return !1;
            const a = o.isWindow ? o.scrolled : o.height + o.scrolled;
            return t ? (n = (o.totalToScroll - a) / o.totalToScroll, i = r.down / 10) : (n = o.scrolled / (o.scrolled + (o.totalToScroll - a)), i = r.up / 10), n <= i
        }

        class Vn {
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

        function Xn(o) {
            const {scrollContainer: r, scrollWindow: t, element: n, fromRoot: i} = o,
                a = function he({windowElement: o, axis: r}) {
                    return function $(o, r) {
                        const t = o.isWindow || r && !r.nativeElement ? r : r.nativeElement;
                        return Object.assign(Object.assign({}, o), {container: t})
                    }({axis: r, isWindow: Te(o)}, o)
                }({axis: new N(!o.horizontal), windowElement: Nt(r, t, n, i)}), s = new Vn({totalToScroll: ue(n, a)}),
                d = {up: o.upDistance, down: o.downDistance};
            return function Kn(o) {
                let r = (0, ge.R)(o.container, "scroll");
                return o.throttle && (r = r.pipe((0, lt.p)(o.throttle))), r
            }({
                container: a.container,
                throttle: o.throttle
            }).pipe((0, ve.zg)(() => (0, oe.of)(ue(n, a))), (0, O.U)(u => function eo(o, r, t) {
                const {scrollDown: n, fire: i} = function jn(o, r, t) {
                    const n = function zn(o, r) {
                        return o < r.scrolled
                    }(o, r);
                    return {fire: Wn(r, t, n), scrollDown: n}
                }(o, r, t);
                return {scrollDown: n, fire: i, stats: r}
            }(s.lastScrollPosition, u, d)), (0, b.b)(({stats: u}) => s.updateScroll(u.scrolled, u.totalToScroll)), (0, S.h)(({
                                                                                                                                 fire: u,
                                                                                                                                 scrollDown: x,
                                                                                                                                 stats: {totalToScroll: v}
                                                                                                                             }) => function re(o, r, t) {
                return !!(o && r || !t && r)
            }(o.alwaysCallback, u, s.isTriggeredScroll(v, x))), (0, b.b)(({
                                                                              scrollDown: u,
                                                                              stats: {totalToScroll: x}
                                                                          }) => {
                s.updateTriggeredFlag(x, u)
            }), (0, O.U)(to))
        }

        function to(o) {
            const {scrollDown: r, stats: {scrolled: t}} = o;
            return {type: r ? "[NGX_ISE] DOWN" : "[NGX_ISE] UP", payload: {currentScrollPosition: t}}
        }

        let gt = (() => {
            class o {
                constructor(t, n) {
                    this.element = t, this.zone = n, this.scrolled = new e.vpe, this.scrolledUp = new e.vpe, this.infiniteScrollDistance = 2, this.infiniteScrollUpDistance = 1.5, this.infiniteScrollThrottle = 150, this.infiniteScrollDisabled = !1, this.infiniteScrollContainer = null, this.scrollWindow = !0, this.immediateCheck = !1, this.horizontal = !1, this.alwaysCallback = !1, this.fromRoot = !1
                }

                ngAfterViewInit() {
                    this.infiniteScrollDisabled || this.setup()
                }

                ngOnChanges({infiniteScrollContainer: t, infiniteScrollDisabled: n, infiniteScrollDistance: i}) {
                    const a = $e(t), s = $e(n), c = $e(i),
                        d = !s && !this.infiniteScrollDisabled || s && !n.currentValue || c;
                    (a || s || c) && (this.destroyScroller(), d && this.setup())
                }

                setup() {
                    (function Qt() {
                        return "undefined" != typeof window
                    })() && this.zone.runOutsideAngular(() => {
                        this.disposeScroller = Xn({
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
        })(), no = (() => {
            class o {
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275mod = e.oAB({type: o}), o.\u0275inj = e.cJS({providers: [], imports: [[]]}), o
        })();
        var l = g(69808), T = g(93075);
        let oo = (() => {
            class o {
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275mod = e.oAB({type: o}), o.\u0275inj = e.cJS({imports: [[l.ez]]}), o
        })();
        var io = g(531), U = g(28510), _ = g(55195), be = g(4324), I = g(66088), ro = g(21057), pe = g(11735),
            f = g(73307);
        let ut = (() => {
            class o {
                constructor(t) {
                    this.featureFlagService = t
                }

                canActivate(t, n) {
                    return this.featureFlagService.get(t.data.featureFlag).pipe((0, S.h)(a => !0))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(f.B3))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac, providedIn: "root"}), o
        })();
        var M = g(8929), p = g(7625), pt = g(75778), w = g(72986), C = g(41777);
        const Jt = {opacity: 0, transform: "translateY(-14px)"},
            lo = (0, C.X$)("shiftAndFadeAnimation", [(0, C.eR)("* => *", [(0, C.IO)(":enter", [(0, C.oB)(Jt)], {optional: !0}), (0, C.IO)(":leave", [(0, C.oB)({
                opacity: 1,
                transform: "translateY(0px)"
            }), (0, C.jt)("150ms ease-in-out", (0, C.oB)({
                opacity: 0,
                transform: "translateY(5px)"
            }))], {optional: !0}), (0, C.IO)(":enter", [(0, C.oB)(Jt), (0, C.jt)("150ms ease-in-out", (0, C.oB)({
                opacity: 1,
                transform: "translateY(0px)"
            }))], {optional: !0})])]);
        (0, C.X$)("fadeAnimation", [(0, C.eR)("* => *", [(0, C.IO)(":enter", [(0, C.oB)({opacity: 0})], {optional: !0}), (0, C.IO)(":leave", [(0, C.oB)({opacity: 1}), (0, C.jt)("200ms ease-in", (0, C.oB)({opacity: 0}))], {optional: !0}), (0, C.IO)(":enter", [(0, C.oB)({opacity: 0}), (0, C.jt)("200ms ease-out", (0, C.oB)({opacity: 1}))], {optional: !0})])]);
        let ze = (() => {
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
        var V, Xe, h = g(52492), P = g(33403), z = g(8561), ae = g(70655), Ne = g(59633), y = g(49749), Z = g(36053),
            _e = g(87545), go = g(27221), je = g(65171), Ve = g(65281), _t = g(4477), m = g(52886), j = g(47313),
            $t = function () {
                return V || "undefined" != typeof window && (V = window.gsap) && V.registerPlugin && V
            }, ht = function (r, t) {
                return !!(void 0 === r ? t : r && !~(r + "").indexOf("false"))
            }, po = function (r) {
                if (V = r || $t()) {
                    Xe = V.registerEase;
                    var i, t = V.parseEase(), n = function (s) {
                        return function (c) {
                            var d = .5 + c / 2;
                            s.config = function (u) {
                                return s(2 * (1 - u) * u * d + u * u)
                            }
                        }
                    };
                    for (i in t) t[i].config || n(t[i]);
                    for (i in Xe("slow", Ie), Xe("expoScale", ft), Xe("rough", se), qe) "version" !== i && V.core.globals(i, qe[i])
                }
            }, Wt = function (r, t, n) {
                var i = (r = Math.min(1, r || .7)) < 1 ? t || 0 === t ? t : .7 : 0, a = (1 - r) / 2, s = a + r, c = ht(n);
                return function (d) {
                    var u = d + (.5 - d) * i;
                    return d < a ? c ? 1 - (d = 1 - d / a) * d : u - (d = 1 - d / a) * d * d * d * u : d > s ? c ? 1 === d ? 0 : 1 - (d = (d - s) / a) * d : u + (d - u) * (d = (d - s) / a) * d * d * d : c ? 1 : u
                }
            }, zt = function (r, t, n) {
                var i = Math.log(t / r), a = t - r;
                return n && (n = V.parseEase(n)), function (s) {
                    return (r * Math.exp(i * (n ? n(s) : s)) - r) / a
                }
            }, mt = function (r, t, n) {
                this.t = r, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - r)
            }, jt = function (r) {
                "object" != typeof r && (r = {points: +r || 20});
                for (var v, k, A, D, L, E, de, t = r.taper || "none", n = [], i = 0, a = 0 | (+r.points || 20), s = a, c = ht(r.randomize, !0), d = ht(r.clamp), u = V ? V.parseEase(r.template) : 0, x = .4 * (+r.strength || 1); --s > -1;) v = c ? Math.random() : 1 / a * s, k = u ? u(v) : v, A = "none" === t ? x : "out" === t ? (D = 1 - v) * D * x : "in" === t ? v * v * x : v < .5 ? (D = 2 * v) * D * .5 * x : (D = 2 * (1 - v)) * D * .5 * x, c ? k += Math.random() * A - .5 * A : s % 2 ? k += .5 * A : k -= .5 * A, d && (k > 1 ? k = 1 : k < 0 && (k = 0)), n[i++] = {
                    x: v,
                    y: k
                };
                for (n.sort(function (ne, q) {
                    return ne.x - q.x
                }), E = new mt(1, 1, null), s = a; s--;) E = new mt((L = n[s]).x, L.y, E);
                return de = new mt(0, 0, E.t ? E : E.next), function (ne) {
                    var q = de;
                    if (ne > q.t) {
                        for (; q.next && ne >= q.t;) q = q.next;
                        q = q.prev
                    } else for (; q.prev && ne <= q.t;) q = q.prev;
                    return de = q, q.v + (ne - q.t) / q.gap * q.c
                }
            }, Ie = Wt(.7);
        Ie.ease = Ie, Ie.config = Wt;
        var ft = zt(1, 2);
        ft.config = zt;
        var se = jt();
        se.ease = se, se.config = jt;
        var qe = {SlowMo: Ie, RoughEase: se, ExpoScaleEase: ft};
        for (var Vt in qe) qe[Vt].register = po, qe[Vt].version = "3.9.1";
        $t() && V.registerPlugin(Ie);
        var ce = g(88632), K = g(6674);
        const _o = ["progressBar"], ho = function (o, r) {
            return {"progressBar__divider--text--gameModeCard": o, "progressBar__divider--text--overlay": r}
        };

        function mo(o, r) {
            if (1 & o && (e.TgZ(0, "span", 3), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Udp("left", t.dividerPercentage + "%"), e.Q6J("ngClass", e.WLB(4, ho, t.forGameModeCard, t.overlayDivderText)), e.xp6(1), e.hij(" ", t.dividerText, "\n")
            }
        }

        function fo(o, r) {
            if (1 & o && e._UZ(0, "span"), 2 & o) {
                const t = e.oxw();
                e.Gre("progressBar__divider progressBar__divider--", t.dividerOpacity, ""), e.Udp("left", t.dividerPercentage + "%")
            }
        }

        const Co = function (o, r) {
            return {"progressBar__bar--supressAnimation": o, "progressBar__bar--empty": r}
        };

        function vo(o, r) {
            if (1 & o && e._UZ(0, "div", 4, 5), 2 & o) {
                const t = e.oxw();
                e.Gre("progressBar__bar progressBar__bar--", t.color, ""), e.Udp("width", t.percentage, "%"), e.Q6J("ngClass", e.WLB(7, Co, t.supressAnimation, 0 === t.percentage)), e.uIk("aria-valuenow", t.percentage)
            }
        }

        let Qe = (() => {
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
                    if (1 & t && e.Gf(_o, 5), 2 & t) {
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
                    1 & t && (e.YNc(0, mo, 2, 7, "span", 0), e.YNc(1, fo, 1, 5, "span", 1), e.YNc(2, vo, 2, 10, "div", 2)), 2 & t && (e.Q6J("ngIf", n.showDivider || n.overlayDivderText), e.xp6(1), e.Q6J("ngIf", n.showDivider), e.xp6(1), e.Q6J("ngIf", null !== n.percentage))
                },
                directives: [l.O5, l.mk],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.progressBar__divider--text--gameModeCard[_ngcontent-%COMP%], .progressBar__divider--text--overlay[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif}.progressBar__divider--text--gameModeCard[_ngcontent-%COMP%], .progressBar__divider--text--overlay[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.progressBar__divider--text--gameModeCard[_ngcontent-%COMP%], .progressBar__divider--text--overlay[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{border-radius:4px;position:relative;display:flex;padding-left:3%;padding-right:3%;background:var(--gu-blue-dark);}.progressBar__divider[_ngcontent-%COMP%]{width:calc(var(--vw) * .15);left:50%;top:0;height:100%;position:absolute;background:var(--gu-blue-hover);}.progressBar__divider--text[_ngcontent-%COMP%]{bottom:120%;left:50%;font-weight:700;position:absolute;transform:translate(-50%)}.progressBar__divider--text--overlay[_ngcontent-%COMP%]{bottom:0%;left:50%;font-weight:700;position:absolute;transform:translate(-50%)}.progressBar__divider--text--gameModeCard[_ngcontent-%COMP%]{font-weight:400;color:#7192b0;font-style:italic}.progressBar__bar[_ngcontent-%COMP%]{border-radius:2px;margin:auto 0;height:60%;transition:.5s all ease-in-out}.progressBar__bar--supressAnimation[_ngcontent-%COMP%]{transition:none}.progressBar__bar--yellow[_ngcontent-%COMP%]{background:var(--gu-yellow);}.progressBar__bar--blue[_ngcontent-%COMP%]{background:var(--gu-blue);}.progressBar__bar--aqua[_ngcontent-%COMP%]{background:var(--gu-blue);}.progressBar__bar--gold[_ngcontent-%COMP%]{background:var(--gu-yellow);}.progressBar__bar--empty[_ngcontent-%COMP%]{box-shadow:none !important}"]
            }), o
        })();
        const bo = ["progressBar"], xo = ["leftShield"];

        function wo(o, r) {
            if (1 & o && e._UZ(0, "img", 12), 2 & o) {
                const t = e.oxw();
                e.Q6J("src", t.playerProperties.image_url, e.LSH)
            }
        }

        function Mo(o, r) {
            if (1 & o && (e.TgZ(0, "div", 13), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" ", t.playerAccount.username, " ")
            }
        }

        function yo(o, r) {
            if (1 & o && e._UZ(0, "app-progress-bar", 22, 23), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("color", t.progressionAnimationData.progressBarColor)("showDivider", !0)("dividerPercentage", t.progressionAnimationData.progressSafetyLine)("percentage", t.progressionAnimationData.percentage)("supressAnimation", !0)("animateFirstValue", !1)
            }
        }

        function ko(o, r) {
            if (1 & o && (e.TgZ(0, "div", 24, 25), e._UZ(2, "img", 26), e.TgZ(3, "div", 27), e._uU(4), e.ALo(5, "titlecase"), e.qZA(), e.TgZ(6, "div", 28), e._uU(7), e.qZA()()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(4), e.hij(" ", e.lcZ(5, 2, t.progressionAnimationData.nextRankName), " "), e.xp6(3), e.hij(" ", t.progressionAnimationData.nextRankInitials, " ")
            }
        }

        function Oo(o, r) {
            if (1 & o && (e.TgZ(0, "div", 14), e.YNc(1, yo, 2, 6, "app-progress-bar", 15), e.TgZ(2, "div", 16, 17), e._UZ(4, "img", 18), e.TgZ(5, "div", 19), e._uU(6), e.ALo(7, "titlecase"), e.qZA(), e.TgZ(8, "div", 20), e._uU(9), e.qZA()(), e.YNc(10, ko, 8, 4, "div", 21), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", !t.isMaxRank), e.xp6(1), e.ekj("progressBarArea__level--maxRank", t.isMaxRank), e.xp6(2), e.MGl("src", "/gu-assets/images/rank-progress/gu-progress-rank-cracks--", t.progressionAnimationData.shieldCrackCount, ".svg", e.LSH), e.xp6(2), e.hij(" ", e.lcZ(7, 9, t.progressionAnimationData.currentRankName), " "), e.xp6(2), e.ekj("progressBarArea__level__rankInitials--maxRank", t.isMaxRank), e.xp6(1), e.hij(" ", t.progressionAnimationData.currentRankInitials, " "), e.xp6(1), e.Q6J("ngIf", !t.isMaxRank)
            }
        }

        const Po = function (o) {
            return {"displayArea--loading": o}
        };
        y.p8.registerPlugin(se);
        const Ke = "139, 225, 224",
            Ct = se.ease.config({strength: 6, points: 6, template: "power2.inOut", randomize: !1});
        let So = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u) {
                    this.guUserService = t, this.authService = n, this.progressionService = i, this.modalService = a, this.changeDetector = s, this.playService = c, this.resizeService = d, this.cdr = u, this.vh = 0, this.isMaxRank = !1, this.progressionAnimationData = {
                        percentage: 0,
                        shieldCrackCount: 0,
                        progressSafetyLine: 50,
                        currentRankName: "",
                        currentRankInitials: "",
                        nextRankName: "",
                        nextRankInitials: "",
                        progressBarColor: "aqua"
                    }, this.ranksListing = [], this.unsubscribe = new M.xQ, this.loading = !0, d.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({vh: x}) => {
                        this.vh = x
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
                    return (0, Z.aj)([this.fetchPlayer(), this.fetchAccount()])
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
                        ease: Ct,
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
                    }).set(t, {boxShadow: `0 0 ${2 * this.vh}px ${.5 * this.vh}px rgba(${Ke}, 0.4)`}).to(t, {
                        duration: .3,
                        boxShadow: `0 0 ${3.5 * this.vh}px ${4 * this.vh}px rgba(${Ke}, 0.7)`
                    }).to(t, {
                        duration: .2,
                        boxShadow: `0 0 ${5 * this.vh}px ${2 * this.vh}px rgba(${Ke}, 0)`
                    }).to(t, {
                        duration: .2,
                        boxShadow: `0 0 ${2 * this.vh}px ${.5 * this.vh}px rgba(${Ke}, 0.4)`
                    }).fromTo(this.leftShield.nativeElement, {x: "-4px", y: "-50%"}, {
                        duration: .5,
                        x: "4px",
                        y: "-50%",
                        ease: Ct,
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
                        ease: Ct,
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
                    return (0, oe.of)({
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
                    return this.authService.account$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => !!t), (0, w.q)(1), (0, b.b)(t => {
                        this.playerAccount = t, this.cdr.detectChanges()
                    }), (0, ve.zg)(t => (this.previousRankedProgression = this.progressionService.getStoredRankedProgression(t.id, this.gameModeId), (0, Z.aj)([this.progressionService.getRankedProgressionById(t.id, this.gameModeId), this.progressionService.gameRanks$]))), (0, S.h)(([t, n]) => !!t && !!n), (0, b.b)(([t, n]) => (this.nextRankedProgression = t, this.ranksListing = n, this.isMaxRank = this.progressionService.isMaxRank(t, n), console.log("RankProgress->fetchAccount() finished: prev next", this.previousRankedProgression, this.nextRankedProgression), {})))
                }

                backToArena() {
                    this.playService.setPlaying(z.OC.OUT, this.gameModeId), this.modalService.destroyTopModal()
                }

                fetchPlayer() {
                    return this.guUserService.extendedAccountProperties$.pipe((0, w.q)(1), (0, b.b)(t => (this.playerProperties = t, t)))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ce.MZ), e.Y36(f.mI), e.Y36(j.$z), e.Y36(I.Z), e.Y36(e.sBO), e.Y36(z.GT), e.Y36(K._), e.Y36(e.sBO))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-rank-modal-progress"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(bo, 5), e.Gf(xo, 5)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.progressBar = i.first), e.iGM(i = e.CRH()) && (n.leftShield = i.first)
                    }
                },
                inputs: {gameModeId: "gameModeId"},
                decls: 14,
                vars: 6,
                consts: [["src", "/gu-assets/images/backgrounds/god-of-nature.webp", "alt", "Illustration of the God of Nature background watermark", 1, "backgroundGodImagery", "left"], ["src", "/gu-assets/images/backgrounds/god-of-war.webp", "alt", "Illustration of the God of War background watermark", 1, "backgroundGodImagery", "right"], [1, "guLogo"], ["src", "/assets/images/launcher-mockup-gu-logo.png", 1, "guLogo__img"], ["fillColor", "colors.gunmetal.100", "size", "2x-small", 1, "matchCompleteHeading"], [1, "displayArea", 3, "ngClass"], [1, "playerDetailsAvatar"], ["class", "playerDetailsAvatar__image", 3, "src", 4, "ngIf"], ["class", "playerDetails__username", 4, "ngIf"], ["class", "progressBarArea", 4, "ngIf"], [1, "bottomContent"], ["size", "large", "type", "primary", 3, "click"], [1, "playerDetailsAvatar__image", 3, "src"], [1, "playerDetails__username"], [1, "progressBarArea"], ["dividerText", "Shielded", "class", "progressBarArea__progressBar", "dividerOpacity", "medium", 3, "color", "showDivider", "dividerPercentage", "percentage", "supressAnimation", "animateFirstValue", 4, "ngIf"], [1, "progressBarArea__level", "progressBarArea__level--current"], ["leftShield", ""], [1, "progressBarArea__level__image", "progressBarArea__level__image--current", 3, "src"], [1, "progressBarArea__level__rankName"], [1, "progressBarArea__level__rankInitials"], ["class", "progressBarArea__level progressBarArea__level--next", 4, "ngIf"], ["dividerText", "Shielded", "dividerOpacity", "medium", 1, "progressBarArea__progressBar", 3, "color", "showDivider", "dividerPercentage", "percentage", "supressAnimation", "animateFirstValue"], ["progressBar", ""], [1, "progressBarArea__level", "progressBarArea__level--next"], ["rightShield", ""], ["src", "/gu-assets/images/rank-progress/gu-progress-rank-future.svg", 1, "progressBarArea__level__image"], [1, "progressBarArea__level__rankName", "progressBarArea__level__rankName--next"], [1, "progressBarArea__level__rankInitials", "progressBarArea__level__rankInitials--next"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "img", 0)(1, "img", 1), e.TgZ(2, "div", 2), e._UZ(3, "img", 3), e.qZA(), e.TgZ(4, "gu-heading-text", 4), e._uU(5, " Ranked mode progression\n"), e.qZA(), e.TgZ(6, "div", 5)(7, "div", 6), e.YNc(8, wo, 1, 1, "img", 7), e.qZA(), e.YNc(9, Mo, 2, 1, "div", 8), e.YNc(10, Oo, 11, 11, "div", 9), e.TgZ(11, "div", 10)(12, "gu-primary-hex-button", 11), e.NdJ("click", function () {
                        return n.backToArena()
                    }), e._uU(13, "Continue"), e.qZA()()()), 2 & t && (e.xp6(6), e.Q6J("ngClass", e.VKq(4, Po, n.loading)), e.xp6(2), e.Q6J("ngIf", n.playerProperties), e.xp6(1), e.Q6J("ngIf", n.playerAccount), e.xp6(1), e.Q6J("ngIf", n.nextRankedProgression))
                },
                directives: [l.mk, l.O5, Qe],
                pipes: [l.rS],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}.progressBarArea__level__rankInitials[_ngcontent-%COMP%], .progressBarArea__level__rankInitials--next[_ngcontent-%COMP%], .playerDetails__username[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.promoArea__text[_ngcontent-%COMP%], .progressBarArea__level__rankName[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif}.progressBarArea__level__rankInitials--next[_ngcontent-%COMP%], .playerDetails__username[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.progressBarArea__level__rankInitials[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.progressBarArea__level__rankName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.promoArea__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.promoArea__text[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(var(--vh) * 100);width:calc(var(--vw) * 100);display:flex;flex-flow:column nowrap;background:#182531;overflow:hidden}.backgroundGodImagery[_ngcontent-%COMP%]{user-select:none;pointer-events:none;width:calc(var(--vw) * 55.85);position:absolute;top:-5%;height:110%}.backgroundGodImagery.left[_ngcontent-%COMP%]{left:0}.backgroundGodImagery.right[_ngcontent-%COMP%]{right:0}.guLogo[_ngcontent-%COMP%]{position:absolute;top:28px;left:0;width:calc(var(--vh) * 7.7);height:calc(var(--vh) * 7.7);display:flex}.guLogo__img[_ngcontent-%COMP%]{width:calc(var(--vh) * 4);margin:auto}.matchCompleteHeading[_ngcontent-%COMP%]{right:calc(var(--vh) * 3);top:calc(28px + calc(var(--vh) * 3));position:absolute}.displayArea[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 11.5);padding-bottom:calc(var(--vh) * 10);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-grow:1;transition:opacity .15s ease-in-out}.displayArea--loading[_ngcontent-%COMP%]{opacity:0}.playerDetailsAvatar[_ngcontent-%COMP%]{display:none;}.playerDetailsAvatar__image[_ngcontent-%COMP%]{width:90%;height:90%;margin:auto;border-radius:50%;overflow:hidden}.playerDetails__username[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1);text-align:center;font-size:32px;color:var(--gu-yellow);}.progressBarArea[_ngcontent-%COMP%]{width:calc(var(--vw) * 57);display:flex;flex-flow:column nowrap;position:relative;margin-top:auto}.progressBarArea__progressBar[_ngcontent-%COMP%]{height:calc(var(--vh) * 4.16);margin-left:calc(var(--vw) * 6.6);margin-right:calc(var(--vw) * 4.3);padding:0;position:relative}.progressBarArea__level[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%)}.progressBarArea__level--current[_ngcontent-%COMP%]{width:calc(var(--vw) * 7.5);left:0}.progressBarArea__level--next[_ngcontent-%COMP%]{width:calc(var(--vw) * 5.6);right:0}.progressBarArea__level--maxRank[_ngcontent-%COMP%]{position:static;left:auto;margin:0 auto;transform:none}.progressBarArea__level__image[_ngcontent-%COMP%]{width:100%;display:block}.progressBarArea__level__image--current[_ngcontent-%COMP%]{filter:drop-shadow(0 calc(var(--vh) * .1) calc(var(--vh) * 3.24) rgba(252, 247, 212, .3))}.progressBarArea__level__rankInitials[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%, -60%);text-transform:uppercase}.progressBarArea__level__rankInitials--next[_ngcontent-%COMP%]{color:var(--gu-blue-hover);}.progressBarArea__level__rankInitials--maxRank[_ngcontent-%COMP%]{transform:translate(-50%, -68%)}.progressBarArea__level__rankName[_ngcontent-%COMP%]{position:absolute;top:110%;left:0;width:100%;font-weight:700;text-align:center}.progressBarArea__level__rankName--next[_ngcontent-%COMP%]{color:var(--gu-blue-hover);}.bottomContent[_ngcontent-%COMP%]{margin-top:auto;align-self:center;display:flex;flex-direction:column;align-items:center;position:relative}.promoArea__text[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 6);padding:calc(var(--vw) * 1.5);width:calc(var(--vw) * 30.5);border:calc(var(--vh) * .15) solid #3d5a74;background:#182531;text-align:center}"]
            }), o
        })();
        var ee = g(11130), H = g(591), Xt = g(98723);
        g(63411);
        let Fe = (() => {
            class o {
                constructor(t, n) {
                    this.gameApi = t, this.authService = n, this.unsubscribe = new M.xQ, this.dataStore = {
                        gauntletSlots: [],
                        gauntletFlux: 0,
                        refreshDate: null
                    }, this._gauntletSlots$ = new H.X([]), this._gauntletFlux$ = new H.X(0), this._refreshDate$ = new H.X(null)
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
                    this.gameApi.get(`/user/${t}/gauntlet`).pipe((0, w.q)(1), (0, O.U)(n => this.validateGauntletSlots(n))).subscribe(([n, i, a]) => {
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
                    this.dataStore.refreshDate = i, this._refreshDate$.next(Object.assign({}, this.dataStore).refreshDate), (0, Xt.H)(a).pipe((0, p.R)(this.unsubscribe), (0, w.q)(1)).subscribe(s => {
                        this.fetchGauntletSlots()
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.Ft), e.LFG(f.mI))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac, providedIn: "root"}), o
        })();
        var Oe = g(51395), X = g(64523);
        let To = (() => {
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
                    1 & t && e._UZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}[_nghost-%COMP%]{position:absolute;height:calc(var(--vh) * 1.2);width:calc(var(--vh) * 1.2);border-radius:50%;background-color:#7f7f7f}.highlighted[_nghost-%COMP%]{background:linear-gradient(to bottom,#affaed 0%,#8be1e0 50%,#54bbcd 100%)}.index--0[_nghost-%COMP%]{top:0;left:50%;transform:translate(-50%)}.index--1[_nghost-%COMP%]{right:0;top:22%}.index--2[_nghost-%COMP%]{right:0;bottom:22%}.index--3[_nghost-%COMP%]{bottom:0;left:50%;transform:translate(-50%)}.index--4[_nghost-%COMP%]{left:0;bottom:22%}.index--5[_nghost-%COMP%]{left:0;top:22%}"]
            }), o
        })();

        function Io(o, r) {
            if (1 & o && e._UZ(0, "app-flux-gauntlet-circle", 1), 2 & o) {
                const n = r.index;
                e.Q6J("highlighted", !!r.$implicit)("index", n)
            }
        }

        let Ao = (() => {
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
                    this.gauntletService.gauntletSlots$.pipe((0, p.R)(this.unsubscribe), (0, O.U)(t => t && 0 !== t.length ? t.map(n => n.wins) : [0, 0, 0, 0, 0, 0])).subscribe(t => this.highlightedIndices = t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(Fe))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-gauntlet-detail"]],
                inputs: {highlightedIndices: "highlightedIndices"},
                decls: 1,
                vars: 1,
                consts: [[3, "highlighted", "index", 4, "ngFor", "ngForOf"], [3, "highlighted", "index"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Io, 1, 2, "app-flux-gauntlet-circle", 0), 2 & t && e.Q6J("ngForOf", n.highlightedIndices)
                },
                directives: [l.sg, To],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}[_nghost-%COMP%]{height:calc(var(--vh) * 6);width:calc(var(--vh) * 6);display:block;position:relative}"]
            }), o
        })();
        const Fo = [[["", "leftArea__subTitle", ""]], [["", "leftArea__title", ""]]],
            Zo = ["[leftArea__subTitle]", "[leftArea__title]"];
        let Kt = (() => {
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
                ngContentSelectors: Zo,
                decls: 8,
                vars: 0,
                consts: [["src", "/assets/images/rectangular-box/rectangular-box.webp", "alt", "", 1, "backgroundImage"], [1, "leftArea"], [1, "leftArea__subTitle"], [1, "leftArea__title"], [1, "rightArea"]],
                template: function (t, n) {
                    1 & t && (e.F$t(Fo), e._UZ(0, "img", 0), e.TgZ(1, "div", 1)(2, "div", 2), e.Hsn(3), e.qZA(), e.TgZ(4, "div", 3), e.Hsn(5, 1), e.qZA()(), e.TgZ(6, "div", 4), e._UZ(7, "app-flux-gauntlet-detail"), e.qZA())
                },
                directives: [Ao],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.leftArea__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.leftArea__subTitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.leftArea__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.leftArea__subTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.11)}[_nghost-%COMP%]{width:100%;height:100%;display:flex;position:relative}.backgroundImage[_ngcontent-%COMP%]{display:none}.leftArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;z-index:1}.leftArea__subTitle[_ngcontent-%COMP%]{text-transform:uppercase;color:#fff}.leftArea__title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-transform:uppercase}.rightArea[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;margin-left:auto;z-index:1}"]
            }), o
        })();
        const Do = ["gauntletToasts"], Go = ["rewardsContainer"], Bo = ["rewardItems"], Uo = ["continueButton"],
            Lo = ["progressStepInfoText"], Eo = ["progressBar"], No = ["starsUpgradeVideo"], qo = ["starsOpenVideo"],
            Qo = ["initialProgress"], Ro = ["starsFinalNumbers"], Ho = ["starsFinalIcon"];

        function Yo(o, r) {
            if (1 & o && (e.TgZ(0, "div", 30)(1, "div", 31), e._UZ(2, "img", 32), e.qZA(), e.TgZ(3, "gu-heading-text", 33), e._uU(4), e.qZA()()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("src", t.userAvatar, e.LSH), e.xp6(2), e.hij(" ", t.userName, " ")
            }
        }

        function Jo(o, r) {
            if (1 & o && (e.TgZ(0, "div", 34)(1, "div", 35), e._UZ(2, "gu-card-pack-picture", 36), e.qZA(), e.TgZ(3, "div", 37)(4, "gu-paragraph-text", 38), e._uU(5), e.qZA()()()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("god", t.packsReward.god)("rarity", t.packsReward.rarity), e.xp6(3), e.AsE(" ", t.packRewardsCount, " ", 1 == t.packRewardsCount ? "Pack" : "Packs", " ")
            }
        }

        const $o = function (o, r) {
            return {
                rewardItem__innerContainer: !0,
                "rewardItem__innerContainer--openVideoActive": o,
                "rewardItem__innerContainer--upgradeVideoActive": r
            }
        };

        function Wo(o, r) {
            if (1 & o && (e.TgZ(0, "div", 34)(1, "div", 39)(2, "picture", 40), e._UZ(3, "source", 41)(4, "img", 42), e.qZA(), e._UZ(5, "video", 43, 44)(7, "video", 45, 46)(9, "gu-icon", 47, 48), e.TgZ(11, "gu-heading-text", 49, 50), e._uU(13), e.qZA()(), e.TgZ(14, "div", 37)(15, "gu-paragraph-text", 38), e._uU(16), e.qZA()()()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngClass", e.WLB(11, $o, t.animationState.showVialOpenVideo, t.animationState.showVialUpgradeVideo)), e.xp6(2), e.XOb("srcset", "\n              //images.godsunchained.com/star-vials/1024/", t.animationState.currentStarVialId, ".webp 1024w,\n              //images.godsunchained.com/star-vials/720/", t.animationState.currentStarVialId, ".webp   720w,\n              //images.godsunchained.com/star-vials/512/", t.animationState.currentStarVialId, ".webp   512w,\n              //images.godsunchained.com/star-vials/256/", t.animationState.currentStarVialId, ".webp   256w,\n              //images.godsunchained.com/star-vials/128/", t.animationState.currentStarVialId, ".webp   128w\n            ", e.LSH), e.xp6(1), e.MGl("src", "//images.godsunchained.com/star-vials/128/", t.animationState.currentStarVialId, ".png", e.LSH), e.xp6(1), e.Q6J("muted", !0), e.xp6(2), e.Q6J("muted", !0), e.xp6(6), e.hij(" +", t.starsRewardInfo.stars, " "), e.xp6(3), e.hij(" ", t.animationState.currentStarVial, " Vial ")
            }
        }

        function zo(o, r) {
            if (1 & o && (e.TgZ(0, "div", 34)(1, "div", 35), e._UZ(2, "gu-icon", 51), e.qZA(), e.TgZ(3, "div", 37)(4, "gu-paragraph-text", 38), e._uU(5), e.qZA()()()), 2 & o) {
                const t = r.$implicit;
                e.xp6(5), e.AsE(" ", t.display_value > 0 ? t.display_value + " " : "", "", t.display_name, " ")
            }
        }

        function jo(o, r) {
            1 & o && (e.TgZ(0, "div", 52, 53)(2, "app-flux-progress-box"), e.ynx(3, 54), e._uU(4, "gauntlet of the gods"), e.BQk(), e.ynx(5, 55), e._uU(6, "gather flux"), e.BQk(), e.qZA()())
        }

        let Vo = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k, A, D, L, E, de) {
                    this.authService = t, this.playService = n, this.guGameService = i, this.progressionService = a, this.modalService = s, this.guUserService = c, this.changeDetector = d, this.resizeService = u, this.gauntletService = x, this.analyticsService = v, this.packService = k, this.filterService = A, this.starsService = D, this.cdr = L, this.fluxService = E, this.sealedService = de, this.unsubscribe = new M.xQ, this.xpData = {
                        latest_xp: [],
                        latest_total_xp: 0
                    }, this.showContinueButton = !0, this.loading = !0, this.specialRewards = [], this.animationState = {
                        percentage: 0,
                        progressStepText: "",
                        progressStepValue: 0,
                        currentLevel: 0,
                        xp: 0,
                        currentStarVial: "",
                        currentStarVialId: null,
                        currentTotalStars: 0,
                        disableCta: !1,
                        showVialOpenVideo: !1,
                        showVialUpgradeVideo: !1
                    }, this.GuGameModeId = P.B_, this.resizeService.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({vh: ne}) => this.vh = ne)).subscribe()
                }

                ngAfterViewInit() {
                    this.packService.fetchUnopenedPacks(), this.starsService.fetchUserStarsTotal(), this.fluxService.fetchFluxInfo(), this.gameModeId === P.B_.RANKED_CONSTRUCTED && this.gauntletService.fetchGauntletSlots(), this.gameModeId === P.B_.SEALED_DECK && this.sealedService.fetchSealed(), this.getViewData().subscribe(() => {
                        this.createProgressionAnimationTimeline(this.xpData.latest_xp)
                    }), this.guUserService.fetchExtendedAccount()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                getViewData() {
                    return (0, Z.aj)([this.authService.account$, this.guUserService.getExtendedAccountProperties(), this.progressionService.accountThresholds$, this.playService.currentMatchId$]).pipe((0, S.h)(([t, n, i]) => !!t && !!n && i.length > 0), (0, w.q)(1), (0, O.U)(([t, n, i, a]) => (this.userId = n.user_id, this.userName = t.username, this.userAvatar = n.image_url, this.nextProgress = new j.oW(n.total_xp, n.xp_to_next, n.level), this.thresholds = i, [this.userId, a])), (0, _e.w)(([t, n]) => (0, Z.aj)([this.progressionService.fetchUserGameProgression({
                        userId: t,
                        gameModeId: this.gameModeId
                    }), this.starsService.fetchUserStarsRewards(n)])), (0, O.U)(([t, n]) => {
                        var i, a;
                        const s = this.nextProgress.xp - t.latest_total_xp;
                        return this.displayProgress = {
                            xp: s,
                            lvl: vt({xp: s, levelThresholds: this.thresholds})
                        }, this.levelUpCount = this.nextProgress.lvl - this.displayProgress.lvl, this.animationState.xp = this.displayProgress.xp, this.animationState.currentLevel = this.displayProgress.lvl, this.animationState.percentage = et({
                            xp: this.animationState.xp,
                            levelThresholds: this.thresholds
                        }), this.logGameCompleted(t.latest_game), this.xpData = {
                            latest_total_xp: t.latest_total_xp,
                            latest_xp: t.latest_xp
                        }, this.packsReward = this.packService.fixGodAlignments(this.filterService.sort(t.latest_reward, m.PE.DescRarity))[0], this.specialRewards = t.latest_special_reward || [], this.packRewardsCount = t.latest_reward.map(c => c.count).reduce((c, d) => c + d, 0), this.specialRewardsCount = this.specialRewards.length, this.hasEarnedRewards = this.packRewardsCount > 0 || this.specialRewardsCount > 0 || n.stars > 0, this.starsRewardInfo = n, this.animationState.currentStarVial = null === (i = null == n ? void 0 : n.clusters[0]) || void 0 === i ? void 0 : i.cluster_name, this.animationState.currentStarVialId = null === (a = null == n ? void 0 : n.clusters[0]) || void 0 === a ? void 0 : a.cluster_id, this.loading = !1, (0, oe.of)({})
                    }), (0, go.K)(t => (console.error(t), (0, oe.of)(!1))))
                }

                createProgressionAnimationTimeline(t) {
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
                        this.progressionTL = y.p8.timeline({
                            paused: !0,
                            delay: .5
                        }), t.forEach((n, i) => this.addXpStepToProgressBar(n, i)), yield(0, _t.w)(0), this.progressionTL.add(() => {
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
                    const a = vt({xp: i, levelThresholds: this.thresholds});
                    this.hasLevelledUp(a) && (this.progressionTL.to(this.animationState, {
                        duration: 1,
                        percentage: 100,
                        ease: "power2.inOut"
                    }).add(() => {
                        this.displayProgress.lvl = a
                    }), this.levelUpOnce(), this.animationState.currentLevel = a);
                    const s = et({xp: i, levelThresholds: this.thresholds});
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
                    this.progressionTL.set(t, {boxShadow: `0 0 ${2 * this.vh}px ${.5 * this.vh}px rgba(${(0, je.hexToCssRgbString)(Ve.colors.apocyan[300])}, 0.4)`}).to(t, {
                        duration: .3,
                        boxShadow: `0 0 ${3.5 * this.vh}px ${4 * this.vh}px rgba(${(0, je.hexToCssRgbString)(Ve.colors.apocyan[300])}, 0.7)`
                    }).to(t, {
                        duration: .2,
                        boxShadow: `0 0 ${5 * this.vh}px ${2 * this.vh}px rgba(${(0, je.hexToCssRgbString)(Ve.colors.apocyan[300])}, 0)`
                    }).to(t, {
                        duration: .2,
                        boxShadow: `0 0 ${2 * this.vh}px ${.5 * this.vh}px rgba(${(0, je.hexToCssRgbString)(Ve.colors.apocyan[300])}, 0.4)`
                    }), this.progressionTL.to(this.animationState, {
                        duration: .4,
                        percentage: 0,
                        ease: "power2.inOut"
                    }, "-=0.2")
                }

                animateInCtaButton() {
                    this.animationState.disableCta = !1;
                }

                animateInRewards() {
                }

                continue() {
                    this.close(), this.playService.setPlaying(z.OC.OUT, this.gameModeId);
                }

                close() {
                    this.modalService.destroyTopModal()
                }

                logGameCompleted(t) {
                    "function" == typeof fbq && fbq("track", "ViewContent"), "function" == typeof gtag && gtag("event", "completed", {
                        event_category: "game",
                        event_label: "user"
                    }), this.guGameService.getGameMode$(this.gameModeId).pipe((0, w.q)(1)).subscribe(n => {
                        this.analyticsService.postEvent(new Ne.Game.Completed.Event({
                            game_id: 1,
                            latest_id: t,
                            mode_id: this.gameModeId,
                            mode_name: n ? n.name : null
                        }))
                    })
                }

                playStarUpgrades() {
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
                        const t = this.starsUpgradeVideo.nativeElement, n = a => {
                            this.animationState.currentStarVial = this.starsRewardInfo.clusters[this.starsRewardInfo.clusters.length - 1].cluster_name, this.animationState.currentStarVialId = this.starsRewardInfo.clusters[this.starsRewardInfo.clusters.length - 1].cluster_id, this.animationState.disableCta = !1, this.cdr.detectChanges(), on(t, n)
                        }, i = 1.7 * (this.starsRewardInfo.clusters[0].cluster_id - 1);
                        this.animationState.showVialUpgradeVideo = !0, t.currentTime = i, nn(t, n), t.muted = !1, t.play(), yield(0, _t.w)(1700 * (this.starsRewardInfo.clusters.length - 1) - 20), t.pause(), this.animationState.disableCta = !0
                    })
                }

                playOpenStarVial() {
                    this.animationState.disableCta = !1;
                    this.cdr.detectChanges();
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(f.mI), e.Y36(z.GT), e.Y36(ee.xV), e.Y36(j.$z), e.Y36(I.Z), e.Y36(ce.MZ), e.Y36(e.sBO), e.Y36(K._), e.Y36(Fe), e.Y36(_.yD), e.Y36(Oe.F), e.Y36(_.iZ), e.Y36(_.cM), e.Y36(e.sBO), e.Y36(_.TJ), e.Y36(X.H))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-account-progression"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Do, 5), e.Gf(Go, 5), e.Gf(Bo, 5), e.Gf(Uo, 5), e.Gf(Lo, 5), e.Gf(Eo, 5), e.Gf(No, 5), e.Gf(qo, 5), e.Gf(Qo, 5), e.Gf(Ro, 5), e.Gf(Ho, 5)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.gauntletToasts = i.first), e.iGM(i = e.CRH()) && (n.rewardsContainer = i.first), e.iGM(i = e.CRH()) && (n.rewardItems = i.first), e.iGM(i = e.CRH()) && (n.continueButton = i.first), e.iGM(i = e.CRH()) && (n.progressStepInfoText = i.first), e.iGM(i = e.CRH()) && (n.progressBar = i.first), e.iGM(i = e.CRH()) && (n.starsUpgradeVideo = i.first), e.iGM(i = e.CRH()) && (n.starsOpenVideo = i.first), e.iGM(i = e.CRH()) && (n.initialProgress = i.first), e.iGM(i = e.CRH()) && (n.starsFinalNumbers = i.first), e.iGM(i = e.CRH()) && (n.starsFinalIcon = i.first)
                    }
                },
                inputs: {gameModeId: "gameModeId"},
                features: [e._Bn([ze])],
                decls: 38,
                vars: 16,
                consts: [[1, "backgroundImagery"], ["type", "image/webp", "srcset", "\n      //images.godsunchained.com/art2/250/916.webp   250w,\n      //images.godsunchained.com/art2/375/916.webp   375w,\n      //images.godsunchained.com/art2/500/916.webp   500w,\n      //images.godsunchained.com/art2/720/916.webp   720w,\n      //images.godsunchained.com/art2/1024/916.webp 1024w\n    "], ["type", "image/jpg", "srcset", "\n      //images.godsunchained.com/art2/250/916.jpg   250w,\n      //images.godsunchained.com/art2/375/916.jpg   375w,\n      //images.godsunchained.com/art2/500/916.jpg   500w,\n      //images.godsunchained.com/art2/720/916.jpg   720w,\n      //images.godsunchained.com/art2/1024/916.jpg 1024w\n    "], ["src", "//images.godsunchained.com/art2/720/916.jpg", "alt", "", 1, "backgroundImagery__img"], [1, "guLogo"], ["src", "/assets/images/launcher-mockup-gu-logo.png", 1, "guLogo__img"], ["fillColor", "colors.apocyan.300", "size", "2x-small", 1, "matchCompleteHeading"], [1, "initialProgressDisplay"], ["initialProgress", ""], ["class", "playerDetails", 4, "ngIf"], [1, "progressBarArea"], ["kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100", 1, "progressBarArea__label", "left"], ["kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100", 1, "progressBarArea__label", "right"], ["color", "aqua", 1, "progressBarArea__bar", 3, "animateFirstValue", "percentage", "supressAnimation"], ["progressBar", ""], [1, "progressBarArea__stepInfo"], ["progressStepInfoText", ""], ["size", "x-large", 1, "progressBarArea__stepInfo__value"], ["size", "2x-small", 1, "progressBarArea__stepInfo__label"], [1, "continueButtonPlaceholder"], [1, "rewardContainer"], ["rewardsContainer", ""], ["size", "x-large", "align", "center", "fillGradient", "gradients.gold.simple", 1, "rewardContainer__title"], [1, "rewardContainer__rewardItems"], ["rewardItems", ""], ["class", "rewardContainer__rewardItems__rewardItem", 4, "ngIf"], ["class", "rewardContainer__rewardItems__rewardItem", 4, "ngFor", "ngForOf"], ["size", "large", "text", "Continue", 1, "continue", 3, "disabled", "click"], ["continueButton", ""], ["class", "fluxProgressToasts", 4, "ngIf"], [1, "playerDetails"], [1, "playerDetails__avatar"], [1, "playerDetails__avatar__img", 3, "src"], ["size", "small", "fillGradient", "gradients.gold.simple", "align", "center", 1, "playerDetails__userName"], [1, "rewardContainer__rewardItems__rewardItem"], [1, "rewardItem__innerContainer"], ["set", "core", 1, "rewardItem__innerContainer__picture", 3, "god", "rarity"], [1, "rewardItem__label"], ["fontWeight", "bold", "align", "center", "kind", "large", "fillColor", "colors.light.300"], [3, "ngClass"], [1, "rewardItem__innerContainer__starPicture"], ["type", "image/webp", 3, "srcset"], ["alt", "chest image", 1, "rewardItem__innerContainer__starPicture__img", 3, "src"], ["src", "/assets/videos/stars-upgrades.webm", "playsinline", "", "autoplay", "", 1, "rewardItem__innerContainer__video", "rewardItem__innerContainer__video--upgradeVideo", 3, "muted"], ["starsUpgradeVideo", ""], ["src", "/assets/videos/stars-opens.webm", "playsinline", "", "autoplay", "", 1, "rewardItem__innerContainer__video", "rewardItem__innerContainer__video--openVideo", 3, "muted"], ["starsOpenVideo", ""], ["iconLigature", "collectable_stars", "fillGradient", "gradients.apocyan.simple", 1, "rewardItem__innerContainer__icon", "rewardItem__innerContainer__icon--stars"], ["starsFinalIcon", ""], ["size", "x-large", "fillColor", "colors.light.100", 1, "rewardItem__innerContainer__starBigNumbers"], ["starsFinalNumbers", ""], ["iconLigature", "flux_symbol", "fillGradient", "gradients.gold.simple", 1, "rewardItem__innerContainer__icon"], [1, "fluxProgressToasts"], ["gauntletToasts", ""], ["leftArea__subTitle", ""], ["leftArea__title", ""]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "picture", 0), e._UZ(1, "source", 1)(2, "source", 2)(3, "img", 3), e.qZA(), e.TgZ(4, "div", 4), e._UZ(5, "img", 5), e.qZA(), e.TgZ(6, "gu-heading-text", 6), e._uU(7, " Match Complete\n"), e.qZA(), e.TgZ(8, "div", 7, 8), e.YNc(10, Yo, 5, 2, "div", 9), e.TgZ(11, "div", 10)(12, "gu-simple-text", 11), e._uU(13), e.qZA(), e.TgZ(14, "gu-simple-text", 12), e._uU(15), e.qZA(), e._UZ(16, "app-progress-bar", 13, 14), e.TgZ(18, "div", 15, 16)(20, "gu-heading-text", 17), e._uU(21), e.qZA(), e.TgZ(22, "gu-heading-text", 18), e._uU(23), e.qZA()()(), e._UZ(24, "div", 19), e.qZA(), e.TgZ(25, "div", 20, 21)(27, "gu-heading-text", 22), e._uU(28), e.qZA(), e.TgZ(29, "div", 23, 24), e.YNc(31, Jo, 6, 4, "div", 25), e.YNc(32, Wo, 17, 14, "div", 25), e.YNc(33, zo, 6, 2, "div", 26), e.qZA(), e._UZ(34, "div", 19), e.qZA(), e.TgZ(35, "gu-primary-hex-button", 27, 28), e.NdJ("click", function () {
                        return n.continue()
                    }), e.qZA(), e.YNc(37, jo, 7, 0, "div", 29)), 2 & t && (e.xp6(10), e.Q6J("ngIf", !n.loading), e.xp6(1), e.ekj("progressBarArea--hidden", n.loading), e.xp6(2), e.hij(" Level ", null == n.displayProgress ? null : n.displayProgress.lvl, " "), e.xp6(2), e.hij(" Level ", (null == n.displayProgress ? null : n.displayProgress.lvl) + 1, " "), e.xp6(1), e.Q6J("animateFirstValue", !1)("percentage", n.animationState.percentage)("supressAnimation", !0), e.xp6(5), e.hij(" +", n.animationState.progressStepValue, " "), e.xp6(2), e.hij(" ", n.animationState.progressStepText, " "), e.xp6(5), e.hij(" ", n.packRewardsCount + n.specialRewardsCount > 1 ? "Rewards" : "Reward", " Earned "), e.xp6(3), e.Q6J("ngIf", n.packsReward), e.xp6(1), e.Q6J("ngIf", n.starsRewardInfo && 0 !== (null == n.starsRewardInfo ? null : n.starsRewardInfo.stars)), e.xp6(1), e.Q6J("ngForOf", n.specialRewards), e.xp6(2), e.Q6J("disabled", n.animationState.disableCta), e.xp6(2), e.Q6J("ngIf", n.gameModeId === n.GuGameModeId.RANKED_CONSTRUCTED))
                },
                directives: [l.O5, Qe, l.mk, l.sg, Kt],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}.progressBarArea__stepInfo__value[_ngcontent-%COMP%], .progressBarArea__stepInfo__label[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.progressBarArea__stepInfo__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.progressBarArea__stepInfo__value[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 6);line-height:1.3}[_nghost-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background:#0F1B27;overflow:hidden;height:calc(var(--vh) * 100);width:calc(var(--vw) * 100);padding-top:calc(var(--vh) * 10)}.backgroundImagery[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;top:0;left:0;height:100%;width:100%;background:#0F1B27}.backgroundImagery__img[_ngcontent-%COMP%]{display:none;}.guLogo[_ngcontent-%COMP%]{display:none;}.guLogo__img[_ngcontent-%COMP%]{width:calc(var(--vh) * 4);margin:auto}.matchCompleteHeading[_ngcontent-%COMP%]{right:calc(var(--vh) * 3);top:calc(28px + calc(var(--vh) * 3));position:absolute}.initialProgressDisplay[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.playerDetails[_ngcontent-%COMP%]{margin-bottom:calc(var(--vh) * 3)}.playerDetails__avatar[_ngcontent-%COMP%]{display:none;}.playerDetails__userName[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);position:relative}.progressBarArea[_ngcontent-%COMP%]{width:calc(var(--vw) * 50);display:flex;flex-flow:row wrap;position:relative}.progressBarArea--hidden[_ngcontent-%COMP%]{opacity:0}.progressBarArea__label[_ngcontent-%COMP%]{margin-bottom:calc(var(--vh) * 1)}.progressBarArea__label.left[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1)}.progressBarArea__label.right[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);margin-left:auto}.progressBarArea__bar[_ngcontent-%COMP%]{width:100%;height:calc(var(--vh) * 3.42);padding-left:calc(var(--vw) * .5);padding-right:calc(var(--vw) * .5);border: solid 1px var(--gu-blue);}.progressBarArea__stepInfo[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2);margin-left:auto;margin-right:auto;text-align:center;color:#f6f6f6;opacity:0}.rewardContainer[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) scale(.8);opacity:0;display:flex;flex-direction:column;justify-content:center;align-items:center}.rewardContainer__title[_ngcontent-%COMP%]{position:relative}.rewardContainer__rewardItems[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3);display:flex;justify-content:center;align-items:center;position:relative}.rewardContainer__rewardItems__rewardItem[_ngcontent-%COMP%]{background:url(/assets/images/ui-embellishments/ui--reward-background.svg) no-repeat;background-size:contain;background-position:50% 34%;position:relative;margin-right:calc(var(--vw) * 4);width:calc(var(--vw) * 13)}.rewardContainer__rewardItems__rewardItem[_ngcontent-%COMP%]:last-child {margin:0}.rewardItem__innerContainer[_ngcontent-%COMP%]{width:100%;padding-bottom:113%;position:relative}.rewardItem__innerContainer--openVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__starPicture[_ngcontent-%COMP%], .rewardItem__innerContainer--openVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__video--upgradeVideo[_ngcontent-%COMP%]{opacity:0}.rewardItem__innerContainer--openVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__video--openVideo[_ngcontent-%COMP%]{opacity:1}.rewardItem__innerContainer--upgradeVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__starPicture[_ngcontent-%COMP%]{opacity:0}.rewardItem__innerContainer--upgradeVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__video--upgradeVideo[_ngcontent-%COMP%]{opacity:1}.rewardItem__innerContainer--upgradeVideoActive[_ngcontent-%COMP%] .rewardItem__innerContainer__video--openVideo[_ngcontent-%COMP%]{opacity:0}.rewardItem__innerContainer__picture[_ngcontent-%COMP%]{position:absolute;width:68%;left:50%;top:27%;transform:translate(-50%)}.rewardItem__innerContainer__video[_ngcontent-%COMP%], .rewardItem__innerContainer__starPicture[_ngcontent-%COMP%]{position:absolute;width:140%;left:50%;top:2%;transform:translate(-50%);transition:opacity .2s ease-in-out}.rewardItem__innerContainer__video[_ngcontent-%COMP%]{opacity:0}.rewardItem__innerContainer__starPicture__img[_ngcontent-%COMP%]{display:block;width:100%}.rewardItem__innerContainer__icon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * 10);position:absolute;top:30.5%;left:0;width:100%;text-align:center}.rewardItem__innerContainer__icon--stars[_ngcontent-%COMP%]{font-size:calc(var(--vw) * 8);top:39%;opacity:0}.rewardItem__innerContainer__starBigNumbers[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;text-shadow:0 2px 4px rgba(0, 0, 0, .5);transform:translate(-50%, 15%);opacity:0}.rewardItem__label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 9);min-height:50px}.fluxProgressToasts[_ngcontent-%COMP%]{bottom:calc(var(--vh) * 3.5);left:calc(var(--vh) * 3.5);width:calc(var(--vw) * 24);position:absolute;display:flex;flex-direction:column;transform:translateY(50%);opacity:0}.fluxProgressToasts[_ngcontent-%COMP%] app-flux-progress-box[_ngcontent-%COMP%]{padding:calc(var(--vh) * 2);border:solid 1px var(--gu-blue);border-radius:4px;}.continue[_ngcontent-%COMP%]{transform:none !important;}.continueButtonPlaceholder[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 7.5);height:48px;width:100%}"],
                data: {
                    animation: [(0, C.X$)("fadeAndSlideIn", [(0, C.eR)(":enter", [(0, C.oB)({
                        opacity: 0,
                        transform: "translateY(calc(var(--vh) * 3))"
                    }), (0, C.jt)("250ms 250ms ease-in-out", (0, C.oB)({
                        opacity: 1,
                        transform: "translateY(0)"
                    }))])]), (0, C.X$)("fadeAndScaleIn", [(0, C.eR)(":enter", [(0, C.oB)({
                        opacity: 0,
                        transform: "scale(0.5)"
                    }), (0, C.jt)("250ms ease-in-out", (0, C.oB)({opacity: 1, transform: "scale(1)"}))])])]
                }
            }), o
        })();

        function vt({xp: o, levelThresholds: r}) {
            o < 0 && (o = 0);
            const {level: t} = r.find((n, i) => o >= n.total_xp && o < r[i + 1].total_xp);
            return t
        }

        function et({xp: o, levelThresholds: r}) {
            const t = vt({xp: o, levelThresholds: r}), a = r[t].total_xp;
            return (o - a) / (r[t + 1].total_xp - a) * 100
        }

        function nn(o, r) {
            o.addEventListener("pause", r), o.addEventListener("ended", r)
        }

        function on(o, r) {
            o.removeEventListener("pause", r), o.removeEventListener("ended", r)
        }

        var Re = g(57470), tt = g(79763);

        function Xo(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 11), e.NdJ("click", function () {
                    const a = e.CHM(t).index;
                    return e.oxw().gotoTask(a)
                }), e.TgZ(1, "picture"), e._UZ(2, "img", 12), e.qZA(), e._UZ(3, "div", 13), e.TgZ(4, "gu-heading-text", 14), e._uU(5), e.qZA(), e.TgZ(6, "gu-simple-text", 15), e._uU(7), e.qZA()()
            }
            if (2 & o) {
                const t = r.$implicit;
                e.xp6(2), e.Q6J("src", t.image, e.LSH), e.xp6(3), e.hij(" ", t.title, " "), e.xp6(2), e.hij(" ", t.subtitle, " ")
            }
        }

        let Ko = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u) {
                    this.router = t, this.environment = n, this.activeModal = i, this.playService = a, this.gameService = s, this.authService = c, this.akumaService = d, this.guGAmeService = u, this.tasks = [{
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
                    this.playService.setPlaying(z.OC.OUT, P.B_.TUTORIAL)
                }

                openPacks() {
                    this.akumaService.postControlEvent("tutorial", "Complete", "", "temple", "Btn", "pressed"), this.activeModal.dismiss(), this.akumaService.postFlowEvent("tutorialReward", "succeeded"), this.router.navigate([Re.gv.routeContent(this.environment).openPacks.path])
                }

                close() {
                    this.akumaService.postControlEvent("tutorial", "Complete", "", "close", "Btn", "pressed"), this.activeModal.dismiss()
                }

                gotoTask(t) {
                    this.activeModal.dismiss(), this.akumaService.postControlEvent("tutorial", "Complete", "", this.tasks[t].name, "Btn", "pressed"), this.router.navigate([this.tasks[t].route])
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(pe.F0), e.Y36(f.Ho), e.Y36(U.mX), e.Y36(z.GT), e.Y36(tt.hM), e.Y36(f.mI), e.Y36(_.jt), e.Y36(ee.xV))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-tutorial-end-modal"]],
                decls: 19,
                vars: 1,
                consts: [["iconLigature", "close_x", 1, "closeButton", 3, "click"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "x-small", 1, "title"], ["fillColor", "colors.light.300", 1, "subtitle"], [1, "tasks"], ["class", "tasks__subTask", 3, "click", 4, "ngFor", "ngForOf"], [1, "freeStuff"], ["src", "/gu-assets/images/tutorial/free-stuff-banner-end.png", 1, "freeStuff__bgImage"], [1, "freeStuff__cta"], ["src", "/gu-assets/images/tutorial/free-core-pack.png", 1, "freeStuff__cardImage"], ["fillColor", "colors.light.300", 1, "freeStuff__text"], ["size", "small", "type", "primary", 1, "freeStuff__ctaBtn", 3, "click"], [1, "tasks__subTask", 3, "click"], ["alt", "", 1, "tasks__subTask__image", 3, "src"], [1, "tasks__subTask__imageShadow"], ["size", "x-small", 1, "tasks__subTask__title"], ["fillColor", "colors.light.300", 1, "tasks__subTask__subtitle"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.close()
                    }), e.qZA(), e.TgZ(1, "gu-heading-text", 1), e._uU(2, " Congratulations, Mortal\n"), e.qZA(), e.TgZ(3, "gu-simple-text", 2), e._uU(4, " You\u2019ve won your first match, but there is much more for you to master...\n"), e.qZA(), e.TgZ(5, "div", 3), e.YNc(6, Xo, 8, 3, "div", 4), e.qZA(), e.TgZ(7, "div", 5)(8, "picture"), e._UZ(9, "img", 6), e.qZA(), e.TgZ(10, "div", 7)(11, "picture"), e._UZ(12, "img", 8), e.qZA(), e.TgZ(13, "gu-simple-text", 9), e._uU(14, " Head to the temple to open your "), e.TgZ(15, "strong"), e._uU(16, "3 Core Packs "), e.qZA()(), e.TgZ(17, "gu-primary-hex-button", 10), e.NdJ("click", function () {
                        return n.openPacks()
                    }), e._uU(18, "Open Packs"), e.qZA()()()), 2 & t && (e.xp6(6), e.Q6J("ngForOf", n.tasks))
                },
                directives: [l.sg],
                styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;background-color:#0f1b27;border:2px solid #3D5A74;box-sizing:border-box;box-shadow:5px 5px 15px #0006;width:900px;align-items:center}.closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;font-size:15px;color:#8be1e0;cursor:pointer}.closeButton[_ngcontent-%COMP%]:hover{color:#f6f6f6}.title[_ngcontent-%COMP%]{margin:20px}.subTitle[_ngcontent-%COMP%]{margin:20px;text-align:center}.tasks[_ngcontent-%COMP%]{margin:20px;display:flex;cursor:pointer}.tasks__subTask[_ngcontent-%COMP%]{position:relative;width:250px;margin:10px}.tasks__subTask[_ngcontent-%COMP%]:hover{border:2px solid #54BBCD;border-radius:4px}.tasks__subTask__image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;display:block;border-radius:4px}.tasks__subTask__imageShadow[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0px;background:linear-gradient(180deg,rgba(15,27,39,0) 40.36%,rgba(15,27,39,.8) 67.86%,rgba(15,27,39,.95) 100%)}.tasks__subTask__title[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:80px;text-align:center}.tasks__subTask__subtitle[_ngcontent-%COMP%]{position:absolute;bottom:40px;right:0;left:0;text-align:center;width:170px;margin-left:auto;margin-right:auto}.freeStuff[_ngcontent-%COMP%]{position:relative;margin-bottom:30px}.freeStuff__bgImage[_ngcontent-%COMP%]{width:850px;display:block}.freeStuff__tooltip[_ngcontent-%COMP%]{display:inline;text-align:center}.freeStuff__cta[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:absolute;left:0;right:0;top:0px;bottom:0px}.freeStuff__ctaBtn[_ngcontent-%COMP%]{margin:0 20px}"]
            }), o
        })();
        var te = g(98009), Pe = g(23569), rn = g(61737);

        class ei {
            constructor(r, t, n, i) {
                this.card = r, this.gridRowIndex = t, this.groupingIndex = n, this.cardRowIndex = i
            }
        }

        var R = (() => {
            return (o = R || (R = {}))[o.FORGING = 0] = "FORGING", o[o.SIGNING = 1] = "SIGNING", o[o.SELLING = 2] = "SELLING", R;
            var o
        })();
        let He = (() => {
            class o {
                constructor() {
                    this.alive = !0, this.dataStore = {expandedCard: null}, this._expandedCard$ = new H.X(null)
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
                        const s = new ei(t, n, i, a);
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
        var an = g(40520);

        class ti {
            constructor(r, t, n = [], i) {
                this.proto = r, this.quality = t, this.ids = n, this.keptId = i
            }
        }

        let xe = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k) {
                    this.gameApi = t, this.authService = n, this.cardsService = i, this.decksService = a, this.cardGridService = s, this.audioService = c, this.http = d, this.forgeWalletService = u, this.moduleConfigService = x, this.storageService = v, this.tokenRefreshService = k, this.unsubscribe = new M.xQ, this.alive = !0, this.dataStore = {
                        forgeCards: null,
                        previewCard: null,
                        fusingLevels: null,
                        transactionInProgress: null
                    }, this._forgeCards$ = new H.X(null), this._previewCard$ = new H.X(null), this._fusingLevels$ = new H.X(null), this._transactionInProgress$ = new H.X(null), this.moduleConfig$ = this.moduleConfigService.loadConfigurations(), this.watchForLogout()
                }

                watchForLogout() {
                    this.authService.account$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => null === t)).subscribe(t => {
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
                    this.gameApi.get("/fusing_levels").pipe((0, w.q)(1), (0, O.U)(t => {
                        const n = {};
                        for (const i in m.nJ) if ("number" == typeof m.nJ[i]) {
                            const a = t.find(s => s.quality === m.nJ[i]);
                            n[m.nJ[i]] = a
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
                    if (n !== m.nJ.PLAIN) return !1;
                    const a = this.numberOfQualityToForgeSync(n, i);
                    return -1 !== a && t.length >= a
                }

                updateKeptId(t, n, i) {
                    if (null === this.dataStore.forgeCards || this.dataStore.forgeCards.proto !== t || this.dataStore.forgeCards.quality !== n) return !1;
                    const a = Object.assign(Object.assign({}, this.dataStore.forgeCards), {keptId: i});
                    this.audioService.forgeSelectCard.play(), this.emitForgeCards(a)
                }

                canAddToForge(t, n, i) {
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
                        if (null === this.dataStore.forgeCards || this.dataStore.forgeCards.proto !== t || this.dataStore.forgeCards.quality !== n) return !0;
                        const a = yield this.numberOfQualityToForge(n);
                        return !(this.dataStore.forgeCards.ids.length >= a)
                    })
                }

                addToForge(t, n, i) {
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
                        if (!(yield this.canAddToForge(t, n, i))) return !1;
                        const c = null === this.dataStore.forgeCards || this.dataStore.forgeCards.proto !== t || this.dataStore.forgeCards.quality !== n ? new ti(t, n, [i], i) : Object.assign(Object.assign({}, this.dataStore.forgeCards), {ids: [...this.dataStore.forgeCards.ids, i]});
                        this.emitForgeCards(c), this.updatePreviewCard();
                        const d = yield this.numberOfQualityToForge(n);
                        this.dataStore.forgeCards.ids.length >= d ? (this.audioService.forgeSelectCard.play(), this.audioService.forgeHeatingUp.play()) : this.audioService.forgeSelectCard.play()
                    })
                }

                removeFromForge(t, n, i) {
                    if (null === this.dataStore.forgeCards) return !1;
                    if (this.dataStore.forgeCards.ids.some(a => a === i)) {
                        const a = this.dataStore.forgeCards.ids.filter(d => d !== i),
                            s = i === this.dataStore.forgeCards.keptId ? a[0] : this.dataStore.forgeCards.keptId,
                            c = Object.assign(Object.assign({}, this.dataStore.forgeCards), {ids: a, keptId: s});
                        return this.emitForgeCards(0 === c.ids.length ? null : c), this.updatePreviewCard(), !0
                    }
                    return !1
                }

                updatePreviewCard() {
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
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
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
                        const n = yield this.fusingLevels$.pipe((0, S.h)(i => null !== i), (0, w.q)(1)).toPromise();
                        return n[t] ? n[t].amount : null
                    })
                }

                getNextQuality(t) {
                    switch (t) {
                        case m.nJ.DIAMOND:
                        case m.nJ.GOLD:
                            return m.nJ.DIAMOND;
                        case m.nJ.SHADOW:
                            return m.nJ.GOLD;
                        case m.nJ.METEORITE:
                            return m.nJ.SHADOW;
                        case m.nJ.PLAIN:
                            return m.nJ.METEORITE;
                        default:
                            return t
                    }
                }

                callForge(t = !1) {
                    if (!this.dataStore.forgeCards || void 0 === this.dataStore.forgeCards.keptId || !this.dataStore.forgeCards.ids) return (0, rn._)("This is an error!");
                    const i = this.authService.getUserId(),
                        s = (this.authService.getGameSessionTicket(), this.dataStore.forgeCards.ids);
                    return this.moduleConfig$.pipe((0, _e.w)(({fusingHost: c}) => this.forgeWalletService.selectedWallet$.pipe((0, O.U)(d => ({
                        wallet: d,
                        fusingHost: c
                    })))), (0, _e.w)(({
                                          wallet: c,
                                          fusingHost: d
                                      }) => this.tokenRefreshService.autoRefreshToken(this.http.post(`${d}/forge/${t ? "validation" : ""}`, {
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
                    if (!this.dataStore.forgeCards || void 0 === this.dataStore.forgeCards.keptId || !this.dataStore.forgeCards.ids) return (0, rn._)("This is an error!");
                    const n = this.dataStore.forgeCards.keptId, i = this.authService.getUserId(),
                        a = this.authService.getGameSessionTicket(),
                        s = this.dataStore.forgeCards.ids.filter(c => c !== n);
                    return this.forgeWalletService.loadSelectedWallet(), this.forgeWalletService.selectedWallet$.pipe((0, w.q)(1), (0, _e.w)(c => this.gameApi.post(`/user/${i}/${t}?session=${a}`, {
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
                    return this.cardsService.forgeUpdate(t, n, this.getNextQuality(i)), this.decksService.forgeUpdate(t, n, this.getNextQuality(i)), this.finalizeForging(), (0, oe.of)(!0)
                }

                postTxHashForTracking(t) {
                    return this.moduleConfig$.pipe((0, _e.w)(n => this.http.post(`${n.walletAPIHost}/tracking`, t)))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.Ft), e.LFG(f.mI), e.LFG(_.dK), e.LFG(te.D), e.LFG(He), e.LFG(f.pk), e.LFG(an.eN), e.LFG(Pe.d), e.LFG(_.LE), e.LFG(f.qy), e.LFG(_.$))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })(), we = (() => {
            class o {
                constructor(t, n, i) {
                    this.gameApi = t, this.authService = n, this.marketplaceApiService = i, this.dataStore = {
                        allBoards: [],
                        ownedBoards: [],
                        allTrinkets: [],
                        ownedTrinkets: [],
                        loadouts: [],
                        protoCollectables: []
                    }, this._allBoards$ = new H.X([]), this._ownedBoards$ = new H.X([]), this._allTrinkets$ = new H.X([]), this._ownedTrinkets$ = new H.X([]), this._loadouts$ = new H.X([]), this._protoCollectables$ = new H.X([])
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

                getBoardsAndTrinkets() {
                    const t = this.authService.getUserId();
                    return this.marketplaceApiService.get(`/user/${t}/asset?type=board&type=trinket`)
                }

                fetchData() {
                    (0, Z.aj)([this.fetchProtoCollectables(), this.getBoardsAndTrinkets(), this.fetchAllLoadouts()]).pipe((0, w.q)(1)).subscribe(([t, n, i]) => {
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
                    return this.gameApi.post(`/user/${n}/collection?session=${i}`, t).pipe((0, w.q)(1), (0, b.b)(a => {
                        this.getThenUpdateLocalLoadouts(a, !0)
                    }))
                }

                updateLoadout(t) {
                    const n = this.authService.getUserId(), i = this.authService.getGameSessionTicket();
                    return this.gameApi.put(`/user/${n}/collection/${t.collection_id}?session=${i}`, t).pipe((0, w.q)(1), (0, b.b)(a => {
                        this.getThenUpdateLocalLoadouts(a)
                    }))
                }

                getThenUpdateLocalLoadouts(t, n) {
                    this.fetchLoadout(t).pipe((0, w.q)(1)).subscribe(i => {
                        let a = [];
                        if (n) a = [...this.dataStore.loadouts, this.buildOutLoadout(i)]; else {
                            const s = this.dataStore.loadouts.find(d => d.collection_id === t),
                                c = this.dataStore.loadouts.indexOf(s);
                            a = [...this.dataStore.loadouts.slice(0, c), this.buildOutLoadout(i), ...this.dataStore.loadouts.slice(c + 1)]
                        }
                        this.emitLoadouts(a)
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.Ft), e.LFG(f.mI), e.LFG(_._q))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();
        var sn = g(96727), ni = g(24058), oi = g(4390), G = (() => {
            return (o = G || (G = {})).deckBuilder = "deck-builder", o.arena = "game-modes", o.workshop = "my-decks", o.trader = "trader", o.trailer = "trailer", o.openPacks = "temple", o.collections = "inventory", o.drafter = "drafter", o.forge = "forge", o.referrals = "referrals", o.myCards = "my-cards", o.raffle = "raffle", o.streamer = "streamer", o.spgp = "spgp", o.starStore = "star-store", o.playToEarn = "play-to-earn", G;
            var o
        })(), ii = g(78812), bt = g(83035), ri = g(77391);
        const ai = {
            isSideMenuOpened: !1,
            activeMenu: "",
            activeSubMenu: null,
            expandedMenu: null,
            isUserMenuOpened: !1
        };
        let nt = (() => {
            class o {
                constructor(t) {
                    this.router = t, this.store$ = new H.X(ai), this.logout$ = new M.xQ
                }

                get state$() {
                    return this.store$.asObservable()
                }

                get logoutObserver$() {
                    return this.logout$.asObservable()
                }

                handleMainMenuClick(t) {
                    t.children ? this.toggleSubMenu(t) : this.navigateTo(t)
                }

                handleSubMenuClick(t) {
                    this.navigateTo(t)
                }

                handleUserMenuClick(t) {
                    if ("logOut" === t.name) return this.logout$.next();
                    this.navigateTo(t)
                }

                navigateTo(t) {
                    const {url: n, path: i} = t;
                    n ? window.open(`${n}`, "_blank") : (!!i || "" === i) && this.router.navigateByUrl(`/${i}`), this.store$.next(Object.assign(Object.assign({}, this.store$.value), {
                        isSideMenuOpened: !1,
                        expandedMenu: null,
                        isUserMenuOpened: !1
                    }))
                }

                setActiveMenu(t) {
                    this.store$.next(Object.assign(Object.assign({}, this.store$.value), {activeMenu: t}))
                }

                setActiveSubMenu(t) {
                    this.store$.next(Object.assign(Object.assign({}, this.store$.value), {activeSubMenu: t}))
                }

                toggleUserMenu() {
                    this.store$.next(Object.assign(Object.assign({}, this.store$.value), {
                        isSideMenuOpened: !1,
                        expandedMenu: null,
                        isUserMenuOpened: !this.store$.value.isUserMenuOpened
                    }))
                }

                toggleSideMenu() {
                    this.store$.next(Object.assign(Object.assign({}, this.store$.value), {
                        isSideMenuOpened: !this.store$.value.isSideMenuOpened,
                        isUserMenuOpened: !1,
                        expandedMenu: null
                    }))
                }

                toggleSubMenu(t) {
                    const {shortName: n} = t;
                    this.store$.next(Object.assign(Object.assign({}, this.store$.value), {
                        expandedMenu: n === this.store$.value.expandedMenu ? null : n,
                        isUserMenuOpened: !1
                    }))
                }

                closeAllMenus() {
                    this.store$.next(Object.assign(Object.assign({}, this.store$.value), {
                        expandedMenu: null,
                        isUserMenuOpened: !1
                    }))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(pe.F0))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac, providedIn: "root"}), o
        })();
        const si = function (o) {
            return {"hamburger-button": !0, "hamburger-button--open": o}
        };
        let ci = (() => {
            class o {
                constructor() {
                    this.isSideMenuOpened = !1
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-hamburger-menu-icon"]],
                inputs: {isSideMenuOpened: "isSideMenuOpened"},
                decls: 1,
                vars: 4,
                consts: [["fillColor", "colors.gunmetal.100", 3, "ngClass", "iconLigature"]],
                template: function (t, n) {
                    1 & t && e._UZ(0, "gu-icon", 0), 2 & t && (e.s9C("iconLigature", n.isSideMenuOpened ? "close_x" : "hamburger_menu"), e.Q6J("ngClass", e.VKq(2, si, n.isSideMenuOpened)))
                },
                directives: [l.mk],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.hamburger-button[_ngcontent-%COMP%]{cursor:pointer;text-align:center;padding:0 20px;font-size:28px;transition:transform .3s ease-in-out}.hamburger-button--open[_ngcontent-%COMP%]{transform:rotate(180deg)}"]
            }), o
        })(), li = (() => {
            class o {
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-logo"]],
                decls: 9,
                vars: 0,
                consts: [[1, "columns", "is-mobile", "is-centered", "is-vcentered", "is-gapless"], [1, "column", "is-narrow"], ["type", "image/webp", "srcset", "/assets/images/internal-logos/logo--gods-unchained-icon.webp"], ["type", "image/png", "srcset", "/assets/images/internal-logos/logo--gods-unchained-icon.png"], ["alt", "A digital trading card game where you can trade cards you purchase or earn for real-world currency.", "src", "/assets/images/internal-logos/logo--gods-unchained-icon.png", 1, "logo__image"], [1, "column", "is-narrow", "is-hidden-desktop"], ["size", "2x-small"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "picture"), e._UZ(3, "source", 2)(4, "source", 3)(5, "img", 4), e.qZA()(), e.TgZ(6, "div", 5)(7, "gu-heading-text", 6), e._uU(8, " Gods Unchained "), e.qZA()()())
                },
                styles: [".logo__image[_ngcontent-%COMP%]{cursor:pointer;display:block;width:32px;height:32px;margin:0 12px}@media screen and (min-width: 1024px){.logo__image[_ngcontent-%COMP%]{width:40px;height:40px;margin:0 20px}}"]
            }), o
        })();
        const di = ["subMenuList"];

        function gi(o, r) {
            1 & o && e._UZ(0, "gu-icon", 7)
        }

        function ui(o, r) {
            1 & o && e._UZ(0, "gu-notification-bubble")
        }

        const pi = function (o) {
            return {"sub-menu__item": !0, "sub-menu__item--selected": o}
        }, _i = function () {
            return {breakpoint: "small", kind: "tag"}
        }, hi = function (o) {
            return [o]
        };

        function mi(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "li", 3), e.NdJ("click", function (i) {
                    const s = e.CHM(t).$implicit;
                    return e.oxw().handleSubMenuClick(i, s)
                }), e.TgZ(1, "gu-simple-text", 4), e._uU(2), e.qZA(), e.YNc(3, gi, 1, 0, "gu-icon", 5), e.YNc(4, ui, 1, 0, "gu-notification-bubble", 6), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.Q6J("ngClass", e.VKq(5, pi, t.name === n.activeSubMenu)), e.xp6(1), e.Q6J("responsiveKind", e.VKq(8, hi, e.DdM(7, _i))), e.xp6(1), e.hij(" ", t.shortName, " "), e.xp6(1), e.Q6J("ngIf", t.url), e.xp6(1), e.Q6J("ngIf", t.showNotificationBubble)
            }
        }

        let fi = (() => {
            class o {
                constructor(t, n, i) {
                    this.navbarService = t, this.viewRef = n, this.document = i, this.subMenuItems = [], this.activeSubMenu = null, this.hasSubMenuOpened = !1
                }

                ngAfterViewChecked() {
                    this.viewRef.element.nativeElement.style = `--maxHeight:${this.listElement.nativeElement.offsetHeight}px`
                }

                ngOnChanges(t) {
                    if (!t.hasSubMenuOpened || t.hasSubMenuOpened.firstChange) return;
                    const {previousValue: n, currentValue: i} = t.hasSubMenuOpened;
                    !0 === i && !1 === n && this.document.addEventListener("click", this.handleCloseSubMenu.bind(this), {once: !0})
                }

                handleCloseSubMenu() {
                    this.navbarService.closeAllMenus()
                }

                handleSubMenuClick(t, n) {
                    t.stopPropagation(), this.navbarService.handleSubMenuClick(n)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(nt), e.Y36(e.s_b), e.Y36(l.K0))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-main-menu-sub-item"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(di, 7), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.listElement = i.first)
                    }
                },
                inputs: {
                    subMenuItems: "subMenuItems",
                    activeSubMenu: "activeSubMenu",
                    hasSubMenuOpened: "hasSubMenuOpened"
                },
                features: [e.TTD],
                decls: 3,
                vars: 1,
                consts: [[1, "sub-menu"], ["subMenuList", ""], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["kind", "large", 1, "sub-menu__short-name", 3, "responsiveKind"], ["class", "sub-menu__external-icon", "iconLigature", "leave_website", 4, "ngIf"], [4, "ngIf"], ["iconLigature", "leave_website", 1, "sub-menu__external-icon"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "ul", 0, 1), e.YNc(2, mi, 5, 10, "li", 2), e.qZA()), 2 & t && (e.xp6(2), e.Q6J("ngForOf", n.subMenuItems))
                },
                directives: [l.sg, l.mk, l.O5],
                styles: ['[_nghost-%COMP%]{box-sizing:border-box;display:flex;flex-flow:column;width:100%;max-height:0;padding-top:0;color:var(--gu-blue);overflow:hidden;opacity:0;transition:max-height 1s;transition:opacity .3s ease-in-out;transition-property:max-height, padding, opacity}.open[_nghost-%COMP%]{max-height:calc(var(--maxHeight) + 20px);opacity:1;padding-top:20px}.sub-menu[_ngcontent-%COMP%]{margin:0;padding:0 0 0 28px;list-style:none}.sub-menu__item[_ngcontent-%COMP%]{color:var(--gu-blue);position:relative;white-space:normal;display:flex;justify-content:space-between;transition:color 280ms cubic-bezier(.4,0,.2,1);}.sub-menu__item[_ngcontent-%COMP%]:last-of-type {padding-bottom:0}.sub-menu__item--selected[_ngcontent-%COMP%]{background:var(--gu-yellow);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.sub-menu__short-name[_ngcontent-%COMP%]{display:inline-block;line-height:20px;vertical-align:middle;}.sub-menu__external-icon[_ngcontent-%COMP%]{font-size:14px;display:inline-block;line-height:20px;}gu-notification-bubble[_ngcontent-%COMP%]{position:absolute;right:0;top:7px}@media screen and (min-width:1024px) {[_nghost-%COMP%]{position:absolute;top:80px;left:-16px;width:144px;padding:0;z-index:1}.open[_nghost-%COMP%]{max-height:var(--maxHeight);padding:0;box-shadow:0 2px 12px #00000080}[_nghost-%COMP%]:after {content:"";display:block;height:var(--maxHeight);width:100%}.sub-menu[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;padding:0;background:var(--gu-blue-dark);}.sub-menu__item[_ngcontent-%COMP%], .sub-menu__item[_ngcontent-%COMP%]:last-of-type {padding:12px 16px;}.sub-menu__item[_ngcontent-%COMP%]:hover {color:var(--gu-yellow);}gu-notification-bubble[_ngcontent-%COMP%]{right:16px;top:50%;transform:translateY(-50%)}}@media screen and (min-width:1280px) {[_nghost-%COMP%]{left:0}}']
            }), o
        })();
        const Ci = function (o) {
            return {"menu-item__long-name": !0, "menu-item--selected": o}
        }, cn = function () {
            return {breakpoint: "small", kind: "tag"}
        }, ln = function (o) {
            return [o]
        };

        function vi(o, r) {
            if (1 & o && (e.TgZ(0, "gu-simple-text", 7), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Q6J("ngClass", e.VKq(3, Ci, t.isActive))("responsiveKind", e.VKq(6, ln, e.DdM(5, cn))), e.xp6(1), e.hij(" ", t.menuItem.longName, "\n")
            }
        }

        function bi(o, r) {
            1 & o && e._UZ(0, "gu-icon", 8)
        }

        const xi = function (o) {
            return {"menu-item__caret": !0, "menu-item__caret--rotated": o}
        };

        function wi(o, r) {
            if (1 & o && e._UZ(0, "gu-icon", 9), 2 & o) {
                const t = e.oxw();
                e.Q6J("ngClass", e.VKq(1, xi, !!t.hasSubMenuOpened))
            }
        }

        function Mi(o, r) {
            1 & o && e._UZ(0, "gu-notification-bubble")
        }

        const yi = function () {
            return {"menu-item__icon": !0}
        }, ki = function (o) {
            return {"menu-item__short-name": !0, "menu-item--selected": o}
        }, Oi = function (o) {
            return {open: o}
        };
        let Pi = (() => {
            class o {
                constructor() {
                    this.isActive = !1, this.hasSubMenuOpened = !1, this.activeSubMenu = null, this.hasNotificationBubble = !1
                }

                get hasOpenedClass() {
                    return this.hasSubMenuOpened
                }

                get hasSubMenuClass() {
                    return this.menuItem.children
                }

                get hasIsExternalClass() {
                    return this.menuItem.children
                }

                get hasIsSelectedClass() {
                    return this.isActive
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-main-menu-item"]],
                hostVars: 8,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("menu-item--opened", n.hasOpenedClass)("menu-item--has-sub-menu", n.hasSubMenuClass)("menu-item--external", n.hasIsExternalClass)("menu-item--selected", n.hasIsSelectedClass)
                },
                inputs: {
                    menuItem: "menuItem",
                    isActive: "isActive",
                    hasSubMenuOpened: "hasSubMenuOpened",
                    activeSubMenu: "activeSubMenu",
                    hasNotificationBubble: "hasNotificationBubble"
                },
                decls: 8,
                vars: 21,
                consts: [[3, "ngClass", "iconLigature"], ["kind", "large", "fontWeight", "bold", 3, "ngClass", "responsiveKind", 4, "ngIf"], ["kind", "large", "fontWeight", "bold", 1, "menu-item__short-name", 3, "ngClass", "responsiveKind"], ["class", "menu-item__external-icon", "iconLigature", "leave_website", 4, "ngIf"], ["iconLigature", "caret_down", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", "hasSubMenuOpened", "subMenuItems", "activeSubMenu"], ["kind", "large", "fontWeight", "bold", 3, "ngClass", "responsiveKind"], ["iconLigature", "leave_website", 1, "menu-item__external-icon"], ["iconLigature", "caret_down", 3, "ngClass"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "gu-icon", 0), e.YNc(1, vi, 2, 8, "gu-simple-text", 1), e.TgZ(2, "gu-simple-text", 2), e._uU(3), e.qZA(), e.YNc(4, bi, 1, 0, "gu-icon", 3), e.YNc(5, wi, 1, 3, "gu-icon", 4), e.YNc(6, Mi, 1, 0, "gu-notification-bubble", 5), e._UZ(7, "cerberus-navbar-main-menu-sub-item", 6)), 2 & t && (e.Q6J("ngClass", e.DdM(13, yi))("iconLigature", n.menuItem.icon), e.xp6(1), e.Q6J("ngIf", n.menuItem.longName), e.xp6(1), e.Q6J("ngClass", e.VKq(14, ki, n.isActive))("responsiveKind", e.VKq(17, ln, e.DdM(16, cn))), e.xp6(1), e.hij(" ", n.menuItem.shortName, "\n"), e.xp6(1), e.Q6J("ngIf", !n.menuItem.children && !!n.menuItem.url), e.xp6(1), e.Q6J("ngIf", !!n.menuItem.children), e.xp6(1), e.Q6J("ngIf", n.hasNotificationBubble), e.xp6(1), e.Q6J("ngClass", e.VKq(19, Oi, n.hasSubMenuOpened))("hasSubMenuOpened", n.hasSubMenuOpened)("subMenuItems", n.menuItem.children)("activeSubMenu", n.activeSubMenu))
                },
                directives: [l.mk, l.O5, fi],
                styles: ["[_nghost-%COMP%]{cursor:pointer;position:relative;display:flex;flex-shrink:0;flex-grow:0;align-items:center;margin-right:26px;padding:20px 0;border:none;text-transform:uppercase;white-space:nowrap;flex-wrap:wrap;}.menu-item--selected[_nghost-%COMP%] > *[_ngcontent-%COMP%]:not(cerberus-navbar-main-menu-sub-item):not(gu-notification-bubble) {background:var(--gu-yellow);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{color:var(--gu-blue);}[_nghost-%COMP%]:last-of-type {margin:0}.menu-item--has-sub-menu[_ngcontent-%COMP%]{padding-right:18px}.menu-item--opened > *[_ngcontent-%COMP%]{color:var(--gu-yellow);}.menu-item--opened[_nghost-%COMP%] gu-notification-bubble[_ngcontent-%COMP%]{opacity:0}.menu-item--opened[_nghost-%COMP%] .menu-item__caret[_ngcontent-%COMP%]{display:block;line-height:0;transform-origin:center;transition:transform .3s ease-in-out}.menu-item--opened[_nghost-%COMP%] .menu-item__caret--rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.menu-item--opened[_nghost-%COMP%] .menu-item__external-icon[_ngcontent-%COMP%]{margin-left:8px;margin-top:-4px;font-size:20px;line-height:0}.menu-item--opened[_nghost-%COMP%] .menu-item__external-icon[_ngcontent-%COMP%]{margin:0;position:absolute;bottom:20px;font-size:11px}.menu-item__icon[_ngcontent-%COMP%]{display:block;margin-right:8px;margin-top:-4px;font-size:20px;line-height:0}.menu-item--external[_ngcontent-%COMP%]{padding-right:20px}.menu-item--opened[_ngcontent-%COMP%] gu-notification-bubble[_ngcontent-%COMP%]{position:absolute;right:50%;top:25%;transition:opacity .3s ease-in-out}gu-notification-bubble[_ngcontent-%COMP%]{position:absolute;right:0}@media screen and (min-width:1024px) {[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-right:26px;padding:0 4px;border:none}.menu-item--has-sub-menu[_nghost-%COMP%], .menu-item--external[_nghost-%COMP%]{padding-right:18px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{transition: color 280ms cubic-bezier(.4,0,.2,1);}[_nghost-%COMP%]:hover > *[_ngcontent-%COMP%]{color:var(--gu-yellow);}[_nghost-%COMP%]:last-of-type {margin:0}.menu-item--opened[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:var(--gu-blue);}.menu-item__icon[_ngcontent-%COMP%]{margin:0 0 8px}.menu-item__caret[_ngcontent-%COMP%]{position:absolute;right:0;bottom:22px}.menu-item__external-icon[_ngcontent-%COMP%]{margin:0;position:absolute;right:-10px;bottom:20px;font-size:11px}gu-notification-bubble[_ngcontent-%COMP%]{top:18px;right:50%;transform:translate(150%)}}@media screen and (min-width:1280px) {[_nghost-%COMP%]{flex-direction:row;padding:0;margin-right:8px}.menu-item--has-sub-menu[_nghost-%COMP%], .menu-item--external[_nghost-%COMP%]{padding-right:0}.menu-item__caret[_ngcontent-%COMP%]{position:relative;right:auto;bottom:auto}.menu-item__icon[_ngcontent-%COMP%], .menu-item__external-icon[_ngcontent-%COMP%]{position:static;margin:-2px 8px;top:unset;left:unset;transform:unset}.menu-item--has-sub-menu[_ngcontent-%COMP%] .menu-item__long-name[_ngcontent-%COMP%]{display:block}.menu-item__long-name[_ngcontent-%COMP%] + .menu-item__short-name[_ngcontent-%COMP%]{display:none}gu-notification-bubble[_ngcontent-%COMP%]{top:50%;left:20px;transform:translateY(-170%)}}@media screen and (min-width:1920px) {[_nghost-%COMP%]{margin-right:20px}}"]
            }), o
        })();

        function Si(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "cerberus-navbar-main-menu-item", 1), e.NdJ("click", function (i) {
                    const s = e.CHM(t).$implicit;
                    return e.oxw().handleClick(i, s)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.Q6J("menuItem", t)("isActive", n.activeMenu === t.name)("hasSubMenuOpened", n.expandedMenu === t.shortName)("activeSubMenu", n.activeSubMenu)("hasNotificationBubble", n.getHasNotificationBubble(t))
            }
        }

        let Ti = (() => {
            class o {
                constructor(t) {
                    this.navbarService = t, this.activeMenu = "", this.activeSubMenu = null, this.expandedMenu = null, this.getHasNotificationBubble = n => !!n.showNotificationBubble || !!n.children && n.children.some(i => i.showNotificationBubble)
                }

                handleClick(t, n) {
                    t.stopPropagation(), this.navbarService.handleMainMenuClick(n)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(nt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-main-menu"]],
                inputs: {
                    menuItems: "menuItems",
                    activeMenu: "activeMenu",
                    activeSubMenu: "activeSubMenu",
                    expandedMenu: "expandedMenu"
                },
                decls: 1,
                vars: 1,
                consts: [["class", "menu-item", 3, "menuItem", "isActive", "hasSubMenuOpened", "activeSubMenu", "hasNotificationBubble", "click", 4, "ngFor", "ngForOf"], [1, "menu-item", 3, "menuItem", "isActive", "hasSubMenuOpened", "activeSubMenu", "hasNotificationBubble", "click"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, Si, 1, 5, "cerberus-navbar-main-menu-item", 0), 2 & t && e.Q6J("ngForOf", n.menuItems)
                },
                directives: [l.sg, Pi],
                styles: ["[_nghost-%COMP%]{position:absolute;top:80px;left:0;height:calc(100vh - 80px);width:100%;background:var(--gu-blue-dark);list-style:none;margin:0;padding:0 20px;transform:translate(-101%);display:flex;flex-direction:column;overflow:hidden;overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--gu-blue) var(--gu-blue-dark);transition:transform .3s ease-in-out}[_nghost-%COMP%]::-webkit-scrollbar {width:10px;height:10px}[_nghost-%COMP%]::-webkit-scrollbar-track {background:var(--gu-blue-dark);}[_nghost-%COMP%]::-webkit-scrollbar-thumb {background:var(--gu-blue);box-shadow:inset 0 0 0 2px var(--gu-blue-dark);}[_nghost-%COMP%]::-webkit-scrollbar-corner {background-color:var(--gu-blue-dark)}.open[_nghost-%COMP%]{transform:translate(0)}@media screen and (min-width:1024px) {[_nghost-%COMP%]{position:relative;transform:translate(0);background:transparent;flex-direction:row;top:auto;height:80px;padding:0;overflow:unset}}"]
            }), o
        })(), Ii = (() => {
            class o {
                constructor() {
                    this.userFluxTotal = 0, this.userStarsTotal = 0, this.username = "", this.userRank = "", this.userUniqueCardCount = 0, this.userDetailsClickEvent = new e.vpe
                }

                handleUserDetailsClick() {
                    this.userDetailsClickEvent.emit("userDetailsClickEvent")
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-user-info"]],
                inputs: {
                    userFluxTotal: "userFluxTotal",
                    userStarsTotal: "userStarsTotal",
                    username: "username",
                    userRank: "userRank",
                    userUniqueCardCount: "userUniqueCardCount"
                },
                outputs: {userDetailsClickEvent: "userDetailsClickEvent"},
                decls: 20,
                vars: 5,
                consts: [[1, "user-info__left-side", 3, "click"], ["kind", "small", "fontWeight", "bold", "fillColor", "colors.gold.300", 1, "user-info__user-flux"], ["iconLigature", "flux_symbol", 1, "user-info__icon"], ["kind", "small", "fontWeight", "bold", "fillColor", "colors.apocyan.300", 1, "user-info__user-stars"], ["iconLigature", "collectable_stars", 1, "user-info__icon"], [1, "user-info__border"], [1, "user-info__hover-gradient"], [1, "user-info__right-side"], [1, "user-info__top-row"], ["iconLigature", "cards_stack"], ["kind", "small"], ["kind", "small", "fontWeight", "bold", "fillColor", "color.gunmetal.100", 1, "user-info__user-rank"], [1, "user-info__bottom-row"], ["kind", "small", 1, "user-info__username"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e.NdJ("click", function () {
                        return n.handleUserDetailsClick()
                    }), e.TgZ(1, "gu-simple-text", 1), e._UZ(2, "gu-icon", 2), e._uU(3), e.qZA(), e.TgZ(4, "gu-simple-text", 3), e._UZ(5, "gu-icon", 4), e._uU(6), e.qZA(), e._UZ(7, "div", 5)(8, "div", 6), e.qZA(), e.TgZ(9, "div", 7)(10, "div", 8)(11, "div"), e._UZ(12, "gu-icon", 9), e.TgZ(13, "gu-simple-text", 10), e._uU(14), e.qZA()(), e.TgZ(15, "gu-simple-text", 11), e._uU(16), e.qZA()(), e.TgZ(17, "div", 12)(18, "gu-simple-text", 13), e._uU(19), e.qZA()()()), 2 & t && (e.xp6(3), e.hij(" ", n.userFluxTotal + ' FLUX', " "), e.xp6(3), e.hij(" ", n.userStarsTotal + ' STARS', " "), e.xp6(8), e.hij(" ", n.userUniqueCardCount, " "), e.xp6(2), e.hij(" ", n.userRank, " "), e.xp6(3), e.hij(" ", n.username, " "))
                },
                styles: ["[_nghost-%COMP%]{flex-direction:column;height:80px;display:flex;margin-right:8px}.user-info__left-side[_ngcontent-%COMP%]{display:flex;height:100%;order:2;flex-direction:row;justify-content:flex-start;margin-top:8px;padding-left:0}.user-info__left-side[_ngcontent-%COMP%]:hover .user-info__hover-gradient[_ngcontent-%COMP%]{opacity:0}.user-info__left-side[_ngcontent-%COMP%]{cursor:pointer;position:relative;align-items:stretch;white-space:nowrap;padding-right:16px;padding-left:0}.user-info__border[_ngcontent-%COMP%]{display:none;}.user-info__hover-gradient[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(180deg, #0f1b27 0%, #1d2f41 51.56%, rgba(61, 90, 116, .75) 100%);opacity:0;z-index:0;border-radius:4px;}.user-info__user-flux[_ngcontent-%COMP%], .user-info__user-stars[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;align-items:center;justify-content:flex-start}.user-info__user-flux[_ngcontent-%COMP%] gu-icon[_ngcontent-%COMP%], .user-info__user-stars[_ngcontent-%COMP%] gu-icon[_ngcontent-%COMP%]{font-size:24px;margin-right:4px}.user-info__user-flux[_ngcontent-%COMP%]:first-child, .user-info__user-stars[_ngcontent-%COMP%]:first-child {margin-right:10px}.user-info__right-side[_ngcontent-%COMP%]{display:none;}@media screen and (min-width:1280px) {[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-right:8px}.user-info__left-side[_ngcontent-%COMP%]{order:0;flex-direction:column;justify-content:center;margin-top:0;padding-left:16px}.user-info__left-side[_ngcontent-%COMP%]:hover .user-info__hover-gradient[_ngcontent-%COMP%]{opacity:1}.user-info__user-flux[_ngcontent-%COMP%]:first-child, .user-info__user-stars[_ngcontent-%COMP%]:first-child {margin-right:0}.user-info__top-row[_ngcontent-%COMP%], .user-info__bottom-row[_ngcontent-%COMP%]{text-align:right}.user-info__bottom-row[_ngcontent-%COMP%]{justify-content:flex-end;}}"]
            }), o
        })();

        function Ai(o, r) {
            1 & o && e._UZ(0, "gu-notification-bubble", 8)
        }

        const Fi = function (o) {
            return {"user-area__container": !0, "user-area__container--open": o}
        };
        let Zi = (() => {
            class o {
                constructor() {
                    this.userAvatarUrl = "", this.userLevel = 0, this.showNotificationBubble = !1, this.isUserMenuOpened = !1, this.userMenuTogglingEvent = new e.vpe
                }

                toggleUserMenu(t) {
                    t.stopPropagation(), this.userMenuTogglingEvent.emit("userMenuTogglingEvent")
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-user-avatar"]],
                inputs: {
                    userAvatarUrl: "userAvatarUrl",
                    userLevel: "userLevel",
                    showNotificationBubble: "showNotificationBubble",
                    isUserMenuOpened: "isUserMenuOpened"
                },
                outputs: {userMenuTogglingEvent: "userMenuTogglingEvent"},
                decls: 9,
                vars: 6,
                consts: [["data-test-id", "userAreaContainer", 3, "ngClass", "click"], ["highPriority", "true", 4, "ngIf"], ["alt", "user avatar image", 1, "user-area__image", 3, "src"], [1, "user-area__banner--left"], [1, "user-area__banner--right"], [1, "user-area__corner"], [1, "user-area__corner", "user-area__corner--right"], ["kind", "tag", "align", "center", 1, "user-area__user-level"], ["highPriority", "true"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e.NdJ("click", function (a) {
                        return n.toggleUserMenu(a)
                    }), e.YNc(1, Ai, 1, 0, "gu-notification-bubble", 1), e._UZ(2, "img", 2)(3, "i", 3)(4, "i", 4)(5, "i", 5)(6, "i", 6), e.TgZ(7, "gu-simple-text", 7), e._uU(8), e.qZA()()), 2 & t && (e.Q6J("ngClass", e.VKq(4, Fi, n.isUserMenuOpened)), e.xp6(1), e.Q6J("ngIf", n.showNotificationBubble), e.xp6(1), e.s9C("src", n.userAvatarUrl, e.LSH), e.xp6(6), e.hij(" LVL", n.userLevel, " "))
                },
                directives: [l.mk, l.O5],
                styles: ['@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{cursor:pointer;display:block;padding:0 16px 0 0}.user-area__container[_ngcontent-%COMP%]{position:relative;width:52px;height:52px;padding:4px}.user-area__container[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(#fffdf0 0%,#fbebc1 14%,#e6c675 25%,#f6df6e 40%,#b27e18 60%,#deab61 73%,#a67b4b 85%,#664320 100%);box-shadow:0 4px 8px #0a0a0a00;border-radius:50%;transition:transform .3s ease-in-out;z-index:2}.user-area__container--open[_ngcontent-%COMP%]   gu-notification-bubble[_ngcontent-%COMP%]{opacity:0}.user-area__container--open[_ngcontent-%COMP%]:before{transform:rotate(-180deg)}.user-area__image[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover;object-position:center;border-radius:50%;position:relative;z-index:2}.user-area__banner--left[_ngcontent-%COMP%], .user-area__banner--right[_ngcontent-%COMP%]{width:7px;height:18px;position:absolute;background:#1D2F41;z-index:1;bottom:1px}.user-area__banner--left[_ngcontent-%COMP%]{left:0;transform:translate(-90%)}.user-area__banner--right[_ngcontent-%COMP%]{right:0;transform:translate(90%)}.user-area__corner[_ngcontent-%COMP%]{position:absolute;top:50%;left:-3px;border:6px solid transparent;border-bottom-color:#3d5a74;z-index:1}.user-area__corner--right[_ngcontent-%COMP%]{left:auto;right:-3px}.user-area__user-level[_ngcontent-%COMP%]{position:absolute;width:58px;bottom:-2px;left:50%;transform:translate(-50%);z-index:3;padding:1px;background:#1D2F41;border:1px solid #3D5A74}']
            }), o
        })(), Di = (() => {
            class o {
                constructor() {
                    this.downloadLauncherUrl = "", this.signInClickEvent = new e.vpe, this.downloadClickEvent = new e.vpe
                }

                handleRegisterInClick() {
                    this.signInClickEvent.emit("signInClickEvent")
                }

                handleDownloadClick() {
                    this.downloadClickEvent.emit("downloadClickEvent")
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-call-to-actions"]],
                inputs: {downloadLauncherUrl: "downloadLauncherUrl"},
                outputs: {signInClickEvent: "signInClickEvent", downloadClickEvent: "downloadClickEvent"},
                decls: 5,
                vars: 1,
                consts: [[1, "cta"], ["kind", "tag", "data-test-id", "signinButton", 1, "cta__register-button", 3, "click"], ["size", "large", 1, "cta__download-button", 3, "href", "click"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "gu-simple-text", 1), e.NdJ("click", function () {
                        return n.handleRegisterInClick()
                    }), e._uU(2, " sign in "), e.qZA(), e.TgZ(3, "gu-primary-hex-button", 2), e.NdJ("click", function () {
                        return n.handleDownloadClick()
                    }), e._uU(4, " play now "), e.qZA()()), 2 & t && (e.xp6(3), e.Q6J("href", n.downloadLauncherUrl))
                },
                styles: ['[_nghost-%COMP%]{display:block;height:80px}.cta[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;padding:16px 12px 16px 0}.cta__register-button[_ngcontent-%COMP%]{cursor:pointer;height:100%;position:relative;display:flex;align-items:center;padding:0 12px}.cta__register-button[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:-12px;height:100%;width:1px;background:#1D2F41}.cta__download-button[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 1280px){.cta__download-button[_ngcontent-%COMP%]{display:flex;min-width:180px}.cta__register-button[_ngcontent-%COMP%]{margin-right:20px;padding:0 20px}.cta__register-button[_ngcontent-%COMP%]:after{right:0;left:auto}}']
            }), o
        })();

        function Gi(o, r) {
            1 & o && e._UZ(0, "gu-notification-bubble", 7)
        }

        function Bi(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 4), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw().handleMenuItemClick(i)
                }), e.TgZ(1, "gu-simple-text", 5), e._uU(2), e.qZA(), e.YNc(3, Gi, 1, 0, "gu-notification-bubble", 6), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw().$implicit;
                e.xp6(2), e.hij(" ", t.shortName, " "), e.xp6(1), e.Q6J("ngIf", t.showNotificationBubble)
            }
        }

        function Ui(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Bi, 4, 2, "div", 3), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.visible)
            }
        }

        const Li = function (o) {
            return {"user-menu": !0, "user-menu--open": o}
        }, Ei = ["*"];
        let Ni = (() => {
            class o {
                constructor(t) {
                    this.navbarService = t, this.userMenuItems = [], this.isUserMenuOpened = !1
                }

                get hasOpenClass() {
                    return this.isUserMenuOpened
                }

                ngOnChanges(t) {
                    if (!t.isUserMenuOpened || t.isUserMenuOpened.firstChange) return;
                    const {previousValue: n, currentValue: i} = t.isUserMenuOpened;
                    !0 === i && !1 === n && document.addEventListener("click", this.handleCloseUserMenu.bind(this), {once: !0})
                }

                handleCloseUserMenu() {
                    this.navbarService.closeAllMenus()
                }

                handleMenuItemClick(t) {
                    this.navbarService.handleUserMenuClick(t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(nt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar-user-menu"]],
                hostVars: 2,
                hostBindings: function (t, n) {
                    2 & t && e.ekj("open", n.hasOpenClass)
                },
                inputs: {userMenuItems: "userMenuItems", isUserMenuOpened: "isUserMenuOpened"},
                features: [e.TTD],
                ngContentSelectors: Ei,
                decls: 4,
                vars: 4,
                consts: [[3, "ngClass"], [1, "user-menu__user-info", "is-hidden-widescreen"], [4, "ngFor", "ngForOf"], ["data-test-id", "userMenuItem", "class", "user-menu__menu-item", 3, "click", 4, "ngIf"], ["data-test-id", "userMenuItem", 1, "user-menu__menu-item", 3, "click"], ["kind", "small", 1, "menu-item__short-name"], ["highPriority", "true", 4, "ngIf"], ["highPriority", "true"]],
                template: function (t, n) {
                    1 & t && (e.F$t(), e.TgZ(0, "div", 0)(1, "div", 1), e.Hsn(2), e.qZA(), e.YNc(3, Ui, 2, 1, "ng-container", 2), e.qZA()), 2 & t && (e.Q6J("ngClass", e.VKq(2, Li, n.isUserMenuOpened)), e.xp6(3), e.Q6J("ngForOf", n.userMenuItems))
                },
                directives: [l.mk, l.sg, l.O5],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.user-menu[_ngcontent-%COMP%]{position:absolute;top:80px;right:0;width:260px;background:#0F1B27;list-style:none;margin:0;transform:translate(101%);opacity:0;display:flex;flex-direction:column;border-right:1px solid #1D2F41;border-left:1px solid #1D2F41;transition:all .3s ease-in-out}.user-menu--open[_ngcontent-%COMP%]{transform:translate(0);opacity:1}.user-menu__user-info[_ngcontent-%COMP%], .user-menu__menu-item[_ngcontent-%COMP%]{cursor:pointer;padding:20px;border-bottom:1px solid #1D2F41;white-space:nowrap;display:flex;align-items:center;flex-wrap:wrap;position:relative}.user-menu__user-info[_ngcontent-%COMP%]:hover, .user-menu__menu-item[_ngcontent-%COMP%]:hover{background:#1D2F41}.menuItem__subMenu[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:-gridUnits(2);border-left:2px solid #7192B0}.menuItem__subMenu__item[_ngcontent-%COMP%]{margin-left:-gridUnits(2)}"]
            }), o
        })();

        function qi(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "div", 10)(2, "cerberus-navbar-user-info", 11), e.NdJ("userDetailsClickEvent", function () {
                    return e.CHM(t), e.oxw().onUserDetailsClick()
                }), e.qZA()(), e.TgZ(3, "div", 12)(4, "cerberus-navbar-user-avatar", 13), e.NdJ("userMenuTogglingEvent", function () {
                    return e.CHM(t), e.oxw().toggleUserMenu()
                }), e.qZA()(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("userStarsTotal", t.userStarsTotal)("userFluxTotal", t.userFluxTotal)("username", t.userProperties.username)("userRank", t.userProperties.rank)("userUniqueCardCount", t.userProperties.unique_card_count), e.xp6(2), e.Q6J("userAvatarUrl", t.userProperties.image_url)("userLevel", t.userProperties.level)("isUserMenuOpened", t.isUserMenuOpened)
            }
        }

        function Qi(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 12)(1, "cerberus-navbar-call-to-actions", 14), e.NdJ("signInClickEvent", function () {
                    return e.CHM(t), e.oxw().onSignIn()
                })("downloadClickEvent", function () {
                    return e.CHM(t), e.oxw().onDownloadLauncherUrl()
                }), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("downloadLauncherUrl", t.downloadLauncherUrl)
            }
        }

        function Ri(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "cerberus-navbar-user-menu", 15)(2, "cerberus-navbar-user-info", 16), e.NdJ("userDetailsClickEvent", function () {
                    return e.CHM(t), e.oxw().onUserDetailsClick()
                }), e.qZA()(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("userMenuItems", t.userMenuItems)("isUserMenuOpened", t.isUserMenuOpened), e.xp6(1), e.Q6J("userStarsTotal", t.userStarsTotal)("userFluxTotal", t.userFluxTotal)("username", t.userProperties.username)("userRank", t.userProperties.rank)("userUniqueCardCount", t.userProperties.unique_card_count)
            }
        }

        const Hi = function (o) {
            return {open: o}
        };
        let Yi = (() => {
            class o {
                constructor(t) {
                    this.navbarService = t, this.mainMenuItemCollection = {}, this.userMenuItemCollection = {}, this.downloadLauncherUrl = "", this.currentUrl = "", this.signInEvent = new e.vpe, this.downloadLauncherUrlEvent = new e.vpe, this.userDetailsEvent = new e.vpe, this.logoutEvent = new e.vpe, this.mainMenuItems = [], this.userMenuItems = [], this.activeMenu = "", this.activeSubMenu = null, this.expandedMenu = null, this.isUserMenuOpened = !1, this.isSideMenuOpened = !1, this.destroy$ = new M.xQ
                }

                ngOnInit() {
                    this.convertMenusObjectToArray(), this.subscribeToStateChange(), this.subscribeToLogoutEvent()
                }

                ngOnChanges(t) {
                    if (t.currentUrl) {
                        const n = t.currentUrl.currentValue, {
                            activeMenu: i,
                            subActiveMenu: a
                        } = this.getActiveMenus(this.mainMenuItems, n);
                        this.navbarService.setActiveMenu(i), this.navbarService.setActiveSubMenu(a)
                    }
                    (t.mainMenuItemCollection || t.userMenuItemCollection) && this.convertMenusObjectToArray()
                }

                ngOnDestroy() {
                    this.destroy$.next(), this.destroy$.complete()
                }

                convertMenusObjectToArray() {
                    this.mainMenuItems = this.convertMenuItemCollectionToArray(this.mainMenuItemCollection), this.userMenuItems = this.convertMenuItemCollectionToArray(this.userMenuItemCollection)
                }

                getActiveMenus(t, n) {
                    if ("/" === n || "/game/gu/game-modes" === n) return {activeMenu: "home", subActiveMenu: null};
                    let i = "", a = null;
                    return t.forEach(s => {
                        s.children ? s.children.forEach(c => {
                            !c.path || n.includes(c.path) && (i = s.name, a = c.name)
                        }) : s.path && n.includes(s.path) && (i = s.name, a = null)
                    }), {activeMenu: i, subActiveMenu: a}
                }

                subscribeToStateChange() {
                    this.navbarService.state$.pipe((0, p.R)(this.destroy$)).subscribe(({
                                                                                           isSideMenuOpened: t,
                                                                                           activeMenu: n,
                                                                                           activeSubMenu: i,
                                                                                           expandedMenu: a,
                                                                                           isUserMenuOpened: s
                                                                                       }) => {
                        this.isSideMenuOpened = t, this.activeMenu = n, this.activeSubMenu = i, this.expandedMenu = a, this.isUserMenuOpened = s
                    })
                }

                subscribeToLogoutEvent() {
                    this.navbarService.logoutObserver$.pipe((0, p.R)(this.destroy$)).subscribe(() => {
                        this.logoutEvent.emit("logoutEvent")
                    })
                }

                convertMenuItemCollectionToArray(t) {
                    return Object.keys(t).map(n => t[n].children ? Object.assign(Object.assign({name: n}, t[n]), {children: this.convertMenuItemCollectionToArray(t[n].children)}) : Object.assign({name: n}, t[n]))
                }

                handleLogoClick() {
                    const t = this.mainMenuItems.find(n => "home" === n.name);
                    this.navbarService.handleMainMenuClick(t)
                }

                toggleUserMenu() {
                    this.navbarService.toggleUserMenu()
                }

                handleMenuToggleClick() {
                    this.navbarService.toggleSideMenu()
                }

                onSignIn() {
                    this.signInEvent.emit("signInEvent")
                }

                onDownloadLauncherUrl() {
                    this.downloadLauncherUrlEvent.emit("downloadLauncherUrlEvent")
                }

                onUserDetailsClick() {
                    this.userDetailsEvent.emit("userDetailsEvent")
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(nt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-navbar"]],
                inputs: {
                    mainMenuItemCollection: "mainMenuItemCollection",
                    userMenuItemCollection: "userMenuItemCollection",
                    userProperties: "userProperties",
                    userStarsTotal: "userStarsTotal",
                    userFluxTotal: "userFluxTotal",
                    downloadLauncherUrl: "downloadLauncherUrl",
                    currentUrl: "currentUrl"
                },
                outputs: {
                    signInEvent: "signInEvent",
                    downloadLauncherUrlEvent: "downloadLauncherUrlEvent",
                    userDetailsEvent: "userDetailsEvent",
                    logoutEvent: "logoutEvent"
                },
                features: [e.TTD],
                decls: 11,
                vars: 11,
                consts: [[1, "mb-0", "navbar-container", "columns", "is-mobile", "is-vcentered", "is-gapless"], [1, "column", "is-hidden-desktop", "is-narrow-mobile"], [3, "isSideMenuOpened", "click"], [1, "column", "is-narrow-tablet", "is-centered"], [3, "click"], [1, "column", "is-0-mobile"], [3, "ngClass", "menuItems", "activeSubMenu", "activeMenu", "expandedMenu"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngIf"], [1, "column", "is-narrow-widescreen", "is-hidden-touch", "is-hidden-desktop-only", "is-justify-content-flex-end"], [3, "userStarsTotal", "userFluxTotal", "username", "userRank", "userUniqueCardCount", "userDetailsClickEvent"], [1, "column", "is-narrow", "is-justify-content-flex-end"], ["data-test-id", "navbarUserAvator", 3, "userAvatarUrl", "userLevel", "isUserMenuOpened", "userMenuTogglingEvent"], [3, "downloadLauncherUrl", "signInClickEvent", "downloadClickEvent"], [3, "userMenuItems", "isUserMenuOpened"], ["data-test-id", "navbarUserMenu", 3, "userStarsTotal", "userFluxTotal", "username", "userRank", "userUniqueCardCount", "userDetailsClickEvent"]],
                template: function (t, n) {
                    if (1 & t && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "cerberus-navbar-hamburger-menu-icon", 2), e.NdJ("click", function () {
                        return n.handleMenuToggleClick()
                    }), e.qZA()(), e.TgZ(3, "div", 3)(4, "cerberus-navbar-logo", 4), e.NdJ("click", function () {
                        return n.handleLogoClick()
                    }), e.qZA()(), e.TgZ(5, "div", 5), e._UZ(6, "cerberus-navbar-main-menu", 6), e.qZA(), e.YNc(7, qi, 5, 8, "ng-container", 7), e.YNc(8, Qi, 2, 1, "ng-template", null, 8, e.W1O), e.qZA(), e.YNc(10, Ri, 3, 7, "ng-container", 9)), 2 & t) {
                        const i = e.MAs(9);
                        e.xp6(2), e.Q6J("isSideMenuOpened", n.isSideMenuOpened), e.xp6(4), e.Q6J("ngClass", e.VKq(9, Hi, n.isSideMenuOpened))("menuItems", n.mainMenuItems)("activeSubMenu", n.activeSubMenu)("activeMenu", n.activeMenu)("expandedMenu", n.expandedMenu), e.xp6(1), e.Q6J("ngIf", n.userProperties)("ngIfElse", i), e.xp6(3), e.Q6J("ngIf", n.userProperties)
                    }
                },
                directives: [ci, li, Ti, l.mk, l.O5, Ii, Zi, Di, Ni],
                styles: ["[_nghost-%COMP%]{width:100%}.navbar-container[_ngcontent-%COMP%]{height:80px;border-bottom:1px solid #0F1B27}"]
            }), o
        })();
        var Me = g(31459);
        const Ji = ["headerBar"], $i = ["*"];
        let Wi = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k, A, D, L, E) {
                    this.router = t, this.ngZone = n, this.userService = i, this.navigationStateService = a, this.queueService = s, this.modalService = c, this.authService = d, this.navigation = u, this.cerberusModalService = x, this.packService = v, this.environment = k, this.akumaService = A, this.starService = D, this.fluxService = L, this.featureFlagsService = E, this.unsubscribe = new M.xQ, this.currentUrl = "", this.navigationItems = {}, this.userMenuItems = {}, d.fetchAccount(), this.initMenuItems(), this.initUserProperties(), this.initRouteChanges(), this.initUnopenedPacks(), this.subscribeToRouteChange()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initMenuItems() {
                    (0, Z.aj)([this.navigationStateService.navigationItems$, this.navigationStateService.userMenuItems$, this.featureFlagsService.getMany([_.vU.forgeEnabled, _.vU.playToEarnEnabled])]).pipe((0, p.R)(this.unsubscribe), (0, S.h)(([t, n, i]) => !!t && !!n)).subscribe(([t, n, i]) => {
                        this.enabledFeatures = i, this.navigationItems = t, this.userMenuItems = n
                    }), this.navigationStateService.storeNavigationItems(Object.assign({}, Re.gv.routeContent(this.environment))), this.navigationStateService.storeUserMenuItems(Object.assign({}, Re.gv.userMenuItemsContent(this.environment)))
                }

                initUnopenedPacks() {
                    this.packService.fetchUnopenedPacks(), this.packService.unopenedPacks$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => this.navigationStateService.toggleNotifyOpenPacks(!!t.length))
                }

                initRouteChanges() {
                    this.navigation.currentRoute$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        const n = Object.keys(G).filter(i => G[i] == t)[0];
                        this.akumaService.postControlEvent("gu", "Arena", "", n, "Mnu", "pressed")
                    })
                }

                initUserProperties() {
                    this.userService.fetchExtendedAccount(), this.fluxService.fetchFluxInfo(), this.starService.fetchUserStarsTotal(), (0, Z.aj)([this.userService.extendedAccountProperties$, this.fluxService.fluxInfo$, this.starService.userStarTotal$]).pipe((0, p.R)(this.unsubscribe)).subscribe(([t, n, i]) => {
                        this.accountProperties = t, this.userStarsTotal = i, this.userFluxTotal = null == n ? void 0 : n.flux_available
                    })
                }

                subscribeToRouteChange() {
                    this.router.events.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => t instanceof pe.m2)).subscribe(() => {
                        this.currentUrl = this.router.url
                    })
                }

                onConnectWallet(t) {
                    (0, oi.rb)({url: Re.gv.userMenuItemsContent(this.environment).connectWallet.url})
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
                return new (t || o)(e.Y36(pe.F0), e.Y36(e.R0b), e.Y36(ce.MZ), e.Y36(ii.f), e.Y36(bt.g), e.Y36(I.Z), e.Y36(f.mI), e.Y36(ri.f), e.Y36(U.Qz), e.Y36(Oe.F), e.Y36(f.Ho), e.Y36(_.jt), e.Y36(_.cM), e.Y36(_.TJ), e.Y36(f.B3))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-desktop-header-provider"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(Ji, 7), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.headerBar = i.first)
                    }
                },
                ngContentSelectors: $i,
                decls: 6,
                vars: 19,
                consts: [[1, "header-container__navbar", 3, "currentUrl", "mainMenuItemCollection", "userMenuItemCollection", "userProperties", "userStarsTotal", "userFluxTotal", "downloadLauncherUrl", "logoutEvent", "userDetailsEvent"]],
                template: function (t, n) {
                    1 & t && (e.F$t(), e.TgZ(0, "cerberus-navbar", 0), e.NdJ("logoutEvent", function (a) {
                        return n.onLogout(a)
                    })("userDetailsEvent", function (a) {
                        return n.onUserDetailsClick(a)
                    }), e.ALo(1, "filterNavItemsByFeatureFlags"), e.ALo(2, "filterNavItemsByFeatureFlags"), e.ALo(3, "numberAbbreviation"), e.ALo(4, "numberAbbreviation"), e.qZA(), e.Hsn(5)), 2 & t && e.Q6J("currentUrl", n.currentUrl)("mainMenuItemCollection", e.xi3(1, 7, n.navigationItems, n.enabledFeatures))("userMenuItemCollection", e.xi3(2, 10, n.userMenuItems, n.enabledFeatures))("userProperties", n.accountProperties)("userStarsTotal", e.xi3(3, 13, n.userStarsTotal, 2))("userFluxTotal", e.xi3(4, 16, n.userFluxTotal, 2))("downloadLauncherUrl", n.launcherUrl)
                },
                directives: [Yi],
                pipes: [Me.h4, Me.XX],
                styles: ["[_nghost-%COMP%]{box-shadow: 0 3px 3px rgb(0 0 0 / 30%), 0 3px 3px rgb(0 0 0 / 30%);background:var(--gu-blue-dark);display:block;position:relative;z-index:22}gu-header-bar[_ngcontent-%COMP%]{background:transparent;position:absolute;top:0;left:0;width:100%}"]
            }), o
        })();
        var ot = g(39765), zi = g(25774), ji = g(97993);
        let Vi = (() => {
            class o {
                constructor(t, n, i) {
                    this.vc = t, this.el = n, this.componentService = i, this.componentService.registerContainer(n.nativeElement.nodeName, this.vc, this.el)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(e.s_b), e.Y36(e.SBq), e.Y36(ze))
            }, o.\u0275dir = e.lG2({type: o, selectors: [["", "evalInstantly", ""]]}), o
        })();

        function Xi(o, r) {
            1 & o && (e.TgZ(0, "cerberus-announce-banner-control", 3), e._UZ(1, "gu-outage-banner"), e.qZA()), 2 & o && e.Q6J("closable", !1)
        }

        function Ki(o, r) {
            1 & o && (e.TgZ(0, "cerberus-announce-banner-control", 4), e._UZ(1, "gu-ranked-weekend-cancelled-banner"), e.qZA())
        }

        function er(o, r) {
            1 & o && (e.TgZ(0, "cerberus-announce-banner-control", 4), e._UZ(1, "cerberus-controllable-banner"), e.qZA())
        }

        function tr(o, r) {
            1 & o && (e.TgZ(0, "div", 8)(1, "div", 9)(2, "gu-paragraph-text", 10), e._uU(3, " PTR REALM - DOES NOT REPRESENT THE FINAL PRODUCT "), e.qZA()()())
        }

        function nr(o, r) {
            if (1 & o && (e.TgZ(0, "main"), e.YNc(1, tr, 4, 0, "div", 5), e._UZ(2, "router-outlet", null, 6), e.GkF(4, 7), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", "ptr" === t.branch)
            }
        }

        let or = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k, A, D, L, E, de, ne, q, eu, tu, nu) {
                    this.gameService = n, this.authService = u, this.ngRxStore = E, this.modalService = de, this.audioService = ne, this.vcr = q, this.playService = eu, this.loggerService = tu, this.cerberusModalService = nu, this.inGame = !1, this.branch = "beta", this.Flags = _.vU, this.unsubscribe = new M.xQ, this.inTutorial = !1, this.checkClearLogs(), this.watchForInGame(), this.audioService.loginToLauncher.play(), n.checkInstallationPath(1), this.branch = n.getProperty(1, "branch"), u.account$.pipe((0, S.h)(Le => !!Le), (0, p.R)(this.unsubscribe)).subscribe(Le => {
                        c.fetchAccountThresholdsByUserId(Le.id)
                    }), c.fetchGameRanks(), t.fetchGameModes(), i.fetchProtoCards(), i.fetchInventory(), i.fetchQualityCount(), i.loadInventoryCards().pipe((0, p.R)(this.unsubscribe)).subscribe(), a.fetchStarterDecks(), a.fetchDecks(), L.fetchSealed(), n.setGuGameContext(), s.fetchExtendedAccount(), u.fetchAccount(), A.fetchFusingLevels(), D.fetchData(), n.fetchBranchesExtended(1), x.fetchFluxInfo(), v.fetchGauntletSlots(), k.loadSelectedWallet(), d.onContainerCreated("#comment", (Le, ou) => this.modalService.setModalVCRs(Le, this.vcr)), d.onContainerDestroyed("#comment", (Le, ou) => this.modalService.setModalVCRs(null, null))
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
                    this.playService.playing$.pipe((0, p.R)(this.unsubscribe), (0, pt.x)()).subscribe(t => {
                        switch (t.status) {
                            case z.OC.IN:
                                this.inGame = !0, t.gameModeId === P.B_.TUTORIAL && (this.inTutorial = !0);
                                break;
                            case z.OC.PROGRESSION_ACCOUNT:
                                t.gameModeId === P.B_.TUTORIAL && this.inTutorial ? (this.showTutorialEndModal(), this.inTutorial = !1) : this.modalService.createModal(Vo, {gameModeId: t.gameModeId}, {
                                    canCloseFromOutside: !1,
                                    position: h.e1.Center,
                                    size: h.Cg.Fullscreen
                                });
                                break;
                            case z.OC.OUT:
                                t.gameModeId === P.B_.TUTORIAL && this.inTutorial && this.showTutorialEndModal(), this.inGame = !1, this.inTutorial = !1
                        }
                    })
                }

                showTutorialEndModal() {
                    const t = this.authService.getUserId();
                    this.gameService.getUserTutorialMissions(t).pipe((0, w.q)(1)).subscribe(n => {
                        n[0].completed ? this.playService.setPlaying(z.OC.OUT, P.B_.TUTORIAL) : this.cerberusModalService.open(Ko).result.then(s => {
                        }, s => {
                        })
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ee.xV), e.Y36(tt.hM), e.Y36(_.dK), e.Y36(te.D), e.Y36(ce.MZ), e.Y36(j.$z), e.Y36(ze), e.Y36(f.mI), e.Y36(_.TJ), e.Y36(Fe), e.Y36(Pe.d), e.Y36(xe), e.Y36(we), e.Y36(X.H), e.Y36(sn.yh), e.Y36(I.Z), e.Y36(f.pk), e.Y36(e.s_b), e.Y36(z.GT), e.Y36(ni.m), e.Y36(U.Qz))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-gu"]],
                features: [e._Bn([ze])],
                decls: 5,
                vars: 4,
                consts: [["class", "announceBannerControl", 3, "closable", 4, "featureFlagIf"], ["class", "announceBannerControl", 4, "featureFlagIf"], [4, "ngIf"], [1, "announceBannerControl", 3, "closable"], [1, "announceBannerControl"], ["class", "ptrWatermark", 4, "ngIf"], ["o", "outlet"], ["evalInstantly", ""], [1, "ptrWatermark"], [1, "ptrWatermark__textWrapper"], ["kind", "x-large", "fillColor", "colors.light.100", 1, "ptrWatermark__textWrapper__text"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "cerberus-desktop-header-provider"), e.YNc(1, Xi, 2, 1, "cerberus-announce-banner-control", 0), e.YNc(2, Ki, 2, 0, "cerberus-announce-banner-control", 1), e.YNc(3, er, 2, 0, "cerberus-announce-banner-control", 1), e.qZA(), e.YNc(4, nr, 5, 1, "main", 2)), 2 & t && (e.xp6(1), e.Q6J("featureFlagIf", n.Flags.outageBannerEnabled), e.xp6(1), e.Q6J("featureFlagIf", n.Flags.rankedWeekendCancelledBannerEnabled), e.xp6(1), e.Q6J("featureFlagIf", n.Flags.showControllableBanner), e.xp6(1), e.Q6J("ngIf", !n.inGame))
                },
                directives: [Wi, ot.w, zi.O, ji.i, l.O5, pe.lC, Vi],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}[_nghost-%COMP%]     router-outlet~*{position:absolute;width:100%;height:100%}main[_ngcontent-%COMP%]{position:relative;flex:1}.ptrWatermark[_ngcontent-%COMP%]{position:absolute;left:calc(-50vh + 15px);display:flex;top:50vh;user-select:none;pointer-events:none}.ptrWatermark__textWrapper[_ngcontent-%COMP%]{transform:rotate(-90deg);width:100vh;height:30px;margin:auto;justify-content:center;display:flex}.ptrWatermark__textWrapper__text[_ngcontent-%COMP%]{opacity:.5}"],
                data: {animation: [lo]}
            }), o
        })();
        var dn = g(51649), le = g(46208);

        function ir(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 10), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().copyClick()
                }), e._uU(1, " Copy "), e.qZA()
            }
        }

        function rr(o, r) {
            1 & o && (e.TgZ(0, "gu-plain-square-button", 11), e._uU(1, " Copied! "), e.qZA())
        }

        let ar = (() => {
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
                return new (t || o)(e.Y36(U.mX), e.Y36(_.tX))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-deck-codes-export-modal"]],
                inputs: {deckCode: "deckCode"},
                decls: 18,
                vars: 3,
                consts: [["goldBorder", "top"], ["top", "4x-large"], ["align", "center", "kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100"], ["both", "large", 1, "copySection"], ["align", "center", "kind", "small", "fillColor", "colors.light.300", 1, "copySection__code"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "class", "copySection__cta", "leftIconPosition", "true", "icon", "action_duplicate", 3, "click", 4, "ngIf"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "class", "copySection__cta copySection__cta--copied", "leftIconPosition", "true", "icon", "checkbox_tick", 4, "ngIf"], ["align", "center", "kind", "medium", "fillColor", "colors.light.100", 1, "text"], ["top", "2x-large", "bottom", "4x-large"], ["size", "large", "type", "primary", 1, "cta", 3, "click"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_duplicate", 1, "copySection__cta", 3, "click"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "checkbox_tick", 1, "copySection__cta", "copySection__cta--copied"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "gu-modal-background", 0), e.TgZ(1, "gu-vertical-space", 1)(2, "gu-paragraph-text", 2), e._uU(3, " Copy your deck and share with your friends "), e.qZA()(), e.TgZ(4, "gu-vertical-space", 3)(5, "gu-paragraph-text", 4), e._uU(6), e.qZA(), e.YNc(7, ir, 2, 0, "gu-plain-square-button", 5), e.YNc(8, rr, 2, 0, "gu-plain-square-button", 6), e.qZA(), e.TgZ(9, "gu-vertical-space")(10, "gu-paragraph-text", 7), e._uU(11, " Players who you send this to can use the "), e.TgZ(12, "strong"), e._uU(13, "IMPORT DECK"), e.qZA(), e._uU(14, " feature when they create a new deck. "), e.qZA()(), e.TgZ(15, "gu-vertical-space", 8)(16, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                        return n.ctaClick()
                    }), e._uU(17, " GO BACK "), e.qZA()()), 2 & t && (e.xp6(6), e.hij(" ", n.deckCode, " "), e.xp6(1), e.Q6J("ngIf", !n.copied), e.xp6(1), e.Q6J("ngIf", n.copied))
                },
                directives: [l.O5],
                styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:640px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.heading[_ngcontent-%COMP%]{text-transform:uppercase}.copySection[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center}.copySection__code[_ngcontent-%COMP%]{max-width:320px;border:#527493 solid 1px;background:#1D2F41;padding:9px 16px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-right:8px}.copySection__cta[_ngcontent-%COMP%]{min-width:120px}.copySection__cta--copied[_ngcontent-%COMP%]{cursor:default}"]
            }), o
        })();
        const sr = ["*"];
        let ye = (() => {
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
                return new (t || o)(e.Y36(f.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-modal-sidebar"]],
                inputs: {closeButtonClickFn: "closeButtonClickFn"},
                ngContentSelectors: sr,
                decls: 2,
                vars: 0,
                consts: [["iconLigature", "chevron_left", 1, "closeButton", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.F$t(), e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.closeButtonClick()
                    }), e.qZA(), e.Hsn(1))
                },
                styles: ["[_nghost-%COMP%]{z-index:23;padding-top:calc(var(--vh) * 4.5);display:flex;flex-flow:column nowrap;align-items:center;width:calc(var(--vh) * 7.7);position:absolute;top:0;left:0;height:100%}.closeButton[_ngcontent-%COMP%]{width:calc(var(--vh) * 3);height:calc(var(--vh) * 3);font-size:calc(var(--vh) * 1.7);border-radius:50%;display:flex;line-height:1;border:2px solid var(--gu-blue);color:var(--gu-blue);cursor:pointer}.closeButton[_ngcontent-%COMP%]:hover{border-color:var(--gu-yellow);color:var(--gu-yellow)}.closeButton[_ngcontent-%COMP%]     i{margin:auto;line-height:1}"]
            }), o
        })(), it = (() => {
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
                    1 & t && e._UZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{width:calc(var(--vw) * 4);height:calc(var(--vh) * 5);display:flex;justify-content:center}div[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#affaed 0%,#8be1e0 50%,#54bbcd 100%);width:calc(var(--vw) * .2);margin-right:calc(var(--vw) * .2);animation:stretchDelay 1.2s infinite ease-in-out}div[_ngcontent-%COMP%]:last-child{margin:0}.rect2[_ngcontent-%COMP%]{animation-delay:-1.1s}.rect3[_ngcontent-%COMP%]{animation-delay:-1s}.rect4[_ngcontent-%COMP%]{animation-delay:-.9s}.rect5[_ngcontent-%COMP%]{animation-delay:-.8s}@keyframes stretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(.6)}}"]
            }), o
        })();
        var Y = g(57674);

        class me {
            constructor(r, t, n) {
                this.name = r, this.rules = t, this.groupingType = n
            }
        }

        class fe {
            constructor(r, t, n, i = [], a) {
                this.property = r, this.groups = t, this.includedInGroup = n, this.excludedTypes = i, this.noMatchingGroup = a
            }
        }

        var F = (() => {
            return (o = F || (F = {}))[o.Packge = 0] = "Packge", o[o.Mana = 1] = "Mana", o[o.Keyword = 2] = "Keyword", o[o.Health = 3] = "Health", o[o.Attack = 4] = "Attack", o[o.Tribe = 5] = "Tribe", o[o.Card = 6] = "Card", o[o.Type = 7] = "Type", o[o.God = 8] = "God", o[o.Rarity = 9] = "Rarity", o[o.Set = 10] = "Set", o[o.Quality = 11] = "Quality", F;
            var o
        })();

        class gn {
            constructor(r, t, n = null, i = []) {
                this.header = r, this.currentGrouping = t, this.image = n, this.cards = i
            }
        }

        class un {
            constructor(r, t, n = null, i = []) {
                this.header = "weapon" === r ? "relic" : r, this.currentGrouping = t, this.image = n, this.cards = i
            }
        }

        class pn {
            constructor(r, t, n, i = null, a = []) {
                this.header = "weapon" === r ? "relic" : r, this.currentGrouping = t, this.quality = n, this.image = i, this.cards = a
            }
        }

        let J = (() => {
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
                    this.protoSubscription = this.cardsService.getProtoCard(this.protoId).pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.cardProtoData = Object.assign(Object.assign({}, t), {id: this.protoId})
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.dK), e.Y36(e.SBq), e.Y36(f.pk))
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
                consts: [["data-test-id", "composited-card", 3, "inputProtoData", "quality", "responsiveSrcsetSizes", "mouseenter"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "composited-card", 0), e.NdJ("mouseenter", function () {
                        // noop thanks
                    }), e.qZA()), 2 & t && e.Q6J("inputProtoData", n.cardProtoData)("quality", n.quality)("responsiveSrcsetSizes", n.responsiveSrcsetSizes)
                },
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}[_nghost-%COMP%]{display:block;position:relative}"]
            }), o
        })();
        var Ze = g(17268);
        const xt = function (o) {
            return {selected: o}
        };

        function cr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "button", 7), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(3).clickGroupingHeader(i.value.header)
                }), e.TgZ(1, "span", 8), e._uU(2), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(3);
                e.Q6J("ngClass", e.VKq(2, xt, -1 !== n.selectedHeaders.indexOf(t.value.header))), e.xp6(2), e.Oqu(n.shortenHeaderText(t.value.header))
            }
        }

        function lr(o, r) {
            if (1 & o && (e.TgZ(0, "app-tooltip", 5), e.YNc(1, cr, 3, 4, "button", 6), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.MGl("title", "Filter by ", t.value.header, ""), e.xp6(1), e.Q6J("ngIf", t.value.header)
            }
        }

        function dr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, lr, 2, 2, "app-tooltip", 2), e.ALo(2, "keyvalue"), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.Q6J("ngForOf", e.xi3(2, 1, t.cardGrouping, t.subGroupingOrder))
            }
        }

        function gr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "button", 7), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(3).clickGroupingHeader(i)
                }), e.TgZ(1, "span", 8), e._uU(2), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(3);
                e.Q6J("ngClass", e.VKq(2, xt, -1 !== n.selectedHeaders.indexOf(t))), e.xp6(2), e.Oqu(n.shortenHeaderText(t))
            }
        }

        function ur(o, r) {
            if (1 & o && (e.TgZ(0, "app-tooltip", 5), e.YNc(1, gr, 3, 4, "button", 6), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.MGl("title", "Filter by ", t, ""), e.xp6(1), e.Q6J("ngIf", t)
            }
        }

        function pr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ur, 2, 2, "app-tooltip", 2), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.Q6J("ngForOf", t.filterHeaders)
            }
        }

        function _r(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div", 4), e._uU(2, "Filter by:"), e.qZA(), e.YNc(3, dr, 3, 4, "ng-container", 0), e.YNc(4, pr, 2, 1, "ng-container", 0), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.Q6J("ngIf", t.cardGrouping), e.xp6(1), e.Q6J("ngIf", t.filterHeaders)
            }
        }

        function hr(o, r) {
            1 & o && (e.TgZ(0, "div", 9), e._uU(1, " Sort by: "), e.qZA())
        }

        function mr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-tooltip", 5)(1, "button", 7), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().clickSortOption(a)
                }), e._UZ(2, "gu-icon", 10), e.qZA()()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.MGl("title", "Sort by ", t.name, ""), e.xp6(1), e.Q6J("ngClass", e.VKq(3, xt, n.activeSortOption === t)), e.xp6(1), e.Q6J("iconLigature", t.ligature)
            }
        }

        function fr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "form", 11), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().selectCheckbox()
                }), e._UZ(1, "input", 12)(2, "label", 13), e.TgZ(3, "label", 14), e._uU(4, "Items in escrow"), e.qZA(), e._UZ(5, "input", 15)(6, "label", 16), e.TgZ(7, "label", 17), e._uU(8, "Show Owned"), e.qZA(), e._UZ(9, "input", 18)(10, "label", 19), e.TgZ(11, "label", 20), e._uU(12, "Show All"), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("formGroup", t.ownershipForm)
            }
        }

        class B {
            constructor(r, t, n, i) {
                this.name = r, this.ligature = t, this.sortAsc = n, this.sortDesc = i
            }
        }

        let wt = (() => {
            class o {
                constructor(t, n) {
                    this.fb = t, this.audio = n, this.sortOptions = [], this.showFilters = !0, this.unownedCheckboxVisible = !1, this.noSortByLabel = !1, this.showUnowned = !0, this.selectedHeaders = [], this.groupingHeaderChange = new e.vpe, this.sortChange = new e.vpe, this.unownedChange = new e.vpe, this.searchChange = new e.vpe, this.ownershipChange = new e.vpe, this.activeSortOption = this.sortOptions[0], this.activeSortAsc = !1, this.marked = !1, this.unsubscribe = new M.xQ, this.subGroupingOrder = (i, a) => {
                        const c = a.value.currentGrouping.rules,
                            u = i.value.currentGrouping.rules.groups.map(k => k.toString()).indexOf(i.key),
                            v = c.groups.map(k => k.toString()).indexOf(a.key);
                        return -1 === u ? 1 : -1 === v ? -1 : u - v
                    }
                }

                ngOnInit() {
                    this.initFormGroup()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngOnChanges(t) {
                    let initialOwnership = localStorage.getItem('collectionOwnership') || 'all';
                    t.unownedCheckboxVisible && !t.unownedCheckboxVisible.firstChange && this.ownershipForm.setValue({ownership: initialOwnership})
                }

                shortenHeaderText(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }

                clickGroupingHeader(t) {
                    this.audio.clickTinyV1.play(), -1 === this.selectedHeaders.indexOf(t) ? this.selectedHeaders.push(t) : this.selectedHeaders = this.selectedHeaders.filter(n => n !== t), this.groupingHeaderChange.emit(this.selectedHeaders)
                }

                clickSortOption(t) {
                    this.audio.clickTinyV1.play(), t === this.activeSortOption ? this.activeSortAsc = !this.activeSortAsc : (this.activeSortOption = t, this.activeSortAsc = !0), this.sortChange.emit(this.activeSortAsc ? this.activeSortOption.sortAsc : this.activeSortOption.sortDesc)
                }

                initFormGroup() {
                    let initialOwnership = localStorage.getItem('collectionOwnership') || 'all';
                    this.ownershipForm = this.fb.group({ownership: [initialOwnership]});
                    this.ownershipForm.get("ownership").valueChanges.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
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
                return new (t || o)(e.Y36(T.qu), e.Y36(f.pk))
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
                consts: [[4, "ngIf"], ["class", "filterLabel filterLabel--leftSpacing", 4, "ngIf"], ["class", "filterButtonAndTooltip", 3, "title", 4, "ngFor", "ngForOf"], ["class", "unownedCheckbox", 3, "formGroup", "click", 4, "ngIf"], [1, "filterLabel"], [1, "filterButtonAndTooltip", 3, "title"], ["class", "filterButton", 3, "ngClass", "click", 4, "ngIf"], [1, "filterButton", 3, "ngClass", "click"], [1, "filterButton__text"], [1, "filterLabel", "filterLabel--leftSpacing"], [1, "filterButton__icon", 3, "iconLigature"], [1, "unownedCheckbox", 3, "formGroup", "click"], ["value", "escrow", "name", "ownership", "formControlName", "ownership", "type", "radio", "id", "escrowCheckbox", 1, "form-check-input"], ["for", "escrowCheckbox", 1, "checker", "checker--radio"], ["for", "escrowCheckbox", 1, "form-check-label", "unownedCheckbox__text"], ["value", "owned", "name", "ownership", "formControlName", "ownership", "type", "radio", "id", "ownedCheckbox", "data-test-id", "ownedCheckbox", 1, "form-check-input"], ["for", "ownedCheckbox", 1, "checker", "checker--radio"], ["for", "ownedCheckbox", 1, "form-check-label", "unownedCheckbox__text"], ["value", "all", "name", "ownership", "formControlName", "ownership", "type", "radio", "id", "allCheckbox", 1, "form-check-input"], ["for", "allCheckbox", 1, "checker", "checker--radio"], ["for", "allCheckbox", 1, "form-check-label", "unownedCheckbox__text"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, _r, 5, 2, "ng-container", 0), e.YNc(1, hr, 2, 0, "div", 1), e.YNc(2, mr, 3, 5, "app-tooltip", 2), e.YNc(3, fr, 13, 1, "form", 3)), 2 & t && (e.Q6J("ngIf", n.showFilters), e.xp6(1), e.Q6J("ngIf", !n.noSortByLabel), e.xp6(1), e.Q6J("ngForOf", n.sortOptions), e.xp6(1), e.Q6J("ngIf", n.unownedCheckboxVisible))
                },
                directives: [l.O5, l.sg, Ze.K, l.mk, T._Y, T.JL, T.sg, T.Fj, T._, T.JJ, T.u],
                pipes: [l.Nd],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.filterLabel[_ngcontent-%COMP%], .filterButton__text[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif}.filterButton__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.filterLabel[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.11)}[_nghost-%COMP%]{display:flex;flex-wrap:wrap;width:100%;}.filterLabel[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * .7);color:#7192b0;align-self:center}.filterLabel--leftSpacing[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1)}.filterButtonAndTooltip[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * .5)}.filterButtonAndTooltip[_ngcontent-%COMP%]:last-of-type {margin-right:0}.filterButton[_ngcontent-%COMP%]{min-width:calc(var(--vw) * 1.45);height:calc(var(--vw) * 1.45);margin-right:calc(var(--vw) * .2);border-radius:calc(var(--vh) * .4);display:flex;padding:0;cursor:pointer;border:calc(var(--vh) * .15) solid #182531;background:#0c1620;color:#7192b0;outline:none}.filterButton.selected[_ngcontent-%COMP%]{background:#3d5a74;border-color:#7192b0;color:#f6f6f6}.filterButton[_ngcontent-%COMP%]:hover {color:#f6f6f6;background:#3d5a74;border-color:#3d5a74}.filterButton__text[_ngcontent-%COMP%]{line-height:1;margin:auto;padding:0 4px}.filterButton__icon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * .9);margin:auto;line-height:1;display:flex}.unownedCheckbox[_ngcontent-%COMP%]{display:flex;margin-left:auto;margin-top:4px;align-items:center}.form-check-label[_ngcontent-%COMP%]{color:var(--gu-gray)}"]
            }), o
        })();
        g(1025);
        let ke = (() => {
            class o {
                constructor(t, n) {
                    this.cardsService = t, this.featureFlagsService = n, this.gods = ["death", "deception", "light", "magic", "nature", "war", "neutral"], this.sets = ["genesis", "core", "etherbots", "promo", "mythic", "welcome", "trial", "order", "mortal"], this.rarities = ["legendary", "epic", "rare", "common", "mythic"], this.types = ["spell", "weapon", "creature"], this.tribes = ["aether", "amazon", "anubian", "atlantean", "dragon", "nether", "olympian", "viking", "guild", "mystic", "structure", "wild"], this.qualities = ["no quality", "diamond", "gold", "shadow", "meteorite", "plain"], this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.destroyed$ = new M.xQ, this.numberIncludedInGroup = i => i < 9, this.stringIncludedInGroup = i => !!i, this._initGroupingRules(), this._initGroupings(), this.cardsService.inventory$.pipe((0, b.b)(i => this.inventoryCardsMap = i)).subscribe()
                }

                ngOnDestroy() {
                    this.destroyed$.next(), this.destroyed$.complete()
                }

                get groupings() {
                    return this._groupings
                }

                get groupingsNoQuality() {
                    return this._groupings.filter(t => t.groupingType !== F.Quality)
                }

                get defaultGrouping() {
                    return this._groupings[0]
                }

                get groupingsNoTribe() {
                    return this._groupings.filter(t => t.groupingType !== F.Tribe)
                }

                _initGroupingRules() {
                    this.godGrouping = new fe("god", this.gods, this.stringIncludedInGroup), this.setGrouping = new fe("set", this.sets, this.stringIncludedInGroup), this.rarityGrouping = new fe("rarity", this.rarities, this.stringIncludedInGroup), this.typeGrouping = new fe("type", this.types, this.stringIncludedInGroup), this.tribeGrouping = new fe("tribe", this.tribes, this.stringIncludedInGroup, ["weapon", "spell"], "none"), this.manaGrouping = new fe("mana", this.numbers, this.numberIncludedInGroup, [], "9+"), this.healthGrouping = new fe("health", this.numbers, this.numberIncludedInGroup, ["spell"], "9+"), this.attackGrouping = new fe("attack", this.numbers, this.numberIncludedInGroup, ["spell"], "9+"), this.qualityGrouping = new fe("quality", this.qualities, this.stringIncludedInGroup, [])
                }

                _initGroupings() {
                    this._groupings = [new me("Mana", this.manaGrouping, F.Mana), new me("Health", this.healthGrouping, F.Health), new me("Attack", this.attackGrouping, F.Attack), new me("Tribe", this.tribeGrouping, F.Tribe), new me("Type", this.typeGrouping, F.Type), new me("God", this.godGrouping, F.God), new me("Rarity", this.rarityGrouping, F.Rarity), new me("Set", this.setGrouping, F.Set), new me("Quality", this.qualityGrouping, F.Quality)]
                }

                addToCardGrouping(t, n, i) {
                    const a = i.protoCard;
                    if (n.rules.excludedTypes.includes(a.type)) return t;
                    const s = a[n.rules.property],
                        c = n.rules.includedInGroup(s) ? s.toString() : n.rules.noMatchingGroup;
                    if (c) {
                        const d = t.get(c).cards;
                        d.push(i), t.get(c).cards = [...d]
                    }
                    return t
                }

                removeFromCardGrouping(t, n, i) {
                    const s = i.protoCard[n.rules.property];
                    return n.rules.includedInGroup(s) ? t.get(s.toString()).cards = t.get(s.toString()).cards.filter(c => c.id !== i.id) : n.rules.noMatchingGroup && (t.get(n.rules.noMatchingGroup).cards = t.get(n.rules.noMatchingGroup).cards.filter(c => c.id !== i.id)), t
                }

                createCardGrouping(t) {
                    const n = new Map;
                    for (const i of t.rules.groups) n.set(i.toString(), new gn(i.toString(), t));
                    return t.rules.noMatchingGroup && n.set(t.rules.noMatchingGroup, new gn(t.rules.noMatchingGroup, t)), n
                }

                groupProtos(t, n, i = null, a = !1, s) {
                    const c = this._createProtoGrouping(n), d = s || this.inventoryCardsMap;
                    for (const u of t) {
                        if (!a && !u.collectable || i && u.god !== i && "neutral" !== u.god || n.rules.excludedTypes.includes(u.type)) continue;
                        const x = u[n.rules.property], v = d[u.proto] || [],
                            k = v.length > 0 ? this.createQualityMap(v) : null;
                        if (n.rules.includedInGroup(x)) {
                            const A = c.get(x.toString());
                            if (!A || !A.cards) continue;
                            A.cards.push({pc: u, qualityMap: k})
                        } else n.rules.noMatchingGroup && c.get(n.rules.noMatchingGroup).cards.push({
                            pc: u,
                            qualityMap: k
                        })
                    }
                    return c
                }

                _createProtoGrouping(t) {
                    const n = new Map;
                    for (const i of t.rules.groups) n.set(i.toString(), new un(i.toString(), t));
                    return t.rules.noMatchingGroup && n.set(t.rules.noMatchingGroup, new un(t.rules.noMatchingGroup, t)), n
                }

                _createQualityGrouping(t) {
                    const n = new Map;
                    for (const i of t.rules.groups) {
                        const a = this.qualities.indexOf(i.toString());
                        n.set(i.toString(), new pn(i.toString(), t, a))
                    }
                    return t.rules.noMatchingGroup && n.set(t.rules.noMatchingGroup, new pn(t.rules.noMatchingGroup, t, 0)), n
                }

                newQualityMap() {
                    const t = new Map;
                    for (const n in m.nJ) "number" == typeof m.nJ[n] && t.set(m.nJ[n], []);
                    return t
                }

                createQualityMap(t) {
                    const n = this.newQualityMap();
                    return t.forEach(i => {
                        n.get(i.q).push(i)
                    }), n
                }

                groupQualities(t, n, i = null, a = !1, s) {
                    const c = this._createQualityGrouping(n), d = s || this.inventoryCardsMap;
                    for (const u of t) {
                        if (!a && !u.collectable || i && u.god !== i && "neutral" !== u.god || n.rules.excludedTypes.includes(u.type)) continue;
                        const v = d[u.proto] || [], k = v.length > 0 ? this.createQualityMap(v) : null;
                        null !== k && k.forEach((A, D) => {
                            if (A.length <= 0) return;
                            let L = this.qualities[D];
                            if (L || (L = "plain"), n.rules.includedInGroup(L)) {
                                const E = c.get(L);
                                if (!E || !E.cards) return;
                                E.cards.push({pc: u, ics: A})
                            } else n.rules.noMatchingGroup && c.get(n.rules.noMatchingGroup).cards.push({pc: u, ics: A})
                        })
                    }
                    return c
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.dK), e.LFG(f.B3))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();
        var Mt = g(80013);
        const Cr = function (o) {
            return {selected: o}
        };

        function vr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "app-tooltip", 2)(2, "button", 3), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().selectGrouping(a)
                }), e._UZ(3, "gu-icon", 4), e.qZA()(), e.BQk()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.MGl("title", "Group by ", t.name, ""), e.xp6(1), e.Q6J("ngClass", e.VKq(3, Cr, n.isSelected(t))), e.xp6(1), e.Q6J("iconLigature", "filter_" + t.name.toLowerCase())
            }
        }

        function br(o, r) {
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

        let yt = (() => {
            class o {
                constructor(t) {
                    this.audioService = t, this.displayGroupingName = !0, this.displaySearch = !0, this.groupingChange = new e.vpe, this.searchChange = new e.vpe, this.searchControl = new T.NI(""), this.unsubscribe = new M.xQ
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
                    this.searchControl.valueChanges.pipe((0, p.R)(this.unsubscribe), (0, Mt.b)(500), (0, pt.x)(), (0, b.b)(t => this.searchChanged(t))).subscribe()
                }

                searchChanged(t) {
                    this.searchChange.emit(t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(f.pk))
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
                    1 & t && (e.YNc(0, vr, 4, 5, "ng-container", 0), e.YNc(1, br, 1, 1, "input", 1)), 2 & t && (e.Q6J("ngForOf", n.groupings), e.xp6(1), e.Q6J("ngIf", n.displaySearch))
                },
                directives: [l.sg, Ze.K, l.mk, l.O5, T.Fj, T.JJ, T.oH],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.searchBox[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.searchBox[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.searchBox[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:flex}.filterButton[_ngcontent-%COMP%]{width:calc(var(--vw) * 1.8);height:calc(var(--vw) * 1.8);border:calc(var(--vh) * .15) solid #182531;border-radius:calc(var(--vh) * .4);background:#0c1620;color:#7192b0;display:flex;padding:0;outline:none}.filterButton.selected[_ngcontent-%COMP%]{background:#3d5a74;border-color:#7192b0;color:#f6f6f6}.filterButton[_ngcontent-%COMP%]:hover{color:#f6f6f6;background:#3d5a74;border-color:#3d5a74}.filterButtonAndTooltip[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * .5)}.filterButton__icon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * 1);margin:auto;line-height:1;display:flex}.searchBox[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * .5);padding-left:calc(var(--vw) * .5);padding-right:calc(var(--vw) * .5);outline:none;background:#182531;color:#7192b0;border:1px solid #0f1b27;border-radius:calc(var(--vh) * .4)}.searchBox[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#7192b0}"]
            }), o
        })();

        function xr(o, r) {
            if (1 & o && e._UZ(0, "img", 1), 2 & o) {
                const t = e.oxw();
                e.MGl("src", "/gu-assets/images/gods/", t.god.toLowerCase(), ".webp", e.LSH)
            }
        }

        let _n = (() => {
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
                    2 & t && e.ekj("godBadge--small", n.isSmall)("godBadge--empty", n.isEmpty)(n.god + '', n.god);
                },
                inputs: {size: "size", god: "god"},
                decls: 1,
                vars: 1,
                consts: [["class", "godBadge__image", "alt", "god badge illustration", 3, "src", 4, "ngIf"], ["alt", "god badge illustration", 1, "godBadge__image", 3, "src"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, xr, 1, 1, "img", 0), 2 & t && e.Q6J("ngIf", n.god)
                },
                directives: [l.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}[_nghost-%COMP%]{width:calc(var(--vw) * 2.64);height:calc(var(--vw) * 2.64);display:flex;transition:all .5s ease-in-out;overflow:hidden;opacity:1;transform:rotate(45deg);}.godBadge--empty[_nghost-%COMP%]{box-shadow:none;border:calc(var(--vh) * .2) solid #527493;}.godBadge__image[_ngcontent-%COMP%]{display:block;margin-left:-25%;margin-top:-25%;width:150%;height:150%;transform:rotate(-45deg)}"]
            }), o
        })();
        var wr = g(22313);
        const Mr = ["*"];
        let rt = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.resizeService = t, this.sanitizer = n, this.elRef = i, this.renderer = a, this.columns = 4, this.columnGapVwMultiplyer = 1.2, this.rowGapVhMultiplyer = .5, this.vw = 0, this.vh = 0, this.unsubscribe = new M.xQ, t.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({
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
                return new (t || o)(e.Y36(K._), e.Y36(wr.H7), e.Y36(e.SBq), e.Y36(e.Qsj))
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
                ngContentSelectors: Mr,
                decls: 1,
                vars: 0,
                template: function (t, n) {
                    1 & t && (e.F$t(), e.Hsn(0))
                },
                styles: ['[_nghost-%COMP%]{width:100%;display:block}.fourColumns[_nghost-%COMP%]{grid-row-gap:calc(var(--vh) * 4.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(4, 1fr);align-items:start;grid-auto-rows:min-content;grid-template-areas:"item item item item" "desc desc desc desc"}.sevenColumns[_nghost-%COMP%]{grid-row-gap:calc(var(--vh) * 4.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8, 1fr);align-items:start;grid-auto-rows:min-content;grid-template-areas:"item item item item item item item item" "desc desc desc desc desc desc desc desc"}.eightColumns[_nghost-%COMP%]{grid-row-gap:calc(var(--vh) * 4.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8, 1fr);align-items:start;grid-auto-rows:min-content;grid-template-areas:"item item item item item item item item" "desc desc desc desc desc desc desc desc"}.tenColumns[_nghost-%COMP%]{grid-row-gap:calc(var(--vh) * 4.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8, 1fr);align-items:start;grid-auto-rows:min-content;grid-template-areas:"item item item item item item item item" "desc desc desc desc desc desc desc desc"}.elevenColumns[_nghost-%COMP%]{grid-row-gap:calc(var(--vh) * 4.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8, 1fr);align-items:start;grid-auto-rows:min-content;grid-template-areas:"item item item item item item item item" "desc desc desc desc desc desc desc desc"}']
            }), o
        })(), kt = (() => {
            class o {
                constructor(t, n) {
                    this.el = t, this.renderer = n, this.leftSideOrigin = "20% 50%", this.middleOrigin = "50% 50%", this.rightSideOrigin = "80% 50%", this.transformOrigin = this.middleOrigin
                }

                onEnter(t) {
                    // this.showCard()
                }

                onLeave(t) {
                    // this.hideCard()
                }

                ngOnInit() {
                    this.initPosition()
                }

                ngOnDestroy() {
                    this.cloneImage && this.hideCard().then(() => this.cloneImage = null)
                }

                initPosition() {
                    if (void 0 === this.cardIndex || void 0 === this.columnsCount) return;
                    const t = this.cardIndex % this.columnsCount;
                    0 === t ? this.transformOrigin = this.leftSideOrigin : t === this.columnsCount - 1 && (this.transformOrigin = this.rightSideOrigin)
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
                        // noop thanks
                    })("mouseleave", function (a) {
                        // noop thanks
                    })
                },
                inputs: {cardIndex: "cardIndex", columnsCount: "columnsCount"}
            }), o
        })();

        function yr(o, r) {
            if (1 & o && (e.TgZ(0, "div", 10), e._UZ(1, "gu-icon", 11), e.TgZ(2, "span", 12), e._uU(3), e.qZA()()), 2 & o) {
                const t = e.oxw(2).$implicit, n = e.oxw(3);
                e.xp6(3), e.Oqu(n.calculateDisplayedCount(t.value))
            }
        }

        function kr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 7)(1, "app-card2", 8), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(3).selectCard(i.value)
                }), e.qZA(), e.YNc(2, yr, 4, 1, "div", 9), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(2).$implicit, i = e.oxw();
                e.ekj("cardItemWrapper--dimmed", 0 === i.calculateDisplayedCount(t.value)), e.xp6(1), e.Q6J("protoId", n.pc.proto)("quality", t.key)("inputCw", 0)("inputCh", 0), e.xp6(1), e.Q6J("ngIf", i.showCardCounts)
            }
        }

        function Or(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, kr, 3, 7, "div", 6), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw(3);
                e.xp6(1), e.Q6J("ngIf", t.value.length > 0 && n.calculateDisplayedCount(t.value) > 0)
            }
        }

        function Pr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Or, 2, 1, "ng-container", 4), e.ALo(2, "keyvalue"), e.BQk()), 2 & o) {
                const t = e.oxw().$implicit;
                e.xp6(1), e.Q6J("ngForOf", e.lcZ(2, 1, t.qualityMap))
            }
        }

        function Sr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Pr, 3, 3, "ng-container", 5), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.qualityMap)
            }
        }

        function Tr(o, r) {
            if (1 & o && (e.TgZ(0, "div", 14), e._UZ(1, "app-card2", 15), e.qZA()), 2 & o) {
                const t = e.oxw().$implicit;
                e.xp6(1), e.Q6J("protoId", t.pc.proto)("quality", 5)("inputCw", 0)("inputCh", 0)
            }
        }

        function Ir(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Tr, 2, 4, "div", 13), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", !t.qualityMap && n.showUnowned)
            }
        }

        let Ar = (() => {
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
                consts: [[1, "groupedCardsHeader"], [1, "groupedCardsHeader__groupingName"], [1, "groupedCardsHeader__cardsCount"], [1, "cardGrid", 3, "columns", "columnGapVwMultiplyer"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "cardItemWrapper", "data-test-id", "selectCard", 3, "cardItemWrapper--dimmed", 4, "ngIf"], ["data-test-id", "selectCard", 1, "cardItemWrapper"], ["appSingleCardHoverFX", "", 3, "protoId", "quality", "inputCw", "inputCh", "click"], ["class", "cardCount", 4, "ngIf"], [1, "cardCount"], ["iconLigature", "stat_card", 1, "cardCount__icon"], [1, "cardCount__count"], ["class", "cardItemWrapper cardItemWrapper--greyed", 4, "ngIf"], [1, "cardItemWrapper", "cardItemWrapper--greyed"], ["appSingleCardHoverFX", "", 3, "protoId", "quality", "inputCw", "inputCh"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0)(1, "h4", 1), e._uU(2), e.ALo(3, "titlecase"), e.ALo(4, "titlecase"), e.qZA(), e.TgZ(5, "h4", 2), e._uU(6), e.qZA()(), e.TgZ(7, "app-grid-display", 3), e.YNc(8, Sr, 2, 1, "ng-container", 4), e.YNc(9, Ir, 2, 1, "ng-container", 4), e.qZA()), 2 & t && (e.xp6(2), e.AsE(" ", e.lcZ(3, 8, n.grouping.currentGrouping.name), ": ", e.lcZ(4, 10, n.grouping.header), " "), e.xp6(4), e.AsE(" ", n.calculateOwnedCards(n.grouping.cards), " / ", n.grouping.cards.length, " "), e.xp6(1), e.Q6J("columns", n.columns)("columnGapVwMultiplyer", .8), e.xp6(1), e.Q6J("ngForOf", n.grouping.cards), e.xp6(1), e.Q6J("ngForOf", n.grouping.cards))
                },
                directives: [rt, l.sg, l.O5, J, kt],
                pipes: [l.rS, l.Nd],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardCount__count[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardCount__count[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block}.cardCount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cardCount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1);margin-right:calc(var(--vw) * .3);line-height:1;color:#f6f6f6}.cardCount__count[_ngcontent-%COMP%]{color:#f6f6f6}.cardItemWrapper--greyed[_ngcontent-%COMP%]{filter:grayscale(1)}.cardItemWrapper--greyed[_ngcontent-%COMP%]     app-card2{cursor:default}.cardItemWrapper--dimmed[_ngcontent-%COMP%]{filter:brightness(.6)}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}.cardGrid[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content}']
            }), o
        })();
        var Ot = g(44290), De = g(44416);

        function Fr(o, r) {
            1 & o && (e.TgZ(0, "div", 13)(1, "div", 14)(2, "gu-vertical-space", 15)(3, "gu-paragraph-text", 16), e._uU(4, " NOT FUSABLE "), e.qZA(), e._UZ(5, "gu-icon", 17), e.qZA()()())
        }

        const Zr = function (o) {
            return {"cardItem--escrow": o}
        }, Dr = function (o, r) {
            return {"cardItem--selected": o, "cardItem--dimmed": r}
        };

        function Gr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 10), e.YNc(1, Fr, 6, 0, "div", 11), e.TgZ(2, "app-card2", 12), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw(2).$implicit, c = e.oxw();
                    return c.selectCard(c.card.pc.proto, s.key, a.id)
                }), e.qZA()()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw(2).$implicit, i = e.oxw();
                e.Q6J("ngClass", e.VKq(5, Zr, "escrow" === t.status)), e.xp6(1), e.Q6J("ngIf", "escrow" === t.status), e.xp6(1), e.Q6J("protoId", i.card.pc.proto)("quality", n.key)("ngClass", e.WLB(7, Dr, i.isCardInForge(t.id), !i.isCardSelectable(n.key, t.id)))
            }
        }

        function Br(o, r) {
            1 & o && (e.TgZ(0, "p", 18), e._uU(1, " You cannot forge Diamond cards. "), e.qZA())
        }

        function Ur(o, r) {
            if (1 & o && (e.TgZ(0, "p", 18), e._uU(1), e.ALo(2, "titlecase"), e.qZA()), 2 & o) {
                const t = e.oxw(3).$implicit, n = e.oxw();
                e.xp6(1), e.AsE(" You need ", n.forgeService.fusingLevels[t.key].amount - t.value.length, " more ", e.lcZ(2, 2, n.forgeService.fusingLevels[t.key].name), " cards to forge ")
            }
        }

        function Lr(o, r) {
            if (1 & o && e.YNc(0, Ur, 3, 4, "p", 19), 2 & o) {
                const t = e.oxw(2).$implicit, n = e.oxw();
                e.Q6J("ngIf", t.value.length < n.forgeService.fusingLevels[t.key].amount)
            }
        }

        function Er(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "header", 3)(2, "h4", 4), e._uU(3), e.ALo(4, "titlecase"), e.qZA(), e.TgZ(5, "h4", 5), e._uU(6), e.qZA()(), e.TgZ(7, "div", 6), e.YNc(8, Gr, 3, 10, "div", 7), e.qZA(), e.YNc(9, Br, 2, 0, "p", 8), e.YNc(10, Lr, 1, 1, "ng-template", null, 9, e.W1O), e.BQk()), 2 & o) {
                const t = e.MAs(11), n = e.oxw().$implicit, i = e.oxw();
                e.xp6(3), e.hij(" ", e.lcZ(4, 5, i.forgeService.fusingLevels[n.key].name), " "), e.xp6(3), e.hij(" ", n.value.length, " "), e.xp6(2), e.Q6J("ngForOf", n.value), e.xp6(1), e.Q6J("ngIf", 1 === n.key)("ngIfElse", t)
            }
        }

        function Nr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Er, 12, 7, "ng-container", 2), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.value.length > 0)
            }
        }

        let hn = (() => {
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
                    this.forgeService.forgeCards$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => this.forgeCards = t)
                }

                selectCard(t, n, i) {
                    n !== m.nJ.DIAMOND && (this.isCardInForge(i) ? this.forgeService.removeFromForge(t, n, i) : this.forgeService.addToForge(t, n, i))
                }

                isCardInForge(t) {
                    return this.forgeCards && this.forgeCards.ids && this.forgeCards.ids.some(n => n === t)
                }

                isCardSelectable(t, n) {
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
                        return t !== m.nJ.DIAMOND && (!this.forgeCards || this.forgeCards.quality === t && (this.isCardInForge(n), !0))
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(xe))
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
                    1 & t && (e.TgZ(0, "h1", 0), e._uU(1), e.ALo(2, "titlecase"), e.qZA(), e.YNc(3, Nr, 2, 1, "ng-container", 1), e.ALo(4, "keyvalue")), 2 & t && (e.xp6(1), e.Oqu(e.lcZ(2, 2, n.card.pc.name)), e.xp6(2), e.Q6J("ngForOf", e.lcZ(4, 4, null == n.card ? null : n.card.qualityMap)))
                },
                directives: [l.sg, l.O5, l.mk, J],
                pipes: [l.rS, l.Nd],
                styles: ['@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.cardName[_ngcontent-%COMP%], .cardHeader__cardsCount[_ngcontent-%COMP%], .cardHeader__quality[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardSection__infoText[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.cardHeader__cardsCount[_ngcontent-%COMP%], .cardHeader__quality[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.cardSection__infoText[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.cardSection__infoText[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{padding:calc(var(--vw) * 1);margin-bottom:calc(var(--vh) * 4);grid-area:desc;display:flex;flex-direction:column;border:calc(var(--vh) * .3) solid #1d2f41;background:#08111a;position:relative}[_nghost-%COMP%]:before{content:"";position:absolute;border:calc(var(--vh) * 2.5) solid transparent;border-bottom-color:#1d2f41;top:calc(calc(var(--vh) * 2.5) * -2.05)}[_nghost-%COMP%]:after{content:"";position:absolute;border:calc(calc(var(--vh) * 2.5) * .85) solid transparent;border-bottom-color:#08111a;top:calc(calc(calc(var(--vh) * 2.5) * .85) * -2)}.column-0[_nghost-%COMP%]:before{left:calc(var(--vw) * 3.8)}.column-0[_nghost-%COMP%]:after{left:calc(var(--vw) * 4)}.column-1[_nghost-%COMP%]:before{left:calc(var(--vw) * 15)}.column-1[_nghost-%COMP%]:after{left:calc(var(--vw) * 15.2)}.column-2[_nghost-%COMP%]:before{left:calc(var(--vw) * 25.6)}.column-2[_nghost-%COMP%]:after{left:calc(var(--vw) * 25.8)}.column-3[_nghost-%COMP%]:before{left:calc(var(--vw) * 36.5)}.column-3[_nghost-%COMP%]:after{left:calc(var(--vw) * 36.7)}.cardName[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-transform:none}.cardHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.cardHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.cardHeader__quality[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.cardHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}.cardSection[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(5,1fr);align-items:start;grid-auto-rows:min-content;grid-column-gap:calc(var(--vh) * .3);margin-left:calc(var(--vw) * -.5)}.cardSection__infoText[_ngcontent-%COMP%]{font-style:italic;text-align:left;color:#f6f6f6;max-width:calc(var(--vw) * 8.5);margin-top:calc(var(--vh) * 2);margin-bottom:calc(var(--vh) * 2);margin-left:calc(var(--vw) * .5)}.cardItem[_ngcontent-%COMP%]{transition:.1s ease-in;transition-property:filter,transform;position:relative}.cardItem--escrow[_ngcontent-%COMP%]{padding-bottom:56px}.cardItem--selected[_ngcontent-%COMP%]{transform:scale(1.1);filter:drop-shadow(0 0 calc(var(--vh) * .8) rgba(89,168,205,.8))}.cardItem--dimmed[_ngcontent-%COMP%]{filter:brightness(.6)}.gridRow[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;align-items:start;grid-auto-rows:min-content;grid-template-areas:"item item item item item" "desc desc desc desc desc";grid-template-columns:repeat(5,1fr)}.cardItem__card[_ngcontent-%COMP%]{cursor:pointer}.cardItem__dropdown[_ngcontent-%COMP%]{position:absolute;background:linear-gradient(to bottom,#FFF2D8 0%,#C6A052 100%);padding:3px;width:76%;height:100px;bottom:0;left:54%;transform:translate(-50%);clip-path:polygon(0% 0%,100% 0%,100% calc(100% - var(--vh) * 4),50% 100%,0% calc(100% - var(--vh) * 4),0% 0%);-webkit-clip-path:polygon(0% 0%,100% 0%,100% calc(100% - var(--vh) * 4),50% 100%,0% calc(100% - var(--vh) * 4),0% 0%)}.cardItem__dropdown__inner[_ngcontent-%COMP%]{width:100%;height:100%;background:#0F1B27;clip-path:polygon(0% 0%,100% 0%,100% calc(100% - var(--vh) * 3.9),50% 100%,0% calc(100% - var(--vh) * 3.9),0% 0%);-webkit-clip-path:polygon(0% 0%,100% 0%,100% calc(100% - var(--vh) * 3.9),50% 100%,0% calc(100% - var(--vh) * 3.9),0% 0%);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:24px 0 20px}.cardItem__dropDown__inner_wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cardItem__dropDown__inner_wrapper__tooltip[_ngcontent-%COMP%]{position:relative}']
            }), o
        })();
        const qr = function (o) {
            return {"gridRow__cardItemWrapper--dimmed": o}
        };

        function Qr(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card2", 7), e.NdJ("click", function () {
                    const i = e.CHM(t), a = i.$implicit, s = i.index, c = e.oxw().index;
                    return e.oxw(2).onSelectCard(a, c, s)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw(3);
                e.Q6J("protoId", t.pc.proto)("quality", 5)("inputCh", 0)("inputCw", 0)("ngClass", e.VKq(5, qr, n.expandedCard && t.pc.proto !== n.expandedCard.card.pc.proto))
            }
        }

        function Rr(o, r) {
            if (1 & o && e._UZ(0, "cerberus-app-expanded-cards", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function Hr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Rr, 1, 2, "cerberus-app-expanded-cards", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function Yr(o, r) {
            if (1 & o && e._UZ(0, "app-expanded-cards-signing", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function Jr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Yr, 1, 2, "app-expanded-cards-signing", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function $r(o, r) {
            if (1 & o && e._UZ(0, "app-expanded-cards-selling", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function Wr(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, $r, 1, 2, "app-expanded-cards-selling", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function zr(o, r) {
            if (1 & o && (e.TgZ(0, "app-grid-display", 5), e.YNc(1, Qr, 1, 7, "app-card2", 6), e.YNc(2, Hr, 2, 1, "ng-container", 0), e.YNc(3, Jr, 2, 1, "ng-container", 0), e.YNc(4, Wr, 2, 1, "ng-container", 0), e.qZA()), 2 & o) {
                const t = r.$implicit, n = e.oxw(2);
                e.Q6J("columns", n.columns)("columnGapVwMultiplyer", .8), e.xp6(1), e.Q6J("ngForOf", t), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.FORGING), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.SIGNING), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.SELLING)
            }
        }

        function jr(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "header", 1)(2, "h4", 2), e._uU(3), e.ALo(4, "titlecase"), e.ALo(5, "titlecase"), e.qZA(), e.TgZ(6, "h4", 3), e._uU(7), e.qZA()(), e.YNc(8, zr, 5, 6, "app-grid-display", 4), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.AsE(" ", e.lcZ(4, 4, t.grouping.currentGrouping.name), ": ", e.lcZ(5, 6, t.grouping.header), " "), e.xp6(4), e.hij(" ", t.numCards, " "), e.xp6(1), e.Q6J("ngForOf", t.chunkedCards)
            }
        }

        let Vr = (() => {
            class o {
                constructor(t, n, i) {
                    this.forgeService = t, this.utils = n, this.cardGridService = i, this.columns = 8, this.showOnlyEscrow = !1, this.showUnowned = !1, this.filterCardIds = [], this.showCardCounts = !0, this.showBundle = !1, this.selectCard = new e.vpe, this.ExpandedViewMode = R, this.numCards = 0, this.chunkedCards = [], this.alive = !0
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
                    this.forgeService.fusingLevels$.pipe((0, S.h)(t => null !== t), (0, w.q)(1)).subscribe(t => {
                        const n = this.grouping.cards.filter(i => this.doShowCard(i.pc, i.qualityMap, t));
                        this.numCards = n.length, this.chunkedCards = this.utils.chunk(n, this.columns)
                    })
                }

                initExpandedCard() {
                    this.cardGridService.expandedCard$.pipe((0, Ot.o)(t => this.alive), (0, b.b)(t => this.expandedCard = t)).subscribe()
                }

                doShowCard(t, n, i) {
                    return !!n && (this.expandedViewMode === R.FORGING ? "core" === t.set && this.forgeService.isFuseableQualityMap(n, i) : this.expandedViewMode !== R.SELLING || this.isMarketplaceSellable(t.set))
                }

                isMarketplaceSellable(t) {
                    return "genesis" === t || "promo" === t || "etherbots" === t || "mythic" === t
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(xe), e.Y36(De.F), e.Y36(He))
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
                    1 & t && e.YNc(0, jr, 9, 8, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.numCards > 0)
                },
                directives: [l.O5, l.sg, rt, J, l.mk, hn],
                pipes: [l.rS],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardCount__count[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardCount__count[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-right:calc(var(--vw) * .55);display:block}.cardCount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cardCount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1);margin-right:calc(var(--vw) * .3);line-height:1;color:#f6f6f6}.cardCount__count[_ngcontent-%COMP%]{color:#f6f6f6}.gridRow__cardItemWrapper[_ngcontent-%COMP%]{position:relative;transition:.1s ease-in;transition-property:filter;cursor:pointer}.gridRow__cardItemWrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:105%;height:105%;background:url(/gu-assets/images/cards/forge-bundle-proto.svg) no-repeat;background-position:center right;background-size:76% auto}.gridRow__cardItemWrapper--dimmed[_ngcontent-%COMP%]{opacity:.4;cursor:default}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}']
            }), o
        })();

        function Xr(o, r) {
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

        function Kr(o, r) {
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

        function ea(o, r) {
            if (1 & o && (e.ynx(0)(1, 3), e.YNc(2, Xr, 1, 9, "app-inventory-cards-quality", 4), e.YNc(3, Kr, 1, 9, "app-inventory-cards-proto", 5), e.BQk()()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.Q6J("ngSwitch", t.mode), e.xp6(1), e.Q6J("ngSwitchCase", "quality"), e.xp6(1), e.Q6J("ngSwitchCase", "proto")
            }
        }

        function ta(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ea, 4, 3, "ng-container", 2), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.cards.length > 0)
            }
        }

        function na(o, r) {
            1 & o && (e.TgZ(0, "div", 8)(1, "h4", 9), e._uU(2, " No cards match your filters "), e.qZA()())
        }

        let Pt = (() => {
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
                    1 & t && (e.YNc(0, ta, 2, 1, "ng-container", 0), e.YNc(1, na, 3, 0, "div", 1)), 2 & t && (e.Q6J("ngForOf", n.displayedGroupedProtos), e.xp6(1), e.Q6J("ngIf", !n.displayedGroupedProtos || 0 === n.displayedGroupedProtos.length))
                },
                directives: [l.sg, l.O5, l.RF, l.n9, Ar, Vr],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.noCardsToDisplay__text[_ngcontent-%COMP%], .groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.noCardsToDisplay__text[_ngcontent-%COMP%], .groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block;padding-bottom:calc(var(--vh) * 12)}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}.noCardsToDisplay[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative}.noCardsToDisplay__text[_ngcontent-%COMP%]{line-height:1.1;color:#f6f6f6}']
            }), o
        })();

        function oa(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "span", 13), e._uU(2), e.qZA(), e.BQk()), 2 & o) {
                const t = e.oxw(3).$implicit, n = e.oxw(2);
                e.xp6(2), e.Oqu(n.calculateDisplayedCount(t.ics))
            }
        }

        function ia(o, r) {
            if (1 & o && (e.TgZ(0, "span", 13), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(3).$implicit;
                e.xp6(1), e.Oqu(t.ics.length)
            }
        }

        function ra(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9), e._UZ(1, "gu-icon", 10), e.YNc(2, oa, 3, 1, "ng-container", 11), e.YNc(3, ia, 2, 1, "ng-template", null, 12, e.W1O), e.qZA()), 2 & o) {
                const t = e.MAs(4), n = e.oxw(4);
                e.xp6(2), e.Q6J("ngIf", n.filterCardIds.length > 0)("ngIfElse", t)
            }
        }

        function aa(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "div", 6)(2, "app-card2", 7), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(2).selectCard(i.ics)
                }), e.qZA(), e.YNc(3, ra, 5, 2, "div", 8), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(2);
                e.xp6(1), e.ekj("cardItemWrapper--dimmed", 0 === n.calculateDisplayedCount(t.ics)), e.xp6(1), e.Q6J("protoId", t.pc.proto)("quality", t.ics[0].q)("inputCw", 0)("inputCh", 0), e.xp6(1), e.Q6J("ngIf", n.showCardCounts)
            }
        }

        function sa(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, aa, 4, 7, "ng-container", 0), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.ics && t.ics.length)
            }
        }

        function ca(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "header", 1)(2, "h4", 2), e._uU(3), e.ALo(4, "titlecase"), e.ALo(5, "titlecase"), e.qZA(), e.TgZ(6, "h4", 3), e._uU(7), e.qZA()(), e.TgZ(8, "app-grid-display", 4), e.YNc(9, sa, 2, 1, "ng-container", 5), e.qZA(), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.AsE(" ", e.lcZ(4, 6, t.grouping.currentGrouping.name), ": ", e.lcZ(5, 8, t.grouping.header), " "), e.xp6(4), e.hij(" ", t.grouping.cards.length, " "), e.xp6(1), e.Q6J("columns", t.columns)("columnGapVwMultiplyer", .8), e.xp6(1), e.Q6J("ngForOf", t.grouping.cards)
            }
        }

        let la = (() => {
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
                    1 & t && e.YNc(0, ca, 10, 10, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.grouping.cards.length > 0)
                },
                directives: [l.O5, rt, l.sg, J, kt],
                pipes: [l.rS],
                styles: ['@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.noCardsToDisplay__text[_ngcontent-%COMP%], .groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardCount__count[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.noCardsToDisplay__text[_ngcontent-%COMP%], .groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardCount__count[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block;padding-bottom:calc(var(--vh) * 12)}.noCardsToDisplay[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative}.noCardsToDisplay__text[_ngcontent-%COMP%]{line-height:1.1;color:#f6f6f6}.cardCount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cardCount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1);margin-right:calc(var(--vw) * .3);line-height:1;color:#f6f6f6}.cardCount__count[_ngcontent-%COMP%]{color:#f6f6f6}.cardItemWrapper--greyed[_ngcontent-%COMP%]{filter:grayscale(1)}.cardItemWrapper--greyed[_ngcontent-%COMP%]     app-card2{cursor:default}.cardItemWrapper--dimmed[_ngcontent-%COMP%]{filter:brightness(.6)}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}.cardGrid[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content}']
            }), o
        })();
        const da = function (o) {
            return {"gridRow__cardItemWrapper--dimmed": o}
        };

        function ga(o, r) {
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
                e.xp6(1), e.Q6J("ngClass", e.VKq(5, da, n.expandedCard && t.pc.proto !== n.expandedCard.card.pc.proto))("protoId", t.pc.proto)("quality", t.ics[0].q)("inputCw", 0)("inputCh", 0)
            }
        }

        function ua(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ga, 2, 7, "ng-container", 0), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", t.ics && t.ics.length)
            }
        }

        function pa(o, r) {
            if (1 & o && e._UZ(0, "cerberus-app-expanded-cards", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function _a(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, pa, 1, 2, "cerberus-app-expanded-cards", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function ha(o, r) {
            if (1 & o && e._UZ(0, "app-expanded-cards-signing", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function ma(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ha, 1, 2, "app-expanded-cards-signing", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function fa(o, r) {
            if (1 & o && e._UZ(0, "app-expanded-cards-selling", 9), 2 & o) {
                const t = e.oxw(4);
                e.Q6J("card", t.expandedCard.card)("cardRowIndex", t.expandedCard.cardRowIndex)
            }
        }

        function Ca(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, fa, 1, 2, "app-expanded-cards-selling", 8), e.BQk()), 2 & o) {
                const t = e.oxw().index, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.expandedCard && n.expandedCard.groupingIndex === n.groupingIndex && n.expandedCard.gridRowIndex === t)
            }
        }

        function va(o, r) {
            if (1 & o && (e.TgZ(0, "app-grid-display", 5), e.YNc(1, ua, 2, 1, "ng-container", 6), e.YNc(2, _a, 2, 1, "ng-container", 0), e.YNc(3, ma, 2, 1, "ng-container", 0), e.YNc(4, Ca, 2, 1, "ng-container", 0), e.qZA()), 2 & o) {
                const t = r.$implicit, n = e.oxw(2);
                e.Q6J("columns", n.columns)("columnGapVwMultiplyer", .8), e.xp6(1), e.Q6J("ngForOf", t), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.FORGING), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.SIGNING), e.xp6(1), e.Q6J("ngIf", n.expandedViewMode === n.ExpandedViewMode.SELLING)
            }
        }

        function ba(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "header", 1)(2, "h4", 2), e._uU(3), e.ALo(4, "titlecase"), e.ALo(5, "titlecase"), e.qZA(), e.TgZ(6, "h4", 3), e._uU(7), e.qZA()(), e.YNc(8, va, 5, 6, "app-grid-display", 4), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.AsE(" ", e.lcZ(4, 4, t.grouping.currentGrouping.name), ": ", e.lcZ(5, 6, t.grouping.header), " "), e.xp6(4), e.hij(" ", t.numCards, " "), e.xp6(1), e.Q6J("ngForOf", t.chunkedCards)
            }
        }

        let xa = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.forgeService = t, this.cardGridService = n, this.utils = i, this.groupingService = a, this.columns = 8, this.showOnlyEscrow = !1, this.showUnowned = !1, this.filterCardIds = [], this.showCardCounts = !0, this.mode = "quality", this.showBundle = !1, this.selectCardId = new e.vpe, this.ExpandedViewMode = R, this.numCards = 0, this.chunkedCards = [], this.alive = !0
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
                    this.forgeService.fusingLevels$.pipe((0, S.h)(t => null !== t)).subscribe(t => {
                        const n = this.grouping.cards.filter(i => this.doShowCard(i.pc, i.ics, t));
                        this.numCards = n.length, this.chunkedCards = this.utils.chunk(n, this.columns)
                    })
                }

                initExpandedCard() {
                    this.cardGridService.expandedCard$.pipe((0, Ot.o)(t => this.alive), (0, b.b)(t => this.expandedCard = t)).subscribe()
                }

                doShowCard(t, n, i) {
                    return !!n && (this.expandedViewMode === R.FORGING ? "core" === t.set && this.forgeService.isFuseable(n, this.grouping.quality, i) : this.expandedViewMode !== R.SELLING || "core" !== t.set)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(xe), e.Y36(He), e.Y36(De.F), e.Y36(ke))
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
                    1 & t && e.YNc(0, ba, 9, 8, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.numCards > 0)
                },
                directives: [l.O5, l.sg, rt, J, l.mk, hn],
                pipes: [l.rS],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardCount__count[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%], .groupedCardsHeader__groupingName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.cardCount__count[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-right:calc(var(--vw) * 1);display:block}.cardCount[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.cardCount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1);margin-right:calc(var(--vw) * .3);line-height:1;color:#f6f6f6}.cardCount__count[_ngcontent-%COMP%]{color:#f6f6f6}.gridRow__cardItemWrapper[_ngcontent-%COMP%]{position:relative;transition:.1s ease-in;transition-property:filter;cursor:pointer}.gridRow__cardItemWrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0%;right:0;width:35%;height:100%;background:url(/gu-assets/images/cards/forge-bundle-proto.svg) no-repeat;background-position:center;background-size:contain;transform:translate(25%)}.gridRow__cardItemWrapper--dimmed[_ngcontent-%COMP%]{opacity:.4;cursor:default}.groupedCardsHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative;align-items:center}.groupedCardsHeader[_ngcontent-%COMP%]:before{content:"";flex:1;order:2;height:calc(var(--vh) * .25);background:#1d2f41}.groupedCardsHeader__groupingName[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * 1);line-height:1.1;color:#f6f6f6;order:1}.groupedCardsHeader__cardsCount[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);line-height:1.1;margin-left:auto;color:#f6f6f6;order:3}']
            }), o
        })();

        function wa(o, r) {
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

        function Ma(o, r) {
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

        function ya(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, wa, 2, 4, "ng-container", 2), e.YNc(2, Ma, 1, 7, "ng-template", null, 3, e.W1O), e.BQk()), 2 & o) {
                const t = e.MAs(3), n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", void 0 === n.expandedViewMode)("ngIfElse", t)
            }
        }

        function ka(o, r) {
            1 & o && (e.TgZ(0, "div", 6)(1, "h4", 7), e._uU(2, " No cards match your filters "), e.qZA()())
        }

        let St = (() => {
            class o {
                constructor() {
                    this.columns = 8, this.showUnowned = !1, this.showOnlyEscrow = !1, this.filterCardIds = [], this.showCardCounts = !0, this.mode = "quality", this.showBundle = !1, this.selectCardId = new e.vpe
                }

                onSelectCard(t) {
                    this.selectCardId.emit(t)
                }

                get groupedQualities() {
                    return this.expandedViewMode === R.FORGING && this.displayedGroupedQualities ? [...this.displayedGroupedQualities].reverse() : this.displayedGroupedQualities
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
                    1 & t && (e.YNc(0, ya, 4, 2, "ng-container", 0), e.YNc(1, ka, 3, 0, "div", 1)), 2 & t && (e.Q6J("ngForOf", n.groupedQualities), e.xp6(1), e.Q6J("ngIf", !(n.loading || n.displayedGroupedQualities && 0 !== n.displayedGroupedQualities.length)))
                },
                directives: [l.sg, l.O5, la, xa],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.noCardsToDisplay__text[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.noCardsToDisplay__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:block;padding-bottom:calc(var(--vh) * 12)}.noCardsToDisplay[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1.5);padding-bottom:calc(var(--vh) * 1.5);display:flex;position:relative}.noCardsToDisplay__text[_ngcontent-%COMP%]{line-height:1.1;color:#f6f6f6}"]
            }), o
        })();
        const Oa = ["groupsContainer"];

        function Pa(o, r) {
            if (1 & o && (e.TgZ(0, "h3", 9), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.title)
            }
        }

        function Sa(o, r) {
            if (1 & o && (e.TgZ(0, "div", 10), e._UZ(1, "app-god-badge", 11), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("god", t.god.toLowerCase())
            }
        }

        function Ta(o, r) {
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

        function Ia(o, r) {
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

        let Tt = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.resizeService = t, this.groupingService = n, this.filterService = i, this.audioService = a, this.activeGrouping = this.groupingService.defaultGrouping, this.filterCardIds = [], this.sound = !0, this.mode = "quality", this.columns = 8, this.showUnowned = !0, this.selectCardId = new e.vpe, this.GroupingType = F, this.selectedHeaders = [], this.showOnlyEscrow = !1, this.activeSort = Y.PE.AscMana, this.sortOptions = [new B("Mana", "filter_mana", Y.PE.AscMana, Y.PE.DescMana), new B("Health", "filter_health", Y.PE.AscHealth, Y.PE.DescHealth), new B("Attack", "filter_attack", Y.PE.AscAttack, Y.PE.DescAttack), new B("Tribe", "filter_tribe", Y.PE.AscTribe, Y.PE.DescTribe), new B("Type", "filter_type", Y.PE.AscType, Y.PE.DescType), new B("God", "filter_god", Y.PE.AscGod, Y.PE.DescGod), new B("Rarity", "filter_rarity", Y.PE.AscRarity, Y.PE.DescRarity), new B("Set", "filter_set", Y.PE.AscSet, Y.PE.DescSet)], this.allGroupedProtos = [], this.allGroupedQualities = [], this.unsubscribe = new M.xQ, this.watchForResize()
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
                    this.resizeService.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({vh: t}) => this.vh = t)).subscribe()
                }

                groupingChange(t, n = !0) {
                    this.sortCards(this.activeSort), this.selectedHeaders = n ? [] : this.selectedHeaders, this.activeGrouping = t, t.groupingType === F.Quality ? (this.protoGrouping = null, this.qualityGrouping = this.groupingService.groupQualities(this.protoCards, t, this.god, !1, this.customInventoryCardsMap), this.filterCardGroupingQuality()) : (this.qualityGrouping = null, this.protoGrouping = this.groupingService.groupProtos(this.protoCards, t, this.god, !1, this.customInventoryCardsMap), this.filterCardGrouping())
                }

                filterCardGrouping() {
                    if (!this.protoGrouping) return;
                    this.displayedGroupedProtos = [];
                    const n = Array.from(this.protoGrouping.values()).reverse().filter(i => 0 === this.selectedHeaders.length || -1 !== this.selectedHeaders.indexOf(i.header));
                    this.allGroupedProtos = n.map(i => {
                        const a = Object.assign({}, i);
                        return this.showOnlyEscrow && (a.cards = [...a.cards].filter(s => {
                            let c = !1;
                            return !!s.qualityMap && (s.qualityMap.forEach((d, u) => {
                                c = !!d.some(x => "escrow" === x.status) || c
                            }), c)
                        })), this.search && this.search.length > 0 && (this.search = this.search.toLowerCase(), a.cards = [...a.cards].filter(s => s.pc.name.toLowerCase().includes(this.search) || s.pc.tribe && s.pc.tribe.toLowerCase().includes(this.search) || s.pc.god.toLowerCase().includes(this.search) || s.pc.effect.toLowerCase().includes(this.search))), a
                    }).filter(i => i.cards.length > 0).reduce((i, a) => i.concat(a), []), this.loadGroup()
                }

                loadGroup() {
                    if (this.activeGrouping.groupingType === F.Quality) return void this.loadGroupQuality();
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
                            return c = s.ics.some(d => "escrow" === d.status), c
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
                    this.selectedHeaders = t, this.activeGrouping.groupingType === F.Quality ? this.filterCardGroupingQuality() : this.filterCardGrouping()
                }

                searchChange(t) {
                    this.search = t, this.activeGrouping.groupingType === F.Quality ? this.filterCardGroupingQuality() : this.filterCardGrouping()
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
                    if (this.expandedViewMode === R.SELLING) n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "genesis" === a.set)})); else {
                        if (this.expandedViewMode !== R.FORGING) return t;
                        n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "core" === a.set)}))
                    }
                    return n
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(ke), e.Y36(_.iZ), e.Y36(f.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-cards-list"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Oa, 7), e.Gf(J, 5)), 2 & t) {
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
                consts: [[1, "sectionHeader"], ["class", "sectionHeader__title", 4, "ngIf"], [1, "sectionHeader__groupings", 3, "activeGrouping", "groupings", "groupingChange", "searchChange"], [1, "sectionHeader__filterArea", 3, "sortOptions", "selectedHeaders", "cardGrouping", "unownedCheckboxVisible", "sortChange", "groupingHeaderChange", "unownedChange", "ownershipChange"], ["class", "sectionHeader__godArea", 4, "ngIf"], ["infiniteScroll", "", "data-test-id", "cardsListing", 1, "cardsListingArea", 3, "scrollWindow", "scrolled"], ["groupsContainer", ""], [3, "columns", "mode", "showUnowned", "showOnlyEscrow", "expandedViewMode", "displayedGroupedProtos", "filterCardIds", "selectCardId", 4, "ngIf"], [3, "columns", "showUnowned", "showOnlyEscrow", "expandedViewMode", "displayedGroupedQualities", "filterCardIds", "selectCardId", 4, "ngIf"], [1, "sectionHeader__title"], [1, "sectionHeader__godArea"], [1, "godArea__badge", 3, "god"], [3, "columns", "mode", "showUnowned", "showOnlyEscrow", "expandedViewMode", "displayedGroupedProtos", "filterCardIds", "selectCardId"], ["cardsContainer", ""], [3, "columns", "showUnowned", "showOnlyEscrow", "expandedViewMode", "displayedGroupedQualities", "filterCardIds", "selectCardId"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0), e.YNc(1, Pa, 2, 1, "h3", 1), e.TgZ(2, "app-singular-active-filter-bar", 2), e.NdJ("groupingChange", function (a) {
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
                    }), e.qZA(), e.YNc(4, Sa, 2, 1, "div", 4), e.qZA(), e.TgZ(5, "section", 5, 6), e.NdJ("scrolled", function () {
                        return n.loadGroup()
                    }), e.YNc(7, Ta, 2, 7, "app-inventory-cards", 7), e.YNc(8, Ia, 2, 6, "app-group-quality", 8), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngIf", n.title), e.xp6(1), e.Q6J("activeGrouping", n.activeGrouping)("groupings", n.groupings), e.xp6(1), e.Q6J("sortOptions", n.sortOptions)("selectedHeaders", n.selectedHeaders)("cardGrouping", n.activeGrouping.groupingType === n.GroupingType.Quality ? n.qualityGrouping : n.protoGrouping)("unownedCheckboxVisible", !(n.activeGrouping.groupingType === n.GroupingType.Quality || void 0 !== n.expandedViewMode)), e.xp6(1), e.Q6J("ngIf", n.god), e.xp6(1), e.Q6J("scrollWindow", !1), e.xp6(2), e.Q6J("ngIf", n.activeGrouping.groupingType !== n.GroupingType.Quality), e.xp6(1), e.Q6J("ngIf", n.activeGrouping.groupingType === n.GroupingType.Quality))
                },
                directives: [l.O5, yt, wt, _n, gt, Pt, St],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}.sectionHeader__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.godArea__label[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif}.sectionHeader__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.godArea__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;height:100%;overflow-y:scroll;overflow-x:hidden;padding:48px 48px 0px;}.sectionHeader[_ngcontent-%COMP%]{height:calc(var(--vh) * 9.5);position:relative}.sectionHeader__groupings[_ngcontent-%COMP%]{position:absolute}.sectionHeader__title[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .3);padding-bottom:calc(var(--vh) * .8);line-height:1;position:absolute;width:100%;text-align:center;color:#f6f6f6;border-bottom:solid #1d2f41;border-width:calc(var(--vh) * .25)}.sectionHeader__rightSideArea[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .8);position:absolute;right:0;top:0;display:flex;align-items:flex-start;height:100%}.sectionHeader__filterArea[_ngcontent-%COMP%]{bottom:2px;right:calc(var(--vw) * 5);position:absolute;left:0}.sectionHeader__godArea[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;right:0;bottom:50%;display:flex;align-items:flex-start}app-god-badge[_ngcontent-%COMP%]{user-select:auto;pointer-events:auto;margin-top:calc(var(--vh) * 1)}.godArea__label[_ngcontent-%COMP%]{color:#7192b0;padding-top:calc(var(--vh) * 1.1);padding-right:calc(var(--vw) * 2)}.cardsListingArea[_ngcontent-%COMP%]{overflow:hidden;overflow-y:auto;flex:1;padding:0 16px}app-card {cursor:pointer}app-cards-list {display:flex;}"]
            }), o
        })(), Aa = (() => {
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

        function Fa(o, r) {
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

        let Za = (() => {
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
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.TgZ(1, "header", 1)(2, "h3", 2), e._uU(3, " Click to Remove "), e.qZA()(), e.TgZ(4, "div", 3), e.YNc(5, Fa, 1, 4, "app-card2", 4), e.qZA()), 2 & t && (e.Q6J("closeButtonClickFn", n.closeOverlay), e.xp6(5), e.Q6J("ngForOf", n.allCards))
                },
                directives: [ye, l.sg, J],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.instructionsHeading__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.instructionsHeading__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{background:rgba(15,27,39,.96);position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-flow:column nowrap;z-index:1;}[_nghost-%COMP%]     app-modal-sidebar{padding-top:calc(var(--vh) * .5);width:calc(var(--vw) * 3)}.instructionsHeading[_ngcontent-%COMP%]{height:calc(var(--vh) * 4.4);padding-top:calc(var(--vh) * .5)}.instructionsHeading__title[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .3);padding-bottom:calc(var(--vh) * 1);line-height:1;text-align:center;color:#f6f6f6}.continueButton[_ngcontent-%COMP%]{top:calc(var(--vh) * 2);right:calc(var(--vw) * 1);position:absolute}.cardListing[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 2);padding-bottom:calc(var(--vh) * 4.7);padding-left:calc(var(--vw) * .3);padding-right:calc(var(--vw) * .3);overflow-y:auto;flex:1;grid-row-gap:calc(var(--vh) * 1);display:grid;grid-template-columns:repeat(auto-fit,minmax(calc(var(--vw) * 11.35),max-content));justify-content:center}.cardListing__card[_ngcontent-%COMP%]{transition:all .15s ease-in-out;transform-origin:50% 50%}.cardListing__card[_ngcontent-%COMP%]:hover{transform:scale(1.23);transform-origin:50% 30%}.cardListing__card--removed[_ngcontent-%COMP%]{display:none}.cardListing__card--disabled[_ngcontent-%COMP%]{filter:grayscale(1)}"]
            }), o
        })();
        const Da = function (o, r) {
            return {transform: o, filter: r}
        };

        function Ga(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card2", 5), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().clickCard(a)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = r.index, i = e.oxw();
                e.Q6J("translateY", i.cardTranslateY(n))("protoId", t.proto)("quality", t.quality)("ngStyle", e.WLB(4, Da, "translateY(" + i.cardTranslateY(n) + "px)", "brightness(" + i.cardBrightness(n) + ")"))
            }
        }

        function Ba(o, r) {
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

        let Ua = (() => {
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
                return new (t || o)(e.Y36(f.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-card-bundle"]],
                inputs: {bundle: "bundle", gameModeId: "gameModeId", gameModeType: "gameModeType"},
                outputs: {selectCards: "selectCards"},
                decls: 7,
                vars: 5,
                consts: [[1, "bundleContainer"], [1, "bundleLabel"], [1, "cardLayers", 3, "click"], ["class", "cardLayers__card", "appCardBundleHoverFX", "", 3, "translateY", "protoId", "quality", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "gameModeType", "gameModeId", "cards", "closeBundleChooser", "chooserSelectCards", 4, "ngIf"], ["appCardBundleHoverFX", "", 1, "cardLayers__card", 3, "translateY", "protoId", "quality", "ngStyle", "click"], [3, "gameModeType", "gameModeId", "cards", "closeBundleChooser", "chooserSelectCards"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0)(1, "div", 1), e._uU(2), e.ALo(3, "titlecase"), e.qZA(), e.TgZ(4, "div", 2), e.NdJ("click", function () {
                        return n.openBundleChooser();
                    }), e.YNc(5, Ga, 1, 7, "app-card2", 3), e.qZA()(), e.YNc(6, Ba, 1, 5, "app-card-chooser-overlay", 4)), 2 & t && (e.xp6(2), e.Oqu(e.lcZ(3, 3, n.bundle.header)), e.xp6(3), e.Q6J("ngForOf", n.bundle.cards), e.xp6(1), e.Q6J("ngIf", n.showCardChooserOverlay))
                },
                directives: [l.sg, J, Aa, l.PC, l.O5, Za],
                pipes: [l.rS],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.bundleLabel[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.bundleLabel[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}[_nghost-%COMP%]{display:block}.bundleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;position:relative}.bundleLabel[_ngcontent-%COMP%]{color:#7192b0;text-align:center}.cardLayers[_ngcontent-%COMP%]{width:calc(var(--vw) * 7.5);flex:1;position:relative}.cardLayers__card[_ngcontent-%COMP%]{position:absolute;left:0;top:0;cursor:pointer;width:100%}"],
                data: {
                    animation: [(0, C.X$)("slideIn", [(0, C.eR)(":enter", [(0, C.oB)({
                        opacity: 0,
                        transform: "translateY(25%)"
                    }), (0, C.jt)("150ms ease-in-out", (0, C.oB)({
                        opacity: 1,
                        transform: "translateY(0%)"
                    }))]), (0, C.eR)(":leave", [(0, C.jt)("150ms ease-in-out", (0, C.oB)({
                        opacity: 0,
                        transform: "translateY(25%)"
                    }))])])]
                }
            }), o
        })();

        function La(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-primary-hex-button", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clickDelete()
                }), e._uU(1, " Delete Deck\n"), e.qZA()
            }
        }

        function Ea(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "p", 8), e._uU(1, " Are you sure? "), e.TgZ(2, "span", 9), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().cancelDelete()
                }), e._uU(3, "Cancel"), e.qZA(), e.TgZ(4, "span", 10), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().confirmDelete()
                }), e._uU(5, "Yes, Delete"), e.qZA()()
            }
        }

        let Na = (() => {
            class o {
                constructor(t, n) {
                    this.akumaService = t, this.audioService = n, this.closeEditDeckOverlay = () => {
                    }, this.deckName = "", this.changeDeckName = new e.vpe, this.deleteDeck = new e.vpe, this.deckNameControl = new T.NI(""), this.confirmingDelete = !1, this.unsubscribe = new M.xQ, this.closeOverlay = () => {
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
                    this.deckNameControl.valueChanges.pipe((0, p.R)(this.unsubscribe), (0, Mt.b)(500), (0, pt.x)(), (0, b.b)(t => this.inputDeckName = t)).subscribe()
                }

                saveChanges() {
                    this.akumaService.postControlEvent("gu", "DeckEditor", "", "saveDeck", "Btn", "pressed"), this.changeDeckName.emit(this.inputDeckName)
                }

                playClickTinyV1() {
                    this.audioService.clickTinyV1.play()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.jt), e.Y36(f.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-edit-deck"]],
                inputs: {closeEditDeckOverlay: "closeEditDeckOverlay", deckName: "deckName"},
                outputs: {changeDeckName: "changeDeckName", deleteDeck: "deleteDeck"},
                decls: 9,
                vars: 5,
                consts: [[3, "closeButtonClickFn"], [1, "instructionsHeading"], [1, "instructionsHeading__title"], ["type", "primary", "data-test-id", "deck__saveButton", 1, "instructionsHeading__saveButton", 3, "click"], ["type", "search", "name", "deckNameControl", "data-test-id", "editDeckName", "maxlength", "15", 1, "form__textInput", 3, "ngModel", "formControl", "click", "ngModelChange"], ["class", "deleteDeck", "type", "primary", "data-test-id", "deleteDeck", 3, "click", 4, "ngIf"], ["class", "deleteConfirmation", 4, "ngIf"], ["type", "primary", "data-test-id", "deleteDeck", 1, "deleteDeck", 3, "click"], [1, "deleteConfirmation"], [1, "deleteConfirmation__cancel", 3, "click"], ["data-test-id", "deleteConfirmation__confirm", 1, "deleteConfirmation__confirm", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.TgZ(1, "header", 1)(2, "h3", 2), e._uU(3, " Edit Deck "), e.qZA(), e.TgZ(4, "gu-primary-hex-button", 3), e.NdJ("click", function () {
                        return n.saveChanges()
                    }), e._uU(5, "Save Changes"), e.qZA()(), e.TgZ(6, "input", 4), e.NdJ("click", function () {
                        return n.playClickTinyV1()
                    })("ngModelChange", function (a) {
                        return n.inputDeckName = a
                    }), e.qZA(), e.YNc(7, La, 2, 0, "gu-primary-hex-button", 5), e.YNc(8, Ea, 6, 0, "p", 6)), 2 & t && (e.Q6J("closeButtonClickFn", n.closeOverlay), e.xp6(6), e.Q6J("ngModel", n.inputDeckName)("formControl", n.deckNameControl), e.xp6(1), e.Q6J("ngIf", !n.confirmingDelete), e.xp6(1), e.Q6J("ngIf", n.confirmingDelete))
                },
                directives: [ye, T.Fj, T.nD, T.JJ, T.oH, l.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:'Open Sans', sans-serif;font-weight:400}.instructionsHeading__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.form__textInput[_ngcontent-%COMP%], .deleteConfirmation[_ngcontent-%COMP%]{font-family:'Open Sans', sans-serif}.instructionsHeading__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.deleteConfirmation[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.form__textInput[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.form__textInput[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{background:rgba(15, 27, 39, .96);position:absolute;top:0;left:0;right:0;bottom:0;padding-top:calc(var(--vh) * 2);display:flex;flex-flow:column nowrap;z-index:24;}[_nghost-%COMP%] app-modal-sidebar {padding-top:calc(var(--vh) * 2);width:calc(var(--vw) * 3)}.instructionsHeading[_ngcontent-%COMP%]{height:calc(var(--vh) * 4.4);padding-top:calc(var(--vh) * .5)}.instructionsHeading__title[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .3);padding-bottom:calc(var(--vh) * 1);line-height:1;text-align:center;color:#f6f6f6}.instructionsHeading__saveButton[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2.4);position:absolute;right:48px;top:0px}.form__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);text-align:center;margin:0 auto;margin-top:calc(var(--vh) * 5);width:calc(var(--vw) * 25);background:#182531;color:#fff;border:1px solid #0f1b27;border-radius:calc(var(--vh) * .4)}.form__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder {color:#fff}.deleteDeck[_ngcontent-%COMP%]{width:20%;text-align:center;margin:0 auto;margin-top:calc(var(--vh) * 5)}.deleteConfirmation[_ngcontent-%COMP%]{text-align:center;margin-top:calc(var(--vh) * 5)}.deleteConfirmation__confirm[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);color:var(--gu-red);cursor:pointer}.deleteConfirmation__cancel[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);color:var(--gu-blue);cursor:pointer}"]
            }), o
        })();

        function qa(o, r) {
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

        function Qa(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card-bundle", 13), e.NdJ("selectCards", function (i) {
                    return e.CHM(t), e.oxw(2).onSelectCards(i)
                }), e.qZA()
            }
            2 & o && e.Q6J("bundle", r.$implicit.value)
        }

        function Ra(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Qa, 1, 1, "app-card-bundle", 12), e.ALo(2, "keyvalue"), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", e.lcZ(2, 1, t.cardGrouping))
            }
        }

        function Ha(o, r) {
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

        let mn = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u) {
                    this.guGameService = t, this.groupingService = n, this.decksService = i, this.modalService = a, this.akumaService = s, this.router = c, this.audioService = d, this.utils = u, this.activeGrouping = this.groupingService.defaultGrouping, this.deckSelectMode = !1, this.forAI = !1, this.deckCards = [], this.selectCards = new e.vpe, this.showEditDeckOverlay = !1, this.closeEditDeckOverlay = () => {
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
                    this.groupings = this.groupingService.groupingsNoTribe.filter(t => t.groupingType !== F.Quality), this.groupingChange(this.activeGrouping)
                }

                groupingChange(t) {
                    this.activeGrouping = t, this.cardGrouping = this.groupingService.createCardGrouping(t), this.deckCards.forEach(n => this.groupingService.addToCardGrouping(this.cardGrouping, t, n))
                }

                onSelectCards(t) {
                    this.selectCards.emit(t)
                }

                logSelectDeck() {
                    this.guGameService.getGameMode$(this.gameModeID).pipe((0, w.q)(1)).subscribe(t => {
                        this.akumaService.postControlEvent("gu", "DeckEditor", "", "selectDeck", "Btn", "pressed", {
                            mode_name: t.name,
                            deck_name: this.deck.name
                        })
                    })
                }

                saveDeck() {
                    this.decksService.saveActiveDeck(this.deckSelectMode).pipe((0, w.q)(1), (0, b.b)(t => {
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
                return new (t || o)(e.Y36(ee.xV), e.Y36(ke), e.Y36(te.D), e.Y36(I.Z), e.Y36(_.jt), e.Y36(pe.F0), e.Y36(f.pk), e.Y36(De.F))
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
                decls: 15,
                vars: 8,
                consts: [[1, "sectionHeader"], [1, "sectionHeader__title"], ["class", "sectionHeader__groupings", 3, "displaySearch", "activeGrouping", "groupings", "groupingChange", 4, "ngIf"], [1, "sectionHeader__rightSideArea"], ["iconLigature", "stat_card", 1, "rightSideArea__icon"], ["data-test-id", "cardsCount", 1, "rightSideArea__cardsCount"], ["data-test-id", "rightSideArea__editButton", "type", "secondary", 1, "rightSideArea__editButton", 3, "disabled", "click"], ["data-test-id", "rightSideArea__saveButton", "type", "primary", 1, "rightSideArea__saveButton", 3, "disabled", "click"], [1, "cardBundlesListing"], [4, "ngIf"], [3, "closeEditDeckOverlay", "deckName", "deleteDeck", "changeDeckName", 4, "ngIf"], [1, "sectionHeader__groupings", 3, "displaySearch", "activeGrouping", "groupings", "groupingChange"], [3, "bundle", "selectCards", 4, "ngFor", "ngForOf"], [3, "bundle", "selectCards"], [3, "closeEditDeckOverlay", "deckName", "deleteDeck", "changeDeckName"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0)(1, "h3", 1), e._uU(2), e.qZA(), e.YNc(3, qa, 1, 3, "app-singular-active-filter-bar", 2), e.TgZ(4, "div", 3), e._UZ(5, "gu-icon", 4), e.TgZ(6, "div", 5), e._uU(7), e.qZA(), e.TgZ(8, "gu-primary-hex-button", 6), e.NdJ("click", function () {
                        return n.openEditDeckOverlay()
                    }), e._uU(9, "EDIT DECK"), e.qZA(), e.TgZ(10, "gu-primary-hex-button", 7), e.NdJ("click", function () {
                        return n.saveDeck()
                    }), e._uU(11), e.qZA()()(), e.TgZ(12, "div", 8), e.YNc(13, Ra, 3, 3, "ng-container", 9), e.qZA(), e.YNc(14, Ha, 1, 3, "app-edit-deck", 10)), 2 & t && (e.xp6(2), e.Oqu(n.deck.name), e.xp6(1), e.Q6J("ngIf", n.deckCards), e.xp6(4), e.hij("", n.deckCards.length, "/30 Cards"), e.xp6(1), e.Q6J("disabled", "starter" === n.deck.deck_type || "sealed_deck" === n.deck.deck_type), e.xp6(2), e.Q6J("disabled", !!n.deckSelectMode && 30 !== n.deckCards.length), e.xp6(1), e.Oqu(n.deckSelectMode ? "SELECT" : "SAVE DECK"), e.xp6(2), e.Q6J("ngIf", n.cardGrouping), e.xp6(1), e.Q6J("ngIf", n.showEditDeckOverlay))
                },
                directives: [l.O5, yt, l.sg, Ua, Na],
                pipes: [l.Nd],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}.sectionHeader__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.rightSideArea__cardsCount[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif}.sectionHeader__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.rightSideArea__cardsCount[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9);line-height:1.2;font-weight:600}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;position:relative}.sectionHeader[_ngcontent-%COMP%]{height:calc(var(--vh) * 5.5);margin-top:calc(var(--vh) * 2);position:relative;flex-shrink:0}.sectionHeader__groupings[_ngcontent-%COMP%]{position:absolute}.sectionHeader__title[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .3);padding-bottom:calc(var(--vh) * .8);line-height:1;position:absolute;width:100%;text-align:center;color:#f6f6f6;border-bottom:solid #1d2f41;border-width:calc(var(--vh) * .25)}.sectionHeader__rightSideArea[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .4);position:absolute;right:0;top:0;display:flex;align-items:flex-start;height:100%}.rightSideArea__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2);margin-right:calc(var(--vw) * .5);color:#f6f6f6;line-height:1}.rightSideArea__cardsCount[_ngcontent-%COMP%]{color:#f6f6f6}.rightSideArea__editButton[_ngcontent-%COMP%], .rightSideArea__saveButton[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * 1.5);position:relative}.cardBundlesListing[_ngcontent-%COMP%]{flex:1;display:grid;grid-template-columns:repeat(10, 1fr)}"],
                data: {
                    animation: [(0, C.X$)("slideIn", [(0, C.eR)(":enter", [(0, C.oB)({
                        opacity: 0,
                        transform: "translateY(25%)"
                    }), (0, C.jt)("150ms ease-in-out", (0, C.oB)({
                        opacity: 1,
                        transform: "translateY(0%)"
                    }))]), (0, C.eR)(":leave", [(0, C.jt)("150ms ease-in-out", (0, C.oB)({
                        opacity: 0,
                        transform: "translateY(25%)"
                    }))])])]
                }
            }), o
        })();

        function Ya(o, r) {
            1 & o && e._UZ(0, "app-rectangular-spinner", 5)
        }

        function Ja(o, r) {
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

        function $a(o, r) {
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

        function Wa(o, r) {
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

        let Ye = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u) {
                    this.decksService = t, this.cardsService = n, this.modalService = i, this.moduleConfigService = a, this.audioService = s, this.akumaService = c, this.cerberusModalService = d, this.deckCodeService = u, this.filters = _.iZ.standardCardFilters(m.nE.All, m.PE.AscID, "genesis", ""), this.availableFilters = [{
                        name: "Quality",
                        options: _.iZ.qualityOptions
                    }, {name: "Rarity", options: _.iZ.rarityOptions}, {
                        name: "Tribe",
                        options: _.iZ.tribeOptions
                    }, {name: "Mana", options: _.iZ.manaOptions}, {
                        name: "Set",
                        options: _.iZ.setOptions
                    }], this.loading = !1, this.deckSelectMode = !1, this.unsubscribe = new M.xQ, this.protoCards = [], this.deckCardIds = [], this.Flags = _.vU, this.destroyModal = () => {
                        const v = this.cerberusModalService.open(be.am, {
                            defaultStylings: !1,
                            centered: !0
                        }).componentInstance;
                        v.title = "Please confirm";
                        v.text = "You will lose any unsaved changes. Are you sure you want to continue?";
                        v.secondaryCtaText = "Save changes";
                        v.primaryCtaText = "Continue";
                        v.onPrimaryCtaClick = () => {
                            this.modalService.destroyTopModal();
                            this.akumaService.postControlEvent("gu", "MyDecks", "", "close", "Btn", "pressed");
                        };
                        v.onSecondaryCtaClick = () => {
                            this.decksService.saveActiveDeck().subscribe();
                            this.modalService.destroyTopModal();
                            this.akumaService.postControlEvent("gu", "MyDecks", "", "close", "Btn", "pressed");
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
                    this.decksService.deckSelectMode$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => {
                        this.deckSelectMode = t.deckSelect, this.gameModeID = t.gameModeID, this.forAI = t.forAI
                    })).subscribe()
                }

                initDecks() {
                    this.decksService.activeDeckChange$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => null !== t), (0, b.b)(t => this.onActiveDeckChange(t))).subscribe()
                }

                onActiveDeckChange(t) {
                    switch (t.type) {
                        case le.u4.Change:
                            this.selectNewDeck(t.deck);
                            break;
                        case le.u4.CardLimit:
                        case le.u4.DeckLimit:
                            break;
                        default:
                            this.selectNewDeck(t.deck)
                    }
                }

                selectNewDeck(t) {
                    this.activeDeck = t, this.god = t.god, this.deckCards = [...t.items], this.deckCardIds = [...t.items.map(n => n.id)]
                }

                initCards() {
                    this.loading = !0, (0, Z.aj)([this.cardsService.inventoryCards$, this.cardsService.protoCards$]).pipe((0, p.R)(this.unsubscribe), (0, b.b)(([t, n]) => {
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
                    this.cerberusModalService.open(ar, {
                        defaultStylings: !1,
                        centered: !0
                    }).componentInstance.deckCode = i
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(te.D), e.Y36(_.dK), e.Y36(I.Z), e.Y36(_.LE), e.Y36(f.pk), e.Y36(_.jt), e.Y36(U.Qz), e.Y36(dn.R))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-deck-builder"]],
                decls: 5,
                vars: 5,
                consts: [[3, "closeButtonClickFn"], ["class", "spinner", 4, "ngIf"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "external_link", "class", "exportCta", 3, "disabled", "click", 4, "featureFlagIf"], ["class", "card-selection", 3, "protoCards", "inventoryCards", "god", "filterCardIds", "customInventoryCardsMap", "selectCardId", 4, "ngIf"], [3, "deckCards", "deckSelectMode", "gameModeID", "deck", "forAI", "selectCards", 4, "ngIf"], [1, "spinner"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "external_link", 1, "exportCta", 3, "disabled", "click"], [1, "card-selection", 3, "protoCards", "inventoryCards", "god", "filterCardIds", "customInventoryCardsMap", "selectCardId"], [3, "deckCards", "deckSelectMode", "gameModeID", "deck", "forAI", "selectCards"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.YNc(1, Ya, 1, 0, "app-rectangular-spinner", 1), e.YNc(2, Ja, 2, 1, "gu-plain-square-button", 2), e.YNc(3, $a, 1, 5, "app-cards-list", 3), e.YNc(4, Wa, 1, 5, "app-active-deck", 4)), 2 & t && (e.Q6J("closeButtonClickFn", n.destroyModal), e.xp6(1), e.Q6J("ngIf", n.loading), e.xp6(1), e.Q6J("featureFlagIf", n.Flags.deckCodesEnabled), e.xp6(1), e.Q6J("ngIf", !n.loading), e.xp6(1), e.Q6J("ngIf", n.activeDeck))
                },
                directives: [ye, l.O5, it, ot.w, Tt, mn],
                styles: ["[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;padding:0;padding-top:calc(var(--vh) * 4.5);height:100%}app-cards-list[_ngcontent-%COMP%]{flex:1}app-active-deck[_ngcontent-%COMP%]{height:calc(var(--vh) * 37);padding: 0 48px;border-top: solid 1px var(--gu-blue);box-shadow: 0px 0px 8px 4px rgb(0 0 0 / 50%), 0 0px 8px 0px rgb(0 0 0 / 50%);}.spinner[_ngcontent-%COMP%]{margin:auto}.exportCta[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 3);right:calc(var(--vh) * 17)}"]
            }), o
        })();
        var It = g(37371), fn = g(8611), za = g(5969);

        function ja(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "header", 2)(2, "h1", 3), e._uU(3, " CONNECT YOUR WALLET "), e.qZA(), e.TgZ(4, "div", 4), e._uU(5, " We want to make sure your cards get to the right wallet. Please connect your wallet via the Gods Unchained website. "), e.qZA(), e.TgZ(6, "gu-primary-hex-button", 5), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().linkWallet()
                }), e._uU(7, "LINK WALLET"), e.qZA()(), e.BQk()
            }
        }

        function Va(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "header", 2)(2, "h1", 3), e._uU(3, " CONFIRM YOUR WALLET "), e.qZA(), e.TgZ(4, "div", 4), e._uU(5, " We want to make sure your cards get to the right wallet. Please confirm this is the right address to send cards to. "), e.qZA(), e.TgZ(6, "div", 6), e._uU(7), e.qZA(), e.TgZ(8, "gu-primary-hex-button", 5), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().confirmWallet()
                }), e._uU(9, "LOOKS GOOD"), e.qZA(), e.TgZ(10, "a", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().linkWallet()
                }), e._uU(11, "Link new wallet"), e.qZA()(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(7), e.hij(" ", t.playerWallets[0], " ")
            }
        }

        function Xa(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "header", 2)(2, "h1", 3), e._uU(3, " CONNECT YOUR WALLET "), e.qZA(), e.TgZ(4, "div", 4), e._uU(5, " It looks like you have more then one wallet linked to your account. To ensure your new card goes to the right place, please confirm which wallet you want linked. "), e.qZA(), e.TgZ(6, "gu-primary-hex-button", 5), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().selectWallet()
                }), e._uU(7, "SELECT WALLET"), e.qZA()(), e.BQk()
            }
        }

        let Cn = (() => {
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
                    (0, Z.aj)([this.forgeWalletService.playerWallets$, this.forgeWalletService.selectedWallet$]).pipe((0, p.R)(this.unsubscribe)).subscribe(([t, n]) => {
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
                return new (t || o)(e.Y36(I.Z), e.Y36(Pe.d), e.Y36(za.g))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-wallet-modal"]],
                decls: 4,
                vars: 3,
                consts: [[1, "gradientOverlay"], [4, "ngIf"], [1, "header"], [1, "header__title"], [1, "header__text"], ["type", "primary", 1, "okButton", 3, "click"], [1, "header__address"], [1, "linkWallet", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "div", 0), e.YNc(1, ja, 8, 0, "ng-container", 1), e.YNc(2, Va, 12, 1, "ng-container", 1), e.YNc(3, Xa, 8, 0, "ng-container", 1)), 2 & t && (e.xp6(1), e.Q6J("ngIf", !n.playerWallets || 0 === n.playerWallets.length), e.xp6(1), e.Q6J("ngIf", n.playerWallets && 1 === n.playerWallets.length), e.xp6(1), e.Q6J("ngIf", n.playerWallets && n.playerWallets.length > 1))
                },
                directives: [l.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.header__title[_ngcontent-%COMP%], .header__subtitle[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.header__text[_ngcontent-%COMP%], .header__address[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.header__subtitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.header__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.header__address[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.header__address[_ngcontent-%COMP%]{line-height:1.4}.header__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.header__text[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;margin:auto;position:relative;margin-top:calc(var(--vh) * 14);width:calc(var(--vw) * 50);border:2px solid #182531;background-image:url(/gu-assets/images/backgrounds/trader-overlay-bg.webp);background-size:cover;background-position:center}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.gradientOverlay[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;border:1px solid #182531;background:radial-gradient(ellipse at center,rgba(12,22,32,0) -80%,#0c1620 70%)}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;padding-left:calc(var(--vw) * 8);padding-right:calc(var(--vw) * 8);padding-top:calc(var(--vh) * 4);padding-bottom:calc(var(--vh) * 4)}.header__title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:calc(var(--vh) * 2)}.header__subtitle[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1);padding-bottom:calc(var(--vh) * 1)}.header__text[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 2);text-align:center}.header__address[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 2);padding-top:calc(var(--vh) * 2);text-align:center}.okButton[_ngcontent-%COMP%]{width:100px;margin-top:calc(var(--vh) * 4);margin-bottom:calc(var(--vh) * 3)}.linkWallet[_ngcontent-%COMP%]{color:#affaed;cursor:pointer}"]
            }), o
        })(), vn = (() => {
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
                return new (t || o)(e.Y36(I.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-flux-info-modal"]],
                decls: 8,
                vars: 0,
                consts: [[1, "header"], [1, "header__title"], [1, "header__text"], ["src", "/gu-assets/images/misc/gu-fusing-info@2x.webp", "alt", "Fusing information chart.", 1, "fuseImage"], ["size", "large", "type", "primary", 1, "okButton", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0)(1, "h1", 1), e._uU(2, " WELCOME TO THE FORGE "), e.qZA(), e.TgZ(3, "div", 2), e._uU(4, " Fuse multiple cards to create one of higher quality "), e.qZA()(), e._UZ(5, "img", 3), e.TgZ(6, "gu-primary-hex-button", 4), e.NdJ("click", function () {
                        return n.onHide()
                    }), e._uU(7, " START FUSING "), e.qZA())
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.header__title[_ngcontent-%COMP%], .header__subtitle[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.header__text[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.header__subtitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.header__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.header__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.header__text[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;margin:auto;position:relative;margin-top:calc(var(--vh) * 3);width:calc(var(--vw) * 60);height:calc(var(--vh) * 85);border:2px solid #182531;background:rgba(15,27,39,.6)}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;padding-left:calc(var(--vw) * 2);padding-right:calc(var(--vw) * 2)}.header__title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;padding-top:calc(var(--vh) * 1);padding-bottom:calc(var(--vh) * 2)}.header__subtitle[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1);padding-bottom:calc(var(--vh) * 1)}.header__text[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 2);text-align:center}.fuseImage[_ngcontent-%COMP%]{height:calc(var(--vh) * 57);margin-left:calc(var(--vw) * -7.43)}.okButton[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:calc(var(--vh) * 4)}"]
            }), o
        })();
        const Ka = ["groupsContainer"];

        function es(o, r) {
            1 & o && e._UZ(0, "gu-loading-spinner", 11)
        }

        function ts(o, r) {
            if (1 & o && e._UZ(0, "app-inventory-cards", 12), 2 & o) {
                const t = e.oxw();
                e.Q6J("showBundle", !0)("expandedViewMode", t.expandedViewMode)("columns", 4)("showCardCounts", !1)("showUnowned", !1)("displayedGroupedProtos", t.displayedGroupedProtos)("filterCardIds", t.filterCardIds)
            }
        }

        function ns(o, r) {
            if (1 & o && e._UZ(0, "app-group-quality", 13), 2 & o) {
                const t = e.oxw();
                e.Q6J("columns", 4)("loading", t.loading)("showCardCounts", !1)("expandedViewMode", t.expandedViewMode)("showUnowned", !1)("displayedGroupedQualities", t.displayedGroupedQualities)("filterCardIds", t.filterCardIds)
            }
        }

        let os = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.resizeService = t, this.groupingService = n, this.filterService = i, this.modalService = a, this.cardGridService = s, this.activeGrouping = this.groupingService.defaultGrouping, this.filterCardIds = [], this.selectCardId = new e.vpe, this.GroupingType = F, this.selectedHeaders = [], this.showUnowned = !0, this.loading = !0, this.activeSort = m.PE.AscMana, this.sortOptions = [new B("Mana", "filter_mana", m.PE.AscMana, m.PE.DescMana), new B("Health", "filter_health", m.PE.AscHealth, m.PE.DescHealth), new B("Attack", "filter_attack", m.PE.AscAttack, m.PE.DescAttack), new B("Tribe", "filter_tribe", m.PE.AscTribe, m.PE.DescTribe), new B("Type", "filter_type", m.PE.AscType, m.PE.DescType), new B("God", "filter_god", m.PE.AscGod, m.PE.DescGod), new B("Rarity", "filter_rarity", m.PE.AscRarity, m.PE.DescRarity), new B("Set", "filter_set", m.PE.AscSet, m.PE.DescSet)], this.allGroupedProtos = [], this.allGroupedQualities = [], this.unsubscribe = new M.xQ, this.watchForResize()
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
                    this.resizeService.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({vh: t}) => this.vh = t)).subscribe()
                }

                groupingChange(t, n = !0) {
                    this.sortCards(this.activeSort), this.selectedHeaders = n ? [] : this.selectedHeaders, this.activeGrouping = t, t.groupingType === F.Quality ? (this.protoGrouping = null, this.qualityGrouping = this.groupingService.groupQualities(this.protoCards, t, this.god), this.filterCardGroupingQuality()) : (this.qualityGrouping = null, this.protoGrouping = this.groupingService.groupProtos(this.protoCards, t, this.god), this.filterCardGrouping()), this.loading = !1
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
                    if (this.activeGrouping.groupingType === F.Quality) return void this.loadGroupQuality();
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
                    if (this.expandedViewMode === R.SELLING) n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "genesis" === a.set)})); else {
                        if (this.expandedViewMode !== R.FORGING) return t;
                        n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "core" === a.set)}))
                    }
                    return n
                }

                fluxInfoModal() {
                    this.modalService.createModal(vn, null, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(ke), e.Y36(_.iZ), e.Y36(I.Z), e.Y36(He))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-card-list"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Ka, 7), e.Gf(J, 5)), 2 & t) {
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
                consts: [[1, "sectionHeader"], [1, "sectionHeader__titleContainer"], [1, "sectionHeader__title"], ["iconLigature", "help", "fillColor", "colors.light.700", 1, "sectionHeader__infoButton", 3, "click"], [1, "sectionHeader__groupings", 3, "displaySearch", "searchChange"], [1, "sectionHeader__filterArea", 3, "showFilters", "sortOptions", "selectedHeaders", "cardGrouping", "unownedCheckboxVisible", "sortChange", "groupingHeaderChange"], ["class", "loadingSpinner", 4, "ngIf"], ["infiniteScroll", "", "data-test-id", "cardsListingForge", 1, "cardsListingArea", 3, "scrollWindow", "scrolled"], ["groupsContainer", ""], ["mode", "proto", 3, "showBundle", "expandedViewMode", "columns", "showCardCounts", "showUnowned", "displayedGroupedProtos", "filterCardIds", 4, "ngIf"], [3, "columns", "loading", "showCardCounts", "expandedViewMode", "showUnowned", "displayedGroupedQualities", "filterCardIds", 4, "ngIf"], [1, "loadingSpinner"], ["mode", "proto", 3, "showBundle", "expandedViewMode", "columns", "showCardCounts", "showUnowned", "displayedGroupedProtos", "filterCardIds"], [3, "columns", "loading", "showCardCounts", "expandedViewMode", "showUnowned", "displayedGroupedQualities", "filterCardIds"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0)(1, "div", 1)(2, "h3", 2), e._uU(3), e.qZA(), e.TgZ(4, "gu-icon", 3), e.NdJ("click", function () {
                        return n.fluxInfoModal()
                    }), e.qZA()(), e.TgZ(5, "app-singular-active-filter-bar", 4), e.NdJ("searchChange", function (a) {
                        return n.searchChange(a)
                    }), e.qZA(), e.TgZ(6, "app-filter-sort-bar", 5), e.NdJ("sortChange", function (a) {
                        return n.sortChange(a)
                    })("groupingHeaderChange", function (a) {
                        return n.groupingHeaderChange(a)
                    }), e.qZA()(), e.YNc(7, es, 1, 0, "gu-loading-spinner", 6), e.TgZ(8, "section", 7, 8), e.NdJ("scrolled", function () {
                        return n.loadGroup()
                    }), e.YNc(10, ts, 1, 7, "app-inventory-cards", 9), e.YNc(11, ns, 1, 7, "app-group-quality", 10), e.qZA()), 2 & t && (e.xp6(3), e.Oqu(n.title), e.xp6(2), e.Q6J("displaySearch", !0), e.xp6(1), e.Q6J("showFilters", !1)("sortOptions", n.sortOptions)("selectedHeaders", n.selectedHeaders)("cardGrouping", n.protoGrouping)("unownedCheckboxVisible", !1), e.xp6(1), e.Q6J("ngIf", n.loading), e.xp6(1), e.Q6J("scrollWindow", !1), e.xp6(2), e.Q6J("ngIf", n.activeGrouping.groupingType !== n.GroupingType.Quality), e.xp6(1), e.Q6J("ngIf", n.activeGrouping.groupingType === n.GroupingType.Quality))
                },
                directives: [yt, wt, l.O5, gt, Pt, St],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.sectionHeader__infoButton[_ngcontent-%COMP%], .sectionHeader__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.godArea__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.sectionHeader__infoButton[_ngcontent-%COMP%], .sectionHeader__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.godArea__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}.sectionHeader[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 1);padding-right:calc(var(--vh) * 1);padding-bottom:calc(var(--vh) * 1);padding-left:calc(var(--vh) * 2);margin-bottom:calc(var(--vh) * 3);background:linear-gradient(to right,#1d2f41 0%,#0f1b27 100%);position:relative;display:flex;justify-content:space-between;align-items:center;border:calc(var(--vh) * .15) solid #1d2f41}.sectionHeader__titleContainer[_ngcontent-%COMP%]{display:flex;align-items:center}.sectionHeader__title[_ngcontent-%COMP%]{text-transform:uppercase;line-height:1;background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.sectionHeader__infoButton[_ngcontent-%COMP%]{margin-left:calc(var(--vh) * .8);cursor:pointer}.sectionHeader__godArea[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;right:0;top:0;display:flex;align-items:flex-start}app-god-badge[_ngcontent-%COMP%]{user-select:auto;pointer-events:auto;margin-top:calc(var(--vh) * 1)}.godArea__label[_ngcontent-%COMP%]{color:#7192b0;padding-top:calc(var(--vh) * 1.1);padding-right:calc(var(--vw) * 2)}.cardsListingArea[_ngcontent-%COMP%]{overflow:hidden;overflow-y:auto;flex:1}.loadingSpinner[_ngcontent-%COMP%]{margin:0 auto}  app-card{cursor:pointer}"]
            }), o
        })();
        var is = g(40537), bn = g(77518), rs = g(52909), xn = g(47760);
        let At = (() => {
            class o {
                transform(t, n = 6) {
                    try {
                        const i = rs.O$.from(t);
                        return (0, xn.Fn)(Number.parseFloat(Number((0, xn.dF)(i)).toFixed(n)))
                    } catch (i) {
                        return "0"
                    }
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275pipe = e.Yjl({name: "formatEther", type: o, pure: !0}), o
        })();
        var as = g(76638);

        function ss(o, r) {
            1 & o && (e.TgZ(0, "div", 12)(1, "gu-body-text", 13), e._uU(2, " There\u2019s nothing here! "), e.qZA(), e.TgZ(3, "gu-body-text", 14), e._uU(4, " Start fusing then check back again. "), e.qZA()())
        }

        function cs(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "gu-simple-text-button", 33), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw(3).openForgeWebsite(i.request_id)
                }), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(3);
                e.xp6(1), e.hYB("href", "", n.environment.guWebsite, "/fusing-next-step?request_id=", t.request_id, "")
            }
        }

        function ls(o, r) {
            if (1 & o && (e.TgZ(0, "a", 34)(1, "gu-body-text", 28), e._uU(2), e.qZA()()), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(3);
                e.hYB("href", "", n.environment.GUCollectioimmutableXMarketplaceUrlGUInventory, "/", t.target_assets[0].id, "", e.LSH), e.xp6(2), e.hij(" ", t.target_assets[0].id, " ")
            }
        }

        const ds = function (o, r) {
            return {tableSection__rowEven: o, tableSection__rowOdd: r}
        };

        function gs(o, r) {
            if (1 & o && (e.TgZ(0, "tr", 24)(1, "td", 25)(2, "gu-body-text", 26), e._uU(3), e.ALo(4, "date"), e.qZA(), e.TgZ(5, "gu-body-text", 27), e._uU(6), e.ALo(7, "date"), e.qZA()(), e.TgZ(8, "td", 25)(9, "gu-body-text", 28), e._uU(10), e.ALo(11, "titlecase"), e.YNc(12, cs, 2, 2, "ng-container", 8), e.qZA()(), e.TgZ(13, "td", 25)(14, "gu-body-text", 28), e._uU(15), e.qZA()(), e.TgZ(16, "td", 25), e.YNc(17, ls, 3, 3, "a", 29), e.qZA(), e.TgZ(18, "td", 25)(19, "gu-body-text", 28), e._uU(20), e.ALo(21, "titlecase"), e.qZA()(), e.TgZ(22, "td", 25)(23, "gu-body-text", 30), e._uU(24), e.ALo(25, "numberAbbreviation"), e._UZ(26, "gu-icon", 31), e._uU(27), e.ALo(28, "formatEther"), e._UZ(29, "gu-icon", 32), e.qZA()(), e.TgZ(30, "td", 25)(31, "gu-body-text", 28), e._uU(32), e.ALo(33, "addressTruncate"), e.qZA()()()), 2 & o) {
                const t = r.$implicit, n = r.even, i = e.oxw(3);
                e.Q6J("ngClass", e.WLB(29, ds, n, !n)), e.xp6(3), e.hij(" ", e.xi3(4, 12, t.created_at, "dd/MM/YYYY"), " "), e.xp6(3), e.hij(" ", e.xi3(7, 15, t.created_at, "h:mm:ss"), " "), e.xp6(4), e.hij(" ", e.lcZ(11, 18, i.ForgeStatusMapping[t.status]), "\xa0 "), e.xp6(2), e.Q6J("ngIf", t.status !== i.ForgeStatus.COMPLETED && t.status !== i.ForgeStatus.VALIDATING_PAYMENT), e.xp6(3), e.hij(" ", t.request_id, " "), e.xp6(2), e.Q6J("ngIf", (null == t.target_assets[0] ? null : t.target_assets[0].id) > 0), e.xp6(3), e.AsE(" ", t.target_assets[0].name, " - ", e.lcZ(21, 20, i.QualityMapping[t.target_assets[0].quality]), " "), e.xp6(4), e.hij(" ", e.xi3(25, 22, t.flux_amount, 2), " "), e.xp6(3), e.hij(" \xa0 ", e.lcZ(28, 25, t.token_amount), " "), e.xp6(5), e.hij(" ", e.lcZ(33, 27, t.address), " ")
            }
        }

        function us(o, r) {
            if (1 & o && (e.TgZ(0, "table", 15)(1, "thead")(2, "tr")(3, "th", 16)(4, "gu-body-text", 17), e._uU(5, " Time (UTC) "), e.qZA()(), e.TgZ(6, "th", 16)(7, "div", 18)(8, "gu-body-text", 17), e._uU(9, " Status "), e.qZA(), e._uU(10, " \xa0 "), e.TgZ(11, "app-tooltip", 19), e._UZ(12, "gu-icon", 20), e.qZA()()(), e.TgZ(13, "th", 16)(14, "div", 18)(15, "gu-body-text", 17), e._uU(16, " Fusing ID "), e.qZA(), e._uU(17, " \xa0 "), e.TgZ(18, "app-tooltip", 21), e._UZ(19, "gu-icon", 20), e.qZA()()(), e.TgZ(20, "th", 16)(21, "div", 18)(22, "gu-body-text", 17), e._uU(23, " Card ID "), e.qZA(), e._uU(24, " \xa0 "), e.TgZ(25, "app-tooltip", 22), e._UZ(26, "gu-icon", 20), e.qZA()()(), e.TgZ(27, "th", 16)(28, "gu-body-text", 17), e._uU(29, " Card Fused "), e.qZA()(), e.TgZ(30, "th", 16)(31, "gu-body-text", 17), e._uU(32, " Cost "), e.qZA()(), e.TgZ(33, "th", 16)(34, "gu-body-text", 17), e._uU(35, " Wallet "), e.qZA()()()(), e.TgZ(36, "tbody"), e.YNc(37, gs, 34, 32, "tr", 23), e.qZA()()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(37), e.Q6J("ngForOf", t.items)
            }
        }

        function ps(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9), e.YNc(1, ss, 5, 0, "div", 10), e.YNc(2, us, 38, 1, "table", 11), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", 0 === t.items.length), e.xp6(1), e.Q6J("ngIf", t.items.length > 0)
            }
        }

        function _s(o, r) {
            1 & o && e._UZ(0, "gu-loading-spinner")
        }

        let hs = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.authService = t, this.fusingService = n, this.modalService = i, this.environment = a, this.window = s, this.unsubscribe = new M.xQ, this.items = [], this.fusingRequestResponseLoading = !0
                }

                get QualityMapping() {
                    return m.Xl
                }

                get ForgeStatus() {
                    return bn.Og
                }

                get ForgeStatusMapping() {
                    return bn.oS
                }

                ngOnInit() {
                    const t = this.authService.getUserId();
                    this.fusingRequestResponseLoading = !0, this.fusingService.getFusingLatestsRequests(t).pipe((0, p.R)(this.unsubscribe), (0, is.x)(() => {
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

                openForgeWebsite(t) {
                    this.window.open(`${this.environment.guWebsite}/fusing-next-step?request_id=${t}`)
                }

                openImxMarket(t) {
                    this.window.open(`${this.environment.immutableXMarketplaceUrl}/inventory/${t}`)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(f.mI), e.Y36(_.pH), e.Y36(I.Z), e.Y36(f.Ho), e.Y36(Window))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-fusing-history-modal"]],
                decls: 11,
                vars: 2,
                consts: [["fillColor", "colors.light.500", "iconLigature", "close_x", 1, "closeModal", 3, "click"], [1, "wrapper"], [1, "header"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", 1, "header__title"], ["fillColor", "colors.light.300", 1, "header__subtitle"], ["href", "https://market.immutable.com/inventory", "text", "here", "fillColor", "colors.apocyan.500"], ["iconLigature", "leave_website"], ["class", "tableSection", 4, "ngIf"], [4, "ngIf"], [1, "tableSection"], ["class", "tableSection_noItem", 4, "ngIf"], ["class", "tableSection__table", 4, "ngIf"], [1, "tableSection_noItem"], ["fillColor", "colors.light.100", "size", "large", "fontWeight", "bold"], ["fillColor", "colors.light.100"], [1, "tableSection__table"], [1, "tableSection__tableHeader"], ["fontWeight", "bold", "fillColor", "colors.light.500"], [1, "tableSection__tableHeaderContent"], ["title", "Status of your transaction."], ["fillColor", "colors.light.500", "iconLigature", "help", 1, "tableSection__tableHeaderIcon"], ["title", "Use this ID when you contact support."], ["title", "Use this ID to find your asset on Immutable X."], ["class", "tableSection__row tableSection__rowEven", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "tableSection__row", "tableSection__rowEven", 3, "ngClass"], [1, "tableSection__cell"], ["fontWeight", "bold", "fillColor", "colors.light.500", 1, "tableSection__cellDate"], ["size", "help", "fillColor", "colors.light.500"], ["fillColor", "colors.gunmetal.900"], [3, "href", 4, "ngIf"], ["fillColor", "colors.gunmetal.900", 1, "tableSection_cellContentCost"], ["iconLigature", "flux_symbol", "fillColor", "colors.dark.300"], ["iconLigature", "GUToken", "fillColor", "colors.gold.500"], ["text", "(Retry?)", "fillColor", "colors.gunmetal.900", 1, "tableSection__cellFusingId", 3, "href", "click"], [3, "href"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.onHide()
                    }), e.qZA(), e.TgZ(1, "div", 1)(2, "header", 2)(3, "gu-heading-text", 3), e._uU(4, " Fusing History "), e.qZA(), e.TgZ(5, "gu-body-text", 4), e._uU(6, " A list of your past 60 fuses and their status. See your Immutable X inventory "), e.TgZ(7, "gu-simple-text-button", 5), e._UZ(8, "gu-icon", 6), e.qZA()()(), e.YNc(9, ps, 3, 2, "div", 7), e.qZA(), e.YNc(10, _s, 1, 0, "gu-loading-spinner", 8)), 2 & t && (e.xp6(9), e.Q6J("ngIf", !n.fusingRequestResponseLoading), e.xp6(1), e.Q6J("ngIf", n.fusingRequestResponseLoading))
                },
                directives: [l.O5, Ze.K, l.sg, l.mk],
                pipes: [l.uU, l.rS, Me.XX, At, as.A],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.closeModal[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.closeModal[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;margin:auto;position:relative;padding-top:calc(var(--vh) * 3.5);padding-bottom:calc(var(--vh) * 4);width:calc(var(--vw) * 80);height:calc(var(--vh) * 85);border:2px solid #1D2F41;background:#0F1B27}.closeModal[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 1.4);right:calc(var(--vh) * 1.4);cursor:pointer}.wrapper[_ngcontent-%COMP%]{overflow-y:auto}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%;padding-left:calc(var(--vw) * 2);padding-right:calc(var(--vw) * 2);margin-bottom:calc(var(--vw) * 2)}.header__title[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * .8)}.tableSection[_ngcontent-%COMP%]{width:100%;padding-left:calc(var(--vw) * 3);padding-right:calc(var(--vw) * 3);display:flex;align-items:center;justify-content:center}.tableSection_noItem[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;display:flex;flex-direction:column;align-items:center}.tableSection__table[_ngcontent-%COMP%]{border-spacing:0;border-color:#1d2f41;width:100%}.tableSection__tableHeader[_ngcontent-%COMP%]{background-color:#1d2f41;padding-top:calc(var(--vw) * 1);padding-bottom:calc(var(--vw) * 1)}.tableSection__tableHeaderContent[_ngcontent-%COMP%]{display:flex;justify-content:center}.tableSection__tableHeaderIcon[_ngcontent-%COMP%]{cursor:pointer}.tableSection__rowEven[_ngcontent-%COMP%]{background-color:#f6f6f6}.tableSection__rowOdd[_ngcontent-%COMP%]{background-color:#d7d7d7}.tableSection__cell[_ngcontent-%COMP%]{width:calc(var(--vw) * 14.5);padding:10px;border-right:1px solid #464646;border-top:1px solid #464646;text-align:center}.tableSection__cell[_ngcontent-%COMP%]:first-child{background-color:#1d2f41;border-left:1px solid #464646}.tableSection__cellDate[_ngcontent-%COMP%]{display:block}.tableSection__cellFusingId[_ngcontent-%COMP%]{cursor:pointer}.tableSection__cellFusingId[_ngcontent-%COMP%]:hover{color:#0f1b27;border-color:#0f1b27}.tableSection_cellContentCost[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]
            }), o
        })();
        var ms = g(77535);
        let fs = (() => {
            class o {
                constructor(t, n) {
                    this.moduleConfigService = t, this.http = n, this.moduleConfig$ = this.moduleConfigService.loadConfigurations()
                }

                getRegisteredUserStarkKeys(t) {
                    return this.moduleConfig$.pipe((0, _e.w)(({imxApiHost: n}) => this.http.get(`${n}/users/${t}`)))
                }

                getUserListOfBalance(t, n = "GODS") {
                    return this.moduleConfig$.pipe((0, _e.w)(({imxApiHostV2: i}) => this.http.get(`${i}/balances/${t}`, {params: {symbols: n}})))
                }

                getBalance(t) {
                    return this.moduleConfig$.pipe((0, _e.w)(({imxApiHostV2: n}) => this.http.get(`${n}/balances/${t}`, {})), (0, O.U)(n => n.result))
                }

                fetchImxTokenInfo() {
                    return this.moduleConfig$.pipe((0, _e.w)(({imxApiHost: t}) => this.http.get(`${t}/tokens`)), (0, O.U)(t => t.result))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(ms.L), e.LFG(an.eN))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac, providedIn: "root"}), o
        })(), Cs = (() => {
            class o {
                constructor(t) {
                    this.imxApiService = t, this._godsInfo$ = new H.X(null), this.dataStore = {godsInfo: void 0}
                }

                get godsInfo$() {
                    return this._godsInfo$.asObservable()
                }

                fetchGodsInfo(t) {
                    this.imxApiService.getUserListOfBalance(t).pipe((0, w.q)(1)).subscribe(n => {
                        const {result: [i]} = n;
                        this.emitGodsInfo(i)
                    }, () => {
                        this.emitGodsInfo()
                    })
                }

                emitGodsInfo(t = {symbol: "GODS", balance: "0", preparing_withdrawal: "0", withdrawable: "0"}) {
                    this.dataStore.godsInfo = t, this._godsInfo$.next(Object.assign({}, this.dataStore.godsInfo))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(fs))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac, providedIn: "root"}), o
        })(), wn = (() => {
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
                    this.forgeWalletService.playerWallets$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.addresses = this.getSelectOptions(t)
                    }), this.forgeWalletService.selectedWallet$.pipe((0, p.R)(this.unsubscribe), (0, w.q)(1)).subscribe(t => {
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
                return new (t || o)(e.Y36(Pe.d), e.Y36(Me.AZ))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-select-wallet-dropdown"]],
                inputs: {truncateAddress: "truncateAddress"},
                features: [e._Bn([Me.AZ])],
                decls: 1,
                vars: 2,
                consts: [["theme", "gunmetal", "placeholder", "Select Wallet", "stretch", "true", 1, "select", 3, "options", "value", "change"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-select", 0), e.NdJ("change", function (a) {
                        return n.onDropdownSelect(a)
                    }), e.qZA()), 2 & t && e.Q6J("options", n.addresses)("value", n.selectedWallet)
                },
                styles: ["[_nghost-%COMP%]{height:40px}"]
            }), o
        })();

        function vs(o, r) {
            1 & o && (e.ynx(0), e.TgZ(1, "gu-body-text"), e._uU(2, "Wallet:"), e.qZA(), e._UZ(3, "cerberus-select-wallet-dropdown", 11), e.BQk())
        }

        let bs = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.fluxService = t, this.imxBalanceService = n, this.forgeWalletService = i, this.modalService = a, this.unsubscribe = new M.xQ, this.fluxBalance = 0
                }

                ngOnInit() {
                    this.initFluxBalance(), this.initGodBalance(), this.initWalletAddress()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initFluxBalance() {
                    this.fluxService.fetchFluxInfo(), this.fluxService.fluxInfo$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => !!t)).subscribe(t => {
                        this.fluxBalance = t.flux_available
                    })
                }

                initGodBalance() {
                    this.imxBalanceService.godsInfo$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => !!t)).subscribe(t => {
                        this.godsBalance = t.balance
                    })
                }

                initWalletAddress() {
                    this.forgeWalletService.selectedWallet$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.selectedWallet = t, this.imxBalanceService.fetchGodsInfo(this.selectedWallet)
                    })
                }

                historyModal() {
                    this.modalService.createModal(hs, null, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.TJ), e.Y36(Cs), e.Y36(Pe.d), e.Y36(I.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-area-header"]],
                decls: 15,
                vars: 9,
                consts: [[1, "cardForgeArea__balanceArea-left"], [4, "ngIf"], ["size", "normal", "text", "History", "icon", "action_history", "leftIconPosition", "true", 1, "cardForgeArea__header-history__cta", 3, "click"], [1, "cardForgeArea__balanceArea-right"], [1, "cardForgeArea__balanceArea__balanceRow", "cardForgeArea__balanceArea__fluxBalanceRow"], ["iconLigature", "flux_symbol", 1, "cardForgeArea__balanceArea__balance__icon", "cardForgeArea__balanceArea__fluxBalance__icon"], [1, "cardForgeArea__balanceArea__balance__number", "cardForgeArea__balanceArea__fluxBalance__number"], ["src", "/assets/images/ui-embellishments/ui--simple-divider.png", "alt", "small divider", 1, "header__divider"], [1, "cardForgeArea__balanceArea__balanceRow", "cardForgeArea__balanceArea__godsBalanceRow"], ["iconLigature", "GUToken", "fillColor", "", 1, "cardForgeArea__balanceArea__balance__icon", "cardForgeArea__balanceArea__godsBalance__icon"], [1, "cardForgeArea__balanceArea__balance__number", "cardForgeArea__balanceArea__godsBalance__number"], ["truncateAddress", "true", 1, "forgeArea__header-selectWalletDropdown"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "div", 0), e.YNc(1, vs, 4, 0, "ng-container", 1), e.TgZ(2, "gu-plain-square-button", 2), e.NdJ("click", function () {
                        return n.historyModal()
                    }), e.qZA()(), e.TgZ(3, "div", 3)(4, "div", 4), e._UZ(5, "gu-icon", 5), e.TgZ(6, "h2", 6), e._uU(7), e.ALo(8, "numberAbbreviation"), e.qZA()(), e._UZ(9, "img", 7), e.TgZ(10, "div", 8), e._UZ(11, "gu-icon", 9), e.TgZ(12, "h2", 10), e._uU(13), e.ALo(14, "formatEther"), e.qZA()()()), 2 & t && (e.xp6(1), e.Q6J("ngIf", n.selectedWallet), e.xp6(6), e.hij(" ", e.xi3(8, 3, n.fluxBalance, 2), " "), e.xp6(6), e.hij(" ", n.godsBalance ? e.xi3(14, 6, n.godsBalance, 2) : "-", " "))
                },
                directives: [l.O5, wn],
                pipes: [Me.XX, At],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.cardForgeArea__balanceArea__balance__number[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardForgeArea__balanceArea__infoButton[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.cardForgeArea__balanceArea__balance__number[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.cardForgeArea__balanceArea__infoButton[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-bottom:calc(var(--vh) * 1.1);border-bottom:calc(var(--vh) * .15) solid #1d2f41}.forgeArea__header-selectWalletDropdown[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * 1);margin-right:calc(var(--vw) * 1);width:calc(var(--vw) * 11);z-index:1}.cardForgeArea__header-history__cta[_ngcontent-%COMP%]{width:calc(var(--vw) * 9)}.cardForgeArea__balanceArea-left[_ngcontent-%COMP%]{display:flex;align-items:center}.cardForgeArea__balanceArea-right[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.cardForgeArea__balanceArea__balanceRow[_ngcontent-%COMP%]{display:flex;justify-content:center}.cardForgeArea__balanceArea__balance__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.4)}.cardForgeArea__balanceArea__balance__number[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * .16)}.cardForgeArea__balanceArea__fluxBalance__icon[_ngcontent-%COMP%], .cardForgeArea__balanceArea__fluxBalance__number[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#f6f6f6 0%,#d7d7d7 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.cardForgeArea__balanceArea__godsBalance__icon[_ngcontent-%COMP%], .cardForgeArea__balanceArea__godsBalance__number[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.header__divider[_ngcontent-%COMP%]{margin-left:calc(var(--vh) * 1.1);margin-right:calc(var(--vh) * 1.1);height:calc(var(--vh) * 3.35);width:calc(var(--vh) * .2)}.cardForgeArea__balanceArea__infoButton[_ngcontent-%COMP%]{color:#7192b0;font-weight:700;text-transform:uppercase;text-align:center;cursor:pointer;white-space:nowrap}.cardForgeArea__balanceArea__infoButton__icon[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * .2);margin-top:calc(var(--vh) * -.1);width:calc(var(--vh) * 2);height:calc(var(--vh) * 2);border-radius:50%;border:calc(var(--vh) * .15) solid #7192b0;display:inline-flex;vertical-align:top}.cardForgeArea__balanceArea__infoButton__icon[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin:auto;line-height:1;font-weight:700;font-style:normal}"]
            }), o
        })(), xs = (() => {
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
                directives: [wn],
                styles: ["[_nghost-%COMP%]{height:100%;width:86%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 auto}.forgeArea__selectWalletDropdown[_ngcontent-%COMP%]{display:block;width:100%;margin-top:calc(var(--vh) * 1.6);margin-bottom:calc(var(--vh) * 1.4)}"]
            }), o
        })();
        const ws = ["progressCircle"];

        function Ms(o, r) {
            if (1 & o && (e.O4$(), e._UZ(0, "circle", 16)), 2 & o) {
                const t = e.oxw(2);
                e.Udp("r", t.radius)("stroke-width", t.strokeWidth)("fill", t.fillColor)
            }
        }

        function ys(o, r) {
            if (1 & o && (e.O4$(), e.TgZ(0, "svg", 1)(1, "defs")(2, "linearGradient", 2), e._UZ(3, "stop", 3)(4, "stop", 4)(5, "stop", 5), e.qZA(), e.TgZ(6, "linearGradient", 6), e._UZ(7, "stop", 7)(8, "stop", 8)(9, "stop", 9), e.qZA(), e.TgZ(10, "linearGradient", 10), e._UZ(11, "stop", 11)(12, "stop", 12), e.qZA()(), e.YNc(13, Ms, 1, 6, "circle", 13), e._UZ(14, "circle", 14, 15), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Udp("width", t.width)("height", t.width), e.xp6(13), e.Q6J("ngIf", t.showBackgroundRing), e.xp6(1), e.Udp("r", t.radius)("stroke-width", t.insetInnerStroke ? .33 * t.strokeWidth : t.strokeWidth)("stroke", t.gradientForStroke ? "url(#" + t.gradientForStroke + "-gradient)" : t.strokeColor)("fill", t.fillColor)("stroke-dasharray", t.circumference + " " + t.circumference)("stroke-dashoffset", t.circumferenceOfCircularSegment), e.ekj("progressRing__circle--supressAnimation", t.supressAnimation)
            }
        }

        let Ft = (() => {
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
                    if (1 & t && e.Gf(ws, 7), 2 & t) {
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
                    1 & t && e.YNc(0, ys, 16, 19, "svg", 0), 2 & t && e.Q6J("ngIf", n.percentage > 0 || n.showBackgroundRing)
                },
                directives: [l.O5],
                styles: ["[_nghost-%COMP%]{display:block}.progressRing[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.progressRing__circle[_ngcontent-%COMP%]{transition:stroke-dashoffset .05s;transform:rotate(-90deg);transform-origin:50% 50%}.progressRing__circle--supressAnimation[_ngcontent-%COMP%]{transition:none}.progressRing__circle--background[_ngcontent-%COMP%]{stroke:#1d2f41}"]
            }), o
        })(), Mn = (() => {
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
                    1 & t && (e.TgZ(0, "div")(1, "div")(2, "div")(3, "div")(4, "div"), e._UZ(5, "div"), e.qZA()()()()())
                },
                styles: ["@keyframes rotate{0%{transform:rotate(0)}50%{transform:rotate(180deg)}to{transform:rotate(360deg)}}[_nghost-%COMP%]{position:relative;width:150px;height:150px;display:block;padding:calc(var(--vh) * .8);border-radius:50%;border:calc(var(--vw) * .2) solid transparent;animation:rotate linear 3.5s infinite;border-top-color:#3d5a7480;border-left-color:#8be1e0;animation-timing-function:cubic-bezier(.55,.38,.21,.88);animation-duration:3s;will-change:transform}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{height:100%;padding:calc(var(--vh) * .8);border-radius:50%;border:calc(var(--vw) * .2) solid transparent;animation:rotate linear 3.5s infinite;border-top-color:#3d5a7480;border-left-color:#8be1e0;animation-timing-function:cubic-bezier(.55,.38,.21,.88);animation-duration:3s;will-change:transform}"]
            }), o
        })();
        const ks = ["forgeCard"];

        function Os(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 3, 4)(2, "app-card2", 5), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw(2);
                    return s.selectCard(s.forgeCards.proto, s.forgeCards.quality, a)
                }), e.qZA(), e.TgZ(3, "gu-icon", 6), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw(2);
                    return s.removeCard(s.forgeCards.proto, s.forgeCards.quality, a)
                }), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw(2);
                e.xp6(2), e.Q6J("protoId", t.forgeCards.proto)("quality", t.forgeCards.quality)
            }
        }

        function Ps(o, r) {
            if (1 & o && (e.TgZ(0, "div", 7), e._UZ(1, "gu-icon", 8), e.TgZ(2, "div", 9), e._uU(3), e.ALo(4, "numberAbbreviation"), e.qZA()()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(3), e.hij(" ", e.xi3(4, 1, t.fluxTransactionCost, 2), " ")
            }
        }

        function Ss(o, r) {
            if (1 & o && (e.TgZ(0, "div", 7), e._UZ(1, "gu-icon", 10), e.TgZ(2, "div", 11), e._uU(3), e.ALo(4, "formatEther"), e.qZA()()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(3), e.hij(" ", t.tokenTransactionCost ? e.xi3(4, 1, t.tokenTransactionCost, 2) : "-", " ")
            }
        }

        function Ts(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Os, 4, 2, "div", 1), e.YNc(2, Ps, 5, 4, "div", 2), e.YNc(3, Ss, 5, 4, "div", 2), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", t.forgeCards.ids), e.xp6(1), e.Q6J("ngIf", t.fluxTransactionCost), e.xp6(1), e.Q6J("ngIf", t.tokenTransactionCost)
            }
        }

        function Is(o, r) {
            if (1 & o && (e.TgZ(0, "div", 3, 4), e._UZ(2, "app-card2", 12), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.xp6(2), e.Q6J("protoId", t.protoId)("quality", t.quality)
            }
        }

        function As(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Is, 3, 2, "div", 1), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", t.fakeForgeCards)
            }
        }

        let yn = (() => {
            class o {
                constructor(t) {
                    this.forgeService = t, this.unsubscribe = new M.xQ, this.initForgeCards()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initForgeCards() {
                    this.forgeService.forgeCards$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
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
                return new (t || o)(e.Y36(xe))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-app-forge-cards"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(ks, 5), 2 & t) {
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
                    1 & t && (e.YNc(0, Ts, 4, 3, "ng-container", 0), e.YNc(1, As, 2, 1, "ng-container", 0)), 2 & t && (e.Q6J("ngIf", n.forgeCards), e.xp6(1), e.Q6J("ngIf", !n.forgeCards && n.fakeForgeCards.length))
                },
                directives: [l.O5, l.sg, J],
                pipes: [Me.XX, At],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.cardsArea__amount__number[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardsArea__card__keepText[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.cardsArea__card__keepText[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex}.cardsArea__card[_ngcontent-%COMP%]{width:calc(var(--vw) * 7);margin-right:calc(var(--vw) * .2);padding-right:calc(var(--vw) * .5);padding-left:calc(var(--vw) * .15);padding-top:calc(var(--vh) * .6);transition:border .15s ease-in-out;border:calc(var(--vh) * .15) solid transparent;position:relative;display:flex;flex-direction:column;cursor:pointer;animation:.2s enter-card ease-in-out}.cardsArea__card[_ngcontent-%COMP%]:hover:not(.cardsArea__card--keep){border-color:#3d5a7480}@keyframes enter-card{0%{transform:translateY(15%);opacity:0}to{transform:translateY(0);opacity:1}}.cardsArea__card--keep[_ngcontent-%COMP%]{border-color:#3d5a74}.cardsArea__card__keepText[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .35);text-transform:uppercase;font-weight:600;line-height:1.1;margin:0;margin-top:calc(var(--vh) * .2);text-align:center;color:#f6f6f6}.cardsArea__card__close[_ngcontent-%COMP%]{top:calc(var(--vh) * 1.05);right:calc(var(--vw) * .4);position:absolute;width:calc(var(--vw) * 1.2);height:calc(var(--vw) * 1.2);font-size:calc(calc(var(--vw) * 1.2) * .5);border-radius:50%;display:flex;border:calc(var(--vh) * .15) solid #7192b0;color:#f6f6f6;background:#0c1620;cursor:pointer}.cardsArea__card__close[_ngcontent-%COMP%]:hover{background:#7192b0}.cardsArea__card__close[_ngcontent-%COMP%]     i{margin:auto}.cardsArea__amount[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 1.5);width:calc(var(--vw) * 5);display:flex;flex-direction:column;align-items:center;justify-content:center}.cardsArea__amount__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 7.5);background:linear-gradient(to bottom,#f6f6f6 0%,#d7d7d7 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:calc(var(--vh) * -.5);line-height:1}.cardsArea__amount__number[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 3);background:linear-gradient(to bottom,#f6f6f6 0%,#d7d7d7 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;line-height:1}.cardsArea__amount__icon--token[_ngcontent-%COMP%], .cardsArea__amount__number--token[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}"]
            }), o
        })();
        const Fs = ["previewCardAreaDom"], Zs = ["previewCardDom"], Ds = ["shimmerDom"], Gs = ["shimmerAreaDom"],
            Bs = ["smokeDom"], Us = ["cardForgeArea"], Ls = ["ctaButton"], Es = ["forgeCards"],
            Ns = ["finalCircularFuse"];

        function qs(o, r) {
            if (1 & o && e._UZ(0, "gu-paragraph-text", 27), 2 & o) {
                const t = e.oxw();
                e.Q6J("innerHTML", t.uiStateInformation.instructionalMessage, e.oJD)
            }
        }

        function Qs(o, r) {
            1 & o && (e.TgZ(0, "div", 28), e._UZ(1, "app-inderterminate-loading"), e.qZA())
        }

        const Rs = function (o) {
            return {"cardForgeArea__etherscanLink--final": o}
        };

        function Hs(o, r) {
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
                e.Q6J("ngClass", e.VKq(1, Rs, t.completedTransactionTxHash))
            }
        }

        const Ys = function (o) {
            return {cardForgeArea__hideSelectWallet: o}
        }, Js = function () {
            return {breakpoint: "x-large", bottomSize: "3x-large"}
        }, $s = function () {
            return {breakpoint: "2x-large", bottomSize: "6x-large"}
        }, Ws = function (o, r) {
            return [o, r]
        };
        y.p8.registerPlugin(se);
        const Zt = ({
                        currentQuality: o = "Meteorite",
                        nextQuality: r = "Shadow",
                        count: t = 4
                    } = {}) => ({
            initial: "Select a card to begin...",
            midway: `Select ${t} more <span>${o}</span> ${t > 1 ? "cards" : "card"} to forge a <span>${r}</span> card.`
        });
        let zs = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k, A, D, L, E) {
                    this.authService = t, this.analyticsService = n, this.cardsService = i, this.modalService = a, this.resizeService = s, this.forgeService = c, this.audioService = d, this.groupingService = u, this.socketService = x, this.fluxService = v, this.ethService = k, this.forgeWalletService = A, this.akuma = D, this.cerberusModalService = L, this.environment = E, this.startTime = +new Date, this.protoCards = [], this.uiStateInformation = {
                        preFuseCicleStrokeColor: "#8be1e0",
                        instructionalMessage: Zt().initial,
                        ctaText: "Start Fusing",
                        disableCta: !0,
                        previewLoading: !1,
                        inventoryLoading: !1,
                        finalFusingInProgress: !1,
                        currentForgeCardCount: 0
                    }, this.fluxBalance = 0, this.mainTL = y.p8.timeline({paused: !0}), this.finalTL = y.p8.timeline({paused: !0}), this.waitForFuseResponseTL = y.p8.timeline({paused: !0}), this.ExpandedViewMode = R, this.unsubscribe = new M.xQ, this.fakeForgeCards = [], this.finalFusePercentage = {value: 0}, this.preFusePercentage = {value: 0}, this.dog = "woof dog", this.selectedWallet = "", this.authService.fetchAccount(), this.resizeService.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               vh: de,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               vw: ne
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           }) => {
                        this.vh = de, this.vw = ne
                    })).subscribe()
                }

                logForgeViewed(t) {
                    this.analyticsService.postEvent(new Ne.Forge.Viewed.Event(t)), this.akuma.postEvent("Screen", "forgeHome_opened")
                }

                logForgeCompleted(t) {
                    this.analyticsService.postEvent(new Ne.Forge.Completed.Event(t))
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
                    (0, Z.aj)([this.forgeWalletService.playerWallets$, this.forgeWalletService.selectedWallet$]).pipe((0, w.q)(1)).subscribe(([t, n]) => {
                        (!n || !t || 0 === t.length) && this.modalService.createModal(Cn, null, {
                            blurredBackground: !0,
                            canCloseFromOutside: !1,
                            position: h.e1.Center,
                            size: h.Cg.Workarea
                        })
                    })
                }

                initWalletAddress() {
                    this.forgeWalletService.selectedWallet$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => !!t)).subscribe(t => {
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
                    this.fluxService.fetchFluxInfo(), this.fluxService.fluxInfo$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => !!t)).subscribe(t => {
                        this.fluxBalance = t.flux_available
                    })
                }

                initActiveGrouping() {
                    const t = this.groupingService.groupings.find(n => n.groupingType === F.Quality);
                    this.activeGrouping = t || this.groupingService.defaultGrouping
                }

                initCards() {
                    this.uiStateInformation.inventoryLoading = !0, (0, Z.aj)([this.cardsService.inventoryCards$, this.cardsService.protoCards$]).pipe((0, p.R)(this.unsubscribe), (0, b.b)(([t, n]) => {
                        this.inventoryCards = t, this.protoCards = Array.from(n.values()), this.uiStateInformation.inventoryLoading = !1
                    })).subscribe()
                }

                loadCards() {
                    this.uiStateInformation.inventoryLoading = !0;
                    const t = this.authService.getUserId(),
                        n = this.cardsService.fetchInventoryCardsMapV2(t).pipe((0, w.q)(1), (0, O.U)(i => this.cardsService.inventoryCardsMapV2ToV1(i)));
                    this.cardsService.getProtoCards$().pipe((0, w.q)(1), (0, ve.zg)(i => n.pipe((0, O.U)(a => ({
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
                    this.forgeService.previewCard$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => {
                        this.previewCard = t, t ? (this.uiStateInformation.previewLoading = !0, this.forgeService.validateForge().pipe((0, w.q)(1)).subscribe(n => {
                            this.uiStateInformation.previewLoading = !1, this.mainTL.play(), this.fluxTransactionCost = n.flux_amount, this.tokenTransactionCost = n.token_amount
                        }, n => {
                            this.handleValidationFail(n.error.error)
                        })) : (this.mainTL.pause(), this.mainTL.seek(0), this.uiStateInformation.previewLoading = !1, this.fluxTransactionCost = 0, this.tokenTransactionCost = "")
                    })).subscribe()
                }

                initForgeCards() {
                    this.forgeService.forgeCards$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => {
                        t || (this.fluxTransactionCost = 0, this.tokenTransactionCost = "", this.uiStateInformation = Object.assign(Object.assign({}, this.uiStateInformation), {instructionalMessage: Zt().initial}), this.animateCircularProgress({preFusePercentage: 0}), this.animateForgeAreaToLowerPosition())
                    }), (0, S.h)(t => {
                        const n = t && t.ids ? t.ids.length : 0, i = this.uiStateInformation.currentForgeCardCount;
                        return this.uiStateInformation.currentForgeCardCount = n, !!t && n !== i
                    })).subscribe(t => {
                        this.forgeCards = t, this.handleUpdatedForgeCards(t)
                    })
                }

                handleUpdatedForgeCards(t) {
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
                        const n = t && t.ids ? t.ids.length : 0,
                            i = yield this.forgeService.numberOfQualityToForge(t.quality);
                        if (n > 0) {
                            const a = this.forgeService.getNextQuality(t.quality);
                            this.uiStateInformation = Object.assign(Object.assign({}, this.uiStateInformation), {
                                instructionalMessage: Zt({
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
                    const n = this.cerberusModalService.open(It.M, {
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
                    this.uiStateInformation.finalFusingInProgress = !0, this.waitForFinalFuseResponseAnimation(), this.forgeService.submitForge().pipe((0, w.q)(1)).subscribe(t => {
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
                    "You are locked from fusing because our bot prevention system detected unusual behavior" === t && this.modalService.createModal(fn.n, {}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: h.e1.Center,
                        size: h.Cg.StretchableWorkarea
                    }), this.mainTL.pause(), this.animateCircularProgress({
                        preFusePercentage: 0,
                        duration: 0
                    }), this.uiStateInformation.previewLoading = !1, this.uiStateInformation.instructionalMessage = t, "Fusing is temporarily disabled due to network congestion" === t && (this.uiStateInformation.instructionalMessage = '\n        Fusing is temporarily disabled due to high transaction fees on the network.\n        The Forge will reopen with the release of Immutable X minting.\n        <br>\n        <a href="https://www.reddit.com/r/GodsUnchained/comments/im80m1/trial_of_the_gods_on_minting_purchasing_and/" target="_blank">LEARN MORE</a>\n      '), this.uiStateInformation.disableCta = !0
                }

                animateEachCardIntoPreview(t) {
                    const n = y.p8.timeline(), i = this.previewCardDom.nativeElement,
                        a = se.ease.config({strength: 8, points: 2, template: "power2.inOut", randomize: !1});
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
                    return t.forEach((c, d) => {
                        n.to(c, {
                            duration: .4,
                            y: "-120%",
                            x: s[d],
                            opacity: .3,
                            rotation: () => Math.floor(60 * Math.random()) * (1 === Math.floor(2 * Math.random()) ? 1 : -1),
                            ease: "power2.inOut"
                        }).add(() => {
                            d === t.length - 1 && this.audioService.ForgeFuseAnvil5.play()
                        }, "-=0.4").to(c, {
                            duration: .2,
                            opacity: 0,
                            ease: "power2.inOut"
                        }, "-=0.15").fromTo(i, {duration: .2, scale: 1}, {scale: .94, ease: a}, "-=0.2").add(() => {
                            d < t.length - 1 && this.audioService[`ForgeFuseAnvil${d + 1}`].play()
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
                    const i = this.cerberusModalService.open(It.M, {
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
                return new (t || o)(e.Y36(f.mI), e.Y36(_.yD), e.Y36(_.dK), e.Y36(I.Z), e.Y36(K._), e.Y36(xe), e.Y36(f.pk), e.Y36(ke), e.Y36(_.$c), e.Y36(_.TJ), e.Y36(f.ux), e.Y36(Pe.d), e.Y36(_.jt), e.Y36(U.Qz), e.Y36(f.Ho))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-next-step"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Fs, 7), e.Gf(Zs, 7, e.SBq), e.Gf(Ds, 7), e.Gf(Gs, 7), e.Gf(Bs, 7), e.Gf(Us, 7), e.Gf(Ls, 7), e.Gf(Es, 7), e.Gf(Ns, 7)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.previewCardAreaDom = i.first), e.iGM(i = e.CRH()) && (n.previewCardDom = i.first), e.iGM(i = e.CRH()) && (n.shimmerDom = i.first), e.iGM(i = e.CRH()) && (n.shimmerAreaDom = i.first), e.iGM(i = e.CRH()) && (n.smokeDom = i.first), e.iGM(i = e.CRH()) && (n.cardForgeAreaDom = i.first), e.iGM(i = e.CRH()) && (n.ctaButtonDom = i.first), e.iGM(i = e.CRH()) && (n.forgeCardsDom = i.first), e.iGM(i = e.CRH()) && (n.finalCircularFuseDom = i.first)
                    }
                },
                decls: 29,
                vars: 41,
                consts: [["title", "Forge", 1, "cardBrowserArea", 3, "expandedViewMode", "activeGrouping", "protoCards", "inventoryCards"], [1, "cardForgeArea"], [1, "cardForgeArea_selectWallet", 3, "ngClass"], [1, "cardForgeArea__circularAreaContainer", 3, "hidden"], [1, "cardForgeArea__circularArea"], ["cardForgeArea", ""], [1, "cardForgeArea__circularArea__progressCircle", 3, "percentage", "width", "strokeWidth", "showBackgroundRing", "supressAnimation", "strokeColor", "insetInnerStroke"], ["gradientForStroke", "whiteToAqua", 1, "cardForgeArea__circularArea__progressCircle", "cardForgeArea__circularArea__progressCircle--finalProgress", 3, "percentage", "width", "strokeWidth", "showBackgroundRing", "supressAnimation", "insetInnerStroke"], ["finalCircularFuse", ""], ["kind", "help", "align", "center", "class", "cardForgeArea__circularArea__instructionalText", 3, "innerHTML", 4, "ngIf"], ["type", "primary", 1, "cardForgeArea__ctaButton", 3, "click"], ["ctaButton", ""], ["class", "cardForgeArea__circularArea__loading", 4, "ngIf"], [1, "cardForgeArea__circularArea__previewCardArea"], ["previewCardAreaDom", ""], ["src", "/assets/images/texture--smoke.webp", "alt", "", 1, "cardForgeArea__circularArea__previewCardArea__smoke"], ["smokeDom", ""], ["responsiveSrcsetSizes", "18.6vw", 1, "cardForgeArea__circularArea__previewCardArea__card", 3, "protoId", "quality"], ["previewCardDom", ""], [1, "cardForgeArea__circularArea__previewCardArea__shimmerArea"], ["shimmerAreaDom", ""], [1, "cardForgeArea__circularArea__previewCardArea__shimmerArea__shimmer"], ["shimmerDom", ""], ["top", "3x-large", 3, "responsiveSize"], ["class", "cardForgeArea__etherscanLink", "kind", "tag", "fillColor", "colors.apocyan.100", "align", "center", 3, "ngClass", "click", 4, "ngIf"], [1, "cardForgeArea__cardsToBeFused", 3, "fluxTransactionCost", "tokenTransactionCost", "fakeForgeCards"], ["forgeCards", ""], ["kind", "help", "align", "center", 1, "cardForgeArea__circularArea__instructionalText", 3, "innerHTML"], [1, "cardForgeArea__circularArea__loading"], ["kind", "tag", "fillColor", "colors.apocyan.100", "align", "center", 1, "cardForgeArea__etherscanLink", 3, "ngClass", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "cerberus-forge-card-list", 0), e.TgZ(1, "div", 1), e._UZ(2, "cerberus-forge-area-header")(3, "cerberus-forge-area-select-wallet", 2), e.TgZ(4, "div", 3)(5, "div", 4, 5), e._UZ(7, "app-progress-circle", 6)(8, "app-progress-circle", 7, 8), e.YNc(10, qs, 1, 1, "gu-paragraph-text", 9), e.TgZ(11, "gu-primary-hex-button", 10, 11), e.NdJ("click", function () {
                        return n.ctaClick()
                    }), e._uU(13), e.qZA(), e.YNc(14, Qs, 2, 0, "div", 12), e.TgZ(15, "div", 13, 14), e._UZ(17, "img", 15, 16)(19, "app-card2", 17, 18), e.TgZ(21, "div", 19, 20), e._UZ(23, "i", 21, 22), e.qZA()()(), e.TgZ(25, "gu-vertical-space", 23), e.YNc(26, Hs, 2, 3, "gu-paragraph-text", 24), e.qZA(), e._UZ(27, "cerberus-app-forge-cards", 25, 26), e.qZA()()), 2 & t && (e.ekj("cardBrowserArea--disabled", n.uiStateInformation.finalFusingInProgress || n.uiStateInformation.previewLoading || !n.selectedWallet), e.Q6J("expandedViewMode", n.ExpandedViewMode.FORGING)("activeGrouping", n.activeGrouping)("protoCards", n.protoCards)("inventoryCards", n.inventoryCards), e.xp6(3), e.Q6J("ngClass", e.VKq(34, Ys, n.selectedWallet)), e.xp6(1), e.Q6J("hidden", !n.selectedWallet), e.xp6(3), e.Q6J("percentage", n.preFusePercentage.value)("width", 29 * n.vw)("strokeWidth", 2 * n.vh)("showBackgroundRing", !0)("supressAnimation", !0)("strokeColor", n.uiStateInformation.preFuseCicleStrokeColor)("insetInnerStroke", !0), e.xp6(1), e.Q6J("percentage", n.finalFusePercentage.value)("width", 29 * n.vw)("strokeWidth", 2 * n.vh)("showBackgroundRing", !1)("supressAnimation", !0)("insetInnerStroke", !0), e.xp6(2), e.Q6J("ngIf", n.uiStateInformation.instructionalMessage && !n.uiStateInformation.previewLoading && !n.uiStateInformation.finalFusingInProgress), e.xp6(1), e.uIk("disabled", n.uiStateInformation.disableCta), e.xp6(2), e.Oqu(n.uiStateInformation.ctaText), e.xp6(1), e.Q6J("ngIf", n.uiStateInformation.previewLoading), e.xp6(5), e.Q6J("protoId", null == n.previewCard ? null : n.previewCard.protoId)("quality", null == n.previewCard ? null : n.previewCard.quality), e.xp6(6), e.Q6J("responsiveSize", e.WLB(38, Ws, e.DdM(36, Js), e.DdM(37, $s))), e.xp6(1), e.Q6J("ngIf", (null == n.transactionInProgress ? null : n.transactionInProgress.txHash) || n.completedTransactionTxHash), e.xp6(1), e.ekj("cardForgeArea__cardsToBeFused--disabled", n.uiStateInformation.finalFusingInProgress), e.Q6J("fluxTransactionCost", n.fluxTransactionCost)("tokenTransactionCost", n.tokenTransactionCost)("fakeForgeCards", n.fakeForgeCards))
                },
                directives: [os, bs, xs, l.mk, Ft, l.O5, Mn, J, yn],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-top:calc(var(--vh) * 2);padding-left:calc(var(--vw) * 3);padding-right:calc(var(--vw) * 3);display:flex;height:100%}.cardBrowserArea[_ngcontent-%COMP%]{width:calc(var(--vw) * 44);margin-right:calc(var(--vw) * 2.34)}.cardBrowserArea--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none;opacity:.5}.cardForgeArea[_ngcontent-%COMP%]{flex:1;display:flex;flex-flow:column nowrap;position:relative}.cardForgeArea__hideSelectWallet[_ngcontent-%COMP%]{display:none}.cardForgeArea__circularArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;transform:translateY(calc(var(--vh) * 13))}.cardForgeArea__circularArea__progressCircle[_ngcontent-%COMP%]{transform:rotate(180deg)}.cardForgeArea__circularArea__progressCircle--finalProgress[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;transform:rotate(180deg) translate(50%);transform-origin:50% 50%}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]{width:calc(var(--vh) * 21);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]     span{text-transform:capitalize;font-weight:700}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]     a{color:#affaed}.cardForgeArea__circularArea__previewCardArea[_ngcontent-%COMP%]{top:calc(var(--vh) * -1.3);margin-left:calc(var(--vw) * -.8);user-select:none;pointer-events:none;width:calc(var(--vw) * 18.6);position:absolute;z-index:1;transform:translateY(10%);cursor:pointer}.cardForgeArea__circularArea__previewCardArea__smoke[_ngcontent-%COMP%]{width:calc(var(--vw) * 35);bottom:calc(var(--vh) * 10);position:absolute;left:54%;transform:translate(-50%) scale(.6);transform-origin:50% 100%;opacity:0}.cardForgeArea__circularArea__previewCardArea__card[_ngcontent-%COMP%]{filter:drop-shadow(0 calc(var(--vh) * .5) calc(var(--vw) * 2) black);opacity:0}.cardForgeArea__circularArea__previewCardArea__shimmerArea[_ngcontent-%COMP%]{top:calc(var(--vh) * 4.3);bottom:calc(var(--vh) * 2.3);left:calc(var(--vw) * 2.55);right:calc(var(--vw) * 1.15);position:absolute;overflow:hidden;opacity:0}.cardForgeArea__circularArea__previewCardArea__shimmerArea__shimmer[_ngcontent-%COMP%]{position:absolute;width:150%;height:35%;background:linear-gradient(to bottom,rgba(255,255,255,0) 0%,white 50%,rgba(255,255,255,0) 100%);transform:rotate(15deg) translateY(-120%);top:0;left:-25%;mix-blend-mode:overlay}.cardForgeArea__ctaButton[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%,-10%);min-width:145px}.cardForgeArea__etherscanLink[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;text-transform:uppercase;text-decoration:underline;cursor:pointer}.cardForgeArea__etherscanLink--final[_ngcontent-%COMP%]{position:absolute;bottom:calc(var(--vh) * 3.24)}.cardForgeArea__cardsToBeFused[_ngcontent-%COMP%]{height:calc(var(--vh) * 18.66);margin-bottom:calc(var(--vh) * 3.24);margin-top:auto;display:flex;width:100%;justify-content:center}.cardForgeArea__cardsToBeFused--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none}.cardForgeArea__circularArea__loading[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}"]
            }), o
        })();
        var js = g(19444);

        function Vs(o, r) {
            if (1 & o && (e.TgZ(0, "div", 3), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.title)
            }
        }

        function Xs(o, r) {
            if (1 & o && (e.TgZ(0, "div", 4), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.message)
            }
        }

        function Ks(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 5)(1, "gu-primary-hex-button", 6), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().onOkCLick()
                }), e.qZA(), e.TgZ(2, "a", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().onCancelClick()
                }), e._uU(3, "No, Cancel"), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("disabled", t.loading)("text", t.okButtonText)
            }
        }

        let kn = (() => {
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
                return new (t || o)(e.Y36(I.Z))
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
                    1 & t && (e.YNc(0, Vs, 2, 1, "div", 0), e.YNc(1, Xs, 2, 1, "div", 1), e.YNc(2, Ks, 4, 2, "div", 2)), 2 & t && (e.Q6J("ngIf", n.title), e.xp6(1), e.Q6J("ngIf", n.message), e.xp6(1), e.Q6J("ngIf", n.showButtons))
                },
                directives: [l.O5],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cancelButton[_ngcontent-%COMP%], .message-section[_ngcontent-%COMP%], .title-section[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.title-section[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9);line-height:1.2;font-weight:600}.cancelButton[_ngcontent-%COMP%], .message-section[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{border:calc(var(--vh) * .15) solid #527493;background-color:#0c1620;position:relative;display:block;color:#f6f6f6;padding:calc(var(--vw) * 1.3);width:calc(var(--vw) * 20);display:flex;flex-flow:column nowrap;align-items:center}.down[_nghost-%COMP%]:before{border:calc(var(--vh) * 1.7) solid transparent;border-top-color:#527493;left:50%;bottom:calc(calc(var(--vh) * 1.7) * -2);transform:translate(-50%)}.up[_nghost-%COMP%]:before{border:calc(var(--vh) * 1.7) solid transparent;border-bottom-color:#527493;left:50%;top:calc(calc(var(--vh) * 1.7) * -2);transform:translate(-50%)}.right[_nghost-%COMP%]:before{border:calc(var(--vh) * 1.7) solid transparent;border-left-color:#527493;top:50%;right:calc(calc(var(--vh) * 1.7) * -2);transform:translateY(-50%)}.left[_nghost-%COMP%]:before{border:calc(var(--vh) * 1.7) solid transparent;border-right-color:#527493;top:50%;left:calc(calc(var(--vh) * 1.7) * -2);transform:translateY(-50%)}[_nghost-%COMP%]:before{content:"";position:absolute;width:0;height:0}.title-section[_ngcontent-%COMP%]{padding-bottom:calc(var(--vw) * 1.3);border-bottom:calc(var(--vh) * .15) solid #fff}.message-section[_ngcontent-%COMP%]{padding-bottom:calc(var(--vw) * 1.3);text-align:center}.action-section[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row-reverse;align-items:center;justify-content:center}.cancelButton[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * 1);text-transform:uppercase;font-weight:700;color:#8be1e0;flex-grow:0;cursor:pointer}.okButton[_ngcontent-%COMP%]{flex-grow:1}']
            }), o
        })();
        const ec = ["previewCardAreaDom"], tc = ["previewCardDom"], nc = ["shimmerDom"], oc = ["shimmerAreaDom"],
            ic = ["smokeDom"], rc = ["cardForgeArea"], ac = ["ctaButton"], sc = ["forgeCards"],
            cc = ["finalCircularFuse"];

        function lc(o, r) {
            if (1 & o && e._UZ(0, "gu-paragraph-text", 33), 2 & o) {
                const t = e.oxw();
                e.Q6J("innerHTML", t.uiStateInformation.instructionalMessage, e.oJD)
            }
        }

        function dc(o, r) {
            1 & o && (e.TgZ(0, "div", 34), e._UZ(1, "app-inderterminate-loading"), e.qZA())
        }

        const gc = function (o) {
            return {"cardForgeArea__etherscanLink--final": o}
        };

        function uc(o, r) {
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
                e.Q6J("ngClass", e.VKq(1, gc, t.completedTransactionTxHash))
            }
        }

        y.p8.registerPlugin(se);
        const Gt = ({
                        currentQuality: o = "Meteorite",
                        nextQuality: r = "Shadow",
                        count: t = 4
                    } = {}) => ({
            initial: "Select a card to begin...",
            midway: `Select ${t} more <span>${o}</span> ${t > 1 ? "cards" : "card"} to forge a <span>${r}</span> card.`
        });
        let On = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k, A, D) {
                    this.authService = t, this.analyticsService = n, this.cardsService = i, this.modalService = a, this.resizeService = s, this.forgeService = c, this.audioService = d, this.groupingService = u, this.socketService = x, this.fluxService = v, this.ethService = k, this.forgeWalletService = A, this.akuma = D, this.startTime = +new Date, this.protoCards = [], this.uiStateInformation = {
                        preFuseCicleStrokeColor: "#8be1e0",
                        instructionalMessage: Gt().initial,
                        ctaText: "Start Fusing",
                        disableCta: !0,
                        previewLoading: !1,
                        inventoryLoading: !1,
                        finalFusingInProgress: !1,
                        currentForgeCardCount: 0
                    }, this.fluxBalance = 0, this.mainTL = y.p8.timeline({paused: !0}), this.finalTL = y.p8.timeline({paused: !0}), this.waitForFuseResponseTL = y.p8.timeline({paused: !0}), this.ExpandedViewMode = R, this.unsubscribe = new M.xQ, this.fakeForgeCards = [], this.finalFusePercentage = {value: 0}, this.preFusePercentage = {value: 0}, this.dog = "woof dog", this.resizeService.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    vh: L,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    vw: E
                                                                                                                                                                                                                                                                                                                                                                                                                                                                }) => {
                        this.vh = L, this.vw = E
                    })).subscribe()
                }

                logForgeViewed(t) {
                    this.analyticsService.postEvent(new Ne.Forge.Viewed.Event(t)), this.akuma.postEvent("Screen", "forgeHome_opened")
                }

                logForgeCompleted(t) {
                    this.analyticsService.postEvent(new Ne.Forge.Completed.Event(t))
                }

                ngOnInit() {
                    this.forgeService.transactionInProgress$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => this.transactionInProgress = t), this.logForgeViewed({
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
                    (0, Z.aj)([this.forgeWalletService.playerWallets$, this.forgeWalletService.selectedWallet$]).pipe((0, w.q)(1)).subscribe(([t, n]) => {
                        (!n || !t || 0 === t.length) && this.modalService.createModal(Cn, null, {
                            blurredBackground: !0,
                            canCloseFromOutside: !1,
                            position: h.e1.Center,
                            size: h.Cg.Workarea
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
                        })), this.waitForFinalFuseResponseAnimation(), this.logEtherscanLink(this.transactionInProgress.txHash), (0, Z.aj)([this.ethService.getTransaction$(this.transactionInProgress.txHash), this.ethService.getTransactionReceipt$(this.transactionInProgress.txHash)]).pipe((0, w.q)(1)).subscribe(([, t]) => {
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
                    this.fluxService.fetchFluxInfo(), this.fluxService.fluxInfo$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => !!t)).subscribe(t => {
                        this.fluxBalance = t.flux_available
                    })
                }

                initActiveGrouping() {
                    const t = this.groupingService.groupings.find(n => n.groupingType === F.Quality);
                    this.activeGrouping = t || this.groupingService.defaultGrouping
                }

                initCards() {
                    this.uiStateInformation.inventoryLoading = !0, (0, Z.aj)([this.cardsService.inventoryCards$, this.cardsService.protoCards$]).pipe((0, p.R)(this.unsubscribe), (0, b.b)(([t, n]) => {
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
                    this.forgeService.previewCard$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => {
                        this.previewCard = t, t ? (this.uiStateInformation.previewLoading = !0, this.forgeService.validateForge().pipe((0, w.q)(1)).subscribe(n => {
                            this.uiStateInformation.previewLoading = !1, this.mainTL.play(), this.fluxTransactionCost = n.flux_cost
                        }, n => {
                            this.handleValidationFail(n.error.error)
                        })) : (this.mainTL.pause(), this.mainTL.seek(0), this.uiStateInformation.previewLoading = !1, this.fluxTransactionCost = 0)
                    })).subscribe()
                }

                initForgeCards() {
                    this.forgeService.forgeCards$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => {
                        t || (this.fluxTransactionCost = 0, this.uiStateInformation = Object.assign(Object.assign({}, this.uiStateInformation), {instructionalMessage: Gt().initial}), this.animateCircularProgress({preFusePercentage: 0}), this.animateForgeAreaToLowerPosition())
                    }), (0, S.h)(t => {
                        const n = t && t.ids ? t.ids.length : 0, i = this.uiStateInformation.currentForgeCardCount;
                        return this.uiStateInformation.currentForgeCardCount = n, !!t && n !== i
                    })).subscribe(t => {
                        this.forgeCards = t, this.handleUpdatedForgeCards(t)
                    })
                }

                handleUpdatedForgeCards(t) {
                    return (0, ae.__awaiter)(this, void 0, void 0, function* () {
                        const n = t && t.ids ? t.ids.length : 0,
                            i = yield this.forgeService.numberOfQualityToForge(t.quality);
                        if (n > 0) {
                            const a = this.forgeService.getNextQuality(t.quality);
                            this.uiStateInformation = Object.assign(Object.assign({}, this.uiStateInformation), {
                                instructionalMessage: Gt({
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
                    this.modalService.createModal(kn, {
                        okButtonText: "Understood",
                        message: "Fusing these cards is permanent. Once complete, there is no turning back. Fusing may take multiple minutes.",
                        onOk: () => {
                            this.startFusing(), this.modalService.destroyTopModal()
                        },
                        direction: "up"
                    }, {position: h.e1.Custom, customPosition: ".cardForgeArea__ctaButton:bottom"})
                }

                startFusing() {
                    this.uiStateInformation.finalFusingInProgress = !0, this.forgeService.setTransactionInProgress(Object.assign(Object.assign({}, this.forgeCards), {reference: (0, js.v4)()})), this.waitForFinalFuseResponseAnimation(), this.forgeService.submitForge().pipe((0, w.q)(1), (0, _e.w)(t => (this.forgeService.setTransactionInProgress(Object.assign(Object.assign({}, this.transactionInProgress), {txHash: t})), this.logEtherscanLink(this.transactionInProgress.txHash), this.forgeService.postTxHashForTracking({
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
                        this.socketMessagesSubscription = i.pipe((0, p.R)(this.unsubscribe)).subscribe(a => this.handleSocketMessage(a))
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
                        this.cardsService.getProtoCard(a).pipe((0, w.q)(1)).subscribe(s => this.logForgeCompleted({
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
                    if ((0, ae.__rest)(t, ["status", "confirmations", "reference"]), !this.transactionInProgress || a !== this.transactionInProgress.reference) return !1;
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
                    console.error("Forge->handleValidationFail()", t), "You are locked from fusing because our bot prevention system detected unusual behavior" === t && this.modalService.createModal(fn.n, {}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: h.e1.Center,
                        size: h.Cg.StretchableWorkarea
                    }), this.mainTL.pause(), this.animateCircularProgress({
                        preFusePercentage: 0,
                        duration: 0
                    }), this.uiStateInformation.previewLoading = !1, this.uiStateInformation.instructionalMessage = t, "Fusing is temporarily disabled due to network congestion" === t && (this.uiStateInformation.instructionalMessage = '\n        Fusing is temporarily disabled due to high transaction fees on the network.\n        The Forge will reopen with the release of Immutable X minting.\n        <br>\n        <a href="https://www.reddit.com/r/GodsUnchained/comments/im80m1/trial_of_the_gods_on_minting_purchasing_and/" target="_blank">LEARN MORE</a>\n      '), this.uiStateInformation.disableCta = !0
                }

                animateEachCardIntoPreview(t) {
                    const n = y.p8.timeline(), i = this.previewCardDom.nativeElement,
                        a = se.ease.config({strength: 8, points: 2, template: "power2.inOut", randomize: !1});
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
                    return t.forEach((c, d) => {
                        n.to(c, {
                            duration: .4,
                            y: "-120%",
                            x: s[d],
                            opacity: .3,
                            rotation: () => Math.floor(60 * Math.random()) * (1 === Math.floor(2 * Math.random()) ? 1 : -1),
                            ease: "power2.inOut"
                        }).add(() => {
                            d === t.length - 1 && this.audioService.ForgeFuseAnvil5.play()
                        }, "-=0.4").to(c, {
                            duraiton: .2,
                            opacity: 0,
                            ease: "power2.inOut"
                        }, "-=0.15").fromTo(i, {duration: .2, scale: 1}, {scale: .94, ease: a}, "-=0.2").add(() => {
                            d < t.length - 1 && this.audioService[`ForgeFuseAnvil${d + 1}`].play()
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
                    this.modalService.createModal(vn, null, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(f.mI), e.Y36(_.yD), e.Y36(_.dK), e.Y36(I.Z), e.Y36(K._), e.Y36(xe), e.Y36(f.pk), e.Y36(ke), e.Y36(_.$c), e.Y36(_.TJ), e.Y36(f.ux), e.Y36(Pe.d), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-app-forge-flux"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(ec, 7), e.Gf(tc, 7, e.SBq), e.Gf(nc, 7), e.Gf(oc, 7), e.Gf(ic, 7), e.Gf(rc, 7), e.Gf(ac, 7), e.Gf(sc, 7), e.Gf(cc, 7)), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.previewCardAreaDom = i.first), e.iGM(i = e.CRH()) && (n.previewCardDom = i.first), e.iGM(i = e.CRH()) && (n.shimmerDom = i.first), e.iGM(i = e.CRH()) && (n.shimmerAreaDom = i.first), e.iGM(i = e.CRH()) && (n.smokeDom = i.first), e.iGM(i = e.CRH()) && (n.cardForgeAreaDom = i.first), e.iGM(i = e.CRH()) && (n.ctaButtonDom = i.first), e.iGM(i = e.CRH()) && (n.forgeCardsDom = i.first), e.iGM(i = e.CRH()) && (n.finalCircularFuseDom = i.first)
                    }
                },
                decls: 40,
                vars: 34,
                consts: [["title", "Cards", 1, "cardBrowserArea", 3, "expandedViewMode", "activeGrouping", "protoCards", "inventoryCards"], [1, "cardForgeArea"], [1, "cardForgeArea__heading"], [1, "cardForgeArea__fluxBalanceArea"], [1, "cardForgeArea__fluxBalanceArea__label"], [1, "cardForgeArea__fluxBalanceArea__balanceRow"], ["iconLigature", "flux_symbol", 1, "cardForgeArea__fluxBalanceArea__balance__icon"], [1, "cardForgeArea__fluxBalanceArea__balance__number"], [1, "cardForgeArea__fluxBalanceArea__infoButton", 3, "click"], [1, "cardForgeArea__fluxBalanceArea__infoButton__icon"], [1, "cardForgeArea__circularArea"], ["cardForgeArea", ""], [1, "cardForgeArea__circularArea__progressCircle", 3, "percentage", "width", "strokeWidth", "showBackgroundRing", "supressAnimation", "strokeColor", "insetInnerStroke"], ["gradientForStroke", "whiteToAqua", 1, "cardForgeArea__circularArea__progressCircle", "cardForgeArea__circularArea__progressCircle--finalProgress", 3, "percentage", "width", "strokeWidth", "showBackgroundRing", "supressAnimation", "insetInnerStroke"], ["finalCircularFuse", ""], ["kind", "help", "align", "center", "class", "cardForgeArea__circularArea__instructionalText", 3, "innerHTML", 4, "ngIf"], [1, "cardForgeArea__ctaButton", 3, "text", "click"], ["ctaButton", ""], ["class", "cardForgeArea__circularArea__loading", 4, "ngIf"], [1, "cardForgeArea__circularArea__previewCardArea"], ["previewCardAreaDom", ""], ["src", "/assets/images/texture--smoke.webp", "alt", "", 1, "cardForgeArea__circularArea__previewCardArea__smoke"], ["smokeDom", ""], ["responsiveSrcsetSizes", "18.6vw", 1, "cardForgeArea__circularArea__previewCardArea__card", 3, "protoId", "quality"], ["previewCardDom", ""], [1, "cardForgeArea__circularArea__previewCardArea__shimmerArea"], ["shimmerAreaDom", ""], [1, "cardForgeArea__circularArea__previewCardArea__shimmerArea__shimmer"], ["shimmerDom", ""], ["top", "3x-large"], ["class", "cardForgeArea__etherscanLink", "kind", "tag", "fillColor", "colors.apocyan.100", "align", "center", 3, "ngClass", "click", 4, "ngIf"], [1, "cardForgeArea__cardsToBeFused", 3, "fluxTransactionCost", "fakeForgeCards"], ["forgeCards", ""], ["kind", "help", "align", "center", 1, "cardForgeArea__circularArea__instructionalText", 3, "innerHTML"], [1, "cardForgeArea__circularArea__loading"], ["kind", "tag", "fillColor", "colors.apocyan.100", "align", "center", 1, "cardForgeArea__etherscanLink", 3, "ngClass", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "cerberus-half-screen-cards-list", 0), e.TgZ(1, "div", 1)(2, "h1", 2), e._uU(3, " The Forge "), e.qZA(), e.TgZ(4, "div", 3)(5, "label", 4), e._uU(6, "Flux"), e.qZA(), e.TgZ(7, "div", 5), e._UZ(8, "gu-icon", 6), e.TgZ(9, "h2", 7), e._uU(10), e.ALo(11, "numberAbbreviation"), e.qZA()(), e.TgZ(12, "a", 8), e.NdJ("click", function () {
                        return n.fluxInfoModal()
                    }), e._uU(13, " Fusing costs "), e.TgZ(14, "i", 9)(15, "span"), e._uU(16, "?"), e.qZA()()()(), e.TgZ(17, "div", 10, 11), e._UZ(19, "app-progress-circle", 12)(20, "app-progress-circle", 13, 14), e.YNc(22, lc, 1, 1, "gu-paragraph-text", 15), e.TgZ(23, "gu-primary-hex-button", 16, 17), e.NdJ("click", function () {
                        return n.ctaClick()
                    }), e.qZA(), e.YNc(25, dc, 2, 0, "div", 18), e.TgZ(26, "div", 19, 20), e._UZ(28, "img", 21, 22)(30, "app-card2", 23, 24), e.TgZ(32, "div", 25, 26), e._UZ(34, "i", 27, 28), e.qZA()()(), e.TgZ(36, "gu-vertical-space", 29), e.YNc(37, uc, 2, 3, "gu-paragraph-text", 30), e.qZA(), e._UZ(38, "cerberus-app-forge-cards", 31, 32), e.qZA()), 2 & t && (e.ekj("cardBrowserArea--disabled", n.uiStateInformation.finalFusingInProgress || n.uiStateInformation.previewLoading), e.Q6J("expandedViewMode", n.ExpandedViewMode.FORGING)("activeGrouping", n.activeGrouping)("protoCards", n.protoCards)("inventoryCards", n.inventoryCards), e.xp6(10), e.hij(" ", e.xi3(11, 31, n.fluxBalance, 2), " "), e.xp6(9), e.Q6J("percentage", n.preFusePercentage.value)("width", 29 * n.vw)("strokeWidth", 2 * n.vh)("showBackgroundRing", !0)("supressAnimation", !0)("strokeColor", n.uiStateInformation.preFuseCicleStrokeColor)("insetInnerStroke", !0), e.xp6(1), e.Q6J("percentage", n.finalFusePercentage.value)("width", 29 * n.vw)("strokeWidth", 2 * n.vh)("showBackgroundRing", !1)("supressAnimation", !0)("insetInnerStroke", !0), e.xp6(2), e.Q6J("ngIf", n.uiStateInformation.instructionalMessage && !n.uiStateInformation.previewLoading && !n.uiStateInformation.finalFusingInProgress), e.xp6(1), e.Q6J("text", n.uiStateInformation.ctaText), e.uIk("disabled", n.uiStateInformation.disableCta), e.xp6(2), e.Q6J("ngIf", n.uiStateInformation.previewLoading), e.xp6(5), e.Q6J("protoId", null == n.previewCard ? null : n.previewCard.protoId)("quality", null == n.previewCard ? null : n.previewCard.quality), e.xp6(7), e.Q6J("ngIf", (null == n.transactionInProgress ? null : n.transactionInProgress.txHash) || n.completedTransactionTxHash), e.xp6(1), e.ekj("cardForgeArea__cardsToBeFused--disabled", n.uiStateInformation.finalFusingInProgress), e.Q6J("fluxTransactionCost", n.fluxTransactionCost)("fakeForgeCards", n.fakeForgeCards))
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.cardForgeArea__heading[_ngcontent-%COMP%], .cardForgeArea__fluxBalanceArea__balance__number[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.cardForgeArea__fluxBalanceArea__infoButton[_ngcontent-%COMP%], .cardForgeArea__fluxBalanceArea__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.cardForgeArea__fluxBalanceArea__balance__number[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.cardForgeArea__heading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 5);line-height:1.3}.cardForgeArea__fluxBalanceArea__infoButton[_ngcontent-%COMP%], .cardForgeArea__fluxBalanceArea__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{padding-top:calc(var(--vh) * 2);padding-left:calc(var(--vw) * 3);padding-right:calc(var(--vw) * 3);display:flex;height:100%}.cardBrowserArea[_ngcontent-%COMP%]{width:calc(var(--vw) * 44);margin-right:calc(var(--vw) * 2.34)}.cardBrowserArea--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none;opacity:.5}.cardForgeArea[_ngcontent-%COMP%]{flex:1;display:flex;flex-flow:column nowrap;position:relative}.cardForgeArea__heading[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-align:center;text-transform:uppercase}.cardForgeArea__fluxBalanceArea[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;flex-direction:column}.cardForgeArea__fluxBalanceArea__label[_ngcontent-%COMP%]{color:#f6f6f6;font-weight:700;text-transform:uppercase;text-align:center;margin:0}.cardForgeArea__fluxBalanceArea__balanceRow[_ngcontent-%COMP%]{margin-bottom:calc(var(--vh) * .5);display:flex;justify-content:center}.cardForgeArea__fluxBalanceArea__balance__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.4);background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.cardForgeArea__fluxBalanceArea__balance__number[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-left:calc(var(--vw) * -.1)}.cardForgeArea__fluxBalanceArea__infoButton[_ngcontent-%COMP%]{color:#7192b0;font-weight:700;text-transform:uppercase;text-align:center;cursor:pointer;white-space:nowrap}.cardForgeArea__fluxBalanceArea__infoButton__icon[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * .2);margin-top:calc(var(--vh) * -.1);width:calc(var(--vh) * 2);height:calc(var(--vh) * 2);border-radius:50%;border:calc(var(--vh) * .15) solid #7192b0;display:inline-flex;vertical-align:top}.cardForgeArea__fluxBalanceArea__infoButton__icon[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin:auto;line-height:1;font-weight:700;font-style:normal}.cardForgeArea__circularArea[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;transform:translateY(calc(var(--vh) * 13))}.cardForgeArea__circularArea__progressCircle[_ngcontent-%COMP%]{transform:rotate(180deg)}.cardForgeArea__circularArea__progressCircle--finalProgress[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;transform:rotate(180deg) translate(50%);transform-origin:50% 50%}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]{width:calc(var(--vh) * 21);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]     span{text-transform:capitalize;font-weight:700}.cardForgeArea__circularArea__instructionalText[_ngcontent-%COMP%]     a{color:#affaed}.cardForgeArea__circularArea__previewCardArea[_ngcontent-%COMP%]{top:calc(var(--vh) * -1.3);margin-left:calc(var(--vw) * -.8);user-select:none;pointer-events:none;width:calc(var(--vw) * 18.6);position:absolute;z-index:1;transform:translateY(10%);cursor:pointer}.cardForgeArea__circularArea__previewCardArea__smoke[_ngcontent-%COMP%]{width:calc(var(--vw) * 35);bottom:calc(var(--vh) * 10);position:absolute;left:54%;transform:translate(-50%) scale(.6);transform-origin:50% 100%;opacity:0}.cardForgeArea__circularArea__previewCardArea__card[_ngcontent-%COMP%]{filter:drop-shadow(0 calc(var(--vh) * .5) calc(var(--vw) * 2) black);opacity:0}.cardForgeArea__circularArea__previewCardArea__shimmerArea[_ngcontent-%COMP%]{top:calc(var(--vh) * 4.3);bottom:calc(var(--vh) * 2.3);left:calc(var(--vw) * 2.55);right:calc(var(--vw) * 1.15);position:absolute;overflow:hidden;opacity:0}.cardForgeArea__circularArea__previewCardArea__shimmerArea__shimmer[_ngcontent-%COMP%]{position:absolute;width:150%;height:35%;background:linear-gradient(to bottom,rgba(255,255,255,0) 0%,white 50%,rgba(255,255,255,0) 100%);transform:rotate(15deg) translateY(-120%);top:0;left:-25%;mix-blend-mode:overlay}.cardForgeArea__ctaButton[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;transform:translate(-50%,-10%);min-width:145px}.cardForgeArea__etherscanLink[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;text-transform:uppercase;text-decoration:underline;cursor:pointer}.cardForgeArea__etherscanLink--final[_ngcontent-%COMP%]{position:absolute;bottom:calc(var(--vh) * 3.24)}.cardForgeArea__cardsToBeFused[_ngcontent-%COMP%]{height:calc(var(--vh) * 18.66);margin-bottom:calc(var(--vh) * 3.24);margin-top:auto;display:flex;width:100%;justify-content:center}.cardForgeArea__cardsToBeFused--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none}.cardForgeArea__circularArea__loading[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}"]
            }), o
        })();

        function pc(o, r) {
            1 & o && (e.ynx(0), e._UZ(1, "cerberus-forge-next-step"), e.BQk())
        }

        function _c(o, r) {
            1 & o && e._UZ(0, "cerberus-app-forge-flux")
        }

        let hc = (() => {
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
                    this.featureFlagsService.get(_.vU.fusingNextStepEnabled).pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.ffFusingNextStepEnabled = !!t
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(f.B3))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-forge-routing"]],
                decls: 3,
                vars: 2,
                consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""]],
                template: function (t, n) {
                    if (1 & t && (e.YNc(0, pc, 2, 0, "ng-container", 0), e.YNc(1, _c, 1, 0, "ng-template", null, 1, e.W1O)), 2 & t) {
                        const i = e.MAs(2);
                        e.Q6J("ngIf", n.ffFusingNextStepEnabled)("ngIfElse", i)
                    }
                },
                directives: [l.O5, zs, On],
                styles: ["[_nghost-%COMP%]{display:block}"]
            }), o
        })();

        function mc(o, r) {
            if (1 & o && e._UZ(0, "gu-reward-display", 11), 2 & o) {
                const t = e.oxw().$implicit;
                e.Q6J("imageUrl", t.image_url)("text", t.title)
            }
        }

        function fc(o, r) {
            if (1 & o && e._UZ(0, "gu-reward-display", 12), 2 & o) {
                const t = e.oxw().$implicit;
                e.Q6J("text", t.title)
            }
        }

        function Cc(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, mc, 1, 2, "gu-reward-display", 9), e.YNc(2, fc, 1, 1, "gu-reward-display", 10), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("ngIf", "image" === t.type), e.xp6(1), e.Q6J("ngIf", "stars" === t.type)
            }
        }

        let Pn = (() => {
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
                return new (t || o)(e.Y36(I.Z), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["gu-sealed-deck-rewards-modal"]],
                inputs: {rewards: "rewards"},
                decls: 12,
                vars: 1,
                consts: [[1, "backgroundImagery"], ["bottom", "medium", 1, "header"], ["src", "/assets/images/ui-embellishments/ui--deco-divider.svg", "alt", "small divider", 1, "header__divider", "header__divider--left"], ["size", "large", "fillGradient", "gradients.gold.simple", "align", "center"], ["src", "/assets/images/ui-embellishments/ui--deco-divider.svg", "alt", "small divider", 1, "header__divider"], ["align", "center", "fillColor", "colors.light.100", "kind", "large", 1, "titleText"], ["top", "2x-large", "bottom", "4x-large", 1, "rewardsSection"], [4, "ngFor", "ngForOf"], ["size", "large", "type", "primary", 1, "cta", 3, "click"], ["class", "rewardsSection__reward", 3, "imageUrl", "text", 4, "ngIf"], ["class", "rewardsSection__reward", "iconLigature", "collectable_stars", 3, "text", 4, "ngIf"], [1, "rewardsSection__reward", 3, "imageUrl", "text"], ["iconLigature", "collectable_stars", 1, "rewardsSection__reward", 3, "text"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "div", 0), e.TgZ(1, "gu-vertical-space", 1), e._UZ(2, "img", 2), e.TgZ(3, "gu-heading-text", 3), e._uU(4, " Collect your rewards! "), e.qZA(), e._UZ(5, "img", 4), e.qZA(), e.TgZ(6, "gu-paragraph-text", 5), e._uU(7, " These items have been added to your inventory.\n"), e.qZA(), e.TgZ(8, "gu-vertical-space", 6), e.YNc(9, Cc, 3, 2, "ng-container", 7), e.qZA(), e.TgZ(10, "gu-primary-hex-button", 8), e.NdJ("click", function () {
                        return n.close()
                    }), e._uU(11, "CONFIRM"), e.qZA()), 2 & t && (e.xp6(9), e.Q6J("ngForOf", n.rewards))
                },
                directives: [l.sg, l.O5],
                styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(var(--vh) * 100);width:calc(var(--vw) * 100);margin-top:28px;background-image:linear-gradient(180deg,#1d2f41 0%,#0f1b27 100%)}.backgroundImagery[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-image:url(https://images.godsunchained.com/art2/1024/1325.webp);opacity:.05}.header[_ngcontent-%COMP%]{display:flex;justify-content:center}.header__divider[_ngcontent-%COMP%]{margin:0 16px}.header__divider--left[_ngcontent-%COMP%]{transform:rotate(180deg)}.rewardsSection[_ngcontent-%COMP%]{display:flex;justify-content:center}.rewardsSection__reward[_ngcontent-%COMP%]{margin:0 8px}.cta[_ngcontent-%COMP%]{margin:0 auto}"]
            }), o
        })(), vc = (() => {
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
                return new (t || o)(e.Y36(U.mX), e.Y36(f.qy))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-notify-user"]],
                decls: 16,
                vars: 0,
                consts: [["iconLigature", "close_x", 1, "modal__closeButton", 3, "click"], [1, "modal__header"], [1, "modal__content"], ["top", "3x-large", "bottom", "medium"], ["align", "center", "size", "x-small", "fillGradient", "gradients.gold.simple"], ["top", "medium", "bottom", "medium"], ["fillColor", "colors.light.800", "kind", "x-small", 1, "notifyText"], [1, "modal__btnsGroup"], ["type", "primary", 1, "modal__btn", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.close()
                    }), e.qZA(), e._UZ(1, "div", 1), e.TgZ(2, "div", 2)(3, "gu-vertical-space", 3)(4, "gu-heading-text", 4), e._uU(5, " WEEKEND RANKED UPDATE"), e.qZA()(), e.TgZ(6, "gu-vertical-space", 5)(7, "gu-paragraph-text", 6)(8, "ul")(9, "li"), e._uU(10, " Weekend Ranked is cancelled due to card issues brought on by Update 0.26. "), e.qZA(), e.TgZ(11, "li"), e._uU(12, " The following weekend will host a double rewards Weekend Ranked event. "), e.qZA()()()(), e.TgZ(13, "div", 7)(14, "gu-primary-hex-button", 8), e.NdJ("click", function () {
                        return n.close()
                    }), e._uU(15, " CLOSE "), e.qZA()()())
                },
                styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:650px;text-align:center}.modal__header[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c6a052 2.93%,#ebc98b 25.01%,#fff2d8 50.44%,#ebc98b 74.21%,#c6a052 96.95%);box-shadow:0 2px 5px #0000004d;height:3px;width:100%}.modal__content[_ngcontent-%COMP%]{background:linear-gradient(90deg,#0f1b27 1.39%,#0f1b27 12.6%,#1d2f41 50.06%,#0f1b27 87.64%,#0f1b27 98.63%);box-sizing:border-box;border:2px solid #3D5A74;display:flex;flex-direction:column;padding:0 calc(var(--vw) * 1.5);align-items:center}.modal__btnsGroup[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;padding:20px 0;width:50%}.modal__btn[_ngcontent-%COMP%]{padding:15px;margin:10px}.modal__closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;font-size:calc(var(--vh) * 2);color:#8be1e0;cursor:pointer}.modal__closeButton[_ngcontent-%COMP%]:hover{color:#fff}.notifyText[_ngcontent-%COMP%]{text-align:left}"]
            }), o
        })();
        var Ut = g(87168), bc = g(5284);

        function xc(o, r) {
            1 & o && e._UZ(0, "div", 22)
        }

        function wc(o, r) {
            if (1 & o && e._UZ(0, "img", 23), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw();
                e.Q6J("src", n.isFinalLevel(t.level) ? "/gu-assets/images/rewards-progress/final-gem-point.png" : "/gu-assets/images/rewards-progress/gem-point.png", e.LSH)
            }
        }

        const Mc = function (o, r) {
            return {
                "progressBarContainer__nextReward__milestoneImage--inactive": o,
                "progressBarContainer__nextReward__lastMilestoneImage--inactive": r
            }
        };

        function yc(o, r) {
            if (1 & o && e._UZ(0, "img", 24), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw();
                e.Q6J("ngClass", e.WLB(2, Mc, !n.isFinalLevel(t.level), n.isFinalLevel(t.level)))("src", n.isFinalLevel(t.level) ? "/gu-assets/images/rewards-progress/final-empty-point.png" : "/gu-assets/images/rewards-progress/empty-point.png", e.LSH)
            }
        }

        function kc(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div")(2, "gu-simple-text", 25)(3, "strong"), e._uU(4), e.qZA()(), e.TgZ(5, "gu-simple-text", 26), e._uU(6), e.ALo(7, "titlecase"), e.qZA()(), e.BQk()), 2 & o) {
                const t = r.$implicit;
                e.xp6(4), e.Oqu(t.count), e.xp6(2), e.hij(" x ", e.lcZ(7, 2, "neutral" === t.god ? t.rarity : t.god), " Packs ")
            }
        }

        const Oc = function (o, r) {
            return {progressBarContainer__nextReward__level: o, progressBarContainer__lastReward__level: r}
        };

        function Pc(o, r) {
            if (1 & o && (e.TgZ(0, "div", 14), e._UZ(1, "reward-state", 15), e.YNc(2, xc, 1, 0, "div", 16), e.TgZ(3, "picture"), e.YNc(4, wc, 1, 1, "img", 17), e.YNc(5, yc, 1, 5, "img", 18), e.qZA(), e.TgZ(6, "gu-paragraph-text", 19), e._uU(7), e.qZA(), e.TgZ(8, "div", 20), e.YNc(9, kc, 8, 4, "ng-container", 21), e.qZA()()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("rewardLevel", t.level)("isAchieved", t.achieved)("playerLevel", n.currentPlayerlevel)("finalRewardLevel", 6)("diety", n.getDietyType(t.reward)), e.xp6(1), e.Q6J("ngIf", t.achieved), e.xp6(2), e.Q6J("ngIf", t.achieved), e.xp6(1), e.Q6J("ngIf", !t.achieved), e.xp6(1), e.Q6J("ngClass", e.WLB(11, Oc, !n.isFinalLevel(t.level), n.isFinalLevel(t.level))), e.xp6(1), e.hij(" Level ", t.level, ""), e.xp6(2), e.Q6J("ngForOf", t.reward)
            }
        }

        let Sn = (() => {
            class o {
                constructor(t, n, i, a, s, c) {
                    this.progressionService = t, this.activeModal = n, this.userService = i, this.router = a, this.environment = s, this.akumaService = c, this.unsubscribe = new M.xQ, this.progressBarPercent = 0
                }

                ngOnInit() {
                    this.akumaService.postScreenEvent("quest", "NewPlayerRewards", "", "opened"), this.userService.extendedAccountProperties$.pipe((0, Ut.M)(this.progressionService.accountThresholds$), (0, p.R)(this.unsubscribe)).subscribe(([t, n]) => {
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
                    this.akumaService.postControlEvent("quest", "NewPlayerRewards", "", "openPacks", "Btn", "pressed"), this.akumaService.postFlowEvent("questRewardClaim", "succeeded"), this.router.navigate([Re.gv.routeContent(this.environment).openPacks.path])
                }

                close() {
                    this.activeModal.close()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(j.$z), e.Y36(U.mX), e.Y36(ce.MZ), e.Y36(pe.F0), e.Y36(f.Ho), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-progression-rewards"]],
                decls: 21,
                vars: 5,
                consts: [["iconLigature", "close_x", "fillGradient", "gradients.gold.simple", 1, "closeButton", 3, "click"], [1, "modalContent__background"], ["type", "image/webp", "srcset", "/gu-assets/images/rewards-progress/hyperion-titan-background.webp"], ["src", "/gu-assets/images/rewards-progress/hyperion-titan-background.png", "alt", "", 1, "modalContent__background__img"], [1, "modalContent"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "x-small", 1, "modalContent__heading"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "small", 1, "modalContent__title"], ["iconligature", "filter_rarity", "fillgradient", "gradients.gold.simple", "fillgradienttarget", "bottom"], ["fillColor", "colors.light.300", 1, "modalContent__subTitle"], [1, "progressBarContainer"], ["color", "aqua", 1, "progressBarContainer__progressBar", 3, "percentage", "height", "showDivider", "animateFirstValue"], [1, "progressBarContainer__rewards"], ["class", "progressBarContainer__nextReward", 4, "ngFor", "ngForOf"], ["type", "primary", "size", "large", 1, "openPacks_btn", 3, "click"], [1, "progressBarContainer__nextReward"], [3, "rewardLevel", "isAchieved", "playerLevel", "finalRewardLevel", "diety"], ["class", "progressBarContainer__nextReward__highlight", 4, "ngIf"], ["class", "progressBarContainer__nextReward__milestoneImage--active", "alt", "", 3, "src", 4, "ngIf"], ["alt", "", 3, "ngClass", "src", 4, "ngIf"], ["fillcolor", "colors.gunmetal.300", "kind", "tag", 3, "ngClass"], [1, "progressBarContainer__nextReward__milestoneRewards"], [4, "ngFor", "ngForOf"], [1, "progressBarContainer__nextReward__highlight"], ["alt", "", 1, "progressBarContainer__nextReward__milestoneImage--active", 3, "src"], ["alt", "", 3, "ngClass", "src"], ["fillColor", "colors.light.300", "kind", "large"], ["fillColor", "colors.light.300", "kind", "small"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-icon", 0), e.NdJ("click", function () {
                        return n.close()
                    }), e.qZA(), e.TgZ(1, "picture", 1), e._UZ(2, "source", 2)(3, "img", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "gu-heading-text", 5), e._uU(6, " Player Progress "), e.qZA(), e.TgZ(7, "gu-heading-text", 6), e._UZ(8, "gu-icon", 7), e._uU(9, " New Player Rewards "), e.qZA(), e.TgZ(10, "gu-simple-text", 8), e._uU(11, " Earn up to "), e.TgZ(12, "strong"), e._uU(13, "24 CORE PACKS"), e.qZA(), e._uU(14, " by playing ranked matches. "), e.qZA(), e.TgZ(15, "div", 9), e._UZ(16, "app-progress-bar", 10), e.TgZ(17, "div", 11), e.YNc(18, Pc, 10, 14, "div", 12), e.qZA()(), e.TgZ(19, "gu-primary-hex-button", 13), e.NdJ("click", function () {
                        return n.openPacks()
                    }), e._uU(20, "Open Packs"), e.qZA()()), 2 & t && (e.xp6(16), e.Q6J("percentage", n.progressBarPercent)("height", 12)("showDivider", !1)("animateFirstValue", !0), e.xp6(2), e.Q6J("ngForOf", n.newPlayerRewards))
                },
                styles: ['[_nghost-%COMP%]{position:relative;margin:auto;background:#0F1B27;box-shadow:0 20px 6px #030b13b3,0 16px 14px #00000036;border-radius:2px}@media only screen and (max-width: 1400px){[_nghost-%COMP%]{width:1065px;height:620px}}.closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;width:20px;height:20px;font-size:13px;border-radius:50%;display:flex;line-height:1;border:2px solid #EBC98B;cursor:pointer}.closeButton[_ngcontent-%COMP%]:hover{background:get("colors.gunmetal.300")}.closeButton[_ngcontent-%COMP%]     i{margin:auto;line-height:1}.modalContent[_ngcontent-%COMP%]{display:flex;flex-flow:column;position:absolute;top:0px;width:100%;height:100%}.modalContent__heading[_ngcontent-%COMP%]{margin:20px}.modalContent__background__img[_ngcontent-%COMP%], .modalContent__headerPicture__img[_ngcontent-%COMP%]{object-fit:cover;width:100%}.modalContent__title[_ngcontent-%COMP%]{margin-top:200px;align-self:center}@media only screen and (max-width: 1400px){.modalContent__title[_ngcontent-%COMP%]{margin-top:100px}}.modalContent__subTitle[_ngcontent-%COMP%]{align-self:center}.progressBarContainer[_ngcontent-%COMP%]{padding:5px;margin-top:270px;position:relative}@media only screen and (max-width: 1400px){.progressBarContainer[_ngcontent-%COMP%]{margin-top:170px}}.progressBarContainer__rewards[_ngcontent-%COMP%]{position:absolute;top:-80px;display:flex;flex-direction:row;width:100%;justify-content:space-evenly}.progressBarContainer__progressBar[_ngcontent-%COMP%]{border-top:.5px solid #C6A052;border-bottom:.5px solid #C6A052;margin-top:21px;margin-left:165px;margin-right:190px;clip-path:polygon(10px 0%,calc(100% - 10px) 0%,100% 50%,calc(100% - 10px) 100%,10px 100%,0% 50%)}@media only screen and (max-width: 1400px){.progressBarContainer__progressBar[_ngcontent-%COMP%]{margin-left:90px;margin-right:120px}}.progressBarContainer__nextReward[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.progressBarContainer__lastReward__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:20px}.progressBarContainer__nextReward__highlight[_ngcontent-%COMP%]{background:linear-gradient(270deg,rgba(0,0,0,0) -1.52%,#54bbcd 33.58%,#affaed 48.76%,#54bbcd 66.2%,rgba(0,0,0,0) 102.27%);box-shadow:0 0 3px #94e6fb80;width:50px;height:3px}.progressBarContainer__nextReward__milestoneImage--active[_ngcontent-%COMP%]{margin-top:22px}.progressBarContainer__nextReward__milestoneImage--inactive[_ngcontent-%COMP%]{margin-top:24px}.progressBarContainer__nextReward__lastMilestoneImage--inactive[_ngcontent-%COMP%]{margin-top:19px}.progressBarContainer__nextReward__level[_ngcontent-%COMP%]{margin-top:22px}.progressBarContainer__lastReward__level[_ngcontent-%COMP%]{margin-top:10px}.progressBarContainer__nextReward__milestoneRewards[_ngcontent-%COMP%]{display:flex;flex-flow:column;align-items:center}.openPacks_btn[_ngcontent-%COMP%]{position:absolute;bottom:20px;align-self:center}']
            }), o
        })();

        function Sc(o, r) {
            if (1 & o && (e.TgZ(0, "gu-heading-text", 14), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" ", null == t.account ? null : t.account.username + ' - ' + t.user.user_id, " ")
            }
        }

        function Tc(o, r) {
            if (1 & o && (e.TgZ(0, "gu-heading-text", 15), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" ", null == t.account ? null : t.account.username + ' - ' + t.user.user_id, " ")
            }
        }

        const Ic = function (o) {
            return {glow: o}
        };

        function Ac(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 16)(1, "div", 17)(2, "gu-body-text", 18), e._uU(3, ""), e.qZA(), e.TgZ(4, "gu-body-text", 19), e._uU(5), e.qZA()(), e._UZ(6, "gu-hex-progress-bar", 20), e.TgZ(7, "div", 21), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw(2);
                    return !!i.isNewUserEligibleForRewards && i.openRewardsModal()
                }), e.TgZ(8, "app-tooltip", 22), e._UZ(9, "i", 23)(10, "gu-card-pack-picture", 24), e.qZA()()()
            }
            if (2 & o) {
                const t = e.oxw(2);
                e.xp6(5), e.hij("Next milestone in " + t.user.xp_to_next + " XP - Level ", t.user.level + 1, " "), e.xp6(1), e.Q6J("progress", t.xpProgress), e.xp6(2), e.Q6J("autoClose", !t.isNewUserWithUnopenedPacks)("title", t.isNewUserWithUnopenedPacks ? "Click to see <br/> unlocked rewards" : t.nextReward.god + " Core " + t.nextReward.rarity + " pack"), e.xp6(1), e.Q6J("ngClass", e.VKq(7, Ic, t.isNewUserWithUnopenedPacks)), e.xp6(1), e.Q6J("god", t.nextReward.god)("rarity", t.nextReward.rarity)
            }
        }

        function Fc(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4), e._UZ(3, "img", 5), e.qZA(), e.TgZ(4, "div", 6)(5, "div", 7)(6, "gu-primary-hex-button", 8), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().showUpcomingDailyRewardsInfo()
                }), e._uU(7, "Daily $GODS Rewards "), e.qZA(), e.TgZ(8, "div", 9)(9, "gu-body-text", 10), e._uU(10), e.qZA(), e.YNc(11, Sc, 2, 1, "gu-heading-text", 11), e.YNc(12, Tc, 2, 1, "gu-heading-text", 12), e.YNc(13, Ac, 11, 9, "div", 13), e.qZA()()()()()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(9), e.Udp("color", t.user.rank_color), e.xp6(1), e.hij(" ", t.user.rank, " "), e.xp6(1), e.Q6J("ngIf", t.userNameContainsEmoji), e.xp6(1), e.Q6J("ngIf", !t.userNameContainsEmoji), e.xp6(1), e.Q6J("ngIf", t.showProgressBar && t.nextReward)
            }
        }

        var st = (() => {
            return (o = st || (st = {})).v0 = "v0", o.v1 = "v1", st;
            var o
        })();
        let Tn = (() => {
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
                    this.packService.fetchUnopenedPacks(), this.packService.unopenedPacks$.pipe((0, Ut.M)(this.guUserService.extendedAccountProperties$), (0, p.R)(this.unsubscribe)).subscribe(([t, n]) => {
                        this.isNewUserEligibleForRewards = n.extra.progression_version === st.v1 && n.level <= 6, this.isEligibleUserWithUnopenedPacks(t, n) && (this.isNewUserWithUnopenedPacks = !0, this.akumaService.postScreenEvent("arena", "PopNewRewardsUnlocked", "", "opened"), this.akumaService.postFlowEvent("questNotification", "started"))
                    })
                }

                isEligibleUserWithUnopenedPacks(t, n) {
                    return t.length > 0 && n.level > 0 && n.level <= 6 && this.isNewUserEligibleForRewards
                }

                initUserDetails() {
                    (0, Z.aj)([this.guUserService.extendedAccountProperties$, this.authService.account$, this.progressionService.accountThresholds$]).pipe((0, p.R)(this.unsubscribe), (0, S.h)(([t, n, i]) => !!i.length && !!n)).subscribe(([t, n, i]) => {
                        this.account = n, this.user = t, this.userNameContainsEmoji = bc.uA.stringContainsEmoji(this.account.username), this.xpProgress = et({
                            xp: t.total_xp,
                            levelThresholds: i
                        });
                        const a = this.packService.fixGodAlignments(i[this.user.level + 1].reward);
                        this.nextReward = this.chooseBestReward(a)
                    })
                }

                showUpcomingDailyRewardsInfo() {
                    const n = this.cerberusModalService.open(It.M, {
                        defaultStylings: !1,
                        centered: !0,
                        size: "lg"
                    }).componentInstance;
                    n.title = "DAILY $GODS REWARDS COMING SOON", n.content = "We are working on a feature that allows you to earn $GODS everyday by playing the game! Stay tuned for more information.", n.primaryButton = {
                        text: "CLOSE",
                        closeOnClick: !0
                    }, n.type = "info"
                }

                openRewardsModal() {
                    const t = this.cerberusModalService.open(Sn);
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
                return new (t || o)(e.Y36(ce.MZ), e.Y36(j.$z), e.Y36(Oe.F), e.Y36(f.mI), e.Y36(U.Qz), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-player-stats"]],
                inputs: {progressPercent: "progressPercent", showProgressBar: "showProgressBar"},
                decls: 2,
                vars: 1,
                consts: [["class", "wrapper", 4, "ngIf"], [1, "background-filter"], [1, "wrapper"], [1, "columns", "is-gapless", "wrapper__sections"], [1, "column", "is-5-hidden"], ["src", "/assets/images/internal-logos/logo--gods-unchained-flat.svg", 1, "logo"], [1, "column", "is-7", "wrapper__section-right"], [1, "headerRight"], ["type", "secondary", "icon", "collectable_fragment", "iconPosition", "left", "theme", "gunmetal", 3, "click"], [1, "statsWrapper"], ["size", "x-small", "fontWeight", "bold", "fillColor", "colors.gunmetal.100", 1, "playerRank"], ["size", "x-small", "class", "playerName", "fillColor", "colors.gold.500", 4, "ngIf"], ["size", "x-small", "class", "playerName", "fillGradient", "gradients.gold.simple", 4, "ngIf"], ["class", "progress-bar", 4, "ngIf"], ["size", "x-small", "fillColor", "colors.gold.500", 1, "playerName"], ["size", "x-small", "fillGradient", "gradients.gold.simple", 1, "playerName"], [1, "progress-bar"], [1, "milestone"], ["size", "small", "fontWeight", "regular"], ["size", "small", "fontWeight", "bold"], [3, "progress"], [3, "click"], [1, "progress-bar__reward", 3, "autoClose", "title"], [1, "progress-bar__reward-squares", 3, "ngClass"], ["set", "core", 1, "progress-bar__reward-image", 3, "god", "rarity"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Fc, 14, 6, "div", 0), e._UZ(1, "div", 1)), 2 & t && e.Q6J("ngIf", n.user)
                },
                directives: [l.O5, Ze.K, l.mk],
                styles: ['h1[_ngcontent-%COMP%],h2[_ngcontent-%COMP%],h3[_ngcontent-%COMP%],h4[_ngcontent-%COMP%],h5[_ngcontent-%COMP%],h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%],label[_ngcontent-%COMP%],a[_ngcontent-%COMP%],div[_ngcontent-%COMP%],input[_ngcontent-%COMP%],button[_ngcontent-%COMP%],p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%],h2[_ngcontent-%COMP%],h3[_ngcontent-%COMP%],h4[_ngcontent-%COMP%],h5[_ngcontent-%COMP%],h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}[_nghost-%COMP%]{height:100%;display:flex;flex-wrap:wrap;position:relative}.wrapper[_ngcontent-%COMP%]{width:100%;background-size:cover;background-position:left -120px top 13%;padding:8px;border-radius:4px;max-height:100%;}.wrapper__sections[_ngcontent-%COMP%]{height:100%}.wrapper__section-right[_ngcontent-%COMP%]{height:100%;}.background-filter[_ngcontent-%COMP%]{display:none;}.logo[_ngcontent-%COMP%]{width:132px;height:41px;}.headerRight[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;flex-direction:column-reverse;align-items:flex-start;}.statsWrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;width:400px;}.milestone[_ngcontent-%COMP%]{margin-bottom:8px;}.playerName[_ngcontent-%COMP%]{line-height:1.1 !important;text-shadow:1px 1px 1px rgb(0 0 0 / 15%);}.statDisplays__stat[_ngcontent-%COMP%]{display:flex;margin-right:calc(var(--vw) * 1.5)}.progress-bar[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .6);margin-bottom:calc(var(--vh) * 2.2);width:100%;position:relative}.progress-bar__reward[_ngcontent-%COMP%]{position:absolute;top:0;right:-52px;width:52px;height:52px;display:flex;transform:translate(-17%,20%);}.progress-bar__reward[_ngcontent-%COMP%] .tooltipBubble--top {margin-top:-24px}.progress-bar__reward-squares[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;transform:rotate(45deg);border:1px solid var(--gu-yellow);padding:4.8px;background:var(--gu-blue-dark);}.progress-bar__reward-squares[_ngcontent-%COMP%]:before {content:"";display:block;width:100%;height:100%;border:1px solid var(--gu-blue-hover);}.glow[_ngcontent-%COMP%]{box-shadow:0 0 10px #e5e5e5}.progress-bar__reward-image[_ngcontent-%COMP%]{margin:auto;width:48px;transform:translateY(-6%)}gu-hex-progress-bar[_ngcontent-%COMP%]{flex:1;}@media screen and (min-width:1920px) {.background-filter[_ngcontent-%COMP%]{border-radius:8px}.wrapper[_ngcontent-%COMP%]{padding:16px;border-radius:8px}.wrapper[_ngcontent-%COMP%]{background-position:left -50px top 13%}.logo[_ngcontent-%COMP%]{width:220px;height:69px}}']
            }), o
        })();

        function Zc(o, r) {
            if (1 & o && (e._UZ(0, "img", 4), e.ALo(1, "lowercase")), 2 & o) {
                const t = e.oxw();
                e.MGl("src", "/gu-assets/images/gods/no-background/", e.lcZ(1, 1, t.god), "-color-cob.webp", e.LSH)
            }
        }

        function Dc(o, r) {
            1 & o && e._UZ(0, "gu-icon", 5)
        }

        function Gc(o, r) {
            1 & o && e._UZ(0, "gu-icon", 10)
        }

        function Bc(o, r) {
            1 & o && e._UZ(0, "gu-icon", 10)
        }

        function Uc(o, r) {
            1 & o && e._UZ(0, "gu-icon", 10)
        }

        function Lc(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div", 6), e.YNc(2, Gc, 1, 0, "gu-icon", 7), e.qZA(), e.TgZ(3, "div", 8), e.YNc(4, Bc, 1, 0, "gu-icon", 7), e.qZA(), e.TgZ(5, "div", 9), e.YNc(6, Uc, 1, 0, "gu-icon", 7), e.qZA(), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.ekj("winCircle--complete", t.wins >= 2), e.xp6(1), e.Q6J("ngIf", t.wins >= 2), e.xp6(1), e.ekj("winCircle--complete", t.wins >= 1), e.xp6(1), e.Q6J("ngIf", t.wins >= 1), e.xp6(1), e.ekj("winCircle--complete", t.wins >= 3), e.xp6(1), e.Q6J("ngIf", t.wins >= 3)
            }
        }

        let In = (() => {
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
                    1 & t && (e.TgZ(0, "div", 0), e.YNc(1, Zc, 2, 3, "img", 1), e.YNc(2, Dc, 1, 0, "gu-icon", 2), e.YNc(3, Lc, 7, 9, "ng-container", 3), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngIf", n.god), e.xp6(1), e.Q6J("ngIf", !n.god), e.xp6(1), e.Q6J("ngIf", n.wins > 0))
                },
                directives: [l.O5],
                pipes: [l.i8],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}[_nghost-%COMP%]{height:calc(var(--vh) * 10);width:calc(var(--vh) * 10);display:flex;flex-direction:column;overflow:hidden;background-color:#000;position:absolute;transform:rotate(45deg)}.unlockBorder[_nghost-%COMP%]{border:2px solid var(--gu-blue);}.greyed[_nghost-%COMP%]{filter:grayscale(1)}.index--0[_nghost-%COMP%]{top:0;left:50%;transform:translate(-50%) rotate(45deg)}.index--1[_nghost-%COMP%]{right:0;top:17%}.index--2[_nghost-%COMP%]{right:0;bottom:17%}.index--3[_nghost-%COMP%]{bottom:0;left:50%;transform:translate(-50%) rotate(45deg)}.index--4[_nghost-%COMP%]{left:0;bottom:17%}.index--5[_nghost-%COMP%]{left:0;top:17%}.wrapper[_ngcontent-%COMP%]{height:100%;width:100%;transform:rotate(-45deg)}.godImage[_ngcontent-%COMP%]{position:relative;margin-top:calc(var(--vh) * -2);margin-top:-20%;margin-left:calc(var(--vh) * -4.2);margin-left:-42%;height:calc(var(--vh) * 20);height:200%}.godImage--noGod[_ngcontent-%COMP%]{filter:brightness(.1) contrast(0) blur(1px)}.lock[_ngcontent-%COMP%]{color:#272727;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:calc(var(--vh) * 4)}.winCircle[_ngcontent-%COMP%]{width:calc(var(--vh) * 2.5);width:25%;height:calc(var(--vh) * 2.5);height:25%;border-radius:50%;background-color:#000;position:absolute;border:1px solid var(--gu-yellow);}.winCircle--0[_ngcontent-%COMP%]{left:11%;bottom:15%}.winCircle--1[_ngcontent-%COMP%]{left:50%;transform:translate(-50%);bottom:-10%}.winCircle--2[_ngcontent-%COMP%]{right:9%;bottom:15%}.winCircle--complete[_ngcontent-%COMP%]{background:var(--gu-blue);border:none}.winCircle__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9);text-align:center;height:100%;width:100%;position:absolute;color:#000}.line[_ngcontent-%COMP%]{position:absolute;width:500px;height:1px;border:solid var(--gu-red) 1px;}.top[_ngcontent-%COMP%]{top:0;left:50%;transform:translate(-50%)}.bot[_ngcontent-%COMP%]{bottom:0;left:50%;transform:translate(-50%)}"]
            }), o
        })(), An = (() => {
            class o {
                transform(t, n, i = !0) {
                    if (t) {
                        let a = Math.floor((+new Date(t) - +new Date(n)) / 1e3), c = "";
                        return [{unit: 86400, symbol: "d"}, {unit: 3600, symbol: "h"}, {
                            unit: 60,
                            symbol: "m"
                        }, {unit: 1, symbol: "s"}].forEach(d => {
                            const u = Math.floor(a / d.unit);
                            a -= d.unit * u, c += `${u}${d.symbol} `
                        }), i || "-" !== c.slice(0, 1) ? c : "0d 0h 0m 0s"
                    }
                    return t
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275pipe = e.Yjl({name: "dateTo", type: o, pure: !0}), o
        })();

        function Ec(o, r) {
            if (1 & o && e._UZ(0, "app-flux-god-portrait", 20), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.Q6J("index", t)("wins", null == n.gauntletSlots[t] ? null : n.gauntletSlots[t].wins)("god", null == n.gauntletSlots[t] ? null : n.gauntletSlots[t].god)("unlock", null == n.gauntletSlots[t] ? null : n.gauntletSlots[t].unlock)
            }
        }

        function Nc(o, r) {
            if (1 & o && (e.TgZ(0, "div", 21), e._uU(1), e.ALo(2, "dateTo"), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" New Gauntlet begins in ", e.Dn7(2, 1, t.refreshDate, t.nowDate, !1), " ")
            }
        }

        function qc(o, r) {
            1 & o && (e.TgZ(0, "div", 21), e._uU(1, " Win a game to unlock your gauntlet. "), e.qZA())
        }

        const Qc = function () {
            return [0, 1, 2, 3, 4, 5]
        };
        let Rc = (() => {
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
                    this.gauntletService.gauntletSlots$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => this.gauntletSlots = t)
                }

                initDate() {
                    this.gauntletService.refreshDate$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => this.refreshDate = t)
                }

                initGauntletFlux() {
                    this.gauntletService.gauntletFlux$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => this.gauntletFlux = t)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(I.Z), e.Y36(Fe))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-gauntlet-progress-modal"]],
                decls: 54,
                vars: 5,
                consts: [[1, "gradientOverlay"], [1, "leftArea"], [1, "leftArea__subTitle"], [1, "leftArea__title"], [1, "leftArea__description"], [1, "leftArea__item"], [1, "leftArea__item__number"], [1, "leftArea__item__textArea"], [1, "leftArea__item__textArea__top"], [1, "leftArea__item__textArea__bottom"], [1, "rightArea"], [1, "rightArea__gauntlet"], [3, "index", "wins", "god", "unlock", 4, "ngFor", "ngForOf"], [1, "rightArea__gauntlet__flux"], [1, "rightArea__gauntlet__flux__text"], [1, "rightArea__gauntlet__flux__balance"], ["iconLigature", "flux_symbol", 1, "rightArea__gauntlet__flux__balance__icon"], [1, "rightArea__gauntlet__flux__balance__value"], ["class", "rightArea__countdown", 4, "ngIf"], ["type", "primary", "size", "large", 1, "acceptButton", 3, "click"], [3, "index", "wins", "god", "unlock"], [1, "rightArea__countdown"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "div", 0), e.TgZ(1, "div", 1)(2, "div", 2), e._uU(3, " Flux and Fusing "), e.qZA(), e.TgZ(4, "div", 3), e._uU(5, " gauntlet of the gods "), e.qZA(), e.TgZ(6, "div", 4), e._uU(7, " Battle for each god and be rewarded for your effort "), e.qZA(), e.TgZ(8, "div", 5)(9, "div", 6), e._uU(10, " 1 "), e.qZA(), e.TgZ(11, "div", 7)(12, "div", 8), e._uU(13, " Win Ranked Constructed games "), e.qZA(), e.TgZ(14, "div", 9), e._uU(15, " Unlock gods as you move around the circle "), e.qZA()()(), e.TgZ(16, "div", 5)(17, "div", 6), e._uU(18, " 2 "), e.qZA(), e.TgZ(19, "div", 7)(20, "div", 8), e._uU(21, " Earn Flux "), e.qZA(), e.TgZ(22, "div", 9), e._uU(23, " Fuse identical cards into a better version "), e.qZA()()(), e.TgZ(24, "div", 5)(25, "div", 6), e._uU(26, " 3 "), e.qZA(), e.TgZ(27, "div", 7)(28, "div", 8), e._uU(29, " Enter the Forge "), e.qZA(), e.TgZ(30, "div", 9), e._uU(31, " Use Flux to fuse identical cards into better versions "), e.qZA()()(), e.TgZ(32, "div", 5)(33, "div", 6), e._uU(34, " 4 "), e.qZA(), e.TgZ(35, "div", 7)(36, "div", 8), e._uU(37, " Trade your wares "), e.qZA(), e.TgZ(38, "div", 9), e._uU(39, " Sell cards on the Marketplace for ETH "), e.qZA()()()(), e.TgZ(40, "div", 10)(41, "div", 11), e.YNc(42, Ec, 1, 4, "app-flux-god-portrait", 12), e.TgZ(43, "div", 13)(44, "div", 14), e._uU(45, " flux "), e.qZA(), e.TgZ(46, "div", 15), e._UZ(47, "gu-icon", 16), e.TgZ(48, "div", 17), e._uU(49), e.qZA()()()(), e.YNc(50, Nc, 3, 5, "div", 18), e.YNc(51, qc, 2, 0, "div", 18), e.qZA(), e.TgZ(52, "gu-primary-hex-button", 19), e.NdJ("click", function () {
                        return n.close()
                    }), e._uU(53, "BEGIN"), e.qZA()), 2 & t && (e.xp6(42), e.Q6J("ngForOf", e.DdM(4, Qc)), e.xp6(7), e.hij(" ", n.gauntletFlux, " "), e.xp6(1), e.Q6J("ngIf", n.gauntletSlots.length && n.refreshDate), e.xp6(1), e.Q6J("ngIf", !n.gauntletSlots.length))
                },
                directives: [l.sg, In, l.O5],
                pipes: [An],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.rightArea__gauntlet__flux__balance__icon[_ngcontent-%COMP%], .rightArea__gauntlet__flux__balance__value[_ngcontent-%COMP%], .leftArea__item__number[_ngcontent-%COMP%], .leftArea__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.rightArea__gauntlet__flux__text[_ngcontent-%COMP%], .leftArea__subTitle[_ngcontent-%COMP%], .rightArea__countdown[_ngcontent-%COMP%], .leftArea__item__textArea__bottom[_ngcontent-%COMP%], .leftArea__description[_ngcontent-%COMP%], .leftArea__item__textArea__top[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.leftArea__item__number[_ngcontent-%COMP%], .leftArea__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.rightArea__gauntlet__flux__balance__value[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 5);line-height:1.3}.rightArea__gauntlet__flux__balance__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 6);line-height:1.3}.leftArea__item__textArea__top[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.rightArea__countdown[_ngcontent-%COMP%], .leftArea__item__textArea__bottom[_ngcontent-%COMP%], .leftArea__description[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.rightArea__gauntlet__flux__text[_ngcontent-%COMP%], .leftArea__subTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;justify-content:space-evenly;position:relative;margin:auto;margin-top:calc(var(--vh) * 5);width:calc(var(--vw) * 70);height:calc(var(--vh) * 80);border:1px solid #182531;background-image:url(/gu-assets/images/backgrounds/trader-overlay-bg.webp);background-size:cover;background-position:center}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.gradientOverlay[_ngcontent-%COMP%]{position:absolute;width:calc(var(--vw) * 70);height:calc(var(--vh) * 80);border:1px solid #182531;background:radial-gradient(ellipse at center,rgba(12,22,32,0) -80%,#0c1620 70%)}.flexWrapper[_ngcontent-%COMP%]{display:flex}.leftArea[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 10);display:flex;flex-flow:column nowrap}.leftArea__subTitle[_ngcontent-%COMP%]{text-transform:uppercase}.leftArea__title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-transform:uppercase}.leftArea__description[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.5);margin-bottom:calc(var(--vh) * 1)}.leftArea__item[_ngcontent-%COMP%]{display:flex;margin-top:calc(var(--vh) * 3)}.leftArea__item__button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.leftArea__item__number[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.leftArea__item__textArea[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;margin-left:calc(var(--vh) * 2);align-self:center}.leftArea__item__textArea__bottom[_ngcontent-%COMP%]{font-style:italic}.rightArea[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;margin-left:calc(var(--vh) * 2)}.rightArea__gauntlet[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 10);position:relative;height:calc(var(--vh) * 40);width:calc(var(--vh) * 40)}.rightArea__gauntlet__flux[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column}.rightArea__gauntlet__flux__text[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center}.rightArea__gauntlet__flux__balance[_ngcontent-%COMP%]{display:flex}.rightArea__gauntlet__flux__balance__icon[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.rightArea__gauntlet__flux__balance__value[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-left:calc(var(--vh) * 1)}.rightArea__countdown[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:calc(var(--vh) * 20);text-align:center;font-style:italic;color:#8295a2}.acceptButton[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);bottom:5%}"]
            }), o
        })();

        function Hc(o, r) {
            1 & o && e._UZ(0, "app-rectangular-spinner", 4)
        }

        function Yc(o, r) {
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

        function Jc(o, r) {
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

        let Fn = (() => {
            class o {
                constructor(t, n, i, a, s, c, d) {
                    this.decksService = t, this.cardsService = n, this.modalService = i, this.moduleConfigService = a, this.audioService = s, this.akumaService = c, this.sealedService = d, this.filters = _.iZ.standardCardFilters(m.nE.All, m.PE.AscID, "genesis", ""), this.availableFilters = [{
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
                    this.decksService.deckSelectMode$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => {
                        this.deckSelectMode = t.deckSelect, this.gameModeID = t.gameModeID, this.forAI = t.forAI
                    })).subscribe()
                }

                initDecks() {
                    this.decksService.activeDeckChange$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => null !== t), (0, b.b)(t => this.onActiveDeckChange(t))).subscribe()
                }

                onActiveDeckChange(t) {
                    switch (t.type) {
                        case le.u4.Change:
                            this.selectNewDeck(t.deck);
                            break;
                        case le.u4.CardLimit:
                        case le.u4.DeckLimit:
                            break;
                        default:
                            this.selectNewDeck(t.deck)
                    }
                }

                selectNewDeck(t) {
                    this.activeDeck = t, this.deckCards = [...t.items], this.deckCardIds = [...t.items.map(n => n.id)]
                }

                initCards() {
                    this.loading = !0, (0, Z.aj)([this.sealedService.sealedMode$, this.cardsService.protoCards$]).pipe((0, p.R)(this.unsubscribe), (0, S.h)(([t, n]) => t && n && n.size > 0)).subscribe(([t, n]) => {
                        const i = Array.from(n.values()).filter(s => t.protos.includes(s.proto));
                        this.sealedMode = t;
                        const a = t.protos.map((s, c) => {
                            const d = this.decksService.generateUniqueCardId(P.B_.SEALED_DECK, s, c);
                            return new m.Zb(d, s, 5, n.get(s))
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
                return new (t || o)(e.Y36(te.D), e.Y36(_.dK), e.Y36(I.Z), e.Y36(_.LE), e.Y36(f.pk), e.Y36(_.jt), e.Y36(X.H))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-sealed-deck-builder"]],
                decls: 4,
                vars: 4,
                consts: [[3, "closeButtonClickFn"], ["class", "spinner", 4, "ngIf"], ["class", "card-selection", 3, "protoCards", "inventoryCards", "god", "filterCardIds", "customInventoryCardsMap", "selectCardId", 4, "ngIf"], [3, "deckCards", "deckSelectMode", "gameModeID", "deck", "forAI", "selectCards", 4, "ngIf"], [1, "spinner"], [1, "card-selection", 3, "protoCards", "inventoryCards", "god", "filterCardIds", "customInventoryCardsMap", "selectCardId"], [3, "deckCards", "deckSelectMode", "gameModeID", "deck", "forAI", "selectCards"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.YNc(1, Hc, 1, 0, "app-rectangular-spinner", 1), e.YNc(2, Yc, 1, 5, "app-cards-list", 2), e.YNc(3, Jc, 1, 5, "app-active-deck", 3)), 2 & t && (e.Q6J("closeButtonClickFn", n.destroyModal), e.xp6(1), e.Q6J("ngIf", n.loading), e.xp6(1), e.Q6J("ngIf", !n.loading), e.xp6(1), e.Q6J("ngIf", n.activeDeck))
                },
                directives: [ye, l.O5, it, Tt, mn],
                styles: ["[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 calc(var(--vh) * 7.7);padding-top:calc(var(--vh) * 4.5);height:100%}app-cards-list[_ngcontent-%COMP%]{flex:1}app-active-deck[_ngcontent-%COMP%]{height:calc(var(--vh) * 37)}.spinner[_ngcontent-%COMP%]{margin:auto}.exportCta[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 5);right:calc(var(--vh) * 17)}"]
            }), o
        })();
        g(21960), g(90473), g(85353), g(66678), g(43337), g(51256), g(263);
        var $c = g(98590);

        function Wc(o, r) {
            1 & o && e._UZ(0, "app-card2", 10), 2 & o && e.Q6J("protoId", r.$implicit)
        }

        const zc = function (o, r, t) {
            return {"bottomSection__cards--three": o, "bottomSection__cards--four": r, "bottomSection__cards--five": t}
        };
        let jc = (() => {
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
                return new (t || o)(e.Y36(U.mX))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-deck-codes-unowned-cards-modal"]],
                inputs: {unownedProtos: "unownedProtos"},
                decls: 15,
                vars: 8,
                consts: [["background", "87055", 3, "onCloseSealedDeckModal"], ["slot", "topSectionSubtitle", "fillColor", "colors.light.300", "kind", "large", "align", "left", "fontWeight", "bold", 1, "topSection__subtitle"], ["slot", "topSectionTitle", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "large"], ["slot", "topSectionHelptext", "fillColor", "colors.light.500", "kind", "help", "align", "left", 1, "topSection__subtitle"], ["slot", "bottomSectionContent", "top", "large", "bottom", "small"], ["bottom", "large", 1, "bottomSection__cards", 3, "ngClass"], ["class", "bottomSection__cards__card", 3, "protoId", 4, "ngFor", "ngForOf"], ["slot", "bottomSectionCta", 1, "ctaSection"], ["size", "large", "type", "secondary", 1, "ctaSection__button", 3, "click"], ["size", "large", "type", "primary", 1, "ctaSection__button", 3, "click"], [1, "bottomSection__cards__card", 3, "protoId"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-two-section-modal", 0), e.NdJ("onCloseSealedDeckModal", function () {
                        return n.secondaryCtaClick()
                    }), e.TgZ(1, "gu-paragraph-text", 1), e._uU(2, " Some cards could not be imported "), e.qZA(), e.TgZ(3, "gu-heading-text", 2), e._uU(4, " You don't own these cards "), e.qZA(), e.TgZ(5, "gu-paragraph-text", 3), e._uU(6), e.qZA(), e.TgZ(7, "gu-vertical-space", 4)(8, "gu-vertical-space", 5), e.YNc(9, Wc, 1, 1, "app-card2", 6), e.qZA()(), e.TgZ(10, "gu-vertical-space", 7)(11, "gu-primary-hex-button", 8), e.NdJ("click", function () {
                        return n.secondaryCtaClick()
                    }), e._uU(12, "GO BACK"), e.qZA(), e.TgZ(13, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                        return n.primaryCtaClick()
                    }), e._uU(14, "CONTINUE"), e.qZA()()()), 2 & t && (e.xp6(6), e.AsE(" ", n.unownedProtos.length, " card", 1 === n.unownedProtos.length ? "" : "s", " missing. Hit continue to continue deck building "), e.xp6(2), e.Q6J("ngClass", e.kEZ(4, zc, n.unownedProtos.length <= 3, 4 === n.unownedProtos.length, n.unownedProtos.length >= 5)), e.xp6(1), e.Q6J("ngForOf", n.unownedProtos))
                },
                directives: [l.mk, l.sg, J],
                styles: [".bottomSection__cards--three[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center}.bottomSection__cards--three[_ngcontent-%COMP%]   .bottomSection__cards__card[_ngcontent-%COMP%]{width:240px}.bottomSection__cards--four[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center}.bottomSection__cards--four[_ngcontent-%COMP%]   .bottomSection__cards__card[_ngcontent-%COMP%]{width:200px}.bottomSection__cards--five[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr)}.bottomSection__cards--five[_ngcontent-%COMP%]   .bottomSection__cards__card[_ngcontent-%COMP%]{width:160px}.bottomSection__cards__card[_ngcontent-%COMP%]{margin:0 16px;width:160px}.ctaSection[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.ctaSection__button[_ngcontent-%COMP%]{min-width:200px}.ctaSection__button[_ngcontent-%COMP%]:nth-child(2){margin-left:16px}"]
            }), o
        })();
        const Xc = o => (o => {
            if (!o || !o.length) return !1;
            const [r, t, n, i, ...a] = o.split("_");
            return !(!(r && t && n && i) || a.length || "GU" !== r || isNaN(parseInt(t)) || isNaN(parseInt(n)) || !i.match(/.{1,3}/g))
        })(o.value) ? null : {deckCode: !0};
        var Kc = g(83920), el = g(45821);
        let Zn = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.activeModal = t, this.deckCodeService = n, this.decksService = i, this.modalService = a, this.cerberusModalService = s, this.loading = !1, this.control = new T.NI("", [T.kI.required, Xc])
                }

                importClick() {
                    this.deckCodeService.decodeDeckCode(this.control.value).pipe((0, w.q)(1)).subscribe(({
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
                    const a = this.cerberusModalService.open(jc);
                    a.componentInstance.unownedProtos = n, a.result.then(({success: c}) => {
                        c && this.openDeckbuilder(i, t)
                    }, () => {
                    })
                }

                openDeckbuilder(t, n) {
                    this.loading = !0, this.decksService.createDeck(new le.$$(-1, "Imported Deck", t, "common", n)).pipe((0, w.q)(1)).subscribe(i => {
                        this.loading = !1, this.decksService.updateDeckSelectMode(!1), this.activeModal.close(), this.decksService.selectActiveDeck(i), this.modalService.createModal(Ye, {}, {
                            blurredBackground: !0,
                            canCloseFromOutside: !1,
                            position: h.e1.Center,
                            size: h.Cg.Workarea
                        })
                    }, i => {
                        this.loading = !1, this.showErrorModal()
                    })
                }

                showErrorModal(t = "Something went wrong, try again, or contact our support team.") {
                    const i = this.cerberusModalService.open($c.I, {
                        defaultStylings: !1,
                        centered: !0
                    }).componentInstance;
                    i.title = "DECK COULD NOT BE IMPORTED", i.text = t, i.ctaText = "BACK", i.iconLigature = "alert_triangle", i.iconFillColor = "colors.god.war.primary"
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(U.mX), e.Y36(dn.R), e.Y36(te.D), e.Y36(I.Z), e.Y36(U.Qz))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-deck-codes-import-modal"]],
                decls: 17,
                vars: 7,
                consts: [["goldBorder", "top"], ["top", "2x-large"], ["align", "center", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "small"], ["top", "large"], ["align", "center", "size", "small", "fontWeight", "bold", "fillColor", "colors.light.100"], [1, "inputSection"], ["placeholder", "Enter a deck code here", "data-test-id", "deck-code-import-input", 1, "inputSection__input", 3, "value", "valid", "formControl", "disabled"], [3, "control"], ["key", "deckCode", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "deck-code-import-error"], ["align", "center", "size", "x-small", "fontWeight", "bold", "fillColor", "colors.light.500", "data-test-id", "deck-code-import-hint"], ["top", "2x-large", "bottom", "3x-large"], ["size", "large", "type", "primary", 1, "cta", 3, "loading", "disabled", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "gu-modal-background", 0), e.TgZ(1, "gu-vertical-space", 1)(2, "gu-heading-text", 2), e._uU(3, " Import a gods unchained deck "), e.qZA()(), e.TgZ(4, "gu-vertical-space", 3)(5, "gu-paragraph", 4), e._uU(6, " Deck Code "), e.qZA()(), e.TgZ(7, "gu-vertical-space", 5), e._UZ(8, "gu-input", 6), e.TgZ(9, "gu-validation-errors", 7)(10, "gu-body-text", 8), e._uU(11, " Please enter a valid deck code "), e.qZA()(), e.TgZ(12, "gu-paragraph", 9), e._uU(13, " This can be from a friend or one you found online "), e.qZA()(), e.TgZ(14, "gu-vertical-space", 10)(15, "gu-primary-hex-button", 11), e.NdJ("click", function () {
                        return n.importClick()
                    }), e._uU(16, " Import "), e.qZA()()), 2 & t && (e.xp6(8), e.Q6J("value", n.control.value)("valid", n.control.valid)("formControl", n.control)("disabled", n.control.disabled), e.xp6(1), e.Q6J("control", n.control), e.xp6(6), e.Q6J("loading", n.loading)("disabled", !n.control.valid))
                },
                directives: [Kc._, T.JJ, T.oH, el.n],
                styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:750px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.inputSection[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;min-height:80px;width:100%;flex-direction:column}.inputSection__input[_ngcontent-%COMP%]{width:100%;margin-bottom:4px}.copySection__cta[_ngcontent-%COMP%]{min-width:120px}.copySection__cta--copied[_ngcontent-%COMP%]{cursor:default}"]
            }), o
        })();
        const tl = [{
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

        function nl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().importDeck()
                }), e._uU(1, " Import deck\n"), e.qZA()
            }
        }

        function ol(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 8), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw();
                    return !a.unavailable && s.selectGod(a.name)
                })("mouseenter", function () {
                    const a = e.CHM(t).$implicit, s = e.oxw();
                    return !a.unavailable && s.playHoverItem()
                }), e.TgZ(1, "div", 9), e._UZ(2, "img", 10), e.TgZ(3, "h2", 11), e._uU(4), e.qZA(), e.TgZ(5, "div", 12), e._uU(6), e.qZA(), e._UZ(7, "div", 13), e.qZA()()
            }
            if (2 & o) {
                const t = r.$implicit;
                e.ekj("god--unavailable", t.unavailable), e.xp6(2), e.Q6J("src", "/gu-assets/images/gods/" + t.name + "-medium.webp", e.LSH), e.xp6(2), e.Oqu(t.title), e.xp6(2), e.Oqu(t.description), e.xp6(1), e.Q6J("innerHTML", t.playstyle, e.oJD)
            }
        }

        function il(o, r) {
            1 & o && (e.TgZ(0, "div", 14), e._UZ(1, "img", 15)(2, "img", 16)(3, "img", 17)(4, "img", 18)(5, "img", 19)(6, "img", 20), e.qZA())
        }

        let Dn = (() => {
            class o {
                constructor(t, n, i, a, s, c) {
                    this.modalService = t, this.decksService = n, this.authService = i, this.audioService = a, this.akumaService = s, this.cerberusModalService = c, this.deckSelect = !1, this.onGodSelect = () => {
                    }, this.gods = tl, this.unsubscribe = new M.xQ, this.GuGameModeType = P.tO, this.Flags = _.vU, this.close = () => {
                        this.akumaService.postControlEvent("gu", "GodChoose", "", "close", "Btn", "pressed"), this.modalService.destroyTopModal()
                    }
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                selectGod(t) {
                    this.akumaService.postControlEvent("gu", "GodChoose", "", "godSelect", "Btn", "pressed"), this.audioService.clickMediumV2.play(), this.gameModeType === P.tO.SEALED_DECK ? this.onGodSelect(t, this.close.bind(this)) : this.handleDeckBuilder(t)
                }

                handleDeckBuilder(t) {
                    this.decksService.createDeck(new le.$$(-1, "Custom Deck", t, "common")).pipe((0, w.q)(1)).subscribe(() => {
                        this.deckSelect ? this.decksService.updateDeckSelectMode(!0, this.gameModeId, this.forAI) : this.decksService.updateDeckSelectMode(!1), this.close(), this.modalService.createModal(Ye, {deckSelectMode: this.deckSelect}, {
                            blurredBackground: !0,
                            canCloseFromOutside: !0,
                            position: h.e1.Center,
                            size: h.Cg.Workarea
                        })
                    })
                }

                playHoverItem() {
                    this.audioService.hoverItem.play()
                }

                importDeck() {
                    this.modalService.destroyTopModal(), this.cerberusModalService.open(Zn)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(I.Z), e.Y36(te.D), e.Y36(f.mI), e.Y36(f.pk), e.Y36(_.jt), e.Y36(U.Qz))
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
                consts: [[3, "closeButtonClickFn"], [1, "pageTitle"], [1, "pageDescription"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.apocyan.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_download", "class", "importDeckCta", 3, "click", 4, "featureFlagIf"], [1, "godListing"], ["class", "god", "data-test-id", "chooseGod", 3, "god--unavailable", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "sealedPreloadSection", "style", "width: 1px; height: 1px; visibility: hidden; overflow: hidden", 4, "ngIf"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.apocyan.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_download", 1, "importDeckCta", 3, "click"], ["data-test-id", "chooseGod", 1, "god", 3, "click", "mouseenter"], [1, "god__inner"], ["alt", "Illustration of God", 1, "god__image", 3, "src"], [1, "god__title"], [1, "god__description"], [1, "god__playStyle", 3, "innerHTML"], [1, "sealedPreloadSection", 2, "width", "1px", "height", "1px", "visibility", "hidden", "overflow", "hidden"], ["src", "https://images.godsunchained.com/god-art/1024/nature--aeona.webp"], ["src", "https://images.godsunchained.com/god-art/1024/war--auros.webp"], ["src", "https://images.godsunchained.com/god-art/1024/magic--elyrian.webp"], ["src", "https://images.godsunchained.com/god-art/1024/death--malissus.webp"], ["src", "https://images.godsunchained.com/god-art/1024/light--thaeriel.webp"], ["src", "https://images.godsunchained.com/god-art/1024/deception--ludia.webp"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.TgZ(1, "h1", 1), e._uU(2, "Choose a God"), e.qZA(), e.TgZ(3, "p", 2), e._uU(4, "Each deck must be aligned to a God. Choose which one you'd like to build around."), e.qZA(), e.YNc(5, nl, 2, 0, "gu-plain-square-button", 3), e.TgZ(6, "div", 4), e.YNc(7, ol, 8, 6, "div", 5), e.qZA(), e.YNc(8, il, 7, 0, "div", 6)), 2 & t && (e.Q6J("closeButtonClickFn", n.close), e.xp6(5), e.Q6J("featureFlagIf", n.Flags.deckCodesEnabled), e.xp6(2), e.Q6J("ngForOf", n.gods), e.xp6(1), e.Q6J("ngIf", n.gameModeType === n.GuGameModeType.SEALED_DECK))
                },
                directives: [ye, ot.w, l.sg, l.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}.pageTitle[_ngcontent-%COMP%], .god__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.god__description[_ngcontent-%COMP%], .god__playStyle[_ngcontent-%COMP%], .pageDescription[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif}.god__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 3.7);line-height:1.3}.pageTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 5);line-height:1.3}.god__description[_ngcontent-%COMP%], .god__playStyle[_ngcontent-%COMP%], .pageDescription[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.god__playStyle[_ngcontent-%COMP%], .pageDescription[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{width:100%;height:calc(calc(var(--vh) * 100) - 28px - 80px);display:flex;flex-flow:column nowrap;text-align:center;padding:0 80px;padding-top:calc(var(--vh) * 5)}.pageTitle[_ngcontent-%COMP%]{margin-bottom:calc(var(--vh) * 1);background:var(--gu-yellow);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.pageDescription[_ngcontent-%COMP%]{color:var(--gu-gray);}.godListing[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1);grid-column-gap:calc(var(--vw) * .6);display:grid;grid-template-columns:repeat(6, 1fr)}.god[_ngcontent-%COMP%]{width:calc(var(--vw) * 14.84);height:calc(var(--vh) * 63);display:flex;background:linear-gradient(to bottom, #affaed 0%, #8be1e0 50%, #54bbcd 100%);border-radius:calc(var(--vh) * .4);color:var(--gu-gray);cursor:pointer}.god[_ngcontent-%COMP%]:hover:not(.god--unavailable) .god__image[_ngcontent-%COMP%]{opacity:1;z-index:1;}.god--unavailable[_ngcontent-%COMP%]{color:#7192b0;background:#1d2f41;cursor:default}.god--unavailable[_ngcontent-%COMP%] .god__inner[_ngcontent-%COMP%]{background:#0c1620}.god--unavailable[_ngcontent-%COMP%] .god__image[_ngcontent-%COMP%]{opacity:.1;}.god__inner[_ngcontent-%COMP%]{padding:calc(var(--vw) * 1.5);margin:calc(var(--vh) * .18);flex:1;border-radius:calc(var(--vh) * .4);background:var(--gu-blue-dark);overflow:hidden;position:relative}.god__image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:.35;}.god__title[_ngcontent-%COMP%]{position:relative}.god__description[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .5);padding-bottom:calc(var(--vh) * 2.96);color:var(--gu-gray);position:relative}.god__playStyle[_ngcontent-%COMP%]{position:relative;padding:8px;background:rgba(0, 0, 0, 0.25);}.sealedPreloadSection[_ngcontent-%COMP%]{width:1px;height:1px;visibility:hidden;overflow:hidden}.importDeckCta[_ngcontent-%COMP%]{position:absolute;right:100px}"]
            }), o
        })();

        function rl(o, r) {
            if (1 & o && e._UZ(0, "app-modal-sidebar", 8), 2 & o) {
                const t = e.oxw();
                e.Q6J("closeButtonClickFn", t.destroyModal)
            }
        }

        function al(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 9), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().importDeck()
                }), e._uU(1, " Import deck "), e.qZA()
            }
        }

        function sl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-deck", 10), e.NdJ("selectDeck", function (i) {
                    return e.CHM(t), e.oxw().selectDeck(i)
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.Q6J("displayGauntlet", n.displayGauntlets)("deck", t)("showDeckName", !0)("hideGodName", !1)
            }
        }

        class Ue {
            constructor(r, t) {
                this.name = r, this.type = t
            }
        }

        var Ce = (() => {
            return (o = Ce || (Ce = {}))[o.Death = 0] = "Death", o[o.Deception = 1] = "Deception", o[o.Light = 2] = "Light", o[o.Magic = 3] = "Magic", o[o.Nature = 4] = "Nature", o[o.War = 5] = "War", Ce;
            var o
        })();
        let Lt = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.decksService = t, this.modalService = n, this.akumaService = i, this.audioService = a, this.cerberusModalService = s, this.modalHosted = !1, this.forAI = !1, this.deckBuilderDeckSelect = !1, this.currentlyEditingDeckName = "", this.unsubscribe = new M.xQ, this.godFilters = [new Ue("Death", Ce.Death), new Ue("Deception", Ce.Deception), new Ue("Light", Ce.Light), new Ue("Magic", Ce.Magic), new Ue("Nature", Ce.Nature), new Ue("War", Ce.War)], this.activeGodFilters = [], this.Flags = _.vU, this.destroyModal = () => {
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
                    this.allDecks$ = (0, Z.aj)([this.decksService.starterDecks$, this.decksService.userDecks$]).pipe((0, O.U)(([t, n]) => [...t, ...n.filter(a => "common" === a.deck_type).sort((d1, d2) => {
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
                        })]));
                    this.filteredDecks$ = this.allDecks$
                }

                initGameModes() {
                    void 0 !== this.gameModeId && (this.deckBuilderDeckSelect = !0), this.displayGauntlets = this.isRankedConstructed
                }

                get isRankedConstructed() {
                    return this.gameModeId === P.B_.RANKED_CONSTRUCTED
                }

                newDeck() {
                    this.akumaService.postControlEvent("gu", "MyDecks", "", "createDeck", "Btn", "pressed"), this.audioService.clickItemV2.play(), this.modalService.createModal(Dn, {
                        gameModeType: this.gameModeType,
                        gameModeId: this.gameModeId,
                        forAI: this.forAI,
                        deckSelect: this.deckBuilderDeckSelect
                    }, {blurredBackground: !0, canCloseFromOutside: !1, position: h.e1.Center, size: h.Cg.Workarea})
                }

                getFilteredStream(t, n) {
                    return t.pipe((0, O.U)(i => i.filter(a => this.filterStream(a, n))))
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
                    this.akumaService.postControlEvent("gu", "MyDecks", "", "deckChosen", "Btn", "pressed"), this.deckBuilderDeckSelect ? this.deckBuilderDeckSelect && (this.decksService.updateDeckSelectMode(!0, this.gameModeId, this.forAI), this.audioService.workshopCustomize.play(), this.decksService.selectActiveDeck(t), this.modalService.createModal(Ye, {}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })) : (this.audioService.workshopCustomize.play(), this.decksService.updateDeckSelectMode(!1), this.decksService.selectActiveDeck(t), this.modalService.createModal(Ye, {}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    }))
                }

                importDeck() {
                    this.cerberusModalService.open(Zn, {defaultStylings: !1, centered: !0})
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(te.D), e.Y36(I.Z), e.Y36(_.jt), e.Y36(f.pk), e.Y36(U.Qz))
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
                consts: [[3, "closeButtonClickFn", 4, "ngIf"], [1, "titleAndFiltering"], [1, "titleAndFiltering__filtering", 3, "godFilters", "displayGroupingName", "godFilterChangeList"], [1, "titleAndFiltering__title"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.apocyan.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_download", "class", "importDeckCta", 3, "click", 4, "featureFlagIf"], ["data-test-id", "decksListing", 1, "decksListing"], ["text", "Create a Deck", "data-test-id", "createDeck", 1, "createButton", 3, "click"], ["class", "deck", "data-test-id", "deck", "width", "calc(var(--vw) * 8.6)", "emptyContainerWidth", "calc(var(--vw) * 8.6)", "emptyContainerHeight", "calc(var(--vh) * 22)", 3, "displayGauntlet", "deck", "showDeckName", "hideGodName", "selectDeck", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "closeButtonClickFn"], ["backgroundFillColor", "colors.gunmetal.700", "borderColor", "colors.apocyan.500", "borderColorHover", "colors.apocyan.100", "fillColor", "colors.apocyan.300", "leftIconPosition", "true", "icon", "action_download", 1, "importDeckCta", 3, "click"], ["data-test-id", "deck", "width", "calc(var(--vw) * 8.6)", "emptyContainerWidth", "calc(var(--vw) * 8.6)", "emptyContainerHeight", "calc(var(--vh) * 22)", 1, "deck", 3, "displayGauntlet", "deck", "showDeckName", "hideGodName", "selectDeck"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, rl, 1, 1, "app-modal-sidebar", 0), e.TgZ(1, "header", 1)(2, "app-grouping-bar", 2), e.NdJ("godFilterChangeList", function (a) {
                        return n.godFilterChange(a)
                    }), e.qZA(), e.TgZ(3, "h3", 3), e._uU(4, "My Decks"), e.qZA(), e.YNc(5, al, 2, 0, "gu-plain-square-button", 4), e.qZA(), e.TgZ(6, "div", 5)(7, "app-create-new-button", 6), e.NdJ("click", function () {
                        return n.newDeck()
                    }), e.qZA(), e.YNc(8, sl, 1, 4, "app-deck", 7), e.ALo(9, "async"), e.qZA()), 2 & t && (e.Q6J("ngIf", n.modalHosted), e.xp6(2), e.Q6J("godFilters", n.godFilters)("displayGroupingName", !1), e.xp6(3), e.Q6J("featureFlagIf", n.Flags.deckCodesEnabled), e.xp6(3), e.Q6J("ngForOf", e.lcZ(9, 6, n.filteredDecks$))("ngForTrackBy", n.trackDecksBy))
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.titleAndFiltering__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.titleAndFiltering__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;background:var(--gu-blue-dark);background-image:url(https://images.godsunchained.com/art2/1920/299.jpg);background-size:cover;background-position:center;background-blend-mode:soft-light;}.titleAndFiltering[_ngcontent-%COMP%]{display:flex;padding-top:calc(var(--vh) * 2);top:calc(var(--vh) * 1.5);justify-content:space-between;align-items:center;min-height:calc(calc(var(--vh) * 9) - calc(var(--vh) * 1.5));padding:20px 80px;box-shadow:0 3px 3px rgb(0 0 0 / 30%), 0 3px 3px rgb(0 0 0 / 30%);z-index:22;background:var(--gu-blue-dark)}.titleAndFiltering__title[_ngcontent-%COMP%]{text-transform:uppercase;color:#f6f6f6}.decksListing[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content;grid-column-gap:calc(var(--vw) * 1.6);padding:0 calc(var(--vw) * 4.16);padding-top:calc(var(--vh) * 4);height:100%;overflow:hidden;overflow-y:auto}.decksListing[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{margin-bottom:calc(var(--vh) * 6)}.createButton[_ngcontent-%COMP%]{width:calc(var(--vw) * 8.6);height:calc(var(--vh) * 23.5);margin-top:calc(var(--vh) * .5);justify-self:center}"],
                data: {
                    animation: [(0, C.X$)("deck", [(0, C.eR)(":enter", [(0, C.oB)({
                        transform: "scale(1.0)",
                        opacity: 0
                    }), (0, C.jt)("1s cubic-bezier(.8, -0.6, 0.2, 1.5)", (0, C.oB)({
                        transform: "scale(1)",
                        opacity: 1
                    }))]), (0, C.eR)(":leave", [(0, C.oB)({
                        transform: "scale(1)",
                        opacity: 1,
                        height: "*"
                    }), (0, C.jt)("1s cubic-bezier(.8, -0.6, 0.2, 1.5)", (0, C.oB)({
                        transform: "scale(1.0)",
                        opacity: 0
                    }))])])]
                }
            }), o
        })();
        const cl = ["In this event, you will receive temporary copies of cards from Core and Welcome Set. These cards are not added to your account or to your wallet, rather they exist only for this event and disappear when it is over.", "From this sealed collection, you build a deck to play against others in the event. Everyone's sealed collection is random. You'll get cards from every domain, and can put any card you get into your sealed deck. For instance, you play with Light and Deception and War in the same deck!", "At the beginning of your run, before you receive cards, you will choose your domain. Several cards you receive will always be from the domain you choose. The rest will be randomly chosen from across Core and Welcome Set.", "Play until you reach 9 wins or 3 losses. Win more games to get bigger prizes. You'll win Stars, cards, and maybe even a trinket! Click below for complete rules and prize details."];

        function ll(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 7), e._UZ(1, "gu-paragraph-text", 8), e.qZA()), 2 & o) {
                const t = r.$implicit;
                e.xp6(1), e.Q6J("text", t)
            }
        }

        let dl = (() => {
            class o {
                constructor(t, n) {
                    this.activeModal = t, this.akuma = n, this.infoTexts = cl
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
                return new (t || o)(e.Y36(U.mX), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["gu-sealed-deck-info-modal"]],
                decls: 11,
                vars: 1,
                consts: [["background", "neutral", 3, "onCloseSealedDeckModal"], ["slot", "topSectionSubtitle", "fillColor", "colors.light.300", "kind", "large", "align", "left", "fontWeight", "bold", 1, "topSection__subtitle"], ["slot", "topSectionTitle", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "large"], ["slot", "bottomSectionContent", "top", "3x-large", "bottom", "x-large"], ["both", "medium", 4, "ngFor", "ngForOf"], ["slot", "bottomSectionCta", "size", "large", 1, "bottomSection__cta", 3, "click"], ["iconLigature", "leave_website", 1, "bottomSection__cta__icon"], ["both", "medium"], ["fillColor", "colors.light.100", "kind", "large", "align", "left", 3, "text"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "gu-two-section-modal", 0), e.NdJ("onCloseSealedDeckModal", function () {
                        return n.closeModal()
                    }), e.TgZ(1, "gu-paragraph-text", 1), e._uU(2, " Sealed Deck Event: Core + Welcome Set "), e.qZA(), e.TgZ(3, "gu-heading-text", 2), e._uU(4, " Rules & Prizes "), e.qZA(), e.TgZ(5, "gu-vertical-space", 3), e.YNc(6, ll, 2, 1, "gu-vertical-space", 4), e.qZA(), e.TgZ(7, "gu-primary-hex-button", 5), e.NdJ("click", function () {
                        return n.clickFullDetails()
                    }), e._uU(8, " Full Details "), e.TgZ(9, "span"), e._UZ(10, "gu-icon", 6), e.qZA()()()), 2 & t && (e.xp6(6), e.Q6J("ngForOf", n.infoTexts))
                },
                directives: [l.sg],
                styles: [".bottomSection__cta__icon[_ngcontent-%COMP%]{margin-left:8px}"]
            }), o
        })();

        function gl(o, r) {
            1 & o && e._UZ(0, "div", 3), 2 & o && e.ekj("winBoxes__win--filled", r.$implicit)
        }

        let ul = (() => {
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
                    1 & t && (e.TgZ(0, "div", 0), e.YNc(1, gl, 1, 2, "div", 1), e.qZA(), e.TgZ(2, "div", 2), e._uU(3), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngForOf", n.winElements), e.xp6(2), e.AsE("", n.winCount, " ", 1 == n.winCount ? "win" : "wins", ""))
                },
                directives: [l.sg],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.winSummary[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.winSummary[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap}.winBoxes[_ngcontent-%COMP%]{display:flex}.winBoxes__win[_ngcontent-%COMP%]{border:calc(var(--vh) * .18) solid #527493;background:#0f1b27;margin-right:calc(var(--vh) * 1.3);position:relative;width:calc(var(--vh) * 2);height:calc(var(--vh) * 2)}.winBoxes__win[_ngcontent-%COMP%]:after{content:"";position:absolute;width:calc(var(--vh) * 1.3);height:calc(var(--vh) * .18);right:calc(calc(var(--vh) * .18) * -1);top:50%;background:#527493;transform:translate(100%,-50%)}.winBoxes__win[_ngcontent-%COMP%]:last-child{margin-right:0}.winBoxes__win[_ngcontent-%COMP%]:last-child:after{display:none}.winBoxes__win--filled[_ngcontent-%COMP%]{border-width:0;background:url(win-box-background.bfd8ca476bd783be.svg);background-repeat:no-repeat;background-size:contain}.winBoxes__win--filled[_ngcontent-%COMP%]:after{right:0;background:#8be1e0}.winSummary[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .6);text-align:center;color:#7192b0}']
            }), o
        })();

        function pl(o, r) {
            1 & o && e._UZ(0, "div", 3), 2 & o && e.ekj("lossBoxes__loss--filled", r.$implicit)
        }

        let _l = (() => {
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
                    1 & t && (e.TgZ(0, "div", 0), e.YNc(1, pl, 1, 2, "div", 1), e.qZA(), e.TgZ(2, "div", 2), e._uU(3), e.qZA()), 2 & t && (e.xp6(1), e.Q6J("ngForOf", n.lossElements), e.xp6(2), e.AsE("", n.lossCount, " ", 1 == n.lossCount ? "loss" : "losses", ""))
                },
                directives: [l.sg],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.lossSummary[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.lossSummary[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap}.lossBoxes[_ngcontent-%COMP%]{display:flex}.lossBoxes__loss[_ngcontent-%COMP%]{border:calc(var(--vh) * .18) solid #527493;background:#0f1b27;margin-right:calc(var(--vh) * 1.1);position:relative;width:calc(var(--vh) * 1.4);height:calc(var(--vh) * 1.4)}.lossBoxes__loss[_ngcontent-%COMP%]:after{content:"";position:absolute;width:calc(var(--vh) * 1.1);height:calc(var(--vh) * .18);right:calc(calc(var(--vh) * .18) * -1);top:50%;background:#527493;transform:translate(100%,-50%)}.lossBoxes__loss[_ngcontent-%COMP%]:last-child{margin-right:0}.lossBoxes__loss[_ngcontent-%COMP%]:last-child:after{display:none}.lossBoxes__loss--filled[_ngcontent-%COMP%]{border-width:0;background:url(loss-box-background.6418540d28bb1124.svg);background-repeat:no-repeat;background-size:contain}.lossBoxes__loss--filled[_ngcontent-%COMP%]:after{right:0;background:#e8a1a1}.lossSummary[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .5);text-align:center;color:#7192b0}']
            }), o
        })();
        const hl = [[["", "slot", "inlinebeforetext"]], [["", "slot", "inlineaftertext"]], [["", "slot", "aftereverything"]]],
            ml = ["[slot='inlineBeforeText']", "[slot='inlineAfterText']", "[slot='afterEverything']"];
        let ct = (() => {
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
                ngContentSelectors: ml,
                decls: 6,
                vars: 1,
                consts: [["iconLigature", "add_item", 1, "icon"], [1, "text"]],
                template: function (t, n) {
                    1 & t && (e.F$t(hl), e._UZ(0, "gu-icon", 0), e.TgZ(1, "div", 1), e.Hsn(2), e._uU(3), e.Hsn(4, 1), e.qZA(), e.Hsn(5, 2)), 2 & t && (e.xp6(3), e.hij(" ", n.text, " "))
                },
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.text[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{transition:transform .15s ease-in-out;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;border:calc(var(--vh) * .15) solid #e0c58f;cursor:pointer}[_nghost-%COMP%]:hover{transform:scale(1.05)}.icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 3.5);margin-bottom:calc(var(--vh) * 1);line-height:1;color:#e0c58f}.text[_ngcontent-%COMP%]{color:#e0c58f;width:70%;text-align:center}"]
            }), o
        })();

        function fl(o, r) {
            if (1 & o && e._UZ(0, "app-card2", 12), 2 & o) {
                const t = e.oxw().$implicit, n = e.oxw(2);
                e.Q6J("protoId", n.topThreeCards[t].proto)("quality", n.topThreeCards[t].quality)("sound", !1)
            }
        }

        function Cl(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, fl, 1, 3, "app-card2", 11), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw(2);
                e.xp6(1), e.Q6J("ngIf", n.topThreeCards[t])
            }
        }

        function vl(o, r) {
            if (1 & o && e._UZ(0, "app-god-badge", 13), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("god", null == t.deck ? null : t.deck.god)
            }
        }

        function bl(o, r) {
            if (1 & o && e._UZ(0, "app-flux-god-portrait", 14), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("wins", t.gauntletSlot.wins)("god", t.gauntletSlot.god)("unlock", t.gauntletSlot.unlock)
            }
        }

        function xl(o, r) {
            if (1 & o && e._UZ(0, "app-flux-god-portrait", 14), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("wins", 0)("god", t.deck.god)("unlock", !0)
            }
        }

        const wl = function () {
            return [2, 1, 0]
        };

        function Ml(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 4), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clickDeck()
                }), e.YNc(1, Cl, 2, 1, "ng-container", 5), e.YNc(2, vl, 1, 1, "app-god-badge", 6), e.YNc(3, bl, 1, 3, "app-flux-god-portrait", 7), e.YNc(4, xl, 1, 3, "app-flux-god-portrait", 7), e.TgZ(5, "div", 8), e._UZ(6, "gu-icon", 9), e.TgZ(7, "div", 10), e._uU(8), e.qZA()()()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", e.DdM(5, wl)), e.xp6(1), e.Q6J("ngIf", !t.displayGauntlet), e.xp6(1), e.Q6J("ngIf", t.displayGauntlet && t.gauntletSlot), e.xp6(1), e.Q6J("ngIf", t.displayGauntlet && !t.gauntletSlot), e.xp6(4), e.hij("", t.deckCardCount, " / 30")
            }
        }

        function yl(o, r) {
            if (1 & o && (e.TgZ(0, "footer", 15), e._uU(1), e.ALo(2, "titlecase"), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" ", e.lcZ(2, 1, t.deck.god), "\n")
            }
        }

        function kl(o, r) {
            if (1 & o && e._UZ(0, "app-god-badge", 19), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("god", t.deck.god)
            }
        }

        function Ol(o, r) {
            if (1 & o && (e.TgZ(0, "div", 20), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" ", null == t.deck ? null : t.deck.god, " ")
            }
        }

        function Pl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-create-new-button", 16), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().onEmptyDeckClick()
                }), e.YNc(1, kl, 1, 1, "app-god-badge", 17), e.YNc(2, Ol, 2, 1, "div", 18), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.Q6J("text", t.emptyText)("ngStyle", t.getEmptyDeckStyle()), e.xp6(1), e.Q6J("ngIf", null == t.deck ? null : t.deck.god), e.xp6(1), e.Q6J("ngIf", null == t.deck ? null : t.deck.god)
            }
        }

        function Sl(o, r) {
            if (1 & o && (e.TgZ(0, "div", 21), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" ", null == t.deck ? null : t.deck.name, "\n")
            }
        }

        let Gn = (() => {
            class o {
                constructor(t, n, i, a) {
                    this.cardsService = t, this.utils = n, this.audioService = i, this.gauntletService = a, this.showDeckName = !0, this.sound = !0, this.selectDeck = new e.vpe, this.topThreeCards = [], this.isLocked = !1, this.unsubscribe = new M.xQ
                }

                get isNotReady() {
                    return this.deck instanceof le.$$ && this.deck.items.length < 30
                }

                get deckCardCount() {
                    return this.deck instanceof le.$$ ? this.deck.items.length : 0
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
                    !this.displayGauntlet || this.gauntletService.gauntletSlots$.pipe((0, p.R)(this.unsubscribe), (0, O.U)(t => t.find(n => n.god === this.deck.god.toLowerCase()))).subscribe(t => {
                        this.gauntletSlot = t
                    })
                }

                getThumbnailData() {
                    this.deck && "sealed_deck" === this.deck.deck_type ? this.topThreeCards = this.deck.items.slice(0, 3) : this.cardsService.qualityCounts$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => t.size > 0), (0, b.b)(t => this.calcThumbnail(t))).subscribe()
                }

                calcThumbnail(t) {
                    if (!this.deck || !this.deck.items || 0 === this.deck.items.length) return void (this.topThreeCards = []);
                    const n = this.deck.items;
                    this.calcTopThreeCards(t, n.length >= 3 ? n : this.deck.items)
                }

                calcTopThreeCards(t, n) {
                    this.topThreeCards = this.utils.calcTopCards(t, n, 3, this.deck.id);
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
                return new (t || o)(e.Y36(_.dK), e.Y36(De.F), e.Y36(f.pk), e.Y36(Fe))
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
                consts: [["class", "stackOfCards", 3, "click", 4, "ngIf"], ["class", "godInfo", 4, "ngIf"], ["class", "emptyDeckContainer", 3, "text", "ngStyle", "click", 4, "ngIf"], ["class", "deckName", "data-test-id", "deckName", 4, "ngIf"], [1, "stackOfCards", 3, "click"], [4, "ngFor", "ngForOf"], ["size", "small", "class", "godBadge", 3, "god", 4, "ngIf"], ["class", "fluxGodPortrait", 3, "wins", "god", "unlock", 4, "ngIf"], [1, "deckLockedOverlay"], ["iconLigature", "padlock", 1, "deckLockedOverlay__icon"], [1, "deckLockedOverlay__text"], ["class", "deckCard", "data-test-id", "deckCard", 3, "protoId", "quality", "sound", 4, "ngIf"], ["data-test-id", "deckCard", 1, "deckCard", 3, "protoId", "quality", "sound"], ["size", "small", 1, "godBadge", 3, "god"], [1, "fluxGodPortrait", 3, "wins", "god", "unlock"], [1, "godInfo"], [1, "emptyDeckContainer", 3, "text", "ngStyle", "click"], ["size", "small", "class", "godBadge", "slot", "afterEverything", 3, "god", 4, "ngIf"], ["class", "godName", "slot", "inlineBeforeText", 4, "ngIf"], ["size", "small", "slot", "afterEverything", 1, "godBadge", 3, "god"], ["slot", "inlineBeforeText", 1, "godName"], ["data-test-id", "deckName", 1, "deckName"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Ml, 9, 6, "div", 0), e.YNc(1, yl, 3, 3, "footer", 1), e.YNc(2, Pl, 3, 4, "app-create-new-button", 2), e.YNc(3, Sl, 2, 1, "div", 3)), 2 & t && (e.Q6J("ngIf", 3 === (null == n.topThreeCards ? null : n.topThreeCards.length)), e.xp6(1), e.Q6J("ngIf", 3 === (null == n.topThreeCards ? null : n.topThreeCards.length) && !n.hideGodName), e.xp6(1), e.Q6J("ngIf", !n.topThreeCards || n.topThreeCards.length < 3), e.xp6(1), e.Q6J("ngIf", n.showDeckName))
                },
                directives: [l.O5, l.sg, J, _n, In, ct, l.PC],
                pipes: [l.rS],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.deckName[_ngcontent-%COMP%], .godInfo[_ngcontent-%COMP%], .godName[_ngcontent-%COMP%], .deckLockedOverlay__text[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;text-shadow:1px 1px 1px rgba(0, 0, 0, 0.85);}.deckLockedOverlay__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2)}.deckName[_ngcontent-%COMP%], .godInfo[_ngcontent-%COMP%], .godName[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;position:relative}.deck--deckIsNotFinished[_nghost-%COMP%]{cursor:pointer}.deck--deckIsNotFinished[_nghost-%COMP%]   .deckLockedOverlay[_ngcontent-%COMP%]{display:flex}.deck--deckIsNotFinished[_nghost-%COMP%]     .card-front{filter:brightness(.6)}[_nghost-%COMP%]:hover   .deckCard[_ngcontent-%COMP%]:nth-child(1){transform:rotate(10deg) translate(calc(var(--vw) * 1.3),-5%)}[_nghost-%COMP%]:hover   .deckCard[_ngcontent-%COMP%]:nth-child(2){transform:rotate(5deg) translate(calc(var(--vw) * .65),-2.5%)}.deckLockedOverlay[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;flex-flow:column nowrap;display:none;align-items:center;padding-left:calc(var(--vw) * .5)}.deckLockedOverlay__icon[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3.5);font-size:calc(var(--vh) * 3.5);text-shadow:1px 1px 1px rgba(0, 0, 0, 0.85);}.deckLockedOverlay__text[_ngcontent-%COMP%]{font-weight:700}.stackOfCards[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * -.4);position:relative;transition:all .15s ease-out}.stackOfCards[_ngcontent-%COMP%]:hover{transform:scale(1.06)}.stackOfCards[_ngcontent-%COMP%]:hover   .godBadge[_ngcontent-%COMP%]{filter:brightness(110%)}.emptyDeckContainer[_ngcontent-%COMP%]{position:relative;cursor:pointer;transition:all .15s ease-out;margin:0 auto;margin-top:calc(var(--vh) * 1.2);height:100%}.emptyDeckContainer[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.emptyDeckContainer[_ngcontent-%COMP%] + .deckName[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3);padding:0}.emptyDeckContainer[_ngcontent-%COMP%]   .godBadge[_ngcontent-%COMP%]{right:calc(var(--vw) * -.8);bottom:calc(var(--vh) * -0.5)}.godName[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * .5);font-weight:600;text-transform:capitalize}.deckCard[_ngcontent-%COMP%]{position:relative;transition:all .15s ease-in-out}.deckCard[_ngcontent-%COMP%]:nth-child(1), .deckCard[_ngcontent-%COMP%]:nth-child(2){position:absolute;top:0;left:0;width:100%;height:100%}.deckCard[_ngcontent-%COMP%]:nth-child(1)     img, .deckCard[_ngcontent-%COMP%]:nth-child(2)     img{filter:drop-shadow(0px 0px 0px #182531)}.deckCard[_ngcontent-%COMP%]:nth-child(1){transform:rotate(5deg) translate(calc(var(--vw) * .5),-2.5%);opacity:.3}.deckCard[_ngcontent-%COMP%]:nth-child(2){transform:rotate(2deg) translate(calc(var(--vw) * .3),-1.7%);opacity:.6}.godInfo[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .4);font-weight:600;color:var(--gu-orange);text-align:center;}.godBadge[_ngcontent-%COMP%]{position:absolute;bottom:calc(var(--vh) * -0.5);right:calc(var(--vw) * -.8)}.deckName[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1);padding-left:calc(var(--vw) * .4);color:#f6f6f6;text-align:center}.fluxGodPortrait[_ngcontent-%COMP%]{position:absolute;bottom:calc(var(--vh) * -3.6);right:calc(var(--vw) * -2.1);transform:scale(.483) rotate(45deg)}"]
            }), o
        })();

        function Tl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-loadout-part", 26), e.NdJ("click", function () {
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

        function Il(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Tl, 1, 4, "gu-loadout-part", 25), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", t[0].owned || !t[0].owned && n.showUnownedBoards)
            }
        }

        function Al(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-loadout-part", 28), e.NdJ("click", function () {
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

        function Fl(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Al, 1, 6, "gu-loadout-part", 27), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", t[0].owned || !t[0].owned && n.showUnownedTrinkets)
            }
        }

        function Zl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-plain-square-button", 29), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clearAll()
                }), e._uU(1, " Clear "), e.qZA()
            }
        }

        function Dl(o, r) {
            if (1 & o && (e.TgZ(0, "gu-heading-text", 30), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.selectedBoard.name)
            }
        }

        function Gl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-primary-hex-button", 31), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().saveOrSelect()
                }), e._uU(1), e.qZA()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Oqu(t.ctaButtonText)
            }
        }

        function Bl(o, r) {
            if (1 & o && e._UZ(0, "img", 34), 2 & o) {
                const t = e.oxw(2);
                e.MGl("src", "https://images.godsunchained.com/collectables/boards/", t.selectedBoard.proto, "--preview.webp", e.LSH)
            }
        }

        function Ul(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.YNc(1, Bl, 1, 1, "img", 32), e.TgZ(2, "gu-circular-close-button", 33), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clearBoard()
                }), e.qZA(), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", t.selectedBoard)
            }
        }

        function Ll(o, r) {
            1 & o && (e.TgZ(0, "gu-paragraph-text", 35), e._uU(1, " choose a board "), e.qZA())
        }

        function El(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "i", 36), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clearTempTrinket()
                }), e.qZA()
            }
        }

        g(65694), g(40760);
        const Nl = function () {
            return {breakpoint: "x-large", size: "large"}
        }, ql = function (o) {
            return [o]
        };
        let Bn = (() => {
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
                    (0, Z.aj)([this.loadoutService.allBoards$, this.loadoutService.allTrinkets$]).pipe((0, p.R)(this.unsubscribe), (0, O.U)(([t, n]) => {
                        const i = {}, a = {};
                        t.forEach(d => {
                            var u, x;
                            const v = `${d.name}-${null === (u = d.class_properties) || void 0 === u ? void 0 : u.quality}--${null === (x = d.class_properties) || void 0 === x ? void 0 : x.effort}`;
                            a[v] || (a[v] = []), a[v].push(d)
                        }), n.forEach(d => {
                            let u = `${d.name}`;
                            if (d.properties && d.properties.belly_color) {
                                const {belly_color: x, eyes_color: v, fur_color: k} = d.properties;
                                u += `-${x}-${v}-${k}`
                            }
                            i[u] || (i[u] = []), i[u].push(d)
                        });
                        const s = Object.keys(i).map(d => i[d]);
                        return [Object.keys(a).map(d => a[d]), s]
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
                    return this.hasLoadoutChanged ? this.saveLoadout().pipe((0, w.q)(1)).subscribe(t => {
                        this.updateGameModeLoadout(t)
                    }) : this.updateGameModeLoadout(), this.inSelectMode ? this.modalService.destroyModalsStack() : this.close()
                }

                updateGameModeLoadout(t) {
                    if (void 0 !== t || this.loadout) return this.guGameService.updateGameModeLoadout(this.gameModeId, t || this.loadout.collection_id)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(I.Z), e.Y36(we), e.Y36(ee.xV))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-loadout-builder-modal"]],
                inputs: {loadout: "loadout", gameModeId: "gameModeId"},
                decls: 35,
                vars: 20,
                consts: [[1, "modalHeader"], ["kind", "large", "fontWeight", "bold", 1, "modalHeader__backBtn", 3, "click"], ["iconLigature", "chevron_left", 1, "modalHeader__backBtn__chevronIcon"], ["fillGradient", "gradients.gold.simple", "size", "small", 1, "modalHeader__sectionTitle", 3, "responsiveSize"], [1, "loadoutItemsArea"], [1, "loadoutItemsArea__listingArea", "loadoutItemsArea__listingArea--boards"], [1, "loadoutItemsArea__listingArea__header"], ["size", "x-small", 1, "loadoutItemsArea__listingArea__header__title"], [1, "loadoutItemsArea__listingArea__header__checkbox", 3, "value", "change"], ["size", "small", "fillColor", "colors.light.100"], [1, "loadoutItemsArea__listingArea__overflow"], [1, "loadoutItemsArea__listingArea__list"], [4, "ngFor", "ngForOf"], [1, "loadoutItemsArea__listingArea"], ["labelText", "Show unowned", "kind", "small", 1, "loadoutItemsArea__listingArea__header__checkbox", 3, "checked", "onCheck"], [1, "middleHeader"], ["icon", "action_trash", "borderColor", "colors.gunmetal.300", "fillColor", "colors.gunmetal.300", "class", "middleHeader__clearBtn", 3, "click", 4, "ngIf"], ["size", "2x-small", "fillGradient", "gradients.gold.simple", "class", "middleHeader__heading", 4, "ngIf"], ["type", "primary", "class", "middleHeader__saveBtn", 3, "click", 4, "ngIf"], [1, "selectedLoadoutItems"], [4, "ngIf"], ["class", "selectedLoadoutItems__noSelectedBoardsTitle", "align", "center", "fillColor", "colors.gunmetal.300", "fontWeight", "bold", "kind", "large", 4, "ngIf"], [1, "selectedLoadoutItems__trinket", "selectedLoadoutItems__trinket--left", 3, "trinket", "highlight", "xButtonClick", "trinketClick"], [1, "selectedLoadoutItems__trinket", "selectedLoadoutItems__trinket--right", 3, "trinket", "highlight", "xButtonClick", "trinketClick"], ["class", "clickAnywhereOverlay", 3, "click", 4, "ngIf"], [3, "board", "owned", "count", "equipped", "click", 4, "ngIf"], [3, "board", "owned", "count", "equipped", "click"], [3, "count", "trinket", "owned", "equipped", "loadoutItemsArea__listingArea__list__item--aboveAll", "click", 4, "ngIf"], [3, "count", "trinket", "owned", "equipped", "click"], ["icon", "action_trash", "borderColor", "colors.gunmetal.300", "fillColor", "colors.gunmetal.300", 1, "middleHeader__clearBtn", 3, "click"], ["size", "2x-small", "fillGradient", "gradients.gold.simple", 1, "middleHeader__heading"], ["type", "primary", 1, "middleHeader__saveBtn", 3, "click"], ["class", "selectedLoadoutItems__img", "alt", "board preview image", 3, "src", 4, "ngIf"], [1, "selectedLoadoutItems__clearBoardButton", 3, "click"], ["alt", "board preview image", 1, "selectedLoadoutItems__img", 3, "src"], ["align", "center", "fillColor", "colors.gunmetal.300", "fontWeight", "bold", "kind", "large", 1, "selectedLoadoutItems__noSelectedBoardsTitle"], [1, "clickAnywhereOverlay", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0)(1, "gu-simple-text", 1), e.NdJ("click", function () {
                        return n.close()
                    }), e._UZ(2, "gu-icon", 2), e._uU(3, " Back "), e.qZA(), e.TgZ(4, "gu-heading-text", 3), e._uU(5, " build your loadout "), e.qZA()(), e.TgZ(6, "section", 4)(7, "div", 5)(8, "header", 6)(9, "gu-heading-text", 7), e._uU(10, " Boards "), e.qZA(), e.TgZ(11, "gu-checkbox", 8), e.NdJ("change", function () {
                        return n.showUnownedBoards = !n.showUnownedBoards
                    }), e.TgZ(12, "gu-body-text", 9), e._uU(13, " Show unowned "), e.qZA()()(), e.TgZ(14, "div", 10)(15, "div", 11), e.YNc(16, Il, 2, 1, "ng-container", 12), e.qZA()()(), e.TgZ(17, "div", 13)(18, "header", 6)(19, "gu-heading-text", 7), e._uU(20, " Trinkets "), e.qZA(), e.TgZ(21, "gu-checkbox-input", 14), e.NdJ("onCheck", function () {
                        return n.showUnownedTrinkets = !n.showUnownedTrinkets
                    }), e.qZA()(), e.TgZ(22, "div", 10)(23, "div", 11), e.YNc(24, Fl, 2, 1, "ng-container", 12), e.qZA()()()(), e.TgZ(25, "header", 15), e.YNc(26, Zl, 2, 0, "gu-plain-square-button", 16), e.YNc(27, Dl, 2, 1, "gu-heading-text", 17), e.YNc(28, Gl, 2, 1, "gu-primary-hex-button", 18), e.qZA(), e.TgZ(29, "section", 19), e.YNc(30, Ul, 3, 1, "ng-container", 20), e.YNc(31, Ll, 2, 0, "gu-paragraph-text", 21), e.TgZ(32, "gu-selected-trinket", 22), e.NdJ("xButtonClick", function () {
                        return n.clearSelected("left")
                    })("trinketClick", function () {
                        return n.selectTrinket("left")
                    }), e.qZA(), e.TgZ(33, "gu-selected-trinket", 23), e.NdJ("xButtonClick", function () {
                        return n.clearSelected("right")
                    })("trinketClick", function () {
                        return n.selectTrinket("right")
                    }), e.qZA()(), e.YNc(34, El, 1, 0, "i", 24)), 2 & t && (e.xp6(4), e.Q6J("responsiveSize", e.VKq(18, ql, e.DdM(17, Nl))), e.xp6(7), e.Q6J("value", n.showUnownedBoards), e.xp6(5), e.Q6J("ngForOf", n.allBoards), e.xp6(5), e.Q6J("checked", n.showUnownedTrinkets), e.xp6(3), e.Q6J("ngForOf", n.allTrinkets), e.xp6(2), e.Q6J("ngIf", n.selectedBoard || n.selectedTrinkets.get("left") || n.selectedTrinkets.get("right")), e.xp6(1), e.Q6J("ngIf", n.selectedBoard), e.xp6(1), e.Q6J("ngIf", n.selectedBoard), e.xp6(1), e.ekj("selectedLoadoutItems--active", !!n.selectedBoard), e.xp6(1), e.Q6J("ngIf", n.selectedBoard), e.xp6(1), e.Q6J("ngIf", !n.selectedBoard), e.xp6(1), e.Q6J("trinket", n.selectedTrinkets.get("left"))("highlight", !!n.tempTrinket), e.xp6(1), e.Q6J("trinket", n.selectedTrinkets.get("right"))("highlight", !!n.tempTrinket), e.xp6(1), e.Q6J("ngIf", n.tempTrinket))
                },
                directives: [l.sg, l.O5],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;padding:0 64px}.modalHeader[_ngcontent-%COMP%]{width:100%;height:48px;margin:24px 0;display:flex;justify-content:center;align-items:center;position:relative}.modalHeader__backBtn[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;transform:translateY(-50%);cursor:pointer;text-transform:uppercase;color:#7192b0}.modalHeader__backBtn[_ngcontent-%COMP%]:hover{color:#f6f6f6}.loadoutItemsArea[_ngcontent-%COMP%]{height:70%;display:flex;justify-content:space-between;position:relative}.loadoutItemsArea__listingArea[_ngcontent-%COMP%]{flex:1;height:100%;position:relative;display:flex;flex-direction:column}.loadoutItemsArea__listingArea[_ngcontent-%COMP%]:first-child{margin-right:64px}.loadoutItemsArea__listingArea__overflow[_ngcontent-%COMP%]{height:100%;overflow:hidden;overflow-y:auto}.loadoutItemsArea__listingArea--trinkets[_ngcontent-%COMP%]{opacity:.35}.loadoutItemsArea__listingArea__header[_ngcontent-%COMP%]{position:relative;background:linear-gradient(to left,#0F1B27 0%,#1D2F41 100%);border:1px solid #1D2F41;display:flex;align-items:center;height:60px;padding:0 32px;margin-bottom:8px}.loadoutItemsArea__listingArea__header__checkbox[_ngcontent-%COMP%]{margin-left:auto}.loadoutItemsArea__listingArea__list[_ngcontent-%COMP%]{display:grid;grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));border-bottom:20px solid transparent;margin-right:16px}.middleHeader[_ngcontent-%COMP%]{height:60px;background:linear-gradient(to left,#0F1B27 0%,#1D2F41 100%);border:1px solid #1D2F41;display:flex;position:relative;align-items:center;justify-content:flex-start;padding:0 12px}.middleHeader__saveBtn[_ngcontent-%COMP%]{position:absolute;right:12px}.middleHeader__heading[_ngcontent-%COMP%]{margin:0 auto}.selectedLoadoutItems[_ngcontent-%COMP%]{height:35%;max-height:340px;position:relative;border-bottom:none;display:flex;align-items:center;justify-content:center}.selectedLoadoutItems__clearBoardButton[_ngcontent-%COMP%]{position:absolute;top:8px;left:8px}.selectedLoadoutItems__img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.selectedLoadoutItems__trinket[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-45%);width:10%;min-width:120px;max-width:190px}.selectedLoadoutItems__trinket--left[_ngcontent-%COMP%]{left:22.7%}.selectedLoadoutItems__trinket--right[_ngcontent-%COMP%]{right:22.7%}.selectedLoadoutItems__noSelectedBoardsTitle[_ngcontent-%COMP%]{text-transform:uppercase}.loadoutItemsArea__listingArea__list__board[_ngcontent-%COMP%], .loadoutItemsArea__listingArea__list__trinket[_ngcontent-%COMP%]{cursor:pointer;transition:.1s ease-in;transition-property:filter,transform}.loadoutItemsArea__listingArea__list__trinket--selected[_ngcontent-%COMP%], .loadoutItemsArea__listingArea__list__board--selected[_ngcontent-%COMP%]{transform:scale(1.07);filter:drop-shadow(0 0 calc(var(--vh) * 1.5) rgba(89,168,205,.8))}.loadoutItemsArea__listingArea__list__board--disabled[_ngcontent-%COMP%], .loadoutItemsArea__listingArea__list__trinket--disabled[_ngcontent-%COMP%]{opacity:.4;user-select:none;pointer-events:none}.selectedLoadoutItems__saveBtn[_ngcontent-%COMP%]{position:absolute;top:0;right:0;transform:translateY(-50%)}.clickAnywhereOverlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(15,27,39,.8);z-index:2}.selectedLoadoutItems__trinket[_ngcontent-%COMP%], .modalHeader[_ngcontent-%COMP%], .loadoutItemsArea__listingArea__list__item--aboveAll[_ngcontent-%COMP%]{z-index:3}.loadoutItemsArea__listingArea__list__item--aboveAll[_ngcontent-%COMP%]{position:relative}"]
            }), o
        })();

        function Ql(o, r) {
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

        let Un = (() => {
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
                    this.loadoutService.loadouts$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => {
                        this.loadouts = t
                    })).subscribe()
                }

                createLoadout() {
                    this.akumaService.postControlEvent("gu", "Loadouts", "", "createLoadout", "Btn", "pressed"), this.modalService.createModal(Bn, {gameModeId: this.gameModeId}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }

                selectLoadout(t) {
                    this.modalService.createModal(Bn, {loadout: t, gameModeId: this.gameModeId}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(I.Z), e.Y36(we), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-my-loadouts-modal"]],
                inputs: {gameModeId: "gameModeId"},
                decls: 7,
                vars: 2,
                consts: [[3, "closeButtonClickFn"], [1, "titleAndFiltering"], [1, "titleAndFiltering__title"], [1, "loadoutsListing"], ["text", "Create Loadout", 1, "loadoutsListing__createNewLoadoutButton", 3, "click"], [3, "board", "trinkets", "click", 4, "ngFor", "ngForOf"], [3, "board", "trinkets", "click"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.TgZ(1, "header", 1)(2, "h3", 2), e._uU(3, "Loadouts"), e.qZA()(), e.TgZ(4, "div", 3)(5, "app-create-new-button", 4), e.NdJ("click", function () {
                        return n.createLoadout()
                    }), e.qZA(), e.YNc(6, Ql, 1, 2, "gu-loadout-display", 5), e.qZA()), 2 & t && (e.Q6J("closeButtonClickFn", n.close), e.xp6(6), e.Q6J("ngForOf", n.loadouts))
                },
                directives: [ye, ct, l.sg],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.titleAndFiltering__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.titleAndFiltering__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;padding:0 80px}.loadoutItemsArea[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:space-between}.loadoutItemsArea__listing[_ngcontent-%COMP%]{width:48%;border:1px dashed gold}.selectedLoadoutItems[_ngcontent-%COMP%]{height:calc(var(--vh) * 30);border:1px dashed gold}[_nghost-%COMP%]{display:block;padding:calc(var(--vh) * 7.4) 0 0;height:calc(calc(var(--vh) * 100) - 28px - 80px)}.titleAndFiltering[_ngcontent-%COMP%]{position:absolute;top:0;left:calc(var(--vw) * 4.16);right:calc(var(--vw) * 4.16);height:calc(var(--vh) * 7.4);display:flex;justify-content:center;padding-top:calc(var(--vh) * 3)}.titleAndFiltering[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;width:100%;background:#1d2f41;height:calc(var(--vh) * .25)}.titleAndFiltering__title[_ngcontent-%COMP%]{text-transform:uppercase;color:#f6f6f6}.loadoutsListing[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content;padding:0 calc(var(--vw) * 4.16);padding-top:calc(var(--vh) * 6);height:100%;overflow:hidden;overflow-y:auto}']
            }), o
        })();

        function Rl(o, r) {
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

        function Hl(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-create-new-button", 3), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().chooseLoadout()
                }), e.qZA()
            }
        }

        let Yl = (() => {
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
                    (0, Z.aj)([this.loadoutService.loadouts$, this.guGameService.gameModes$]).pipe((0, p.R)(this.unsubscribe), (0, O.U)(([t, {gameModes: n}]) => ({
                        loadouts: t,
                        gameMode: n.find(i => i.id === this.gameModeId)
                    })), (0, S.h)(({loadouts: t, gameMode: n}) => {
                        let i = !!t.length;
                        return i && !n.selectedLoadoutId && (i = !1), i
                    }), (0, O.U)(({
                                      loadouts: t,
                                      gameMode: n
                                  }) => t.find(i => i.collection_id === n.selectedLoadoutId))).subscribe(t => this.loadout = t)
                }

                logSelectLoadout() {
                    this.guGameService.getGameMode$(this.gameModeId).pipe((0, w.q)(1)).subscribe(t => {
                        this.akumaService.postControlEvent("gu", "Arena", "", "addLoadout", "Btn", "pressed", {mode_name: t.name})
                    })
                }

                chooseLoadout() {
                    this.logSelectLoadout(), this.audioService.transitionWorkshop.play(), this.modalService.createModal(Un, {gameModeId: this.gameModeId}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(f.pk), e.Y36(I.Z), e.Y36(ee.xV), e.Y36(we), e.Y36(_.jt))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-game-mode-loadout"]],
                inputs: {gameModeId: "gameModeId"},
                decls: 2,
                vars: 2,
                consts: [["class", "loadout", 3, "board", "trinkets", "hideText", "click", 4, "ngIf"], ["class", "create-button", "text", "Choose Loadout", 3, "click", 4, "ngIf"], [1, "loadout", 3, "board", "trinkets", "hideText", "click"], ["text", "Choose Loadout", 1, "create-button", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Rl, 1, 3, "gu-loadout-display", 0), e.YNc(1, Hl, 1, 0, "app-create-new-button", 1)), 2 & t && (e.Q6J("ngIf", n.loadout), e.xp6(1), e.Q6J("ngIf", !n.loadout))
                },
                directives: [l.O5, ct],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{width:100%;height:100%;display:flex;transition:transform .15s ease-in-out;position:relative;cursor:pointer}[_nghost-%COMP%]:hover{transform:scale(1.02)}.create-button[_ngcontent-%COMP%]{position:absolute;width:100%;height:calc(var(--vh) * 14);top:0;left:0}.loadout[_ngcontent-%COMP%]  .board__titleArea__title{margin-bottom:calc(var(--vh) * 1.4)}.loadout[_ngcontent-%COMP%]  .innerContainer__qualityBar{height:calc(var(--vh) * .4)}.loadout[_ngcontent-%COMP%]  .icon{font-size:calc(var(--vh) * 2)}.loadout[_ngcontent-%COMP%]  .board__titleArea__title{font-size:calc(var(--vh) * 1.8)}.loadout[_ngcontent-%COMP%]  .board__titleArea__quality{font-size:calc(var(--vh) * 1)}"]
            }), o
        })();
        var Jl = g(36787), $l = g(61715), Ln = g(63764);
        let Wl = (() => {
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
        var zl = g(236);
        const jl = ["queueBtnContainer"];

        function Vl(o, r) {
            1 & o && e.GkF(0)
        }

        function Xl(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9)(1, "div", 10), e._uU(2), e.qZA()()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.hij(" ", t.mode.type === t.GuGameModeType.DIRECT_CHALLENGE ? "Start" : "Play", " ")
            }
        }

        function Kl(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9)(1, "div", 13), e._uU(2, "In Queue"), e.qZA(), e.TgZ(3, "div", 10), e._uU(4), e.ALo(5, "duration"), e.qZA()()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(4), e.Oqu(e.lcZ(5, 1, t.secondsElapsed))
            }
        }

        function ed(o, r) {
            1 & o && (e.ynx(0), e.TgZ(1, "div", 14), e._uU(2, "Cancel"), e.qZA(), e.BQk())
        }

        function td(o, r) {
            if (1 & o && (e.YNc(0, Kl, 6, 3, "div", 11), e.YNc(1, ed, 3, 0, "ng-container", 12)), 2 & o) {
                const t = e.oxw();
                e.Q6J("ngIf", !t.isHovered), e.xp6(1), e.Q6J("ngIf", t.isHovered)
            }
        }

        const nd = function (o, r, t, n) {
            return {hovered: o, active: r, pressed: t, "queue-button-container--disabled": n}
        }, od = function (o, r) {
            return {"width.px": o, "height.px": r}
        };
        let id = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k, A, D, L) {
                    this.playService = t, this.auth = n, this.queueService = i, this.el = a, this.guGameService = s, this.resizeService = c, this.modalService = d, this.gameService = u, this.loadoutService = x, this.audioService = v, this.akumaService = k, this.cerberusModal = A, this.featureFlagService = D, this.environment = L, this.disabled = !1, this.openDeckSelect = new e.vpe, this.secondsElapsed = 0, this.progressCirclePercentage = 0, this.echoPercentage = 50, this.isPressed = !1, this.isHovered = !1, this.timeUntilCancel = 1, this.unsubscribe = new M.xQ, this.gameModeReady = !1, this.GuGameModeType = P.tO, this.disableButton = !1, this.MIN_GAMES_PLAYED = 10, this.AFTER_EVERY_X_GAMES = 5, this.launchQueueTries = 0
                }

                ngOnInit() {
                    this.userId = this.auth.getUserId(), this.watchLoadouts(), this.queueService.getQueue(1, this.mode.id).pipe((0, p.R)(this.unsubscribe)).subscribe(t => this.queue = t), this.initTimer(), this.watchForHover(), this.checkWarningFeatureFlag(), this.resizeService.viewPortUnits$.pipe((0, p.R)(this.unsubscribe)).subscribe(({vw: t}) => {
                        this.width = t * this.diameterVwMultiplier, this.height = t * this.diameterVwMultiplier
                    })
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                watchLoadouts() {
                    this.loadoutService.loadouts$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => {
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
                    const t = (0, ge.R)(this.btnContainer.nativeElement, "mouseenter").pipe((0, O.U)(() => !0)),
                        n = (0, ge.R)(this.btnContainer.nativeElement, "mouseleave").pipe((0, O.U)(() => !1));
                    (0, Jl.T)(t, n).pipe((0, p.R)(this.unsubscribe), (0, Mt.b)(10), (0, b.b)(i => {
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
                    this.disableButton = !0, this.guGameService.checkIfRequiresUpdate().pipe((0, w.q)(1)).subscribe(t => {
                        if (!t) return this.handleGameModePlayBtn(), (0, oe.of)({});
                        this.guGameService.fetchGameModes(!0)
                    })
                }

                get isGameInstalled$() {
                    return this.gameService.currentGameContext$.pipe((0, O.U)(t => this.gameService.isInstalled(t)))
                }

                showInfoModal(t, n) {
                    this.modalService.createModal(Ln.S, {title: t, text: n}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: h.e1.Center,
                        size: h.Cg.StretchableWorkarea
                    })
                }

                handleGameModePlayBtn() {
                    this.isGameInstalled$.pipe((0, w.q)(1)).subscribe(t => {
                        if (!t) {
                            const i = `The game path was unable to be verified.\n          Please check ('Settings > GODS UNCHAINED > Installation Path') is set to ${this.gameService.getDefaultInstallPath()}, and click 'CLEAR VERSION'.`;
                            return console.error("GuQueueButton-?handleGameModePlayBtn() User not allowed to queue as game is not installed."), void this.showInfoModal("Unable to Queue", i)
                        }
                        switch (this.akumaService.postControlEvent("gu", "Arena", "", "gameMode", "PlayBtn", "pressed", {mode_name: P.tO[this.mode.type]}), this.mode.type) {
                            case P.tO.SOLO:
                                this.mode.id === P.B_.SOLO ? this.handleSingle() : this.mode.id === P.B_.SERVER_SOLO && this.handleServerGame(!0);
                                break;
                            case P.tO.DIRECT_CHALLENGE:
                            case P.tO.CONSTRUCTED:
                            case P.tO.SEALED_DECK:
                                this.handleServerGame();
                                break;
                            case P.tO.TUTORIAL:
                                this.handleTutorial();
                                break;
                            default:
                                console.warn("GuQueueButton->handleGameModePlayBtn() this.mode.type not recognized.", P.tO[this.mode.type])
                        }
                    }, t => {
                        console.error("GuQueueButton->handleGameModePlayBtn() User is unable to queue", t)
                    })
                }

                handleTutorial() {
                    this.audioService.arenaClickStart.play(), this.queueService.activeQueues$.pipe((0, w.q)(1)).subscribe(t => {
                        t.forEach(n => this.queueService.cancel(n))
                    }), this.gameService.getBranch$(1).pipe((0, w.q)(1), (0, Ut.M)(this.guGameService.getGameMode$(this.mode.id)), (0, b.b)(([t, n]) => {
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
                    if (this.audioService.arenaClickStart.play(), this.deck && this.opponentsDeck) this.queueService.activeQueues$.pipe((0, w.q)(1)).subscribe(t => {
                        t.forEach(n => this.queueService.cancel(n))
                    }), this.logButtonInputted("Start"), this.gameService.getBranch$(1).pipe((0, w.q)(1), (0, b.b)(t => {
                        this.guGameService.incrementGameModeCount(0).pipe((0, w.q)(1)).subscribe(), this.logQueueCompletedSolo(), this.playService.play({
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
                    this.logButtonInputted("Cancel"), this.disableButton = !1, this.audioService.clickMediumV1.play(), (0, Xt.H)(0, 50).pipe((0, Ot.o)(() => this.isPressed), (0, O.U)(t => 50 * t), (0, O.U)(t => (this.progressCirclePercentage = t / this.timeUntilCancel * 100, this.progressCirclePercentage >= 100)), (0, S.h)(t => t), (0, b.b)(() => {
                        this.audioService.arenaCancel.play(), this.cancel()
                    })).subscribe()
                }

                validateAndLaunchQueue() {
                    this.noWalletWarningRankedGame ? this.checkToShowModalIfNoWallet() : this.launchQueue()
                }

                checkToShowModalIfNoWallet() {
                    this.auth.fetchAccountDetails().pipe((0, w.q)(1)).subscribe(t => {
                        (null == t ? void 0 : t.addresses.length) < 1 && this.accountProperties ? this.showModalNoWallet() : this.launchQueue()
                    })
                }

                showModalNoWallet() {
                    const t = this.accountProperties.won_matches + this.accountProperties.lost_matches;
                    t === this.MIN_GAMES_PLAYED || t > this.MIN_GAMES_PLAYED && (t - this.MIN_GAMES_PLAYED) % this.AFTER_EVERY_X_GAMES == 0 ? this.showWarning() : this.launchQueue()
                }

                showWarning() {
                    const n = this.cerberusModal.open(be.MZ, {defaultStylings: !1, centered: !0}).componentInstance;
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
                    }, this.userId, new z.Qc(this.userId, this.deck, this.getLoadoutId(), this.opponentsDeck), this.mode.type === P.tO.DIRECT_CHALLENGE ? this.challengeCode : "").pipe((0, w.q)(1)).subscribe(t => {
                        this.launchQueueTries = 0, this.queue = t, this.disableButton = !1, this.initTimer()
                    }, t => {
                        if (this.launchQueueTries < 3) {
                            this.launchQueueTries++;
                            setTimeout(() => {
                                this.launchQueue();
                            }, 250);
                        } else {
                            this.launchQueueTries = 0;
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
                    this.updateTimer(), this.timer = (0, $l.F)(1e3), this.timer.pipe((0, p.R)(this.unsubscribe), (0, b.b)(t => this.updateTimer())).subscribe()
                }

                updateTimer() {
                    if (null == this.queue || null === this.queue.startTimestamp) this.secondsElapsed = 0; else {
                        const n = (new Date).getTime() - this.queue.startTimestamp;
                        this.secondsElapsed = Math.round(n / 1e3)
                    }
                }

                checkWarningFeatureFlag() {
                    this.featureFlagService.get(_.vU.noWalletWarningRankedGame).pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.noWalletWarningRankedGame = t
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(z.GT), e.Y36(f.mI), e.Y36(bt.g), e.Y36(e.SBq), e.Y36(ee.xV), e.Y36(K._), e.Y36(I.Z), e.Y36(tt.hM), e.Y36(we), e.Y36(f.pk), e.Y36(_.jt), e.Y36(U.Qz), e.Y36(f.B3), e.Y36(f.Ho))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-gu-queue-button"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(jl, 7), 2 & t) {
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
                    }), e.TgZ(2, "div", 2), e._UZ(3, "app-progress-circle", 3), e.qZA(), e.TgZ(4, "div", 4)(5, "div", 5), e.YNc(6, Vl, 1, 0, "ng-container", 6), e.qZA()()(), e.YNc(7, Xl, 3, 1, "ng-template", null, 7, e.W1O), e.YNc(9, td, 2, 2, "ng-template", null, 8, e.W1O)), 2 & t) {
                        const i = e.MAs(8), a = e.MAs(10);
                        e.s9C("id", null == n.mode ? null : n.mode.name), e.Q6J("ngClass", e.l5B(10, nd, n.isHovered, n.isActive, n.isPressed, n.disableButton || n.disabled))("ngStyle", e.WLB(15, od, n.width, n.height)), e.xp6(3), e.Q6J("percentage", n.progressCirclePercentage)("strokeColor", "red")("strokeWidth", .06 * n.width)("width", n.width), e.xp6(3), e.Q6J("ngIf", n.isActive)("ngIfThen", a)("ngIfElse", i)
                    }
                },
                directives: [Wl, l.mk, l.PC, Ft, l.O5],
                pipes: [zl.u],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}.buttonText__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.buttonText__label[_ngcontent-%COMP%], .buttonText__hold[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif}.buttonText__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.buttonText__hold[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.buttonText__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}[_nghost-%COMP%]{display:inline-block;position:relative;transform-origin:50% 50%;transition:all .15s ease-in-out;background:var(--gu-blue-dark);border-radius:50%;}[_nghost-%COMP%]:hover {transform:scale(1.05);}.queue-button-container[_ngcontent-%COMP%]{user-select:none;cursor:pointer;height:100%;border-radius:50%;overflow:hidden}.queue-button-container.pressed[_ngcontent-%COMP%]{box-shadow:inset 2px 2px 5px #000}.queue-button-container--disabled[_ngcontent-%COMP%]{user-select:none;pointer-events:none;opacity:.6}.outer-circle[_ngcontent-%COMP%]{height:100%;background:var(--gu-yellow);}.inner-circle[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;width:88%;height:88%;transform:translate(-50%, -50%);border-radius:50%;transition:all .15s ease;background:var(--gu-blue-dark);}.inner-circle-content[_ngcontent-%COMP%]{height:100%;display:flex}.buttonText[_ngcontent-%COMP%]{margin:auto;display:flex;flex-flow:column nowrap;text-align:center;color:#f6f6f6}.buttonText__title[_ngcontent-%COMP%]{line-height:1}.buttonText__hold[_ngcontent-%COMP%]{font-weight:600}.buttonText__label[_ngcontent-%COMP%]{font-weight:600;text-transform:uppercase;color:#e0c58f}"]
            }), o
        })();
        var En = g(14618), Nn = g(69931);

        function rd(o, r) {
            1 & o && e._UZ(0, "img", 7), 2 & o && e.Q6J("src", "/gu-assets/images/arena/update-lock.svg", e.LSH)
        }

        function ad(o, r) {
            1 & o && e._UZ(0, "img", 7), 2 & o && e.Q6J("src", "/gu-assets/images/arena/update-error.svg", e.LSH)
        }

        function sd(o, r) {
            1 & o && e.GkF(0)
        }

        const cd = function () {
            return ["/game/gu/temple"]
        };

        function ld(o, r) {
            1 & o && (e.TgZ(0, "div", 8)(1, "h6", 9), e._uU(2, "Please Open Packs"), e.qZA(), e.TgZ(3, "gu-primary-hex-button", 10), e._uU(4, " Temple "), e.qZA()()), 2 & o && (e.xp6(3), e.Q6J("routerLink", e.DdM(1, cd)))
        }

        function dd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 8)(1, "div", 11)(2, "div", 12), e._uU(3), e.qZA(), e.TgZ(4, "div", 13), e._uU(5), e.qZA()(), e._UZ(6, "app-progress-bar", 14), e.TgZ(7, "h5", 15), e._uU(8), e.qZA()()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.hij("Level ", null == t.playerProperties ? null : t.playerProperties.level, ""), e.xp6(2), e.hij("Level ", null == t.lock ? null : t.lock.lvlReq, ""), e.xp6(1), e.Q6J("percentage", t.percentage)("height", t.progressBarHeight)("showDivider", !0)("animateFirstValue", !0), e.xp6(2), e.hij("Reach level ", null == t.lock ? null : t.lock.lvlReq, " to unlock")
            }
        }

        function gd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 20), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(3);
                e.xp6(1), e.hij("", t.updatePercentage, " %")
            }
        }

        function ud(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, " DOWNLOAD IN PROGRESS "), e.qZA(), e.TgZ(3, "gu-paragraph-text", 18), e._uU(4, " You may not queue for a match until the update is complete "), e.qZA(), e.YNc(5, gd, 2, 1, "div", 19), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(5), e.Q6J("ngIf", void 0 !== t.updatePercentage)
            }
        }

        function pd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, "UPDATE REQUIRED"), e.qZA(), e.TgZ(3, "gu-primary-hex-button", 21), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).updateGame()
                }), e._uU(4, "Update "), e.qZA(), e.BQk()
            }
        }

        function _d(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, " DOWNLOAD FAILED "), e.qZA(), e.TgZ(3, "gu-paragraph-text", 18), e._uU(4, " Check your internet connection, and that you have sufficient disk space. "), e.qZA(), e.TgZ(5, "gu-primary-hex-button", 22), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).updateGame()
                }), e.qZA(), e.BQk()
            }
        }

        function hd(o, r) {
            if (1 & o && (e._UZ(0, "div", 16), e.TgZ(1, "div", 8), e.YNc(2, ud, 6, 1, "ng-container", 17), e.YNc(3, pd, 5, 0, "ng-container", 17), e.YNc(4, _d, 6, 0, "ng-container", 17), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("ngIf", t.isUpdating && !t.updateError), e.xp6(1), e.Q6J("ngIf", t.isUpdateRequired && !t.isUpdating && !t.updateError), e.xp6(1), e.Q6J("ngIf", t.updateError)
            }
        }

        function md(o, r) {
            1 & o && e._UZ(0, "div", 16)
        }

        function fd(o, r) {
            1 & o && e._UZ(0, "div", 25)
        }

        function Cd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 20), e._uU(1), e.qZA()), 2 & o) {
                const t = e.oxw(3);
                e.xp6(1), e.hij("", t.assetsUpdatePercentage, " %")
            }
        }

        function vd(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, " UPDATE IN PROGRESS "), e.qZA(), e.TgZ(3, "gu-paragraph-text", 18), e._uU(4, " You may not queue for a match until the update is complete "), e.qZA(), e.YNc(5, Cd, 2, 1, "div", 19), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(5), e.Q6J("ngIf", void 0 !== t.assetsUpdatePercentage)
            }
        }

        function bd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "h6", 9), e._uU(2, " DOWNLOAD FAILED "), e.qZA(), e.TgZ(3, "gu-paragraph-text", 18), e._uU(4, " Check your internet connection, and that you have sufficient disk space. "), e.qZA(), e.TgZ(5, "gu-primary-hex-button", 22), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).updateNewAssets()
                }), e.qZA(), e.BQk()
            }
        }

        function xd(o, r) {
            if (1 & o && (e.YNc(0, md, 1, 0, "div", 23), e.YNc(1, fd, 1, 0, "div", 24), e.TgZ(2, "div", 8), e.YNc(3, vd, 6, 1, "ng-container", 17), e.YNc(4, bd, 6, 0, "ng-container", 17), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Q6J("ngIf", !t.assetsUpdateError), e.xp6(1), e.Q6J("ngIf", t.assetsUpdateError), e.xp6(2), e.Q6J("ngIf", !t.assetsUpdateError), e.xp6(1), e.Q6J("ngIf", t.assetsUpdateError)
            }
        }

        function wd(o, r) {
            1 & o && (e.TgZ(0, "div", 8)(1, "h6", 9), e._uU(2, "Locked"), e.qZA()())
        }

        let Md = (() => {
            class o {
                constructor(t, n, i, a, s) {
                    this.progressionService = t, this.guUserService = n, this.resizeService = i, this.ngrxStore = a, this.guGameService = s, this.isUpdating = !1, this.updateError = !1, this.isUpdateRequired = !1, this.isAssetsUpdateRequired = !1, this.assetsUpdateError = !1, this.assetsUpdateInProgress = !1, this.updatePercentage = 0, this.LockType = P.Gn, this.unsubscribe = new M.xQ
                }

                ngOnInit() {
                    this.lock.type === P.Gn.LEVEL && this.loadProgress(), this.resizeService.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({vh: t}) => this.progressBarHeight = 2.5 * t)).subscribe(), this.watchForUpdateState(), this.watchForAssetsUpdateState(), this.lock.type === P.Gn.ASSETS_UPDATE && !this.assetsUpdateInProgress && (this.assetsUpdateInProgress = !0, this.updateNewAssets())
                }

                ngOnChanges(t) {
                    for (const n in t) if (t.hasOwnProperty(n)) switch (n) {
                        case"lock":
                            if (t[n].previousValue && t[n].previousValue.type === P.Gn.UPDATE && t[n].currentValue.type === P.Gn.ASSETS_UPDATE && !this.assetsUpdateInProgress) {
                                this.assetsUpdateInProgress = !0, this.updateNewAssets();
                                break
                            }
                    }
                }

                updateGame() {
                    this.ngrxStore.dispatch(new En.Kg)
                }

                updateNewAssets() {
                    this.isAssetsUpdateRequired && this.ngrxStore.dispatch(new En.$9)
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                watchForUpdateState() {
                    this.ngrxStore.select((0, Nn.DM)()).pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => !!t)).subscribe(t => {
                        this.isUpdateRequired = t.isUpdateRequired, this.isUpdating = "downloading" === t.status || "extracting" === t.status, this.updateError = "error" === t.status, this.updatePercentage = t.percentage, "completed" === t.status && this.guGameService.fetchGameModes()
                    })
                }

                watchForAssetsUpdateState() {
                    this.ngrxStore.select((0, Nn.gP)()).pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => !!t)).subscribe(t => {
                        this.isAssetsUpdateRequired = t.isUpdateRequired, this.assetsUpdateInProgress = "downloading" === t.status, this.assetsUpdateError = "error" === t.status, this.assetsUpdatePercentage = t.percentage, "completed" === t.status && this.guGameService.fetchGameModes()
                    })
                }

                loadProgress() {
                    (0, Z.aj)([this.guUserService.extendedAccountProperties$, this.progressionService.accountThresholds$]).pipe((0, p.R)(this.unsubscribe), (0, O.U)(([t, n]) => ({
                        playerProperties: t,
                        lvlThreshold: n.find(i => i.level === this.lock.lvlReq)
                    })), (0, b.b)(t => {
                        this.playerProperties = t.playerProperties, this.lvlThreshold = t.lvlThreshold, this.percentage = 100 * t.playerProperties.total_xp / t.lvlThreshold.exp
                    })).subscribe()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(j.$z), e.Y36(ce.MZ), e.Y36(K._), e.Y36(sn.yh), e.Y36(ee.xV))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-lock"]],
                inputs: {lock: "lock"},
                features: [e.TTD],
                decls: 13,
                vars: 3,
                consts: [["class", "lock__icon", 3, "src", 4, "ngIf"], [4, "ngTemplateOutlet"], ["cards", ""], ["level", ""], ["update", ""], ["updateAssets", ""], ["locked", ""], [1, "lock__icon", 3, "src"], [1, "lock__contentArea"], [1, "heading"], ["type", "primary", 1, "lock_action_button", 3, "routerLink"], [1, "lock__contentArea__rankArea"], [1, "rank", "middle"], [1, "rank", "right"], [1, "lock__contentArea__progressBar", 3, "percentage", "height", "showDivider", "animateFirstValue"], [1, "lock__contentArea__reachHint"], [1, "lock__contentArea__dividerNormal"], [4, "ngIf"], ["kind", "tag", 1, "heading__info"], ["class", "heading__percentage", 4, "ngIf"], [1, "heading__percentage"], ["type", "primary", 1, "lock_action_button", 3, "click"], ["text", "Retry", 1, "lock_action_button", 3, "click"], ["class", "lock__contentArea__dividerNormal", 4, "ngIf"], ["class", "lock__contentArea__dividerError", 4, "ngIf"], [1, "lock__contentArea__dividerError"]],
                template: function (t, n) {
                    if (1 & t && (e.YNc(0, rd, 1, 1, "img", 0), e.YNc(1, ad, 1, 1, "img", 0), e.YNc(2, sd, 1, 0, "ng-container", 1), e.YNc(3, ld, 5, 2, "ng-template", null, 2, e.W1O), e.YNc(5, dd, 9, 7, "ng-template", null, 3, e.W1O), e.YNc(7, hd, 5, 3, "ng-template", null, 4, e.W1O), e.YNc(9, xd, 5, 4, "ng-template", null, 5, e.W1O), e.YNc(11, wd, 3, 0, "ng-template", null, 6, e.W1O)), 2 & t) {
                        const i = e.MAs(4), a = e.MAs(6), s = e.MAs(8), c = e.MAs(10), d = e.MAs(12);
                        e.Q6J("ngIf", !n.assetsUpdateError && !n.updateError), e.xp6(1), e.Q6J("ngIf", n.assetsUpdateError || n.updateError), e.xp6(1), e.Q6J("ngTemplateOutlet", n.lock.type === n.LockType.CARDS ? i : n.lock.type === n.LockType.UPDATE ? s : n.lock.type === n.LockType.ASSETS_UPDATE ? c : n.lock.type === n.LockType.LEVEL ? a : d)
                    }
                },
                directives: [l.O5, l.tP, pe.rH, Qe],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.heading__percentage[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%], .lock__contentArea__reachHint[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .lock__contentArea__rankArea[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.lock__contentArea__reachHint[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}.heading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.heading__percentage[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.29)}[_nghost-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(15,27,39,.8);display:flex;flex-flow:column nowrap;z-index:1}.lock__icon[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 8);margin-bottom:calc(var(--vh) * 8);width:calc(var(--vw) * 10);margin-left:auto;margin-right:auto}.heading[_ngcontent-%COMP%]{margin-top:15px}.heading__info[_ngcontent-%COMP%]{color:#d7d7d7;margin:10px 35px}.lock_action_button[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2);align-self:center}.lock__contentArea[_ngcontent-%COMP%]{margin:0 auto;display:flex;text-align:center;flex-flow:column nowrap;color:#f6f6f6}.lock__contentArea__dividerNormal[_ngcontent-%COMP%]{height:5px;background:linear-gradient(90deg,#fff2d8 0%,#ebc98b 50.34%,#c6a052 100%);transform:scaleY(-1)}.lock__contentArea__dividerError[_ngcontent-%COMP%]{height:5px;background:linear-gradient(270deg,#d73333 0%,#ff8b01 100.97%);transform:scaleY(-1)}.lock__contentArea__rankArea[_ngcontent-%COMP%]{display:flex;position:relative;align-items:center;margin-bottom:calc(var(--vh) * 1)}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%]{white-space:nowrap}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{text-align:center;font-weight:700;position:absolute;width:100%}.lock__contentArea__rankArea[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{margin-left:auto}.lock__contentArea__reachHint[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2)}"]
            }), o
        })();

        function yd(o, r) {
            1 & o && e._UZ(0, "app-card2", 10), 2 & o && e.Q6J("protoId", r.$implicit)
        }

        let kd = (() => {
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
                return new (t || o)(e.Y36(U.mX))
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
                    }), e.TgZ(1, "gu-paragraph-text", 1), e._uU(2), e.ALo(3, "titlecase"), e.qZA(), e.TgZ(4, "gu-heading-text", 2), e._uU(5, " Sealed Deck Event "), e.qZA(), e.TgZ(6, "gu-vertical-space", 3)(7, "gu-vertical-space", 4), e.YNc(8, yd, 1, 1, "app-card2", 5), e.qZA(), e.TgZ(9, "gu-vertical-space", 6)(10, "gu-paragraph-text", 7), e._uU(11), e.qZA()(), e.TgZ(12, "gu-vertical-space", 6)(13, "gu-paragraph-text", 8), e._uU(14, " Build a deck using any 30 of those cards you want, even those from other domains. Earn enough victories, and you will get to keep these three cards and win other prizes! "), e.qZA()()(), e.TgZ(15, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                        return n.clickContinue()
                    }), e._uU(16, " Continue "), e.qZA()()), 2 & t && (e.Q6J("background", n.god), e.xp6(2), e.hij(" You have chosen to align with the God of ", e.lcZ(3, 4, n.god), " "), e.xp6(6), e.Q6J("ngForOf", n.protos), e.xp6(3), e.hij(" You have received the blessing of ", n.totalCards, " cards to use during this event. "))
                },
                directives: [l.sg, J],
                pipes: [l.rS],
                styles: [".bottomSection__cards[_ngcontent-%COMP%]{display:flex;justify-content:center}.bottomSection__cards__card[_ngcontent-%COMP%]{margin:0 16px;width:180px}@media only screen and (min-width: 1400px){.bottomSection__cards__card[_ngcontent-%COMP%]{width:240px}}"]
            }), o
        })();
        var Od = g(55943);

        function Pd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-vertical-space", 5)(1, "gu-vertical-space", 6)(2, "gu-paragraph-text", 7), e._uU(3), e.ALo(4, "date"), e.qZA()(), e.TgZ(5, "gu-primary-hex-button", 8), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clickJoinNow()
                }), e._uU(6, " JOIN WITH "), e.TgZ(7, "span", 9), e._uU(8), e.qZA(), e._UZ(9, "gu-icon", 10), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(3), e.hij(" Signup before ", e.Dn7(4, 3, t.gameMode.properties.entry_cutoff, "EEEE haa", "AEDT"), " AEDT "), e.xp6(2), e.Q6J("disabled", t.userStarTotal < t.gameMode.properties.entry_cost), e.xp6(3), e.Oqu(t.gameMode.properties.entry_cost)
            }
        }

        const Sd = function () {
            return ["days", "hours", "minutes", "seconds"]
        };

        function Td(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 11)(1, "gu-vertical-space", 12)(2, "gu-paragraph-text", 13), e._uU(3, " Thank you for joining! The event will commence in: "), e.qZA()(), e._UZ(4, "gu-countdown-timer", 14), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(4), e.Q6J("targetTime", t.startTimestamp)("showFields", e.DdM(2, Sd))
            }
        }

        function Id(o, r) {
            1 & o && e.GkF(0)
        }

        function Ad(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 15)(1, "gu-vertical-space", 16)(2, "gu-paragraph-text", 17), e._uU(3, " Your Record "), e.qZA()(), e.YNc(4, Id, 1, 0, "ng-container", 18), e.qZA()), 2 & o) {
                e.oxw();
                const t = e.MAs(5);
                e.xp6(4), e.Q6J("ngTemplateOutlet", t)
            }
        }

        function Fd(o, r) {
            1 & o && e.GkF(0)
        }

        function Zd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-vertical-space", 19)(1, "gu-vertical-space", 20)(2, "gu-paragraph-text", 17), e._uU(3, " You have completed your run! "), e.qZA()(), e.YNc(4, Fd, 1, 0, "ng-container", 18), e.TgZ(5, "gu-primary-hex-button", 21), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().clickCollectRewards()
                }), e._uU(6, " Collect Rewards "), e.qZA()()
            }
            if (2 & o) {
                e.oxw();
                const t = e.MAs(5);
                e.xp6(4), e.Q6J("ngTemplateOutlet", t)
            }
        }

        function Dd(o, r) {
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

        const Gd = function () {
            return {breakpoint: "x-large", bottomSize: "x-large"}
        }, Bd = function (o) {
            return [o]
        };

        function Ud(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 22)(1, "gu-paragraph-text", 23), e._uU(2, " WINS "), e.qZA(), e._UZ(3, "gu-progress-step-counter", 24), e.qZA(), e.TgZ(4, "gu-vertical-space", 25)(5, "gu-paragraph-text", 23), e._uU(6, " LOSSES "), e.qZA(), e._UZ(7, "gu-progress-step-counter", 26), e.YNc(8, Dd, 2, 2, "gu-paragraph-text", 27), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.Q6J("responsiveSize", e.VKq(7, Bd, e.DdM(6, Gd))), e.xp6(3), e.Q6J("filledSteps", t.wins)("totalSteps", t.gameMode.properties.max_wins), e.xp6(4), e.Q6J("filledSteps", t.losses)("totalSteps", t.gameMode.properties.max_losses), e.xp6(1), e.Q6J("ngIf", t.sealedModeStatus === t.SealedModeStatus.STARTED)
            }
        }

        let Ld = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k) {
                    this.audioService = t, this.sealedService = n, this.modalService = i, this.starsService = a, this.cerberusModalService = s, this.decksService = c, this.akuma = d, this.cardsService = u, this.packService = x, this.loadoutService = v, this.guGameService = k, this.sealedModeStatus = X.r.AVAILABLE, this.wins = 0, this.losses = 0, this.userStarTotal = 0, this.unsubscribe = new M.xQ, this.SealedModeStatus = X.r
                }

                get getClass() {
                    return this.sealedModeStatus === X.r.STARTED || this.sealedModeStatus === X.r.REWARDS_AVAILABLE
                }

                ngOnInit() {
                    this.watchSealMode(), this.initStars()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                initStars() {
                    this.starsService.fetchUserStarsTotal(), this.starsService.userStarTotal$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => this.userStarTotal = t)
                }

                watchSealMode() {
                    this.sealedService.sealedMode$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.sealedMode = t, t && (this.wins = t.wins, this.losses = t.losses, this.startTimestamp = new Date(t.game_mode_data.properties.start_time_server).getTime() / 1e3)
                    })
                }

                clickCollectRewards() {
                    this.akuma.postEvent("Control", "arenaHome_SealedDeckCollectRewardsBtn_pressed"), this.akuma.postEvent("Flow", "_sealDeckRun_succeeded"), "function" == typeof gtag && gtag("event", "_sealDeckRun_succeeded"), this.collectRewards()
                }

                collectRewards() {
                    this.sealedService.claimRewards$(this.sealedMode.sealed_id).pipe((0, w.q)(1)).subscribe(t => {
                        this.handleRewards(t)
                    })
                }

                handleRewards(t) {
                    this.cardsService.fetchInventory(), this.packService.fetchUnopenedPacks(), this.loadoutService.fetchData(), this.modalService.destroyTopModal(), this.modalService.createModal(Pn, {rewards: t}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Fullscreen
                    }), this.sealedService.fetchSealed()
                }

                onGodSelect(t, n) {
                    this.sealedService.enterSealed$(t).pipe((0, w.q)(1)).subscribe(i => {
                        this.decksService.fetchDecks(), this.starsService.fetchUserStarsTotal(), this.decksService.selectActiveDeckById(i.deck_id), this.decksService.updateDeckSelectMode(!0, P.B_.SEALED_DECK), n();
                        const a = i.prizes.map(s => s.proto);
                        this.openWelcomeModal(t, a, i.deck_id, i.protos.length)
                    }, i => {
                        this.showInfoModal("Unable to enter", i && i.error && "entry cutoff expired" === i.error.error ? "The entry cutoff for Sealed Deck has been reached." : i && i.error && "Not enough stars balance" === i.error.error ? "Insufficient stars balance." : "There was an error joining. Please try again later.")
                    })
                }

                openWelcomeModal(t, n, i, a) {
                    const c = this.cerberusModalService.open(kd).componentInstance;
                    c.god = t, c.protos = n, c.totalCards = a, c.onContinueClicked = this.onWelcomeModalContinueClicked.bind(this, n, i)
                }

                onWelcomeModalContinueClicked(t, n) {
                    this.audioService.clickItemV2.play(), this.akuma.postEvent("Screen", "sealeddeckGodchosen_opened"), this.modalService.createModal(Fn, {}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }

                clickDropOut() {
                    this.akuma.postEvent("Control", "arenaHome_dropoutSealedBtn_pressed"), this.akuma.postEvent("Flow", "_sealedDeckRun_failed"), "function" == typeof gtag && gtag("event", "_sealedDeckRun_failed"), this.audioService.clickItemV1.play(), this.modalService.createModal(kn, {
                        okButtonText: "Drop out",
                        message: "Dropping out will finish this run of Sealed Deck, and award prizes for your current number of wins.",
                        onOk: () => {
                            this.collectRewards()
                        },
                        direction: "down"
                    }, {position: h.e1.Custom, customPosition: ".winsLosses__dropCta:top"})
                }

                clickJoinNow() {
                    this.akuma.postEvent("Control", "arenaHome_joinsSealedBtn_pressed", {cost: this.gameMode.properties.entry_cost}), this.akuma.postEvent("Flow", "_sealedDeckRun_started", {cost: this.gameMode.properties.entry_cost}), "function" == typeof gtag && gtag("event", "_sealedDeckRun_started", {cost: this.gameMode.properties.entry_cost}), this.guGameService.clearGameModeDeck(P.B_.SEALED_DECK, !1), this.guGameService.fetchGameModes(), this.audioService.clickItemV2.play(), this.modalService.createModal(Dn, {
                        gameModeType: P.tO.SEALED_DECK,
                        gameModeId: P.B_.SEALED_DECK,
                        onGodSelect: this.onGodSelect.bind(this)
                    }, {blurredBackground: !0, canCloseFromOutside: !1, position: h.e1.Center, size: h.Cg.Workarea})
                }

                showInfoModal(t, n) {
                    this.modalService.createModal(Ln.S, {title: t, text: n}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: h.e1.Center,
                        size: h.Cg.StretchableWorkarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(f.pk), e.Y36(X.H), e.Y36(I.Z), e.Y36(_.cM), e.Y36(Od.Q), e.Y36(te.D), e.Y36(_.jt), e.Y36(_.dK), e.Y36(Oe.F), e.Y36(we), e.Y36(ee.xV))
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
                consts: [["top", "x-small", "class", "section availableSection", 4, "ngIf"], ["top", "x-small", "class", "section waitingToStartSection", 4, "ngIf"], ["top", "x-small", "class", "section startedSection", 4, "ngIf"], ["top", "x-small", "class", "section rewardsSection", 4, "ngIf"], ["winsLossesTemplate", ""], ["top", "x-small", 1, "section", "availableSection"], ["bottom", "medium", 1, "availableSection__infoText"], ["align", "center", "fillColor", "colors.gunmetal.100"], ["type", "special", 1, "availableSection__joinCta", 3, "disabled", "click"], [1, "availableSection__joinCta__price"], ["iconLigature", "collectable_stars", "fillGradientTarget", "top", "fillGradient", "gradients.apocyan.simple", 1, "availableSection__joinCta__icon"], ["top", "x-small", 1, "section", "waitingToStartSection"], ["bottom", "medium", 1, "waitingToStartSection__infoText"], ["align", "center", "fillColor", "colors.light.100", "fontWeight", "bold", "kind", "large"], ["size", "small", 1, "waitingToStartSection__countdown", 3, "targetTime", "showFields"], ["top", "x-small", 1, "section", "startedSection"], ["bottom", "medium", 1, "startedSection__infoText"], ["align", "left", "fillColor", "colors.light.100", "fontWeight", "bold", "kind", "large"], [4, "ngTemplateOutlet"], ["top", "x-small", 1, "section", "rewardsSection"], ["top", "large", "bottom", "medium", 1, "rewardsSection__infoText"], ["type", "special", 1, "rewardsSection__joinCta", 3, "click"], ["bottom", "small", 1, "winsLosses", 3, "responsiveSize"], ["align", "center", "fillColor", "colors.gunmetal.100", "kind", "tag", 1, "winsLosses__tag"], ["fillGradient", "gradients.apocyan.simple", "fillGradientTarget", "top left", "bridgeColor", "colors.apocyan.300", "squareSize", "calc(var(--vh) * 2)", 1, "winsLosses__progress", 3, "filledSteps", "totalSteps"], [1, "winsLosses"], ["fillGradient", "gradients.god.war", "fillGradientTarget", "top left", "bridgeColor", "colors.god.war.tertiary", "squareSize", "calc(var(--vh) * 2)", 1, "winsLosses__progress", 3, "filledSteps", "totalSteps"], ["class", "winsLosses__dropCta", "align", "center", "fillColor", "colors.god.war.secondary", "kind", "tag", 3, "winsLosses__dropCta--disabled", "click", 4, "ngIf"], ["align", "center", "fillColor", "colors.god.war.secondary", "kind", "tag", 1, "winsLosses__dropCta", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Pd, 10, 7, "gu-vertical-space", 0), e.YNc(1, Td, 5, 3, "gu-vertical-space", 1), e.YNc(2, Ad, 5, 1, "gu-vertical-space", 2), e.YNc(3, Zd, 7, 1, "gu-vertical-space", 3), e.YNc(4, Ud, 9, 9, "ng-template", null, 4, e.W1O)), 2 & t && (e.Q6J("ngIf", n.sealedModeStatus === n.SealedModeStatus.AVAILABLE), e.xp6(1), e.Q6J("ngIf", n.sealedModeStatus === n.SealedModeStatus.WAITING_TO_START), e.xp6(1), e.Q6J("ngIf", n.sealedModeStatus === n.SealedModeStatus.STARTED), e.xp6(1), e.Q6J("ngIf", n.sealedModeStatus === n.SealedModeStatus.REWARDS_AVAILABLE))
                },
                directives: [l.O5, l.tP],
                pipes: [l.uU],
                styles: ['[_nghost-%COMP%]{display:flex;flex-grow:1;justify-content:center;position:relative}.topBorder[_nghost-%COMP%]:before{display:block;position:absolute;content:"";border:#0F1B27;border-bottom:#1D2F41;border-style:solid;border-width:1px;height:2px;width:calc(var(--vw) * 26.56)}.section[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.availableSection__joinCta[_ngcontent-%COMP%]{margin:0 auto}.availableSection__joinCta__price[_ngcontent-%COMP%]{background-image:linear-gradient(to top,#AFFAED 0%,#54BBCD 100%);color:transparent;-webkit-background-clip:text;background-clip:text}.availableSection__joinCta__icon[_ngcontent-%COMP%]{display:inline-flex}.availableSection__infoText[_ngcontent-%COMP%], .waitingToStartSection__infoText[_ngcontent-%COMP%]{margin-top:auto}.waitingToStartSection__countdown[_ngcontent-%COMP%]{align-self:center}.startedSection__infoText[_ngcontent-%COMP%]{margin-top:auto}.winsLosses[_ngcontent-%COMP%]{display:flex;align-items:center}.winsLosses__tag[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:64px;height:24px;background:#1D2F41}.winsLosses__progress[_ngcontent-%COMP%]{margin-left:12px}.winsLosses__dropCta[_ngcontent-%COMP%]{position:relative;text-decoration:underline;cursor:pointer;margin-left:auto;margin-right:16px}.winsLosses__dropCta--disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default;opacity:.6}.rewardsSection__joinCta[_ngcontent-%COMP%]{margin:auto auto 0}']
            }), o
        })();

        function Ed(o, r) {
            if (1 & o && (e.ynx(0), e._uU(1), e.ALo(2, "date"), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" Event Starts: ", e.Dn7(2, 1, t.gameMode.properties.start_time_server, "EEEE h:mmaa", "AEDT"), " AEDT ")
            }
        }

        function Nd(o, r) {
            if (1 & o && (e.ynx(0), e._uU(1), e.ALo(2, "dateTo"), e.BQk()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.hij(" Time Remaining: ", e.Dn7(2, 1, t.gameMode.end_timestamp_server, t.nowDate, !1), " ")
            }
        }

        function qd(o, r) {
            if (1 & o && (e.TgZ(0, "gu-vertical-space", 19), e.YNc(1, Ed, 3, 5, "ng-container", 14), e.YNc(2, Nd, 3, 5, "ng-container", 14), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngIf", t.sealedModeStatus === t.SealedModeStatus.AVAILABLE || t.sealedModeStatus === t.SealedModeStatus.WAITING_TO_START), e.xp6(1), e.Q6J("ngIf", t.sealedModeStatus === t.SealedModeStatus.STARTED || t.sealedModeStatus === t.SealedModeStatus.REWARDS_AVAILABLE)
            }
        }

        function Qd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "gu-vertical-space", 20)(1, "a", 21), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().learnMore()
                }), e._uU(2), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(2), e.hij(" ", t.gameMode.id === t.GuGameModeId.DIRECT_CHALLENGE ? "LEARN MORE" : "VIEW RULES & PRIZES", " ")
            }
        }

        function Rd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 22), e._uU(1), e.ALo(2, "dateTo"), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.hij(" ", e.Dn7(2, 1, t.refreshDate, t.nowDate, !1), " ")
            }
        }

        function Hd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 23), e._UZ(1, "app-win-visualisation", 24)(2, "app-loss-visualisation", 25), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("winCount", t.wins), e.xp6(1), e.Q6J("lossCount", t.losses)
            }
        }

        function Yd(o, r) {
            1 & o && (e.TgZ(0, "div", 31), e._UZ(1, "img", 32)(2, "div", 33), e.TgZ(3, "label", 34), e._uU(4, "Weekend Event"), e.qZA()())
        }

        function Jd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 26, 27), e.YNc(2, Yd, 5, 0, "div", 28), e._UZ(3, "img", 29), e.TgZ(4, "div", 30), e._uU(5), e.qZA()()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Q6J("ngIf", t.gameMode.properties.sub_type === t.GuGameModeSubType.WEEKEND_EVENT), e.xp6(1), e.MGl("src", "/gu-assets/images/rank-progress/gu-progress-rank-cracks--", t.shieldCrackCount, ".svg", e.LSH), e.xp6(1), e.ekj("cardHeader__shield__rankInitials--maxRank", t.isMaxRank), e.xp6(1), e.hij("", t.currentRankInitials, "")
            }
        }

        function $d(o, r) {
            1 & o && (e.TgZ(0, "div", 46), e._uU(1, " vs "), e.qZA())
        }

        function Wd(o, r) {
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

        function zd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "div", 41)(2, "app-deck", 42), e.NdJ("selectDeck", function (i) {
                    return e.CHM(t), e.oxw(2).selectDeck(i)
                }), e.qZA(), e.YNc(3, $d, 2, 0, "div", 43), e.YNc(4, Wd, 1, 3, "app-deck", 44), e.qZA(), e._UZ(5, "app-game-mode-loadout", 45), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw(2);
                e.xp6(2), e.Q6J("deck", t.selectedDeck)("emptyText", t.emptyDeckText)("hideGodName", !0), e.xp6(1), e.Q6J("ngIf", t.gameMode.type === t.GuGameModeType.SOLO), e.xp6(1), e.Q6J("ngIf", t.gameMode.type === t.GuGameModeType.SOLO), e.xp6(1), e.Q6J("gameModeId", t.gameMode.id)
            }
        }

        function jd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 50), e._UZ(1, "i", 51), e.TgZ(2, "gu-simple-text", 52)(3, "strong"), e._uU(4), e.qZA()()()), 2 & o) {
                const t = r.$implicit;
                e.xp6(4), e.Oqu(t)
            }
        }

        function Vd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 48), e.YNc(1, jd, 5, 1, "div", 49), e.qZA()), 2 & o) {
                const t = e.oxw(2);
                e.xp6(1), e.Q6J("ngForOf", t.tutorialBullets)
            }
        }

        function Xd(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 35), e.YNc(1, zd, 6, 6, "ng-container", 36), e.YNc(2, Vd, 2, 1, "ng-template", null, 37, e.W1O), e.TgZ(4, "div", 38)(5, "app-gu-queue-button", 39, 40), e.NdJ("openDeckSelect", function (i) {
                    return e.CHM(t), e.oxw().openDeckSelect(i)
                }), e.qZA()()()
            }
            if (2 & o) {
                const t = e.MAs(3), n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", n.gameMode.type !== n.GuGameModeType.TUTORIAL)("ngIfElse", t), e.xp6(3), e.ekj("hidden", n.gameMode.lock), e.xp6(1), e.Q6J("mode", n.gameMode)("deck", n.getPlayDeck(n.selectedDeck))("opponentsDeck", n.getPlayDeck(n.selectedAIDeck))("challengeCode", n.challengeCodeVal)("accountProperties", n.accountProperties)("disabled", n.gameMode.id === n.GuGameModeId.DIRECT_CHALLENGE && n.challengeCode.invalid)
            }
        }

        function Kd(o, r) {
            if (1 & o && (e.TgZ(0, "div", 53)(1, "div", 54), e._uU(2), e.ALo(3, "titlecase"), e.qZA(), e.TgZ(4, "div", 55), e._uU(5), e.ALo(6, "titlecase"), e.qZA(), e._UZ(7, "app-progress-bar", 56), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(2), e.Oqu(e.lcZ(3, 9, t.currentRankName)), e.xp6(3), e.hij(" ", e.lcZ(6, 11, t.nextRankName), " "), e.xp6(2), e.Q6J("forGameModeCard", !0)("showDivider", !0)("dividerPercentage", t.gameModeRank.safety_line)("percentage", t.gameModeRank.win_points)("height", t.progressBarHeight)("animateFirstValue", !1)("supressAnimation", !0)
            }
        }

        function eg(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 57)(1, "app-flux-progress-box", 58), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openGauntletProgress()
                }), e.ynx(2, 59), e._uU(3, "gauntlet of the gods"), e.BQk(), e.ynx(4, 60), e._uU(5, "gather flux"), e.BQk(), e.qZA()()
            }
        }

        function tg(o, r) {
        }

        function ng(o, r) {
            1 & o && (e.TgZ(0, "div")(1, "div", 61)(2, "picture"), e._UZ(3, "img", 62), e.qZA(), e.TgZ(4, "picture"), e._UZ(5, "img", 63), e.qZA(), e.TgZ(6, "div", 64), e._uU(7, " New players receive "), e.TgZ(8, "strong"), e._uU(9, "3 Core Packs "), e.qZA(), e.TgZ(10, "app-tooltip", 65), e._UZ(11, "gu-icon", 66), e.qZA()()()()), 2 & o && (e.xp6(10), e.Q6J("title", "Core Packs hold <br/> non-blockchain cards that can <br/> be used to expand your decks.")("position", "left"))
        }

        function og(o, r) {
            1 & o && (e.TgZ(0, "gu-paragraph-text", 78), e._uU(1, " Your code must be 3 - 40 characters long. "), e.qZA())
        }

        function ig(o, r) {
        }

        const rg = function (o, r) {
            return {"directChallenge__form__field__input--invalid": o, "directChallenge__form__field__input--valid": r}
        };

        function ag(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "div", 67)(1, "div", 68)(2, "gu-paragraph-text", 69), e._uU(3, " Challenge code "), e.qZA(), e.TgZ(4, "app-tooltip", 70), e._UZ(5, "gu-icon", 71), e.qZA()(), e.TgZ(6, "form", 72)(7, "div", 73), e._UZ(8, "input", 74), e.TgZ(9, "gu-icon", 75), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().toggleVisibility()
                }), e.qZA()(), e.YNc(10, og, 2, 0, "gu-paragraph-text", 76), e.YNc(11, ig, 2, 0, "gu-paragraph-text", 77), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(6), e.Q6J("formGroup", t.formGroup), e.xp6(2), e.Q6J("type", t.challengeCodeVisible ? "text" : "password")("ngClass", e.WLB(6, rg, t.challengeCode.invalid && t.challengeCode.touched, t.challengeCode.valid)), e.xp6(1), e.Q6J("iconLigature", t.challengeCodeVisible ? "action_hidePassword" : "action_showPassword"), e.xp6(1), e.Q6J("ngIf", t.challengeCode.invalid && t.challengeCode.touched), e.xp6(1), e.Q6J("ngIf", !t.challengeCode.invalid || !t.challengeCode.touched)
            }
        }

        function sg(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "a", 80), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openLink("https://playgu.co/weekend-ranked-info")
                }), e._uU(1, " Event: Play to earn packs with Weekend Ranked!\n"), e.qZA()
            }
        }

        function cg(o, r) {
            if (1 & o && e._UZ(0, "app-lock", 81), 2 & o) {
                const t = e.oxw();
                e.Q6J("lock", t.gameMode.lock)
            }
        }

        function lg(o, r) {
            if (1 & o && e._UZ(0, "gu-sealed-mode-card", 82), 2 & o) {
                const t = e.oxw();
                e.Q6J("queueActive", t.queueActive)("gameMode", t.gameMode)("sealedModeStatus", t.sealedModeStatus)
            }
        }

        let qn = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k, A, D, L, E) {
                    this.guGameService = t, this.modalService = n, this.resizeService = i, this.progressionService = a, this.el = s, this.cdr = c, this.fb = d, this.queueService = u, this.akumaService = x, this.audioService = v, this.cerberusModalService = k, this.sealedService = A, this.decksService = D, this.cerberusModal = L, this.environment = E, this.emptyDeckText = "Choose Deck", this.aiEmptyDeck = "Choose AI Deck", this.currentRankName = "", this.currentRankInitials = "", this.nextRankName = "", this.nextRankInitials = "", this.shieldCrackCount = 0, this.challengeCodeVal = "", this.challengeCodeVisible = !0, this.sentChallengeCodeInputAnalytics = !1, this.sealedModeStatus = X.r.AVAILABLE, this.unsubscribe = new M.xQ, this.GuGameModeType = P.tO, this.GuGameModeSubType = P.zy, this.GuGameModeId = P.B_, this.SealedModeStatus = X.r, this.MIN_GAMES_PLAYED = 11, this.AFTER_EVERY_X_GAMES = 5, this.tutorialBullets = ["Gameplay Basics", "How Mana Works", "How to Win"], i.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({vh: de}) => this.progressBarHeight = 2.5 * de)).subscribe()
                }

                get getClass() {
                    return this.gameMode && this.gameMode.id === P.B_.SEALED_DECK
                }

                ngOnInit() {
                    this.buildFormGroup(), this.initTimer(), this.initRanks(), this.watchQueue(), this.gameMode.id === P.B_.SEALED_DECK ? this.watchSealedMode() : (this.updateSelectedDecks(), this.watchForDeckSelection())
                }

                watchSealedMode() {
                    this.sealedService.sealedModeStatus$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.sealedModeStatus = t
                    }), this.sealedService.sealedMode$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.sealedMode = t
                    })
                }

                watchQueue() {
                    this.queueService.getQueue(1, this.gameMode.id).pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
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
                    this.guGameService.gameModes$.pipe((0, p.R)(this.unsubscribe), (0, O.U)(({gameModes: t}) => t.find(n => n.id === this.gameMode.id)), (0, S.h)(t => null !== t), (0, O.U)(t => ({
                        lastSelectedDeckId: t.lastSelectedDeckId,
                        aiSelectedDeckId: t.aiSelectedDeckId
                    })), (0, b.b)(({lastSelectedDeckId: t, aiSelectedDeckId: n}) => {
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
                    this.formGroup = this.fb.group({challengeCode: ["", [T.kI.required, T.kI.minLength(3), T.kI.maxLength(40)]]}), this.challengeCode.valueChanges.subscribe(t => {
                        this.challengeCodeVal = t, this.sentChallengeCodeInputAnalytics || (this.sentChallengeCodeInputAnalytics = !0, this.akumaService.postControlEvent("gu", "Arena", "", "challengeCode", "Txt", "inputted"))
                    })
                }

                initTimer() {
                    this.gameMode && 1 === this.gameMode.rotation && this.gameMode.end_timestamp && (this.refreshDate = new Date(this.gameMode.end_timestamp))
                }

                initRanks() {
                    this.gameMode && this.gameMode.ranked && this.progressionService.userRankLevels$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => t && t.length > 0 && t.some(n => n.game_mode === this.gameMode.id)), (0, O.U)(t => t.find(n => n.game_mode === this.gameMode.id))).subscribe(t => {
                        this.gameModeRank = t, this.setRankLevelLabels(this.gameModeRank, this.isMaxRank), this.setShieldCracking(this.gameModeRank)
                    })
                }

                setRankLevelLabels(t, n) {
                    this.progressionService.gameRanks$.pipe((0, w.q)(1), (0, b.b)(i => {
                        this.isMaxRank = this.progressionService.isMaxRank(this.gameModeRank, i);
                        const a = i[t.rank_level - 1], s = i[t.rank_level];
                        this.currentRankName = a.level_name, this.currentRankInitials = Math.trunc(t.rating).toString(), !this.isMaxRank && s && (this.nextRankName = s.level_name, this.nextRankInitials = s.level_short_name)
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
                    this.selectedDeck = this.allDecks.find(t => t.id === this.gameMode.lastSelectedDeckId), this.gameMode.type === P.tO.SOLO && (this.selectedAIDeck = this.allDecks.find(t => t.id === this.gameMode.aiSelectedDeckId))
                }

                openDeckSelect({forAI: t}) {
                    this.selectDeck(void 0, t)
                }

                selectDeck(t, n = !1) {
                    this.akumaService.postControlEvent("gu", "Arena", "", "addDeck", "Btn", "pressed", {mode_name: this.gameMode.name}), this.gameMode.type === P.tO.SEALED_DECK ? (this.audioService.clickItemV2.play(), this.decksService.selectActiveDeckById(this.sealedMode.deck_id), this.decksService.updateDeckSelectMode(!0, P.B_.SEALED_DECK), this.modalService.createModal(Fn, {}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })) : (this.audioService.transitionWorkshop.play(), this.modalService.createModal(Lt, {
                        gameModeId: this.gameMode.id,
                        gameModeType: this.gameMode.type,
                        forAI: n,
                        modalHosted: !0
                    }, {blurredBackground: !0, canCloseFromOutside: !1, position: h.e1.Center, size: h.Cg.Workarea}))
                }

                getPlayDeck(t) {
                    return !t || t instanceof le.$$ && 30 !== t.items.length ? null : {
                        id: t.id,
                        global: "starter" === t.deck_type
                    }
                }

                openGauntletProgress() {
                    this.akumaService.postControlEvent("gu", "Arena", "", "gatherFlux", "Btn", "pressed"), this.modalService.createModal(Rc, null, {
                        blurredBackground: !0,
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }

                toggleVisibility() {
                    this.challengeCodeVisible = !this.challengeCodeVisible
                }

                learnMore() {
                    switch (this.gameMode.id) {
                        case P.B_.DIRECT_CHALLENGE:
                            return void window.open("https://playgu.co/1v1", "_blank");
                        case P.B_.SEALED_DECK:
                            return void this.openSealedDeckInfoModal()
                    }
                }

                openSealedDeckInfoModal() {
                    this.akumaService.postEvent("Control", "arenaHome_rulesBtn_pressed"), this.audioService.clickItemV2.play(), this.cerberusModalService.open(dl)
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ee.xV), e.Y36(I.Z), e.Y36(K._), e.Y36(j.$z), e.Y36(e.SBq), e.Y36(e.sBO), e.Y36(T.qu), e.Y36(bt.g), e.Y36(_.jt), e.Y36(f.pk), e.Y36(U.Qz), e.Y36(X.H), e.Y36(te.D), e.Y36(U.Qz), e.Y36(f.Ho))
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
                    if (1 & t && (e._UZ(0, "img", 0), e.TgZ(1, "header", 1)(2, "div", 2)(3, "h1", 3), e._uU(4), e.qZA(), e.YNc(5, qd, 3, 2, "gu-vertical-space", 4), e.TgZ(6, "div", 5), e._uU(7), e.qZA(), e.YNc(8, Qd, 3, 1, "gu-vertical-space", 6), e.YNc(9, Rd, 3, 5, "div", 7), e.YNc(10, Hd, 3, 2, "div", 8), e.qZA(), e.YNc(11, Jd, 6, 5, "div", 9), e.qZA(), e.YNc(12, Xd, 7, 10, "div", 10), e.YNc(13, Kd, 8, 13, "div", 11), e.YNc(14, eg, 6, 0, "div", 12), e.YNc(15, tg, 0, 0, "ng-template", null, 13, e.W1O), e.YNc(17, ng, 12, 2, "div", 14), e.YNc(18, ag, 12, 9, "div", 15), e.YNc(19, sg, 2, 0, "a", 16), e.YNc(20, cg, 1, 1, "app-lock", 17), e.YNc(21, lg, 1, 3, "gu-sealed-mode-card", 18)), 2 & t) {
                        const i = e.MAs(16);
                        e.Q6J("src", n.gameMode.image_url, e.LSH), e.xp6(4), e.Oqu(n.gameMode.name), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.SEALED_DECK), e.xp6(2), e.Oqu(n.gameMode.description), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.DIRECT_CHALLENGE || n.gameMode.id === n.GuGameModeId.SEALED_DECK), e.xp6(1), e.Q6J("ngIf", 1 === n.gameMode.rotation && n.refreshDate), e.xp6(1), e.Q6J("ngIf", n.wins > 0 || n.losses > 0), e.xp6(1), e.Q6J("ngIf", n.gameMode.ranked && n.gameModeRank), e.xp6(1), e.Q6J("ngIf", n.gameMode.id !== n.GuGameModeId.SEALED_DECK || n.sealedModeStatus === n.SealedModeStatus.STARTED), e.xp6(1), e.Q6J("ngIf", n.gameMode.ranked && n.gameModeRank && !n.isMaxRank), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.RANKED_CONSTRUCTED)("ngIfElse", i), e.xp6(3), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.TUTORIAL), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.DIRECT_CHALLENGE), e.xp6(1), e.Q6J("ngIf", n.gameMode.properties.sub_type === n.GuGameModeSubType.WEEKEND_EVENT), e.xp6(1), e.Q6J("ngIf", n.gameMode.lock && n.isPrimaryCard), e.xp6(1), e.Q6J("ngIf", n.gameMode.id === n.GuGameModeId.SEALED_DECK)
                    }
                },
                directives: [l.O5, ul, _l, Gn, Yl, l.sg, id, Qe, Kt, Ze.K, T._Y, T.JL, T.sg, T.Fj, T.JJ, T.u, l.mk, Md, Ld],
                pipes: [l.uU, An, l.rS],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif;font-weight:400}.cardHeader__shield__rankInitials[_ngcontent-%COMP%], .cardHeader__shield__rankInitials.cardHeader__shield__rankInitials--maxRank[_ngcontent-%COMP%], .cardHeader__heading[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained, serif;font-weight:700}.subtype__description[_ngcontent-%COMP%],.directChallenge__form__inputHint[_ngcontent-%COMP%],.progressArea__rightRank[_ngcontent-%COMP%],.progressArea__leftRank[_ngcontent-%COMP%],.vsText[_ngcontent-%COMP%],.cardHeader__stats[_ngcontent-%COMP%],.cardHeader__subheading[_ngcontent-%COMP%],.directChallenge__form__field__input[_ngcontent-%COMP%],.cardHeader__timer[_ngcontent-%COMP%]{font-family:Open Sans, sans-serif}.cardHeader__shield__rankInitials.cardHeader__shield__rankInitials--maxRank[_ngcontent-%COMP%],.cardHeader__heading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 3.7);line-height:1.3}.cardHeader__shield__rankInitials[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.5);line-height:1.3}.cardHeader__timer[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.directChallenge__form__inputHint[_ngcontent-%COMP%],.progressArea__rightRank[_ngcontent-%COMP%],.progressArea__leftRank[_ngcontent-%COMP%],.vsText[_ngcontent-%COMP%],.cardHeader__stats[_ngcontent-%COMP%],.cardHeader__subheading[_ngcontent-%COMP%],.directChallenge__form__field__input[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.directChallenge__form__field__input[_ngcontent-%COMP%]{line-height:1.4}.subtype__description[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.11)}[_nghost-%COMP%]{border-radius:calc(var(--vw) * .45);overflow:hidden;display:flex;flex-direction:column;justify-content:flex-start;height:100%;position:relative;padding:calc(var(--vh) * 2.22) calc(var(--vw) * 1.09);background:var(--gu-blue-dark);}[_nghost-%COMP%]:after {content:"";border-radius:calc(var(--vw) * .45);position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;user-select:none;z-index:1}.darkBackground[_nghost-%COMP%] .backgroundImagery[_ngcontent-%COMP%]{opacity:.08;}.backgroundImagery[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:.85;}.cardHeader[_ngcontent-%COMP%]{display:flex;position:relative}.cardHeader[_ngcontent-%COMP%] .columnLeft[_ngcontent-%COMP%]{min-height:calc(var(--vh) * 11.55);flex:1}.cardHeader__heading[_ngcontent-%COMP%]{text-transform:uppercase;line-height:.95;background:linear-gradient(to bottom, #fff2d8 0%, #ebc98b 50%, #c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:calc(var(--vh) * 1)}.cardHeader__subheading[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .05);color:#f6f6f6}.cardHeader__subheading--sealed[_ngcontent-%COMP%]{color:#7192b0}.cardHeader__subheading--link[_ngcontent-%COMP%]{text-transform:capitalize;text-decoration:underline;cursor:pointer}.cardHeader__timer[_ngcontent-%COMP%]{color:#7192b0}.cardHeader__winsAndLosses[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2);display:flex}.cardHeader__winsAndLosses__losses[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .4);margin-left:calc(var(--vh) * 1.6);padding-left:calc(var(--vh) * 1.6);position:relative}.cardHeader__winsAndLosses__losses[_ngcontent-%COMP%]:before {height:calc(var(--vh) * 1.4);top:0;left:0;width:calc(var(--vh) * .15);content:"";position:absolute;background:#7192b0}.cardHeader__winsAndLosses__losses[_ngcontent-%COMP%] .lossSummary {margin-top:calc(var(--vh) * .7)}.cardHeader__stats[_ngcontent-%COMP%]{color:#fff9}.cardHeader__shield[_ngcontent-%COMP%]{width:calc(var(--vw) * 5);margin-right:calc(var(--vw) * .2);position:relative;align-self:flex-start}.cardHeader__shield__image[_ngcontent-%COMP%]{width:100%;display:block;filter:drop-shadow(0 calc(var(--vh) * .1) calc(var(--vh) * 3.24) rgba(252, 247, 212, .3))}.cardHeader__shield__rankInitials[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%, -60%);text-transform:uppercase;color:#f6f6f6}.cardHeader__shield__rankInitials.cardHeader__shield__rankInitials--maxRank[_ngcontent-%COMP%]{transform:translate(-50%, -68%)}.modeActionsArea[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 3);padding-right:calc(var(--vw) * .9);display:flex;justify-content:space-between;align-items:flex-start}.cardHeader__subtypeRibbon[_ngcontent-%COMP%]{position:relative;z-index:1;margin-bottom:calc(var(--vh) * .5)}.cardHeader__subtypeRibbon__image[_ngcontent-%COMP%]{position:absolute;width:calc(var(--vw) * 6.5)}.cardHeader__subtypeRibbon__label[_ngcontent-%COMP%]{position:absolute;right:calc(var(--vw) * -.4);top:3px;font-size:calc(var(--vw) * .6);color:#fff;font-weight:700}.cardHeader__subtypeRibbon__live[_ngcontent-%COMP%]{width:calc(var(--vw) * .2);height:calc(var(--vw) * .2);background-color:#fff;border-radius:50%;top:calc(var(--vw) * .5);left:calc(var(--vw) * .3);position:relative}.cardHeader__subtypeRibbon__live[_ngcontent-%COMP%]:after {content:"";display:block;width:calc(var(--vw) * .2);height:calc(var(--vw) * .2);background-color:#fff;animation:ping .8s ease-in-out infinite both;position:absolute;border-radius:50%}@keyframes ping {0% {transform:scale(1);opacity:1}80% {transform:scale(2.6);opacity:.3}to {transform:scale(3.2);opacity:0}}.gameCardDecks[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:space-between;width:calc(var(--vw) * 6.5);margin-top:calc(var(--vh) * -1)}.gameCardDecks__deck[_ngcontent-%COMP%] .emptyDeckContainer {margin-top:calc(var(--vh) * 1)}.gameCardDecks__deck[_ngcontent-%COMP%] .emptyDeckContainer .emptyDeckContainer__inner:before {margin-bottom:calc(var(--vh) * .5);font-size:calc(var(--vh) * 2);font-family:gu-cons;font-feature-settings:"liga" 1, normal;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;vertical-align:middle;letter-spacing:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"add_item";line-height:1;display:block;color:inherit}.modeActionsArea__ctas[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.5);display:flex;flex-flow:column nowrap;align-items:center}.modeActionsArea__ctas.hidden[_ngcontent-%COMP%]{opacity:0;user-select:none;pointer-events:none}.modeActionsArea__ctas--noMargin[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * -.5)}.vsText[_ngcontent-%COMP%]{line-height:.9;margin:auto;margin-top:calc(var(--vh) * .9);margin-bottom:calc(var(--vh) * .9);font-weight:600;color:#f6f6f6}.progressArea[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 3);padding-left:calc(var(--vw) * .9);padding-right:calc(var(--vw) * .9);display:flex;flex-flow:row wrap;align-items:flex-end;color:#f6f6f6;position:relative}.progressArea__leftRank[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .15);font-weight:700}.progressArea__rightRank[_ngcontent-%COMP%]{padding-right:calc(var(--vw) * .15);color:#FBC02D;margin-left:auto;font-weight:bold;}.progressArea__bar[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .4);width:100%}.progress-title[_ngcontent-%COMP%]{height:calc(var(--vh) * .92)}.tempLockedConsumablePlaceholder[_ngcontent-%COMP%]{margin-left:calc(var(--vw) * -.5);position:relative;border:calc(var(--vh) * .25) dashed rgba(224, 197, 143, .3);background-color:#58411326;border-radius:calc(var(--vh) * .4);display:flex}.tempLockedConsumablePlaceholder__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4);color:#e0c58f4d;line-height:1;margin:auto}.tempQuestsPlaceholder[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .75);padding-right:calc(var(--vw) * .75);display:flex;justify-content:space-between;margin-top:auto;position:relative}.tempQuestsPlaceholder__quest[_ngcontent-%COMP%]{width:calc(var(--vw) * 4.79);height:calc(var(--vw) * 4.79);border-radius:50%;border:calc(var(--vh) * .25) dashed rgba(224, 197, 143, .3);background-color:#58411326;display:flex}.tempQuestsPlaceholder__quest__icon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 3);color:#e0c58f4d;line-height:1;margin:auto}.subtype__description[_ngcontent-%COMP%]{cursor:pointer;border-width:2px;border-style:solid;border-image-source:linear-gradient(to bottom, #fffdf0 0%, #fbebc1 14%, #e6c675 26%, #f6df6e 41%, #b27e18 59%, #deab61 73%, #a67b4b 85%, #664320 100%);border-image-slice:1;text-align:center;margin:calc(var(--vh) * 1) auto 0;padding:calc(var(--vh) * 1) 0;width:90%;color:#fff;background-color:#182531;font-weight:700;position:relative}.subtype__description__readModeLink[_ngcontent-%COMP%]{background:linear-gradient(to bottom, #fff2d8 0%, #ebc98b 50%, #c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;cursor:pointer}.loadout[_ngcontent-%COMP%]{height:calc(var(--vh) * 14);width:calc(var(--vw) * 5.4)}.fluxProgress[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .75);padding-right:calc(var(--vw) * .75);height:calc(var(--vh) * 14);display:flex;margin-top:auto;position:relative;cursor:pointer}.fluxProgress[_ngcontent-%COMP%] app-flux-progress-box[_ngcontent-%COMP%]{padding-left:calc(var(--vh) * 4);padding-right:calc(var(--vh) * 4)}.directChallenge[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:32px;position:relative}.directChallenge__heading[_ngcontent-%COMP%]{display:flex}.directChallenge__heading__icon[_ngcontent-%COMP%]{margin-left:8px;cursor:pointer;display:flex;text-align:center}.directChallenge__form[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-self:center;width:100%}.directChallenge__form__field[_ngcontent-%COMP%]{display:flex;align-items:center;margin:8px 0}.directChallenge__form__field__input[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4);margin-top:0;width:100%;padding-right:20px;font-size:16px}.directChallenge__form__field__input[_ngcontent-%COMP%]::-webkit-input-placeholder {color:#fff}.directChallenge__form__field__input[_ngcontent-%COMP%]:disabled {border-color:#979797;color:#979797}.directChallenge__form__field__input--invalid[_ngcontent-%COMP%]{border-color:#ff8b01}.directChallenge__form__field__input--valid[_ngcontent-%COMP%]{border-color:#8be1e0}.directChallenge__form__field__icon[_ngcontent-%COMP%]{position:absolute;right:12px;cursor:pointer}.directChallenge__form__inputHint[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .6);text-shadow:0 1px 1px rgba(0, 0, 0, .3)}.sealedModeCard[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2.5)}.tutorialCard__bulletPoints[_ngcontent-%COMP%]{margin:10px;z-index:1}.bullet[_ngcontent-%COMP%]{padding:4px;border-radius:2px;display:flex;transform:rotate(-45deg);margin-right:10px}.tutorialCard__bulletPoint[_ngcontent-%COMP%]{display:flex;align-items:center;margin:10px 0}.tutorial__freeStuff[_ngcontent-%COMP%]{position:relative}.tutorial__freeStuff__bgImage[_ngcontent-%COMP%]{width:100%;display:block;margin-top:35px}.tutorial__freeStuff__cardImage[_ngcontent-%COMP%]{position:absolute;top:-3vh;left:0px;height:6vw}.tutorial__freeStuff__text[_ngcontent-%COMP%]{position:absolute;top:40%;left:20%}.tutorial__freeStuff__tooltip[_ngcontent-%COMP%]{display:inline;text-align:center}']
            }), o
        })();
        const dg = ["otherModesContainer"];

        function gg(o, r) {
            if (1 & o && e._UZ(0, "app-game-mode-card", 4, 5), 2 & o) {
                const t = e.oxw();
                e.Q6J("gameMode", t.gameModes[0])("allDecks", t.allDecks)("isPrimaryCard", !0)("accountProperties", t.accountProperties)
            }
        }

        function ug(o, r) {
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

        function pg(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, ug, 1, 8, "app-game-mode-card", 6), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", t.otherCompModes)
            }
        }

        const _g = function (o) {
            return {otherModes__disable: o}
        };
        let hg = (() => {
            class o {
                constructor(t, n, i, a, s, c) {
                    this.resizeService = t, this.guGameService = n, this.akumaService = i, this.audioService = a, this.authService = s, this.userService = c, this.maxZIndexValue = 9, this.unsubscribe = new M.xQ, this.userWallets = [], t.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({vw: d}) => this.vw = 2.5 * d)).subscribe()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngOnInit() {
                    this.createCompOtherModes(this.gameModes.slice(1)), this.initAccountProperties()
                }

                ngAfterViewInit() {
                    this.resizeService.windowSize$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(() => {
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
                    this.authService.account$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        0 === (null == t ? void 0 : t.addresses.length) && this.userService.fetchExtendedAccount()
                    }), this.userService.extendedAccountProperties$.pipe((0, p.R)(this.unsubscribe)).subscribe(t => {
                        this.accountProperties = t
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(ee.xV), e.Y36(_.jt), e.Y36(f.pk), e.Y36(f.mI), e.Y36(ce.MZ))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-game-mode-switcher"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(qn, 5, e.SBq), e.Gf(dg, 5)), 2 & t) {
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
                    1 & t && (e.YNc(0, gg, 2, 4, "app-game-mode-card", 0), e.TgZ(1, "div", 1, 2), e.YNc(3, pg, 2, 1, "ng-container", 3), e.qZA()), 2 & t && (e.Q6J("ngIf", n.gameModes[0]), e.xp6(1), e.Q6J("ngClass", e.VKq(3, _g, n.gameModes[0].lock)), e.xp6(2), e.Q6J("ngIf", n.otherCompModes))
                },
                directives: [l.O5, qn, l.mk, l.sg],
                styles: ['[_nghost-%COMP%]{display:flex}.primaryMode[_ngcontent-%COMP%]{width:calc(var(--vw) * 26.56);z-index:10}.otherModes[_ngcontent-%COMP%]{flex:1;margin-left:calc(var(--vw) * 1.7);position:relative}.otherModes__disable[_ngcontent-%COMP%]{pointer-events:none;opacity:.6}.otherModes__mode[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:calc(var(--vw) * 26.56)}.otherModes__mode[_ngcontent-%COMP%]:not([data-stack-order-index="0"]) {cursor:pointer}.otherModes__mode[_ngcontent-%COMP%]:not([data-stack-order-index="0"]) .modeActionsArea {user-select:none;pointer-events:none}.otherModes__mode[_ngcontent-%COMP%]:not([data-stack-order-index="0"]):hover .backgroundImagery {opacity:.6;}.otherModes__mode[_ngcontent-%COMP%]:not([data-stack-order-index="0"]):hover.darkBackground .backgroundImagery {opacity:.25;}']
            }), o
        })();
        var Je = (() => {
            return (o = Je || (Je = {})).standardPlayer = "standardPlayer", o.streamer = "streamer", Je;
            var o
        })();

        class mg {
            constructor(r, t, n, i, a, s, c) {
                this.title = r, this.description = t, this.imageURL = n, this.linkURL = i, this.startTimestamp = Date.parse(a), this.endTimestamp = Date.parse(s), this.priority = c
            }
        }

        let Qn = (() => {
            class o {
                constructor(t) {
                    this.gameApi = t, this.dataStore = {newsItems: []}, this._newsItems$ = new H.X(null), this.loadData()
                }

                get newsItems$() {
                    return this._newsItems$.asObservable()
                }

                getStreamerArticles() {
                    return (0, oe.of)([{
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
                    this.gameApi.get("/news").pipe((0, O.U)(t => this.convertToNewsItems(t)), (0, b.b)(t => {
                        this.dataStore.newsItems = t, this._newsItems$.next(this.dataStore.newsItems)
                    })).subscribe()
                }

                convertToNewsItems(t) {
                    return t.map(n => new mg(n.title, n.description, n.image_url, n.link_url, n.start_timestamp, n.end_timestamp, n.priority))
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(_.Ft))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();

        function fg(o, r) {
            1 & o && (e.TgZ(0, "figure", 2), e._UZ(1, "img", 3), e.TgZ(2, "figcaption", 4)(3, "h6", 5), e._uU(4, "Marketplace Overlay"), e.qZA(), e.TgZ(5, "div", 6), e._uU(6, " Want to sell your content in your stream? "), e.qZA()(), e.TgZ(7, "gu-primary-hex-button", 7), e._uU(8, "MORE"), e.qZA()())
        }

        function Cg(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "figure", 2), e._UZ(1, "img", 8), e.TgZ(2, "figcaption", 4)(3, "h6", 5), e._uU(4), e.qZA(), e.TgZ(5, "div", 6), e._uU(6), e.qZA()(), e.TgZ(7, "gu-primary-hex-button", 9), e.NdJ("click", function () {
                    e.CHM(t);
                    const i = e.oxw().$implicit;
                    return e.oxw().gotoNewsItem(i)
                }), e._uU(8, " MORE "), e.qZA()()
            }
            if (2 & o) {
                const t = e.oxw().$implicit;
                e.xp6(1), e.Q6J("src", t.imageURL, e.LSH), e.xp6(3), e.Oqu(t.title), e.xp6(2), e.hij(" ", t.description, " ")
            }
        }

        function vg(o, r) {
            if (1 & o && (e.ynx(0), e.YNc(1, Cg, 9, 3, "figure", 0), e.BQk()), 2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.Q6J("ngIf", n.canDisplay(t))
            }
        }

        let bg = (() => {
            class o {
                constructor(t) {
                    this.akumaService = t
                }

                ngOnInit() {
                }

                isUserStreamer() {
                    return this.userType === Je.streamer
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
                consts: [["class", "newsItem", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "newsItem"], ["src", "https://images.godsunchained.com/marketing/Hyperion-1024x533.jpeg", 1, "newsItem__image"], [1, "newsItem__caption"], [1, "newsItem__caption__heading"], [1, "newsItem__caption__subHeading"], ["type", "secondary", 1, "newsItem__linkButton"], [1, "newsItem__image", 3, "src"], ["type", "primary", "size", "small", 1, "newsItem__linkButton", 3, "click"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, fg, 9, 0, "figure", 0), e.YNc(1, vg, 2, 1, "ng-container", 1)), 2 & t && (e.Q6J("ngIf", (null == n.newsItems ? null : n.newsItems.length) > 0 && n.isUserStreamer()), e.xp6(1), e.Q6J("ngForOf", n.newsItems))
                },
                directives: [l.O5, l.sg],
                styles: ['h1[_ngcontent-%COMP%],h2[_ngcontent-%COMP%],h3[_ngcontent-%COMP%],h4[_ngcontent-%COMP%],h5[_ngcontent-%COMP%],h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%],label[_ngcontent-%COMP%],a[_ngcontent-%COMP%],div[_ngcontent-%COMP%],input[_ngcontent-%COMP%],button[_ngcontent-%COMP%],p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.newsItem__caption__heading[_ngcontent-%COMP%],h1[_ngcontent-%COMP%],h2[_ngcontent-%COMP%],h3[_ngcontent-%COMP%],h4[_ngcontent-%COMP%],h5[_ngcontent-%COMP%],h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.newsItem__caption__subHeading[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.newsItem__caption__heading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.8);line-height:1.4}.newsItem__caption__subHeading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.6)}[_nghost-%COMP%]{padding-left:calc(var(--vw) * 1);padding-right:calc(var(--vw) * 1.5);display:flex;flex-flow:column nowrap;justify-content:flex-start;height:100%;overflow-y:auto}.newsItem[_ngcontent-%COMP%]{margin:0;border-radius:4px;overflow:hidden;margin-left:calc(var(--vw) * -1);margin-right:calc(var(--vw) * -1);height:calc(var(--vh) * 23);margin-bottom:8px;flex:0 0 auto;position:relative;background:var(--gu-blue-dark);}.newsItem[_ngcontent-%COMP%]:after {content:"";position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;user-select:none;z-index:1}.newsItem[_ngcontent-%COMP%]:hover .newsItem__image[_ngcontent-%COMP%]{opacity:.7}.newsItem__image[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * -1);margin-bottom:calc(var(--vh) * -1);width:100%;height:calc(100% + var(--vh) * 2);display:block;object-fit:cover;object-position:center;opacity:.35;transition:opacity .15s ease-in-out;z-index:0}.newsItem__caption[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);line-height:1;left:calc(var(--vw) * 1.77);z-index:2}.newsItem__cardpacks[_ngcontent-%COMP%]{position:absolute;top:calc(var(--vh) * 13)}.newsItem__cardpacks[_ngcontent-%COMP%] img[_ngcontent-%COMP%]{width:calc(var(--vw) * 6);margin-left:calc(var(--vw) * 1)}.newsItem__cardpacks[_ngcontent-%COMP%] img.godpack[_ngcontent-%COMP%]{width:calc(var(--vw) * 4)}.newsItem__caption__heading[_ngcontent-%COMP%]{color:var(--gu-gray);}.newsItem__caption__subHeading[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .05);color:var(--gu-gray);}.newsItem__linkButton[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);min-width:calc(var(--vw) * 7.2);position:absolute;right:calc(var(--vw) * 1.77);cursor:pointer;z-index:2}']
            }), o
        })(), Rn = (() => {
            class o {
                constructor(t) {
                    this.contentService = t, this.source = "default", this.userType = Je.standardPlayer, this.unsubscribe = new M.xQ
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                ngOnInit() {
                    // this.contentService.newsItems$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => null !== t), (0, b.b)(t => {
                    //     this.newsItems = this.sortNews(t)
                    // })).subscribe()
                }

                sortNews(t) {
                    return t.sort((n, i) => {
                        let a = n.priority - i.priority;
                        return 0 === a && (a = (n.startTimestamp ? n.startTimestamp : 0) - (i.startTimestamp ? i.startTimestamp : 0)), a
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(Qn))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-news-provider"]],
                inputs: {source: "source", userType: "userType"},
                decls: 1,
                vars: 2,
                consts: [[3, "userType", "newsItems"]],
                template: function (t, n) {
                    // 1 & t && e._UZ(0, "app-news-list", 0), 2 & t && e.Q6J("userType", n.userType)("newsItems", n.newsItems)
                },
                directives: [bg],
                styles: ["[_nghost-%COMP%]{display:block}"]
            }), o
        })();
        const xg = ["refreshSection"], wg = function (o) {
            return {"gameModes--refreshing": o}
        };

        function Mg(o, r) {
            if (1 & o && e._UZ(0, "app-game-mode-switcher", 7), 2 & o) {
                const t = e.oxw(2);
                e.Q6J("gameModes", t.allGameModes)("allDecks", t.allDecks)("ngClass", e.VKq(3, wg, t.fadeGameModeSwitcher))
            }
        }

        function yg(o, r) {
            if (1 & o && (e.ynx(0), e.TgZ(1, "div", 1), e._UZ(2, "app-player-stats", 2), e.YNc(3, Mg, 1, 5, "app-game-mode-switcher", 3), e.qZA(), e.TgZ(4, "h2", 4, 5), e._uU(6), e.qZA(), e._UZ(7, "app-news-provider", 6), e.BQk()), 2 & o) {
                const t = e.oxw();
                e.xp6(3), e.Q6J("ngIf", t.allGameModes && !!t.allGameModes.length), e.xp6(1), e.Q6J("hidden", !t.refreshing), e.xp6(2), e.hij(" ", t.refreshMsg, " ")
            }
        }

        let kg = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u, x, v, k) {
                    this.gameService = t, this.decksService = n, this.guUserService = i, this.progressionService = a, this.modalService = s, this.sealedService = c, this.cerberusModalService = d, this.cardsService = u, this.packService = x, this.loadoutService = v, this.storageService = k, this.unsubscribe = new M.xQ, this.loaded = !1, this.refreshing = !1, this.refreshMsg = "REFRESHING...", this.fadeGameModeSwitcher = !1, this.fetchDecks()
                }

                notifyUser() {
                    this.storageService.get(["_USER_NOTIFIED"]) || this.cerberusModalService.open(vc, {centered: !0})
                }

                ngOnInit() {
                    this.fetchGameModes(), this.initUserDetails(), this.progressionService.fetchUserRankLevel(), this.watchSealedEnded()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                watchSealedEnded() {
                    this.sealedService.sealedModeStatus$.pipe((0, p.R)(this.unsubscribe), (0, S.h)(t => t === X.r.ENDED), (0, ve.VS)(t => this.sealedService.sealedMode$), (0, ve.VS)(t => this.sealedService.claimRewards$(t.sealed_id))).subscribe(t => {
                        this.cardsService.fetchInventory(), this.packService.fetchUnopenedPacks(), this.loadoutService.fetchData(), this.modalService.createModal(Pn, {rewards: t}, {
                            blurredBackground: !0,
                            canCloseFromOutside: !1,
                            position: h.e1.Center,
                            size: h.Cg.Fullscreen
                        }), this.sealedService.fetchSealed()
                    })
                }

                fetchGameModes() {
                    this.gameService.gameModes$.pipe((0, p.R)(this.unsubscribe)).subscribe(({
                                                                                                gameModes: t,
                                                                                                refresh: n
                                                                                            }) => {
                        n && !this.refreshing ? this.showRefreshAnimation(t) : this.orderGameModes(t)
                    })
                }

                orderGameModes(t) {
                    t.sort(gameModeSort);
                    this.allGameModes = t;
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
                    (0, Z.aj)([this.decksService.userDecks$, this.decksService.starterDecks$]).pipe((0, p.R)(this.unsubscribe), (0, b.b)(([t, n]) => {
                        this.userDecks = t, this.starterDecks = n, this.allDecks = [...t, ...n]
                    })).subscribe()
                }

                reOrderDecks(t) {
                    if (1 === t) {
                        const n = this.allGameModes.splice(t, 1)[0];
                        this.allGameModes.push(n)
                    }
                }

                initUserDetails() {
                    (0, Z.aj)([this.guUserService.extendedAccountProperties$, this.progressionService.accountThresholds$]).pipe((0, p.R)(this.unsubscribe), (0, S.h)(([t, n]) => !!t && !!n.length)).subscribe(([t, n]) => {
                        this.user = t, this.loaded = !0, this.xpProgress = et({xp: t.total_xp, levelThresholds: n})
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ee.xV), e.Y36(te.D), e.Y36(ce.MZ), e.Y36(j.$z), e.Y36(I.Z), e.Y36(X.H), e.Y36(U.Qz), e.Y36(_.dK), e.Y36(Oe.F), e.Y36(we), e.Y36(f.qy))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-game-modes"]],
                viewQuery: function (t, n) {
                    if (1 & t && e.Gf(xg, 7), 2 & t) {
                        let i;
                        e.iGM(i = e.CRH()) && (n.refreshSection = i.first)
                    }
                },
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], [1, "columnLeft"], [1, "playerStats"], ["class", "gameModes", 3, "gameModes", "allDecks", "ngClass", 4, "ngIf"], [1, "refreshSection", 3, "hidden"], ["refreshSection", ""], [1, "columnRight"], [1, "gameModes", 3, "gameModes", "allDecks", "ngClass"]],
                template: function (t, n) {
                    1 & t && e.YNc(0, yg, 8, 3, "ng-container", 0), 2 & t && e.Q6J("ngIf", n.loaded)
                },
                directives: [l.O5, Tn, hg, l.mk, Rn],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.refreshSection[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.refreshSection[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{height:calc(calc(var(--vh) * 100) - 28px - 80px);display:flex;justify-content:space-between;padding:calc(var(--vh) * 2) calc(var(--vw) * 3) 0}.columnLeft[_ngcontent-%COMP%]{width:calc(var(--vw) * 62.5)}.columnRight[_ngcontent-%COMP%]{width:calc(var(--vw) * 28)}.playerStats[_ngcontent-%COMP%]{height:calc(var(--vh) * 23)}.gameModes[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2.5);height:calc(var(--vh) * 55);transition:all .25s ease-in}.gameModes--refreshing[_ngcontent-%COMP%]{opacity:.5;filter:brightness(.5);user-select:none;pointer-events:none}.refreshSection[_ngcontent-%COMP%]{opacity:0;position:absolute;left:calc(var(--vw) * 28.5);top:calc(var(--vh) * 60)}.demo[_ngcontent-%COMP%]{width:100%;overflow:auto;margin-bottom:calc(var(--vh) * 5)}.cardsListing--eight[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(8,1fr);align-items:start;grid-auto-rows:min-content}.cardsListing--four[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(4,1fr);align-items:start;grid-auto-rows:min-content}.cardsListing--ten[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(10,1fr);align-items:start;grid-auto-rows:min-content}.cardsListing--five[_ngcontent-%COMP%]{grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(5,1fr);align-items:start;grid-auto-rows:min-content}.cardsListing--moo[_ngcontent-%COMP%]{width:20vw}"]
            }), o
        })();

        function Og(o, r) {
            1 & o && (e.TgZ(0, "div", 3), e._UZ(1, "app-rectangular-spinner", 4), e.qZA())
        }

        function Pg(o, r) {
            if (1 & o && e._UZ(0, "app-cards-list", 5), 2 & o) {
                const t = e.oxw();
                e.Q6J("protoCards", t.protoCards)("inventoryCards", t.inventoryCards)("title", "Cards")("sound", !1)
            }
        }

        let Sg = (() => {
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
                    (0, Z.aj)([this.cardsService.inventoryCards$, this.cardsService.protoCards$]).pipe((0, p.R)(this.unsubscribe), (0, b.b)(([t, n]) => {
                        this.inventoryCards = t, this.protoCards = Array.from(n.values())
                    })).subscribe()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(_.dK), e.Y36(I.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-my-cards"]],
                decls: 3,
                vars: 3,
                consts: [[3, "closeButtonClickFn"], ["class", "loadingContainer", 4, "ngIf"], ["class", "card-selection", 3, "protoCards", "inventoryCards", "title", "sound", 4, "ngIf"], [1, "loadingContainer"], [1, "loadingContainer__spinner"], [1, "card-selection", 3, "protoCards", "inventoryCards", "title", "sound"]],
                template: function (t, n) {
                    1 & t && (e._UZ(0, "app-modal-sidebar", 0), e.YNc(1, Og, 2, 0, "div", 1), e.YNc(2, Pg, 1, 4, "app-cards-list", 2)), 2 & t && (e.Q6J("closeButtonClickFn", n.close), e.xp6(1), e.Q6J("ngIf", !n.protoCards.length), e.xp6(1), e.Q6J("ngIf", n.protoCards.length))
                },
                directives: [ye, l.O5, it, Tt],
                styles: ["[_nghost-%COMP%]{display:block;height:100%;padding:0 calc(var(--vw) * 4.16);height:calc(calc(var(--vh) * 100) - 28px - 80px);padding-top:calc(var(--vh) * 4)}[_nghost-%COMP%]     app-filter-sort-bar.sectionHeader__filterArea{right:0}.loadingContainer[_ngcontent-%COMP%]{display:flex;height:100%}.loadingContainer__spinner[_ngcontent-%COMP%]{margin:auto}"]
            }), o
        })();

        function Tg(o, r) {
            1 & o && e._UZ(0, "app-rectangular-spinner", 2)
        }

        function Ig(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.TgZ(0, "app-card2", 22), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw(2).playHoverItem()
                }), e.qZA()
            }
            if (2 & o) {
                const t = r.$implicit, n = r.index;
                e.Q6J("protoId", t.proto)("quality", t.quality)("columnsCount", 5)("cardIndex", n)
            }
        }

        function Ag(o, r) {
            1 & o && (e.TgZ(0, "div", 17), e._UZ(1, "img", 23), e.TgZ(2, "h1", 11), e._uU(3, "Icons"), e.qZA(), e.TgZ(4, "gu-primary-hex-button", 19), e._uU(5, "COMING SOON"), e.qZA()())
        }

        const Fg = function (o) {
            return {label: "Total", icon: "game_wins", value: o}
        }, Zg = function (o) {
            return [o]
        };

        function Dg(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "section", 3)(2, "div", 4), e._UZ(3, "app-player-stats", 5), e.qZA(), e.TgZ(4, "div", 6)(5, "div", 7), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openInventoryCardsModal()
                }), e._UZ(6, "img", 8), e.TgZ(7, "div", 9), e.YNc(8, Ig, 1, 4, "app-card2", 10), e.qZA(), e.TgZ(9, "h1", 11), e._uU(10, "Cards"), e.qZA(), e.TgZ(11, "gu-primary-hex-button", 12), e._uU(12, "MORE CARDS"), e.qZA()(), e.TgZ(13, "div", 13), e._UZ(14, "img", 14), e.TgZ(15, "h1", 11), e._uU(16, "Boards"), e.qZA(), e.TgZ(17, "gu-primary-hex-button", 15), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openMyBoardsModal()
                }), e._uU(18, "MORE BOARDS"), e.qZA()(), e.TgZ(19, "div", 13), e._UZ(20, "img", 16), e.TgZ(21, "h1", 11), e._uU(22, "Trinkets"), e.qZA(), e.TgZ(23, "gu-primary-hex-button", 15), e.NdJ("click", function () {
                    return e.CHM(t), e.oxw().openMyBoardsModal()
                }), e._uU(24, "MORE TRINKETS"), e.qZA()(), e.TgZ(25, "div", 17), e._UZ(26, "img", 18), e.TgZ(27, "h1", 11), e._uU(28, "Emotes"), e.qZA(), e.TgZ(29, "gu-primary-hex-button", 19), e._uU(30, " COMING SOON"), e.qZA()(), e.YNc(31, Ag, 6, 0, "div", 20), e.qZA()(), e._UZ(32, "app-news-provider", 21), e.BQk()
            }
            if (2 & o) {
                const t = e.oxw();
                e.xp6(3), e.MGl("leftLabel", "Collection Level ", t.userCollectionLevel, "")("rightLabel", "Level ", t.userCollectionLevel + 1, ""), e.Q6J("progressPercent", t.collectionProgress)("statDisplays", e.VKq(8, Zg, e.VKq(6, Fg, t.user.won_matches))), e.xp6(5), e.Q6J("ngForOf", t.topCards), e.xp6(23), e.Q6J("ngIf", !1)
            }
        }

        let Gg = (() => {
            class o {
                constructor(t, n, i, a, s, c, d) {
                    this.guUserService = t, this.authService = n, this.progressionService = i, this.cardsService = a, this.utils = s, this.modalService = c, this.audioService = d, this.showProgressBar = !1, this.loading = !1, this.accountLoaded = !1, this.topCards = [], this.unsubscribe = new M.xQ, this.inGame = !1, this.collectionProgress = 50, this.userCollectionLevel = 1
                }

                ngOnInit() {
                    this.getUserDetails(), this.getCardsData()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                getUserDetails() {
                    (0, Z.aj)([this.guUserService.extendedAccountProperties$, this.authService.account$, this.progressionService.accountThresholds$]).pipe((0, p.R)(this.unsubscribe), (0, S.h)(([t, n, i]) => !!t && !!n), (0, b.b)(([t, n, i]) => {
                        this.user = t, this.account = n, this.accountLoaded = !0, this.percentage = this.progressionService.calcPercentage(new j.oW(t.total_xp, t.xp_to_next, t.level), i)
                    })).subscribe()
                }

                getCardsData() {
                    (0, Z.aj)([this.cardsService.qualityCounts$, this.cardsService.inventoryCards$]).pipe((0, p.R)(this.unsubscribe), (0, b.b)(() => this.cardsService.setNewInventoryCardCount(0)), (0, S.h)(([t, n]) => t.size > 0 && n.length > 0)).subscribe(([t, n]) => {
                        this.calcTopCards(t, n)
                    })
                }

                openInventoryCardsModal() {
                    this.audioService.transitionWorkshop.play(), this.modalService.createModal(Sg, {modalHosted: !0}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }

                playHoverItem() {
                    this.audioService.hoverItem.play()
                }

                calcTopCards(t, n) {
                    this.topCards = this.utils.calcTopCards(t, n, 5)
                }

                openMyBoardsModal() {
                    this.audioService.transitionWorkshop.play(), this.modalService.createModal(Un, {modalHosted: !0}, {
                        blurredBackground: !0,
                        canCloseFromOutside: !0,
                        position: h.e1.Center,
                        size: h.Cg.Workarea
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(ce.MZ), e.Y36(f.mI), e.Y36(j.$z), e.Y36(_.dK), e.Y36(De.F), e.Y36(I.Z), e.Y36(f.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-inventory"]],
                inputs: {showProgressBar: "showProgressBar"},
                decls: 2,
                vars: 2,
                consts: [["class", "loadingSpinner", 4, "ngIf"], [4, "ngIf"], [1, "loadingSpinner"], [1, "mainContentColumn"], [1, "mainContentColumn__playerRow"], [1, "mainContentColumn__playerRow__playerStats", 3, "leftLabel", "rightLabel", "progressPercent", "statDisplays"], [1, "mainContentColumn__possessionGroups"], [1, "possessionGroup", 3, "click"], ["src", "/gu-assets/images/art/sorcerer-breaking-chains.webp", "alt", "", 1, "possessionGroup__background"], [1, "possessionGroup__items"], ["class", "possessionGroup__items__item", "appSingleCardHoverFX", "", 3, "protoId", "quality", "columnsCount", "cardIndex", "click", 4, "ngFor", "ngForOf"], [1, "possessionGroup__title"], ["type", "primary", "size", "small", "data-test-id", "moreCardsButton", 1, "possessionGroup__cta"], [1, "possessionGroup"], ["src", "/gu-assets/images/art/game-setting-outside-temple.webp", "alt", "", 1, "possessionGroup__background"], ["type", "primary", "size", "small", 1, "possessionGroup__cta", 3, "click"], ["src", "/gu-assets/images/art/crypto-kitties-vs-gods-unchained.webp", "alt", "", 1, "possessionGroup__background"], [1, "possessionGroup", "possessionGroup--disabled"], ["src", "/gu-assets/images/art/agrodor-protector.webp", "alt", "", 1, "possessionGroup__background"], ["type", "primary", "size", "small", 1, "possessionGroup__cta"], ["class", "possessionGroup possessionGroup--disabled", 4, "ngIf"], [1, "newsListingColumn"], ["appSingleCardHoverFX", "", 1, "possessionGroup__items__item", 3, "protoId", "quality", "columnsCount", "cardIndex", "click"], ["src", "/gu-assets/images/art/rune-djinn.webp", "alt", "", 1, "possessionGroup__background"]],
                template: function (t, n) {
                    1 & t && (e.YNc(0, Tg, 1, 0, "app-rectangular-spinner", 0), e.YNc(1, Dg, 33, 10, "ng-container", 1)), 2 & t && (e.Q6J("ngIf", n.loading), e.xp6(1), e.Q6J("ngIf", !n.inGame && n.user))
                },
                directives: [l.O5, it, Tn, l.sg, J, kt, Rn],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.possessionGroup__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.mainContentColumn__playerRow__recentAquisitions__subheading[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.possessionGroup__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.mainContentColumn__playerRow__recentAquisitions__subheading[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{background:var(--gu-blue-dark);height:calc(calc(var(--vh) * 100) - 28px - 80px);display:flex;padding:calc(var(--vh) * 2) calc(var(--vw) * 4.16) 0 calc(var(--vw) * 4.16);justify-content:space-between}.loadingSpinner[_ngcontent-%COMP%]{margin:auto}.mainContentColumn[_ngcontent-%COMP%]{width:calc(var(--vw) * 62.5)}.mainContentColumn__playerRow[_ngcontent-%COMP%]{display:flex}.mainContentColumn__playerRow__playerStats[_ngcontent-%COMP%]{width:calc(var(--vw) * 35);margin-right:calc(var(--vw) * 2.08)}.mainContentColumn__playerRow__recentAquisitions[_ngcontent-%COMP%]{flex:1}.mainContentColumn__playerRow__recentAquisitions__subheading[_ngcontent-%COMP%]{margin-bottom:calc(var(--vh) * 1);color:#527493}.recentAquisitions__itemListing[_ngcontent-%COMP%]{height:calc(var(--vh) * 16.85);display:flex;justify-content:space-between}.recentAquisitions__itemListing__item[_ngcontent-%COMP%]{width:calc(var(--vw) * 6.66);background:yellowgreen}.mainContentColumn__possessionGroups[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2.5);position:relative}.possessionGroup[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 3);padding-bottom:calc(var(--vh) * 2);height:calc(var(--vh) * 37);padding-left:calc(var(--vw) * 1.5);padding-right:calc(var(--vw) * 1.5);border-radius:2px;overflow:hidden;box-shadow:0 calc(var(--vh) * .6) calc(var(--vh) * 3) calc(var(--vh) * .2) #00000026;position:absolute;top:0;left:0;width:100%;display:flex;flex-flow:row wrap;align-items:flex-end;justify-content:stretch;background:#0c1620;overflow:visible}.possessionGroup[_ngcontent-%COMP%]:after{content:"";border-radius:2px;position:absolute;top:0;bottom:0;left:0;right:0;box-shadow:inset 0 0 calc(var(--vh) * .9) calc(var(--vh) * .3) #fff0,inset 0 0 calc(var(--vh) * .2) #fff0;pointer-events:none;user-select:none;z-index:1}.possessionGroup[_ngcontent-%COMP%]:after{user-select:none;pointer-events:none;content:"";border:calc(var(--vh) * .15) solid rgba(255,255,255,.07);position:absolute;bottom:0;left:0;right:0}.possessionGroup[_ngcontent-%COMP%]:nth-child(1){position:relative;z-index:5}.possessionGroup[_ngcontent-%COMP%]:nth-child(2){top:calc(calc(var(--vh) * 7.3) * 1);z-index:4}.possessionGroup[_ngcontent-%COMP%]:nth-child(3){top:calc(calc(var(--vh) * 7.3) * 2);z-index:3}.possessionGroup[_ngcontent-%COMP%]:nth-child(4){top:calc(calc(var(--vh) * 7.3) * 3);z-index:2}.possessionGroup[_ngcontent-%COMP%]:nth-child(5){top:calc(calc(var(--vh) * 7.3) * 4);z-index:1}.possessionGroup__background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.3;object-fit:cover;object-position:center}.possessionGroup__items[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * 1);padding-right:calc(var(--vw) * 1);grid-row-gap:calc(var(--vh) * 3.5);grid-column-gap:calc(var(--vw) * 1.2);display:grid;grid-template-columns:repeat(5,1fr);align-items:start;grid-auto-rows:min-content;width:100%;position:relative;align-self:flex-start}.possessionGroup__items__item[_ngcontent-%COMP%]{filter:drop-shadow(calc(var(--vh) * 1.75) calc(var(--vh) * .1) calc(var(--vh) * 1.75) rgba(0,0,0,.5))}.possessionGroup__items__item[_ngcontent-%COMP%]:last-child{margin:0}.possessionGroup__title[_ngcontent-%COMP%]{text-transform:uppercase;background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;position:relative}.possessionGroup__cta[_ngcontent-%COMP%]{margin-left:auto}.newsListingColumn[_ngcontent-%COMP%]{width:calc(var(--vw) * 28)}.possessionGroup--disabled[_ngcontent-%COMP%]   .possessionGroup__cta[_ngcontent-%COMP%]{user-select:none;pointer-events:none;filter:grayscale(1);opacity:.2}.possessionGroup--disabled[_ngcontent-%COMP%]   .possessionGroup__title[_ngcontent-%COMP%]{-webkit-text-fill-color:inherit;background-clip:inherit;background:transparent;color:#7192b0}.possessionGroup--disabled[_ngcontent-%COMP%]   .possessionGroup__background[_ngcontent-%COMP%]{opacity:.1}']
            }), o
        })();

        function Bg(o, r) {
            1 & o && e._UZ(0, "gu-icon", 13)
        }

        function Ug(o, r) {
            if (1 & o && (e.TgZ(0, "div", 9), e._UZ(1, "img", 10), e.YNc(2, Bg, 1, 0, "gu-icon", 11), e.TgZ(3, "div", 12), e._uU(4), e.TgZ(5, "span"), e._uU(6), e.ALo(7, "titlecase"), e.qZA(), e._uU(8), e.qZA()()), 2 & o) {
                const t = r.$implicit, n = r.last;
                e.xp6(1), e.MGl("src", "/gu-assets/images/cardpacks/cropped/", t.type, ".webp", e.LSH), e.xp6(1), e.Q6J("ngIf", !n), e.xp6(2), e.hij(" ", t.count, " "), e.xp6(1), e.Gre("pack__label__colored ", t.type.toLowerCase(), ""), e.xp6(1), e.hij(" ", e.lcZ(7, 8, t.type), " "), e.xp6(2), e.hij(" ", 1 === t.count ? "Pack" : "Packs", " ")
            }
        }

        function Lg(o, r) {
            if (1 & o && (e.TgZ(0, "div", 7), e.YNc(1, Ug, 9, 10, "div", 8), e.qZA()), 2 & o) {
                const t = e.oxw();
                e.xp6(1), e.Q6J("ngForOf", t.packGroups)
            }
        }

        let Eg = (() => {
            class o {
                constructor(t, n, i) {
                    this.packService = t, this.utils = n, this.modalService = i
                }

                ngOnInit() {
                    this.packService.unopenedPacks$.pipe((0, S.h)(t => t && t.length > 0), (0, O.U)(t => t.filter(n => "starter" === n.pack_source)), (0, S.h)(t => t && t.length > 0), (0, w.q)(1), (0, O.U)(t => this.utils.groupBy(t, n => n.god)), (0, b.b)(t => {
                        this.packGroups = Array.from(t.keys()).map(n => ({type: n, count: t.get(n).length}))
                    })).subscribe()
                }

                continue() {
                    this.modalService.destroyTopModal(), this.onClose && this.onClose()
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(Oe.F), e.Y36(De.F), e.Y36(I.Z))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-gu-welcome-modal"]],
                inputs: {onClose: "onClose"},
                decls: 12,
                vars: 2,
                consts: [[1, "welcomeTitle"], [1, "welcomeSubTitle"], ["class", "packListing", 4, "ngIf"], [1, "footerArea"], [1, "footerArea__visitTempleText"], [1, "footerArea__templteIcon", 3, "iconLigature"], ["size", "large", "type", "primary", 1, "footerArea__continueCta", 3, "click"], [1, "packListing"], ["class", "pack", 4, "ngFor", "ngForOf"], [1, "pack"], [1, "pack__cardPackImage", 3, "src"], ["class", "pack__spacerPlusIcon", "iconLigature", "Mana", 4, "ngIf"], [1, "pack__label"], ["iconLigature", "Mana", 1, "pack__spacerPlusIcon"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "h2", 0), e._uU(1, "Welcome to Gods Unchained!"), e.qZA(), e.TgZ(2, "div", 1), e._uU(3, "As part of your welcome pack we have given you:"), e.qZA(), e.YNc(4, Lg, 2, 1, "div", 2), e.TgZ(5, "footer", 3)(6, "div", 4), e._uU(7, " Please visit the Temple "), e._UZ(8, "gu-icon", 5), e._uU(9, " to Open them "), e.qZA(), e.TgZ(10, "gu-primary-hex-button", 6), e.NdJ("click", function () {
                        return n.continue()
                    }), e._uU(11, "Continue"), e.qZA()()), 2 & t && (e.xp6(4), e.Q6J("ngIf", n.packGroups), e.xp6(4), e.Q6J("iconLigature", "temple"))
                },
                directives: [l.O5, l.sg],
                pipes: [l.rS],
                styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.welcomeTitle[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.pack__label[_ngcontent-%COMP%], .footerArea__visitTempleText[_ngcontent-%COMP%], .welcomeSubTitle[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.welcomeTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 4.2);line-height:1.3}.footerArea__visitTempleText[_ngcontent-%COMP%], .welcomeSubTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9);line-height:1.2;font-weight:600}.pack__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}[_nghost-%COMP%]{width:calc(var(--vw) * 80);height:calc(var(--vh) * 80);padding-top:calc(var(--vh) * 8.33);display:flex;flex-flow:column nowrap;position:relative;text-align:center;margin:auto;margin-top:calc(var(--vh) * 2);background:#0c1620}[_nghost-%COMP%]:before{content:"";background-image:url(/gu-assets/images/backgrounds/gods.webp);background-size:cover;background-position:center;opacity:.4;position:absolute;top:0;left:0;right:0;bottom:0;box-shadow:inset 0 0 0 1px #fff3}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.welcomeTitle[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.welcomeSubTitle[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 2);color:#fff}.packListing[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 9.25);display:flex;justify-content:center}.pack[_ngcontent-%COMP%]{height:calc(var(--vh) * 25);padding-right:calc(var(--vw) * 5.2);display:flex;flex-flow:column nowrap;align-items:center;position:relative}.pack[_ngcontent-%COMP%]:last-child{padding:0}.pack__cardPackImage[_ngcontent-%COMP%]{width:calc(var(--vw) * 12.18)}.pack__label[_ngcontent-%COMP%]{padding-left:calc(var(--vw) * .8);padding-top:calc(var(--vh) * 2);font-weight:600}.pack__label__colored.death[_ngcontent-%COMP%]{color:#2359ff}.pack__label__colored.deception[_ngcontent-%COMP%]{color:#e320ff}.pack__label__colored.light[_ngcontent-%COMP%]{color:#fbe29f}.pack__label__colored.magic[_ngcontent-%COMP%]{color:#003953}.pack__label__colored.nature[_ngcontent-%COMP%]{color:#2acf00}.pack__label__colored.war[_ngcontent-%COMP%]{color:#df2600}.pack__spacerPlusIcon[_ngcontent-%COMP%]{right:calc(var(--vw) * 2.4);font-size:calc(var(--vh) * 2);top:50%;position:absolute;line-height:1;transform:translateY(-50%)}.pack__spacerPlusIcon[_ngcontent-%COMP%], .footerArea__templteIcon[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.footerArea[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;margin-top:auto;position:relative}.footerArea__templteIcon[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.2);line-height:1}.footerArea__continueCta[_ngcontent-%COMP%]{transform:translateY(50%)}']
            }), o
        })();
        var Ng = g(5231);
        let Hn = (() => {
            class o {
                constructor(t, n, i, a, s, c, d, u) {
                    this.gameService = t, this.authService = n, this.modalService = i, this.packService = a, this.storageService = s, this.appRef = c, this.progressionService = d, this.cerberusModalService = u
                }

                canActivate(t, n) {
                    const i = this.authService.getUserId();
                    return this.requiresManualUpdate() ? (this.forceManualUpdateModal(), !1) : (this.letUserIn(i), !0)
                }

                letUserIn(t) {
                    this.userHasStarterPacks$(t).pipe((0, w.q)(1)).subscribe(n => {
                        !0 === n && this.modalService.createModal(Eg, {onClose: null}, {
                            canCloseFromOutside: !1,
                            position: h.e1.Center,
                            blurredBackground: !0,
                            size: h.Cg.Workarea
                        })
                    })
                }

                userHasStarterPacks$(t) {
                    return this.packService.fetchUnopenedPacksById().pipe((0, w.q)(1), (0, O.U)(n => {
                        if (!n || 0 === n.length) return !1;
                        const i = n.filter(a => "starter" === a.pack_source);
                        return i && i.length > 0
                    }))
                }

                doShowCardInfoModal$(t) {
                    const n = !!this.storageService.get(["seenCardInfoModal"]),
                        i = this.progressionService.getStoredAccountProgression(t);
                    return (0, oe.of)(i.lvl >= 5 && !n)
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
                    this.modalService.createModal(Ng.s, {
                        title: "Launcher Update",
                        message: "The Immutable Launcher must be manually updated to 0.10.0, please download, close, and install.",
                        okButtonText: "DOWNLOAD NOW",
                        onOk: () => window.open(t)
                    }, {
                        canCloseFromOutside: !1,
                        position: h.e1.Center,
                        size: h.Cg.StretchableFullscreen,
                        blurredBackground: !0
                    })
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.LFG(tt.hM), e.LFG(f.mI), e.LFG(I.Z), e.LFG(Oe.F), e.LFG(f.qy), e.LFG(e.z2F), e.LFG(j.$z), e.LFG(U.Qz))
            }, o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac}), o
        })();
        const qg = [{
            path: "",
            component: or,
            canActivate: [Hn],
            children: [{path: "", redirectTo: G.arena}, {path: "lore", component: be.sZ}, {
                path: G.deckBuilder,
                component: Ye,
                data: {state: G.deckBuilder, reuse: !0}
            }, {path: G.arena, component: kg, data: {state: G.arena}}, {
                path: G.workshop,
                component: Lt,
                data: {state: G.workshop}
            }, {path: G.openPacks, component: be.kM, data: {state: G.openPacks}}, {
                path: G.collections,
                component: Gg,
                data: {state: G.collections}
            }, {
                path: G.forge,
                component: hc,
                data: {state: G.forge, featureFlag: _.vU.forgeEnabled},
                canActivate: [ut]
            }, {
                path: G.referrals,
                component: be.el,
                data: {state: G.referrals, featureFlag: _.vU.referralsEnabled},
                canActivate: [ut]
            }, {path: G.starStore, component: be.gn, data: {state: G.starStore}}, {
                path: G.playToEarn,
                loadChildren: () => g.e(932).then(g.bind(g, 68932)).then(o => o.PlayToEarnModule),
                data: {state: G.playToEarn, featureFlag: _.vU.playToEarnEnabled},
                canActivate: [ut]
            }]
        }];
        let Qg = (() => {
            class o {
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275mod = e.oAB({type: o}), o.\u0275inj = e.cJS({imports: [[pe.Bz.forChild(qg)], pe.Bz]}), o
        })();
        const Yn = function (o) {
            return {selected: o}
        };

        function Rg(o, r) {
            if (1 & o) {
                const t = e.EpF();
                e.ynx(0), e.TgZ(1, "app-tooltip", 4)(2, "button", 5), e.NdJ("click", function () {
                    const a = e.CHM(t).$implicit;
                    return e.oxw().selectGodFilter(a)
                }), e._UZ(3, "gu-icon", 6), e.qZA()(), e.BQk()
            }
            if (2 & o) {
                const t = r.$implicit, n = e.oxw();
                e.xp6(1), e.MGl("title", "Group by ", t.name, ""), e.xp6(1), e.Tol(t.name.toLowerCase()), e.Q6J("ngClass", e.VKq(6, Yn, n.isSelected(t)))("title", "Show decks for god: " + t.name), e.xp6(1), e.Q6J("iconLigature", "god_" + t.name.toLowerCase())
            }
        }

        let Hg = (() => {
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
                return new (t || o)(e.Y36(f.pk))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["app-grouping-bar"]],
                inputs: {godFilters: "godFilters", displayGroupingName: "displayGroupingName"},
                outputs: {godFilterChangeList: "godFilterChangeList"},
                decls: 4,
                vars: 4,
                consts: [["title", "Show all Gods", 1, "groupingButtonAndTooltip"], [1, "groupingButton", "groupingButton--all", 3, "ngClass", "click"], ["iconLigature", "filter_all_gods", 1, "groupingButton__godIcon"], [4, "ngFor", "ngForOf"], [1, "groupingButtonAndTooltip", 3, "title"], [1, "groupingButton", "groupingButton--god", 3, "ngClass", "title", "click"], [1, "groupingButton__godIcon", 3, "iconLigature"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "app-tooltip", 0)(1, "button", 1), e.NdJ("click", function () {
                        return n.selectAllGodFilters()
                    }), e._UZ(2, "gu-icon", 2), e.qZA()(), e.YNc(3, Rg, 4, 8, "ng-container", 3)), 2 & t && (e.xp6(1), e.Q6J("ngClass", e.VKq(2, Yn, n.isAllGodFiltersSelected)), e.xp6(2), e.Q6J("ngForOf", n.godFilters))
                },
                directives: [Ze.K, l.mk, l.sg],
                styles: ["[_nghost-%COMP%]{display:flex}.groupingButton[_ngcontent-%COMP%]{width:calc(var(--vw) * 1.8);height:calc(var(--vw) * 1.8);border:calc(var(--vh) * .15) solid #182531;border-radius:calc(var(--vh) * .4);background:#0c1620;color:#7192b0;display:flex;padding:0;outline:none}.groupingButton.selected[_ngcontent-%COMP%]{background:#3d5a74;border-color:#7192b0;color:#f6f6f6}.groupingButton[_ngcontent-%COMP%]:hover{color:#f6f6f6;background:#3d5a74;border-color:#3d5a74}.groupingButtonAndTooltip[_ngcontent-%COMP%]{margin-right:calc(var(--vw) * .5)}.groupingButton--all[_ngcontent-%COMP%]   .groupingButton__godIcon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * 1.1)}.groupingButton__godIcon[_ngcontent-%COMP%]{font-size:calc(var(--vw) * 1.3);margin:auto;line-height:1;display:flex}"]
            }), o
        })();
        const Yg = ["groupsContainer"];

        function Jg(o, r) {
            if (1 & o && e._UZ(0, "app-inventory-cards", 7), 2 & o) {
                const t = e.oxw();
                e.Q6J("showBundle", !0)("expandedViewMode", t.expandedViewMode)("columns", 4)("showCardCounts", !1)("showUnowned", !1)("displayedGroupedProtos", t.displayedGroupedProtos)("filterCardIds", t.filterCardIds)
            }
        }

        function $g(o, r) {
            if (1 & o && e._UZ(0, "app-group-quality", 8), 2 & o) {
                const t = e.oxw();
                e.Q6J("columns", 4)("showCardCounts", !1)("expandedViewMode", t.expandedViewMode)("showUnowned", !1)("displayedGroupedQualities", t.displayedGroupedQualities)("filterCardIds", t.filterCardIds)
            }
        }

        let Wg = (() => {
            class o {
                constructor(t, n, i) {
                    this.resizeService = t, this.groupingService = n, this.filterService = i, this.activeGrouping = this.groupingService.defaultGrouping, this.filterCardIds = [], this.selectCardId = new e.vpe, this.GroupingType = F, this.selectedHeaders = [], this.showUnowned = !0, this.activeSort = m.PE.AscMana, this.sortOptions = [new B("Mana", "filter_mana", m.PE.AscMana, m.PE.DescMana), new B("Health", "filter_health", m.PE.AscHealth, m.PE.DescHealth), new B("Attack", "filter_attack", m.PE.AscAttack, m.PE.DescAttack), new B("Tribe", "filter_tribe", m.PE.AscTribe, m.PE.DescTribe), new B("Type", "filter_type", m.PE.AscType, m.PE.DescType), new B("God", "filter_god", m.PE.AscGod, m.PE.DescGod), new B("Rarity", "filter_rarity", m.PE.AscRarity, m.PE.DescRarity), new B("Set", "filter_set", m.PE.AscSet, m.PE.DescSet)], this.allGroupedProtos = [], this.allGroupedQualities = [], this.unsubscribe = new M.xQ, this.watchForResize()
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
                    this.resizeService.viewPortUnits$.pipe((0, p.R)(this.unsubscribe), (0, b.b)(({vh: t}) => this.vh = t)).subscribe()
                }

                groupingChange(t, n = !0) {
                    this.sortCards(this.activeSort), this.selectedHeaders = n ? [] : this.selectedHeaders, this.activeGrouping = t, t.groupingType === F.Quality ? (this.protoGrouping = null, this.qualityGrouping = this.groupingService.groupQualities(this.protoCards, t, this.god), this.filterCardGroupingQuality()) : (this.qualityGrouping = null, this.protoGrouping = this.groupingService.groupProtos(this.protoCards, t, this.god), this.filterCardGrouping())
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
                    if (this.activeGrouping.groupingType === F.Quality) return void this.loadGroupQuality();
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
                    if (this.expandedViewMode === R.SELLING) n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "genesis" === a.set)})); else {
                        if (this.expandedViewMode !== R.FORGING) return t;
                        n = t.map(i => Object.assign(Object.assign({}, i), {cards: i.cards.filter(({pc: a}) => "core" === a.set)}))
                    }
                    return n
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)(e.Y36(K._), e.Y36(ke), e.Y36(_.iZ))
            }, o.\u0275cmp = e.Xpm({
                type: o,
                selectors: [["cerberus-half-screen-cards-list"]],
                viewQuery: function (t, n) {
                    if (1 & t && (e.Gf(Yg, 7), e.Gf(J, 5)), 2 & t) {
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
                consts: [[1, "sectionHeader"], [1, "sectionHeader__title"], [1, "sectionHeader__filterArea", 3, "showFilters", "sortOptions", "selectedHeaders", "cardGrouping", "unownedCheckboxVisible", "sortChange", "groupingHeaderChange"], ["infiniteScroll", "", "data-test-id", "cardsListingHalfScreen", 1, "cardsListingArea", 3, "scrollWindow", "scrolled"], ["groupsContainer", ""], ["mode", "proto", 3, "showBundle", "expandedViewMode", "columns", "showCardCounts", "showUnowned", "displayedGroupedProtos", "filterCardIds", 4, "ngIf"], [3, "columns", "showCardCounts", "expandedViewMode", "showUnowned", "displayedGroupedQualities", "filterCardIds", 4, "ngIf"], ["mode", "proto", 3, "showBundle", "expandedViewMode", "columns", "showCardCounts", "showUnowned", "displayedGroupedProtos", "filterCardIds"], [3, "columns", "showCardCounts", "expandedViewMode", "showUnowned", "displayedGroupedQualities", "filterCardIds"]],
                template: function (t, n) {
                    1 & t && (e.TgZ(0, "header", 0)(1, "h3", 1), e._uU(2), e.qZA(), e.TgZ(3, "app-filter-sort-bar", 2), e.NdJ("sortChange", function (a) {
                        return n.sortChange(a)
                    })("groupingHeaderChange", function (a) {
                        return n.groupingHeaderChange(a)
                    }), e.qZA()(), e.TgZ(4, "section", 3, 4), e.NdJ("scrolled", function () {
                        return n.loadGroup()
                    }), e.YNc(6, Jg, 1, 7, "app-inventory-cards", 5), e.YNc(7, $g, 1, 6, "app-group-quality", 6), e.qZA()), 2 & t && (e.xp6(2), e.Oqu(n.title), e.xp6(1), e.Q6J("showFilters", !1)("sortOptions", n.sortOptions)("selectedHeaders", n.selectedHeaders)("cardGrouping", n.protoGrouping)("unownedCheckboxVisible", !1), e.xp6(1), e.Q6J("scrollWindow", !1), e.xp6(2), e.Q6J("ngIf", n.activeGrouping.groupingType !== n.GroupingType.Quality), e.xp6(1), e.Q6J("ngIf", n.activeGrouping.groupingType === n.GroupingType.Quality))
                },
                directives: [wt, gt, l.O5, Pt, St],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.sectionHeader__title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.godArea__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.sectionHeader__title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.godArea__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}.sectionHeader[_ngcontent-%COMP%]{height:calc(var(--vh) * 8.5);position:relative}.sectionHeader__groupings[_ngcontent-%COMP%]{position:absolute}.sectionHeader__title[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .3);padding-bottom:calc(var(--vh) * .8);text-transform:uppercase;line-height:1;position:absolute;width:100%;text-align:center;color:#f6f6f6;border-bottom:solid #1d2f41;border-width:calc(var(--vh) * .25)}.sectionHeader__rightSideArea[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * .8);position:absolute;right:0;top:0;display:flex;align-items:flex-start;height:100%}.sectionHeader__filterArea[_ngcontent-%COMP%]{bottom:calc(var(--vh) * 1);right:0;position:absolute}.sectionHeader__godArea[_ngcontent-%COMP%]{user-select:none;pointer-events:none;position:absolute;right:0;top:0;display:flex;align-items:flex-start}app-god-badge[_ngcontent-%COMP%]{user-select:auto;pointer-events:auto;margin-top:calc(var(--vh) * 1)}.godArea__label[_ngcontent-%COMP%]{color:#7192b0;padding-top:calc(var(--vh) * 1.1);padding-right:calc(var(--vw) * 2)}.cardsListingArea[_ngcontent-%COMP%]{overflow:hidden;overflow-y:auto;flex:1}  app-card{cursor:pointer}"]
            }), o
        })();
        const zg = function (o, r) {
            return {rewardState__nextReward__container: o, rewardState__lastReward__container: r}
        }, jg = function (o, r, t, n, i, a) {
            return {
                "rewardState__nextReward__innerSquares--done": o,
                "rewardState__lastReward__innerSquares--done": r,
                "rewardState__nextReward__innerSquares--next": t,
                "rewardState__lastReward__innerSquares--next": n,
                "rewardState__nextReward__innerSquares--notDone": i,
                "rewardState__lastReward__innerSquares--notDone": a
            }
        }, Vg = function (o, r) {
            return {rewardState__nextReward__packImage: o, rewardState__lastReward__packImage: r}
        };
        let Xg = (() => {
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
                    1 & t && (e.TgZ(0, "div", 0), e._UZ(1, "i", 1), e.TgZ(2, "picture"), e._UZ(3, "img", 2), e.qZA()()), 2 & t && (e.Q6J("className", n.isAchieved || n.isNextLevel() ? "activeState" : "inactiveState")("ngClass", e.WLB(5, zg, !n.isFinalLevel(), n.isFinalLevel())), e.xp6(1), e.Q6J("ngClass", e.HTZ(8, jg, !n.isFinalLevel() && n.isAchieved, n.isFinalLevel() && n.isAchieved, !n.isFinalLevel() && !n.isAchieved && n.isNextLevel(), n.isFinalLevel() && !n.isAchieved && n.isNextLevel(), !n.isFinalLevel() && !n.isAchieved && !n.isNextLevel(), n.isFinalLevel() && !n.isAchieved && !n.isNextLevel())), e.xp6(2), e.MGl("src", "/gu-assets/images/cardpacks/", n.diety, ".webp", e.LSH), e.Q6J("ngClass", e.WLB(15, Vg, !n.isFinalLevel(), n.isFinalLevel())))
                },
                directives: [l.mk],
                styles: ['.rewardState__nextReward__innerSquares--done[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;transform:rotate(45deg);border:1px solid #AFFAED;padding:4px;background:#0F1B27}.rewardState__nextReward__innerSquares--done[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #54BBCD}.rewardState__lastReward__innerSquares--done[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;transform:rotate(45deg);border:1px solid #AFFAED;padding:4px;background:#0F1B27}.rewardState__lastReward__innerSquares--done[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #54BBCD}.rewardState__nextReward__innerSquares--next[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;transform:rotate(45deg);border:1px solid #FBE29F;padding:4px;background:#0F1B27}.rewardState__nextReward__innerSquares--next[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #FFD76E}.rewardState__lastReward__innerSquares--next[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;transform:rotate(45deg);border:1px solid #FBE29F;padding:4px;background:#0F1B27}.rewardState__lastReward__innerSquares--next[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #FFD76E}.rewardState__nextReward__innerSquares--notDone[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;transform:rotate(45deg);border:1px solid #7F7F7F;padding:4px;background:#0F1B27}.rewardState__nextReward__innerSquares--notDone[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #464646}.rewardState__lastReward__innerSquares--notDone[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;transform:rotate(45deg);border:1px solid #7F7F7F;padding:4px;background:#0F1B27}.rewardState__lastReward__innerSquares--notDone[_ngcontent-%COMP%]:before{content:"";display:block;width:100%;height:100%;border:1px solid #464646}.rewardState__nextReward__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:20px;margin-top:6px}.rewardState__nextReward__packImage[_ngcontent-%COMP%]{margin:auto;width:42px;transform:translate(0)}.rewardState__lastReward__packImage[_ngcontent-%COMP%]{margin:auto;width:57px;transform:translate(0)}.activeState[_ngcontent-%COMP%]{opacity:1}.inactiveState[_ngcontent-%COMP%]{opacity:.6}']
            }), o
        })(), Kg = (() => {
            class o {
                constructor() {
                }
            }

            return o.\u0275fac = function (t) {
                return new (t || o)
            }, o.\u0275mod = e.oAB({type: o}), o.\u0275inj = e.cJS({
                providers: [He, Qn, l.JJ, te.D, Hn, _.TJ, xe, Fe, ke, ce.MZ, we, I.Z, j.$z],
                imports: [[U.Zd, be.ic, l.ez, T.u5, Qg, no, T.UX, ro.m, be.W2, io.P, oo]]
            }), o
        })();
        e.B6R(On, [Wg, Ft, l.O5, Mn, J, l.mk, yn], [Me.XX]), e.B6R(Lt, [l.O5, ye, Hg, ot.w, ct, l.sg, Gn], [l.Ov]), e.B6R(Sn, [Qe, l.sg, Xg, l.O5, l.mk], [l.rS])
    }, 31459: (Et, Se, g) => {
        g.d(Se, {AZ: () => e.A, h4: () => lt, XX: () => S});
        var e = g(76638);
        g(18464);
        var O = g(5e3);
        const b = ["k", "m", "b", "t", "p", "e"];
        let S = (() => {
            class Q {
                transform(N, re) {
                    let he;
                    if (Number.isNaN(N)) return null;
                    if (N < 1e3) return N;
                    he = Math.floor(Math.log(N) / Math.log(1e3));
                    const $ = N / Math.pow(1e3, he);
                    if (Number.isNaN($)) return null;
                    const Te = b[he - 1];
                    return `${$.toFixed(re)}${Te}`
                }
            }

            return Q.\u0275fac = function (N) {
                return new (N || Q)
            }, Q.\u0275pipe = O.Yjl({name: "numberAbbreviation", type: Q, pure: !0}), Q
        })(), lt = (() => {
            class Q {
                transform(N, re, ...he) {
                    const $ = JSON.parse(JSON.stringify(N));
                    return Object.keys($).filter(W => {
                        if ($[W].hasOwnProperty("children")) {
                            const ue = this.transform($[W].children, re);
                            $[W].children = ue
                        }
                        return !Object.keys(re).includes($[W].featureFlag) || re[$[W].featureFlag]
                    }).reduce((W, ue) => (W[ue] = $[ue], W), {})
                }
            }

            return Q.\u0275fac = function (N) {
                return new (N || Q)
            }, Q.\u0275pipe = O.Yjl({name: "filterNavItemsByFeatureFlags", type: Q, pure: !0}), Q
        })()
    }, 76638: (Et, Se, g) => {
        g.d(Se, {A: () => oe});
        var e = g(5e3);
        let oe = (() => {
            class ge {
                transform(O) {
                    return !O || O.length < 11 ? O : `${O.slice(0, 6)}...${O.slice(O.length - 4)}`
                }
            }

            return ge.\u0275fac = function (O) {
                return new (O || ge)
            }, ge.\u0275pipe = e.Yjl({name: "addressTruncate", type: ge, pure: !0}), ge
        })()
    }
}]);