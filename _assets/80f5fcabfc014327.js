(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [95665],
  {
    /***/ 208460: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(983117);
      __web_req__(353876);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var F = __c.F;
        var O = __c.O;
        var yb = __c.yb;
        var ARb = function (a, b, c) {
            return new __c.Hb(a, c ? __c.Ib(c) : void 0, __c.Jb, {
              ignoreTag: !0,
            }).format(Object.fromEntries(Object.entries(b)));
          },
          BRb = function (a) {
            __c.YCb({ ...a, oc: a.span });
          },
          h4 = function (a, b) {
            var c = a.DXa.get(b);
            if (c != null) return c;
            c = { value: a.sA.Et(b) };
            a.DXa.set(b, c);
            a.xXa.set(c, b);
            return c;
          },
          i4 = function (a, b) {
            a = a.xXa.get(b);
            if (a == null) throw new CRb("ref does not exists");
            return a;
          },
          l4 = function (a) {
            const b = (c, d) => {
              if (c == null && a != null) return a;
              if ((c === null || c === void 0 ? void 0 : c.type) !== "string")
                throw d === "toWidgetData"
                  ? new j4("string", c)
                  : new k4("string", c);
              return c.value;
            };
            return {
              jl: (c) => ({ type: "string", value: c }),
              Ft: (c) => b(c, "toWidgetState"),
              Et: (c) => b(c, "toWidgetData"),
              Gv: (c) => b(c, "toWidgetData"),
            };
          },
          n4 = function (a, b) {
            if (a.length === 0)
              throw new m4(
                "At least one value must be provided for literal types."
              );
            const c = new Set(a),
              d = (e, f) => {
                if (e == null) return b;
                if (
                  (e === null || e === void 0 ? void 0 : e.type) !== "string" ||
                  !c.has(e.value)
                )
                  throw f === "toWidgetData"
                    ? new j4("literal", e)
                    : new k4("literal", e);
                return e.value;
              };
            return {
              jl: (e) => ({ type: "string", value: e }),
              Ft: (e) => d(e, "toWidgetState"),
              Et: (e) => d(e, "toWidgetData"),
              Gv: (e) => d(e, "toWidgetData"),
            };
          },
          o4 = function (a) {
            const b = (c, d) => {
              if (c == null || !Number.isFinite(a)) return a;
              if (
                (c === null || c === void 0 ? void 0 : c.type) !== "double" ||
                !Number.isFinite(c.value)
              )
                throw d === "toWidgetData"
                  ? new j4("double", c)
                  : new k4("double", c);
              return c.value;
            };
            return {
              jl: (c) => {
                if (!Number.isFinite(c)) throw new DRb(c);
                return { type: "double", value: c };
              },
              Ft: (c) => b(c, "toWidgetState"),
              Et: (c) => b(c, "toWidgetData"),
              Gv: (c) => b(c, "toWidgetData"),
            };
          },
          ERb = function () {
            const a = (b) => {
              if ((b === null || b === void 0 ? void 0 : b.type) !== "fill")
                throw new j4("fill", b);
              return b.value;
            };
            return {
              jl: (b) => ({ type: "fill", value: b }),
              Ft: (b) => {
                if ((b === null || b === void 0 ? void 0 : b.type) !== "fill")
                  throw new k4("fill", b);
                return b.value;
              },
              Et: a,
              Gv: a,
            };
          },
          q4 = function (a) {
            const b = new Set();
            for (const d of Object.keys(a)) {
              const [e] = a[d];
              if (b.has(e))
                throw new m4(
                  `Duplicate serialized keys "${e}" found in record schema.`
                );
              b.add(e);
            }
            const c = (d, e) => {
              if ((e === null || e === void 0 ? void 0 : e.type) !== "dict")
                throw new j4("record", e);
              const f = {};
              for (const g of Object.keys(a)) {
                const [h, k] = a[g],
                  l = p4(
                    () => {
                      const m = e.value.get(h);
                      return k.Et(m);
                    },
                    { keepAlive: !0 }
                  );
                Object.defineProperty(f, g, {
                  get() {
                    return l.get();
                  },
                  set(m) {
                    d !== "readonly" &&
                      ((m = k.jl(m)),
                      m == null ? e.value.delete(h) : e.value.set(h, m));
                  },
                  enumerable: !0,
                });
              }
              return f;
            };
            return {
              jl: (d) => {
                const e = {};
                for (const f of Object.keys(a)) {
                  const [g, h] = a[f],
                    k = h.jl(d[f]);
                  k != null && (e[g] = k);
                }
                return { type: "dict", value: new Map(Object.entries(e)) };
              },
              Ft: (d) => {
                if ((d === null || d === void 0 ? void 0 : d.type) !== "dict")
                  throw new k4("record", d);
                const e = {};
                for (const f of Object.keys(a)) {
                  const [g, h] = a[f],
                    k = h.Ft(d.value.get(g));
                  k != null && (e[f] = k);
                }
                return e;
              },
              Et: (d) => c("editable", d),
              Gv: (d) => c("readonly", d),
              ec: (d) => q4({ ...a, ...d }),
            };
          },
          s4 = function (a) {
            return {
              jl: (b) => ({ type: "list", value: b.map((c) => a.jl(c)) }),
              Ft: (b) => {
                if ((b === null || b === void 0 ? void 0 : b.type) !== "list")
                  throw new k4("list", b);
                return b.value.filter(yb).map((c) => a.Ft(c));
              },
              Et: (b) => {
                if ((b === null || b === void 0 ? void 0 : b.type) !== "list")
                  throw new j4("list", b);
                return new FRb(b, a);
              },
              Gv: (b) => {
                if ((b === null || b === void 0 ? void 0 : b.type) !== "list")
                  throw new j4("list", b);
                return new r4(b, a);
              },
            };
          },
          GRb = function (a) {
            return {
              jl: (b) => {
                if (b != null) return a.jl(b);
              },
              Ft: (b) => {
                if (b != null) return a.Ft(b);
              },
              Et: (b) => {
                if (b != null) return a.Et(b);
              },
              Gv: (b) => {
                if (b != null) return a.Gv(b);
              },
            };
          },
          t4 = function (a, b) {
            const c = new Set(Object.keys(a)),
              d = (e) => {
                var f;
                if ((e === null || e === void 0 ? void 0 : e.type) !== "dict")
                  throw new j4("union", e);
                const g =
                  (f = e.value.get("k")) === null || f === void 0
                    ? void 0
                    : f.value;
                f = e.value.get("v");
                if (
                  g == null ||
                  f == null ||
                  typeof g !== "string" ||
                  !c.has(g)
                )
                  throw new j4("union", e);
                return { M8: a[g], N8: f };
              };
            return {
              jl: (e) => {
                const f = b(e);
                return {
                  type: "dict",
                  value: new Map([
                    ["k", { type: "string", value: f }],
                    ["v", a[f].jl(e)],
                  ]),
                };
              },
              Ft: (e) => {
                var f;
                if ((e === null || e === void 0 ? void 0 : e.type) !== "dict")
                  throw new k4("union", e);
                const g =
                  (f = e.value.get("k")) === null || f === void 0
                    ? void 0
                    : f.value;
                f = e.value.get("v");
                if (
                  g == null ||
                  f == null ||
                  typeof g !== "string" ||
                  !c.has(g)
                )
                  throw new k4("union", e);
                const { M8: h, N8: k } = { M8: a[g], N8: f };
                return h.Ft(k);
              },
              Et: (e) => {
                const { M8: f, N8: g } = d(e);
                return f.Et(g);
              },
              Gv: (e) => {
                const { M8: f, N8: g } = d(e);
                return f.Gv(g);
              },
            };
          },
          HRb = function (a) {
            const b = () => a.$j.FA.get(a.qf.$G) || u4;
            return {
              WT: function () {
                return a.$j.Yj
                  ? 3
                  : a.$j.Xbb === "checking" || a.$j.settings.status === 2
                  ? 1
                  : a.$j.settings.status === 3
                  ? 4
                  : a.$j.V1
                  ? 2
                  : 0;
              },
              Spa: function () {
                const c = a.qf,
                  { nL: d } = b();
                return !(
                  !d ||
                  !c.fields.first(
                    ({ value: e }) =>
                      !!e.options.first(({ value: f }) => f.id === d)
                  )
                );
              },
              aab: function (c, d) {
                const { results: e } = b();
                c = e.fields.get(c);
                if (!c) return 0;
                var f;
                d = (f = c.nK.get(d)) !== null && f !== void 0 ? f : 0;
                f = c.total > 0 ? (d / c.total) * 100 : 0;
                Number.isInteger(f) || (f = parseFloat(f.toFixed(1)));
                return f;
              },
              sab: function (c) {
                if (!a.qf.fields.first(({ value: e }) => e.id === c)) return 0;
                var { results: d } = b();
                return (d = d.fields.get(c)) ? d.total : 0;
              },
              dqa: b,
              chb: (c) => {
                const d = new Map(a.$j.FA);
                d.set(a.qf.$G, { ...b(), ...c });
                return d;
              },
            };
          },
          LRb = function (a, b, c, d, e, f) {
            function g() {
              const v = b.WT(),
                u = q();
              return (p === "poll" || !u) && v === 0;
            }
            async function h() {
              var v;
              const u = f.pk("submit_response", {
                CA: { name: "ui.rendering.form.submit_response" },
              });
              var x = {
                wpa: m,
                c$a: p,
                QH: "interacted",
                action: "response_submitted",
                location: "in_form",
              };
              e && BRb({ span: u, qa: e, event: IRb, props: x });
              const { results: y, yf: z, Qva: A } = r();
              if (z != null && g())
                if (
                  (x =
                    (v = a.qf.fields.first(({ value: K }) => {
                      var M;
                      return !(
                        (M = K.options.first(({ value: P }) => P.id === z)) ===
                          null ||
                        M === void 0 ||
                        !M.value
                      );
                    })) === null || v === void 0
                      ? void 0
                      : v.value)
                ) {
                  l("selected_field_found", u);
                  var B = a.$j,
                    D = y;
                  p === "poll" &&
                    A &&
                    A !== z &&
                    (D = v4({ jla: y, dF: x.id, sV: A }));
                  D = JRb({ zIa: D, dF: x.id, sV: z });
                  l("field_results_created", u);
                  w4(() => {
                    a.Mm(() => ({
                      FA: t({ yf: z, nL: z, results: D }),
                      V1: !0,
                    }));
                  });
                  l("submission_set", u);
                  u.yT();
                  var H = await c.LEb({
                    tW: a.qf.tW,
                    $G: n,
                    fwb: {
                      dF: x.id,
                      un: x.label.text.ba.trim(),
                      yf: z,
                      options: x.options.map(({ value: K }) => ({
                        id: K.id,
                        label: K.label.text.ba.trim(),
                      })),
                    },
                  });
                  if (H.ok)
                    return w4(() => {
                      const K = (M) => {
                        var P;
                        return (P = H.value[0]) === null || P === void 0
                          ? void 0
                          : P.Vxb.includes(M);
                      };
                      a.Mm(() => ({
                        V1: !1,
                        settings: { ...a.$j.settings, Gba: K },
                        FA: t({ Qva: void 0 }),
                      }));
                    });
                  d === null ||
                    d === void 0 ||
                    __c.yj(d, {
                      Wu: O("izckBA"),
                      group: KRb,
                      HR: { wy: O("mQhziQ"), onClick: h },
                    });
                  var J = v4({ jla: D, dF: x.id, sV: z });
                  A && (J = JRb({ zIa: J, dF: x.id, sV: A }));
                  w4(() => {
                    a.Mm({
                      ...B,
                      ...(A && { FA: t({ yf: A, nL: A, results: J }) }),
                    });
                  });
                } else u.abort();
              else u.abort();
            }
            async function k(v) {
              var u;
              const x = r(),
                y =
                  (u = a.qf.fields.first(({ value: B }) => {
                    var D;
                    return !(
                      (D = B.options.first(({ value: H }) => H.id === v)) ===
                        null ||
                      D === void 0 ||
                      !D.value
                    );
                  })) === null || u === void 0
                    ? void 0
                    : u.value;
              if (y) {
                var z = a.$j,
                  A = v4({ jla: x.results, dF: y.id, sV: v });
                w4(() => {
                  a.Mm(() => ({
                    FA: t({ yf: void 0, nL: void 0, results: A }),
                    iB: void 0,
                    V1: !0,
                  }));
                });
                (await c.YHb({ $G: n })).ok
                  ? w4(() => {
                      a.Mm({ V1: !1 });
                    })
                  : (d === null ||
                      d === void 0 ||
                      __c.yj(d, {
                        Wu: O("kgHTHw"),
                        group: KRb,
                        HR: { wy: O("mQhziQ"), onClick: () => k(v) },
                      }),
                    w4(() => {
                      a.Mm(z);
                    }));
              }
            }
            function l(v, u) {
              u.Ck(v);
              u.Sh().Ck(v);
            }
            const m = a.qf.id,
              n = a.qf.$G,
              p = a.qf.type,
              q = b.Spa,
              r = b.dqa,
              t = b.chb;
            return {
              submit: h,
              pta: function () {
                a.Mm(() => ({ gQ: 1 }));
              },
              qta: function () {
                a.Mm(() => ({ gQ: 0 }));
              },
              ota: function () {
                a.Mm(() => ({ gQ: 2 }));
              },
              rta: function () {
                a.Mm(() => ({ gQ: 1 }));
              },
              rha: function (v) {
                const u = r(),
                  x =
                    p === "poll" &&
                    v === (u === null || u === void 0 ? void 0 : u.yf) &&
                    v === (u === null || u === void 0 ? void 0 : u.nL);
                if (g() && x) k(v);
                else if (
                  g() &&
                  a.qf.fields.some(({ value: z }) =>
                    z.options.some(({ value: A }) => A.id === v)
                  )
                ) {
                  var y = u === null || u === void 0 ? void 0 : u.nL;
                  w4(() => {
                    const z = r();
                    a.Mm(() => ({
                      FA: t({ Qva: y, yf: z.yf === v ? void 0 : v }),
                    }));
                  });
                  p === "poll" && h();
                }
              },
              gda: function (v) {
                g() &&
                  a.qf.fields.some(({ value: u }) =>
                    u.options.some(({ value: x }) => x.id === v)
                  ) &&
                  a.Mm(() => ({ vF: v }));
              },
              hda: function (v) {
                b.WT() === 0 &&
                  a.qf.fields.some(({ value: u }) =>
                    u.options.some(({ value: x }) => x.id === v)
                  ) &&
                  a.$j.vF &&
                  a.Mm(() => ({ vF: void 0 }));
              },
              eda: function (v) {
                const { nL: u, yf: x } = r();
                b.WT() === 0 &&
                  a.qf.fields.some(({ value: y }) =>
                    y.options.some(({ value: z }) => z.id === v)
                  ) &&
                  x !== v &&
                  !u &&
                  a.Mm(() => ({ iB: v }));
              },
              ida: function (v) {
                b.WT() === 0 &&
                  a.qf.fields.some(({ value: u }) =>
                    u.options.some(({ value: x }) => x.id === v)
                  ) &&
                  a.$j.iB &&
                  a.Mm(() => ({ iB: void 0 }));
              },
            };
          },
          v4 = function ({ jla: a, dF: b, sV: c }) {
            var d;
            const e =
              (d = a.fields.get(b)) !== null && d !== void 0
                ? d
                : { id: b, nK: new Map(), total: 0 };
            var f;
            d = Math.max(
              0,
              ((f = e.nK.get(c)) !== null && f !== void 0 ? f : 0) - 1
            );
            f = new Map(e.nK);
            d > 0 ? f.set(c, d) : f.delete(c);
            return {
              fields: x4(a.fields, b, {
                id: b,
                nK: f,
                total: Math.max(0, e.total - 1),
              }),
            };
          },
          JRb = function ({ zIa: a, dF: b, sV: c }) {
            var d;
            const e =
              (d = a.fields.get(b)) !== null && d !== void 0
                ? d
                : { id: b, nK: new Map(), total: 0 };
            var f;
            d = ((f = e.nK.get(c)) !== null && f !== void 0 ? f : 0) + 1;
            return {
              fields: x4(a.fields, b, {
                id: b,
                nK: x4(e.nK, c, d),
                total: e.total + 1,
              }),
            };
          },
          x4 = function (a, b, c) {
            return new Map([...a.entries(), [b, c]]);
          },
          y4 = function (a, b) {
            var c;
            return (((c = a.Bha) === null || c === void 0
              ? void 0
              : c.get(a.document.language || "en")) || [])[MRb[b]];
          },
          NRb = function (a) {
            y4(a, "yourNameWontBeShared") || O("Gzs/9g");
          },
          ORb = function (a) {
            y4(a, "yourNameWillBeShared") || O("WjcAyg");
          },
          PRb = async function () {
            var { vBa: a } = await __webpack_require__
              .me(448776)
              .then(() => ({
                vBa: '{\n"af-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Verkeerd",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Dien tans in \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laai tans...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Vanlyn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrek",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Regstreeks"\n},\n"ar":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-AE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-EG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-SA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"as-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0985\u09b6\u09c1\u09a6\u09cd\u09a7",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u09a6\u09be\u0996\u09bf\u09b2 \u0995\u09f0\u09be \u09b9\u09c8 \u0986\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\'\u09a1 \u09b9\u09c8 \u0986\u099b\u09c7",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u0995\u09bf\u09ac\u09be \u09b8\u09ae\u09b8\u09cd\u09af\u09be \u09b9\u2019\u09b2",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b6\u09c1\u09a6\u09cd\u09a7",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"az-AZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"T\u0259qdim edilir...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckl\u0259nir...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Canl\u0131"\n},\n"bg-BG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041f\u043e\u0434\u0430\u0432\u0430\u043d\u0435\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u041d\u0430 \u0436\u0438\u0432\u043e"\n},\n"bn-BD":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u09ad\u09be\u0997 \u0995\u09b0\u09be \u09b9\u09ac\u09c7",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u09ad\u09c1\u09b2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u09aa\u09cd\u09b0\u09a4\u09bf\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09b8\u09c7\u09ad \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u099c\u09ae\u09be \u09a6\u09c7\u0993\u09df\u09be \u09b9\u099a\u09cd\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u099f\u09bf \u09ad\u09cb\u099f} other {# \u099f\u09bf \u09ad\u09cb\u099f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u09b6\u09c7\u09af\u09bc\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09ac\u09c7 \u09a8\u09be",\n"d648001f72873b11f1495205043049417024f9cf":"\u0995\u09cb\u09a8\u09cb \u09b8\u09ae\u09b8\u09cd\u09af\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b8\u09a0\u09bf\u0995",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"ca-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"El teu nom es compartir\u00e0",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecte",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"S\'ha desat la resposta",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"S\'est\u00e0 enviant...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"S\'est\u00e0 carregant...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} other {# vots}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sense connexi\u00f3",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No es compartir\u00e0 el teu nom",\n"d648001f72873b11f1495205043049417024f9cf":"Hi ha hagut un problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcte",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicada"\n},\n"ceb-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sayop",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Nagsumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nag-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Adunay nahitabo nga problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Husto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"cs-CZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e jm\u00e9no bude sd\u00edleno",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vn\u011b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpov\u011b\u010f ulo\u017eena",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odes\u00edl\u00e1n\u00ed\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edt\u00e1n\u00ed...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0hlas} few {#\u00a0hlasy} many {#\u00a0hlasu} other {#\u00a0hlas\u016f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e jm\u00e9no nebude sd\u00edleno",\n"d648001f72873b11f1495205043049417024f9cf":"N\u011bco se pokazilo",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vn\u011b",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00a0dispozici"\n},\n"cy-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Anghywir",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wrthi\'n cyflwyno...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yn llwytho...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"All-lein",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Cywir",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yn Fyw"\n},\n"da-DK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Dit navn deles",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Forkert",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svaret er gemt",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Indsender...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Indl\u00e6ser...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Dit navn deles ikke",\n"d648001f72873b11f1495205043049417024f9cf":"Der gik noget galt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrekt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"de-DE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Dein Name bleibt nicht anonym",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Falsch",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwort gespeichert",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wird gesendet \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# Stimme} other {# Stimmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Dein Name ist nicht sichtbar",\n"d648001f72873b11f1495205043049417024f9cf":"Da ist etwas schiefgelaufen.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Richtig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"el-GR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03c3\u03b1\u03c2 \u03b8\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u039b\u03ac\u03b8\u03bf\u03c2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0397 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b5",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u03c8\u03ae\u03c6\u03bf\u03c2} other {# \u03c8\u03ae\u03c6\u03bf\u03b9}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0395\u03ba\u03c4\u03cc\u03c2 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03c3\u03b1\u03c2 \u03b4\u03b5\u03bd \u03b8\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af",\n"d648001f72873b11f1495205043049417024f9cf":"\u03a0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03ba\u03ac\u03c0\u03bf\u03b9\u03bf \u03c0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u03a3\u03c9\u03c3\u03c4\u03ac",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0394\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03bf"\n},\n"en":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-AU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-psaccent":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"es-419":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-AR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Vamos a compartir tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se va a compartir tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-CO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-MX":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no funcion\u00f3.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-US":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Se produjo un error",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"et-EE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vale",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Esitatud ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laadimine ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"V\u00f5rgu\u00fchenduseta",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u00d5ige",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Avalik"\n},\n"eu-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Oker",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bidaltzen...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kargatzen\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Lineaz kanpo",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Zuzen",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publikoa"\n},\n"fa-IR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0646\u0627\u062f\u0631\u0633\u062a",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062f\u0631\u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062f\u0631\u062d\u0627\u0644 \u0628\u0627\u0631 \u06a9\u0631\u062f\u0646\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641\u0644\u0627\u06cc\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u06cc\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0632\u0646\u062f\u0647"\n},\n"ff-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nana daidai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Tottirde...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Lowd\u00e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Boowal \u0253oggol",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Huunde boni",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Wuur"\n},\n"fi-FI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nimesi jaetaan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"V\u00e4\u00e4rin",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Vastaus tallennettu",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"L\u00e4hetet\u00e4\u00e4n...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ladataan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u00e4\u00e4ni} other {# \u00e4\u00e4nt\u00e4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nime\u00e4si ei jaeta",\n"d648001f72873b11f1495205043049417024f9cf":"Jokin meni pieleen",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Oikein",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00e4ynniss\u00e4"\n},\n"fr-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera partag\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-CA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera communiqu\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-FR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera partag\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"gl-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrectas",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sen conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correctas",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En directo"\n},\n"gu-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0aa8\u0abe\u0aae \u0ab6\u0ac7\u0ab0 \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a96\u0acb\u0a9f\u0abe",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0a9c\u0ab5\u0abe\u0aac \u0ab8\u0abe\u0a9a\u0ab5\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0acd\u0aaf\u0acb",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0ab8\u0aac\u0aae\u0abf\u0a9f \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe \u0a9b\u0ac0\u0a8f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0ab2\u0acb\u0aa1 \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe\u0a82 \u0a9b\u0ac7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0aae\u0aa4} other {# \u0aae\u0aa4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a91\u0aab\u0ab2\u0abe\u0a87\u0aa8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0aa8\u0abe\u0aae \u0ab6\u0ac7\u0ab0 \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7 \u0aa8\u0ab9\u0ac0\u0a82",\n"d648001f72873b11f1495205043049417024f9cf":"\u0a95\u0a82\u0a88\u0a95 \u0a96\u0acb\u0a9f\u0ac1\u0a82 \u0aa5\u0aaf\u0ac1\u0a82",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0ab8\u0abe\u0a9a\u0abe",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ab2\u0abe\u0a87\u0ab5"\n},\n"ha-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Ba daidai ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Aikawa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u018aorawa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"A waje da layi",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Nan take"\n},\n"he-IL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u05e9\u05de\u05da \u05d9\u05e9\u05d5\u05ea\u05e3",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u05dc\u05d0 \u05e0\u05db\u05d5\u05df",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u05d4\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e0\u05e9\u05de\u05e8\u05d4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u05e9\u05d5\u05dc\u05d7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u05d8\u05d5\u05e2\u05df...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {\u05d4\u05e6\u05d1\u05e2\u05d4 \u05d0\u05d7\u05ea} two {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} many {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} other {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u05dc\u05d0 \u05de\u05e7\u05d5\u05d5\u05df",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u05d4\u05e9\u05dd \u05e9\u05dc\u05da \u05dc\u05d0 \u05d9\u05e9\u05d5\u05ea\u05e3",\n"d648001f72873b11f1495205043049417024f9cf":"\u05de\u05e9\u05d4\u05d5 \u05d4\u05e9\u05ea\u05d1\u05e9",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u05e0\u05db\u05d5\u05df",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u05d6\u05de\u05d9\u05df"\n},\n"hi-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e \u0936\u0947\u092f\u0930 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u091c\u0935\u093e\u092c \u0938\u0947\u0935 \u0915\u093f\u092f\u093e \u0917\u092f\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u093f\u092f\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0935\u094b\u091f} other {# \u0935\u094b\u091f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u095e\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e \u0936\u0947\u092f\u0930 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e",\n"d648001f72873b11f1495205043049417024f9cf":"\u0915\u094b\u0908 \u0917\u0921\u093c\u092c\u0921\u093c\u0940 \u0939\u0941\u0908",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"hr-HR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e ime se dijeli",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neto\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odgovor je spremljen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Slanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditavanje...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# glas} few {# glasa} other {# glasova}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Izvan mre\u017ee",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e se ime ne\u0107e dijeliti",\n"d648001f72873b11f1495205043049417024f9cf":"Do\u0161lo je do pogre\u0161ke",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"hu-HU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"A neved meg lesz osztva",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Helytelen",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"V\u00e1lasz mentve",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bek\u00fcld\u00e9s...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bet\u00f6lt\u00e9s\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# szavazat} other {# szavazat}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"A neved nem lesz megosztva",\n"d648001f72873b11f1495205043049417024f9cf":"Hiba t\u00f6rt\u00e9nt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Helyes",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u00c9l\u0151"\n},\n"hy-AM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u054d\u056d\u0561\u056c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0546\u0565\u0580\u056f\u0561\u0575\u0561\u0581\u057e\u0578\u0582\u0574 \u0567...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0532\u0565\u057c\u0576\u0578\u0582\u0574...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0531\u0576\u0581\u0561\u0576\u0581",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0543\u056b\u0577\u057f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0540\u0580\u0561\u057a\u0561\u0580\u0561\u056f\u057e\u0561\u056e \u0567"\n},\n"id-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama Anda akan dibagikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sedang mengirim ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuat ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama Anda tidak akan dibagikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terjadi kesalahan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Benar",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Sudah tayang"\n},\n"ig-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abughi eziokwu",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Na-enyefe",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na-ebugo...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"An\u1ecdgh\u1ecb n\'\u1ecbntanet\u1ecb",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Eziokwu",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Gbanyere"\n},\n"it-IT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Il tuo nome verr\u00e0 condiviso",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Risposta errata",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Risposta salvata",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Stiamo inviando il modulo...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Caricamento in corso...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# voti}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Non condivideremo il tuo nome",\n"d648001f72873b11f1495205043049417024f9cf":"Abbiamo riscontrato un errore",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Risposta corretta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Disponibile"\n},\n"ja-Hira":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u3042\u306a\u305f\u306e\u540d\u524d\u304c\u5171\u6709\u3055\u308c\u307e\u3059",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u3075\u305b\u3044\u304b\u3044",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u3078\u3093\u3057\u3093\u304c\u307b\u305e\u3093\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u305d\u3046\u3057\u3093\u3061\u3085\u3046...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u3088\u307f\u3053\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u3072\u3087\u3046} other {#\u3072\u3087\u3046}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u304a\u3075\u3089\u3044\u3093",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u540d\u524d\u306f\u5171\u6709\u3055\u308c\u307e\u305b\u3093",\n"d648001f72873b11f1495205043049417024f9cf":"\u3082\u3093\u3060\u3044\u304c\u306f\u3063\u305b\u3044\u3057\u307e\u3057\u305f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u305b\u3044\u304b\u3044",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u3053\u3046\u304b\u3044\u306a\u304b"\n},\n"ja-JP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u3042\u306a\u305f\u306e\u540d\u524d\u304c\u5171\u6709\u3055\u308c\u307e\u3059",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u89e3",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u8fd4\u4fe1\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u9001\u4fe1\u4e2d...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u30aa\u30d5\u30e9\u30a4\u30f3",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u540d\u524d\u306f\u5171\u6709\u3055\u308c\u307e\u305b\u3093",\n"d648001f72873b11f1495205043049417024f9cf":"\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u89e3",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u516c\u958b\u4e2d"\n},\n"jv-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama Anda akan dibagikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimake...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamot...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama Anda tidak akan dibagikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terjadi kesalahan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Langsung"\n},\n"ka-GE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u10db\u10d8\u10db\u10d3\u10d8\u10dc\u10d0\u10e0\u10d4\u10dd\u10d1\u10e1 \u10e9\u10d0\u10d1\u10d0\u10e0\u10d4\u10d1\u10d0...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u10dd\u10e4\u10da\u10d0\u10d8\u10dc\u10d8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u10e1\u10ec\u10dd\u10e0\u10d8",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u10e1\u10d0\u10ef\u10d0\u10e0\u10dd"\n},\n"kk-KZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0414\u04b1\u0440\u044b\u0441 \u0435\u043c\u0435\u0441",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0416\u0456\u0431\u0435\u0440\u0456\u043b\u0443\u0434\u0435...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u0435\u043b\u0443\u0434\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0414\u04b1\u0440\u044b\u0441",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0416\u0430\u043b\u043f\u044b\u0493\u0430 \u043e\u0440\u0442\u0430\u049b"\n},\n"km-KH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17b6\u1780\u17cb\u1794\u1789\u17d2\u1787\u17bc\u1793...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1782\u17d2\u1798\u17b6\u1793\u17a2\u17ca\u17b8\u1793\u1792\u17ba\u178e\u17b7\u178f",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u1798\u17b6\u1793\u17a2\u17d2\u179c\u17b8\u1798\u17bd\u1799\u1781\u17bb\u179f\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1794\u1793\u17d2\u178f\u1795\u17d2\u1791\u17b6\u179b\u17cb"\n},\n"kn-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0cc6\u0cb8\u0cb0\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0c82\u0c9a\u0cbf\u0c95\u0cca\u0cb3\u0ccd\u0cb3\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0ca6\u0cc6",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0caa\u0ccd\u0cb0\u0ca4\u0cbf\u0c95\u0ccd\u0cb0\u0cbf\u0caf\u0cc6\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0c89\u0cb3\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0cb8\u0cb2\u0ccd\u0cb2\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0cb2\u0ccb\u0ca1\u0ccd \u0c86\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0cae\u0ca4} other {# \u0cae\u0ca4\u0c97\u0cb3\u0cc1}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c86\u0cab\u0ccd\u200c\u0cb2\u0cc8\u0ca8\u0ccd",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0cc6\u0cb8\u0cb0\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0c82\u0c9a\u0cbf\u0c95\u0cca\u0cb3\u0ccd\u0cb3\u0cb2\u0cbe\u0c97\u0cc1\u0cb5\u0cc1\u0ca6\u0cbf\u0cb2\u0ccd\u0cb2",\n"d648001f72873b11f1495205043049417024f9cf":"\u0c8f\u0ca8\u0ccb \u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0cb8\u0cb0\u0cbf\u0caf\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0cb2\u0cc8\u0cb5\u0ccd"\n},\n"ko-KR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\uc774\ub984\uc774 \uacf5\uc720\ub429\ub2c8\ub2e4",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\uc798\ubabb\ub41c \ub2f5\ubcc0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\ub2f5\ubcc0\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\uc81c\ucd9c \uc911...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\ub85c\ub4dc \uc911...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\ud45c} other {#\ud45c}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\uc624\ud504\ub77c\uc778",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\ub0b4 \uc774\ub984\uc774 \uacf5\uc720\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",\n"d648001f72873b11f1495205043049417024f9cf":"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\uc62c\ubc14\ub978 \ub2f5\ubcc0",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\uac8c\uc2dc \uc911"\n},\n"ku-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nerast",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"P\u00ea\u015fk\u00ea\u015fkirin...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bar dike",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u015ea\u015f\u00eeyek r\u00fb da",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Rast",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Z\u00eend\u00ee"\n},\n"ky-KG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041a\u0430\u0442\u0430",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0422\u0430\u043f\u0448\u044b\u0440\u044b\u043b\u0443\u0443\u0434\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u04e9\u043b\u04af\u04af\u0434\u04e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u0443\u0443\u0440\u0430",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0422\u04af\u0437 \u043e\u0431\u043e"\n},\n"lt-LT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neteisingai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Pateikiama...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u012ekeliama...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Neprijungta",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Teisingai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Vie\u0161as"\n},\n"lv-LV":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepareizi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iesnieg\u0161ana...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Notiek iel\u0101de",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Bezsaist\u0113",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pareizi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tie\u0161saist\u0113"\n},\n"ma-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"mg-MG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Diso",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mandrotsaka...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mamoaka\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Ivelan-jotra",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Nisy zavatra tsy nety",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Marina",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Mivantana"\n},\n"mk-MK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0442\u043e\u0447\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0421\u0435 \u043f\u043e\u0434\u043d\u0435\u0441\u0443\u0432\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0458\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u043e\u0447\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0408\u0430\u0432\u043d\u043e"\n},\n"ml-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d47\u0d30\u0d4d \u0d2a\u0d19\u0d4d\u0d15\u0d3f\u0d1f\u0d41\u0d02.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0d24\u0d46\u0d31\u0d4d\u0d31\u0d4d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0d2a\u0d4d\u0d30\u0d24\u0d3f\u0d15\u0d30\u0d23\u0d02 \u0d38\u0d02\u0d30\u0d15\u0d4d\u0d37\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0d38\u0d2e\u0d7c\u0d2a\u0d4d\u0d2a\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0d32\u0d4b\u0d21\u0d41\u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d4d} other {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d41\u0d15\u0d7e}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d13\u0d2b\u0d4d\u200c\u0d32\u0d48\u0d7b",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d47\u0d30\u0d4d \u0d2a\u0d19\u0d4d\u0d15\u0d3f\u0d1f\u0d3f\u0d32\u0d4d\u0d32",\n"d648001f72873b11f1495205043049417024f9cf":"\u0d0e\u0d28\u0d4d\u0d24\u0d4b \u0d2a\u0d3f\u0d36\u0d15\u0d4d \u0d38\u0d02\u0d2d\u0d35\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0d36\u0d30\u0d3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0d32\u0d48\u0d35\u0d4d"\n},\n"mn-MN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0411\u0443\u0440\u0443\u0443",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0418\u043b\u0433\u044d\u044d\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0410\u0447\u0430\u0430\u043b\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u042f\u043c\u0430\u0440 \u043d\u044d\u0433 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0417\u04e9\u0432",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0428\u0443\u0443\u0434"\n},\n"mr-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0924\u0941\u092e\u091a\u0947 \u0928\u093e\u0935 \u0936\u0947\u0905\u0930 \u0915\u0947\u0932\u0947 \u091c\u093e\u0908\u0932",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u091a\u0942\u0915",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091c\u0924\u0928 \u0915\u0947\u0932\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0924 \u0906\u0939\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b\u0924 \u0906\u0939\u0947...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u092e\u0924} other {# \u092e\u0924\u0947}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0924\u0941\u092e\u091a\u0947 \u0928\u093e\u0935 \u0936\u0947\u0905\u0930 \u0915\u0947\u0932\u0947 \u091c\u093e\u0923\u093e\u0930 \u0928\u093e\u0939\u0940",\n"d648001f72873b11f1495205043049417024f9cf":"\u0915\u093e\u0939\u0940\u0924\u0930\u0940 \u091a\u0942\u0915 \u091d\u093e\u0932\u0940",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0905\u091a\u0942\u0915",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0908\u0935"\n},\n"ms-MY":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama anda akan dikongsikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons disimpan",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Menyerahkan...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuatkan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# undian} other {# undian}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Luar talian",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama anda tidak akan dikongsikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terdapat sedikit masalah",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Betul",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Hidup"\n},\n"my-MM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1019\u1019\u103e\u1014\u103a\u1015\u102b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1015\u1031\u1038\u1015\u102d\u102f\u1037\u1014\u1031\u101e\u100a\u103a...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1016\u103d\u1004\u1037\u103a\u1014\u1031\u101e\u100a\u103a...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1021\u1031\u102c\u1037\u1016\u103a\u101c\u102d\u102f\u1004\u103a\u1038",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u1019\u103e\u1014\u103a\u101e\u100a\u103a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1010\u1036\u1006\u102d\u1015\u103a\u1021\u101b\u103e\u1004\u103a"\n},\n"nb-NO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Navnet ditt blir delt",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Feil",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar lagret",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sender inn\u00a0\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laster inn\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Frakoblet",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Navnet ditt blir ikke delt",\n"d648001f72873b11f1495205043049417024f9cf":"Noe gikk galt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Riktig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"ne-NP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u092a\u0947\u0936 \u0917\u0930\u093f\u0926\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u0941\u0901\u0926\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0905\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u092d"\n},\n"nl-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Je naam wordt gedeeld",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Je naam wordt niet gedeeld",\n"d648001f72873b11f1495205043049417024f9cf":"Er is iets misgegaan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"nl-NL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Je naam wordt gedeeld",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Je naam wordt niet gedeeld",\n"d648001f72873b11f1495205043049417024f9cf":"Er is iets misgegaan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"om-ET":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sirrii miti",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Galchaa jirra...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Fe\'uu jira",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sarara ala",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Wanti tokko dogongoraan deemaa jira",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sirrii",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"kallattin"\n},\n"pa-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a17\u0a32\u0a24",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0a38\u0a2a\u0a41\u0a30\u0a26 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0a32\u0a4b\u0a21 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a14\u0a5e\u0a32\u0a3e\u0a08\u0a28",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0a38\u0a39\u0a40",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0a32\u0a3e\u0a08\u0a35"\n},\n"pa-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u06cc\u062a\u0627 \u062c\u0627 \u0631\u06c1\u06cc\u0627 \u0627\u06d2...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06cc\u0627 \u0627\u06d2\u06d4\u06d4\u06d4",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"pl-PL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Twoje imi\u0119 i\u00a0nazwisko zostanie udost\u0119pnione",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Niepoprawnie",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpowied\u017a zapisana",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Przesy\u0142anie\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0141adowanie\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# g\u0142os} few {# g\u0142osy} many {# g\u0142os\u00f3w} other {# g\u0142osu}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Twoje imi\u0119 i\u00a0nazwisko nie b\u0119d\u0105 udost\u0119pniane",\n"d648001f72873b11f1495205043049417024f9cf":"Co\u015b posz\u0142o nie tak",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Poprawnie",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Formularz aktywny"\n},\n"pt-BR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Seu nome ser\u00e1 compartilhado",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi salva",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Carregando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Seu nome n\u00e3o ser\u00e1 compartilhado",\n"d648001f72873b11f1495205043049417024f9cf":"Algo deu errado",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"pt-PT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"O seu nome ser\u00e1 partilhado",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi guardada",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"A carregar...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"O seu nome n\u00e3o ser\u00e1 partilhado",\n"d648001f72873b11f1495205043049417024f9cf":"Ocorreu um problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"ro-RO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Numele t\u0103u va fi distribuit",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u0103spunsul a fost salvat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Se trimite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Se \u00eencarc\u0103...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} few {# voturi} other {# de voturi}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Numele t\u0103u nu va fi distribuit",\n"d648001f72873b11f1495205043049417024f9cf":"Ceva nu a mers cum trebuie",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Corect",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicat"\n},\n"ru-RU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0432\u0435\u0440\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u041e\u0442\u0432\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0433\u043e\u043b\u043e\u0441} few {#\u00a0\u0433\u043e\u043b\u043e\u0441\u0430} many {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432} other {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u0441\u0435\u0442\u0438",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",\n"d648001f72873b11f1495205043049417024f9cf":"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0412\u0435\u0440\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"\n},\n"sd-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u091c\u092e\u093e \u0915\u0930\u093e\u0913 \u092a\u092f\u094b \u0935\u091e\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092a\u092f\u094b \u0925\u093f\u0910...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928\u0902",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u091c\u0940\u0924\u094b-\u091c\u093e\u0917\u0924\u094b"\n},\n"si-LK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db8\u0dd2\u0db1\u0dca...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0db4\u0dd6\u0dbb\u0dab\u0dba \u0dc0\u0dda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d95\u0dc6\u0dca\u0dbd\u0dba\u0dd2\u0db1\u0dca",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u0d9a\u0dd4\u0db8\u0d9a\u0dca \u0dc4\u0ddd \u0dc0\u0dd0\u0dbb\u0daf\u0dd3 \u0d9c\u0ddc\u0dc3\u0dca \u0d87\u0dad.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0db1\u0dd2\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0dc3\u0da2\u0dd3\u0dc0\u0dd3"\n},\n"sk-SK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e meno sa bude zdie\u013ea\u0165",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vne",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpove\u010f bola ulo\u017een\u00e1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odosiela sa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edtava sa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# hlas} few {# hlasy} many {# hlasu} other {# hlasov}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e meno sa nebude zdie\u013ea\u0165",\n"d648001f72873b11f1495205043049417024f9cf":"Vyskytla sa chyba",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vne",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Na\u017eivo"\n},\n"sl-SI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepravilno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po\u0161iljanje \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nalaganje ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Brez povezave",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pravilno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"V \u017eivo"\n},\n"sn-ZW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vatadza",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Kutumira...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kurodha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hapana indaneti",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Pane zvakanganisika",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Vagona",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Ruzhinji"\n},\n"so-SO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Khalad",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Gudbinta...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Soo wada bogga.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Qadka ka maqan",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Waxbaa khaldan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sax",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Toos"\n},\n"sq-AL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"E pasakt\u00eb",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po d\u00ebrgohet...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"N\u00eb ngarkim...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Jasht\u00eb linje",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Ndodhi nj\u00eb gabim",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"E sakt\u00eb",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"sr-RS":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neta\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Prosle\u0111ivanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditava se...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Van mre\u017ee",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ta\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"su-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimkeun...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamuat...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflen",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Aya nu salah",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktif"\n},\n"sv-SE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ditt namn kommer att delas",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Fel",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar sparat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Skickar in ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"L\u00e4ser in ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# r\u00f6st} other {# r\u00f6ster}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Ditt namn kommer inte att delas",\n"d648001f72873b11f1495205043049417024f9cf":"N\u00e5gonting gick fel",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"R\u00e4tt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicerad"\n},\n"sw-KE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Si sahihi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Inawasilisha...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kupakia...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Nje ya mtandao",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sahihi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Moja kwa moja"\n},\n"ta-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ba4\u0bb5\u0bb1\u0bc1",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0baa\u0ba4\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0b8f\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1} other {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bcd}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0b86\u0b83\u0baa\u0bcd\u0bb2\u0bc8\u0ba9\u0bcd",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bbe\u0ba4\u0bc1",\n"d648001f72873b11f1495205043049417024f9cf":"\u0b8f\u0ba4\u0bcb \u0ba4\u0bb5\u0bb1\u0bbe\u0b95\u0bbf\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0b9a\u0bb0\u0bbf",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ba8\u0bc7\u0bb0\u0bb2\u0bc8"\n},\n"te-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41 \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f \u0c15\u0c3e\u0c26\u0c41",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c38\u0c4d\u0c2a\u0c02\u0c26\u0c28 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0c38\u0c2e\u0c30\u0c4d\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0c13\u0c1f\u0c4d\u200c} other {# \u0c13\u0c1f\u0c4d\u200c\u0c32\u0c41}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c06\u0c2b\u0c4d\u200c\u0c32\u0c48\u0c28\u0c4d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41 \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c26\u0c41",\n"d648001f72873b11f1495205043049417024f9cf":"\u0c0f\u0c26\u0c4b \u0c38\u0c2e\u0c38\u0c4d\u0c2f \u0c0f\u0c30\u0c4d\u0c2a\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d"\n},\n"th-TH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e16\u0e39\u0e01\u0e41\u0e0a\u0e23\u0e4c",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0e42\u0e2b\u0e27\u0e15} other {# \u0e42\u0e2b\u0e27\u0e15}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e44\u0e21\u0e48\u0e41\u0e0a\u0e23\u0e4c\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",\n"d648001f72873b11f1495205043049417024f9cf":"\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49"\n},\n"tl-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ibabahagi ang iyong pangalan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Hindi Tama",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Na-save ang tugon",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Isinusumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Naglo-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# boto} other {# (na) boto}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Hindi ibabahagi ang iyong pangalan",\n"d648001f72873b11f1495205043049417024f9cf":"May maling nangyari",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Tama",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"tr-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ad\u0131n\u0131z payla\u015f\u0131lacak",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Yan\u0131t\u0131n\u0131z\u0131 kaydettik",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"G\u00f6nderiliyor...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckleniyor...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# oy} other {# oy}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c7evrimd\u0131\u015f\u0131",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Ad\u0131n\u0131z\u0131 payla\u015fmayaca\u011f\u0131z",\n"d648001f72873b11f1495205043049417024f9cf":"Bir sorunla kar\u015f\u0131la\u015ft\u0131k",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yay\u0131nda"\n},\n"uk-UA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c} few {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456} many {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439} other {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u043c\u0435\u0440\u0435\u0436\u0456",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f \u043d\u0435 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f",\n"d648001f72873b11f1495205043049417024f9cf":"\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0443\u0441\u0456\u043c"\n},\n"ur-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u0631\u0648\u0627 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"uz-UZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Noto\u02bbg\u02bbri",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Yuborilmoqda...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yuklanmoqda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u02bbg\u02bbri",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Jonli"\n},\n"vi-VN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"T\u00ean c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c chia s\u1ebb",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Kh\u00f4ng ch\u00ednh x\u00e1c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0110\u00e3 l\u01b0u c\u00e2u tr\u1ea3 l\u1eddi",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0110ang g\u1eedi...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0110ang t\u1ea3i...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn} other {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"T\u00ean c\u1ee7a b\u1ea1n s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c chia s\u1ebb",\n"d648001f72873b11f1495205043049417024f9cf":"\u0110\u00e3 x\u1ea3y ra l\u1ed7i",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ch\u00ednh x\u00e1c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tr\u1ef1c ti\u1ebfp"\n},\n"wo-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Jubul",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mingi koy joxe...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mingi yab...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Amul net",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Amna lu jaarul yoon",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Jub na",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Teew"\n},\n"xh-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abangachananga",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyangenisa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalowuda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"I-Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Abachanileyo",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"iLive"\n},\n"yo-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"K\u00f2 t\u1ecd\u0300n\u00e0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u01f8f\u00e0kal\u1eb9\u0300...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u00d3 n \u1e63araj\u1ecd...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c0\u00ecs\u00ed n\u00ed on\u00edfor\u00edkor\u00ed",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"B\u1eb9\u0301\u1eb9\u0300 ni",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"zh-CN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u4f60\u7684\u540d\u79f0\u5c06\u88ab\u5206\u4eab",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u9519\u8bef",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u4fdd\u5b58\u56de\u5e94",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u52a0\u8f7d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u79bb\u7ebf",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u4f60\u7684\u540d\u79f0\u4e0d\u4f1a\u88ab\u5206\u4eab",\n"d648001f72873b11f1495205043049417024f9cf":"\u51fa\u73b0\u9519\u8bef",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u786e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u5df2\u4e0a\u7ebf"\n},\n"zh-HK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u6211\u5011\u6703\u5206\u4eab\u4f60\u7684\u59d3\u540d",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u8f09\u5165\u2026\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u6211\u5011\u4e0d\u6703\u516c\u958b\u4f60\u7684\u59d3\u540d",\n"d648001f72873b11f1495205043049417024f9cf":"\u767c\u751f\u932f\u8aa4",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u4e0a\u7dda"\n},\n"zh-TW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u6211\u5011\u6703\u5206\u4eab\u4f60\u7684\u59d3\u540d",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8f09\u5165\u4e2d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u6211\u5011\u4e0d\u6703\u516c\u958b\u4f60\u7684\u59d3\u540d",\n"d648001f72873b11f1495205043049417024f9cf":"\u767c\u751f\u554f\u984c\u4e86",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u53ef\u4f7f\u7528"\n},\n"zu-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Akunembile",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyathumela...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalayisha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Okungaxhunyiwe ku-inthanethi",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Kunembile",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Bukhoma"\n}\n}',
              }));
            a = JSON.parse(a);
            const b = new Map();
            for (const c in a) b.set(c, Object.values(a[c]));
            return b;
          },
          z4 = function ({
            layout: a,
            direction: b,
            gap: c,
            padding: d,
            background: e,
            border: f,
            W: g,
            cells: h,
            ...k
          }) {
            a = a === "vertical";
            let l = [];
            const m = [],
              n = c && d,
              p = d ? 1 : 0;
            let q = 1;
            for (let r = 0; r < h.length; r++) {
              const t = h[r];
              typeof t.size === "string"
                ? l.push(t.size)
                : l.push(`${t.size}px`);
              m.push({
                ...t,
                id: t.id,
                placement: a
                  ? {
                      gridColumnStart: `${p + 1}`,
                      gridColumnEnd: `${p + 2}`,
                      gridRowStart: `${p + q}`,
                      gridRowEnd: `${p + q + 1}`,
                      padding: t.padding ? QRb(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    }
                  : {
                      gridColumnStart: `${p + q}`,
                      gridColumnEnd: `${p + q + 1}`,
                      gridRowStart: `${p + 1}`,
                      gridRowEnd: `${p + 2}`,
                      padding: t.padding ? QRb(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    },
              });
              q += n ? 2 : 1;
            }
            n && (l = l.join(` ${c}px `).split(" "));
            d && (l = [`${d}px`, ...l, `${d}px`]);
            return {
              ...k,
              type: "layout",
              cells: m,
              direction: b,
              fill: e,
              border: f,
              W: g,
              gridTemplateColumns: a
                ? d
                  ? [`${d}px`, "1fr", `${d}px`]
                  : ["1fr"]
                : l,
              gridTemplateRows: a
                ? l
                : d
                ? [`${d}px`, "auto", `${d}px`]
                : ["auto"],
              columnGap: n || a ? void 0 : c,
              rowGap: !n && a ? c : void 0,
            };
          },
          RRb = function ({
            padding: a,
            direction: b,
            background: c,
            W: d,
            Sa: e,
            border: f,
            content: g,
            ref: h,
            key: k,
            ...l
          }) {
            return {
              ...l,
              type: "layout",
              direction: b,
              gridTemplateColumns: ["1fr"],
              gridTemplateRows: ["1fr"],
              fill: c,
              W: d,
              Sa: e,
              border: f,
              cells: [
                {
                  id: "_",
                  content: g,
                  placement: {
                    gridColumnStart: "1",
                    gridColumnEnd: "2",
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    alignSelf: "center",
                    padding: a,
                  },
                },
              ],
              key: k,
              ref: h,
            };
          },
          QRb = function (a) {
            switch (a.length) {
              case 0:
                break;
              case 1:
                return a[0];
              case 2:
                return { Ca: a[0], Wa: a[1], Na: a[0], Ba: a[1] };
              case 4:
                return { Ca: a[0], Wa: a[1], Na: a[2], Ba: a[3] };
              default:
                throw Error(`Invalid padding value: ${a}`);
            }
          },
          A4 = function (a, b) {
            __c.w(b.length > 0, "zero contrast candidates received");
            const c = new Map();
            return __c.ms(b, (d) => {
              var e;
              const f =
                (e = c.get(d)) !== null && e !== void 0 ? e : __c.Ot(d, a);
              c.set(d, f);
              return f;
            });
          },
          C4 = function (a, b) {
            __c.w(!0);
            __c.w(!0);
            __c.w(!0);
            const { ma: c, a: d, b: e } = __c.Jt(a),
              { ma: f, a: g, b: h } = __c.Jt(b),
              k = (c + f) / 2;
            var l = (Math.hypot(d, e) + Math.hypot(g, h)) / 2;
            l = 0.5 * (1 - Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7)));
            var m = d * (1 + l),
              n = g * (1 + l),
              p = Math.hypot(m, e),
              q = Math.hypot(n, h);
            l = (p + q) / 2;
            var r = __c.At((Math.atan2(e, m) * 180) / Math.PI);
            const t = __c.At((Math.atan2(h, n) * 180) / Math.PI);
            m = Math.abs(r - t) > 180 ? (r + t + 360) / 2 : (r + t) / 2;
            n = q - p;
            p =
              2 *
              Math.sqrt(p * q) *
              Math.sin(
                (((Math.abs(t - r) <= 180
                  ? t - r
                  : t <= r
                  ? t - r + 360
                  : t - r - 360) /
                  2) *
                  Math.PI) /
                  180
              );
            q = 1 + 0.045 * l;
            r =
              1 +
              0.015 *
                l *
                (1 -
                  0.17 * Math.cos(((m - 30) * Math.PI) / 180) +
                  0.24 * Math.cos((2 * m * Math.PI) / 180) +
                  0.32 * Math.cos(((3 * m + 6) * Math.PI) / 180) -
                  0.2 * Math.cos(((4 * m - 63) * Math.PI) / 180));
            return Math.sqrt(
              ((f - c) /
                (1 +
                  (0.015 * (k - 50) ** 2) / Math.sqrt(20 + (k - 50) ** 2))) **
                2 +
                (n / (1 * q)) ** 2 +
                (p / (1 * r)) ** 2 +
                (n / (1 * q)) *
                  (p / (1 * r)) *
                  (-(2 * Math.sqrt(l ** 7 / (l ** 7 + 25 ** 7))) *
                    Math.sin(
                      (30 *
                        Math.exp(-1 * ((m - 275) / 25) ** 2) *
                        2 *
                        Math.PI) /
                        180
                    ))
            ) >= 20
              ? a
              : A4(b, B4);
          },
          D4 = function (a) {
            switch (a.type) {
              case "color":
                return a.color;
              case "gradient":
                return a.ob.Wl[0].color;
              default:
                throw new F(a);
            }
          },
          E4 = function (a, b) {
            a = __c.Oj.create(__c.Oj.va(a.text));
            b != null && a.fl(b);
            return { type: "text", yD: 1, text: __c.Oj.va(a) };
          },
          F4 = function (a) {
            switch (a) {
              case "l":
                return 1;
              case "r":
                return 2;
              default:
                throw new F(a);
            }
          },
          G4 = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new F(a);
            }
          },
          SRb = function (a) {
            if (a)
              return {
                rha: a.rha,
                gda: a.gda,
                hda: a.hda,
                eda: a.eda,
                ida: a.ida,
              };
          },
          TRb = function ({ direction: a, text: b, background: c }) {
            return {
              id: "header",
              size: "auto",
              fill: c,
              padding: [20, 20, 16, 20],
              content: E4(b, { direction: G4(a) }),
            };
          },
          WRb = function ({
            direction: a,
            messages: b,
            Sua: c,
            Gs: d,
            sva: e,
            W: f,
            state: g,
            WC: h,
            Bx: k,
          }) {
            var l = h !== k,
              m = A4(k, B4);
            h = l ? h : m;
            m = C4("#000000", k);
            var n = C4(h, k);
            l = URb(g, g === 3 && l ? n : m, l);
            c = {
              id: "text",
              placement: {
                gridColumnStart: "2",
                gridColumnEnd: "3",
                gridRowStart: "2",
                gridRowEnd: "3",
                alignSelf: "center",
              },
              content: E4(c, {
                direction: G4(a),
                ...(g === 3 && { color: A4(h, B4) }),
              }),
            };
            g === 3 || g === 4 || g === 5
              ? ((b = (n = y4(b, "resultsPercentage"))
                  ? ARb(n, [e], b.document.language)
                  : __c.Gb("sUWUOA", [e])),
                (k = {
                  id: "percentage",
                  placement: {
                    gridColumnStart: "4",
                    gridColumnEnd: "5",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                    alignSelf: "center",
                  },
                  content: {
                    type: "text",
                    yD: 0,
                    fontFamily: d,
                    fontWeight: "bold",
                    fontSize: VRb,
                    text: b,
                    textAlign: "end",
                    direction: G4(a),
                    color: g === 3 ? A4(h, B4) : A4(k, B4),
                  },
                }))
              : (k = void 0);
            k = {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
              fill: l,
              cells: [c, k].filter(yb),
            };
            if (g !== 3 && g !== 4 && g !== 5) return k;
            b = e > 0;
            const p = e < 100;
            n = (c = (b && !p) || (!b && p)) ? 1 : 2;
            e = [b ? `${e}fr` : void 0, p ? `${100 - e}fr` : void 0].filter(yb);
            g = {
              type: "color",
              color: g === 3 ? h : m,
              Sa: g === 3 ? 0 : 0.8,
            };
            return c
              ? { ...k, fill: b ? g : l }
              : {
                  type: "layout",
                  direction: F4(a),
                  gridTemplateRows: ["1fr"],
                  gridTemplateColumns: e,
                  fill: l,
                  cells: [
                    {
                      id: "bar",
                      W: f,
                      fill: g,
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: "2",
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: RRb({
                        direction: F4(a),
                        content: {
                          type: "text",
                          yD: 0,
                          text: "",
                          fontFamily: d,
                          fontSize: VRb,
                          direction: G4(a),
                        },
                      }),
                    },
                    {
                      id: "optionTextWithPercentage",
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: `${n + 1}`,
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: k,
                    },
                  ],
                };
          },
          URb = function (a, b, c) {
            switch (a) {
              case 0:
                return { type: "color", color: b, Sa: 0.92 };
              case 1:
              case 5:
                return { type: "color", color: b, Sa: 0.88 };
              case 2:
                return { type: "color", color: b, Sa: 0.74 };
              case 3:
                return { type: "color", color: b, Sa: c ? 0.5 : 0.92 };
              case 4:
                return { type: "color", color: b, Sa: 0.92 };
              default:
                throw new F(a);
            }
          },
          XRb = function ({
            b$a: a,
            XN: b,
            dF: c,
            direction: d,
            options: e,
            yf: f,
            vF: g,
            iB: h,
            Rua: k,
            Gs: l,
            W4: m,
            WC: n,
            Bx: p,
            messages: q,
            bia: r,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20],
              alignSelf: "center",
              content: z4({
                layout: "vertical",
                direction: F4(d),
                gap: 8,
                cells: e.map(({ value: t }) => {
                  var v = t.id === f;
                  const u = t.id === g,
                    x = t.id === h;
                  v = m ? (v ? 3 : u ? 5 : 4) : x ? 2 : u ? 1 : 0;
                  return {
                    id: t.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: r.option,
                      key: t.id,
                      W: k,
                      Nl: () => {
                        var y;
                        return b === null || b === void 0
                          ? void 0
                          : (y = b.rha) === null || y === void 0
                          ? void 0
                          : y.call(b, t.id);
                      },
                      onMouseEnter: () => {
                        var y;
                        return b === null || b === void 0
                          ? void 0
                          : (y = b.gda) === null || y === void 0
                          ? void 0
                          : y.call(b, t.id);
                      },
                      onMouseLeave: () => {
                        var y;
                        return b === null || b === void 0
                          ? void 0
                          : (y = b.hda) === null || y === void 0
                          ? void 0
                          : y.call(b, t.id);
                      },
                      onMouseDown: () => {
                        var y;
                        return b === null || b === void 0
                          ? void 0
                          : (y = b.eda) === null || y === void 0
                          ? void 0
                          : y.call(b, t.id);
                      },
                      onMouseUp: () => {
                        var y;
                        return b === null || b === void 0
                          ? void 0
                          : (y = b.ida) === null || y === void 0
                          ? void 0
                          : y.call(b, t.id);
                      },
                      ...WRb({
                        messages: q,
                        Sua: t.label,
                        direction: d,
                        Gs: l,
                        sva: a.aab(c, t.id),
                        W: k,
                        state: v,
                        WC: n,
                        Bx: p,
                      }),
                    },
                  };
                }),
              }),
            };
          },
          bSb = function (a) {
            const b = a.status,
              c = a.Gs,
              d = a.direction,
              e = a.backgroundColor,
              f = A4(e, B4);
            switch (b) {
              case 0:
                var g;
                return {
                  type: "text",
                  yD: 1,
                  text: H4(
                    (g = a.statusMessage) !== null && g !== void 0
                      ? g
                      : y4(a.messages, "live") || O("/iw6+Q"),
                    c,
                    d,
                    A4(e, YRb),
                    f
                  ),
                };
              case 1:
                return {
                  type: "text",
                  yD: 1,
                  text: H4(a.messages.loading(), c, d, A4(e, ZRb), f),
                };
              case 2:
                return {
                  type: "text",
                  yD: 1,
                  text: H4(
                    y4(a.messages, "submitting") || O("wutQEA"),
                    c,
                    d,
                    A4(e, ZRb),
                    f
                  ),
                };
              case 3:
                return {
                  type: "text",
                  yD: 1,
                  text: H4(a.messages.offline(), c, d, A4(e, $Rb), f),
                };
              case 4:
                return {
                  type: "text",
                  yD: 1,
                  text: H4(
                    y4(a.messages, "somethingWentWrong") || O("ElTceA"),
                    c,
                    d,
                    A4(e, aSb),
                    f
                  ),
                };
              default:
                throw new F(b);
            }
          },
          cSb = function ({
            direction: a,
            messages: b,
            Gs: c,
            bib: d,
            status: e,
            settings: f,
            backgroundColor: g,
          }) {
            f.status === 1
              ? f.tZ === "anon"
                ? NRb(b)
                : ORb(b)
              : y4(b, "live") || O("/iw6+Q");
            f = y4(b, "live") || O("/iw6+Q");
            const h = y4(b, "numVotes");
            d = h ? ARb(h, [d], b.document.language) : __c.Gb("6QpLYA", [d]);
            return [
              {
                id: "footer",
                size: "auto",
                padding: [0, 20, 20, 20],
                content: bSb({
                  messages: b,
                  status: e,
                  statusMessage: `${f} | ${d}`,
                  Gs: c,
                  backgroundColor: g,
                  direction: a,
                }),
              },
            ];
          },
          dSb = function ({
            width: a,
            height: b,
            gf: c,
            color: d,
            Hcb: e,
            backgroundColor: f,
          }) {
            return {
              type: "shape",
              width: a,
              height: b,
              cia: { width: 16, height: 16 },
              zb: [
                {
                  d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                  stroke: { weight: c, color: d },
                  fill: { type: "color", color: d },
                },
                {
                  d: e
                    ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z"
                    : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                  fill: { type: "color", color: f },
                },
              ],
            };
          },
          gSb = function ({ direction: a, Sua: b, Bx: c, state: d }) {
            const e = C4("#000000", c);
            return {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
              fill: eSb(d, e),
              cells: [
                {
                  id: "text",
                  placement: {
                    alignSelf: "center",
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                  },
                  content: (() => {
                    switch (d) {
                      case 5:
                        return E4(b, { direction: G4(a), color: "#00873d" });
                      case 6:
                        return E4(b, { direction: G4(a), color: "#c8001e" });
                      case 4:
                        return E4(b, { direction: G4(a), color: A4(c, fSb) });
                      default:
                        return E4(b, { direction: G4(a) });
                    }
                  })(),
                },
                d === 5 || d === 6
                  ? {
                      id: "validation",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: dSb({
                        width: 18,
                        height: 18,
                        gf: 1.6,
                        Hcb: d === 5,
                        color: d === 5 ? "#00873d" : "#c8001e",
                        backgroundColor: "#ffffff",
                      }),
                    }
                  : void 0,
              ].filter(yb),
            };
          },
          eSb = function (a, b) {
            switch (a) {
              case 0:
                return { type: "color", color: b, Sa: 0.92 };
              case 1:
                return { type: "color", color: b, Sa: 0.74 };
              case 2:
                return { type: "color", color: b, Sa: 0.88 };
              case 3:
                return { type: "color", color: b, Sa: 0.74 };
              case 4:
                return { type: "color", color: b, Sa: 0.9 };
              case 5:
                return { type: "color", color: "#e3fff0", Sa: 0 };
              case 6:
                return { type: "color", color: "#ffd9df", Sa: 0 };
              default:
                throw new F(a);
            }
          },
          hSb = function ({
            XN: a,
            direction: b,
            options: c,
            settings: d,
            yf: e,
            vF: f,
            iB: g,
            Rua: h,
            Bx: k,
            W4: l,
            bia: m,
            context: n,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20, 10, 20],
              alignSelf: "center",
              content: z4({
                layout: "vertical",
                direction: F4(b),
                gap: 8,
                cells: c.map(({ value: p }) => {
                  var q = p.id === e;
                  const r = d.status === 1,
                    t = p.id === f,
                    v = p.id === g;
                  q =
                    r && l && n.mode !== "edit"
                      ? d.Gba(p.id)
                        ? 5
                        : q
                        ? 6
                        : 4
                      : n.mode === "edit"
                      ? r && d.Gba(p.id)
                        ? 5
                        : 4
                      : q
                      ? 1
                      : v
                      ? 3
                      : t
                      ? 2
                      : 0;
                  return {
                    id: p.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: m.option,
                      key: p.id,
                      W: h,
                      Nl: () => {
                        var u;
                        return a === null || a === void 0
                          ? void 0
                          : (u = a.rha) === null || u === void 0
                          ? void 0
                          : u.call(a, p.id);
                      },
                      onMouseEnter: () => {
                        var u;
                        return a === null || a === void 0
                          ? void 0
                          : (u = a.gda) === null || u === void 0
                          ? void 0
                          : u.call(a, p.id);
                      },
                      onMouseLeave: () => {
                        var u;
                        return a === null || a === void 0
                          ? void 0
                          : (u = a.hda) === null || u === void 0
                          ? void 0
                          : u.call(a, p.id);
                      },
                      onMouseDown: () => {
                        var u;
                        return a === null || a === void 0
                          ? void 0
                          : (u = a.eda) === null || u === void 0
                          ? void 0
                          : u.call(a, p.id);
                      },
                      onMouseUp: () => {
                        var u;
                        return a === null || a === void 0
                          ? void 0
                          : (u = a.ida) === null || u === void 0
                          ? void 0
                          : u.call(a, p.id);
                      },
                      ...gSb({ direction: b, Sua: p.label, Bx: k, state: q }),
                    },
                  };
                }),
              }),
            };
          },
          iSb = function ({ direction: a, text: b, D3a: c, kS: d, XN: e }) {
            const f = B4.includes(c),
              { h: g, s: h, ma: k } = __c.hia(c);
            var l = new __c.vt(g, h, k < 10 ? k + 6 : k - 6);
            l = __c.Mt(l);
            var m = new __c.vt(g, h, k < 10 ? k + 10 : k - 10);
            m = __c.Mt(m);
            return {
              id: "submit",
              size: "auto",
              padding: [0, 20],
              content: RRb({
                direction: F4(a),
                Nl: e === null || e === void 0 ? void 0 : e.submit,
                onMouseEnter: e === null || e === void 0 ? void 0 : e.pta,
                onMouseLeave: e === null || e === void 0 ? void 0 : e.qta,
                onMouseDown: e === null || e === void 0 ? void 0 : e.ota,
                onMouseUp: e === null || e === void 0 ? void 0 : e.rta,
                background: {
                  type: "color",
                  color: d === 2 ? m : d === 1 ? l : c,
                  Sa: (e === null || e === void 0 ? 0 : e.submit)
                    ? f
                      ? 0.1
                      : void 0
                    : 0.6,
                },
                W: 24,
                padding: 12,
                content: E4(b, { direction: G4(a) }),
              }),
            };
          },
          kSb = function ({
            XN: a,
            direction: b,
            messages: c,
            Gs: d,
            wy: e,
            WC: f,
            status: g,
            settings: h,
            yf: k,
            backgroundColor: l,
            W4: m,
            gQ: n,
          }) {
            if (!m || !h || !k)
              return (
                (k = f === l ? A4(f, B4) : f),
                (h === null || h === void 0 ? void 0 : h.status) === 1
                  ? h.tZ === "anon"
                    ? NRb(c)
                    : ORb(c)
                  : void 0,
                [
                  iSb({ direction: b, text: e, D3a: k, kS: n, XN: a }),
                  {
                    id: "quiz_status",
                    size: "auto",
                    padding: [8, 20, 10, 20],
                    content: bSb({
                      status: g,
                      Gs: d,
                      messages: c,
                      direction: b,
                      backgroundColor: l,
                    }),
                  },
                ]
              );
            a = A4(l, B4);
            return [
              {
                id: "quiz_results_footer",
                size: "auto",
                padding: [20, 20, 24, 20],
                content: z4({
                  layout: "vertical",
                  direction: F4(b),
                  cells: [
                    {
                      id: "quiz_result",
                      size: "auto",
                      content: {
                        type: "text",
                        yD: 0,
                        fontFamily: d,
                        text: h.Gba(k)
                          ? y4(c, "correctLabel") || O("i3mNPA")
                          : y4(c, "incorrectLabel") || O("As1GTA"),
                        fontSize: jSb,
                        fontWeight: "bold",
                        textAlign: "center",
                        direction: G4(b),
                        color: a,
                      },
                    },
                    {
                      id: "quiz_message",
                      size: "auto",
                      content: {
                        type: "text",
                        yD: 0,
                        fontFamily: d,
                        text: y4(c, "responseSaved") || O("xSH8Og"),
                        fontSize: I4,
                        Sa: 0.2,
                        textAlign: "center",
                        direction: G4(b),
                        color: a,
                      },
                    },
                  ],
                }),
              },
            ];
          };
        __c.KD.prototype.sva = __c.ea(12, function () {
          return __c.FD(this, () => __c.qD(this.operators, "%", this.value));
        });
        var lSb = class {
            constructor() {
              this.type = "layout";
            }
          },
          J4 = __webpack_require__(519427),
          mSb = J4.action,
          p4 = J4.computed,
          nSb = J4.reaction,
          w4 = J4.runInAction;
        var r4 = class {
            static A(a) {
              __c.Q(a, { XIa: p4 });
            }
            get XIa() {
              const a = [];
              for (const b of this.list.value) {
                const c = h4(this, b);
                if (c === void 0)
                  throw new CRb(
                    "undefined value found when deserializing list."
                  );
                a.push(c);
              }
              return a;
            }
            count() {
              return this.list.value.count();
            }
            toArray() {
              return this.XIa.map(({ value: a }) => a);
            }
            first(a) {
              const b = this.list.value.first(
                a ? (c) => a(h4(this, c)) : void 0
              );
              if (b != null) return h4(this, b);
            }
            last(a) {
              const b = this.list.value.last(
                a ? (c) => a(h4(this, c)) : void 0
              );
              if (b != null) return h4(this, b);
            }
            next(a, b) {
              var c = b ? (d) => b(h4(this, d)) : void 0;
              a = i4(this, a);
              c = this.list.value.next(a, c);
              if (c != null) return h4(this, c);
            }
            vc(a, b) {
              var c = b ? (d) => b(h4(this, d)) : void 0;
              a = i4(this, a);
              c = this.list.value.vc(a, c);
              if (c != null) return h4(this, c);
            }
            map(a) {
              return this.list.value.map((b, c) => a(h4(this, b), c));
            }
            filter(a) {
              return this.list.value
                .filter((b, c) => a(h4(this, b), c))
                .map((b) => h4(this, b));
            }
            forEach(a) {
              return this.list.value.forEach((b, c) => a(h4(this, b), c));
            }
            some(a) {
              return this.list.value.some((b) => a(h4(this, b)));
            }
            constructor(a, b) {
              this.sA = b;
              this.DXa = (r4.A(this), new WeakMap());
              this.xXa = new WeakMap();
              __c.C(a.type === "list");
              this.list = a;
            }
          },
          FRb = class extends r4 {
            replace(a, b) {
              a = i4(this, a);
              b = this.list.value.replace(a, this.sA.jl(b));
              return h4(this, b);
            }
            TN(a, b) {
              a = a != null ? i4(this, a) : void 0;
              b = this.list.value.TN(a, this.sA.jl(b));
              return h4(this, b);
            }
            UN(a, b) {
              a = a != null ? i4(this, a) : void 0;
              return this.list.value
                .UN(
                  a,
                  b.map((c) => this.sA.jl(c))
                )
                .map((c) => h4(this, c));
            }
            insertBefore(a, b) {
              a = a != null ? i4(this, a) : void 0;
              b = this.list.value.insertBefore(a, this.sA.jl(b));
              return h4(this, b);
            }
            append(a) {
              a = this.list.value.append(this.sA.jl(a));
              return h4(this, a);
            }
            prepend(a) {
              a = this.list.value.prepend(this.sA.jl(a));
              return h4(this, a);
            }
            delete(a) {
              a = i4(this, a);
              this.list.value.delete(a);
            }
          };
        var m4 = class extends Error {
            constructor(a) {
              super(a);
              this.name = "SchemaError";
            }
          },
          CRb = class extends m4 {
            constructor(a) {
              super(`ListError: ${a}`);
            }
          },
          j4 = class extends m4 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget data`);
            }
          },
          k4 = class extends m4 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget state`);
            }
          },
          DRb = class extends m4 {
            constructor(a) {
              super(
                `Error transforming ${a} into type ${"double"} of document state`
              );
            }
          };
        var oSb = q4({
            type: ["t", n4(["text2"], "text2"), "readonly"],
            text: [
              "te",
              (function () {
                const a = (b) => {
                  if (
                    (b === null || b === void 0 ? void 0 : b.type) !== "text2"
                  )
                    throw new j4("text2", b);
                  return b.value;
                };
                return {
                  jl: (b) => ({ type: "text2", value: b }),
                  Ft: (b) => {
                    if (
                      (b === null || b === void 0 ? void 0 : b.type) !== "text2"
                    )
                      throw new k4("text2", b);
                    return b.value;
                  },
                  Et: a,
                  Gv: a,
                };
              })(),
            ],
          }),
          K4 = t4({ text2: oSb }, (a) => a.type),
          pSb = q4({ id: ["i", l4("")], label: ["l", K4] }),
          qSb = s4(pSb),
          rSb = s4(l4("")),
          sSb = q4({
            type: ["t", n4(["select"], "select"), "readonly"],
            id: ["i", l4("")],
            label: ["l", K4],
            options: ["o", qSb],
            W: ["c", o4(0)],
            v5a: ["co", rSb],
            bEb: ["tl", n4(["c", "u"], "c")],
          }),
          tSb = t4({ select: sSb }, (a) => a.type),
          uSb = s4(tSb),
          vSb = q4({ label: ["l", K4] }),
          wSb = q4({}),
          xSb = n4(["l", "r"], "l"),
          ySb = q4({
            minHeight: ["mh", o4(1)],
            minWidth: ["mw", o4(1)],
            id: ["i", l4()],
            $G: ["s", l4()],
            tW: ["a", GRb(l4())],
            direction: ["r", xSb],
            Gs: ["d", l4("")],
            dA: ["pf", ERb()],
            tA: ["sf", ERb()],
            border: [
              "b",
              (function () {
                const a = (b) => {
                  if (
                    (b === null || b === void 0 ? void 0 : b.type) !== "stroke"
                  )
                    throw new j4("stroke", b);
                  return b.value;
                };
                return {
                  jl: (b) => ({ type: "stroke", value: b }),
                  Ft: (b) => {
                    if (
                      (b === null || b === void 0 ? void 0 : b.type) !==
                      "stroke"
                    )
                      throw new k4("stroke", b);
                    return b.value;
                  },
                  Et: a,
                  Gv: a,
                };
              })(),
            ],
            W: ["c", o4(0)],
            header: ["h", GRb(wSb)],
            Kqa: [
              "hh",
              (function (a) {
                const b = (c, d) => {
                  if (c == null) return a;
                  if (
                    (c === null || c === void 0 ? void 0 : c.type) !== "boolean"
                  )
                    throw d === "toWidgetData"
                      ? new j4("boolean", c)
                      : new k4("boolean", c);
                  return c.value;
                };
                return {
                  jl: (c) => ({ type: "boolean", value: c }),
                  Ft: (c) => b(c, "toWidgetState"),
                  Et: (c) => b(c, "toWidgetData"),
                  Gv: (c) => b(c, "toWidgetData"),
                };
              })(!1),
            ],
          }),
          zSb = ySb.ec({
            type: ["t", n4(["quiz"], "quiz"), "readonly"],
            fields: ["f", uSb],
            footer: ["fo", vSb],
          }),
          ASb = ySb.ec({
            type: ["t", n4(["poll"], "poll"), "readonly"],
            fields: ["f", uSb],
          });
        n4(["poll", "quiz"], "quiz");
        var BSb = t4({ quiz: zSb, poll: ASb }, (a) => a.type),
          u4 = {
            yf: void 0,
            nL: void 0,
            Qva: void 0,
            results: { fields: new Map() },
          },
          CSb = {
            settings: { status: 2 },
            FA: new Map(),
            gQ: 0,
            vF: void 0,
            iB: void 0,
            wqa: !1,
            Xbb: "unchecked",
            V1: !1,
            Yj: !1,
          };
        var IRb = {
          Ce: "form_widget_interacted",
          Sf(a) {
            return __c.Es({
              form_id: a.wpa,
              form_type: a.c$a,
              action_group: a.QH,
              action: a.action,
              location: a.location,
              linked_design_id: a.oEb,
              toggle_value: a.iH,
              editing_context: a.fe == null ? void 0 : __c.Fs(a.fe),
              performance_context: a.gg == null ? void 0 : __c.Gs(a.gg),
            });
          },
        };
        var KRb = Symbol("UNABLE_TO_SUBMIT");
        var MRb = {
            resultsPercentage: 0,
            yourNameWillBeShared: 1,
            incorrectLabel: 2,
            responseSaved: 3,
            submitting: 4,
            loading: 5,
            numVotes: 6,
            offline: 7,
            yourNameWontBeShared: 8,
            somethingWentWrong: 9,
            correctLabel: 10,
            live: 11,
          },
          DSb = class {
            async Xqa() {
              this.Bha = await PRb();
            }
            offline() {
              return y4(this, "offline") || O("nFbxIQ");
            }
            loading() {
              return y4(this, "loading") || O("2Q9Q+A");
            }
            constructor(a) {
              this.document = a;
              this.Xqa();
            }
          };
        var ESb = class {
          static A(a) {
            __c.Q(a, { border: p4 });
          }
          get border() {
            const a = this.Ky.qf;
            a.border.weight &&
              !a.border.color &&
              this.I &&
              this.I.error(
                "Form widget borders cannot have weight without a color"
              );
            return { weight: a.border.weight, color: a.border.color, hUa: a.W };
          }
          constructor(a, b) {
            this.Ky = a;
            this.I = b;
            ESb.A(this);
          }
        };
        var FSb = class {
          static A(a) {
            __c.Q(a, { dA: p4, tA: p4, WC: p4, Bx: p4 });
          }
          get dA() {
            const a = this.Ky.qf.dA.color,
              b = this.Ky.qf.dA.ob;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", ob: b.ref };
          }
          get tA() {
            const a = this.Ky.qf.tA.color,
              b = this.Ky.qf.tA.ob;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", ob: b.ref };
          }
          get WC() {
            if (!this.dA) return "#000000";
            switch (this.dA.type) {
              case "color":
                return this.dA.color;
              case "gradient":
                return this.dA.ob.Wl[0].color;
              default:
                throw new F(this.dA);
            }
          }
          get Bx() {
            if (!this.tA) return "#000000";
            switch (this.tA.type) {
              case "color":
                return this.tA.color;
              case "gradient":
                return this.tA.ob.Wl[0].color;
              default:
                throw new F(this.tA);
            }
          }
          constructor(a) {
            this.Ky = a;
            FSb.A(this);
          }
        };
        var B4 = ["#000000", "#ffffff"];
        var VRb = 9 * __c.AU,
          fSb = ["#cccccc", "#333333"],
          jSb = 14 * __c.AU,
          I4 = 9 * __c.AU,
          YRb = ["#00d200", "#00ed00"],
          ZRb = ["#ffae00", "#ffc654"],
          $Rb = ["#545454", "#c8c8c8"],
          aSb = ["#e53935", "#ef5350"];
        var H4 = (a, b, c, d, e) =>
          __c.Oj.Rc()
            .attrs({
              "font-size": I4,
              leading: void 0,
              "text-align": "center",
              direction: G4(c),
              color: d,
            })
            .Hc("\u25cf ")
            .attrs({
              "font-family": b,
              "font-size": I4,
              color: e,
              "font-kerning": "normal",
              "font-feature-liga": "on",
              "font-feature-clig": "on",
              "font-feature-calt": "on",
            })
            .Hc(a)
            .Hc("\n")
            .build();
        var GSb;
        GSb = ({ Ohb: a, l6a: b }) => {
          const c = b.status !== 1 && a.status === 1;
          return (a.status === 1 && b.status === 1 && a.tZ !== b.tZ) || c;
        };
        __c.BMa = {
          L5a: function (a, b, c, d, e, f, g, h, k) {
            g.Eh("forms");
            const { iCb: l } = d !== null && d !== void 0 ? d : {},
              m = h.jz("ui.rendering.form"),
              n = { root: new lSb(), option: new lSb() },
              p = new DSb(b);
            return {
              bra: CSb,
              sA: BSb,
              Qta: ({ Ky: q }) => {
                if (l && a) {
                  var r,
                    t = nSb(
                      () => q.qf.id,
                      () => {
                        const u = q.qf.$G,
                          x = q.qf.type,
                          y = l.get({ wpa: q.qf.id, yg: a, W$: c });
                        r === null || r === void 0 || r.unsubscribe();
                        x === "poll" &&
                          (r = y
                            .pEb({ CCb: () => q.qf.$G })
                            .subscribe(({ results: z, $G: A }) => {
                              w4(() => {
                                const B = new Map(q.$j.FA);
                                var D;
                                B.set(A, {
                                  ...((D = B.get(A)) !== null && D !== void 0
                                    ? D
                                    : u4),
                                  results: z,
                                });
                                q.Mm({ FA: B });
                              });
                            }));
                        y.getSettings({ BCb: () => q.qf.tW }).subscribe((z) => {
                          const A = q.$j.settings;
                          let B = z;
                          if (
                            z.status === 1 &&
                            !q.qf.tW &&
                            q.qf.type === "quiz"
                          ) {
                            var D, H;
                            const J =
                              (H =
                                (D = q.qf.fields.first()) === null ||
                                D === void 0
                                  ? void 0
                                  : D.value.v5a.toArray()) !== null &&
                              H !== void 0
                                ? H
                                : [];
                            B = {
                              status: 1,
                              Gba: (K) => J.includes(K),
                              tZ: z.tZ,
                            };
                          }
                          w4(() => {
                            q.Mm({ settings: B });
                          });
                          GSb({ Ohb: B, l6a: A }) &&
                            y.SBb({ $G: u, tW: q.qf.tW }).then(
                              mSb((J) => {
                                if (J.ok) {
                                  var K = new Map(q.$j.FA);
                                  if (J.value) {
                                    var M;
                                    J = J.value;
                                    var P;
                                    const ba =
                                      (P =
                                        (M = q.qf.fields.first()) === null ||
                                        M === void 0
                                          ? void 0
                                          : M.value.id) !== null && P !== void 0
                                        ? P
                                        : "";
                                    var T;
                                    ({ yf: M } =
                                      (T = J.gwb.get(ba)) !== null &&
                                      T !== void 0
                                        ? T
                                        : {});
                                    var V;
                                    K.set(u, {
                                      ...((V = K.get(u)) !== null &&
                                      V !== void 0
                                        ? V
                                        : u4),
                                      yf: M,
                                      nL: M,
                                    });
                                  } else K.set(u, u4);
                                  q.Mm({ FA: K });
                                }
                              })
                            );
                        });
                      },
                      { fireImmediately: !0 }
                    ),
                    v = nSb(
                      () =>
                        (k === null || k === void 0 ? void 0 : k.status) === 2,
                      mSb((u) => {
                        q.Mm({ Yj: u });
                      }),
                      { fireImmediately: !0 }
                    );
                  return () => {
                    r === null || r === void 0 || r.unsubscribe();
                    t();
                    v();
                  };
                }
              },
              render: (q, r) => {
                var t = HRb(q);
                if (l && a) {
                  var v = l.get({ wpa: q.qf.id, yg: a, W$: c });
                  v = LRb(q, t, v, e, f, m);
                }
                a: {
                  var u = q.qf,
                    x = new FSb(q),
                    y = new ESb(q);
                  switch (u.type) {
                    case "poll":
                      var z;
                      r = q.qf;
                      q = q.$j;
                      u = x.dA;
                      x = x.tA;
                      y = y.border;
                      var A = y.hUa,
                        B = r.direction,
                        D =
                          (z = r.fields.first()) === null || z === void 0
                            ? void 0
                            : z.value;
                      if (D && u && x) {
                        z = D4(u);
                        var H = D4(x),
                          J = t.Spa(),
                          K = t.dqa();
                        v = {
                          minWidth: r.minWidth,
                          minHeight: r.minHeight,
                          ...z4({
                            layout: "vertical",
                            direction: F4(B),
                            background: x,
                            W: A,
                            border: y,
                            cells: [
                              r.Kqa
                                ? void 0
                                : TRb({
                                    direction: B,
                                    text: D.label,
                                    background: u,
                                  }),
                              XRb({
                                b$a: t,
                                XN: SRb(v),
                                options: D.options,
                                vF: q.vF,
                                iB: q.iB,
                                yf: K.yf,
                                Rua: D.W,
                                WC: z,
                                Bx: H,
                                Gs: r.Gs,
                                direction: B,
                                W4: J,
                                dF: D.id,
                                messages: p,
                                bia: n,
                              }),
                              ...cSb({
                                direction: B,
                                messages: p,
                                Gs: r.Gs,
                                bib: t.sab(D.id),
                                status: t.WT(),
                                settings: q.settings,
                                backgroundColor: H,
                              }),
                            ].filter(yb),
                          }),
                          ref: n.root,
                        };
                      } else
                        v = {
                          ...z4({
                            layout: "vertical",
                            direction: F4(B),
                            background: { type: "color", color: "#ffffff" },
                            cells: [],
                          }),
                          minWidth: r.minWidth,
                          minHeight: r.minHeight,
                        };
                      break a;
                    case "quiz":
                      u = x;
                      z = q.qf;
                      q = q.$j;
                      var M = u.dA;
                      u = u.tA;
                      y = y.border;
                      x = y.hUa;
                      A = z.direction;
                      var P =
                        (B = z.fields.first()) === null || B === void 0
                          ? void 0
                          : B.value;
                      if (P && M && u) {
                        B = D4(M);
                        D = D4(u);
                        H = t.WT();
                        J = q.settings.status === 1 && q.settings;
                        K = t.Spa() && J && H === 0;
                        t = t.dqa();
                        var T = z.minWidth,
                          V = z.minHeight,
                          ba = F4(A);
                        M = z.Kqa
                          ? void 0
                          : TRb({ direction: A, text: P.label, background: M });
                        P = hSb({
                          XN: SRb(v),
                          direction: A,
                          options: P.options,
                          settings: q.settings,
                          vF: q.vF,
                          iB: q.iB,
                          yf: t.yf,
                          Rua: P.W,
                          Bx: D,
                          W4: K,
                          bia: n,
                          context: r,
                        });
                        v = v
                          ? {
                              submit: v.submit,
                              pta: v.pta,
                              qta: v.qta,
                              ota: v.ota,
                              rta: v.rta,
                            }
                          : void 0;
                        v = {
                          minWidth: T,
                          minHeight: V,
                          ...z4({
                            layout: "vertical",
                            direction: ba,
                            background: u,
                            W: x,
                            border: y,
                            cells: [
                              M,
                              P,
                              ...kSb({
                                XN: v,
                                direction: A,
                                messages: p,
                                Gs: z.Gs,
                                wy: z.footer.label,
                                WC: B,
                                status: H,
                                W4: K && r.mode !== "edit",
                                settings: J ? J : void 0,
                                yf: t.yf,
                                backgroundColor: D,
                                gQ: q.gQ,
                              }),
                            ].filter(yb),
                          }),
                          ref: n.root,
                        };
                      } else
                        v = {
                          ...z4({
                            layout: "vertical",
                            direction: F4(A),
                            background: { type: "color", color: "#ffffff" },
                            cells: [],
                          }),
                          minWidth: z.minWidth,
                          minHeight: z.minHeight,
                        };
                      break a;
                    default:
                      throw new F(u);
                  }
                }
                return v;
              },
              bia: n,
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/80f5fcabfc014327.js.map
