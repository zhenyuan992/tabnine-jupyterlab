var _JUPYTERLAB;
(() => {
  "use strict";
  var e,
    r,
    t,
    n,
    o,
    a,
    i,
    u,
    l,
    f,
    s,
    d,
    p,
    c,
    h,
    v = {
      601: (e, r, t) => {
        var n = {
            "./index": () => t.e(487).then(() => () => t(487)),
            "./extension": () => t.e(487).then(() => () => t(487)),
            "./style": () => t.e(534).then(() => () => t(534)),
          },
          o = (e, r) => (
            (t.R = r),
            (r = t.o(n, e)
              ? n[e]()
              : Promise.resolve().then(() => {
                  throw new Error(
                    'Module "' + e + '" does not exist in container.'
                  );
                })),
            (t.R = void 0),
            r
          ),
          a = (e, r) => {
            if (t.S) {
              var n = t.S.default,
                o = "default";
              if (n && n !== e)
                throw new Error(
                  "Container initialization failed as it has already been initialized with a different share scope"
                );
              return (t.S[o] = e), t.I(o, r);
            }
          };
        t.d(r, { get: () => o, init: () => a });
      },
    },
    b = {};
  function g(e) {
    var r = b[e];
    if (void 0 !== r) return r.exports;
    var t = (b[e] = { id: e, exports: {} });
    return v[e](t, t.exports, g), t.exports;
  }
  (g.m = v),
    (g.c = b),
    (g.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return g.d(r, { a: r }), r;
    }),
    (g.d = (e, r) => {
      for (var t in r)
        g.o(r, t) &&
          !g.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (g.f = {}),
    (g.e = (e) =>
      Promise.all(Object.keys(g.f).reduce((r, t) => (g.f[t](e, r), r), []))),
    (g.u = (e) =>
      e +
      "." +
      { 487: "e89855d908e17799da9e", 534: "a0d25efd97849f4cbffe" }[e] +
      ".js?v=" +
      { 487: "e89855d908e17799da9e", 534: "a0d25efd97849f4cbffe" }[e]),
    (g.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (g.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "@tabnine/jupyterlab:"),
    (g.l = (t, n, o, a) => {
      if (e[t]) e[t].push(n);
      else {
        var i, u;
        if (void 0 !== o)
          for (
            var l = document.getElementsByTagName("script"), f = 0;
            f < l.length;
            f++
          ) {
            var s = l[f];
            if (
              s.getAttribute("src") == t ||
              s.getAttribute("data-webpack") == r + o
            ) {
              i = s;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          g.nc && i.setAttribute("nonce", g.nc),
          i.setAttribute("data-webpack", r + o),
          (i.src = t)),
          (e[t] = [n]);
        var d = (r, n) => {
            (i.onerror = i.onload = null), clearTimeout(p);
            var o = e[t];
            if (
              (delete e[t],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach((e) => e(n)),
              r)
            )
              return r(n);
          },
          p = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = d.bind(null, i.onerror)),
          (i.onload = d.bind(null, i.onload)),
          u && document.head.appendChild(i);
      }
    }),
    (g.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      g.S = {};
      var e = {},
        r = {};
      g.I = (t, n) => {
        n || (n = []);
        var o = r[t];
        if ((o || (o = r[t] = {}), !(n.indexOf(o) >= 0))) {
          if ((n.push(o), e[t])) return e[t];
          g.o(g.S, t) || (g.S[t] = {});
          var a = g.S[t],
            i = "@tabnine/jupyterlab",
            u = [];
          switch (t) {
            case "default":
              ((e, r, t, n) => {
                var o = (a[e] = a[e] || {}),
                  u = o[r];
                (!u || (!u.loaded && (1 != !u.eager ? n : i > u.from))) &&
                  (o[r] = {
                    get: () => g.e(487).then(() => () => g(487)),
                    from: i,
                    eager: !1,
                  });
              })("@tabnine/jupyterlab", "0.1.0");
          }
          return (e[t] = u.length ? Promise.all(u).then(() => (e[t] = 1)) : 1);
        }
      };
    })(),
    (() => {
      var e;
      g.g.importScripts && (e = g.g.location + "");
      var r = g.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName("script");
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (g.p = e);
    })(),
    (t = (e) => {
      var r = (e) => e.split(".").map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        n = t[1] ? r(t[1]) : [];
      return (
        t[2] && (n.length++, n.push.apply(n, r(t[2]))),
        t[3] && (n.push([]), n.push.apply(n, r(t[3]))),
        n
      );
    }),
    (n = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var n = 0; ; ) {
        if (n >= e.length) return n < r.length && "u" != (typeof r[n])[0];
        var o = e[n],
          a = (typeof o)[0];
        if (n >= r.length) return "u" == a;
        var i = r[n],
          u = (typeof i)[0];
        if (a != u) return ("o" == a && "n" == u) || "s" == u || "u" == a;
        if ("o" != a && "u" != a && o != i) return o < i;
        n++;
      }
    }),
    (o = (e) => {
      var r = e[0],
        t = "";
      if (1 === e.length) return "*";
      if (r + 0.5) {
        t +=
          0 == r
            ? ">="
            : -1 == r
            ? "<"
            : 1 == r
            ? "^"
            : 2 == r
            ? "~"
            : r > 0
            ? "="
            : "!=";
        for (var n = 1, a = 1; a < e.length; a++)
          n--,
            (t +=
              "u" == (typeof (u = e[a]))[0]
                ? "-"
                : (n > 0 ? "." : "") + ((n = 2), u));
        return t;
      }
      var i = [];
      for (a = 1; a < e.length; a++) {
        var u = e[a];
        i.push(
          0 === u
            ? "not(" + l() + ")"
            : 1 === u
            ? "(" + l() + " || " + l() + ")"
            : 2 === u
            ? i.pop() + " " + i.pop()
            : o(u)
        );
      }
      return l();
      function l() {
        return i.pop().replace(/^\((.+)\)$/, "$1");
      }
    }),
    (a = (e, r) => {
      if (0 in e) {
        r = t(r);
        var n = e[0],
          o = n < 0;
        o && (n = -n - 1);
        for (var i = 0, u = 1, l = !0; ; u++, i++) {
          var f,
            s,
            d = u < e.length ? (typeof e[u])[0] : "";
          if (i >= r.length || "o" == (s = (typeof (f = r[i]))[0]))
            return !l || ("u" == d ? u > n && !o : ("" == d) != o);
          if ("u" == s) {
            if (!l || "u" != d) return !1;
          } else if (l)
            if (d == s)
              if (u <= n) {
                if (f != e[u]) return !1;
              } else {
                if (o ? f > e[u] : f < e[u]) return !1;
                f != e[u] && (l = !1);
              }
            else if ("s" != d && "n" != d) {
              if (o || u <= n) return !1;
              (l = !1), u--;
            } else {
              if (u <= n || s < d != o) return !1;
              l = !1;
            }
          else "s" != d && "n" != d && ((l = !1), u--);
        }
      }
      var p = [],
        c = p.pop.bind(p);
      for (i = 1; i < e.length; i++) {
        var h = e[i];
        p.push(1 == h ? c() | c() : 2 == h ? c() & c() : h ? a(h, r) : !c());
      }
      return !!c();
    }),
    (i = (e, r) => {
      var t = g.S[e];
      if (!t || !g.o(t, r))
        throw new Error(
          "Shared module " + r + " doesn't exist in shared scope " + e
        );
      return t;
    }),
    (u = (e, r) => {
      var t = e[r];
      return Object.keys(t).reduce(
        (e, r) => (!e || (!t[e].loaded && n(e, r)) ? r : e),
        0
      );
    }),
    (l = (e, r, t) =>
      "Unsatisfied version " +
      r +
      " of shared singleton module " +
      e +
      " (required " +
      o(t) +
      ")"),
    (f = (e, r, t, n) => {
      var o = u(e, t);
      return (
        a(n, o) ||
          ("undefined" != typeof console &&
            console.warn &&
            console.warn(l(t, o, n))),
        s(e[t][o])
      );
    }),
    (s = (e) => ((e.loaded = 1), e.get())),
    (d = ((e) =>
      function (r, t, n, o) {
        var a = g.I(r);
        return a && a.then
          ? a.then(e.bind(e, r, g.S[r], t, n, o))
          : e(r, g.S[r], t, n);
      })((e, r, t, n) => (i(e, t), f(r, 0, t, n)))),
    (p = {}),
    (c = {
      525: () => d("default", "@jupyterlab/statedb", [1, 3, 0, 5]),
      641: () => d("default", "@jupyterlab/completer", [1, 3, 0, 7]),
      751: () => d("default", "@jupyterlab/notebook", [1, 3, 0, 9]),
    }),
    (h = { 487: [525, 641, 751] }),
    (g.f.consumes = (e, r) => {
      g.o(h, e) &&
        h[e].forEach((e) => {
          if (g.o(p, e)) return r.push(p[e]);
          var t = (r) => {
              (p[e] = 0),
                (g.m[e] = (t) => {
                  delete g.c[e], (t.exports = r());
                });
            },
            n = (r) => {
              delete p[e],
                (g.m[e] = (t) => {
                  throw (delete g.c[e], r);
                });
            };
          try {
            var o = c[e]();
            o.then ? r.push((p[e] = o.then(t).catch(n))) : t(o);
          } catch (e) {
            n(e);
          }
        });
    }),
    (() => {
      var e = { 269: 0 };
      g.f.j = (r, t) => {
        var n = g.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else {
            var o = new Promise((t, o) => (n = e[r] = [t, o]));
            t.push((n[2] = o));
            var a = g.p + g.u(r),
              i = new Error();
            g.l(
              a,
              (t) => {
                if (g.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + o + ": " + a + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = o),
                    (i.request = a),
                    n[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var n,
            o,
            [a, i, u] = t,
            l = 0;
          for (n in i) g.o(i, n) && (g.m[n] = i[n]);
          for (u && u(g), r && r(t); l < a.length; l++)
            (o = a[l]), g.o(e, o) && e[o] && e[o][0](), (e[a[l]] = 0);
        },
        t = (self.webpackChunk_tabnine_jupyterlab =
          self.webpackChunk_tabnine_jupyterlab || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var y = g(601);
  (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB)[
    "@tabnine/jupyterlab"
  ] = y;
})();
