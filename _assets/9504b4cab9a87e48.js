(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [26489],
  {
    /***/ 59534: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var KAb = function (a) {
            var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
            try {
              const c = __c.wt(a),
                d = c instanceof __c.xt ? c.ds() : c;
              return __c.ms(b, (e) => {
                e = __c.wt(e);
                e = e instanceof __c.xt ? __c.OH(e, d) : e;
                return Math.abs(__c.Pt(e, d));
              });
            } catch (c) {
              if (
                c instanceof Error &&
                c.message === `unrecognized color: ${b[0]}`
              )
                return b[0];
              throw c;
            }
          },
          LAb = function (a) {
            return a
              .trim()
              .split(/\s+/, 2)
              .map((b) => __c.Ns(b)[0])
              .join("");
          },
          OAb = function (a = "") {
            a = MAb(a);
            a = Math.floor(a() * NAb.length);
            return NAb[a];
          },
          PAb = __webpack_require__(875604),
          QAb = PAb.memo,
          RAb = PAb.useId;
        var MAb = __webpack_require__(503216);
        var SAb = __webpack_require__(443763),
          NY = SAb.jsx,
          TAb = SAb.jsxs;
        var UAb = __webpack_require__,
          VAb = UAb(993864),
          OY = UAb.n_x(VAb)();
        __c.WAb = {
          xxsmall: 2,
          xsmall: 3,
          small: 4,
          medium: 5,
          large: 6,
          xlarge: 8,
          xxlarge: 10,
          xxxlarge: 20,
        };
        var NAb = [
          "rgb(0, 126, 182)",
          "rgb(248, 72, 86)",
          "rgb(251, 190, 40)",
          "rgb(68, 133, 25)",
          "rgb(125, 42, 232)",
        ].map((a) => {
          try {
            return __c.yt(__c.rt(a));
          } catch (b) {
            return "#8e8e8e";
          }
        });
        var XAb = QAb((a) => {
          const {
            name: b,
            borderColor: c,
            backgroundColor: d,
            eS: e,
            role: f,
            ariaLabel: g,
            className: h,
            style: k,
            shape: l = "circle",
            ...m
          } = a;
          d
            ? ((a = __c.wt(d)),
              (a = a instanceof __c.xt ? __c.zt(a) : __c.yt(a)))
            : (a = e ? OAb(e) : "#8e8e8e");
          var n = RAb();
          let p;
          switch (l) {
            case "circle":
              p = NY("defs", {
                children: NY("clipPath", {
                  id: n,
                  children: NY("circle", {
                    id: `${n}-path`,
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                  }),
                }),
              });
              break;
            case "square":
              p = NY("defs", {
                children: NY("clipPath", {
                  id: n,
                  children: NY("rect", {
                    id: `${n}-path`,
                    width: "100%",
                    height: "100%",
                  }),
                }),
              });
              break;
            default:
              throw new __c.F(l);
          }
          switch (l) {
            case "circle":
              n = NY("circle", {
                cx: "50%",
                cy: "50%",
                fill: a,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${n})`,
                stroke: c,
                className: OY("yCT70Q", { _2LVP_g: c }),
              });
              break;
            case "square":
              n = NY("rect", {
                width: "100%",
                height: "100%",
                fill: a,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${n})`,
                stroke: c,
                className: OY("cUFFRA", { _2LVP_g: c }),
              });
              break;
            default:
              throw new __c.F(l);
          }
          return NY("span", {
            role: f,
            "aria-label": g,
            className: OY("VaW8_A", { cUFFRA: l === "square" }),
            ...m,
            children: TAb("svg", {
              className: h,
              style: k,
              children: [
                p,
                n,
                NY("text", {
                  x: "50%",
                  y: "50%",
                  "aria-hidden": "true",
                  textAnchor: "middle",
                  fill: KAb(a),
                  fontWeight: "500",
                  fontSize: "50%",
                  dominantBaseline: "central",
                  letterSpacing: "0.01rem",
                  dy: "-0.04em",
                  children: LAb(b).toUpperCase(),
                }),
              ],
            }),
          });
        });
        var YAb =
          __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
        var ZAb = ({
          borderColor: a,
          tSa: b,
          ariaLabel: c,
          className: d,
          style: e,
          role: f,
          ...g
        }) =>
          NY("span", {
            className: OY(d, { JwH6AA: a, QJpRHw: !a }),
            style: {
              backgroundImage: `url(${b})`,
              borderColor: a && `${a}`,
              ...e,
            },
            role: f,
            "aria-label": f === "img" ? c : void 0,
            ...g,
          });
        __c.$Ab = ({
          name: a,
          E2a: b,
          ariaLabel: c,
          eS: d,
          backgroundColor: e,
          borderColor: f,
          Lr: g,
          className: h,
          style: k,
          shape: l = "circle",
          ...m
        }) => {
          h = OY("n8XGZg", "f4qJng fs-hide", h, { P3N3Pw: l === "square" });
          b = b || "presentation";
          return g
            ? NY(ZAb, {
                className: h,
                style: k,
                borderColor: f,
                tSa: g,
                ariaLabel: c,
                role: b,
                ...m,
              })
            : a
            ? NY(XAb, {
                className: h,
                style: k,
                borderColor: f,
                name: a,
                shape: l,
                eS: d,
                backgroundColor: e,
                role: b,
                ariaLabel: c,
                ...m,
              })
            : NY(ZAb, {
                className: h,
                style: k,
                borderColor: f,
                tSa: YAb,
                ariaLabel: c,
                role: b,
                ...m,
              });
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/9504b4cab9a87e48.js.map
