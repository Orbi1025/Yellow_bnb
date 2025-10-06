(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4143],
  {
    /***/ 314668: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(59534);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var F = __c.F;
        var Q = __c.Q;
        var ISb = function (a, b = "medium") {
            if (a !== null && a !== void 0 && a.length) {
              var c = window.devicePixelRatio || 1,
                d = (typeof b === "number" ? b : HSb(b)) * c;
              return [...a].sort((e, f) => {
                e = e.width;
                f = f.width;
                return e > d && f < d
                  ? -1
                  : e < d && f > d
                  ? 1
                  : Math.abs(e - d) - Math.abs(f - d);
              })[0].url;
            }
          },
          OSb = function (a, b) {
            class c {
              static A(d) {
                Q(d, { Ef: L4, qka: L4 });
              }
              get Ef() {
                switch (this.qka) {
                  case "date":
                    return new JSb(this.ho, b.language || "en-AU");
                  case "select":
                    return new KSb(this.ho);
                  case "mention":
                    return new LSb(this.ho);
                  case "embed":
                    return new MSb(this.ho);
                  case "plain_number":
                  case "currency":
                  case "percentage":
                  case void 0:
                    break;
                  default:
                    throw new F(this.qka);
                }
              }
              get qka() {
                var d;
                return (d = this.ho.$q) === null || d === void 0
                  ? void 0
                  : d.type;
              }
              constructor(d) {
                this.context = d;
                this.ho = (c.A(this), void 0);
                this.ho = __c.E(a.Aw(d.sheet, d.ya, d.column));
              }
            }
            return NSb((d) => new c(d).Ef);
          },
          QSb = function () {
            const a = M4(() => new Map(), []);
            return {
              fab: (b) => {
                if (a.has(b)) return __c.E(a.get(b));
                const c = PSb();
                a.set(b, c);
                return c;
              },
            };
          },
          RSb = function (a, b) {
            return M4(() => {
              const c = new Map();
              return (d) => {
                if (c.has(d)) return __c.E(c.get(d));
                const e = a(d);
                c.set(d, e);
                return e;
              };
            }, b);
          },
          YSb = function ({
            children: a,
            keyFrame: b,
            eWa: c,
            ariaLive: d,
            kOa: e = !1,
            n2a: f,
            Lma: g,
            L7a: h,
            Dzb: k,
            LHa: l,
            HJa: m,
            Bzb: n,
            Rqb: p,
          }) {
            const { fab: q } = QSb(),
              { h$a: r, Wlb: t } = SSb(b, a),
              v = RSb(
                (u) => () => {
                  (e === !1 || (typeof e === "function" && !e(u))) && t(u);
                },
                [t, e]
              );
            return N4("div", {
              className: O4(g, "_9GxJfQ", {
                KwB0XQ: l === "hidden",
                WV1Mmw: c === "fill-height",
                _2uSJxw: c === "flex-grow",
              }),
              children: N4("div", {
                className: O4("m2VaAA", h),
                "aria-live": d,
                style: k,
                role: "region",
                children: [
                  ...r.map(({ key: u, element: x }) =>
                    N4(
                      TSb,
                      {
                        in: u === b,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(u),
                        onExited: v(u),
                        children: (y) =>
                          N4(USb.Provider, {
                            value: y,
                            children: N4("div", {
                              className: O4("KxXR9g", n, {
                                KwB0XQ: m === "hidden",
                              }),
                              ref: q(u),
                              "aria-hidden":
                                y === VSb || y === WSb || y === XSb,
                              children: u === b ? a : x,
                            }),
                          }),
                      },
                      u
                    )
                  ),
                  r.every((u) => u.key !== b) &&
                    N4(
                      TSb,
                      {
                        in: !1,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(b),
                        onExited: e ? void 0 : v(b),
                        children: (u) =>
                          N4(USb.Provider, {
                            value: u,
                            children: N4("div", {
                              className: O4("KxXR9g", n),
                              ref: q(b),
                              "aria-hidden":
                                u === VSb || u === WSb || u === XSb,
                              children: a,
                            }),
                          }),
                      },
                      b
                    ),
                ],
              }),
            });
          },
          SSb = function (a, b) {
            const [c, d] = ZSb(() => [{ key: a, element: b }]);
            $Sb(() => {
              d((f) =>
                f.every((g) => g.key !== a)
                  ? f.concat({ key: a, element: b })
                  : f.map((g) => (g.key === a ? { key: a, element: b } : g))
              );
            }, [a, b]);
            const e = P4((f) => {
              d((g) => g.filter((h) => h.key !== f));
            }, []);
            return { h$a: c, Wlb: e };
          },
          aTb = function (a) {
            switch (a.type) {
              case "mention":
                return "bCAtqw";
              case "embed":
                return "BTcT3w";
              case "date":
                return "McKQgg";
              case "select":
                return "V2E5nQ";
              default:
                throw new F(a);
            }
          },
          eTb = function (a, b) {
            switch (a.type) {
              case "mention":
                return N4(bTb, {
                  Lr: a.user ? b.l0(a.user) : void 0,
                  text: a.text,
                  backgroundColor: a.user ? b.y$a(a.user).background : void 0,
                });
              case "embed":
                const c = !a.url;
                a = b.KJa.u_.get(a.url);
                return N4(cTb, { icon: a, fdb: c });
              case "date":
                return a.text ? void 0 : N4(dTb, {});
              case "select":
                break;
              default:
                throw new F(a);
            }
          },
          gTb = function (a, b) {
            switch (a.type) {
              case "mention":
              case "embed":
              case "date":
                break;
              case "select":
                return N4(fTb, { selected: !!b.fUa });
              default:
                throw new F(a);
            }
          },
          Q4 = function (a) {
            return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey)
              ? !0
              : a instanceof KeyboardEvent
              ? a.key === "Meta" || ["91", "224"].includes(a.code)
              : !1;
          },
          hTb = function (a) {
            __c.w(!0, "chunkLength must be positive");
            const b = [];
            for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
            return b;
          },
          iTb = function (a, b, c) {
            if (c) {
              var d = ISb(c.images, "medium"),
                e = ISb(c.images, "xxxlarge");
              if (d && e) {
                c = new Image();
                c.src = d;
                var f = new Image();
                f.src = e;
                f.onload = R4(() => a.A6.set(b, e));
                f.onerror = R4(() => a.A6.set(b, void 0));
                !f.complete && c.complete ? a.A6.set(b, d) : (c.src = "");
              }
            } else a.A6.set(b, void 0);
          },
          kTb = function (a, { url: b, id: c, extension: d }) {
            if (!a.promises.has(b)) {
              const e = new Promise((f) => {
                a.Vg
                  ? a.Vg.rCb(new jTb({ id: c, extension: d }))
                      .then(({ document: g }) => {
                        const h = g.Wg.content.title;
                        h
                          ? (S4(() => a.pXa.set(b, { status: 1, title: h })),
                            f(h))
                          : f(void 0);
                      })
                      .catch(() => {
                        S4(() => a.pXa.set(b, { status: 2 }));
                        f(void 0);
                      })
                  : f(void 0);
              });
              a.promises.set(b, e);
            }
            return a.promises.get(b);
          },
          HSb = (a) =>
            a.endsWith("rem") ? parseFloat(a) * 10 : __c.Oy * __c.WAb[a],
          lTb = __webpack_require__(443763),
          N4 = lTb.jsx,
          mTb = lTb.jsxs;
        var T4 = __webpack_require__(214645).Pi;
        var U4 = __webpack_require__(875604),
          nTb = U4.createContext,
          PSb = U4.createRef,
          V4 = U4.memo,
          P4 = U4.useCallback,
          $Sb = U4.useEffect,
          oTb = U4.useLayoutEffect,
          M4 = U4.useMemo,
          ZSb = U4.useState;
        var W4 = __webpack_require__(519427),
          R4 = W4.action,
          pTb = W4.comparer,
          L4 = W4.computed,
          qTb = W4.observable,
          X4 = W4.ObservableMap,
          S4 = W4.runInAction;
        var NSb = __webpack_require__(635872).Om;
        var rTb = __webpack_require__,
          sTb = rTb(993864),
          O4 = rTb.n_x(sTb)();
        var TSb = __webpack_require__(489212).Z;
        var Y4 = __webpack_require__(92009),
          XSb = Y4.Wj,
          VSb = Y4.Ix,
          WSb = Y4.$r;
        var tTb = class {
            static A(a) {
              Q(a, { text: L4, user: L4, brand: L4 });
            }
            get text() {
              return this.Ef.text;
            }
            get user() {
              return this.Ef.user;
            }
            get brand() {
              return this.Ef.brand;
            }
            constructor(a) {
              this.Ef = a;
              this.type = (tTb.A(this), "mention");
            }
          },
          uTb = class {
            static A(a) {
              Q(a, { text: L4, url: L4 });
            }
            get text() {
              return this.Ef.text;
            }
            get url() {
              return this.Ef.url;
            }
            constructor(a) {
              this.Ef = a;
              this.type = (uTb.A(this), "embed");
            }
          },
          vTb = class {
            static A(a) {
              Q(a, { text: L4, language: L4, style: L4, date: L4 });
            }
            get text() {
              return this.Ef.text;
            }
            get language() {
              return this.Ef.language;
            }
            get style() {
              return this.Ef.style;
            }
            get date() {
              return this.Ef.date;
            }
            constructor(a) {
              this.Ef = a;
              this.type = (vTb.A(this), "date");
            }
          },
          wTb = class {
            static A(a) {
              Q(a, { text: L4, options: L4, yf: L4, zS: L4 });
            }
            get text() {
              return this.Ef.text;
            }
            get options() {
              return this.Ef.options.map((a) => a);
            }
            get yf() {
              return this.Ef.yf;
            }
            get zS() {
              var a;
              return (a = this.Ef.options.first((b) => b.id === this.Ef.yf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            constructor(a) {
              this.Ef = a;
              this.type = (wTb.A(this), "select");
            }
          },
          xTb = NSb((a) => {
            switch (a.type) {
              case "mention":
                return new tTb(a);
              case "embed":
                return new uTb(a);
              case "date":
                return new vTb(a);
              case "select":
                return new wTb(a);
              default:
                throw new F(a);
            }
          });
        var JSb = class {
            static A(a) {
              Q(a, { style: L4, date: L4, text: L4 });
            }
            get style() {
              return 2;
            }
            get date() {
              var a;
              (a = this.jp.Ok.type === 2 ? this.jp.Ok.date : void 0) ||
                ((a = new Date()),
                (a = __c.dD(a)),
                (a = {
                  year: a.getFullYear(),
                  month: a.getMonth() + 1,
                  day: a.getDate(),
                  kbb: a.getHours(),
                  qhb: a.getMinutes(),
                }));
              return a;
            }
            get text() {
              return this.jp.lB;
            }
            constructor(a, b) {
              this.jp = a;
              this.language = b;
              this.type = (JSb.A(this), "date");
            }
          },
          yTb = class {
            get label() {
              return this.option.label;
            }
            get fill() {
              return this.option.fill;
            }
            constructor(a, b) {
              this.option = a;
              this.id = b;
            }
          },
          KSb = class {
            static A(a) {
              Q(a, {
                options: L4,
                yf: L4,
                zS: L4,
                text: L4,
                kLa: L4({ equals: pTb.shallow }),
              });
            }
            get options() {
              return this.kLa.map((a, b) => new yTb(a, b));
            }
            get yf() {
              var a;
              return (a = this.options.find((b) => b.label === this.text)) ===
                null || a === void 0
                ? void 0
                : a.id;
            }
            get zS() {
              var a;
              return (a = this.options.find((b) => b.id === this.yf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            get text() {
              return this.jp.lB;
            }
            get kLa() {
              var a, b;
              __c.C(
                ((a = this.jp.$q) === null || a === void 0
                  ? void 0
                  : a.type) === "select"
              );
              return (b = this.jp.$q) === null || b === void 0
                ? void 0
                : b.options;
            }
            constructor(a) {
              this.jp = a;
              this.type = (KSb.A(this), "select");
            }
          },
          LSb = class {
            static A(a) {
              Q(a, { qN: L4 });
            }
            get text() {
              return this.qN ? this.qN.text : "";
            }
            get user() {
              return this.qN ? this.qN.user : "";
            }
            get brand() {
              return this.qN ? this.qN.brand : "";
            }
            get qN() {
              if (this.jp.Ok.type !== 9)
                return (
                  __c.C(this.jp.Ok.type === 7),
                  this.jp.Ok ? this.jp.Ok.value[0] : void 0
                );
            }
            constructor(a) {
              this.jp = a;
              this.type = (LSb.A(this), "mention");
            }
          },
          MSb = class {
            static A(a) {
              Q(a, { P_: L4 });
            }
            get text() {
              return this.P_ ? this.P_.embed.text : "";
            }
            get url() {
              return this.P_ ? this.P_.embed.url : "";
            }
            get P_() {
              if (this.jp.Ok.type !== 9)
                return (
                  __c.C(this.jp.Ok.type === 8),
                  this.jp.Ok ? this.jp.Ok.value[0] : void 0
                );
            }
            constructor(a) {
              this.jp = a;
              this.type = (MSb.A(this), "embed");
            }
          };
        var zTb = class {
          apa(a) {
            this.dla.apa(a);
          }
          L4(a, b) {
            this.dla.L4(a, b);
          }
          l0(a) {
            return this.dla.l0(a);
          }
          Yoa(a) {
            this.KJa.Yoa(a);
          }
          constructor(a, b, c, d) {
            this.dla = a;
            this.KJa = b;
            this.yb = c;
            this.JI = d;
            this.SBa = new __c.jrb();
            this.y$a = (e) => __c.FHa(this.SBa, e);
          }
        };
        var USb = nTb(void 0);
        var ATb = Number.parseInt("300ms", 10),
          BTb = {
            enter: "_QukmA",
            enterActive: "_5_06KQ",
            enterDone: void 0,
            exitActive: "a952jg",
            exitDone: "orZOEA",
          },
          CTb = V4(function ({
            Ly: a = !1,
            children: b,
            keyFrame: c,
            eWa: d,
            LHa: e = "hidden",
            HJa: f = "hidden",
            ariaLive: g,
            kOa: h,
            XCb: k = "none",
          }) {
            a = __c.ub() && !a;
            return YSb({
              children: b,
              keyFrame: c,
              eWa: d,
              ariaLive: g,
              LHa: e,
              HJa: f,
              kOa: h,
              n2a: a ? ATb : 0,
              L7a: O4({
                _1niDPQ: a,
                Q6kGbg: k === "none",
                _9j7ODw: k === "layout",
              }),
              Rqb: BTb,
            });
          });
        var DTb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
        var ETb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
        var FTb =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
        var GTb =
          '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
        var HTb = V4((a) => {
            const b = a.link,
              c = a.className,
              d = a.ariaLabel,
              e = a.zS,
              f = a.W6a,
              g = a.H0a,
              h = a.i1a,
              k = a.measureRef,
              l = a.onPointerDown,
              m = a.onMouseEnter,
              n = a.onMouseLeave,
              p = O4({ EdewNw: !!g, _6ZpPrw: !!h, pzXyUA: a.text.length > 0 });
            a = a.text.length > 0 ? a.text : "\ufeff";
            return mTb("span", {
              className: O4(c, "FedJ0Q"),
              "aria-label": d || a,
              children: [
                N4("span", {
                  className: O4("_2Lr6pQ", p),
                  children: N4("span", { className: "Z_WvzQ", children: a }),
                }),
                mTb("span", {
                  className: O4("XemTdQ", p),
                  ref: k,
                  style: e ? { color: e } : void 0,
                  onPointerDown: l,
                  onMouseEnter: m,
                  onMouseLeave: n,
                  children: [
                    g,
                    N4("span", {
                      className: O4("U_QH_A", { C9XL8g: !f }),
                      children: b
                        ? N4("a", { className: "vgTP5Q", ...b, children: a })
                        : a,
                    }),
                    h,
                  ],
                }),
              ],
            });
          }),
          bTb = V4((a) => {
            const b = a.backgroundColor,
              c = a.Lr;
            a = a.text;
            const d = { width: "0.9em", height: "0.9em" };
            return N4(CTb, {
              keyFrame: c ? "show" : "hide",
              children: a
                ? N4(__c.$Ab, {
                    name: a,
                    style: d,
                    backgroundColor: b,
                    Lr: c,
                    borderColor: c ? void 0 : b,
                  })
                : N4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: GTb },
                  }),
            });
          }),
          cTb = V4((a) => {
            const b = a.icon;
            a = a.fdb;
            return N4(CTb, {
              keyFrame: b ? "favicon" : "placeholder",
              children: b
                ? N4("span", {
                    className: "_tFJqA",
                    children: N4("img", { src: b, className: "qpbYdw" }),
                  })
                : N4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: a ? FTb : ETb },
                  }),
            });
          }),
          dTb = V4(() =>
            N4("span", {
              "aria-hidden": "true",
              className: "_tFJqA",
              dangerouslySetInnerHTML: { __html: DTb },
            })
          ),
          fTb = V4(({ selected: a }) =>
            N4("div", {
              className: O4("whph4A", { zgzjww: a }),
              children: N4(__c.IL, {
                size: "medium",
                style: { width: "0.9em", height: "0.9em" },
                className: "_tFJqA",
              }),
            })
          ),
          ITb = T4((a) => {
            const {
              Ef: b,
              fUa: c,
              wva: d,
              mode: e = "viewable",
              measureRef: f,
              cq: g,
              onPointerDown: h,
            } = a;
            a = b.text || "\u00a0".repeat(16);
            const k = b.type === "embed" ? d.yb(b.url) : void 0,
              [l, m] = ZSb(!1),
              n = P4((t) => m(Q4(t)), [m]),
              p = P4((t) => m(!Q4(t)), [m]),
              q = P4(
                (t) => {
                  m(Q4(t.nativeEvent));
                  document.addEventListener("keydown", n);
                  document.addEventListener("keyup", p);
                },
                [m, n, p]
              ),
              r = P4(() => {
                m(!1);
                document.removeEventListener("keydown", n);
                document.removeEventListener("keyup", p);
              }, [m, n, p]);
            $Sb(() => {
              S4(() => {
                switch (b.type) {
                  case "mention":
                    b.user && d.apa(b.user);
                    break;
                  case "embed":
                    d.Yoa(b.url);
                }
              });
            }, [b, d]);
            oTb(() => {
              g === null || g === void 0 || g();
            }, [b.type, a, g]);
            return N4(HTb, {
              text: a,
              link: e === "viewable" || l ? k : void 0,
              W6a: b.text.length === 0,
              ariaLabel: b.text || "",
              className: aTb(b),
              zS: b.zS,
              H0a: eTb(b, d),
              i1a: gTb(b, { fUa: c }),
              measureRef: f,
              onPointerDown: h,
              onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
              onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0,
            });
          });
        var JTb = __c.L(() => ({
          FDb: __c.RM(11),
          mode: __c.G("A?", 1, "BY_USER_IDS"),
          lsb: __c.QM(1),
        }));
        var KTb = class {
            static A(a) {
              Q(a, { GQ: qTb.shallow, yKa: R4 });
            }
            l0(a) {
              return this.WFa.l0(a);
            }
            apa(a) {
              this.RBa.has(a) || this.GQ.has(a) || (this.GQ.add(a), this.z6a());
            }
            L4(a, b) {
              this.RBa.has(a) ||
                (this.RBa.set(a, b), this.GQ.delete(a), iTb(this.WFa, a, b));
            }
            async yKa() {
              if (this.GQ.size !== 0) {
                var a = [...this.GQ.values()];
                this.GQ.clear();
                if (this.XFa) {
                  var b = await this.XFa;
                  await Promise.all(
                    hTb(a).map(async (c) => {
                      const d = new JTb({ lsb: c }),
                        { Kwb: e } = await b.UBb(d);
                      S4(() => c.forEach((f) => this.L4(f, e.get(f))));
                    })
                  );
                } else a.forEach((c) => this.L4(c));
              }
            }
            constructor(a, b) {
              this.XFa = a;
              this.RBa = (KTb.A(this), new X4());
              this.GQ = new Set();
              this.WFa = new LTb();
              this.z6a = __c.Oc(() => this.yKa(), 200);
              S4(() => {
                b === null ||
                  b === void 0 ||
                  b.forEach((c, d) => this.L4(d, c));
              });
            }
          },
          LTb = class {
            l0(a) {
              return this.A6.get(a);
            }
            constructor() {
              this.A6 = new X4();
            }
          };
        var jTb = __c.L(() => ({
          id: __c.X("id", 1),
          extension: __c.Y("extension", 3),
          ZTa: __c.MM("revision", 5),
          version: __c.MM("version", 2),
          mDb: __c.MM("imagesetsLimit", 6),
        }));
        var MTb = class {
          static A(a) {
            Q(a, { l9a: R4 });
          }
          async l9a(a) {
            if (this.Vg) {
              var b = new URL(a).pathname;
              {
                const c =
                  /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                c == null || c.length < 2
                  ? (b = void 0)
                  : ((b = c[2]),
                    new Set(["edit", "remix", "view", "watch"]).has(c[2]) &&
                      (b = void 0),
                    (b = { id: c[1], extension: b }));
              }
              if (b) return await kTb(this, { url: a, ...b });
            }
          }
          constructor(a) {
            this.Vg = a;
            this.pXa = (MTb.A(this), new X4());
            this.promises = new Map();
          }
        };
        var NTb = class {
          static A(a) {
            Q(a, { u_: qTb.shallow });
          }
          async Yoa(a) {
            const b = new Image();
            let c;
            try {
              var d;
              const e = await ((d = this.JI) === null || d === void 0
                ? void 0
                : d.R7(a));
              c = e === null || e === void 0 ? void 0 : e.k9a;
            } catch (e) {}
            c
              ? ((b.src = c),
                (b.onload = R4(() => this.u_.set(a, c))),
                (b.onerror = R4(() => this.u_.set(a, void 0))))
              : S4(() => this.u_.set(a, void 0));
          }
          constructor(a) {
            this.JI = a;
            this.u_ = (NTb.A(this), new Map());
          }
        };
        __c.tEa = {
          jcb: function (a) {
            const b = a.document,
              c = a.Vg,
              d = a.yb,
              e = a.JI;
            var f = a.h8;
            const g = a.xd,
              h = a.wA,
              k = a.tX;
            a = a.zDb;
            f = new KTb(a === null || a === void 0 ? void 0 : a(), f);
            a = new NTb(e);
            new MTb(c);
            const l = new zTb(f, a, d, e),
              m = OSb(k, b);
            g.Mq.Aja = T4(({ item: p, measureRef: q }) => {
              const r = M4(() => xTb(p.Ef), [p.Ef]);
              return N4(ITb, { Ef: r, wva: l, measureRef: q });
            });
            const n = T4(({ context: p, cq: q }) => {
              const r = M4(() => __c.E(m(p.container)), [p]);
              oTb(q, [q, p.container.column.width]);
              return N4(ITb, { Ef: r, wva: l, cq: q });
            });
            h.jEa = ({ context: p, cq: q }) => ({
              type: "react",
              node: N4(n, { context: p, cq: q }),
            });
            return { wva: l };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/14d4ffe6128ddcf7.js.map
