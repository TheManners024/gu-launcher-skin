// noinspection BadExpressionStatementJS, JSStringConcatenationToES6Template
function getGlobalRouteContent(navLinkFn) {
    const userId = window.bridge.store.get('user_id');
    // needs to return a method that gets invoked and receives an environment
    return (env) => {
        const links = navLinkFn(env);
        if (userId) {
            links.guDecksProfile = {
                shortName: "GU Decks",
                url: `https://gudecks.com/meta/player-stats?userId=${userId}`,
                icon: "game_wins"
            }
        }
        return links;
    }
}

(self.webpackChunkdesktop = self.webpackChunkdesktop || []).push([[179], {
    63764: (se, U, s) => {
        "use strict";
        s.d(U, {S: () => v});
        var l = s(5e3), a = s(69808);
        let v = (() => {
            class i {
                constructor() {
                    this.canCloseFromInside = !1, this.closeModal$ = new l.vpe
                }

                ngOnInit() {
                }

                closeModal(d) {
                    d && !this.canCloseFromInside || this.closeModal$.emit()
                }
            }

            return i.\u0275fac = function (d) {
                return new (d || i)
            }, i.\u0275cmp = l.Xpm({
                type: i,
                selectors: [["app-info-modal"]],
                inputs: {title: "title", text: "text", styles: "styles", canCloseFromInside: "canCloseFromInside"},
                outputs: {closeModal$: "closeModal$"},
                decls: 7,
                vars: 3,
                consts: [[1, "modal-holder", 3, "ngStyle", "click"], [1, "container-fluid"], [1, "row"], [1, "col-12", "text-center", "gold-text", "bourbon", "title-container"], [1, "col-12", "text-center", "info-container", 3, "innerHTML"]],
                template: function (d, u) {
                    1 & d && (l.TgZ(0, "div", 0), l.NdJ("click", function () {
                        return u.closeModal(!0)
                    }), l.TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3), l._uU(4), l.qZA()(), l.TgZ(5, "div", 2), l._UZ(6, "div", 4), l.qZA()()()), 2 & d && (l.Q6J("ngStyle", u.styles), l.xp6(4), l.hij(" ", u.title, " "), l.xp6(2), l.Q6J("innerHTML", u.text, l.oJD))
                },
                directives: [a.PC],
                styles: [".modal-holder[_ngcontent-%COMP%]{min-width:calc(var(--vw) * 15.62);border:1px solid white;z-index:21;overflow:auto;background-color:#060b11b3;border-radius:calc(var(--vh) * .4)}.title-container[_ngcontent-%COMP%]{padding:calc(var(--vh) * 1.85);border-bottom:1px solid white;font-size:x-large}.info-container[_ngcontent-%COMP%]{padding:calc(var(--vh) * 3.7)}"]
            }), i
        })()
    }, 46208: (se, U, s) => {
        "use strict";
        s.d(U, {$$: () => l, ZW: () => u, u4: () => n, VY: () => e});

        class l {
            constructor(b, P, S, I, w = []) {
                this.id = b, this.name = P, this.god = S, this.items = w, this.deck_type = I
            }
        }

        class u {
            constructor(b, P, S = null) {
                this.deck = b, this.type = P, this.cards = S
            }
        }

        var n = (() => {
            return (r = n || (n = {}))[r.Add = 0] = "Add", r[r.Remove = 1] = "Remove", r[r.Change = 2] = "Change", r[r.CardLimit = 3] = "CardLimit", r[r.DeckLimit = 4] = "DeckLimit", r[r.NoActiveDeck = 5] = "NoActiveDeck", r[r.StatChange = 6] = "StatChange", n;
            var r
        })();

        class e {
            constructor(b, P = null, S = !1) {
                this.deckSelect = b, this.gameModeID = P, this.forAI = S
            }
        }
    }, 57674: (se, U, s) => {
        "use strict";
        s.d(U, {PE: () => a});
        var a = (() => {
            return (u = a || (a = {}))[u.AscID = 0] = "AscID", u[u.DescID = 1] = "DescID", u[u.AscQuality = 2] = "AscQuality", u[u.DescQuality = 3] = "DescQuality", u[u.AscMana = 4] = "AscMana", u[u.DescMana = 5] = "DescMana", u[u.AscScarcity = 6] = "AscScarcity", u[u.AscHealth = 7] = "AscHealth", u[u.DescHealth = 8] = "DescHealth", u[u.AscAttack = 9] = "AscAttack", u[u.DescAttack = 10] = "DescAttack", u[u.AscTribe = 11] = "AscTribe", u[u.DescTribe = 12] = "DescTribe", u[u.AscRarity = 13] = "AscRarity", u[u.DescRarity = 14] = "DescRarity", u[u.AscType = 15] = "AscType", u[u.DescType = 16] = "DescType", u[u.AscGod = 17] = "AscGod", u[u.DescGod = 18] = "DescGod", u[u.AscSet = 19] = "AscSet", u[u.DescSet = 20] = "DescSet", a;
            var u
        })()
    }, 33403: (se, U, s) => {
        "use strict";
        s.d(U, {tO: () => l, zy: () => a, B_: () => v, Gn: () => t});
        var l = (() => {
            return (n = l || (l = {}))[n.SOLO = 0] = "SOLO", n[n.CONSTRUCTED = 1] = "CONSTRUCTED", n[n.DIRECT_CHALLENGE = 5] = "DIRECT_CHALLENGE", n[n.SEALED_DECK = 8] = "SEALED_DECK", n[n.TUTORIAL = 6] = "TUTORIAL", l;
            var n
        })(), a = (() => {
            return (n = a || (a = {}))[n.WEEKEND_EVENT = 2] = "WEEKEND_EVENT", a;
            var n
        })(), v = (() => {
            return (n = v || (v = {}))[n.SOLO = 0] = "SOLO", n[n.QUICK_CONSTRUCTED = 2] = "QUICK_CONSTRUCTED", n[n.DIRECT_CHALLENGE = 6] = "DIRECT_CHALLENGE", n[n.QUICK_SEALED = 10] = "QUICK_SEALED", n[n.RANKED_CONSTRUCTED = 13] = "RANKED_CONSTRUCTED", n[n.PAID_GENESIS_SEALED = 14] = "PAID_GENESIS_SEALED", n[n.FREE_4_ALL_SEALED = 15] = "FREE_4_ALL_SEALED", n[n.SERVER_SOLO = 20] = "SERVER_SOLO", n[n.SEALED_DECK = 7] = "SEALED_DECK", n[n.TUTORIAL = 101] = "TUTORIAL", v;
            var n
        })(), t = (() => {
            return (n = t || (t = {}))[n.CARDS = 0] = "CARDS", n[n.LEVEL = 1] = "LEVEL", n[n.UPDATE = 2] = "UPDATE", n[n.LOCKED = 3] = "LOCKED", n[n.ASSETS_UPDATE = 4] = "ASSETS_UPDATE", t;
            var n
        })()
    }, 98009: (se, U, s) => {
        "use strict";
        s.d(U, {D: () => y});
        var l = s(73307), a = s(591), v = s(36053), i = s(5254), t = s(21086), d = s(92198), u = s(72986), n = s(21406),
            e = s(24850), r = s(40963), b = s(2994), P = s(27221), S = s(87545), I = s(55195), w = s(46208), x = s(5e3),
            $ = s(44416);
        s(63411);
        let y = (() => {
            class M {
                constructor(h, C, T, K, ce, ae) {
                    this.utils = h, this.gameApiService = C, this.deckApi = T, this.authService = K, this.cardsService = ce, this.ffService = ae, this._userDecks = new a.X([]), this._starterDecks = new a.X([]), this._activeDeck = new a.X(null), this._activeDeckChange = new a.X(new w.ZW(null, w.u4.NoActiveDeck)), this._deckSelectMode = new a.X(new w.VY(!1)), this.deckSizeLimit = 30, this.dataStore = {
                        userDecks: [],
                        starterDecks: [],
                        activeDeck: null,
                        activeDeckModified: !1,
                        selectMode: null
                    }
                }

                get activeDeck$() {
                    return this._activeDeck.asObservable()
                }

                get userDecks$() {
                    return this._userDecks.asObservable()
                }

                get starterDecks$() {
                    return this._starterDecks.asObservable()
                }

                get activeDeckChange$() {
                    return this._activeDeckChange.asObservable()
                }

                get deckSelectMode$() {
                    return this._deckSelectMode.asObservable()
                }

                _emitDecks() {
                    this._userDecks.next(Object.assign({}, this.dataStore).userDecks)
                }

                _emitStarterDecks() {
                    this._starterDecks.next(Object.assign({}, this.dataStore).starterDecks)
                }

                _emitActiveDeck(h) {
                    const C = h.type;
                    (C == w.u4.Add || C == w.u4.Remove) && (this.dataStore.activeDeckModified = !0), this._activeDeckChange.next(h)
                }

                loadUserDecks() {
                    return this.loadDecksApi()
                }

                fetchStarterDecks() {
                    (0, v.aj)([this.loadStarterDecksApi(), this.cardsService.inventory$, this.cardsService.protoCards$]).pipe((0, d.h)(([h, C, T]) => Object.keys(C).length > 0 && T.size > 0), (0, u.q)(1), (0, n.b)(([h, C, T]) => (0, i.D)(h).pipe((0, e.U)(K => ({
                        deck: K,
                        protoCards: T,
                        inventory: C
                    })))), (0, e.U)(h => this.convertToDeckStarter(h.deck, h.inventory, h.protoCards)), (0, r.q)(), (0, b.b)(h => {
                        this.dataStore.starterDecks = h, this._emitStarterDecks()
                    }), (0, P.K)(h => (0, t.of)(h))).subscribe()
                }

                loadStarterDecksApi() {
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, S.w)(h => h ? this.deckApi.get("deck") : this.gameApiService.get("/deck?caller=client")), (0, e.U)(h => h.filter(C => C.assets.length > 0)))
                }

                fetchDecks() {
                    (0, v.aj)([this.loadDecksApi(), this.cardsService.inventory$, this.cardsService.protoCards$]).pipe((0, d.h)(([h, C, T]) => Object.keys(C).length > 0 && T.size > 0), (0, u.q)(1), (0, n.b)(([h, C, T]) => (0, i.D)(h).pipe((0, e.U)(K => ({
                        deck: K,
                        protoCards: T,
                        inventory: C
                    })))), (0, e.U)(h => this.convertToDeck(h.deck, h.inventory, h.protoCards)), (0, r.q)(), (0, b.b)(h => {
                        this.dataStore.userDecks = h, h.length && (this.dataStore.activeDeck = h[0], this.selectActiveDeck(this.dataStore.activeDeck)), this._emitDecks()
                    }), (0, P.K)(h => (0, t.of)(h))).subscribe()
                }

                convertToDeck(h, C, T) {
                    let K;
                    return K = "sealed_deck" === h.deck_type ? h.protos.map((ae, me) => ({
                        id: h.ids[me],
                        proto: ae,
                        quality: 5,
                        protoCard: T.get(ae)
                    })) : this.utils.convertIdsToCards(h.ids, C, T), new w.$$(h.id, h.name, h.god, h.deck_type, K)
                }

                convertToDeckStarter(h, C, T) {
                    const K = this.utils.convertIdsToCards(h.assets, C, T),
                        ce = new w.$$(h.id, h.name, h.god, "starter", K);
                    return ce.locked = !0, ce
                }

                createDeck(h) {
                    return this.createDeckApi(h).pipe((0, u.q)(1), (0, b.b)(C => {
                        this.dataStore.userDecks.push(C), this._emitDecks(), this.selectActiveDeck(this.deepCopyDeck(C))
                    }))
                }

                createDeckApi(h) {
                    const C = {
                        id: h.id,
                        name: h.name,
                        god: h.god,
                        timestamp: (new Date).getTime(),
                        ids: h.items.reduce((ce, ae) => ce.concat(ae.id), []),
                        deck_type: "common"
                    }, T = this.authService.getUserId(), K = this.authService.getGameSessionTicket();
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, S.w)(ce => ce ? this.createDeckApiNew(C, T) : this.createDeckApiLegacy(C, T, K)), (0, e.U)(ce => (h.id = ce, h)))
                }

                createDeckApiNew(h, C) {
                    return this.deckApi.post(`user/${C}/deck`, h)
                }

                createDeckApiLegacy(h, C, T) {
                    return this.gameApiService.post(`/account/${C}/deck?session=${T}`, h)
                }

                buildSaveDeckApi() {
                    const h = {
                        id: this.dataStore.activeDeck.id,
                        name: this.dataStore.activeDeck.name,
                        god: this.dataStore.activeDeck.god,
                        timestamp: (new Date).getTime(),
                        deck_type: this.dataStore.activeDeck.deck_type
                    };
                    return Object.assign(Object.assign({}, h), "sealed_deck" === this.dataStore.activeDeck.deck_type ? {
                        ids: this.dataStore.activeDeck.items.reduce((C, T) => C.concat(T.id), []),
                        protos: this.dataStore.activeDeck.items.reduce((C, T) => C.concat(T.proto), [])
                    } : {ids: this.dataStore.activeDeck.items.reduce((C, T) => C.concat(T.id), [])})
                }

                saveActiveDeck(h) {
                    if (!this.dataStore.activeDeckModified) return (0, t.of)(this.dataStore.activeDeck.id);
                    const C = this.buildSaveDeckApi(), T = this.authService.getUserId(),
                        K = this.authService.getGameSessionTicket();
                    if ("starter" !== this.dataStore.activeDeck.deck_type) return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, S.w)(ce => ce ? this.deckApi.put(`user/${T}/deck/${this.dataStore.activeDeck.id}`, C) : this.gameApiService.put(`/account/${T}/deck/${this.dataStore.activeDeck.id}?session=${K}`, C)), (0, u.q)(1), (0, b.b)(() => {
                        this.dataStore.activeDeckModified = !1;
                        const ce = this.dataStore.userDecks.find(me => me.id === this.dataStore.activeDeck.id),
                            ae = this.dataStore.userDecks.indexOf(ce);
                        this.dataStore.userDecks[ae] = this.deepCopyDeck(this.dataStore.activeDeck), this._emitDecks()
                    }));
                    if ("starter" === this.dataStore.activeDeck.deck_type) {
                        const ce = this.dataStore.starterDecks.find(ae => ae.id === this.dataStore.activeDeck.id);
                        return h && !this.decksChanged(ce, this.dataStore.activeDeck) ? (this.selectActiveDeck(ce), (0, t.of)(ce.id)) : (C.name = `${C.name} Copy`, this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, S.w)(ae => ae ? this.createDeckApiNew(C, T) : this.createDeckApiLegacy(C, T, K)), (0, u.q)(1), (0, b.b)(ae => {
                            this.dataStore.activeDeckModified = !1;
                            const me = new w.$$(ae, C.name, C.god, "common", [...this.dataStore.activeDeck.items]);
                            this.dataStore.userDecks.push(me), this._emitDecks(), this.selectActiveDeck(me)
                        })))
                    }
                }

                decksChanged(h, C) {
                    if (h.items.length !== C.items.length) return !0;
                    let T = !1;
                    return h.items.forEach((K, ce) => {
                        K.id !== C.items[ce].id && (T = !0)
                    }), !!T
                }

                deleteDeck(h) {
                    this.deleteDeckApi(h).pipe((0, u.q)(1), (0, b.b)(C => {
                        this.dataStore.userDecks = this.dataStore.userDecks.filter(T => T.id !== h), this._emitDecks(), this.selectActiveDeck(null)
                    }), (0, P.K)(C => (0, t.of)(C))).subscribe()
                }

                deleteDeckApi(h) {
                    const C = this.authService.getUserId(), T = this.authService.getGameSessionTicket();
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, S.w)(K => K ? this.deckApi.delete(`user/${C}/deck/${h}`) : this.gameApiService.delete(`/account/${C}/deck/${h}?session=${T}`)))
                }

                loadDecksApi() {
                    const h = this.authService.getUserId();
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, S.w)(C => C ? this.deckApi.get(`user/${h}/deck`) : this.loadDecksApiLegacy(h)))
                }

                loadDecksApiLegacy(h) {
                    return this.gameApiService.get(`/account/${h}/deck`)
                }

                getDeckApi(h) {
                    const C = this.authService.getUserId();
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, S.w)(T => T ? this.deckApi.get(`user/${C}/deck/${h}`) : this.gameApiService.get(`/account/${C}/deck/${h}`)))
                }

                isDeckComplete(h) {
                    return h.global ? (0, t.of)(!0) : this.getDeckApi(h.id).pipe((0, e.U)(C => C && C.ids && C.ids.length === this.deckSizeLimit), (0, P.K)(C => (0, t.of)(!1)))
                }

                updateDeckSelectMode(h, C, T) {
                    this.dataStore.selectMode = new w.VY(h, C, T), this._deckSelectMode.next(Object.assign({}, this.dataStore).selectMode)
                }

                selectActiveDeck(h) {
                    this.dataStore.activeDeck = this.deepCopyDeck(h), this._emitActiveDeck(new w.ZW(Object.assign({}, this.dataStore).activeDeck, w.u4.Change))
                }

                selectActiveDeckById(h) {
                    const C = this.dataStore.userDecks.find(T => T.id === h);
                    !C || (this.dataStore.activeDeck = this.deepCopyDeck(C), this._emitActiveDeck(new w.ZW(Object.assign({}, this.dataStore).activeDeck, w.u4.Change)))
                }

                deepCopyDeck(h) {
                    return new w.$$(h.id, h.name, h.god, h.deck_type, [...h.items])
                }

                removeDeck(h) {
                    this.deleteDeck(h.id), h === this.dataStore.activeDeck && (this.dataStore.activeDeck = null, this._emitActiveDeck(new w.ZW(null, w.u4.NoActiveDeck))), this.dataStore.userDecks = this.dataStore.userDecks.filter(C => C !== h), this._emitDecks()
                }

                selectDeck(h, C) {
                }

                updateActiveDeckName(h) {
                    !this.dataStore.activeDeck || (this.dataStore.activeDeck.name = h, this.dataStore.activeDeckModified = !0, this.saveActiveDeck().pipe((0, u.q)(1)).subscribe())
                }

                getDeck(h) {
                    return this.userDecks$.pipe((0, e.U)(C => C.find(T => T.id === h)))
                }

                pushToActiveDeck(h) {
                    if (this.dataStore.activeDeck.items.length < this.deckSizeLimit && h?.id) {
                        localStorage.setItem('deck-last-card-added-' + this.dataStore.activeDeck.id, h.id);
                    }
                    this.dataStore.activeDeck.items.length >= this.deckSizeLimit ? this._emitActiveDeck(new w.ZW(Object.assign({}, this.dataStore).activeDeck, w.u4.DeckLimit)) : this.canAddCardToDeck(this.dataStore.activeDeck, h).pipe((0, b.b)(C => {
                        C ? (this.dataStore.activeDeck.items = this.dataStore.activeDeck.items.concat([h]), this._emitActiveDeck(new w.ZW(Object.assign({}, this.dataStore).activeDeck, w.u4.Add, [h]))) : this._activeDeckChange.next(new w.ZW(Object.assign({}, this.dataStore).activeDeck, w.u4.CardLimit, [h]))
                    })).subscribe()
                }

                removeCardFromActiveDeck(h) {
                    localStorage.removeItem('deck-last-card-added-' + this.dataStore.activeDeck.id);
                    this.dataStore.activeDeck.items = this.dataStore.activeDeck.items.filter(C => C !== h), this._emitActiveDeck(new w.ZW(Object.assign({}, this.dataStore).activeDeck, w.u4.Remove, [h]))
                }

                removeCardsFromActiveDeck(h) {
                    localStorage.removeItem('deck-last-card-added-' + this.dataStore.activeDeck.id);
                    this.dataStore.activeDeck.items = this.dataStore.activeDeck.items.filter(C => !h.includes(C)), this._emitActiveDeck(new w.ZW(Object.assign({}, this.dataStore).activeDeck, w.u4.Remove, [...h]))
                }

                canAddCardToDeck(h, C) {
                    return "sealed_deck" === h.deck_type ? (0, t.of)(!0) : this.cardsService.getProtoCard(C.proto).pipe((0, e.U)(T => (T.god === h.god || "neutral" === T.god) && ("legendary" === T.rarity ? h.items.filter(K => K.proto === C.proto).length < 1 : h.items.filter(K => K.proto === C.proto).length < 2)))
                }

                forgeUpdate(h, C, T) {
                    this.forgeRemoveIds(h, C), this._emitDecks()
                }

                forgeRemoveIds(h, C) {
                    this.dataStore.userDecks.forEach(T => {
                        T.items = T.items.filter(K => -1 === h.indexOf(K.id))
                    })
                }

                generateUniqueCardId(h, C, T) {
                    return -Number(`${h}${C}${T}`)
                }
            }

            return M.\u0275fac = function (h) {
                return new (h || M)(x.LFG($.F), x.LFG(I.Ft), x.LFG(I.fN), x.LFG(l.mI), x.LFG(I.dK), x.LFG(I.ai))
            }, M.\u0275prov = x.Yz7({token: M, factory: M.\u0275fac}), M
        })()
    }, 23569: (se, U, s) => {
        "use strict";
        s.d(U, {d: () => n});
        var l = s(8929), a = s(591), v = s(92198), i = s(24850), t = s(73307), d = s(5e3);
        s(63411);
        let n = (() => {
            class e {
                constructor(b, P) {
                    this.storage = b, this.authService = P, this.unsubscribe = new l.xQ, this.dataStore = {selectedWallet: null}, this._selectedWallet$ = new a.X(null)
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get selectedWallet$() {
                    return this._selectedWallet$.asObservable()
                }

                get playerWallets$() {
                    return this.authService.account$.pipe((0, v.h)(b => !!b), (0, i.U)(b => b.addresses.map(P => P.address)))
                }

                get storageKey() {
                    return `gu-selected-wallet-${this.authService.getUserId()}`
                }

                fetchPlayerWallets() {
                    this.authService.fetchAccount()
                }

                obfuscateAddresses(b) {
                    if (b && 0 !== b.length) return b.map(P => `${P && P.slice(0, 6)}...`)
                }

                saveSelectedWallet(b) {
                    this.storage.set([this.storageKey], b), this.dataStore.selectedWallet = b, this._selectedWallet$.next(Object.assign({}, this.dataStore).selectedWallet)
                }

                loadSelectedWallet() {
                    const b = this.storage.get([this.storageKey]);
                    this.dataStore.selectedWallet = b, this._selectedWallet$.next(Object.assign({}, this.dataStore).selectedWallet)
                }
            }

            return e.\u0275fac = function (b) {
                return new (b || e)(d.LFG(t.qy), d.LFG(t.mI))
            }, e.\u0275prov = d.Yz7({token: e, factory: e.\u0275fac, providedIn: "root"}), e
        })()
    }, 11130: (se, U, s) => {
        "use strict";
        s.d(U, {xV: () => ue});
        var l = s(8929), a = s(591), v = s(21086), i = s(36053), t = s(98723), d = s(41746), u = s(72986), n = s(92198),
            e = s(2994), r = s(24850), b = s(7625), P = s(61709), S = s(87545), I = s(75778), w = s(40537),
            x = s(73307), $ = s(33403), O = s(14618), y = s(69931), M = s(72224), o = s(5e3), h = s(79763),
            C = s(69340), T = s(55195), K = s(51395), ce = s(64523), ae = s(96727);
        s(63411);

        class Y {
            constructor(Ce, H, Z) {
                this.name = Ce, this.value = H, this.image = Z
            }
        }

        let ue = (() => {
            class oe {
                constructor(H, Z, de, xe, be, W, he, J) {
                    this.gameService = H, this.gameDownloadService = Z, this.storage = de, this.gameApi = xe, this.authService = be, this.packService = W, this.sealedService = he, this.ngrxStore = J, this.BUFFER_TIME = 5e3, this.unsubscribe = new l.xQ, this.dataStore = {gameModes: []}, this._gameModes$ = new a.X({
                        gameModes: [],
                        refresh: !1
                    }), this.watchForUpdate(), this.watchForAssetUpdate(), this.watchForPacks()
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get gameModes$() {
                    return this._gameModes$.asObservable()
                }

                updateGameModeDeck(H, Z, de = !1) {
                    this.getGameMode$(H).pipe((0, u.q)(1), (0, n.h)(xe => void 0 !== xe), (0, e.b)(xe => {
                        this.saveGameModeDeck(xe.id, de, Z), de ? xe.aiSelectedDeckId = Z : xe.lastSelectedDeckId = Z, this._emitGameModes()
                    })).subscribe()
                }

                updateGameModeLoadout(H, Z) {
                    this.getGameMode$(H).pipe((0, u.q)(1), (0, n.h)(de => void 0 !== de), (0, e.b)(de => {
                        this.saveGameModeLoadout(de.id, Z), de.selectedLoadoutId = Z, this._emitGameModes()
                    })).subscribe()
                }

                getGameStats(H) {
                    return (0, v.of)({
                        game_mode_id: 1,
                        p1_id: 49,
                        p2_id: 2,
                        did_win: !0,
                        p1_stats: [new Y("Wins", 103, "https://images.godsunchained.com/art/250/88.png"), new Y("Losses", 8, "https://images.godsunchained.com/art/250/89.png"), new Y("Damage Dealt", 7300, "https://images.godsunchained.com/art/250/90.png"), new Y("Damage Taken", 1600, "https://images.godsunchained.com/art/250/91.png")],
                        p2_stats: [new Y("Wins", 9001, "https://images.godsunchained.com/art/250/88.png"), new Y("Losses", 0, "https://images.godsunchained.com/art/250/89.png"), new Y("Damage Dealt", 999999, "https://images.godsunchained.com/art/250/90.png"), new Y("Damage Taken", 0, "https://images.godsunchained.com/art/250/91.png")]
                    })
                }

                getGameModeDeck(H, Z) {
                    const de = this.getGameModeDeckKey(H, Z);
                    return this.storage.get([de]) || null
                }

                clearGameModeDeck(H, Z) {
                    const de = this.getGameModeDeckKey(H, Z);
                    this.storage.delete([de])
                }

                saveGameModeDeck(H, Z, de) {
                    const xe = this.getGameModeDeckKey(H, Z);
                    this.storage.set([xe], de)
                }

                getGameModeDeckKey(H, Z) {
                    return `gu-deck-${H}${Z ? "-ai" : ""}`
                }

                getGameModeLoadout(H) {
                    const Z = this.getGameModeLoadoutKey(H);
                    return this.storage.get([Z]) || null
                }

                saveGameModeLoadout(H, Z) {
                    const de = this.getGameModeLoadoutKey(H);
                    this.storage.set([de], Z)
                }

                getGameModeLoadoutKey(H) {
                    return `gu-loadout-${H}`
                }

                _emitGameModes(H = !1) {
                    this._gameModes$.next({gameModes: Object.assign({}, this.dataStore).gameModes, refresh: H})
                }

                getGameMode$(H) {
                    return this.gameModes$.pipe((0, r.U)(({gameModes: Z}) => Z.find(de => de.id === H)))
                }

                fetchGameModes(H = !1) {
                    (0, i.aj)([this.fetchPlayerGameModes$(), this.getLock$(), this.fetchPlayerRanks$()]).pipe((0, u.q)(1), (0, r.U)(([Z, de, xe]) => Z.map(be => this.transformGameModes(be, de, xe))), (0, e.b)(Z => {
                        for (const gm of Z) {
                          if (gm.id === 0) { // Solo
                              gm.image_url = 'https://images.godsunchained.com/art2/1280/1492.jpg';
                          }
                          if (gm.id === 101) { // Tutorial
                              gm.image_url = 'https://images.godsunchained.com/art2/1280/1547.jpg';
                          }
                          if (gm.id === 6) { // Direct Challenge
                              gm.image_url = 'https://images.godsunchained.com/art2/1280/1600.jpg';
                          }
                          if (gm.id === 13) { // Rank Constructed
                              gm.image_url = 'https://images.godsunchained.com/art2/1280/101305.jpg';
                          }
                        }
                        this.scheduleRefresh(Z), this.handleSealedMode(Z), this.dataStore.gameModes = Z, this._emitGameModes(H)
                    })).subscribe()
                }

                handleSealedMode(H) {
                    let Z = H.find(de => de.id === $.B_.SEALED_DECK);
                    !Z || this.scheduleSealedModeRefresh(Z)
                }

                scheduleSealedModeRefresh(H) {
                    const Z = Date.now(), de = new Date(H.end_time_server).getTime(), be = de + 36e5 - Z, W = de - Z;
                    W > 0 && W < M.v && (0, t.H)(W).pipe((0, b.R)(this.unsubscribe), (0, u.q)(1)).subscribe(he => this.sealedService.fetchSealed()), be > 0 && be < M.v && (0, t.H)(be).pipe((0, b.R)(this.unsubscribe), (0, u.q)(1)).subscribe(he => this.sealedService.fetchSealed())
                }

                mockSealedMode() {
                    return {
                        id: 7,
                        name: "Sealed Deck",
                        description: "Love Seals? Try Sealed Mode.",
                        required_level: 0,
                        properties: {
                            type: 8,
                            start_time: "2020-11-10 12:00:00.556238+00",
                            entry_cutoff: "2020-11-10 08:00:00.556238+00",
                            max_losses: 3,
                            max_wins: 9,
                            entry_cost: 100
                        },
                        ranked: !1,
                        order: 6,
                        end_time: "2020-11-18T12:00:00.556238Z",
                        end_timestamp: 1605700805556,
                        image_url: "/assets/images/misc-art/misc-art--C8-026.webp",
                        paid: !1,
                        rotation: 0,
                        rank: null,
                        lock: null,
                        type: 8,
                        lastSelectedDeckId: 133713371337,
                        aiSelectedDeckId: null,
                        selectedLoadoutId: null
                    }
                }

                fetchPlayerGameModes$() {
                    const H = this.authService.getUserId();
                    return this.gameApi.get(`/user/${H}/mode`)
                }

                fetchPlayerRanks$() {
                    const H = this.authService.getUserId();
                    return this.gameApi.get(`/user/${H}/rank`)
                }

                getLock$() {
                    let H = null;
                    return (0, i.aj)([this.gameService.currentGameContext$, this.packService.unopenedPacks$, (0, t.H)(0, 6e5)]).pipe((0, n.h)(([Z, de]) => null != Z), (0, P.VS)(([Z, de]) => {
                        if (H = null, de) {
                            const xe = de.filter(be => "starter" === be.pack_source);
                            xe && xe.length > 0 && (H = {type: $.Gn.CARDS})
                        }
                        return (0, v.of)(Z)
                    }), (0, P.VS)(Z => (0, d.$R)((0, v.of)(Z), this.gameService.getBranch$(Z.id))), (0, P.VS)(([Z, de]) => "" === de.name ? (H = {type: $.Gn.LOCKED}, (0, v.of)([!1, !1])) : (0, d.$R)(this.gameDownloadService.requiresUpdate(Z, de.name), this.gameDownloadService.requiresAssetsUpdate(Z, de.name))), (0, P.VS)(([Z, de]) => (Z ? H = {type: $.Gn.UPDATE} : de.length > 0 && (H = {type: $.Gn.ASSETS_UPDATE}), (0, v.of)(H))))
                }

                checkIfRequiresUpdate() {
                    return this.gameService.currentGameContext$.pipe((0, S.w)(H => (0, d.$R)((0, v.of)(H), this.gameService.getBranch(H.id))), (0, S.w)(([H, Z]) => this.gameDownloadService.requiresUpdate(H, Z)))
                }

                watchForUpdate() {
                    this.ngrxStore.select((0, y.DM)()).pipe((0, b.R)(this.unsubscribe), (0, n.h)(H => !!H), (0, n.h)(H => "completed" === H.status), (0, I.x)(), (0, e.b)(H => {
                        this.updateLocks(!0), this.ngrxStore.dispatch(new O.Tg({status: "idle", percentage: 0}))
                    })).subscribe()
                }

                watchForAssetUpdate() {
                    this.ngrxStore.select((0, y.gP)()).pipe((0, b.R)(this.unsubscribe), (0, n.h)(H => !!H), (0, n.h)(H => "completed" === H.status), (0, I.x)(), (0, e.b)(H => {
                        this.updateLocks(!0)
                    })).subscribe()
                }

                watchForPacks() {
                    this.packService.unopenedPacks$.pipe((0, b.R)(this.unsubscribe), (0, I.x)(), (0, e.b)(H => this.updateLocks())).subscribe()
                }

                updateLocks(H = !1) {
                    this.getLock$().pipe((0, u.q)(1), (0, e.b)(Z => {
                        this.dataStore.gameModes.forEach(de => {
                            de.lock = Z
                        })
                    }), (0, w.x)(() => this._emitGameModes(H))).subscribe()
                }

                transformGameModes(H, Z, de) {
                    const xe = de.find(W => W.game_mode === H.id) || null;
                    let be = Object.assign(Object.assign({}, H), {
                        rank: xe,
                        lock: Z,
                        type: H.properties.type,
                        lastSelectedDeckId: this.getGameModeDeck(H.id, !1),
                        aiSelectedDeckId: this.getGameModeDeck(H.id, !0),
                        end_timestamp: Date.parse(H.end_time) + 5e3,
                        selectedLoadoutId: this.getGameModeLoadout(H.id)
                    });
                    return be.id === $.B_.SEALED_DECK && (be = this.sealedService.transformSealedModeGameModeData(be)), be
                }

                scheduleRefresh(H = []) {
                    const Z = Date.now(), de = H.filter(W => 1 === W.rotation && W.end_timestamp > Z);
                    if (0 === de.length) return;
                    const be = de.reduce((W, he) => W.end_timestamp < he.end_timestamp ? W : he).end_timestamp - Z;
                    be > 0 && be < M.v && (0, t.H)(be).pipe((0, b.R)(this.unsubscribe), (0, u.q)(1), (0, e.b)(W => this.fetchGameModes(!0))).subscribe()
                }

                storeUserGameModeOrderMap(H) {
                    const Z = this.authService.getUserId();
                    sessionStorage.setItem(`userGameModesOrder::${Z}`, JSON.stringify(H))
                }

                getUserGameModeOrderMap() {
                    const H = this.authService.getUserId();
                    return JSON.parse(sessionStorage.getItem(`userGameModesOrder::${H}`))
                }

                incrementGameModeCount(H, Z = 1) {
                    const de = this.authService.getUserId(), xe = this.authService.getGameSessionTicket();
                    return this.gameApi.post(`/user/${de}/mode?session=${xe}`, {game_mode: H, add: Z})
                }
            }

            return oe.\u0275fac = function (H) {
                return new (H || oe)(o.LFG(h.hM), o.LFG(C.b5), o.LFG(x.qy), o.LFG(T.Ft), o.LFG(x.mI), o.LFG(K.F), o.LFG(ce.H), o.LFG(ae.yh))
            }, oe.\u0275prov = o.Yz7({token: oe, factory: oe.\u0275fac, providedIn: "root"}), oe
        })()
    }, 88632: (se, U, s) => {
        "use strict";
        s.d(U, {MZ: () => r});
        var l = s(591), a = s(2994), v = s(73307), i = s(5e3), t = s(55195), d = s(79763);
        s(63411);
        let r = (() => {
            class b {
                constructor(S, I, w) {
                    this.gameApi = S, this.authService = I, this.gameService = w, this.dataStore = {extendedAccountProperties: null}, this._extendedAccountProperties$ = new l.X(null)
                }

                get extendedAccountProperties$() {
                    return this._extendedAccountProperties$.asObservable()
                }

                getAccountProperties(S, I) {
                    return (!S || !I) && (S = this.authService.getUserId(), I = this.authService.getGameSessionTicket()), this.gameApi.get(`/account/${S}/properties?session=${I}`)
                }

                _emit(S) {
                    this.dataStore.extendedAccountProperties = S, this._extendedAccountProperties$.next(Object.assign({}, this.dataStore).extendedAccountProperties)
                }

                getExtendedAccountPropertiesById(S, I) {
                    return this.gameApi.get(`/account/${S}/properties?format=extended&session=${I}`).pipe((0, a.b)(w => this._emit(w)))
                }

                getExtendedAccountProperties() {
                    const S = this.authService.getUserId(), I = this.authService.getGameSessionTicket();
                    return this.getExtendedAccountPropertiesById(S, I)
                }

                fetchExtendedAccount() {
                    this.getExtendedAccountProperties().subscribe()
                }
            }

            return b.\u0275fac = function (S) {
                return new (S || b)(i.LFG(t.Ft), i.LFG(v.mI), i.LFG(d.hM))
            }, b.\u0275prov = i.Yz7({token: b, factory: b.\u0275fac, providedIn: "root"}), b
        })()
    }, 8561: (se, U, s) => {
        "use strict";
        s.d(U, {GT: () => At, OC: () => B, Qc: () => Ie});
        var l = s(59633), a = s(8929), v = s(591), i = s(21086), t = s(61737), d = s(98723), u = s(67876), n = s(7625),
            e = s(24850), r = s(87224), b = s(92198), P = s(87168), S = s(27221), I = s(2994), w = s(72986),
            x = s(61709), $ = s(87545), O = s(77604), y = s(44290), M = s(40537), o = s(73307), h = s(63764),
            C = s(52492), T = s(33403), K = s(5231), ce = s(80537), ae = s(8611), me = s(5e3), G = s(40520);
        s(63411);
        let ue = (() => {
            class Pe {
                constructor(ee) {
                    this.auth = ee, this.createServer()
                }

                respond(ee, ne) {
                    return -1 !== ee.url.indexOf("config") ? this.getConfig(ee, ne) : ee.url.startsWith("/session") ? this.auth.getGameSessionTicket() : null
                }

                setConfig(ee) {
                    this.config = ee
                }

                getConfig(ee, ne) {
                    return this.config
                }

                serverActive() {
                    return !(!window.bridge || !window.bridge.serverActive) && window.bridge.serverActive()
                }

                createServer() {
                    !window.bridge || !window.bridge.createServer || window.bridge.createServer(49011, this.respond.bind(this))
                }

                closeServer() {
                    !window.bridge || !window.bridge.closeServer || window.bridge.closeServer()
                }
            }

            return Pe.\u0275fac = function (ee) {
                return new (ee || Pe)(me.LFG(o.mI))
            }, Pe.\u0275prov = me.Yz7({token: Pe, factory: Pe.\u0275fac, providedIn: "root"}), Pe
        })();
        var oe = s(79763), Ce = s(83035), H = s(88632), Z = s(66088), de = s(47313), xe = s(11130), be = s(55195),
            W = s(98009);

        class Ie {
            constructor($e, ee, ne, _e) {
                this.player = {id: $e, deck: ee, collection: {id: ne}}, this.opponent = _e ? {deck: _e} : void 0
            }
        }

        var B = (() => {
            return (Pe = B || (B = {}))[Pe.OUT = 0] = "OUT", Pe[Pe.IN = 1] = "IN", Pe[Pe.PROGRESSION_GAME_MODE = 2] = "PROGRESSION_GAME_MODE", Pe[Pe.PROGRESSION_ACCOUNT = 3] = "PROGRESSION_ACCOUNT", B;
            var Pe
        })(), rt = (() => {
            return (Pe = rt || (rt = {})).DECK = "deck", Pe.DECK_GLOBAL = "deck_global", Pe.COLLECTION = "collection", rt;
            var Pe
        })();
        let At = (() => {
            class Pe {
                constructor(ee, ne, _e, N, F, c, _, E, te, we, Ne, mt, It) {
                    this.http = ee, this.server = ne, this.gameService = _e, this.queueService = N, this.authService = F, this.guUserService = c, this.modalService = _, this.progressionService = E, this.guGameService = te, this.configService = we, this.audioService = Ne, this.analyticsService = mt, this.deckService = It, this.numActiveQueues = 0, this.unsubscribe = new a.xQ, this.dataStore = {currentMatchId: null}, this._currentMatchId$ = new v.X(null), this.queueAcknowledge$ = new a.xQ, this.clientServerPongReceived$ = new a.xQ, this._playing$ = new v.X({status: B.OUT}), this.watchQueues(), window.bridge.onQuit(() => {
                        this.queueService.getGameQueues(1).subscribe(Qe => {
                            this.trySendingCancelReq(Qe.mode.id, Qe.params.player.id)
                        })
                    }), this.configService.loadConfigurations().pipe((0, n.R)(this.unsubscribe)).subscribe(Qe => {
                        this.master = {
                            host: Qe.matchmakingHost,
                            port: Qe.matchmakingPort,
                            password: ""
                        }, this.connectClient()
                    }), this.gameService.getBranch$(1).pipe((0, n.R)(this.unsubscribe)).subscribe(Qe => {
                        this.branch = Qe
                    }), this.queueService.getGameQueues(1).subscribe(Qe => {
                        switch (Qe.status) {
                            case"completed":
                                this.completeQueue(Qe);
                                break;
                            case"cancelled":
                                this.trySendingCancelReq(Qe.mode.id, Qe.params.player.id)
                        }
                    })
                }

                ngOnDestroy() {
                    this.client && this.client.destroy && this.client.destroy(), this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get currentMatchId$() {
                    return this._currentMatchId$.asObservable()
                }

                watchQueues() {
                    this.queueService.activeQueues$.pipe((0, n.R)(this.unsubscribe), (0, e.U)(ee => ee ? ee.length : 0)).subscribe(ee => this.numActiveQueues = ee)
                }

                buildOpponent(ee) {
                    let ne = {};
                    const _e = ee.opponent_attributes.find(c => c.type === rt.COLLECTION),
                        N = ee.opponent_attributes.find(c => c.type === rt.DECK),
                        F = ee.opponent_attributes.find(c => c.type === rt.DECK_GLOBAL);
                    return _e && (ne = Object.assign(Object.assign({}, ne), {collection: {id: _e.value}})), N && (ne = Object.assign(Object.assign({}, ne), {
                        deck: {
                            id: N.value,
                            global: !1
                        }
                    })), F && (ne = Object.assign(Object.assign({}, ne), {deck: Object.assign(Object.assign({}, ne.deck), {global: 1 === F.value})})), ne
                }

                handleQueueResponse() {
                    this.client.on(21, ee => {
                        const ne = this.tryParseJson(ee), _e = this.buildOpponent(ne);
                        ne.game_mode === T.B_.SERVER_SOLO && (_e.id = 0), this.queueService.getQueue(1, ne.game_mode).pipe((0, r.P)(), (0, b.h)(N => "active" === N.status), (0, P.M)(this.gameService.getBranch$(1)), (0, S.K)(N => (console.error("playService->handleQueueResponse() error getting queue", N), (0, i.of)([null, null])))).subscribe(([N, F]) => {
                            N && (this.queueService.complete(N), ne.success && (this.dataStore.currentMatchId = ne.match_id, this._currentMatchId$.next(this.dataStore.currentMatchId), this.play({
                                realm: F.id,
                                mode: N.mode.id,
                                player: N.params.player,
                                match_id: ne.match_id,
                                opponent: _e,
                                server: {host: ne.location.host, port: ne.location.port, password: ne.match_pwd}
                            })))
                        })
                    })
                }

                handleQueueAck() {
                    this.client.on(30, ee => {
                        const ne = this.tryParseJson(ee);
                        this.queueAcknowledge$.next(!0), ne.success || (this.guGameService.fetchGameModes(!0), this.queueService.getQueue(1, ne.game_mode).pipe((0, r.P)()).subscribe(_e => this.queueService.cancel(_e)), "bot" === ne.reason ? this.modalService.createModal(ae.n, {}, {
                            blurredBackground: !0,
                            canCloseFromInside: !1,
                            position: C.e1.Center,
                            size: C.Cg.StretchableWorkarea
                        }) : this.showInfoModal("Unable to Queue", "captcha" === ne.reason ? ce.k.CODE_10 : ce.k.CODE_4))
                    })
                }

                handleQueuePing() {
                    this.client.on(35, ee => {
                        const ne = this.tryParseJson(ee);
                        !ne || !ne.game_mode || this.queueService.getQueue(1, ne.game_mode).pipe((0, r.P)(_e => "active" === _e.status), (0, I.b)(() => {
                            const _e = Object.assign(Object.assign({}, ne), {realm: this.branch.name});
                            this.trySendingSocketMsg(36, _e)
                        })).subscribe()
                    })
                }

                handleServerClientPing() {
                    this.client.on(8, () => {
                        this.trySendingSocketMsg(9, {})
                    })
                }

                handleClientServerPong() {
                    this.client.on(7, () => {
                        this.clientServerPongReceived$.next(!0)
                    })
                }

                handleCancelResponse() {
                    this.client.on(23, ee => {
                        this.tryParseJson(ee)
                    })
                }

                handleRestartRequest() {
                    this.client.on(40, ee => {
                        this.modalService.createModal(K.s, {
                            title: "Client Updated",
                            message: "Your client has been updated, please reload to continue.",
                            okButtonText: "RELOAD",
                            onOk: () => location.reload()
                        }, {
                            canCloseFromOutside: !1,
                            position: C.e1.Center,
                            size: C.Cg.StretchableFullscreen,
                            blurredBackground: !0
                        })
                    })
                }

                connectClient() {
                    if (this.client && this.client.destroy) try {
                        this.client.destroy()
                    } catch (ee) {
                        console.error("playService->connectClient() unable to destroy client.", ee)
                    }
                    this.client = window.bridge.createClient(this.master.host, this.master.port), this.handleQueueResponse(), this.handleQueueAck(), this.handleQueuePing(), this.handleCancelResponse(), this.handleRestartRequest(), this.handleServerClientPing(), this.handleClientServerPong()
                }

                tryParseJson(ee) {
                    let ne;
                    try {
                        ne = JSON.parse(ee)
                    } catch (_e) {
                        console.error("PlayServer->handleQueuePing error parsing message", _e, ee)
                    }
                    return ne
                }

                buildAttributes(ee) {
                    let ne = [];
                    return ee.player && ee.player.collection && (ne = [...ne, {
                        type: rt.COLLECTION,
                        value: ee.player.collection.id
                    }]), ee.opponent && ee.opponent.deck && (ne = [...ne, {
                        type: rt.DECK,
                        value: ee.opponent.deck.id
                    }], ne = [...ne, {type: rt.DECK_GLOBAL, value: ee.opponent.deck.global ? 1 : 0}]), ne
                }

                buildQueueMessage(ee, ne, _e, N, F, c, _) {
                    return {
                        id: ne,
                        realm: c,
                        deck_id: _e,
                        deck_global: N,
                        token: "",
                        game_mode: ee.id,
                        attributes: F,
                        private_match_password: _
                    }
                }

                start(ee, ne, _e, N) {
                    const F = this.buildQueueMessage(ee, ne, _e.player.deck.id, _e.player.deck.global, this.buildAttributes(_e), this.branch.name, N);
                    return this.numActiveQueues > 0 ? (0, t._)(ce.k.CODE_0) : this.client.socketConnected ? this.deckService.isDeckComplete(_e.player.deck).pipe((0, w.q)(1), (0, x.VS)(c => c ? this.clientServerPong(ee, F, ne, _e) : (this.deckService.fetchDecks(), (0, t._)(ce.k.CODE_11)))) : (this.connectClient(), (0, t._)(ce.k.CODE_1))
                }

                clientServerPong(ee, ne, _e, N) {
                    return this.clientServerPongReceived$.next(!1), this.trySendingSocketMsg(6, ne) ? ((0, d.H)(3e3).subscribe(() => {
                        this.clientServerPongReceived$.next(!1)
                    }), this.clientServerPongReceived$.pipe((0, w.q)(1), (0, x.VS)(c => c ? this.startQueueReq$(ee, ne, _e, N) : (console.log("playService->start() cannot queue, did not receive CLIENT_SERVER_PONG within 3000ms"), this.connectClient(), (0, t._)(ce.k.CODE_9))))) : (this.connectClient(), (0, t._)(ce.k.CODE_8))
                }

                startQueueReq$(ee, ne, _e, N) {
                    return this.queueAcknowledge$.next(!1), this.trySendingQueueReq(ne) ? ((0, d.H)(3e3).subscribe(() => {
                        this.queueAcknowledge$.next(!1)
                    }), this.queueAcknowledge$.pipe((0, w.q)(1), (0, x.VS)(c => c ? this.queueService.start(1, ee, N) : (console.log("playService->startQueueReq$() cannot queue, did not receive ACK message from server within 3000ms"), this.connectClient(), (0, t._)(ce.k.CODE_3))))) : (console.log("playService->startQueueReq$() cannot queue, unable to send queue request message"), this.connectClient(), (0, t._)(ce.k.CODE_2))
                }

                trySendingSocketMsg(ee, ne) {
                    console.log("playService->trySendingSocketMsg()", this.socketMsgName(ee), ne);
                    try {
                        return this.client.send(ee, ne), !0
                    } catch (_e) {
                        return console.error("playService->trySendingSocketMsg() failed", _e), !1
                    }
                }

                trySendingQueueReq(ee) {
                    return this.trySendingSocketMsg(20, ee)
                }

                trySendingCancelReq(ee, ne) {
                    return this.trySendingSocketMsg(22, {game_mode: ee, id: ne, realm: this.branch.name})
                }

                completeQueue(ee) {
                }

                get playing$() {
                    return this._playing$.asObservable()
                }

                setPlaying(ee, ne) {
                    this._playing$.next({status: ee, gameModeId: ne})
                }

                buildArgs(ee) {
                    let ne = ["-realm", `${ee.realm}`, "-user-id", `${ee.player.id}`, "-sessionTicket", this.authService.getGameSessionTicket(), "-sessionConfig", JSON.stringify(ee)];
                    return ee.match_id && (ne = [...ne, "-game-id", `${ee.match_id}`]), ne
                }

                play(ee) {
                    this.server.serverActive() || (this.server.closeServer(), this.server.createServer()), console.log(JSON.stringify(ee)), this.server.setConfig(ee), this.modalService.destroyModalsStack(), this.setPlaying(B.IN, ee.mode);
                    const ne = this.buildArgs(ee);
                    this.gameService.currentGameContext$.pipe((0, w.q)(1), (0, $.w)(_e => this.gameService.play(_e, ne)), (0, $.w)(_e => (0, d.H)(2e3, 2e3).pipe((0, O.h)(_e), (0, y.o)(() => window.bridge.isRunning(_e.process.pid)))), (0, M.x)(() => {
                        window.bridge.focus(), this.audioService.returnToLauncher.play(), ee.mode === T.B_.SOLO && this.logGameCompleted(ee.mode, "Solo"), ee.mode === T.B_.DIRECT_CHALLENGE && this.logGameCompleted(ee.mode, "Direct Challenge", ee.match_id), this.handleProgression(ee.mode)
                    })).subscribe(u.Z, _e => {
                        console.error("playService->play() error starting a game", _e), Object.values(ce.k).includes(_e) ? this.showInfoModal("Unable to start game", _e) : this.showInfoModal("Unable to start game", ce.k.CODE_5)
                    })
                }

                logGameCompleted(ee, ne, _e) {
                    "function" == typeof fbq && fbq("track", "ViewContent"), "function" == typeof gtag && gtag("event", "completed", {
                        event_category: "game",
                        event_label: "user"
                    }), this.analyticsService.postEvent(new l.Game.Completed.Event({
                        game_id: 1,
                        latest_id: _e,
                        mode_id: ee,
                        mode_name: ne
                    }))
                }

                handleProgression(ee) {
                    this.checkWhetherToShowAccountProgress().pipe((0, w.q)(1), (0, I.b)(ne => {
                        this.setPlaying(ne && 0 !== ee ? B.PROGRESSION_ACCOUNT : B.OUT, ee)
                    })).subscribe()
                }

                checkWhetherToShowAccountProgress() {
                    const ee = this.authService.getUserId(),
                        ne = this.progressionService.getStoredAccountProgression(ee);
                    return this.guUserService.getAccountProperties().pipe((0, w.q)(1), (0, e.U)(_e => this.hasProgressed(ne, _e)))
                }

                hasProgressed(ee, ne) {
                    return ee.lvl !== ne.level || ee.xp !== ne.total_xp
                }

                showInfoModal(ee, ne) {
                    this.modalService.createModal(h.S, {title: ee, text: ne}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: C.e1.Center,
                        size: C.Cg.StretchableWorkarea
                    })
                }

                socketMsgName(ee) {
                    switch (ee) {
                        case 6:
                            return "CLIENT_SERVER_PING";
                        case 7:
                            return "CLIENT_SERVER_PONG";
                        case 8:
                            return "SERVER_CLIENT_PING";
                        case 9:
                            return "SERVER_CLIENT_PONG";
                        case 20:
                            return "QUEUE_REQ";
                        case 30:
                            return "QUEUE_ACK";
                        case 21:
                            return "QUEUE_RES";
                        case 35:
                            return "QUEUE_PING";
                        case 36:
                            return "QUEUE_PONG";
                        case 40:
                            return "RESTART_REQ";
                        case 22:
                            return "CANCEL_REQ";
                        case 23:
                            return "CANCEL_RES";
                        default:
                            return "UNKNOWN_MESSAGE"
                    }
                }
            }

            return Pe.\u0275fac = function (ee) {
                return new (ee || Pe)(me.LFG(G.eN), me.LFG(ue), me.LFG(oe.hM), me.LFG(Ce.g), me.LFG(o.mI), me.LFG(H.MZ), me.LFG(Z.Z), me.LFG(de.$z), me.LFG(xe.xV), me.LFG(be.LE), me.LFG(o.pk), me.LFG(be.yD), me.LFG(W.D))
            }, Pe.\u0275prov = me.Yz7({token: Pe, factory: Pe.\u0275fac, providedIn: "root"}), Pe
        })()
    }, 47313: (se, U, s) => {
        "use strict";
        s.d(U, {oW: () => I, $z: () => M});
        var l = s(591), a = s(61737), v = s(72986), i = s(2994), t = s(27221), d = s(24850), u = s(73307), n = s(5e3),
            e = s(55195), r = s(11130);

        class I {
            constructor(h = 0, C = 0, T = 0) {
                this.xp = h, this.xpToNext = C, this.lvl = T
            }
        }

        class O {
            constructor(h, C, T, K, ce, ae) {
                this.game_mode = h, this.rating = C, this.rank_level = T, this.win_points = K, this.loss_points = ce, this.safety_line = ae
            }
        }

        let M = (() => {
            class o {
                constructor(C, T, K) {
                    this.gameApi = C, this.storage = T, this.guGameService = K, this.dataStore = {
                        accountThresholds: [],
                        gameRanks: [],
                        userRankLevels: []
                    }, this._accountThresholds$ = new l.X(Object.assign({}, this.dataStore).accountThresholds), this._gameRanks$ = new l.X(Object.assign({}, this.dataStore).gameRanks), this._userRankLevels$ = new l.X(Object.assign({}, this.dataStore).userRankLevels)
                }

                get accountThresholds$() {
                    return this._accountThresholds$.asObservable()
                }

                get gameRanks$() {
                    return this._gameRanks$.asObservable()
                }

                get userRankLevels$() {
                    return this._userRankLevels$.asObservable()
                }

                isMaxRank(C, T) {
                    return !(!C || !T || 0 === T.length) && C.rank_level === T[T.length - 1].level
                }

                fetchUserRankLevel() {
                    return this.guGameService.fetchPlayerRanks$().pipe((0, v.q)(1), (0, i.b)(C => (this.dataStore.userRankLevels = C, this._userRankLevels$.next([...C]), C))).subscribe()
                }

                fetchUserGameProgression({userId: C, gameModeId: T}) {
                    return this.gameApi.get(`/user/${C}/progression/${T}`).pipe((0, v.q)(1), (0, t.K)(K => (console.error("error during loading of post game progression stats"), (0, a._)(K))))
                }

                fetchGameRanks() {
                    this.gameApi.get("/rank").pipe((0, v.q)(1), (0, i.b)(C => (this.dataStore.gameRanks = C, this._gameRanks$.next([...C]), C)), (0, t.K)(C => (console.error("error during loading game ranks"), console.error(C), C))).subscribe()
                }

                fetchAccountThresholds() {
                    this.gameApi.get("/level_threshold").pipe((0, v.q)(1), (0, i.b)(C => {
                        this.dataStore.accountThresholds = C, this._accountThresholds$.next(Object.assign({}, this.dataStore).accountThresholds)
                    }), (0, t.K)(C => (console.error("error during loading lvl thresholds"), C))).subscribe()
                }

                fetchAccountThresholdsByUserId(C) {
                    this.gameApi.get(`/user/${C}/level_threshold`).pipe((0, v.q)(1), (0, i.b)(T => {
                        this.dataStore.accountThresholds = T, this._accountThresholds$.next(Object.assign({}, this.dataStore).accountThresholds)
                    }), (0, t.K)(T => (console.error("error during loading lvl thresholds"), T))).subscribe()
                }

                storeAccountProgression(C, T) {
                    this.storage.set([`last-progress-${C.toString()}`], T)
                }

                storeRankedProgression(C, T) {
                    this.storage.set([`last-progress-${C.toString()}`], T)
                }

                getStoredAccountProgression(C) {
                    return this.storage.get([`last-progress-${C.toString()}`]) || new I
                }

                storeLastGameId(C, T) {
                    this.storage.set([`last-game-${C.toString()}`], T)
                }

                getStoredLastGameId(C) {
                    return this.storage.get([`last-game-${C.toString()}`]) || ""
                }

                saveRankedProgression(C, T) {
                    this.storage.set([`last-ranked-progress-${C.toString()}`, T.game_mode.toString()], T)
                }

                getStoredRankedProgression(C, T) {
                    const K = this.storage.get([`last-ranked-progress-${C.toString()}`, T.toString()]) || new O(T, 0, 1, 0, 0, 40);
                    return this.dataStore.userRankLevels.push(K), this._userRankLevels$.next([...this.dataStore.userRankLevels]), K
                }

                getRankedProgressions(C) {
                    return this.gameApi.get(`/user/${C}/rank`)
                }

                getRankedProgressionById(C, T) {
                    return this.getRankedProgressions(C).pipe((0, d.U)(K => K.find(ce => ce.game_mode === T)), (0, i.b)(K => (this.saveRankedProgression(C, K), K)))
                }

                calcPercentage(C, T) {
                    const K = this.getLowerBoundaryForLvl(C.lvl, T);
                    return 100 * (C.xp - K) / (C.xp + C.xpToNext - K)
                }

                getLowerBoundaryForLvl(C, T) {
                    const K = T.find(ce => ce.level === C - 1);
                    return K ? K.total_xp : 0
                }
            }

            return o.\u0275fac = function (C) {
                return new (C || o)(n.LFG(e.Ft), n.LFG(u.qy), n.LFG(r.xV))
            }, o.\u0275prov = n.Yz7({token: o, factory: o.\u0275fac}), o
        })()
    }, 64523: (se, U, s) => {
        "use strict";
        s.d(U, {r: () => w, H: () => x});
        var l = s(72224), a = s(73307), v = s(591), i = s(8929), t = s(98723), d = s(72986), u = s(2994), n = s(7625),
            e = s(24850), r = s(33403), b = s(5e3), P = s(55195), S = s(83035), I = s(44416), w = (() => {
                return ($ = w || (w = {}))[$.AVAILABLE = 0] = "AVAILABLE", $[$.WAITING_TO_START = 1] = "WAITING_TO_START", $[$.STARTED = 2] = "STARTED", $[$.REWARDS_AVAILABLE = 3] = "REWARDS_AVAILABLE", $[$.ENDED = 4] = "ENDED", w;
                var $
            })();
        let x = (() => {
            class ${constructor(y,M,o,h){this.gameApi=y,this.authService=M,this.queueService=o,this.utilService=h,this.dataStore={sealedMode:null,sealedModeStatus:w.AVAILABLE}
        ,
            this._sealedMode$ = new v.X(null), this._sealedModeStatus$ = new v.X(this.dataStore.sealedModeStatus), this.unsubscribe = new i.xQ
        }
        get
        sealedMode$()
        {
            return this._sealedMode$.asObservable()
        }
        get
        sealedModeStatus$()
        {
            return this._sealedModeStatus$.asObservable()
        }
        ngOnDestroy()
        {
            this.unsubscribe.next(), this.unsubscribe.complete()
        }
        fetchSealed()
        {
            const y = this.authService.getUserId(), M = this.authService.getGameSessionTicket();
            this.gameApi.get(`/user/${y}/mode/${r.B_.SEALED_DECK}/deck?session=${M}`).pipe((0, d.q)(1)).subscribe(o => {
                this.updateSealedMode(o)
            }, o => {
                this.updateSealedMode(void 0)
            })
        }
        enterSealed$(y)
        {
            const M = this.authService.getUserId(), o = this.authService.getGameSessionTicket();
            return this.gameApi.post(`/user/${M}/mode/${r.B_.SEALED_DECK}/deck?session=${o}`, {god: y}).pipe((0, d.q)(1), (0, u.b)(h => {
                this.updateSealedMode(h)
            }))
        }
        updateSealedMode(y)
        {
            y && (y.game_mode_data = this.transformSealedModeGameModeData(y.game_mode_data)), this.dataStore.sealedMode = y, this._sealedMode$.next(y ? Object.assign({}, this.dataStore.sealedMode) : void 0), this.handleSealedModeStatus(y)
        }
        transformSealedModeGameModeData(y)
        {
            const M = this.utilService.adjustToServerTime(y.end_time_remaining);
            return Object.assign(Object.assign({}, y), {
                end_time_server: M,
                end_timestamp_server: Date.parse(M),
                properties: Object.assign(Object.assign({}, y.properties), {
                    entry_cutoff_server: this.utilService.adjustToServerTime(y.properties.entry_cutoff_remaining),
                    start_time_server: this.utilService.adjustToServerTime(y.properties.start_time_remaining)
                })
            })
        }
        handleSealedModeStatus(y)
        {
            if (y && y.sealed_id) if ("ended" !== y.status) {
                if (!this.areRewardsAvailable(y)) return this.areWaitingToStart(y) ? (this.scheduleRefresh(y.game_mode_data.properties.start_time_server), void this.updateSealedModeStatus(w.WAITING_TO_START)) : (this.scheduleRefresh(y.game_mode_data.end_time_server, this.onSealedEnded.bind(this)), void this.updateSealedModeStatus(w.STARTED));
                this.updateSealedModeStatus(w.REWARDS_AVAILABLE)
            } else this.updateSealedModeStatus(w.ENDED); else this.updateSealedModeStatus(w.AVAILABLE)
        }
        scheduleRefresh(y, M)
        {
            const o = Date.now(), C = new Date(y).getTime() + 1e3 - o;
            C > 0 && C < l.v && (0, t.H)(C).pipe((0, n.R)(this.unsubscribe), (0, d.q)(1)).subscribe(T => {
                this.fetchSealed(), M && M()
            })
        }
        onSealedEnded()
        {
            this.queueService.activeQueues$.pipe((0, d.q)(1), (0, e.U)(y => y.find(M => M.mode.id === r.B_.SEALED_DECK))).subscribe(y => {
                y && this.queueService.cancel(y)
            })
        }
        areRewardsAvailable(y)
        {
            const M = Date.now(), o = new Date(y.game_mode_data.end_time_server).getTime();
            return y.losses >= y.max_losses || y.wins >= y.max_wins || M > o
        }
        areWaitingToStart(y)
        {
            const M = Date.now(), o = new Date(y.game_mode_data.properties.start_time_server).getTime();
            return o && M < o
        }
        updateSealedModeStatus(y)
        {
            this.dataStore.sealedModeStatus = y, this._sealedModeStatus$.next(this.dataStore.sealedModeStatus)
        }
        claimRewards$(y)
        {
            const M = this.authService.getUserId(), o = this.authService.getGameSessionTicket();
            return this.gameApi.put(`/user/${M}/mode/${r.B_.SEALED_DECK}/deck/${y}?session=${o}`, {action: "claim"})
        }
    }return $.\u0275fac = function (y) {
        return new (y || $)(b.LFG(P.Ft), b.LFG(a.mI), b.LFG(S.g), b.LFG(I.F))
    }, $.\u0275prov = b.Yz7({token: $, factory: $.\u0275fac, providedIn: "root"}), $
})()
},
80537
:
(se, U, s) => {
    "use strict";
    s.d(U, {k: () => l});
    var l = (() => {
        return (a = l || (l = {})).CODE_0 = "You are already queueing for another game mode. (Error Code 0)", a.CODE_1 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 1)", a.CODE_2 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 2)", a.CODE_3 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 3)", a.CODE_4 = "Queueing is currently disabled for maintenance. Please try again later. (Error Code 4)", a.CODE_5 = "There was an error while starting the game. (Error Code 5)", a.CODE_6 = "There was an error while starting the game. Unable to verify game files. (Error Code 6)", a.CODE_7 = "There was an error while starting the game. Unable to verify game files. (Error Code 7)", a.CODE_8 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 8)", a.CODE_9 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 9)", a.CODE_10 = "Unable to join queue. Suspicious account activity has been detected. (Error Code 10)", a.CODE_11 = "The deck you are queueing with is not complete. (Error Code 11)", a.CODE_12 = "There was an issue authorising the game build download. (Error Code 12)", a.CODE_13 = "There was an issue downloading the game. (Error Code 13)", a.CODE_14 = "There was an issue extracting the game. (Error Code 14)", l;
        var a
    })()
}, 8611
:
(se, U, s) => {
    "use strict";
    s.d(U, {n: () => v});
    var l = s(5e3), a = s(66088);
    let v = (() => {
        class i {
            constructor(d) {
                this.modalService = d
            }

            ngOnInit() {
            }

            hideModal() {
                this.modalService.destroyTopModal()
            }

            reject() {
                window.open("https://immutable.atlassian.net/servicedesk/customer/portal/1/group/1/create/18", "_blank")
            }
        }

        return i.\u0275fac = function (d) {
            return new (d || i)(l.Y36(a.Z))
        }, i.\u0275cmp = l.Xpm({
            type: i,
            selectors: [["app-bot-alert-modal"]],
            inputs: {title: "title", message: "message", onOk: "onOk", okButtonText: "okButtonText"},
            decls: 12,
            vars: 0,
            consts: [[1, "gradientOverlay"], [1, "title"], [1, "description"], ["size", "large", "text", "accept", 1, "acceptButton", 3, "click"], [1, "rejectText", 3, "click"]],
            template: function (d, u) {
                1 & d && (l._UZ(0, "div", 0), l.TgZ(1, "div", 1), l._uU(2, " account issue "), l.qZA(), l.TgZ(3, "div", 2), l._uU(4, " We\u2019ve detected some unusual activity on your account, and suspect you might be a bot. "), l._UZ(5, "br")(6, "br")(7, "br"), l._uU(8, " You won\u2019t be able to queue for games or fuse cards until we can be sure you\u2019re a human.\n"), l.qZA(), l.TgZ(9, "gu-primary-hex-button", 3), l.NdJ("click", function () {
                    return u.hideModal()
                }), l.qZA(), l.TgZ(10, "a", 4), l.NdJ("click", function () {
                    return u.reject()
                }), l._uU(11, " i am not a bot "), l.qZA())
            },
            styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.rejectText[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.title[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.rejectText[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.description[_ngcontent-%COMP%]{line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;width:calc(var(--vh) * 50);height:calc(var(--vh) * 45);padding-bottom:calc(var(--vw) * 2.5);background-image:url(/gu-assets/images/backgrounds/trader-overlay-bg.webp);background-size:cover;background-position:center}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.gradientOverlay[_ngcontent-%COMP%]{position:absolute;width:calc(var(--vh) * 50);height:calc(var(--vh) * 45);border:1px solid #182531;background:radial-gradient(ellipse at center,rgba(12,22,32,0) -80%,#0c1620 70%)}.title[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#fff2d8 0%,#ebc98b 50%,#c6a052 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;padding-bottom:calc(var(--vh) * 2);padding-top:calc(var(--vh) * 6);text-transform:uppercase}.description[_ngcontent-%COMP%]{margin-top:calc(calc(var(--vw) * 2) * .7);padding-left:calc(var(--vh) * 6);padding-right:calc(var(--vh) * 6);text-align:center}.acceptButton[_ngcontent-%COMP%]{margin-top:calc(var(--vw) * 2)}.rejectText[_ngcontent-%COMP%]{margin-top:calc(var(--vw) * 2);text-transform:uppercase;color:#8be1e0;cursor:pointer}.rejectText[_ngcontent-%COMP%]:hover{text-decoration:underline}"]
        }), i
    })()
}, 5231
:
(se, U, s) => {
    "use strict";
    s.d(U, {s: () => v});
    var l = s(5e3), a = s(66088);
    let v = (() => {
        class i {
            constructor(d) {
                this.modalService = d
            }

            ngOnInit() {
            }

            onOkCLick() {
                this.onOk()
            }
        }

        return i.\u0275fac = function (d) {
            return new (d || i)(l.Y36(a.Z))
        }, i.\u0275cmp = l.Xpm({
            type: i,
            selectors: [["app-hijack-modal"]],
            inputs: {title: "title", message: "message", onOk: "onOk", okButtonText: "okButtonText"},
            decls: 6,
            vars: 3,
            consts: [[1, "title-section"], [1, "message-section"], ["size", "large", "type", "primary", 1, "cta-button", 3, "click"]],
            template: function (d, u) {
                1 & d && (l.TgZ(0, "div", 0), l._uU(1), l.qZA(), l.TgZ(2, "div", 1), l._uU(3), l.qZA(), l.TgZ(4, "gu-primary-hex-button", 2), l.NdJ("click", function () {
                    return u.onOkCLick()
                }), l._uU(5), l.qZA()), 2 & d && (l.xp6(1), l.Oqu(u.title), l.xp6(2), l.Oqu(u.message), l.xp6(2), l.Oqu(u.okButtonText))
            },
            styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.title-section[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.message-section[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.title-section[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.message-section[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.message-section[_ngcontent-%COMP%]{line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{border:calc(var(--vh) * .15) solid #527493;background-color:#0c1620;position:relative;display:block;color:#f6f6f6;padding:calc(var(--vw) * 2);width:calc(var(--vw) * 30);display:flex;flex-flow:column nowrap;align-items:center;padding-bottom:calc(var(--vw) * 2.5)}.title-section[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 2);border-bottom:calc(var(--vh) * .15) solid #fff;text-transform:uppercase}.message-section[_ngcontent-%COMP%]{margin-top:calc(calc(var(--vw) * 2) * .7);text-align:center}.cta-button[_ngcontent-%COMP%]{margin-top:calc(var(--vw) * 2)}"]
        }), i
    })()
}, 14618
:
(se, U, s) => {
    "use strict";
    s.d(U, {
        gK: () => l,
        ky: () => a,
        Kg: () => v,
        dY: () => i,
        yn: () => t,
        Ry: () => d,
        Tg: () => u,
        c7: () => n,
        Vm: () => e,
        $9: () => r,
        X4: () => b,
        Lg: () => P,
        P6: () => S,
        wT: () => I
    });
    var l = (() => {
        return (w = l || (l = {})).GAME_BUILD_DOWNLOAD_CHECK = "[GameResources] Game Build Download Check", w.GAME_BUILD_DOWNLOAD_REQUEST = "[GameResources] Game Build Download Request", w.GAME_BUILD_DOWNLOAD_PROGRESS = "[GameResources] Game Build Download Progress", w.GAME_BUILD_DOWNLOAD_EXTRACT = "[GameResources] Game Build Download Extract", w.GAME_BUILD_DOWNLOAD_SUCCESS = "[GameResources] Game Build Download Success", w.GAME_BUILD_DOWNLOAD_ERROR = "[GameResources] Game Build Download Error", w.GAME_BUILD_DOWNLOAD_UPDATE_STATUS = "[GameResources] Game Build Download Update Status", w.GAME_ASSETS_DOWNLOAD_CHECK = "[GameResources] Game Assets Download Check", w.GAME_ASSETS_DOWNLOAD_REQUEST = "[GameResources] Game Assets Download Request", w.GAME_ASSETS_DOWNLOAD_PROGRESS = "[GameResources] Game Assets Download Progress", w.GAME_ASSETS_DOWNLOAD_SUCCESS = "[GameResources]  Game Assets Download Success", w.GAME_ASSETS_DOWNLOAD_ERROR = "[GameResources]  Game Assets Download Error", w.GAME_ASSETS_DOWNLOAD_UPDATE_STATUS = "[GameResources] Game Assets Download Update Status", l;
        var w
    })();

    class a {
        constructor(x) {
            this.payload = x, this.type = l.GAME_BUILD_DOWNLOAD_CHECK
        }
    }

    class v {
        constructor() {
            this.type = l.GAME_BUILD_DOWNLOAD_REQUEST
        }
    }

    class i {
        constructor(x) {
            this.payload = x, this.type = l.GAME_BUILD_DOWNLOAD_PROGRESS
        }
    }

    class t {
        constructor(x) {
            this.payload = x, this.type = l.GAME_BUILD_DOWNLOAD_EXTRACT
        }
    }

    class d {
        constructor() {
            this.type = l.GAME_BUILD_DOWNLOAD_SUCCESS
        }
    }

    class u {
        constructor(x) {
            this.payload = x, this.type = l.GAME_BUILD_DOWNLOAD_UPDATE_STATUS
        }
    }

    class n {
        constructor(x) {
            this.payload = x, this.type = l.GAME_BUILD_DOWNLOAD_ERROR
        }
    }

    class e {
        constructor(x) {
            this.payload = x, this.type = l.GAME_ASSETS_DOWNLOAD_CHECK
        }
    }

    class r {
        constructor() {
            this.type = l.GAME_ASSETS_DOWNLOAD_REQUEST
        }
    }

    class b {
        constructor(x) {
            this.payload = x, this.type = l.GAME_ASSETS_DOWNLOAD_PROGRESS
        }
    }

    class P {
        constructor(x) {
            this.payload = x, this.type = l.GAME_ASSETS_DOWNLOAD_UPDATE_STATUS
        }
    }

    class S {
        constructor() {
            this.type = l.GAME_ASSETS_DOWNLOAD_SUCCESS
        }
    }

    class I {
        constructor(x) {
            this.payload = x, this.type = l.GAME_ASSETS_DOWNLOAD_ERROR
        }
    }
}, 69931
:
(se, U, s) => {
    "use strict";
    s.d(U, {VD: () => a, DM: () => v, gP: () => i});
    var l = s(96727);
    const a = (0, l.ZF)("gameResources"), v = () => (0, l.P1)(a, t => t.gameBuild),
        i = () => (0, l.P1)(a, t => t.gameAssets)
}, 63411
:
(se, U, s) => {
    "use strict";
    s.d(U, {e: () => x});
    var l = s(73175), a = s(591), v = s(61737), i = s(21086), t = s(2994), d = s(61709), u = s(27221), n = s(24850),
        e = s(72986), r = s(40520), b = s(73307), P = s(5e3), S = s(11735);
    const I = new l.N0;
    let x = (() => {
        class ${constructor(y,M,o,h){this.authHostService=y,this.storage=M,this.featureFlagsService=o,this.router=h,this.isRemembering=!0,this.dataStore={account:null}
    ,
        this._account$ = new a.X(null)
    }
    login(y, M, o)
    {
        return this.authHostService.post("/auth2?type=login&code=" + this.generate(), y).pipe((0, t.b)(h => this.sendAnalytics(!0, y.email, +h.id)), (0, d.VS)(h => this.saveAccount(h, M, o)), (0, t.b)(h => this.fetchAccount()), (0, u.K)(h => (this.sendAnalytics(!1, y.email), (0, v._)(h))))
    }
    saveAccount(y, M, o)
    {
        return this.auth = y, "function" == typeof window.bridge.updateAuthPair && window.bridge.updateAuthPair(y), this.isRemembering = M, M && (this.storage.set(["user_id"], y.id), this.storage.set(["refresh"], y.refresh), this.storage.set(["access"], y.access)), this.authHostService.post(`/account/${y.id}/session`, {game_id: o}).pipe((0, t.b)(h => {
            "function" == typeof window.bridge.updateSession && window.bridge.updateSession(h), this.storage.set(["game_session"], h)
        }), (0, n.U)(() => !0), (0, u.K)(h => (0, i.of)(!1)))
    }
    getLinkedAddresses(y)
    {
        return this.authHostService.get(`v2/account/${y}`).pipe((0, n.U)(M => M.addresses.map(o => o.address)))
    }
    fetchSession()
    {
        return (0, i.of)(this.getGameSessionTicket())
    }
    sendAnalytics(y, M, o)
    {
    }
    get
    account$()
    {
        return this._account$.asObservable()
    }
    _emitAccount(y)
    {
        this.dataStore.account = y, this._account$.next(Object.assign({}, this.dataStore).account), this.featureFlagsService.setContext(y ? {
            userID: `${y.id}`,
            email: y.email,
            name: y.username,
            anonymous: !1
        } : {anonymous: !0})
    }
    getUserId()
    {
        return this.auth && null != this.auth.id ? this.auth.id : this.storage.get(["user_id"])
    }
    getGameSessionTicket()
    {
        return this.storage.get(["game_session"])
    }
    fetchAccount()
    {
        const y = this.getUserId();
        !y || this.authHostService.get(`/v2/account/${y}`).pipe((0, e.q)(1), (0, t.b)(M => this._emitAccount(M))).subscribe()
    }
    fetchAccountDetails()
    {
        const y = this.getUserId();
        if (y) return this.authHostService.get(`/v2/account/${y}`)
    }
    updateCurrentUser(y)
    {
        const M = this.getUserId();
        return this.updateUser(M, y)
    }
    updateUser(y, M)
    {
        return this.authHostService.put("/account/" + y, M).pipe((0, e.q)(1), (0, t.b)(o => this._emitAccount(o)))
    }
    getAuthHeader()
    {
        let y = new r.WM;
        return y = y.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), y = y.append("Authorization", this.getAccessToken()), y
    }
    getRefreshToken()
    {
        return this.storage.get(["refresh"])
    }
    getAccessToken()
    {
        return this.storage.get(["access"])
    }
    getAuthToken()
    {
        return this.auth
    }
    register(y)
    {
        return this.authHostService.post("/register", y)
    }
    resend(y)
    {
        return this.authHostService.post("/resend", {email: y})
    }
    resetPassword(y)
    {
        return this.authHostService.put("/reset", {email: y})
    }
    isLoggedIn()
    {
        const y = this.getRefreshToken();
        return null != y && y.length > 0
    }
    logout()
    {
        this.auth = null, this._emitAccount(null), this.storage.delete(["user_id"]), this.storage.delete(["refresh"]), this.storage.delete(["access"]), this.storage.delete(["email"]), this.storage.delete(["subscribe"]), this.authHostService.post("/logout"), this.router.navigate(["/login"]), this.featureFlagsService.setContext({
            userID: void 0,
            email: void 0,
            name: void 0,
            anonymous: !0
        })
    }
    refreshToken()
    {
        const y = this.getRefreshToken();
        return this.authHostService.post("/auth2?type=refresh&code=" + this.generate(), {refresh: y}).pipe((0, t.b)(M => {
        }))
    }
    linkReferralCode(y)
    {
        const M = this.getUserId();
        return this.authHostService.post(`/account/${M}/referrer`, {referral: y})
    }
    tokenIsExpired()
    {
        const y = this.getAuthToken();
        return I.isTokenExpired(y.access)
    }
    generate()
    {
        function y(G, Y) {
            return (G.length - G.replace(new RegExp(Y, "g"), "").length) / Y.length
        }

        function M(G, Y, ue) {
            return Y > G.length - 1 ? G : G.substr(0, Y) + ue + G.substr(Y + 1)
        }

        const o = function (G) {
            const ue = Math.pow(16, Math.min(G, 8) - 1), oe = Math.pow(16, Math.min(G, 8)) - 1;
            let H = (Math.floor(Math.random() * (oe - ue + 1)) + ue).toString(16);
            for (; H.length < G;) H += o(G - 8);
            return H
        }, h = Math.ceil(25 * Math.random()), C = 32 - h - 4;
        let T = ("" + o(h) + 2 + o(2) + 2 + o(C)).toLowerCase(), ae = y(T, "a") - y(T, "b") + 1, me = 0;
        for (; ae > 0 && ("a" !== T[me] && "b" !== T[me] && "2" !== T[me] && (T = M(T, me, "b"), ae--), me++, !(me > T.length));) ;
        for (; ae < 0 && ("a" !== T[me] && "b" !== T[me] && "2" !== T[me] && (T = M(T, me, "a"), ae++), me++, !(me > T.length));) ;
        return T
    }
}
return $.\u0275fac = function (y) {
    return new (y || $)(P.LFG(b.LI), P.LFG(b.qy), P.LFG(b.B3), P.LFG(S.F0))
}, $.\u0275prov = P.Yz7({token: $, factory: $.\u0275fac}), $
})
()
},
69340
:
(se, U, s) => {
    "use strict";
    s.d(U, {b5: () => $});
    var l = s(21086), a = s(41746), v = s(8929), i = s(56498), t = s(24850), d = s(87168), u = s(61709), n = s(87545),
        e = s(14618), r = s(69931), b = s(5e3), P = s(79763), S = s(44416), I = s(96727);
    let $ = (() => {
        class O {
            constructor(M, o, h, C) {
                this.gameService = M, this.zone = o, this.utils = h, this.ngrxStore = C, this.downloads = new Map
            }

            getCurrentDownload() {
                return this.currentDownload
            }

            getVersionFile(M, o) {
                return window.bridge.httpGet(`https://s3-ap-southeast-2.amazonaws.com/gods-builds/manifests/${o}-manifest.json`).pipe(this.utils.enterZone(this.zone))
            }

            getLatest(M, o) {
                return this.getVersionFile(M, o).pipe((0, t.U)(h => h.build_version))
            }

            getLocal(M) {
                return (0, l.of)(this.gameService.getProperty(M.id, "version"))
            }

            getVersions(M, o) {
                let h;
                return h = (0, a.$R)("local" === o ? this.getLocal(M) : this.getLatest(M, o), this.getLocal(M)), h
            }

            requiresUpdate(M, o) {
                return this.getVersions(M, o).pipe((0, d.M)(this.ngrxStore.select(r.VD)), (0, u.VS)(([[h, C], T]) => {
                    let K = !0;
                    return C && C === h && (K = "downloaded" === this.gameService.getProperty(M.id, "status")), K && "downloading" !== T.gameBuild.status && "extracting" !== T.gameBuild.status && this.ngrxStore.dispatch(new e.ky({isUpdateRequired: K})), (0, l.of)(K)
                }))
            }

            getUserPlatform() {
                return "win32" === window.bridge.platform() ? "win" : "mac"
            }

            getLatestAssetsVersions(M, o) {
                const h = {platform: this.getUserPlatform(), branch: o};
                return window.bridge.httpPost("https://oyhca2oyje.execute-api.us-east-1.amazonaws.com/test/1/game/assets", h).pipe(this.utils.enterZone(this.zone))
            }

            getLocalAssetsVersions(M) {
                return this.gameService.getProperty(M.id, "assets") ? (0, l.of)(JSON.parse(this.gameService.getProperty(M.id, "assets"))) : (0, l.of)(null)
            }

            requiresAssetsUpdate(M, o) {
                return (0, a.$R)(this.getLocalAssetsVersions(M), this.getLatestAssetsVersions(M, o)).pipe((0, d.M)(this.ngrxStore.select(r.VD)), (0, n.w)(([[h, C], T]) => {
                    let K;
                    return K = h ? this.deltaAssetsVersions(h, C) : C, K.length > 0 && "downloading" !== T.gameAssets.status && this.ngrxStore.dispatch(new e.Vm({isUpdateRequired: K.length > 0})), (0, l.of)(K)
                }))
            }

            deltaAssetsVersions(M, o) {
                let h = [];
                return h = M ? o ? o.filter(C => !M.some(T => C.etag === T.etag)) : [] : o, h
            }

            getDownloadInfo(M, o, h) {
                return this.gameService.isObfuscatedBranch(M.id) ? {
                    url: `${M.base_url_auth}/builds/game/${o}/${this.getFileName(M, o)}`,
                    authToken: h
                } : {url: `${M.base_url}/builds/${o}/${this.getFileName(M, o)}`, authToken: void 0}
            }

            getFileName(M, o) {
                return "win32" === window.bridge.platform() ? "gods_" + o + M.extensions.windows : "gods_" + o + M.extensions.osx
            }

            downloadAndExtract(M, o, h) {
                const C = this.gameService.getInstallPath(M), T = this.getDownloadInfo(M, o, h),
                    K = window.bridge.download(T.url, C, this.getFileName(M, o), h).pipe((0, t.U)(ce => (this.currentDownload.extracting = !0, this.gameService.setProperty(M.id, "version", o), this.gameService.setProperty(M.id, "status", "downloaded"), {
                        game: M,
                        fileName: this.getFileName(M, o),
                        installPath: C
                    })));
                return this.currentDownload = {
                    progress: window.bridge.progress,
                    download: K,
                    extracting: !1,
                    error$: new v.xQ
                }, this.currentDownload
            }

            displayDownloadCompleteNotification(M) {
                new window.Notification("Download Complete", {
                    body: M.title + " has finished downloading.",
                    silent: !0
                }).onclick = () => {
                }
            }

            deleteFile(M, o) {
                const h = window.bridge.join(o, M);
                window.bridge.exists(h) && window.bridge.deleteFile(h)
            }

            extractGame(M, o, h) {
                return new i.y(C => {
                    const T = window.bridge.join(h, o), K = window.bridge.join(h, M.title);
                    window.bridge.exists(T) || (console.error("GameDownloadService->extractGame() unable to find file to extract"), C.error("File not found! Cannot extract.")), window.bridge.extract(T, K, ce => {
                        "win32" !== window.bridge.platform() ? window.bridge.chmod(K + "/StandaloneOSXUniversal/gods.app/Contents/MacOS/gods", me => {
                            me ? (console.error(me), C.error(me)) : C.next(!0)
                        }) : C.next(!0)
                    })
                }).pipe((0, u.VS)(C => {
                    if (C) return this.gameService.setProperty(M.id, "status", "extracted"), this.gameService.refreshGameContext(), null != this.currentDownload && (this.currentDownload.extracting = !1), (0, l.of)(C)
                }))
            }

            uninstallGame(M, o) {
                const T = "win32" === window.bridge.platform() ? "/StandaloneWindows64" : "/StandaloneOSXUniversal",
                    K = window.bridge.join(o, M.title, T);
                window.bridge.exists(K) && this.uninstallFolder(K)
            }

            uninstallFolder(M) {
                window.bridge.clearDirectory(M, o => {
                    o && console.log("@@@@@ uninstallFolder Error Clearing New Assets", o)
                })
            }
        }

        return O.\u0275fac = function (M) {
            return new (M || O)(b.LFG(P.hM), b.LFG(b.R0b), b.LFG(S.F), b.LFG(I.yh))
        }, O.\u0275prov = b.Yz7({token: O, factory: O.\u0275fac, providedIn: "root"}), O
    })()
}, 79763
:
(se, U, s) => {
    "use strict";
    s.d(U, {hM: () => O});
    var l = s(591), a = s(61737), v = s(21086), i = s(24850), t = s(92198), d = s(72986), u = s(73307), n = s(63764),
        e = s(80537), r = s(52492), b = s(5e3), P = s(66088), S = s(55195);
    s(63411);
    let O = (() => {
        class y {
            constructor(o, h, C, T, K, ce) {
                this.authHostService = o, this.auth = h, this.storage = C, this.modalService = T, this.akuma = K, this.gameApi = ce, this._currentGameContext$ = new l.X(null), this._branches$ = new l.X([]), this.dataStore = {
                    currentGameContext: null,
                    branches: []
                }
            }

            get currentGameContext$() {
                return this._currentGameContext$.asObservable()
            }

            get branches$() {
                return this._branches$.asObservable()
            }

            getBranch$(o) {
                const h = this.getProperty(o, "branch"), C = h && "" !== h ? h : "beta";
                return this.branches$.pipe((0, i.U)(T => T.find(K => K.name === C)), (0, t.h)(T => !!T))
            }

            isObfuscatedBranch(o = 1) {
                const h = this.getProperty(o, "branch"), C = this.dataStore.branches.find(T => T.name === h);
                return C && C.obfuscated
            }

            onValidBranch(o, h) {
                return !(!o || !h.find(C => C.name === o))
            }

            fetchBranchesExtended(o) {
                const h = this.getProperty(o, "branch");
                this.fetchBranchesExtendedApi(o).subscribe(C => {
                    this.onValidBranch(h, C) || (this.setProperty(o, "branch", "beta"), this.refreshGameContext(), "string" == typeof h && (this.auth.logout(), setTimeout(() => window.location.reload()))), this.dataStore.branches = C, this._branches$.next([...this.dataStore.branches])
                })
            }

            fetchBranchesExtendedApi(o) {
                const h = this.auth.getUserId();
                return this.authHostService.get(`/game/${o}/player/${h}/branch?format=extended`).pipe((0, d.q)(1))
            }

            setGuGameContext() {
                this.dataStore.currentGameContext = this.getMockedGuGame(), this._emitCurrentGameContext()
            }

            refreshGameContext() {
                this._emitCurrentGameContext()
            }

            _emitCurrentGameContext() {
                this._currentGameContext$.next(Object.assign({}, this.dataStore).currentGameContext)
            }

            getGames(o) {
                return this.authHostService.get("/account/" + o + "/game")
            }

            getUserTutorialMissions(o, h) {
                return (!o || !h) && (o = this.auth.getUserId(), h = this.auth.getGameSessionTicket()), this.gameApi.get(`/user/${o}/tutorial?session=${h}`)
            }

            updateUserTutorialMissions(o, h, C) {
                return (!o || !C) && (o = this.auth.getUserId(), C = this.auth.getGameSessionTicket()), this.gameApi.post(`/user/${o}/tutorial?session=${C}`, h)
            }

            setProcessID(o, h) {
                null == this.sessions && (this.sessions = new Map);
                const C = this.sessions.get(o);
                C && (C.pid = h, this.sessions.set(o, C))
            }

            isInstalled(o) {
                const h = this.getPlayPath(o), C = window.bridge.exists(h);
                return C || console.error("Game is not installed", h), C
            }

            play(o, h) {
                const C = this.getPlayPath(o);
                if (!this.isInstalled(o)) return console.error("gameService->play() game not intalled", o.id, o.title), (0, a._)(e.k.CODE_6);
                let T;
                return T = h ? window.bridge.executeArgs(C, h, (K, ce) => {
                    if (ce) return console.error("gameService->play()->window.bridge.executeArgs() error starting game", C, ce), (0, a._)(e.k.CODE_7);
                    this.logGameClientLaunched()
                }) : window.bridge.execute(C, (K, ce) => {
                    if (ce) return console.error("gameService->play()->window.bridge.execute() error starting game", C, ce), (0, a._)(e.k.CODE_7);
                    this.logGameClientLaunched()
                }), "win32" !== window.bridge.platform() && T.pid++, this.setProcessID(o.id, T.pid), (0, v.of)({process: T})
            }

            logGameClientLaunched() {
                "function" == typeof gtag && gtag("event", "succeeded", {event_category: "gameClientLaunched"}), this.akuma.postEvent("Flow", "_gameClientLaunched_succeeed")
            }

            getPlayPath(o) {
                const h = this.getInstallPath(o), C = window.bridge.join(h, o.title);
                return "win32" === window.bridge.platform() ? window.bridge.join(C, o.executables.windows) : window.bridge.join(C, o.executables.osx)
            }

            showInfoModal(o, h) {
                this.modalService.createModal(n.S, {title: o, text: h}, {
                    blurredBackground: !0,
                    canCloseFromInside: !1,
                    position: r.e1.Center,
                    size: r.Cg.StretchableWorkarea
                })
            }

            getMockedGuGame() {
                return {
                    id: 1,
                    title: "Gods Unchained",
                    description: "Gods Unchained is a state of the art competitive card game driven by decentralized asset ownership.\n      <br><br>Gods Unchained combines the convenience and beauty of digital card games with\n      the true ownership offered by physical card games to create the world's first blockchain eSport.",
                    background_url: "",
                    thumbnail_url: "launcher-mockup-gu-logo.png",
                    base_url: "https://builds.godsunchained.com",
                    base_url_auth: "https://d2kgdofmel8ecp.cloudfront.net",
                    userId: this.auth.getUserId(),
                    role: "dev",
                    executables: {osx: "/StandaloneOSXUniversal/gods.app", windows: "/StandaloneWindows64/gods.exe"},
                    extensions: {osx: "_osx_full.zip", windows: "_win64_full.zip"}
                }
            }

            getDefaultInstallPath() {
                return "win32" === window.bridge.platform() ? window.bridge.homeDirectory() + "\\AppData\\Local\\GodsUnchained" : window.bridge.homeDirectory() + "/Library/GodsUnchained/"
            }

            getInstallPath(o) {
                return this.getProperty(o.id, "path") || this.getDefaultInstallPath()
            }

            getAssetsPath() {
                return "win32" === window.bridge.platform() ? window.bridge.homeDirectory() + "\\Documents\\My Games\\GodsUnchained\\Assets" : window.bridge.homeDirectory() + "/Library/GodsUnchained/Assets"
            }

            getGameId() {
                return this.dataStore.currentGameContext ? this.dataStore.currentGameContext.id : null
            }

            getProperty(o, h) {
                return this.storage.get(["game", String(o), h])
            }

            deleteProperty(o, h) {
                return this.storage.delete(["game", String(o), h])
            }

            setProperty(o, h, C) {
                return this.storage.set(["game", String(o), h], C)
            }

            getBranch(o) {
                const h = this.getProperty(o, "branch");
                return (0, v.of)(h && "" !== h ? h : "beta")
            }

            clearAssets(o) {
                this.setProperty(o, "assets", JSON.stringify([])), window.bridge.clearGUAssets(h => {
                    console.error("Error Clearing New Assets", h)
                }), location.reload()
            }

            checkInstallationPath(o) {
                if (!this.getProperty(o, "path")) {
                    const C = this.getDefaultInstallPath();
                    this.setProperty(o, "path", C), this.clearVersion(o)
                }
            }

            clearVersion(o) {
                this.deleteProperty(o, "version"), this.refreshGameContext(), setTimeout(() => window.location.reload())
            }
        }

        return y.\u0275fac = function (o) {
            return new (o || y)(b.LFG(u.LI), b.LFG(u.mI), b.LFG(u.qy), b.LFG(P.Z), b.LFG(S.jt), b.LFG(S.Ft))
        }, y.\u0275prov = b.Yz7({token: y, factory: y.\u0275fac, providedIn: "root"}), y
    })()
}, 24058
:
(se, U, s) => {
    "use strict";
    s.d(U, {m: () => v});
    var l = s(73307), a = s(5e3);
    let v = (() => {
        class i {
            constructor(d) {
                this.storageService = d, this.logsClearedKey = "logsCleared", this.fileNames = ["main.log", "main.old.log", "renderer.log", "renderer.old.log"]
            }

            shouldClearLogs() {
                return !this.storageService.get([this.logsClearedKey])
            }

            clearLogs() {
                ("win32" === window.bridge.platform() ? this.windowsPaths() : this.macPaths()).forEach(u => {
                    this.fileNames.forEach(n => {
                        const e = `${u}${n}`;
                        window.bridge.exists(e) && window.bridge.deleteFile(e)
                    })
                }), this.storageService.set([this.logsClearedKey], !0)
            }

            windowsPaths() {
                return [`${window.bridge.homeDirectory()}\\AppData\\Roaming\\immutable-launcher\\logs\\`, `${window.bridge.homeDirectory()}\\AppData\\Roaming\\apollo-launcher\\logs\\`]
            }

            macPaths() {
                return [`${window.bridge.homeDirectory()}/Library/Logs/immutable-launcher/`, `${window.bridge.homeDirectory()}/Library/Logs/apollo-launcher/`]
            }
        }

        return i.\u0275fac = function (d) {
            return new (d || i)(a.LFG(l.qy))
        }, i.\u0275prov = a.Yz7({token: i, factory: i.\u0275fac, providedIn: "root"}), i
    })()
}, 52492
:
(se, U, s) => {
    "use strict";
    s.d(U, {e1: () => l, Cg: () => a});
    var l = (() => {
        return (i = l || (l = {}))[i.Center = 0] = "Center", i[i.Custom = 1] = "Custom", l;
        var i
    })(), a = (() => {
        return (i = a || (a = {}))[i.Fullscreen = 0] = "Fullscreen", i[i.Workarea = 1] = "Workarea", i[i.StretchableFullscreen = 2] = "StretchableFullscreen", i[i.StretchableWorkarea = 3] = "StretchableWorkarea", a;
        var i
    })()
}, 66088
:
(se, U, s) => {
    "use strict";
    s.d(U, {Z: () => S});
    var l = s(8929), a = s(2994), v = s(3241), i = s(5e3), t = s(22313), d = s(69808);
    const u = ["modalHolder"];

    function n(I, w) {
    }

    let e = (() => {
        class I {
            constructor(x, $, O) {
                this.resolver = x, this.sanitizer = $, this.el = O, this.blurredBackground = !1, this.canCloseFromInside = !1, this.canCloseFromOutside = !0, this.closeModal$ = new i.vpe
            }

            get myStyle() {
                return this.sanitizer.bypassSecurityTrustStyle(`\n      z-index: ${this.styles.zIndex};\n    `)
            }

            ngOnInit() {
                const x = this.resolver.resolveComponentFactory(this.component);
                this.componentRef = this.modalHolder.createComponent(x, 0, this.modalHolder.injector, [[]]), Object.assign(this.componentRef.instance, this.inputs), this.calculateLocation()
            }

            ngOnDestroy() {
                this.componentRef = null
            }

            calculateLocation() {
            }

            closeModal(x) {
                x && !this.canCloseFromInside || !x && this.canCloseFromOutside && this.closeModal$.emit()
            }

            onClickedOutside(x) {
            }
        }

        return I.\u0275fac = function (x) {
            return new (x || I)(i.Y36(i._Vd), i.Y36(t.H7), i.Y36(i.SBq))
        }, I.\u0275cmp = i.Xpm({
            type: I,
            selectors: [["app-modal"]],
            viewQuery: function (x, $) {
                if (1 & x && i.Gf(u, 7, i.s_b), 2 & x) {
                    let O;
                    i.iGM(O = i.CRH()) && ($.modalHolder = O.first)
                }
            },
            hostVars: 2,
            hostBindings: function (x, $) {
                2 & x && i.Akn($.myStyle)
            },
            inputs: {
                component: "component",
                inputs: "inputs",
                styles: "styles",
                blurredBackground: "blurredBackground",
                canCloseFromInside: "canCloseFromInside",
                canCloseFromOutside: "canCloseFromOutside"
            },
            outputs: {closeModal$: "closeModal$"},
            decls: 4,
            vars: 1,
            consts: [[1, "bgOverlay", 3, "click"], [1, "modalContentContainer", 3, "ngStyle", "click"], ["modalHolder", ""]],
            template: function (x, $) {
                1 & x && (i.TgZ(0, "a", 0), i.NdJ("click", function () {
                    return $.closeModal(!1)
                }), i.qZA(), i.TgZ(1, "div", 1), i.NdJ("click", function () {
                    return $.closeModal(!0)
                }), i.YNc(2, n, 0, 0, "ng-template", null, 2, i.W1O), i.qZA()), 2 & x && (i.xp6(1), i.Q6J("ngStyle", $.styles))
            },
            directives: [d.PC],
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:block}.bgOverlay[_ngcontent-%COMP%]{position:absolute;right:0;left:0;top:0;bottom:0;background-color:#0c1620;opacity:.7}.bgOverlay--transparent[_ngcontent-%COMP%]{background:transparent}.modalContentContainer[_ngcontent-%COMP%]{padding-top:28px;position:absolute;top:0;left:0;opacity:1}"]
        }), I
    })();
    var r = s(52492), b = s(44416), P = s(6674);
    let S = (() => {
        class I {
            constructor(x, $, O, y, M) {
                this.resolver = x, this.appRef = $, this.utilsService = y, this.resizeService = M, this._modalDestroy$ = new l.xQ, this.modalsStack = [], this.modalFactory = this.resolver.resolveComponentFactory(e), this.renderer = O.createRenderer(null, null), this.resizeService.viewPortUnits$.pipe((0, a.b)(({vh: o}) => this.vh = o)).subscribe()
            }

            setModalVCRs(x, $) {
                this.workareaVcr = x, this.fullscreenVcr = $
            }

            get modalDestroy$() {
                return this._modalDestroy$.asObservable()
            }

            createModal(x, $ = {}, {
                canCloseFromInside: O = !1,
                canCloseFromOutside: y = !0,
                blurredBackground: M = !1,
                position: o = r.e1.Center,
                customPosition: h = null,
                size: C = r.Cg.StretchableFullscreen
            } = {}, T) {
                const K = T || this.getVCR(C), ce = this.getModalHolderStyles(o, C, h);
                0 === this.modalsStack.length && (this.renderer.addClass(K.element.nativeElement.parentElement, "addModalBlurBackground"), this.modalsStack.push({
                    vcr: K,
                    nativeElement: K.element.nativeElement,
                    parentElement: K.element.nativeElement.parentElement
                }));
                const ae = this.createModalComponent(x, $, K, ce, M, O, y);
                this.modalsStack.push({
                    component: ae,
                    vcr: K,
                    nativeElement: ae.instance.el.nativeElement
                }), this.updateBlur()
            }

            getVCR(x) {
                switch (x) {
                    case r.Cg.Fullscreen:
                    case r.Cg.StretchableFullscreen:
                        return this.fullscreenVcr || this.appRef.components[0].instance.vcr;
                    case r.Cg.Workarea:
                    case r.Cg.StretchableWorkarea:
                        return this.workareaVcr
                }
            }

            getModalHolderStyles(x, $, O) {
                if (x === r.e1.Custom) {
                    (null === O || 2 !== O.split(":").length) && console.error("Provide valid customPosition (SELECTOR:POSITION ex. '#elementId:left')");
                    const y = O.split(":");
                    return Object.assign(Object.assign({}, this.getRelativePos(y[0], y[1])), {zIndex: $ === r.Cg.Workarea ? v.Rl.measurements.headerBarZLevel - 1 : v.Rl.measurements.modalLayerZLevel})
                }
                return Object.assign(Object.assign({}, this.getBoundaries(x, $)), {zIndex: $ === r.Cg.Workarea ? v.Rl.measurements.headerBarZLevel - 1 : v.Rl.measurements.modalLayerZLevel})
            }

            destroyTopModal() {
                if (0 === this.modalsStack.length) return;
                const x = this.modalsStack.pop();
                this._modalDestroy$.next(x.component.componentType), x.component && x.component.destroy(), x.component = null, this.updateBlur(), 1 === this.modalsStack.length && (this.renderer.removeClass(this.modalsStack[0].parentElement, "addModalBlurBackground"), this.modalsStack = [])
            }

            destroyModalsStack() {
                0 !== this.modalsStack.length && (this.modalsStack.filter(x => x.component).forEach(x => {
                    this._modalDestroy$.next(x.component.componentType), x.component.destroy(), x.component = null, x.nativeElement = null
                }), this.updateBlur(), this.renderer.removeClass(this.modalsStack[0].parentElement, "addModalBlurBackground"), this.modalsStack = [])
            }

            createModalComponent(x, $, O, y, M, o, h) {
                const C = O.createComponent(this.modalFactory, this.modalsStack.length - 1, O.injector, [[]]);
                return Object.assign(C.instance, {
                    styles: y,
                    blurredBackground: M,
                    canCloseFromInside: o,
                    canCloseFromOutside: h,
                    component: x,
                    inputs: $
                }), C.instance.closeModal$.subscribe(() => {
                    O.remove(), this.destroyTopModal()
                }), C
            }

            getBoundaries(x, $) {
                if (x === r.e1.Center) {
                    if ($ === r.Cg.StretchableFullscreen || $ === r.Cg.StretchableWorkarea) return {
                        "top.%": 50,
                        "left.%": 50,
                        transform: "translate(-50%, -50%)"
                    };
                    if ($ === r.Cg.Fullscreen || $ === r.Cg.Workarea) return {top: 0, bottom: 0, left: 0, right: 0};
                    console.error(`Size '${$}' not supported`)
                } else console.error(`Position '${x}' not supported`)
            }

            getRelativePos(x, $) {
                const y = window.document.querySelector(x).getBoundingClientRect();
                switch ($) {
                    case"left":
                        return {
                            "right.px": document.body.clientWidth - y.right + y.width + 15,
                            "top.px": y.top + y.height / 2,
                            transform: "translateY(-50%)"
                        };
                    case"right":
                        return {"left.px": y.right + 15, "top.px": y.top + y.height / 2, transform: "translateY(-50%)"};
                    case"top":
                        return {
                            top: "unset",
                            "bottom.px": document.body.clientHeight - y.bottom + y.height + 15,
                            "left.px": y.left + y.width / 2,
                            transform: "translateX(-50%)"
                        };
                    case"bottom":
                        return {"top.px": y.bottom + 15, "left.px": y.left + y.width / 2, transform: "translateX(-50%)"}
                }
                return {"top.%": 50, "left.%": 50, transform: "translate(-50%, -50%)"}
            }

            updateBlur() {
                if (this.modalsStack.filter(x => !!x.nativeElement).forEach(x => this.setBlurredBackground(x.nativeElement, !1)), this.modalsStack.length > 1) {
                    const x = this.utilsService.findLastIndex(this.modalsStack, $ => $.component && $.component.instance && $.component.instance.blurredBackground);
                    x > 0 && this.setBlurredBackground(this.modalsStack[x].nativeElement, !0)
                }
            }

            setBlurredBackground(x, $) {
                let O;
                x instanceof Comment ? O = x.previousSibling : (O = x, this.renderer.setStyle(x, "backgroundColor", $ ? "rgba(29,47,65, 0.6)" : "unset")), this.renderer.setStyle(O, "backdrop-filter", $ ? `blur(${1.5 * this.vh}px)` : "none")
            }
        }

        return I.\u0275fac = function (x) {
            return new (x || I)(i.LFG(i._Vd), i.LFG(i.z2F), i.LFG(i.FYo), i.LFG(b.F), i.LFG(P._))
        }, I.\u0275prov = i.Yz7({token: I, factory: I.\u0275fac}), I
    })()
}, 77391
:
(se, U, s) => {
    "use strict";
    s.d(U, {f: () => v});
    var l = s(591), a = s(5e3);
    let v = (() => {
        class i {
            constructor() {
                this._currentRoute$ = new l.X("")
            }

            get currentRoute$() {
                return this._currentRoute$.asObservable()
            }

            updateCurrentRoute(d) {
                this._currentRoute$.next(d)
            }
        }

        return i.\u0275fac = function (d) {
            return new (d || i)
        }, i.\u0275prov = a.Yz7({token: i, factory: i.\u0275fac, providedIn: "root"}), i
    })()
}, 236
:
(se, U, s) => {
    "use strict";
    s.d(U, {u: () => a});
    var l = s(5e3);
    let a = (() => {
        class v {
            transform(t) {
                const d = Math.floor(t / 60);
                return d.toString().padStart(1, "0") + ":" + Math.floor(t - 60 * d).toString().padStart(2, "0")
            }
        }

        return v.\u0275fac = function (t) {
            return new (t || v)
        }, v.\u0275pipe = l.Yjl({name: "duration", type: v, pure: !0}), v
    })()
}, 83035
:
(se, U, s) => {
    "use strict";
    s.d(U, {g: () => n});
    var l = s(59633), v = s(591), i = s(1059), t = s(92198), d = s(5e3), u = s(55195);
    let n = (() => {
        class e {
            constructor(b, P) {
                this.analyticsService = b, this.akumaService = P, this.dataStore = {activeQueues: []}, this._activeQueues$ = new v.X([]), this._queueStatus$ = new v.X(null)
            }

            get queueStatus$() {
                return this._queueStatus$.asObservable()
            }

            get activeQueues$() {
                return this._activeQueues$.asObservable()
            }

            _emitQueues() {
                this._activeQueues$.next(Object.assign({}, this.dataStore).activeQueues)
            }

            enqueue(b) {
                this.dataStore.activeQueues.push(b), this._emitQueues()
            }

            dequeue(b) {
                this.dataStore.activeQueues = this.dataStore.activeQueues.filter(P => P !== b), this._emitQueues()
            }

            start(b, P, S) {
                const I = {game_id: b, mode: P, startTimestamp: (new Date).getTime(), status: "active", params: S};
                return this.enqueue(I), this._queueStatus$.next(I), this.logQueueStarted(I), this.getQueueSubset(x => x === I).pipe((0, i.O)(I))
            }

            cancel(b) {
                this.dataStore.activeQueues = this.dataStore.activeQueues.filter(P => P && (P.game_id !== b.game_id || P.mode.id !== b.mode.id)), b.status = "cancelled", b.startTimestamp = null, this._queueStatus$.next(b), this._emitQueues(), this.logQueueCancelled(b)
            }

            complete(b) {
                this.dataStore.activeQueues = this.dataStore.activeQueues.filter(P => P && (P.game_id !== b.game_id || P.mode.id !== b.mode.id)), b.status = "completed", b.startTimestamp = null, this._queueStatus$.next(b), this._emitQueues(), this.logQueueCompleted(b)
            }

            stopAllQueues() {
                this.dataStore.activeQueues.forEach(b => this.cancel(b))
            }

            getQueue(b, P) {
                return this.getQueueSubset(S => S && S.game_id === b && S.mode.id === P)
            }

            getGameQueues(b) {
                return this.getQueueSubset(P => P && P.game_id === b)
            }

            getQueueSubset(b) {
                return this.queueStatus$.pipe((0, t.h)(P => b(P)))
            }

            logQueueCancelled(b) {
                "function" == typeof gtag && gtag("event", "failed", {event_category: "queue"});
                const P = {
                    game_id: b.game_id,
                    mode_id: b.mode.id,
                    mode_name: b.mode.name,
                    button_state: "queue_cancelled"
                };
                this.analyticsService.postEvent(new l.Queue.Cancelled.Event(P)), this.akumaService.postEvent("Flow", "_queue_failed", P), this.akumaService.postEvent("Control", "arenaHomeGameStartBtn_pressed", P)
            }

            logQueueCompleted(b) {
                "function" == typeof gtag && gtag("event", "succeeded", {event_category: "queue"});
                const P = {
                    game_id: b.game_id,
                    mode_id: b.mode.id,
                    mode_name: b.mode.name,
                    button_state: "queue_completed"
                };
                this.analyticsService.postEvent(new l.Queue.Completed.Event(P)), this.akumaService.postEvent("Flow", "_queue_succeeded", P)
            }

            logQueueStarted(b) {
                "function" == typeof gtag && gtag("event", "started", {event_category: "queue"});
                const P = {
                    game_id: b.game_id,
                    mode_id: b.mode.id,
                    mode_name: b.mode.name,
                    button_state: "queue_started"
                };
                this.analyticsService.postEvent(new l.Queue.Started.Event(P)), this.akumaService.postEvent("Flow", "_queue_started", P), this.akumaService.postEvent("Control", "arenaHomeGameStartBtn_pressed", P)
            }
        }

        return e.\u0275fac = function (b) {
            return new (b || e)(d.LFG(u.yD), d.LFG(u.jt))
        }, e.\u0275prov = d.Yz7({token: e, factory: e.\u0275fac, providedIn: "root"}), e
    })()
}, 6674
:
(se, U, s) => {
    "use strict";
    s.d(U, {_: () => b});
    var l = s(8929), a = s(591), v = s(23753), i = s(80013), t = s(92198), d = s(2994), u = s(7625), n = s(73307),
        e = s(5e3), r = s(44416);
    let b = (() => {
        class P {
            constructor(I, w, x) {
                this.utils = I, this.zone = w, this.storage = x, this.unsubscribe = new l.xQ, this._windowSize$ = new a.X({
                    width: 0,
                    height: 0
                }), this._viewPortUnits$ = new a.X({
                    vh: 0,
                    vw: 0
                }), this.ClientSize = "CLIENT_SIZE", this.updateBridgeClientViewport(), this.watchWindowResize()
            }

            get windowSize$() {
                return this._windowSize$.asObservable()
            }

            get viewPortUnits$() {
                return this._viewPortUnits$.asObservable()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            onResize(I) {
                this._windowSize$.next({width: I.target.innerWidth, height: I.target.innerHeight})
            }

            setViewPortUnits({vh: I, vw: w}) {
                this._viewPortUnits$.next({vw: w, vh: I})
            }

            watchWindowResize() {
                (0, v.R)(window, "resize").pipe((0, i.b)(100)).subscribe(I => this.onResize(I))
            }

            watchClientResize() {
                this._currentDisplaySize = window.bridge.getDisplaySize(), window.bridge.displayMetricsChange$.pipe(this.utils.enterZone(this.zone), (0, t.h)(I => this.displayMetricsDiffer(I)), (0, d.b)(I => {
                    this._currentDisplaySize = I, this.resizeClient(this.currentClientSize)
                })).subscribe()
            }

            get currentClientSize() {
                return this.storage.get([this.ClientSize]) || "medium"
            }

            resizeClient(I) {
                const w = P.clientSizes.find($ => $.name === I);
                if (!w) return void console.error(`Client Size: ${I}, not supported`);
                this.storage.set([this.ClientSize], w.name);
                const x = this.calcClientSize(w.displayPortion, this._currentDisplaySize.width);
                window.bridge.setClientSize(x.width, x.height, !0, !0)
            }

            calcClientSize(I, w) {
                const x = Math.floor(w * I);
                return {width: x, height: Math.floor(9 * x / 16)}
            }

            displayMetricsDiffer(I) {
                return I.width !== this._currentDisplaySize.width && I.height !== this._currentDisplaySize.height
            }

            updateBridgeClientViewport() {
                this.viewPortUnits$.pipe((0, t.h)(() => "function" == typeof window.bridge.updateViewportUnits), (0, d.b)(I => window.bridge.updateViewportUnits(I)), (0, u.R)(this.unsubscribe)).subscribe()
            }
        }

        return P.clientSizes = [{name: "small", displayPortion: .5}, {
            name: "medium",
            displayPortion: .75
        }, {name: "large", displayPortion: .85}], P.\u0275fac = function (I) {
            return new (I || P)(e.LFG(r.F), e.LFG(e.R0b), e.LFG(n.qy))
        }, P.\u0275prov = e.Yz7({token: P, factory: P.\u0275fac}), P
    })()
}, 5969
:
(se, U, s) => {
    "use strict";
    s.d(U, {g: () => v});
    var l = s(591), a = s(5e3);
    let v = (() => {
        class i {
            constructor() {
                this._openSettings$ = new l.X(null)
            }

            get openSettings$() {
                return this._openSettings$.asObservable()
            }

            openSettings(d = "immutable") {
                this._openSettings$.next(d)
            }

            markSettingsAsOpen() {
                this._openSettings$.next(null)
            }
        }

        return i.\u0275fac = function (d) {
            return new (d || i)
        }, i.\u0275prov = a.Yz7({token: i, factory: i.\u0275fac}), i
    })()
}, 44416
:
(se, U, s) => {
    "use strict";
    s.d(U, {F: () => d});
    var l = s(52886), a = s(56498), v = s(57674), i = s(5e3), t = s(55195);
    let d = (() => {
        class u {
            constructor(e) {
                this.filterService = e
            }

            markFormGroupTouched(e) {
                Object.values(e.controls).forEach(r => {
                    r.markAsTouched(), r.controls && this.markFormGroupTouched(r)
                })
            }

            getRandomInt(e, r) {
                return e = Math.ceil(e), r = Math.floor(r), Math.floor(Math.random() * (r - e + 1)) + e
            }

            arrayToMap(e, r, b) {
                return e ? e.reduce((P, S) => (P[r(S)] = b(S), P), {}) : {}
            }

            groupBy(e, r) {
                const b = new Map;
                return e.forEach(P => {
                    const S = r(P), I = b.get(S);
                    I ? I.push(P) : b.set(S, [P])
                }), b
            }

            convertIdsToCards(e, r, b) {
                const P = [];
                for (const S in r) if (r[S]) {
                    const I = b.get(parseInt(S));
                    r[S].forEach(w => {
                        if (-1 !== e.indexOf(w.id)) {
                            const x = new l.Zb(w.id, parseInt(S), w.q, I, w.status);
                            P.push(x)
                        }
                    })
                }
                return P
            }

            diff(e, r) {
                return [...e.filter(S => !r.includes(S)), ...r.filter(S => !e.includes(S))]
            }

            enterZone(e) {
                return r => new a.y(b => r.subscribe({
                    next(P) {
                        e.run(() => b.next(P))
                    }, error(P) {
                        b.error(P)
                    }, complete() {
                        b.complete()
                    }
                }))
            }

            findLastIndex(e, r) {
                const b = e.slice().reverse().findIndex(r);
                return b >= 0 ? e.length - 1 - b : b
            }

            hashCode(e) {
                let b, P, r = 0;
                if (0 === e.length) return r;
                for (b = 0; b < e.length; b++) P = e.charCodeAt(b), r = (r << 5) - r + P, r |= 0;
                return r
            }

            chunk(e, r) {
                const b = [];
                for (; e.length;) b.push(e.splice(0, r));
                return b
            }

            calcTopCards(e, r, b, deckId) {
                const topCardId = deckId ? localStorage.getItem('deck-last-card-added-' + deckId) : null;
                const P = this.filterService.getSort(v.PE.AscQuality, e);
                const S = [...r].sort(P);
                const I = Math.min(b, S.length);
                const topCard = S.find((deckCard) => deckCard.id + '' === topCardId);
                if (topCard) {
                    return [topCard, ...S.slice(0, I - 1)];
                }
                return S.slice(0, I)
            }

            toISODateString(e) {
                function r(b) {
                    return b < 10 ? "0" + b : b
                }

                return e.getUTCFullYear() + "-" + r(e.getUTCMonth() + 1) + "-" + r(e.getUTCDate()) + "T" + r(e.getUTCHours()) + ":" + r(e.getUTCMinutes()) + ":" + r(e.getUTCSeconds()) + "." + r(e.getUTCMilliseconds()) + "Z"
            }

            calculateContentHeight(e, r) {
                let b = e.style.height, P = e.offsetHeight, S = e.scrollHeight, I = e.style.overflow;
                if (!(P >= S)) return S;
                if (e.style.height = P + r + "px", e.style.overflow = "hidden", S < e.scrollHeight) {
                    for (; e.offsetHeight >= e.scrollHeight;) e.style.height = (P -= r) + "px";
                    for (; e.offsetHeight < e.scrollHeight;) e.style.height = P++ + "px";
                    return e.style.height = b, e.style.overflow = I, P
                }
            }

            dictionaryToMap(e) {
                return Object.entries(e).map(([r, b]) => ({
                    key: r,
                    val: b
                })).reduce((r, b) => r.set(Number(b.key), b.val), new Map)
            }

            adjustToServerTime(e) {
                const r = 1e3 * e, P = (new Date).getTime() + r;
                return new Date(P).toISOString()
            }
        }

        return u.\u0275fac = function (e) {
            return new (e || u)(i.LFG(t.iZ))
        }, u.\u0275prov = i.Yz7({token: u, factory: u.\u0275fac, providedIn: "root"}), u
    })()
}, 21057
:
(se, U, s) => {
    "use strict";
    s.d(U, {m: () => y});
    var l = s(14135), a = s(69808), v = s(93075), i = s(73307), t = s(51649), d = s(5e3);
    let u = (() => {
        class M {
        }

        return M.\u0275fac = function (h) {
            return new (h || M)
        }, M.\u0275mod = d.oAB({type: M}), M.\u0275inj = d.cJS({
            providers: [{provide: t.R, useClass: t.E}],
            imports: [[a.ez]]
        }), M
    })();
    var n = s(55195), e = s(4324), r = s(69878), b = s(23569), P = s(79763), S = s(66088), I = s(236), w = s(18464);
    let $ = (() => {
        class M {
            transform(h, C) {
                const T = new w.BigNumber(10).pow(18);
                return h ? new w.BigNumber(h).div(T) : null
            }
        }

        return M.\u0275fac = function (h) {
            return new (h || M)
        }, M.\u0275pipe = d.Yjl({name: "WeiToEth", type: M, pure: !0}), M
    })();
    var O = s(5969);
    let y = (() => {
        class M {
            static forRoot() {
                return {ngModule: M, providers: [S.Z, P.hM, I.u, $, n.$c, b.d, O.g, {provide: i.Ho, useValue: r.N}]}
            }
        }

        return M.\u0275fac = function (h) {
            return new (h || M)
        }, M.\u0275mod = d.oAB({type: M}), M.\u0275inj = d.cJS({imports: [[a.ez, l.aw, v.u5, v.UX, e.W2, n.xd, u], l.aw, v.UX, e.W2, n.xd, u]}), M
    })()
}, 69878
:
(se, U, s) => {
    "use strict";
    s.d(U, {N: () => I});
    var l = s(55195), a = s(63411), v = s(73307), i = s(40886), t = s(26959), d = s(45425), u = s(5254), n = s(68896),
        e = s(18499), r = s(24850), b = s(5e3);
    const I = {
        production: !0,
        appConfig: "./assets/config/appConfig.prod.json",
        appConfigDev: "./assets/config/appConfig.dev.json",
        facebookId: "1069247517330-3up4o81s0idk15isj1j884v7i4kng8l9.apps.googleusercontent.com",
        googleId: "329849180933335",
        ipApiKey: "MaCXYSWqarQdyw4",
        wyreId: "AC_D3GURN789ZF",
        tickerHost: "https://api.coinmarketcap.com/v1/ticker",
        analyticsHost: "https://ingest.immutable.com/",
        immutableWalletPageURL: "https://landing.immutable.com/wallet",
        envClasses: {
            authService: a.e, ethService: (() => {
                class w {
                    constructor($) {
                        this.environment = $, this.initHTTPProvider()
                    }

                    initHTTPProvider() {
                        this._httpProvider = this.environment.production ? new t.J : new t.J("ropsten")
                    }

                    get httpProvider() {
                        return this._httpProvider
                    }

                    getTransactionReceipt$($) {
                        return (0, u.D)(this._httpProvider.getTransactionReceipt($))
                    }

                    getBalance($) {
                        return (0, u.D)(this._httpProvider.getBalance($))
                    }

                    getTransaction$($) {
                        return (0, u.D)(this.provider.getTransaction($))
                    }

                    getWETHBalance($) {
                        let O, y;
                        return O = new d.ethers.providers.InfuraProvider(this.environment.production ? i.t : i.Y), y = this.environment.production ? "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" : "0xc778417e063141139fce010982780140aa0cd5ab", (0, u.D)(e.WETH9.at(O, y).balanceOf($)).pipe((0, r.U)(M => M.toString()))
                    }

                    getGasPrice() {
                        return (0, u.D)(this.provider ? this.provider.getGasPrice() : (0, n.c)())
                    }
                }

                return w.\u0275fac = function ($) {
                    return new ($ || w)(b.LFG(v.Ho))
                }, w.\u0275prov = b.Yz7({token: w, factory: w.\u0275fac}), w
            })(), cardsService: l.dK, storageService: (() => {
                class w {
                    constructor() {
                    }

                    set($, O) {
                        return null != O && window.bridge.set($, O)
                    }

                    get($) {
                        return window.bridge.get($)
                    }

                    delete($) {
                        return window.bridge.delete($)
                    }
                }

                return w.\u0275fac = function ($) {
                    return new ($ || w)
                }, w.\u0275prov = b.Yz7({token: w, factory: w.\u0275fac, providedIn: "root"}), w
            })(), authHostService: l.f1, audioService: l.QF, featureFlagsService: l.ai
        },
        clientType: "desktop",
        guWebsite: "https://godsunchained.com",
        guManageWalletsURL: "https://godsunchained.com/manage-wallets",
        guRegisterURL: "https://godsunchained.com/account/register",
        GUPropertyValidators: {
            card: "0x200e6fb8febf5355596ccdefe1247e92382cfcfb",
            board: "0x81428219ba5faee2afbe1dbe26ba5e47aab1ed45",
            trinket: "0xc50fd991bc8008928853048d0a4f9fecf3a5e8a3",
            noprop: "0xfd75675db386450d42e3968f405d34dce317adb8"
        },
        recaptchaPublicSiteKeyV2: "6LeBjfcUAAAAAMnGQNtQk2aQZ1W3pENSCbOPfp3g",
        recaptchaPublicSiteKeyV3: "6LcdouAUAAAAABwriEGDpNUrkXoIPbSSVVB2WP2f",
        sentry: {
            dsn: "https://6f5677b3a54f433bbb68ca9f275ebd2a@o1090070.ingest.sentry.io/6112682",
            tracesSampleRate: .1
        },
        purchasingUiHost: "https://purchasing-ui.prod.godsunchained.com",
        launchDarklyKey: "60135261d87a7e09e20a42fe",
        immutableXMarketplaceUrl: "https://market.immutable.com",
        immutableXMarketplaceUrlGUCollection: "https://market.immutable.com/assets?collection=0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",
        GUCollectioimmutableXMarketplaceUrlGUInventory: "https://market.immutable.com/inventory/0xacb3c6a43d15b907e8433077b6d38ae40936fe2c"
    }
}, 97328
:
(se, U, s) => {
    "use strict";
    var l = s(22313), a = s(8929), v = s(591), i = s(21086), t = s(5254);

    class n {
        constructor(D, m, L, j) {
            this.remote = D, this.directory = m, this.filename = L
        }

        start() {
        }

        pause() {
        }

        resume() {
        }

        finish() {
        }

        cancel() {
        }

        download(D) {
            return (0, i.of)()
        }

        dummyDownload(D) {
            return (0, i.of)()
        }
    }

    class P {
        constructor() {
            this.log = void 0, this.warn = void 0, this.error = void 0, this.initLogger()
        }

        initLogger() {
        }
    }

    P.consoleLog = console.log, P.consoleError = console.error, P.consoleWarn = console.warn;
    var S = s(35736);

    class w {
        constructor(D = 1) {
            this.currentRequests = [], this.runningRequests = 0, this.maxConcurrentRequests = D
        }

        callFunction(D, ...m) {
            return D.bind(this, m), console.log("callFunction ---- ", D.name, m), new Promise((L, j) => {
                this.currentRequests.push({resolve: L, reject: j, fnToCall: D, args: m}), this.tryNext()
            })
        }

        tryNext() {
            if (this.currentRequests.length && this.runningRequests < this.maxConcurrentRequests) {
                const {resolve: D, reject: m, fnToCall: L, args: j} = this.currentRequests.shift();
                this.runningRequests++, L(...j).then(Se => D(Se)).catch(Se => m(Se)).finally(() => {
                    this.runningRequests--, this.tryNext()
                })
            }
        }
    }

    function x(f) {
        return f.join("-")
    }

    function $(f) {
        return "object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf(f) >= 0
    }

    !window.bridge && (!function O() {
        return $("Electron")
    }() || function y() {
        return $("Cypress")
    }()) && (window.bridge = new class I {
        constructor() {
            this.logger = new P, this.variant = "browser", this.progress = new a.xQ, this.appsModalExisting$ = new v.X(!1), this.displayMetricsChange$ = new a.xQ, this.isInGame$ = new v.X(!1), this.protocolRedirect$ = new v.X(null), this.watchForDisplayChanges(), this.watchInGameStatus(), this.checkAdditionalArgs(), this.watchForAppsModal(), this.watchProtocolRedirect()
        }

        getDownloadProgress$() {
            return (0, i.of)()
        }

        watchProtocolRedirect() {
            return null
        }

        cancelDownload() {
            console.log("Preload->cancelDownload()"), this.gameDownload && this.gameDownload.cancel()
        }

        pauseDownload() {
            console.log("Preload->pauseDownload()"), this.gameDownload && this.gameDownload.pause()
        }

        resumeDownload() {
            console.log("Preload->resumeDownload()"), this.gameDownload && this.gameDownload.resume()
        }

        openDialog(D, m) {
        }

        isRunning(D) {
            return !0
        }

        extract(D, m, L) {
        }

        download(D, m, L, j) {
            return console.log("Preload->download(urlr, location, filename)", D, m, L), this.gameDownload = new n(D, m, L), this.progress = new a.xQ, (0, t.D)(this.gameDownload.download({
                authToken: j,
                onStart: re => {
                    console.log("Preload->download()->onStart", re)
                },
                onProgress: re => {
                    null != window && this.progress.next(re)
                },
                onEnd: re => {
                    this.progress.complete()
                }
            }))
        }

        downloadAssets(D, m) {
            console.log("Preload->downloadAssets(WithOutSempahore)", D);
            let L = [];
            return L = D.map((j, re) => new n(j.url, m + j.location, j.file_name)), L
        }

        downloadAssetsWithSempahore(D, m, L, j, re) {
            console.log("Preload->downloadAssetsWithSempahore()", D);
            const Se = new w(re);
            return D.map((Ge, je) => {
                const nt = {
                    authToken: j, onStart: ve => {
                    }, onProgress: ve => {
                        L[je].next(ve)
                    }, onEnd: ve => {
                        L[je].complete()
                    }
                };
                console.log(Ge.url, m + Ge.location, Ge.file_name);
                const Ke = new n(Ge.url, m + Ge.location, Ge.file_name), ye = Ke.download.bind(Ke, nt);
                return (0, t.D)(Se.callFunction(ye, nt))
            })
        }

        onQuit(D) {
        }

        focus() {
        }

        deleteFile(D) {
        }

        chmod(D, m) {
        }

        execute(D, m) {
            return null
        }

        executeArgs(D, m, L) {
            return null
        }

        clearCache() {
        }

        exists(D) {
            return !0
        }

        homeDirectory() {
            return ""
        }

        platform() {
            return ""
        }

        createServer(D, m) {
        }

        serverActive() {
            return null
        }

        closeServer() {
        }

        set(D, m) {
            window.sessionStorage.setItem(x(D), JSON.stringify(m))
        }

        get(D) {
            const m = window.sessionStorage.getItem(x(D));
            return null !== m ? JSON.parse(m) : null
        }

        delete(D) {
            window.sessionStorage.removeItem(x(D))
        }

        minimizeWindow() {
        }

        maximizeWindow() {
        }

        closeWindow() {
        }

        setFullscreen(D) {
        }

        getDisplaySize() {
            return {height: 0, width: 0}
        }

        setClientSize(D, m, L = !1, j = !1) {
        }

        watchForDisplayChanges() {
        }

        watchInGameStatus() {
        }

        watchForAppsModal() {
        }

        setInGameStatus(D) {
        }

        clearGUAssets(D) {
        }

        checkAdditionalArgs() {
            const D = S.argv.map(m => m.split("=")).reduce((m, [L, j]) => (m[L] = j, m), {});
            D["--auth-id"] && D["--auth-access"] && (this.authId = +D["--auth-id"], this.authAccess = D["--auth-access"]), D["--session-ticket"] && (this.sessionTicket = D["--session-ticket"]), D["--vw"] && D["--vh"] && (this.vw = D["--vw"], this.vh = D["--vh"])
        }

        updateAuthPair(D) {
        }

        updateSession(D) {
        }

        updateViewportUnits(D) {
        }

        setClientPosition(D, m, L = !1) {
        }

        toggleFullscreen() {
        }

        createClient(D, m) {
            return {
                on: (L, j) => {
                }, send: (L, j) => {
                }, destroy: () => {
                }, socketConnected: !1
            }
        }

        join(...D) {
        }

        version() {
        }

        launcherTarget() {
        }

        httpGet(D) {
            return (0, t.D)(fetch(D).then(m => m.json()))
        }

        httpPost(D, m) {
            return (0, i.of)()
        }
    });
    var M = s(43050), o = s(5e3);
    const h = JSON.parse('{"buildNumber":"1237","branch":"master"}');
    var C = s.t(h, 2), K = (s(12751), s(53161)), ce = s(16517), ae = s(32182), me = s(96727), G = s(99565),
        Y = s(60870), ue = s(40520), oe = s(93075), Ce = s(76360), H = s(73307), Z = s(38076);
    let de = (() => {
        class f {
            constructor(m) {
                this.authService = m
            }

            init() {
                this.authService.account$.subscribe(m => {
                    m ? Z.av({id: String(m.id), username: m.username}) : Z.e(L => L.setUser(null))
                })
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.LFG(H.mI))
        }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac, providedIn: "root"}), f
    })();
    var xe = s(87182), be = s(74806), W = s(11735), J = s(531);
    let ie = (() => {
        class f {
            serialize(m) {
                return {
                    url: m.url,
                    params: ge(m.root, L => L.params),
                    queryParams: ge(m.root, L => L.queryParams),
                    data: fe(m.root)
                }
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)
        }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac}), f
    })();

    function ge(f, D) {
        if (!f) return {};
        const m = D(f), L = f.children.find(j => "primary" === j.outlet) || f.firstChild;
        return Object.assign(Object.assign({}, m), ge(L, D))
    }

    function fe(f) {
        if (!f) return {};
        const D = f.data, m = f.children.find(L => "primary" === L.outlet) || f.firstChild;
        return Object.assign(Object.assign({}, D), fe(m))
    }

    const ke = {stateKey: "router", navigationActionTiming: ae.R0.PostActivation, serialzer: ie};
    (0, me.ZF)(ke.stateKey);
    var Ie = s(55195), B = s(4324), Q = s(69878), Ee = (s(70893), s(59633)), tt = s(7625), Be = s(92198), Ve = s(24850),
        st = s(61709), it = s(2994), We = (s(3241), s(77391)), Ze = s(44416);
    let bt = (() => {
        class f {
            constructor(m, L, j) {
                this.utils = m, this.zone = L, this.router = j, this._protocolPayload$ = new a.xQ, this.unsubscribe = new a.xQ
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            get protocolPayload$() {
                return this._protocolPayload$.asObservable()
            }

            watchProtocol() {
                window.bridge.protocolRedirect$.pipe(this.utils.enterZone(this.zone), (0, tt.R)(this.unsubscribe), (0, Be.h)(m => !!m), (0, it.b)(({url: m}) => {
                    this.handlePayload(m), this.handleRouteChange(m)
                })).subscribe()
            }

            handlePayload(m) {
                const L = m.split("?payload=")[1];
                if (!L) return !1;
                const j = decodeURIComponent(L), re = JSON.parse(j);
                if (this._protocolPayload$.next(re), re.toString().indexOf("/game/gu/")) {
                    const Se = re.toString();
                    this.router.navigate([Se])
                }
            }

            handleRouteChange(m) {
                const L = m.match(/(imtbl.*):\/\/(game\/gu\/.*)/);
                if (!L) return !1;
                const j = L[2];
                j && this.router.navigate([`/${j}`])
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.LFG(Ze.F), o.LFG(o.R0b), o.LFG(W.F0))
        }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac, providedIn: "root"}), f
    })();
    var qe = s(6674);
    const at = ["ratioSetter"], rt = ["*"];
    let At = (() => {
        class f {
            constructor(m, L) {
                this.resizeService = m, this.el = L
            }

            ngOnInit() {
                this.resizeService.windowSize$.subscribe(() => this.setCustomViewportProps()), this.setCustomViewportProps()
            }

            triggerCalcs() {
                this.setCustomViewportProps()
            }

            setCustomViewportProps() {
                const m = this.ratioSetter.nativeElement, L = .01 * m.offsetWidth, j = .01 * m.offsetHeight;
                document.documentElement.style.setProperty("--vw", `${L}px`), document.documentElement.style.setProperty("--vh", `${j}px`), this.resizeService.setViewPortUnits({
                    vw: L,
                    vh: j
                })
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(qe._), o.Y36(o.SBq))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["app-auto-letterbox"]],
            viewQuery: function (m, L) {
                if (1 & m && o.Gf(at, 7), 2 & m) {
                    let j;
                    o.iGM(j = o.CRH()) && (L.ratioSetter = j.first)
                }
            },
            ngContentSelectors: rt,
            decls: 5,
            vars: 0,
            consts: [[1, "appRatioSetter"], ["ratioSetter", ""], ["src", "/assets/images/16-x-9-ratio.png", "alt", "ratio image", 1, "appRatioSetter__ratioImage", 3, "load"], [1, "innerAppContainer"]],
            template: function (m, L) {
                1 & m && (o.F$t(), o.TgZ(0, "div", 0, 1)(2, "img", 2), o.NdJ("load", function () {
                    return L.triggerCalcs()
                }), o.qZA(), o.TgZ(3, "div", 3), o.Hsn(4), o.qZA()())
            },
            styles: ["[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;height:100vh;width:100vw;background:var(--gu-blue-dark);}.appRatioSetter[_ngcontent-%COMP%]{margin:auto;position:relative;width:100vw;padding-bottom:56.23%}.appRatioSetter__ratioImage[_ngcontent-%COMP%]{display:none}.innerAppContainer[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;display:flex;flex-direction:column}@media screen and (min-aspect-ratio:1282/720) {.appRatioSetter[_ngcontent-%COMP%]{height:100vh;width:auto;padding-bottom:0}.appRatioSetter__ratioImage[_ngcontent-%COMP%]{display:block;width:auto;height:100%}}"]
        }), f
    })();
    var Pe = s(52492), $e = s(41777), ee = s(72986), ne = s(79763), _e = s(69808), N = s(80013), F = s(40537),
        c = s(27221), _ = s(66088), E = s(83035);

    function we(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.TgZ(0, "form", 8)(1, "label", 9), o._uU(2, "Username"), o.qZA(), o.TgZ(3, "div", 10)(4, "input", 11), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().audioService.clickTinyV1.play()
            }), o.qZA(), o.TgZ(5, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().updateUser()
            }), o._uU(6), o.qZA()(), o.TgZ(7, "div", 12), o._uU(8, " Your username will be publicly visible. "), o.qZA()()
        }
        if (2 & f) {
            const m = o.oxw();
            o.Q6J("formGroup", m.formGroup), o.xp6(6), o.hij(" ", m.updating ? "Saving" : "Save", " ")
        }
    }

    s(63411);
    const {buildNumber: Ne, branch: mt} = C, It = window.bridge && window.bridge.version ? window.bridge.version() : 0,
        Dt = window.bridge && window.bridge.launcherTarget ? window.bridge.launcherTarget() : "PROD";
    let Qe = (() => {
        class f {
            constructor(m, L, j, re, Se, De, Ge, je) {
                this.authService = m, this.fb = L, this.audioService = j, this.modalService = re, this.resizeService = Se, this.utils = De, this.storage = Ge, this.queueService = je, this.loading = !1, this.updating = !1, this.version = It, this.launcherTarget = Dt, this.cerberusBuildNumber = Ne, this.cerberusBranch = mt, this.clientSizes = qe._.clientSizes, this.volume = 0, this.volumeControl = new oe.NI(.9), this.unsubscribe = new a.xQ
            }

            ngOnInit() {
                this.anonymous || this.initUserNameForm(), this.clientSize = this.resizeService.currentClientSize, this.initVolumeControl()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            initVolumeControl() {
                const m = this.storage.get(["gu-audioVolume"]);
                this.volumeControl.setValue(m), this.volumeControl.valueChanges.pipe((0, tt.R)(this.unsubscribe), (0, N.b)(100)).subscribe(L => this.audioService.setGlobalVolume(L))
            }

            logout() {
                this.modalService.destroyTopModal(), this.queueService.stopAllQueues(), this.authService.logout()
            }

            clearCache() {
                window.bridge.clearCache(), location.reload()
            }

            updateUser() {
                this.formGroup.invalid ? this.utils.markFormGroupTouched(this.formGroup) : this.updating || (this.updating = !0, this.authService.updateCurrentUser({username: this.formGroup.get("username").value}).pipe((0, F.x)(() => {
                    this.updating = !1
                })).subscribe())
            }

            updateClientSize(m) {
                this.resizeService.resizeClient(m)
            }

            initUserNameForm() {
                this.buildFormGroup(), this.loading = !0, this.authService.account$.pipe((0, tt.R)(this.unsubscribe), (0, it.b)(m => this.formGroup.get("username").setValue(m.username)), (0, c.K)(m => (this.logout(), m)), (0, F.x)(() => this.loading = !1)).subscribe()
            }

            buildFormGroup() {
                this.formGroup = this.fb.group({
                    username: ["", oe.kI.required],
                    volume: [this.storage.get(["gu-audioVolume"]) || 0, oe.kI.required]
                })
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(H.mI), o.Y36(oe.qu), o.Y36(H.pk), o.Y36(_.Z), o.Y36(qe._), o.Y36(Ze.F), o.Y36(H.qy), o.Y36(E.g))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["app-apollo-settings"]],
            inputs: {anonymous: "anonymous"},
            decls: 14,
            vars: 9,
            consts: [["class", "settingsForm", 3, "formGroup", 4, "ngIf"], [1, "audioControl"], [1, "audioControl__heading"], ["id", "volume", "type", "range", "min", "0", "max", "1", "step", "0.1", 1, "audioControl__rangeInput", 3, "formControl"], ["for", "#volume", 1, "audioControl__volumeLabel"], [1, "version-label"], [1, "version-label", "mb-5"], ["type", "primary", "size", "small", 3, "click"], [1, "settingsForm", 3, "formGroup"], ["for", "usernameInput", 1, "settingsForm__label"], [1, "settingsForm__inputsRow"], ["name", "username", "type", "text", "formControlName", "username", "id", "usernameInput", "aria-describedby", "usernameHelp", 1, "settingsForm__textInput", 3, "click"], ["id", "usernameHelp", 1, "settingsForm__hintText"]],
            template: function (m, L) {
                1 & m && (o.YNc(0, we, 9, 2, "form", 0), o.TgZ(1, "div", 1)(2, "label", 2), o._uU(3, "Audio Volume"), o.qZA(), o._UZ(4, "input", 3), o.TgZ(5, "label", 4), o._uU(6), o.qZA()(), o.TgZ(7, "h5", 5), o._uU(8), o.ALo(9, "lowercase"), o.qZA(), o.TgZ(10, "h5", 6), o._uU(11), o.qZA(), o.TgZ(12, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                    return L.clearCache()
                }), o._uU(13, " Clear Cache "), o.qZA()), 2 & m && (o.Q6J("ngIf", !L.anonymous), o.xp6(4), o.Q6J("formControl", L.volumeControl), o.xp6(2), o.Oqu(L.volumeControl.value), o.xp6(2), o.AsE("Launcher Version: ", L.version, "-", o.lcZ(9, 7, L.launcherTarget), ""), o.xp6(3), o.AsE("Cerberus Version: ", L.cerberusBranch, ".", L.cerberusBuildNumber, ""))
            },
            directives: [_e.O5, oe._Y, oe.JL, oe.sg, oe.Fj, oe.JJ, oe.u, oe.eT, oe.oH],
            pipes: [_e.i8],
            styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.version-label[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settingsForm__hintText[_ngcontent-%COMP%], .settingsForm__textInput[_ngcontent-%COMP%], .audioControl__heading[_ngcontent-%COMP%], .settingsForm__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.version-label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.audioControl__heading[_ngcontent-%COMP%], .settingsForm__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settingsForm__hintText[_ngcontent-%COMP%], .settingsForm__textInput[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settingsForm__hintText[_ngcontent-%COMP%], .settingsForm__textInput[_ngcontent-%COMP%]{line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;margin:auto}.settingsForm[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-self:center;width:70%}.settingsForm__inputsRow[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.settingsForm__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4);flex-grow:1;margin:0 calc(var(--vw) * 1) 0 0}.settingsForm__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settingsForm__cta[_ngcontent-%COMP%]{min-width:calc(var(--vw) * 8);flex-grow:0}.settingsForm__hintText[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 2)}.version-label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 4);text-align:center;user-select:all}.settingsForm__select[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65);font-size:calc(var(--vh) * 1.9)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settingsForm__bottomCta[_ngcontent-%COMP%]{width:70%;margin:0 auto}.settingsForm__bottomCta--cacheClear[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 4);margin-bottom:calc(var(--vh) * 2)}.audioControl[_ngcontent-%COMP%]{width:70%;margin:calc(var(--vh) * 3) auto}.audioControl__volumeLabel[_ngcontent-%COMP%]{display:inline-block;position:relative;width:60px;line-height:20px;text-align:center;border-radius:3px;color:#e0c58f;padding:5px 10px;margin-left:8px}.audioControl__rangeInput[_ngcontent-%COMP%]{-webkit-appearance:none;width:calc(100% - 73px);height:10px;border-radius:5px;background:#1d2f41;outline:none;padding:0;margin:0}.audioControl__rangeInput[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#e0c58f;cursor:pointer}.audioControl__rangeInput[_ngcontent-%COMP%]:active::-webkit-slider-thumb{background:#e0c58f}.audioControl__rangeInput[_ngcontent-%COMP%]::-moz-range-thumb{width:20px;height:20px;border:0;border-radius:50%;background:#e0c58f;cursor:pointer}"]
        }), f
    })();
    var lt = s(69340);

    function ps(f, D) {
        if (1 & f && (o.TgZ(0, "option", 11), o._uU(1), o.qZA()), 2 & f) {
            const m = D.$implicit;
            o.Q6J("ngValue", m.name), o.xp6(1), o.Oqu(m.name)
        }
    }

    function Pt(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.ynx(0), o.TgZ(1, "label", 8), o._uU(2, "Branch"), o.qZA(), o.TgZ(3, "select", 9), o.NdJ("ngModelChange", function (j) {
                return o.CHM(m), o.oxw(2).updateBranch(j, !0)
            })("click", function () {
                return o.CHM(m), o.oxw(2).playClickTinyV1()
            })("ngModelChange", function (j) {
                return o.CHM(m), o.oxw(2).branch = j
            }), o.YNc(4, ps, 2, 2, "option", 10), o.qZA(), o.BQk()
        }
        if (2 & f) {
            const m = o.oxw(2);
            o.xp6(3), o.Q6J("ngModel", m.branch), o.xp6(1), o.Q6J("ngForOf", m.branchesExtended)
        }
    }

    function ze(f, D) {
        if (1 & f && (o.ynx(0), o.TgZ(1, "label", 12), o._uU(2, "Local Version"), o.qZA(), o._UZ(3, "input", 5), o.BQk()), 2 & f) {
            const m = o.oxw(2);
            o.xp6(3), o.Q6J("value", m.local)
        }
    }

    function gs(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.TgZ(0, "form", 1), o.YNc(1, Pt, 5, 2, "ng-container", 2), o.TgZ(2, "label", 3), o._uU(3, "Installation Path"), o.qZA(), o.TgZ(4, "div", 4), o._UZ(5, "input", 5), o.TgZ(6, "gu-icon", 6), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().showDialog()
            }), o.qZA()(), o.YNc(7, ze, 4, 1, "ng-container", 2), o.TgZ(8, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().clearVersion()
            }), o._uU(9, "Clear Version"), o.qZA(), o.TgZ(10, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().clearAssets()
            }), o._uU(11, "Clear Assets"), o.qZA()()
        }
        if (2 & f) {
            const m = o.oxw();
            o.xp6(1), o.Q6J("ngIf", m.branchesExtended), o.xp6(4), o.Q6J("value", m.path), o.xp6(2), o.Q6J("ngIf", m.local)
        }
    }

    let hs = (() => {
        class f {
            constructor(m, L, j) {
                this.gameService = m, this.gameDownloadService = L, this.audioService = j, this.loaded = !1
            }

            ngOnInit() {
                !this.game || (this.branch = this.gameService.getProperty(this.game.id, "branch"), this.path = this.gameService.getInstallPath(this.game), this.version = this.gameService.getProperty(this.game.id, "version"), this.updateBranch(this.branch), this.initBranches())
            }

            initBranches() {
                this.gameService.branches$.pipe((0, st.VS)(m => (this.branchesExtended = m, !this.branch && this.branchesExtended && this.updateBranch(this.branchesExtended[0].name), this.gameDownloadService.getVersions(this.game, this.branch)))).subscribe(([m, L]) => {
                    this.local = L, this.loaded = !0
                }, () => this.loaded = !0)
            }

            updateBranch(m, L) {
                this.branch = m, this.gameService.setProperty(this.game.id, "branch", this.branch), this.gameService.refreshGameContext(), L && setTimeout(() => window.location.reload())
            }

            clearVersion() {
                this.gameService.deleteProperty(this.game.id, "version"), this.gameService.refreshGameContext(), setTimeout(() => window.location.reload())
            }

            clearAssets() {
                this.gameService.clearAssets(this.game.id)
            }

            showDialog() {
                this.playClickTinyV1(), window.bridge.openDialog({
                    properties: ["openDirectory", "createDirectory"],
                    defaultPath: this.path,
                    message: "Choose Install Directory"
                }, (m, L) => {
                    m && m.length > 0 && (this.path = m[0], this.gameService.setProperty(this.game.id, "path", this.path))
                })
            }

            playClickTinyV1() {
                this.audioService.clickTinyV1.play()
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(ne.hM), o.Y36(lt.b5), o.Y36(H.pk))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["app-game-settings"]],
            inputs: {game: "game"},
            decls: 1,
            vars: 1,
            consts: [["class", "settingsForm", 4, "ngIf"], [1, "settingsForm"], [4, "ngIf"], ["for", "installpath", 1, "settingsForm__label"], [1, "settingsForm__path"], ["type", "text", "disabled", "", 1, "settingsForm__textInput", 3, "value"], ["iconLigature", "settings_cog", 1, "path-select-btn", 3, "click"], ["type", "primary", "size", "large", 3, "click"], ["for", "sel1", 1, "settingsForm__label"], ["name", "branch", "id", "sel1", 1, "settingsForm__select", 3, "ngModel", "ngModelChange", "click"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "settingsForm__label"]],
            template: function (m, L) {
                1 & m && o.YNc(0, gs, 12, 3, "form", 0), 2 & m && o.Q6J("ngIf", L.loaded)
            },
            directives: [_e.O5, oe._Y, oe.JL, oe.F, oe.EJ, oe.JJ, oe.On, _e.sg, oe.YN, oe.Kr],
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.settingsForm__textInput[_ngcontent-%COMP%], .settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settingsForm__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.settingsForm__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.settingsForm__textInput[_ngcontent-%COMP%], .settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.settingsForm__textInput[_ngcontent-%COMP%], .settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:block;margin:auto}.settingsForm[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:60%;margin:auto}.settingsForm__path[_ngcontent-%COMP%]{display:flex}.settingsForm__label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3)}.path-select-btn[_ngcontent-%COMP%]{height:calc(var(--vh) * 5);line-height:calc(var(--vh) * 5);width:calc(var(--vh) * 5);margin-top:calc(var(--vh) * .65);background-color:#072337;border-radius:0 calc(var(--vh) * .4) calc(var(--vh) * .4) 0;cursor:pointer;border:calc(var(--vh) * .15) solid #c6a052;border-left:none;text-align:center;display:flex}.path-select-btn[_ngcontent-%COMP%]     i{margin:auto}.settingsForm__select[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settingsForm__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4);margin-top:calc(var(--vh) * .65)}.settingsForm__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settingsForm__textInput[_ngcontent-%COMP%]{flex:1;border:calc(var(--vh) * .15) solid #c6a052;border-radius:calc(var(--vh) * .4) 0 0 calc(var(--vh) * .4)}.settingsForm__cta[_ngcontent-%COMP%]{align-self:center;margin:0 auto;margin-top:calc(var(--vh) * 4)}"]
        }), f
    })(), ms = (() => {
        class f {
            constructor() {
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["app-wallet-settings"]],
            decls: 9,
            vars: 0,
            consts: [["top", "2x-large", 1, "manageWalletsLink"], ["kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100"], ["both", "large"], ["kind", "small", "fillColor", "colors.light.100"], ["href", "https://godsunchained.com/manage-wallets", "target", "_blank", "backgroundFillColor", "colors.gunmetal.500", "borderColor", "colors.gunmetal.300", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.light.300", "icon", "leave_website", "leftIconPosition", "true"]],
            template: function (m, L) {
                1 & m && (o.TgZ(0, "gu-vertical-space", 0)(1, "gu-vertical-space")(2, "gu-paragraph-text", 1), o._uU(3, " Wallet Management & Linking to Immutable X "), o.qZA()(), o.TgZ(4, "gu-vertical-space", 2)(5, "gu-paragraph-text", 3), o._uU(6, " Add, remove, or view wallets, and link your wallets to the Immutable X marketplace. "), o.qZA()(), o.TgZ(7, "gu-plain-square-button", 4), o._uU(8, " Go to Website "), o.qZA()())
            },
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settings__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.settings__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:block;margin:0 auto}.settings[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:100%;margin:auto}.settings__label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3)}.settings__select[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settings__cta[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65);color:#affaed}.manageWalletsLink[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}"]
        }), f
    })();

    function Lt(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.TgZ(0, "div", 1), o.NdJ("click", function () {
                const re = o.CHM(m).$implicit;
                return o.oxw().selectTab(re.title, re)
            }), o._uU(1), o.qZA()
        }
        if (2 & f) {
            const m = D.$implicit, L = o.oxw();
            o.ekj("active", m.title === L.activeTab), o.xp6(1), o.hij(" ", m.title.toUpperCase(), " ")
        }
    }

    function no(f, D) {
        if (1 & f && o._UZ(0, "app-apollo-settings", 7), 2 & f) {
            const m = o.oxw();
            o.Q6J("anonymous", m.anonymous)
        }
    }

    function _s(f, D) {
        if (1 & f && o._UZ(0, "app-game-settings", 8), 2 & f) {
            const m = o.oxw();
            o.Q6J("game", m.selectedGame)
        }
    }

    function fs(f, D) {
        1 & f && o._UZ(0, "app-wallet-settings", 9)
    }

    let Ds = (() => {
        class f {
            constructor(m, L, j) {
                this.gameService = m, this.audioService = L, this.authService = j, this.activeTab = "immutable", this.games = []
            }

            ngOnInit() {
                const m = this.authService.getUserId();
                m ? (this.anonymous = !1, this.gameService.getGames(m).pipe((0, ee.q)(1)).subscribe(L => this.games = L.records)) : this.anonymous = !0
            }

            selectTab(m, L) {
                this.audioService.clickMediumV1.play(), this.activeTab = m, L && (this.selectedGame = L)
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(ne.hM), o.Y36(H.pk), o.Y36(H.mI))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["app-settings-modal"]],
            inputs: {activeTab: "activeTab"},
            decls: 10,
            vars: 9,
            consts: [[1, "side-pane"], [1, "side-pane-item", 3, "click"], ["class", "side-pane-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "settingsContent"], ["class", "settingsContent__tab", 3, "anonymous", 4, "ngIf"], ["class", "settingsContent__tab", 3, "game", 4, "ngIf"], ["class", "settingsContent__tab", 4, "ngIf"], [1, "settingsContent__tab", 3, "anonymous"], [1, "settingsContent__tab", 3, "game"], [1, "settingsContent__tab"]],
            template: function (m, L) {
                1 & m && (o.TgZ(0, "aside", 0)(1, "div", 1), o.NdJ("click", function () {
                    return L.selectTab("immutable")
                }), o._uU(2, " Immutable "), o.qZA(), o.YNc(3, Lt, 2, 3, "div", 2), o.TgZ(4, "div", 1), o.NdJ("click", function () {
                    return L.selectTab("wallet")
                }), o._uU(5, " WALLET "), o.qZA()(), o.TgZ(6, "div", 3), o.YNc(7, no, 1, 1, "app-apollo-settings", 4), o.YNc(8, _s, 1, 1, "app-game-settings", 5), o.YNc(9, fs, 1, 0, "app-wallet-settings", 6), o.qZA()), 2 & m && (o.xp6(1), o.ekj("active", "immutable" === L.activeTab), o.xp6(2), o.Q6J("ngForOf", L.games), o.xp6(1), o.ekj("active", "wallet" === L.activeTab), o.xp6(2), o.Q6J("@fade", L.activeTab), o.xp6(1), o.Q6J("ngIf", "immutable" === L.activeTab), o.xp6(1), o.Q6J("ngIf", "wallet" !== L.activeTab && "immutable" !== L.activeTab), o.xp6(1), o.Q6J("ngIf", "wallet" === L.activeTab))
            },
            directives: [_e.sg, _e.O5, Qe, hs, ms],
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.side-pane-item[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.side-pane-item[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}[_nghost-%COMP%]{width:calc(var(--vw) * 60);height:calc(var(--vh) * 80);border-radius:calc(var(--vh) * .4);background-color:#0c1620;border:calc(var(--vh) * .15) solid #e0c58f;display:flex}.side-pane[_ngcontent-%COMP%]{width:30%;border-right:calc(var(--vh) * .15) solid #e0c58f;display:flex;flex-flow:column nowrap}.side-pane-item[_ngcontent-%COMP%]{padding:calc(var(--vh) * 1.8);color:#f6f6f6;text-align:center;transition:all .15s ease;cursor:pointer}.side-pane-item[_ngcontent-%COMP%]:hover{background-color:#1d2f41}.side-pane-item.active[_ngcontent-%COMP%]{background-color:#182531}.settingsContent[_ngcontent-%COMP%]{padding:calc(var(--vh) * 1.8);flex:1;display:flex}.settingsContent__tab[_ngcontent-%COMP%]{width:calc(var(--vw) * 30)}"],
            data: {animation: [(0, $e.X$)("fade", [(0, $e.eR)("* => *", [(0, $e.jt)(500, (0, $e.F4)([(0, $e.oB)({opacity: 0}), (0, $e.oB)({opacity: 1})]))])])]}
        }), f
    })();
    var es = s(5969);
    let Zt = (() => {
        class f {
            constructor(m, L, j, re) {
                this.modalService = m, this.audioService = L, this.settingsService = j, this.akumaService = re, this.unsubscribe = new a.xQ
            }

            ngOnInit() {
                this.watchSettingsService()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            watchSettingsService() {
                this.settingsService.openSettings$.pipe((0, tt.R)(this.unsubscribe), (0, Be.h)(m => !!m)).subscribe(m => {
                    this.openSettings(m), this.settingsService.markSettingsAsOpen()
                })
            }

            windowFullscreen() {
                this.audioService.clickTinyV1.play(), window.bridge.toggleFullscreen()
            }

            closeWindow() {
                this.audioService.clickTinyV1.play(), window.bridge.closeWindow()
            }

            minimize() {
                this.audioService.clickTinyV1.play(), window.bridge.minimizeWindow()
            }

            openSettings(m) {
                this.akumaService.postControlEvent("gu", "Arena", "", "settings", "Mnu", "pressed"), this.audioService.clickTinyV1.play(), this.modalService.createModal(Ds, {activeTab: m}, {
                    blurredBackground: !0,
                    canCloseFromOutside: !0,
                    position: Pe.e1.Center,
                    size: Pe.Cg.StretchableFullscreen
                })
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(_.Z), o.Y36(H.pk), o.Y36(es.g), o.Y36(Ie.jt))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["cerberus-draggable-titlebar"]],
            decls: 9,
            vars: 0,
            consts: [[1, "electronMenuItem", "electronMenuItem--closeWindow", 3, "click"], ["iconLigature", "close_x", 1, "electronMenuItem__icon"], [1, "electronMenuItem", "electronMenuItem--windowToggle", 3, "click"], ["iconLigature", "window_toggle", 1, "electronMenuItem__icon"], [1, "electronMenuItem", "electronMenuItem--minimise", 3, "click"], ["iconLigature", "window_minimise", 1, "electronMenuItem__icon"], [1, "electronMenuItem", "electronMenuItem--settings", 3, "click"], ["iconLigature", "settings_cog", 1, "electronMenuItem__icon"], [1, "draggable"]],
            template: function (m, L) {
                1 & m && (o.TgZ(0, "a", 0), o.NdJ("click", function () {
                    return L.closeWindow()
                }), o._UZ(1, "gu-icon", 1), o.qZA(), o.TgZ(2, "a", 2), o.NdJ("click", function () {
                    return L.windowFullscreen()
                }), o._UZ(3, "gu-icon", 3), o.qZA(), o.TgZ(4, "a", 4), o.NdJ("click", function () {
                    return L.minimize()
                }), o._UZ(5, "gu-icon", 5), o.qZA(), o.TgZ(6, "a", 6), o.NdJ("click", function () {
                    return L.openSettings("immutable")
                }), o._UZ(7, "gu-icon", 7), o.qZA(), o._UZ(8, "div", 8))
            },
            styles: ["[_nghost-%COMP%]{width:100%;height:28px;z-index:22;background:#1D2F41;display:flex;flex-direction:row-reverse;padding-right:8px}.draggable[_ngcontent-%COMP%]{flex:1;-webkit-app-region:drag}.electronMenuItem[_ngcontent-%COMP%]{cursor:pointer;display:flex;width:28px}.electronMenuItem[_ngcontent-%COMP%]:hover   .electronMenuItem__icon[_ngcontent-%COMP%]{color:#f6f6f6}.electronMenuItem__icon[_ngcontent-%COMP%]{font-size:14px;margin:auto;text-shadow:0 2px 0 rgba(39,39,39,.4);color:#7192b0}"]
        }), f
    })();
    var ts = s(39765), vs = s(25774), _t = s(97993);

    function bs(f, D) {
        1 & f && (o.TgZ(0, "cerberus-announce-banner-control", 2), o._UZ(1, "cerberus-controllable-banner"), o.qZA())
    }

    function Ls(f, D) {
        if (1 & f && (o.ynx(0), o.YNc(1, bs, 2, 0, "cerberus-announce-banner-control", 1), o.BQk()), 2 & f) {
            const m = o.oxw();
            o.xp6(1), o.Q6J("featureFlagIf", m.Flags.showControllableBanner)
        }
    }

    let ys = (() => {
        class f {
            constructor(m, L, j, re, Se, De, Ge, je) {
                this.vcr = m, this.analyticsService = L, this.authService = j, this.router = re, this.navigationService = Se, this.route = De, this.protocolService = Ge, this.akumaService = je, this.Flags = Ie.vU, this.destroyed$ = new a.xQ, this.watchForNavigation(), this.protocolService.watchProtocol()
            }

            ngOnInit() {
                this.logSessionStarted(), this.logSessionAuthenticated(), this.authService.account$.pipe((0, tt.R)(this.destroyed$)).subscribe(m => {
                    this.isLoggedIn = !!m
                })
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            logSessionStarted() {
                "function" == typeof gtag && gtag("event", "started", {event_category: "session"});
                const m = {is_referred: !1, landing_page: window.location.pathname};
                this.analyticsService.postEvent(new Ee.Session.Started.Event(m)), this.akumaService.postEvent("Flow", "_session_started", m), "function" == typeof fbq && fbq("track", "ViewLauncher")
            }

            logSessionAuthenticated() {
                this.authService.isLoggedIn() && ("function" == typeof gtag && gtag("event", "authenticated", {event_category: "session"}), this.analyticsService.postEvent(new Ee.Session.Authenticated.Event({})), this.akumaService.postEvent("Flow", "_sessionAuthenticated_succeeded"))
            }

            watchForNavigation() {
                this.router.events.pipe((0, Be.h)(m => m instanceof W.m2), (0, Ve.U)(() => this.route), (0, Ve.U)(m => {
                    for (; m.firstChild;) m = m.firstChild;
                    return m
                }), (0, st.zg)(m => m.data), (0, Ve.U)(m => m.hasOwnProperty("state") ? m.state : ""), (0, it.b)(m => this.navigationService.updateCurrentRoute(m))).subscribe(() => {
                })
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(o.s_b), o.Y36(Ie.yD), o.Y36(H.mI), o.Y36(W.F0), o.Y36(We.f), o.Y36(W.gz), o.Y36(bt), o.Y36(Ie.jt))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["cerberus-root"]],
            decls: 4,
            vars: 1,
            consts: [[4, "ngIf"], ["class", "announceBannerControl announceBannerControl--inline", 4, "featureFlagIf"], [1, "announceBannerControl", "announceBannerControl--inline"]],
            template: function (m, L) {
                1 & m && (o.TgZ(0, "app-auto-letterbox"), o._UZ(1, "cerberus-draggable-titlebar"), o.YNc(2, Ls, 2, 1, "ng-container", 0), o._UZ(3, "router-outlet"), o.qZA()), 2 & m && (o.xp6(2), o.Q6J("ngIf", !L.isLoggedIn))
            },
            directives: [At, Zt, _e.O5, ts.w, vs.O, _t.i, W.lC],
            styles: ["[_nghost-%COMP%]{display:block}"]
        }), f
    })();
    var Ut = s(83920);
    let dt = (() => {
        class f {
            constructor(m) {
                this.elementRef = m
            }

            ngAfterViewInit() {
                setTimeout(() => this.elementRef.nativeElement.focus())
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(o.SBq))
        }, f.\u0275dir = o.lG2({type: f, selectors: [["", "cerberusFocusInitial", ""]]}), f
    })();
    var Kt = s(45821);

    function Wt(f, D) {
        if (1 & f && (o.TgZ(0, "gu-body-text", 13), o._uU(1), o.qZA()), 2 & f) {
            const m = o.oxw();
            o.xp6(1), o.hij(" ", m.loginError, " ")
        }
    }

    let zt = (() => {
        class f {
            constructor(m, L, j, re, Se, De, Ge, je, nt) {
                this.analyticsService = m, this.authService = L, this.fb = j, this.utils = re, this.router = Se, this.storageService = De, this.audioService = Ge, this.akumaService = je, this.environment = nt, this.loading = !1
            }

            ngOnInit() {
                this.buildFormGroup(), this.formGroup.setValue({rememberMe: !0, email: null, password: null})
            }

            login() {
                if (this.formGroup.invalid) return void this.utils.markFormGroupTouched(this.formGroup);
                if (this.loading) return;
                const m = {email: this.formGroup.value.email, password: this.formGroup.value.password},
                    L = this.formGroup.value.rememberMe;
                this.loginError = "", this.loading = !0, this.authService.login(m, L, 1).pipe((0, ee.q)(1), (0, it.b)(() => {
                    this.logSessionAuthenticated(), this.storageService.set(["email"], m.email), this.router.navigate(["/"])
                }), (0, c.K)(j => this.handleLoginError(j)), (0, F.x)(() => this.loading = !1)).subscribe()
            }

            logSessionAuthenticated() {
                "function" == typeof gtag && gtag("event", "authenticated", {event_category: "session"}), this.analyticsService.postEvent(new Ee.Session.Authenticated.Event({})), this.akumaService.postEvent("Flow", "_sessionAuthenticated_succeeded")
            }

            handleLoginError(m) {
                return console.warn("Login->login()->authService->login() unsuccessful.", m), this.loginError = m.error.error || "Unable to login.", (0, i.of)([])
            }

            get email() {
                return this.formGroup.get("email")
            }

            get password() {
                return this.formGroup.get("password")
            }

            buildFormGroup() {
                this.formGroup = this.fb.group({
                    email: ["", [oe.kI.required, oe.kI.email]],
                    password: ["", [oe.kI.required]],
                    rememberMe: !0
                })
            }

            playClickTinyV1() {
                this.audioService.clickTinyV1.play()
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(Ie.yD), o.Y36(H.mI), o.Y36(oe.qu), o.Y36(Ze.F), o.Y36(W.F0), o.Y36(H.qy), o.Y36(H.pk), o.Y36(Ie.jt), o.Y36(H.Ho))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["cerberus-login"]],
            decls: 20,
            vars: 9,
            consts: [[1, "loginForm", 3, "formGroup", "submit"], ["for", "email"], ["plain", "true"], ["cerberusFocusInitial", "", "formControlName", "email", "id", "email", "data-test-id", "email-input", "type", "email", "placeholder", "e.g. neferu@deadmail.com", 3, "valid", "click"], ["data-test-id", "email-errors", 3, "control"], ["key", "required", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "email-error-required"], ["key", "email", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "email-error-email"], ["for", "password"], ["formControlName", "password", "data-test-id", "password-input", "id", "password", "placeholder", "SomethingSneaky", "required", "", 3, "valid", "click"], ["data-test-id", "password-errors", 3, "control"], ["key", "required", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "password-error-required"], ["class", "loginError", "fillColor", "colors.alert", "size", "x-small", 4, "ngIf"], ["data-test-id", "login-button", "id", "button__SignIn", "theme", "dark", 3, "loading", "disabled", "click"], ["fillColor", "colors.alert", "size", "x-small", 1, "loginError"]],
            template: function (m, L) {
                1 & m && (o.TgZ(0, "gu-form", 0), o.NdJ("submit", function () {
                    return L.login()
                }), o.TgZ(1, "gu-label", 1)(2, "gu-body-text", 2), o._uU(3, "Email"), o.qZA()(), o.TgZ(4, "gu-input", 3), o.NdJ("click", function () {
                    return L.playClickTinyV1()
                }), o.qZA(), o.TgZ(5, "gu-validation-errors", 4)(6, "gu-body-text", 5), o._uU(7, " Email is required. "), o.qZA(), o.TgZ(8, "gu-body-text", 6), o._uU(9), o.qZA()(), o.TgZ(10, "gu-label", 7)(11, "gu-body-text", 2), o._uU(12, "Password"), o.qZA()(), o.TgZ(13, "gu-password-input", 8), o.NdJ("click", function () {
                    return L.playClickTinyV1()
                }), o.qZA(), o.TgZ(14, "gu-validation-errors", 9)(15, "gu-body-text", 10), o._uU(16, " Password is required. "), o.qZA()(), o.YNc(17, Wt, 2, 1, "gu-body-text", 11), o.TgZ(18, "gu-standard-button", 12), o.NdJ("click", function () {
                    return L.login()
                }), o._uU(19, " Log in "), o.qZA()()), 2 & m && (o.Q6J("formGroup", L.formGroup), o.xp6(4), o.Q6J("valid", L.formGroup.controls.email.valid), o.xp6(1), o.Q6J("control", L.formGroup.controls.email), o.xp6(4), o.hij(" ", L.formGroup.controls.email.value, " is not a valid email address. "), o.xp6(4), o.Q6J("valid", L.formGroup.controls.password.valid), o.xp6(1), o.Q6J("control", L.formGroup.controls.password), o.xp6(3), o.Q6J("ngIf", L.loginError), o.xp6(1), o.Q6J("loading", L.loading)("disabled", !L.formGroup.valid))
            },
            directives: [oe.JL, oe.sg, Ut._, dt, oe.JJ, oe.u, Kt.n, oe.Q7, _e.O5],
            styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.createAccountArea__text[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.createAccountArea__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.createAccountArea__text[_ngcontent-%COMP%]{line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;background:#0F1B27;height:100%;position:relative}.login__container[_ngcontent-%COMP%]{width:100%;height:100%}.logo_wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;margin-bottom:2rem}.logo[_ngcontent-%COMP%]{width:100%;height:auto}.videoWrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.loginVideo[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;object-position:65% top;opacity:1}.formContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%}.formWrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:3rem}.loginForm[_ngcontent-%COMP%]{width:320px;display:flex;flex-flow:column nowrap}.loginError[_ngcontent-%COMP%]{margin-bottom:16px}.loginForm__forgottenLink[_ngcontent-%COMP%]{text-decoration:underline;margin:20px auto 8px;cursor:pointer}.formButton[_ngcontent-%COMP%]{width:100%}.createAccount[_ngcontent-%COMP%]{width:100%;padding:3rem;margin-top:auto;position:relative;display:flex;flex-flow:column nowrap;align-items:center}.createAccount[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;top:0px;right:0;height:3px;background:#1D2F41}.createAccount__title[_ngcontent-%COMP%]{margin-bottom:16px}.createAccountArea__text[_ngcontent-%COMP%]{text-align:center;font-weight:600;color:#f6f6f6}']
        }), f
    })();

    function St(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.TgZ(0, "gu-form", 3), o.NdJ("submit", function () {
                return o.CHM(m), o.oxw().reset()
            }), o.TgZ(1, "gu-body-text", 4), o._uU(2, " Reset Password "), o.qZA(), o.TgZ(3, "gu-label", 5)(4, "gu-body-text", 6), o._uU(5, "Email"), o.qZA()(), o.TgZ(6, "gu-input", 7), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().playClickTinyV1()
            }), o.qZA(), o.TgZ(7, "gu-validation-errors", 8)(8, "gu-body-text", 9), o._uU(9, " Email is required. "), o.qZA(), o.TgZ(10, "gu-body-text", 10), o._uU(11), o.qZA()(), o.TgZ(12, "gu-standard-button", 11), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().reset()
            }), o._uU(13, " Send reset email "), o.qZA()()
        }
        if (2 & f) {
            const m = o.oxw();
            o.Q6J("formGroup", m.formGroup), o.xp6(6), o.Q6J("valid", m.formGroup.controls.email.valid), o.xp6(1), o.Q6J("control", m.formGroup.controls.email), o.xp6(4), o.hij(" ", m.formGroup.controls.email.value, " is not a valid email address. "), o.xp6(1), o.Q6J("loading", m.isLoading)("disabled", !m.formGroup.valid)
        }
    }

    function jt(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.TgZ(0, "div", 12)(1, "gu-body-text", 13), o._uU(2), o.qZA(), o.TgZ(3, "gu-body-text", 14), o._uU(4), o.qZA(), o.TgZ(5, "gu-standard-button", 15), o.NdJ("click", function () {
                o.CHM(m);
                const j = o.oxw();
                return "error" === j.status ? j.tryAgain() : j.navigateBackToLogin()
            }), o._uU(6), o.qZA()()
        }
        if (2 & f) {
            const m = o.oxw();
            o.xp6(2), o.hij(" ", "success" === m.status ? "Reset email sent!" : "Failed to send reset email", " "), o.xp6(2), o.hij(" ", "success" === m.status ? "Follow the instructions sent to you by email in order to reset your password." : "An error occurred while attempting to send the email. Please try again later.", " "), o.xp6(2), o.hij(" ", "error" === m.status ? "Try again" : "Back to Login", " ")
        }
    }

    function Cs(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.TgZ(0, "button", 16), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().navigateBackToLogin()
            }), o.TgZ(1, "gu-body-text", 17), o._uU(2, " Go Back "), o.qZA()()
        }
    }

    let ut = (() => {
        class f {
            constructor(m, L, j, re) {
                this.authService = m, this.fb = L, this.utils = j, this.audioService = re, this.isLoading = !1, this.backToLogin = new o.vpe
            }

            ngOnInit() {
                this.buildFormGroup()
            }

            reset() {
                this.formGroup.invalid ? this.utils.markFormGroupTouched(this.formGroup) : this.isLoading || (this.isLoading = !0, this.authService.resetPassword(this.email.value).pipe((0, ee.q)(1)).subscribe(() => {
                    this.isLoading = !1, this.status = "success"
                }, m => {
                    this.isLoading = !1, this.status = "error", console.error(m)
                }))
            }

            get email() {
                return this.formGroup.get("email")
            }

            buildFormGroup() {
                this.formGroup = this.fb.group({email: ["", [oe.kI.required, oe.kI.email]]})
            }

            tryAgain() {
                this.status = void 0, this.formGroup.reset()
            }

            playClickTinyV1() {
                this.audioService.clickTinyV1.play()
            }

            navigateBackToLogin() {
                this.backToLogin.emit()
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(H.mI), o.Y36(oe.qu), o.Y36(Ze.F), o.Y36(H.pk))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["cerberus-reset"]],
            outputs: {backToLogin: "backToLogin"},
            decls: 3,
            vars: 3,
            consts: [["class", "form", 3, "formGroup", "submit", 4, "ngIf"], ["class", "result-info", 4, "ngIf"], ["class", "backButton", 3, "click", 4, "ngIf"], [1, "form", 3, "formGroup", "submit"], ["fontWeight", "bold", "size", "large", 1, "form__heading"], ["for", "email"], ["plain", "true"], ["cerberusFocusInitial", "", "formControlName", "email", "id", "email", "type", "email", "placeholder", "Enter your email", 3, "valid", "click"], ["data-test-id", "email-errors", 3, "control"], ["key", "required", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "email-error-required"], ["key", "email", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "email-error-email"], ["theme", "dark", 3, "loading", "disabled", "click"], [1, "result-info"], ["fontWeight", "bold", "size", "large", 1, "form__heading", "form__heading-no-margin"], ["size", "medium", "fillColor", "colors.light.300"], [3, "click"], [1, "backButton", 3, "click"], ["size", "small", "fontWeight", "bold", "fillColor", "colors.light.500"]],
            template: function (m, L) {
                1 & m && (o.YNc(0, St, 14, 6, "gu-form", 0), o.YNc(1, jt, 7, 3, "div", 1), o.YNc(2, Cs, 3, 0, "button", 2)), 2 & m && (o.Q6J("ngIf", !L.status), o.xp6(1), o.Q6J("ngIf", L.status), o.xp6(1), o.Q6J("ngIf", "success" !== L.status))
            },
            directives: [_e.O5, oe.JL, oe.sg, Ut._, dt, oe.JJ, oe.u, Kt.n],
            styles: [".form[_ngcontent-%COMP%], .result-info[_ngcontent-%COMP%]{width:320px;position:relative;display:flex;flex-flow:column nowrap}.form__heading[_ngcontent-%COMP%]{line-height:28px;margin-bottom:20px;text-align:center}.form__heading-no-margin[_ngcontent-%COMP%]{margin-bottom:8px}.result-info[_ngcontent-%COMP%]{text-align:center}.result-info[_ngcontent-%COMP%]   gu-standard-button[_ngcontent-%COMP%]{margin-top:20px}.backButton[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;margin:20px auto 8px;width:100%}.backButton[_ngcontent-%COMP%]   gu-body-text[_ngcontent-%COMP%]{text-decoration:underline}"]
        }), f
    })();

    function xs(f, D) {
        1 & f && o._UZ(0, "cerberus-login"), 2 & f && o.Q6J("@slideRight", void 0)
    }

    function Us(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.TgZ(0, "cerberus-reset", 10), o.NdJ("backToLogin", function () {
                return o.CHM(m), o.oxw().toggleForgottenPassword()
            }), o.qZA()
        }
        2 & f && o.Q6J("@slideRightAbsolute", void 0)
    }

    function ft(f, D) {
        if (1 & f) {
            const m = o.EpF();
            o.TgZ(0, "button", 11), o.NdJ("click", function () {
                return o.CHM(m), o.oxw().toggleForgottenPassword()
            }), o.TgZ(1, "gu-body-text", 12), o._uU(2, " Forgotten password? "), o.qZA()()
        }
        2 & f && o.Q6J("@slideRight", void 0)
    }

    function Rs(f, D) {
        if (1 & f && (o.TgZ(0, "div", 13)(1, "gu-simple-text", 14), o._uU(2, " Don't have an account? "), o.qZA(), o.TgZ(3, "gu-standard-button", 15), o._uU(4, " Create Account "), o.qZA()()), 2 & f) {
            const m = o.oxw();
            o.Q6J("@slideRight", void 0), o.xp6(3), o.Q6J("href", m.environment.guRegisterURL)
        }
    }

    const Ps = (0, $e.X$)("skipInitialAnimation", [(0, $e.eR)(":enter", [])]),
        Ss = (0, $e.X$)("slideRight", [(0, $e.eR)(":enter", [(0, $e.oB)({
            transform: "translateX(100px)",
            opacity: 0
        }), (0, $e.jt)(".12s .12s ease-out", (0, $e.oB)({
            transform: "translateX(0)",
            opacity: 1
        }))]), (0, $e.eR)(":leave", [(0, $e.oB)({
            transform: "translateX(0)",
            opacity: 1
        }), (0, $e.jt)(".12s ease-in", (0, $e.oB)({transform: "translateX(100px)", opacity: 0}))])]),
        ks = (0, $e.X$)("slideRightAbsolute", [(0, $e.eR)(":enter", [(0, $e.oB)({
            transform: "translateX(100px)",
            opacity: 0,
            position: "absolute"
        }), (0, $e.jt)(".12s .12s ease-out", (0, $e.oB)({
            transform: "translateY(0)",
            opacity: 1
        }))]), (0, $e.eR)(":leave", [(0, $e.oB)({
            transform: "translateX(0)",
            opacity: 1,
            position: "absolute"
        }), (0, $e.jt)(".12s ease-in", (0, $e.oB)({transform: "translateX(100px)", opacity: 0}))])]),
        ws = [{path: "", redirectTo: "game/gu", pathMatch: "full"}, {
            path: "login", component: (() => {
                class f {
                    constructor(m) {
                        this.environment = m, this.cssClasses = "columns is-gapless", this.videoSrc = "/assets/videos/login-video-pallas.webm", this.isForgottenPassword = !1
                    }

                    toggleForgottenPassword() {
                        this.isForgottenPassword = !this.isForgottenPassword
                    }
                }

                return f.\u0275fac = function (m) {
                    return new (m || f)(o.Y36(H.Ho))
                }, f.\u0275cmp = o.Xpm({
                    type: f,
                    selectors: [["cerberus-auth"]],
                    hostVars: 2,
                    hostBindings: function (m, L) {
                        2 & m && o.Tol(L.cssClasses)
                    },
                    decls: 11,
                    vars: 6,
                    consts: [[1, "column"], ["preload", "", "autoplay", "", "muted", "", "playsinline", "", "loop", "", 1, "backgroundVideo", 3, "src"], [1, "column", "is-narrow", "sidebar"], [1, "formContainer"], ["src", "/assets/images/internal-logos/logo--gods-unchained-flat.svg", 1, "logo"], [1, "formWrapper"], [4, "ngIf"], [3, "backToLogin", 4, "ngIf"], ["class", "passwordResetButton", "data-test-id", "forgotten-password-button", 3, "click", 4, "ngIf"], ["class", "createAccount", 4, "ngIf"], [3, "backToLogin"], ["data-test-id", "forgotten-password-button", 1, "passwordResetButton", 3, "click"], ["size", "small", "fontWeight", "bold", "fillColor", "colors.light.500"], [1, "createAccount"], ["size", "medium", "fontWeight", "regular", "fillColor", "colors.light.500", 1, "createAccount__title"], ["type", "secondary", "icon", "leave_website", "iconPosition", "right", "theme", "dark", "text", "CREATE ACCOUNT", 3, "href"]],
                    template: function (m, L) {
                        1 & m && (o.TgZ(0, "div", 0)(1, "video", 1), o._uU(2, " Your browser does not support HTML5 video. "), o.qZA()(), o.TgZ(3, "div", 2)(4, "div", 3), o._UZ(5, "img", 4), o.TgZ(6, "div", 5), o.YNc(7, xs, 1, 1, "cerberus-login", 6), o.YNc(8, Us, 1, 1, "cerberus-reset", 7), o.qZA(), o.YNc(9, ft, 3, 1, "button", 8), o.qZA(), o.YNc(10, Rs, 5, 2, "div", 9), o.qZA()), 2 & m && (o.xp6(1), o.Q6J("src", L.videoSrc, o.LSH), o.xp6(2), o.Q6J("@skipInitialAnimation", void 0), o.xp6(4), o.Q6J("ngIf", !L.isForgottenPassword), o.xp6(1), o.Q6J("ngIf", L.isForgottenPassword), o.xp6(1), o.Q6J("ngIf", !L.isForgottenPassword), o.xp6(1), o.Q6J("ngIf", !L.isForgottenPassword))
                    },
                    directives: [_e.O5, zt, ut],
                    styles: ["[_nghost-%COMP%]{background:#0F1B27;height:100%;width:100%}.backgroundVideo[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;object-position:65% top}.logo[_ngcontent-%COMP%]{margin-bottom:2rem}.sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column}.formContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:3rem}.formWrapper[_ngcontent-%COMP%]{display:flex;position:relative;width:320px}.passwordResetButton[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;margin:20px auto 8px}.passwordResetButton[_ngcontent-%COMP%]   gu-body-text[_ngcontent-%COMP%]{text-decoration:underline}.createAccount[_ngcontent-%COMP%]{border-top:3px solid #1D2F41;width:100%;padding:3rem;margin-top:auto;display:flex;flex-flow:column nowrap;text-align:center}.createAccount__title[_ngcontent-%COMP%]{margin-bottom:16px}"],
                    data: {animation: [Ss, ks, Ps]}
                }), f
            })()
        }, {
            path: "game",
            component: (() => {
                class f {
                    constructor() {
                    }

                    ngOnInit() {
                    }
                }

                return f.\u0275fac = function (m) {
                    return new (m || f)
                }, f.\u0275cmp = o.Xpm({
                    type: f,
                    selectors: [["app-home"]],
                    decls: 1,
                    vars: 0,
                    template: function (m, L) {
                        1 & m && o._UZ(0, "router-outlet")
                    },
                    directives: [W.lC],
                    styles: ["[_nghost-%COMP%]{display:block;flex:1}.screen-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1}.app-bar[_ngcontent-%COMP%]{right:calc(var(--vw) * 3.33);position:absolute;bottom:0;right:calc(var(--vw) * 10)}"]
                }), f
            })(),
            canActivate: [(() => {
                class f {
                    constructor(m) {
                        this.authService = m
                    }

                    canActivate(m, L) {
                        return this.authService.refreshToken().pipe((0, st.VS)(j => this.authService.saveAccount(j, !0, 1)), (0, c.K)(j => (this.authService.logout(), (0, i.of)(j))))
                    }
                }

                return f.\u0275fac = function (m) {
                    return new (m || f)(o.LFG(H.mI))
                }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac, providedIn: "root"}), f
            })()],
            data: {reuse: !0},
            children: [{path: "gu", loadChildren: () => s.e(900).then(s.bind(s, 1900)).then(f => f.GuModule)}]
        }];
    let Ns = (() => {
        class f {
        }

        return f.\u0275fac = function (m) {
            return new (m || f)
        }, f.\u0275mod = o.oAB({type: f}), f.\u0275inj = o.cJS({
            imports: [[W.Bz.forRoot(ws, {
                useHash: !0,
                enableTracing: !1
            })], W.Bz]
        }), f
    })();
    var ss = s(98009), Ws = s(47313), Bt = s(41746), zs = s(30567), Es = s(36053), kt = s(87545), Os = s(43164),
        io = s(52216), vt = s(87168), js = s(33403), os = s(28510);
    let ao = (() => {
        class f {
            constructor(m, L, j) {
                this.cerberusModalService = m, this.activeModal = L, this.akumaService = j
            }

            ngOnInit() {
                this.akumaService.postScreenEvent("tutorial", "Skip", "", "opened")
            }

            goBack() {
                this.akumaService.postControlEvent("tutorial", "Skip", "", "return", "Btn", "pressed"), this.activeModal.close("Coinbase CTA closed")
            }

            skipTutorial() {
                this.akumaService.postControlEvent("tutorial", "Skip", "", "confirm", "Btn", "pressed"), this.cerberusModalService.dismissAll()
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(os.Qz), o.Y36(os.mX), o.Y36(Ie.jt))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["cerberus-skip-tutorial-modal"]],
            decls: 15,
            vars: 0,
            consts: [[1, "modal__header"], [1, "modal__content"], ["top", "3x-large", "bottom", "medium"], ["align", "center", "size", "x-small", "fillGradient", "gradients.gold.simple"], ["top", "medium", "bottom", "medium"], ["fillColor", "colors.light.800", "kind", "x-small"], [1, "modal__btnsGroup"], ["type", "primary", 1, "modal__btn", 3, "click"]],
            template: function (m, L) {
                1 & m && (o._UZ(0, "div", 0), o.TgZ(1, "div", 1)(2, "gu-vertical-space", 2)(3, "gu-heading-text", 3), o._uU(4, " Are you Sure you want to skip the tutorial?"), o.qZA()(), o.TgZ(5, "gu-vertical-space", 4)(6, "gu-paragraph-text", 5), o._uU(7, " You won\u2019t receive your 3 Core Packs. "), o._UZ(8, "br"), o._uU(9, " To unlock this reward at a later time, come back by selecting \u201cTutorial\u201d from the Arena screen. "), o.qZA()(), o.TgZ(10, "div", 6)(11, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                    return L.goBack()
                }), o._uU(12, " Go Back "), o.qZA(), o.TgZ(13, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                    return L.skipTutorial()
                }), o._uU(14, " Yes "), o.qZA()()())
            },
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:640px;text-align:center}.modal__header[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c6a052 2.93%,#ebc98b 25.01%,#fff2d8 50.44%,#ebc98b 74.21%,#c6a052 96.95%);box-shadow:0 2px 5px #0000004d;height:3px;width:100%}.modal__content[_ngcontent-%COMP%]{background:linear-gradient(90deg,#0f1b27 1.39%,#0f1b27 12.6%,#1d2f41 50.06%,#0f1b27 87.64%,#0f1b27 98.63%);box-sizing:border-box;border:2px solid #3D5A74;display:flex;flex-direction:column;padding:0 calc(var(--vw) * 1.5);align-items:center}.modal__btnsGroup[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;padding:20px 0;width:50%}.modal__btn[_ngcontent-%COMP%]{padding:15px;margin:10px}.modal__closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;font-size:calc(var(--vh) * 2);color:#8be1e0;cursor:pointer}.modal__closeButton[_ngcontent-%COMP%]:hover{color:#fff}"]
        }), f
    })();
    var lo = s(11130), co = s(8561), uo = s(17268);
    let po = (() => {
        class f {
            constructor(m, L, j, re, Se, De, Ge, je) {
                this.cerberusModalService = m, this.queueService = L, this.gameService = j, this.guGameService = re, this.playService = Se, this.authService = De, this.audioService = Ge, this.akumaService = je
            }

            ngOnInit() {
                this.akumaService.postScreenEvent("tutorial", "Welcome", "", "opened"), this.akumaService.postFlowEvent("tutorialComplete", "started")
            }

            beginTutorial() {
                this.audioService.arenaClickStart.play(), this.akumaService.postControlEvent("tutorial", "Welcome", "", "go", "Btn", "pressed");
                const m = this.authService.getUserId();
                this.queueService.activeQueues$.pipe((0, ee.q)(1)).subscribe(L => {
                    L.forEach(j => this.queueService.cancel(j))
                }), this.gameService.getBranch$(1).pipe((0, ee.q)(1), (0, vt.M)(this.guGameService.getGameMode$(js.B_.TUTORIAL)), (0, it.b)(([L, j]) => {
                    this.playService.play({
                        realm: L.id,
                        mode: js.B_.TUTORIAL,
                        mission: j.properties.mission,
                        player: {
                            id: m,
                            deck: {id: j.properties.player.deck.id, global: j.properties.player.deck.global},
                            collection: {id: j.properties.player.collection.id}
                        },
                        opponent: {
                            deck: {id: j.properties.opponent.deck.id, global: j.properties.opponent.deck.global},
                            collection: {id: j.properties.opponent.collection.id}
                        }
                    })
                })).subscribe(L => this.cerberusModalService.dismissAll())
            }

            skipTutorial() {
                this.akumaService.postControlEvent("tutorial", "Welcome", "", "skip", "Btn", "pressed");
                this.cerberusModalService.open(ao, {centered: !0}).result.then(j => {
                }, j => {
                })
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.Y36(os.Qz), o.Y36(E.g), o.Y36(ne.hM), o.Y36(lo.xV), o.Y36(co.GT), o.Y36(H.mI), o.Y36(H.pk), o.Y36(Ie.jt))
        }, f.\u0275cmp = o.Xpm({
            type: f,
            selectors: [["cerberus-tutorial-start-modal"]],
            decls: 49,
            vars: 1,
            consts: [[1, "leftPanel"], ["src", "/gu-assets/images/tutorial/citadel-herald-bg.webp", 1, "leftPanel__image"], [1, "leftPanel__imageShadow"], ["src", "/gu-assets/images/GULogo-white.svg", "alt", "", 1, "leftPanel__logoImage"], [1, "rightPanel"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "x-small", 1, "rightPanel__title"], ["fillColor", "colors.light.300", 1, "rightPanel__subtitle"], [1, "rightPanel__gameplay"], ["src", "/gu-assets/images/tutorial/gameplay-basics.webp", 1, "rightPanel__gameplay__image"], [1, "rightPanel__gameplay__title"], ["fillColor", "colors.light.300"], [1, "rightPanel__howto"], [1, "rightPanel__howto__mana"], ["src", "/gu-assets/images/tutorial/how-mana-works.webp", 1, "rightPanel__howto__image"], [1, "rightPanel__howto__title"], [1, "rightPanel__howto__win"], ["src", "/gu-assets/images/tutorial/how-to-win.webp", 1, "rightPanel__howto__image"], [1, "rightPanel__freeStuff"], ["src", "/gu-assets/images/tutorial/free-stuff-banner-start.png", 1, "rightPanel__freeStuff__bgImage"], ["src", "/gu-assets/images/tutorial/free-core-pack.png", 1, "rightPanel__freeStuff__cardImage"], ["fillColor", "colors.light.300", 1, "rightPanel__freeStuff__text"], [1, "rightPanel__freeStuff__tooltip", 3, "title"], ["iconLigature", "little_help"], ["size", "small", "type", "primary", 1, "rightPanel__beginTutorialBtn", 3, "click"], ["fillColor", "colors.apocyan.100", 1, "rightPanel__closeTutorialBtn", 3, "click"]],
            template: function (m, L) {
                1 & m && (o.TgZ(0, "div", 0)(1, "picture"), o._UZ(2, "img", 1), o.qZA(), o._UZ(3, "div", 2), o.TgZ(4, "picture"), o._UZ(5, "img", 3), o.qZA()(), o.TgZ(6, "div", 4)(7, "gu-heading-text", 5), o._uU(8, " Welcome to the Tutorial "), o.qZA(), o.TgZ(9, "gu-simple-text", 6), o._uU(10, " A swift lesson to help you learn the basics. All great heroes need to start somewhere! "), o.qZA(), o.TgZ(11, "div", 7)(12, "picture"), o._UZ(13, "img", 8), o.qZA(), o.TgZ(14, "div", 9)(15, "gu-simple-text", 10)(16, "strong"), o._uU(17, "GAMEPLAY BASICS"), o.qZA()()()(), o.TgZ(18, "div", 11)(19, "div", 12)(20, "picture"), o._UZ(21, "img", 13), o.qZA(), o.TgZ(22, "div", 14)(23, "gu-simple-text", 10)(24, "strong"), o._uU(25, "HOW MANA WORKS"), o.qZA()()()(), o.TgZ(26, "div", 15)(27, "picture"), o._UZ(28, "img", 16), o.qZA(), o.TgZ(29, "div", 14)(30, "gu-simple-text", 10)(31, "strong"), o._uU(32, "HOW TO WIN"), o.qZA()()()()(), o.TgZ(33, "div", 17)(34, "picture"), o._UZ(35, "img", 18), o.qZA(), o.TgZ(36, "picture"), o._UZ(37, "img", 19), o.qZA(), o.TgZ(38, "gu-simple-text", 20), o._uU(39, " Receive "), o.TgZ(40, "strong"), o._uU(41, "3 Core Packs "), o.qZA(), o.TgZ(42, "app-tooltip", 21), o._UZ(43, "gu-icon", 22), o.qZA(), o._uU(44, " upon completion of the tutorial. "), o.qZA()(), o.TgZ(45, "gu-primary-hex-button", 23), o.NdJ("click", function () {
                    return L.beginTutorial()
                }), o._uU(46, "BEGIN"), o.qZA(), o.TgZ(47, "gu-simple-text", 24), o.NdJ("click", function () {
                    return L.skipTutorial()
                }), o._uU(48, " MAYBE LATER "), o.qZA()()), 2 & m && (o.xp6(42), o.Q6J("title", "Core Packs hold <br/> non-blockchain cards that can <br/> be used to expand your decks."))
            },
            directives: [uo.K],
            styles: ["[_nghost-%COMP%]{display:flex;background-color:#0f1b27;border:2px solid #3D5A74;box-sizing:border-box;box-shadow:5px 5px 15px #0006;width:1050px}.rightPanel[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.rightPanel__title[_ngcontent-%COMP%]{margin-top:20px}.rightPanel__subtitle[_ngcontent-%COMP%]{margin:20px;text-align:center}.rightPanel__gameplay[_ngcontent-%COMP%]{margin:0 30px;width:450px}.rightPanel__gameplay__image[_ngcontent-%COMP%]{width:450px;display:block}.rightPanel__gameplay__title[_ngcontent-%COMP%]{background:linear-gradient(to left,#0F1B27 0%,#1D2F41 100%);text-align:center;padding:10px}.rightPanel__howto[_ngcontent-%COMP%]{display:flex;margin-top:10px}.rightPanel__howto__mana[_ngcontent-%COMP%]{margin-right:3px}.rightPanel__howto__win[_ngcontent-%COMP%]{margin-left:3px}.rightPanel__howto__image[_ngcontent-%COMP%]{width:222px;display:block}.rightPanel__howto__title[_ngcontent-%COMP%]{background:linear-gradient(to left,#0F1B27 0%,#1D2F41 100%);text-align:center;padding:10px}.rightPanel__freeStuff[_ngcontent-%COMP%]{position:relative}.rightPanel__freeStuff__bgImage[_ngcontent-%COMP%]{width:510px;display:block;margin-top:35px}.rightPanel__freeStuff__cardImage[_ngcontent-%COMP%]{position:absolute;top:0px;left:15px;height:90px}.rightPanel__freeStuff__text[_ngcontent-%COMP%]{position:absolute;top:45px;left:85px;font-size:15px}.rightPanel__freeStuff__tooltip[_ngcontent-%COMP%]{display:inline;text-align:center}.rightPanel__beginTutorialBtn[_ngcontent-%COMP%]{margin-top:20px;padding:0 40px}.rightPanel__closeTutorialBtn[_ngcontent-%COMP%]{margin-top:20px;font-size:15px;cursor:pointer}.leftPanel[_ngcontent-%COMP%]{position:relative;width:100%}.leftPanel__image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;display:block}.leftPanel__imageShadow[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0px;background:linear-gradient(180deg,rgba(15,27,39,0) 57.61%,rgba(15,27,39,.7) 73.26%,rgba(15,27,39,.9) 100%)}.leftPanel__logoImage[_ngcontent-%COMP%]{width:330px;position:absolute;bottom:60px;left:0;right:0;margin-left:auto;margin-right:auto}"]
        }), f
    })();
    var He = s(14618), go = s(88632);
    let Hs = (() => {
        class f {
            constructor(m, L, j, re, Se, De, Ge, je, nt, Ke) {
                this.actions$ = m, this.ngrxStore = L, this.gameApi = j, this.authService = re, this.guUserService = Se, this.gameService = De, this.gameDownloadService = Ge, this.zone = je, this.utils = nt, this.cerberusModalService = Ke, this.GameAssetsDownloadRequest$ = (0, ce.GW)(() => this.actions$.pipe((0, ce.l4)(He.gK.GAME_ASSETS_DOWNLOAD_REQUEST), (0, kt.w)(ye => this.gameService.currentGameContext$.pipe((0, Be.h)(ve => null != ve), (0, st.VS)(ve => (0, Bt.$R)((0, i.of)(ve), this.gameService.getBranch(ve.id))), (0, st.VS)(([ve, pt]) => (0, Bt.$R)((0, i.of)(ve), this.gameDownloadService.getLatestAssetsVersions(ve, pt), this.gameDownloadService.getLocalAssetsVersions(ve), this.getBasicAuthToken())), (0, ee.q)(1))), (0, kt.w)(([ye, ve, pt, Et]) => {
                    const Ot = this.gameService.isObfuscatedBranch(ye.id) ? Et : void 0,
                        Mt = this.gameDownloadService.deltaAssetsVersions(pt, ve),
                        as = Mt.reduce((qt, yo) => qt + yo.size, 0), $t = this.gameService.getAssetsPath(),
                        ls = Array.from({length: Mt.length}, () => new v.X(null)),
                        Gt = window.bridge.downloadAssetsWithSempahore(Mt, $t, ls, Ot, 5).map(qt => qt.pipe(this.utils.enterZone(this.zone)));
                    return (0, i.of)({
                        downloadAssets: Gt,
                        assetsProgresses: ls,
                        totalBytes: as,
                        game: ye,
                        remoteAssets: ve
                    })
                }), (0, kt.w)(ye => (0, Bt.$R)((0, zs.D)(ye.downloadAssets).pipe((0, Ve.U)(ve => ({
                    downloads: ve,
                    game: ye.game,
                    remoteAssets: ye.remoteAssets
                }))), (0, Es.aj)(ye.assetsProgresses).pipe((0, Os.p)(1e3), (0, it.b)(ve => {
                    const pt = ve.reduce((Ot, Mt) => Mt ? Ot + Mt.bytesCompleted : Ot + 0, 0),
                        Et = Math.round(100 * pt / ye.totalBytes);
                    this.ngrxStore.dispatch(new He.X4({percentage: Et, status: "downloading"}))
                })))), (0, kt.w)(([ye, ve]) => (this.gameService.deleteProperty(ye.game.id, "assets"), this.gameService.setProperty(ye.game.id, "assets", JSON.stringify(ye.remoteAssets)), this.gameService.refreshGameContext(), this.gameDownloadService.displayDownloadCompleteNotification(ye.game), [new He.P6])), (0, c.K)((ye, ve) => (console.error(ye), this.ngrxStore.dispatch(new He.wT({error: ye})), ve)))), this.GameAssetsDownloadSuccess$ = (0, ce.GW)(() => this.actions$.pipe((0, ce.l4)(He.gK.GAME_ASSETS_DOWNLOAD_SUCCESS), (0, kt.w)(ye => {
                    const ve = this.authService.getUserId();
                    return this.gameService.getUserTutorialMissions(ve).pipe((0, ee.q)(1))
                }), (0, kt.w)(ye => (ye[0].completed || this.showTutorialModal(), [new He.Lg({
                    status: "idle",
                    percentage: 100
                })])), (0, c.K)((ye, ve) => (console.error(ye), ve)))), this.GameBuildDownloadExtractRequest$ = (0, ce.GW)(() => this.actions$.pipe((0, ce.l4)(He.gK.GAME_BUILD_DOWNLOAD_EXTRACT), (0, Ve.U)(ye => ye.payload), (0, kt.w)(ye => this.gameService.getBranch(ye.game.id).pipe((0, Ve.U)(ve => ({
                    branch: ve,
                    action: ye
                })))), (0, kt.w)(({
                                      branch: ye,
                                      action: ve
                                  }) => this.gameDownloadService.extractGame(ve.game, ve.fileName, ve.installPath).pipe((0, Ve.U)(pt => ({
                    result: pt,
                    branch: ye,
                    action: ve
                })))), (0, kt.w)(({action: ve}) => (this.gameService.setProperty(ve.game.id, "status", "extracted"), this.gameService.refreshGameContext(), ve.remoteVersion && this.gameDownloadService.deleteFile(this.gameDownloadService.getFileName(ve.game, ve.remoteVersion), this.gameService.getInstallPath(ve.game)), ve.localVersion && this.gameDownloadService.deleteFile(this.gameDownloadService.getFileName(ve.game, ve.localVersion), this.gameService.getInstallPath(ve.game)), this.gameDownloadService.displayDownloadCompleteNotification(ve.game), [new He.Ry])), (0, c.K)((ye, ve) => (console.error(ye), this.ngrxStore.dispatch(new He.c7({error: ye})), ve)))), this.GameBuildDownloadRequest$ = (0, ce.GW)(() => this.actions$.pipe((0, ce.l4)(He.gK.GAME_BUILD_DOWNLOAD_REQUEST), (0, kt.w)(ye => this.gameService.currentGameContext$.pipe((0, Be.h)(ve => null != ve), (0, st.VS)(ve => (0, Bt.$R)((0, i.of)(ve), this.gameService.getBranch(ve.id))), (0, st.VS)(([ve, pt]) => (0, Bt.$R)((0, i.of)(ve), this.gameDownloadService.getVersions(ve, pt), this.getBasicAuthToken())), (0, ee.q)(1))), (0, it.b)(([ye]) => {
                    this.gameDownloadService.uninstallGame(ye, this.gameService.getInstallPath(ye))
                }), (0, kt.w)(([ye, [ve, pt], Et]) => {
                    const Ot = this.gameService.getInstallPath(ye),
                        Mt = this.gameDownloadService.getDownloadInfo(ye, ve, Et),
                        as = this.gameService.isObfuscatedBranch(ye.id) ? Et : void 0;
                    return (0, Es.aj)([window.bridge.download(Mt.url, Ot, this.getFileName(ye, ve), as).pipe(this.utils.enterZone(this.zone), (0, Ve.U)($t => ({
                        game: ye,
                        fileName: this.getFileName(ye, ve),
                        installPath: Ot,
                        remoteVersion: ve,
                        localVersion: pt
                    }))), window.bridge.progress.pipe(this.utils.enterZone(this.zone), (0, Os.p)(1e3), (0, io.V)(12e4), (0, Ve.U)($t => (this.ngrxStore.dispatch(new He.dY({
                        percentage: this.getPercentage($t),
                        status: "downloading"
                    })), $t)))])
                }), (0, st.zg)(([ye, ve]) => (this.gameService.setProperty(ye.game.id, "version", ye.remoteVersion), this.gameService.setProperty(ye.game.id, "status", "downloaded"), [new He.yn({
                    game: ye.game,
                    fileName: ye.fileName,
                    installPath: ye.installPath,
                    localVersion: ye.localVersion,
                    remoteVersion: ye.remoteVersion
                })])), (0, c.K)((ye, ve) => (console.error(ye), this.ngrxStore.dispatch(new He.c7({error: ye})), ve))))
            }

            getBasicAuthToken() {
                const m = this.authService.getUserId(), L = this.authService.getGameSessionTicket();
                return this.gameApi.get(`/user/${m}/build?session=${L}`).pipe((0, Ve.U)(j => j.basic_auth))
            }

            getPercentage(m) {
                return m ? Math.round(100 * m.bytesCompleted / m.bytesTotal) : 0
            }

            getFileName(m, L) {
                return "win32" === window.bridge.platform() ? "gods_" + L + m.extensions.windows : "gods_" + L + m.extensions.osx
            }

            showTutorialModal() {
                this.cerberusModalService.open(po).result.then(j => {
                }, j => {
                })
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.LFG(ce.eX), o.LFG(me.yh), o.LFG(Ie.Ft), o.LFG(H.mI), o.LFG(go.MZ), o.LFG(ne.hM), o.LFG(lt.b5), o.LFG(o.R0b), o.LFG(Ze.F), o.LFG(os.Qz))
        }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac}), f
    })();
    const Ks = {
        gameBuild: {isUpdateRequired: !1, percentage: 0, status: "idle"},
        gameAssets: {isUpdateRequired: !1, percentage: 0, status: "idle"}
    };

    function Ms(f, D) {
        switch (D.type) {
            case He.gK.GAME_BUILD_DOWNLOAD_CHECK:
                return Object.assign(Object.assign({}, f), {gameBuild: Object.assign(Object.assign({}, f.gameBuild), {isUpdateRequired: D.payload.isUpdateRequired})});
            case He.gK.GAME_BUILD_DOWNLOAD_PROGRESS:
                return Object.assign(Object.assign({}, f), {
                    gameBuild: Object.assign(Object.assign({}, f.gameBuild), {
                        percentage: D.payload.percentage,
                        status: D.payload.status
                    })
                });
            case He.gK.GAME_BUILD_DOWNLOAD_SUCCESS:
                return Object.assign(Object.assign({}, f), {
                    gameBuild: Object.assign(Object.assign({}, f.gameBuild), {
                        isUpdateRequired: !1,
                        status: "completed",
                        percentage: 100
                    })
                });
            case He.gK.GAME_BUILD_DOWNLOAD_UPDATE_STATUS:
                return Object.assign(Object.assign({}, f), {
                    gameBuild: Object.assign(Object.assign({}, f.gameBuild), {
                        isUpdateRequired: f.gameBuild.isUpdateRequired,
                        status: D.payload.status,
                        percentage: f.gameBuild.percentage
                    })
                });
            case He.gK.GAME_BUILD_DOWNLOAD_ERROR:
                return Object.assign(Object.assign({}, f), {
                    gameBuild: Object.assign(Object.assign({}, f.gameBuild), {
                        isUpdateRequired: f.gameBuild.isUpdateRequired,
                        status: "error",
                        percentage: f.gameBuild.percentage
                    })
                });
            case He.gK.GAME_ASSETS_DOWNLOAD_CHECK:
                return Object.assign(Object.assign({}, f), {gameAssets: Object.assign(Object.assign({}, f.gameAssets), {isUpdateRequired: D.payload.isUpdateRequired})});
            case He.gK.GAME_ASSETS_DOWNLOAD_PROGRESS:
                return Object.assign(Object.assign({}, f), {
                    gameAssets: Object.assign(Object.assign({}, f.gameAssets), {
                        percentage: D.payload.percentage,
                        status: D.payload.status
                    })
                });
            case He.gK.GAME_ASSETS_DOWNLOAD_SUCCESS:
                return Object.assign(Object.assign({}, f), {
                    gameAssets: Object.assign(Object.assign({}, f.gameAssets), {
                        isUpdateRequired: !1,
                        status: "completed",
                        percentage: 100
                    })
                });
            case He.gK.GAME_ASSETS_DOWNLOAD_UPDATE_STATUS:
                return Object.assign(Object.assign({}, f), {
                    gameAssets: Object.assign(Object.assign({}, f.gameAssets), {
                        isUpdateRequired: f.gameAssets.isUpdateRequired,
                        status: D.payload.status,
                        percentage: D.payload.percentage
                    })
                });
            case He.gK.GAME_ASSETS_DOWNLOAD_ERROR:
                return Object.assign(Object.assign({}, f), {
                    gameAssets: Object.assign(Object.assign({}, f.gameAssets), {
                        isUpdateRequired: f.gameAssets.isUpdateRequired,
                        status: "error",
                        percentage: f.gameAssets.percentage
                    })
                });
            default:
                return f
        }
    }

    let Vs = (() => {
        class f {
            constructor() {
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)
        }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac}), f
    })();
    var rs = s(56302);
    const Qs = {wallet: null, user: null};
    (0, me.ZF)("account");
    var Rt = (() => {
        return (f = Rt || (Rt = {})).INIT_WALLET = "[App] Initialize Wallet", f.INIT_METAMASK = "[App] Initialize MetaMask", f.UPDATE_STORE = "[App] Update Store", f.UPDATE_MARKETPRICE_ETH = "[App] Update Market Price of Ether", Rt;
        var f
    })();
    const Ht = {
        app: function Ys(f, D) {
            switch (D.type) {
                case Rt.INIT_WALLET:
                case Rt.INIT_METAMASK:
                    return Object.assign({}, f);
                default:
                    return f
            }
        }, router: ae.mg, account: function $s(f = Qs, D) {
            switch (D.type) {
                case rs.X8.FETCH_USER_ACCOUNT_SUCCESS:
                    return Object.assign(Object.assign({}, f), {user: D.payload.accountData});
                case rs.X8.FETCH_USER_WALLET_SUCCESS:
                    return Object.assign(Object.assign({}, f), {wallet: D.payload.walletData});
                case rs.X8.UPDATE_USER_ETH_BALANCE:
                    return Object.assign(Object.assign({}, f), {wallet: Object.assign(Object.assign({}, f.wallet), {ethBalance: D.payload.balance})});
                default:
                    return f
            }
        }
    }, ns = [], Ts = "reCaptchaOnloadCallback";
    let is = (() => {
        class f {
            constructor(m) {
                this.http = m, this.$loaded = new v.X(!1), this.registerOnloadCallback(), this.load()
            }

            registerOnloadCallback() {
                window[Ts] = () => {
                    const m = "g-recpatcha";
                    this.addWidget(m), this.renderWidget(m), this.$loaded.next(!0)
                }
            }

            addWidget(m) {
                const L = document.createElement("div");
                L.id = m, L.style.visibility = "hidden", document.body.appendChild(L)
            }

            renderWidget(m) {
                this.grecaptcha().render(m, {
                    sitekey: Q.N.recaptchaPublicSiteKeyV3, size: "invisible", callback: () => {
                    }
                })
            }

            load() {
                return this.$loaded.getValue() || this.addScriptTag(), this.$loaded.asObservable()
            }

            addScriptTag() {
                const m = document.body, L = this.createScriptTag();
                m.appendChild(L)
            }

            createScriptTag() {
                const m = document.createElement("script");
                return m.innerHTML = "", m.src = this.getScriptSrc(), m.async = !0, m.defer = !0, m
            }

            getScriptSrc() {
                let m = "https://www.recaptcha.net/recaptcha/api.js";
                return m += "?onload=" + Ts, m += "&render=" + Q.N.recaptchaPublicSiteKeyV3, m
            }

            execute(m) {
                return (0, t.D)(this.grecaptcha().execute({action: m}))
            }

            grecaptcha() {
                return window.grecaptcha
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.LFG(ue.eN))
        }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac, providedIn: "root"}), f
    })(), Ft = (() => {
        class f {
            constructor() {
                this.dataStore = {headerOptions: []}, this._headerOptions$ = new v.X([])
            }

            get headerOptions$() {
                return this._headerOptions$.asObservable()
            }

            _emit() {
                this._headerOptions$.next(Object.assign({}, this.dataStore).headerOptions)
            }

            update(m) {
                this.dataStore.headerOptions = m, this._emit()
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)
        }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac, providedIn: "root"}), f
    })();
    var Xs = s(24058), wt = s(61737), Xt = s(77604);
    let wo = (() => {
        class f {
            constructor(m) {
                this.auth = m, this.isRefreshingToken = !1, this.tokenSubject = new v.X(null)
            }

            addToken(m, L) {
                return m.clone({setHeaders: {Authorization: "Bearer " + L}})
            }

            intercept(m, L) {
                const j = this.auth.getAuthToken();
                return L.handle(this.addToken(m, j ? j.access : null)).pipe((0, c.K)(Se => {
                    if (Se instanceof ue.UA) switch (Se.status) {
                        case 400:
                            return this.badRequest(Se);
                        case 401:
                            if (-1 == m.url.indexOf("login")) {
                                if (-1 == m.url.indexOf("refresh")) return this.unauthorized(m, L);
                                this.auth.logout()
                            }
                    }
                    return (0, wt._)(Se)
                }))
            }

            badRequest(m) {
                return m && 400 === m.status && m.error && "invalid_grant" === m.error.error ? (this.auth.logout(), null) : (0, wt._)(m)
            }

            unauthorized(m, L) {
                return this.isRefreshingToken ? this.tokenSubject.pipe((0, Be.h)(j => null != j), (0, ee.q)(1), (0, st.VS)(j => L.handle(this.addToken(m, j)))) : (this.isRefreshingToken = !0, this.tokenSubject.next(null), this.auth.refreshToken().pipe((0, st.VS)(j => j && j.refresh ? this.auth.saveAccount(j, this.auth.isRemembering, 1).pipe((0, Xt.h)(j)) : (this.auth.logout(), (0, i.of)())), (0, st.VS)(j => (this.tokenSubject.next(j.access), L.handle(this.addToken(m, j.access)))), (0, c.K)(j => (0, wt._)("unauthorized")), (0, F.x)(() => {
                    this.isRefreshingToken = !1
                })))
            }
        }

        return f.\u0275fac = function (m) {
            return new (m || f)(o.LFG(H.mI))
        }, f.\u0275prov = o.Yz7({token: f, factory: f.\u0275fac}), f
    })();
    var k, As = s(21057);
    let p = [Ie.LE, {provide: Window, useValue: window}, {
        provide: o.ip1,
        useFactory: f => () => f.loadConfigurations().toPromise(),
        multi: !0,
        deps: [Ie.LE]
    }, {provide: ue.TP, useClass: wo, multi: !0}, {provide: ae.GC, useClass: ie}, {
        provide: H.B3,
        useClass: Q.N.envClasses.featureFlagsService
    }, {provide: H.mI, useClass: Q.N.envClasses.authService}, {
        provide: H.qy,
        useClass: Q.N.envClasses.storageService
    }, {provide: H.ux, useClass: Q.N.envClasses.ethService}, {
        provide: H.LI,
        useClass: Q.N.envClasses.authHostService
    }, {
        provide: H.pk,
        useClass: Q.N.envClasses.audioService
    }, Xs.m, Y.x0, Ze.F, Ie.n2, Ie.dK, ss.D, Ft, qe._, bt, is, Ie.fY, Ws.$z];
    (null === (k = Q.N.sentry) || void 0 === k ? void 0 : k.dsn) && (p = [...p, ...function he() {
        return [{provide: o.qLn, useValue: xe.v({showDialog: !1})}, {provide: be.aN, deps: [W.F0]}, {
            provide: o.ip1,
            useFactory: (f, D) => () => D.init(),
            deps: [be.aN, de],
            multi: !0
        }]
    }()]);
    let R = (() => {
        class f {
        }

        return f.\u0275fac = function (m) {
            return new (m || f)
        }, f.\u0275mod = o.oAB({type: f, bootstrap: [ys]}), f.\u0275inj = o.cJS({
            providers: p,
            imports: [[oe.u5, ue.JF, Ns, oe.UX, Ce.PW, l.b2, As.m.forRoot(), me.Aw.forRoot(Ht, {metaReducers: ns}), ae.Qi.forRoot(ke), Q.N.production ? [] : G.FT.instrument(), ce.sQ.forRoot([Vs]), me.Aw.forFeature("gameResources", Ms, {initialState: Ks}), ce.sQ.forFeature([Hs]), B.ic, J.P, K.j]]
        }), f
    })();
    var q;
    if (Q.N.production && ((0, o.G48)(), null === (q = Q.N.sentry) || void 0 === q ? void 0 : q.dsn)) {
        const {buildNumber: f} = C;
        M.S({
            release: `gu-cerberus@0.13.3+${f}`,
            environment: Q.N.production ? "production" : "staging",
            dsn: Q.N.sentry.dsn,
            integrations: [],
            tracesSampleRate: Q.N.sentry.tracesSampleRate || 0
        })
    }
    l.q6().bootstrapModule(R).catch(f => console.error(f))
}, 12751
:
(se, U, s) => {
    "use strict";
    s(10609), window.process = {env: {DEBUG: void 0}}, window.global = window, global.Buffer = s(93172).Buffer, global.process = s(35736)
}, 73307
:
(se, U, s) => {
    "use strict";
    s.d(U, {Ho: () => a, mI: () => v, ux: () => i, qy: () => d, LI: () => n, pk: () => e, Hd: () => r, B3: () => b});
    var l = s(5e3);
    const a = new l.OlP("environment-settings"), v = new l.OlP("i-auth-service"), i = new l.OlP("i-eth-service"),
        d = (new l.OlP("i-cards-service"), new l.OlP("i-storage-service")),
        n = (new l.OlP("i-modal-service"), new l.OlP("i-auth-host-service")), e = new l.OlP("i-audio-service"),
        r = new l.OlP("i-launchdarkly-client"), b = new l.OlP("i-feature-flag-service");
    new l.OlP("i-deck-code-service"), new l.OlP("apollo-token"), new l.OlP("user_id"), new l.OlP("logout-notifications"), new l.OlP("game-status")
}, 51649
:
(se, U, s) => {
    "use strict";
    s.d(U, {R: () => n, E: () => e});
    var l = s(39017), a = s(61737), v = s(36053), i = s(72986), t = s(24850), d = s(5e3), u = s(69439);
    const n = new d.OlP("deck-code-service");
    let e = (() => {
        class r {
            constructor(P) {
                this.cardsService = P
            }

            decodeDeckCode(P) {
                let S, I, w;
                try {
                    ({domain: S, formatCode: I, libraryIds: w} = (0, l.Jx)(P))
                } catch (x) {
                    return (0, a._)(x)
                }
                return (0, v.aj)([this.cardsService.protoCards$, this.cardsService.inventory$]).pipe((0, i.q)(1), (0, t.U)(([x, $]) => {
                    const {ownedCards: O, unownedProtos: y} = this.buildFromInventory(x, $, S, w, I);
                    return {ownedCards: O, unownedProtos: y, domain: S, formatCode: I}
                }))
            }

            validateProtos(P, S, I) {
                if (S.length > 30) throw new Error("Too many cards in the deck.");
                if (I.length !== S.length) throw new Error("One or more cards in your deck are not valid.");
                S.forEach(w => {
                    const x = P.get(w), $ = S.filter(O => O === w).length;
                    if ($ > 2 || ("legendary" === x.rarity || "mythic" === x.rarity) && $ > 1) throw new Error("There are too many copies of one or more cards in your deck.")
                })
            }

            buildFromInventory(P, S, I, w, x) {
                const $ = this.getProtos(w, P, I);
                this.validateProtos(P, $, w);
                const {ownedCards: O, unownedProtos: y} = this.convertToOwnedUnowned($, S, P);
                return {ownedCards: O, unownedProtos: y, domain: I, formatCode: x}
            }

            convertToOwnedUnowned(P, S, I) {
                const w = [], x = [];
                return P.forEach($ => {
                    const O = S[$];
                    if (!O || !O.length) return void x.push($);
                    const M = [...O].sort((o, h) => o.q - h.q).filter(o => !w.map(h => h.id).includes(o.id));
                    if (M && M.length) {
                        const o = {proto: $, quality: M[0].q, id: M[0].id, protoCard: I.get($)};
                        w.push(o)
                    } else x.push($)
                }), {ownedCards: w, unownedProtos: this.sortProtos(x, I)}
            }

            sortProtos(P, S) {
                return [...P.map(O => S.get(O))].sort((O, y) => O.name < y.name ? -1 : 1).sort((O, y) => O.mana - y.mana).map(O => O.proto)
            }

            getProtos(P, S, I) {
                const w = [];
                return S.forEach((x, $) => {
                    if ("neutral" !== x.god && x.god !== I) return;
                    const O = P.filter(y => y === x.lib_id).length;
                    for (let y = 0; y < O; y++) w.push($)
                }), w
            }

            encodeDeck(P, S) {
                return (0, l.cv)(P, S)
            }
        }

        return r.\u0275fac = function (P) {
            return new (P || r)(d.LFG(u.d))
        }, r.\u0275prov = d.Yz7({token: r, factory: r.\u0275fac, providedIn: "root"}), r
    })()
}, 3241
:
(se, U, s) => {
    "use strict";
    s.d(U, {Rl: () => l.Rl});
    var l = s(39029), a = s(70655), i = (s(61517), s(32830)), t = s(86041), d = s(56418), u = s(65171), n = s(80102),
        e = s(26532), r = s(65281);
    let b = class extends i.oi {
        constructor() {
            super(...arguments), this.closable = !0
        }

        static get styles() {
            return i.iv`
      :host {
        width: 100%;
        display: flex;
        position: fixed;
        background-color: rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.dark[900]))}, 0.8);
      }

      .closeIcon {
        position: absolute;
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
        top: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
        right: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
        cursor: pointer;
        z-index: 1;
      }
    `
        }

        close() {
            this.dispatchEvent(new CustomEvent("onCloseAnnounceBanner", {bubbles: !1}))
        }

        render() {
            return i.dy`
      ${this.closable ? i.dy`<gu-icon
            fillColor="colors.apocyan.300"
            iconLigature="close_x"
            class="closeIcon"
            @click="${this.close}"
            data-test-id="announce-banner-close-icon"
          ></gu-icon>` : ""}

      <slot></slot>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: Boolean})], b.prototype, "closable", void 0), b = (0, a.__decorate)([(0, t.M)("gu-announce-banner-template")], b), s(263), s(11015);
    let I = class extends i.oi {
        static get styles() {
            return i.iv`
      :host {
        display: flex;
        width: 100%;
      }

      .layout {
        display: flex;
        align-items: flex-start;
        padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(16))};
        width: 100%;
        height: 100vh;
        justify-content: center;
      }

      .layout__text {
        max-width: 600px;
      }
    `
        }

        render() {
            return i.dy`
      <gu-vertical-space class="layout" both="2x-large">
        <gu-paragraph-text class="layout__text" kind="large" align="center" fillColor="colors.light.300">
          Gods Unchained is currently offline while we resolve issues affecting the launcher. We’ll be back online
          shortly.
        </gu-paragraph-text>
      </gu-vertical-space>
    `
        }
    };
    I = (0, a.__decorate)([(0, t.M)("gu-outage-banner")], I);
    let w = class extends i.oi {
        static get styles() {
            return i.iv`
      :host {
        display: flex;
        width: 100%;
      }

      .layout {
        display: flex;
        align-items: flex-start;
        padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(16))};
        width: 100%;
        justify-content: center;
      }

      .layout__text {
        max-width: 600px;
      }
    `
        }

        render() {
            return i.dy`
      <gu-vertical-space class="layout" both="2x-large">
        <gu-paragraph-text class="layout__text" kind="large" align="center" fillColor="colors.light.300">
          Due to ongoing issues, Weekend Ranked will not run this weekend. It will resume the following weekend for a
          special double rewards event.
        </gu-paragraph-text>
      </gu-vertical-space>
    `
        }
    };
    w = (0, a.__decorate)([(0, t.M)("gu-ranked-weekend-cancelled-banner")], w);
    let x = class extends i.oi {
        static get styles() {
            return i.iv`
      :host {
        display: flex;
        width: 100%;
      }

      .layout {
        display: flex;
        align-items: flex-start;
        padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(16))};
        width: 100%;
        justify-content: center;
      }

      .layout__text {
        max-width: 600px;
      }
    `
        }

        render() {
            return i.dy`
      <gu-vertical-space class="layout" both="2x-large">
        <gu-paragraph-text class="layout__text" kind="large" align="center" fillColor="colors.light.300">
          <strong>WEEKEND RANKED IS POSTPONED<strong>
          <br />
          Due to a critical issue, the Weekend Ranked event has been cancelled. Next event will yield double rewards as a result.
        </gu-paragraph-text>
      </gu-vertical-space>
    `
        }
    };
    x = (0, a.__decorate)([(0, t.M)("gu-maintenance-banner")], x);
    var $ = s(38872), O = s(98539);
    let y = class extends i.oi {
        constructor() {
            super(...arguments), this.overlay = !1, this.reveal = !1, this.imageLoader = new Image, this.isLoading = !1
        }

        static get styles() {
            return i.iv`
      :host {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -10;
        background-position: center center;
        background-size: cover;
      }

      .backdrop__image,
      .backdrop__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        border: none;
      }

      .backdrop__image {
        background-position: center center;
        background-size: cover;
        transition: opacity ease-in-out 0.5s;
      }

      :host(.loading) .backdrop__image {
        opacity: 0;
        transition: none;
      }

      .backdrop__overlay {
        z-index: 1;
        background: linear-gradient(
          0deg,
          rgba(10, 10, 10, 0.9) 0%,
          rgba(10, 10, 10, 0.5) 51.49%,
          rgba(10, 10, 10, 0.25) 77.04%,
          rgba(10, 10, 10, 0.75) 100%
        );
        mix-blend-mode: normal;
        opacity: 0.75;
      }

      .backdrop__overlay--reveal {
        animation: backdropFade 3s forwards;
      }

      @keyframes backdropFade {
        from {
          background-color: rgba(0, 0, 0, 1);
          opacity: 1;
        }
        to {
          background-color: rgba(0, 0, 0, 0);
          opacity: 0.75;
        }
      }
    `
        }

        updated(g) {
            super.updated(g), g.has("image") && this.image && (this.imageLoader.src = `/assets/images/backdrops/${this.image}`, !this.isLoading && (this.isLoading = !0, (0, n.waitForImageToLoad)(this.imageLoader).then(() => {
                requestAnimationFrame(() => {
                    this.classList.add("loading"), this.style.backgroundImage = this.imageElement.style.backgroundImage, this.imageElement.style.backgroundImage = `url(/assets/images/backdrops/${this.image})`, this.isLoading = !1, requestAnimationFrame(() => {
                        this.dispatchEvent(new CustomEvent("image-changed", {
                            detail: this.image,
                            bubbles: !1,
                            composed: !1
                        })), this.classList.remove("loading")
                    })
                })
            })))
        }

        renderBackdrop() {
            return this.image ? i.dy` <div class="backdrop__image" /> ` : i.dy``
        }

        renderOverlay() {
            return this.overlay ? i.dy`
      <div class="${(0, O.$)({backdrop__overlay: !0, "backdrop__overlay--reveal": this.reveal})}"></div>
    ` : i.dy``
        }

        render() {
            return i.dy` ${this.renderBackdrop()} ${this.renderOverlay()} `
        }
    };
    (0, a.__decorate)([(0, d.C)()], y.prototype, "image", void 0), (0, a.__decorate)([(0, d.C)()], y.prototype, "overlay", void 0), (0, a.__decorate)([(0, d.C)()], y.prototype, "reveal", void 0), (0, a.__decorate)([(0, $.I)(".backdrop__image")], y.prototype, "imageElement", void 0), y = (0, a.__decorate)([(0, t.M)("gu-backdrop")], y);
    let M = class extends i.oi {
        constructor() {
            super(...arguments), this.color = "grey"
        }

        static get styles() {
            return i.iv`
      :host {
        height: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
        display: flex;
        background: none;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0;
      }
      .rect {
        box-sizing: content-box;
        width: ${(0, e.asCssProp)((0, n.gridUnits)(1.5))};
        height: 100%;
        animation: opacityFade 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      }
      .rect:not(:first-child) {
        margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(1.5))};
      }
      .rect--1 {
        animation-delay: -0.6s;
      }
      .rect--2 {
        animation-delay: -0.4s;
      }
      .rect--3 {
        animation-delay: -0.2s;
      }
      .rect--4 {
        animation-delay: -1s;
      }
      .grey.rect--1 {
        background: #fafafa;
      }
      .grey.rect--2 {
        background: #f2f2f2;
      }
      .grey.rect--3 {
        background: #e5e5e5;
      }
      .grey.rect--4 {
        background: ${(0, e.asCssProp)(r.colors.light[300])};
      }
      .apocyan.rect--1 {
        background: ${(0, e.asCssProp)(r.colors.apocyan[300])};
      }
      .apocyan.rect--2 {
        background: #6edbdb;
      }
      .apocyan.rect--3 {
        background: #67d9e0;
      }
      .apocyan.rect--4 {
        background: ${(0, e.asCssProp)(r.colors.apocyan[500])};
      }
      @keyframes opacityFade {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    `
        }

        render() {
            return i.dy`
      <div class="rect rect--1 ${this.color}"></div>
      <div class="rect rect--2 ${this.color}"></div>
      <div class="rect rect--3 ${this.color}"></div>
      <div class="rect rect--4 ${this.color}"></div>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: String})], M.prototype, "color", void 0), M = (0, a.__decorate)([(0, t.M)("gu-rectangular-spinner")], M);
    var o = s(26711);

    class h extends i.oi {
        constructor() {
            super(...arguments), this.loading = !1, this.disabled = !1, this.expand = !1, this.iconPosition = "right", this.type = "secondary"
        }

        renderIcon(g) {
            return g ? i.dy`<gu-icon iconLigature=${g} class="button__icon"></gu-icon>` : i.dy``
        }

        renderText() {
            return i.dy`<slot class="button__text"></slot>`
        }

        renderContent(g, A) {
            return g ? i.dy`<gu-rectangular-spinner class="button__spinner" color="grey"></gu-rectangular-spinner>` : i.dy` ${this.renderIcon(A)} ${this.renderText()} `
        }

        getClassMap() {
            return {
                button__content: !0,
                [`button__content--icon-${this.iconPosition}`]: !0,
                [`button__content--type-${this.type}`]: !0
            }
        }

        render() {
            return i.dy` <div class=${(0, O.$)(this.getClassMap())}> ${this.renderContent(this.loading, this.icon)} </div> `
        }
    }

    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], h.prototype, "loading", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], h.prototype, "disabled", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], h.prototype, "expand", void 0), (0, a.__decorate)([(0, d.C)()], h.prototype, "icon", void 0), (0, a.__decorate)([(0, d.C)()], h.prototype, "iconPosition", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], h.prototype, "type", void 0), s(92435), s(43977);
    let K = class extends i.oi {
        constructor() {
            super(...arguments), this.gap = 16, this.layout = "centered", this.visible = !0
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--gap, 16px);
        transition: opacity 0.3s ease;
        opacity: 0;
      }

      :host(.visible) {
        opacity: 1;
      }

      :host([layout='justified']) {
        justify-content: space-between;
      }

      :host([layout='balanced']) ::slotted(*) {
        flex: 1 0 10px;
      }
    `
        }

        render() {
            return this.classList.toggle("visible", this.visible), this.style.setProperty("--gap", `${this.gap}px`), i.dy`<slot></slot>`
        }
    };
    (0, a.__decorate)([(0, d.C)()], K.prototype, "gap", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], K.prototype, "layout", void 0), (0, a.__decorate)([(0, d.C)()], K.prototype, "visible", void 0), K = (0, a.__decorate)([(0, t.M)("gu-button-group")], K);
    const ce = i.iv`
  :host {
    display: inline-flex;
    position: relative;
    min-width: var(--gu-button-min-width);
    height: var(--gu-button-height);
    line-height: var(--gu-button-height);
    isolation: isolate;

    --gu-button-color: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
    --gu-button-border-width: ${(0, e.asCssProp)((0, n.gridUnits)(.25))};
    --gu-button-min-width: ${(0, e.asCssProp)((0, n.gridUnits)(9))};
    --gu-button-height: ${(0, e.asCssProp)((0, n.gridUnits)(9))};
    --gu-button-padding-x: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
    --gu-button-margin: 0px;
    --gu-button-disabled-color: ${(0, e.asCssProp)(r.colors.dark[500])};
    --gu-button-disabled-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.dark[700])};
    --gu-button-disabled-background-color: ${(0, e.asCssProp)(r.colors.dark[700])};
    --gu-button-font-size: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
    --gu-button-font-family: 'Open Sans', sans-serif;
    --gu-button-text-transform: inherit;
    --gu-button-text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  }

  :host([theme='dark']) {
    --gu-button-primary-background-color: ${(0, e.asCssProp)(r.colors.apocyan[500])};
    --gu-button-primary-background-color-hover: ${(0, e.asCssProp)(r.colors.apocyan[300])};
    --gu-button-primary-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.apocyan[500])};
    --gu-button-primary-border-color-hover: ${(0, e.asCssProp)(r.colors.apocyan[300])};
    --gu-button-primary-color: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-primary-color-hover: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-primary-text-shadow: var(--gu-button-text-shadow);

    --gu-button-secondary-background-color: ${(0, e.asCssProp)(r.colors.dark[900])};
    --gu-button-secondary-background-color-hover: ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-secondary-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-secondary-border-color-hover: ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-secondary-color: ${(0, e.asCssProp)(r.colors.light[500])};
    --gu-button-secondary-color-hover: ${(0, e.asCssProp)(r.colors.dark[900])};
    --gu-button-secondary-text-shadow: none;

    --gu-button-subtle-background-color: ${(0, e.asCssProp)(r.colors.dark[700])};
    --gu-button-subtle-background-color-hover: ${(0, e.asCssProp)(r.colors.dark[500])};
    --gu-button-subtle-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.dark[700])};
    --gu-button-subtle-border-color-hover: ${(0, e.asCssProp)(r.colors.dark[500])};
    --gu-button-subtle-color: ${(0, e.asCssProp)(r.colors.light[700])};
    --gu-button-subtle-color-hover: ${(0, e.asCssProp)(r.colors.light[500])};
    --gu-button-subtle-text-shadow: var(--gu-button-text-shadow);

    --gu-button-danger-background-color: ${(0, e.asCssProp)(r.colors.god.war.tertiary)};
    --gu-button-danger-background-color-hover: ${(0, e.asCssProp)(r.colors.god.war.secondary)};
    --gu-button-danger-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.god.war.tertiary)};
    --gu-button-danger-border-color-hover: ${(0, e.asCssProp)(r.colors.god.war.secondary)};
    --gu-button-danger-color: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-danger-color-hover: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-danger-text-shadow: var(--gu-button-text-shadow);
  }

  :host([theme='light']) {
    --gu-button-primary-background-color: ${(0, e.asCssProp)(r.colors.apocyan[500])};
    --gu-button-primary-background-color-hover: ${(0, e.asCssProp)(r.colors.apocyan[300])};
    --gu-button-primary-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.apocyan[500])};
    --gu-button-primary-border-color-hover: ${(0, e.asCssProp)(r.colors.apocyan[300])};
    --gu-button-primary-color: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-primary-color-hover: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-primary-text-shadow: var(--gu-button-text-shadow);

    --gu-button-secondary-background-color: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-secondary-background-color-hover: ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-secondary-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-secondary-border-color-hover: ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-secondary-color: ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-secondary-color-hover: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-secondary-text-shadow: none;

    --gu-button-subtle-background-color: ${(0, e.asCssProp)(r.colors.light[300])};
    --gu-button-subtle-background-color-hover: ${(0, e.asCssProp)(r.colors.light[500])};
    --gu-button-subtle-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.light[300])};
    --gu-button-subtle-border-color-hover: ${(0, e.asCssProp)(r.colors.light[500])};
    --gu-button-subtle-color: ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-subtle-color-hover: ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-button-subtle-text-shadow: none;

    --gu-button-danger-background-color: ${(0, e.asCssProp)(r.colors.god.war.tertiary)};
    --gu-button-danger-background-color-hover: ${(0, e.asCssProp)(r.colors.god.war.secondary)};
    --gu-button-danger-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.god.war.tertiary)};
    --gu-button-danger-border-color-hover: ${(0, e.asCssProp)(r.colors.god.war.secondary)};
    --gu-button-danger-color: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-danger-color-hover: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-button-danger-text-shadow: var(--gu-button-text-shadow);

    --gu-button-disabled-color: ${(0, e.asCssProp)(r.colors.light[500])};
    --gu-button-disabled-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.light[300])};
    --gu-button-disabled-border: hover var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.light[300])};
    --gu-button-disabled-background-color: ${(0, e.asCssProp)(r.colors.light[300])};
  }

  :host([theme='gunmetal']) {
    --gu-gunmetal-button-border-width: 1px;

    --gu-button-primary-background-color: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-primary-background-color-hover: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-primary-border: var(--gu-gunmetal-button-border-width) solid ${(0, e.asCssProp)(r.colors.apocyan[500])};
    --gu-button-primary-border-color-hover: ${(0, e.asCssProp)(r.colors.apocyan[300])};
    --gu-button-primary-color: ${(0, e.asCssProp)(r.colors.apocyan[300])};
    --gu-button-primary-color-hover: ${(0, e.asCssProp)(r.colors.apocyan[100])};
    --gu-button-primary-text-shadow: var(--gu-button-text-shadow);

    --gu-button-secondary-background-color: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-secondary-background-color-hover: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-secondary-border: var(--gu-gunmetal-button-border-width) solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    --gu-button-secondary-border-color-hover: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
    --gu-button-secondary-color: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
    --gu-button-secondary-color-hover: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
    --gu-button-secondary-text-shadow: var(--gu-button-text-shadow);

    --gu-button-disabled-color: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-disabled-border: var(--gu-gunmetal-button-border-width) solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-disabled-background-color: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
  }

  .standard-button {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    line-height: var(--gu-button-height);
    font-size: var(--gu-button-font-size);
    font-family: var(--gu-button-font-family);
    font-weight: 700;
    color: var(--gu-button-color);
    border-radius: var(--gu-button-border-radius);
    padding: 0px var(--gu-button-padding-x);
    margin: var(--gu-button-margin);
    min-width: calc(var(--gu-button-min-width) - var(--gu-button-padding-x));
    z-index: 3;
    text-decoration-line: none;
    flex-grow: 1;
  }

  .standard-button__loader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: var(--gu-button-border-radius);
  }

  .standard-button__icon {
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
    margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(1.5))};
  }

  .standard-button--icon-right .standard-button__icon {
    order: 1;
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(1.5))};
    margin-right: 0px;
  }

  .standard-button--icon-only .standard-button__icon {
    position: absolute;
    left: 50%;
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(-2))};
    margin-right: 0px;
  }

  .standard-button--primary {
    background-color: var(--gu-button-primary-background-color);
    border: var(--gu-button-primary-border);
    color: var(--gu-button-primary-color);
    text-shadow: var(--gu-button-primary-text-shadow);
  }
  .standard-button--primary .standard-button__loader {
    background-color: var(--gu-button-primary-background-color);
  }

  .standard-button--secondary {
    background-color: var(--gu-button-secondary-background-color);
    border: var(--gu-button-secondary-border);
    color: var(--gu-button-secondary-color);
    text-shadow: var(--gu-button-secondary-text-shadow);
  }
  .standard-button--secondary .standard-button__loader {
    background-color: var(--gu-button-secondary-background-color);
  }

  .standard-button--subtle {
    background-color: var(--gu-button-subtle-background-color);
    border: var(--gu-button-subtle-border);
    color: var(--gu-button-subtle-color);
    text-shadow: var(--gu-button-subtle-text-shadow);
  }
  .standard-button--subtle .standard-button__loader {
    background-color: var(--gu-button-subtle-background-color);
  }

  .standard-button--danger {
    background-color: var(--gu-button-danger-background-color);
    border: var(--gu-button-danger-border);
    color: var(--gu-button-danger-color);
    text-shadow: var(--gu-button-danger-text-shadow);
  }
  .standard-button--danger .standard-button__loader {
    background-color: var(--gu-button-danger-background-color);
  }

  /* Hover states
    ----------------------------------------------------------------------------------- */
  .standard-button--primary:hover {
    background-color: var(--gu-button-primary-background-color-hover);
    border-color: var(--gu-button-primary-border-color-hover);
    color: var(--gu-button-primary-color-hover);
  }
  .standard-button--secondary:hover {
    background-color: var(--gu-button-secondary-background-color-hover);
    border-color: var(--gu-button-secondary-border-color-hover);
    color: var(--gu-button-secondary-color-hover);
  }

  :host([theme='light']) .standard-button--secondary:hover {
    text-shadow: var(--gu-button-text-shadow);
  }

  .standard-button--subtle:hover {
    background-color: var(--gu-button-subtle-background-color-hover);
    border-color: var(--gu-button-subtle-border-color-hover);
    color: var(--gu-button-subtle-color-hover);
  }
  .standard-button--danger:hover {
    background-color: var(--gu-button-danger-background-color-hover);
    border-color: var(--gu-button-danger-border-color-hover);
    color: var(--gu-button-danger-color-hover);
  }

  /* Active states
    ----------------------------------------------------------------------------------- */
  :host([theme='light']) .standard-button:active > * {
    opacity: 0.7;
  }

  :host([theme='dark']) .standard-button:active > * {
    opacity: 0.7;
  }

  :host([theme='gunmetal']) .standard-button:active {
    box-shadow: inset 0px 2px 6px rgba(0, 0, 0, 0.75);
  }

  /* Horizontal stretch functionality:
    ----------------------------------------------------------------------------------- */

  :host([expand='true']) {
    justify-self: stretch;
    flex-grow: 1;
  }
  :host([expand='true']) .standard-button {
    justify-self: stretch;
    flex-grow: 1;
  }

  /* Disabled and Loading states
    ----------------------------------------------------------------------------------- */
  :host([disabled='true']) .standard-button {
    color: var(--gu-button-disabled-color);
    border: var(--gu-button-disabled-border);
    background-color: var(--gu-button-disabled-background-color);
    text-shadow: none;
  }

  :host([disabled='true']),
  :host([loading='true']) {
    ${(0, e.asCssProp)(r.uifx.userSelect("none"))};
  }

  /* Icon coloring rules
    ----------------------------------------------------------------------------------- */
  :host(.standard-button-icon-success) gu-icon {
    --textFillColor: ${(0, e.asCssProp)(r.colors.apocyan[500])};
  }
`;
    let ae = class extends i.oi {
        constructor() {
            super(...arguments), this.loading = !1, this.disabled = !1, this.expand = !1, this.iconPosition = "left", this.iconOnly = !1, this.type = "primary", this.theme = "light"
        }

        static get styles() {
            return ce
        }

        renderIcon() {
            return this.icon ? i.dy`<gu-icon iconLigature=${this.icon} class="standard-button__icon"></gu-icon>` : i.dy``
        }

        renderLoader() {
            return !this.loading || this.disabled ? i.dy`` : i.dy` <div class="standard-button__loader">
      <gu-rectangular-spinner color="grey"></gu-rectangular-spinner>
    </div>`
        }

        getClassMap() {
            return {
                "standard-button": !0,
                "standard-button--icon-only": this.iconOnly,
                [`standard-button--icon-${this.iconPosition}`]: !0,
                [`standard-button--${this.type}`]: !0
            }
        }

        render() {
            return this.href ? i.dy` <a
        ?disabled="${this.disabled}"
        href=${this.href}
        target=${this.target}
        class=${(0, O.$)(this.getClassMap())}
      >
        ${this.renderLoader()} ${this.renderIcon()}
        <div class="standard-button__content">
          <slot data-test-id="standard-button-text-slot"></slot>
        </div>
      </a>` : i.dy` <button ?disabled="${this.disabled}" class=${(0, O.$)(this.getClassMap())}>
        ${this.renderLoader()} ${this.renderIcon()}
        <div class="standard-button__content">
          <slot data-test-id="standard-button-text-slot"></slot>
        </div>
      </button>`
        }
    };
    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], ae.prototype, "loading", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], ae.prototype, "disabled", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], ae.prototype, "expand", void 0), (0, a.__decorate)([(0, d.C)()], ae.prototype, "iconPosition", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], ae.prototype, "iconOnly", void 0), (0, a.__decorate)([(0, d.C)()], ae.prototype, "icon", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], ae.prototype, "type", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], ae.prototype, "theme", void 0), (0, a.__decorate)([(0, d.C)()], ae.prototype, "href", void 0), (0, a.__decorate)([(0, d.C)()], ae.prototype, "target", void 0), ae = (0, a.__decorate)([(0, t.M)("gu-standard-button")], ae);
    var me = s(25297), G = s(72985), Y = s(58672);
    const ue = {text: {type: String}, href: {type: String}, target: {type: String}},
        oe = Object.assign(Object.assign({}, ue), {
            loading: {type: String},
            loadingColor: {type: String},
            disabled: {type: String},
            icon: {type: String},
            leftIconPosition: {type: Boolean},
            size: {type: String},
            enableSounds: {type: Boolean},
            horizontalStretch: {type: String}
        }), Ce = Object.assign(Object.assign({}, ue), {
            color: {type: String},
            loading: {type: String},
            loadingColor: {type: String},
            disabled: {type: String},
            size: {type: String},
            enableSounds: {type: Boolean},
            horizontalStretch: {type: String}
        });
    var H = s(91418);
    const Z = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.75))};
    background: var(--gu-blue-dark) !important;
    border: solid 1px transparent !important;
    color: var(--gu-blue) !important;
    flex-grow: 0;
    height: ${(0, e.asCssProp)((0, n.gridUnits)(9))};
    transition: color 280ms cubic-bezier(.4,0,.2,1) border-color 280ms cubic-bezier(.4,0,.2,1);
  }

  /* Button content styles
    ----------------------------------------------------------------------------------- */
  .buttonContent {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(3.5))};
  }

  .buttonContent--square {
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
  }

  .buttonContent__icon {
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(1.5))};
    position: relative;
    z-index: 2;
    order: 1;
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
  }

  :host([iconColor]) .buttonContent__icon {
    color: var(--iconColor);
  }

  .buttonContent__text {
    position: relative;
    z-index: 2;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-self: center;
    order: 1;
  }

  /* Horizontal stretch functionality:
    ----------------------------------------------------------------------------------- */
  :host([horizontalStretch='true']) {
    justify-self: stretch;
    flex-grow: 1;
  }

  /* Button content icon on left side state:
    ----------------------------------------------------------------------------------- */
  .buttonContent--leftIcon .buttonContent__icon {
    order: 0;
    margin: 0 ${(0, e.asCssProp)((0, n.gridUnits)(1))} 0 0;
  }

  /* Button content when layout is vertical
    ----------------------------------------------------------------------------------- */
  .buttonContent--vertical {
    flex-direction: column;
    align-items: center;
    min-width: 70px;
    max-width: 80px;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(3))} ${(0, e.asCssProp)((0, n.gridUnits)(3))};
  }

  .buttonContent--vertical .buttonContent__icon {
    order: 0;
    margin: 0;
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
  }

  .buttonContent--vertical .buttonContent__text {
    text-align: center;
  }

  :host([backgroundFillColor='colors.apocyan.500']) {
    text-shadow: 0px 1px 1px rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.black))}, 0.3);
  }

  /* "DISABLED" and "LOADING" BUTTON STYLES
    ----------------------------------------------------------------------------------- */
  :host([disabled='true']),
  :host([loading='true']) {
    ${(0, e.asCssProp)(r.uifx.userSelect("none"))};
  }

  :host([disabled='true']) {
    filter: grayscale(100%);
  }

  /*  HOVER & MOUSEDOWN FX
  ----------------------------------------------------------------------------------- */
  :host(:hover) {
    border-color: var(--gu-yellow) !important;
    color: var(--gu-yellow) !important;
  }

  :host(:active) {
    // background: transparent;
    // border-color: var(--gu-yellow);
    // color: var(--gu-yellow);
  }

  :host([borderColorHover]:hover),
  :host([borderColorHover]:hover) ::slotted(*) {
    // box-shadow: 0px 0px ${(0, e.asCssProp)((0, n.gridUnits)(1))} var(--borderColorHover);
  }

  ${(0, e.asCssProp)(H.fillColoringRules)}
`, he = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    display: flex;
    flex-grow: 0;
    justify-self: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    color: ${(0, e.asCssProp)(r.colors.light[100])};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(12, 12))};
    ${(0, e.asCssProp)(r.animation.standardTransition("all"))};

    /* NORMAL SIZING BY DEFAULT */
    min-width: 140px;
    height: ${(0, e.asCssProp)("32px")};
    line-height: ${(0, e.asCssProp)("32px")};
  }

  /* The background "fill" color of the button */
  :host::before {
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 2px;
    bottom: 2px;
    z-index: 0;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(11, 11))};
    ${(0, e.asCssProp)(r.animation.standardTransition("all"))};
  }

  /* "LARGE" SIZE BUTTON STYLES
    ----------------------------------------------------------------------------------- */
  :host([size='large']) {
    height: ${(0, e.asCssProp)("48px")};
    line-height: ${(0, e.asCssProp)("48px")};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(18, 18))};
  }

  :host([size='large']) .buttonContent {
    padding: 0 calc(${(0, e.asCssProp)("18px")} + ${(0, e.asCssProp)((0, n.gridUnits)(2))});
  }

  :host([size='large'])::before {
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(17, 17))};
  }

  :host([size='large']) .buttonContent__icon {
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(5.5))};
  }

  /* Horizontal stretch functionality:
    ----------------------------------------------------------------------------------- */
  :host([horizontalStretch='true']) {
    justify-self: stretch;
    flex-grow: 1;
  }

  /* Button content styles
    ----------------------------------------------------------------------------------- */
  .buttonContent {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 calc(${(0, e.asCssProp)("12px")} + ${(0, e.asCssProp)((0, n.gridUnits)(2))});
  }

  .buttonContent__icon {
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
    position: relative;
    z-index: 2;
    order: 2;
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
  }

  .buttonContent__text {
    position: relative;
    z-index: 2;
    color: inherit;
    text-shadow: 0 calc(var(--vh) * 0.2) calc(var(--vh) * 0.2) rgba(${(0, e.asCssProp)(r.colors.dark[900])}, 0.5);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-self: center;
    align-content: center;
    order: 1;
    gap: 8px;
  }

  /* Button content icon on left side state:
    ----------------------------------------------------------------------------------- */
  .buttonContent--leftIcon .buttonContent__icon {
    order: 0;
    margin: 0 ${(0, e.asCssProp)((0, n.gridUnits)(1))} 0 0;
  }

  /* "DISABLED" and "LOADING" BUTTON STYLES
    ----------------------------------------------------------------------------------- */
  :host([disabled='true']),
  :host([loading='true']) {
    filter: grayscale(100%);
    ${(0, e.asCssProp)(r.uifx.userSelect("none"))};
  }

  /*  MOUSE-DOWN FX
    ----------------------------------------------------------------------------------- */
  :host(:active)::after {
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 2px;
    bottom: 2px;
    z-index: 0;
    background: ${(0, e.asCssProp)(r.gradients.apocyan.simple())};
    opacity: 0.2;
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(11, 11))};
  }
`, J = i.iv`
  ${he}

  :host {
    color: var(--gu-blue);
    border: solid 1px var(--gu-blue);
    background: var(--gu-blue-dark);
    border-radius: 25px;
  }

  .waveArtwork {
    display: none;
  }

  /* "LARGE" SIZE BUTTON STYLES
    ----------------------------------------------------------------------------------- */
  :host([size='large']) .waveArtwork__side--top {
    height: calc(${(0, e.asCssProp)("48px")} * 1.4);
  }

  :host([size='large']) .waveArtwork__side--bottom {
    height: calc(${(0, e.asCssProp)("48px")} * 2);
  }

  /*  HOVER FX
    ----------------------------------------------------------------------------------- */
  :host(:hover) {
    color: var(--gu-yellow);
    border-color: var(--gu-yellow);
  }

  :host(:hover)::before,
  :host(:active)::before,
  :host(:active)::after {
    background: var(--gu-blue-dark);
  }
`, ke = (i.iv`
  ${he}

  :host {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
  }

  :host::before {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
  }

  /*  HOVER FX
    ----------------------------------------------------------------------------------- */
  :host(:hover) {
  }

  :host(:hover)::before {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }
`, i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    display: inline-flex;
    justify-content: flex-start;
    cursor: pointer;
  }

  .buttonText {
    color: ${(0, e.asCssProp)(r.colors.apocyan[100])};
    border-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} solid ${(0, e.asCssProp)(r.colors.apocyan[100])};
    padding-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(.25))};
  }

  /*  HOVER FX
    ----------------------------------------------------------------------------------- */
  :host(:hover) .buttonText {
    border-color: ${(0, e.asCssProp)(r.colors.gold[300])};
    color: ${(0, e.asCssProp)(r.colors.gold[300])};
  }
`, i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}
  ${he}

  :host {
    display: flex;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    cursor: pointer;
    min-width: 180px;
    height: ${(0, e.asCssProp)("48px")};
    line-height: ${(0, e.asCssProp)("48px")};
  }

  :host::before {
    background: none;
  }

  .hexLayer {
    position: absolute;
  }

  .outerKeyline {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(0, e.asCssProp)(r.colors.dark[500])};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(18, 18))};
  }

  .outerGolden {
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    background: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(17, 17))};
  }

  .innerGunmetal {
    top: 5px;
    bottom: 5px;
    left: 6px;
    right: 6px;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(14, 14))};
  }

  .innerButtonFill {
    top: 7px;
    bottom: 7px;
    left: 8px;
    right: 8px;
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(13, 13))};
  }

  /* Button content styles
    ----------------------------------------------------------------------------------- */
  .buttonContent {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 calc(${(0, e.asCssProp)("18px")} + ${(0, e.asCssProp)((0, n.gridUnits)(2))});
  }

  .buttonContent__icon {
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
    position: relative;
    z-index: 2;
    order: 1;
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(5.5))};
    ${(0, e.asCssProp)(r.gradients.textFill(r.gradients.gold.simple("bottom")))};
  }

  .buttonContent__text {
    display: inline;
    position: relative;
    z-index: 2;
    text-decoration: none;
    line-height: ${(0, e.asCssProp)("48px")};
    order: 1;
    ${(0, e.asCssProp)(r.gradients.textFill(r.gradients.gold.simple("bottom")))};
  }

  /* Button content icon on left side state:
    ----------------------------------------------------------------------------------- */
  .buttonContent--leftIcon .buttonContent__icon {
    order: 0;
    margin: 0 ${(0, e.asCssProp)((0, n.gridUnits)(2))} 0 0;
  }

  /*  HOVER & MOUSEDOWN FX
  ----------------------------------------------------------------------------------- */
  :host(:hover) .innerButtonFill,
  :host(:active) .innerButtonFill {
    background: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
  }

  :host(:hover) .buttonContent__text,
  :host(:hover) .buttonContent__icon,
  :host(:active) .buttonContent__text,
  :host(:active) .buttonContent__icon {
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
    background-clip: text;
    -webkit-background-clip: text;
  }

  /*  INVERTED COLORING
  ----------------------------------------------------------------------------------- */
  :host(.invertColoring) .innerButtonFill {
    background: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
  }

  :host(.invertColoring) .buttonContent__text,
  :host(.invertColoring) .buttonContent__icon {
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
    background-clip: text;
    -webkit-background-clip: text;
  }

  /*  INVERTED HOVER & MOUSEDOWN FX
  ----------------------------------------------------------------------------------- */
  :host(.invertColoring:hover) .innerButtonFill,
  :host(.invertColoring:active) .innerButtonFill {
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
  }

  :host(.invertColoring:hover) .buttonContent__text,
  :host(.invertColoring:hover) .buttonContent__icon,
  :host(.invertColoring:active) .buttonContent__text,
  :host(.invertColoring:active) .buttonContent__icon {
    ${(0, e.asCssProp)(r.gradients.textFill(r.gradients.gold.simple("bottom")))};
  }
`, r.colors.light[500]), Ue = r.colors.gold[500], Xe = r.colors.dark[500], et = r.colors.dark[900], ht = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}
  ${he}

  :host {
    display: flex;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    cursor: pointer;
    min-width: 180px;
    height: ${(0, e.asCssProp)("48px")};
    line-height: ${(0, e.asCssProp)("48px")};
  }

  :host::before {
    background: none; // fixing the dark bleed in common-hex-button
  }

  .hexLayer {
    position: absolute;
  }

  .outerKeyline {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(0, e.asCssProp)(Xe)};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(18, 18))};
  }

  .outer {
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(17, 17))};
  }
  .outerSilver {
    background-color: ${(0, e.asCssProp)(ke)};
  }
  .outerGold {
    background-color: ${(0, e.asCssProp)(Ue)};
  }

  .innerDark {
    top: 5px;
    bottom: 5px;
    left: 6px;
    right: 6px;
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(14, 14))};
  }

  .innerButtonFill {
    top: 7px;
    bottom: 7px;
    left: 8px;
    right: 8px;
    background: ${(0, e.asCssProp)(et)};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(13, 13))};
  }

  /* Button content styles
    ----------------------------------------------------------------------------------- */
  .buttonContent {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0 calc(${(0, e.asCssProp)("18px")} + ${(0, e.asCssProp)((0, n.gridUnits)(2))});
  }

  .buttonContent__text {
    display: inline;
    position: relative;
    z-index: 2;
    text-decoration: none;
    line-height: ${(0, e.asCssProp)("48px")};
    order: 1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .buttonContent__textSilver {
    background-color: ${(0, e.asCssProp)(ke)};
  }
  .buttonContent__textGold {
    background-color: ${(0, e.asCssProp)(Ue)};
  }

  /*  HOVER & MOUSEDOWN FX
  ----------------------------------------------------------------------------------- */
  :host(:hover) .innerButtonFillSilver,
  :host(:active) .innerButtonFillSilver {
    background-color: ${(0, e.asCssProp)(ke)};
  }
  :host(:hover) .innerButtonFillGold,
  :host(:active) .innerButtonFillGold {
    background-color: ${(0, e.asCssProp)(Ue)};
  }

  :host(:hover) .buttonContent__text,
  :host(:active) .buttonContent__text {
    background-color: ${(0, e.asCssProp)(et)};
    background-clip: text;
    -webkit-background-clip: text;
  }

  :host(:active)::after {
    background: ${(0, e.asCssProp)(et)};
    opacity: 0.2;
  }
`;

    function Ie(z, g) {
        return g && "true" !== z ? i.dy` <gu-icon iconLigature=${g} class="buttonContent__icon"></gu-icon> ` : null
    }

    function B(z, g, A = "grey") {
        return "true" === g ? i.dy`<gu-rectangular-spinner color=${A}></gu-rectangular-spinner>` : z || i.dy` <slot></slot> `
    }

    i.iv`
  ${he}

  :host {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    color: ${(0, e.asCssProp)(r.colors.apocyan[100])};
    text-transform: uppercase;
  }

  :host::before {
    display: none;
  }

  /*  HOVER FX
    ----------------------------------------------------------------------------------- */
  :host(:hover) {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }
`;
    const Ee = i.dy`
`;
    customElements.define("gu-special-hex-flat-button", (0, Y.x)({
        renderer: function it({color: z, text: g, loading: A, loadingColor: X}) {
            return i.dy` ${(({color: z, text: g, loading: A, loadingColor: X}) => {
                const pe = z ? z[0].toUpperCase() + z.slice(1) : "Silver";
                return i.dy`
    <i class="hexLayer outerKeyline"></i>
    <i class="hexLayer outer outer${pe}"></i>
    <i class="hexLayer innerDark"></i>
    <i class="hexLayer innerButtonFill innerButtonFill${pe}"></i>

    <div class=${(0, O.$)({buttonContent: !0})}>
      <gu-heading-text class="buttonContent__text buttonContent__text${pe}" size="2x-small">
        ${B(g, A, X)}
      </gu-heading-text>
    </div>
  `
            })({color: z, text: g, loading: A, loadingColor: X})} `
        }, props: {properties: Ce, styles: ht}, baseClass: (0, G.Am)((0, G.s)((0, G.Xg)(me.J)))
    })), customElements.define("gu-primary-hex-button", (0, Y.x)({
        renderer: function ot({text: z, loading: g, loadingColor: A, size: X, icon: pe, leftIconPosition: Oe}) {
            return i.dy`
    ${Ee} ${(({icon: z, leftIconPosition: g, size: A, text: X, loading: pe, loadingColor: Oe}) => i.dy`
  <div class=${(0, O.$)({buttonContent: !0, "buttonContent--leftIcon": g})}>
    <gu-heading-text class="buttonContent__text" size=${"large" === A ? "2x-small" : "3x-small"}>
      ${B(X, pe, Oe)}
    </gu-heading-text>
    ${Ie(pe, z)}
  </div>
`)({text: z, icon: pe, size: X, loading: g, loadingColor: A, leftIconPosition: Oe})}
  `
        }, props: {properties: oe, styles: J}, baseClass: (0, G.lH)((0, G.Am)((0, G.s)((0, G.Xg)(me.J))))
    }));
    var We = s(5284), Ze = s(52102);
    s(51256);
    const {asCssProp: qe} = We.ZB, {gridUnits: at} = We.dz, rt = i.iv`
  :host {
    display: inline-flex;
    justify-content: flex-start;
    cursor: pointer;
  }

  :host,
  :host([kind='small']),
  :host([kind='help']) {
    border-bottom: ${qe(at(.25))} solid;
    padding-bottom: ${qe(at(.25))};
  }

  :host([kind='large']) {
    border-bottom: ${qe(at(.5))} solid;
    padding-bottom: ${qe(at(.25))};
  }

  :host([kind='tag']) {
    border-bottom: ${qe(at(.5))} solid;
    padding-bottom: ${qe(at(.25))};
  }

  /*  HOVER FX
    ----------------------------------------------------------------------------------- */
  :host(:hover) {
    border-color: ${qe(r.colors.gold[300])};
    color: ${qe(r.colors.gold[300])};
  }
`;
    let At = class extends ((0, G.Xg)(Ze._)) {
        static get styles() {
            const g = [];
            return super.styles && g.push(super.styles), g.push(rt), g
        }

        static get properties() {
            return Object.assign(Object.assign({}, super.properties), ue)
        }
    };
    At = (0, a.__decorate)([(0, t.M)("gu-simple-text-button")], At);
    var Pe = s(12052);
    const $e = Object.assign(Object.assign({}, oe), {
        iconColor: {type: String},
        fillColor: {type: String},
        fillColorHover: {type: String},
        fillGradient: {type: String},
        fillGradientTarget: {type: String},
        backgroundFillColor: {type: String},
        backgroundFillColorHover: {type: String},
        backgroundFillGradient: {type: String},
        backgroundFillGradientTarget: {type: String},
        borderColor: {type: String},
        borderColorHover: {type: String},
        verticalLayout: {type: Boolean},
        square: {type: Boolean}
    });
    customElements.define("gu-plain-square-button", (0, Y.x)({
        renderer: function ee({
                                  text: z,
                                  loading: g,
                                  loadingColor: A,
                                  icon: X,
                                  iconColor: pe,
                                  leftIconPosition: Oe,
                                  fillColor: Fe,
                                  fillColorHover: Ye,
                                  fillGradient: yt,
                                  fillGradientTarget: Tt,
                                  backgroundFillColor: gt,
                                  backgroundFillColorHover: Ct,
                                  backgroundFillGradient: ct,
                                  backgroundFillGradientTarget: Me,
                                  borderColor: Te,
                                  borderColorHover: xt,
                                  verticalLayout: Ae,
                                  square: Je
                              }) {
            return (0, Pe.d4)(() => {
                (0, u.updateColoringVariables)({
                    component: this,
                    iconColor: pe,
                    fillColor: Fe,
                    fillColorHover: Ye,
                    fillGradient: yt,
                    fillGradientTarget: Tt,
                    backgroundFillColor: gt,
                    backgroundFillColorHover: Ct,
                    backgroundFillGradient: ct,
                    backgroundFillGradientTarget: Me,
                    borderColor: Te,
                    borderColorHover: xt
                })
            }, [pe, Fe, Ye, yt, Tt, gt, Ct, ct, Me, Te, xt]), i.dy`${(({
                                                                           icon: z,
                                                                           leftIconPosition: g,
                                                                           text: A,
                                                                           loading: X,
                                                                           loadingColor: pe,
                                                                           verticalLayout: Oe,
                                                                           square: Fe
                                                                       }) => i.dy`
  <div
    class=${(0, O.$)({
                buttonContent: !0,
                "buttonContent--leftIcon": g,
                "buttonContent--vertical": Oe,
                "buttonContent--square": Fe
            })}
  >
    <gu-paragraph-text class="buttonContent__text" kind=${Oe ? "tag" : "small"} fontWeight="bold">
      ${B(A, X, pe)}
    </gu-paragraph-text>
    ${Ie(X, z)}
  </div>
`)({icon: X, leftIconPosition: Oe, loading: g, loadingColor: A, text: z, verticalLayout: Ae, square: Je})}`
        }, props: {properties: $e, styles: Z}, baseClass: (0, G.Am)((0, G.s)((0, G.Xg)(me.J)))
    }));
    var ne = s(47925), _e = (() => {
        return (z = _e || (_e = {})).img2text = "img2text", z.text2img = "text2img", _e;
        var z
    })();
    let N = class extends i.oi {
        constructor() {
            super(...arguments), this.direction = _e.img2text, this.headerSize = "small", this.headerColor = r.colors.light[100], this.textKind = "small", this.textColor = r.colors.light[500], this.backgroundPosition = "top", this.backgroundSize = "contain", this.headerResponsiveSize = [], this.textResponsiveKind = [], this.backgroundImageResponsive = [], this.breakpoint = "medium"
        }

        static get properties() {
            return {
                background: {type: String},
                direction: {type: String},
                header: {type: String},
                headerSize: {type: String},
                headerColor: {type: String},
                text: {type: String},
                textKind: {type: String},
                textColor: {type: String},
                backgroundPosition: {type: String},
                backgroundSize: {type: String},
                headerResponsiveSize: {type: Array},
                textResponsiveKind: {type: Array},
                backgroundImageResponsive: {type: Array},
                breakpoint: {type: String}
            }
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
      }
      .flex-box-col {
        display: flex;
        flex-direction: column;
      }
      .character {
        display: flex;
        background-repeat: no-repeat;
        border-bottom: 1px solid ${(0, e.asCssProp)(r.colors.dark[500])};
        align-items: flex-end;
        justify-content: center;
        min-height: 450px;
      }
      .character-text {
        box-sizing: border-box;
        margin: 280px 20px 20px;
        width: 100%;
        padding-left: 20px;
        border-left: 4px solid ${(0, e.asCssProp)(r.colors.gold[500])};
        text-align: left;
      }
      @media only screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping["x-small"])}) ) {
        .character {
          height: 440px;
        }
        .character-text {
          margin: 40px;
        }
      }
    `
        }

        generateBackgroundImageMediaQueries() {
            return this.backgroundImageResponsive.map(({
                                                           breakpoint: g,
                                                           pos: A,
                                                           size: X
                                                       }) => `\n        @media screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping[g])}) {\n          .character {\n            background-image: ${["x-small", "small"].includes(g) ? "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 80%), " : ""}\n            url('${this.background}') !important;\n            background-position: ${(0, e.asCssProp)(A)} !important;\n            background-size: ${(0, e.asCssProp)(X)} !important;\n          }\n        }\n    `).join("\n")
        }

        generateMediaQueries() {
            return `\n      /* DEFINE RESPONSIVE SIZING */\n      ${this.generateBackgroundImageMediaQueries()}\n        @media\n        screen\n        and\n        (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping[this.breakpoint])}) {\n        .character {\n          flex-direction: column !important;\n          align-items: flex-end !important;\n          justify-content: center !important;\n        }\n        .character-img2text {\n          align-items: flex-end !important;\n        }\n        .character-text2img {\n          align-items: flex-start !important;\n        }\n        .character-text {\n          width: 50% !important;\n          margin: 20px !important;\n        }\n        .character-text-img2text {\n          padding-left: 0 !important;\n          border-left: none !important;\n          padding-right: 20px !important;\n          border-right: 4px solid ${(0, e.asCssProp)(r.colors.gold[500])} !important;\n          text-align: right !important;\n        }\n        .character-text-text2img {\n          padding-right: 0 !important;\n          border-right: none !important;\n          padding-left: 20px !important;\n          border-left: 4px solid ${(0, e.asCssProp)(r.colors.gold[500])} !important;\n          text-align: left !important;\n        }\n      }`
        }

        generateAllStyles() {
            return i.dy`<style>
      .character {
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 45%),
          url('${this.background}');
        background-color: #000;
        background-position: ${this.backgroundPosition};
        background-size: ${this.backgroundSize};
      }
      ${this.generateMediaQueries()}
    </style>`
        }

        render() {
            return i.dy`
      ${this.generateAllStyles()}
      <div class="character character-${this.direction} ">
        <div class="character-text character-text-${this.direction}">
          <gu-heading-text
            class="character-textAllignment"
            fillcolor="${this.headerColor}"
            size="${this.headerSize}"
            .responsiveSize=${this.headerResponsiveSize}
          >
            ${this.header}
          </gu-heading-text>
          <gu-vertical-space both="medium"></gu-vertical-space>
          <gu-paragraph-text
            class="character-textAllignment"
            fillcolor="${this.textColor}"
            kind="${this.textKind}"
            .responsiveKind=${this.textResponsiveKind}
          >
            ${this.text}
          </gu-paragraph-text>
        </div>
      </div>
    `
        }
    };
    N = (0, a.__decorate)([(0, t.M)("gu-card-character")], N);
    var F = s(7302), c = s(49219);
    const _ = z => `https://images.godsunchained.com/cardpack-images--${z}`, E = z => "undefined" === z || !z;
    let te = class extends i.oi {
        constructor() {
            super(...arguments), this.type = "marketing", this.responsiveSrcsetSizes = `${c.imageQualities.normal}px`
        }

        static get styles() {
            return i.iv`
      :host {
        display: block;
        width: 100%;
      }

      .picture {
        display: block;
        width: 100%;
        padding-bottom: 100%;
        position: relative;
      }

      .picture--marketing {
        padding-bottom: 128%;
      }

      .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        transition: opacity 0.2s ease-in-out;

        -webkit-touch-callout: none;
        -webkit-user-drag: none;
      }

      :host(.loading) .image {
        opacity: 0;
      }
    `
        }

        update(g) {
            g.has("god") && (this.sanitizedGod = "all" === this.god || "core" === this.god ? "neutral" : this.god), super.update(g)
        }

        updated(g) {
            super.updated(g), this.image && (this.image.complete ? (this.classList.remove("loading", "error"), this.notifyState("loaded")) : (this.classList.remove("error"), this.classList.add("loading"), this.notifyState("loading"), (0, n.waitForImageToLoad)(this.image).then(() => {
                this.classList.remove("loading", "error"), this.notifyState("loaded")
            }).catch(() => {
                this.classList.remove("loading"), this.classList.add("error"), this.notifyState("error")
            })))
        }

        notifyState(g) {
            this.dispatchEvent(new CustomEvent(g, {detail: this, bubbles: !1, composed: !1}))
        }

        render() {
            const {type: g, set: A, rarity: X, sanitizedGod: pe, responsiveSrcsetSizes: Oe} = this;
            return E(g) || E(A) || E(pe) || E(X) ? i.dy`` : i.dy`
      <picture class="picture picture--${g}">
        <source
          srcset=${Object.keys(c.imageQualities).map(Fe => {
                const Ye = c.imageQualities[Fe];
                return `${_(g)}/${Ye}/${A}--${pe}--${X}.webp ${Ye}w`
            }).join(", ")}
          type="image/webp"
          sizes="${Oe}"
        />
        <source
          srcset=${Object.keys(c.imageQualities).map(Fe => {
                const Ye = c.imageQualities[Fe];
                return `${_(g)}/${Ye}/${A}--${pe}--${X}.png ${Ye}w`
            }).join(",")}
          type="image/png"
          sizes="${Oe}"
        />
        <img
          class="image"
          src="${_(g)}/${c.imageQualities.small}/${A}--${pe}--${X}.png"
          alt="Card Pack Image"
        />
      </picture>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: String})], te.prototype, "set", void 0), (0, a.__decorate)([(0, d.C)({type: String})], te.prototype, "rarity", void 0), (0, a.__decorate)([(0, d.C)({type: String})], te.prototype, "god", void 0), (0, a.__decorate)([(0, d.C)({type: String})], te.prototype, "type", void 0), (0, a.__decorate)([(0, d.C)({type: String})], te.prototype, "responsiveSrcsetSizes", void 0), (0, a.__decorate)([(0, F.S)()], te.prototype, "sanitizedGod", void 0), (0, a.__decorate)([(0, $.I)(".image")], te.prototype, "image", void 0), te = (0, a.__decorate)([(0, t.M)("gu-card-pack-picture")], te);
    const we = (z, g) => `https://card.godsunchained.com/?id=${z}&q=${g}`;
    let Ne = class extends i.oi {
        constructor() {
            super(...arguments), this.quality = 1, this.protoId = 1, this.responsiveSrcsetSizes = `${c.imageQualities.normal}px`, this.showLoadingState = !1
        }

        updated(g) {
            super.updated(g), (g.has("protoId") || g.has("quality")) && (this.classList.add("loading"), (0, n.waitForImageToLoad)(this.image).then(() => this.classList.remove("loading")))
        }

        render() {
            return i.dy`
      <picture class="picture">
        <source
          srcset=${Object.keys(c.imageQualities).map(g => {
                const A = c.imageQualities[g];
                return `${we(this.protoId, this.quality)}&w=${A} ${A}w`
            }).join(", ")}
          type="image/webp"
          sizes="${this.responsiveSrcsetSizes}"
        />
        <source
          srcset=${Object.keys(c.imageQualities).map(g => {
                const A = c.imageQualities[g];
                return `${we(this.protoId, this.quality)}&w=${A}&png=true ${A}w`
            }).join(", ")}
          type="image/png"
          sizes="${this.responsiveSrcsetSizes}"
        />
        <img
          class="image"
          src="${we(this.protoId, this.quality)}&w=${c.imageQualities.small}&png=true"
          alt="Card Pack Image"
        />
      </picture>
      <gu-icon iconLigature="action_hidePassword" class="loadingIcon"></gu-icon>
    `
        }
    };
    Ne.styles = i.iv`
    :host {
      position: relative;
      display: block;
      width: 100%;
    }

    :host(.loading) .image {
      opacity: 0.9;
    }

    :host(.loading) .loadingIcon {
      opacity: 0.9;
    }

    .picture {
      display: block;
      width: 100%;
      padding-bottom: 134.75%; /* ratio of card images is: 1.347583643122677 */
      position: relative;
    }

    .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .loadingIcon {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
      color: ${(0, e.asCssProp)(r.colors.light[100])};
      opacity: 0;
    }
  `, (0, a.__decorate)([(0, d.C)()], Ne.prototype, "quality", void 0), (0, a.__decorate)([(0, d.C)()], Ne.prototype, "protoId", void 0), (0, a.__decorate)([(0, F.S)()], Ne.prototype, "responsiveSrcsetSizes", void 0), (0, a.__decorate)([(0, F.S)()], Ne.prototype, "showLoadingState", void 0), (0, a.__decorate)([(0, $.I)("img.image")], Ne.prototype, "image", void 0), Ne = (0, a.__decorate)([(0, t.M)("gu-card-picture")], Ne);
    var mt = s(92436), It = s(71459), Dt = s.n(It), Qe = s(49749), lt = s(63082), ps = s.n(lt);
    const ze_ALL = "slidesListing__slide", ze_CURRENT = "slidesListing__slide--currentSlide", gs = new mt.do(z => {
        z.forEach(g => {
            g.target.handleResize()
        })
    });
    let hs = class extends i.oi {
        constructor() {
            super(...arguments), this.slidesPerView = 1, this.spaceBetween = 0, this.centeredSlides = !1, this.responsiveBreakpoints = [], this.state = {
                leftLocked: !1,
                rightLocked: !1,
                translateRatio: 1,
                slidesPerView: 1,
                spaceBetween: 0,
                specialRemainderSlideActive: !1,
                lockTranslateX: null,
                hasRemainderSlide: !1,
                translateX: 0,
                startTranslateX: 0,
                currentSlideIndexes: [],
                totalSlidesCount: 0,
                centeredSlides: !1
            }, this.dimensions = {
                width: 0,
                height: 0,
                slideWidth: 0,
                totalWidth: 0,
                slideCenteringSideMargin: 0,
                left: 0,
                top: 0
            }, this.debouncedResize = ps()(() => {
                this.layoutSlides(), this.updatePaneClasses(), this.reset()
            }, 500)
        }

        static get styles() {
            return i.iv`
      ${(0, e.asCssProp)((0, e.setBoxSizing)())}

      :host {
        display: block;
        position: relative;
        overflow: hidden;
      }

      .slidesListing {
        display: flex;
        align-items: flex-start;
        height: 100%;
        overflow: hidden;
        position: relative;
        transition: height ${250}ms ease-in-out;
      }

      ::slotted(.slidesListing__slide) {
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
      }

      ::slotted(.slideListing__slide--currentSlide) {
        z-index: 1;
      }
    `
        }

        static get properties() {
            return {
                slidesPerView: {type: Number},
                spaceBetween: {type: Number},
                centeredSlides: {type: Boolean},
                responsiveBreakpoints: {type: Array}
            }
        }

        firstUpdated() {
            gs.observe(this), this.slidesListingDom = this.shadowRoot.querySelector(".slidesListing"), this.gestureControl = new (Dt())(this, {
                sensitivity: 0,
                swipeVelocity: 60,
                passive: !1,
                capture: !0,
                startDirectionLoopCount: 1
            }), this.gestureControl.on("pan.prestart", g => {
                g.sourceEvent instanceof MouseEvent && g.sourceEvent.preventDefault()
            }), this.gestureControl.on("pan.start", g => this.onPanStart(g)), this.gestureControl.on("pan.all", g => this.onPan(g)), this.gestureControl.on("pan.end", g => this.onPanEnd(g)), this.storeSlideDoms(), this.handleResize(), this.updatePaneClasses()
        }

        disconnectedCallback() {
            this.gestureControl.destroy(), gs.unobserve(this), super.disconnectedCallback()
        }

        get onLastSlide() {
            const {state: {currentSlideIndexes: g}} = this;
            return this.state.centeredSlides ? g[g.length - 1] >= this.state.totalSlidesCount : g[g.length - 1] >= this.state.totalSlidesCount - 1
        }

        get onFirstSlide() {
            return 0 === this.state.currentSlideIndexes[0]
        }

        get isMultiSlide() {
            return this.state.slidesPerView > 1
        }

        get hasRemainderSlide() {
            return this.state.slidesPerView - Math.floor(this.state.slidesPerView) != 0
        }

        layoutSlides() {
            this.slidesListingDom.style.width = `${this.dimensions.totalWidth + 2 * this.dimensions.slideCenteringSideMargin}px`, Qe.p8.set(this.slideDoms, {
                width: this.dimensions.slideWidth,
                marginLeft: g => this.state.centeredSlides && 0 === g ? this.dimensions.slideCenteringSideMargin : 0,
                marginRight: g => g === this.state.totalSlidesCount - 1 ? this.dimensions.slideCenteringSideMargin : this.state.spaceBetween
            })
        }

        onPanStart(g) {
            this.slidesListingDom.style.cursor = "grabbing", this.direction = null, this.state.startTranslateX = 0 === this.state.currentSlideIndexes[0] ? 0 : this.state.translateX, this.state.translateX = 0, this.state.rightLocked = !1, this.state.leftLocked = !1, this.setXTrans("left", 0)
        }

        onPan(g) {
            this.setXTrans(g.deltaX < 0 ? "left" : "right", g.deltaX)
        }

        setXTrans(g, A) {
            this.direction = g;
            let X = 1;
            const pe = A * X, Oe = this.state.startTranslateX + pe;
            "right" === g && Oe >= 0 ? this.state.rightLocked || (this.state.lockTranslateX = pe, this.state.rightLocked = !0) : this.state.rightLocked = !1, "left" === g && this.dimensions.totalWidth - this.dimensions.width + Oe + 2 * this.dimensions.slideCenteringSideMargin <= 0 ? this.state.leftLocked || (this.state.lockTranslateX = pe, this.state.leftLocked = !0) : this.state.leftLocked = !1, X = this.state.leftLocked || this.state.rightLocked ? .1 : 1;
            let Ye = this.state.startTranslateX + pe;
            (this.state.rightLocked || this.state.leftLocked) && (Ye = this.state.startTranslateX + this.state.lockTranslateX + (A - this.state.lockTranslateX) * X), this.state.translateX = Ye, this.drawFrame()
        }

        onPanEnd(g) {
            console.log("!!!!!!!! PAN END"), this.slidesListingDom.style.cursor = null;
            const A = Math.abs(this.state.translateX - this.state.startTranslateX),
                X = this.state.slidesPerView > 1 ? .8 : .5;
            let pe = Math.abs(A) / (this.dimensions.slideWidth * X);
            return !this.state.centeredSlides && !this.onLastSlide && Math.abs(this.state.translateX - this.dimensions.width) >= this.dimensions.totalWidth ? this.nextSlides(null, [this.state.totalSlidesCount - 2, this.state.totalSlidesCount - 1, this.state.totalSlidesCount]) : (!this.state.centeredSlides && this.onLastSlide && this.state.hasRemainderSlide && (pe = pe >= .5 ? 1 : pe), Math.floor(pe) >= 1 ? this.state.translateX < this.state.startTranslateX ? this.nextSlides(Math.floor(pe)) : this.prevSlides(Math.floor(pe)) : g.isSwipe ? "right" === g.swipeDirection ? this.prevSlides(1) : "left" === g.swipeDirection ? this.nextSlides(1) : null : this.reset())
        }

        drawFrame() {
            this.resetAnimation && this.resetAnimation.kill(), Qe.p8.set(this.slidesListingDom, {x: this.state.translateX})
        }

        onSlotChange(g) {
            this.storeSlideDoms(), this.updatePaneClasses(), this.setCarouselHeight()
        }

        storeSlideDoms() {
            const g = this.shadowRoot.getElementById("slidesSlot");
            this.slideDoms = g.assignedElements(), this.state.totalSlidesCount = this.slideDoms.length
        }

        updatePaneClasses() {
            this.slideDoms.forEach((g, A) => {
                g.classList.remove(ze_ALL, ze_CURRENT), g.classList.add(ze_ALL), -1 !== this.state.currentSlideIndexes.indexOf(A) && g.classList.add(ze_CURRENT)
            })
        }

        getTransToLastSlide() {
            return -1 * (this.dimensions.totalWidth - this.dimensions.width + 2 * this.dimensions.slideCenteringSideMargin)
        }

        getTransToFirstSlide() {
            const g = this.state.currentSlideIndexes[0];
            return -1 * (g * this.dimensions.slideWidth + this.state.spaceBetween * g)
        }

        reset({duration: g = .25, specialResetForEndOfSlides: A = !1} = {}) {
            A && (this.state.specialRemainderSlideActive = A);
            let X = this.state.specialRemainderSlideActive ? this.getTransToLastSlide() : this.getTransToFirstSlide();
            this.state.centeredSlides && this.onLastSlide && (X = this.getTransToLastSlide()), X !== this.state.translateX && (this.state.translateX = X, this.resetAnimation = Qe.p8.to(this.slidesListingDom, {
                duration: g,
                x: this.state.translateX,
                ease: "power2.inOut"
            })), this.setCarouselHeight()
        }

        setCarouselHeight() {
            if (this.state.centeredSlides) return !1;
            const g = this.getMaxCurrentSlideHeight();
            this.slidesListingDom.style.height = `${g}px`
        }

        getMaxCurrentSlideHeight() {
            return this.state.currentSlideIndexes.reduce((A, X) => {
                const pe = this.slideDoms[X];
                return A < pe.offsetHeight ? pe.offsetHeight : A
            }, 0)
        }

        emitSlideChange(g) {
            let A = this.state.currentSlideIndexes;
            this.state.centeredSlides && (A = A.map(this.onFirstSlide ? (X, pe) => 0 === pe ? null : X - 1 : this.onLastSlide ? (X, pe) => pe === A.length - 1 ? null : X : (X, pe) => X - 1)), this.dispatchEvent(new CustomEvent("onSlideChange", {
                detail: {
                    direction: g,
                    currentActiveSlides: A,
                    atEnd: this.onLastSlide,
                    atStart: this.onFirstSlide
                }
            }))
        }

        incrementCurrentIndexes(g, A) {
            this.state.currentSlideIndexes = g || this.state.currentSlideIndexes.map(X => null === X ? 0 : X + A)
        }

        assignResponsiveVariables(g) {
            const A = this.responsiveBreakpoints.filter(X => {
                const pe = parseInt(ne.breakpointSizeMapping[X.minWidth], 10);
                return g >= pe
            }).sort((X, pe) => {
                const Oe = parseInt(ne.breakpointSizeMapping[X.minWidth], 10);
                return parseInt(ne.breakpointSizeMapping[pe.minWidth], 10) - Oe
            })[0];
            if (A) {
                const {slidesPerView: X, spaceBetween: pe, minWidth: Oe} = A,
                    Fe = parseInt(ne.breakpointSizeMapping[Oe], 10);
                g >= Fe && ("number" == typeof X && (this.state.slidesPerView = X), "number" == typeof pe && (this.state.spaceBetween = pe))
            } else this.state.slidesPerView = this.slidesPerView, this.state.spaceBetween = this.spaceBetween;
            1 === this.state.slidesPerView ? (this.state.spaceBetween = 0, this.state.centeredSlides = !1) : this.state.centeredSlides = this.centeredSlides, this.state.currentSlideIndexes.length !== Math.ceil(this.state.slidesPerView) && (this.state.currentSlideIndexes = Array(Math.ceil(this.state.slidesPerView)).fill(0).map((X, pe) => pe))
        }

        nextSlides(g = 1, A) {
            if (this.onLastSlide) return A && this.incrementCurrentIndexes(A), this.reset({specialResetForEndOfSlides: !0});
            this.incrementCurrentIndexes(A, g), this.state.translateX = this.state.startTranslateX + (this.dimensions.slideWidth + this.state.spaceBetween) * g * -1, Qe.p8.to(this.slidesListingDom, {
                duration: .25,
                x: this.state.translateX,
                ease: "power2.inOut",
                onComplete: () => {
                    this.reset(), this.updatePaneClasses(), this.emitSlideChange(this.direction)
                }
            })
        }

        prevSlides(g = 1, A) {
            if (this.onFirstSlide || this.state.specialRemainderSlideActive) return this.state.specialRemainderSlideActive = !1, this.reset();
            this.incrementCurrentIndexes(A, -1 * g), this.state.translateX = this.state.startTranslateX + (this.dimensions.slideWidth + this.state.spaceBetween) * g, Qe.p8.to(this.slidesListingDom, {
                duration: .25,
                x: this.state.translateX,
                ease: "power2.inOut",
                onComplete: () => {
                    this.reset(), this.updatePaneClasses(), this.emitSlideChange(this.direction)
                }
            })
        }

        gotoSlide(g) {
            if (g < 0 || g > this.state.totalSlidesCount - 1 || this.state.centeredSlides) return console.error("Error! Application requested a bad slide index:", g), !1;
            this.state.currentSlideIndexes = this.state.currentSlideIndexes.map(() => g).map((A, X) => A + X), this.reset(), this.emitSlideChange()
        }

        handleResize() {
            const {width: g, height: A, left: X, top: pe} = this.getBoundingClientRect();
            this.assignResponsiveVariables(g);
            const Oe = Math.floor(g - this.state.spaceBetween * (this.state.slidesPerView - 1)),
                Fe = Math.floor(Oe / this.state.slidesPerView),
                Ye = Math.floor(this.state.totalSlidesCount * Fe + this.state.spaceBetween * (this.state.totalSlidesCount - 1)),
                yt = this.state.centeredSlides ? Math.floor(.5 * (g - Fe)) : 0;
            this.dimensions = {
                width: g,
                height: A,
                slideWidth: Fe,
                totalWidth: Ye,
                slideCenteringSideMargin: yt,
                left: X,
                top: pe
            }, this.debouncedResize(this.dimensions)
        }

        render() {
            return i.dy`
      <div class="slidesListing">
        <slot id="slidesSlot" @slotchange=${this.onSlotChange}></slot>
      </div>
    `
        }
    };
    hs = (0, a.__decorate)([(0, t.M)("gu-carousel")], hs);
    const ms = [824, 825, 826, 827, 828, 829];
    let Lt = class extends i.oi {
        constructor() {
            super(...arguments), this.videoId = 412954513, this.cropVideoFromTop = !0, this.randomChampionProto = ms[parseInt("" + (Math.random() * ms.length - 1), 10)]
        }

        connectedCallback() {
            super.connectedCallback(), this.style.setProperty("--headerAreaHeight", `${r.measurements.standardHeaderHeight}px`)
        }

        render() {
            return i.dy`
      <gu-background-vimeo-embed
        class="videoBackground"
        cropFromTop=${this.cropVideoFromTop}
        videoId=${this.videoId}
      ></gu-background-vimeo-embed>
      <picture class="fallbackImage">
        <source
          type="image/webp"
          sizes="100vw"
          srcset="
            //images.godsunchained.com/art2/250/${this.randomChampionProto}.webp   250w,
            //images.godsunchained.com/art2/375/${this.randomChampionProto}.webp   375w,
            //images.godsunchained.com/art2/500/${this.randomChampionProto}.webp   500w,
            //images.godsunchained.com/art2/720/${this.randomChampionProto}.webp   720w,
            //images.godsunchained.com/art2/1024/${this.randomChampionProto}.webp 1024w,
            //images.godsunchained.com/art2/1280/${this.randomChampionProto}.webp 1280w
          "
        />
        <source
          type="image/jpg"
          sizes="100vw"
          srcset="
            //images.godsunchained.com/art2/250/${this.randomChampionProto}.jpg    250w,
            //images.godsunchained.com/art2/375/${this.randomChampionProto}.jpg    375w,
            //images.godsunchained.com/art2/500/${this.randomChampionProto}.jpg   500w,
            //images.godsunchained.com/art2/720/${this.randomChampionProto}.jpg   720w,
            //images.godsunchained.com/art2/1024/${this.randomChampionProto}.jpg 1024w,
            //images.godsunchained.com/art2/1280/${this.randomChampionProto}.jpg 1280w
          "
        />
        <img src="//images.godsunchained.com/art2/720/827.jpg" alt="" class="fallbackImage__img" />
      </picture>
      <i class="overlaySkrimGradient"></i>
      <slot name="bannerLogo"></slot>
      <div class="slotContent">
        <slot name="bannerContent"></slot>
      </div>
    `
        }
    };
    Lt.styles = i.iv`
    ${(0, e.asCssProp)((0, e.setBoxSizing)())}

    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      min-height: calc(100vh - var(--headerAreaHeight));
    }

    :host([centerContent='true']) {
      justify-content: center;
    }

    .overlaySkrimGradient {
      content: '';
      position: absolute;
      top: calc((100vh - var(--headerAreaHeight)) / 2);
      height: calc((100vh - var(--headerAreaHeight)) / 2);
      left: 0;
      right: 0;
      background: linear-gradient(
        to top,
        rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.dark[900]))}, 1) 0%,
        rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.dark[900]))}, 0) 100%
      );
    }

    .slotContent {
      position: relative;
    }

    .fallbackImage {
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100vh - var(--headerAreaHeight));
      width: 100%;
    }

    .fallbackImage__img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }

    .videoBackground {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
    }

    @media screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping.small)}) {
      .videoBackground {
        display: block;
      }
      .fallbackImage {
        display: none;
      }
      .overlaySkrimGradient {
        top: auto;
        bottom: 0;
        height: 50%;
      }
    }
  `, (0, a.__decorate)([(0, d.C)()], Lt.prototype, "videoId", void 0), (0, a.__decorate)([(0, d.C)()], Lt.prototype, "cropVideoFromTop", void 0), (0, a.__decorate)([(0, F.S)()], Lt.prototype, "randomChampionProto", void 0), Lt = (0, a.__decorate)([(0, t.M)("gu-hero-video-banner")], Lt), s(4477);
    const _s = new mt.do(z => {
        z.forEach(g => {
            g.target.handleResize()
        })
    });
    let fs = class extends i.oi {
        static get styles() {
            return i.iv`
      :host {
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
      }

      /* Make the iframe keep an aspect ratio, and
      position it in the middle of its parent wrapper*/
      iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: calc(var(--cw) * 100);
        height: calc(var(--cw) * 56.25);
        /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
        min-height: calc(var(--ch) * 100);
        min-width: calc(var(--ch) * 177.77);
        /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
      }

      :host([cropFromTop='true']) iframe {
        top: 0;
        transform: translate(-50%, 0%);
      }
    `
        }

        static get properties() {
            return {videoId: {type: String}, cropFromTop: {type: String}, quality: {type: String}}
        }

        firstUpdated() {
            _s.observe(this), this.handleResize()
        }

        disconnectedCallback() {
            _s.unobserve(this)
        }

        handleResize(g) {
            const Oe = .01 * this.offsetHeight;
            this.style.setProperty("--cw", .01 * this.offsetWidth + "px"), this.style.setProperty("--ch", `${Oe}px`)
        }

        qualityParam() {
            return this.quality ? `&quality=${this.quality}` : ""
        }

        render() {
            return i.dy`
      <iframe
        src=${`https://player.vimeo.com/video/${this.videoId}?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&muted=1${this.qualityParam()}`}
        frameborder="0"
        allow="autoplay; fullscreen"
      ></iframe>
    `
        }
    };
    fs = (0, a.__decorate)([(0, t.M)("gu-background-vimeo-embed")], fs);
    const Ds = ["days", "hours", "minutes", "seconds"];
    let _t = class extends i.oi {
        constructor() {
            super(...arguments), this.darkBackground = !1, this.targetTime = 1755790779, this.showFields = Ds, this.size = "large", this.simpleTextDisplay = !1, this.simpleTextKind = "small", this.padZeroes = !1, this.getDelta = () => new Date(1e3 * this.targetTime).getTime() - (new Date).getTime(), this.getTimeRemaining = () => {
                const g = this.getDelta();
                let A = Math.floor(g / 864e5), X = Math.floor(g % 864e5 / 36e5), pe = Math.floor(g % 36e5 / 6e4),
                    Oe = Math.floor(g % 6e4 / 1e3);
                return A = A < 0 ? 0 : A, X = X < 0 ? 0 : X, pe = pe < 0 ? 0 : pe, Oe = Oe < 0 ? 0 : Oe, {
                    seconds: this.addPadding(`${Oe}`),
                    minutes: this.addPadding(`${pe}`),
                    hours: this.addPadding(`${X}`),
                    days: this.addPadding(`${A}`)
                }
            }, this.addPadding = g => g.length < 2 && this.padZeroes ? `0${g}` : g, this.getHeadingTextSize = g => "small" === g ? "small" : "large", this.getDividerHeadingTextSize = g => "small" === g ? "large" : "x-large", this.getSimpleTextKind = g => "small" === g ? "micro" : "small"
        }

        update(g) {
            g.has("targetTime") && this.initializeCounter(), g.has("simpleTextDisplay") && (this.simpleTextDisplay ? this.classList.add("simpleTextMode") : this.classList.remove("simpleTextMode")), super.update(g)
        }

        disconnectedCallback() {
            clearInterval(this.timer)
        }

        initializeCounter() {
            this.timeLeft = this.getTimeRemaining(), clearInterval(this.timer), this.timer = window.setInterval(() => {
                this.timeLeft = this.getTimeRemaining(), this.getDelta() < 0 && (clearInterval(this.timer), this.dispatchEvent(new CustomEvent("onCountdownComplete")))
            }, 1e3)
        }

        maybePluralise(g, A) {
            return 1 === g ? A.replace(/s$/, "") : A
        }

        render() {
            return void 0 === this.timeLeft ? i.dy`` : ((0, u.updateColoringVariables)({
                component: this,
                fillColor: this.fillColor
            }), this.simpleTextDisplay ? i.dy`
          ${this.showFields.map((g, A) => i.dy` <gu-simple-text
              fillColor=${this.fillColor}
              .kind=${this.simpleTextKind}
              align="center"
            >
              ${this.timeLeft[g]}
              ${A < this.showFields.length - 1 ? i.dy`<span class="simpleTextDivider"> : </span>` : null}
            </gu-simple-text>`)}
        ` : i.dy`
          ${this.showFields.map((g, A) => i.dy`
              <div
                class=${(0, O.$)({digit: !0, [`digit--${this.size}`]: !0, darkBackground: this.darkBackground})}
              >
                <gu-heading-text size=${this.getHeadingTextSize(this.size)}> ${this.timeLeft[g]} </gu-heading-text>
                <gu-simple-text
                  fillColor=${this.fillColor}
                  kind=${this.getSimpleTextKind(this.size)}
                  align="center"
                  class="label"
                  .text=${this.maybePluralise(parseInt(this.timeLeft[g], 10), g)}
                ></gu-simple-text>
              </div>
              ${A < this.showFields.length - 1 ? i.dy`<gu-heading-text
                    class="divider divider--${this.size}"
                    size=${this.getDividerHeadingTextSize(this.size)}
                    >:</gu-heading-text
                  >` : null}
            `)}
        `)
        }
    };
    _t.styles = i.iv`
    ${(0, e.asCssProp)((0, e.setBoxSizing)())}

    :host {
      display: flex;
      align-items: center;
    }

    :host(.simpleTextMode) {
      display: inline-flex;
    }

    .divider {
      color: ${(0, e.asCssProp)(r.colors.gold[500])};
      margin: ${(0, e.asCssProp)((0, n.gridUnits)(-11))} ${(0, e.asCssProp)((0, n.gridUnits)(.5))} 0;
      line-height: 1;
    }

    .divider--small {
      margin: ${(0, e.asCssProp)((0, n.gridUnits)(-9))} ${(0, e.asCssProp)((0, n.gridUnits)(.5))} 0;
    }

    .divider:last-child {
      display: none;
    }
    .label {
      text-transform: uppercase;
    }

    .digit {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .digit > gu-heading-text {
      width: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
      height: ${(0, e.asCssProp)((0, n.gridUnits)(22))};
      line-height: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
      background: url('/assets/images/countdown-timer/ui-embellishments--digit-background.svg') no-repeat;
      background-size: contain;
      background-position: center top;
      text-align: center;
    }

    .digit.darkBackground > gu-heading-text {
      background: url('/assets/images/countdown-timer/ui-embellishments--digit-dark-background.svg') no-repeat;
      background-size: contain;
      background-position: center top;
    }

    .digit--large > gu-heading-text {
      width: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
      height: ${(0, e.asCssProp)((0, n.gridUnits)(22))};
      line-height: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
      margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
    }

    .digit--small > gu-heading-text {
      width: ${(0, e.asCssProp)((0, n.gridUnits)(15))};
      height: ${(0, e.asCssProp)((0, n.gridUnits)(17))};
      line-height: ${(0, e.asCssProp)((0, n.gridUnits)(15))};
      margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(2.5))};
    }
  `, (0, a.__decorate)([(0, d.C)()], _t.prototype, "darkBackground", void 0), (0, a.__decorate)([(0, d.C)()], _t.prototype, "targetTime", void 0), (0, a.__decorate)([(0, d.C)()], _t.prototype, "showFields", void 0), (0, a.__decorate)([(0, d.C)()], _t.prototype, "fillColor", void 0), (0, a.__decorate)([(0, d.C)()], _t.prototype, "size", void 0), (0, a.__decorate)([(0, d.C)()], _t.prototype, "simpleTextDisplay", void 0), (0, a.__decorate)([(0, d.C)()], _t.prototype, "simpleTextKind", void 0), (0, a.__decorate)([(0, d.C)()], _t.prototype, "padZeroes", void 0), (0, a.__decorate)([(0, F.S)()], _t.prototype, "timeLeft", void 0), _t = (0, a.__decorate)([(0, t.M)("gu-countdown-timer")], _t);
    const bs = (0, e.asCssProp)(`${r.measurements.standardBorderSize} solid ${r.colors.gold[500]}`);
    let ys = class extends i.oi {
        constructor() {
            super(...arguments), this.expanded = !1, this.selectedId = "", this.items = [], this.placeholderText = ""
        }

        static get styles() {
            return i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    display: block;
    position: relative;
  }

  .dropdownToggle {
    display: block;
    cursor: pointer;
    border-bottom: ${bs};
    ${(0, e.asCssProp)(r.gradients.textFill(r.gradients.gold.simple("bottom")))};
  }

  .dropdownToggle--expanded {
  }

  .dropdownMenu {
    position: absolute;
    height: 0px;
    right: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${(0, e.asCssProp)(r.animation.standardTransition("height"))}
  }

  .dropdownMenu--expanded {
    height: auto;
    background-color: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    border-right: ${bs};
    padding: ${(0, e.asCssProp)(`${We.dz.gridUnits(2)}`)} 0;
    z-index: 1;
  }

  .dropdownMenu__item {
    padding: ${(0, e.asCssProp)(`${We.dz.gridUnits(2)} ${We.dz.gridUnits(4)};`)};
    cursor: pointer;
    margin: 0;
    white-space: nowrap;
    text-align: right;
  }

  .dropdownMenu__item--selected {
    ${(0, e.asCssProp)(r.gradients.textFill(r.gradients.gold.simple("bottom")))};
  }

  .dropdownMenu__item:hover {
    color: ${(0, e.asCssProp)(r.colors.light[100])};
  }
`
        }

        static get properties() {
            return {
                expanded: {type: Boolean},
                selectedId: {type: String},
                items: {type: Array},
                placeholderText: {type: String}
            }
        }

        toggleMenu(g) {
            g.stopPropagation(), this.expanded = !this.expanded
        }

        get selectedItem() {
            return this.items ? this.items.find(g => g.id === this.selectedId) : null
        }

        selectDropDownItem(g) {
            this.selectedId = g, this.expanded = !1, this.dispatchEvent(new CustomEvent("onSelect", {detail: {item: this.selectedItem}}))
        }

        render() {
            return i.dy`
      <gu-simple-text
        class=${(0, O.$)({dropdownToggle: !0, "dropdownToggle--expanded": this.expanded})}
        @click=${this.toggleMenu}
        kind="tag"
      >
        <gu-vertical-space bottom="x-small">
          ${this.selectedItem ? this.selectedItem.name : this.placeholderText}
        </gu-vertical-space>
      </gu-simple-text>

      <div
        class=${(0, O.$)({dropdownMenu: !0, "dropdownMenu--expanded": this.expanded})}
      >
        ${this.items.map(g => i.dy`
            <gu-simple-text
              class=${(0, O.$)({dropdownMenu__item: !0, "dropdownMenu__item--selected": g.id === this.selectedId})}
              @click=${() => this.selectDropDownItem(g.id)}
              kind="tag"
            >
              ${g.name}
            </gu-simple-text>
          `)}
      </div>
    `
        }
    };
    ys = (0, a.__decorate)([(0, t.M)("gu-dropdown")], ys);
    let Ut = class extends i.oi {
        constructor() {
            super(...arguments), this.time = ""
        }

        static get styles() {
            return i.iv`
      :host {
      }
    `
        }

        start() {
            this.timer || (this.updateTime(), this.timer = setInterval(() => this.updateTime(), 1e3))
        }

        updateTime() {
            const g = new Date, A = Math.floor((this.target.getTime() - g.getTime()) / 1e3), X = [];
            A > 604800 && X.push(this.withUnit(Math.floor(A / 604800), "w")), A > 86400 && X.push(this.withUnit(Math.floor(A % 604800 / 86400), "d")), A > 3600 && X.push(this.withUnit(Math.floor(A % 86400 / 3600), "h")), A > 60 && X.push(this.withUnit(Math.floor(A % 3600 / 60), "min")), X.push(this.withUnit(A % 60, "s")), this.time = X.join(" "), this.requestUpdate("time")
        }

        withUnit(g, A) {
            return `${Math.max(g, 0)}${A}`
        }

        stop() {
            this.timer && clearInterval(this.timer), this.time = "", this.timer = void 0, this.requestUpdate("time")
        }

        render() {
            return this.target ? this.start() : this.stop(), i.dy`${this.time}`
        }
    };
    (0, a.__decorate)([(0, d.C)()], Ut.prototype, "target", void 0), Ut = (0, a.__decorate)([(0, t.M)("gu-textual-timer")], Ut);
    let dt = class extends i.oi {
        constructor() {
            super(...arguments), this.isRunning = !1, this.complete = !1, this.type = "", this.images = {
                "": "",
                tutorial: "/assets/images/game-modes/options/tutorial.png",
                solo: "/assets/images/game-modes/options/solo.png",
                "server-solo": "/assets/images/game-modes/options/solo.png",
                ranked: "/assets/images/game-modes/options/ranked.png",
                sealed: "/assets/images/game-modes/options/ranked.png",
                "direct-challenge": "/assets/images/game-modes/options/direct-challenge.png"
            }
        }

        static get styles() {
            return i.iv`
      :host {
        height: 100%;
        display: flex;
        place-content: stretch stretch;
        overflow: hidden;
        margin: 0 0 0 -8px;
        padding: 0 8px;
      }

      .game-mode-options {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        background: linear-gradient(
            180deg,
            rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 0.7) 0%,
            #0c1620 100%
          ),
          var(--image, ''), ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        background-size: cover;
        background-position: center;
        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.75);
        place-content: stretch stretch;
        opacity: 1;
        transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.42, 0.01, 0.54, 1.31);
        overflow: hidden;
        padding: 12px;
      }

      .game-mode-options--hidden {
        opacity: 0;
        transform: translateX(100%);
      }

      .game-mode-options__actions {
        margin: 16px 0 0 0;
      }

      .game-mode-options__scroll-area {
        flex: 1 1 auto;
        overflow: hidden;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        place-content: stretch flex-start;
        margin: -12px -8px -12px -12px;
        padding: 12px 4px 12px 12px;
        -webkit-mask-image: linear-gradient(0deg, transparent, black 16px, black calc(100% - 16px), transparent);
      }

      ${(0, e.asCssProp)((0, e.styleScrollbars)(".game-mode-options__scroll-area"))}

      .game-mode-options__timer,
      .game-mode-options__description {
        margin: 4px 0;
      }

      .game-mode-options__extra {
        vertical-align: baseline;
        transform: translateY(3px) scale(90%);
      }
    `
        }

        startGame() {
            this.dispatchEvent(new CustomEvent("startGame", {detail: Object.assign({}, this.gameMode)}))
        }

        renderStartButton() {
            return i.dy`
      <gu-button-group class="game-mode-options__actions">
        <gu-hex-button
          data-test-id="launch-game-cta"
          size="large"
          type="special"
          .disabled=${this.isRunning || !this.complete}
          .loading=${this.isRunning}
          @click=${this.startGame}
        >
          Start
        </gu-hex-button>
      </gu-button-group>
    `
        }

        renderActions() {
            return this.renderStartButton()
        }

        renderHeader() {
            var g, A, X, pe;
            return i.dy`
      <gu-vertical-space bottom="small" data-test-id="game-mode-options-header">
        <gu-heading-text
          class="game-mode-options__title"
          size="x-small"
          data-test-id="game-mode-title"
          fillGradient="gradients.gold.simple"
        >
          ${null !== (A = null === (g = this.gameMode) || void 0 === g ? void 0 : g.name) && void 0 !== A ? A : ""} ${this.renderTitleExtras()}
        </gu-heading-text>
        ${this.renderCountdownTimer()}
        <gu-paragraph-text
          class="game-mode-options__description"
          kind="micro"
          fillColor="white"
          data-test-id="game-mode-description"
        >
          ${null !== (pe = null === (X = this.gameMode) || void 0 === X ? void 0 : X.description) && void 0 !== pe ? pe : ""}
        </gu-paragraph-text>
      </gu-vertical-space>
    `
        }

        renderCountdownTimer() {
            var g, A;
            return null !== (A = null === (g = this.gameMode) || void 0 === g ? void 0 : g.expiry) && void 0 !== A && A ? Math.floor((this.gameMode.expiry.getTime() - (new Date).getTime()) / 1e3) > 7776e3 ? i.dy`` : i.dy`
      <gu-paragraph-text
        class="game-mode-options__timer"
        kind="micro"
        fontWeight="bold"
        fillColor="${(0, e.asCssProp)(r.colors.gunmetal[100])}"
      >
        <gu-textual-timer .target=${this.gameMode.expiry} data-test-id="game-mode-timer"></gu-textual-timer>
      </gu-paragraph-text>
    ` : i.dy``
        }

        renderTitleExtras() {
            var g, A;
            return null !== (A = null === (g = this.gameMode) || void 0 === g ? void 0 : g.ranked) && void 0 !== A && A ? i.dy`<gu-icon class="game-mode-options__extra" iconLigature="flux_symbol"></gu-icon>` : i.dy``
        }

        render() {
            var g;
            return this.gameMode && (this.type = this.gameMode.key), this.style.setProperty("--image", `url(${null !== (g = this.images[this.type]) && void 0 !== g ? g : ""})`), i.dy`
      <div
        class=${(0, O.$)({
                "game-mode-options": !0,
                [`game-mode-options--${this.type}`]: "" !== this.type,
                "game-mode-options--hidden": "" === this.type
            })}
      >
        <div class="game-mode-options__scroll-area">
          ${this.renderHeader()}
          <slot class="game-mode-options__body" data-test-id="game-mode-options-body"></slot>
        </div>
        ${this.renderActions()}
      </div>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], dt.prototype, "gameMode", void 0), (0, a.__decorate)([(0, d.C)()], dt.prototype, "isRunning", void 0), (0, a.__decorate)([(0, d.C)()], dt.prototype, "error", void 0), (0, a.__decorate)([(0, d.C)()], dt.prototype, "complete", void 0), dt = (0, a.__decorate)([(0, t.M)("gu-game-mode-panel")], dt);
    let Kt = class extends i.oi {
        constructor() {
            super(...arguments), this.gameModes = [], this.images = {
                tutorial: "/assets/images/game-modes/selector/tutorial.png",
                solo: "/assets/images/game-modes/selector/solo.png",
                "server-solo": "/assets/images/game-modes/selector/solo.png",
                ranked: "/assets/images/game-modes/selector/ranked.png",
                sealed: "/assets/images/game-modes/selector/ranked.png",
                "direct-challenge": "/assets/images/game-modes/selector/direct-challenge.png"
            }
        }

        static get properties() {
            return {gameModes: {type: Array}, active: {type: Object}}
        }

        static get styles() {
            return i.iv`
      :host {
        font-size: 0 !important;
        line-height: 0 !important;
        width: 100%;
        height: 100%;
        display: block;
        overflow-y: scroll;
      }

      :host::-webkit-scrollbar {
        display: none;
      }

      .game-modes {
        display: flex;
        flex-direction: column;
        padding: 4px 12px 4px 8px;
        margin: 0;
        position: relative; // apply stacking context on iOS, thereby avoiding scrolling issues
        z-index: 1; // apply stacking context on iOS, thereby avoiding scrolling issues
      }

      .game-mode-tile {
        display: block;
        background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        border-radius: 4px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
        background-position: center center;
        background-size: cover;
        margin: 4px 0;
        transition: transform 0.5s ease;
        user-select: none;
      }

      .game-mode-tile--active {
        transform: translateX(4px);
      }

      .game-mode-tile--active .game-mode-tile__link {
        border: 1px solid #54bbcd;
        box-shadow: 0 0 8px #8be1e0;
      }

      .game-mode-tile__link {
        display: block;
        border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        background: linear-gradient(270deg, rgba(15, 27, 39, 0.2) 0%, rgba(15, 27, 39, 0.7) 43.4%, #0f1b27 100%);
        padding: 8px 12px 8px 12px;
        border-radius: 4px;
        text-decoration: none;
        height: 54px;
        position: relative;

        -webkit-touch-callout: none;
        -webkit-user-drag: none;
      }

      .game-mode-tile__title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin: 0 0 8px 0;
      }

      .game-mode-tile__title,
      .game-mode-tile__description {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
      }

      .game-mode-tile__description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .game-mode-tile__extra {
        position: absolute;
        font-size: 24px;
        right: 4px;
        top: 4px;
        text-color: black;
        background: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
        border-radius: 4px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
        padding: 2px;
      }

      ${(0, e.asCssProp)((0, e.listReveal)(".game-mode-tile"))}
    `
        }

        onClick(g) {
            this.active = g, this.dispatchEvent(new CustomEvent("gameModeSelection", {
                detail: g,
                bubbles: !0,
                composed: !0
            }))
        }

        renderTile(g) {
            var A;
            return i.dy`
      <li
        class=${(0, O.$)({"game-mode-tile": !0, "game-mode-tile--active": this.active && this.active.key === g.key})}
        style="background-image: url(${null !== (A = this.images[g.key]) && void 0 !== A ? A : this.images.solo});"
      >
        <a
          class="game-mode-tile__link"
          data-test-id="game-mode-tile-link"
          href="javascript:void(0)"
          @click=${() => this.onClick(g)}
        >
          <gu-heading-text class="game-mode-tile__title" size="2x-small" fillColor="${r.colors.light[100]}">
            ${g.name}
          </gu-heading-text>
          <gu-paragraph-text class="game-mode-tile__description" kind="micro" fillColor="${r.colors.light[100]}">
            ${g.description}
          </gu-paragraph-text>
          ${this.renderExtras(g)}
        </a>
      </li>
    `
        }

        renderExtras(g) {
            return g.ranked ? i.dy`
        <div class="game-mode-tile__extra">
          <gu-icon iconLigature="flux_symbol" fillColor="black"></gu-icon>
        </div>
      ` : i.dy``
        }

        render() {
            return i.dy`
      <ul class="game-modes">
        ${this.gameModes.map(g => this.renderTile(g))}
      </ul>
    `
        }
    };
    Kt = (0, a.__decorate)([(0, t.M)("gu-game-modes")], Kt);
    let Wt = class extends i.oi {
        constructor() {
            super(...arguments), this.time = "00:00"
        }

        static get styles() {
            return i.iv`
      :host {
        width: 84px;
      }
    `
        }

        start() {
            this.timer || (this.timer = setInterval(() => {
                const g = new Date, A = Math.floor((g.getTime() - this.started.getTime()) / 1e3),
                    X = ("00" + Math.floor(A / 60)).substr(-2, 2), pe = ("00" + A % 60).substr(-2, 2);
                this.time = `${X}:${pe}`, this.requestUpdate("time")
            }, 1e3))
        }

        stop() {
            this.timer && clearInterval(this.timer), this.time = "00:00", this.timer = void 0, this.requestUpdate("time")
        }

        render() {
            return this.started ? this.start() : this.stop(), i.dy` <gu-heading-text size="medium" data-test-id="queue-time">${this.time}</gu-heading-text> `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: Date})], Wt.prototype, "started", void 0), Wt = (0, a.__decorate)([(0, t.M)("gu-queue-timer")], Wt);
    let zt = class extends i.oi {
        constructor() {
            super(...arguments), this.type = "queue"
        }

        static get properties() {
            return {gameMode: {type: Object}, type: {type: String}, queueStarted: {type: Date}}
        }

        static get styles() {
            return i.iv`
      :host {
        position: absolute;
        width: 100%;
        bottom: 0;
        height: 0;
        transition: transform 1s ease;
        transform: translateY(70px);
      }

      :host(.visible) {
        transform: translateY(0);
      }

      .game-queue-panel__finish {
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        height: 4px;
        width: 100%;
        left: 0;
        background: ${(0, e.asCssProp)(r.gradients.gold.mirror("left"))};
        border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.75);
      }

      .game-queue-panel__content {
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 60px;
        width: 50%;
        display: flex;
        place-content: stretch stretch;
        overflow: hidden;
      }

      .game-queue-panel__content::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        transform: skew(-15deg) translateX(15px);
        display: block;
        height: 60px;
        width: 50vw;
        background: ${(0, e.asCssProp)(r.gradients.gunmetal.simple("left"))};
        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.75);
        z-index: -1;
      }

      .game-queue-panel__left,
      .game-queue-panel__right {
        display: flex;
        place-content: center;
        flex: 1 1 auto;
        width: 40%;
      }

      .game-queue-panel__devider {
        width: 2px;
        flex: 0 0 auto;
        background: linear-gradient(180deg, rgba(198, 160, 82, 0) 0%, #fff2d8 50.99%, rgba(198, 160, 82, 0) 100%);
        margin: 8px 12px 12px 12px;
      }

      .game-queue-panel__left {
        text-align: right;
        padding-left: 28px;
        flex-direction: column;
      }

      .game-queue-panel__right {
        flex-direction: row;
        place-items: center;
        gap: 8px;
        flex-wrap: nowrap;
        flex: 0 1 0;
        padding-right: 8px;
      }

      .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `
        }

        handleCancelButton() {
            this.dispatchEvent(new CustomEvent("cancel", {detail: this.gameMode}))
        }

        render() {
            return this.classList.toggle("visible", !!this.gameMode), i.dy`
      <div
        data-test-id="game-queue-panel-panel"
        class=${(0, O.$)({
                "game-queue-panel__content": !0,
                [`game-queue-panel__content--type-${this.gameMode ? this.gameMode.key : ""}`]: !!this.gameMode
            })}
        data-test-id="game-queue-panel"
      >
        <div class="game-queue-panel__left">
          <gu-simple-text kind="tag" fillColor="${r.colors.gunmetal[100]}" align="right">
            ${this.gameMode ? "In Queue" : " "}
          </gu-simple-text>
          <gu-heading-text class="ellipsis" size="x-small" fillColor="white" align="right">
            ${this.gameMode ? this.gameMode.name : " "}
          </gu-heading-text>
        </div>
        <div class="game-queue-panel__devider"></div>
        <div class="game-queue-panel__right">
          <gu-queue-timer data-test-id="queue-timer" .started=${this.queueStarted}></gu-queue-timer>
          <gu-circular-close-button
            data-test-id="queue-cancel-button"
            @click=${this.handleCancelButton}
          ></gu-circular-close-button>
        </div>
      </div>
      <div class="game-queue-panel__finish"></div>
    `
        }
    };
    zt = (0, a.__decorate)([(0, t.M)("gu-game-queue-panel")], zt);
    let St = class extends i.oi {
        render() {
            return i.dy`<slot></slot>`
        }
    };
    St.styles = i.iv`
    ${(0, e.asCssProp)((0, e.setBoxSizing)())}
    :host {
      height: ${(0, e.asCssProp)(`${r.measurements.standardHeaderAlertBarHeight}px`)};
      position: relative;
      display: flex;
      background: ${(0, e.asCssProp)(r.colors.light[100])};
    }
  `, St = (0, a.__decorate)([(0, t.M)("gu-header-alert-bar")], St);
    const jt = (0, n.gridUnits)(5), Cs = (0, n.gridUnits)(5), ut = (0, n.gridUnits)(8), xs = (0, n.gridUnits)(10),
        Us = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    width: 100%;
    height: ${r.measurements.standardHeaderHeight}px;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0 calc(var(--vw) * 3);
  }

  .userArea {
    position: absolute;
    top: 0;
    right: 0;
  }

  .menuToggleButton {
    cursor: pointer;
    padding: 0 ${(0, e.asCssProp)(jt)};
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(7))};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    ${(0, e.asCssProp)(r.animation.slowTransition("transform"))};
  }

  .menuToggleButton--open {
    transform: rotate(180deg);
  }

  .notificationBubble {
    position: absolute;
    top: ${(0, e.asCssProp)((0, n.gridUnits)(6.7))};
    left: ${(0, e.asCssProp)((0, n.gridUnits)(10.5))};
    opacity: 1;
    ${(0, e.asCssProp)(r.animation.slowTransition("opacity"))};
  }

  .notificationBubble--hide {
    opacity: 0;
  }

  .logoArea {
    display: none;
  }

  @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
    :host {
      justify-content: space-between;
    }

    .notificationBubble {
      display: none;
    }

    .menuToggleButton,
    .logoArea__guWordMark {
      display: none;
    }
  }
`;
    var ft = s(4390), Rs = s(97223);
    const Ps = "TOGGLE_NAV", Ss = "CLOSE_NAV", ks = "TOGGLE_SUB_MENU", Bs = "UPDATE_CURRENT_ROUTE",
        Fs = "CLOSE_ALL_SUB_MENUS", Gs = "TOGGLE_USER_MENU", ws = "CLOSE_USER_MENU", ss = () => ({type: Ss}),
        Bt = z => ({type: Bs, payload: z}),
        Os = {currentRoute: "", navMenuOpen: !1, navSubMenusOpen: {}, userMenuOpen: !1},
        vt = (0, Rs.MT)((z = Os, {type: g, payload: A}) => {
            switch (g) {
                case Ps:
                    return Object.assign(Object.assign({}, z), {navMenuOpen: !z.navMenuOpen, userMenuOpen: !1});
                case Ss:
                    return Object.assign(Object.assign({}, z), {navSubMenusOpen: {}, navMenuOpen: !1});
                case ks:
                    return Object.assign(Object.assign({}, z), {navSubMenusOpen: {[A]: !z.navSubMenusOpen[A]}});
                case Fs:
                    return Object.assign(Object.assign({}, z), {navSubMenusOpen: {}});
                case Bs:
                    return Object.assign(Object.assign({}, z), {currentRoute: A});
                case Gs:
                    return Object.assign(Object.assign({}, z), {userMenuOpen: !z.userMenuOpen, navMenuOpen: !1});
                case ws:
                    return Object.assign(Object.assign({}, z), {userMenuOpen: !1});
                default:
                    return z
            }
        }, Os), os = {
            navigationItems: {type: Array},
            loggedIn: {type: Boolean},
            router: {type: Object},
            ngZone: {type: Object}
        };
    customElements.define("gu-header-bar", (0, Y.x)({
        renderer: function js({navigationItems: z, router: g, ngZone: A}) {
            if (!z) return null;
            const X = (0, l.v9)({store: vt, selector: gt => gt.navMenuOpen}),
                pe = (0, l.I0)(vt), [Oe, Fe] = (0, Pe.eJ)(!1), Ye = () => {
                    pe(ss()), (0, ft.pR)(g, A, z.home.path), this.dispatchEvent(new CustomEvent("onLogoClick"))
                };
            return (0, Pe.d4)(() => {
                Fe((() => {
                    if (!z) return !1;
                    let gt = !1;
                    e:for (const Ct of Object.keys(z)) {
                        const ct = z[Ct];
                        if (ct.children) {
                            for (const Me of Object.keys(ct.children)) if (ct.children[Me].showNotificationBubble) {
                                gt = !0;
                                break e
                            }
                        } else if (ct.showNotificationBubble) {
                            gt = !0;
                            break e
                        }
                    }
                    return gt
                })())
            }, [z]), i.dy`
    <gu-icon
      class="menuToggleButton ${X ? "menuToggleButton--open" : ""}"
      iconLigature=${X ? "close_x" : "hamburger_menu"}
      @click=${gt => {
                gt.cancelBubble = !0, pe({type: Ps})
            }}
      fillColor=${r.colors.gunmetal[100]}
    >
    </gu-icon>
    ${Oe ? i.dy`
          <gu-notification-bubble class="notificationBubble ${X ? "notificationBubble--hide" : ""}">
          </gu-notification-bubble>
        ` : null}
    <div class="logoArea" @click=${() => Ye()}>
      <picture class="logoArea__guIcon">
        <source type="image/webp" srcset="/assets/images/internal-logos/logo--gods-unchained-icon.webp" />
        <source type="image/png" srcset="/assets/images/internal-logos/logo--gods-unchained-icon.png" />
        <img
          class="logoArea__guIcon__img"
          alt="A digital trading card game where you can trade cards you purchase or earn for real-world currency."
          src="/assets/images/internal-logos/logo--gods-unchained-icon.png"
        />
      </picture>

      <gu-heading-text
        class="logoArea__guWordMark"
        size="3x-small"
        .responsiveSize=${[{breakpoint: "2x-small", size: "2x-small"}]}
      >
        Gods Unchained
      </gu-heading-text>
    </div>

    <gu-menu .router=${g} .ngZone=${A} .navigationItems=${z}></gu-menu>

    <div class="userArea">
      <slot name="userArea"></slot>
    </div>
  `
        }, props: {properties: os, styles: Us}
    }));
    var ao = s(92198), lo = s(11735);
    const co = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    position: absolute;
    top: ${r.measurements.standardHeaderHeight}px;
    height: calc(100vh - ${r.measurements.standardHeaderHeight}px);
    width: 100%;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    list-style: none;
    margin: 0;
    padding: 0 ${(0, e.asCssProp)(jt)};
    transform: translateX(-101%);
    ${(0, e.asCssProp)(r.animation.slowTransition("transform"))};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${(0, e.asCssProp)(r.colors.gunmetal[500])} ${(0, e.asCssProp)(r.colors.gunmetal[900])};
  }

  :host::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  :host::-webkit-scrollbar-track {
    background: var(--gu-blue-dark);
  }

  :host::-webkit-scrollbar-thumb {
    background: var(--gu-blue);
    box-shadow: none;
  }

  :host::-webkit-scrollbar-corner {
    background-color: var(--gu-blue-dark);
  }

  :host(.open) {
    transform: translateX(0);
  }

  .menuItem {
    flex-shrink: 0;
    flex-grow: 0;
    cursor: pointer;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(5))} 0;
    border-bottom: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    text-transform: uppercase;
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
  }

  .menuItem__icon {
    display: block;
    margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
    margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(-1))};
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
    line-height: 0;
  }

  .menuItem__longName + .menuItem__shortName {
    display: none;
  }

  .menuItem__caret {
    display: block;
    line-height: 0;
    transform-origin: center;
    ${(0, e.asCssProp)(r.animation.slowTransition("transform"))};
  }

  .menuItem__externalIcon {
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
    margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(-1))};
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
    line-height: 0;
  }

  .menuItem__caret--rotated {
    transform: rotate(180deg);
  }

  .menuItem > * {
    color: var(--gu-blue);
  }

  .menuItem--selected > *:not(gu-sub-menu):not(gu-notification-bubble) {
    background: var(--gu-yellow);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .menuItem--opened > * {
    color: var(--gu-blue);
  }

  gu-notification-bubble {
    position: absolute;
    right: 0;
    top: ${(0, e.asCssProp)((0, n.gridUnits)(7))};
    ${(0, e.asCssProp)(r.animation.slowTransition("opacity"))};
  }

  .menuItem--opened gu-notification-bubble {
    opacity: 0;
  }

  @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
    :host {
      position: relative;
      transform: translateX(0);
      background: transparent;
      flex-direction: row;
      top: auto;
      width: auto;
      height: auto;
      padding: 0;
      overflow: unset;
    }

    .menuItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(6.5))};
      padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(1))};
      border: none;
    }

    .menuItem--hasSubMenu {
      padding-right: ${(0, e.asCssProp)((0, n.gridUnits)(4.5))};
    }

    .menuItem--isExternal {
      padding-right: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
    }

    .menuItem:last-of-type {
      margin: 0;
    }

    .menuItem:hover > * {
      color: var(--gu-yellow);
    }

    .menuItem__icon {
      margin: 0 0 ${(0, e.asCssProp)((0, n.gridUnits)(2))};
    }

    .menuItem__longName {
      display: none;
    }

    .menuItem__longName + .menuItem__shortName {
      display: block;
    }

    .menuItem__caret {
      position: absolute;
      right: 0;
      bottom: ${(0, e.asCssProp)((0, n.gridUnits)(4.5))};
    }

    .menuItem__externalIcon {
      margin: 0;
      position: absolute;
      right: 0;
      bottom: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
      font-size: ${(0, e.asCssProp)((0, n.gridUnits)(2.75))};
    }

    gu-notification-bubble {
      top: ${(0, e.asCssProp)((0, n.gridUnits)(4.5))};
      right: 50%;
      transform: translateX(150%);
    }
  }

  @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-large"])}) {
    .menuItem {
      flex-direction: row;
      padding: 0;
      margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
    }

    .menuItem--hasSubMenu {
      padding-right: 0;
    }

    .menuItem__icon {
      position: static;
      margin: ${(0, e.asCssProp)((0, n.gridUnits)(-.5))} ${(0, e.asCssProp)((0, n.gridUnits)(2))} 0 0;
      top: unset;
      left: unset;
      transform: unset;
    }

    .menuItem--hasSubMenu .menuItem__caret {
      position: relative;
      right: auto;
      bottom: auto;
    }

    .menuItem__longName {
      display: block;
    }

    .menuItem__longName + .menuItem__shortName {
      display: none;
    }

    gu-notification-bubble {
      top: 50%;
      right: auto;
      left: ${(0, e.asCssProp)((0, n.gridUnits)(3.4))};
      transform: translate(0%, -170%);
    }

    .menuItem--hasSubMenu gu-notification-bubble {
      margin-right: 0;
    }
  }
`;
    customElements.define("gu-menu", (0, Y.x)({
        renderer: function uo({navigationItems: z, router: g, ngZone: A}) {
            const X = (0, l.v9)({store: vt, selector: Me => Me.navMenuOpen}),
                pe = (0, l.v9)({store: vt, selector: Me => Me.currentRoute}),
                Oe = (0, l.v9)({store: vt, selector: Me => Me.navSubMenusOpen}), Fe = (0, l.I0)(vt);
            (0, Pe.d4)(() => {
                Fe(Bt(g.url));
                const Me = g.events.pipe((0, ao.h)(Te => Te instanceof lo.m2)).subscribe(Te => {
                    Fe(Bt(Te.url))
                });
                return () => {
                    Me.unsubscribe()
                }
            }, []), (0, Pe.d4)(() => {
                X ? this.classList.add("open") : this.classList.remove("open")
            }, [X]);
            const Ye = Me => {
                this.dispatchEvent(new CustomEvent("onMenuDropDownOpen", {
                    detail: {navItem: Me},
                    bubbles: !0,
                    composed: !0
                })), Fe((z => ({type: ks, payload: z}))(Me.path))
            }, Tt = Me => Me.children ? Ye(Me) : (Me => {
                Me(), Fe(ss())
            })(Me.url ? () => {
                this.dispatchEvent((0, ft.Cs)(Me)), (0, ft.rb)(Me)
            } : () => (0, ft.pR)(g, A, Me.path)), gt = Me => {
                let Te = !1;
                const {children: xt} = Me;
                return ("/" === pe && "home" === Me.shortName || -1 !== pe.indexOf(Me.path) && "home" !== Me.shortName || !!xt && (0, ft.M0)(xt, pe)) && (Te = !0), Te
            }, Ct = Me => !!Oe[Me.path];
            return i.dy`
    ${Object.keys(z).map(Me => {
                const Te = z[Me], xt = !Te.children && !!Te.url;
                return i.dy`
        <div
          class=${(0, O.$)({
                    menuItem: !0,
                    "menuItem--selected": gt(Te),
                    "menuItem--opened": Ct(Te),
                    "menuItem--hasSubMenu": !!Te.children,
                    "menuItem--isExternal": xt
                })}
          @click=${() => Tt(Te)}
        >
          <gu-icon class="menuItem__icon" iconLigature=${Te.icon}> </gu-icon>
          ${Te.longName ? i.dy`
                <gu-simple-text
                  class="menuItem__longName"
                  kind="large"
                  fontWeight="bold"
                  .responsiveKind=${[{breakpoint: "small", kind: "tag"}]}
                >
                  ${Te.longName}
                </gu-simple-text>
              ` : null}

          <gu-simple-text
            class="menuItem__shortName"
            kind="large"
            fontWeight="bold"
            .responsiveKind=${[{breakpoint: "small", kind: "tag"}]}
          >
            ${Te.shortName}
          </gu-simple-text>

          ${xt ? i.dy` <gu-icon class="menuItem__externalIcon" iconLigature="leave_website"></gu-icon> ` : null}
          ${Te.children ? i.dy`
                <gu-icon
                  class=${(0, O.$)({menuItem__caret: !0, "menuItem__caret--rotated": Ct(Te)})}
                  iconLigature="caret_down"
                ></gu-icon>
                <gu-sub-menu
                  .router=${g}
                  .ngZone=${A}
                  .subMenuItems=${Te.children}
                  .topLevelPath=${Te.path}
                ></gu-sub-menu>
              ` : null}
          ${Te.showNotificationBubble || (Me => !!Me.children && Object.keys(Me.children).reduce((Te, xt) => {
                    const Ae = Me.children[xt];
                    return !(!Ae || !Ae.showNotificationBubble) || Te
                }, !1))(Te) ? i.dy` <gu-notification-bubble></gu-notification-bubble> ` : null}
        </div>
      `
            })}
  `
        },
        props: {
            properties: {navigationItems: {type: Array}, router: {type: Object}, ngZone: {type: Object}},
            styles: co
        }
    }));
    const He = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    display: flex;
    flex-flow: column;
    color: ${(0, e.asCssProp)(r.colors.light[500])};
    overflow: hidden;
    max-height: 0px;
    padding-top: 0px;
    opacity: 0;
    width: 100%;
    ${(0, e.asCssProp)(r.animation.slowTransition("opacity"))};
    transition-property: max-height, padding, opacity;
  }

  .subMenu {
    margin: 0;
    padding: 0 0 0 ${(0, e.asCssProp)((0, n.gridUnits)(7))};
    list-style: none;
  }

  .subMenu__item {
    padding-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
    color: var(--gu-blue);
    line-height: 1;
    position: relative;
    white-space: normal;
  }

  .subMenu__item:last-of-type {
    padding-bottom: 0;
  }

  .subMenu__item--selected {
    ${(0, e.asCssProp)(r.gradients.textFill(r.gradients.gold.simple("bottom")))};
  }

  :host(.open) {
    max-height: calc(var(--maxHeight) + ${(0, e.asCssProp)((0, n.gridUnits)(5))});
    opacity: 1;
    padding-top: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
  }

  gu-notification-bubble {
    position: absolute;
    right: 0;
    top: ${(0, e.asCssProp)((0, n.gridUnits)(1.75))};
  }

  .item__externalIcon {
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(4.75))};
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
  }

  @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
    :host {
      position: absolute;
      top: 100%;
      left: ${(0, e.asCssProp)((0, n.gridUnits)(-4))};
      width: ${(0, e.asCssProp)((0, n.gridUnits)(36))};
      padding: 0;
      z-index: 1;
    }

    :host::after {
      content: '';
      display: block;
      height: var(--maxHeight);
      width: 100%;
    }

    :host(.open) {
      max-height: var(--maxHeight);
      padding: 0;
      box-shadow: 0px ${(0, e.asCssProp)((0, n.gridUnits)(.5))} ${(0, e.asCssProp)((0, n.gridUnits)(3))} 0px
        rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.black))}, 0.5);
    }

    .subMenu {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0;
      border-left: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
      border-right: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
      border-top: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
      background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    }

    .subMenu__item,
    .subMenu__item:last-of-type {
      padding: ${(0, e.asCssProp)((0, n.gridUnits)(3))} ${(0, e.asCssProp)((0, n.gridUnits)(4))};
      border-bottom: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    }

    .subMenu__item:hover {
      color: var(--gu-yellow);
    }

    .subMenu__item--selected:hover {
      ${(0, e.asCssProp)(r.gradients.textFill(r.gradients.gold.simple("bottom")))};
    }

    .item__externalIcon {
      font-size: ${(0, e.asCssProp)((0, n.gridUnits)(3.5))};
      margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(.75))};
    }

    gu-notification-bubble {
      right: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.large)}) {
    :host {
      left: 0;
    }
  }
`;
    customElements.define("gu-sub-menu", (0, Y.x)({
        renderer: function go({topLevelPath: z, subMenuItems: g, router: A, ngZone: X}) {
            const pe = (0, l.v9)({store: vt, selector: Ae => Ae.navSubMenusOpen}),
                Oe = (0, l.v9)({store: vt, selector: Ae => Ae.currentRoute}), Fe = (0, l.I0)(vt), Ye = Ae => {
                    Ae.url ? (this.dispatchEvent((0, ft.Cs)(Ae)), (0, ft.rb)(Ae)) : function Je() {
                        Fe(ss()), (0, ft.pR)(A, X, Ae.path)
                    }()
                }, Tt = Ae => Oe.includes(Ae.path), gt = ps()(() => {
                    this.style.setProperty("--maxHeight", `${ct.offsetHeight}px`)
                }, 500), Ct = new mt.do(Ae => {
                    Ae.forEach(() => gt())
                });
            let ct;
            (0, Pe.d4)(() => (ct = this.shadowRoot.querySelector(".subMenu"), Ct.observe(ct), () => Ct.unobserve(ct)), []);
            const Te = () => {
                document.removeEventListener("click", xt)
            }, xt = Ae => {
                Fe({type: Fs})
            };
            return (0, Pe.d4)(() => (pe[z] ? (this.classList.add("open"), setTimeout(() => {
                document.addEventListener("click", xt)
            })) : (this.classList.remove("open"), Te()), () => Te()), [pe]), i.dy`
    <ul class="subMenu">
      ${Object.keys(g).map(Ae => {
                const Je = g[Ae], Oo = {subMenu__item: !0, "subMenu__item--selected": Tt(Je)};
                return i.dy`
          <li
            class=${(0, O.$)(Oo)}
            @click=${So => {
                    So.cancelBubble = !0, Ye(Je)
                }}
          >
            ${Je.longName ? i.dy`
                  <gu-simple-text
                    class="item__longName"
                    kind="large"
                    .responsiveKind=${[{breakpoint: "small", kind: "tag"}]}
                  >
                    ${Je.longName}
                  </gu-simple-text>
                ` : null}

            <gu-simple-text
              class="item__shortName"
              kind="large"
              .responsiveKind=${[{breakpoint: "small", kind: "tag"}]}
            >
              ${Je.shortName}
            </gu-simple-text>

            ${Je.url ? i.dy` <gu-icon class="item__externalIcon" iconLigature="leave_website"></gu-icon> ` : null}
            ${Je.showNotificationBubble ? i.dy` <gu-notification-bubble></gu-notification-bubble> ` : null}
          </li>
        `
            })}
    </ul>
  `
        },
        props: {
            properties: {
                subMenuItems: {type: Array},
                router: {type: Object},
                ngZone: {type: Object},
                topLevelPath: {type: String}
            }, styles: He
        }
    }));
    const Hs = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    display: block;
    height: ${c.standardHeaderHeight}px;
  }

  gu-user-details {
    padding-right: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
  }

  .signedOutArea {
    height: 100%;
    display: flex;
    align-items: center;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(4))} 0;
    padding-right: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
  }

  .signedOutArea__signInButton {
    cursor: pointer;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(2))};
  }

  .signedOutArea__signInButton::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(0, e.asCssProp)((0, n.gridUnits)(-2))};
    height: 100%;
    width: 1px;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }

  .signedOutArea__downloadButton {
    display: none;
  }

  .userDetailsArea {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .userDetailsArea__imgContainer {
    display: none;
  }

  .userDetailsArea__imgContainer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gu-yellow);
    border-radius: 50%;
    z-index: 2;
  }

  .userDetailsArea__imgContainer__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    position: relative;
    z-index: 2;
  }

  .userDetailsArea__imgContainer__bannerSide {
    width: ${(0, e.asCssProp)((0, n.gridUnits)(1.75))};
    height: ${(0, e.asCssProp)((0, n.gridUnits)(4.5))};
    position: absolute;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    z-index: 1;
    bottom: 1px;
  }

  .userDetailsArea__imgContainer__bannerSide--left {
    left: 0;
    transform: translateX(-90%);
  }

  .userDetailsArea__imgContainer__bannerSide--right {
    right: 0;
    transform: translateX(90%);
  }

  .userDetailsArea__imgContainer__levelLabel {
    position: absolute;
    width: 58px;
    bottom: ${(0, e.asCssProp)((0, n.gridUnits)(-.5))};
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(.25))} 0;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
  }

  .userDetailsArea__imgContainer__tinyCorner {
    position: absolute;
    top: 50%;
    left: -3px;
    border: ${(0, e.asCssProp)((0, n.gridUnits)(1.5))} solid transparent;
    border-bottom-color: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    z-index: 1;
  }

  .userDetailsArea__imgContainer__tinyCorner--right {
    left: auto;
    right: -3px;
  }

  gu-user-details {
    display: none;
  }

  gu-notification-bubble {
    position: absolute;
    top: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
    right: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
    ${(0, e.asCssProp)(r.animation.slowTransition("opacity"))};
  }

  .userDetailsArea--open gu-notification-bubble {
    opacity: 0;
  }
  .userDetailsArea--open .userDetailsArea__imgContainer::before {
    transform: rotate(-180deg);
  }

  @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-small"])}) {
    .signedOutArea {
      padding-right: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
    }
    .signedOutArea__signInButton {
      padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(3))};
    }
    .signedOutArea__signInButton::after {
      left: ${(0, e.asCssProp)((0, n.gridUnits)(-3))};
    }
  }

  @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.large)}) {
    gu-user-details {
      display: flex;
      height: 100%;
      align-items: center;
    }

    .signedOutArea__downloadButton {
      display: flex;
      min-width: ${(0, e.asCssProp)((0, n.gridUnits)(45))};
    }

    .signedOutArea__signInButton {
      margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
      padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(5))};
    }

    .signedOutArea__signInButton::after {
      right: 0;
      left: auto;
    }
  }
`;
    customElements.define("gu-header-user-area", (0, Y.x)({
        renderer: function Zs({
                                  menuItems: z,
                                  router: g,
                                  ngZone: A,
                                  userProperties: X,
                                  downloadLauncherUrl: pe,
                                  userStarsTotal: Oe,
                                  userFluxTotal: Fe
                              }) {
            if (!z) return null;
            const Ye = (0, l.v9)({store: vt, selector: Te => Te.userMenuOpen}),
                yt = (0, l.I0)(vt), [Tt, gt] = (0, Pe.eJ)(!1), Me = () => {
                    this.dispatchEvent(new CustomEvent("onUserDetailsClick"))
                };
            return i.dy`
    ${X ? i.dy`
          <div
            class=${(0, O.$)({userDetailsArea: !0, "userDetailsArea--open": Ye})}
          >
            <gu-user-details
              .userProperties=${X}
              .userStarsTotal=${Oe}
              .userFluxTotal=${Fe}
              @click=${Me}
            ></gu-user-details>
            <div class="userDetailsArea__imgContainer" @click=${() => yt({type: Gs})}>
              ${Tt ? i.dy`<gu-notification-bubble highPriority="true"></gu-notification-bubble>` : null}
              <img class="userDetailsArea__imgContainer__img" src=${X.image_url} alt="user avatar image" />
              <i class="userDetailsArea__imgContainer__bannerSide userDetailsArea__imgContainer__bannerSide--left"></i>
              <i class="userDetailsArea__imgContainer__bannerSide userDetailsArea__imgContainer__bannerSide--right"></i>
              <i class="userDetailsArea__imgContainer__tinyCorner"></i>
              <i class="userDetailsArea__imgContainer__tinyCorner userDetailsArea__imgContainer__tinyCorner--right"></i>
              <gu-simple-text kind="tag" class="userDetailsArea__imgContainer__levelLabel" align="center">
                LVL${X.level}
              </gu-simple-text>
            </div>
          </div>

          <gu-user-menu
            .userProperties=${X}
            .userStarsTotal=${Oe}
            .userFluxTotal=${Fe}
            .router=${g}
            .ngZone=${A}
            .menuItems=${z}
            @onUserDetailsClick=${Me}
          ></gu-user-menu>
        ` : i.dy`
          <div class="signedOutArea">
            <gu-simple-text kind="tag" @click=${() => {
                this.dispatchEvent(new CustomEvent("onLoginModal"))
            }} class="signedOutArea__signInButton" data-test-id="signinButton">
              sign in
            </gu-simple-text>
            ${pe ? i.dy`
                  <gu-primary-hex-button
                    class="signedOutArea__downloadButton"
                    size="large"
                    type="primary"
                    href=${pe}
                    @click=${() => {
                this.dispatchEvent(new CustomEvent("onRegisterModal"))
            }}
                  >
                    play now
                  </gu-primary-hex-button>
                ` : null}
          </div>
        `}
  `
        },
        props: {
            properties: {
                menuItems: {type: Array},
                router: {type: Object},
                ngZone: {type: Object},
                userProperties: {type: Object},
                downloadLauncherUrl: {type: String},
                userStarsTotal: {type: String},
                userFluxTotal: {type: String}
            }, styles: Hs
        }
    }));
    const Ms = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    position: absolute;
    top: ${r.measurements.standardHeaderHeight}px;
    right: 0;
    width: ${(0, e.asCssProp)((0, n.gridUnits)(65))};
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    list-style: none;
    margin: 0;
    transform: translateX(101%);
    opacity: 0;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    border-left: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    ${(0, e.asCssProp)(r.animation.slowTransition("all"))};
  }

  :host(.open) {
    transform: translateX(0);
    opacity: 1;
  }

  .menuItem {
    cursor: pointer;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(5))} ${(0, e.asCssProp)(jt)};
    border-bottom: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
  }

  .menuItem:hover {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }

  .menuItem__subMenu {
    display: flex;
    align-items: center;
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
    border-left: 2px solid ${(0, e.asCssProp)(r.colors.gunmetal[100])};
  }

  .menuItem__subMenu__item {
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
  }

  gu-notification-bubble {
    position: absolute;
    right: ${(0, e.asCssProp)(jt)};
    top: 50%;
    transform: translateY(-50%);
    ${(0, e.asCssProp)(r.animation.slowTransition("opacity"))};
  }

  gu-user-details {
    border-bottom: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(3.5))} ${(0, e.asCssProp)(jt)};
    cursor: pointer;
  }

  gu-user-details:hover {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }

  @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.large)}) {
    gu-user-details {
      display: none;
    }
  }
`, Vs = new CustomEvent("onLogout", {bubbles: !0, composed: !0}),
        rs = new CustomEvent("onConnectWallet", {bubbles: !0, composed: !0});
    customElements.define("gu-user-menu", (0, Y.x)({
        renderer: function mo({
                                  userProperties: z,
                                  router: g,
                                  ngZone: A,
                                  menuItems: X,
                                  userStarsTotal: pe,
                                  userFluxTotal: Oe
                              }) {
            const Fe = (0, l.v9)({store: vt, selector: Ae => Ae.userMenuOpen}), Ye = (0, l.I0)(vt),
                yt = () => this.dispatchEvent(rs), Tt = () => this.dispatchEvent(Vs), Ct = () => {
                    document.removeEventListener("click", ct)
                }, ct = Ae => {
                    Ye({type: ws})
                };
            return (0, Pe.d4)(() => (Fe ? (this.classList.add("open"), setTimeout(() => {
                document.addEventListener("click", ct)
            })) : (this.classList.remove("open"), Ct()), () => Ct()), [Fe]), i.dy`
    <gu-user-details
      verticalLayout
      .userProperties=${z}
      .userStarsTotal=${pe}
      .userFluxTotal=${Oe}
      @click=${() => {
                this.dispatchEvent(new CustomEvent("onUserDetailsClick"))
            }}
    ></gu-user-details>
    ${Object.keys(X).map(Ae => {
                const Je = X[Ae];
                return Je.visible ? i.dy`
            <div class="menuItem" @click=${() => (Ae => {
                    "Log Out" === Ae.shortName ? Tt() : "Connect Wallet" === Ae.shortName ? yt() : Ae.url ? (0, ft.rb)(Ae) : Ae.path && (0, ft.pR)(g, A, Ae.path)
                })(Je)}>
              <gu-simple-text class="menuItem__shortName" kind="small"> ${Je.shortName} </gu-simple-text>

              ${Je.showNotificationBubble ? i.dy` <gu-notification-bubble highPriority="true"></gu-notification-bubble> ` : null}
              ${Je.children ? i.dy`
                    <div class="menuItem__subMenu">
                      ${Object.keys(Je.children).map(Oo => {
                    const So = Je.children[Oo];
                    return i.dy`
                          <gu-simple-text
                            kind="tag"
                            class="menuItem__subMenu__item"
                            @click=${Ho => ((Ae, Je) => {
                        Ae.stopPropagation(), Je.url ? (0, ft.rb)(Je) : Je.path && (0, ft.pR)(g, A, Je.path)
                    })(Ho, So)}
                            fillColor=${r.colors.gunmetal[100]}
                          >
                            ${So.shortName}
                          </gu-simple-text>
                        `
                })}
                    </div>
                  ` : null}
            </div>
          ` : null
            })}
  `
        },
        props: {
            properties: {
                userProperties: {type: Object},
                userStarsTotal: {type: Number},
                userFluxTotal: {type: Number},
                menuItems: {type: Object},
                router: {type: Object},
                ngZone: {type: Object}
            }, styles: Ms
        }
    }));
    const $s = i.iv`
  :host {
    display: flex;
  }

  .side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .side--left {
    position: relative;
    align-items: stretch;
    white-space: nowrap;
    margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
    padding-right: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
    padding-left: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
  }

  .side--right {
    max-width: 190px;
    flex: 1;
    padding-top: ${(0, e.asCssProp)((0, n.gridUnits)(.25))};
    padding-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(.75))};
  }

  .side--left:hover .side__hoverGradient {
    opacity: 1;
  }

  .side__border {
    position: absolute;
    right: 0;
    top: 25%;
    height: 50%;
    border-right: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }

  .side__hoverGradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, #0f1b27 0%, #1d2f41 51.56%, rgba(61, 90, 116, 0.75) 100%);
    opacity: 0;
    z-index: 0;
    border-radius: 4px;
  }

  .side__part {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .side__part > gu-icon {
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
    margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
  }

  .row {
    display: flex;
    text-align: right;
  }

  .row--top {
    color: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
    align-items: center;
  }

  .row--bottom {
    justify-content: flex-end;
  }

  .row__userName {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .row__rank {
    text-transform: uppercase;
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(2.5))};
    padding-left: ${(0, e.asCssProp)((0, n.gridUnits)(2.5))};
    border-left: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
  }

  :host(.verticalLayout) {
    flex-direction: column;
  }

  :host(.verticalLayout) .side__border {
    display: none;
  }

  :host(.verticalLayout) .side--left {
    order: 2;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
    padding-left: 0;
  }

  :host(.verticalLayout) .side--left:hover .side__hoverGradient {
    opacity: 0;
  }

  :host(.verticalLayout) .side--right {
    max-width: 100%;
    padding: 0;
  }

  :host(.verticalLayout) .side__part:first-child {
    margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(2.5))};
  }

  :host(.verticalLayout) .row {
    text-align: left;
  }

  :host(.verticalLayout) .row--bottom {
    justify-content: flex-start;
  }

  :host(.verticalLayout) .row__userName {
    margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
  }
`, _o = {
        userProperties: {type: Object},
        userStarsTotal: {type: String},
        userFluxTotal: {type: String},
        verticalLayout: {type: Boolean}
    };
    customElements.define("gu-user-details", (0, Y.x)({
        renderer: function Vt({userProperties: z, userStarsTotal: g = "0", userFluxTotal: A = "0", verticalLayout: X}) {
            return (0, Pe.d4)(() => {
                X ? this.classList.add("verticalLayout") : this.classList.remove("verticalLayout")
            }, [X]), i.dy`
    <div class="side side--left">
      <gu-simple-text kind="small" fontWeight="bold" fillColor=${r.colors.gold[300]} class="cls_mask side__part side__part--flux">
        <gu-icon iconLigature="flux_symbol" class="side__part__icon"></gu-icon>
        ${A || "0"} FLUX
      </gu-simple-text>

      <gu-simple-text
        kind="small"
        fontWeight="bold"
        fillColor=${r.colors.apocyan[300]}
        class="cls_mask side__part side__part--stars"
      >
        <gu-icon iconLigature="collectable_stars" class="side__part__icon"></gu-icon>
        ${g || "0"} STARS
      </gu-simple-text>
      <div class="side__hoverGradient"></div>
    </div>
  `
        }, props: {properties: _o, styles: $s}
    }));
    var fo = s(40760);
    s(43337);
    let Qt = class extends fo.o {
        constructor() {
            super(...arguments), this.options = [], this.value = [], this.layout = "vertical"
        }

        static get styles() {
            return i.iv`
      ${super.styles}

      :host {
        display: flex;
        place-content: center space-between;
        margin: 8px 0 16px 0;
        gap: 8px;
      }

      :host([layout='vertical']) {
        flex-direction: column;
      }
    `
        }

        updateValue(g, A) {
            A ? this.value.splice(this.value.push(g)) : this.value.splice(this.value.indexOf(g), 1)
        }

        activate() {
            const g = this.renderRoot.querySelector("input");
            g && g.focus()
        }

        focus() {
            this.activate()
        }

        render() {
            return i.dy`
      ${this.options.map(g => i.dy`
          <label class="checkbox__label">
            <input
              type="checkbox"
              class="checkbox__input"
              @input=${this.getInputHandler(g.value)}
              @change=${this.onChange}
              @click=${this.unfocus}
              .checked=${!!this.value.find(A => A == g.value)}
              .disabled=${this.disabled}
              data-test-id="checkbox-native-element"
            />
            <gu-body-text size="medium" plain="true">${g.label}</gu-body-text>
          </label>
        `)}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], Qt.prototype, "options", void 0), (0, a.__decorate)([(0, d.C)()], Qt.prototype, "value", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], Qt.prototype, "layout", void 0), Qt = (0, a.__decorate)([(0, t.M)("gu-checkbox-group")], Qt), s(22249);
    var vo = s(30252), bo = s(19444), Yt = s(37745);
    let Ht = class extends i.oi {
        constructor() {
            super(...arguments), this.for = "", this.id = `gu-label-${(0, bo.v4)()}`
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        place-content: center flex-start;
        place-items: center flex-start;
        cursor: default;
        pointer-events: all;
      }
    `
        }

        connectedCallback() {
            super.connectedCallback(), this.addEventListener("click", this.onClick), this.associate()
        }

        disconnectedCallback() {
            super.disconnectedCallback(), this.removeEventListener("click", this.onClick)
        }

        associate(g) {
            Promise.resolve().then(() => {
                const A = this.findTarget();
                !A || A === this.target || (this.target && this.target.removeAttribute("aria-labelledby"), A.setAttribute("aria-labelledby", this.id), this.target = A)
            })
        }

        findTarget() {
            return this.for ? this.getRootNode().getElementById(this.for) : this.slotted ? this.slotted.find(g => g instanceof Yt.j) : void 0
        }

        onClick(g) {
            const A = this.target;
            A && g.target !== A && A.activate()
        }

        render() {
            return i.dy`<slot @slotchange=${this.associate} class="label__slot"></slot>`
        }
    };
    (0, a.__decorate)([(0, d.C)()], Ht.prototype, "for", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], Ht.prototype, "id", void 0), (0, a.__decorate)([(0, vo.v)("", !0)], Ht.prototype, "slotted", void 0), Ht = (0, a.__decorate)([(0, t.M)("gu-label")], Ht);
    var Ys = s(90473), ns = s(61462);
    const Js = {hidden: "password", visible: "text"},
        Ts = {visible: "action_showPassword", hidden: "action_hidePassword"};
    let is = class extends Ys.M {
        constructor() {
            super(...arguments), this.mode = "hidden"
        }

        static get styles() {
            return i.iv`
      ${super.styles}

      .input__toggle {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 36px;
        height: 36px;
        outline: none;
        text-decoration: none;
      }

      .input__toggle:focus {
        box-shadow: 0 0 2px ${(0, e.asCssProp)(r.colors.apocyan[300])}, 0 0 8px ${(0, e.asCssProp)(r.colors.apocyan[300])} inset;
      }

      .input__icon--status-initial {
        opacity: 1;
      }

      :host([disabled]) .input__toggle {
        ${(0, e.asCssProp)((0, ns.userSelect)("none"))};
      }
    `
        }

        toggleMode(g) {
            g.stopPropagation(), g.preventDefault(), !this.disabled && (this.mode = "hidden" === this.mode ? "visible" : "hidden", g.detail > 0 && this.input.focus())
        }

        getInputType() {
            return Js[this.mode]
        }

        renderIcon() {
            return i.dy`
      <a
        class="input__toggle"
        href="javascript:void(0)"
        @click=${this.toggleMode}
        @keyup=${g => g.stopPropagation()}
        data-test-id="password-input-visibility-toggle"
      >
        <gu-icon
          class="input__icon input__icon--status-${this.status} input__icon--mode-${this.mode}"
          iconLigature=${Ts[this.mode]}
        ></gu-icon>
      </a>
    `
        }
    };
    (0, a.__decorate)([(0, F.S)()], is.prototype, "mode", void 0), is = (0, a.__decorate)([(0, t.M)("gu-password-input")], is);
    let Jt = class extends Yt.j {
        constructor() {
            super(...arguments), this.options = [], this.size = "normal"
        }

        static get styles() {
            return i.iv`
      ${super.styles}

      :host {
        display: flex;
        place-content: center space-between;
        margin: 8px 0 16px 0;
        gap: 8px;
      }

      .radio-button__input {
        ${(0, e.asCssProp)((0, ns.userSelect)("none"))}
        cursor: pointer;
        display: inline-block;
        width: 20px;
        height: 20px;
        appearance: none;
        border-radius: 50%;
        border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[100])};
        margin: 0 8px 0 0;
        transition: background-size 0.2s ease, border-color 0.2s ease;
        outline: none;
        background: radial-gradient(
            circle at center,
            ${(0, e.asCssProp)(r.colors.apocyan[300])} 50%,
            ${(0, e.asCssProp)(r.colors.gunmetal[900])} 50%
          )
          no-repeat center;
        background-size: 0 0;
      }

      .radio-button__input:focus {
        border-color: ${(0, e.asCssProp)(r.colors.apocyan[300])};
      }

      .radio-button__input:checked,
      :host([size='large']) .radio-button__input:checked {
        border-color: ${(0, e.asCssProp)(r.colors.apocyan[300])};
        background-size: 18px 18px;
      }

      :host([size='large']) .radio-button__input {
        width: 24px;
        height: 24px;
      }

      .radio-button__label {
        display: flex;
        place-content: center stretch;
        place-items: center;
        flex: 1 0 auto;
        color: ${(0, e.asCssProp)(r.colors.light[100])};
      }

      :host([layout='vertical']) {
        flex-direction: column;
      }

      .radio-button__input:focus,
      .radio-button__input:focus-within {
        box-shadow: 0 0 6px ${(0, e.asCssProp)(r.colors.apocyan[300])}, 0 0 2px ${(0, e.asCssProp)(r.colors.apocyan[300])} inset;
      }
    `
        }

        getInputHandler(g) {
            return A => {
                A.stopPropagation(), this.value = g, this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}}))
            }
        }

        onChange(g) {
            g.stopPropagation(), this.dispatchEvent(new CustomEvent("change", {detail: {value: this.value}}))
        }

        activate() {
            let g = this.renderRoot.querySelector("input:checked");
            g || (g = this.renderRoot.querySelector("input")), g.focus()
        }

        focus() {
            this.activate()
        }

        unfocus(g) {
            g.x > 0 && g.y > 0 && g.target.blur()
        }

        render() {
            return i.dy`
      ${this.options.map(g => i.dy`
          <label class="radio-button__label">
            <input
              type="radio"
              class="radio-button__input"
              @input=${this.getInputHandler(g.value)}
              @change=${this.onChange}
              @click=${this.unfocus}
              .checked=${this.value == g.value}
              .disabled=${this.disabled}
              data-test-id="radio-button-native-element"
            />
            <gu-body-text size="medium" plain="true">${g.label}</gu-body-text>
          </label>
        `)}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], Jt.prototype, "options", void 0), (0, a.__decorate)([(0, d.C)()], Jt.prototype, "size", void 0), Jt = (0, a.__decorate)([(0, t.M)("gu-radio-button-group")], Jt);
    let Ft = class extends Yt.j {
        constructor() {
            super(...arguments), this.value = 50, this.min = 0, this.max = 100, this.updateHelper = g => {
                requestAnimationFrame(() => requestAnimationFrame(g))
            }
        }

        static get styles() {
            const g = i.iv`linear-gradient(90deg, #AFFAED 0%, #8BE1E0 50.34%, #54BBCD 100%)`, A = i.iv`
      border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[900])};
      height: 26px;
      width: 8px;
      border-radius: 4px;
      background: ${(0, e.asCssProp)(r.colors.apocyan[100])};
      cursor: pointer;
    `, X = i.iv`
      width: 100%;
      height: 16px;
      cursor: pointer;
      border: 2px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.35);
      border-radius: 4px;
    `, pe = i.iv`
      background: ${g}, ${(0, e.asCssProp)(r.colors.gunmetal[700])};
      background-size: var(--value, 0) 100%;
      background-repeat: no-repeat;
      transition: var(--transition, 'background-size') 0.5s ease;
    `;
            return i.iv`
      ${super.styles}

      :host {
        display: block;
        font-size: 0 !important;
        line-height: 0 !important;
        margin: 8px 0 16px 0;
      }

      .range__input {
        -webkit-appearance: none;
        width: 100%;
        background: transparent;
        outline: none;
        margin: 0;
      }

      .range__input:focus {
        outline: none;
      }

      .range__input::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -7px;
        ${A}
      }

      .range__input::-moz-range-thumb {
        ${A}
      }

      .range__input::-ms-thumb {
        ${A}
      }

      .range__input::-webkit-slider-runnable-track {
        ${X}
        ${pe}
      }

      .range__input::-moz-range-track {
        ${X}
        ${pe}
      }

      .range__input::-ms-track {
        background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        ${X}
      }

      .range__input::-ms-fill-lower {
        background: ${g};
        border: 2px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
      }

      .range__input::-ms-fill-upper {
        background: ${(0, e.asCssProp)(r.colors.gunmetal[700])}
        border: 2px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
      }

      .range__input:focus,
      .range__input:focus-within,
      .range__input:focus::-webkit-slider-thumb,
      .range__input:focus-within::-webkit-slider-thumb {
        box-shadow: 0 0 8px ${(0, e.asCssProp)(r.colors.apocyan[300])};
      }
    `
        }

        updateSelectedRangeHighlight() {
            this.style.setProperty("--value", Math.min(100, Math.max(0, (this.value - this.min) / (this.max - this.min) * 100)) + "%")
        }

        onInput(g) {
            g.stopPropagation();
            const A = g.target;
            void 0 !== A.value && (this.value = parseFloat(A.value), this.updateSelectedRangeHighlight(), this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}})))
        }

        onChange(g) {
            g.stopPropagation(), this.dispatchEvent(new CustomEvent("change", {detail: {value: this.value}}))
        }

        update(g) {
            super.update(g), g.has("value") && this.updateHelper(this.updateSelectedRangeHighlight.bind(this))
        }

        firstUpdated(g) {
            super.firstUpdated(g), this.style.setProperty("--value", "0%"), this.updateHelper = A => A(), this.style.setProperty("--transition", "background-size"), setTimeout(() => {
                this.style.setProperty("--transition", "none")
            }, 500)
        }

        activate() {
            this.input.focus()
        }

        focus() {
            this.input.focus()
        }

        render() {
            return i.dy`
      <input
        type="range"
        class="range__input"
        .value=${this.value}
        min=${this.min}
        max=${this.max}
        @input=${this.onInput}
        @change=${this.onChange}
        .disabled=${this.disabled}
        data-test-id="range-input-native-element"
      />
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], Ft.prototype, "value", void 0), (0, a.__decorate)([(0, d.C)()], Ft.prototype, "min", void 0), (0, a.__decorate)([(0, d.C)()], Ft.prototype, "max", void 0), (0, a.__decorate)([(0, $.I)(".range__input")], Ft.prototype, "input", void 0), Ft = (0, a.__decorate)([(0, t.M)("gu-range-input")], Ft);
    const Xs = i.iv`
  :host {
    display: flex;
    position: relative;
    height: ${(0, e.asCssProp)((0, n.gridUnits)(9))};
    z-index: 1;
    margin: 8px 0 16px 0;
  }

  :host([theme='gunmetal']) {
    --gu-select-background-color: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    --gu-select-border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    --gu-select-menu-webkit-scrollbar-thumb-background-color: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    --gu-select-option-hover-background-color: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }

  :host([theme='white']) {
    --gu-select-background-color: ${(0, e.asCssProp)(r.colors.light[100])};
    --gu-select-border: 2px solid ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-select-menu-webkit-scrollbar-thumb-background-color: ${(0, e.asCssProp)(r.colors.light[500])};
    --gu-select-option-hover-background-color: ${(0, e.asCssProp)(r.colors.light[300])};
  }

  :host([theme='black']) {
    --gu-select-background-color: ${(0, e.asCssProp)(r.colors.dark[900])};
    --gu-select-border: 2px solid ${(0, e.asCssProp)(r.colors.dark[300])};
    --gu-select-menu-webkit-scrollbar-thumb-background-color: ${(0, e.asCssProp)(r.colors.dark[500])};
    --gu-select-option-hover-background-color: ${(0, e.asCssProp)(r.colors.dark[700])};
  }

  .select__container {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: var(--gu-select-background-color);
    border: var(--gu-select-border);
    border-radius: 2px;
    box-sizing: border-box;
    min-height: 36px;
    cursor: pointer;
  }

  :host([stretch]) .select__container {
    width: 100%;
  }

  .select__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: center;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(1.75))};
    height: 20px;
    line-height: 20px;
    outline: none;
    text-decoration: none;
  }

  .select__icon {
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
  }

  .select__menu {
    display: flex;
    flex-direction: column;
    max-height: 200px;
    overflow-y: auto;
    border-top: var(--gu-select-border);
    transition: max-height 0.2s ease;
  }

  .select__menu::-webkit-scrollbar {
    width: 12px;
    border: 2px solid transparent;
  }

  .select__menu::-webkit-scrollbar-thumb {
    background-color: --gu-select-menu-webkit-scrollbar-thumb-background-color;
    border-radius: 6px;
    background-clip: padding-box;
    border: 4px solid rgba(0, 0, 0, 0);
  }

  .select__menu--visibility-hidden {
    border: 0px;
    max-height: 0;
  }

  .select__option {
    width: 100%;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(2))} ${(0, e.asCssProp)((0, n.gridUnits)(2))};
    box-sizing: border-box;
    text-decoration: none;
  }

  .select__option:hover {
    background-color: var(--gu-select-option-hover-background-color);
  }

  .select__option--selected {
    font-weight: bold;
  }

  :host(:focus-within) .select__container {
    border: var(--gu-select-border);
  }

  :host([disabled]) .select__heading {
    ${(0, e.asCssProp)((0, ns.userSelect)("none"))};
  }
`;
    let wt = class extends Yt.j {
        constructor() {
            super(...arguments), this.placeholder = "", this.options = [], this.stretch = !1, this.open = !1
        }

        static get styles() {
            return Xs
        }

        update(g) {
            var A;
            if (g.has("disabled") && this.disabled && (this.open = !1), g.has("options")) {
                const X = this.findSelectedOption();
                this.value = null !== (A = null == X ? void 0 : X.value) && void 0 !== A ? A : void 0
            }
            (g.has("value") || g.has("options")) && this.notify(), super.update(g)
        }

        toggleOpen(g) {
            this.open = !this.disabled && (void 0 !== g ? g : !this.open)
        }

        getToggleIcon() {
            return this.open ? "chevron_up" : "chevron_down"
        }

        renderSelectOptions(g) {
            return i.dy`
      ${this.options.map(A => i.dy`<a
            href="javascript:void(0)"
            @click=${() => this.selectOption(A)}
            class=${(0, O.$)({select__option: !0, "select__option--selected": this.value === A.value})}
            ><gu-body-text
              size="medium"
              fillColor=${g}
              fontWeight=${this.value === A.value ? "bold" : "normal"}
              plain="true"
              >${A.label}</gu-body-text
            >
          </a>`)}
    `
        }

        selectOption(g) {
            this.value = g ? g.value : void 0, this.open = !1
        }

        notify() {
            this.dispatchEvent(new CustomEvent("input", {
                composed: !0,
                bubbles: !0,
                detail: {value: this.value}
            })), this.dispatchEvent(new CustomEvent("change", {composed: !0, bubbles: !0, detail: {value: this.value}}))
        }

        activate() {
            this.link.focus()
        }

        focus() {
            this.link.focus()
        }

        handleKeyPress(g) {
            if (!this.disabled) switch (g.code) {
                case"Enter":
                case"Space":
                    this.toggleOpen();
                    break;
                case"Escape":
                    this.toggleOpen(!1)
            }
        }

        findSelectedOption() {
            return this.options.find(g => g.value === this.value)
        }

        getTextColor() {
            let g;
            switch (this.theme) {
                case"gunmetal":
                default:
                    g = "colors.light.300";
                    break;
                case"white":
                    g = "colors.dark.300";
                    break;
                case"black":
                    g = "colors.light.500"
            }
            return g
        }

        render() {
            const g = this.findSelectedOption(), A = this.getTextColor();
            return i.dy`
      <div class="select__container">
        <a
          href="javascript:void(0)"
          @click=${() => this.toggleOpen()}
          @keyup=${this.handleKeyPress}
          data-test-id="select.heading.anchor"
          class="select__heading"
          tabindex="0"
        >
          <gu-body-text
            size="medium"
            data-test-id="select.heading.text"
            fillColor="${A}"
            plain="true"
            fontWeight="bold"
          >
            ${this.value && g ? g.label : this.placeholder}
          </gu-body-text>
          <gu-icon class="select__icon" iconLigature="${this.getToggleIcon()}" fillColor="${A}"></gu-icon>
        </a>
        <div
          class=${(0, O.$)({select__menu: !0, "select__menu--visibility-hidden": !this.open})}
        >
          ${this.renderSelectOptions(A)}
        </div>
      </div>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], wt.prototype, "theme", void 0), (0, a.__decorate)([(0, d.C)()], wt.prototype, "placeholder", void 0), (0, a.__decorate)([(0, d.C)({type: Array})], wt.prototype, "options", void 0), (0, a.__decorate)([(0, d.C)({
        type: Boolean,
        reflect: !0
    })], wt.prototype, "stretch", void 0), (0, a.__decorate)([(0, F.S)()], wt.prototype, "open", void 0), (0, a.__decorate)([(0, $.I)(".select__heading")], wt.prototype, "link", void 0), wt = (0, a.__decorate)([(0, t.M)("gu-select")], wt);
    let Xt = class extends Yt.j {
        constructor() {
            super(...arguments), this.size = "normal", this.placeholder = ""
        }

        static get styles() {
            return i.iv`
      ${super.styles}

      :host {
        display: flex;
        margin: 8px 0 16px 0;
        position: relative;
      }

      .textarea__input {
        appearance: none;
        border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[100])};
        background: transparent;
        display: inline-block;
        height: 26px;
        border-radius: 2px;
        padding: 4px 8px 4px 8px;
        transition: background-color 0.2s ease, border-color 0.2s ease, padding 0.2s ease;
        flex: 1 1 auto;
        outline: none;
        color: ${(0, e.asCssProp)(r.colors.light[100])};
        font-size: 16px;
        background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
        min-height: 5em;
      }

      .textarea__input::selection {
        background-color: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
        color: ${(0, e.asCssProp)(r.colors.light[100])};
      }

      .textarea__input::placeholder {
        color: ${(0, e.asCssProp)(r.colors.light[700])};
      }

      .textarea__input--status-initial {
        padding-right: 8px;
      }

      :host(:focus-within) .textarea__input {
        border-color: ${(0, e.asCssProp)(r.colors.apocyan[300])};
      }

      .textarea__input--status-invalid,
      :host(:focus-within) .textarea__input--status-invalid {
        border-color: ${(0, e.asCssProp)(r.colors.alert)};
      }

      :host([size='large']) .textarea__input {
        height: 30px;
        font-size: 16px;
        padding: 4px 36px 4px 8px;
      }
    `
        }

        onChange() {
            this.dispatchEvent(new CustomEvent("change", {detail: {value: this.value}}))
        }

        onInput(g) {
            this.value = g.target.value, g.stopPropagation(), this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}}))
        }

        activate() {
            this.input.focus()
        }

        focus() {
            this.input.focus()
        }

        render() {
            var g;
            return i.dy`
      <textarea
        class="textarea__input textarea__input--status-${this.status}"
        @input="${this.onInput}"
        @change=${this.onChange}
        placeholder=${this.placeholder}
        .disabled=${this.disabled}
        data-test-id="textarea-native-element"
        .value=${null !== (g = this.value) && void 0 !== g ? g : ""}
      ></textarea>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], Xt.prototype, "size", void 0), (0, a.__decorate)([(0, d.C)()], Xt.prototype, "placeholder", void 0), (0, a.__decorate)([(0, $.I)(".textarea__input")], Xt.prototype, "input", void 0), Xt = (0, a.__decorate)([(0, t.M)("gu-textarea")], Xt), s(85353);
    const As = (0, n.gridUnits)(.5), k = i.iv`
  :host {
    width: 100%;
    display: flex;
  }

  .innerContainer {
    width: 100%;
    padding-bottom: 140%;
    margin: auto;
    position: relative;
    cursor: pointer;
  }

  .innerContainer__board {
    position: absolute;
    height: 71%;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }

  .innerContainer__trinkets {
    padding-top: ${(0, e.asCssProp)(As)};
    position: absolute;
    bottom: 0;
    left: 0;
    height: 28%;
    width: 100%;
    display: flex;
  }

  .innerContainer__trinkets__trinket,
  .innerContainer__trinkets__emptyTrinket {
    flex: 1;
    overflow: hidden;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    position: relative;
  }

  .innerContainer__trinkets__emptyTrinket {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    color: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
  }

  .innerContainer__trinkets__trinket::after,
  .innerContainer__trinkets__emptyTrinket::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.white))}, 0.15);
  }

  .innerContainer__trinkets__trinket--left {
    margin-right: ${(0, e.asCssProp)(As)};
    order: -1;
  }

  .innerContainer__trinkets__trinket--right {
    order: 2;
  }

  .innerContainer__trinkets__emptyTrinket:first-of-type:not(:last-of-type) {
    margin-right: ${(0, e.asCssProp)(As)};
  }
`;
    let V = class extends i.oi {
        static get styles() {
            return k
        }

        renderIcon() {
            return this.trinkets.length > 0 ? i.dy`` : i.dy`<gu-icon
      iconLigature="empty"
      class="innerContainer__trinkets__emptyTrinket"
      data-test-id="loadout-display-icon"
    ></gu-icon>`
        }

        render() {
            return i.dy`
      <div class="innerContainer">
        <gu-loadout-part
          class="innerContainer__board"
          .board=${this.board}
          ?owned=${!0}
          ?hideCount=${!0}
          ?noAspectRatio=${!0}
          ?hideText=${this.hideText}
          data-test-id="loadout-display-board"
        ></gu-loadout-part>
        <div class="innerContainer__trinkets">
          ${this.trinkets.map(g => i.dy`
              <gu-loadout-part
                class=${(0, O.$)({
                innerContainer__trinkets__trinket: !0,
                "innerContainer__trinkets__trinket--left": 1 === g.slot,
                "innerContainer__trinkets__trinket--right": 2 === g.slot
            })}
                .trinket=${g}
                ?hideText=${!0}
                ?noAspectRatio=${!0}
                ?hideCount=${!0}
                data-test-id="loadout-display-trinket"
              ></gu-loadout-part>
            `)}
          ${this.renderIcon()}
        </div>
      </div>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: Object})], V.prototype, "board", void 0), (0, a.__decorate)([(0, d.C)({type: Array})], V.prototype, "trinkets", void 0), (0, a.__decorate)([(0, d.C)({type: Boolean})], V.prototype, "hideText", void 0), V = (0, a.__decorate)([(0, t.M)("gu-loadout-display")], V), s(90004);
    let R = class extends i.oi {
        constructor() {
            super(...arguments), this.size = 40, this.type = "godsunchained", this.images = {
                godsunchained: "/assets/images/logo--gods-unchained.svg",
                "godsunchained-icon": "/assets/images/internal-logos/logo--gods-unchained-icon.png",
                immutable: "/assets/images/internal-logos/logo--immutable.svg",
                "immutable-icon": "/assets/images/logo--immutable-icon.svg"
            }
        }

        static get properties() {
            return {size: {type: Number}, type: {type: String}}
        }

        static get styles() {
            return i.iv`
      :host {
        font-size: 0 !important;
        line-height: 0 !important;
      }

      .logo {
        max-width: var(--logoSize, 400px);
        width: 100%;

        /* Allow to make image non-interactable with host styles */
        -webkit-touch-callout: inherit;
        -webkit-user-drag: inherit;
      }

      .logo--icon {
        width: var(--logoSize, 40px);
      }
    `
        }

        render() {
            return this.size && this.style.setProperty("--logoSize", `${this.size}px`), i.dy`
      <img class="${this.size < 100 ? "logo--icon" : "logo"}" alt="Gods Unchained Logo" src="${this.images[this.size < 100 ? `${this.type}-icon` : this.type]}" />
    `
        }
    };
    R = (0, a.__decorate)([(0, t.M)("gu-logo")], R);
    const q = z => !z || z.length < 11 ? z : `${z.slice(0, 6)}...${z.slice(z.length - 4)}`;
    let f = class extends i.oi {
        constructor() {
            super(...arguments), this.walletDropdownMenuOptions = [], this.onGuUnlinkClick = (() => {
                this.dispatchEvent(new CustomEvent("onGuUnlinkClick", {
                    composed: !0,
                    bubbles: !0,
                    detail: {address: this.address}
                }))
            }).bind(this), this.onDropdownSelect = (g => {
                g.stopPropagation(), this.dispatchEvent(new CustomEvent("onDropdownSelect", {
                    composed: !0,
                    bubbles: !0,
                    detail: {address: this.address, menuItem: g.detail}
                }))
            }).bind(this)
        }

        static get styles() {
            return i.iv`
      :host {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
        background-color: ${(0, e.asCssProp)(r.colors.light[100])};
        border: ${(0, e.asCssProp)((0, n.gridUnits)(.25))} solid ${(0, e.asCssProp)(r.colors.light[300])};
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
        padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(2))};
      }

      .defaultSticker {
        position: absolute;
        top: 0;
        left: 0;
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} ${(0, e.asCssProp)((0, n.gridUnits)(1.5))};
        background-color: ${(0, e.asCssProp)(r.colors.apocyan[500])};
        border-radius: 0 0 ${(0, e.asCssProp)((0, n.gridUnits)(1))} 0;
      }

      .address__text--regular {
        display: none;
      }

      .address__shortener {
        width: ${(0, e.asCssProp)((0, n.gridUnits)(34))};
      }

      .action {
        border: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} solid ${(0, e.asCssProp)(r.colors.dark[300])};
        border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
        display: flex;
        justify-content: center;
        cursor: pointer;
        height: ${(0, e.asCssProp)((0, n.gridUnits)(8))};
        width: ${(0, e.asCssProp)((0, n.gridUnits)(8))};
        user-select: none;
      }

      .action:hover {
        background: ${(0, e.asCssProp)(r.colors.dark[300])};
      }

      .action:hover .action__icon {
        color: ${(0, e.asCssProp)(r.colors.light[100])};
      }

      .action__icon {
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
      }

      .imxLinked_status {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: default;
        height: ${(0, e.asCssProp)((0, n.gridUnits)(9))};
        margin-left: auto;
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        width: ${(0, e.asCssProp)((0, n.gridUnits)(41.25))};
      }

      .imxLinked_status__tick {
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
        :host {
          padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(6))};
        }
        .address__text--small {
          display: none;
        }
        .address__text--regular {
          display: unset;
        }
        .imxLinked_status {
          margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        }
      }
    `
        }

        render() {
            return i.dy`
      ${this.defaultWalletEnabled && this.defaultWallet ? i.dy` <gu-paragraph-text
            text="Default"
            data-test-id="wallet-display-default-sticker"
            kind="tag"
            class="defaultSticker"
            fillColor="${r.colors.light[100]}"
            align="center"
          >
          </gu-paragraph-text>` : null}

      <gu-paragraph-text
        title=${this.address}
        class="address"
        data-test-id="wallet-display-address"
        fillColor="colors.dark.500"
        kind="small"
        .responsiveKind=${[{breakpoint: "small", kind: "large"}]}
        fontWeight="bold"
        align="left"
      >
        <span class="address__text--regular"> ${this.address} </span>
        <span class="address__text--small"> ${q(this.address)} </span>
        <span></span>
      </gu-paragraph-text>

      ${this.imxLinked ? i.dy`
            <!-- Can't replace this with gu-standard-button as it's non standard -->
            <gu-plain-square-button
              backgroundFillColor="colors.light.300"
              borderColor="colors.light.300"
              fillColor="colors.dark.300"
              icon="immutableX"
              class="imxLinked_status"
              iconColor="colors.dark.300"
              data-test-id="wallet-display-imx-linked-status"
            >
              <gu-icon
                fillColor="colors.apocyan.500"
                iconLigature="checkbox_tick"
                class="imxLinked_status__tick"
              ></gu-icon>
              Linked to
            </gu-plain-square-button>
          ` : i.dy`
            <!-- Can't replace this with gu-standard-button as it's non standard -->
            <gu-plain-square-button
              backgroundFillColor="colors.light.300"
              borderColor="colors.light.300"
              fillColor="colors.light.500"
              class="imxLinked_status"
              data-test-id="wallet-display-imx-linked-status"
            >
              Unlinked
            </gu-plain-square-button>
          `}
      ${this.defaultWalletEnabled ? i.dy`
            <gu-dropdown-menu @onSelect=${this.onDropdownSelect} .items=${this.walletDropdownMenuOptions}>
              <div class="action" slot="dropdownControl">
                <gu-icon
                  class="action__icon"
                  data-test-id="wallet-display-action-icon"
                  fillColor="colors.dark.300"
                  iconLigature="action_kebabMenu"
                ></gu-icon>
              </div>
            </gu-dropdown-menu>
          ` : i.dy`
            <div class="action">
              <gu-icon
                @click=${this.onGuUnlinkClick}
                class="action__icon"
                data-test-id="wallet-display-action-icon"
                fillColor="colors.dark.300"
                iconLigature="action_trash"
              ></gu-icon>
            </div>
          `}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: String})], f.prototype, "address", void 0), (0, a.__decorate)([(0, d.C)({type: Boolean})], f.prototype, "imxLinked", void 0), (0, a.__decorate)([(0, d.C)({type: Boolean})], f.prototype, "defaultWalletEnabled", void 0), (0, a.__decorate)([(0, d.C)({type: Boolean})], f.prototype, "defaultWallet", void 0), (0, a.__decorate)([(0, d.C)({type: Array})], f.prototype, "walletDropdownMenuOptions", void 0), f = (0, a.__decorate)([(0, t.M)("gu-wallet-display")], f);
    let D = class extends i.oi {
        constructor() {
            super(...arguments), this.userWallets = [], this.imxLinkLoading = !1, this.connectedWallet = "", this.connectedWalletGuLinked = !1, this.guLinkLoading = !1, this.walletActionLoading = "", this.defaultWalletEnabled = !1, this.walletDropdownMenuOptions = [], this.showEmptyState = !0, this.showImxLink = !1, this.allImxLinked = !1
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        width: 100%;
        background-color: ${(0, e.asCssProp)(r.colors.light[100])};
        border: ${(0, e.asCssProp)(r.colors.light[500])} solid ${(0, e.asCssProp)((0, n.gridUnits)(.25))};
        border-top: ${(0, e.asCssProp)(r.colors.gold[500])} solid ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(6))} ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
      }

      .emptyState {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
      }

      .emptyState__icon {
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
        margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
      }

      .emptyState__text {
        max-width: 450px;
      }

      .walletsList {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .walletsList__header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .walletsList__header__ctaSection {
        display: flex;
        flex-direction: column;
      }

      .walletsList__header__ctaSection__helpButton {
        width: ${(0, e.asCssProp)((0, n.gridUnits)(34))};
        margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
      }

      .walletsList__header__ctaSection__imxLinkButton {
        width: ${(0, e.asCssProp)((0, n.gridUnits)(56))};
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
      }

      .walletsList__header__text {
        margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
      }

      .walletsList__wallet {
        margin: ${(0, e.asCssProp)((0, n.gridUnits)(1.5))} 0;
      }

      .walletsList__helpText {
      }
      .walletList__addWallet {
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${(0, e.asCssProp)((0, n.gridUnits)(15))};
        margin: ${(0, e.asCssProp)((0, n.gridUnits)(1.5))} 0;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
      }
      .walletList__addWallet--added {
        cursor: default;
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
        :host {
          padding: ${(0, e.asCssProp)((0, n.gridUnits)(10))} ${(0, e.asCssProp)((0, n.gridUnits)(12.5))};
        }
        .walletsList__header {
          flex-direction: row;
        }
        .walletsList__header__ctaSection__imxLinkButton {
          margin-left: auto;
        }
        .walletsList__header__ctaSection {
          flex-direction: row;
        }

        .walletsList__header__ctaSection__helpButton {
          margin-top: 0;
        }
        .walletList__addWallet {
          height: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
        }
      }
    `
        }

        update(g) {
            this.showEmptyState = !(this.userWallets && this.userWallets.length || this.connectedWallet && this.connectedWallet.length), this.showImxLink = this.userWallets && this.userWallets.length > 0, this.allImxLinked = this.userWallets && this.userWallets.every(A => A.imx_linked), super.update(g)
        }

        onImxLinkClick() {
            this.dispatchEvent(new CustomEvent("onImxLinkClick", {composed: !0}))
        }

        onImxLinkHelpClick() {
            this.dispatchEvent(new CustomEvent("onImxLinkHelpClick", {composed: !0}))
        }

        onGuLinkClick() {
            this.dispatchEvent(new CustomEvent("onGuLinkClick", {bubbles: !1}))
        }

        renderDisconnected() {
            return i.dy`
      <gu-vertical-space class="emptyState" both="2x-large">
        <gu-icon class="emptyState__icon" fillColor="colors.dark.500" iconLigature="action_wallet"></gu-icon>
        <gu-paragraph-text align="center" class="emptyState__text" fillColor="colors.dark.300">
          No wallet detected. Connect your web wallet to get started.
        </gu-paragraph-text>
      </gu-vertical-space>
    `
        }

        renderImxLink() {
            return this.showImxLink ? this.allImxLinked ? i.dy`
        <div class="walletsList__header__ctaSection">
          <gu-standard-button
            theme="light"
            icon="immutableX"
            iconPosition="right"
            class="walletsList__header__ctaSection__imxLinkButton"
            type="primary"
            .disabled=${!0}
          >
            All wallets linked to
          </gu-standard-button>
        </div>
      ` : i.dy`
      <div class="walletsList__header__ctaSection">
        <gu-standard-button
          theme="light"
          icon="immutableX"
          iconPosition="right"
          class="walletsList__header__ctaSection__imxLinkButton"
          type="primary"
          @click=${this.onImxLinkClick}
          .loading=${this.imxLinkLoading}
        >
          Link a wallet to
        </gu-standard-button>

        <gu-standard-button
          theme="light"
          class="walletsList__header__ctaSection__helpButton"
          type="secondary"
          @click=${this.onImxLinkHelpClick}
        >
          How to link?
        </gu-standard-button>
      </div>
    ` : i.dy``
        }

        renderWallet() {
            return this.connectedWallet && this.connectedWallet.length ? this.connectedWalletGuLinked ? i.dy`
        <!-- Can't replace this with gu-standard-button as it's non standard -->
        <gu-plain-square-button
          backgroundFillColor="colors.light.100"
          borderColor="colors.light.300"
          fillColor="colors.dark.300"
          iconColor="colors.god.nature.secondary"
          icon="checkbox_tick"
          leftIconPosition="true"
          class="walletList__addWallet walletList__addWallet--added"
        >
          Current wallet added
        </gu-plain-square-button>
      ` : i.dy`
      <!-- Can't replace this with gu-standard-button as it's non standard -->
      <gu-plain-square-button
        backgroundFillColor="colors.light.100"
        borderColor="colors.light.300"
        fillColor="colors.apocyan.500"
        class="walletList__addWallet"
        @click=${this.onGuLinkClick}
        icon="add_item"
        leftIconPosition="true"
        loading=${this.guLinkLoading ? "true" : "false"}
        loadingColor="apocyan"
      >
        Add wallet to GU
      </gu-plain-square-button>
    ` : i.dy``
        }

        render() {
            return this.showEmptyState ? this.renderDisconnected() : i.dy`
      <gu-vertical-space class="walletsList">
        <gu-vertical-space class="walletsList__header" bottom="large">
          <gu-paragraph-text class="walletsList__header__text" fillColor="colors.dark.300">
            Wallets connected to Gods Unchained account
          </gu-paragraph-text>
          ${this.renderImxLink()}
        </gu-vertical-space>
        ${this.userWallets.map(g => this.walletActionLoading === g.address ? i.dy`
              <div class="walletList__addWallet"><gu-rectangular-spinner color="apocyan"></gu-rectangular-spinner></div>
            ` : i.dy` <gu-wallet-display
            address=${g.address}
            .walletDropdownMenuOptions=${this.walletDropdownMenuOptions}
            ?imxLinked="${g.imx_linked}"
            ?defaultWallet="${g.is_default}"
            ?defaultWalletEnabled="${this.defaultWalletEnabled}"
            class="walletsList__wallet"
          ></gu-wallet-display>`)}
        ${this.renderWallet()}
        <gu-vertical-space top="large">
          <gu-paragraph-text align="left" class="walletsList__helpText" fillColor="colors.dark.300">
            If you have any questions, please contact
            <a target="_blank" href="https://support.godsunchained.com">support</a>.
          </gu-paragraph-text>
        </gu-vertical-space>
      </gu-vertical-space>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], D.prototype, "userWallets", void 0), (0, a.__decorate)([(0, d.C)()], D.prototype, "imxLinkLoading", void 0), (0, a.__decorate)([(0, d.C)()], D.prototype, "connectedWallet", void 0), (0, a.__decorate)([(0, d.C)()], D.prototype, "connectedWalletGuLinked", void 0), (0, a.__decorate)([(0, d.C)()], D.prototype, "guLinkLoading", void 0), (0, a.__decorate)([(0, d.C)()], D.prototype, "walletActionLoading", void 0), (0, a.__decorate)([(0, d.C)()], D.prototype, "defaultWalletEnabled", void 0), (0, a.__decorate)([(0, d.C)()], D.prototype, "walletDropdownMenuOptions", void 0), (0, a.__decorate)([(0, F.S)()], D.prototype, "showEmptyState", void 0), (0, a.__decorate)([(0, F.S)()], D.prototype, "showImxLink", void 0), (0, a.__decorate)([(0, F.S)()], D.prototype, "allImxLinked", void 0), D = (0, a.__decorate)([(0, t.M)("gu-wallets-list")], D);
    let m = class extends i.oi {
        constructor() {
            super(...arguments), this.connectedWallet = "", this.webWalletConnecting = !1
        }

        onConnectBrowserWalletClick() {
            this.dispatchEvent(new CustomEvent("onConnectBrowserWalletClick", {bubbles: !1}))
        }

        onHardwareWalletClick() {
            this.dispatchEvent(new CustomEvent("onHardwareWalletClick", {bubbles: !1}))
        }

        onLearnMoreClick() {
            this.dispatchEvent(new CustomEvent("onLearnMoreClick", {bubbles: !1}))
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: ${(0, e.asCssProp)(r.colors.dark[900])};
        border-radius: 4px 4px 0 0;
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(10))} ${(0, e.asCssProp)((0, n.gridUnits)(6))};
        justify-content: space-between;
      }
      .leftSection {
        display: flex;
        flex-direction: column;
        margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
      }
      .rightSection {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .rightSection__button {
        min-width: ${(0, e.asCssProp)((0, n.gridUnits)(50))};
      }
      .rightSection__button--connectedWallet {
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        cursor: default;
      }
      .rightSection__button--connectedWallet__connectedDot {
        width: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        height: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        border-radius: 50%;
        background: ${(0, e.asCssProp)(r.colors.god.nature.secondary)};
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
      }
      .rightSection__button--walletAdded {
        cursor: default;
      }
      .rightSection__button__address {
        width: ${(0, e.asCssProp)((0, n.gridUnits)(30))};
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-small"])}) {
        .rightSection {
          flex-direction: row;
          align-items: center;
        }
        .rightSection__button--connectedWallet {
          margin-bottom: 0;
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
        :host {
          flex-direction: row;
          padding: ${(0, e.asCssProp)((0, n.gridUnits)(10))} ${(0, e.asCssProp)((0, n.gridUnits)(12.5))};
        }

        .leftSection {
          margin-bottom: 0;
        }
      }
    `
        }

        render() {
            return i.dy`
      <gu-vertical-space class="leftSection">
        <gu-heading-text fillGradient="gradients.gold.simple" fillGradientTarget="bottom" size="large">
          WALLETS
        </gu-heading-text>

        <gu-vertical-space class="leftSection__infoCtas">
          <gu-simple-text-button @click=${this.onLearnMoreClick}>
            Learn more about wallet linking
          </gu-simple-text-button>
          |
          <gu-simple-text-button @click=${this.onHardwareWalletClick}> Hardware Wallet? </gu-simple-text-button>
        </gu-vertical-space>
      </gu-vertical-space>
      <gu-vertical-space class="rightSection">
        ${this.connectedWallet ? i.dy`
              <!-- We need a dot icon before we can switch to using standard button -->
              <gu-plain-square-button
                backgroundFillColor="colors.dark.700"
                borderColor="colors.dark.700"
                iconColor="colors.god.nature.secondary"
                fillColor="colors.light.700"
                class="rightSection__button rightSection__button--connectedWallet"
                title=${this.connectedWallet}
              >
                <div class="rightSection__button--connectedWallet__connectedDot"></div>
                Current web wallet: ${q(this.connectedWallet)}
              </gu-plain-square-button>

              <!-- <gu-standard-button
                class="rightSection__button rightSection__button--connectedWallet"
                theme="dark"
                type="subtle"
                title=${this.connectedWallet}
              >
                <div class="rightSection__button--connectedWallet__connectedDot"></div>
                Current web wallet: ${q(this.connectedWallet)}
              </gu-standard-button> -->
            ` : i.dy`
              <gu-standard-button
                class="rightSection__button rightSection__button--connectedWallet"
                theme="dark"
                icon="action_wallet"
                class="rightSection__button"
                @click=${this.onConnectBrowserWalletClick}
                type="primary"
                .loading=${this.webWalletConnecting}
              >
                Connect Web Wallet
              </gu-standard-button>
            `}
      </gu-vertical-space>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], m.prototype, "connectedWallet", void 0), (0, a.__decorate)([(0, d.C)()], m.prototype, "webWalletConnecting", void 0), m = (0, a.__decorate)([(0, t.M)("gu-wallets-header")], m), s(21960);
    const j = `\nlinear-gradient(\n  90deg,\n  rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 1) 0%,\n  rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 0.8) 25%,\n  rgba(0, 0, 0, 0) 50%,\n  rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 0.8) 75%,\n  rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 1) 100%\n)`;
    let re = class extends i.oi {
        static get properties() {
            return {background: {type: String}}
        }

        static get styles() {
            return i.iv`
      ${(0, e.asCssProp)((0, e.setBoxSizing)())}

      :host {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        width: 1200px;
        height: 800px;
        max-height: 85vh;
        border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};

        background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
        background-size: cover;
      }

      :host([background='nature']) {
        background-image: ${(0, e.asCssProp)(j)},
          url('https://images.godsunchained.com/god-art/1024/nature--aeona.webp');
        background-position-y: -238px;
      }

      :host([background='war']) {
        background-image: ${(0, e.asCssProp)(j)},
          url('https://images.godsunchained.com/god-art/1024/war--auros.webp');
        background-position-y: -195px;
      }

      :host([background='magic']) {
        background-image: ${(0, e.asCssProp)(j)},
          url('https://images.godsunchained.com/god-art/1024/magic--elyrian.webp');
        background-position-y: -195px;
      }

      :host([background='death']) {
        background-image: ${(0, e.asCssProp)(j)},
          url('https://images.godsunchained.com/god-art/1024/death--malissus.webp');
        background-position-y: -330px;
      }

      :host([background='light']) {
        background-image: ${(0, e.asCssProp)(j)},
          url('https://images.godsunchained.com/god-art/1024/light--thaeriel.webp');
        background-position-y: -267px;
      }

      :host([background='deception']) {
        background-image: ${(0, e.asCssProp)(j)},
          url('https://images.godsunchained.com/god-art/1024/deception--ludia.webp');
        background-position-y: -336px;
      }

      :host([background='neutral']) {
        background-image: ${(0, e.asCssProp)(j)}, url('/assets/images/misc-art/misc-art--C8-026.webp');
        background-position-y: -18px;
      }

      /* This could be improved by rendering any artId, something to look into later.
        Will be difficult though as each bg image will require a different background-position-y
      */
      :host([background='87055']) {
        background-image: ${(0, e.asCssProp)(j)}, url('https://images.godsunchained.com/art2/1024/87055.webp');
        background-position-y: -180px;
      }

      .closeIcon {
        position: absolute;
        font-size: 24px;
        top: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        right: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        cursor: pointer;
      }
      .topSection {
        position: relative;
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
      }

      .topSection__divider {
        position: absolute;
        bottom: 0;
        width: 100%;
      }

      .bottomSection {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: auto;
        justify-content: center;
      }

      .bottomSection__cta {
        display: flex;
        justify-content: center;
      }

      .bottomSection__content {
        padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(24))};
        overflow-y: auto;
      }

      .bottomSection__background {
        background: #0f1b27;
        opacity: 0.9;
        width: 100%;
        height: 100%;
        position: absolute;
      }

      slot[name='bottomSectionContent']::slotted(*) {
        position: relative;
      }
    `
        }

        closeModal() {
            this.dispatchEvent(new CustomEvent("onCloseSealedDeckModal", {bubbles: !1}))
        }

        render() {
            return this.setAttribute("background", this.background), i.dy`
      <gu-vertical-space class="topSection">
        <gu-icon
          fillColor="colors.apocyan.300"
          iconLigature="close_x"
          class="closeIcon"
          @click=${this.closeModal}
        ></gu-icon>
        <slot name="topSectionSubtitle"></slot>
        <slot name="topSectionTitle"></slot>
        <slot name="topSectionHelptext"></slot>
        <img
          class="topSection__divider"
          src="/assets/images/ui-embellishments/ui--divider-simple-gradient.svg"
          alt="small divider"
        />
      </gu-vertical-space>
      <gu-vertical-space class="bottomSection">
        <div class="bottomSection__background"></div>
        <div class="bottomSection__content">
          <slot name="bottomSectionContent"></slot>
        </div>
        <gu-vertical-space class="bottomSection__cta" bottom="2x-large" top="large">
          <slot name="bottomSectionCta"></slot>
        </gu-vertical-space>
      </gu-vertical-space>
    `
        }
    };
    re = (0, a.__decorate)([(0, t.M)("gu-two-section-modal")], re);
    let Se = class extends i.oi {
        constructor() {
            super(...arguments), this.entries = {}, this.active = [], this.visible = !0, this.type = "main"
        }

        static get styles() {
            return i.iv`
      :host {
        font-size: 0 !important;
        line-height: 0 !important;
        height: 100%;
        display: flex;
        justify-content: flex-end;
      }

      .navigation {
        width: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        place-items: flex-end flex-start;
        justify-content: space-between;
        background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
        border-right: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        overflow: hidden;
        transition: width ease 0.3s;
        margin-left: -1px;
      }

      .navigation__items {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 0 0 auto;
        padding: 0;
        margin: -1px 0;
        align-items: flex-end;
      }

      .navigation__item {
        width: 100%;
        padding: 0;
        margin: 0;
        cursor: pointer;
        border-bottom: 1px solid black;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
      }

      .navigation__item__link {
        display: flex;
        flex-direction: column;
        flex: 0 0 auto;
        justify-content: center;
        text-decoration: none;
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(2))} 0;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        margin: -1px 0;
        box-sizing: border-box;

        -webkit-user-drag: none;
        -webkit-touch-callout: none;
      }

      .navigation--type-main.navigation--visible {
        width: 80px;
      }

      .navigation--type-main .navigation__items {
        width: 80px;
      }

      .navigation--type-main .navigation__item__link {
        color: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
        min-height: ${(0, e.asCssProp)((0, n.gridUnits)(16))};
        align-items: center;
      }

      .navigation--type-sub.navigation--visible {
        width: 130px;
      }

      .navigation--type-sub .navigation__items {
        width: 130px;
      }

      .navigation--type-sub .navigation__item__link {
        color: white;
        min-height: ${(0, e.asCssProp)((0, n.gridUnits)(10))};
        padding: 0 8px;
      }

      .navigation__item__icon {
        display: block;
        margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(7))};
        line-height: 0;
      }

      .navigation__item__name {
        max-width: 100%;
      }

      .navigation__item--active {
        background: linear-gradient(
          90deg,
          ${(0, e.asCssProp)(r.colors.gunmetal[700] + "00")} 0%,
          ${(0, e.asCssProp)(r.colors.gunmetal[700] + "ff")} 100%
        );
      }

      .navigation__item--active .navigation__item__link {
        border-right: 2px solid #c6a052;
      }

      .navigation__item--active .navigation__item__icon,
      .navigation__item--active .navigation__item__name {
        ${(0, e.asCssProp)(r.gradients.textFill(r.gradients.gold.simple("bottom")))};
      }
    `
        }

        onClick(g) {
            this.dispatchEvent(new CustomEvent("navigation", {detail: g, bubbles: !0, composed: !0}))
        }

        renderIcon(g) {
            return g.logo ? i.dy` <gu-logo class="navigation__item__icon" type="${g.logo}" size="28"></gu-logo> ` : g.icon ? i.dy` <gu-icon class="navigation__item__icon" iconLigature=${g.icon}></gu-icon> ` : i.dy``
        }

        renderEntry(g) {
            const A = "main" === this.type ? "micro" : "tag";
            return i.dy`
      <li
        class=${(0, O.$)({
                navigation__item: !0,
                "navigation__item--active": this.active && this.active.indexOf(g.key) > -1
            })}
      >
        <a
          class="navigation__item__link"
          href="javascript:void(0);"
          @click=${() => this.onClick(g)}
          data-test-id="navigation.item.link"
        >
          ${this.renderIcon(g)}

          <gu-simple-text class="navigation__item__name" kind="${A}" fontWeight="bold">
            ${g.name}
          </gu-simple-text>
        </a>
      </li>
    `
        }

        renderGroups(g) {
            return i.dy`
      ${Object.keys(g).map(A => i.dy`
          <ul class="navigation__items navigation__items--${A}">
            ${this.renderEntries(g[A])}
          </ul>
        `)}
    `
        }

        renderEntries(g) {
            return i.dy`
      ${Object.keys(g).map(A => this.renderEntry(Object.assign(Object.assign({}, g[A]), {key: A})))}
    `
        }

        render() {
            return i.dy`
      <nav
        class="${(0, O.$)({navigation: !0, [`navigation--type-${this.type}`]: !0, "navigation--visible": this.visible})}"
      >
        ${this.renderGroups(this.entries)}
        <slot></slot>
      </nav>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], Se.prototype, "entries", void 0), (0, a.__decorate)([(0, d.C)()], Se.prototype, "active", void 0), (0, a.__decorate)([(0, d.C)()], Se.prototype, "visible", void 0), (0, a.__decorate)([(0, d.C)()], Se.prototype, "type", void 0), Se = (0, a.__decorate)([(0, t.M)("gu-navigation")], Se);
    let De = class extends i.oi {
        constructor() {
            super(...arguments), this.highPriority = !1
        }

        static get styles() {
            return i.iv`
      :host {
        display: block;
        width: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        height: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        border-radius: 50%;
        background: ${(0, e.asCssProp)(r.colors.gold[300])};
        box-shadow: 0 0 0 ${(0, e.asCssProp)((0, n.gridUnits)(.5))} ${(0, e.asCssProp)(r.colors.gunmetal[900])};
      }

      :host(.highPriority) {
        background: ${(0, e.asCssProp)(r.colors.god.war.primary)};
      }
    `
        }

        render() {
            return this.highPriority ? this.classList.add("highPriority") : this.classList.remove("highPriority"), i.dy``
        }
    };
    (0, a.__decorate)([(0, d.C)({type: Boolean})], De.prototype, "highPriority", void 0), De = (0, a.__decorate)([(0, t.M)("gu-notification-bubble")], De);
    const Ge = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host([theme='light']) {
    --pageTextColor: ${(0, e.asCssProp)(r.colors.light[900])};
    --activePageTextColor: ${(0, e.asCssProp)(r.colors.light[100])};
    --activePageBackgroundColor: ${(0, e.asCssProp)(r.colors.dark[300])};
  }

  :host([theme='dark']) {
    --pageTextColor: ${(0, e.asCssProp)(r.colors.light[700])};
    --activePageTextColor: ${(0, e.asCssProp)(r.colors.dark[900])};
    --activePageBackgroundColor: ${(0, e.asCssProp)(r.colors.light[300])};
  }

  :host {
    display: flex;
    font-weight: bold;
    font-size: 20px;
    color: var(--pageTextColor);
  }

  .pagination__chevron,
  .pagination__index {
    cursor: pointer;
    padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(3))};
    margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
  }

  .pagination__index.pagination__active-index {
    border-radius: 2px;
    color: var(--activePageTextColor);
    background-color: var(--activePageBackgroundColor);
  }
`;
    let je = class extends i.oi {
        constructor() {
            super(...arguments), this.numberOfPages = 3, this.theme = "light"
        }

        previousPage() {
            this.currentPage > 1 && this.goToPage(this.currentPage - 1)
        }

        nextPage() {
            this.currentPage < this.numberOfPages && this.goToPage(this.currentPage + 1)
        }

        goToPage(g) {
            g !== this.currentPage && this.dispatchGoToPageEvent(g)
        }

        dispatchGoToPageEvent(g) {
            const A = new CustomEvent("go-to-page", {detail: {pageNumber: g}});
            this.dispatchEvent(A)
        }

        render() {
            return i.dy`
      <gu-icon class="pagination__chevron" iconLigature="chevron_left" @click=${this.previousPage}></gu-icon>

      ${new Array(this.numberOfPages).fill("").map((g, A) => i.dy`<span
              class="pagination__index ${A + 1 === this.currentPage ? "pagination__active-index" : ""}"
              @click=${() => this.goToPage(A + 1)}
              >${A + 1}</span
            >`)}

      <gu-icon class="pagination__chevron" iconLigature="chevron_right" @click=${this.nextPage}></gu-icon>
    `
        }
    };
    je.styles = Ge, (0, a.__decorate)([(0, d.C)()], je.prototype, "currentPage", void 0), (0, a.__decorate)([(0, d.C)()], je.prototype, "numberOfPages", void 0), (0, a.__decorate)([(0, d.C)()], je.prototype, "theme", void 0), je = (0, a.__decorate)([(0, t.M)("gu-pagination")], je);
    let nt = class extends i.oi {
        constructor() {
            super(...arguments), this.progress = 0, this.coloring = "apocyan"
        }

        static get styles() {
            return i.iv`
      ${(0, e.asCssProp)((0, e.setBoxSizing)())}

      :host {
        display: block;
        border: solid 1px var(--gu-blue-hover);
        height: 20px;
        padding: 4px;
        position: relative;
        border-radius: 4px;
      }

      :host::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 1.5px;
        height: calc(100% - 2px);
        width: calc(100% - 3px);
      }

      .progress-bar-border {
        position: absolute;
        top: 1px;
        left: 1px;
        bottom: 1px;
        right: 10px;
        ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(10, 10))};
      }

      .progress-bar-border::before {
        content: '';
        display: block;
        height: 100%;
        width: var(--barWidth);
        border-radius: 2px;
      }

      .progress-bar {
        position: absolute;
        top: 1px;
        left: 0;
        bottom: 1px;
        right: 0;
        ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(9, 9, 2))};
      }

      .progress-bar::before {
        content: '';
        display: block;
        height: 100%;
        width: calc(var(--barWidth) - 1px);
        border-radius: 2px;
      }

      :host .progress-bar-border::before {
        background: var(--gu-blue);
      }

      :host .progress-bar::before {
        background: var(--gu-blue);
      }

      :host([size='small']) {
        height: 12px;
        padding: 2px 3px;
      }

      :host([size='small']) .progress-bar-border {
        top: 2px;
        left: 3px;
        bottom: 2px;
        right: 3px;
        ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(4, 4))};
      }

      :host([size='small']) .progress-bar {
        top: 1px;
        left: 0;
        bottom: 1px;
        right: 0;
        ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(3, 3, 2))};
      }

      :host([size='small']) .progress-bar-border::before,
      :host([size='small']) .progress-bar::before {
        border-radius: 1px;
      }
    `
        }

        render() {
            return this.setAttribute("coloring", this.coloring), this.style.setProperty("--barWidth", `${this.progress}%`), i.dy`
      <div class="progress-bar-border">
        <div class="progress-bar" data-progress="${this.progress}" data-test-id="progress-bar"></div>
      </div>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: Number})], nt.prototype, "progress", void 0), (0, a.__decorate)([(0, d.C)({type: String})], nt.prototype, "coloring", void 0), nt = (0, a.__decorate)([(0, t.M)("gu-hex-progress-bar")], nt);
    let Ke = class extends i.oi {
        constructor() {
            super(...arguments), this.progress = 0, this.withLogo = !1
        }

        static get properties() {
            return {progress: {type: Number}, withLogo: {type: Boolean}}
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        width: 100%;
        flex: 1 1 auto;
        align-items: center;
      }

      .progress-bar {
        display: flex;
        border-radius: 5px;
        position: relative;
        background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        height: 10px;
        width: 100%;
      }

      .progress-bar__fill {
        border-radius: 4px;
        height: 8px;
        background: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
        margin: 1px;
        transition: width 500ms linear;
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-large"])}) {
        .box__filling {
          /* Looks better at larger viewports like this. */
          margin: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
          height: calc(100% - ${(0, e.asCssProp)((0, n.gridUnits)(2))});
        }
        .bridge {
          /* width: ${(0, e.asCssProp)((0, n.gridUnits)(4))}; */
        }
      }
    `
        }

        render() {
            return i.dy`
      ${this.withLogo ? i.dy`<gu-logo></gu-logo>` : ""}
      <div class="progress-bar">
        <div class="progress-bar__fill" style="width: ${(0, e.asCssProp)(this.progress.toString() + "%")};"></div>
      </div>
    `
        }
    };
    Ke = (0, a.__decorate)([(0, t.M)("gu-progress-bar")], Ke);

    class ye extends i.oi {
        constructor() {
            super(...arguments), this.active = !1, this.ready = Promise.resolve()
        }

        static get styles() {
            return i.iv`
      :host(:not([active])) {
        opacity: 0;
        display: none;
      }
    `
        }

        prepare() {
            return (0, a.__awaiter)(this, void 0, void 0, function* () {
            })
        }

        wait(g) {
            return new Promise(A => setTimeout(A, g))
        }

        update(g) {
            g.has("active") && this.active && this.execute(), super.update(g)
        }

        execute() {
            return (0, a.__awaiter)(this, void 0, void 0, function* () {
                yield this.ready, yield this.run(), this.notifyCompletion()
            })
        }

        connectedCallback() {
            this.ready = this.prepare(), super.connectedCallback()
        }

        notifyCompletion() {
            this.dispatchEvent(new CustomEvent("complete", {bubbles: !0, composed: !0}))
        }
    }

    (0, a.__decorate)([(0, d.C)({type: Boolean, reflect: !0})], ye.prototype, "active", void 0);
    let pt = class extends ye {
        constructor() {
            super(...arguments), this.progress = 0
        }

        static get styles() {
            return i.iv`
      ${super.styles}
      ${i.iv`
  :host([active]) {
    transform: translateY(60%);

    animation-duration: 0.3s;
    animation-name: scrollIn;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }

  @keyframes scrollIn {
    from {
      opacity: 0;
      transform: translateY(60%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}

      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: ${(0, e.asCssProp)((0, n.gridUnits)(3.5))};
      }

      .milestone-progress__rewards {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      .milestone-progress__rewards-progress-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .milestone-progress__rewards-titles {
        display: flex;
        width: 100%;
        justify-content: center;

        margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(3.5))};
      }

      .milestone-progress__rewards-title {
        width: 20%;
      }

      .milestone-progress__previous-rewards ::slotted(*) {
        transform: translateX(50%);
      }

      .milestone-progress__next-rewards ::slotted(*) {
        transform: translateX(-50%);
      }

      .milestone-progress__rewards-spacer {
        display: flex;
        justify-content: center;
        width: ${(0, e.asCssProp)(this.progressWidth.toString())}%;
      }

      .milestone-progress__progress-bar-container {
        width: 100%;
        height: 16px;
        display: flex;

        box-sizing: border-box;
        padding: 2px 0 2px 0;
        background-color: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
        border: 1px solid ${(0, e.asCssProp)(r.colors.gold[500])};
        border-left: 0;
        border-right: 0;
      }

      .milestone-progress__progress-bar-overlay {
        position: relative;
      }

      .milestone-progress__gradient {
        position: absolute;
        ${(0, e.inset)(0)};
        z-index: 2;
        background: linear-gradient(90deg, #0a0a0add 0%, #00000000 7%, #00000000 93%, #0a0a0add 100%);
      }

      .milestone-progress__extra {
        flex-grow: 1;
      }

      .milestone-progress__extra--first {
        background-color: ${(0, e.asCssProp)(r.colors.apocyan[500])};
      }

      .milestone-progress__extra--last {
        background-color: ${(0, e.asCssProp)(r.colors.apocyan[100])};
      }

      .milestone-progress__container {
        position: relative;
        width: ${(0, e.asCssProp)(`${this.progressWidth.toString()}%`)};
      }

      .milestone-progress__milestone-gem-outer {
        position: absolute;

        width: 18px;
        height: 18px;

        top: 50%;

        background-color: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
        border: 2px solid ${(0, e.asCssProp)(r.colors.gold[500])};

        z-index: 2;
      }

      .milestone-progress__milestone-gem-outer::before {
        content: '';
        position: absolute;
        ${(0, e.inset)(2)}
        background-image: ${(0, e.asCssProp)(r.gradients.apocyan.simple())};
      }

      .milestone-progress__milestone-gem-inner {
        position: absolute;

        ${(0, e.inset)(4)}

        background-color: ${(0, e.asCssProp)(r.colors.gunmetal[900])};

        z-index: 3;
      }

      .milestone-progress__milestone-gem-inner::before {
        content: '';
        position: absolute;
        display: block;

        ${(0, e.inset)(2)}

        border: 2px solid ${(0, e.asCssProp)(r.colors.god.light.primary)};
        background-image: ${(0, e.asCssProp)(r.gradients.gold.simple("right"))};
        box-shadow: 0px 0px 3px rgba(175, 250, 237, 0.4);
      }

      .milestone-progress__milestone-gem-outer:first-child {
        left: 0;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      .milestone-progress__milestone-gem-outer:last-child {
        right: 0;
        transform: translate(50%, -50%) rotate(45deg);
      }

      /** Unachineved milestone **/
      .milestone-progress__milestone-gem-outer--unachieved::before {
        background-color: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
        background-image: none;
      }

      .milestone-progress__milestone-gem-outer--unachieved .milestone-progress__milestone-gem-inner::before {
        border: 0;
        background-image: none;
        box-shadow: none;
      }

      .milestone-progress__progress-bar {
        position: absolute;
        ${(0, e.inset)(0)}

        z-index: 1;
      }

      .milestone-progress__progress-bar::before {
        content: '';
        position: absolute;
        ${(0, e.inset)(0)}

        width: var(--barWidth);

        border-radius: 4px;
        background-image: ${(0, e.asCssProp)(r.gradients.apocyan.simple("left"))};

        z-index: 1;
      }
    `
        }

        run() {
            return (0, a.__awaiter)(this, void 0, void 0, function* () {
                const g = this.progress >= 100 ? 100 : Math.min(this.progress, 98);
                this.style.setProperty("--barWidth", `${g}%`), yield this.wait(500)
            })
        }

        render() {
            const g = this.progress >= 100 ? 100 : Math.min(this.progress, 98);
            return this.style.setProperty("--barWidth", `${g}%`), i.dy`
      <div class="milestone-progress__rewards">
        <div class="milestone-progress__previous-rewards">
          <slot name="previous-reward-icon"></slot>
        </div>
        <div class="milestone-progress__rewards-spacer">
          <slot name="next-rewards-text"></slot>
        </div>
        <div class="milestone-progress__next-rewards">
          <slot name="next-reward-icon"></slot>
        </div>
      </div>
      <div class="milestone-progress__progress-bar-overlay">
        <div class="milestone-progress__gradient"></div>
        <div class="milestone-progress__progress-bar-container">
          <div class="milestone-progress__extra milestone-progress__extra--first"></div>
          <div class="milestone-progress__container">
            <div
              data-test-id="milestone-progress-bar.gem-start"
              class=${(0, O.$)({
                "milestone-progress__milestone-gem-outer": !0,
                "milestone-progress__milestone-gem-outer--unachieved": 0 === this.progress
            })}
            >
              <div class="milestone-progress__milestone-gem-inner"></div>
            </div>
            <div class="milestone-progress__progress-bar" progress=${this.progress}></div>
            <div
              data-test-id="milestone-progress-bar.gem-end"
              class=${(0, O.$)({
                "milestone-progress__milestone-gem-outer": !0,
                "milestone-progress__milestone-gem-outer--unachieved": this.progress < 100
            })}
            >
              <div class="milestone-progress__milestone-gem-inner"></div>
            </div>
          </div>
          <div
            data-test-id="milestone-progress-bar.trail"
            class=${(0, O.$)({
                "milestone-progress__extra": !0,
                "milestone-progress__extra--last": this.progress >= 100
            })}
          ></div>
        </div>
      </div>
      <div class="milestone-progress__rewards-titles">
        <div class="milestone-progress__rewards-title milestone-progress__previous-rewards">
          <slot name="previous-reward-title"></slot>
        </div>
        <div class="milestone-progress__rewards-spacer"></div>
        <div class="milestone-progress__rewards-title  milestone-progress__next-rewards">
          <slot name="next-reward-title"></slot>
        </div>
      </div>
    `
        }
    };
    pt.progressWidth = 60, (0, a.__decorate)([(0, d.C)({type: Number})], pt.prototype, "progress", void 0), pt = (0, a.__decorate)([(0, t.M)("gu-milestone-progress-bar")], pt);
    let Et = class extends i.oi {
        constructor() {
            super(...arguments), this.totalSteps = 9, this.filledSteps = 2, this.fillGradient = "gradients.apocyan.simple", this.fillGradientTarget = "bottom", this.bridgeColor = "colors.apocyan.300", this.squareSize = `${(0, n.gridUnits)(4)}`, this.squareBridgeRatio = "3/4"
        }

        static get properties() {
            return {
                filledSteps: {type: Number},
                totalSteps: {type: Number},
                squareSize: {type: String},
                fillGradient: {type: String},
                fillGradientTarget: {type: String},
                bridgeColor: {type: String}
            }
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
      }

      .box {
        display: flex;
        position: relative;
        border: ${(0, e.asCssProp)((0, n.gridUnits)(.25))} solid;
        border-color: ${(0, e.asCssProp)(r.colors.gunmetal[300])};
        background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        position: relative;
        width: var(--squareSize);
        height: var(--squareSize);
        transform: rotate(45deg);
      }

      .box:last-child {
        margin-right: 0;
      }

      .box--filled {
        border: ${(0, e.asCssProp)((0, n.gridUnits)(.25))} solid;
        border-image-slice: 1;
        border-width: ${(0, e.asCssProp)((0, n.gridUnits)(.25))};
        border-image-source: var(--backgroundFillGradient);
      }

      .box--filled .box__filling {
        display: block;
      }

      .box__filling {
        display: none;
        border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.25))};
        background: var(--backgroundFillGradient);
        margin: ${(0, e.asCssProp)((0, n.gridUnits)(.75))};
        width: 100%;
        height: calc(100% - ${(0, e.asCssProp)((0, n.gridUnits)(1.5))});
      }

      .bridge {
        margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(-3))};
        margin-right: 0px;
        height: ${(0, e.asCssProp)((0, n.gridUnits)(.25))};
        margin-top: auto;
        margin-bottom: auto;
        /* width: ${(0, e.asCssProp)((0, n.gridUnits)(3))}; */
        width: var(--bridgeSize);

        background: ${(0, e.asCssProp)(r.colors.gunmetal[300])};
      }

      .bridge:last-child {
        display: none;
      }

      .bridge--filled {
        background: var(--backgroundFillColor);
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-large"])}) {
        .box__filling {
          /* Looks better at larger viewports like this. */
          margin: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
          height: calc(100% - ${(0, e.asCssProp)((0, n.gridUnits)(2))});
        }
        .bridge {
          /* width: ${(0, e.asCssProp)((0, n.gridUnits)(4))}; */
        }
      }
    `
        }

        render() {
            return (0, u.setPropertyGradientFromVariable)(this.style, this.fillGradient, "--backgroundFillGradient", this.fillGradientTarget), (0, u.setPropertyColorFromVariable)(this.style, this.bridgeColor, "--backgroundFillColor"), this.style.setProperty("--squareSize", this.squareSize), this.style.setProperty("--bridgeSize", `calc(${this.squareSize} * ${this.squareBridgeRatio})`), i.dy`
      ${new Array(this.totalSteps).fill(0).map((g, A) => {
                const X = A < this.filledSteps;
                return i.dy`
          <div class="box ${X ? "box--filled" : ""}">
            <div class="box__filling"></div>
          </div>
          <div class="bridge ${X ? "bridge--filled" : ""}"></div>
        `
            })}
    `
        }
    };
    Et = (0, a.__decorate)([(0, t.M)("gu-progress-step-counter")], Et);
    let Ot = class extends i.oi {
        static get styles() {
            return i.iv`
      :host {
        display: flex;
        flex-flow: column nowrap;
        position: relative;
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(3))} 0 0;
      }

      :host::before {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
      }

      :host::after {
        content: '';
        position: absolute;
        z-index: 2;
        top: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        left: 0;
        width: 100%;
        height: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        background: ${(0, e.asCssProp)(r.colors.gold[500])};
      }

      .sectionBackground,
      .sectionBackground__picture {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .sectionBackground {
        background: ${(0, e.asCssProp)(r.colors.light[100])};
      }

      .sectionBackground__picture {
        opacity: 0.12;
        filter: grayscale(1);
      }

      .sectionBackground__picture__img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .ribbons {
        position: absolute;
        top: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        left: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
        width: ${(0, e.asCssProp)((0, n.gridUnits)(55))};
        display: none;
      }

      .ribbons--right {
        left: auto;
        right: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
      }

      .header {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .header__bodyCopy {
        width: 100%;
        margin: 0 auto;
        max-width: 800px;
        padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(12))};
      }

      .slotContent {
        position: relative;
      }

      @media only screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
        .ribbons {
          display: block;
        }
      }
    `
        }

        render() {
            return i.dy`
      <div class="sectionBackground">
        <picture class="sectionBackground__picture">
          <source
            srcset="
              /assets/images/misc-art/misc-art--outdoor-match-infront-of-palace@3x.webp 2250w,
              /assets/images/misc-art/misc-art--outdoor-match-infront-of-palace@2x.webp 1500w,
              /assets/images/misc-art/misc-art--outdoor-match-infront-of-palace@1x.webp  750w
            "
            type="image/webp"
          />
          <source
            srcset="
              /assets/images/misc-art/misc-art--outdoor-match-infront-of-palace@3x.jpg 2250w,
              /assets/images/misc-art/misc-art--outdoor-match-infront-of-palace@2x.jpg 1500w,
              /assets/images/misc-art/misc-art--outdoor-match-infront-of-palace@1x.jpg  750w
            "
            type="image/jpg"
          />
          <img
            src="/assets/images/misc-art/misc-art--outdoor-match-infront-of-palace@1x.jpg"
            alt=""
            class="sectionBackground__picture__img"
          />
        </picture>
      </div>

      <img class="ribbons" src="/assets/images/ui-embellishments/ui--ribbons.svg" alt="Gold and black UI Ribbons" />

      <img
        class="ribbons ribbons--right"
        src="/assets/images/ui-embellishments/ui--ribbons-alt.svg"
        alt="Gold and black UI Ribbons"
      />

      <header class="header">
        <gu-vertical-space top="5x-large" bottom="medium">
          <gu-heading-text size="large" fillColor=${r.colors.dark[900]} align="center"> PRIZE DRAWS </gu-heading-text>
        </gu-vertical-space>

        <gu-paragraph-text class="header__bodyCopy" align="center" size="large" fillColor=${r.colors.dark[700]}>
          Earn draw tickets by purchasing Trial of the Gods packs for a chance to win some truly divine prizes including
          a one-of-a-kind Mythic Card.
        </gu-paragraph-text>

        <gu-vertical-space top="large">
          <gu-simple-text-button href="https://playgu.co/totg-prizes" target="_blank" fillColor=${r.colors.dark[700]}>
            View Prizes
          </gu-simple-text-button>
        </gu-vertical-space>
      </header>

      <div class="slotContent">
        <slot></slot>
      </div>
    `
        }
    };
    Ot = (0, a.__decorate)([(0, t.M)("gu-raffles-and-prizes-section")], Ot), s(28917), s(29939);
    let $t = class extends i.oi {
        static get properties() {
            return {text: {type: String}, iconLigature: {type: String}, imageUrl: {type: String}}
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: ${(0, e.asCssProp)((0, n.gridUnits)(46))};
        height: ${(0, e.asCssProp)((0, n.gridUnits)(80))};
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(15, 27, 39, 0) 100%);
        border: 1px solid;
        border-color: rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.light[100]))}, 0.1);
      }

      .rewardGraphic {
        margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(15))};
      }

      .fancyUnderscore {
        width: ${(0, e.asCssProp)((0, n.gridUnits)(25))};
        height: ${(0, e.asCssProp)((0, n.gridUnits)(1))};

        /* Unable to use getColor here - it's colors.quality.diamond */
        box-shadow: 0px 0px 8px rgba(148, 230, 251, 0.5);
        margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(8))};
        background: linear-gradient(
          270deg,
          rgba(0, 0, 0, 0) -1.52%,
          ${(0, e.asCssProp)(r.colors.apocyan[500])} 33.58%,
          ${(0, e.asCssProp)(r.colors.apocyan[100])} 48.76%,
          ${(0, e.asCssProp)(r.colors.apocyan[500])} 66.2%,
          rgba(0, 0, 0, 0) 102.27%
        );
      }

      .titleText {
        margin-top: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
        padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(3))};
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-large"])}) {
        :host {
          width: ${(0, e.asCssProp)((0, n.gridUnits)(57))};
          height: ${(0, e.asCssProp)((0, n.gridUnits)(100))};
        }
      }
    `
        }

        render() {
            return i.dy`
      <gu-reward-graphic
        class="rewardGraphic"
        .imageUrl=${this.imageUrl}
        .iconLigature=${this.iconLigature}
      ></gu-reward-graphic>
      <div class="fancyUnderscore"></div>

      ${this.text ? i.dy`
            <gu-paragraph-text
              class="titleText"
              align="center"
              fillColor="colors.light.100"
              fontWeight="bold"
              kind="large"
              text=${this.text}
            >
            </gu-paragraph-text>
          ` : ""}
    `
        }
    };
    $t = (0, a.__decorate)([(0, t.M)("gu-reward-display")], $t);
    let ls = class extends i.oi {
        static get properties() {
            return {iconLigature: {type: String}, imageUrl: {type: String}}
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
      }

      .outerSquare {
        display: flex;
        width: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
        height: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
        transform: rotate(45deg);

        border: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} solid;
        border-image-slice: 1;
        border-image-source: ${(0, e.asCssProp)(r.gradients.apocyan.simple("top"))};
        background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
      }

      .outerSquare__innerSquare {
        margin: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        width: 100%;
        background: ${(0, e.asCssProp)(r.colors.dark[900])};
        border: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} ${(0, e.asCssProp)(r.colors.apocyan[500])} solid;
      }

      .icon {
        position: absolute;
        margin: auto;
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(15))};
      }

      .rewardImage {
        position: absolute;
        margin: auto;
        width: 130%;
      }

      .rewardImage__img {
        width: 100%;
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-large"])}) {
        .outerSquare {
          width: ${(0, e.asCssProp)((0, n.gridUnits)(30))};
          height: ${(0, e.asCssProp)((0, n.gridUnits)(30))};
        }
        .icon {
          font-size: ${(0, e.asCssProp)((0, n.gridUnits)(20))};
        }
      }
    `
        }

        render() {
            return i.dy`
      <div class="outerSquare">
        <div class="outerSquare__innerSquare"></div>
      </div>
      ${this.iconLigature ? i.dy`
            <gu-icon
              class="icon"
              iconLigature=${this.iconLigature}
              fillGradientTarget="top"
              fillGradient="gradients.apocyan.simple"
            ></gu-icon>
          ` : ""}
      ${this.imageUrl ? i.dy`
            <picture class="rewardImage">
              <source srcset=${this.imageUrl} type="image/png" />
              <source srcset=${this.imageUrl} type="image/png" />
              <img class="rewardImage__img" alt="image of the reward" src=${this.imageUrl} />
            </picture>
          ` : ""}
    `
        }
    };
    ls = (0, a.__decorate)([(0, t.M)("gu-reward-graphic")], ls);
    const Gt = (0, e.asCssProp)((0, n.gridUnits)(3));
    let qt = class extends i.oi {
        static get styles() {
            return i.iv`
      :host {
        display: block;
        position: relative;
      }

      .ribbon-banner__left,
      .ribbon-banner__right {
        display: none;
        position: absolute;
        top: -${Gt};
        width: calc(${Gt} * 2);
        height: 100%;
        background: ${(0, e.asCssProp)(r.colors.gold[500])};
      }

      .ribbon-banner__left::before,
      .ribbon-banner__right::before {
        content: '';
        position: absolute;
        width: ${Gt};
        height: ${Gt};
        background: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
        top: 0;
        clip-path: polygon(0 100%, 0 0, 100% 100%);
      }

      .ribbon-banner__left {
        left: 0;
      }

      .ribbon-banner__left::before {
        right: 0;
        transform: rotate(-90deg);
      }

      .ribbon-banner__right::before {
        left: 0;
      }

      .ribbon-banner__right {
        right: 0;
      }

      .ribbon-banner__border {
        position: relative;
        background: ${(0, e.asCssProp)(r.colors.quality.mythic)};
        border: ${(0, e.asCssProp)((0, n.gridUnits)(1))} solid;
        border-image-source: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
        border-image-slice: 1;
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
      }

      .ribbon-banner__content {
        border: 1px solid;
        border-image-source: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
        border-image-slice: 1;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(4))} 0 ${(0, e.asCssProp)((0, n.gridUnits)(5))};
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-small"])}) {
        :host {
          padding: 0 ${Gt};
        }

        .ribbon-banner__left,
        .ribbon-banner__right {
          display: block;
        }
      }
    `
        }

        render() {
            return i.dy`
      <i class="ribbon-banner__left"></i>
      <i class="ribbon-banner__right"></i>
      <div class="ribbon-banner__border">
        <div class="ribbon-banner__content" part="innerContainer">
          <slot data-test-id="ribbon-banner-slot"></slot>
        </div>
      </div>
    `
        }
    };
    qt = (0, a.__decorate)([(0, t.M)("gu-ribbon-banner")], qt), s(65694);
    let cs = class extends i.oi {
        static get styles() {
            return i.iv`
      ${(0, e.asCssProp)((0, e.setBoxSizing)())}

      :host {
        display: flex;
        justify-content: center;
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(11))};
      }

      .socialButton {
        margin-right: 3vw;
        cursor: pointer;
      }

      .socialButton:last-child {
        margin: 0;
      }

      :host([smallIcons='true']) {
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(8))};
      }
    `
        }

        gotoSocialLink(g) {
            window.open(g)
        }

        render() {
            return i.dy`
      ${this.accounts.map(g => i.dy`
          <gu-icon
            class="socialButton"
            iconLigature="social_${g.name}"
            fillGradient=${r.gradients.gold.simple("bottom")}
            @click=${() => this.gotoSocialLink(g.link)}
          ></gu-icon>
        `)}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], cs.prototype, "accounts", void 0), (0, a.__decorate)([(0, d.C)()], cs.prototype, "smallIcons", void 0), cs = (0, a.__decorate)([(0, t.M)("gu-social-buttons-row")], cs);
    const Eo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let Co = class extends i.oi {
        constructor() {
            super(...arguments), this.imageUrl = "", this.name = "", this.price = 0, this.title = "", this.showCountdown = !1
        }

        static get properties() {
            return {
                imageUrl: {type: String},
                name: {type: String},
                title: {type: String},
                price: {type: Number},
                durationType: {type: String},
                endTimestamp: {type: String},
                showCountdown: {type: Boolean}
            }
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        flex-basis: 51%;
        margin: ${(0, e.asCssProp)((0, n.gridUnits)(3.5))};
        flex-direction: column;
        justify-content: center;
        background: var(--gu-blue-dark);
        align-items: center;
        min-width: ${(0, e.asCssProp)((0, n.gridUnits)(85))};
        width: ${(0, e.asCssProp)((0, n.gridUnits)(85))};
        position: relative;
        padding: 8px;
        border-radius: 4px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        padding-top: ${(0, e.asCssProp)((0, n.gridUnits)(8))};
      }

      @media screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping.medium)}) {
        :host {
          flex-basis: 34%;
          min-width: unset;
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping.large)}) {
        :host {
          flex-basis: 21%;
        }
      }

      .divider {
        max-width: 100%;
        margin-top: auto;
      }

      .image {
        max-width: 100%;
        margin: ${(0, e.asCssProp)((0, n.gridUnits)(1))} ${(0, e.asCssProp)((0, n.gridUnits)(4))};
        flex-grow: 1;
      }

      .image__img {
        max-width: 100%;
      }

      .middleSection {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .middleSection__cta {
        margin-top: auto;
      }

      .middleSection__name {
        padding: 0 ${(0, e.asCssProp)((0, n.gridUnits)(2))};
        text-transform: uppercase;
        margin: auto;
      }

      .middleSection__cta__price {
        color: var(--gu-blue);
        display: flex;
        align-items: center;
      }

      .middleSection__cta__icon {
        display: inline-flex;
        font-size: 28px;
      }

      .bottomSection {
        margin-top: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: var(--gu-blue-dark);
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(2))} 0;
      }

      .helpIcon {
        position: absolute;
        top: 0;
        right: 0;
        margin: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        font-size: 20px;
        cursor: pointer;
        z-index: 1;
      }

      .specialBanner {
        position: absolute;
        top: 0px;
        left: ${(0, e.asCssProp)((0, n.gridUnits)(-1))};
        background: var(--gu-blue-dark);
        border-left: solid 4px var(--gu-blue-hover);
        border-bottom: solid 1px var(--gu-blue-hover);
      }
    `
        }

        buyItem() {
            this.dispatchEvent(new CustomEvent("onBuyItem", {composed: !0}))
        }

        moreInfo() {
            this.dispatchEvent(new CustomEvent("onMoreInfo", {composed: !0}))
        }

        disconnectedCallback() {
            super.disconnectedCallback(), this.timer && clearInterval(this.timer)
        }

        figureOutTime() {
            this.endTimestampEpoch = Math.round(new Date(this.endTimestamp).getTime() / 1e3), this.endDate = new Date(this.endTimestamp);
            const A = this.endTimestampEpoch - 86400, X = Math.round((new Date).getTime() / 1e3);
            if (X > A) return void (this.showCountdown = !0);
            const pe = A - X;
            this.timer && clearInterval(this.timer), this.timer = window.setInterval(() => {
                this.showCountdown = !0
            }, 1e3 * pe + 1e3)
        }

        render() {
            return this.figureOutTime(), i.dy`
      <gu-icon @click=${this.moreInfo} iconLigature="help" class="helpIcon"></gu-icon>

      <gu-star-store-special-banner
        class="specialBanner"
        durationType=${this.durationType}
      >
      ${this.title}
      </gu-star-store-special-banner>

      <picture class="image">
        <source srcset="${this.imageUrl}" type="image/jpg" />
        <img class="image__img" src="${this.imageUrl}" />
      </picture>

      <img
        src="/assets/images/ui-embellishments/ui--divider-complex-2.svg"
        class="divider"
        alt="extra detailed diamond divider"
      />

      <gu-vertical-space top="large" bottom="large" class="middleSection">

        <gu-primary-hex-button @click=${this.buyItem} class="middleSection__cta">
          BUY WITH&nbsp;<span class="middleSection__cta__price">
            ${this.price}
            <gu-icon
              class="middleSection__cta__icon"
              iconLigature="collectable_stars"
              fillColor="colors.apocyan.300"
            ></gu-icon
          </span>
        </gu-primary-hex-button>
      </gu-vertical-space>

      ${this.showCountdown ? i.dy`
              <gu-vertical-space class="bottomSection">
                <gu-simple-text kind="tag" align="center" fillColor="colors.light.100" class="name">
                  AVAILABLE FOR &nbsp;
                </gu-simple-text>
                <gu-countdown-timer
                  simpleTextDisplay=${!0}
                  simpleTextKind="tag"
                  .showFields=${["hours", "minutes", "seconds"]}
                  padZeroes=${!0}
                  targetTime=${this.endTimestampEpoch}
                ></gu-countdown-timer>
              </gu-vertical-space>
            ` : i.dy`
              <gu-vertical-space class="bottomSection">
                <gu-simple-text kind="tag" align="center" fillColor="colors.light.100" class="name">
                  AVAILABLE UNTIL ${this.endDate.getDate()} ${Eo[this.endDate.getUTCMonth()].slice(0, 3)}
                  ${this.endDate.getUTCFullYear()}
                </gu-simple-text>
              </gu-vertical-space>
            `}
    `
        }
    };
    Co = (0, a.__decorate)([(0, t.M)("gu-star-store-sale-item")], Co);
    let qs = class extends i.oi {
        constructor() {
            super(...arguments), this.durationType = "daily"
        }

        static get properties() {
            return {durationType: {type: String}}
        }

        static get styles() {
            return i.iv`
      :host {
        width: 100%;
      }

      gu-vertical-space {
        position: relative;
      }

      gu-paragraph-text {
        padding-left: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        text-transform: uppercase;
      }
    `
        }

        render() {
            return i.dy`
      <gu-vertical-space both="x-small">
        <div class="border"></div>
        <gu-paragraph-text
          kind="large"
          fontWeight="bold"
          fillColor=${"monthly" === this.durationType ? "colors.gunmetal.900" : "colors:light:100"}
        >
          <slot></slot>
        </gu-paragraph-text>
      </gu-vertical-space>
    `
        }
    };
    qs = (0, a.__decorate)([(0, t.M)("gu-star-store-special-banner")], qs);
    let eo = class extends i.oi {
        static get styles() {
            return i.iv`
      :host {
        display: block;
        position: relative;
      }

      .stats-banner__content {
        max-width: 140px;
      }

      .stats-banner__middle {
        max-width: 360px;
      }

      .stats-banner__spacer {
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        box-shadow: inset 0 0 0 1.5px ${(0, e.asCssProp)(r.colors.gold[500])};
        border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
        display: flex;
        transform: rotate(-45deg);
      }

      .stats-banner__spacer::before {
        content: '';
        width: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        height: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        background: ${(0, e.asCssProp)(r.colors.gold[500])};
        border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
      }

      .stats-banner__middle,
      .stats-banner__spacer--middle {
        display: none;
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
        .stats-banner__middle {
          display: block;
        }
        .stats-banner__spacer--middle {
          display: flex;
        }
      }
    `
        }

        render() {
            return i.dy`
      <gu-ribbon-banner>
        <div class="stats-banner__content">
          <gu-heading-text
            size="x-small"
            .responsiveSize=${[{breakpoint: "medium", size: "large"}]}
            align="center"
            fillColor="colors.dark.900"
          >
            $52M+
          </gu-heading-text>
          <gu-paragraph-text kind="small" align="center" fillColor="colors.dark.500">
            Worth of cards exchanged
          </gu-paragraph-text>
        </div>

        <i class="stats-banner__spacer stats-banner__spacer--middle"></i>

        <div class="stat stats-banner__middle">
          <gu-heading-text
            size="x-small"
            .responsiveSize=${[{breakpoint: "medium", size: "small"}]}
            align="center"
            fillColor="colors.dark.900"
          >
            <h2>Led by Chris Clay</h2>
          </gu-heading-text>
          <gu-paragraph-text
            kind="small"
            .responsiveKind=${[{breakpoint: "medium", kind: "large"}]}
            align="center"
            fillColor="colors.dark.500"
          >
            Former Game Director of Magic:<br />The Gathering Arena
          </gu-paragraph-text>
        </div>

        <i class="stats-banner__spacer"></i>

        <div class="stat">
          <gu-heading-text
            size="x-small"
            .responsiveSize=${[{breakpoint: "medium", size: "large"}]}
            align="center"
            fillColor="colors.dark.900"
          >
            $570k
          </gu-heading-text>
          <gu-paragraph-text kind="small" align="center" fillColor="colors.dark.500">
            Tournament prize pool
          </gu-paragraph-text>
        </div>
      </gu-ribbon-banner>
    `
        }
    };
    eo = (0, a.__decorate)([(0, t.M)("gu-stats-banner")], eo);
    let ds = class extends i.oi {
        constructor() {
            super(...arguments), this.selectedOptionIndex = 0
        }

        static get styles() {
            return i.iv`
      .two-value-switch__toggle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
      }
    `
        }

        onClick() {
            this.dispatchEvent(new CustomEvent("switched", {
                composed: !0,
                detail: {selectedOption: this.selectedOption}
            })), this.selectedOptionIndex = 0 === this.selectedOptionIndex ? 1 : 0
        }

        get selectedOption() {
            return this.options[this.selectedOptionIndex]
        }

        render() {
            return this.options && 2 === this.options.length ? i.dy`
      <a
        role="button"
        class="two-value-switch__toggle"
        @click=${() => this.onClick()}
        data-test-id="two-value-switch-toggle"
      >
        <gu-icon iconLigature="action_switch" fillColor="colors.light.500"></gu-icon>
        <gu-paragraph-text align="center" kind="tag" fillColor="colors.light.500" .text=${this.selectedOption.value}>
        </gu-paragraph-text>
      </a>
    ` : i.dy``
        }
    };
    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Array
    })], ds.prototype, "options", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Number
    })], ds.prototype, "selectedOptionIndex", void 0), ds = (0, a.__decorate)([(0, t.M)("gu-two-value-switch")], ds);
    let Re = class extends i.oi {
        constructor() {
            super(...arguments), this.values = [], this.selectedIndex = 0, this.idPrefix = "", this.onClick = (g, A) => {
                this.selectedIndex = A, this.dispatchEvent(new CustomEvent("onItemClicked", {
                    composed: !0,
                    detail: {index: A, value: g}
                }))
            }
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        flex-direction: row;
      }
      gu-square-selection-row-item:not(:last-child) {
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
      }
    `
        }

        render() {
            return this.values ? i.dy`
          ${this.values.map((g, A) => i.dy`<gu-square-selection-row-item
              .selected=${A === this.selectedIndex}
              .value="${g}"
              @click=${() => this.onClick(g, A)}
              id=${`${this.idPrefix}item-${g}`}
            >
            </gu-square-selection-row-item>`)}
        ` : null
        }
    };
    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Array
    })], Re.prototype, "values", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Number
    })], Re.prototype, "selectedIndex", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: String
    })], Re.prototype, "idPrefix", void 0), Re = (0, a.__decorate)([(0, t.M)("gu-square-selection-row")], Re);
    let Nt = class extends i.oi {
        constructor() {
            super(...arguments), this.value = "", this.selected = !1
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: ${(0, e.asCssProp)((0, n.gridUnits)(9))};
        height: ${(0, e.asCssProp)((0, n.gridUnits)(9))};
        border: ${(0, e.asCssProp)((0, n.gridUnits)(.25))} solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
        border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
        background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        color: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
      }

      :host(:hover) {
        background: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
        color: ${(0, e.asCssProp)(r.colors.light[300])};
      }

      :host([selected='true']) {
        background: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
        color: ${(0, e.asCssProp)(r.colors.light[300])};
        border-color: ${(0, e.asCssProp)(r.colors.gunmetal[300])};
      }
    `
        }

        render() {
            return i.dy` <gu-paragraph-text id=${this.id} kind="small" fontWeight="bold" .text=${this.value}>
    </gu-paragraph-text>`
        }
    };
    (0, a.__decorate)([(0, d.C)({reflect: !0})], Nt.prototype, "value", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], Nt.prototype, "selected", void 0), Nt = (0, a.__decorate)([(0, t.M)("gu-square-selection-row-item")], Nt);
    const xo = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host([theme='light']) {
    --textColor: ${(0, e.asCssProp)(r.colors.dark[300])};
  }

  :host([theme='dark']) {
    --textColor: ${(0, e.asCssProp)(r.colors.light[700])};
    --backgroundColor: ${(0, e.asCssProp)(r.colors.dark[700])};
  }

  :host([type='success']) {
    --borderColor: ${(0, e.asCssProp)(r.colors.apocyan[500])};
  }

  :host([type='info']) {
    --borderColor: ${(0, e.asCssProp)(r.colors.gold[500])};
  }

  :host([type='error']) {
    --borderColor: ${(0, e.asCssProp)(r.colors.god.war.secondary)};
  }

  :host([theme='light'][type='success']) {
    --backgroundColor: rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.apocyan[300]))}, 0.2);
  }

  :host([theme='light'][type='info']) {
    --backgroundColor: rgba(235, 201, 139, 0.2); //@TODO: colors.gold[300] with 20% opacity;
  }

  :host([theme='light'][type='error']) {
    --backgroundColor: rgba(153, 1, 26, 0.2); //@TODO: colors.war[tertiary] with 20% opacity;
  }

  :host {
    display: block;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
    border-left: ${(0, e.asCssProp)((0, n.gridUnits)(2))} solid var(--borderColor);
    background-color: var(--backgroundColor);
    color: var(--textColor);
  }
`;
    let to = class extends i.oi {
        constructor() {
            super(...arguments), this.type = "success", this.theme = "light"
        }

        render() {
            return i.dy` <slot></slot> `
        }
    };
    to.styles = xo, (0, a.__decorate)([(0, d.C)()], to.prototype, "type", void 0), (0, a.__decorate)([(0, d.C)()], to.prototype, "theme", void 0), to = (0, a.__decorate)([(0, t.M)("gu-subtle-notification")], to);
    let Mo = class extends i.oi {
        constructor() {
            super(...arguments), this.headerSize = "x-small", this.headerColor = r.colors.dark[900], this.headerAlign = "center", this.textKind = "small", this.textColor = r.colors.dark[500], this.textAlign = "center"
        }

        static get properties() {
            return {
                image: {type: String},
                header: {type: String},
                headerSize: {type: String},
                headerColor: {type: String},
                headerAlign: {type: String},
                text: {type: String},
                textKind: {type: String},
                textColor: {type: String},
                textAlign: {type: String}
            }
        }

        static get styles() {
            return i.iv`
      .tile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

      .tile-img {
        width: auto;
        height: 100px;
        margin-bottom: 40px;
      }

      .tile-header {
        margin-bottom: 30px;
      }
    `
        }

        render() {
            return i.dy`
      <div class="tile-img-header-text tile">
        <img class="tile-img tile-img" src="${this.image}" />
        <gu-heading-text
          align="${this.headerAlign}"
          fillcolor="${this.headerColor}"
          size="${this.headerSize}"
          class="tile-header"
        >
          ${this.header}
        </gu-heading-text>
        <gu-paragraph-text align="${this.textAlign}" fillcolor="${this.textColor}" kind="${this.textKind}">
          ${this.text}
        </gu-paragraph-text>
      </div>
    `
        }
    };
    Mo = (0, a.__decorate)([(0, t.M)("gu-tile-img-header-text")], Mo);
    var Io = s(41363), Do = s(29429), Lo = s(55443), Uo = s(53718), Ro = s(24699), Bo = s(25668);
    const Fo = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    --standardBorderSize: 2px;
    --arrowSideLength: 18px;
  }

  ::slotted(*) {
    text-align: center;
  }

  #tooltip {
    display: none;
    inline-size: 350px;
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
    color: ${(0, e.asCssProp)(r.colors.light[100])};
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    border-width: var(--standardBorderSize);
    border-style: solid;
    border-color: ${(0, e.asCssProp)(r.colors.gunmetal[300])};
    border-radius: 2px;
    white-space: break-space;
  }

  #tooltip[data-show] {
    display: block;
  }

  #arrow,
  #arrow::before {
    position: absolute;
    width: var(--arrowSideLength);
    height: var(--arrowSideLength);
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    content: '';
    visibility: visible;
    border-bottom: var(--standardBorderSize) solid ${(0, e.asCssProp)(r.colors.gunmetal[300])};
    border-right: var(--standardBorderSize) solid ${(0, e.asCssProp)(r.colors.gunmetal[300])};
    border-top: var(--standardBorderSize) solid transparent;
    border-left: var(--standardBorderSize) solid transparent;
    border-radius: 2px;
  }

  #tooltip[data-popper-placement^='top'] > #arrow {
    bottom: calc(-1 * var(--arrowSideLength) / 2);
  }

  #tooltip[data-popper-placement^='bottom'] > #arrow {
    top: calc(-1 * var(--arrowSideLength) / 2);
  }

  #tooltip[data-popper-placement^='left'] > #arrow {
    right: calc(-1 * var(--arrowSideLength) / 2);
  }

  #tooltip[data-popper-placement^='right'] > #arrow {
    left: calc(-1 * var(--arrowSideLength) / 2);
  }

  #tooltip[data-popper-placement^='top'] > #arrow:before {
    transform: rotate(45deg);
  }

  #tooltip[data-popper-placement^='bottom'] > #arrow:before {
    transform: rotate(-135deg);
  }

  #tooltip[data-popper-placement^='left'] > #arrow:before {
    transform: rotate(-45deg);
  }

  #tooltip[data-popper-placement^='right'] > #arrow:before {
    transform: rotate(135deg);
  }
`, Go = [Io.Z, Do.Z, Lo.Z, Uo.Z],
        No = [{name: "offset", options: {offset: [0, 18]}}, {name: "arrow", enabled: !0, options: {padding: 2}}];
    let us = class extends i.oi {
        constructor() {
            super(...arguments), this.position = "top", this.showTooltip = () => {
                this.tooltipElement.setAttribute("data-show", ""), this.popperInstance.setOptions(g => Object.assign(Object.assign({}, g), {
                    modifiers: [...g.modifiers, {
                        name: "eventListeners",
                        enabled: !0
                    }]
                })), this.popperInstance.update()
            }, this.hideTooltip = () => {
                this.tooltipElement.removeAttribute("data-show"), this.popperInstance.setOptions(g => Object.assign(Object.assign({}, g), {
                    modifiers: [...g.modifiers, {
                        name: "eventListeners",
                        enabled: !1
                    }]
                }))
            }
        }

        firstUpdated() {
            const g = (0, Bo.kZ)({defaultModifiers: [...Ro.WX, ...Go]}), A = this.getAnchorElement();
            this.popperInstance = g(A, this.tooltipElement, {
                placement: this.position,
                strategy: "absolute",
                modifiers: No
            }), ["mouseenter", "focus"].forEach(Oe => A.addEventListener(Oe, this.showTooltip)), ["mouseleave", "blur"].forEach(Oe => A.addEventListener(Oe, this.hideTooltip))
        }

        getAnchorElement() {
            return this.anchorElementId ? document.querySelector(`#${this.anchorElementId}`) : this.parentElement
        }

        disconnectedCallback() {
            this.popperInstance.destroy()
        }

        render() {
            return i.dy` <div id="tooltip" role="tooltip">
      <slot></slot>
      <div id="arrow" data-popper-arrow></div>
    </div>`
        }
    };
    us.styles = [Fo], (0, a.__decorate)([(0, d.C)()], us.prototype, "anchorElementId", void 0), (0, a.__decorate)([(0, d.C)()], us.prototype, "position", void 0), (0, a.__decorate)([(0, $.I)("#tooltip")], us.prototype, "tooltipElement", void 0), (0, a.__decorate)([(0, $.I)("#arrow")], us.prototype, "arrowElement", void 0), us = (0, a.__decorate)([(0, t.M)("gu-tooltip")], us);
    let $o = class extends i.oi {
        static get styles() {
            return i.iv`
      :host {
        display: block;
        position: relative;
      }

      gu-ribbon-banner::part(innerContainer) {
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(7))} 0 ${(0, e.asCssProp)((0, n.gridUnits)(10))};
      }

      .will-you-survive-banner__spacer {
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
        box-shadow: inset 0 0 0 1.5px ${(0, e.asCssProp)(r.colors.gold[500])};
        border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
        transform: rotate(-45deg);
        display: none;
      }

      .will-you-survive-banner__spacer::before {
        content: '';
        width: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        height: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        background: ${(0, e.asCssProp)(r.colors.gold[500])};
        border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.5))};
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping["x-small"])}) {
        .statSpacer {
          display: flex;
        }
      }
    `
        }

        render() {
            return i.dy`
      <gu-ribbon-banner>
        <i class="will-you-survive-banner__spacer"></i>

        <gu-heading-text
          size="2x-small"
          .responsiveSize=${[{breakpoint: "small", size: "x-small"}]}
          fillColor="colors.dark.900"
          align="center"
        >
          WILL YOU SURVIVE THE TRIAL OF THE GODS?
        </gu-heading-text>

        <i class="will-you-survive-banner__spacer"></i>

        <slot></slot>
      </gu-ribbon-banner>
    `
        }
    };
    $o = (0, a.__decorate)([(0, t.M)("gu-will-you-survive-banner")], $o);
    let Po = class extends i.oi {
        constructor() {
            super(...arguments), this.values = [], this.selectedIndex = 0, this.itemClicked = (g, A) => {
                this.selectedIndex = A, this.dispatchEvent(new CustomEvent("onItemClicked", {
                    composed: !0,
                    detail: {index: A, value: g}
                }))
            }
        }

        static get styles() {
            return i.iv`
      :host {
        display: flex;
        flex-direction: row;
        border-bottom: 3px solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
        padding-right: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
      }

      gu-tabs-collection-item:not(:last-child) {
        margin-right: ${(0, e.asCssProp)((0, n.gridUnits)(1))};
      }
    `
        }

        render() {
            return this.values ? i.dy`
          ${this.values.map((g, A) => i.dy`<gu-tabs-collection-item
              .selected=${A === this.selectedIndex}
              .firstItem=${0 === A}
              .value="${g}"
              @click=${() => this.itemClicked(g, A)}
            >
            </gu-tabs-collection-item>`)}
        ` : null
        }
    };
    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Array
    })], Po.prototype, "values", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Number
    })], Po.prototype, "selectedIndex", void 0), Po = (0, a.__decorate)([(0, t.M)("gu-tabs-collection")], Po);
    let so = class extends i.oi {
        constructor() {
            super(...arguments), this.value = "", this.selected = !1, this.firstItem = !1
        }

        static get styles() {
            return i.iv`
  :host {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${(0, e.asCssProp)((0, n.gridUnits)(32.5))};
    height: ${(0, e.asCssProp)((0, n.gridUnits)(12.5))};
  }

  :host::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    z-index: -1;
    transform: skew(15deg);
  }

  :host([selected='true'])::after {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
  }
  :host([firstItem='true']) {
    margin-left: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
  }
  :host([firstItem='true'])::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: -6%;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    border-bottom: 3px solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    z-index: -1;
  }

  :host([selected='true'])::before {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
  }
`
        }

        render() {
            return i.dy`
      ${this.selected ? i.dy`<gu-heading-text align="center" size="x-small" fillColor=${r.colors.light[100]}>
            ${this.value}
          </gu-heading-text>` : i.dy`<gu-heading-text align="center" size="x-small" fillColor=${r.colors.gunmetal[500]}>
            ${this.value}
          </gu-heading-text>`}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: String
    })], so.prototype, "value", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], so.prototype, "selected", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: o.b
    })], so.prototype, "firstItem", void 0), so = (0, a.__decorate)([(0, t.M)("gu-tabs-collection-item")], so);
    let oo = class extends i.oi {
        static get styles() {
            return i.iv`
      ${(0, e.asCssProp)((0, e.setBoxSizing)())}

      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      img {
        border: 2px solid rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.light[100]))}, 0.2);
        height: ${(0, e.asCssProp)((0, n.gridUnits)(50))};
        object-fit: cover;
      }

      @media screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping.small)}) {
        img {
          max-width: ${(0, e.asCssProp)((0, n.gridUnits)(58))};
        }

        .description {
          min-height: ${(0, e.asCssProp)((0, n.gridUnits)(42))};
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping.medium)}) {
        img {
          max-width: ${(0, e.asCssProp)((0, n.gridUnits)(75))};
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping.large)}) {
        img {
          max-width: ${(0, e.asCssProp)((0, n.gridUnits)(92))};
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(ne.breakpointSizeMapping["x-large"])}) {
        img {
          max-width: ${(0, e.asCssProp)((0, n.gridUnits)(100))};
        }
      }

      .card {
        border: 1px solid ${(0, e.asCssProp)(r.colors.dark[900])};
        display: flex;
        flex-direction: column;
        & > div {
          display: inline-block;
        }
        max-width: ${(0, e.asCssProp)((0, n.gridUnits)(100))};
      }

      .description {
        background-color: ${(0, e.asCssProp)(r.colors.light[100])};
        color: ${(0, e.asCssProp)(r.colors.dark[900])};
        padding: ${(0, e.asCssProp)((0, n.gridUnits)(3))};
        max-width: ${(0, e.asCssProp)((0, n.gridUnits)(100))};
      }

      .divider {
        height: 5px;
        background: ${(0, e.asCssProp)(r.gradients.gold.horizontal())};
        border-bottom: 1px solid ${(0, e.asCssProp)(r.colors.dark[900])};
        border-top: 1px solid ${(0, e.asCssProp)(r.colors.dark[900])};
      }
    `
        }

        render() {
            return i.dy`
    <div class="card">
      <img class="image" src="${this.imageSrc}" data-test-id="ascension-card-image"></img>
      <div class="divider"></div>
      <div class="description">
        <gu-heading-text
          align="center"
          fillColor="colors.dark.900"
          size="2x-small"
          data-test-id="ascension-card-title"
        >
          ${this.title}
        </gu-heading-text>
        <gu-vertical-space top="medium">
          <gu-paragraph-text align="center" kind="small" fillColor="colors.dark.500" data-test-id="ascension-card-description">
            ${this.description}
          </gu-paragraph-text>
        </gu-vertical-space>
      </div>
    </div>
  `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: String})], oo.prototype, "description", void 0), (0, a.__decorate)([(0, d.C)({type: String})], oo.prototype, "imageSrc", void 0), (0, a.__decorate)([(0, d.C)({type: String})], oo.prototype, "title", void 0), oo = (0, a.__decorate)([(0, t.M)("gu-x2-ascension-card")], oo);
    let To = class extends i.oi {
        static get properties() {
            return {heading: {type: String}, iconLigature: {type: String}, subheading: {type: String}}
        }

        static get styles() {
            return i.iv`
      gu-icon {
        font-size: ${(0, e.asCssProp)((0, n.gridUnits)(27))};
        margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
      }

      header {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      @media screen and (min-width: ${(0, e.asCssProp)(r.breakpoints.breakpointSizeMapping.small)}) {
        gu-icon {
          margin-bottom: ${(0, e.asCssProp)((0, n.gridUnits)(8))};
        }
      }
    `
        }

        render() {
            return i.dy`
      <header>
        ${this.iconLigature ? i.dy` <gu-icon
              fillGradient="gradients.gold.simple"
              fillGradientTarget="bottom"
              iconLigature="${this.iconLigature}"
            ></gu-icon>` : null}
        <gu-heading-text
          align="center"
          fillGradient="gradients.gold.simple"
          size="small"
          .responsiveSize=${[{breakpoint: "small", size: "large"}, {
                breakpoint: "medium",
                size: "x-large"
            }, {breakpoint: "large", size: "2x-large"}]}
        >
          ${this.heading}
        </gu-heading-text>

        ${this.subheading ? i.dy`
      <gu-heading-text
        align="center"
        size="2x-small"
        .responsiveSize=${[{breakpoint: "small", size: "x-small"}]}
        >
          ${this.subheading}
        </gu-heading-text>
      </div>` : null}
      </header>
    `
        }
    };
    To = (0, a.__decorate)([(0, t.M)("gu-x2-section-header")], To);
    let Ao = class extends i.oi {
        constructor() {
            super(...arguments), this.size = "large", this.spinners = {
                small: "/assets/images/loading-spinner/spin-1s-70px.svg",
                medium: "/assets/images/loading-spinner/spin-1s-110px.svg",
                large: "/assets/images/loading-spinner/spin-1s-135px.svg"
            }
        }

        static get properties() {
            return {size: {type: String}}
        }

        render() {
            return i.dy` <img alt="Loading..." src="${this.spinners[this.size]}" /> `
        }
    };
    Ao = (0, a.__decorate)([(0, t.M)("gu-loading-spinner")], Ao);
    let Is = class extends i.oi {
        constructor() {
            super(...arguments), this.items = [], this.open = !1
        }

        connectedCallback() {
            super.connectedCallback(), window.addEventListener("click", g => this.onClick(g)), window.addEventListener("scroll", () => this.onScroll())
        }

        disconnectedCallback() {
            window.removeEventListener("click", g => this.onClick(g)), window.removeEventListener("scroll", () => this.onScroll()), super.disconnectedCallback()
        }

        static get styles() {
            return i.iv`
  :host {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .dropdown-menu--hidden {
    display: none;
  }

  .dropdown-menu-content {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: ${(0, e.asCssProp)((0, n.gridUnits)(5))};
    top: ${(0, e.asCssProp)((0, n.gridUnits)(4))};
    outline: 2px solid ${(0, e.asCssProp)(r.colors.dark[300])};
    border-radius: 2px;
    box-shadow: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} ${(0, e.asCssProp)((0, n.gridUnits)(.5))} ${(0, e.asCssProp)((0, n.gridUnits)(2))}
      rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.black))}, 25%);
    padding: 0;
    margin: 0;
    z-index: ${c.modalLayerZLevel};
  }
`
        }

        selectDropDownItem(g) {
            this.current = g, this.open = !1, this.dispatchEvent(new CustomEvent("onSelect", {
                composed: !0,
                bubbles: !0,
                detail: Object.assign({}, this.current)
            }))
        }

        toggleOpen() {
            setTimeout(() => {
                this.open = !this.open
            })
        }

        onClick(g) {
            !g.composedPath().includes(this) && this.open && (this.open = !1)
        }

        onScroll() {
            this.open && (this.open = !1)
        }

        render() {
            return i.dy`
      <slot name="dropdownControl" data-test-id="dropdown-control" @click=${this.toggleOpen}></slot>
      <ul
        class=${(0, O.$)({"dropdown-menu--hidden": !this.open, "dropdown-menu-content": this.open})}
      >
        ${this.items.map((g, A, X) => i.dy`
              <gu-dropdown-menu-item
                .align=${this.align}
                .item=${g}
                .last=${X.length - 1 === A}
                @click=${() => this.selectDropDownItem(g)}
              ></gu-dropdown-menu-item>
            `)}
      </ul>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: Array})], Is.prototype, "items", void 0), (0, a.__decorate)([(0, d.C)({type: String})], Is.prototype, "align", void 0), (0, a.__decorate)([(0, F.S)()], Is.prototype, "open", void 0), (0, a.__decorate)([(0, F.S)({hasChanged: (z, g) => (null == z ? void 0 : z.value) !== (null == g ? void 0 : g.value)})], Is.prototype, "current", void 0), Is = (0, a.__decorate)([(0, t.M)("gu-dropdown-menu")], Is);
    let ro = class extends i.oi {
        constructor() {
            super(...arguments), this.item = {id: "", value: ""}, this.last = !1
        }

        static get styles() {
            return i.iv`
  :host {
    background: ${(0, e.asCssProp)(r.colors.light[100])};
  }

  .dropdown-menu-item:hover {
    background: ${(0, e.asCssProp)(r.colors.light[300])};
  }

  .dropdown-menu-item {
    display: flex;
    flex-direction: column;
  }

  .dropdown-menu-item__text {
    min-height: ${(0, e.asCssProp)((0, n.gridUnits)(6))};
    min-width: ${(0, e.asCssProp)((0, n.gridUnits)(44))};
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(2))};
    display: block;
  }

  hr.solid {
    width: 100%;
    display: block;
    border: 0;
    border-top: 1px solid ${(0, e.asCssProp)(r.colors.light[300])};
    margin: 0;
    padding: 0;
    transform: scaleX(0.88);
    position: absolute;
  }

  .dropdown-menu-item:hover {
    background: ${(0, e.asCssProp)(r.colors.light[300])};
  }

  .dropdown-menu-item:hover + hr {
    display: none;
  }

  a {
    text-decoration: none;
  }
`
        }

        render() {
            return (0, u.updateColoringVariables)({component: this, fillColorHover: "colors.light.100"}), i.dy`
      <li class="dropdown-menu-item" role="dropdown-menu-item">
        <a href="javascript:void(0)">
          <gu-body-text
            class="dropdown-menu-item__text"
            align=${this.align}
            size="medium"
            fillColor=${r.colors.dark[500]}
          >
            ${this.item.value}
          </gu-body-text>
        </a>
      </li>

      ${this.last ? null : i.dy`<hr class="solid" />`}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: String
    })], ro.prototype, "item", void 0), (0, a.__decorate)([(0, d.C)({type: String})], ro.prototype, "align", void 0), (0, a.__decorate)([(0, d.C)({
        type: Boolean,
        reflect: !0
    })], ro.prototype, "last", void 0), ro = (0, a.__decorate)([(0, t.M)("gu-dropdown-menu-item")], ro)
}, 43977
:
(se, U, s) => {
    "use strict";
    var l = s(70655), v = (s(61517), s(32830)), i = s(86041), t = s(80102), d = s(26532), u = s(65281);
    let n = class extends v.oi {
        static get styles() {
            return v.iv`
      :host {
        display: block;
        width: ${(0, d.asCssProp)((0, t.gridUnits)(7))};
        cursor: pointer;
        height: ${(0, d.asCssProp)((0, t.gridUnits)(7))};
        background: ${(0, d.asCssProp)(u.gradients.apocyan.simple("bottom"))};
        position: relative;
        border-radius: 50%;
      }

      .circular-close-button__background {
        position: absolute;
        left: ${(0, d.asCssProp)((0, t.gridUnits)(.5))};
        right: ${(0, d.asCssProp)((0, t.gridUnits)(.5))};
        top: ${(0, d.asCssProp)((0, t.gridUnits)(.5))};
        bottom: ${(0, d.asCssProp)((0, t.gridUnits)(.5))};
        background: ${(0, d.asCssProp)(u.colors.gunmetal[900])};
        border-radius: 50%;
        display: flex;
      }

      .circular-close-button__icon {
        margin: auto;
        font-size: ${(0, d.asCssProp)((0, t.gridUnits)(4))};
      }
    `
        }

        render() {
            return v.dy`
      <div class="circular-close-button__background">
        <gu-icon
          class="circular-close-button__icon"
          iconLigature="close_x"
          fillGradient=${u.gradients.apocyan.simple("bottom")}
        ></gu-icon>
      </div>
    `
        }
    };
    n = (0, l.__decorate)([(0, i.M)("gu-circular-close-button")], n)
}, 92435
:
(se, U, s) => {
    "use strict";
    var l = s(70655), a = s(32830), v = s(56418), i = s(98539), t = s(26711), d = s(72650);
    const u = a.iv`:host{display:inline-flex;position:relative;min-width:160px;height:45px;line-height:45px;background-color:#464646;cursor:pointer;clip-path:polygon(12.5px 0%, calc(100% - 12.5px) 0%, 100% 50%, calc(100% - 12.5px) 100%, 12.5px 100%, 0% 50%);-webkit-clip-path:polygon(12.5px 0%, calc(100% - 12.5px) 0%, 100% 50%, calc(100% - 12.5px) 100%, 12.5px 100%, 0% 50%)}:host::before{display:block;content:"";position:absolute;top:0px;right:0px;bottom:0px;left:0px;clip-path:polygon(12.5px 0%, calc(100% - 12.5px) 0%, 100% 50%, calc(100% - 12.5px) 100%, 12.5px 100%, 0% 50%);-webkit-clip-path:polygon(12.5px 0%, calc(100% - 12.5px) 0%, 100% 50%, calc(100% - 12.5px) 100%, 12.5px 100%, 0% 50%);z-index:1}:host::after{display:block;content:"";position:absolute;top:2px;right:3px;bottom:2px;left:3px;clip-path:polygon(11px 0%, calc(100% - 11px) 0%, 100% 50%, calc(100% - 11px) 100%, 11px 100%, 0% 50%);-webkit-clip-path:polygon(11px 0%, calc(100% - 11px) 0%, 100% 50%, calc(100% - 11px) 100%, 11px 100%, 0% 50%);z-index:2;background-color:#0f1b27}:host([size=small]){min-width:auto;height:36px;clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%);-webkit-clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)}:host([size=small])::before{clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%);-webkit-clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)}:host([size=small])::after{clip-path:polygon(6.5px 0%, calc(100% - 6.5px) 0%, 100% 50%, calc(100% - 6.5px) 100%, 6.5px 100%, 0% 50%);-webkit-clip-path:polygon(6.5px 0%, calc(100% - 6.5px) 0%, 100% 50%, calc(100% - 6.5px) 100%, 6.5px 100%, 0% 50%)}:host([size=small]) .hex-button{padding:0px 25px;min-width:105px}:host([expand=true]){justify-self:stretch;flex-grow:1}:host([expand=true]) .hex-button{justify-self:stretch;flex-grow:1}:host([loading=true]){user-select:none;pointer-events:none}:host([disabled=true]){cursor:default;user-select:none;pointer-events:none}:host([disabled=true]) .hex-button,:host([disabled=true]) .hex-button--primary{cursor:default;color:#464646;background-color:#272727}:host([type=primary]){background-color:#affaed}:host([type=primary])::before{background:linear-gradient(180deg, #AFFAED 0%, #8BE1E0 50.34%, #54BBCD 100%);background-color:#affaed}:host([type=primary])::after{clip-path:polygon(11.5px 0%, calc(100% - 11.5px) 0%, 100% 50%, calc(100% - 11.5px) 100%, 11.5px 100%, 0% 50%);-webkit-clip-path:polygon(11.5px 0%, calc(100% - 11.5px) 0%, 100% 50%, calc(100% - 11.5px) 100%, 11.5px 100%, 0% 50%)}:host([type=primary]) .hex-button__artwork{user-select:none;pointer-events:none;display:block;position:absolute;z-index:3;top:2px;right:3px;bottom:2px;left:3px;opacity:.7;transition:opacity,background .25s ease-in-out;clip-path:polygon(11.5px 0%, calc(100% - 11.5px) 0%, 100% 50%, calc(100% - 11.5px) 100%, 11.5px 100%, 0% 50%);-webkit-clip-path:polygon(11.5px 0%, calc(100% - 11.5px) 0%, 100% 50%, calc(100% - 11.5px) 100%, 11.5px 100%, 0% 50%)}:host([type=primary]) .hex-button__artwork img{display:block;height:100%}:host([type=primary]) .hex-button__wave{position:absolute;left:50%}:host([type=primary]) .hex-button__wave--top{top:0px;transform:translateX(-294px) translateY(-37px)}:host([type=primary]) .hex-button__wave--bottom{top:0;transform:translateX(-217px) translateY(13px)}:host([type=primary]:hover)::before{background-image:none;background-color:#affaed}:host([type=primary]:hover) .hex-button__artwork{opacity:1;background:linear-gradient(180deg, rgba(175, 250, 237, 0.05) 0%, rgba(84, 187, 205, 0) 100%)}:host([type=primary]:active) .hex-button__artwork{opacity:.8;background:transparent}:host([type=primary]:active) .hex-button__content,:host([type=primary]:active) .hex-button__icon{color:#7192b0}:host([type=primary][loading=true]) .hex-button__loader{background:transparent}:host([type=primary][loading=true]) .hex-button__content,:host([type=primary][loading=true]) .hex-button__icon{opacity:0}:host([type=primary][disabled=true])::before{background:none;background-color:#979797}:host([type=primary][disabled=true])::after{background-color:#0a0a0a}:host([type=primary][disabled=true]) .hex-button{background-color:transparent}:host([type=primary][disabled=true]) .hex-button__icon,:host([type=primary][disabled=true]) .hex-button__content{color:#979797}:host([type=primary][disabled=true]) .hex-button__artwork{filter:grayscale(100%)}:host([type=primary][size=small]){clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%);-webkit-clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)}:host([type=primary][size=small])::after{clip-path:polygon(7px 0%, calc(100% - 7px) 0%, 100% 50%, calc(100% - 7px) 100%, 7px 100%, 0% 50%);-webkit-clip-path:polygon(7px 0%, calc(100% - 7px) 0%, 100% 50%, calc(100% - 7px) 100%, 7px 100%, 0% 50%)}:host([type=primary][size=small]) .hex-button__artwork{clip-path:polygon(7px 0%, calc(100% - 7px) 0%, 100% 50%, calc(100% - 7px) 100%, 7px 100%, 0% 50%);-webkit-clip-path:polygon(7px 0%, calc(100% - 7px) 0%, 100% 50%, calc(100% - 7px) 100%, 7px 100%, 0% 50%)}:host([type=secondary])::before{background:none;background-color:#7192b0}:host([type=secondary])::after{clip-path:polygon(11.5px 0%, calc(100% - 11.5px) 0%, 100% 50%, calc(100% - 11.5px) 100%, 11.5px 100%, 0% 50%);-webkit-clip-path:polygon(11.5px 0%, calc(100% - 11.5px) 0%, 100% 50%, calc(100% - 11.5px) 100%, 11.5px 100%, 0% 50%)}:host([type=secondary]) .hex-button__icon,:host([type=secondary]) .hex-button__content{filter:drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))}:host([type=secondary]:hover)::after{background-color:#1d2f41}:host([type=secondary]:active)::after{background-color:#1d2f41;box-shadow:inset 0px 0px 8px rgba(0,0,0,.75)}:host([type=secondary]:active) .hex-button__icon,:host([type=secondary]:active) .hex-button__content{color:#7192b0}:host([type=secondary][disabled=true])::before{background-image:none;background-color:#464646}:host([type=secondary][disabled=true])::after{background-color:#0a0a0a}:host([type=secondary][disabled=true]) .hex-button__icon,:host([type=secondary][disabled=true]) .hex-button__content{color:#464646}:host([type=secondary][disabled=true]) .hex-button{background-color:#0a0a0a}:host([type=secondary][loading=true][disabled=true]) .hex-button__loader{background-color:#0a0a0a}:host([type=secondary][loading=true]) .hex-button__loader{background-color:#0f1b27}:host([type=secondary][size=small]){clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%);-webkit-clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)}:host([type=secondary][size=small])::after{clip-path:polygon(7px 0%, calc(100% - 7px) 0%, 100% 50%, calc(100% - 7px) 100%, 7px 100%, 0% 50%);-webkit-clip-path:polygon(7px 0%, calc(100% - 7px) 0%, 100% 50%, calc(100% - 7px) 100%, 7px 100%, 0% 50%)}:host([type=special])::before{top:1px;right:1px;bottom:1px;left:1px;background:linear-gradient(180deg, #FFF2D8 0%, #EBC98B 49.48%, #C6A052 100%);clip-path:polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%);-webkit-clip-path:polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)}:host([type=special])::after{top:5px;right:6px;bottom:5px;left:6px;background-color:#1d2f41;clip-path:polygon(9.5px 0%, calc(100% - 9.5px) 0%, 100% 50%, calc(100% - 9.5px) 100%, 9.5px 100%, 0% 50%);-webkit-clip-path:polygon(9.5px 0%, calc(100% - 9.5px) 0%, 100% 50%, calc(100% - 9.5px) 100%, 9.5px 100%, 0% 50%)}:host([type=special]) .hex-button__icon,:host([type=special]) .hex-button__content{background-image:linear-gradient(180deg, #FFF2D8 0%, #EBC98B 49.48%, #C6A052 100%);background-clip:text;color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent}:host([type=special]:hover) .hex-button{background-image:linear-gradient(180deg, #FFF2D8 0%, #EBC98B 49.48%, #C6A052 100%)}:host([type=special]:hover) .hex-button__icon,:host([type=special]:hover) .hex-button__content{color:#0a0a0a;-webkit-text-fill-color:#0a0a0a}:host([type=special]:active) .hex-button{background-image:linear-gradient(180deg, #C6A052 9.27%, #EBC98B 84.5%)}:host([type=special]:active) .hex-button__icon,:host([type=special]:active) .hex-button__content{color:#0a0a0a;-webkit-text-fill-color:#0a0a0a}:host([type=special][disabled=true])::before{background:#979797}:host([type=special][disabled=true])::after{background:#272727}:host([type=special][disabled=true]) .hex-button{background:#0a0a0a}:host([type=special][disabled=true]) .hex-button__icon,:host([type=special][disabled=true]) .hex-button__content{color:#979797;-webkit-text-fill-color:#979797}:host([type=special][size=small]){clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%);-webkit-clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)}:host([type=special][size=small])::before{clip-path:polygon(7.5px 0%, calc(100% - 7.5px) 0%, 100% 50%, calc(100% - 7.5px) 100%, 7.5px 100%, 0% 50%);-webkit-clip-path:polygon(7.5px 0%, calc(100% - 7.5px) 0%, 100% 50%, calc(100% - 7.5px) 100%, 7.5px 100%, 0% 50%)}:host([type=special][size=small])::after{clip-path:polygon(5px 0%, calc(100% - 5px) 0%, 100% 50%, calc(100% - 5px) 100%, 5px 100%, 0% 50%);-webkit-clip-path:polygon(5px 0%, calc(100% - 5px) 0%, 100% 50%, calc(100% - 5px) 100%, 5px 100%, 0% 50%)}:host([type=special][size=small]) .hex-button{clip-path:polygon(3.5px 0%, calc(100% - 3.5px) 0%, 100% 50%, calc(100% - 3.5px) 100%, 3.5px 100%, 0% 50%);-webkit-clip-path:polygon(3.5px 0%, calc(100% - 3.5px) 0%, 100% 50%, calc(100% - 3.5px) 100%, 3.5px 100%, 0% 50%)}.hex-button{cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;line-height:45px;font-size:18px;font-family:Unchained,serif;font-weight:700;text-transform:uppercase;text-decoration:none;color:#f6f6f6;border-radius:0px;background-color:#0a0a0a;padding:0px 32px;margin:7px 8px;min-width:128px;width:100%;z-index:3;clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%);-webkit-clip-path:polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)}.hex-button[disabled]{user-select:none;pointer-events:none}.hex-button.hex-button--icon-right .hex-button__icon{order:1;margin-left:5px;margin-right:0px}.hex-button.hex-button--primary{background-color:transparent;border:none}.hex-button.hex-button--secondary{background-color:transparent;background-image:none;border:none}.hex-button.hex-button--special{background-color:#0a0a0a;border:none;clip-path:polygon(8.5px 0%, calc(100% - 8.5px) 0%, 100% 50%, calc(100% - 8.5px) 100%, 8.5px 100%, 0% 50%);-webkit-clip-path:polygon(8.5px 0%, calc(100% - 8.5px) 0%, 100% 50%, calc(100% - 8.5px) 100%, 8.5px 100%, 0% 50%)}.hex-button__loader{display:flex;align-items:center;justify-content:center;position:absolute;z-index:1;top:0px;left:0px;width:100%;height:100%;background-color:#0a0a0a;border-radius:0px}.hex-button__artwork{display:none}.hex-button__icon{margin-right:5px;color:#f6f6f6}`;

    class n extends a.oi {
        constructor() {
            super(...arguments), this.loading = !1, this.disabled = !1, this.expand = !1, this.iconPosition = "right", this.size = "large", this.type = "secondary", this.target = "_self"
        }

        static get styles() {
            return u
        }

        renderContent() {
            return a.dy`
      ${this.renderLoader()} ${this.renderIcon()}
      <gu-heading-text class="hex-button__content" size="${"large" === this.size ? "2x-small" : "3x-small"}">
        <slot></slot>
      </gu-heading-text>
    `
        }

        renderIcon() {
            return this.icon ? a.dy`<gu-icon iconLigature=${this.icon} class="hex-button__icon"></gu-icon>` : a.dy``
        }

        renderLoader() {
            return this.loading ? a.dy` <div class="hex-button__loader">
      <gu-rectangular-spinner color="grey"></gu-rectangular-spinner>
    </div>` : a.dy``
        }

        renderArtwork() {
            return "primary" !== this.type ? a.dy`` : a.dy`
      <div class="hex-button__artwork">
        <picture class="hex-button__wave hex-button__wave--top">
          <source srcset="/assets/images/hex-button/hex-button--top-wave-art.webp" type="image/webp" />
          <source srcset="/assets/images/hex-button/hex-button--top-wave-art.png" type="image/png" />
          <img src="/assets/images/hex-button/hex-button--top-wave-art.png" />
        </picture>

        <picture class="hex-button__wave hex-button__wave--bottom">
          <source srcset="/assets/images/hex-button/hex-button--bottom-wave-art.webp" type="image/webp" />
          <source srcset="/assets/images/hex-button/hex-button--bottom-wave-art.png" type="image/png" />
          <img src="/assets/images/hex-button/hex-button--bottom-wave-art.png" />
        </picture>
      </div>
    `
        }

        getClassMap() {
            return {
                "hex-button": !0,
                [`hex-button--icon-${this.iconPosition}`]: !!this.iconPosition,
                [`hex-button--size-${this.size}`]: !!this.size,
                [`hex-button--${this.type}`]: !0
            }
        }

        render() {
            return this.href ? a.dy`
        ${this.renderArtwork()}
        <a ?disabled="${this.disabled}" href=${this.href} target=${this.target} class=${(0, i.$)(this.getClassMap())}>
          ${this.renderContent()}
        </a>
      ` : a.dy`
        ${this.renderArtwork()}
        <button ?disabled="${this.disabled}" class=${(0, i.$)(this.getClassMap())}> ${this.renderContent()} </button>
      `
        }
    }

    (0, l.__decorate)([(0, v.C)({
        reflect: !0,
        type: Boolean,
        converter: t.b
    })], n.prototype, "loading", void 0), (0, l.__decorate)([(0, v.C)({
        reflect: !0,
        type: Boolean,
        converter: t.b
    })], n.prototype, "disabled", void 0), (0, l.__decorate)([(0, v.C)({
        reflect: !0,
        type: Boolean,
        converter: t.b
    })], n.prototype, "expand", void 0), (0, l.__decorate)([(0, v.C)()], n.prototype, "iconPosition", void 0), (0, l.__decorate)([(0, v.C)()], n.prototype, "icon", void 0), (0, l.__decorate)([(0, v.C)()], n.prototype, "size", void 0), (0, l.__decorate)([(0, v.C)({reflect: !0})], n.prototype, "type", void 0), (0, l.__decorate)([(0, v.C)()], n.prototype, "href", void 0), (0, l.__decorate)([(0, v.C)()], n.prototype, "target", void 0), customElements.define("gu-hex-button", (0, d.b)(n))
}, 4390
:
(se, U, s) => {
    "use strict";

    function l(d, u, n) {
        u.runTask(() => d.navigate([n]))
    }

    function a(d) {
        window.open(d.url, d._target)
    }

    function i(d, u) {
        return Object.keys(d).reduce((n, e) => -1 !== u.indexOf(d[e].path) || n, !1)
    }

    s.d(U, {pR: () => l, rb: () => a, M0: () => i, Cs: () => t});
    const t = d => new CustomEvent("onExternalNavItemClick", {detail: {navItem: d}, bubbles: !0, composed: !0})
}, 61517
:
(se, U, s) => {
    "use strict";
    var l = s(32830), a = s(5284), v = s(65171), i = s(26532), t = s(65281), d = s(91418);
    customElements.define("gu-icon", class u extends l.oi {
        constructor() {
            super(...arguments), this.iconLigature = "", this.fillGradientTarget = "top"
        }

        static get properties() {
            return {
                iconLigature: {type: String},
                fillColor: {type: String},
                fillGradient: {type: String},
                fillGradientTarget: {type: String}
            }
        }

        static get styles() {
            return l.iv`
      :host {
        display: inline-flex;
        font-weight: 400 !important;
        ${(0, i.asCssProp)(a.uA.enhancedTextRenderingStyles)};
        /*
          Adding fill coloring rules for textFillColor here.
          ${(0, i.asCssProp)(d.fillColoringRules)} didn't allow for the case
          where a fillColor wasn't passed a component input, but was
          controlled by a parent component via css variables.
        */
        color: var(--textFillColor);
        border-color: var(--textFillColor);
      }

      .icon {
        -webkit-user-select: none;
        user-select: none;

        margin: auto;
        ${(0, i.asCssProp)(t.typography.iconTextStyles)};
      }

      :host([fillGradient]) {
        display: inline;
        line-height: 0;
      }

      ${(0, i.asCssProp)(d.fillColoringRules)}
    `
        }

        render() {
            return (0, v.updateColoringVariables)({
                component: this,
                fillColor: this.fillColor,
                fillGradient: this.fillGradient,
                fillGradientTarget: this.fillGradientTarget
            }), l.dy`<i class="icon">${this.iconLigature}</i>`
        }
    })
}, 40760
:
(se, U, s) => {
    "use strict";
    s.d(U, {o: () => e});
    var l = s(70655), v = (s(43337), s(32830)), i = s(56418), t = s(86041), d = s(26532), u = s(65281), n = s(37745);
    let e = class extends n.j {
        constructor() {
            super(...arguments), this.size = "normal"
        }

        static get styles() {
            return v.iv`
      ${super.styles}

      :host {
        display: block;
        line-height: 0;
        margin: 8px 0 16px 0;
      }

      :host([inline]) {
        display: inline-block;
        margin: 0;
      }

      .checkbox__input {
        cursor: pointer;
        display: inline-block;
        width: 20px;
        height: 20px;
        appearance: none;
        border-radius: 2px;
        border: 1px solid ${(0, d.asCssProp)(u.colors.gunmetal[100])};
        background-color: ${(0, d.asCssProp)(u.colors.gunmetal[900])};
        margin: 0 8px 0 0;
        transition: background-size 0.2s ease, border-color 0.2s ease, padding 0.2s ease;
        outline: none;
        background-size: 0 0;
        flex: 0 0 auto;
      }

      .checkbox__input:focus {
        border-color: ${(0, d.asCssProp)(u.colors.apocyan[300])};
      }

      :host([size='large']) .checkbox__input {
        width: 24px;
        height: 24px;
        padding: 11px;
      }

      .checkbox__input:checked {
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 3L4 5L8 0L10 1L4 8L0 4L2 3Z' fill='%238BE1E0'%3E%3C/path%3E%3C/svg%3E");
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center;
        border-color: ${(0, d.asCssProp)(u.colors.apocyan[300])};
      }

      .checkbox__input:indeterminate {
        background-image: linear-gradient(
          0deg,
          ${(0, d.asCssProp)(u.colors.gunmetal[900])} 45%,
          ${(0, d.asCssProp)(u.colors.apocyan[300])} 45%,
          ${(0, d.asCssProp)(u.colors.apocyan[300])} 55%,
          ${(0, d.asCssProp)(u.colors.gunmetal[900])} 55%
        );
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center;
        border-color: ${(0, d.asCssProp)(u.colors.apocyan[300])};
      }

      .checkbox__label {
        display: flex;
        place-content: center stretch;
        place-items: center flex-start;
        flex: 1 0 auto;
      }

      .checkbox__input:focus {
        box-shadow: 0 0 6px ${(0, d.asCssProp)(u.colors.apocyan[300])}, 0 0 2px ${(0, d.asCssProp)(u.colors.apocyan[300])} inset;
      }
    `
        }

        getInputHandler(b) {
            return P => {
                P.stopPropagation(), this.updateValue(b, P.target.checked), this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}}))
            }
        }

        onChange(b) {
            b.stopPropagation(), this.dispatchEvent(new CustomEvent("change", {detail: {value: this.value}}))
        }

        updateValue(b, P) {
            this.value = P
        }

        activate() {
            this.renderRoot.querySelector("input").click()
        }

        focus() {
            this.renderRoot.querySelector("input").focus()
        }

        unfocus(b) {
            b.x > 0 && b.y > 0 && b.target.blur()
        }

        render() {
            return v.dy`
      <label class="checkbox__label">
        <input
          type="checkbox"
          class="checkbox__input"
          @input=${this.getInputHandler(!0)}
          @change=${this.onChange}
          @click=${this.unfocus}
          .checked=${this.value}
          .indeterminate="${void 0 === this.value}"
          .disabled=${this.disabled}
          data-test-id="checkbox-native-element"
        />
        <slot> </slot>
      </label>
    `
        }
    };
    (0, l.__decorate)([(0, i.C)()], e.prototype, "size", void 0), e = (0, l.__decorate)([(0, t.M)("gu-checkbox")], e)
}, 37745
:
(se, U, s) => {
    "use strict";
    s.d(U, {j: () => t});
    var l = s(70655), a = s(32830), v = s(56418), i = s(7302);

    class t extends a.oi {
        constructor() {
            super(...arguments), this.disabled = !1, this.valid = void 0, this.dirty = !1, this.status = "initial", this.keyHandlers = {Escape: () => this.reset()}
        }

        static get styles() {
            return a.iv`
      :host([disabled]) {
        filter: grayscale(100%);
      }
    `
        }

        firstUpdated(u) {
            this.initialValue = this.value, this.dispatchEvent(new CustomEvent("registerFormControl", {
                detail: {control: this},
                bubbles: !0,
                composed: !0
            })), super.firstUpdated(u)
        }

        connectedCallback() {
            super.connectedCallback(), this.addEventListener("keyup", this.handleKey), this.addEventListener("input", this.setDirty), this.addEventListener("focusin", this.notifyFocus)
        }

        disconnectedCallback() {
            super.disconnectedCallback(), this.removeEventListener("keyup", this.handleKey), this.removeEventListener("input", this.setDirty), this.removeEventListener("focusin", this.notifyFocus)
        }

        notifyFocus() {
            this.dispatchEvent(new CustomEvent("focus", {detail: {control: this}, bubbles: !0, composed: !0}))
        }

        setDirty() {
            this.dirty = !0
        }

        update(u) {
            this.status = this.disabled ? "disabled" : this.dirty ? void 0 === this.valid ? "initial" : this.valid ? "valid" : "invalid" : "initial", super.update(u)
        }

        handleKey(u) {
            if (this.disabled) return;
            const n = this.keyHandlers[u.code];
            n && n(u)
        }

        reset() {
            this.value = this.initialValue, this.dirty = !1
        }
    }

    (0, l.__decorate)([(0, v.C)()], t.prototype, "name", void 0), (0, l.__decorate)([(0, v.C)()], t.prototype, "value", void 0), (0, l.__decorate)([(0, v.C)({
        reflect: !0,
        type: Boolean
    })], t.prototype, "disabled", void 0), (0, l.__decorate)([(0, v.C)()], t.prototype, "valid", void 0), (0, l.__decorate)([(0, i.S)()], t.prototype, "dirty", void 0), (0, l.__decorate)([(0, i.S)()], t.prototype, "status", void 0)
}, 22249
:
(se, U, s) => {
    "use strict";
    var l = s(70655), v = (s(43337), s(32830)), i = s(30252), t = s(86041);
    let d = class extends v.oi {
        constructor() {
            super(...arguments), this.controls = []
        }

        static get styles() {
            return v.iv`
      :host {
        display: block;
      }
    `
        }

        connectedCallback() {
            super.connectedCallback(), this.addEventListener("registerFormControl", this.registerControl), this.addEventListener("implicitSubmit", this.handleSubmissionRequest), this.addEventListener("focus", this.trackFocus)
        }

        disconnectedCallback() {
            super.disconnectedCallback(), this.removeEventListener("registerFormControl", this.registerControl), this.removeEventListener("implicitSubmit", this.handleSubmissionRequest), this.removeEventListener("focus", this.trackFocus)
        }

        trackFocus(n) {
            this.focussed = n.detail.control
        }

        registerControl(n) {
            n.stopPropagation(), this.controls.push(n.detail.control)
        }

        handleSubmissionRequest(n) {
            n.stopPropagation();
            const e = this.findInvalidControl();
            e ? e.activate() : this.submit()
        }

        findInvalidControl(n = 0) {
            return this.controls.slice(n).find(e => !1 === e.valid)
        }

        submit() {
            this.dispatchEvent(new CustomEvent("submit", {detail: {values: this.controls.reduce((n, e) => (n[e.name] = e.value, n), {})}}))
        }

        render() {
            return v.dy`<slot></slot>`
        }

        nextInvalid() {
            const n = this.controls.findIndex(r => r === this.focussed);
            let e = this.findInvalidControl(n + 1);
            e || (e = this.findInvalidControl()), e && e.focus()
        }
    };
    (0, l.__decorate)([(0, i.v)("", !0)], d.prototype, "slotted", void 0), d = (0, l.__decorate)([(0, t.M)("gu-form")], d)
}, 90473
:
(se, U, s) => {
    "use strict";
    s.d(U, {M: () => S});
    var l = s(70655), i = (s(43337), s(61517), s(32830)), t = s(56418), d = s(38872), u = s(86041), n = s(26532),
        e = s(65281), r = s(37745);
    const b = {
        email: "email",
        phone: "tel",
        name: "text",
        search: "search",
        text: "text",
        url: "url",
        number: "number"
    }, P = {invalid: "alert_triangle", valid: "checkbox_tick", initial: ""};
    let S = class extends r.j {
        constructor() {
            super(...arguments), this.size = "normal", this.type = "text", this.placeholder = "", this.keyHandlers = {
                Escape: () => this.reset(),
                Enter: () => this.dispatchEvent(new CustomEvent("implicitSubmit", {
                    detail: {control: this},
                    bubbles: !0,
                    composed: !0
                }))
            }
        }

        static get styles() {
            return i.iv`
      ${super.styles}

      :host {
        display: flex;
        margin: 8px 0 16px 0;
        position: relative;
      }

      .input__input {
        appearance: none;
        border: 1px solid ${(0, n.asCssProp)(e.colors.gunmetal[100])};
        background: transparent;
        display: inline-block;
        height: 26px;
        border-radius: 2px;
        padding: 4px 28px 4px 8px;
        transition: background-color 0.2s ease, border-color 0.2s ease, padding 0.2s ease;
        flex: 1 1 auto;
        outline: none;
        color: ${(0, n.asCssProp)(e.colors.light[100])};
        font-size: 16px;
        background: ${(0, n.asCssProp)(e.colors.gunmetal[900])};
      }

      .input__input::selection {
        background-color: ${(0, n.asCssProp)(e.colors.gunmetal[100])};
        color: ${(0, n.asCssProp)(e.colors.light[100])};
      }

      .input__input::placeholder {
        color: ${(0, n.asCssProp)(e.colors.light[700])};
      }

      .input__input--status-initial {
        padding-right: 8px;
      }

      .input__icon {
        position: absolute;
        display: flex;
        top: 0;
        right: 0;
        width: 36px;
        height: 36px;
        font-size: 24px;
        place-content: center;
        place-items: center;
        color: ${(0, n.asCssProp)(e.colors.gunmetal[100])};
        transition: color 0.2s ease;
        pointer-events: none;
      }

      :host(:focus-within) .input__input {
        border-color: ${(0, n.asCssProp)(e.colors.apocyan[300])};
      }

      :host(:focus-within) .input__icon {
        color: ${(0, n.asCssProp)(e.colors.apocyan[300])};
      }

      .input__icon--status-initial {
        opacity: 0;
      }

      .input__input--status-invalid,
      :host(:focus-within) .input__input--status-invalid {
        border-color: ${(0, n.asCssProp)(e.colors.alert)};
      }

      .input__icon--status-invalid,
      :host(:focus-within) .input__icon--status-invalid {
        color: ${(0, n.asCssProp)(e.colors.alert)};
      }

      :host([size='large']) .input__input {
        height: 30px;
        font-size: 16px;
        padding: 4px 36px 4px 8px;
      }

      :host([size='large']) .input__icon {
        height: 38px;
        width: 38px;
        font-size: 28px;
      }
    `
        }

        onChange() {
            this.dispatchEvent(new CustomEvent("change", {detail: {value: this.value}}))
        }

        onInput(w) {
            this.value = w.target.value, w.stopPropagation(), this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}}))
        }

        activate() {
            var w;
            null === (w = this.input) || void 0 === w || w.focus()
        }

        focus() {
            var w;
            null === (w = this.input) || void 0 === w || w.focus()
        }

        getInputType() {
            return b[this.type]
        }

        renderIcon() {
            return i.dy`
      <gu-icon class="input__icon input__icon--status-${this.status}" iconLigature=${P[this.status]}></gu-icon>
    `
        }

        render() {
            var w;
            return i.dy`
      <input
        type=${this.getInputType()}
        .value=${null !== (w = this.value) && void 0 !== w ? w : ""}
        class="input__input input__input--status-${this.status}"
        @input="${this.onInput}"
        @change=${this.onChange}
        placeholder=${this.placeholder}
        .disabled=${this.disabled}
        data-test-id="input-native-element"
      />
      ${this.renderIcon()}
    `
        }
    };
    (0, l.__decorate)([(0, t.C)()], S.prototype, "size", void 0), (0, l.__decorate)([(0, t.C)()], S.prototype, "type", void 0), (0, l.__decorate)([(0, t.C)()], S.prototype, "placeholder", void 0), (0, l.__decorate)([(0, d.I)(".input__input")], S.prototype, "input", void 0), S = (0, l.__decorate)([(0, u.M)("gu-input")], S)
}, 85353
:
(se, U, s) => {
    "use strict";
    var l = s(70655), v = (s(43337), s(32830)), i = s(56418), t = s(30252), d = s(86041), u = s(26532), n = s(65281);
    let e = class extends v.oi {
        constructor() {
            super(...arguments), this.errors = [], this.enabled = !1
        }

        static get styles() {
            return v.iv`
      :host {
        display: block;
        cursor: default;
        pointer-events: all;
        color: ${(0, u.asCssProp)(n.colors.alert)};
        margin: -12px 0 0 0;
        padding: 0 0 16px 0;
      }

      ::slotted(*) {
        display: block;
        max-height: 0;
        opacity: 0;
        transition: max-height 0.2s ease, opacity 0.2s ease;
        overflow: hidden;
      }

      ::slotted(.validation-errors--active) {
        max-height: 1.4em;
        opacity: 1;
      }
    `
        }

        updated(b) {
            super.updated(b), b.has("errors") && this.updateErrors()
        }

        updateErrors() {
            Promise.resolve().then(() => {
                !this.slotted || this.slotted.forEach(b => b.classList.toggle("validation-errors--active", !(!this.enabled || !this.errors.find(P => P === b.getAttribute("key")))))
            })
        }

        render() {
            return v.dy`<slot @slotchange=${this.updateErrors()}></slot>`
        }
    };
    (0, l.__decorate)([(0, i.C)()], e.prototype, "errors", void 0), (0, l.__decorate)([(0, i.C)()], e.prototype, "enabled", void 0), (0, l.__decorate)([(0, t.v)("", !0, "[key]")], e.prototype, "slotted", void 0), e = (0, l.__decorate)([(0, d.M)("gu-validation-errors")], e)
}, 90004
:
(se, U, s) => {
    "use strict";
    var l = s(70655), i = (s(51256), s(52102), s(32830)), t = s(56418), d = s(86041), u = s(65281), n = s(65171),
        e = s(80102), r = s(26532);
    const b = (0, r.asCssProp)((0, e.gridUnits)(11)), P = i.iv`
  ${(0, r.asCssProp)((0, r.setBoxSizing)())}

  :host {
    display: flex;
    width: 100%;
    cursor: pointer;
    padding: ${(0, r.asCssProp)((0, e.gridUnits)(5))} 0 0;
  }

  .innerContainer {
    margin: auto;
    width: 100%;
    padding-bottom: 140%;
    position: relative;
  }

  .itemImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .itemImage--cryptoKittyHead,
  .itemImage--cryptoKitty {
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .itemImage--cryptoKitty {
    width: 85%;
    height: 85%;
  }

  .colorStrip {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.5%;
    background: ${(0, r.asCssProp)(u.colors.quality.plain)};
    box-shadow: 0px 1px 2px rgba(${(0, r.asCssProp)((0, n.hexToCssRgbString)(u.colors.dark[900]))}, 0.5);
  }

  .gradientSkrim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 0 1px rgba(${(0, r.asCssProp)((0, n.hexToCssRgbString)(u.colors.light[100]))}, 0.3);
    background: linear-gradient(
      to top,
      rgba(${(0, r.asCssProp)((0, n.hexToCssRgbString)(u.colors.dark[900]))}, 1) 0%,
      rgba(${(0, r.asCssProp)((0, n.hexToCssRgbString)(u.colors.dark[900]))}, 0) 70%
    );
  }

  .countDisplay {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: ${(0, r.asCssProp)((0, e.gridUnits)(-5))};
    transform: translate(-50%, 0);
    width: ${b};
    height: ${b};
    line-height: ${b};
    background: url('/assets/images/ui-embellishments/ui--count-background-diamonds.svg') center no-repeat;
    background-size: contain;
  }

  .countDisplay__x {
    font-weight: normal;
    text-transform: none;
  }

  .textFields {
    position: absolute;
    bottom: ${(0, r.asCssProp)((0, e.gridUnits)(5))};
    left: 0;
    width: 100%;
    text-align: center;
    padding: 0 ${(0, r.asCssProp)((0, e.gridUnits)(4))};
  }

  .textFields__qualityName {
    text-shadow: 0px ${(0, r.asCssProp)((0, e.gridUnits)(1))} ${(0, r.asCssProp)((0, e.gridUnits)(1))}
      rgba(${(0, r.asCssProp)((0, n.hexToCssRgbString)(u.colors.dark[900]))}, 0.5);
  }

  .textFields__qualityName,
  .textFields__itemName {
    display: block;
  }

  .textFields__qualityName {
    margin-bottom: ${(0, r.asCssProp)((0, e.gridUnits)(1))};
  }

  /*
    @NOTE: style for various UI states ...
  */
  :host(.hideCount) {
    padding: 0;
  }

  :host(:hover) .gradientSkrim {
    box-shadow: inset 0 0 0 ${(0, r.asCssProp)((0, e.gridUnits)(.25))} rgba(${(0, r.asCssProp)((0, n.hexToCssRgbString)(u.colors.apocyan[300]))}, 1);
  }

  :host(.noAspectRatio) {
    height: 100%;
  }

  :host(.noAspectRatio) .innerContainer {
    padding-bottom: 0%;
    height: 100%;
  }

  :host(.notOwned) .itemImage,
  :host([count='0']) .itemImage {
    opacity: 0.3;
  }

  :host(.equipped) .gradientSkrim {
    box-shadow: inset 0 0 0 ${(0, r.asCssProp)((0, e.gridUnits)(.5))} rgba(${(0, r.asCssProp)((0, n.hexToCssRgbString)(u.colors.apocyan[300]))}, 1);
  }

  :host(.hideBorder) .gradientSkrim {
    box-shadow: none;
  }
`;
    s(29939), s(28917);
    let O = class extends i.oi {
        static get styles() {
            return P
        }

        renderText() {
            var M, o, h, C;
            if (this.hideText) return i.dy``;
            const T = (null === (o = null === (M = this.board) || void 0 === M ? void 0 : M.class_properties) || void 0 === o ? void 0 : o.quality) || (null === (C = null === (h = this.board) || void 0 === h ? void 0 : h.class_properties) || void 0 === C ? void 0 : C.effort),
                K = this.trinket ? this.trinket.name : this.board ? this.board.name : "";
            return i.dy`
      <i class="gradientSkrim"></i>
      <div class="textFields">
        <gu-simple-text class="textFields__qualityName" kind="tag" fillColor=${u.colors.light[100]}>
          ${T}
        </gu-simple-text>
        <gu-heading-text class="textFields__itemName" size="2x-small" fillGradient=${u.gradients.gold.simple()}>
          ${K}
        </gu-heading-text>
      </div>
    `
        }

        renderCount() {
            var M, o;
            let h;
            return !this.hideCount && void 0 !== this.count && (h = (null === (M = this.trinket) || void 0 === M ? void 0 : M.owned) || (null === (o = this.board) || void 0 === o ? void 0 : o.owned) ? this.count : 0), this.hideCount || void 0 === h ? i.dy`` : i.dy`
        <gu-simple-text class="countDisplay" align="center" kind="micro" data-test-id="loadout-part-count">
          x<strong>${Math.min(h, 99)}</strong>${h > 99 ? "+" : null}
        </gu-simple-text>
      `
        }

        render() {
            var M, o, y;
            return this.noAspectRatio ? this.classList.add("noAspectRatio") : this.classList.remove("noAspectRatio"), (null === (M = this.trinket) || void 0 === M ? void 0 : M.owned) || (null === (o = this.board) || void 0 === o ? void 0 : o.owned) ? this.classList.remove("notOwned") : this.classList.add("notOwned"), this.equipped ? this.classList.add("equipped") : this.classList.remove("equipped"), this.hideText ? this.classList.add("hideText") : this.classList.remove("hideText"), this.hideCount ? this.classList.add("hideCount") : this.classList.remove("hideCount"), this.hideBorder ? this.classList.add("hideBorder") : this.classList.remove("hideBorder"), i.dy`
      <div class="innerContainer">
        ${this.trinket ? ((y, M) => "Good Kitty Statue" === y.name ? ((y, M) => {
                var o;
                let h = "#6B6B70", C = "#B1AEB9", T = "#E1E1E1";
                return (null === (o = null == y ? void 0 : y.properties) || void 0 === o ? void 0 : o.fur_color) && (h = y.properties.fur_color, C = y.properties.belly_color, T = y.properties.eyes_color), M ? i.dy`
      <gu-regular-crypto-kitty-head
        class="itemImage itemImage--trinket itemImage--cryptoKittyHead"
        .furColor=${h}
        .bellyColor=${C}
        .eyeColor=${T}
        data-test-id="loadout-part-trinket"
      ></gu-regular-crypto-kitty-head>
    ` : i.dy`
    <gu-regular-crypto-kitty
      class="itemImage itemImage--trinket itemImage--cryptoKitty"
      .furColor=${h}
      .bellyColor=${C}
      .eyeColor=${T}
      data-test-id="loadout-part-trinket"
    ></gu-regular-crypto-kitty>
  `
            })(y, M) : i.dy`<img
    class="itemImage itemImage--trinket"
    src="https://images.godsunchained.com/collectables/trinkets/${y.proto}--preview.webp"
    alt=""
    data-test-id="loadout-part-trinket"
  />`)(this.trinket, this.noAspectRatio) : null}
        ${this.board ? (y = this.board.proto, i.dy`
  <img
    class="itemImage itemImage--board"
    src="https://images.godsunchained.com/collectables/boards/${y}--thumb.webp"
    alt=""
    data-test-id="loadout-part-board"
  />
  <i class="colorStrip"></i>
`) : null} ${this.renderCount()} ${this.renderText()}
      </div>
    `
        }
    };
    (0, l.__decorate)([(0, t.C)({
        type: Number,
        reflect: !0
    })], O.prototype, "count", void 0), (0, l.__decorate)([(0, t.C)({type: Object})], O.prototype, "board", void 0), (0, l.__decorate)([(0, t.C)({type: Object})], O.prototype, "trinket", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], O.prototype, "equipped", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], O.prototype, "noAspectRatio", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], O.prototype, "hideText", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], O.prototype, "hideCount", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], O.prototype, "hideBorder", void 0), O = (0, l.__decorate)([(0, d.M)("gu-loadout-part")], O)
}, 21960
:
(se, U, s) => {
    "use strict";
    var l = s(70655), a = s(32830), v = s(86041), i = s(80102), t = s(26532), d = s(65281);
    let u = class extends a.oi {
        constructor() {
            super(...arguments), this.goldBorder = null
        }

        static get properties() {
            return {goldBorder: {type: String}}
        }

        static get styles() {
            return a.iv`
      :host {
        position: absolute !important;
        height: 100%;
        width: 100%;
        background: ${(0, t.asCssProp)(d.gradients.gunmetal.mirror("left"))};
      }

      .border {
        border: ${(0, t.asCssProp)((0, i.gridUnits)(.5))} solid ${(0, t.asCssProp)(d.colors.gunmetal[500])};
        height: 100%;
        margin-top: ${(0, t.asCssProp)((0, i.gridUnits)(-.5))};
        position: relative;
      }

      .borderGoldTop:before {
        content: '';
        display: block;
        position: absolute;
        width: calc(100% - ${(0, t.asCssProp)((0, i.gridUnits)(1))});
        left: ${(0, t.asCssProp)((0, i.gridUnits)(-.5))};
        top: ${(0, t.asCssProp)((0, i.gridUnits)(-.5))};
        border: ${(0, t.asCssProp)((0, i.gridUnits)(1))} solid;
        border-image-source: ${(0, t.asCssProp)(d.gradients.gold.mirror("right"))};
        border-image-slice: 1;
        border-image-width: ${(0, t.asCssProp)((0, i.gridUnits)(1))} 0 0 0;
      }
    `
        }

        render() {
            return a.dy`<div class="border ${"top" === this.goldBorder ? "borderGoldTop" : ""}"></div>`
        }
    };
    u = (0, l.__decorate)([(0, v.M)("gu-modal-background")], u)
}, 29939
:
(se, U, s) => {
    "use strict";
    var l = s(70655), a = s(32830), v = s(56418), i = s(86041), t = s(26532), d = s(65281);
    let u = class extends a.oi {
        static get styles() {
            return a.iv`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
      }

      svg {
        flex: 1;
        max-height: 100%;
        max-width: 100%;
      }
    `
        }

        render() {
            return a.YP`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204 240">
        <defs>
          <style>
            .furColor {
              fill: ${this.furColor};
            }

            .eyeColor {
              fill: ${this.eyeColor};
            }

            .bellyColor {
              fill: ${this.bellyColor};
            }

            .outlineColor {
              fill: ${(0, t.asCssProp)(d.colors.black)};
              fill-rule: evenodd;
            }
          </style>
        </defs>
        <path
          class="furColor"
          d="M143,209.9c71.5-8.69,66.29-85.92,29.35-129.73,1.14-5-.43-8.14-2.22-12.21-8.7-19.79-9.33-42.93-9.33-60.12a2.57,2.57,0,0,0-3.59-2.53c-13.6,6.29-34.1,29-36.52,44.34-1.45-.11-2.92-.17-4.39-.17-10.13,0-22.78.14-35.51,2.72-9.71-13.55-36.7-39.3-54.08-46a2.78,2.78,0,0,0-3.67,2.88c.34,11.36-1.94,22.37-4.2,33.35-4.29,20.78-8.55,41.43,5,64a5.64,5.64,0,0,0,.62.85A137.93,137.93,0,0,0,21.32,138,80.06,80.06,0,0,0,23,154.35C28.8,193.72,21.32,221.87,13,240H138.1C138.47,227.09,140.14,216.55,143,209.9Z"
        />
        <path class="eyeColor" d="M159.46,111.74l4.6,23.06,18.66-7.22,5.26-19L180.5,90.33l-13.31,6Z" />
        <path class="eyeColor" d="M76.19,133.35l-19.26-23L88.85,98.88l26.66,11.45L126,139.14l-24.1,3Z" />
        <path class="eyeColor" d="M140.43,150.43,142,154.9l11.69,8.49,3.47-.52s5.34-9.08,7.52-13.16l-2.09-3.27Z" />
        <path
          class="bellyColor"
          d="M153.8,60c-2.17-7.88-3.08-23.49,6.54-30.12,1.07,0,1.53,4.45,2,8.75.17,1.56.32,3.1.51,4.4.08.59.16,1.21.24,1.88a60.86,60.86,0,0,0,1.09,6.71A8.17,8.17,0,0,1,173,54a8.75,8.75,0,0,0-4.83,2.94,9.1,9.1,0,0,1-1.67,1.56c2.47-.77,5.31-.14,7.5,4a4,4,0,0,0-2.78,1.09,2.84,2.84,0,0,1-2.67.79c2.45.62,3.61,2.19,3.45,3.12a2.22,2.22,0,0,0-1.89.4c.41.87.85,1.77,1.31,2.69,1.83,3.66,1.69,5.17,1.29,6.78C166.65,70.36,160.05,64.17,153.8,60Z"
        />
        <path
          class="bellyColor"
          d="M42,51c-3.63-7.23-7.36-14.66-11.8-17.73a1,1,0,0,0-1.49.78c-.37,3.48-2,7.21-3.83,11.42C22.6,50.77,20,56.8,19.05,64.06A22.54,22.54,0,0,0,10.5,66.5a27.43,27.43,0,0,1,3.67,3.11,28.69,28.69,0,0,0,4.71,3.87c0,.19,0,.38.05.57-2.71.25-5.55,1.59-6.43,6.45a9.61,9.61,0,0,1,4.69.14,12,12,0,0,0,3,.34c.06.24.12.48.19.72-2.65,2.31-3.3,5-2.88,5.8a5.25,5.25,0,0,1,4.68-.31A75.85,75.85,0,0,0,28,99c1.91-4.67,11.17-21.5,24.25-29.94a1.34,1.34,0,0,0,0-2.1C48.6,64.16,45.35,57.69,42,51Z"
        />
        <path
          class="outlineColor"
          d="M101.91,142.1l-25.72-8.75-19.26-23L88.85,98.88l26.66,11.45L126,139.14Zm-22.2-13.89L67.05,113.07l21.6-7.75,22.11,9.5,7,19.29L102.54,136Z"
        />
        <path
          class="outlineColor"
          d="M163.78,143.69l3.79,5.91-.69,1.29c-1.11,2.09-3,5.41-4.62,8.18l-2.08,3.58-.64,1.08-.84,1.43-.91.14.25,10.17,10.56,6.71a1.87,1.87,0,0,1,.49,2.62,1.93,1.93,0,0,1-2.64.75l-9.85-6.26-13.29,11.78a1.94,1.94,0,0,1-2.66-.39,1.85,1.85,0,0,1,0-2.6l13.41-11.88-.25-10.3L153,166l-13.15-9.55-2.79-8Zm-7.92,16.43-.26.45-1.28.19-10.23-7.42-.33-1,17.62-3.18.39.62c-1.07,2-2.54,4.5-3.84,6.75C157.13,158,156.4,159.21,155.86,160.12Z"
        />
        <path
          class="outlineColor"
          d="M146.64,214.45c-1.69,5.11-4,17.05-3.14,25.55H136c-.5-6.5.66-14.46,1.55-19.26-21.53,2.62-58.9-8.61-71.69-15.82q-4-1.57-7.73-3.44l1.33.42h0c7.27,2.35,33.35,10.77,71.56,7.1q5.43-.36,11.08-1l.58-.06c1.1-.14,2.17-.28,3.23-.45C157.3,205.7,166.45,202,173.66,197a49.09,49.09,0,0,0,11.72-11.44,50,50,0,0,0,3.83-6.14l.07-.14.05-.1,0-.06c.65-1.25,1.25-2.52,1.8-3.82a62.17,62.17,0,0,0,4.36-16.93c0-.4.1-.79.14-1.2q.24-2.4.33-4.86a96,96,0,0,0-3.86-29.69c-1-3.6-2.24-7.19-3.64-10.72-.28-.7-.56-1.41-.86-2.11l-4.91,17.78-18.66,7.22-4.6-23.06,7.73-15.45L178,91.44q-2.13-3.33-4.49-6.5c-1.32-1.77-2.69-3.51-4.11-5.18l-.06-.08c-1.56-1.85-3.18-3.63-4.84-5.34-12.86-13.2-28.62-22-45.55-22.79-.88,0-1.76-.07-2.65-.07a199.22,199.22,0,0,0-29.21,1.65q-2.94.43-5.9,1l-1.27.25-.76-1C74.45,46.75,65.39,37,55.32,28.13S34.35,11.28,26,8.07a.57.57,0,0,0-.59.1,1.07,1.07,0,0,0-.36.86c.34,11.59-2,22.8-4.22,33.7l0,.11a215.77,215.77,0,0,0-3.68,21.45,19.89,19.89,0,0,0-2.05.45,20.52,20.52,0,0,0-2,.63l-.09,0a27.16,27.16,0,0,0-2.52,1.1,21.89,21.89,0,0,1,3.44,2.88l.76.73,0,0c.65.6,1.31,1.2,2,1.75,0,.89,0,1.79,0,2.68a6.06,6.06,0,0,0-3,2.63A8.45,8.45,0,0,0,13,78.64a2.47,2.47,0,0,0-.1.29,10.92,10.92,0,0,0-.39,1.57A6.84,6.84,0,0,1,15,80.29a18.87,18.87,0,0,1,2,.32q.26,2.31.69,4.62a3.12,3.12,0,0,0-.25,2.27,6.31,6.31,0,0,1,.66-.29,61.43,61.43,0,0,0,7.38,18.25,4.52,4.52,0,0,0,.4.56l.67.76-.22,1a130,130,0,0,0-3,25c0,1.69-.08,3.42-.08,5.18,0,2.12.08,4.2.23,6.22a74.67,74.67,0,0,0,1.36,9.74V154h0q.38,1.73.81,3.39c.13,2.13.26,4.13.38,6C28.65,187.86,28,217,17.5,240H8c8.5-14.5,15.68-46.52,10-84.77A84.8,84.8,0,0,1,16.32,138a146.59,146.59,0,0,1,2.8-29.74,68,68,0,0,1-8.29-22.06L6.14,87.52l1.44-7.91a14.77,14.77,0,0,1,2.09-5.48c0-.64,0-1.27,0-1.91a11.73,11.73,0,0,0-1.82-1.48L.29,66l8-4c.74-.37,1.47-.7,2.21-1,.82-6.64,2.17-13.16,3.47-19.48l0-.12c2.29-11.07,4.42-21.52,4.1-32.19-.14-4.79,4.51-10,10.46-7.7C38.09,5.23,49.75,13.85,60,22.88a193.53,193.53,0,0,1,23,23.83c12.19-2.12,24-2.23,33.38-2.23h.49c2.46-7.91,8-16.4,14.16-23.63C138.32,12.2,147.4,4.34,155.13.77a7.35,7.35,0,0,1,7.46.69,7.91,7.91,0,0,1,3.22,6.21c0,.38,0,1.16,0,2.26-.1,5.88-.36,21.08,2.49,36.58.35,0,.7.09,1.06.16a12.57,12.57,0,0,1,7.42,4l5.12,5.84L177.07,58a17.92,17.92,0,0,1,1.35,2.16l3.75,7.09-5.15.16a6.52,6.52,0,0,1-.1,1l-.3,1.69a20.37,20.37,0,0,1,1,8.71c17.69,22.75,28,53.44,24.88,80.16-1.59,13.8-6.76,26.71-16.52,36.76C176.75,205.22,163.72,211.85,146.64,214.45Zm26.07-137a15.73,15.73,0,0,0-.52-4.86,1.55,1.55,0,0,0-.07-.23,10.73,10.73,0,0,0-.61-1.6l-.09-.17c-.22-.44-.43-.88-.64-1.31s-.45-.92-.67-1.38a1.81,1.81,0,0,1,.87-.41,3.18,3.18,0,0,1,1,0v0h0a1.61,1.61,0,0,0,0-.43,3.83,3.83,0,0,0-2.28-2.25l-.2-.08a6.22,6.22,0,0,0-.95-.31,4.69,4.69,0,0,0,.8.05,2.8,2.8,0,0,0,1.87-.84,4.11,4.11,0,0,1,1.51-.89,4.76,4.76,0,0,1,1.27-.2,12,12,0,0,0-1-1.65,8.65,8.65,0,0,0-.77-.89,5.81,5.81,0,0,0-2.3-1.48h0a5.42,5.42,0,0,0-3.38,0,9.1,9.1,0,0,0,1.67-1.56l.2-.22a8.41,8.41,0,0,1,4.15-2.57L173,54a8.36,8.36,0,0,0-6.19-2.58,13.34,13.34,0,0,0-2.61.18,149,149,0,0,1-2.85-19.92c-.2-1.32-.47-4.74-.77-8.59h0c-.55-6.93-1.21-15.25-1.76-15.26a.83.83,0,0,0-.31-.68.48.48,0,0,0-.19-.08.59.59,0,0,0-.25,0c-6.43,3-14.73,10-21.77,18.27a89.1,89.1,0,0,0-7.09,9.51c-2.08,4.07-2,13.09-.58,13.89,14.51,3.1,27.76,11.47,38.75,22.76Q170.14,74.37,172.71,77.45Zm5,45.62-9.19,3.56-2.8-14,5.85-11.7,5.7-2.55,4.35,10.6Z"
        />
      </svg>
    `
        }
    };
    (0, l.__decorate)([(0, v.C)({type: String})], u.prototype, "furColor", void 0), (0, l.__decorate)([(0, v.C)({type: String})], u.prototype, "bellyColor", void 0), (0, l.__decorate)([(0, v.C)({type: String})], u.prototype, "eyeColor", void 0), u = (0, l.__decorate)([(0, i.M)("gu-regular-crypto-kitty-head")], u)
}, 28917
:
(se, U, s) => {
    "use strict";
    var l = s(70655), a = s(32830), v = s(56418), i = s(86041), t = s(26532), d = s(65281);
    let u = class extends a.oi {
        static get styles() {
            return a.iv`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
      }

      svg {
        flex: 1;
        max-height: 100%;
        max-width: 100%;
      }
    `
        }

        render() {
            return a.YP`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.94 497.53">
        <defs>
          <style>
            .furColor {
              fill: ${this.furColor};
            }

            .eyeColor {
              fill: ${this.eyeColor};
            }

            .bellyColor {
              fill: ${this.bellyColor};
            }

            .outlineColor {
              fill: ${(0, t.asCssProp)(d.colors.black)};
              fill-rule: evenodd;
            }
          </style>
        </defs>
        <path
          class="furColor"
          d="M253.37,80.11c36.94,43.81,42.15,121-29.35,129.73-5.11,11.79-6.39,35.79-3.45,63.61,1.68-11.47,3.46-22.64,11.69-28.58,18.77-13.57,47.23,2.88,48.4,23.84,1.5,27-24.38,20.89-28,19.59,9.82,41.51,2.15,83.51-18,90.64a8.61,8.61,0,0,1-5.17.17,115.46,115.46,0,0,1-5.68,15.95c9.76-1,17.9-1.49,23.62-1.12,10,.64,17.87,4.13,23.58,9.12,16.23-.65,18.25,14.75,19,20.7a10.07,10.07,0,0,0,.39,2.18c-2.24-.6-4.34-1.37-6.35-2.11h0l-2.29-.83a29.09,29.09,0,0,1,.24,3.49c7.65,14-.78,19.81-7.88,24.66-2.81,1.93-5.4,3.71-6.71,5.8a24.06,24.06,0,0,1-1.15-6.51l-.68.27c-14,12.27-34.76,5.12-36.67-8.76,7.65.59,11.67.83,15.21-1.83,7.74-6.29,8.31-21.09-7.21-24.67-5.8-1.34-15.22.9-27.31,4.72-.69.78-1.39,1.52-2.06,2.25-3.32,3.57-6.2,6.67-5.81,11,13,0,23.5,8.33,21,26.5-4.12,3.92-12.76,6.17-22.36,7a37.44,37.44,0,0,1-3.27,11.29c-23,9.8-67.55,8.24-65.87-11.26.48-5.53.22-13.8-.68-23.78-2.7.5-5.41,1-8.15,1.38,10,14.32,3.52,26.26-1.17,29.9-6.23,4.85-51,7-60.13-4.16.8-8.91-1.27-17.87-4.61-26.56C18.74,435.91,5,415.3,5,395.94c0-13.64,7-22.16,14.27-31.09C24,359,28.91,353.06,32.11,345.39a85.83,85.83,0,0,1,3-11.38c8.59-25.37,18.11-36.79,29-49.8a234.53,234.53,0,0,0,19.26-25.65v-.14c.43-.67.88-1.35,1.33-2.07,3.2-5.18,6.51-11.07,9.92-17.92,8.32-18.14,15.23-44.77,9.39-84.15a79.51,79.51,0,0,1-1.64-16.36,137.9,137.9,0,0,1,3.12-30.65,6.36,6.36,0,0,1-.62-.85c-13.51-22.61-9.25-43.26-5-64.05,2.26-11,4.54-22,4.2-33.34a2.78,2.78,0,0,1,3.67-2.88c17.38,6.69,44.37,32.43,54.08,46,12.73-2.57,25.38-2.71,35.51-2.71,1.47,0,2.94.06,4.39.17,2.42-15.32,22.92-38.06,36.52-44.34a2.56,2.56,0,0,1,3.38,1.33,2.48,2.48,0,0,1,.21,1.2c0,17.19.63,40.33,9.33,60.12C252.94,72,254.51,75.08,253.37,80.11Z"
        />
        <path class="eyeColor" d="M240.46,111.68l4.6,23.06,18.66-7.22,5.26-19L261.5,90.27l-13.31,6Z" />
        <path class="eyeColor" d="M157.19,133.29l-19.26-23,31.92-11.44,26.66,11.44L207,139.08l-24.1,3Z" />
        <path class="eyeColor" d="M221.43,150.37l1.56,4.47,11.69,8.49,3.47-.53s5.34-9.07,7.52-13.15l-2.09-3.27Z" />
        <path
          class="bellyColor"
          d="M234.8,59.92c-2.17-7.87-3.08-23.48,6.54-30.11,1.07,0,1.53,4.45,2,8.74.17,1.56.32,3.1.51,4.4.08.6.16,1.22.24,1.88a61.07,61.07,0,0,0,1.09,6.72A8.16,8.16,0,0,1,254,53.94a8.75,8.75,0,0,0-4.83,2.94,9.15,9.15,0,0,1-1.67,1.56c2.47-.77,5.31-.14,7.5,4a4,4,0,0,0-2.78,1.09,2.81,2.81,0,0,1-2.67.78c2.45.63,3.61,2.2,3.45,3.13a2.17,2.17,0,0,0-1.89.4c.41.87.85,1.76,1.31,2.69,1.83,3.65,1.69,5.17,1.29,6.78C247.65,70.3,241.05,64.1,234.8,59.92Z"
        />
        <path
          class="bellyColor"
          d="M123,51c-3.63-7.23-7.36-14.66-11.8-17.74a1,1,0,0,0-1.36.38.83.83,0,0,0-.13.41c-.37,3.48-2,7.21-3.83,11.42C103.6,50.71,101,56.73,100,64a22.61,22.61,0,0,0-8.54,2.44,27.39,27.39,0,0,1,3.68,3.11,29.06,29.06,0,0,0,4.7,3.87,2.12,2.12,0,0,0,0,.56c-2.71.25-5.55,1.6-6.43,6.46a9.43,9.43,0,0,1,4.69.14,12.12,12.12,0,0,0,3,.34c.06.24.12.48.19.72-2.65,2.3-3.3,5-2.88,5.8a5.25,5.25,0,0,1,4.68-.31A76.35,76.35,0,0,0,109,98.94c1.91-4.67,11.17-21.5,24.25-29.94a1.34,1.34,0,0,0,.22-1.88,1.52,1.52,0,0,0-.22-.22C129.6,64.1,126.35,57.62,123,51Z"
        />
        <path
          class="bellyColor"
          d="M228.32,335.92c5.89,46.14-19.2,96.25-50.26,95.09-7.54-21-11.13-53.22-10-70.21s4-38.63,2.95-59.32c5.4-27.6,12.12-46.36,26.79-48.06C210.26,252,222.32,288.92,228.32,335.92Z"
        />
        <path
          class="outlineColor"
          d="M182.91,142l-25.72-8.75-19.26-23,31.92-11.44,26.66,11.44L207,139.08Zm-22.2-13.89L148.05,113l21.6-7.75,22.11,9.49,7,19.3-15.25,1.87Z"
        />
        <path
          class="outlineColor"
          d="M244.78,143.62l3.79,5.92-.69,1.29c-1.11,2.08-3,5.41-4.62,8.18l-2.08,3.57-.64,1.09-.84,1.43-.91.13.25,10.18,10.56,6.71a1.86,1.86,0,0,1,.51,2.58l0,0a1.92,1.92,0,0,1-2.6.78l0,0-9.85-6.26L224.31,191a1.94,1.94,0,0,1-2.66-.39,1.85,1.85,0,0,1,0-2.6l13.41-11.89-.25-10.29L234,166l-13.15-9.55-2.79-8Zm-7.92,16.44-.26.45-1.28.19-10.23-7.42-.33-1,17.62-3.17.39.62c-1.07,2-2.54,4.5-3.84,6.74C238.13,157.89,237.4,159.15,236.86,160.06Z"
        />
        <path
          class="outlineColor"
          d="M27.31,343.92c-2.89,6.68-7.21,12-11.91,17.76l-.27.34C8,370.77,0,380.51,0,395.94a45.28,45.28,0,0,0,13,31.67A60.46,60.46,0,0,0,26.9,438.3C11.8,444.35,3,451.64,3,459.47c0,21,63.28,38.06,141.34,38.06s141.34-17,141.34-38.06a13,13,0,0,0-3.26-8.16,23.55,23.55,0,0,0,5.67-6.7,18,18,0,0,0,1.19-13.82l10.66,2.84-4.73-9.45v-.76l-.07-.48c-.38-3-1.19-9.14-4.33-14.53a20.56,20.56,0,0,0-7.41-7.55A21.66,21.66,0,0,0,273,398.05,44.78,44.78,0,0,0,247.82,389a121,121,0,0,0-16.27.38c.59-1.63,1.15-3.28,1.68-5a12.77,12.77,0,0,0,3.17-.71c6.43-2.28,11.49-7.21,15.28-13.45s6.5-14.06,8.18-22.74c3-15.33,2.85-34-.7-52.82a32.34,32.34,0,0,0,10.65-.69,20,20,0,0,0,11.7-7.73c3.1-4.38,4.56-10.28,4.14-17.79-.7-12.66-9.53-23.38-20.27-29s-24.74-6.78-36,1.4a24.21,24.21,0,0,0-5.31,5.24q0-5.34.25-10.16c.49-9.1,1.68-16.4,3.37-21.51,17.08-2.61,30.11-9.23,39.35-18.76,9.76-10,14.93-23,16.52-36.76,3.07-26.72-7.19-57.41-24.88-80.16a20.45,20.45,0,0,0-1-8.71l.3-1.69a6.64,6.64,0,0,0,.1-1l5.15-.16-3.75-7.09a18.69,18.69,0,0,0-1.35-2.17l4.81-1.44-5.12-5.84a12.56,12.56,0,0,0-7.42-4l-1.06-.15c-2.85-15.5-2.59-30.7-2.49-36.58V7.64a7.89,7.89,0,0,0-3.22-6.2,7.32,7.32,0,0,0-7.46-.69c-7.77,3.53-16.85,11.39-24.17,20-6.14,7.22-11.7,15.72-14.16,23.63h-.49c-9.34,0-21.19.11-33.38,2.23a193.27,193.27,0,0,0-23-23.83c-10.22-9-21.87-17.66-31.44-21.34-6-2.29-10.6,2.91-10.46,7.7.32,10.67-1.81,21.11-4.1,32.18v.13C93.64,47.8,92.29,54.33,91.47,61c-.74.3-1.47.63-2.21,1l-8,4,7.56,4.73a10.81,10.81,0,0,1,1.82,1.48v1.91a14.53,14.53,0,0,0-2.09,5.47L87.11,87.5l4.69-1.33a68.13,68.13,0,0,0,8.29,22,147.08,147.08,0,0,0-2.8,29.75A84.57,84.57,0,0,0,99,155.16c5.65,38.25-1.06,63.85-9,81.11-3.33,6.67-6.54,12.4-9.65,17.42-.44.7-.87,1.37-1.29,2l-.23.37-.07.14A229,229,0,0,1,60.17,281l-.12.14c-10.94,13.13-20.87,25.12-29.72,51.25A89.64,89.64,0,0,0,27.31,343.92Zm216.5,88.52a9,9,0,0,0,.59-4.85c-.45-2.67-2.45-5.88-8.52-7.28-1.87-.43-4.85-.37-9.25.47a132.52,132.52,0,0,0-14.14,3.74l-1.18,1.27h0l-.11.13A286.78,286.78,0,0,1,243.81,432.44ZM94,65.34a25.61,25.61,0,0,0-2.52,1.1,21.53,21.53,0,0,1,3.44,2.88l.77.73h0c.65.61,1.31,1.21,2,1.76v2.68a6,6,0,0,0-3,2.63A7.8,7.8,0,0,0,94,78.58a2.47,2.47,0,0,0-.1.29,10.59,10.59,0,0,0-.39,1.57A7.2,7.2,0,0,1,96,80.22a17,17,0,0,1,2,.33q.25,2.31.69,4.62a3.09,3.09,0,0,0-.25,2.27q.33-.16.66-.3a61.15,61.15,0,0,0,7.38,18.25,3.78,3.78,0,0,0,.4.56l.67.77-.22,1a129.87,129.87,0,0,0-3,25c0,1.69-.08,3.42-.08,5.18q0,3.18.23,6.22a74.19,74.19,0,0,0,1.36,9.73v.06h0c.24,1.14.51,2.28.8,3.39q.19,3.19.38,6c2.54,24.51,0,43.8-4.4,59a122.71,122.71,0,0,1-6,16.18v.16c-.25.54-.5,1.07-.76,1.61-1.64,3.49-3.33,6.66-5,9.54l.21-.61c-1.6,2.8-3.3,5.66-5.13,8.71h0c-7.35,11.82-14.17,20-20.49,27.59l-2.38,2.87C53.4,300.15,44.8,311.47,37,334.65c-3.36,9.91-5,22.28-4.83,34.5s2.23,24.12,6.11,33.09c2,4.55,4.62,9.49,7.5,14.79l.62,1.15c2.68,4.93,5.51,10.15,8.07,15.52,5.37,11.28,9.67,23.53,8.82,35.86,2,2,5.72,3.63,10.76,4.79a86.36,86.36,0,0,0,15.78,1.92c1.43-3.66,3.07-11.07-1-18.07,6.76,3,8.51,13.23,6.56,18.17a119.33,119.33,0,0,0,15-1c.74-.11,1.46-.21,2.14-.33,1.58-3.71,4.55-12.06-.27-19.36,6.24,3.72,7.57,13,5.89,18.06a7.46,7.46,0,0,0,2-.94c2.61-2,6.22-7.5,5.59-14.83s-5.42-16.72-20.44-26.68l-1-.62.08-1.69c.36-7.53,1.12-23.44-1.31-40.62-2.5-17.67-8.65-35.89-21.4-48.21C77.3,336,75.16,330,74,323.74a55.16,55.16,0,0,0,12.26,16.45C100,353.44,104.48,369.87,107,387.84a216,216,0,0,1,1.42,39.79,102,102,0,0,0,14.9,3.69l-.09-.07c2.57-6.79-4.88-47.67-8.8-68.16-2.5-9.81-5.25-19.26-8.19-27.85h0c5.39,3.53,8,12.31,10,19.61h.06c4,14.59,7.42,30.23,10.15,45.21,5.13,28.16,7.81,54.3,6.72,66.92-.34,3.93,1.56,7,5.43,9.51s9.73,4.17,16.49,4.95A82.32,82.32,0,0,0,164,482c1.61-4,4.25-12.94-.41-20,6.43,3.84,7.31,14.86,5.34,19.91a94,94,0,0,0,16.61-2.23c1.27-9.21,1.56-14.34-3.52-22,6.48,3.87,9.52,10.49,8,20.89,2-.59,3.86-1.24,5.61-1.95,2.36-5.29,3.66-12,2.62-17.74a15.35,15.35,0,0,0-3.56-7.71,15.11,15.11,0,0,0-8.36-4.52,12.45,12.45,0,0,1-6.88-4.7,36.19,36.19,0,0,1-5-8.94c-2.89-7-5.07-16.11-6.67-25.47-3.18-18.7-4.73-40.34-3.89-48.4.33-4.92.74-10,1.16-15.06h0c2-25.12,4.23-52-2.08-75.58,7.28,7.59,7.83,27.15,8.15,38.31,0,.88,0,1.71.08,2.48.42,12.83-.79,24.76-1.87,35.37h0c-.52,5.15-1,10-1.27,14.48-.78,13.7.52,29.22,3.67,47.73,1.55,9.1,3.63,17.74,6.3,24.33h.27c18.8-.09,34.67-17.29,43.45-40.57.63-1.58,1.22-3.21,1.79-4.88,9-26.51,9.88-62.84-2.65-104.35v-.26q-4.16-26-3.83-44a99.83,99.83,0,0,1,1.48-16.46c-21.53,2.63-58.9-8.6-71.69-15.81-2.67-1.05-5.24-2.2-7.73-3.44l1.33.42h0c7.27,2.35,33.35,10.77,71.56,7.1q5.43-.36,11.08-1l.58-.07c1.1-.13,2.17-.28,3.23-.44,11.39-1.78,20.54-5.45,27.75-10.47a49.16,49.16,0,0,0,11.72-11.44,50.55,50.55,0,0,0,3.83-6.15l.07-.13.05-.1v-.06c.65-1.25,1.25-2.52,1.8-3.83a62.28,62.28,0,0,0,4.36-16.92c.05-.4.1-.8.14-1.2q.24-2.4.33-4.86a96.14,96.14,0,0,0-3.86-29.69,106.54,106.54,0,0,0-3.64-10.72c-.28-.7-.56-1.41-.85-2.11l-4.92,17.78L245,134.72l-4.6-23.06,7.73-15.45L259,91.38q-2.13-3.33-4.49-6.5-2-2.67-4.11-5.19l-.06-.07c-1.56-1.85-3.18-3.63-4.84-5.34-12.86-13.21-28.62-22-45.55-22.8-.88,0-1.76-.06-2.65-.06a198.1,198.1,0,0,0-29.21,1.65q-2.94.43-5.9,1l-1.27.26-.76-1C155.43,46.67,146.37,37,136.3,28s-21-16.82-29.3-20a.54.54,0,0,0-.59.1,1,1,0,0,0-.36.86c.34,11.59-2,22.8-4.22,33.7v.11a215.94,215.94,0,0,0-3.68,21.45,18.7,18.7,0,0,0-2,.44c-.64.18-1.31.39-2,.64Zm159.69,12a15.7,15.7,0,0,0-.52-4.87.31.31,0,0,0-.07-.23,11.33,11.33,0,0,0-.61-1.59l-.09-.17c-.22-.44-.43-.88-.64-1.31l-.67-1.38a1.89,1.89,0,0,1,.87-.41,3.35,3.35,0,0,1,1,0h0a1.55,1.55,0,0,0,0-.43,3.81,3.81,0,0,0-2.28-2.25l-.2-.08a8.16,8.16,0,0,0-.95-.32,3.55,3.55,0,0,0,.8.06,2.75,2.75,0,0,0,1.87-.84,4.3,4.3,0,0,1,1.51-.9,4.94,4.94,0,0,1,1.27-.19,11.5,11.5,0,0,0-1-1.65,11.06,11.06,0,0,0-.77-.9,6,6,0,0,0-2.3-1.48h0a5.42,5.42,0,0,0-3.38,0,9.15,9.15,0,0,0,1.67-1.56l.2-.22a8.41,8.41,0,0,1,4.15-2.57l.48-.15a8.35,8.35,0,0,0-6.19-2.58,12.69,12.69,0,0,0-2.61.18,148.75,148.75,0,0,1-2.85-19.93c-.2-1.31-.47-4.73-.77-8.58h0c-.55-6.92-1.21-15.24-1.76-15.25a.82.82,0,0,0-.31-.68.46.46,0,0,0-.19-.08.53.53,0,0,0-.25,0c-6.43,3-14.73,10-21.77,18.27a90,90,0,0,0-7.09,9.51c-2.08,4.07-2,13.09-.58,13.89,14.51,3.1,27.76,11.47,38.75,22.75,1.82,1.95,3.59,3.94,5.3,6ZM20.9,366c1.46-1.79,3-3.61,4.41-5.51,2.38.09,2.54,3.37,2.65,5.75a11.21,11.21,0,0,0,.16,1.83h0v1.14c.2,12.56,2.28,25,6.44,34.62,2,4.74,4.79,9.83,7.65,15.11l.61,1.13c1.9,3.49,3.85,7.07,5.71,10.73a1,1,0,0,0,0,.16h0c.49,1.52,1.64,5.07-2.08,8.12A74.57,74.57,0,0,1,25.28,429C12.18,419.68,7,407.53,7,395.94c0-12.84,6.49-20.86,13.82-29.83Zm198.47,49.24-1.82.49a39.66,39.66,0,0,0,3.12-4.68c2.89-4.77,6.79-11.2,13.19-14.87a106.87,106.87,0,0,1,13.51-.26c9.58.62,17,3.95,22.39,8.64l.6.52h.8a15.52,15.52,0,0,1,8.63,1.85,13.65,13.65,0,0,1,4.87,5c2.17,3.72,2.92,8.11,3.34,11.14-1.06-.36-2.11-.74-3.16-1.13h0l-2.31-.84-3.07-1.1.41,3.21a27.15,27.15,0,0,1,.22,3.25v.5l.24.44c3.6,6.6,3.22,10.82,1.59,13.87-1.77,3.29-5.19,5.69-8.84,8.18h0c-1.37.94-2.78,1.91-4,2.91l-.45.38c-.12-.82-.2-1.64-.24-2.47l-.12-2.84-2.64,1.08c-.2.09-.42.17-.63.25l-.33.13-.27.24a22.65,22.65,0,0,1-21,5c-5.67-1.58-10.09-5.29-11.75-10.06,5.93.41,10.11.36,13.83-2.43h0a16.52,16.52,0,0,0,5.83-15.24c-1-5.84-5.41-11-13.85-12.94-4.58-1-10.83-.08-18.09,1.79Zm-8,47.89a64.41,64.41,0,0,1-8.72,1.53,29.3,29.3,0,0,0-.39-6.48,19.41,19.41,0,0,0-4.52-9.67,19.13,19.13,0,0,0-10.51-5.77,8.5,8.5,0,0,1-4.6-3.29,25.37,25.37,0,0,1-2.7-4.24c2.41.76,15.08-.86,19.88-4.44a13.67,13.67,0,0,0,0,2.86l.2,1.78h1.78c6.1,0,11.37,1.95,14.83,5.78s5.27,9.45,4.29,17.72a19.9,19.9,0,0,1-6,3.17c1-2.84,1-8.32-5.31-11.54,4.75,5.21,3.15,9.75,2.1,12.51l-.18.05ZM251.94,353c-3.57,10.58-13.47,16.36-19.87,15.6,4.38-24.74,2.78-54.93-7.24-88.21q-.92-5.76-1.6-11.09a83.06,83.06,0,0,1,2-9.5c1.62-5.67,4-10.26,8.22-13.28,8.61-6.23,19.58-5.66,28.7-.87s16,13.6,16.53,23.2a32.11,32.11,0,0,1-.11,5.46,12.36,12.36,0,0,0-4.68-6.16A18.74,18.74,0,0,1,276.62,281q-.33.58-.69,1.11a11.88,11.88,0,0,1-5.25,4.23c-.05-.43-.1-.84-.15-1.25-.77-6.33-1.32-10.92-8-15.49a31.73,31.73,0,0,1,3.93,18l-.95.14c-1.48.14-3.57.24-5.87.27h-1.15a17.32,17.32,0,0,0-8.17-15.25c.32.79.69,1.57,1.07,2.38A24.94,24.94,0,0,1,254.31,288a42,42,0,0,1-8.14-1c-5.62-1.5-10.15-4.46-10.94-5.79a11,11,0,0,0,3.7,6.24c3.4,3.92,10.25,9.26,14.08,9.2,3.58,18.4,3.51,36.19.47,50.46C253,349.09,252.51,351.07,251.94,353Zm6.8-230-9.19,3.56-2.8-14,5.85-11.7,5.7-2.55,4.35,10.6Z"
        />
      </svg>
    `
        }
    };
    (0, l.__decorate)([(0, v.C)({type: String})], u.prototype, "furColor", void 0), (0, l.__decorate)([(0, v.C)({type: String})], u.prototype, "bellyColor", void 0), (0, l.__decorate)([(0, v.C)({type: String})], u.prototype, "eyeColor", void 0), u = (0, l.__decorate)([(0, i.M)("gu-regular-crypto-kitty")], u)
}, 65694
:
(se, U, s) => {
    "use strict";
    var l = s(70655), u = (s(90004), s(51256), s(11015), s(61517), s(43977), s(32830)), n = s(56418), e = s(7302),
        r = s(86041), b = s(98539), P = s(65281), S = s(65171), I = s(80102), w = s(26532);
    const x = u.iv`
  :host {
    display: block;
    width: 100%;
  }

  .innerContainer {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  .gradientSkrim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(
      to top,
      rgba(${(0, w.asCssProp)((0, S.hexToCssRgbString)(P.colors.dark[900]))}, 1) 0%,
      rgba(${(0, w.asCssProp)((0, S.hexToCssRgbString)(P.colors.dark[900]))}, 0) 70%
    );
  }

  .trinket {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: ${(0, w.asCssProp)((0, I.gridUnits)(.5))} solid ${(0, w.asCssProp)(P.colors.gunmetal[500])};
    background: ${(0, w.asCssProp)(P.colors.gunmetal[900])};
    overflow: hidden;
    box-shadow: 0px 0px ${(0, w.asCssProp)((0, I.gridUnits)(2))} rgba(${(0, w.asCssProp)((0, S.hexToCssRgbString)(P.colors.dark[900]))}, 0.65);
  }

  .trinketName {
    position: absolute;
    bottom: 13%;
    left: 50%;
    width: 70%;
    transform: translateX(-50%);
  }

  .clearButton {
    position: absolute;
    top: 6%;
    right: 6%;
    cursor: pointer;
  }

  .uiTextArea {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    color: ${(0, w.asCssProp)(P.colors.gunmetal[500])};
  }

  .uiTextArea__icon {
    font-size: ${(0, w.asCssProp)((0, I.gridUnits)(7))};
    margin-bottom: ${(0, w.asCssProp)((0, I.gridUnits)(1))};
  }

  .uiTextArea__text--choose {
  }

  .uiTextArea__text--replace {
    display: none;
  }

  /*

    @NOTE: Handle various UI states:

  */

  /*
    HIGHLIGHT STATES:
  */
  .innerContainer--highlight {
    cursor: pointer;
  }

  .innerContainer--highlight .trinket {
    border-color: ${(0, w.asCssProp)(P.colors.gold[300])};
  }

  .innerContainer--highlight:hover .trinket {
    border-color: ${(0, w.asCssProp)(P.colors.apocyan[300])};
  }

  .innerContainer--highlight .uiTextArea {
    color: ${(0, w.asCssProp)(P.colors.light[100])};
  }

  /*
    EQUIPPED STATES:
  */
  .innerContainer--equipped .uiTextArea__icon,
  .innerContainer--equipped .uiTextArea__text--choose,
  .innerContainer--equipped .uiTextArea__text--replace {
    display: none;
  }
  .innerContainer--equipped:hover .uiTextArea__icon {
    display: inline-flex;
  }
  .innerContainer--equipped:hover .uiTextArea__text--replace {
    display: block;
  }
`;
    let $ = class extends u.oi {
        constructor() {
            super(...arguments), this.highlight = !1, this.hideNameText = !1
        }

        static get styles() {
            return x
        }

        update(y) {
            y.has("highlight") && !y.get("highlight") && (this.hideNameText = !1), super.update(y)
        }

        renderTrinketName() {
            return this.hideNameText ? u.dy`` : u.dy`
      <gu-heading-text
        fillGradient=${P.gradients.gold.simple()}
        class="trinketName"
        align="center"
        size="2x-small"
        data-test-id="selected-trinket-name"
      >
        ${this.trinket.name}
      </gu-heading-text>
    `
        }

        renderTrinket() {
            return this.trinket ? u.dy`
      <div class="gradientSkrim"></div>
      ${this.renderTrinketName()}
      <gu-circular-close-button
        class="clearButton"
        @click=${() => this.dispatchEvent(new CustomEvent("xButtonClick", {bubbles: !0, composed: !0}))}
        data-test-id="selected-trinket-close-button"
      ></gu-circular-close-button>
    ` : u.dy``
        }

        renderInstructions() {
            return this.highlight ? u.dy`
        <gu-icon class="uiTextArea__icon" iconLigature="add_item"></gu-icon>
        <gu-paragraph-text class="uiTextArea__text uiTextArea__text--choose" kind="tag" align="center">
          choose slot
        </gu-paragraph-text>
        <gu-paragraph-text class="uiTextArea__text uiTextArea__text--replace" kind="tag" align="center">
          replace
        </gu-paragraph-text>
      ` : this.trinket ? u.dy`` : u.dy`
        <gu-paragraph-text class="uiTextArea__text uiTextArea__text--empty" kind="tag" align="center">
          select a trinket
        </gu-paragraph-text>
      `
        }

        onClick() {
            this.dispatchEvent(new CustomEvent("trinketClick", {bubbles: !0, composed: !0}))
        }

        onMouseEnter() {
            this.trinket && this.highlight && (this.hideNameText = !0)
        }

        onMouseLeave() {
            this.trinket && this.highlight && (this.hideNameText = !1)
        }

        render() {
            return u.dy`
      <div
        class=${(0, b.$)({
                innerContainer: !0,
                "innerContainer--highlight": this.highlight,
                "innerContainer--equipped": !!this.trinket
            })}
        @click=${this.onClick}
        @mouseenter=${this.onMouseEnter}
        @mouseleave=${this.onMouseLeave}
        data-test-id="selected-trinket-container"
      >
        <gu-loadout-part
          class="trinket"
          .trinket=${this.trinket}
          ?noAspectRatio=${!0}
          ?hideCount=${!0}
          ?hideBorder=${!0}
          ?hideText=${!0}
        ></gu-loadout-part>
        ${this.renderTrinket()}
        <div class="uiTextArea">${this.renderInstructions()}</div>
      </div>
    `
        }
    };
    (0, l.__decorate)([(0, n.C)({type: Object})], $.prototype, "trinket", void 0), (0, l.__decorate)([(0, n.C)({type: Boolean})], $.prototype, "highlight", void 0), (0, l.__decorate)([(0, e.S)()], $.prototype, "hideNameText", void 0), $ = (0, l.__decorate)([(0, r.M)("gu-selected-trinket")], $)
}, 69039
:
(se, U, s) => {
    "use strict";
    s.d(U, {Q: () => v});
    var l = s(30109);
    const v = (0, l.XM)(class a extends l.Xe {
        constructor(t) {
            super(t)
        }

        update(t, [d]) {
            d.current = t.element
        }

        render(t) {
        }
    })
}, 25297
:
(se, U, s) => {
    "use strict";
    s.d(U, {J: () => i});
    var l = s(12052), a = s(32830);
    const v = Promise.resolve().then.bind(Promise.resolve());

    class i extends a.oi {
        constructor() {
            super(), this.haunted = new l.ZM(() => this.requestUpdate(), this)
        }

        update(d) {
            this.haunted.run(() => {
                super.update(d)
            })
        }

        updated(d) {
            super.updated(d), this.haunted.runLayoutEffects(), v(() => this.haunted.runEffects())
        }

        disconnectedCallback() {
            this.haunted.teardown(), super.disconnectedCallback()
        }
    }
}, 65171
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {
        componentToHex: () => a,
        loopForVariable: () => v,
        rgbToHex: () => i,
        hexToRgb: () => t,
        hexToCssRgbString: () => d,
        setPropertyGradientFromVariable: () => u,
        setPropertyGradient: () => n,
        setPropertyColorFromVariable: () => e,
        setPropertyColor: () => r,
        setBorderColorHoverFromVariable: () => b,
        setBorderColorHover: () => P,
        setBackgroundFillHoverFromVariable: () => S,
        setBackgroundFillHover: () => I,
        updateColoringVariables: () => w
    });
    var l = s(65281);
    const a = x => {
        const $ = x.toString(16);
        return 1 === $.length ? "0" + $ : $
    }, v = x => {
        const $ = x.split(".");
        let O = l;
        for (let y = 0; y < $.length; y++) O = O[$[y]];
        return O
    }, i = (x, $, O) => `#${a(x)}${a($)}${a(O)}`, t = x => {
        const $ = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);
        return $ ? {r: parseInt($[1], 16), g: parseInt($[2], 16), b: parseInt($[3], 16)} : void 0
    }, d = x => {
        const $ = t(x);
        return $ ? `${$.r}, ${$.g}, ${$.b}` : x
    }, u = (x, $, O, y) => {
        const o = v($)(y).replace(/;/gm, "");
        x.setProperty(O, o)
    }, n = (x, $, O) => {
        x.setProperty(O, $.replace(/;/gm, ""))
    }, e = (x, $, O) => {
        const y = v($);
        x.setProperty(O, y)
    }, r = (x, $, O) => {
        x.setProperty(O, $)
    }, b = (x, $) => {
        const O = v($);
        x.setProperty("--borderColorHover", O)
    }, P = (x, $) => {
        x.setProperty("--borderColorHover", $)
    }, S = (x, $) => {
        const O = v($);
        x.setProperty("--backgroundFillColorHover", O)
    }, I = (x, $) => {
        x.setProperty("--backgroundFillColorHover", $)
    }, w = ({
                component: x,
                fillColor: $,
                fillColorHover: O,
                fillGradient: y,
                fillGradientTarget: M,
                borderColor: o,
                borderColorHover: h,
                backgroundFillColor: C,
                backgroundFillColorHover: T,
                backgroundFillGradient: K,
                backgroundFillGradientTarget: ce,
                iconColor: ae
            }) => {
        $ && (x.setAttribute("fillColor", $), /colors\./.test($) ? e(x.style, $, "--textFillColor") : r(x.style, $, "--textFillColor")), O && (x.setAttribute("fillColorHover", O), /colors\./.test(O) ? e(x.style, O, "--textFillColorHover") : r(x.style, O, "--textFillColorHover")), o && (x.setAttribute("borderColor", o), /colors\./.test(o) ? e(x.style, o, "--borderColor") : r(x.style, o, "--borderColor")), h && (x.setAttribute("borderColorHover", h), /colors\./.test(h) ? e(x.style, h, "--borderColorHover") : r(x.style, h, "--borderColorHover")), h && (x.setAttribute("borderColorHover", h), /colors\./.test(h) ? b(x.style, h) : P(x.style, h)), C && (x.setAttribute("backgroundFillColor", C), /colors\./.test(C) ? e(x.style, C, "--backgroundFillColor") : r(x.style, C, "--backgroundFillColor")), T && (x.setAttribute("backgroundFillColorHover", T), /colors\./.test(T) ? e(x.style, T, "--backgroundFillColorHover") : r(x.style, T, "--backgroundFillColorHover")), ae && (x.setAttribute("iconColor", ae), /colors\./.test(ae) ? e(x.style, ae, "--iconColor") : r(x.style, ae, "--iconColor")), T && (x.setAttribute("backgroundFillColorHover", T), /colors\./.test(T) ? S(x.style, T) : I(x.style, T)), K && (x.setAttribute("backgroundFillGradient", K), /gradients\./.test(K) ? u(x.style, K, "--backgroundFillGradient", ce) : n(x.style, K, "--backgroundFillGradient")), y && (x.setAttribute("fillGradient", y), /gradients\./.test(y) ? u(x.style, y, "--textFillGradient", M) : n(x.style, y, "--textFillGradient"))
    }
}, 5284
:
(se, U, s) => {
    "use strict";
    s.d(U, {gt: () => v, I5: () => l, dz: () => d, ZB: () => n, uA: () => a});
    var l = {};
    s.r(l), s.d(l, {isIos: () => i, isSafari: () => t});
    var a = {};
    s.r(a), s.d(a, {enhancedTextRenderingStyles: () => P, stringContainsEmoji: () => b, uppercaseWord: () => S});
    var v = s(65171);

    function i() {
        return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
    }

    const t = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var d = s(80102), n = (s(26711), s(26532)), e = s(89747), r = s.n(e);
    const b = I => r()().test(I),
        P = "\n  /* Get fonts to look slightly nicer where possible */\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility\n",
        S = I => I.charAt(0).toUpperCase() + I.slice(1)
}, 80102
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {
        gridUnits: () => l,
        checkOutOfBounds: () => a,
        getOuterHeight: () => v,
        waitForImageToLoad: () => i
    });
    const l = t => 4 * t + "px", a = ({
                                          x: t,
                                          y: d,
                                          left: u,
                                          top: n,
                                          width: e,
                                          height: r,
                                          tolerance: b = 2
                                      }) => (window.scrollY >= n && (n -= window.scrollY, r += window.scrollY), d >= Math.floor(r + n - b) || d <= n + b || t >= Math.floor(e + u - b) || t <= u + b),
        v = t => {
            const d = window.getComputedStyle(t), u = parseInt(d.getPropertyValue("margin-top")),
                n = parseInt(d.getPropertyValue("margin-bottom"));
            return t.offsetHeight + u + n
        }, i = t => new Promise((d, u) => {
            const n = () => {
                t.removeEventListener("load", r), t.removeEventListener("error", e)
            }, e = b => {
                console.error("Awww snap! <img> or <picture> LOAD ERROR:", b, t.src), n(), u()
            }, r = () => {
                n(), d()
            };
            t.complete ? d() : (t.addEventListener("load", r), t.addEventListener("error", e))
        })
}, 26711
:
(se, U, s) => {
    "use strict";
    s.d(U, {b: () => l});
    const l = {fromAttribute: a => a && "false" !== a, toAttribute: a => a ? "true" : "false"}
}, 26532
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {
        asCssProp: () => v,
        drawHexShapePolygon: () => i,
        drawHexShapePolygonMask: () => t,
        drawBottomHexShapePolygonMask: () => d,
        setBoxSizing: () => u,
        fadeReveal: () => n,
        listReveal: () => e,
        styleScrollbars: () => r,
        inset: () => b,
        ellipsize: () => P
    });
    var l = s(32830), a = s(65281);
    const v = S => l.iv`${(0, l.$m)(S)}`,
        i = (S, I, w = 0) => `\n  polygon(\n    ${S + w}px 0%,\n    calc(100% - ${I + w}px) 0%,\n    100% 50%,\n    calc(100% - ${I + w}px) 100%,\n    ${S + w}px 100%,\n    0% 50%\n  );`,
        t = (S, I, w = 0) => ``,
        d = S => `\n  clip-path: polygon(\n    0% 0%,\n    100% 0%,\n    100% calc(100% - ${S}),\n    50% 100%,\n    0% calc(100% - ${S}),\n    0% 0%\n  );\n  -webkit-clip-path: polygon(\n    0% 0%,\n    100% 0%,\n    100% calc(100% - ${S}),\n    50% 100%,\n    0% calc(100% - ${S}),\n    0% 0%\n  );\n`,
        u = (S = "border-box") => `\n  :host,\n  :host *,\n  :host *::before,\n  :host *::after {\n    box-sizing: ${S};\n  }\n`,
        n = (S, I, w = "initial", x = .3, $ = 0) => `\n  ${S} {\n    opacity: 0;\n    height: 0;\n    transition: opacity ${x}s ease, height 0s ${x}s, transform ${x}s ease;\n    ${$ ? `transform: translateY(${$}px);` : ""}\n  }\n  ${I} {\n    opacity: 1;\n    height: ${w};\n    transition: opacity ${x}s ease, height 0s 0s, transform ${x}s ease;\n    ${$ ? "transform: translateY(0);" : ""}\n  }\n`,
        e = (S, I = .3, w = 10, x = 12) => `\n  ${S} {\n    animation: listReveal ${I}s ease-out backwards;\n    animation-delay: ${.1 * w}s;\n  }\n\n  ${[...Array(w).keys()].map($ => `\n      ${S}:nth-of-type(${$}) {\n        animation-delay: ${.1 * $}s;\n      }\n    `).join("\n")}\n\n  @keyframes listReveal {\n    from {\n      transform: translateY(${x}px);\n      opacity: 0;\n    }\n    to {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n`,
        r = (S = "") => `\n  ${S}::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  ${S}::-webkit-scrollbar-thumb {\n    width: 4px;\n    background: ${a.colors.gunmetal[500]};\n    border-radius: 2px;\n  }\n`,
        b = (S, I = S, w = S, x = I) => l.iv`
  top: ${S}px;
  right: ${I}px;
  bottom: ${w}px;
  left: ${x}px;
`, P = () => l.iv`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
}, 39029
:
(se, U, s) => {
    "use strict";
    s.d(U, {x1: () => a.x, I0: () => t, v9: () => i, Rl: () => u}), s(25297);
    var a = s(58672), v = s(12052);
    const i = ({store: r, selector: b}) => {
        const [P, S] = (0, v.eJ)(b(r.getState()));
        return (0, v.d4)(() => r.subscribe(() => {
            const I = b(r.getState());
            S(I)
        }), [b]), P
    }, t = r => b => r.dispatch(b);
    s(5284);
    var u = s(65281);
    s(72985), s(69039)
}, 72650
:
(se, U, s) => {
    "use strict";
    s.d(U, {b: () => u});
    var l = s(70655), a = s(46461), i = s(56418);
    const t = {
        default: {
            ogg: "/assets/audio/buttons/hover--primary.ogg",
            mp3: "/assets/audio/buttons/hover--primary.mp3"
        }
    }, d = {
        primary: {
            ogg: "/assets/audio/buttons/click--primary.ogg",
            mp3: "/assets/audio/buttons/click--primary.mp3"
        },
        secondary: {
            ogg: "/assets/audio/buttons/click--secondary.ogg",
            mp3: "/assets/audio/buttons/click--secondary.mp3"
        }
    }, u = n => {
        class e extends n {
            constructor() {
                super(...arguments), this.audibleHover = "", this.audibleClick = "", this.howl = a.Howl
            }

            updated(b) {
                super.updated(b), this.updateHoverSound(), this.updateClickSound()
            }

            disconnectedCallback() {
                super.disconnectedCallback(), this.disconnectHover(), this.disconnectClick()
            }

            handleHover(b) {
                b.preventDefault(), this.hoverControl.play()
            }

            handleClick(b) {
                b.preventDefault(), this.clickControl.play()
            }

            updateHoverSound() {
                this.audibleHover && !this.hoverControl ? this.connectHover() : !this.audibleHover && this.hoverControl && this.disconnectHover()
            }

            updateClickSound() {
                this.audibleClick ? this.connectClick() : !this.audibleClick && this.clickControl && this.disconnectClick()
            }

            connectHover() {
                this.hoverControl = new this.howl({src: [t[this.audibleHover].ogg, t[this.audibleHover].mp3]}), this.addEventListener("mouseover", this.handleHover)
            }

            connectClick() {
                this.clickControl && this.disconnectClick(), this.clickControl = new this.howl({src: [d[this.audibleClick].ogg, d[this.audibleClick].mp3]}), this.addEventListener("mousedown", this.handleClick), this.addEventListener("touchstart", this.handleClick)
            }

            disconnectHover() {
                !this.hoverControl || (this.hoverControl.unload(), this.hoverControl = void 0, this.removeEventListener("mouseover", this.handleHover))
            }

            disconnectClick() {
                !this.clickControl || (this.clickControl.unload(), this.clickControl = void 0, this.removeEventListener("mousedown", this.handleClick), this.removeEventListener("touchstart", this.handleClick))
            }
        }

        return (0, l.__decorate)([(0, i.C)({type: String})], e.prototype, "audibleHover", void 0), (0, l.__decorate)([(0, i.C)({type: String})], e.prototype, "audibleClick", void 0), e
    }
}, 72985
:
(se, U, s) => {
    "use strict";
    s.d(U, {Am: () => t, lH: () => u, Xg: () => a, s: () => l});
    const l = e => class extends e {
        update(r) {
            this.setAttribute("disabled", `${this.disabled}`), this.setAttribute("loading", `${this.loading}`), this.setAttribute("horizontalStretch", `${this.horizontalStretch}`), super.update(r)
        }
    }, a = e => class extends e {
        constructor() {
            super(...arguments), this.clickLinkListenerBound = !1
        }

        update(r) {
            this.href && !this.clickLinkListenerBound ? (this.addEventListener("click", this.clickLinkHandler), this.clickLinkListenerBound = !0) : !this.href && this.clickLinkListenerBound && (this.removeEventListener("click", this.clickLinkHandler), this.clickLinkListenerBound = !1), super.update(r)
        }

        disconnectedCallback() {
            this.removeEventListener("click", this.clickLinkHandler)
        }

        clickLinkHandler() {
            const {target: r, href: b} = this;
            r ? window.open(b, r) : window.location.href = b
        }
    };
    var v = s(46461);
    const i = {
        "GU-SPECIAL-HEX-BUTTON": {
            ogg: "/assets/audio/buttons/click--primary.ogg",
            mp3: "/assets/audio/buttons/click--primary.mp3"
        },
        "GU-SPECIAL-HEX-FLAT-BUTTON": {
            ogg: "/assets/audio/buttons/click--primary.ogg",
            mp3: "/assets/audio/buttons/click--primary.mp3"
        },
        "GU-PRIMARY-HEX-BUTTON": {
            ogg: "/assets/audio/buttons/click--primary.ogg",
            mp3: "/assets/audio/buttons/click--primary.mp3"
        },
        "GU-SECONDARY-HEX-BUTTON": {
            ogg: "/assets/audio/buttons/click--secondary.ogg",
            mp3: "/assets/audio/buttons/click--secondary.mp3"
        },
        "GU-SUBTLE-HEX-BUTTON": {
            ogg: "/assets/audio/buttons/click--secondary.ogg",
            mp3: "/assets/audio/buttons/click--secondary.mp3"
        }
    }, t = e => class extends e {
        constructor() {
            super(...arguments), this.clickSoundListenerBound = !1
        }

        updated(r) {
            super.updated(r), this.checkToEnableClickSound()
        }

        disconnectedCallback() {
            super.disconnectedCallback(), this.destroyClickSound(), this.destroyClickEvents()
        }

        clickSoundHandler(r) {
            r.preventDefault(), this.clickSoundControl.play()
        }

        checkToEnableClickSound() {
            this.enableSounds && !this.clickSoundListenerBound ? (this.initClickEvents(), this.initClickSound()) : !this.enableSounds && this.clickSoundListenerBound && (this.destroyClickSound(), this.destroyClickEvents())
        }

        initClickSound() {
            this.clickSoundControl = new v.Howl({src: [i[this.nodeName].ogg, i[this.nodeName].mp3]})
        }

        initClickEvents() {
            this.addEventListener("mousedown", this.clickSoundHandler), this.addEventListener("touchstart", this.clickSoundHandler), this.clickSoundListenerBound = !0
        }

        destroyClickSound() {
            this.clickSoundControl && this.clickSoundControl.unload()
        }

        destroyClickEvents() {
            this.removeEventListener("mousedown", this.clickSoundHandler), this.removeEventListener("touchstart", this.clickSoundHandler), this.clickSoundListenerBound = !1
        }
    }, u = e => class extends e {
        constructor() {
            super(...arguments), this.hoverSoundListenerBound = !1
        }

        updated(r) {
            super.updated(r), this.checkToEnableHoverSound()
        }

        disconnectedCallback() {
            super.disconnectedCallback(), this.destroyHoverSound(), this.removeEventListener("mouseover", this.hoverSoundHandler)
        }

        hoverSoundHandler(r) {
            r.preventDefault(), this.hoverSoundControl.play()
        }

        checkToEnableHoverSound() {
            this.enableSounds && !this.hoverSoundListenerBound ? (this.addEventListener("mouseover", this.hoverSoundHandler), this.hoverSoundListenerBound = !0, this.initHoverSound()) : !this.enableSounds && this.hoverSoundListenerBound && (this.removeEventListener("mouseover", this.hoverSoundHandler), this.hoverSoundListenerBound = !1, this.destroyHoverSound())
        }

        initHoverSound() {
            this.hoverSoundControl = new v.Howl({src: ["/assets/audio/buttons/hover--primary.ogg", "/assets/audio/buttons/hover--primary.mp3"]})
        }

        destroyHoverSound() {
            this.hoverSoundControl && this.hoverSoundControl.unload()
        }
    };
    s(72650)
}, 47925
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {breakpointSizeMapping: () => l});
    const l = {
        "2x-small": "360px",
        "x-small": "512px",
        small: "768px",
        medium: "960px",
        large: "1200px",
        "x-large": "1400px",
        "2x-large": "1600px"
    }
}, 91418
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {
        gunmetal: () => l,
        light: () => a,
        white: () => v,
        black: () => i,
        dark: () => t,
        apocyan: () => d,
        yellow: () => u,
        gold: () => n,
        aqua: () => e,
        card: () => r,
        alert: () => b,
        quality: () => P,
        rarity: () => S,
        god: () => I,
        fillColoringRules: () => w
    });
    const l = {100: "#90CAF9", 300: "#527493", 500: "#3D5A74", 700: "#1D2F41", 900: "#0F1B27"},
        a = {100: "#F6F6F6", 300: "#D7D7D7", 500: "#B6B6B6", 700: "#979797", 900: "#7F7F7F"}, v = "#ffffff",
        i = "#000000", t = {100: "#7F7F7F", 300: "#646464", 500: "#464646", 700: "#272727", 900: "#0A0A0A"},
        d = {100: "#AFFAED", 300: "#03A9F4", 500: "#54BBCD"}, u = {100: "#FCF7D4", 300: "#F7EA9B", 500: "#F2DC63"},
        n = {100: "#FFF2D8", 300: "#FBC02D", 500: "#C6A052"}, e = {200: "#affaed", 300: "#8be1e0", 500: "#54bbcd"},
        r = {creature: "#ebd08a", spell: "#76b5ad", weapon: "#7a608c"}, b = "#FF8B01", P = {
            plain: "#8295A2",
            bronze: "#6A8B35",
            iron: "#3D91B9",
            meteorite: "#84343E",
            shadow: "#B461C5",
            gold: "#E5D93C",
            diamond: "#94E6FB",
            mythic: "#ffffff"
        }, S = {common: "#6D6C6D", rare: "#3C8ED2", epic: "#6D1FC4", legendary: "#D8A638", mythic: "#D02C3A"}, I = {
            deception: {primary: "#FA77FC", secondary: "#CA3FD8", tertiary: "#8F189B"},
            war: {primary: "#FF8B01", secondary: "#D73333", tertiary: "#99011A"},
            death: {primary: "#9C4EF9", secondary: "#35145B", tertiary: "#35145B"},
            magic: {primary: "#50BCFF", secondary: "#3884DE", tertiary: "#1752BA"},
            nature: {primary: "#9DE764", secondary: "#5AC33F", tertiary: "#4C772F"},
            light: {primary: "#FBE29F", secondary: "#FFD76E", tertiary: "#FAB248"}
        },
        w = "\n  /* Styles to use when there is a gradientFill set ... */\n  :host([fillGradient]),\n  :host([fillGradient]) ::slotted(*) {\n    background: var(--textFillGradient);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* Styles to use when there is a simple fill color set ... */\n  :host([fillColor]),\n  :host([fillColor]) ::slotted(*) {\n    color: var(--textFillColor);\n\n    /* Use the text coloring for border color, and allow it to be over-written */\n    border-color: var(--textFillColor);\n  }\n\n  /* Styles to use when there is a simple fill color hover set ... */\n  :host([fillColorHover]:hover),\n  :host([fillColorHover]:hover) ::slotted(*) {\n    color: var(--textFillColorHover);\n\n    /* Use the text coloring for border color, and allow it to be over-written */\n    border-color: var(--textFillColorHover);\n  }\n\n  /* Styles to use when there is a simple border color set ... */\n  :host([borderColor]),\n  :host([borderColor]) ::slotted(*) {\n    border-color: var(--borderColor);\n  }\n\n  /* Styles to use when there is a simple border color hover set ... */\n  :host([borderColorHover]:hover),\n  :host([borderColorHover]:hover) ::slotted(*) {\n    border-color: var(--borderColorHover);\n  }\n\n  /* Styles to use when there is a simple background color fill set ... */\n  :host([backgroundFillColor]),\n  :host([backgroundFillColor]) ::slotted(*) {\n    background-color: var(--backgroundFillColor);\n  }\n\n  /* Styles to use when there is a simple background color fill hover set ... */\n  :host([backgroundFillColorHover]:hover),\n  :host([backgroundFillColorHover]:hover) ::slotted(*) {\n    background-color: var(--backgroundFillColorHover);\n  }\n"
}, 65281
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {
        animation: () => l,
        breakpoints: () => n,
        colors: () => e,
        gradients: () => a,
        measurements: () => O,
        typography: () => y,
        uifx: () => M
    });
    var l = {};
    s.r(l), s.d(l, {
        slowTransition: () => u,
        slowTransitionDuration: () => t,
        standardTransition: () => d,
        standardTransitionDuration: () => v,
        standardTransitionEasing: () => i
    });
    var a = {};
    s.r(a), s.d(a, {
        apocyan: () => S,
        dark: () => I,
        god: () => x,
        gold: () => r,
        gunmetal: () => b,
        light: () => w,
        textFill: () => $,
        yellow: () => P
    });
    const v = "150ms", i = "ease-in-out", t = "300ms", d = o => `\n  transition: ${o} ${v}\n  ${i};\n`,
        u = o => `\n  transition: ${o} ${t}\n  ${i};\n`;
    var n = s(47925), e = s(91418);
    const r = {
            simple: (o = "bottom") => `var(--gu-yellow)`,
            mirror: (o = "bottom") => `\n  linear-gradient(\n    to ${o},\n    ${e.gold[500]} 0%,\n    ${e.gold[100]} 50%,\n    ${e.gold[500]} 100%\n  );\n`,
            complex: (o = "top") => `\n  linear-gradient(\n    to ${o},\n    #FFFDF0 0%,\n    #FBEBC1 14%,\n    #E6C675 25%,\n    #F6DF6E 40%,\n    #B27E18 60%,\n    #DEAB61 73%,\n    #A67B4B 85%,\n    #664320 100%\n  );\n`,
            horizontal: (o = "right") => `\n  linear-gradient(\n    to ${o},\n    ${e.gold[500]} 3%,\n    ${e.gold[300]} 25%,\n    ${e.gold[100]} 50%,\n    ${e.gold[300]} 75%,\n    ${e.gold[500]} 97%\n  );\n`
        }, b = {
            simple: (o = "bottom") => `\n  linear-gradient(\n    to ${o},\n    ${e.gunmetal[900]} 0%,\n    ${e.gunmetal[700]} 100%\n  );`,
            mirror: (o = "bottom") => `\n  linear-gradient(\n    to ${o},\n    ${e.gunmetal[900]} 0%,\n    ${e.gunmetal[700]} 50%,\n    ${e.gunmetal[900]} 100%\n  );\n`
        },
        P = {simple: (o = "top") => `\n  linear-gradient(\n    to ${o},\n    ${e.yellow[100]} 0%,\n    ${e.yellow[300]} 50%,\n    ${e.yellow[500]} 100%\n  );\n`},
        S = {
            simple: (o = "top") => `linear-gradient(\n    to ${o},\n    ${e.apocyan[100]} 0%,\n    ${e.apocyan[500]} 100%\n  );`,
            mirror: (o = "top") => `linear-gradient(\n    to ${o},\n    ${e.apocyan[500]} 0%,\n    ${e.apocyan[100]} 50%,\n    ${e.apocyan[500]} 100%\n  );`
        },
        I = {simple: (o = "top") => `linear-gradient(\n    to ${o},\n    ${e.dark[500]} 100%,\n    ${e.dark[900]} 100%\n  );`},
        w = {simple: (o = "top") => `linear-gradient(\n    to ${o},\n    ${e.light[100]} 100%,\n    ${e.light[300]} 100%\n  );`},
        x = {
            deception: (o = "top") => `linear-gradient(\n      to ${o},\n      ${e.god.deception.primary} 0%,\n      ${e.god.deception.secondary} 50%,\n      ${e.god.deception.tertiary} 100%\n    )`,
            war: (o = "top") => `linear-gradient(\n      to ${o},\n      ${e.god.war.primary} 0%,\n      ${e.god.war.secondary} 50%,\n      ${e.god.war.tertiary} 100%\n    )`,
            death: (o = "top") => `linear-gradient(\n      to ${o},\n      ${e.god.death.primary} 0%,\n      ${e.god.death.secondary} 50%,\n      ${e.god.death.tertiary} 100%\n    )`,
            magic: (o = "top") => `\n    linear-gradient(\n      to ${o},\n      ${e.god.magic.primary} 0%,\n      ${e.god.magic.secondary} 50%,\n      ${e.god.magic.tertiary} 100%\n    )`,
            nature: (o = "top") => `\n    linear-gradient(\n      to ${o},\n      ${e.god.nature.primary} 0%,\n      ${e.god.nature.secondary} 50%,\n      ${e.god.nature.tertiary} 100%\n    )`,
            light: (o = "top") => `\n    linear-gradient(\n      to ${o},\n      ${e.god.light.primary} 0%,\n      ${e.god.light.secondary} 50%,\n      ${e.god.light.tertiary} 100%\n    )`
        },
        $ = o => `background: ${o};\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;`;
    var O = s(49219), y = s(66974), M = s(61462)
}, 49219
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {
        spacingAmountMapping: () => a,
        standardTransitionDuration: () => v,
        standardTransitionEasing: () => i,
        standardBorderSize: () => t,
        draggableTitleBarHeight: () => d,
        standardHeaderHeight: () => u,
        standardHeaderHeightInCss: () => n,
        standardHeaderAlertBarHeight: () => e,
        headerBarZLevel: () => r,
        electronMenuBarZLevel: () => b,
        modalLayerZLevel: () => P,
        electronTitleBarHeight: () => S,
        imageQualities: () => I
    });
    var l = s(80102);
    const a = {
            "2x-small": "2px",
            "x-small": "4px",
            small: "8px",
            medium: "12px",
            large: "16px",
            "x-large": "24px",
            "2x-large": "32px",
            "3x-large": "40px",
            "4x-large": "56px",
            "5x-large": "72px",
            "6x-large": "96px",
            "7x-large": "128px",
            "8x-large": "192px",
            "9x-large": "320px"
        }, v = "150ms", i = "ease-in-out", t = "1px", d = (0, l.gridUnits)(7), u = 80, n = "80px", e = 50, r = 22, b = 23,
        P = 22, S = (0, l.gridUnits)(7), I = {small: 128, normal: 256, high: 512, xHigh: 720, best: 1024}
}, 66974
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {
        iconTextStyles: () => l,
        headingFont: () => a,
        simpleFont: () => v,
        textAlignRules: () => i,
        headingSizeMapping: () => t,
        simpleTextSizeMapping: () => d,
        baseSimpleTextStyles: () => u
    });
    const l = "\n  font-family: 'gu-cons';\n  font-feature-settings: 'liga' 1;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  vertical-align: middle;\n  letter-spacing: 0;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n",
        a = "\n  font-family: 'Unchained', serif;\n", v = "\n  font-family: 'Open Sans', sans-serif;\n",
        i = "\n  :host([align='center']),\n  :host([align='center']) ::slotted(*) {\n    text-align: center;\n  }\n\n  :host([align='left']),\n  :host([align='left']) ::slotted(*) {\n    text-align: left;\n  }\n\n  :host([align='right']),\n  :host([align='right']) ::slotted(*) {\n    text-align: right;\n  }\n",
        t = {
            "3x-small": "14px",
            "2x-small": "18px",
            "x-small": "24px",
            small: "32px",
            large: "40px",
            "x-large": "48px",
            "2x-large": "72px"
        }, d = {large: "20px", small: "16px", help: "14px", tag: "12px", micro: "10px"},
        u = `\n  ${v}\n  line-height: 1.1;\n`
}, 61462
:
(se, U, s) => {
    "use strict";
    s.r(U), s.d(U, {userSelect: () => l});
    const l = a => `\n    -webkit-user-select: ${a};\n    user-select: ${a};\n    pointer-events: ${a};\n  `
}, 58672
:
(se, U, s) => {
    "use strict";
    s.d(U, {x: () => a});
    var l = s(25297);

    function a({renderer: v, baseClass: i = l.J, props: t = {}}) {
        const d = class extends i {
            render() {
                return v.call(this, this)
            }
        };
        return Object.entries(t).forEach(([u, n]) => d[u] = n), d
    }
}, 51256
:
(se, U, s) => {
    "use strict";
    var l = s(70655), a = s(32830), v = s(56418), i = s(86041), t = s(5284), d = s(65171), u = s(26532), n = s(65281),
        e = s(47925), r = s(91418);
    let b = class extends a.oi {
        constructor() {
            super(...arguments), this.size = "small", this.align = "center", this.responsiveSize = []
        }

        static get styles() {
            return a.iv`
      :host {
        display: block;
        ${(0, u.asCssProp)(t.uA.enhancedTextRenderingStyles)};
      }

      :host,
      ::slotted(*) {
        ${(0, u.asCssProp)(n.typography.headingFont)};
        color: ${(0, u.asCssProp)(n.colors.light[100])};
        line-height: 1.2;
        font-weight: 700;
        text-transform: uppercase;
        margin: 0;
      }

      ${(0, u.asCssProp)(n.typography.textAlignRules)}

      :host([size='2x-large']),
      :host([size='2x-large']) ::slotted(*) {
        font-size: ${(0, u.asCssProp)(n.typography.headingSizeMapping["2x-large"])} !important;
      }

      :host([size='x-large']),
      :host([size='x-large']) ::slotted(*) {
        font-size: ${(0, u.asCssProp)(n.typography.headingSizeMapping["x-large"])} !important;
      }

      :host([size='large']),
      :host([size='large']) ::slotted(*) {
        font-size: ${(0, u.asCssProp)(n.typography.headingSizeMapping.large)} !important;
      }

      /* 'Small' size is the default size... */
      :host,
      :host ::slotted(*),
      :host([size='small']),
      :host([size='small']) ::slotted(*) {
        font-size: ${(0, u.asCssProp)(n.typography.headingSizeMapping.small)} !important;
      }

      :host([size='x-small']),
      :host([size='x-small']) ::slotted(*) {
        font-size: ${(0, u.asCssProp)(n.typography.headingSizeMapping["x-small"])} !important;
      }

      :host([size='2x-small']),
      :host([size='2x-small']) ::slotted(*) {
        font-size: ${(0, u.asCssProp)(n.typography.headingSizeMapping["2x-small"])} !important;
      }

      :host([size='3x-small']),
      :host([size='3x-small']) ::slotted(*) {
        font-size: ${(0, u.asCssProp)(n.typography.headingSizeMapping["3x-small"])} !important;
      }

      ${(0, u.asCssProp)(r.fillColoringRules)}
    `
        }

        generateMediaQueries() {
            return this.responsiveSize.length ? a.dy`
          <style>
            /* DEFINE RESPONSIVE SIZING */
            ${this.responsiveSize.map(({breakpoint: S, size: I}) => a.iv`
                @media screen and (min-width: ${(0, u.asCssProp)(e.breakpointSizeMapping[S])}) {
                  :host(.overWrite[size='${(0, u.asCssProp)(this.size)}']),
                  :host(.overWrite[size='${(0, u.asCssProp)(this.size)}']) ::slotted(*) {
                    font-size: ${(0, u.asCssProp)(n.typography.headingSizeMapping[I])} !important;
                  }
                }
              `)}
          </style>
        ` : null
        }

        render() {
            const {fillColor: S, fillGradient: I, fillGradientTarget: w} = this;
            return (0, d.updateColoringVariables)({
                component: this,
                fillColor: S,
                fillGradient: I,
                fillGradientTarget: w
            }), this.setAttribute("size", this.size), this.responsiveSize.length ? this.classList.add("overWrite") : this.classList.remove("overWrite"), a.dy`
      ${this.generateMediaQueries()}
      <slot></slot>
    `
        }
    };
    (0, l.__decorate)([(0, v.C)({type: String})], b.prototype, "size", void 0), (0, l.__decorate)([(0, v.C)({type: String})], b.prototype, "align", void 0), (0, l.__decorate)([(0, v.C)({type: String})], b.prototype, "fillColor", void 0), (0, l.__decorate)([(0, v.C)({type: String})], b.prototype, "fillGradient", void 0), (0, l.__decorate)([(0, v.C)({type: String})], b.prototype, "fillGradientTarget", void 0), (0, l.__decorate)([(0, v.C)({type: Array})], b.prototype, "responsiveSize", void 0), b = (0, l.__decorate)([(0, i.M)("gu-heading-text")], b)
}, 11015
:
(se, U, s) => {
    "use strict";
    var l = s(70655), a = s(32830), v = s(86041), i = s(52102);
    let t = class extends i._ {
        static get styles() {
            return a.iv`
      ${super.styles}

      :host {
        display: block;
      }

      :host,
      :host ::slotted(*) {
        line-height: 1.375;
      }

      :host([kind='large']) ::slotted(*) {
        line-height: 1.4;
      }

      :host([kind='small']) ::slotted(*) {
        line-height: 1.5;
      }

      :host([kind='help']) ::slotted(*) {
        line-height: 1.43;
      }

      :host([kind='tag']) ::slotted(*) {
        line-height: 1.67;
      }
    `
        }
    };
    t = (0, l.__decorate)([(0, v.M)("gu-paragraph-text")], t)
}, 52102
:
(se, U, s) => {
    "use strict";
    s.d(U, {_: () => S});
    var l = s(70655), a = s(32830), v = s(56418), i = s(86041), t = s(5284), d = s(65281), u = s(26532), n = s(91418),
        e = s(66974), r = s(61462);
    const b = `\n  font-size: ${(0, u.asCssProp)(d.typography.simpleTextSizeMapping.tag)};\n  font-weight: 700;\n  text-transform: uppercase;\n`;
    let S = class extends a.oi {
        constructor() {
            super(...arguments), this.align = "center", this.fontStyle = "regular", this.responsiveKind = []
        }

        static get styles() {
            return a.iv`
  ${(0, u.asCssProp)((0, u.setBoxSizing)())}

  :host,
    :host ::slotted(*) {
    ${(0, u.asCssProp)(t.uA.enhancedTextRenderingStyles)};
    ${(0, u.asCssProp)(e.baseSimpleTextStyles)};
    font-size: ${(0, u.asCssProp)(d.typography.simpleTextSizeMapping.small)};

    ${(0, u.asCssProp)((0, r.userSelect)("inherit"))};
  }

  :host([kind='large']),
  :host([kind='large']) ::slotted(*) {
    font-size: ${(0, u.asCssProp)(d.typography.simpleTextSizeMapping.large)};
  }

  :host([kind='small']),
  :host([kind='small']) ::slotted(*) {
    font-size: ${(0, u.asCssProp)(d.typography.simpleTextSizeMapping.small)};
  }

  :host([kind='micro']),
  :host([kind='micro']) ::slotted(*) {
    font-size: ${(0, u.asCssProp)(d.typography.simpleTextSizeMapping.micro)};
  }

  :host([kind='help']),
  :host([kind='help']) ::slotted(*) {
    font-style: italic;
    font-size: ${(0, u.asCssProp)(d.typography.simpleTextSizeMapping.help)};
  }

  :host([kind='tag']),
  :host([kind='tag']) ::slotted(*) {
    ${(0, u.asCssProp)(b)};
  }

  :host([fontStyle='italic']),
  :host([fontStyle='italic']) ::slotted(*) {
    font-style: italic;
  }

  :host([fontWeight='bold']),
  :host([fontWeight='bold']) ::slotted(*) {
    font-weight: 700;
  }

  ${(0, u.asCssProp)(d.typography.textAlignRules)}
  ${(0, u.asCssProp)(n.fillColoringRules)}
`
        }

        generateMediaQueries() {
            const {breakpointSizeMapping: w} = d.breakpoints, {asCssProp: x} = t.ZB, {simpleTextSizeMapping: $} = d.typography;
            return this.responsiveKind.length ? a.dy`
          <style>
            /* DEFINE RESPONSIVE SIZING */
            ${this.responsiveKind.map(({breakpoint: O, kind: y = "small"}) => a.iv`
                @media screen and (min-width: ${x(w[O])}) {
                  :host(.overWrite[kind='${x(this.kind)}']),
                  :host(.overWrite[kind='${x(this.kind)}']) ::slotted(*) {
                    font-size: ${x($[y])} !important;
                    ${x("tag" !== y ? "bold" === this.fontWeight ? "font-weight: 700" : "font-weight: 400" : "")};
                    ${x("tag" === y ? b : "")};
                    ${x("help" === y ? "font-style: italic" : "")};
                  }
                }
              `)}
          </style>
        ` : null
        }

        render() {
            const {updateColoringVariables: w} = t.gt, {
                fillColor: x,
                fillGradient: $,
                fillGradientTarget: O,
                borderColor: y,
                fillColorHover: M
            } = this;
            return w({
                component: this,
                fillColor: x,
                fillColorHover: M,
                fillGradient: $,
                fillGradientTarget: O,
                borderColor: y
            }), this.setAttribute("kind", this.kind), this.responsiveKind.length ? this.classList.add("overWrite") : this.classList.remove("overWrite"), a.dy`
      ${this.generateMediaQueries()} ${this.text ? this.text : ""}
      <slot></slot>
    `
        }
    };
    (0, l.__decorate)([(0, v.C)()], S.prototype, "kind", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "align", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "fontStyle", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "fontWeight", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "text", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "fillColor", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "fillColorHover", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "borderColor", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "fillGradient", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "fillGradientTarget", void 0), (0, l.__decorate)([(0, v.C)()], S.prototype, "responsiveKind", void 0), S = (0, l.__decorate)([(0, i.M)("gu-simple-text")], S)
}, 43337
:
(se, U, s) => {
    "use strict";
    s.d(U, {R: () => y});
    var l = s(70655), a = s(32830), v = s(56418), i = s(86041), t = s(5284), d = s(65171), u = s(65281), n = s(26532),
        e = s(91418), r = s(66974);
    const b = ["xx-small", "x-small", "small", "medium", "large"],
        I = {"xx-small": "10px", "x-small": "12px", small: "14px", medium: "16px", large: "20px"},
        w = {"xx-small": "18px", "x-small": "20px", small: "22px", medium: "24px", large: "28px"},
        x = {light: 100, regular: 300, "semi-bold": 500, bold: 700, "extra-bold": 900};
    var O;
    let y = O = class extends a.oi {
        constructor() {
            super(...arguments), this.fontWeight = "regular", this.fontStyle = "regular", this.align = "center", this.plain = !1, this.responsiveSizes = []
        }

        static get styles() {
            return a.iv`
  ${(0, n.asCssProp)((0, n.setBoxSizing)())}

  :host {
    display: inline;
    font-family: 'Open Sans', sans-serif;
    ${(0, n.asCssProp)(t.uA.enhancedTextRenderingStyles)};
    font-size: ${(0, n.asCssProp)(I.medium)};
  }

  :host:not([plain]) {
    line-height: ${(0, n.asCssProp)(w.medium)};
  }

  ${(0, n.asCssProp)(b.map(M => a.iv`
          :host([size=${(0, n.asCssProp)(M)}]),
          :host([size=${(0, n.asCssProp)(M)}]) .body-text__content {
            font-size: ${(0, n.asCssProp)(I[M])};
          }

          :host([size='${(0, n.asCssProp)(M)}]):not([plain']),
          :host([size='${(0, n.asCssProp)(M)}]):not([plain']) .body-text__content {
            line-height: ${(0, n.asCssProp)(w[M])};
          }
        `).join("\n"))}

  :host([fontStyle='italic']),
  :host([fontStyle='italic']) .body-text__content {
    font-style: italic;
  }

  ${(0, n.asCssProp)(Object.keys(x).map(M => a.iv`
          :host([fontWeight=${(0, n.asCssProp)(M)}]),
    :host([fontWeight=${(0, n.asCssProp)(M)}]) .body-text__content {
            font-weight: ${x[M]};
          }
        `).join("\n"))}

  ${(0, n.asCssProp)(r.textAlignRules)}
  ${(0, n.asCssProp)(e.fillColoringRules)}
`
        }

        static hasColoringPropertyChanged(o) {
            return o.has("fillColor") || o.has("fillGradient") || o.has("fillGradientTarget")
        }

        updated(o) {
            if (O.hasColoringPropertyChanged(o)) {
                const {fillColor: h, fillGradient: C, fillGradientTarget: T} = this;
                (0, d.updateColoringVariables)({component: this, fillColor: h, fillGradient: C, fillGradientTarget: T})
            }
        }

        generateMediaQueries() {
            const {breakpointSizeMapping: o} = u.breakpoints, {asCssProp: h} = t.ZB;
            return this.responsiveSizes.length ? a.dy`
          <style>
            /* DEFINE RESPONSIVE SIZING */
            ${this.responsiveSizes.map(({breakpoint: C, size: T = "small"}) => a.iv`
                @media screen and (min-width: ${h(o[C])}) {
                  :host(.overWrite[size='${h(this.size)}']),
                  :host(.overWrite[size='${h(this.size)}']) ::slotted(*) {
                    font-size: ${h(I[T])} !important;
                  }

                  :host(.overWrite[size='${h(this.size)}']):not([plain]),
                  :host(.overWrite[size='${h(this.size)}']):not([plain]) ::slotted(*) {
                    line-height: ${h(w[T])} !important;
                  }
                }
              `)}
          </style>
        ` : null
        }

        render() {
            return this.responsiveSizes.length ? this.classList.add("overWrite") : this.classList.remove("overWrite"), a.dy`
      ${this.generateMediaQueries()}
      <slot class="body-text__content" data-test-id="body-text-slot"></slot>
    `
        }
    };
    (0, l.__decorate)([(0, v.C)({
        type: String,
        reflect: !0
    })], y.prototype, "size", void 0), (0, l.__decorate)([(0, v.C)({
        type: String,
        reflect: !0
    })], y.prototype, "fontWeight", void 0), (0, l.__decorate)([(0, v.C)({
        type: String,
        reflect: !0
    })], y.prototype, "fontStyle", void 0), (0, l.__decorate)([(0, v.C)({type: String})], y.prototype, "align", void 0), (0, l.__decorate)([(0, v.C)({type: String})], y.prototype, "fillColor", void 0), (0, l.__decorate)([(0, v.C)({type: String})], y.prototype, "fillGradient", void 0), (0, l.__decorate)([(0, v.C)({type: String})], y.prototype, "fillGradientTarget", void 0), (0, l.__decorate)([(0, v.C)({
        type: Boolean,
        reflect: !0
    })], y.prototype, "plain", void 0), (0, l.__decorate)([(0, v.C)({type: Array})], y.prototype, "responsiveSizes", void 0), y = O = (0, l.__decorate)([(0, i.M)("gu-body-text")], y)
}, 66678
:
(se, U, s) => {
    "use strict";
    var l = s(70655), a = s(32830), v = s(86041), i = s(43337);
    let t = class extends i.R {
        static get styles() {
            return a.iv`
      ${super.styles}

      :host {
        display: block;
        margin-bottom: 8px;
      }
    `
        }
    };
    t = (0, l.__decorate)([(0, v.M)("gu-paragraph")], t)
}, 263
:
(se, U, s) => {
    "use strict";
    var l = s(70655), a = s(32830), v = s(86041), i = s(26532), t = s(65281), d = s(47925);
    let u = class extends a.oi {
        constructor() {
            super(...arguments), this.responsiveSize = []
        }

        static get properties() {
            return {top: {type: String}, bottom: {type: String}, both: {type: String}, responsiveSize: {type: Array}}
        }

        static get styles() {
            return a.iv`
      :host {
        display: block;
        margin-top: var(--marginTop);
        margin-bottom: var(--marginBottom);
      }
    `
        }

        pickMarginValue(e, r) {
            return e ? t.measurements.spacingAmountMapping[e] : r ? t.measurements.spacingAmountMapping[r] : 0
        }

        generateVariablesAndMediaQueries() {
            const e = this.pickMarginValue(this.both, this.top), r = this.pickMarginValue(this.both, this.bottom);
            return a.dy`
      <style>

        /* DEFINE BASE SIZING */
        ${(0, i.asCssProp)(`\n          :host {\n            --marginTop: ${e};\n            --marginBottom: ${r};\n          }\n        `)}

        /* DEFINE RESPONSIVE SIZING */
        ${this.responsiveSize.map(({breakpoint: b, topSize: P, bottomSize: S, bothSize: I}) => {
                const w = this.pickMarginValue(I, P), x = this.pickMarginValue(I, S);
                return a.iv`
            @media screen and (min-width: ${(0, i.asCssProp)(d.breakpointSizeMapping[b])}) {
              :host {
                ${(0, i.asCssProp)(w ? `--marginTop: ${w};` : "")}
                ${(0, i.asCssProp)(x ? `--marginBottom: ${x};` : "")}
              }
            }
          `
            })}
      </style>
    `
        }

        render() {
            return a.dy`
      ${this.generateVariablesAndMediaQueries()}
      <slot></slot>
    `
        }
    };
    u = (0, l.__decorate)([(0, v.M)("gu-vertical-space")], u)
}, 4477
:
(se, U, s) => {
    "use strict";
    s.d(U, {w: () => P});
    var l = s(70655), a = s(92436), v = s(87435), i = s(32830), t = s(86041), d = s(5284), u = s(26532), n = s(65281);
    const e = new a.do(I => {
        I.forEach(w => {
            w.target.handleResize()
        })
    }), r = new CustomEvent("onVideoEnd"), P = I => new Promise(w => {
        setTimeout(() => w(), I)
    });
    let S = class extends i.oi {
        constructor() {
            super(...arguments), this.muted = !1, this.autoPlay = !1, this.loopVideo = !1, this.showControls = !1, this.pauseOnEndFrame = !1, this.startPausedOnFirstFrame = !1, this.volume = 1, this.dimensions = {
                width: 0,
                height: 0
            }, this.hasSignalledEnd = !1, this.onVideoLoaded = () => {
                console.log("VIDEO IS LOADED (not necessarily fully buffered though)", this.videoId);
                const w = () => {
                    this.bindPlayListeners(), this.delayedEmitVideoReady(), this.setVolume()
                };
                this.startPausedOnFirstFrame ? this.gotoTimeAndPause(.02).then(() => w()) : w()
            }, this.onVideoUpdate = w => {
                const {percent: x} = w;
                this.dispatchEvent(new CustomEvent("onVideoProgress", {detail: {percent: x}})), this.pauseOnEndFrame && x >= .88 && (this.pauseVideo(), this.hasSignalledEnd || (this.hasSignalledEnd = !0, this.dispatchEvent(r)))
            }, this.delayedEmitVideoReady = () => setTimeout(() => {
                this.hasSignalledEnd = !1, this.classList.remove("hideVideo"), this.dispatchEvent(new CustomEvent("onVideoReady"))
            }, 350)
        }

        static get styles() {
            return i.iv`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        ${(0, u.asCssProp)(n.animation.standardTransition("opacity"))};
      }

      :host ::slotted(iframe) {
        width: 100%;
        height: 100%;
        display: block;
      }

      gu-rectangular-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
      }

      :host(.hideVideo) gu-rectangular-spinner {
        display: flex;
      }
    `
        }

        static get properties() {
            return {
                videoId: {type: Number},
                loopVideo: {type: Boolean},
                autoPlay: {type: Boolean},
                pauseOnEndFrame: {type: Boolean},
                startPausedOnFirstFrame: {type: Boolean},
                showControls: {type: Boolean},
                volume: {type: Number},
                muted: {type: Boolean}
            }
        }

        firstUpdated() {
            this.handleResize(), e.observe(this)
        }

        updated(w) {
            super.updated(w), w.has("videoId") && this.videoId ? this.handleVideoIdUpdated() : w.has("volume") && this.setVolume()
        }

        disconnectedCallback() {
            e.unobserve(this), this.vimeoControl && this.vimeoControl.destroy()
        }

        handleVideoIdUpdated() {
            return (0, l.__awaiter)(this, void 0, void 0, function* () {
                if (this.vimeoControl) {
                    const w = yield this.vimeoControl.getVideoId();
                    return console.log("@@@@@@@@@@@@", w, this.videoId), this.videoId === w ? this.reInitCurrentVideo() : this.loadNewVideoId()
                }
                this.initVideo()
            })
        }

        unBindEventsAndReset() {
            this.classList.add("hideVideo"), this.dispatchEvent(new CustomEvent("onVideoLoading")), this.vimeoControl.off("timeupdate", this.onVideoUpdate), this.vimeoControl.off("loaded", this.onVideoLoaded)
        }

        reInitCurrentVideo() {
            console.log("@@@@@ RE-INIT CURRENT VIDEO @@@@@@"), this.unBindEventsAndReset(), this.onVideoLoaded()
        }

        loadNewVideoId() {
            console.log("@@@@@ LOAD NEW VIDEO ID @@@@@@"), this.unBindEventsAndReset(), this.vimeoControl.loadVideo(this.videoId).then(() => this.onVideoLoaded()).catch(w => console.log(w))
        }

        initVideo() {
            const w = {
                title: !1,
                byline: !1,
                portrait: !1,
                controls: this.showControls,
                playsinline: !0,
                autopause: !1,
                muted: !0,
                id: this.videoId,
                loop: this.loopVideo,
                autoplay: this.autoPlay
            };
            this.classList.add("hideVideo"), this.dispatchEvent(new CustomEvent("onVideoLoading")), this.vimeoControl = new v.Z(this, w), this.vimeoControl.on("loaded", this.onVideoLoaded)
        }

        setVolume() {
            return !!this.vimeoControl && (this.muted ? this.vimeoControl.setMuted(!0) : this.vimeoControl.setVolume(this.volume))
        }

        bindPlayListeners() {
            this.vimeoControl.on("ended", () => {
                this.dispatchEvent(r)
            }), this.vimeoControl.on("timeupdate", this.onVideoUpdate)
        }

        gotoTimeAndPause(w) {
            return (0, l.__awaiter)(this, void 0, void 0, function* () {
                try {
                    return console.log("gotoTimeAndPause(time)", w, this.videoId), yield this.vimeoControl.setMuted(!0), console.log("gotoTimeAndPause > this.vimeoControl.setMuted(true) resolved", this.videoId, w), yield this.vimeoControl.play(), console.log("gotoTimeAndPause > this.vimeoControl.play() resolved", this.videoId, w), d.I5.isSafari() && (yield P(350), console.log("gotoTimeAndPause > artificialDelay() resolved", this.videoId, w)), yield this.vimeoControl.pause(), console.log("gotoTimeAndPause > this.vimeoControl.pause() resolved", this.videoId, w), yield this.vimeoControl.setCurrentTime(w), console.log("gotoTimeAndPause > this.vimeoControl.setCurrentTime(time) resolved", this.videoId, w), this.setVolume(), console.log("gotoTimeAndPause > ALL STEPS resolved")
                } catch (x) {
                    console.error("gotoTimeAndPause ERROR:", x)
                }
            })
        }

        playVideo(w) {
            console.log("playVideo(time)", w);
            const x = () => {
                this.hasSignalledEnd = !1, this.vimeoControl.play()
            };
            return void 0 !== w ? this.gotoTimeAndPause(w).then(() => x()) : x()
        }

        pauseVideo() {
            this.vimeoControl.pause()
        }

        handleResize() {
            this.dimensions = {width: this.offsetWidth, height: this.offsetHeight}
        }

        destroyVideo() {
            this.vimeoControl.destroy()
        }

        render() {
            return i.dy`
      <slot></slot>
      <gu-rectangular-spinner></gu-rectangular-spinner>
    `
        }
    };
    S = (0, l.__decorate)([(0, t.M)("gu-controllable-vimeo-embed")], S)
}, 531
:
(se, U, s) => {
    "use strict";
    s.d(U, {P: () => t});
    var l = s(14135), a = s(69808), v = s(93075), i = s(5e3);
    let t = (() => {
        class x {
        }

        return x.\u0275fac = function (O) {
            return new (O || x)
        }, x.\u0275mod = i.oAB({type: x}), x.\u0275inj = i.cJS({imports: [[a.ez, l.aw, v.u5, v.UX], v.UX]}), x
    })();
    s(73307), new i.OlP("websocket-constructor")
}, 83920
:
(se, U, s) => {
    "use strict";
    s.d(U, {_: () => v});
    var l = s(5e3), a = s(93075);
    let v = (() => {
        class i {
            constructor(d, u) {
                this.element = d, this.renderer = u, this.onChange = () => {
                }, this.onTouched = () => {
                }
            }

            writeValue(d) {
                this.renderer.setProperty(this.element.nativeElement, "value", d)
            }

            handleChange(d) {
                this.onChange(d)
            }

            handleBlurEvent(d) {
                this.onTouched()
            }

            registerOnChange(d) {
                this.onChange = d
            }

            registerOnTouched(d) {
                this.onTouched = d
            }

            setDisabledState(d) {
                this.renderer.setProperty(this.element.nativeElement, "disabled", d)
            }
        }

        return i.\u0275fac = function (d) {
            return new (d || i)(l.Y36(l.SBq), l.Y36(l.Qsj))
        }, i.\u0275dir = l.lG2({
            type: i,
            selectors: [["gu-input", "formControl", ""], ["gu-input", "formControlName", ""], ["gu-password-input", "formControl", ""], ["gu-password-input", "formControlName", ""], ["gu-checkbox-group", "formControl", ""], ["gu-checkbox-group", "formControlName", ""], ["gu-radio-button-group", "formControl", ""], ["gu-radio-button-group", "formControlName", ""], ["gu-range-input", "formControl", ""], ["gu-range-input", "formControlName", ""], ["gu-select", "formControl", ""], ["gu-select", "formControlName", ""], ["gu-checkbox", "formControl", ""], ["gu-checkbox", "formControlName", ""], ["gu-textarea", "formControl", ""], ["gu-textarea", "formControlName", ""]],
            hostBindings: function (d, u) {
                1 & d && l.NdJ("input", function (e) {
                    return u.handleChange(e.detail.value)
                })("blur", function (e) {
                    return u.handleBlurEvent(e.target)
                })
            },
            features: [l._Bn([{provide: a.JU, useExisting: (0, l.Gpc)(() => i), multi: !0}])]
        }), i
    })()
}, 45821
:
(se, U, s) => {
    "use strict";
    s.d(U, {n: () => i});
    var l = s(7625), a = s(8929), v = s(5e3);
    let i = (() => {
        class t {
            constructor(u, n) {
                this.element = u, this.renderer = n, this.destroyed$ = new a.xQ
            }

            ngOnInit() {
                this.control.statusChanges.pipe((0, l.R)(this.destroyed$)).subscribe({
                    next: u => {
                        this.renderer.setProperty(this.element.nativeElement, "errors", this.getErrors()), this.renderer.setProperty(this.element.nativeElement, "enabled", this.control.dirty)
                    }
                })
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            getErrors() {
                const u = this.control.errors;
                return u ? Object.keys(u).filter(n => void 0 !== u[n]) : []
            }
        }

        return t.\u0275fac = function (u) {
            return new (u || t)(v.Y36(v.SBq), v.Y36(v.Qsj))
        }, t.\u0275dir = v.lG2({
            type: t,
            selectors: [["gu-validation-errors", "control", ""]],
            inputs: {control: "control"}
        }), t
    })()
}, 56302
:
(se, U, s) => {
    "use strict";
    s.d(U, {X8: () => l, IU: () => t, Qo: () => n});
    var l = (() => {
        return (e = l || (l = {})).FETCH_USER_WALLET = "[Account] Fetch User Wallet", e.FETCH_USER_WALLET_SUCCESS = "[Account] Fetch User Wallet Success", e.FETCH_USER_WALLET_ERROR = "[Account] Fetch User Wallet Error", e.UPDATE_USER_ETH_BALANCE = "[Account] Update User Eth Balance", e.FETCH_USER_ACCOUNT = "[Account] Fetch User Account", e.FETCH_USER_ACCOUNT_SUCCESS = "[Account] Fetch User Account Success", e.FETCH_USER_ACCOUNT_ERROR = "[Account] Fetch User Account Error", l;
        var e
    })();

    class t {
        constructor() {
            this.type = l.FETCH_USER_WALLET
        }
    }

    class n {
        constructor(r) {
            this.payload = r, this.type = l.UPDATE_USER_ETH_BALANCE
        }
    }
}, 40886
:
(se, U, s) => {
    "use strict";
    s.d(U, {Y: () => l, t: () => a});
    const l = 3, a = 1
}, 72224
:
(se, U, s) => {
    "use strict";
    s.d(U, {v: () => l});
    const l = 2147483647
}, 57470
:
(se, U, s) => {
    "use strict";
    s.d(U, {gv: () => v, zy: () => l, CF: () => a});
    var l = {};
    s.r(l), s.d(l, {Y: () => i});
    var a = {};
    s.r(a), s.d(a, {J: () => ke, Y: () => Ue});
    var v = {};
    s.r(v), s.d(v, {routeContent: () => getGlobalRouteContent(Xe), userMenuItemsContent: () => et});
    const i = [{
        name: "lysander",
        title: "Lysander: Champion of Light",
        description: "Lysander of Parthon was a respected Olympian military leader, a father, and a man of faith. All that changed the day he was confronted by an overwhelming enemy force led by a daemonic entity.",
        byline: "Wield the might of Lysander's cards by collecting Trial of the Gods packs.",
        link: "https://blog.godsunchained.com/2020/01/29/chapter-2-lysanders-origin-broken/",
        protoId: 824
    }, {
        name: "neferu",
        title: "Neferu: Champion of Death",
        description: "Neferu served with distinction in the Anubian army, fighting to reclaim ancestral land from the hated Olympians. She thought she was the embodiment of death herself, until she met her fate on the Mukhnod fields.",
        byline: "Unearth the fury of Neferu's cards by collecting Trial of the Gods packs.",
        link: "https://blog.godsunchained.com/2020/02/04/chapter-3-neferus-origin-blessed-rest/",
        protoId: 828
    }, {
        name: "pallas",
        title: "Pallas: Champion of Magic",
        description: "Growing up in a commune of mages, Pallas always seemed to defy categorization: style of magic, philosophy, even gender. This made Evaluation at the Academy of Mystical Arts more complicated than even they expected.",
        byline: "Channel the power of Pallas' cards by collecting Trial of the Gods packs.",
        link: "https://blog.godsunchained.com/2020/02/13/chapter-4-pallas-origin-all-is-magic/",
        protoId: 825
    }, {
        name: "orfeo",
        title: "Orfeo: Champion of Deception",
        description: "Orphaned at a young age, Orfeo quickly learned that one face wasn't enough to survive on the streets of Ronella. But managing multiple lives was never going to be easy, especially when it\u2019s uncertain who is really pulling the strings.",
        byline: "Unveil the skill behind Orfeo's cards by collecting Trial of the Gods packs.",
        link: "https://blog.godsunchained.com/2020/03/05/chapter-5-orfeos-origin-masks/",
        protoId: 829
    }, {
        name: "selena",
        title: "Selena: Champion of Nature",
        description: "As a child, many of the Amazons of Agrodor saw Selena a frail young boy... but she knew better. She was a warrior at heart and \u2013 even though she was less athletic than her peers \u2013 she was determined to prove her skills.",
        byline: "Discover the strength of Selena's cards by collecting Trial of the Gods packs.",
        link: "https://blog.godsunchained.com/2020/03/19/chapter-6-selenas-origin-truth-is-told-by-moonlight/",
        protoId: 826
    }, {
        name: "valka",
        title: "Valka: Champion of War",
        description: "Battle-hardened and proud, Valka endured devastating adversity before she was selected by Auros to become the Champion of War.",
        byline: "Unleash the wrath of Valka's cards by collecting Trial of the Gods packs.",
        link: "https://blog.godsunchained.com/2020/04/02/chapter-7-valkas-origin-a-traitors-blood/",
        protoId: 827
    }];
    s(94417), s(40520);
    var n = s(73175);
    s(591), s(8929), s(36053), s(21086), s(61737), s(24850), s(2994), s(72986), s(61709), s(27221), s(73307), s(5e3), s(55195), new n.N0, s(40886), s(52909), s(67806), s(26959), s(74323), s(47760), s(18499), s(45425), s(5254), s(68896), s(56498), s(92198), s(56302), s(96727), s(11735);
    var fe = s(1025);
    const ke = {
        home: {
            shortName: "home",
            path: "",
            icon: "nav_arena",
            pageTitle: "Gods Unchained",
            keywords: "Gods Unchained,Godsunchained,TCG,Trading Card Game,CCG,card game,lore,strategy game,blockchain game,crypto game, free to play, play to earn",
            description: "The ultimate digital trading card game that gives players true ownership of their collection. Play for free, play for keeps, or trade on open marketplaces. Download now. "
        },
        expansions: {
            shortName: "expansions",
            path: "expansions",
            icon: "set_mortal",
            children: {
                trial: {
                    shortName: "trial of the gods",
                    path: "expansions/trial-of-the-gods",
                    pageTitle: "Trial of the Gods"
                },
                divineOrder: {shortName: "divine order", path: "expansions/divine-order", pageTitle: "Divine Order"},
                mortalJudgement: {
                    shortName: "mortal judgement",
                    path: "expansions/mortal-judgement",
                    pageTitle: "Mortal Judgement",
                    featureFlag: fe.v.mortalJudgementEnabled
                }
            }
        },
        buyPacks: {shortName: "buy packs", path: "buy-packs", icon: "trader_package", pageTitle: "Buy new card packs"},
        market: {
            shortName: "market",
            path: "market_trader",
            icon: "nav_market",
            children: {
                imxMarketplace: {
                    shortName: "Buy & Sell",
                    url: "https://market.ropsten.immutable.com/assets?collection=0xc6185055ea9891d5d9020c927ff65229baebdef2",
                    _target: "_blank"
                }, starStore: {shortName: "star store", path: "star-store", pageTitle: "Star Store"}
            }
        },
        learn: {
            shortName: "learn",
            path: "learn",
            icon: "nav_library",
            children: {
                cards: {
                    shortName: "cards",
                    path: "learn/cards",
                    angularRouterPath: "cards",
                    pageTitle: "Learn: Explore the cards",
                    keywords: "Gods Unchained,Godsunchained,TCG,Trading Card Game, CCG,card game,lore,strategy game,blockchain game,crypto game, free to play, play to earn, gu cards, gods unchained cards, card info",
                    description: "A complete list of collectable cards in Gods Unchained. Build your deck, trade and play using core and Genesis cards."
                },
                faq: {
                    shortName: "faq",
                    url: "//support.godsunchained.com/hc/en-us/sections/1500001033441-Gods-Unchained-FAQ",
                    _target: "_blank"
                },
                lore: {shortName: "lore", url: "//blog.godsunchained.com/category/lore", _target: "_blank"},
                blog: {shortName: "blog", url: "//blog.godsunchained.com", _target: "_blank"},
                guide: {shortName: "guide", url: "//blog.godsunchained.com/learn-to-play", _target: "_blank"},
                referrals: {
                    shortName: "Referrals",
                    path: "learn/referrals",
                    angularRouterPath: "referrals",
                    pageTitle: "Learn: Referrals",
                    keywords: "",
                    description: "",
                    featureFlag: fe.v.referralsEnabled
                }
            }
        },
        collections: {
            shortName: "collections",
            path: "collections",
            icon: "nav_inventory",
            pageTitle: "Collections: Your collections",
            keywords: "Gods Unchained,Godsunchained,TCG,Trading Card Game, CCG,card game,lore,strategy game,blockchain game,crypto game, free to play, play to earn, gu inventory, gods unchained inventory",
            description: "View your Gods Unchained collection."
        },
        openPacks: {
            shortName: "open packs",
            path: "open-packs",
            icon: "nav_temple",
            pageTitle: "Open Gods Unchained card packs you've purchased.",
            keywords: "Gods Unchained,Godsunchained,TCG,Trading Card Game, CCG,card game,lore,strategy game,blockchain game,crypto game, free to play, play to earn, temple, gods unchained temple, gu card packs, open card packs, gu temple",
            description: "Open Gods Unchained card packs you've purchased."
        },
        token: {
            shortName: "$GODS token",
            path: "token",
            icon: "GUToken",
            children: {
                about: {
                    shortName: "About",
                    path: "token/about",
                    pageTitle: "Learn about GODS token",
                    featureFlag: fe.v.tokenEnabled
                },
                airdrop: {
                    shortName: "Claim",
                    path: "token/claim",
                    pageTitle: "Claim GODS token",
                    featureFlag: fe.v.claimAirdropEnabled
                },
                staking: {
                    shortName: "Staking",
                    path: "token/staking",
                    pageTitle: "Staking $GODS token",
                    featureFlag: fe.v.stakingEnabled
                }
            }
        }
    }, Ue = {
        manageWallets: {
            shortName: "Manage Wallets",
            path: "manage-wallets",
            pageTitle: "Connect a wallet to your GodsUnchained user account",
            visible: !0
        }, logOut: {shortName: "Log Out", visible: !0}
    }, Xe = Le => ({
        home: {shortName: "arena", path: "game/gu/game-modes", icon: "nav_arena", pageTitle: "Gods Unchained homepage"},
        market: {
            shortName: "star store",
            path: "game/gu/star-store",
            pageTitle: "Star Store",
            icon: "collectable_stars"
        },
        collections: {
            shortName: "collections",
            path: "game/gu/inventory",
            icon: "nav_inventory",
            pageTitle: "Collections: Your collections"
        },
        workshop: {shortName: "workshop", path: "game/gu/my-decks", icon: "nav_workshop"},
        openPacks: {shortName: "open packs", path: "game/gu/temple", icon: "nav_temple"},
        learn: {
            shortName: "learn",
            icon: "nav_library",
            path: "learn",
            children: {
                cards: {shortName: "cards", url: `${Le.guWebsite}/${ke.learn.children.cards.path}`},
                faq: {
                    shortName: "faq",
                    url: "//support.godsunchained.com/hc/en-us/sections/1500001033441-Gods-Unchained-FAQ"
                },
                lore: {shortName: "lore", url: "//blog.godsunchained.com/category/lore"},
                blog: {shortName: "blog", url: "//blog.godsunchained.com"},
                guide: {shortName: "guide", url: "//blog.godsunchained.com/learn-to-play"},
                combatRecorder: {shortName: "Review game", url: "https://gufaq.com/logs"}
            }
        }
    }), et = Le => ({
        playToEarn: {
            shortName: "Play to Earn",
            path: "game/gu/play-to-earn",
            featureFlag: fe.v.playToEarnEnabled,
            visible: !0
        },
        manageWallets: {
            shortName: "Manage Wallets",
            url: `${Le.guWebsite}/${Ue.manageWallets.path}`,
            pageTitle: "Connect a wallet to your GodsUnchained user account",
            visible: !0
        },
        logOut: {shortName: "Log Out", visible: !0}
    })
}, 52886
:
(se, U, s) => {
    "use strict";
    s.d(U, {Zb: () => v, nE: () => P, nJ: () => l, Xl: () => a, PE: () => S});
    var l = (() => {
        return (O = l || (l = {}))[O.DIAMOND = 1] = "DIAMOND", O[O.GOLD = 2] = "GOLD", O[O.SHADOW = 3] = "SHADOW", O[O.METEORITE = 4] = "METEORITE", O[O.PLAIN = 5] = "PLAIN", l;
        var O
    })();
    const a = {
        [l.DIAMOND]: "diamond",
        [l.GOLD]: "gold",
        [l.SHADOW]: "shadow",
        [l.METEORITE]: "meteorite",
        [l.PLAIN]: "plain"
    };

    class v {
        constructor(y, M, o, h, C) {
            this.id = y, this.proto = M, this.quality = o, this.protoCard = h, this.status = C
        }
    }

    var P = (() => {
        return (O = P || (P = {}))[O.All = -1] = "All", O[O.Owned = 0] = "Owned", O[O.Unowned = 1] = "Unowned", O[O.Processing = 2] = "Processing", P;
        var O
    })(), S = (() => {
        return (O = S || (S = {}))[O.AscID = 0] = "AscID", O[O.DescID = 1] = "DescID", O[O.AscQuality = 2] = "AscQuality", O[O.DescQuality = 3] = "DescQuality", O[O.AscMana = 4] = "AscMana", O[O.DescMana = 5] = "DescMana", O[O.AscScarcity = 6] = "AscScarcity", O[O.AscHealth = 7] = "AscHealth", O[O.DescHealth = 8] = "DescHealth", O[O.AscAttack = 9] = "AscAttack", O[O.DescAttack = 10] = "DescAttack", O[O.AscTribe = 11] = "AscTribe", O[O.DescTribe = 12] = "DescTribe", O[O.AscRarity = 13] = "AscRarity", O[O.DescRarity = 14] = "DescRarity", O[O.AscType = 15] = "AscType", O[O.DescType = 16] = "DescType", O[O.AscGod = 17] = "AscGod", O[O.DescGod = 18] = "DescGod", O[O.AscSet = 19] = "AscSet", O[O.DescSet = 20] = "DescSet", S;
        var O
    })()
}, 28510
:
(se, U, s) => {
    "use strict";
    s.d(U, {mX: () => v.mX, Qz: () => l.Q, Zd: () => i});
    var l = s(55943), a = s(5e3), v = s(46688);
    let i = (() => {
        class t {
        }

        return t.\u0275fac = function (u) {
            return new (u || t)
        }, t.\u0275mod = a.oAB({type: t}), t.\u0275inj = a.cJS({providers: [l.Q]}), t
    })()
}, 46688
:
(se, U, s) => {
    "use strict";
    s.d(U, {m3: () => l, mX: () => a, x0: () => v});

    class l {
        constructor(t, d, u) {
            this.nodes = t, this.viewRef = d, this.componentRef = u
        }
    }

    class a {
        close(t) {
        }

        dismiss(t) {
        }
    }

    class v {
        constructor(t, d, u, n) {
            this.windowComponentRef = t, this.contentRef = d, this.backdropComponentRef = u, this._beforeDismiss = n, t.instance.dismissEvent.subscribe(e => {
                this.dismiss(e)
            }), this.result = new Promise((e, r) => {
                this.resolve = e, this.reject = r
            }), this.result.then(null, () => {
            })
        }

        get componentInstance() {
            if (this.contentRef && this.contentRef.componentRef) return this.contentRef.componentRef.instance
        }

        close(t) {
            this.windowComponentRef && (this.resolve(t), this.removeModalElements())
        }

        dismissModal(t) {
            this.reject(t), this.removeModalElements()
        }

        dismiss(t) {
            if (this.windowComponentRef) if (this._beforeDismiss) {
                const d = this._beforeDismiss();
                d && d.then ? d.then(u => {
                    !1 !== u && this.dismissModal(t)
                }, () => {
                }) : !1 !== d && this.dismissModal(t)
            } else this.dismissModal(t)
        }

        removeModalElements() {
            const t = this.windowComponentRef.location.nativeElement;
            if (t.parentNode.removeChild(t), this.windowComponentRef.destroy(), this.backdropComponentRef) {
                const d = this.backdropComponentRef.location.nativeElement;
                d.parentNode.removeChild(d), this.backdropComponentRef.destroy()
            }
            this.contentRef && this.contentRef.viewRef && this.contentRef.viewRef.destroy(), this.windowComponentRef = null, this.backdropComponentRef = null, this.contentRef = null
        }
    }
}, 55943
:
(se, U, s) => {
    "use strict";
    s.d(U, {Q: () => be});
    var l = s(5e3), a = s(69808), v = s(8929), i = s(23753), t = s(7625), d = s(24850), u = s(92198), n = s(87168),
        e = (() => {
            return (W = e || (e = {}))[W.Tab = 9] = "Tab", W[W.Enter = 13] = "Enter", W[W.Escape = 27] = "Escape", W[W.Space = 32] = "Space", W[W.PageUp = 33] = "PageUp", W[W.PageDown = 34] = "PageDown", W[W.End = 35] = "End", W[W.Home = 36] = "Home", W[W.ArrowLeft = 37] = "ArrowLeft", W[W.ArrowUp = 38] = "ArrowUp", W[W.ArrowRight = 39] = "ArrowRight", W[W.ArrowDown = 40] = "ArrowDown", e;
            var W
        })();
    const r = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");

    function b(W) {
        const he = Array.from(W.querySelectorAll(r)).filter(J => -1 !== J.tabIndex);
        return [he[0], he[he.length - 1]]
    }

    var S = s(46688);

    function M(W) {
        return null != W
    }

    "undefined" != typeof Element && !Element.prototype.closest && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function (W) {
        let he = this;
        if (!document.documentElement.contains(he)) return null;
        do {
            if (he.matches(W)) return he;
            he = he.parentElement || he.parentNode
        } while (null !== he && 1 === he.nodeType);
        return null
    });
    var K = s(73307);
    let ce = (() => {
        class W {
            constructor(J) {
                this._environment = J
            }

            ngOnInit() {
                this.modalEnviornment = this._environment.clientType
            }
        }

        return W.\u0275fac = function (J) {
            return new (J || W)(l.Y36(K.Ho))
        }, W.\u0275cmp = l.Xpm({
            type: W,
            selectors: [["cerberus-modal-backdrop"]],
            hostVars: 2,
            hostBindings: function (J, ie) {
                2 & J && l.Tol("cerberusModal__backdrop" + (ie.backdropClass ? " " + ie.backdropClass : ""))
            },
            inputs: {backdropClass: "backdropClass"},
            decls: 0,
            vars: 0,
            template: function (J, ie) {
            },
            encapsulation: 2
        }), W
    })();
    var ae = s(2994), me = s(87545), G = s(72986), Y = (() => {
        return (W = Y || (Y = {}))[W.BACKDROP_CLICK = 0] = "BACKDROP_CLICK", W[W.ESC = 1] = "ESC", Y;
        var W
    })();
    const ue = ["dialog"], oe = ["*"];
    let Ce = (() => {
        class W {
            constructor(J, ie, ge, fe) {
                this.environment = J, this.document = ie, this.elRef = ge, this.zone = fe, this.closed$ = new v.xQ, this.backdrop = !0, this.keyboard = !0, this.defaultStylings = !0, this.dismissEvent = new l.vpe
            }

            dismiss(J) {
                this.dismissEvent.emit(J)
            }

            ngOnInit() {
                this.elWithFocus = this.document.activeElement, this.modalEnviornment = this.environment.clientType
            }

            ngAfterViewInit() {
                const {nativeElement: J} = this.elRef;
                if (this.zone.runOutsideAngular(() => {
                    (0, i.R)(J, "keydown").pipe((0, t.R)(this.closed$), (0, u.h)(ge => ge.which === e.Escape && this.keyboard)).subscribe(ge => requestAnimationFrame(() => {
                        ge.defaultPrevented || this.zone.run(() => this.dismiss(Y.ESC))
                    }));
                    let ie = !1;
                    (0, i.R)(this._dialogEl.nativeElement, "mousedown").pipe((0, t.R)(this.closed$), (0, ae.b)(() => ie = !1), (0, me.w)(() => (0, i.R)(J, "mouseup").pipe((0, t.R)(this.closed$), (0, G.q)(1))), (0, u.h)(({target: ge}) => J === ge)).subscribe(() => {
                        ie = !0
                    }), (0, i.R)(J, "click").pipe((0, t.R)(this.closed$)).subscribe(({target: ge}) => {
                        !0 === this.backdrop && J === ge && !ie && this.zone.run(() => this.dismiss(Y.BACKDROP_CLICK)), ie = !1
                    })
                }), !J.contains(document.activeElement)) {
                    const ie = J.querySelector("[ngbAutofocus]"), ge = b(J)[0];
                    (ie || ge || J).focus()
                }
            }

            ngOnDestroy() {
                const J = this.document.body, ie = this.elWithFocus;
                let ge;
                ge = ie && ie.focus && J.contains(ie) ? ie : J, this.zone.runOutsideAngular(() => {
                    setTimeout(() => ge.focus()), this.elWithFocus = null
                }), this.closed$.next()
            }
        }

        return W.\u0275fac = function (J) {
            return new (J || W)(l.Y36(K.Ho), l.Y36(a.K0), l.Y36(l.SBq), l.Y36(l.R0b))
        }, W.\u0275cmp = l.Xpm({
            type: W,
            selectors: [["cerberus-modal-window"]],
            viewQuery: function (J, ie) {
                if (1 & J && l.Gf(ue, 7), 2 & J) {
                    let ge;
                    l.iGM(ge = l.CRH()) && (ie._dialogEl = ge.first)
                }
            },
            hostAttrs: ["role", "dialog", "tabindex", "-1"],
            hostVars: 4,
            hostBindings: function (J, ie) {
                2 & J && (l.uIk("aria-modal", !0)("aria-labelledby", ie.ariaLabelledBy), l.Tol("cerberusModal" + (ie.windowClass ? " " + ie.windowClass : "")))
            },
            inputs: {
                ariaLabelledBy: "ariaLabelledBy",
                backdrop: "backdrop",
                centered: "centered",
                keyboard: "keyboard",
                scrollable: "scrollable",
                size: "size",
                windowClass: "windowClass",
                defaultStylings: "defaultStylings"
            },
            outputs: {dismissEvent: "dismiss"},
            ngContentSelectors: oe,
            decls: 4,
            vars: 4,
            consts: [["role", "document"], ["dialog", ""]],
            template: function (J, ie) {
                1 & J && (l.F$t(), l.TgZ(0, "div", 0, 1)(2, "div"), l.Hsn(3), l.qZA()()), 2 & J && (l.Tol("cerberusModal__dialog" + (ie.size ? " cerberus-modal-" + ie.size : "") + (ie.defaultStylings ? " cerberusModal__dialog--defaultStylings" : "") + (ie.centered ? " cerberusModal__dialog--centered" : "") + (ie.scrollable ? " cerberusModal__dialog--scrollable" : "") + (ie.modalEnviornment ? " cerberusModal__dialog--" + ie.modalEnviornment : "")), l.xp6(2), l.Tol("cerberusModal__content" + (ie.defaultStylings ? " cerberusModal__content--defaultStylings" : "")))
            },
            styles: ['.cerberusModal__open{overflow:hidden;height:100vh;width:100vw;user-select:none;pointer-events:none}.cerberusModal__open .cerberusModal{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;user-select:auto;pointer-events:auto}.cerberusModal{position:fixed;top:0;left:0;z-index:22;width:100%;height:100%;overflow:hidden;outline:0;display:flex;justify-content:center;align-items:flex-start}.cerberusModal__dialog{position:relative;width:auto;pointer-events:none;justify-content:center;display:flex}.cerberusModal__dialog--scrollable{display:flex;max-height:calc(100% - 16px)}.cerberusModal__dialog--scrollable .cerberusModal__content{max-height:calc(100vh - 16px);overflow:hidden}.cerberusModal__dialog--scrollable .cerberusModal__header .cerberusModal__footer{flex-shrink:0}.cerberusModal__dialog--scrollable .cerberusModal__body{overflow-y:auto}.cerberusModal__dialog--defaultStylings{margin:8px}.cerberusModal__dialog--centered{display:flex;align-items:center;min-height:calc(100% - 16px);align-self:center}.cerberusModal__dialog--centered:before{display:block;height:calc(100vh - 16px);height:min-content;content:""}.cerberusModal__dialog--centered.cerberusModal__dialog--scrollable{flex-direction:column;justify-content:center;height:100%}.cerberusModal__dialog--centered.cerberusModal__dialog--scrollable .cerberusModal__content{max-height:none}.cerberusModal__dialog--centered.cerberusModal__dialog--scrollable:before{content:none}.cerberusModal__content{position:relative;flex-direction:column;display:flex;width:100%;pointer-events:auto;background-clip:padding-box;outline:0}.cerberusModal__content--defaultStylings{border:2px solid white;border:1px solid rgba(0,0,0,.2);background-color:#fff}.cerberusModal__backdrop{position:fixed;top:0;left:0;z-index:22;width:100vw;height:100vh;background-color:#000;opacity:.5}.cerberusModal__header{display:flex;align-items:flex-start;justify-content:space-between;padding:16px;border-bottom:1px solid #dee2e6}.cerberusModal__header .close{padding:16px;margin:-16px -16px -16px auto}.cerberusModal__title{margin-bottom:0;line-height:1.5}.cerberusModal__body{position:relative;flex:1 1 auto;padding:16px}.cerberusModal__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:12px;border-top:1px solid #dee2e6}.cerberusModal__footer>*{margin:4px}.cerberusModal__scrollbarMeasure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}\n', "cerberus-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}.cerberusModal__dialog--defaultStylings.cerberusModal__dialog--website{top:96px}.cerberusModal__dialog--defaultStylings.cerberusModal__dialog--desktop{top:calc(var(--vh) * 9)}\n"],
            encapsulation: 2
        }), W
    })();
    const H = () => {
    };
    let Z = (() => {
        class W {
            constructor(J) {
                this._document = J
            }

            compensate() {
                const J = this._getWidth();
                return this._isPresent(J) ? this._adjustBody(J) : H
            }

            _adjustBody(J) {
                const ie = this._document.body, ge = ie.style.paddingRight,
                    fe = parseFloat(window.getComputedStyle(ie)["padding-right"]);
                return ie.style["padding-right"] = `${fe + J}px`, () => ie.style["padding-right"] = ge
            }

            _isPresent(J) {
                const ie = this._document.body.getBoundingClientRect();
                return window.innerWidth - (ie.left + ie.right) >= J - .1 * J
            }

            _getWidth() {
                const J = this._document.createElement("div");
                J.className = "cerberusModal__scrollbarMeasure";
                const ie = this._document.body;
                ie.appendChild(J);
                const ge = J.getBoundingClientRect().width - J.clientWidth;
                return ie.removeChild(J), ge
            }
        }

        return W.\u0275fac = function (J) {
            return new (J || W)(l.LFG(a.K0))
        }, W.\u0275prov = l.Yz7({token: W, factory: W.\u0275fac, providedIn: "root"}), W
    })(), de = (() => {
        class W {
            constructor(J, ie, ge, fe, ke, Ue) {
                this.applicationRef = J, this.injector = ie, this.document = ge, this.scrollBar = fe, this.rendererFactory = ke, this.ngZone = Ue, this.activeWindowComponentHasChanged = new v.xQ, this.ariaHiddenValues = new Map, this.backdropAttributes = ["backdropClass"], this.modalRefs = [], this.windowAttributes = ["ariaLabelledBy", "backdrop", "centered", "keyboard", "scrollable", "size", "windowClass", "defaultStylings"], this.windowComponents = [], this.activeWindowComponentHasChanged.subscribe(() => {
                    if (this.windowComponents.length) {
                        const Xe = this.windowComponents[this.windowComponents.length - 1];
                        ((W, he, J, ie = !1) => {
                            this.ngZone.runOutsideAngular(() => {
                                const ge = (0, i.R)(he, "focusin").pipe((0, t.R)(J), (0, d.U)(fe => fe.target));
                                (0, i.R)(he, "keydown").pipe((0, t.R)(J), (0, u.h)(fe => fe.which === e.Tab), (0, n.M)(ge)).subscribe(([fe, ke]) => {
                                    const [Ue, Xe] = b(he);
                                    (ke === Ue || ke === he) && fe.shiftKey && (Xe.focus(), fe.preventDefault()), ke === Xe && !fe.shiftKey && (Ue.focus(), fe.preventDefault())
                                }), ie && (0, i.R)(he, "click").pipe((0, t.R)(J), (0, n.M)(ge), (0, d.U)(fe => fe[1])).subscribe(fe => fe.focus())
                            })
                        })(0, Xe.location.nativeElement, this.activeWindowComponentHasChanged), this.revertAriaHidden(), this.setAriaHidden(Xe.location.nativeElement)
                    }
                })
            }

            open(J, ie, ge, fe) {
                const ke = fe.container instanceof HTMLElement ? fe.container : M(fe.container) ? this.document.querySelector(fe.container) : this.document.body,
                    Ue = this.rendererFactory.createRenderer(null, null), Xe = this.scrollBar.compensate(), et = () => {
                        this.modalRefs.length || (Ue.removeClass(this.document.querySelector("html"), "cerberusModal__open"), this.revertAriaHidden())
                    };
                if (!ke) throw new Error(`The specified modal container "${fe.container || "body"}" was not found in the DOM.`);
                const ht = new S.mX, Le = this.getContentRef(J, fe.injector || ie, ge, ht, fe);
                let Ie = !1 !== fe.backdrop ? this.attachBackdrop(J, ke) : null,
                    B = this.attachWindowComponent(J, ke, Le), Q = new S.x0(B, Le, Ie, fe.beforeDismiss);
                return this.registerModalRef(Q), this.registerWindowComponent(B), Q.result.then(Xe, Xe), Q.result.then(et, et), ht.close = le => {
                    Q.close(le)
                }, ht.dismiss = le => {
                    Q.dismiss(le)
                }, this.applyWindowOptions(B.instance, fe), 1 === this.modalRefs.length && Ue.addClass(this.document.querySelector("html"), "cerberusModal__open"), Ie && Ie.instance && this.applyBackdropOptions(Ie.instance, fe), Q
            }

            dismissAll(J) {
                this.modalRefs.forEach(ie => ie.dismiss(J))
            }

            hasOpenModals() {
                return this.modalRefs.length > 0
            }

            attachBackdrop(J, ie) {
                let fe = J.resolveComponentFactory(ce).create(this.injector);
                return this.applicationRef.attachView(fe.hostView), ie.appendChild(fe.location.nativeElement), fe
            }

            attachWindowComponent(J, ie, ge) {
                let ke = J.resolveComponentFactory(Ce).create(this.injector, ge.nodes);
                return this.applicationRef.attachView(ke.hostView), ie.appendChild(ke.location.nativeElement), ke
            }

            applyWindowOptions(J, ie) {
                this.windowAttributes.forEach(ge => {
                    M(ie[ge]) && (J[ge] = ie[ge])
                })
            }

            applyBackdropOptions(J, ie) {
                this.backdropAttributes.forEach(ge => {
                    M(ie[ge]) && (J[ge] = ie[ge])
                })
            }

            getContentRef(J, ie, ge, fe, ke) {
                return ge ? ge instanceof l.Rgc ? this.createFromTemplateRef(ge, fe) : function $(W) {
                    return "string" == typeof W
                }(ge) ? this.createFromString(ge) : this.createFromComponent(J, ie, ge, fe, ke) : new S.m3([])
            }

            createFromTemplateRef(J, ie) {
                const fe = J.createEmbeddedView({
                    $implicit: ie, close(ke) {
                        ie.close(ke)
                    }, dismiss(ke) {
                        ie.dismiss(ke)
                    }
                });
                return this.applicationRef.attachView(fe), new S.m3([fe.rootNodes], fe)
            }

            createFromString(J) {
                const ie = this.document.createTextNode(`${J}`);
                return new S.m3([[ie]])
            }

            createFromComponent(J, ie, ge, fe, ke) {
                const Ue = J.resolveComponentFactory(ge),
                    Xe = l.zs3.create({providers: [{provide: S.mX, useValue: fe}], parent: ie}), et = Ue.create(Xe),
                    ht = et.location.nativeElement;
                return ke.scrollable && ht.classList.add("component-host-scrollable"), this.applicationRef.attachView(et.hostView), new S.m3([[ht]], et.hostView, et)
            }

            setAriaHidden(J) {
                const ie = J.parentElement;
                ie && J !== this.document.body && (Array.from(ie.children).forEach(ge => {
                    ge !== J && "SCRIPT" !== ge.nodeName && (this.ariaHiddenValues.set(ge, ge.getAttribute("aria-hidden")), ge.setAttribute("aria-hidden", "true"))
                }), this.setAriaHidden(ie))
            }

            revertAriaHidden() {
                this.ariaHiddenValues.forEach((J, ie) => {
                    J ? ie.setAttribute("aria-hidden", J) : ie.removeAttribute("aria-hidden")
                }), this.ariaHiddenValues.clear()
            }

            registerModalRef(J) {
                const ie = () => {
                    const ge = this.modalRefs.indexOf(J);
                    ge > -1 && this.modalRefs.splice(ge, 1)
                };
                this.modalRefs.push(J), J.result.then(ie, ie)
            }

            registerWindowComponent(J) {
                this.windowComponents.push(J), this.activeWindowComponentHasChanged.next(), J.onDestroy(() => {
                    const ie = this.windowComponents.indexOf(J);
                    ie > -1 && (this.windowComponents.splice(ie, 1), this.activeWindowComponentHasChanged.next())
                })
            }
        }

        return W.\u0275fac = function (J) {
            return new (J || W)(l.LFG(l.z2F), l.LFG(l.zs3), l.LFG(a.K0), l.LFG(Z), l.LFG(l.FYo), l.LFG(l.R0b))
        }, W.\u0275prov = l.Yz7({token: W, factory: W.\u0275fac, providedIn: "root"}), W
    })(), xe = (() => {
        class W {
            constructor() {
                this.backdrop = !0, this.keyboard = !0
            }
        }

        return W.\u0275fac = function (J) {
            return new (J || W)
        }, W.\u0275prov = l.Yz7({token: W, factory: W.\u0275fac, providedIn: "root"}), W
    })(), be = (() => {
        class W {
            constructor(J, ie, ge, fe) {
                console.log('fe: ', fe);
                this.moduleCFR = J, this.injector = ie, this.modalStack = ge, this.config = fe
            }

            open(J, ie = {}) {
                const ge = Object.assign({}, this.config, ie);
                return this.modalStack.open(this.moduleCFR, this.injector, J, ge)
            }

            dismissAll(J) {
                this.modalStack.dismissAll(J)
            }

            hasOpenModals() {
                return this.modalStack.hasOpenModals()
            }
        }

        return W.\u0275fac = function (J) {
            return new (J || W)(l.LFG(l._Vd), l.LFG(l.zs3), l.LFG(de), l.LFG(xe))
        }, W.\u0275prov = l.Yz7({token: W, factory: W.\u0275fac, providedIn: "root"}), W
    })()
}, 51395
:
(se, U, s) => {
    "use strict";
    s.d(U, {W: () => ce, F: () => I});
    var l = s(73307), a = s(591), v = s(21086), i = s(36053), t = s(72986), d = s(24850), u = s(2994), n = s(92198),
        e = s(61709), r = s(27221), b = s(87545), P = s(5e3), S = s(55195);
    let I = (() => {
        class ae {
            constructor(G, Y, ue, oe, Ce) {
                this.authService = G, this.gameApi = Y, this.ethService = ue, this.cardsService = oe, this.filterService = Ce, this._unopenedPacks$ = new a.X([]), this._currentRaffleTicketTotal$ = new a.X(0), this.dataStore = {
                    unopenedPacks: [],
                    currentRaffleTicketTotal: 0
                }
            }

            get unopenedPacks$() {
                return this._unopenedPacks$.asObservable()
            }

            get currentRaffleTicketTotal$() {
                return this._currentRaffleTicketTotal$.asObservable()
            }

            fetchUnopenedPacks() {
                this.fetchUnopenedPacksById().pipe((0, t.q)(1)).subscribe()
            }

            fetchUnopenedPacksById() {
                const G = this.authService.getUserId();
                return G ? this.gameApi.get(`/user/${G}/allpacks`).pipe((0, t.q)(1), (0, d.U)(Y => this.formatPacks(Y, !0)), (0, d.U)(Y => this.fixGodAlignments(Y)), (0, u.b)(Y => {
                    this.dataStore.unopenedPacks = Y, this._unopenedPacks$.next([...this.dataStore.unopenedPacks])
                })) : (0, v.of)([])
            }

            fetchCurrentTotalRaffleTickets({userId: G, wallet: Y}) {
                return G || Y ? this.gameApi.get(`/user/${G || Y}/tickets`).pipe((0, t.q)(1)).subscribe(ue => {
                    this.dataStore.currentRaffleTicketTotal = ue, this._currentRaffleTicketTotal$.next(ue)
                }) : console.error("no wallet or userId supplied")
            }

            formatPacks(G, Y = !1) {
                return G.map(ue => Object.assign(Object.assign({}, ue), {
                    rarity: this.updateRarity(ue),
                    raffleTickets: this.updatePackRaffleTickets(ue),
                    requiresAuthentication: Y
                }))
            }

            updateScarcityAndRarity$(G) {
                return (0, i.aj)([this.cardsService.protoCards$, this.cardsService.qualityCounts$]).pipe((0, n.h)(([Y, ue]) => Y && Y.size > 0 && ue && ue.size > 0), (0, t.q)(1), (0, d.U)(([Y, ue]) => G.map(oe => Object.assign(Object.assign({}, oe), {cards: this.updateScarcityAndRarity(oe.cards, Y, ue)}))))
            }

            fixGodAlignments(G) {
                return G.map(Y => Object.assign(Object.assign({}, Y), {god: "all" === Y.god || "core" === Y.god ? "neutral" : Y.god}))
            }

            updatePackRaffleTickets(G) {
                if (G && G.extra) {
                    const Y = G.extra.find(ue => "tickets" === ue.name);
                    return Y ? Y.value : void 0
                }
            }

            updateRarity(G) {
                return "shiny" === G.rarity ? "shiny-legendary" : G.rarity
            }

            updateScarcityAndRarity(G, Y, ue) {
                const oe = ["epic", "legendary", "mythic"];
                return G.map(Ce => {
                    const H = Y.get(Ce.proto);
                    return !H || (Ce.rarity = H.rarity, "core" === H.set) || ("mythic" === Ce.rarity ? Ce.scarcity = 1 : (oe.includes(Ce.rarity) || Ce.quality < 5) && (Ce.scarcity = this.filterService.calcScarcity(Ce.proto, Ce.quality, ue))), Ce
                })
            }

            openPackAuthenticated$(G, Y = !0) {
                const ue = this.authService.getUserId();
                return this.authService.fetchSession().pipe((0, t.q)(1), (0, e.VS)(oe => this.gameApi.put(`/user/${ue}/allpacks?session=${oe}`, G)), (0, u.b)(oe => {
                    this.dataStore.unopenedPacks = this.dataStore.unopenedPacks.filter(H => H.pack_id !== G.pack_id), this._unopenedPacks$.next([...this.dataStore.unopenedPacks]);
                    const Ce = this.packToInventoryCardsMap(G);
                    this.cardsService.addCardsToInventory(Ce)
                }), (0, r.K)(oe => 401 === oe.status && Y ? this.authService.refreshToken().pipe((0, e.VS)(Ce => this.openPackAuthenticated$(G, !1))) : (0, v.of)(oe)))
            }

            dummyOpenPack(G) {
                return this.dataStore.unopenedPacks = this.dataStore.unopenedPacks.filter(Y => Y.pack_id !== G.pack_id), this._unopenedPacks$.next([...this.dataStore.unopenedPacks]), (0, v.of)(!0)
            }

            openPackUnauthenticated$(G) {
                return this.ethService.getAccount().pipe((0, t.q)(1), (0, b.w)(Y => this.gameApi.put(`/user/${Y}/allpacks`, G)), (0, u.b)(Y => {
                    this.dataStore.unopenedPacks = this.dataStore.unopenedPacks.filter(ue => ue.pack_id !== G.pack_id), this._unopenedPacks$.next([...this.dataStore.unopenedPacks])
                }))
            }

            openPack$(G) {
                return G.requiresAuthentication ? this.openPackAuthenticated$(G) : this.openPackUnauthenticated$(G)
            }

            packToInventoryCardsMap(G) {
                const Y = {};
                return G.cards.forEach(ue => {
                    const oe = {q: ue.quality, id: ue.id};
                    Y[ue.proto] ? Y[ue.proto].push(oe) : Y[ue.proto] = [oe]
                }), Y
            }

            generateRandomDummyPacks(G) {
                return Array.from({length: G}, (Y, ue) => ({
                    cards: this.generateRandomDummyCards(5),
                    god: this.chooseRandomGod(),
                    set: "core",
                    rarity: "rare",
                    pack_id: 234423 + ue,
                    pack_source: "reward",
                    raffleTickets: Math.abs(Math.floor(5e4 * Math.random()))
                }))
            }

            generateRandomDummyCards(G) {
                return Array.from({length: G}, (Y, ue) => ({
                    proto: this.generateCardProto(),
                    id: ue + 1,
                    rarity: this.chooseRandomCardRarity(),
                    quality: Math.ceil(5 * Math.random()),
                    scarcity: Math.ceil(2e3 * Math.random())
                }))
            }

            chooseRandomPackRarity() {
                const G = ["rare", "legendary"];
                return G[Math.ceil(Math.random() * G.length - 1)]
            }

            chooseRandomCardRarity() {
                const G = ["common", "rare", "epic", "legendary"];
                return G[Math.ceil(Math.random() * G.length - 1)]
            }

            chooseRandomGod() {
                const G = ["nature", "death", "nature", "war", "neutral", "deception", "light", "magic"];
                return G[Math.ceil(Math.random() * G.length - 1)]
            }

            generateCardProto() {
                const G = Math.ceil(384 * Math.random());
                return [382, 383, 384, 378, 379].includes(G) ? this.generateCardProto() : G
            }
        }

        return ae.\u0275fac = function (G) {
            return new (G || ae)(P.LFG(l.mI), P.LFG(S.Ft), P.LFG(l.ux), P.LFG(S.dK), P.LFG(S.iZ))
        }, ae.\u0275prov = P.Yz7({token: ae, factory: ae.\u0275fac, providedIn: "root"}), ae
    })();
    var w = s(40886), x = (() => {
        return (ae = x || (x = {}))[ae.RARE_GENESIS = 0] = "RARE_GENESIS", ae[ae.RARE_TRIAL = 1] = "RARE_TRIAL", ae[ae.LEGENDARY_GENESIS = 2] = "LEGENDARY_GENESIS", ae[ae.LEGENDARY_TRIAL = 3] = "LEGENDARY_TRIAL", x;
        var ae
    })(), $ = s(52909), O = s(18499), y = s(13989), M = s(45425), o = s(5254), h = s(61737), C = s(77518);
    const T = s(45861), K = s(92916);
    let ce = (() => {
        class ae {
            constructor(G, Y) {
                if (this.environment = G, this.ethService = Y, this._chests$ = new a.X([]), console.log("ChestService->constructor()"), "desktop" !== this.environment.clientType) {
                    try {
                        this.setupGenesis()
                    } catch (ue) {
                        console.log("ChestService->constructor() error setting up genesis chests", ue)
                    }
                    try {
                        this.setupTrial()
                    } catch (ue) {
                        console.log("ChestService->constructor() error setting up trial chests", ue)
                    }
                    this.dataStore = {chests: this.chestData()}, this._chests$.next([...this.dataStore.chests])
                }
            }

            get chests$() {
                return this._chests$.asObservable()
            }

            setupGenesis() {
                this.RareGenesis = this.ethService.artifactsToContract(T, "0xEE85966b4974d3C6F71A2779cC3B6F53aFbc2B68"), this.LegendaryGenesis = this.ethService.artifactsToContract(T, "0x20D4Cec36528e1C4563c1BFbE3De06aBa70b22B4"), this.Vault = this.ethService.artifactsToContract(K, K.networks[1]), this.VaultInfura = this.ethService.infuraContract(K, K.networks[1]), this.LegendaryGenesisInfura = this.ethService.infuraContract(T, "0x20D4Cec36528e1C4563c1BFbE3De06aBa70b22B4")
            }

            setupTrial() {
                const G = this.environment.production ? C.np.Production : C.np.Staging,
                    Y = this.environment.production ? "https://eth-mainnet.alchemyapi.io/v2/ICJe8nw_i-gl_3E6V6I942RRJ3PMs5vB" : "https://eth-ropsten.alchemyapi.io/v2/ICJe8nw_i-gl_3E6V6I942RRJ3PMs5vB",
                    ue = this.environment.production ? w.t : w.Y, oe = (0, O.getGodsUnchainedAddresses)(ue, G),
                    H = ((0, O.getGodsUnchainedAddresses)(ue, G), (0, O.getGodsUnchainedAddresses)(ue, G).seasonOne.capAddress);
                if (window.ethereum) {
                    const de = new y.Qg(window.ethereum).getSigner();
                    console.log("ChestService->setup() signer", de), this.RareTrial = O.Chest.at(de, oe.seasonOne.rareChestAddress), console.log("ChestService->setup() RareTrial", this.RareTrial), this.LegendaryTrial = O.Chest.at(de, oe.seasonOne.legendaryChestAddress), console.log("ChestService->setup() LegendaryTrial", this.LegendaryTrial), this.S1Cap = O.S1Cap.at(de, H), console.log("ChestService->setup() S1Cap", this.S1Cap)
                }
                const Z = new y.r6(Y, ue);
                this.RareTrialAlchemy = O.Chest.at(Z, oe.seasonOne.rareChestAddress), this.LegendaryTrialAlchemy = O.Chest.at(Z, oe.seasonOne.legendaryChestAddress), this.S1CapAlchemy = O.S1Cap.at(Z, H)
            }

            s1CapCap() {
                return (0, o.D)(this.S1Cap.cap()).pipe((0, r.K)(G => (0, o.D)(this.S1CapAlchemy.cap())))
            }

            s1CapCurrent() {
                return (0, o.D)(this.S1Cap.current()).pipe((0, r.K)(G => (0, o.D)(this.S1CapAlchemy.current())))
            }

            s1CapProgressPercentage() {
                return (0, i.aj)([this.s1CapCurrent(), this.s1CapCap()]).pipe((0, t.q)(1), (0, d.U)(([G, Y]) => {
                    try {
                        const ue = G.toNumber(), oe = Y.toNumber();
                        return (oe - ue) / oe * 100
                    } catch (ue) {
                        return 100
                    }
                }))
            }

            soldTrial(G) {
                return (0, o.D)(this.getContractTrial(G).sold()).pipe((0, r.K)(Y => (0, o.D)(this.getContractTrialAlchemy(G).sold())))
            }

            capTrial(G) {
                return (0, o.D)(this.getContractTrial(G).productCap()).pipe((0, r.K)(Y => (0, o.D)(this.getContractTrialAlchemy(G).productCap())))
            }

            balanceOfTrial(G, Y) {
                const ue = this.getContractTrial(G);
                return (0, i.aj)([ue.balanceOf(Y), (0, o.D)(ue.decimals())]).pipe((0, d.U)(([oe, Ce]) => {
                    const H = new M.ethers.utils.BigNumber(10).pow(Ce);
                    return oe.div(H)
                }))
            }

            getContractTrial(G) {
                switch (G) {
                    case x.RARE_TRIAL:
                        return this.RareTrial;
                    case x.LEGENDARY_TRIAL:
                        return this.LegendaryTrial
                }
            }

            getContractTrialAlchemy(G) {
                switch (G) {
                    case x.RARE_TRIAL:
                        return this.RareTrialAlchemy;
                    case x.LEGENDARY_TRIAL:
                        return this.LegendaryTrialAlchemy
                }
            }

            fetchChests() {
                this.ethService.getAccount().pipe((0, t.q)(1), (0, e.VS)(G => (0, i.aj)([this.balanceOf(x.RARE_GENESIS, G), this.balanceOf(x.LEGENDARY_GENESIS, G), this.balanceOfTrial(x.RARE_TRIAL, G), this.balanceOfTrial(x.LEGENDARY_TRIAL, G)]))).subscribe(([G, Y, ue, oe]) => {
                    console.log("fetched Num Bundles rare leg", G, Y), this.dataStore.chests = this.chestData(G.toNumber(), Y.toNumber(), Math.floor(ue.toNumber()), Math.floor(oe.toNumber())), this._chests$.next([...this.dataStore.chests])
                })
            }

            percentageSold(G) {
                return (0, i.aj)([this.soldTrial(G), this.capTrial(G)]).pipe((0, d.U)(([Y, ue]) => this.progressPercentage(Y, ue)))
            }

            progressPercentage(G, Y) {
                try {
                    const ue = G.toNumber(), oe = Y.toNumber();
                    return (oe - ue) / oe * 100
                } catch (ue) {
                    return 100
                }
            }

            balanceOf(G, Y) {
                return this.getContract(G).pipe((0, e.VS)(ue => ue.balanceOf(Y)), (0, d.U)(ue => ue), (0, u.b)(ue => {
                    console.log("ChestService->balanceOf() BALANCE", G, ue)
                }), (0, r.K)(ue => (console.log("error getting balanceOf ", G, ue), (0, v.of)($.O$.from(0)))))
            }

            open(G, Y) {
                return this.getContract(G).pipe((0, e.VS)(ue => ue.open(Y)), (0, u.b)(ue => {
                    this.dataStore.chests.find(Ce => Ce.type === G).amount -= Y, this._chests$.next([...this.dataStore.chests])
                }))
            }

            cap(G) {
                return this.getContract(G).pipe((0, e.VS)(Y => Y.productCap()), (0, d.U)(Y => Y))
            }

            sold(G) {
                return this.getContract(G).pipe((0, e.VS)(Y => Y.sold()), (0, d.U)(Y => Y), (0, r.K)(Y => this.soldInfura(G)))
            }

            soldInfura(G) {
                return this.getContractInfura(G).pipe((0, e.VS)(Y => Y.sold()), (0, d.U)(Y => Y))
            }

            vaultBalance() {
                return (0, o.D)(this.Vault.deployed()).pipe((0, e.VS)(G => G.total()), (0, d.U)(G => G), (0, r.K)(G => this.vaultBalanceInfura()))
            }

            vaultBalanceInfura() {
                return (0, o.D)(this.VaultInfura.deployed()).pipe((0, e.VS)(G => G.total()), (0, d.U)(G => G))
            }

            vaultCap() {
                return (0, v.of)($.O$.from("33333000000000000000000"))
            }

            getContract(G) {
                switch (G) {
                    case x.RARE_GENESIS:
                        return (0, o.D)(this.RareGenesis.deployed());
                    case x.LEGENDARY_GENESIS:
                        return (0, o.D)(this.LegendaryGenesis.deployed());
                    case x.RARE_TRIAL:
                        return (0, v.of)(this.RareTrial);
                    case x.LEGENDARY_TRIAL:
                        return (0, v.of)(this.LegendaryTrial)
                }
                return (0, h._)("invalid bundle pack type")
            }

            getContractInfura(G) {
                return G === x.LEGENDARY_GENESIS ? (0, o.D)(this.LegendaryGenesisInfura.deployed()) : (0, h._)("invalid bundle pack type")
            }

            chestData(G = 0, Y = 0, ue = 0, oe = 0) {
                return [{type: x.RARE_GENESIS, set: "genesis", rarity: "rare", amount: G}, {
                    type: x.LEGENDARY_GENESIS,
                    set: "genesis",
                    rarity: "legendary",
                    amount: Y
                }, {type: x.RARE_TRIAL, set: "trial", rarity: "rare", amount: ue}, {
                    type: x.LEGENDARY_TRIAL,
                    set: "trial",
                    rarity: "legendary",
                    amount: oe
                }]
            }
        }

        return ae.\u0275fac = function (G) {
            return new (G || ae)(P.LFG(l.Ho), P.LFG(l.ux))
        }, ae.\u0275prov = P.Yz7({token: ae, factory: ae.\u0275fac, providedIn: "root"}), ae
    })()
}, 55195
:
(se, U, s) => {
    "use strict";
    s.d(U, {
        jt: () => ae,
        yD: () => oe,
        QF: () => J,
        f1: () => Xe,
        dK: () => et.d,
        tX: () => ht,
        fN: () => Le,
        ai: () => Ie.a,
        iZ: () => Q,
        vU: () => Ie.v,
        TJ: () => tt,
        pH: () => Be,
        Of: () => Ce,
        Ft: () => Ee.F,
        n2: () => he,
        _q: () => ot._,
        LE: () => Ue.L,
        fY: () => We.f,
        C_: () => rt,
        xd: () => _e,
        $c: () => Pe,
        cM: () => ee,
        $: () => Ve.$
    }), s(78271);
    var a = s(21086), v = s(52886), i = s(77518);
    const d = {
        request_id: "request_id",
        catalog_item: "forge-common",
        user_id: 1077441,
        address: "address",
        flux_amount: 10,
        token_amount: "200000000000000000",
        status: i.Og.FLUX_PAID,
        source_assets: [{
            id: 1688181,
            proto: 1e3,
            quality: v.nJ.SHADOW,
            owner: "1124932",
            rarity: "rare",
            set: "core",
            name: "Dryder Sailweaver"
        }, {
            id: 1688182,
            proto: 1e3,
            quality: v.nJ.SHADOW,
            owner: "1124932",
            rarity: "rare",
            set: "core",
            name: "Dryder Sailweaver"
        }],
        target_assets: [{
            id: 0,
            proto: 1e3,
            quality: v.nJ.METEORITE,
            owner: "0x06debe71584bcdc776bace99abc87b48db4f29d8",
            rarity: "rare",
            set: "core",
            name: "Dryder Sailweaver"
        }],
        created_at: "2021-10-10T00:00:00Z",
        modified_at: "2021-10-10T00:00:00Z",
        imx_tx_id: 0,
        token_contract: "token_contract",
        token_payment_address: "token_payment_address"
    };
    Object.assign(Object.assign({}, d), {imx_tx_id: 123, status: i.Og.TOKENS_PAID});
    Object.assign(Object.assign({}, d), {
        imx_tx_id: 125,
        status: i.Og.COMPLETED
    }), Object.assign(Object.assign({}, d), {
        imx_tx_id: 125,
        status: i.Og.COMPLETED
    }), Object.assign(Object.assign({}, d), {imx_tx_id: 0, status: i.Og.CARDS_DELETED});
    var $ = s(85111), O = s(69808), y = s(5e3), M = s(73307), h = s(60870);
    let ae = (() => {
        class N {
            constructor(c, _, E, te) {
                this.deviceDetectorService = c, this.environment = _, this.authService = E, this.storage = te, this.brand = "godsunchained", this.appVersion = "0.13.3", this.initAnalyticsProperties(), this.initDeviceProperties(), this.initSessionProperties(), this.initUserProperties()
            }

            initAnalyticsProperties() {
                this.appName = "website" === this.environment.clientType ? "com.immutable.guweb" : "com.immutable.gudesktop", this.appPlatform = this.environment.clientType, "desktop" === this.environment.clientType && (this.branch = this.storage.get(["game", "1", "branch"]) || "beta")
            }

            initDeviceProperties() {
                const _ = this.getDeviceId();
                this.deviceProperties = {
                    device_id: _ && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_) ? _ : s(66926)(),
                    os_name: this.deviceDetectorService.os,
                    os_version: this.deviceDetectorService.os_version,
                    app_platform: window.navigator.platform
                }, this.storage.set(["device_id"], _)
            }

            getDeviceId() {
                return this.storage.get(["device_id"])
            }

            initSessionProperties() {
                this.sessionProperties = {session_id: +new Date}
            }

            initUserProperties() {
                this.userId = this.authService.getUserId(), this.isUserSignedIn = !!this.userId, this.authService.account$.subscribe(c => {
                    this.isUserSignedIn = !!c, this.userId = this.isUserSignedIn ? `${this.authService.getUserId()}` : ""
                })
            }

            get producer() {
                return "website" === this.environment.clientType ? "web" : "client"
            }

            sendEvent(c) {
                try {
                    window.akuma(c)
                } catch (_) {
                    console.error(_)
                }
            }

            postScreenEvent(c, _, E, te, we, Ne) {
                const Dt = this.buildEvent("Screen", `${c}${_}${E}_${te}`, this.isUserSignedIn ? `${this.userId}` : `${Ne}`, we);
                this.sendEvent(Dt)
            }

            postControlEvent(c, _, E, te, we, Ne, mt, It) {
                const lt = this.buildEvent("Control", `${c}${_}${E}_${te}${we}_${Ne}`, this.isUserSignedIn ? `${this.userId}` : `${It}`, mt);
                this.sendEvent(lt)
            }

            postFlowEvent(c, _, E, te) {
                const mt = this.buildEvent("Flow", `_${c}_${_}`, this.isUserSignedIn ? `${this.userId}` : `${te}`, E);
                this.sendEvent(mt)
            }

            buildEvent(c, _, E, te) {
                return {
                    appBrand: this.brand,
                    appName: this.appName,
                    appPlatform: this.appPlatform,
                    appVersion: this.appVersion,
                    deviceProperties: this.deviceProperties,
                    eventProperties: te,
                    eventName: _,
                    eventType: c,
                    sessionProperties: this.sessionProperties,
                    userId: E,
                    userProperties: this.userProperties,
                    realm: this.branch
                }
            }

            postEvent(c, _, E, te) {
                const Ne = this.buildEvent(c, _, this.isUserSignedIn ? `${this.userId}` : `${te}`, E);
                this.sendEvent(Ne)
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(h.x0), y.LFG(M.Ho), y.LFG(M.mI), y.LFG(M.qy))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })();
    var me = s(40520), G = s(59633);
    const Y = "website";
    let oe = (() => {
        class N {
            constructor(c, _, E, te) {
                this.deviceDetectorService = c, this.httpClient = _, this.environment = E, this.storage = te, this.headers = new me.WM({"X-Chaff": this.environment.production ? "" : "test"});
                const we = this.getDeviceId();
                this.brand = "gods_unchained", this.device_id = we && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(we) ? we : s(66926)(), this.event_id = 0, this.native = this.environment.clientType !== Y, this.platform = window.navigator.platform, this.producer = this.deviceDetectorService.isDesktop() ? "desktop" : "mobile", this.os_name = this.deviceDetectorService.os, this.os_version = this.deviceDetectorService.os_version, this.service = this.environment.clientType === Y ? Y : "launcher", this.session_id = this.generateSessionId(), this.storage.set(["device_id"], this.device_id)
            }

            generateSessionId() {
                return +new Date
            }

            getUserId() {
                return this.storage.get(["user_id"])
            }

            getUTM() {
                return {
                    ad_id: this.storage.get(["ad_id"]),
                    utm_campaign: this.storage.get(["utm_campaign"]),
                    utm_content: this.storage.get(["utm_content"]),
                    utm_hash: this.storage.get(["utm_hash"]),
                    utm_medium: this.storage.get(["utm_medium"]),
                    utm_source: this.storage.get(["utm_source"])
                }
            }

            getDeviceId() {
                return this.storage.get(["device_id"])
            }

            postEvent(c, _) {
                const te = new G.Event({
                    brand: this.brand,
                    device_id: this.device_id,
                    event_id: this.event_id = this.event_id + 1,
                    event_properties: c,
                    native: this.native,
                    os_name: this.os_name,
                    os_version: this.os_version,
                    platform: this.platform,
                    producer: this.producer,
                    service: this.service,
                    session_id: this.session_id,
                    user_id: parseInt(this.getUserId(), 10),
                    user_properties: _
                }).toObject();
                return Object.assign(te.event_properties, this.getUTM()), this.httpClient.post(this.environment.analyticsHost, JSON.stringify(te), {headers: this.headers}).toPromise()
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(h.x0), y.LFG(me.eN), y.LFG(M.Ho), y.LFG(M.qy))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac, providedIn: "root"}), N
    })(), Ce = (() => {
        class N {
            constructor() {
            }

            setCurrentProvider(c) {
                try {
                    ga("set", "dimension1", c)
                } catch (_) {
                    console.log(_)
                }
            }

            setAccount(c) {
                try {
                    ga("set", "dimension2", c)
                } catch (_) {
                    console.log(_)
                }
            }

            setReferrer(c) {
                try {
                    ga("set", "dimension3", c)
                } catch (_) {
                    console.log(_)
                }
            }

            setClientId(c) {
                try {
                    ga("set", "dimension4", c)
                } catch (_) {
                    console.log(_)
                }
            }

            setSessionId(c) {
                try {
                    ga("set", "dimension5", c)
                } catch (_) {
                    console.log(_)
                }
            }

            setUserId(c) {
                try {
                    ga("set", "dimension6", c)
                } catch (_) {
                    console.log(_)
                }
            }

            setHitTimestamp(c) {
                try {
                    ga("set", "dimension7", c)
                } catch (_) {
                    console.log(_)
                }
            }

            setAbVersion(c) {
                try {
                    ga("set", "dimension8", c)
                } catch (_) {
                    console.log(_)
                }
            }

            triggerOutboundLinkEvent(c, _) {
                try {
                    let E = "";
                    E = E.split("?")[0], ga("send", "event", "Outbound Link", "click", E, c)
                } catch (E) {
                    console.log("could not track ga", E)
                }
            }

            triggerButtonClickEvent(c, _) {
                try {
                    let E = "";
                    E = E.split("?")[0], ga("send", "event", "Button", "click", E, c)
                } catch (E) {
                    console.log("could not track ga", E)
                }
            }

            triggerPageDeferLoadEvent(c, _) {
                try {
                    let E = "";
                    E = E.split("?")[0], ga("send", "event", "Page", "defer load", E, c)
                } catch (E) {
                    console.log("could not track ga", E)
                }
            }

            sendEvent(c, _, E, te, we) {
                try {
                    console.log(`GA Event: send, event, ${c}, ${_}, ${E}, ${te}, ${we}`), ga("send", "event", c, _, E, te, we)
                } catch (Ne) {
                    console.log("Error tracking GA", Ne)
                }
            }

            buyPackBanneCountry() {
                this.sendEvent("buy", "pack", "banned_country")
            }

            buyPackType(c) {
                this.sendEvent("buy", "pack_type", c)
            }

            buyPackTypeNumber(c, _, E) {
                this.sendEvent("buy", `${c}_number`, _, E)
            }

            buyPurchase(c, _) {
                this.sendEvent("buy", "purchase", c, _)
            }

            buyConfirmation(c, _) {
                this.sendEvent("buy", "confirmation", c, _)
            }

            buyStatus(c) {
                this.sendEvent("buy", "status", c)
            }

            templeOpenPacks() {
                this.sendEvent("temple", "open_packs")
            }

            templePurchase(c, _) {
                this.sendEvent("temple", "purchase", c, _)
            }

            templeShareDiscord() {
                this.sendEvent("temple", "share", "discord")
            }

            inventoryInventoryType(c) {
                this.sendEvent("inventory", "inventory_type", c)
            }

            inventory(c, _, E) {
                this.sendEvent("inventory", c, _, E)
            }

            inventorySearchStart() {
                this.sendEvent("inventory", "search_start")
            }

            inventorySearchEnd(c, _) {
                this.sendEvent("inventory", "search_end", c, _)
            }

            inventoryPageUp(c, _) {
                this.sendEvent("inventory", "page_up", c, _)
            }

            inventoryPageDown(c, _) {
                this.sendEvent("inventory", "page_down", c, _)
            }

            inventoryPageSelect(c, _) {
                this.sendEvent("inventory", "page_select", c, _)
            }

            inventoryViewCard(c, _) {
                this.sendEvent("inventory", "view_card", c + "", _)
            }

            inventoryViewCollectable(c, _) {
                this.sendEvent("inventory", "view_collectable", c, _)
            }

            navigateHeader(c) {
                this.sendEvent("navigate", "header", c)
            }

            navigate(c, _) {
                this.sendEvent("navigate", c, _)
            }

            outbound(c, _) {
                this.sendEvent("outbound", c, _)
            }

            navigateExit(c) {
                this.sendEvent("navigate", "exit", c)
            }

            helpOpenHelp() {
                this.sendEvent("help", "open_help")
            }

            helpEndHelp() {
                this.sendEvent("help", "end_help")
            }

            helpSearchStart() {
                this.sendEvent("help", "search_start")
            }

            helpSearchEnd(c) {
                this.sendEvent("help", "search_end", c)
            }

            helpSelectFaq(c) {
                this.sendEvent("help", "select_faq", c)
            }

            cryptokittiesPurchaseRareRandom() {
                this.sendEvent("cryptokitties", "purchase", "rare_random")
            }

            cryptokittiesPurchaseRare(c) {
                this.sendEvent("cryptokitties", "purchase", "rare", c)
            }

            cryptokittiesInventoryType(c) {
                this.sendEvent("cryptokitties", "inventory_type", c)
            }

            cryptokittiesSearchStartStart() {
                this.sendEvent("cryptokitties", "search_start", "start")
            }

            cryptokittiesSearchEnd(c) {
                this.sendEvent("cryptokitties", "search_end", c)
            }

            cryptokittiesPageUp(c) {
                this.sendEvent("cryptokitties", "page_up", c)
            }

            cryptokittiesPageDown(c) {
                this.sendEvent("cryptokitties", "page_down", c)
            }

            cryptokittiesPageSelect(c) {
                this.sendEvent("cryptokitties", "page_select", c)
            }

            cryptokittiesSelect(c) {
                this.sendEvent("cryptokitties", "select", c)
            }

            cryptokittiesDeselect(c) {
                this.sendEvent("etherbots", "deselect", c)
            }

            etherbotsPurchaseRareRandom() {
                this.sendEvent("etherbots", "purchase", "rare_random")
            }

            etherbotsPurchaseRare(c) {
                this.sendEvent("etherbots", "purchase", "rare", c)
            }

            etherbotsInventoryType(c) {
                this.sendEvent("etherbots", "inventory_type", c)
            }

            etherbotsSearchStartStart() {
                this.sendEvent("etherbots", "search_start", "start")
            }

            etherbotsSearchEnd(c) {
                this.sendEvent("etherbots", "search_end", c)
            }

            etherbotsPageUp(c) {
                this.sendEvent("etherbots", "page_up", c)
            }

            etherbotsPageDown(c) {
                this.sendEvent("etherbots", "page_down", c)
            }

            etherbotsPageSelect(c) {
                this.sendEvent("etherbots", "page_select", c)
            }

            etherbotsSelect(c) {
                this.sendEvent("etherbots", "select", c)
            }

            etherbotsDeselect(c) {
                this.sendEvent("etherbots", "deselect", c)
            }

            inventoryViewStatue(c) {
                this.sendEvent("inventory", "view_statue", c)
            }

            walletConnect(c, _) {
                this.sendEvent("wallet", "connect", c, _)
            }

            videoPlay(c) {
                this.sendEvent("video", "play", c)
            }

            videoPause(c, _) {
                this.sendEvent("video", "pause", c, _)
            }

            videoComplete25(c) {
                this.sendEvent("video", "complete_25", c)
            }

            videoComplete50(c) {
                this.sendEvent("video", "complete_50", c)
            }

            videoComplete75(c) {
                this.sendEvent("video", "complete_75", c)
            }

            videoComplete100(c) {
                this.sendEvent("video", "complete_100", c)
            }

            videoWatchLater(c) {
                this.sendEvent("video", "watch_later", c)
            }

            videoShare(c, _) {
                this.sendEvent("video", `share_${c}`, _)
            }

            apolloRegisterBegin(c) {
                this.sendEvent("apollo_register", `${c}_onboard`)
            }

            apolloRegisterFieldStart(c) {
                this.sendEvent("apollo_register", `${c}_start`)
            }

            apolloRegisterFieldComplete(c, _) {
                this.sendEvent("apollo_register", `${c}_complete`, void 0, _)
            }

            apolloRegisterStagesTime(c, _) {
                this.sendEvent("apollo_register", `${c}_time`, void 0, _)
            }

            apolloRegisterComplete() {
                this.sendEvent("apollo_register", "register", "register_complete")
            }

            apolloLoginComplete() {
                this.sendEvent("apollo_register", "login", "login_complete")
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })(), H = (() => {
        class N {
            constructor(c) {
                this.window = c
            }

            canActivate(c, _) {
                return c.data.externalUrl ? this.window.location.href = c.data.externalUrl : console.warn("*** externalUrl param not provided inside data for redirection"), !1
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(Window))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })();
    var Z = s(61737), de = s(27221);
    let xe = (() => {
        class N {
            constructor() {
            }

            autoRetryApiOnFail(c, _ = 1) {
                return c.pipe((0, de.K)(E => _ > 0 && E.status >= 400 && E.status < 600 ? this.autoRetryApiOnFail(c, _ - 1) : (0, Z._)(E)))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })();
    var be = s(46461), W = s(591);
    let he = (() => {
        class N {
            constructor() {
                this._storage = window.localStorage
            }

            set(c, _) {
                return this._storage.setItem(c.join("."), _)
            }

            get(c) {
                return this._storage.getItem(c.join("."))
            }

            delete(c) {
                return this._storage.removeItem(c.join("."))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })(), J = (() => {
        class N {
            constructor(c) {
                this.storage = c, this.arenaCancel = this.loadHowl("desktop/Launcher_Arena_Cancel.ogg"), this.arenaClickStart = this.loadHowl("desktop/Launcher_Arena_Click_Start.ogg"), this.arenaCycleMode = this.loadHowl("desktop/Launcher_Arena_CycleMode.ogg"), this.arenaHoverStart = this.loadHowl("desktop/Launcher_Arena_Hover_Start.ogg"), this.returnToLauncher = this.loadHowl("desktop/Launcher_Return.ogg"), this.loginToLauncher = this.loadHowl("desktop/Launcher_Login.ogg"), this.clickItemV1 = this.loadHowl("desktop/Launcher_Click_Item_V1.ogg"), this.clickItemV2 = this.loadHowl("desktop/Launcher_Click_Item_V2.ogg"), this.clickMediumV1 = this.loadHowl("desktop/Launcher_Click_Medium_V1.ogg"), this.clickMediumV2 = this.loadHowl("desktop/Launcher_Click_Medium_V2.ogg"), this.clickTinyV1 = this.loadHowl("desktop/Launcher_Click_Tiny_V1.ogg"), this.clickTinyV2 = this.loadHowl("desktop/Launcher_Click_Tiny_V2.ogg"), this.hoverHex = this.loadHowl("desktop/Launcher_Hover_Hexagon.ogg"), this.hoverItem = this.loadHowl("desktop/Launcher_Hover_Item.ogg"), this.transitionWorkshop = this.loadHowl("desktop/Launcher_Transition_Workshop.ogg"), this.workshopCustomize = this.loadHowl("desktop/Launcher_Workshop_Customize.ogg"), this.workshopDelete = this.loadHowl("desktop/Launcher_Workshop_Delete.ogg"), this.forgeAmbience = this.loadHowl("desktop/Launcher_Forge_Ambience.ogg", {loop: !0}), this.forgeHeatingUp = this.loadHowl("desktop/Launcher_Forge_HeatingUp.ogg"), this.forgeSelectCard = this.loadHowl("desktop/Launcher_Forge_SelectCard.ogg"), this.ForgeFuseAnvil1 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_1.ogg"), this.ForgeFuseAnvil2 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_2.ogg"), this.ForgeFuseAnvil3 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_3.ogg"), this.ForgeFuseAnvil4 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_4.ogg"), this.ForgeFuseAnvil5 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_5.ogg"), this.ForgeFuseShimmer = this.loadHowl("desktop/Launcher_Forge_Fuse_Shimmer.ogg"), this.ForgeFuseContinue = this.loadHowl("desktop/Launcher_Forge_Fuse_Continue.ogg"), this._currentVolume$ = new W.X(null), this.setInitialVolume()
            }

            get currentVolume$() {
                return this._currentVolume$.asObservable()
            }

            setGlobalVolume(c) {
                be.Howler.volume(c), this._currentVolume$.next(c), this.storage.set(["gu-audioVolume"], c)
            }

            setInitialVolume() {
                this.initialVolume = parseFloat(this.storage.get(["gu-audioVolume"])), isNaN(this.initialVolume) && (this.initialVolume = .9), this.setGlobalVolume(this.initialVolume)
            }

            loadHowl(c, _) {
                return _ || (_ = {}), _.src = `/assets/audio/${c}`, new be.Howl(_)
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(he))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })();
    var ie = s(8929), ge = s(24850), fe = s(7625), ke = s(87545), Ue = s(77535);
    let Xe = (() => {
        class N {
            constructor(c, _) {
                this.http = c, this.destroyed$ = new ie.xQ, this.apolloEndpoint$ = _.loadConfigurations().pipe((0, ge.U)(E => E.legacyAuthHost), (0, fe.R)(this.destroyed$))
            }

            get(c, _, E) {
                return this.apolloEndpoint$.pipe((0, ke.w)(te => this.http.get(te + c, {headers: E, params: _})))
            }

            put(c, _, E, te) {
                return this.apolloEndpoint$.pipe((0, ke.w)(we => this.http.put(we + c, _, {headers: te, params: E})))
            }

            post(c, _, E) {
                return this.apolloEndpoint$.pipe((0, ke.w)(te => this.http.post(te + c, _, {headers: E})))
            }

            delete(c) {
                return this.apolloEndpoint$.pipe((0, ke.w)(_ => this.http.delete(_ + c)))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(me.eN), y.LFG(Ue.L))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })();
    var et = s(69439);
    let ht = (() => {
        class N {
            constructor() {
            }

            copyText(c) {
                const _ = document.createElement("input");
                document.body.appendChild(_), _.value = c, _.select(), document.execCommand("copy"), document.body.removeChild(_)
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac, providedIn: "root"}), N
    })(), Le = (() => {
        class N {
            constructor(c, _) {
                this.client = c, this.destroyed$ = new ie.xQ, this.endpoint$ = _.loadConfigurations().pipe((0, ge.U)(E => E.deckHost), (0, fe.R)(this.destroyed$))
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            get(c, _) {
                return this.endpoint$.pipe((0, ke.w)(E => this.client.get(`${E}/${c}`, _)))
            }

            put(c, _, E) {
                return this.endpoint$.pipe((0, ke.w)(te => this.client.put(`${te}/${c}`, _, E)))
            }

            post(c, _, E) {
                return this.endpoint$.pipe((0, ke.w)(te => this.client.post(`${te}/${c}`, _, E)))
            }

            delete(c, _) {
                return this.endpoint$.pipe((0, ke.w)(E => this.client.delete(`${E}/${c}`, _)))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(me.eN), y.LFG(Ue.L))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac, providedIn: "root"}), N
    })();
    var Ie = s(1025), B = s(61709);

    class Q {
        constructor(F) {
            this.cardsService = F, this.typeOrder = ["spell", "creature", "weapon"], this.godOrder = ["death", "deception", "light", "magic", "nature", "war", "neutral"], this.rarityOrder = ["legendary", "epic", "rare", "common", "mythic"]
        }

        static displayable(...F) {
            return F.map(c => {
                const _ = "All" === c ? "" : c.toLowerCase();
                return {display: c, value: _}
            })
        }

        static enumerated(...F) {
            return F.map((c, _) => ({display: c, value: _ - 1}))
        }

        static standardProtoFilters(F, c, _) {
            return {mana: -1, rarity: "", tribe: "", god: "", name: "", sort: c, ownership: F, type: "", set: _}
        }

        static standardCardFilters(F, c, _, E = "") {
            return {
                mana: -1,
                rarity: "",
                tribe: "",
                god: E,
                name: "",
                sort: c,
                ownership: F,
                type: "",
                set: _,
                quality: ""
            }
        }

        calcScarcity(F, c, _) {
            let E = 1;
            try {
                const te = _.get(F)[c];
                E = void 0 === te ? 1 : Number(te)
            } catch (te) {
                return
            }
            return E
        }

        getSort(F, c) {
            switch (F) {
                case v.PE.AscID:
                    return (_, E) => _.proto - E.proto;
                case v.PE.DescID:
                    return (_, E) => E.proto - _.proto;
                case v.PE.AscQuality:
                    return (_, E) => _.quality - E.quality;
                case v.PE.DescQuality:
                    return (_, E) => E.quality - _.quality;
                case v.PE.AscMana:
                    return (_, E) => Number(_.protoCard.mana) - Number(E.protoCard.mana);
                case v.PE.DescMana:
                    return (_, E) => Number(E.protoCard.mana) - Number(_.protoCard.mana);
                case v.PE.AscHealth:
                    return (_, E) => Number(_.protoCard.health) - Number(E.protoCard.health);
                case v.PE.DescHealth:
                    return (_, E) => Number(E.protoCard.health) - Number(_.protoCard.health);
                case v.PE.AscAttack:
                    return (_, E) => Number(_.protoCard.attack) - Number(E.protoCard.attack);
                case v.PE.DescAttack:
                    return (_, E) => Number(E.protoCard.attack) - Number(_.protoCard.attack);
                case v.PE.AscTribe:
                    return (_, E) => _.protoCard.tribe < E.protoCard.tribe ? -1 : 1;
                case v.PE.DescTribe:
                    return (_, E) => _.protoCard.tribe > E.protoCard.tribe ? -1 : 1;
                case v.PE.AscRarity:
                    return (_, E) => this.getRarityId(_.rarity) < this.getRarityId(E.rarity) ? -1 : 1;
                case v.PE.DescRarity:
                    return (_, E) => this.getRarityId(_.rarity) > this.getRarityId(E.rarity) ? -1 : 1;
                case v.PE.AscScarcity:
                    return (_, E) => {
                        if (!c) throw new Error("qualityCounts required for scarcity search");
                        const Ne = this.calcScarcity(_.proto, _.quality, c) - this.calcScarcity(E.proto, E.quality, c);
                        return 0 === Ne ? E.quality - _.quality : Ne
                    }
            }
            return (_, E) => 0
        }

        sortLegacy(F, c, _) {
            return F ? F.sort(this.getSort(c, _)) : []
        }

        sort(F, c, _) {
            return F ? F.sort(this.tiebreak(this.getSort(c, _))) : []
        }

        tiebreak(F) {
            return (c, _) => {
                const E = F(c, _);
                return 0 === E ? this.tiebreakProtoType(c.protoCard, _.protoCard) : E
            }
        }

        getSortProtos(F, c) {
            switch (F) {
                case v.PE.AscID:
                    return (_, E) => _.proto - E.proto;
                case v.PE.DescID:
                    return (_, E) => E.proto - _.proto;
                case v.PE.AscQuality:
                    return (_, E) => _.quality - E.quality;
                case v.PE.DescQuality:
                    return (_, E) => E.quality - _.quality;
                case v.PE.AscMana:
                    return (_, E) => Number(_.mana) - Number(E.mana);
                case v.PE.DescMana:
                    return (_, E) => Number(E.mana) - Number(_.mana);
                case v.PE.AscHealth:
                    return (_, E) => Number(_.health) - Number(E.health);
                case v.PE.DescHealth:
                    return (_, E) => Number(E.health) - Number(_.health);
                case v.PE.AscAttack:
                    return (_, E) => Number(_.attack) - Number(E.attack);
                case v.PE.DescAttack:
                    return (_, E) => Number(E.attack) - Number(_.attack);
                case v.PE.AscTribe:
                    return (_, E) => _.tribe < E.tribe ? -1 : 1;
                case v.PE.DescTribe:
                    return (_, E) => _.tribe > E.tribe ? -1 : 1;
                case v.PE.AscRarity:
                    return (_, E) => this.getRarityId(_.rarity) < this.getRarityId(E.rarity) ? -1 : 1;
                case v.PE.DescRarity:
                    return (_, E) => this.getRarityId(_.rarity) > this.getRarityId(E.rarity) ? -1 : 1;
                case v.PE.AscType:
                    return (_, E) => _.type < E.type ? -1 : 1;
                case v.PE.DescType:
                    return (_, E) => _.type > E.type ? -1 : 1;
                case v.PE.AscGod:
                    return (_, E) => _.god < E.god ? -1 : 1;
                case v.PE.DescGod:
                    return (_, E) => _.god > E.god ? -1 : 1;
                case v.PE.AscSet:
                    return (_, E) => _.set < E.set ? -1 : 1;
                case v.PE.DescSet:
                    return (_, E) => _.set > E.set ? -1 : 1
            }
            return (_, E) => 0
        }

        sortProtos(F, c, _) {
            return F ? F.sort(this.tiebreakProto(this.getSortProtos(c, _))) : []
        }

        tiebreakProto(F) {
            return (c, _) => {
                const E = F(c, _);
                return 0 === E ? this.tiebreakProtoType(c, _) : E
            }
        }

        tiebreakProtoType(F, c) {
            const _ = this.typeOrder.indexOf(F.type) - this.typeOrder.indexOf(c.type);
            return 0 === _ ? this.tiebreakProtoGod(F, c) : _
        }

        tiebreakProtoGod(F, c) {
            const _ = this.godOrder.indexOf(F.god) - this.godOrder.indexOf(c.god);
            return 0 === _ ? this.tiebreakProtoRarity(F, c) : _
        }

        tiebreakProtoRarity(F, c) {
            const _ = this.rarityOrder.indexOf(F.rarity) - this.rarityOrder.indexOf(c.rarity);
            return 0 === _ ? this.tiebreakProtoHealth(F, c) : _
        }

        tiebreakProtoHealth(F, c) {
            const _ = Number(F.health) - Number(c.health);
            return 0 === _ ? this.tiebreakProtoAttack(F, c) : _
        }

        tiebreakProtoAttack(F, c) {
            const _ = Number(F.attack) - Number(c.attack);
            return 0 === _ ? this.tiebreakProtoName(F, c) : _
        }

        tiebreakProtoName(F, c) {
            return F.name < c.name ? -1 : 1
        }

        filter(F, c) {
            return F ? F.filter(_ => this.matches(c, _)) : []
        }

        matches(F, c) {
            if (null == F) return !0;
            if (null == c || "" !== F.rarity && F.rarity !== c.rarity || "" !== F.set && F.set !== c.set || "" !== F.god && F.god !== c.god || "" !== F.tribe && ("none" === F.tribe && c.tribe || "none" !== F.tribe && F.tribe !== c.tribe)) return !1;
            if (-1 != +F.mana) if (10 == +F.mana) {
                if (c.mana < 10) return !1
            } else if (+F.mana !== c.mana) return !1;
            if (F.name.length > 0) {
                const _ = F.name.toLowerCase().trim();
                if (-1 === c.name.toLowerCase().indexOf(_)) return !1
            }
            return !0
        }

        isMythic(F) {
            return 378 === F || 379 === F || 383 === F
        }

        getRarityId(F) {
            switch (F) {
                case"common":
                default:
                    return 0;
                case"rare":
                    return 1;
                case"epic":
                    return 2;
                case"legendary":
                    return 3;
                case"mythic":
                    return 4
            }
        }

        cardsMatch(F, c, _) {
            return null == F || !(this.filterQualities(_.qualities, F.quality) || +F.ownership === v.nE.Owned && !_.owned || +F.ownership === v.nE.Unowned && _.owned || +F.ownership === v.nE.Processing && "escrow" !== _.status || !this.matches(F, c))
        }

        filterCards(F, c) {
            return null == F ? (0, a.of)(null) : this.cardsService.protoCards$.pipe((0, B.VS)(_ => {
                const E = F.filter(te => this.cardsMatch(c, _.get(te.proto), te));
                return (0, a.of)(E)
            }))
        }

        filterQualities(F, c) {
            const _ = this.getQualityByName(c);
            return -1 !== _ && 0 === F[_]
        }

        getQualityByName(F) {
            switch (F.toLowerCase()) {
                case"plain":
                    return v.nJ.PLAIN;
                case"meteorite":
                    return v.nJ.METEORITE;
                case"shadow":
                    return v.nJ.SHADOW;
                case"gold":
                    return v.nJ.GOLD;
                case"diamond":
                    return v.nJ.DIAMOND;
                default:
                    return -1
            }
        }
    }

    Q.rarityOptions = Q.displayable("All", "Common", "Rare", "Epic", "Legendary", "Mythic"), Q.qualityOptions = Q.displayable("All", "Plain", "Meteorite", "Shadow", "Gold", "Diamond"), Q.godOptions = Q.displayable("All", "Neutral", "Nature", "War", "Death", "Light", "Magic", "Deception"), Q.manaOptions = Q.enumerated("All", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"), Q.tribeOptions = Q.displayable("All", "None", "Viking", "Amazon", "Anubian", "Aether", "Nether", "Atlantean", "Olympian", "Dragon", "Guild", "Mystic", "Structure", "Wild"), Q.ownershipOptions = Q.enumerated("All", "Owned", "Not Owned", "Processing"), Q.setOptions = Q.displayable("All", "Genesis", "Core", "Etherbots", "Promo", "Mythic", "Trial", "Welcome", "Order", "Mortal"), Q.defaultFilters = [{
        name: "Ownership",
        options: Q.ownershipOptions
    }, {name: "Quality", options: Q.qualityOptions}, {name: "Rarity", options: Q.rarityOptions}, {
        name: "Tribe",
        options: Q.tribeOptions
    }, {name: "Mana", options: Q.manaOptions}, {name: "God", options: Q.godOptions}, {
        name: "Set",
        options: Q.setOptions
    }], Q.\u0275fac = function (F) {
        return new (F || Q)(y.LFG(et.d))
    }, Q.\u0275prov = y.Yz7({token: Q, factory: Q.\u0275fac, providedIn: "root"});
    var le = s(72986), Ee = s(43834);
    let tt = (() => {
        class N {
            constructor(c, _) {
                this.gameApi = c, this.authService = _, this.unsubscribe = new ie.xQ, this.dataStore = {fluxInfo: null}, this._fluxInfo$ = new W.X(null)
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            get fluxInfo$() {
                return this._fluxInfo$.asObservable()
            }

            fetchFluxInfo() {
                const c = this.authService.getUserId();
                c ? this.gameApi.get(`/user/${c}/flux`).pipe((0, le.q)(1)).subscribe(_ => {
                    this.emitFluxInfo(_)
                }, _ => {
                    this.emitFluxInfo()
                }) : this.emitFluxInfo()
            }

            emitFluxInfo(c = {flux_available: 0, flux_spent: 0, locked: !1}) {
                this.dataStore.fluxInfo = c, this._fluxInfo$.next(Object.assign({}, this.dataStore.fluxInfo))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(Ee.F), y.LFG(M.mI))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })(), Be = (() => {
        class N {
            constructor(c, _) {
                this.moduleConfigService = c, this.http = _, this.moduleConfig$ = this.moduleConfigService.loadConfigurations()
            }

            getFusingRequest(c) {
                return this.moduleConfig$.pipe((0, ke.w)(({fusingHost: _}) => this.http.get(`${_}/forge`, {params: {request_id: c}})))
            }

            getFusingLatestsRequests(c) {
                return this.moduleConfig$.pipe((0, ke.w)(({fusingHost: _}) => this.http.get(`${_}/forge/latest`, {params: {user_id: c}})))
            }

            fusingValidator(c) {
                return this.moduleConfig$.pipe((0, ke.w)(({fusingHost: _}) => this.http.post(`${_}/forge/validation`, c)))
            }

            fusingInitiator(c) {
                return this.moduleConfig$.pipe((0, ke.w)(({fusingHost: _}) => this.http.post(`${_}/forge`, c)))
            }

            fusingTokensPaid(c) {
                return this.moduleConfig$.pipe((0, ke.w)(({fusingHost: _}) => this.http.post(`${_}/forge/paid`, c)))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(Ue.L), y.LFG(me.eN))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })();
    var Ve = s(90868);
    let st = (() => {
        class N {
            constructor(c, _, E) {
                this.httpClient = c, this.moduleConfigService = _, this.tokenRefreshService = E
            }

            get(c, _, E) {
                return this.moduleConfigService.loadConfigurations().pipe((0, ke.w)(te => this.tokenRefreshService.autoRefreshToken(this.httpClient.get(`${te.guAuthHost}${c}`, {
                    headers: E,
                    params: _
                }))))
            }

            put(c, _, E, te) {
                return this.moduleConfigService.loadConfigurations().pipe((0, ke.w)(we => this.tokenRefreshService.autoRefreshToken(this.httpClient.put(`${we.guAuthHost}${c}`, _, {
                    headers: te,
                    params: E
                }))))
            }

            post(c, _, E) {
                return this.moduleConfigService.loadConfigurations().pipe((0, ke.w)(te => this.tokenRefreshService.autoRefreshToken(this.httpClient.post(`${te.guAuthHost}${c}`, _, {headers: E}))))
            }

            delete(c) {
                return this.moduleConfigService.loadConfigurations().pipe((0, ke.w)(_ => this.tokenRefreshService.autoRefreshToken(this.httpClient.delete(`${_.guAuthHost}${c}`))))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(me.eN), y.LFG(Ue.L), y.LFG(Ve.$))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac, providedIn: "root"}), N
    })(), it = (() => {
        class N {
            constructor(c, _, E) {
                this.http = c, this.dds = _, this.authService = E, this._downloadUrl$ = new W.X(null)
            }

            get downloadUrl$() {
                return this._downloadUrl$.asObservable()
            }

            fetchLauncherURL() {
                return this.fetchLauncherURLAsync().pipe((0, le.q)(1)).subscribe(c => {
                    this.downloadUrl = c, this._downloadUrl$.next(c)
                })
            }

            fetchLauncherURLAsync() {
                const c = this.dds.getDeviceInfo(), _ = this.authService.getUserId();
                return "mac" !== c.os.toLowerCase() && "windows" !== c.os.toLowerCase() ? (0, Z._)("linux") : this.http.get(`https://util.apollo.gg/launcher?os=${c.os}&user_id=${_}`)
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(me.eN), y.LFG(h.x0), y.LFG(M.mI))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })();
    var ot = s(29840), We = s(78812);
    let rt = (() => {
        class N {
            constructor(c) {
                this.authHost = c
            }

            getUserReferralsStatus(c) {
                return this.authHost.get(`/campaign/${c}/referral`)
            }

            getReferralCode(c) {
                return this.authHost.get(`/account/${c}/code/referral`)
            }

            createReferralCode(c) {
                return this.authHost.post(`/account/${c}/code/referral`, {}).pipe((0, ke.w)(_ => this.getReferralCode(c)), (0, de.K)(_ => {
                    if ("already created" === _.error.error) return this.getReferralCode(c)
                }))
            }

            updatePayoutAddress(c, _) {
                return this.authHost.put(`/account/${c}/code/referral`, {referral_payout_address: _})
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(Xe))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac, providedIn: "root"}), N
    })();
    var At = s(19444);
    let Pe = (() => {
        class N {
            constructor(c, _, E) {
                this.environment = c, this.authService = _, this.moduleConfigService = E, this.RETRY_SECONDS = 4e3, this.PING_PONG_INTERVAL_DURATION = 6e3, this.MAX_UNANSWERED_PING_COUNT = 2, this.unsubscribe = new ie.xQ, this.connections = {}, this._connectionEstablished$ = new ie.xQ, this.moduleConfigService.loadConfigurations().subscribe(te => {
                    this.socketEndpoints = {
                        marketplaceCart: we => `${te.marketplaceSocketBaseURL}/${we}/socket`,
                        chatAndFriends: we => `${te.chatAndFriendsSocketBaseUrl}/${we}/chat`,
                        forge: we => `${te.marketplaceSocketBaseURL}/${we}/socket`
                    }
                })
            }

            get connectionEstablished$() {
                return this._connectionEstablished$.asObservable()
            }

            connect({socketName: c, url: _}) {
                return new Promise((E, te) => {
                    console.log("SOCKET CONNECTING: ", c), this.connections[c] = this.createConnection(_), this.connectListeners(c, E, te)
                })
            }

            getOpenedConnection(c) {
                if (this.connections[c] && this.connections[c].isAlive) return this.connections[c]
            }

            ngOnDestroy() {
                this.disconnectAllSockets(), this.unsubscribe.next(), this.unsubscribe.complete()
            }

            onConnect(c, _) {
                console.log("SOCKET CONNECTED:", _), this.connections[_].isAlive = !0, this.checkToStartPingPongInterval(), this.killReconnectTimer(_)
            }

            onClose(c, _) {
                console.log("SOCKET CLOSED:", _, c), this.connections[_].isAlive = !1, c.wasClean || this.reconnectSocket(_)
            }

            onError(c, _) {
                console.log("SOCKET ERRORED:", _, c), this.connections[_].isAlive = !1, console.log("tokenIsExpired: ", this.authService.tokenIsExpired()), this.authService.tokenIsExpired() ? this.authService.refreshToken().pipe((0, le.q)(1)).subscribe(() => this.reconnectSocket(_)) : this.reconnectSocket(_)
            }

            onMessage(c, _) {
                const E = JSON.parse(c.data);
                console.log("socket onMessage!", _, E), "HEARTBEAT_PONG" === E.text ? this.onPongMessage(_, E) : this.connections[_].messages.next(E)
            }

            connectListeners(c, _, E) {
                const te = this.connections[c];
                te.eventHandlers.open = we => {
                    this.onConnect(we, c), _ && _(te.messages)
                }, te.eventHandlers.error = we => {
                    this.onError(we, c), E && E(te.messages)
                }, te.eventHandlers.close = we => {
                    this.onClose(we, c)
                }, te.eventHandlers.message = we => {
                    this.onMessage(we, c)
                }, te.socket.addEventListener("open", te.eventHandlers.open), te.socket.addEventListener("close", te.eventHandlers.close), te.socket.addEventListener("error", te.eventHandlers.error), te.socket.addEventListener("message", te.eventHandlers.message)
            }

            disconnectListeners(c) {
                const _ = this.connections[c];
                _.socket.removeEventListener("open", _.eventHandlers.open), _.socket.removeEventListener("close", _.eventHandlers.close), _.socket.removeEventListener("error", _.eventHandlers.error), _.socket.removeEventListener("message", _.eventHandlers.message)
            }

            checkToStartPingPongInterval() {
                this.pingPongInterval || (this.pingPongInterval = window.setInterval(() => {
                    console.log("PING PONG INTERVAL FIRING"), Object.keys(this.connections).forEach(c => this.checkPingList(c))
                }, this.PING_PONG_INTERVAL_DURATION))
            }

            killPingPongInterval() {
                clearInterval(this.pingPongInterval), this.pingPongInterval = null
            }

            killReconnectTimer(c) {
                clearTimeout(this.connections[c].reconnectTimer), this.connections[c].reconnectTimer = null
            }

            killAllReconnectTimers() {
                Object.keys(this.connections).forEach(c => this.killReconnectTimer(c))
            }

            checkToKillPingPongInterval() {
                0 === Object.keys(this.connections).length ? this.killPingPongInterval() : Object.keys(this.connections).find(_ => this.connections[_].isAlive) || this.killPingPongInterval()
            }

            createConnection(c) {
                const _ = "desktop" === this.environment.clientType ? window.bridge.authAccess : this.authService.getAuthToken().access;
                return {
                    url: c,
                    messages: new ie.xQ,
                    socket: new WebSocket(`${c}?token=${_}`),
                    pingList: [],
                    isAlive: !1,
                    reconnectTimer: null,
                    disconnectPromise: null,
                    eventHandlers: {
                        open: () => {
                        }, close: () => {
                        }, error: () => {
                        }, message: () => {
                        }
                    }
                }
            }

            reconnectSocket(c) {
                const _ = this.connections[c], E = () => {
                    const te = this.createConnection(_.url);
                    this.connections[c].isAlive = te.isAlive, this.connections[c].pingList = te.pingList, this.connections[c].socket = te.socket, this.connections[c].url = te.url, this.connections[c].eventHandlers = te.eventHandlers, this.connectListeners(c)
                };
                switch (this.killReconnectTimer(c), this.checkToKillPingPongInterval(), _.socket.readyState) {
                    case WebSocket.CONNECTING:
                    case WebSocket.CLOSING:
                        console.log("SKIPPING RECONNECT TIMER:", c, "connection ready state:", _.socket.readyState);
                        break;
                    case WebSocket.OPEN:
                        _.disconnectPromise = this.disconnect({
                            socketName: c,
                            cleanup: !1
                        }), _.reconnectTimer = window.setTimeout(() => {
                            _.disconnectPromise.then(() => {
                                console.log("SOCKET DISCONNECTED, NOW RECONNECTING SOCKET"), E()
                            })
                        }, this.RETRY_SECONDS);
                        break;
                    case WebSocket.CLOSED:
                        _.reconnectTimer = window.setTimeout(() => {
                            E()
                        }, this.RETRY_SECONDS)
                }
            }

            sendMessage(c, _) {
                this.connections[c] && this.connections[c].socket.send(JSON.stringify(_))
            }

            sendPing(c) {
                console.log("SOCKET PING:", c);
                const _ = {text: "HEARTBEAT_PING", user_id: this.authService.getUserId(), msg_id: (0, At.v4)()};
                this.connections[c].pingList.push(_), this.sendMessage(c, _)
            }

            onPongMessage(c, _) {
                console.log("SOCKET PONG:", c);
                const E = this.connections[c], te = E.pingList.findIndex(we => we.msg_id === _.msg_id);
                -1 !== te && E.pingList.splice(te, 1)
            }

            checkPingList(c) {
                this.connections[c].pingList.length >= this.MAX_UNANSWERED_PING_COUNT ? this.reconnectSocket(c) : this.sendPing(c)
            }

            disconnect({socketName: c, cleanup: _ = !0}) {
                const E = this.connections[c], te = () => {
                    E && this.disconnectListeners(c), _ && delete this.connections[c]
                };
                return new Promise(we => {
                    if (!E) return this.checkToKillPingPongInterval(), te(), we();
                    this.killReconnectTimer(c), E.isAlive ? (E.socket.addEventListener("close", () => {
                        te(), this.checkToKillPingPongInterval(), we()
                    }), E.socket.close()) : (console.log("SOCKET IS IN A TRANSITION STATE, BUT TRY AND CLOSE ANYWAY"), E.socket && E.socket.close(), te(), we())
                })
            }

            disconnectAllSockets() {
                return this.killAllReconnectTimers(), Promise.all(Object.keys(this.connections).map(c => this.disconnect({socketName: c})))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(M.Ho), y.LFG(M.mI), y.LFG(Ue.L))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac, providedIn: "root"}), N
    })();
    var $e = s(2994);
    let ee = (() => {
        class N {
            constructor(c, _, E, te) {
                this.gameApiService = c, this.authService = _, this.cardsService = E, this.environment = te, this.storeItems = [], this.dataStore = {userStarsTotal: 0}, this._userStarTotal$ = new W.X(0), console.log("@cerberus/StarService constructor")
            }

            get userStarTotal$() {
                return this._userStarTotal$.asObservable()
            }

            fetchUserStarsRewards(c) {
                return this.gameApiService.get(`/game/${c}/rewards/${this.authService.getUserId()}`)
            }

            fetchUserStarsTotal() {
                const c = this.authService.getUserId();
                !c || this.gameApiService.get(`/user/${c}/stars`).pipe((0, le.q)(1)).subscribe(_ => {
                    this.dataStore.userStarsTotal = _, this._userStarTotal$.next(this.dataStore.userStarsTotal)
                }, _ => {
                    this.dataStore.userStarsTotal = 0, this._userStarTotal$.next(this.dataStore.userStarsTotal)
                })
            }

            purchaseItem$(c, _, E = !0) {
                return this.authService.fetchSession().pipe((0, le.q)(1), (0, B.VS)(te => this.gameApiService.post(`/user/${this.authService.getUserId()}/shop?session=${te}`, {asset_group: c})), (0, de.K)(te => 401 === te.status && E ? this.authService.refreshToken().pipe((0, B.VS)(we => this.purchaseItem$(c, _, !1))) : (0, a.of)(te)), (0, $e.b)(te => {
                    (!te || !te.error) && this.handlePurchaseSuccess()
                }))
            }

            handlePurchaseSuccess() {
                this.fetchUserStarsTotal(), "desktop" === this.environment.clientType && this.cardsService.fetchInventory()
            }

            addEpochTimestamp(c) {
                return Object.assign(Object.assign({}, c), {
                    start_timestamp_epoch: new Date(c.start_timestamp).getTime(),
                    end_timestamp_epoch: new Date(c.end_timestamp).getTime()
                })
            }

            getScreenOrder(c) {
                const E = this.storeItems.filter(te => this.isCurrentItem(te)).indexOf(c);
                return Object.assign(Object.assign({}, c), {screen_order: E})
            }

            isCurrentItem(c) {
                const _ = (new Date).getTime();
                return c.end_timestamp_epoch > _ && c.start_timestamp_epoch < _
            }

            fetchStarStoreItems$() {
                return this.gameApiService.get(`/user/${this.authService.getUserId()}/shop`).pipe((0, le.q)(1), (0, ge.U)(c => c.map(_ => this.addEpochTimestamp(_))), (0, $e.b)(c => this.storeItems = c))
            }
        }

        return N.\u0275fac = function (c) {
            return new (c || N)(y.LFG(Ee.F), y.LFG(M.mI), y.LFG(et.d), y.LFG(M.Ho))
        }, N.\u0275prov = y.Yz7({token: N, factory: N.\u0275fac}), N
    })();
    const ne = (N, F) => () => Promise.all([N.loadConfigurations().toPromise(), F.waitUntilReady()]);
    let _e = (() => {
        class N {
        }

        return N.\u0275fac = function (c) {
            return new (c || N)
        }, N.\u0275mod = y.oAB({type: N}), N.\u0275inj = y.cJS({
            providers: [Ue.L, {
                provide: M.Hd,
                deps: [M.Ho],
                useFactory: F => (0, $.j2)(F.launchDarklyKey, {anonymous: !0, key: "anonymous"})
            }, {
                provide: y.ip1,
                useFactory: ne,
                multi: !0,
                deps: [Ue.L, M.Hd]
            }, ae, xe, Xe, Ie.a, tt, Be, Ce, st, it, he, ot._, Pe, ee, Ve.$, H], imports: [[O.ez]]
        }), N
    })()
}, 69439
:
(se, U, s) => {
    "use strict";
    s.d(U, {d: () => y});
    var l = s(8929), a = s(591), v = s(36053), i = s(7625), t = s(92198), d = s(75613), u = s(24850), n = s(87545),
        e = s(72986), r = s(2994), b = s(27221), P = s(73307), S = s(52886), I = s(1025), w = s(5e3), x = s(43834),
        $ = s(29840), O = s(90868);
    let y = (() => {
        class M {
            constructor(h, C, T, K, ce, ae) {
                this.environment = h, this.authService = C, this.gameApiService = T, this.marketplaceApiService = K, this.tokenRefreshService = ce, this.featureFlagsService = ae, this.unsubscribe = new l.xQ, this.dataStore = {
                    protoCards: new Map,
                    inventory: {},
                    inventoryCards: [],
                    qualityCounts: new Map,
                    newInventoryCardCount: 0
                }, this._protoCards = new a.X(new Map), this._inventory = new a.X({}), this._qualityCounts = new a.X(new Map), this._inventoryCards = new a.X([]), this._newInventoryCardCount = new a.X(0), this.watchForLogout()
            }

            watchForLogout() {
                "desktop" === this.environment.clientType && this.authService.account$.pipe((0, i.R)(this.unsubscribe), (0, t.h)(h => null === h)).subscribe(h => {
                    this.dataStore.inventory = {}, this._inventory.next(Object.assign({}, this.dataStore).inventory), this.dataStore.qualityCounts = new Map, this._qualityCounts.next(Object.assign({}, this.dataStore).qualityCounts), this.dataStore.inventoryCards = [], this._inventoryCards.next(Object.assign({}, this.dataStore).inventoryCards), this.dataStore.newInventoryCardCount = 0, this._newInventoryCardCount.next(Object.assign({}, this.dataStore).newInventoryCardCount)
                })
            }

            get protoCards$() {
                return this._protoCards.asObservable()
            }

            get inventory$() {
                return this._inventory.asObservable()
            }

            get qualityCounts$() {
                return this._qualityCounts.asObservable()
            }

            get inventoryCards$() {
                return this._inventoryCards.asObservable()
            }

            get newInventoryCardCount$() {
                return this._newInventoryCardCount.asObservable()
            }

            getProtoCard(h) {
                return this.protoCards$.pipe((0, d.sE)(C => C.has(h)), (0, u.U)(C => C.get(h)))
            }

            fetchProtoCardsApi() {
                const h = this.authService.getUserId();
                return this.authService.fetchSession().pipe((0, n.w)(C => this.gameApiService.get(`/user/${h || 1}/proto?format=flat${C ? `&session=${C}` : ""}`)), (0, e.q)(1), (0, u.U)(C => this.dictionaryToMap(C)), (0, u.U)(C => (C.forEach((T, K) => {
                    T.proto = K
                }), C)))
            }

            getProtoCards$() {
                return this.tokenRefreshService.autoRefreshToken(this.fetchProtoCardsApi())
            }

            fetchProtoCards() {
                this.getProtoCards$().subscribe(h => {
                    this.handleProtoCardsSuccess(h)
                })
            }

            handleProtoCardsSuccess(h) {
                this.dataStore.protoCards = h, this._protoCards.next(Object.assign({}, this.dataStore).protoCards)
            }

            fetchInventory() {
                const h = this.authService.getUserId();
                return this.fetchInventoryCardsMap(h).pipe((0, e.q)(1), (0, r.b)(C => {
                    this.dataStore.inventory = C, this._inventory.next(Object.assign({}, this.dataStore).inventory)
                })).subscribe()
            }

            addCardsToInventory(h) {
                let C = 0;
                Object.entries(h).forEach(([T, K]) => {
                    if (this.dataStore.inventory[T]) {
                        const ce = K.filter(ae => !this.dataStore.inventory[T].some(me => me.id === ae.id));
                        this.dataStore.inventory[T] = [...this.dataStore.inventory[T], ...ce], C += ce.length
                    } else this.dataStore.inventory[T] = K, C += K.length
                }), this._inventory.next(Object.assign({}, this.dataStore.inventory)), this.dataStore.newInventoryCardCount = C, this._newInventoryCardCount.next(C)
            }

            fetchQualityCount() {
                return this.gameApiService.get("/quality_count").pipe((0, e.q)(1), (0, r.b)(h => {
                    this.dataStore.qualityCounts = this.dictionaryToMap(h), this._qualityCounts.next(Object.assign({}, this.dataStore).qualityCounts)
                }), (0, b.K)(h => h)).subscribe()
            }

            loadInventoryCards() {
                return (0, v.aj)([this.protoCards$, this.inventory$]).pipe((0, r.b)(([h, C]) => {
                    this.dataStore.inventoryCards = this.convertToCards(h, C), this._inventoryCards.next(Object.assign({}, this.dataStore).inventoryCards)
                }))
            }

            convertToCards(h, C) {
                const T = [];
                return h.forEach((K, ce) => {
                    if (C[ce]) for (const ae of C[ce]) {
                        const me = new S.Zb(ae.id, ce, ae.q, K, ae.status);
                        T.push(me)
                    }
                }), T
            }

            forgeUpdate(h, C, T) {
                this.forgeRemoveIds(h, C), this._inventory.next(Object.assign({}, this.dataStore.inventory)), this.dataStore.newInventoryCardCount = 1, this._newInventoryCardCount.next(1)
            }

            forgeRemoveIds(h, C) {
                this.dataStore.inventory[C] = this.dataStore.inventory[C].filter(T => !h.some(K => T.id === K))
            }

            setNewInventoryCardCount(h) {
                this.dataStore.newInventoryCardCount = h, this._newInventoryCardCount.next(h)
            }

            dictionaryToMap(h) {
                return Object.entries(h).map(([C, T]) => ({
                    key: C,
                    val: T
                })).reduce((C, T) => C.set(Number(T.key), T.val), new Map)
            }

            fetchInventoryCardsMapV2(h, C) {
                const T = C ? `&owner=${C}` : "";
                return this.marketplaceApiService.get(`/v2/asset?type=card${T}${T ? "" : `&user_id=${h}`}`)
            }

            inventoryCardsMapV2ToV1(h) {
                const C = {};
                return Object.entries(h.protos).forEach(([T, K]) => {
                    const ce = K.assets.map(ae => ({id: ae.id, q: ae.properties.quality, status: ae.minting_status}));
                    C[T] = ce
                }), C
            }

            fetchInventoryCardsMap(h) {
                return this.gameApiService.get(`/user/${h}/card?caller=${"desktop" === this.environment.clientType ? "client" : "website"}`)
            }

            checkToRefreshInventory() {
                this.featureFlagsService.get(I.v.refetchInventoryEnabled).pipe((0, e.q)(1)).subscribe(h => {
                    h && this.fetchInventory()
                })
            }
        }

        return M.\u0275fac = function (h) {
            return new (h || M)(w.LFG(P.Ho), w.LFG(P.mI), w.LFG(x.F), w.LFG($._), w.LFG(O.$), w.LFG(I.a))
        }, M.\u0275prov = w.Yz7({token: M, factory: M.\u0275fac, providedIn: "root"}), M
    })()
}, 1025
:
(se, U, s) => {
    "use strict";
    s.d(U, {v: () => u, a: () => e});
    var l = s(36053), a = s(21086), v = s(591), i = s(87545), t = s(73307), d = s(5e3), u = (() => {
        return (r = u || (u = {})).buyPagePaused = "buy-page-paused", r.claimAirdropButtonEnabled = "temp-claim-airdrop-button-enabled", r.claimAirdropEnabled = "temp-claim-airdrop-enabled", r.claimFluxEnabled = "temp-claim-flux-enabled", r.coinbasePaused = "temp-coinbase-paused", r.controllableBannerData = "controllable-banner-data", r.deckCodesEnabled = "temp-deck-codes-enabled", r.defaultWalletEnabled = "temp-default-wallet-enabled", r.forgeEnabled = "temp-forge-enabled", r.fusingNextStepEnabled = "temp-fusing-next-step-enabled", r.godsTokenBlocked = "gods-token-blocked", r.outageBannerEnabled = "temp-outage-banner-enabled", r.rankedWeekendCancelledBannerEnabled = "temp-ranked-weekend-cancelled-banner-enabled", r.referralsEnabled = "temp-referrals-enabled", r.refetchInventoryEnabled = "refetch-inventory-enabled", r.showControllableBanner = "show-controllable-banner", r.spgpEnabled = "temp-spgp-enabled", r.spgpPaused = "temp-spgp-paused", r.stakingEnabled = "temp-staking-enabled", r.tokenEnabled = "temp-token-enabled", r.x2BuyPageEnabled = "temp-x-2-buy-page-enabled", r.noWalletWarningRankedGame = "temp-no-wallet-warning-ranked-game", r.playToEarnEnabled = "temp-play-to-earn-enabled", r.weekendRankedEnabled = "temp-weekend-ranked-claim-enabled", r.imxIframeModalEnabled = "imx-iframe-modal-enabled", r.newDeckServiceEnabled = "temp-new-deck-service-enabled", r.mortalJudgementEnabled = "mortal-judgement-enabled", r.moonPayEnabled = "moon-pay-enabled", r.buyPageMortalJudgementEnabled = "buy-page-mortal-judgement-enabled", u;
        var r
    })();
    const n = Object.seal({
        [u.buyPagePaused]: !1,
        [u.claimAirdropButtonEnabled]: !1,
        [u.claimAirdropEnabled]: !1,
        [u.claimFluxEnabled]: !1,
        [u.coinbasePaused]: !1,
        [u.controllableBannerData]: {},
        [u.deckCodesEnabled]: !1,
        [u.defaultWalletEnabled]: !1,
        [u.fusingNextStepEnabled]: !1,
        [u.godsTokenBlocked]: !0,
        [u.outageBannerEnabled]: !1,
        [u.rankedWeekendCancelledBannerEnabled]: !1,
        [u.referralsEnabled]: !1,
        [u.refetchInventoryEnabled]: !1,
        [u.showControllableBanner]: !1,
        [u.spgpEnabled]: !1,
        [u.spgpPaused]: !1,
        [u.stakingEnabled]: !1,
        [u.tokenEnabled]: !1,
        [u.x2BuyPageEnabled]: !1,
        [u.noWalletWarningRankedGame]: !1,
        [u.playToEarnEnabled]: !1,
        [u.weekendRankedEnabled]: !1,
        [u.imxIframeModalEnabled]: !1,
        [u.newDeckServiceEnabled]: !1,
        [u.mortalJudgementEnabled]: !1,
        [u.moonPayEnabled]: !1,
        [u.buyPageMortalJudgementEnabled]: !1
    });
    let e = (() => {
        class r {
            constructor(P, S) {
                this.ldClient = P, this.environment = S, this.flags = {}, this.flagChange = {}, this.flags = Object.assign({}, n), this.ldClient.on("change", I => {
                    for (const w in I) this.set(w, I[w].current)
                }), this.ldClient.waitUntilReady().then(() => {
                    const I = this.ldClient.allFlags();
                    for (const w in I) this.set(w, I[w])
                })
            }

            getMany(P) {
                const S = [];
                return P.forEach(I => {
                    S.push(this.get(I))
                }), (0, l.aj)(S).pipe((0, i.w)(I => {
                    const w = {};
                    return P.forEach((x, $) => {
                        w[x] = I[$]
                    }), (0, a.of)(w)
                }))
            }

            get(P) {
                return this.flagChange[P] = this.flagChange[P] || new v.X(this.flags[P]), this.flagChange[P].asObservable()
            }

            setContext(P) {
                this.ldClient.identify({
                    key: !0 === P.anonymous ? "anonymous" : P.userID,
                    email: P.email,
                    name: P.name,
                    anonymous: P.anonymous,
                    country: P.country,
                    custom: {clientType: this.environment.clientType}
                })
            }

            set(P, S) {
                this.flags[P] = S, this.flagChange[P] && this.flagChange[P].next(S)
            }
        }

        return r.\u0275fac = function (P) {
            return new (P || r)(d.LFG(t.Hd), d.LFG(t.Ho))
        }, r.\u0275prov = d.Yz7({token: r, factory: r.\u0275fac}), r
    })()
}, 43834
:
(se, U, s) => {
    "use strict";
    s.d(U, {F: () => n});
    var l = s(8929), a = s(24850), v = s(7625), i = s(87545), t = s(5e3), d = s(40520), u = s(77535);
    let n = (() => {
        class e {
            constructor(b, P) {
                this.http = b, this.moduleConfigService = P, this.destroyed$ = new l.xQ, this.gameEndpoint$ = this.moduleConfigService.loadConfigurations().pipe((0, a.U)(S => S.legacyGameHost), (0, v.R)(this.destroyed$))
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            get(b, P) {
                return this.gameEndpoint$.pipe((0, i.w)(S => this.http.get(S + b, P)))
            }

            put(b, P) {
                return this.gameEndpoint$.pipe((0, i.w)(S => this.http.put(S + b, P)))
            }

            post(b, P) {
                return this.gameEndpoint$.pipe((0, i.w)(S => this.http.post(S + b, P)))
            }

            delete(b) {
                return this.gameEndpoint$.pipe((0, i.w)(P => this.http.delete(P + b)))
            }
        }

        return e.\u0275fac = function (b) {
            return new (b || e)(t.LFG(d.eN), t.LFG(u.L))
        }, e.\u0275prov = t.Yz7({token: e, factory: e.\u0275fac, providedIn: "root"}), e
    })()
}, 29840
:
(se, U, s) => {
    "use strict";
    s.d(U, {_: () => n});
    var l = s(8929), a = s(24850), v = s(7625), i = s(87545), t = s(5e3), d = s(40520), u = s(77535);
    let n = (() => {
        class e {
            constructor(b, P) {
                this.http = b, this.moduleConfigService = P, this.destroyed$ = new l.xQ, this.marketplaceEndpoint$ = this.moduleConfigService.loadConfigurations().pipe((0, a.U)(S => S.legacyMarketplaceHost), (0, v.R)(this.destroyed$))
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            get(b, P) {
                return this.marketplaceEndpoint$.pipe((0, i.w)(S => this.http.get(`${S}${b}`, P)))
            }

            put(b, P) {
                return this.marketplaceEndpoint$.pipe((0, i.w)(S => this.http.put(`${S}${b}`, P)))
            }

            post(b, P) {
                return this.marketplaceEndpoint$.pipe((0, i.w)(S => this.http.post(`${S}${b}`, P)))
            }

            delete(b) {
                return this.marketplaceEndpoint$.pipe((0, i.w)(P => this.http.delete(`${P}${b}`)))
            }
        }

        return e.\u0275fac = function (b) {
            return new (b || e)(t.LFG(d.eN), t.LFG(u.L))
        }, e.\u0275prov = t.Yz7({token: e, factory: e.\u0275fac}), e
    })()
}, 77535
:
(se, U, s) => {
    "use strict";
    s.d(U, {L: () => d});
    var l = s(2994), a = s(5154), v = s(73307), i = s(5e3), t = s(40520);
    let d = (() => {
        class u {
            constructor(e, r, b) {
                this.http = e, this.environment = r, this.storageService = b, this.configURL = this.environment.appConfig, "desktop" === this.environment.clientType && this.useDevApis() && (this.configURL = this.environment.appConfigDev)
            }

            useDevApis() {
                const e = this.storageService.get(["game", "1", "branch"]), r = RegExp(/beta/);
                return e && !r.test(e)
            }

            loadConfigurations() {
                return this.configuration$ || (this.configuration$ = this.http.get(`${this.configURL}`, {headers: {"cache-control": ["no-cache", "no-store"]}}).pipe((0, l.b)(e => this.configData = e), (0, a.d)(1))), this.configuration$
            }

            getConfig() {
                return this.configData ? this.configData : null
            }
        }

        return u.\u0275fac = function (e) {
            return new (e || u)(i.LFG(t.eN), i.LFG(v.Ho), i.LFG(v.qy))
        }, u.\u0275prov = i.Yz7({token: u, factory: u.\u0275fac}), u
    })()
}, 78812
:
(se, U, s) => {
    "use strict";
    s.d(U, {f: () => t});
    var l = s(8929), a = s(591), v = s(49219), i = s(5e3);
    let t = (() => {
        class d {
            constructor() {
                this.dataStore = {
                    navigationItems: null,
                    userMenuItems: null,
                    userEthAccount: null,
                    activeHeaderAlertBar: null,
                    headerAreaHeight: v.standardHeaderHeight
                }, this.unsubscribe = new l.xQ, this._navigationItems$ = new a.X(null), this._userMenuItems$ = new a.X(null), this._activeHeaderAlertBar$ = new a.X(null)
            }

            get navigationItems$() {
                return this._navigationItems$.asObservable()
            }

            get userMenuItems$() {
                return this._userMenuItems$.asObservable()
            }

            get activeHeaderAlertBar$() {
                return this._activeHeaderAlertBar$.asObservable()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            storeNavigationItems(n) {
                this.dataStore.navigationItems = n, this.emitNavItems(this.dataStore.navigationItems)
            }

            storeUserMenuItems(n) {
                this.dataStore.userMenuItems = n, this.emitUserMenuItems(this.dataStore.userMenuItems)
            }

            emitNavItems(n) {
                this._navigationItems$.next(Object.assign({}, n))
            }

            emitUserMenuItems(n) {
                this._userMenuItems$.next(Object.assign({}, n))
            }

            toggleNotifyCollections(n) {
                const e = Object.assign({}, this.dataStore.navigationItems);
                e.collections.showNotificationBubble = !!n, this.emitNavItems(e)
            }

            toggleNotifyOpenPacks(n) {
                const e = Object.assign({}, this.dataStore.navigationItems);
                e.openPacks.showNotificationBubble = !!n, this.emitNavItems(e)
            }

            toggleNotifyMarketSell(n) {
                const e = Object.assign({}, this.dataStore.navigationItems);
                e.market.children.sell.showNotificationBubble = !!n, this.emitNavItems(e)
            }

            toggleNotifyMarketBuy(n) {
                const e = Object.assign({}, this.dataStore.navigationItems);
                e.market.children.buy.showNotificationBubble = !!n, this.emitNavItems(e)
            }

            connectedWalletState() {
                const n = this.dataStore.userMenuItems;
                n.connectWallet.visible = !1, n.disconnectWallet.visible = !0, this.emitUserMenuItems(n)
            }

            disconnectedWalletState() {
                const n = this.dataStore.userMenuItems;
                n.connectWallet.visible = !0, n.disconnectWallet.visible = !1, this.emitUserMenuItems(n)
            }
        }

        return d.\u0275fac = function (n) {
            return new (n || d)
        }, d.\u0275prov = i.Yz7({token: d, factory: d.\u0275fac, providedIn: "root"}), d
    })()
}, 90868
:
(se, U, s) => {
    "use strict";
    s.d(U, {$: () => u});
    var l = s(61737), a = s(27221), v = s(72986), i = s(61709), t = s(73307), d = s(5e3);
    let u = (() => {
        class n {
            constructor(r) {
                this.authService = r
            }

            autoRefreshToken(r, b = 1) {
                return r.pipe((0, a.K)(P => 401 === P.status && b > 0 ? this.authService.refreshToken().pipe((0, v.q)(1), (0, i.zg)(() => this.autoRefreshToken(r, b - 1))) : (0, l._)(P)))
            }
        }

        return n.\u0275fac = function (r) {
            return new (r || n)(d.LFG(t.mI))
        }, n.\u0275prov = d.Yz7({token: n, factory: n.\u0275fac}), n
    })()
}, 77518
:
(se, U, s) => {
    "use strict";
    s.d(U, {np: () => d, Og: () => i, oS: () => t, PW: () => v});
    const v = ["diamond", "gold", "shadow", "meteorite", "plain"];
    var i = (() => {
        return (u = i || (i = {})).INITIATED = "initiated", u.FLUX_PAID = "flux_paid", u.CARDS_DELETED = "cards_deleted", u.TOKENS_PAID = "tokens_paid", u.VALIDATING_PAYMENT = "validating_payment", u.COMPLETED = "completed", i;
        var u
    })();
    const t = {
        [i.INITIATED]: "Pending",
        [i.FLUX_PAID]: "Pending",
        [i.CARDS_DELETED]: "Pending",
        [i.TOKENS_PAID]: "Pending",
        [i.VALIDATING_PAYMENT]: "Validating",
        [i.COMPLETED]: "completed"
    };
    var d = (() => {
        return (u = d || (d = {})).Development = "development", u.Staging = "staging", u.Production = "production", d;
        var u
    })()
}, 98590
:
(se, U, s) => {
    "use strict";
    s.d(U, {I: () => n});
    var l = s(67876), a = s(5e3), v = s(28510), i = s(69808), t = s(87745);

    function d(e, r) {
        if (1 & e && (a.TgZ(0, "gu-vertical-space", 7), a._UZ(1, "gu-icon", 8), a.qZA()), 2 & e) {
            const b = a.oxw();
            a.xp6(1), a.Q6J("fillColor", b.iconFillColor)("iconLigature", b.iconLigature)
        }
    }

    function u(e, r) {
        if (1 & e) {
            const b = a.EpF();
            a.ynx(0), a.TgZ(1, "gu-primary-hex-button", 9), a.NdJ("click", function () {
                return a.CHM(b), a.oxw().ctaClick()
            }), a._uU(2), a.qZA(), a.BQk()
        }
        if (2 & e) {
            const b = a.oxw();
            a.xp6(2), a.Oqu(b.ctaText)
        }
    }

    let n = (() => {
        class e {
            constructor(b) {
                this.activeModal = b, this.onCtaClick = l.Z
            }

            ctaClick() {
                this.onCtaClick(), this.activeModal.close()
            }
        }

        return e.\u0275fac = function (b) {
            return new (b || e)(a.Y36(v.mX))
        }, e.\u0275cmp = a.Xpm({
            type: e,
            selectors: [["cerberus-alert-modal"]],
            inputs: {
                title: "title",
                text: "text",
                iconLigature: "iconLigature",
                iconFillColor: "iconFillColor",
                ctaText: "ctaText",
                onCtaClick: "onCtaClick"
            },
            decls: 10,
            vars: 7,
            consts: [["goldBorder", "top"], ["top", "4x-large", 4, "ngIf"], ["top", "large"], ["align", "center", "kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100", 1, "heading"], ["align", "center", "kind", "large", "fillColor", "colors.light.100", 1, "text", 3, "innerHTML"], ["top", "2x-large", "bottom", "4x-large"], [4, "ngIf"], ["top", "4x-large"], [1, "alertIcon", 3, "fillColor", "iconLigature"], ["size", "large", "type", "secondary", 1, "cta", 3, "click"]],
            template: function (b, P) {
                1 & b && (a._UZ(0, "gu-modal-background", 0), a.YNc(1, d, 2, 2, "gu-vertical-space", 1), a.TgZ(2, "gu-vertical-space", 2)(3, "gu-paragraph-text", 3), a._uU(4), a.qZA()(), a.TgZ(5, "gu-vertical-space", 2), a._UZ(6, "gu-paragraph-text", 4), a.ALo(7, "safe"), a.qZA(), a.TgZ(8, "gu-vertical-space", 5), a.YNc(9, u, 3, 1, "ng-container", 6), a.qZA()), 2 & b && (a.xp6(1), a.Q6J("ngIf", P.iconLigature), a.xp6(3), a.hij(" ", P.title, " "), a.xp6(2), a.Q6J("innerHTML", a.xi3(7, 4, P.text, "html"), a.oJD), a.xp6(3), a.Q6J("ngIf", P.ctaText))
            },
            directives: [i.O5],
            pipes: [t.y],
            styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:640px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.alertIcon[_ngcontent-%COMP%]{font-size:80px}.heading[_ngcontent-%COMP%]{text-transform:uppercase}.text[_ngcontent-%COMP%]{user-select:text}"]
        }), e
    })()
}, 53161
:
(se, U, s) => {
    "use strict";
    s.d(U, {j: () => a});
    var l = s(5e3);
    let a = (() => {
        class v {
        }

        return v.\u0275fac = function (t) {
            return new (t || v)
        }, v.\u0275mod = l.oAB({type: v}), v.\u0275inj = l.cJS({}), v
    })()
}, 39765
:
(se, U, s) => {
    "use strict";
    s.d(U, {w: () => d});
    var l = s(8929), a = s(7625), v = s(24850), i = s(73307), t = s(5e3);
    let d = (() => {
        class u {
            constructor(e, r, b) {
                this.templateRef = e, this.viewContainer = r, this.featureFlagsService = b, this.unsubscribe = new l.xQ
            }

            set featureFlagIf(e) {
                this.featureFlagsService.get(e).pipe((0, a.R)(this.unsubscribe), (0, v.U)(r => !!r)).subscribe(r => {
                    r ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear()
                })
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }
        }

        return u.\u0275fac = function (e) {
            return new (e || u)(t.Y36(t.Rgc), t.Y36(t.s_b), t.Y36(i.B3))
        }, u.\u0275dir = t.lG2({
            type: u,
            selectors: [["", "featureFlagIf", ""]],
            inputs: {featureFlagIf: "featureFlagIf"}
        }), u
    })()
}, 37371
:
(se, U, s) => {
    "use strict";
    s.d(U, {M: () => y}), s(92435);
    var a = s(70655), v = s(32830), i = s(56418), t = s(38872), d = s(86041), u = s(80102), n = s(26532), e = s(65281);
    let r = class extends v.oi {
        constructor() {
            super(...arguments), this.type = "none", this.promise = new Promise(o => {
                this.finished = o
            })
        }

        static get styles() {
            return v.iv`
      :host {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.5);
      }

      .modal-dialog__panel {
        min-height: 240px;
        height: 100%;
        width: 520px;
        background: ${(0, n.asCssProp)(e.gradients.gunmetal.mirror("left"))};
        border: 2px solid ${(0, n.asCssProp)(e.colors.gunmetal[500])};
        display: flex;
        flex-direction: column;
        place-content: stretch center;
        place-items: stretch center;
        padding: 40px;
        box-sizing: border-box;
        text-align: center;
      }

      ${(0, n.asCssProp)((0, n.fadeReveal)(":host .modal-dialog__panel", ":host(.open) .modal-dialog__panel", "100%", .3, 16))}

      .modal-dialog__border {
        height: 4px;
        display: block;
        position: absolute;
        width: calc(100% + 4px);
        left: ${(0, n.asCssProp)((0, u.gridUnits)(-.5))};
        top: ${(0, n.asCssProp)((0, u.gridUnits)(-.5))};
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        background: ${(0, n.asCssProp)(e.gradients.gold.mirror("right"))};
      }

      .modal-dialog__border--type-info {
        background: ${(0, n.asCssProp)(e.gradients.gold.mirror("right"))};
      }

      .modal-dialog__border--type-error {
        background: linear-gradient(270deg, #d73333 0%, #ff8b01 50%, #d73333 100%);
      }

      .modal-dialog__border--type-success {
        background: ${(0, n.asCssProp)(e.gradients.apocyan.mirror("right"))};
      }

      .modal-dialog__icon {
        position: absolute;
        left: 50%;
        top: 0;
        color: white;
        width: 72px;
        height: 64px;
        transform: translate(-50%, -50%);
      }
    `
        }

        notifyState(o) {
            const h = {modal: this, closed: this.promise};
            "modalOpened" === o && (h.close = () => this.close()), this.dispatchEvent(new CustomEvent(o, {
                detail: h,
                bubbles: !0,
                composed: !1
            }))
        }

        close() {
            return requestAnimationFrame(() => requestAnimationFrame(() => {
                this.panel.addEventListener("transitionend", () => {
                    this.notifyState("modalClosed"), this.finished()
                }), this.classList.remove("open")
            })), this.promise
        }

        firstUpdated(o) {
            super.firstUpdated(o), this.notifyState("modalOpened"), requestAnimationFrame(() => requestAnimationFrame(() => this.classList.add("open")))
        }

        renderIcon() {
            const o = {
                info: v.YP`<path d="M53.4917 55.817C52.4717 55.613 51.8087 55.4218 51.5027 55.2433C51.0947 55.0138 50.8907 54.797 50.8907 54.593V39.5H49.125H46.875C46.875 39.5 44.316 39.4235 43.5 39.5L43.4702 41.3203C44.3117 41.4478 44.8217 41.5498 45.0002 41.6263C45.3317 41.6518 45.6122 41.8175 45.8417 42.1235C45.9692 42.3275 46.033 42.6462 46.033 43.0798V54.593C46.033 54.848 45.829 55.0648 45.421 55.2433C44.9365 55.4473 44.2862 55.6385 43.4702 55.817V57.5H53.4917V55.817ZM51.235 32.408C51.235 32.051 51.184 31.7578 51.082 31.5283C50.98 31.2988 50.776 31.082 50.47 30.878C50.2405 30.725 49.96 30.6103 49.6285 30.5337C49.297 30.4573 48.94 30.4063 48.5575 30.3807C48.0475 30.3552 47.6267 30.4062 47.2952 30.5337C47.0147 30.6357 46.6705 30.8398 46.2625 31.1458C45.9055 31.5028 45.6887 31.7833 45.6122 31.9872C45.4847 32.3442 45.3955 32.714 45.3445 33.0965C45.319 33.4025 45.3955 33.7085 45.574 34.0145C45.7015 34.244 45.9055 34.4608 46.186 34.6648C46.4665 34.8688 46.7597 34.9963 47.0657 35.0473C47.4737 35.1237 47.8052 35.1492 48.0602 35.1237C48.5192 35.1237 48.9272 35.06 49.2842 34.9325C49.6667 34.805 50.011 34.6265 50.317 34.397C50.6485 34.142 50.8907 33.8615 51.0437 33.5555C51.1712 33.275 51.235 32.8925 51.235 32.408Z" fill="#EBC98B"></path>`,
                error: v.YP`<path fill-rule="evenodd" clip-rule="evenodd" d="M46.375 49.4999L43 31.4999H52L48.625 49.4999H46.375ZM45.1212 57.5037C45.7854 58.1679 46.5783 58.4999 47.5 58.4999C48.4217 58.4999 49.2146 58.1679 49.8788 57.5037C50.5429 56.8395 50.875 56.0466 50.875 55.1249C50.875 54.2032 50.5429 53.4103 49.8788 52.7462C49.2146 52.082 48.4217 51.7499 47.5 51.7499C46.5783 51.7499 45.7854 52.082 45.1212 52.7462C44.4571 53.4103 44.125 54.2032 44.125 55.1249C44.125 56.0466 44.4571 56.8395 45.1212 57.5037Z" fill="#FF8B01"></path>`,
                success: v.YP`<path d="M43.3389 49.5082L37.1517 43.3211L34.5001 45.9727L43.3389 54.8115L59.2488 38.9016L56.5971 36.25L43.3389 49.5082Z" fill="#8BE1E0"></path>`
            };
            return o[this.type] ? v.YP`
      <svg width="95" height="80" viewBox="0 0 95 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="modal-dialog__icon">
        <path d="M47.5 10.7472L82.3727 66H12.6273L47.5 10.7472Z" stroke="url(#${this.type}_gradient)" stroke-width="4" style="stroke-linecap: round; stroke-linejoin: round;" fill="#1D2F41" filter="url(#drop_shadow)"></path>
        ${o[this.type]}
        <defs>
          <filter id="drop_shadow" x="0.624023" y="0.747192" width="93.7518" height="79.2528" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="5"></feGaussianBlur>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.85 0"></feColorMatrix>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
          </filter>
          <linearGradient id="info_gradient" x1="9" y1="7" x2="9" y2="68" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFF2D8"></stop>
            <stop offset="0.5034" stop-color="#EBC98B"></stop>
            <stop offset="1" stop-color="#C6A052"></stop>
          </linearGradient>
          <linearGradient id="error_gradient" x1="47.6608" y1="90.0638" x2="47.6617" y2="7.01299" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D73333"></stop>
            <stop offset="1" stop-color="#FF8B01"></stop>
          </linearGradient>
          <linearGradient id="success_gradient" x1="9" y1="7" x2="9" y2="68" gradientUnits="userSpaceOnUse">
            <stop stop-color="#AFFAED"></stop>
            <stop offset="0.5034" stop-color="#8BE1E0"></stop>
            <stop offset="1" stop-color="#54BBCD"></stop>
          </linearGradient>
        </defs>
      </svg>
    ` : v.dy``
        }

        render() {
            return v.dy`
      <div class="modal-dialog__panel" data-test-id="modal-dialog-panel">
        <div class="modal-dialog__border modal-dialog__border--type-${this.type}"></div>
        ${this.renderIcon()}
        <slot></slot>
      </div>
    `
        }
    };
    (0, a.__decorate)([(0, i.C)()], r.prototype, "type", void 0), (0, a.__decorate)([(0, t.I)(".modal-dialog__panel")], r.prototype, "panel", void 0), r = (0, a.__decorate)([(0, d.M)("gu-modal-dialog")], r), s(51256), s(11015);
    var S = s(5e3), I = s(28510), w = s(69808), x = s(87745);

    function $(M, o) {
        if (1 & M) {
            const h = S.EpF();
            S.TgZ(0, "gu-primary-hex-button", 8), S.NdJ("click", function () {
                S.CHM(h);
                const T = S.oxw();
                return T.buttonClick(T.secondaryButton)
            }), S._uU(1), S.qZA()
        }
        if (2 & M) {
            const h = S.oxw();
            S.xp6(1), S.hij(" ", h.secondaryButton.text, " ")
        }
    }

    function O(M, o) {
        if (1 & M) {
            const h = S.EpF();
            S.TgZ(0, "gu-primary-hex-button", 9), S.NdJ("click", function () {
                S.CHM(h);
                const T = S.oxw();
                return T.buttonClick(T.primaryButton)
            }), S.ALo(1, "safe"), S.qZA()
        }
        if (2 & M) {
            const h = S.oxw();
            S.Q6J("innerHTML", S.xi3(1, 1, h.primaryButton.text, "html"), S.oJD)
        }
    }

    let y = (() => {
        class M {
            constructor(h) {
                this.activeModal = h
            }

            buttonClick(h) {
                h.onClick && "function" == typeof h.onClick && h.onClick(), h.closeOnClick && this.activeModal.close()
            }
        }

        return M.\u0275fac = function (h) {
            return new (h || M)(S.Y36(I.mX))
        }, M.\u0275cmp = S.Xpm({
            type: M,
            selectors: [["cerberus-modal-dialog-control"]],
            inputs: {
                title: "title",
                content: "content",
                type: "type",
                secondaryButton: "secondaryButton",
                primaryButton: "primaryButton"
            },
            decls: 10,
            vars: 8,
            consts: [[3, "type"], [1, "modalDialogContent"], ["data-test-id", "modal-dialog-control-title", "kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100", "align", "center"], ["top", "small", "bottom", "x-large"], ["data-test-id", "modal-dialog-control-content", "fillColor", "colors.light.100", "align", "center", 3, "innerHTML"], [1, "modalDialogContent__buttons"], ["type", "secondary", "size", "large", "data-test-id", "modal-dialog-control-secondary-button", 3, "click", 4, "ngIf"], ["type", "primary", "size", "large", "data-test-id", "modal-dialog-control-primary-button", 3, "innerHTML", "click", 4, "ngIf"], ["type", "secondary", "size", "large", "data-test-id", "modal-dialog-control-secondary-button", 3, "click"], ["type", "primary", "size", "large", "data-test-id", "modal-dialog-control-primary-button", 3, "innerHTML", "click"]],
            template: function (h, C) {
                1 & h && (S.TgZ(0, "gu-modal-dialog", 0)(1, "div", 1)(2, "gu-paragraph-text", 2), S._uU(3), S.qZA(), S.TgZ(4, "gu-vertical-space", 3), S._UZ(5, "gu-paragraph-text", 4), S.ALo(6, "safe"), S.qZA(), S.TgZ(7, "gu-vertical-space", 5), S.YNc(8, $, 2, 1, "gu-primary-hex-button", 6), S.YNc(9, O, 2, 4, "gu-primary-hex-button", 7), S.qZA()()()), 2 & h && (S.Q6J("type", C.type), S.xp6(3), S.Oqu(C.title), S.xp6(2), S.Q6J("innerHTML", S.xi3(6, 5, C.content, "html"), S.oJD), S.xp6(3), S.Q6J("ngIf", C.secondaryButton), S.xp6(1), S.Q6J("ngIf", C.primaryButton))
            },
            directives: [w.O5],
            pipes: [x.y],
            styles: [".modalDialogContent[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 8px;align-items:center;max-width:100vw}.modalDialogContent[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.modalDialogContent__buttons[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center}.modalDialogContent__buttons[_ngcontent-%COMP%]   gu-hex-button[_ngcontent-%COMP%]{max-width:50%;flex:1 1 0px}.modalDialogContent__buttons[_ngcontent-%COMP%]   gu-hex-button[_ngcontent-%COMP%]:not(:last-child){margin-right:16px}"]
        }), M
    })()
}, 87745
:
(se, U, s) => {
    "use strict";
    s.d(U, {y: () => v});
    var l = s(5e3), a = s(22313);
    let v = (() => {
        class i {
            constructor(d) {
                this.sanitizer = d
            }

            transform(d, u) {
                switch (u) {
                    case"html":
                        return this.sanitizer.bypassSecurityTrustHtml(d);
                    case"style":
                        return this.sanitizer.bypassSecurityTrustStyle(d);
                    case"script":
                        return this.sanitizer.bypassSecurityTrustScript(d);
                    case"url":
                        return this.sanitizer.bypassSecurityTrustUrl(d);
                    case"resourceUrl":
                        return this.sanitizer.bypassSecurityTrustResourceUrl(d);
                    default:
                        throw new Error(`Invalid safe type specified: ${u}`)
                }
            }
        }

        return i.\u0275fac = function (d) {
            return new (d || i)(l.Y36(a.H7, 16))
        }, i.\u0275pipe = l.Yjl({name: "safe", type: i, pure: !0}), i
    })()
}, 17268
:
(se, U, s) => {
    "use strict";
    s.d(U, {K: () => t});
    var l = s(5e3), a = s(69808);
    const v = function (d, u, n, e, r) {
        return {
            "tooltipBubble--top": d,
            "tooltipBubble--left": u,
            "tooltipBubble--right": n,
            "tooltipBubble--bottom": e,
            "tooltipBubble--large": r
        }
    }, i = ["*"];
    let t = (() => {
        class d {
            constructor() {
                this.position = "top", this.size = "small", this.autoClose = !0
            }

            get getClass() {
                return !this.autoClose
            }

            ngOnInit() {
            }
        }

        return d.\u0275fac = function (n) {
            return new (n || d)
        }, d.\u0275cmp = l.Xpm({
            type: d,
            selectors: [["app-tooltip"]],
            hostVars: 2,
            hostBindings: function (n, e) {
                2 & n && l.ekj("openTooltip", e.getClass)
            },
            inputs: {title: "title", position: "position", size: "size", autoClose: "autoClose"},
            ngContentSelectors: i,
            decls: 3,
            vars: 9,
            consts: [["fillColor", "colors.gunmetal.300", 1, "tooltipBubble", 3, "kind", "ngClass", "innerHTML"], ["tooltipBubble", ""]],
            template: function (n, e) {
                1 & n && (l.F$t(), l.Hsn(0), l._UZ(1, "gu-paragraph-text", 0, 1)), 2 & n && (l.xp6(1), l.Q6J("kind", "large" === e.size ? "small" : "x-small")("ngClass", l.qbA(3, v, "top" === e.position, "left" === e.position, "right" === e.position, "bottom" === e.position, "large" === e.size))("innerHTML", e.title, l.oJD))
            },
            directives: [a.mk],
            styles: ['.tooltipBubble[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]:hover   .tooltipBubble[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]:hover   .tooltipBubble.tooltipBubble--top[_ngcontent-%COMP%]{transform:translate(-50%,calc(-100% + (calc(var(--vh) * 1.7) * .5)))}[_nghost-%COMP%]:hover   .tooltipBubble.tooltipBubble--bottom[_ngcontent-%COMP%]{transform:translate(-50%,calc(100% - (calc(var(--vh) * 1.7) * .5)))}[_nghost-%COMP%]:hover   .tooltipBubble.tooltipBubble--left[_ngcontent-%COMP%]{transform:translate(calc(-100% - (calc(var(--vw) * .5) * .5) * .5),-50%)}[_nghost-%COMP%]:hover   .tooltipBubble.tooltipBubble--right[_ngcontent-%COMP%]{transform:translate(calc(0% + (calc(var(--vw) * .5) * .5) * .5),-50%)}.openTooltip[_nghost-%COMP%]   .tooltipBubble[_ngcontent-%COMP%]{opacity:1}.openTooltip[_nghost-%COMP%]   .tooltipBubble.tooltipBubble--top[_ngcontent-%COMP%]{transform:translate(-50%,calc(-100% + (calc(var(--vh) * 1.7) * .5)))}.openTooltip[_nghost-%COMP%]   .tooltipBubble.tooltipBubble--bottom[_ngcontent-%COMP%]{transform:translate(-50%,calc(100% - (calc(var(--vh) * 1.7) * .5)))}.openTooltip[_nghost-%COMP%]   .tooltipBubble.tooltipBubble--left[_ngcontent-%COMP%]{transform:translate(calc(-100% - (calc(var(--vw) * .5) * .5) * .5),-50%)}.openTooltip[_nghost-%COMP%]   .tooltipBubble.tooltipBubble--right[_ngcontent-%COMP%]{transform:translate(calc(0% + (calc(var(--vw) * .5) * .5) * .5),-50%)}.tooltipBubble[_ngcontent-%COMP%]{z-index:30;text-transform:capitalize;padding:calc(var(--vh) * 1.3);padding-top:calc(var(--vh) * .8);padding-bottom:calc(var(--vh) * .8);font-weight:600;user-select:none;pointer-events:none;position:absolute;background:#0f1b27;border:calc(var(--vh) * .15) solid #3d5a74;color:#92abc2;white-space:nowrap;border-radius:calc(var(--vh) * .4);opacity:0;left:50%;text-align:center}.tooltipBubble[_ngcontent-%COMP%]:before{content:"";position:absolute;left:50%;border:calc(var(--vh) * .7) solid transparent;transform:translate(-50%)}.tooltipBubble--large[_ngcontent-%COMP%]{font-weight:400;font-size:16px;padding:16px;text-transform:none}.tooltipBubble--top[_ngcontent-%COMP%]{top:0;transform:translate(-50%,-100%);margin-top:calc(calc(var(--vh) * 1.7) * -1)}.tooltipBubble--top[_ngcontent-%COMP%]:before{border-top-color:#3d5a74;bottom:calc(calc(calc(var(--vh) * .7) * -2) - calc(var(--vh) * .15))}.tooltipBubble--bottom[_ngcontent-%COMP%]{bottom:0;transform:translate(-50%,100%);margin-top:calc(var(--vh) * 1.7)}.tooltipBubble--bottom[_ngcontent-%COMP%]:before{border-bottom-color:#3d5a74;top:calc(calc(calc(var(--vh) * .7) * -2) - calc(var(--vh) * .15))}.tooltipBubble--left[_ngcontent-%COMP%]{left:0;top:50%}.tooltipBubble--left[_ngcontent-%COMP%]:before{left:100%;transform:translateY(50%);border-left-color:#3d5a74;right:calc(calc(calc(var(--vh) * .7) * -2) - calc(var(--vh) * .15));bottom:50%}.tooltipBubble--right[_ngcontent-%COMP%]{margin-left:10px;top:50%}.tooltipBubble--right[_ngcontent-%COMP%]:before{right:100%;transform:translateY(50%);border-right-color:#3d5a74;left:calc(calc(calc(var(--vh) * .7) * -2) - calc(var(--vh) * .15));bottom:50%}']
        }), d
    })()
}, 25774
:
(se, U, s) => {
    "use strict";
    s.d(U, {O: () => d});
    var l = s(73307), a = s(5e3), v = s(69808);

    function i(u, n) {
        if (1 & u) {
            const e = a.EpF();
            a.TgZ(0, "gu-announce-banner-template", 1), a.NdJ("onCloseAnnounceBanner", function () {
                return a.CHM(e), a.oxw().onCloseAnnounceBanner()
            }), a.Hsn(1), a.qZA()
        }
        if (2 & u) {
            const e = a.oxw();
            a.Q6J("closable", e.closable)
        }
    }

    const t = ["*"];
    let d = (() => {
        class u {
            constructor(e) {
                this.storageService = e, this.closable = !0, this.visible = !1
            }

            ngOnInit() {
                this.visible = this.showBanner(this.id)
            }

            showBanner(e) {
                return !e || !this.storageService.get([this.id])
            }

            markSeen(e) {
                this.storageService.set([e], !0)
            }

            onCloseAnnounceBanner() {
                this.id && this.markSeen(this.id), this.visible = !1
            }
        }

        return u.\u0275fac = function (e) {
            return new (e || u)(a.Y36(l.qy))
        }, u.\u0275cmp = a.Xpm({
            type: u,
            selectors: [["cerberus-announce-banner-control"]],
            inputs: {id: "id", closable: "closable"},
            ngContentSelectors: t,
            decls: 1,
            vars: 1,
            consts: [[3, "closable", "onCloseAnnounceBanner", 4, "ngIf"], [3, "closable", "onCloseAnnounceBanner"]],
            template: function (e, r) {
                1 & e && (a.F$t(), a.YNc(0, i, 2, 1, "gu-announce-banner-template", 0)), 2 & e && a.Q6J("ngIf", r.visible)
            },
            directives: [v.O5],
            styles: ["[_nghost-%COMP%]{position:absolute;width:100%;z-index:21}.announceBannerControl--inline[_nghost-%COMP%]{position:relative}"]
        }), u
    })()
}, 97993
:
(se, U, s) => {
    "use strict";
    s.d(U, {i: () => d});
    var l = s(8929), a = s(7625), v = s(55195), i = s(73307), t = s(5e3);
    let d = (() => {
        class u {
            constructor(e) {
                this.featureFlagsService = e, this.text = "", this.unsubscribe = new l.xQ
            }

            ngOnInit() {
                this.watchFlagData()
            }

            watchFlagData() {
                this.featureFlagsService.get(v.vU.controllableBannerData).pipe((0, a.R)(this.unsubscribe)).subscribe(e => {
                    this.text = e.text
                })
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }
        }

        return u.\u0275fac = function (e) {
            return new (e || u)(t.Y36(i.B3))
        }, u.\u0275cmp = t.Xpm({
            type: u,
            selectors: [["cerberus-controllable-banner"]],
            decls: 2,
            vars: 1,
            consts: [["both", "2x-large", 1, "layout"], ["data-test-id", "controllable-banner-text", "kind", "large", "align", "center", "fillColor", "colors.light.300", 1, "layout__text", 3, "innerHtml"]],
            template: function (e, r) {
                1 & e && (t.TgZ(0, "gu-vertical-space", 0), t._UZ(1, "gu-paragraph-text", 1), t.qZA()), 2 & e && (t.xp6(1), t.Q6J("innerHtml", r.text, t.oJD))
            },
            styles: ["[_nghost-%COMP%]{display:flex;width:100%}[_nghost-%COMP%]     a, [_nghost-%COMP%]     a:link, [_nghost-%COMP%]     a:visited{color:#affaed;text-decoration:none}.layout[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding:0 64px;width:100%;justify-content:center}.layout__text[_ngcontent-%COMP%]{max-width:600px}"]
        }), u
    })()
}, 4324
:
(se, U, s) => {
    "use strict";
    s.d(U, {
        ic: () => u,
        am: () => Ks,
        sZ: () => ae,
        el: () => Xs,
        gn: () => Es,
        kM: () => Us,
        MZ: () => wt.M,
        W2: () => d
    });
    var l = s(69808), a = s(93075), v = s(531), i = s(53161), t = s(5e3);
    let d = (() => {
        class k {
        }

        return k.\u0275fac = function (p) {
            return new (p || k)
        }, k.\u0275mod = t.oAB({type: k}), k.\u0275inj = t.cJS({imports: [[l.ez, a.u5, i.j, v.P]]}), k
    })(), u = (() => {
        class k {
        }

        return k.\u0275fac = function (p) {
            return new (p || k)
        }, k.\u0275mod = t.oAB({type: k}), k.\u0275inj = t.cJS({imports: [[l.ez]]}), k
    })(), n = {numbers: {randomNumber: 0}, text: {randomText: "moo"}};
    setInterval(() => {
        n = Object.assign(Object.assign({}, n), {numbers: {randomNumber: Math.random()}})
    }, 400);
    var r = s(73307), b = s(57470);
    const P = ["carousel"], S = function (k) {
        return {"championButtons__button--active": k}
    };

    function I(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "div", 14), t.NdJ("click", function () {
                const f = t.CHM(p).index;
                return t.oxw().gotoChampionSlide(f)
            }), t.TgZ(1, "picture"), t._UZ(2, "source", 15)(3, "source", 16)(4, "img", 17), t.qZA()()
        }
        if (2 & k) {
            const p = V.$implicit, R = V.index, q = t.oxw();
            t.Q6J("ngClass", t.VKq(13, S, q.activeChampionIndex === R)), t.xp6(1), t.Gre("championButtons__button__picture championButtons__button__picture--", p.name, ""), t.xp6(1), t.FAE("srcset", "\n          //images.godsunchained.com/art2/250/", p.protoId, ".webp 250w,\n          //images.godsunchained.com/art2/375/", p.protoId, ".webp 375w,\n          //images.godsunchained.com/art2/500/", p.protoId, ".webp 500w,\n          //images.godsunchained.com/art2/720/", p.protoId, ".webp 720w\n        ", t.LSH), t.xp6(1), t.FAE("srcset", "\n          //images.godsunchained.com/art2/250/", p.protoId, ".jpg 250w,\n          //images.godsunchained.com/art2/375/", p.protoId, ".jpg 375w,\n          //images.godsunchained.com/art2/500/", p.protoId, ".jpg 500w,\n          //images.godsunchained.com/art2/720/", p.protoId, ".jpg 720w\n        ", t.LSH), t.xp6(1), t.MGl("src", "//images.godsunchained.com/art2/500/", p.protoId, ".jpg", t.LSH)
        }
    }

    function w(k, V) {
        if (1 & k && (t.TgZ(0, "div", 18)(1, "picture", 19), t._UZ(2, "source", 20)(3, "source", 21)(4, "img", 22), t.qZA(), t.TgZ(5, "gu-vertical-space", 23)(6, "gu-heading-text", 24), t._uU(7), t.qZA()(), t.TgZ(8, "gu-paragraph-text", 25), t._uU(9), t.qZA(), t.TgZ(10, "gu-vertical-space", 26)(11, "gu-simple-text-button", 27), t._uU(12, " Read more "), t.qZA()(), t.TgZ(13, "gu-paragraph-text", 28), t._uU(14), t.qZA()()), 2 & k) {
            const p = V.$implicit;
            t.xp6(2), t.bRH("srcset", "\n            //images.godsunchained.com/art2/250/", p.protoId, ".webp 250w,\n            //images.godsunchained.com/art2/375/", p.protoId, ".webp 375w,\n            //images.godsunchained.com/art2/500/", p.protoId, ".webp 500w,\n            //images.godsunchained.com/art2/720/", p.protoId, ".webp 720w,\n            //images.godsunchained.com/art2/1024/", p.protoId, ".webp 1024w,\n            //images.godsunchained.com/art2/1280/", p.protoId, ".webp 1280w,\n            //images.godsunchained.com/art2/1440/", p.protoId, ".webp 1440w\n          ", t.LSH), t.xp6(1), t.bRH("srcset", "\n            //images.godsunchained.com/art2/250/", p.protoId, ".jpg 250w,\n            //images.godsunchained.com/art2/375/", p.protoId, ".jpg 375w,\n            //images.godsunchained.com/art2/500/", p.protoId, ".jpg 500w,\n            //images.godsunchained.com/art2/720/", p.protoId, ".jpg 720w,\n            //images.godsunchained.com/art2/1024/", p.protoId, ".jpg 1024w,\n            //images.godsunchained.com/art2/1280/", p.protoId, ".jpg 1280w,\n            //images.godsunchained.com/art2/1440/", p.protoId, ".jpg 1440w\n          ", t.LSH), t.xp6(1), t.MGl("src", "//images.godsunchained.com/art2/720/", p.protoId, ".jpg", t.LSH), t.xp6(3), t.hij(" ", p.title, " "), t.xp6(2), t.hij(" ", p.description, " "), t.xp6(2), t.s9C("href", p.link), t.xp6(3), t.hij(" ", p.byline, " ")
        }
    }

    let x = (() => {
        class k {
            constructor() {
                this.activeChampionIndex = 0, this.champions = b.zy.Y, this.routes = b.CF.J
            }

            ngOnInit() {
            }

            gotoChampionSlide(p) {
                this.carousel.nativeElement.gotoSlide(p)
            }

            onChampionCarouselUpdate(p) {
                this.activeChampionIndex = p.detail.currentActiveSlides[0]
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-season1-champion-section"]],
            viewQuery: function (p, R) {
                if (1 & p && t.Gf(P, 7), 2 & p) {
                    let q;
                    t.iGM(q = t.CRH()) && (R.carousel = q.first)
                }
            },
            decls: 19,
            vars: 4,
            consts: [["size", "large", "fillGradient", "gradients.gold.simple", "align", "center", 1, "heading"], [1, "championButtons"], ["class", "championButtons__button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "championCarouselWrapper"], [1, "championCarousel", 3, "onSlideChange"], ["carousel", ""], ["class", "championCarousel__championSlide", 4, "ngFor", "ngForOf"], [1, "sideBarImage", "sideBarImage--left"], ["srcset", "/assets/images/expansion-1/carousel-sidebar.webp", "type", "image/webp"], ["srcset", "/assets/images/expansion-1/carousel-sidebar.png", "type", "image/png"], ["src", "/assets/images/expansion-1/carousel-sidebar.png", "alt", "", 1, "sideBarImage__img"], [1, "sideBarImage", "sideBarImage--right"], ["both", "x-large", 1, "ctaButtonRow"], ["type", "primary", "size", "large", 3, "disabled", "href"], [1, "championButtons__button", 3, "ngClass", "click"], ["sizes", "20vw", "type", "image/webp", 3, "srcset"], ["sizes", "20vw", "type", "image/jpg", 3, "srcset"], ["alt", "", 1, "championButtons__button__picture__img", 3, "src"], [1, "championCarousel__championSlide"], [1, "championCarousel__championSlide__imgWrapper"], ["sizes", "75vw", "type", "image/webp", 3, "srcset"], ["sizes", "75vw", "type", "image/jpg", 3, "srcset"], ["alt", "", 1, "championCarousel__championSlide__imgWrapper__img", 3, "src"], ["both", "x-large"], ["size", "x-small", "fillColor", "colors.light.100", "align", "center"], ["fillColor", "colors.light.100", "align", "center", "kind", "large", 1, "championCarousel__championSlide__description"], ["top", "large", "bottom", "3x-large", 1, "readMoreLink"], ["kind", "tag", "target", "_blank", "fillColor", "colors.apocyan.300", "align", "center", 3, "href"], ["align", "center", "kind", "large"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "gu-heading-text", 0), t._uU(1, " Meet your champions\n"), t.qZA(), t.TgZ(2, "div", 1), t.YNc(3, I, 5, 15, "div", 2), t.qZA(), t.TgZ(4, "div", 3)(5, "gu-carousel", 4, 5), t.NdJ("onSlideChange", function (f) {
                    return R.onChampionCarouselUpdate(f)
                }), t.YNc(7, w, 15, 19, "div", 6), t.qZA(), t.TgZ(8, "picture", 7), t._UZ(9, "source", 8)(10, "source", 9)(11, "img", 10), t.qZA(), t.TgZ(12, "picture", 11), t._UZ(13, "source", 8)(14, "source", 9)(15, "img", 10), t.qZA()(), t.TgZ(16, "gu-vertical-space", 12)(17, "gu-primary-hex-button", 13), t._uU(18, "Buy Packs"), t.qZA()()), 2 & p && (t.xp6(3), t.Q6J("ngForOf", R.champions), t.xp6(4), t.Q6J("ngForOf", R.champions), t.xp6(10), t.Q6J("disabled", !0)("href", R.routes.buyPacks.path))
            },
            directives: [l.sg, l.mk],
            styles: ['@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{position:relative;padding:80px 0;display:flex;flex-direction:column;background:url(/assets/images/expansion-1/Lysander_LC_BG.jpg);background-size:cover;background-position:center}[_nghost-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom,#0A0A0A 0%,rgba(10,10,10,.8) 50%)}[_nghost-%COMP%]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:12px;background:radial-gradient(47.52% 50% at 50% 50%,#C6A052 0%,rgba(198,160,82,0) 100%)}.heading[_ngcontent-%COMP%]{position:relative;padding:0 20px}.championButtons[_ngcontent-%COMP%]{margin:20px auto 48px;padding:0 28px;display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:28px;grid-row-gap:28px;max-width:"768px";width:100%}@media screen and (min-width: 512px){.championButtons[_ngcontent-%COMP%]{grid-template-columns:repeat(6,1fr)}}.championButtons__button[_ngcontent-%COMP%]{border-radius:50%;width:100%;padding-bottom:100%;transition:box-shadow .25s ease-in-out;position:relative;overflow:hidden;cursor:pointer}.championButtons__button__picture[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.championButtons__button__picture__img[_ngcontent-%COMP%]{height:300%;width:300%;object-fit:cover;position:absolute;top:0;left:50%;transform:translate(-50%,-10%)}.championButtons__button__picture--lysander[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-50%,-9%)}.championButtons__button__picture--neferu[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-45%,-14%)}.championButtons__button__picture--valka[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-52%,-6.5%)}.championButtons__button__picture--pallas[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-54%,-7%)}.championButtons__button__picture--selena[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-50%,-8%)}.championButtons__button--active[_ngcontent-%COMP%]{box-shadow:0 0 20px #f7ea9b}.championCarouselWrapper[_ngcontent-%COMP%]{margin:0 auto;width:85%;max-width:1000px;position:relative}@media screen and (min-width: 768px){.championCarouselWrapper[_ngcontent-%COMP%]{width:65%}}.sideBarImage[_ngcontent-%COMP%]{display:none;position:absolute;top:-3%;left:-6.25%;width:12.5%;user-select:none;pointer-events:none}.sideBarImage--right[_ngcontent-%COMP%]{left:auto;right:-6.25%;transform:rotateY(180deg)}.sideBarImage__img[_ngcontent-%COMP%]{display:block;width:100%}.championCarousel[_ngcontent-%COMP%]{width:100%;margin:auto;overflow:hidden}.championCarousel__championSlide[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;position:relative}.championCarousel__championSlide__imgWrapper[_ngcontent-%COMP%]{width:100%;padding-bottom:50%;position:relative;overflow:hidden}@media screen and (min-width: 512px){.sideBarImage[_ngcontent-%COMP%]{display:block}.championCarousel[_ngcontent-%COMP%]{border-radius:4vw 4vw 0 0}.championCarousel__championSlide__imgWrapper[_ngcontent-%COMP%]{border-radius:0 0 4vw 4vw}}.championCarousel__championSlide__imgWrapper__img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;object-fit:cover;object-position:center 20%}.championCarousel__championSlide__description[_ngcontent-%COMP%]{width:75%;margin:0 auto}.ctaButtonRow[_ngcontent-%COMP%]{display:flex;justify-content:center}.readMoreLink[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center}.readMoreLink__text[_ngcontent-%COMP%]{padding-bottom:4px;border-bottom:2px solid #8BE1E0}.bottomContent[_ngcontent-%COMP%]{position:relative}']
        }), k
    })();
    var $ = s(72986), C = (s(22249), s(90473), s(85353), s(43337), s(66678), s(83920)), T = s(45821);

    function K(k, V) {
        if (1 & k && (t.TgZ(0, "gu-paragraph", 7), t._uU(1), t.qZA()), 2 & k) {
            const p = t.oxw();
            t.Gre("newsletter-form__help-", p.help.status, ""), t.xp6(1), t.hij(" ", p.help.text, " ")
        }
    }

    let ce = (() => {
        class k {
            constructor(p) {
                this.authHostService = p, this.help = {
                    status: "info",
                    text: ""
                }, this.control = new a.NI("", [a.kI.required, a.kI.email])
            }

            submit() {
                if (!this.control.valid) return !1;
                this.authHostService.post(`/subscribe/${this.control.value}`).pipe((0, $.q)(1)).subscribe({
                    next: p => {
                        "success" === p ? (this.help = {
                            status: "success",
                            text: "Success! You\u2019re all signed up."
                        }, this.control.disable()) : this.handleError()
                    }, error: () => this.handleError()
                })
            }

            handleError() {
                this.help = {status: "error", text: "Encountered an error. Please try again"}
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(r.LI))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-newsletter-signup-form"]],
            decls: 10,
            vars: 7,
            consts: [["fillColor", "colors.light[100]", "align", "center", "size", "x-small"], [1, "newsletter-form__form", 3, "submit"], ["placeholder", "Enter your email here", "data-test-id", "newsletter-form-input", 1, "newsletter-form__input", 3, "value", "valid", "formControl", "disabled"], [3, "control"], ["key", "email", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "email-error-email"], ["size", "small", "data-test-id", "newsletter-form-help-text", 3, "class", 4, "ngIf"], ["type", "primary", "size", "large", 1, "newsletter-form__submit-button", 3, "disabled", "click"], ["size", "small", "data-test-id", "newsletter-form-help-text"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "gu-heading-text", 0), t._uU(1, " signup for our newsletter!\n"), t.qZA(), t.TgZ(2, "gu-form", 1), t.NdJ("submit", function () {
                    return R.submit()
                }), t._UZ(3, "gu-input", 2), t.TgZ(4, "gu-validation-errors", 3)(5, "gu-body-text", 4), t._uU(6, " Please enter a valid email "), t.qZA()(), t.YNc(7, K, 2, 4, "gu-paragraph", 5), t.TgZ(8, "gu-primary-hex-button", 6), t.NdJ("click", function () {
                    return R.submit()
                }), t._uU(9, " submit "), t.qZA()()), 2 & p && (t.xp6(3), t.Q6J("value", R.control.value)("valid", R.control.valid)("formControl", R.control)("disabled", R.control.disabled), t.xp6(1), t.Q6J("control", R.control), t.xp6(3), t.Q6J("ngIf", R.help.text), t.xp6(1), t.Q6J("disabled", R.control.disabled || !R.control.valid))
            },
            directives: [C._, a.JJ, a.oH, T.n, l.O5],
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box}.newsletter-form__input[_ngcontent-%COMP%]{margin:16px 0 24px}.newsletter-form__submit-button[_ngcontent-%COMP%]{min-width:170px;align-self:center;flex-grow:0}.newsletter-form__help-success[_ngcontent-%COMP%]{color:#f6f6f6}.newsletter-form__help-error[_ngcontent-%COMP%]{color:#8be1e0}.newsletter-form__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;place-content:stretch flex-start;place-items:stretch flex-start;text-align:center}"]
        }), k
    })(), ae = (() => {
        class k {
            constructor(p, R) {
                this.authService = p, this.authHostService = R
            }

            get isLoggedIn() {
                return this.authService.isLoggedIn()
            }

            ngOnInit() {
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(r.mI), t.Y36(r.LI))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-lore-route"]],
            decls: 34,
            vars: 0,
            consts: [[1, "headerStrip"], ["top", "4x-large"], ["fillColor", "colors.light.100", "align", "center", "size", "x-large"], ["bottom", "4x-large", "top", "large", 1, "headerStrip__bodyCopy"], ["fillColor", "colors.light.100", "align", "center", "kind", "large"], [1, "bandedStrip"], ["both", "x-large"], ["fillGradient", "gradients.gold.simple", "align", "center", "size", "small"], ["top", "medium"], ["kind", "help", "align", "center"], ["both", "medium"], ["src", "/assets/images/weird-spacer-thing.svg", 1, "weirdSpacingImage"], ["kind", "tag", "align", "center"], ["top", "4x-large", "bottom", "2x-large", 1, "loreIntroText"], ["kind", "large"], ["top", "large"], ["href", "https://blog.godsunchained.com/2020/01/24/chapter-1-citadel-of-the-gods/", 1, "readMoreLink"], ["kind", "tag", "fillColor", "colors.apocyan.300", "align", "center", 1, "readMoreLink__text"], ["top", "6x-large"], ["size", "x-small", "align", "center", 1, "mysteryHeading"], ["top", "2x-large", 1, "ctaButtonRow"], ["type", "primary", "href", "https://blog.godsunchained.com/"], ["both", "6x-large"], [1, "newsLetterSignUp"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "header", 0)(1, "gu-vertical-space", 1)(2, "gu-heading-text", 2), t._uU(3, " LORE "), t.qZA()(), t.TgZ(4, "gu-vertical-space", 3)(5, "gu-paragraph-text", 4), t._uU(6, " Come, mortal! Settle in and be regaled by tales that traverse the Nine Realms, recount the deeds of the champions of Eucos, and whisper of the gods themselves. "), t.qZA()()(), t.TgZ(7, "div", 5)(8, "gu-vertical-space", 6)(9, "gu-heading-text", 7), t._uU(10, " Citadel of the gods "), t.qZA(), t.TgZ(11, "gu-vertical-space", 8)(12, "gu-paragraph-text", 9), t._uU(13, " Welcome to the trial "), t.qZA()(), t.TgZ(14, "gu-vertical-space", 10), t._UZ(15, "img", 11), t.qZA(), t.TgZ(16, "gu-paragraph-text", 12), t._uU(17, " by kelly digges "), t.qZA()()(), t.TgZ(18, "gu-vertical-space", 13)(19, "gu-paragraph-text", 14), t._uU(20, " You've seen the statues of the gods in temples, of course. Incorruptible Thaeriel, Vengeful Auros, Gentle Aeona. To mortal worshipers, the statues are the gods: terrible and beautiful. But the reality is they are the pale shadow of a blazing truth. This is the story of one fateful meeting, and a divine contest that would alter the course of the Nine Relams for aeons to come. "), t.qZA(), t.TgZ(21, "gu-vertical-space", 15)(22, "a", 16)(23, "gu-simple-text", 17), t._uU(24, " Read more "), t.qZA()()()(), t._UZ(25, "cerberus-season1-champion-section"), t.TgZ(26, "gu-vertical-space", 18)(27, "gu-heading-text", 19), t._uU(28, " FOR MORE GODS UNCHAINED CONTENT & UPDATES "), t.qZA(), t.TgZ(29, "gu-vertical-space", 20)(30, "gu-primary-hex-button", 21), t._uU(31, "Visit blog"), t.qZA()()(), t.TgZ(32, "gu-vertical-space", 22), t._UZ(33, "cerberus-newsletter-signup-form", 23), t.qZA())
            },
            directives: [x, ce],
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{display:block}.headerStrip[_ngcontent-%COMP%]{background:url(/assets/images/colour-palace-background2.jpg);background-size:cover;background-position:center;display:flex;flex-direction:column}.headerStrip__bodyCopy[_ngcontent-%COMP%]{max-width:800px;width:80%;margin-left:auto;margin-right:auto}.bandedStrip[_ngcontent-%COMP%]{background:#0F1B27;display:flex;flex-direction:column}.weirdSpacingImage[_ngcontent-%COMP%]{display:block;width:148px;margin-left:auto;margin-right:auto}.loreIntroText[_ngcontent-%COMP%]{width:80%;max-width:800px;margin-left:auto;margin-right:auto}.readMoreLink[_ngcontent-%COMP%]{display:inline-flex;justify-content:flex-start}.readMoreLink__text[_ngcontent-%COMP%]{padding-bottom:4px;border-bottom:2px solid #8BE1E0}.ctaButtonRow[_ngcontent-%COMP%]{display:flex;justify-content:center}.mysteryHeading[_ngcontent-%COMP%]{max-width:500px;padding:0 20px;margin-left:auto;margin-right:auto}.signupForm[_ngcontent-%COMP%]{width:85%;max-width:450px;display:flex;flex-direction:column;margin-left:auto;margin-right:auto}.signupForm__emailInput[_ngcontent-%COMP%]{background:#0F1B27;color:#7192b0;border:1px solid #527493;text-align:center;padding:12px 20px;width:100%}.signupForm__emailInput[_ngcontent-%COMP%]::placeholder{font-size:14px;font-style:italic;color:#f6f6f6b3}.signupForm__emailInput[_ngcontent-%COMP%]:-ms-input-placeholder{font-size:14px;font-style:italic;color:#f6f6f6b3}.signupForm__emailInput[_ngcontent-%COMP%]:-moz-placeholder{font-size:14px;font-style:italic;color:#f6f6f6b3}.newsLetterSignUp[_ngcontent-%COMP%]{max-width:530px;width:85%;margin-left:auto;margin-right:auto}"]
        }), k
    })();
    var oe = s(39029), Ce = s(69039), H = s(5284), Z = s(65281), de = s(12052), xe = s(32830), be = s(98539),
        W = s(97223), he = s(19444);
    const J = "FLIP_A_CARD", ie = "TOGGLE_OPEN_PACK_VIDEO_VISIBILITY", ge = "TOGGLE_OPEN_PACK_CARDS",
        fe = "SET_OPEN_PACK_VIDEO_ID", Ue = "RESET_TEMPLE", Xe = "SET_CURRENT_UNOPENED_PACKS",
        et = "TOGGLE_PACK_VISIBILITY", ht = "TOGGLE_RAFFLE_TICKETS", Le = "SET_CURRENT_OPEN_CHEST",
        Ie = "SET_OPEN_CHEST_VIDEO_ID", B = "TOGGLE_OPEN_CHEST_VIDEO_FINISHED", Q = "PARTIAL_RESET_TEMPLE",
        le = "TOGGLE_OPEN_PACK_VIDEO_LOADING", Ee = "TOGGLE_OPEN_PACK_VIDEO_PLAYING",
        tt = "TOGGLE_OPEN_CHEST_VIDEO_PLAYING", bt = k => ({type: Xe, payload: k}), At = k => ({type: Ie, payload: k}),
        Pe = k => ({type: B, payload: k}), $e = k => ({type: le, payload: k}), ee = k => ({type: tt, payload: k}),
        ne = k => ({type: Ee, payload: k}), _e = {
            flippedCards: {},
            openPackVideoId: "",
            openChestVideoId: "",
            openChestVideoComplete: !1,
            openChestVideoPlaying: !1,
            openPackVideoVisible: !1,
            openPackVideoLoading: !0,
            openPackVideoPlaying: !1,
            firstPackCardsVisible: !1,
            packImageVisible: !1,
            currentUnOpenedPacks: [],
            currentOpenPack: {},
            currentOpenChest: {},
            raffleTicketsDisplayVisible: !1
        }, F = (0, W.MT)((k = _e, {type: V, payload: p}) => {
            switch (V) {
                case fe:
                    return Object.assign(Object.assign({}, k), {openPackVideoId: p});
                case ge:
                    return Object.assign(Object.assign({}, k), {firstPackCardsVisible: "boolean" == typeof p ? p : !k.firstPackCardsVisible});
                case ie:
                    return Object.assign(Object.assign({}, k), {openPackVideoVisible: "boolean" == typeof p ? p : !k.openPackVideoVisible});
                case J:
                    return Object.assign(Object.assign({}, k), {flippedCards: Object.assign(Object.assign({}, k.flippedCards), {[p]: !k.flippedCards[p]})});
                case et:
                    return Object.assign(Object.assign({}, k), {packImageVisible: "boolean" == typeof p ? p : !k.packImageVisible});
                case Xe:
                    return Object.assign(Object.assign({}, k), {
                        currentUnOpenedPacks: p,
                        currentOpenPack: Object.assign(Object.assign({}, p[0]), {id: (0, he.v4)()})
                    });
                case ht:
                    return Object.assign(Object.assign({}, k), {raffleTicketsDisplayVisible: !k.raffleTicketsDisplayVisible});
                case Le:
                    return Object.assign(Object.assign({}, k), {currentOpenChest: p});
                case Ie:
                    return Object.assign(Object.assign({}, k), {openChestVideoId: p, openChestVideoComplete: !1});
                case B:
                    return Object.assign(Object.assign({}, k), {openChestVideoComplete: "boolean" == typeof p ? p : !k.openChestVideoComplete});
                case tt:
                    return Object.assign(Object.assign({}, k), {openChestVideoPlaying: "boolean" == typeof p ? p : !k.openChestVideoPlaying});
                case le:
                    return Object.assign(Object.assign({}, k), {openPackVideoLoading: "boolean" == typeof p ? p : !k.openPackVideoLoading});
                case Ee:
                    return Object.assign(Object.assign({}, k), {openPackVideoPlaying: "boolean" == typeof p ? p : !k.openPackVideoPlaying});
                case Q:
                    return Object.assign(Object.assign({}, _e), {packImageVisible: !0});
                case Ue:
                    return Object.assign({}, _e);
                default:
                    return k
            }
        }, _e), c = {
            "pack-open-videos-4k mortal--neutral--epic": "695967603",
            "pack-open-videos-4k mortal--neutral--legendary": "695967723",
            "pack-open-videos-4k mortal--neutral--rare": "695967808",
            "pack-open-videos-4k mortal--neutral--shiny-legendary": "695967882",
            "pack-open-videos-4k order--neutral--shiny-legendary": "548697244",
            "pack-open-videos-4k order--neutral--legendary": "548697153",
            "pack-open-videos-4k order--neutral--epic": "548697068",
            "pack-open-videos-4k order--neutral--rare": "548694554",
            "pack-open-videos-4k trial--order--rarity": "463265598",
            "pack-open-videos-4k trial--neutral--shiny-legendary": "463265542",
            "pack-open-videos-4k trial--neutral--rare": "463265469",
            "pack-open-videos-4k trial--neutral--legendary": "463265417",
            "pack-open-videos-4k trial--neutral--epic": "463265363",
            "pack-open-videos-4k trial--neutral--common": "463265311",
            "pack-open-videos-4k trial--disorder--rarity": "463265255",
            "pack-open-videos-4k legacy--core--godneutral--rare": "463265203",
            "pack-open-videos-4k genesis--neutral--shiny-legendary": "463265120",
            "pack-open-videos-4k genesis--neutral--rare": "463265057",
            "pack-open-videos-4k genesis--neutral--legendary": "463264991",
            "pack-open-videos-4k genesis--neutral--epic": "463264938",
            "pack-open-videos-4k core--war--rare": "463264899",
            "pack-open-videos-4k core--neutral--rare": "463264821",
            "pack-open-videos-4k core--neutral--legendary": "463264772",
            "pack-open-videos-4k core--neutral--epic": "463264729",
            "pack-open-videos-4k core--neutral--common": "463264662",
            "pack-open-videos-4k core--nature--rare": "463264605",
            "pack-open-videos-4k core--magic--rare": "463264440",
            "pack-open-videos-4k core--light--rare": "463264367",
            "pack-open-videos-4k core--deception--rare": "463264293",
            "pack-open-videos-4k core--death--rare": "463264255",
            "pack-open-videos-720p core--death--rare": "670981848",
            "pack-open-videos-720p core--deception--rare": "670981876",
            "pack-open-videos-720p core--light--rare": "670981908",
            "pack-open-videos-720p core--magic--rare": "670981942",
            "pack-open-videos-720p core--nature--rare": "670981975",
            "pack-open-videos-720p core--neutral--common": "670982011",
            "pack-open-videos-720p core--neutral--epic": "670982040",
            "pack-open-videos-720p core--neutral--legendary": "670982074",
            "pack-open-videos-720p core--neutral--rare": "670982092",
            "pack-open-videos-720p core--war--rare": "670982121",
            "pack-open-videos-720p genesis--neutral--epic": "668081903",
            "pack-open-videos-720p genesis--neutral--legendary": "668081947",
            "pack-open-videos-720p genesis--neutral--rare": "668081980",
            "pack-open-videos-720p genesis--neutral--shiny-legendary": "668082010",
            "pack-open-videos-720p legacy--core--godneutral--rare": "668082037",
            "pack-open-videos-720p mortal--neutral--epic": "695994472",
            "pack-open-videos-720p mortal--neutral--legendary": "695994505",
            "pack-open-videos-720p mortal--neutral--rare": "695994536",
            "pack-open-videos-720p mortal--neutral--shiny-legendary": "695994567",
            "pack-open-videos-720p order--neutral--epic": "668082077",
            "pack-open-videos-720p order--neutral--legendary": "668082105",
            "pack-open-videos-720p order--neutral--rare": "668082141",
            "pack-open-videos-720p order--neutral--shiny-legendary": "668082169",
            "pack-open-videos-720p trial--disorder--rarity": "670985556",
            "pack-open-videos-720p trial--neutral--common": "668082239",
            "pack-open-videos-720p trial--neutral--epic": "668082280",
            "pack-open-videos-720p trial--neutral--legendary": "668082333",
            "pack-open-videos-720p trial--neutral--rare": "668082372",
            "pack-open-videos-720p trial--neutral--shiny-legendary": "668082399",
            "pack-open-videos-720p trial--order--rarity": "668082441",
            "chest-videos-open order--neutral--rare": "492326155",
            "chest-videos-open order--neutral--legendary": "492325362",
            "chest-videos-open trial--neutral--rare": "405676839",
            "chest-videos-open trial--neutral--legendary": "405676811",
            "chest-videos-open genesis--neutral--rare": "405676790",
            "chest-videos-open genesis--neutral--legendary": "405676766"
        };
    var _ = s(80102), E = s(26532), te = s(61462);
    const we = xe.iv`
  ${(0, E.asCssProp)((0, E.setBoxSizing)())}

  :host {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ${(0, E.asCssProp)((0, te.userSelect)("none"))};
  }

  :host(.visible) {
    ${(0, E.asCssProp)((0, te.userSelect)("auto"))};
  }

  gu-controllable-vimeo-embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${(0, E.asCssProp)(Z.uifx.userSelect("none"))};
  }

  @keyframes fadeAndSlideUp {
    0% {
      opacity: 0;
      transform: translateY(5%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  .chestOpenVideo {
    background: linear-gradient(
      to bottom,
      ${(0, E.asCssProp)(Z.colors.gunmetal[500])} 0%,
      ${(0, E.asCssProp)(Z.colors.gunmetal[700])} 100%
    );
    animation: fadeAndSlideUp 0.5s ease-in-out;
    ${(0, E.asCssProp)(Z.uifx.userSelect("auto"))};
    z-index: 2;
  }

  .chestOpenVideo--aboveAllLayers {
    z-index: 3;
  }

  .unOpenedChestsListing {
    position: absolute;
    top: calc(var(--ch) * 5);
    right: calc(var(--ch) * 5);
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  .unOpenedChestsListing__chest {
    position: relative;
    padding: 0;
    padding-right: calc(var(--cw) * 6);
    padding-left: calc(var(--cw) * 1);
    margin-bottom: calc(var(--ch) * 5);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${(0, E.asCssProp)(Z.colors.dark[900])};
    cursor: pointer;
    opacity: 0;
    border: 1px solid ${(0, E.asCssProp)(Z.colors.dark[500])};
    ${(0, E.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .unOpenedChestsListing__chest:active {
    border: 1px solid ${(0, E.asCssProp)(Z.colors.light[100])} !important;
    background: ${(0, E.asCssProp)(Z.colors.light[100])} !important;
  }

  .unOpenedChestsListing__chest:active .unOpenedChestsListing__chest__openNowText {
    ${(0, E.asCssProp)(Z.gradients.textFill(Z.colors.dark[900]))};
  }

  .unOpenedChestsListing__chest:active .unOpenedChestsListing__chest__count {
    color: ${(0, E.asCssProp)(Z.colors.dark[900])};
    border-color: ${(0, E.asCssProp)(Z.colors.dark[900])};
  }

  .unOpenedChestsListing__chest:hover {
    border: 1px solid ${(0, E.asCssProp)(Z.colors.gunmetal[700])};
    background: ${(0, E.asCssProp)(Z.colors.gunmetal[700])};
  }

  .unOpenedChestsListing__chest:nth-child(1) {
    transition-delay: ${0}ms;
  }
  .unOpenedChestsListing__chest:nth-child(2) {
    transition-delay: ${200}ms;
  }
  .unOpenedChestsListing__chest:nth-child(3) {
    transition-delay: ${400}ms;
  }
  .unOpenedChestsListing__chest:nth-child(4) {
    transition-delay: ${600}ms;
  }

  .unOpenedChestsListing--visible .unOpenedChestsListing__chest {
    opacity: 1;
  }

  .unOpenedChestsListing__chest__picture {
    display: block;
    width: calc(var(--cw) * 7.5);
    height: calc(var(--cw) * 7.5 * 0.9183);
    /* chest image aspect ratio: 91.83%; */
    position: absolute;
    right: calc(var(--cw) * -1);
    top: 50%;
    transform: scaleX(-1) translateY(-50%);
  }

  .unOpenedChestsListing__chest__picture__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .unOpenedChestsListing__chest__openNowText {
    padding: calc(var(--ch) * 2) 0;
  }

  .unOpenedChestsListing__chest__count {
    margin: 0 calc(var(--cw) * 1);
    padding: calc(var(--ch) * 0.6) calc(var(--cw) * 0.6);
    border: 1px solid ${(0, E.asCssProp)(Z.colors.gold[500])};
  }

  .chestsCta {
    position: absolute;
    left: 8%;
    bottom: 7%;
    min-width: ${(0, E.asCssProp)((0, _.gridUnits)(50))};
    opacity: 0;
    ${(0, E.asCssProp)(Z.uifx.userSelect("none"))};
    ${(0, E.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .chestsCta--visible {
    ${(0, E.asCssProp)(Z.uifx.userSelect("auto"))};
    opacity: 1;
    z-index: 2;
  }
`;
    customElements.define("gu-temple-chest-layer", (0, oe.x1)({
        renderer: function mt({unOpenedChests: k = [], volume: V}) {
            const p = (0, de.sO)(null), R = (0, oe.I0)(F), {
                currentOpenChest: q,
                openChestVideoId: f,
                openChestVideoPlaying: D,
                openChestVideoComplete: m,
                openPackVideoVisible: L
            } = (0, oe.v9)({
                store: F,
                selector: re => ({
                    openChestVideoPlaying: re.openChestVideoPlaying,
                    openPackVideoVisible: re.openPackVideoVisible,
                    currentOpenChest: re.currentOpenChest,
                    openChestVideoId: re.openChestVideoId,
                    openChestVideoComplete: re.openChestVideoComplete
                })
            });
            (0, de.d4)(() => {
                if (this.isIos = H.I5.isIos(), !q.set) return;
                let re = c[`chest-videos-open ${q.set}--neutral--${q.rarity}`];
                re || (re = c["chest-videos-open order--neutral--rare"]), R(At(re))
            }, [q]), (0, de.d4)(() => {
                L ? this.classList.remove("visible") : this.classList.add("visible")
            }, [L]);
            return xe.dy`
    ${f ? xe.dy`
          <gu-controllable-vimeo-embed
            class=${(0, be.$)({chestOpenVideo: !0, "chestOpenVideo--aboveAllLayers": D})}
            autoPlay
            videoId=${f}
            pauseOnEndFrame
            @onVideoEnd=${() => {
                R(Pe(!0)), R(ee(!1)), this.dispatchEvent(new CustomEvent("onChestOpened", {
                    detail: Object.assign({}, q),
                    bubbles: !0,
                    composed: !0
                }))
            }}
            ?domRef=${(0, Ce.Q)(p)}
            ?muted=${this.isIos}
            .volume=${V}
          ></gu-controllable-vimeo-embed>
        ` : null}
    ${k.length ? xe.dy`
          <div
            class=${(0, be.$)({unOpenedChestsListing: !0, "unOpenedChestsListing--visible": !L})}
          >
            ${k.reduce((re, Se) => {
                let De;
                return re.find((je, nt) => {
                    const Ke = Se.set === je.set && Se.rarity === je.rarity;
                    return Ke && (De = nt), Ke
                }) ? re[De].quantityCount += 1 : re.push(Object.assign(Object.assign({}, Se), {quantityCount: 1})), re
            }, []).map(re => {
                const Se = `${re.set}--neutral--${re.rarity}`;
                return xe.dy`
                  <div class="unOpenedChestsListing__chest" @click=${() => (re => {
                    R(ee(!0)), re.rarity === q.rarity && re.set === q.set ? (R(Pe(!1)), p.current.playVideo(0)) : R((k => ({
                        type: Le,
                        payload: k
                    }))(re))
                })(re)}>
                    <picture class="unOpenedChestsListing__chest__picture">
                      <source
                        type="image/webp"
                        srcset="
                          //images.godsunchained.com/transparent-chest-images--open/434/${Se}.webp 434w,
                          //images.godsunchained.com/transparent-chest-images--open/256/${Se}.webp 256w,
                          //images.godsunchained.com/transparent-chest-images--open/128/${Se}.webp 128w
                        "
                      />
                      <source
                        type="image/png"
                        srcset="
                          //images.godsunchained.com/transparent-chest-images--open/434/${Se}.png 434w,
                          //images.godsunchained.com/transparent-chest-images--open/256/${Se}.png 256w,
                          //images.godsunchained.com/transparent-chest-images--open/128/${Se}.png 128w
                        "
                      />
                      <img
                        src="//images.godsunchained.com/transparent-chest-images--open/128/${Se}.png"
                        alt="chest image"
                        class="unOpenedChestsListing__chest__picture__img"
                      />
                    </picture>
                    <gu-heading-text
                      fillGradient=${Z.gradients.gold.simple()}
                      size="3x-small"
                      .responsiveSize=${[{size: "2x-small", breakpoint: "small"}]}
                      class="unOpenedChestsListing__chest__openNowText"
                    >
                      Open 1 Now
                    </gu-heading-text>
                    <gu-paragraph-text
                      kind="small"
                      class="unOpenedChestsListing__chest__count"
                      fillColor=${Z.colors.gold[500]}
                      fontWeight="bold"
                    >
                      ${re.quantityCount}x
                    </gu-paragraph-text>
                  </div>
                `
            })}
          </div>
        ` : null}

    <gu-primary-hex-button
      size="large"
      type="primary"
      class=${(0, be.$)({chestsCta: !0, "chestsCta--visible": m})}
      @click=${() => {
                R(Pe(!1)), R(At(null))
            }}
    >
      Back to Packs
    </gu-primary-hex-button>
  `
        }, props: {properties: {unOpenedChests: {type: Array}, volume: {type: Number}}, styles: we}
    }));
    const It = xe.iv`
  :host {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: ${(0, E.asCssProp)(Z.colors.gunmetal[900])};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.94;
  }

  .icon {
    font-size: ${(0, E.asCssProp)((0, _.gridUnits)(20))};
  }

  .text {
    max-width: 350px;
  }

  @media screen and (min-width: ${(0, E.asCssProp)(Z.breakpoints.breakpointSizeMapping.small)}) {
    :host {
      display: none;
    }
  }
`;
    customElements.define("gu-temple-overlay-layer", (0, oe.x1)({
        renderer: function Qe() {
            return xe.dy`
    <gu-icon iconLigature="alert_triangle" align="center" fillColor=${Z.colors.god.war.secondary} class="icon"></gu-icon>
    <gu-vertical-space top="x-large">
      <gu-paragraph-text class="text" align="center" fillColor=${Z.colors.light[100]}>
        <slot></slot>
      </gu-paragraph-text>
    </gu-vertical-space>
  `
        }, props: {properties: {message: {type: String}}, styles: It}
    }));
    var lt = s(49749), ps = s(46461), Pt = s(77518);
    const ze = "/assets/audio/temple", gs = {
        diamond__common: `${ze}/temple_reveal_diamond_common`,
        diamond__rare: `${ze}/temple_reveal_diamond_rare`,
        diamond__epic: `${ze}/temple_reveal_diamond_epic`,
        diamond__legendary: `${ze}/temple_reveal_diamond_legendary`,
        gold__common: `${ze}/temple_reveal_gold_common`,
        gold__rare: `${ze}/temple_reveal_gold_rare`,
        gold__epic: `${ze}/temple_reveal_gold_epic`,
        gold__legendary: `${ze}/temple_reveal_gold_legendary`,
        shadow__common: `${ze}/temple_reveal_shadow_common`,
        shadow__rare: `${ze}/temple_reveal_shadow_rare`,
        shadow__epic: `${ze}/temple_reveal_shadow_epic`,
        shadow__legendary: `${ze}/temple_reveal_shadow_legendary`,
        meteorite__common: `${ze}/temple_reveal_meteorite_common`,
        meteorite__rare: `${ze}/temple_reveal_meteorite_rare`,
        meteorite__epic: `${ze}/temple_reveal_meteorite_epic`,
        meteorite__legendary: `${ze}/temple_reveal_meteorite_legendary`,
        plain__common: `${ze}/temple_reveal_plain_common`,
        plain__rare: `${ze}/temple_reveal_plain_rare`,
        plain__epic: `${ze}/temple_reveal_plain_epic`,
        plain__legendary: `${ze}/temple_reveal_plain_legendary`
    }, hs = xe.iv`
  ${(0, E.asCssProp)((0, E.setBoxSizing)())}

  :host {
    position: absolute;
    width: 100%;
    /* Add some padding so that scrollbars don't flicker while things are being
    rotate transformed... */
    padding: calc(var(--ch) * 5) calc(var(--cw) * 5) calc(var(--ch) * 15);
    top: calc(var(--ch) * 5);
    left: 0;
    overflow-x: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
  }

  :host(.visible) {
    z-index: 1;
  }

  .raffleTicketsArea {
    min-width: 155px;
    min-height: 88px;
    width: calc(var(--cw) * 18);
    height: calc(var(--ch) * 15);
    margin-right: calc(var(--cw) * 2);
    opacity: 0;
    display: flex;
    position: relative;
    cursor: pointer;
    ${(0, E.asCssProp)(Z.animation.slowTransition("height"))};
    transition-property: height, transform;
  }

  .raffleTicketsArea--opened {
    height: calc(var(--ch) * (15 + 17.3));
  }

  .raffleTicketsArea__dropdown {
    position: absolute;
    background: ${(0, E.asCssProp)(Z.gradients.gold.simple("bottom"))};
    padding: 3px;
    width: 68%;
    height: calc(var(--ch) * 17.3);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    ${(0, E.asCssProp)((0, E.drawBottomHexShapePolygonMask)("calc(var(--ch) * 4)"))};
    ${(0, E.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .raffleTicketsArea--opened .raffleTicketsArea__dropdown {
    opacity: 1;
  }

  .raffleTicketsArea__dropdown__inner {
    width: 100%;
    height: 100%;
    background: ${(0, E.asCssProp)(Z.colors.gunmetal[900])};
    ${(0, E.asCssProp)((0, E.drawBottomHexShapePolygonMask)("calc(var(--ch) * 3.9)"))};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: calc(var(--ch) * 4) 0 calc(var(--ch) * 6);
  }

  .raffleTicketsArea__dropdown__inner__label {
    font-size: calc(var(--cw) * 1);
  }

  /* @TODO: Due to the use of !important inside of our gu-heading-text control...
  this one little piece of text cannot use the standard control.
  Once we have done away with all global styles, this can be once again made into a
  standard heading text control */
  .raffleTicketsArea__dropdown__inner__value {
    font-family: ${(0, E.asCssProp)(Z.typography.headingFont)};
    font-size: calc(var(--cw) * 2.2);
    line-height: 1;
    margin: calc(var(--ch) * 0.5) 0 0 0;
  }

  .raffleTicketsArea__ticketImage {
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
  }

  .raffleTicketsArea__ticketImage__img {
    display: block;
    width: 100%;
  }

  .perspectiveWrapper {
    position: relative;
    width: calc(var(--cw) * 16);
    perspective: calc(var(--cw) * 50);
    pointer-events: none;
  }

  .perspectiveWrapper:last-child {
    margin: 0;
  }

  .cardWrapper {
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .cardWrapper__frontFace,
  .cardWrapper__rearFace {
    ${(0, E.asCssProp)((0, te.userSelect)("none"))};
    transform: rotateX(0deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  /*
  @TEMP CODE DEBUG:
  (used to quickly style the cards and tickets GUI)
  ---------------------------------------- *
  .unlockedPackItems {
    opacity: 1;
  }
  .raffleTicketsArea,
  .cardWrapper {
    opacity: 1;
  }
  .cardWrapper__frontFace,
  .cardWrapper__rearFace {
    backface-visibility: visible;
  }
  /* -------------------------------------------- */

  .cardWrapper__frontFace {
    width: 100%;
    position: relative;
  }

  .cardWrapper__frontFace__bloom {
    position: absolute;
    right: 8%;
    width: 76%;
    top: 9%;
    height: 88%;
    border-radius: calc(var(--cw) * 3);
    opacity: 0;
    transform: scale(0.7);
    filter: brightness(1);
  }

  .cardWrapper__frontFace__bloom--rare {
    background: ${(0, E.asCssProp)(Z.colors.rarity.rare)};
    box-shadow: 0 0 calc(var(--ch) * 3) calc(var(--ch) * 3) ${(0, E.asCssProp)(Z.colors.rarity.rare)};
  }
  .cardWrapper__frontFace__bloom--epic {
    background: ${(0, E.asCssProp)(Z.colors.rarity.epic)};
    box-shadow: 0 0 calc(var(--ch) * 3) calc(var(--ch) * 3) ${(0, E.asCssProp)(Z.colors.rarity.epic)};
  }
  .cardWrapper__frontFace__bloom--legendary {
    background: ${(0, E.asCssProp)(Z.colors.rarity.legendary)};
    box-shadow: 0 0 calc(var(--ch) * 3) calc(var(--ch) * 3) ${(0, E.asCssProp)(Z.colors.rarity.legendary)};
  }
  .cardWrapper__frontFace__bloom--mythic {
    background: ${(0, E.asCssProp)(Z.colors.rarity.mythic)};
    box-shadow: 0 0 calc(var(--ch) * 3) calc(var(--ch) * 3) ${(0, E.asCssProp)(Z.colors.rarity.mythic)};
  }

  .cardWrapper__frontFace__scarcity {
    padding-left: calc(var(--cw) * 1);
    position: absolute;
    width: 100%;
    left: 0;
    top: calc(100% + (var(--ch) * 1.5));
  }

  .cardWrapper__frontFace__card {
    position: relative;
  }

  .cardWrapper__rearFace {
    display: none;
  }

  .cardWrapper__rearFace__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
 /**
 * Temple pack and cards
 */
.text-capitalize {
    text-transform: capitalize;
}

.mt-4 {
    margin-top: 1.5rem !important;
}

.container {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -0.5);
    margin-left: calc(var(--bs-gutter-x) * -0.5);
}

.grid-row {
    display: grid;
    grid-template-rows: 40px auto;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 8px;
    column-gap: 10px;
    padding: 8px;
}

.grid-row h5 {
    grid-column: 1/-1;
    line-height: 40px;
    margin: 0;
}

.grid-col-all {
    grid-column: 1 / -1;
}

.pack.common {
    border-right: solid 15px var(--gu-common);
    border-top: solid 2px var(--gu-common);
}

.pack.rare {
    border-right: solid 15px var(--gu-rare);
    border-top: solid 2px var(--gu-rare);
}

.pack.epic {
    border-right: solid 15px var(--gu-epic);
    border-top: solid 3px var(--gu-epic);
}

.pack.legendary {
    border-right: solid 15px var(--gu-legendary);
    border-top: solid 2px var(--gu-legendary);
}

.d-flex {
    display: flex !important;
}

.justify-content-between {
    justify-content: space-between !important;
}

.align-items-center {
    align-items: center;
}

.d-flex h3 {
    margin: 0;
}

.gu-card {
    border-radius: 8px;
    padding: 8px 4px;
}

.pack {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background: rgba(0,0,0,0.85);
}

/**
 * Rare effects
 */
.gu-card-rare.shine-1 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-common), 0px 0px 5px 0px var(--gu-rare);
}

.gu-card-rare.shine-2 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-legendary), 0px 0px 5px 0px var(--gu-rare);
}

.gu-card-rare.shine-3 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-epic), 0px 0px 5px 0px var(--gu-rare);
}

/**
 * Epic effects
 */
.gu-card-epic.shine-1 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-common), 0px 0px 5px 0px var(--gu-epic);
}

.gu-card-epic.shine-2 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-legendary), 0px 0px 5px 0px var(--gu-epic);
}

.gu-card-epic.shine-3 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-epic), 0px 0px 5px 0px var(--gu-epic);
}

/**
 * Legendary effects
 */
.gu-card-legendary.shine-1 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-common), 0px 0px 5px 0px var(--gu-legendary);
}

.gu-card-legendary.shine-2 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-legendary), 0px 0px 5px 0px var(--gu-legendary);
}

.gu-card-legendary.shine-3 {
    box-shadow: inset 0px 0px 120px -30px var(--gu-epic), 0px 0px 5px 0px var(--gu-legendary);
}

.gu-card-rare {
    box-shadow: 0px 0px 5px 0px var(--gu-rare);
    border-bottom: solid 2px var(--gu-rare);
}

.gu-card-epic {
    box-shadow: 0px 0px 5px 0px var(--gu-epic);
    border-bottom: solid 2px var(--gu-epic);
}

.gu-card-legendary {
    box-shadow: 0px 0px 5px 0px var(--gu-legendary);
    border-bottom: solid 2px var(--gu-legendary);
}
`, Lt = k => Pt.PW[k];
    customElements.define("gu-temple-pack-card-listing", (0, oe.x1)({
        renderer: function no({}) {
            const V = (0, oe.I0)(F), [p, R] = (0, de.eJ)([]), {
                currentOpenPack: q,
                firstPackCardsVisible: f,
                raffleTicketsDisplayVisible: D,
                flippedCards: m
            } = (0, oe.v9)({
                store: F,
                selector: re => ({
                    flippedCards: re.flippedCards,
                    raffleTicketsDisplayVisible: re.raffleTicketsDisplayVisible,
                    firstPackCardsVisible: re.firstPackCardsVisible,
                    currentOpenPack: re.currentOpenPack
                })
            });
            (0, de.d4)(() => {
                f ? this.classList.add("visible") : this.classList.remove("visible"), lt.p8.to(this.shadowRoot.children, {
                    duration: f ? .3 : 0,
                    opacity: f ? 1 : 0,
                    stagger: f ? .15 : 0,
                    onComplete: () => {
                        f || L()
                    }
                })
            }, [f]), (0, de.d4)(() => {
                !q.cards || R([...q.cards.map(re => {
                    const {quality: Se, rarity: De} = re, Ge = gs[`${Lt(Se - 1)}__${De}`];
                    return Ge ? new ps.Howl({src: [`${Ge}.ogg`, `${Ge}.mp3`]}) : {
                        play: () => {
                        }, id: `${Lt(Se)}__${De}`
                    }
                })])
            }, [q]), (0, de.d4)(() => () => L(), []);
            const L = () => {
                lt.p8.set([this.shadowRoot.querySelectorAll(".cardWrapper"), this.shadowRoot.children], {clearProps: "all"})
            }, j = re => {
                V({type: J, payload: re});
                const Se = this.shadowRoot.querySelectorAll(".perspectiveWrapper")[re].querySelector(".cardWrapper"),
                    De = Se.querySelector(".cardWrapper__frontFace__bloom"), Ge = !!m[re];
                Ge || p[re].play(), lt.p8.killTweensOf([De, Se]), lt.p8.set([De], {clearProps: "all"});
                const je = lt.p8.timeline({paused: !0}),
                    nt = lt.p8.timeline({repeat: -1, repeatDelay: 1, delay: 1, yoyo: !0, paused: !0});
                nt.to(De, {duration: 1.2, filter: "brightness(1.5)"}).to(De, {
                    duration: 1.2,
                    filter: "brightness(1)"
                }), je.to(Se, {duration: .4, rotateY: Ge ? 0 : 180, ease: "power2.inOut"}).to(De, {
                    duration: .7,
                    opacity: 1,
                    scale: 1.04,
                    ease: "power2.inOut"
                }, "-=0.2").to(De, {
                    duration: .4,
                    opacity: .78,
                    scale: .88,
                    ease: "power2.inOut"
                }).add(nt.play(), "loopingBloom"), je.play()
            };
            return xe.dy`
    ${q.raffleTickets ? xe.dy`
          <div
            class=${(0, be.$)({raffleTicketsArea: !0, "raffleTicketsArea--opened": D})}
          >
            <div
              class=${(0, be.$)({raffleTicketsArea__dropdown: !0})}
            >
              <div class="raffleTicketsArea__dropdown__inner">
                <gu-paragraph-text
                  kind="tag"
                  align="center"
                  class="raffleTicketsArea__dropdown__inner__label"
                  fillGradient=${Z.gradients.gold.simple()}
                >
                  Draw Tickets
                </gu-paragraph-text>

                <gu-paragraph-text
                  kind="tag"
                  align="center"
                  class="raffleTicketsArea__dropdown__inner__label"
                  fillGradient=${Z.gradients.gold.simple()}
                >
                  Received
                </gu-paragraph-text>

                <h3 class="raffleTicketsArea__dropdown__inner__value">${q.raffleTickets}</h3>
              </div>
            </div>
            <picture class="raffleTicketsArea__ticketImage" @click=${() => V({type: ht})}>
              <source
                srcset="
                  /assets/images/collectables-art/collectables-art--raffle-ticket@3x.webp 687w,
                  /assets/images/collectables-art/collectables-art--raffle-ticket@2x.webp 458w,
                  /assets/images/collectables-art/collectables-art--raffle-ticket@1x.webp 229w
                "
                type="image/webp"
              />
              <source
                srcset="
                  /assets/images/collectables-art/collectables-art--raffle-ticket@3x.png 687w,
                  /assets/images/collectables-art/collectables-art--raffle-ticket@2x.png 458w,
                  /assets/images/collectables-art/collectables-art--raffle-ticket@1x.png 229w
                "
                type="image/png"
              />
              <img
                src="/assets/images/collectables-art/collectables-art--raffle-ticket@1x.png"
                alt=""
                class="raffleTicketsArea__ticketImage__img"
              />
            </picture>
          </div>
        ` : null}
    ${q.cards ? xe.dy`
<div class="container">
    <div class="row grid-row pack mt-4 ${q.rarity}">
        <div class="d-flex grid-col-all justify-content-between align-items-center">
            <h3 class="text-capitalize">${q.set}</h3>
            <h3 class="text-capitalize">${q.rarity}</h3>
        </div>
        ${q.cards ? q.cards.map((re, Se) => xe.dy`
<div class="perspectiveWrapper ${q.set === 'core' ? 'show-card' : ''}">
  <div class="cardWrapper">
    <div class="cardWrapper__frontFace">
      <div class="gu-card gu-card-${re.rarity} shine-${re.quality}">
           <gu-card-picture
            protoId=${re.proto}
            quality=${re.quality}
           ></gu-card-picture>
      </div>
      <picture class="cardWrapper__rearFace">
          <source
            type="image/webp"
            srcset="
              //images.godsunchained.com/rear-card-face-images/1024/regular-gu-rear-card-face.webp 1024w,
              //images.godsunchained.com/rear-card-face-images/720/regular-gu-rear-card-face.webp   720w,
              //images.godsunchained.com/rear-card-face-images/512/regular-gu-rear-card-face.webp   512w,
              //images.godsunchained.com/rear-card-face-images/256/regular-gu-rear-card-face.webp   256w
            "
          />
          <source
            type="image/png"
            srcset="
              //images.godsunchained.com/rear-card-face-images/1024/regular-gu-rear-card-face.png 1024w,
              //images.godsunchained.com/rear-card-face-images/720/regular-gu-rear-card-face.png   720w,
              //images.godsunchained.com/rear-card-face-images/512/regular-gu-rear-card-face.png   512w,
              //images.godsunchained.com/rear-card-face-images/256/regular-gu-rear-card-face.png   256w
            "
          />
          <img
            src="//images.godsunchained.com/rear-card-face-images/256/regular-gu-rear-card-face.png"
            alt="GodsUnchained rear card face image"
            class="cardWrapper__rearFace__img"
          />
      </picture>
    </div>
  </div>
</div>
        `) : null}
    </div>
</div>
    ` : null}
  `
        }, props: {properties: {volume: {type: Number}}, styles: hs}
    }));
    var _s = s(92436), fs = s(71459), Ds = s.n(fs), es = s(63082), Zt = s.n(es), ts = s(65171);
    const vs = xe.iv`
  ${(0, E.asCssProp)((0, E.setBoxSizing)())}

  :host {
    height: calc(100vh - var(--headerAreaHeight));
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    background-image: url(https://images.godsunchained.com/art2/1920/1442.jpg);
    background-size: cover;
    background-position: center;
    background-blend-mode: difference;
    background-color: var(--gu-blue-dark);
  }

  .videoAspectRatio {
    margin: auto;
    position: relative;
    padding-bottom: 56.25%;
    width: 100%;
  }
  
  .videoAspectRatio__img {
    display: none;
  }

  @media screen and (min-aspect-ratio: 1282/800) {
    .videoAspectRatio {
      height: 100%;
      width: auto;
      padding-bottom: 0;
    }
    .videoAspectRatio__img {
      display: block;
      width: auto;
      height: 100%;
    }
  }

  gu-controllable-vimeo-embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${(0, E.asCssProp)(Z.uifx.userSelect("none"))};
  }

  .packOpenVideo {
    ${(0, E.asCssProp)(Z.animation.standardTransition("opacity"))};
  }

  .packOpenVideo--hidden {
    opacity: 0;
  }

  /*

    @NOTE: position the drag target area roughly above the podium center

  */
  .targetDropArea {
    position: absolute;
    top: calc(var(--ch) * 32.8);
    left: calc(var(--cw) * 48.5);
    width: calc(var(--ch) * 24.5);
    height: calc(var(--ch) * 31);
  }

  /*

    @NOTE: position the draggable pack, roughly above the left podium stand

  */

  .draggablePackHitzone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .draggablePack {
    position: absolute;
    bottom: calc(var(--ch) * 10);
    left: calc(var(--cw) * 8.7);
    width: calc(var(--ch) * 34);
    transform: rotate(-4deg);
    opacity: 0;
    cursor: pointer;
    ${(0, E.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .draggablePack--touchable {
    ${(0, E.asCssProp)((0, te.userSelect)("auto"))};
  }

  .draggablePack--visible {
    opacity: 1;
  }

  .draggablePack--disabled {
    opacity: 0;
  }

  .draggablePack__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 calc(var(--ch) * 5) rgba(${(0, E.asCssProp)((0, ts.hexToCssRgbString)(Z.colors.black))}, 0.6));
  }

  .helpText {
    position: absolute;
    top: calc(var(--ch) * 67.5);
    left: calc(var(--cw) * 41);
    width: calc(var(--cw) * 30);
    text-align: center;
  }

  .unlockedPackItems {
    position: absolute;
    width: 100%;
    /* Add some padding so that scrollbars dont flick on while things are being
    rotate transformed... */
    padding: calc(var(--ch) * 5) calc(var(--cw) * 5) calc(var(--ch) * 15);
    top: calc(var(--ch) * 5);
    left: 0;
    overflow-x: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    opacity: 0;
  }

  .unlockedPackItems--visible {
    opacity: 1;
    z-index: 1;
  }

  .unlockedPackItems__raffleTicketsArea {
    min-width: 155px;
    min-height: 88px;
    width: calc(var(--cw) * 18);
    height: calc(var(--ch) * 15);
    margin-right: calc(var(--cw) * 2);
    opacity: 0;
    display: flex;
    position: relative;
    ${(0, E.asCssProp)((0, te.userSelect)("none"))};
    ${(0, E.asCssProp)(Z.animation.slowTransition("height"))};
    transition-property: height, transform;
  }

  .unlockedPackItems__raffleTicketsArea--opened {
    height: calc(var(--ch) * (15 + 17.3));
  }

  .unlockedPackItems__raffleTicketsArea__dropdown {
    position: absolute;
    background: ${(0, E.asCssProp)(Z.gradients.gold.simple("bottom"))};
    padding: 3px;
    width: 68%;
    height: calc(var(--ch) * 17.3);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    ${(0, E.asCssProp)((0, E.drawBottomHexShapePolygonMask)("calc(var(--ch) * 4)"))};
    ${(0, E.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .unlockedPackItems__raffleTicketsArea--opened .unlockedPackItems__raffleTicketsArea__dropdown {
    opacity: 1;
  }

  .unlockedPackItems__raffleTicketsArea__dropdown__inner {
    width: 100%;
    height: 100%;
    background: ${(0, E.asCssProp)(Z.colors.gunmetal[900])};
    ${(0, E.asCssProp)((0, E.drawBottomHexShapePolygonMask)("calc(var(--ch) * 3.9)"))};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: calc(var(--ch) * 4) 0 calc(var(--ch) * 6);
  }

  .unlockedPackItems__raffleTicketsArea__dropdown__inner__label {
    font-size: calc(var(--cw) * 1);
  }

  /* @TODO: Due to the use of !important inside of our gu-heading-text control...
  this one little piece of text cannot use the standard control.
  Once we have done away with all global styles, this can be once again made into a
  standard heading text control */
  .unlockedPackItems__raffleTicketsArea__dropdown__inner__value {
    font-family: ${(0, E.asCssProp)(Z.typography.headingFont)};
    font-size: calc(var(--cw) * 2.2);
    line-height: 1;
    margin: calc(var(--ch) * 0.5) 0 0 0;
  }

  .unlockedPackItems__raffleTicketsArea__ticketImage {
    position: relative;
    display: block;
    width: 100%;
    cursor: pointer;
  }

  .unlockedPackItems__raffleTicketsArea__ticketImage__img {
    display: block;
    width: 100%;
  }

  .unlockedPackItems__3dPerspectiveWrapper {
    position: relative;
    width: calc(var(--cw) * 16);
    perspective: calc(var(--cw) * 50);
  }

  .unlockedPackItems__3dPerspectiveWrapper:last-child {
    margin: 0;
  }

  .unlockedPackItems__cardWrapper {
    ${(0, E.asCssProp)((0, te.userSelect)("none"))};
    ${(0, E.asCssProp)(Z.animation.slowTransition("transform"))};
    transition-timing-function: ease-out;
    height: 100%;
    opacity: 0;
    position: relative;
    transform-style: preserve-3d;
    transition-property: transform, opacity;
  }

  .unlockedPackItems--visible .unlockedPackItems__3dPerspectiveWrapper:nth-of-type(1) .unlockedPackItems__cardWrapper {
    transition-delay: ${0}ms;
  }
  .unlockedPackItems--visible .unlockedPackItems__3dPerspectiveWrapper:nth-of-type(2) .unlockedPackItems__cardWrapper {
    transition-delay: ${150}ms;
  }
  .unlockedPackItems--visible .unlockedPackItems__3dPerspectiveWrapper:nth-of-type(3) .unlockedPackItems__cardWrapper {
    transition-delay: ${300}ms;
  }
  .unlockedPackItems--visible .unlockedPackItems__3dPerspectiveWrapper:nth-of-type(4) .unlockedPackItems__cardWrapper {
    transition-delay: ${450}ms;
  }
  .unlockedPackItems--visible .unlockedPackItems__3dPerspectiveWrapper:nth-of-type(5) .unlockedPackItems__cardWrapper {
    transition-delay: ${600}ms;
  }
  .unlockedPackItems--visible .unlockedPackItems__3dPerspectiveWrapper:nth-of-type(6) .unlockedPackItems__cardWrapper {
    transition-delay: ${750}ms;
  }

  .unlockedPackItems__cardWrapper--flipped {
    transform: rotateY(180deg);
    transition-delay: 0ms !important;
  }

  .unlockedPackItems--visible .unlockedPackItems__cardWrapper,
  .unlockedPackItems--visible .unlockedPackItems__raffleTicketsArea {
    opacity: 1;
    cursor: pointer;
    ${(0, E.asCssProp)((0, te.userSelect)("auto"))};
  }

  .unlockedPackItems__cardWrapper__frontFace,
  .unlockedPackItems__cardWrapper__rearFace {
    transform: rotateX(0deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  /*
  @TEMP CODE DEBUG:
  (used to quickly style the cards and tickets GUI)
  ---------------------------------------- *
  .unlockedPackItems {
    opacity: 1;
  }
  .unlockedPackItems__raffleTicketsArea,
  .unlockedPackItems__cardWrapper {
    opacity: 1;
    ${(0, E.asCssProp)((0, te.userSelect)("auto"))};
  }
  .unlockedPackItems__cardWrapper__frontFace,
  .unlockedPackItems__cardWrapper__rearFace {
    backface-visibility: visible;
  }
  .unlockedPackItems__cardWrapper__rearFace {
    opacity: 0.5;
  }
  /* -------------------------------------------- */

  .unlockedPackItems__cardWrapper__frontFace {
    width: 100%;
    transform: rotateY(180deg);
    position: relative;
  }

  .unlockedPackItems__cardWrapper__frontFace__scarcity {
    padding-left: calc(var(--cw) * 1);
    position: absolute;
    width: 100%;
    left: 0;
    top: calc(100% + (var(--ch) * 1.5));
  }

  .unlockedPackItems__cardWrapper__rearFace {
    position: absolute;
    top: 6%;
    height: 93%;
    width: 100%;
    right: 4.5%;
  }

  .unlockedPackItems__cardWrapper__rearFace__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .ctasArea {
    position: absolute;
    z-index: 1;
    bottom: 13%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
  }

  .ctasArea__cta {
    min-width: 200px;
  }

`;
    customElements.define("gu-temple-view-layer", (0, oe.x1)({
        renderer: function Ls({
                                  unOpenedPacks: k = [],
                                  unOpenedChests: V = [],
                                  volume: p = .9,
                                  headerAreaHeight: R = Z.measurements.standardHeaderHeight
                              }) {
            const q = (0, de.sO)(null), f = (0, de.sO)(null), D = (0, de.sO)(null), m = (0, de.sO)(null),
                L = (0, de.sO)(null), j = (0, de.sO)(null), re = (0, oe.I0)(F), {
                    openPackVideoId: Se,
                    openPackVideoVisible: De,
                    firstPackCardsVisible: Ge,
                    flippedCards: je,
                    packImageVisible: nt,
                    currentOpenPack: Ke,
                    openPackVideoLoading: ye,
                    openPackVideoPlaying: ve
                } = (0, oe.v9)({
                    store: F,
                    selector: Re => ({
                        openPackVideoId: Re.openPackVideoId,
                        openPackVideoVisible: Re.openPackVideoVisible,
                        firstPackCardsVisible: Re.firstPackCardsVisible,
                        flippedCards: Re.flippedCards,
                        packImageVisible: Re.packImageVisible,
                        currentOpenPack: Re.currentOpenPack,
                        openPackVideoLoading: Re.openPackVideoLoading,
                        openPackVideoPlaying: Re.openPackVideoPlaying
                    })
                });
            (0, de.d4)(() => {
                this.style.setProperty("--headerAreaHeight", `${R}px`)
            }, [R]), (0, de.d4)(() => {
                this.openPackVideoLoading = ye
            }, [ye]), (0, de.d4)(() => (Gt.observe(L.current), () => {
                Gt.unobserve(L.current), Et(), Eo()
            }), []);
            const pt = () => {
                Et(), this.gestureControl = new (Ds())(f.current, {
                    sensitivity: 0,
                    passive: !1,
                    capture: !0,
                    startDirectionLoopCount: 1
                }), this.gestureControl.on("pan.prestart", Ot), this.gestureControl.on("pan.start", Mt), this.gestureControl.on("pan.all", as), this.gestureControl.on("pan.end", $t)
            }, Et = () => {
                this.gestureControl && (this.gestureControl.removeListener("pan.prestart", Ot), this.gestureControl.removeListener("pan.start", Mt), this.gestureControl.removeListener("pan.all", as), this.gestureControl.removeListener("pan.end", $t), this.gestureControl.destroy(), this.gestureControl = null)
            };
            (0, de.d4)(() => {
                if (!Ke.set) return void Et();
                pt();
                let Re = c[`pack-open-videos-720p ${Ke.set}--${Ke.god}--${Ke.rarity}`];
                Re || (Re = c["pack-open-videos-720p core--neutral--rare"]), re((k => ({type: fe, payload: k}))(Re))
            }, [Ke]), (0, de.d4)(() => {
                !Ke.set && k.length && re(bt(k))
            }, [k]);
            const Ot = Re => {
                    Re.sourceEvent.preventDefault()
                }, Mt = Re => {
                    this.terminatedPan = !1, lt.p8.set(q.current, {x: 0, y: 0})
                }, as = ({deltaX: Re, deltaY: Nt, sourceEvent: xo}) => {
                    if (ls(), H.dz.checkOutOfBounds({
                        x: xo.pageX,
                        y: xo.pageY,
                        width: this.dimensions.width,
                        height: this.dimensions.height,
                        top: this.dimensions.top,
                        left: this.dimensions.left,
                        tolerance: 20
                    })) return this.terminatedPan = !0, $t({});
                    this.terminatedPan || lt.p8.set(q.current, {
                        x: this.openPackVideoLoading ? .2 * Re : Re,
                        y: this.openPackVideoLoading ? .2 * Nt : Nt
                    })
                }, $t = Re => {
                    lt.p8.to(q.current, this.draggablePackIsIntersecting && !this.openPackVideoLoading ? {
                        rotation: -1,
                        x: 37.2 * this.dimensions.cw + "px",
                        y: -25 * this.dimensions.ch + "px",
                        onComplete: () => cs(),
                        duration: .3
                    } : {duration: .3, x: 0, y: 0})
                }, ls = Zt()(() => {
                    this.draggablePackIsIntersecting = function _t(k, V) {
                        let p = !1;
                        return k && V && (p = !(k.right < V.left || k.left > V.right || k.bottom < V.top || k.top > V.bottom)), p
                    }(q.current.getBoundingClientRect(), this.dragTargetRectangle)
                }, 50), Gt = new _s.do(Re => {
                    Re.forEach(Nt => qt())
                }), qt = Zt()(() => {
                    const Re = L.current.getBoundingClientRect();
                    this.dimensions = {
                        ch: .01 * L.current.offsetHeight,
                        cw: .01 * L.current.offsetWidth,
                        width: Re.width,
                        height: Re.height,
                        top: Re.top,
                        left: Re.left
                    }, this.style.setProperty("--cw", `${this.dimensions.cw}px`), this.style.setProperty("--ch", `${this.dimensions.ch}px`), this.dragTargetRectangle = j.current.getBoundingClientRect()
                }, 500), cs = () => {
                    re({
                        type: ie,
                        payload: !0
                    }), this.dispatchEvent(new CustomEvent("onPackOpened", {detail: {pack: Ke}})), D.current.playVideo(), re(ne(!0))
                }, Eo = () => {
                    console.log("RESET TEMPLE CODE"), re({type: Ue}), lt.p8.set(q.current, {clearProps: "all"})
                }, qs = nt && !De && ye, eo = !Ke.set || Object.keys(je).length === Ke.cards.length,
                ds = eo && !k.length;
            return xe.dy`
    <div class="videoAspectRatio" ?domRef=${(0, Ce.Q)(L)}>
      <img class="videoAspectRatio__img" alt="ratio image" src="/assets/images/ratio-images/16-x-9-ratio.png" />      

      <gu-temple-pack-card-listing></gu-temple-pack-card-listing>

      <div class="ctasArea">
        ${ds ? xe.dy`
              <gu-primary-hex-button
                size="large"
                type="primary"
                href=${`${b.gv.routeContent({}).home.path}`}
                class="ctasArea__cta ctasArea__cta--buyPacksCta"
                data-test-id="buyPacksCTA"
              >
                Play to Unlock
              </gu-primary-hex-button>
              <gu-vertical-space top="large">
                <gu-heading-text size="2x-small" align="center">&nbsp;</gu-heading-text>
              </gu-vertical-space>
            ` : null}
        ${!!k.length ? xe.dy`
              <gu-primary-hex-button size="large" type="primary" @click=${() => {
                lt.p8.set(q.current, {clearProps: "all"});
                re({type: Q});
                cs();
                re(ne(!1));
                re({type: Se, payload: !0});
            }} class="ctasArea__cta">
                Open Pack
              </gu-primary-hex-button>
              <gu-vertical-space top="large">
                <gu-heading-text size="2x-small" align="center">
                &nbsp;${k.length - 1 > 0 ? (k.length - 1 > 1 ? k.length - 1 + ' packs left' : k.length - 1 + ' pack left') : ''}
                </gu-heading-text>
              </gu-vertical-space>
            ` : null}
      </div>

      ${nt ? xe.dy` <gu-temple-chest-layer .unOpenedChests=${V} .volume=${p}></gu-temple-chest-layer> ` : null}
      ${!!Ke.set ? xe.dy`
            <gu-card-pack-picture
              type="temple"
              set=${Ke.set}
              god=${Ke.god}
              rarity=${Ke.rarity}
              class=${(0, be.$)({
                draggablePack: !0,
                "draggablePack--visible": nt && !De,
                "draggablePack--disabled": qs,
                "draggablePack--touchable": this.isIos
            })}
              ?domRef=${(0, Ce.Q)(q)}
              @click=${() => !!this.isIos && cs()}
            ></gu-card-pack-picture>
            ${Ge ? null : xe.dy`<i class="draggablePackHitzone" ?domRef=${(0, Ce.Q)(f)}></i>`}
          ` : null}
    </div>
  `
        },
        props: {
            properties: {
                unOpenedPacks: {type: Array},
                unOpenedChests: {type: Array},
                volume: {type: Number},
                headerAreaHeight: {type: Number}
            }, styles: vs
        }
    }));
    var ys = s(4390), Ut = s(8929), dt = s(7625), Kt = s(61709), Wt = s(24850), zt = s(11735), St = s(28510);
    let jt = (() => {
        class k {
            constructor(p, R, q) {
                this.environment = p, this.router = R, this.modalService = q
            }

            ngOnInit() {
            }

            onBuyPacks() {
                this.closeModal(), "website" === this.environment.clientType ? this.router.navigate([b.CF.J.buyPacks.path]) : window.open(b.gv.routeContent(this.environment).buyPacks.url)
            }

            closeModal() {
                this.modalService.dismissAll()
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(r.Ho), t.Y36(zt.F0), t.Y36(St.Qz))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-temple-chest-opened-modal"]],
            inputs: {transactionUrl: "transactionUrl"},
            decls: 16,
            vars: 1,
            consts: [["bottom", "2x-large"], ["size", "small", "fillGradient", "gradients.gold.simple"], ["fillColor", "colors.light.100", "align", "center"], ["both", "2x-large"], ["kind", "tag", "target", "_blank", "fillColor", "colors.apocyan.300", 3, "href"], ["top", "2x-large"], ["size", "large", "type", "primary", 3, "click"], ["iconLigature", "close_x", "fillColor", "colors.apocyan.300", 1, "xButton", 3, "click"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "gu-vertical-space", 0)(1, "gu-heading-text", 1), t._uU(2, " Chest opened! "), t.qZA()(), t.TgZ(3, "gu-paragraph-text", 2), t._uU(4, " Opening a chest grants you 5 packs of the corresponding quality. Once you open a chest, the packs have to be created on the blockchain, and sent to you. "), t.TgZ(5, "strong"), t._uU(6, "This can take a few minutes to complete."), t.qZA()(), t.TgZ(7, "gu-vertical-space", 3)(8, "gu-simple-text-button", 4), t._uU(9, " you can check the status of your transaction here "), t.qZA()(), t.TgZ(10, "gu-paragraph-text", 2), t._uU(11, " When the transaction is complete, your new packs will show up in the temple.\n"), t.qZA(), t.TgZ(12, "gu-vertical-space", 5)(13, "gu-primary-hex-button", 6), t.NdJ("click", function () {
                    return R.onBuyPacks()
                }), t._uU(14, " BUY "), t.qZA()(), t.TgZ(15, "gu-icon", 7), t.NdJ("click", function () {
                    return R.closeModal()
                }), t.qZA()), 2 & p && (t.xp6(8), t.s9C("href", R.transactionUrl))
            },
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0F1B27;width:100%;min-width:60vh;max-width:75vw;min-height:40vh;padding:40px;text-align:center;position:relative;box-shadow:inset 0 0 0 2px #3d5a7480}.xButton[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;font-size:28px;cursor:pointer}.xButton[_ngcontent-%COMP%]:hover{color:#f6f6f6}"]
        }), k
    })();
    var Cs = s(51395), ut = s(55195);
    const xs = ["viewLayer"];
    let Us = (() => {
        class k {
            constructor(p, R, q, f, D, m, L, j, re) {
                this.environment = p, this.packService = R, this.chestService = q, this.router = f, this.ngZone = D, this.ethService = m, this.modalService = L, this.audioService = j, this.navigationStateService = re, this.unopenedChests = [], this.unopenedPacks = [], this.unsubscribe = new Ut.xQ, this.volumeSetting = 1, this.currentWalletAddress = ""
            }

            ngOnInit() {
                this.initPacks(), this.initAudio(), "website" === this.environment.clientType && this.initChests()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            initAudio() {
                this.audioService.currentVolume$.pipe((0, dt.R)(this.unsubscribe)).subscribe(p => {
                    this.volumeSetting = p
                })
            }

            initPacks() {
                this.packService.fetchUnopenedPacks(), this.packService.unopenedPacks$.pipe((0, dt.R)(this.unsubscribe), (0, Kt.VS)(p => this.packService.updateScarcityAndRarity$(p))).subscribe(p => {
                    console.log("TempleRoute->initPacks() packs", p), this.unopenedPacks = p
                })
            }

            initChests() {
                this.chestService.fetchChests(), this.chestService.chests$.pipe((0, dt.R)(this.unsubscribe), (0, Wt.U)(p => this.formatChests(p))).subscribe(p => {
                    this.unopenedChests = p, console.log("TempleRoute->initChests() chests", p)
                })
            }

            formatChests(p) {
                console.log("TempleRoute->formatChests() tps", p);
                let R = [];
                return p.forEach(q => {
                    R = [...R, ...Array.from(Array(q.amount)).map(f => ({rarity: q.rarity, set: q.set, type: q.type}))]
                }), R
            }

            onPackOpened(p) {
                console.log("TempleRoute->onOpenPack() opening pack", p.detail.pack), this.packService.openPack$(p.detail.pack).pipe((0, $.q)(1)).subscribe(R => {
                    console.log("TempleRoute->onOpenPack() pack opened!!!", p.detail.pack)
                })
            }

            onChestOpened(p) {
                this.chestService.open(p.detail.type, 1).pipe((0, $.q)(1)).subscribe(q => {
                    console.log("TempleRoute->onChestOpened() Chest Opened!!!!!!! p ", q), this.showChestOpenedModal(this.etherscanUrl(q.hash))
                })
            }

            etherscanUrl(p) {
                return `https://${this.environment.production ? "" : "ropsten."}etherscan.io/tx/${p}`
            }

            onBuyPacks() {
                "website" === this.environment.clientType ? this.router.navigate([b.CF.J.buyPacks.path]) : (0, ys.rb)({url: b.gv.routeContent(this.environment).buyPacks.url})
            }

            showChestOpenedModal(p) {
                this.modalService.open(jt, {
                    defaultStylings: !1,
                    centered: !0,
                    scrollable: !1
                }).componentInstance.transactionUrl = p
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(r.Ho), t.Y36(Cs.F), t.Y36(Cs.W), t.Y36(zt.F0), t.Y36(t.R0b), t.Y36(r.ux), t.Y36(St.Qz), t.Y36(r.pk), t.Y36(ut.fY))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-temple"]],
            viewQuery: function (p, R) {
                if (1 & p && t.Gf(xs, 7), 2 & p) {
                    let q;
                    t.iGM(q = t.CRH()) && (R.viewLayerDom = q.first)
                }
            },
            decls: 4,
            vars: 4,
            consts: [["data-test-id", "templerViewLayer", 3, "headerAreaHeight", "unOpenedPacks", "unOpenedChests", "volume", "onPackOpened", "onChestOpened", "onBuyPacks"], ["viewLayer", ""]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "gu-temple-view-layer", 0, 1), t.NdJ("onPackOpened", function (f) {
                    return R.onPackOpened(f)
                })("onChestOpened", function (f) {
                    return R.onChestOpened(f)
                })("onBuyPacks", function () {
                    return R.onBuyPacks()
                }), t.qZA(), t.TgZ(2, "gu-temple-overlay-layer"), t._uU(3, " Your screen is too puny for such a mighty prize. Please expand your browser window or use a larger device such as a laptop or PC.\n"), t.qZA()), 2 & p && t.Q6J("headerAreaHeight", R.navigationStateService.dataStore.headerAreaHeight)("unOpenedPacks", R.unopenedPacks)("unOpenedChests", R.unopenedChests)("volume", R.volumeSetting)
            },
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}"]
        }), k
    })();
    var ft = s(61715), Rs = s(98723);

    function Ps(k, V) {
        if (1 & k && (t.TgZ(0, "gu-paragraph-text", 10), t._uU(1, " Buy "), t.TgZ(2, "strong"), t._uU(3), t.qZA(), t._uU(4, " for "), t.TgZ(5, "span", 11), t._uU(6), t.qZA(), t._UZ(7, "gu-icon", 12), t._uU(8, "? "), t.qZA()), 2 & k) {
            const p = t.oxw();
            t.xp6(3), t.Oqu(p.storeItem.item_name), t.xp6(3), t.hij("", p.storeItem.value, " ")
        }
    }

    function Ss(k, V) {
        if (1 & k && t._UZ(0, "gu-paragraph-text", 13), 2 & k) {
            const p = t.oxw();
            t.Q6J("innerHTML", p.descriptionText, t.oJD)
        }
    }

    function ks(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "gu-paragraph-text", 10), t._uU(1, " Great choice! "), t.TgZ(2, "strong"), t._uU(3), t.qZA(), t._uU(4, " has been added to your "), t.TgZ(5, "span")(6, "gu-simple-text-button", 14), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().goToCollections()
            }), t._uU(7, " Collections "), t.qZA()(), t._uU(8, ". "), t.qZA()
        }
        if (2 & k) {
            const p = t.oxw();
            t.xp6(3), t.Oqu(p.storeItem.item_name)
        }
    }

    function Bs(k, V) {
        if (1 & k && (t.TgZ(0, "gu-vertical-space", 15)(1, "picture", 16), t._UZ(2, "source", 17)(3, "img", 18), t.qZA()()), 2 & k) {
            const p = t.oxw();
            t.xp6(2), t.Q6J("srcset", p.storeItem.image_url, t.LSH), t.xp6(1), t.Q6J("src", p.storeItem.image_url, t.LSH)
        }
    }

    function Fs(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.ynx(0), t.TgZ(1, "gu-primary-hex-button", 19), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().exit()
            }), t._uU(2, "OKAY"), t.qZA(), t.BQk()
        }
    }

    function Gs(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "gu-primary-hex-button", 20), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().back()
            }), t._uU(1, "BACK"), t.qZA(), t.TgZ(2, "gu-primary-hex-button", 21), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().buyNow()
            }), t._uU(3, "BUY NOW"), t.qZA()
        }
        if (2 & k) {
            const p = t.oxw();
            t.xp6(2), t.Q6J("disabled", p.awaitingPurchaseRes)
        }
    }

    let ws = (() => {
        class k {
            constructor(p, R, q, f, D) {
                this.activeModal = p, this.router = R, this.environment = q, this.akuma = f, this.starsService = D, this.stage = "confirm", this.awaitingPurchaseRes = !1, this.buyNowEvent$ = new t.vpe
            }

            ngOnInit() {
                this.setStage(this.stage)
            }

            setStage(p) {
                switch (this.stage = p, p) {
                    case"confirm":
                        return this.akuma.postEvent("Screen", "starstoreConfirmPurchase_opened"), void (this.headingText = "CONFIRM PURCHASE");
                    case"failure":
                        return this.logFailure(), this.headingText = "NOT ENOUGH STARS!", void (this.descriptionText = `Sorry you don\u2019t have enough Stars to purchase${this.startsWithThe(this.storeItem.item_name) ? "" : " the"} <strong>${this.storeItem.item_name}</strong>. Play some ranked games to earn more!`);
                    case"success":
                        return this.logSuccess(), void (this.headingText = "PURCHASE SUCCESS");
                    default:
                        return
                }
            }

            logFailure() {
                const p = this.starsService.getScreenOrder(this.storeItem);
                this.akuma.postEvent("Screen", "starstoreInsufficientFunds_opened", p), "function" == typeof gtag && gtag("event", "_purchaseStarstore_failed", p), this.akuma.postEvent("Flow", "_purchaseStarstore_failed", p)
            }

            logSuccess() {
                const p = this.starsService.getScreenOrder(this.storeItem);
                this.akuma.postEvent("Screen", "starstoreSuccessPurchase_opened", p), this.akuma.postEvent("Flow", "_purchaseStarstore_succeeded", p), "function" == typeof gtag && gtag("event", "_purchaseStarstore_succeeded", p)
            }

            goToCollections() {
                this.akuma.postEvent("Control", "starstoreSuccessPurchaseCollectionsLnk_pressed"), "website" === this.environment.clientType ? this.router.navigate(["/collections"]) : "desktop" === this.environment.clientType && this.router.navigate(["/game/gu/inventory"]), this.exit()
            }

            startsWithThe(p) {
                return "the" === p.slice(0, 3).toLowerCase()
            }

            exit() {
                this.activeModal.close()
            }

            back() {
                this.akuma.postEvent("Control", "starstoreConfirmPurchaseBackBtn_pressed"), this.exit()
            }

            buyNow() {
                this.akuma.postEvent("Control", "starstoreConfirmPurchaseBuyBtn_pressed", this.starsService.getScreenOrder(this.storeItem)), this.buyNowEvent$.emit(this.storeItem)
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(St.mX), t.Y36(zt.F0), t.Y36(r.Ho), t.Y36(ut.jt), t.Y36(ut.cM))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-star-store-buy-modal"]],
            inputs: {stage: "stage", storeItem: "storeItem", awaitingPurchaseRes: "awaitingPurchaseRes"},
            outputs: {buyNowEvent$: "buyNowEvent$"},
            decls: 13,
            vars: 7,
            consts: [["goldBorder", "top"], ["top", "2x-large", 1, "headerSection"], ["size", "small", "fillGradient", "gradients.gold.simple", "align", "center"], ["top", "small", "bottom", "large", 1, "descriptionSection"], ["kind", "small", "align", "center", "fillColor", "colors.light.100", 4, "ngIf"], ["kind", "small", "align", "center", "fillColor", "colors.light.100", 3, "innerHTML", 4, "ngIf"], ["class", "imageSection", 4, "ngIf"], ["top", "large", "bottom", "2x-large", 1, "ctaSection"], [4, "ngIf", "ngIfElse"], ["confirmSection", ""], ["kind", "small", "align", "center", "fillColor", "colors.light.100"], [1, "descriptionSection__price"], ["iconLigature", "collectable_stars", "fillGradientTarget", "top", "fillGradient", "gradients.apocyan.simple", 1, "descriptionSection__icon"], ["kind", "small", "align", "center", "fillColor", "colors.light.100", 3, "innerHTML"], ["fillColor", "colors.gunmetal.300", 3, "click"], [1, "imageSection"], [1, "imageSection__picture"], ["type", "image/jpg", 3, "srcset"], [1, "imageSection__picture__img", 3, "src"], ["size", "large", "type", "primary", 1, "ctaSection__primary", 3, "click"], ["size", "large", "type", "secondary", 1, "ctaSection__secondary", "mr-3", 3, "click"], ["size", "large", "type", "primary", 1, "ctaSection__primary", 3, "disabled", "click"]],
            template: function (p, R) {
                if (1 & p && (t._UZ(0, "gu-modal-background", 0), t.TgZ(1, "gu-vertical-space", 1)(2, "gu-heading-text", 2), t._uU(3), t.qZA()(), t.TgZ(4, "gu-vertical-space", 3), t.YNc(5, Ps, 9, 2, "gu-paragraph-text", 4), t.YNc(6, Ss, 1, 1, "gu-paragraph-text", 5), t.YNc(7, ks, 9, 1, "gu-paragraph-text", 4), t.qZA(), t.YNc(8, Bs, 4, 2, "gu-vertical-space", 6), t.TgZ(9, "gu-vertical-space", 7), t.YNc(10, Fs, 3, 0, "ng-container", 8), t.YNc(11, Gs, 4, 1, "ng-template", null, 9, t.W1O), t.qZA()), 2 & p) {
                    const q = t.MAs(12);
                    t.xp6(3), t.hij(" ", R.headingText, " "), t.xp6(2), t.Q6J("ngIf", "confirm" === R.stage), t.xp6(1), t.Q6J("ngIf", "failure" === R.stage), t.xp6(1), t.Q6J("ngIf", "success" === R.stage), t.xp6(1), t.Q6J("ngIf", "confirm" === R.stage), t.xp6(2), t.Q6J("ngIf", "confirm" !== R.stage)("ngIfElse", q)
                }
            },
            directives: [l.O5],
            styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:520px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.descriptionSection__price[_ngcontent-%COMP%]{color:var(--gu-blue)}.descriptionSection__icon[_ngcontent-%COMP%]{display:inline-flex}.imageSection[_ngcontent-%COMP%]{display:flex;justify-content:center}.imageSection__picture__img[_ngcontent-%COMP%]{width:280px;max-width:70vw}.ctaSection[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.ctaSection[_ngcontent-%COMP%]   gu-primary-hex-button[_ngcontent-%COMP%]:nth-child(2){margin-left:20px}"]
        }), k
    })(), Ns = (() => {
        class k {
            constructor(p, R) {
                this.activeModal = p, this.akuma = R
            }

            ngOnInit() {
                this.akuma.postEvent("Screen", "starstoreInfo_opened")
            }

            exit() {
                this.activeModal.close()
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(St.mX), t.Y36(ut.jt))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-star-store-more-info-modal"]],
            inputs: {imageUrl: "imageUrl", name: "name", description: "description"},
            decls: 12,
            vars: 4,
            consts: [["iconLigature", "close_x", "fillColor", "colors.apocyan.300", 1, "closeIcon", 3, "click"], ["top", "x-large", 1, "imageSection"], [1, "imageSection__picture"], ["type", "image/jpg", 3, "srcset"], [1, "imageSection__picture__img", 3, "src"], ["both", "large"], ["size", "x-small", "fillColor", "colors.light.100", "align", "center"], ["bottom", "x-large"], ["kind", "small", "align", "center", "fillColor", "colors.light.100"]],
            template: function (p, R) {
                1 & p && (t._UZ(0, "gu-modal-background"), t.TgZ(1, "gu-icon", 0), t.NdJ("click", function () {
                    return R.exit()
                }), t.qZA(), t.TgZ(2, "gu-vertical-space", 1)(3, "picture", 2), t._UZ(4, "source", 3)(5, "img", 4), t.qZA()(), t.TgZ(6, "gu-vertical-space", 5)(7, "gu-heading-text", 6), t._uU(8), t.qZA()(), t.TgZ(9, "gu-vertical-space", 7)(10, "gu-paragraph-text", 8), t._uU(11), t.qZA()()), 2 & p && (t.xp6(4), t.Q6J("srcset", R.imageUrl, t.LSH), t.xp6(1), t.Q6J("src", R.imageUrl, t.LSH), t.xp6(3), t.hij(" ", R.name, " "), t.xp6(3), t.hij(" ", R.description, " "))
            },
            styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:520px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.imageSection[_ngcontent-%COMP%]{display:flex;justify-content:center}.imageSection__picture__img[_ngcontent-%COMP%]{max-width:100%}.closeIcon[_ngcontent-%COMP%]{position:absolute!important;top:0;right:0;margin:14px 16px;font-size:20px;cursor:pointer}"]
        }), k
    })();

    function ss(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "gu-star-store-sale-item", 14), t.NdJ("onBuyItem", function () {
                t.CHM(p);
                const q = t.oxw().$implicit;
                return t.oxw(2).showBuyItem(q)
            })("onMoreInfo", function () {
                t.CHM(p);
                const q = t.oxw().$implicit;
                return t.oxw(2).showMoreInfo(q)
            }), t.qZA()
        }
        if (2 & k) {
            const p = t.oxw().$implicit;
            t.Q6J("price", p.value)("imageUrl", p.image_url)("name", p.item_name)("durationType", p.label)("endTimestamp", p.end_timestamp)("title", p.title)
        }
    }

    function Ws(k, V) {
        if (1 & k && (t.ynx(0), t.YNc(1, ss, 1, 6, "gu-star-store-sale-item", 13), t.BQk()), 2 & k) {
            const p = V.$implicit, R = t.oxw(2);
            t.xp6(1), t.Q6J("ngIf", R.isCurrentItem(p))
        }
    }

    function Bt(k, V) {
        if (1 & k && (t.ynx(0), t.TgZ(1, "div", 7)(2, "gu-vertical-space", 8)(3, "gu-heading-text", 9), t._uU(4, " Welcome to the Star Store "), t.qZA(), t.TgZ(5, "gu-paragraph-text", 10), t._uU(6, " Exchange your Stars for some awesome items. "), t._UZ(7, "br"), t._uU(8, " Availability and prices are subject to change. "), t.qZA()(), t.TgZ(9, "gu-vertical-space", 11), t.YNc(10, Ws, 2, 1, "ng-container", 12), t.qZA()(), t.BQk()), 2 & k) {
            const p = t.oxw();
            t.xp6(10), t.Q6J("ngForOf", p.storeItems)
        }
    }

    function zs(k, V) {
        1 & k && (t.TgZ(0, "div", 15)(1, "gu-heading-text", 9), t._uU(2, " the Star Store is Restocking "), t.qZA(), t.TgZ(3, "gu-paragraph-text", 10), t._uU(4, " We are currently out of stock! Please check back at a later time. "), t.qZA()())
    }

    let Es = (() => {
        class k {
            constructor(p, R, q) {
                this.modalService = p, this.starsService = R, this.akuma = q, this.storeItems = [], this.currentEpochTime = this.timeNowEpoch(), this.currentItemsToDisplay = !0, this.unsubscribe = new Ut.xQ
            }

            ngOnInit() {
                this.initStoreItems(), this.initTimestampCheck()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            initTimestampCheck() {
                (0, ft.F)(1e3).pipe((0, dt.R)(this.unsubscribe)).subscribe(p => {
                    this.currentEpochTime = this.timeNowEpoch(), this.checkForCurrentItems()
                })
            }

            checkForCurrentItems() {
                this.currentItemsToDisplay = this.storeItems.some(p => this.isCurrentItem(p))
            }

            timeNowEpoch() {
                return (new Date).getTime()
            }

            isCurrentItem(p) {
                return p.end_timestamp_epoch > this.currentEpochTime && p.start_timestamp_epoch < this.currentEpochTime
            }

            initStoreItems() {
                this.starsService.fetchStarStoreItems$().pipe((0, $.q)(1)).subscribe(p => {
                    this.storeItems = p, this.scheduleRefresh(p), this.checkForCurrentItems(), (!p || 0 === p.length || !this.currentItemsToDisplay) && this.akuma.postEvent("Screen", "starstoreEmpty_opened"), this.logStarStoreOpened(), console.log("StarStoreRoute->initStoreItems()", this.storeItems)
                })
            }

            scheduleRefresh(p) {
                const R = Date.now(), q = p.reduce((D, m) => D.end_timestamp_epoch < m.end_timestamp_epoch ? D : m);
                if (!q) return;
                const f = q.end_timestamp_epoch + 1e3 - R;
                f < 0 || (0, Rs.H)(f).pipe((0, dt.R)(this.unsubscribe), (0, $.q)(1)).subscribe(D => {
                    this.initStoreItems()
                })
            }

            logStarStoreOpened() {
                const p = {};
                this.storeItems.forEach((R, q) => {
                    p[`item_${q + 1}`] = R
                }), this.akuma.postEvent("Screen", "starstoreHome_opened", p)
            }

            logBuyButton(p) {
                this.akuma.postEvent("Control", "starstoreHomeBuyBtn_pressed", this.starsService.getScreenOrder(p)), this.akuma.postEvent("Flow", "_purchaseStarstore_started", this.starsService.getScreenOrder(p)), "function" == typeof gtag && gtag("event", "_purchaseStarstore_started", this.starsService.getScreenOrder(p))
            }

            showBuyItem(p) {
                this.logBuyButton(p), this.modalService.hasOpenModals() && this.modalService.dismissAll(), this.openedModal$ && this.openedModal$.unsubscribe();
                const q = this.modalService.open(ws, {defaultStylings: !1, centered: !0}).componentInstance;
                q.storeItem = p, this.openedModal$ = q.buyNowEvent$.pipe((0, $.q)(1), (0, Kt.VS)(f => (q.awaitingPurchaseRes = !0, this.handleBuyNow$(f)))).subscribe(f => {
                    q.awaitingPurchaseRes = !1, q.setStage(f ? "success" : "failure")
                })
            }

            showMoreInfo(p) {
                this.akuma.postEvent("Control", "starstoreHomeTipBtn_pressed", this.starsService.getScreenOrder(p)), this.modalService.hasOpenModals() && this.modalService.dismissAll();
                const q = this.modalService.open(Ns, {defaultStylings: !1, centered: !0}).componentInstance;
                q.name = p.item_name, q.description = p.item_description, q.imageUrl = p.image_url
            }

            handleBuyNow$(p) {
                return this.starsService.purchaseItem$(p.asset_group, p.value).pipe((0, $.q)(1), (0, Wt.U)(R => (console.log("StarStoreRoute->handleBuyNow$", R), !(R && R.error))))
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(St.Qz), t.Y36(ut.cM), t.Y36(ut.jt))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-star-store-route"]],
            decls: 8,
            vars: 2,
            consts: [[1, "background"], [1, "background__picture"], ["srcset", "", "type", "image/webp"], ["srcset", "", "type", "image/jpg"], ["src", "", "alt", "", 1, "background__picture__img"], [4, "ngIf", "ngIfElse"], ["emptyStateSection", ""], [1, "storeSection"], ["top", "large", 1, "storeSection__header"], ["size", "large", "fillGradient", "gradients.gold.simple", "align", "center"], ["kind", "small", "align", "center", "fillColor", "colors.light.100"], ["top", "large", 1, "storeSection__specials"], [4, "ngFor", "ngForOf"], ["class", "storeSection__specials__item", 3, "price", "imageUrl", "name", "durationType", "endTimestamp", "title", "onBuyItem", "onMoreInfo", 4, "ngIf"], [1, "storeSection__specials__item", 3, "price", "imageUrl", "name", "durationType", "endTimestamp", "title", "onBuyItem", "onMoreInfo"], [1, "emptyStateSection"]],
            template: function (p, R) {
                if (1 & p && (t.TgZ(0, "div", 0)(1, "div", 1), t._UZ(2, "source", 2)(3, "source", 3)(4, "img", 4), t.qZA()(), t.YNc(5, Bt, 11, 1, "ng-container", 5), t.YNc(6, zs, 5, 0, "ng-template", null, 6, t.W1O)), 2 & p) {
                    const q = t.MAs(7);
                    t.xp6(5), t.Q6J("ngIf", R.currentItemsToDisplay)("ngIfElse", q)
                }
            },
            directives: [l.O5, l.sg],
            styles: ["[_nghost-%COMP%]{background:var(--gu-blue-dark);display: flex;flex-flow: column nowrap;align-items: center}.background[_ngcontent-%COMP%], .background__picture[_ngcontent-%COMP%]{display: none;}.storeSection[_ngcontent-%COMP%]{min-height:100%;background-image:url(https://images.godsunchained.com/art2/1920/1683.jpg);background-size:cover;background-position:center;background-color:#000000cc;background-blend-mode:luminosity;position: relative;overflow-y: auto;width: 100%}.storeSection__header[_ngcontent-%COMP%]{padding: 0 8px}.storeSection__header[_ngcontent-%COMP%] gu-paragraph-text[_ngcontent-%COMP%]{max-width: 630px;margin: auto}.storeSection__specials[_ngcontent-%COMP%]{display: flex;flex-wrap: wrap;justify-content: center}.emptyStateSection[_ngcontent-%COMP%]{position: relative;margin: auto}"]
        }), k
    })();

    function Hs(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "gu-primary-hex-button", 8), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().secondaryCtaClick()
            }), t._uU(1), t.qZA()
        }
        if (2 & k) {
            const p = t.oxw();
            t.xp6(1), t.Oqu(p.secondaryCtaText)
        }
    }

    function Zs(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "gu-primary-hex-button", 9), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().primaryCtaClick()
            }), t._uU(1), t.qZA()
        }
        if (2 & k) {
            const p = t.oxw();
            t.xp6(1), t.Oqu(p.primaryCtaText)
        }
    }

    s(52886), s(98590);
    let Ks = (() => {
        class k {
            constructor(p) {
                this.activeModal = p, this.onPrimaryCtaClick = () => {
                }, this.onSecondaryCtaClick = () => {
                }
            }

            secondaryCtaClick() {
                this.onSecondaryCtaClick(), this.activeModal.close()
            }

            primaryCtaClick() {
                this.onPrimaryCtaClick(), this.activeModal.close()
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(St.mX))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-confirm-modal"]],
            inputs: {
                title: "title",
                text: "text",
                primaryCtaText: "primaryCtaText",
                onPrimaryCtaClick: "onPrimaryCtaClick",
                secondaryCtaText: "secondaryCtaText",
                onSecondaryCtaClick: "onSecondaryCtaClick"
            },
            decls: 10,
            vars: 4,
            consts: [["goldBorder", "top"], ["top", "4x-large"], ["align", "center", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "small"], ["top", "large"], ["align", "center", "kind", "small", "fillColor", "colors.light.100", 1, "text"], ["top", "2x-large", "bottom", "4x-large", 1, "ctaSection"], ["class", "ctaSection__button", "size", "large", "type", "secondary", 3, "click", 4, "ngIf"], ["class", "ctaSection__button", "size", "large", "type", "primary", 3, "click", 4, "ngIf"], ["size", "large", "type", "secondary", 1, "ctaSection__button", 3, "click"], ["size", "large", "type", "primary", 1, "ctaSection__button", 3, "click"]],
            template: function (p, R) {
                1 & p && (t._UZ(0, "gu-modal-background", 0), t.TgZ(1, "gu-vertical-space", 1)(2, "gu-heading-text", 2), t._uU(3), t.qZA()(), t.TgZ(4, "gu-vertical-space", 3)(5, "gu-paragraph-text", 4), t._uU(6), t.qZA()(), t.TgZ(7, "gu-vertical-space", 5), t.YNc(8, Hs, 2, 1, "gu-primary-hex-button", 6), t.YNc(9, Zs, 2, 1, "gu-primary-hex-button", 7), t.qZA()), 2 & p && (t.xp6(3), t.hij(" ", R.title, " "), t.xp6(3), t.hij(" ", R.text, " "), t.xp6(2), t.Q6J("ngIf", R.secondaryCtaText), t.xp6(1), t.Q6J("ngIf", R.primaryCtaText))
            },
            directives: [l.O5],
            styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:640px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.alertIcon[_ngcontent-%COMP%]{font-size:80px}.heading[_ngcontent-%COMP%]{text-transform:uppercase}.ctaSection[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.ctaSection__button[_ngcontent-%COMP%]{min-width:200px}.ctaSection__button[_ngcontent-%COMP%]:nth-child(2){margin-left:16px}"]
        }), k
    })();
    var Ms = s(92198);

    function Vs(k, V) {
        1 & k && t._UZ(0, "gu-icon", 3)
    }

    const rs = function (k, V) {
        return {check__complete: k, check__unfinished: V}
    };
    let mo = (() => {
        class k {
            constructor() {
            }

            ngOnInit() {
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["tick-box"]],
            inputs: {finished: "finished"},
            decls: 3,
            vars: 5,
            consts: [[1, "check", 3, "ngClass"], [1, "check__box"], ["class", "checkmark", "iconLigature", "checkbox_tick", 4, "ngIf"], ["iconLigature", "checkbox_tick", 1, "checkmark"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "div", 0)(1, "div", 1), t.YNc(2, Vs, 1, 0, "gu-icon", 2), t.qZA()()), 2 & p && (t.Q6J("ngClass", t.WLB(2, rs, R.finished, !R.finished)), t.xp6(2), t.Q6J("ngIf", R.finished))
            },
            directives: [l.mk, l.O5],
            styles: [".check__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.check[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.check__text[_ngcontent-%COMP%]{font-weight:700;line-height:28px;padding-left:10px}.check__complete[_ngcontent-%COMP%]{color:#50bcff;border-color:#50bcff}.check__unfinished[_ngcontent-%COMP%]{color:#7192b0;border-color:#7192b0}.check__box[_ngcontent-%COMP%]{height:20px;width:20px;background:#0F1B27;border:2px solid #8BE1E0;box-sizing:border-box}.checkmark[_ngcontent-%COMP%]{color:#50bcff;display:flex;font-weight:700}"]
        }), k
    })();

    function Qs(k, V) {
        if (1 & k && (t.TgZ(0, "tr")(1, "td"), t._uU(2), t.qZA(), t.TgZ(3, "td"), t._UZ(4, "tick-box", 21), t.qZA(), t.TgZ(5, "td"), t._UZ(6, "tick-box", 21), t.qZA(), t.TgZ(7, "td"), t._UZ(8, "tick-box", 21), t.qZA(), t.TgZ(9, "td"), t._uU(10), t.qZA()()), 2 & k) {
            const p = V.$implicit;
            t.xp6(2), t.Oqu(p.username), t.xp6(2), t.Q6J("finished", p.gu_account), t.xp6(2), t.Q6J("finished", p.coinbase_confirmed), t.xp6(2), t.Q6J("finished", p.game_played), t.xp6(2), t.Oqu(p.payment_status)
        }
    }

    const $s = function () {
        return {breakpoint: "small", size: "large"}
    }, Vt = function (k) {
        return [k]
    };
    let _o = (() => {
        class k {
            constructor(p, R, q, f) {
                this.activeModal = p, this.analyticsService = R, this.referralService = q, this.authService = f, this.unsubscribe = new Ut.xQ
            }

            openLink(p, R) {
                window.location.href = p
            }

            ngOnInit() {
                this.isUserSignedIn = !!this.authService.getUserId(), this.authService.account$.pipe((0, dt.R)(this.unsubscribe)).subscribe(p => {
                    this.isUserSignedIn = !!p, this.userId = this.isUserSignedIn ? this.authService.getUserId() : 0, this.referralService.getUserReferralsStatus(this.userId).pipe((0, dt.R)(this.unsubscribe)).subscribe(R => {
                        console.log(R), this.userReferrals = R, this.totalAmount = this.userReferrals.reduce((q, f) => q + f.total_amt, 0)
                    })
                })
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            onClose() {
                this.activeModal.close("Referrals CTA closed")
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(St.mX), t.Y36(ut.jt), t.Y36(ut.C_), t.Y36(r.mI))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["referrals-status"]],
            inputs: {userId: "userId"},
            decls: 47,
            vars: 10,
            consts: [["iconLigature", "close_x", 1, "modal__closeButton", 3, "click"], [1, "referrals__modal__content"], ["top", "3x-large", "bottom", "medium"], ["align", "center", "size", "small", 3, "responsiveSize"], ["top", "large", "bottom", "large"], [1, "referrals_status_container"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], [1, "divider__line"], ["top", "medium", "bottom", "medium"], [1, "earnings"], [1, "earnings__shine"], [1, "earnings__container"], [1, "earnings__text"], [1, "earnings__value"], [1, "earnings__subtext"], [1, "earnings__info"], ["fillColor", "colors.light.500", "kind", "x-small", "align", "center", 2, "max-width", "450px"], ["top", "2x-large", "bottom", "3x-large"], [1, "signInToBegin"], ["type", "primary", "size", "large", 2, "padding", "0 20px", 3, "click"], [3, "finished"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "gu-icon", 0), t.NdJ("click", function () {
                    return R.onClose()
                }), t.qZA(), t.TgZ(1, "div", 1)(2, "gu-vertical-space", 2)(3, "gu-heading-text", 3), t._uU(4, " Referral Status"), t.qZA()(), t.TgZ(5, "gu-vertical-space", 4)(6, "div", 5)(7, "table", 6)(8, "tr")(9, "th"), t._uU(10, "User"), t.qZA(), t.TgZ(11, "th"), t._uU(12, "GU account"), t.qZA(), t.TgZ(13, "th"), t._uU(14, "Coinbase account"), t.qZA(), t.TgZ(15, "th"), t._uU(16, "Game played"), t.qZA(), t.TgZ(17, "th"), t._uU(18, "Reward Status"), t.qZA()(), t.YNc(19, Qs, 11, 5, "tr", 7), t.qZA()()(), t._UZ(20, "div", 8), t.TgZ(21, "gu-vertical-space", 9)(22, "gu-heading-text", 3), t._uU(23, " Earnings"), t.qZA()(), t.TgZ(24, "gu-vertical-space", 9)(25, "div", 10), t._UZ(26, "div", 11), t.TgZ(27, "div", 12)(28, "div", 13)(29, "div", 14), t._uU(30), t.qZA(), t.TgZ(31, "div", 15), t._uU(32, " Worth of Eth "), t.qZA(), t.TgZ(33, "div", 16), t._uU(34, " Earned from Referrals "), t.qZA()()()()(), t.TgZ(35, "gu-vertical-space", 9)(36, "gu-paragraph-text", 17), t._uU(37, " Once a friend has completed the required steps, it will take a few days to verify everything. Your referral earnings will be payed out every 7 days "), t.qZA()(), t.TgZ(38, "gu-vertical-space", 9)(39, "gu-paragraph-text", 17)(40, "strong"), t._uU(41, "Need some help?"), t.qZA(), t._uU(42, " Reach out to us on social media! "), t.qZA()(), t.TgZ(43, "gu-vertical-space", 18)(44, "div", 19)(45, "gu-primary-hex-button", 20), t.NdJ("click", function () {
                    return R.onClose()
                }), t._uU(46, " Close Window "), t.qZA()()()()), 2 & p && (t.xp6(3), t.Q6J("responsiveSize", t.VKq(5, Vt, t.DdM(4, $s))), t.xp6(16), t.Q6J("ngForOf", R.userReferrals), t.xp6(3), t.Q6J("responsiveSize", t.VKq(8, Vt, t.DdM(7, $s))), t.xp6(8), t.hij(" $", R.totalAmount, " "))
            },
            directives: [l.sg, mo],
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:840px;text-align:center}.modal__closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;font-size:calc(var(--vh) * 2);color:#8be1e0;cursor:pointer}.modal__closeButton[_ngcontent-%COMP%]:hover{color:#f6f6f6}.referrals__modal__content[_ngcontent-%COMP%]{background:#0F1B27;box-sizing:border-box;border:2px solid #3D5A74;display:flex;flex-direction:column;padding:0 50px;align-items:center}@media only screen and (max-width: 768px){.referrals__modal__content[_ngcontent-%COMP%]{padding:0 20px;overflow-y:auto}}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-left:2px solid #0A0A0A;border-right:2px solid #0A0A0A;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center}th[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:24px;background:#1D2F41;color:#f6f6f6;padding:20px}td[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:24px;padding:10px 5px;color:#464646}tr[_ngcontent-%COMP%]{background:#F6F6F6}tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#d7d7d7}.divider__line[_ngcontent-%COMP%]{border:1px solid #1D2F41;margin:20px;width:100%}.earnings[_ngcontent-%COMP%]{display:flex;flex-direction:row}.earnings__container[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(242,242,242,.1) .67%,rgba(255,255,255,.1) 51.76%,rgba(242,242,242,.1) 100%);border:1px solid #7f7f7f;box-sizing:border-box;font-family:Unchained;font-style:normal}.earnings__shine[_ngcontent-%COMP%]{background:linear-gradient(180deg,#fff2d8 0%,#ebc98b 50.34%,#c6a052 100%);width:8px;height:60px;box-sizing:border-box}.earnings__text[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin:10px}.earnings__value[_ngcontent-%COMP%]{font-weight:700;font-size:32px;line-height:38px;text-transform:uppercase;color:#f6f6f6;padding-right:5px}.earnings__subtext[_ngcontent-%COMP%]{font-weight:700;font-size:12px;line-height:20px;text-transform:uppercase;color:#b6b6b6;padding-right:2vw}.earnings__info[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:24px;color:#f6f6f6}.socialButton[_ngcontent-%COMP%]{cursor:pointer;font-size:35px;margin:0 5px}.referrals_status_container[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width: 768px){.referrals_status_container[_ngcontent-%COMP%]{width:90vw;overflow-x:scroll}}"]
        }), k
    })(), fo = (() => {
        class k {
        }

        return k.\u0275fac = function (p) {
            return new (p || k)
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["referrals-task"]],
            inputs: {
                taskId: "taskId",
                taskTitle: "taskTitle",
                taskImage: "taskImage",
                taskDescription: "taskDescription"
            },
            decls: 13,
            vars: 4,
            consts: [[1, "taskId"], ["align", "center", "size", "x-small", "fillGradient", "gradients.gold.simple", 1, "taskId__number"], [1, "taskPicture"], ["srcset", "/assets/images/referrals/task_diamond.webp", "type", "image/webp"], ["src", "/assets/images/referrals/task_diamond.png", "alt", "GU_Task"], [1, "outerBox"], [1, "innerBox"], ["align", "center", "size", "x-small", 1, "taskTitle"], ["alt", "GU_Task", 1, "taskPicture__img", 3, "src"], ["align", "center", "fillColor", "colors.light.300", 1, "taskDescription", 3, "innerHTML"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "div", 0)(1, "gu-heading-text", 1), t._uU(2), t.qZA(), t.TgZ(3, "picture", 2), t._UZ(4, "source", 3)(5, "img", 4), t.qZA()(), t.TgZ(6, "div", 5)(7, "div", 6)(8, "gu-heading-text", 7), t._uU(9), t.qZA(), t.TgZ(10, "picture", 2), t._UZ(11, "img", 8), t.qZA(), t._UZ(12, "gu-paragraph-text", 9), t.qZA()()), 2 & p && (t.xp6(2), t.hij(" ", R.taskId, " "), t.xp6(7), t.hij(" ", R.taskTitle, " "), t.xp6(2), t.Q6J("src", R.taskImage, t.LSH), t.xp6(1), t.Q6J("innerHTML", R.taskDescription, t.oJD))
            },
            styles: ["[_nghost-%COMP%]{background-color:#0f1b27;display:block;min-height:300px;position:relative;width:300px;border:2px solid #0F1B27;box-sizing:border-box;margin:20px}.outerBox[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c6a052 2.93%,#ebc98b 25.01%,#fff2d8 50.44%,#ebc98b 74.21%,#c6a052 96.95%);box-shadow:0 2px 5px #0000004d;height:100%;width:100%;padding:2px}.innerBox[_ngcontent-%COMP%]{width:100%;height:100%;background:#0F1B27;display:flex;flex-direction:column}.taskId[_ngcontent-%COMP%]{position:absolute;left:50%;top:-32px;transform:translate(-50%)}.taskId__number[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);top:25%}.taskTitle[_ngcontent-%COMP%]{padding:10px;margin-top:30px}.taskPicture__img[_ngcontent-%COMP%]{border-top:1px solid #979797;border-bottom:1px solid #979797;width:100%}.taskDescription[_ngcontent-%COMP%]{padding:8px 10px;font-size:15px}"]
        }), k
    })(), ko = (() => {
        class k {
            constructor(p, R) {
                this.analyticsService = p, this.copyService = R
            }

            ngOnInit() {
                switch (this.socialMedia) {
                    case"facebook":
                        this.iconLigature = "social_facebook", this.title = "Facebook";
                        break;
                    case"twitter":
                        this.iconLigature = "social_twitter", this.title = "Twitter";
                        break;
                    default:
                        this.iconLigature = "action_duplicate", this.title = "Copy Message"
                }
            }

            shareLink() {
                switch (this.socialMedia) {
                    case"facebook":
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.referralLink}&quote=${this.referralCopy}`, "_blank");
                        break;
                    case"twitter":
                        window.open(`https://twitter.com/intent/tweet?text=${this.referralCopy}&url=${this.referralLink}`, "_blank");
                        break;
                    default:
                        this.copyLink()
                }
            }

            copyLink() {
                this.copyService.copyText(this.referralCopy + this.referralLink), this.title = "Link Copied", setTimeout(() => {
                    this.title = "Copy Message"
                }, 2e3)
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(ut.jt), t.Y36(ut.tX))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["share-button"]],
            inputs: {socialMedia: "socialMedia", referralLink: "referralLink", referralCopy: "referralCopy"},
            decls: 4,
            vars: 2,
            consts: [[1, "shareButton", 3, "click"], [1, "shareButton__icon", 3, "iconLigature"], ["size", "2x-small", 1, "shareButton__shareText"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "button", 0), t.NdJ("click", function () {
                    return R.shareLink()
                }), t._UZ(1, "gu-icon", 1), t.TgZ(2, "gu-heading-text", 2), t._uU(3), t.qZA()()), 2 & p && (t.xp6(1), t.Q6J("iconLigature", R.iconLigature), t.xp6(2), t.hij(" ", R.title, " "))
            },
            styles: ["[_nghost-%COMP%]{margin:10px 10px 10px 0}.shareButton[_ngcontent-%COMP%]{white-space:nowrap;padding:10px 15px;background:transparent;border:2px solid #8be1e0;display:flex;align-items:center;outline:none}.shareButton[_ngcontent-%COMP%]:hover{padding:12px 17px;color:#182531;border:none;background:linear-gradient(to bottom,#AFFAED 0%,#54BBCD 100%)}.shareButton[_ngcontent-%COMP%]:hover   .shareButton__shareText[_ngcontent-%COMP%]{-webkit-text-fill-color:#182531}.shareButton[_ngcontent-%COMP%]:hover   .shareButton__icon[_ngcontent-%COMP%]{-webkit-text-fill-color:black}@media only screen and (max-width: 768px){.shareButton[_ngcontent-%COMP%]{padding:10px}}.shareButton__icon[_ngcontent-%COMP%]{-webkit-text-fill-color:#8be1e0;font-size:calc(var(--vh) * 2.5);margin-right:calc(var(--vw) * .5);display:inline-flex;align-items:flex-start}.shareButton__icon[_ngcontent-%COMP%]:hover{-webkit-text-fill-color:black}@media only screen and (max-width: 768px){.shareButton__icon[_ngcontent-%COMP%]{margin-right:0}}.shareButton__shareText[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#affaed 0%,#8be1e0 50%,#54bbcd 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}@media only screen and (max-width: 768px){.shareButton__shareText[_ngcontent-%COMP%]{display:none}}"]
        }), k
    })();

    function Qt(k, V) {
        if (1 & k && (t.TgZ(0, "option", 3), t._uU(1), t.qZA()), 2 & k) {
            const p = V.$implicit;
            t.Q6J("ngValue", p), t.xp6(1), t.Oqu(p)
        }
    }

    function Rt(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "form", 1)(1, "select", 2), t.NdJ("ngModelChange", function (q) {
                return t.CHM(p), t.oxw().updateWallet(q)
            })("ngModelChange", function (q) {
                return t.CHM(p), t.oxw().selectedWallet = q
            }), t.TgZ(2, "option", 3), t._uU(3, "Please select a wallet"), t.qZA(), t.YNc(4, Qt, 2, 2, "option", 4), t.qZA()()
        }
        if (2 & k) {
            const p = t.oxw();
            t.xp6(1), t.Q6J("ngModel", p.selectedWallet), t.xp6(1), t.Q6J("ngValue", null), t.xp6(2), t.Q6J("ngForOf", p.playerWallets)
        }
    }

    function vo(k, V) {
        1 & k && (t.TgZ(0, "div", 1)(1, "div", 5), t._uU(2, " You don't have a wallet linked. "), t.qZA(), t.TgZ(3, "a", 6), t._uU(4, "Link my wallet"), t.qZA()())
    }

    let bo = (() => {
        class k {
            constructor() {
                this.walletSelected = new t.vpe
            }

            updateWallet(p) {
                this.selectedWallet = p, this.walletSelected.emit(this.selectedWallet)
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["wallet-settings"]],
            inputs: {playerWallets: "playerWallets", selectedWallet: "selectedWallet"},
            outputs: {walletSelected: "walletSelected"},
            decls: 2,
            vars: 2,
            consts: [["class", "settings", 4, "ngIf"], [1, "settings"], ["name", "selectedWallet", "id", "sel1", 1, "settings__select", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "settings__label"], ["href", "https://www.godsunchained.com/?linkwallet=true", 1, "settings__cta"]],
            template: function (p, R) {
                1 & p && (t.YNc(0, Rt, 5, 3, "form", 0), t.YNc(1, vo, 5, 0, "div", 0)), 2 & p && (t.Q6J("ngIf", R.playerWallets && R.playerWallets.length > 0), t.xp6(1), t.Q6J("ngIf", !R.playerWallets || 0 === R.playerWallets.length))
            },
            directives: [l.O5, a._Y, a.JL, a.F, a.EJ, a.JJ, a.On, a.YN, a.Kr, l.sg],
            styles: [".settings__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{line-height:1.5}.settings__select[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}[_nghost-%COMP%]{display:block}.settings[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:100%;margin:auto}.settings__label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3)}.settings__select[_ngcontent-%COMP%]{color:#fff;font-size:16px;line-height:24px;width:100%;display:flex;align-items:center;background:#0F1B27;border:1px solid #3D5A74;box-sizing:border-box;border-radius:2px;padding:7px;margin-top:calc(var(--vh) * .65)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settings__cta[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65);color:#affaed}"]
        }), k
    })(), Yt = (() => {
        class k {
            constructor() {
            }

            ngOnInit() {
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["referrals-card-back"]],
            decls: 16,
            vars: 0,
            consts: [[1, "earnTogether__sideFigure"], [1, "earnTogether__figure"], ["srcset", "/assets/images/referrals/card_bg.webp", "type", "image/webp"], ["src", "/assets/images/referrals/card_bg.png", "alt", "", 1, "stackedCard__top"], [1, "stackedCard__lower", "stackedCard__lower__first"], [1, "stackedCard__lower", "stackedCard__lower__second"], [1, "earnTogether__cardContent"], ["top", "medium", "bottom", "large"], ["iconLigature", "friends_helmet", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", 1, "earnTogether__icon"], [1, "rewardsBlock__text", "rewardsBlock__totalValue"], ["top", "large", "bottom", "medium"], ["src", "/assets/images/referrals/gu-divder-small.svg", 1, "tasks__divider"], ["fillColor", "colors.light.100", 2, "padding", "0 40px"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "div", 0)(1, "figure", 1)(2, "picture"), t._UZ(3, "source", 2)(4, "img", 3), t.qZA(), t._UZ(5, "div", 4)(6, "div", 5), t.qZA(), t.TgZ(7, "div", 6)(8, "gu-vertical-space", 7), t._UZ(9, "gu-icon", 8), t.qZA(), t.TgZ(10, "div", 9), t._uU(11, " 10% "), t.qZA(), t.TgZ(12, "gu-vertical-space", 10), t._UZ(13, "img", 11), t.qZA(), t.TgZ(14, "gu-paragraph-text", 12), t._uU(15, " of referrals money spent added to your wallet "), t.qZA()()())
            },
            styles: ["[_nghost-%COMP%]{height:400px}.earnTogether__sideFigure[_ngcontent-%COMP%]{position:relative}.earnTogether__figure[_ngcontent-%COMP%]{min-width:300px}.earnTogether__cardContent[_ngcontent-%COMP%]{position:absolute;z-index:10;width:245px;height:360px;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;left:10%}.stackedCard__top[_ngcontent-%COMP%]{box-shadow:4px 4px 8px #0a0a0a;border:1px solid #464646;position:absolute;z-index:3}.stackedCard__lower[_ngcontent-%COMP%]{background:linear-gradient(360deg,#0f1b27 0%,#0f1b27 11.53%,#1d2f41 50.05%,#0f1b27 88.69%,#0f1b27 100%);box-shadow:4px 4px 8px #0a0a0a;border:1px solid #464646;box-sizing:border-box;position:absolute;height:360px;width:240px}.stackedCard__lower__first[_ngcontent-%COMP%]{left:30px;top:15px;z-index:2}.stackedCard__lower__second[_ngcontent-%COMP%]{left:25px;top:25px;z-index:1}.earnTogether__icon[_ngcontent-%COMP%]{font-size:90px}.rewardsBlock__text[_ngcontent-%COMP%]{font-family:Unchained;font-style:normal;font-weight:700;text-transform:uppercase}.rewardsBlock__totalValue[_ngcontent-%COMP%]{font-size:43px;line-height:30px;color:#f6f6f6}.rewardsBlock__totalValue__currency[_ngcontent-%COMP%]{font-size:24px;line-height:29px;text-align:center;color:#d7d7d7}.tasks__divider[_ngcontent-%COMP%]{width:100%}"]
        }), k
    })();

    function Ht(k, V) {
        if (1 & k && (t.ynx(0), t._UZ(1, "referrals-task", 30), t.BQk()), 2 & k) {
            const p = V.$implicit;
            t.xp6(1), t.Q6J("taskId", p.taskId)("taskTitle", p.taskTitle)("taskDescription", p.taskDescription)("taskImage", p.taskImage)
        }
    }

    function Ys(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "section", 31)(1, "figure", 32)(2, "picture"), t._UZ(3, "source", 33)(4, "img", 34), t.qZA()(), t.TgZ(5, "div", 35)(6, "gu-vertical-space", 36)(7, "div", 37), t._uU(8, " Share the below link with your friends "), t.qZA()(), t.TgZ(9, "div", 38), t._uU(10), t.TgZ(11, "strong"), t._uU(12), t.qZA(), t._uU(13, " on the website here "), t.TgZ(14, "span", 39), t._uU(15), t.qZA()(), t.TgZ(16, "div", 40), t._UZ(17, "share-button", 41)(18, "share-button", 42)(19, "share-button", 42), t.qZA(), t.TgZ(20, "gu-vertical-space", 43), t._UZ(21, "div", 44), t.qZA(), t.TgZ(22, "gu-vertical-space", 45)(23, "gu-paragraph-text", 46), t._uU(24, " Select the wallet you want your rewards to go to "), t.qZA()(), t.TgZ(25, "wallet-settings", 47), t.NdJ("walletSelected", function (q) {
                return t.CHM(p), t.oxw().updateWallet(q)
            }), t.qZA()()()
        }
        if (2 & k) {
            const p = t.oxw();
            t.xp6(10), t.hij(" ", p.referralCopy, " "), t.xp6(2), t.Oqu(p.referralCode), t.xp6(3), t.Oqu(p.referralLink), t.xp6(2), t.Q6J("referralLink", p.referralLink)("referralCopy", p.shareCopy), t.xp6(1), t.Q6J("referralLink", p.referralLink)("referralCopy", p.shareCopy)("socialMedia", "facebook"), t.xp6(1), t.Q6J("referralLink", p.referralLink)("referralCopy", p.shareCopy)("socialMedia", "twitter"), t.xp6(6), t.Q6J("playerWallets", p.playerWallets)("selectedWallet", p.selectedWallet)
        }
    }

    function ns(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "div", 48)(1, "gu-primary-hex-button", 49), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().signIn()
            }), t._uU(2, " Sign in to begin "), t.qZA()()
        }
    }

    function Js(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "div", 48)(1, "gu-primary-hex-button", 49), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().signIn()
            }), t._uU(2, " Sign in to begin "), t.qZA()()
        }
    }

    function Ts(k, V) {
        if (1 & k) {
            const p = t.EpF();
            t.TgZ(0, "div", 48)(1, "gu-primary-hex-button", 50), t.NdJ("click", function () {
                return t.CHM(p), t.oxw().copyShareCode()
            }), t._uU(2, " Copy share Code "), t.qZA()()
        }
    }

    const is = function () {
        return {breakpoint: "small", size: "large"}
    }, Jt = function (k) {
        return [k]
    }, Ft = function () {
        return {breakpoint: "small", size: "medium"}
    };
    let Xs = (() => {
        class k {
            constructor(p, R, q, f, D, m) {
                this.authService = p, this.cerberusModalService = R, this.router = q, this.analyticsService = f, this.copyService = D, this.referralService = m, this.selectedWallet = null, this.unsubscribe = new Ut.xQ, this.referralCopy = "If you're looking for the next game to play, Gods Unchained is a great game that you should check out. Sign up using with my referral code: "
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            createReferralCode(p) {
                this.referralService.createReferralCode(p).subscribe(R => {
                    this.referralCode = R.code, this.selectedWallet = R.referral_payout_address, this.referralLink = R.result, this.shareCopy = `${this.referralCopy}${this.referralCode} on the website here `
                })
            }

            ngOnInit() {
                this.getWallets(), this.referralTasks = this.getTasks(), this.userId = this.authService.getUserId(), this.isUserSignedIn = !!this.authService.getUserId(), this.authService.account$.pipe((0, dt.R)(this.unsubscribe), (0, Ms.h)(p => !!p), (0, $.q)(1)).subscribe(p => {
                    this.isUserSignedIn = !!p, this.userId = this.isUserSignedIn ? this.authService.getUserId() : 0, this.createReferralCode(this.userId)
                })
            }

            copyShareCode() {
                this.copyService.copyText(`${this.referralCopy}${this.referralCode} on the website here ${this.referralLink}`)
            }

            signIn() {
                this.router.navigate(["/account/login"], {queryParams: {return: b.CF.J.learn.children.referrals.path}})
            }

            checkReferralsStatus() {
                this.cerberusModalService.open(_o, {
                    centered: !0,
                    scrollable: !0
                }).componentInstance.userId = this.userId
            }

            getWallets() {
                this.authService.account$.pipe((0, Ms.h)(p => !!p), (0, Wt.U)(p => p.addresses)).subscribe(p => {
                    this.playerWallets = p.filter(R => R.imx_linked).map(R => R.address)
                })
            }

            updateWallet(p) {
                this.selectedWallet = p, this.referralService.updatePayoutAddress(this.userId, p).subscribe(R => console.log(R))
            }

            getTasks() {
                return [{
                    taskId: 1,
                    taskTitle: "INVITE friends",
                    taskDescription: "Send the link below to a friend or post it to your social channels",
                    taskImage: "/assets/images/referrals/invite_friends.png"
                }, {
                    taskId: 2,
                    taskTitle: "Track Progress",
                    taskDescription: "The person referred buys any Divine Order card packs",
                    taskImage: "/assets/images/referrals/track_progress.png"
                }, {
                    taskId: 3,
                    taskTitle: "Earn Rewards",
                    taskDescription: "Receive 10% of the money they spend!",
                    taskImage: "/assets/images/referrals/earn_rewards.png"
                }]
            }
        }

        return k.\u0275fac = function (p) {
            return new (p || k)(t.Y36(r.mI), t.Y36(St.Qz), t.Y36(zt.F0), t.Y36(ut.jt), t.Y36(ut.tX), t.Y36(ut.C_))
        }, k.\u0275cmp = t.Xpm({
            type: k,
            selectors: [["cerberus-referrals-route"]],
            decls: 62,
            vars: 13,
            consts: [[1, "intro"], ["top", "5x-large"], ["align", "center", "fillColor", "colors.dark.900", "size", "small", 3, "responsiveSize"], ["top", "large"], ["align", "center", "fillColor", "colors.gunmetal.500", "size", "medium", 1, "subTitle"], ["top", "small"], ["align", "center", "fillColor", "colors.dark.700"], [1, "theMoreYouPurchase"], [1, "steps"], ["top", "2x-large"], [1, "referralSteps"], [4, "ngFor", "ngForOf"], ["class", "share", 4, "ngIf"], ["top", "medium", "bottom", "large"], ["class", "signInToBegin", 4, "ngIf"], [1, "rewards"], ["top", "large", "both", "medium"], ["src", "/assets/images/referrals/tasks_divider.svg", 1, "tasks__divider"], [1, "rewards__container"], [1, "cardBack__container"], ["align", "left", "fillColor", "colors.dark.900", "size", "x-small", 3, "responsiveSize"], ["top", "small", "bottom", "large"], ["align", "left", "fillColor", "colors.gunmetal.500", "fontWeight", "bold", "size", "5x-small"], ["fillColor", "colors.gunmetal.900", "kind", "4x-small"], ["fillColor", "colors.gunmetal.900"], ["top", "small", "bottom", "medium"], ["srcset", "/assets/images/misc-art/misc-art--wizard-with-key.webp", "type", "image/webp"], ["srcset", "/assets/images/misc-art/misc-art--wizard-with-key.jpg", "type", "image/jpg"], ["src", "/assets/images/misc-art/misc-art--wizard-with-key.jpg"], [1, "innerFooter"], [3, "taskId", "taskTitle", "taskDescription", "taskImage"], [1, "share"], [1, "share__figure"], ["srcset", "/assets/images/misc-art/x2_brand_visual.webp", "type", "image/webp"], ["src", "/assets/images/misc-art/x2_brand_visual.png", 1, "share__img"], [1, "share__content"], ["bottom", "medium"], [1, "share__socialMedia__title"], [1, "share__socialMedia__text"], [1, "share__socialMedia__text__Link"], [1, "share__socialMedia__buttons"], [3, "referralLink", "referralCopy"], [3, "referralLink", "referralCopy", "socialMedia"], ["top", "large", "bottom", "large", 2, "width", "100%"], [1, "share__socialMedia__divider__line"], ["top", "large", "bottom", "medium"], ["fillColor", "colors.light.100"], [3, "playerWallets", "selectedWallet", "walletSelected"], [1, "signInToBegin"], ["type", "primary", "size", "large", 2, "padding", "0 25px", 3, "click"], ["type", "primary", "size", "large", 3, "click"]],
            template: function (p, R) {
                1 & p && (t.TgZ(0, "div")(1, "section", 0)(2, "gu-vertical-space", 1)(3, "gu-heading-text", 2), t._uU(4, " Money Spent Is Money Earned "), t.qZA()(), t.TgZ(5, "gu-vertical-space", 3)(6, "gu-paragraph-text", 4), t._uU(7, " Mortals. Together. Strong. "), t.qZA()(), t.TgZ(8, "gu-vertical-space", 5)(9, "gu-paragraph-text", 6)(10, "div", 7), t._uU(11, " Put down your axe and extend a helping hand to your fellow mortal. By inviting friends who make purchases, you\u2019ll receive great rewards! "), t.qZA()()()(), t.TgZ(12, "section", 8)(13, "gu-vertical-space", 9)(14, "div", 10), t.YNc(15, Ht, 2, 4, "ng-container", 11), t.qZA()()(), t.YNc(16, Ys, 26, 13, "section", 12), t.TgZ(17, "section")(18, "gu-vertical-space", 13), t.YNc(19, ns, 3, 0, "div", 14), t.qZA()(), t.TgZ(20, "section", 15)(21, "gu-vertical-space", 16), t._UZ(22, "img", 17), t.qZA(), t.TgZ(23, "div", 18)(24, "div", 19), t._UZ(25, "referrals-card-back"), t.qZA(), t.TgZ(26, "div")(27, "gu-heading-text", 20), t._uU(28, " Earn Together "), t.qZA(), t.TgZ(29, "gu-vertical-space", 21)(30, "gu-paragraph-text", 22), t._uU(31, " Receive 10% of the money spent by the people you refer! "), t.qZA()(), t.TgZ(32, "gu-paragraph-text", 23)(33, "strong"), t._uU(34, "People you refer need to:"), t.qZA(), t.TgZ(35, "ol")(36, "li"), t._uU(37, "Create a Gods Unchained account"), t.qZA(), t.TgZ(38, "li"), t._uU(39, "Purchase any Divine Order Packs and/or Chests"), t.qZA(), t.TgZ(40, "li"), t._uU(41, "Have a valid wallet linked to Immutable X"), t.qZA()()(), t.TgZ(42, "gu-paragraph-text", 24), t._uU(43, " There is "), t.TgZ(44, "strong"), t._uU(45, "no limit to how many friends you can invite"), t.qZA(), t._uU(46, ", so send your unique codes far and wide. "), t.qZA(), t.TgZ(47, "gu-paragraph-text", 24), t._uU(48, " The processing of referral payments will take place every 14 days. At these intervals any referral payouts due will be calculated and payed out for all purchases made in the previous cycle. "), t.TgZ(49, "strong"), t._uU(50, "Payment will be made in ETH"), t.qZA(), t._uU(51, " directly to your selected Immutable X linked wallet. "), t.qZA(), t._UZ(52, "gu-vertical-space", 13), t.qZA()()(), t.TgZ(53, "gu-vertical-space", 25)(54, "div"), t.YNc(55, Js, 3, 0, "div", 14), t.YNc(56, Ts, 3, 0, "div", 14), t.qZA()()(), t.TgZ(57, "picture"), t._UZ(58, "source", 26)(59, "source", 27)(60, "img", 28), t.qZA(), t._UZ(61, "section", 29)), 2 & p && (t.xp6(3), t.Q6J("responsiveSize", t.VKq(8, Jt, t.DdM(7, is))), t.xp6(12), t.Q6J("ngForOf", R.referralTasks), t.xp6(1), t.Q6J("ngIf", R.isUserSignedIn), t.xp6(3), t.Q6J("ngIf", !R.isUserSignedIn), t.xp6(8), t.Q6J("responsiveSize", t.VKq(11, Jt, t.DdM(10, Ft))), t.xp6(28), t.Q6J("ngIf", !R.isUserSignedIn), t.xp6(1), t.Q6J("ngIf", R.isUserSignedIn))
            },
            directives: [l.sg, fo, l.O5, ko, bo, Yt],
            styles: [".share__socialMedia__title[_ngcontent-%COMP%], .subTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.share__socialMedia__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}[_nghost-%COMP%]{overflow-y:auto;background-color:#f6f6f6}a[_ngcontent-%COMP%]{color:#000}.subTitle[_ngcontent-%COMP%]{font-weight:700;line-height:28px}.earnTogether[_ngcontent-%COMP%]{display:flex;flex-direction:row;position:relative;max-width:960px;padding:20px}@media only screen and (max-width: 768px){.earnTogether[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:column-reverse;justify-content:center;align-items:center}}.tasks__divider[_ngcontent-%COMP%]{width:100%}.referralSteps[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;margin:10px}.signInToBegin[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column}.theMoreYouPurchase[_ngcontent-%COMP%]{margin:0 auto;max-width:566px;padding:10px}[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;z-index:1;display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%] > picture[_ngcontent-%COMP%]{align-items:center;bottom:0;display:flex;justify-content:center;left:0;overflow:hidden;position:absolute;right:0;top:0}[_nghost-%COMP%] > picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center top}.earnTogether__text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.innerFooter[_ngcontent-%COMP%]{background:#0A0A0A;height:40px;z-index:1;margin-top:-24px;position:relative;clip-path:polygon(0% 0%,calc(50% - 140px) 0%,calc(50% - 124px) 22px,calc(50% + 124px) 22px,calc(50% + 140px) 0%,100% 0%,100% 100%,0% 100%)}.share[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;border-top:1px solid #0A0A0A;border-bottom:1px solid #0A0A0A;flex-wrap:wrap;justify-content:center;align-items:center;background:#0F1B27}@media only screen and (max-width: 768px){.share[_ngcontent-%COMP%]{display:block}}.share__content[_ngcontent-%COMP%]{flex:1;background:#0F1B27;display:flex;flex-direction:column;padding:40px}@media only screen and (max-width: 768px){.share__content[_ngcontent-%COMP%]{align-items:center;text-align:center}}.share__figure[_ngcontent-%COMP%]{flex:1;margin:0;line-height:.5}.share__img[_ngcontent-%COMP%]{width:100%;object-fit:cover;object-position:center center;height:470px}@media only screen and (max-width: 768px){.share__img[_ngcontent-%COMP%]{height:148px}}.share__socialMedia__title[_ngcontent-%COMP%]{font-weight:700;color:#f6f6f6}.share__socialMedia__text[_ngcontent-%COMP%]{font-size:16px;text-align:left;color:#b6b6b6;border:2px solid #3D5A74;box-sizing:border-box;padding:15px;background:#1D2F41}.share__socialMedia__text__Link[_ngcontent-%COMP%]{color:#f6f6f6}.share__socialMedia__buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:10px 10px 10px 0}.share__socialMedia__divider__line[_ngcontent-%COMP%]{border:1px solid #1D2F41;width:100%}.referral_status_btn[_ngcontent-%COMP%]{width:200px;margin:10px 0;padding:20px}.rewards[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{list-style:inside decimal;padding-left:0;margin-block:0}.rewards[_ngcontent-%COMP%]   gu-paragraph-text[_ngcontent-%COMP%]{margin-bottom:32px}.rewards__container[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;max-width:960px;margin:0 20px}.cardBack__container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.cardBack__container[_ngcontent-%COMP%] > referrals-card-back[_ngcontent-%COMP%]{margin-right:-80px}@media screen and (min-width: 768px){.rewards__container[_ngcontent-%COMP%]{flex-direction:row}.cardBack__container[_ngcontent-%COMP%]{margin-bottom:0}.cardBack__container[_ngcontent-%COMP%] > referrals-card-back[_ngcontent-%COMP%]{margin-right:-40px}}@media screen and (min-width: 960px){.cardBack__container[_ngcontent-%COMP%] > referrals-card-back[_ngcontent-%COMP%]{margin-right:0}}"]
        }), k
    })();
    var wt = s(37371);
    s(39765)
}, 46313
:
se => {
    function U(s) {
        var l = new Error("Cannot find module '" + s + "'");
        throw l.code = "MODULE_NOT_FOUND", l
    }

    U.keys = () => [], U.resolve = U, U.id = 46313, se.exports = U
}, 88677
:
() => {
}, 52005
:
() => {
}, 9327
:
() => {
}, 62808
:
() => {
}, 82169
:
() => {
}, 61860
:
() => {
}, 81393
:
() => {
}, 50868
:
() => {
}, 42803
:
() => {
}, 67778
:
() => {
}, 61633
:
() => {
}, 16572
:
() => {
}, 46601
:
() => {
}, 71922
:
() => {
}, 2363
:
() => {
}, 96419
:
() => {
}, 56353
:
() => {
}, 85568
:
() => {
}, 53396
:
() => {
}, 68587
:
() => {
}, 37957
:
() => {
}, 29120
:
() => {
}, 46586
:
() => {
}, 6567
:
() => {
}, 47165
:
() => {
}, 69862
:
() => {
}, 40964
:
() => {
}, 84701
:
() => {
}, 27966
:
() => {
}, 46479
:
() => {
}, 1189
:
() => {
}, 2243
:
() => {
}, 52293
:
() => {
}, 58678
:
() => {
}, 92916
:
se => {
    "use strict";
    se.exports = JSON.parse('{"contractName":"CappedVault","abi":[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"total","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"limit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}],"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{"1":"0x91b9d2835ad914bc1dcfe09bd1816febd04fd689"},"schemaVersion":"3.0.16","updatedAt":"2019-09-18T05:50:16.377Z"}')
}, 45861
:
se => {
    "use strict";
    se.exports = JSON.parse('{"contractName":"Chest","abi":[{"constant":true,"inputs":[],"name":"sold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"packType","outputs":[{"internalType":"enum Pack.Type","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"processor","outputs":[{"internalType":"contract IProcessor","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pack","outputs":[{"internalType":"contract IPack","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tradeable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IPack","name":"_pack","type":"address"},{"internalType":"enum Pack.Type","name":"_pt","type":"uint8"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"contract IProcessor","name":"_processor","type":"address"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"sym","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"paymentID","type":"uint256"}],"name":"ChestsPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"purchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"purchaseFor","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"open","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"openFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"makeTradeable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"compiler":{"name":"solc","version":"0.5.11+commit.c082d0b4.Emscripten.clang","optimizer":false,"runs":200},"networks":{},"schemaVersion":"2.2.3","updatedAt":"2019-10-15T03:24:19.434Z"}')
}
},
se => {
    se.O(0, [736], () => se(se.s = 97328)), se.O()
}
])
;