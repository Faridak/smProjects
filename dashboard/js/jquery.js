!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    function g(e, t) {
        var n = (t = t || V).createElement("script");
        n.text = e,
        t.head.appendChild(n).parentNode.removeChild(n)
    }
    function s(e) {
        var t = !!e && "length"in e && e.length
          , n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function t(e, n, r) {
        return oe.isFunction(n) ? oe.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? oe.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? oe.grep(e, function(e) {
            return -1 < K.call(n, e) !== r
        }) : ge.test(n) ? oe.filter(n, e, r) : (n = oe.filter(n, e),
        oe.grep(e, function(e) {
            return -1 < K.call(n, e) !== r && 1 === e.nodeType
        }))
    }
    function n(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function c(e) {
        return e
    }
    function f(e) {
        throw e
    }
    function u(e, t, n, r) {
        var i;
        try {
            e && oe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && oe.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function r() {
        V.removeEventListener("DOMContentLoaded", r),
        C.removeEventListener("load", r),
        oe.ready()
    }
    function i() {
        this.expando = oe.expando + i.uid++
    }
    function p(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(De, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Ne.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Se.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function d(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return oe.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (oe.cssNumber[t] ? "" : "px"), c = (oe.cssNumber[t] || "px" !== l && +u) && Ae.exec(oe.css(e, t));
        if (c && c[3] !== l)
            for (l = l || c[3],
            n = n || [],
            c = +u || 1; c /= o = o || ".5",
            oe.style(e, t, c + l),
            o !== (o = s() / u) && 1 !== o && --a; )
                ;
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = ke.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && Le(r) && (i[o] = (f = l = u = void 0,
            l = (s = r).ownerDocument,
            c = s.nodeName,
            (f = Fe[c]) || (u = l.body.appendChild(l.createElement(c)),
            f = oe.css(u, "display"),
            u.parentNode.removeChild(u),
            "none" === f && (f = "block"),
            Fe[c] = f)))) : "none" !== n && (i[o] = "none",
            ke.set(r, "display", n)));
        var s, u, l, c, f;
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && l(e, t) ? oe.merge([e], n) : n
    }
    function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"))
    }
    function x(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === oe.type(o))
                    oe.merge(p, o.nodeType ? [o] : o);
                else if ($e.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (Pe.exec(o) || ["", ""])[1].toLowerCase(),
                    u = Me[s] || Me._default,
                    a.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    oe.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (r && -1 < oe.inArray(o, r))
                i && i.push(o);
            else if (l = oe.contains(o.ownerDocument, o),
            a = v(f.appendChild(o), "script"),
            l && y(a),
            n)
                for (c = 0; o = a[c++]; )
                    Re.test(o.type || "") && n.push(o);
        return f
    }
    function o() {
        return !0
    }
    function h() {
        return !1
    }
    function a() {
        try {
            return V.activeElement
        } catch (e) {}
    }
    function b(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                b(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = h;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return oe().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = oe.guid++)),
        e.each(function() {
            oe.event.add(this, t, i, r, n)
        })
    }
    function w(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && oe(">tbody", e)[0] || e
    }
    function T(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function E(e) {
        var t = Ye.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function k(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (ke.hasData(e) && (o = ke.access(e),
            a = ke.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        oe.event.add(t, i, l[i][n]);
            Se.hasData(e) && (s = Se.access(e),
            u = oe.extend({}, s),
            Se.set(t, u))
        }
    }
    function S(n, r, i, o) {
        r = Q.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = oe.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !ie.checkClone && Ge.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                S(t, r, i, o)
            });
        if (f && (t = (e = x(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = oe.map(v(e, "script"), T)).length; c < f; c++)
                u = e,
                c !== p && (u = oe.clone(u, !0, !0),
                s && oe.merge(a, v(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                oe.map(a, E),
                c = 0; c < s; c++)
                    u = a[c],
                    Re.test(u.type || "") && !ke.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : g(u.textContent.replace(Qe, ""), l))
        }
        return n
    }
    function N(e, t, n) {
        for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || oe.cleanData(v(r)),
            r.parentNode && (n && oe.contains(r.ownerDocument, r) && y(v(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function D(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ze(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)),
        !ie.pixelMarginRight() && Ke.test(a) && Je.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function A(e) {
        var t = oe.cssProps[e];
        return t || (t = oe.cssProps[e] = function(e) {
            if (e in ot)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--; )
                if ((e = it[n] + t)in ot)
                    return e
        }(e) || e),
        t
    }
    function q(e, t, n) {
        var r = Ae.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function L(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (a += oe.css(e, n + qe[o], !0, i)),
            r ? ("content" === n && (a -= oe.css(e, "padding" + qe[o], !0, i)),
            "margin" !== n && (a -= oe.css(e, "border" + qe[o] + "Width", !0, i))) : (a += oe.css(e, "padding" + qe[o], !0, i),
            "padding" !== n && (a += oe.css(e, "border" + qe[o] + "Width", !0, i)));
        return a
    }
    function H(e, t, n) {
        var r, i = Ze(e), o = D(e, t, i), a = "border-box" === oe.css(e, "boxSizing", !1, i);
        return Ke.test(o) ? o : (r = a && (ie.boxSizingReliable() || o === e.style[t]),
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (o = parseFloat(o) || 0) + L(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }
    function F(e, t, n, r, i) {
        return new F.prototype.init(e,t,n,r,i)
    }
    function O() {
        st && (!1 === V.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(O) : C.setTimeout(O, oe.fx.interval),
        oe.fx.tick())
    }
    function P() {
        return C.setTimeout(function() {
            at = void 0
        }),
        at = oe.now()
    }
    function R(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = qe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function M(e, t, n) {
        for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function I(o, e, t) {
        var n, a, r = 0, i = I.prefilters.length, s = oe.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = at || P(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: oe.extend({}, e),
            opts: oe.extend(!0, {
                specialEasing: {},
                easing: oe.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: at || P(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = oe.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = oe.camelCase(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = oe.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = I.prefilters[r].call(l, o, c, l.opts))
                return oe.isFunction(n.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(n.stop, n)),
                n;
        return oe.map(c, M, l),
        oe.isFunction(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        oe.fx.timer(oe.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    function W(e) {
        return (e.match(be) || []).join(" ")
    }
    function $(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function B(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            oe.each(e, function(e, t) {
                r || wt.test(n) ? i(n, t) : B(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== oe.type(e))
            i(n, e);
        else
            for (t in e)
                B(n + "[" + t + "]", e[t], r, i)
    }
    function _(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(be) || [];
            if (oe.isFunction(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function z(t, i, o, a) {
        function s(e) {
            var r;
            return u[e] = !0,
            oe.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || l || u[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                s(n),
                !1)
            }),
            r
        }
        var u = {}
          , l = t === Lt;
        return s(i.dataTypes[0]) || !u["*"] && s("*")
    }
    function X(e, t) {
        var n, r, i = oe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r),
        e
    }
    var U = []
      , V = C.document
      , G = Object.getPrototypeOf
      , Y = U.slice
      , Q = U.concat
      , J = U.push
      , K = U.indexOf
      , Z = {}
      , ee = Z.toString
      , te = Z.hasOwnProperty
      , ne = te.toString
      , re = ne.call(Object)
      , ie = {}
      , oe = function(e, t) {
        return new oe.fn.init(e,t)
    }
      , ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , se = /^-ms-/
      , ue = /-([a-z])/g
      , le = function(e, t) {
        return t.toUpperCase()
    };
    oe.fn = oe.prototype = {
        jquery: "3.2.1",
        constructor: oe,
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null == e ? Y.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(n) {
            return this.pushStack(oe.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: J,
        sort: U.sort,
        splice: U.splice
    },
    oe.extend = oe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || oe.isFunction(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (oe.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1,
                    n && Array.isArray(n) ? n : []) : n && oe.isPlainObject(n) ? n : {},
                    a[t] = oe.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    oe.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = oe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ee.call(e) || (t = G(e)) && ("function" != typeof (n = te.call(t, "constructor") && t.constructor) || ne.call(n) !== re))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            g(e)
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(ue, le)
        },
        each: function(e, t) {
            var n, r = 0;
            if (s(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : J.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : K.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (s(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return Q.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            oe.isFunction(e))
                return r = Y.call(arguments, 2),
                (i = function() {
                    return e.apply(t || this, r.concat(Y.call(arguments)))
                }
                ).guid = e.guid = e.guid || oe.guid++,
                i
        },
        now: Date.now,
        support: ie
    }),
    "function" == typeof Symbol && (oe.fn[Symbol.iterator] = U[Symbol.iterator]),
    oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function(n) {
        function b(e, t, n, r) {
            var i, o, a, s, u, l, c, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((t ? t.ownerDocument || t : R) !== j && D(t),
            t = t || j,
            q)) {
                if (11 !== p && (u = de.exec(e)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && O(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return G.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && v.getElementsByClassName && t.getElementsByClassName)
                            return G.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (v.qsa && !B[e + " "] && (!L || !L.test(e))) {
                    if (1 !== p)
                        f = t,
                        c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(me, ye) : t.setAttribute("id", s = P),
                        o = (l = C(e)).length; o--; )
                            l[o] = "#" + s + " " + h(l[o]);
                        c = l.join(","),
                        f = he.test(e) && d(t.parentNode) || t
                    }
                    if (c)
                        try {
                            return G.apply(n, f.querySelectorAll(c)),
                            n
                        } catch (e) {} finally {
                            s === P && t.removeAttribute("id")
                        }
                }
            }
            return E(e.replace(re, "$1"), t, n, r)
        }
        function e() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > T.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function u(e) {
            return e[P] = !0,
            e
        }
        function i(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function t(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function l(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function r(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && be(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function o(a) {
            return u(function(o) {
                return o = +o,
                u(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function d(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function a() {}
        function h(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function f(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = I++;
            return e.first ? function(e, t, n) {
                for (; e = e[u]; )
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [M, p];
                if (n) {
                    for (; e = e[u]; )
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[u]; )
                        if (1 === e.nodeType || f)
                            if (i = (o = e[P] || (e[P] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === M && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function p(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function w(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function y(d, h, g, v, m, e) {
            return v && !v[P] && (v = y(v)),
            m && !m[P] && (m = y(m, e)),
            u(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        b(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : w(c, s, d, n, r), p = g ? m || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v)
                    for (i = w(p, u),
                    v(i, [], n, r),
                    o = i.length; o--; )
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (m || d) {
                        if (m) {
                            for (i = [],
                            o = p.length; o--; )
                                (a = p[o]) && i.push(f[o] = a);
                            m(null, p = [], i, r)
                        }
                        for (o = p.length; o--; )
                            (a = p[o]) && -1 < (i = m ? Q(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = w(p === t ? p.splice(l, p.length) : p),
                    m ? m(null, t, p, r) : G.apply(t, p)
            })
        }
        function g(e) {
            for (var i, t, n, r = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = f(function(e) {
                return e === i
            }, a, !0), l = f(function(e) {
                return -1 < Q(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== k) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = T.relative[e[s].type])
                    c = [f(p(c), t)];
                else {
                    if ((t = T.filter[e[s].type].apply(null, e[s].matches))[P]) {
                        for (n = ++s; n < r && !T.relative[e[n].type]; n++)
                            ;
                        return y(1 < s && p(c), 1 < s && h(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(re, "$1"), t, s < n && g(e.slice(s, n)), n < r && g(e = e.slice(n)), n < r && h(e))
                    }
                    c.push(t)
                }
            return p(c)
        }
        var s, v, T, c, m, C, x, E, k, S, N, D, j, A, q, L, H, F, O, P = "sizzle" + 1 * new Date, R = n.document, M = 0, I = 0, W = e(), $ = e(), B = e(), _ = function(e, t) {
            return e === t && (N = !0),
            0
        }, z = {}.hasOwnProperty, X = [], U = X.pop, V = X.push, G = X.push, Y = X.slice, Q = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", Z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ee = "\\[" + K + "*(" + Z + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Z + "))|)" + K + "*\\]", te = ":(" + Z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ee + ")*)|.*)\\)|)", ne = new RegExp(K + "+","g"), re = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$","g"), ie = new RegExp("^" + K + "*," + K + "*"), oe = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), ae = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]","g"), se = new RegExp(te), ue = new RegExp("^" + Z + "$"), le = {
            ID: new RegExp("^#(" + Z + ")"),
            CLASS: new RegExp("^\\.(" + Z + ")"),
            TAG: new RegExp("^(" + Z + "|[*])"),
            ATTR: new RegExp("^" + ee),
            PSEUDO: new RegExp("^" + te),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)","i"),
            bool: new RegExp("^(?:" + J + ")$","i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)","i")
        }, ce = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/, de = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, he = /[+~]/, ge = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)","ig"), ve = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, me = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ye = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, xe = function() {
            D()
        }, be = f(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(X = Y.call(R.childNodes), R.childNodes),
            X[R.childNodes.length].nodeType
        } catch (n) {
            G = {
                apply: X.length ? function(e, t) {
                    V.apply(e, Y.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (s in v = b.support = {},
        m = b.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        D = b.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== j && 9 === r.nodeType && r.documentElement && (A = (j = r).documentElement,
            q = !m(j),
            R !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)),
            v.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            v.getElementsByTagName = i(function(e) {
                return e.appendChild(j.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            v.getElementsByClassName = pe.test(j.getElementsByClassName),
            v.getById = i(function(e) {
                return A.appendChild(e).id = P,
                !j.getElementsByName || !j.getElementsByName(P).length
            }),
            v.getById ? (T.filter.ID = function(e) {
                var t = e.replace(ge, ve);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && q) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (T.filter.ID = function(e) {
                var n = e.replace(ge, ve);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            T.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && q) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            T.find.TAG = v.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            T.find.CLASS = v.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && q)
                    return t.getElementsByClassName(e)
            }
            ,
            H = [],
            L = [],
            (v.qsa = pe.test(j.querySelectorAll)) && (i(function(e) {
                A.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + K + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || L.push("\\[" + K + "*(?:value|" + J + ")"),
                e.querySelectorAll("[id~=" + P + "-]").length || L.push("~="),
                e.querySelectorAll(":checked").length || L.push(":checked"),
                e.querySelectorAll("a#" + P + "+*").length || L.push(".#.+[+~]")
            }),
            i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && L.push("name" + K + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"),
                A.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                L.push(",.*:")
            })),
            (v.matchesSelector = pe.test(F = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && i(function(e) {
                v.disconnectedMatch = F.call(e, "*"),
                F.call(e, "[s!='']:x"),
                H.push("!=", te)
            }),
            L = L.length && new RegExp(L.join("|")),
            H = H.length && new RegExp(H.join("|")),
            t = pe.test(A.compareDocumentPosition),
            O = t || pe.test(A.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            _ = t ? function(e, t) {
                if (e === t)
                    return N = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === R && O(R, e) ? -1 : t === j || t.ownerDocument === R && O(R, t) ? 1 : S ? Q(S, e) - Q(S, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return N = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === j ? -1 : t === j ? 1 : i ? -1 : o ? 1 : S ? Q(S, e) - Q(S, t) : 0;
                if (i === o)
                    return l(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? l(a[r], s[r]) : a[r] === R ? -1 : s[r] === R ? 1 : 0
            }
            ),
            j
        }
        ,
        b.matches = function(e, t) {
            return b(e, null, null, t)
        }
        ,
        b.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== j && D(e),
            t = t.replace(ae, "='$1']"),
            v.matchesSelector && q && !B[t + " "] && (!H || !H.test(t)) && (!L || !L.test(t)))
                try {
                    var n = F.call(e, t);
                    if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return 0 < b(t, j, null, [e]).length
        }
        ,
        b.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && D(e),
            O(e, t)
        }
        ,
        b.attr = function(e, t) {
            (e.ownerDocument || e) !== j && D(e);
            var n = T.attrHandle[t.toLowerCase()]
              , r = n && z.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
            return void 0 !== r ? r : v.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        b.escape = function(e) {
            return (e + "").replace(me, ye)
        }
        ,
        b.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        b.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (N = !v.detectDuplicates,
            S = !v.sortStable && e.slice(0),
            e.sort(_),
            N) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return S = null,
            e
        }
        ,
        c = b.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += c(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += c(t);
            return n
        }
        ,
        (T = b.selectors = {
            cacheLength: 50,
            createPseudo: u,
            match: le,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ge, ve),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ve),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && b.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return le.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && se.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ge, ve).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + K + ")" + e + "(" + K + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = b.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(ne, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var m = "nth" !== h.slice(0, 3)
                      , y = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = m !== y ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (m) {
                                for (; l; ) {
                                    for (a = e; a = a[l]; )
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [y ? c.firstChild : c.lastChild],
                            y && p) {
                                for (d = (s = (r = (i = (o = (a = c)[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === M && r[1]) && r[2],
                                a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop(); )
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [M, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === M && r[1]),
                            !1 === d)
                                for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [M, d]),
                                a !== e)); )
                                    ;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
                    return a[P] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                            e[n = Q(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: u(function(e) {
                    var r = []
                      , i = []
                      , s = x(e.replace(re, "$1"));
                    return s[P] ? u(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: u(function(t) {
                    return function(e) {
                        return 0 < b(t, e).length
                    }
                }),
                contains: u(function(t) {
                    return t = t.replace(ge, ve),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || c(e)).indexOf(t)
                    }
                }),
                lang: u(function(n) {
                    return ue.test(n || "") || b.error("unsupported lang: " + n),
                    n = n.replace(ge, ve).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = q ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === A
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: r(!1),
                disabled: r(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return fe.test(e.nodeName)
                },
                input: function(e) {
                    return ce.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: o(function() {
                    return [0]
                }),
                last: o(function(e, t) {
                    return [t - 1]
                }),
                eq: o(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: o(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: o(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: o(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: o(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = T.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[s] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(s);
        for (s in {
            submit: !0,
            reset: !0
        })
            T.pseudos[s] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(s);
        return a.prototype = T.filters = T.pseudos,
        T.setFilters = new a,
        C = b.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = $[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (a = e,
            s = [],
            u = T.preFilter; a; ) {
                for (o in n && !(r = ie.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = oe.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(re, " ")
                }),
                a = a.slice(n.length)),
                T.filter)
                    !(r = le[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? b.error(e) : $(e, s).slice(0)
        }
        ,
        x = b.compile = function(e, t) {
            var n, v, m, y, x, r, i = [], o = [], a = B[e + " "];
            if (!a) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    (a = g(t[n]))[P] ? i.push(a) : o.push(a);
                (a = B(e, (v = o,
                m = i,
                y = 0 < m.length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = k, d = e || x && T.find.TAG("*", i), h = M += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (k = t === j || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (a = 0,
                            t || o.ownerDocument === j || (D(o),
                            n = !q); s = v[a++]; )
                                if (s(o, t || j, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (M = h)
                        }
                        y && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    y && l !== u) {
                        for (a = 0; s = m[a++]; )
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--; )
                                    c[l] || f[l] || (f[l] = U.call(r));
                            f = w(f)
                        }
                        G.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + m.length && b.uniqueSort(r)
                    }
                    return i && (M = h,
                    k = p),
                    c
                }
                ,
                y ? u(r) : r))).selector = e
            }
            return a
        }
        ,
        E = b.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && C(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && q && T.relative[o[1].type]) {
                    if (!(t = (T.find.ID(a.matches[0].replace(ge, ve), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = le.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !T.relative[s = a.type]); )
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(ge, ve), he.test(o[0].type) && d(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && h(o)))
                            return G.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || x(e, c))(r, t, !q, n, !t || he.test(e) && d(t.parentNode) || t),
            n
        }
        ,
        v.sortStable = P.split("").sort(_).join("") === P,
        v.detectDuplicates = !!N,
        D(),
        v.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("fieldset"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        v.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || t("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || t(J, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        b
    }(C);
    oe.find = ce,
    oe.expr = ce.selectors,
    oe.expr[":"] = oe.expr.pseudos,
    oe.uniqueSort = oe.unique = ce.uniqueSort,
    oe.text = ce.getText,
    oe.isXMLDoc = ce.isXML,
    oe.contains = ce.contains,
    oe.escapeSelector = ce.escape;
    var fe = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && oe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , pe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , de = oe.expr.match.needsContext
      , he = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , ge = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    oe.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(oe(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (oe.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                oe.find(e, i[t], n);
            return 1 < r ? oe.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function(e) {
            return !!t(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ve, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (oe.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || ve,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : oe.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : me.exec(e)) || !r[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof oe ? t[0] : t,
            oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : V, !0)),
            he.test(r[1]) && oe.isPlainObject(t))
                for (r in t)
                    oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = V.getElementById(r[2])) && (this[0] = i,
        this.length = 1),
        this
    }
    ).prototype = oe.fn,
    ve = oe(V);
    var ye = /^(?:parents|prev(?:Until|All))/
      , xe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && oe(e);
            if (!de.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? K.call(oe(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return fe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return fe(e, "parentNode", n)
        },
        next: function(e) {
            return n(e, "nextSibling")
        },
        prev: function(e) {
            return n(e, "previousSibling")
        },
        nextAll: function(e) {
            return fe(e, "nextSibling")
        },
        prevAll: function(e) {
            return fe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return fe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return fe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return pe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return pe(e.firstChild)
        },
        contents: function(e) {
            return l(e, "iframe") ? e.contentDocument : (l(e, "template") && (e = e.content || e),
            oe.merge([], e.childNodes))
        }
    }, function(r, i) {
        oe.fn[r] = function(e, t) {
            var n = oe.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = oe.filter(t, n)),
            1 < this.length && (xe[r] || oe.uniqueSort(n),
            ye.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var be = /[^\x20\t\r\n\f]+/g;
    oe.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        oe.each(e.match(be) || [], function(e, t) {
            n[t] = !0
        }),
        n) : oe.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1)
                for (t = u.shift(); ++l < s.length; )
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1);
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    oe.each(e, function(e, t) {
                        oe.isFunction(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== oe.type(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return oe.each(arguments, function(e, t) {
                    for (var n; -1 < (n = oe.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < oe.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    oe.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", oe.Callbacks("memory"), oe.Callbacks("memory"), 2], ["resolve", "done", oe.Callbacks("once memory"), oe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", oe.Callbacks("once memory"), oe.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return oe.Deferred(function(r) {
                        oe.each(o, function(e, t) {
                            var n = oe.isFunction(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && oe.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    function u(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < l)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    oe.isFunction(t) ? s ? t.call(e, u(l, o, c, s), u(l, o, f, s)) : (l++,
                                    t.call(e, u(l, o, c, s), u(l, o, f, s), u(l, o, c, o.notifyWith))) : (a !== c && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    oe.Deferred.exceptionHook && oe.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= i + 1 && (a !== f && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (oe.Deferred.getStackHook && (t.stackTrace = oe.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    var l = 0;
                    return oe.Deferred(function(e) {
                        o[0][3].add(u(0, e, oe.isFunction(r) ? r : c, e.notifyWith)),
                        o[1][3].add(u(0, e, oe.isFunction(t) ? t : c)),
                        o[2][3].add(u(0, e, oe.isFunction(n) ? n : f))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? oe.extend(e, a) : a
                }
            }
              , s = {};
            return oe.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[0][2].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = Y.call(arguments)
              , o = oe.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? Y.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (u(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || oe.isFunction(i[t] && i[t].then)))
                return o.then();
            for (; t--; )
                u(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var we = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    oe.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && we.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    oe.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var Te = oe.Deferred();
    oe.fn.ready = function(e) {
        return Te.then(e).catch(function(e) {
            oe.readyException(e)
        }),
        this
    }
    ,
    oe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --oe.readyWait : oe.isReady) || (oe.isReady = !0) !== e && 0 < --oe.readyWait || Te.resolveWith(V, [oe])
        }
    }),
    oe.ready.then = Te.then,
    "complete" === V.readyState || "loading" !== V.readyState && !V.documentElement.doScroll ? C.setTimeout(oe.ready) : (V.addEventListener("DOMContentLoaded", r),
    C.addEventListener("load", r));
    var Ce = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === oe.type(n))
            for (s in i = !0,
            n)
                Ce(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        oe.isFunction(r) || (a = !0),
        l && (t = a ? (t.call(e, r),
        null) : (l = t,
        function(e, t, n) {
            return l.call(oe(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , Ee = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    i.uid = 1,
    i.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Ee(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[oe.camelCase(t)] = n;
            else
                for (r in t)
                    i[oe.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(oe.camelCase) : (t = oe.camelCase(t))in r ? [t] : t.match(be) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || oe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var ke = new i
      , Se = new i
      , Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , De = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Se.hasData(e) || ke.hasData(e)
        },
        data: function(e, t, n) {
            return Se.access(e, t, n)
        },
        removeData: function(e, t) {
            Se.remove(e, t)
        },
        _data: function(e, t, n) {
            return ke.access(e, t, n)
        },
        _removeData: function(e, t) {
            ke.remove(e, t)
        }
    }),
    oe.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    Se.set(this, n)
                }) : Ce(this, function(e) {
                    var t;
                    if (o && void 0 === e) {
                        if (void 0 !== (t = Se.get(o, n)))
                            return t;
                        if (void 0 !== (t = p(o, n)))
                            return t
                    } else
                        this.each(function() {
                            Se.set(this, n, e)
                        })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = Se.get(o),
            1 === o.nodeType && !ke.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--; )
                    a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = oe.camelCase(r.slice(5)),
                    p(o, r, i[r]));
                ke.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                Se.remove(this, e)
            })
        }
    }),
    oe.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = ke.get(e, t),
                n && (!r || Array.isArray(n) ? r = ke.access(e, t, oe.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = oe._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                oe.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ke.get(e, n) || ke.access(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    ke.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    oe.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? oe.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = oe.queue(this, t, n);
                oe._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && oe.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = oe.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = ke.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ae = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$","i")
      , qe = ["Top", "Right", "Bottom", "Left"]
      , Le = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe.contains(e.ownerDocument, e) && "none" === oe.css(e, "display")
    }
      , He = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    }
      , Fe = {};
    oe.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Le(this) ? oe(this).show() : oe(this).hide()
            })
        }
    });
    var Oe = /^(?:checkbox|radio)$/i
      , Pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Re = /^$|\/(?:java|ecma)script/i
      , Me = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Me.optgroup = Me.option,
    Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead,
    Me.th = Me.td;
    var Ie, We, $e = /<|&#?\w+;/;
    Ie = V.createDocumentFragment().appendChild(V.createElement("div")),
    (We = V.createElement("input")).setAttribute("type", "radio"),
    We.setAttribute("checked", "checked"),
    We.setAttribute("name", "t"),
    Ie.appendChild(We),
    ie.checkClone = Ie.cloneNode(!0).cloneNode(!0).lastChild.checked,
    Ie.innerHTML = "<textarea>x</textarea>",
    ie.noCloneChecked = !!Ie.cloneNode(!0).lastChild.defaultValue;
    var Be = V.documentElement
      , _e = /^key/
      , ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Xe = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = ke.get(t);
            if (v)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && oe.find.matchesSelector(Be, i),
                n.guid || (n.guid = oe.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(e) {
                    return void 0 !== oe && oe.event.triggered !== e.type ? oe.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(be) || [""]).length; l--; )
                    d = g = (s = Xe.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = oe.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = oe.event.special[d] || {},
                    c = oe.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && oe.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    oe.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = ke.hasData(e) && ke.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(be) || [""]).length; l--; )
                    if (d = g = (s = Xe.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = oe.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || oe.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            oe.event.remove(e, d + t[l], n, r, !0);
                oe.isEmptyObject(u) && ke.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = oe.event.fix(e), u = new Array(arguments.length), l = (ke.get(this, "events") || {})[s.type] || [], c = oe.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = oe.event.handlers.call(this, s, l),
                t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < oe(i, this).index(l) : oe.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(oe.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: oe.isFunction(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[oe.expando] ? e : new oe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== a() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === a() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && l(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return l(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? o : h,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && oe.extend(this, t),
        this.timeStamp = e && e.timeStamp || oe.now(),
        void (this[oe.expando] = !0)) : new oe.Event(e,t)
    }
    ,
    oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = o,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = o,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = o,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    oe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, oe.event.addProp),
    oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        oe.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || oe.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    oe.fn.extend({
        on: function(e, t, n, r) {
            return b(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return b(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = h),
                this.each(function() {
                    oe.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        }
    });
    var Ue = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ve = /<script|<style|<link/i
      , Ge = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ye = /^true\/(.*)/
      , Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ue, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (a = v(c),
                r = 0,
                i = (o = v(e)).length; r < i; r++)
                    s = o[r],
                    "input" === (l = (u = a[r]).nodeName.toLowerCase()) && Oe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || v(e),
                    a = a || v(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        k(o[r], a[r]);
                else
                    k(e, c);
            return 0 < (a = v(c, "script")).length && y(a, !f && v(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ee(n)) {
                    if (t = n[ke.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                        n[ke.expando] = void 0
                    }
                    n[Se.expando] && (n[Se.expando] = void 0)
                }
        }
    }),
    oe.fn.extend({
        detach: function(e) {
            return N(this, e, !0)
        },
        remove: function(e) {
            return N(this, e)
        },
        text: function(e) {
            return Ce(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return S(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || w(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (oe.cleanData(v(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ce(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ve.test(e) && !Me[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (oe.cleanData(v(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return S(this, arguments, function(e) {
                var t = this.parentNode;
                oe.inArray(this, n) < 0 && (oe.cleanData(v(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        oe.fn[e] = function(e) {
            for (var t, n = [], r = oe(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                oe(r[o])[a](t),
                J.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Je = /^margin/
      , Ke = new RegExp("^(" + je + ")(?!px)[a-z%]+$","i")
      , Ze = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    };
    !function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                a.innerHTML = "",
                Be.appendChild(o);
                var e = C.getComputedStyle(a);
                t = "1%" !== e.top,
                i = "2px" === e.marginLeft,
                n = "4px" === e.width,
                a.style.marginRight = "50%",
                r = "4px" === e.marginRight,
                Be.removeChild(o),
                a = null
            }
        }
        var t, n, r, i, o = V.createElement("div"), a = V.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        ie.clearCloneStyle = "content-box" === a.style.backgroundClip,
        o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        o.appendChild(a),
        oe.extend(ie, {
            pixelPosition: function() {
                return e(),
                t
            },
            boxSizingReliable: function() {
                return e(),
                n
            },
            pixelMarginRight: function() {
                return e(),
                r
            },
            reliableMarginLeft: function() {
                return e(),
                i
            }
        }))
    }();
    var et = /^(none|table(?!-c[ea]).+)/
      , tt = /^--/
      , nt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , rt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , it = ["Webkit", "Moz", "ms"]
      , ot = V.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = D(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = oe.camelCase(t), u = tt.test(t), l = e.style;
                return u || (t = A(s)),
                a = oe.cssHooks[t] || oe.cssHooks[s],
                void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" == (o = typeof n) && (i = Ae.exec(n)) && i[1] && (n = d(e, t, i),
                o = "number"),
                void (null != n && n == n && ("number" === o && (n += i && i[3] || (oe.cssNumber[s] ? "" : "px")),
                ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = oe.camelCase(t);
            return tt.test(t) || (t = A(s)),
            (a = oe.cssHooks[t] || oe.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = D(e, t, r)),
            "normal" === i && t in rt && (i = rt[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    oe.each(["height", "width"], function(e, a) {
        oe.cssHooks[a] = {
            get: function(e, t, n) {
                if (t)
                    return !et.test(oe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, a, n) : He(e, nt, function() {
                        return H(e, a, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = n && Ze(e), o = n && L(e, a, n, "border-box" === oe.css(e, "boxSizing", !1, i), i);
                return o && (r = Ae.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t,
                t = oe.css(e, a)),
                q(0, t, o)
            }
        }
    }),
    oe.cssHooks.marginLeft = j(ie.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        oe.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + qe[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        Je.test(i) || (oe.cssHooks[i + o].set = q)
    }),
    oe.fn.extend({
        css: function(e, t) {
            return Ce(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ze(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = oe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((oe.Tween = F).prototype = {
        constructor: F,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || oe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : F.propHooks._default.set(this),
            this
        }
    }).init.prototype = F.prototype,
    (F.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = F.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    oe.fx = F.prototype.init,
    oe.fx.step = {};
    var at, st, ut, lt, ct = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
    oe.Animation = oe.extend(I, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, Ae.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = oe.isFunction(e) ? (t = e,
            ["*"]) : e.match(be)).length; r < i; r++)
                n = e[r],
                I.tweeners[n] = I.tweeners[n] || [],
                I.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && Le(e), v = ke.get(e, "fxshow");
            for (r in n.queue || (null == (a = oe._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    oe.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ct.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || oe.style(e, r)
                }
            if ((u = !oe.isEmptyObject(t)) || !oe.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = ke.get(e, "display")),
                "none" === (c = oe.css(e, "display")) && (l ? c = l : (m([e], !0),
                l = e.style.display || l,
                c = oe.css(e, "display"),
                m([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === oe.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = ke.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && m([e], !0),
                    p.done(function() {
                        for (r in g || m([e]),
                        ke.remove(e, "fxshow"),
                        d)
                            oe.style(e, r, d[r])
                    })),
                    u = M(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? I.prefilters.unshift(e) : I.prefilters.push(e)
        }
    }),
    oe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return oe.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in oe.fx.speeds ? r.duration = oe.fx.speeds[r.duration] : r.duration = oe.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            oe.isFunction(r.old) && r.old.call(this),
            r.queue && oe.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    oe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Le).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = oe.isEmptyObject(t)
              , o = oe.speed(e, n, r)
              , a = function() {
                var e = I(this, oe.extend({}, t), o);
                (i || ke.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = oe.timers
                  , r = ke.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ft.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || oe.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = ke.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = oe.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                oe.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    oe.each(["toggle", "show", "hide"], function(e, r) {
        var i = oe.fn[r];
        oe.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(R(r, !0), e, t, n)
        }
    }),
    oe.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        oe.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    oe.timers = [],
    oe.fx.tick = function() {
        var e, t = 0, n = oe.timers;
        for (at = oe.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || oe.fx.stop(),
        at = void 0
    }
    ,
    oe.fx.timer = function(e) {
        oe.timers.push(e),
        oe.fx.start()
    }
    ,
    oe.fx.interval = 13,
    oe.fx.start = function() {
        st || (st = !0,
        O())
    }
    ,
    oe.fx.stop = function() {
        st = null
    }
    ,
    oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    oe.fn.delay = function(r, e) {
        return r = oe.fx && oe.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    ut = V.createElement("input"),
    lt = V.createElement("select").appendChild(V.createElement("option")),
    ut.type = "checkbox",
    ie.checkOn = "" !== ut.value,
    ie.optSelected = lt.selected,
    (ut = V.createElement("input")).value = "t",
    ut.type = "radio",
    ie.radioValue = "t" === ut.value;
    var pt, dt = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Ce(this, oe.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }),
    oe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (i = oe.attrHooks[t.toLowerCase()] || (oe.expr.match.bool.test(t) ? pt : void 0)),
                void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = oe.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && l(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(be);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || oe.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o],
            dt[o] = r,
            r = null != a(e, t, n) ? o : null,
            dt[o] = i),
            r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , gt = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Ce(this, oe.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }),
    oe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t,
                i = oe.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ie.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    }),
    oe.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (oe.isFunction(t))
                return this.each(function(e) {
                    oe(this).addClass(t.call(this, e, $(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(be) || []; n = this[u++]; )
                    if (i = $(n),
                    r = 1 === n.nodeType && " " + W(i) + " ") {
                        for (a = 0; o = e[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = W(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (oe.isFunction(t))
                return this.each(function(e) {
                    oe(this).removeClass(t.call(this, e, $(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(be) || []; n = this[u++]; )
                    if (i = $(n),
                    r = 1 === n.nodeType && " " + W(i) + " ") {
                        for (a = 0; o = e[a++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = W(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : oe.isFunction(i) ? this.each(function(e) {
                oe(this).toggleClass(i.call(this, e, $(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o)
                    for (t = 0,
                    n = oe(this),
                    r = i.match(be) || []; e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" !== o || ((e = $(this)) && ke.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : ke.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + W($(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var vt = /\r/g;
    oe.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = oe.isFunction(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, oe(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = oe.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = oe.valHooks[t.type] || oe.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
        }
    }),
    oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : W(oe.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = -1 < oe.inArray(oe.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < oe.inArray(oe(e).val(), t)
            }
        },
        ie.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || V], p = te.call(e, "type") ? e.type : e, d = te.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || V,
            3 !== n.nodeType && 8 !== n.nodeType && !mt.test(p + oe.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(),
            d.sort()),
            u = p.indexOf(":") < 0 && "on" + p,
            (e = e[oe.expando] ? e : new oe.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = d.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : oe.makeArray(t, [e]),
            c = oe.event.special[p] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !oe.isWindow(n)) {
                    for (s = c.delegateType || p,
                    mt.test(s + p) || (o = o.parentNode); o; o = o.parentNode)
                        f.push(o),
                        a = o;
                    a === (n.ownerDocument || V) && f.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0; (o = f[i++]) && !e.isPropagationStopped(); )
                    e.type = 1 < i ? s : c.bindType || p,
                    (l = (ke.get(o, "events") || {})[e.type] && ke.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && Ee(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !Ee(n) || u && oe.isFunction(n[p]) && !oe.isWindow(n) && ((a = n[u]) && (n[u] = null),
                n[oe.event.triggered = p](),
                oe.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(r, null, t)
        }
    }),
    oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return oe.event.trigger(e, t, n, !0)
        }
    }),
    oe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        oe.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ie.focusin = "onfocusin"in C,
    ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            oe.event.simulate(r, e.target, oe.event.fix(e))
        };
        oe.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = ke.access(e, r);
                t || e.addEventListener(n, i, !0),
                ke.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = ke.access(e, r) - 1;
                t ? ke.access(e, r, t) : (e.removeEventListener(n, i, !0),
                ke.remove(e, r))
            }
        }
    });
    var yt = C.location
      , xt = oe.now()
      , bt = /\?/;
    oe.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e),
        t
    }
    ;
    var wt = /\[\]$/
      , Tt = /\r?\n/g
      , Ct = /^(?:submit|button|image|reset|file)$/i
      , Et = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = oe.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !oe.isPlainObject(e))
            oe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                B(n, e[n], t, i);
        return r.join("&")
    }
    ,
    oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Et.test(this.nodeName) && !Ct.test(e) && (this.checked || !Oe.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : Array.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            }).get()
        }
    });
    var kt = /%20/g
      , St = /#.*$/
      , Nt = /([?&])_=[^&]*/
      , Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , jt = /^(?:GET|HEAD)$/
      , At = /^\/\//
      , qt = {}
      , Lt = {}
      , Ht = "*/".concat("*")
      , Ft = V.createElement("a");
    Ft.href = yt.href,
    oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? X(X(e, oe.ajaxSettings), t) : X(oe.ajaxSettings, e)
        },
        ajaxPrefilter: _(qt),
        ajaxTransport: _(Lt),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (oe.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (oe.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(m, [o, l, T]) : x.rejectWith(m, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(m, [T, l]),
                g && (y.trigger("ajaxComplete", [T, v]),
                --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, r, d, i, h, g, o, a, v = oe.ajaxSetup({}, t), m = v.context || v, y = v.context && (m.nodeType || m.jquery) ? oe(m) : oe.event, x = oe.Deferred(), b = oe.Callbacks("once memory"), w = v.statusCode || {}, s = {}, u = {}, l = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!r)
                            for (r = {}; t = Dt.exec(p); )
                                r[t[1].toLowerCase()] = t[2];
                        t = r[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = u[e.toLowerCase()] = u[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return c && c.abort(t),
                    n(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || yt.href) + "").replace(At, yt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(be) || [""],
            null == v.crossDomain) {
                i = V.createElement("a");
                try {
                    i.href = v.url,
                    i.href = i.href,
                    v.crossDomain = Ft.protocol + "//" + Ft.host != i.protocol + "//" + i.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = oe.param(v.data, v.traditional)),
            z(qt, v, t, T),
            h)
                return T;
            for (o in (g = oe.event && v.global) && 0 == oe.active++ && oe.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !jt.test(v.type),
            f = v.url.replace(St, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(kt, "+")) : (a = v.url.slice(f.length),
            v.data && (f += (bt.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Nt, "$1"),
            a = (bt.test(f) ? "&" : "?") + "_=" + xt++ + a),
            v.url = f + a),
            v.ifModified && (oe.lastModified[f] && T.setRequestHeader("If-Modified-Since", oe.lastModified[f]),
            oe.etag[f] && T.setRequestHeader("If-None-Match", oe.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(o, v.headers[o]);
            if (v.beforeSend && (!1 === v.beforeSend.call(m, T, v) || h))
                return T.abort();
            if (l = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = z(Lt, v, t, T)) {
                if (T.readyState = 1,
                g && y.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(s, n)
                } catch (e) {
                    if (h)
                        throw e;
                    n(-1, e)
                }
            } else
                n(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }),
    oe.each(["get", "post"], function(e, i) {
        oe[i] = function(e, t, n, r) {
            return oe.isFunction(t) && (r = r || n,
            n = t,
            t = void 0),
            oe.ajax(oe.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, oe.isPlainObject(e) && e))
        }
    }),
    oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (oe.isFunction(e) && (e = e.call(this[0])),
            t = oe(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return oe.isFunction(n) ? this.each(function(e) {
                oe(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = oe(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = oe.isFunction(t);
            return this.each(function(e) {
                oe(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                oe(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    oe.expr.pseudos.hidden = function(e) {
        return !oe.expr.pseudos.visible(e)
    }
    ,
    oe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    oe.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ot = {
        0: 200,
        1223: 204
    }
      , Pt = oe.ajaxSettings.xhr();
    ie.cors = !!Pt && "withCredentials"in Pt,
    ie.ajax = Pt = !!Pt,
    oe.ajaxTransport(function(i) {
        var o, a;
        if (ie.cors || Pt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ot[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    oe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e),
                e
            }
        }
    }),
    oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    oe.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain)
            return {
                send: function(e, t) {
                    r = oe("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    V.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Rt, Mt = [], It = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mt.pop() || oe.expando + "_" + xt++;
            return this[e] = !0,
            e
        }
    }),
    oe.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (It.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(It, "$1" + r) : !1 !== e.jsonp && (e.url += (bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || oe.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? oe(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Mt.push(r)),
                o && oe.isFunction(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    ie.createHTMLDocument = ((Rt = V.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Rt.childNodes.length),
    oe.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (ie.createHTMLDocument ? ((r = (t = V.implementation.createHTMLDocument("")).createElement("base")).href = V.location.href,
        t.head.appendChild(r)) : t = V),
        o = !n && [],
        (i = he.exec(e)) ? [t.createElement(i[1])] : (i = x([e], t, o),
        o && o.length && oe(o).remove(),
        oe.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    oe.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = W(e.slice(s)),
        e = e.slice(0, s)),
        oe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && oe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    oe.expr.pseudos.animated = function(t) {
        return oe.grep(oe.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    oe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = oe.css(e, "position"), c = oe(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = oe.css(e, "top"),
            u = oe.css(e, "left"),
            i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            r.left) : (a = parseFloat(o) || 0,
            parseFloat(u) || 0),
            oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    oe.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    oe.offset.setOffset(this, t, e)
                });
            var e, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(),
            n = (e = o.ownerDocument).documentElement,
            i = e.defaultView,
            {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                l(e[0], "html") || (r = e.offset()),
                r = {
                    top: r.top + oe.css(e[0], "borderTopWidth", !0),
                    left: r.left + oe.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - r.top - oe.css(n, "marginTop", !0),
                    left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position"); )
                    e = e.offsetParent;
                return e || Be
            })
        }
    }),
    oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        oe.fn[t] = function(e) {
            return Ce(this, function(e, t, n) {
                var r;
                return oe.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }),
    oe.each(["top", "left"], function(e, n) {
        oe.cssHooks[n] = j(ie.pixelPosition, function(e, t) {
            if (t)
                return t = D(e, n),
                Ke.test(t) ? oe(e).position()[n] + "px" : t
        })
    }),
    oe.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        oe.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            oe.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return Ce(this, function(e, t, n) {
                    var r;
                    return oe.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? oe.css(e, t, i) : oe.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    oe.holdReady = function(e) {
        e ? oe.readyWait++ : oe.ready(!0)
    }
    ,
    oe.isArray = Array.isArray,
    oe.parseJSON = JSON.parse,
    oe.nodeName = l,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var Wt = C.jQuery
      , $t = C.$;
    return oe.noConflict = function(e) {
        return C.$ === oe && (C.$ = $t),
        e && C.jQuery === oe && (C.jQuery = Wt),
        oe
    }
    ,
    e || (C.jQuery = C.$ = oe),
    oe
});
