(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [49222],
  {
    /***/ 691050: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(983117);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var F = __c.F;
        var C = __c.C;
        var fVb = function (a, b, c, d) {
            c = new eVb(c, d);
            C(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            C(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${
                a === null || a === void 0 ? void 0 : a.type
              }`
            );
            c.iia(a, b);
          },
          hVb = function (a) {
            return {
              ...__c.jbb,
              ...I5,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.cia.width,
                height: a.cia.height,
              },
              zb: a.zb.map(gVb),
            };
          },
          iVb = function (a) {
            switch (a.yD) {
              case 0:
                var b = __c.Oj.Rc().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.wh("color", a.color);
                b = b
                  .Hc(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.XK,
                  ...J5,
                  ...I5,
                  Sa: (c = a.Sa) !== null && c !== void 0 ? c : 0,
                  text: b,
                  dh: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.XK, ...J5, ...I5, text: b, dh: 2 }
                );
              default:
                throw new F(a);
            }
          },
          N5 = function ({ content: a, fill: b, border: c, W: d }) {
            b = { ...__c.Vab, fill: K5(b), border: L5(c), W: M5(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: hVb(a) };
              case "text":
                return { ...b, element: iVb(a) };
              case "layout":
                return { ...b, element: jVb(a) };
              default:
                throw new F(a);
            }
          },
          jVb = function ({
            cells: a,
            border: b,
            fill: c,
            W: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.Wab,
              ...J5,
              ...I5,
              G: J5.width,
              V: J5.height,
              fill: K5(c),
              border: L5(b),
              direction: 1,
              W: M5(d),
              cells: new Map(a.map((k) => [k.id, N5(k)])),
              behavior: {
                rules: [
                  {
                    eh: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g !== null && g !== void 0 ? g : 0,
                      rowGap: h !== null && h !== void 0 ? h : 0,
                      Ah: kVb(a),
                    },
                  },
                ],
              },
              Uf: void 0,
            };
          },
          kVb = function (a) {
            return new Map(a.map((b) => [b.id, lVb(b)]));
          },
          lVb = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.tAa,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.iR,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          L5 = function (a) {
            var b;
            const c =
              (b = a === null || a === void 0 ? void 0 : a.color) !== null &&
              b !== void 0
                ? b
                : "#000000";
            var d;
            return {
              ...__c.hE,
              all: a
                ? {
                    ...__c.YQ,
                    weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                    color: c,
                    Zf: !0,
                  }
                : void 0,
            };
          },
          M5 = function (a) {
            return {
              ...__c.hR,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          gVb = function (a) {
            return {
              ...__c.kbb,
              ...a,
              fill: K5(a.fill),
              stroke: mVb(a.stroke),
            };
          },
          mVb = function (a) {
            return a ? { ...__c.YQ, color: a.color, weight: a.weight } : void 0;
          },
          K5 = function (a) {
            var b;
            const c = {
              ...__c.Yv,
              Sa:
                (b = a === null || a === void 0 ? void 0 : a.Sa) !== null &&
                b !== void 0
                  ? b
                  : 0,
            };
            switch (a === null || a === void 0 ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, ob: a.ob };
              case void 0:
                return c;
              default:
                throw new F(a);
            }
          },
          sVb = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            nVb(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                oVb(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, N5(f));
                  g = !0;
                });
                g ||
                  (O5(e.fill, f.fill), pVb(e.border, f.border), qVb(e.W, f.W));
              },
              (e) => N5(e)
            );
            rVb(a.behavior, b, c);
            O5(a.fill, b.fill);
            qVb(a.W, b.W);
            pVb(a.border, b.border);
            var d;
            a.Sa = (d = b.Sa) !== null && d !== void 0 ? d : 0;
          },
          rVb = function (a, b, c) {
            P5(
              a.rules,
              [b],
              (d) => {
                tVb(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                tVb(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                var f;
                d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                nVb(
                  d.grid.Ah,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    typeof k === "number" && g.padding.all !== k
                      ? (g.padding.all = k)
                      : typeof k !== "number" &&
                        ((g.padding.Ca =
                          k === null || k === void 0 ? void 0 : k.Ca),
                        (g.padding.Na =
                          k === null || k === void 0 ? void 0 : k.Na),
                        (g.padding.Ba =
                          k === null || k === void 0 ? void 0 : k.Ba),
                        (g.padding.Wa =
                          k === null || k === void 0 ? void 0 : k.Wa));
                    g.alignSelf = p;
                  },
                  (g) => lVb(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  eh: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                    Ah: kVb(d.cells),
                  },
                };
              }
            );
          },
          uVb = function (a, b) {
            P5(
              a.zb,
              b.zb,
              (e, f) => {
                e.d = f.d;
                O5(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(mVb(f.stroke));
              },
              (e) => gVb(e)
            );
            const { viewBox: c, width: d } = hVb(b);
            a.width = d;
            __c.Yu(a.viewBox).equals(__c.Yu(c)) || (a.viewBox = c);
          },
          oVb = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? uVb(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Oj.domain.Zb(__c.Oj.va(a.text), iVb(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? sVb(a, b) : c();
                break;
              default:
                throw new F(b);
            }
          },
          nVb = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          P5 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          O5 = function (a, b) {
            switch (b === null || b === void 0 ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.ob.set(void 0);
                var c;
                a.Sa = (c = b.Sa) !== null && c !== void 0 ? c : 0;
                break;
              case "gradient":
                if (a.ob.ref && __c.E0a.domain.Zb(a.ob.ref, b.ob)) break;
                a.color = void 0;
                a.ob.set(b.ob);
                var d;
                a.Sa = (d = b.Sa) !== null && d !== void 0 ? d : 0;
                break;
              default:
                (a.color = void 0), a.ob.set(void 0);
            }
          },
          qVb = function (a, b) {
            b = M5(b);
            a.all = b.all;
            a.sE = b.sE;
            a.qE = b.qE;
            a.rE = b.rE;
            a.pE = b.pE;
          },
          pVb = function (a, b) {
            b = L5(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b ? __c.iE.domain.Zb(__c.iE.va(c), b) : !c && !b));
            c && a.all.set(b);
          },
          tVb = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          wVb = function (a, b, c, d) {
            let e = a.LTa.get(b);
            if (e) return e;
            e = {
              Ky: new vVb(c.sA, b, d, c.bra),
              EFa: void 0,
              $Oa: void 0,
              LPa: __c.UV.mode,
            };
            a.LTa.set(b, e);
            return e;
          },
          yVb = function (a, b, c, d, e) {
            var f, g;
            e = wVb(a, c, b, e);
            const h = e.Ky,
              k = e.$Oa,
              l = e.EFa,
              m = e.LPa;
            c = __c.$P.va(c);
            const n =
              ((f = (g = a.YA).iqa) === null || f === void 0
                ? void 0
                : f.call(g, d)) || __c.UV;
            (h.$j === k && xVb.structural(c, l) && n.mode === m) ||
              ((e.EFa = c),
              (e.$Oa = h.$j),
              (e.LPa = n.mode),
              (b = b.render(h, n)),
              a.uhb.update(d, b),
              fVb(
                d,
                b,
                (p, q) => a.KQ.tra.set(p, q),
                (p, q, r) => a.KQ.refs.set(p, { ref: q, key: r })
              ));
          },
          BVb = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.fib());
            c.push(
              zVb(
                () => {
                  a: {
                    var e = new AVb();
                    for (const f of b)
                      if ((e.NQ(f), e.hpa)) {
                        e = e.hpa;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.jc.isLoaded(e) || a.qsa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) C(f.type === "layout"), a.ik.lfa(f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          CVb = function (a, b) {
            return {
              PM: ({ qm: c }) => {
                var d;
                const { Ky: e } = wVb(a.renderer, c, b, a.w2),
                  f = __c.bQ.create([]),
                  g = [];
                g.push(BVb(a.O9a, f));
                g.push(
                  zVb(
                    () => {
                      var k, l;
                      return [
                        (k = (l = a.YA).iqa) === null || k === void 0
                          ? void 0
                          : k.call(l, f),
                        __c.$P.va(c),
                        e.$j,
                      ];
                    },
                    () => {
                      yVb(a.renderer, b, c, f, a.w2);
                    },
                    { fireImmediately: !0, equals: xVb.structural }
                  )
                );
                const h =
                  (d = b.Qta) === null || d === void 0
                    ? void 0
                    : d.call(b, { Ky: e });
                h && g.push(h);
                return {
                  kb: f,
                  $w: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          EVb = function (a, b) {
            let c = a.Y7.get(b);
            c || ((c = DVb("weakKey")), a.Y7.set(b, c));
            c.reportObserved();
          },
          Q5 = __webpack_require__(519427),
          xVb = Q5.comparer,
          FVb = Q5.computed,
          DVb = Q5.createAtom,
          R5 = Q5.observable,
          zVb = Q5.reaction,
          GVb = Q5.runInAction;
        var HVb = class {
          static A(a) {
            __c.Q(a, { Ljb: R5.ref, $$a: R5.ref });
          }
          constructor() {
            this.iqa = (HVb.A(this), void 0);
          }
        };
        var IVb = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          vVb = class {
            static A(a) {
              __c.Q(a, { qf: FVb });
            }
            get aPa() {
              var a = this.w2,
                b = this.qm,
                c = this.bra;
              let d = a.sources.get(b);
              d || ((d = R5.box(c)), a.sources.set(b, d));
              return d;
            }
            get $j() {
              return this.aPa.get();
            }
            get qf() {
              return this.sA.Gv({ type: "dict", value: this.qm });
            }
            Mm(a) {
              this.aPa.set(
                a instanceof Function
                  ? { ...this.$j, ...a() }
                  : { ...this.$j, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.sA = a;
              this.qm = b;
              this.w2 = c;
              this.bra = d;
              vVb.A(this);
            }
          };
        var eVb = class {
          Q6(a, b) {
            this.CTa(a, b);
            b.ref && this.swa(a, b.ref, b.key);
          }
          QQ(a, b) {
            b.ref && this.swa(a.text, b.ref, b.key);
          }
          uCa(a, b) {
            switch (b.content.type) {
              case "shape":
                C(a.element.type === "shape");
                this.Q6(a.element, b.content);
                break;
              case "text":
                C(a.element.type === "text");
                this.QQ(a.element, b.content);
                break;
              case "layout":
                C(a.element.type === "layout");
                this.iia(a.element, b.content);
                break;
              default:
                throw new F(b.content);
            }
          }
          iia(a, b) {
            this.CTa(a, b);
            b.ref && this.swa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                C(!!d && !!a),
                this.uCa(d, a);
          }
          constructor(a, b) {
            this.CTa = a;
            this.swa = b;
          }
        };
        var I5 = { locked: !0, hp: { IZ: !1, OW: !1 }, hk: !0 },
          J5 = { top: 0, left: 0, width: 1, height: 1 };
        var JVb = class {
          constructor(a) {
            this.ik = a;
            this.update = (b, c) => {
              P5(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      sVb(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...jVb(d),
                        ...I5,
                        width: d.minWidth,
                        height: d.minHeight,
                        G: d.minWidth,
                        V: d.minHeight,
                      };
                      break a;
                    default:
                      throw new F(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                C(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.G = c.minWidth),
                  (d.V = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  this.ik.lfa(d);
            };
          }
        };
        var KVb = class {
          constructor(a, b, c) {
            this.uhb = a;
            this.KQ = b;
            this.YA = c;
            this.LTa = new WeakMap();
          }
        };
        var LVb = class {
            static A(a) {
              __c.Q(a, { qsa: R5.shallow });
            }
            constructor(a, b) {
              this.jc = a;
              this.ik = b;
              this.qsa = (LVb.A(this), new Set());
              this.spa = new Set();
              this.fib = () => {
                this.raa ||
                  (this.raa = __c.mfa(this.jc).subscribe((d) => {
                    GVb(() => {
                      this.qsa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.spa.add(c);
                return () => {
                  this.spa.delete(c);
                  this.spa.size <= 0 &&
                    this.raa &&
                    (this.raa.unsubscribe(), (this.raa = void 0));
                };
              };
            }
          },
          AVb = class extends __c.AC {
            NQ(a, b) {
              this.hpa || super.NQ(a, b);
            }
            QQ(a) {
              this.hpa =
                (a = a.text
                  .iz("font-family")
                  ["font-family"].values()
                  .next().value) && __c.rs(a).id;
            }
          };
        var MVb = !1,
          NVb = class {
            register(a, b) {
              this.DE.has(a) ||
                (this.DE.set(a, b),
                MVb || (__c.aQ.set(a, CVb(this, b)), (MVb = !0)));
            }
            get(a) {
              return this.DE.get(a);
            }
            constructor(a, b, c, d, e) {
              this.renderer = a;
              this.w2 = b;
              this.YA = c;
              this.jc = d;
              this.ik = e;
              this.DE = new Map();
              this.O9a = new LVb(this.jc, this.ik);
            }
          };
        var OVb = class {
          delete(a) {
            var b;
            const c = this.map.delete(a);
            c &&
              ((b = this.Y7.get(a)) === null ||
                b === void 0 ||
                b.reportChanged());
            return c;
          }
          get(a) {
            EVb(this, a);
            return this.map.get(a);
          }
          has(a) {
            EVb(this, a);
            return this.map.has(a);
          }
          set(a, b) {
            if (!this.map.has(a) || this.map.get(a) !== b) {
              var c;
              this.map.set(a, b);
              (c = this.Y7.get(a)) === null ||
                c === void 0 ||
                c.reportChanged();
            }
            return this;
          }
          constructor() {
            this.Y7 = new WeakMap();
            this.map = new WeakMap();
          }
        };
        var PVb = class {
            constructor() {
              this.tra = new OVb();
              this.refs = new OVb();
            }
          },
          QVb = class {
            getContext(a) {
              return this.KQ.refs.get(a);
            }
            zN(a) {
              return this.KQ.tra.get(a);
            }
            constructor(a, b, c) {
              this.KQ = a;
              this.w2 = b;
              this.renderer = c;
            }
          };
        __c.iOa = {
          ocb: function (a) {
            const b = new HVb(),
              c = new PVb(),
              d = new KVb(new JVb(a.ik), c, b),
              e = new IVb();
            a = new NVb(d, e, b, a.jc, a.ik);
            return { YA: b, CLb: new QVb(c, e, d), ACa: a, KQ: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/5a074c5e284fad9b.js.map
