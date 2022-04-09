// noinspection BadExpressionStatementJS,JSStringConcatenationToES6Template
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
    63764: (q, R, s) => {
        "use strict";
        s.d(R, {S: () => _});
        var l = s(5e3), a = s(69808);
        let _ = (() => {
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
    }, 531: (q, R, s) => {
        "use strict";
        s.d(R, {$$: () => l, ZW: () => u, u4: () => n, VY: () => e});

        class l {
            constructor(v, C, w, I, k = []) {
                this.id = v, this.name = C, this.god = w, this.items = k, this.deck_type = I
            }
        }

        class u {
            constructor(v, C, w = null) {
                this.deck = v, this.type = C, this.cards = w
            }
        }

        var n = (() => {
            return (r = n || (n = {}))[r.Add = 0] = "Add", r[r.Remove = 1] = "Remove", r[r.Change = 2] = "Change", r[r.CardLimit = 3] = "CardLimit", r[r.DeckLimit = 4] = "DeckLimit", r[r.NoActiveDeck = 5] = "NoActiveDeck", r[r.StatChange = 6] = "StatChange", n;
            var r
        })();

        class e {
            constructor(v, C = null, w = !1) {
                this.deckSelect = v, this.gameModeID = C, this.forAI = w
            }
        }
    }, 57674: (q, R, s) => {
        "use strict";
        s.d(R, {PE: () => a});
        var a = (() => {
            return (u = a || (a = {}))[u.AscID = 0] = "AscID", u[u.DescID = 1] = "DescID", u[u.AscQuality = 2] = "AscQuality", u[u.DescQuality = 3] = "DescQuality", u[u.AscMana = 4] = "AscMana", u[u.DescMana = 5] = "DescMana", u[u.AscScarcity = 6] = "AscScarcity", u[u.AscHealth = 7] = "AscHealth", u[u.DescHealth = 8] = "DescHealth", u[u.AscAttack = 9] = "AscAttack", u[u.DescAttack = 10] = "DescAttack", u[u.AscTribe = 11] = "AscTribe", u[u.DescTribe = 12] = "DescTribe", u[u.AscRarity = 13] = "AscRarity", u[u.DescRarity = 14] = "DescRarity", u[u.AscType = 15] = "AscType", u[u.DescType = 16] = "DescType", u[u.AscGod = 17] = "AscGod", u[u.DescGod = 18] = "DescGod", u[u.AscSet = 19] = "AscSet", u[u.DescSet = 20] = "DescSet", a;
            var u
        })()
    }, 33403: (q, R, s) => {
        "use strict";
        s.d(R, {tO: () => l, zy: () => a, B_: () => _, Gn: () => t});
        var l = (() => {
            return (n = l || (l = {}))[n.SOLO = 0] = "SOLO", n[n.CONSTRUCTED = 1] = "CONSTRUCTED", n[n.DIRECT_CHALLENGE = 5] = "DIRECT_CHALLENGE", n[n.SEALED_DECK = 8] = "SEALED_DECK", n[n.TUTORIAL = 6] = "TUTORIAL", l;
            var n
        })(), a = (() => {
            return (n = a || (a = {}))[n.WEEKEND_EVENT = 2] = "WEEKEND_EVENT", a;
            var n
        })(), _ = (() => {
            return (n = _ || (_ = {}))[n.SOLO = 0] = "SOLO", n[n.QUICK_CONSTRUCTED = 2] = "QUICK_CONSTRUCTED", n[n.DIRECT_CHALLENGE = 6] = "DIRECT_CHALLENGE", n[n.QUICK_SEALED = 10] = "QUICK_SEALED", n[n.RANKED_CONSTRUCTED = 13] = "RANKED_CONSTRUCTED", n[n.PAID_GENESIS_SEALED = 14] = "PAID_GENESIS_SEALED", n[n.FREE_4_ALL_SEALED = 15] = "FREE_4_ALL_SEALED", n[n.SERVER_SOLO = 20] = "SERVER_SOLO", n[n.SEALED_DECK = 7] = "SEALED_DECK", n[n.TUTORIAL = 101] = "TUTORIAL", _;
            var n
        })(), t = (() => {
            return (n = t || (t = {}))[n.CARDS = 0] = "CARDS", n[n.LEVEL = 1] = "LEVEL", n[n.UPDATE = 2] = "UPDATE", n[n.LOCKED = 3] = "LOCKED", n[n.ASSETS_UPDATE = 4] = "ASSETS_UPDATE", t;
            var n
        })()
    }, 98009: (q, R, s) => {
        "use strict";
        s.d(R, {D: () => x});
        var l = s(73307), a = s(591), _ = s(36053), i = s(5254), t = s(21086), d = s(92198), u = s(72986), n = s(21406),
            e = s(24850), r = s(40963), v = s(2994), C = s(27221), w = s(87545), I = s(49002), k = s(531), P = s(5e3),
            $ = s(44416);
        s(63411);
        let x = (() => {
            class O {
                constructor(m, y, D, Q, ie, ue) {
                    this.utils = m, this.gameApiService = y, this.deckApi = D, this.authService = Q, this.cardsService = ie, this.ffService = ue, this._userDecks = new a.X([]), this._starterDecks = new a.X([]), this._activeDeck = new a.X(null), this._activeDeckChange = new a.X(new k.ZW(null, k.u4.NoActiveDeck)), this._deckSelectMode = new a.X(new k.VY(!1)), this.deckSizeLimit = 30, this.dataStore = {
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

                _emitActiveDeck(m) {
                    const y = m.type;
                    (y == k.u4.Add || y == k.u4.Remove) && (this.dataStore.activeDeckModified = !0), this._activeDeckChange.next(m)
                }

                loadUserDecks() {
                    return this.loadDecksApi()
                }

                fetchStarterDecks() {
                    (0, _.aj)([this.loadStarterDecksApi(), this.cardsService.inventory$, this.cardsService.protoCards$]).pipe((0, d.h)(([m, y, D]) => Object.keys(y).length > 0 && D.size > 0), (0, u.q)(1), (0, n.b)(([m, y, D]) => (0, i.D)(m).pipe((0, e.U)(Q => ({
                        deck: Q,
                        protoCards: D,
                        inventory: y
                    })))), (0, e.U)(m => this.convertToDeckStarter(m.deck, m.inventory, m.protoCards)), (0, r.q)(), (0, v.b)(m => {
                        this.dataStore.starterDecks = m, this._emitStarterDecks()
                    }), (0, C.K)(m => (0, t.of)(m))).subscribe()
                }

                loadStarterDecksApi() {
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, w.w)(m => m ? this.deckApi.get("deck") : this.gameApiService.get("/deck?caller=client")), (0, e.U)(m => m.filter(y => y.assets.length > 0)))
                }

                fetchDecks() {
                    (0, _.aj)([this.loadDecksApi(), this.cardsService.inventory$, this.cardsService.protoCards$]).pipe((0, d.h)(([m, y, D]) => Object.keys(y).length > 0 && D.size > 0), (0, u.q)(1), (0, n.b)(([m, y, D]) => (0, i.D)(m).pipe((0, e.U)(Q => ({
                        deck: Q,
                        protoCards: D,
                        inventory: y
                    })))), (0, e.U)(m => this.convertToDeck(m.deck, m.inventory, m.protoCards)), (0, r.q)(), (0, v.b)(m => {
                        this.dataStore.userDecks = m, m.length && (this.dataStore.activeDeck = m[0], this.selectActiveDeck(this.dataStore.activeDeck)), this._emitDecks()
                    }), (0, C.K)(m => (0, t.of)(m))).subscribe()
                }

                convertToDeck(m, y, D) {
                    let Q;
                    return Q = "sealed_deck" === m.deck_type ? m.protos.map((ue, he) => ({
                        id: m.ids[he],
                        proto: ue,
                        quality: 5,
                        protoCard: D.get(ue)
                    })) : this.utils.convertIdsToCards(m.ids, y, D), new k.$$(m.id, m.name, m.god, m.deck_type, Q)
                }

                convertToDeckStarter(m, y, D) {
                    const Q = this.utils.convertIdsToCards(m.assets, y, D),
                        ie = new k.$$(m.id, m.name, m.god, "starter", Q);
                    return ie.locked = !0, ie
                }

                createDeck(m) {
                    return this.createDeckApi(m).pipe((0, u.q)(1), (0, v.b)(y => {
                        this.dataStore.userDecks.push(y), this._emitDecks(), this.selectActiveDeck(this.deepCopyDeck(y))
                    }))
                }

                createDeckApi(m) {
                    const y = {
                        id: m.id,
                        name: m.name,
                        god: m.god,
                        timestamp: (new Date).getTime(),
                        ids: m.items.reduce((ie, ue) => ie.concat(ue.id), []),
                        deck_type: "common"
                    }, D = this.authService.getUserId(), Q = this.authService.getGameSessionTicket();
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, w.w)(ie => ie ? this.createDeckApiNew(y, D) : this.createDeckApiLegacy(y, D, Q)), (0, e.U)(ie => (m.id = ie, m)))
                }

                createDeckApiNew(m, y) {
                    return this.deckApi.post(`user/${y}/deck`, m)
                }

                createDeckApiLegacy(m, y, D) {
                    return this.gameApiService.post(`/account/${y}/deck?session=${D}`, m)
                }

                buildSaveDeckApi() {
                    const m = {
                        id: this.dataStore.activeDeck.id,
                        name: this.dataStore.activeDeck.name,
                        god: this.dataStore.activeDeck.god,
                        timestamp: (new Date).getTime(),
                        deck_type: this.dataStore.activeDeck.deck_type
                    };
                    return Object.assign(Object.assign({}, m), "sealed_deck" === this.dataStore.activeDeck.deck_type ? {
                        ids: this.dataStore.activeDeck.items.reduce((y, D) => y.concat(D.id), []),
                        protos: this.dataStore.activeDeck.items.reduce((y, D) => y.concat(D.proto), [])
                    } : {ids: this.dataStore.activeDeck.items.reduce((y, D) => y.concat(D.id), [])})
                }

                saveActiveDeck(m) {
                    if (!this.dataStore.activeDeckModified) return (0, t.of)(this.dataStore.activeDeck.id);
                    const y = this.buildSaveDeckApi(), D = this.authService.getUserId(),
                        Q = this.authService.getGameSessionTicket();
                    if ("starter" !== this.dataStore.activeDeck.deck_type) return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, w.w)(ie => ie ? this.deckApi.put(`user/${D}/deck/${this.dataStore.activeDeck.id}`, y) : this.gameApiService.put(`/account/${D}/deck/${this.dataStore.activeDeck.id}?session=${Q}`, y)), (0, u.q)(1), (0, v.b)(() => {
                        this.dataStore.activeDeckModified = !1;
                        const ie = this.dataStore.userDecks.find(he => he.id === this.dataStore.activeDeck.id),
                            ue = this.dataStore.userDecks.indexOf(ie);
                        this.dataStore.userDecks[ue] = this.deepCopyDeck(this.dataStore.activeDeck), this._emitDecks()
                    }));
                    if ("starter" === this.dataStore.activeDeck.deck_type) {
                        const ie = this.dataStore.starterDecks.find(ue => ue.id === this.dataStore.activeDeck.id);
                        return m && !this.decksChanged(ie, this.dataStore.activeDeck) ? (this.selectActiveDeck(ie), (0, t.of)(ie.id)) : (y.name = `${y.name} Copy`, this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, w.w)(ue => ue ? this.createDeckApiNew(y, D) : this.createDeckApiLegacy(y, D, Q)), (0, u.q)(1), (0, v.b)(ue => {
                            this.dataStore.activeDeckModified = !1;
                            const he = new k.$$(ue, y.name, y.god, "common", [...this.dataStore.activeDeck.items]);
                            this.dataStore.userDecks.push(he), this._emitDecks(), this.selectActiveDeck(he)
                        })))
                    }
                }

                decksChanged(m, y) {
                    if (m.items.length !== y.items.length) return !0;
                    let D = !1;
                    return m.items.forEach((Q, ie) => {
                        Q.id !== y.items[ie].id && (D = !0)
                    }), !!D
                }

                deleteDeck(m) {
                    this.deleteDeckApi(m).pipe((0, u.q)(1), (0, v.b)(y => {
                        this.dataStore.userDecks = this.dataStore.userDecks.filter(D => D.id !== m), this._emitDecks(), this.selectActiveDeck(null)
                    }), (0, C.K)(y => (0, t.of)(y))).subscribe()
                }

                deleteDeckApi(m) {
                    const y = this.authService.getUserId(), D = this.authService.getGameSessionTicket();
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, w.w)(Q => Q ? this.deckApi.delete(`user/${y}/deck/${m}`) : this.gameApiService.delete(`/account/${y}/deck/${m}?session=${D}`)))
                }

                loadDecksApi() {
                    const m = this.authService.getUserId();
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, w.w)(y => y ? this.deckApi.get(`user/${m}/deck`) : this.loadDecksApiLegacy(m)))
                }

                loadDecksApiLegacy(m) {
                    return this.gameApiService.get(`/account/${m}/deck`)
                }

                getDeckApi(m) {
                    const y = this.authService.getUserId();
                    return this.ffService.get(I.vU.newDeckServiceEnabled).pipe((0, w.w)(D => D ? this.deckApi.get(`user/${y}/deck/${m}`) : this.gameApiService.get(`/account/${y}/deck/${m}`)))
                }

                isDeckComplete(m) {
                    return m.global ? (0, t.of)(!0) : this.getDeckApi(m.id).pipe((0, e.U)(y => y && y.ids && y.ids.length === this.deckSizeLimit), (0, C.K)(y => (0, t.of)(!1)))
                }

                updateDeckSelectMode(m, y, D) {
                    this.dataStore.selectMode = new k.VY(m, y, D), this._deckSelectMode.next(Object.assign({}, this.dataStore).selectMode)
                }

                selectActiveDeck(m) {
                    this.dataStore.activeDeck = this.deepCopyDeck(m), this._emitActiveDeck(new k.ZW(Object.assign({}, this.dataStore).activeDeck, k.u4.Change))
                }

                selectActiveDeckById(m) {
                    const y = this.dataStore.userDecks.find(D => D.id === m);
                    !y || (this.dataStore.activeDeck = this.deepCopyDeck(y), this._emitActiveDeck(new k.ZW(Object.assign({}, this.dataStore).activeDeck, k.u4.Change)))
                }

                deepCopyDeck(m) {
                    return new k.$$(m.id, m.name, m.god, m.deck_type, [...m.items])
                }

                removeDeck(m) {
                    this.deleteDeck(m.id), m === this.dataStore.activeDeck && (this.dataStore.activeDeck = null, this._emitActiveDeck(new k.ZW(null, k.u4.NoActiveDeck))), this.dataStore.userDecks = this.dataStore.userDecks.filter(y => y !== m), this._emitDecks()
                }

                selectDeck(m, y) {
                }

                updateActiveDeckName(m) {
                    !this.dataStore.activeDeck || (this.dataStore.activeDeck.name = m, this.dataStore.activeDeckModified = !0, this.saveActiveDeck().pipe((0, u.q)(1)).subscribe())
                }

                getDeck(m) {
                    return this.userDecks$.pipe((0, e.U)(y => y.find(D => D.id === m)))
                }

                pushToActiveDeck(m) {
                    if (this.dataStore.activeDeck.items.length < this.deckSizeLimit && m?.id) {
                        localStorage.setItem('deck-last-card-added-' + this.dataStore.activeDeck.id, m.id);
                    }
                    this.dataStore.activeDeck.items.length >= this.deckSizeLimit ? this._emitActiveDeck(new k.ZW(Object.assign({}, this.dataStore).activeDeck, k.u4.DeckLimit)) : this.canAddCardToDeck(this.dataStore.activeDeck, m).pipe((0, v.b)(y => {
                        y ? (this.dataStore.activeDeck.items = this.dataStore.activeDeck.items.concat([m]), this._emitActiveDeck(new k.ZW(Object.assign({}, this.dataStore).activeDeck, k.u4.Add, [m]))) : this._activeDeckChange.next(new k.ZW(Object.assign({}, this.dataStore).activeDeck, k.u4.CardLimit, [m]))
                    })).subscribe()
                }

                removeCardFromActiveDeck(m) {
                    localStorage.removeItem('deck-last-card-added-' + this.dataStore.activeDeck.id);
                    this.dataStore.activeDeck.items = this.dataStore.activeDeck.items.filter(y => y !== m), this._emitActiveDeck(new k.ZW(Object.assign({}, this.dataStore).activeDeck, k.u4.Remove, [m]))
                }

                removeCardsFromActiveDeck(m) {
                    localStorage.removeItem('deck-last-card-added-' + this.dataStore.activeDeck.id);
                    this.dataStore.activeDeck.items = this.dataStore.activeDeck.items.filter(y => !m.includes(y)), this._emitActiveDeck(new k.ZW(Object.assign({}, this.dataStore).activeDeck, k.u4.Remove, [...m]))
                }

                canAddCardToDeck(m, y) {
                    return "sealed_deck" === m.deck_type ? (0, t.of)(!0) : this.cardsService.getProtoCard(y.proto).pipe((0, e.U)(D => (D.god === m.god || "neutral" === D.god) && ("legendary" === D.rarity ? m.items.filter(Q => Q.proto === y.proto).length < 1 : m.items.filter(Q => Q.proto === y.proto).length < 2)))
                }

                forgeUpdate(m, y, D) {
                    this.forgeRemoveIds(m, y), this._emitDecks()
                }

                forgeRemoveIds(m, y) {
                    this.dataStore.userDecks.forEach(D => {
                        D.items = D.items.filter(Q => -1 === m.indexOf(Q.id))
                    })
                }

                generateUniqueCardId(m, y, D) {
                    return -Number(`${m}${y}${D}`)
                }
            }

            return O.\u0275fac = function (m) {
                return new (m || O)(P.LFG($.F), P.LFG(I.Ft), P.LFG(I.fN), P.LFG(l.mI), P.LFG(I.dK), P.LFG(I.ai))
            }, O.\u0275prov = P.Yz7({token: O, factory: O.\u0275fac}), O
        })()
    }, 23569: (q, R, s) => {
        "use strict";
        s.d(R, {d: () => n});
        var l = s(8929), a = s(591), _ = s(92198), i = s(24850), t = s(73307), d = s(5e3);
        s(63411);
        let n = (() => {
            class e {
                constructor(v, C) {
                    this.storage = v, this.authService = C, this.unsubscribe = new l.xQ, this.dataStore = {selectedWallet: null}, this._selectedWallet$ = new a.X(null)
                }

                ngOnDestroy() {
                    this.unsubscribe.next(), this.unsubscribe.complete()
                }

                get selectedWallet$() {
                    return this._selectedWallet$.asObservable()
                }

                get playerWallets$() {
                    return this.authService.account$.pipe((0, _.h)(v => !!v), (0, i.U)(v => v.addresses.map(C => C.address)))
                }

                get storageKey() {
                    return `gu-selected-wallet-${this.authService.getUserId()}`
                }

                fetchPlayerWallets() {
                    this.authService.fetchAccount()
                }

                obfuscateAddresses(v) {
                    if (v && 0 !== v.length) return v.map(C => `${C && C.slice(0, 6)}...`)
                }

                saveSelectedWallet(v) {
                    this.storage.set([this.storageKey], v), this.dataStore.selectedWallet = v, this._selectedWallet$.next(Object.assign({}, this.dataStore).selectedWallet)
                }

                loadSelectedWallet() {
                    const v = this.storage.get([this.storageKey]);
                    this.dataStore.selectedWallet = v, this._selectedWallet$.next(Object.assign({}, this.dataStore).selectedWallet)
                }
            }

            return e.\u0275fac = function (v) {
                return new (v || e)(d.LFG(t.qy), d.LFG(t.mI))
            }, e.\u0275prov = d.Yz7({token: e, factory: e.\u0275fac, providedIn: "root"}), e
        })()
    }, 11130: (q, R, s) => {
        "use strict";
        s.d(R, {xV: () => ae});
        var l = s(8929), a = s(591), _ = s(21086), i = s(36053), t = s(98723), d = s(41746), u = s(72986), n = s(92198),
            e = s(2994), r = s(24850), v = s(7625), C = s(61709), w = s(87545), I = s(75778), k = s(40537),
            P = s(73307), $ = s(33403), E = s(14618), x = s(69931), O = s(72224), o = s(5e3), m = s(79763),
            y = s(69340), D = s(49002), Q = s(51395), ie = s(64523), ue = s(96727);
        s(63411);

        class te {
            constructor(ye, K, Z) {
                this.name = ye, this.value = K, this.image = Z
            }
        }

        let ae = (() => {
            class J {
                constructor(K, Z, pe, ve, Pe, z, le, j) {
                    this.gameService = K, this.gameDownloadService = Z, this.storage = pe, this.gameApi = ve, this.authService = Pe, this.packService = z, this.sealedService = le, this.ngrxStore = j, this.BUFFER_TIME = 5e3, this.unsubscribe = new l.xQ, this.dataStore = {gameModes: []}, this._gameModes$ = new a.X({
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

                updateGameModeDeck(K, Z, pe = !1) {
                    this.getGameMode$(K).pipe((0, u.q)(1), (0, n.h)(ve => void 0 !== ve), (0, e.b)(ve => {
                        this.saveGameModeDeck(ve.id, pe, Z), pe ? ve.aiSelectedDeckId = Z : ve.lastSelectedDeckId = Z, this._emitGameModes()
                    })).subscribe()
                }

                updateGameModeLoadout(K, Z) {
                    this.getGameMode$(K).pipe((0, u.q)(1), (0, n.h)(pe => void 0 !== pe), (0, e.b)(pe => {
                        this.saveGameModeLoadout(pe.id, Z), pe.selectedLoadoutId = Z, this._emitGameModes()
                    })).subscribe()
                }

                getGameStats(K) {
                    return (0, _.of)({
                        game_mode_id: 1,
                        p1_id: 49,
                        p2_id: 2,
                        did_win: !0,
                        p1_stats: [new te("Wins", 103, "https://images.godsunchained.com/art/250/88.png"), new te("Losses", 8, "https://images.godsunchained.com/art/250/89.png"), new te("Damage Dealt", 7300, "https://images.godsunchained.com/art/250/90.png"), new te("Damage Taken", 1600, "https://images.godsunchained.com/art/250/91.png")],
                        p2_stats: [new te("Wins", 9001, "https://images.godsunchained.com/art/250/88.png"), new te("Losses", 0, "https://images.godsunchained.com/art/250/89.png"), new te("Damage Dealt", 999999, "https://images.godsunchained.com/art/250/90.png"), new te("Damage Taken", 0, "https://images.godsunchained.com/art/250/91.png")]
                    })
                }

                getGameModeDeck(K, Z) {
                    const pe = this.getGameModeDeckKey(K, Z);
                    return this.storage.get([pe]) || null
                }

                clearGameModeDeck(K, Z) {
                    const pe = this.getGameModeDeckKey(K, Z);
                    this.storage.delete([pe])
                }

                saveGameModeDeck(K, Z, pe) {
                    const ve = this.getGameModeDeckKey(K, Z);
                    this.storage.set([ve], pe)
                }

                getGameModeDeckKey(K, Z) {
                    return `gu-deck-${K}${Z ? "-ai" : ""}`
                }

                getGameModeLoadout(K) {
                    const Z = this.getGameModeLoadoutKey(K);
                    return this.storage.get([Z]) || null
                }

                saveGameModeLoadout(K, Z) {
                    const pe = this.getGameModeLoadoutKey(K);
                    this.storage.set([pe], Z)
                }

                getGameModeLoadoutKey(K) {
                    return `gu-loadout-${K}`
                }

                _emitGameModes(K = !1) {
                    this._gameModes$.next({gameModes: Object.assign({}, this.dataStore).gameModes, refresh: K})
                }

                getGameMode$(K) {
                    return this.gameModes$.pipe((0, r.U)(({gameModes: Z}) => Z.find(pe => pe.id === K)))
                }

                fetchGameModes(K = !1) {
                    (0, i.aj)([this.fetchPlayerGameModes$(), this.getLock$(), this.fetchPlayerRanks$()]).pipe((0, u.q)(1), (0, r.U)(([Z, pe, ve]) => Z.map(Pe => this.transformGameModes(Pe, pe, ve))), (0, e.b)(Z => {
                        for (const gm of Z) {
                          if (gm.id === 0) { // Solo
                              gm.image_url = 'https://images.godsunchained.com/art2/1024/1492.jpg';
                          }
                          if (gm.id === 101) { // Tutorial
                              gm.image_url = 'https://images.godsunchained.com/art2/1024/16.jpg';
                          }
                          if (gm.id === 6) { // Direct Challenge
                              gm.image_url = 'https://images.godsunchained.com/art2/1280/42.jpg';
                          }
                          if (gm.id === 13) { // Rank Constructed
                              gm.image_url = 'https://images.godsunchained.com/art2/1280/101305.jpg';
                          }
                        }
                        this.scheduleRefresh(Z), this.handleSealedMode(Z), this.dataStore.gameModes = Z, this._emitGameModes(K)
                    })).subscribe()
                }

                handleSealedMode(K) {
                    let Z = K.find(pe => pe.id === $.B_.SEALED_DECK);
                    !Z || this.scheduleSealedModeRefresh(Z)
                }

                scheduleSealedModeRefresh(K) {
                    const Z = Date.now(), pe = new Date(K.end_time_server).getTime(), Pe = pe + 36e5 - Z, z = pe - Z;
                    z > 0 && z < O.v && (0, t.H)(z).pipe((0, v.R)(this.unsubscribe), (0, u.q)(1)).subscribe(le => this.sealedService.fetchSealed()), Pe > 0 && Pe < O.v && (0, t.H)(Pe).pipe((0, v.R)(this.unsubscribe), (0, u.q)(1)).subscribe(le => this.sealedService.fetchSealed())
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
                    const K = this.authService.getUserId();
                    return this.gameApi.get(`/user/${K}/mode`)
                }

                fetchPlayerRanks$() {
                    const K = this.authService.getUserId();
                    return this.gameApi.get(`/user/${K}/rank`)
                }

                getLock$() {
                    let K = null;
                    return (0, i.aj)([this.gameService.currentGameContext$, this.packService.unopenedPacks$, (0, t.H)(0, 6e5)]).pipe((0, n.h)(([Z, pe]) => null != Z), (0, C.VS)(([Z, pe]) => {
                        if (K = null, pe) {
                            const ve = pe.filter(Pe => "starter" === Pe.pack_source);
                            ve && ve.length > 0 && (K = {type: $.Gn.CARDS})
                        }
                        return (0, _.of)(Z)
                    }), (0, C.VS)(Z => (0, d.$R)((0, _.of)(Z), this.gameService.getBranch$(Z.id))), (0, C.VS)(([Z, pe]) => "" === pe.name ? (K = {type: $.Gn.LOCKED}, (0, _.of)([!1, !1])) : (0, d.$R)(this.gameDownloadService.requiresUpdate(Z, pe.name), this.gameDownloadService.requiresAssetsUpdate(Z, pe.name))), (0, C.VS)(([Z, pe]) => (Z ? K = {type: $.Gn.UPDATE} : pe.length > 0 && (K = {type: $.Gn.ASSETS_UPDATE}), (0, _.of)(K))))
                }

                checkIfRequiresUpdate() {
                    return this.gameService.currentGameContext$.pipe((0, w.w)(K => (0, d.$R)((0, _.of)(K), this.gameService.getBranch(K.id))), (0, w.w)(([K, Z]) => this.gameDownloadService.requiresUpdate(K, Z)))
                }

                watchForUpdate() {
                    this.ngrxStore.select((0, x.DM)()).pipe((0, v.R)(this.unsubscribe), (0, n.h)(K => !!K), (0, n.h)(K => "completed" === K.status), (0, I.x)(), (0, e.b)(K => {
                        this.updateLocks(!0), this.ngrxStore.dispatch(new E.Tg({status: "idle", percentage: 0}))
                    })).subscribe()
                }

                watchForAssetUpdate() {
                    this.ngrxStore.select((0, x.gP)()).pipe((0, v.R)(this.unsubscribe), (0, n.h)(K => !!K), (0, n.h)(K => "completed" === K.status), (0, I.x)(), (0, e.b)(K => {
                        this.updateLocks(!0)
                    })).subscribe()
                }

                watchForPacks() {
                    this.packService.unopenedPacks$.pipe((0, v.R)(this.unsubscribe), (0, I.x)(), (0, e.b)(K => this.updateLocks())).subscribe()
                }

                updateLocks(K = !1) {
                    this.getLock$().pipe((0, u.q)(1), (0, e.b)(Z => {
                        this.dataStore.gameModes.forEach(pe => {
                            pe.lock = Z
                        })
                    }), (0, k.x)(() => this._emitGameModes(K))).subscribe()
                }

                transformGameModes(K, Z, pe) {
                    const ve = pe.find(z => z.game_mode === K.id) || null;
                    let Pe = Object.assign(Object.assign({}, K), {
                        rank: ve,
                        lock: Z,
                        type: K.properties.type,
                        lastSelectedDeckId: this.getGameModeDeck(K.id, !1),
                        aiSelectedDeckId: this.getGameModeDeck(K.id, !0),
                        end_timestamp: Date.parse(K.end_time) + 5e3,
                        selectedLoadoutId: this.getGameModeLoadout(K.id)
                    });
                    return Pe.id === $.B_.SEALED_DECK && (Pe = this.sealedService.transformSealedModeGameModeData(Pe)), Pe
                }

                scheduleRefresh(K = []) {
                    const Z = Date.now(), pe = K.filter(z => 1 === z.rotation && z.end_timestamp > Z);
                    if (0 === pe.length) return;
                    const Pe = pe.reduce((z, le) => z.end_timestamp < le.end_timestamp ? z : le).end_timestamp - Z;
                    Pe > 0 && Pe < O.v && (0, t.H)(Pe).pipe((0, v.R)(this.unsubscribe), (0, u.q)(1), (0, e.b)(z => this.fetchGameModes(!0))).subscribe()
                }

                storeUserGameModeOrderMap(K) {
                    const Z = this.authService.getUserId();
                    sessionStorage.setItem(`userGameModesOrder::${Z}`, JSON.stringify(K))
                }

                getUserGameModeOrderMap() {
                    const K = this.authService.getUserId();
                    return JSON.parse(sessionStorage.getItem(`userGameModesOrder::${K}`))
                }

                incrementGameModeCount(K, Z = 1) {
                    const pe = this.authService.getUserId(), ve = this.authService.getGameSessionTicket();
                    return this.gameApi.post(`/user/${pe}/mode?session=${ve}`, {game_mode: K, add: Z})
                }
            }

            return J.\u0275fac = function (K) {
                return new (K || J)(o.LFG(m.hM), o.LFG(y.b5), o.LFG(P.qy), o.LFG(D.Ft), o.LFG(P.mI), o.LFG(Q.F), o.LFG(ie.H), o.LFG(ue.yh))
            }, J.\u0275prov = o.Yz7({token: J, factory: J.\u0275fac, providedIn: "root"}), J
        })()
    }, 88632: (q, R, s) => {
        "use strict";
        s.d(R, {MZ: () => r});
        var l = s(591), a = s(2994), _ = s(73307), i = s(5e3), t = s(49002), d = s(79763);
        s(63411);
        let r = (() => {
            class v {
                constructor(w, I, k) {
                    this.gameApi = w, this.authService = I, this.gameService = k, this.dataStore = {extendedAccountProperties: null}, this._extendedAccountProperties$ = new l.X(null)
                }

                get extendedAccountProperties$() {
                    return this._extendedAccountProperties$.asObservable()
                }

                getAccountProperties(w, I) {
                    return (!w || !I) && (w = this.authService.getUserId(), I = this.authService.getGameSessionTicket()), this.gameApi.get(`/account/${w}/properties?session=${I}`)
                }

                _emit(w) {
                    this.dataStore.extendedAccountProperties = w, this._extendedAccountProperties$.next(Object.assign({}, this.dataStore).extendedAccountProperties)
                }

                getExtendedAccountPropertiesById(w, I) {
                    return this.gameApi.get(`/account/${w}/properties?format=extended&session=${I}`).pipe((0, a.b)(k => this._emit(k)))
                }

                getExtendedAccountProperties() {
                    const w = this.authService.getUserId(), I = this.authService.getGameSessionTicket();
                    return this.getExtendedAccountPropertiesById(w, I)
                }

                fetchExtendedAccount() {
                    this.getExtendedAccountProperties().subscribe()
                }
            }

            return v.\u0275fac = function (w) {
                return new (w || v)(i.LFG(t.Ft), i.LFG(_.mI), i.LFG(d.hM))
            }, v.\u0275prov = i.Yz7({token: v, factory: v.\u0275fac, providedIn: "root"}), v
        })()
    }, 8561: (q, R, s) => {
        "use strict";
        s.d(R, {GT: () => vt, OC: () => G, Qc: () => Me});
        var l = s(59633), a = s(8929), _ = s(591), i = s(21086), t = s(61737), d = s(98723), u = s(67876), n = s(7625),
            e = s(24850), r = s(87224), v = s(92198), C = s(87168), w = s(27221), I = s(2994), k = s(72986),
            P = s(61709), $ = s(87545), E = s(77604), x = s(44290), O = s(40537), o = s(73307), m = s(63764),
            y = s(52492), D = s(33403), Q = s(5231), ie = s(80537), ue = s(8611), he = s(5e3), W = s(40520);
        s(63411);
        let ae = (() => {
            class ke {
                constructor(T) {
                    this.auth = T, this.createServer()
                }

                respond(T, U) {
                    return -1 !== T.url.indexOf("config") ? this.getConfig(T, U) : T.url.startsWith("/session") ? this.auth.getGameSessionTicket() : null
                }

                setConfig(T) {
                    this.config = T
                }

                getConfig(T, U) {
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

            return ke.\u0275fac = function (T) {
                return new (T || ke)(he.LFG(o.mI))
            }, ke.\u0275prov = he.Yz7({token: ke, factory: ke.\u0275fac, providedIn: "root"}), ke
        })();
        var J = s(79763), ye = s(83035), K = s(88632), Z = s(66088), pe = s(47313), ve = s(11130), Pe = s(49002),
            z = s(98009);

        class Me {
            constructor(bt, T, U, c) {
                this.player = {id: bt, deck: T, collection: {id: U}}, this.opponent = c ? {deck: c} : void 0
            }
        }

        var G = (() => {
            return (ke = G || (G = {}))[ke.OUT = 0] = "OUT", ke[ke.IN = 1] = "IN", ke[ke.PROGRESSION_GAME_MODE = 2] = "PROGRESSION_GAME_MODE", ke[ke.PROGRESSION_ACCOUNT = 3] = "PROGRESSION_ACCOUNT", G;
            var ke
        })(), st = (() => {
            return (ke = st || (st = {})).DECK = "deck", ke.DECK_GLOBAL = "deck_global", ke.COLLECTION = "collection", st;
            var ke
        })();
        let vt = (() => {
            class ke {
                constructor(T, U, c, f, L, X, xe, de, Be, dt, Gt, Yt, Jt) {
                    this.http = T, this.server = U, this.gameService = c, this.queueService = f, this.authService = L, this.guUserService = X, this.modalService = xe, this.progressionService = de, this.guGameService = Be, this.configService = dt, this.audioService = Gt, this.analyticsService = Yt, this.deckService = Jt, this.numActiveQueues = 0, this.unsubscribe = new a.xQ, this.dataStore = {currentMatchId: null}, this._currentMatchId$ = new _.X(null), this.queueAcknowledge$ = new a.xQ, this.clientServerPongReceived$ = new a.xQ, this._playing$ = new _.X({status: G.OUT}), this.watchQueues(), window.bridge.onQuit(() => {
                        this.queueService.getGameQueues(1).subscribe(Ne => {
                            this.trySendingCancelReq(Ne.mode.id, Ne.params.player.id)
                        })
                    }), this.configService.loadConfigurations().pipe((0, n.R)(this.unsubscribe)).subscribe(Ne => {
                        this.master = {
                            host: Ne.matchmakingHost,
                            port: Ne.matchmakingPort,
                            password: ""
                        }, this.connectClient()
                    }), this.gameService.getBranch$(1).pipe((0, n.R)(this.unsubscribe)).subscribe(Ne => {
                        this.branch = Ne
                    }), this.queueService.getGameQueues(1).subscribe(Ne => {
                        switch (Ne.status) {
                            case"completed":
                                this.completeQueue(Ne);
                                break;
                            case"cancelled":
                                this.trySendingCancelReq(Ne.mode.id, Ne.params.player.id)
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
                    this.queueService.activeQueues$.pipe((0, n.R)(this.unsubscribe), (0, e.U)(T => T ? T.length : 0)).subscribe(T => this.numActiveQueues = T)
                }

                buildOpponent(T) {
                    let U = {};
                    const c = T.opponent_attributes.find(X => X.type === st.COLLECTION),
                        f = T.opponent_attributes.find(X => X.type === st.DECK),
                        L = T.opponent_attributes.find(X => X.type === st.DECK_GLOBAL);
                    return c && (U = Object.assign(Object.assign({}, U), {collection: {id: c.value}})), f && (U = Object.assign(Object.assign({}, U), {
                        deck: {
                            id: f.value,
                            global: !1
                        }
                    })), L && (U = Object.assign(Object.assign({}, U), {deck: Object.assign(Object.assign({}, U.deck), {global: 1 === L.value})})), U
                }

                handleQueueResponse() {
                    this.client.on(21, T => {
                        const U = this.tryParseJson(T), c = this.buildOpponent(U);
                        U.game_mode === D.B_.SERVER_SOLO && (c.id = 0), this.queueService.getQueue(1, U.game_mode).pipe((0, r.P)(), (0, v.h)(f => "active" === f.status), (0, C.M)(this.gameService.getBranch$(1)), (0, w.K)(f => (console.error("playService->handleQueueResponse() error getting queue", f), (0, i.of)([null, null])))).subscribe(([f, L]) => {
                            f && (this.queueService.complete(f), U.success && (this.dataStore.currentMatchId = U.match_id, this._currentMatchId$.next(this.dataStore.currentMatchId), this.play({
                                realm: L.id,
                                mode: f.mode.id,
                                player: f.params.player,
                                match_id: U.match_id,
                                opponent: c,
                                server: {host: U.location.host, port: U.location.port, password: U.match_pwd}
                            })))
                        })
                    })
                }

                handleQueueAck() {
                    this.client.on(30, T => {
                        const U = this.tryParseJson(T);
                        this.queueAcknowledge$.next(!0), U.success || (this.guGameService.fetchGameModes(!0), this.queueService.getQueue(1, U.game_mode).pipe((0, r.P)()).subscribe(c => this.queueService.cancel(c)), "bot" === U.reason ? this.modalService.createModal(ue.n, {}, {
                            blurredBackground: !0,
                            canCloseFromInside: !1,
                            position: y.e1.Center,
                            size: y.Cg.StretchableWorkarea
                        }) : this.showInfoModal("Unable to Queue", "captcha" === U.reason ? ie.k.CODE_10 : ie.k.CODE_4))
                    })
                }

                handleQueuePing() {
                    this.client.on(35, T => {
                        const U = this.tryParseJson(T);
                        !U || !U.game_mode || this.queueService.getQueue(1, U.game_mode).pipe((0, r.P)(c => "active" === c.status), (0, I.b)(() => {
                            const c = Object.assign(Object.assign({}, U), {realm: this.branch.name});
                            this.trySendingSocketMsg(36, c)
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
                    this.client.on(23, T => {
                        this.tryParseJson(T)
                    })
                }

                handleRestartRequest() {
                    this.client.on(40, T => {
                        this.modalService.createModal(Q.s, {
                            title: "Client Updated",
                            message: "Your client has been updated, please reload to continue.",
                            okButtonText: "RELOAD",
                            onOk: () => location.reload()
                        }, {
                            canCloseFromOutside: !1,
                            position: y.e1.Center,
                            size: y.Cg.StretchableFullscreen,
                            blurredBackground: !0
                        })
                    })
                }

                connectClient() {
                    if (this.client && this.client.destroy) try {
                        this.client.destroy()
                    } catch (T) {
                        console.error("playService->connectClient() unable to destroy client.", T)
                    }
                    this.client = window.bridge.createClient(this.master.host, this.master.port), this.handleQueueResponse(), this.handleQueueAck(), this.handleQueuePing(), this.handleCancelResponse(), this.handleRestartRequest(), this.handleServerClientPing(), this.handleClientServerPong()
                }

                tryParseJson(T) {
                    let U;
                    try {
                        U = JSON.parse(T)
                    } catch (c) {
                        console.error("PlayServer->handleQueuePing error parsing message", c, T)
                    }
                    return U
                }

                buildAttributes(T) {
                    let U = [];
                    return T.player && T.player.collection && (U = [...U, {
                        type: st.COLLECTION,
                        value: T.player.collection.id
                    }]), T.opponent && T.opponent.deck && (U = [...U, {
                        type: st.DECK,
                        value: T.opponent.deck.id
                    }], U = [...U, {type: st.DECK_GLOBAL, value: T.opponent.deck.global ? 1 : 0}]), U
                }

                buildQueueMessage(T, U, c, f, L, X) {
                    return {
                        id: U,
                        realm: L,
                        deck_id: c,
                        token: "",
                        game_mode: T.id,
                        attributes: f,
                        private_match_password: X
                    }
                }

                start(T, U, c, f) {
                    const L = this.buildQueueMessage(T, U, c.player.deck.id, this.buildAttributes(c), this.branch.name, f);
                    return this.numActiveQueues > 0 ? (0, t._)(ie.k.CODE_0) : this.client.socketConnected ? this.deckService.isDeckComplete(c.player.deck).pipe((0, k.q)(1), (0, P.VS)(X => X ? this.clientServerPong(T, L, U, c) : (this.deckService.fetchDecks(), (0, t._)(ie.k.CODE_11)))) : (this.connectClient(), (0, t._)(ie.k.CODE_1))
                }

                clientServerPong(T, U, c, f) {
                    return this.clientServerPongReceived$.next(!1), this.trySendingSocketMsg(6, U) ? ((0, d.H)(3e3).subscribe(() => {
                        this.clientServerPongReceived$.next(!1)
                    }), this.clientServerPongReceived$.pipe((0, k.q)(1), (0, P.VS)(X => X ? this.startQueueReq$(T, U, c, f) : (console.log("playService->start() cannot queue, did not receive CLIENT_SERVER_PONG within 3000ms"), this.connectClient(), (0, t._)(ie.k.CODE_9))))) : (this.connectClient(), (0, t._)(ie.k.CODE_8))
                }

                startQueueReq$(T, U, c, f) {
                    return this.queueAcknowledge$.next(!1), this.trySendingQueueReq(U) ? ((0, d.H)(3e3).subscribe(() => {
                        this.queueAcknowledge$.next(!1)
                    }), this.queueAcknowledge$.pipe((0, k.q)(1), (0, P.VS)(X => X ? this.queueService.start(1, T, f) : (console.log("playService->startQueueReq$() cannot queue, did not receive ACK message from server within 3000ms"), this.connectClient(), (0, t._)(ie.k.CODE_3))))) : (console.log("playService->startQueueReq$() cannot queue, unable to send queue request message"), this.connectClient(), (0, t._)(ie.k.CODE_2))
                }

                trySendingSocketMsg(T, U) {
                    console.log("playService->trySendingSocketMsg()", this.socketMsgName(T), U);
                    try {
                        return this.client.send(T, U), !0
                    } catch (c) {
                        return console.error("playService->trySendingSocketMsg() failed", c), !1
                    }
                }

                trySendingQueueReq(T) {
                    return this.trySendingSocketMsg(20, T)
                }

                trySendingCancelReq(T, U) {
                    return this.trySendingSocketMsg(22, {game_mode: T, id: U, realm: this.branch.name})
                }

                completeQueue(T) {
                }

                get playing$() {
                    return this._playing$.asObservable()
                }

                setPlaying(T, U) {
                    this._playing$.next({status: T, gameModeId: U})
                }

                buildArgs(T) {
                    let U = ["-realm", `${T.realm}`, "-user-id", `${T.player.id}`, "-sessionTicket", this.authService.getGameSessionTicket(), "-sessionConfig", JSON.stringify(T)];
                    return T.match_id && (U = [...U, "-game-id", `${T.match_id}`]), U
                }

                play(T) {
                    this.server.serverActive() || (this.server.closeServer(), this.server.createServer()), console.log(JSON.stringify(T)), this.server.setConfig(T), this.modalService.destroyModalsStack(), this.setPlaying(G.IN, T.mode);
                    const U = this.buildArgs(T);
                    this.gameService.currentGameContext$.pipe((0, k.q)(1), (0, $.w)(c => this.gameService.play(c, U)), (0, $.w)(c => (0, d.H)(2e3, 2e3).pipe((0, E.h)(c), (0, x.o)(() => window.bridge.isRunning(c.process.pid)))), (0, O.x)(() => {
                        window.bridge.focus(), this.audioService.returnToLauncher.play(), T.mode === D.B_.SOLO && this.logGameCompleted(T.mode, "Solo"), T.mode === D.B_.DIRECT_CHALLENGE && this.logGameCompleted(T.mode, "Direct Challenge", T.match_id), this.handleProgression(T.mode)
                    })).subscribe(u.Z, c => {
                        console.error("playService->play() error starting a game", c), Object.values(ie.k).includes(c) ? this.showInfoModal("Unable to start game", c) : this.showInfoModal("Unable to start game", ie.k.CODE_5)
                    })
                }

                logGameCompleted(T, U, c) {
                    "function" == typeof fbq && fbq("track", "ViewContent"), "function" == typeof gtag && gtag("event", "completed", {
                        event_category: "game",
                        event_label: "user"
                    }), this.analyticsService.postEvent(new l.Game.Completed.Event({
                        game_id: 1,
                        latest_id: c,
                        mode_id: T,
                        mode_name: U
                    }))
                }

                handleProgression(T) {
                    this.checkWhetherToShowAccountProgress().pipe((0, k.q)(1), (0, I.b)(U => {
                        this.setPlaying(U && 0 !== T ? G.PROGRESSION_ACCOUNT : G.OUT, T)
                    })).subscribe()
                }

                checkWhetherToShowAccountProgress() {
                    const T = this.authService.getUserId(), U = this.progressionService.getStoredAccountProgression(T);
                    return this.guUserService.getAccountProperties().pipe((0, k.q)(1), (0, e.U)(c => this.hasProgressed(U, c)))
                }

                hasProgressed(T, U) {
                    return T.lvl !== U.level || T.xp !== U.total_xp
                }

                showInfoModal(T, U) {
                    this.modalService.createModal(m.S, {title: T, text: U}, {
                        blurredBackground: !0,
                        canCloseFromInside: !1,
                        position: y.e1.Center,
                        size: y.Cg.StretchableWorkarea
                    })
                }

                socketMsgName(T) {
                    switch (T) {
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

            return ke.\u0275fac = function (T) {
                return new (T || ke)(he.LFG(W.eN), he.LFG(ae), he.LFG(J.hM), he.LFG(ye.g), he.LFG(o.mI), he.LFG(K.MZ), he.LFG(Z.Z), he.LFG(pe.$z), he.LFG(ve.xV), he.LFG(Pe.LE), he.LFG(o.pk), he.LFG(Pe.yD), he.LFG(z.D))
            }, ke.\u0275prov = he.Yz7({token: ke, factory: ke.\u0275fac, providedIn: "root"}), ke
        })()
    }, 47313: (q, R, s) => {
        "use strict";
        s.d(R, {oW: () => I, $z: () => O});
        var l = s(591), a = s(61737), _ = s(72986), i = s(2994), t = s(27221), d = s(24850), u = s(73307), n = s(5e3),
            e = s(49002), r = s(11130);

        class I {
            constructor(m = 0, y = 0, D = 0) {
                this.xp = m, this.xpToNext = y, this.lvl = D
            }
        }

        class E {
            constructor(m, y, D, Q, ie, ue) {
                this.game_mode = m, this.rating = y, this.rank_level = D, this.win_points = Q, this.loss_points = ie, this.safety_line = ue
            }
        }

        let O = (() => {
            class o {
                constructor(y, D, Q) {
                    this.gameApi = y, this.storage = D, this.guGameService = Q, this.dataStore = {
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

                isMaxRank(y, D) {
                    return !(!y || !D || 0 === D.length) && y.rank_level === D[D.length - 1].level
                }

                fetchUserRankLevel() {
                    return this.guGameService.fetchPlayerRanks$().pipe((0, _.q)(1), (0, i.b)(y => (this.dataStore.userRankLevels = y, this._userRankLevels$.next([...y]), y))).subscribe()
                }

                fetchUserGameProgression({userId: y, gameModeId: D}) {
                    return this.gameApi.get(`/user/${y}/progression/${D}`).pipe((0, _.q)(1), (0, t.K)(Q => (console.error("error during loading of post game progression stats"), (0, a._)(Q))))
                }

                fetchGameRanks() {
                    this.gameApi.get("/rank").pipe((0, _.q)(1), (0, i.b)(y => (this.dataStore.gameRanks = y, this._gameRanks$.next([...y]), y)), (0, t.K)(y => (console.error("error during loading game ranks"), console.error(y), y))).subscribe()
                }

                fetchAccountThresholds() {
                    this.gameApi.get("/level_threshold").pipe((0, _.q)(1), (0, i.b)(y => {
                        this.dataStore.accountThresholds = y, this._accountThresholds$.next(Object.assign({}, this.dataStore).accountThresholds)
                    }), (0, t.K)(y => (console.error("error during loading lvl thresholds"), y))).subscribe()
                }

                fetchAccountThresholdsByUserId(y) {
                    this.gameApi.get(`/user/${y}/level_threshold`).pipe((0, _.q)(1), (0, i.b)(D => {
                        this.dataStore.accountThresholds = D, this._accountThresholds$.next(Object.assign({}, this.dataStore).accountThresholds)
                    }), (0, t.K)(D => (console.error("error during loading lvl thresholds"), D))).subscribe()
                }

                storeAccountProgression(y, D) {
                    this.storage.set([`last-progress-${y.toString()}`], D)
                }

                storeRankedProgression(y, D) {
                    this.storage.set([`last-progress-${y.toString()}`], D)
                }

                getStoredAccountProgression(y) {
                    return this.storage.get([`last-progress-${y.toString()}`]) || new I
                }

                storeLastGameId(y, D) {
                    this.storage.set([`last-game-${y.toString()}`], D)
                }

                getStoredLastGameId(y) {
                    return this.storage.get([`last-game-${y.toString()}`]) || ""
                }

                saveRankedProgression(y, D) {
                    this.storage.set([`last-ranked-progress-${y.toString()}`, D.game_mode.toString()], D)
                }

                getStoredRankedProgression(y, D) {
                    const Q = this.storage.get([`last-ranked-progress-${y.toString()}`, D.toString()]) || new E(D, 0, 1, 0, 0, 40);
                    return this.dataStore.userRankLevels.push(Q), this._userRankLevels$.next([...this.dataStore.userRankLevels]), Q
                }

                getRankedProgressions(y) {
                    return this.gameApi.get(`/user/${y}/rank`)
                }

                getRankedProgressionById(y, D) {
                    return this.getRankedProgressions(y).pipe((0, d.U)(Q => Q.find(ie => ie.game_mode === D)), (0, i.b)(Q => (this.saveRankedProgression(y, Q), Q)))
                }

                calcPercentage(y, D) {
                    const Q = this.getLowerBoundaryForLvl(y.lvl, D);
                    return 100 * (y.xp - Q) / (y.xp + y.xpToNext - Q)
                }

                getLowerBoundaryForLvl(y, D) {
                    const Q = D.find(ie => ie.level === y - 1);
                    return Q ? Q.total_xp : 0
                }
            }

            return o.\u0275fac = function (y) {
                return new (y || o)(n.LFG(e.Ft), n.LFG(u.qy), n.LFG(r.xV))
            }, o.\u0275prov = n.Yz7({token: o, factory: o.\u0275fac}), o
        })()
    }, 64523: (q, R, s) => {
        "use strict";
        s.d(R, {r: () => k, H: () => P});
        var l = s(72224), a = s(73307), _ = s(591), i = s(8929), t = s(98723), d = s(72986), u = s(2994), n = s(7625),
            e = s(24850), r = s(33403), v = s(5e3), C = s(49002), w = s(83035), I = s(44416), k = (() => {
                return ($ = k || (k = {}))[$.AVAILABLE = 0] = "AVAILABLE", $[$.WAITING_TO_START = 1] = "WAITING_TO_START", $[$.STARTED = 2] = "STARTED", $[$.REWARDS_AVAILABLE = 3] = "REWARDS_AVAILABLE", $[$.ENDED = 4] = "ENDED", k;
                var $
            })();
        let P = (() => {
            class ${constructor(x,O,o,m){this.gameApi=x,this.authService=O,this.queueService=o,this.utilService=m,this.dataStore={sealedMode:null,sealedModeStatus:k.AVAILABLE}
        ,
            this._sealedMode$ = new _.X(null), this._sealedModeStatus$ = new _.X(this.dataStore.sealedModeStatus), this.unsubscribe = new i.xQ
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
            const x = this.authService.getUserId(), O = this.authService.getGameSessionTicket();
            this.gameApi.get(`/user/${x}/mode/${r.B_.SEALED_DECK}/deck?session=${O}`).pipe((0, d.q)(1)).subscribe(o => {
                this.updateSealedMode(o)
            }, o => {
                this.updateSealedMode(void 0)
            })
        }
        enterSealed$(x)
        {
            const O = this.authService.getUserId(), o = this.authService.getGameSessionTicket();
            return this.gameApi.post(`/user/${O}/mode/${r.B_.SEALED_DECK}/deck?session=${o}`, {god: x}).pipe((0, d.q)(1), (0, u.b)(m => {
                this.updateSealedMode(m)
            }))
        }
        updateSealedMode(x)
        {
            x && (x.game_mode_data = this.transformSealedModeGameModeData(x.game_mode_data)), this.dataStore.sealedMode = x, this._sealedMode$.next(x ? Object.assign({}, this.dataStore.sealedMode) : void 0), this.handleSealedModeStatus(x)
        }
        transformSealedModeGameModeData(x)
        {
            const O = this.utilService.adjustToServerTime(x.end_time_remaining);
            return Object.assign(Object.assign({}, x), {
                end_time_server: O,
                end_timestamp_server: Date.parse(O),
                properties: Object.assign(Object.assign({}, x.properties), {
                    entry_cutoff_server: this.utilService.adjustToServerTime(x.properties.entry_cutoff_remaining),
                    start_time_server: this.utilService.adjustToServerTime(x.properties.start_time_remaining)
                })
            })
        }
        handleSealedModeStatus(x)
        {
            if (x && x.sealed_id) if ("ended" !== x.status) {
                if (!this.areRewardsAvailable(x)) return this.areWaitingToStart(x) ? (this.scheduleRefresh(x.game_mode_data.properties.start_time_server), void this.updateSealedModeStatus(k.WAITING_TO_START)) : (this.scheduleRefresh(x.game_mode_data.end_time_server, this.onSealedEnded.bind(this)), void this.updateSealedModeStatus(k.STARTED));
                this.updateSealedModeStatus(k.REWARDS_AVAILABLE)
            } else this.updateSealedModeStatus(k.ENDED); else this.updateSealedModeStatus(k.AVAILABLE)
        }
        scheduleRefresh(x, O)
        {
            const o = Date.now(), y = new Date(x).getTime() + 1e3 - o;
            y > 0 && y < l.v && (0, t.H)(y).pipe((0, n.R)(this.unsubscribe), (0, d.q)(1)).subscribe(D => {
                this.fetchSealed(), O && O()
            })
        }
        onSealedEnded()
        {
            this.queueService.activeQueues$.pipe((0, d.q)(1), (0, e.U)(x => x.find(O => O.mode.id === r.B_.SEALED_DECK))).subscribe(x => {
                x && this.queueService.cancel(x)
            })
        }
        areRewardsAvailable(x)
        {
            const O = Date.now(), o = new Date(x.game_mode_data.end_time_server).getTime();
            return x.losses >= x.max_losses || x.wins >= x.max_wins || O > o
        }
        areWaitingToStart(x)
        {
            const O = Date.now(), o = new Date(x.game_mode_data.properties.start_time_server).getTime();
            return o && O < o
        }
        updateSealedModeStatus(x)
        {
            this.dataStore.sealedModeStatus = x, this._sealedModeStatus$.next(this.dataStore.sealedModeStatus)
        }
        claimRewards$(x)
        {
            const O = this.authService.getUserId(), o = this.authService.getGameSessionTicket();
            return this.gameApi.put(`/user/${O}/mode/${r.B_.SEALED_DECK}/deck/${x}?session=${o}`, {action: "claim"})
        }
    }return $.\u0275fac = function (x) {
        return new (x || $)(v.LFG(C.Ft), v.LFG(a.mI), v.LFG(w.g), v.LFG(I.F))
    }, $.\u0275prov = v.Yz7({token: $, factory: $.\u0275fac, providedIn: "root"}), $
})()
},
80537
:
(q, R, s) => {
    "use strict";
    s.d(R, {k: () => l});
    var l = (() => {
        return (a = l || (l = {})).CODE_0 = "You are already queueing for another game mode. (Error Code 0)", a.CODE_1 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 1)", a.CODE_2 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 2)", a.CODE_3 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 3)", a.CODE_4 = "Queueing is currently disabled for maintenance. Please try again later. (Error Code 4)", a.CODE_5 = "There was an error while starting the game. (Error Code 5)", a.CODE_6 = "There was an error while starting the game. Unable to verify game files. (Error Code 6)", a.CODE_7 = "There was an error while starting the game. Unable to verify game files. (Error Code 7)", a.CODE_8 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 8)", a.CODE_9 = "Unable to connect to server. Please try again later. If this problem persists, go to Settings and clear the cache. (Error Code 9)", a.CODE_10 = "Unable to join queue. Suspicious account activity has been detected. (Error Code 10)", a.CODE_11 = "The deck you are queueing with is not complete. (Error Code 11)", a.CODE_12 = "There was an issue authorising the game build download. (Error Code 12)", a.CODE_13 = "There was an issue downloading the game. (Error Code 13)", a.CODE_14 = "There was an issue extracting the game. (Error Code 14)", l;
        var a
    })()
}, 8611
:
(q, R, s) => {
    "use strict";
    s.d(R, {n: () => _});
    var l = s(5e3), a = s(66088);
    let _ = (() => {
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
(q, R, s) => {
    "use strict";
    s.d(R, {s: () => _});
    var l = s(5e3), a = s(66088);
    let _ = (() => {
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
            decls: 5,
            vars: 3,
            consts: [[1, "title-section"], [1, "message-section"], ["size", "large", 1, "cta-button", 3, "text", "click"]],
            template: function (d, u) {
                1 & d && (l.TgZ(0, "div", 0), l._uU(1), l.qZA(), l.TgZ(2, "div", 1), l._uU(3), l.qZA(), l.TgZ(4, "gu-primary-hex-button", 2), l.NdJ("click", function () {
                    return u.onOkCLick()
                }), l.qZA()), 2 & d && (l.xp6(1), l.Oqu(u.title), l.xp6(2), l.Oqu(u.message), l.xp6(1), l.Q6J("text", u.okButtonText))
            },
            styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.title-section[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.message-section[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.title-section[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.message-section[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.message-section[_ngcontent-%COMP%]{line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{border:calc(var(--vh) * .15) solid #527493;background-color:#0c1620;position:relative;display:block;color:#f6f6f6;padding:calc(var(--vw) * 2);width:calc(var(--vw) * 30);display:flex;flex-flow:column nowrap;align-items:center;padding-bottom:calc(var(--vw) * 2.5)}.title-section[_ngcontent-%COMP%]{padding-bottom:calc(var(--vh) * 2);border-bottom:calc(var(--vh) * .15) solid #fff;text-transform:uppercase}.message-section[_ngcontent-%COMP%]{margin-top:calc(calc(var(--vw) * 2) * .7);text-align:center}.cta-button[_ngcontent-%COMP%]{margin-top:calc(var(--vw) * 2)}"]
        }), i
    })()
}, 14618
:
(q, R, s) => {
    "use strict";
    s.d(R, {
        gK: () => l,
        ky: () => a,
        Kg: () => _,
        dY: () => i,
        yn: () => t,
        Ry: () => d,
        Tg: () => u,
        c7: () => n,
        Vm: () => e,
        $9: () => r,
        X4: () => v,
        Lg: () => C,
        P6: () => w,
        wT: () => I
    });
    var l = (() => {
        return (k = l || (l = {})).GAME_BUILD_DOWNLOAD_CHECK = "[GameResources] Game Build Download Check", k.GAME_BUILD_DOWNLOAD_REQUEST = "[GameResources] Game Build Download Request", k.GAME_BUILD_DOWNLOAD_PROGRESS = "[GameResources] Game Build Download Progress", k.GAME_BUILD_DOWNLOAD_EXTRACT = "[GameResources] Game Build Download Extract", k.GAME_BUILD_DOWNLOAD_SUCCESS = "[GameResources] Game Build Download Success", k.GAME_BUILD_DOWNLOAD_ERROR = "[GameResources] Game Build Download Error", k.GAME_BUILD_DOWNLOAD_UPDATE_STATUS = "[GameResources] Game Build Download Update Status", k.GAME_ASSETS_DOWNLOAD_CHECK = "[GameResources] Game Assets Download Check", k.GAME_ASSETS_DOWNLOAD_REQUEST = "[GameResources] Game Assets Download Request", k.GAME_ASSETS_DOWNLOAD_PROGRESS = "[GameResources] Game Assets Download Progress", k.GAME_ASSETS_DOWNLOAD_SUCCESS = "[GameResources]  Game Assets Download Success", k.GAME_ASSETS_DOWNLOAD_ERROR = "[GameResources]  Game Assets Download Error", k.GAME_ASSETS_DOWNLOAD_UPDATE_STATUS = "[GameResources] Game Assets Download Update Status", l;
        var k
    })();

    class a {
        constructor(P) {
            this.payload = P, this.type = l.GAME_BUILD_DOWNLOAD_CHECK
        }
    }

    class _ {
        constructor() {
            this.type = l.GAME_BUILD_DOWNLOAD_REQUEST
        }
    }

    class i {
        constructor(P) {
            this.payload = P, this.type = l.GAME_BUILD_DOWNLOAD_PROGRESS
        }
    }

    class t {
        constructor(P) {
            this.payload = P, this.type = l.GAME_BUILD_DOWNLOAD_EXTRACT
        }
    }

    class d {
        constructor() {
            this.type = l.GAME_BUILD_DOWNLOAD_SUCCESS
        }
    }

    class u {
        constructor(P) {
            this.payload = P, this.type = l.GAME_BUILD_DOWNLOAD_UPDATE_STATUS
        }
    }

    class n {
        constructor(P) {
            this.payload = P, this.type = l.GAME_BUILD_DOWNLOAD_ERROR
        }
    }

    class e {
        constructor(P) {
            this.payload = P, this.type = l.GAME_ASSETS_DOWNLOAD_CHECK
        }
    }

    class r {
        constructor() {
            this.type = l.GAME_ASSETS_DOWNLOAD_REQUEST
        }
    }

    class v {
        constructor(P) {
            this.payload = P, this.type = l.GAME_ASSETS_DOWNLOAD_PROGRESS
        }
    }

    class C {
        constructor(P) {
            this.payload = P, this.type = l.GAME_ASSETS_DOWNLOAD_UPDATE_STATUS
        }
    }

    class w {
        constructor() {
            this.type = l.GAME_ASSETS_DOWNLOAD_SUCCESS
        }
    }

    class I {
        constructor(P) {
            this.payload = P, this.type = l.GAME_ASSETS_DOWNLOAD_ERROR
        }
    }
}, 69931
:
(q, R, s) => {
    "use strict";
    s.d(R, {VD: () => a, DM: () => _, gP: () => i});
    var l = s(96727);
    const a = (0, l.ZF)("gameResources"), _ = () => (0, l.P1)(a, t => t.gameBuild),
        i = () => (0, l.P1)(a, t => t.gameAssets)
}, 63411
:
(q, R, s) => {
    "use strict";
    s.d(R, {e: () => P});
    var l = s(73175), a = s(591), _ = s(61737), i = s(21086), t = s(2994), d = s(61709), u = s(27221), n = s(24850),
        e = s(72986), r = s(40520), v = s(73307), C = s(5e3), w = s(11735);
    const I = new l.N0;
    let P = (() => {
        class ${constructor(x,O,o,m){this.authHostService=x,this.storage=O,this.featureFlagsService=o,this.router=m,this.isRemembering=!0,this.dataStore={account:null}
    ,
        this._account$ = new a.X(null)
    }
    login(x, O, o)
    {
        return this.authHostService.post("/auth2?type=login&code=" + this.generate(), x).pipe((0, t.b)(m => this.sendAnalytics(!0, x.email, +m.id)), (0, d.VS)(m => this.saveAccount(m, O, o)), (0, t.b)(m => this.fetchAccount()), (0, u.K)(m => (this.sendAnalytics(!1, x.email), (0, _._)(m))))
    }
    saveAccount(x, O, o)
    {
        return this.auth = x, "function" == typeof window.bridge.updateAuthPair && window.bridge.updateAuthPair(x), this.isRemembering = O, O && (this.storage.set(["user_id"], x.id), this.storage.set(["refresh"], x.refresh), this.storage.set(["access"], x.access)), this.authHostService.post(`/account/${x.id}/session`, {game_id: o}).pipe((0, t.b)(m => {
            "function" == typeof window.bridge.updateSession && window.bridge.updateSession(m), this.storage.set(["game_session"], m)
        }), (0, n.U)(() => !0), (0, u.K)(m => (0, i.of)(!1)))
    }
    getLinkedAddresses(x)
    {
        return this.authHostService.get(`v2/account/${x}`).pipe((0, n.U)(O => O.addresses.map(o => o.address)))
    }
    fetchSession()
    {
        return (0, i.of)(this.getGameSessionTicket())
    }
    sendAnalytics(x, O, o)
    {
    }
    get
    account$()
    {
        return this._account$.asObservable()
    }
    _emitAccount(x)
    {
        this.dataStore.account = x, this._account$.next(Object.assign({}, this.dataStore).account), this.featureFlagsService.setContext(x ? {
            userID: `${x.id}`,
            email: x.email,
            name: x.username,
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
        const x = this.getUserId();
        !x || this.authHostService.get(`/v2/account/${x}`).pipe((0, e.q)(1), (0, t.b)(O => this._emitAccount(O))).subscribe()
    }
    fetchAccountDetails()
    {
        const x = this.getUserId();
        if (x) return this.authHostService.get(`/v2/account/${x}`)
    }
    updateCurrentUser(x)
    {
        const O = this.getUserId();
        return this.updateUser(O, x)
    }
    updateUser(x, O)
    {
        return this.authHostService.put("/account/" + x, O).pipe((0, e.q)(1), (0, t.b)(o => this._emitAccount(o)))
    }
    getAuthHeader()
    {
        let x = new r.WM;
        return x = x.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), x = x.append("Authorization", this.getAccessToken()), x
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
    register(x)
    {
        return this.authHostService.post("/register", x)
    }
    resend(x)
    {
        return this.authHostService.post("/resend", {email: x})
    }
    resetPassword(x)
    {
        return this.authHostService.put("/reset", {email: x})
    }
    isLoggedIn()
    {
        const x = this.getRefreshToken();
        return null != x && x.length > 0
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
        const x = this.getRefreshToken();
        return this.authHostService.post("/auth2?type=refresh&code=" + this.generate(), {refresh: x}).pipe((0, t.b)(O => {
        }))
    }
    linkReferralCode(x)
    {
        const O = this.getUserId();
        return this.authHostService.post(`/account/${O}/referrer`, {referral: x})
    }
    tokenIsExpired()
    {
        const x = this.getAuthToken();
        return I.isTokenExpired(x.access)
    }
    generate()
    {
        function x(W, te) {
            return (W.length - W.replace(new RegExp(te, "g"), "").length) / te.length
        }

        function O(W, te, ae) {
            return te > W.length - 1 ? W : W.substr(0, te) + ae + W.substr(te + 1)
        }

        const o = function (W) {
            const ae = Math.pow(16, Math.min(W, 8) - 1), J = Math.pow(16, Math.min(W, 8)) - 1;
            let K = (Math.floor(Math.random() * (J - ae + 1)) + ae).toString(16);
            for (; K.length < W;) K += o(W - 8);
            return K
        }, m = Math.ceil(25 * Math.random()), y = 32 - m - 4;
        let D = ("" + o(m) + 2 + o(2) + 2 + o(y)).toLowerCase(), ue = x(D, "a") - x(D, "b") + 1, he = 0;
        for (; ue > 0 && ("a" !== D[he] && "b" !== D[he] && "2" !== D[he] && (D = O(D, he, "b"), ue--), he++, !(he > D.length));) ;
        for (; ue < 0 && ("a" !== D[he] && "b" !== D[he] && "2" !== D[he] && (D = O(D, he, "a"), ue++), he++, !(he > D.length));) ;
        return D
    }
}
return $.\u0275fac = function (x) {
    return new (x || $)(C.LFG(v.LI), C.LFG(v.qy), C.LFG(v.B3), C.LFG(w.F0))
}, $.\u0275prov = C.Yz7({token: $, factory: $.\u0275fac}), $
})
()
},
69340
:
(q, R, s) => {
    "use strict";
    s.d(R, {b5: () => $});
    var l = s(21086), a = s(41746), _ = s(8929), i = s(56498), t = s(24850), d = s(87168), u = s(61709), n = s(87545),
        e = s(14618), r = s(69931), v = s(5e3), C = s(79763), w = s(44416), I = s(96727);
    let $ = (() => {
        class E {
            constructor(O, o, m, y) {
                this.gameService = O, this.zone = o, this.utils = m, this.ngrxStore = y, this.downloads = new Map
            }

            getCurrentDownload() {
                return this.currentDownload
            }

            getVersionFile(O, o) {
                return window.bridge.httpGet(`https://s3-ap-southeast-2.amazonaws.com/gods-builds/manifests/${o}-manifest.json`).pipe(this.utils.enterZone(this.zone))
            }

            getLatest(O, o) {
                return this.getVersionFile(O, o).pipe((0, t.U)(m => m.build_version))
            }

            getLocal(O) {
                return (0, l.of)(this.gameService.getProperty(O.id, "version"))
            }

            getVersions(O, o) {
                let m;
                return m = (0, a.$R)("local" === o ? this.getLocal(O) : this.getLatest(O, o), this.getLocal(O)), m
            }

            requiresUpdate(O, o) {
                return this.getVersions(O, o).pipe((0, d.M)(this.ngrxStore.select(r.VD)), (0, u.VS)(([[m, y], D]) => {
                    let Q = !0;
                    return y && y === m && (Q = "downloaded" === this.gameService.getProperty(O.id, "status")), Q && "downloading" !== D.gameBuild.status && "extracting" !== D.gameBuild.status && this.ngrxStore.dispatch(new e.ky({isUpdateRequired: Q})), (0, l.of)(Q)
                }))
            }

            getUserPlatform() {
                return "win32" === window.bridge.platform() ? "win" : "mac"
            }

            getLatestAssetsVersions(O, o) {
                const m = {platform: this.getUserPlatform(), branch: o};
                return window.bridge.httpPost("https://oyhca2oyje.execute-api.us-east-1.amazonaws.com/test/1/game/assets", m).pipe(this.utils.enterZone(this.zone))
            }

            getLocalAssetsVersions(O) {
                return this.gameService.getProperty(O.id, "assets") ? (0, l.of)(JSON.parse(this.gameService.getProperty(O.id, "assets"))) : (0, l.of)(null)
            }

            requiresAssetsUpdate(O, o) {
                return (0, a.$R)(this.getLocalAssetsVersions(O), this.getLatestAssetsVersions(O, o)).pipe((0, d.M)(this.ngrxStore.select(r.VD)), (0, n.w)(([[m, y], D]) => {
                    let Q;
                    return Q = m ? this.deltaAssetsVersions(m, y) : y, Q.length > 0 && "downloading" !== D.gameAssets.status && this.ngrxStore.dispatch(new e.Vm({isUpdateRequired: Q.length > 0})), (0, l.of)(Q)
                }))
            }

            deltaAssetsVersions(O, o) {
                let m = [];
                return m = O ? o ? o.filter(y => !O.some(D => y.etag === D.etag)) : [] : o, m
            }

            getDownloadInfo(O, o, m) {
                return this.gameService.isObfuscatedBranch(O.id) ? {
                    url: `${O.base_url_auth}/builds/game/${o}/${this.getFileName(O, o)}`,
                    authToken: m
                } : {url: `${O.base_url}/builds/${o}/${this.getFileName(O, o)}`, authToken: void 0}
            }

            getFileName(O, o) {
                return "win32" === window.bridge.platform() ? "gods_" + o + O.extensions.windows : "gods_" + o + O.extensions.osx
            }

            downloadAndExtract(O, o, m) {
                const y = this.gameService.getInstallPath(O), D = this.getDownloadInfo(O, o, m),
                    Q = window.bridge.download(D.url, y, this.getFileName(O, o), m).pipe((0, t.U)(ie => (this.currentDownload.extracting = !0, this.gameService.setProperty(O.id, "version", o), this.gameService.setProperty(O.id, "status", "downloaded"), {
                        game: O,
                        fileName: this.getFileName(O, o),
                        installPath: y
                    })));
                return this.currentDownload = {
                    progress: window.bridge.progress,
                    download: Q,
                    extracting: !1,
                    error$: new _.xQ
                }, this.currentDownload
            }

            displayDownloadCompleteNotification(O) {
                new window.Notification("Download Complete", {
                    body: O.title + " has finished downloading.",
                    silent: !0
                }).onclick = () => {
                }
            }

            deleteFile(O, o) {
                const m = window.bridge.join(o, O);
                window.bridge.exists(m) && window.bridge.deleteFile(m)
            }

            extractGame(O, o, m) {
                return new i.y(y => {
                    const D = window.bridge.join(m, o), Q = window.bridge.join(m, O.title);
                    window.bridge.exists(D) || (console.error("GameDownloadService->extractGame() unable to find file to extract"), y.error("File not found! Cannot extract.")), window.bridge.extract(D, Q, ie => {
                        "win32" !== window.bridge.platform() ? window.bridge.chmod(Q + "/StandaloneOSXUniversal/gods.app/Contents/MacOS/gods", he => {
                            he ? (console.error(he), y.error(he)) : y.next(!0)
                        }) : y.next(!0)
                    })
                }).pipe((0, u.VS)(y => {
                    if (y) return this.gameService.setProperty(O.id, "status", "extracted"), this.gameService.refreshGameContext(), null != this.currentDownload && (this.currentDownload.extracting = !1), (0, l.of)(y)
                }))
            }

            uninstallGame(O, o) {
                const D = "win32" === window.bridge.platform() ? "/StandaloneWindows64" : "/StandaloneOSXUniversal",
                    Q = window.bridge.join(o, O.title, D);
                window.bridge.exists(Q) && this.uninstallFolder(Q)
            }

            uninstallFolder(O) {
                window.bridge.clearDirectory(O, o => {
                    o && console.log("@@@@@ uninstallFolder Error Clearing New Assets", o)
                })
            }
        }

        return E.\u0275fac = function (O) {
            return new (O || E)(v.LFG(C.hM), v.LFG(v.R0b), v.LFG(w.F), v.LFG(I.yh))
        }, E.\u0275prov = v.Yz7({token: E, factory: E.\u0275fac, providedIn: "root"}), E
    })()
}, 79763
:
(q, R, s) => {
    "use strict";
    s.d(R, {hM: () => E});
    var l = s(591), a = s(61737), _ = s(21086), i = s(24850), t = s(92198), d = s(72986), u = s(73307), n = s(63764),
        e = s(80537), r = s(52492), v = s(5e3), C = s(66088), w = s(49002);
    s(63411);
    let E = (() => {
        class x {
            constructor(o, m, y, D, Q, ie) {
                this.authHostService = o, this.auth = m, this.storage = y, this.modalService = D, this.akuma = Q, this.gameApi = ie, this._currentGameContext$ = new l.X(null), this._branches$ = new l.X([]), this.dataStore = {
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
                const m = this.getProperty(o, "branch"), y = m && "" !== m ? m : "beta";
                return this.branches$.pipe((0, i.U)(D => D.find(Q => Q.name === y)), (0, t.h)(D => !!D))
            }

            isObfuscatedBranch(o = 1) {
                const m = this.getProperty(o, "branch"), y = this.dataStore.branches.find(D => D.name === m);
                return y && y.obfuscated
            }

            onValidBranch(o, m) {
                return !(!o || !m.find(y => y.name === o))
            }

            fetchBranchesExtended(o) {
                const m = this.getProperty(o, "branch");
                this.fetchBranchesExtendedApi(o).subscribe(y => {
                    this.onValidBranch(m, y) || (this.setProperty(o, "branch", "beta"), this.refreshGameContext(), "string" == typeof m && (this.auth.logout(), setTimeout(() => window.location.reload()))), this.dataStore.branches = y, this._branches$.next([...this.dataStore.branches])
                })
            }

            fetchBranchesExtendedApi(o) {
                const m = this.auth.getUserId();
                return this.authHostService.get(`/game/${o}/player/${m}/branch?format=extended`).pipe((0, d.q)(1))
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

            getUserTutorialMissions(o, m) {
                return (!o || !m) && (o = this.auth.getUserId(), m = this.auth.getGameSessionTicket()), this.gameApi.get(`/user/${o}/tutorial?session=${m}`)
            }

            updateUserTutorialMissions(o, m, y) {
                return (!o || !y) && (o = this.auth.getUserId(), y = this.auth.getGameSessionTicket()), this.gameApi.post(`/user/${o}/tutorial?session=${y}`, m)
            }

            setProcessID(o, m) {
                null == this.sessions && (this.sessions = new Map);
                const y = this.sessions.get(o);
                y && (y.pid = m, this.sessions.set(o, y))
            }

            isInstalled(o) {
                const m = this.getPlayPath(o), y = window.bridge.exists(m);
                return y || console.error("Game is not installed", m), y
            }

            play(o, m) {
                const y = this.getPlayPath(o);
                if (!this.isInstalled(o)) return console.error("gameService->play() game not intalled", o.id, o.title), (0, a._)(e.k.CODE_6);
                let D;
                return D = m ? window.bridge.executeArgs(y, m, (Q, ie) => {
                    if (ie) return console.error("gameService->play()->window.bridge.executeArgs() error starting game", y, ie), (0, a._)(e.k.CODE_7);
                    this.logGameClientLaunched()
                }) : window.bridge.execute(y, (Q, ie) => {
                    if (ie) return console.error("gameService->play()->window.bridge.execute() error starting game", y, ie), (0, a._)(e.k.CODE_7);
                    this.logGameClientLaunched()
                }), "win32" !== window.bridge.platform() && D.pid++, this.setProcessID(o.id, D.pid), (0, _.of)({process: D})
            }

            logGameClientLaunched() {
                "function" == typeof gtag && gtag("event", "succeeded", {event_category: "gameClientLaunched"}), this.akuma.postEvent("Flow", "_gameClientLaunched_succeeed")
            }

            getPlayPath(o) {
                const m = this.getInstallPath(o), y = window.bridge.join(m, o.title);
                return "win32" === window.bridge.platform() ? window.bridge.join(y, o.executables.windows) : window.bridge.join(y, o.executables.osx)
            }

            showInfoModal(o, m) {
                this.modalService.createModal(n.S, {title: o, text: m}, {
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

            getProperty(o, m) {
                return this.storage.get(["game", String(o), m])
            }

            deleteProperty(o, m) {
                return this.storage.delete(["game", String(o), m])
            }

            setProperty(o, m, y) {
                return this.storage.set(["game", String(o), m], y)
            }

            getBranch(o) {
                const m = this.getProperty(o, "branch");
                return (0, _.of)(m && "" !== m ? m : "beta")
            }

            clearAssets(o) {
                this.setProperty(o, "assets", JSON.stringify([])), window.bridge.clearGUAssets(m => {
                    console.error("Error Clearing New Assets", m)
                }), location.reload()
            }

            checkInstallationPath(o) {
                if (!this.getProperty(o, "path")) {
                    const y = this.getDefaultInstallPath();
                    this.setProperty(o, "path", y), this.clearVersion(o)
                }
            }

            clearVersion(o) {
                this.deleteProperty(o, "version"), this.refreshGameContext(), setTimeout(() => window.location.reload())
            }
        }

        return x.\u0275fac = function (o) {
            return new (o || x)(v.LFG(u.LI), v.LFG(u.mI), v.LFG(u.qy), v.LFG(C.Z), v.LFG(w.jt), v.LFG(w.Ft))
        }, x.\u0275prov = v.Yz7({token: x, factory: x.\u0275fac, providedIn: "root"}), x
    })()
}, 24058
:
(q, R, s) => {
    "use strict";
    s.d(R, {m: () => _});
    var l = s(73307), a = s(5e3);
    let _ = (() => {
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
(q, R, s) => {
    "use strict";
    s.d(R, {e1: () => l, Cg: () => a});
    var l = (() => {
        return (i = l || (l = {}))[i.Center = 0] = "Center", i[i.Custom = 1] = "Custom", l;
        var i
    })(), a = (() => {
        return (i = a || (a = {}))[i.Fullscreen = 0] = "Fullscreen", i[i.Workarea = 1] = "Workarea", i[i.StretchableFullscreen = 2] = "StretchableFullscreen", i[i.StretchableWorkarea = 3] = "StretchableWorkarea", a;
        var i
    })()
}, 66088
:
(q, R, s) => {
    "use strict";
    s.d(R, {Z: () => w});
    var l = s(8929), a = s(2994), _ = s(90914), i = s(5e3), t = s(22313), d = s(69808);
    const u = ["modalHolder"];

    function n(I, k) {
    }

    let e = (() => {
        class I {
            constructor(P, $, E) {
                this.resolver = P, this.sanitizer = $, this.el = E, this.blurredBackground = !1, this.canCloseFromInside = !1, this.canCloseFromOutside = !0, this.closeModal$ = new i.vpe
            }

            get myStyle() {
                return this.sanitizer.bypassSecurityTrustStyle(`\n      z-index: ${this.styles.zIndex};\n    `)
            }

            ngOnInit() {
                const P = this.resolver.resolveComponentFactory(this.component);
                this.componentRef = this.modalHolder.createComponent(P, 0, this.modalHolder.injector, [[]]), Object.assign(this.componentRef.instance, this.inputs), this.calculateLocation()
            }

            ngOnDestroy() {
                this.componentRef = null
            }

            calculateLocation() {
            }

            closeModal(P) {
                P && !this.canCloseFromInside || !P && this.canCloseFromOutside && this.closeModal$.emit()
            }

            onClickedOutside(P) {
            }
        }

        return I.\u0275fac = function (P) {
            return new (P || I)(i.Y36(i._Vd), i.Y36(t.H7), i.Y36(i.SBq))
        }, I.\u0275cmp = i.Xpm({
            type: I,
            selectors: [["app-modal"]],
            viewQuery: function (P, $) {
                if (1 & P && i.Gf(u, 7, i.s_b), 2 & P) {
                    let E;
                    i.iGM(E = i.CRH()) && ($.modalHolder = E.first)
                }
            },
            hostVars: 2,
            hostBindings: function (P, $) {
                2 & P && i.Akn($.myStyle)
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
            template: function (P, $) {
                1 & P && (i.TgZ(0, "a", 0), i.NdJ("click", function () {
                    return $.closeModal(!1)
                }), i.qZA(), i.TgZ(1, "div", 1), i.NdJ("click", function () {
                    return $.closeModal(!0)
                }), i.YNc(2, n, 0, 0, "ng-template", null, 2, i.W1O), i.qZA()), 2 & P && (i.xp6(1), i.Q6J("ngStyle", $.styles))
            },
            directives: [d.PC],
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:block}.bgOverlay[_ngcontent-%COMP%]{position:absolute;right:0;left:0;top:0;bottom:0;background-color:#0c1620;opacity:.7}.bgOverlay--transparent[_ngcontent-%COMP%]{background:transparent}.modalContentContainer[_ngcontent-%COMP%]{position:absolute;top:0;left:0;opacity:1}"]
        }), I
    })();
    var r = s(52492), v = s(44416), C = s(6674);
    let w = (() => {
        class I {
            constructor(P, $, E, x, O) {
                this.resolver = P, this.appRef = $, this.utilsService = x, this.resizeService = O, this._modalDestroy$ = new l.xQ, this.modalsStack = [], this.modalFactory = this.resolver.resolveComponentFactory(e), this.renderer = E.createRenderer(null, null), this.resizeService.viewPortUnits$.pipe((0, a.b)(({vh: o}) => this.vh = o)).subscribe()
            }

            setModalVCRs(P, $) {
                this.workareaVcr = P, this.fullscreenVcr = $
            }

            get modalDestroy$() {
                return this._modalDestroy$.asObservable()
            }

            createModal(P, $ = {}, {
                canCloseFromInside: E = !1,
                canCloseFromOutside: x = !0,
                blurredBackground: O = !1,
                position: o = r.e1.Center,
                customPosition: m = null,
                size: y = r.Cg.StretchableFullscreen
            } = {}, D) {
                const Q = D || this.getVCR(y), ie = this.getModalHolderStyles(o, y, m);
                0 === this.modalsStack.length && (this.renderer.addClass(Q.element.nativeElement.parentElement, "addModalBlurBackground"), this.modalsStack.push({
                    vcr: Q,
                    nativeElement: Q.element.nativeElement,
                    parentElement: Q.element.nativeElement.parentElement
                }));
                const ue = this.createModalComponent(P, $, Q, ie, O, E, x);
                this.modalsStack.push({
                    component: ue,
                    vcr: Q,
                    nativeElement: ue.instance.el.nativeElement
                }), this.updateBlur()
            }

            getVCR(P) {
                switch (P) {
                    case r.Cg.Fullscreen:
                    case r.Cg.StretchableFullscreen:
                        return this.fullscreenVcr || this.appRef.components[0].instance.vcr;
                    case r.Cg.Workarea:
                    case r.Cg.StretchableWorkarea:
                        return this.workareaVcr
                }
            }

            getModalHolderStyles(P, $, E) {
                if (P === r.e1.Custom) {
                    (null === E || 2 !== E.split(":").length) && console.error("Provide valid customPosition (SELECTOR:POSITION ex. '#elementId:left')");
                    const x = E.split(":");
                    return Object.assign(Object.assign({}, this.getRelativePos(x[0], x[1])), {zIndex: $ === r.Cg.Workarea ? _.Rl.measurements.headerBarZLevel - 1 : _.Rl.measurements.modalLayerZLevel})
                }
                return Object.assign(Object.assign({}, this.getBoundaries(P, $)), {zIndex: $ === r.Cg.Workarea ? _.Rl.measurements.headerBarZLevel - 1 : _.Rl.measurements.modalLayerZLevel})
            }

            destroyTopModal() {
                if (0 === this.modalsStack.length) return;
                const P = this.modalsStack.pop();
                this._modalDestroy$.next(P.component.componentType), P.component && P.component.destroy(), P.component = null, this.updateBlur(), 1 === this.modalsStack.length && (this.renderer.removeClass(this.modalsStack[0].parentElement, "addModalBlurBackground"), this.modalsStack = [])
            }

            destroyModalsStack() {
                0 !== this.modalsStack.length && (this.modalsStack.filter(P => P.component).forEach(P => {
                    this._modalDestroy$.next(P.component.componentType), P.component.destroy(), P.component = null, P.nativeElement = null
                }), this.updateBlur(), this.renderer.removeClass(this.modalsStack[0].parentElement, "addModalBlurBackground"), this.modalsStack = [])
            }

            createModalComponent(P, $, E, x, O, o, m) {
                const y = E.createComponent(this.modalFactory, this.modalsStack.length - 1, E.injector, [[]]);
                return Object.assign(y.instance, {
                    styles: x,
                    blurredBackground: O,
                    canCloseFromInside: o,
                    canCloseFromOutside: m,
                    component: P,
                    inputs: $
                }), y.instance.closeModal$.subscribe(() => {
                    E.remove(), this.destroyTopModal()
                }), y
            }

            getBoundaries(P, $) {
                if (P === r.e1.Center) {
                    if ($ === r.Cg.StretchableFullscreen || $ === r.Cg.StretchableWorkarea) return {
                        "top.%": 50,
                        "left.%": 50,
                        transform: "translate(-50%, -50%)"
                    };
                    if ($ === r.Cg.Fullscreen || $ === r.Cg.Workarea) return {top: 0, bottom: 0, left: 0, right: 0};
                    console.error(`Size '${$}' not supported`)
                } else console.error(`Position '${P}' not supported`)
            }

            getRelativePos(P, $) {
                const x = window.document.querySelector(P).getBoundingClientRect();
                switch ($) {
                    case"left":
                        return {
                            "right.px": document.body.clientWidth - x.right + x.width + 15,
                            "top.px": x.top + x.height / 2,
                            transform: "translateY(-50%)"
                        };
                    case"right":
                        return {"left.px": x.right + 15, "top.px": x.top + x.height / 2, transform: "translateY(-50%)"};
                    case"top":
                        return {
                            top: "unset",
                            "bottom.px": document.body.clientHeight - x.bottom + x.height + 15,
                            "left.px": x.left + x.width / 2,
                            transform: "translateX(-50%)"
                        };
                    case"bottom":
                        return {"top.px": x.bottom + 15, "left.px": x.left + x.width / 2, transform: "translateX(-50%)"}
                }
                return {"top.%": 50, "left.%": 50, transform: "translate(-50%, -50%)"}
            }

            updateBlur() {
                if (this.modalsStack.filter(P => !!P.nativeElement).forEach(P => this.setBlurredBackground(P.nativeElement, !1)), this.modalsStack.length > 1) {
                    const P = this.utilsService.findLastIndex(this.modalsStack, $ => $.component && $.component.instance && $.component.instance.blurredBackground);
                    P > 0 && this.setBlurredBackground(this.modalsStack[P].nativeElement, !0)
                }
            }

            setBlurredBackground(P, $) {
                let E;
                P instanceof Comment ? E = P.previousSibling : (E = P, this.renderer.setStyle(P, "backgroundColor", $ ? "rgba(29,47,65, 0.6)" : "unset")), this.renderer.setStyle(E, "backdrop-filter", $ ? `blur(${1.5 * this.vh}px)` : "none")
            }
        }

        return I.\u0275fac = function (P) {
            return new (P || I)(i.LFG(i._Vd), i.LFG(i.z2F), i.LFG(i.FYo), i.LFG(v.F), i.LFG(C._))
        }, I.\u0275prov = i.Yz7({token: I, factory: I.\u0275fac}), I
    })()
}, 77391
:
(q, R, s) => {
    "use strict";
    s.d(R, {f: () => _});
    var l = s(591), a = s(5e3);
    let _ = (() => {
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
(q, R, s) => {
    "use strict";
    s.d(R, {u: () => a});
    var l = s(5e3);
    let a = (() => {
        class _ {
            transform(t) {
                const d = Math.floor(t / 60);
                return d.toString().padStart(1, "0") + ":" + Math.floor(t - 60 * d).toString().padStart(2, "0")
            }
        }

        return _.\u0275fac = function (t) {
            return new (t || _)
        }, _.\u0275pipe = l.Yjl({name: "duration", type: _, pure: !0}), _
    })()
}, 83035
:
(q, R, s) => {
    "use strict";
    s.d(R, {g: () => n});
    var l = s(59633), _ = s(591), i = s(1059), t = s(92198), d = s(5e3), u = s(49002);
    let n = (() => {
        class e {
            constructor(v, C) {
                this.analyticsService = v, this.akumaService = C, this.dataStore = {activeQueues: []}, this._activeQueues$ = new _.X([]), this._queueStatus$ = new _.X(null)
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

            enqueue(v) {
                this.dataStore.activeQueues.push(v), this._emitQueues()
            }

            dequeue(v) {
                this.dataStore.activeQueues = this.dataStore.activeQueues.filter(C => C !== v), this._emitQueues()
            }

            start(v, C, w) {
                const I = {game_id: v, mode: C, startTimestamp: (new Date).getTime(), status: "active", params: w};
                return this.enqueue(I), this._queueStatus$.next(I), this.logQueueStarted(I), this.getQueueSubset(P => P === I).pipe((0, i.O)(I))
            }

            cancel(v) {
                this.dataStore.activeQueues = this.dataStore.activeQueues.filter(C => C && (C.game_id !== v.game_id || C.mode.id !== v.mode.id)), v.status = "cancelled", v.startTimestamp = null, this._queueStatus$.next(v), this._emitQueues(), this.logQueueCancelled(v)
            }

            complete(v) {
                this.dataStore.activeQueues = this.dataStore.activeQueues.filter(C => C && (C.game_id !== v.game_id || C.mode.id !== v.mode.id)), v.status = "completed", v.startTimestamp = null, this._queueStatus$.next(v), this._emitQueues(), this.logQueueCompleted(v)
            }

            stopAllQueues() {
                this.dataStore.activeQueues.forEach(v => this.cancel(v))
            }

            getQueue(v, C) {
                return this.getQueueSubset(w => w && w.game_id === v && w.mode.id === C)
            }

            getGameQueues(v) {
                return this.getQueueSubset(C => C && C.game_id === v)
            }

            getQueueSubset(v) {
                return this.queueStatus$.pipe((0, t.h)(C => v(C)))
            }

            logQueueCancelled(v) {
                "function" == typeof gtag && gtag("event", "failed", {event_category: "queue"});
                const C = {
                    game_id: v.game_id,
                    mode_id: v.mode.id,
                    mode_name: v.mode.name,
                    button_state: "queue_cancelled"
                };
                this.analyticsService.postEvent(new l.Queue.Cancelled.Event(C)), this.akumaService.postEvent("Flow", "_queue_failed", C), this.akumaService.postEvent("Control", "arenaHomeGameStartBtn_pressed", C)
            }

            logQueueCompleted(v) {
                "function" == typeof gtag && gtag("event", "succeeded", {event_category: "queue"});
                const C = {
                    game_id: v.game_id,
                    mode_id: v.mode.id,
                    mode_name: v.mode.name,
                    button_state: "queue_completed"
                };
                this.analyticsService.postEvent(new l.Queue.Completed.Event(C)), this.akumaService.postEvent("Flow", "_queue_succeeded", C)
            }

            logQueueStarted(v) {
                "function" == typeof gtag && gtag("event", "started", {event_category: "queue"});
                const C = {
                    game_id: v.game_id,
                    mode_id: v.mode.id,
                    mode_name: v.mode.name,
                    button_state: "queue_started"
                };
                this.analyticsService.postEvent(new l.Queue.Started.Event(C)), this.akumaService.postEvent("Flow", "_queue_started", C), this.akumaService.postEvent("Control", "arenaHomeGameStartBtn_pressed", C)
            }
        }

        return e.\u0275fac = function (v) {
            return new (v || e)(d.LFG(u.yD), d.LFG(u.jt))
        }, e.\u0275prov = d.Yz7({token: e, factory: e.\u0275fac, providedIn: "root"}), e
    })()
}, 6674
:
(q, R, s) => {
    "use strict";
    s.d(R, {_: () => v});
    var l = s(8929), a = s(591), _ = s(23753), i = s(80013), t = s(92198), d = s(2994), u = s(7625), n = s(73307),
        e = s(5e3), r = s(44416);
    let v = (() => {
        class C {
            constructor(I, k, P) {
                this.utils = I, this.zone = k, this.storage = P, this.unsubscribe = new l.xQ, this._windowSize$ = new a.X({
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

            setViewPortUnits({vh: I, vw: k}) {
                this._viewPortUnits$.next({vw: k, vh: I})
            }

            watchWindowResize() {
                (0, _.R)(window, "resize").pipe((0, i.b)(100)).subscribe(I => this.onResize(I))
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
                const k = C.clientSizes.find($ => $.name === I);
                if (!k) return void console.error(`Client Size: ${I}, not supported`);
                this.storage.set([this.ClientSize], k.name);
                const P = this.calcClientSize(k.displayPortion, this._currentDisplaySize.width);
                window.bridge.setClientSize(P.width, P.height, !0, !0)
            }

            calcClientSize(I, k) {
                const P = Math.floor(k * I);
                return {width: P, height: Math.floor(9 * P / 16)}
            }

            displayMetricsDiffer(I) {
                return I.width !== this._currentDisplaySize.width && I.height !== this._currentDisplaySize.height
            }

            updateBridgeClientViewport() {
                this.viewPortUnits$.pipe((0, t.h)(() => "function" == typeof window.bridge.updateViewportUnits), (0, d.b)(I => window.bridge.updateViewportUnits(I)), (0, u.R)(this.unsubscribe)).subscribe()
            }
        }

        return C.clientSizes = [{name: "small", displayPortion: .5}, {
            name: "medium",
            displayPortion: .75
        }, {name: "large", displayPortion: .85}], C.\u0275fac = function (I) {
            return new (I || C)(e.LFG(r.F), e.LFG(e.R0b), e.LFG(n.qy))
        }, C.\u0275prov = e.Yz7({token: C, factory: C.\u0275fac}), C
    })()
}, 5969
:
(q, R, s) => {
    "use strict";
    s.d(R, {g: () => _});
    var l = s(591), a = s(5e3);
    let _ = (() => {
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
(q, R, s) => {
    "use strict";
    s.d(R, {F: () => d});
    var l = s(52886), a = s(56498), _ = s(57674), i = s(5e3), t = s(49002);
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

            arrayToMap(e, r, v) {
                return e ? e.reduce((C, w) => (C[r(w)] = v(w), C), {}) : {}
            }

            groupBy(e, r) {
                const v = new Map;
                return e.forEach(C => {
                    const w = r(C), I = v.get(w);
                    I ? I.push(C) : v.set(w, [C])
                }), v
            }

            convertIdsToCards(e, r, v) {
                const C = [];
                for (const w in r) if (r[w]) {
                    const I = v.get(parseInt(w));
                    r[w].forEach(k => {
                        if (-1 !== e.indexOf(k.id)) {
                            const P = new l.Zb(k.id, parseInt(w), k.q, I, k.status);
                            C.push(P)
                        }
                    })
                }
                return C
            }

            diff(e, r) {
                return [...e.filter(w => !r.includes(w)), ...r.filter(w => !e.includes(w))]
            }

            enterZone(e) {
                return r => new a.y(v => r.subscribe({
                    next(C) {
                        e.run(() => v.next(C))
                    }, error(C) {
                        v.error(C)
                    }, complete() {
                        v.complete()
                    }
                }))
            }

            findLastIndex(e, r) {
                const v = e.slice().reverse().findIndex(r);
                return v >= 0 ? e.length - 1 - v : v
            }

            hashCode(e) {
                let v, C, r = 0;
                if (0 === e.length) return r;
                for (v = 0; v < e.length; v++) C = e.charCodeAt(v), r = (r << 5) - r + C, r |= 0;
                return r
            }

            chunk(e, r) {
                const v = [];
                for (; e.length;) v.push(e.splice(0, r));
                return v
            }

            calcTopCards(e, r, v, deckId) {
                const topCardId = deckId ? localStorage.getItem('deck-last-card-added-' + deckId) : null;
                const C = this.filterService.getSort(_.PE.AscQuality, e);
                const w = [...r].sort(C);
                const I = Math.min(v, w.length);
                const topCard = w.find((deckCard) => deckCard.id + '' === topCardId);
                if (topCard) {
                    return [topCard, ...w.slice(0, I - 1)];
                }
                return w.slice(0, I);
            }

            toISODateString(e) {
                function r(v) {
                    return v < 10 ? "0" + v : v
                }

                return e.getUTCFullYear() + "-" + r(e.getUTCMonth() + 1) + "-" + r(e.getUTCDate()) + "T" + r(e.getUTCHours()) + ":" + r(e.getUTCMinutes()) + ":" + r(e.getUTCSeconds()) + "." + r(e.getUTCMilliseconds()) + "Z"
            }

            calculateContentHeight(e, r) {
                let v = e.style.height, C = e.offsetHeight, w = e.scrollHeight, I = e.style.overflow;
                if (!(C >= w)) return w;
                if (e.style.height = C + r + "px", e.style.overflow = "hidden", w < e.scrollHeight) {
                    for (; e.offsetHeight >= e.scrollHeight;) e.style.height = (C -= r) + "px";
                    for (; e.offsetHeight < e.scrollHeight;) e.style.height = C++ + "px";
                    return e.style.height = v, e.style.overflow = I, C
                }
            }

            dictionaryToMap(e) {
                return Object.entries(e).map(([r, v]) => ({
                    key: r,
                    val: v
                })).reduce((r, v) => r.set(Number(v.key), v.val), new Map)
            }

            adjustToServerTime(e) {
                const r = 1e3 * e, C = (new Date).getTime() + r;
                return new Date(C).toISOString()
            }
        }

        return u.\u0275fac = function (e) {
            return new (e || u)(i.LFG(t.iZ))
        }, u.\u0275prov = i.Yz7({token: u, factory: u.\u0275fac, providedIn: "root"}), u
    })()
}, 21057
:
(q, R, s) => {
    "use strict";
    s.d(R, {m: () => x});
    var l = s(14135), a = s(69808), _ = s(93075), i = s(73307), t = s(51649), d = s(5e3);
    let u = (() => {
        class O {
        }

        return O.\u0275fac = function (m) {
            return new (m || O)
        }, O.\u0275mod = d.oAB({type: O}), O.\u0275inj = d.cJS({
            providers: [{provide: t.R, useClass: t.E}],
            imports: [[a.ez]]
        }), O
    })();
    var n = s(49002), e = s(4324), r = s(69878), v = s(23569), C = s(79763), w = s(66088), I = s(236), k = s(18464);
    let $ = (() => {
        class O {
            transform(m, y) {
                const D = new k.BigNumber(10).pow(18);
                return m ? new k.BigNumber(m).div(D) : null
            }
        }

        return O.\u0275fac = function (m) {
            return new (m || O)
        }, O.\u0275pipe = d.Yjl({name: "WeiToEth", type: O, pure: !0}), O
    })();
    var E = s(5969);
    let x = (() => {
        class O {
            static forRoot() {
                return {ngModule: O, providers: [w.Z, C.hM, I.u, $, n.$c, v.d, E.g, {provide: i.Ho, useValue: r.N}]}
            }
        }

        return O.\u0275fac = function (m) {
            return new (m || O)
        }, O.\u0275mod = d.oAB({type: O}), O.\u0275inj = d.cJS({imports: [[a.ez, l.aw, _.u5, _.UX, e.W2, n.xd, u], l.aw, _.UX, e.W2, n.xd, u]}), O
    })()
}, 69878
:
(q, R, s) => {
    "use strict";
    s.d(R, {N: () => I});
    var l = s(49002), a = s(63411), _ = s(73307), i = s(40886), t = s(26959), d = s(45425), u = s(5254), n = s(68896),
        e = s(18499), r = s(24850), v = s(5e3);
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
                class k {
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
                        let E, x;
                        return E = new d.ethers.providers.InfuraProvider(this.environment.production ? i.t : i.Y), x = this.environment.production ? "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" : "0xc778417e063141139fce010982780140aa0cd5ab", (0, u.D)(e.WETH9.at(E, x).balanceOf($)).pipe((0, r.U)(O => O.toString()))
                    }

                    getGasPrice() {
                        return (0, u.D)(this.provider ? this.provider.getGasPrice() : (0, n.c)())
                    }
                }

                return k.\u0275fac = function ($) {
                    return new ($ || k)(v.LFG(_.Ho))
                }, k.\u0275prov = v.Yz7({token: k, factory: k.\u0275fac}), k
            })(), cardsService: l.dK, storageService: (() => {
                class k {
                    constructor() {
                    }

                    set($, E) {
                        return null != E && window.bridge.set($, E)
                    }

                    get($) {
                        return window.bridge.get($)
                    }

                    delete($) {
                        return window.bridge.delete($)
                    }
                }

                return k.\u0275fac = function ($) {
                    return new ($ || k)
                }, k.\u0275prov = v.Yz7({token: k, factory: k.\u0275fac, providedIn: "root"}), k
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
}, 45008
:
(q, R, s) => {
    "use strict";
    var l = s(22313), a = s(8929), _ = s(591), i = s(21086), t = s(5254);

    class n {
        constructor(B, p, M, H) {
            this.remote = B, this.directory = p, this.filename = M
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

        download(B) {
            return (0, i.of)()
        }

        dummyDownload(B) {
            return (0, i.of)()
        }
    }

    class C {
        constructor() {
            this.log = void 0, this.warn = void 0, this.error = void 0, this.initLogger()
        }

        initLogger() {
        }
    }

    C.consoleLog = console.log, C.consoleError = console.error, C.consoleWarn = console.warn;
    var w = s(35736);

    class k {
        constructor(B = 1) {
            this.currentRequests = [], this.runningRequests = 0, this.maxConcurrentRequests = B
        }

        callFunction(B, ...p) {
            return B.bind(this, p), console.log("callFunction ---- ", B.name, p), new Promise((M, H) => {
                this.currentRequests.push({resolve: M, reject: H, fnToCall: B, args: p}), this.tryNext()
            })
        }

        tryNext() {
            if (this.currentRequests.length && this.runningRequests < this.maxConcurrentRequests) {
                const {resolve: B, reject: p, fnToCall: M, args: H} = this.currentRequests.shift();
                this.runningRequests++, M(...H).then(Fe => B(Fe)).catch(Fe => p(Fe)).finally(() => {
                    this.runningRequests--, this.tryNext()
                })
            }
        }
    }

    function P(b) {
        return b.join("-")
    }

    function $(b) {
        return "object" == typeof navigator && "string" == typeof navigator.userAgent && navigator.userAgent.indexOf(b) >= 0
    }

    !window.bridge && (!function E() {
        return $("Electron")
    }() || function x() {
        return $("Cypress")
    }()) && (window.bridge = new class I {
        constructor() {
            this.logger = new C, this.variant = "browser", this.progress = new a.xQ, this.appsModalExisting$ = new _.X(!1), this.displayMetricsChange$ = new a.xQ, this.isInGame$ = new _.X(!1), this.protocolRedirect$ = new _.X(null), this.watchForDisplayChanges(), this.watchInGameStatus(), this.checkAdditionalArgs(), this.watchForAppsModal(), this.watchProtocolRedirect()
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

        openDialog(B, p) {
        }

        isRunning(B) {
            return !0
        }

        extract(B, p, M) {
        }

        download(B, p, M, H) {
            return console.log("Preload->download(urlr, location, filename)", B, p, M), this.gameDownload = new n(B, p, M), this.progress = new a.xQ, (0, t.D)(this.gameDownload.download({
                authToken: H,
                onStart: ge => {
                    console.log("Preload->download()->onStart", ge)
                },
                onProgress: ge => {
                    null != window && this.progress.next(ge)
                },
                onEnd: ge => {
                    this.progress.complete()
                }
            }))
        }

        downloadAssets(B, p) {
            console.log("Preload->downloadAssets(WithOutSempahore)", B);
            let M = [];
            return M = B.map((H, ge) => new n(H.url, p + H.location, H.file_name)), M
        }

        downloadAssetsWithSempahore(B, p, M, H, ge) {
            console.log("Preload->downloadAssetsWithSempahore()", B);
            const Fe = new k(ge);
            return B.map((Ke, kt) => {
                const Ct = {
                    authToken: H, onStart: fe => {
                    }, onProgress: fe => {
                        M[kt].next(fe)
                    }, onEnd: fe => {
                        M[kt].complete()
                    }
                };
                console.log(Ke.url, p + Ke.location, Ke.file_name);
                const Lt = new n(Ke.url, p + Ke.location, Ke.file_name), Ce = Lt.download.bind(Lt, Ct);
                return (0, t.D)(Fe.callFunction(Ce, Ct))
            })
        }

        onQuit(B) {
        }

        focus() {
        }

        deleteFile(B) {
        }

        chmod(B, p) {
        }

        execute(B, p) {
            return null
        }

        executeArgs(B, p, M) {
            return null
        }

        clearCache() {
        }

        exists(B) {
            return !0
        }

        homeDirectory() {
            return ""
        }

        platform() {
            return ""
        }

        createServer(B, p) {
        }

        serverActive() {
            return null
        }

        closeServer() {
        }

        set(B, p) {
            window.sessionStorage.setItem(P(B), JSON.stringify(p))
        }

        get(B) {
            const p = window.sessionStorage.getItem(P(B));
            return null !== p ? JSON.parse(p) : null
        }

        delete(B) {
            window.sessionStorage.removeItem(P(B))
        }

        minimizeWindow() {
        }

        maximizeWindow() {
        }

        closeWindow() {
        }

        setFullscreen(B) {
        }

        getDisplaySize() {
            return {height: 0, width: 0}
        }

        setClientSize(B, p, M = !1, H = !1) {
        }

        watchForDisplayChanges() {
        }

        watchInGameStatus() {
        }

        watchForAppsModal() {
        }

        setInGameStatus(B) {
        }

        clearGUAssets(B) {
        }

        checkAdditionalArgs() {
            const B = w.argv.map(p => p.split("=")).reduce((p, [M, H]) => (p[M] = H, p), {});
            B["--auth-id"] && B["--auth-access"] && (this.authId = +B["--auth-id"], this.authAccess = B["--auth-access"]), B["--session-ticket"] && (this.sessionTicket = B["--session-ticket"]), B["--vw"] && B["--vh"] && (this.vw = B["--vw"], this.vh = B["--vh"])
        }

        updateAuthPair(B) {
        }

        updateSession(B) {
        }

        updateViewportUnits(B) {
        }

        setClientPosition(B, p, M = !1) {
        }

        toggleFullscreen() {
        }

        createClient(B, p) {
            return {
                on: (M, H) => {
                }, send: (M, H) => {
                }, destroy: () => {
                }, socketConnected: !1
            }
        }

        join(...B) {
        }

        version() {
        }

        launcherTarget() {
        }

        httpGet(B) {
            return (0, t.D)(fetch(B).then(p => p.json()))
        }

        httpPost(B, p) {
            return (0, i.of)()
        }
    });
    var O = s(43050), o = s(5e3);
    const m = JSON.parse('{"buildNumber":"1171","branch":"master"}');
    var y = s.t(m, 2), Q = (s(12751), s(53161)), ie = s(16517), ue = s(32182), he = s(96727), W = s(99565),
        te = s(60870), ae = s(40520), J = s(93075), ye = s(76360), K = s(73307), Z = s(38076);
    let pe = (() => {
        class b {
            constructor(p) {
                this.authService = p
            }

            init() {
                this.authService.account$.subscribe(p => {
                    p ? Z.av({id: String(p.id), username: p.username}) : Z.e(M => M.setUser(null))
                })
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.LFG(K.mI))
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac, providedIn: "root"}), b
    })();
    var ve = s(87182), Pe = s(85115), z = s(11735), j = s(57289);
    let se = (() => {
        class b {
            serialize(p) {
                return {
                    url: p.url,
                    params: ce(p.root, M => M.params),
                    queryParams: ce(p.root, M => M.queryParams),
                    data: _e(p.root)
                }
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac}), b
    })();

    function ce(b, B) {
        if (!b) return {};
        const p = B(b), M = b.children.find(H => "primary" === H.outlet) || b.firstChild;
        return Object.assign(Object.assign({}, p), ce(M, B))
    }

    function _e(b) {
        if (!b) return {};
        const B = b.data, p = b.children.find(M => "primary" === M.outlet) || b.firstChild;
        return Object.assign(Object.assign({}, B), _e(p))
    }

    const Le = {stateKey: "router", navigationActionTiming: ue.R0.PostActivation, serialzer: se};
    (0, he.ZF)(Le.stateKey);
    var Me = s(49002), G = s(4324), oe = s(69878), Ee = (s(70893), s(59633)), lt = s(61715), Ie = s(7625),
        He = s(61709), Qe = s(27221), ct = s(92198), We = s(24850), Re = s(2994), xt = (s(90914), s(70655)),
        ht = s(79763);
    let mt = (() => {
        class b {
            constructor(p, M) {
                this.authHostService = p, this.gameService = M
            }

            recordActivity(p) {
                return (0, t.D)(this.getCurrentGameID()).pipe((0, He.VS)(M => this.authHostService.post("/account/" + p + "/activity", {game_id: M})))
            }

            getCurrentGameID() {
                return (0, xt.__awaiter)(this, void 0, void 0, function* () {
                    return this.gameService.getGameId()
                })
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.LFG(K.LI), o.LFG(ht.hM))
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac, providedIn: "root"}), b
    })();
    var st = s(77391), vt = s(44416);
    let ke = (() => {
        class b {
            constructor(p, M, H) {
                this.utils = p, this.zone = M, this.router = H, this._protocolPayload$ = new a.xQ, this.unsubscribe = new a.xQ
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            get protocolPayload$() {
                return this._protocolPayload$.asObservable()
            }

            watchProtocol() {
                window.bridge.protocolRedirect$.pipe(this.utils.enterZone(this.zone), (0, Ie.R)(this.unsubscribe), (0, ct.h)(p => !!p), (0, Re.b)(({url: p}) => {
                    this.handlePayload(p), this.handleRouteChange(p)
                })).subscribe()
            }

            handlePayload(p) {
                const M = p.split("?payload=")[1];
                if (!M) return !1;
                const H = decodeURIComponent(M), ge = JSON.parse(H);
                if (this._protocolPayload$.next(ge), ge.toString().indexOf("/game/gu/")) {
                    const Fe = ge.toString();
                    this.router.navigate([Fe])
                }
            }

            handleRouteChange(p) {
                const M = p.match(/(imtbl.*):\/\/(game\/gu\/.*)/);
                if (!M) return !1;
                const H = M[2];
                H && this.router.navigate([`/${H}`])
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.LFG(vt.F), o.LFG(o.R0b), o.LFG(z.F0))
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac, providedIn: "root"}), b
    })();
    var bt = s(6674);
    const T = ["ratioSetter"], U = ["*"];
    let c = (() => {
        class b {
            constructor(p, M) {
                this.resizeService = p, this.el = M
            }

            ngOnInit() {
                this.resizeService.windowSize$.subscribe(() => this.setCustomViewportProps()), this.setCustomViewportProps()
            }

            triggerCalcs() {
                this.setCustomViewportProps()
            }

            setCustomViewportProps() {
                const p = this.ratioSetter.nativeElement, M = .01 * p.offsetWidth, H = .01 * p.offsetHeight;
                document.documentElement.style.setProperty("--vw", `${M}px`), document.documentElement.style.setProperty("--vh", `${H}px`), this.resizeService.setViewPortUnits({
                    vw: M,
                    vh: H
                })
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(bt._), o.Y36(o.SBq))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["app-auto-letterbox"]],
            viewQuery: function (p, M) {
                if (1 & p && o.Gf(T, 7), 2 & p) {
                    let H;
                    o.iGM(H = o.CRH()) && (M.ratioSetter = H.first)
                }
            },
            ngContentSelectors: U,
            decls: 5,
            vars: 0,
            consts: [[1, "appRatioSetter"], ["ratioSetter", ""], ["src", "/assets/images/16-x-9-ratio.png", "alt", "ratio image", 1, "appRatioSetter__ratioImage", 3, "load"], [1, "innerAppContainer"]],
            template: function (p, M) {
                1 & p && (o.F$t(), o.TgZ(0, "div", 0, 1)(2, "img", 2), o.NdJ("load", function () {
                    return M.triggerCalcs()
                }), o.qZA(), o.TgZ(3, "div", 3), o.Hsn(4), o.qZA()())
            },
            styles: ["[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;height:100vh;width:100vw;background:var(--gu-blue-dark);}.appRatioSetter[_ngcontent-%COMP%]{margin:auto;position:relative;width:100vw;padding-bottom:56.23%}.appRatioSetter__ratioImage[_ngcontent-%COMP%]{display:none}.innerAppContainer[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden;display:flex;flex-direction:column}@media screen and (min-aspect-ratio:1282/720) {.appRatioSetter[_ngcontent-%COMP%]{height:100vh;width:auto;padding-bottom:0}.appRatioSetter__ratioImage[_ngcontent-%COMP%]{display:block;width:auto;height:100%}}"]
        }), b
    })();
    var f = s(52492), L = s(41777), X = s(72986), xe = s(69808), de = s(80013), Be = s(40537), dt = s(66088),
        Gt = s(83035);

    function Jt(b, B) {
        if (1 & b) {
            const p = o.EpF();
            o.TgZ(0, "form", 7)(1, "label", 8), o._uU(2, "Username"), o.qZA(), o.TgZ(3, "div", 9)(4, "input", 10), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().audioService.clickTinyV1.play()
            }), o.qZA(), o.TgZ(5, "gu-primary-hex-button", 11), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().updateUser()
            }), o.qZA()(), o.TgZ(6, "div", 12), o._uU(7, " Your username will be publicly visible. "), o.qZA()()
        }
        if (2 & b) {
            const p = o.oxw();
            o.Q6J("formGroup", p.formGroup), o.xp6(5), o.Q6J("text", p.updating ? "Saving" : "Save")
        }
    }

    s(63411);
    const {buildNumber: cs, branch: Ne} = y, ut = window.bridge && window.bridge.version ? window.bridge.version() : 0,
        xs = window.bridge && window.bridge.launcherTarget ? window.bridge.launcherTarget() : "PROD";
    let Pt = (() => {
        class b {
            constructor(p, M, H, ge, Fe, Xe, Ke, kt) {
                this.authService = p, this.fb = M, this.audioService = H, this.modalService = ge, this.resizeService = Fe, this.utils = Xe, this.storage = Ke, this.queueService = kt, this.loading = !1, this.updating = !1, this.version = ut, this.launcherTarget = xs, this.cerberusBuildNumber = cs, this.cerberusBranch = Ne, this.clientSizes = bt._.clientSizes, this.volume = 0, this.volumeControl = new J.NI(.9), this.unsubscribe = new a.xQ
            }

            ngOnInit() {
                this.anonymous || this.initUserNameForm(), this.clientSize = this.resizeService.currentClientSize, this.initVolumeControl()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            initVolumeControl() {
                const p = this.storage.get(["gu-audioVolume"]);
                this.volumeControl.setValue(p), this.volumeControl.valueChanges.pipe((0, Ie.R)(this.unsubscribe), (0, de.b)(100)).subscribe(M => this.audioService.setGlobalVolume(M))
            }

            logout() {
                this.modalService.destroyTopModal(), this.queueService.stopAllQueues(), this.authService.logout()
            }

            clearCache() {
                window.bridge.clearCache(), location.reload()
            }

            updateUser() {
                this.formGroup.invalid ? this.utils.markFormGroupTouched(this.formGroup) : this.updating || (this.updating = !0, this.authService.updateCurrentUser({username: this.formGroup.get("username").value}).pipe((0, Be.x)(() => {
                    this.updating = !1
                })).subscribe())
            }

            updateClientSize(p) {
                this.resizeService.resizeClient(p)
            }

            initUserNameForm() {
                this.buildFormGroup(), this.loading = !0, this.authService.account$.pipe((0, Ie.R)(this.unsubscribe), (0, Re.b)(p => this.formGroup.get("username").setValue(p.username)), (0, Qe.K)(p => (this.logout(), p)), (0, Be.x)(() => this.loading = !1)).subscribe()
            }

            buildFormGroup() {
                this.formGroup = this.fb.group({
                    username: ["", J.kI.required],
                    volume: [this.storage.get(["gu-audioVolume"]) || 0, J.kI.required]
                })
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(K.mI), o.Y36(J.qu), o.Y36(K.pk), o.Y36(dt.Z), o.Y36(bt._), o.Y36(vt.F), o.Y36(K.qy), o.Y36(Gt.g))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["app-apollo-settings"]],
            inputs: {anonymous: "anonymous"},
            decls: 13,
            vars: 9,
            consts: [["class", "settingsForm", 3, "formGroup", 4, "ngIf"], [1, "audioControl"], [1, "audioControl__heading"], ["id", "volume", "type", "range", "min", "0", "max", "1", "step", "0.1", 1, "audioControl__rangeInput", 3, "formControl"], ["for", "#volume", 1, "audioControl__volumeLabel"], [1, "version-label"], ["size", "regular", "text", "Clear Cache", 1, "settingsForm__bottomCta", "settingsForm__bottomCta--cacheClear", 3, "click"], [1, "settingsForm", 3, "formGroup"], ["for", "usernameInput", 1, "settingsForm__label"], [1, "settingsForm__inputsRow"], ["name", "username", "type", "text", "formControlName", "username", "id", "usernameInput", "aria-describedby", "usernameHelp", 1, "settingsForm__textInput", 3, "click"], ["size", "regular", 1, "settingsForm__cta", 3, "text", "click"], ["id", "usernameHelp", 1, "settingsForm__hintText"]],
            template: function (p, M) {
                1 & p && (o.YNc(0, Jt, 8, 2, "form", 0), o.TgZ(1, "div", 1)(2, "label", 2), o._uU(3, "Audio Volume"), o.qZA(), o._UZ(4, "input", 3), o.TgZ(5, "label", 4), o._uU(6), o.qZA()(), o.TgZ(7, "h5", 5), o._uU(8), o.ALo(9, "lowercase"), o.qZA(), o.TgZ(10, "h5", 5), o._uU(11), o.qZA(), o.TgZ(12, "gu-primary-hex-button", 6), o.NdJ("click", function () {
                    return M.clearCache()
                }), o.qZA()), 2 & p && (o.Q6J("ngIf", !M.anonymous), o.xp6(4), o.Q6J("formControl", M.volumeControl), o.xp6(2), o.Oqu(M.volumeControl.value), o.xp6(2), o.AsE("Launcher Version: ", M.version, "-", o.lcZ(9, 7, M.launcherTarget), ""), o.xp6(3), o.AsE("Cerberus Version: ", M.cerberusBranch, ".", M.cerberusBuildNumber, ""))
            },
            directives: [xe.O5, J._Y, J.JL, J.sg, J.Fj, J.JJ, J.u, J.eT, J.oH],
            pipes: [xe.i8],
            styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.version-label[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settingsForm__hintText[_ngcontent-%COMP%], .settingsForm__textInput[_ngcontent-%COMP%], .audioControl__heading[_ngcontent-%COMP%], .settingsForm__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.version-label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.96);line-height:1.3}.audioControl__heading[_ngcontent-%COMP%], .settingsForm__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settingsForm__hintText[_ngcontent-%COMP%], .settingsForm__textInput[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settingsForm__hintText[_ngcontent-%COMP%], .settingsForm__textInput[_ngcontent-%COMP%]{line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;margin:auto}.settingsForm[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-self:center;width:70%}.settingsForm__inputsRow[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.settingsForm__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4);flex-grow:1;margin:0 calc(var(--vw) * 1) 0 0}.settingsForm__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settingsForm__cta[_ngcontent-%COMP%]{min-width:calc(var(--vw) * 8);flex-grow:0}.settingsForm__hintText[_ngcontent-%COMP%]{padding-top:calc(var(--vh) * 2)}.version-label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 4);text-align:center;user-select:all}.settingsForm__select[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65);font-size:calc(var(--vh) * 1.9)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settingsForm__bottomCta[_ngcontent-%COMP%]{width:70%;margin:0 auto}.settingsForm__bottomCta--cacheClear[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 4);margin-bottom:calc(var(--vh) * 2)}.audioControl[_ngcontent-%COMP%]{width:70%;margin:calc(var(--vh) * 3) auto}.audioControl__volumeLabel[_ngcontent-%COMP%]{display:inline-block;position:relative;width:60px;line-height:20px;text-align:center;border-radius:3px;color:#e0c58f;padding:5px 10px;margin-left:8px}.audioControl__rangeInput[_ngcontent-%COMP%]{-webkit-appearance:none;width:calc(100% - 73px);height:10px;border-radius:5px;background:#1d2f41;outline:none;padding:0;margin:0}.audioControl__rangeInput[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#e0c58f;cursor:pointer}.audioControl__rangeInput[_ngcontent-%COMP%]:active::-webkit-slider-thumb{background:#e0c58f}.audioControl__rangeInput[_ngcontent-%COMP%]::-moz-range-thumb{width:20px;height:20px;border:0;border-radius:50%;background:#e0c58f;cursor:pointer}"]
        }), b
    })();
    var De = s(69340);

    function ds(b, B) {
        if (1 & b && (o.TgZ(0, "option", 12), o._uU(1), o.qZA()), 2 & b) {
            const p = B.$implicit;
            o.Q6J("ngValue", p.name), o.xp6(1), o.Oqu(p.name)
        }
    }

    function ss(b, B) {
        if (1 & b) {
            const p = o.EpF();
            o.ynx(0), o.TgZ(1, "label", 9), o._uU(2, "Branch"), o.qZA(), o.TgZ(3, "select", 10), o.NdJ("ngModelChange", function (H) {
                return o.CHM(p), o.oxw(2).updateBranch(H, !0)
            })("click", function () {
                return o.CHM(p), o.oxw(2).playClickTinyV1()
            })("ngModelChange", function (H) {
                return o.CHM(p), o.oxw(2).branch = H
            }), o.YNc(4, ds, 2, 2, "option", 11), o.qZA(), o.BQk()
        }
        if (2 & b) {
            const p = o.oxw(2);
            o.xp6(3), o.Q6J("ngModel", p.branch), o.xp6(1), o.Q6J("ngForOf", p.branchesExtended)
        }
    }

    function Rt(b, B) {
        if (1 & b && (o.ynx(0), o.TgZ(1, "label", 13), o._uU(2, "Local Version"), o.qZA(), o._UZ(3, "input", 5), o.BQk()), 2 & b) {
            const p = o.oxw(2);
            o.xp6(3), o.Q6J("value", p.local)
        }
    }

    function os(b, B) {
        if (1 & b) {
            const p = o.EpF();
            o.TgZ(0, "form", 1), o.YNc(1, ss, 5, 2, "ng-container", 2), o.TgZ(2, "label", 3), o._uU(3, "Installation Path"), o.qZA(), o.TgZ(4, "div", 4), o._UZ(5, "input", 5), o.TgZ(6, "gu-icon", 6), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().showDialog()
            }), o.qZA()(), o.YNc(7, Rt, 4, 1, "ng-container", 2), o.TgZ(8, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().clearVersion()
            }), o.qZA(), o.TgZ(9, "gu-primary-hex-button", 8), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().clearAssets()
            }), o.qZA()()
        }
        if (2 & b) {
            const p = o.oxw();
            o.xp6(1), o.Q6J("ngIf", p.branchesExtended), o.xp6(4), o.Q6J("value", p.path), o.xp6(2), o.Q6J("ngIf", p.local)
        }
    }

    let Nt = (() => {
        class b {
            constructor(p, M, H) {
                this.gameService = p, this.gameDownloadService = M, this.audioService = H, this.loaded = !1
            }

            ngOnInit() {
                !this.game || (this.branch = this.gameService.getProperty(this.game.id, "branch"), this.path = this.gameService.getInstallPath(this.game), this.version = this.gameService.getProperty(this.game.id, "version"), this.updateBranch(this.branch), this.initBranches())
            }

            initBranches() {
                this.gameService.branches$.pipe((0, He.VS)(p => (this.branchesExtended = p, !this.branch && this.branchesExtended && this.updateBranch(this.branchesExtended[0].name), this.gameDownloadService.getVersions(this.game, this.branch)))).subscribe(([p, M]) => {
                    this.local = M, this.loaded = !0
                }, () => this.loaded = !0)
            }

            updateBranch(p, M) {
                this.branch = p, this.gameService.setProperty(this.game.id, "branch", this.branch), this.gameService.refreshGameContext(), M && setTimeout(() => window.location.reload())
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
                }, (p, M) => {
                    p && p.length > 0 && (this.path = p[0], this.gameService.setProperty(this.game.id, "path", this.path))
                })
            }

            playClickTinyV1() {
                this.audioService.clickTinyV1.play()
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(ht.hM), o.Y36(De.b5), o.Y36(K.pk))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["app-game-settings"]],
            inputs: {game: "game"},
            decls: 1,
            vars: 1,
            consts: [["class", "settingsForm", 4, "ngIf"], [1, "settingsForm"], [4, "ngIf"], ["for", "installpath", 1, "settingsForm__label"], [1, "settingsForm__path"], ["type", "text", "disabled", "", 1, "settingsForm__textInput", 3, "value"], ["iconLigature", "settings_cog", 1, "path-select-btn", 3, "click"], ["size", "large", "text", "Clear Version", 1, "settingsForm__cta", 3, "click"], ["size", "large", "text", "Clear Assets", 1, "settingsForm__cta", 3, "click"], ["for", "sel1", 1, "settingsForm__label"], ["name", "branch", "id", "sel1", 1, "settingsForm__select", 3, "ngModel", "ngModelChange", "click"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "settingsForm__label"]],
            template: function (p, M) {
                1 & p && o.YNc(0, os, 10, 3, "form", 0), 2 & p && o.Q6J("ngIf", M.loaded)
            },
            directives: [xe.O5, J._Y, J.JL, J.F, J.EJ, J.JJ, J.On, xe.sg, J.YN, J.Kr],
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.settingsForm__textInput[_ngcontent-%COMP%], .settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settingsForm__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.settingsForm__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.settingsForm__textInput[_ngcontent-%COMP%], .settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.settingsForm__textInput[_ngcontent-%COMP%], .settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:block;margin:auto}.settingsForm[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:60%;margin:auto}.settingsForm__path[_ngcontent-%COMP%]{display:flex}.settingsForm__label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3)}.path-select-btn[_ngcontent-%COMP%]{height:calc(var(--vh) * 5);line-height:calc(var(--vh) * 5);width:calc(var(--vh) * 5);margin-top:calc(var(--vh) * .65);background-color:#072337;border-radius:0 calc(var(--vh) * .4) calc(var(--vh) * .4) 0;cursor:pointer;border:calc(var(--vh) * .15) solid #c6a052;border-left:none;text-align:center;display:flex}.path-select-btn[_ngcontent-%COMP%]     i{margin:auto}.settingsForm__select[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4)}.settingsForm__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settingsForm__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4);margin-top:calc(var(--vh) * .65)}.settingsForm__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settingsForm__textInput[_ngcontent-%COMP%]{flex:1;border:calc(var(--vh) * .15) solid #c6a052;border-radius:calc(var(--vh) * .4) 0 0 calc(var(--vh) * .4)}.settingsForm__cta[_ngcontent-%COMP%]{align-self:center;margin:0 auto;margin-top:calc(var(--vh) * 4)}"]
        }), b
    })(), us = (() => {
        class b {
            constructor() {
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["app-wallet-settings"]],
            decls: 9,
            vars: 0,
            consts: [["top", "2x-large", 1, "manageWalletsLink"], ["kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100"], ["both", "large"], ["kind", "small", "fillColor", "colors.light.100"], ["href", "https://godsunchained.com/manage-wallets", "target", "_blank", "backgroundFillColor", "colors.gunmetal.500", "borderColor", "colors.gunmetal.300", "borderColorHover", "colors.gunmetal.100", "fillColor", "colors.light.300", "icon", "leave_website", "leftIconPosition", "true"]],
            template: function (p, M) {
                1 & p && (o.TgZ(0, "gu-vertical-space", 0)(1, "gu-vertical-space")(2, "gu-paragraph-text", 1), o._uU(3, " Wallet Management & Linking to Immutable X "), o.qZA()(), o.TgZ(4, "gu-vertical-space", 2)(5, "gu-paragraph-text", 3), o._uU(6, " Add, remove, or view wallets, and link your wallets to the Immutable X marketplace. "), o.qZA()(), o.TgZ(7, "gu-plain-square-button", 4), o._uU(8, " Go to Website "), o.qZA()())
            },
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%], .settings__label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.settings__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:block;margin:0 auto}.settings[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:100%;margin:auto}.settings__label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3)}.settings__select[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settings__cta[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65);color:#affaed}.manageWalletsLink[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}"]
        }), b
    })();

    function Gs(b, B) {
        if (1 & b) {
            const p = o.EpF();
            o.TgZ(0, "div", 1), o.NdJ("click", function () {
                const ge = o.CHM(p).$implicit;
                return o.oxw().selectTab(ge.title, ge)
            }), o._uU(1), o.qZA()
        }
        if (2 & b) {
            const p = B.$implicit, M = o.oxw();
            o.ekj("active", p.title === M.activeTab), o.xp6(1), o.hij(" ", p.title.toUpperCase(), " ")
        }
    }

    function Ns(b, B) {
        if (1 & b && o._UZ(0, "app-apollo-settings", 7), 2 & b) {
            const p = o.oxw();
            o.Q6J("anonymous", p.anonymous)
        }
    }

    function Xt(b, B) {
        if (1 & b && o._UZ(0, "app-game-settings", 8), 2 & b) {
            const p = o.oxw();
            o.Q6J("game", p.selectedGame)
        }
    }

    function Ps(b, B) {
        1 & b && o._UZ(0, "app-wallet-settings", 9)
    }

    let Ss = (() => {
        class b {
            constructor(p, M, H) {
                this.gameService = p, this.audioService = M, this.authService = H, this.activeTab = "immutable", this.games = []
            }

            ngOnInit() {
                const p = this.authService.getUserId();
                p ? (this.anonymous = !1, this.gameService.getGames(p).pipe((0, X.q)(1)).subscribe(M => this.games = M.records)) : this.anonymous = !0
            }

            selectTab(p, M) {
                this.audioService.clickMediumV1.play(), this.activeTab = p, M && (this.selectedGame = M)
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(ht.hM), o.Y36(K.pk), o.Y36(K.mI))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["app-settings-modal"]],
            inputs: {activeTab: "activeTab"},
            decls: 10,
            vars: 9,
            consts: [[1, "side-pane"], [1, "side-pane-item", 3, "click"], ["class", "side-pane-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "settingsContent"], ["class", "settingsContent__tab", 3, "anonymous", 4, "ngIf"], ["class", "settingsContent__tab", 3, "game", 4, "ngIf"], ["class", "settingsContent__tab", 4, "ngIf"], [1, "settingsContent__tab", 3, "anonymous"], [1, "settingsContent__tab", 3, "game"], [1, "settingsContent__tab"]],
            template: function (p, M) {
                1 & p && (o.TgZ(0, "aside", 0)(1, "div", 1), o.NdJ("click", function () {
                    return M.selectTab("immutable")
                }), o._uU(2, " Immutable "), o.qZA(), o.YNc(3, Gs, 2, 3, "div", 2), o.TgZ(4, "div", 1), o.NdJ("click", function () {
                    return M.selectTab("wallet")
                }), o._uU(5, " WALLET "), o.qZA()(), o.TgZ(6, "div", 3), o.YNc(7, Ns, 1, 1, "app-apollo-settings", 4), o.YNc(8, Xt, 1, 1, "app-game-settings", 5), o.YNc(9, Ps, 1, 0, "app-wallet-settings", 6), o.qZA()), 2 & p && (o.xp6(1), o.ekj("active", "immutable" === M.activeTab), o.xp6(2), o.Q6J("ngForOf", M.games), o.xp6(1), o.ekj("active", "wallet" === M.activeTab), o.xp6(2), o.Q6J("@fade", M.activeTab), o.xp6(1), o.Q6J("ngIf", "immutable" === M.activeTab), o.xp6(1), o.Q6J("ngIf", "wallet" !== M.activeTab && "immutable" !== M.activeTab), o.xp6(1), o.Q6J("ngIf", "wallet" === M.activeTab))
            },
            directives: [xe.sg, xe.O5, Pt, Nt, us],
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.side-pane-item[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.side-pane-item[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22);line-height:1.4}[_nghost-%COMP%]{width:calc(var(--vw) * 60);height:calc(var(--vh) * 80);border-radius:calc(var(--vh) * .4);background-color:#0c1620;border:calc(var(--vh) * .15) solid #e0c58f;display:flex}.side-pane[_ngcontent-%COMP%]{width:30%;border-right:calc(var(--vh) * .15) solid #e0c58f;display:flex;flex-flow:column nowrap}.side-pane-item[_ngcontent-%COMP%]{padding:calc(var(--vh) * 1.8);color:#f6f6f6;text-align:center;transition:all .15s ease;cursor:pointer}.side-pane-item[_ngcontent-%COMP%]:hover{background-color:#1d2f41}.side-pane-item.active[_ngcontent-%COMP%]{background-color:#182531}.settingsContent[_ngcontent-%COMP%]{padding:calc(var(--vh) * 1.8);flex:1;display:flex}.settingsContent__tab[_ngcontent-%COMP%]{width:calc(var(--vw) * 30)}"],
            data: {animation: [(0, L.X$)("fade", [(0, L.eR)("* => *", [(0, L.jt)(500, (0, L.F4)([(0, L.oB)({opacity: 0}), (0, L.oB)({opacity: 1})]))])])]}
        }), b
    })();
    var Tt = s(5969);
    let rs = (() => {
        class b {
            constructor(p, M, H, ge) {
                this.modalService = p, this.audioService = M, this.settingsService = H, this.akumaService = ge, this.unsubscribe = new a.xQ
            }

            ngOnInit() {
                this.watchSettingsService()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            watchSettingsService() {
                this.settingsService.openSettings$.pipe((0, Ie.R)(this.unsubscribe), (0, ct.h)(p => !!p)).subscribe(p => {
                    this.openSettings(p), this.settingsService.markSettingsAsOpen()
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

            openSettings(p) {
                this.akumaService.postControlEvent("gu", "Arena", "", "settings", "Mnu", "pressed"), this.audioService.clickTinyV1.play(), this.modalService.createModal(Ss, {activeTab: p}, {
                    blurredBackground: !0,
                    canCloseFromOutside: !0,
                    position: f.e1.Center,
                    size: f.Cg.StretchableFullscreen
                })
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(dt.Z), o.Y36(K.pk), o.Y36(Tt.g), o.Y36(Me.jt))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["cerberus-draggable-titlebar"]],
            decls: 9,
            vars: 0,
            consts: [[1, "electronMenuItem", "electronMenuItem--closeWindow", 3, "click"], ["iconLigature", "close_x", 1, "electronMenuItem__icon"], [1, "electronMenuItem", "electronMenuItem--windowToggle", 3, "click"], ["iconLigature", "window_toggle", 1, "electronMenuItem__icon"], [1, "electronMenuItem", "electronMenuItem--minimise", 3, "click"], ["iconLigature", "window_minimise", 1, "electronMenuItem__icon"], [1, "electronMenuItem", "electronMenuItem--settings", 3, "click"], ["iconLigature", "settings_cog", 1, "electronMenuItem__icon"], [1, "draggable"]],
            template: function (p, M) {
                1 & p && (o.TgZ(0, "a", 0), o.NdJ("click", function () {
                    return M.closeWindow()
                }), o._UZ(1, "gu-icon", 1), o.qZA(), o.TgZ(2, "a", 2), o.NdJ("click", function () {
                    return M.windowFullscreen()
                }), o._UZ(3, "gu-icon", 3), o.qZA(), o.TgZ(4, "a", 4), o.NdJ("click", function () {
                    return M.minimize()
                }), o._UZ(5, "gu-icon", 5), o.qZA(), o.TgZ(6, "a", 6), o.NdJ("click", function () {
                    return M.openSettings("immutable")
                }), o._UZ(7, "gu-icon", 7), o.qZA(), o._UZ(8, "div", 8))
            },
            styles: ["[_nghost-%COMP%]{width:100%;height:28px;z-index:23;background:#1D2F41;display:flex;flex-direction:row-reverse;padding-right:8px}.draggable[_ngcontent-%COMP%]{flex:1;-webkit-app-region:drag}.electronMenuItem[_ngcontent-%COMP%]{cursor:pointer;display:flex;width:28px}.electronMenuItem[_ngcontent-%COMP%]:hover   .electronMenuItem__icon[_ngcontent-%COMP%]{color:#f6f6f6}.electronMenuItem__icon[_ngcontent-%COMP%]{font-size:14px;margin:auto;text-shadow:0 2px 0 rgba(39,39,39,.4);color:#7192b0}"]
        }), b
    })();
    var ks = s(39765), ws = s(25774), Es = s(97993);

    function Bt(b, B) {
        1 & b && (o.TgZ(0, "cerberus-announce-banner-control", 2), o._UZ(1, "cerberus-controllable-banner"), o.qZA())
    }

    function zt(b, B) {
        if (1 & b && (o.ynx(0), o.YNc(1, Bt, 2, 0, "cerberus-announce-banner-control", 1), o.BQk()), 2 & b) {
            const p = o.oxw();
            o.xp6(1), o.Q6J("featureFlagIf", p.Flags.showControllableBanner)
        }
    }

    let ps = (() => {
        class b {
            constructor(p, M, H, ge, Fe, Xe, Ke, kt, Ct) {
                this.vcr = p, this.analyticsService = M, this.authService = H, this.activityService = ge, this.router = Fe, this.navigationService = Xe, this.route = Ke, this.protocolService = kt, this.akumaService = Ct, this.Flags = Me.vU, this.destroyed$ = new a.xQ, this.watchForNavigation(), this.protocolService.watchProtocol()
            }

            ngOnInit() {
                this.recordActivity(), this.logSessionStarted(), this.logSessionAuthenticated(), this.authService.account$.pipe((0, Ie.R)(this.destroyed$)).subscribe(p => {
                    this.isLoggedIn = !!p
                })
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            logSessionStarted() {
                "function" == typeof gtag && gtag("event", "started", {event_category: "session"});
                const p = {is_referred: !1, landing_page: window.location.pathname};
                this.analyticsService.postEvent(new Ee.Session.Started.Event(p)), this.akumaService.postEvent("Flow", "_session_started", p), "function" == typeof fbq && fbq("track", "ViewLauncher")
            }

            logSessionAuthenticated() {
                this.authService.isLoggedIn() && ("function" == typeof gtag && gtag("event", "authenticated", {event_category: "session"}), this.analyticsService.postEvent(new Ee.Session.Authenticated.Event({})), this.akumaService.postEvent("Flow", "_sessionAuthenticated_succeeded"))
            }

            recordActivity() {
                (0, lt.F)(3e4).pipe((0, He.VS)(() => {
                    const p = this.authService.getUserId();
                    return p && this.authService.isLoggedIn() ? this.activityService.recordActivity(p) : (0, i.of)()
                }), (0, Qe.K)((p, M) => (console.error("App->recordActivity() error", p), (0, i.of)(p)))).subscribe()
            }

            watchForNavigation() {
                this.router.events.pipe((0, ct.h)(p => p instanceof z.m2), (0, We.U)(() => this.route), (0, We.U)(p => {
                    for (; p.firstChild;) p = p.firstChild;
                    return p
                }), (0, He.zg)(p => p.data), (0, We.U)(p => p.hasOwnProperty("state") ? p.state : ""), (0, Re.b)(p => this.navigationService.updateCurrentRoute(p))).subscribe(() => {
                })
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(o.s_b), o.Y36(Me.yD), o.Y36(K.mI), o.Y36(mt), o.Y36(z.F0), o.Y36(st.f), o.Y36(z.gz), o.Y36(ke), o.Y36(Me.jt))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["cerberus-root"]],
            decls: 4,
            vars: 1,
            consts: [[4, "ngIf"], ["class", "announceBannerControl announceBannerControl--inline", 4, "featureFlagIf"], [1, "announceBannerControl", "announceBannerControl--inline"]],
            template: function (p, M) {
                1 & p && (o.TgZ(0, "app-auto-letterbox"), o._UZ(1, "cerberus-draggable-titlebar"), o.YNc(2, zt, 2, 1, "ng-container", 0), o._UZ(3, "router-outlet"), o.qZA()), 2 & p && (o.xp6(2), o.Q6J("ngIf", !M.isLoggedIn))
            },
            directives: [c, rs, xe.O5, ks.w, ws.O, Es.i, z.lC],
            styles: ["[_nghost-%COMP%]{display:block}"]
        }), b
    })(), ns = (() => {
        class b {
            constructor() {
            }

            ngOnInit() {
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["app-home"]],
            decls: 1,
            vars: 0,
            template: function (p, M) {
                1 & p && o._UZ(0, "router-outlet")
            },
            directives: [z.lC],
            styles: ["[_nghost-%COMP%]{display:block;flex:1}.screen-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1}.app-bar[_ngcontent-%COMP%]{right:calc(var(--vw) * 3.33);position:absolute;bottom:0;right:calc(var(--vw) * 10)}"]
        }), b
    })();
    var is = s(75778), At = s(98723);

    function gs(b, B) {
        1 & b && (o.TgZ(0, "div", 6), o._uU(1, " Username is required "), o.qZA())
    }

    function as(b, B) {
        1 & b && (o.TgZ(0, "div", 6), o._uU(1, " Username must be at least 4 characters long "), o.qZA())
    }

    function _t(b, B) {
        if (1 & b && (o.TgZ(0, "div", 6), o._uU(1), o.qZA()), 2 & b) {
            const p = o.oxw();
            o.xp6(1), o.hij(" ", p.usernameError, " ")
        }
    }

    let St = (() => {
        class b {
            constructor(p, M, H, ge) {
                this.router = p, this.modalService = M, this.http = H, this.authService = ge, this.unsubscribe = new a.xQ
            }

            ngOnInit() {
                this.initForm()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            initForm() {
                this.usernameControl = new J.NI(this.username, [J.kI.required, J.kI.minLength(4)]), this.watchSearch()
            }

            watchSearch() {
                this.usernameControl.valueChanges.pipe((0, Ie.R)(this.unsubscribe), (0, de.b)(500), (0, is.x)(), (0, Re.b)(p => {
                    this.username = p, this.usernameError = void 0
                })).subscribe()
            }

            submit() {
                this.submitUsernameApi$(this.username).pipe((0, X.q)(1), (0, Re.b)(p => {
                    this.modalService.destroyTopModal(), this.router.navigate(["/"])
                }), (0, Qe.K)(p => (403 === p.status && (this.usernameError = "Username not allowed."), 400 === p.status && (this.usernameError = "Username is invalid."), 500 === p.status && (this.usernameError = "Username is taken."), (0, i.of)(p)))).subscribe()
            }

            submitUsernameApi$(p) {
                const M = this.authService.getUserId(), H = this.authService.getGameSessionTicket();
                return this.http.post(`https://test-auth.apollo.gg/account/${M}/user?session=${H}`, {username: p})
            }

            isUsernameValid$(p) {
                const M = ["immutable", "apollo", "mythic"];
                return (0, At.H)(1e3).pipe((0, Re.b)(H => {
                    this.usernameError = M.some(ge => ge === p) ? "Username is taken" : void 0
                }))
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(z.F0), o.Y36(dt.Z), o.Y36(ae.eN), o.Y36(K.mI))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["app-username-onboarding"]],
            decls: 11,
            vars: 5,
            consts: [[1, "title"], [1, "onboarding"], ["type", "search", "name", "usernameControl", "maxlength", "15", 1, "form__textInput", 3, "formControl"], [1, "form__inputHint"], ["class", "form__inputHint__text", 4, "ngIf"], ["size", "large", "text", "Submit", 1, "form__submitButton", 3, "disabled", "click"], [1, "form__inputHint__text"]],
            template: function (p, M) {
                1 & p && (o.TgZ(0, "header", 0), o._uU(1, " Unique Username Onboarding "), o.qZA(), o.TgZ(2, "section", 1), o._uU(3, " Onboarding section for inputting username. Please enter a unique username "), o._UZ(4, "input", 2), o.TgZ(5, "div", 3), o.YNc(6, gs, 2, 0, "div", 4), o.YNc(7, as, 2, 0, "div", 4), o.qZA(), o.TgZ(8, "gu-primary-hex-button", 5), o.NdJ("click", function () {
                    return M.submit()
                }), o.qZA(), o.TgZ(9, "div", 3), o.YNc(10, _t, 2, 1, "div", 4), o.qZA()()), 2 & p && (o.xp6(4), o.Q6J("formControl", M.usernameControl), o.xp6(2), o.Q6J("ngIf", M.usernameControl.hasError("required") && M.usernameControl.touched), o.xp6(1), o.Q6J("ngIf", M.usernameControl.hasError("minlength") && M.usernameControl.touched), o.xp6(1), o.Q6J("disabled", !M.usernameControl.valid || M.usernameError), o.xp6(2), o.Q6J("ngIf", M.usernameError))
            },
            directives: [J.Fj, J.nD, J.JJ, J.oH, xe.O5],
            styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.form__inputHint__text[_ngcontent-%COMP%], .form__textInput[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.form__inputHint__text[_ngcontent-%COMP%], .form__textInput[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.form__textInput[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{min-width:calc(var(--vw) * 15.62);border:1px solid white;z-index:21;overflow:auto;background-color:#060b11b3;border-radius:calc(var(--vh) * .4);display:flex;flex-direction:column}.title[_ngcontent-%COMP%]{padding:calc(var(--vh) * 1.85);border-bottom:1px solid white;font-size:x-large;text-align:center}.onboarding[_ngcontent-%COMP%]{padding:calc(var(--vh) * 1.85);text-align:center}.form__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);text-align:center;margin:0 auto;margin-top:calc(var(--vh) * 5);width:calc(var(--vw) * 25);background:#182531;color:#fff;border:1px solid #0f1b27;border-radius:calc(var(--vh) * .4)}.form__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.form__inputHint[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1);min-height:15px}.form__inputHint__text[_ngcontent-%COMP%]{text-shadow:0 1px 1px rgba(0,0,0,.3)}.form__submitButton[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 4.44);width:calc(var(--vw) * 25);margin-left:auto;margin-right:auto}"]
        }), b
    })();
    var Os = s(83920), Ws = s(45821);

    function Ms(b, B) {
        if (1 & b && (o.TgZ(0, "gu-body-text", 27), o._uU(1), o.qZA()), 2 & b) {
            const p = o.oxw();
            o.xp6(1), o.hij(" ", p.loginError, " ")
        }
    }

    let ls = (() => {
        class b {
            constructor(p, M, H, ge, Fe, Xe, Ke, kt, Ct, Lt, Ce, fe) {
                this.analyticsService = p, this.authService = M, this.fb = H, this.utils = ge, this.router = Fe, this.modalService = Xe, this.vcr = Ke, this.storageService = kt, this.audioService = Ct, this.http = Lt, this.akumaService = Ce, this.environment = fe, this.loading = !1, this.loginVideoSrc = "/assets/videos/login-video-pallas.webm"
            }

            ngOnInit() {
                this.buildFormGroup(), this.formGroup.setValue({rememberMe: !0, email: null, password: null})
            }

            login() {
                if (this.formGroup.invalid) return void this.utils.markFormGroupTouched(this.formGroup);
                if (this.loading) return;
                const p = {email: this.formGroup.value.email, password: this.formGroup.value.password},
                    M = this.formGroup.value.rememberMe;
                this.loginError = "", this.loading = !0, this.authService.login(p, M, 1).pipe((0, X.q)(1), (0, Re.b)(H => {
                    this.logSessionAuthenticated(H), this.storageService.set(["email"], p.email), this.router.navigate(["/"])
                }), (0, Qe.K)(H => this.handleLoginError(H)), (0, Be.x)(() => this.loading = !1)).subscribe()
            }

            logSessionAuthenticated(p) {
                "function" == typeof gtag && gtag("event", "authenticated", {event_category: "session"}), this.analyticsService.postEvent(new Ee.Session.Authenticated.Event({})), this.akumaService.postEvent("Flow", "_sessionAuthenticated_succeeded")
            }

            handleLoginError(p) {
                return console.warn("Login->login()->authService->login() unsuccessful.", p), this.loginError = p.error.error || "Unable to login.", (0, i.of)([])
            }

            get email() {
                return this.formGroup.get("email")
            }

            get password() {
                return this.formGroup.get("password")
            }

            buildFormGroup() {
                this.formGroup = this.fb.group({
                    email: ["", [J.kI.required, J.kI.email]],
                    password: ["", [J.kI.required]],
                    rememberMe: !0
                })
            }

            hasUniqueUsername$(p) {
                const M = this.authService.getGameSessionTicket();
                return this.http.get(`https://test-auth.apollo.gg/account/${p}/user?session=${M}`)
            }

            handleNoUniqueUsername() {
                this.modalService.createModal(St, {}, {
                    blurredBackground: !0,
                    canCloseFromInside: !1,
                    canCloseFromOutside: !1,
                    position: f.e1.Center,
                    size: f.Cg.StretchableWorkarea
                }, this.vcr)
            }

            playClickTinyV1() {
                this.audioService.clickTinyV1.play()
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(Me.yD), o.Y36(K.mI), o.Y36(J.qu), o.Y36(vt.F), o.Y36(z.F0), o.Y36(dt.Z), o.Y36(o.s_b), o.Y36(K.qy), o.Y36(K.pk), o.Y36(ae.eN), o.Y36(Me.jt), o.Y36(K.Ho))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["cerberus-login"]],
            decls: 38,
            vars: 11,
            consts: [[1, "columns", "is-gapless", "login__container"], [1, "column"], [1, "videoWrapper"], ["preload", "", "autoplay", "", "muted", "", "playsinline", "", "loop", "", 1, "loginVideo", 3, "src"], ["videoPlayer", ""], [1, "column", "is-narrow"], [1, "formContainer"], [1, "formWrapper"], [1, "loginForm", 3, "formGroup", "submit"], [1, "logo_wrapper"], ["src", "/assets/images/internal-logos/logo--gods-unchained-flat.svg", 1, "logo"], ["for", "email"], ["plain", "true"], ["formControlName", "email", "name", "email", "id", "email", "data-test-id", "email-input", "name", "email", "type", "email", "placeholder", "e.g. neferu@deadmail.com", 3, "valid", "click"], ["data-test-id", "email-errors", 3, "control"], ["key", "required", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "email-error-required"], ["key", "email", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "email-error-email"], ["for", "password"], ["formControlName", "password", "name", "password", "data-test-id", "password-input", "id", "password", "name", "password", "placeholder", "SomethingSneaky", "required", "", 3, "valid", "click"], ["data-test-id", "password-errors", 3, "control"], ["key", "required", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "password-error-required"], ["class", "loginError", "fillColor", "colors.alert", "size", "x-small", 4, "ngIf"], ["data-test-id", "login-button", "id", "button__SignIn", "theme", "dark", 1, "formButton", "loginForm__submitButton", 3, "loading", "disabled", "click"], ["size", "small", "fontWeight", "bold", "routerLink", "/reset", "fillColor", "colors.light.500", 1, "loginForm__forgottenLink"], [1, "createAccount"], ["size", "medium", "fontWeight", "regular", "fillColor", "colors.light.500", 1, "createAccount__title"], ["type", "secondary", "icon", "leave_website", "iconPosition", "right", "theme", "gunmetal", "text", "CREATE ACCOUNT", 1, "formButton", 3, "href"], ["fillColor", "colors.alert", "size", "x-small", 1, "loginError"]],
            template: function (p, M) {
                1 & p && (o.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "video", 3, 4), o._uU(5, " Your browser does not support HTML5 video. "), o.qZA()()(), o.TgZ(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "gu-form", 8), o.NdJ("submit", function () {
                    return M.login()
                }), o.TgZ(10, "div", 9), o._UZ(11, "img", 10), o.qZA(), o.TgZ(12, "gu-label", 11)(13, "gu-body-text", 12), o._uU(14, "Email"), o.qZA()(), o.TgZ(15, "gu-input", 13), o.NdJ("click", function () {
                    return M.playClickTinyV1()
                }), o.qZA(), o.TgZ(16, "gu-validation-errors", 14)(17, "gu-body-text", 15), o._uU(18, "Email is required."), o.qZA(), o.TgZ(19, "gu-body-text", 16), o._uU(20), o.qZA()(), o.TgZ(21, "gu-label", 17)(22, "gu-body-text", 12), o._uU(23, "Password"), o.qZA()(), o.TgZ(24, "gu-password-input", 18), o.NdJ("click", function () {
                    return M.playClickTinyV1()
                }), o.qZA(), o.TgZ(25, "gu-validation-errors", 19)(26, "gu-body-text", 20), o._uU(27, "Password is required."), o.qZA()(), o.YNc(28, Ms, 2, 1, "gu-body-text", 21), o.TgZ(29, "gu-standard-button", 22), o.NdJ("click", function () {
                    return M.login()
                }), o._uU(30, "Log in "), o.qZA(), o.TgZ(31, "gu-body-text", 23), o._uU(32, " Forgotten password? "), o.qZA()()(), o.TgZ(33, "div", 24)(34, "gu-simple-text", 25), o._uU(35, " Don't have an account? "), o.qZA(), o.TgZ(36, "gu-standard-button", 26), o._uU(37, "Create Account "), o.qZA()()()()()), 2 & p && (o.xp6(3), o.Q6J("src", M.loginVideoSrc, o.LSH), o.xp6(6), o.Q6J("formGroup", M.formGroup), o.xp6(6), o.Q6J("valid", M.formGroup.controls.email.valid), o.xp6(1), o.Q6J("control", M.formGroup.controls.email), o.xp6(4), o.hij("", M.formGroup.controls.email.value, " is not a valid email address"), o.xp6(4), o.Q6J("valid", M.formGroup.controls.password.valid), o.xp6(1), o.Q6J("control", M.formGroup.controls.password), o.xp6(3), o.Q6J("ngIf", M.loginError), o.xp6(1), o.Q6J("loading", M.loading)("disabled", !M.formGroup.valid), o.xp6(7), o.Q6J("href", M.environment.guRegisterURL))
            },
            directives: [J.JL, J.sg, Os._, J.JJ, J.u, Ws.n, J.Q7, xe.O5, z.rH],
            styles: ['h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.createAccountArea__text[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.createAccountArea__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.createAccountArea__text[_ngcontent-%COMP%]{line-height:1.4}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;background:#0F1B27;height:100%;position:relative}.login__container[_ngcontent-%COMP%]{width:100%;height:100%}.logo_wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;margin-bottom:2rem}.logo[_ngcontent-%COMP%]{width:100%;height:auto}.videoWrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.loginVideo[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;object-position:65% top;opacity:1}.formContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%}.formWrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:3rem}.loginForm[_ngcontent-%COMP%]{width:320px;display:flex;flex-flow:column nowrap}.loginError[_ngcontent-%COMP%]{margin-bottom:16px}.loginForm__forgottenLink[_ngcontent-%COMP%]{text-decoration:underline;margin:20px auto 8px;cursor:pointer}.formButton[_ngcontent-%COMP%]{width:100%}.createAccount[_ngcontent-%COMP%]{width:100%;padding:3rem;margin-top:auto;position:relative;display:flex;flex-flow:column nowrap;align-items:center}.createAccount[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;top:0px;right:0;height:3px;background:#1D2F41}.createAccount__title[_ngcontent-%COMP%]{margin-bottom:16px}.createAccountArea__text[_ngcontent-%COMP%]{text-align:center;font-weight:600;color:#f6f6f6}']
        }), b
    })();
    s(40760);
    var hs = s(51256);

    function Zt(b, B) {
        1 & b && (o.TgZ(0, "div", 17), o._uU(1, " Email address is required "), o.qZA())
    }

    function $s(b, B) {
        1 & b && (o.TgZ(0, "div", 17), o._uU(1, " Enter valid email address "), o.qZA())
    }

    function ms(b, B) {
        1 & b && (o.TgZ(0, "div", 17), o._uU(1, " This email is already in use. "), o.qZA())
    }

    function Ts(b, B) {
        1 & b && (o.TgZ(0, "div", 17), o._uU(1, " User name is required "), o.qZA())
    }

    function _s(b, B) {
        1 & b && (o.TgZ(0, "div", 17), o._uU(1, " User name cannot be the same as email "), o.qZA())
    }

    function qt(b, B) {
        1 & b && (o.TgZ(0, "div", 17), o._uU(1, " Password is required "), o.qZA())
    }

    function js(b, B) {
        1 & b && (o.TgZ(0, "div", 17), o._uU(1, " Passwords must be at least 8 characters long "), o.qZA())
    }

    function As(b, B) {
        1 & b && (o.TgZ(0, "div", 17), o._uU(1, " Passwords don't match "), o.qZA())
    }

    function Is(b, B) {
        if (1 & b) {
            const p = o.EpF();
            o.TgZ(0, "form", 4), o.NdJ("ngSubmit", function () {
                return o.CHM(p), o.oxw().register()
            }), o.TgZ(1, "input", 5), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().playClickTinyV1()
            }), o.qZA(), o.YNc(2, Zt, 2, 0, "div", 6), o.YNc(3, $s, 2, 0, "div", 6), o.YNc(4, ms, 2, 0, "div", 6), o.TgZ(5, "input", 7), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().playClickTinyV1()
            }), o.qZA(), o.YNc(6, Ts, 2, 0, "div", 6), o.YNc(7, _s, 2, 0, "div", 6), o.TgZ(8, "input", 8), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().playClickTinyV1()
            }), o.qZA(), o.YNc(9, qt, 2, 0, "div", 6), o.YNc(10, js, 2, 0, "div", 6), o.TgZ(11, "input", 9), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().playClickTinyV1()
            }), o.qZA(), o.YNc(12, As, 2, 0, "div", 6), o.TgZ(13, "gu-vertical-space", 10)(14, "gu-checkbox", 11), o.NdJ("change", function (H) {
                return o.CHM(p), o.oxw().onAcceptTermsCheck(H)
            }), o.TgZ(15, "gu-body-text", 12), o._uU(16, " I agree to the "), o.TgZ(17, "a", 13), o._uU(18, "Terms and Conditions"), o.qZA()()()(), o.TgZ(19, "gu-checkbox", 11), o.NdJ("change", function (H) {
                return o.CHM(p), o.oxw().onSubscribeCheck(H)
            }), o.TgZ(20, "gu-body-text", 12), o._uU(21, " Sign up for exclusive updates! "), o.qZA()(), o.TgZ(22, "gu-primary-hex-button", 14), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().register()
            }), o.qZA(), o.TgZ(23, "label", 15), o._uU(24, "Already have an account? "), o.TgZ(25, "a", 16), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().playClickTinyV1()
            }), o._uU(26, " Login Now. "), o.qZA()()()
        }
        if (2 & b) {
            const p = o.oxw();
            o.Q6J("formGroup", p.formGroup), o.xp6(2), o.Q6J("ngIf", p.email.hasError("required") && p.email.touched), o.xp6(1), o.Q6J("ngIf", p.email.hasError("email") && p.email.touched && (null == p.email.value ? null : p.email.value.length) > 0), o.xp6(1), o.Q6J("ngIf", p.emailError), o.xp6(2), o.Q6J("ngIf", p.userName.hasError("required") && p.userName.touched), o.xp6(1), o.Q6J("ngIf", p.userName.hasError("mismatch") && p.userName.touched), o.xp6(2), o.Q6J("ngIf", p.password.hasError("required") && p.password.touched), o.xp6(1), o.Q6J("ngIf", p.password.hasError("minlength") && p.password.touched), o.xp6(2), o.Q6J("ngIf", (p.passwordConfirm.hasError("required") || p.passwordConfirm.hasError("mismatch")) && p.passwordConfirm.touched), o.xp6(10), o.Q6J("loading", p.loading)("text", p.loading ? "Signing Up" : "Sign Up"), o.uIk("disabled", !p.formGroup.valid)
        }
    }

    function Hs(b, B) {
        if (1 & b) {
            const p = o.EpF();
            o.TgZ(0, "div", 18)(1, "div", 19)(2, "div"), o._uU(3, " We've sent an email to "), o.TgZ(4, "span"), o._uU(5), o.qZA(), o._uU(6, " - please follow the link in that email to confirm your account in a browser and then come back to login. "), o.qZA(), o._UZ(7, "gu-primary-hex-button", 20), o.TgZ(8, "div"), o._uU(9, " Still waiting? Try sending again or starting from scratch. "), o.qZA(), o.TgZ(10, "gu-primary-hex-button", 21), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().register(!0)
            }), o.qZA(), o.TgZ(11, "gu-primary-hex-button", 22), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().resetRegister()
            }), o.qZA()()()
        }
        if (2 & b) {
            const p = o.oxw();
            o.xp6(5), o.Oqu(p.email.value)
        }
    }

    function vo(b, B) {
        1 & b && (o.TgZ(0, "div", 9), o._uU(1, " Enter valid email address "), o.qZA())
    }

    function Zs(b, B) {
        if (1 & b) {
            const p = o.EpF();
            o.TgZ(0, "form", 4), o.NdJ("submit", function () {
                return o.CHM(p), o.oxw().reset()
            }), o.TgZ(1, "input", 5), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().playClickTinyV1()
            }), o.qZA(), o.YNc(2, vo, 2, 0, "div", 6), o.TgZ(3, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().reset()
            }), o.qZA(), o.TgZ(4, "a", 8), o._uU(5, " Back to login "), o.qZA()()
        }
        if (2 & b) {
            const p = o.oxw();
            o.Q6J("formGroup", p.formGroup), o.xp6(2), o.Q6J("ngIf", p.email.errors && p.email.touched), o.xp6(1), o.Q6J("text", p.loading ? "Resetting" : "Reset Password")
        }
    }

    function Ks(b, B) {
        if (1 & b) {
            const p = o.EpF();
            o.TgZ(0, "div", 10)(1, "div", 11), o._uU(2), o.qZA(), o.TgZ(3, "a", 12), o.NdJ("click", function () {
                return o.CHM(p), o.oxw().tryAgain()
            }), o._uU(4, " Try Again "), o.qZA(), o.TgZ(5, "a", 8), o._uU(6, " Back to login "), o.qZA()()
        }
        if (2 & b) {
            const p = o.oxw();
            o.xp6(2), o.Oqu(p.info)
        }
    }

    const Vs = [{path: "", redirectTo: "game/gu", pathMatch: "full"}, {path: "login", component: ls}, {
        path: "register", component: (() => {
            class b {
                constructor(p, M, H, ge, Fe, Xe) {
                    this.analyticsService = p, this.auth = M, this.fb = H, this.utils = ge, this.storageService = Fe, this.audioService = Xe, this.termsError = !1, this.emailError = !1, this.finished = !1, this.loading = !1, this.videoSrc = "/assets/videos/login-video.webm", this.unsubscribe = new a.xQ
                }

                ngOnInit() {
                    this.buildFormGroup(), this.logRegistrationStarted(), this.email.valueChanges.pipe((0, Ie.R)(this.unsubscribe)).subscribe(() => this.emailError = !1)
                }

                ngOnDestroy() {
                    this.passwordChangeSubscription && this.passwordChangeSubscription.unsubscribe(), this.passwordChangeSubscription = null, this.emailChangeSubscription && this.emailChangeSubscription.unsubscribe(), this.emailChangeSubscription = null, this.unsubscribe.next(), this.unsubscribe.complete()
                }

                logRegistrationStarted() {
                    "function" == typeof fbq && fbq("track", "Lead"), "function" == typeof gtag && gtag("event", "generate_lead"), this.analyticsService.postEvent(new Ee.Registration.Started.Event({}))
                }

                logAccountCreated(p) {
                    this.storageService.set(["user_id"], p.id), this.analyticsService.postEvent(new Ee.Account.Created.Event({
                        email: p.email,
                        is_referred: !1,
                        subscribed: p.subscribe,
                        username: p.username,
                        user_id: p.id
                    })), this.storageService.delete(["user_id"]), "function" == typeof fbq && fbq("track", "CompleteRegistration"), "function" == typeof gtag && gtag("event", "sign_up")
                }

                onSubscribeCheck(p) {
                    this.subscribe.setValue(p.detail.value)
                }

                onAcceptTermsCheck(p) {
                    this.agreeToTerms.setValue(p.detail.value)
                }

                register(p) {
                    const M = {
                        email: this.email.value,
                        username: this.userName.value,
                        password: this.password.value,
                        subscribe: this.subscribe.value
                    }, H = Object.assign({}, M);
                    delete H.password;
                    for (const ge in H) this.storageService.set([ge], `${H[ge]}`);
                    if (this.formGroup.invalid) this.utils.markFormGroupTouched(this.formGroup); else if (!this.loading) {
                        if (this.termsError = !1, this.emailError = !1, !this.agreeToTerms.value) return void (this.termsError = !0);
                        this.loading = !0, this.auth.register(M).pipe((0, X.q)(1), (0, Re.b)(ge => {
                            this.finished = !0, p || this.logAccountCreated(Object.assign({id: ge}, H))
                        }), (0, Qe.K)(ge => (console.error("Register->register()->authService.register() registration unsuccessfull.", ge), this.emailError = !0, (0, i.of)([]))), (0, Be.x)(() => this.loading = !1)).subscribe()
                    }
                }

                resetRegister() {
                    this.formGroup.reset(), this.finished = !1
                }

                passwordMatchValidator(p) {
                    if (!p.parent) return null;
                    const M = p.parent.get("password");
                    return this.passwordChangeSubscription || (this.passwordChangeSubscription = M.valueChanges.pipe((0, Ie.R)(this.unsubscribe)).subscribe(() => {
                        p.updateValueAndValidity()
                    })), M.value !== p.value ? {mismatch: !0} : null
                }

                usernameMatchEmailValidator(p) {
                    if (!p.parent) return null;
                    const M = p.parent.get("email");
                    return this.emailChangeSubscription || (this.emailChangeSubscription = M.valueChanges.pipe((0, Ie.R)(this.unsubscribe)).subscribe(H => {
                        p.updateValueAndValidity()
                    })), p.value === M.value ? {mismatch: !0} : null
                }

                get email() {
                    return this.formGroup.get("email")
                }

                get password() {
                    return this.formGroup.get("password")
                }

                get passwordConfirm() {
                    return this.formGroup.get("passwordConfirm")
                }

                get userName() {
                    return this.formGroup.get("userName")
                }

                get agreeToTerms() {
                    return this.formGroup.get("agreeToTerms")
                }

                get subscribe() {
                    return this.formGroup.get("subscribe")
                }

                buildFormGroup() {
                    this.formGroup = this.fb.group({
                        email: ["", [J.kI.required, J.kI.email]],
                        userName: ["", [J.kI.required, this.usernameMatchEmailValidator.bind(this)]],
                        password: ["", [J.kI.required, J.kI.minLength(8)]],
                        passwordConfirm: ["", [J.kI.required, this.passwordMatchValidator.bind(this)]],
                        subscribe: [!1],
                        agreeToTerms: [!1]
                    })
                }

                playClickTinyV1() {
                    this.audioService.clickTinyV1.play()
                }
            }

            return b.\u0275fac = function (p) {
                return new (p || b)(o.Y36(hs.y), o.Y36(K.mI), o.Y36(J.qu), o.Y36(vt.F), o.Y36(K.qy), o.Y36(K.pk))
            }, b.\u0275cmp = o.Xpm({
                type: b,
                selectors: [["cerberus-register"]],
                decls: 5,
                vars: 3,
                consts: [["preload", "", "autoplay", "", "muted", "", "playsinline", "", "loop", "", 1, "video", 3, "src"], ["videoPlayer", ""], ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "success-info", 4, "ngIf"], [1, "form", 3, "formGroup", "ngSubmit"], ["aria-describedby", "emailErrorLabel", "name", "email", "type", "email", "formControlName", "email", "placeholder", "Email", "autocomplete", "false", 1, "form__textInput", 3, "click"], ["class", "form__inputHint", 4, "ngIf"], ["aria-describedby", "usernameErrorLabel", "name", "username", "type", "text", "formControlName", "userName", "placeholder", "Username", "autocomplete", "false", 1, "form__textInput", 3, "click"], ["name", "password", "type", "password", "formControlName", "password", "placeholder", "Password", 1, "form__textInput", 3, "click"], ["name", "repeat", "type", "password", "formControlName", "passwordConfirm", "placeholder", "Repeat", 1, "form__textInput", 3, "click"], ["both", "medium"], ["inline", "", 3, "change"], ["size", "small", "fillColor", "colors.light.100"], ["href", "https://apollo.gg/terms"], ["size", "large", 1, "form__submitButton", 3, "loading", "text", "click"], [1, "nav_login", "font-weight-bold"], ["routerLink", "/login", 1, "form__backToLogin", 3, "click"], [1, "form__inputHint"], [1, "success-info"], [1, "register-finished", "text-center"], ["size", "normal", "routerLink", "/login", "text", "Login", 1, "form__submitButton"], ["size", "normal", "text", "Resend", 1, "form__submitButton", 3, "click"], ["size", "normal", "text", "Re-Register", 1, "form__submitButton", 3, "click"]],
                template: function (p, M) {
                    1 & p && (o.TgZ(0, "video", 0, 1), o._uU(2, " Your browser does not support HTML5 video.\n"), o.qZA(), o.YNc(3, Is, 27, 12, "form", 2), o.YNc(4, Hs, 12, 1, "div", 3)), 2 & p && (o.Q6J("src", M.videoSrc, o.LSH), o.xp6(3), o.Q6J("ngIf", !M.finished), o.xp6(1), o.Q6J("ngIf", M.finished))
                },
                directives: [xe.O5, J._Y, J.JL, J.sg, J.Fj, J.JJ, J.u, z.yS, z.rH],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.form-check-label[_ngcontent-%COMP%], .nav_login[_ngcontent-%COMP%], .form__backToLogin[_ngcontent-%COMP%], .form__tryAgain[_ngcontent-%COMP%], .form__inputHint[_ngcontent-%COMP%], .form__textInput[_ngcontent-%COMP%], .register-finished[_ngcontent-%COMP%], .success-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.register-finished[_ngcontent-%COMP%], .success-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.form-check-label[_ngcontent-%COMP%], .nav_login[_ngcontent-%COMP%], .form__backToLogin[_ngcontent-%COMP%], .form__tryAgain[_ngcontent-%COMP%], .form__inputHint[_ngcontent-%COMP%], .form__textInput[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.form__textInput[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;background:#182531;height:100%}.video[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;top:0;left:0;object-fit:cover;object-position:0 0;opacity:.65}.form[_ngcontent-%COMP%], .success-info[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 31);width:calc(var(--vw) * 17.7);position:relative;display:flex;flex-flow:column nowrap}.success-info[_ngcontent-%COMP%]{width:calc(var(--vw) * 27.7)}.success-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]{text-align:center;margin-top:calc(var(--vh) * 1.48)}.form__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);background:#182531;color:#fff;border:1px solid #0f1b27;border-radius:calc(var(--vh) * .4)}.form__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.form__inputHint[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .6);text-shadow:0 1px 1px rgba(0,0,0,.3)}.form__backToLogin[_ngcontent-%COMP%], .form__tryAgain[_ngcontent-%COMP%]{text-align:center;color:#f6f6f6;text-shadow:0 1px 1px rgba(0,0,0,.3);margin-top:calc(var(--vh) * 2);cursor:pointer}.form__submitButton[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 4.44);margin-bottom:calc(var(--vh) * 4.44);margin-left:auto;margin-right:auto;min-width:160px}.form__subscribe-checkbox[_ngcontent-%COMP%], .form__submitButton[_ngcontent-%COMP%], .nav_login[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3)}"]
            }), b
        })()
    }, {
        path: "reset", component: (() => {
            class b {
                constructor(p, M, H, ge) {
                    this.authService = p, this.fb = M, this.utils = H, this.audioService = ge, this.finished = !1, this.loading = !1, this.videoSrc = "/assets/videos/login-video-pallas.webm"
                }

                ngOnInit() {
                    this.buildFormGroup()
                }

                reset() {
                    this.formGroup.invalid ? this.utils.markFormGroupTouched(this.formGroup) : this.loading || (this.loading = !0, this.authService.resetPassword(this.email.value).pipe((0, X.q)(1)).subscribe(p => {
                        this.loading = !1, this.finished = !0, this.info = "Follow the instructions sent to you by email in order to reset your password."
                    }, p => {
                        this.loading = !1, this.finished = !0, console.error(p), this.info = "Error has occurred during sending an email. Try again later."
                    }))
                }

                get email() {
                    return this.formGroup.get("email")
                }

                buildFormGroup() {
                    this.formGroup = this.fb.group({email: ["", [J.kI.required, J.kI.email]]})
                }

                tryAgain() {
                    this.finished = !1, this.formGroup.reset()
                }

                playClickTinyV1() {
                    this.audioService.clickTinyV1.play()
                }
            }

            return b.\u0275fac = function (p) {
                return new (p || b)(o.Y36(K.mI), o.Y36(J.qu), o.Y36(vt.F), o.Y36(K.pk))
            }, b.\u0275cmp = o.Xpm({
                type: b,
                selectors: [["app-reset"]],
                decls: 5,
                vars: 3,
                consts: [["preload", "", "autoplay", "", "muted", "", "playsinline", "", "loop", "", 1, "video", 3, "src"], ["videoPlayer", ""], ["class", "form", 3, "formGroup", "submit", 4, "ngIf"], ["class", "success-info", 4, "ngIf"], [1, "form", 3, "formGroup", "submit"], ["aria-describedby", "emailErrorLabel", "name", "email", "type", "email", "formControlName", "email", "placeholder", "Email", 1, "form__textInput", 3, "click"], ["class", "form__inputHint", 4, "ngIf"], ["size", "large", 1, "form__submitButton", 3, "text", "click"], ["routerLink", "/login", 1, "form__backToLogin"], [1, "form__inputHint"], [1, "success-info"], [1, "info-label"], [1, "form__tryAgain", 3, "click"]],
                template: function (p, M) {
                    1 & p && (o.TgZ(0, "video", 0, 1), o._uU(2, " Your browser does not support HTML5 video.\n"), o.qZA(), o.YNc(3, Zs, 6, 3, "form", 2), o.YNc(4, Ks, 7, 1, "div", 3)), 2 & p && (o.Q6J("src", M.videoSrc, o.LSH), o.xp6(3), o.Q6J("ngIf", !M.finished), o.xp6(1), o.Q6J("ngIf", M.finished))
                },
                directives: [xe.O5, J._Y, J.JL, J.sg, J.Fj, J.JJ, J.u, z.yS],
                styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%], label[_ngcontent-%COMP%], a[_ngcontent-%COMP%], div[_ngcontent-%COMP%], input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Unchained,serif;font-weight:700}.form__backToLogin[_ngcontent-%COMP%], .form__tryAgain[_ngcontent-%COMP%], .form__inputHint[_ngcontent-%COMP%], .form__textInput[_ngcontent-%COMP%], .success-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.success-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.form__backToLogin[_ngcontent-%COMP%], .form__tryAgain[_ngcontent-%COMP%], .form__inputHint[_ngcontent-%COMP%], .form__textInput[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}.form__textInput[_ngcontent-%COMP%]{line-height:1.4}[_nghost-%COMP%]{display:flex;flex-flow:column nowrap;align-items:center;background:#182531;height:100%}.video[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;top:0;left:0;object-fit:cover;object-position:0 0;opacity:.65}.form[_ngcontent-%COMP%], .success-info[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 37.96);width:calc(var(--vw) * 17.7);position:relative;display:flex;flex-flow:column nowrap}.success-info[_ngcontent-%COMP%]{width:calc(var(--vw) * 27.7)}.success-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%]{text-align:center;margin-top:calc(var(--vh) * 1.48)}.form__textInput[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);background:#182531;color:#fff;border:1px solid #0f1b27;border-radius:calc(var(--vh) * .4)}.form__textInput[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.form__inputHint[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .6);text-shadow:0 1px 1px rgba(0,0,0,.3)}.form__backToLogin[_ngcontent-%COMP%], .form__tryAgain[_ngcontent-%COMP%]{text-align:center;color:#f6f6f6;text-shadow:0 1px 1px rgba(0,0,0,.3);margin-top:calc(var(--vh) * 2);cursor:pointer}.form__submitButton[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 4.44);margin-left:auto;margin-right:auto}"]
            }), b
        })()
    }, {
        path: "game",
        component: ns,
        canActivate: [(() => {
            class b {
                constructor(p) {
                    this.authService = p
                }

                canActivate(p, M) {
                    return this.authService.refreshToken().pipe((0, He.VS)(H => this.authService.saveAccount(H, !0, 1)), (0, Qe.K)(H => (this.authService.logout(), (0, i.of)(H))))
                }
            }

            return b.\u0275fac = function (p) {
                return new (p || b)(o.LFG(K.mI))
            }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac, providedIn: "root"}), b
        })()],
        data: {reuse: !0},
        children: [{path: "gu", loadChildren: () => s.e(957).then(s.bind(s, 6957)).then(b => b.GuModule)}]
    }];
    let Qs = (() => {
        class b {
        }

        return b.\u0275fac = function (p) {
            return new (p || b)
        }, b.\u0275mod = o.oAB({type: b}), b.\u0275inj = o.cJS({
            imports: [[z.Bz.forRoot(Vs, {
                useHash: !0,
                enableTracing: !1
            })], z.Bz]
        }), b
    })();
    var Ys = s(98009), yo = s(47313), Kt = s(41746), xo = s(30567), Ds = s(36053), It = s(87545), Ls = s(43164),
        Js = s(52216), Us = s(87168), fs = s(33403), nt = s(28510);
    let Xs = (() => {
        class b {
            constructor(p, M, H) {
                this.cerberusModalService = p, this.activeModal = M, this.akumaService = H
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

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(nt.Qz), o.Y36(nt.mX), o.Y36(Me.jt))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["cerberus-skip-tutorial-modal"]],
            decls: 15,
            vars: 0,
            consts: [[1, "modal__header"], [1, "modal__content"], ["top", "3x-large", "bottom", "medium"], ["align", "center", "size", "x-small", "fillGradient", "gradients.gold.simple"], ["top", "medium", "bottom", "medium"], ["fillColor", "colors.light.800", "kind", "x-small"], [1, "modal__btnsGroup"], [1, "modal__btn", 3, "click"]],
            template: function (p, M) {
                1 & p && (o._UZ(0, "div", 0), o.TgZ(1, "div", 1)(2, "gu-vertical-space", 2)(3, "gu-heading-text", 3), o._uU(4, " Are you Sure you want to skip the tutorial?"), o.qZA()(), o.TgZ(5, "gu-vertical-space", 4)(6, "gu-paragraph-text", 5), o._uU(7, " You won\u2019t receive your 3 Core Packs. "), o._UZ(8, "br"), o._uU(9, " To unlock this reward at a later time, come back by selecting \u201cTutorial\u201d from the Arena screen. "), o.qZA()(), o.TgZ(10, "div", 6)(11, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                    return M.goBack()
                }), o._uU(12, " Go Back "), o.qZA(), o.TgZ(13, "gu-primary-hex-button", 7), o.NdJ("click", function () {
                    return M.skipTutorial()
                }), o._uU(14, " Yes "), o.qZA()()())
            },
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:640px;text-align:center}.modal__header[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c6a052 2.93%,#ebc98b 25.01%,#fff2d8 50.44%,#ebc98b 74.21%,#c6a052 96.95%);box-shadow:0 2px 5px #0000004d;height:3px;width:100%}.modal__content[_ngcontent-%COMP%]{background:linear-gradient(90deg,#0f1b27 1.39%,#0f1b27 12.6%,#1d2f41 50.06%,#0f1b27 87.64%,#0f1b27 98.63%);box-sizing:border-box;border:2px solid #3D5A74;display:flex;flex-direction:column;padding:0 calc(var(--vw) * 1.5);align-items:center}.modal__btnsGroup[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;padding:20px 0;width:50%}.modal__btn[_ngcontent-%COMP%]{padding:15px;margin:10px}.modal__closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;font-size:calc(var(--vh) * 2);color:#8be1e0;cursor:pointer}.modal__closeButton[_ngcontent-%COMP%]:hover{color:#fff}"]
        }), b
    })();
    var qs = s(11130), eo = s(8561), Rs = s(17268);
    let Bs = (() => {
        class b {
            constructor(p, M, H, ge, Fe, Xe, Ke, kt) {
                this.cerberusModalService = p, this.queueService = M, this.gameService = H, this.guGameService = ge, this.playService = Fe, this.authService = Xe, this.audioService = Ke, this.akumaService = kt
            }

            ngOnInit() {
                this.akumaService.postScreenEvent("tutorial", "Welcome", "", "opened"), this.akumaService.postFlowEvent("tutorialComplete", "started")
            }

            beginTutorial() {
                this.audioService.arenaClickStart.play(), this.akumaService.postControlEvent("tutorial", "Welcome", "", "go", "Btn", "pressed");
                const p = this.authService.getUserId();
                this.queueService.activeQueues$.pipe((0, X.q)(1)).subscribe(M => {
                    M.forEach(H => this.queueService.cancel(H))
                }), this.gameService.getBranch$(1).pipe((0, X.q)(1), (0, Us.M)(this.guGameService.getGameMode$(fs.B_.TUTORIAL)), (0, Re.b)(([M, H]) => {
                    this.playService.play({
                        realm: M.id,
                        mode: fs.B_.TUTORIAL,
                        mission: H.properties.mission,
                        player: {
                            id: p,
                            deck: {id: H.properties.player.deck.id, global: H.properties.player.deck.global},
                            collection: {id: H.properties.player.collection.id}
                        },
                        opponent: {
                            deck: {id: H.properties.opponent.deck.id, global: H.properties.opponent.deck.global},
                            collection: {id: H.properties.opponent.collection.id}
                        }
                    })
                })).subscribe(M => this.cerberusModalService.dismissAll())
            }

            skipTutorial() {
                this.akumaService.postControlEvent("tutorial", "Welcome", "", "skip", "Btn", "pressed");
                this.cerberusModalService.open(Xs, {centered: !0}).result.then(H => {
                }, H => {
                })
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.Y36(nt.Qz), o.Y36(Gt.g), o.Y36(ht.hM), o.Y36(qs.xV), o.Y36(eo.GT), o.Y36(K.mI), o.Y36(K.pk), o.Y36(Me.jt))
        }, b.\u0275cmp = o.Xpm({
            type: b,
            selectors: [["cerberus-tutorial-start-modal"]],
            decls: 48,
            vars: 1,
            consts: [[1, "leftPanel"], ["src", "/gu-assets/images/tutorial/citadel-herald-bg.webp", 1, "leftPanel__image"], [1, "leftPanel__imageShadow"], ["src", "/gu-assets/images/GULogo-white.svg", "alt", "", 1, "leftPanel__logoImage"], [1, "rightPanel"], ["fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "x-small", 1, "rightPanel__title"], ["fillColor", "colors.light.300", 1, "rightPanel__subtitle"], [1, "rightPanel__gameplay"], ["src", "/gu-assets/images/tutorial/gameplay-basics.webp", 1, "rightPanel__gameplay__image"], [1, "rightPanel__gameplay__title"], ["fillColor", "colors.light.300"], [1, "rightPanel__howto"], [1, "rightPanel__howto__mana"], ["src", "/gu-assets/images/tutorial/how-mana-works.webp", 1, "rightPanel__howto__image"], [1, "rightPanel__howto__title"], [1, "rightPanel__howto__win"], ["src", "/gu-assets/images/tutorial/how-to-win.webp", 1, "rightPanel__howto__image"], [1, "rightPanel__freeStuff"], ["src", "/gu-assets/images/tutorial/free-stuff-banner-start.png", 1, "rightPanel__freeStuff__bgImage"], ["src", "/gu-assets/images/tutorial/free-core-pack.png", 1, "rightPanel__freeStuff__cardImage"], ["fillColor", "colors.light.300", 1, "rightPanel__freeStuff__text"], [1, "rightPanel__freeStuff__tooltip", 3, "title"], ["iconLigature", "little_help"], ["size", "medium", "text", "BEGIN", 1, "rightPanel__beginTutorialBtn", 3, "click"], ["fillColor", "colors.apocyan.100", 1, "rightPanel__closeTutorialBtn", 3, "click"]],
            template: function (p, M) {
                1 & p && (o.TgZ(0, "div", 0)(1, "picture"), o._UZ(2, "img", 1), o.qZA(), o._UZ(3, "div", 2), o.TgZ(4, "picture"), o._UZ(5, "img", 3), o.qZA()(), o.TgZ(6, "div", 4)(7, "gu-heading-text", 5), o._uU(8, " Welcome to the Tutorial "), o.qZA(), o.TgZ(9, "gu-simple-text", 6), o._uU(10, " A swift lesson to help you learn the basics. All great heroes need to start somewhere! "), o.qZA(), o.TgZ(11, "div", 7)(12, "picture"), o._UZ(13, "img", 8), o.qZA(), o.TgZ(14, "div", 9)(15, "gu-simple-text", 10)(16, "strong"), o._uU(17, "GAMEPLAY BASICS"), o.qZA()()()(), o.TgZ(18, "div", 11)(19, "div", 12)(20, "picture"), o._UZ(21, "img", 13), o.qZA(), o.TgZ(22, "div", 14)(23, "gu-simple-text", 10)(24, "strong"), o._uU(25, "HOW MANA WORKS"), o.qZA()()()(), o.TgZ(26, "div", 15)(27, "picture"), o._UZ(28, "img", 16), o.qZA(), o.TgZ(29, "div", 14)(30, "gu-simple-text", 10)(31, "strong"), o._uU(32, "HOW TO WIN"), o.qZA()()()()(), o.TgZ(33, "div", 17)(34, "picture"), o._UZ(35, "img", 18), o.qZA(), o.TgZ(36, "picture"), o._UZ(37, "img", 19), o.qZA(), o.TgZ(38, "gu-simple-text", 20), o._uU(39, " Receive "), o.TgZ(40, "strong"), o._uU(41, "3 Core Packs "), o.qZA(), o.TgZ(42, "app-tooltip", 21), o._UZ(43, "gu-icon", 22), o.qZA(), o._uU(44, " upon completion of the tutorial. "), o.qZA()(), o.TgZ(45, "gu-primary-hex-button", 23), o.NdJ("click", function () {
                    return M.beginTutorial()
                }), o.qZA(), o.TgZ(46, "gu-simple-text", 24), o.NdJ("click", function () {
                    return M.skipTutorial()
                }), o._uU(47, " MAYBE LATER "), o.qZA()()), 2 & p && (o.xp6(42), o.Q6J("title", "Core Packs hold <br/> non-blockchain cards that can <br/> be used to expand your decks."))
            },
            directives: [Rs.K],
            styles: ["[_nghost-%COMP%]{display:flex;background-color:#0f1b27;border:2px solid #3D5A74;box-sizing:border-box;box-shadow:5px 5px 15px #0006;width:1050px}.rightPanel[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.rightPanel__title[_ngcontent-%COMP%]{margin-top:20px}.rightPanel__subtitle[_ngcontent-%COMP%]{margin:20px;text-align:center}.rightPanel__gameplay[_ngcontent-%COMP%]{margin:0 30px;width:450px}.rightPanel__gameplay__image[_ngcontent-%COMP%]{width:450px;display:block}.rightPanel__gameplay__title[_ngcontent-%COMP%]{background:linear-gradient(to left,#0F1B27 0%,#1D2F41 100%);text-align:center;padding:10px}.rightPanel__howto[_ngcontent-%COMP%]{display:flex;margin-top:10px}.rightPanel__howto__mana[_ngcontent-%COMP%]{margin-right:3px}.rightPanel__howto__win[_ngcontent-%COMP%]{margin-left:3px}.rightPanel__howto__image[_ngcontent-%COMP%]{width:222px;display:block}.rightPanel__howto__title[_ngcontent-%COMP%]{background:linear-gradient(to left,#0F1B27 0%,#1D2F41 100%);text-align:center;padding:10px}.rightPanel__freeStuff[_ngcontent-%COMP%]{position:relative}.rightPanel__freeStuff__bgImage[_ngcontent-%COMP%]{width:510px;display:block;margin-top:35px}.rightPanel__freeStuff__cardImage[_ngcontent-%COMP%]{position:absolute;top:0px;left:15px;height:90px}.rightPanel__freeStuff__text[_ngcontent-%COMP%]{position:absolute;top:45px;left:85px;font-size:15px}.rightPanel__freeStuff__tooltip[_ngcontent-%COMP%]{display:inline;text-align:center}.rightPanel__beginTutorialBtn[_ngcontent-%COMP%]{margin-top:20px;padding:0 40px}.rightPanel__closeTutorialBtn[_ngcontent-%COMP%]{margin-top:20px;font-size:15px;cursor:pointer}.leftPanel[_ngcontent-%COMP%]{position:relative;width:100%}.leftPanel__image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;display:block}.leftPanel__imageShadow[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0px;background:linear-gradient(180deg,rgba(15,27,39,0) 57.61%,rgba(15,27,39,.7) 73.26%,rgba(15,27,39,.9) 100%)}.leftPanel__logoImage[_ngcontent-%COMP%]{width:330px;position:absolute;bottom:60px;left:0;right:0;margin-left:auto;margin-right:auto}"]
        }), b
    })();
    var Ze = s(14618), to = s(88632);
    let oo = (() => {
        class b {
            constructor(p, M, H, ge, Fe, Xe, Ke, kt, Ct, Lt) {
                this.actions$ = p, this.ngrxStore = M, this.gameApi = H, this.authService = ge, this.guUserService = Fe, this.gameService = Xe, this.gameDownloadService = Ke, this.zone = kt, this.utils = Ct, this.cerberusModalService = Lt, this.GameAssetsDownloadRequest$ = (0, ie.GW)(() => this.actions$.pipe((0, ie.l4)(Ze.gK.GAME_ASSETS_DOWNLOAD_REQUEST), (0, It.w)(Ce => this.gameService.currentGameContext$.pipe((0, ct.h)(fe => null != fe), (0, He.VS)(fe => (0, Kt.$R)((0, i.of)(fe), this.gameService.getBranch(fe.id))), (0, He.VS)(([fe, wt]) => (0, Kt.$R)((0, i.of)(fe), this.gameDownloadService.getLatestAssetsVersions(fe, wt), this.gameDownloadService.getLocalAssetsVersions(fe), this.getBasicAuthToken())), (0, X.q)(1))), (0, It.w)(([Ce, fe, wt, Ut]) => {
                    const Ft = this.gameService.isObfuscatedBranch(Ce.id) ? Ut : void 0,
                        Te = this.gameDownloadService.deltaAssetsVersions(wt, fe),
                        Qt = Te.reduce((ts, Oo) => ts + Oo.size, 0), es = this.gameService.getAssetsPath(),
                        po = Array.from({length: Te.length}, () => new _.X(null)),
                        Eo = window.bridge.downloadAssetsWithSempahore(Te, es, po, Ft, 5).map(ts => ts.pipe(this.utils.enterZone(this.zone)));
                    return (0, i.of)({
                        downloadAssets: Eo,
                        assetsProgresses: po,
                        totalBytes: Qt,
                        game: Ce,
                        remoteAssets: fe
                    })
                }), (0, It.w)(Ce => (0, Kt.$R)((0, xo.D)(Ce.downloadAssets).pipe((0, We.U)(fe => ({
                    downloads: fe,
                    game: Ce.game,
                    remoteAssets: Ce.remoteAssets
                }))), (0, Ds.aj)(Ce.assetsProgresses).pipe((0, Ls.p)(1e3), (0, Re.b)(fe => {
                    const wt = fe.reduce((Ft, Te) => Te ? Ft + Te.bytesCompleted : Ft + 0, 0),
                        Ut = Math.round(100 * wt / Ce.totalBytes);
                    this.ngrxStore.dispatch(new Ze.X4({percentage: Ut, status: "downloading"}))
                })))), (0, It.w)(([Ce, fe]) => (this.gameService.deleteProperty(Ce.game.id, "assets"), this.gameService.setProperty(Ce.game.id, "assets", JSON.stringify(Ce.remoteAssets)), this.gameService.refreshGameContext(), this.gameDownloadService.displayDownloadCompleteNotification(Ce.game), [new Ze.P6])), (0, Qe.K)((Ce, fe) => (console.error(Ce), this.ngrxStore.dispatch(new Ze.wT({error: Ce})), fe)))), this.GameAssetsDownloadSuccess$ = (0, ie.GW)(() => this.actions$.pipe((0, ie.l4)(Ze.gK.GAME_ASSETS_DOWNLOAD_SUCCESS), (0, It.w)(Ce => {
                    const fe = this.authService.getUserId();
                    return this.gameService.getUserTutorialMissions(fe).pipe((0, X.q)(1))
                }), (0, It.w)(Ce => (Ce[0].completed || this.showTutorialModal(), [new Ze.Lg({
                    status: "idle",
                    percentage: 100
                })])), (0, Qe.K)((Ce, fe) => (console.error(Ce), fe)))), this.GameBuildDownloadExtractRequest$ = (0, ie.GW)(() => this.actions$.pipe((0, ie.l4)(Ze.gK.GAME_BUILD_DOWNLOAD_EXTRACT), (0, We.U)(Ce => Ce.payload), (0, It.w)(Ce => this.gameService.getBranch(Ce.game.id).pipe((0, We.U)(fe => ({
                    branch: fe,
                    action: Ce
                })))), (0, It.w)(({
                                      branch: Ce,
                                      action: fe
                                  }) => this.gameDownloadService.extractGame(fe.game, fe.fileName, fe.installPath).pipe((0, We.U)(wt => ({
                    result: wt,
                    branch: Ce,
                    action: fe
                })))), (0, It.w)(({action: fe}) => (this.gameService.setProperty(fe.game.id, "status", "extracted"), this.gameService.refreshGameContext(), fe.remoteVersion && this.gameDownloadService.deleteFile(this.gameDownloadService.getFileName(fe.game, fe.remoteVersion), this.gameService.getInstallPath(fe.game)), fe.localVersion && this.gameDownloadService.deleteFile(this.gameDownloadService.getFileName(fe.game, fe.localVersion), this.gameService.getInstallPath(fe.game)), this.gameDownloadService.displayDownloadCompleteNotification(fe.game), [new Ze.Ry])), (0, Qe.K)((Ce, fe) => (console.error(Ce), this.ngrxStore.dispatch(new Ze.c7({error: Ce})), fe)))), this.GameBuildDownloadRequest$ = (0, ie.GW)(() => this.actions$.pipe((0, ie.l4)(Ze.gK.GAME_BUILD_DOWNLOAD_REQUEST), (0, It.w)(Ce => this.gameService.currentGameContext$.pipe((0, ct.h)(fe => null != fe), (0, He.VS)(fe => (0, Kt.$R)((0, i.of)(fe), this.gameService.getBranch(fe.id))), (0, He.VS)(([fe, wt]) => (0, Kt.$R)((0, i.of)(fe), this.gameDownloadService.getVersions(fe, wt), this.getBasicAuthToken())), (0, X.q)(1))), (0, Re.b)(([Ce]) => {
                    this.gameDownloadService.uninstallGame(Ce, this.gameService.getInstallPath(Ce))
                }), (0, It.w)(([Ce, [fe, wt], Ut]) => {
                    const Ft = this.gameService.getInstallPath(Ce),
                        Te = this.gameDownloadService.getDownloadInfo(Ce, fe, Ut),
                        Qt = this.gameService.isObfuscatedBranch(Ce.id) ? Ut : void 0;
                    return (0, Ds.aj)([window.bridge.download(Te.url, Ft, this.getFileName(Ce, fe), Qt).pipe(this.utils.enterZone(this.zone), (0, We.U)(es => ({
                        game: Ce,
                        fileName: this.getFileName(Ce, fe),
                        installPath: Ft,
                        remoteVersion: fe,
                        localVersion: wt
                    }))), window.bridge.progress.pipe(this.utils.enterZone(this.zone), (0, Ls.p)(1e3), (0, Js.V)(12e4), (0, We.U)(es => (this.ngrxStore.dispatch(new Ze.dY({
                        percentage: this.getPercentage(es),
                        status: "downloading"
                    })), es)))])
                }), (0, He.zg)(([Ce, fe]) => (this.gameService.setProperty(Ce.game.id, "version", Ce.remoteVersion), this.gameService.setProperty(Ce.game.id, "status", "downloaded"), [new Ze.yn({
                    game: Ce.game,
                    fileName: Ce.fileName,
                    installPath: Ce.installPath,
                    localVersion: Ce.localVersion,
                    remoteVersion: Ce.remoteVersion
                })])), (0, Qe.K)((Ce, fe) => (console.error(Ce), this.ngrxStore.dispatch(new Ze.c7({error: Ce})), fe))))
            }

            getBasicAuthToken() {
                const p = this.authService.getUserId(), M = this.authService.getGameSessionTicket();
                return this.gameApi.get(`/user/${p}/build?session=${M}`).pipe((0, We.U)(H => H.basic_auth))
            }

            getPercentage(p) {
                return p ? Math.round(100 * p.bytesCompleted / p.bytesTotal) : 0
            }

            getFileName(p, M) {
                return "win32" === window.bridge.platform() ? "gods_" + M + p.extensions.windows : "gods_" + M + p.extensions.osx
            }

            showTutorialModal() {
                this.cerberusModalService.open(Bs).result.then(H => {
                }, H => {
                })
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.LFG(ie.eX), o.LFG(he.yh), o.LFG(Me.Ft), o.LFG(K.mI), o.LFG(to.MZ), o.LFG(ht.hM), o.LFG(De.b5), o.LFG(o.R0b), o.LFG(vt.F), o.LFG(nt.Qz))
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac}), b
    })();
    const no = {
        gameBuild: {isUpdateRequired: !1, percentage: 0, status: "idle"},
        gameAssets: {isUpdateRequired: !1, percentage: 0, status: "idle"}
    };

    function io(b, B) {
        switch (B.type) {
            case Ze.gK.GAME_BUILD_DOWNLOAD_CHECK:
                return Object.assign(Object.assign({}, b), {gameBuild: Object.assign(Object.assign({}, b.gameBuild), {isUpdateRequired: B.payload.isUpdateRequired})});
            case Ze.gK.GAME_BUILD_DOWNLOAD_PROGRESS:
                return Object.assign(Object.assign({}, b), {
                    gameBuild: Object.assign(Object.assign({}, b.gameBuild), {
                        percentage: B.payload.percentage,
                        status: B.payload.status
                    })
                });
            case Ze.gK.GAME_BUILD_DOWNLOAD_SUCCESS:
                return Object.assign(Object.assign({}, b), {
                    gameBuild: Object.assign(Object.assign({}, b.gameBuild), {
                        isUpdateRequired: !1,
                        status: "completed",
                        percentage: 100
                    })
                });
            case Ze.gK.GAME_BUILD_DOWNLOAD_UPDATE_STATUS:
                return Object.assign(Object.assign({}, b), {
                    gameBuild: Object.assign(Object.assign({}, b.gameBuild), {
                        isUpdateRequired: b.gameBuild.isUpdateRequired,
                        status: B.payload.status,
                        percentage: b.gameBuild.percentage
                    })
                });
            case Ze.gK.GAME_BUILD_DOWNLOAD_ERROR:
                return Object.assign(Object.assign({}, b), {
                    gameBuild: Object.assign(Object.assign({}, b.gameBuild), {
                        isUpdateRequired: b.gameBuild.isUpdateRequired,
                        status: "error",
                        percentage: b.gameBuild.percentage
                    })
                });
            case Ze.gK.GAME_ASSETS_DOWNLOAD_CHECK:
                return Object.assign(Object.assign({}, b), {gameAssets: Object.assign(Object.assign({}, b.gameAssets), {isUpdateRequired: B.payload.isUpdateRequired})});
            case Ze.gK.GAME_ASSETS_DOWNLOAD_PROGRESS:
                return Object.assign(Object.assign({}, b), {
                    gameAssets: Object.assign(Object.assign({}, b.gameAssets), {
                        percentage: B.payload.percentage,
                        status: B.payload.status
                    })
                });
            case Ze.gK.GAME_ASSETS_DOWNLOAD_SUCCESS:
                return Object.assign(Object.assign({}, b), {
                    gameAssets: Object.assign(Object.assign({}, b.gameAssets), {
                        isUpdateRequired: !1,
                        status: "completed",
                        percentage: 100
                    })
                });
            case Ze.gK.GAME_ASSETS_DOWNLOAD_UPDATE_STATUS:
                return Object.assign(Object.assign({}, b), {
                    gameAssets: Object.assign(Object.assign({}, b.gameAssets), {
                        isUpdateRequired: b.gameAssets.isUpdateRequired,
                        status: B.payload.status,
                        percentage: B.payload.percentage
                    })
                });
            case Ze.gK.GAME_ASSETS_DOWNLOAD_ERROR:
                return Object.assign(Object.assign({}, b), {
                    gameAssets: Object.assign(Object.assign({}, b.gameAssets), {
                        isUpdateRequired: b.gameAssets.isUpdateRequired,
                        status: "error",
                        percentage: b.gameAssets.percentage
                    })
                });
            default:
                return b
        }
    }

    let ao = (() => {
        class b {
            constructor() {
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac}), b
    })();
    var vs = s(56302);
    const lo = {wallet: null, user: null};
    (0, he.ZF)("account");
    var jt = (() => {
        return (b = jt || (jt = {})).INIT_WALLET = "[App] Initialize Wallet", b.INIT_METAMASK = "[App] Initialize MetaMask", b.UPDATE_STORE = "[App] Update Store", b.UPDATE_MARKETPRICE_ETH = "[App] Update Market Price of Ether", jt;
        var b
    })();
    const S = {
        app: function V(b, B) {
            switch (B.type) {
                case jt.INIT_WALLET:
                case jt.INIT_METAMASK:
                    return Object.assign({}, b);
                default:
                    return b
            }
        }, router: ue.mg, account: function co(b = lo, B) {
            switch (B.type) {
                case vs.X8.FETCH_USER_ACCOUNT_SUCCESS:
                    return Object.assign(Object.assign({}, b), {user: B.payload.accountData});
                case vs.X8.FETCH_USER_WALLET_SUCCESS:
                    return Object.assign(Object.assign({}, b), {wallet: B.payload.walletData});
                case vs.X8.UPDATE_USER_ETH_BALANCE:
                    return Object.assign(Object.assign({}, b), {wallet: Object.assign(Object.assign({}, b.wallet), {ethBalance: B.payload.balance})});
                default:
                    return b
            }
        }
    }, g = [], ee = "reCaptchaOnloadCallback";
    let Se = (() => {
        class b {
            constructor(p) {
                this.http = p, this.$loaded = new _.X(!1), this.registerOnloadCallback(), this.load()
            }

            registerOnloadCallback() {
                window[ee] = () => {
                    const p = "g-recpatcha";
                    this.addWidget(p), this.renderWidget(p), this.$loaded.next(!0)
                }
            }

            addWidget(p) {
                const M = document.createElement("div");
                M.id = p, M.style.visibility = "hidden", document.body.appendChild(M)
            }

            renderWidget(p) {
                this.grecaptcha().render(p, {
                    sitekey: oe.N.recaptchaPublicSiteKeyV3,
                    size: "invisible",
                    callback: () => {
                    }
                })
            }

            load() {
                return this.$loaded.getValue() || this.addScriptTag(), this.$loaded.asObservable()
            }

            addScriptTag() {
                const p = document.body, M = this.createScriptTag();
                p.appendChild(M)
            }

            createScriptTag() {
                const p = document.createElement("script");
                return p.innerHTML = "", p.src = this.getScriptSrc(), p.async = !0, p.defer = !0, p
            }

            getScriptSrc() {
                let p = "https://www.recaptcha.net/recaptcha/api.js";
                return p += "?onload=" + ee, p += "&render=" + oe.N.recaptchaPublicSiteKeyV3, p
            }

            execute(p) {
                return (0, t.D)(this.grecaptcha().execute({action: p}))
            }

            grecaptcha() {
                return window.grecaptcha
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.LFG(ae.eN))
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac, providedIn: "root"}), b
    })(), pt = (() => {
        class b {
            constructor() {
                this.dataStore = {headerOptions: []}, this._headerOptions$ = new _.X([])
            }

            get headerOptions$() {
                return this._headerOptions$.asObservable()
            }

            _emit() {
                this._headerOptions$.next(Object.assign({}, this.dataStore).headerOptions)
            }

            update(p) {
                this.dataStore.headerOptions = p, this._emit()
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac, providedIn: "root"}), b
    })();
    var Je = s(24058), Dt = s(61737), be = s(77604);
    let ze = (() => {
        class b {
            constructor(p) {
                this.auth = p, this.isRefreshingToken = !1, this.tokenSubject = new _.X(null)
            }

            addToken(p, M) {
                return p.clone({setHeaders: {Authorization: "Bearer " + M}})
            }

            intercept(p, M) {
                const H = this.auth.getAuthToken();
                return M.handle(this.addToken(p, H ? H.access : null)).pipe((0, Qe.K)(Fe => {
                    if (Fe instanceof ae.UA) switch (Fe.status) {
                        case 400:
                            return this.badRequest(Fe);
                        case 401:
                            if (-1 == p.url.indexOf("login")) {
                                if (-1 == p.url.indexOf("refresh")) return this.unauthorized(p, M);
                                this.auth.logout()
                            }
                    }
                    return (0, Dt._)(Fe)
                }))
            }

            badRequest(p) {
                return p && 400 === p.status && p.error && "invalid_grant" === p.error.error ? (this.auth.logout(), null) : (0, Dt._)(p)
            }

            unauthorized(p, M) {
                return this.isRefreshingToken ? this.tokenSubject.pipe((0, ct.h)(H => null != H), (0, X.q)(1), (0, He.VS)(H => M.handle(this.addToken(p, H)))) : (this.isRefreshingToken = !0, this.tokenSubject.next(null), this.auth.refreshToken().pipe((0, He.VS)(H => H && H.refresh ? this.auth.saveAccount(H, this.auth.isRemembering, 1).pipe((0, be.h)(H)) : (this.auth.logout(), (0, i.of)())), (0, He.VS)(H => (this.tokenSubject.next(H.access), M.handle(this.addToken(p, H.access)))), (0, Qe.K)(H => (0, Dt._)("unauthorized")), (0, Be.x)(() => {
                    this.isRefreshingToken = !1
                })))
            }
        }

        return b.\u0275fac = function (p) {
            return new (p || b)(o.LFG(K.mI))
        }, b.\u0275prov = o.Yz7({token: b, factory: b.\u0275fac}), b
    })();
    var ft, rt = s(21057);
    let it = [Me.LE, {provide: Window, useValue: window}, {
        provide: o.ip1,
        useFactory: b => () => b.loadConfigurations().toPromise(),
        multi: !0,
        deps: [Me.LE]
    }, {provide: ae.TP, useClass: ze, multi: !0}, {provide: ue.GC, useClass: se}, {
        provide: K.B3,
        useClass: oe.N.envClasses.featureFlagsService
    }, {provide: K.mI, useClass: oe.N.envClasses.authService}, {
        provide: K.qy,
        useClass: oe.N.envClasses.storageService
    }, {provide: K.ux, useClass: oe.N.envClasses.ethService}, {
        provide: K.LI,
        useClass: oe.N.envClasses.authHostService
    }, {
        provide: K.pk,
        useClass: oe.N.envClasses.audioService
    }, Je.m, te.x0, vt.F, Me.n2, Me.dK, Ys.D, pt, bt._, ke, Se, Me.fY, yo.$z];
    (null === (ft = oe.N.sentry) || void 0 === ft ? void 0 : ft.dsn) && (it = [...it, ...function le() {
        return [{provide: o.qLn, useValue: ve.v({showDialog: !1})}, {provide: Pe.aN, deps: [z.F0]}, {
            provide: o.ip1,
            useFactory: (b, B) => () => B.init(),
            deps: [Pe.aN, pe],
            multi: !0
        }]
    }()]);
    let at = (() => {
        class b {
        }

        return b.\u0275fac = function (p) {
            return new (p || b)
        }, b.\u0275mod = o.oAB({type: b, bootstrap: [ps]}), b.\u0275inj = o.cJS({
            providers: it,
            imports: [[J.u5, ae.JF, Qs, J.UX, ye.PW, l.b2, rt.m.forRoot(), he.Aw.forRoot(S, {metaReducers: g}), ue.Qi.forRoot(Le), oe.N.production ? [] : W.FT.instrument(), ie.sQ.forRoot([ao]), he.Aw.forFeature("gameResources", io, {initialState: no}), ie.sQ.forFeature([oo]), G.ic, j.P, Q.j]]
        }), b
    })();
    var Vt;
    if (oe.N.production && ((0, o.G48)(), null === (Vt = oe.N.sentry) || void 0 === Vt ? void 0 : Vt.dsn)) {
        const {buildNumber: b} = y;
        O.S({
            release: `gu-cerberus@0.13.3+${b}`,
            environment: oe.N.production ? "production" : "staging",
            dsn: oe.N.sentry.dsn,
            integrations: [],
            tracesSampleRate: oe.N.sentry.tracesSampleRate || 0
        })
    }
    l.q6().bootstrapModule(at).catch(b => console.error(b))
}, 12751
:
(q, R, s) => {
    "use strict";
    s(10609), window.process = {env: {DEBUG: void 0}}, window.global = window, global.Buffer = s(93172).Buffer, global.process = s(35736)
}, 73307
:
(q, R, s) => {
    "use strict";
    s.d(R, {Ho: () => a, mI: () => _, ux: () => i, qy: () => d, LI: () => n, pk: () => e, Hd: () => r, B3: () => v});
    var l = s(5e3);
    const a = new l.OlP("environment-settings"), _ = new l.OlP("i-auth-service"), i = new l.OlP("i-eth-service"),
        d = (new l.OlP("i-cards-service"), new l.OlP("i-storage-service")),
        n = (new l.OlP("i-modal-service"), new l.OlP("i-auth-host-service")), e = new l.OlP("i-audio-service"),
        r = new l.OlP("i-launchdarkly-client"), v = new l.OlP("i-feature-flag-service");
    new l.OlP("i-deck-code-service"), new l.OlP("apollo-token"), new l.OlP("user_id"), new l.OlP("game-status")
}, 51649
:
(q, R, s) => {
    "use strict";
    s.d(R, {R: () => n, E: () => e});
    var l = s(39017), a = s(61737), _ = s(36053), i = s(72986), t = s(24850), d = s(5e3), u = s(69439);
    const n = new d.OlP("deck-code-service");
    let e = (() => {
        class r {
            constructor(C) {
                this.cardsService = C
            }

            decodeDeckCode(C) {
                let w, I, k;
                try {
                    ({domain: w, formatCode: I, libraryIds: k} = (0, l.Jx)(C))
                } catch (P) {
                    return (0, a._)(P)
                }
                return (0, _.aj)([this.cardsService.protoCards$, this.cardsService.inventory$]).pipe((0, i.q)(1), (0, t.U)(([P, $]) => {
                    const {ownedCards: E, unownedProtos: x} = this.buildFromInventory(P, $, w, k, I);
                    return {ownedCards: E, unownedProtos: x, domain: w, formatCode: I}
                }))
            }

            validateProtos(C, w, I) {
                if (w.length > 30) throw new Error("Too many cards in the deck.");
                if (I.length !== w.length) throw new Error("One or more cards in your deck are not valid.");
                w.forEach(k => {
                    const P = C.get(k), $ = w.filter(E => E === k).length;
                    if ($ > 2 || ("legendary" === P.rarity || "mythic" === P.rarity) && $ > 1) throw new Error("There are too many copies of one or more cards in your deck.")
                })
            }

            buildFromInventory(C, w, I, k, P) {
                const $ = this.getProtos(k, C, I);
                this.validateProtos(C, $, k);
                const {ownedCards: E, unownedProtos: x} = this.convertToOwnedUnowned($, w, C);
                return {ownedCards: E, unownedProtos: x, domain: I, formatCode: P}
            }

            convertToOwnedUnowned(C, w, I) {
                const k = [], P = [];
                return C.forEach($ => {
                    const E = w[$];
                    if (!E || !E.length) return void P.push($);
                    const O = [...E].sort((o, m) => o.q - m.q).filter(o => !k.map(m => m.id).includes(o.id));
                    if (O && O.length) {
                        const o = {proto: $, quality: O[0].q, id: O[0].id, protoCard: I.get($)};
                        k.push(o)
                    } else P.push($)
                }), {ownedCards: k, unownedProtos: this.sortProtos(P, I)}
            }

            sortProtos(C, w) {
                return [...C.map(E => w.get(E))].sort((E, x) => E.name < x.name ? -1 : 1).sort((E, x) => E.mana - x.mana).map(E => E.proto)
            }

            getProtos(C, w, I) {
                const k = [];
                return w.forEach((P, $) => {
                    if ("neutral" !== P.god && P.god !== I) return;
                    const E = C.filter(x => x === P.lib_id).length;
                    for (let x = 0; x < E; x++) k.push($)
                }), k
            }

            encodeDeck(C, w) {
                return (0, l.cv)(C, w)
            }
        }

        return r.\u0275fac = function (C) {
            return new (C || r)(d.LFG(u.d))
        }, r.\u0275prov = d.Yz7({token: r, factory: r.\u0275fac, providedIn: "root"}), r
    })()
}, 90914
:
(q, R, s) => {
    "use strict";
    s.d(R, {Rl: () => l.Rl});
    var l = s(39029), a = s(70655), i = (s(61517), s(32830)), t = s(86041), d = s(56418), u = s(65171), n = s(80102),
        e = s(26532), r = s(65281);
    let v = class extends i.oi {
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
    (0, a.__decorate)([(0, d.C)({type: Boolean})], v.prototype, "closable", void 0), v = (0, a.__decorate)([(0, t.M)("gu-announce-banner-template")], v), s(263), s(11015);
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
    let k = class extends i.oi {
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
    k = (0, a.__decorate)([(0, t.M)("gu-ranked-weekend-cancelled-banner")], k);
    let P = class extends i.oi {
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
    P = (0, a.__decorate)([(0, t.M)("gu-maintenance-banner")], P);
    var $ = s(38872), E = s(98539);
    let x = class extends i.oi {
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

        updated(h) {
            super.updated(h), h.has("image") && this.image && (this.imageLoader.src = `/assets/images/backdrops/${this.image}`, !this.isLoading && (this.isLoading = !0, (0, n.waitForImageToLoad)(this.imageLoader).then(() => {
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
      <div class="${(0, E.$)({backdrop__overlay: !0, "backdrop__overlay--reveal": this.reveal})}"></div>
    ` : i.dy``
        }

        render() {
            return i.dy` ${this.renderBackdrop()} ${this.renderOverlay()} `
        }
    };
    (0, a.__decorate)([(0, d.C)()], x.prototype, "image", void 0), (0, a.__decorate)([(0, d.C)()], x.prototype, "overlay", void 0), (0, a.__decorate)([(0, d.C)()], x.prototype, "reveal", void 0), (0, a.__decorate)([(0, $.I)(".backdrop__image")], x.prototype, "imageElement", void 0), x = (0, a.__decorate)([(0, t.M)("gu-backdrop")], x);
    var O = s(14879), y = (s(89534), s(77064), s(72650)), D = s(93270), Q = s(40010);
    const te = i.iv`
  ${Q.W2}

  /* host element establishes 1px outline */
  :host {
    background: ${(0, e.asCssProp)(r.colors.dark[500])};
    min-width: 180px;
    height: ${(0, e.asCssProp)("48px")};
    line-height: ${(0, e.asCssProp)("48px")};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(17, 17))};
  }

  /* golden border */
  :host::before {
    ${(0, e.inset)(1)}
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(17, 17))};
    z-index: 1;
  }

  /* inner outline */
  :host::after {
    position: absolute;
    content: ' ';
    ${(0, e.inset)(5, 6)}
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(14, 14))};
    z-index: 2;
  }

  /* button content and inner brackground */
  :host .button__content {
    position: absolute;
    ${(0, e.inset)(7, 8)}
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
    ${(0, e.asCssProp)((0, e.drawHexShapePolygonMask)(13, 13))};
    z-index: 3;
  }

  .button__icon,
  .button__text {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .button__icon {
    font-size: ${(0, e.asCssProp)((0, n.gridUnits)(5.5))};
  }

  .button__text {
    line-height: ${(0, e.asCssProp)("48px")};
  }

  /* Default style */

  :host([type='default'])::before {
    background: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
  }

  :host([type='default'])::after {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }

  :host([type='default']) .button__icon,
  :host([type='default']) .button__text {
    background-image: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
  }

  :host([type='default']:hover) .button__content,
  :host([type='default']:active) .button__content {
    background-image: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
  }

  :host([type='default']:hover) .button__text,
  :host([type='default']:hover) .button__icon,
  :host([type='default']:active) .button__text,
  :host([type='default']:active) .button__icon {
    background-image: none;
    background-color: ${(0, e.asCssProp)(r.colors.dark[900])};
  }

  /* Inverted style */

  :host([type='inverted'])::before {
    background: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
  }

  :host([type='inverted'])::after {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
  }

  :host([type='inverted']) .button__content {
    background: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
  }

  :host([type='inverted']) .button__text,
  :host([type='inverted']) .button__icon {
    background-image: none;
    background-color: ${(0, e.asCssProp)(r.colors.dark[900])};
  }

  :host([type='inverted']:hover) .button__content,
  :host([type='inverted']:active) .button__content {
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
  }

  :host([type='inverted']:hover) .button__text,
  :host([type='inverted']:hover) .button__icon,
  :host([type='inverted']:active) .button__text,
  :host([type='inverted']:active) .button__icon {
    background-image: ${(0, e.asCssProp)(r.gradients.gold.simple("bottom"))};
  }

  /* Flat silver style */

  :host([type='silver'])::before {
    background: ${(0, e.asCssProp)(r.colors.light[500])};
  }

  :host([type='silver'])::after {
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
  }

  :host([type='silver']) .button__text {
    background-color: ${(0, e.asCssProp)(r.colors.light[500])};
  }

  :host([type='silver']:hover) .button__content,
  :host([type='silver']:active) .button__content {
    background-color: ${(0, e.asCssProp)(r.colors.light[500])};
  }

  :host([type='silver']:hover) .button__text,
  :host([type='silver']:active) .button__text {
    background-color: ${(0, e.asCssProp)(r.colors.dark[900])};
  }

  :host([type='silver']:active)::after {
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
    opacity: 0.2;
  }

  /* Flat gold style */

  :host([type='gold'])::before {
    background: ${(0, e.asCssProp)(r.colors.gold[500])};
  }

  :host([type='gold'])::after {
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
  }

  :host([type='gold']) .button__text {
    background-color: ${(0, e.asCssProp)(r.colors.gold[500])};
  }

  :host([type='gold']:hover) .button__content,
  :host([type='gold']:active) .button__content {
    background-color: ${(0, e.asCssProp)(r.colors.gold[500])};
  }

  :host([type='gold']:hover) .button__text,
  :host([type='gold']:active) .button__text {
    background-color: ${(0, e.asCssProp)(r.colors.dark[900])};
  }

  :host([type='gold']:active)::after {
    background: ${(0, e.asCssProp)(r.colors.dark[900])};
    opacity: 0.2;
  }
`;

    class ae extends O.o {
        constructor() {
            super(...arguments), this.type = "default"
        }

        static get styles() {
            return te
        }

        renderText() {
            return i.dy`
      <gu-heading-text class="button__text" size="2x-small">
        <slot></slot>
      </gu-heading-text>
    `
        }
    }

    (0, a.__decorate)([(0, d.C)({reflect: !0})], ae.prototype, "type", void 0), customElements.define("gu-gilded-hex-button", (0, y.b)((0, D.Z)(ae))), s(43977);
    let ye = class extends i.oi {
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
    (0, a.__decorate)([(0, d.C)()], ye.prototype, "gap", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], ye.prototype, "layout", void 0), (0, a.__decorate)([(0, d.C)()], ye.prototype, "visible", void 0), ye = (0, a.__decorate)([(0, t.M)("gu-button-group")], ye), s(1949);
    var Z = s(26711);
    const pe = i.iv`
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
    --gu-button-primary-background-color: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-primary-background-color-hover: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-primary-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.apocyan[500])};
    --gu-button-primary-border-color-hover: ${(0, e.asCssProp)(r.colors.apocyan[300])};
    --gu-button-primary-color: ${(0, e.asCssProp)(r.colors.apocyan[300])};
    --gu-button-primary-color-hover: ${(0, e.asCssProp)(r.colors.apocyan[100])};
    --gu-button-primary-text-shadow: var(--gu-button-text-shadow);

    --gu-button-secondary-background-color: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-secondary-background-color-hover: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-secondary-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    --gu-button-secondary-border-color-hover: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
    --gu-button-secondary-color: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
    --gu-button-secondary-color-hover: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
    --gu-button-secondary-text-shadow: var(--gu-button-text-shadow);

    --gu-button-disabled-color: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    --gu-button-disabled-border: var(--gu-button-border-width) solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
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
    let ve = class extends i.oi {
        constructor() {
            super(...arguments), this.loading = !1, this.disabled = !1, this.expand = !1, this.iconPosition = "left", this.iconOnly = !1, this.type = "primary", this.theme = "light"
        }

        static get styles() {
            return pe
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
        class=${(0, E.$)(this.getClassMap())}
      >
        ${this.renderLoader()} ${this.renderIcon()}
        <div class="standard-button__content">
          <slot data-test-id="standard-button-text-slot"></slot>
        </div>
      </a>` : i.dy` <button ?disabled="${this.disabled}" class=${(0, E.$)(this.getClassMap())}>
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
        converter: Z.b
    })], ve.prototype, "loading", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: Z.b
    })], ve.prototype, "disabled", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: Z.b
    })], ve.prototype, "expand", void 0), (0, a.__decorate)([(0, d.C)()], ve.prototype, "iconPosition", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: Z.b
    })], ve.prototype, "iconOnly", void 0), (0, a.__decorate)([(0, d.C)()], ve.prototype, "icon", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], ve.prototype, "type", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], ve.prototype, "theme", void 0), (0, a.__decorate)([(0, d.C)()], ve.prototype, "href", void 0), (0, a.__decorate)([(0, d.C)()], ve.prototype, "target", void 0), ve = (0, a.__decorate)([(0, t.M)("gu-standard-button")], ve);
    var Pe = s(12052), z = s(25297), le = s(72985), j = s(58672);
    const se = {text: {type: String}, href: {type: String}, target: {type: String}},
        ce = Object.assign(Object.assign({}, se), {
            loading: {type: String},
            loadingColor: {type: String},
            disabled: {type: String},
            icon: {type: String},
            leftIconPosition: {type: Boolean},
            size: {type: String},
            enableSounds: {type: Boolean},
            horizontalStretch: {type: String}
        }), _e = Object.assign(Object.assign({}, se), {
            color: {type: String},
            loading: {type: String},
            loadingColor: {type: String},
            disabled: {type: String},
            size: {type: String},
            enableSounds: {type: Boolean},
            horizontalStretch: {type: String}
        });
    var Le = s(91418);
    const Ve = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(0, e.asCssProp)((0, n.gridUnits)(.75))};
    background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    border: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} solid ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    color: ${(0, e.asCssProp)(r.colors.gunmetal[100])};
    flex-grow: 0;
    height: ${(0, e.asCssProp)((0, n.gridUnits)(9))};
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
    background: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    border: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} solid ${(0, e.asCssProp)(r.colors.gunmetal[300])};
    color: ${(0, e.asCssProp)(r.colors.light[300])};
  }

  :host(:active) {
    background: ${(0, e.asCssProp)(r.colors.gunmetal[500])};
    border: ${(0, e.asCssProp)((0, n.gridUnits)(.5))} solid ${(0, e.asCssProp)(r.colors.light[300])};
    color: ${(0, e.asCssProp)(r.colors.light[100])};
  }

  :host([borderColorHover]:hover),
  :host([borderColorHover]:hover) ::slotted(*) {
    box-shadow: 0px 0px ${(0, e.asCssProp)((0, n.gridUnits)(1))} var(--borderColorHover);
  }

  ${(0, e.asCssProp)(Le.fillColoringRules)}
`, Me = i.iv`
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
`, G = i.iv`
  ${Me}

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
`, oe = i.iv`
  ${Me}

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
`, Ee = (i.iv`
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
  ${Me}

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
`), lt = r.colors.light[500], Ie = r.colors.gold[500], He = r.colors.dark[500], Qe = r.colors.dark[900], ct = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}
  ${Me}

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
    background: ${(0, e.asCssProp)(He)};
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
    background-color: ${(0, e.asCssProp)(lt)};
  }
  .outerGold {
    background-color: ${(0, e.asCssProp)(Ie)};
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
    background: ${(0, e.asCssProp)(Qe)};
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
    background-color: ${(0, e.asCssProp)(lt)};
  }
  .buttonContent__textGold {
    background-color: ${(0, e.asCssProp)(Ie)};
  }

  /*  HOVER & MOUSEDOWN FX
  ----------------------------------------------------------------------------------- */
  :host(:hover) .innerButtonFillSilver,
  :host(:active) .innerButtonFillSilver {
    background-color: ${(0, e.asCssProp)(lt)};
  }
  :host(:hover) .innerButtonFillGold,
  :host(:active) .innerButtonFillGold {
    background-color: ${(0, e.asCssProp)(Ie)};
  }

  :host(:hover) .buttonContent__text,
  :host(:active) .buttonContent__text {
    background-color: ${(0, e.asCssProp)(Qe)};
    background-clip: text;
    -webkit-background-clip: text;
  }

  :host(:active)::after {
    background: ${(0, e.asCssProp)(Qe)};
    opacity: 0.2;
  }
`, We = i.iv`
  ${Me}

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

    function Re(N, h) {
        return h && "true" !== N ? i.dy` <gu-icon iconLigature=${h} class="buttonContent__icon"></gu-icon> ` : null
    }

    function Ye(N, h, A = "grey") {
        return "true" === h ? i.dy`<gu-rectangular-spinner color=${A}></gu-rectangular-spinner>` : N || i.dy` <slot></slot> `
    }

    const mt = i.dy`
  <div class="waveArtwork">
  </div>
`, U = Object.assign(Object.assign({}, ce), {invertColoring: {type: Boolean}});
    customElements.define("gu-special-hex-button", (0, j.x)({
        renderer: function T({
                                 text: N,
                                 loading: h,
                                 loadingColor: A,
                                 icon: Y,
                                 leftIconPosition: re,
                                 invertColoring: we
                             }) {
            return (0, Pe.d4)(() => {
                we ? this.classList.add("invertColoring") : this.classList.remove("invertColoring")
            }, [we]), i.dy` ${(({icon: N, leftIconPosition: h, text: A, loading: Y, loadingColor: re}) => i.dy`
  <i class="hexLayer outerKeyline"></i>
  <i class="hexLayer outerGolden"></i>
  <i class="hexLayer innerGunmetal"></i>
  <i class="hexLayer innerButtonFill"></i>

  <div class=${(0, E.$)({buttonContent: !0, "buttonContent--leftIcon": h})}>
    <gu-heading-text class="buttonContent__text" size="2x-small">
      ${Ye(A, Y, re)}
    </gu-heading-text>
    ${Re(Y, N)}
  </div>
`)({text: N, icon: Y, loading: h, loadingColor: A, leftIconPosition: re})} `
        }, baseClass: (0, le.lH)((0, le.Am)((0, le.s)((0, le.Xg)(z.J)))), props: {properties: U, styles: Ee}
    })), customElements.define("gu-special-hex-flat-button", (0, j.x)({
        renderer: function c({color: N, text: h, loading: A, loadingColor: Y}) {
            return i.dy` ${(({color: N, text: h, loading: A, loadingColor: Y}) => {
                const re = N ? N[0].toUpperCase() + N.slice(1) : "Silver";
                return i.dy`
    <i class="hexLayer outerKeyline"></i>
    <i class="hexLayer outer outer${re}"></i>
    <i class="hexLayer innerDark"></i>
    <i class="hexLayer innerButtonFill innerButtonFill${re}"></i>

    <div class=${(0, E.$)({buttonContent: !0})}>
      <gu-heading-text class="buttonContent__text buttonContent__text${re}" size="2x-small">
        ${Ye(h, A, Y)}
      </gu-heading-text>
    </div>
  `
            })({color: N, text: h, loading: A, loadingColor: Y})} `
        }, props: {properties: _e, styles: ct}, baseClass: (0, le.Am)((0, le.s)((0, le.Xg)(z.J)))
    })), customElements.define("gu-primary-hex-button", (0, j.x)({
        renderer: function f({text: N, loading: h, loadingColor: A, size: Y, icon: re, leftIconPosition: we}) {
            return i.dy`
    ${mt} ${(({icon: N, leftIconPosition: h, size: A, text: Y, loading: re, loadingColor: we}) => i.dy`
  <div class=${(0, E.$)({buttonContent: !0, "buttonContent--leftIcon": h})}>
    <gu-heading-text class="buttonContent__text" size=${"large" === A ? "2x-small" : "3x-small"}>
      ${Ye(Y, re, we)}
    </gu-heading-text>
    ${Re(re, N)}
  </div>
`)({text: N, icon: re, size: Y, loading: h, loadingColor: A, leftIconPosition: we})}
  `
        }, props: {properties: ce, styles: G}, baseClass: (0, le.lH)((0, le.Am)((0, le.s)((0, le.Xg)(z.J))))
    })), customElements.define("gu-secondary-hex-button", (0, j.x)({
        renderer: function L({text: N, loading: h, loadingColor: A, icon: Y, leftIconPosition: re}) {
            return i.dy` ${(({icon: N, leftIconPosition: h, text: A, loading: Y, loadingColor: re}) => i.dy`
  <div class=${(0, E.$)({buttonContent: !0, "buttonContent--leftIcon": h})}>
    <gu-simple-text class="buttonContent__text" kind="small">
      ${Ye(A, Y, re)}
    </gu-simple-text>
    ${Re(Y, N)}
  </div>
`)({text: N, icon: Y, loading: h, loadingColor: A, leftIconPosition: re})} `
        }, props: {properties: ce, styles: oe}, baseClass: (0, le.Am)((0, le.s)((0, le.Xg)(z.J)))
    })), customElements.define("gu-subtle-hex-button", (0, j.x)({
        renderer: function X({text: N, loading: h, loadingColor: A, size: Y, icon: re, leftIconPosition: we}) {
            return i.dy` ${(({icon: N, leftIconPosition: h, text: A, loading: Y, loadingColor: re, size: we}) => i.dy`
  <div class=${(0, E.$)({buttonContent: !0, "buttonContent--leftIcon": h})}>
    <gu-heading-text class="buttonContent__text" size=${"large" === we ? "2x-small" : "3x-small"}>
      ${Ye(A, Y, re)}
    </gu-heading-text>
    ${Re(Y, N)}
  </div>
`)({text: N, icon: re, size: Y, loading: h, loadingColor: A, leftIconPosition: we})} `
        }, props: {properties: ce, styles: We}, baseClass: (0, le.Am)((0, le.s)((0, le.Xg)(z.J)))
    }));
    var xe = s(5284), de = s(52102);
    const {asCssProp: Be} = xe.ZB, {gridUnits: dt} = xe.dz, Gt = i.iv`
  :host {
    display: inline-flex;
    justify-content: flex-start;
    cursor: pointer;
  }

  :host,
  :host([kind='small']),
  :host([kind='help']) {
    border-bottom: ${Be(dt(.25))} solid;
    padding-bottom: ${Be(dt(.25))};
  }

  :host([kind='large']) {
    border-bottom: ${Be(dt(.5))} solid;
    padding-bottom: ${Be(dt(.25))};
  }

  :host([kind='tag']) {
    border-bottom: ${Be(dt(.5))} solid;
    padding-bottom: ${Be(dt(.25))};
  }

  /*  HOVER FX
    ----------------------------------------------------------------------------------- */
  :host(:hover) {
    border-color: ${Be(r.colors.gold[300])};
    color: ${Be(r.colors.gold[300])};
  }
`;
    let Yt = class extends ((0, le.Xg)(de._)) {
        static get styles() {
            const h = [];
            return super.styles && h.push(super.styles), h.push(Gt), h
        }

        static get properties() {
            return Object.assign(Object.assign({}, super.properties), se)
        }
    };
    Yt = (0, a.__decorate)([(0, t.M)("gu-simple-text-button")], Yt);
    const Jt = Object.assign(Object.assign({}, ce), {
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
    customElements.define("gu-plain-square-button", (0, j.x)({
        renderer: function cs({
                                  text: N,
                                  loading: h,
                                  loadingColor: A,
                                  icon: Y,
                                  iconColor: re,
                                  leftIconPosition: we,
                                  fillColor: Ge,
                                  fillColorHover: qe,
                                  fillGradient: Ot,
                                  fillGradientTarget: Wt,
                                  backgroundFillColor: yt,
                                  backgroundFillColorHover: Mt,
                                  backgroundFillGradient: gt,
                                  backgroundFillGradientTarget: Oe,
                                  borderColor: Ae,
                                  borderColorHover: $t,
                                  verticalLayout: Ue,
                                  square: et
                              }) {
            return (0, Pe.d4)(() => {
                (0, u.updateColoringVariables)({
                    component: this,
                    iconColor: re,
                    fillColor: Ge,
                    fillColorHover: qe,
                    fillGradient: Ot,
                    fillGradientTarget: Wt,
                    backgroundFillColor: yt,
                    backgroundFillColorHover: Mt,
                    backgroundFillGradient: gt,
                    backgroundFillGradientTarget: Oe,
                    borderColor: Ae,
                    borderColorHover: $t
                })
            }, [re, Ge, qe, Ot, Wt, yt, Mt, gt, Oe, Ae, $t]), i.dy`${(({
                                                                           icon: N,
                                                                           leftIconPosition: h,
                                                                           text: A,
                                                                           loading: Y,
                                                                           loadingColor: re,
                                                                           verticalLayout: we,
                                                                           square: Ge
                                                                       }) => i.dy`
  <div
    class=${(0, E.$)({
                buttonContent: !0,
                "buttonContent--leftIcon": h,
                "buttonContent--vertical": we,
                "buttonContent--square": Ge
            })}
  >
    <gu-paragraph-text class="buttonContent__text" kind=${we ? "tag" : "small"} fontWeight="bold">
      ${Ye(A, Y, re)}
    </gu-paragraph-text>
    ${Re(Y, N)}
  </div>
`)({icon: Y, leftIconPosition: we, loading: h, loadingColor: A, text: N, verticalLayout: Ue, square: et})}`
        }, props: {properties: Jt, styles: Ve}, baseClass: (0, le.Am)((0, le.s)((0, le.Xg)(z.J)))
    }));
    var Ne = s(47925), ut = (() => {
        return (N = ut || (ut = {})).img2text = "img2text", N.text2img = "text2img", ut;
        var N
    })();
    let xs = class extends i.oi {
        constructor() {
            super(...arguments), this.direction = ut.img2text, this.headerSize = "small", this.headerColor = r.colors.light[100], this.textKind = "small", this.textColor = r.colors.light[500], this.backgroundPosition = "top", this.backgroundSize = "contain", this.headerResponsiveSize = [], this.textResponsiveKind = [], this.backgroundImageResponsive = [], this.breakpoint = "medium"
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
      @media only screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping["x-small"])}) ) {
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
                                                           breakpoint: h,
                                                           pos: A,
                                                           size: Y
                                                       }) => `\n        @media screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping[h])}) {\n          .character {\n            background-image: ${["x-small", "small"].includes(h) ? "linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 80%), " : ""}\n            url('${this.background}') !important;\n            background-position: ${(0, e.asCssProp)(A)} !important;\n            background-size: ${(0, e.asCssProp)(Y)} !important;\n          }\n        }\n    `).join("\n")
        }

        generateMediaQueries() {
            return `\n      /* DEFINE RESPONSIVE SIZING */\n      ${this.generateBackgroundImageMediaQueries()}\n        @media\n        screen\n        and\n        (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping[this.breakpoint])}) {\n        .character {\n          flex-direction: column !important;\n          align-items: flex-end !important;\n          justify-content: center !important;\n        }\n        .character-img2text {\n          align-items: flex-end !important;\n        }\n        .character-text2img {\n          align-items: flex-start !important;\n        }\n        .character-text {\n          width: 50% !important;\n          margin: 20px !important;\n        }\n        .character-text-img2text {\n          padding-left: 0 !important;\n          border-left: none !important;\n          padding-right: 20px !important;\n          border-right: 4px solid ${(0, e.asCssProp)(r.colors.gold[500])} !important;\n          text-align: right !important;\n        }\n        .character-text-text2img {\n          padding-right: 0 !important;\n          border-right: none !important;\n          padding-left: 20px !important;\n          border-left: 4px solid ${(0, e.asCssProp)(r.colors.gold[500])} !important;\n          text-align: left !important;\n        }\n      }`
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
    xs = (0, a.__decorate)([(0, t.M)("gu-card-character")], xs);
    var Pt = s(7302), De = s(49219);
    const ds = N => `https://images.godsunchained.com/cardpack-images--${N}`, ss = N => "undefined" === N || !N;
    let Rt = class extends i.oi {
        constructor() {
            super(...arguments), this.type = "marketing", this.responsiveSrcsetSizes = `${De.imageQualities.normal}px`
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

        update(h) {
            h.has("god") && (this.sanitizedGod = "all" === this.god || "core" === this.god ? "neutral" : this.god), super.update(h)
        }

        updated(h) {
            super.updated(h), this.image && (this.image.complete ? (this.classList.remove("loading", "error"), this.notifyState("loaded")) : (this.classList.remove("error"), this.classList.add("loading"), this.notifyState("loading"), (0, n.waitForImageToLoad)(this.image).then(() => {
                this.classList.remove("loading", "error"), this.notifyState("loaded")
            }).catch(() => {
                this.classList.remove("loading"), this.classList.add("error"), this.notifyState("error")
            })))
        }

        notifyState(h) {
            this.dispatchEvent(new CustomEvent(h, {detail: this, bubbles: !1, composed: !1}))
        }

        render() {
            const {type: h, set: A, rarity: Y, sanitizedGod: re, responsiveSrcsetSizes: we} = this;
            return ss(h) || ss(A) || ss(re) || ss(Y) ? i.dy`` : i.dy`
      <picture class="picture picture--${h}">
        <source
          srcset=${Object.keys(De.imageQualities).map(Ge => {
                const qe = De.imageQualities[Ge];
                return `${ds(h)}/${qe}/${A}--${re}--${Y}.webp ${qe}w`
            }).join(", ")}
          type="image/webp"
          sizes="${we}"
        />
        <source
          srcset=${Object.keys(De.imageQualities).map(Ge => {
                const qe = De.imageQualities[Ge];
                return `${ds(h)}/${qe}/${A}--${re}--${Y}.png ${qe}w`
            }).join(",")}
          type="image/png"
          sizes="${we}"
        />
        <img
          class="image"
          src="${ds(h)}/${De.imageQualities.small}/${A}--${re}--${Y}.png"
          alt="Card Pack Image"
        />
      </picture>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: String})], Rt.prototype, "set", void 0), (0, a.__decorate)([(0, d.C)({type: String})], Rt.prototype, "rarity", void 0), (0, a.__decorate)([(0, d.C)({type: String})], Rt.prototype, "god", void 0), (0, a.__decorate)([(0, d.C)({type: String})], Rt.prototype, "type", void 0), (0, a.__decorate)([(0, d.C)({type: String})], Rt.prototype, "responsiveSrcsetSizes", void 0), (0, a.__decorate)([(0, Pt.S)()], Rt.prototype, "sanitizedGod", void 0), (0, a.__decorate)([(0, $.I)(".image")], Rt.prototype, "image", void 0), Rt = (0, a.__decorate)([(0, t.M)("gu-card-pack-picture")], Rt);
    const os = (N, h) => `https://card.godsunchained.com/?id=${N}&q=${h}`;
    let Nt = class extends i.oi {
        constructor() {
            super(...arguments), this.quality = 1, this.protoId = 1, this.responsiveSrcsetSizes = `${De.imageQualities.normal}px`, this.showLoadingState = !1
        }

        updated(h) {
            super.updated(h), (h.has("protoId") || h.has("quality")) && (this.classList.add("loading"), (0, n.waitForImageToLoad)(this.image).then(() => this.classList.remove("loading")))
        }

        render() {
            return i.dy`
      <picture class="picture">
        <source
          srcset=${Object.keys(De.imageQualities).map(h => {
                const A = De.imageQualities[h];
                return `${os(this.protoId, this.quality)}&w=${A} ${A}w`
            }).join(", ")}
          type="image/webp"
          sizes="${this.responsiveSrcsetSizes}"
        />
        <source
          srcset=${Object.keys(De.imageQualities).map(h => {
                const A = De.imageQualities[h];
                return `${os(this.protoId, this.quality)}&w=${A}&png=true ${A}w`
            }).join(", ")}
          type="image/png"
          sizes="${this.responsiveSrcsetSizes}"
        />
        <img
          class="image"
          src="${os(this.protoId, this.quality)}&w=${De.imageQualities.small}&png=true"
          alt="Card Pack Image"
        />
      </picture>
      <gu-icon iconLigature="action_hidePassword" class="loadingIcon"></gu-icon>
    `
        }
    };
    Nt.styles = i.iv`
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
  `, (0, a.__decorate)([(0, d.C)()], Nt.prototype, "quality", void 0), (0, a.__decorate)([(0, d.C)()], Nt.prototype, "protoId", void 0), (0, a.__decorate)([(0, Pt.S)()], Nt.prototype, "responsiveSrcsetSizes", void 0), (0, a.__decorate)([(0, Pt.S)()], Nt.prototype, "showLoadingState", void 0), (0, a.__decorate)([(0, $.I)("img.image")], Nt.prototype, "image", void 0), Nt = (0, a.__decorate)([(0, t.M)("gu-card-picture")], Nt);
    var us = s(92436), Gs = s(71459), Ns = s.n(Gs), Xt = s(49749), Ps = s(63082), Ss = s.n(Ps);
    const rs_ALL = "slidesListing__slide", rs_CURRENT = "slidesListing__slide--currentSlide", ks = new us.do(N => {
        N.forEach(h => {
            h.target.handleResize()
        })
    });
    let ws = class extends i.oi {
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
            }, this.debouncedResize = Ss()(() => {
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
            ks.observe(this), this.slidesListingDom = this.shadowRoot.querySelector(".slidesListing"), this.gestureControl = new (Ns())(this, {
                sensitivity: 0,
                swipeVelocity: 60,
                passive: !1,
                capture: !0,
                startDirectionLoopCount: 1
            }), this.gestureControl.on("pan.prestart", h => {
                h.sourceEvent instanceof MouseEvent && h.sourceEvent.preventDefault()
            }), this.gestureControl.on("pan.start", h => this.onPanStart(h)), this.gestureControl.on("pan.all", h => this.onPan(h)), this.gestureControl.on("pan.end", h => this.onPanEnd(h)), this.storeSlideDoms(), this.handleResize(), this.updatePaneClasses()
        }

        disconnectedCallback() {
            this.gestureControl.destroy(), ks.unobserve(this), super.disconnectedCallback()
        }

        get onLastSlide() {
            const {state: {currentSlideIndexes: h}} = this;
            return this.state.centeredSlides ? h[h.length - 1] >= this.state.totalSlidesCount : h[h.length - 1] >= this.state.totalSlidesCount - 1
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
            this.slidesListingDom.style.width = `${this.dimensions.totalWidth + 2 * this.dimensions.slideCenteringSideMargin}px`, Xt.p8.set(this.slideDoms, {
                width: this.dimensions.slideWidth,
                marginLeft: h => this.state.centeredSlides && 0 === h ? this.dimensions.slideCenteringSideMargin : 0,
                marginRight: h => h === this.state.totalSlidesCount - 1 ? this.dimensions.slideCenteringSideMargin : this.state.spaceBetween
            })
        }

        onPanStart(h) {
            this.slidesListingDom.style.cursor = "grabbing", this.direction = null, this.state.startTranslateX = 0 === this.state.currentSlideIndexes[0] ? 0 : this.state.translateX, this.state.translateX = 0, this.state.rightLocked = !1, this.state.leftLocked = !1, this.setXTrans("left", 0)
        }

        onPan(h) {
            this.setXTrans(h.deltaX < 0 ? "left" : "right", h.deltaX)
        }

        setXTrans(h, A) {
            this.direction = h;
            let Y = 1;
            const re = A * Y, we = this.state.startTranslateX + re;
            "right" === h && we >= 0 ? this.state.rightLocked || (this.state.lockTranslateX = re, this.state.rightLocked = !0) : this.state.rightLocked = !1, "left" === h && this.dimensions.totalWidth - this.dimensions.width + we + 2 * this.dimensions.slideCenteringSideMargin <= 0 ? this.state.leftLocked || (this.state.lockTranslateX = re, this.state.leftLocked = !0) : this.state.leftLocked = !1, Y = this.state.leftLocked || this.state.rightLocked ? .1 : 1;
            let qe = this.state.startTranslateX + re;
            (this.state.rightLocked || this.state.leftLocked) && (qe = this.state.startTranslateX + this.state.lockTranslateX + (A - this.state.lockTranslateX) * Y), this.state.translateX = qe, this.drawFrame()
        }

        onPanEnd(h) {
            console.log("!!!!!!!! PAN END"), this.slidesListingDom.style.cursor = null;
            const A = Math.abs(this.state.translateX - this.state.startTranslateX),
                Y = this.state.slidesPerView > 1 ? .8 : .5;
            let re = Math.abs(A) / (this.dimensions.slideWidth * Y);
            return !this.state.centeredSlides && !this.onLastSlide && Math.abs(this.state.translateX - this.dimensions.width) >= this.dimensions.totalWidth ? this.nextSlides(null, [this.state.totalSlidesCount - 2, this.state.totalSlidesCount - 1, this.state.totalSlidesCount]) : (!this.state.centeredSlides && this.onLastSlide && this.state.hasRemainderSlide && (re = re >= .5 ? 1 : re), Math.floor(re) >= 1 ? this.state.translateX < this.state.startTranslateX ? this.nextSlides(Math.floor(re)) : this.prevSlides(Math.floor(re)) : h.isSwipe ? "right" === h.swipeDirection ? this.prevSlides(1) : "left" === h.swipeDirection ? this.nextSlides(1) : null : this.reset())
        }

        drawFrame() {
            this.resetAnimation && this.resetAnimation.kill(), Xt.p8.set(this.slidesListingDom, {x: this.state.translateX})
        }

        onSlotChange(h) {
            this.storeSlideDoms(), this.updatePaneClasses(), this.setCarouselHeight()
        }

        storeSlideDoms() {
            const h = this.shadowRoot.getElementById("slidesSlot");
            this.slideDoms = h.assignedElements(), this.state.totalSlidesCount = this.slideDoms.length
        }

        updatePaneClasses() {
            this.slideDoms.forEach((h, A) => {
                h.classList.remove(rs_ALL, rs_CURRENT), h.classList.add(rs_ALL), -1 !== this.state.currentSlideIndexes.indexOf(A) && h.classList.add(rs_CURRENT)
            })
        }

        getTransToLastSlide() {
            return -1 * (this.dimensions.totalWidth - this.dimensions.width + 2 * this.dimensions.slideCenteringSideMargin)
        }

        getTransToFirstSlide() {
            const h = this.state.currentSlideIndexes[0];
            return -1 * (h * this.dimensions.slideWidth + this.state.spaceBetween * h)
        }

        reset({duration: h = .25, specialResetForEndOfSlides: A = !1} = {}) {
            A && (this.state.specialRemainderSlideActive = A);
            let Y = this.state.specialRemainderSlideActive ? this.getTransToLastSlide() : this.getTransToFirstSlide();
            this.state.centeredSlides && this.onLastSlide && (Y = this.getTransToLastSlide()), Y !== this.state.translateX && (this.state.translateX = Y, this.resetAnimation = Xt.p8.to(this.slidesListingDom, {
                duration: h,
                x: this.state.translateX,
                ease: "power2.inOut"
            })), this.setCarouselHeight()
        }

        setCarouselHeight() {
            if (this.state.centeredSlides) return !1;
            const h = this.getMaxCurrentSlideHeight();
            this.slidesListingDom.style.height = `${h}px`
        }

        getMaxCurrentSlideHeight() {
            return this.state.currentSlideIndexes.reduce((A, Y) => {
                const re = this.slideDoms[Y];
                return A < re.offsetHeight ? re.offsetHeight : A
            }, 0)
        }

        emitSlideChange(h) {
            let A = this.state.currentSlideIndexes;
            this.state.centeredSlides && (A = A.map(this.onFirstSlide ? (Y, re) => 0 === re ? null : Y - 1 : this.onLastSlide ? (Y, re) => re === A.length - 1 ? null : Y : (Y, re) => Y - 1)), this.dispatchEvent(new CustomEvent("onSlideChange", {
                detail: {
                    direction: h,
                    currentActiveSlides: A,
                    atEnd: this.onLastSlide,
                    atStart: this.onFirstSlide
                }
            }))
        }

        incrementCurrentIndexes(h, A) {
            this.state.currentSlideIndexes = h || this.state.currentSlideIndexes.map(Y => null === Y ? 0 : Y + A)
        }

        assignResponsiveVariables(h) {
            const A = this.responsiveBreakpoints.filter(Y => {
                const re = parseInt(Ne.breakpointSizeMapping[Y.minWidth], 10);
                return h >= re
            }).sort((Y, re) => {
                const we = parseInt(Ne.breakpointSizeMapping[Y.minWidth], 10);
                return parseInt(Ne.breakpointSizeMapping[re.minWidth], 10) - we
            })[0];
            if (A) {
                const {slidesPerView: Y, spaceBetween: re, minWidth: we} = A,
                    Ge = parseInt(Ne.breakpointSizeMapping[we], 10);
                h >= Ge && ("number" == typeof Y && (this.state.slidesPerView = Y), "number" == typeof re && (this.state.spaceBetween = re))
            } else this.state.slidesPerView = this.slidesPerView, this.state.spaceBetween = this.spaceBetween;
            1 === this.state.slidesPerView ? (this.state.spaceBetween = 0, this.state.centeredSlides = !1) : this.state.centeredSlides = this.centeredSlides, this.state.currentSlideIndexes.length !== Math.ceil(this.state.slidesPerView) && (this.state.currentSlideIndexes = Array(Math.ceil(this.state.slidesPerView)).fill(0).map((Y, re) => re))
        }

        nextSlides(h = 1, A) {
            if (this.onLastSlide) return A && this.incrementCurrentIndexes(A), this.reset({specialResetForEndOfSlides: !0});
            this.incrementCurrentIndexes(A, h), this.state.translateX = this.state.startTranslateX + (this.dimensions.slideWidth + this.state.spaceBetween) * h * -1, Xt.p8.to(this.slidesListingDom, {
                duration: .25,
                x: this.state.translateX,
                ease: "power2.inOut",
                onComplete: () => {
                    this.reset(), this.updatePaneClasses(), this.emitSlideChange(this.direction)
                }
            })
        }

        prevSlides(h = 1, A) {
            if (this.onFirstSlide || this.state.specialRemainderSlideActive) return this.state.specialRemainderSlideActive = !1, this.reset();
            this.incrementCurrentIndexes(A, -1 * h), this.state.translateX = this.state.startTranslateX + (this.dimensions.slideWidth + this.state.spaceBetween) * h, Xt.p8.to(this.slidesListingDom, {
                duration: .25,
                x: this.state.translateX,
                ease: "power2.inOut",
                onComplete: () => {
                    this.reset(), this.updatePaneClasses(), this.emitSlideChange(this.direction)
                }
            })
        }

        gotoSlide(h) {
            if (h < 0 || h > this.state.totalSlidesCount - 1 || this.state.centeredSlides) return console.error("Error! Application requested a bad slide index:", h), !1;
            this.state.currentSlideIndexes = this.state.currentSlideIndexes.map(() => h).map((A, Y) => A + Y), this.reset(), this.emitSlideChange()
        }

        handleResize() {
            const {width: h, height: A, left: Y, top: re} = this.getBoundingClientRect();
            this.assignResponsiveVariables(h);
            const we = Math.floor(h - this.state.spaceBetween * (this.state.slidesPerView - 1)),
                Ge = Math.floor(we / this.state.slidesPerView),
                qe = Math.floor(this.state.totalSlidesCount * Ge + this.state.spaceBetween * (this.state.totalSlidesCount - 1)),
                Ot = this.state.centeredSlides ? Math.floor(.5 * (h - Ge)) : 0;
            this.dimensions = {
                width: h,
                height: A,
                slideWidth: Ge,
                totalWidth: qe,
                slideCenteringSideMargin: Ot,
                left: Y,
                top: re
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
    ws = (0, a.__decorate)([(0, t.M)("gu-carousel")], ws);
    const Es = [824, 825, 826, 827, 828, 829];
    let Bt = class extends i.oi {
        constructor() {
            super(...arguments), this.videoId = 412954513, this.cropVideoFromTop = !0, this.randomChampionProto = Es[parseInt("" + (Math.random() * Es.length - 1), 10)]
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
    Bt.styles = i.iv`
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

    @media screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping.small)}) {
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
  `, (0, a.__decorate)([(0, d.C)()], Bt.prototype, "videoId", void 0), (0, a.__decorate)([(0, d.C)()], Bt.prototype, "cropVideoFromTop", void 0), (0, a.__decorate)([(0, Pt.S)()], Bt.prototype, "randomChampionProto", void 0), Bt = (0, a.__decorate)([(0, t.M)("gu-hero-video-banner")], Bt), s(4477);
    const ps = new us.do(N => {
        N.forEach(h => {
            h.target.handleResize()
        })
    });
    let ns = class extends i.oi {
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
            ps.observe(this), this.handleResize()
        }

        disconnectedCallback() {
            ps.unobserve(this)
        }

        handleResize(h) {
            const we = .01 * this.offsetHeight;
            this.style.setProperty("--cw", .01 * this.offsetWidth + "px"), this.style.setProperty("--ch", `${we}px`)
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
    ns = (0, a.__decorate)([(0, t.M)("gu-background-vimeo-embed")], ns);
    const is = ["days", "hours", "minutes", "seconds"];
    let St = class extends i.oi {
        constructor() {
            super(...arguments), this.darkBackground = !1, this.targetTime = 1755790779, this.showFields = is, this.size = "large", this.simpleTextDisplay = !1, this.simpleTextKind = "small", this.padZeroes = !1, this.getDelta = () => new Date(1e3 * this.targetTime).getTime() - (new Date).getTime(), this.getTimeRemaining = () => {
                const h = this.getDelta();
                let A = Math.floor(h / 864e5), Y = Math.floor(h % 864e5 / 36e5), re = Math.floor(h % 36e5 / 6e4),
                    we = Math.floor(h % 6e4 / 1e3);
                return A = A < 0 ? 0 : A, Y = Y < 0 ? 0 : Y, re = re < 0 ? 0 : re, we = we < 0 ? 0 : we, {
                    seconds: this.addPadding(`${we}`),
                    minutes: this.addPadding(`${re}`),
                    hours: this.addPadding(`${Y}`),
                    days: this.addPadding(`${A}`)
                }
            }, this.addPadding = h => h.length < 2 && this.padZeroes ? `0${h}` : h, this.getHeadingTextSize = h => "small" === h ? "small" : "large", this.getDividerHeadingTextSize = h => "small" === h ? "large" : "x-large", this.getSimpleTextKind = h => "small" === h ? "micro" : "small"
        }

        update(h) {
            h.has("targetTime") && this.initializeCounter(), h.has("simpleTextDisplay") && (this.simpleTextDisplay ? this.classList.add("simpleTextMode") : this.classList.remove("simpleTextMode")), super.update(h)
        }

        disconnectedCallback() {
            clearInterval(this.timer)
        }

        initializeCounter() {
            this.timeLeft = this.getTimeRemaining(), clearInterval(this.timer), this.timer = window.setInterval(() => {
                this.timeLeft = this.getTimeRemaining(), this.getDelta() < 0 && (clearInterval(this.timer), this.dispatchEvent(new CustomEvent("onCountdownComplete")))
            }, 1e3)
        }

        maybePluralise(h, A) {
            return 1 === h ? A.replace(/s$/, "") : A
        }

        render() {
            return void 0 === this.timeLeft ? i.dy`` : ((0, u.updateColoringVariables)({
                component: this,
                fillColor: this.fillColor
            }), this.simpleTextDisplay ? i.dy`
          ${this.showFields.map((h, A) => i.dy` <gu-simple-text
              fillColor=${this.fillColor}
              .kind=${this.simpleTextKind}
              align="center"
            >
              ${this.timeLeft[h]}
              ${A < this.showFields.length - 1 ? i.dy`<span class="simpleTextDivider"> : </span>` : null}
            </gu-simple-text>`)}
        ` : i.dy`
          ${this.showFields.map((h, A) => i.dy`
              <div
                class=${(0, E.$)({digit: !0, [`digit--${this.size}`]: !0, darkBackground: this.darkBackground})}
              >
                <gu-heading-text size=${this.getHeadingTextSize(this.size)}> ${this.timeLeft[h]} </gu-heading-text>
                <gu-simple-text
                  fillColor=${this.fillColor}
                  kind=${this.getSimpleTextKind(this.size)}
                  align="center"
                  class="label"
                  .text=${this.maybePluralise(parseInt(this.timeLeft[h], 10), h)}
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
    St.styles = i.iv`
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
  `, (0, a.__decorate)([(0, d.C)()], St.prototype, "darkBackground", void 0), (0, a.__decorate)([(0, d.C)()], St.prototype, "targetTime", void 0), (0, a.__decorate)([(0, d.C)()], St.prototype, "showFields", void 0), (0, a.__decorate)([(0, d.C)()], St.prototype, "fillColor", void 0), (0, a.__decorate)([(0, d.C)()], St.prototype, "size", void 0), (0, a.__decorate)([(0, d.C)()], St.prototype, "simpleTextDisplay", void 0), (0, a.__decorate)([(0, d.C)()], St.prototype, "simpleTextKind", void 0), (0, a.__decorate)([(0, d.C)()], St.prototype, "padZeroes", void 0), (0, a.__decorate)([(0, Pt.S)()], St.prototype, "timeLeft", void 0), St = (0, a.__decorate)([(0, t.M)("gu-countdown-timer")], St);
    const Os = (0, e.asCssProp)(`${r.measurements.standardBorderSize} solid ${r.colors.gold[500]}`);
    let Ms = class extends i.oi {
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
    border-bottom: ${Os};
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
    border-right: ${Os};
    padding: ${(0, e.asCssProp)(`${xe.dz.gridUnits(2)}`)} 0;
    z-index: 1;
  }

  .dropdownMenu__item {
    padding: ${(0, e.asCssProp)(`${xe.dz.gridUnits(2)} ${xe.dz.gridUnits(4)};`)};
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

        toggleMenu(h) {
            h.stopPropagation(), this.expanded = !this.expanded
        }

        get selectedItem() {
            return this.items ? this.items.find(h => h.id === this.selectedId) : null
        }

        selectDropDownItem(h) {
            this.selectedId = h, this.expanded = !1, this.dispatchEvent(new CustomEvent("onSelect", {detail: {item: this.selectedItem}}))
        }

        render() {
            return i.dy`
      <gu-simple-text
        class=${(0, E.$)({dropdownToggle: !0, "dropdownToggle--expanded": this.expanded})}
        @click=${this.toggleMenu}
        kind="tag"
      >
        <gu-vertical-space bottom="x-small">
          ${this.selectedItem ? this.selectedItem.name : this.placeholderText}
        </gu-vertical-space>
      </gu-simple-text>

      <div
        class=${(0, E.$)({dropdownMenu: !0, "dropdownMenu--expanded": this.expanded})}
      >
        ${this.items.map(h => i.dy`
            <gu-simple-text
              class=${(0, E.$)({dropdownMenu__item: !0, "dropdownMenu__item--selected": h.id === this.selectedId})}
              @click=${() => this.selectDropDownItem(h.id)}
              kind="tag"
            >
              ${h.name}
            </gu-simple-text>
          `)}
      </div>
    `
        }
    };
    Ms = (0, a.__decorate)([(0, t.M)("gu-dropdown")], Ms);
    var ls = s(61462);
    let zs = class extends i.oi {
        static get properties() {
            return {}
        }

        static get styles() {
            return i.iv`
      ${(0, e.asCssProp)((0, e.setBoxSizing)())}

      :host {
        display: block;
        position: relative;
      }

      /* @NOTE: The hidden submit button cannot be display: none,
      as this breaks the go-button / enter functionality in Safari */
      .formControl__hiddenSubmitInput {
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        ${(0, e.asCssProp)((0, ls.userSelect)("none"))};
      }

      .formControl__fakeSlot {
        display: flex;
        flex-direction: column;
      }
    `
        }

        firstUpdated() {
            this.formDom = this.shadowRoot.querySelector(".formControl"), this.formDom.addEventListener("submit", this.formSubmitHandler)
        }

        disconnectedCallback() {
            super.disconnectedCallback(), this.formDom.removeEventListener("submit", this.formSubmitHandler)
        }

        formSubmitHandler(h) {
            h.preventDefault(), this.dispatchEvent(new CustomEvent("onFormSubmit", {bubbles: !0, composed: !0}))
        }

        onSlotChange() {
            const h = this.shadowRoot.querySelector(".formSlot"),
                A = this.shadowRoot.querySelector(".formControl__fakeSlot");
            h.assignedElements().forEach(Y => A.appendChild(Y))
        }

        render() {
            return i.dy`
      <form class="formControl" action="">
        <input type="submit" class="formControl__hiddenSubmitInput" @click=${this.formSubmitHandler} />
        <div class="formControl__fakeSlot"></div>
      </form>
      <slot class="formSlot" @slotchange=${this.onSlotChange}></slot>
    `
        }
    };
    zs = (0, a.__decorate)([(0, t.M)("gu-form-context")], zs);
    let hs = class extends i.oi {
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
            const h = new Date, A = Math.floor((this.target.getTime() - h.getTime()) / 1e3), Y = [];
            A > 604800 && Y.push(this.withUnit(Math.floor(A / 604800), "w")), A > 86400 && Y.push(this.withUnit(Math.floor(A % 604800 / 86400), "d")), A > 3600 && Y.push(this.withUnit(Math.floor(A % 86400 / 3600), "h")), A > 60 && Y.push(this.withUnit(Math.floor(A % 3600 / 60), "min")), Y.push(this.withUnit(A % 60, "s")), this.time = Y.join(" "), this.requestUpdate("time")
        }

        withUnit(h, A) {
            return `${Math.max(h, 0)}${A}`
        }

        stop() {
            this.timer && clearInterval(this.timer), this.time = "", this.timer = void 0, this.requestUpdate("time")
        }

        render() {
            return this.target ? this.start() : this.stop(), i.dy`${this.time}`
        }
    };
    (0, a.__decorate)([(0, d.C)()], hs.prototype, "target", void 0), hs = (0, a.__decorate)([(0, t.M)("gu-textual-timer")], hs);
    let Zt = class extends i.oi {
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
        <gu-gilded-hex-button
          data-test-id="launch-game-cta"
          size="large"
          .disabled=${this.isRunning || !this.complete}
          .loading=${this.isRunning}
          @click=${this.startGame}
        >
          Start
        </gu-gilded-hex-button>
      </gu-button-group>
    `
        }

        renderActions() {
            return this.renderStartButton()
        }

        renderHeader() {
            var h, A, Y, re;
            return i.dy`
      <gu-vertical-space bottom="small" data-test-id="game-mode-options-header">
        <gu-heading-text
          class="game-mode-options__title"
          size="x-small"
          data-test-id="game-mode-title"
          fillGradient="gradients.gold.simple"
        >
          ${null !== (A = null === (h = this.gameMode) || void 0 === h ? void 0 : h.name) && void 0 !== A ? A : ""} ${this.renderTitleExtras()}
        </gu-heading-text>
        ${this.renderCountdownTimer()}
        <gu-paragraph-text
          class="game-mode-options__description"
          kind="micro"
          fillColor="white"
          data-test-id="game-mode-description"
        >
          ${null !== (re = null === (Y = this.gameMode) || void 0 === Y ? void 0 : Y.description) && void 0 !== re ? re : ""}
        </gu-paragraph-text>
      </gu-vertical-space>
    `
        }

        renderCountdownTimer() {
            var h, A;
            return null !== (A = null === (h = this.gameMode) || void 0 === h ? void 0 : h.expiry) && void 0 !== A && A ? Math.floor((this.gameMode.expiry.getTime() - (new Date).getTime()) / 1e3) > 7776e3 ? i.dy`` : i.dy`
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
            var h, A;
            return null !== (A = null === (h = this.gameMode) || void 0 === h ? void 0 : h.ranked) && void 0 !== A && A ? i.dy`<gu-icon class="game-mode-options__extra" iconLigature="flux_symbol"></gu-icon>` : i.dy``
        }

        render() {
            var h;
            return this.gameMode && (this.type = this.gameMode.key), this.style.setProperty("--image", `url(${null !== (h = this.images[this.type]) && void 0 !== h ? h : ""})`), i.dy`
      <div
        class=${(0, E.$)({
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
    (0, a.__decorate)([(0, d.C)()], Zt.prototype, "gameMode", void 0), (0, a.__decorate)([(0, d.C)()], Zt.prototype, "isRunning", void 0), (0, a.__decorate)([(0, d.C)()], Zt.prototype, "error", void 0), (0, a.__decorate)([(0, d.C)()], Zt.prototype, "complete", void 0), Zt = (0, a.__decorate)([(0, t.M)("gu-game-mode-panel")], Zt);
    let $s = class extends i.oi {
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

        onClick(h) {
            this.active = h, this.dispatchEvent(new CustomEvent("gameModeSelection", {
                detail: h,
                bubbles: !0,
                composed: !0
            }))
        }

        renderTile(h) {
            var A;
            return i.dy`
      <li
        class=${(0, E.$)({"game-mode-tile": !0, "game-mode-tile--active": this.active && this.active.key === h.key})}
        style="background-image: url(${null !== (A = this.images[h.key]) && void 0 !== A ? A : this.images.solo});"
      >
        <a
          class="game-mode-tile__link"
          data-test-id="game-mode-tile-link"
          href="javascript:void(0)"
          @click=${() => this.onClick(h)}
        >
          <gu-heading-text class="game-mode-tile__title" size="2x-small" fillColor="${r.colors.light[100]}">
            ${h.name}
          </gu-heading-text>
          <gu-paragraph-text class="game-mode-tile__description" kind="micro" fillColor="${r.colors.light[100]}">
            ${h.description}
          </gu-paragraph-text>
          ${this.renderExtras(h)}
        </a>
      </li>
    `
        }

        renderExtras(h) {
            return h.ranked ? i.dy`
        <div class="game-mode-tile__extra">
          <gu-icon iconLigature="flux_symbol" fillColor="black"></gu-icon>
        </div>
      ` : i.dy``
        }

        render() {
            return i.dy`
      <ul class="game-modes">
        ${this.gameModes.map(h => this.renderTile(h))}
      </ul>
    `
        }
    };
    $s = (0, a.__decorate)([(0, t.M)("gu-game-modes")], $s);
    let ms = class extends i.oi {
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
                const h = new Date, A = Math.floor((h.getTime() - this.started.getTime()) / 1e3),
                    Y = ("00" + Math.floor(A / 60)).substr(-2, 2), re = ("00" + A % 60).substr(-2, 2);
                this.time = `${Y}:${re}`, this.requestUpdate("time")
            }, 1e3))
        }

        stop() {
            this.timer && clearInterval(this.timer), this.time = "00:00", this.timer = void 0, this.requestUpdate("time")
        }

        render() {
            return this.started ? this.start() : this.stop(), i.dy` <gu-heading-text size="medium" data-test-id="queue-time">${this.time}</gu-heading-text> `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: Date})], ms.prototype, "started", void 0), ms = (0, a.__decorate)([(0, t.M)("gu-queue-timer")], ms);
    let Ts = class extends i.oi {
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
        class=${(0, E.$)({
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
    Ts = (0, a.__decorate)([(0, t.M)("gu-game-queue-panel")], Ts);
    let _s = class extends i.oi {
        render() {
            return i.dy`<slot></slot>`
        }
    };
    _s.styles = i.iv`
    ${(0, e.asCssProp)((0, e.setBoxSizing)())}
    :host {
      height: ${(0, e.asCssProp)(`${r.measurements.standardHeaderAlertBarHeight}px`)};
      position: relative;
      display: flex;
      background: ${(0, e.asCssProp)(r.colors.light[100])};
    }
  `, _s = (0, a.__decorate)([(0, t.M)("gu-header-alert-bar")], _s);
    const qt = (0, n.gridUnits)(5), js = (0, n.gridUnits)(5), As = (0, n.gridUnits)(8), Is = (0, n.gridUnits)(10),
        Hs = i.iv`
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
    padding: 0 ${(0, e.asCssProp)(qt)};
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
    var Et = s(4390), vo = s(97223);
    const Zs = "TOGGLE_NAV", Ks = "CLOSE_NAV", bo = "TOGGLE_SUB_MENU", Co = "UPDATE_CURRENT_ROUTE",
        Vs = "CLOSE_ALL_SUB_MENUS", Qs = "TOGGLE_USER_MENU", Ys = "CLOSE_USER_MENU", Kt = () => ({type: Ks}),
        Ds = N => ({type: Co, payload: N}),
        Us = {currentRoute: "", navMenuOpen: !1, navSubMenusOpen: {}, userMenuOpen: !1},
        nt = (0, vo.MT)((N = Us, {type: h, payload: A}) => {
            switch (h) {
                case Zs:
                    return Object.assign(Object.assign({}, N), {navMenuOpen: !N.navMenuOpen, userMenuOpen: !1});
                case Ks:
                    return Object.assign(Object.assign({}, N), {navSubMenusOpen: {}, navMenuOpen: !1});
                case bo:
                    return Object.assign(Object.assign({}, N), {navSubMenusOpen: {[A]: !N.navSubMenusOpen[A]}});
                case Vs:
                    return Object.assign(Object.assign({}, N), {navSubMenusOpen: {}});
                case Co:
                    return Object.assign(Object.assign({}, N), {currentRoute: A});
                case Qs:
                    return Object.assign(Object.assign({}, N), {userMenuOpen: !N.userMenuOpen, navMenuOpen: !1});
                case Ys:
                    return Object.assign(Object.assign({}, N), {userMenuOpen: !1});
                default:
                    return N
            }
        }, Us), qs = {
            navigationItems: {type: Array},
            loggedIn: {type: Boolean},
            router: {type: Object},
            ngZone: {type: Object}
        };
    customElements.define("gu-header-bar", (0, j.x)({
        renderer: function Xs({navigationItems: N, router: h, ngZone: A}) {
            if (!N) return null;
            const Y = (0, l.v9)({store: nt, selector: yt => yt.navMenuOpen}),
                re = (0, l.I0)(nt), [we, Ge] = (0, Pe.eJ)(!1), qe = () => {
                    re(Kt()), (0, Et.pR)(h, A, N.home.path), this.dispatchEvent(new CustomEvent("onLogoClick"))
                };
            return (0, Pe.d4)(() => {
                Ge((() => {
                    if (!N) return !1;
                    let yt = !1;
                    e:for (const Mt of Object.keys(N)) {
                        const gt = N[Mt];
                        if (gt.children) {
                            for (const Oe of Object.keys(gt.children)) if (gt.children[Oe].showNotificationBubble) {
                                yt = !0;
                                break e
                            }
                        } else if (gt.showNotificationBubble) {
                            yt = !0;
                            break e
                        }
                    }
                    return yt
                })())
            }, [N]), i.dy`
    <gu-icon
      class="menuToggleButton ${Y ? "menuToggleButton--open" : ""}"
      iconLigature=${Y ? "close_x" : "hamburger_menu"}
      @click=${yt => {
                yt.cancelBubble = !0, re({type: Zs})
            }}
      fillColor=${r.colors.gunmetal[100]}
    >
    </gu-icon>
    ${we ? i.dy`
          <gu-notification-bubble class="notificationBubble ${Y ? "notificationBubble--hide" : ""}">
          </gu-notification-bubble>
        ` : null}
    <div class="logoArea" @click=${() => qe()}>
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

    <gu-menu .router=${h} .ngZone=${A} .navigationItems=${N}></gu-menu>

    <div class="userArea">
      <slot name="userArea"></slot>
    </div>
  `
        }, props: {properties: qs, styles: Hs}
    }));
    var eo = s(92198), Rs = s(11735);
    const Bs = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    position: absolute;
    top: ${r.measurements.standardHeaderHeight}px;
    height: calc(100vh - ${r.measurements.standardHeaderHeight}px);
    width: 100%;
    background: ${(0, e.asCssProp)(r.colors.gunmetal[900])};
    list-style: none;
    margin: 0;
    padding: 0 ${(0, e.asCssProp)(qt)};
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
    customElements.define("gu-menu", (0, j.x)({
        renderer: function Ze({navigationItems: N, router: h, ngZone: A}) {
            const Y = (0, l.v9)({store: nt, selector: Oe => Oe.navMenuOpen}),
                re = (0, l.v9)({store: nt, selector: Oe => Oe.currentRoute}),
                we = (0, l.v9)({store: nt, selector: Oe => Oe.navSubMenusOpen}), Ge = (0, l.I0)(nt);
            (0, Pe.d4)(() => {
                Ge(Ds(h.url));
                const Oe = h.events.pipe((0, eo.h)(Ae => Ae instanceof Rs.m2)).subscribe(Ae => {
                    Ge(Ds(Ae.url))
                });
                return () => {
                    Oe.unsubscribe()
                }
            }, []), (0, Pe.d4)(() => {
                Y ? this.classList.add("open") : this.classList.remove("open")
            }, [Y]);
            const qe = Oe => {
                this.dispatchEvent(new CustomEvent("onMenuDropDownOpen", {
                    detail: {navItem: Oe},
                    bubbles: !0,
                    composed: !0
                })), Ge((N => ({type: bo, payload: N}))(Oe.path))
            }, Wt = Oe => Oe.children ? qe(Oe) : (Oe => {
                Oe(), Ge(Kt())
            })(Oe.url ? () => {
                this.dispatchEvent((0, Et.Cs)(Oe)), (0, Et.rb)(Oe)
            } : () => (0, Et.pR)(h, A, Oe.path)), yt = Oe => {
                let Ae = !1;
                const {children: $t} = Oe;
                return ("/" === re && "home" === Oe.shortName || -1 !== re.indexOf(Oe.path) && "home" !== Oe.shortName || !!$t && (0, Et.M0)($t, re)) && (Ae = !0), Ae
            }, Mt = Oe => !!we[Oe.path];
            return i.dy`
    ${Object.keys(N).map(Oe => {
                const Ae = N[Oe], $t = !Ae.children && !!Ae.url;
                return i.dy`
        <div
          class=${(0, E.$)({
                    menuItem: !0,
                    "menuItem--selected": yt(Ae),
                    "menuItem--opened": Mt(Ae),
                    "menuItem--hasSubMenu": !!Ae.children,
                    "menuItem--isExternal": $t
                })}
          @click=${() => Wt(Ae)}
        >
          <gu-icon class="menuItem__icon" iconLigature=${Ae.icon}> </gu-icon>
          ${Ae.longName ? i.dy`
                <gu-simple-text
                  class="menuItem__longName"
                  kind="large"
                  fontWeight="bold"
                  .responsiveKind=${[{breakpoint: "small", kind: "tag"}]}
                >
                  ${Ae.longName}
                </gu-simple-text>
              ` : null}

          <gu-simple-text
            class="menuItem__shortName"
            kind="large"
            fontWeight="bold"
            .responsiveKind=${[{breakpoint: "small", kind: "tag"}]}
          >
            ${Ae.shortName}
          </gu-simple-text>

          ${$t ? i.dy` <gu-icon class="menuItem__externalIcon" iconLigature="leave_website"></gu-icon> ` : null}
          ${Ae.children ? i.dy`
                <gu-icon
                  class=${(0, E.$)({menuItem__caret: !0, "menuItem__caret--rotated": Mt(Ae)})}
                  iconLigature="caret_down"
                ></gu-icon>
                <gu-sub-menu
                  .router=${h}
                  .ngZone=${A}
                  .subMenuItems=${Ae.children}
                  .topLevelPath=${Ae.path}
                ></gu-sub-menu>
              ` : null}
          ${Ae.showNotificationBubble || (Oe => !!Oe.children && Object.keys(Oe.children).reduce((Ae, $t) => {
                    const Ue = Oe.children[$t];
                    return !(!Ue || !Ue.showNotificationBubble) || Ae
                }, !1))(Ae) ? i.dy` <gu-notification-bubble></gu-notification-bubble> ` : null}
        </div>
      `
            })}
  `
        },
        props: {
            properties: {navigationItems: {type: Array}, router: {type: Object}, ngZone: {type: Object}},
            styles: Bs
        }
    }));
    const so = i.iv`
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
    customElements.define("gu-sub-menu", (0, j.x)({
        renderer: function oo({topLevelPath: N, subMenuItems: h, router: A, ngZone: Y}) {
            const re = (0, l.v9)({store: nt, selector: Ue => Ue.navSubMenusOpen}),
                we = (0, l.v9)({store: nt, selector: Ue => Ue.currentRoute}), Ge = (0, l.I0)(nt), qe = Ue => {
                    Ue.url ? (this.dispatchEvent((0, Et.Cs)(Ue)), (0, Et.rb)(Ue)) : function et() {
                        Ge(Kt()), (0, Et.pR)(A, Y, Ue.path)
                    }()
                }, Wt = Ue => we.includes(Ue.path), yt = Ss()(() => {
                    this.style.setProperty("--maxHeight", `${gt.offsetHeight}px`)
                }, 500), Mt = new us.do(Ue => {
                    Ue.forEach(() => yt())
                });
            let gt;
            (0, Pe.d4)(() => (gt = this.shadowRoot.querySelector(".subMenu"), Mt.observe(gt), () => Mt.unobserve(gt)), []);
            const Ae = () => {
                document.removeEventListener("click", $t)
            }, $t = Ue => {
                Ge({type: Vs})
            };
            return (0, Pe.d4)(() => (re[N] ? (this.classList.add("open"), setTimeout(() => {
                document.addEventListener("click", $t)
            })) : (this.classList.remove("open"), Ae()), () => Ae()), [re]), i.dy`
    <ul class="subMenu">
      ${Object.keys(h).map(Ue => {
                const et = h[Ue], Lo = {subMenu__item: !0, "subMenu__item--selected": Wt(et)};
                return i.dy`
          <li
            class=${(0, E.$)(Lo)}
            @click=${Io => {
                    Io.cancelBubble = !0, qe(et)
                }}
          >
            ${et.longName ? i.dy`
                  <gu-simple-text
                    class="item__longName"
                    kind="large"
                    .responsiveKind=${[{breakpoint: "small", kind: "tag"}]}
                  >
                    ${et.longName}
                  </gu-simple-text>
                ` : null}

            <gu-simple-text
              class="item__shortName"
              kind="large"
              .responsiveKind=${[{breakpoint: "small", kind: "tag"}]}
            >
              ${et.shortName}
            </gu-simple-text>

            ${et.url ? i.dy` <gu-icon class="item__externalIcon" iconLigature="leave_website"></gu-icon> ` : null}
            ${et.showNotificationBubble ? i.dy` <gu-notification-bubble></gu-notification-bubble> ` : null}
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
            }, styles: so
        }
    }));
    const no = i.iv`
  ${(0, e.asCssProp)((0, e.setBoxSizing)())}

  :host {
    display: block;
    height: ${De.standardHeaderHeight}px;
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
    customElements.define("gu-header-user-area", (0, j.x)({
        renderer: function io({
                                  menuItems: N,
                                  router: h,
                                  ngZone: A,
                                  userProperties: Y,
                                  downloadLauncherUrl: re,
                                  userStarsTotal: we,
                                  userFluxTotal: Ge
                              }) {
            if (!N) return null;
            const qe = (0, l.v9)({store: nt, selector: Ae => Ae.userMenuOpen}),
                Ot = (0, l.I0)(nt), [Wt, yt] = (0, Pe.eJ)(!1), Oe = () => {
                    this.dispatchEvent(new CustomEvent("onUserDetailsClick"))
                };
            return i.dy`
    ${Y ? i.dy`
          <div
            class=${(0, E.$)({userDetailsArea: !0, "userDetailsArea--open": qe})}
          >
            <gu-user-details
              .userProperties=${Y}
              .userStarsTotal=${we}
              .userFluxTotal=${Ge}
              @click=${Oe}
            ></gu-user-details>
            <div class="userDetailsArea__imgContainer" @click=${() => Ot({type: Qs})}>
              ${Wt ? i.dy`<gu-notification-bubble highPriority="true"></gu-notification-bubble>` : null}
              <img class="userDetailsArea__imgContainer__img" src=${Y.image_url} alt="user avatar image" />
              <i class="userDetailsArea__imgContainer__bannerSide userDetailsArea__imgContainer__bannerSide--left"></i>
              <i class="userDetailsArea__imgContainer__bannerSide userDetailsArea__imgContainer__bannerSide--right"></i>
              <i class="userDetailsArea__imgContainer__tinyCorner"></i>
              <i class="userDetailsArea__imgContainer__tinyCorner userDetailsArea__imgContainer__tinyCorner--right"></i>
              <gu-simple-text kind="tag" class="userDetailsArea__imgContainer__levelLabel" align="center">
                LVL${Y.level}
              </gu-simple-text>
            </div>
          </div>

          <gu-user-menu
            .userProperties=${Y}
            .userStarsTotal=${we}
            .userFluxTotal=${Ge}
            .router=${h}
            .ngZone=${A}
            .menuItems=${N}
            @onUserDetailsClick=${Oe}
          ></gu-user-menu>
        ` : i.dy`
          <div class="signedOutArea">
            <gu-simple-text kind="tag" @click=${() => {
                this.dispatchEvent(new CustomEvent("onLoginModal"))
            }} class="signedOutArea__signInButton" data-test-id="signinButton">
              sign in
            </gu-simple-text>
            ${re ? i.dy`
                  <gu-primary-hex-button
                    class="signedOutArea__downloadButton"
                    size="large"
                    href=${re}
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
            }, styles: no
        }
    }));
    const vs = i.iv`
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
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(5))} ${(0, e.asCssProp)(qt)};
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
    right: ${(0, e.asCssProp)(qt)};
    top: 50%;
    transform: translateY(-50%);
    ${(0, e.asCssProp)(r.animation.slowTransition("opacity"))};
  }

  gu-user-details {
    border-bottom: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
    padding: ${(0, e.asCssProp)((0, n.gridUnits)(3.5))} ${(0, e.asCssProp)(qt)};
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
`, Po = new CustomEvent("onLogout", {bubbles: !0, composed: !0}),
        lo = new CustomEvent("onConnectWallet", {bubbles: !0, composed: !0});
    customElements.define("gu-user-menu", (0, j.x)({
        renderer: function co({
                                  userProperties: N,
                                  router: h,
                                  ngZone: A,
                                  menuItems: Y,
                                  userStarsTotal: re,
                                  userFluxTotal: we
                              }) {
            const Ge = (0, l.v9)({store: nt, selector: Ue => Ue.userMenuOpen}), qe = (0, l.I0)(nt),
                Ot = () => this.dispatchEvent(lo), Wt = () => this.dispatchEvent(Po), Mt = () => {
                    document.removeEventListener("click", gt)
                }, gt = Ue => {
                    qe({type: Ys})
                };
            return (0, Pe.d4)(() => (Ge ? (this.classList.add("open"), setTimeout(() => {
                document.addEventListener("click", gt)
            })) : (this.classList.remove("open"), Mt()), () => Mt()), [Ge]), i.dy`
    <gu-user-details
      verticalLayout
      .userProperties=${N}
      .userStarsTotal=${re}
      .userFluxTotal=${we}
      @click=${() => {
                this.dispatchEvent(new CustomEvent("onUserDetailsClick"))
            }}
    ></gu-user-details>
    ${Object.keys(Y).map(Ue => {
                const et = Y[Ue];
                return et.visible ? i.dy`
            <div class="menuItem" @click=${() => (Ue => {
                    "Log Out" === Ue.shortName ? Wt() : "Connect Wallet" === Ue.shortName ? Ot() : Ue.url ? (0, Et.rb)(Ue) : Ue.path && (0, Et.pR)(h, A, Ue.path)
                })(et)}>
              <gu-simple-text class="menuItem__shortName" kind="small"> ${et.shortName} </gu-simple-text>

              ${et.showNotificationBubble ? i.dy` <gu-notification-bubble highPriority="true"></gu-notification-bubble> ` : null}
              ${et.children ? i.dy`
                    <div class="menuItem__subMenu">
                      ${Object.keys(et.children).map(Lo => {
                    const Io = et.children[Lo];
                    return i.dy`
                          <gu-simple-text
                            kind="tag"
                            class="menuItem__subMenu__item"
                            @click=${rr => ((Ue, et) => {
                        Ue.stopPropagation(), et.url ? (0, Et.rb)(et) : et.path && (0, Et.pR)(h, A, et.path)
                    })(rr, Io)}
                            fillColor=${r.colors.gunmetal[100]}
                          >
                            ${Io.shortName}
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
            }, styles: vs
        }
    }));
    const So = i.iv`
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
`, ko = {
        userProperties: {type: Object},
        userStarsTotal: {type: String},
        userFluxTotal: {type: String},
        verticalLayout: {type: Boolean}
    };
    customElements.define("gu-user-details", (0, j.x)({
        renderer: function uo({userProperties: N, userStarsTotal: h = "0", userFluxTotal: A = "0", verticalLayout: Y}) {
            return (0, Pe.d4)(() => {
                Y ? this.classList.add("verticalLayout") : this.classList.remove("verticalLayout")
            }, [Y]), i.dy`
    <div class="side side--left">
      <gu-simple-text kind="small" fontWeight="bold" fillColor=${r.colors.gold[300]} class="side__part side__part--flux">
        <gu-icon iconLigature="flux_symbol" class="side__part__icon"></gu-icon>
        ${A || "0"} FLUX
      </gu-simple-text>

      <gu-simple-text
        kind="small"
        fontWeight="bold"
        fillColor=${r.colors.apocyan[300]}
        class="side__part side__part--stars"
      >
        <gu-icon iconLigature="collectable_stars" class="side__part__icon"></gu-icon>
        ${h || "0"} STARS
      </gu-simple-text>
      <div class="side__hoverGradient"></div>
    </div>
  `
        }, props: {properties: ko, styles: So}
    }));
    var wo = s(40760);
    s(43337);
    let Cs = class extends wo.o {
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

        updateValue(h, A) {
            A ? this.value.splice(this.value.push(h)) : this.value.splice(this.value.indexOf(h), 1)
        }

        activate() {
            const h = this.renderRoot.querySelector("input");
            h && h.focus()
        }

        focus() {
            this.activate()
        }

        render() {
            return i.dy`
      ${this.options.map(h => i.dy`
          <label class="checkbox__label">
            <input
              type="checkbox"
              class="checkbox__input"
              @input=${this.getInputHandler(h.value)}
              @change=${this.onChange}
              @click=${this.unfocus}
              .checked=${!!this.value.find(A => A == h.value)}
              .disabled=${this.disabled}
              data-test-id="checkbox-native-element"
            />
            <gu-body-text size="medium" plain="true">${h.label}</gu-body-text>
          </label>
        `)}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], Cs.prototype, "options", void 0), (0, a.__decorate)([(0, d.C)()], Cs.prototype, "value", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], Cs.prototype, "layout", void 0), Cs = (0, a.__decorate)([(0, t.M)("gu-checkbox-group")], Cs), s(22249);
    var Do = s(30252), S = s(19444), V = s(37745);
    let g = class extends i.oi {
        constructor() {
            super(...arguments), this.for = "", this.id = `gu-label-${(0, S.v4)()}`
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

        associate(h) {
            Promise.resolve().then(() => {
                const A = this.findTarget();
                !A || A === this.target || (this.target && this.target.removeAttribute("aria-labelledby"), A.setAttribute("aria-labelledby", this.id), this.target = A)
            })
        }

        findTarget() {
            return this.for ? this.getRootNode().getElementById(this.for) : this.slotted ? this.slotted.find(h => h instanceof V.j) : void 0
        }

        onClick(h) {
            const A = this.target;
            A && h.target !== A && A.activate()
        }

        render() {
            return i.dy`<slot @slotchange=${this.associate} class="label__slot"></slot>`
        }
    };
    (0, a.__decorate)([(0, d.C)()], g.prototype, "for", void 0), (0, a.__decorate)([(0, d.C)({reflect: !0})], g.prototype, "id", void 0), (0, a.__decorate)([(0, Do.v)("", !0)], g.prototype, "slotted", void 0), g = (0, a.__decorate)([(0, t.M)("gu-label")], g);
    var F = s(90473);
    const ee = {hidden: "password", visible: "text"},
        Se = {visible: "action_showPassword", hidden: "action_hidePassword"};
    let ot = class extends F.M {
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
        ${(0, e.asCssProp)((0, ls.userSelect)("none"))};
      }
    `
        }

        toggleMode(h) {
            h.stopPropagation(), h.preventDefault(), !this.disabled && (this.mode = "hidden" === this.mode ? "visible" : "hidden", h.detail > 0 && this.input.focus())
        }

        getInputType() {
            return ee[this.mode]
        }

        renderIcon() {
            return i.dy`
      <a
        class="input__toggle"
        href="javascript:void(0)"
        @click=${this.toggleMode}
        @keyup=${h => h.stopPropagation()}
        data-test-id="password-input-visibility-toggle"
      >
        <gu-icon
          class="input__icon input__icon--status-${this.status} input__icon--mode-${this.mode}"
          iconLigature=${Se[this.mode]}
        ></gu-icon>
      </a>
    `
        }
    };
    (0, a.__decorate)([(0, Pt.S)()], ot.prototype, "mode", void 0), ot = (0, a.__decorate)([(0, t.M)("gu-password-input")], ot);
    let pt = class extends V.j {
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
        ${(0, e.asCssProp)((0, ls.userSelect)("none"))}
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

        getInputHandler(h) {
            return A => {
                A.stopPropagation(), this.value = h, this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}}))
            }
        }

        onChange(h) {
            h.stopPropagation(), this.dispatchEvent(new CustomEvent("change", {detail: {value: this.value}}))
        }

        activate() {
            let h = this.renderRoot.querySelector("input:checked");
            h || (h = this.renderRoot.querySelector("input")), h.focus()
        }

        focus() {
            this.activate()
        }

        unfocus(h) {
            h.x > 0 && h.y > 0 && h.target.blur()
        }

        render() {
            return i.dy`
      ${this.options.map(h => i.dy`
          <label class="radio-button__label">
            <input
              type="radio"
              class="radio-button__input"
              @input=${this.getInputHandler(h.value)}
              @change=${this.onChange}
              @click=${this.unfocus}
              .checked=${this.value == h.value}
              .disabled=${this.disabled}
              data-test-id="radio-button-native-element"
            />
            <gu-body-text size="medium" plain="true">${h.label}</gu-body-text>
          </label>
        `)}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], pt.prototype, "options", void 0), (0, a.__decorate)([(0, d.C)()], pt.prototype, "size", void 0), pt = (0, a.__decorate)([(0, t.M)("gu-radio-button-group")], pt);
    let Je = class extends V.j {
        constructor() {
            super(...arguments), this.value = 50, this.min = 0, this.max = 100, this.updateHelper = h => {
                requestAnimationFrame(() => requestAnimationFrame(h))
            }
        }

        static get styles() {
            const h = i.iv`linear-gradient(90deg, #AFFAED 0%, #8BE1E0 50.34%, #54BBCD 100%)`, A = i.iv`
      border: 1px solid ${(0, e.asCssProp)(r.colors.gunmetal[900])};
      height: 26px;
      width: 8px;
      border-radius: 4px;
      background: ${(0, e.asCssProp)(r.colors.apocyan[100])};
      cursor: pointer;
    `, Y = i.iv`
      width: 100%;
      height: 16px;
      cursor: pointer;
      border: 2px solid ${(0, e.asCssProp)(r.colors.gunmetal[700])};
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.35);
      border-radius: 4px;
    `, re = i.iv`
      background: ${h}, ${(0, e.asCssProp)(r.colors.gunmetal[700])};
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
        ${Y}
        ${re}
      }

      .range__input::-moz-range-track {
        ${Y}
        ${re}
      }

      .range__input::-ms-track {
        background: ${(0, e.asCssProp)(r.colors.gunmetal[700])};
        ${Y}
      }

      .range__input::-ms-fill-lower {
        background: ${h};
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

        onInput(h) {
            h.stopPropagation();
            const A = h.target;
            void 0 !== A.value && (this.value = parseFloat(A.value), this.updateSelectedRangeHighlight(), this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}})))
        }

        onChange(h) {
            h.stopPropagation(), this.dispatchEvent(new CustomEvent("change", {detail: {value: this.value}}))
        }

        update(h) {
            super.update(h), h.has("value") && this.updateHelper(this.updateSelectedRangeHighlight.bind(this))
        }

        firstUpdated(h) {
            super.firstUpdated(h), this.style.setProperty("--value", "0%"), this.updateHelper = A => A(), this.style.setProperty("--transition", "background-size"), setTimeout(() => {
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
    (0, a.__decorate)([(0, d.C)()], Je.prototype, "value", void 0), (0, a.__decorate)([(0, d.C)()], Je.prototype, "min", void 0), (0, a.__decorate)([(0, d.C)()], Je.prototype, "max", void 0), (0, a.__decorate)([(0, $.I)(".range__input")], Je.prototype, "input", void 0), Je = (0, a.__decorate)([(0, t.M)("gu-range-input")], Je);
    const Dt = i.iv`
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
    ${(0, e.asCssProp)((0, ls.userSelect)("none"))};
  }
`;
    let be = class extends V.j {
        constructor() {
            super(...arguments), this.placeholder = "", this.options = [], this.stretch = !1, this.open = !1
        }

        static get styles() {
            return Dt
        }

        update(h) {
            var A;
            if (h.has("disabled") && this.disabled && (this.open = !1), h.has("options")) {
                const Y = this.findSelectedOption();
                this.value = null !== (A = null == Y ? void 0 : Y.value) && void 0 !== A ? A : void 0
            }
            (h.has("value") || h.has("options")) && this.notify(), super.update(h)
        }

        toggleOpen(h) {
            this.open = !this.disabled && (void 0 !== h ? h : !this.open)
        }

        getToggleIcon() {
            return this.open ? "chevron_up" : "chevron_down"
        }

        renderSelectOptions(h) {
            return i.dy`
      ${this.options.map(A => i.dy`<a
            href="javascript:void(0)"
            @click=${() => this.selectOption(A)}
            class=${(0, E.$)({select__option: !0, "select__option--selected": this.value === A.value})}
            ><gu-body-text
              size="medium"
              fillColor=${h}
              fontWeight=${this.value === A.value ? "bold" : "normal"}
              plain="true"
              >${A.label}</gu-body-text
            >
          </a>`)}
    `
        }

        selectOption(h) {
            this.value = h ? h.value : void 0, this.open = !1
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

        handleKeyPress(h) {
            if (!this.disabled) switch (h.code) {
                case"Enter":
                case"Space":
                    this.toggleOpen();
                    break;
                case"Escape":
                    this.toggleOpen(!1)
            }
        }

        findSelectedOption() {
            return this.options.find(h => h.value === this.value)
        }

        getTextColor() {
            let h;
            switch (this.theme) {
                case"gunmetal":
                default:
                    h = "colors.light.300";
                    break;
                case"white":
                    h = "colors.dark.300";
                    break;
                case"black":
                    h = "colors.light.500"
            }
            return h
        }

        render() {
            const h = this.findSelectedOption(), A = this.getTextColor();
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
            ${this.value && h ? h.label : this.placeholder}
          </gu-body-text>
          <gu-icon class="select__icon" iconLigature="${this.getToggleIcon()}" fillColor="${A}"></gu-icon>
        </a>
        <div
          class=${(0, E.$)({select__menu: !0, "select__menu--visibility-hidden": !this.open})}
        >
          ${this.renderSelectOptions(A)}
        </div>
      </div>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], be.prototype, "theme", void 0), (0, a.__decorate)([(0, d.C)()], be.prototype, "placeholder", void 0), (0, a.__decorate)([(0, d.C)({type: Array})], be.prototype, "options", void 0), (0, a.__decorate)([(0, d.C)({
        type: Boolean,
        reflect: !0
    })], be.prototype, "stretch", void 0), (0, a.__decorate)([(0, Pt.S)()], be.prototype, "open", void 0), (0, a.__decorate)([(0, $.I)(".select__heading")], be.prototype, "link", void 0), be = (0, a.__decorate)([(0, t.M)("gu-select")], be);
    let ze = class extends V.j {
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

        onInput(h) {
            this.value = h.target.value, h.stopPropagation(), this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}}))
        }

        activate() {
            this.input.focus()
        }

        focus() {
            this.input.focus()
        }

        render() {
            var h;
            return i.dy`
      <textarea
        class="textarea__input textarea__input--status-${this.status}"
        @input="${this.onInput}"
        @change=${this.onChange}
        placeholder=${this.placeholder}
        .disabled=${this.disabled}
        data-test-id="textarea-native-element"
        .value=${null !== (h = this.value) && void 0 !== h ? h : ""}
      ></textarea>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], ze.prototype, "size", void 0), (0, a.__decorate)([(0, d.C)()], ze.prototype, "placeholder", void 0), (0, a.__decorate)([(0, $.I)(".textarea__input")], ze.prototype, "input", void 0), ze = (0, a.__decorate)([(0, t.M)("gu-textarea")], ze), s(85353);
    const ft = (0, n.gridUnits)(.5), Ht = i.iv`
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
    padding-top: ${(0, e.asCssProp)(ft)};
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
    margin-right: ${(0, e.asCssProp)(ft)};
    order: -1;
  }

  .innerContainer__trinkets__trinket--right {
    order: 2;
  }

  .innerContainer__trinkets__emptyTrinket:first-of-type:not(:last-of-type) {
    margin-right: ${(0, e.asCssProp)(ft)};
  }
`;
    let it = class extends i.oi {
        static get styles() {
            return Ht
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
          ${this.trinkets.map(h => i.dy`
              <gu-loadout-part
                class=${(0, E.$)({
                innerContainer__trinkets__trinket: !0,
                "innerContainer__trinkets__trinket--left": 1 === h.slot,
                "innerContainer__trinkets__trinket--right": 2 === h.slot
            })}
                .trinket=${h}
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
    (0, a.__decorate)([(0, d.C)({type: Object})], it.prototype, "board", void 0), (0, a.__decorate)([(0, d.C)({type: Array})], it.prototype, "trinkets", void 0), (0, a.__decorate)([(0, d.C)({type: Boolean})], it.prototype, "hideText", void 0), it = (0, a.__decorate)([(0, t.M)("gu-loadout-display")], it), s(90004);
    let Vt = class extends i.oi {
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
    Vt = (0, a.__decorate)([(0, t.M)("gu-logo")], Vt);
    const b = N => !N || N.length < 11 ? N : `${N.slice(0, 6)}...${N.slice(N.length - 4)}`;
    let B = class extends i.oi {
        constructor() {
            super(...arguments), this.walletDropdownMenuOptions = [], this.onGuUnlinkClick = (() => {
                this.dispatchEvent(new CustomEvent("onGuUnlinkClick", {
                    composed: !0,
                    bubbles: !0,
                    detail: {address: this.address}
                }))
            }).bind(this), this.onDropdownSelect = (h => {
                h.stopPropagation(), this.dispatchEvent(new CustomEvent("onDropdownSelect", {
                    composed: !0,
                    bubbles: !0,
                    detail: {address: this.address, menuItem: h.detail}
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
        <span class="address__text--small"> ${b(this.address)} </span>
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
    (0, a.__decorate)([(0, d.C)({type: String})], B.prototype, "address", void 0), (0, a.__decorate)([(0, d.C)({type: Boolean})], B.prototype, "imxLinked", void 0), (0, a.__decorate)([(0, d.C)({type: Boolean})], B.prototype, "defaultWalletEnabled", void 0), (0, a.__decorate)([(0, d.C)({type: Boolean})], B.prototype, "defaultWallet", void 0), (0, a.__decorate)([(0, d.C)({type: Array})], B.prototype, "walletDropdownMenuOptions", void 0), B = (0, a.__decorate)([(0, t.M)("gu-wallet-display")], B);
    let p = class extends i.oi {
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

        update(h) {
            this.showEmptyState = !(this.userWallets && this.userWallets.length || this.connectedWallet && this.connectedWallet.length), this.showImxLink = this.userWallets && this.userWallets.length > 0, this.allImxLinked = this.userWallets && this.userWallets.every(A => A.imx_linked), super.update(h)
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
        ${this.userWallets.map(h => this.walletActionLoading === h.address ? i.dy`
              <div class="walletList__addWallet"><gu-rectangular-spinner color="apocyan"></gu-rectangular-spinner></div>
            ` : i.dy` <gu-wallet-display
            address=${h.address}
            .walletDropdownMenuOptions=${this.walletDropdownMenuOptions}
            ?imxLinked="${h.imx_linked}"
            ?defaultWallet="${h.is_default}"
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
    (0, a.__decorate)([(0, d.C)()], p.prototype, "userWallets", void 0), (0, a.__decorate)([(0, d.C)()], p.prototype, "imxLinkLoading", void 0), (0, a.__decorate)([(0, d.C)()], p.prototype, "connectedWallet", void 0), (0, a.__decorate)([(0, d.C)()], p.prototype, "connectedWalletGuLinked", void 0), (0, a.__decorate)([(0, d.C)()], p.prototype, "guLinkLoading", void 0), (0, a.__decorate)([(0, d.C)()], p.prototype, "walletActionLoading", void 0), (0, a.__decorate)([(0, d.C)()], p.prototype, "defaultWalletEnabled", void 0), (0, a.__decorate)([(0, d.C)()], p.prototype, "walletDropdownMenuOptions", void 0), (0, a.__decorate)([(0, Pt.S)()], p.prototype, "showEmptyState", void 0), (0, a.__decorate)([(0, Pt.S)()], p.prototype, "showImxLink", void 0), (0, a.__decorate)([(0, Pt.S)()], p.prototype, "allImxLinked", void 0), p = (0, a.__decorate)([(0, t.M)("gu-wallets-list")], p);
    let M = class extends i.oi {
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
                Current web wallet: ${b(this.connectedWallet)}
              </gu-plain-square-button>

              <!-- <gu-standard-button
                class="rightSection__button rightSection__button--connectedWallet"
                theme="dark"
                type="subtle"
                title=${this.connectedWallet}
              >
                <div class="rightSection__button--connectedWallet__connectedDot"></div>
                Current web wallet: ${b(this.connectedWallet)}
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
    (0, a.__decorate)([(0, d.C)()], M.prototype, "connectedWallet", void 0), (0, a.__decorate)([(0, d.C)()], M.prototype, "webWalletConnecting", void 0), M = (0, a.__decorate)([(0, t.M)("gu-wallets-header")], M), s(21960);
    const ge = `\nlinear-gradient(\n  90deg,\n  rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 1) 0%,\n  rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 0.8) 25%,\n  rgba(0, 0, 0, 0) 50%,\n  rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 0.8) 75%,\n  rgba(${(0, e.asCssProp)((0, u.hexToCssRgbString)(r.colors.gunmetal[900]))}, 1) 100%\n)`;
    let Fe = class extends i.oi {
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
        background-image: ${(0, e.asCssProp)(ge)},
          url('https://images.godsunchained.com/god-art/1024/nature--aeona.webp');
        background-position-y: -238px;
      }

      :host([background='war']) {
        background-image: ${(0, e.asCssProp)(ge)},
          url('https://images.godsunchained.com/god-art/1024/war--auros.webp');
        background-position-y: -195px;
      }

      :host([background='magic']) {
        background-image: ${(0, e.asCssProp)(ge)},
          url('https://images.godsunchained.com/god-art/1024/magic--elyrian.webp');
        background-position-y: -195px;
      }

      :host([background='death']) {
        background-image: ${(0, e.asCssProp)(ge)},
          url('https://images.godsunchained.com/god-art/1024/death--malissus.webp');
        background-position-y: -330px;
      }

      :host([background='light']) {
        background-image: ${(0, e.asCssProp)(ge)},
          url('https://images.godsunchained.com/god-art/1024/light--thaeriel.webp');
        background-position-y: -267px;
      }

      :host([background='deception']) {
        background-image: ${(0, e.asCssProp)(ge)},
          url('https://images.godsunchained.com/god-art/1024/deception--ludia.webp');
        background-position-y: -336px;
      }

      :host([background='neutral']) {
        background-image: ${(0, e.asCssProp)(ge)}, url('/assets/images/misc-art/misc-art--C8-026.webp');
        background-position-y: -18px;
      }

      /* This could be improved by rendering any artId, something to look into later.
        Will be difficult though as each bg image will require a different background-position-y
      */
      :host([background='87055']) {
        background-image: ${(0, e.asCssProp)(ge)}, url('https://images.godsunchained.com/art2/1024/87055.webp');
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
    Fe = (0, a.__decorate)([(0, t.M)("gu-two-section-modal")], Fe);
    let Xe = class extends i.oi {
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

        onClick(h) {
            this.dispatchEvent(new CustomEvent("navigation", {detail: h, bubbles: !0, composed: !0}))
        }

        renderIcon(h) {
            return h.logo ? i.dy` <gu-logo class="navigation__item__icon" type="${h.logo}" size="28"></gu-logo> ` : h.icon ? i.dy` <gu-icon class="navigation__item__icon" iconLigature=${h.icon}></gu-icon> ` : i.dy``
        }

        renderEntry(h) {
            const A = "main" === this.type ? "micro" : "tag";
            return i.dy`
      <li
        class=${(0, E.$)({
                navigation__item: !0,
                "navigation__item--active": this.active && this.active.indexOf(h.key) > -1
            })}
      >
        <a
          class="navigation__item__link"
          href="javascript:void(0);"
          @click=${() => this.onClick(h)}
          data-test-id="navigation.item.link"
        >
          ${this.renderIcon(h)}

          <gu-simple-text class="navigation__item__name" kind="${A}" fontWeight="bold">
            ${h.name}
          </gu-simple-text>
        </a>
      </li>
    `
        }

        renderGroups(h) {
            return i.dy`
      ${Object.keys(h).map(A => i.dy`
          <ul class="navigation__items navigation__items--${A}">
            ${this.renderEntries(h[A])}
          </ul>
        `)}
    `
        }

        renderEntries(h) {
            return i.dy`
      ${Object.keys(h).map(A => this.renderEntry(Object.assign(Object.assign({}, h[A]), {key: A})))}
    `
        }

        render() {
            return i.dy`
      <nav
        class="${(0, E.$)({navigation: !0, [`navigation--type-${this.type}`]: !0, "navigation--visible": this.visible})}"
      >
        ${this.renderGroups(this.entries)}
        <slot></slot>
      </nav>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], Xe.prototype, "entries", void 0), (0, a.__decorate)([(0, d.C)()], Xe.prototype, "active", void 0), (0, a.__decorate)([(0, d.C)()], Xe.prototype, "visible", void 0), (0, a.__decorate)([(0, d.C)()], Xe.prototype, "type", void 0), Xe = (0, a.__decorate)([(0, t.M)("gu-navigation")], Xe);
    let Ke = class extends i.oi {
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
    (0, a.__decorate)([(0, d.C)({type: Boolean})], Ke.prototype, "highPriority", void 0), Ke = (0, a.__decorate)([(0, t.M)("gu-notification-bubble")], Ke);
    const kt = i.iv`
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
    let Ct = class extends i.oi {
        constructor() {
            super(...arguments), this.numberOfPages = 3, this.theme = "light"
        }

        previousPage() {
            this.currentPage > 1 && this.goToPage(this.currentPage - 1)
        }

        nextPage() {
            this.currentPage < this.numberOfPages && this.goToPage(this.currentPage + 1)
        }

        goToPage(h) {
            h !== this.currentPage && this.dispatchGoToPageEvent(h)
        }

        dispatchGoToPageEvent(h) {
            const A = new CustomEvent("go-to-page", {detail: {pageNumber: h}});
            this.dispatchEvent(A)
        }

        render() {
            return i.dy`
      <gu-icon class="pagination__chevron" iconLigature="chevron_left" @click=${this.previousPage}></gu-icon>

      ${new Array(this.numberOfPages).fill("").map((h, A) => i.dy`<span
              class="pagination__index ${A + 1 === this.currentPage ? "pagination__active-index" : ""}"
              @click=${() => this.goToPage(A + 1)}
              >${A + 1}</span
            >`)}

      <gu-icon class="pagination__chevron" iconLigature="chevron_right" @click=${this.nextPage}></gu-icon>
    `
        }
    };
    Ct.styles = kt, (0, a.__decorate)([(0, d.C)()], Ct.prototype, "currentPage", void 0), (0, a.__decorate)([(0, d.C)()], Ct.prototype, "numberOfPages", void 0), (0, a.__decorate)([(0, d.C)()], Ct.prototype, "theme", void 0), Ct = (0, a.__decorate)([(0, t.M)("gu-pagination")], Ct);
    let Lt = class extends i.oi {
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
    (0, a.__decorate)([(0, d.C)({type: Number})], Lt.prototype, "progress", void 0), (0, a.__decorate)([(0, d.C)({type: String})], Lt.prototype, "coloring", void 0), Lt = (0, a.__decorate)([(0, t.M)("gu-hex-progress-bar")], Lt);
    let Ce = class extends i.oi {
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
    Ce = (0, a.__decorate)([(0, t.M)("gu-progress-bar")], Ce);

    class fe extends i.oi {
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

        wait(h) {
            return new Promise(A => setTimeout(A, h))
        }

        update(h) {
            h.has("active") && this.active && this.execute(), super.update(h)
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

    (0, a.__decorate)([(0, d.C)({type: Boolean, reflect: !0})], fe.prototype, "active", void 0);
    let Ut = class extends fe {
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
                const h = this.progress >= 100 ? 100 : Math.min(this.progress, 98);
                this.style.setProperty("--barWidth", `${h}%`), yield this.wait(500)
            })
        }

        render() {
            const h = this.progress >= 100 ? 100 : Math.min(this.progress, 98);
            return this.style.setProperty("--barWidth", `${h}%`), i.dy`
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
              class=${(0, E.$)({
                "milestone-progress__milestone-gem-outer": !0,
                "milestone-progress__milestone-gem-outer--unachieved": 0 === this.progress
            })}
            >
              <div class="milestone-progress__milestone-gem-inner"></div>
            </div>
            <div class="milestone-progress__progress-bar" progress=${this.progress}></div>
            <div
              data-test-id="milestone-progress-bar.gem-end"
              class=${(0, E.$)({
                "milestone-progress__milestone-gem-outer": !0,
                "milestone-progress__milestone-gem-outer--unachieved": this.progress < 100
            })}
            >
              <div class="milestone-progress__milestone-gem-inner"></div>
            </div>
          </div>
          <div
            data-test-id="milestone-progress-bar.trail"
            class=${(0, E.$)({
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
    Ut.progressWidth = 60, (0, a.__decorate)([(0, d.C)({type: Number})], Ut.prototype, "progress", void 0), Ut = (0, a.__decorate)([(0, t.M)("gu-milestone-progress-bar")], Ut);
    let Ft = class extends i.oi {
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
      ${new Array(this.totalSteps).fill(0).map((h, A) => {
                const Y = A < this.filledSteps;
                return i.dy`
          <div class="box ${Y ? "box--filled" : ""}">
            <div class="box__filling"></div>
          </div>
          <div class="bridge ${Y ? "bridge--filled" : ""}"></div>
        `
            })}
    `
        }
    };
    Ft = (0, a.__decorate)([(0, t.M)("gu-progress-step-counter")], Ft);
    let Te = class extends i.oi {
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
    Te = (0, a.__decorate)([(0, t.M)("gu-raffles-and-prizes-section")], Te), s(28917), s(29939);
    let po = class extends i.oi {
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
    po = (0, a.__decorate)([(0, t.M)("gu-reward-display")], po);
    let Eo = class extends i.oi {
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
    Eo = (0, a.__decorate)([(0, t.M)("gu-reward-graphic")], Eo);
    const ts = (0, e.asCssProp)((0, n.gridUnits)(3));
    let Oo = class extends i.oi {
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
        top: -${ts};
        width: calc(${ts} * 2);
        height: 100%;
        background: ${(0, e.asCssProp)(r.colors.gold[500])};
      }

      .ribbon-banner__left::before,
      .ribbon-banner__right::before {
        content: '';
        position: absolute;
        width: ${ts};
        height: ${ts};
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
          padding: 0 ${ts};
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
    Oo = (0, a.__decorate)([(0, t.M)("gu-ribbon-banner")], Oo), s(65694);
    let Mo = class extends i.oi {
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

        gotoSocialLink(h) {
            window.open(h)
        }

        render() {
            return i.dy`
      ${this.accounts.map(h => i.dy`
          <gu-icon
            class="socialButton"
            iconLigature="social_${h.name}"
            fillGradient=${r.gradients.gold.simple("bottom")}
            @click=${() => this.gotoSocialLink(h.link)}
          ></gu-icon>
        `)}
    `
        }
    };
    (0, a.__decorate)([(0, d.C)()], Mo.prototype, "accounts", void 0), (0, a.__decorate)([(0, d.C)()], Mo.prototype, "smallIcons", void 0), Mo = (0, a.__decorate)([(0, t.M)("gu-social-buttons-row")], Mo);
    const jo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let Ro = class extends i.oi {
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
        padding-top: ${(0, e.asCssProp)((0, n.gridUnits)(8))};
      }

      @media screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping.medium)}) {
        :host {
          flex-basis: 34%;
          min-width: unset;
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping.large)}) {
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
        height: ${(0, e.asCssProp)((0, n.gridUnits)(35))};
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
      }

      .specialBanner {
        position: absolute;
        top: ${(0, e.asCssProp)((0, n.gridUnits)(-2))};
        left: ${(0, e.asCssProp)((0, n.gridUnits)(-2))};
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
            const A = this.endTimestampEpoch - 86400, Y = Math.round((new Date).getTime() / 1e3);
            if (Y > A) return void (this.showCountdown = !0);
            const re = A - Y;
            this.timer && clearInterval(this.timer), this.timer = window.setInterval(() => {
                this.showCountdown = !0
            }, 1e3 * re + 1e3)
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

      <gu-vertical-space top="large" bottom="x-large" class="middleSection">
        <gu-paragraph-text
          kind="large"
          fontWeight="bold"
          align="center"
          fillColor="colors.light.100"
          class="middleSection__name"
          >${this.name}
        </gu-paragraph-text>

        <gu-primary-hex-button @click=${this.buyItem} class="middleSection__cta" size="large">
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
                  AVAILABLE UNTIL ${this.endDate.getDate()} ${jo[this.endDate.getUTCMonth()].slice(0, 3)}
                  ${this.endDate.getUTCFullYear()}
                </gu-simple-text>
              </gu-vertical-space>
            `}
    `
        }
    };
    Ro = (0, a.__decorate)([(0, t.M)("gu-star-store-sale-item")], Ro);
    let Bo = class extends i.oi {
        constructor() {
            super(...arguments), this.durationType = "daily"
        }

        static get properties() {
            return {durationType: {type: String}}
        }

        static get styles() {
            return i.iv`
      :host {
        width: ${(0, e.asCssProp)((0, n.gridUnits)(56))};
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
    Bo = (0, a.__decorate)([(0, t.M)("gu-star-store-special-banner")], Bo);
    let Fo = class extends i.oi {
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
    Fo = (0, a.__decorate)([(0, t.M)("gu-stats-banner")], Fo);
    let $o = class extends i.oi {
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
    })], $o.prototype, "options", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Number
    })], $o.prototype, "selectedOptionIndex", void 0), $o = (0, a.__decorate)([(0, t.M)("gu-two-value-switch")], $o);
    let go = class extends i.oi {
        constructor() {
            super(...arguments), this.values = [], this.selectedIndex = 0, this.idPrefix = "", this.onClick = (h, A) => {
                this.selectedIndex = A, this.dispatchEvent(new CustomEvent("onItemClicked", {
                    composed: !0,
                    detail: {index: A, value: h}
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
          ${this.values.map((h, A) => i.dy`<gu-square-selection-row-item
              .selected=${A === this.selectedIndex}
              .value="${h}"
              @click=${() => this.onClick(h, A)}
              id=${`${this.idPrefix}item-${h}`}
            >
            </gu-square-selection-row-item>`)}
        ` : null
        }
    };
    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Array
    })], go.prototype, "values", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Number
    })], go.prototype, "selectedIndex", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: String
    })], go.prototype, "idPrefix", void 0), go = (0, a.__decorate)([(0, t.M)("gu-square-selection-row")], go);
    let To = class extends i.oi {
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
    (0, a.__decorate)([(0, d.C)({reflect: !0})], To.prototype, "value", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: Z.b
    })], To.prototype, "selected", void 0), To = (0, a.__decorate)([(0, t.M)("gu-square-selection-row-item")], To);
    const Ho = i.iv`
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
    let ho = class extends i.oi {
        constructor() {
            super(...arguments), this.type = "success", this.theme = "light"
        }

        render() {
            return i.dy` <slot></slot> `
        }
    };
    ho.styles = Ho, (0, a.__decorate)([(0, d.C)()], ho.prototype, "type", void 0), (0, a.__decorate)([(0, d.C)()], ho.prototype, "theme", void 0), ho = (0, a.__decorate)([(0, t.M)("gu-subtle-notification")], ho);
    let Go = class extends i.oi {
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
    Go = (0, a.__decorate)([(0, t.M)("gu-tile-img-header-text")], Go);
    var Zo = s(41363), Ko = s(29429), Vo = s(55443), Qo = s(53718), Yo = s(24699), Jo = s(25668);
    const Xo = i.iv`
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
`, qo = [Zo.Z, Ko.Z, Vo.Z, Qo.Z],
        er = [{name: "offset", options: {offset: [0, 18]}}, {name: "arrow", enabled: !0, options: {padding: 2}}];
    let ys = class extends i.oi {
        constructor() {
            super(...arguments), this.position = "top", this.showTooltip = () => {
                this.tooltipElement.setAttribute("data-show", ""), this.popperInstance.setOptions(h => Object.assign(Object.assign({}, h), {
                    modifiers: [...h.modifiers, {
                        name: "eventListeners",
                        enabled: !0
                    }]
                })), this.popperInstance.update()
            }, this.hideTooltip = () => {
                this.tooltipElement.removeAttribute("data-show"), this.popperInstance.setOptions(h => Object.assign(Object.assign({}, h), {
                    modifiers: [...h.modifiers, {
                        name: "eventListeners",
                        enabled: !1
                    }]
                }))
            }
        }

        firstUpdated() {
            const h = (0, Jo.kZ)({defaultModifiers: [...Yo.WX, ...qo]}), A = this.getAnchorElement();
            this.popperInstance = h(A, this.tooltipElement, {
                placement: this.position,
                strategy: "absolute",
                modifiers: er
            }), ["mouseenter", "focus"].forEach(we => A.addEventListener(we, this.showTooltip)), ["mouseleave", "blur"].forEach(we => A.addEventListener(we, this.hideTooltip))
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
    ys.styles = [Xo], (0, a.__decorate)([(0, d.C)()], ys.prototype, "anchorElementId", void 0), (0, a.__decorate)([(0, d.C)()], ys.prototype, "position", void 0), (0, a.__decorate)([(0, $.I)("#tooltip")], ys.prototype, "tooltipElement", void 0), (0, a.__decorate)([(0, $.I)("#arrow")], ys.prototype, "arrowElement", void 0), ys = (0, a.__decorate)([(0, t.M)("gu-tooltip")], ys);
    let No = class extends i.oi {
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
    No = (0, a.__decorate)([(0, t.M)("gu-will-you-survive-banner")], No);
    let Ao = class extends i.oi {
        constructor() {
            super(...arguments), this.values = [], this.selectedIndex = 0, this.itemClicked = (h, A) => {
                this.selectedIndex = A, this.dispatchEvent(new CustomEvent("onItemClicked", {
                    composed: !0,
                    detail: {index: A, value: h}
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
          ${this.values.map((h, A) => i.dy`<gu-tabs-collection-item
              .selected=${A === this.selectedIndex}
              .firstItem=${0 === A}
              .value="${h}"
              @click=${() => this.itemClicked(h, A)}
            >
            </gu-tabs-collection-item>`)}
        ` : null
        }
    };
    (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Array
    })], Ao.prototype, "values", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Number
    })], Ao.prototype, "selectedIndex", void 0), Ao = (0, a.__decorate)([(0, t.M)("gu-tabs-collection")], Ao);
    let mo = class extends i.oi {
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
    })], mo.prototype, "value", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: Z.b
    })], mo.prototype, "selected", void 0), (0, a.__decorate)([(0, d.C)({
        reflect: !0,
        type: Boolean,
        converter: Z.b
    })], mo.prototype, "firstItem", void 0), mo = (0, a.__decorate)([(0, t.M)("gu-tabs-collection-item")], mo);
    let _o = class extends i.oi {
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

      @media screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping.small)}) {
        img {
          max-width: ${(0, e.asCssProp)((0, n.gridUnits)(58))};
        }

        .description {
          min-height: ${(0, e.asCssProp)((0, n.gridUnits)(42))};
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping.medium)}) {
        img {
          max-width: ${(0, e.asCssProp)((0, n.gridUnits)(75))};
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping.large)}) {
        img {
          max-width: ${(0, e.asCssProp)((0, n.gridUnits)(92))};
        }
      }

      @media screen and (min-width: ${(0, e.asCssProp)(Ne.breakpointSizeMapping["x-large"])}) {
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
    (0, a.__decorate)([(0, d.C)({type: String})], _o.prototype, "description", void 0), (0, a.__decorate)([(0, d.C)({type: String})], _o.prototype, "imageSrc", void 0), (0, a.__decorate)([(0, d.C)({type: String})], _o.prototype, "title", void 0), _o = (0, a.__decorate)([(0, t.M)("gu-x2-ascension-card")], _o);
    let Wo = class extends i.oi {
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
    Wo = (0, a.__decorate)([(0, t.M)("gu-x2-section-header")], Wo);
    let zo = class extends i.oi {
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
    zo = (0, a.__decorate)([(0, t.M)("gu-loading-spinner")], zo);
    let Fs = class extends i.oi {
        constructor() {
            super(...arguments), this.items = [], this.open = !1
        }

        connectedCallback() {
            super.connectedCallback(), window.addEventListener("click", h => this.onClick(h)), window.addEventListener("scroll", () => this.onScroll())
        }

        disconnectedCallback() {
            window.removeEventListener("click", h => this.onClick(h)), window.removeEventListener("scroll", () => this.onScroll()), super.disconnectedCallback()
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
    z-index: ${De.modalLayerZLevel};
  }
`
        }

        selectDropDownItem(h) {
            this.current = h, this.open = !1, this.dispatchEvent(new CustomEvent("onSelect", {
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

        onClick(h) {
            !h.composedPath().includes(this) && this.open && (this.open = !1)
        }

        onScroll() {
            this.open && (this.open = !1)
        }

        render() {
            return i.dy`
      <slot name="dropdownControl" data-test-id="dropdown-control" @click=${this.toggleOpen}></slot>
      <ul
        class=${(0, E.$)({"dropdown-menu--hidden": !this.open, "dropdown-menu-content": this.open})}
      >
        ${this.items.map((h, A, Y) => i.dy`
              <gu-dropdown-menu-item
                .align=${this.align}
                .item=${h}
                .last=${Y.length - 1 === A}
                @click=${() => this.selectDropDownItem(h)}
              ></gu-dropdown-menu-item>
            `)}
      </ul>
    `
        }
    };
    (0, a.__decorate)([(0, d.C)({type: Array})], Fs.prototype, "items", void 0), (0, a.__decorate)([(0, d.C)({type: String})], Fs.prototype, "align", void 0), (0, a.__decorate)([(0, Pt.S)()], Fs.prototype, "open", void 0), (0, a.__decorate)([(0, Pt.S)({hasChanged: (N, h) => (null == N ? void 0 : N.value) !== (null == h ? void 0 : h.value)})], Fs.prototype, "current", void 0), Fs = (0, a.__decorate)([(0, t.M)("gu-dropdown-menu")], Fs);
    let fo = class extends i.oi {
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
    })], fo.prototype, "item", void 0), (0, a.__decorate)([(0, d.C)({type: String})], fo.prototype, "align", void 0), (0, a.__decorate)([(0, d.C)({
        type: Boolean,
        reflect: !0
    })], fo.prototype, "last", void 0), fo = (0, a.__decorate)([(0, t.M)("gu-dropdown-menu-item")], fo)
}, 14879
:
(q, R, s) => {
    "use strict";
    s.d(R, {o: () => u});
    var l = s(70655), _ = (s(1949), s(32830)), i = s(56418), t = s(98539), d = s(26711);

    class u extends _.oi {
        constructor() {
            super(...arguments), this.loading = !1, this.disabled = !1, this.expand = !1, this.iconPosition = "right", this.type = "secondary"
        }

        renderIcon(e) {
            return e ? _.dy`<gu-icon iconLigature=${e} class="button__icon"></gu-icon>` : _.dy``
        }

        renderText() {
            return _.dy`<slot class="button__text"></slot>`
        }

        renderContent(e, r) {
            return e ? _.dy`<gu-rectangular-spinner class="button__spinner" color="grey"></gu-rectangular-spinner>` : _.dy` ${this.renderIcon(r)} ${this.renderText()} `
        }

        getClassMap() {
            return {
                button__content: !0,
                [`button__content--icon-${this.iconPosition}`]: !0,
                [`button__content--type-${this.type}`]: !0
            }
        }

        render() {
            return _.dy` <div class=${(0, t.$)(this.getClassMap())}> ${this.renderContent(this.loading, this.icon)} </div> `
        }
    }

    (0, l.__decorate)([(0, i.C)({
        reflect: !0,
        type: Boolean,
        converter: d.b
    })], u.prototype, "loading", void 0), (0, l.__decorate)([(0, i.C)({
        reflect: !0,
        type: Boolean,
        converter: d.b
    })], u.prototype, "disabled", void 0), (0, l.__decorate)([(0, i.C)({
        reflect: !0,
        type: Boolean,
        converter: d.b
    })], u.prototype, "expand", void 0), (0, l.__decorate)([(0, i.C)()], u.prototype, "icon", void 0), (0, l.__decorate)([(0, i.C)()], u.prototype, "iconPosition", void 0), (0, l.__decorate)([(0, i.C)({reflect: !0})], u.prototype, "type", void 0)
}, 43977
:
(q, R, s) => {
    "use strict";
    var l = s(70655), _ = (s(61517), s(32830)), i = s(86041), t = s(80102), d = s(26532), u = s(65281);
    let n = class extends _.oi {
        static get styles() {
            return _.iv`
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
            return _.dy`
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
}, 89534
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(56418), i = s(72650), t = s(93270), d = s(14879), u = s(80102), n = s(26532),
        e = s(65281), r = s(40010);
    const k = a.iv`
  ${r.W2}

  .button__icon {
    font-size: ${(0, n.asCssProp)((0, u.gridUnits)(4))};
  }

  .button__text {
    color: inherit;
    text-shadow: 0 calc(var(--vh) * 0.2) calc(var(--vh) * 0.2) rgba(${(0, n.asCssProp)(e.colors.dark[900])}, 0.5);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-self: center;
    align-content: center;
    order: 1;
    gap: 8px;
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
    background: ${(0, n.asCssProp)(e.gradients.apocyan.simple())};
    opacity: 0.2;
    ${(0, n.asCssProp)((0, n.drawHexShapePolygonMask)(11, 11))};
  }

  /* Primary */

  :host([type='primary']) {
    background: ${(0, n.asCssProp)(e.gradients.apocyan.simple("bottom"))};
  }

  .button__artwork {
    ${(0, n.asCssProp)(e.uifx.userSelect("none"))};
    position: absolute;
    z-index: 2;
    left: 3px;
    right: 3px;
    top: 2px;
    bottom: 2px;
    ${(0, n.asCssProp)((0, n.drawHexShapePolygonMask)(11, 11))};
  }

  .button__artwork__side {
    position: absolute;
    left: 50%;
  }

  .button__artwork__side img {
    display: block;
    height: 100%;
  }

  .button__artwork__side--top {
    height: calc(${(0, n.asCssProp)("32px")} * 1.4);
    bottom: 36%;
    transform: translateX(-42%);
  }

  .button__artwork__side--bottom {
    height: calc(${(0, n.asCssProp)("32px")} * 2);
    top: 32%;
    transform: translateX(-58%);
  }

  :host([size='large']) .button__artwork__side--top {
    height: calc(${(0, n.asCssProp)("48px")} * 1.4);
  }

  :host([size='large']) .button__artwork__side--bottom {
    height: calc(${(0, n.asCssProp)("48px")} * 2);
  }

  :host([type='primary']:hover) {
    color: ${(0, n.asCssProp)(e.colors.light[100])};
  }

  :host([type='primary']:hover)::before {
    background: ${(0, n.asCssProp)(e.colors.gunmetal[700])};
  }

  :host([type='primary']:hover) .artwork__side {
    opacity: 0.8;
  }

  /* Secondary */

  :host([type='secondary']) {
    background: ${(0, n.asCssProp)(e.colors.gunmetal[100])};
  }

  :host([type='secondary'])::before {
    background: ${(0, n.asCssProp)(e.colors.gunmetal[900])};
  }

  :host([type='secondary']:hover)::before {
    background: ${(0, n.asCssProp)(e.colors.gunmetal[700])};
  }

  /* Subtle */

  :host([type='subtle']) {
    background: ${(0, n.asCssProp)(e.colors.gunmetal[900])};
    text-transform: uppercase;
  }

  :host([type='subtle'])::before {
    display: none;
  }

  :host([type='subtle']) .button__text,
  :host([type='subtle']) .button__icon {
    color: ${(0, n.asCssProp)(e.colors.apocyan[100])};
  }

  :host([type='subtle']:hover) {
    background: ${(0, n.asCssProp)(e.colors.gunmetal[700])};
  }
`;

    class P extends d.o {
        constructor() {
            super(...arguments), this.type = "secondary"
        }

        static get styles() {
            return k
        }

        renderArtwork() {
            return "primary" !== this.type ? a.dy`` : a.dy`
      <div class="button__artwork">
        <picture class="button__artwork__side button__artwork__side--top">
          <source srcset="/assets/images/hex-button/hex-button--top-wave-art.webp" type="image/webp" />
          <source srcset="/assets/images/hex-button/hex-button--top-wave-art.png" type="image/png" />
          <img src="/assets/images/hex-button/hex-button--top-wave-art.png" />
        </picture>

        <picture class="button__artwork__side button__artwork__side--bottom">
          <source srcset="/assets/images/hex-button/hex-button--bottom-wave-art.webp" type="image/webp" />
          <source srcset="/assets/images/hex-button/hex-button--bottom-wave-art.png" type="image/png" />
          <img src="/assets/images/hex-button/hex-button--bottom-wave-art.png" />
        </picture>
      </div>
    `
        }

        renderText() {
            return a.dy`
      <gu-heading-text class="button__text" size="${"large" === this.size ? "2x-small" : "3x-small"}">
        <slot></slot>
      </gu-heading-text>
    `
        }

        render() {
            return a.dy`${this.renderArtwork()} ${super.render()}`
        }
    }

    (0, l.__decorate)([(0, _.C)({reflect: !0})], P.prototype, "type", void 0), (0, l.__decorate)([(0, _.C)()], P.prototype, "size", void 0), customElements.define("gu-hex-button", (0, i.b)((0, t.Z)(P)))
}, 40010
:
(q, R, s) => {
    "use strict";
    s.d(R, {W2: () => r});
    var l = s(32830), a = s(80102), _ = s(26532), i = s(65281);
    const t = l.iv`
  :host {
    cursor: pointer;
    display: inline-flex;
    justify-self: center;
    justify-content: center;
    flex-grow: 0;
    color: ${(0, _.asCssProp)(i.colors.gunmetal[100])};
    border-radius: ${(0, _.asCssProp)((0, a.gridUnits)(1))};
    padding: 1px;
    overflow: hidden;
  }

  /* Button content styles
    ----------------------------------------------------------------------------------- */
  .button__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(0, _.asCssProp)((0, a.gridUnits)(1.5))} ${(0, _.asCssProp)((0, a.gridUnits)(3.5))};
    flex: 1;
    gap: 8px;
  }

  .button__icon {
    position: relative;
    z-index: 2;
    order: 2;
    font-size: ${(0, _.asCssProp)((0, a.gridUnits)(6))};
  }

  .button__text {
    position: relative;
    z-index: 2;
    text-decoration: none;
    order: 1;
    line-height: 20px;
  }

  /* Horizontal stretch functionality:
    ----------------------------------------------------------------------------------- */
  :host([expand='true']) {
    justify-self: stretch;
    flex-grow: 1;
  }

  /* Button content icon on left side state:
    ----------------------------------------------------------------------------------- */
  .button__content--icon-left .button__icon {
    order: 0;
  }

  /* Button content when layout is square
  ----------------------------------------------------------------------------------- */
  .button__content--layout-square {
    padding: ${(0, _.asCssProp)((0, a.gridUnits)(1.5))};
  }

  /* Button content when layout is vertical
    ----------------------------------------------------------------------------------- */
  .button__content--layout-vertical {
    flex-direction: column;
    align-items: center;
    min-width: 70px;
    max-width: 80px;
    padding: ${(0, _.asCssProp)((0, a.gridUnits)(3))} ${(0, _.asCssProp)((0, a.gridUnits)(3))};
    gap: 0px;
  }

  .button__content--layout-vertical .button__icon {
    order: 0;
    margin: 0;
    font-size: ${(0, _.asCssProp)((0, a.gridUnits)(6))};
  }

  .button__content--layout-vertical .button__text {
    text-align: center;
  }

  /* "DISABLED" and "LOADING" BUTTON STYLES
    ----------------------------------------------------------------------------------- */
  :host([disabled='true']),
  :host([loading='true']) {
    ${(0, _.asCssProp)(i.uifx.userSelect("none"))};
  }

  :host([disabled='true']) {
    filter: grayscale(100%);
  }
`, r = l.iv`
  ${t}

  :host {
    position: relative;
    white-space: nowrap;
    color: ${(0, _.asCssProp)(i.colors.light[100])};
    ${(0, _.asCssProp)((0, _.drawHexShapePolygonMask)(12, 12))};
    ${(0, _.asCssProp)(i.animation.standardTransition("all"))};

    /* NORMAL SIZING BY DEFAULT */
    min-width: 140px;
    height: ${(0, _.asCssProp)("32px")};
    line-height: ${(0, _.asCssProp)("32px")};
  }

  /* The background "fill" color of the button */
  :host::before {
    content: '';
    position: absolute;
    ${(0, _.inset)(2, 3)}
    z-index: 0;
    background: ${(0, _.asCssProp)(i.colors.gunmetal[900])};
    ${(0, _.asCssProp)((0, _.drawHexShapePolygonMask)(11, 11))};
    ${(0, _.asCssProp)(i.animation.standardTransition("all"))};
  }

  .button__content {
    padding: 0 ${(0, _.asCssProp)("20px")};
  }

  /* large size */

  :host([size='large']) {
    height: ${(0, _.asCssProp)("48px")};
    line-height: ${(0, _.asCssProp)("48px")};
    ${(0, _.asCssProp)((0, _.drawHexShapePolygonMask)(18, 18))};
  }

  :host([size='large']) .button__content {
    padding: 0 ${(0, _.asCssProp)("26px")};
  }

  :host([size='large'])::before {
    ${(0, _.asCssProp)((0, _.drawHexShapePolygonMask)(17, 17))};
  }

  :host([size='large']) .buttonContent__icon {
    font-size: ${(0, _.asCssProp)((0, a.gridUnits)(5.5))};
  }
`
}, 4390
:
(q, R, s) => {
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

    s.d(R, {pR: () => l, rb: () => a, M0: () => i, Cs: () => t});
    const t = d => new CustomEvent("onExternalNavItemClick", {detail: {navItem: d}, bubbles: !0, composed: !0})
}, 61517
:
(q, R, s) => {
    "use strict";
    var l = s(32830), a = s(5284), _ = s(65171), i = s(26532), t = s(65281), d = s(91418);
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
            return (0, _.updateColoringVariables)({
                component: this,
                fillColor: this.fillColor,
                fillGradient: this.fillGradient,
                fillGradientTarget: this.fillGradientTarget
            }), l.dy`<i class="icon">${this.iconLigature}</i>`
        }
    })
}, 40760
:
(q, R, s) => {
    "use strict";
    s.d(R, {o: () => e});
    var l = s(70655), _ = (s(43337), s(32830)), i = s(56418), t = s(86041), d = s(26532), u = s(65281), n = s(37745);
    let e = class extends n.j {
        constructor() {
            super(...arguments), this.size = "normal"
        }

        static get styles() {
            return _.iv`
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

        getInputHandler(v) {
            return C => {
                C.stopPropagation(), this.updateValue(v, C.target.checked), this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}}))
            }
        }

        onChange(v) {
            v.stopPropagation(), this.dispatchEvent(new CustomEvent("change", {detail: {value: this.value}}))
        }

        updateValue(v, C) {
            this.value = C
        }

        activate() {
            this.renderRoot.querySelector("input").click()
        }

        focus() {
            this.renderRoot.querySelector("input").focus()
        }

        unfocus(v) {
            v.x > 0 && v.y > 0 && v.target.blur()
        }

        render() {
            return _.dy`
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
(q, R, s) => {
    "use strict";
    s.d(R, {j: () => t});
    var l = s(70655), a = s(32830), _ = s(56418), i = s(7302);

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

    (0, l.__decorate)([(0, _.C)()], t.prototype, "name", void 0), (0, l.__decorate)([(0, _.C)()], t.prototype, "value", void 0), (0, l.__decorate)([(0, _.C)({
        reflect: !0,
        type: Boolean
    })], t.prototype, "disabled", void 0), (0, l.__decorate)([(0, _.C)()], t.prototype, "valid", void 0), (0, l.__decorate)([(0, i.S)()], t.prototype, "dirty", void 0), (0, l.__decorate)([(0, i.S)()], t.prototype, "status", void 0)
}, 22249
:
(q, R, s) => {
    "use strict";
    var l = s(70655), _ = (s(43337), s(32830)), i = s(30252), t = s(86041);
    let d = class extends _.oi {
        constructor() {
            super(...arguments), this.controls = []
        }

        static get styles() {
            return _.iv`
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
            return _.dy`<slot></slot>`
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
(q, R, s) => {
    "use strict";
    s.d(R, {M: () => w});
    var l = s(70655), i = (s(43337), s(61517), s(32830)), t = s(56418), d = s(38872), u = s(86041), n = s(26532),
        e = s(65281), r = s(37745);
    const v = {
        email: "email",
        phone: "tel",
        name: "text",
        search: "search",
        text: "text",
        url: "url",
        number: "number"
    }, C = {invalid: "alert_triangle", valid: "checkbox_tick", initial: ""};
    let w = class extends r.j {
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

        onInput(k) {
            this.value = k.target.value, k.stopPropagation(), this.dispatchEvent(new CustomEvent("input", {detail: {value: this.value}}))
        }

        activate() {
            var k;
            null === (k = this.input) || void 0 === k || k.focus()
        }

        focus() {
            var k;
            null === (k = this.input) || void 0 === k || k.focus()
        }

        getInputType() {
            return v[this.type]
        }

        renderIcon() {
            return i.dy`
      <gu-icon class="input__icon input__icon--status-${this.status}" iconLigature=${C[this.status]}></gu-icon>
    `
        }

        render() {
            var k;
            return i.dy`
      <input
        type=${this.getInputType()}
        .value=${null !== (k = this.value) && void 0 !== k ? k : ""}
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
    (0, l.__decorate)([(0, t.C)()], w.prototype, "size", void 0), (0, l.__decorate)([(0, t.C)()], w.prototype, "type", void 0), (0, l.__decorate)([(0, t.C)()], w.prototype, "placeholder", void 0), (0, l.__decorate)([(0, d.I)(".input__input")], w.prototype, "input", void 0), w = (0, l.__decorate)([(0, u.M)("gu-input")], w)
}, 85353
:
(q, R, s) => {
    "use strict";
    var l = s(70655), _ = (s(43337), s(32830)), i = s(56418), t = s(30252), d = s(86041), u = s(26532), n = s(65281);
    let e = class extends _.oi {
        constructor() {
            super(...arguments), this.errors = [], this.enabled = !1
        }

        static get styles() {
            return _.iv`
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

        updated(v) {
            super.updated(v), v.has("errors") && this.updateErrors()
        }

        updateErrors() {
            Promise.resolve().then(() => {
                !this.slotted || this.slotted.forEach(v => v.classList.toggle("validation-errors--active", !(!this.enabled || !this.errors.find(C => C === v.getAttribute("key")))))
            })
        }

        render() {
            return _.dy`<slot @slotchange=${this.updateErrors()}></slot>`
        }
    };
    (0, l.__decorate)([(0, i.C)()], e.prototype, "errors", void 0), (0, l.__decorate)([(0, i.C)()], e.prototype, "enabled", void 0), (0, l.__decorate)([(0, t.v)("", !0, "[key]")], e.prototype, "slotted", void 0), e = (0, l.__decorate)([(0, d.M)("gu-validation-errors")], e)
}, 1949
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(56418), i = s(86041), t = s(80102), d = s(26532), u = s(65281);
    let n = class extends a.oi {
        constructor() {
            super(...arguments), this.color = "grey"
        }

        static get styles() {
            return a.iv`
      :host {
        height: ${(0, d.asCssProp)((0, t.gridUnits)(6))};
        display: flex;
        background: none;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0;
      }
      .rect {
        box-sizing: content-box;
        width: ${(0, d.asCssProp)((0, t.gridUnits)(1.5))};
        height: 100%;
        animation: opacityFade 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      }
      .rect:not(:first-child) {
        margin-left: ${(0, d.asCssProp)((0, t.gridUnits)(1.5))};
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
        background: ${(0, d.asCssProp)(u.colors.light[300])};
      }
      .apocyan.rect--1 {
        background: ${(0, d.asCssProp)(u.colors.apocyan[300])};
      }
      .apocyan.rect--2 {
        background: #6edbdb;
      }
      .apocyan.rect--3 {
        background: #67d9e0;
      }
      .apocyan.rect--4 {
        background: ${(0, d.asCssProp)(u.colors.apocyan[500])};
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
            return a.dy`
      <div class="rect rect--1 ${this.color}"></div>
      <div class="rect rect--2 ${this.color}"></div>
      <div class="rect rect--3 ${this.color}"></div>
      <div class="rect rect--4 ${this.color}"></div>
    `
        }
    };
    (0, l.__decorate)([(0, _.C)({type: String})], n.prototype, "color", void 0), n = (0, l.__decorate)([(0, i.M)("gu-rectangular-spinner")], n)
}, 90004
:
(q, R, s) => {
    "use strict";
    var l = s(70655), i = (s(77064), s(52102), s(32830)), t = s(56418), d = s(86041), u = s(65281), n = s(65171),
        e = s(80102), r = s(26532);
    const v = (0, r.asCssProp)((0, e.gridUnits)(11)), C = i.iv`
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
    width: ${v};
    height: ${v};
    line-height: ${v};
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
    let E = class extends i.oi {
        static get styles() {
            return C
        }

        renderText() {
            var O, o, m, y;
            if (this.hideText) return i.dy``;
            const D = (null === (o = null === (O = this.board) || void 0 === O ? void 0 : O.class_properties) || void 0 === o ? void 0 : o.quality) || (null === (y = null === (m = this.board) || void 0 === m ? void 0 : m.class_properties) || void 0 === y ? void 0 : y.effort),
                Q = this.trinket ? this.trinket.name : this.board ? this.board.name : "";
            return i.dy`
      <i class="gradientSkrim"></i>
      <div class="textFields">
        <gu-simple-text class="textFields__qualityName" kind="tag" fillColor=${u.colors.light[100]}>
          ${D}
        </gu-simple-text>
        <gu-heading-text class="textFields__itemName" size="2x-small" fillGradient=${u.gradients.gold.simple()}>
          ${Q}
        </gu-heading-text>
      </div>
    `
        }

        renderCount() {
            var O, o;
            let m;
            return !this.hideCount && void 0 !== this.count && (m = (null === (O = this.trinket) || void 0 === O ? void 0 : O.owned) || (null === (o = this.board) || void 0 === o ? void 0 : o.owned) ? this.count : 0), this.hideCount || void 0 === m ? i.dy`` : i.dy`
        <gu-simple-text class="countDisplay" align="center" kind="micro" data-test-id="loadout-part-count">
          x<strong>${Math.min(m, 99)}</strong>${m > 99 ? "+" : null}
        </gu-simple-text>
      `
        }

        render() {
            var O, o, x;
            return this.noAspectRatio ? this.classList.add("noAspectRatio") : this.classList.remove("noAspectRatio"), (null === (O = this.trinket) || void 0 === O ? void 0 : O.owned) || (null === (o = this.board) || void 0 === o ? void 0 : o.owned) ? this.classList.remove("notOwned") : this.classList.add("notOwned"), this.equipped ? this.classList.add("equipped") : this.classList.remove("equipped"), this.hideText ? this.classList.add("hideText") : this.classList.remove("hideText"), this.hideCount ? this.classList.add("hideCount") : this.classList.remove("hideCount"), this.hideBorder ? this.classList.add("hideBorder") : this.classList.remove("hideBorder"), i.dy`
      <div class="innerContainer">
        ${this.trinket ? ((x, O) => "Good Kitty Statue" === x.name ? ((x, O) => {
                var o;
                let m = "#6B6B70", y = "#B1AEB9", D = "#E1E1E1";
                return (null === (o = null == x ? void 0 : x.properties) || void 0 === o ? void 0 : o.fur_color) && (m = x.properties.fur_color, y = x.properties.belly_color, D = x.properties.eyes_color), O ? i.dy`
      <gu-regular-crypto-kitty-head
        class="itemImage itemImage--trinket itemImage--cryptoKittyHead"
        .furColor=${m}
        .bellyColor=${y}
        .eyeColor=${D}
        data-test-id="loadout-part-trinket"
      ></gu-regular-crypto-kitty-head>
    ` : i.dy`
    <gu-regular-crypto-kitty
      class="itemImage itemImage--trinket itemImage--cryptoKitty"
      .furColor=${m}
      .bellyColor=${y}
      .eyeColor=${D}
      data-test-id="loadout-part-trinket"
    ></gu-regular-crypto-kitty>
  `
            })(x, O) : i.dy`<img
    class="itemImage itemImage--trinket"
    src="https://images.godsunchained.com/collectables/trinkets/${x.proto}--preview.webp"
    alt=""
    data-test-id="loadout-part-trinket"
  />`)(this.trinket, this.noAspectRatio) : null}
        ${this.board ? (x = this.board.proto, i.dy`
  <img
    class="itemImage itemImage--board"
    src="https://images.godsunchained.com/collectables/boards/${x}--thumb.webp"
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
    })], E.prototype, "count", void 0), (0, l.__decorate)([(0, t.C)({type: Object})], E.prototype, "board", void 0), (0, l.__decorate)([(0, t.C)({type: Object})], E.prototype, "trinket", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], E.prototype, "equipped", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], E.prototype, "noAspectRatio", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], E.prototype, "hideText", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], E.prototype, "hideCount", void 0), (0, l.__decorate)([(0, t.C)({type: Boolean})], E.prototype, "hideBorder", void 0), E = (0, l.__decorate)([(0, d.M)("gu-loadout-part")], E)
}, 21960
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(86041), i = s(80102), t = s(26532), d = s(65281);
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
    u = (0, l.__decorate)([(0, _.M)("gu-modal-background")], u)
}, 29939
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(56418), i = s(86041), t = s(26532), d = s(65281);
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
    (0, l.__decorate)([(0, _.C)({type: String})], u.prototype, "furColor", void 0), (0, l.__decorate)([(0, _.C)({type: String})], u.prototype, "bellyColor", void 0), (0, l.__decorate)([(0, _.C)({type: String})], u.prototype, "eyeColor", void 0), u = (0, l.__decorate)([(0, i.M)("gu-regular-crypto-kitty-head")], u)
}, 28917
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(56418), i = s(86041), t = s(26532), d = s(65281);
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
    (0, l.__decorate)([(0, _.C)({type: String})], u.prototype, "furColor", void 0), (0, l.__decorate)([(0, _.C)({type: String})], u.prototype, "bellyColor", void 0), (0, l.__decorate)([(0, _.C)({type: String})], u.prototype, "eyeColor", void 0), u = (0, l.__decorate)([(0, i.M)("gu-regular-crypto-kitty")], u)
}, 65694
:
(q, R, s) => {
    "use strict";
    var l = s(70655), u = (s(90004), s(77064), s(11015), s(61517), s(43977), s(32830)), n = s(56418), e = s(7302),
        r = s(86041), v = s(98539), C = s(65281), w = s(65171), I = s(80102), k = s(26532);
    const P = u.iv`
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
      rgba(${(0, k.asCssProp)((0, w.hexToCssRgbString)(C.colors.dark[900]))}, 1) 0%,
      rgba(${(0, k.asCssProp)((0, w.hexToCssRgbString)(C.colors.dark[900]))}, 0) 70%
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
    border: ${(0, k.asCssProp)((0, I.gridUnits)(.5))} solid ${(0, k.asCssProp)(C.colors.gunmetal[500])};
    background: ${(0, k.asCssProp)(C.colors.gunmetal[900])};
    overflow: hidden;
    box-shadow: 0px 0px ${(0, k.asCssProp)((0, I.gridUnits)(2))} rgba(${(0, k.asCssProp)((0, w.hexToCssRgbString)(C.colors.dark[900]))}, 0.65);
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
    color: ${(0, k.asCssProp)(C.colors.gunmetal[500])};
  }

  .uiTextArea__icon {
    font-size: ${(0, k.asCssProp)((0, I.gridUnits)(7))};
    margin-bottom: ${(0, k.asCssProp)((0, I.gridUnits)(1))};
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
    border-color: ${(0, k.asCssProp)(C.colors.gold[300])};
  }

  .innerContainer--highlight:hover .trinket {
    border-color: ${(0, k.asCssProp)(C.colors.apocyan[300])};
  }

  .innerContainer--highlight .uiTextArea {
    color: ${(0, k.asCssProp)(C.colors.light[100])};
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
            return P
        }

        update(x) {
            x.has("highlight") && !x.get("highlight") && (this.hideNameText = !1), super.update(x)
        }

        renderTrinketName() {
            return this.hideNameText ? u.dy`` : u.dy`
      <gu-heading-text
        fillGradient=${C.gradients.gold.simple()}
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
        class=${(0, v.$)({
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
(q, R, s) => {
    "use strict";
    s.d(R, {Q: () => _});
    var l = s(30109);
    const _ = (0, l.XM)(class a extends l.Xe {
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
(q, R, s) => {
    "use strict";
    s.d(R, {J: () => i});
    var l = s(12052), a = s(32830);
    const _ = Promise.resolve().then.bind(Promise.resolve());

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
            super.updated(d), this.haunted.runLayoutEffects(), _(() => this.haunted.runEffects())
        }

        disconnectedCallback() {
            this.haunted.teardown(), super.disconnectedCallback()
        }
    }
}, 65171
:
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {
        componentToHex: () => a,
        loopForVariable: () => _,
        rgbToHex: () => i,
        hexToRgb: () => t,
        hexToCssRgbString: () => d,
        setPropertyGradientFromVariable: () => u,
        setPropertyGradient: () => n,
        setPropertyColorFromVariable: () => e,
        setPropertyColor: () => r,
        setBorderColorHoverFromVariable: () => v,
        setBorderColorHover: () => C,
        setBackgroundFillHoverFromVariable: () => w,
        setBackgroundFillHover: () => I,
        updateColoringVariables: () => k
    });
    var l = s(65281);
    const a = P => {
        const $ = P.toString(16);
        return 1 === $.length ? "0" + $ : $
    }, _ = P => {
        const $ = P.split(".");
        let E = l;
        for (let x = 0; x < $.length; x++) E = E[$[x]];
        return E
    }, i = (P, $, E) => `#${a(P)}${a($)}${a(E)}`, t = P => {
        const $ = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(P);
        return $ ? {r: parseInt($[1], 16), g: parseInt($[2], 16), b: parseInt($[3], 16)} : void 0
    }, d = P => {
        const $ = t(P);
        return $ ? `${$.r}, ${$.g}, ${$.b}` : P
    }, u = (P, $, E, x) => {
        const o = _($)(x).replace(/;/gm, "");
        P.setProperty(E, o)
    }, n = (P, $, E) => {
        P.setProperty(E, $.replace(/;/gm, ""))
    }, e = (P, $, E) => {
        const x = _($);
        P.setProperty(E, x)
    }, r = (P, $, E) => {
        P.setProperty(E, $)
    }, v = (P, $) => {
        const E = _($);
        P.setProperty("--borderColorHover", E)
    }, C = (P, $) => {
        P.setProperty("--borderColorHover", $)
    }, w = (P, $) => {
        const E = _($);
        P.setProperty("--backgroundFillColorHover", E)
    }, I = (P, $) => {
        P.setProperty("--backgroundFillColorHover", $)
    }, k = ({
                component: P,
                fillColor: $,
                fillColorHover: E,
                fillGradient: x,
                fillGradientTarget: O,
                borderColor: o,
                borderColorHover: m,
                backgroundFillColor: y,
                backgroundFillColorHover: D,
                backgroundFillGradient: Q,
                backgroundFillGradientTarget: ie,
                iconColor: ue
            }) => {
        $ && (P.setAttribute("fillColor", $), /colors\./.test($) ? e(P.style, $, "--textFillColor") : r(P.style, $, "--textFillColor")), E && (P.setAttribute("fillColorHover", E), /colors\./.test(E) ? e(P.style, E, "--textFillColorHover") : r(P.style, E, "--textFillColorHover")), o && (P.setAttribute("borderColor", o), /colors\./.test(o) ? e(P.style, o, "--borderColor") : r(P.style, o, "--borderColor")), m && (P.setAttribute("borderColorHover", m), /colors\./.test(m) ? e(P.style, m, "--borderColorHover") : r(P.style, m, "--borderColorHover")), m && (P.setAttribute("borderColorHover", m), /colors\./.test(m) ? v(P.style, m) : C(P.style, m)), y && (P.setAttribute("backgroundFillColor", y), /colors\./.test(y) ? e(P.style, y, "--backgroundFillColor") : r(P.style, y, "--backgroundFillColor")), D && (P.setAttribute("backgroundFillColorHover", D), /colors\./.test(D) ? e(P.style, D, "--backgroundFillColorHover") : r(P.style, D, "--backgroundFillColorHover")), ue && (P.setAttribute("iconColor", ue), /colors\./.test(ue) ? e(P.style, ue, "--iconColor") : r(P.style, ue, "--iconColor")), D && (P.setAttribute("backgroundFillColorHover", D), /colors\./.test(D) ? w(P.style, D) : I(P.style, D)), Q && (P.setAttribute("backgroundFillGradient", Q), /gradients\./.test(Q) ? u(P.style, Q, "--backgroundFillGradient", ie) : n(P.style, Q, "--backgroundFillGradient")), x && (P.setAttribute("fillGradient", x), /gradients\./.test(x) ? u(P.style, x, "--textFillGradient", O) : n(P.style, x, "--textFillGradient"))
    }
}, 5284
:
(q, R, s) => {
    "use strict";
    s.d(R, {gt: () => _, I5: () => l, dz: () => d, ZB: () => n, uA: () => a});
    var l = {};
    s.r(l), s.d(l, {isIos: () => i, isSafari: () => t});
    var a = {};
    s.r(a), s.d(a, {enhancedTextRenderingStyles: () => C, stringContainsEmoji: () => v, uppercaseWord: () => w});
    var _ = s(65171);

    function i() {
        return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
    }

    const t = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var d = s(80102), n = (s(26711), s(26532)), e = s(89747), r = s.n(e);
    const v = I => r()().test(I),
        C = "\n  /* Get fonts to look slightly nicer where possible */\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility\n",
        w = I => I.charAt(0).toUpperCase() + I.slice(1)
}, 80102
:
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {
        gridUnits: () => l,
        checkOutOfBounds: () => a,
        getOuterHeight: () => _,
        waitForImageToLoad: () => i
    });
    const l = t => 4 * t + "px", a = ({
                                          x: t,
                                          y: d,
                                          left: u,
                                          top: n,
                                          width: e,
                                          height: r,
                                          tolerance: v = 2
                                      }) => (window.scrollY >= n && (n -= window.scrollY, r += window.scrollY), d >= Math.floor(r + n - v) || d <= n + v || t >= Math.floor(e + u - v) || t <= u + v),
        _ = t => {
            const d = window.getComputedStyle(t), u = parseInt(d.getPropertyValue("margin-top")),
                n = parseInt(d.getPropertyValue("margin-bottom"));
            return t.offsetHeight + u + n
        }, i = t => new Promise((d, u) => {
            const n = () => {
                t.removeEventListener("load", r), t.removeEventListener("error", e)
            }, e = v => {
                console.error("Awww snap! <img> or <picture> LOAD ERROR:", v, t.src), n(), u()
            }, r = () => {
                n(), d()
            };
            t.complete ? d() : (t.addEventListener("load", r), t.addEventListener("error", e))
        })
}, 26711
:
(q, R, s) => {
    "use strict";
    s.d(R, {b: () => l});
    const l = {fromAttribute: a => a && "false" !== a, toAttribute: a => a ? "true" : "false"}
}, 26532
:
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {
        asCssProp: () => _,
        drawHexShapePolygonMask: () => i,
        drawBottomHexShapePolygonMask: () => t,
        setBoxSizing: () => d,
        fadeReveal: () => u,
        listReveal: () => n,
        styleScrollbars: () => e,
        inset: () => r,
        ellipsize: () => v
    });
    var l = s(32830), a = s(65281);
    const _ = C => l.iv`${(0, l.$m)(C)}`,
        i = (C, w, I = 0) => ``,
        t = C => ``,
        d = (C = "border-box") => `\n  :host,\n  :host *,\n  :host *::before,\n  :host *::after {\n    box-sizing: ${C};\n  }\n`,
        u = (C, w, I = "initial", k = .3, P = 0) => `\n  ${C} {\n    opacity: 0;\n    height: 0;\n    transition: opacity ${k}s ease, height 0s ${k}s, transform ${k}s ease;\n    ${P ? `transform: translateY(${P}px);` : ""}\n  }\n  ${w} {\n    opacity: 1;\n    height: ${I};\n    transition: opacity ${k}s ease, height 0s 0s, transform ${k}s ease;\n    ${P ? "transform: translateY(0);" : ""}\n  }\n`,
        n = (C, w = .3, I = 10, k = 12) => `\n  ${C} {\n    animation: listReveal ${w}s ease-out backwards;\n    animation-delay: ${.1 * I}s;\n  }\n\n  ${[...Array(I).keys()].map(P => `\n      ${C}:nth-of-type(${P}) {\n        animation-delay: ${.1 * P}s;\n      }\n    `).join("\n")}\n\n  @keyframes listReveal {\n    from {\n      transform: translateY(${k}px);\n      opacity: 0;\n    }\n    to {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n`,
        e = (C = "") => `\n  ${C}::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  ${C}::-webkit-scrollbar-thumb {\n    width: 4px;\n    background: ${a.colors.gunmetal[500]};\n    border-radius: 2px;\n  }\n`,
        r = (C, w = C, I = C, k = w) => l.iv`
  top: ${C}px;
  right: ${w}px;
  bottom: ${I}px;
  left: ${k}px;
`, v = () => l.iv`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
}, 39029
:
(q, R, s) => {
    "use strict";
    s.d(R, {x1: () => a.x, I0: () => t, v9: () => i, Rl: () => u}), s(25297);
    var a = s(58672), _ = s(12052);
    const i = ({store: r, selector: v}) => {
        const [C, w] = (0, _.eJ)(v(r.getState()));
        return (0, _.d4)(() => r.subscribe(() => {
            const I = v(r.getState());
            w(I)
        }), [v]), C
    }, t = r => v => r.dispatch(v);
    s(5284);
    var u = s(65281);
    s(72985), s(69039)
}, 72650
:
(q, R, s) => {
    "use strict";
    s.d(R, {b: () => u});
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

            updated(v) {
                super.updated(v), this.updateHoverSound(), this.updateClickSound()
            }

            disconnectedCallback() {
                super.disconnectedCallback(), this.disconnectHover(), this.disconnectClick()
            }

            handleHover(v) {
                v.preventDefault(), this.hoverControl.play()
            }

            handleClick(v) {
                v.preventDefault(), this.clickControl.play()
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
(q, R, s) => {
    "use strict";
    s.d(R, {Am: () => t, lH: () => u, Xg: () => a, s: () => l});
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
            const {target: r, href: v} = this;
            r ? window.open(v, r) : window.location.href = v
        }
    };
    var _ = s(46461);
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
            this.clickSoundControl = new _.Howl({src: [i[this.nodeName].ogg, i[this.nodeName].mp3]})
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
            this.hoverSoundControl = new _.Howl({src: ["/assets/audio/buttons/hover--primary.ogg", "/assets/audio/buttons/hover--primary.mp3"]})
        }

        destroyHoverSound() {
            this.hoverSoundControl && this.hoverSoundControl.unload()
        }
    };
    s(72650)
}, 93270
:
(q, R, s) => {
    "use strict";
    s.d(R, {Z: () => _});
    var l = s(70655), a = s(56418);
    const _ = i => {
        class t extends i {
            constructor() {
                super(...arguments), this.href = "", this.target = "", this.bound = !1, this.window = window
            }

            updated(u) {
                super.updated(u), this.href && !this.bound ? (this.addEventListener("click", this.handleClick), this.bound = !0) : !this.href && this.bound && this.removeListener()
            }

            disconnectedCallback() {
                super.disconnectedCallback(), this.removeListener()
            }

            removeListener() {
                this.bound && this.removeEventListener("click", this.handleClick)
            }

            handleClick() {
                const {target: u, href: n} = this;
                u ? this.window.open(n, u) : this.window.location.href = n
            }
        }

        return (0, l.__decorate)([(0, a.C)({type: String})], t.prototype, "href", void 0), (0, l.__decorate)([(0, a.C)({type: String})], t.prototype, "target", void 0), t
    }
}, 47925
:
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {breakpointSizeMapping: () => l});
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
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {
        gunmetal: () => l,
        light: () => a,
        white: () => _,
        black: () => i,
        dark: () => t,
        apocyan: () => d,
        yellow: () => u,
        gold: () => n,
        aqua: () => e,
        card: () => r,
        alert: () => v,
        quality: () => C,
        rarity: () => w,
        god: () => I,
        fillColoringRules: () => k
    });
    const l = {100: "#90CAF9", 300: "#527493", 500: "#3D5A74", 700: "#1D2F41", 900: "#0F1B27"},
        a = {100: "#F6F6F6", 300: "#D7D7D7", 500: "#B6B6B6", 700: "#979797", 900: "#7F7F7F"}, _ = "#ffffff",
        i = "#000000", t = {100: "#7F7F7F", 300: "#646464", 500: "#464646", 700: "#272727", 900: "#0A0A0A"},
        d = {100: "#AFFAED", 300: "#03A9F4", 500: "#54BBCD"}, u = {100: "#FCF7D4", 300: "#F7EA9B", 500: "#F2DC63"},
        n = {100: "#FFF2D8", 300: "#FBC02D", 500: "#C6A052"}, e = {200: "#affaed", 300: "#8be1e0", 500: "#54bbcd"},
        r = {creature: "#ebd08a", spell: "#76b5ad", weapon: "#7a608c"}, v = "#FF8B01", C = {
            plain: "#8295A2",
            bronze: "#6A8B35",
            iron: "#3D91B9",
            meteorite: "#84343E",
            shadow: "#B461C5",
            gold: "#E5D93C",
            diamond: "#94E6FB",
            mythic: "#ffffff"
        }, w = {common: "#6D6C6D", rare: "#3C8ED2", epic: "#6D1FC4", legendary: "#D8A638", mythic: "#D02C3A"}, I = {
            deception: {primary: "#FA77FC", secondary: "#CA3FD8", tertiary: "#8F189B"},
            war: {primary: "#FF8B01", secondary: "#D73333", tertiary: "#99011A"},
            death: {primary: "#9C4EF9", secondary: "#35145B", tertiary: "#35145B"},
            magic: {primary: "#50BCFF", secondary: "#3884DE", tertiary: "#1752BA"},
            nature: {primary: "#9DE764", secondary: "#5AC33F", tertiary: "#4C772F"},
            light: {primary: "#FBE29F", secondary: "#FFD76E", tertiary: "#FAB248"}
        },
        k = "\n  /* Styles to use when there is a gradientFill set ... */\n  :host([fillGradient]),\n  :host([fillGradient]) ::slotted(*) {\n    background: var(--textFillGradient);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  /* Styles to use when there is a simple fill color set ... */\n  :host([fillColor]),\n  :host([fillColor]) ::slotted(*) {\n    color: var(--textFillColor);\n\n    /* Use the text coloring for border color, and allow it to be over-written */\n    border-color: var(--textFillColor);\n  }\n\n  /* Styles to use when there is a simple fill color hover set ... */\n  :host([fillColorHover]:hover),\n  :host([fillColorHover]:hover) ::slotted(*) {\n    color: var(--textFillColorHover);\n\n    /* Use the text coloring for border color, and allow it to be over-written */\n    border-color: var(--textFillColorHover);\n  }\n\n  /* Styles to use when there is a simple border color set ... */\n  :host([borderColor]),\n  :host([borderColor]) ::slotted(*) {\n    border-color: var(--borderColor);\n  }\n\n  /* Styles to use when there is a simple border color hover set ... */\n  :host([borderColorHover]:hover),\n  :host([borderColorHover]:hover) ::slotted(*) {\n    border-color: var(--borderColorHover);\n  }\n\n  /* Styles to use when there is a simple background color fill set ... */\n  :host([backgroundFillColor]),\n  :host([backgroundFillColor]) ::slotted(*) {\n    background-color: var(--backgroundFillColor);\n  }\n\n  /* Styles to use when there is a simple background color fill hover set ... */\n  :host([backgroundFillColorHover]:hover),\n  :host([backgroundFillColorHover]:hover) ::slotted(*) {\n    background-color: var(--backgroundFillColorHover);\n  }\n"
}, 65281
:
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {
        animation: () => l,
        breakpoints: () => n,
        colors: () => e,
        gradients: () => a,
        measurements: () => E,
        typography: () => x,
        uifx: () => O
    });
    var l = {};
    s.r(l), s.d(l, {
        slowTransition: () => u,
        slowTransitionDuration: () => t,
        standardTransition: () => d,
        standardTransitionDuration: () => _,
        standardTransitionEasing: () => i
    });
    var a = {};
    s.r(a), s.d(a, {
        apocyan: () => w,
        dark: () => I,
        god: () => P,
        gold: () => r,
        gunmetal: () => v,
        light: () => k,
        textFill: () => $,
        yellow: () => C
    });
    const _ = "150ms", i = "ease-in-out", t = "300ms", d = o => `\n  transition: ${o} ${_}\n  ${i};\n`,
        u = o => `\n  transition: ${o} ${t}\n  ${i};\n`;
    var n = s(47925), e = s(91418);
    const r = {
            simple: (o = "bottom") => `var(--gu-yellow)`,
            mirror: (o = "bottom") => `\n  linear-gradient(\n    to ${o},\n    ${e.gold[500]} 0%,\n    ${e.gold[100]} 50%,\n    ${e.gold[500]} 100%\n  );\n`,
            complex: (o = "top") => `\n  linear-gradient(\n    to ${o},\n    #FFFDF0 0%,\n    #FBEBC1 14%,\n    #E6C675 25%,\n    #F6DF6E 40%,\n    #B27E18 60%,\n    #DEAB61 73%,\n    #A67B4B 85%,\n    #664320 100%\n  );\n`,
            horizontal: (o = "right") => `\n  linear-gradient(\n    to ${o},\n    ${e.gold[500]} 3%,\n    ${e.gold[300]} 25%,\n    ${e.gold[100]} 50%,\n    ${e.gold[300]} 75%,\n    ${e.gold[500]} 97%\n  );\n`
        }, v = {
            simple: (o = "bottom") => `\n  linear-gradient(\n    to ${o},\n    ${e.gunmetal[900]} 0%,\n    ${e.gunmetal[700]} 100%\n  );`,
            mirror: (o = "bottom") => `\n  linear-gradient(\n    to ${o},\n    ${e.gunmetal[900]} 0%,\n    ${e.gunmetal[700]} 50%,\n    ${e.gunmetal[900]} 100%\n  );\n`
        },
        C = {simple: (o = "top") => `\n  linear-gradient(\n    to ${o},\n    ${e.yellow[100]} 0%,\n    ${e.yellow[300]} 50%,\n    ${e.yellow[500]} 100%\n  );\n`},
        w = {
            simple: (o = "top") => `linear-gradient(\n    to ${o},\n    ${e.apocyan[100]} 0%,\n    ${e.apocyan[500]} 100%\n  );`,
            mirror: (o = "top") => `linear-gradient(\n    to ${o},\n    ${e.apocyan[500]} 0%,\n    ${e.apocyan[100]} 50%,\n    ${e.apocyan[500]} 100%\n  );`
        },
        I = {simple: (o = "top") => `linear-gradient(\n    to ${o},\n    ${e.dark[500]} 100%,\n    ${e.dark[900]} 100%\n  );`},
        k = {simple: (o = "top") => `linear-gradient(\n    to ${o},\n    ${e.light[100]} 100%,\n    ${e.light[300]} 100%\n  );`},
        P = {
            deception: (o = "top") => `linear-gradient(\n      to ${o},\n      ${e.god.deception.primary} 0%,\n      ${e.god.deception.secondary} 50%,\n      ${e.god.deception.tertiary} 100%\n    )`,
            war: (o = "top") => `linear-gradient(\n      to ${o},\n      ${e.god.war.primary} 0%,\n      ${e.god.war.secondary} 50%,\n      ${e.god.war.tertiary} 100%\n    )`,
            death: (o = "top") => `linear-gradient(\n      to ${o},\n      ${e.god.death.primary} 0%,\n      ${e.god.death.secondary} 50%,\n      ${e.god.death.tertiary} 100%\n    )`,
            magic: (o = "top") => `\n    linear-gradient(\n      to ${o},\n      ${e.god.magic.primary} 0%,\n      ${e.god.magic.secondary} 50%,\n      ${e.god.magic.tertiary} 100%\n    )`,
            nature: (o = "top") => `\n    linear-gradient(\n      to ${o},\n      ${e.god.nature.primary} 0%,\n      ${e.god.nature.secondary} 50%,\n      ${e.god.nature.tertiary} 100%\n    )`,
            light: (o = "top") => `\n    linear-gradient(\n      to ${o},\n      ${e.god.light.primary} 0%,\n      ${e.god.light.secondary} 50%,\n      ${e.god.light.tertiary} 100%\n    )`
        },
        $ = o => `background: ${o};\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;`;
    var E = s(49219), x = s(66974), O = s(61462)
}, 49219
:
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {
        spacingAmountMapping: () => a,
        standardTransitionDuration: () => _,
        standardTransitionEasing: () => i,
        standardBorderSize: () => t,
        draggableTitleBarHeight: () => d,
        standardHeaderHeight: () => u,
        standardHeaderHeightInCss: () => n,
        standardHeaderAlertBarHeight: () => e,
        headerBarZLevel: () => r,
        electronMenuBarZLevel: () => v,
        modalLayerZLevel: () => C,
        electronTitleBarHeight: () => w,
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
        }, _ = "150ms", i = "ease-in-out", t = "1px", d = (0, l.gridUnits)(7), u = 80, n = "80px", e = 50, r = 22, v = 23,
        C = 22, w = (0, l.gridUnits)(7), I = {small: 128, normal: 256, high: 512, xHigh: 720, best: 1024}
}, 66974
:
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {
        iconTextStyles: () => l,
        headingFont: () => a,
        simpleFont: () => _,
        textAlignRules: () => i,
        headingSizeMapping: () => t,
        simpleTextSizeMapping: () => d,
        baseSimpleTextStyles: () => u
    });
    const l = "\n  font-family: 'gu-cons';\n  font-feature-settings: 'liga' 1;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  vertical-align: middle;\n  letter-spacing: 0;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n",
        a = "\n  font-family: 'Unchained', serif;\n", _ = "\n  font-family: 'Open Sans', sans-serif;\n",
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
        u = `\n  ${_}\n  line-height: 1.1;\n`
}, 61462
:
(q, R, s) => {
    "use strict";
    s.r(R), s.d(R, {userSelect: () => l});
    const l = a => `\n    -webkit-user-select: ${a};\n    user-select: ${a};\n    pointer-events: ${a};\n  `
}, 58672
:
(q, R, s) => {
    "use strict";
    s.d(R, {x: () => a});
    var l = s(25297);

    function a({renderer: _, baseClass: i = l.J, props: t = {}}) {
        const d = class extends i {
            render() {
                return _.call(this, this)
            }
        };
        return Object.entries(t).forEach(([u, n]) => d[u] = n), d
    }
}, 77064
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(56418), i = s(86041), t = s(5284), d = s(65171), u = s(26532), n = s(65281),
        e = s(47925), r = s(91418);
    let v = class extends a.oi {
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
            ${this.responsiveSize.map(({breakpoint: w, size: I}) => a.iv`
                @media screen and (min-width: ${(0, u.asCssProp)(e.breakpointSizeMapping[w])}) {
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
            const {fillColor: w, fillGradient: I, fillGradientTarget: k} = this;
            return (0, d.updateColoringVariables)({
                component: this,
                fillColor: w,
                fillGradient: I,
                fillGradientTarget: k
            }), this.setAttribute("size", this.size), this.responsiveSize.length ? this.classList.add("overWrite") : this.classList.remove("overWrite"), a.dy`
      ${this.generateMediaQueries()}
      <slot></slot>
    `
        }
    };
    (0, l.__decorate)([(0, _.C)({type: String})], v.prototype, "size", void 0), (0, l.__decorate)([(0, _.C)({type: String})], v.prototype, "align", void 0), (0, l.__decorate)([(0, _.C)({type: String})], v.prototype, "fillColor", void 0), (0, l.__decorate)([(0, _.C)({type: String})], v.prototype, "fillGradient", void 0), (0, l.__decorate)([(0, _.C)({type: String})], v.prototype, "fillGradientTarget", void 0), (0, l.__decorate)([(0, _.C)({type: Array})], v.prototype, "responsiveSize", void 0), v = (0, l.__decorate)([(0, i.M)("gu-heading-text")], v)
}, 11015
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(86041), i = s(52102);
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
    t = (0, l.__decorate)([(0, _.M)("gu-paragraph-text")], t)
}, 52102
:
(q, R, s) => {
    "use strict";
    s.d(R, {_: () => w});
    var l = s(70655), a = s(32830), _ = s(56418), i = s(86041), t = s(5284), d = s(65281), u = s(26532), n = s(91418),
        e = s(66974), r = s(61462);
    const v = `\n  font-size: ${(0, u.asCssProp)(d.typography.simpleTextSizeMapping.tag)};\n  font-weight: 700;\n  text-transform: uppercase;\n`;
    let w = class extends a.oi {
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
    ${(0, u.asCssProp)(v)};
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
            const {breakpointSizeMapping: k} = d.breakpoints, {asCssProp: P} = t.ZB, {simpleTextSizeMapping: $} = d.typography;
            return this.responsiveKind.length ? a.dy`
          <style>
            /* DEFINE RESPONSIVE SIZING */
            ${this.responsiveKind.map(({breakpoint: E, kind: x = "small"}) => a.iv`
                @media screen and (min-width: ${P(k[E])}) {
                  :host(.overWrite[kind='${P(this.kind)}']),
                  :host(.overWrite[kind='${P(this.kind)}']) ::slotted(*) {
                    font-size: ${P($[x])} !important;
                    ${P("tag" !== x ? "bold" === this.fontWeight ? "font-weight: 700" : "font-weight: 400" : "")};
                    ${P("tag" === x ? v : "")};
                    ${P("help" === x ? "font-style: italic" : "")};
                  }
                }
              `)}
          </style>
        ` : null
        }

        render() {
            const {updateColoringVariables: k} = t.gt, {
                fillColor: P,
                fillGradient: $,
                fillGradientTarget: E,
                borderColor: x,
                fillColorHover: O
            } = this;
            return k({
                component: this,
                fillColor: P,
                fillColorHover: O,
                fillGradient: $,
                fillGradientTarget: E,
                borderColor: x
            }), this.setAttribute("kind", this.kind), this.responsiveKind.length ? this.classList.add("overWrite") : this.classList.remove("overWrite"), a.dy`
      ${this.generateMediaQueries()} ${this.text ? this.text : ""}
      <slot></slot>
    `
        }
    };
    (0, l.__decorate)([(0, _.C)()], w.prototype, "kind", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "align", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "fontStyle", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "fontWeight", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "text", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "fillColor", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "fillColorHover", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "borderColor", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "fillGradient", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "fillGradientTarget", void 0), (0, l.__decorate)([(0, _.C)()], w.prototype, "responsiveKind", void 0), w = (0, l.__decorate)([(0, i.M)("gu-simple-text")], w)
}, 43337
:
(q, R, s) => {
    "use strict";
    s.d(R, {R: () => x});
    var l = s(70655), a = s(32830), _ = s(56418), i = s(86041), t = s(5284), d = s(65171), u = s(65281), n = s(26532),
        e = s(91418), r = s(66974);
    const v = ["xx-small", "x-small", "small", "medium", "large"],
        I = {"xx-small": "10px", "x-small": "12px", small: "14px", medium: "16px", large: "20px"},
        k = {"xx-small": "18px", "x-small": "20px", small: "22px", medium: "24px", large: "28px"},
        P = {light: 100, regular: 300, "semi-bold": 500, bold: 700, "extra-bold": 900};
    var E;
    let x = E = class extends a.oi {
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
    line-height: ${(0, n.asCssProp)(k.medium)};
  }

  ${(0, n.asCssProp)(v.map(O => a.iv`
          :host([size=${(0, n.asCssProp)(O)}]),
          :host([size=${(0, n.asCssProp)(O)}]) .body-text__content {
            font-size: ${(0, n.asCssProp)(I[O])};
          }

          :host([size='${(0, n.asCssProp)(O)}]):not([plain']),
          :host([size='${(0, n.asCssProp)(O)}]):not([plain']) .body-text__content {
            line-height: ${(0, n.asCssProp)(k[O])};
          }
        `).join("\n"))}

  :host([fontStyle='italic']),
  :host([fontStyle='italic']) .body-text__content {
    font-style: italic;
  }

  ${(0, n.asCssProp)(Object.keys(P).map(O => a.iv`
          :host([fontWeight=${(0, n.asCssProp)(O)}]),
    :host([fontWeight=${(0, n.asCssProp)(O)}]) .body-text__content {
            font-weight: ${P[O]};
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
            if (E.hasColoringPropertyChanged(o)) {
                const {fillColor: m, fillGradient: y, fillGradientTarget: D} = this;
                (0, d.updateColoringVariables)({component: this, fillColor: m, fillGradient: y, fillGradientTarget: D})
            }
        }

        generateMediaQueries() {
            const {breakpointSizeMapping: o} = u.breakpoints, {asCssProp: m} = t.ZB;
            return this.responsiveSizes.length ? a.dy`
          <style>
            /* DEFINE RESPONSIVE SIZING */
            ${this.responsiveSizes.map(({breakpoint: y, size: D = "small"}) => a.iv`
                @media screen and (min-width: ${m(o[y])}) {
                  :host(.overWrite[size='${m(this.size)}']),
                  :host(.overWrite[size='${m(this.size)}']) ::slotted(*) {
                    font-size: ${m(I[D])} !important;
                  }

                  :host(.overWrite[size='${m(this.size)}']):not([plain]),
                  :host(.overWrite[size='${m(this.size)}']):not([plain]) ::slotted(*) {
                    line-height: ${m(k[D])} !important;
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
    (0, l.__decorate)([(0, _.C)({
        type: String,
        reflect: !0
    })], x.prototype, "size", void 0), (0, l.__decorate)([(0, _.C)({
        type: String,
        reflect: !0
    })], x.prototype, "fontWeight", void 0), (0, l.__decorate)([(0, _.C)({
        type: String,
        reflect: !0
    })], x.prototype, "fontStyle", void 0), (0, l.__decorate)([(0, _.C)({type: String})], x.prototype, "align", void 0), (0, l.__decorate)([(0, _.C)({type: String})], x.prototype, "fillColor", void 0), (0, l.__decorate)([(0, _.C)({type: String})], x.prototype, "fillGradient", void 0), (0, l.__decorate)([(0, _.C)({type: String})], x.prototype, "fillGradientTarget", void 0), (0, l.__decorate)([(0, _.C)({
        type: Boolean,
        reflect: !0
    })], x.prototype, "plain", void 0), (0, l.__decorate)([(0, _.C)({type: Array})], x.prototype, "responsiveSizes", void 0), x = E = (0, l.__decorate)([(0, i.M)("gu-body-text")], x)
}, 66678
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(86041), i = s(43337);
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
    t = (0, l.__decorate)([(0, _.M)("gu-paragraph")], t)
}, 263
:
(q, R, s) => {
    "use strict";
    var l = s(70655), a = s(32830), _ = s(86041), i = s(26532), t = s(65281), d = s(47925);
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
        ${this.responsiveSize.map(({breakpoint: v, topSize: C, bottomSize: w, bothSize: I}) => {
                const k = this.pickMarginValue(I, C), P = this.pickMarginValue(I, w);
                return a.iv`
            @media screen and (min-width: ${(0, i.asCssProp)(d.breakpointSizeMapping[v])}) {
              :host {
                ${(0, i.asCssProp)(k ? `--marginTop: ${k};` : "")}
                ${(0, i.asCssProp)(P ? `--marginBottom: ${P};` : "")}
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
    u = (0, l.__decorate)([(0, _.M)("gu-vertical-space")], u)
}, 4477
:
(q, R, s) => {
    "use strict";
    s.d(R, {w: () => C});
    var l = s(70655), a = s(92436), _ = s(87435), i = s(32830), t = s(86041), d = s(5284), u = s(26532), n = s(65281);
    const e = new a.do(I => {
        I.forEach(k => {
            k.target.handleResize()
        })
    }), r = new CustomEvent("onVideoEnd"), C = I => new Promise(k => {
        setTimeout(() => k(), I)
    });
    let w = class extends i.oi {
        constructor() {
            super(...arguments), this.muted = !1, this.autoPlay = !1, this.loopVideo = !1, this.showControls = !1, this.pauseOnEndFrame = !1, this.startPausedOnFirstFrame = !1, this.volume = 1, this.dimensions = {
                width: 0,
                height: 0
            }, this.hasSignalledEnd = !1, this.onVideoLoaded = () => {
                console.log("VIDEO IS LOADED (not necessarily fully buffered though)", this.videoId);
                const k = () => {
                    this.bindPlayListeners(), this.delayedEmitVideoReady(), this.setVolume()
                };
                this.startPausedOnFirstFrame ? this.gotoTimeAndPause(.02).then(() => k()) : k()
            }, this.onVideoUpdate = k => {
                const {percent: P} = k;
                this.dispatchEvent(new CustomEvent("onVideoProgress", {detail: {percent: P}})), this.pauseOnEndFrame && P >= .88 && (this.pauseVideo(), this.hasSignalledEnd || (this.hasSignalledEnd = !0, this.dispatchEvent(r)))
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

        updated(k) {
            super.updated(k), k.has("videoId") && this.videoId ? this.handleVideoIdUpdated() : k.has("volume") && this.setVolume()
        }

        disconnectedCallback() {
            e.unobserve(this), this.vimeoControl && this.vimeoControl.destroy()
        }

        handleVideoIdUpdated() {
            return (0, l.__awaiter)(this, void 0, void 0, function* () {
                if (this.vimeoControl) {
                    const k = yield this.vimeoControl.getVideoId();
                    return console.log("@@@@@@@@@@@@", k, this.videoId), this.videoId === k ? this.reInitCurrentVideo() : this.loadNewVideoId()
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
            console.log("@@@@@ LOAD NEW VIDEO ID @@@@@@"), this.unBindEventsAndReset(), this.vimeoControl.loadVideo(this.videoId).then(() => this.onVideoLoaded()).catch(k => console.log(k))
        }

        initVideo() {
            const k = {
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
            this.classList.add("hideVideo"), this.dispatchEvent(new CustomEvent("onVideoLoading")), this.vimeoControl = new _.Z(this, k), this.vimeoControl.on("loaded", this.onVideoLoaded)
        }

        setVolume() {
            return !!this.vimeoControl && (this.muted ? this.vimeoControl.setMuted(!0) : this.vimeoControl.setVolume(this.volume))
        }

        bindPlayListeners() {
            this.vimeoControl.on("ended", () => {
                this.dispatchEvent(r)
            }), this.vimeoControl.on("timeupdate", this.onVideoUpdate)
        }

        gotoTimeAndPause(k) {
            return (0, l.__awaiter)(this, void 0, void 0, function* () {
                try {
                    return console.log("gotoTimeAndPause(time)", k, this.videoId), yield this.vimeoControl.setMuted(!0), console.log("gotoTimeAndPause > this.vimeoControl.setMuted(true) resolved", this.videoId, k), yield this.vimeoControl.play(), console.log("gotoTimeAndPause > this.vimeoControl.play() resolved", this.videoId, k), d.I5.isSafari() && (yield C(350), console.log("gotoTimeAndPause > artificialDelay() resolved", this.videoId, k)), yield this.vimeoControl.pause(), console.log("gotoTimeAndPause > this.vimeoControl.pause() resolved", this.videoId, k), yield this.vimeoControl.setCurrentTime(k), console.log("gotoTimeAndPause > this.vimeoControl.setCurrentTime(time) resolved", this.videoId, k), this.setVolume(), console.log("gotoTimeAndPause > ALL STEPS resolved")
                } catch (P) {
                    console.error("gotoTimeAndPause ERROR:", P)
                }
            })
        }

        playVideo(k) {
            console.log("playVideo(time)", k);
            const P = () => {
                this.hasSignalledEnd = !1, this.vimeoControl.play()
            };
            return void 0 !== k ? this.gotoTimeAndPause(k).then(() => P()) : P()
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
    w = (0, l.__decorate)([(0, t.M)("gu-controllable-vimeo-embed")], w)
}, 57289
:
(q, R, s) => {
    "use strict";
    s.d(R, {P: () => t});
    var l = s(14135), a = s(69808), _ = s(93075), i = s(5e3);
    let t = (() => {
        class P {
        }

        return P.\u0275fac = function (E) {
            return new (E || P)
        }, P.\u0275mod = i.oAB({type: P}), P.\u0275inj = i.cJS({imports: [[a.ez, l.aw, _.u5, _.UX], _.UX]}), P
    })();
    s(73307), new i.OlP("recaptcha-service"), new i.OlP("websocket-constructor")
}, 83920
:
(q, R, s) => {
    "use strict";
    s.d(R, {_: () => _});
    var l = s(5e3), a = s(93075);
    let _ = (() => {
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
(q, R, s) => {
    "use strict";
    s.d(R, {n: () => i});
    var l = s(7625), a = s(8929), _ = s(5e3);
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
            return new (u || t)(_.Y36(_.SBq), _.Y36(_.Qsj))
        }, t.\u0275dir = _.lG2({
            type: t,
            selectors: [["gu-validation-errors", "control", ""]],
            inputs: {control: "control"}
        }), t
    })()
}, 56302
:
(q, R, s) => {
    "use strict";
    s.d(R, {X8: () => l, IU: () => t, Qo: () => n});
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
(q, R, s) => {
    "use strict";
    s.d(R, {Y: () => l, t: () => a});
    const l = 3, a = 1
}, 72224
:
(q, R, s) => {
    "use strict";
    s.d(R, {v: () => l});
    const l = 2147483647
}, 57470
:
(q, R, s) => {
    "use strict";
    s.d(R, {gv: () => _, zy: () => l, CF: () => a});
    var l = {};
    s.r(l), s.d(l, {Y: () => i});
    var a = {};
    s.r(a), s.d(a, {J: () => Le, Y: () => Ve});
    var _ = {};
    s.r(_), s.d(_, {routeContent: () => getGlobalRouteContent(je), userMenuItemsContent: () => tt});
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
    s(591), s(8929), s(36053), s(21086), s(61737), s(24850), s(2994), s(72986), s(61709), s(27221), s(73307), s(5e3), s(49002), new n.N0, s(40886), s(52909), s(67806), s(26959), s(74323), s(47760), s(18499), s(45425), s(5254), s(68896), s(56498), s(92198), s(56302), s(96727), s(11735);
    var _e = s(1025);
    const Le = {
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
                    featureFlag: _e.v.mortalJudgementEnabled
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
                    featureFlag: _e.v.referralsEnabled
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
                    featureFlag: _e.v.tokenEnabled
                },
                airdrop: {
                    shortName: "Claim",
                    path: "token/claim",
                    pageTitle: "Claim GODS token",
                    featureFlag: _e.v.claimAirdropEnabled
                },
                staking: {
                    shortName: "Staking",
                    path: "token/staking",
                    pageTitle: "Staking $GODS token",
                    featureFlag: _e.v.stakingEnabled
                }
            }
        }
    }, Ve = {
        manageWallets: {
            shortName: "Manage Wallets",
            path: "manage-wallets",
            pageTitle: "Connect a wallet to your GodsUnchained user account",
            visible: !0
        }, logOut: {shortName: "Log Out", visible: !0}
    }, je = me => ({
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
        forge: {path: "game/gu/forge", icon: "nav_forge", shortName: "forge", featureFlag: _e.v.forgeEnabled},
        openPacks: {shortName: "open packs", path: "game/gu/temple", icon: "nav_temple"},
        learn: {
            shortName: "learn",
            icon: "nav_library",
            path: "learn",
            children: {
                cards: {shortName: "cards", url: `${me.guWebsite}/${Le.learn.children.cards.path}`},
                faq: {
                    shortName: "faq",
                    url: "//support.godsunchained.com/hc/en-us/sections/1500001033441-Gods-Unchained-FAQ"
                },
                lore: {shortName: "lore", url: "//blog.godsunchained.com/category/lore"},
                blog: {shortName: "blog", url: "//blog.godsunchained.com"},
                guide: {shortName: "guide", url: "//blog.godsunchained.com/learn-to-play"},
                referrals: {shortName: "Referrals", path: "game/gu/referrals"},
                combatRecorder: {shortName: "Review game", url: "https://gufaq.com/logs"}
            }
        }
    }), tt = me => ({
        playToEarn: {
            shortName: "Play to Earn",
            path: "game/gu/play-to-earn",
            featureFlag: _e.v.playToEarnEnabled,
            visible: !0
        },
        manageWallets: {
            shortName: "Manage Wallets",
            url: `${me.guWebsite}/${Ve.manageWallets.path}`,
            pageTitle: "Connect a wallet to your GodsUnchained user account",
            visible: !0
        },
        logOut: {shortName: "Log Out", visible: !0}
    })
}, 52886
:
(q, R, s) => {
    "use strict";
    s.d(R, {Zb: () => _, nE: () => C, nJ: () => l, Xl: () => a, PE: () => w});
    var l = (() => {
        return (E = l || (l = {}))[E.DIAMOND = 1] = "DIAMOND", E[E.GOLD = 2] = "GOLD", E[E.SHADOW = 3] = "SHADOW", E[E.METEORITE = 4] = "METEORITE", E[E.PLAIN = 5] = "PLAIN", l;
        var E
    })();
    const a = {
        [l.DIAMOND]: "diamond",
        [l.GOLD]: "gold",
        [l.SHADOW]: "shadow",
        [l.METEORITE]: "meteorite",
        [l.PLAIN]: "plain"
    };

    class _ {
        constructor(x, O, o, m, y) {
            this.id = x, this.proto = O, this.quality = o, this.protoCard = m, this.status = y
        }
    }

    var C = (() => {
        return (E = C || (C = {}))[E.All = -1] = "All", E[E.Owned = 0] = "Owned", E[E.Unowned = 1] = "Unowned", E[E.Processing = 2] = "Processing", C;
        var E
    })(), w = (() => {
        return (E = w || (w = {}))[E.AscID = 0] = "AscID", E[E.DescID = 1] = "DescID", E[E.AscQuality = 2] = "AscQuality", E[E.DescQuality = 3] = "DescQuality", E[E.AscMana = 4] = "AscMana", E[E.DescMana = 5] = "DescMana", E[E.AscScarcity = 6] = "AscScarcity", E[E.AscHealth = 7] = "AscHealth", E[E.DescHealth = 8] = "DescHealth", E[E.AscAttack = 9] = "AscAttack", E[E.DescAttack = 10] = "DescAttack", E[E.AscTribe = 11] = "AscTribe", E[E.DescTribe = 12] = "DescTribe", E[E.AscRarity = 13] = "AscRarity", E[E.DescRarity = 14] = "DescRarity", E[E.AscType = 15] = "AscType", E[E.DescType = 16] = "DescType", E[E.AscGod = 17] = "AscGod", E[E.DescGod = 18] = "DescGod", E[E.AscSet = 19] = "AscSet", E[E.DescSet = 20] = "DescSet", w;
        var E
    })()
}, 28510
:
(q, R, s) => {
    "use strict";
    s.d(R, {mX: () => _.mX, Qz: () => l.Q, Zd: () => i});
    var l = s(55943), a = s(5e3), _ = s(46688);
    let i = (() => {
        class t {
        }

        return t.\u0275fac = function (u) {
            return new (u || t)
        }, t.\u0275mod = a.oAB({type: t}), t.\u0275inj = a.cJS({providers: [l.Q]}), t
    })()
}, 46688
:
(q, R, s) => {
    "use strict";
    s.d(R, {m3: () => l, mX: () => a, x0: () => _});

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

    class _ {
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
(q, R, s) => {
    "use strict";
    s.d(R, {Q: () => Pe});
    var l = s(5e3), a = s(69808), _ = s(8929), i = s(23753), t = s(7625), d = s(24850), u = s(92198), n = s(87168),
        e = (() => {
            return (z = e || (e = {}))[z.Tab = 9] = "Tab", z[z.Enter = 13] = "Enter", z[z.Escape = 27] = "Escape", z[z.Space = 32] = "Space", z[z.PageUp = 33] = "PageUp", z[z.PageDown = 34] = "PageDown", z[z.End = 35] = "End", z[z.Home = 36] = "Home", z[z.ArrowLeft = 37] = "ArrowLeft", z[z.ArrowUp = 38] = "ArrowUp", z[z.ArrowRight = 39] = "ArrowRight", z[z.ArrowDown = 40] = "ArrowDown", e;
            var z
        })();
    const r = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");

    function v(z) {
        const le = Array.from(z.querySelectorAll(r)).filter(j => -1 !== j.tabIndex);
        return [le[0], le[le.length - 1]]
    }

    var w = s(46688);

    function O(z) {
        return null != z
    }

    "undefined" != typeof Element && !Element.prototype.closest && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function (z) {
        let le = this;
        if (!document.documentElement.contains(le)) return null;
        do {
            if (le.matches(z)) return le;
            le = le.parentElement || le.parentNode
        } while (null !== le && 1 === le.nodeType);
        return null
    });
    var Q = s(73307);
    let ie = (() => {
        class z {
            constructor(j) {
                this._environment = j
            }

            ngOnInit() {
                this.modalEnviornment = this._environment.clientType
            }
        }

        return z.\u0275fac = function (j) {
            return new (j || z)(l.Y36(Q.Ho))
        }, z.\u0275cmp = l.Xpm({
            type: z,
            selectors: [["cerberus-modal-backdrop"]],
            hostVars: 2,
            hostBindings: function (j, se) {
                2 & j && l.Tol("cerberusModal__backdrop" + (se.backdropClass ? " " + se.backdropClass : ""))
            },
            inputs: {backdropClass: "backdropClass"},
            decls: 0,
            vars: 0,
            template: function (j, se) {
            },
            encapsulation: 2
        }), z
    })();
    var ue = s(2994), he = s(87545), W = s(72986), te = (() => {
        return (z = te || (te = {}))[z.BACKDROP_CLICK = 0] = "BACKDROP_CLICK", z[z.ESC = 1] = "ESC", te;
        var z
    })();
    const ae = ["dialog"], J = ["*"];
    let ye = (() => {
        class z {
            constructor(j, se, ce, _e) {
                this.environment = j, this.document = se, this.elRef = ce, this.zone = _e, this.closed$ = new _.xQ, this.backdrop = !0, this.keyboard = !0, this.defaultStylings = !0, this.dismissEvent = new l.vpe
            }

            dismiss(j) {
                this.dismissEvent.emit(j)
            }

            ngOnInit() {
                this.elWithFocus = this.document.activeElement, this.modalEnviornment = this.environment.clientType
            }

            ngAfterViewInit() {
                const {nativeElement: j} = this.elRef;
                if (this.zone.runOutsideAngular(() => {
                    (0, i.R)(j, "keydown").pipe((0, t.R)(this.closed$), (0, u.h)(ce => ce.which === e.Escape && this.keyboard)).subscribe(ce => requestAnimationFrame(() => {
                        ce.defaultPrevented || this.zone.run(() => this.dismiss(te.ESC))
                    }));
                    let se = !1;
                    (0, i.R)(this._dialogEl.nativeElement, "mousedown").pipe((0, t.R)(this.closed$), (0, ue.b)(() => se = !1), (0, he.w)(() => (0, i.R)(j, "mouseup").pipe((0, t.R)(this.closed$), (0, W.q)(1))), (0, u.h)(({target: ce}) => j === ce)).subscribe(() => {
                        se = !0
                    }), (0, i.R)(j, "click").pipe((0, t.R)(this.closed$)).subscribe(({target: ce}) => {
                        !0 === this.backdrop && j === ce && !se && this.zone.run(() => this.dismiss(te.BACKDROP_CLICK)), se = !1
                    })
                }), !j.contains(document.activeElement)) {
                    const se = j.querySelector("[ngbAutofocus]"), ce = v(j)[0];
                    (se || ce || j).focus()
                }
            }

            ngOnDestroy() {
                const j = this.document.body, se = this.elWithFocus;
                let ce;
                ce = se && se.focus && j.contains(se) ? se : j, this.zone.runOutsideAngular(() => {
                    setTimeout(() => ce.focus()), this.elWithFocus = null
                }), this.closed$.next()
            }
        }

        return z.\u0275fac = function (j) {
            return new (j || z)(l.Y36(Q.Ho), l.Y36(a.K0), l.Y36(l.SBq), l.Y36(l.R0b))
        }, z.\u0275cmp = l.Xpm({
            type: z,
            selectors: [["cerberus-modal-window"]],
            viewQuery: function (j, se) {
                if (1 & j && l.Gf(ae, 7), 2 & j) {
                    let ce;
                    l.iGM(ce = l.CRH()) && (se._dialogEl = ce.first)
                }
            },
            hostAttrs: ["role", "dialog", "tabindex", "-1"],
            hostVars: 4,
            hostBindings: function (j, se) {
                2 & j && (l.uIk("aria-modal", !0)("aria-labelledby", se.ariaLabelledBy), l.Tol("cerberusModal" + (se.windowClass ? " " + se.windowClass : "")))
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
            ngContentSelectors: J,
            decls: 4,
            vars: 4,
            consts: [["role", "document"], ["dialog", ""]],
            template: function (j, se) {
                1 & j && (l.F$t(), l.TgZ(0, "div", 0, 1)(2, "div"), l.Hsn(3), l.qZA()()), 2 & j && (l.Tol("cerberusModal__dialog" + (se.size ? " cerberus-modal-" + se.size : "") + (se.defaultStylings ? " cerberusModal__dialog--defaultStylings" : "") + (se.centered ? " cerberusModal__dialog--centered" : "") + (se.scrollable ? " cerberusModal__dialog--scrollable" : "") + (se.modalEnviornment ? " cerberusModal__dialog--" + se.modalEnviornment : "")), l.xp6(2), l.Tol("cerberusModal__content" + (se.defaultStylings ? " cerberusModal__content--defaultStylings" : "")))
            },
            styles: ['.cerberusModal__open{overflow:hidden;height:100vh;width:100vw;user-select:none;pointer-events:none}.cerberusModal__open .cerberusModal{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;user-select:auto;pointer-events:auto}.cerberusModal{position:fixed;top:0;left:0;z-index:22;width:100%;height:100%;overflow:hidden;outline:0;display:flex;justify-content:center;align-items:flex-start}.cerberusModal__dialog{position:relative;width:auto;pointer-events:none;justify-content:center;display:flex}.cerberusModal__dialog--scrollable{display:flex;max-height:calc(100% - 16px)}.cerberusModal__dialog--scrollable .cerberusModal__content{max-height:calc(100vh - 16px);overflow:hidden}.cerberusModal__dialog--scrollable .cerberusModal__header .cerberusModal__footer{flex-shrink:0}.cerberusModal__dialog--scrollable .cerberusModal__body{overflow-y:auto}.cerberusModal__dialog--defaultStylings{margin:8px}.cerberusModal__dialog--centered{display:flex;align-items:center;min-height:calc(100% - 16px);align-self:center}.cerberusModal__dialog--centered:before{display:block;height:calc(100vh - 16px);height:min-content;content:""}.cerberusModal__dialog--centered.cerberusModal__dialog--scrollable{flex-direction:column;justify-content:center;height:100%}.cerberusModal__dialog--centered.cerberusModal__dialog--scrollable .cerberusModal__content{max-height:none}.cerberusModal__dialog--centered.cerberusModal__dialog--scrollable:before{content:none}.cerberusModal__content{position:relative;flex-direction:column;display:flex;width:100%;pointer-events:auto;background-clip:padding-box;outline:0}.cerberusModal__content--defaultStylings{border:2px solid white;border:1px solid rgba(0,0,0,.2);background-color:#fff}.cerberusModal__backdrop{position:fixed;top:0;left:0;z-index:22;width:100vw;height:100vh;background-color:#000;opacity:.5}.cerberusModal__header{display:flex;align-items:flex-start;justify-content:space-between;padding:16px;border-bottom:1px solid #dee2e6}.cerberusModal__header .close{padding:16px;margin:-16px -16px -16px auto}.cerberusModal__title{margin-bottom:0;line-height:1.5}.cerberusModal__body{position:relative;flex:1 1 auto;padding:16px}.cerberusModal__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:12px;border-top:1px solid #dee2e6}.cerberusModal__footer>*{margin:4px}.cerberusModal__scrollbarMeasure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}\n', "cerberus-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}.cerberusModal__dialog--defaultStylings.cerberusModal__dialog--website{top:96px}.cerberusModal__dialog--defaultStylings.cerberusModal__dialog--desktop{top:calc(var(--vh) * 9)}\n"],
            encapsulation: 2
        }), z
    })();
    const K = () => {
    };
    let Z = (() => {
        class z {
            constructor(j) {
                this._document = j
            }

            compensate() {
                const j = this._getWidth();
                return this._isPresent(j) ? this._adjustBody(j) : K
            }

            _adjustBody(j) {
                const se = this._document.body, ce = se.style.paddingRight,
                    _e = parseFloat(window.getComputedStyle(se)["padding-right"]);
                return se.style["padding-right"] = `${_e + j}px`, () => se.style["padding-right"] = ce
            }

            _isPresent(j) {
                const se = this._document.body.getBoundingClientRect();
                return window.innerWidth - (se.left + se.right) >= j - .1 * j
            }

            _getWidth() {
                const j = this._document.createElement("div");
                j.className = "cerberusModal__scrollbarMeasure";
                const se = this._document.body;
                se.appendChild(j);
                const ce = j.getBoundingClientRect().width - j.clientWidth;
                return se.removeChild(j), ce
            }
        }

        return z.\u0275fac = function (j) {
            return new (j || z)(l.LFG(a.K0))
        }, z.\u0275prov = l.Yz7({token: z, factory: z.\u0275fac, providedIn: "root"}), z
    })(), pe = (() => {
        class z {
            constructor(j, se, ce, _e, Le, Ve) {
                this.applicationRef = j, this.injector = se, this.document = ce, this.scrollBar = _e, this.rendererFactory = Le, this.ngZone = Ve, this.activeWindowComponentHasChanged = new _.xQ, this.ariaHiddenValues = new Map, this.backdropAttributes = ["backdropClass"], this.modalRefs = [], this.windowAttributes = ["ariaLabelledBy", "backdrop", "centered", "keyboard", "scrollable", "size", "windowClass", "defaultStylings"], this.windowComponents = [], this.activeWindowComponentHasChanged.subscribe(() => {
                    if (this.windowComponents.length) {
                        const je = this.windowComponents[this.windowComponents.length - 1];
                        ((z, le, j, se = !1) => {
                            this.ngZone.runOutsideAngular(() => {
                                const ce = (0, i.R)(le, "focusin").pipe((0, t.R)(j), (0, d.U)(_e => _e.target));
                                (0, i.R)(le, "keydown").pipe((0, t.R)(j), (0, u.h)(_e => _e.which === e.Tab), (0, n.M)(ce)).subscribe(([_e, Le]) => {
                                    const [Ve, je] = v(le);
                                    (Le === Ve || Le === le) && _e.shiftKey && (je.focus(), _e.preventDefault()), Le === je && !_e.shiftKey && (Ve.focus(), _e.preventDefault())
                                }), se && (0, i.R)(le, "click").pipe((0, t.R)(j), (0, n.M)(ce), (0, d.U)(_e => _e[1])).subscribe(_e => _e.focus())
                            })
                        })(0, je.location.nativeElement, this.activeWindowComponentHasChanged), this.revertAriaHidden(), this.setAriaHidden(je.location.nativeElement)
                    }
                })
            }

            open(j, se, ce, _e) {
                const Le = _e.container instanceof HTMLElement ? _e.container : O(_e.container) ? this.document.querySelector(_e.container) : this.document.body,
                    Ve = this.rendererFactory.createRenderer(null, null), je = this.scrollBar.compensate(), tt = () => {
                        this.modalRefs.length || (Ve.removeClass(this.document.querySelector("html"), "cerberusModal__open"), this.revertAriaHidden())
                    };
                if (!Le) throw new Error(`The specified modal container "${_e.container || "body"}" was not found in the DOM.`);
                const $e = new w.mX, me = this.getContentRef(j, _e.injector || se, ce, $e, _e);
                let Me = !1 !== _e.backdrop ? this.attachBackdrop(j, Le) : null,
                    G = this.attachWindowComponent(j, Le, me), oe = new w.x0(G, me, Me, _e.beforeDismiss);
                return this.registerModalRef(oe), this.registerWindowComponent(G), oe.result.then(je, je), oe.result.then(tt, tt), $e.close = ne => {
                    oe.close(ne)
                }, $e.dismiss = ne => {
                    oe.dismiss(ne)
                }, this.applyWindowOptions(G.instance, _e), 1 === this.modalRefs.length && Ve.addClass(this.document.querySelector("html"), "cerberusModal__open"), Me && Me.instance && this.applyBackdropOptions(Me.instance, _e), oe
            }

            dismissAll(j) {
                this.modalRefs.forEach(se => se.dismiss(j))
            }

            hasOpenModals() {
                return this.modalRefs.length > 0
            }

            attachBackdrop(j, se) {
                let _e = j.resolveComponentFactory(ie).create(this.injector);
                return this.applicationRef.attachView(_e.hostView), se.appendChild(_e.location.nativeElement), _e
            }

            attachWindowComponent(j, se, ce) {
                let Le = j.resolveComponentFactory(ye).create(this.injector, ce.nodes);
                return this.applicationRef.attachView(Le.hostView), se.appendChild(Le.location.nativeElement), Le
            }

            applyWindowOptions(j, se) {
                this.windowAttributes.forEach(ce => {
                    O(se[ce]) && (j[ce] = se[ce])
                })
            }

            applyBackdropOptions(j, se) {
                this.backdropAttributes.forEach(ce => {
                    O(se[ce]) && (j[ce] = se[ce])
                })
            }

            getContentRef(j, se, ce, _e, Le) {
                return ce ? ce instanceof l.Rgc ? this.createFromTemplateRef(ce, _e) : function $(z) {
                    return "string" == typeof z
                }(ce) ? this.createFromString(ce) : this.createFromComponent(j, se, ce, _e, Le) : new w.m3([])
            }

            createFromTemplateRef(j, se) {
                const _e = j.createEmbeddedView({
                    $implicit: se, close(Le) {
                        se.close(Le)
                    }, dismiss(Le) {
                        se.dismiss(Le)
                    }
                });
                return this.applicationRef.attachView(_e), new w.m3([_e.rootNodes], _e)
            }

            createFromString(j) {
                const se = this.document.createTextNode(`${j}`);
                return new w.m3([[se]])
            }

            createFromComponent(j, se, ce, _e, Le) {
                const Ve = j.resolveComponentFactory(ce),
                    je = l.zs3.create({providers: [{provide: w.mX, useValue: _e}], parent: se}), tt = Ve.create(je),
                    $e = tt.location.nativeElement;
                return Le.scrollable && $e.classList.add("component-host-scrollable"), this.applicationRef.attachView(tt.hostView), new w.m3([[$e]], tt.hostView, tt)
            }

            setAriaHidden(j) {
                const se = j.parentElement;
                se && j !== this.document.body && (Array.from(se.children).forEach(ce => {
                    ce !== j && "SCRIPT" !== ce.nodeName && (this.ariaHiddenValues.set(ce, ce.getAttribute("aria-hidden")), ce.setAttribute("aria-hidden", "true"))
                }), this.setAriaHidden(se))
            }

            revertAriaHidden() {
                this.ariaHiddenValues.forEach((j, se) => {
                    j ? se.setAttribute("aria-hidden", j) : se.removeAttribute("aria-hidden")
                }), this.ariaHiddenValues.clear()
            }

            registerModalRef(j) {
                const se = () => {
                    const ce = this.modalRefs.indexOf(j);
                    ce > -1 && this.modalRefs.splice(ce, 1)
                };
                this.modalRefs.push(j), j.result.then(se, se)
            }

            registerWindowComponent(j) {
                this.windowComponents.push(j), this.activeWindowComponentHasChanged.next(), j.onDestroy(() => {
                    const se = this.windowComponents.indexOf(j);
                    se > -1 && (this.windowComponents.splice(se, 1), this.activeWindowComponentHasChanged.next())
                })
            }
        }

        return z.\u0275fac = function (j) {
            return new (j || z)(l.LFG(l.z2F), l.LFG(l.zs3), l.LFG(a.K0), l.LFG(Z), l.LFG(l.FYo), l.LFG(l.R0b))
        }, z.\u0275prov = l.Yz7({token: z, factory: z.\u0275fac, providedIn: "root"}), z
    })(), ve = (() => {
        class z {
            constructor() {
                this.backdrop = !0, this.keyboard = !0
            }
        }

        return z.\u0275fac = function (j) {
            return new (j || z)
        }, z.\u0275prov = l.Yz7({token: z, factory: z.\u0275fac, providedIn: "root"}), z
    })(), Pe = (() => {
        class z {
            constructor(j, se, ce, _e) {
                this.moduleCFR = j, this.injector = se, this.modalStack = ce, this.config = _e
            }

            open(j, se = {}) {
                const ce = Object.assign({}, this.config, se);
                return this.modalStack.open(this.moduleCFR, this.injector, j, ce)
            }

            dismissAll(j) {
                this.modalStack.dismissAll(j)
            }

            hasOpenModals() {
                return this.modalStack.hasOpenModals()
            }
        }

        return z.\u0275fac = function (j) {
            return new (j || z)(l.LFG(l._Vd), l.LFG(l.zs3), l.LFG(pe), l.LFG(ve))
        }, z.\u0275prov = l.Yz7({token: z, factory: z.\u0275fac, providedIn: "root"}), z
    })()
}, 51395
:
(q, R, s) => {
    "use strict";
    s.d(R, {W: () => ie, F: () => I});
    var l = s(73307), a = s(591), _ = s(21086), i = s(36053), t = s(72986), d = s(24850), u = s(2994), n = s(92198),
        e = s(61709), r = s(27221), v = s(87545), C = s(5e3), w = s(49002);
    let I = (() => {
        class ue {
            constructor(W, te, ae, J, ye) {
                this.authService = W, this.gameApi = te, this.ethService = ae, this.cardsService = J, this.filterService = ye, this._unopenedPacks$ = new a.X([]), this._currentRaffleTicketTotal$ = new a.X(0), this.dataStore = {
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
                const W = this.authService.getUserId();
                return W ? this.gameApi.get(`/user/${W}/allpacks`).pipe((0, t.q)(1), (0, d.U)(te => this.formatPacks(te, !0)), (0, d.U)(te => this.fixGodAlignments(te)), (0, u.b)(te => {
                    this.dataStore.unopenedPacks = te, this._unopenedPacks$.next([...this.dataStore.unopenedPacks])
                })) : (0, _.of)([])
            }

            fetchCurrentTotalRaffleTickets({userId: W, wallet: te}) {
                return W || te ? this.gameApi.get(`/user/${W || te}/tickets`).pipe((0, t.q)(1)).subscribe(ae => {
                    this.dataStore.currentRaffleTicketTotal = ae, this._currentRaffleTicketTotal$.next(ae)
                }) : console.error("no wallet or userId supplied")
            }

            formatPacks(W, te = !1) {
                return W.map(ae => Object.assign(Object.assign({}, ae), {
                    rarity: this.updateRarity(ae),
                    raffleTickets: this.updatePackRaffleTickets(ae),
                    requiresAuthentication: te
                }))
            }

            updateScarcityAndRarity$(W) {
                return (0, i.aj)([this.cardsService.protoCards$, this.cardsService.qualityCounts$]).pipe((0, n.h)(([te, ae]) => te && te.size > 0 && ae && ae.size > 0), (0, t.q)(1), (0, d.U)(([te, ae]) => W.map(J => Object.assign(Object.assign({}, J), {cards: this.updateScarcityAndRarity(J.cards, te, ae)}))))
            }

            fixGodAlignments(W) {
                return W.map(te => Object.assign(Object.assign({}, te), {god: "all" === te.god || "core" === te.god ? "neutral" : te.god}))
            }

            updatePackRaffleTickets(W) {
                if (W && W.extra) {
                    const te = W.extra.find(ae => "tickets" === ae.name);
                    return te ? te.value : void 0
                }
            }

            updateRarity(W) {
                return "shiny" === W.rarity ? "shiny-legendary" : W.rarity
            }

            updateScarcityAndRarity(W, te, ae) {
                const J = ["epic", "legendary", "mythic"];
                return W.map(ye => {
                    const K = te.get(ye.proto);
                    return !K || (ye.rarity = K.rarity, "core" === K.set) || ("mythic" === ye.rarity ? ye.scarcity = 1 : (J.includes(ye.rarity) || ye.quality < 5) && (ye.scarcity = this.filterService.calcScarcity(ye.proto, ye.quality, ae))), ye
                })
            }

            openPackAuthenticated$(W, te = !0) {
                const ae = this.authService.getUserId();
                return this.authService.fetchSession().pipe((0, t.q)(1), (0, e.VS)(J => this.gameApi.put(`/user/${ae}/allpacks?session=${J}`, W)), (0, u.b)(J => {
                    this.dataStore.unopenedPacks = this.dataStore.unopenedPacks.filter(K => K.pack_id !== W.pack_id), this._unopenedPacks$.next([...this.dataStore.unopenedPacks]);
                    const ye = this.packToInventoryCardsMap(W);
                    this.cardsService.addCardsToInventory(ye)
                }), (0, r.K)(J => 401 === J.status && te ? this.authService.refreshToken().pipe((0, e.VS)(ye => this.openPackAuthenticated$(W, !1))) : (0, _.of)(J)))
            }

            dummyOpenPack(W) {
                return this.dataStore.unopenedPacks = this.dataStore.unopenedPacks.filter(te => te.pack_id !== W.pack_id), this._unopenedPacks$.next([...this.dataStore.unopenedPacks]), (0, _.of)(!0)
            }

            openPackUnauthenticated$(W) {
                return this.ethService.getAccount().pipe((0, t.q)(1), (0, v.w)(te => this.gameApi.put(`/user/${te}/allpacks`, W)), (0, u.b)(te => {
                    this.dataStore.unopenedPacks = this.dataStore.unopenedPacks.filter(ae => ae.pack_id !== W.pack_id), this._unopenedPacks$.next([...this.dataStore.unopenedPacks])
                }))
            }

            openPack$(W) {
                return W.requiresAuthentication ? this.openPackAuthenticated$(W) : this.openPackUnauthenticated$(W)
            }

            packToInventoryCardsMap(W) {
                const te = {};
                return W.cards.forEach(ae => {
                    const J = {q: ae.quality, id: ae.id};
                    te[ae.proto] ? te[ae.proto].push(J) : te[ae.proto] = [J]
                }), te
            }

            generateRandomDummyPacks(W) {
                return Array.from({length: W}, (te, ae) => ({
                    cards: this.generateRandomDummyCards(5),
                    god: this.chooseRandomGod(),
                    set: "core",
                    rarity: "rare",
                    pack_id: 234423 + ae,
                    pack_source: "reward",
                    raffleTickets: Math.abs(Math.floor(5e4 * Math.random()))
                }))
            }

            generateRandomDummyCards(W) {
                return Array.from({length: W}, (te, ae) => ({
                    proto: this.generateCardProto(),
                    id: ae + 1,
                    rarity: this.chooseRandomCardRarity(),
                    quality: Math.ceil(5 * Math.random()),
                    scarcity: Math.ceil(2e3 * Math.random())
                }))
            }

            chooseRandomPackRarity() {
                const W = ["rare", "legendary"];
                return W[Math.ceil(Math.random() * W.length - 1)]
            }

            chooseRandomCardRarity() {
                const W = ["common", "rare", "epic", "legendary"];
                return W[Math.ceil(Math.random() * W.length - 1)]
            }

            chooseRandomGod() {
                const W = ["nature", "death", "nature", "war", "neutral", "deception", "light", "magic"];
                return W[Math.ceil(Math.random() * W.length - 1)]
            }

            generateCardProto() {
                const W = Math.ceil(384 * Math.random());
                return [382, 383, 384, 378, 379].includes(W) ? this.generateCardProto() : W
            }
        }

        return ue.\u0275fac = function (W) {
            return new (W || ue)(C.LFG(l.mI), C.LFG(w.Ft), C.LFG(l.ux), C.LFG(w.dK), C.LFG(w.iZ))
        }, ue.\u0275prov = C.Yz7({token: ue, factory: ue.\u0275fac, providedIn: "root"}), ue
    })();
    var k = s(40886), P = (() => {
        return (ue = P || (P = {}))[ue.RARE_GENESIS = 0] = "RARE_GENESIS", ue[ue.RARE_TRIAL = 1] = "RARE_TRIAL", ue[ue.LEGENDARY_GENESIS = 2] = "LEGENDARY_GENESIS", ue[ue.LEGENDARY_TRIAL = 3] = "LEGENDARY_TRIAL", P;
        var ue
    })(), $ = s(52909), E = s(18499), x = s(13989), O = s(45425), o = s(5254), m = s(61737), y = s(77518);
    const D = s(45861), Q = s(92916);
    let ie = (() => {
        class ue {
            constructor(W, te) {
                if (this.environment = W, this.ethService = te, this._chests$ = new a.X([]), console.log("ChestService->constructor()"), "desktop" !== this.environment.clientType) {
                    try {
                        this.setupGenesis()
                    } catch (ae) {
                        console.log("ChestService->constructor() error setting up genesis chests", ae)
                    }
                    try {
                        this.setupTrial()
                    } catch (ae) {
                        console.log("ChestService->constructor() error setting up trial chests", ae)
                    }
                    this.dataStore = {chests: this.chestData()}, this._chests$.next([...this.dataStore.chests])
                }
            }

            get chests$() {
                return this._chests$.asObservable()
            }

            setupGenesis() {
                this.RareGenesis = this.ethService.artifactsToContract(D, "0xEE85966b4974d3C6F71A2779cC3B6F53aFbc2B68"), this.LegendaryGenesis = this.ethService.artifactsToContract(D, "0x20D4Cec36528e1C4563c1BFbE3De06aBa70b22B4"), this.Vault = this.ethService.artifactsToContract(Q, Q.networks[1]), this.VaultInfura = this.ethService.infuraContract(Q, Q.networks[1]), this.LegendaryGenesisInfura = this.ethService.infuraContract(D, "0x20D4Cec36528e1C4563c1BFbE3De06aBa70b22B4")
            }

            setupTrial() {
                const W = this.environment.production ? y.np.Production : y.np.Staging,
                    te = this.environment.production ? "https://eth-mainnet.alchemyapi.io/v2/ICJe8nw_i-gl_3E6V6I942RRJ3PMs5vB" : "https://eth-ropsten.alchemyapi.io/v2/ICJe8nw_i-gl_3E6V6I942RRJ3PMs5vB",
                    ae = this.environment.production ? k.t : k.Y, J = (0, E.getGodsUnchainedAddresses)(ae, W),
                    K = ((0, E.getGodsUnchainedAddresses)(ae, W), (0, E.getGodsUnchainedAddresses)(ae, W).seasonOne.capAddress);
                if (window.ethereum) {
                    const pe = new x.Qg(window.ethereum).getSigner();
                    console.log("ChestService->setup() signer", pe), this.RareTrial = E.Chest.at(pe, J.seasonOne.rareChestAddress), console.log("ChestService->setup() RareTrial", this.RareTrial), this.LegendaryTrial = E.Chest.at(pe, J.seasonOne.legendaryChestAddress), console.log("ChestService->setup() LegendaryTrial", this.LegendaryTrial), this.S1Cap = E.S1Cap.at(pe, K), console.log("ChestService->setup() S1Cap", this.S1Cap)
                }
                const Z = new x.r6(te, ae);
                this.RareTrialAlchemy = E.Chest.at(Z, J.seasonOne.rareChestAddress), this.LegendaryTrialAlchemy = E.Chest.at(Z, J.seasonOne.legendaryChestAddress), this.S1CapAlchemy = E.S1Cap.at(Z, K)
            }

            s1CapCap() {
                return (0, o.D)(this.S1Cap.cap()).pipe((0, r.K)(W => (0, o.D)(this.S1CapAlchemy.cap())))
            }

            s1CapCurrent() {
                return (0, o.D)(this.S1Cap.current()).pipe((0, r.K)(W => (0, o.D)(this.S1CapAlchemy.current())))
            }

            s1CapProgressPercentage() {
                return (0, i.aj)([this.s1CapCurrent(), this.s1CapCap()]).pipe((0, t.q)(1), (0, d.U)(([W, te]) => {
                    try {
                        const ae = W.toNumber(), J = te.toNumber();
                        return (J - ae) / J * 100
                    } catch (ae) {
                        return 100
                    }
                }))
            }

            soldTrial(W) {
                return (0, o.D)(this.getContractTrial(W).sold()).pipe((0, r.K)(te => (0, o.D)(this.getContractTrialAlchemy(W).sold())))
            }

            capTrial(W) {
                return (0, o.D)(this.getContractTrial(W).productCap()).pipe((0, r.K)(te => (0, o.D)(this.getContractTrialAlchemy(W).productCap())))
            }

            balanceOfTrial(W, te) {
                const ae = this.getContractTrial(W);
                return (0, i.aj)([ae.balanceOf(te), (0, o.D)(ae.decimals())]).pipe((0, d.U)(([J, ye]) => {
                    const K = new O.ethers.utils.BigNumber(10).pow(ye);
                    return J.div(K)
                }))
            }

            getContractTrial(W) {
                switch (W) {
                    case P.RARE_TRIAL:
                        return this.RareTrial;
                    case P.LEGENDARY_TRIAL:
                        return this.LegendaryTrial
                }
            }

            getContractTrialAlchemy(W) {
                switch (W) {
                    case P.RARE_TRIAL:
                        return this.RareTrialAlchemy;
                    case P.LEGENDARY_TRIAL:
                        return this.LegendaryTrialAlchemy
                }
            }

            fetchChests() {
                this.ethService.getAccount().pipe((0, t.q)(1), (0, e.VS)(W => (0, i.aj)([this.balanceOf(P.RARE_GENESIS, W), this.balanceOf(P.LEGENDARY_GENESIS, W), this.balanceOfTrial(P.RARE_TRIAL, W), this.balanceOfTrial(P.LEGENDARY_TRIAL, W)]))).subscribe(([W, te, ae, J]) => {
                    console.log("fetched Num Bundles rare leg", W, te), this.dataStore.chests = this.chestData(W.toNumber(), te.toNumber(), Math.floor(ae.toNumber()), Math.floor(J.toNumber())), this._chests$.next([...this.dataStore.chests])
                })
            }

            percentageSold(W) {
                return (0, i.aj)([this.soldTrial(W), this.capTrial(W)]).pipe((0, d.U)(([te, ae]) => this.progressPercentage(te, ae)))
            }

            progressPercentage(W, te) {
                try {
                    const ae = W.toNumber(), J = te.toNumber();
                    return (J - ae) / J * 100
                } catch (ae) {
                    return 100
                }
            }

            balanceOf(W, te) {
                return this.getContract(W).pipe((0, e.VS)(ae => ae.balanceOf(te)), (0, d.U)(ae => ae), (0, u.b)(ae => {
                    console.log("ChestService->balanceOf() BALANCE", W, ae)
                }), (0, r.K)(ae => (console.log("error getting balanceOf ", W, ae), (0, _.of)($.O$.from(0)))))
            }

            open(W, te) {
                return this.getContract(W).pipe((0, e.VS)(ae => ae.open(te)), (0, u.b)(ae => {
                    this.dataStore.chests.find(ye => ye.type === W).amount -= te, this._chests$.next([...this.dataStore.chests])
                }))
            }

            cap(W) {
                return this.getContract(W).pipe((0, e.VS)(te => te.productCap()), (0, d.U)(te => te))
            }

            sold(W) {
                return this.getContract(W).pipe((0, e.VS)(te => te.sold()), (0, d.U)(te => te), (0, r.K)(te => this.soldInfura(W)))
            }

            soldInfura(W) {
                return this.getContractInfura(W).pipe((0, e.VS)(te => te.sold()), (0, d.U)(te => te))
            }

            vaultBalance() {
                return (0, o.D)(this.Vault.deployed()).pipe((0, e.VS)(W => W.total()), (0, d.U)(W => W), (0, r.K)(W => this.vaultBalanceInfura()))
            }

            vaultBalanceInfura() {
                return (0, o.D)(this.VaultInfura.deployed()).pipe((0, e.VS)(W => W.total()), (0, d.U)(W => W))
            }

            vaultCap() {
                return (0, _.of)($.O$.from("33333000000000000000000"))
            }

            getContract(W) {
                switch (W) {
                    case P.RARE_GENESIS:
                        return (0, o.D)(this.RareGenesis.deployed());
                    case P.LEGENDARY_GENESIS:
                        return (0, o.D)(this.LegendaryGenesis.deployed());
                    case P.RARE_TRIAL:
                        return (0, _.of)(this.RareTrial);
                    case P.LEGENDARY_TRIAL:
                        return (0, _.of)(this.LegendaryTrial)
                }
                return (0, m._)("invalid bundle pack type")
            }

            getContractInfura(W) {
                return W === P.LEGENDARY_GENESIS ? (0, o.D)(this.LegendaryGenesisInfura.deployed()) : (0, m._)("invalid bundle pack type")
            }

            chestData(W = 0, te = 0, ae = 0, J = 0) {
                return [{type: P.RARE_GENESIS, set: "genesis", rarity: "rare", amount: W}, {
                    type: P.LEGENDARY_GENESIS,
                    set: "genesis",
                    rarity: "legendary",
                    amount: te
                }, {type: P.RARE_TRIAL, set: "trial", rarity: "rare", amount: ae}, {
                    type: P.LEGENDARY_TRIAL,
                    set: "trial",
                    rarity: "legendary",
                    amount: J
                }]
            }
        }

        return ue.\u0275fac = function (W) {
            return new (W || ue)(C.LFG(l.Ho), C.LFG(l.ux))
        }, ue.\u0275prov = C.Yz7({token: ue, factory: ue.\u0275fac, providedIn: "root"}), ue
    })()
}, 49002
:
(q, R, s) => {
    "use strict";
    s.d(R, {
        jt: () => ue,
        yD: () => he.y,
        QF: () => ve,
        f1: () => _e,
        dK: () => Le.d,
        tX: () => Ve,
        fN: () => je,
        ai: () => tt.a,
        iZ: () => me,
        vU: () => tt.v,
        TJ: () => oe,
        pH: () => ne,
        Of: () => W,
        Ft: () => G.F,
        n2: () => pe,
        _q: () => He._,
        LE: () => ce.L,
        fY: () => Qe.f,
        C_: () => xt,
        xd: () => bt,
        $c: () => mt,
        cM: () => vt,
        $: () => Ee.$
    }), s(78271);
    var a = s(21086), _ = s(52886), i = s(77518);
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
            quality: _.nJ.SHADOW,
            owner: "1124932",
            rarity: "rare",
            set: "core",
            name: "Dryder Sailweaver"
        }, {
            id: 1688182,
            proto: 1e3,
            quality: _.nJ.SHADOW,
            owner: "1124932",
            rarity: "rare",
            set: "core",
            name: "Dryder Sailweaver"
        }],
        target_assets: [{
            id: 0,
            proto: 1e3,
            quality: _.nJ.METEORITE,
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
    var $ = s(85111), E = s(69808), x = s(5e3), O = s(73307), m = s(60870);
    let ue = (() => {
        class T {
            constructor(c, f, L, X) {
                this.deviceDetectorService = c, this.environment = f, this.authService = L, this.storage = X, this.brand = "godsunchained", this.appVersion = "0.13.3", this.initAnalyticsProperties(), this.initDeviceProperties(), this.initSessionProperties(), this.initUserProperties()
            }

            initAnalyticsProperties() {
                this.appName = "website" === this.environment.clientType ? "com.immutable.guweb" : "com.immutable.gudesktop", this.appPlatform = this.environment.clientType, "desktop" === this.environment.clientType && (this.branch = this.storage.get(["game", "1", "branch"]) || "beta")
            }

            initDeviceProperties() {
                const f = this.getDeviceId();
                this.deviceProperties = {
                    device_id: f && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(f) ? f : s(66926)(),
                    os_name: this.deviceDetectorService.os,
                    os_version: this.deviceDetectorService.os_version,
                    app_platform: window.navigator.platform
                }, this.storage.set(["device_id"], f)
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
                } catch (f) {
                    console.error(f)
                }
            }

            postScreenEvent(c, f, L, X, xe, de) {
                const Gt = this.buildEvent("Screen", `${c}${f}${L}_${X}`, this.isUserSignedIn ? `${this.userId}` : `${de}`, xe);
                this.sendEvent(Gt)
            }

            postControlEvent(c, f, L, X, xe, de, Be, dt) {
                const Jt = this.buildEvent("Control", `${c}${f}${L}_${X}${xe}_${de}`, this.isUserSignedIn ? `${this.userId}` : `${dt}`, Be);
                this.sendEvent(Jt)
            }

            postFlowEvent(c, f, L, X) {
                const Be = this.buildEvent("Flow", `_${c}_${f}`, this.isUserSignedIn ? `${this.userId}` : `${X}`, L);
                this.sendEvent(Be)
            }

            buildEvent(c, f, L, X) {
                return {
                    appBrand: this.brand,
                    appName: this.appName,
                    appPlatform: this.appPlatform,
                    appVersion: this.appVersion,
                    deviceProperties: this.deviceProperties,
                    eventProperties: X,
                    eventName: f,
                    eventType: c,
                    sessionProperties: this.sessionProperties,
                    userId: L,
                    userProperties: this.userProperties,
                    realm: this.branch
                }
            }

            postEvent(c, f, L, X) {
                const de = this.buildEvent(c, f, this.isUserSignedIn ? `${this.userId}` : `${X}`, L);
                this.sendEvent(de)
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(m.x0), x.LFG(O.Ho), x.LFG(O.mI), x.LFG(O.qy))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })();
    var he = s(51256);
    let W = (() => {
        class T {
            constructor() {
            }

            setCurrentProvider(c) {
                try {
                    ga("set", "dimension1", c)
                } catch (f) {
                    console.log(f)
                }
            }

            setAccount(c) {
                try {
                    ga("set", "dimension2", c)
                } catch (f) {
                    console.log(f)
                }
            }

            setReferrer(c) {
                try {
                    ga("set", "dimension3", c)
                } catch (f) {
                    console.log(f)
                }
            }

            setClientId(c) {
                try {
                    ga("set", "dimension4", c)
                } catch (f) {
                    console.log(f)
                }
            }

            setSessionId(c) {
                try {
                    ga("set", "dimension5", c)
                } catch (f) {
                    console.log(f)
                }
            }

            setUserId(c) {
                try {
                    ga("set", "dimension6", c)
                } catch (f) {
                    console.log(f)
                }
            }

            setHitTimestamp(c) {
                try {
                    ga("set", "dimension7", c)
                } catch (f) {
                    console.log(f)
                }
            }

            setAbVersion(c) {
                try {
                    ga("set", "dimension8", c)
                } catch (f) {
                    console.log(f)
                }
            }

            triggerOutboundLinkEvent(c, f) {
                try {
                    let L = "";
                    L = L.split("?")[0], ga("send", "event", "Outbound Link", "click", L, c)
                } catch (L) {
                    console.log("could not track ga", L)
                }
            }

            triggerButtonClickEvent(c, f) {
                try {
                    let L = "";
                    L = L.split("?")[0], ga("send", "event", "Button", "click", L, c)
                } catch (L) {
                    console.log("could not track ga", L)
                }
            }

            triggerPageDeferLoadEvent(c, f) {
                try {
                    let L = "";
                    L = L.split("?")[0], ga("send", "event", "Page", "defer load", L, c)
                } catch (L) {
                    console.log("could not track ga", L)
                }
            }

            sendEvent(c, f, L, X, xe) {
                try {
                    console.log(`GA Event: send, event, ${c}, ${f}, ${L}, ${X}, ${xe}`), ga("send", "event", c, f, L, X, xe)
                } catch (de) {
                    console.log("Error tracking GA", de)
                }
            }

            buyPackBanneCountry() {
                this.sendEvent("buy", "pack", "banned_country")
            }

            buyPackType(c) {
                this.sendEvent("buy", "pack_type", c)
            }

            buyPackTypeNumber(c, f, L) {
                this.sendEvent("buy", `${c}_number`, f, L)
            }

            buyPurchase(c, f) {
                this.sendEvent("buy", "purchase", c, f)
            }

            buyConfirmation(c, f) {
                this.sendEvent("buy", "confirmation", c, f)
            }

            buyStatus(c) {
                this.sendEvent("buy", "status", c)
            }

            templeOpenPacks() {
                this.sendEvent("temple", "open_packs")
            }

            templePurchase(c, f) {
                this.sendEvent("temple", "purchase", c, f)
            }

            templeShareDiscord() {
                this.sendEvent("temple", "share", "discord")
            }

            inventoryInventoryType(c) {
                this.sendEvent("inventory", "inventory_type", c)
            }

            inventory(c, f, L) {
                this.sendEvent("inventory", c, f, L)
            }

            inventorySearchStart() {
                this.sendEvent("inventory", "search_start")
            }

            inventorySearchEnd(c, f) {
                this.sendEvent("inventory", "search_end", c, f)
            }

            inventoryPageUp(c, f) {
                this.sendEvent("inventory", "page_up", c, f)
            }

            inventoryPageDown(c, f) {
                this.sendEvent("inventory", "page_down", c, f)
            }

            inventoryPageSelect(c, f) {
                this.sendEvent("inventory", "page_select", c, f)
            }

            inventoryViewCard(c, f) {
                this.sendEvent("inventory", "view_card", c + "", f)
            }

            inventoryViewCollectable(c, f) {
                this.sendEvent("inventory", "view_collectable", c, f)
            }

            navigateHeader(c) {
                this.sendEvent("navigate", "header", c)
            }

            navigate(c, f) {
                this.sendEvent("navigate", c, f)
            }

            outbound(c, f) {
                this.sendEvent("outbound", c, f)
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

            walletConnect(c, f) {
                this.sendEvent("wallet", "connect", c, f)
            }

            videoPlay(c) {
                this.sendEvent("video", "play", c)
            }

            videoPause(c, f) {
                this.sendEvent("video", "pause", c, f)
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

            videoShare(c, f) {
                this.sendEvent("video", `share_${c}`, f)
            }

            apolloRegisterBegin(c) {
                this.sendEvent("apollo_register", `${c}_onboard`)
            }

            apolloRegisterFieldStart(c) {
                this.sendEvent("apollo_register", `${c}_start`)
            }

            apolloRegisterFieldComplete(c, f) {
                this.sendEvent("apollo_register", `${c}_complete`, void 0, f)
            }

            apolloRegisterStagesTime(c, f) {
                this.sendEvent("apollo_register", `${c}_time`, void 0, f)
            }

            apolloRegisterComplete() {
                this.sendEvent("apollo_register", "register", "register_complete")
            }

            apolloLoginComplete() {
                this.sendEvent("apollo_register", "login", "login_complete")
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })(), te = (() => {
        class T {
            constructor(c) {
                this.window = c
            }

            canActivate(c, f) {
                return c.data.externalUrl ? this.window.location.href = c.data.externalUrl : console.warn("*** externalUrl param not provided inside data for redirection"), !1
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(Window))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })();
    var ae = s(61737), J = s(27221);
    let ye = (() => {
        class T {
            constructor() {
            }

            autoRetryApiOnFail(c, f = 1) {
                return c.pipe((0, J.K)(L => f > 0 && L.status >= 400 && L.status < 600 ? this.autoRetryApiOnFail(c, f - 1) : (0, ae._)(L)))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })();
    var K = s(46461), Z = s(591);
    let pe = (() => {
        class T {
            constructor() {
                this._storage = window.localStorage
            }

            set(c, f) {
                return this._storage.setItem(c.join("."), f)
            }

            get(c) {
                return this._storage.getItem(c.join("."))
            }

            delete(c) {
                return this._storage.removeItem(c.join("."))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })(), ve = (() => {
        class T {
            constructor(c) {
                this.storage = c, this.arenaCancel = this.loadHowl("desktop/Launcher_Arena_Cancel.ogg"), this.arenaClickStart = this.loadHowl("desktop/Launcher_Arena_Click_Start.ogg"), this.arenaCycleMode = this.loadHowl("desktop/Launcher_Arena_CycleMode.ogg"), this.arenaHoverStart = this.loadHowl("desktop/Launcher_Arena_Hover_Start.ogg"), this.returnToLauncher = this.loadHowl("desktop/Launcher_Return.ogg"), this.loginToLauncher = this.loadHowl("desktop/Launcher_Login.ogg"), this.clickItemV1 = this.loadHowl("desktop/Launcher_Click_Item_V1.ogg"), this.clickItemV2 = this.loadHowl("desktop/Launcher_Click_Item_V2.ogg"), this.clickMediumV1 = this.loadHowl("desktop/Launcher_Click_Medium_V1.ogg"), this.clickMediumV2 = this.loadHowl("desktop/Launcher_Click_Medium_V2.ogg"), this.clickTinyV1 = this.loadHowl("desktop/Launcher_Click_Tiny_V1.ogg"), this.clickTinyV2 = this.loadHowl("desktop/Launcher_Click_Tiny_V2.ogg"), this.hoverHex = this.loadHowl("desktop/Launcher_Hover_Hexagon.ogg"), this.hoverItem = this.loadHowl("desktop/Launcher_Hover_Item.ogg"), this.transitionWorkshop = this.loadHowl("desktop/Launcher_Transition_Workshop.ogg"), this.workshopCustomize = this.loadHowl("desktop/Launcher_Workshop_Customize.ogg"), this.workshopDelete = this.loadHowl("desktop/Launcher_Workshop_Delete.ogg"), this.forgeAmbience = this.loadHowl("desktop/Launcher_Forge_Ambience.ogg", {loop: !0}), this.forgeHeatingUp = this.loadHowl("desktop/Launcher_Forge_HeatingUp.ogg"), this.forgeSelectCard = this.loadHowl("desktop/Launcher_Forge_SelectCard.ogg"), this.ForgeFuseAnvil1 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_1.ogg"), this.ForgeFuseAnvil2 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_2.ogg"), this.ForgeFuseAnvil3 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_3.ogg"), this.ForgeFuseAnvil4 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_4.ogg"), this.ForgeFuseAnvil5 = this.loadHowl("desktop/Launcher_Forge_Fuse_Anvil_5.ogg"), this.ForgeFuseShimmer = this.loadHowl("desktop/Launcher_Forge_Fuse_Shimmer.ogg"), this.ForgeFuseContinue = this.loadHowl("desktop/Launcher_Forge_Fuse_Continue.ogg"), this._currentVolume$ = new Z.X(null), this.setInitialVolume()
            }

            get currentVolume$() {
                return this._currentVolume$.asObservable()
            }

            setGlobalVolume(c) {
                K.Howler.volume(c), this._currentVolume$.next(c), this.storage.set(["gu-audioVolume"], c)
            }

            setInitialVolume() {
                this.initialVolume = parseFloat(this.storage.get(["gu-audioVolume"])), isNaN(this.initialVolume) && (this.initialVolume = .9), this.setGlobalVolume(this.initialVolume)
            }

            loadHowl(c, f) {
                return f || (f = {}), f.src = `/assets/audio/${c}`, new K.Howl(f)
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(pe))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })();
    var Pe = s(8929), z = s(24850), le = s(7625), j = s(87545), se = s(40520), ce = s(77535);
    let _e = (() => {
        class T {
            constructor(c, f) {
                this.http = c, this.destroyed$ = new Pe.xQ, this.apolloEndpoint$ = f.loadConfigurations().pipe((0, z.U)(L => L.legacyAuthHost), (0, le.R)(this.destroyed$))
            }

            get(c, f, L) {
                return this.apolloEndpoint$.pipe((0, j.w)(X => this.http.get(X + c, {headers: L, params: f})))
            }

            put(c, f, L, X) {
                return this.apolloEndpoint$.pipe((0, j.w)(xe => this.http.put(xe + c, f, {headers: X, params: L})))
            }

            post(c, f, L) {
                return this.apolloEndpoint$.pipe((0, j.w)(X => this.http.post(X + c, f, {headers: L})))
            }

            delete(c) {
                return this.apolloEndpoint$.pipe((0, j.w)(f => this.http.delete(f + c)))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(se.eN), x.LFG(ce.L))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })();
    var Le = s(69439);
    let Ve = (() => {
        class T {
            constructor() {
            }

            copyText(c) {
                const f = document.createElement("input");
                document.body.appendChild(f), f.value = c, f.select(), document.execCommand("copy"), document.body.removeChild(f)
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac, providedIn: "root"}), T
    })(), je = (() => {
        class T {
            constructor(c, f) {
                this.client = c, this.destroyed$ = new Pe.xQ, this.endpoint$ = f.loadConfigurations().pipe((0, z.U)(L => L.deckHost), (0, le.R)(this.destroyed$))
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            get(c, f) {
                return this.endpoint$.pipe((0, j.w)(L => this.client.get(`${L}/${c}`, f)))
            }

            put(c, f, L) {
                return this.endpoint$.pipe((0, j.w)(X => this.client.put(`${X}/${c}`, f, L)))
            }

            post(c, f, L) {
                return this.endpoint$.pipe((0, j.w)(X => this.client.post(`${X}/${c}`, f, L)))
            }

            delete(c, f) {
                return this.endpoint$.pipe((0, j.w)(L => this.client.delete(`${L}/${c}`, f)))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(se.eN), x.LFG(ce.L))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac, providedIn: "root"}), T
    })();
    var tt = s(1025), $e = s(61709);

    class me {
        constructor(U) {
            this.cardsService = U, this.typeOrder = ["spell", "creature", "weapon"], this.godOrder = ["death", "deception", "light", "magic", "nature", "war", "neutral"], this.rarityOrder = ["legendary", "epic", "rare", "common", "mythic"]
        }

        static displayable(...U) {
            return U.map(c => {
                const f = "All" === c ? "" : c.toLowerCase();
                return {display: c, value: f}
            })
        }

        static enumerated(...U) {
            return U.map((c, f) => ({display: c, value: f - 1}))
        }

        static standardProtoFilters(U, c, f) {
            return {mana: -1, rarity: "", tribe: "", god: "", name: "", sort: c, ownership: U, type: "", set: f}
        }

        static standardCardFilters(U, c, f, L = "") {
            return {
                mana: -1,
                rarity: "",
                tribe: "",
                god: L,
                name: "",
                sort: c,
                ownership: U,
                type: "",
                set: f,
                quality: ""
            }
        }

        calcScarcity(U, c, f) {
            let L = 1;
            try {
                const X = f.get(U)[c];
                L = void 0 === X ? 1 : Number(X)
            } catch (X) {
                return
            }
            return L
        }

        getSort(U, c) {
            switch (U) {
                case _.PE.AscID:
                    return (f, L) => f.proto - L.proto;
                case _.PE.DescID:
                    return (f, L) => L.proto - f.proto;
                case _.PE.AscQuality:
                    return (f, L) => f.quality - L.quality;
                case _.PE.DescQuality:
                    return (f, L) => L.quality - f.quality;
                case _.PE.AscMana:
                    return (f, L) => Number(f.protoCard.mana) - Number(L.protoCard.mana);
                case _.PE.DescMana:
                    return (f, L) => Number(L.protoCard.mana) - Number(f.protoCard.mana);
                case _.PE.AscHealth:
                    return (f, L) => Number(f.protoCard.health) - Number(L.protoCard.health);
                case _.PE.DescHealth:
                    return (f, L) => Number(L.protoCard.health) - Number(f.protoCard.health);
                case _.PE.AscAttack:
                    return (f, L) => Number(f.protoCard.attack) - Number(L.protoCard.attack);
                case _.PE.DescAttack:
                    return (f, L) => Number(L.protoCard.attack) - Number(f.protoCard.attack);
                case _.PE.AscTribe:
                    return (f, L) => f.protoCard.tribe < L.protoCard.tribe ? -1 : 1;
                case _.PE.DescTribe:
                    return (f, L) => f.protoCard.tribe > L.protoCard.tribe ? -1 : 1;
                case _.PE.AscRarity:
                    return (f, L) => this.getRarityId(f.rarity) < this.getRarityId(L.rarity) ? -1 : 1;
                case _.PE.DescRarity:
                    return (f, L) => this.getRarityId(f.rarity) > this.getRarityId(L.rarity) ? -1 : 1;
                case _.PE.AscScarcity:
                    return (f, L) => {
                        if (!c) throw new Error("qualityCounts required for scarcity search");
                        const de = this.calcScarcity(f.proto, f.quality, c) - this.calcScarcity(L.proto, L.quality, c);
                        return 0 === de ? L.quality - f.quality : de
                    }
            }
            return (f, L) => 0
        }

        sortLegacy(U, c, f) {
            return U ? U.sort(this.getSort(c, f)) : []
        }

        sort(U, c, f) {
            return U ? U.sort(this.tiebreak(this.getSort(c, f))) : []
        }

        tiebreak(U) {
            return (c, f) => {
                const L = U(c, f);
                return 0 === L ? this.tiebreakProtoType(c.protoCard, f.protoCard) : L
            }
        }

        getSortProtos(U, c) {
            switch (U) {
                case _.PE.AscID:
                    return (f, L) => f.proto - L.proto;
                case _.PE.DescID:
                    return (f, L) => L.proto - f.proto;
                case _.PE.AscQuality:
                    return (f, L) => f.quality - L.quality;
                case _.PE.DescQuality:
                    return (f, L) => L.quality - f.quality;
                case _.PE.AscMana:
                    return (f, L) => Number(f.mana) - Number(L.mana);
                case _.PE.DescMana:
                    return (f, L) => Number(L.mana) - Number(f.mana);
                case _.PE.AscHealth:
                    return (f, L) => Number(f.health) - Number(L.health);
                case _.PE.DescHealth:
                    return (f, L) => Number(L.health) - Number(f.health);
                case _.PE.AscAttack:
                    return (f, L) => Number(f.attack) - Number(L.attack);
                case _.PE.DescAttack:
                    return (f, L) => Number(L.attack) - Number(f.attack);
                case _.PE.AscTribe:
                    return (f, L) => f.tribe < L.tribe ? -1 : 1;
                case _.PE.DescTribe:
                    return (f, L) => f.tribe > L.tribe ? -1 : 1;
                case _.PE.AscRarity:
                    return (f, L) => this.getRarityId(f.rarity) < this.getRarityId(L.rarity) ? -1 : 1;
                case _.PE.DescRarity:
                    return (f, L) => this.getRarityId(f.rarity) > this.getRarityId(L.rarity) ? -1 : 1;
                case _.PE.AscType:
                    return (f, L) => f.type < L.type ? -1 : 1;
                case _.PE.DescType:
                    return (f, L) => f.type > L.type ? -1 : 1;
                case _.PE.AscGod:
                    return (f, L) => f.god < L.god ? -1 : 1;
                case _.PE.DescGod:
                    return (f, L) => f.god > L.god ? -1 : 1;
                case _.PE.AscSet:
                    return (f, L) => f.set < L.set ? -1 : 1;
                case _.PE.DescSet:
                    return (f, L) => f.set > L.set ? -1 : 1
            }
            return (f, L) => 0
        }

        sortProtos(U, c, f) {
            return U ? U.sort(this.tiebreakProto(this.getSortProtos(c, f))) : []
        }

        tiebreakProto(U) {
            return (c, f) => {
                const L = U(c, f);
                return 0 === L ? this.tiebreakProtoType(c, f) : L
            }
        }

        tiebreakProtoType(U, c) {
            const f = this.typeOrder.indexOf(U.type) - this.typeOrder.indexOf(c.type);
            return 0 === f ? this.tiebreakProtoGod(U, c) : f
        }

        tiebreakProtoGod(U, c) {
            const f = this.godOrder.indexOf(U.god) - this.godOrder.indexOf(c.god);
            return 0 === f ? this.tiebreakProtoRarity(U, c) : f
        }

        tiebreakProtoRarity(U, c) {
            const f = this.rarityOrder.indexOf(U.rarity) - this.rarityOrder.indexOf(c.rarity);
            return 0 === f ? this.tiebreakProtoHealth(U, c) : f
        }

        tiebreakProtoHealth(U, c) {
            const f = Number(U.health) - Number(c.health);
            return 0 === f ? this.tiebreakProtoAttack(U, c) : f
        }

        tiebreakProtoAttack(U, c) {
            const f = Number(U.attack) - Number(c.attack);
            return 0 === f ? this.tiebreakProtoName(U, c) : f
        }

        tiebreakProtoName(U, c) {
            return U.name < c.name ? -1 : 1
        }

        filter(U, c) {
            return U ? U.filter(f => this.matches(c, f)) : []
        }

        matches(U, c) {
            if (null == U) return !0;
            if (null == c || "" !== U.rarity && U.rarity !== c.rarity || "" !== U.set && U.set !== c.set || "" !== U.god && U.god !== c.god || "" !== U.tribe && ("none" === U.tribe && c.tribe || "none" !== U.tribe && U.tribe !== c.tribe)) return !1;
            if (-1 != +U.mana) if (10 == +U.mana) {
                if (c.mana < 10) return !1
            } else if (+U.mana !== c.mana) return !1;
            if (U.name.length > 0) {
                const f = U.name.toLowerCase().trim();
                if (-1 === c.name.toLowerCase().indexOf(f)) return !1
            }
            return !0
        }

        isMythic(U) {
            return 378 === U || 379 === U || 383 === U
        }

        getRarityId(U) {
            switch (U) {
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

        cardsMatch(U, c, f) {
            return null == U || !(this.filterQualities(f.qualities, U.quality) || +U.ownership === _.nE.Owned && !f.owned || +U.ownership === _.nE.Unowned && f.owned || +U.ownership === _.nE.Processing && "escrow" !== f.status || !this.matches(U, c))
        }

        filterCards(U, c) {
            return null == U ? (0, a.of)(null) : this.cardsService.protoCards$.pipe((0, $e.VS)(f => {
                const L = U.filter(X => this.cardsMatch(c, f.get(X.proto), X));
                return (0, a.of)(L)
            }))
        }

        filterQualities(U, c) {
            const f = this.getQualityByName(c);
            return -1 !== f && 0 === U[f]
        }

        getQualityByName(U) {
            switch (U.toLowerCase()) {
                case"plain":
                    return _.nJ.PLAIN;
                case"meteorite":
                    return _.nJ.METEORITE;
                case"shadow":
                    return _.nJ.SHADOW;
                case"gold":
                    return _.nJ.GOLD;
                case"diamond":
                    return _.nJ.DIAMOND;
                default:
                    return -1
            }
        }
    }

    me.rarityOptions = me.displayable("All", "Common", "Rare", "Epic", "Legendary", "Mythic"), me.qualityOptions = me.displayable("All", "Plain", "Meteorite", "Shadow", "Gold", "Diamond"), me.godOptions = me.displayable("All", "Neutral", "Nature", "War", "Death", "Light", "Magic", "Deception"), me.manaOptions = me.enumerated("All", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"), me.tribeOptions = me.displayable("All", "None", "Viking", "Amazon", "Anubian", "Aether", "Nether", "Atlantean", "Olympian", "Dragon", "Guild", "Mystic", "Structure", "Wild"), me.ownershipOptions = me.enumerated("All", "Owned", "Not Owned", "Processing"), me.setOptions = me.displayable("All", "Genesis", "Core", "Etherbots", "Promo", "Mythic", "Trial", "Welcome", "Order", "Mortal"), me.defaultFilters = [{
        name: "Ownership",
        options: me.ownershipOptions
    }, {name: "Quality", options: me.qualityOptions}, {name: "Rarity", options: me.rarityOptions}, {
        name: "Tribe",
        options: me.tribeOptions
    }, {name: "Mana", options: me.manaOptions}, {name: "God", options: me.godOptions}, {
        name: "Set",
        options: me.setOptions
    }], me.\u0275fac = function (U) {
        return new (U || me)(x.LFG(Le.d))
    }, me.\u0275prov = x.Yz7({token: me, factory: me.\u0275fac, providedIn: "root"});
    var Me = s(72986), G = s(43834);
    let oe = (() => {
        class T {
            constructor(c, f) {
                this.gameApi = c, this.authService = f, this.unsubscribe = new Pe.xQ, this.dataStore = {fluxInfo: null}, this._fluxInfo$ = new Z.X(null)
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            get fluxInfo$() {
                return this._fluxInfo$.asObservable()
            }

            fetchFluxInfo() {
                const c = this.authService.getUserId();
                c ? this.gameApi.get(`/user/${c}/flux`).pipe((0, Me.q)(1)).subscribe(f => {
                    this.emitFluxInfo(f)
                }, f => {
                    this.emitFluxInfo()
                }) : this.emitFluxInfo()
            }

            emitFluxInfo(c = {flux_available: 0, flux_spent: 0, locked: !1}) {
                this.dataStore.fluxInfo = c, this._fluxInfo$.next(Object.assign({}, this.dataStore.fluxInfo))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(G.F), x.LFG(O.mI))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })(), ne = (() => {
        class T {
            constructor(c, f) {
                this.moduleConfigService = c, this.http = f, this.moduleConfig$ = this.moduleConfigService.loadConfigurations()
            }

            getFusingRequest(c) {
                return this.moduleConfig$.pipe((0, j.w)(({fusingHost: f}) => this.http.get(`${f}/forge`, {params: {request_id: c}})))
            }

            getFusingLatestsRequests(c) {
                return this.moduleConfig$.pipe((0, j.w)(({fusingHost: f}) => this.http.get(`${f}/forge/latest`, {params: {user_id: c}})))
            }

            fusingValidator(c) {
                return this.moduleConfig$.pipe((0, j.w)(({fusingHost: f}) => this.http.post(`${f}/forge/validation`, c)))
            }

            fusingInitiator(c) {
                return this.moduleConfig$.pipe((0, j.w)(({fusingHost: f}) => this.http.post(`${f}/forge`, c)))
            }

            fusingTokensPaid(c) {
                return this.moduleConfig$.pipe((0, j.w)(({fusingHost: f}) => this.http.post(`${f}/forge/paid`, c)))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(ce.L), x.LFG(se.eN))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })();
    var Ee = s(90868);
    let lt = (() => {
        class T {
            constructor(c, f, L) {
                this.httpClient = c, this.moduleConfigService = f, this.tokenRefreshService = L
            }

            get(c, f, L) {
                return this.moduleConfigService.loadConfigurations().pipe((0, j.w)(X => this.tokenRefreshService.autoRefreshToken(this.httpClient.get(`${X.guAuthHost}${c}`, {
                    headers: L,
                    params: f
                }))))
            }

            put(c, f, L, X) {
                return this.moduleConfigService.loadConfigurations().pipe((0, j.w)(xe => this.tokenRefreshService.autoRefreshToken(this.httpClient.put(`${xe.guAuthHost}${c}`, f, {
                    headers: X,
                    params: L
                }))))
            }

            post(c, f, L) {
                return this.moduleConfigService.loadConfigurations().pipe((0, j.w)(X => this.tokenRefreshService.autoRefreshToken(this.httpClient.post(`${X.guAuthHost}${c}`, f, {headers: L}))))
            }

            delete(c) {
                return this.moduleConfigService.loadConfigurations().pipe((0, j.w)(f => this.tokenRefreshService.autoRefreshToken(this.httpClient.delete(`${f.guAuthHost}${c}`))))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(se.eN), x.LFG(ce.L), x.LFG(Ee.$))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac, providedIn: "root"}), T
    })(), Ie = (() => {
        class T {
            constructor(c, f, L) {
                this.http = c, this.dds = f, this.authService = L, this._downloadUrl$ = new Z.X(null)
            }

            get downloadUrl$() {
                return this._downloadUrl$.asObservable()
            }

            fetchLauncherURL() {
                return this.fetchLauncherURLAsync().pipe((0, Me.q)(1)).subscribe(c => {
                    this.downloadUrl = c, this._downloadUrl$.next(c)
                })
            }

            fetchLauncherURLAsync() {
                const c = this.dds.getDeviceInfo(), f = this.authService.getUserId();
                return "mac" !== c.os.toLowerCase() && "windows" !== c.os.toLowerCase() ? (0, ae._)("linux") : this.http.get(`https://util.apollo.gg/launcher?os=${c.os}&user_id=${f}`)
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(se.eN), x.LFG(m.x0), x.LFG(O.mI))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })();
    var He = s(29840), Qe = s(78812);
    let xt = (() => {
        class T {
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
                return this.authHost.post(`/account/${c}/code/referral`, {}).pipe((0, j.w)(f => this.getReferralCode(c)), (0, J.K)(f => {
                    if ("already created" === f.error.error) return this.getReferralCode(c)
                }))
            }

            updatePayoutAddress(c, f) {
                return this.authHost.put(`/account/${c}/code/referral`, {referral_payout_address: f})
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(_e))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac, providedIn: "root"}), T
    })();
    var ht = s(19444);
    let mt = (() => {
        class T {
            constructor(c, f, L) {
                this.environment = c, this.authService = f, this.moduleConfigService = L, this.RETRY_SECONDS = 4e3, this.PING_PONG_INTERVAL_DURATION = 6e3, this.MAX_UNANSWERED_PING_COUNT = 2, this.unsubscribe = new Pe.xQ, this.connections = {}, this._connectionEstablished$ = new Pe.xQ, this.moduleConfigService.loadConfigurations().subscribe(X => {
                    this.socketEndpoints = {
                        marketplaceCart: xe => `${X.marketplaceSocketBaseURL}/${xe}/socket`,
                        chatAndFriends: xe => `${X.chatAndFriendsSocketBaseUrl}/${xe}/chat`,
                        forge: xe => `${X.marketplaceSocketBaseURL}/${xe}/socket`
                    }
                })
            }

            get connectionEstablished$() {
                return this._connectionEstablished$.asObservable()
            }

            connect({socketName: c, url: f}) {
                return new Promise((L, X) => {
                    console.log("SOCKET CONNECTING: ", c), this.connections[c] = this.createConnection(f), this.connectListeners(c, L, X)
                })
            }

            getOpenedConnection(c) {
                if (this.connections[c] && this.connections[c].isAlive) return this.connections[c]
            }

            ngOnDestroy() {
                this.disconnectAllSockets(), this.unsubscribe.next(), this.unsubscribe.complete()
            }

            onConnect(c, f) {
                console.log("SOCKET CONNECTED:", f), this.connections[f].isAlive = !0, this.checkToStartPingPongInterval(), this.killReconnectTimer(f)
            }

            onClose(c, f) {
                console.log("SOCKET CLOSED:", f, c), this.connections[f].isAlive = !1, c.wasClean || this.reconnectSocket(f)
            }

            onError(c, f) {
                console.log("SOCKET ERRORED:", f, c), this.connections[f].isAlive = !1, console.log("tokenIsExpired: ", this.authService.tokenIsExpired()), this.authService.tokenIsExpired() ? this.authService.refreshToken().pipe((0, Me.q)(1)).subscribe(() => this.reconnectSocket(f)) : this.reconnectSocket(f)
            }

            onMessage(c, f) {
                const L = JSON.parse(c.data);
                console.log("socket onMessage!", f, L), "HEARTBEAT_PONG" === L.text ? this.onPongMessage(f, L) : this.connections[f].messages.next(L)
            }

            connectListeners(c, f, L) {
                const X = this.connections[c];
                X.eventHandlers.open = xe => {
                    this.onConnect(xe, c), f && f(X.messages)
                }, X.eventHandlers.error = xe => {
                    this.onError(xe, c), L && L(X.messages)
                }, X.eventHandlers.close = xe => {
                    this.onClose(xe, c)
                }, X.eventHandlers.message = xe => {
                    this.onMessage(xe, c)
                }, X.socket.addEventListener("open", X.eventHandlers.open), X.socket.addEventListener("close", X.eventHandlers.close), X.socket.addEventListener("error", X.eventHandlers.error), X.socket.addEventListener("message", X.eventHandlers.message)
            }

            disconnectListeners(c) {
                const f = this.connections[c];
                f.socket.removeEventListener("open", f.eventHandlers.open), f.socket.removeEventListener("close", f.eventHandlers.close), f.socket.removeEventListener("error", f.eventHandlers.error), f.socket.removeEventListener("message", f.eventHandlers.message)
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
                0 === Object.keys(this.connections).length ? this.killPingPongInterval() : Object.keys(this.connections).find(f => this.connections[f].isAlive) || this.killPingPongInterval()
            }

            createConnection(c) {
                const f = "desktop" === this.environment.clientType ? window.bridge.authAccess : this.authService.getAuthToken().access;
                return {
                    url: c,
                    messages: new Pe.xQ,
                    socket: new WebSocket(`${c}?token=${f}`),
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
                const f = this.connections[c], L = () => {
                    const X = this.createConnection(f.url);
                    this.connections[c].isAlive = X.isAlive, this.connections[c].pingList = X.pingList, this.connections[c].socket = X.socket, this.connections[c].url = X.url, this.connections[c].eventHandlers = X.eventHandlers, this.connectListeners(c)
                };
                switch (this.killReconnectTimer(c), this.checkToKillPingPongInterval(), f.socket.readyState) {
                    case WebSocket.CONNECTING:
                    case WebSocket.CLOSING:
                        console.log("SKIPPING RECONNECT TIMER:", c, "connection ready state:", f.socket.readyState);
                        break;
                    case WebSocket.OPEN:
                        f.disconnectPromise = this.disconnect({
                            socketName: c,
                            cleanup: !1
                        }), f.reconnectTimer = window.setTimeout(() => {
                            f.disconnectPromise.then(() => {
                                console.log("SOCKET DISCONNECTED, NOW RECONNECTING SOCKET"), L()
                            })
                        }, this.RETRY_SECONDS);
                        break;
                    case WebSocket.CLOSED:
                        f.reconnectTimer = window.setTimeout(() => {
                            L()
                        }, this.RETRY_SECONDS)
                }
            }

            sendMessage(c, f) {
                this.connections[c] && this.connections[c].socket.send(JSON.stringify(f))
            }

            sendPing(c) {
                console.log("SOCKET PING:", c);
                const f = {text: "HEARTBEAT_PING", user_id: this.authService.getUserId(), msg_id: (0, ht.v4)()};
                this.connections[c].pingList.push(f), this.sendMessage(c, f)
            }

            onPongMessage(c, f) {
                console.log("SOCKET PONG:", c);
                const L = this.connections[c], X = L.pingList.findIndex(xe => xe.msg_id === f.msg_id);
                -1 !== X && L.pingList.splice(X, 1)
            }

            checkPingList(c) {
                this.connections[c].pingList.length >= this.MAX_UNANSWERED_PING_COUNT ? this.reconnectSocket(c) : this.sendPing(c)
            }

            disconnect({socketName: c, cleanup: f = !0}) {
                const L = this.connections[c], X = () => {
                    L && this.disconnectListeners(c), f && delete this.connections[c]
                };
                return new Promise(xe => {
                    if (!L) return this.checkToKillPingPongInterval(), X(), xe();
                    this.killReconnectTimer(c), L.isAlive ? (L.socket.addEventListener("close", () => {
                        X(), this.checkToKillPingPongInterval(), xe()
                    }), L.socket.close()) : (console.log("SOCKET IS IN A TRANSITION STATE, BUT TRY AND CLOSE ANYWAY"), L.socket && L.socket.close(), X(), xe())
                })
            }

            disconnectAllSockets() {
                return this.killAllReconnectTimers(), Promise.all(Object.keys(this.connections).map(c => this.disconnect({socketName: c})))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(O.Ho), x.LFG(O.mI), x.LFG(ce.L))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac, providedIn: "root"}), T
    })();
    var st = s(2994);
    let vt = (() => {
        class T {
            constructor(c, f, L, X) {
                this.gameApiService = c, this.authService = f, this.cardsService = L, this.environment = X, this.storeItems = [], this.dataStore = {userStarsTotal: 0}, this._userStarTotal$ = new Z.X(0), console.log("@cerberus/StarService constructor")
            }

            get userStarTotal$() {
                return this._userStarTotal$.asObservable()
            }

            fetchUserStarsRewards(c) {
                return this.gameApiService.get(`/game/${c}/rewards/${this.authService.getUserId()}`)
            }

            fetchUserStarsTotal() {
                const c = this.authService.getUserId();
                !c || this.gameApiService.get(`/user/${c}/stars`).pipe((0, Me.q)(1)).subscribe(f => {
                    this.dataStore.userStarsTotal = f, this._userStarTotal$.next(this.dataStore.userStarsTotal)
                }, f => {
                    this.dataStore.userStarsTotal = 0, this._userStarTotal$.next(this.dataStore.userStarsTotal)
                })
            }

            purchaseItem$(c, f, L = !0) {
                return this.authService.fetchSession().pipe((0, Me.q)(1), (0, $e.VS)(X => this.gameApiService.post(`/user/${this.authService.getUserId()}/shop?session=${X}`, {asset_group: c})), (0, J.K)(X => 401 === X.status && L ? this.authService.refreshToken().pipe((0, $e.VS)(xe => this.purchaseItem$(c, f, !1))) : (0, a.of)(X)), (0, st.b)(X => {
                    (!X || !X.error) && this.handlePurchaseSuccess()
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
                const L = this.storeItems.filter(X => this.isCurrentItem(X)).indexOf(c);
                return Object.assign(Object.assign({}, c), {screen_order: L})
            }

            isCurrentItem(c) {
                const f = (new Date).getTime();
                return c.end_timestamp_epoch > f && c.start_timestamp_epoch < f
            }

            fetchStarStoreItems$() {
                return this.gameApiService.get(`/user/${this.authService.getUserId()}/shop`).pipe((0, Me.q)(1), (0, z.U)(c => c.map(f => this.addEpochTimestamp(f))), (0, st.b)(c => this.storeItems = c))
            }
        }

        return T.\u0275fac = function (c) {
            return new (c || T)(x.LFG(G.F), x.LFG(O.mI), x.LFG(Le.d), x.LFG(O.Ho))
        }, T.\u0275prov = x.Yz7({token: T, factory: T.\u0275fac}), T
    })();
    const ke = (T, U) => () => Promise.all([T.loadConfigurations().toPromise(), U.waitUntilReady()]);
    let bt = (() => {
        class T {
        }

        return T.\u0275fac = function (c) {
            return new (c || T)
        }, T.\u0275mod = x.oAB({type: T}), T.\u0275inj = x.cJS({
            providers: [ce.L, {
                provide: O.Hd,
                deps: [O.Ho],
                useFactory: U => (0, $.j2)(U.launchDarklyKey, {anonymous: !0, key: "anonymous"})
            }, {
                provide: x.ip1,
                useFactory: ke,
                multi: !0,
                deps: [ce.L, O.Hd]
            }, ue, ye, _e, tt.a, oe, ne, W, lt, Ie, pe, He._, mt, vt, Ee.$, te], imports: [[E.ez]]
        }), T
    })()
}, 51256
:
(q, R, s) => {
    "use strict";
    s.d(R, {y: () => n});
    var l = s(40520), a = s(59633), _ = s(73307);
    const i = "website";
    var d = s(5e3), u = s(60870);
    let n = (() => {
        class e {
            constructor(v, C, w, I) {
                this.deviceDetectorService = v, this.httpClient = C, this.environment = w, this.storage = I, this.headers = new l.WM({"X-Chaff": this.environment.production ? "" : "test"});
                const k = this.getDeviceId();
                this.brand = "gods_unchained", this.device_id = k && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(k) ? k : s(66926)(), this.event_id = 0, this.native = this.environment.clientType !== i, this.platform = window.navigator.platform, this.producer = this.deviceDetectorService.isDesktop() ? "desktop" : "mobile", this.os_name = this.deviceDetectorService.os, this.os_version = this.deviceDetectorService.os_version, this.service = this.environment.clientType === i ? i : "launcher", this.session_id = this.generateSessionId(), this.storage.set(["device_id"], this.device_id)
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

            postEvent(v, C) {
                const I = new a.Event({
                    brand: this.brand,
                    device_id: this.device_id,
                    event_id: this.event_id = this.event_id + 1,
                    event_properties: v,
                    native: this.native,
                    os_name: this.os_name,
                    os_version: this.os_version,
                    platform: this.platform,
                    producer: this.producer,
                    service: this.service,
                    session_id: this.session_id,
                    user_id: parseInt(this.getUserId(), 10),
                    user_properties: C
                }).toObject();
                return Object.assign(I.event_properties, this.getUTM()), this.httpClient.post(this.environment.analyticsHost, JSON.stringify(I), {headers: this.headers}).toPromise()
            }
        }

        return e.\u0275fac = function (v) {
            return new (v || e)(d.LFG(u.x0), d.LFG(l.eN), d.LFG(_.Ho), d.LFG(_.qy))
        }, e.\u0275prov = d.Yz7({token: e, factory: e.\u0275fac, providedIn: "root"}), e
    })()
}, 69439
:
(q, R, s) => {
    "use strict";
    s.d(R, {d: () => x});
    var l = s(8929), a = s(591), _ = s(36053), i = s(7625), t = s(92198), d = s(75613), u = s(24850), n = s(87545),
        e = s(72986), r = s(2994), v = s(27221), C = s(73307), w = s(52886), I = s(1025), k = s(5e3), P = s(43834),
        $ = s(29840), E = s(90868);
    let x = (() => {
        class O {
            constructor(m, y, D, Q, ie, ue) {
                this.environment = m, this.authService = y, this.gameApiService = D, this.marketplaceApiService = Q, this.tokenRefreshService = ie, this.featureFlagsService = ue, this.unsubscribe = new l.xQ, this.dataStore = {
                    protoCards: new Map,
                    inventory: {},
                    inventoryCards: [],
                    qualityCounts: new Map,
                    newInventoryCardCount: 0
                }, this._protoCards = new a.X(new Map), this._inventory = new a.X({}), this._qualityCounts = new a.X(new Map), this._inventoryCards = new a.X([]), this._newInventoryCardCount = new a.X(0), this.watchForLogout()
            }

            watchForLogout() {
                "desktop" === this.environment.clientType && this.authService.account$.pipe((0, i.R)(this.unsubscribe), (0, t.h)(m => null === m)).subscribe(m => {
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

            getProtoCard(m) {
                return this.protoCards$.pipe((0, d.sE)(y => y.has(m)), (0, u.U)(y => y.get(m)))
            }

            fetchProtoCardsApi() {
                const m = this.authService.getUserId();
                return this.authService.fetchSession().pipe((0, n.w)(y => this.gameApiService.get(`/user/${m || 1}/proto?format=flat${y ? `&session=${y}` : ""}`)), (0, e.q)(1), (0, u.U)(y => this.dictionaryToMap(y)), (0, u.U)(y => (y.forEach((D, Q) => {
                    D.proto = Q
                }), y)))
            }

            getProtoCards$() {
                return this.tokenRefreshService.autoRefreshToken(this.fetchProtoCardsApi())
            }

            fetchProtoCards() {
                this.getProtoCards$().subscribe(m => {
                    this.handleProtoCardsSuccess(m)
                })
            }

            handleProtoCardsSuccess(m) {
                this.dataStore.protoCards = m, this._protoCards.next(Object.assign({}, this.dataStore).protoCards)
            }

            fetchInventory() {
                const m = this.authService.getUserId();
                return this.fetchInventoryCardsMap(m).pipe((0, e.q)(1), (0, r.b)(y => {
                    this.dataStore.inventory = y, this._inventory.next(Object.assign({}, this.dataStore).inventory)
                })).subscribe()
            }

            addCardsToInventory(m) {
                let y = 0;
                Object.entries(m).forEach(([D, Q]) => {
                    if (this.dataStore.inventory[D]) {
                        const ie = Q.filter(ue => !this.dataStore.inventory[D].some(he => he.id === ue.id));
                        this.dataStore.inventory[D] = [...this.dataStore.inventory[D], ...ie], y += ie.length
                    } else this.dataStore.inventory[D] = Q, y += Q.length
                }), this._inventory.next(Object.assign({}, this.dataStore.inventory)), this.dataStore.newInventoryCardCount = y, this._newInventoryCardCount.next(y)
            }

            fetchQualityCount() {
                return this.gameApiService.get("/quality_count").pipe((0, e.q)(1), (0, r.b)(m => {
                    this.dataStore.qualityCounts = this.dictionaryToMap(m), this._qualityCounts.next(Object.assign({}, this.dataStore).qualityCounts)
                }), (0, v.K)(m => m)).subscribe()
            }

            loadInventoryCards() {
                return (0, _.aj)([this.protoCards$, this.inventory$]).pipe((0, r.b)(([m, y]) => {
                    this.dataStore.inventoryCards = this.convertToCards(m, y), this._inventoryCards.next(Object.assign({}, this.dataStore).inventoryCards)
                }))
            }

            convertToCards(m, y) {
                const D = [];
                return m.forEach((Q, ie) => {
                    if (y[ie]) for (const ue of y[ie]) {
                        const he = new w.Zb(ue.id, ie, ue.q, Q, ue.status);
                        D.push(he)
                    }
                }), D
            }

            forgeUpdate(m, y, D) {
                this.forgeRemoveIds(m, y), this._inventory.next(Object.assign({}, this.dataStore.inventory)), this.dataStore.newInventoryCardCount = 1, this._newInventoryCardCount.next(1)
            }

            forgeRemoveIds(m, y) {
                this.dataStore.inventory[y] = this.dataStore.inventory[y].filter(D => !m.some(Q => D.id === Q))
            }

            setNewInventoryCardCount(m) {
                this.dataStore.newInventoryCardCount = m, this._newInventoryCardCount.next(m)
            }

            dictionaryToMap(m) {
                return Object.entries(m).map(([y, D]) => ({
                    key: y,
                    val: D
                })).reduce((y, D) => y.set(Number(D.key), D.val), new Map)
            }

            fetchInventoryCardsMapV2(m, y) {
                const D = y ? `&owner=${y}` : "";
                return this.marketplaceApiService.get(`/v2/asset?type=card${D}${D ? "" : `&user_id=${m}`}`)
            }

            inventoryCardsMapV2ToV1(m) {
                const y = {};
                return Object.entries(m.protos).forEach(([D, Q]) => {
                    const ie = Q.assets.map(ue => ({id: ue.id, q: ue.properties.quality, status: ue.minting_status}));
                    y[D] = ie
                }), y
            }

            fetchInventoryCardsMap(m) {
                return this.gameApiService.get(`/user/${m}/card?caller=${"desktop" === this.environment.clientType ? "client" : "website"}`)
            }

            checkToRefreshInventory() {
                this.featureFlagsService.get(I.v.refetchInventoryEnabled).pipe((0, e.q)(1)).subscribe(m => {
                    m && this.fetchInventory()
                })
            }
        }

        return O.\u0275fac = function (m) {
            return new (m || O)(k.LFG(C.Ho), k.LFG(C.mI), k.LFG(P.F), k.LFG($._), k.LFG(E.$), k.LFG(I.a))
        }, O.\u0275prov = k.Yz7({token: O, factory: O.\u0275fac, providedIn: "root"}), O
    })()
}, 1025
:
(q, R, s) => {
    "use strict";
    s.d(R, {v: () => u, a: () => e});
    var l = s(36053), a = s(21086), _ = s(591), i = s(87545), t = s(73307), d = s(5e3), u = (() => {
        return (r = u || (u = {})).buyPagePaused = "buy-page-paused", r.claimAirdropButtonEnabled = "temp-claim-airdrop-button-enabled", r.claimAirdropEnabled = "temp-claim-airdrop-enabled", r.claimFluxEnabled = "temp-claim-flux-enabled", r.coinbasePaused = "temp-coinbase-paused", r.controllableBannerData = "controllable-banner-data", r.deckCodesEnabled = "temp-deck-codes-enabled", r.defaultWalletEnabled = "temp-default-wallet-enabled", r.forgeEnabled = "temp-forge-enabled", r.fusingNextStepEnabled = "temp-fusing-next-step-enabled", r.godsTokenBlocked = "gods-token-blocked", r.outageBannerEnabled = "temp-outage-banner-enabled", r.rankedWeekendCancelledBannerEnabled = "temp-ranked-weekend-cancelled-banner-enabled", r.referralsEnabled = "temp-referrals-enabled", r.refetchInventoryEnabled = "refetch-inventory-enabled", r.showControllableBanner = "show-controllable-banner", r.spgpEnabled = "temp-spgp-enabled", r.spgpPaused = "temp-spgp-paused", r.stakingEnabled = "temp-staking-enabled", r.tokenEnabled = "temp-token-enabled", r.x2BuyPageEnabled = "temp-x-2-buy-page-enabled", r.noWalletWarningRankedGame = "temp-no-wallet-warning-ranked-game", r.playToEarnEnabled = "temp-play-to-earn-enabled", r.buyPageRevampEnabled = "buy-page-revamp-enabled", r.weekendRankedEnabled = "temp-weekend-ranked-claim-enabled", r.imxIframeModalEnabled = "imx-iframe-modal-enabled", r.newDeckServiceEnabled = "temp-new-deck-service-enabled", r.mortalJudgementEnabled = "mortal-judgement-enabled", r.moonPayEnabled = "moon-pay-enabled", r.buyPageMortalJudgementEnabled = "buy-page-mortal-judgement-enabled", u;
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
        [u.buyPageRevampEnabled]: !1,
        [u.weekendRankedEnabled]: !1,
        [u.imxIframeModalEnabled]: !1,
        [u.newDeckServiceEnabled]: !1,
        [u.mortalJudgementEnabled]: !1,
        [u.moonPayEnabled]: !1,
        [u.buyPageMortalJudgementEnabled]: !1
    });
    let e = (() => {
        class r {
            constructor(C, w) {
                this.ldClient = C, this.environment = w, this.flags = {}, this.flagChange = {}, this.flags = Object.assign({}, n), this.ldClient.on("change", I => {
                    for (const k in I) this.set(k, I[k].current)
                }), this.ldClient.waitUntilReady().then(() => {
                    const I = this.ldClient.allFlags();
                    for (const k in I) this.set(k, I[k])
                })
            }

            getMany(C) {
                const w = [];
                return C.forEach(I => {
                    w.push(this.get(I))
                }), (0, l.aj)(w).pipe((0, i.w)(I => {
                    const k = {};
                    return C.forEach((P, $) => {
                        k[P] = I[$]
                    }), (0, a.of)(k)
                }))
            }

            get(C) {
                return this.flagChange[C] = this.flagChange[C] || new _.X(this.flags[C]), this.flagChange[C].asObservable()
            }

            setContext(C) {
                this.ldClient.identify({
                    key: !0 === C.anonymous ? "anonymous" : C.userID,
                    email: C.email,
                    name: C.name,
                    anonymous: C.anonymous,
                    country: C.country,
                    custom: {clientType: this.environment.clientType}
                })
            }

            set(C, w) {
                this.flags[C] = w, this.flagChange[C] && this.flagChange[C].next(w)
            }
        }

        return r.\u0275fac = function (C) {
            return new (C || r)(d.LFG(t.Hd), d.LFG(t.Ho))
        }, r.\u0275prov = d.Yz7({token: r, factory: r.\u0275fac}), r
    })()
}, 43834
:
(q, R, s) => {
    "use strict";
    s.d(R, {F: () => n});
    var l = s(8929), a = s(24850), _ = s(7625), i = s(87545), t = s(5e3), d = s(40520), u = s(77535);
    let n = (() => {
        class e {
            constructor(v, C) {
                this.http = v, this.moduleConfigService = C, this.destroyed$ = new l.xQ, this.gameEndpoint$ = this.moduleConfigService.loadConfigurations().pipe((0, a.U)(w => w.legacyGameHost), (0, _.R)(this.destroyed$))
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            get(v, C) {
                return this.gameEndpoint$.pipe((0, i.w)(w => this.http.get(w + v, C)))
            }

            put(v, C) {
                return this.gameEndpoint$.pipe((0, i.w)(w => this.http.put(w + v, C)))
            }

            post(v, C) {
                return this.gameEndpoint$.pipe((0, i.w)(w => this.http.post(w + v, C)))
            }

            delete(v) {
                return this.gameEndpoint$.pipe((0, i.w)(C => this.http.delete(C + v)))
            }
        }

        return e.\u0275fac = function (v) {
            return new (v || e)(t.LFG(d.eN), t.LFG(u.L))
        }, e.\u0275prov = t.Yz7({token: e, factory: e.\u0275fac, providedIn: "root"}), e
    })()
}, 29840
:
(q, R, s) => {
    "use strict";
    s.d(R, {_: () => n});
    var l = s(8929), a = s(24850), _ = s(7625), i = s(87545), t = s(5e3), d = s(40520), u = s(77535);
    let n = (() => {
        class e {
            constructor(v, C) {
                this.http = v, this.moduleConfigService = C, this.destroyed$ = new l.xQ, this.marketplaceEndpoint$ = this.moduleConfigService.loadConfigurations().pipe((0, a.U)(w => w.legacyMarketplaceHost), (0, _.R)(this.destroyed$))
            }

            ngOnDestroy() {
                this.destroyed$.next(), this.destroyed$.complete()
            }

            get(v, C) {
                return this.marketplaceEndpoint$.pipe((0, i.w)(w => this.http.get(`${w}${v}`, C)))
            }

            put(v, C) {
                return this.marketplaceEndpoint$.pipe((0, i.w)(w => this.http.put(`${w}${v}`, C)))
            }

            post(v, C) {
                return this.marketplaceEndpoint$.pipe((0, i.w)(w => this.http.post(`${w}${v}`, C)))
            }

            delete(v) {
                return this.marketplaceEndpoint$.pipe((0, i.w)(C => this.http.delete(`${C}${v}`)))
            }
        }

        return e.\u0275fac = function (v) {
            return new (v || e)(t.LFG(d.eN), t.LFG(u.L))
        }, e.\u0275prov = t.Yz7({token: e, factory: e.\u0275fac}), e
    })()
}, 77535
:
(q, R, s) => {
    "use strict";
    s.d(R, {L: () => d});
    var l = s(2994), a = s(5154), _ = s(73307), i = s(5e3), t = s(40520);
    let d = (() => {
        class u {
            constructor(e, r, v) {
                this.http = e, this.environment = r, this.storageService = v, this.configURL = this.environment.appConfig, "desktop" === this.environment.clientType && this.useDevApis() && (this.configURL = this.environment.appConfigDev)
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
            return new (e || u)(i.LFG(t.eN), i.LFG(_.Ho), i.LFG(_.qy))
        }, u.\u0275prov = i.Yz7({token: u, factory: u.\u0275fac}), u
    })()
}, 78812
:
(q, R, s) => {
    "use strict";
    s.d(R, {f: () => t});
    var l = s(8929), a = s(591), _ = s(49219), i = s(5e3);
    let t = (() => {
        class d {
            constructor() {
                this.dataStore = {
                    navigationItems: null,
                    userMenuItems: null,
                    userEthAccount: null,
                    activeHeaderAlertBar: null,
                    headerAreaHeight: _.standardHeaderHeight
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
(q, R, s) => {
    "use strict";
    s.d(R, {$: () => u});
    var l = s(61737), a = s(27221), _ = s(72986), i = s(61709), t = s(73307), d = s(5e3);
    let u = (() => {
        class n {
            constructor(r) {
                this.authService = r
            }

            autoRefreshToken(r, v = 1) {
                return r.pipe((0, a.K)(C => 401 === C.status && v > 0 ? this.authService.refreshToken().pipe((0, _.q)(1), (0, i.zg)(() => this.autoRefreshToken(r, v - 1))) : (0, l._)(C)))
            }
        }

        return n.\u0275fac = function (r) {
            return new (r || n)(d.LFG(t.mI))
        }, n.\u0275prov = d.Yz7({token: n, factory: n.\u0275fac}), n
    })()
}, 77518
:
(q, R, s) => {
    "use strict";
    s.d(R, {np: () => d, Og: () => i, oS: () => t, PW: () => _});
    const _ = ["diamond", "gold", "shadow", "meteorite", "plain"];
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
(q, R, s) => {
    "use strict";
    s.d(R, {I: () => n});
    var l = s(67876), a = s(5e3), _ = s(28510), i = s(69808), t = s(87745);

    function d(e, r) {
        if (1 & e && (a.TgZ(0, "gu-vertical-space", 7), a._UZ(1, "gu-icon", 8), a.qZA()), 2 & e) {
            const v = a.oxw();
            a.xp6(1), a.Q6J("fillColor", v.iconFillColor)("iconLigature", v.iconLigature)
        }
    }

    function u(e, r) {
        if (1 & e) {
            const v = a.EpF();
            a.ynx(0), a.TgZ(1, "gu-secondary-hex-button", 9), a.NdJ("click", function () {
                return a.CHM(v), a.oxw().ctaClick()
            }), a.qZA(), a.BQk()
        }
        if (2 & e) {
            const v = a.oxw();
            a.xp6(1), a.Q6J("text", v.ctaText)
        }
    }

    let n = (() => {
        class e {
            constructor(v) {
                this.activeModal = v, this.onCtaClick = l.Z
            }

            ctaClick() {
                this.onCtaClick(), this.activeModal.close()
            }
        }

        return e.\u0275fac = function (v) {
            return new (v || e)(a.Y36(_.mX))
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
            consts: [["goldBorder", "top"], ["top", "4x-large", 4, "ngIf"], ["top", "large"], ["align", "center", "kind", "large", "fontWeight", "bold", "fillColor", "colors.light.100", 1, "heading"], ["align", "center", "kind", "large", "fillColor", "colors.light.100", 1, "text", 3, "innerHTML"], ["top", "2x-large", "bottom", "4x-large"], [4, "ngIf"], ["top", "4x-large"], [1, "alertIcon", 3, "fillColor", "iconLigature"], ["size", "large", 1, "cta", 3, "text", "click"]],
            template: function (v, C) {
                1 & v && (a._UZ(0, "gu-modal-background", 0), a.YNc(1, d, 2, 2, "gu-vertical-space", 1), a.TgZ(2, "gu-vertical-space", 2)(3, "gu-paragraph-text", 3), a._uU(4), a.qZA()(), a.TgZ(5, "gu-vertical-space", 2), a._UZ(6, "gu-paragraph-text", 4), a.ALo(7, "safe"), a.qZA(), a.TgZ(8, "gu-vertical-space", 5), a.YNc(9, u, 2, 1, "ng-container", 6), a.qZA()), 2 & v && (a.xp6(1), a.Q6J("ngIf", C.iconLigature), a.xp6(3), a.hij(" ", C.title, " "), a.xp6(2), a.Q6J("innerHTML", a.xi3(7, 4, C.text, "html"), a.oJD), a.xp6(3), a.Q6J("ngIf", C.ctaText))
            },
            directives: [i.O5],
            pipes: [t.y],
            styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:640px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.alertIcon[_ngcontent-%COMP%]{font-size:80px}.heading[_ngcontent-%COMP%]{text-transform:uppercase}.text[_ngcontent-%COMP%]{user-select:text}"]
        }), e
    })()
}, 53161
:
(q, R, s) => {
    "use strict";
    s.d(R, {j: () => a});
    var l = s(5e3);
    let a = (() => {
        class _ {
        }

        return _.\u0275fac = function (t) {
            return new (t || _)
        }, _.\u0275mod = l.oAB({type: _}), _.\u0275inj = l.cJS({}), _
    })()
}, 39765
:
(q, R, s) => {
    "use strict";
    s.d(R, {w: () => d});
    var l = s(8929), a = s(7625), _ = s(24850), i = s(73307), t = s(5e3);
    let d = (() => {
        class u {
            constructor(e, r, v) {
                this.templateRef = e, this.viewContainer = r, this.featureFlagsService = v, this.unsubscribe = new l.xQ
            }

            set featureFlagIf(e) {
                this.featureFlagsService.get(e).pipe((0, a.R)(this.unsubscribe), (0, _.U)(r => !!r)).subscribe(r => {
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
(q, R, s) => {
    "use strict";
    s.d(R, {M: () => x}), s(89534);
    var a = s(70655), _ = s(32830), i = s(56418), t = s(38872), d = s(86041), u = s(80102), n = s(26532), e = s(65281);
    let r = class extends _.oi {
        constructor() {
            super(...arguments), this.type = "none", this.promise = new Promise(o => {
                this.finished = o
            })
        }

        static get styles() {
            return _.iv`
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
            const m = {modal: this, closed: this.promise};
            "modalOpened" === o && (m.close = () => this.close()), this.dispatchEvent(new CustomEvent(o, {
                detail: m,
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
                info: _.YP`<path d="M53.4917 55.817C52.4717 55.613 51.8087 55.4218 51.5027 55.2433C51.0947 55.0138 50.8907 54.797 50.8907 54.593V39.5H49.125H46.875C46.875 39.5 44.316 39.4235 43.5 39.5L43.4702 41.3203C44.3117 41.4478 44.8217 41.5498 45.0002 41.6263C45.3317 41.6518 45.6122 41.8175 45.8417 42.1235C45.9692 42.3275 46.033 42.6462 46.033 43.0798V54.593C46.033 54.848 45.829 55.0648 45.421 55.2433C44.9365 55.4473 44.2862 55.6385 43.4702 55.817V57.5H53.4917V55.817ZM51.235 32.408C51.235 32.051 51.184 31.7578 51.082 31.5283C50.98 31.2988 50.776 31.082 50.47 30.878C50.2405 30.725 49.96 30.6103 49.6285 30.5337C49.297 30.4573 48.94 30.4063 48.5575 30.3807C48.0475 30.3552 47.6267 30.4062 47.2952 30.5337C47.0147 30.6357 46.6705 30.8398 46.2625 31.1458C45.9055 31.5028 45.6887 31.7833 45.6122 31.9872C45.4847 32.3442 45.3955 32.714 45.3445 33.0965C45.319 33.4025 45.3955 33.7085 45.574 34.0145C45.7015 34.244 45.9055 34.4608 46.186 34.6648C46.4665 34.8688 46.7597 34.9963 47.0657 35.0473C47.4737 35.1237 47.8052 35.1492 48.0602 35.1237C48.5192 35.1237 48.9272 35.06 49.2842 34.9325C49.6667 34.805 50.011 34.6265 50.317 34.397C50.6485 34.142 50.8907 33.8615 51.0437 33.5555C51.1712 33.275 51.235 32.8925 51.235 32.408Z" fill="#EBC98B"></path>`,
                error: _.YP`<path fill-rule="evenodd" clip-rule="evenodd" d="M46.375 49.4999L43 31.4999H52L48.625 49.4999H46.375ZM45.1212 57.5037C45.7854 58.1679 46.5783 58.4999 47.5 58.4999C48.4217 58.4999 49.2146 58.1679 49.8788 57.5037C50.5429 56.8395 50.875 56.0466 50.875 55.1249C50.875 54.2032 50.5429 53.4103 49.8788 52.7462C49.2146 52.082 48.4217 51.7499 47.5 51.7499C46.5783 51.7499 45.7854 52.082 45.1212 52.7462C44.4571 53.4103 44.125 54.2032 44.125 55.1249C44.125 56.0466 44.4571 56.8395 45.1212 57.5037Z" fill="#FF8B01"></path>`,
                success: _.YP`<path d="M43.3389 49.5082L37.1517 43.3211L34.5001 45.9727L43.3389 54.8115L59.2488 38.9016L56.5971 36.25L43.3389 49.5082Z" fill="#8BE1E0"></path>`
            };
            return o[this.type] ? _.YP`
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
    ` : _.dy``
        }

        render() {
            return _.dy`
      <div class="modal-dialog__panel" data-test-id="modal-dialog-panel">
        <div class="modal-dialog__border modal-dialog__border--type-${this.type}"></div>
        ${this.renderIcon()}
        <slot></slot>
      </div>
    `
        }
    };
    (0, a.__decorate)([(0, i.C)()], r.prototype, "type", void 0), (0, a.__decorate)([(0, t.I)(".modal-dialog__panel")], r.prototype, "panel", void 0), r = (0, a.__decorate)([(0, d.M)("gu-modal-dialog")], r), s(77064), s(11015);
    var w = s(5e3), I = s(28510), k = s(69808), P = s(87745);

    function $(O, o) {
        if (1 & O) {
            const m = w.EpF();
            w.TgZ(0, "gu-hex-button", 8), w.NdJ("click", function () {
                w.CHM(m);
                const D = w.oxw();
                return D.buttonClick(D.secondaryButton)
            }), w._uU(1), w.qZA()
        }
        if (2 & O) {
            const m = w.oxw();
            w.xp6(1), w.hij(" ", m.secondaryButton.text, " ")
        }
    }

    function E(O, o) {
        if (1 & O) {
            const m = w.EpF();
            w.TgZ(0, "gu-hex-button", 9), w.NdJ("click", function () {
                w.CHM(m);
                const D = w.oxw();
                return D.buttonClick(D.primaryButton)
            }), w.ALo(1, "safe"), w.qZA()
        }
        if (2 & O) {
            const m = w.oxw();
            w.Q6J("innerHTML", w.xi3(1, 1, m.primaryButton.text, "html"), w.oJD)
        }
    }

    let x = (() => {
        class O {
            constructor(m) {
                this.activeModal = m
            }

            buttonClick(m) {
                m.onClick && "function" == typeof m.onClick && m.onClick(), m.closeOnClick && this.activeModal.close()
            }
        }

        return O.\u0275fac = function (m) {
            return new (m || O)(w.Y36(I.mX))
        }, O.\u0275cmp = w.Xpm({
            type: O,
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
            template: function (m, y) {
                1 & m && (w.TgZ(0, "gu-modal-dialog", 0)(1, "div", 1)(2, "gu-paragraph-text", 2), w._uU(3), w.qZA(), w.TgZ(4, "gu-vertical-space", 3), w._UZ(5, "gu-paragraph-text", 4), w.ALo(6, "safe"), w.qZA(), w.TgZ(7, "gu-vertical-space", 5), w.YNc(8, $, 2, 1, "gu-hex-button", 6), w.YNc(9, E, 2, 4, "gu-hex-button", 7), w.qZA()()()), 2 & m && (w.Q6J("type", y.type), w.xp6(3), w.Oqu(y.title), w.xp6(2), w.Q6J("innerHTML", w.xi3(6, 5, y.content, "html"), w.oJD), w.xp6(3), w.Q6J("ngIf", y.secondaryButton), w.xp6(1), w.Q6J("ngIf", y.primaryButton))
            },
            directives: [k.O5],
            pipes: [P.y],
            styles: [".modalDialogContent[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 8px;align-items:center;max-width:100vw}.modalDialogContent[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.modalDialogContent__buttons[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center}.modalDialogContent__buttons[_ngcontent-%COMP%]   gu-hex-button[_ngcontent-%COMP%]{max-width:50%;flex:1 1 0px}.modalDialogContent__buttons[_ngcontent-%COMP%]   gu-hex-button[_ngcontent-%COMP%]:not(:last-child){margin-right:16px}"]
        }), O
    })()
}, 87745
:
(q, R, s) => {
    "use strict";
    s.d(R, {y: () => _});
    var l = s(5e3), a = s(22313);
    let _ = (() => {
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
(q, R, s) => {
    "use strict";
    s.d(R, {K: () => t});
    var l = s(5e3), a = s(69808);
    const _ = function (d, u, n, e, r) {
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
                1 & n && (l.F$t(), l.Hsn(0), l._UZ(1, "gu-paragraph-text", 0, 1)), 2 & n && (l.xp6(1), l.Q6J("kind", "large" === e.size ? "small" : "x-small")("ngClass", l.qbA(3, _, "top" === e.position, "left" === e.position, "right" === e.position, "bottom" === e.position, "large" === e.size))("innerHTML", e.title, l.oJD))
            },
            directives: [a.mk],
            styles: ['.tooltipBubble[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{display:block;position:relative}[_nghost-%COMP%]:hover   .tooltipBubble[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]:hover   .tooltipBubble.tooltipBubble--top[_ngcontent-%COMP%]{transform:translate(-50%,calc(-100% + (calc(var(--vh) * 1.7) * .5)))}[_nghost-%COMP%]:hover   .tooltipBubble.tooltipBubble--bottom[_ngcontent-%COMP%]{transform:translate(-50%,calc(100% - (calc(var(--vh) * 1.7) * .5)))}[_nghost-%COMP%]:hover   .tooltipBubble.tooltipBubble--left[_ngcontent-%COMP%]{transform:translate(calc(-100% - (calc(var(--vw) * .5) * .5) * .5),-50%)}[_nghost-%COMP%]:hover   .tooltipBubble.tooltipBubble--right[_ngcontent-%COMP%]{transform:translate(calc(0% + (calc(var(--vw) * .5) * .5) * .5),-50%)}.openTooltip[_nghost-%COMP%]   .tooltipBubble[_ngcontent-%COMP%]{opacity:1}.openTooltip[_nghost-%COMP%]   .tooltipBubble.tooltipBubble--top[_ngcontent-%COMP%]{transform:translate(-50%,calc(-100% + (calc(var(--vh) * 1.7) * .5)))}.openTooltip[_nghost-%COMP%]   .tooltipBubble.tooltipBubble--bottom[_ngcontent-%COMP%]{transform:translate(-50%,calc(100% - (calc(var(--vh) * 1.7) * .5)))}.openTooltip[_nghost-%COMP%]   .tooltipBubble.tooltipBubble--left[_ngcontent-%COMP%]{transform:translate(calc(-100% - (calc(var(--vw) * .5) * .5) * .5),-50%)}.openTooltip[_nghost-%COMP%]   .tooltipBubble.tooltipBubble--right[_ngcontent-%COMP%]{transform:translate(calc(0% + (calc(var(--vw) * .5) * .5) * .5),-50%)}.tooltipBubble[_ngcontent-%COMP%]{z-index:1;text-transform:capitalize;padding:calc(var(--vh) * 1.3);padding-top:calc(var(--vh) * .8);padding-bottom:calc(var(--vh) * .8);font-weight:600;user-select:none;pointer-events:none;position:absolute;background:#0f1b27;border:calc(var(--vh) * .15) solid #3d5a74;color:#92abc2;white-space:nowrap;border-radius:calc(var(--vh) * .4);opacity:0;left:50%;text-align:center}.tooltipBubble[_ngcontent-%COMP%]:before{content:"";position:absolute;left:50%;border:calc(var(--vh) * .7) solid transparent;transform:translate(-50%)}.tooltipBubble--large[_ngcontent-%COMP%]{font-weight:400;font-size:16px;padding:16px;text-transform:none}.tooltipBubble--top[_ngcontent-%COMP%]{top:0;transform:translate(-50%,-100%);margin-top:calc(calc(var(--vh) * 1.7) * -1)}.tooltipBubble--top[_ngcontent-%COMP%]:before{border-top-color:#3d5a74;bottom:calc(calc(calc(var(--vh) * .7) * -2) - calc(var(--vh) * .15))}.tooltipBubble--bottom[_ngcontent-%COMP%]{bottom:0;transform:translate(-50%,100%);margin-top:calc(var(--vh) * 1.7)}.tooltipBubble--bottom[_ngcontent-%COMP%]:before{border-bottom-color:#3d5a74;top:calc(calc(calc(var(--vh) * .7) * -2) - calc(var(--vh) * .15))}.tooltipBubble--left[_ngcontent-%COMP%]{left:0;top:50%}.tooltipBubble--left[_ngcontent-%COMP%]:before{left:100%;transform:translateY(50%);border-left-color:#3d5a74;right:calc(calc(calc(var(--vh) * .7) * -2) - calc(var(--vh) * .15));bottom:50%}.tooltipBubble--right[_ngcontent-%COMP%]{margin-left:10px;top:50%}.tooltipBubble--right[_ngcontent-%COMP%]:before{right:100%;transform:translateY(50%);border-right-color:#3d5a74;left:calc(calc(calc(var(--vh) * .7) * -2) - calc(var(--vh) * .15));bottom:50%}']
        }), d
    })()
}, 25774
:
(q, R, s) => {
    "use strict";
    s.d(R, {O: () => d});
    var l = s(73307), a = s(5e3), _ = s(69808);

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
            directives: [_.O5],
            styles: ["[_nghost-%COMP%]{position:absolute;width:100%;z-index:21}.announceBannerControl--inline[_nghost-%COMP%]{position:relative}"]
        }), u
    })()
}, 97993
:
(q, R, s) => {
    "use strict";
    s.d(R, {i: () => d});
    var l = s(8929), a = s(7625), _ = s(49002), i = s(73307), t = s(5e3);
    let d = (() => {
        class u {
            constructor(e) {
                this.featureFlagsService = e, this.text = "", this.unsubscribe = new l.xQ
            }

            ngOnInit() {
                this.watchFlagData()
            }

            watchFlagData() {
                this.featureFlagsService.get(_.vU.controllableBannerData).pipe((0, a.R)(this.unsubscribe)).subscribe(e => {
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
(q, R, s) => {
    "use strict";
    s.d(R, {
        ic: () => u,
        am: () => Us,
        sZ: () => ue,
        el: () => wo,
        gn: () => Hs,
        kM: () => Os,
        MZ: () => jt.M,
        W2: () => d
    });
    var l = s(69808), a = s(93075), _ = s(57289), i = s(53161), t = s(5e3);
    let d = (() => {
        class S {
        }

        return S.\u0275fac = function (g) {
            return new (g || S)
        }, S.\u0275mod = t.oAB({type: S}), S.\u0275inj = t.cJS({imports: [[l.ez, a.u5, i.j, _.P]]}), S
    })(), u = (() => {
        class S {
        }

        return S.\u0275fac = function (g) {
            return new (g || S)
        }, S.\u0275mod = t.oAB({type: S}), S.\u0275inj = t.cJS({imports: [[l.ez]]}), S
    })(), n = {numbers: {randomNumber: 0}, text: {randomText: "moo"}};
    setInterval(() => {
        n = Object.assign(Object.assign({}, n), {numbers: {randomNumber: Math.random()}})
    }, 400);
    var r = s(73307), v = s(57470);
    const C = ["carousel"], w = function (S) {
        return {"championButtons__button--active": S}
    };

    function I(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "div", 14), t.NdJ("click", function () {
                const Se = t.CHM(g).index;
                return t.oxw().gotoChampionSlide(Se)
            }), t.TgZ(1, "picture"), t._UZ(2, "source", 15)(3, "source", 16)(4, "img", 17), t.qZA()()
        }
        if (2 & S) {
            const g = V.$implicit, F = V.index, ee = t.oxw();
            t.Q6J("ngClass", t.VKq(13, w, ee.activeChampionIndex === F)), t.xp6(1), t.Gre("championButtons__button__picture championButtons__button__picture--", g.name, ""), t.xp6(1), t.FAE("srcset", "\n          //images.godsunchained.com/art2/250/", g.protoId, ".webp 250w,\n          //images.godsunchained.com/art2/375/", g.protoId, ".webp 375w,\n          //images.godsunchained.com/art2/500/", g.protoId, ".webp 500w,\n          //images.godsunchained.com/art2/720/", g.protoId, ".webp 720w\n        ", t.LSH), t.xp6(1), t.FAE("srcset", "\n          //images.godsunchained.com/art2/250/", g.protoId, ".jpg 250w,\n          //images.godsunchained.com/art2/375/", g.protoId, ".jpg 375w,\n          //images.godsunchained.com/art2/500/", g.protoId, ".jpg 500w,\n          //images.godsunchained.com/art2/720/", g.protoId, ".jpg 720w\n        ", t.LSH), t.xp6(1), t.MGl("src", "//images.godsunchained.com/art2/500/", g.protoId, ".jpg", t.LSH)
        }
    }

    function k(S, V) {
        if (1 & S && (t.TgZ(0, "div", 18)(1, "picture", 19), t._UZ(2, "source", 20)(3, "source", 21)(4, "img", 22), t.qZA(), t.TgZ(5, "gu-vertical-space", 23)(6, "gu-heading-text", 24), t._uU(7), t.qZA()(), t.TgZ(8, "gu-paragraph-text", 25), t._uU(9), t.qZA(), t.TgZ(10, "gu-vertical-space", 26)(11, "gu-simple-text-button", 27), t._uU(12, " Read more "), t.qZA()(), t.TgZ(13, "gu-paragraph-text", 28), t._uU(14), t.qZA()()), 2 & S) {
            const g = V.$implicit;
            t.xp6(2), t.bRH("srcset", "\n            //images.godsunchained.com/art2/250/", g.protoId, ".webp 250w,\n            //images.godsunchained.com/art2/375/", g.protoId, ".webp 375w,\n            //images.godsunchained.com/art2/500/", g.protoId, ".webp 500w,\n            //images.godsunchained.com/art2/720/", g.protoId, ".webp 720w,\n            //images.godsunchained.com/art2/1024/", g.protoId, ".webp 1024w,\n            //images.godsunchained.com/art2/1280/", g.protoId, ".webp 1280w,\n            //images.godsunchained.com/art2/1440/", g.protoId, ".webp 1440w\n          ", t.LSH), t.xp6(1), t.bRH("srcset", "\n            //images.godsunchained.com/art2/250/", g.protoId, ".jpg 250w,\n            //images.godsunchained.com/art2/375/", g.protoId, ".jpg 375w,\n            //images.godsunchained.com/art2/500/", g.protoId, ".jpg 500w,\n            //images.godsunchained.com/art2/720/", g.protoId, ".jpg 720w,\n            //images.godsunchained.com/art2/1024/", g.protoId, ".jpg 1024w,\n            //images.godsunchained.com/art2/1280/", g.protoId, ".jpg 1280w,\n            //images.godsunchained.com/art2/1440/", g.protoId, ".jpg 1440w\n          ", t.LSH), t.xp6(1), t.MGl("src", "//images.godsunchained.com/art2/720/", g.protoId, ".jpg", t.LSH), t.xp6(3), t.hij(" ", g.title, " "), t.xp6(2), t.hij(" ", g.description, " "), t.xp6(2), t.s9C("href", g.link), t.xp6(3), t.hij(" ", g.byline, " ")
        }
    }

    let P = (() => {
        class S {
            constructor() {
                this.activeChampionIndex = 0, this.champions = v.zy.Y, this.routes = v.CF.J
            }

            ngOnInit() {
            }

            gotoChampionSlide(g) {
                this.carousel.nativeElement.gotoSlide(g)
            }

            onChampionCarouselUpdate(g) {
                this.activeChampionIndex = g.detail.currentActiveSlides[0]
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-season1-champion-section"]],
            viewQuery: function (g, F) {
                if (1 & g && t.Gf(C, 7), 2 & g) {
                    let ee;
                    t.iGM(ee = t.CRH()) && (F.carousel = ee.first)
                }
            },
            decls: 18,
            vars: 4,
            consts: [["size", "large", "fillGradient", "gradients.gold.simple", "align", "center", 1, "heading"], [1, "championButtons"], ["class", "championButtons__button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "championCarouselWrapper"], [1, "championCarousel", 3, "onSlideChange"], ["carousel", ""], ["class", "championCarousel__championSlide", 4, "ngFor", "ngForOf"], [1, "sideBarImage", "sideBarImage--left"], ["srcset", "/assets/images/expansion-1/carousel-sidebar.webp", "type", "image/webp"], ["srcset", "/assets/images/expansion-1/carousel-sidebar.png", "type", "image/png"], ["src", "/assets/images/expansion-1/carousel-sidebar.png", "alt", "", 1, "sideBarImage__img"], [1, "sideBarImage", "sideBarImage--right"], ["both", "x-large", 1, "ctaButtonRow"], ["text", "Buy Packs", "size", "large", 3, "disabled", "href"], [1, "championButtons__button", 3, "ngClass", "click"], ["sizes", "20vw", "type", "image/webp", 3, "srcset"], ["sizes", "20vw", "type", "image/jpg", 3, "srcset"], ["alt", "", 1, "championButtons__button__picture__img", 3, "src"], [1, "championCarousel__championSlide"], [1, "championCarousel__championSlide__imgWrapper"], ["sizes", "75vw", "type", "image/webp", 3, "srcset"], ["sizes", "75vw", "type", "image/jpg", 3, "srcset"], ["alt", "", 1, "championCarousel__championSlide__imgWrapper__img", 3, "src"], ["both", "x-large"], ["size", "x-small", "fillColor", "colors.light.100", "align", "center"], ["fillColor", "colors.light.100", "align", "center", "kind", "large", 1, "championCarousel__championSlide__description"], ["top", "large", "bottom", "3x-large", 1, "readMoreLink"], ["kind", "tag", "target", "_blank", "fillColor", "colors.apocyan.300", "align", "center", 3, "href"], ["align", "center", "kind", "large"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "gu-heading-text", 0), t._uU(1, " Meet your champions\n"), t.qZA(), t.TgZ(2, "div", 1), t.YNc(3, I, 5, 15, "div", 2), t.qZA(), t.TgZ(4, "div", 3)(5, "gu-carousel", 4, 5), t.NdJ("onSlideChange", function (Se) {
                    return F.onChampionCarouselUpdate(Se)
                }), t.YNc(7, k, 15, 19, "div", 6), t.qZA(), t.TgZ(8, "picture", 7), t._UZ(9, "source", 8)(10, "source", 9)(11, "img", 10), t.qZA(), t.TgZ(12, "picture", 11), t._UZ(13, "source", 8)(14, "source", 9)(15, "img", 10), t.qZA()(), t.TgZ(16, "gu-vertical-space", 12), t._UZ(17, "gu-primary-hex-button", 13), t.qZA()), 2 & g && (t.xp6(3), t.Q6J("ngForOf", F.champions), t.xp6(4), t.Q6J("ngForOf", F.champions), t.xp6(10), t.Q6J("disabled", !0)("href", F.routes.buyPacks.path))
            },
            directives: [l.sg, l.mk],
            styles: ['@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{position:relative;padding:80px 0;display:flex;flex-direction:column;background:url(/assets/images/expansion-1/Lysander_LC_BG.jpg);background-size:cover;background-position:center}[_nghost-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom,#0A0A0A 0%,rgba(10,10,10,.8) 50%)}[_nghost-%COMP%]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:12px;background:radial-gradient(47.52% 50% at 50% 50%,#C6A052 0%,rgba(198,160,82,0) 100%)}.heading[_ngcontent-%COMP%]{position:relative;padding:0 20px}.championButtons[_ngcontent-%COMP%]{margin:20px auto 48px;padding:0 28px;display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:28px;grid-row-gap:28px;max-width:"768px";width:100%}@media screen and (min-width: 512px){.championButtons[_ngcontent-%COMP%]{grid-template-columns:repeat(6,1fr)}}.championButtons__button[_ngcontent-%COMP%]{border-radius:50%;width:100%;padding-bottom:100%;transition:box-shadow .25s ease-in-out;position:relative;overflow:hidden;cursor:pointer}.championButtons__button__picture[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.championButtons__button__picture__img[_ngcontent-%COMP%]{height:300%;width:300%;object-fit:cover;position:absolute;top:0;left:50%;transform:translate(-50%,-10%)}.championButtons__button__picture--lysander[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-50%,-9%)}.championButtons__button__picture--neferu[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-45%,-14%)}.championButtons__button__picture--valka[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-52%,-6.5%)}.championButtons__button__picture--pallas[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-54%,-7%)}.championButtons__button__picture--selena[_ngcontent-%COMP%]   .championButtons__button__picture__img[_ngcontent-%COMP%]{transform:translate(-50%,-8%)}.championButtons__button--active[_ngcontent-%COMP%]{box-shadow:0 0 20px #f7ea9b}.championCarouselWrapper[_ngcontent-%COMP%]{margin:0 auto;width:85%;max-width:1000px;position:relative}@media screen and (min-width: 768px){.championCarouselWrapper[_ngcontent-%COMP%]{width:65%}}.sideBarImage[_ngcontent-%COMP%]{display:none;position:absolute;top:-3%;left:-6.25%;width:12.5%;user-select:none;pointer-events:none}.sideBarImage--right[_ngcontent-%COMP%]{left:auto;right:-6.25%;transform:rotateY(180deg)}.sideBarImage__img[_ngcontent-%COMP%]{display:block;width:100%}.championCarousel[_ngcontent-%COMP%]{width:100%;margin:auto;overflow:hidden}.championCarousel__championSlide[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;position:relative}.championCarousel__championSlide__imgWrapper[_ngcontent-%COMP%]{width:100%;padding-bottom:50%;position:relative;overflow:hidden}@media screen and (min-width: 512px){.sideBarImage[_ngcontent-%COMP%]{display:block}.championCarousel[_ngcontent-%COMP%]{border-radius:4vw 4vw 0 0}.championCarousel__championSlide__imgWrapper[_ngcontent-%COMP%]{border-radius:0 0 4vw 4vw}}.championCarousel__championSlide__imgWrapper__img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;object-fit:cover;object-position:center 20%}.championCarousel__championSlide__description[_ngcontent-%COMP%]{width:75%;margin:0 auto}.ctaButtonRow[_ngcontent-%COMP%]{display:flex;justify-content:center}.readMoreLink[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center}.readMoreLink__text[_ngcontent-%COMP%]{padding-bottom:4px;border-bottom:2px solid #8BE1E0}.bottomContent[_ngcontent-%COMP%]{position:relative}']
        }), S
    })();
    var $ = s(72986), y = (s(22249), s(90473), s(85353), s(43337), s(66678), s(83920)), D = s(45821);

    function Q(S, V) {
        if (1 & S && (t.TgZ(0, "gu-paragraph", 7), t._uU(1), t.qZA()), 2 & S) {
            const g = t.oxw();
            t.Gre("newsletter-form__help-", g.help.status, ""), t.xp6(1), t.hij(" ", g.help.text, " ")
        }
    }

    let ie = (() => {
        class S {
            constructor(g) {
                this.authHostService = g, this.help = {
                    status: "info",
                    text: ""
                }, this.control = new a.NI("", [a.kI.required, a.kI.email])
            }

            submit() {
                if (!this.control.valid) return !1;
                this.authHostService.post(`/subscribe/${this.control.value}`).pipe((0, $.q)(1)).subscribe({
                    next: g => {
                        "success" === g ? (this.help = {
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

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(r.LI))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-newsletter-signup-form"]],
            decls: 10,
            vars: 7,
            consts: [["fillColor", "colors.light[100]", "align", "center", "size", "x-small"], [1, "newsletter-form__form", 3, "submit"], ["placeholder", "Enter your email here", "data-test-id", "newsletter-form-input", 1, "newsletter-form__input", 3, "value", "valid", "formControl", "disabled"], [3, "control"], ["key", "email", "fillColor", "colors.alert", "size", "x-small", "data-test-id", "email-error-email"], ["size", "small", "data-test-id", "newsletter-form-help-text", 3, "class", 4, "ngIf"], ["type", "primary", "size", "large", 1, "newsletter-form__submit-button", 3, "disabled", "click"], ["size", "small", "data-test-id", "newsletter-form-help-text"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "gu-heading-text", 0), t._uU(1, " signup for our newsletter!\n"), t.qZA(), t.TgZ(2, "gu-form", 1), t.NdJ("submit", function () {
                    return F.submit()
                }), t._UZ(3, "gu-input", 2), t.TgZ(4, "gu-validation-errors", 3)(5, "gu-body-text", 4), t._uU(6, " Please enter a valid email "), t.qZA()(), t.YNc(7, Q, 2, 4, "gu-paragraph", 5), t.TgZ(8, "gu-hex-button", 6), t.NdJ("click", function () {
                    return F.submit()
                }), t._uU(9, " submit "), t.qZA()()), 2 & g && (t.xp6(3), t.Q6J("value", F.control.value)("valid", F.control.valid)("formControl", F.control)("disabled", F.control.disabled), t.xp6(1), t.Q6J("control", F.control), t.xp6(3), t.Q6J("ngIf", F.help.text), t.xp6(1), t.Q6J("disabled", F.control.disabled || !F.control.valid))
            },
            directives: [y._, a.JJ, a.oH, D.n, l.O5],
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;box-sizing:border-box}.newsletter-form__input[_ngcontent-%COMP%]{margin:16px 0 24px}.newsletter-form__submit-button[_ngcontent-%COMP%]{min-width:170px;align-self:center;flex-grow:0}.newsletter-form__help-success[_ngcontent-%COMP%]{color:#f6f6f6}.newsletter-form__help-error[_ngcontent-%COMP%]{color:#8be1e0}.newsletter-form__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;place-content:stretch flex-start;place-items:stretch flex-start;text-align:center}"]
        }), S
    })(), ue = (() => {
        class S {
            constructor(g, F) {
                this.authService = g, this.authHostService = F
            }

            get isLoggedIn() {
                return this.authService.isLoggedIn()
            }

            ngOnInit() {
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(r.mI), t.Y36(r.LI))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-lore-route"]],
            decls: 33,
            vars: 0,
            consts: [[1, "headerStrip"], ["top", "4x-large"], ["fillColor", "colors.light.100", "align", "center", "size", "x-large"], ["bottom", "4x-large", "top", "large", 1, "headerStrip__bodyCopy"], ["fillColor", "colors.light.100", "align", "center", "kind", "large"], [1, "bandedStrip"], ["both", "x-large"], ["fillGradient", "gradients.gold.simple", "align", "center", "size", "small"], ["top", "medium"], ["kind", "help", "align", "center"], ["both", "medium"], ["src", "/assets/images/weird-spacer-thing.svg", 1, "weirdSpacingImage"], ["kind", "tag", "align", "center"], ["top", "4x-large", "bottom", "2x-large", 1, "loreIntroText"], ["kind", "large"], ["top", "large"], ["href", "https://blog.godsunchained.com/2020/01/24/chapter-1-citadel-of-the-gods/", 1, "readMoreLink"], ["kind", "tag", "fillColor", "colors.apocyan.300", "align", "center", 1, "readMoreLink__text"], ["top", "6x-large"], ["size", "x-small", "align", "center", 1, "mysteryHeading"], ["top", "2x-large", 1, "ctaButtonRow"], ["text", "Visit blog", "href", "https://blog.godsunchained.com/"], ["both", "6x-large"], [1, "newsLetterSignUp"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "header", 0)(1, "gu-vertical-space", 1)(2, "gu-heading-text", 2), t._uU(3, " LORE "), t.qZA()(), t.TgZ(4, "gu-vertical-space", 3)(5, "gu-paragraph-text", 4), t._uU(6, " Come, mortal! Settle in and be regaled by tales that traverse the Nine Realms, recount the deeds of the champions of Eucos, and whisper of the gods themselves. "), t.qZA()()(), t.TgZ(7, "div", 5)(8, "gu-vertical-space", 6)(9, "gu-heading-text", 7), t._uU(10, " Citadel of the gods "), t.qZA(), t.TgZ(11, "gu-vertical-space", 8)(12, "gu-paragraph-text", 9), t._uU(13, " Welcome to the trial "), t.qZA()(), t.TgZ(14, "gu-vertical-space", 10), t._UZ(15, "img", 11), t.qZA(), t.TgZ(16, "gu-paragraph-text", 12), t._uU(17, " by kelly digges "), t.qZA()()(), t.TgZ(18, "gu-vertical-space", 13)(19, "gu-paragraph-text", 14), t._uU(20, " You've seen the statues of the gods in temples, of course. Incorruptible Thaeriel, Vengeful Auros, Gentle Aeona. To mortal worshipers, the statues are the gods: terrible and beautiful. But the reality is they are the pale shadow of a blazing truth. This is the story of one fateful meeting, and a divine contest that would alter the course of the Nine Relams for aeons to come. "), t.qZA(), t.TgZ(21, "gu-vertical-space", 15)(22, "a", 16)(23, "gu-simple-text", 17), t._uU(24, " Read more "), t.qZA()()()(), t._UZ(25, "cerberus-season1-champion-section"), t.TgZ(26, "gu-vertical-space", 18)(27, "gu-heading-text", 19), t._uU(28, " FOR MORE GODS UNCHAINED CONTENT & UPDATES "), t.qZA(), t.TgZ(29, "gu-vertical-space", 20), t._UZ(30, "gu-primary-hex-button", 21), t.qZA()(), t.TgZ(31, "gu-vertical-space", 22), t._UZ(32, "cerberus-newsletter-signup-form", 23), t.qZA())
            },
            directives: [P, ie],
            styles: ["@keyframes blink{0%{opacity:.2}20%{opacity:1}to{opacity:.2}}@keyframes glowing{0%{box-shadow:0 0 -10px #28a1ee}40%{box-shadow:0 0 10px #28a1ee}60%{box-shadow:0 0 10px #28a1ee}to{box-shadow:0 0 -10px #28a1ee}}@keyframes moving-gradient{0%{background-position:left}to{background-position:right}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes upAndDown2{0%{transform:translateY(-2%)}50%{transform:translateY(2%)}to{transform:translateY(-2%)}}@keyframes shine2{0%{filter:brightness(.96) hue-rotate(0deg)}50%{filter:brightness(1.12) hue-rotate(-10deg)}to{filter:brightness(.96) hue-rotate(0deg)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}[_nghost-%COMP%]{display:block}.headerStrip[_ngcontent-%COMP%]{background:url(/assets/images/colour-palace-background2.jpg);background-size:cover;background-position:center;display:flex;flex-direction:column}.headerStrip__bodyCopy[_ngcontent-%COMP%]{max-width:800px;width:80%;margin-left:auto;margin-right:auto}.bandedStrip[_ngcontent-%COMP%]{background:#0F1B27;display:flex;flex-direction:column}.weirdSpacingImage[_ngcontent-%COMP%]{display:block;width:148px;margin-left:auto;margin-right:auto}.loreIntroText[_ngcontent-%COMP%]{width:80%;max-width:800px;margin-left:auto;margin-right:auto}.readMoreLink[_ngcontent-%COMP%]{display:inline-flex;justify-content:flex-start}.readMoreLink__text[_ngcontent-%COMP%]{padding-bottom:4px;border-bottom:2px solid #8BE1E0}.ctaButtonRow[_ngcontent-%COMP%]{display:flex;justify-content:center}.mysteryHeading[_ngcontent-%COMP%]{max-width:500px;padding:0 20px;margin-left:auto;margin-right:auto}.signupForm[_ngcontent-%COMP%]{width:85%;max-width:450px;display:flex;flex-direction:column;margin-left:auto;margin-right:auto}.signupForm__emailInput[_ngcontent-%COMP%]{background:#0F1B27;color:#7192b0;border:1px solid #527493;text-align:center;padding:12px 20px;width:100%}.signupForm__emailInput[_ngcontent-%COMP%]::placeholder{font-size:14px;font-style:italic;color:#f6f6f6b3}.signupForm__emailInput[_ngcontent-%COMP%]:-ms-input-placeholder{font-size:14px;font-style:italic;color:#f6f6f6b3}.signupForm__emailInput[_ngcontent-%COMP%]:-moz-placeholder{font-size:14px;font-style:italic;color:#f6f6f6b3}.newsLetterSignUp[_ngcontent-%COMP%]{max-width:530px;width:85%;margin-left:auto;margin-right:auto}"]
        }), S
    })();
    var J = s(39029), ye = s(69039), K = s(5284), Z = s(65281), pe = s(12052), ve = s(32830), Pe = s(98539),
        z = s(97223), le = s(19444);
    const j = "FLIP_A_CARD", se = "TOGGLE_OPEN_PACK_VIDEO_VISIBILITY", ce = "TOGGLE_OPEN_PACK_CARDS",
        _e = "SET_OPEN_PACK_VIDEO_ID", Ve = "RESET_TEMPLE", je = "SET_CURRENT_UNOPENED_PACKS",
        tt = "TOGGLE_PACK_VISIBILITY", $e = "TOGGLE_RAFFLE_TICKETS", me = "SET_CURRENT_OPEN_CHEST",
        Me = "SET_OPEN_CHEST_VIDEO_ID", G = "TOGGLE_OPEN_CHEST_VIDEO_FINISHED", oe = "PARTIAL_RESET_TEMPLE",
        ne = "TOGGLE_OPEN_PACK_VIDEO_LOADING", Ee = "TOGGLE_OPEN_PACK_VIDEO_PLAYING",
        lt = "TOGGLE_OPEN_CHEST_VIDEO_PLAYING", xt = S => ({type: je, payload: S}), vt = S => ({type: Me, payload: S}),
        ke = S => ({type: G, payload: S}), bt = S => ({type: ne, payload: S}), T = S => ({type: lt, payload: S}),
        U = S => ({type: Ee, payload: S}), c = {
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
        }, L = (0, z.MT)((S = c, {type: V, payload: g}) => {
            switch (V) {
                case _e:
                    return Object.assign(Object.assign({}, S), {openPackVideoId: g});
                case ce:
                    return Object.assign(Object.assign({}, S), {firstPackCardsVisible: "boolean" == typeof g ? g : !S.firstPackCardsVisible});
                case se:
                    return Object.assign(Object.assign({}, S), {openPackVideoVisible: "boolean" == typeof g ? g : !S.openPackVideoVisible});
                case j:
                    return Object.assign(Object.assign({}, S), {flippedCards: Object.assign(Object.assign({}, S.flippedCards), {[g]: !S.flippedCards[g]})});
                case tt:
                    return Object.assign(Object.assign({}, S), {packImageVisible: "boolean" == typeof g ? g : !S.packImageVisible});
                case je:
                    return Object.assign(Object.assign({}, S), {
                        currentUnOpenedPacks: g,
                        currentOpenPack: Object.assign(Object.assign({}, g[0]), {id: (0, le.v4)()})
                    });
                case $e:
                    return Object.assign(Object.assign({}, S), {raffleTicketsDisplayVisible: !S.raffleTicketsDisplayVisible});
                case me:
                    return Object.assign(Object.assign({}, S), {currentOpenChest: g});
                case Me:
                    return Object.assign(Object.assign({}, S), {openChestVideoId: g, openChestVideoComplete: !1});
                case G:
                    return Object.assign(Object.assign({}, S), {openChestVideoComplete: "boolean" == typeof g ? g : !S.openChestVideoComplete});
                case lt:
                    return Object.assign(Object.assign({}, S), {openChestVideoPlaying: "boolean" == typeof g ? g : !S.openChestVideoPlaying});
                case ne:
                    return Object.assign(Object.assign({}, S), {openPackVideoLoading: "boolean" == typeof g ? g : !S.openPackVideoLoading});
                case Ee:
                    return Object.assign(Object.assign({}, S), {openPackVideoPlaying: "boolean" == typeof g ? g : !S.openPackVideoPlaying});
                case oe:
                    return Object.assign(Object.assign({}, c), {packImageVisible: !0});
                case Ve:
                    return Object.assign({}, c);
                default:
                    return S
            }
        }, c), X = {
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
    var xe = s(80102), de = s(26532), Be = s(61462);
    const dt = ve.iv`
  ${(0, de.asCssProp)((0, de.setBoxSizing)())}

  :host {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ${(0, de.asCssProp)((0, Be.userSelect)("none"))};
  }

  :host(.visible) {
    ${(0, de.asCssProp)((0, Be.userSelect)("auto"))};
  }

  gu-controllable-vimeo-embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${(0, de.asCssProp)(Z.uifx.userSelect("none"))};
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
      ${(0, de.asCssProp)(Z.colors.gunmetal[500])} 0%,
      ${(0, de.asCssProp)(Z.colors.gunmetal[700])} 100%
    );
    animation: fadeAndSlideUp 0.5s ease-in-out;
    ${(0, de.asCssProp)(Z.uifx.userSelect("auto"))};
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
    background: ${(0, de.asCssProp)(Z.colors.dark[900])};
    cursor: pointer;
    opacity: 0;
    border: 1px solid ${(0, de.asCssProp)(Z.colors.dark[500])};
    ${(0, de.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .unOpenedChestsListing__chest:active {
    border: 1px solid ${(0, de.asCssProp)(Z.colors.light[100])} !important;
    background: ${(0, de.asCssProp)(Z.colors.light[100])} !important;
  }

  .unOpenedChestsListing__chest:active .unOpenedChestsListing__chest__openNowText {
    ${(0, de.asCssProp)(Z.gradients.textFill(Z.colors.dark[900]))};
  }

  .unOpenedChestsListing__chest:active .unOpenedChestsListing__chest__count {
    color: ${(0, de.asCssProp)(Z.colors.dark[900])};
    border-color: ${(0, de.asCssProp)(Z.colors.dark[900])};
  }

  .unOpenedChestsListing__chest:hover {
    border: 1px solid ${(0, de.asCssProp)(Z.colors.gunmetal[700])};
    background: ${(0, de.asCssProp)(Z.colors.gunmetal[700])};
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
    border: 1px solid ${(0, de.asCssProp)(Z.colors.gold[500])};
  }

  .chestsCta {
    position: absolute;
    left: 8%;
    bottom: 7%;
    min-width: ${(0, de.asCssProp)((0, xe.gridUnits)(50))};
    opacity: 0;
    ${(0, de.asCssProp)(Z.uifx.userSelect("none"))};
    ${(0, de.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .chestsCta--visible {
    ${(0, de.asCssProp)(Z.uifx.userSelect("auto"))};
    opacity: 1;
    z-index: 2;
  }
`;
    customElements.define("gu-temple-chest-layer", (0, J.x1)({
        renderer: function Yt({unOpenedChests: S = [], volume: V}) {
            const g = (0, pe.sO)(null), F = (0, J.I0)(L), {
                currentOpenChest: ee,
                openChestVideoId: Se,
                openChestVideoPlaying: ot,
                openChestVideoComplete: pt,
                openPackVideoVisible: Je
            } = (0, J.v9)({
                store: L,
                selector: be => ({
                    openChestVideoPlaying: be.openChestVideoPlaying,
                    openPackVideoVisible: be.openPackVideoVisible,
                    currentOpenChest: be.currentOpenChest,
                    openChestVideoId: be.openChestVideoId,
                    openChestVideoComplete: be.openChestVideoComplete
                })
            });
            (0, pe.d4)(() => {
                if (this.isIos = K.I5.isIos(), !ee.set) return;
                let be = X[`chest-videos-open ${ee.set}--neutral--${ee.rarity}`];
                be || (be = X["chest-videos-open order--neutral--rare"]), F(vt(be))
            }, [ee]), (0, pe.d4)(() => {
                Je ? this.classList.remove("visible") : this.classList.add("visible")
            }, [Je]);
            return ve.dy`
    ${Se ? ve.dy`
          <gu-controllable-vimeo-embed
            class=${(0, Pe.$)({chestOpenVideo: !0, "chestOpenVideo--aboveAllLayers": ot})}
            autoPlay
            videoId=${Se}
            pauseOnEndFrame
            @onVideoEnd=${() => {
                F(ke(!0)), F(T(!1)), this.dispatchEvent(new CustomEvent("onChestOpened", {
                    detail: Object.assign({}, ee),
                    bubbles: !0,
                    composed: !0
                }))
            }}
            ?domRef=${(0, ye.Q)(g)}
            ?muted=${this.isIos}
            .volume=${V}
          ></gu-controllable-vimeo-embed>
        ` : null}
    ${S.length ? ve.dy`
          <div
            class=${(0, Pe.$)({unOpenedChestsListing: !0, "unOpenedChestsListing--visible": !Je})}
          >
            ${S.reduce((be, ze) => {
                let rt;
                return be.find((Ht, it) => {
                    const at = ze.set === Ht.set && ze.rarity === Ht.rarity;
                    return at && (rt = it), at
                }) ? be[rt].quantityCount += 1 : be.push(Object.assign(Object.assign({}, ze), {quantityCount: 1})), be
            }, []).map(be => {
                const ze = `${be.set}--neutral--${be.rarity}`;
                return ve.dy`
                  <div class="unOpenedChestsListing__chest" @click=${() => (be => {
                    F(T(!0)), be.rarity === ee.rarity && be.set === ee.set ? (F(ke(!1)), g.current.playVideo(0)) : F((S => ({
                        type: me,
                        payload: S
                    }))(be))
                })(be)}>
                    <picture class="unOpenedChestsListing__chest__picture">
                      <source
                        type="image/webp"
                        srcset="
                          //images.godsunchained.com/transparent-chest-images--open/434/${ze}.webp 434w,
                          //images.godsunchained.com/transparent-chest-images--open/256/${ze}.webp 256w,
                          //images.godsunchained.com/transparent-chest-images--open/128/${ze}.webp 128w
                        "
                      />
                      <source
                        type="image/png"
                        srcset="
                          //images.godsunchained.com/transparent-chest-images--open/434/${ze}.png 434w,
                          //images.godsunchained.com/transparent-chest-images--open/256/${ze}.png 256w,
                          //images.godsunchained.com/transparent-chest-images--open/128/${ze}.png 128w
                        "
                      />
                      <img
                        src="//images.godsunchained.com/transparent-chest-images--open/128/${ze}.png"
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
                      ${be.quantityCount}x
                    </gu-paragraph-text>
                  </div>
                `
            })}
          </div>
        ` : null}

    <gu-primary-hex-button
      size="large"
      class=${(0, Pe.$)({chestsCta: !0, "chestsCta--visible": pt})}
      @click=${() => {
                F(ke(!1)), F(vt(null))
            }}
    >
      Back to Packs
    </gu-primary-hex-button>
  `
        }, props: {properties: {unOpenedChests: {type: Array}, volume: {type: Number}}, styles: dt}
    }));
    const Jt = ve.iv`
  :host {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: ${(0, de.asCssProp)(Z.colors.gunmetal[900])};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.94;
  }

  .icon {
    font-size: ${(0, de.asCssProp)((0, xe.gridUnits)(20))};
  }

  .text {
    max-width: 350px;
  }

  @media screen and (min-width: ${(0, de.asCssProp)(Z.breakpoints.breakpointSizeMapping.small)}) {
    :host {
      display: none;
    }
  }
`;
    customElements.define("gu-temple-overlay-layer", (0, J.x1)({
        renderer: function Ne() {
            return ve.dy`
    <gu-icon iconLigature="alert_triangle" align="center" fillColor=${Z.colors.god.war.secondary} class="icon"></gu-icon>
    <gu-vertical-space top="x-large">
      <gu-paragraph-text class="text" align="center" fillColor=${Z.colors.light[100]}>
        <slot></slot>
      </gu-paragraph-text>
    </gu-vertical-space>
  `
        }, props: {properties: {message: {type: String}}, styles: Jt}
    }));
    var ut = s(49749), xs = s(46461), Pt = s(77518);
    const De = "/assets/audio/temple", ds = {
        diamond__common: `${De}/temple_reveal_diamond_common`,
        diamond__rare: `${De}/temple_reveal_diamond_rare`,
        diamond__epic: `${De}/temple_reveal_diamond_epic`,
        diamond__legendary: `${De}/temple_reveal_diamond_legendary`,
        gold__common: `${De}/temple_reveal_gold_common`,
        gold__rare: `${De}/temple_reveal_gold_rare`,
        gold__epic: `${De}/temple_reveal_gold_epic`,
        gold__legendary: `${De}/temple_reveal_gold_legendary`,
        shadow__common: `${De}/temple_reveal_shadow_common`,
        shadow__rare: `${De}/temple_reveal_shadow_rare`,
        shadow__epic: `${De}/temple_reveal_shadow_epic`,
        shadow__legendary: `${De}/temple_reveal_shadow_legendary`,
        meteorite__common: `${De}/temple_reveal_meteorite_common`,
        meteorite__rare: `${De}/temple_reveal_meteorite_rare`,
        meteorite__epic: `${De}/temple_reveal_meteorite_epic`,
        meteorite__legendary: `${De}/temple_reveal_meteorite_legendary`,
        plain__common: `${De}/temple_reveal_plain_common`,
        plain__rare: `${De}/temple_reveal_plain_rare`,
        plain__epic: `${De}/temple_reveal_plain_epic`,
        plain__legendary: `${De}/temple_reveal_plain_legendary`
    }, ss = ve.iv`
  ${(0, de.asCssProp)((0, de.setBoxSizing)())}

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
    ${(0, de.asCssProp)(Z.animation.slowTransition("height"))};
    transition-property: height, transform;
  }

  .raffleTicketsArea--opened {
    height: calc(var(--ch) * (15 + 17.3));
  }

  .raffleTicketsArea__dropdown {
    position: absolute;
    background: ${(0, de.asCssProp)(Z.gradients.gold.simple("bottom"))};
    padding: 3px;
    width: 68%;
    height: calc(var(--ch) * 17.3);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    ${(0, de.asCssProp)((0, de.drawBottomHexShapePolygonMask)("calc(var(--ch) * 4)"))};
    ${(0, de.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .raffleTicketsArea--opened .raffleTicketsArea__dropdown {
    opacity: 1;
  }

  .raffleTicketsArea__dropdown__inner {
    width: 100%;
    height: 100%;
    background: ${(0, de.asCssProp)(Z.colors.gunmetal[900])};
    ${(0, de.asCssProp)((0, de.drawBottomHexShapePolygonMask)("calc(var(--ch) * 3.9)"))};
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
    font-family: ${(0, de.asCssProp)(Z.typography.headingFont)};
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
    ${(0, de.asCssProp)((0, Be.userSelect)("none"))};
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
    background: ${(0, de.asCssProp)(Z.colors.rarity.rare)};
    box-shadow: 0 0 calc(var(--ch) * 3) calc(var(--ch) * 3) ${(0, de.asCssProp)(Z.colors.rarity.rare)};
  }
  .cardWrapper__frontFace__bloom--epic {
    background: ${(0, de.asCssProp)(Z.colors.rarity.epic)};
    box-shadow: 0 0 calc(var(--ch) * 3) calc(var(--ch) * 3) ${(0, de.asCssProp)(Z.colors.rarity.epic)};
  }
  .cardWrapper__frontFace__bloom--legendary {
    background: ${(0, de.asCssProp)(Z.colors.rarity.legendary)};
    box-shadow: 0 0 calc(var(--ch) * 3) calc(var(--ch) * 3) ${(0, de.asCssProp)(Z.colors.rarity.legendary)};
  }
  .cardWrapper__frontFace__bloom--mythic {
    background: ${(0, de.asCssProp)(Z.colors.rarity.mythic)};
    box-shadow: 0 0 calc(var(--ch) * 3) calc(var(--ch) * 3) ${(0, de.asCssProp)(Z.colors.rarity.mythic)};
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
`, os = S => Pt.PW[S];
    customElements.define("gu-temple-pack-card-listing", (0, J.x1)({
        renderer: function Nt({}) {
            const V = (0, J.I0)(L), [g, F] = (0, pe.eJ)([]), {
                currentOpenPack: ee,
                firstPackCardsVisible: Se,
                raffleTicketsDisplayVisible: ot,
                flippedCards: pt
            } = (0, J.v9)({
                store: L,
                selector: be => ({
                    flippedCards: be.flippedCards,
                    raffleTicketsDisplayVisible: be.raffleTicketsDisplayVisible,
                    firstPackCardsVisible: be.firstPackCardsVisible,
                    currentOpenPack: be.currentOpenPack
                })
            });
            (0, pe.d4)(() => {
                Se ? this.classList.add("visible") : this.classList.remove("visible"), ut.p8.to(this.shadowRoot.children, {
                    duration: Se ? .3 : 0,
                    opacity: Se ? 1 : 0,
                    stagger: Se ? .15 : 0,
                    onComplete: () => {
                        Se || Je()
                    }
                })
            }, [Se]), (0, pe.d4)(() => {
                !ee.cards || F([...ee.cards.map(be => {
                    const {quality: ze, rarity: rt} = be, ft = ds[`${os(ze - 1)}__${rt}`];
                    return ft ? new xs.Howl({src: [`${ft}.ogg`, `${ft}.mp3`]}) : {
                        play: () => {
                        }, id: `${os(ze)}__${rt}`
                    }
                })])
            }, [ee]), (0, pe.d4)(() => () => Je(), []);
            const Je = () => {
                ut.p8.set([this.shadowRoot.querySelectorAll(".cardWrapper"), this.shadowRoot.children], {clearProps: "all"})
            }, Dt = be => {
                V({type: j, payload: be});
                const ze = this.shadowRoot.querySelectorAll(".perspectiveWrapper")[be].querySelector(".cardWrapper"),
                    rt = ze.querySelector(".cardWrapper__frontFace__bloom"), ft = !!pt[be];
                ft || g[be].play(), ut.p8.killTweensOf([rt, ze]), ut.p8.set([rt], {clearProps: "all"});
                const Ht = ut.p8.timeline({paused: !0}),
                    it = ut.p8.timeline({repeat: -1, repeatDelay: 1, delay: 1, yoyo: !0, paused: !0});
                it.to(rt, {duration: 1.2, filter: "brightness(1.5)"}).to(rt, {
                    duration: 1.2,
                    filter: "brightness(1)"
                }), Ht.to(ze, {duration: .4, rotateY: ft ? 0 : 180, ease: "power2.inOut"}).to(rt, {
                    duration: .7,
                    opacity: 1,
                    scale: 1.04,
                    ease: "power2.inOut"
                }, "-=0.2").to(rt, {
                    duration: .4,
                    opacity: .78,
                    scale: .88,
                    ease: "power2.inOut"
                }).add(it.play(), "loopingBloom"), Ht.play()
            };
            return ve.dy`
    ${ee.raffleTickets ? ve.dy`
          <div
            class=${(0, Pe.$)({raffleTicketsArea: !0, "raffleTicketsArea--opened": ot})}
          >
            <div
              class=${(0, Pe.$)({raffleTicketsArea__dropdown: !0})}
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

                <h3 class="raffleTicketsArea__dropdown__inner__value">${ee.raffleTickets}</h3>
              </div>
            </div>
            <picture class="raffleTicketsArea__ticketImage" @click=${() => V({type: $e})}>
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
    ${ee.cards ? ee.cards.map((be, ze) => ve.dy`
            <div class="perspectiveWrapper">
              <div class=${(0, Pe.$)({cardWrapper: !0})} @click=${() => Dt(ze)}>
                <div class="cardWrapper__frontFace">
                  <i class="cardWrapper__frontFace__bloom cardWrapper__frontFace__bloom--${be.rarity}"></i>
                  <gu-card-picture
                    protoId=${be.proto}
                    quality=${be.quality}
                    class="cardWrapper__frontFace__card"
                  ></gu-card-picture>

                  ${null}
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
          `) : null}
  `
        }, props: {properties: {volume: {type: Number}}, styles: ss}
    }));
    var us = s(92436), Gs = s(71459), Ns = s.n(Gs), Xt = s(63082), Ps = s.n(Xt), Ss = s(65171);
    const Tt = ve.iv`
  ${(0, de.asCssProp)((0, de.setBoxSizing)())}

  :host {
    height: calc(100vh - var(--headerAreaHeight));
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
  }

  .videoAspectRatio {
    margin: auto;
    position: relative;
    padding-bottom: 56.25%;
    width: 100%;
  }
  
  .open-pack-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    text-transform: uppercase;
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
    ${(0, de.asCssProp)(Z.uifx.userSelect("none"))};
  }

  .packOpenVideo {
    ${(0, de.asCssProp)(Z.animation.standardTransition("opacity"))};
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
    ${(0, de.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .draggablePack--touchable {
    ${(0, de.asCssProp)((0, Be.userSelect)("auto"))};
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
    filter: drop-shadow(0 0 calc(var(--ch) * 5) rgba(${(0, de.asCssProp)((0, Ss.hexToCssRgbString)(Z.colors.black))}, 0.6));
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
    ${(0, de.asCssProp)((0, Be.userSelect)("none"))};
    ${(0, de.asCssProp)(Z.animation.slowTransition("height"))};
    transition-property: height, transform;
  }

  .unlockedPackItems__raffleTicketsArea--opened {
    height: calc(var(--ch) * (15 + 17.3));
  }

  .unlockedPackItems__raffleTicketsArea__dropdown {
    position: absolute;
    background: ${(0, de.asCssProp)(Z.gradients.gold.simple("bottom"))};
    padding: 3px;
    width: 68%;
    height: calc(var(--ch) * 17.3);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    ${(0, de.asCssProp)((0, de.drawBottomHexShapePolygonMask)("calc(var(--ch) * 4)"))};
    ${(0, de.asCssProp)(Z.animation.slowTransition("opacity"))};
  }

  .unlockedPackItems__raffleTicketsArea--opened .unlockedPackItems__raffleTicketsArea__dropdown {
    opacity: 1;
  }

  .unlockedPackItems__raffleTicketsArea__dropdown__inner {
    width: 100%;
    height: 100%;
    background: ${(0, de.asCssProp)(Z.colors.gunmetal[900])};
    ${(0, de.asCssProp)((0, de.drawBottomHexShapePolygonMask)("calc(var(--ch) * 3.9)"))};
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
    font-family: ${(0, de.asCssProp)(Z.typography.headingFont)};
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
    ${(0, de.asCssProp)((0, Be.userSelect)("none"))};
    ${(0, de.asCssProp)(Z.animation.slowTransition("transform"))};
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
    ${(0, de.asCssProp)((0, Be.userSelect)("auto"))};
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
    ${(0, de.asCssProp)((0, Be.userSelect)("auto"))};
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
    customElements.define("gu-temple-view-layer", (0, J.x1)({
        renderer: function ws({
                                  unOpenedPacks: S = [],
                                  unOpenedChests: V = [],
                                  volume: g = .9,
                                  headerAreaHeight: F = Z.measurements.standardHeaderHeight
                              }) {
            const ee = (0, pe.sO)(null), Se = (0, pe.sO)(null), ot = (0, pe.sO)(null), pt = (0, pe.sO)(null),
                Je = (0, pe.sO)(null), Dt = (0, pe.sO)(null), be = (0, J.I0)(L), {
                    openPackVideoId: ze,
                    openPackVideoVisible: rt,
                    firstPackCardsVisible: ft,
                    flippedCards: Ht,
                    packImageVisible: it,
                    currentOpenPack: at,
                    openPackVideoLoading: Vt,
                    openPackVideoPlaying: b
                } = (0, J.v9)({
                    store: L,
                    selector: Te => ({
                        openPackVideoId: Te.openPackVideoId,
                        openPackVideoVisible: Te.openPackVideoVisible,
                        firstPackCardsVisible: Te.firstPackCardsVisible,
                        flippedCards: Te.flippedCards,
                        packImageVisible: Te.packImageVisible,
                        currentOpenPack: Te.currentOpenPack,
                        openPackVideoLoading: Te.openPackVideoLoading,
                        openPackVideoPlaying: Te.openPackVideoPlaying
                    })
                });
            (0, pe.d4)(() => {
                this.style.setProperty("--headerAreaHeight", `${F}px`)
            }, [F]), (0, pe.d4)(() => {
                this.openPackVideoLoading = Vt
            }, [Vt]), (0, pe.d4)(() => (Ke.observe(Je.current), () => {
                Ke.unobserve(Je.current), p(), Ce()
            }), []);
            const B = () => {
                p(), this.gestureControl = new (Ns())(Se.current, {
                    sensitivity: 0,
                    passive: !1,
                    capture: !0,
                    startDirectionLoopCount: 1
                }), this.gestureControl.on("pan.prestart", M), this.gestureControl.on("pan.start", H), this.gestureControl.on("pan.all", ge), this.gestureControl.on("pan.end", Fe)
            }, p = () => {
                this.gestureControl && (this.gestureControl.removeListener("pan.prestart", M), this.gestureControl.removeListener("pan.start", H), this.gestureControl.removeListener("pan.all", ge), this.gestureControl.removeListener("pan.end", Fe), this.gestureControl.destroy(), this.gestureControl = null)
            };
            (0, pe.d4)(() => {
                if (!at.set) return void p();
                B();
                let Te = X[`pack-open-videos-720p ${at.set}--${at.god}--${at.rarity}`];
                Te || (Te = X["pack-open-videos-720p core--neutral--rare"]), be((S => ({type: _e, payload: S}))(Te))
            }, [at]), (0, pe.d4)(() => {
                !at.set && S.length && be(xt(S))
            }, [S]);
            const M = Te => {
                    Te.sourceEvent.preventDefault()
                }, H = Te => {
                    this.terminatedPan = !1, ut.p8.set(ee.current, {x: 0, y: 0})
                }, ge = ({deltaX: Te, deltaY: Qt, sourceEvent: es}) => {
                    if (Xe(), K.dz.checkOutOfBounds({
                        x: es.pageX,
                        y: es.pageY,
                        width: this.dimensions.width,
                        height: this.dimensions.height,
                        top: this.dimensions.top,
                        left: this.dimensions.left,
                        tolerance: 20
                    })) return this.terminatedPan = !0, Fe({});
                    this.terminatedPan || ut.p8.set(ee.current, {
                        x: this.openPackVideoLoading ? .2 * Te : Te,
                        y: this.openPackVideoLoading ? .2 * Qt : Qt
                    })
                }, Fe = Te => {
                    ut.p8.to(ee.current, this.draggablePackIsIntersecting && !this.openPackVideoLoading ? {
                        rotation: -1,
                        x: 37.2 * this.dimensions.cw + "px",
                        y: -25 * this.dimensions.ch + "px",
                        onComplete: () => Lt(),
                        duration: .3
                    } : {duration: .3, x: 0, y: 0})
                }, Xe = Ps()(() => {
                    this.draggablePackIsIntersecting = function rs(S, V) {
                        let g = !1;
                        return S && V && (g = !(S.right < V.left || S.left > V.right || S.bottom < V.top || S.top > V.bottom)), g
                    }(ee.current.getBoundingClientRect(), this.dragTargetRectangle)
                }, 50), Ke = new us.do(Te => {
                    Te.forEach(Qt => kt())
                }), kt = Ps()(() => {
                    const Te = Je.current.getBoundingClientRect();
                    this.dimensions = {
                        ch: .01 * Je.current.offsetHeight,
                        cw: .01 * Je.current.offsetWidth,
                        width: Te.width,
                        height: Te.height,
                        top: Te.top,
                        left: Te.left
                    }, this.style.setProperty("--cw", `${this.dimensions.cw}px`), this.style.setProperty("--ch", `${this.dimensions.ch}px`), this.dragTargetRectangle = Dt.current.getBoundingClientRect()
                }, 500), Lt = () => {
                    be({
                        type: se,
                        payload: !0
                    }), this.dispatchEvent(new CustomEvent("onPackOpened", {detail: {pack: at}})), ot.current.playVideo(), be(U(!0))
                }, Ce = () => {
                    console.log("RESET TEMPLE CODE"), be({type: Ve}), ut.p8.set(ee.current, {clearProps: "all"})
                }, wt = it, Ut = !at.set || Object.keys(Ht).length === at.cards.length,
                Ft = Ut && !S.length;
            const fillColorMap = {common: '#bcbcbc', rare: '#26b1fb', epic: '#971ded', legendary: '#f9c123'};
            return ve.dy`
    <div class="videoAspectRatio" ?domRef=${(0, ye.Q)(Je)}>
      <img class="videoAspectRatio__img" alt="ratio image" src="/assets/images/ratio-images/16-x-9-ratio.png" />
        ${at && at.rarity ? ve.dy`
            <gu-heading-text class="open-pack-header" fillcolor="${fillColorMap[at.rarity] ?? fillColorMap.common}" size="large">${at.rarity} pack</gu-heading-text>
        ` : null}

      <gu-temple-pack-card-listing></gu-temple-pack-card-listing>

      <div
        class=${(0, Pe.$)({ctasArea: !0})}
      >
        ${Ft ? ve.dy`
              <gu-primary-hex-button
                size="large"
                href=${`/#/${v.gv.routeContent({}).home.path}`}
                class="ctasArea__cta ctasArea__cta--buyPacksCta"
              >
                Play to unlock
              </gu-primary-hex-button>
            ` : null}
        ${S.length ? ve.dy`
              <gu-primary-hex-button size="large" @click=${() => {
                ut.p8.set(ee.current, {clearProps: "all"});
                be({type: oe});
                Lt();
                be(U(!1));
                be({type: ze, payload: !0});
            }} class="ctasArea__cta">
                Open Pack
              </gu-primary-hex-button>
              <gu-vertical-space top="large">
                <gu-heading-text size="2x-small" align="center"> ${S.length - 1} packs left </gu-heading-text>
              </gu-vertical-space>
            ` : null}
      </div>

      ${it ? ve.dy` <gu-temple-chest-layer .unOpenedChests=${V} .volume=${g}></gu-temple-chest-layer> ` : null}
      ${at.set ? ve.dy`
            <gu-card-pack-picture
              type="temple"
              set=${at.set}
              god=${at.god}
              rarity=${at.rarity}
              class=${(0, Pe.$)({
                draggablePack: !0,
                "draggablePack--visible": it && !rt,
                "draggablePack--disabled": wt,
                "draggablePack--touchable": this.isIos
            })}
              ?domRef=${(0, ye.Q)(ee)}
              @click=${() => !!this.isIos && Lt()}
            ></gu-card-pack-picture>
            ${ft ? null : ve.dy`<i class="draggablePackHitzone" ?domRef=${(0, ye.Q)(Se)}></i>`}
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
            }, styles: Tt
        }
    }));
    var Es = s(4390), Bt = s(8929), zt = s(7625), ps = s(61709), ns = s(24850), is = s(11735), At = s(28510);
    let gs = (() => {
        class S {
            constructor(g, F, ee) {
                this.environment = g, this.router = F, this.modalService = ee
            }

            ngOnInit() {
            }

            onBuyPacks() {
                this.closeModal(), "website" === this.environment.clientType ? this.router.navigate([v.CF.J.buyPacks.path]) : window.open(v.gv.routeContent(this.environment).buyPacks.url)
            }

            closeModal() {
                this.modalService.dismissAll()
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(r.Ho), t.Y36(is.F0), t.Y36(At.Qz))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-temple-chest-opened-modal"]],
            inputs: {transactionUrl: "transactionUrl"},
            decls: 16,
            vars: 1,
            consts: [["bottom", "2x-large"], ["size", "small", "fillGradient", "gradients.gold.simple"], ["fillColor", "colors.light.100", "align", "center"], ["both", "2x-large"], ["kind", "tag", "target", "_blank", "fillColor", "colors.apocyan.300", 3, "href"], ["top", "2x-large"], ["size", "large", 3, "click"], ["iconLigature", "close_x", "fillColor", "colors.apocyan.300", 1, "xButton", 3, "click"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "gu-vertical-space", 0)(1, "gu-heading-text", 1), t._uU(2, " Chest opened! "), t.qZA()(), t.TgZ(3, "gu-paragraph-text", 2), t._uU(4, " Opening a chest grants you 5 packs of the corresponding quality. Once you open a chest, the packs have to be created on the blockchain, and sent to you. "), t.TgZ(5, "strong"), t._uU(6, "This can take a few minutes to complete."), t.qZA()(), t.TgZ(7, "gu-vertical-space", 3)(8, "gu-simple-text-button", 4), t._uU(9, " you can check the status of your transaction here "), t.qZA()(), t.TgZ(10, "gu-paragraph-text", 2), t._uU(11, " When the transaction is complete, your new packs will show up in the temple.\n"), t.qZA(), t.TgZ(12, "gu-vertical-space", 5)(13, "gu-primary-hex-button", 6), t.NdJ("click", function () {
                    return F.onBuyPacks()
                }), t._uU(14, " BUY "), t.qZA()(), t.TgZ(15, "gu-icon", 7), t.NdJ("click", function () {
                    return F.closeModal()
                }), t.qZA()), 2 & g && (t.xp6(8), t.s9C("href", F.transactionUrl))
            },
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0F1B27;width:100%;min-width:60vh;max-width:75vw;min-height:40vh;padding:40px;text-align:center;position:relative;box-shadow:inset 0 0 0 2px #3d5a7480}.xButton[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;font-size:28px;cursor:pointer}.xButton[_ngcontent-%COMP%]:hover{color:#f6f6f6}"]
        }), S
    })();
    var as = s(51395), _t = s(49002);
    const St = ["viewLayer"];
    let Os = (() => {
        class S {
            constructor(g, F, ee, Se, ot, pt, Je, Dt, be) {
                this.environment = g, this.packService = F, this.chestService = ee, this.router = Se, this.ngZone = ot, this.ethService = pt, this.modalService = Je, this.audioService = Dt, this.navigationStateService = be, this.unopenedChests = [], this.unopenedPacks = [], this.unsubscribe = new Bt.xQ, this.volumeSetting = 1, this.currentWalletAddress = ""
            }

            ngOnInit() {
                this.initPacks(), this.initAudio(), "website" === this.environment.clientType && this.initChests()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            initAudio() {
                this.audioService.currentVolume$.pipe((0, zt.R)(this.unsubscribe)).subscribe(g => {
                    this.volumeSetting = g
                })
            }

            initPacks() {
                this.packService.fetchUnopenedPacks(), this.packService.unopenedPacks$.pipe((0, zt.R)(this.unsubscribe), (0, ps.VS)(g => this.packService.updateScarcityAndRarity$(g))).subscribe(g => {
                    console.log("TempleRoute->initPacks() packs", g), this.unopenedPacks = g
                })
            }

            initChests() {
                this.chestService.fetchChests(), this.chestService.chests$.pipe((0, zt.R)(this.unsubscribe), (0, ns.U)(g => this.formatChests(g))).subscribe(g => {
                    this.unopenedChests = g, console.log("TempleRoute->initChests() chests", g)
                })
            }

            formatChests(g) {
                console.log("TempleRoute->formatChests() tps", g);
                let F = [];
                return g.forEach(ee => {
                    F = [...F, ...Array.from(Array(ee.amount)).map(Se => ({
                        rarity: ee.rarity,
                        set: ee.set,
                        type: ee.type
                    }))]
                }), F
            }

            onPackOpened(g) {
                console.log("TempleRoute->onOpenPack() opening pack", g.detail.pack), this.packService.openPack$(g.detail.pack).pipe((0, $.q)(1)).subscribe(F => {
                    console.log("TempleRoute->onOpenPack() pack opened!!!", g.detail.pack)
                })
            }

            onChestOpened(g) {
                this.chestService.open(g.detail.type, 1).pipe((0, $.q)(1)).subscribe(ee => {
                    console.log("TempleRoute->onChestOpened() Chest Opened!!!!!!! p ", ee), this.showChestOpenedModal(this.etherscanUrl(ee.hash))
                })
            }

            etherscanUrl(g) {
                return `https://${this.environment.production ? "" : "ropsten."}etherscan.io/tx/${g}`
            }

            onBuyPacks() {
                "website" === this.environment.clientType ? this.router.navigate([v.CF.J.buyPacks.path]) : (0, Es.rb)({url: v.gv.routeContent(this.environment).buyPacks.url})
            }

            showChestOpenedModal(g) {
                this.modalService.open(gs, {
                    defaultStylings: !1,
                    centered: !0,
                    scrollable: !1
                }).componentInstance.transactionUrl = g
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(r.Ho), t.Y36(as.F), t.Y36(as.W), t.Y36(is.F0), t.Y36(t.R0b), t.Y36(r.ux), t.Y36(At.Qz), t.Y36(r.pk), t.Y36(_t.fY))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-temple"]],
            viewQuery: function (g, F) {
                if (1 & g && t.Gf(St, 7), 2 & g) {
                    let ee;
                    t.iGM(ee = t.CRH()) && (F.viewLayerDom = ee.first)
                }
            },
            decls: 4,
            vars: 4,
            consts: [[3, "headerAreaHeight", "unOpenedPacks", "unOpenedChests", "volume", "onPackOpened", "onChestOpened", "onBuyPacks"], ["viewLayer", ""]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "gu-temple-view-layer", 0, 1), t.NdJ("onPackOpened", function (Se) {
                    return F.onPackOpened(Se)
                })("onChestOpened", function (Se) {
                    return F.onChestOpened(Se)
                })("onBuyPacks", function () {
                    return F.onBuyPacks()
                }), t.qZA(), t.TgZ(2, "gu-temple-overlay-layer"), t._uU(3, " Your screen is too puny for such a mighty prize. Please expand your browser window or use a larger device such as a laptop or PC.\n"), t.qZA()), 2 & g && t.Q6J("headerAreaHeight", F.navigationStateService.dataStore.headerAreaHeight)("unOpenedPacks", F.unopenedPacks)("unOpenedChests", F.unopenedChests)("volume", F.volumeSetting)
            },
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}"]
        }), S
    })();
    var Ws = s(61715), Ms = s(98723);

    function ls(S, V) {
        if (1 & S && (t.TgZ(0, "gu-paragraph-text", 10), t._uU(1, " Buy "), t.TgZ(2, "strong"), t._uU(3), t.qZA(), t._uU(4, " for "), t.TgZ(5, "span", 11), t._uU(6), t.qZA(), t._UZ(7, "gu-icon", 12), t._uU(8, "? "), t.qZA()), 2 & S) {
            const g = t.oxw();
            t.xp6(3), t.Oqu(g.storeItem.item_name), t.xp6(3), t.hij("", g.storeItem.value, " ")
        }
    }

    function zs(S, V) {
        if (1 & S && t._UZ(0, "gu-paragraph-text", 13), 2 & S) {
            const g = t.oxw();
            t.Q6J("innerHTML", g.descriptionText, t.oJD)
        }
    }

    function hs(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "gu-paragraph-text", 10), t._uU(1, " Great choice! "), t.TgZ(2, "strong"), t._uU(3), t.qZA(), t._uU(4, " has been added to your "), t.TgZ(5, "span")(6, "gu-simple-text-button", 14), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().goToCollections()
            }), t._uU(7, " Collections "), t.qZA()(), t._uU(8, ". "), t.qZA()
        }
        if (2 & S) {
            const g = t.oxw();
            t.xp6(3), t.Oqu(g.storeItem.item_name)
        }
    }

    function Zt(S, V) {
        if (1 & S && (t.TgZ(0, "gu-vertical-space", 15)(1, "picture", 16), t._UZ(2, "source", 17)(3, "img", 18), t.qZA()()), 2 & S) {
            const g = t.oxw();
            t.xp6(2), t.Q6J("srcset", g.storeItem.image_url, t.LSH), t.xp6(1), t.Q6J("src", g.storeItem.image_url, t.LSH)
        }
    }

    function $s(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.ynx(0), t.TgZ(1, "gu-primary-hex-button", 19), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().exit()
            }), t.qZA(), t.BQk()
        }
    }

    function ms(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "gu-secondary-hex-button", 20), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().back()
            }), t.qZA(), t.TgZ(1, "gu-primary-hex-button", 21), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().buyNow()
            }), t.qZA()
        }
        if (2 & S) {
            const g = t.oxw();
            t.xp6(1), t.Q6J("disabled", g.awaitingPurchaseRes)
        }
    }

    let Ts = (() => {
        class S {
            constructor(g, F, ee, Se, ot) {
                this.activeModal = g, this.router = F, this.environment = ee, this.akuma = Se, this.starsService = ot, this.stage = "confirm", this.awaitingPurchaseRes = !1, this.buyNowEvent$ = new t.vpe
            }

            ngOnInit() {
                this.setStage(this.stage)
            }

            setStage(g) {
                switch (this.stage = g, g) {
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
                const g = this.starsService.getScreenOrder(this.storeItem);
                this.akuma.postEvent("Screen", "starstoreInsufficientFunds_opened", g), "function" == typeof gtag && gtag("event", "_purchaseStarstore_failed", g), this.akuma.postEvent("Flow", "_purchaseStarstore_failed", g)
            }

            logSuccess() {
                const g = this.starsService.getScreenOrder(this.storeItem);
                this.akuma.postEvent("Screen", "starstoreSuccessPurchase_opened", g), this.akuma.postEvent("Flow", "_purchaseStarstore_succeeded", g), "function" == typeof gtag && gtag("event", "_purchaseStarstore_succeeded", g)
            }

            goToCollections() {
                this.akuma.postEvent("Control", "starstoreSuccessPurchaseCollectionsLnk_pressed"), "website" === this.environment.clientType ? this.router.navigate(["/collections"]) : "desktop" === this.environment.clientType && this.router.navigate(["/game/gu/inventory"]), this.exit()
            }

            startsWithThe(g) {
                return "the" === g.slice(0, 3).toLowerCase()
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

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(At.mX), t.Y36(is.F0), t.Y36(r.Ho), t.Y36(_t.jt), t.Y36(_t.cM))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-star-store-buy-modal"]],
            inputs: {stage: "stage", storeItem: "storeItem", awaitingPurchaseRes: "awaitingPurchaseRes"},
            outputs: {buyNowEvent$: "buyNowEvent$"},
            decls: 13,
            vars: 7,
            consts: [["goldBorder", "top"], ["top", "2x-large", 1, "headerSection"], ["size", "small", "fillGradient", "gradients.gold.simple", "align", "center"], ["top", "small", "bottom", "large", 1, "descriptionSection"], ["kind", "small", "align", "center", "fillColor", "colors.light.100", 4, "ngIf"], ["kind", "small", "align", "center", "fillColor", "colors.light.100", 3, "innerHTML", 4, "ngIf"], ["class", "imageSection", 4, "ngIf"], ["top", "large", "bottom", "2x-large", 1, "ctaSection"], [4, "ngIf", "ngIfElse"], ["confirmSection", ""], ["kind", "small", "align", "center", "fillColor", "colors.light.100"], [1, "descriptionSection__price"], ["iconLigature", "collectable_stars", "fillGradientTarget", "top", "fillGradient", "gradients.apocyan.simple", 1, "descriptionSection__icon"], ["kind", "small", "align", "center", "fillColor", "colors.light.100", 3, "innerHTML"], ["fillColor", "colors.gunmetal.300", 3, "click"], [1, "imageSection"], [1, "imageSection__picture"], ["type", "image/jpg", 3, "srcset"], [1, "imageSection__picture__img", 3, "src"], ["size", "large", "text", "OKAY", 1, "ctaSection__primary", 3, "click"], ["size", "large", "text", "BACK", 1, "ctaSection__secondary", 3, "click"], ["size", "large", "text", "BUY NOW", 1, "ctaSection__primary", 3, "disabled", "click"]],
            template: function (g, F) {
                if (1 & g && (t._UZ(0, "gu-modal-background", 0), t.TgZ(1, "gu-vertical-space", 1)(2, "gu-heading-text", 2), t._uU(3), t.qZA()(), t.TgZ(4, "gu-vertical-space", 3), t.YNc(5, ls, 9, 2, "gu-paragraph-text", 4), t.YNc(6, zs, 1, 1, "gu-paragraph-text", 5), t.YNc(7, hs, 9, 1, "gu-paragraph-text", 4), t.qZA(), t.YNc(8, Zt, 4, 2, "gu-vertical-space", 6), t.TgZ(9, "gu-vertical-space", 7), t.YNc(10, $s, 2, 0, "ng-container", 8), t.YNc(11, ms, 2, 1, "ng-template", null, 9, t.W1O), t.qZA()), 2 & g) {
                    const ee = t.MAs(12);
                    t.xp6(3), t.hij(" ", F.headingText, " "), t.xp6(2), t.Q6J("ngIf", "confirm" === F.stage), t.xp6(1), t.Q6J("ngIf", "failure" === F.stage), t.xp6(1), t.Q6J("ngIf", "success" === F.stage), t.xp6(1), t.Q6J("ngIf", "confirm" === F.stage), t.xp6(2), t.Q6J("ngIf", "confirm" !== F.stage)("ngIfElse", ee)
                }
            },
            directives: [l.O5],
            styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:520px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.descriptionSection__price[_ngcontent-%COMP%]{color:var(--gu-blue)}.descriptionSection__icon[_ngcontent-%COMP%]{display:inline-flex}.imageSection[_ngcontent-%COMP%]{display:flex;justify-content:center}.imageSection__picture__img[_ngcontent-%COMP%]{width:280px;max-width:70vw}.ctaSection[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.ctaSection[_ngcontent-%COMP%]   gu-primary-hex-button[_ngcontent-%COMP%]:nth-child(2){margin-left:20px}"]
        }), S
    })(), _s = (() => {
        class S {
            constructor(g, F) {
                this.activeModal = g, this.akuma = F
            }

            ngOnInit() {
                this.akuma.postEvent("Screen", "starstoreInfo_opened")
            }

            exit() {
                this.activeModal.close()
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(At.mX), t.Y36(_t.jt))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-star-store-more-info-modal"]],
            inputs: {imageUrl: "imageUrl", name: "name", description: "description"},
            decls: 12,
            vars: 4,
            consts: [["iconLigature", "close_x", "fillColor", "colors.apocyan.300", 1, "closeIcon", 3, "click"], ["top", "x-large", 1, "imageSection"], [1, "imageSection__picture"], ["type", "image/jpg", 3, "srcset"], [1, "imageSection__picture__img", 3, "src"], ["both", "large"], ["size", "x-small", "fillColor", "colors.light.100", "align", "center"], ["bottom", "x-large"], ["kind", "small", "align", "center", "fillColor", "colors.light.100"]],
            template: function (g, F) {
                1 & g && (t._UZ(0, "gu-modal-background"), t.TgZ(1, "gu-icon", 0), t.NdJ("click", function () {
                    return F.exit()
                }), t.qZA(), t.TgZ(2, "gu-vertical-space", 1)(3, "picture", 2), t._UZ(4, "source", 3)(5, "img", 4), t.qZA()(), t.TgZ(6, "gu-vertical-space", 5)(7, "gu-heading-text", 6), t._uU(8), t.qZA()(), t.TgZ(9, "gu-vertical-space", 7)(10, "gu-paragraph-text", 8), t._uU(11), t.qZA()()), 2 & g && (t.xp6(4), t.Q6J("srcset", F.imageUrl, t.LSH), t.xp6(1), t.Q6J("src", F.imageUrl, t.LSH), t.xp6(3), t.hij(" ", F.name, " "), t.xp6(3), t.hij(" ", F.description, " "))
            },
            styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:520px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.imageSection[_ngcontent-%COMP%]{display:flex;justify-content:center}.imageSection__picture__img[_ngcontent-%COMP%]{max-width:100%}.closeIcon[_ngcontent-%COMP%]{position:absolute!important;top:0;right:0;margin:14px 16px;font-size:20px;cursor:pointer}"]
        }), S
    })();

    function qt(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "gu-star-store-sale-item", 14), t.NdJ("onBuyItem", function () {
                t.CHM(g);
                const ee = t.oxw().$implicit;
                return t.oxw(2).showBuyItem(ee)
            })("onMoreInfo", function () {
                t.CHM(g);
                const ee = t.oxw().$implicit;
                return t.oxw(2).showMoreInfo(ee)
            }), t.qZA()
        }
        if (2 & S) {
            const g = t.oxw().$implicit;
            t.Q6J("price", g.value)("imageUrl", g.image_url)("name", g.item_name)("durationType", g.label)("endTimestamp", g.end_timestamp)("title", g.title)
        }
    }

    function js(S, V) {
        if (1 & S && (t.ynx(0), t.YNc(1, qt, 1, 6, "gu-star-store-sale-item", 13), t.BQk()), 2 & S) {
            const g = V.$implicit, F = t.oxw(2);
            t.xp6(1), t.Q6J("ngIf", F.isCurrentItem(g))
        }
    }

    function As(S, V) {
        if (1 & S && (t.ynx(0), t.TgZ(1, "div", 7)(2, "gu-vertical-space", 8)(3, "gu-heading-text", 9), t._uU(4, " Welcome to the Star Store "), t.qZA(), t.TgZ(5, "gu-paragraph-text", 10), t._uU(6, " Exchange your Stars for some awesome items. "), t._UZ(7, "br"), t._uU(8, " Availability and prices are subject to change. "), t.qZA()(), t.TgZ(9, "gu-vertical-space", 11), t.YNc(10, js, 2, 1, "ng-container", 12), t.qZA()(), t.BQk()), 2 & S) {
            const g = t.oxw();
            t.xp6(10), t.Q6J("ngForOf", g.storeItems)
        }
    }

    function Is(S, V) {
        1 & S && (t.TgZ(0, "div", 15)(1, "gu-heading-text", 9), t._uU(2, " the Star Store is Restocking "), t.qZA(), t.TgZ(3, "gu-paragraph-text", 10), t._uU(4, " We are currently out of stock! Please check back at a later time. "), t.qZA()())
    }

    let Hs = (() => {
        class S {
            constructor(g, F, ee) {
                this.modalService = g, this.starsService = F, this.akuma = ee, this.storeItems = [], this.currentEpochTime = this.timeNowEpoch(), this.currentItemsToDisplay = !0, this.unsubscribe = new Bt.xQ
            }

            ngOnInit() {
                this.initStoreItems(), this.initTimestampCheck()
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            initTimestampCheck() {
                (0, Ws.F)(1e3).pipe((0, zt.R)(this.unsubscribe)).subscribe(g => {
                    this.currentEpochTime = this.timeNowEpoch(), this.checkForCurrentItems()
                })
            }

            checkForCurrentItems() {
                this.currentItemsToDisplay = this.storeItems.some(g => this.isCurrentItem(g))
            }

            timeNowEpoch() {
                return (new Date).getTime()
            }

            isCurrentItem(g) {
                return g.end_timestamp_epoch > this.currentEpochTime && g.start_timestamp_epoch < this.currentEpochTime
            }

            initStoreItems() {
                this.starsService.fetchStarStoreItems$().pipe((0, $.q)(1)).subscribe(g => {
                    this.storeItems = g, this.scheduleRefresh(g), this.checkForCurrentItems(), (!g || 0 === g.length || !this.currentItemsToDisplay) && this.akuma.postEvent("Screen", "starstoreEmpty_opened"), this.logStarStoreOpened(), console.log("StarStoreRoute->initStoreItems()", this.storeItems)
                })
            }

            scheduleRefresh(g) {
                const F = Date.now(),
                    ee = g.reduce((ot, pt) => ot.end_timestamp_epoch < pt.end_timestamp_epoch ? ot : pt);
                if (!ee) return;
                const Se = ee.end_timestamp_epoch + 1e3 - F;
                Se < 0 || (0, Ms.H)(Se).pipe((0, zt.R)(this.unsubscribe), (0, $.q)(1)).subscribe(ot => {
                    this.initStoreItems()
                })
            }

            logStarStoreOpened() {
                const g = {};
                this.storeItems.forEach((F, ee) => {
                    g[`item_${ee + 1}`] = F
                }), this.akuma.postEvent("Screen", "starstoreHome_opened", g)
            }

            logBuyButton(g) {
                this.akuma.postEvent("Control", "starstoreHomeBuyBtn_pressed", this.starsService.getScreenOrder(g)), this.akuma.postEvent("Flow", "_purchaseStarstore_started", this.starsService.getScreenOrder(g)), "function" == typeof gtag && gtag("event", "_purchaseStarstore_started", this.starsService.getScreenOrder(g))
            }

            showBuyItem(g) {
                this.logBuyButton(g), this.modalService.hasOpenModals() && this.modalService.dismissAll(), this.openedModal$ && this.openedModal$.unsubscribe();
                const ee = this.modalService.open(Ts, {defaultStylings: !1, centered: !0}).componentInstance;
                ee.storeItem = g, this.openedModal$ = ee.buyNowEvent$.pipe((0, $.q)(1), (0, ps.VS)(Se => (ee.awaitingPurchaseRes = !0, this.handleBuyNow$(Se)))).subscribe(Se => {
                    ee.awaitingPurchaseRes = !1, ee.setStage(Se ? "success" : "failure")
                })
            }

            showMoreInfo(g) {
                this.akuma.postEvent("Control", "starstoreHomeTipBtn_pressed", this.starsService.getScreenOrder(g)), this.modalService.hasOpenModals() && this.modalService.dismissAll();
                const ee = this.modalService.open(_s, {defaultStylings: !1, centered: !0}).componentInstance;
                ee.name = g.item_name, ee.description = g.item_description, ee.imageUrl = g.image_url
            }

            handleBuyNow$(g) {
                return this.starsService.purchaseItem$(g.asset_group, g.value).pipe((0, $.q)(1), (0, ns.U)(F => (console.log("StarStoreRoute->handleBuyNow$", F), !(F && F.error))))
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(At.Qz), t.Y36(_t.cM), t.Y36(_t.jt))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-star-store-route"]],
            decls: 8,
            vars: 2,
            consts: [[1, "background"], [1, "background__picture"], ["srcset", "\n        /assets/images/misc-art/misc-art--star-store@1x.webp 2284w,\n        /assets/images/misc-art/misc-art--star-store@1x.webp 1714w,\n        /assets/images/misc-art/misc-art--star-store@1x.webp 1142w,\n        /assets/images/misc-art/misc-art--star-store@1x.webp  572w\n      ", "type", "image/webp"], ["srcset", "\n        /assets/images/misc-art/misc-art--star-store@1x.jpg 2284w,\n        /assets/images/misc-art/misc-art--star-store@1x.jpg 1714w,\n        /assets/images/misc-art/misc-art--star-store@1x.jpg 1142w,\n        /assets/images/misc-art/misc-art--star-store@1x.jpg  572w\n      ", "type", "image/jpg"], ["src", "/assets/images/misc-art/misc-art--star-store@1x.jpg", "alt", "", 1, "background__picture__img"], [4, "ngIf", "ngIfElse"], ["emptyStateSection", ""], [1, "storeSection"], ["top", "x-large", 1, "storeSection__header"], ["size", "x-large", "fillGradient", "gradients.gold.simple", "align", "center"], ["kind", "large", "align", "center", "fillColor", "colors.light.100"], ["top", "x-large", 1, "storeSection__specials"], [4, "ngFor", "ngForOf"], ["class", "storeSection__specials__item", 3, "price", "imageUrl", "name", "durationType", "endTimestamp", "title", "onBuyItem", "onMoreInfo", 4, "ngIf"], [1, "storeSection__specials__item", 3, "price", "imageUrl", "name", "durationType", "endTimestamp", "title", "onBuyItem", "onMoreInfo"], [1, "emptyStateSection"]],
            template: function (g, F) {
                if (1 & g && (t.TgZ(0, "div", 0)(1, "picture", 1), t._UZ(2, "source", 2)(3, "source", 3)(4, "img", 4), t.qZA()(), t.YNc(5, As, 11, 1, "ng-container", 5), t.YNc(6, Is, 5, 0, "ng-template", null, 6, t.W1O)), 2 & g) {
                    const ee = t.MAs(7);
                    t.xp6(5), t.Q6J("ngIf", F.currentItemsToDisplay)("ngIfElse", ee)
                }
            },
            directives: [l.O5, l.sg],
            styles: ["[_nghost-%COMP%]{display: flex;flex-flow: column nowrap;align-items: center}.background[_ngcontent-%COMP%], .background__picture[_ngcontent-%COMP%]{display: none;}.storeSection[_ngcontent-%COMP%]{position: relative;overflow-y: auto;width: 100%}.storeSection__header[_ngcontent-%COMP%]{padding: 0 8px}.storeSection__header[_ngcontent-%COMP%] gu-paragraph-text[_ngcontent-%COMP%]{max-width: 630px;margin: auto}.storeSection__specials[_ngcontent-%COMP%]{display: flex;flex-wrap: wrap;justify-content: center}.emptyStateSection[_ngcontent-%COMP%]{position: relative;margin: auto}"]
        }), S
    })();

    function Ls(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "gu-secondary-hex-button", 7), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().secondaryCtaClick()
            }), t.qZA()
        }
        if (2 & S) {
            const g = t.oxw();
            t.Q6J("text", g.secondaryCtaText)
        }
    }

    function Js(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "gu-primary-hex-button", 7), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().primaryCtaClick()
            }), t.qZA()
        }
        if (2 & S) {
            const g = t.oxw();
            t.Q6J("text", g.primaryCtaText)
        }
    }

    s(52886), s(98590);
    let Us = (() => {
        class S {
            constructor(g) {
                this.activeModal = g, this.onPrimaryCtaClick = () => {
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

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(At.mX))
        }, S.\u0275cmp = t.Xpm({
            type: S,
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
            consts: [["goldBorder", "top"], ["top", "4x-large"], ["align", "center", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", "size", "small"], ["top", "large"], ["align", "center", "kind", "small", "fillColor", "colors.light.100", 1, "text"], ["top", "2x-large", "bottom", "4x-large", 1, "ctaSection"], ["class", "ctaSection__button", "size", "large", 3, "text", "click", 4, "ngIf"], ["size", "large", 1, "ctaSection__button", 3, "text", "click"]],
            template: function (g, F) {
                1 & g && (t._UZ(0, "gu-modal-background", 0), t.TgZ(1, "gu-vertical-space", 1)(2, "gu-heading-text", 2), t._uU(3), t.qZA()(), t.TgZ(4, "gu-vertical-space", 3)(5, "gu-paragraph-text", 4), t._uU(6), t.qZA()(), t.TgZ(7, "gu-vertical-space", 5), t.YNc(8, Ls, 1, 1, "gu-secondary-hex-button", 6), t.YNc(9, Js, 1, 1, "gu-primary-hex-button", 6), t.qZA()), 2 & g && (t.xp6(3), t.hij(" ", F.title, " "), t.xp6(3), t.hij(" ", F.text, " "), t.xp6(2), t.Q6J("ngIf", F.secondaryCtaText), t.xp6(1), t.Q6J("ngIf", F.primaryCtaText))
            },
            directives: [l.O5],
            styles: ["[_nghost-%COMP%]{position:relative;display:flex;flex-direction:column;padding:0 60px;align-items:center;max-width:100vw;width:640px}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{position:relative}.alertIcon[_ngcontent-%COMP%]{font-size:80px}.heading[_ngcontent-%COMP%]{text-transform:uppercase}.ctaSection[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.ctaSection__button[_ngcontent-%COMP%]{min-width:200px}.ctaSection__button[_ngcontent-%COMP%]:nth-child(2){margin-left:16px}"]
        }), S
    })();
    var fs = s(92198);

    function nt(S, V) {
        1 & S && t._UZ(0, "gu-icon", 3)
    }

    const Xs = function (S, V) {
        return {check__complete: S, check__unfinished: V}
    };
    let qs = (() => {
        class S {
            constructor() {
            }

            ngOnInit() {
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["tick-box"]],
            inputs: {finished: "finished"},
            decls: 3,
            vars: 5,
            consts: [[1, "check", 3, "ngClass"], [1, "check__box"], ["class", "checkmark", "iconLigature", "checkbox_tick", 4, "ngIf"], ["iconLigature", "checkbox_tick", 1, "checkmark"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "div", 0)(1, "div", 1), t.YNc(2, nt, 1, 0, "gu-icon", 2), t.qZA()()), 2 & g && (t.Q6J("ngClass", t.WLB(2, Xs, F.finished, !F.finished)), t.xp6(2), t.Q6J("ngIf", F.finished))
            },
            directives: [l.mk, l.O5],
            styles: [".check__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.check[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.check__text[_ngcontent-%COMP%]{font-weight:700;line-height:28px;padding-left:10px}.check__complete[_ngcontent-%COMP%]{color:#50bcff;border-color:#50bcff}.check__unfinished[_ngcontent-%COMP%]{color:#7192b0;border-color:#7192b0}.check__box[_ngcontent-%COMP%]{height:20px;width:20px;background:#0F1B27;border:2px solid #8BE1E0;box-sizing:border-box}.checkmark[_ngcontent-%COMP%]{color:#50bcff;display:flex;font-weight:700}"]
        }), S
    })();

    function eo(S, V) {
        if (1 & S && (t.TgZ(0, "tr")(1, "td"), t._uU(2), t.qZA(), t.TgZ(3, "td"), t._UZ(4, "tick-box", 21), t.qZA(), t.TgZ(5, "td"), t._UZ(6, "tick-box", 21), t.qZA(), t.TgZ(7, "td"), t._UZ(8, "tick-box", 21), t.qZA(), t.TgZ(9, "td"), t._uU(10), t.qZA()()), 2 & S) {
            const g = V.$implicit;
            t.xp6(2), t.Oqu(g.username), t.xp6(2), t.Q6J("finished", g.gu_account), t.xp6(2), t.Q6J("finished", g.coinbase_confirmed), t.xp6(2), t.Q6J("finished", g.game_played), t.xp6(2), t.Oqu(g.payment_status)
        }
    }

    const Rs = function () {
        return {breakpoint: "small", size: "large"}
    }, Bs = function (S) {
        return [S]
    };
    let Ze = (() => {
        class S {
            constructor(g, F, ee, Se) {
                this.activeModal = g, this.analyticsService = F, this.referralService = ee, this.authService = Se, this.unsubscribe = new Bt.xQ
            }

            openLink(g, F) {
                window.location.href = g
            }

            ngOnInit() {
                this.isUserSignedIn = !!this.authService.getUserId(), this.authService.account$.pipe((0, zt.R)(this.unsubscribe)).subscribe(g => {
                    this.isUserSignedIn = !!g, this.userId = this.isUserSignedIn ? this.authService.getUserId() : 0, this.referralService.getUserReferralsStatus(this.userId).pipe((0, zt.R)(this.unsubscribe)).subscribe(F => {
                        console.log(F), this.userReferrals = F, this.totalAmount = this.userReferrals.reduce((ee, Se) => ee + Se.total_amt, 0)
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

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(At.mX), t.Y36(_t.jt), t.Y36(_t.C_), t.Y36(r.mI))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["referrals-status"]],
            inputs: {userId: "userId"},
            decls: 47,
            vars: 10,
            consts: [["iconLigature", "close_x", 1, "modal__closeButton", 3, "click"], [1, "referrals__modal__content"], ["top", "3x-large", "bottom", "medium"], ["align", "center", "size", "small", 3, "responsiveSize"], ["top", "large", "bottom", "large"], [1, "referrals_status_container"], [2, "width", "100%"], [4, "ngFor", "ngForOf"], [1, "divider__line"], ["top", "medium", "bottom", "medium"], [1, "earnings"], [1, "earnings__shine"], [1, "earnings__container"], [1, "earnings__text"], [1, "earnings__value"], [1, "earnings__subtext"], [1, "earnings__info"], ["fillColor", "colors.light.500", "kind", "x-small", "align", "center", 2, "max-width", "450px"], ["top", "2x-large", "bottom", "3x-large"], [1, "signInToBegin"], ["size", "large", 2, "padding", "0 20px", 3, "click"], [3, "finished"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "gu-icon", 0), t.NdJ("click", function () {
                    return F.onClose()
                }), t.qZA(), t.TgZ(1, "div", 1)(2, "gu-vertical-space", 2)(3, "gu-heading-text", 3), t._uU(4, " Referral Status"), t.qZA()(), t.TgZ(5, "gu-vertical-space", 4)(6, "div", 5)(7, "table", 6)(8, "tr")(9, "th"), t._uU(10, "User"), t.qZA(), t.TgZ(11, "th"), t._uU(12, "GU account"), t.qZA(), t.TgZ(13, "th"), t._uU(14, "Coinbase account"), t.qZA(), t.TgZ(15, "th"), t._uU(16, "Game played"), t.qZA(), t.TgZ(17, "th"), t._uU(18, "Reward Status"), t.qZA()(), t.YNc(19, eo, 11, 5, "tr", 7), t.qZA()()(), t._UZ(20, "div", 8), t.TgZ(21, "gu-vertical-space", 9)(22, "gu-heading-text", 3), t._uU(23, " Earnings"), t.qZA()(), t.TgZ(24, "gu-vertical-space", 9)(25, "div", 10), t._UZ(26, "div", 11), t.TgZ(27, "div", 12)(28, "div", 13)(29, "div", 14), t._uU(30), t.qZA(), t.TgZ(31, "div", 15), t._uU(32, " Worth of Eth "), t.qZA(), t.TgZ(33, "div", 16), t._uU(34, " Earned from Referrals "), t.qZA()()()()(), t.TgZ(35, "gu-vertical-space", 9)(36, "gu-paragraph-text", 17), t._uU(37, " Once a friend has completed the required steps, it will take a few days to verify everything. Your referral earnings will be payed out every 7 days "), t.qZA()(), t.TgZ(38, "gu-vertical-space", 9)(39, "gu-paragraph-text", 17)(40, "strong"), t._uU(41, "Need some help?"), t.qZA(), t._uU(42, " Reach out to us on social media! "), t.qZA()(), t.TgZ(43, "gu-vertical-space", 18)(44, "div", 19)(45, "gu-primary-hex-button", 20), t.NdJ("click", function () {
                    return F.onClose()
                }), t._uU(46, " Close Window "), t.qZA()()()()), 2 & g && (t.xp6(3), t.Q6J("responsiveSize", t.VKq(5, Bs, t.DdM(4, Rs))), t.xp6(16), t.Q6J("ngForOf", F.userReferrals), t.xp6(3), t.Q6J("responsiveSize", t.VKq(8, Bs, t.DdM(7, Rs))), t.xp6(8), t.hij(" $", F.totalAmount, " "))
            },
            directives: [l.sg, qs],
            styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:840px;text-align:center}.modal__closeButton[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;font-size:calc(var(--vh) * 2);color:#8be1e0;cursor:pointer}.modal__closeButton[_ngcontent-%COMP%]:hover{color:#f6f6f6}.referrals__modal__content[_ngcontent-%COMP%]{background:#0F1B27;box-sizing:border-box;border:2px solid #3D5A74;display:flex;flex-direction:column;padding:0 50px;align-items:center}@media only screen and (max-width: 768px){.referrals__modal__content[_ngcontent-%COMP%]{padding:0 20px;overflow-y:auto}}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border-left:2px solid #0A0A0A;border-right:2px solid #0A0A0A;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center}th[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:24px;background:#1D2F41;color:#f6f6f6;padding:20px}td[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:24px;padding:10px 5px;color:#464646}tr[_ngcontent-%COMP%]{background:#F6F6F6}tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#d7d7d7}.divider__line[_ngcontent-%COMP%]{border:1px solid #1D2F41;margin:20px;width:100%}.earnings[_ngcontent-%COMP%]{display:flex;flex-direction:row}.earnings__container[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(242,242,242,.1) .67%,rgba(255,255,255,.1) 51.76%,rgba(242,242,242,.1) 100%);border:1px solid #7f7f7f;box-sizing:border-box;font-family:Unchained;font-style:normal}.earnings__shine[_ngcontent-%COMP%]{background:linear-gradient(180deg,#fff2d8 0%,#ebc98b 50.34%,#c6a052 100%);width:8px;height:60px;box-sizing:border-box}.earnings__text[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin:10px}.earnings__value[_ngcontent-%COMP%]{font-weight:700;font-size:32px;line-height:38px;text-transform:uppercase;color:#f6f6f6;padding-right:5px}.earnings__subtext[_ngcontent-%COMP%]{font-weight:700;font-size:12px;line-height:20px;text-transform:uppercase;color:#b6b6b6;padding-right:2vw}.earnings__info[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:24px;color:#f6f6f6}.socialButton[_ngcontent-%COMP%]{cursor:pointer;font-size:35px;margin:0 5px}.referrals_status_container[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width: 768px){.referrals_status_container[_ngcontent-%COMP%]{width:90vw;overflow-x:scroll}}"]
        }), S
    })(), to = (() => {
        class S {
        }

        return S.\u0275fac = function (g) {
            return new (g || S)
        }, S.\u0275cmp = t.Xpm({
            type: S,
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
            template: function (g, F) {
                1 & g && (t.TgZ(0, "div", 0)(1, "gu-heading-text", 1), t._uU(2), t.qZA(), t.TgZ(3, "picture", 2), t._UZ(4, "source", 3)(5, "img", 4), t.qZA()(), t.TgZ(6, "div", 5)(7, "div", 6)(8, "gu-heading-text", 7), t._uU(9), t.qZA(), t.TgZ(10, "picture", 2), t._UZ(11, "img", 8), t.qZA(), t._UZ(12, "gu-paragraph-text", 9), t.qZA()()), 2 & g && (t.xp6(2), t.hij(" ", F.taskId, " "), t.xp6(7), t.hij(" ", F.taskTitle, " "), t.xp6(2), t.Q6J("src", F.taskImage, t.LSH), t.xp6(1), t.Q6J("innerHTML", F.taskDescription, t.oJD))
            },
            styles: ["[_nghost-%COMP%]{background-color:#0f1b27;display:block;min-height:300px;position:relative;width:300px;border:2px solid #0F1B27;box-sizing:border-box;margin:20px}.outerBox[_ngcontent-%COMP%]{background:linear-gradient(90deg,#c6a052 2.93%,#ebc98b 25.01%,#fff2d8 50.44%,#ebc98b 74.21%,#c6a052 96.95%);box-shadow:0 2px 5px #0000004d;height:100%;width:100%;padding:2px}.innerBox[_ngcontent-%COMP%]{width:100%;height:100%;background:#0F1B27;display:flex;flex-direction:column}.taskId[_ngcontent-%COMP%]{position:absolute;left:50%;top:-32px;transform:translate(-50%)}.taskId__number[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);top:25%}.taskTitle[_ngcontent-%COMP%]{padding:10px;margin-top:30px}.taskPicture__img[_ngcontent-%COMP%]{border-top:1px solid #979797;border-bottom:1px solid #979797;width:100%}.taskDescription[_ngcontent-%COMP%]{padding:8px 10px;font-size:15px}"]
        }), S
    })(), so = (() => {
        class S {
            constructor(g, F) {
                this.analyticsService = g, this.copyService = F
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

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(_t.jt), t.Y36(_t.tX))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["share-button"]],
            inputs: {socialMedia: "socialMedia", referralLink: "referralLink", referralCopy: "referralCopy"},
            decls: 4,
            vars: 2,
            consts: [[1, "shareButton", 3, "click"], [1, "shareButton__icon", 3, "iconLigature"], ["size", "2x-small", 1, "shareButton__shareText"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "button", 0), t.NdJ("click", function () {
                    return F.shareLink()
                }), t._UZ(1, "gu-icon", 1), t.TgZ(2, "gu-heading-text", 2), t._uU(3), t.qZA()()), 2 & g && (t.xp6(1), t.Q6J("iconLigature", F.iconLigature), t.xp6(2), t.hij(" ", F.title, " "))
            },
            styles: ["[_nghost-%COMP%]{margin:10px 10px 10px 0}.shareButton[_ngcontent-%COMP%]{white-space:nowrap;padding:10px 15px;background:transparent;border:2px solid #8be1e0;display:flex;align-items:center;outline:none}.shareButton[_ngcontent-%COMP%]:hover{padding:12px 17px;color:#182531;border:none;background:linear-gradient(to bottom,#AFFAED 0%,#54BBCD 100%)}.shareButton[_ngcontent-%COMP%]:hover   .shareButton__shareText[_ngcontent-%COMP%]{-webkit-text-fill-color:#182531}.shareButton[_ngcontent-%COMP%]:hover   .shareButton__icon[_ngcontent-%COMP%]{-webkit-text-fill-color:black}@media only screen and (max-width: 768px){.shareButton[_ngcontent-%COMP%]{padding:10px}}.shareButton__icon[_ngcontent-%COMP%]{-webkit-text-fill-color:#8be1e0;font-size:calc(var(--vh) * 2.5);margin-right:calc(var(--vw) * .5);display:inline-flex;align-items:flex-start}.shareButton__icon[_ngcontent-%COMP%]:hover{-webkit-text-fill-color:black}@media only screen and (max-width: 768px){.shareButton__icon[_ngcontent-%COMP%]{margin-right:0}}.shareButton__shareText[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#affaed 0%,#8be1e0 50%,#54bbcd 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}@media only screen and (max-width: 768px){.shareButton__shareText[_ngcontent-%COMP%]{display:none}}"]
        }), S
    })();

    function oo(S, V) {
        if (1 & S && (t.TgZ(0, "option", 3), t._uU(1), t.qZA()), 2 & S) {
            const g = V.$implicit;
            t.Q6J("ngValue", g), t.xp6(1), t.Oqu(g)
        }
    }

    function ro(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "form", 1)(1, "select", 2), t.NdJ("ngModelChange", function (ee) {
                return t.CHM(g), t.oxw().updateWallet(ee)
            })("ngModelChange", function (ee) {
                return t.CHM(g), t.oxw().selectedWallet = ee
            }), t.TgZ(2, "option", 3), t._uU(3, "Please select a wallet"), t.qZA(), t.YNc(4, oo, 2, 2, "option", 4), t.qZA()()
        }
        if (2 & S) {
            const g = t.oxw();
            t.xp6(1), t.Q6J("ngModel", g.selectedWallet), t.xp6(1), t.Q6J("ngValue", null), t.xp6(2), t.Q6J("ngForOf", g.playerWallets)
        }
    }

    function no(S, V) {
        1 & S && (t.TgZ(0, "div", 1)(1, "div", 5), t._uU(2, " You don't have a wallet linked. "), t.qZA(), t.TgZ(3, "a", 6), t._uU(4, "Link my wallet"), t.qZA()())
    }

    let io = (() => {
        class S {
            constructor() {
                this.walletSelected = new t.vpe
            }

            updateWallet(g) {
                this.selectedWallet = g, this.walletSelected.emit(this.selectedWallet)
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["wallet-settings"]],
            inputs: {playerWallets: "playerWallets", selectedWallet: "selectedWallet"},
            outputs: {walletSelected: "walletSelected"},
            decls: 2,
            vars: 2,
            consts: [["class", "settings", 4, "ngIf"], [1, "settings"], ["name", "selectedWallet", "id", "sel1", 1, "settings__select", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "settings__label"], ["href", "https://www.godsunchained.com/?linkwallet=true", 1, "settings__cta"]],
            template: function (g, F) {
                1 & g && (t.YNc(0, ro, 5, 3, "form", 0), t.YNc(1, no, 5, 0, "div", 0)), 2 & g && (t.Q6J("ngIf", F.playerWallets && F.playerWallets.length > 0), t.xp6(1), t.Q6J("ngIf", !F.playerWallets || 0 === F.playerWallets.length))
            },
            directives: [l.O5, a._Y, a.JL, a.F, a.EJ, a.JJ, a.On, a.YN, a.Kr, l.sg],
            styles: [".settings__label[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.9)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{line-height:1.5}.settings__select[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}[_nghost-%COMP%]{display:block}.settings[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:100%;margin:auto}.settings__label[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 3)}.settings__select[_ngcontent-%COMP%]{color:#fff;font-size:16px;line-height:24px;width:100%;display:flex;align-items:center;background:#0F1B27;border:1px solid #3D5A74;box-sizing:border-box;border-radius:2px;padding:7px;margin-top:calc(var(--vh) * .65)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * 1.48);padding-left:calc(var(--vw) * .83);padding-right:calc(var(--vw) * .83);padding-top:calc(var(--vh) * 1.29);padding-bottom:calc(var(--vh) * 1.29);margin-bottom:0;background:#182531;color:#f6f6f6;border:calc(var(--vh) * .15) solid #0f1b27;border-radius:calc(var(--vh) * .4)}.settings__select[_ngcontent-%COMP%] > option[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.settings__cta[_ngcontent-%COMP%]{margin-top:calc(var(--vh) * .65);color:#affaed}"]
        }), S
    })(), ao = (() => {
        class S {
            constructor() {
            }

            ngOnInit() {
            }
        }

        return S.\u0275fac = function (g) {
            return new (g || S)
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["referrals-card-back"]],
            decls: 16,
            vars: 0,
            consts: [[1, "earnTogether__sideFigure"], [1, "earnTogether__figure"], ["srcset", "/assets/images/referrals/card_bg.webp", "type", "image/webp"], ["src", "/assets/images/referrals/card_bg.png", "alt", "", 1, "stackedCard__top"], [1, "stackedCard__lower", "stackedCard__lower__first"], [1, "stackedCard__lower", "stackedCard__lower__second"], [1, "earnTogether__cardContent"], ["top", "medium", "bottom", "large"], ["iconLigature", "friends_helmet", "fillGradient", "gradients.gold.simple", "fillGradientTarget", "bottom", 1, "earnTogether__icon"], [1, "rewardsBlock__text", "rewardsBlock__totalValue"], ["top", "large", "bottom", "medium"], ["src", "/assets/images/referrals/gu-divder-small.svg", 1, "tasks__divider"], ["fillColor", "colors.light.100", 2, "padding", "0 40px"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "div", 0)(1, "figure", 1)(2, "picture"), t._UZ(3, "source", 2)(4, "img", 3), t.qZA(), t._UZ(5, "div", 4)(6, "div", 5), t.qZA(), t.TgZ(7, "div", 6)(8, "gu-vertical-space", 7), t._UZ(9, "gu-icon", 8), t.qZA(), t.TgZ(10, "div", 9), t._uU(11, " 10% "), t.qZA(), t.TgZ(12, "gu-vertical-space", 10), t._UZ(13, "img", 11), t.qZA(), t.TgZ(14, "gu-paragraph-text", 12), t._uU(15, " of referrals money spent added to your wallet "), t.qZA()()())
            },
            styles: ["[_nghost-%COMP%]{height:400px}.earnTogether__sideFigure[_ngcontent-%COMP%]{position:relative}.earnTogether__figure[_ngcontent-%COMP%]{min-width:300px}.earnTogether__cardContent[_ngcontent-%COMP%]{position:absolute;z-index:10;width:245px;height:360px;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;left:10%}.stackedCard__top[_ngcontent-%COMP%]{box-shadow:4px 4px 8px #0a0a0a;border:1px solid #464646;position:absolute;z-index:3}.stackedCard__lower[_ngcontent-%COMP%]{background:linear-gradient(360deg,#0f1b27 0%,#0f1b27 11.53%,#1d2f41 50.05%,#0f1b27 88.69%,#0f1b27 100%);box-shadow:4px 4px 8px #0a0a0a;border:1px solid #464646;box-sizing:border-box;position:absolute;height:360px;width:240px}.stackedCard__lower__first[_ngcontent-%COMP%]{left:30px;top:15px;z-index:2}.stackedCard__lower__second[_ngcontent-%COMP%]{left:25px;top:25px;z-index:1}.earnTogether__icon[_ngcontent-%COMP%]{font-size:90px}.rewardsBlock__text[_ngcontent-%COMP%]{font-family:Unchained;font-style:normal;font-weight:700;text-transform:uppercase}.rewardsBlock__totalValue[_ngcontent-%COMP%]{font-size:43px;line-height:30px;color:#f6f6f6}.rewardsBlock__totalValue__currency[_ngcontent-%COMP%]{font-size:24px;line-height:29px;text-align:center;color:#d7d7d7}.tasks__divider[_ngcontent-%COMP%]{width:100%}"]
        }), S
    })();

    function vs(S, V) {
        if (1 & S && (t.ynx(0), t._UZ(1, "referrals-task", 30), t.BQk()), 2 & S) {
            const g = V.$implicit;
            t.xp6(1), t.Q6J("taskId", g.taskId)("taskTitle", g.taskTitle)("taskDescription", g.taskDescription)("taskImage", g.taskImage)
        }
    }

    function Po(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "section", 31)(1, "figure", 32)(2, "picture"), t._UZ(3, "source", 33)(4, "img", 34), t.qZA()(), t.TgZ(5, "div", 35)(6, "gu-vertical-space", 36)(7, "div", 37), t._uU(8, " Share the below link with your friends "), t.qZA()(), t.TgZ(9, "div", 38), t._uU(10), t.TgZ(11, "strong"), t._uU(12), t.qZA(), t._uU(13, " on the website here "), t.TgZ(14, "span", 39), t._uU(15), t.qZA()(), t.TgZ(16, "div", 40), t._UZ(17, "share-button", 41)(18, "share-button", 42)(19, "share-button", 42), t.qZA(), t.TgZ(20, "gu-vertical-space", 43), t._UZ(21, "div", 44), t.qZA(), t.TgZ(22, "gu-vertical-space", 45)(23, "gu-paragraph-text", 46), t._uU(24, " Select the wallet you want your rewards to go to "), t.qZA()(), t.TgZ(25, "wallet-settings", 47), t.NdJ("walletSelected", function (ee) {
                return t.CHM(g), t.oxw().updateWallet(ee)
            }), t.qZA()()()
        }
        if (2 & S) {
            const g = t.oxw();
            t.xp6(10), t.hij(" ", g.referralCopy, " "), t.xp6(2), t.Oqu(g.referralCode), t.xp6(3), t.Oqu(g.referralLink), t.xp6(2), t.Q6J("referralLink", g.referralLink)("referralCopy", g.shareCopy), t.xp6(1), t.Q6J("referralLink", g.referralLink)("referralCopy", g.shareCopy)("socialMedia", "facebook"), t.xp6(1), t.Q6J("referralLink", g.referralLink)("referralCopy", g.shareCopy)("socialMedia", "twitter"), t.xp6(6), t.Q6J("playerWallets", g.playerWallets)("selectedWallet", g.selectedWallet)
        }
    }

    function lo(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "div", 48)(1, "gu-primary-hex-button", 49), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().signIn()
            }), t._uU(2, " Sign in to begin "), t.qZA()()
        }
    }

    function co(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "div", 48)(1, "gu-primary-hex-button", 49), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().signIn()
            }), t._uU(2, " Sign in to begin "), t.qZA()()
        }
    }

    function bs(S, V) {
        if (1 & S) {
            const g = t.EpF();
            t.TgZ(0, "div", 48)(1, "gu-primary-hex-button", 49), t.NdJ("click", function () {
                return t.CHM(g), t.oxw().copyShareCode()
            }), t._uU(2, " Copy share Code "), t.qZA()()
        }
    }

    const So = function () {
        return {breakpoint: "small", size: "large"}
    }, uo = function (S) {
        return [S]
    }, ko = function () {
        return {breakpoint: "small", size: "medium"}
    };
    let wo = (() => {
        class S {
            constructor(g, F, ee, Se, ot, pt) {
                this.authService = g, this.cerberusModalService = F, this.router = ee, this.analyticsService = Se, this.copyService = ot, this.referralService = pt, this.selectedWallet = null, this.unsubscribe = new Bt.xQ, this.referralCopy = "If you're looking for the next game to play, Gods Unchained is a great game that you should check out. Sign up using with my referral code: "
            }

            ngOnDestroy() {
                this.unsubscribe.next(), this.unsubscribe.complete()
            }

            createReferralCode(g) {
                this.referralService.createReferralCode(g).subscribe(F => {
                    this.referralCode = F.code, this.selectedWallet = F.referral_payout_address, this.referralLink = F.result, this.shareCopy = `${this.referralCopy}${this.referralCode} on the website here `
                })
            }

            ngOnInit() {
                this.getWallets(), this.referralTasks = this.getTasks(), this.userId = this.authService.getUserId(), this.isUserSignedIn = !!this.authService.getUserId(), this.authService.account$.pipe((0, zt.R)(this.unsubscribe), (0, fs.h)(g => !!g), (0, $.q)(1)).subscribe(g => {
                    this.isUserSignedIn = !!g, this.userId = this.isUserSignedIn ? this.authService.getUserId() : 0, this.createReferralCode(this.userId)
                })
            }

            copyShareCode() {
                this.copyService.copyText(`${this.referralCopy}${this.referralCode} on the website here ${this.referralLink}`)
            }

            signIn() {
                this.router.navigate(["/account/login"], {queryParams: {return: v.CF.J.learn.children.referrals.path}})
            }

            checkReferralsStatus() {
                this.cerberusModalService.open(Ze, {
                    centered: !0,
                    scrollable: !0
                }).componentInstance.userId = this.userId
            }

            getWallets() {
                this.authService.account$.pipe((0, fs.h)(g => !!g), (0, ns.U)(g => g.addresses)).subscribe(g => {
                    this.playerWallets = g.filter(F => F.imx_linked).map(F => F.address)
                })
            }

            updateWallet(g) {
                this.selectedWallet = g, this.referralService.updatePayoutAddress(this.userId, g).subscribe(F => console.log(F))
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

        return S.\u0275fac = function (g) {
            return new (g || S)(t.Y36(r.mI), t.Y36(At.Qz), t.Y36(is.F0), t.Y36(_t.jt), t.Y36(_t.tX), t.Y36(_t.C_))
        }, S.\u0275cmp = t.Xpm({
            type: S,
            selectors: [["cerberus-referrals-route"]],
            decls: 62,
            vars: 13,
            consts: [[1, "intro"], ["top", "5x-large"], ["align", "center", "fillColor", "colors.dark.900", "size", "small", 3, "responsiveSize"], ["top", "large"], ["align", "center", "fillColor", "colors.gunmetal.500", "size", "medium", 1, "subTitle"], ["top", "small"], ["align", "center", "fillColor", "colors.dark.700"], [1, "theMoreYouPurchase"], [1, "steps"], ["top", "2x-large"], [1, "referralSteps"], [4, "ngFor", "ngForOf"], ["class", "share", 4, "ngIf"], ["top", "medium", "bottom", "large"], ["class", "signInToBegin", 4, "ngIf"], [1, "rewards"], ["top", "large", "both", "medium"], ["src", "/assets/images/referrals/tasks_divider.svg", 1, "tasks__divider"], [1, "rewards__container"], [1, "cardBack__container"], ["align", "left", "fillColor", "colors.dark.900", "size", "x-small", 3, "responsiveSize"], ["top", "small", "bottom", "large"], ["align", "left", "fillColor", "colors.gunmetal.500", "fontWeight", "bold", "size", "5x-small"], ["fillColor", "colors.gunmetal.900", "kind", "4x-small"], ["fillColor", "colors.gunmetal.900"], ["top", "small", "bottom", "medium"], ["srcset", "/assets/images/misc-art/misc-art--wizard-with-key.webp", "type", "image/webp"], ["srcset", "/assets/images/misc-art/misc-art--wizard-with-key.jpg", "type", "image/jpg"], ["src", "/assets/images/misc-art/misc-art--wizard-with-key.jpg"], [1, "innerFooter"], [3, "taskId", "taskTitle", "taskDescription", "taskImage"], [1, "share"], [1, "share__figure"], ["srcset", "/assets/images/misc-art/x2_brand_visual.webp", "type", "image/webp"], ["src", "/assets/images/misc-art/x2_brand_visual.png", 1, "share__img"], [1, "share__content"], ["bottom", "medium"], [1, "share__socialMedia__title"], [1, "share__socialMedia__text"], [1, "share__socialMedia__text__Link"], [1, "share__socialMedia__buttons"], [3, "referralLink", "referralCopy"], [3, "referralLink", "referralCopy", "socialMedia"], ["top", "large", "bottom", "large", 2, "width", "100%"], [1, "share__socialMedia__divider__line"], ["top", "large", "bottom", "medium"], ["fillColor", "colors.light.100"], [3, "playerWallets", "selectedWallet", "walletSelected"], [1, "signInToBegin"], ["size", "large", 2, "padding", "0 25px", 3, "click"]],
            template: function (g, F) {
                1 & g && (t.TgZ(0, "div")(1, "section", 0)(2, "gu-vertical-space", 1)(3, "gu-heading-text", 2), t._uU(4, " Money Spent Is Money Earned "), t.qZA()(), t.TgZ(5, "gu-vertical-space", 3)(6, "gu-paragraph-text", 4), t._uU(7, " Mortals. Together. Strong. "), t.qZA()(), t.TgZ(8, "gu-vertical-space", 5)(9, "gu-paragraph-text", 6)(10, "div", 7), t._uU(11, " Put down your axe and extend a helping hand to your fellow mortal. By inviting friends who make purchases, you\u2019ll receive great rewards! "), t.qZA()()()(), t.TgZ(12, "section", 8)(13, "gu-vertical-space", 9)(14, "div", 10), t.YNc(15, vs, 2, 4, "ng-container", 11), t.qZA()()(), t.YNc(16, Po, 26, 13, "section", 12), t.TgZ(17, "section")(18, "gu-vertical-space", 13), t.YNc(19, lo, 3, 0, "div", 14), t.qZA()(), t.TgZ(20, "section", 15)(21, "gu-vertical-space", 16), t._UZ(22, "img", 17), t.qZA(), t.TgZ(23, "div", 18)(24, "div", 19), t._UZ(25, "referrals-card-back"), t.qZA(), t.TgZ(26, "div")(27, "gu-heading-text", 20), t._uU(28, " Earn Together "), t.qZA(), t.TgZ(29, "gu-vertical-space", 21)(30, "gu-paragraph-text", 22), t._uU(31, " Receive 10% of the money spent by the people you refer! "), t.qZA()(), t.TgZ(32, "gu-paragraph-text", 23)(33, "strong"), t._uU(34, "People you refer need to:"), t.qZA(), t.TgZ(35, "ol")(36, "li"), t._uU(37, "Create a Gods Unchained account"), t.qZA(), t.TgZ(38, "li"), t._uU(39, "Purchase any Divine Order Packs and/or Chests"), t.qZA(), t.TgZ(40, "li"), t._uU(41, "Have a valid wallet linked to Immutable X"), t.qZA()()(), t.TgZ(42, "gu-paragraph-text", 24), t._uU(43, " There is "), t.TgZ(44, "strong"), t._uU(45, "no limit to how many friends you can invite"), t.qZA(), t._uU(46, ", so send your unique codes far and wide. "), t.qZA(), t.TgZ(47, "gu-paragraph-text", 24), t._uU(48, " The processing of referral payments will take place every 14 days. At these intervals any referral payouts due will be calculated and payed out for all purchases made in the previous cycle. "), t.TgZ(49, "strong"), t._uU(50, "Payment will be made in ETH"), t.qZA(), t._uU(51, " directly to your selected Immutable X linked wallet. "), t.qZA(), t._UZ(52, "gu-vertical-space", 13), t.qZA()()(), t.TgZ(53, "gu-vertical-space", 25)(54, "div"), t.YNc(55, co, 3, 0, "div", 14), t.YNc(56, bs, 3, 0, "div", 14), t.qZA()()(), t.TgZ(57, "picture"), t._UZ(58, "source", 26)(59, "source", 27)(60, "img", 28), t.qZA(), t._UZ(61, "section", 29)), 2 & g && (t.xp6(3), t.Q6J("responsiveSize", t.VKq(8, uo, t.DdM(7, So))), t.xp6(12), t.Q6J("ngForOf", F.referralTasks), t.xp6(1), t.Q6J("ngIf", F.isUserSignedIn), t.xp6(3), t.Q6J("ngIf", !F.isUserSignedIn), t.xp6(8), t.Q6J("responsiveSize", t.VKq(11, uo, t.DdM(10, ko))), t.xp6(28), t.Q6J("ngIf", !F.isUserSignedIn), t.xp6(1), t.Q6J("ngIf", F.isUserSignedIn))
            },
            directives: [l.sg, to, l.O5, so, io, ao],
            styles: [".share__socialMedia__title[_ngcontent-%COMP%], .subTitle[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 2.22)}.share__socialMedia__text[_ngcontent-%COMP%]{font-size:calc(var(--vh) * 1.48)}[_nghost-%COMP%]{overflow-y:auto;background-color:#f6f6f6}a[_ngcontent-%COMP%]{color:#000}.subTitle[_ngcontent-%COMP%]{font-weight:700;line-height:28px}.earnTogether[_ngcontent-%COMP%]{display:flex;flex-direction:row;position:relative;max-width:960px;padding:20px}@media only screen and (max-width: 768px){.earnTogether[_ngcontent-%COMP%]{flex-wrap:wrap;flex-direction:column-reverse;justify-content:center;align-items:center}}.tasks__divider[_ngcontent-%COMP%]{width:100%}.referralSteps[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;margin:10px}.signInToBegin[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column}.theMoreYouPurchase[_ngcontent-%COMP%]{margin:0 auto;max-width:566px;padding:10px}[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;z-index:1;display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%] > picture[_ngcontent-%COMP%]{align-items:center;bottom:0;display:flex;justify-content:center;left:0;overflow:hidden;position:absolute;right:0;top:0}[_nghost-%COMP%] > picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center top}.earnTogether__text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.innerFooter[_ngcontent-%COMP%]{background:#0A0A0A;height:40px;z-index:1;margin-top:-24px;position:relative;clip-path:polygon(0% 0%,calc(50% - 140px) 0%,calc(50% - 124px) 22px,calc(50% + 124px) 22px,calc(50% + 140px) 0%,100% 0%,100% 100%,0% 100%)}.share[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;border-top:1px solid #0A0A0A;border-bottom:1px solid #0A0A0A;flex-wrap:wrap;justify-content:center;align-items:center;background:#0F1B27}@media only screen and (max-width: 768px){.share[_ngcontent-%COMP%]{display:block}}.share__content[_ngcontent-%COMP%]{flex:1;background:#0F1B27;display:flex;flex-direction:column;padding:40px}@media only screen and (max-width: 768px){.share__content[_ngcontent-%COMP%]{align-items:center;text-align:center}}.share__figure[_ngcontent-%COMP%]{flex:1;margin:0;line-height:.5}.share__img[_ngcontent-%COMP%]{width:100%;object-fit:cover;object-position:center center;height:470px}@media only screen and (max-width: 768px){.share__img[_ngcontent-%COMP%]{height:148px}}.share__socialMedia__title[_ngcontent-%COMP%]{font-weight:700;color:#f6f6f6}.share__socialMedia__text[_ngcontent-%COMP%]{font-size:16px;text-align:left;color:#b6b6b6;border:2px solid #3D5A74;box-sizing:border-box;padding:15px;background:#1D2F41}.share__socialMedia__text__Link[_ngcontent-%COMP%]{color:#f6f6f6}.share__socialMedia__buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:10px 10px 10px 0}.share__socialMedia__divider__line[_ngcontent-%COMP%]{border:1px solid #1D2F41;width:100%}.referral_status_btn[_ngcontent-%COMP%]{width:200px;margin:10px 0;padding:20px}.rewards[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{list-style:inside decimal;padding-left:0;margin-block:0}.rewards[_ngcontent-%COMP%]   gu-paragraph-text[_ngcontent-%COMP%]{margin-bottom:32px}.rewards__container[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;max-width:960px;margin:0 20px}.cardBack__container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.cardBack__container[_ngcontent-%COMP%] > referrals-card-back[_ngcontent-%COMP%]{margin-right:-80px}@media screen and (min-width: 768px){.rewards__container[_ngcontent-%COMP%]{flex-direction:row}.cardBack__container[_ngcontent-%COMP%]{margin-bottom:0}.cardBack__container[_ngcontent-%COMP%] > referrals-card-back[_ngcontent-%COMP%]{margin-right:-40px}}@media screen and (min-width: 960px){.cardBack__container[_ngcontent-%COMP%] > referrals-card-back[_ngcontent-%COMP%]{margin-right:0}}"]
        }), S
    })();
    var jt = s(37371);
    s(39765)
}, 46313
:
q => {
    function R(s) {
        var l = new Error("Cannot find module '" + s + "'");
        throw l.code = "MODULE_NOT_FOUND", l
    }

    R.keys = () => [], R.resolve = R, R.id = 46313, q.exports = R
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
q => {
    "use strict";
    q.exports = JSON.parse('{"contractName":"CappedVault","abi":[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"total","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"limit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}],"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{"1":"0x91b9d2835ad914bc1dcfe09bd1816febd04fd689"},"schemaVersion":"3.0.16","updatedAt":"2019-09-18T05:50:16.377Z"}')
}, 45861
:
q => {
    "use strict";
    q.exports = JSON.parse('{"contractName":"Chest","abi":[{"constant":true,"inputs":[],"name":"sold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"packType","outputs":[{"internalType":"enum Pack.Type","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"processor","outputs":[{"internalType":"contract IProcessor","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pack","outputs":[{"internalType":"contract IPack","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tradeable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IPack","name":"_pack","type":"address"},{"internalType":"enum Pack.Type","name":"_pt","type":"uint8"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"contract IProcessor","name":"_processor","type":"address"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"sym","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"paymentID","type":"uint256"}],"name":"ChestsPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"purchase","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"purchaseFor","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"open","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"openFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"makeTradeable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"compiler":{"name":"solc","version":"0.5.11+commit.c082d0b4.Emscripten.clang","optimizer":false,"runs":200},"networks":{},"schemaVersion":"2.2.3","updatedAt":"2019-10-15T03:24:19.434Z"}')
}
},
q => {
    q.O(0, [736], () => q(q.s = 45008)), q.O()
}
])
;