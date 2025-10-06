(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [35024],
  {
    /***/ 839579: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var WH = __c.WH;
        var Jc = __c.Jc;
        var Q = __c.Q;
        var Yu = __c.Yu;
        var F = __c.F;
        var O = __c.O;
        var Kx = __c.Kx;
        var yu = __c.yu;
        var E = __c.E;
        var OTb = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.ya;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.Yb === c : g.span.ad === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      k.boundary === "start"
                        ? c === null || c === void 0
                          ? void 0
                          : c.Ca
                        : c === null || c === void 0
                        ? void 0
                        : c.Na))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: E(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.Koa),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.iUa),
                      (h = h.ya === k.ya && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.zc === c.zc &&
                    g.zc === 0
                      ? (g.Koa = f)
                      : e.push({
                          iUa: k,
                          gpb: l,
                          Koa: f,
                          color: c.color,
                          weight: c.weight,
                          zc: c.zc,
                        });
                  }
              }
            return e;
          },
          PTb = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.ya,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.Vb === h : d.span.Qc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      l.boundary === "start"
                        ? d === null || d === void 0
                          ? void 0
                          : d.Ba
                        : d === null || d === void 0
                        ? void 0
                        : d.Wa) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { ya: g, boundary: "start" }
                      : { ya: E(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.lHa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.Noa),
                      (k = k.ya === m.ya && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.zc === d.zc &&
                    h.zc === 0
                      ? (h.Noa = g)
                      : f.push({
                          lHa: l,
                          qpb: m,
                          Noa: g,
                          color: d.color,
                          weight: d.weight,
                          zc: d.zc,
                        });
                  }
              }
            return f;
          },
          QTb = function (a, b, c, d, e) {
            const f = a.BVa.x5a(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                v = f.get(r) || 0;
              return t <= v ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.vc(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.vc(d[0].ya)) &&
              e.push({ ya: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].ya)) &&
              e.push({ ya: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.vc(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.ya : void 0;
                k = l ? b.layout.rows.vc(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  q.boundary === "end"
                    ? l === null || l === void 0
                      ? void 0
                      : l.Wa
                    : m === null || m === void 0
                    ? void 0
                    : m.Ba;
                m =
                  r.boundary === "end"
                    ? n === null || n === void 0
                      ? void 0
                      : n.Na
                    : m === null || m === void 0
                    ? void 0
                    : m.Ca;
                n =
                  q.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Wa
                    : n === null || n === void 0
                    ? void 0
                    : n.Ba;
                l =
                  r.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Na
                    : l === null || l === void 0
                    ? void 0
                    : l.Ca;
                p = __c.DBa({ Ca: n, Na: k, Ba: l, Wa: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: v, width: u } =
                  (t === null || t === void 0 ? void 0 : t.zc) === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (l === null || l === void 0 ? void 0 : l.weight) || 0,
                          (m === null || m === void 0 ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (n === null || n === void 0 ? void 0 : n.weight) || 0,
                          (k === null || k === void 0 ? void 0 : k.weight) || 0
                        ),
                      };
                g.set(Z4(q, r), __c.BE(p, v / 2, u / 2));
              }
            }
            return g;
          },
          RTb = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = OTb(b, c, d, e);
            f = PTb(b, c, d, e, f);
            const h = QTb(a, b, c, d, e),
              k = a.iab(b),
              l = a.E$a(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.gpb,
                  t = n.Koa,
                  v = n.iUa;
                const u = n.color,
                  x = n.weight;
                n = n.zc;
                const y = m ? -1 : 1,
                  z =
                    (p = h.get(Z4(r, v))) === null || p === void 0
                      ? void 0
                      : p.Wa;
                p =
                  (q = h.get(Z4(t, v))) === null || q === void 0
                    ? void 0
                    : q.Ba;
                if (z != null && p != null) {
                  q = E(k.get(v.ya));
                  var A = E(l.get(r.column));
                  r = E(l.get(t.column));
                  v = v.boundary === "start" ? q.start : q.end;
                  q = A.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: u,
                    weight: x,
                    zc: n,
                    p1: new yu(q + z * y, v),
                    p2: new yu(t + p * y, v),
                    ...__c.GE((t - q) * y, n * x, z),
                  };
                }
              })
              .filter(__c.yb);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.lHa,
                    t = n.qpb,
                    v = n.Noa;
                  const u = n.color,
                    x = n.weight;
                  n = n.zc;
                  const y =
                    (p = h.get(Z4(r, t))) === null || p === void 0
                      ? void 0
                      : p.Na;
                  p =
                    (q = h.get(Z4(r, v))) === null || q === void 0
                      ? void 0
                      : q.Ca;
                  if (y != null && p != null) {
                    q = E(l.get(r.column));
                    var z = E(k.get(t.ya));
                    t = E(k.get(v.ya));
                    r = r.boundary === "start" ? q.start : q.end;
                    q = z.start;
                    v = v.boundary === "start" ? t.start : t.end;
                    return {
                      color: u,
                      weight: x,
                      zc: n,
                      p1: new yu(r, q + y),
                      p2: new yu(r, v + p),
                      ...__c.GE(v - q, n * x, y),
                    };
                  }
                })
                .filter(__c.yb),
              ...a,
            ];
          },
          STb = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.Bd(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.Bd(d, (e) => `${e.Jk}_${e.Kk}`);
              for (const [, e] of a) {
                const { Kk: f, Jk: g } = e[0];
                a = __c.Bd(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Jk: g, Kk: f });
              }
            }
            return b;
          },
          TTb = function (a, b, c, d) {
            var e = __c.Apb;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { ya: k, boundary: "start" },
                      { ya: k, boundary: "end" },
                    ]
                  : [{ ya: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.BVa.rmb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = RTb(e, a, h, f, g, d);
            return STb(c);
          },
          $4 = function () {
            const [a] = (0, __c.fc)(() => Kx());
            return a;
          },
          UTb = function (a) {
            switch (a) {
              case 2:
                return O("ibdecg");
              case 7:
                return O("446quA");
              case 5:
                return O("j1fbqg");
              case 1:
                return O("O5i4AQ");
              case 6:
                return O("C0VHsg");
              case 4:
                return O("9ND0kg");
              case -1:
                return O("RWqnLA");
              case 9:
                return O("nQR/7w");
              case -2:
                return O("P23rtA");
              case 3:
                return O("+IXmVg");
              default:
                throw new F(a);
            }
          },
          VTb = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          WTb = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.Dpb)(a) / 2
                  : -(0, __c.Bpb)(a) / 2,
              c = -(0, __c.Cpb)(a) / 2,
              d = a.width + (0, __c.Bpb)(a) / 2 + (0, __c.Dpb)(a) / 2;
            a = a.height + (0, __c.Cpb)(a) / 2 + (0, __c.Epb)(a) / 2;
            return Yu({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          XTb = function (a) {
            return (b) => ({ type: "react", node: (0, __c.N)(a, { ...b }) });
          },
          ZTb = function (a) {
            var b;
            const c = a.wA;
            var d = a.content;
            const e = a.context;
            a = a.cq;
            __c.C(
              (d === null || d === void 0
                ? void 0
                : (b = d.tg) === null || b === void 0
                ? void 0
                : b.type) === "formula"
            );
            b = d.Ok;
            const f = { type: "dom", render: (h) => (h.innerText = "") };
            switch (b.type) {
              case 9:
                d = f;
                break;
              case 6:
                var g;
                d =
                  (g = c.yja) === null || g === void 0
                    ? void 0
                    : g.call(c, {
                        content: __c.me(__c.d2a, {
                          ...__c.Xab,
                          value: b.value,
                        }),
                        context: e,
                        cq: a,
                      });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                d = YTb(c, e, d.lB, d.Ok.type);
                break;
              case 0:
                d = {
                  type: "react",
                  node: a5(__c.TR, {
                    label: UTb(b.error),
                    children: a5(__c.Ny, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: a5(__c.Twb, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new F(b);
            }
            return d !== null && d !== void 0 ? d : f;
          },
          YTb = function (a, b, c, d) {
            var e;
            return (e = a.Bja) === null || e === void 0
              ? void 0
              : e.call(a, { context: b, value: c, valueType: d });
          },
          bUb = function (a) {
            const b = a.wA,
              c = a.If,
              d = a.bqb,
              e = a.yb;
            b.Bja = (f) => __c.AIa({ ...f, yb: e });
            b.iEa = (f) => ZTb({ ...f, wA: b });
            b.yja = XTb($Tb({ If: c, lR: void 0 }));
            b.kEa = aUb(d, e);
            b.lEa = XTb((f) => a5(b5, { ...f, yb: e }));
          },
          cUb = function ({
            label: a,
            cb: b,
            width: c,
            height: d,
            scale: e,
            tHa: f,
          }) {
            return a5("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: c5(__c.Ky, {
                className: d5("ivlMMQ", e5(f)),
                size: "small",
                alignment: "center",
                children: [b && a5(b, { size: "small" }), a],
              }),
            });
          },
          e5 = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          eUb = function ({ Dd: a, vMa: b, scale: c, Np: d, Op: e, GZa: f }) {
            const g = f5(() => {
                const m = d === null || d === void 0 ? void 0 : d.get();
                if (m != null && m.length !== 0) return new __c.pE(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return a5(__c.Ly, {
              Uq: "light",
              light: "light",
              bu: "light",
              dark: "light",
              children: (m) =>
                a5("div", {
                  className: d5("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: a5("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: d5("N7J3UA", l),
                    ref: g === null || g === void 0 ? void 0 : g.Nm,
                    children: a5(__c.YR, {
                      className: d5("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: O("ruWN9A"),
                      children: a5(dUb, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          gUb = function () {
            const a = new fUb(),
              b = new __c.AS(),
              c = g5((f) => {
                const {
                    scale: g = 1,
                    qMa: h,
                    size: k = "small",
                    GZa: l = !0,
                  } = f,
                  m = h5((n) => a.Op({ scale: n, size: k, ita: h }), [k, h]);
                return a5(eUb, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  Dd: f.sheet.direction === "rtl",
                  vMa: f.selection != null && a.mdb(f.sheet, f.selection),
                  Op: m,
                  GZa: l,
                });
              }),
              d = g5((f) => {
                const {
                    scale: g = 1,
                    qMa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Vmb: n,
                  } = f,
                  p = h5((u) => a.Op({ scale: u, size: k, ita: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = h5((u) => m != null && a.jxa(m).has(u), [m]),
                  t = h5((u) => m != null && a.gbb(l, m).has(u), [l, m]),
                  v = h5(
                    (u) => {
                      const x =
                        n != null &&
                        l.layout.cols.hf(u, n.Vb) >= 0 &&
                        l.layout.cols.hf(u, n.Qc) <= 0;
                      return r(u)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(u)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return a5(i5, { ...f, Ld: g, qe: q, Op: p, nF: v, fG: b });
              }),
              e = g5((f) => {
                const {
                    scale: g = 1,
                    qMa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Vmb: n,
                  } = f,
                  p = h5((u) => a.Op({ scale: u, size: k, ita: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = h5((u) => m != null && a.lxa(m).has(u), [m]),
                  t = h5((u) => m != null && a.hbb(l, m).has(u), [l, m]),
                  v = h5(
                    (u) => {
                      const x =
                        n != null &&
                        l.layout.rows.hf(u, n.Yb) >= 0 &&
                        l.layout.rows.hf(u, n.ad) <= 0;
                      return r(u)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(u)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return a5(j5, { ...f, Ld: q, qe: g, Op: p, nF: v, fG: b });
              });
            return { g_a: c, f_a: d, h_a: e };
          },
          hUb = function (a) {
            const b = a.Eq,
              c = () => null;
            return __c.Ux((d) => a5(k5, { ...d, Eq: b, Vh: c }));
          },
          iUb = function ({ sheet: a, aa: b, range: c, ae: d }) {
            l5(
              () =>
                m5(() => {
                  if (d.current != null) {
                    var e,
                      f =
                        (e = b === null || b === void 0 ? void 0 : b.get()) !==
                          null && e !== void 0
                          ? e
                          : 1;
                    e = a.direction === "rtl";
                    e = c ? a.Ba(c.Vb) * f * (e ? 1 : -1) : 0;
                    var g = c ? -a.Ca(c.Yb) * f : 0;
                    d.current.style.transform = `translate(${e}px, ${g}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          lUb = function ({ onScroll: a }) {
            const b = new jUb(a);
            return {
              hD: b,
              kja: g5((c) =>
                a5(kUb, { sheet: c.sheet, hD: b, children: c.children })
              ),
            };
          },
          oUb = function (a) {
            const b = a.Eq,
              c = a.rf,
              d = a.CVa,
              e = ({ children: k }) => k,
              { hD: f, kja: g } = lUb({ onScroll: a.onScroll });
            class h extends mUb {
              get $L() {
                const k = this.props.ua.Oy;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new F(k);
                }
              }
              componentDidMount() {
                d.rVa(this.props.item, {
                  dc: this.props.dc,
                  ua: this.props.ua,
                });
              }
              componentWillUnmount() {
                d.v4a(this.props.item, {
                  dc: this.props.dc,
                  ua: this.props.ua,
                });
              }
              render() {
                d.rVa(this.props.item, {
                  dc: this.props.dc,
                  ua: this.props.ua,
                });
                return a5(nUb, {
                  ...this.props,
                  aa: this.aa,
                  Eq: b,
                  $L: this.$L,
                  Vh: this.Vh,
                  CVa: d,
                  hD: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.aa = n5(() => {
                  const l = this.props.item;
                  var m = this.props.ua,
                    n = m.Oy;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return m;
                    case "print":
                      n = d.nab(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.QE(l, n.dc, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new F(n);
                  }
                });
                this.Vh = g5((l) =>
                  a5("div", {
                    className: "wKvivQ",
                    children: a5(__c.IIa, { ...this.props, ...l, rf: c }),
                  })
                );
              }
            }
            return { $0a: h, hD: f };
          },
          pUb = function (a, b) {
            if (
              b != null &&
              b.Vb != null &&
              b.Yb != null &&
              b.Qc != null &&
              b.ad != null
            ) {
              var c = a.Ba(b.Vb),
                d = a.Ca(b.Yb),
                e = a.Ba(b.Qc) + b.Qc.width - c;
              a = a.Ca(b.ad) + b.ad.height - d;
              return Yu({ top: d, left: c, width: e, height: a });
            }
          },
          rUb = function (a) {
            const b = a.Eq,
              c = () => null;
            return (d) => a5(qUb, { ...d, Eq: b, Vh: c });
          },
          uUb = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { KGa: b, ys: b, Qa: {}, ho: {} },
              d = o5(
                () => a.EA.style || c,
                (h) => {
                  var k;
                  Object.assign(a.P8.style, h.KGa);
                  Object.assign(a.qS.style, h.ys);
                  Object.assign(a.yE.style, h.Qa);
                  Object.assign(a.EE.style, h.ho);
                  h =
                    h === null || h === void 0
                      ? void 0
                      : (k = h.Qa) === null || k === void 0
                      ? void 0
                      : k.textDecoration;
                  a.yE.classList.toggle("OQx3PQ", h === "underline");
                  a.yE.classList.toggle("_99ezUA", h === "line-through");
                  a.yE.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: sUb }
              ),
              e = o5(
                () => a.Zra,
                (h) => {
                  a.yE.classList.toggle("_84KvRA", !h);
                  a.P8.classList.toggle("_84KvRA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = o5(
                () => a.renderer,
                (h) => {
                  a.F9 &&
                  (h === null || h === void 0 ? void 0 : h.type) !== "react"
                    ? ((a.F9 = void 0), a.S3.remove())
                    : (a.EE.innerHTML = "");
                  switch (h === null || h === void 0 ? void 0 : h.type) {
                    case "react":
                      a.F9 = tUb(h.node, a.S3);
                      a.EE.appendChild(a.S3);
                      break;
                    case "dom":
                      h.render(a.EE);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new F(h);
                  }
                  a.Yta();
                },
                { fireImmediately: !0 }
              ),
              g = o5(
                () => a.vqa,
                (h) => {
                  a.yE.classList.toggle("qxD1GA", h);
                },
                { fireImmediately: !0 }
              );
            return () => {
              d();
              e();
              f();
              g();
            };
          },
          sUb = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          wUb = function (a) {
            const b = a.xA,
              c = a.nD,
              d = a.OD,
              e = a.aZa,
              f = a.Ao,
              g = new vUb(c),
              h = (k) => {
                if (f)
                  a: {
                    switch (k.type) {
                      case "invalid":
                        k = !1;
                        break a;
                      case "canonical":
                        if (k.na.length > 0) {
                          k = !1;
                          break a;
                        }
                        k = f.gP(k.fZ.slice(1).trim());
                        k =
                          k.result !== "success"
                            ? !1
                            : __c.YD(new __c.aE(), k.NS).length > 0;
                        break a;
                      default:
                        throw new F(k);
                    }
                    k = void 0;
                  }
                else k = !1;
                return k;
              };
            return (k) =>
              a5(p5, {
                ...k,
                eO: h,
                OD: d,
                nD: c,
                xA: b,
                xra: g,
                aZa: e === null || e === void 0 ? void 0 : e.get(),
              });
          },
          Z4 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.ya.id}-${b.boundary}`,
          $Tb =
            ({ If: a, lR: b }) =>
            (c) =>
              (0, __c.N)(__c.Gpb, { ...c, If: a, lR: b }),
          q5 = __webpack_require__(443763),
          xUb = q5.Fragment,
          a5 = q5.jsx,
          c5 = q5.jsxs;
        var g5 = __webpack_require__(214645).Pi;
        var r5 = __webpack_require__(875604),
          s5 = r5.Component,
          mUb = r5.PureComponent,
          h5 = r5.useCallback,
          l5 = r5.useEffect,
          yUb = r5.useLayoutEffect,
          f5 = r5.useMemo,
          t5 = r5.useRef,
          zUb = r5.useState;
        var u5 = __webpack_require__(519427),
          v5 = u5.action,
          m5 = u5.autorun,
          w5 = u5.comparer,
          n5 = u5.computed,
          AUb = u5.createAtom,
          x5 = u5.observable,
          o5 = u5.reaction,
          BUb = u5.untracked;
        var y5 = __webpack_require__(46239).gn;
        var CUb = __webpack_require__,
          DUb = CUb(993864),
          d5 = CUb.n_x(DUb)();
        var EUb = __webpack_require__(358579).Z;
        var z5 = __webpack_require__(635872),
          A5 = z5.Om,
          FUb = z5.kq,
          GUb = z5.YN;
        var tUb = __webpack_require__(204358).createPortal;
        var HUb = g5((a) => {
            var b,
              c,
              d = a.sheet.direction === "rtl";
            d = { H2wykw: !d, UweldA: d };
            const [e] = zUb(() => Kx()),
              f = {
                get: h5(() => {
                  var g;
                  const h =
                    e === null || e === void 0
                      ? void 0
                      : (g = e.current) === null || g === void 0
                      ? void 0
                      : g.getBoundingClientRect();
                  var k, l;
                  g = {
                    top: 0,
                    left: 0,
                    width:
                      (k = h === null || h === void 0 ? void 0 : h.width) !==
                        null && k !== void 0
                        ? k
                        : 0,
                    height:
                      (l = h === null || h === void 0 ? void 0 : h.height) !==
                        null && l !== void 0
                        ? l
                        : 0,
                  };
                  return Yu(g);
                }, [e]),
              };
            return c5("div", {
              className: d5("nMvVqA", d),
              children: [
                c5("div", {
                  ref: EUb(a.ae, e),
                  className: "_0YOFPg",
                  children: [
                    a5(a.Eq, { ...a, viewport: f }),
                    a5("div", {
                      className: d5("Gdl7fQ", d),
                      children:
                        (c = a.DDa) === null || c === void 0
                          ? void 0
                          : (b = c.get()) === null || b === void 0
                          ? void 0
                          : b.map((g, h) => a5(g, {}, h)),
                    }),
                  ],
                }),
                a.WCb === "visible" &&
                  c5(xUb, {
                    children: [
                      a5("div", {
                        className: d5("_32sKQw", d),
                        children: a5(a.X0a, { ...a }),
                      }),
                      a5("div", {
                        className: d5("xdIsTQ", d),
                        children: a5(a.a1a, { ...a }),
                      }),
                      a5("div", {
                        className: d5("rsTRSA", d),
                        children: a5(a.Z0a, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          IUb = g5((a) => {
            a = a.content;
            __c.w(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.ba;
              case "text3":
                return __c.nr.va(a.value).cells.ba();
              default:
                throw new F(a);
            }
          });
        var aUb = (a, b) =>
            __c.lIa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else {
                var { gh: f, link: g } = __c.ng(__c.Xg, c.attrs);
                (c = b === null || b === void 0 ? void 0 : b(g))
                  ? ((d = d.appendChild(document.createElement("a"))),
                    (d.href = c.href),
                    (d.target = c.target),
                    d.setAttribute("draggable", "false"),
                    (d.rel = c.rel),
                    c.onClick && d.addEventListener("click", c.onClick))
                  : (d = d.appendChild(document.createElement("div")));
                f === "wrap" && (d.className = "dt4Dlg");
                a.render({
                  container: d,
                  text: e.value,
                  Pa: void 0,
                  writingMode: 1,
                  Jd: "start",
                  Qg: JUb(e, f),
                  yb: b,
                });
              }
            }),
          JUb = A5(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.ba.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: w5.structural }
          );
        var b5 = class extends s5 {
          static A(a) {
            Q(a, { gh: n5, link: n5 });
          }
          get gh() {
            return __c.ng(__c.Xg, this.props.context.attrs).gh;
          }
          get link() {
            const a = this.props.yb,
              b = __c.ng(__c.Xg, this.props.context.attrs).link;
            return a === null || a === void 0 ? void 0 : a(b);
          }
          render() {
            var a = this.props.content,
              b = this.props.context;
            if (a.value.isEmpty) return null;
            a = a5(this.props.Vh, {
              content: a,
              ya: b.container.ya,
              col: b.container.column,
              gh: this.gh,
            });
            b = this.gh === "wrap" ? "dt4Dlg" : void 0;
            return this.link
              ? a5("a", {
                  className: b,
                  href: this.link.href,
                  target: this.link.target,
                  rel: this.link.rel,
                  onClick: this.link.onClick,
                  children: a,
                })
              : b
              ? a5("div", { className: b, children: a })
              : a;
          }
          constructor(...a) {
            super(...a);
            b5.A(this);
          }
        };
        b5 = y5([Jc], b5);
        var fUb = class {
          Op({ size: a, scale: b, ita: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.$V * b : __c.Nvb * b;
          }
          constructor() {
            this.mdb = A5((a, b) => {
              var c, d;
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() ===
                  (((c = b.rows) === null || c === void 0 ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  (((d = b.columns) === null || d === void 0
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.jxa = FUb(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.bs }
            );
            this.lxa = FUb(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0 ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.bs }
            );
            this.gbb = A5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.lxa(b).size > 0) return new Set(a.layout.cols);
                b = this.jxa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ya, e.column);
                  for (const f of VTb(
                    c ? c.span.Vb : e.column,
                    c ? c.span.Qc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.bs }
            );
            this.hbb = A5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.jxa(b).size > 0) return new Set(a.layout.rows);
                b = this.lxa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.ya, e.column);
                  for (const f of VTb(
                    c ? c.span.Yb : e.ya,
                    c ? c.span.ad : e.ya,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.bs }
            );
          }
        };
        var KUb = parseInt("4px", 10) || 4,
          i5 = class extends s5 {
            static A(a) {
              Q(a, { Dd: n5, kr: n5, l5: n5 });
            }
            get Dd() {
              return this.props.sheet.direction === "rtl";
            }
            get kr() {
              var a;
              const b =
                (a = this.props.Np) === null || a === void 0 ? void 0 : a.get();
              if (b != null && b.length !== 0) return new __c.pE(b);
            }
            get l5() {
              var a, b, c;
              return (b = (c = this.props).Tpa) === null || b === void 0
                ? void 0
                : (a = b.call(c)) === null || a === void 0
                ? void 0
                : a.get();
            }
            render() {
              return a5(__c.Ly, {
                Uq: "light",
                light: "light",
                bu: "light",
                dark: "light",
                children: this.K4a,
              });
            }
            constructor(...a) {
              super(...a);
              this.onMouseMove =
                (i5.A(this),
                v5((b) => {
                  const { onMouseMove: c, sheet: d, Ld: e = 1 } = this.props;
                  c === null || c === void 0 || c(b, d, "column", e);
                }));
              this.onMouseLeave = v5((b) => {
                var c, d;
                (c = (d = this.props).onMouseLeave) === null ||
                  c === void 0 ||
                  c.call(d, b);
              });
              this.JTa = (b, c, d) => {
                const {
                    sheet: e,
                    Op: f,
                    nF: g,
                    fDb: h,
                    Ld: k = 1,
                    qe: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.Dd, gtA7Dw: this.Dd },
                  n = (d === null || d === void 0 ? 0 : d.sticky)
                    ? this.Dd
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var p;
                const q = (d === null || d === void 0 ? 0 : d.sticky)
                  ? (p = this.l5) !== null && p !== void 0
                    ? p
                    : n
                  : void 0;
                let r = -1;
                return c5("div", {
                  style: q,
                  className: d5("Vt2_4w", m, {
                    Tn3nUw: d === null || d === void 0 ? void 0 : d.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    e.layout.cols.map((t) => {
                      var v;
                      r++;
                      if (
                        !(
                          (b && e.layout.cols.hf(t, b) < 0) ||
                          (c && e.layout.cols.hf(t, c) > 0)
                        )
                      )
                        return a5(
                          LUb,
                          {
                            col: t,
                            label: __c.vB(r),
                            cb:
                              h === null || h === void 0
                                ? void 0
                                : (v = h.get()) === null || v === void 0
                                ? void 0
                                : v.get(t),
                            Op: f,
                            nF: g,
                            Ld: k,
                            qe: l,
                          },
                          t.id
                        );
                    }),
                    (d === null || d === void 0 ? void 0 : d.sticky) &&
                      a5("div", {
                        style: { width: KUb * k },
                        className: d5("HBvlug", "ru3tFQ", m),
                      }),
                  ],
                });
              };
              this.K4a = (b) => {
                var c;
                const d = this.props.sheet,
                  e = d.view.freeze.lI
                    ? d.layout.Qd.get(d.view.freeze.lI)
                    : void 0,
                  f = { jNbTIg: !this.Dd, gtA7Dw: this.Dd };
                return c5("div", {
                  ref: (c = this.kr) === null || c === void 0 ? void 0 : c.Nm,
                  className: d5("xhBZaw", f, b.className),
                  children: [
                    e && this.JTa(void 0, e, { sticky: !0 }),
                    this.JTa(e ? d.cols.next(e) : void 0),
                  ],
                });
              };
            }
          };
        i5 = y5([Jc], i5);
        var j5 = class extends s5 {
          static A(a) {
            Q(a, { Dd: n5, kr: n5, l5: n5 });
          }
          get Dd() {
            return this.props.sheet.direction === "rtl";
          }
          get kr() {
            var a;
            const b =
              (a = this.props.Np) === null || a === void 0 ? void 0 : a.get();
            if (b != null && b.length !== 0) return new __c.pE(b);
          }
          get l5() {
            var a, b, c;
            return (b = (c = this.props).Tpa) === null || b === void 0
              ? void 0
              : (a = b.call(c)) === null || a === void 0
              ? void 0
              : a.get();
          }
          render() {
            return a5(__c.Ly, {
              Uq: "light",
              light: "light",
              bu: "light",
              dark: "light",
              children: this.Fmb,
            });
          }
          constructor(...a) {
            super(...a);
            this.onMouseMove =
              (j5.A(this),
              v5((b) => {
                const { onMouseMove: c, sheet: d, qe: e = 1 } = this.props;
                c === null || c === void 0 || c(b, d, "row", e);
              }));
            this.onMouseLeave = v5((b) => {
              var c, d;
              (c = (d = this.props).onMouseLeave) === null ||
                c === void 0 ||
                c.call(d, b);
            });
            this.NTa = (b, c, d) => {
              const {
                  sheet: e,
                  Op: f,
                  nF: g,
                  Ld: h = 1,
                  qe: k = 1,
                } = this.props,
                l = { jNbTIg: !this.Dd, gtA7Dw: this.Dd },
                m = (d === null || d === void 0 ? 0 : d.sticky)
                  ? { top: 0 }
                  : void 0;
              var n;
              const p = (d === null || d === void 0 ? 0 : d.sticky)
                ? (n = this.l5) !== null && n !== void 0
                  ? n
                  : m
                : void 0;
              let q = -1;
              return c5("div", {
                style: p,
                className: d5("_93roJg", l, {
                  Tn3nUw: d === null || d === void 0 ? void 0 : d.sticky,
                }),
                onMouseMove: this.onMouseMove,
                onMouseLeave: this.onMouseLeave,
                children: [
                  e.rows.map((r) => {
                    q++;
                    if (
                      !(
                        (b && e.rows.hf(r, b) < 0) ||
                        (c && e.rows.hf(r, c) > 0)
                      )
                    )
                      return a5(
                        MUb,
                        {
                          ya: r,
                          label: `${q + 1}`,
                          nF: g,
                          Op: f,
                          Ld: h,
                          qe: k,
                        },
                        r.id
                      );
                  }),
                  (d === null || d === void 0 ? void 0 : d.sticky) &&
                    a5("div", {
                      style: { height: KUb * k },
                      className: d5("HBvlug", "koz2Hg"),
                    }),
                ],
              });
            };
            this.Fmb = (b) => {
              var c;
              const d = this.props.sheet,
                e = d.view.freeze.bW
                  ? d.layout.le.get(d.view.freeze.bW)
                  : void 0,
                f = { jNbTIg: !this.Dd, gtA7Dw: this.Dd };
              return c5("div", {
                ref: (c = this.kr) === null || c === void 0 ? void 0 : c.Nm,
                className: d5("An9VeA", f, b.className),
                children: [
                  e && this.NTa(void 0, e, { sticky: !0 }),
                  this.NTa(e ? d.rows.next(e) : void 0),
                ],
              });
            };
          }
        };
        j5 = y5([Jc], j5);
        var LUb = g5((a) => {
            const b = a.label,
              c = a.cb,
              d = a.col,
              e = a.nF,
              f = a.Op,
              g = a.Ld;
            a = a.qe;
            const h = f(a),
              k = GUb(() => e(d));
            return a5("div", {
              className: d5("_83Rssw", "d2uLIA", e5(k)),
              style: { width: d.width * g, height: h },
              children: a5(cUb, {
                label: b,
                cb: c,
                width: d.width,
                height: f(1),
                scale: a,
                tHa: k,
              }),
            });
          }),
          MUb = g5((a) => {
            const b = a.label,
              c = a.ya,
              d = a.Op,
              e = a.nF,
              f = a.Ld;
            a = a.qe;
            const g = d(f),
              h = GUb(() => e(c));
            return a5("div", {
              className: d5("_83Rssw", "JhBzyw", e5(h)),
              style: { width: g, height: c.height * a },
              children: a5(cUb, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                tHa: h,
              }),
            });
          });
        var NUb =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var OUb =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var dUb = __c.MR({ bp: NUb, medium: OUb });
        var k5 = class extends s5 {
          static A(a) {
            Q(a, { Ae: n5.struct });
          }
          render() {
            const a = this.props.element,
              b = this.props.Np,
              c = this.props.Gu,
              d = this.props.Ju,
              e = this.props.aa;
            return a5(this.props.Eq, {
              sheet: a.config,
              container: this.props.container.Xi(a),
              s8: "visible",
              Np: b,
              Gu: c,
              Ju: d,
              aa: e,
              Ae: this.Ae,
              Vh: this.props.Vh,
              IH: void 0,
            });
          }
          get Ae() {
            return __c.dA(this.props.element.Za, this.props.Te);
          }
          constructor(...a) {
            super(...a);
            k5.A(this);
          }
        };
        k5 = y5([Jc], k5);
        var PUb = class {
          constructor() {
            this.gga = new WeakMap();
            this.nab = (a) => this.gga.get(a);
            this.rVa = (a, b) => {
              this.gga.set(a, b);
            };
            this.v4a = (a, b) => {
              const c = this.gga.get(a);
              c && c.ua === b.ua && c.dc === b.dc && this.gga.delete(a);
            };
          }
        };
        var B5 = parseInt("4px", 10) || 4,
          QUb = g5(({ sheet: a, aa: b, range: c, yw: d, zw: e }) => {
            if (c != null && (d || e)) {
              var f;
              b =
                (f = b === null || b === void 0 ? void 0 : b.get()) !== null &&
                f !== void 0
                  ? f
                  : 1;
              f = a.direction === "rtl";
              var g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.Ca(c.ad) + c.ad.height),
                  (a = a.Ba(c.Qc) + c.Qc.width),
                  a5("div", {
                    style: { top: d * b, width: a * b, height: B5 * b },
                    className: d5("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.Ba(c.Qc) + c.Qc.width),
                  a5("div", {
                    style: {
                      width: B5 * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: d5("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.Ca(c.ad) + c.ad.height),
                  a5("div", {
                    style: { top: c * b, width: a.width * b, height: B5 * b },
                    className: d5("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var C5 = ({ sheet: a, range: b, aa: c, children: d }) => {
            const e = $4();
            iUb({ sheet: a, aa: c, range: b, ae: e });
            return a5("div", {
              ref: e,
              className: d5(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          RUb = ({ sheet: a, range: b, aa: c, children: d }) => {
            const e = $4();
            iUb({ sheet: a, aa: c, range: b, ae: e });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return a5("div", {
              className: d5("nstn2A", a, "_9sodyg"),
              children: a5("div", {
                ref: e,
                className: d5("nstn2A", a),
                children: d,
              }),
            });
          };
        var kUb = g5(({ sheet: a, children: b, hD: c }) => {
            const d = h5(
                (f) => {
                  c.Hxa(a, f);
                },
                [c, a]
              ),
              e = h5(
                (f) => {
                  f != null ? c.jD.set(a, f) : c.jD.delete(a);
                },
                [c, a]
              );
            return a5(__c.Orb, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              iD: e,
              children: b,
            });
          }),
          jUb = class {
            Hxa(a, b) {
              this.onScroll && this.onScroll(a);
              this.A4.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.jD = new WeakMap();
              this.A4 = x5.map(new Map(), { deep: !1 });
              this.scrollTo = v5((b, c) => {
                b = this.jD.get(b);
                b === null ||
                  b === void 0 ||
                  b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var nUb = g5((a) => {
          const b = a.item,
            c = a.Np,
            d = a.cg,
            e = a.measureRef,
            f = a.aa,
            g = a.oNa,
            h = a.dc,
            k = a.Gu,
            l = a.Ju,
            m = a.Eq,
            n = a.$L,
            p = a.Vh,
            q = a.Te,
            r = a.hD;
          a = f5(() => __c.dA(b.Za, q), [b, q]);
          const t = f5(
              () =>
                g5(({ sheet: y, range: z, yw: A, zw: B }) =>
                  a5(C5, {
                    sheet: y,
                    range: z,
                    aa: f,
                    children: a5(QUb, {
                      sheet: y,
                      aa: f,
                      range: z,
                      yw: A,
                      zw: B,
                    }),
                  })
                ),
              [f]
            ),
            v = WTb(b.config),
            u = f.get(),
            x = Math.min(v.width * u, h.width);
          l5(
            () =>
              m5(() => {
                var y = b.config.view.freeze.lI
                  ? b.config.layout.Qd.get(b.config.view.freeze.lI)
                  : void 0;
                if (y != null)
                  if (b.config.Ba(y) + y.width > x) {
                    if ((y = r.jD.get(b))) y.style.overflowX = "hidden";
                  } else if ((y = r.jD.get(b))) y.style.overflowX = "scroll";
              }),
            [b, h.width, r, u, x]
          );
          return a5("div", {
            ref: e,
            className: "E8r86A",
            style: { width: x },
            children: a5(n, {
              sheet: b,
              children: a5("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: v.width * u, height: v.height * u },
                children: a5("div", {
                  className: "W1ir5A",
                  children: a5(m, {
                    container: d.Il(b),
                    sheet: b.config,
                    s8: "visible",
                    Np: c,
                    aa: f,
                    Gu: k,
                    Ju: l,
                    Ae: a,
                    Vh: p,
                    IH: t,
                  }),
                }),
              }),
            }),
          });
        });
        var SUb = g5(({ page: a, range: b, $C: c }) => {
          const d = pUb(a.sheet, b);
          return a5("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.Wu(Yu(e)).Tp(d) && c(e, f)
            ),
          });
        });
        var TUb = new __c.AS(),
          D5 = (a) => __c.$V * a,
          UUb = () => "primary-default",
          qUb = g5(
            ({
              container: a,
              Np: b,
              Gu: c,
              Ju: d,
              w0: e,
              aa: f,
              viewport: g,
              Job: h,
              Eq: k,
              Vh: l,
              $C: m,
              vfa: n,
              uvb: p,
              dub: q,
              cub: r,
            }) => {
              const t = a.page,
                v = f5(
                  () =>
                    g5(({ sheet: u, range: x, yw: y, zw: z }) =>
                      c5(xUb, {
                        children: [
                          a5(C5, {
                            sheet: t.sheet,
                            range: x,
                            aa: f,
                            children: a5(QUb, {
                              sheet: u,
                              aa: f,
                              range: x,
                              yw: y,
                              zw: z,
                            }),
                          }),
                          c5(RUb, {
                            sheet: t.sheet,
                            range: x,
                            aa: f,
                            children: [
                              p && a5(p, {}),
                              m && a5(SUb, { page: t, $C: m, range: x }),
                              r && a5(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            a5(C5, {
                              sheet: t.sheet,
                              range: x,
                              aa: f,
                              children: a5(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? a5(VUb, {
                    container: a,
                    viewport: g,
                    aa: f,
                    Np: b,
                    Gu: c,
                    Ju: d,
                    Eq: k,
                    Vh: l,
                    IH: v,
                  })
                : a5(k, {
                    sheet: t.sheet,
                    container: a,
                    s8: "hidden",
                    Np: b,
                    Gu: c,
                    Ju: d,
                    w0: e,
                    aa: f,
                    viewport: g,
                    Vh: l,
                    IH: v,
                  });
            }
          ),
          VUb = g5((a) => {
            const b = a.container,
              c = a.aa,
              d = a.viewport,
              e = a.Np,
              f = a.Gu,
              g = a.Ju,
              h = a.Eq,
              k = a.Vh;
            a = a.IH;
            const l = b.page,
              m = l.sheet.direction === "rtl",
              n = t5(null),
              p = t5(null),
              q = t5(null);
            l5(() => {
              const y = E5({
                sheet: l.sheet,
                Jga: !0,
                Kga: !0,
                aa: c,
                viewport: d,
              });
              return o5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (z) => {
                  const A = n.current;
                  if (z && A) {
                    var B = l.sheet.direction === "rtl",
                      D;
                    A.style.position =
                      (D = z.position) !== null && D !== void 0 ? D : "sticky";
                    var H;
                    A.style.top =
                      (H = z.top) !== null && H !== void 0 ? H : "0px";
                    var J, K;
                    B
                      ? (A.style.right =
                          (J = z.right) !== null && J !== void 0 ? J : "0px")
                      : (A.style.left =
                          (K = z.left) !== null && K !== void 0 ? K : "0px");
                    var M;
                    A.style.transform =
                      (M = z.transform) !== null && M !== void 0 ? M : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            l5(() => {
              const y = E5({
                sheet: l.sheet,
                Jga: !1,
                Kga: !0,
                aa: c,
                viewport: d,
              });
              return o5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (z) => {
                  const A = q.current;
                  if (z && A) {
                    var B;
                    A.style.position =
                      (B = z.position) !== null && B !== void 0 ? B : "sticky";
                    var D;
                    A.style.top =
                      (D = z.top) !== null && D !== void 0 ? D : "0px";
                    var H;
                    A.style.transform =
                      (H = z.transform) !== null && H !== void 0 ? H : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            l5(() => {
              const y = E5({
                sheet: l.sheet,
                Jga: !0,
                Kga: !1,
                aa: c,
                viewport: d,
              });
              return o5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (z) => {
                  const A = p.current;
                  if (z && A) {
                    var B = l.sheet.direction === "rtl",
                      D;
                    A.style.position =
                      (D = z.position) !== null && D !== void 0 ? D : "sticky";
                    var H, J;
                    B
                      ? (A.style.right =
                          (H = z.right) !== null && H !== void 0 ? H : "0px")
                      : (A.style.left =
                          (J = z.left) !== null && J !== void 0 ? J : "0px");
                    var K;
                    A.style.transform =
                      (K = z.transform) !== null && K !== void 0 ? K : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = h5(
                (y, z, A) =>
                  E5({ sheet: y, Jga: z, Kga: A, aa: c, viewport: d }),
                [c, d]
              ),
              t = f5(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              v = f5(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var u;
            const x =
              (u = c === null || c === void 0 ? void 0 : c.get()) !== null &&
              u !== void 0
                ? u
                : 1;
            return c5("div", {
              className: d5("OsKKIQ", "cbOp6Q"),
              children: [
                a5("div", {
                  className: "VDFv_A",
                  children: a5(h, {
                    sheet: l.sheet,
                    container: b,
                    s8: "hidden",
                    Np: e,
                    Gu: f,
                    Ju: g,
                    w0: r,
                    aa: c,
                    viewport: d,
                    Vh: k,
                    IH: a,
                  }),
                }),
                a5("div", {
                  ref: n,
                  className: "_688KWg",
                  children: a5(eUb, { Dd: m, vMa: !1, Op: D5, scale: x }),
                }),
                a5("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: a5(i5, {
                    sheet: l.sheet,
                    Ld: x,
                    qe: x,
                    Op: D5,
                    nF: UUb,
                    fG: TUb,
                    Tpa: t,
                  }),
                }),
                a5("div", {
                  ref: p,
                  className: "zm537g",
                  children: a5(j5, {
                    sheet: l.sheet,
                    Ld: x,
                    qe: x,
                    Op: D5,
                    nF: UUb,
                    fG: TUb,
                    Tpa: v,
                  }),
                }),
              ],
            });
          }),
          E5 = ({ sheet: a, Jga: b, Kga: c, aa: d, viewport: e }) =>
            n5(() => {
              var f = e === null || e === void 0 ? void 0 : __c.fv(e.get()),
                g;
              const h =
                (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                g !== void 0
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new yu(f.left, f.top);
              const k = a.direction === "rtl";
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var vUb = class {
          constructor(a) {
            this.nD = a;
            this.h4a = __c.gU;
            this.T$a = A5((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let t = 0; t < d.length; t++) {
                var g = d[t],
                  h = this.N$a(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[t + 1];
                      if (k == null || !WH(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[t + 1];
                      if (k == null || !WH(b, c, k)) continue;
                      k = d[t - 1];
                      if (k == null || !WH(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[t - 1];
                      if (k == null || !WH(b, c, k)) continue;
                      break;
                    default:
                      throw new F(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + (h === "center" ? 0 : this.h4a);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.Ba(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.Ba(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.Ba(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new F(h);
                      }
                      for (l = d.indexOf(g); l >= 0; l--) {
                        var m = d[l],
                          n = l - 1 < 0 || WH(b, c, d[l - 1]),
                          p;
                        if ((p = m === g || WH(b, c, m))) {
                          p = h;
                          var q = k,
                            r = b.Ba(m);
                          p = p < r && r < q;
                        }
                        if (p && n) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = WH(b, c, l)))
                          (m = h), (n = k), (p = b.Ba(l)), (m = m < p && p < n);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.N$a = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Fa.ref) &&
                g.span.Yb === g.span.ad &&
                g.span.Vb === g.span.Qc
              ) {
                var h = this.nD.Aw(b, c, d);
                b = this.nD.Mpa(
                  b,
                  c,
                  d,
                  __c.Yg({ gh: void 0, textAlign: void 0 })
                );
                var { gh: k, textAlign: l } = __c.ng(__c.Xg, b);
                if (k === "overflow")
                  return __c.nIa(
                    l,
                    (e = g.ref.content.ref) === null || e === void 0
                      ? void 0
                      : e.type,
                    (f = g.ref.Fa.ref) === null || f === void 0
                      ? void 0
                      : f.type,
                    h ? () => h.Ok.type : void 0
                  );
              }
            };
          }
        };
        var WUb = g5(function (a) {
          const b = a.sheet;
          var c = a.pj;
          const d = a.Gsb,
            e = a.aa,
            f = a.xra,
            g = a.C$a;
          a = a.overflow;
          const h = $4();
          yUb(
            () =>
              m5(() => {
                const p = E(h.current);
                var q;
                const r =
                  (q = e === null || e === void 0 ? void 0 : e.get()) !==
                    null && q !== void 0
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = h5((p) => f.T$a(b, p, d, g), [f, b, d, g]);
          var l = h5(
            (p, q) => {
              var r, t;
              return (t =
                (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !==
                null && t !== void 0
                ? t
                : 0;
            },
            [k]
          );
          c = TTb(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return a5("svg", {
            ref: h,
            role: "presentation",
            className: d5("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Jk: t, Kk: v }) =>
              a5(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: u, p2: x }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var XUb = class {
          get size() {
            return this.tga;
          }
          get([a, b]) {
            return (a = this.OF.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.OF.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.OF.get(a);
            d == null && ((d = new Map()), this.OF.set(a, d));
            d.set(b, c);
            this.tga++;
            return this;
          }
          clear() {
            this.OF.clear();
            this.tga = 0;
          }
          delete([a, b]) {
            const c = this.OF.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.tga--;
            c.size === 0 && this.OF.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.OF) for (const [d, e] of c) a([b, d], e);
          }
          *[Symbol.iterator]() {
            for (const [a, b] of this.OF)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.tga = 0;
            this.OF = new Map();
          }
        };
        var G5 = class extends s5 {
          render() {
            const { Aaa: a, ...b } = this.props,
              c = this.props.sheet;
            return c5("div", {
              ref: this.EVa,
              className: d5(
                "ZTz_iA",
                c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
              ),
              children: [
                (a === null || a === void 0 ? void 0 : a.bGa) &&
                  a5(F5, {
                    ...b,
                    sheet: c,
                    range: a.bGa.range,
                    yw: !0,
                    zw: !0,
                    className: "_0C8M3w",
                  }),
                (a === null || a === void 0 ? void 0 : a.kZa) &&
                  a5(F5, {
                    ...b,
                    sheet: c,
                    range: a.kZa.range,
                    yw: !1,
                    zw: !0,
                    className: "_7n44yg",
                  }),
                (a === null || a === void 0 ? void 0 : a.yMa) &&
                  a5(F5, {
                    ...b,
                    sheet: c,
                    range: a.yMa.range,
                    yw: !0,
                    zw: !1,
                    className: "fF5r6w",
                  }),
                (a === null || a === void 0 ? void 0 : a.tYa) &&
                  a5(F5, {
                    ...b,
                    sheet: c,
                    range: a.tYa.range,
                    yw: !1,
                    zw: !1,
                    className: "llILYw",
                  }),
              ],
            });
          }
          componentDidMount() {
            const a = m5(() => {
              var b = this.props,
                c = b.aa;
              b = b.sheet;
              const d = this.EVa.current;
              d &&
                ((c = c ? c.get() : 1),
                (d.style.width = `${b.width * c}px`),
                (d.style.height = `${b.height * c}px`));
            });
            __c.wc(this, [a]);
          }
          constructor(...a) {
            super(...a);
            this.EVa = Kx();
          }
        };
        G5 = y5([Jc], G5);
        var F5 = class extends s5 {
          static A(a) {
            Q(a, { Vxa: n5, bounds: n5 });
          }
          get Vxa() {
            const a = this.props.viewport,
              b = this.props.yw,
              c = this.props.zw;
            return a == null || (!b && !c)
              ? a
              : n5(() => {
                  const d = __c.fv(a.get());
                  return Yu({
                    top: c ? 0 : d.top,
                    left: b ? 0 : d.left,
                    width: d.width,
                    height: d.height,
                  });
                });
          }
          render() {
            const a = this.props.eO,
              b = this.props.sheet,
              c = this.props.container,
              d = this.props.range,
              e = this.props.IH,
              f = this.props.yw,
              g = this.props.zw;
            return c5("div", {
              ref: this.iva,
              className: d5("i0YQww", this.props.className),
              children: [
                a5("div", {
                  ref: this.ZRa,
                  className: "vUKoKg",
                  children: a5("div", {
                    ref: this.$Ra,
                    children: a5(H5, {
                      eO: a,
                      sheet: b,
                      container: c,
                      bounds: d,
                      Np: this.props.Np,
                      OD: this.props.OD,
                      Vh: this.props.Vh,
                      OZ: this.props.OZ,
                      aa: this.props.aa,
                      pj: this.pj,
                      O6: this.O6,
                      HS: this.HS,
                    }),
                  }),
                }),
                a5(this.mja, {}),
                e && a5(e, { sheet: b, range: d, yw: f, zw: g }),
              ],
            });
          }
          componentDidMount() {
            const a = m5(() => {
                var g = this.props,
                  h = g.aa,
                  k = g.sheet;
                const l = g.range;
                var m = this.iva.current;
                const n = this.ZRa.current;
                g = this.$Ra.current;
                h = h ? h.get() : 1;
                const p = l ? k.Ba(l.Qc) + l.Qc.width - k.Ba(l.Vb) : k.width,
                  q = l ? k.Ca(l.ad) + l.ad.height - k.Ca(l.Yb) : k.height;
                m &&
                  ((m.style.width = `${p * h}px`),
                  (m.style.height = `${q * h}px`));
                n &&
                  ((n.style.width = `${p * h}px`),
                  (n.style.height = `${q * h}px`));
                m = k.direction === "rtl";
                m = l ? k.Ba(l.Vb) * h * (m ? 1 : -1) : 0;
                k = l ? -k.Ca(l.Yb) * h : 0;
                g && (g.style.transform = `translate(${m}px, ${k}px)`);
              }),
              b = this.props.sheet;
            var c = this.props.w0;
            const d = this.props.yw,
              e = this.props.zw,
              f =
                d || e
                  ? c === null || c === void 0
                    ? void 0
                    : c(b, d, e)
                  : void 0;
            c = m5(() => {
              const g = this.iva.current;
              if (g != null) {
                var h = d || e ? "sticky" : "relative",
                  k = e ? "0px" : "unset",
                  l = d ? "0px" : "unset",
                  m = d ? "0px" : "unset",
                  n = b.direction === "rtl";
                if (f == null)
                  (g.style.position = h),
                    (g.style.top = k),
                    (g.style.left = n ? "unset" : l),
                    (g.style.right = n ? m : "unset");
                else {
                  const u = f.get();
                  var p;
                  g.style.position =
                    (p = u.position) !== null && p !== void 0 ? p : h;
                  var q;
                  g.style.top = (q = u.top) !== null && q !== void 0 ? q : k;
                  var r;
                  g.style.left = n
                    ? "unset"
                    : (r = u.left) !== null && r !== void 0
                    ? r
                    : l;
                  var t;
                  g.style.right = n
                    ? (t = u.right) !== null && t !== void 0
                      ? t
                      : m
                    : "unset";
                  var v;
                  g.style.transform =
                    (v = u.transform) !== null && v !== void 0 ? v : "unset";
                }
              }
            });
            __c.wc(this, [a, c]);
          }
          get bounds() {
            const a = this.props.sheet,
              b = this.props.range;
            if (a.layout.cols.empty || a.layout.rows.empty)
              return { Vb: void 0, Qc: void 0, Yb: void 0, ad: void 0 };
            var c, d, e, f;
            return {
              Vb:
                (c = b === null || b === void 0 ? void 0 : b.Vb) !== null &&
                c !== void 0
                  ? c
                  : a.layout.cols.first(),
              Qc:
                (d = b === null || b === void 0 ? void 0 : b.Qc) !== null &&
                d !== void 0
                  ? d
                  : a.layout.cols.last(),
              Yb:
                (e = b === null || b === void 0 ? void 0 : b.Yb) !== null &&
                e !== void 0
                  ? e
                  : a.layout.rows.first(),
              ad:
                (f = b === null || b === void 0 ? void 0 : b.ad) !== null &&
                f !== void 0
                  ? f
                  : a.layout.rows.last(),
            };
          }
          constructor(...a) {
            super(...a);
            this.iva = (F5.A(this), Kx());
            this.ZRa = Kx();
            this.$Ra = Kx();
            this.HS = new YUb();
            this.Hsb = n5(
              () =>
                [...this.pj.get().keys()].sort((b, c) =>
                  this.props.sheet.layout.rows.hf(b, c)
                ),
              { equals: __c.cs() }
            );
            this.Fsb = n5(
              () =>
                [...this.O6.get().keys()].sort((b, c) =>
                  this.props.sheet.layout.cols.hf(b, c)
                ),
              { equals: __c.cs() }
            );
            this.mja = g5(() =>
              a5(this.props.W0a, {
                pj: this.Hsb,
                Gsb: this.Fsb,
                C$a: this.HS.K$a,
                range: this.props.range,
              })
            );
            this.pj = n5(
              () => {
                var b;
                const c = this.props.sheet;
                var d = this.props.aa,
                  e =
                    (b = this.Vxa) === null || b === void 0 ? void 0 : b.get();
                if (e && (e.height <= 0 || e.width <= 0)) return new Map();
                b = this.bounds;
                d = d.get();
                var f = 50 * d;
                const g = e ? e.tl.y - f : b.Yb ? c.Ca(b.Yb) : 0;
                e = e ? e.br.y + f : b.ad ? c.Ca(b.ad) + b.ad.height : 0;
                f = new Map();
                for (
                  let h = b.Yb;
                  h != null && b.ad != null && c.layout.rows.hf(h, b.ad) <= 0;
                  h = c.layout.rows.next(h)
                ) {
                  const k = c.Ca(h);
                  if (!(k + h.height < g)) {
                    if (k > e) break;
                    f.set(h, k * d);
                  }
                }
                return f;
              },
              { equals: w5.shallow }
            );
            this.O6 = n5(
              () => {
                var b;
                const c = this.props.sheet;
                var d = this.props.aa,
                  e =
                    (b = this.Vxa) === null || b === void 0 ? void 0 : b.get();
                if (e && (e.height <= 0 || e.width <= 0)) return new Map();
                b = this.bounds;
                d = d.get();
                var f = 50 * d;
                const g = e ? e.tl.x - f : b.Vb ? c.Ba(b.Vb) : 0;
                e = e ? e.br.x + f : b.Qc ? c.Ba(b.Qc) + b.Qc.width : 0;
                f = new Map();
                for (
                  let h = b.Vb;
                  h != null && b.Qc != null && c.layout.cols.hf(h, b.Qc) <= 0;
                  h = c.layout.cols.next(h)
                ) {
                  const k = c.Ba(h);
                  if (!(k + h.width < g)) {
                    if (k > e) break;
                    f.set(h, k * d);
                  }
                }
                return f;
              },
              { equals: w5.shallow }
            );
          }
        };
        F5 = y5([Jc], F5);
        var YUb = class {
            constructor() {
              this.cells = new XUb();
              this.rwa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = x5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.K$a = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = x5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return (c = d.get()) === null || c === void 0 ? void 0 : c.RHa;
              };
            }
          },
          H5 = class extends s5 {
            static A(a) {
              Q(a, { KL: x5.shallow, kr: n5, LFa: v5, J9: v5.bound });
            }
            get kr() {
              var a;
              const b =
                (a = this.props.Np) === null || a === void 0 ? void 0 : a.get();
              if (b != null && b.length !== 0) return new __c.pE(b);
            }
            render() {
              var a;
              return c5("div", {
                ref: EUb(
                  this.ae,
                  (a = this.kr) === null || a === void 0 ? void 0 : a.Nm
                ),
                children: [
                  a5("div", { ref: this.Yla, className: "_5YlOqQ" }),
                  a5("div", { ref: this.$la, className: "_XCmKw" }),
                  this.KL.map((b) => b.Ykb),
                ],
              });
            }
            componentDidMount() {
              const a = o5(
                  () => [
                    this.props.sheet,
                    this.props.O6.get(),
                    this.props.pj.get(),
                  ],
                  ([d, e, f], g) => {
                    [g] = g || [];
                    d !== g &&
                      ((d = E(this.Yla.current)),
                      (g = E(this.$la.current)),
                      (d.innerHTML = ""),
                      (g.innerHTML = ""),
                      (this.hCa.length = 0),
                      (this.KL.length = 0));
                    this.LFa(e, f);
                  },
                  { fireImmediately: !0 }
                ),
                b = m5(() => {
                  var d = this.props,
                    e = d.aa;
                  d = d.sheet;
                  const f = this.ae.current;
                  f &&
                    ((e = e ? e.get() : 1),
                    (f.style.width = `${d.width * e}px`),
                    (f.style.height = `${d.height * e}px`));
                }),
                c = this.KL.map((d) => uUb(d));
              __c.wc(this, [b, a, ...c]);
            }
            LFa(a, b) {
              const c = E(this.Yla.current),
                d = E(this.$la.current),
                e = [],
                f = new Map();
              for (const g of this.hCa)
                b.has(g.ya) ? f.set(g.ya, g) : e.push(g);
              for (const [g, h] of b)
                (b = f.get(g) || e.pop()),
                  b ||
                    ((b = new ZUb(this.J9, g)),
                    c.appendChild(b.Q8),
                    d.appendChild(b.T8),
                    this.hCa.push(b)),
                  b.update(h, g, a);
              for (const g of e) g.hide();
            }
            J9(a, b) {
              const c = this.props.OZ,
                d = this.props.sheet,
                e = this.props.container,
                f = this.props.HS;
              a = new $Ub(
                this.props.eO,
                this.props.OD,
                this.props.Vh,
                c(a, b),
                d,
                a,
                b,
                e,
                f.rwa,
                this.Qaa,
                this.Paa
              );
              __c.wc(this, uUb(a));
              this.KL.push(a);
              return a;
            }
            constructor(...a) {
              super(...a);
              this.ae = (H5.A(this), Kx());
              this.Yla = Kx();
              this.$la = Kx();
              this.hCa = [];
              this.KL = [];
              this.Qaa = A5((b) => {
                const c = this.props.pj.get();
                return b === "first"
                  ? c.keys().next().value
                  : [...c.keys()].pop();
              });
              this.Paa = A5((b) => {
                const c = this.props.O6.get();
                return b === "first"
                  ? c.keys().next().value
                  : [...c.keys()].pop();
              });
            }
          };
        H5 = y5([Jc], H5);
        var ZUb = class {
            static A(a) {
              Q(a, { update: v5 });
            }
            update(a, b, c) {
              [this.Q8, this.T8].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.ya = b;
              for (const [d] of c)
                (c = this.KL.get(d)),
                  c ||
                    ((c = this.J9(d, b)),
                    this.KL.set(d, c),
                    this.Q8.appendChild(c.P8),
                    this.T8.appendChild(c.qS)),
                  c.update(b);
            }
            hide() {
              [this.Q8, this.T8].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.J9 = a;
              this.ya = b;
              this.Q8 = (ZUb.A(this), document.createElement("div"));
              this.T8 = document.createElement("div");
              this.KL = new Map();
            }
          },
          $Ub = class {
            static A(a) {
              Q(a, {
                F9: x5.ref,
                ya: x5.ref,
                vqa: n5,
                update: v5,
                $t: n5,
                attrs: n5.struct,
                Zra: n5,
                ys: n5,
                renderer: n5,
                RHa: n5.struct,
              });
            }
            get vqa() {
              if (!__c.ex("285688d5", !1)) return !1;
              const a = this.$t;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.eO(a.content.ref.value);
            }
            update(a) {
              a !== this.ya &&
                ((this.ya = a),
                (this.EA.ya = a),
                this.Xna && this.Xna(),
                (this.Xna = this.rwa(this.ya, this.col, this)));
            }
            get Ykb() {
              return this.F9;
            }
            get $t() {
              const a = this.sheet.layout.cells.get(this.ya, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.EA.attrs;
              return {
                gh: a === null || a === void 0 ? void 0 : a.gh,
                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                direction: a === null || a === void 0 ? void 0 : a.direction,
                link: a === null || a === void 0 ? void 0 : a.link,
              };
            }
            get Zra() {
              var a = this.EA.span;
              if (!a) return !1;
              if (a.Yb === a.ad && a.Vb === a.Qc) return !0;
              var b = this.Qaa("first");
              const c = this.Qaa("last"),
                d = this.Paa("first"),
                e = this.Paa("last");
              if (!(b && c && d && e)) return !1;
              b =
                this.sheet.layout.rows.hf(a.Yb, b) >= 0 &&
                this.sheet.layout.rows.hf(a.Yb, c) <= 0
                  ? a.Yb
                  : b;
              a =
                this.sheet.layout.cols.hf(a.Vb, d) >= 0 &&
                this.sheet.layout.cols.hf(a.Vb, e) <= 0
                  ? a.Vb
                  : d;
              return b === this.ya && a === this.col;
            }
            get ys() {
              const a = this.sheet,
                b = this.ya,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, ya: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.lkb.Kd(c, b);
                case "sheet-item":
                  return this.container.Uxa.Kd(c, b);
                case "sheet-element":
                  return this.container.Aob.Kd(c, b);
                default:
                  throw new F(this.container);
              }
            }
            get renderer() {
              const a = this.$t;
              if (a && this.Zra && (a.content.ref || a.Fa.ref))
                return this.OD({
                  context: { container: this.ys, attrs: this.attrs },
                  cq: this.Yta,
                  Vh: this.Vh,
                });
            }
            get RHa() {
              this.SHa.reportObserved();
              var a = BUb(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.S3 : this.EE),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              var n, p, q, r, t, v;
              this.eO = a;
              this.OD = b;
              this.EA = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.rwa = k;
              this.Qaa = l;
              this.Paa = m;
              this.P8 = ($Ub.A(this), document.createElement("div"));
              this.qS = document.createElement("div");
              this.yE = document.createElement("div");
              this.EE = document.createElement("div");
              this.S3 = document.createElement("div");
              this.SHa = AUb("content size atom");
              this.Yta = v5(() => this.SHa.reportChanged());
              this.ya = g;
              this.P8.className = "_2JFriw";
              this.qS.className = "imy9ug";
              this.yE.className = d5("pDMp7w", {
                _0yZ6Qg:
                  ((p = this.$t) === null || p === void 0
                    ? void 0
                    : (n = p.content.ref) === null || n === void 0
                    ? void 0
                    : n.type) !== "text3",
                qhF5uA:
                  ((r = this.$t) === null || r === void 0
                    ? void 0
                    : (q = r.content.ref) === null || q === void 0
                    ? void 0
                    : q.type) !== "text3" &&
                  ((v = this.$t) === null || v === void 0
                    ? void 0
                    : (t = v.content.ref) === null || t === void 0
                    ? void 0
                    : t.type) !== "text2",
                qxD1GA: this.vqa,
              });
              this.EE.className = "_30B9pw";
              this.yE.appendChild(this.EE);
              this.qS.appendChild(this.yE);
              this.S3.className = "G7zH2w";
              this.Xna = k(this.ya, this.col, this);
              this.Vh = (u) => a5(c, { ...u, cq: this.Yta });
            }
          };
        var p5 = class extends s5 {
          static A(a) {
            Q(a, { Aaa: n5 });
          }
          render() {
            const {
              eO: a,
              sheet: b,
              container: c,
              Np: d,
              w0: e,
              OD: f,
              Ae: g,
              Vh: h,
              viewport: k,
              IH: l,
              aZa: m = !1,
            } = this.props;
            if (!b.layout.cols.empty && !b.layout.rows.empty)
              return a5("div", {
                className: d5(
                  "SNkrHw",
                  b.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                  { RaA0Nw: m }
                ),
                ...g,
                children: a5(G5, {
                  eO: a,
                  OD: f,
                  Vh: h,
                  W0a: this.mja,
                  OZ: this.OZ,
                  sheet: b,
                  container: c,
                  Np: d,
                  w0: e,
                  aa: this.aa,
                  viewport: k,
                  IH: l,
                  Aaa: this.Aaa,
                }),
              });
          }
          get Aaa() {
            var a = this.props.sheet;
            const b = {},
              c = a.view.freeze.bW ? a.layout.le.get(a.view.freeze.bW) : void 0,
              d = a.view.freeze.lI ? a.layout.Qd.get(a.view.freeze.lI) : void 0,
              e = a.layout.rows.first(),
              f = a.layout.rows.last(),
              g = a.layout.cols.first(),
              h = a.layout.cols.last();
            if (e != null && f != null && g != null && h != null) {
              var k = d ? a.layout.cols.next(d) : g;
              a = c ? a.layout.rows.next(c) : e;
              c && d && (b.bGa = { range: { Vb: g, Yb: e, Qc: d, ad: c } });
              c && k && (b.kZa = { range: { Vb: k, Yb: e, Qc: h, ad: c } });
              d && a && (b.yMa = { range: { Vb: g, Yb: a, Qc: d, ad: f } });
              a && k && (b.tYa = { range: { Vb: k, Yb: a, Qc: h, ad: f } });
              return b;
            }
          }
          get aa() {
            return this.props.aa ? this.props.aa : n5(() => 1);
          }
          constructor(...a) {
            super(...a);
            this.mja =
              (p5.A(this),
              g5((b) => {
                const {
                  sheet: c,
                  xra: d,
                  aa: e,
                  s8: f = "hidden",
                } = this.props;
                return a5(C5, {
                  sheet: c,
                  range: b.range,
                  aa: e,
                  children: a5(WUb, {
                    ...b,
                    sheet: c,
                    aa: this.aa,
                    xra: d,
                    overflow: f,
                  }),
                });
              }));
            this.OZ = (b, c) =>
              new __c.GIa(
                this.props.nD,
                this.props.xA,
                this.props.sheet,
                b,
                c,
                this.aa,
                this.Gu,
                this.Ju
              );
            this.Gu = (b, c) => {
              var d, e;
              return (d = (e = this.props).Gu) === null || d === void 0
                ? void 0
                : d.call(e, this.props.sheet, b, c);
            };
            this.Ju = (b, c) => {
              var d, e;
              return (d = (e = this.props).Ju) === null || d === void 0
                ? void 0
                : d.call(e, this.props.sheet, b, c);
            };
          }
        };
        p5 = y5([Jc], p5);
        __c.NIa = {
          lcb: function (a) {
            const b = a.zo,
              c = a.Pe,
              d = a.xd,
              e = a.Lm,
              f = a.nD,
              g = a.xA,
              h = a.TX;
            bUb({ wA: a.wA, If: a.If, bqb: a.CP, yb: a.yb });
            const k = wUb({ OD: h, nD: f, xA: g, Ao: void 0 });
            b.Fja = rUb({ Eq: k });
            c.nja = hUb({ Eq: k });
            ({ $0a: a } = oUb({ Eq: k, rf: e(), CVa: new PUb() }));
            d.Mq.Eja = a;
            const { g_a: l, h_a: m, f_a: n } = gUb();
            return {
              XDa: g5((p) =>
                a5(HUb, {
                  ...p,
                  container: void 0,
                  Eq: k,
                  Z0a: l,
                  a1a: m,
                  X0a: n,
                  Vh: IUb,
                })
              ),
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/cd6e363e98d6539c.js.map
