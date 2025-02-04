/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Sr = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(d, h) {
        var T = new pe.Bare();
        return T.init(d, h);
      }
      function n(d) {
        return d.replace(/[A-Z]/g, function (h) {
          return "-" + h.toLowerCase();
        });
      }
      function r(d) {
        var h = parseInt(d.slice(1), 16),
          T = (h >> 16) & 255,
          R = (h >> 8) & 255,
          F = 255 & h;
        return [T, R, F];
      }
      function a(d, h, T) {
        return (
          "#" + ((1 << 24) | (d << 16) | (h << 8) | T).toString(16).slice(1)
        );
      }
      function i() {}
      function o(d, h) {
        l("Type warning: Expected: [" + d + "] Got: [" + typeof h + "] " + h);
      }
      function s(d, h, T) {
        l("Units do not match [" + d + "]: " + h + ", " + T);
      }
      function u(d, h, T) {
        if ((h !== void 0 && (T = h), d === void 0)) return T;
        var R = T;
        return (
          En.test(d) || !Bt.test(d)
            ? (R = parseInt(d, 10))
            : Bt.test(d) && (R = 1e3 * parseFloat(d)),
          0 > R && (R = 0),
          R === R ? R : T
        );
      }
      function l(d) {
        z.debug && window && window.console.warn(d);
      }
      function y(d) {
        for (var h = -1, T = d ? d.length : 0, R = []; ++h < T; ) {
          var F = d[h];
          F && R.push(F);
        }
        return R;
      }
      var g = (function (d, h, T) {
          function R(ee) {
            return typeof ee == "object";
          }
          function F(ee) {
            return typeof ee == "function";
          }
          function M() {}
          function j(ee, Q) {
            function U() {
              var me = new te();
              return F(me.init) && me.init.apply(me, arguments), me;
            }
            function te() {}
            Q === T && ((Q = ee), (ee = Object)), (U.Bare = te);
            var re,
              ge = (M[d] = ee[d]),
              Re = (te[d] = U[d] = new M());
            return (
              (Re.constructor = U),
              (U.mixin = function (me) {
                return (te[d] = U[d] = j(U, me)[d]), U;
              }),
              (U.open = function (me) {
                if (
                  ((re = {}),
                  F(me) ? (re = me.call(U, Re, ge, U, ee)) : R(me) && (re = me),
                  R(re))
                )
                  for (var Xt in re) h.call(re, Xt) && (Re[Xt] = re[Xt]);
                return F(Re.init) || (Re.init = ee), U;
              }),
              U.open(Q)
            );
          }
          return j;
        })("prototype", {}.hasOwnProperty),
        p = {
          ease: [
            "ease",
            function (d, h, T, R) {
              var F = (d /= R) * d,
                M = F * d;
              return (
                h +
                T * (-2.75 * M * F + 11 * F * F + -15.5 * M + 8 * F + 0.25 * d)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (d, h, T, R) {
              var F = (d /= R) * d,
                M = F * d;
              return h + T * (-1 * M * F + 3 * F * F + -3 * M + 2 * F);
            },
          ],
          "ease-out": [
            "ease-out",
            function (d, h, T, R) {
              var F = (d /= R) * d,
                M = F * d;
              return (
                h +
                T * (0.3 * M * F + -1.6 * F * F + 2.2 * M + -1.8 * F + 1.9 * d)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (d, h, T, R) {
              var F = (d /= R) * d,
                M = F * d;
              return h + T * (2 * M * F + -5 * F * F + 2 * M + 2 * F);
            },
          ],
          linear: [
            "linear",
            function (d, h, T, R) {
              return (T * d) / R + h;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (d, h, T, R) {
              return T * (d /= R) * d + h;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (d, h, T, R) {
              return -T * (d /= R) * (d - 2) + h;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (d, h, T, R) {
              return (d /= R / 2) < 1
                ? (T / 2) * d * d + h
                : (-T / 2) * (--d * (d - 2) - 1) + h;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (d, h, T, R) {
              return T * (d /= R) * d * d + h;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (d, h, T, R) {
              return T * ((d = d / R - 1) * d * d + 1) + h;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (d, h, T, R) {
              return (d /= R / 2) < 1
                ? (T / 2) * d * d * d + h
                : (T / 2) * ((d -= 2) * d * d + 2) + h;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (d, h, T, R) {
              return T * (d /= R) * d * d * d + h;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (d, h, T, R) {
              return -T * ((d = d / R - 1) * d * d * d - 1) + h;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (d, h, T, R) {
              return (d /= R / 2) < 1
                ? (T / 2) * d * d * d * d + h
                : (-T / 2) * ((d -= 2) * d * d * d - 2) + h;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (d, h, T, R) {
              return T * (d /= R) * d * d * d * d + h;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (d, h, T, R) {
              return T * ((d = d / R - 1) * d * d * d * d + 1) + h;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (d, h, T, R) {
              return (d /= R / 2) < 1
                ? (T / 2) * d * d * d * d * d + h
                : (T / 2) * ((d -= 2) * d * d * d * d + 2) + h;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (d, h, T, R) {
              return -T * Math.cos((d / R) * (Math.PI / 2)) + T + h;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (d, h, T, R) {
              return T * Math.sin((d / R) * (Math.PI / 2)) + h;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (d, h, T, R) {
              return (-T / 2) * (Math.cos((Math.PI * d) / R) - 1) + h;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (d, h, T, R) {
              return d === 0 ? h : T * Math.pow(2, 10 * (d / R - 1)) + h;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (d, h, T, R) {
              return d === R
                ? h + T
                : T * (-Math.pow(2, (-10 * d) / R) + 1) + h;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (d, h, T, R) {
              return d === 0
                ? h
                : d === R
                ? h + T
                : (d /= R / 2) < 1
                ? (T / 2) * Math.pow(2, 10 * (d - 1)) + h
                : (T / 2) * (-Math.pow(2, -10 * --d) + 2) + h;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (d, h, T, R) {
              return -T * (Math.sqrt(1 - (d /= R) * d) - 1) + h;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (d, h, T, R) {
              return T * Math.sqrt(1 - (d = d / R - 1) * d) + h;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (d, h, T, R) {
              return (d /= R / 2) < 1
                ? (-T / 2) * (Math.sqrt(1 - d * d) - 1) + h
                : (T / 2) * (Math.sqrt(1 - (d -= 2) * d) + 1) + h;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (d, h, T, R, F) {
              return (
                F === void 0 && (F = 1.70158),
                T * (d /= R) * d * ((F + 1) * d - F) + h
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (d, h, T, R, F) {
              return (
                F === void 0 && (F = 1.70158),
                T * ((d = d / R - 1) * d * ((F + 1) * d + F) + 1) + h
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (d, h, T, R, F) {
              return (
                F === void 0 && (F = 1.70158),
                (d /= R / 2) < 1
                  ? (T / 2) * d * d * (((F *= 1.525) + 1) * d - F) + h
                  : (T / 2) *
                      ((d -= 2) * d * (((F *= 1.525) + 1) * d + F) + 2) +
                    h
              );
            },
          ],
        },
        I = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        _ = document,
        m = window,
        O = "bkwld-tram",
        v = /[\-\.0-9]/g,
        S = /[A-Z]/,
        A = "number",
        N = /^(rgb|#)/,
        x = /(em|cm|mm|in|pt|pc|px)$/,
        w = /(em|cm|mm|in|pt|pc|px|%)$/,
        B = /(deg|rad|turn)$/,
        X = "unitless",
        H = /(all|none) 0s ease 0s/,
        W = /^(width|height)$/,
        V = " ",
        b = _.createElement("a"),
        E = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        q = function (d) {
          if (d in b.style) return { dom: d, css: d };
          var h,
            T,
            R = "",
            F = d.split("-");
          for (h = 0; h < F.length; h++)
            R += F[h].charAt(0).toUpperCase() + F[h].slice(1);
          for (h = 0; h < E.length; h++)
            if (((T = E[h] + R), T in b.style))
              return { dom: T, css: L[h] + d };
        },
        k = (t.support = {
          bind: Function.prototype.bind,
          transform: q("transform"),
          transition: q("transition"),
          backface: q("backface-visibility"),
          timing: q("transition-timing-function"),
        });
      if (k.transition) {
        var $ = k.timing.dom;
        if (((b.style[$] = p["ease-in-back"][0]), !b.style[$]))
          for (var Y in I) p[Y][0] = I[Y];
      }
      var ie = (t.frame = (function () {
          var d =
            m.requestAnimationFrame ||
            m.webkitRequestAnimationFrame ||
            m.mozRequestAnimationFrame ||
            m.oRequestAnimationFrame ||
            m.msRequestAnimationFrame;
          return d && k.bind
            ? d.bind(m)
            : function (h) {
                m.setTimeout(h, 16);
              };
        })()),
        le = (t.now = (function () {
          var d = m.performance,
            h = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
          return h && k.bind
            ? h.bind(d)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        ve = g(function (d) {
          function h(J, ae) {
            var de = y(("" + J).split(V)),
              oe = de[0];
            ae = ae || {};
            var he = Qe[oe];
            if (!he) return l("Unsupported property: " + oe);
            if (!ae.weak || !this.props[oe]) {
              var Pe = he[0],
                be = this.props[oe];
              return (
                be || (be = this.props[oe] = new Pe.Bare()),
                be.init(this.$el, de, he, ae),
                be
              );
            }
          }
          function T(J, ae, de) {
            if (J) {
              var oe = typeof J;
              if (
                (ae ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                oe == "number" && ae)
              )
                return (
                  (this.timer = new K({
                    duration: J,
                    context: this,
                    complete: M,
                  })),
                  void (this.active = !0)
                );
              if (oe == "string" && ae) {
                switch (J) {
                  case "hide":
                    U.call(this);
                    break;
                  case "stop":
                    j.call(this);
                    break;
                  case "redraw":
                    te.call(this);
                    break;
                  default:
                    h.call(this, J, de && de[1]);
                }
                return M.call(this);
              }
              if (oe == "function") return void J.call(this, this);
              if (oe == "object") {
                var he = 0;
                Re.call(
                  this,
                  J,
                  function (ye, l0) {
                    ye.span > he && (he = ye.span), ye.stop(), ye.animate(l0);
                  },
                  function (ye) {
                    "wait" in ye && (he = u(ye.wait, 0));
                  }
                ),
                  ge.call(this),
                  he > 0 &&
                    ((this.timer = new K({ duration: he, context: this })),
                    (this.active = !0),
                    ae && (this.timer.complete = M));
                var Pe = this,
                  be = !1,
                  yn = {};
                ie(function () {
                  Re.call(Pe, J, function (ye) {
                    ye.active && ((be = !0), (yn[ye.name] = ye.nextStyle));
                  }),
                    be && Pe.$el.css(yn);
                });
              }
            }
          }
          function R(J) {
            (J = u(J, 0)),
              this.active
                ? this.queue.push({ options: J })
                : ((this.timer = new K({
                    duration: J,
                    context: this,
                    complete: M,
                  })),
                  (this.active = !0));
          }
          function F(J) {
            return this.active
              ? (this.queue.push({ options: J, args: arguments }),
                void (this.timer.complete = M))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function M() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var J = this.queue.shift();
              T.call(this, J.options, !0, J.args);
            }
          }
          function j(J) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ae;
            typeof J == "string"
              ? ((ae = {}), (ae[J] = 1))
              : (ae = typeof J == "object" && J != null ? J : this.props),
              Re.call(this, ae, me),
              ge.call(this);
          }
          function ee(J) {
            j.call(this, J), Re.call(this, J, Xt, u0);
          }
          function Q(J) {
            typeof J != "string" && (J = "block"), (this.el.style.display = J);
          }
          function U() {
            j.call(this), (this.el.style.display = "none");
          }
          function te() {
            this.el.offsetHeight;
          }
          function re() {
            j.call(this), e.removeData(this.el, O), (this.$el = this.el = null);
          }
          function ge() {
            var J,
              ae,
              de = [];
            this.upstream && de.push(this.upstream);
            for (J in this.props)
              (ae = this.props[J]), ae.active && de.push(ae.string);
            (de = de.join(",")),
              this.style !== de &&
                ((this.style = de), (this.el.style[k.transition.dom] = de));
          }
          function Re(J, ae, de) {
            var oe,
              he,
              Pe,
              be,
              yn = ae !== me,
              ye = {};
            for (oe in J)
              (Pe = J[oe]),
                oe in qe
                  ? (ye.transform || (ye.transform = {}),
                    (ye.transform[oe] = Pe))
                  : (S.test(oe) && (oe = n(oe)),
                    oe in Qe
                      ? (ye[oe] = Pe)
                      : (be || (be = {}), (be[oe] = Pe)));
            for (oe in ye) {
              if (((Pe = ye[oe]), (he = this.props[oe]), !he)) {
                if (!yn) continue;
                he = h.call(this, oe);
              }
              ae.call(this, he, Pe);
            }
            de && be && de.call(this, be);
          }
          function me(J) {
            J.stop();
          }
          function Xt(J, ae) {
            J.set(ae);
          }
          function u0(J) {
            this.$el.css(J);
          }
          function we(J, ae) {
            d[J] = function () {
              return this.children
                ? c0.call(this, ae, arguments)
                : (this.el && ae.apply(this, arguments), this);
            };
          }
          function c0(J, ae) {
            var de,
              oe = this.children.length;
            for (de = 0; oe > de; de++) J.apply(this.children[de], ae);
            return this;
          }
          (d.init = function (J) {
            if (
              ((this.$el = e(J)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              z.keepInherited && !z.fallback)
            ) {
              var ae = ue(this.el, "transition");
              ae && !H.test(ae) && (this.upstream = ae);
            }
            k.backface &&
              z.hideBackface &&
              Z(this.el, k.backface.css, "hidden");
          }),
            we("add", h),
            we("start", T),
            we("wait", R),
            we("then", F),
            we("next", M),
            we("stop", j),
            we("set", ee),
            we("show", Q),
            we("hide", U),
            we("redraw", te),
            we("destroy", re);
        }),
        pe = g(ve, function (d) {
          function h(T, R) {
            var F = e.data(T, O) || e.data(T, O, new ve.Bare());
            return F.el || F.init(T), R ? F.start(R) : F;
          }
          d.init = function (T, R) {
            var F = e(T);
            if (!F.length) return this;
            if (F.length === 1) return h(F[0], R);
            var M = [];
            return (
              F.each(function (j, ee) {
                M.push(h(ee, R));
              }),
              (this.children = M),
              this
            );
          };
        }),
        C = g(function (d) {
          function h() {
            var M = this.get();
            this.update("auto");
            var j = this.get();
            return this.update(M), j;
          }
          function T(M, j, ee) {
            return j !== void 0 && (ee = j), M in p ? M : ee;
          }
          function R(M) {
            var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(M);
            return (j ? a(j[1], j[2], j[3]) : M).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var F = { duration: 500, ease: "ease", delay: 0 };
          (d.init = function (M, j, ee, Q) {
            (this.$el = M), (this.el = M[0]);
            var U = j[0];
            ee[2] && (U = ee[2]),
              yt[U] && (U = yt[U]),
              (this.name = U),
              (this.type = ee[1]),
              (this.duration = u(j[1], this.duration, F.duration)),
              (this.ease = T(j[2], this.ease, F.ease)),
              (this.delay = u(j[3], this.delay, F.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = W.test(this.name)),
              (this.unit = Q.unit || this.unit || z.defaultUnit),
              (this.angle = Q.angle || this.angle || z.defaultAngle),
              z.fallback || Q.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    V +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? V + p[this.ease][0] : "") +
                    (this.delay ? V + this.delay + "ms" : "")));
          }),
            (d.set = function (M) {
              (M = this.convert(M, this.type)), this.update(M), this.redraw();
            }),
            (d.transition = function (M) {
              (this.active = !0),
                (M = this.convert(M, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  M == "auto" && (M = h.call(this))),
                (this.nextStyle = M);
            }),
            (d.fallback = function (M) {
              var j =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (M = this.convert(M, this.type)),
                this.auto &&
                  (j == "auto" && (j = this.convert(this.get(), this.type)),
                  M == "auto" && (M = h.call(this))),
                (this.tween = new P({
                  from: j,
                  to: M,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (d.get = function () {
              return ue(this.el, this.name);
            }),
            (d.update = function (M) {
              Z(this.el, this.name, M);
            }),
            (d.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                Z(this.el, this.name, this.get()));
              var M = this.tween;
              M && M.context && M.destroy();
            }),
            (d.convert = function (M, j) {
              if (M == "auto" && this.auto) return M;
              var ee,
                Q = typeof M == "number",
                U = typeof M == "string";
              switch (j) {
                case A:
                  if (Q) return M;
                  if (U && M.replace(v, "") === "") return +M;
                  ee = "number(unitless)";
                  break;
                case N:
                  if (U) {
                    if (M === "" && this.original) return this.original;
                    if (j.test(M))
                      return M.charAt(0) == "#" && M.length == 7 ? M : R(M);
                  }
                  ee = "hex or rgb string";
                  break;
                case x:
                  if (Q) return M + this.unit;
                  if (U && j.test(M)) return M;
                  ee = "number(px) or string(unit)";
                  break;
                case w:
                  if (Q) return M + this.unit;
                  if (U && j.test(M)) return M;
                  ee = "number(px) or string(unit or %)";
                  break;
                case B:
                  if (Q) return M + this.angle;
                  if (U && j.test(M)) return M;
                  ee = "number(deg) or string(angle)";
                  break;
                case X:
                  if (Q || (U && w.test(M))) return M;
                  ee = "number(unitless) or string(unit or %)";
              }
              return o(ee, M), M;
            }),
            (d.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        f = g(C, function (d, h) {
          d.init = function () {
            h.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), N));
          };
        }),
        G = g(C, function (d, h) {
          (d.init = function () {
            h.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (d.get = function () {
              return this.$el[this.name]();
            }),
            (d.update = function (T) {
              this.$el[this.name](T);
            });
        }),
        D = g(C, function (d, h) {
          function T(R, F) {
            var M, j, ee, Q, U;
            for (M in R)
              (Q = qe[M]),
                (ee = Q[0]),
                (j = Q[1] || M),
                (U = this.convert(R[M], ee)),
                F.call(this, j, U, ee);
          }
          (d.init = function () {
            h.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                qe.perspective &&
                  z.perspective &&
                  ((this.current.perspective = z.perspective),
                  Z(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (d.set = function (R) {
              T.call(this, R, function (F, M) {
                this.current[F] = M;
              }),
                Z(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (d.transition = function (R) {
              var F = this.values(R);
              this.tween = new ne({
                current: this.current,
                values: F,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var M,
                j = {};
              for (M in this.current) j[M] = M in F ? F[M] : this.current[M];
              (this.active = !0), (this.nextStyle = this.style(j));
            }),
            (d.fallback = function (R) {
              var F = this.values(R);
              this.tween = new ne({
                current: this.current,
                values: F,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (d.update = function () {
              Z(this.el, this.name, this.style(this.current));
            }),
            (d.style = function (R) {
              var F,
                M = "";
              for (F in R) M += F + "(" + R[F] + ") ";
              return M;
            }),
            (d.values = function (R) {
              var F,
                M = {};
              return (
                T.call(this, R, function (j, ee, Q) {
                  (M[j] = ee),
                    this.current[j] === void 0 &&
                      ((F = 0),
                      ~j.indexOf("scale") && (F = 1),
                      (this.current[j] = this.convert(F, Q)));
                }),
                M
              );
            });
        }),
        P = g(function (d) {
          function h(U) {
            ee.push(U) === 1 && ie(T);
          }
          function T() {
            var U,
              te,
              re,
              ge = ee.length;
            if (ge)
              for (ie(T), te = le(), U = ge; U--; )
                (re = ee[U]), re && re.render(te);
          }
          function R(U) {
            var te,
              re = e.inArray(U, ee);
            re >= 0 &&
              ((te = ee.slice(re + 1)),
              (ee.length = re),
              te.length && (ee = ee.concat(te)));
          }
          function F(U) {
            return Math.round(U * Q) / Q;
          }
          function M(U, te, re) {
            return a(
              U[0] + re * (te[0] - U[0]),
              U[1] + re * (te[1] - U[1]),
              U[2] + re * (te[2] - U[2])
            );
          }
          var j = { ease: p.ease[1], from: 0, to: 1 };
          (d.init = function (U) {
            (this.duration = U.duration || 0), (this.delay = U.delay || 0);
            var te = U.ease || j.ease;
            p[te] && (te = p[te][1]),
              typeof te != "function" && (te = j.ease),
              (this.ease = te),
              (this.update = U.update || i),
              (this.complete = U.complete || i),
              (this.context = U.context || this),
              (this.name = U.name);
            var re = U.from,
              ge = U.to;
            re === void 0 && (re = j.from),
              ge === void 0 && (ge = j.to),
              (this.unit = U.unit || ""),
              typeof re == "number" && typeof ge == "number"
                ? ((this.begin = re), (this.change = ge - re))
                : this.format(ge, re),
              (this.value = this.begin + this.unit),
              (this.start = le()),
              U.autoplay !== !1 && this.play();
          }),
            (d.play = function () {
              this.active ||
                (this.start || (this.start = le()),
                (this.active = !0),
                h(this));
            }),
            (d.stop = function () {
              this.active && ((this.active = !1), R(this));
            }),
            (d.render = function (U) {
              var te,
                re = U - this.start;
              if (this.delay) {
                if (re <= this.delay) return;
                re -= this.delay;
              }
              if (re < this.duration) {
                var ge = this.ease(re, 0, 1, this.duration);
                return (
                  (te = this.startRGB
                    ? M(this.startRGB, this.endRGB, ge)
                    : F(this.begin + ge * this.change)),
                  (this.value = te + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (te = this.endHex || this.begin + this.change),
                (this.value = te + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (d.format = function (U, te) {
              if (((te += ""), (U += ""), U.charAt(0) == "#"))
                return (
                  (this.startRGB = r(te)),
                  (this.endRGB = r(U)),
                  (this.endHex = U),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var re = te.replace(v, ""),
                  ge = U.replace(v, "");
                re !== ge && s("tween", te, U), (this.unit = re);
              }
              (te = parseFloat(te)),
                (U = parseFloat(U)),
                (this.begin = this.value = te),
                (this.change = U - te);
            }),
            (d.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var ee = [],
            Q = 1e3;
        }),
        K = g(P, function (d) {
          (d.init = function (h) {
            (this.duration = h.duration || 0),
              (this.complete = h.complete || i),
              (this.context = h.context),
              this.play();
          }),
            (d.render = function (h) {
              var T = h - this.start;
              T < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        ne = g(P, function (d, h) {
          (d.init = function (T) {
            (this.context = T.context),
              (this.update = T.update),
              (this.tweens = []),
              (this.current = T.current);
            var R, F;
            for (R in T.values)
              (F = T.values[R]),
                this.current[R] !== F &&
                  this.tweens.push(
                    new P({
                      name: R,
                      from: this.current[R],
                      to: F,
                      duration: T.duration,
                      delay: T.delay,
                      ease: T.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (d.render = function (T) {
              var R,
                F,
                M = this.tweens.length,
                j = !1;
              for (R = M; R--; )
                (F = this.tweens[R]),
                  F.context &&
                    (F.render(T), (this.current[F.name] = F.value), (j = !0));
              return j
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (d.destroy = function () {
              if ((h.destroy.call(this), this.tweens)) {
                var T,
                  R = this.tweens.length;
                for (T = R; T--; ) this.tweens[T].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        z = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !k.transition,
          agentTests: [],
        });
      (t.fallback = function (d) {
        if (!k.transition) return (z.fallback = !0);
        z.agentTests.push("(" + d + ")");
        var h = new RegExp(z.agentTests.join("|"), "i");
        z.fallback = h.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (d) {
          return new P(d);
        }),
        (t.delay = function (d, h, T) {
          return new K({ complete: h, duration: d, context: T });
        }),
        (e.fn.tram = function (d) {
          return t.call(null, this, d);
        });
      var Z = e.style,
        ue = e.css,
        yt = { transform: k.transform && k.transform.css },
        Qe = {
          color: [f, N],
          background: [f, N, "background-color"],
          "outline-color": [f, N],
          "border-color": [f, N],
          "border-top-color": [f, N],
          "border-right-color": [f, N],
          "border-bottom-color": [f, N],
          "border-left-color": [f, N],
          "border-width": [C, x],
          "border-top-width": [C, x],
          "border-right-width": [C, x],
          "border-bottom-width": [C, x],
          "border-left-width": [C, x],
          "border-spacing": [C, x],
          "letter-spacing": [C, x],
          margin: [C, x],
          "margin-top": [C, x],
          "margin-right": [C, x],
          "margin-bottom": [C, x],
          "margin-left": [C, x],
          padding: [C, x],
          "padding-top": [C, x],
          "padding-right": [C, x],
          "padding-bottom": [C, x],
          "padding-left": [C, x],
          "outline-width": [C, x],
          opacity: [C, A],
          top: [C, w],
          right: [C, w],
          bottom: [C, w],
          left: [C, w],
          "font-size": [C, w],
          "text-indent": [C, w],
          "word-spacing": [C, w],
          width: [C, w],
          "min-width": [C, w],
          "max-width": [C, w],
          height: [C, w],
          "min-height": [C, w],
          "max-height": [C, w],
          "line-height": [C, X],
          "scroll-top": [G, A, "scrollTop"],
          "scroll-left": [G, A, "scrollLeft"],
        },
        qe = {};
      k.transform &&
        ((Qe.transform = [D]),
        (qe = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [B],
          rotateX: [B],
          rotateY: [B],
          scale: [A],
          scaleX: [A],
          scaleY: [A],
          skew: [B],
          skewX: [B],
          skewY: [B],
        })),
        k.transform &&
          k.backface &&
          ((qe.z = [w, "translateZ"]),
          (qe.rotateZ = [B]),
          (qe.scaleZ = [A]),
          (qe.perspective = [x]));
      var En = /ms/,
        Bt = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var $a = c((D8, Qa) => {
    "use strict";
    var d0 = window.$,
      f0 = Sr() && d0.tram;
    Qa.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        a = Function.prototype,
        i = n.push,
        o = n.slice,
        s = n.concat,
        u = r.toString,
        l = r.hasOwnProperty,
        y = n.forEach,
        g = n.map,
        p = n.reduce,
        I = n.reduceRight,
        _ = n.filter,
        m = n.every,
        O = n.some,
        v = n.indexOf,
        S = n.lastIndexOf,
        A = Array.isArray,
        N = Object.keys,
        x = a.bind,
        w =
          (e.each =
          e.forEach =
            function (E, L, q) {
              if (E == null) return E;
              if (y && E.forEach === y) E.forEach(L, q);
              else if (E.length === +E.length) {
                for (var k = 0, $ = E.length; k < $; k++)
                  if (L.call(q, E[k], k, E) === t) return;
              } else
                for (var Y = e.keys(E), k = 0, $ = Y.length; k < $; k++)
                  if (L.call(q, E[Y[k]], Y[k], E) === t) return;
              return E;
            });
      (e.map = e.collect =
        function (E, L, q) {
          var k = [];
          return E == null
            ? k
            : g && E.map === g
            ? E.map(L, q)
            : (w(E, function ($, Y, ie) {
                k.push(L.call(q, $, Y, ie));
              }),
              k);
        }),
        (e.find = e.detect =
          function (E, L, q) {
            var k;
            return (
              B(E, function ($, Y, ie) {
                if (L.call(q, $, Y, ie)) return (k = $), !0;
              }),
              k
            );
          }),
        (e.filter = e.select =
          function (E, L, q) {
            var k = [];
            return E == null
              ? k
              : _ && E.filter === _
              ? E.filter(L, q)
              : (w(E, function ($, Y, ie) {
                  L.call(q, $, Y, ie) && k.push($);
                }),
                k);
          });
      var B =
        (e.some =
        e.any =
          function (E, L, q) {
            L || (L = e.identity);
            var k = !1;
            return E == null
              ? k
              : O && E.some === O
              ? E.some(L, q)
              : (w(E, function ($, Y, ie) {
                  if (k || (k = L.call(q, $, Y, ie))) return t;
                }),
                !!k);
          });
      (e.contains = e.include =
        function (E, L) {
          return E == null
            ? !1
            : v && E.indexOf === v
            ? E.indexOf(L) != -1
            : B(E, function (q) {
                return q === L;
              });
        }),
        (e.delay = function (E, L) {
          var q = o.call(arguments, 2);
          return setTimeout(function () {
            return E.apply(null, q);
          }, L);
        }),
        (e.defer = function (E) {
          return e.delay.apply(e, [E, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (E) {
          var L, q, k;
          return function () {
            L ||
              ((L = !0),
              (q = arguments),
              (k = this),
              f0.frame(function () {
                (L = !1), E.apply(k, q);
              }));
          };
        }),
        (e.debounce = function (E, L, q) {
          var k,
            $,
            Y,
            ie,
            le,
            ve = function () {
              var pe = e.now() - ie;
              pe < L
                ? (k = setTimeout(ve, L - pe))
                : ((k = null), q || ((le = E.apply(Y, $)), (Y = $ = null)));
            };
          return function () {
            (Y = this), ($ = arguments), (ie = e.now());
            var pe = q && !k;
            return (
              k || (k = setTimeout(ve, L)),
              pe && ((le = E.apply(Y, $)), (Y = $ = null)),
              le
            );
          };
        }),
        (e.defaults = function (E) {
          if (!e.isObject(E)) return E;
          for (var L = 1, q = arguments.length; L < q; L++) {
            var k = arguments[L];
            for (var $ in k) E[$] === void 0 && (E[$] = k[$]);
          }
          return E;
        }),
        (e.keys = function (E) {
          if (!e.isObject(E)) return [];
          if (N) return N(E);
          var L = [];
          for (var q in E) e.has(E, q) && L.push(q);
          return L;
        }),
        (e.has = function (E, L) {
          return l.call(E, L);
        }),
        (e.isObject = function (E) {
          return E === Object(E);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var X = /(.)^/,
        H = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        W = /\\|'|\r|\n|\u2028|\u2029/g,
        V = function (E) {
          return "\\" + H[E];
        },
        b = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (E, L, q) {
          !L && q && (L = q), (L = e.defaults({}, L, e.templateSettings));
          var k = RegExp(
              [
                (L.escape || X).source,
                (L.interpolate || X).source,
                (L.evaluate || X).source,
              ].join("|") + "|$",
              "g"
            ),
            $ = 0,
            Y = "__p+='";
          E.replace(k, function (pe, C, f, G, D) {
            return (
              (Y += E.slice($, D).replace(W, V)),
              ($ = D + pe.length),
              C
                ? (Y +=
                    `'+
    ((__t=(` +
                    C +
                    `))==null?'':_.escape(__t))+
    '`)
                : f
                ? (Y +=
                    `'+
    ((__t=(` +
                    f +
                    `))==null?'':__t)+
    '`)
                : G &&
                  (Y +=
                    `';
    ` +
                    G +
                    `
    __p+='`),
              pe
            );
          }),
            (Y += `';
    `);
          var ie = L.variable;
          if (ie) {
            if (!b.test(ie))
              throw new Error("variable is not a bare identifier: " + ie);
          } else
            (Y =
              `with(obj||{}){
    ` +
              Y +
              `}
    `),
              (ie = "obj");
          Y =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            Y +
            `return __p;
    `;
          var le;
          try {
            le = new Function(L.variable || "obj", "_", Y);
          } catch (pe) {
            throw ((pe.source = Y), pe);
          }
          var ve = function (pe) {
            return le.call(this, pe, e);
          };
          return (
            (ve.source =
              "function(" +
              ie +
              `){
    ` +
              Y +
              "}"),
            ve
          );
        }),
        e
      );
    })();
  });
  var Ne = c((x8, ao) => {
    "use strict";
    var se = {},
      It = {},
      vt = [],
      Nr = window.Webflow || [],
      $e = window.jQuery,
      De = $e(window),
      p0 = $e(document),
      Ue = $e.isFunction,
      Me = (se._ = $a()),
      Ja = (se.tram = Sr() && $e.tram),
      vn = !1,
      Lr = !1;
    Ja.config.hideBackface = !1;
    Ja.config.keepInherited = !0;
    se.define = function (e, t, n) {
      It[e] && to(It[e]);
      var r = (It[e] = t($e, Me, n) || {});
      return eo(r), r;
    };
    se.require = function (e) {
      return It[e];
    };
    function eo(e) {
      se.env() &&
        (Ue(e.design) && De.on("__wf_design", e.design),
        Ue(e.preview) && De.on("__wf_preview", e.preview)),
        Ue(e.destroy) && De.on("__wf_destroy", e.destroy),
        e.ready && Ue(e.ready) && g0(e);
    }
    function g0(e) {
      if (vn) {
        e.ready();
        return;
      }
      Me.contains(vt, e.ready) || vt.push(e.ready);
    }
    function to(e) {
      Ue(e.design) && De.off("__wf_design", e.design),
        Ue(e.preview) && De.off("__wf_preview", e.preview),
        Ue(e.destroy) && De.off("__wf_destroy", e.destroy),
        e.ready && Ue(e.ready) && E0(e);
    }
    function E0(e) {
      vt = Me.filter(vt, function (t) {
        return t !== e.ready;
      });
    }
    se.push = function (e) {
      if (vn) {
        Ue(e) && e();
        return;
      }
      Nr.push(e);
    };
    se.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var In = navigator.userAgent.toLowerCase(),
      no = (se.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      y0 = (se.env.chrome =
        /chrome/.test(In) &&
        /Google/.test(navigator.vendor) &&
        parseInt(In.match(/chrome\/(\d+)\./)[1], 10)),
      I0 = (se.env.ios = /(ipod|iphone|ipad)/.test(In));
    se.env.safari = /safari/.test(In) && !y0 && !I0;
    var Rr;
    no &&
      p0.on("touchstart mousedown", function (e) {
        Rr = e.target;
      });
    se.validClick = no
      ? function (e) {
          return e === Rr || $e.contains(e, Rr);
        }
      : function () {
          return !0;
        };
    var ro = "resize.webflow orientationchange.webflow load.webflow",
      v0 = "scroll.webflow " + ro;
    se.resize = Cr(De, ro);
    se.scroll = Cr(De, v0);
    se.redraw = Cr();
    function Cr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = Me.throttle(function (a) {
          Me.each(n, function (i) {
            i(a);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (a) {
          typeof a == "function" && (Me.contains(n, a) || n.push(a));
        }),
        (r.off = function (a) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = Me.filter(n, function (i) {
            return i !== a;
          });
        }),
        r
      );
    }
    se.location = function (e) {
      window.location = e;
    };
    se.env() && (se.location = function () {});
    se.ready = function () {
      (vn = !0), Lr ? _0() : Me.each(vt, Za), Me.each(Nr, Za), se.resize.up();
    };
    function Za(e) {
      Ue(e) && e();
    }
    function _0() {
      (Lr = !1), Me.each(It, eo);
    }
    var at;
    se.load = function (e) {
      at.then(e);
    };
    function io() {
      at && (at.reject(), De.off("load", at.resolve)),
        (at = new $e.Deferred()),
        De.on("load", at.resolve);
    }
    se.destroy = function (e) {
      (e = e || {}),
        (Lr = !0),
        De.triggerHandler("__wf_destroy"),
        e.domready != null && (vn = e.domready),
        Me.each(It, to),
        se.resize.off(),
        se.scroll.off(),
        se.redraw.off(),
        (vt = []),
        (Nr = []),
        at.state() === "pending" && io();
    };
    $e(se.ready);
    io();
    ao.exports = window.Webflow = se;
  });
  var uo = c((F8, so) => {
    "use strict";
    var oo = Ne();
    oo.define(
      "brand",
      (so.exports = function (e) {
        var t = {},
          n = document,
          r = e("html"),
          a = e("body"),
          i = ".w-webflow-badge",
          o = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var I = r.attr("data-wf-status"),
            _ = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(_) && o.hostname !== _ && (I = !0),
            I &&
              !s &&
              ((l = l || g()),
              p(),
              setTimeout(p, 500),
              e(n).off(u, y).on(u, y));
        };
        function y() {
          var I =
            n.fullScreen ||
            n.mozFullScreen ||
            n.webkitIsFullScreen ||
            n.msFullscreenElement ||
            !!n.webkitFullscreenElement;
          e(l).attr("style", I ? "display: none !important;" : "");
        }
        function g() {
          var I = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            m = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return I.append(_, m), I[0];
        }
        function p() {
          var I = a.children(i),
            _ = I.length && I.get(0) === l,
            m = oo.env("editor");
          if (_) {
            m && I.remove();
            return;
          }
          I.length && I.remove(), m || a.append(l);
        }
        return t;
      })
    );
  });
  var lo = c((G8, co) => {
    "use strict";
    var _t = Ne();
    _t.define(
      "links",
      (co.exports = function (e, t) {
        var n = {},
          r = e(window),
          a,
          i = _t.env(),
          o = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          y = /\/$/,
          g,
          p;
        n.ready = n.design = n.preview = I;
        function I() {
          (a = i && _t.env("design")),
            (p = _t.env("slug") || o.pathname || ""),
            _t.scroll.off(m),
            (g = []);
          for (var v = document.links, S = 0; S < v.length; ++S) _(v[S]);
          g.length && (_t.scroll.on(m), m());
        }
        function _(v) {
          if (!v.getAttribute("hreflang")) {
            var S =
              (a && v.getAttribute("href-disabled")) || v.getAttribute("href");
            if (((s.href = S), !(S.indexOf(":") >= 0))) {
              var A = e(v);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === o.host + o.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var N = e(s.hash);
                N.length && g.push({ link: A, sec: N, active: !1 });
                return;
              }
              if (!(S === "#" || S === "")) {
                var x =
                  s.href === o.href || S === p || (l.test(S) && y.test(p));
                O(A, u, x);
              }
            }
          }
        }
        function m() {
          var v = r.scrollTop(),
            S = r.height();
          t.each(g, function (A) {
            if (!A.link.attr("hreflang")) {
              var N = A.link,
                x = A.sec,
                w = x.offset().top,
                B = x.outerHeight(),
                X = S * 0.5,
                H = x.is(":visible") && w + B - X >= v && w + X <= v + S;
              A.active !== H && ((A.active = H), O(N, u, H));
            }
          });
        }
        function O(v, S, A) {
          var N = v.hasClass(S);
          (A && N) || (!A && !N) || (A ? v.addClass(S) : v.removeClass(S));
        }
        return n;
      })
    );
  });
  var po = c((q8, fo) => {
    "use strict";
    var _n = Ne();
    _n.define(
      "scroll",
      (fo.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = _() ? null : window.history,
          a = e(window),
          i = e(document),
          o = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (b) {
              window.setTimeout(b, 15);
            },
          u = _n.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          g = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          I = document.createElement("style");
        I.appendChild(document.createTextNode(p));
        function _() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var m = /^#[a-zA-Z0-9][\w:.-]*$/;
        function O(b) {
          return m.test(b.hash) && b.host + b.pathname === n.host + n.pathname;
        }
        let v =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function S() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            v.matches
          );
        }
        function A(b, E) {
          var L;
          switch (E) {
            case "add":
              (L = b.attr("tabindex")),
                L
                  ? b.attr("data-wf-tabindex-swap", L)
                  : b.attr("tabindex", "-1");
              break;
            case "remove":
              (L = b.attr("data-wf-tabindex-swap")),
                L
                  ? (b.attr("tabindex", L),
                    b.removeAttr("data-wf-tabindex-swap"))
                  : b.removeAttr("tabindex");
              break;
          }
          b.toggleClass("wf-force-outline-none", E === "add");
        }
        function N(b) {
          var E = b.currentTarget;
          if (
            !(
              _n.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(E.className))
            )
          ) {
            var L = O(E) ? E.hash : "";
            if (L !== "") {
              var q = e(L);
              q.length &&
                (b && (b.preventDefault(), b.stopPropagation()),
                x(L, b),
                window.setTimeout(
                  function () {
                    w(q, function () {
                      A(q, "add"),
                        q.get(0).focus({ preventScroll: !0 }),
                        A(q, "remove");
                    });
                  },
                  b ? 0 : 300
                ));
            }
          }
        }
        function x(b) {
          if (
            n.hash !== b &&
            r &&
            r.pushState &&
            !(_n.env.chrome && n.protocol === "file:")
          ) {
            var E = r.state && r.state.hash;
            E !== b && r.pushState({ hash: b }, "", b);
          }
        }
        function w(b, E) {
          var L = a.scrollTop(),
            q = B(b);
          if (L !== q) {
            var k = X(b, L, q),
              $ = Date.now(),
              Y = function () {
                var ie = Date.now() - $;
                window.scroll(0, H(L, q, ie, k)),
                  ie <= k ? s(Y) : typeof E == "function" && E();
              };
            s(Y);
          }
        }
        function B(b) {
          var E = e(l),
            L = E.css("position") === "fixed" ? E.outerHeight() : 0,
            q = b.offset().top - L;
          if (b.data("scroll") === "mid") {
            var k = a.height() - L,
              $ = b.outerHeight();
            $ < k && (q -= Math.round((k - $) / 2));
          }
          return q;
        }
        function X(b, E, L) {
          if (S()) return 0;
          var q = 1;
          return (
            o.add(b).each(function (k, $) {
              var Y = parseFloat($.getAttribute("data-scroll-time"));
              !isNaN(Y) && Y >= 0 && (q = Y);
            }),
            (472.143 * Math.log(Math.abs(E - L) + 125) - 2e3) * q
          );
        }
        function H(b, E, L, q) {
          return L > q ? E : b + (E - b) * W(L / q);
        }
        function W(b) {
          return b < 0.5
            ? 4 * b * b * b
            : (b - 1) * (2 * b - 2) * (2 * b - 2) + 1;
        }
        function V() {
          var { WF_CLICK_EMPTY: b, WF_CLICK_SCROLL: E } = t;
          i.on(E, g, N),
            i.on(b, y, function (L) {
              L.preventDefault();
            }),
            document.head.insertBefore(I, document.head.firstChild);
        }
        return { ready: V };
      })
    );
  });
  var yo = c((U8, Eo) => {
    "use strict";
    var go = Ne();
    go.define(
      "focus",
      (Eo.exports = function () {
        var e = [],
          t = !1;
        function n(o) {
          t &&
            (o.preventDefault(),
            o.stopPropagation(),
            o.stopImmediatePropagation(),
            e.unshift(o));
        }
        function r(o) {
          var s = o.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function a(o) {
          r(o) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, o.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            go.env.safari &&
            (document.addEventListener("mousedown", a, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: i };
      })
    );
  });
  var vo = c((V8, Io) => {
    "use strict";
    var m0 = Ne();
    m0.define(
      "focus-visible",
      (Io.exports = function () {
        function e(n) {
          var r = !0,
            a = !1,
            i = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(A) {
            return !!(
              A &&
              A !== document &&
              A.nodeName !== "HTML" &&
              A.nodeName !== "BODY" &&
              "classList" in A &&
              "contains" in A.classList
            );
          }
          function u(A) {
            var N = A.type,
              x = A.tagName;
            return !!(
              (x === "INPUT" && o[N] && !A.readOnly) ||
              (x === "TEXTAREA" && !A.readOnly) ||
              A.isContentEditable
            );
          }
          function l(A) {
            A.getAttribute("data-wf-focus-visible") ||
              A.setAttribute("data-wf-focus-visible", "true");
          }
          function y(A) {
            A.getAttribute("data-wf-focus-visible") &&
              A.removeAttribute("data-wf-focus-visible");
          }
          function g(A) {
            A.metaKey ||
              A.altKey ||
              A.ctrlKey ||
              (s(n.activeElement) && l(n.activeElement), (r = !0));
          }
          function p() {
            r = !1;
          }
          function I(A) {
            s(A.target) && (r || u(A.target)) && l(A.target);
          }
          function _(A) {
            s(A.target) &&
              A.target.hasAttribute("data-wf-focus-visible") &&
              ((a = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                a = !1;
              }, 100)),
              y(A.target));
          }
          function m() {
            document.visibilityState === "hidden" && (a && (r = !0), O());
          }
          function O() {
            document.addEventListener("mousemove", S),
              document.addEventListener("mousedown", S),
              document.addEventListener("mouseup", S),
              document.addEventListener("pointermove", S),
              document.addEventListener("pointerdown", S),
              document.addEventListener("pointerup", S),
              document.addEventListener("touchmove", S),
              document.addEventListener("touchstart", S),
              document.addEventListener("touchend", S);
          }
          function v() {
            document.removeEventListener("mousemove", S),
              document.removeEventListener("mousedown", S),
              document.removeEventListener("mouseup", S),
              document.removeEventListener("pointermove", S),
              document.removeEventListener("pointerdown", S),
              document.removeEventListener("pointerup", S),
              document.removeEventListener("touchmove", S),
              document.removeEventListener("touchstart", S),
              document.removeEventListener("touchend", S);
          }
          function S(A) {
            (A.target.nodeName && A.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), v());
          }
          document.addEventListener("keydown", g, !0),
            document.addEventListener("mousedown", p, !0),
            document.addEventListener("pointerdown", p, !0),
            document.addEventListener("touchstart", p, !0),
            document.addEventListener("visibilitychange", m, !0),
            O(),
            n.addEventListener("focus", I, !0),
            n.addEventListener("blur", _, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var mo = c((k8, _o) => {
    "use strict";
    var h0 = Ne();
    h0.define(
      "touch",
      (_o.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new r(i) : null
            );
          });
        function r(i) {
          var o = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            y;
          i.addEventListener("touchstart", g, !1),
            i.addEventListener("touchmove", p, !1),
            i.addEventListener("touchend", I, !1),
            i.addEventListener("touchcancel", _, !1),
            i.addEventListener("mousedown", g, !1),
            i.addEventListener("mousemove", p, !1),
            i.addEventListener("mouseup", I, !1),
            i.addEventListener("mouseout", _, !1);
          function g(O) {
            var v = O.touches;
            (v && v.length > 1) ||
              ((o = !0),
              v ? ((s = !0), (l = v[0].clientX)) : (l = O.clientX),
              (y = l));
          }
          function p(O) {
            if (o) {
              if (s && O.type === "mousemove") {
                O.preventDefault(), O.stopPropagation();
                return;
              }
              var v = O.touches,
                S = v ? v[0].clientX : O.clientX,
                A = S - y;
              (y = S),
                Math.abs(A) > u &&
                  n &&
                  String(n()) === "" &&
                  (a("swipe", O, { direction: A > 0 ? "right" : "left" }), _());
            }
          }
          function I(O) {
            if (o && ((o = !1), s && O.type === "mouseup")) {
              O.preventDefault(), O.stopPropagation(), (s = !1);
              return;
            }
          }
          function _() {
            o = !1;
          }
          function m() {
            i.removeEventListener("touchstart", g, !1),
              i.removeEventListener("touchmove", p, !1),
              i.removeEventListener("touchend", I, !1),
              i.removeEventListener("touchcancel", _, !1),
              i.removeEventListener("mousedown", g, !1),
              i.removeEventListener("mousemove", p, !1),
              i.removeEventListener("mouseup", I, !1),
              i.removeEventListener("mouseout", _, !1),
              (i = null);
          }
          this.destroy = m;
        }
        function a(i, o, s) {
          var u = e.Event(i, { originalEvent: o });
          e(o.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var To = c((B8, ho) => {
    "use strict";
    var wr = Ne();
    wr.define(
      "edit",
      (ho.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (wr.env("test") || wr.env("frame")) && !n.fixture && !T0())
        )
          return { exit: 1 };
        var r = {},
          a = e(window),
          i = e(document.documentElement),
          o = document.location,
          s = "hashchange",
          u,
          l = n.load || p,
          y = !1;
        try {
          y =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        y
          ? l()
          : o.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) ||
              /\?edit$/.test(o.href)) &&
            l()
          : a.on(s, g).triggerHandler(s);
        function g() {
          u || (/\?edit/.test(o.hash) && l());
        }
        function p() {
          (u = !0),
            (window.WebflowEditor = !0),
            a.off(s, g),
            S(function (N) {
              e.ajax({
                url: v("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: I(N),
              });
            });
        }
        function I(N) {
          return function (x) {
            if (!x) {
              console.error("Could not load editor data");
              return;
            }
            (x.thirdPartyCookiesSupported = N),
              _(O(x.scriptPath), function () {
                window.WebflowEditor(x);
              });
          };
        }
        function _(N, x) {
          e.ajax({ type: "GET", url: N, dataType: "script", cache: !0 }).then(
            x,
            m
          );
        }
        function m(N, x, w) {
          throw (console.error("Could not load editor script: " + x), w);
        }
        function O(N) {
          return N.indexOf("//") >= 0
            ? N
            : v("https://editor-api.webflow.com" + N);
        }
        function v(N) {
          return N.replace(/([^:])\/\//g, "$1/");
        }
        function S(N) {
          var x = window.document.createElement("iframe");
          (x.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (x.style.display = "none"),
            (x.sandbox = "allow-scripts allow-same-origin");
          var w = function (B) {
            B.data === "WF_third_party_cookies_unsupported"
              ? (A(x, w), N(!1))
              : B.data === "WF_third_party_cookies_supported" &&
                (A(x, w), N(!0));
          };
          (x.onerror = function () {
            A(x, w), N(!1);
          }),
            window.addEventListener("message", w, !1),
            window.document.body.appendChild(x);
        }
        function A(N, x) {
          window.removeEventListener("message", x, !1), N.remove();
        }
        return r;
      })
    );
    function T0() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Pr = c((X8, bo) => {
    var b0 =
      typeof global == "object" && global && global.Object === Object && global;
    bo.exports = b0;
  });
  var xe = c((H8, Oo) => {
    var O0 = Pr(),
      A0 = typeof self == "object" && self && self.Object === Object && self,
      S0 = O0 || A0 || Function("return this")();
    Oo.exports = S0;
  });
  var mt = c((W8, Ao) => {
    var R0 = xe(),
      N0 = R0.Symbol;
    Ao.exports = N0;
  });
  var Lo = c((z8, No) => {
    var So = mt(),
      Ro = Object.prototype,
      L0 = Ro.hasOwnProperty,
      C0 = Ro.toString,
      Ht = So ? So.toStringTag : void 0;
    function w0(e) {
      var t = L0.call(e, Ht),
        n = e[Ht];
      try {
        e[Ht] = void 0;
        var r = !0;
      } catch {}
      var a = C0.call(e);
      return r && (t ? (e[Ht] = n) : delete e[Ht]), a;
    }
    No.exports = w0;
  });
  var wo = c((Y8, Co) => {
    var P0 = Object.prototype,
      M0 = P0.toString;
    function D0(e) {
      return M0.call(e);
    }
    Co.exports = D0;
  });
  var Ze = c((K8, Do) => {
    var Po = mt(),
      x0 = Lo(),
      F0 = wo(),
      G0 = "[object Null]",
      q0 = "[object Undefined]",
      Mo = Po ? Po.toStringTag : void 0;
    function U0(e) {
      return e == null
        ? e === void 0
          ? q0
          : G0
        : Mo && Mo in Object(e)
        ? x0(e)
        : F0(e);
    }
    Do.exports = U0;
  });
  var Mr = c((j8, xo) => {
    function V0(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    xo.exports = V0;
  });
  var Dr = c((Q8, Fo) => {
    var k0 = Mr(),
      B0 = k0(Object.getPrototypeOf, Object);
    Fo.exports = B0;
  });
  var Ye = c(($8, Go) => {
    function X0(e) {
      return e != null && typeof e == "object";
    }
    Go.exports = X0;
  });
  var xr = c((Z8, Uo) => {
    var H0 = Ze(),
      W0 = Dr(),
      z0 = Ye(),
      Y0 = "[object Object]",
      K0 = Function.prototype,
      j0 = Object.prototype,
      qo = K0.toString,
      Q0 = j0.hasOwnProperty,
      $0 = qo.call(Object);
    function Z0(e) {
      if (!z0(e) || H0(e) != Y0) return !1;
      var t = W0(e);
      if (t === null) return !0;
      var n = Q0.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && qo.call(n) == $0;
    }
    Uo.exports = Z0;
  });
  var Vo = c((Fr) => {
    "use strict";
    Object.defineProperty(Fr, "__esModule", { value: !0 });
    Fr.default = J0;
    function J0(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var ko = c((qr, Gr) => {
    "use strict";
    Object.defineProperty(qr, "__esModule", { value: !0 });
    var ey = Vo(),
      ty = ny(ey);
    function ny(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ht;
    typeof self < "u"
      ? (ht = self)
      : typeof window < "u"
      ? (ht = window)
      : typeof global < "u"
      ? (ht = global)
      : typeof Gr < "u"
      ? (ht = Gr)
      : (ht = Function("return this")());
    var ry = (0, ty.default)(ht);
    qr.default = ry;
  });
  var Ur = c((Wt) => {
    "use strict";
    Wt.__esModule = !0;
    Wt.ActionTypes = void 0;
    Wt.default = Wo;
    var iy = xr(),
      ay = Ho(iy),
      oy = ko(),
      Bo = Ho(oy);
    function Ho(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Xo = (Wt.ActionTypes = { INIT: "@@redux/INIT" });
    function Wo(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(Wo)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var a = e,
        i = t,
        o = [],
        s = o,
        u = !1;
      function l() {
        s === o && (s = o.slice());
      }
      function y() {
        return i;
      }
      function g(m) {
        if (typeof m != "function")
          throw new Error("Expected listener to be a function.");
        var O = !0;
        return (
          l(),
          s.push(m),
          function () {
            if (O) {
              (O = !1), l();
              var S = s.indexOf(m);
              s.splice(S, 1);
            }
          }
        );
      }
      function p(m) {
        if (!(0, ay.default)(m))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof m.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (i = a(i, m));
        } finally {
          u = !1;
        }
        for (var O = (o = s), v = 0; v < O.length; v++) O[v]();
        return m;
      }
      function I(m) {
        if (typeof m != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (a = m), p({ type: Xo.INIT });
      }
      function _() {
        var m,
          O = g;
        return (
          (m = {
            subscribe: function (S) {
              if (typeof S != "object")
                throw new TypeError("Expected the observer to be an object.");
              function A() {
                S.next && S.next(y());
              }
              A();
              var N = O(A);
              return { unsubscribe: N };
            },
          }),
          (m[Bo.default] = function () {
            return this;
          }),
          m
        );
      }
      return (
        p({ type: Xo.INIT }),
        (r = { dispatch: p, subscribe: g, getState: y, replaceReducer: I }),
        (r[Bo.default] = _),
        r
      );
    }
  });
  var kr = c((Vr) => {
    "use strict";
    Vr.__esModule = !0;
    Vr.default = sy;
    function sy(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Ko = c((Br) => {
    "use strict";
    Br.__esModule = !0;
    Br.default = fy;
    var zo = Ur(),
      uy = xr(),
      nP = Yo(uy),
      cy = kr(),
      rP = Yo(cy);
    function Yo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function ly(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function dy(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: zo.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var a =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: a }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                zo.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function fy(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        typeof e[a] == "function" && (n[a] = e[a]);
      }
      var i = Object.keys(n);
      if (!1) var o;
      var s;
      try {
        dy(n);
      } catch (u) {
        s = u;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (s) throw s;
        if (!1) var g;
        for (var p = !1, I = {}, _ = 0; _ < i.length; _++) {
          var m = i[_],
            O = n[m],
            v = l[m],
            S = O(v, y);
          if (typeof S > "u") {
            var A = ly(m, y);
            throw new Error(A);
          }
          (I[m] = S), (p = p || S !== v);
        }
        return p ? I : l;
      };
    }
  });
  var Qo = c((Xr) => {
    "use strict";
    Xr.__esModule = !0;
    Xr.default = py;
    function jo(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function py(e, t) {
      if (typeof e == "function") return jo(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
        var i = n[a],
          o = e[i];
        typeof o == "function" && (r[i] = jo(o, t));
      }
      return r;
    }
  });
  var Wr = c((Hr) => {
    "use strict";
    Hr.__esModule = !0;
    Hr.default = gy;
    function gy() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        a = t.slice(0, -1);
      return function () {
        return a.reduceRight(function (i, o) {
          return o(i);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var $o = c((zr) => {
    "use strict";
    zr.__esModule = !0;
    var Ey =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    zr.default = _y;
    var yy = Wr(),
      Iy = vy(yy);
    function vy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _y() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (a, i, o) {
          var s = r(a, i, o),
            u = s.dispatch,
            l = [],
            y = {
              getState: s.getState,
              dispatch: function (p) {
                return u(p);
              },
            };
          return (
            (l = t.map(function (g) {
              return g(y);
            })),
            (u = Iy.default.apply(void 0, l)(s.dispatch)),
            Ey({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Yr = c((Le) => {
    "use strict";
    Le.__esModule = !0;
    Le.compose =
      Le.applyMiddleware =
      Le.bindActionCreators =
      Le.combineReducers =
      Le.createStore =
        void 0;
    var my = Ur(),
      hy = Tt(my),
      Ty = Ko(),
      by = Tt(Ty),
      Oy = Qo(),
      Ay = Tt(Oy),
      Sy = $o(),
      Ry = Tt(Sy),
      Ny = Wr(),
      Ly = Tt(Ny),
      Cy = kr(),
      uP = Tt(Cy);
    function Tt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Le.createStore = hy.default;
    Le.combineReducers = by.default;
    Le.bindActionCreators = Ay.default;
    Le.applyMiddleware = Ry.default;
    Le.compose = Ly.default;
  });
  var Zo = c((Kr) => {
    "use strict";
    Object.defineProperty(Kr, "__esModule", { value: !0 });
    function wy(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    wy(Kr, {
      EventAppliesTo: function () {
        return My;
      },
      EventBasedOn: function () {
        return Dy;
      },
      EventContinuousMouseAxes: function () {
        return xy;
      },
      EventLimitAffectedElements: function () {
        return Fy;
      },
      EventTypeConsts: function () {
        return Py;
      },
      QuickEffectDirectionConsts: function () {
        return qy;
      },
      QuickEffectIds: function () {
        return Gy;
      },
    });
    var Py = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      },
      My = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
      Dy = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
      xy = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
      Fy = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      },
      Gy = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      },
      qy = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      };
  });
  var Qr = c((jr) => {
    "use strict";
    Object.defineProperty(jr, "__esModule", { value: !0 });
    function Uy(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Uy(jr, {
      ActionAppliesTo: function () {
        return ky;
      },
      ActionTypeConsts: function () {
        return Vy;
      },
    });
    var Vy = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      },
      ky = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      };
  });
  var Jo = c(($r) => {
    "use strict";
    Object.defineProperty($r, "__esModule", { value: !0 });
    Object.defineProperty($r, "InteractionTypeConsts", {
      enumerable: !0,
      get: function () {
        return By;
      },
    });
    var By = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
  });
  var es = c((Zr) => {
    "use strict";
    Object.defineProperty(Zr, "__esModule", { value: !0 });
    Object.defineProperty(Zr, "ReducedMotionTypes", {
      enumerable: !0,
      get: function () {
        return $y;
      },
    });
    var Xy = Qr(),
      {
        TRANSFORM_MOVE: Hy,
        TRANSFORM_SCALE: Wy,
        TRANSFORM_ROTATE: zy,
        TRANSFORM_SKEW: Yy,
        STYLE_SIZE: Ky,
        STYLE_FILTER: jy,
        STYLE_FONT_VARIATION: Qy,
      } = Xy.ActionTypeConsts,
      $y = {
        [Hy]: !0,
        [Wy]: !0,
        [zy]: !0,
        [Yy]: !0,
        [Ky]: !0,
        [jy]: !0,
        [Qy]: !0,
      };
  });
  var ts = c((Jr) => {
    "use strict";
    Object.defineProperty(Jr, "__esModule", { value: !0 });
    function Zy(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Zy(Jr, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
        return EI;
      },
      IX2_ANIMATION_FRAME_CHANGED: function () {
        return cI;
      },
      IX2_CLEAR_REQUESTED: function () {
        return oI;
      },
      IX2_ELEMENT_STATE_CHANGED: function () {
        return gI;
      },
      IX2_EVENT_LISTENER_ADDED: function () {
        return sI;
      },
      IX2_EVENT_STATE_CHANGED: function () {
        return uI;
      },
      IX2_INSTANCE_ADDED: function () {
        return dI;
      },
      IX2_INSTANCE_REMOVED: function () {
        return pI;
      },
      IX2_INSTANCE_STARTED: function () {
        return fI;
      },
      IX2_MEDIA_QUERIES_DEFINED: function () {
        return II;
      },
      IX2_PARAMETER_CHANGED: function () {
        return lI;
      },
      IX2_PLAYBACK_REQUESTED: function () {
        return iI;
      },
      IX2_PREVIEW_REQUESTED: function () {
        return rI;
      },
      IX2_RAW_DATA_IMPORTED: function () {
        return Jy;
      },
      IX2_SESSION_INITIALIZED: function () {
        return eI;
      },
      IX2_SESSION_STARTED: function () {
        return tI;
      },
      IX2_SESSION_STOPPED: function () {
        return nI;
      },
      IX2_STOP_REQUESTED: function () {
        return aI;
      },
      IX2_TEST_FRAME_RENDERED: function () {
        return vI;
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function () {
        return yI;
      },
    });
    var Jy = "IX2_RAW_DATA_IMPORTED",
      eI = "IX2_SESSION_INITIALIZED",
      tI = "IX2_SESSION_STARTED",
      nI = "IX2_SESSION_STOPPED",
      rI = "IX2_PREVIEW_REQUESTED",
      iI = "IX2_PLAYBACK_REQUESTED",
      aI = "IX2_STOP_REQUESTED",
      oI = "IX2_CLEAR_REQUESTED",
      sI = "IX2_EVENT_LISTENER_ADDED",
      uI = "IX2_EVENT_STATE_CHANGED",
      cI = "IX2_ANIMATION_FRAME_CHANGED",
      lI = "IX2_PARAMETER_CHANGED",
      dI = "IX2_INSTANCE_ADDED",
      fI = "IX2_INSTANCE_STARTED",
      pI = "IX2_INSTANCE_REMOVED",
      gI = "IX2_ELEMENT_STATE_CHANGED",
      EI = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      yI = "IX2_VIEWPORT_WIDTH_CHANGED",
      II = "IX2_MEDIA_QUERIES_DEFINED",
      vI = "IX2_TEST_FRAME_RENDERED";
  });
  var ns = c((ei) => {
    "use strict";
    Object.defineProperty(ei, "__esModule", { value: !0 });
    function _I(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    _I(ei, {
      ABSTRACT_NODE: function () {
        return Iv;
      },
      AUTO: function () {
        return ov;
      },
      BACKGROUND: function () {
        return ev;
      },
      BACKGROUND_COLOR: function () {
        return JI;
      },
      BAR_DELIMITER: function () {
        return cv;
      },
      BORDER_COLOR: function () {
        return tv;
      },
      BOUNDARY_SELECTOR: function () {
        return OI;
      },
      CHILDREN: function () {
        return lv;
      },
      COLON_DELIMITER: function () {
        return uv;
      },
      COLOR: function () {
        return nv;
      },
      COMMA_DELIMITER: function () {
        return sv;
      },
      CONFIG_UNIT: function () {
        return PI;
      },
      CONFIG_VALUE: function () {
        return NI;
      },
      CONFIG_X_UNIT: function () {
        return LI;
      },
      CONFIG_X_VALUE: function () {
        return AI;
      },
      CONFIG_Y_UNIT: function () {
        return CI;
      },
      CONFIG_Y_VALUE: function () {
        return SI;
      },
      CONFIG_Z_UNIT: function () {
        return wI;
      },
      CONFIG_Z_VALUE: function () {
        return RI;
      },
      DISPLAY: function () {
        return rv;
      },
      FILTER: function () {
        return jI;
      },
      FLEX: function () {
        return iv;
      },
      FONT_VARIATION_SETTINGS: function () {
        return QI;
      },
      HEIGHT: function () {
        return ZI;
      },
      HTML_ELEMENT: function () {
        return Ev;
      },
      IMMEDIATE_CHILDREN: function () {
        return dv;
      },
      IX2_ID_DELIMITER: function () {
        return mI;
      },
      OPACITY: function () {
        return KI;
      },
      PARENT: function () {
        return pv;
      },
      PLAIN_OBJECT: function () {
        return yv;
      },
      PRESERVE_3D: function () {
        return gv;
      },
      RENDER_GENERAL: function () {
        return _v;
      },
      RENDER_PLUGIN: function () {
        return hv;
      },
      RENDER_STYLE: function () {
        return mv;
      },
      RENDER_TRANSFORM: function () {
        return vv;
      },
      ROTATE_X: function () {
        return BI;
      },
      ROTATE_Y: function () {
        return XI;
      },
      ROTATE_Z: function () {
        return HI;
      },
      SCALE_3D: function () {
        return kI;
      },
      SCALE_X: function () {
        return qI;
      },
      SCALE_Y: function () {
        return UI;
      },
      SCALE_Z: function () {
        return VI;
      },
      SIBLINGS: function () {
        return fv;
      },
      SKEW: function () {
        return WI;
      },
      SKEW_X: function () {
        return zI;
      },
      SKEW_Y: function () {
        return YI;
      },
      TRANSFORM: function () {
        return MI;
      },
      TRANSLATE_3D: function () {
        return GI;
      },
      TRANSLATE_X: function () {
        return DI;
      },
      TRANSLATE_Y: function () {
        return xI;
      },
      TRANSLATE_Z: function () {
        return FI;
      },
      WF_PAGE: function () {
        return hI;
      },
      WIDTH: function () {
        return $I;
      },
      WILL_CHANGE: function () {
        return av;
      },
      W_MOD_IX: function () {
        return bI;
      },
      W_MOD_JS: function () {
        return TI;
      },
    });
    var mI = "|",
      hI = "data-wf-page",
      TI = "w-mod-js",
      bI = "w-mod-ix",
      OI = ".w-dyn-item",
      AI = "xValue",
      SI = "yValue",
      RI = "zValue",
      NI = "value",
      LI = "xUnit",
      CI = "yUnit",
      wI = "zUnit",
      PI = "unit",
      MI = "transform",
      DI = "translateX",
      xI = "translateY",
      FI = "translateZ",
      GI = "translate3d",
      qI = "scaleX",
      UI = "scaleY",
      VI = "scaleZ",
      kI = "scale3d",
      BI = "rotateX",
      XI = "rotateY",
      HI = "rotateZ",
      WI = "skew",
      zI = "skewX",
      YI = "skewY",
      KI = "opacity",
      jI = "filter",
      QI = "font-variation-settings",
      $I = "width",
      ZI = "height",
      JI = "backgroundColor",
      ev = "background",
      tv = "borderColor",
      nv = "color",
      rv = "display",
      iv = "flex",
      av = "willChange",
      ov = "AUTO",
      sv = ",",
      uv = ":",
      cv = "|",
      lv = "CHILDREN",
      dv = "IMMEDIATE_CHILDREN",
      fv = "SIBLINGS",
      pv = "PARENT",
      gv = "preserve-3d",
      Ev = "HTML_ELEMENT",
      yv = "PLAIN_OBJECT",
      Iv = "ABSTRACT_NODE",
      vv = "RENDER_TRANSFORM",
      _v = "RENDER_GENERAL",
      mv = "RENDER_STYLE",
      hv = "RENDER_PLUGIN";
  });
  var Oe = c((ot) => {
    "use strict";
    Object.defineProperty(ot, "__esModule", { value: !0 });
    function Tv(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Tv(ot, {
      ActionTypeConsts: function () {
        return Ov.ActionTypeConsts;
      },
      IX2EngineActionTypes: function () {
        return Av;
      },
      IX2EngineConstants: function () {
        return Sv;
      },
      QuickEffectIds: function () {
        return bv.QuickEffectIds;
      },
    });
    var bv = mn(Zo(), ot),
      Ov = mn(Qr(), ot);
    mn(Jo(), ot);
    mn(es(), ot);
    var Av = is(ts()),
      Sv = is(ns());
    function mn(e, t) {
      return (
        Object.keys(e).forEach(function (n) {
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(t, n) &&
            Object.defineProperty(t, n, {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            });
        }),
        e
      );
    }
    function rs(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (rs = function (r) {
        return r ? n : t;
      })(e);
    }
    function is(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = rs(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var as = c((ti) => {
    "use strict";
    Object.defineProperty(ti, "__esModule", { value: !0 });
    Object.defineProperty(ti, "ixData", {
      enumerable: !0,
      get: function () {
        return Lv;
      },
    });
    var Rv = Oe(),
      { IX2_RAW_DATA_IMPORTED: Nv } = Rv.IX2EngineActionTypes,
      Lv = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case Nv:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
  });
  var bt = c((fe) => {
    "use strict";
    Object.defineProperty(fe, "__esModule", { value: !0 });
    var Cv =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    fe.clone = Tn;
    fe.addLast = us;
    fe.addFirst = cs;
    fe.removeLast = ls;
    fe.removeFirst = ds;
    fe.insert = fs;
    fe.removeAt = ps;
    fe.replaceAt = gs;
    fe.getIn = bn;
    fe.set = On;
    fe.setIn = An;
    fe.update = ys;
    fe.updateIn = Is;
    fe.merge = vs;
    fe.mergeDeep = _s;
    fe.mergeIn = ms;
    fe.omit = hs;
    fe.addDefaults = Ts;
    var os = "INVALID_ARGS";
    function ss(e) {
      throw new Error(e);
    }
    function ni(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var wv = {}.hasOwnProperty;
    function Tn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ni(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        n[a] = e[a];
      }
      return n;
    }
    function Ae(e, t, n) {
      var r = n;
      r == null && ss(os);
      for (
        var a = !1, i = arguments.length, o = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        o[s - 3] = arguments[s];
      for (var u = 0; u < o.length; u++) {
        var l = o[u];
        if (l != null) {
          var y = ni(l);
          if (y.length)
            for (var g = 0; g <= y.length; g++) {
              var p = y[g];
              if (!(e && r[p] !== void 0)) {
                var I = l[p];
                t && hn(r[p]) && hn(I) && (I = Ae(e, t, r[p], I)),
                  !(I === void 0 || I === r[p]) &&
                    (a || ((a = !0), (r = Tn(r))), (r[p] = I));
              }
            }
        }
      }
      return r;
    }
    function hn(e) {
      var t = typeof e > "u" ? "undefined" : Cv(e);
      return e != null && (t === "object" || t === "function");
    }
    function us(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function cs(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function ls(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function ds(e) {
      return e.length ? e.slice(1) : e;
    }
    function fs(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function ps(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function gs(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, a = Array(r), i = 0; i < r; i++) a[i] = e[i];
      return (a[t] = n), a;
    }
    function bn(e, t) {
      if ((!Array.isArray(t) && ss(os), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var a = t[r];
          if (((n = n?.[a]), n === void 0)) return n;
        }
        return n;
      }
    }
    function On(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        a = e ?? r;
      if (a[t] === n) return a;
      var i = Tn(a);
      return (i[t] = n), i;
    }
    function Es(e, t, n, r) {
      var a = void 0,
        i = t[r];
      if (r === t.length - 1) a = n;
      else {
        var o =
          hn(e) && hn(e[i]) ? e[i] : typeof t[r + 1] == "number" ? [] : {};
        a = Es(o, t, n, r + 1);
      }
      return On(e, i, a);
    }
    function An(e, t, n) {
      return t.length ? Es(e, t, n, 0) : n;
    }
    function ys(e, t, n) {
      var r = e?.[t],
        a = n(r);
      return On(e, t, a);
    }
    function Is(e, t, n) {
      var r = bn(e, t),
        a = n(r);
      return An(e, t, a);
    }
    function vs(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ae.call.apply(Ae, [null, !1, !1, e, t, n, r, a, i].concat(s))
        : Ae(!1, !1, e, t, n, r, a, i);
    }
    function _s(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ae.call.apply(Ae, [null, !1, !0, e, t, n, r, a, i].concat(s))
        : Ae(!1, !0, e, t, n, r, a, i);
    }
    function ms(e, t, n, r, a, i, o) {
      var s = bn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          l = arguments.length,
          y = Array(l > 7 ? l - 7 : 0),
          g = 7;
        g < l;
        g++
      )
        y[g - 7] = arguments[g];
      return (
        y.length
          ? (u = Ae.call.apply(Ae, [null, !1, !1, s, n, r, a, i, o].concat(y)))
          : (u = Ae(!1, !1, s, n, r, a, i, o)),
        An(e, t, u)
      );
    }
    function hs(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, a = 0; a < n.length; a++)
        if (wv.call(e, n[a])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var i = {}, o = ni(e), s = 0; s < o.length; s++) {
        var u = o[s];
        n.indexOf(u) >= 0 || (i[u] = e[u]);
      }
      return i;
    }
    function Ts(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ae.call.apply(Ae, [null, !0, !1, e, t, n, r, a, i].concat(s))
        : Ae(!0, !1, e, t, n, r, a, i);
    }
    var Pv = {
      clone: Tn,
      addLast: us,
      addFirst: cs,
      removeLast: ls,
      removeFirst: ds,
      insert: fs,
      removeAt: ps,
      replaceAt: gs,
      getIn: bn,
      set: On,
      setIn: An,
      update: ys,
      updateIn: Is,
      merge: vs,
      mergeDeep: _s,
      mergeIn: ms,
      omit: hs,
      addDefaults: Ts,
    };
    fe.default = Pv;
  });
  var Os = c((ri) => {
    "use strict";
    Object.defineProperty(ri, "__esModule", { value: !0 });
    Object.defineProperty(ri, "ixRequest", {
      enumerable: !0,
      get: function () {
        return Vv;
      },
    });
    var Mv = Oe(),
      Dv = bt(),
      {
        IX2_PREVIEW_REQUESTED: xv,
        IX2_PLAYBACK_REQUESTED: Fv,
        IX2_STOP_REQUESTED: Gv,
        IX2_CLEAR_REQUESTED: qv,
      } = Mv.IX2EngineActionTypes,
      Uv = { preview: {}, playback: {}, stop: {}, clear: {} },
      bs = Object.create(null, {
        [xv]: { value: "preview" },
        [Fv]: { value: "playback" },
        [Gv]: { value: "stop" },
        [qv]: { value: "clear" },
      }),
      Vv = (e = Uv, t) => {
        if (t.type in bs) {
          let n = [bs[t.type]];
          return (0, Dv.setIn)(e, [n], { ...t.payload });
        }
        return e;
      };
  });
  var Ss = c((ii) => {
    "use strict";
    Object.defineProperty(ii, "__esModule", { value: !0 });
    Object.defineProperty(ii, "ixSession", {
      enumerable: !0,
      get: function () {
        return Jv;
      },
    });
    var kv = Oe(),
      Ve = bt(),
      {
        IX2_SESSION_INITIALIZED: Bv,
        IX2_SESSION_STARTED: Xv,
        IX2_TEST_FRAME_RENDERED: Hv,
        IX2_SESSION_STOPPED: Wv,
        IX2_EVENT_LISTENER_ADDED: zv,
        IX2_EVENT_STATE_CHANGED: Yv,
        IX2_ANIMATION_FRAME_CHANGED: Kv,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: jv,
        IX2_VIEWPORT_WIDTH_CHANGED: Qv,
        IX2_MEDIA_QUERIES_DEFINED: $v,
      } = kv.IX2EngineActionTypes,
      As = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      Zv = 20,
      Jv = (e = As, t) => {
        switch (t.type) {
          case Bv: {
            let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
            return (0, Ve.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
          }
          case Xv:
            return (0, Ve.set)(e, "active", !0);
          case Hv: {
            let {
              payload: { step: n = Zv },
            } = t;
            return (0, Ve.set)(e, "tick", e.tick + n);
          }
          case Wv:
            return As;
          case Kv: {
            let {
              payload: { now: n },
            } = t;
            return (0, Ve.set)(e, "tick", n);
          }
          case zv: {
            let n = (0, Ve.addLast)(e.eventListeners, t.payload);
            return (0, Ve.set)(e, "eventListeners", n);
          }
          case Yv: {
            let { stateKey: n, newState: r } = t.payload;
            return (0, Ve.setIn)(e, ["eventState", n], r);
          }
          case jv: {
            let { actionListId: n, isPlaying: r } = t.payload;
            return (0, Ve.setIn)(e, ["playbackState", n], r);
          }
          case Qv: {
            let { width: n, mediaQueries: r } = t.payload,
              a = r.length,
              i = null;
            for (let o = 0; o < a; o++) {
              let { key: s, min: u, max: l } = r[o];
              if (n >= u && n <= l) {
                i = s;
                break;
              }
            }
            return (0, Ve.merge)(e, { viewportWidth: n, mediaQueryKey: i });
          }
          case $v:
            return (0, Ve.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
  });
  var Ns = c((hP, Rs) => {
    function e_() {
      (this.__data__ = []), (this.size = 0);
    }
    Rs.exports = e_;
  });
  var Sn = c((TP, Ls) => {
    function t_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Ls.exports = t_;
  });
  var zt = c((bP, Cs) => {
    var n_ = Sn();
    function r_(e, t) {
      for (var n = e.length; n--; ) if (n_(e[n][0], t)) return n;
      return -1;
    }
    Cs.exports = r_;
  });
  var Ps = c((OP, ws) => {
    var i_ = zt(),
      a_ = Array.prototype,
      o_ = a_.splice;
    function s_(e) {
      var t = this.__data__,
        n = i_(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : o_.call(t, n, 1), --this.size, !0;
    }
    ws.exports = s_;
  });
  var Ds = c((AP, Ms) => {
    var u_ = zt();
    function c_(e) {
      var t = this.__data__,
        n = u_(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Ms.exports = c_;
  });
  var Fs = c((SP, xs) => {
    var l_ = zt();
    function d_(e) {
      return l_(this.__data__, e) > -1;
    }
    xs.exports = d_;
  });
  var qs = c((RP, Gs) => {
    var f_ = zt();
    function p_(e, t) {
      var n = this.__data__,
        r = f_(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    Gs.exports = p_;
  });
  var Yt = c((NP, Us) => {
    var g_ = Ns(),
      E_ = Ps(),
      y_ = Ds(),
      I_ = Fs(),
      v_ = qs();
    function Ot(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Ot.prototype.clear = g_;
    Ot.prototype.delete = E_;
    Ot.prototype.get = y_;
    Ot.prototype.has = I_;
    Ot.prototype.set = v_;
    Us.exports = Ot;
  });
  var ks = c((LP, Vs) => {
    var __ = Yt();
    function m_() {
      (this.__data__ = new __()), (this.size = 0);
    }
    Vs.exports = m_;
  });
  var Xs = c((CP, Bs) => {
    function h_(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    Bs.exports = h_;
  });
  var Ws = c((wP, Hs) => {
    function T_(e) {
      return this.__data__.get(e);
    }
    Hs.exports = T_;
  });
  var Ys = c((PP, zs) => {
    function b_(e) {
      return this.__data__.has(e);
    }
    zs.exports = b_;
  });
  var ke = c((MP, Ks) => {
    function O_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Ks.exports = O_;
  });
  var ai = c((DP, js) => {
    var A_ = Ze(),
      S_ = ke(),
      R_ = "[object AsyncFunction]",
      N_ = "[object Function]",
      L_ = "[object GeneratorFunction]",
      C_ = "[object Proxy]";
    function w_(e) {
      if (!S_(e)) return !1;
      var t = A_(e);
      return t == N_ || t == L_ || t == R_ || t == C_;
    }
    js.exports = w_;
  });
  var $s = c((xP, Qs) => {
    var P_ = xe(),
      M_ = P_["__core-js_shared__"];
    Qs.exports = M_;
  });
  var eu = c((FP, Js) => {
    var oi = $s(),
      Zs = (function () {
        var e = /[^.]+$/.exec((oi && oi.keys && oi.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function D_(e) {
      return !!Zs && Zs in e;
    }
    Js.exports = D_;
  });
  var si = c((GP, tu) => {
    var x_ = Function.prototype,
      F_ = x_.toString;
    function G_(e) {
      if (e != null) {
        try {
          return F_.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    tu.exports = G_;
  });
  var ru = c((qP, nu) => {
    var q_ = ai(),
      U_ = eu(),
      V_ = ke(),
      k_ = si(),
      B_ = /[\\^$.*+?()[\]{}|]/g,
      X_ = /^\[object .+?Constructor\]$/,
      H_ = Function.prototype,
      W_ = Object.prototype,
      z_ = H_.toString,
      Y_ = W_.hasOwnProperty,
      K_ = RegExp(
        "^" +
          z_
            .call(Y_)
            .replace(B_, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function j_(e) {
      if (!V_(e) || U_(e)) return !1;
      var t = q_(e) ? K_ : X_;
      return t.test(k_(e));
    }
    nu.exports = j_;
  });
  var au = c((UP, iu) => {
    function Q_(e, t) {
      return e?.[t];
    }
    iu.exports = Q_;
  });
  var Je = c((VP, ou) => {
    var $_ = ru(),
      Z_ = au();
    function J_(e, t) {
      var n = Z_(e, t);
      return $_(n) ? n : void 0;
    }
    ou.exports = J_;
  });
  var Rn = c((kP, su) => {
    var em = Je(),
      tm = xe(),
      nm = em(tm, "Map");
    su.exports = nm;
  });
  var Kt = c((BP, uu) => {
    var rm = Je(),
      im = rm(Object, "create");
    uu.exports = im;
  });
  var du = c((XP, lu) => {
    var cu = Kt();
    function am() {
      (this.__data__ = cu ? cu(null) : {}), (this.size = 0);
    }
    lu.exports = am;
  });
  var pu = c((HP, fu) => {
    function om(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    fu.exports = om;
  });
  var Eu = c((WP, gu) => {
    var sm = Kt(),
      um = "__lodash_hash_undefined__",
      cm = Object.prototype,
      lm = cm.hasOwnProperty;
    function dm(e) {
      var t = this.__data__;
      if (sm) {
        var n = t[e];
        return n === um ? void 0 : n;
      }
      return lm.call(t, e) ? t[e] : void 0;
    }
    gu.exports = dm;
  });
  var Iu = c((zP, yu) => {
    var fm = Kt(),
      pm = Object.prototype,
      gm = pm.hasOwnProperty;
    function Em(e) {
      var t = this.__data__;
      return fm ? t[e] !== void 0 : gm.call(t, e);
    }
    yu.exports = Em;
  });
  var _u = c((YP, vu) => {
    var ym = Kt(),
      Im = "__lodash_hash_undefined__";
    function vm(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = ym && t === void 0 ? Im : t),
        this
      );
    }
    vu.exports = vm;
  });
  var hu = c((KP, mu) => {
    var _m = du(),
      mm = pu(),
      hm = Eu(),
      Tm = Iu(),
      bm = _u();
    function At(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    At.prototype.clear = _m;
    At.prototype.delete = mm;
    At.prototype.get = hm;
    At.prototype.has = Tm;
    At.prototype.set = bm;
    mu.exports = At;
  });
  var Ou = c((jP, bu) => {
    var Tu = hu(),
      Om = Yt(),
      Am = Rn();
    function Sm() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Tu(),
          map: new (Am || Om)(),
          string: new Tu(),
        });
    }
    bu.exports = Sm;
  });
  var Su = c((QP, Au) => {
    function Rm(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Au.exports = Rm;
  });
  var jt = c(($P, Ru) => {
    var Nm = Su();
    function Lm(e, t) {
      var n = e.__data__;
      return Nm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    Ru.exports = Lm;
  });
  var Lu = c((ZP, Nu) => {
    var Cm = jt();
    function wm(e) {
      var t = Cm(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Nu.exports = wm;
  });
  var wu = c((JP, Cu) => {
    var Pm = jt();
    function Mm(e) {
      return Pm(this, e).get(e);
    }
    Cu.exports = Mm;
  });
  var Mu = c((e4, Pu) => {
    var Dm = jt();
    function xm(e) {
      return Dm(this, e).has(e);
    }
    Pu.exports = xm;
  });
  var xu = c((t4, Du) => {
    var Fm = jt();
    function Gm(e, t) {
      var n = Fm(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    Du.exports = Gm;
  });
  var Nn = c((n4, Fu) => {
    var qm = Ou(),
      Um = Lu(),
      Vm = wu(),
      km = Mu(),
      Bm = xu();
    function St(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    St.prototype.clear = qm;
    St.prototype.delete = Um;
    St.prototype.get = Vm;
    St.prototype.has = km;
    St.prototype.set = Bm;
    Fu.exports = St;
  });
  var qu = c((r4, Gu) => {
    var Xm = Yt(),
      Hm = Rn(),
      Wm = Nn(),
      zm = 200;
    function Ym(e, t) {
      var n = this.__data__;
      if (n instanceof Xm) {
        var r = n.__data__;
        if (!Hm || r.length < zm - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new Wm(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    Gu.exports = Ym;
  });
  var ui = c((i4, Uu) => {
    var Km = Yt(),
      jm = ks(),
      Qm = Xs(),
      $m = Ws(),
      Zm = Ys(),
      Jm = qu();
    function Rt(e) {
      var t = (this.__data__ = new Km(e));
      this.size = t.size;
    }
    Rt.prototype.clear = jm;
    Rt.prototype.delete = Qm;
    Rt.prototype.get = $m;
    Rt.prototype.has = Zm;
    Rt.prototype.set = Jm;
    Uu.exports = Rt;
  });
  var ku = c((a4, Vu) => {
    var eh = "__lodash_hash_undefined__";
    function th(e) {
      return this.__data__.set(e, eh), this;
    }
    Vu.exports = th;
  });
  var Xu = c((o4, Bu) => {
    function nh(e) {
      return this.__data__.has(e);
    }
    Bu.exports = nh;
  });
  var Wu = c((s4, Hu) => {
    var rh = Nn(),
      ih = ku(),
      ah = Xu();
    function Ln(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new rh(); ++t < n; ) this.add(e[t]);
    }
    Ln.prototype.add = Ln.prototype.push = ih;
    Ln.prototype.has = ah;
    Hu.exports = Ln;
  });
  var Yu = c((u4, zu) => {
    function oh(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    zu.exports = oh;
  });
  var ju = c((c4, Ku) => {
    function sh(e, t) {
      return e.has(t);
    }
    Ku.exports = sh;
  });
  var ci = c((l4, Qu) => {
    var uh = Wu(),
      ch = Yu(),
      lh = ju(),
      dh = 1,
      fh = 2;
    function ph(e, t, n, r, a, i) {
      var o = n & dh,
        s = e.length,
        u = t.length;
      if (s != u && !(o && u > s)) return !1;
      var l = i.get(e),
        y = i.get(t);
      if (l && y) return l == t && y == e;
      var g = -1,
        p = !0,
        I = n & fh ? new uh() : void 0;
      for (i.set(e, t), i.set(t, e); ++g < s; ) {
        var _ = e[g],
          m = t[g];
        if (r) var O = o ? r(m, _, g, t, e, i) : r(_, m, g, e, t, i);
        if (O !== void 0) {
          if (O) continue;
          p = !1;
          break;
        }
        if (I) {
          if (
            !ch(t, function (v, S) {
              if (!lh(I, S) && (_ === v || a(_, v, n, r, i))) return I.push(S);
            })
          ) {
            p = !1;
            break;
          }
        } else if (!(_ === m || a(_, m, n, r, i))) {
          p = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), p;
    }
    Qu.exports = ph;
  });
  var Zu = c((d4, $u) => {
    var gh = xe(),
      Eh = gh.Uint8Array;
    $u.exports = Eh;
  });
  var ec = c((f4, Ju) => {
    function yh(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, a) {
          n[++t] = [a, r];
        }),
        n
      );
    }
    Ju.exports = yh;
  });
  var nc = c((p4, tc) => {
    function Ih(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    tc.exports = Ih;
  });
  var sc = c((g4, oc) => {
    var rc = mt(),
      ic = Zu(),
      vh = Sn(),
      _h = ci(),
      mh = ec(),
      hh = nc(),
      Th = 1,
      bh = 2,
      Oh = "[object Boolean]",
      Ah = "[object Date]",
      Sh = "[object Error]",
      Rh = "[object Map]",
      Nh = "[object Number]",
      Lh = "[object RegExp]",
      Ch = "[object Set]",
      wh = "[object String]",
      Ph = "[object Symbol]",
      Mh = "[object ArrayBuffer]",
      Dh = "[object DataView]",
      ac = rc ? rc.prototype : void 0,
      li = ac ? ac.valueOf : void 0;
    function xh(e, t, n, r, a, i, o) {
      switch (n) {
        case Dh:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case Mh:
          return !(e.byteLength != t.byteLength || !i(new ic(e), new ic(t)));
        case Oh:
        case Ah:
        case Nh:
          return vh(+e, +t);
        case Sh:
          return e.name == t.name && e.message == t.message;
        case Lh:
        case wh:
          return e == t + "";
        case Rh:
          var s = mh;
        case Ch:
          var u = r & Th;
          if ((s || (s = hh), e.size != t.size && !u)) return !1;
          var l = o.get(e);
          if (l) return l == t;
          (r |= bh), o.set(e, t);
          var y = _h(s(e), s(t), r, a, i, o);
          return o.delete(e), y;
        case Ph:
          if (li) return li.call(e) == li.call(t);
      }
      return !1;
    }
    oc.exports = xh;
  });
  var Cn = c((E4, uc) => {
    function Fh(e, t) {
      for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
      return e;
    }
    uc.exports = Fh;
  });
  var _e = c((y4, cc) => {
    var Gh = Array.isArray;
    cc.exports = Gh;
  });
  var di = c((I4, lc) => {
    var qh = Cn(),
      Uh = _e();
    function Vh(e, t, n) {
      var r = t(e);
      return Uh(e) ? r : qh(r, n(e));
    }
    lc.exports = Vh;
  });
  var fc = c((v4, dc) => {
    function kh(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
        var o = e[n];
        t(o, n, e) && (i[a++] = o);
      }
      return i;
    }
    dc.exports = kh;
  });
  var fi = c((_4, pc) => {
    function Bh() {
      return [];
    }
    pc.exports = Bh;
  });
  var pi = c((m4, Ec) => {
    var Xh = fc(),
      Hh = fi(),
      Wh = Object.prototype,
      zh = Wh.propertyIsEnumerable,
      gc = Object.getOwnPropertySymbols,
      Yh = gc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                Xh(gc(e), function (t) {
                  return zh.call(e, t);
                }));
          }
        : Hh;
    Ec.exports = Yh;
  });
  var Ic = c((h4, yc) => {
    function Kh(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    yc.exports = Kh;
  });
  var _c = c((T4, vc) => {
    var jh = Ze(),
      Qh = Ye(),
      $h = "[object Arguments]";
    function Zh(e) {
      return Qh(e) && jh(e) == $h;
    }
    vc.exports = Zh;
  });
  var Qt = c((b4, Tc) => {
    var mc = _c(),
      Jh = Ye(),
      hc = Object.prototype,
      eT = hc.hasOwnProperty,
      tT = hc.propertyIsEnumerable,
      nT = mc(
        (function () {
          return arguments;
        })()
      )
        ? mc
        : function (e) {
            return Jh(e) && eT.call(e, "callee") && !tT.call(e, "callee");
          };
    Tc.exports = nT;
  });
  var Oc = c((O4, bc) => {
    function rT() {
      return !1;
    }
    bc.exports = rT;
  });
  var wn = c(($t, Nt) => {
    var iT = xe(),
      aT = Oc(),
      Rc = typeof $t == "object" && $t && !$t.nodeType && $t,
      Ac = Rc && typeof Nt == "object" && Nt && !Nt.nodeType && Nt,
      oT = Ac && Ac.exports === Rc,
      Sc = oT ? iT.Buffer : void 0,
      sT = Sc ? Sc.isBuffer : void 0,
      uT = sT || aT;
    Nt.exports = uT;
  });
  var Pn = c((A4, Nc) => {
    var cT = 9007199254740991,
      lT = /^(?:0|[1-9]\d*)$/;
    function dT(e, t) {
      var n = typeof e;
      return (
        (t = t ?? cT),
        !!t &&
          (n == "number" || (n != "symbol" && lT.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Nc.exports = dT;
  });
  var Mn = c((S4, Lc) => {
    var fT = 9007199254740991;
    function pT(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fT;
    }
    Lc.exports = pT;
  });
  var wc = c((R4, Cc) => {
    var gT = Ze(),
      ET = Mn(),
      yT = Ye(),
      IT = "[object Arguments]",
      vT = "[object Array]",
      _T = "[object Boolean]",
      mT = "[object Date]",
      hT = "[object Error]",
      TT = "[object Function]",
      bT = "[object Map]",
      OT = "[object Number]",
      AT = "[object Object]",
      ST = "[object RegExp]",
      RT = "[object Set]",
      NT = "[object String]",
      LT = "[object WeakMap]",
      CT = "[object ArrayBuffer]",
      wT = "[object DataView]",
      PT = "[object Float32Array]",
      MT = "[object Float64Array]",
      DT = "[object Int8Array]",
      xT = "[object Int16Array]",
      FT = "[object Int32Array]",
      GT = "[object Uint8Array]",
      qT = "[object Uint8ClampedArray]",
      UT = "[object Uint16Array]",
      VT = "[object Uint32Array]",
      ce = {};
    ce[PT] =
      ce[MT] =
      ce[DT] =
      ce[xT] =
      ce[FT] =
      ce[GT] =
      ce[qT] =
      ce[UT] =
      ce[VT] =
        !0;
    ce[IT] =
      ce[vT] =
      ce[CT] =
      ce[_T] =
      ce[wT] =
      ce[mT] =
      ce[hT] =
      ce[TT] =
      ce[bT] =
      ce[OT] =
      ce[AT] =
      ce[ST] =
      ce[RT] =
      ce[NT] =
      ce[LT] =
        !1;
    function kT(e) {
      return yT(e) && ET(e.length) && !!ce[gT(e)];
    }
    Cc.exports = kT;
  });
  var Mc = c((N4, Pc) => {
    function BT(e) {
      return function (t) {
        return e(t);
      };
    }
    Pc.exports = BT;
  });
  var xc = c((Zt, Lt) => {
    var XT = Pr(),
      Dc = typeof Zt == "object" && Zt && !Zt.nodeType && Zt,
      Jt = Dc && typeof Lt == "object" && Lt && !Lt.nodeType && Lt,
      HT = Jt && Jt.exports === Dc,
      gi = HT && XT.process,
      WT = (function () {
        try {
          var e = Jt && Jt.require && Jt.require("util").types;
          return e || (gi && gi.binding && gi.binding("util"));
        } catch {}
      })();
    Lt.exports = WT;
  });
  var Dn = c((L4, qc) => {
    var zT = wc(),
      YT = Mc(),
      Fc = xc(),
      Gc = Fc && Fc.isTypedArray,
      KT = Gc ? YT(Gc) : zT;
    qc.exports = KT;
  });
  var Ei = c((C4, Uc) => {
    var jT = Ic(),
      QT = Qt(),
      $T = _e(),
      ZT = wn(),
      JT = Pn(),
      eb = Dn(),
      tb = Object.prototype,
      nb = tb.hasOwnProperty;
    function rb(e, t) {
      var n = $T(e),
        r = !n && QT(e),
        a = !n && !r && ZT(e),
        i = !n && !r && !a && eb(e),
        o = n || r || a || i,
        s = o ? jT(e.length, String) : [],
        u = s.length;
      for (var l in e)
        (t || nb.call(e, l)) &&
          !(
            o &&
            (l == "length" ||
              (a && (l == "offset" || l == "parent")) ||
              (i &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              JT(l, u))
          ) &&
          s.push(l);
      return s;
    }
    Uc.exports = rb;
  });
  var xn = c((w4, Vc) => {
    var ib = Object.prototype;
    function ab(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || ib;
      return e === n;
    }
    Vc.exports = ab;
  });
  var Bc = c((P4, kc) => {
    var ob = Mr(),
      sb = ob(Object.keys, Object);
    kc.exports = sb;
  });
  var Fn = c((M4, Xc) => {
    var ub = xn(),
      cb = Bc(),
      lb = Object.prototype,
      db = lb.hasOwnProperty;
    function fb(e) {
      if (!ub(e)) return cb(e);
      var t = [];
      for (var n in Object(e)) db.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    Xc.exports = fb;
  });
  var st = c((D4, Hc) => {
    var pb = ai(),
      gb = Mn();
    function Eb(e) {
      return e != null && gb(e.length) && !pb(e);
    }
    Hc.exports = Eb;
  });
  var en = c((x4, Wc) => {
    var yb = Ei(),
      Ib = Fn(),
      vb = st();
    function _b(e) {
      return vb(e) ? yb(e) : Ib(e);
    }
    Wc.exports = _b;
  });
  var Yc = c((F4, zc) => {
    var mb = di(),
      hb = pi(),
      Tb = en();
    function bb(e) {
      return mb(e, Tb, hb);
    }
    zc.exports = bb;
  });
  var Qc = c((G4, jc) => {
    var Kc = Yc(),
      Ob = 1,
      Ab = Object.prototype,
      Sb = Ab.hasOwnProperty;
    function Rb(e, t, n, r, a, i) {
      var o = n & Ob,
        s = Kc(e),
        u = s.length,
        l = Kc(t),
        y = l.length;
      if (u != y && !o) return !1;
      for (var g = u; g--; ) {
        var p = s[g];
        if (!(o ? p in t : Sb.call(t, p))) return !1;
      }
      var I = i.get(e),
        _ = i.get(t);
      if (I && _) return I == t && _ == e;
      var m = !0;
      i.set(e, t), i.set(t, e);
      for (var O = o; ++g < u; ) {
        p = s[g];
        var v = e[p],
          S = t[p];
        if (r) var A = o ? r(S, v, p, t, e, i) : r(v, S, p, e, t, i);
        if (!(A === void 0 ? v === S || a(v, S, n, r, i) : A)) {
          m = !1;
          break;
        }
        O || (O = p == "constructor");
      }
      if (m && !O) {
        var N = e.constructor,
          x = t.constructor;
        N != x &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof N == "function" &&
            N instanceof N &&
            typeof x == "function" &&
            x instanceof x
          ) &&
          (m = !1);
      }
      return i.delete(e), i.delete(t), m;
    }
    jc.exports = Rb;
  });
  var Zc = c((q4, $c) => {
    var Nb = Je(),
      Lb = xe(),
      Cb = Nb(Lb, "DataView");
    $c.exports = Cb;
  });
  var el = c((U4, Jc) => {
    var wb = Je(),
      Pb = xe(),
      Mb = wb(Pb, "Promise");
    Jc.exports = Mb;
  });
  var nl = c((V4, tl) => {
    var Db = Je(),
      xb = xe(),
      Fb = Db(xb, "Set");
    tl.exports = Fb;
  });
  var yi = c((k4, rl) => {
    var Gb = Je(),
      qb = xe(),
      Ub = Gb(qb, "WeakMap");
    rl.exports = Ub;
  });
  var Gn = c((B4, ll) => {
    var Ii = Zc(),
      vi = Rn(),
      _i = el(),
      mi = nl(),
      hi = yi(),
      cl = Ze(),
      Ct = si(),
      il = "[object Map]",
      Vb = "[object Object]",
      al = "[object Promise]",
      ol = "[object Set]",
      sl = "[object WeakMap]",
      ul = "[object DataView]",
      kb = Ct(Ii),
      Bb = Ct(vi),
      Xb = Ct(_i),
      Hb = Ct(mi),
      Wb = Ct(hi),
      ut = cl;
    ((Ii && ut(new Ii(new ArrayBuffer(1))) != ul) ||
      (vi && ut(new vi()) != il) ||
      (_i && ut(_i.resolve()) != al) ||
      (mi && ut(new mi()) != ol) ||
      (hi && ut(new hi()) != sl)) &&
      (ut = function (e) {
        var t = cl(e),
          n = t == Vb ? e.constructor : void 0,
          r = n ? Ct(n) : "";
        if (r)
          switch (r) {
            case kb:
              return ul;
            case Bb:
              return il;
            case Xb:
              return al;
            case Hb:
              return ol;
            case Wb:
              return sl;
          }
        return t;
      });
    ll.exports = ut;
  });
  var vl = c((X4, Il) => {
    var Ti = ui(),
      zb = ci(),
      Yb = sc(),
      Kb = Qc(),
      dl = Gn(),
      fl = _e(),
      pl = wn(),
      jb = Dn(),
      Qb = 1,
      gl = "[object Arguments]",
      El = "[object Array]",
      qn = "[object Object]",
      $b = Object.prototype,
      yl = $b.hasOwnProperty;
    function Zb(e, t, n, r, a, i) {
      var o = fl(e),
        s = fl(t),
        u = o ? El : dl(e),
        l = s ? El : dl(t);
      (u = u == gl ? qn : u), (l = l == gl ? qn : l);
      var y = u == qn,
        g = l == qn,
        p = u == l;
      if (p && pl(e)) {
        if (!pl(t)) return !1;
        (o = !0), (y = !1);
      }
      if (p && !y)
        return (
          i || (i = new Ti()),
          o || jb(e) ? zb(e, t, n, r, a, i) : Yb(e, t, u, n, r, a, i)
        );
      if (!(n & Qb)) {
        var I = y && yl.call(e, "__wrapped__"),
          _ = g && yl.call(t, "__wrapped__");
        if (I || _) {
          var m = I ? e.value() : e,
            O = _ ? t.value() : t;
          return i || (i = new Ti()), a(m, O, n, r, i);
        }
      }
      return p ? (i || (i = new Ti()), Kb(e, t, n, r, a, i)) : !1;
    }
    Il.exports = Zb;
  });
  var bi = c((H4, hl) => {
    var Jb = vl(),
      _l = Ye();
    function ml(e, t, n, r, a) {
      return e === t
        ? !0
        : e == null || t == null || (!_l(e) && !_l(t))
        ? e !== e && t !== t
        : Jb(e, t, n, r, ml, a);
    }
    hl.exports = ml;
  });
  var bl = c((W4, Tl) => {
    var eO = ui(),
      tO = bi(),
      nO = 1,
      rO = 2;
    function iO(e, t, n, r) {
      var a = n.length,
        i = a,
        o = !r;
      if (e == null) return !i;
      for (e = Object(e); a--; ) {
        var s = n[a];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++a < i; ) {
        s = n[a];
        var u = s[0],
          l = e[u],
          y = s[1];
        if (o && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var g = new eO();
          if (r) var p = r(l, y, u, e, t, g);
          if (!(p === void 0 ? tO(y, l, nO | rO, r, g) : p)) return !1;
        }
      }
      return !0;
    }
    Tl.exports = iO;
  });
  var Oi = c((z4, Ol) => {
    var aO = ke();
    function oO(e) {
      return e === e && !aO(e);
    }
    Ol.exports = oO;
  });
  var Sl = c((Y4, Al) => {
    var sO = Oi(),
      uO = en();
    function cO(e) {
      for (var t = uO(e), n = t.length; n--; ) {
        var r = t[n],
          a = e[r];
        t[n] = [r, a, sO(a)];
      }
      return t;
    }
    Al.exports = cO;
  });
  var Ai = c((K4, Rl) => {
    function lO(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    Rl.exports = lO;
  });
  var Ll = c((j4, Nl) => {
    var dO = bl(),
      fO = Sl(),
      pO = Ai();
    function gO(e) {
      var t = fO(e);
      return t.length == 1 && t[0][2]
        ? pO(t[0][0], t[0][1])
        : function (n) {
            return n === e || dO(n, e, t);
          };
    }
    Nl.exports = gO;
  });
  var tn = c((Q4, Cl) => {
    var EO = Ze(),
      yO = Ye(),
      IO = "[object Symbol]";
    function vO(e) {
      return typeof e == "symbol" || (yO(e) && EO(e) == IO);
    }
    Cl.exports = vO;
  });
  var Un = c(($4, wl) => {
    var _O = _e(),
      mO = tn(),
      hO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      TO = /^\w*$/;
    function bO(e, t) {
      if (_O(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        mO(e)
        ? !0
        : TO.test(e) || !hO.test(e) || (t != null && e in Object(t));
    }
    wl.exports = bO;
  });
  var Dl = c((Z4, Ml) => {
    var Pl = Nn(),
      OO = "Expected a function";
    function Si(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(OO);
      var n = function () {
        var r = arguments,
          a = t ? t.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(a)) return i.get(a);
        var o = e.apply(this, r);
        return (n.cache = i.set(a, o) || i), o;
      };
      return (n.cache = new (Si.Cache || Pl)()), n;
    }
    Si.Cache = Pl;
    Ml.exports = Si;
  });
  var Fl = c((J4, xl) => {
    var AO = Dl(),
      SO = 500;
    function RO(e) {
      var t = AO(e, function (r) {
          return n.size === SO && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    xl.exports = RO;
  });
  var ql = c((e3, Gl) => {
    var NO = Fl(),
      LO =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      CO = /\\(\\)?/g,
      wO = NO(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(LO, function (n, r, a, i) {
            t.push(a ? i.replace(CO, "$1") : r || n);
          }),
          t
        );
      });
    Gl.exports = wO;
  });
  var Ri = c((t3, Ul) => {
    function PO(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
        a[n] = t(e[n], n, e);
      return a;
    }
    Ul.exports = PO;
  });
  var Wl = c((n3, Hl) => {
    var Vl = mt(),
      MO = Ri(),
      DO = _e(),
      xO = tn(),
      FO = 1 / 0,
      kl = Vl ? Vl.prototype : void 0,
      Bl = kl ? kl.toString : void 0;
    function Xl(e) {
      if (typeof e == "string") return e;
      if (DO(e)) return MO(e, Xl) + "";
      if (xO(e)) return Bl ? Bl.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -FO ? "-0" : t;
    }
    Hl.exports = Xl;
  });
  var Yl = c((r3, zl) => {
    var GO = Wl();
    function qO(e) {
      return e == null ? "" : GO(e);
    }
    zl.exports = qO;
  });
  var nn = c((i3, Kl) => {
    var UO = _e(),
      VO = Un(),
      kO = ql(),
      BO = Yl();
    function XO(e, t) {
      return UO(e) ? e : VO(e, t) ? [e] : kO(BO(e));
    }
    Kl.exports = XO;
  });
  var wt = c((a3, jl) => {
    var HO = tn(),
      WO = 1 / 0;
    function zO(e) {
      if (typeof e == "string" || HO(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -WO ? "-0" : t;
    }
    jl.exports = zO;
  });
  var Vn = c((o3, Ql) => {
    var YO = nn(),
      KO = wt();
    function jO(e, t) {
      t = YO(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[KO(t[n++])];
      return n && n == r ? e : void 0;
    }
    Ql.exports = jO;
  });
  var kn = c((s3, $l) => {
    var QO = Vn();
    function $O(e, t, n) {
      var r = e == null ? void 0 : QO(e, t);
      return r === void 0 ? n : r;
    }
    $l.exports = $O;
  });
  var Jl = c((u3, Zl) => {
    function ZO(e, t) {
      return e != null && t in Object(e);
    }
    Zl.exports = ZO;
  });
  var td = c((c3, ed) => {
    var JO = nn(),
      e1 = Qt(),
      t1 = _e(),
      n1 = Pn(),
      r1 = Mn(),
      i1 = wt();
    function a1(e, t, n) {
      t = JO(t, e);
      for (var r = -1, a = t.length, i = !1; ++r < a; ) {
        var o = i1(t[r]);
        if (!(i = e != null && n(e, o))) break;
        e = e[o];
      }
      return i || ++r != a
        ? i
        : ((a = e == null ? 0 : e.length),
          !!a && r1(a) && n1(o, a) && (t1(e) || e1(e)));
    }
    ed.exports = a1;
  });
  var rd = c((l3, nd) => {
    var o1 = Jl(),
      s1 = td();
    function u1(e, t) {
      return e != null && s1(e, t, o1);
    }
    nd.exports = u1;
  });
  var ad = c((d3, id) => {
    var c1 = bi(),
      l1 = kn(),
      d1 = rd(),
      f1 = Un(),
      p1 = Oi(),
      g1 = Ai(),
      E1 = wt(),
      y1 = 1,
      I1 = 2;
    function v1(e, t) {
      return f1(e) && p1(t)
        ? g1(E1(e), t)
        : function (n) {
            var r = l1(n, e);
            return r === void 0 && r === t ? d1(n, e) : c1(t, r, y1 | I1);
          };
    }
    id.exports = v1;
  });
  var Bn = c((f3, od) => {
    function _1(e) {
      return e;
    }
    od.exports = _1;
  });
  var Ni = c((p3, sd) => {
    function m1(e) {
      return function (t) {
        return t?.[e];
      };
    }
    sd.exports = m1;
  });
  var cd = c((g3, ud) => {
    var h1 = Vn();
    function T1(e) {
      return function (t) {
        return h1(t, e);
      };
    }
    ud.exports = T1;
  });
  var dd = c((E3, ld) => {
    var b1 = Ni(),
      O1 = cd(),
      A1 = Un(),
      S1 = wt();
    function R1(e) {
      return A1(e) ? b1(S1(e)) : O1(e);
    }
    ld.exports = R1;
  });
  var et = c((y3, fd) => {
    var N1 = Ll(),
      L1 = ad(),
      C1 = Bn(),
      w1 = _e(),
      P1 = dd();
    function M1(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? C1
        : typeof e == "object"
        ? w1(e)
          ? L1(e[0], e[1])
          : N1(e)
        : P1(e);
    }
    fd.exports = M1;
  });
  var Li = c((I3, pd) => {
    var D1 = et(),
      x1 = st(),
      F1 = en();
    function G1(e) {
      return function (t, n, r) {
        var a = Object(t);
        if (!x1(t)) {
          var i = D1(n, 3);
          (t = F1(t)),
            (n = function (s) {
              return i(a[s], s, a);
            });
        }
        var o = e(t, n, r);
        return o > -1 ? a[i ? t[o] : o] : void 0;
      };
    }
    pd.exports = G1;
  });
  var Ci = c((v3, gd) => {
    function q1(e, t, n, r) {
      for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    gd.exports = q1;
  });
  var yd = c((_3, Ed) => {
    var U1 = /\s/;
    function V1(e) {
      for (var t = e.length; t-- && U1.test(e.charAt(t)); );
      return t;
    }
    Ed.exports = V1;
  });
  var vd = c((m3, Id) => {
    var k1 = yd(),
      B1 = /^\s+/;
    function X1(e) {
      return e && e.slice(0, k1(e) + 1).replace(B1, "");
    }
    Id.exports = X1;
  });
  var Xn = c((h3, hd) => {
    var H1 = vd(),
      _d = ke(),
      W1 = tn(),
      md = 0 / 0,
      z1 = /^[-+]0x[0-9a-f]+$/i,
      Y1 = /^0b[01]+$/i,
      K1 = /^0o[0-7]+$/i,
      j1 = parseInt;
    function Q1(e) {
      if (typeof e == "number") return e;
      if (W1(e)) return md;
      if (_d(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = _d(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = H1(e);
      var n = Y1.test(e);
      return n || K1.test(e) ? j1(e.slice(2), n ? 2 : 8) : z1.test(e) ? md : +e;
    }
    hd.exports = Q1;
  });
  var Od = c((T3, bd) => {
    var $1 = Xn(),
      Td = 1 / 0,
      Z1 = 17976931348623157e292;
    function J1(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = $1(e)), e === Td || e === -Td)) {
        var t = e < 0 ? -1 : 1;
        return t * Z1;
      }
      return e === e ? e : 0;
    }
    bd.exports = J1;
  });
  var wi = c((b3, Ad) => {
    var eA = Od();
    function tA(e) {
      var t = eA(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    Ad.exports = tA;
  });
  var Rd = c((O3, Sd) => {
    var nA = Ci(),
      rA = et(),
      iA = wi(),
      aA = Math.max;
    function oA(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = n == null ? 0 : iA(n);
      return a < 0 && (a = aA(r + a, 0)), nA(e, rA(t, 3), a);
    }
    Sd.exports = oA;
  });
  var Pi = c((A3, Nd) => {
    var sA = Li(),
      uA = Rd(),
      cA = sA(uA);
    Nd.exports = cA;
  });
  var Wn = c((Mi) => {
    "use strict";
    Object.defineProperty(Mi, "__esModule", { value: !0 });
    function lA(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    lA(Mi, {
      ELEMENT_MATCHES: function () {
        return pA;
      },
      FLEX_PREFIXED: function () {
        return gA;
      },
      IS_BROWSER_ENV: function () {
        return Cd;
      },
      TRANSFORM_PREFIXED: function () {
        return wd;
      },
      TRANSFORM_STYLE_PREFIXED: function () {
        return EA;
      },
      withBrowser: function () {
        return Hn;
      },
    });
    var dA = fA(Pi());
    function fA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Cd = typeof window < "u",
      Hn = (e, t) => (Cd ? e() : t),
      pA = Hn(() =>
        (0, dA.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector",
          ],
          (e) => e in Element.prototype
        )
      ),
      gA = Hn(() => {
        let e = document.createElement("i"),
          t = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box",
          ],
          n = "";
        try {
          let { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a];
            if (((e.style.display = i), e.style.display === i)) return i;
          }
          return n;
        } catch {
          return n;
        }
      }, "flex"),
      wd = Hn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            n = "Transform",
            { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a] + n;
            if (e.style[i] !== void 0) return i;
          }
        }
        return "transform";
      }, "transform"),
      Ld = wd.split("transform")[0],
      EA = Ld ? Ld + "TransformStyle" : "transformStyle";
  });
  var Di = c((R3, Fd) => {
    var yA = 4,
      IA = 0.001,
      vA = 1e-7,
      _A = 10,
      rn = 11,
      zn = 1 / (rn - 1),
      mA = typeof Float32Array == "function";
    function Pd(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Md(e, t) {
      return 3 * t - 6 * e;
    }
    function Dd(e) {
      return 3 * e;
    }
    function Yn(e, t, n) {
      return ((Pd(t, n) * e + Md(t, n)) * e + Dd(t)) * e;
    }
    function xd(e, t, n) {
      return 3 * Pd(t, n) * e * e + 2 * Md(t, n) * e + Dd(t);
    }
    function hA(e, t, n, r, a) {
      var i,
        o,
        s = 0;
      do
        (o = t + (n - t) / 2), (i = Yn(o, r, a) - e), i > 0 ? (n = o) : (t = o);
      while (Math.abs(i) > vA && ++s < _A);
      return o;
    }
    function TA(e, t, n, r) {
      for (var a = 0; a < yA; ++a) {
        var i = xd(t, n, r);
        if (i === 0) return t;
        var o = Yn(t, n, r) - e;
        t -= o / i;
      }
      return t;
    }
    Fd.exports = function (t, n, r, a) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = mA ? new Float32Array(rn) : new Array(rn);
      if (t !== n || r !== a)
        for (var o = 0; o < rn; ++o) i[o] = Yn(o * zn, t, r);
      function s(u) {
        for (var l = 0, y = 1, g = rn - 1; y !== g && i[y] <= u; ++y) l += zn;
        --y;
        var p = (u - i[y]) / (i[y + 1] - i[y]),
          I = l + p * zn,
          _ = xd(I, t, r);
        return _ >= IA ? TA(u, I, t, r) : _ === 0 ? I : hA(u, l, l + zn, t, r);
      }
      return function (l) {
        return t === n && r === a
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : Yn(s(l), n, a);
      };
    };
  });
  var Fi = c((xi) => {
    "use strict";
    Object.defineProperty(xi, "__esModule", { value: !0 });
    function bA(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    bA(xi, {
      bounce: function () {
        return o2;
      },
      bouncePast: function () {
        return s2;
      },
      ease: function () {
        return AA;
      },
      easeIn: function () {
        return SA;
      },
      easeInOut: function () {
        return NA;
      },
      easeOut: function () {
        return RA;
      },
      inBack: function () {
        return $A;
      },
      inCirc: function () {
        return YA;
      },
      inCubic: function () {
        return PA;
      },
      inElastic: function () {
        return e2;
      },
      inExpo: function () {
        return HA;
      },
      inOutBack: function () {
        return JA;
      },
      inOutCirc: function () {
        return jA;
      },
      inOutCubic: function () {
        return DA;
      },
      inOutElastic: function () {
        return n2;
      },
      inOutExpo: function () {
        return zA;
      },
      inOutQuad: function () {
        return wA;
      },
      inOutQuart: function () {
        return GA;
      },
      inOutQuint: function () {
        return VA;
      },
      inOutSine: function () {
        return XA;
      },
      inQuad: function () {
        return LA;
      },
      inQuart: function () {
        return xA;
      },
      inQuint: function () {
        return qA;
      },
      inSine: function () {
        return kA;
      },
      outBack: function () {
        return ZA;
      },
      outBounce: function () {
        return QA;
      },
      outCirc: function () {
        return KA;
      },
      outCubic: function () {
        return MA;
      },
      outElastic: function () {
        return t2;
      },
      outExpo: function () {
        return WA;
      },
      outQuad: function () {
        return CA;
      },
      outQuart: function () {
        return FA;
      },
      outQuint: function () {
        return UA;
      },
      outSine: function () {
        return BA;
      },
      swingFrom: function () {
        return i2;
      },
      swingFromTo: function () {
        return r2;
      },
      swingTo: function () {
        return a2;
      },
    });
    var Kn = OA(Di());
    function OA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ke = 1.70158,
      AA = (0, Kn.default)(0.25, 0.1, 0.25, 1),
      SA = (0, Kn.default)(0.42, 0, 1, 1),
      RA = (0, Kn.default)(0, 0, 0.58, 1),
      NA = (0, Kn.default)(0.42, 0, 0.58, 1);
    function LA(e) {
      return Math.pow(e, 2);
    }
    function CA(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function wA(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function PA(e) {
      return Math.pow(e, 3);
    }
    function MA(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function DA(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function xA(e) {
      return Math.pow(e, 4);
    }
    function FA(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function GA(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function qA(e) {
      return Math.pow(e, 5);
    }
    function UA(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function VA(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function kA(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function BA(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function XA(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function HA(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function WA(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function zA(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function YA(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function KA(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function jA(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function QA(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function $A(e) {
      let t = Ke;
      return e * e * ((t + 1) * e - t);
    }
    function ZA(e) {
      let t = Ke;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function JA(e) {
      let t = Ke;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function e2(e) {
      let t = Ke,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          -(
            r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / n)
          ));
    }
    function t2(e) {
      let t = Ke,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
            1);
    }
    function n2(e) {
      let t = Ke,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (n || (n = 0.3 * 1.5),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          e < 1
            ? -0.5 *
              (r *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n))
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                0.5 +
              1);
    }
    function r2(e) {
      let t = Ke;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function i2(e) {
      let t = Ke;
      return e * e * ((t + 1) * e - t);
    }
    function a2(e) {
      let t = Ke;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function o2(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function s2(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Ui = c((qi) => {
    "use strict";
    Object.defineProperty(qi, "__esModule", { value: !0 });
    function u2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    u2(qi, {
      applyEasing: function () {
        return p2;
      },
      createBezierEasing: function () {
        return f2;
      },
      optimizeFloat: function () {
        return Gi;
      },
    });
    var Gd = d2(Fi()),
      c2 = l2(Di());
    function l2(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function qd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (qd = function (r) {
        return r ? n : t;
      })(e);
    }
    function d2(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = qd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    function Gi(e, t = 5, n = 10) {
      let r = Math.pow(n, t),
        a = Number(Math.round(e * r) / r);
      return Math.abs(a) > 1e-4 ? a : 0;
    }
    function f2(e) {
      return (0, c2.default)(...e);
    }
    function p2(e, t, n) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Gi(n ? (t > 0 ? n(t) : t) : t > 0 && e && Gd[e] ? Gd[e](t) : t);
    }
  });
  var Bd = c((ki) => {
    "use strict";
    Object.defineProperty(ki, "__esModule", { value: !0 });
    function g2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    g2(ki, {
      createElementState: function () {
        return kd;
      },
      ixElements: function () {
        return N2;
      },
      mergeActionState: function () {
        return Vi;
      },
    });
    var jn = bt(),
      Vd = Oe(),
      {
        HTML_ELEMENT: C3,
        PLAIN_OBJECT: E2,
        ABSTRACT_NODE: w3,
        CONFIG_X_VALUE: y2,
        CONFIG_Y_VALUE: I2,
        CONFIG_Z_VALUE: v2,
        CONFIG_VALUE: _2,
        CONFIG_X_UNIT: m2,
        CONFIG_Y_UNIT: h2,
        CONFIG_Z_UNIT: T2,
        CONFIG_UNIT: b2,
      } = Vd.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: O2,
        IX2_INSTANCE_ADDED: A2,
        IX2_ELEMENT_STATE_CHANGED: S2,
      } = Vd.IX2EngineActionTypes,
      Ud = {},
      R2 = "refState",
      N2 = (e = Ud, t = {}) => {
        switch (t.type) {
          case O2:
            return Ud;
          case A2: {
            let {
                elementId: n,
                element: r,
                origin: a,
                actionItem: i,
                refType: o,
              } = t.payload,
              { actionTypeId: s } = i,
              u = e;
            return (
              (0, jn.getIn)(u, [n, r]) !== r && (u = kd(u, r, o, n, i)),
              Vi(u, n, s, a, i)
            );
          }
          case S2: {
            let {
              elementId: n,
              actionTypeId: r,
              current: a,
              actionItem: i,
            } = t.payload;
            return Vi(e, n, r, a, i);
          }
          default:
            return e;
        }
      };
    function kd(e, t, n, r, a) {
      let i =
        n === E2 ? (0, jn.getIn)(a, ["config", "target", "objectId"]) : null;
      return (0, jn.mergeIn)(e, [r], { id: r, ref: t, refId: i, refType: n });
    }
    function Vi(e, t, n, r, a) {
      let i = C2(a),
        o = [t, R2, n];
      return (0, jn.mergeIn)(e, o, r, i);
    }
    var L2 = [
      [y2, m2],
      [I2, h2],
      [v2, T2],
      [_2, b2],
    ];
    function C2(e) {
      let { config: t } = e;
      return L2.reduce((n, r) => {
        let a = r[0],
          i = r[1],
          o = t[a],
          s = t[i];
        return o != null && s != null && (n[i] = s), n;
      }, {});
    }
  });
  var Xd = c((Bi) => {
    "use strict";
    Object.defineProperty(Bi, "__esModule", { value: !0 });
    function w2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    w2(Bi, {
      clearPlugin: function () {
        return q2;
      },
      createPluginInstance: function () {
        return F2;
      },
      getPluginConfig: function () {
        return P2;
      },
      getPluginDestination: function () {
        return x2;
      },
      getPluginDuration: function () {
        return M2;
      },
      getPluginOrigin: function () {
        return D2;
      },
      renderPlugin: function () {
        return G2;
      },
    });
    var P2 = (e) => e.value,
      M2 = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      D2 = (e) => e || { value: 0 },
      x2 = (e) => ({ value: e.value }),
      F2 = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      G2 = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      q2 = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var Wd = c((Xi) => {
    "use strict";
    Object.defineProperty(Xi, "__esModule", { value: !0 });
    function U2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    U2(Xi, {
      clearPlugin: function () {
        return j2;
      },
      createPluginInstance: function () {
        return Y2;
      },
      getPluginConfig: function () {
        return X2;
      },
      getPluginDestination: function () {
        return z2;
      },
      getPluginDuration: function () {
        return H2;
      },
      getPluginOrigin: function () {
        return W2;
      },
      renderPlugin: function () {
        return K2;
      },
    });
    var V2 = (e) => document.querySelector(`[data-w-id="${e}"]`),
      k2 = () => window.Webflow.require("spline"),
      B2 = (e, t) => e.filter((n) => !t.includes(n)),
      X2 = (e, t) => e.value[t],
      H2 = () => null,
      Hd = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      W2 = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let i = Object.keys(e),
            o = B2(r, i);
          return o.length ? o.reduce((u, l) => ((u[l] = Hd[l]), u), e) : e;
        }
        return r.reduce((i, o) => ((i[o] = Hd[o]), i), {});
      },
      z2 = (e) => e.value,
      Y2 = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? V2(n) : null;
      },
      K2 = (e, t, n) => {
        let r = k2(),
          a = r.getInstance(e),
          i = n.config.target.objectId,
          o = (s) => {
            if (!s)
              throw new Error("Invalid spline app passed to renderSpline");
            let u = i && s.findObjectById(i);
            if (!u) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ);
          };
        a ? o(a.spline) : r.setLoadHandler(e, o);
      },
      j2 = () => null;
  });
  var zd = c((zi) => {
    "use strict";
    Object.defineProperty(zi, "__esModule", { value: !0 });
    function Q2(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Q2(zi, {
      clearPlugin: function () {
        return aS;
      },
      createPluginInstance: function () {
        return rS;
      },
      getPluginConfig: function () {
        return J2;
      },
      getPluginDestination: function () {
        return nS;
      },
      getPluginDuration: function () {
        return eS;
      },
      getPluginOrigin: function () {
        return tS;
      },
      renderPlugin: function () {
        return iS;
      },
    });
    var Hi = "--wf-rive-fit",
      Wi = "--wf-rive-alignment",
      $2 = (e) => document.querySelector(`[data-w-id="${e}"]`),
      Z2 = () => window.Webflow.require("rive"),
      J2 = (e, t) => e.value.inputs[t],
      eS = () => null,
      tS = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let a in r) r[a] == null && (n[a] = 0);
        return n;
      },
      nS = (e) => e.value.inputs ?? {},
      rS = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? $2(r) : null;
      },
      iS = (e, { PLUGIN_RIVE: t }, n) => {
        let r = Z2(),
          a = r.getInstance(e),
          i = r.rive.StateMachineInputType,
          { name: o, inputs: s = {} } = n.config.value || {};
        function u(l) {
          if (l.loaded) y();
          else {
            let g = () => {
              y(), l?.off("load", g);
            };
            l?.on("load", g);
          }
          function y() {
            let g = l.stateMachineInputs(o);
            if (g != null) {
              if ((l.isPlaying || l.play(o, !1), Hi in s || Wi in s)) {
                let p = l.layout,
                  I = s[Hi] ?? p.fit,
                  _ = s[Wi] ?? p.alignment;
                (I !== p.fit || _ !== p.alignment) &&
                  (l.layout = p.copyWith({ fit: I, alignment: _ }));
              }
              for (let p in s) {
                if (p === Hi || p === Wi) continue;
                let I = g.find((_) => _.name === p);
                if (I != null)
                  switch (I.type) {
                    case i.Boolean: {
                      if (s[p] != null) {
                        let _ = !!s[p];
                        I.value = _;
                      }
                      break;
                    }
                    case i.Number: {
                      let _ = t[p];
                      _ != null && (I.value = _);
                      break;
                    }
                    case i.Trigger: {
                      s[p] && I.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        a?.rive ? u(a.rive) : r.setLoadHandler(e, u);
      },
      aS = (e, t) => null;
  });
  var Ki = c((Yi) => {
    "use strict";
    Object.defineProperty(Yi, "__esModule", { value: !0 });
    Object.defineProperty(Yi, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return oS;
      },
    });
    var Yd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function oS(e) {
      let t,
        n,
        r,
        a = 1,
        i = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Yd[i] == "string" ? Yd[i].toLowerCase() : null) || i;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (n = parseInt(u[1] + u[1], 16)),
            (r = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (a = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (n = parseInt(u.substring(2, 4), 16)),
            (r = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (a = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10)),
          (a = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          g = parseFloat(u[2].replace("%", "")) / 100;
        a = parseFloat(u[3]);
        let p = (1 - Math.abs(2 * g - 1)) * y,
          I = p * (1 - Math.abs(((l / 60) % 2) - 1)),
          _ = g - p / 2,
          m,
          O,
          v;
        l >= 0 && l < 60
          ? ((m = p), (O = I), (v = 0))
          : l >= 60 && l < 120
          ? ((m = I), (O = p), (v = 0))
          : l >= 120 && l < 180
          ? ((m = 0), (O = p), (v = I))
          : l >= 180 && l < 240
          ? ((m = 0), (O = I), (v = p))
          : l >= 240 && l < 300
          ? ((m = I), (O = 0), (v = p))
          : ((m = p), (O = 0), (v = I)),
          (t = Math.round((m + _) * 255)),
          (n = Math.round((O + _) * 255)),
          (r = Math.round((v + _) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          g = parseFloat(u[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * g - 1)) * y,
          I = p * (1 - Math.abs(((l / 60) % 2) - 1)),
          _ = g - p / 2,
          m,
          O,
          v;
        l >= 0 && l < 60
          ? ((m = p), (O = I), (v = 0))
          : l >= 60 && l < 120
          ? ((m = I), (O = p), (v = 0))
          : l >= 120 && l < 180
          ? ((m = 0), (O = p), (v = I))
          : l >= 180 && l < 240
          ? ((m = 0), (O = I), (v = p))
          : l >= 240 && l < 300
          ? ((m = I), (O = 0), (v = p))
          : ((m = p), (O = 0), (v = I)),
          (t = Math.round((m + _) * 255)),
          (n = Math.round((O + _) * 255)),
          (r = Math.round((v + _) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: a };
    }
  });
  var Kd = c((ji) => {
    "use strict";
    Object.defineProperty(ji, "__esModule", { value: !0 });
    function sS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    sS(ji, {
      clearPlugin: function () {
        return yS;
      },
      createPluginInstance: function () {
        return pS;
      },
      getPluginConfig: function () {
        return cS;
      },
      getPluginDestination: function () {
        return fS;
      },
      getPluginDuration: function () {
        return lS;
      },
      getPluginOrigin: function () {
        return dS;
      },
      renderPlugin: function () {
        return ES;
      },
    });
    var uS = Ki(),
      cS = (e, t) => e.value[t],
      lS = () => null,
      dS = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          a = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(a, 10) };
        if (n.unit === "%" || n.unit === "-") return { size: parseFloat(a) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, uS.normalizeColor)(a);
      },
      fS = (e) => e.value,
      pS = () => null,
      gS = {
        color: {
          match: ({ red: e, green: t, blue: n, alpha: r }) =>
            [e, t, n, r].every((a) => a != null),
          getValue: ({ red: e, green: t, blue: n, alpha: r }) =>
            `rgba(${e}, ${t}, ${n}, ${r})`,
        },
        size: {
          match: ({ size: e }) => e != null,
          getValue: ({ size: e }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`;
            }
          },
        },
      },
      ES = (e, t, n) => {
        let {
            target: { objectId: r },
            value: { unit: a },
          } = n.config,
          i = t.PLUGIN_VARIABLE,
          o = Object.values(gS).find((s) => s.match(i, a));
        o && document.documentElement.style.setProperty(r, o.getValue(i, a));
      },
      yS = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var Qd = c((Qi) => {
    "use strict";
    Object.defineProperty(Qi, "__esModule", { value: !0 });
    Object.defineProperty(Qi, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return hS;
      },
    });
    var Qn = Oe(),
      IS = $n(Xd()),
      vS = $n(Wd()),
      _S = $n(zd()),
      mS = $n(Kd());
    function jd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (jd = function (r) {
        return r ? n : t;
      })(e);
    }
    function $n(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = jd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var hS = new Map([
      [Qn.ActionTypeConsts.PLUGIN_LOTTIE, { ...IS }],
      [Qn.ActionTypeConsts.PLUGIN_SPLINE, { ...vS }],
      [Qn.ActionTypeConsts.PLUGIN_RIVE, { ..._S }],
      [Qn.ActionTypeConsts.PLUGIN_VARIABLE, { ...mS }],
    ]);
  });
  var Zi = c(($i) => {
    "use strict";
    Object.defineProperty($i, "__esModule", { value: !0 });
    function TS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    TS($i, {
      clearPlugin: function () {
        return wS;
      },
      createPluginInstance: function () {
        return LS;
      },
      getPluginConfig: function () {
        return AS;
      },
      getPluginDestination: function () {
        return NS;
      },
      getPluginDuration: function () {
        return RS;
      },
      getPluginOrigin: function () {
        return SS;
      },
      isPluginType: function () {
        return OS;
      },
      renderPlugin: function () {
        return CS;
      },
    });
    var bS = Wn(),
      $d = Qd();
    function OS(e) {
      return $d.pluginMethodMap.has(e);
    }
    var ct = (e) => (t) => {
        if (!bS.IS_BROWSER_ENV) return () => null;
        let n = $d.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      },
      AS = ct("getPluginConfig"),
      SS = ct("getPluginOrigin"),
      RS = ct("getPluginDuration"),
      NS = ct("getPluginDestination"),
      LS = ct("createPluginInstance"),
      CS = ct("renderPlugin"),
      wS = ct("clearPlugin");
  });
  var Jd = c((V3, Zd) => {
    function PS(e, t) {
      return e == null || e !== e ? t : e;
    }
    Zd.exports = PS;
  });
  var tf = c((k3, ef) => {
    function MS(e, t, n, r) {
      var a = -1,
        i = e == null ? 0 : e.length;
      for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
      return n;
    }
    ef.exports = MS;
  });
  var rf = c((B3, nf) => {
    function DS(e) {
      return function (t, n, r) {
        for (var a = -1, i = Object(t), o = r(t), s = o.length; s--; ) {
          var u = o[e ? s : ++a];
          if (n(i[u], u, i) === !1) break;
        }
        return t;
      };
    }
    nf.exports = DS;
  });
  var of = c((X3, af) => {
    var xS = rf(),
      FS = xS();
    af.exports = FS;
  });
  var Ji = c((H3, sf) => {
    var GS = of(),
      qS = en();
    function US(e, t) {
      return e && GS(e, t, qS);
    }
    sf.exports = US;
  });
  var cf = c((W3, uf) => {
    var VS = st();
    function kS(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!VS(n)) return e(n, r);
        for (
          var a = n.length, i = t ? a : -1, o = Object(n);
          (t ? i-- : ++i < a) && r(o[i], i, o) !== !1;

        );
        return n;
      };
    }
    uf.exports = kS;
  });
  var ea = c((z3, lf) => {
    var BS = Ji(),
      XS = cf(),
      HS = XS(BS);
    lf.exports = HS;
  });
  var ff = c((Y3, df) => {
    function WS(e, t, n, r, a) {
      return (
        a(e, function (i, o, s) {
          n = r ? ((r = !1), i) : t(n, i, o, s);
        }),
        n
      );
    }
    df.exports = WS;
  });
  var gf = c((K3, pf) => {
    var zS = tf(),
      YS = ea(),
      KS = et(),
      jS = ff(),
      QS = _e();
    function $S(e, t, n) {
      var r = QS(e) ? zS : jS,
        a = arguments.length < 3;
      return r(e, KS(t, 4), n, a, YS);
    }
    pf.exports = $S;
  });
  var yf = c((j3, Ef) => {
    var ZS = Ci(),
      JS = et(),
      eR = wi(),
      tR = Math.max,
      nR = Math.min;
    function rR(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = r - 1;
      return (
        n !== void 0 &&
          ((a = eR(n)), (a = n < 0 ? tR(r + a, 0) : nR(a, r - 1))),
        ZS(e, JS(t, 3), a, !0)
      );
    }
    Ef.exports = rR;
  });
  var vf = c((Q3, If) => {
    var iR = Li(),
      aR = yf(),
      oR = iR(aR);
    If.exports = oR;
  });
  var mf = c((ta) => {
    "use strict";
    Object.defineProperty(ta, "__esModule", { value: !0 });
    Object.defineProperty(ta, "default", {
      enumerable: !0,
      get: function () {
        return uR;
      },
    });
    function _f(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function sR(e, t) {
      if (_f(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (let a = 0; a < n.length; a++)
        if (!Object.hasOwn(t, n[a]) || !_f(e[n[a]], t[n[a]])) return !1;
      return !0;
    }
    var uR = sR;
  });
  var Uf = c((la) => {
    "use strict";
    Object.defineProperty(la, "__esModule", { value: !0 });
    function cR(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    cR(la, {
      cleanupHTMLElement: function () {
        return u5;
      },
      clearAllStyles: function () {
        return s5;
      },
      clearObjectCache: function () {
        return NR;
      },
      getActionListProgress: function () {
        return l5;
      },
      getAffectedElements: function () {
        return ua;
      },
      getComputedStyle: function () {
        return FR;
      },
      getDestinationValues: function () {
        return XR;
      },
      getElementId: function () {
        return PR;
      },
      getInstanceId: function () {
        return CR;
      },
      getInstanceOrigin: function () {
        return UR;
      },
      getItemConfigByKey: function () {
        return BR;
      },
      getMaxDurationItemIndex: function () {
        return qf;
      },
      getNamespacedParameterId: function () {
        return p5;
      },
      getRenderType: function () {
        return xf;
      },
      getStyleProp: function () {
        return HR;
      },
      mediaQueriesEqual: function () {
        return E5;
      },
      observeStore: function () {
        return xR;
      },
      reduceListToGroup: function () {
        return d5;
      },
      reifyState: function () {
        return MR;
      },
      renderHTMLElement: function () {
        return WR;
      },
      shallowEqual: function () {
        return Nf.default;
      },
      shouldAllowMediaQuery: function () {
        return g5;
      },
      shouldNamespaceEventParameter: function () {
        return f5;
      },
      stringifyTarget: function () {
        return y5;
      },
    });
    var tt = tr(Jd()),
      ia = tr(gf()),
      ra = tr(vf()),
      hf = bt(),
      lt = Oe(),
      Nf = tr(mf()),
      lR = Ui(),
      dR = Ki(),
      He = Zi(),
      Te = Wn();
    function tr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        BACKGROUND: fR,
        TRANSFORM: pR,
        TRANSLATE_3D: gR,
        SCALE_3D: ER,
        ROTATE_X: yR,
        ROTATE_Y: IR,
        ROTATE_Z: vR,
        SKEW: _R,
        PRESERVE_3D: mR,
        FLEX: hR,
        OPACITY: Jn,
        FILTER: an,
        FONT_VARIATION_SETTINGS: on,
        WIDTH: Be,
        HEIGHT: Xe,
        BACKGROUND_COLOR: Lf,
        BORDER_COLOR: TR,
        COLOR: bR,
        CHILDREN: Tf,
        IMMEDIATE_CHILDREN: OR,
        SIBLINGS: bf,
        PARENT: AR,
        DISPLAY: er,
        WILL_CHANGE: Pt,
        AUTO: nt,
        COMMA_DELIMITER: sn,
        COLON_DELIMITER: SR,
        BAR_DELIMITER: na,
        RENDER_TRANSFORM: Cf,
        RENDER_GENERAL: aa,
        RENDER_STYLE: oa,
        RENDER_PLUGIN: wf,
      } = lt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: Mt,
        TRANSFORM_SCALE: Dt,
        TRANSFORM_ROTATE: xt,
        TRANSFORM_SKEW: un,
        STYLE_OPACITY: Pf,
        STYLE_FILTER: cn,
        STYLE_FONT_VARIATION: ln,
        STYLE_SIZE: Ft,
        STYLE_BACKGROUND_COLOR: Gt,
        STYLE_BORDER: qt,
        STYLE_TEXT_COLOR: Ut,
        GENERAL_DISPLAY: nr,
        OBJECT_VALUE: RR,
      } = lt.ActionTypeConsts,
      Mf = (e) => e.trim(),
      sa = Object.freeze({ [Gt]: Lf, [qt]: TR, [Ut]: bR }),
      Df = Object.freeze({
        [Te.TRANSFORM_PREFIXED]: pR,
        [Lf]: fR,
        [Jn]: Jn,
        [an]: an,
        [Be]: Be,
        [Xe]: Xe,
        [on]: on,
      }),
      Zn = new Map();
    function NR() {
      Zn.clear();
    }
    var LR = 1;
    function CR() {
      return "i" + LR++;
    }
    var wR = 1;
    function PR(e, t) {
      for (let n in e) {
        let r = e[n];
        if (r && r.ref === t) return r.id;
      }
      return "e" + wR++;
    }
    function MR({ events: e, actionLists: t, site: n } = {}) {
      let r = (0, ia.default)(
          e,
          (o, s) => {
            let { eventTypeId: u } = s;
            return o[u] || (o[u] = {}), (o[u][s.id] = s), o;
          },
          {}
        ),
        a = n && n.mediaQueries,
        i = [];
      return (
        a
          ? (i = a.map((o) => o.key))
          : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: r,
            mediaQueries: a,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var DR = (e, t) => e === t;
    function xR({ store: e, select: t, onChange: n, comparator: r = DR }) {
      let { getState: a, subscribe: i } = e,
        o = i(u),
        s = t(a());
      function u() {
        let l = t(a());
        if (l == null) {
          o();
          return;
        }
        r(l, s) || ((s = l), n(s, e));
      }
      return o;
    }
    function Of(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        } = e;
        return {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        };
      }
      return {};
    }
    function ua({
      config: e,
      event: t,
      eventTarget: n,
      elementRoot: r,
      elementApi: a,
    }) {
      if (!a) throw new Error("IX2 missing elementApi");
      let { targets: i } = e;
      if (Array.isArray(i) && i.length > 0)
        return i.reduce(
          (b, E) =>
            b.concat(
              ua({
                config: { target: E },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: a,
              })
            ),
          []
        );
      let {
          getValidDocument: o,
          getQuerySelector: s,
          queryDocument: u,
          getChildElements: l,
          getSiblingElements: y,
          matchSelector: g,
          elementContains: p,
          isSiblingNode: I,
        } = a,
        { target: _ } = e;
      if (!_) return [];
      let {
        id: m,
        objectId: O,
        selector: v,
        selectorGuids: S,
        appliesTo: A,
        useEventTarget: N,
      } = Of(_);
      if (O) return [Zn.has(O) ? Zn.get(O) : Zn.set(O, {}).get(O)];
      if (A === lt.EventAppliesTo.PAGE) {
        let b = o(m);
        return b ? [b] : [];
      }
      let w = (t?.action?.config?.affectedElements ?? {})[m || v] || {},
        B = !!(w.id || w.selector),
        X,
        H,
        W,
        V = t && s(Of(t.target));
      if (
        (B
          ? ((X = w.limitAffectedElements), (H = V), (W = s(w)))
          : (H = W = s({ id: m, selector: v, selectorGuids: S })),
        t && N)
      ) {
        let b = n && (W || N === !0) ? [n] : u(V);
        if (W) {
          if (N === AR) return u(W).filter((E) => b.some((L) => p(E, L)));
          if (N === Tf) return u(W).filter((E) => b.some((L) => p(L, E)));
          if (N === bf) return u(W).filter((E) => b.some((L) => I(L, E)));
        }
        return b;
      }
      return H == null || W == null
        ? []
        : Te.IS_BROWSER_ENV && r
        ? u(W).filter((b) => r.contains(b))
        : X === Tf
        ? u(H, W)
        : X === OR
        ? l(u(H)).filter(g(W))
        : X === bf
        ? y(u(H)).filter(g(W))
        : u(W);
    }
    function FR({ element: e, actionItem: t }) {
      if (!Te.IS_BROWSER_ENV) return {};
      let { actionTypeId: n } = t;
      switch (n) {
        case Ft:
        case Gt:
        case qt:
        case Ut:
        case nr:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Af = /px/,
      GR = (e, t) =>
        t.reduce(
          (n, r) => (n[r.type] == null && (n[r.type] = zR[r.type]), n),
          e || {}
        ),
      qR = (e, t) =>
        t.reduce(
          (n, r) => (
            n[r.type] == null &&
              (n[r.type] = YR[r.type] || r.defaultValue || 0),
            n
          ),
          e || {}
        );
    function UR(e, t = {}, n = {}, r, a) {
      let { getStyle: i } = a,
        { actionTypeId: o } = r;
      if ((0, He.isPluginType)(o)) return (0, He.getPluginOrigin)(o)(t[o], r);
      switch (r.actionTypeId) {
        case Mt:
        case Dt:
        case xt:
        case un:
          return t[r.actionTypeId] || ca[r.actionTypeId];
        case cn:
          return GR(t[r.actionTypeId], r.config.filters);
        case ln:
          return qR(t[r.actionTypeId], r.config.fontVariations);
        case Pf:
          return { value: (0, tt.default)(parseFloat(i(e, Jn)), 1) };
        case Ft: {
          let s = i(e, Be),
            u = i(e, Xe),
            l,
            y;
          return (
            r.config.widthUnit === nt
              ? (l = Af.test(s) ? parseFloat(s) : parseFloat(n.width))
              : (l = (0, tt.default)(parseFloat(s), parseFloat(n.width))),
            r.config.heightUnit === nt
              ? (y = Af.test(u) ? parseFloat(u) : parseFloat(n.height))
              : (y = (0, tt.default)(parseFloat(u), parseFloat(n.height))),
            { widthValue: l, heightValue: y }
          );
        }
        case Gt:
        case qt:
        case Ut:
          return i5({
            element: e,
            actionTypeId: r.actionTypeId,
            computedStyle: n,
            getStyle: i,
          });
        case nr:
          return { value: (0, tt.default)(i(e, er), n.display) };
        case RR:
          return t[r.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var VR = (e, t) => (t && (e[t.type] = t.value || 0), e),
      kR = (e, t) => (t && (e[t.type] = t.value || 0), e),
      BR = (e, t, n) => {
        if ((0, He.isPluginType)(e)) return (0, He.getPluginConfig)(e)(n, t);
        switch (e) {
          case cn: {
            let r = (0, ra.default)(n.filters, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          case ln: {
            let r = (0, ra.default)(n.fontVariations, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          default:
            return n[t];
        }
      };
    function XR({ element: e, actionItem: t, elementApi: n }) {
      if ((0, He.isPluginType)(t.actionTypeId))
        return (0, He.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case Mt:
        case Dt:
        case xt:
        case un: {
          let { xValue: r, yValue: a, zValue: i } = t.config;
          return { xValue: r, yValue: a, zValue: i };
        }
        case Ft: {
          let { getStyle: r, setStyle: a, getProperty: i } = n,
            { widthUnit: o, heightUnit: s } = t.config,
            { widthValue: u, heightValue: l } = t.config;
          if (!Te.IS_BROWSER_ENV) return { widthValue: u, heightValue: l };
          if (o === nt) {
            let y = r(e, Be);
            a(e, Be, ""), (u = i(e, "offsetWidth")), a(e, Be, y);
          }
          if (s === nt) {
            let y = r(e, Xe);
            a(e, Xe, ""), (l = i(e, "offsetHeight")), a(e, Xe, y);
          }
          return { widthValue: u, heightValue: l };
        }
        case Gt:
        case qt:
        case Ut: {
          let {
            rValue: r,
            gValue: a,
            bValue: i,
            aValue: o,
            globalSwatchId: s,
          } = t.config;
          if (s && s.startsWith("--")) {
            let { getStyle: u } = n,
              l = u(e, s),
              y = (0, dR.normalizeColor)(l);
            return {
              rValue: y.red,
              gValue: y.green,
              bValue: y.blue,
              aValue: y.alpha,
            };
          }
          return { rValue: r, gValue: a, bValue: i, aValue: o };
        }
        case cn:
          return t.config.filters.reduce(VR, {});
        case ln:
          return t.config.fontVariations.reduce(kR, {});
        default: {
          let { value: r } = t.config;
          return { value: r };
        }
      }
    }
    function xf(e) {
      if (/^TRANSFORM_/.test(e)) return Cf;
      if (/^STYLE_/.test(e)) return oa;
      if (/^GENERAL_/.test(e)) return aa;
      if (/^PLUGIN_/.test(e)) return wf;
    }
    function HR(e, t) {
      return e === oa ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function WR(e, t, n, r, a, i, o, s, u) {
      switch (s) {
        case Cf:
          return QR(e, t, n, a, o);
        case oa:
          return a5(e, t, n, a, i, o);
        case aa:
          return o5(e, a, o);
        case wf: {
          let { actionTypeId: l } = a;
          if ((0, He.isPluginType)(l)) return (0, He.renderPlugin)(l)(u, t, a);
        }
      }
    }
    var ca = {
        [Mt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Dt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [xt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [un]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      zR = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      YR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      KR = (e, t) => {
        let n = (0, ra.default)(t.filters, ({ type: r }) => r === e);
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      jR = Object.keys(ca);
    function QR(e, t, n, r, a) {
      let i = jR
          .map((s) => {
            let u = ca[s],
              {
                xValue: l = u.xValue,
                yValue: y = u.yValue,
                zValue: g = u.zValue,
                xUnit: p = "",
                yUnit: I = "",
                zUnit: _ = "",
              } = t[s] || {};
            switch (s) {
              case Mt:
                return `${gR}(${l}${p}, ${y}${I}, ${g}${_})`;
              case Dt:
                return `${ER}(${l}${p}, ${y}${I}, ${g}${_})`;
              case xt:
                return `${yR}(${l}${p}) ${IR}(${y}${I}) ${vR}(${g}${_})`;
              case un:
                return `${_R}(${l}${p}, ${y}${I})`;
              default:
                return "";
            }
          })
          .join(" "),
        { setStyle: o } = a;
      dt(e, Te.TRANSFORM_PREFIXED, a),
        o(e, Te.TRANSFORM_PREFIXED, i),
        JR(r, n) && o(e, Te.TRANSFORM_STYLE_PREFIXED, mR);
    }
    function $R(e, t, n, r) {
      let a = (0, ia.default)(t, (o, s, u) => `${o} ${u}(${s}${KR(u, n)})`, ""),
        { setStyle: i } = r;
      dt(e, an, r), i(e, an, a);
    }
    function ZR(e, t, n, r) {
      let a = (0, ia.default)(
          t,
          (o, s, u) => (o.push(`"${u}" ${s}`), o),
          []
        ).join(", "),
        { setStyle: i } = r;
      dt(e, on, r), i(e, on, a);
    }
    function JR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
      return (
        (e === Mt && r !== void 0) ||
        (e === Dt && r !== void 0) ||
        (e === xt && (t !== void 0 || n !== void 0))
      );
    }
    var e5 = "\\(([^)]+)\\)",
      t5 = /^rgb/,
      n5 = RegExp(`rgba?${e5}`);
    function r5(e, t) {
      let n = e.exec(t);
      return n ? n[1] : "";
    }
    function i5({
      element: e,
      actionTypeId: t,
      computedStyle: n,
      getStyle: r,
    }) {
      let a = sa[t],
        i = r(e, a),
        o = t5.test(i) ? i : n[a],
        s = r5(n5, o).split(sn);
      return {
        rValue: (0, tt.default)(parseInt(s[0], 10), 255),
        gValue: (0, tt.default)(parseInt(s[1], 10), 255),
        bValue: (0, tt.default)(parseInt(s[2], 10), 255),
        aValue: (0, tt.default)(parseFloat(s[3]), 1),
      };
    }
    function a5(e, t, n, r, a, i) {
      let { setStyle: o } = i;
      switch (r.actionTypeId) {
        case Ft: {
          let { widthUnit: s = "", heightUnit: u = "" } = r.config,
            { widthValue: l, heightValue: y } = n;
          l !== void 0 &&
            (s === nt && (s = "px"), dt(e, Be, i), o(e, Be, l + s)),
            y !== void 0 &&
              (u === nt && (u = "px"), dt(e, Xe, i), o(e, Xe, y + u));
          break;
        }
        case cn: {
          $R(e, n, r.config, i);
          break;
        }
        case ln: {
          ZR(e, n, r.config, i);
          break;
        }
        case Gt:
        case qt:
        case Ut: {
          let s = sa[r.actionTypeId],
            u = Math.round(n.rValue),
            l = Math.round(n.gValue),
            y = Math.round(n.bValue),
            g = n.aValue;
          dt(e, s, i),
            o(
              e,
              s,
              g >= 1 ? `rgb(${u},${l},${y})` : `rgba(${u},${l},${y},${g})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = r.config;
          dt(e, a, i), o(e, a, n.value + s);
          break;
        }
      }
    }
    function o5(e, t, n) {
      let { setStyle: r } = n;
      switch (t.actionTypeId) {
        case nr: {
          let { value: a } = t.config;
          a === hR && Te.IS_BROWSER_ENV
            ? r(e, er, Te.FLEX_PREFIXED)
            : r(e, er, a);
          return;
        }
      }
    }
    function dt(e, t, n) {
      if (!Te.IS_BROWSER_ENV) return;
      let r = Df[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, Pt);
      if (!o) {
        i(e, Pt, r);
        return;
      }
      let s = o.split(sn).map(Mf);
      s.indexOf(r) === -1 && i(e, Pt, s.concat(r).join(sn));
    }
    function Ff(e, t, n) {
      if (!Te.IS_BROWSER_ENV) return;
      let r = Df[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, Pt);
      !o ||
        o.indexOf(r) === -1 ||
        i(
          e,
          Pt,
          o
            .split(sn)
            .map(Mf)
            .filter((s) => s !== r)
            .join(sn)
        );
    }
    function s5({ store: e, elementApi: t }) {
      let { ixData: n } = e.getState(),
        { events: r = {}, actionLists: a = {} } = n;
      Object.keys(r).forEach((i) => {
        let o = r[i],
          { config: s } = o.action,
          { actionListId: u } = s,
          l = a[u];
        l && Sf({ actionList: l, event: o, elementApi: t });
      }),
        Object.keys(a).forEach((i) => {
          Sf({ actionList: a[i], elementApi: t });
        });
    }
    function Sf({ actionList: e = {}, event: t, elementApi: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e;
      r &&
        r.forEach((i) => {
          Rf({ actionGroup: i, event: t, elementApi: n });
        }),
        a &&
          a.forEach((i) => {
            let { continuousActionGroups: o } = i;
            o.forEach((s) => {
              Rf({ actionGroup: s, event: t, elementApi: n });
            });
          });
    }
    function Rf({ actionGroup: e, event: t, elementApi: n }) {
      let { actionItems: r } = e;
      r.forEach((a) => {
        let { actionTypeId: i, config: o } = a,
          s;
        (0, He.isPluginType)(i)
          ? (s = (u) => (0, He.clearPlugin)(i)(u, a))
          : (s = Gf({ effect: c5, actionTypeId: i, elementApi: n })),
          ua({ config: o, event: t, elementApi: n }).forEach(s);
      });
    }
    function u5(e, t, n) {
      let { setStyle: r, getStyle: a } = n,
        { actionTypeId: i } = t;
      if (i === Ft) {
        let { config: o } = t;
        o.widthUnit === nt && r(e, Be, ""), o.heightUnit === nt && r(e, Xe, "");
      }
      a(e, Pt) && Gf({ effect: Ff, actionTypeId: i, elementApi: n })(e);
    }
    var Gf =
      ({ effect: e, actionTypeId: t, elementApi: n }) =>
      (r) => {
        switch (t) {
          case Mt:
          case Dt:
          case xt:
          case un:
            e(r, Te.TRANSFORM_PREFIXED, n);
            break;
          case cn:
            e(r, an, n);
            break;
          case ln:
            e(r, on, n);
            break;
          case Pf:
            e(r, Jn, n);
            break;
          case Ft:
            e(r, Be, n), e(r, Xe, n);
            break;
          case Gt:
          case qt:
          case Ut:
            e(r, sa[t], n);
            break;
          case nr:
            e(r, er, n);
            break;
        }
      };
    function c5(e, t, n) {
      let { setStyle: r } = n;
      Ff(e, t, n),
        r(e, t, ""),
        t === Te.TRANSFORM_PREFIXED && r(e, Te.TRANSFORM_STYLE_PREFIXED, "");
    }
    function qf(e) {
      let t = 0,
        n = 0;
      return (
        e.forEach((r, a) => {
          let { config: i } = r,
            o = i.delay + i.duration;
          o >= t && ((t = o), (n = a));
        }),
        n
      );
    }
    function l5(e, t) {
      let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
        { actionItem: a, verboseTimeElapsed: i = 0 } = t,
        o = 0,
        s = 0;
      return (
        n.forEach((u, l) => {
          if (r && l === 0) return;
          let { actionItems: y } = u,
            g = y[qf(y)],
            { config: p, actionTypeId: I } = g;
          a.id === g.id && (s = o + i);
          let _ = xf(I) === aa ? 0 : p.duration;
          o += p.delay + _;
        }),
        o > 0 ? (0, lR.optimizeFloat)(s / o) : 0
      );
    }
    function d5({ actionList: e, actionItemId: t, rawData: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e,
        i = [],
        o = (s) => (
          i.push((0, hf.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        r && r.some(({ actionItems: s }) => s.some(o)),
        a &&
          a.some((s) => {
            let { continuousActionGroups: u } = s;
            return u.some(({ actionItems: l }) => l.some(o));
          }),
        (0, hf.setIn)(n, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function f5(e, { basedOn: t }) {
      return (
        (e === lt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === lt.EventBasedOn.ELEMENT || t == null)) ||
        (e === lt.EventTypeConsts.MOUSE_MOVE && t === lt.EventBasedOn.ELEMENT)
      );
    }
    function p5(e, t) {
      return e + SR + t;
    }
    function g5(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function E5(e, t) {
      return (0, Nf.default)(e && e.sort(), t && t.sort());
    }
    function y5(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + na + e.objectId;
      if (e.objectId) return e.objectId;
      let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
      return t + na + n + na + r;
    }
  });
  var ft = c((da) => {
    "use strict";
    Object.defineProperty(da, "__esModule", { value: !0 });
    function I5(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    I5(da, {
      IX2BrowserSupport: function () {
        return v5;
      },
      IX2EasingUtils: function () {
        return m5;
      },
      IX2Easings: function () {
        return _5;
      },
      IX2ElementsReducer: function () {
        return h5;
      },
      IX2VanillaPlugins: function () {
        return T5;
      },
      IX2VanillaUtils: function () {
        return b5;
      },
    });
    var v5 = Vt(Wn()),
      _5 = Vt(Fi()),
      m5 = Vt(Ui()),
      h5 = Vt(Bd()),
      T5 = Vt(Zi()),
      b5 = Vt(Uf());
    function Vf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Vf = function (r) {
        return r ? n : t;
      })(e);
    }
    function Vt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Vf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var Hf = c((pa) => {
    "use strict";
    Object.defineProperty(pa, "__esModule", { value: !0 });
    Object.defineProperty(pa, "ixInstances", {
      enumerable: !0,
      get: function () {
        return F5;
      },
    });
    var kf = Oe(),
      Bf = ft(),
      kt = bt(),
      {
        IX2_RAW_DATA_IMPORTED: O5,
        IX2_SESSION_STOPPED: A5,
        IX2_INSTANCE_ADDED: S5,
        IX2_INSTANCE_STARTED: R5,
        IX2_INSTANCE_REMOVED: N5,
        IX2_ANIMATION_FRAME_CHANGED: L5,
      } = kf.IX2EngineActionTypes,
      {
        optimizeFloat: rr,
        applyEasing: Xf,
        createBezierEasing: C5,
      } = Bf.IX2EasingUtils,
      { RENDER_GENERAL: w5 } = kf.IX2EngineConstants,
      {
        getItemConfigByKey: fa,
        getRenderType: P5,
        getStyleProp: M5,
      } = Bf.IX2VanillaUtils,
      D5 = (e, t) => {
        let {
            position: n,
            parameterId: r,
            actionGroups: a,
            destinationKeys: i,
            smoothing: o,
            restingValue: s,
            actionTypeId: u,
            customEasingFn: l,
            skipMotion: y,
            skipToValue: g,
          } = e,
          { parameters: p } = t.payload,
          I = Math.max(1 - o, 0.01),
          _ = p[r];
        _ == null && ((I = 1), (_ = s));
        let m = Math.max(_, 0) || 0,
          O = rr(m - n),
          v = y ? g : rr(n + O * I),
          S = v * 100;
        if (v === n && e.current) return e;
        let A, N, x, w;
        for (let X = 0, { length: H } = a; X < H; X++) {
          let { keyframe: W, actionItems: V } = a[X];
          if ((X === 0 && (A = V[0]), S >= W)) {
            A = V[0];
            let b = a[X + 1],
              E = b && S !== W;
            (N = E ? b.actionItems[0] : null),
              E && ((x = W / 100), (w = (b.keyframe - W) / 100));
          }
        }
        let B = {};
        if (A && !N)
          for (let X = 0, { length: H } = i; X < H; X++) {
            let W = i[X];
            B[W] = fa(u, W, A.config);
          }
        else if (A && N && x !== void 0 && w !== void 0) {
          let X = (v - x) / w,
            H = A.config.easing,
            W = Xf(H, X, l);
          for (let V = 0, { length: b } = i; V < b; V++) {
            let E = i[V],
              L = fa(u, E, A.config),
              $ = (fa(u, E, N.config) - L) * W + L;
            B[E] = $;
          }
        }
        return (0, kt.merge)(e, { position: v, current: B });
      },
      x5 = (e, t) => {
        let {
            active: n,
            origin: r,
            start: a,
            immediate: i,
            renderType: o,
            verbose: s,
            actionItem: u,
            destination: l,
            destinationKeys: y,
            pluginDuration: g,
            instanceDelay: p,
            customEasingFn: I,
            skipMotion: _,
          } = e,
          m = u.config.easing,
          { duration: O, delay: v } = u.config;
        g != null && (O = g),
          (v = p ?? v),
          o === w5 ? (O = 0) : (i || _) && (O = v = 0);
        let { now: S } = t.payload;
        if (n && r) {
          let A = S - (a + v);
          if (s) {
            let X = S - a,
              H = O + v,
              W = rr(Math.min(Math.max(0, X / H), 1));
            e = (0, kt.set)(e, "verboseTimeElapsed", H * W);
          }
          if (A < 0) return e;
          let N = rr(Math.min(Math.max(0, A / O), 1)),
            x = Xf(m, N, I),
            w = {},
            B = null;
          return (
            y.length &&
              (B = y.reduce((X, H) => {
                let W = l[H],
                  V = parseFloat(r[H]) || 0,
                  E = (parseFloat(W) - V) * x + V;
                return (X[H] = E), X;
              }, {})),
            (w.current = B),
            (w.position = N),
            N === 1 && ((w.active = !1), (w.complete = !0)),
            (0, kt.merge)(e, w)
          );
        }
        return e;
      },
      F5 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case O5:
            return t.payload.ixInstances || Object.freeze({});
          case A5:
            return Object.freeze({});
          case S5: {
            let {
                instanceId: n,
                elementId: r,
                actionItem: a,
                eventId: i,
                eventTarget: o,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                isCarrier: y,
                origin: g,
                destination: p,
                immediate: I,
                verbose: _,
                continuous: m,
                parameterId: O,
                actionGroups: v,
                smoothing: S,
                restingValue: A,
                pluginInstance: N,
                pluginDuration: x,
                instanceDelay: w,
                skipMotion: B,
                skipToValue: X,
              } = t.payload,
              { actionTypeId: H } = a,
              W = P5(H),
              V = M5(W, H),
              b = Object.keys(p).filter(
                (L) => p[L] != null && typeof p[L] != "string"
              ),
              { easing: E } = a.config;
            return (0, kt.set)(e, n, {
              id: n,
              elementId: r,
              active: !1,
              position: 0,
              start: 0,
              origin: g,
              destination: p,
              destinationKeys: b,
              immediate: I,
              verbose: _,
              current: null,
              actionItem: a,
              actionTypeId: H,
              eventId: i,
              eventTarget: o,
              eventStateKey: s,
              actionListId: u,
              groupIndex: l,
              renderType: W,
              isCarrier: y,
              styleProp: V,
              continuous: m,
              parameterId: O,
              actionGroups: v,
              smoothing: S,
              restingValue: A,
              pluginInstance: N,
              pluginDuration: x,
              instanceDelay: w,
              skipMotion: B,
              skipToValue: X,
              customEasingFn:
                Array.isArray(E) && E.length === 4 ? C5(E) : void 0,
            });
          }
          case R5: {
            let { instanceId: n, time: r } = t.payload;
            return (0, kt.mergeIn)(e, [n], {
              active: !0,
              complete: !1,
              start: r,
            });
          }
          case N5: {
            let { instanceId: n } = t.payload;
            if (!e[n]) return e;
            let r = {},
              a = Object.keys(e),
              { length: i } = a;
            for (let o = 0; o < i; o++) {
              let s = a[o];
              s !== n && (r[s] = e[s]);
            }
            return r;
          }
          case L5: {
            let n = e,
              r = Object.keys(e),
              { length: a } = r;
            for (let i = 0; i < a; i++) {
              let o = r[i],
                s = e[o],
                u = s.continuous ? D5 : x5;
              n = (0, kt.set)(n, o, u(s, t));
            }
            return n;
          }
          default:
            return e;
        }
      };
  });
  var Wf = c((ga) => {
    "use strict";
    Object.defineProperty(ga, "__esModule", { value: !0 });
    Object.defineProperty(ga, "ixParameters", {
      enumerable: !0,
      get: function () {
        return k5;
      },
    });
    var G5 = Oe(),
      {
        IX2_RAW_DATA_IMPORTED: q5,
        IX2_SESSION_STOPPED: U5,
        IX2_PARAMETER_CHANGED: V5,
      } = G5.IX2EngineActionTypes,
      k5 = (e = {}, t) => {
        switch (t.type) {
          case q5:
            return t.payload.ixParameters || {};
          case U5:
            return {};
          case V5: {
            let { key: n, value: r } = t.payload;
            return (e[n] = r), e;
          }
          default:
            return e;
        }
      };
  });
  var zf = c((Ea) => {
    "use strict";
    Object.defineProperty(Ea, "__esModule", { value: !0 });
    Object.defineProperty(Ea, "default", {
      enumerable: !0,
      get: function () {
        return Q5;
      },
    });
    var B5 = Yr(),
      X5 = as(),
      H5 = Os(),
      W5 = Ss(),
      z5 = ft(),
      Y5 = Hf(),
      K5 = Wf(),
      { ixElements: j5 } = z5.IX2ElementsReducer,
      Q5 = (0, B5.combineReducers)({
        ixData: X5.ixData,
        ixRequest: H5.ixRequest,
        ixSession: W5.ixSession,
        ixElements: j5,
        ixInstances: Y5.ixInstances,
        ixParameters: K5.ixParameters,
      });
  });
  var Kf = c((rM, Yf) => {
    var $5 = Ze(),
      Z5 = _e(),
      J5 = Ye(),
      e6 = "[object String]";
    function t6(e) {
      return typeof e == "string" || (!Z5(e) && J5(e) && $5(e) == e6);
    }
    Yf.exports = t6;
  });
  var Qf = c((iM, jf) => {
    var n6 = Ni(),
      r6 = n6("length");
    jf.exports = r6;
  });
  var Zf = c((aM, $f) => {
    var i6 = "\\ud800-\\udfff",
      a6 = "\\u0300-\\u036f",
      o6 = "\\ufe20-\\ufe2f",
      s6 = "\\u20d0-\\u20ff",
      u6 = a6 + o6 + s6,
      c6 = "\\ufe0e\\ufe0f",
      l6 = "\\u200d",
      d6 = RegExp("[" + l6 + i6 + u6 + c6 + "]");
    function f6(e) {
      return d6.test(e);
    }
    $f.exports = f6;
  });
  var sp = c((oM, op) => {
    var ep = "\\ud800-\\udfff",
      p6 = "\\u0300-\\u036f",
      g6 = "\\ufe20-\\ufe2f",
      E6 = "\\u20d0-\\u20ff",
      y6 = p6 + g6 + E6,
      I6 = "\\ufe0e\\ufe0f",
      v6 = "[" + ep + "]",
      ya = "[" + y6 + "]",
      Ia = "\\ud83c[\\udffb-\\udfff]",
      _6 = "(?:" + ya + "|" + Ia + ")",
      tp = "[^" + ep + "]",
      np = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      rp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      m6 = "\\u200d",
      ip = _6 + "?",
      ap = "[" + I6 + "]?",
      h6 = "(?:" + m6 + "(?:" + [tp, np, rp].join("|") + ")" + ap + ip + ")*",
      T6 = ap + ip + h6,
      b6 = "(?:" + [tp + ya + "?", ya, np, rp, v6].join("|") + ")",
      Jf = RegExp(Ia + "(?=" + Ia + ")|" + b6 + T6, "g");
    function O6(e) {
      for (var t = (Jf.lastIndex = 0); Jf.test(e); ) ++t;
      return t;
    }
    op.exports = O6;
  });
  var cp = c((sM, up) => {
    var A6 = Qf(),
      S6 = Zf(),
      R6 = sp();
    function N6(e) {
      return S6(e) ? R6(e) : A6(e);
    }
    up.exports = N6;
  });
  var dp = c((uM, lp) => {
    var L6 = Fn(),
      C6 = Gn(),
      w6 = st(),
      P6 = Kf(),
      M6 = cp(),
      D6 = "[object Map]",
      x6 = "[object Set]";
    function F6(e) {
      if (e == null) return 0;
      if (w6(e)) return P6(e) ? M6(e) : e.length;
      var t = C6(e);
      return t == D6 || t == x6 ? e.size : L6(e).length;
    }
    lp.exports = F6;
  });
  var pp = c((cM, fp) => {
    var G6 = "Expected a function";
    function q6(e) {
      if (typeof e != "function") throw new TypeError(G6);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    fp.exports = q6;
  });
  var va = c((lM, gp) => {
    var U6 = Je(),
      V6 = (function () {
        try {
          var e = U6(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    gp.exports = V6;
  });
  var _a = c((dM, yp) => {
    var Ep = va();
    function k6(e, t, n) {
      t == "__proto__" && Ep
        ? Ep(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    yp.exports = k6;
  });
  var vp = c((fM, Ip) => {
    var B6 = _a(),
      X6 = Sn(),
      H6 = Object.prototype,
      W6 = H6.hasOwnProperty;
    function z6(e, t, n) {
      var r = e[t];
      (!(W6.call(e, t) && X6(r, n)) || (n === void 0 && !(t in e))) &&
        B6(e, t, n);
    }
    Ip.exports = z6;
  });
  var hp = c((pM, mp) => {
    var Y6 = vp(),
      K6 = nn(),
      j6 = Pn(),
      _p = ke(),
      Q6 = wt();
    function $6(e, t, n, r) {
      if (!_p(e)) return e;
      t = K6(t, e);
      for (var a = -1, i = t.length, o = i - 1, s = e; s != null && ++a < i; ) {
        var u = Q6(t[a]),
          l = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (a != o) {
          var y = s[u];
          (l = r ? r(y, u, s) : void 0),
            l === void 0 && (l = _p(y) ? y : j6(t[a + 1]) ? [] : {});
        }
        Y6(s, u, l), (s = s[u]);
      }
      return e;
    }
    mp.exports = $6;
  });
  var bp = c((gM, Tp) => {
    var Z6 = Vn(),
      J6 = hp(),
      eN = nn();
    function tN(e, t, n) {
      for (var r = -1, a = t.length, i = {}; ++r < a; ) {
        var o = t[r],
          s = Z6(e, o);
        n(s, o) && J6(i, eN(o, e), s);
      }
      return i;
    }
    Tp.exports = tN;
  });
  var Ap = c((EM, Op) => {
    var nN = Cn(),
      rN = Dr(),
      iN = pi(),
      aN = fi(),
      oN = Object.getOwnPropertySymbols,
      sN = oN
        ? function (e) {
            for (var t = []; e; ) nN(t, iN(e)), (e = rN(e));
            return t;
          }
        : aN;
    Op.exports = sN;
  });
  var Rp = c((yM, Sp) => {
    function uN(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    Sp.exports = uN;
  });
  var Lp = c((IM, Np) => {
    var cN = ke(),
      lN = xn(),
      dN = Rp(),
      fN = Object.prototype,
      pN = fN.hasOwnProperty;
    function gN(e) {
      if (!cN(e)) return dN(e);
      var t = lN(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !pN.call(e, r))) || n.push(r);
      return n;
    }
    Np.exports = gN;
  });
  var wp = c((vM, Cp) => {
    var EN = Ei(),
      yN = Lp(),
      IN = st();
    function vN(e) {
      return IN(e) ? EN(e, !0) : yN(e);
    }
    Cp.exports = vN;
  });
  var Mp = c((_M, Pp) => {
    var _N = di(),
      mN = Ap(),
      hN = wp();
    function TN(e) {
      return _N(e, hN, mN);
    }
    Pp.exports = TN;
  });
  var xp = c((mM, Dp) => {
    var bN = Ri(),
      ON = et(),
      AN = bp(),
      SN = Mp();
    function RN(e, t) {
      if (e == null) return {};
      var n = bN(SN(e), function (r) {
        return [r];
      });
      return (
        (t = ON(t)),
        AN(e, n, function (r, a) {
          return t(r, a[0]);
        })
      );
    }
    Dp.exports = RN;
  });
  var Gp = c((hM, Fp) => {
    var NN = et(),
      LN = pp(),
      CN = xp();
    function wN(e, t) {
      return CN(e, LN(NN(t)));
    }
    Fp.exports = wN;
  });
  var Up = c((TM, qp) => {
    var PN = Fn(),
      MN = Gn(),
      DN = Qt(),
      xN = _e(),
      FN = st(),
      GN = wn(),
      qN = xn(),
      UN = Dn(),
      VN = "[object Map]",
      kN = "[object Set]",
      BN = Object.prototype,
      XN = BN.hasOwnProperty;
    function HN(e) {
      if (e == null) return !0;
      if (
        FN(e) &&
        (xN(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          GN(e) ||
          UN(e) ||
          DN(e))
      )
        return !e.length;
      var t = MN(e);
      if (t == VN || t == kN) return !e.size;
      if (qN(e)) return !PN(e).length;
      for (var n in e) if (XN.call(e, n)) return !1;
      return !0;
    }
    qp.exports = HN;
  });
  var kp = c((bM, Vp) => {
    var WN = _a(),
      zN = Ji(),
      YN = et();
    function KN(e, t) {
      var n = {};
      return (
        (t = YN(t, 3)),
        zN(e, function (r, a, i) {
          WN(n, a, t(r, a, i));
        }),
        n
      );
    }
    Vp.exports = KN;
  });
  var Xp = c((OM, Bp) => {
    function jN(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    Bp.exports = jN;
  });
  var Wp = c((AM, Hp) => {
    var QN = Bn();
    function $N(e) {
      return typeof e == "function" ? e : QN;
    }
    Hp.exports = $N;
  });
  var Yp = c((SM, zp) => {
    var ZN = Xp(),
      JN = ea(),
      e7 = Wp(),
      t7 = _e();
    function n7(e, t) {
      var n = t7(e) ? ZN : JN;
      return n(e, e7(t));
    }
    zp.exports = n7;
  });
  var jp = c((RM, Kp) => {
    var r7 = xe(),
      i7 = function () {
        return r7.Date.now();
      };
    Kp.exports = i7;
  });
  var Zp = c((NM, $p) => {
    var a7 = ke(),
      ma = jp(),
      Qp = Xn(),
      o7 = "Expected a function",
      s7 = Math.max,
      u7 = Math.min;
    function c7(e, t, n) {
      var r,
        a,
        i,
        o,
        s,
        u,
        l = 0,
        y = !1,
        g = !1,
        p = !0;
      if (typeof e != "function") throw new TypeError(o7);
      (t = Qp(t) || 0),
        a7(n) &&
          ((y = !!n.leading),
          (g = "maxWait" in n),
          (i = g ? s7(Qp(n.maxWait) || 0, t) : i),
          (p = "trailing" in n ? !!n.trailing : p));
      function I(w) {
        var B = r,
          X = a;
        return (r = a = void 0), (l = w), (o = e.apply(X, B)), o;
      }
      function _(w) {
        return (l = w), (s = setTimeout(v, t)), y ? I(w) : o;
      }
      function m(w) {
        var B = w - u,
          X = w - l,
          H = t - B;
        return g ? u7(H, i - X) : H;
      }
      function O(w) {
        var B = w - u,
          X = w - l;
        return u === void 0 || B >= t || B < 0 || (g && X >= i);
      }
      function v() {
        var w = ma();
        if (O(w)) return S(w);
        s = setTimeout(v, m(w));
      }
      function S(w) {
        return (s = void 0), p && r ? I(w) : ((r = a = void 0), o);
      }
      function A() {
        s !== void 0 && clearTimeout(s), (l = 0), (r = u = a = s = void 0);
      }
      function N() {
        return s === void 0 ? o : S(ma());
      }
      function x() {
        var w = ma(),
          B = O(w);
        if (((r = arguments), (a = this), (u = w), B)) {
          if (s === void 0) return _(u);
          if (g) return clearTimeout(s), (s = setTimeout(v, t)), I(u);
        }
        return s === void 0 && (s = setTimeout(v, t)), o;
      }
      return (x.cancel = A), (x.flush = N), x;
    }
    $p.exports = c7;
  });
  var eg = c((LM, Jp) => {
    var l7 = Zp(),
      d7 = ke(),
      f7 = "Expected a function";
    function p7(e, t, n) {
      var r = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(f7);
      return (
        d7(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (a = "trailing" in n ? !!n.trailing : a)),
        l7(e, t, { leading: r, maxWait: t, trailing: a })
      );
    }
    Jp.exports = p7;
  });
  var ir = c((ha) => {
    "use strict";
    Object.defineProperty(ha, "__esModule", { value: !0 });
    function g7(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    g7(ha, {
      actionListPlaybackChanged: function () {
        return eL;
      },
      animationFrameChanged: function () {
        return K7;
      },
      clearRequested: function () {
        return H7;
      },
      elementStateChanged: function () {
        return J7;
      },
      eventListenerAdded: function () {
        return W7;
      },
      eventStateChanged: function () {
        return Y7;
      },
      instanceAdded: function () {
        return Q7;
      },
      instanceRemoved: function () {
        return Z7;
      },
      instanceStarted: function () {
        return $7;
      },
      mediaQueriesDefined: function () {
        return nL;
      },
      parameterChanged: function () {
        return j7;
      },
      playbackRequested: function () {
        return B7;
      },
      previewRequested: function () {
        return k7;
      },
      rawDataImported: function () {
        return G7;
      },
      sessionInitialized: function () {
        return q7;
      },
      sessionStarted: function () {
        return U7;
      },
      sessionStopped: function () {
        return V7;
      },
      stopRequested: function () {
        return X7;
      },
      testFrameRendered: function () {
        return z7;
      },
      viewportWidthChanged: function () {
        return tL;
      },
    });
    var tg = Oe(),
      E7 = ft(),
      {
        IX2_RAW_DATA_IMPORTED: y7,
        IX2_SESSION_INITIALIZED: I7,
        IX2_SESSION_STARTED: v7,
        IX2_SESSION_STOPPED: _7,
        IX2_PREVIEW_REQUESTED: m7,
        IX2_PLAYBACK_REQUESTED: h7,
        IX2_STOP_REQUESTED: T7,
        IX2_CLEAR_REQUESTED: b7,
        IX2_EVENT_LISTENER_ADDED: O7,
        IX2_TEST_FRAME_RENDERED: A7,
        IX2_EVENT_STATE_CHANGED: S7,
        IX2_ANIMATION_FRAME_CHANGED: R7,
        IX2_PARAMETER_CHANGED: N7,
        IX2_INSTANCE_ADDED: L7,
        IX2_INSTANCE_STARTED: C7,
        IX2_INSTANCE_REMOVED: w7,
        IX2_ELEMENT_STATE_CHANGED: P7,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: M7,
        IX2_VIEWPORT_WIDTH_CHANGED: D7,
        IX2_MEDIA_QUERIES_DEFINED: x7,
      } = tg.IX2EngineActionTypes,
      { reifyState: F7 } = E7.IX2VanillaUtils,
      G7 = (e) => ({ type: y7, payload: { ...F7(e) } }),
      q7 = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
        type: I7,
        payload: { hasBoundaryNodes: e, reducedMotion: t },
      }),
      U7 = () => ({ type: v7 }),
      V7 = () => ({ type: _7 }),
      k7 = ({ rawData: e, defer: t }) => ({
        type: m7,
        payload: { defer: t, rawData: e },
      }),
      B7 = ({
        actionTypeId: e = tg.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: n,
        eventId: r,
        allowEvents: a,
        immediate: i,
        testManual: o,
        verbose: s,
        rawData: u,
      }) => ({
        type: h7,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: n,
          testManual: o,
          eventId: r,
          allowEvents: a,
          immediate: i,
          verbose: s,
          rawData: u,
        },
      }),
      X7 = (e) => ({ type: T7, payload: { actionListId: e } }),
      H7 = () => ({ type: b7 }),
      W7 = (e, t) => ({ type: O7, payload: { target: e, listenerParams: t } }),
      z7 = (e = 1) => ({ type: A7, payload: { step: e } }),
      Y7 = (e, t) => ({ type: S7, payload: { stateKey: e, newState: t } }),
      K7 = (e, t) => ({ type: R7, payload: { now: e, parameters: t } }),
      j7 = (e, t) => ({ type: N7, payload: { key: e, value: t } }),
      Q7 = (e) => ({ type: L7, payload: { ...e } }),
      $7 = (e, t) => ({ type: C7, payload: { instanceId: e, time: t } }),
      Z7 = (e) => ({ type: w7, payload: { instanceId: e } }),
      J7 = (e, t, n, r) => ({
        type: P7,
        payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
      }),
      eL = ({ actionListId: e, isPlaying: t }) => ({
        type: M7,
        payload: { actionListId: e, isPlaying: t },
      }),
      tL = ({ width: e, mediaQueries: t }) => ({
        type: D7,
        payload: { width: e, mediaQueries: t },
      }),
      nL = () => ({ type: x7 });
  });
  var ig = c((ba) => {
    "use strict";
    Object.defineProperty(ba, "__esModule", { value: !0 });
    function rL(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    rL(ba, {
      elementContains: function () {
        return EL;
      },
      getChildElements: function () {
        return IL;
      },
      getClosestElement: function () {
        return _L;
      },
      getProperty: function () {
        return lL;
      },
      getQuerySelector: function () {
        return fL;
      },
      getRefType: function () {
        return mL;
      },
      getSiblingElements: function () {
        return vL;
      },
      getStyle: function () {
        return cL;
      },
      getValidDocument: function () {
        return pL;
      },
      isSiblingNode: function () {
        return yL;
      },
      matchSelector: function () {
        return dL;
      },
      queryDocument: function () {
        return gL;
      },
      setStyle: function () {
        return uL;
      },
    });
    var iL = ft(),
      aL = Oe(),
      { ELEMENT_MATCHES: Ta } = iL.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: ng,
        HTML_ELEMENT: oL,
        PLAIN_OBJECT: sL,
        WF_PAGE: rg,
      } = aL.IX2EngineConstants;
    function uL(e, t, n) {
      e.style[t] = n;
    }
    function cL(e, t) {
      if (t.startsWith("--"))
        return window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(t);
      if (e.style instanceof CSSStyleDeclaration) return e.style[t];
    }
    function lL(e, t) {
      return e[t];
    }
    function dL(e) {
      return (t) => t[Ta](e);
    }
    function fL({ id: e, selector: t }) {
      if (e) {
        let n = e;
        if (e.indexOf(ng) !== -1) {
          let r = e.split(ng),
            a = r[0];
          if (((n = r[1]), a !== document.documentElement.getAttribute(rg)))
            return null;
        }
        return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
      }
      return t;
    }
    function pL(e) {
      return e == null || e === document.documentElement.getAttribute(rg)
        ? document
        : null;
    }
    function gL(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function EL(e, t) {
      return e.contains(t);
    }
    function yL(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function IL(e) {
      let t = [];
      for (let n = 0, { length: r } = e || []; n < r; n++) {
        let { children: a } = e[n],
          { length: i } = a;
        if (i) for (let o = 0; o < i; o++) t.push(a[o]);
      }
      return t;
    }
    function vL(e = []) {
      let t = [],
        n = [];
      for (let r = 0, { length: a } = e; r < a; r++) {
        let { parentNode: i } = e[r];
        if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1)
          continue;
        n.push(i);
        let o = i.firstElementChild;
        for (; o != null; )
          e.indexOf(o) === -1 && t.push(o), (o = o.nextElementSibling);
      }
      return t;
    }
    var _L = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let n = e;
          do {
            if (n[Ta] && n[Ta](t)) return n;
            n = n.parentNode;
          } while (n != null);
          return null;
        };
    function mL(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? oL
          : sL
        : null;
    }
  });
  var Oa = c((PM, og) => {
    var hL = ke(),
      ag = Object.create,
      TL = (function () {
        function e() {}
        return function (t) {
          if (!hL(t)) return {};
          if (ag) return ag(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    og.exports = TL;
  });
  var ar = c((MM, sg) => {
    function bL() {}
    sg.exports = bL;
  });
  var sr = c((DM, ug) => {
    var OL = Oa(),
      AL = ar();
    function or(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    or.prototype = OL(AL.prototype);
    or.prototype.constructor = or;
    ug.exports = or;
  });
  var fg = c((xM, dg) => {
    var cg = mt(),
      SL = Qt(),
      RL = _e(),
      lg = cg ? cg.isConcatSpreadable : void 0;
    function NL(e) {
      return RL(e) || SL(e) || !!(lg && e && e[lg]);
    }
    dg.exports = NL;
  });
  var Eg = c((FM, gg) => {
    var LL = Cn(),
      CL = fg();
    function pg(e, t, n, r, a) {
      var i = -1,
        o = e.length;
      for (n || (n = CL), a || (a = []); ++i < o; ) {
        var s = e[i];
        t > 0 && n(s)
          ? t > 1
            ? pg(s, t - 1, n, r, a)
            : LL(a, s)
          : r || (a[a.length] = s);
      }
      return a;
    }
    gg.exports = pg;
  });
  var Ig = c((GM, yg) => {
    var wL = Eg();
    function PL(e) {
      var t = e == null ? 0 : e.length;
      return t ? wL(e, 1) : [];
    }
    yg.exports = PL;
  });
  var _g = c((qM, vg) => {
    function ML(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    vg.exports = ML;
  });
  var Tg = c((UM, hg) => {
    var DL = _g(),
      mg = Math.max;
    function xL(e, t, n) {
      return (
        (t = mg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, a = -1, i = mg(r.length - t, 0), o = Array(i);
            ++a < i;

          )
            o[a] = r[t + a];
          a = -1;
          for (var s = Array(t + 1); ++a < t; ) s[a] = r[a];
          return (s[t] = n(o)), DL(e, this, s);
        }
      );
    }
    hg.exports = xL;
  });
  var Og = c((VM, bg) => {
    function FL(e) {
      return function () {
        return e;
      };
    }
    bg.exports = FL;
  });
  var Rg = c((kM, Sg) => {
    var GL = Og(),
      Ag = va(),
      qL = Bn(),
      UL = Ag
        ? function (e, t) {
            return Ag(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: GL(t),
              writable: !0,
            });
          }
        : qL;
    Sg.exports = UL;
  });
  var Lg = c((BM, Ng) => {
    var VL = 800,
      kL = 16,
      BL = Date.now;
    function XL(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = BL(),
          a = kL - (r - n);
        if (((n = r), a > 0)) {
          if (++t >= VL) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Ng.exports = XL;
  });
  var wg = c((XM, Cg) => {
    var HL = Rg(),
      WL = Lg(),
      zL = WL(HL);
    Cg.exports = zL;
  });
  var Mg = c((HM, Pg) => {
    var YL = Ig(),
      KL = Tg(),
      jL = wg();
    function QL(e) {
      return jL(KL(e, void 0, YL), e + "");
    }
    Pg.exports = QL;
  });
  var Fg = c((WM, xg) => {
    var Dg = yi(),
      $L = Dg && new Dg();
    xg.exports = $L;
  });
  var qg = c((zM, Gg) => {
    function ZL() {}
    Gg.exports = ZL;
  });
  var Aa = c((YM, Vg) => {
    var Ug = Fg(),
      JL = qg(),
      eC = Ug
        ? function (e) {
            return Ug.get(e);
          }
        : JL;
    Vg.exports = eC;
  });
  var Bg = c((KM, kg) => {
    var tC = {};
    kg.exports = tC;
  });
  var Sa = c((jM, Hg) => {
    var Xg = Bg(),
      nC = Object.prototype,
      rC = nC.hasOwnProperty;
    function iC(e) {
      for (
        var t = e.name + "", n = Xg[t], r = rC.call(Xg, t) ? n.length : 0;
        r--;

      ) {
        var a = n[r],
          i = a.func;
        if (i == null || i == e) return a.name;
      }
      return t;
    }
    Hg.exports = iC;
  });
  var cr = c((QM, Wg) => {
    var aC = Oa(),
      oC = ar(),
      sC = 4294967295;
    function ur(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = sC),
        (this.__views__ = []);
    }
    ur.prototype = aC(oC.prototype);
    ur.prototype.constructor = ur;
    Wg.exports = ur;
  });
  var Yg = c(($M, zg) => {
    function uC(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    zg.exports = uC;
  });
  var jg = c((ZM, Kg) => {
    var cC = cr(),
      lC = sr(),
      dC = Yg();
    function fC(e) {
      if (e instanceof cC) return e.clone();
      var t = new lC(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = dC(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Kg.exports = fC;
  });
  var Zg = c((JM, $g) => {
    var pC = cr(),
      Qg = sr(),
      gC = ar(),
      EC = _e(),
      yC = Ye(),
      IC = jg(),
      vC = Object.prototype,
      _C = vC.hasOwnProperty;
    function lr(e) {
      if (yC(e) && !EC(e) && !(e instanceof pC)) {
        if (e instanceof Qg) return e;
        if (_C.call(e, "__wrapped__")) return IC(e);
      }
      return new Qg(e);
    }
    lr.prototype = gC.prototype;
    lr.prototype.constructor = lr;
    $g.exports = lr;
  });
  var eE = c((eD, Jg) => {
    var mC = cr(),
      hC = Aa(),
      TC = Sa(),
      bC = Zg();
    function OC(e) {
      var t = TC(e),
        n = bC[t];
      if (typeof n != "function" || !(t in mC.prototype)) return !1;
      if (e === n) return !0;
      var r = hC(n);
      return !!r && e === r[0];
    }
    Jg.exports = OC;
  });
  var iE = c((tD, rE) => {
    var tE = sr(),
      AC = Mg(),
      SC = Aa(),
      Ra = Sa(),
      RC = _e(),
      nE = eE(),
      NC = "Expected a function",
      LC = 8,
      CC = 32,
      wC = 128,
      PC = 256;
    function MC(e) {
      return AC(function (t) {
        var n = t.length,
          r = n,
          a = tE.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var i = t[r];
          if (typeof i != "function") throw new TypeError(NC);
          if (a && !o && Ra(i) == "wrapper") var o = new tE([], !0);
        }
        for (r = o ? r : n; ++r < n; ) {
          i = t[r];
          var s = Ra(i),
            u = s == "wrapper" ? SC(i) : void 0;
          u &&
          nE(u[0]) &&
          u[1] == (wC | LC | CC | PC) &&
          !u[4].length &&
          u[9] == 1
            ? (o = o[Ra(u[0])].apply(o, u[3]))
            : (o = i.length == 1 && nE(i) ? o[s]() : o.thru(i));
        }
        return function () {
          var l = arguments,
            y = l[0];
          if (o && l.length == 1 && RC(y)) return o.plant(y).value();
          for (var g = 0, p = n ? t[g].apply(this, l) : y; ++g < n; )
            p = t[g].call(this, p);
          return p;
        };
      });
    }
    rE.exports = MC;
  });
  var oE = c((nD, aE) => {
    var DC = iE(),
      xC = DC();
    aE.exports = xC;
  });
  var uE = c((rD, sE) => {
    function FC(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    sE.exports = FC;
  });
  var lE = c((iD, cE) => {
    var GC = uE(),
      Na = Xn();
    function qC(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = Na(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = Na(t)), (t = t === t ? t : 0)),
        GC(Na(e), t, n)
      );
    }
    cE.exports = qC;
  });
  var NE = c((Da) => {
    "use strict";
    Object.defineProperty(Da, "__esModule", { value: !0 });
    Object.defineProperty(Da, "default", {
      enumerable: !0,
      get: function () {
        return mw;
      },
    });
    var UC = Ma(oE()),
      VC = Ma(kn()),
      kC = Ma(lE()),
      pt = Oe(),
      La = xa(),
      dr = ir(),
      BC = ft();
    function Ma(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        MOUSE_CLICK: XC,
        MOUSE_SECOND_CLICK: HC,
        MOUSE_DOWN: WC,
        MOUSE_UP: zC,
        MOUSE_OVER: YC,
        MOUSE_OUT: KC,
        DROPDOWN_CLOSE: jC,
        DROPDOWN_OPEN: QC,
        SLIDER_ACTIVE: $C,
        SLIDER_INACTIVE: ZC,
        TAB_ACTIVE: JC,
        TAB_INACTIVE: ew,
        NAVBAR_CLOSE: tw,
        NAVBAR_OPEN: nw,
        MOUSE_MOVE: rw,
        PAGE_SCROLL_DOWN: _E,
        SCROLL_INTO_VIEW: mE,
        SCROLL_OUT_OF_VIEW: iw,
        PAGE_SCROLL_UP: aw,
        SCROLLING_IN_VIEW: ow,
        PAGE_FINISH: hE,
        ECOMMERCE_CART_CLOSE: sw,
        ECOMMERCE_CART_OPEN: uw,
        PAGE_START: TE,
        PAGE_SCROLL: cw,
      } = pt.EventTypeConsts,
      Ca = "COMPONENT_ACTIVE",
      bE = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: dE } = pt.IX2EngineConstants,
      { getNamespacedParameterId: fE } = BC.IX2VanillaUtils,
      OE = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      fn = OE(({ element: e, nativeEvent: t }) => e === t.target),
      lw = OE(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      We = (0, UC.default)([fn, lw]),
      AE = (e, t) => {
        if (t) {
          let { ixData: n } = e.getState(),
            { events: r } = n,
            a = r[t];
          if (a && !fw[a.eventTypeId]) return a;
        }
        return null;
      },
      dw = ({ store: e, event: t }) => {
        let { action: n } = t,
          { autoStopEventId: r } = n.config;
        return !!AE(e, r);
      },
      Se = ({ store: e, event: t, element: n, eventStateKey: r }, a) => {
        let { action: i, id: o } = t,
          { actionListId: s, autoStopEventId: u } = i.config,
          l = AE(e, u);
        return (
          l &&
            (0, La.stopActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: u + dE + r.split(dE)[1],
              actionListId: (0, VC.default)(l, "action.config.actionListId"),
            }),
          (0, La.stopActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: s,
          }),
          (0, La.startActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: s,
          }),
          a
        );
      },
      Fe = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
      pn = { handler: Fe(We, Se) },
      SE = { ...pn, types: [Ca, bE].join(" ") },
      wa = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      pE = "mouseover mouseout",
      Pa = { types: wa },
      fw = { PAGE_START: TE, PAGE_FINISH: hE },
      dn = (() => {
        let e = window.pageXOffset !== void 0,
          n =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : n.scrollLeft,
          scrollTop: e ? window.pageYOffset : n.scrollTop,
          stiffScrollTop: (0, kC.default)(
            e ? window.pageYOffset : n.scrollTop,
            0,
            n.scrollHeight - window.innerHeight
          ),
          scrollWidth: n.scrollWidth,
          scrollHeight: n.scrollHeight,
          clientWidth: n.clientWidth,
          clientHeight: n.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      pw = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      gw = ({ element: e, nativeEvent: t }) => {
        let { type: n, target: r, relatedTarget: a } = t,
          i = e.contains(r);
        if (n === "mouseover" && i) return !0;
        let o = e.contains(a);
        return !!(n === "mouseout" && i && o);
      },
      Ew = (e) => {
        let {
            element: t,
            event: { config: n },
          } = e,
          { clientWidth: r, clientHeight: a } = dn(),
          i = n.scrollOffsetValue,
          u = n.scrollOffsetUnit === "PX" ? i : (a * (i || 0)) / 100;
        return pw(t.getBoundingClientRect(), {
          left: 0,
          top: u,
          right: r,
          bottom: a - u,
        });
      },
      RE = (e) => (t, n) => {
        let { type: r } = t.nativeEvent,
          a = [Ca, bE].indexOf(r) !== -1 ? r === Ca : n.isActive,
          i = { ...n, isActive: a };
        return ((!n || i.isActive !== n.isActive) && e(t, i)) || i;
      },
      gE = (e) => (t, n) => {
        let r = { elementHovered: gw(t) };
        return (
          ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
            e(t, r)) ||
          r
        );
      },
      yw = (e) => (t, n) => {
        let r = { ...n, elementVisible: Ew(t) };
        return (
          ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
            e(t, r)) ||
          r
        );
      },
      EE =
        (e) =>
        (t, n = {}) => {
          let { stiffScrollTop: r, scrollHeight: a, innerHeight: i } = dn(),
            {
              event: { config: o, eventTypeId: s },
            } = t,
            { scrollOffsetValue: u, scrollOffsetUnit: l } = o,
            y = l === "PX",
            g = a - i,
            p = Number((r / g).toFixed(2));
          if (n && n.percentTop === p) return n;
          let I = (y ? u : (i * (u || 0)) / 100) / g,
            _,
            m,
            O = 0;
          n &&
            ((_ = p > n.percentTop),
            (m = n.scrollingDown !== _),
            (O = m ? p : n.anchorTop));
          let v = s === _E ? p >= O + I : p <= O - I,
            S = {
              ...n,
              percentTop: p,
              inBounds: v,
              anchorTop: O,
              scrollingDown: _,
            };
          return (n && v && (m || S.inBounds !== n.inBounds) && e(t, S)) || S;
        },
      Iw = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      vw = (e) => (t, n) => {
        let r = { finished: document.readyState === "complete" };
        return r.finished && !(n && n.finshed) && e(t), r;
      },
      _w = (e) => (t, n) => {
        let r = { started: !0 };
        return n || e(t), r;
      },
      yE =
        (e) =>
        (t, n = { clickCount: 0 }) => {
          let r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && e(t, r)) || r;
        },
      fr = (e = !0) => ({
        ...SE,
        handler: Fe(
          e ? We : fn,
          RE((t, n) => (n.isActive ? pn.handler(t, n) : n))
        ),
      }),
      pr = (e = !0) => ({
        ...SE,
        handler: Fe(
          e ? We : fn,
          RE((t, n) => (n.isActive ? n : pn.handler(t, n)))
        ),
      }),
      IE = {
        ...Pa,
        handler: yw((e, t) => {
          let { elementVisible: n } = t,
            { event: r, store: a } = e,
            { ixData: i } = a.getState(),
            { events: o } = i;
          return !o[r.action.config.autoStopEventId] && t.triggered
            ? t
            : (r.eventTypeId === mE) === n
            ? (Se(e), { ...t, triggered: !0 })
            : t;
        }),
      },
      vE = 0.05,
      mw = {
        [$C]: fr(),
        [ZC]: pr(),
        [QC]: fr(),
        [jC]: pr(),
        [nw]: fr(!1),
        [tw]: pr(!1),
        [JC]: fr(),
        [ew]: pr(),
        [uw]: { types: "ecommerce-cart-open", handler: Fe(We, Se) },
        [sw]: { types: "ecommerce-cart-close", handler: Fe(We, Se) },
        [XC]: {
          types: "click",
          handler: Fe(
            We,
            yE((e, { clickCount: t }) => {
              dw(e) ? t === 1 && Se(e) : Se(e);
            })
          ),
        },
        [HC]: {
          types: "click",
          handler: Fe(
            We,
            yE((e, { clickCount: t }) => {
              t === 2 && Se(e);
            })
          ),
        },
        [WC]: { ...pn, types: "mousedown" },
        [zC]: { ...pn, types: "mouseup" },
        [YC]: {
          types: pE,
          handler: Fe(
            We,
            gE((e, t) => {
              t.elementHovered && Se(e);
            })
          ),
        },
        [KC]: {
          types: pE,
          handler: Fe(
            We,
            gE((e, t) => {
              t.elementHovered || Se(e);
            })
          ),
        },
        [rw]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: n,
              nativeEvent: r,
              eventStateKey: a,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: o,
                selectedAxis: s,
                continuousParameterGroupId: u,
                reverse: l,
                restingState: y = 0,
              } = n,
              {
                clientX: g = i.clientX,
                clientY: p = i.clientY,
                pageX: I = i.pageX,
                pageY: _ = i.pageY,
              } = r,
              m = s === "X_AXIS",
              O = r.type === "mouseout",
              v = y / 100,
              S = u,
              A = !1;
            switch (o) {
              case pt.EventBasedOn.VIEWPORT: {
                v = m
                  ? Math.min(g, window.innerWidth) / window.innerWidth
                  : Math.min(p, window.innerHeight) / window.innerHeight;
                break;
              }
              case pt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: N,
                  scrollTop: x,
                  scrollWidth: w,
                  scrollHeight: B,
                } = dn();
                v = m ? Math.min(N + I, w) / w : Math.min(x + _, B) / B;
                break;
              }
              case pt.EventBasedOn.ELEMENT:
              default: {
                S = fE(a, u);
                let N = r.type.indexOf("mouse") === 0;
                if (N && We({ element: t, nativeEvent: r }) !== !0) break;
                let x = t.getBoundingClientRect(),
                  { left: w, top: B, width: X, height: H } = x;
                if (!N && !Iw({ left: g, top: p }, x)) break;
                (A = !0), (v = m ? (g - w) / X : (p - B) / H);
                break;
              }
            }
            return (
              O && (v > 1 - vE || v < vE) && (v = Math.round(v)),
              (o !== pt.EventBasedOn.ELEMENT || A || A !== i.elementHovered) &&
                ((v = l ? 1 - v : v),
                e.dispatch((0, dr.parameterChanged)(S, v))),
              { elementHovered: A, clientX: g, clientY: p, pageX: I, pageY: _ }
            );
          },
        },
        [cw]: {
          types: wa,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: n, reverse: r } = t,
              { scrollTop: a, scrollHeight: i, clientHeight: o } = dn(),
              s = a / (i - o);
            (s = r ? 1 - s : s), e.dispatch((0, dr.parameterChanged)(n, s));
          },
        },
        [ow]: {
          types: wa,
          handler: (
            { element: e, store: t, eventConfig: n, eventStateKey: r },
            a = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: o,
                scrollWidth: s,
                scrollHeight: u,
                clientHeight: l,
              } = dn(),
              {
                basedOn: y,
                selectedAxis: g,
                continuousParameterGroupId: p,
                startsEntering: I,
                startsExiting: _,
                addEndOffset: m,
                addStartOffset: O,
                addOffsetValue: v = 0,
                endOffsetValue: S = 0,
              } = n,
              A = g === "X_AXIS";
            if (y === pt.EventBasedOn.VIEWPORT) {
              let N = A ? i / s : o / u;
              return (
                N !== a.scrollPercent &&
                  t.dispatch((0, dr.parameterChanged)(p, N)),
                { scrollPercent: N }
              );
            } else {
              let N = fE(r, p),
                x = e.getBoundingClientRect(),
                w = (O ? v : 0) / 100,
                B = (m ? S : 0) / 100;
              (w = I ? w : 1 - w), (B = _ ? B : 1 - B);
              let X = x.top + Math.min(x.height * w, l),
                W = x.top + x.height * B - X,
                V = Math.min(l + W, u),
                E = Math.min(Math.max(0, l - X), V) / V;
              return (
                E !== a.scrollPercent &&
                  t.dispatch((0, dr.parameterChanged)(N, E)),
                { scrollPercent: E }
              );
            }
          },
        },
        [mE]: IE,
        [iw]: IE,
        [_E]: {
          ...Pa,
          handler: EE((e, t) => {
            t.scrollingDown && Se(e);
          }),
        },
        [aw]: {
          ...Pa,
          handler: EE((e, t) => {
            t.scrollingDown || Se(e);
          }),
        },
        [hE]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Fe(fn, vw(Se)),
        },
        [TE]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Fe(fn, _w(Se)),
        },
      };
  });
  var xa = c((Ha) => {
    "use strict";
    Object.defineProperty(Ha, "__esModule", { value: !0 });
    function hw(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    hw(Ha, {
      observeRequests: function () {
        return jw;
      },
      startActionGroup: function () {
        return ka;
      },
      startEngine: function () {
        return vr;
      },
      stopActionGroup: function () {
        return Va;
      },
      stopAllActionGroups: function () {
        return qE;
      },
      stopEngine: function () {
        return _r;
      },
    });
    var Tw = je(Pi()),
      rt = je(kn()),
      bw = je(dp()),
      Ow = je(Gp()),
      Aw = je(Up()),
      Sw = je(kp()),
      gn = je(Yp()),
      Rw = je(eg()),
      Ce = Oe(),
      wE = ft(),
      Ee = ir(),
      Ie = Lw(ig()),
      Nw = je(NE());
    function je(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function PE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (PE = function (r) {
        return r ? n : t;
      })(e);
    }
    function Lw(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = PE(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var Cw = Object.keys(Ce.QuickEffectIds),
      Fa = (e) => Cw.includes(e),
      {
        COLON_DELIMITER: Ga,
        BOUNDARY_SELECTOR: gr,
        HTML_ELEMENT: ME,
        RENDER_GENERAL: ww,
        W_MOD_IX: LE,
      } = Ce.IX2EngineConstants,
      {
        getAffectedElements: Er,
        getElementId: Pw,
        getDestinationValues: qa,
        observeStore: gt,
        getInstanceId: Mw,
        renderHTMLElement: Dw,
        clearAllStyles: DE,
        getMaxDurationItemIndex: xw,
        getComputedStyle: Fw,
        getInstanceOrigin: Gw,
        reduceListToGroup: qw,
        shouldNamespaceEventParameter: Uw,
        getNamespacedParameterId: Vw,
        shouldAllowMediaQuery: yr,
        cleanupHTMLElement: kw,
        clearObjectCache: Bw,
        stringifyTarget: Xw,
        mediaQueriesEqual: Hw,
        shallowEqual: Ww,
      } = wE.IX2VanillaUtils,
      {
        isPluginType: Ir,
        createPluginInstance: Ua,
        getPluginDuration: zw,
      } = wE.IX2VanillaPlugins,
      CE = navigator.userAgent,
      Yw = CE.match(/iPad/i) || CE.match(/iPhone/),
      Kw = 12;
    function jw(e) {
      gt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: Zw }),
        gt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: Jw,
        }),
        gt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: e8 }),
        gt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: t8 });
    }
    function Qw(e) {
      gt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          _r(e),
            DE({ store: e, elementApi: Ie }),
            vr({ store: e, allowEvents: !0 }),
            xE();
        },
      });
    }
    function $w(e, t) {
      let n = gt({
        store: e,
        select: ({ ixSession: r }) => r.tick,
        onChange: (r) => {
          t(r), n();
        },
      });
    }
    function Zw({ rawData: e, defer: t }, n) {
      let r = () => {
        vr({ store: n, rawData: e, allowEvents: !0 }), xE();
      };
      t ? setTimeout(r, 0) : r();
    }
    function xE() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function Jw(e, t) {
      let {
          actionTypeId: n,
          actionListId: r,
          actionItemId: a,
          eventId: i,
          allowEvents: o,
          immediate: s,
          testManual: u,
          verbose: l = !0,
        } = e,
        { rawData: y } = e;
      if (r && a && y && s) {
        let g = y.actionLists[r];
        g && (y = qw({ actionList: g, actionItemId: a, rawData: y }));
      }
      if (
        (vr({ store: t, rawData: y, allowEvents: o, testManual: u }),
        (r && n === Ce.ActionTypeConsts.GENERAL_START_ACTION) || Fa(n))
      ) {
        Va({ store: t, actionListId: r }),
          GE({ store: t, actionListId: r, eventId: i });
        let g = ka({
          store: t,
          eventId: i,
          actionListId: r,
          immediate: s,
          verbose: l,
        });
        l &&
          g &&
          t.dispatch(
            (0, Ee.actionListPlaybackChanged)({
              actionListId: r,
              isPlaying: !s,
            })
          );
      }
    }
    function e8({ actionListId: e }, t) {
      e ? Va({ store: t, actionListId: e }) : qE({ store: t }), _r(t);
    }
    function t8(e, t) {
      _r(t), DE({ store: t, elementApi: Ie });
    }
    function vr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
      let { ixSession: a } = e.getState();
      t && e.dispatch((0, Ee.rawDataImported)(t)),
        a.active ||
          (e.dispatch(
            (0, Ee.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(gr),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n &&
            (s8(e),
            n8(),
            e.getState().ixSession.hasDefinedMediaQueries && Qw(e)),
          e.dispatch((0, Ee.sessionStarted)()),
          r8(e, r));
    }
    function n8() {
      let { documentElement: e } = document;
      e.className.indexOf(LE) === -1 && (e.className += ` ${LE}`);
    }
    function r8(e, t) {
      let n = (r) => {
        let { ixSession: a, ixParameters: i } = e.getState();
        a.active &&
          (e.dispatch((0, Ee.animationFrameChanged)(r, i)),
          t ? $w(e, n) : requestAnimationFrame(n));
      };
      n(window.performance.now());
    }
    function _r(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: n } = t;
        n.forEach(i8), Bw(), e.dispatch((0, Ee.sessionStopped)());
      }
    }
    function i8({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function a8({
      store: e,
      eventStateKey: t,
      eventTarget: n,
      eventId: r,
      eventConfig: a,
      actionListId: i,
      parameterGroup: o,
      smoothing: s,
      restingValue: u,
    }) {
      let { ixData: l, ixSession: y } = e.getState(),
        { events: g } = l,
        p = g[r],
        { eventTypeId: I } = p,
        _ = {},
        m = {},
        O = [],
        { continuousActionGroups: v } = o,
        { id: S } = o;
      Uw(I, a) && (S = Vw(t, S));
      let A = y.hasBoundaryNodes && n ? Ie.getClosestElement(n, gr) : null;
      v.forEach((N) => {
        let { keyframe: x, actionItems: w } = N;
        w.forEach((B) => {
          let { actionTypeId: X } = B,
            { target: H } = B.config;
          if (!H) return;
          let W = H.boundaryMode ? A : null,
            V = Xw(H) + Ga + X;
          if (((m[V] = o8(m[V], x, B)), !_[V])) {
            _[V] = !0;
            let { config: b } = B;
            Er({
              config: b,
              event: p,
              eventTarget: n,
              elementRoot: W,
              elementApi: Ie,
            }).forEach((E) => {
              O.push({ element: E, key: V });
            });
          }
        });
      }),
        O.forEach(({ element: N, key: x }) => {
          let w = m[x],
            B = (0, rt.default)(w, "[0].actionItems[0]", {}),
            { actionTypeId: X } = B,
            W = (
              X === Ce.ActionTypeConsts.PLUGIN_RIVE
                ? (B.config?.target?.selectorGuids || []).length === 0
                : Ir(X)
            )
              ? Ua(X)(N, B)
              : null,
            V = qa({ element: N, actionItem: B, elementApi: Ie }, W);
          Ba({
            store: e,
            element: N,
            eventId: r,
            actionListId: i,
            actionItem: B,
            destination: V,
            continuous: !0,
            parameterId: S,
            actionGroups: w,
            smoothing: s,
            restingValue: u,
            pluginInstance: W,
          });
        });
    }
    function o8(e = [], t, n) {
      let r = [...e],
        a;
      return (
        r.some((i, o) => (i.keyframe === t ? ((a = o), !0) : !1)),
        a == null && ((a = r.length), r.push({ keyframe: t, actionItems: [] })),
        r[a].actionItems.push(n),
        r
      );
    }
    function s8(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: n } = t;
      FE(e),
        (0, gn.default)(n, (a, i) => {
          let o = Nw.default[i];
          if (!o) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          p8({ logic: o, store: e, events: a });
        });
      let { ixSession: r } = e.getState();
      r.eventListeners.length && c8(e);
    }
    var u8 = ["resize", "orientationchange"];
    function c8(e) {
      let t = () => {
        FE(e);
      };
      u8.forEach((n) => {
        window.addEventListener(n, t),
          e.dispatch((0, Ee.eventListenerAdded)(window, [n, t]));
      }),
        t();
    }
    function FE(e) {
      let { ixSession: t, ixData: n } = e.getState(),
        r = window.innerWidth;
      if (r !== t.viewportWidth) {
        let { mediaQueries: a } = n;
        e.dispatch((0, Ee.viewportWidthChanged)({ width: r, mediaQueries: a }));
      }
    }
    var l8 = (e, t) => (0, Ow.default)((0, Sw.default)(e, t), Aw.default),
      d8 = (e, t) => {
        (0, gn.default)(e, (n, r) => {
          n.forEach((a, i) => {
            let o = r + Ga + i;
            t(a, r, o);
          });
        });
      },
      f8 = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Er({ config: t, elementApi: Ie });
      };
    function p8({ logic: e, store: t, events: n }) {
      g8(n);
      let { types: r, handler: a } = e,
        { ixData: i } = t.getState(),
        { actionLists: o } = i,
        s = l8(n, f8);
      if (!(0, bw.default)(s)) return;
      (0, gn.default)(s, (g, p) => {
        let I = n[p],
          { action: _, id: m, mediaQueries: O = i.mediaQueryKeys } = I,
          { actionListId: v } = _.config;
        Hw(O, i.mediaQueryKeys) || t.dispatch((0, Ee.mediaQueriesDefined)()),
          _.actionTypeId === Ce.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(I.config) ? I.config : [I.config]).forEach((A) => {
              let { continuousParameterGroupId: N } = A,
                x = (0, rt.default)(o, `${v}.continuousParameterGroups`, []),
                w = (0, Tw.default)(x, ({ id: H }) => H === N),
                B = (A.smoothing || 0) / 100,
                X = (A.restingState || 0) / 100;
              w &&
                g.forEach((H, W) => {
                  let V = m + Ga + W;
                  a8({
                    store: t,
                    eventStateKey: V,
                    eventTarget: H,
                    eventId: m,
                    eventConfig: A,
                    actionListId: v,
                    parameterGroup: w,
                    smoothing: B,
                    restingValue: X,
                  });
                });
            }),
          (_.actionTypeId === Ce.ActionTypeConsts.GENERAL_START_ACTION ||
            Fa(_.actionTypeId)) &&
            GE({ store: t, actionListId: v, eventId: m });
      });
      let u = (g) => {
          let { ixSession: p } = t.getState();
          d8(s, (I, _, m) => {
            let O = n[_],
              v = p.eventState[m],
              { action: S, mediaQueries: A = i.mediaQueryKeys } = O;
            if (!yr(A, p.mediaQueryKey)) return;
            let N = (x = {}) => {
              let w = a(
                {
                  store: t,
                  element: I,
                  event: O,
                  eventConfig: x,
                  nativeEvent: g,
                  eventStateKey: m,
                },
                v
              );
              Ww(w, v) || t.dispatch((0, Ee.eventStateChanged)(m, w));
            };
            S.actionTypeId === Ce.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(N)
              : N();
          });
        },
        l = (0, Rw.default)(u, Kw),
        y = ({ target: g = document, types: p, throttle: I }) => {
          p.split(" ")
            .filter(Boolean)
            .forEach((_) => {
              let m = I ? l : u;
              g.addEventListener(_, m),
                t.dispatch((0, Ee.eventListenerAdded)(g, [_, m]));
            });
        };
      Array.isArray(r) ? r.forEach(y) : typeof r == "string" && y(e);
    }
    function g8(e) {
      if (!Yw) return;
      let t = {},
        n = "";
      for (let r in e) {
        let { eventTypeId: a, target: i } = e[r],
          o = Ie.getQuerySelector(i);
        t[o] ||
          ((a === Ce.EventTypeConsts.MOUSE_CLICK ||
            a === Ce.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[o] = !0),
            (n += o + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (n) {
        let r = document.createElement("style");
        (r.textContent = n), document.body.appendChild(r);
      }
    }
    function GE({ store: e, actionListId: t, eventId: n }) {
      let { ixData: r, ixSession: a } = e.getState(),
        { actionLists: i, events: o } = r,
        s = o[n],
        u = i[t];
      if (u && u.useFirstGroupAsInitialState) {
        let l = (0, rt.default)(u, "actionItemGroups[0].actionItems", []),
          y = (0, rt.default)(s, "mediaQueries", r.mediaQueryKeys);
        if (!yr(y, a.mediaQueryKey)) return;
        l.forEach((g) => {
          let { config: p, actionTypeId: I } = g,
            _ =
              p?.target?.useEventTarget === !0 && p?.target?.objectId == null
                ? { target: s.target, targets: s.targets }
                : p,
            m = Er({ config: _, event: s, elementApi: Ie }),
            O = Ir(I);
          m.forEach((v) => {
            let S = O ? Ua(I)(v, g) : null;
            Ba({
              destination: qa({ element: v, actionItem: g, elementApi: Ie }, S),
              immediate: !0,
              store: e,
              element: v,
              eventId: n,
              actionItem: g,
              actionListId: t,
              pluginInstance: S,
            });
          });
        });
      }
    }
    function qE({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, gn.default)(t, (n) => {
        if (!n.continuous) {
          let { actionListId: r, verbose: a } = n;
          Xa(n, e),
            a &&
              e.dispatch(
                (0, Ee.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Va({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
    }) {
      let { ixInstances: i, ixSession: o } = e.getState(),
        s = o.hasBoundaryNodes && n ? Ie.getClosestElement(n, gr) : null;
      (0, gn.default)(i, (u) => {
        let l = (0, rt.default)(u, "actionItem.config.target.boundaryMode"),
          y = r ? u.eventStateKey === r : !0;
        if (u.actionListId === a && u.eventId === t && y) {
          if (s && l && !Ie.elementContains(s, u.element)) return;
          Xa(u, e),
            u.verbose &&
              e.dispatch(
                (0, Ee.actionListPlaybackChanged)({
                  actionListId: a,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function ka({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
      groupIndex: i = 0,
      immediate: o,
      verbose: s,
    }) {
      let { ixData: u, ixSession: l } = e.getState(),
        { events: y } = u,
        g = y[t] || {},
        { mediaQueries: p = u.mediaQueryKeys } = g,
        I = (0, rt.default)(u, `actionLists.${a}`, {}),
        { actionItemGroups: _, useFirstGroupAsInitialState: m } = I;
      if (!_ || !_.length) return !1;
      i >= _.length && (0, rt.default)(g, "config.loop") && (i = 0),
        i === 0 && m && i++;
      let v =
          (i === 0 || (i === 1 && m)) && Fa(g.action?.actionTypeId)
            ? g.config.delay
            : void 0,
        S = (0, rt.default)(_, [i, "actionItems"], []);
      if (!S.length || !yr(p, l.mediaQueryKey)) return !1;
      let A = l.hasBoundaryNodes && n ? Ie.getClosestElement(n, gr) : null,
        N = xw(S),
        x = !1;
      return (
        S.forEach((w, B) => {
          let { config: X, actionTypeId: H } = w,
            W = Ir(H),
            { target: V } = X;
          if (!V) return;
          let b = V.boundaryMode ? A : null;
          Er({
            config: X,
            event: g,
            eventTarget: n,
            elementRoot: b,
            elementApi: Ie,
          }).forEach((L, q) => {
            let k = W ? Ua(H)(L, w) : null,
              $ = W ? zw(H)(L, w) : null;
            x = !0;
            let Y = N === B && q === 0,
              ie = Fw({ element: L, actionItem: w }),
              le = qa({ element: L, actionItem: w, elementApi: Ie }, k);
            Ba({
              store: e,
              element: L,
              actionItem: w,
              eventId: t,
              eventTarget: n,
              eventStateKey: r,
              actionListId: a,
              groupIndex: i,
              isCarrier: Y,
              computedStyle: ie,
              destination: le,
              immediate: o,
              verbose: s,
              pluginInstance: k,
              pluginDuration: $,
              instanceDelay: v,
            });
          });
        }),
        x
      );
    }
    function Ba(e) {
      let { store: t, computedStyle: n, ...r } = e,
        {
          element: a,
          actionItem: i,
          immediate: o,
          pluginInstance: s,
          continuous: u,
          restingValue: l,
          eventId: y,
        } = r,
        g = !u,
        p = Mw(),
        { ixElements: I, ixSession: _, ixData: m } = t.getState(),
        O = Pw(I, a),
        { refState: v } = I[O] || {},
        S = Ie.getRefType(a),
        A = _.reducedMotion && Ce.ReducedMotionTypes[i.actionTypeId],
        N;
      if (A && u)
        switch (m.events[y]?.eventTypeId) {
          case Ce.EventTypeConsts.MOUSE_MOVE:
          case Ce.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            N = l;
            break;
          default:
            N = 0.5;
            break;
        }
      let x = Gw(a, v, n, i, Ie, s);
      if (
        (t.dispatch(
          (0, Ee.instanceAdded)({
            instanceId: p,
            elementId: O,
            origin: x,
            refType: S,
            skipMotion: A,
            skipToValue: N,
            ...r,
          })
        ),
        UE(document.body, "ix2-animation-started", p),
        o)
      ) {
        E8(t, p);
        return;
      }
      gt({ store: t, select: ({ ixInstances: w }) => w[p], onChange: VE }),
        g && t.dispatch((0, Ee.instanceStarted)(p, _.tick));
    }
    function Xa(e, t) {
      UE(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: n, actionItem: r } = e,
        { ixElements: a } = t.getState(),
        { ref: i, refType: o } = a[n] || {};
      o === ME && kw(i, r, Ie), t.dispatch((0, Ee.instanceRemoved)(e.id));
    }
    function UE(e, t, n) {
      let r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
    }
    function E8(e, t) {
      let { ixParameters: n } = e.getState();
      e.dispatch((0, Ee.instanceStarted)(t, 0)),
        e.dispatch((0, Ee.animationFrameChanged)(performance.now(), n));
      let { ixInstances: r } = e.getState();
      VE(r[t], e);
    }
    function VE(e, t) {
      let {
          active: n,
          continuous: r,
          complete: a,
          elementId: i,
          actionItem: o,
          actionTypeId: s,
          renderType: u,
          current: l,
          groupIndex: y,
          eventId: g,
          eventTarget: p,
          eventStateKey: I,
          actionListId: _,
          isCarrier: m,
          styleProp: O,
          verbose: v,
          pluginInstance: S,
        } = e,
        { ixData: A, ixSession: N } = t.getState(),
        { events: x } = A,
        w = x && x[g] ? x[g] : {},
        { mediaQueries: B = A.mediaQueryKeys } = w;
      if (yr(B, N.mediaQueryKey) && (r || n || a)) {
        if (l || (u === ww && a)) {
          t.dispatch((0, Ee.elementStateChanged)(i, s, l, o));
          let { ixElements: X } = t.getState(),
            { ref: H, refType: W, refState: V } = X[i] || {},
            b = V && V[s];
          (W === ME || Ir(s)) && Dw(H, V, b, g, o, O, Ie, u, S);
        }
        if (a) {
          if (m) {
            let X = ka({
              store: t,
              eventId: g,
              eventTarget: p,
              eventStateKey: I,
              actionListId: _,
              groupIndex: y + 1,
              verbose: v,
            });
            v &&
              !X &&
              t.dispatch(
                (0, Ee.actionListPlaybackChanged)({
                  actionListId: _,
                  isPlaying: !1,
                })
              );
          }
          Xa(e, t);
        }
      }
    }
  });
  var XE = c((za) => {
    "use strict";
    Object.defineProperty(za, "__esModule", { value: !0 });
    function y8(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    y8(za, {
      actions: function () {
        return _8;
      },
      destroy: function () {
        return BE;
      },
      init: function () {
        return b8;
      },
      setEnv: function () {
        return T8;
      },
      store: function () {
        return mr;
      },
    });
    var I8 = Yr(),
      v8 = m8(zf()),
      Wa = xa(),
      _8 = h8(ir());
    function m8(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function kE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (kE = function (r) {
        return r ? n : t;
      })(e);
    }
    function h8(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = kE(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var mr = (0, I8.createStore)(v8.default);
    function T8(e) {
      e() && (0, Wa.observeRequests)(mr);
    }
    function b8(e) {
      BE(), (0, Wa.startEngine)({ store: mr, rawData: e, allowEvents: !0 });
    }
    function BE() {
      (0, Wa.stopEngine)(mr);
    }
  });
  var YE = c((uD, zE) => {
    "use strict";
    var HE = Ne(),
      WE = XE();
    WE.setEnv(HE.env);
    HE.define(
      "ix2",
      (zE.exports = function () {
        return WE;
      })
    );
  });
  var QE = c((cD, jE) => {
    "use strict";
    var Ya = window.jQuery,
      ze = {},
      hr = [],
      KE = ".w-ix",
      Tr = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ya(t).triggerHandler(ze.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ya(t).triggerHandler(ze.types.OUTRO));
        },
      };
    ze.triggers = {};
    ze.types = { INTRO: "w-ix-intro" + KE, OUTRO: "w-ix-outro" + KE };
    ze.init = function () {
      for (var e = hr.length, t = 0; t < e; t++) {
        var n = hr[t];
        n[0](0, n[1]);
      }
      (hr = []), Ya.extend(ze.triggers, Tr);
    };
    ze.async = function () {
      for (var e in Tr) {
        var t = Tr[e];
        Tr.hasOwnProperty(e) &&
          (ze.triggers[e] = function (n, r) {
            hr.push([t, r]);
          });
      }
    };
    ze.async();
    jE.exports = ze;
  });
  var Or = c((lD, JE) => {
    "use strict";
    var Ka = QE();
    function $E(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var O8 = window.jQuery,
      br = {},
      ZE = ".w-ix",
      A8 = {
        reset: function (e, t) {
          Ka.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ka.triggers.intro(e, t), $E(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ka.triggers.outro(e, t), $E(t, "COMPONENT_INACTIVE");
        },
      };
    br.triggers = {};
    br.types = { INTRO: "w-ix-intro" + ZE, OUTRO: "w-ix-outro" + ZE };
    O8.extend(br.triggers, A8);
    JE.exports = br;
  });
  var n0 = c((dD, t0) => {
    "use strict";
    var Et = Ne(),
      S8 = Or(),
      Ge = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      e0 = !0,
      R8 = /^#[a-zA-Z0-9\-_]+$/;
    Et.define(
      "dropdown",
      (t0.exports = function (e, t) {
        var n = t.debounce,
          r = {},
          a = Et.env(),
          i = !1,
          o,
          s = Et.env.touch,
          u = ".w-dropdown",
          l = "w--open",
          y = S8.triggers,
          g = 900,
          p = "focusout" + u,
          I = "keydown" + u,
          _ = "mouseenter" + u,
          m = "mousemove" + u,
          O = "mouseleave" + u,
          v = (s ? "click" : "mouseup") + u,
          S = "w-close" + u,
          A = "setting" + u,
          N = e(document),
          x;
        (r.ready = w),
          (r.design = function () {
            i && E(), (i = !1), w();
          }),
          (r.preview = function () {
            (i = !0), w();
          });
        function w() {
          (o = a && Et.env("design")), (x = N.find(u)), x.each(B);
        }
        function B(f, G) {
          var D = e(G),
            P = e.data(G, u);
          P ||
            (P = e.data(G, u, {
              open: !1,
              el: D,
              config: {},
              selectedIdx: -1,
            })),
            (P.toggle = P.el.children(".w-dropdown-toggle")),
            (P.list = P.el.children(".w-dropdown-list")),
            (P.links = P.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (P.complete = k(P)),
            (P.mouseLeave = Y(P)),
            (P.mouseUpOutside = q(P)),
            (P.mouseMoveOutside = ie(P)),
            X(P);
          var K = P.toggle.attr("id"),
            ne = P.list.attr("id");
          K || (K = "w-dropdown-toggle-" + f),
            ne || (ne = "w-dropdown-list-" + f),
            P.toggle.attr("id", K),
            P.toggle.attr("aria-controls", ne),
            P.toggle.attr("aria-haspopup", "menu"),
            P.toggle.attr("aria-expanded", "false"),
            P.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            P.toggle.prop("tagName") !== "BUTTON" &&
              (P.toggle.attr("role", "button"),
              P.toggle.attr("tabindex") || P.toggle.attr("tabindex", "0")),
            P.list.attr("id", ne),
            P.list.attr("aria-labelledby", K),
            P.links.each(function (Z, ue) {
              ue.hasAttribute("tabindex") || ue.setAttribute("tabindex", "0"),
                R8.test(ue.hash) &&
                  ue.addEventListener("click", b.bind(null, P));
            }),
            P.el.off(u),
            P.toggle.off(u),
            P.nav && P.nav.off(u);
          var z = W(P, e0);
          o && P.el.on(A, H(P)),
            o ||
              (a && ((P.hovering = !1), b(P)),
              P.config.hover && P.toggle.on(_, $(P)),
              P.el.on(S, z),
              P.el.on(I, le(P)),
              P.el.on(p, C(P)),
              P.toggle.on(v, z),
              P.toggle.on(I, pe(P)),
              (P.nav = P.el.closest(".w-nav")),
              P.nav.on(S, z));
        }
        function X(f) {
          var G = Number(f.el.css("z-index"));
          (f.manageZ = G === g || G === g + 1),
            (f.config = {
              hover: f.el.attr("data-hover") === "true" && !s,
              delay: f.el.attr("data-delay"),
            });
        }
        function H(f) {
          return function (G, D) {
            (D = D || {}),
              X(f),
              D.open === !0 && V(f),
              D.open === !1 && b(f, { immediate: !0 });
          };
        }
        function W(f, G) {
          return n(function (D) {
            if (f.open || (D && D.type === "w-close"))
              return b(f, { forceClose: G });
            V(f);
          });
        }
        function V(f) {
          if (!f.open) {
            L(f),
              (f.open = !0),
              f.list.addClass(l),
              f.toggle.addClass(l),
              f.toggle.attr("aria-expanded", "true"),
              y.intro(0, f.el[0]),
              Et.redraw.up(),
              f.manageZ && f.el.css("z-index", g + 1);
            var G = Et.env("editor");
            o || N.on(v, f.mouseUpOutside),
              f.hovering && !G && f.el.on(O, f.mouseLeave),
              f.hovering && G && N.on(m, f.mouseMoveOutside),
              window.clearTimeout(f.delayId);
          }
        }
        function b(f, { immediate: G, forceClose: D } = {}) {
          if (f.open && !(f.config.hover && f.hovering && !D)) {
            f.toggle.attr("aria-expanded", "false"), (f.open = !1);
            var P = f.config;
            if (
              (y.outro(0, f.el[0]),
              N.off(v, f.mouseUpOutside),
              N.off(m, f.mouseMoveOutside),
              f.el.off(O, f.mouseLeave),
              window.clearTimeout(f.delayId),
              !P.delay || G)
            )
              return f.complete();
            f.delayId = window.setTimeout(f.complete, P.delay);
          }
        }
        function E() {
          N.find(u).each(function (f, G) {
            e(G).triggerHandler(S);
          });
        }
        function L(f) {
          var G = f.el[0];
          x.each(function (D, P) {
            var K = e(P);
            K.is(G) || K.has(G).length || K.triggerHandler(S);
          });
        }
        function q(f) {
          return (
            f.mouseUpOutside && N.off(v, f.mouseUpOutside),
            n(function (G) {
              if (f.open) {
                var D = e(G.target);
                if (!D.closest(".w-dropdown-toggle").length) {
                  var P = e.inArray(f.el[0], D.parents(u)) === -1,
                    K = Et.env("editor");
                  if (P) {
                    if (K) {
                      var ne =
                          D.parents().length === 1 &&
                          D.parents("svg").length === 1,
                        z = D.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (ne || z) return;
                    }
                    b(f);
                  }
                }
              }
            })
          );
        }
        function k(f) {
          return function () {
            f.list.removeClass(l),
              f.toggle.removeClass(l),
              f.manageZ && f.el.css("z-index", "");
          };
        }
        function $(f) {
          return function () {
            (f.hovering = !0), V(f);
          };
        }
        function Y(f) {
          return function () {
            (f.hovering = !1), f.links.is(":focus") || b(f);
          };
        }
        function ie(f) {
          return n(function (G) {
            if (f.open) {
              var D = e(G.target),
                P = e.inArray(f.el[0], D.parents(u)) === -1;
              if (P) {
                var K = D.parents(".w-editor-bem-EditorHoverControls").length,
                  ne = D.parents(".w-editor-bem-RTToolbar").length,
                  z = e(".w-editor-bem-EditorOverlay"),
                  Z =
                    z.find(".w-editor-edit-outline").length ||
                    z.find(".w-editor-bem-RTToolbar").length;
                if (K || ne || Z) return;
                (f.hovering = !1), b(f);
              }
            }
          });
        }
        function le(f) {
          return function (G) {
            if (!(o || !f.open))
              switch (
                ((f.selectedIdx = f.links.index(document.activeElement)),
                G.keyCode)
              ) {
                case Ge.HOME:
                  return f.open
                    ? ((f.selectedIdx = 0), ve(f), G.preventDefault())
                    : void 0;
                case Ge.END:
                  return f.open
                    ? ((f.selectedIdx = f.links.length - 1),
                      ve(f),
                      G.preventDefault())
                    : void 0;
                case Ge.ESCAPE:
                  return b(f), f.toggle.focus(), G.stopPropagation();
                case Ge.ARROW_RIGHT:
                case Ge.ARROW_DOWN:
                  return (
                    (f.selectedIdx = Math.min(
                      f.links.length - 1,
                      f.selectedIdx + 1
                    )),
                    ve(f),
                    G.preventDefault()
                  );
                case Ge.ARROW_LEFT:
                case Ge.ARROW_UP:
                  return (
                    (f.selectedIdx = Math.max(-1, f.selectedIdx - 1)),
                    ve(f),
                    G.preventDefault()
                  );
              }
          };
        }
        function ve(f) {
          f.links[f.selectedIdx] && f.links[f.selectedIdx].focus();
        }
        function pe(f) {
          var G = W(f, e0);
          return function (D) {
            if (!o) {
              if (!f.open)
                switch (D.keyCode) {
                  case Ge.ARROW_UP:
                  case Ge.ARROW_DOWN:
                    return D.stopPropagation();
                }
              switch (D.keyCode) {
                case Ge.SPACE:
                case Ge.ENTER:
                  return G(), D.stopPropagation(), D.preventDefault();
              }
            }
          };
        }
        function C(f) {
          return n(function (G) {
            var { relatedTarget: D, target: P } = G,
              K = f.el[0],
              ne = K.contains(D) || K.contains(P);
            return ne || b(f), G.stopPropagation();
          });
        }
        return r;
      })
    );
  });
  var r0 = c((ja) => {
    "use strict";
    Object.defineProperty(ja, "__esModule", { value: !0 });
    Object.defineProperty(ja, "default", {
      enumerable: !0,
      get: function () {
        return N8;
      },
    });
    function N8(e, t, n, r, a, i, o, s, u, l, y, g, p) {
      return function (I) {
        e(I);
        var _ = I.form,
          m = {
            name: _.attr("data-name") || _.attr("name") || "Untitled Form",
            pageId: _.attr("data-wf-page-id") || "",
            elementId: _.attr("data-wf-element-id") || "",
            domain: g("html").attr("data-wf-domain") || null,
            source: t.href,
            test: n.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              _.html()
            ),
            trackingCookies: r(),
          };
        let O = _.attr("data-wf-flow");
        O && (m.wfFlow = O), a(I);
        var v = i(_, m.fields);
        if (v) return o(v);
        if (((m.fileUploads = s(_)), u(I), !l)) {
          y(I);
          return;
        }
        g.ajax({
          url: p,
          type: "POST",
          data: m,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (S) {
            S && S.code === 200 && (I.success = !0), y(I);
          })
          .fail(function () {
            y(I);
          });
      };
    }
  });
  var a0 = c((pD, i0) => {
    "use strict";
    var Ar = Ne(),
      L8 = (e, t, n, r) => {
        let a = document.createElement("div");
        t.appendChild(a),
          turnstile.render(a, {
            sitekey: e,
            callback: function (i) {
              n(i);
            },
            "error-callback": function () {
              r();
            },
          });
      };
    Ar.define(
      "forms",
      (i0.exports = function (e, t) {
        let n = "TURNSTILE_LOADED";
        var r = {},
          a = e(document),
          i,
          o = window.location,
          s = window.XDomainRequest && !window.atob,
          u = ".w-form",
          l,
          y = /e(-)?mail/i,
          g = /^\S+@\S+$/,
          p = window.alert,
          I = Ar.env(),
          _,
          m,
          O;
        let v = a.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          S;
        var A = /list-manage[1-9]?.com/i,
          N = t.debounce(function () {
            p(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              w(), x(), !I && !_ && X();
            };
        function x() {
          (l = e("html").attr("data-wf-site")),
            (m = "https://webflow.com/api/v1/form/" + l),
            s &&
              m.indexOf("https://webflow.com") >= 0 &&
              (m = m.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${m}/signFile`),
            (i = e(u + " form")),
            i.length && i.each(B);
        }
        function w() {
          v &&
            ((S = document.createElement("script")),
            (S.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(S),
            (S.onload = () => {
              a.trigger(n);
            }));
        }
        function B(C, f) {
          var G = e(f),
            D = e.data(f, u);
          D || (D = e.data(f, u, { form: G })), H(D);
          var P = G.closest("div.w-form");
          (D.done = P.find("> .w-form-done")),
            (D.fail = P.find("> .w-form-fail")),
            (D.fileUploads = P.find(".w-file-upload")),
            D.fileUploads.each(function (z) {
              le(z, D);
            }),
            v &&
              ((D.wait = !1),
              W(D),
              a.on(typeof turnstile < "u" ? "ready" : n, function () {
                L8(
                  v,
                  f,
                  (z) => {
                    (D.turnstileToken = z), H(D);
                  },
                  () => {
                    W(D);
                  }
                );
              }));
          var K =
            D.form.attr("aria-label") || D.form.attr("data-name") || "Form";
          D.done.attr("aria-label") || D.form.attr("aria-label", K),
            D.done.attr("tabindex", "-1"),
            D.done.attr("role", "region"),
            D.done.attr("aria-label") ||
              D.done.attr("aria-label", K + " success"),
            D.fail.attr("tabindex", "-1"),
            D.fail.attr("role", "region"),
            D.fail.attr("aria-label") ||
              D.fail.attr("aria-label", K + " failure");
          var ne = (D.action = G.attr("action"));
          if (
            ((D.handler = null),
            (D.redirect = G.attr("data-redirect")),
            A.test(ne))
          ) {
            D.handler = $;
            return;
          }
          if (!ne) {
            if (l) {
              D.handler = (() => {
                let z = r0().default;
                return z(H, o, Ar, L, ie, V, p, b, W, l, Y, e, m);
              })();
              return;
            }
            N();
          }
        }
        function X() {
          (_ = !0),
            a.on("submit", u + " form", function (z) {
              var Z = e.data(this, u);
              Z.handler && ((Z.evt = z), Z.handler(Z));
            });
          let C = ".w-checkbox-input",
            f = ".w-radio-input",
            G = "w--redirected-checked",
            D = "w--redirected-focus",
            P = "w--redirected-focus-visible",
            K = ":focus-visible, [data-wf-focus-visible]",
            ne = [
              ["checkbox", C],
              ["radio", f],
            ];
          a.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + C + ")",
            (z) => {
              e(z.target).siblings(C).toggleClass(G);
            }
          ),
            a.on("change", u + ' form input[type="radio"]', (z) => {
              e(`input[name="${z.target.name}"]:not(${C})`).map((ue, yt) =>
                e(yt).siblings(f).removeClass(G)
              );
              let Z = e(z.target);
              Z.hasClass("w-radio-input") || Z.siblings(f).addClass(G);
            }),
            ne.forEach(([z, Z]) => {
              a.on(
                "focus",
                u + ` form input[type="${z}"]:not(` + Z + ")",
                (ue) => {
                  e(ue.target).siblings(Z).addClass(D),
                    e(ue.target).filter(K).siblings(Z).addClass(P);
                }
              ),
                a.on(
                  "blur",
                  u + ` form input[type="${z}"]:not(` + Z + ")",
                  (ue) => {
                    e(ue.target).siblings(Z).removeClass(`${D} ${P}`);
                  }
                );
            });
        }
        function H(C) {
          var f = (C.btn = C.form.find(':input[type="submit"]'));
          (C.wait = C.btn.attr("data-wait") || null),
            (C.success = !1),
            f.prop("disabled", !!(v && !C.turnstileToken)),
            C.label && f.val(C.label);
        }
        function W(C) {
          var f = C.btn,
            G = C.wait;
          f.prop("disabled", !0), G && ((C.label = f.val()), f.val(G));
        }
        function V(C, f) {
          var G = null;
          return (
            (f = f || {}),
            C.find(':input:not([type="submit"]):not([type="file"])').each(
              function (D, P) {
                var K = e(P),
                  ne = K.attr("type"),
                  z =
                    K.attr("data-name") || K.attr("name") || "Field " + (D + 1);
                z = encodeURIComponent(z);
                var Z = K.val();
                if (ne === "checkbox") Z = K.is(":checked");
                else if (ne === "radio") {
                  if (f[z] === null || typeof f[z] == "string") return;
                  Z =
                    C.find(
                      'input[name="' + K.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof Z == "string" && (Z = e.trim(Z)),
                  (f[z] = Z),
                  (G = G || q(K, ne, z, Z));
              }
            ),
            G
          );
        }
        function b(C) {
          var f = {};
          return (
            C.find(':input[type="file"]').each(function (G, D) {
              var P = e(D),
                K = P.attr("data-name") || P.attr("name") || "File " + (G + 1),
                ne = P.attr("data-value");
              typeof ne == "string" && (ne = e.trim(ne)), (f[K] = ne);
            }),
            f
          );
        }
        let E = { _mkto_trk: "marketo" };
        function L() {
          return document.cookie.split("; ").reduce(function (f, G) {
            let D = G.split("="),
              P = D[0];
            if (P in E) {
              let K = E[P],
                ne = D.slice(1).join("=");
              f[K] = ne;
            }
            return f;
          }, {});
        }
        function q(C, f, G, D) {
          var P = null;
          return (
            f === "password"
              ? (P = "Passwords cannot be submitted.")
              : C.attr("required")
              ? D
                ? y.test(C.attr("type")) &&
                  (g.test(D) ||
                    (P = "Please enter a valid email address for: " + G))
                : (P = "Please fill out the required field: " + G)
              : G === "g-recaptcha-response" &&
                !D &&
                (P = "Please confirm you\u2019re not a robot."),
            P
          );
        }
        function k(C) {
          ie(C), Y(C);
        }
        function $(C) {
          H(C);
          var f = C.form,
            G = {};
          if (/^https/.test(o.href) && !/^https/.test(C.action)) {
            f.attr("method", "post");
            return;
          }
          ie(C);
          var D = V(f, G);
          if (D) return p(D);
          W(C);
          var P;
          t.each(G, function (Z, ue) {
            y.test(ue) && (G.EMAIL = Z),
              /^((full[ _-]?)?name)$/i.test(ue) && (P = Z),
              /^(first[ _-]?name)$/i.test(ue) && (G.FNAME = Z),
              /^(last[ _-]?name)$/i.test(ue) && (G.LNAME = Z);
          }),
            P &&
              !G.FNAME &&
              ((P = P.split(" ")),
              (G.FNAME = P[0]),
              (G.LNAME = G.LNAME || P[1]));
          var K = C.action.replace("/post?", "/post-json?") + "&c=?",
            ne = K.indexOf("u=") + 2;
          ne = K.substring(ne, K.indexOf("&", ne));
          var z = K.indexOf("id=") + 3;
          (z = K.substring(z, K.indexOf("&", z))),
            (G["b_" + ne + "_" + z] = ""),
            e
              .ajax({ url: K, data: G, dataType: "jsonp" })
              .done(function (Z) {
                (C.success = Z.result === "success" || /already/.test(Z.msg)),
                  C.success || console.info("MailChimp error: " + Z.msg),
                  Y(C);
              })
              .fail(function () {
                Y(C);
              });
        }
        function Y(C) {
          var f = C.form,
            G = C.redirect,
            D = C.success;
          if (D && G) {
            Ar.location(G);
            return;
          }
          C.done.toggle(D),
            C.fail.toggle(!D),
            D ? C.done.focus() : C.fail.focus(),
            f.toggle(!D),
            H(C);
        }
        function ie(C) {
          C.evt && C.evt.preventDefault(), (C.evt = null);
        }
        function le(C, f) {
          if (!f.fileUploads || !f.fileUploads[C]) return;
          var G,
            D = e(f.fileUploads[C]),
            P = D.find("> .w-file-upload-default"),
            K = D.find("> .w-file-upload-uploading"),
            ne = D.find("> .w-file-upload-success"),
            z = D.find("> .w-file-upload-error"),
            Z = P.find(".w-file-upload-input"),
            ue = P.find(".w-file-upload-label"),
            yt = ue.children(),
            Qe = z.find(".w-file-upload-error-msg"),
            qe = ne.find(".w-file-upload-file"),
            En = ne.find(".w-file-remove-link"),
            Bt = qe.find(".w-file-upload-file-name"),
            d = Qe.attr("data-w-size-error"),
            h = Qe.attr("data-w-type-error"),
            T = Qe.attr("data-w-generic-error");
          if (
            (I ||
              ue.on("click keydown", function (Q) {
                (Q.type === "keydown" && Q.which !== 13 && Q.which !== 32) ||
                  (Q.preventDefault(), Z.click());
              }),
            ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            En.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            I)
          )
            Z.on("click", function (Q) {
              Q.preventDefault();
            }),
              ue.on("click", function (Q) {
                Q.preventDefault();
              }),
              yt.on("click", function (Q) {
                Q.preventDefault();
              });
          else {
            En.on("click keydown", function (Q) {
              if (Q.type === "keydown") {
                if (Q.which !== 13 && Q.which !== 32) return;
                Q.preventDefault();
              }
              Z.removeAttr("data-value"),
                Z.val(""),
                Bt.html(""),
                P.toggle(!0),
                ne.toggle(!1),
                ue.focus();
            }),
              Z.on("change", function (Q) {
                (G = Q.target && Q.target.files && Q.target.files[0]),
                  G &&
                    (P.toggle(!1),
                    z.toggle(!1),
                    K.toggle(!0),
                    K.focus(),
                    Bt.text(G.name),
                    ee() || W(f),
                    (f.fileUploads[C].uploading = !0),
                    ve(G, M));
              });
            var R = ue.outerHeight();
            Z.height(R), Z.width(1);
          }
          function F(Q) {
            var U = Q.responseJSON && Q.responseJSON.msg,
              te = T;
            typeof U == "string" && U.indexOf("InvalidFileTypeError") === 0
              ? (te = h)
              : typeof U == "string" &&
                U.indexOf("MaxFileSizeError") === 0 &&
                (te = d),
              Qe.text(te),
              Z.removeAttr("data-value"),
              Z.val(""),
              K.toggle(!1),
              P.toggle(!0),
              z.toggle(!0),
              z.focus(),
              (f.fileUploads[C].uploading = !1),
              ee() || H(f);
          }
          function M(Q, U) {
            if (Q) return F(Q);
            var te = U.fileName,
              re = U.postData,
              ge = U.fileId,
              Re = U.s3Url;
            Z.attr("data-value", ge), pe(Re, re, G, te, j);
          }
          function j(Q) {
            if (Q) return F(Q);
            K.toggle(!1),
              ne.css("display", "inline-block"),
              ne.focus(),
              (f.fileUploads[C].uploading = !1),
              ee() || H(f);
          }
          function ee() {
            var Q = (f.fileUploads && f.fileUploads.toArray()) || [];
            return Q.some(function (U) {
              return U.uploading;
            });
          }
        }
        function ve(C, f) {
          var G = new URLSearchParams({ name: C.name, size: C.size });
          e.ajax({ type: "GET", url: `${O}?${G}`, crossDomain: !0 })
            .done(function (D) {
              f(null, D);
            })
            .fail(function (D) {
              f(D);
            });
        }
        function pe(C, f, G, D, P) {
          var K = new FormData();
          for (var ne in f) K.append(ne, f[ne]);
          K.append("file", G, D),
            e
              .ajax({
                type: "POST",
                url: C,
                data: K,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                P(null);
              })
              .fail(function (z) {
                P(z);
              });
        }
        return r;
      })
    );
  });
  var s0 = c((gD, o0) => {
    "use strict";
    var it = Ne(),
      C8 = Or();
    it.define(
      "tabs",
      (o0.exports = function (e) {
        var t = {},
          n = e.tram,
          r = e(document),
          a,
          i,
          o = it.env,
          s = o.safari,
          u = o(),
          l = "data-w-tab",
          y = "data-w-pane",
          g = ".w-tabs",
          p = "w--current",
          I = "w--tab-active",
          _ = C8.triggers,
          m = !1;
        (t.ready = t.design = t.preview = O),
          (t.redraw = function () {
            (m = !0), O(), (m = !1);
          }),
          (t.destroy = function () {
            (a = r.find(g)), a.length && (a.each(A), v());
          });
        function O() {
          (i = u && it.env("design")),
            (a = r.find(g)),
            a.length &&
              (a.each(N), it.env("preview") && !m && a.each(A), v(), S());
        }
        function v() {
          it.redraw.off(t.redraw);
        }
        function S() {
          it.redraw.on(t.redraw);
        }
        function A(V, b) {
          var E = e.data(b, g);
          E &&
            (E.links && E.links.each(_.reset),
            E.panes && E.panes.each(_.reset));
        }
        function N(V, b) {
          var E = g.substr(1) + "-" + V,
            L = e(b),
            q = e.data(b, g);
          if (
            (q || (q = e.data(b, g, { el: L, config: {} })),
            (q.current = null),
            (q.tabIdentifier = E + "-" + l),
            (q.paneIdentifier = E + "-" + y),
            (q.menu = L.children(".w-tab-menu")),
            (q.links = q.menu.children(".w-tab-link")),
            (q.content = L.children(".w-tab-content")),
            (q.panes = q.content.children(".w-tab-pane")),
            q.el.off(g),
            q.links.off(g),
            q.menu.attr("role", "tablist"),
            q.links.attr("tabindex", "-1"),
            x(q),
            !i)
          ) {
            q.links.on("click" + g, B(q)), q.links.on("keydown" + g, X(q));
            var k = q.links.filter("." + p),
              $ = k.attr(l);
            $ && H(q, { tab: $, immediate: !0 });
          }
        }
        function x(V) {
          var b = {};
          b.easing = V.el.attr("data-easing") || "ease";
          var E = parseInt(V.el.attr("data-duration-in"), 10);
          E = b.intro = E === E ? E : 0;
          var L = parseInt(V.el.attr("data-duration-out"), 10);
          (L = b.outro = L === L ? L : 0),
            (b.immediate = !E && !L),
            (V.config = b);
        }
        function w(V) {
          var b = V.current;
          return Array.prototype.findIndex.call(
            V.links,
            (E) => E.getAttribute(l) === b,
            null
          );
        }
        function B(V) {
          return function (b) {
            b.preventDefault();
            var E = b.currentTarget.getAttribute(l);
            E && H(V, { tab: E });
          };
        }
        function X(V) {
          return function (b) {
            var E = w(V),
              L = b.key,
              q = {
                ArrowLeft: E - 1,
                ArrowUp: E - 1,
                ArrowRight: E + 1,
                ArrowDown: E + 1,
                End: V.links.length - 1,
                Home: 0,
              };
            if (L in q) {
              b.preventDefault();
              var k = q[L];
              k === -1 && (k = V.links.length - 1),
                k === V.links.length && (k = 0);
              var $ = V.links[k],
                Y = $.getAttribute(l);
              Y && H(V, { tab: Y });
            }
          };
        }
        function H(V, b) {
          b = b || {};
          var E = V.config,
            L = E.easing,
            q = b.tab;
          if (q !== V.current) {
            V.current = q;
            var k;
            V.links.each(function (C, f) {
              var G = e(f);
              if (b.immediate || E.immediate) {
                var D = V.panes[C];
                f.id || (f.id = V.tabIdentifier + "-" + C),
                  D.id || (D.id = V.paneIdentifier + "-" + C),
                  (f.href = "#" + D.id),
                  f.setAttribute("role", "tab"),
                  f.setAttribute("aria-controls", D.id),
                  f.setAttribute("aria-selected", "false"),
                  D.setAttribute("role", "tabpanel"),
                  D.setAttribute("aria-labelledby", f.id);
              }
              f.getAttribute(l) === q
                ? ((k = f),
                  G.addClass(p)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(_.intro))
                : G.hasClass(p) &&
                  G.removeClass(p)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(_.outro);
            });
            var $ = [],
              Y = [];
            V.panes.each(function (C, f) {
              var G = e(f);
              f.getAttribute(l) === q ? $.push(f) : G.hasClass(I) && Y.push(f);
            });
            var ie = e($),
              le = e(Y);
            if (b.immediate || E.immediate) {
              ie.addClass(I).each(_.intro),
                le.removeClass(I),
                m || it.redraw.up();
              return;
            } else {
              var ve = window.scrollX,
                pe = window.scrollY;
              k.focus(), window.scrollTo(ve, pe);
            }
            le.length && E.outro
              ? (le.each(_.outro),
                n(le)
                  .add("opacity " + E.outro + "ms " + L, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => W(E, le, ie)))
              : W(E, le, ie);
          }
        }
        function W(V, b, E) {
          if (
            (b
              .removeClass(I)
              .css({
                opacity: "",
                transition: "",
                transform: "",
                width: "",
                height: "",
              }),
            E.addClass(I).each(_.intro),
            it.redraw.up(),
            !V.intro)
          )
            return n(E).set({ opacity: 1 });
          n(E)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + V.intro + "ms " + V.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  uo();
  lo();
  po();
  yo();
  vo();
  mo();
  To();
  YE();
  Or();
  n0();
  a0();
  s0();
  Webflow.require("ix2").init({
    events: {
      e: {
        id: "e",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main"],
        target: {
          selector: ".button_container",
          originalId:
            "62977c0da786014525b34a34|3fd1967f-cac3-26ff-0606-306c420138b4",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".button_container",
            originalId:
              "62977c0da786014525b34a34|f7361832-5c17-9838-eef3-e741eb789bd5",
            appliesTo: "CLASS",
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 50,
            restingState: 50,
          },
          {
            continuousParameterGroupId: "a-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 50,
            restingState: 50,
          },
        ],
        createdOn: 1645604235982,
      },
      "e-140": {
        id: "e-140",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-33",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-141",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc4c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1688758653129,
      },
      "e-141": {
        id: "e-141",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-34",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-140",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc4c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1688758653129,
      },
      "e-144": {
        id: "e-144",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-35",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-145",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".nav_menu-button",
          originalId: "2d812dcc-30d1-50a5-a7e7-f32f0a561dad",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".nav_menu-button",
            originalId: "2d812dcc-30d1-50a5-a7e7-f32f0a561dad",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1688935637448,
      },
      "e-145": {
        id: "e-145",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-36",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-144",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".nav_menu-button",
          originalId: "2d812dcc-30d1-50a5-a7e7-f32f0a561dad",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".nav_menu-button",
            originalId: "2d812dcc-30d1-50a5-a7e7-f32f0a561dad",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1688935637448,
      },
      "e-146": {
        id: "e-146",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-36",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-147",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".nav_link-custom",
          originalId: "2d812dcc-30d1-50a5-a7e7-f32f0a561db7",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".nav_link-custom",
            originalId: "2d812dcc-30d1-50a5-a7e7-f32f0a561db7",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1688936390923,
      },
      "e-148": {
        id: "e-148",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-37",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-149",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".read",
          originalId:
            "62977c0da786014525b34a34|15ace54a-5538-1144-3e6a-cf8f9d49b3c1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".read",
            originalId:
              "62977c0da786014525b34a34|15ace54a-5538-1144-3e6a-cf8f9d49b3c1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1688577247757,
      },
      "e-149": {
        id: "e-149",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-38",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-148",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".read",
          originalId:
            "62977c0da786014525b34a34|15ace54a-5538-1144-3e6a-cf8f9d49b3c1",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".read",
            originalId:
              "62977c0da786014525b34a34|15ace54a-5538-1144-3e6a-cf8f9d49b3c1",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1688577247757,
      },
      "e-153": {
        id: "e-153",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-41", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601042fb34a3b|fc673737-9f7b-385a-9a60-b502eab63a3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601042fb34a3b|fc673737-9f7b-385a-9a60-b502eab63a3c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-41-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 85,
            restingState: 40,
          },
          {
            continuousParameterGroupId: "a-41-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 85,
            restingState: 40,
          },
        ],
        createdOn: 1689100510438,
      },
      "e-154": {
        id: "e-154",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_MOVE",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-41", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c|383659c5-645f-1fc9-2cf8-7824a4ec2c09",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c|383659c5-645f-1fc9-2cf8-7824a4ec2c09",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-41-p",
            selectedAxis: "X_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 85,
            restingState: 40,
          },
          {
            continuousParameterGroupId: "a-41-p-2",
            selectedAxis: "Y_AXIS",
            basedOn: "ELEMENT",
            reverse: !1,
            smoothing: 85,
            restingState: 40,
          },
        ],
        createdOn: 1689100580128,
      },
      "e-156": {
        id: "e-156",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-42",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-155",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da786014525b34a34",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1689262907930,
      },
      "e-158": {
        id: "e-158",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-43",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-157",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da786014525b34a34",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1689263160904,
      },
      "e-159": {
        id: "e-159",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-44",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-160",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da786014525b34a34",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1689263326030,
      },
      "e-161": {
        id: "e-161",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-45", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "62977c0da786014525b34a34",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-45-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1689263616290,
      },
      "e-162": {
        id: "e-162",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-46", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["small", "tiny"],
        target: {
          id: "62977c0da786014525b34a34",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-46-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1689264167232,
      },
      "e-163": {
        id: "e-163",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-47", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "62977c0da786014525b34a34",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-47-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1689264579146,
      },
      "e-164": {
        id: "e-164",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-48", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["small", "tiny"],
        target: {
          id: "62977c0da786014525b34a34",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da786014525b34a34",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-48-p",
            smoothing: 50,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1689264867327,
      },
      "e-166": {
        id: "e-166",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-43",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-165",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601042fb34a3b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601042fb34a3b",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1689265553242,
      },
      "e-167": {
        id: "e-167",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-45", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "62977c0da78601042fb34a3b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601042fb34a3b",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-45-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1689265591584,
      },
      "e-168": {
        id: "e-168",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-46", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["small", "tiny"],
        target: {
          id: "62977c0da78601042fb34a3b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601042fb34a3b",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-46-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1689265612270,
      },
      "e-170": {
        id: "e-170",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-43",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-169",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1689265661821,
      },
      "e-174": {
        id: "e-174",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_FINISH",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-43",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-173",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f317b34a3a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f317b34a3a",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1689266083620,
      },
      "e-175": {
        id: "e-175",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-49",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-176",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".swiper-slide",
          originalId:
            "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc53",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".swiper-slide",
            originalId:
              "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc53",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1689326358504,
      },
      "e-176": {
        id: "e-176",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-50",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-175",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".swiper-slide",
          originalId:
            "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc53",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".swiper-slide",
            originalId:
              "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc53",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1689326358504,
      },
      "e-177": {
        id: "e-177",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-51", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "62977c0da78601f841b34a3c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-51-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1692779758652,
      },
      "e-178": {
        id: "e-178",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-52", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-52-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1692779795315,
      },
      "e-179": {
        id: "e-179",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OVER",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-53",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-180",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c|6aaa21e1-9664-85c0-d9ef-8765b03b120f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c|6aaa21e1-9664-85c0-d9ef-8765b03b120f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1658946941367,
      },
      "e-180": {
        id: "e-180",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_OUT",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-54",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-179",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c|6aaa21e1-9664-85c0-d9ef-8765b03b120f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c|6aaa21e1-9664-85c0-d9ef-8765b03b120f",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1658946941367,
      },
      "e-181": {
        id: "e-181",
        name: "",
        animationType: "custom",
        eventTypeId: "SCROLLING_IN_VIEW",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-55", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c|f51dbb73-c25c-3693-d605-30d07611c1bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c|f51dbb73-c25c-3693-d605-30d07611c1bc",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-55-p",
            smoothing: 50,
            startsEntering: !1,
            addStartOffset: !0,
            addOffsetValue: -1,
            startsExiting: !1,
            addEndOffset: !0,
            endOffsetValue: 1,
          },
        ],
        createdOn: 1701456111816,
      },
      "e-182": {
        id: "e-182",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-56",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-183",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c|a1c77fad-92b9-c55a-9894-3fdf29a65a66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c|a1c77fad-92b9-c55a-9894-3fdf29a65a66",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1701457784090,
      },
      "e-186": {
        id: "e-186",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-58",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-187",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1701458358326,
      },
      "e-188": {
        id: "e-188",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-57",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-189",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "62977c0da78601f841b34a3c|81359455-99b2-e9c4-5705-a257307880d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "62977c0da78601f841b34a3c|81359455-99b2-e9c4-5705-a257307880d2",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1701683798567,
      },
      "e-198": {
        id: "e-198",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-45", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "671890451881d5769f778d32",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "671890451881d5769f778d32",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-45-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1729663046439,
      },
      "e-199": {
        id: "e-199",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-46", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["small", "tiny"],
        target: {
          id: "671890451881d5769f778d32",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "671890451881d5769f778d32",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-46-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1729663046439,
      },
      "e-202": {
        id: "e-202",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-203",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "671890451881d5769f778d32|e7a87acd-dd23-3349-4275-77a725b3ffe0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "671890451881d5769f778d32|e7a87acd-dd23-3349-4275-77a725b3ffe0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1648106407260,
      },
      "e-203": {
        id: "e-203",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-202",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "671890451881d5769f778d32|e7a87acd-dd23-3349-4275-77a725b3ffe0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "671890451881d5769f778d32|e7a87acd-dd23-3349-4275-77a725b3ffe0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1648106407264,
      },
      "e-208": {
        id: "e-208",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-209",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "671890451881d5769f778d32|c6fca5c6-ce3a-53cb-b05c-c1307bfde5af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "671890451881d5769f778d32|c6fca5c6-ce3a-53cb-b05c-c1307bfde5af",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1729670490941,
      },
      "e-209": {
        id: "e-209",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-208",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "671890451881d5769f778d32|c6fca5c6-ce3a-53cb-b05c-c1307bfde5af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "671890451881d5769f778d32|c6fca5c6-ce3a-53cb-b05c-c1307bfde5af",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1729670490941,
      },
      "e-210": {
        id: "e-210",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-211",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "671890451881d5769f778d32|a27b2325-a1ce-1b7e-b298-79730c39cffd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "671890451881d5769f778d32|a27b2325-a1ce-1b7e-b298-79730c39cffd",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1729670491135,
      },
      "e-211": {
        id: "e-211",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-210",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "671890451881d5769f778d32|a27b2325-a1ce-1b7e-b298-79730c39cffd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "671890451881d5769f778d32|a27b2325-a1ce-1b7e-b298-79730c39cffd",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1729670491135,
      },
      "e-212": {
        id: "e-212",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-45", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["main", "medium"],
        target: {
          id: "672a5ea5ddcfd816ab649676",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-45-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1730829989580,
      },
      "e-213": {
        id: "e-213",
        name: "",
        animationType: "preset",
        eventTypeId: "PAGE_SCROLL",
        action: {
          id: "",
          actionTypeId: "GENERAL_CONTINUOUS_ACTION",
          config: { actionListId: "a-46", affectedElements: {}, duration: 0 },
        },
        mediaQueries: ["small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: [
          {
            continuousParameterGroupId: "a-46-p",
            smoothing: 85,
            startsEntering: !0,
            addStartOffset: !1,
            addOffsetValue: 50,
            startsExiting: !1,
            addEndOffset: !1,
            endOffsetValue: 50,
          },
        ],
        createdOn: 1730829989580,
      },
      "e-214": {
        id: "e-214",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-215",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676|e7a87acd-dd23-3349-4275-77a725b3ffe0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676|e7a87acd-dd23-3349-4275-77a725b3ffe0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1730829989580,
      },
      "e-215": {
        id: "e-215",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-214",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676|e7a87acd-dd23-3349-4275-77a725b3ffe0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676|e7a87acd-dd23-3349-4275-77a725b3ffe0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1730829989580,
      },
      "e-216": {
        id: "e-216",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-217",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676|c6fca5c6-ce3a-53cb-b05c-c1307bfde5af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676|c6fca5c6-ce3a-53cb-b05c-c1307bfde5af",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1730829989580,
      },
      "e-217": {
        id: "e-217",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-216",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676|c6fca5c6-ce3a-53cb-b05c-c1307bfde5af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676|c6fca5c6-ce3a-53cb-b05c-c1307bfde5af",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1730829989580,
      },
      "e-218": {
        id: "e-218",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-219",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676|a27b2325-a1ce-1b7e-b298-79730c39cffd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676|a27b2325-a1ce-1b7e-b298-79730c39cffd",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1730829989580,
      },
      "e-219": {
        id: "e-219",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-218",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676|a27b2325-a1ce-1b7e-b298-79730c39cffd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676|a27b2325-a1ce-1b7e-b298-79730c39cffd",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1730829989580,
      },
      "e-220": {
        id: "e-220",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-63",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-221",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676|98a1fd52-24d4-6895-7a6f-7404ae349081",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676|98a1fd52-24d4-6895-7a6f-7404ae349081",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1730875215681,
      },
      "e-221": {
        id: "e-221",
        name: "",
        animationType: "preset",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-64",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-220",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "672a5ea5ddcfd816ab649676|98a1fd52-24d4-6895-7a6f-7404ae349081",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "672a5ea5ddcfd816ab649676|98a1fd52-24d4-6895-7a6f-7404ae349081",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1730875215681,
      },
    },
    actionLists: {
      a: {
        id: "a",
        title: "inner-move",
        continuousParameterGroups: [
          {
            id: "a-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["b0934d9a-875a-bb42-0630-12090a77fbf1"],
                      },
                      xValue: -0.5,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["b0934d9a-875a-bb42-0630-12090a77fbf1"],
                      },
                      xValue: 0.5,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["b0934d9a-875a-bb42-0630-12090a77fbf1"],
                      },
                      yValue: -0.5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["b0934d9a-875a-bb42-0630-12090a77fbf1"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1645603745778,
      },
      "a-33": {
        id: "a-33",
        title: "[Home/Team] Icon Hover",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-33-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_icon",
                    selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12159"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-33-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 4e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_icon",
                    selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12159"],
                  },
                  zValue: 720,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1688758656558,
      },
      "a-34": {
        id: "a-34",
        title: "[Home/Team] Icon Hover out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-34-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 4e3,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_icon",
                    selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12159"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1688758656558,
      },
      "a-35": {
        id: "a-35",
        title: "Nav Open Custom",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-35-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-top",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c753a",
                    ],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-35-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-35-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-top",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c753a",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-35-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-bottom",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c7539",
                    ],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-35-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-bottom",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c7539",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-35-n-6",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
              {
                id: "a-35-n-7",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-35-n-8",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  value: "flex",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-35-n-9",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-top",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c753a",
                    ],
                  },
                  zValue: 45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-35-n-10",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-top",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c753a",
                    ],
                  },
                  yValue: 3,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-35-n-11",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-bottom",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c7539",
                    ],
                  },
                  zValue: -45,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-35-n-12",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 250,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-bottom",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c7539",
                    ],
                  },
                  yValue: -3,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-35-n-13",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 250,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
              {
                id: "a-35-n-14",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 250,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-35-n-15",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 250,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1688935660048,
      },
      "a-36": {
        id: "a-36",
        title: "Nav Open Custom close",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-36-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-top",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c753a",
                    ],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-36-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-top",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c753a",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-36-n-3",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-bottom",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c7539",
                    ],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-36-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav_line.is-bottom",
                    selectorGuids: [
                      "823262bb-407c-64df-80b3-bd754a1c7537",
                      "823262bb-407c-64df-80b3-bd754a1c7539",
                    ],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-36-n-5",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
              {
                id: "a-36-n-6",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-36-n-7",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".nav_menu-dropdown",
                    selectorGuids: ["823262bb-407c-64df-80b3-bd754a1c752b"],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1688935660048,
      },
      "a-37": {
        id: "a-37",
        title: "[Home/Header] Read Hover",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-37-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".read-icon",
                    selectorGuids: ["2f22eb33-8c93-ca7e-01a1-2070b653f67b"],
                  },
                  xValue: 0,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-37-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".read-icon",
                    selectorGuids: ["2f22eb33-8c93-ca7e-01a1-2070b653f67b"],
                  },
                  xValue: 2,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1688577250158,
      },
      "a-38": {
        id: "a-38",
        title: "[Home/Header] Read Hover out",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-38-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".read-icon",
                    selectorGuids: ["2f22eb33-8c93-ca7e-01a1-2070b653f67b"],
                  },
                  xValue: 0,
                  xUnit: "px",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1688577250158,
      },
      "a-41": {
        id: "a-41",
        title: "[Article Box] Move",
        continuousParameterGroups: [
          {
            id: "a-41-p",
            type: "MOUSE_X",
            parameterLabel: "Mouse X",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-41-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".article-light",
                        selectorGuids: ["7d87ec5f-e62d-89f6-dbf9-f683d3c502c3"],
                      },
                      xValue: -25,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-41-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".article-light",
                        selectorGuids: ["7d87ec5f-e62d-89f6-dbf9-f683d3c502c3"],
                      },
                      xValue: 50,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "a-41-p-2",
            type: "MOUSE_Y",
            parameterLabel: "Mouse Y",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-41-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".article-light",
                        selectorGuids: ["7d87ec5f-e62d-89f6-dbf9-f683d3c502c3"],
                      },
                      yValue: -25,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-41-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".article-light",
                        selectorGuids: ["7d87ec5f-e62d-89f6-dbf9-f683d3c502c3"],
                      },
                      yValue: 50,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1688581451114,
      },
      "a-42": {
        id: "a-42",
        title: "[Home] Header BG Animation",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-42-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc1a",
                  },
                  zValue: -30,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
              {
                id: "a-42-n",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc1a",
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-42-n-3",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 250,
                  easing: "ease",
                  duration: 5e3,
                  target: {
                    id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc1a",
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-42-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 250,
                  easing: "ease",
                  duration: 5e3,
                  target: {
                    id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc1a",
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1689262925225,
      },
      "a-43": {
        id: "a-43",
        title: "Footer Animation",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-43-n",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".footer_image",
                    selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12162"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-43-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 24e3,
                  target: {
                    selector: ".footer_image",
                    selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12162"],
                  },
                  zValue: 360,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1689263170405,
      },
      "a-44": {
        id: "a-44",
        title: "[Home] Scroll icon",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-44-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc18",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-44-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1e3,
                  target: {
                    id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc18",
                  },
                  yValue: 8,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-44-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 1e3,
                  target: {
                    id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc18",
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1689263338245,
      },
      "a-45": {
        id: "a-45",
        title: "[Nav] Scroll Desktop",
        continuousParameterGroups: [
          {
            id: "a-45-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-45-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_propeller",
                        selectorGuids: ["846da18f-cb2b-da78-d660-eb6b9f853e2d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-45-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_propeller",
                        selectorGuids: ["846da18f-cb2b-da78-d660-eb6b9f853e2d"],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1689263638821,
      },
      "a-46": {
        id: "a-46",
        title: "[Nav] Scroll Mobile",
        continuousParameterGroups: [
          {
            id: "a-46-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-46-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_propeller",
                        selectorGuids: ["846da18f-cb2b-da78-d660-eb6b9f853e2d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-46-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_propeller",
                        selectorGuids: ["846da18f-cb2b-da78-d660-eb6b9f853e2d"],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1689263638821,
      },
      "a-47": {
        id: "a-47",
        title: "Hero Scrolling (Desktop + Tablet)",
        continuousParameterGroups: [
          {
            id: "a-47-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-47-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc19",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 9,
                actionItems: [
                  {
                    id: "a-47-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc19",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                keyframe: 14,
                actionItems: [
                  {
                    id: "a-47-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc19",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                keyframe: 15,
                actionItems: [
                  {
                    id: "a-47-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc1f",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-47-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc19",
                      },
                      zValue: 12,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 18,
                actionItems: [
                  {
                    id: "a-47-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc1f",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1689264585653,
      },
      "a-48": {
        id: "a-48",
        title: "Hero Scrolling (Mobile)",
        continuousParameterGroups: [
          {
            id: "a-48-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-48-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc19",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 7,
                actionItems: [
                  {
                    id: "a-48-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc19",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                keyframe: 10,
                actionItems: [
                  {
                    id: "a-48-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc19",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-48-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc1f",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-48-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc19",
                      },
                      zValue: 12,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 11,
                actionItems: [
                  {
                    id: "a-48-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "62977c0da786014525b34a34|f86bc5bd-1116-a082-6919-60286da9cc1f",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1689264585653,
      },
      "a-49": {
        id: "a-49",
        title: "[Profile] Animating",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-49-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image",
                    selectorGuids: ["c6eaca4b-0a0e-5ada-53af-1ec2ce7ede9f"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-49-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image.is-down",
                    selectorGuids: [
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7ede9f",
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea6",
                    ],
                  },
                  value: "block",
                },
              },
              {
                id: "a-49-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image-alt",
                    selectorGuids: ["c6eaca4b-0a0e-5ada-53af-1ec2ce7edea4"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-49-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image-alt.is-down",
                    selectorGuids: [
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea4",
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea5",
                    ],
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-49-n-5",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image",
                    selectorGuids: ["c6eaca4b-0a0e-5ada-53af-1ec2ce7ede9f"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-49-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image.is-down",
                    selectorGuids: [
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7ede9f",
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea6",
                    ],
                  },
                  value: "none",
                },
              },
              {
                id: "a-49-n-7",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image-alt",
                    selectorGuids: ["c6eaca4b-0a0e-5ada-53af-1ec2ce7edea4"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-49-n-8",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image-alt.is-down",
                    selectorGuids: [
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea4",
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea5",
                    ],
                  },
                  value: "block",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-49-n-9",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image",
                    selectorGuids: ["c6eaca4b-0a0e-5ada-53af-1ec2ce7ede9f"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-49-n-12",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image-alt.is-down",
                    selectorGuids: [
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea4",
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea5",
                    ],
                  },
                  value: "block",
                },
              },
              {
                id: "a-49-n-11",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image-alt",
                    selectorGuids: ["c6eaca4b-0a0e-5ada-53af-1ec2ce7edea4"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-49-n-10",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image.is-down",
                    selectorGuids: [
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7ede9f",
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea6",
                    ],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1689326370303,
      },
      "a-50": {
        id: "a-50",
        title: "[Profile] Animating stop",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-50-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image",
                    selectorGuids: ["c6eaca4b-0a0e-5ada-53af-1ec2ce7ede9f"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-50-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image.is-down",
                    selectorGuids: [
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7ede9f",
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea6",
                    ],
                  },
                  value: "block",
                },
              },
              {
                id: "a-50-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image-alt",
                    selectorGuids: ["c6eaca4b-0a0e-5ada-53af-1ec2ce7edea4"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-50-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".home-team_image-alt.is-down",
                    selectorGuids: [
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea4",
                      "c6eaca4b-0a0e-5ada-53af-1ec2ce7edea5",
                    ],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1689326370303,
      },
      "a-51": {
        id: "a-51",
        title: "[Nav Post] Scroll Desktop",
        continuousParameterGroups: [
          {
            id: "a-51-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-51-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_propeller",
                        selectorGuids: ["846da18f-cb2b-da78-d660-eb6b9f853e2d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-51-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_propeller",
                        selectorGuids: ["846da18f-cb2b-da78-d660-eb6b9f853e2d"],
                      },
                      zValue: 540,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1689263638821,
      },
      "a-52": {
        id: "a-52",
        title: "[Nav Post] Scroll Mobile",
        continuousParameterGroups: [
          {
            id: "a-52-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-52-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_propeller",
                        selectorGuids: ["846da18f-cb2b-da78-d660-eb6b9f853e2d"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-52-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_propeller",
                        selectorGuids: ["846da18f-cb2b-da78-d660-eb6b9f853e2d"],
                      },
                      zValue: 540,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1689263638821,
      },
      "a-53": {
        id: "a-53",
        title: "(Hover on) Progress Head",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-53-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "easeInOut",
                  duration: 200,
                  target: {
                    useEventTarget: !0,
                    id: "6569f107d72b36fb001769d9|972429ff-c313-4172-7386-d73812956aeb",
                  },
                  xValue: 1.5,
                  yValue: 1.5,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1640899427778,
      },
      "a-54": {
        id: "a-54",
        title: "(Hover Off) Progress Heas",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-54-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "easeInOut",
                  duration: 200,
                  target: {
                    useEventTarget: !0,
                    id: "6569f107d72b36fb001769d9|972429ff-c313-4172-7386-d73812956aeb",
                  },
                  xValue: 1,
                  yValue: 1,
                  locked: !0,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1640899489854,
      },
      "a-55": {
        id: "a-55",
        title: "[Post Theme] Switch",
        continuousParameterGroups: [
          {
            id: "a-55-p",
            type: "SCROLL_PROGRESS",
            parameterLabel: "Scroll",
            continuousActionGroups: [
              {
                keyframe: 0,
                actionItems: [
                  {
                    id: "a-55-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_custom",
                        selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12169"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-55-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".article-header_overlay",
                        selectorGuids: ["e237dda4-c499-4357-1978-f13e529ac29a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-55-n-15",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { red: 255, green: 244, blue: 224, alpha: 1 },
                      target: {
                        objectId: "--post-milk",
                        selector: ".section_article-content",
                        selectorGuids: ["a50516df-2515-a990-63cf-c5e3bef797b7"],
                      },
                    },
                  },
                  {
                    id: "a-55-n-17",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { red: 56, green: 10, blue: 83, alpha: 1 },
                      target: {
                        objectId: "--post-jagger",
                        selector: ".body",
                        selectorGuids: ["24937fc6-ee13-a291-dc67-db876711fb94"],
                      },
                    },
                  },
                ],
              },
              {
                keyframe: 1,
                actionItems: [
                  {
                    id: "a-55-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_custom",
                        selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12169"],
                      },
                      yValue: -7,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-55-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".article-header_overlay",
                        selectorGuids: ["e237dda4-c499-4357-1978-f13e529ac29a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-55-n-16",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { red: 56, green: 10, blue: 83, alpha: 1 },
                      target: {
                        objectId: "--post-milk",
                        selector: ".section_article-content",
                        selectorGuids: ["a50516df-2515-a990-63cf-c5e3bef797b7"],
                      },
                    },
                  },
                  {
                    id: "a-55-n-18",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { red: 255, green: 244, blue: 224, alpha: 1 },
                      target: {
                        objectId: "--post-jagger",
                        selector: ".body",
                        selectorGuids: ["24937fc6-ee13-a291-dc67-db876711fb94"],
                      },
                    },
                  },
                ],
              },
              {
                keyframe: 99,
                actionItems: [
                  {
                    id: "a-55-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_custom",
                        selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12169"],
                      },
                      yValue: -7,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-55-n-19",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { red: 255, green: 244, blue: 224, alpha: 1 },
                      target: {
                        objectId: "--post-jagger",
                        selector: ".section_article-content",
                        selectorGuids: ["a50516df-2515-a990-63cf-c5e3bef797b7"],
                      },
                    },
                  },
                  {
                    id: "a-55-n-21",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { red: 56, green: 10, blue: 83, alpha: 1 },
                      target: {
                        objectId: "--post-milk",
                        selector: ".section_article-content",
                        selectorGuids: ["a50516df-2515-a990-63cf-c5e3bef797b7"],
                      },
                    },
                  },
                ],
              },
              {
                keyframe: 100,
                actionItems: [
                  {
                    id: "a-55-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".nav_custom",
                        selectorGuids: ["76dab49b-a81e-6eb6-422c-78827eb12169"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-55-n-20",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: { red: 56, green: 10, blue: 83, alpha: 1 },
                      target: {
                        objectId: "--post-jagger",
                        selector: ".section_article-content",
                        selectorGuids: ["a50516df-2515-a990-63cf-c5e3bef797b7"],
                      },
                    },
                  },
                  {
                    id: "a-55-n-22",
                    actionTypeId: "PLUGIN_VARIABLE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      value: {},
                      target: {
                        objectId: "--post-milk",
                        selector: ".section_article-content",
                        selectorGuids: ["a50516df-2515-a990-63cf-c5e3bef797b7"],
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
        createdOn: 1701456129578,
      },
      "a-56": {
        id: "a-56",
        title: "[Post Listen] Click",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-56-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".sp-track-wrapper",
                    selectorGuids: ["c8ba8fa2-b563-cf81-d069-27ae6297af08"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-56-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".article-content_info",
                    selectorGuids: ["f35dd50e-1db3-9215-c1ee-fe202812ea14"],
                  },
                  value: "flex",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-56-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".sp-track-wrapper",
                    selectorGuids: ["c8ba8fa2-b563-cf81-d069-27ae6297af08"],
                  },
                  value: "flex",
                },
              },
              {
                id: "a-56-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".article-content_info",
                    selectorGuids: ["f35dd50e-1db3-9215-c1ee-fe202812ea14"],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1701457790441,
      },
      "a-58": {
        id: "a-58",
        title: "[Listen Button] Animation",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-58-n",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|c0390a8b-79fc-e824-8519-abb84488591f",
                  },
                  yValue: 1,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-5",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|a110274a-20ec-c57e-b372-f6097b77412d",
                  },
                  yValue: 0.6,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-9",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|900a53b0-f316-3093-bfd7-fca8fa9c77ea",
                  },
                  yValue: 1.2,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-10",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|8411de68-dc8e-b122-675c-c0448d4240da",
                  },
                  yValue: 1,
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-58-n-2",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|c0390a8b-79fc-e824-8519-abb84488591f",
                  },
                  yValue: 0.5,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-8",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|a110274a-20ec-c57e-b372-f6097b77412d",
                  },
                  yValue: 1.1,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-11",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|900a53b0-f316-3093-bfd7-fca8fa9c77ea",
                  },
                  yValue: 0.8,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-12",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|8411de68-dc8e-b122-675c-c0448d4240da",
                  },
                  yValue: 0.8,
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-58-n-3",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|c0390a8b-79fc-e824-8519-abb84488591f",
                  },
                  yValue: 0.75,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-7",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|a110274a-20ec-c57e-b372-f6097b77412d",
                  },
                  yValue: 0.6,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-13",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|900a53b0-f316-3093-bfd7-fca8fa9c77ea",
                  },
                  yValue: 1.3,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-14",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|8411de68-dc8e-b122-675c-c0448d4240da",
                  },
                  yValue: 0.4,
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-58-n-4",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|c0390a8b-79fc-e824-8519-abb84488591f",
                  },
                  yValue: 0.6,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-6",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|a110274a-20ec-c57e-b372-f6097b77412d",
                  },
                  yValue: 1.2,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-15",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|900a53b0-f316-3093-bfd7-fca8fa9c77ea",
                  },
                  yValue: 0.6,
                  locked: !1,
                },
              },
              {
                id: "a-58-n-16",
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    id: "62977c0da78601f841b34a3c|8411de68-dc8e-b122-675c-c0448d4240da",
                  },
                  yValue: 0.75,
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1701458362708,
      },
      "a-57": {
        id: "a-57",
        title: "[Post Listen] Close",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-57-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".sp-track-wrapper",
                    selectorGuids: ["c8ba8fa2-b563-cf81-d069-27ae6297af08"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-57-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".article-content_info",
                    selectorGuids: ["f35dd50e-1db3-9215-c1ee-fe202812ea14"],
                  },
                  value: "flex",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1701457790441,
      },
      "a-63": {
        id: "a-63",
        title: "Accordion - Click open",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-63-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".accordion_description-wrapper",
                    selectorGuids: ["a74ab9da-7125-5802-3512-1b229bcb67b0"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
              {
                id: "a-63-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".accordion_vertical",
                    selectorGuids: ["637f1e95-2965-7f8e-4f8e-0e38861f4805"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-63-n-3",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".accordion_description-wrapper",
                    selectorGuids: ["a74ab9da-7125-5802-3512-1b229bcb67b0"],
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
              {
                id: "a-63-n-4",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".accordion_vertical",
                    selectorGuids: ["637f1e95-2965-7f8e-4f8e-0e38861f4805"],
                  },
                  zValue: 90,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1646636734958,
      },
      "a-64": {
        id: "a-64",
        title: "Accordion - Click close",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-64-n",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".accordion_description-wrapper",
                    selectorGuids: ["a74ab9da-7125-5802-3512-1b229bcb67b0"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
              {
                id: "a-64-n-2",
                actionTypeId: "TRANSFORM_ROTATE",
                config: {
                  delay: 0,
                  easing: "ease",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".accordion_vertical",
                    selectorGuids: ["637f1e95-2965-7f8e-4f8e-0e38861f4805"],
                  },
                  zValue: 0,
                  xUnit: "DEG",
                  yUnit: "DEG",
                  zUnit: "deg",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1646636734958,
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
