var _gsScope;
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.CustomEase", ["easing.Ease"], function(v) {
        var _ = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , y = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , x = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
          , m = /[cLlsS]/g
          , T = "CustomEase only accepts Cubic Bezier data."
          , O = function(t, e, i, n, r, s, o, a, l, h, u) {
            var c, f = (t + i) / 2, p = (e + n) / 2, d = (i + r) / 2, _ = (n + s) / 2, m = (r + o) / 2, g = (s + a) / 2, v = (f + d) / 2, y = (p + _) / 2, x = (d + m) / 2, T = (_ + g) / 2, b = (v + x) / 2, w = (y + T) / 2, P = o - t, S = a - e, C = Math.abs((i - o) * S - (n - a) * P), A = Math.abs((r - o) * S - (s - a) * P);
            return h || (h = [{
                x: t,
                y: e
            }, {
                x: o,
                y: a
            }],
            u = 1),
            h.splice(u || h.length - 1, 0, {
                x: b,
                y: w
            }),
            l * (P * P + S * S) < (C + A) * (C + A) && (c = h.length,
            O(t, e, f, p, v, y, b, w, l, h, u),
            O(b, w, x, T, m, g, o, a, l, h, u + 1 + (h.length - c))),
            h
        }
          , n = function(t) {
            var e = this.lookup[t * this.l | 0] || this.lookup[this.l - 1];
            return e.nx < t && (e = e.n),
            e.y + (t - e.x) / e.cx * e.cy
        }
          , r = function(t, e, i) {
            this._calcEnd = !0,
            (this.id = t) && (v.map[t] = this),
            this.getRatio = n,
            this.setData(e, i)
        }
          , t = r.prototype = new v;
        return t.constructor = r,
        t.setData = function(t, e) {
            var i, n, r, s, o, a, l, h, u, c, f = (t = t || "0,0,1,1").match(_), p = 1, d = [];
            if (c = (e = e || {}).precision || 1,
            this.data = t,
            this.lookup = [],
            this.points = d,
            this.fast = c <= 1,
            (m.test(t) || -1 !== t.indexOf("M") && -1 === t.indexOf("C")) && (f = function(t) {
                var e, i, n, r, s, o, a, l, h, u, c, f = (t + "").replace(x, function(t) {
                    var e = +t;
                    return e < 1e-4 && -1e-4 < e ? 0 : e
                }).match(y) || [], p = [], d = 0, _ = 0, m = f.length, g = 2;
                for (e = 0; e < m; e++)
                    if (h = r,
                    isNaN(f[e]) ? s = (r = f[e].toUpperCase()) !== f[e] : e--,
                    i = +f[e + 1],
                    n = +f[e + 2],
                    s && (i += d,
                    n += _),
                    e || (a = i,
                    l = n),
                    "M" === r)
                        o && o.length < 8 && (p.length -= 1,
                        g = 0),
                        d = a = i,
                        _ = l = n,
                        o = [i, n],
                        g = 2,
                        p.push(o),
                        e += 2,
                        r = "L";
                    else if ("C" === r)
                        o || (o = [0, 0]),
                        o[g++] = i,
                        o[g++] = n,
                        s || (d = _ = 0),
                        o[g++] = d + 1 * f[e + 3],
                        o[g++] = _ + 1 * f[e + 4],
                        o[g++] = d += 1 * f[e + 5],
                        o[g++] = _ += 1 * f[e + 6],
                        e += 6;
                    else if ("S" === r)
                        o[g++] = "C" === h || "S" === h ? (u = d - o[g - 4],
                        c = _ - o[g - 3],
                        o[g++] = d + u,
                        _ + c) : (o[g++] = d,
                        _),
                        o[g++] = i,
                        o[g++] = n,
                        s || (d = _ = 0),
                        o[g++] = d += 1 * f[e + 3],
                        o[g++] = _ += 1 * f[e + 4],
                        e += 4;
                    else {
                        if ("L" !== r && "Z" !== r)
                            throw T;
                        "Z" === r && (i = a,
                        n = l,
                        o.closed = !0),
                        ("L" === r || .5 < Math.abs(d - i) || .5 < Math.abs(_ - n)) && (o[g++] = d + (i - d) / 3,
                        o[g++] = _ + (n - _) / 3,
                        o[g++] = d + 2 * (i - d) / 3,
                        o[g++] = _ + 2 * (n - _) / 3,
                        o[g++] = i,
                        o[g++] = n,
                        "L" === r && (e += 2)),
                        d = i,
                        _ = n
                    }
                return p[0]
            }(t)),
            4 === (i = f.length))
                f.unshift(0, 0),
                f.push(1, 1),
                i = 8;
            else if ((i - 2) % 6)
                throw T;
            for (0 == +f[0] && 1 == +f[i - 2] || function(t, e, i) {
                i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                var n, r = -1 * +t[0], s = -i, o = t.length, a = 1 / (+t[o - 2] + r), l = -e || (Math.abs(+t[o - 1] - +t[1]) < .01 * (+t[o - 2] - +t[0]) ? function(t) {
                    var e, i = t.length, n = 999999999999;
                    for (e = 1; e < i; e += 6)
                        +t[e] < n && (n = +t[e]);
                    return n
                }(t) + s : +t[o - 1] + s);
                for (l = l ? 1 / l : -a,
                n = 0; n < o; n += 2)
                    t[n] = (+t[n] + r) * a,
                    t[n + 1] = (+t[n + 1] + s) * l
            }(f, e.height, e.originY),
            this.rawBezier = f,
            s = 2; s < i; s += 6)
                n = {
                    x: +f[s - 2],
                    y: +f[s - 1]
                },
                r = {
                    x: +f[s + 4],
                    y: +f[s + 5]
                },
                d.push(n, r),
                O(n.x, n.y, +f[s], +f[s + 1], +f[s + 2], +f[s + 3], r.x, r.y, 1 / (2e5 * c), d, d.length - 1);
            for (i = d.length,
            s = 0; s < i; s++)
                l = d[s],
                h = d[s - 1] || l,
                l.x > h.x || h.y !== l.y && h.x === l.x || l === h ? (h.cx = l.x - h.x,
                h.cy = l.y - h.y,
                h.n = l,
                h.nx = l.x,
                this.fast && 1 < s && 2 < Math.abs(h.cy / h.cx - d[s - 2].cy / d[s - 2].cx) && (this.fast = !1),
                h.cx < p && (h.cx ? p = h.cx : (h.cx = .001,
                s === i - 1 && (h.x -= .001,
                p = Math.min(p, .001),
                this.fast = !1)))) : (d.splice(s--, 1),
                i--);
            if (i = 1 / p + 1 | 0,
            o = 1 / (this.l = i),
            l = d[a = 0],
            this.fast) {
                for (s = 0; s < i; s++)
                    u = s * o,
                    l.nx < u && (l = d[++a]),
                    n = l.y + (u - l.x) / l.cx * l.cy,
                    this.lookup[s] = {
                        x: u,
                        cx: o,
                        y: n,
                        cy: 0,
                        nx: 9
                    },
                    s && (this.lookup[s - 1].cy = n - this.lookup[s - 1].y);
                this.lookup[i - 1].cy = d[d.length - 1].y - n
            } else {
                for (s = 0; s < i; s++)
                    l.nx < s * o && (l = d[++a]),
                    this.lookup[s] = l;
                a < d.length - 1 && (this.lookup[s - 1] = d[d.length - 2])
            }
            return this._calcEnd = 1 !== d[d.length - 1].y || 0 !== d[0].y,
            this
        }
        ,
        t.getRatio = n,
        t.getSVGData = function(t) {
            return r.getSVGData(this, t)
        }
        ,
        r.create = function(t, e, i) {
            return new r(t,e,i)
        }
        ,
        r.version = "0.2.1",
        r.bezierToPoints = O,
        r.get = function(t) {
            return v.map[t]
        }
        ,
        r.getSVGData = function(t, e) {
            var i, n, r, s, o, a, l, h, u, c, f = 1e3, p = (e = e || {}).width || 100, d = e.height || 100, _ = e.x || 0, m = (e.y || 0) + d, g = e.path;
            if (e.invert && (d = -d,
            m = 0),
            (t = t.getRatio ? t : v.map[t] || console.log("No ease found: ", t)).rawBezier) {
                for (i = [],
                l = t.rawBezier.length,
                r = 0; r < l; r += 2)
                    i.push(((_ + t.rawBezier[r] * p) * f | 0) / f + "," + ((m + t.rawBezier[r + 1] * -d) * f | 0) / f);
                i[0] = "M" + i[0],
                i[1] = "C" + i[1]
            } else
                for (i = ["M" + _ + "," + m],
                s = 1 / (l = Math.max(5, 200 * (e.precision || 1))),
                h = 5 / (l += 2),
                u = ((_ + s * p) * f | 0) / f,
                n = ((c = ((m + t.getRatio(s) * -d) * f | 0) / f) - m) / (u - _),
                r = 2; r < l; r++)
                    o = ((_ + r * s * p) * f | 0) / f,
                    a = ((m + t.getRatio(r * s) * -d) * f | 0) / f,
                    (Math.abs((a - c) / (o - u) - n) > h || r === l - 1) && (i.push(u + "," + c),
                    n = (a - c) / (o - u)),
                    u = o,
                    c = a;
            return g && ("string" == typeof g ? document.querySelector(g) : g).setAttribute("d", i.join(" ")),
            i.join(" ")
        }
        ,
        r
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).CustomEase
    };
    "function" == typeof define && define.amd ? define(["./TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js.js.js"),
    module.exports = e())
}(),
function(s, a, t, T) {
    "use strict";
    function l(t, e, i) {
        return setTimeout(r(t, i), e)
    }
    function n(t, e, i) {
        return !!Array.isArray(t) && (o(t, i[e], i),
        !0)
    }
    function o(t, e, i) {
        var n;
        if (t)
            if (t.forEach)
                t.forEach(e, i);
            else if (t.length !== T)
                for (n = 0; n < t.length; )
                    e.call(i, t[n], n, t),
                    n++;
            else
                for (n in t)
                    t.hasOwnProperty(n) && e.call(i, t[n], n, t)
    }
    function e(n, t, e) {
        var r = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n";
        return function() {
            var t = new Error("get-stack-trace")
              , e = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , i = s.console && (s.console.warn || s.console.log);
            return i && i.call(s.console, r, e),
            n.apply(this, arguments)
        }
    }
    function i(t, e, i) {
        var n, r = e.prototype;
        (n = t.prototype = Object.create(r)).constructor = t,
        n._super = r,
        i && Q(n, i)
    }
    function r(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function h(t, e) {
        return typeof t == tt ? t.apply(e && e[0] || T, e) : t
    }
    function u(t, e) {
        return t === T ? e : t
    }
    function c(e, t, i) {
        o(d(t), function(t) {
            e.addEventListener(t, i, !1)
        })
    }
    function f(e, t, i) {
        o(d(t), function(t) {
            e.removeEventListener(t, i, !1)
        })
    }
    function b(t, e) {
        for (; t; ) {
            if (t == e)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function p(t, e) {
        return -1 < t.indexOf(e)
    }
    function d(t) {
        return t.trim().split(/\s+/g)
    }
    function _(t, e, i) {
        if (t.indexOf && !i)
            return t.indexOf(e);
        for (var n = 0; n < t.length; ) {
            if (i && t[n][i] == e || !i && t[n] === e)
                return n;
            n++
        }
        return -1
    }
    function m(t) {
        return Array.prototype.slice.call(t, 0)
    }
    function g(t, i, e) {
        for (var n = [], r = [], s = 0; s < t.length; ) {
            var o = i ? t[s][i] : t[s];
            _(r, o) < 0 && n.push(t[s]),
            r[s] = o,
            s++
        }
        return e && (n = i ? n.sort(function(t, e) {
            return t[i] > e[i]
        }) : n.sort()),
        n
    }
    function v(t, e) {
        for (var i, n, r = e[0].toUpperCase() + e.slice(1), s = 0; s < K.length; ) {
            if ((n = (i = K[s]) ? i + r : e)in t)
                return n;
            s++
        }
        return T
    }
    function y(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || s
    }
    function x(e, t) {
        var i = this;
        this.manager = e,
        this.callback = t,
        this.element = e.element,
        this.target = e.options.inputTarget,
        this.domHandler = function(t) {
            h(e.options.enable, [e]) && i.handler(t)
        }
        ,
        this.init()
    }
    function w(t, e, i) {
        var n = i.pointers.length
          , r = i.changedPointers.length
          , s = e & pt && n - r == 0
          , o = e & (dt | _t) && n - r == 0;
        i.isFirst = !!s,
        i.isFinal = !!o,
        s && (t.session = {}),
        i.eventType = e,
        function(t, e) {
            var i = t.session
              , n = e.pointers
              , r = n.length;
            i.firstInput || (i.firstInput = P(e)),
            1 < r && !i.firstMultiple ? i.firstMultiple = P(e) : 1 === r && (i.firstMultiple = !1);
            var s = i.firstInput
              , o = i.firstMultiple
              , a = o ? o.center : s.center
              , l = e.center = S(n);
            e.timeStamp = nt(),
            e.deltaTime = e.timeStamp - s.timeStamp,
            e.angle = D(a, l),
            e.distance = O(a, l),
            h = i,
            u = e,
            c = u.center,
            f = h.offsetDelta || {},
            p = h.prevDelta || {},
            d = h.prevInput || {},
            u.eventType !== pt && d.eventType !== dt || (p = h.prevDelta = {
                x: d.deltaX || 0,
                y: d.deltaY || 0
            },
            f = h.offsetDelta = {
                x: c.x,
                y: c.y
            }),
            u.deltaX = p.x + (c.x - f.x),
            u.deltaY = p.y + (c.y - f.y),
            e.offsetDirection = A(e.deltaX, e.deltaY);
            var h, u, c, f, p, d;
            var _ = C(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = _.x,
            e.overallVelocityY = _.y,
            e.overallVelocity = it(_.x) > it(_.y) ? _.x : _.y,
            e.scale = o ? (v = o.pointers,
            y = n,
            O(y[0], y[1], St) / O(v[0], v[1], St)) : 1,
            e.rotation = o ? (m = o.pointers,
            g = n,
            D(g[1], g[0], St) + D(m[1], m[0], St)) : 0,
            e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
            function(t, e) {
                var i, n, r, s, o = t.lastInterval || e, a = e.timeStamp - o.timeStamp;
                if (e.eventType != _t && (ft < a || o.velocity === T)) {
                    var l = e.deltaX - o.deltaX
                      , h = e.deltaY - o.deltaY
                      , u = C(a, l, h);
                    n = u.x,
                    r = u.y,
                    i = it(u.x) > it(u.y) ? u.x : u.y,
                    s = A(l, h),
                    t.lastInterval = e
                } else
                    i = o.velocity,
                    n = o.velocityX,
                    r = o.velocityY,
                    s = o.direction;
                e.velocity = i,
                e.velocityX = n,
                e.velocityY = r,
                e.direction = s
            }(i, e);
            var m, g;
            var v, y;
            var x = t.element;
            b(e.srcEvent.target, x) && (x = e.srcEvent.target),
            e.target = x
        }(t, i),
        t.emit("hammer.input", i),
        t.recognize(i),
        t.session.prevInput = i
    }
    function P(t) {
        for (var e = [], i = 0; i < t.pointers.length; )
            e[i] = {
                clientX: et(t.pointers[i].clientX),
                clientY: et(t.pointers[i].clientY)
            },
            i++;
        return {
            timeStamp: nt(),
            pointers: e,
            center: S(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }
    function S(t) {
        var e = t.length;
        if (1 === e)
            return {
                x: et(t[0].clientX),
                y: et(t[0].clientY)
            };
        for (var i = 0, n = 0, r = 0; r < e; )
            i += t[r].clientX,
            n += t[r].clientY,
            r++;
        return {
            x: et(i / e),
            y: et(n / e)
        }
    }
    function C(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }
    function A(t, e) {
        return t === e ? mt : it(t) >= it(e) ? t < 0 ? gt : vt : e < 0 ? yt : xt
    }
    function O(t, e, i) {
        i || (i = Pt);
        var n = e[i[0]] - t[i[0]]
          , r = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + r * r)
    }
    function D(t, e, i) {
        i || (i = Pt);
        var n = e[i[0]] - t[i[0]]
          , r = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(r, n) / Math.PI
    }
    function k() {
        this.evEl = At,
        this.evWin = Ot,
        this.pressed = !1,
        x.apply(this, arguments)
    }
    function R() {
        this.evEl = Rt,
        this.evWin = Ft,
        x.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function F() {
        this.evTarget = "touchstart",
        this.evWin = "touchstart touchmove touchend touchcancel",
        this.started = !1,
        x.apply(this, arguments)
    }
    function E() {
        this.evTarget = Nt,
        this.targetIds = {},
        x.apply(this, arguments)
    }
    function M() {
        x.apply(this, arguments);
        var t = r(this.handler, this);
        this.touch = new E(this.manager,t),
        this.mouse = new k(this.manager,t),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function N(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches;
            setTimeout(function() {
                var t = n.indexOf(i);
                -1 < t && n.splice(t, 1)
            }, Lt)
        }
    }
    function L(t, e) {
        this.manager = t,
        this.set(e)
    }
    function z(t) {
        this.options = Q({}, this.defaults, t || {}),
        this.id = ot++,
        this.manager = null,
        this.options.enable = u(this.options.enable, !0),
        this.state = qt,
        this.simultaneous = {},
        this.requireFail = []
    }
    function I(t) {
        return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
    }
    function j(t) {
        return t == xt ? "down" : t == yt ? "up" : t == gt ? "left" : t == vt ? "right" : ""
    }
    function X(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }
    function B() {
        z.apply(this, arguments)
    }
    function Y() {
        B.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function H() {
        B.apply(this, arguments)
    }
    function V() {
        z.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function q() {
        B.apply(this, arguments)
    }
    function W() {
        B.apply(this, arguments)
    }
    function U() {
        z.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function $(t, e) {
        return (e = e || {}).recognizers = u(e.recognizers, $.defaults.preset),
        new G(t,e)
    }
    function G(t, e) {
        var i;
        this.options = Q({}, $.defaults, e || {}),
        this.options.inputTarget = this.options.inputTarget || t,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = t,
        this.input = new ((i = this).options.inputClass || (lt ? R : ht ? E : at ? M : k))(i,w),
        this.touchAction = new L(this,this.options.touchAction),
        Z(this, !0),
        o(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]),
            t[3] && e.requireFailure(t[3])
        }, this)
    }
    function Z(i, n) {
        var r, s = i.element;
        s.style && (o(i.options.cssProps, function(t, e) {
            r = v(s.style, e),
            s.style[r] = n ? (i.oldCssProps[r] = s.style[r],
            t) : i.oldCssProps[r] || ""
        }),
        n || (i.oldCssProps = {}))
    }
    var Q, K = ["", "webkit", "Moz", "MS", "ms", "o"], J = a.createElement("div"), tt = "function", et = Math.round, it = Math.abs, nt = Date.now;
    Q = "function" != typeof Object.assign ? function(t) {
        if (t === T || null === t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            if (n !== T && null !== n)
                for (var r in n)
                    n.hasOwnProperty(r) && (e[r] = n[r])
        }
        return e
    }
    : Object.assign;
    var rt = e(function(t, e, i) {
        for (var n = Object.keys(e), r = 0; r < n.length; )
            (!i || i && t[n[r]] === T) && (t[n[r]] = e[n[r]]),
            r++;
        return t
    }, "extend", "Use `assign`.")
      , st = e(function(t, e) {
        return rt(t, e, !0)
    }, "merge", "Use `assign`.")
      , ot = 1
      , at = "ontouchstart"in s
      , lt = v(s, "PointerEvent") !== T
      , ht = at && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
      , ut = "touch"
      , ct = "mouse"
      , ft = 25
      , pt = 1
      , dt = 4
      , _t = 8
      , mt = 1
      , gt = 2
      , vt = 4
      , yt = 8
      , xt = 16
      , Tt = gt | vt
      , bt = yt | xt
      , wt = Tt | bt
      , Pt = ["x", "y"]
      , St = ["clientX", "clientY"];
    x.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && c(this.element, this.evEl, this.domHandler),
            this.evTarget && c(this.target, this.evTarget, this.domHandler),
            this.evWin && c(y(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler),
            this.evTarget && f(this.target, this.evTarget, this.domHandler),
            this.evWin && f(y(this.element), this.evWin, this.domHandler)
        }
    };
    var Ct = {
        mousedown: pt,
        mousemove: 2,
        mouseup: dt
    }
      , At = "mousedown"
      , Ot = "mousemove mouseup";
    i(k, x, {
        handler: function(t) {
            var e = Ct[t.type];
            e & pt && 0 === t.button && (this.pressed = !0),
            2 & e && 1 !== t.which && (e = dt),
            this.pressed && (e & dt && (this.pressed = !1),
            this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: ct,
                srcEvent: t
            }))
        }
    });
    var Dt = {
        pointerdown: pt,
        pointermove: 2,
        pointerup: dt,
        pointercancel: _t,
        pointerout: _t
    }
      , kt = {
        2: ut,
        3: "pen",
        4: ct,
        5: "kinect"
    }
      , Rt = "pointerdown"
      , Ft = "pointermove pointerup pointercancel";
    s.MSPointerEvent && !s.PointerEvent && (Rt = "MSPointerDown",
    Ft = "MSPointerMove MSPointerUp MSPointerCancel"),
    i(R, x, {
        handler: function(t) {
            var e = this.store
              , i = !1
              , n = t.type.toLowerCase().replace("ms", "")
              , r = Dt[n]
              , s = kt[t.pointerType] || t.pointerType
              , o = s == ut
              , a = _(e, t.pointerId, "pointerId");
            r & pt && (0 === t.button || o) ? a < 0 && (e.push(t),
            a = e.length - 1) : r & (dt | _t) && (i = !0),
            a < 0 || (e[a] = t,
            this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: s,
                srcEvent: t
            }),
            i && e.splice(a, 1))
        }
    });
    var Et = {
        touchstart: pt,
        touchmove: 2,
        touchend: dt,
        touchcancel: _t
    };
    i(F, x, {
        handler: function(t) {
            var e = Et[t.type];
            if (e === pt && (this.started = !0),
            this.started) {
                var i = function(t, e) {
                    var i = m(t.touches)
                      , n = m(t.changedTouches);
                    return e & (dt | _t) && (i = g(i.concat(n), "identifier", !0)),
                    [i, n]
                }
                .call(this, t, e);
                e & (dt | _t) && i[0].length - i[1].length == 0 && (this.started = !1),
                this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: ut,
                    srcEvent: t
                })
            }
        }
    });
    var Mt = {
        touchstart: pt,
        touchmove: 2,
        touchend: dt,
        touchcancel: _t
    }
      , Nt = "touchstart touchmove touchend touchcancel";
    i(E, x, {
        handler: function(t) {
            var e = Mt[t.type]
              , i = function(t, e) {
                var i = m(t.touches)
                  , n = this.targetIds;
                if (e & (2 | pt) && 1 === i.length)
                    return n[i[0].identifier] = !0,
                    [i, i];
                var r, s, o = m(t.changedTouches), a = [], l = this.target;
                if (s = i.filter(function(t) {
                    return b(t.target, l)
                }),
                e === pt)
                    for (r = 0; r < s.length; )
                        n[s[r].identifier] = !0,
                        r++;
                for (r = 0; r < o.length; )
                    n[o[r].identifier] && a.push(o[r]),
                    e & (dt | _t) && delete n[o[r].identifier],
                    r++;
                return a.length ? [g(s.concat(a), "identifier", !0), a] : void 0
            }
            .call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: ut,
                srcEvent: t
            })
        }
    });
    var Lt = 2500;
    i(M, x, {
        handler: function(t, e, i) {
            var n = i.pointerType == ut
              , r = i.pointerType == ct;
            if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n)
                    (function(t, e) {
                        t & pt ? (this.primaryTouch = e.changedPointers[0].identifier,
                        N.call(this, e)) : t & (dt | _t) && N.call(this, e)
                    }
                    ).call(this, e, i);
                else if (r && function(t) {
                    for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                        var r = this.lastTouches[n]
                          , s = Math.abs(e - r.x)
                          , o = Math.abs(i - r.y);
                        if (s <= 25 && o <= 25)
                            return !0
                    }
                    return !1
                }
                .call(this, i))
                    return;
                this.callback(t, e, i)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var zt = v(J.style, "touchAction")
      , It = zt !== T
      , jt = "compute"
      , Xt = "manipulation"
      , Bt = "none"
      , Yt = "pan-x"
      , Ht = "pan-y"
      , Vt = function() {
        if (!It)
            return !1;
        var e = {}
          , i = s.CSS && s.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(t) {
            e[t] = !i || s.CSS.supports("touch-action", t)
        }),
        e
    }();
    L.prototype = {
        set: function(t) {
            t == jt && (t = this.compute()),
            It && this.manager.element.style && Vt[t] && (this.manager.element.style[zt] = t),
            this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return o(this.manager.recognizers, function(t) {
                h(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }),
            function(t) {
                if (p(t, Bt))
                    return Bt;
                var e = p(t, Yt)
                  , i = p(t, Ht);
                return e && i ? Bt : e || i ? e ? Yt : Ht : p(t, Xt) ? Xt : "auto"
            }(e.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent
              , i = t.offsetDirection;
            if (!this.manager.session.prevented) {
                var n = this.actions
                  , r = p(n, Bt) && !Vt[Bt]
                  , s = p(n, Ht) && !Vt[Ht]
                  , o = p(n, Yt) && !Vt[Yt];
                if (r) {
                    var a = 1 === t.pointers.length
                      , l = t.distance < 2
                      , h = t.deltaTime < 250;
                    if (a && l && h)
                        return
                }
                return o && s ? void 0 : r || s && i & Tt || o && i & bt ? this.preventSrc(e) : void 0
            }
            e.preventDefault()
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0,
            t.preventDefault()
        }
    };
    var qt = 1;
    z.prototype = {
        defaults: {},
        set: function(t) {
            return Q(this.options, t),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(t) {
            if (n(t, "recognizeWith", this))
                return this;
            var e = this.simultaneous;
            return e[(t = X(t, this)).id] || (e[t.id] = t).recognizeWith(this),
            this
        },
        dropRecognizeWith: function(t) {
            return n(t, "dropRecognizeWith", this) || (t = X(t, this),
            delete this.simultaneous[t.id]),
            this
        },
        requireFailure: function(t) {
            if (n(t, "requireFailure", this))
                return this;
            var e = this.requireFail;
            return -1 === _(e, t = X(t, this)) && (e.push(t),
            t.requireFailure(this)),
            this
        },
        dropRequireFailure: function(t) {
            if (n(t, "dropRequireFailure", this))
                return this;
            t = X(t, this);
            var e = _(this.requireFail, t);
            return -1 < e && this.requireFail.splice(e, 1),
            this
        },
        hasRequireFailures: function() {
            return 0 < this.requireFail.length
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(e) {
            function t(t) {
                i.manager.emit(t, e)
            }
            var i = this
              , n = this.state;
            n < 8 && t(i.options.event + I(n)),
            t(i.options.event),
            e.additionalEvent && t(e.additionalEvent),
            8 <= n && t(i.options.event + I(n))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = 32)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length; ) {
                if (!(this.requireFail[t].state & (32 | qt)))
                    return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = Q({}, t);
            return h(this.options.enable, [this, e]) ? (56 & this.state && (this.state = qt),
            this.state = this.process(e),
            void (30 & this.state && this.tryEmit(e))) : (this.reset(),
            void (this.state = 32))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    i(B, z, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state
              , i = t.eventType
              , n = 6 & e
              , r = this.attrTest(t);
            return n && (i & _t || !r) ? 16 | e : n || r ? i & dt ? 8 | e : 2 & e ? 4 | e : 2 : 32
        }
    }),
    i(Y, B, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: wt
        },
        getTouchAction: function() {
            var t = this.options.direction
              , e = [];
            return t & Tt && e.push(Ht),
            t & bt && e.push(Yt),
            e
        },
        directionTest: function(t) {
            var e = this.options
              , i = !0
              , n = t.distance
              , r = t.direction
              , s = t.deltaX
              , o = t.deltaY;
            return r & e.direction || (n = e.direction & Tt ? (r = 0 === s ? mt : s < 0 ? gt : vt,
            i = s != this.pX,
            Math.abs(t.deltaX)) : (r = 0 === o ? mt : o < 0 ? yt : xt,
            i = o != this.pY,
            Math.abs(t.deltaY))),
            t.direction = r,
            i && n > e.threshold && r & e.direction
        },
        attrTest: function(t) {
            return B.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX,
            this.pY = t.deltaY;
            var e = j(t.direction);
            e && (t.additionalEvent = this.options.event + e),
            this._super.emit.call(this, t)
        }
    }),
    i(H, B, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Bt]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }),
    i(V, z, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return ["auto"]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , n = t.distance < e.threshold
              , r = t.deltaTime > e.time;
            if (this._input = t,
            !n || !i || t.eventType & (dt | _t) && !r)
                this.reset();
            else if (t.eventType & pt)
                this.reset(),
                this._timer = l(function() {
                    this.state = 8,
                    this.tryEmit()
                }, e.time, this);
            else if (t.eventType & dt)
                return 8;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            8 === this.state && (t && t.eventType & dt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = nt(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    i(q, B, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Bt]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
        }
    }),
    i(W, B, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Tt | bt,
            pointers: 1
        },
        getTouchAction: function() {
            return Y.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (Tt | bt) ? e = t.overallVelocity : i & Tt ? e = t.overallVelocityX : i & bt && (e = t.overallVelocityY),
            this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && it(e) > this.options.velocity && t.eventType & dt
        },
        emit: function(t) {
            var e = j(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t),
            this.manager.emit(this.options.event, t)
        }
    }),
    i(U, z, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Xt]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , n = t.distance < e.threshold
              , r = t.deltaTime < e.time;
            if (this.reset(),
            t.eventType & pt && 0 === this.count)
                return this.failTimeout();
            if (n && r && i) {
                if (t.eventType != dt)
                    return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval
                  , o = !this.pCenter || O(this.pCenter, t.center) < e.posThreshold;
                if (this.pTime = t.timeStamp,
                this.pCenter = t.center,
                o && s ? this.count += 1 : this.count = 1,
                this._input = t,
                0 === this.count % e.taps)
                    return this.hasRequireFailures() ? (this._timer = l(function() {
                        this.state = 8,
                        this.tryEmit()
                    }, e.interval, this),
                    2) : 8
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = l(function() {
                this.state = 32
            }, this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            8 == this.state && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    $.VERSION = "2.0.8",
    $.defaults = {
        domEvents: !1,
        touchAction: jt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[q, {
            enable: !1
        }], [H, {
            enable: !1
        }, ["rotate"]], [W, {
            direction: Tt
        }], [Y, {
            direction: Tt
        }, ["swipe"]], [U], [U, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [V]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    G.prototype = {
        set: function(t) {
            return Q(this.options, t),
            t.touchAction && this.touchAction.update(),
            t.inputTarget && (this.input.destroy(),
            this.input.target = t.inputTarget,
            this.input.init()),
            this
        },
        stop: function(t) {
            this.session.stopped = t ? 2 : 1
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers, r = e.curRecognizer;
                (!r || r && 8 & r.state) && (r = e.curRecognizer = null);
                for (var s = 0; s < n.length; )
                    i = n[s],
                    2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t),
                    !r && 14 & i.state && (r = e.curRecognizer = i),
                    s++
            }
        },
        get: function(t) {
            if (t instanceof z)
                return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t)
                    return e[i];
            return null
        },
        add: function(t) {
            if (n(t, "add", this))
                return this;
            var e = this.get(t.options.event);
            return e && this.remove(e),
            this.recognizers.push(t),
            (t.manager = this).touchAction.update(),
            t
        },
        remove: function(t) {
            if (n(t, "remove", this))
                return this;
            if (t = this.get(t)) {
                var e = this.recognizers
                  , i = _(e, t);
                -1 !== i && (e.splice(i, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== T && e !== T) {
                var i = this.handlers;
                return o(d(t), function(t) {
                    i[t] = i[t] || [],
                    i[t].push(e)
                }),
                this
            }
        },
        off: function(t, e) {
            if (t !== T) {
                var i = this.handlers;
                return o(d(t), function(t) {
                    e ? i[t] && i[t].splice(_(i[t], e), 1) : delete i[t]
                }),
                this
            }
        },
        emit: function(t, e) {
            var i, n, r;
            this.options.domEvents && (i = t,
            n = e,
            (r = a.createEvent("Event")).initEvent(i, !0, !0),
            (r.gesture = n).target.dispatchEvent(r));
            var s = this.handlers[t] && this.handlers[t].slice();
            if (s && s.length) {
                e.type = t,
                e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                }
                ;
                for (var o = 0; o < s.length; )
                    s[o](e),
                    o++
            }
        },
        destroy: function() {
            this.element && Z(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    Q($, {
        INPUT_START: pt,
        INPUT_MOVE: 2,
        INPUT_END: dt,
        INPUT_CANCEL: _t,
        STATE_POSSIBLE: qt,
        STATE_BEGAN: 2,
        STATE_CHANGED: 4,
        STATE_ENDED: 8,
        STATE_RECOGNIZED: 8,
        STATE_CANCELLED: 16,
        STATE_FAILED: 32,
        DIRECTION_NONE: mt,
        DIRECTION_LEFT: gt,
        DIRECTION_RIGHT: vt,
        DIRECTION_UP: yt,
        DIRECTION_DOWN: xt,
        DIRECTION_HORIZONTAL: Tt,
        DIRECTION_VERTICAL: bt,
        DIRECTION_ALL: wt,
        Manager: G,
        Input: x,
        TouchAction: L,
        TouchInput: E,
        MouseInput: k,
        PointerEventInput: R,
        TouchMouseInput: M,
        SingleTouchInput: F,
        Recognizer: z,
        AttrRecognizer: B,
        Tap: U,
        Pan: Y,
        Swipe: W,
        Pinch: H,
        Rotate: q,
        Press: V,
        on: c,
        off: f,
        each: o,
        merge: st,
        extend: rt,
        assign: Q,
        inherit: i,
        bindFn: r,
        prefixed: v
    }),
    (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = $,
    "function" == typeof define && define.amd ? define(function() {
        return $
    }) : "undefined" != typeof module && module.exports ? module.exports = $ : s.Hammer = $
}(window, document),
function(i) {
    "use strict";
    var r = i.GreenSockGlobals || i
      , t = function(t) {
        var e, i = t.split("."), n = r;
        for (e = 0; e < i.length; e++)
            n[i[e]] = n = n[i[e]] || {};
        return n
    }("com.greensock.utils")
      , w = function(t) {
        var e = t.nodeType
          , i = "";
        if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof t.textContent)
                return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling)
                i += w(t)
        } else if (3 === e || 4 === e)
            return t.nodeValue;
        return i
    }
      , B = document
      , Y = B.defaultView ? B.defaultView.getComputedStyle : function() {}
      , s = /([A-Z])/g
      , H = function(t, e, i, n) {
        var r;
        return (i = i || Y(t, null)) ? r = (t = i.getPropertyValue(e.replace(s, "-$1").toLowerCase())) || i.length ? t : i[e] : t.currentStyle && (r = (i = t.currentStyle)[e]),
        n ? r : parseInt(r, 10) || 0
    }
      , o = function(t) {
        return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
    }
      , P = /(?:\r|\n|\t\t)/g
      , S = /(?:\s\s+)/g
      , C = function(t) {
        return (t.charCodeAt(0) - 55296 << 10) + (t.charCodeAt(1) - 56320) + 65536
    }
      , a = " style='position:relative;display:inline-block;" + (B.all && !B.addEventListener ? "*display:inline;*zoom:1;'" : "'")
      , l = function(t, e) {
        var i = -1 !== (t = t || "").indexOf("++")
          , n = 1;
        return i && (t = t.split("++").join("")),
        function() {
            return "<" + e + a + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
        }
    }
      , n = t.SplitText = r.SplitText = function(t, e) {
        if ("string" == typeof t && (t = n.selector(t)),
        !t)
            throw "cannot split a null element.";
        this.elements = o(t) ? function(t) {
            var e, i, n, r = [], s = t.length;
            for (e = 0; e < s; e++)
                if (i = t[e],
                o(i))
                    for (n = i.length,
                    n = 0; n < i.length; n++)
                        r.push(i[n]);
                else
                    r.push(i);
            return r
        }(t) : [t],
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = e || {},
        this.split(e)
    }
      , V = function(t, e, i) {
        var n = t.nodeType;
        if (1 === n || 9 === n || 11 === n)
            for (t = t.firstChild; t; t = t.nextSibling)
                V(t, e, i);
        else
            3 !== n && 4 !== n || (t.nodeValue = t.nodeValue.split(e).join(i))
    }
      , q = function(t, e) {
        for (var i = e.length; -1 < --i; )
            t.push(e[i])
    }
      , h = function(t) {
        var e, i = [], n = t.length;
        for (e = 0; e !== n; i.push(t[e++]))
            ;
        return i
    }
      , W = function(t, e, i) {
        for (var n; t && t !== e; ) {
            if (n = t._next || t.nextSibling)
                return n.textContent.charAt(0) === i;
            t = t.parentNode || t._parent
        }
        return !1
    }
      , U = function(t) {
        var e, i, n = h(t.childNodes), r = n.length;
        for (e = 0; e < r; e++)
            (i = n[e])._isSplit ? U(i) : (e && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i),
            t.removeChild(i))
    }
      , u = function(t, e, i, n, r, s, o) {
        var a, l, h, u, c, f, p, d, _, m, g, v, y = Y(t), x = H(t, "paddingLeft", y), T = -999, b = H(t, "borderBottomWidth", y) + H(t, "borderTopWidth", y), w = H(t, "borderLeftWidth", y) + H(t, "borderRightWidth", y), P = H(t, "paddingTop", y) + H(t, "paddingBottom", y), S = H(t, "paddingLeft", y) + H(t, "paddingRight", y), C = .2 * H(t, "fontSize"), A = H(t, "textAlign", y, !0), O = [], D = [], k = [], R = e.wordDelimiter || " ", F = e.span ? "span" : "div", E = e.type || e.split || "chars,words,lines", M = r && -1 !== E.indexOf("lines") ? [] : null, N = -1 !== E.indexOf("words"), L = -1 !== E.indexOf("chars"), z = "absolute" === e.position || !0 === e.absolute, I = e.linesClass, j = -1 !== (I || "").indexOf("++"), X = [];
        for (M && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]),
        j && (I = I.split("++").join("")),
        h = (l = t.getElementsByTagName("*")).length,
        c = [],
        a = 0; a < h; a++)
            c[a] = l[a];
        if (M || z)
            for (a = 0; a < h; a++)
                ((f = (u = c[a]).parentNode === t) || z || L && !N) && (v = u.offsetTop,
                M && f && Math.abs(v - T) > C && "BR" !== u.nodeName && (p = [],
                M.push(p),
                T = v),
                z && (u._x = u.offsetLeft,
                u._y = v,
                u._w = u.offsetWidth,
                u._h = u.offsetHeight),
                M && ((u._isSplit && f || !L && f || N && f || !N && u.parentNode.parentNode === t && !u.parentNode._isSplit) && (p.push(u),
                u._x -= x,
                W(u, t, R) && (u._wordEnd = !0)),
                "BR" === u.nodeName && u.nextSibling && "BR" === u.nextSibling.nodeName && M.push([])));
        for (a = 0; a < h; a++)
            f = (u = c[a]).parentNode === t,
            "BR" !== u.nodeName ? (z && (_ = u.style,
            N || f || (u._x += u.parentNode._x,
            u._y += u.parentNode._y),
            _.left = u._x + "px",
            _.top = u._y + "px",
            _.position = "absolute",
            _.display = "block",
            _.width = u._w + 1 + "px",
            _.height = u._h + "px"),
            !N && L ? u._isSplit ? (u._next = u.nextSibling,
            u.parentNode.appendChild(u)) : u.parentNode._isSplit ? (u._parent = u.parentNode,
            !u.previousSibling && u.firstChild && (u.firstChild._isFirst = !0),
            u.nextSibling && " " === u.nextSibling.textContent && !u.nextSibling.nextSibling && X.push(u.nextSibling),
            u._next = u.nextSibling && u.nextSibling._isFirst ? null : u.nextSibling,
            u.parentNode.removeChild(u),
            c.splice(a--, 1),
            h--) : f || (v = !u.nextSibling && W(u.parentNode, t, R),
            u.parentNode._parent && u.parentNode._parent.appendChild(u),
            v && u.parentNode.appendChild(B.createTextNode(" ")),
            e.span && (u.style.display = "inline"),
            O.push(u)) : u.parentNode._isSplit && !u._isSplit && "" !== u.innerHTML ? D.push(u) : L && !u._isSplit && (e.span && (u.style.display = "inline"),
            O.push(u))) : M || z ? (u.parentNode && u.parentNode.removeChild(u),
            c.splice(a--, 1),
            h--) : N || t.appendChild(u);
        for (a = X.length; -1 < --a; )
            X[a].parentNode.removeChild(X[a]);
        if (M) {
            for (z && (m = B.createElement(F),
            t.appendChild(m),
            g = m.offsetWidth + "px",
            v = m.offsetParent === t ? 0 : t.offsetLeft,
            t.removeChild(m)),
            _ = t.style.cssText,
            t.style.cssText = "display:none;"; t.firstChild; )
                t.removeChild(t.firstChild);
            for (d = " " === R && (!z || !N && !L),
            a = 0; a < M.length; a++) {
                for (p = M[a],
                (m = B.createElement(F)).style.cssText = "display:block;text-align:" + A + ";position:" + (z ? "absolute;" : "relative;"),
                I && (m.className = I + (j ? a + 1 : "")),
                k.push(m),
                h = p.length,
                l = 0; l < h; l++)
                    "BR" !== p[l].nodeName && (u = p[l],
                    m.appendChild(u),
                    d && u._wordEnd && m.appendChild(B.createTextNode(" ")),
                    z && (0 === l && (m.style.top = u._y + "px",
                    m.style.left = x + v + "px"),
                    u.style.top = "0px",
                    v && (u.style.left = u._x - v + "px")));
                0 === h ? m.innerHTML = "&nbsp;" : N || L || (U(m),
                V(m, String.fromCharCode(160), " ")),
                z && (m.style.width = g,
                m.style.height = u._h + "px"),
                t.appendChild(m)
            }
            t.style.cssText = _
        }
        z && (o > t.clientHeight && (t.style.height = o - P + "px",
        t.clientHeight < o && (t.style.height = o + b + "px")),
        s > t.clientWidth && (t.style.width = s - S + "px",
        t.clientWidth < s && (t.style.width = s + w + "px"))),
        q(i, O),
        q(n, D),
        q(r, k)
    }
      , c = function(t, e, i, n) {
        var r, s, o = h(t.childNodes), a = o.length, l = "absolute" === e.position || !0 === e.absolute;
        if (3 !== t.nodeType || 1 < a) {
            for (e.absolute = !1,
            r = 0; r < a; r++)
                (3 !== (s = o[r]).nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === H(s, "display", null, !0) && (s.style.display = "inline-block",
                s.style.position = "relative"),
                s._isSplit = !0,
                c(s, e, i, n));
            return e.absolute = l,
            void (t._isSplit = !0)
        }
        !function(t, e, i, n) {
            var r, s, o, a, l, h, u, c, f, p = e.span ? "span" : "div", d = e.type || e.split || "chars,words,lines", _ = (d.indexOf("words"),
            -1 !== d.indexOf("chars")), m = "absolute" === e.position || !0 === e.absolute, g = e.wordDelimiter || " ", v = " " !== g ? "" : m ? "&#173; " : " ", y = e.span ? "</span>" : "</div>", x = !0, T = B.createElement("div"), b = t.parentNode;
            for (b.insertBefore(T, t),
            T.textContent = t.nodeValue,
            b.removeChild(t),
            u = -1 !== (r = w(t = T)).indexOf("<"),
            !1 !== e.reduceWhiteSpace && (r = r.replace(S, " ").replace(P, "")),
            u && (r = r.split("<").join("{{LT}}")),
            l = r.length,
            s = (" " === r.charAt(0) ? v : "") + i(),
            o = 0; o < l; o++)
                if ((h = r.charAt(o)) === g && r.charAt(o - 1) !== g && o) {
                    for (s += x ? y : "",
                    x = !1; r.charAt(o + 1) === g; )
                        s += v,
                        o++;
                    o === l - 1 ? s += v : ")" !== r.charAt(o + 1) && (s += v + i(),
                    x = !0)
                } else
                    "{" === h && "{{LT}}" === r.substr(o, 6) ? (s += _ ? n() + "{{LT}}</" + p + ">" : "{{LT}}",
                    o += 5) : 55296 <= h.charCodeAt(0) && h.charCodeAt(0) <= 56319 || 65024 <= r.charCodeAt(o + 1) && r.charCodeAt(o + 1) <= 65039 ? (c = C(r.substr(o, 2)),
                    f = C(r.substr(o + 2, 2)),
                    a = 127462 <= c && c <= 127487 && 127462 <= f && f <= 127487 || 127995 <= f && f <= 127999 ? 4 : 2,
                    s += _ && " " !== h ? n() + r.substr(o, a) + "</" + p + ">" : r.substr(o, a),
                    o += a - 1) : s += _ && " " !== h ? n() + h + "</" + p + ">" : h;
            t.outerHTML = s + (x ? y : ""),
            u && V(b, "{{LT}}", "<")
        }(t, e, i, n)
    }
      , e = n.prototype;
    e.split = function(t) {
        this.isSplit && this.revert(),
        this.vars = t = t || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e, i, n, r = this.elements.length, s = t.span ? "span" : "div", o = ("absolute" === t.position || t.absolute,
        l(t.wordsClass, s)), a = l(t.charsClass, s); -1 < --r; )
            n = this.elements[r],
            this._originals[r] = n.innerHTML,
            e = n.clientHeight,
            i = n.clientWidth,
            c(n, t, o, a),
            u(n, t, this.chars, this.words, this.lines, i, e);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    e.revert = function() {
        if (!this._originals)
            throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; -1 < --t; )
            this.elements[t].innerHTML = this._originals[t];
        return this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    n.selector = i.$ || i.jQuery || function(t) {
        var e = i.$ || i.jQuery;
        return e ? (n.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
    }
    ,
    n.version = "0.5.6"
}(_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope).SplitText
    };
    "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}(),
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t, l, e, w, T, b, P, g, i, v, S, y, x, p, d, m, n;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, u, m) {
        var g = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , v = function(t, e, i) {
            var n, r, s = t.cycle;
            for (n in s)
                r = s[n],
                t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
            delete t.cycle
        }
          , y = function(t, e, i) {
            m.call(this, t, e, i),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = y.prototype.render
        }
          , x = 1e-10
          , T = m._internals
          , b = T.isSelector
          , w = T.isArray
          , t = y.prototype = m.to({}, .1, {})
          , P = [];
        y.version = "1.19.1",
        t.constructor = y,
        t.kill()._gc = !1,
        y.killTweensOf = y.killDelayedCallsTo = m.killTweensOf,
        y.getTweensOf = m.getTweensOf,
        y.lagSmoothing = m.lagSmoothing,
        y.ticker = m.ticker,
        y.render = m.render,
        t.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            m.prototype.invalidate.call(this)
        }
        ,
        t.updateTo = function(t, e) {
            var i, n = this.ratio, r = this.vars.immediateRender || t.immediateRender;
            for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
            this._uncache(!1),
            this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
            t)
                this.vars[i] = t[i];
            if (this._initted || r)
                if (e)
                    this._initted = !1,
                    r && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1),
                this._notifyPluginsOfEnabled && this._firstPT && m._onPluginEvent("_onDisable", this),
                .998 < this._time / this._duration) {
                    var s = this._totalTime;
                    this.render(0, !0, !1),
                    this._initted = !1,
                    this.render(s, !0, !1)
                } else if (this._initted = !1,
                this._init(),
                0 < this._time || r)
                    for (var o, a = 1 / (1 - n), l = this._firstPT; l; )
                        o = l.s + l.c,
                        l.c *= a,
                        l.s = o - l.c,
                        l = l._next;
            return this
        }
        ,
        t.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, s, o, a, l, h, u, c = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, p = this._totalTime, d = this._cycle, _ = this._duration, m = this._rawPrevTime;
            if (c - 1e-7 <= t && 0 <= t ? (this._totalTime = c,
            this._cycle = this._repeat,
            this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (n = !0,
            r = "onComplete",
            i = i || this._timeline.autoRemoveChildren),
            0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
            (m < 0 || t <= 0 && -1e-7 <= t || m === x && "isPause" !== this.data) && m !== t && (i = !0,
            x < m && (r = "onReverseComplete")),
            this._rawPrevTime = u = !e || t || m === t ? t : x)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== p || 0 === _ && 0 < m) && (r = "onReverseComplete",
            n = this._reversed),
            t < 0 && (this._active = !1,
            0 === _ && (this._initted || !this.vars.lazy || i) && (0 <= m && (i = !0),
            this._rawPrevTime = u = !e || t || m === t ? t : x)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (o = _ + this._repeatDelay,
            this._cycle = this._totalTime / o >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / o && p <= t && this._cycle--,
            this._time = this._totalTime - this._cycle * o,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time),
            this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)),
            this._easeType ? (a = this._time / _,
            (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a),
            3 === l && (a *= 2),
            1 === (h = this._easePower) ? a *= a : 2 === h ? a *= a * a : 3 === h ? a *= a * a * a : 4 === h && (a *= a * a * a * a),
            1 === l ? this.ratio = 1 - a : 2 === l ? this.ratio = a : this._time / _ < .5 ? this.ratio = a / 2 : this.ratio = 1 - a / 2) : this.ratio = this._ease.getRatio(this._time / _)),
            f !== this._time || i || d !== this._cycle) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = f,
                        this._totalTime = p,
                        this._rawPrevTime = m,
                        this._cycle = d,
                        T.lazyTweens.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== f && 0 <= t && (this._active = !0),
                0 === p && (2 === this._initted && 0 < t && this._init(),
                this._startAt && (0 <= t ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this._callback("onStart"))),
                s = this._firstPT; s; )
                    s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s,
                    s = s._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || (this._totalTime !== p || r) && this._callback("onUpdate")),
                this._cycle !== d && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[r] && this._callback(r),
                0 === _ && this._rawPrevTime === x && u !== x && (this._rawPrevTime = 0))
            } else
                p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        y.to = function(t, e, i) {
            return new y(t,e,i)
        }
        ,
        y.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new y(t,e,i)
        }
        ,
        y.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new y(t,e,n)
        }
        ,
        y.staggerTo = y.allTo = function(t, e, i, n, r, s, o) {
            n = n || 0;
            var a, l, h, u, c = 0, f = [], p = function() {
                i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments),
                r.apply(o || i.callbackScope || this, s || P)
            }, d = i.cycle, _ = i.startAt && i.startAt.cycle;
            for (w(t) || ("string" == typeof t && (t = m.selector(t) || t),
            b(t) && (t = g(t))),
            t = t || [],
            n < 0 && ((t = g(t)).reverse(),
            n *= -1),
            a = t.length - 1,
            h = 0; h <= a; h++) {
                for (u in l = {},
                i)
                    l[u] = i[u];
                if (d && (v(l, t, h),
                null != l.duration && (e = l.duration,
                delete l.duration)),
                _) {
                    for (u in _ = l.startAt = {},
                    i.startAt)
                        _[u] = i.startAt[u];
                    v(l.startAt, t, h)
                }
                l.delay = c + (l.delay || 0),
                h === a && r && (l.onComplete = p),
                f[h] = new y(t[h],e,l),
                c += n
            }
            return f
        }
        ,
        y.staggerFrom = y.allFrom = function(t, e, i, n, r, s, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            y.staggerTo(t, e, i, n, r, s, o)
        }
        ,
        y.staggerFromTo = y.allFromTo = function(t, e, i, n, r, s, o, a) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            y.staggerTo(t, e, n, r, s, o, a)
        }
        ,
        y.delayedCall = function(t, e, i, n, r) {
            return new y(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        y.set = function(t, e) {
            return new y(t,0,e)
        }
        ,
        y.isTweening = function(t) {
            return 0 < m.getTweensOf(t, !0).length
        }
        ;
        var s = function(t, e) {
            for (var i = [], n = 0, r = t._first; r; )
                r instanceof m ? i[n++] = r : (e && (i[n++] = r),
                n = (i = i.concat(s(r, e))).length),
                r = r._next;
            return i
        }
          , c = y.getAllTweens = function(t) {
            return s(n._rootTimeline, t).concat(s(n._rootFramesTimeline, t))
        }
        ;
        y.killAll = function(t, e, i, n) {
            null == e && (e = !0),
            null == i && (i = !0);
            var r, s, o, a = c(0 != n), l = a.length, h = e && i && n;
            for (o = 0; o < l; o++)
                s = a[o],
                (h || s instanceof u || (r = s.target === s.vars.onComplete) && i || e && !r) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }
        ,
        y.killChildTweensOf = function(t, e) {
            if (null != t) {
                var i, n, r, s, o, a = T.tweenLookup;
                if ("string" == typeof t && (t = m.selector(t) || t),
                b(t) && (t = g(t)),
                w(t))
                    for (s = t.length; -1 < --s; )
                        y.killChildTweensOf(t[s], e);
                else {
                    for (r in i = [],
                    a)
                        for (n = a[r].target.parentNode; n; )
                            n === t && (i = i.concat(a[r].tweens)),
                            n = n.parentNode;
                    for (o = i.length,
                    s = 0; s < o; s++)
                        e && i[s].totalTime(i[s].totalDuration()),
                        i[s]._enabled(!1, !1)
                }
            }
        }
        ;
        var r = function(t, e, i, n) {
            e = !1 !== e,
            i = !1 !== i;
            for (var r, s, o = c(n = !1 !== n), a = e && i && n, l = o.length; -1 < --l; )
                s = o[l],
                (a || s instanceof u || (r = s.target === s.vars.onComplete) && i || e && !r) && s.paused(t)
        };
        return y.pauseAll = function(t, e, i) {
            r(!0, t, e, i)
        }
        ,
        y.resumeAll = function(t, e, i) {
            r(!1, t, e, i)
        }
        ,
        y.globalTimeScale = function(t) {
            var e = n._rootTimeline
              , i = m.ticker.time;
            return arguments.length ? (t = t || x,
            e._startTime = i - (i - e._startTime) * e._timeScale / t,
            e = n._rootFramesTimeline,
            i = m.ticker.frame,
            e._startTime = i - (i - e._startTime) * e._timeScale / t,
            e._timeScale = n._rootTimeline._timeScale = t,
            t) : e._timeScale
        }
        ,
        t.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        t.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        t.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        t.duration = function(t) {
            return arguments.length ? n.prototype.duration.call(this, t) : this._duration
        }
        ,
        t.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
            this._dirty = !1),
            this._totalDuration)
        }
        ,
        t.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        t.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        t.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        y
    }, !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(u, c, f) {
        var p = function(t) {
            c.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren,
            this.smoothChildTiming = !0 === this.vars.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var e, i, n = this.vars;
            for (i in n)
                e = n[i],
                m(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
            m(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
        }
          , _ = 1e-10
          , t = f._internals
          , e = p._internals = {}
          , d = t.isSelector
          , m = t.isArray
          , g = t.lazyTweens
          , v = t.lazyRender
          , o = _gsScope._gsDefine.globals
          , y = function(t) {
            var e, i = {};
            for (e in t)
                i[e] = t[e];
            return i
        }
          , x = function(t, e, i) {
            var n, r, s = t.cycle;
            for (n in s)
                r = s[n],
                t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
            delete t.cycle
        }
          , s = e.pauseCallback = function() {}
          , T = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }
          , i = p.prototype = new c;
        return p.version = "1.19.1",
        i.constructor = p,
        i.kill()._gc = i._forcingPlayhead = i._hasPause = !1,
        i.to = function(t, e, i, n) {
            var r = i.repeat && o.TweenMax || f;
            return e ? this.add(new r(t,e,i), n) : this.set(t, i, n)
        }
        ,
        i.from = function(t, e, i, n) {
            return this.add((i.repeat && o.TweenMax || f).from(t, e, i), n)
        }
        ,
        i.fromTo = function(t, e, i, n, r) {
            var s = n.repeat && o.TweenMax || f;
            return e ? this.add(s.fromTo(t, e, i, n), r) : this.set(t, n, r)
        }
        ,
        i.staggerTo = function(t, e, i, n, r, s, o, a) {
            var l, h, u = new p({
                onComplete: s,
                onCompleteParams: o,
                callbackScope: a,
                smoothChildTiming: this.smoothChildTiming
            }), c = i.cycle;
            for ("string" == typeof t && (t = f.selector(t) || t),
            d(t = t || []) && (t = T(t)),
            (n = n || 0) < 0 && ((t = T(t)).reverse(),
            n *= -1),
            h = 0; h < t.length; h++)
                (l = y(i)).startAt && (l.startAt = y(l.startAt),
                l.startAt.cycle && x(l.startAt, t, h)),
                c && (x(l, t, h),
                null != l.duration && (e = l.duration,
                delete l.duration)),
                u.to(t[h], e, l, h * n);
            return this.add(u, r)
        }
        ,
        i.staggerFrom = function(t, e, i, n, r, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, n, r, s, o, a)
        }
        ,
        i.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, n, r, s, o, a, l)
        }
        ,
        i.call = function(t, e, i, n) {
            return this.add(f.delayedCall(0, t, e, i), n)
        }
        ,
        i.set = function(t, e, i) {
            return i = this._parseTimeOrLabel(i, 0, !0),
            null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused),
            this.add(new f(t,0,e), i)
        }
        ,
        p.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var i, n, r = new p(t), s = r._timeline;
            for (null == e && (e = !0),
            s._remove(r, !0),
            r._startTime = 0,
            r._rawPrevTime = r._time = r._totalTime = s._time,
            i = s._first; i; )
                n = i._next,
                e && i instanceof f && i.target === i.vars.onComplete || r.add(i, i._startTime - i._delay),
                i = n;
            return s.add(r, 0),
            r
        }
        ,
        i.add = function(t, e, i, n) {
            var r, s, o, a, l, h;
            if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)),
            !(t instanceof u)) {
                if (t instanceof Array || t && t.push && m(t)) {
                    for (i = i || "normal",
                    n = n || 0,
                    r = e,
                    s = t.length,
                    o = 0; o < s; o++)
                        m(a = t[o]) && (a = new p({
                            tweens: a
                        })),
                        this.add(a, r),
                        "string" != typeof a && "function" != typeof a && ("sequence" === i ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())),
                        r += n;
                    return this._uncache(!0)
                }
                if ("string" == typeof t)
                    return this.addLabel(t, e);
                if ("function" != typeof t)
                    throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                t = f.delayedCall(0, t)
            }
            if (c.prototype.add.call(this, t, e),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (h = (l = this).rawTime() > t._startTime; l._timeline; )
                    h && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1),
                    l = l._timeline;
            return this
        }
        ,
        i.remove = function(t) {
            if (t instanceof u) {
                this._remove(t, !1);
                var e = t._timeline = t.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale,
                this
            }
            if (t instanceof Array || t && t.push && m(t)) {
                for (var i = t.length; -1 < --i; )
                    this.remove(t[i]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }
        ,
        i._remove = function(t, e) {
            return c.prototype._remove.call(this, t, e),
            this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        i.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }
        ,
        i.insert = i.insertMultiple = function(t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }
        ,
        i.appendMultiple = function(t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }
        ,
        i.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        }
        ,
        i.addPause = function(t, e, i, n) {
            var r = f.delayedCall(0, s, i, n || this);
            return r.vars.onComplete = r.vars.onReverseComplete = e,
            r.data = "isPause",
            this._hasPause = !0,
            this.add(r, t)
        }
        ,
        i.removeLabel = function(t) {
            return delete this._labels[t],
            this
        }
        ,
        i.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }
        ,
        i._parseTimeOrLabel = function(t, e, i, n) {
            var r;
            if (n instanceof u && n.timeline === this)
                this.remove(n);
            else if (n && (n instanceof Array || n.push && m(n)))
                for (r = n.length; -1 < --r; )
                    n[r]instanceof u && n[r].timeline === this && this.remove(n[r]);
            if ("string" == typeof e)
                return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - this.duration() : 0, i);
            if (e = e || 0,
            "string" != typeof t || !isNaN(t) && null == this._labels[t])
                null == t && (t = this.duration());
            else {
                if (-1 === (r = t.indexOf("=")))
                    return null == this._labels[t] ? i ? this._labels[t] = this.duration() + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)),
                t = 1 < r ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, i) : this.duration()
            }
            return Number(t) + e
        }
        ,
        i.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }
        ,
        i.stop = function() {
            return this.paused(!0)
        }
        ,
        i.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }
        ,
        i.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }
        ,
        i.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, o, a, l, h, u = this._dirty ? this.totalDuration() : this._totalDuration, c = this._time, f = this._startTime, p = this._timeScale, d = this._paused;
            if (u - 1e-7 <= t && 0 <= t)
                this._totalTime = this._time = u,
                this._reversed || this._hasPausedChild() || (r = !0,
                o = "onComplete",
                a = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || this._rawPrevTime === _) && this._rawPrevTime !== t && this._first && (a = !0,
                this._rawPrevTime > _ && (o = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : _,
                t = u + 1e-4;
            else if (t < 1e-7)
                if (this._totalTime = this._time = 0,
                (0 !== c || 0 === this._duration && this._rawPrevTime !== _ && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (o = "onReverseComplete",
                r = this._reversed),
                t < 0)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0,
                    o = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : _,
                    0 === t && r)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (a = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (c <= t)
                        for (n = this._first; n && n._startTime <= t && !l; )
                            n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n),
                            n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !l; )
                            n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (l = n),
                            n = n._prev;
                    l && (this._time = t = l._startTime,
                    this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== c && this._first || i || a || l) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._time !== c && 0 < t && (this._active = !0),
                0 === c && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                c <= (h = this._time))
                    for (n = this._first; n && (s = n._next,
                    h === this._time && (!this._paused || d)); )
                        (n._active || n._startTime <= h && !n._paused && !n._gc) && (l === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = s;
                else
                    for (n = this._last; n && (s = n._prev,
                    h === this._time && (!this._paused || d)); ) {
                        if (n._active || n._startTime <= c && !n._paused && !n._gc) {
                            if (l === n) {
                                for (l = n._prev; l && l.endTime() > this._time; )
                                    l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i),
                                    l = l._prev;
                                l = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = s
                    }
                this._onUpdate && (e || (g.length && v(),
                this._callback("onUpdate"))),
                o && (this._gc || (f === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (g.length && v(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[o] && this._callback(o)))
            }
        }
        ,
        i._hasPausedChild = function() {
            for (var t = this._first; t; ) {
                if (t._paused || t instanceof p && t._hasPausedChild())
                    return !0;
                t = t._next
            }
            return !1
        }
        ,
        i.getChildren = function(t, e, i, n) {
            n = n || -9999999999;
            for (var r = [], s = this._first, o = 0; s; )
                s._startTime < n || (s instanceof f ? !1 !== e && (r[o++] = s) : (!1 !== i && (r[o++] = s),
                !1 !== t && (o = (r = r.concat(s.getChildren(!0, e, i))).length))),
                s = s._next;
            return r
        }
        ,
        i.getTweensOf = function(t, e) {
            var i, n, r = this._gc, s = [], o = 0;
            for (r && this._enabled(!0, !0),
            n = (i = f.getTweensOf(t)).length; -1 < --n; )
                (i[n].timeline === this || e && this._contains(i[n])) && (s[o++] = i[n]);
            return r && this._enabled(!1, !0),
            s
        }
        ,
        i.recent = function() {
            return this._recent
        }
        ,
        i._contains = function(t) {
            for (var e = t.timeline; e; ) {
                if (e === this)
                    return !0;
                e = e.timeline
            }
            return !1
        }
        ,
        i.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r; )
                r._startTime >= i && (r._startTime += t),
                r = r._next;
            if (e)
                for (n in s)
                    s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }
        ,
        i._kill = function(t, e) {
            if (!t && !e)
                return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; -1 < --n; )
                i[n]._kill(t, e) && (r = !0);
            return r
        }
        ,
        i.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; -1 < --i; )
                e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
            this._uncache(!0)
        }
        ,
        i.invalidate = function() {
            for (var t = this._first; t; )
                t.invalidate(),
                t = t._next;
            return u.prototype.invalidate.call(this)
        }
        ,
        i._enabled = function(t, e) {
            if (t === this._gc)
                for (var i = this._first; i; )
                    i._enabled(t, !0),
                    i = i._next;
            return c.prototype._enabled.call(this, t, e)
        }
        ,
        i.totalTime = function(t, e, i) {
            this._forcingPlayhead = !0;
            var n = u.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            n
        }
        ,
        i.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
            this) : (this._dirty && this.totalDuration(),
            this._duration)
        }
        ,
        i.totalDuration = function(t) {
            if (arguments.length)
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
            if (this._dirty) {
                for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                    e = r._prev,
                    r._dirty && r.totalDuration(),
                    r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime,
                    r._startTime < 0 && !r._paused && (n -= r._startTime,
                    this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale),
                    this.shiftChildren(-r._startTime, !1, -9999999999),
                    s = 0),
                    n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i),
                    r = e;
                this._duration = this._totalDuration = n,
                this._dirty = !1
            }
            return this._totalDuration
        }
        ,
        i.paused = function(t) {
            if (!t)
                for (var e = this._first, i = this._time; e; )
                    e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0),
                    e = e._next;
            return u.prototype.paused.apply(this, arguments)
        }
        ,
        i.usesFrames = function() {
            for (var t = this._timeline; t._timeline; )
                t = t._timeline;
            return t === u._rootFramesTimeline
        }
        ,
        i.rawTime = function(t) {
            return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }
        ,
        p
    }, !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, a, t) {
        var i = function(t) {
            e.call(this, t),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo,
            this._dirty = !0
        }
          , C = 1e-10
          , n = a._internals
          , A = n.lazyTweens
          , O = n.lazyRender
          , l = _gsScope._gsDefine.globals
          , h = new t(null,null,1,0)
          , r = i.prototype = new e;
        return r.constructor = i,
        r.kill()._gc = !1,
        i.version = "1.19.1",
        r.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            e.prototype.invalidate.call(this)
        }
        ,
        r.addCallback = function(t, e, i, n) {
            return this.add(a.delayedCall(0, t, i, n), e)
        }
        ,
        r.removeCallback = function(t, e) {
            if (t)
                if (null == e)
                    this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); -1 < --n; )
                        i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }
        ,
        r.removePause = function(t) {
            return this.removeCallback(e._internals.pauseCallback, t)
        }
        ,
        r.tweenTo = function(t, e) {
            e = e || {};
            var i, n, r, s = {
                ease: h,
                useFrames: this.usesFrames(),
                immediateRender: !1
            }, o = e.repeat && l.TweenMax || a;
            for (n in e)
                s[n] = e[n];
            return s.time = this._parseTimeOrLabel(t),
            i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001,
            r = new o(this,i,s),
            s.onStart = function() {
                r.target.paused(!0),
                r.vars.time !== r.target.time() && i === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale),
                e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
            }
            ,
            r
        }
        ,
        r.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }
        ,
        r.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, o, a, l, h, u, c = this._dirty ? this.totalDuration() : this._totalDuration, f = this._duration, p = this._time, d = this._totalTime, _ = this._startTime, m = this._timeScale, g = this._rawPrevTime, v = this._paused, y = this._cycle;
            if (c - 1e-7 <= t && 0 <= t)
                this._locked || (this._totalTime = c,
                this._cycle = this._repeat),
                this._reversed || this._hasPausedChild() || (r = !0,
                o = "onComplete",
                a = !!this._timeline.autoRemoveChildren,
                0 === this._duration && (t <= 0 && -1e-7 <= t || g < 0 || g === C) && g !== t && this._first && (a = !0,
                C < g && (o = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : C,
                this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = f) + 1e-4;
            else if (t < 1e-7)
                if (this._locked || (this._totalTime = this._cycle = 0),
                ((this._time = 0) !== p || 0 === f && g !== C && (0 < g || t < 0 && 0 <= g) && !this._locked) && (o = "onReverseComplete",
                r = this._reversed),
                t < 0)
                    this._active = !1,
                    this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0,
                    o = "onReverseComplete") : 0 <= g && this._first && (a = !0),
                    this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : C,
                    0 === t && r)
                        for (n = this._first; n && 0 === n._startTime; )
                            n._duration || (r = !1),
                            n = n._next;
                    t = 0,
                    this._initted || (a = !0)
                }
            else if (0 === f && g < 0 && (a = !0),
            this._time = this._rawPrevTime = t,
            this._locked || (this._totalTime = t,
            0 !== this._repeat && (l = f + this._repeatDelay,
            this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && d <= t && this._cycle--,
            this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time),
            this._time > f ? t = (this._time = f) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)),
            this._hasPause && !this._forcingPlayhead && !e && t < f) {
                if (p <= (t = this._time) || this._repeat && y !== this._cycle)
                    for (n = this._first; n && n._startTime <= t && !h; )
                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n),
                        n = n._next;
                else
                    for (n = this._last; n && n._startTime >= t && !h; )
                        n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (h = n),
                        n = n._prev;
                h && (this._time = t = h._startTime,
                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== y && !this._locked) {
                var x = this._yoyo && 0 != (1 & y)
                  , T = x === (this._yoyo && 0 != (1 & this._cycle))
                  , b = this._totalTime
                  , w = this._cycle
                  , P = this._rawPrevTime
                  , S = this._time;
                if (this._totalTime = y * f,
                this._cycle < y ? x = !x : this._totalTime += f,
                this._time = p,
                this._rawPrevTime = 0 === f ? g - 1e-4 : g,
                this._cycle = y,
                this._locked = !0,
                p = x ? 0 : f,
                this.render(p, e, 0 === f),
                e || this._gc || this.vars.onRepeat && (this._cycle = w,
                this._locked = !1,
                this._callback("onRepeat")),
                p !== this._time)
                    return;
                if (T && (this._cycle = y,
                this._locked = !0,
                p = x ? f + 1e-4 : -1e-4,
                this.render(p, !0, !1)),
                this._locked = !1,
                this._paused && !v)
                    return;
                this._time = S,
                this._totalTime = b,
                this._cycle = w,
                this._rawPrevTime = P
            }
            if (this._time !== p && this._first || i || a || h) {
                if (this._initted || (this._initted = !0),
                this._active || !this._paused && this._totalTime !== d && 0 < t && (this._active = !0),
                0 === d && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                p <= (u = this._time))
                    for (n = this._first; n && (s = n._next,
                    u === this._time && (!this._paused || v)); )
                        (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(),
                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                        n = s;
                else
                    for (n = this._last; n && (s = n._prev,
                    u === this._time && (!this._paused || v)); ) {
                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                            if (h === n) {
                                for (h = n._prev; h && h.endTime() > this._time; )
                                    h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i),
                                    h = h._prev;
                                h = null,
                                this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = s
                    }
                this._onUpdate && (e || (A.length && O(),
                this._callback("onUpdate"))),
                o && (this._locked || this._gc || (_ === this._startTime || m !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (A.length && O(),
                this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[o] && this._callback(o)))
            } else
                d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }
        ,
        r.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var n, r, s = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
            for (n = 0; n < l; n++)
                (r = o[n]).isActive() && (s[a++] = r);
            return s
        }
        ,
        r.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; e < n; e++)
                if (i[e].time > t)
                    return i[e].name;
            return null
        }
        ,
        r.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; -1 < --i; )
                if (e[i].time < t)
                    return e[i].name;
            return null
        }
        ,
        r.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
                e[i++] = {
                    time: this._labels[t],
                    name: t
                };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        }
        ,
        r.invalidate = function() {
            return this._locked = !1,
            e.prototype.invalidate.call(this)
        }
        ,
        r.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }
        ,
        r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }
        ,
        r.totalDuration = function(t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this),
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
            this._totalDuration)
        }
        ,
        r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            t > this._duration && (t = this._duration),
            this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
            this.totalTime(t, e)) : this._time
        }
        ,
        r.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
            this._uncache(!0)) : this._repeat
        }
        ,
        r.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
            this._uncache(!0)) : this._repeatDelay
        }
        ,
        r.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        r.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }
        ,
        i
    }, !0),
    w = 180 / Math.PI,
    T = [],
    b = [],
    P = [],
    g = {},
    i = _gsScope._gsDefine.globals,
    v = function(t, e, i, n) {
        i === n && (i = n - (n - e) / 1e6),
        t === e && (e = t + (i - t) / 1e6),
        this.a = t,
        this.b = e,
        this.c = i,
        this.d = n,
        this.da = n - t,
        this.ca = i - t,
        this.ba = e - t
    }
    ,
    S = function(t, e, i, n) {
        var r = {
            a: t
        }
          , s = {}
          , o = {}
          , a = {
            c: n
        }
          , l = (t + e) / 2
          , h = (e + i) / 2
          , u = (i + n) / 2
          , c = (l + h) / 2
          , f = (h + u) / 2
          , p = (f - c) / 8;
        return r.b = l + (t - l) / 4,
        s.b = c + p,
        r.c = s.a = (r.b + s.b) / 2,
        s.c = o.a = (c + f) / 2,
        o.b = f - p,
        a.b = u + (n - u) / 4,
        o.c = a.a = (o.b + a.b) / 2,
        [r, s, o, a]
    }
    ,
    y = function(t, e, i, n, r) {
        var s, o, a, l, h, u, c, f, p, d, _, m, g, v = t.length - 1, y = 0, x = t[0].a;
        for (s = 0; s < v; s++)
            o = (h = t[y]).a,
            a = h.d,
            l = t[y + 1].d,
            f = r ? (_ = T[s],
            g = ((m = b[s]) + _) * e * .25 / (n ? .5 : P[s] || .5),
            a - ((u = a - (a - o) * (n ? .5 * e : 0 !== _ ? g / _ : 0)) + (((c = a + (l - a) * (n ? .5 * e : 0 !== m ? g / m : 0)) - u) * (3 * _ / (_ + m) + .5) / 4 || 0))) : a - ((u = a - (a - o) * e * .5) + (c = a + (l - a) * e * .5)) / 2,
            u += f,
            c += f,
            h.c = p = u,
            h.b = 0 !== s ? x : x = h.a + .6 * (h.c - h.a),
            h.da = a - o,
            h.ca = p - o,
            h.ba = x - o,
            i ? (d = S(o, x, p, a),
            t.splice(y, 1, d[0], d[1], d[2], d[3]),
            y += 4) : y++,
            x = c;
        (h = t[y]).b = x,
        h.c = x + .4 * (h.d - x),
        h.da = h.d - h.a,
        h.ca = h.c - h.a,
        h.ba = x - h.a,
        i && (d = S(h.a, x, h.c, h.d),
        t.splice(y, 1, d[0], d[1], d[2], d[3]))
    }
    ,
    x = function(t, e, i, n) {
        var r, s, o, a, l, h, u = [];
        if (n)
            for (s = (t = [n].concat(t)).length; -1 < --s; )
                "string" == typeof (h = t[s][e]) && "=" === h.charAt(1) && (t[s][e] = n[e] + Number(h.charAt(0) + h.substr(2)));
        if ((r = t.length - 2) < 0)
            return u[0] = new v(t[0][e],0,0,t[r < -1 ? 0 : 1][e]),
            u;
        for (s = 0; s < r; s++)
            o = t[s][e],
            a = t[s + 1][e],
            u[s] = new v(o,0,0,a),
            i && (l = t[s + 2][e],
            T[s] = (T[s] || 0) + (a - o) * (a - o),
            b[s] = (b[s] || 0) + (l - a) * (l - a));
        return u[s] = new v(t[s][e],0,0,t[s + 1][e]),
        u
    }
    ,
    p = function(t, e, i, n, r, s) {
        var o, a, l, h, u, c, f, p, d = {}, _ = [], m = s || t[0];
        for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        null == e && (e = 1),
        t[0])
            _.push(a);
        if (1 < t.length) {
            for (p = t[t.length - 1],
            f = !0,
            o = _.length; -1 < --o; )
                if (a = _[o],
                .05 < Math.abs(m[a] - p[a])) {
                    f = !1;
                    break
                }
            f && (t = t.concat(),
            s && t.unshift(s),
            t.push(t[1]),
            s = t[t.length - 3])
        }
        for (T.length = b.length = P.length = 0,
        o = _.length; -1 < --o; )
            a = _[o],
            g[a] = -1 !== r.indexOf("," + a + ","),
            d[a] = x(t, a, g[a], s);
        for (o = T.length; -1 < --o; )
            T[o] = Math.sqrt(T[o]),
            b[o] = Math.sqrt(b[o]);
        if (!n) {
            for (o = _.length; -1 < --o; )
                if (g[a])
                    for (c = (l = d[_[o]]).length - 1,
                    h = 0; h < c; h++)
                        u = l[h + 1].da / b[h] + l[h].da / T[h] || 0,
                        P[h] = (P[h] || 0) + u * u;
            for (o = P.length; -1 < --o; )
                P[o] = Math.sqrt(P[o])
        }
        for (o = _.length,
        h = i ? 4 : 1; -1 < --o; )
            l = d[a = _[o]],
            y(l, e, i, n, g[a]),
            f && (l.splice(0, h),
            l.splice(l.length - h, h));
        return d
    }
    ,
    d = function(t, e, i) {
        for (var n, r, s, o, a, l, h, u, c, f, p, d = 1 / i, _ = t.length; -1 < --_; )
            for (s = (f = t[_]).a,
            o = f.d - s,
            a = f.c - s,
            l = f.b - s,
            n = r = 0,
            u = 1; u <= i; u++)
                n = r - (r = ((h = d * u) * h * o + 3 * (c = 1 - h) * (h * a + c * l)) * h),
                e[p = _ * i + u - 1] = (e[p] || 0) + n * n
    }
    ,
    m = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.7",
        API: 2,
        global: !0,
        init: function(t, e, i) {
            this._target = t,
            e instanceof Array && (e = {
                values: e
            }),
            this._func = {},
            this._mod = {},
            this._props = [],
            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var n, r, s, o, a, l = e.values || [], h = {}, u = l[0], c = e.autoRotate || i.vars.orientToBezier;
            for (n in this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]] : null,
            u)
                this._props.push(n);
            for (s = this._props.length; -1 < --s; )
                n = this._props[s],
                this._overwriteProps.push(n),
                r = this._func[n] = "function" == typeof t[n],
                h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                a || h[n] !== l[0][n] && (a = h);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, i) {
                var n, r, s, o, a, l, h, u, c, f, p, d = {}, _ = "cubic" === (e = e || "soft") ? 3 : 2, m = "soft" === e, g = [];
                if (m && i && (t = [i].concat(t)),
                null == t || t.length < _ + 1)
                    throw "invalid Bezier data";
                for (c in t[0])
                    g.push(c);
                for (l = g.length; -1 < --l; ) {
                    for (d[c = g[l]] = a = [],
                    f = 0,
                    u = t.length,
                    h = 0; h < u; h++)
                        n = null == i ? t[h][c] : "string" == typeof (p = t[h][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p),
                        m && 1 < h && h < u - 1 && (a[f++] = (n + a[f - 2]) / 2),
                        a[f++] = n;
                    for (u = f - _ + 1,
                    h = f = 0; h < u; h += _)
                        n = a[h],
                        r = a[h + 1],
                        s = a[h + 2],
                        o = 2 === _ ? 0 : a[h + 3],
                        a[f++] = p = 3 === _ ? new v(n,r,s,o) : new v(n,(2 * r + n) / 3,(2 * r + s) / 3,s);
                    a.length = f
                }
                return d
            }(l, e.type, h),
            this._segCount = this._beziers[n].length,
            this._timeRes) {
                var f = function(t, e) {
                    var i, n, r, s, o = [], a = [], l = 0, h = 0, u = (e = e >> 0 || 6) - 1, c = [], f = [];
                    for (i in t)
                        d(t[i], o, e);
                    for (r = o.length,
                    n = 0; n < r; n++)
                        l += Math.sqrt(o[n]),
                        f[s = n % e] = l,
                        s === u && (h += l,
                        c[s = n / e >> 0] = f,
                        a[s] = h,
                        l = 0,
                        f = []);
                    return {
                        length: h,
                        lengths: a,
                        segments: c
                    }
                }(this._beziers, this._timeRes);
                this._length = f.length,
                this._lengths = f.lengths,
                this._segments = f.segments,
                this._l1 = this._li = this._s1 = this._si = 0,
                this._l2 = this._lengths[0],
                this._curSeg = this._segments[0],
                this._s2 = this._curSeg[0],
                this._prec = 1 / this._curSeg.length
            }
            if (c = this._autoRotate)
                for (this._initialRotations = [],
                c[0]instanceof Array || (this._autoRotate = c = [c]),
                s = c.length; -1 < --s; ) {
                    for (o = 0; o < 3; o++)
                        n = c[s][o],
                        this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                    n = c[s][2],
                    this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                    this._overwriteProps.push(n)
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0,
            !0
        },
        set: function(t) {
            var e, i, n, r, s, o, a, l, h, u, c = this._segCount, f = this._func, p = this._target, d = t !== this._startRatio;
            if (this._timeRes) {
                if (h = this._lengths,
                u = this._curSeg,
                t *= this._length,
                n = this._li,
                t > this._l2 && n < c - 1) {
                    for (l = c - 1; n < l && (this._l2 = h[++n]) <= t; )
                        ;
                    this._l1 = h[n - 1],
                    this._li = n,
                    this._curSeg = u = this._segments[n],
                    this._s2 = u[this._s1 = this._si = 0]
                } else if (t < this._l1 && 0 < n) {
                    for (; 0 < n && (this._l1 = h[--n]) >= t; )
                        ;
                    0 === n && t < this._l1 ? this._l1 = 0 : n++,
                    this._l2 = h[n],
                    this._li = n,
                    this._curSeg = u = this._segments[n],
                    this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                    this._s2 = u[this._si]
                }
                if (e = n,
                t -= this._l1,
                n = this._si,
                t > this._s2 && n < u.length - 1) {
                    for (l = u.length - 1; n < l && (this._s2 = u[++n]) <= t; )
                        ;
                    this._s1 = u[n - 1],
                    this._si = n
                } else if (t < this._s1 && 0 < n) {
                    for (; 0 < n && (this._s1 = u[--n]) >= t; )
                        ;
                    0 === n && t < this._s1 ? this._s1 = 0 : n++,
                    this._s2 = u[n],
                    this._si = n
                }
                o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else
                o = (t - (e = t < 0 ? 0 : 1 <= t ? c - 1 : c * t >> 0) * (1 / c)) * c;
            for (i = 1 - o,
            n = this._props.length; -1 < --n; )
                r = this._props[n],
                a = (o * o * (s = this._beziers[r][e]).da + 3 * i * (o * s.ca + i * s.ba)) * o + s.a,
                this._mod[r] && (a = this._mod[r](a, p)),
                f[r] ? p[r](a) : p[r] = a;
            if (this._autoRotate) {
                var _, m, g, v, y, x, T, b = this._autoRotate;
                for (n = b.length; -1 < --n; )
                    r = b[n][2],
                    x = b[n][3] || 0,
                    T = !0 === b[n][4] ? 1 : w,
                    s = this._beziers[b[n][0]],
                    _ = this._beziers[b[n][1]],
                    s && _ && (s = s[e],
                    _ = _[e],
                    m = s.a + (s.b - s.a) * o,
                    m += ((v = s.b + (s.c - s.b) * o) - m) * o,
                    v += (s.c + (s.d - s.c) * o - v) * o,
                    g = _.a + (_.b - _.a) * o,
                    g += ((y = _.b + (_.c - _.b) * o) - g) * o,
                    y += (_.c + (_.d - _.c) * o - y) * o,
                    a = d ? Math.atan2(y - g, v - m) * T + x : this._initialRotations[n],
                    this._mod[r] && (a = this._mod[r](a, p)),
                    f[r] ? p[r](a) : p[r] = a)
            }
        }
    }),
    n = m.prototype,
    m.bezierThrough = p,
    m.cubicToQuadratic = S,
    m._autoCSS = !0,
    m.quadraticToCubic = function(t, e, i) {
        return new v(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
    }
    ,
    m._cssRegister = function() {
        var t = i.CSSPlugin;
        if (t) {
            var e = t._internals
              , p = e._parseToProxy
              , d = e._setPluginRatio
              , _ = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function(t, e, i, n, r, s) {
                    e instanceof Array && (e = {
                        values: e
                    }),
                    s = new m;
                    var o, a, l, h = e.values, u = h.length - 1, c = [], f = {};
                    if (u < 0)
                        return r;
                    for (o = 0; o <= u; o++)
                        l = p(t, h[o], n, r, s, u !== o),
                        c[o] = l.end;
                    for (a in e)
                        f[a] = e[a];
                    return f.values = c,
                    (r = new _(t,"bezier",0,0,l.pt,2)).data = l,
                    r.plugin = s,
                    r.setRatio = d,
                    0 === f.autoRotate && (f.autoRotate = !0),
                    !f.autoRotate || f.autoRotate instanceof Array || (o = !0 === f.autoRotate ? 0 : Number(f.autoRotate),
                    f.autoRotate = null != l.end.left ? [["left", "top", "rotation", o, !1]] : null != l.end.x && [["x", "y", "rotation", o, !1]]),
                    f.autoRotate && (n._transform || n._enableTransforms(!1),
                    l.autoRotate = n._target._gsTransform,
                    l.proxy.rotation = l.autoRotate.rotation || 0,
                    n._overwriteProps.push("rotation")),
                    s._onInitTween(l.proxy, f, n._tween),
                    r
                }
            })
        }
    }
    ,
    n._mod = function(t) {
        for (var e, i = this._overwriteProps, n = i.length; -1 < --n; )
            (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
    }
    ,
    n._kill = function(t) {
        var e, i, n = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e],
                delete this._func[e],
                i = n.length; -1 < --i; )
                    n[i] === e && n.splice(i, 1);
        if (n = this._autoRotate)
            for (i = n.length; -1 < --i; )
                t[n[i][2]] && n.splice(i, 1);
        return this._super._kill.call(this, t)
    }
    ,
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(s, X) {
        var d, P, C, _, B = function() {
            s.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = B.prototype.setRatio
        }, h = _gsScope._gsDefine.globals, m = {}, t = B.prototype = new s("css");
        (t.constructor = B).version = "1.19.1",
        B.API = 2,
        B.defaultTransformPerspective = 0,
        B.defaultSkewType = "compensated",
        B.defaultSmoothOrigin = !0,
        t = "px",
        B.suffixMap = {
            top: t,
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: ""
        };
        var A, g, v, Y, y, S, O, D, e, i, k = /(?:\-|\.|\b)(\d|\.|e\-)+/g, R = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, F = /(?:\d|\-|\+|=|#|\.)*/g, E = /opacity *= *([^)]*)/i, T = /opacity:([^;]*)/i, o = /alpha\(opacity *=.+?\)/i, b = /^(rgb|hsl)/, a = /([A-Z])/g, l = /-([a-z])/gi, w = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, c = function(t, e) {
            return e.toUpperCase()
        }, p = /(?:Left|Right|Width)/i, f = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, N = /,(?=[^\)]*(?:\(|$))/gi, L = /[\s,\(]/i, H = Math.PI / 180, V = 180 / Math.PI, z = {}, n = {
            style: {}
        }, I = _gsScope.document || {
            createElement: function() {
                return n
            }
        }, j = function(t, e) {
            return I.createElementNS ? I.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : I.createElement(t)
        }, q = j("div"), W = j("img"), r = B._internals = {
            _specialProps: m
        }, U = (_gsScope.navigator || {}).userAgent || "", $ = (e = U.indexOf("Android"),
        i = j("a"),
        v = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === e || 3 < parseFloat(U.substr(e + 8, 2))),
        y = v && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6,
        Y = -1 !== U.indexOf("Firefox"),
        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (S = parseFloat(RegExp.$1)),
        !!i && (i.style.cssText = "top:1px;opacity:.55;",
        /^0.55/.test(i.style.opacity))), G = function(t) {
            return E.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, Z = function(t) {
            _gsScope.console && console.log(t)
        }, Q = "", K = "", J = function(t, e) {
            var i, n, r = (e = e || q).style;
            if (void 0 !== r[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            n = 5; -1 < --n && void 0 === r[i[n] + t]; )
                ;
            return 0 <= n ? (Q = "-" + (K = 3 === n ? "ms" : i[n]).toLowerCase() + "-",
            K + t) : null
        }, tt = I.defaultView ? I.defaultView.getComputedStyle : function() {}
        , et = B.getStyle = function(t, e, i, n, r) {
            var s;
            return $ || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || tt(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(a, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]),
            null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : G(t)
        }
        , it = r.convertToPixels = function(t, e, i, n, r) {
            if ("px" === n || !n)
                return i;
            if ("auto" === n || !i)
                return 0;
            var s, o, a, l = p.test(e), h = t, u = q.style, c = i < 0, f = 1 === i;
            if (c && (i = -i),
            f && (i *= 100),
            "%" === n && -1 !== e.indexOf("border"))
                s = i / 100 * (l ? t.clientWidth : t.clientHeight);
            else {
                if (u.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;",
                "%" !== n && h.appendChild && "v" !== n.charAt(0) && "rem" !== n)
                    u[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                else {
                    if (o = (h = t.parentNode || I.body)._gsCache,
                    a = X.ticker.frame,
                    o && l && o.time === a)
                        return o.width * i / 100;
                    u[l ? "width" : "height"] = i + n
                }
                h.appendChild(q),
                s = parseFloat(q[l ? "offsetWidth" : "offsetHeight"]),
                h.removeChild(q),
                l && "%" === n && !1 !== B.cacheWidths && ((o = h._gsCache = h._gsCache || {}).time = a,
                o.width = s / i * 100),
                0 !== s || r || (s = it(t, e, i, n, !0))
            }
            return f && (s /= 100),
            c ? -s : s
        }
        , nt = r.calculateOffset = function(t, e, i) {
            if ("absolute" !== et(t, "position", i))
                return 0;
            var n = "left" === e ? "Left" : "Top"
              , r = et(t, "margin" + n, i);
            return t["offset" + n] - (it(t, e, parseFloat(r), r.replace(F, "")) || 0)
        }
        , rt = function(t, e) {
            var i, n, r, s = {};
            if (e = e || tt(t, null))
                if (i = e.length)
                    for (; -1 < --i; )
                        (-1 === (r = e[i]).indexOf("-transform") || Nt === r) && (s[r.replace(l, c)] = e.getPropertyValue(r));
                else
                    for (i in e)
                        (-1 === i.indexOf("Transform") || Mt === i) && (s[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === s[i] && (s[i.replace(l, c)] = e[i]);
            return $ || (s.opacity = G(t)),
            n = $t(t, e, !1),
            s.rotation = n.rotation,
            s.skewX = n.skewX,
            s.scaleX = n.scaleX,
            s.scaleY = n.scaleY,
            s.x = n.x,
            s.y = n.y,
            zt && (s.z = n.z,
            s.rotationX = n.rotationX,
            s.rotationY = n.rotationY,
            s.scaleZ = n.scaleZ),
            s.filters && delete s.filters,
            s
        }, st = function(t, e, i, n, r) {
            var s, o, a, l = {}, h = t.style;
            for (o in i)
                "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(u, "") ? s : 0 : nt(t, o),
                void 0 !== h[o] && (a = new xt(h,o,h[o],a)));
            if (n)
                for (o in n)
                    "className" !== o && (l[o] = n[o]);
            return {
                difs: l,
                firstMPT: a
            }
        }, ot = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, at = ["marginLeft", "marginRight", "marginTop", "marginBottom"], lt = function(t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
                return (i || tt(t))[e] || 0;
            if (t.getCTM && qt(t))
                return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , r = ot[e]
              , s = r.length;
            for (i = i || tt(t, null); -1 < --s; )
                n -= parseFloat(et(t, "padding" + r[s], i, !0)) || 0,
                n -= parseFloat(et(t, "border" + r[s] + "Width", i, !0)) || 0;
            return n
        }, ht = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i, n = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0], s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
            if (3 < n.length && !e) {
                for (n = t.split(", ").join(",").split(","),
                t = [],
                i = 0; i < n.length; i++)
                    t.push(ht(n[i]));
                return t.join(",")
            }
            return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"),
            ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
            t = r + " " + s + (2 < n.length ? " " + n[2] : ""),
            e && (e.oxp = -1 !== r.indexOf("%"),
            e.oyp = -1 !== s.indexOf("%"),
            e.oxr = "=" === r.charAt(1),
            e.oyr = "=" === s.charAt(1),
            e.ox = parseFloat(r.replace(u, "")),
            e.oy = parseFloat(s.replace(u, "")),
            e.v = t),
            e || t
        }, ut = function(t, e) {
            return "function" == typeof t && (t = t(D, O)),
            "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }, ct = function(t, e) {
            return "function" == typeof t && (t = t(D, O)),
            null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }, ft = function(t, e, i, n) {
            var r, s, o, a, l;
            return "function" == typeof t && (t = t(D, O)),
            (a = null == t ? e : "number" == typeof t ? t : (r = 360,
            s = t.split("_"),
            o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : V) - (l ? 0 : e),
            s.length && (n && (n[i] = e + o),
            -1 !== t.indexOf("short") && ((o %= r) !== o % 180 && (o = o < 0 ? o + r : o - r)),
            -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && 0 < o && (o = (o - 3599999999640) % r - (o / r | 0) * r)),
            e + o)) < 1e-6 && -1e-6 < a && (a = 0),
            a
        }, pt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, dt = function(t, e, i) {
            return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, _t = B.parseColor = function(t, e) {
            var i, n, r, s, o, a, l, h, u, c, f;
            if (t)
                if ("number" == typeof t)
                    i = [t >> 16, t >> 8 & 255, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    pt[t])
                        i = pt[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s),
                        i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (i = f = t.match(k),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match(R)
                        } else
                            o = Number(i[0]) % 360 / 360,
                            a = Number(i[1]) / 100,
                            n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a),
                            3 < i.length && (i[3] = Number(t[3])),
                            i[0] = dt(o + 1 / 3, n, r),
                            i[1] = dt(o, n, r),
                            i[2] = dt(o - 1 / 3, n, r);
                    else
                        i = t.match(k) || pt.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    3 < i.length && (i[3] = Number(i[3]))
                }
            else
                i = pt.black;
            return e && !f && (n = i[0] / 255,
            r = i[1] / 255,
            s = i[2] / 255,
            l = ((h = Math.max(n, r, s)) + (u = Math.min(n, r, s))) / 2,
            h === u ? o = a = 0 : (c = h - u,
            a = .5 < l ? c / (2 - h - u) : c / (h + u),
            o = h === n ? (r - s) / c + (r < s ? 6 : 0) : h === r ? (s - n) / c + 2 : (n - r) / c + 4,
            o *= 60),
            i[0] = o + .5 | 0,
            i[1] = 100 * a + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
        , mt = function(t, e) {
            var i, n, r, s = t.match(gt) || [], o = 0, a = s.length ? "" : t;
            for (i = 0; i < s.length; i++)
                n = s[i],
                o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length,
                3 === (n = _t(n, e)).length && n.push(1),
                a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
            return a + t.substr(o)
        }, gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in pt)
            gt += "|" + t + "\\b";
        gt = new RegExp(gt + ")","gi"),
        B.colorStringFilter = function(t) {
            var e, i = t[0] + t[1];
            gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            t[0] = mt(t[0], e),
            t[1] = mt(t[1], e)),
            gt.lastIndex = 0
        }
        ,
        X.defaultStringFilter || (X.defaultStringFilter = B.colorStringFilter);
        var vt = function(t, e, s, o) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var a, l = e ? (t.match(gt) || [""])[0] : "", h = t.split(l).join("").match(x) || [], u = t.substr(0, t.indexOf(h[0])), c = ")" === t.charAt(t.length - 1) ? ")" : "", f = -1 !== t.indexOf(" ") ? " " : ",", p = h.length, d = 0 < p ? h[0].replace(k, "") : "";
            return p ? a = e ? function(t) {
                var e, i, n, r;
                if ("number" == typeof t)
                    t += d;
                else if (o && N.test(t)) {
                    for (r = t.replace(N, "|").split("|"),
                    n = 0; n < r.length; n++)
                        r[n] = a(r[n]);
                    return r.join(",")
                }
                if (e = (t.match(gt) || [l])[0],
                n = (i = t.split(e).join("").match(x) || []).length,
                p > n--)
                    for (; ++n < p; )
                        i[n] = s ? i[(n - 1) / 2 | 0] : h[n];
                return u + i.join(f) + f + e + c + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, i, n;
                if ("number" == typeof t)
                    t += d;
                else if (o && N.test(t)) {
                    for (i = t.replace(N, "|").split("|"),
                    n = 0; n < i.length; n++)
                        i[n] = a(i[n]);
                    return i.join(",")
                }
                if (n = (e = t.match(x) || []).length,
                p > n--)
                    for (; ++n < p; )
                        e[n] = s ? e[(n - 1) / 2 | 0] : h[n];
                return u + e.join(f) + c
            }
            : function(t) {
                return t
            }
        }
          , yt = function(h) {
            return h = h.split(","),
            function(t, e, i, n, r, s, o) {
                var a, l = (e + "").split(" ");
                for (o = {},
                a = 0; a < 4; a++)
                    o[h[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                return n.parse(t, o, r, s)
            }
        }
          , xt = (r._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l; )
                e = a[l.v],
                l.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation),
            1 === t || 0 === t)
                for (l = o.firstMPT,
                s = 1 === t ? "e" : "b"; l; ) {
                    if ((i = l.t).type) {
                        if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1,
                            n = 1; n < i.l; n++)
                                r += i["xn" + n] + i["xs" + (n + 1)];
                            i[s] = r
                        }
                    } else
                        i[s] = i.s + i.xs0;
                    l = l._next
                }
        }
        ,
        function(t, e, i, n, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            n && ((n._prev = this)._next = n)
        }
        )
          , Tt = (r._parseToProxy = function(t, e, i, n, r, s) {
            var o, a, l, h, u, c = n, f = {}, p = {}, d = i._transform, _ = z;
            for (i._transform = null,
            z = e,
            n = u = i.parse(t, e, n, r),
            z = _,
            s && (i._transform = d,
            c && (c._prev = null,
            c._prev && (c._prev._next = null))); n && n !== c; ) {
                if (n.type <= 1 && (p[a = n.p] = n.s + n.c,
                f[a] = n.s,
                s || (h = new xt(n,"s",a,h,n.r),
                n.c = 0),
                1 === n.type))
                    for (o = n.l; 0 < --o; )
                        l = "xn" + o,
                        p[a = n.p + "_" + l] = n.data[l],
                        f[a] = n[l],
                        s || (h = new xt(n,l,a,h,n.rxp[l]));
                n = n._next
            }
            return {
                proxy: f,
                end: p,
                firstMPT: h,
                pt: u
            }
        }
        ,
        r.CSSPropTween = function(t, e, i, n, r, s, o, a, l, h, u) {
            this.t = t,
            this.p = e,
            this.s = i,
            this.c = n,
            this.n = o || e,
            t instanceof Tt || _.push(this.n),
            this.r = a,
            this.type = s || 0,
            l && (this.pr = l,
            d = !0),
            this.b = void 0 === h ? i : h,
            this.e = void 0 === u ? i + n : u,
            r && ((this._next = r)._prev = this)
        }
        )
          , bt = function(t, e, i, n, r, s) {
            var o = new Tt(t,e,i,n - i,r,-1,s);
            return o.b = i,
            o.e = o.xs0 = n,
            o
        }
          , wt = B.parseComplex = function(t, e, i, n, r, s, o, a, l, h) {
            i = i || s || "",
            "function" == typeof n && (n = n(D, O)),
            o = new Tt(t,e,0,0,o,h ? 2 : 1,null,!1,a,i,n),
            n += "",
            r && gt.test(n + i) && (n = [i, n],
            B.colorStringFilter(n),
            i = n[0],
            n = n[1]);
            var u, c, f, p, d, _, m, g, v, y, x, T, b, w = i.split(", ").join(",").split(" "), P = n.split(", ").join(",").split(" "), S = w.length, C = !1 !== A;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (w = w.join(" ").replace(N, ", ").split(" "),
            P = P.join(" ").replace(N, ", ").split(" "),
            S = w.length),
            S !== P.length && (S = (w = (s || "").split(" ")).length),
            o.plugin = l,
            o.setRatio = h,
            u = gt.lastIndex = 0; u < S; u++)
                if (p = w[u],
                d = P[u],
                (g = parseFloat(p)) || 0 === g)
                    o.appendXtra("", g, ut(d, g), d.replace(R, ""), C && -1 !== d.indexOf("px"), !0);
                else if (r && gt.test(p))
                    T = ")" + ((T = d.indexOf(")") + 1) ? d.substr(T) : ""),
                    b = -1 !== d.indexOf("hsl") && $,
                    p = _t(p, b),
                    d = _t(d, b),
                    (v = 6 < p.length + d.length) && !$ && 0 === d[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent",
                    o.e = o.e.split(P[u]).join("transparent")) : ($ || (v = !1),
                    b ? o.appendXtra(v ? "hsla(" : "hsl(", p[0], ut(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], ut(d[1], p[1]), "%,", !1).appendXtra("", p[2], ut(d[2], p[2]), v ? "%," : "%" + T, !1) : o.appendXtra(v ? "rgba(" : "rgb(", p[0], d[0] - p[0], ",", !0, !0).appendXtra("", p[1], d[1] - p[1], ",", !0).appendXtra("", p[2], d[2] - p[2], v ? "," : T, !0),
                    v && (p = p.length < 4 ? 1 : p[3],
                    o.appendXtra("", p, (d.length < 4 ? 1 : d[3]) - p, T, !1))),
                    gt.lastIndex = 0;
                else if (_ = p.match(k)) {
                    if (!(m = d.match(R)) || m.length !== _.length)
                        return o;
                    for (c = f = 0; c < _.length; c++)
                        x = _[c],
                        y = p.indexOf(x, f),
                        o.appendXtra(p.substr(f, y - f), Number(x), ut(m[c], x), "", C && "px" === p.substr(y + x.length, 2), 0 === c),
                        f = y + x.length;
                    o["xs" + o.l] += p.substr(f)
                } else
                    o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + d : d;
            if (-1 !== n.indexOf("=") && o.data) {
                for (T = o.xs0 + o.data.s,
                u = 1; u < o.l; u++)
                    T += o["xs" + u] + o.data["xn" + u];
                o.e = T + o["xs" + u]
            }
            return o.l || (o.type = -1,
            o.xs0 = o.e),
            o.xfirst || o
        }
          , Pt = 9;
        for ((t = Tt.prototype).l = t.pr = 0; 0 < --Pt; )
            t["xn" + Pt] = 0,
            t["xs" + Pt] = "";
        t.xs0 = "",
        t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null,
        t.appendXtra = function(t, e, i, n, r, s) {
            var o = this
              , a = o.l;
            return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "",
            i || 0 === a || o.plugin ? (o.l++,
            o.type = o.setRatio ? 2 : 1,
            o["xs" + o.l] = n || "",
            0 < a ? (o.data["xn" + a] = e + i,
            o.rxp["xn" + a] = r,
            o["xn" + a] = e,
            o.plugin || (o.xfirst = new Tt(o,"xn" + a,e,i,o.xfirst || o,0,o.n,r,o.pr),
            o.xfirst.xs0 = 0)) : (o.data = {
                s: e + i
            },
            o.rxp = {},
            o.s = e,
            o.c = i,
            o.r = r)) : o["xs" + a] += e + (n || ""),
            o
        }
        ;
        var St = function(t, e) {
            e = e || {},
            this.p = e.prefix && J(t) || t,
            m[t] = m[this.p] = this,
            this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , Ct = r._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var n, r = t.split(","), s = e.defaultValue;
            for (i = i || [s],
            n = 0; n < r.length; n++)
                e.prefix = 0 === n && e.prefix,
                e.defaultValue = i[n] || s,
                new St(r[n],e)
        }
          , At = r._registerPluginProp = function(t) {
            if (!m[t]) {
                var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                Ct(t, {
                    parser: function(t, e, i, n, r, s, o) {
                        var a = h.com.greensock.plugins[l];
                        return a ? (a._cssRegister(),
                        m[i].parse(t, e, i, n, r, s, o)) : (Z("Error: " + l + " js file not loaded."),
                        r)
                    }
                })
            }
        }
        ;
        (t = St.prototype).parseComplex = function(t, e, i, n, r, s) {
            var o, a, l, h, u, c, f = this.keyword;
            if (this.multi && (N.test(i) || N.test(e) ? (a = e.replace(N, "|").split("|"),
            l = i.replace(N, "|").split("|")) : f && (a = [e],
            l = [i])),
            l) {
                for (h = l.length > a.length ? l.length : a.length,
                o = 0; o < h; o++)
                    e = a[o] = a[o] || this.dflt,
                    i = l[o] = l[o] || this.dflt,
                    f && ((u = e.indexOf(f)) !== (c = i.indexOf(f)) && (-1 === c ? a[o] = a[o].split(f).join("") : -1 === u && (a[o] += " " + f)));
                e = a.join(", "),
                i = l.join(", ")
            }
            return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
        }
        ,
        t.parse = function(t, e, i, n, r, s, o) {
            return this.parseComplex(t.style, this.format(et(t, this.p, C, !1, this.dflt)), this.format(e), r, s)
        }
        ,
        B.registerSpecialProp = function(t, l, h) {
            Ct(t, {
                parser: function(t, e, i, n, r, s, o) {
                    var a = new Tt(t,i,0,0,r,2,i,!1,h);
                    return a.plugin = s,
                    a.setRatio = l(t, e, n._tween, i),
                    a
                },
                priority: h
            })
        }
        ,
        B.useSVGTransformAttr = !0;
        var Ot, Dt, kt, Rt, Ft, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Mt = J("transform"), Nt = Q + "transform", Lt = J("transformOrigin"), zt = null !== J("perspective"), It = r.Transform = function() {
            this.perspective = parseFloat(B.defaultTransformPerspective) || 0,
            this.force3D = !(!1 === B.defaultForce3D || !zt) && (B.defaultForce3D || "auto")
        }
        , jt = _gsScope.SVGElement, Xt = function(t, e, i) {
            var n, r = I.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g;
            for (n in i)
                r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(r),
            r
        }, Bt = I.documentElement || {}, Yt = (Ft = S || /Android/i.test(U) && !_gsScope.chrome,
        I.createElementNS && !Ft && (Dt = Xt("svg", Bt),
        Rt = (kt = Xt("rect", Dt, {
            width: 100,
            height: 50,
            x: 100
        })).getBoundingClientRect().width,
        kt.style[Lt] = "50% 50%",
        kt.style[Mt] = "scaleX(0.5)",
        Ft = Rt === kt.getBoundingClientRect().width && !(Y && zt),
        Bt.removeChild(Dt)),
        Ft), Ht = function(t, e, i, n, r, s) {
            var o, a, l, h, u, c, f, p, d, _, m, g, v, y, x = t._gsTransform, T = Ut(t, !0);
            x && (v = x.xOrigin,
            y = x.yOrigin),
            (!n || (o = n.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                width: 0,
                height: 0
            }),
            o = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]),
            i.xOrigin = h = parseFloat(o[0]),
            i.yOrigin = u = parseFloat(o[1]),
            n && T !== Wt && (c = T[0],
            f = T[1],
            p = T[2],
            d = T[3],
            _ = T[4],
            m = T[5],
            (g = c * d - f * p) && (a = h * (d / g) + u * (-p / g) + (p * m - d * _) / g,
            l = h * (-f / g) + u * (c / g) - (c * m - f * _) / g,
            h = i.xOrigin = o[0] = a,
            u = i.yOrigin = o[1] = l)),
            x && (s && (i.xOffset = x.xOffset,
            i.yOffset = x.yOffset,
            x = i),
            r || !1 !== r && !1 !== B.defaultSmoothOrigin ? (a = h - v,
            l = u - y,
            x.xOffset += a * T[0] + l * T[2] - a,
            x.yOffset += a * T[1] + l * T[3] - l) : x.xOffset = x.yOffset = 0),
            s || t.setAttribute("data-svg-origin", o.join(" "))
        }, Vt = function(t) {
            var e, i = j("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, r = this.nextSibling, s = this.style.cssText;
            if (Bt.appendChild(i),
            i.appendChild(this),
            this.style.display = "block",
            t)
                try {
                    e = this.getBBox(),
                    this._originalGetBBox = this.getBBox,
                    this.getBBox = Vt
                } catch (t) {}
            else
                this._originalGetBBox && (e = this._originalGetBBox());
            return r ? n.insertBefore(this, r) : n.appendChild(this),
            Bt.removeChild(i),
            this.style.cssText = s,
            e
        }, qt = function(t) {
            return !(!(jt && t.getCTM && function(e) {
                try {
                    return e.getBBox()
                } catch (t) {
                    return Vt.call(e, !0)
                }
            }(t)) || t.parentNode && !t.ownerSVGElement)
        }, Wt = [1, 0, 0, 1, 0, 0], Ut = function(t, e) {
            var i, n, r, s, o, a, l = t._gsTransform || new It, h = t.style;
            if (Mt ? n = et(t, Nt, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(f)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
            (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n) && Mt && ((a = "none" === tt(t).display) || !t.parentNode) && (a && (s = h.display,
            h.display = "block"),
            t.parentNode || (o = 1,
            Bt.appendChild(t)),
            i = !(n = et(t, Nt, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
            s ? h.display = s : a && Kt(h, "display"),
            o && Bt.removeChild(t)),
            (l.svg || t.getCTM && qt(t)) && (i && -1 !== (h[Mt] + "").indexOf("matrix") && (n = h[Mt],
            i = 0),
            r = t.getAttribute("transform"),
            i && r && (-1 !== r.indexOf("matrix") ? (n = r,
            i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            i = 0))),
            i)
                return Wt;
            for (r = (n || "").match(k) || [],
            Pt = r.length; -1 < --Pt; )
                s = Number(r[Pt]),
                r[Pt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
            return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
        }, $t = r.getTransform = function(t, e, i, n) {
            if (t._gsTransform && i && !n)
                return t._gsTransform;
            var r, s, o, a, l, h, u = i && t._gsTransform || new It, c = u.scaleX < 0, f = zt && (parseFloat(et(t, Lt, e, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0, p = parseFloat(B.defaultTransformPerspective) || 0;
            if (u.svg = !(!t.getCTM || !qt(t)),
            u.svg && (Ht(t, et(t, Lt, e, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")),
            Ot = B.useSVGTransformAttr || Yt),
            (r = Ut(t)) !== Wt) {
                if (16 === r.length) {
                    var d, _, m, g, v, y = r[0], x = r[1], T = r[2], b = r[3], w = r[4], P = r[5], S = r[6], C = r[7], A = r[8], O = r[9], D = r[10], k = r[12], R = r[13], F = r[14], E = r[11], M = Math.atan2(S, D);
                    u.zOrigin && (k = A * (F = -u.zOrigin) - r[12],
                    R = O * F - r[13],
                    F = D * F + u.zOrigin - r[14]),
                    u.rotationX = M * V,
                    M && (d = w * (g = Math.cos(-M)) + A * (v = Math.sin(-M)),
                    _ = P * g + O * v,
                    m = S * g + D * v,
                    A = w * -v + A * g,
                    O = P * -v + O * g,
                    D = S * -v + D * g,
                    E = C * -v + E * g,
                    w = d,
                    P = _,
                    S = m),
                    M = Math.atan2(-T, D),
                    u.rotationY = M * V,
                    M && (_ = x * (g = Math.cos(-M)) - O * (v = Math.sin(-M)),
                    m = T * g - D * v,
                    O = x * v + O * g,
                    D = T * v + D * g,
                    E = b * v + E * g,
                    y = d = y * g - A * v,
                    x = _,
                    T = m),
                    M = Math.atan2(x, y),
                    u.rotation = M * V,
                    M && (y = y * (g = Math.cos(-M)) + w * (v = Math.sin(-M)),
                    _ = x * g + P * v,
                    P = x * -v + P * g,
                    S = T * -v + S * g,
                    x = _),
                    u.rotationX && 359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) && (u.rotationX = u.rotation = 0,
                    u.rotationY = 180 - u.rotationY),
                    u.scaleX = (1e5 * Math.sqrt(y * y + x * x) + .5 | 0) / 1e5,
                    u.scaleY = (1e5 * Math.sqrt(P * P + O * O) + .5 | 0) / 1e5,
                    u.scaleZ = (1e5 * Math.sqrt(S * S + D * D) + .5 | 0) / 1e5,
                    u.rotationX || u.rotationY ? u.skewX = 0 : (u.skewX = w || P ? Math.atan2(w, P) * V + u.rotation : u.skewX || 0,
                    90 < Math.abs(u.skewX) && Math.abs(u.skewX) < 270 && (c ? (u.scaleX *= -1,
                    u.skewX += u.rotation <= 0 ? 180 : -180,
                    u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1,
                    u.skewX += u.skewX <= 0 ? 180 : -180))),
                    u.perspective = E ? 1 / (E < 0 ? -E : E) : 0,
                    u.x = k,
                    u.y = R,
                    u.z = F,
                    u.svg && (u.x -= u.xOrigin - (u.xOrigin * y - u.yOrigin * w),
                    u.y -= u.yOrigin - (u.yOrigin * x - u.xOrigin * P))
                } else if (!zt || n || !r.length || u.x !== r[4] || u.y !== r[5] || !u.rotationX && !u.rotationY) {
                    var N = 6 <= r.length
                      , L = N ? r[0] : 1
                      , z = r[1] || 0
                      , I = r[2] || 0
                      , j = N ? r[3] : 1;
                    u.x = r[4] || 0,
                    u.y = r[5] || 0,
                    o = Math.sqrt(L * L + z * z),
                    a = Math.sqrt(j * j + I * I),
                    l = L || z ? Math.atan2(z, L) * V : u.rotation || 0,
                    h = I || j ? Math.atan2(I, j) * V + l : u.skewX || 0,
                    90 < Math.abs(h) && Math.abs(h) < 270 && (c ? (o *= -1,
                    h += l <= 0 ? 180 : -180,
                    l += l <= 0 ? 180 : -180) : (a *= -1,
                    h += h <= 0 ? 180 : -180)),
                    u.scaleX = o,
                    u.scaleY = a,
                    u.rotation = l,
                    u.skewX = h,
                    zt && (u.rotationX = u.rotationY = u.z = 0,
                    u.perspective = p,
                    u.scaleZ = 1),
                    u.svg && (u.x -= u.xOrigin - (u.xOrigin * L + u.yOrigin * I),
                    u.y -= u.yOrigin - (u.xOrigin * z + u.yOrigin * j))
                }
                for (s in u.zOrigin = f,
                u)
                    u[s] < 2e-5 && -2e-5 < u[s] && (u[s] = 0)
            }
            return i && ((t._gsTransform = u).svg && (Ot && t.style[Mt] ? X.delayedCall(.001, function() {
                Kt(t.style, Mt)
            }) : !Ot && t.getAttribute("transform") && X.delayedCall(.001, function() {
                t.removeAttribute("transform")
            }))),
            u
        }
        , Gt = function(t) {
            var e, i, n = this.data, r = -n.rotation * H, s = r + n.skewX * H, o = 1e5, a = (Math.cos(r) * n.scaleX * o | 0) / o, l = (Math.sin(r) * n.scaleX * o | 0) / o, h = (Math.sin(s) * -n.scaleY * o | 0) / o, u = (Math.cos(s) * n.scaleY * o | 0) / o, c = this.t.style, f = this.t.currentStyle;
            if (f) {
                i = l,
                l = -h,
                h = -i,
                e = f.filter,
                c.filter = "";
                var p, d, _ = this.t.offsetWidth, m = this.t.offsetHeight, g = "absolute" !== f.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u, y = n.x + _ * n.xPercent / 100, x = n.y + m * n.yPercent / 100;
                if (null != n.ox && (y += (p = (n.oxp ? _ * n.ox * .01 : n.ox) - _ / 2) - (p * a + (d = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2) * l),
                x += d - (p * h + d * u)),
                g ? v += ", Dx=" + ((p = _ / 2) - (p * a + (d = m / 2) * l) + y) + ", Dy=" + (d - (p * h + d * u) + x) + ")" : v += ", sizingMethod='auto expand')",
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(M, v) : c.filter = v + " " + e,
                (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === u && (g && -1 === v.indexOf("Dx=0, Dy=0") || E.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")),
                !g) {
                    var T, b, w, P = S < 8 ? 1 : -1;
                    for (p = n.ieOffsetX || 0,
                    d = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round((_ - ((a < 0 ? -a : a) * _ + (l < 0 ? -l : l) * m)) / 2 + y),
                    n.ieOffsetY = Math.round((m - ((u < 0 ? -u : u) * m + (h < 0 ? -h : h) * _)) / 2 + x),
                    Pt = 0; Pt < 4; Pt++)
                        w = (i = -1 !== (T = f[b = at[Pt]]).indexOf("px") ? parseFloat(T) : it(this.t, b, parseFloat(T), T.replace(F, "")) || 0) !== n[b] ? Pt < 2 ? -n.ieOffsetX : -n.ieOffsetY : Pt < 2 ? p - n.ieOffsetX : d - n.ieOffsetY,
                        c[b] = (n[b] = Math.round(i - w * (0 === Pt || 2 === Pt ? 1 : P))) + "px"
                }
            }
        }, Zt = r.set3DTransformRatio = r.setTransformRatio = function(t) {
            var e, i, n, r, s, o, a, l, h, u, c, f, p, d, _, m, g, v, y, x, T, b, w, P = this.data, S = this.t.style, C = P.rotation, A = P.rotationX, O = P.rotationY, D = P.scaleX, k = P.scaleY, R = P.scaleZ, F = P.x, E = P.y, M = P.z, N = P.svg, L = P.perspective, z = P.force3D, I = P.skewY, j = P.skewX;
            if (I && (j += I,
            C += I),
            !((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || M || L || O || A || 1 !== R) || Ot && N || !zt)
                C || j || N ? (C *= H,
                b = j * H,
                w = 1e5,
                i = Math.cos(C) * D,
                s = Math.sin(C) * D,
                n = Math.sin(C - b) * -k,
                o = Math.cos(C - b) * k,
                b && "simple" === P.skewType && (e = Math.tan(b - I * H),
                n *= e = Math.sqrt(1 + e * e),
                o *= e,
                I && (e = Math.tan(I * H),
                i *= e = Math.sqrt(1 + e * e),
                s *= e)),
                N && (F += P.xOrigin - (P.xOrigin * i + P.yOrigin * n) + P.xOffset,
                E += P.yOrigin - (P.xOrigin * s + P.yOrigin * o) + P.yOffset,
                Ot && (P.xPercent || P.yPercent) && (_ = this.t.getBBox(),
                F += .01 * P.xPercent * _.width,
                E += .01 * P.yPercent * _.height),
                F < (_ = 1e-6) && -_ < F && (F = 0),
                E < _ && -_ < E && (E = 0)),
                y = (i * w | 0) / w + "," + (s * w | 0) / w + "," + (n * w | 0) / w + "," + (o * w | 0) / w + "," + F + "," + E + ")",
                N && Ot ? this.t.setAttribute("transform", "matrix(" + y) : S[Mt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + y) : S[Mt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + D + ",0,0," + k + "," + F + "," + E + ")";
            else {
                if (Y && (D < (_ = 1e-4) && -_ < D && (D = R = 2e-5),
                k < _ && -_ < k && (k = R = 2e-5),
                !L || P.z || P.rotationX || P.rotationY || (L = 0)),
                C || j)
                    C *= H,
                    m = i = Math.cos(C),
                    g = s = Math.sin(C),
                    j && (C -= j * H,
                    m = Math.cos(C),
                    g = Math.sin(C),
                    "simple" === P.skewType && (e = Math.tan((j - I) * H),
                    m *= e = Math.sqrt(1 + e * e),
                    g *= e,
                    P.skewY && (e = Math.tan(I * H),
                    i *= e = Math.sqrt(1 + e * e),
                    s *= e))),
                    n = -g,
                    o = m;
                else {
                    if (!(O || A || 1 !== R || L || N))
                        return void (S[Mt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + F + "px," + E + "px," + M + "px)" + (1 !== D || 1 !== k ? " scale(" + D + "," + k + ")" : ""));
                    i = o = 1,
                    n = s = 0
                }
                u = 1,
                r = a = l = h = c = f = 0,
                p = L ? -1 / L : 0,
                d = P.zOrigin,
                _ = 1e-6,
                x = ",",
                T = "0",
                (C = O * H) && (m = Math.cos(C),
                c = p * (l = -(g = Math.sin(C))),
                r = i * g,
                a = s * g,
                p *= u = m,
                i *= m,
                s *= m),
                (C = A * H) && (e = n * (m = Math.cos(C)) + r * (g = Math.sin(C)),
                v = o * m + a * g,
                h = u * g,
                f = p * g,
                r = n * -g + r * m,
                a = o * -g + a * m,
                u *= m,
                p *= m,
                n = e,
                o = v),
                1 !== R && (r *= R,
                a *= R,
                u *= R,
                p *= R),
                1 !== k && (n *= k,
                o *= k,
                h *= k,
                f *= k),
                1 !== D && (i *= D,
                s *= D,
                l *= D,
                c *= D),
                (d || N) && (d && (F += r * -d,
                E += a * -d,
                M += u * -d + d),
                N && (F += P.xOrigin - (P.xOrigin * i + P.yOrigin * n) + P.xOffset,
                E += P.yOrigin - (P.xOrigin * s + P.yOrigin * o) + P.yOffset),
                F < _ && -_ < F && (F = T),
                E < _ && -_ < E && (E = T),
                M < _ && -_ < M && (M = 0)),
                y = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(",
                y += (i < _ && -_ < i ? T : i) + x + (s < _ && -_ < s ? T : s) + x + (l < _ && -_ < l ? T : l),
                y += x + (c < _ && -_ < c ? T : c) + x + (n < _ && -_ < n ? T : n) + x + (o < _ && -_ < o ? T : o),
                A || O || 1 !== R ? (y += x + (h < _ && -_ < h ? T : h) + x + (f < _ && -_ < f ? T : f) + x + (r < _ && -_ < r ? T : r),
                y += x + (a < _ && -_ < a ? T : a) + x + (u < _ && -_ < u ? T : u) + x + (p < _ && -_ < p ? T : p) + x) : y += ",0,0,0,0,1,0,",
                y += F + x + E + x + M + x + (L ? 1 + -M / L : 1) + ")",
                S[Mt] = y
            }
        }
        ;
        (t = It.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0,
        t.scaleX = t.scaleY = t.scaleZ = 1,
        Ct("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, n, r, s, o) {
                if (n._lastParsedTransform === o)
                    return r;
                var a, l = (n._lastParsedTransform = o).scale && "function" == typeof o.scale ? o.scale : 0;
                "function" == typeof o[i] && (a = o[i],
                o[i] = e),
                l && (o.scale = l(D, t));
                var h, u, c, f, p, d, _, m, g, v = t._gsTransform, y = t.style, x = Et.length, T = o, b = {}, w = "transformOrigin", P = $t(t, C, !0, T.parseTransform), S = T.transform && ("function" == typeof T.transform ? T.transform(D, O) : T.transform);
                if (n._transform = P,
                S && "string" == typeof S && Mt)
                    (u = q.style)[Mt] = S,
                    u.display = "block",
                    u.position = "absolute",
                    I.body.appendChild(q),
                    h = $t(q, null, !1),
                    P.svg && (d = P.xOrigin,
                    _ = P.yOrigin,
                    h.x -= P.xOffset,
                    h.y -= P.yOffset,
                    (T.transformOrigin || T.svgOrigin) && (S = {},
                    Ht(t, ht(T.transformOrigin), S, T.svgOrigin, T.smoothOrigin, !0),
                    d = S.xOrigin,
                    _ = S.yOrigin,
                    h.x -= S.xOffset - P.xOffset,
                    h.y -= S.yOffset - P.yOffset),
                    (d || _) && (m = Ut(q, !0),
                    h.x -= d - (d * m[0] + _ * m[2]),
                    h.y -= _ - (d * m[1] + _ * m[3]))),
                    I.body.removeChild(q),
                    h.perspective || (h.perspective = P.perspective),
                    null != T.xPercent && (h.xPercent = ct(T.xPercent, P.xPercent)),
                    null != T.yPercent && (h.yPercent = ct(T.yPercent, P.yPercent));
                else if ("object" == typeof T) {
                    if (h = {
                        scaleX: ct(null != T.scaleX ? T.scaleX : T.scale, P.scaleX),
                        scaleY: ct(null != T.scaleY ? T.scaleY : T.scale, P.scaleY),
                        scaleZ: ct(T.scaleZ, P.scaleZ),
                        x: ct(T.x, P.x),
                        y: ct(T.y, P.y),
                        z: ct(T.z, P.z),
                        xPercent: ct(T.xPercent, P.xPercent),
                        yPercent: ct(T.yPercent, P.yPercent),
                        perspective: ct(T.transformPerspective, P.perspective)
                    },
                    null != (p = T.directionalRotation))
                        if ("object" == typeof p)
                            for (u in p)
                                T[u] = p[u];
                        else
                            T.rotation = p;
                    "string" == typeof T.x && -1 !== T.x.indexOf("%") && (h.x = 0,
                    h.xPercent = ct(T.x, P.xPercent)),
                    "string" == typeof T.y && -1 !== T.y.indexOf("%") && (h.y = 0,
                    h.yPercent = ct(T.y, P.yPercent)),
                    h.rotation = ft("rotation"in T ? T.rotation : "shortRotation"in T ? T.shortRotation + "_short" : "rotationZ"in T ? T.rotationZ : P.rotation, P.rotation, "rotation", b),
                    zt && (h.rotationX = ft("rotationX"in T ? T.rotationX : "shortRotationX"in T ? T.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", b),
                    h.rotationY = ft("rotationY"in T ? T.rotationY : "shortRotationY"in T ? T.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", b)),
                    h.skewX = ft(T.skewX, P.skewX),
                    h.skewY = ft(T.skewY, P.skewY)
                }
                for (zt && null != T.force3D && (P.force3D = T.force3D,
                f = !0),
                P.skewType = T.skewType || P.skewType || B.defaultSkewType,
                (c = P.force3D || P.z || P.rotationX || P.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == T.scale || (h.scaleZ = 1); -1 < --x; )
                    (1e-6 < (S = h[g = Et[x]] - P[g]) || S < -1e-6 || null != T[g] || null != z[g]) && (f = !0,
                    r = new Tt(P,g,P[g],S,r),
                    g in b && (r.e = b[g]),
                    r.xs0 = 0,
                    r.plugin = s,
                    n._overwriteProps.push(r.n));
                return S = T.transformOrigin,
                P.svg && (S || T.svgOrigin) && (d = P.xOffset,
                _ = P.yOffset,
                Ht(t, ht(S), h, T.svgOrigin, T.smoothOrigin),
                r = bt(P, "xOrigin", (v ? P : h).xOrigin, h.xOrigin, r, w),
                r = bt(P, "yOrigin", (v ? P : h).yOrigin, h.yOrigin, r, w),
                (d !== P.xOffset || _ !== P.yOffset) && (r = bt(P, "xOffset", v ? d : P.xOffset, P.xOffset, r, w),
                r = bt(P, "yOffset", v ? _ : P.yOffset, P.yOffset, r, w)),
                S = "0px 0px"),
                (S || zt && c && P.zOrigin) && (Mt ? (f = !0,
                g = Lt,
                S = (S || et(t, g, C, !1, "50% 50%")) + "",
                (r = new Tt(y,g,0,0,r,-1,w)).b = y[g],
                r.plugin = s,
                r.xs0 = r.e = zt ? (u = P.zOrigin,
                S = S.split(" "),
                P.zOrigin = (2 < S.length && (0 === u || "0px" !== S[2]) ? parseFloat(S[2]) : u) || 0,
                r.xs0 = r.e = S[0] + " " + (S[1] || "50%") + " 0px",
                (r = new Tt(P,"zOrigin",0,0,r,-1,r.n)).b = u,
                P.zOrigin) : S) : ht(S + "", P)),
                f && (n._transformType = P.svg && Ot || !c && 3 !== this._transformType ? 2 : 3),
                a && (o[i] = a),
                l && (o.scale = l),
                r
            },
            prefix: !0
        }),
        Ct("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        Ct("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, r, s) {
                e = this.format(e);
                var o, a, l, h, u, c, f, p, d, _, m, g, v, y, x, T, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], w = t.style;
                for (d = parseFloat(t.offsetWidth),
                _ = parseFloat(t.offsetHeight),
                o = e.split(" "),
                a = 0; a < b.length; a++)
                    this.p.indexOf("border") && (b[a] = J(b[a])),
                    -1 !== (u = h = et(t, b[a], C, !1, "0px")).indexOf(" ") && (u = (h = u.split(" "))[0],
                    h = h[1]),
                    c = l = o[a],
                    f = parseFloat(u),
                    g = u.substr((f + "").length),
                    "" === (m = (v = "=" === c.charAt(1)) ? (p = parseInt(c.charAt(0) + "1", 10),
                    c = c.substr(2),
                    p *= parseFloat(c),
                    c.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(c),
                    c.substr((p + "").length))) && (m = P[i] || g),
                    m !== g && (y = it(t, "borderLeft", f, g),
                    x = it(t, "borderTop", f, g),
                    h = "%" === m ? (u = y / d * 100 + "%",
                    x / _ * 100 + "%") : "em" === m ? (u = y / (T = it(t, "borderLeft", 1, "em")) + "em",
                    x / T + "em") : (u = y + "px",
                    x + "px"),
                    v && (c = parseFloat(u) + p + m,
                    l = parseFloat(h) + p + m)),
                    r = wt(w, b[a], u + " " + h, c + " " + l, !1, "0px", r);
                return r
            },
            prefix: !0,
            formatter: vt("0px 0px 0px 0px", !1, !0)
        }),
        Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, r, s) {
                return wt(t.style, i, this.format(et(t, i, C, !1, "0px 0px")), this.format(e), !1, "0px", r)
            },
            prefix: !0,
            formatter: vt("0px 0px", !1, !0)
        }),
        Ct("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, r, s) {
                var o, a, l, h, u, c, f = "background-position", p = C || tt(t, null), d = this.format((p ? S ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), _ = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && ((c = et(t, "backgroundImage").replace(w, "")) && "none" !== c)) {
                    for (o = d.split(" "),
                    a = _.split(" "),
                    W.setAttribute("src", c),
                    l = 2; -1 < --l; )
                        (h = -1 !== (d = o[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - W.width : t.offsetHeight - W.height,
                        o[l] = h ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, _, r, s)
            },
            formatter: ht
        }),
        Ct("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return ht(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
            }
        }),
        Ct("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        Ct("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        Ct("transformStyle", {
            prefix: !0
        }),
        Ct("backfaceVisibility", {
            prefix: !0
        }),
        Ct("userSelect", {
            prefix: !0
        }),
        Ct("margin", {
            parser: yt("marginTop,marginRight,marginBottom,marginLeft")
        }),
        Ct("padding", {
            parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        Ct("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, r, s) {
                var o, a, l;
                return e = S < 9 ? (a = t.currentStyle,
                l = S < 8 ? " " : ",",
                o = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")",
                this.format(e).split(",").join(l)) : (o = this.format(et(t, this.p, C, !1, this.dflt)),
                this.format(e)),
                this.parseComplex(t.style, o, e, r, s)
            }
        }),
        Ct("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        Ct("autoRound,strictUnits", {
            parser: function(t, e, i, n, r) {
                return r
            }
        }),
        Ct("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, r, s) {
                var o = et(t, "borderTopWidth", C, !1, "0px")
                  , a = this.format(e).split(" ")
                  , l = a[0].replace(F, "");
                return "px" !== l && (o = parseFloat(o) / it(t, "borderTopWidth", 1, l) + l),
                this.parseComplex(t.style, this.format(o + " " + et(t, "borderTopStyle", C, !1, "solid") + " " + et(t, "borderTopColor", C, !1, "#000")), a.join(" "), r, s)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
            }
        }),
        Ct("borderWidth", {
            parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        Ct("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, r, s) {
                var o = t.style
                  , a = "cssFloat"in o ? "cssFloat" : "styleFloat";
                return new Tt(o,a,0,0,r,-1,i,!1,0,o[a],e)
            }
        });
        var Qt = function(t) {
            var e, i = this.t, n = i.filter || et(this.data, "filter") || "", r = this.s + this.c * t | 0;
            100 === r && (e = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"),
            !et(this.data, "filter")) : (i.filter = n.replace(o, ""),
            !0)),
            e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
            -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(E, "opacity=" + r))
        };
        Ct("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, r, s) {
                var o = parseFloat(et(t, "opacity", C, !1, "1"))
                  , a = t.style
                  , l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                l && 1 === o && "hidden" === et(t, "visibility", C) && 0 !== e && (o = 0),
                $ ? r = new Tt(a,"opacity",o,e - o,r) : ((r = new Tt(a,"opacity",100 * o,100 * (e - o),r)).xn1 = l ? 1 : 0,
                a.zoom = 1,
                r.type = 2,
                r.b = "alpha(opacity=" + r.s + ")",
                r.e = "alpha(opacity=" + (r.s + r.c) + ")",
                r.data = t,
                r.plugin = s,
                r.setRatio = Qt),
                l && ((r = new Tt(a,"visibility",0,0,r,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                n._overwriteProps.push(r.n),
                n._overwriteProps.push(i)),
                r
            }
        });
        var Kt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            t.removeProperty(e.replace(a, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , Jt = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Kt(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        Ct("className", {
            parser: function(t, e, i, n, r, s, o) {
                var a, l, h, u, c, f = t.getAttribute("class") || "", p = t.style.cssText;
                if ((r = n._classNamePT = new Tt(t,i,0,0,r,2)).setRatio = Jt,
                r.pr = -11,
                d = !0,
                r.b = f,
                l = rt(t, C),
                h = t._gsClassPT) {
                    for (u = {},
                    c = h.data; c; )
                        u[c.p] = 1,
                        c = c._next;
                    h.setRatio(1)
                }
                return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", r.e),
                a = st(t, l, rt(t), o, u),
                t.setAttribute("class", f),
                r.data = a.firstMPT,
                t.style.cssText = p,
                r.xfirst = n.parse(t, a.difs, r, s)
            }
        });
        var te = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, s, o = this.t.style, a = m.transform.parse;
                if ("all" === this.e)
                    r = !(o.cssText = "");
                else
                    for (n = (e = this.e.split(" ").join("").split(",")).length; -1 < --n; )
                        i = e[n],
                        m[i] && (m[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Lt : m[i].p),
                        Kt(o, i);
                r && (Kt(o, Mt),
                (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
                delete this.t._gsTransform))
            }
        };
        for (Ct("clearProps", {
            parser: function(t, e, i, n, r) {
                return (r = new Tt(t,i,0,0,r,2)).setRatio = te,
                r.e = e,
                r.pr = -10,
                r.data = n._tween,
                d = !0,
                r
            }
        }),
        t = "bezier,throwProps,physicsProps,physics2D".split(","),
        Pt = t.length; Pt--; )
            At(t[Pt]);
        (t = B.prototype)._firstPT = t._lastParsedTransform = t._transform = null,
        t._onInitTween = function(t, e, i, n) {
            if (!t.nodeType)
                return !1;
            this._target = O = t,
            this._tween = i,
            this._vars = e,
            D = n,
            A = e.autoRound,
            d = !1,
            P = e.suffixMap || B.suffixMap,
            C = tt(t, ""),
            _ = this._overwriteProps;
            var r, s, o, a, l, h, u, c, f, p = t.style;
            if (g && "" === p.zIndex && (("auto" === (r = et(t, "zIndex", C)) || "" === r) && this._addLazySet(p, "zIndex", 0)),
            "string" == typeof e && (a = p.cssText,
            r = rt(t, C),
            p.cssText = a + ";" + e,
            r = st(t, r, rt(t)).difs,
            !$ && T.test(e) && (r.opacity = parseFloat(RegExp.$1)),
            e = r,
            p.cssText = a),
            e.className ? this._firstPT = s = m.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = s = this.parse(t, e, null),
            this._transformType) {
                for (f = 3 === this._transformType,
                Mt ? v && (g = !0,
                "" === p.zIndex && (("auto" === (u = et(t, "zIndex", C)) || "" === u) && this._addLazySet(p, "zIndex", 0)),
                y && this._addLazySet(p, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (f ? "visible" : "hidden"))) : p.zoom = 1,
                o = s; o && o._next; )
                    o = o._next;
                c = new Tt(t,"transform",0,0,null,2),
                this._linkCSSP(c, null, o),
                c.setRatio = Mt ? Zt : Gt,
                c.data = this._transform || $t(t, C, !0),
                c.tween = i,
                c.pr = -1,
                _.pop()
            }
            if (d) {
                for (; s; ) {
                    for (h = s._next,
                    o = a; o && o.pr > s.pr; )
                        o = o._next;
                    (s._prev = o ? o._prev : l) ? s._prev._next = s : a = s,
                    (s._next = o) ? o._prev = s : l = s,
                    s = h
                }
                this._firstPT = a
            }
            return !0
        }
        ,
        t.parse = function(t, e, i, n) {
            var r, s, o, a, l, h, u, c, f, p, d = t.style;
            for (r in e)
                "function" == typeof (h = e[r]) && (h = h(D, O)),
                (s = m[r]) ? i = s.parse(t, h, r, this, i, n, e) : (l = et(t, r, C) + "",
                f = "string" == typeof h,
                "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || f && b.test(h) ? (f || (h = (3 < (h = _t(h)).length ? "rgba(" : "rgb(") + h.join(",") + ")"),
                i = wt(d, r, l, h, !0, "transparent", i, 0, n)) : f && L.test(h) ? i = wt(d, r, l, h, !0, null, i, 0, n) : (u = (o = parseFloat(l)) || 0 === o ? l.substr((o + "").length) : "",
                ("" === l || "auto" === l) && (u = "width" === r || "height" === r ? (o = lt(t, r, C),
                "px") : "left" === r || "top" === r ? (o = nt(t, r, C),
                "px") : (o = "opacity" !== r ? 0 : 1,
                "")),
                "" === (c = (p = f && "=" === h.charAt(1)) ? (a = parseInt(h.charAt(0) + "1", 10),
                h = h.substr(2),
                a *= parseFloat(h),
                h.replace(F, "")) : (a = parseFloat(h),
                f ? h.replace(F, "") : "")) && (c = r in P ? P[r] : u),
                h = a || 0 === a ? (p ? a + o : a) + c : e[r],
                u !== c && "" !== c && (a || 0 === a) && o && (o = it(t, r, o, u),
                "%" === c ? (o /= it(t, r, 100, "%") / 100,
                !0 !== e.strictUnits && (l = o + "%")) : "em" === c || "rem" === c || "vw" === c || "vh" === c ? o /= it(t, r, 1, c) : "px" !== c && (a = it(t, r, a, c),
                c = "px"),
                p && (a || 0 === a) && (h = a + o + c)),
                p && (a += o),
                !o && 0 !== o || !a && 0 !== a ? void 0 !== d[r] && (h || h + "" != "NaN" && null != h) ? (i = new Tt(d,r,a || o || 0,0,i,-1,r,!1,0,l,h)).xs0 = "none" !== h || "display" !== r && -1 === r.indexOf("Style") ? h : l : Z("invalid " + r + " tween value: " + e[r]) : (i = new Tt(d,r,o,a - o,i,0,r,!1 !== A && ("px" === c || "zIndex" === r),0,l,h)).xs0 = c)),
                n && i && !i.plugin && (i.plugin = n);
            return i
        }
        ,
        t.setRatio = function(t) {
            var e, i, n, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; r; ) {
                        if (e = r.c * t + r.s,
                        r.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0),
                        r.type)
                            if (1 === r.type)
                                if (2 === (n = r.l))
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n)
                                    r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1,
                                    n = 1; n < r.l; n++)
                                        i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            else
                                -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else
                            r.t[r.p] = e + r.xs0;
                        r = r._next
                    }
                else
                    for (; r; )
                        2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t),
                        r = r._next;
            else
                for (; r; ) {
                    if (2 !== r.type)
                        if (r.r && -1 !== r.type)
                            if (e = Math.round(r.s + r.c),
                            r.type) {
                                if (1 === r.type) {
                                    for (n = r.l,
                                    i = r.xs0 + e + r.xs1,
                                    n = 1; n < r.l; n++)
                                        i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            } else
                                r.t[r.p] = e + r.xs0;
                        else
                            r.t[r.p] = r.e;
                    else
                        r.setRatio(t);
                    r = r._next
                }
        }
        ,
        t._enableTransforms = function(t) {
            this._transform = this._transform || $t(this._target, C, !0),
            this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var ee = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        t._addLazySet = function(t, e, i) {
            var n = this._firstPT = new Tt(t,e,0,0,this._firstPT,2);
            n.e = i,
            n.setRatio = ee,
            n.data = this
        }
        ,
        t._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            n = !0),
            i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        t._mod = function(t) {
            for (var e = this._firstPT; e; )
                "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
                e = e._next
        }
        ,
        t._kill = function(t) {
            var e, i, n, r = t;
            if (t.autoAlpha || t.alpha) {
                for (i in r = {},
                t)
                    r[i] = t[i];
                r.opacity = 1,
                r.autoAlpha && (r.visibility = 1)
            }
            for (t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next),
            e._next && this._linkCSSP(e._next, e._next._next, n._prev),
            this._classNamePT = null),
            e = this._firstPT; e; )
                e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t),
                i = e.plugin),
                e = e._next;
            return s.prototype._kill.call(this, r)
        }
        ;
        var ie = function(t, e, i) {
            var n, r, s, o;
            if (t.slice)
                for (r = t.length; -1 < --r; )
                    ie(t[r], e, i);
            else
                for (r = (n = t.childNodes).length; -1 < --r; )
                    o = (s = n[r]).type,
                    s.style && (e.push(rt(s)),
                    i && i.push(s)),
                    1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || ie(s, e, i)
        };
        return B.cascadeTo = function(t, e, i) {
            var n, r, s, o, a = X.to(t, e, i), l = [a], h = [], u = [], c = [], f = X._internals.reservedProps;
            for (t = a._targets || a.target,
            ie(t, h, c),
            a.render(e, !0, !0),
            ie(t, u),
            a.render(0, !0, !0),
            a._enabled(!0),
            n = c.length; -1 < --n; )
                if ((r = st(c[n], h[n], u[n])).firstMPT) {
                    for (s in r = r.difs,
                    i)
                        f[s] && (r[s] = i[s]);
                    for (s in o = {},
                    r)
                        o[s] = h[n][s];
                    l.push(X.fromTo(c[n], e, o, r))
                }
            return l
        }
        ,
        s.activate([B]),
        B
    }, !0),
    t = _gsScope._gsDefine.plugin({
        propName: "roundProps",
        version: "1.6.0",
        priority: -1,
        API: 2,
        init: function(t, e, i) {
            return this._tween = i,
            !0
        }
    }),
    l = function(t) {
        for (; t; )
            t.f || t.blob || (t.m = Math.round),
            t = t._next
    }
    ,
    (e = t.prototype)._onInitAllProps = function() {
        for (var t, e, i, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; -1 < --s; )
            o[r[s]] = Math.round;
        for (s = r.length; -1 < --s; )
            for (t = r[s],
            e = n._firstPT; e; )
                i = e._next,
                e.pg ? e.t._mod(o) : e.n === t && (2 === e.f && e.t ? l(e.t._firstPT) : (this._add(e.t, t, e.s, e.c),
                i && (i._prev = e._prev),
                e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i),
                e._next = e._prev = null,
                n._propLookup[t] = a)),
                e = i;
        return !1
    }
    ,
    e._add = function(t, e, i, n) {
        this._addTween(t, e, i, i + n, e, Math.round),
        this._overwriteProps.push(e)
    }
    ,
    _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.0",
        init: function(t, e, i, n) {
            var r, s;
            if ("function" != typeof t.setAttribute)
                return !1;
            for (r in e)
                "function" == typeof (s = e[r]) && (s = s(n, t)),
                this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r),
                this._overwriteProps.push(r);
            return !0
        }
    }),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function(t, e, i, n) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var r, s, o, a, l, h, u = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (r in e)
                "useRadians" !== r && ("function" == typeof (a = e[r]) && (a = a(n, t)),
                s = (h = (a + "").split("_"))[0],
                o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()),
                l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o,
                h.length && (-1 !== (s = h.join("_")).indexOf("short") && ((l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u)),
                -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== s.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)),
                (1e-6 < l || l < -1e-6) && (this._addTween(t, r, o, o + l, r),
                this._overwriteProps.push(r)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t)
                this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e; )
                    e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                    e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(m) {
        var e, i, t, n = _gsScope.GreenSockGlobals || _gsScope, r = n.com.greensock, s = 2 * Math.PI, o = Math.PI / 2, a = r._class, l = function(t, e) {
            var i = a("easing." + t, function() {}, !0)
              , n = i.prototype = new m;
            return n.constructor = i,
            n.getRatio = e,
            i
        }, h = m.register || function() {}
        , u = function(t, e, i, n, r) {
            var s = a("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new n
            }, !0);
            return h(s, t),
            s
        }, g = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (((this.next = i).prev = this).c = i.v - e,
            this.gap = i.t - t)
        }, c = function(t, e) {
            var i = a("easing." + t, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , n = i.prototype = new m;
            return n.constructor = i,
            n.getRatio = e,
            n.config = function(t) {
                return new i(t)
            }
            ,
            i
        }, f = u("Back", c("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), c("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), c("BackInOut", function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), p = a("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : 1 < t && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = !0 === i
        }, !0), d = p.prototype = new m;
        return d.constructor = p,
        d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        p.ease = new p(.7,.7),
        d.config = p.config = function(t, e, i) {
            return new p(t,e,i)
        }
        ,
        (d = (e = a("easing.SteppedEase", function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }, !0)).prototype = new m).constructor = e,
        d.getRatio = function(t) {
            return t < 0 ? t = 0 : 1 <= t && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        d.config = e.config = function(t) {
            return new e(t)
        }
        ,
        (d = (i = a("easing.RoughEase", function(t) {
            for (var e, i, n, r, s, o, a = (t = t || {}).taper || "none", l = [], h = 0, u = 0 | (t.points || 20), c = u, f = !1 !== t.randomize, p = !0 === t.clamp, d = t.template instanceof m ? t.template : null, _ = "number" == typeof t.strength ? .4 * t.strength : .4; -1 < --c; )
                e = f ? Math.random() : 1 / u * c,
                i = d ? d.getRatio(e) : e,
                n = "none" === a ? _ : "out" === a ? (r = 1 - e) * r * _ : "in" === a ? e * e * _ : (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * .5 * _,
                f ? i += Math.random() * n - .5 * n : c % 2 ? i += .5 * n : i -= .5 * n,
                p && (1 < i ? i = 1 : i < 0 && (i = 0)),
                l[h++] = {
                    x: e,
                    y: i
                };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new g(1,1,null),
            c = u; -1 < --c; )
                s = l[c],
                o = new g(s.x,s.y,o);
            this._prev = new g(0,0,0 !== o.t ? o : o.next)
        }, !0)).prototype = new m).constructor = i,
        d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t; )
                    e = e.prev;
            return (this._prev = e).v + (t - e.t) / e.gap * e.c
        }
        ,
        d.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", l("BounceOut", function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = t < .5;
            return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        u("Elastic", (t = function(t, e, i) {
            var n = a("easing." + t, function(t, e) {
                this._p1 = 1 <= t ? t : 1,
                this._p2 = (e || i) / (t < 1 ? t : 1),
                this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0),
                this._p2 = s / this._p2
            }, !0)
              , r = n.prototype = new m;
            return r.constructor = n,
            r.getRatio = e,
            r.config = function(t, e) {
                return new n(t,e)
            }
            ,
            n
        }
        )("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), t("ElasticIn", function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }, .3), t("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)),
        u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return 1 - Math.cos(t * o)
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        a("easing.EaseLookup", {
            find: function(t) {
                return m.map[t]
            }
        }, !0),
        h(n.SlowMo, "SlowMo", "ease,"),
        h(i, "RoughEase", "ease,"),
        h(e, "SteppedEase", "ease,"),
        f
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(p, d) {
    "use strict";
    var e, i, _ = {}, n = p.document, m = p.GreenSockGlobals = p.GreenSockGlobals || p;
    if (!m.TweenLite) {
        var t, r, s, g, v, y = function(t) {
            var e, i = t.split("."), n = m;
            for (e = 0; e < i.length; e++)
                n[i[e]] = n = n[i[e]] || {};
            return n
        }, c = y("com.greensock"), x = 1e-10, l = function(t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]))
                ;
            return i
        }, T = function() {}, b = (e = Object.prototype.toString,
        i = e.call([]),
        function(t) {
            return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
        }
        ), w = {}, P = function(l, h, u, c) {
            this.sc = w[l] ? w[l].sc : [],
            (w[l] = this).gsClass = null,
            this.func = u;
            var f = [];
            this.check = function(t) {
                for (var e, i, n, r, s, o = h.length, a = o; -1 < --o; )
                    (e = w[h[o]] || new P(h[o],[])).gsClass ? (f[o] = e.gsClass,
                    a--) : t && e.sc.push(this);
                if (0 === a && u) {
                    if (n = (i = ("com.greensock." + l).split(".")).pop(),
                    r = y(i.join("."))[n] = this.gsClass = u.apply(u, f),
                    c)
                        if (m[n] = _[n] = r,
                        !(s = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd)
                            define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + l.split(".").pop(), [], function() {
                                return r
                            });
                        else if (s)
                            if (l === d)
                                for (o in module.exports = _[d] = r,
                                _)
                                    r[o] = _[o];
                            else
                                _[d] && (_[d][n] = r);
                    for (o = 0; o < this.sc.length; o++)
                        this.sc[o].check()
                }
            }
            ,
            this.check(!0)
        }, o = p._gsDefine = function(t, e, i, n) {
            return new P(t,e,i,n)
        }
        , f = c._class = function(t, e, i) {
            return e = e || function() {}
            ,
            o(t, [], function() {
                return e
            }, i),
            e
        }
        ;
        o.globals = m;
        var a = [0, 0, 1, 1]
          , S = f("easing.Ease", function(t, e, i, n) {
            this._func = t,
            this._type = i || 0,
            this._power = n || 0,
            this._params = e ? a.concat(e) : a
        }, !0)
          , C = S.map = {}
          , h = S.register = function(t, e, i, n) {
            for (var r, s, o, a, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); -1 < --h; )
                for (s = l[h],
                r = n ? f("easing." + s, null, !0) : c.easing[s] || {},
                o = u.length; -1 < --o; )
                    a = u[o],
                    C[s + "." + a] = C[a + s] = r[a] = t.getRatio ? t : t[a] || new t
        }
        ;
        for ((s = S.prototype)._calcEnd = !1,
        s.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
            1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
        }
        ,
        r = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; -1 < --r; )
            s = t[r] + ",Power" + r,
            h(new S(null,null,1,r), s, "easeOut", !0),
            h(new S(null,null,2,r), s, "easeIn" + (0 === r ? ",easeNone" : "")),
            h(new S(null,null,3,r), s, "easeInOut");
        C.linear = c.easing.Linear.easeIn,
        C.swing = c.easing.Quad.easeInOut;
        var A = f("events.EventDispatcher", function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        (s = A.prototype).addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var s, o, a = this._listeners[t], l = 0;
            for (this !== g || v || g.wake(),
            null == a && (this._listeners[t] = a = []),
            o = a.length; -1 < --o; )
                (s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
            a.splice(l, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            })
        }
        ,
        s.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; -1 < --i; )
                    if (n[i].c === e)
                        return void n.splice(i, 1)
        }
        ,
        s.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for (1 < (e = r.length) && (r = r.slice(0)),
                i = this._eventTarget; -1 < --e; )
                    (n = r[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
        }
        ;
        var O = p.requestAnimationFrame
          , D = p.cancelAnimationFrame
          , k = Date.now || function() {
            return (new Date).getTime()
        }
          , R = k();
        for (r = (t = ["ms", "moz", "webkit", "o"]).length; -1 < --r && !O; )
            O = p[t[r] + "RequestAnimationFrame"],
            D = p[t[r] + "CancelAnimationFrame"] || p[t[r] + "CancelRequestAnimationFrame"];
        f("Ticker", function(t, e) {
            var r, s, o, a, l, h = this, u = k(), i = !(!1 === e || !O) && "auto", c = 500, f = 33, p = function(t) {
                var e, i, n = k() - R;
                c < n && (u += n - f),
                R += n,
                h.time = (R - u) / 1e3,
                e = h.time - l,
                (!r || 0 < e || !0 === t) && (h.frame++,
                l += e + (a <= e ? .004 : a - e),
                i = !0),
                !0 !== t && (o = s(p)),
                i && h.dispatchEvent("tick")
            };
            A.call(h),
            h.time = h.frame = 0,
            h.tick = function() {
                p(!0)
            }
            ,
            h.lagSmoothing = function(t, e) {
                c = t || 1e10,
                f = Math.min(e, c, 0)
            }
            ,
            h.sleep = function() {
                null != o && (i && D ? D(o) : clearTimeout(o),
                s = T,
                o = null,
                h === g && (v = !1))
            }
            ,
            h.wake = function(t) {
                null !== o ? h.sleep() : t ? u += -R + (R = k()) : 10 < h.frame && (R = k() - c + 5),
                s = 0 === r ? T : i && O ? O : function(t) {
                    return setTimeout(t, 1e3 * (l - h.time) + 1 | 0)
                }
                ,
                h === g && (v = !0),
                p(2)
            }
            ,
            h.fps = function(t) {
                return arguments.length ? (a = 1 / ((r = t) || 60),
                l = this.time + a,
                void h.wake()) : r
            }
            ,
            h.useRAF = function(t) {
                return arguments.length ? (h.sleep(),
                i = t,
                void h.fps(r)) : i
            }
            ,
            h.fps(t),
            setTimeout(function() {
                "auto" === i && h.frame < 5 && "hidden" !== n.visibilityState && h.useRAF(!1)
            }, 1500)
        }),
        (s = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
        var u = f("core.Animation", function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = !0 === e.immediateRender,
            this.data = e.data,
            this._reversed = !0 === e.reversed,
            G) {
                v || g.wake();
                var i = this.vars.useFrames ? $ : G;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        g = u.ticker = new c.Ticker,
        (s = u.prototype)._dirty = s._gc = s._initted = s._paused = !1,
        s._totalTime = s._time = 0,
        s._rawPrevTime = -1,
        s._next = s._last = s._onUpdate = s._timeline = s.timeline = null,
        s._paused = !1;
        var F = function() {
            v && 2e3 < k() - R && g.wake(),
            setTimeout(F, 2e3)
        };
        F(),
        s.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        s.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        s.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        s.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }
        ,
        s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }
        ,
        s.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        s.render = function(t, e, i) {}
        ,
        s.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        s.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale
        }
        ,
        s._enabled = function(t, e) {
            return v || g.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        s._kill = function(t, e) {
            return this._enabled(!1, !1)
        }
        ,
        s.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); -1 < --e; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        s._callback = function(t) {
            var e = this.vars
              , i = e[t]
              , n = e[t + "Params"]
              , r = e[t + "Scope"] || e.callbackScope || this;
            switch (n ? n.length : 0) {
            case 0:
                i.call(r);
                break;
            case 1:
                i.call(r, n[0]);
                break;
            case 2:
                i.call(r, n[0], n[1]);
                break;
            default:
                i.apply(r, n)
            }
        }
        ,
        s.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)
                    return r[t];
                null == e ? delete r[t] : (r[t] = e,
                r[t + "Params"] = b(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                r[t + "Scope"] = n),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        s.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        s.totalTime = function(t, e, i) {
            if (v || g.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration
                      , r = this._timeline;
                    if (n < t && !i && (t = n),
                    this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale,
                    r._dirty || this._uncache(!1),
                    r._timeline)
                        for (; r._timeline; )
                            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                            r = r._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (L.length && Q(),
                this.render(t, e, !1),
                L.length && Q())
            }
            return this
        }
        ,
        s.progress = s.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }
        ,
        s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        s.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        s.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || x,
            this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime
                  , i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        }
        ,
        s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        s.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (v || t || g.wake(),
            i = (e = n.rawTime()) - this._pauseTime,
            !t && n.smoothChildTiming && (this._startTime += i,
            this._uncache(!1)),
            this._pauseTime = t ? e : null,
            this._paused = t,
            this._active = this.isActive(),
            !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
            this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var E = f("core.SimpleTimeline", function(t) {
            u.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (s = E.prototype = new u).constructor = E,
        s.kill()._gc = !1,
        s._first = s._last = s._recent = null,
        s._sortChildren = !1,
        s.add = s.insert = function(t, e, i, n) {
            var r, s;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            r = this._last,
            this._sortChildren)
                for (s = t._startTime; r && r._startTime > s; )
                    r = r._prev;
            return r ? (t._next = r._next,
            r._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = r,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            t === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        s.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                n = r._next,
                (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                r = n
        }
        ,
        s.rawTime = function() {
            return v || g.wake(),
            this._totalTime
        }
        ;
        var M = f("TweenLite", function(t, e, i) {
            if (u.call(this, e, i),
            this.render = M.prototype.render,
            null == t)
                throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : M.selector(t) || t;
            var n, r, s, o = t.jquery || t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType), a = this.vars.overwrite;
            if (this._overwrite = a = null == a ? U[M.defaultOverwrite] : "number" == typeof a ? a >> 0 : U[a],
            (o || t instanceof Array || t.push && b(t)) && "number" != typeof t[0])
                for (this._targets = s = l(t),
                this._propLookup = [],
                this._siblings = [],
                n = 0; n < s.length; n++)
                    (r = s[n]) ? "string" != typeof r ? r.length && r !== p && r[0] && (r[0] === p || r[0].nodeType && r[0].style && !r.nodeType) ? (s.splice(n--, 1),
                    this._targets = s = s.concat(l(r))) : (this._siblings[n] = K(r, this, !1),
                    1 === a && 1 < this._siblings[n].length && tt(r, this, null, 1, this._siblings[n])) : "string" == typeof (r = s[n--] = M.selector(r)) && s.splice(n + 1, 1) : s.splice(n--, 1);
            else
                this._propLookup = {},
                this._siblings = K(t, this, !1),
                1 === a && 1 < this._siblings.length && tt(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -x,
            this.render(Math.min(0, -this._delay)))
        }, !0)
          , N = function(t) {
            return t && t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType)
        };
        (s = M.prototype = new u).constructor = M,
        s.kill()._gc = !1,
        s.ratio = 0,
        s._firstPT = s._targets = s._overwrittenProps = s._startAt = null,
        s._notifyPluginsOfEnabled = s._lazy = !1,
        M.version = "1.19.1",
        M.defaultEase = s._ease = new S(null,null,1,1),
        M.defaultOverwrite = "auto",
        M.ticker = g,
        M.autoSleep = 120,
        M.lagSmoothing = function(t, e) {
            g.lagSmoothing(t, e)
        }
        ,
        M.selector = p.$ || p.jQuery || function(t) {
            var e = p.$ || p.jQuery;
            return e ? (M.selector = e)(t) : void 0 === n ? t : n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        }
        ;
        var L = []
          , z = {}
          , I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
          , j = function(t) {
            for (var e, i = this._firstPT; i; )
                e = i.blob ? 1 === t ? this.end : t ? this.join("") : this.start : i.c * t + i.s,
                i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0),
                i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
          , X = function(t, e, i, n) {
            var r, s, o, a, l, h, u, c = [], f = 0, p = "", d = 0;
            for (c.start = t,
            c.end = e,
            t = c[0] = t + "",
            e = c[1] = e + "",
            i && (i(c),
            t = c[0],
            e = c[1]),
            c.length = 0,
            r = t.match(I) || [],
            s = e.match(I) || [],
            n && (n._next = null,
            n.blob = 1,
            c._firstPT = c._applyPT = n),
            l = s.length,
            a = 0; a < l; a++)
                u = s[a],
                p += (h = e.substr(f, e.indexOf(u, f) - f)) || !a ? h : ",",
                f += h.length,
                d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1),
                u === r[a] || r.length <= a ? p += u : (p && (c.push(p),
                p = ""),
                o = parseFloat(r[a]),
                c.push(o),
                c._firstPT = {
                    _next: c._firstPT,
                    t: c,
                    p: c.length - 1,
                    s: o,
                    c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
                    f: 0,
                    m: d && d < 4 ? Math.round : 0
                }),
                f += u.length;
            return (p += e.substr(f)) && c.push(p),
            c.setRatio = j,
            c
        }
          , B = function(t, e, i, n, r, s, o, a, l) {
            "function" == typeof n && (n = n(l || 0, t));
            var h = typeof t[e]
              , u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)
              , c = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e]
              , f = "string" == typeof n && "=" === n.charAt(1)
              , p = {
                t: t,
                p: e,
                s: c,
                f: "function" === h,
                pg: 0,
                n: r || e,
                m: s ? "function" == typeof s ? s : Math.round : 0,
                pr: 0,
                c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
            };
            return ("number" != typeof c || "number" != typeof n && !f) && (o || isNaN(c) || !f && isNaN(n) || "boolean" == typeof c || "boolean" == typeof n ? (p.fp = o,
            p = {
                t: X(c, f ? p.s + p.c : n, a || M.defaultStringFilter, p),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: r || e,
                pr: 0,
                m: 0
            }) : (p.s = parseFloat(c),
            f || (p.c = parseFloat(n) - p.s || 0))),
            p.c ? ((p._next = this._firstPT) && (p._next._prev = p),
            this._firstPT = p) : void 0
        }
          , Y = M._internals = {
            isArray: b,
            isSelector: N,
            lazyTweens: L,
            blobDif: X
        }
          , H = M._plugins = {}
          , V = Y.tweenLookup = {}
          , q = 0
          , W = Y.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1
        }
          , U = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
        }
          , $ = u._rootFramesTimeline = new E
          , G = u._rootTimeline = new E
          , Z = 30
          , Q = Y.lazyRender = function() {
            var t, e = L.length;
            for (z = {}; -1 < --e; )
                (t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0),
                t._lazy = !1);
            L.length = 0
        }
        ;
        G._startTime = g.time,
        $._startTime = g.frame,
        G._active = $._active = !0,
        setTimeout(Q, 1),
        u._updateRoot = M.render = function() {
            var t, e, i;
            if (L.length && Q(),
            G.render((g.time - G._startTime) * G._timeScale, !1, !1),
            $.render((g.frame - $._startTime) * $._timeScale, !1, !1),
            L.length && Q(),
            g.frame >= Z) {
                for (i in Z = g.frame + (parseInt(M.autoSleep, 10) || 120),
                V) {
                    for (t = (e = V[i].tweens).length; -1 < --t; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete V[i]
                }
                if ((!(i = G._first) || i._paused) && M.autoSleep && !$._first && 1 === g._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || g.sleep()
                }
            }
        }
        ,
        g.addEventListener("tick", u._updateRoot);
        var K = function(t, e, i) {
            var n, r, s = t._gsTweenID;
            if (V[s || (t._gsTweenID = s = "t" + q++)] || (V[s] = {
                target: t,
                tweens: []
            }),
            e && ((n = V[s].tweens)[r = n.length] = e,
            i))
                for (; -1 < --r; )
                    n[r] === e && n.splice(r, 1);
            return V[s].tweens
        }
          , J = function(t, e, i, n) {
            var r, s, o = t.vars.onOverwrite;
            return o && (r = o(t, e, i, n)),
            (o = M.onOverwrite) && (s = o(t, e, i, n)),
            !1 !== r && !1 !== s
        }
          , tt = function(t, e, i, n, r) {
            var s, o, a, l;
            if (1 === n || 4 <= n) {
                for (l = r.length,
                s = 0; s < l; s++)
                    if ((a = r[s]) !== e)
                        a._gc || a._kill(null, t, e) && (o = !0);
                    else if (5 === n)
                        break;
                return o
            }
            var h, u = e._startTime + x, c = [], f = 0, p = 0 === e._duration;
            for (s = r.length; -1 < --s; )
                (a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || et(e, 0, p),
                0 === et(a, h, p) && (c[f++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2e-10 || (c[f++] = a)));
            for (s = f; -1 < --s; )
                if (a = c[s],
                2 === n && a._kill(i, t, e) && (o = !0),
                2 !== n || !a._firstPT && a._initted) {
                    if (2 !== n && !J(a, e))
                        continue;
                    a._enabled(!1, !1) && (o = !0)
                }
            return o
        }
          , et = function(t, e, i) {
            for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline; ) {
                if (s += n._startTime,
                r *= n._timeScale,
                n._paused)
                    return -100;
                n = n._timeline
            }
            return e < (s /= r) ? s - e : i && s === e || !t._initted && s - e < 2 * x ? x : (s += t.totalDuration() / t._timeScale / r) > e + x ? 0 : s - e - x
        };
        s._init = function() {
            var t, e, i, n, r, s, o = this.vars, a = this._overwrittenProps, l = this._duration, h = !!o.immediateRender, u = o.ease;
            if (o.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                r = {},
                o.startAt)
                    r[n] = o.startAt[n];
                if (r.overwrite = !1,
                r.immediateRender = !0,
                r.lazy = h && !1 !== o.lazy,
                r.startAt = r.delay = null,
                this._startAt = M.to(this.target, 0, r),
                h)
                    if (0 < this._time)
                        this._startAt = null;
                    else if (0 !== l)
                        return
            } else if (o.runBackwards && 0 !== l)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    for (n in 0 !== this._time && (h = !1),
                    i = {},
                    o)
                        W[n] && "autoCSS" !== n || (i[n] = o[n]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = h && !1 !== o.lazy,
                    i.immediateRender = h,
                    this._startAt = M.to(this.target, 0, i),
                    h) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = u = u ? u instanceof S ? u : "function" == typeof u ? new S(u,o.easeParams) : C[u] || M.defaultEase : M.defaultEase,
            o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (s = this._targets.length,
                t = 0; t < s; t++)
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && M._onPluginEvent("_onInitAllProps", this),
            a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            o.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = o.onUpdate,
            this._initted = !0
        }
        ,
        s._initProps = function(t, e, i, n, r) {
            var s, o, a, l, h, u;
            if (null == t)
                return !1;
            for (s in z[t._gsTweenID] && Q(),
            this.vars.css || t.style && t !== p && t.nodeType && H.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, n = {};
                for (i in t)
                    W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i],
                    delete t[i]);
                t.css = n
            }(this.vars, t),
            this.vars)
                if (u = this.vars[s],
                W[s])
                    u && (u instanceof Array || u.push && b(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[s] = u = this._swapSelfInParams(u, this));
                else if (H[s] && (l = new H[s])._onInitTween(t, this.vars[s], this, r)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: s,
                        pg: 1,
                        pr: l._priority,
                        m: 0
                    },
                    o = l._overwriteProps.length; -1 < --o; )
                        e[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0),
                    (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    h._next && (h._next._prev = h)
                } else
                    e[s] = B.call(this, t, s, "get", u, s, 0, null, this.vars.stringFilter, r);
            return n && this._kill(n, t) ? this._initProps(t, e, i, n, r) : 1 < this._overwrite && this._firstPT && 1 < i.length && tt(t, this, e, this._overwrite, i) ? (this._kill(e, t),
            this._initProps(t, e, i, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[t._gsTweenID] = !0),
            a)
        }
        ,
        s.render = function(t, e, i) {
            var n, r, s, o, a = this._time, l = this._duration, h = this._rawPrevTime;
            if (l - 1e-7 <= t && 0 <= t)
                this._totalTime = this._time = l,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (n = !0,
                r = "onComplete",
                i = i || this._timeline.autoRemoveChildren),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (h < 0 || t <= 0 && -1e-7 <= t || h === x && "isPause" !== this.data) && h !== t && (i = !0,
                x < h && (r = "onReverseComplete")),
                this._rawPrevTime = o = !e || t || h === t ? t : x);
            else if (t < 1e-7)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== a || 0 === l && 0 < h) && (r = "onReverseComplete",
                n = this._reversed),
                t < 0 && (this._active = !1,
                0 === l && (this._initted || !this.vars.lazy || i) && (0 <= h && (h !== x || "isPause" !== this.data) && (i = !0),
                this._rawPrevTime = o = !e || t || h === t ? t : x)),
                this._initted || (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var u = t / l
                  , c = this._easeType
                  , f = this._easePower;
                (1 === c || 3 === c && .5 <= u) && (u = 1 - u),
                3 === c && (u *= 2),
                1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u),
                this.ratio = 1 === c ? 1 - u : 2 === c ? u : t / l < .5 ? u / 2 : 1 - u / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = a,
                        this._rawPrevTime = h,
                        L.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== a && 0 <= t && (this._active = !0),
                0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))),
                s = this._firstPT; s; )
                    s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s,
                    s = s._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i),
                e || (this._time !== a || n || i) && this._callback("onUpdate")),
                r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i),
                n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[r] && this._callback(r),
                0 === l && this._rawPrevTime === x && o !== x && (this._rawPrevTime = 0))
            }
        }
        ,
        s._kill = function(t, e, i) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
            var n, r, s, o, a, l, h, u, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((b(e) || N(e)) && "number" != typeof e[0])
                for (n = e.length; -1 < --n; )
                    this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; -1 < --n; )
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup,
                    r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (h = t || a,
                    u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill),
                    i && (M.onOverwrite || this.vars.onOverwrite)) {
                        for (s in h)
                            a[s] && (c || (c = []),
                            c.push(s));
                        if ((c || !t) && !J(this, i, e, c))
                            return !1
                    }
                    for (s in h)
                        (o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s,
                        l = !0),
                        o.pg && o.t._kill(h) && (l = !0),
                        o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next),
                        o._next && (o._next._prev = o._prev),
                        o._next = o._prev = null),
                        delete a[s]),
                        u && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }
        ,
        s.invalidate = function() {
            return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            u.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -x,
            this.render(Math.min(0, -this._delay))),
            this
        }
        ,
        s._enabled = function(t, e) {
            if (v || g.wake(),
            t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; -1 < --i; )
                        this._siblings[i] = K(n[i], this, !0);
                else
                    this._siblings = K(this.target, this, !0)
            }
            return u.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }
        ,
        M.to = function(t, e, i) {
            return new M(t,e,i)
        }
        ,
        M.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new M(t,e,i)
        }
        ,
        M.fromTo = function(t, e, i, n) {
            return n.startAt = i,
            n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
            new M(t,e,n)
        }
        ,
        M.delayedCall = function(t, e, i, n, r) {
            return new M(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }
        ,
        M.set = function(t, e) {
            return new M(t,0,e)
        }
        ,
        M.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            var i, n, r, s;
            if (t = "string" != typeof t ? t : M.selector(t) || t,
            (b(t) || N(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                n = []; -1 < --i; )
                    n = n.concat(M.getTweensOf(t[i], e));
                for (i = n.length; -1 < --i; )
                    for (s = n[i],
                    r = i; -1 < --r; )
                        s === n[r] && n.splice(i, 1)
            } else
                for (i = (n = K(t).concat()).length; -1 < --i; )
                    (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }
        ,
        M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var n = M.getTweensOf(t, e), r = n.length; -1 < --r; )
                n[r]._kill(i, t)
        }
        ;
        var it = f("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = it.prototype
        }, !0);
        if (s = it.prototype,
        it.version = "1.19.0",
        it.API = 2,
        s._firstPT = null,
        s._addTween = B,
        s.setRatio = j,
        s._kill = function(t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; -1 < --e; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; n; )
                null != t[n.n] && (n._next && (n._next._prev = n._prev),
                n._prev ? (n._prev._next = n._next,
                n._prev = null) : this._firstPT === n && (this._firstPT = n._next)),
                n = n._next;
            return !1
        }
        ,
        s._mod = s._roundProps = function(t) {
            for (var e, i = this._firstPT; i; )
                (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                i = i._next
        }
        ,
        M._onPluginEvent = function(t, e) {
            var i, n, r, s, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a; ) {
                    for (o = a._next,
                    n = r; n && n.pr > a.pr; )
                        n = n._next;
                    (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a,
                    (a._next = n) ? n._prev = a : s = a,
                    a = o
                }
                a = e._firstPT = r
            }
            for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                a = a._next;
            return i
        }
        ,
        it.activate = function(t) {
            for (var e = t.length; -1 < --e; )
                t[e].API === it.API && (H[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        o.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            }, o = f("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                it.call(this, i, n),
                this._overwriteProps = r || []
            }, !0 === t.global), a = o.prototype = new it(i);
            for (e in (a.constructor = o).API = t.API,
            s)
                "function" == typeof t[e] && (a[s[e]] = t[e]);
            return o.version = t.version,
            it.activate([o]),
            o
        }
        ,
        t = p._gsQueue) {
            for (r = 0; r < t.length; r++)
                t[r]();
            for (s in w)
                w[s].func || p.console.log("GSAP encountered missing dependency: " + s)
        }
        v = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Barba", [], e) : "object" == typeof exports ? exports.Barba = e() : t.Barba = e()
}(this, function() {
    return function(i) {
        var n = {};
        function r(t) {
            if (n[t])
                return n[t].exports;
            var e = n[t] = {
                exports: {},
                id: t,
                loaded: !1
            };
            return i[t].call(e.exports, e, e.exports, r),
            e.loaded = !0,
            e.exports
        }
        return r.m = i,
        r.c = n,
        r.p = "http://localhost:8080/dist",
        r(0)
    }([function(t, e, i) {
        "function" != typeof Promise && (window.Promise = i(1));
        var n = {
            version: "1.0.0",
            BaseTransition: i(4),
            BaseView: i(6),
            BaseCache: i(8),
            Dispatcher: i(7),
            HistoryManager: i(9),
            Pjax: i(10),
            Prefetch: i(13),
            Utils: i(5)
        };
        t.exports = n
    }
    , function(p, t, e) {
        (function(i) {
            !function(t) {
                var e = setTimeout;
                function n() {}
                var r = "function" == typeof i && i || function(t) {
                    e(t, 0)
                }
                  , s = function(t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                };
                function o(t) {
                    if ("object" != typeof this)
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    f(t, this)
                }
                function a(i, n) {
                    for (; 3 === i._state; )
                        i = i._value;
                    0 !== i._state ? (i._handled = !0,
                    r(function() {
                        var t = 1 === i._state ? n.onFulfilled : n.onRejected;
                        if (null !== t) {
                            var e;
                            try {
                                e = t(i._value)
                            } catch (t) {
                                return void h(n.promise, t)
                            }
                            l(n.promise, e)
                        } else
                            (1 === i._state ? l : h)(n.promise, i._value)
                    })) : i._deferreds.push(n)
                }
                function l(e, t) {
                    try {
                        if (t === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var i = t.then;
                            if (t instanceof o)
                                return e._state = 3,
                                e._value = t,
                                void u(e);
                            if ("function" == typeof i)
                                return void f((n = i,
                                r = t,
                                function() {
                                    n.apply(r, arguments)
                                }
                                ), e)
                        }
                        e._state = 1,
                        e._value = t,
                        u(e)
                    } catch (t) {
                        h(e, t)
                    }
                    var n, r
                }
                function h(t, e) {
                    t._state = 2,
                    t._value = e,
                    u(t)
                }
                function u(t) {
                    2 === t._state && 0 === t._deferreds.length && r(function() {
                        t._handled || s(t._value)
                    });
                    for (var e = 0, i = t._deferreds.length; e < i; e++)
                        a(t, t._deferreds[e]);
                    t._deferreds = null
                }
                function c(t, e, i) {
                    this.onFulfilled = "function" == typeof t ? t : null,
                    this.onRejected = "function" == typeof e ? e : null,
                    this.promise = i
                }
                function f(t, e) {
                    var i = !1;
                    try {
                        t(function(t) {
                            i || (i = !0,
                            l(e, t))
                        }, function(t) {
                            i || (i = !0,
                            h(e, t))
                        })
                    } catch (t) {
                        if (i)
                            return;
                        i = !0,
                        h(e, t)
                    }
                }
                o.prototype.catch = function(t) {
                    return this.then(null, t)
                }
                ,
                o.prototype.then = function(t, e) {
                    var i = new this.constructor(n);
                    return a(this, new c(t,e,i)),
                    i
                }
                ,
                o.all = function(t) {
                    var a = Array.prototype.slice.call(t);
                    return new o(function(n, r) {
                        if (0 === a.length)
                            return n([]);
                        var s = a.length;
                        function o(e, t) {
                            try {
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var i = t.then;
                                    if ("function" == typeof i)
                                        return void i.call(t, function(t) {
                                            o(e, t)
                                        }, r)
                                }
                                a[e] = t,
                                0 == --s && n(a)
                            } catch (t) {
                                r(t)
                            }
                        }
                        for (var t = 0; t < a.length; t++)
                            o(t, a[t])
                    }
                    )
                }
                ,
                o.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
                        t(e)
                    }
                    )
                }
                ,
                o.reject = function(i) {
                    return new o(function(t, e) {
                        e(i)
                    }
                    )
                }
                ,
                o.race = function(r) {
                    return new o(function(t, e) {
                        for (var i = 0, n = r.length; i < n; i++)
                            r[i].then(t, e)
                    }
                    )
                }
                ,
                o._setImmediateFn = function(t) {
                    r = t
                }
                ,
                o._setUnhandledRejectionFn = function(t) {
                    s = t
                }
                ,
                void 0 !== p && p.exports ? p.exports = o : t.Promise || (t.Promise = o)
            }(this)
        }
        ).call(t, e(2).setImmediate)
    }
    , function(t, l, h) {
        (function(t, e) {
            var n = h(3).nextTick
              , i = Function.prototype.apply
              , r = Array.prototype.slice
              , s = {}
              , o = 0;
            function a(t, e) {
                this._id = t,
                this._clearFn = e
            }
            l.setTimeout = function() {
                return new a(i.call(setTimeout, window, arguments),clearTimeout)
            }
            ,
            l.setInterval = function() {
                return new a(i.call(setInterval, window, arguments),clearInterval)
            }
            ,
            l.clearTimeout = l.clearInterval = function(t) {
                t.close()
            }
            ,
            a.prototype.unref = a.prototype.ref = function() {}
            ,
            a.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }
            ,
            l.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId),
                t._idleTimeout = e
            }
            ,
            l.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId),
                t._idleTimeout = -1
            }
            ,
            l._unrefActive = l.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                0 <= e && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout()
                }, e))
            }
            ,
            l.setImmediate = "function" == typeof t ? t : function(t) {
                var e = o++
                  , i = !(arguments.length < 2) && r.call(arguments, 1);
                return s[e] = !0,
                n(function() {
                    s[e] && (i ? t.apply(null, i) : t.call(null),
                    l.clearImmediate(e))
                }),
                e
            }
            ,
            l.clearImmediate = "function" == typeof e ? e : function(t) {
                delete s[t]
            }
        }
        ).call(l, h(2).setImmediate, h(2).clearImmediate)
    }
    , function(t, e) {
        var n, i, r = t.exports = {};
        !function() {
            try {
                n = setTimeout
            } catch (t) {
                n = function() {
                    throw new Error("setTimeout is not defined")
                }
            }
            try {
                i = clearTimeout
            } catch (t) {
                i = function() {
                    throw new Error("clearTimeout is not defined")
                }
            }
        }();
        var s, o = [], a = !1, l = -1;
        function h() {
            a && s && (a = !1,
            s.length ? o = s.concat(o) : l = -1,
            o.length && u())
        }
        function u() {
            if (!a) {
                var t = n(h);
                a = !0;
                for (var e = o.length; e; ) {
                    for (s = o,
                    o = []; ++l < e; )
                        s && s[l].run();
                    l = -1,
                    e = o.length
                }
                s = null,
                a = !1,
                i(t)
            }
        }
        function c(t, e) {
            this.fun = t,
            this.array = e
        }
        function f() {}
        r.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var i = 1; i < arguments.length; i++)
                    e[i - 1] = arguments[i];
            o.push(new c(t,e)),
            1 !== o.length || a || n(u, 0)
        }
        ,
        c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = f,
        r.addListener = f,
        r.once = f,
        r.off = f,
        r.removeListener = f,
        r.removeAllListeners = f,
        r.emit = f,
        r.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    }
    , function(t, e, i) {
        var n = i(5)
          , r = {
            oldContainer: void 0,
            newContainer: void 0,
            newContainerLoading: void 0,
            extend: function(t) {
                return n.extend(this, t)
            },
            init: function(t, e) {
                var i = this;
                return this.oldContainer = t,
                this._newContainerPromise = e,
                this.deferred = n.deferred(),
                this.newContainerReady = n.deferred(),
                this.newContainerLoading = this.newContainerReady.promise,
                this.start(),
                this._newContainerPromise.then(function(t) {
                    i.newContainer = t,
                    i.newContainerReady.resolve()
                }),
                this.deferred.promise
            },
            done: function() {
                this.oldContainer.parentNode.removeChild(this.oldContainer),
                this.newContainer.style.visibility = "visible",
                this.deferred.resolve()
            },
            start: function() {}
        };
        t.exports = r
    }
    , function(t, e) {
        var i = {
            getCurrentUrl: function() {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
            },
            cleanLink: function(t) {
                return t.replace(/#.*/, "")
            },
            xhrTimeout: 5e3,
            xhr: function(t) {
                var e = this.deferred()
                  , i = new XMLHttpRequest;
                return i.onreadystatechange = function() {
                    if (4 === i.readyState)
                        return 200 === i.status ? e.resolve(i.responseText) : e.reject(new Error("xhr: HTTP code is not 200"))
                }
                ,
                i.ontimeout = function() {
                    return e.reject(new Error("xhr: Timeout exceeded"))
                }
                ,
                i.open("GET", t),
                i.timeout = this.xhrTimeout,
                i.setRequestHeader("x-barba", "yes"),
                i.send(),
                e.promise
            },
            extend: function(t, e) {
                var i = Object.create(t);
                for (var n in e)
                    e.hasOwnProperty(n) && (i[n] = e[n]);
                return i
            },
            deferred: function() {
                return new function() {
                    this.resolve = null,
                    this.reject = null,
                    this.promise = new Promise(function(t, e) {
                        this.resolve = t,
                        this.reject = e
                    }
                    .bind(this))
                }
            },
            getPort: function(t) {
                var e = void 0 !== t ? t : window.location.port
                  , i = window.location.protocol;
                return "" != e ? parseInt(e) : "http:" === i ? 80 : "https:" === i ? 443 : void 0
            }
        };
        t.exports = i
    }
    , function(t, e, i) {
        var r = i(7)
          , n = i(5)
          , s = {
            namespace: null,
            extend: function(t) {
                return n.extend(this, t)
            },
            init: function() {
                var n = this;
                r.on("initStateChange", function(t, e) {
                    e && e.namespace === n.namespace && n.onLeave()
                }),
                r.on("newPageReady", function(t, e, i) {
                    n.container = i,
                    t.namespace === n.namespace && n.onEnter()
                }),
                r.on("transitionCompleted", function(t, e) {
                    t.namespace === n.namespace && n.onEnterCompleted(),
                    e && e.namespace === n.namespace && n.onLeaveCompleted()
                })
            },
            onEnter: function() {},
            onEnterCompleted: function() {},
            onLeave: function() {},
            onLeaveCompleted: function() {}
        };
        t.exports = s
    }
    , function(t, e) {
        var i = {
            events: {},
            on: function(t, e) {
                this.events[t] = this.events[t] || [],
                this.events[t].push(e)
            },
            off: function(t, e) {
                t in this.events != !1 && this.events[t].splice(this.events[t].indexOf(e), 1)
            },
            trigger: function(t) {
                if (t in this.events != !1)
                    for (var e = 0; e < this.events[t].length; e++)
                        this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        };
        t.exports = i
    }
    , function(t, e, i) {
        var n = i(5)
          , r = {
            data: {},
            extend: function(t) {
                return n.extend(this, t)
            },
            set: function(t, e) {
                this.data[t] = e
            },
            get: function(t) {
                return this.data[t]
            },
            reset: function() {
                this.data = {}
            }
        };
        t.exports = r
    }
    , function(t, e) {
        var i = {
            history: [],
            add: function(t, e) {
                e || (e = void 0),
                this.history.push({
                    url: t,
                    namespace: e
                })
            },
            currentStatus: function() {
                return this.history[this.history.length - 1]
            },
            prevStatus: function() {
                var t = this.history;
                return t.length < 2 ? null : t[t.length - 2]
            }
        };
        t.exports = i
    }
    , function(t, e, i) {
        var r = i(5)
          , s = i(7)
          , n = i(11)
          , o = i(8)
          , a = i(9)
          , l = {
            Dom: i(12),
            History: a,
            Cache: o,
            cacheEnabled: !0,
            transitionProgress: !1,
            ignoreClassLink: "no-barba",
            start: function() {
                this.init()
            },
            init: function() {
                var t = this.Dom.getContainer();
                this.Dom.getWrapper().setAttribute("aria-live", "polite"),
                this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(t)),
                s.trigger("initStateChange", this.History.currentStatus()),
                s.trigger("newPageReady", this.History.currentStatus(), {}, t, this.Dom.currentHTML),
                s.trigger("transitionCompleted", this.History.currentStatus()),
                this.bindEvents()
            },
            bindEvents: function() {
                document.addEventListener("click", this.onLinkClick.bind(this)),
                window.addEventListener("popstate", this.onStateChange.bind(this))
            },
            getCurrentUrl: function() {
                return r.cleanLink(r.getCurrentUrl())
            },
            goTo: function(t) {
                window.history.pushState(null, null, t),
                this.onStateChange()
            },
            forceGoTo: function(t) {
                window.location = t
            },
            load: function(t) {
                var e, i = r.deferred(), n = this;
                return (e = this.Cache.get(t)) || (e = r.xhr(t),
                this.Cache.set(t, e)),
                e.then(function(t) {
                    var e = n.Dom.parseResponse(t);
                    n.Dom.putContainer(e),
                    n.cacheEnabled || n.Cache.reset(),
                    i.resolve(e)
                }, function() {
                    n.forceGoTo(t),
                    i.reject()
                }),
                i.promise
            },
            getHref: function(t) {
                if (t)
                    return t.getAttribute && "string" == typeof t.getAttribute("xlink:href") ? t.getAttribute("xlink:href") : "string" == typeof t.href ? t.href : void 0
            },
            onLinkClick: function(t) {
                for (var e = t.target; e && !this.getHref(e); )
                    e = e.parentNode;
                if (this.preventCheck(t, e)) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    s.trigger("linkClicked", e, t);
                    var i = this.getHref(e);
                    this.goTo(i)
                }
            },
            preventCheck: function(t, e) {
                if (!window.history.pushState)
                    return !1;
                var i = this.getHref(e);
                return !(!e || !i) && (!(1 < t.which || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) && ((!e.target || "_blank" !== e.target) && (window.location.protocol === e.protocol && window.location.hostname === e.hostname && (r.getPort() === r.getPort(e.port) && (!(-1 < i.indexOf("#")) && ((!e.getAttribute || "string" != typeof e.getAttribute("download")) && (r.cleanLink(i) != r.cleanLink(location.href) && !e.classList.contains(this.ignoreClassLink))))))))
            },
            getTransition: function() {
                return n
            },
            onStateChange: function() {
                var t = this.getCurrentUrl();
                if (this.transitionProgress && this.forceGoTo(t),
                this.History.currentStatus().url === t)
                    return !1;
                this.History.add(t);
                var e = this.load(t)
                  , i = Object.create(this.getTransition());
                this.transitionProgress = !0,
                s.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
                var n = i.init(this.Dom.getContainer(), e);
                e.then(this.onNewContainerLoaded.bind(this)),
                n.then(this.onTransitionEnd.bind(this))
            },
            onNewContainerLoaded: function(t) {
                this.History.currentStatus().namespace = this.Dom.getNamespace(t),
                s.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), t, this.Dom.currentHTML)
            },
            onTransitionEnd: function() {
                this.transitionProgress = !1,
                s.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
            }
        };
        t.exports = l
    }
    , function(t, e, i) {
        var n = i(4).extend({
            start: function() {
                this.newContainerLoading.then(this.finish.bind(this))
            },
            finish: function() {
                document.body.scrollTop = 0,
                this.done()
            }
        });
        t.exports = n
    }
    , function(t, e) {
        var i = {
            dataNamespace: "namespace",
            wrapperId: "barba-wrapper",
            containerClass: "barba-container",
            currentHTML: document.documentElement.innerHTML,
            parseResponse: function(t) {
                this.currentHTML = t;
                var e = document.createElement("div");
                e.innerHTML = t;
                var i = e.querySelector("title");
                return i && (document.title = i.textContent),
                this.getContainer(e)
            },
            getWrapper: function() {
                var t = document.getElementById(this.wrapperId);
                if (!t)
                    throw new Error("Barba.js: wrapper not found!");
                return t
            },
            getContainer: function(t) {
                if (t || (t = document.body),
                !t)
                    throw new Error("Barba.js: DOM not ready!");
                var e = this.parseContainer(t);
                if (e && e.jquery && (e = e[0]),
                !e)
                    throw new Error("Barba.js: no container found");
                return e
            },
            getNamespace: function(t) {
                return t && t.dataset ? t.dataset[this.dataNamespace] : t ? t.getAttribute("data-" + this.dataNamespace) : null
            },
            putContainer: function(t) {
                t.style.visibility = "hidden",
                this.getWrapper().appendChild(t)
            },
            parseContainer: function(t) {
                return t.querySelector("." + this.containerClass)
            }
        };
        t.exports = i
    }
    , function(t, e, i) {
        var r = i(5)
          , s = i(10)
          , n = {
            ignoreClassLink: "no-barba-prefetch",
            init: function() {
                if (!window.history.pushState)
                    return !1;
                document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)),
                document.body.addEventListener("touchstart", this.onLinkEnter.bind(this))
            },
            onLinkEnter: function(t) {
                for (var e = t.target; e && !s.getHref(e); )
                    e = e.parentNode;
                if (e && !e.classList.contains(this.ignoreClassLink)) {
                    var i = s.getHref(e);
                    if (s.preventCheck(t, e) && !s.Cache.get(i)) {
                        var n = r.xhr(i);
                        s.Cache.set(i, n)
                    }
                }
            }
        };
        t.exports = n
    }
    ])
}),
function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return t.svg4everybody = e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.svg4everybody = e()
}(this, function() {
    function m(t, e, i) {
        if (i) {
            var n = document.createDocumentFragment()
              , r = !e.hasAttribute("viewBox") && i.getAttribute("viewBox");
            r && e.setAttribute("viewBox", r);
            for (var s = i.cloneNode(!0); s.childNodes.length; )
                n.appendChild(s.firstChild);
            t.appendChild(n)
        }
    }
    function g(n) {
        n.onreadystatechange = function() {
            if (4 === n.readyState) {
                var i = n._cachedDocument;
                i || ((i = n._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = n.responseText,
                n._cachedTarget = {}),
                n._embeds.splice(0).map(function(t) {
                    var e = n._cachedTarget[t.id];
                    e || (e = n._cachedTarget[t.id] = i.getElementById(t.id)),
                    m(t.parent, t.svg, e)
                })
            }
        }
        ,
        n.onreadystatechange()
    }
    function v(t) {
        for (var e = t; "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode); )
            ;
        return e
    }
    return function(t) {
        var u, c = Object(t), e = window.top !== window.self;
        u = "polyfill"in c ? c.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && e;
        var f = {}
          , p = window.requestAnimationFrame || setTimeout
          , d = document.getElementsByTagName("use")
          , _ = 0;
        u && function t() {
            for (var e = 0; e < d.length; ) {
                var i = d[e]
                  , n = i.parentNode
                  , r = v(n)
                  , s = i.getAttribute("xlink:href") || i.getAttribute("href");
                if (!s && c.attributeName && (s = i.getAttribute(c.attributeName)),
                r && s) {
                    if (u)
                        if (!c.validate || c.validate(s, r, i)) {
                            n.removeChild(i);
                            var o = s.split("#")
                              , a = o.shift()
                              , l = o.join("#");
                            if (a.length) {
                                var h = f[a];
                                h || ((h = f[a] = new XMLHttpRequest).open("GET", a),
                                h.send(),
                                h._embeds = []),
                                h._embeds.push({
                                    parent: n,
                                    svg: r,
                                    id: l
                                }),
                                g(h)
                            } else
                                m(n, r, document.getElementById(l))
                        } else
                            ++e,
                            ++_
                } else
                    ++e
            }
            (!d.length || 0 < d.length - _) && p(t, 67)
        }()
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(function() {
        return t.is = e()
    }) : "object" == typeof exports ? module.exports = e() : t.is = e()
}(this, function() {
    var s = {
        VERSION: "0.8.0",
        not: {},
        all: {},
        any: {}
    }
      , n = Object.prototype.toString
      , i = Array.prototype.slice
      , r = Object.prototype.hasOwnProperty;
    function o(t) {
        return function() {
            return !t.apply(null, i.call(arguments))
        }
    }
    function a(n) {
        return function() {
            for (var t = c(arguments), e = t.length, i = 0; i < e; i++)
                if (!n.call(null, t[i]))
                    return !1;
            return !0
        }
    }
    function l(n) {
        return function() {
            for (var t = c(arguments), e = t.length, i = 0; i < e; i++)
                if (n.call(null, t[i]))
                    return !0;
            return !1
        }
    }
    var h = {
        "<": function(t, e) {
            return t < e
        },
        "<=": function(t, e) {
            return t <= e
        },
        ">": function(t, e) {
            return e < t
        },
        ">=": function(t, e) {
            return e <= t
        }
    };
    function u(t, e) {
        var i = e + ""
          , n = +(i.match(/\d+/) || NaN)
          , r = i.match(/^[<>]=?|/)[0];
        return h[r] ? h[r](t, n) : t == n || n != n
    }
    function c(t) {
        var e = i.call(t);
        return 1 === e.length && s.array(e[0]) && (e = e[0]),
        e
    }
    s.arguments = function(t) {
        return "[object Arguments]" === n.call(t) || null != t && "object" == typeof t && "callee"in t
    }
    ,
    s.array = Array.isArray || function(t) {
        return "[object Array]" === n.call(t)
    }
    ,
    s.boolean = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" === n.call(t)
    }
    ,
    s.char = function(t) {
        return s.string(t) && 1 === t.length
    }
    ,
    s.date = function(t) {
        return "[object Date]" === n.call(t)
    }
    ,
    s.domNode = function(t) {
        return s.object(t) && 0 < t.nodeType
    }
    ,
    s.error = function(t) {
        return "[object Error]" === n.call(t)
    }
    ,
    s.function = function(t) {
        return "[object Function]" === n.call(t) || "function" == typeof t
    }
    ,
    s.json = function(t) {
        return "[object Object]" === n.call(t)
    }
    ,
    s.nan = function(t) {
        return t != t
    }
    ,
    s.null = function(t) {
        return null === t
    }
    ,
    s.number = function(t) {
        return s.not.nan(t) && "[object Number]" === n.call(t)
    }
    ,
    s.object = function(t) {
        return Object(t) === t
    }
    ,
    s.regexp = function(t) {
        return "[object RegExp]" === n.call(t)
    }
    ,
    s.sameType = function(t, e) {
        var i = n.call(t);
        return i === n.call(e) && ("[object Number]" !== i || (!s.any.nan(t, e) || s.all.nan(t, e)))
    }
    ,
    s.sameType.api = ["not"],
    s.string = function(t) {
        return "[object String]" === n.call(t)
    }
    ,
    s.undefined = function(t) {
        return void 0 === t
    }
    ,
    s.windowObject = function(t) {
        return null != t && "object" == typeof t && "setInterval"in t
    }
    ,
    s.empty = function(t) {
        if (s.object(t)) {
            var e = Object.getOwnPropertyNames(t).length;
            return !!(0 === e || 1 === e && s.array(t) || 2 === e && s.arguments(t))
        }
        return "" === t
    }
    ,
    s.existy = function(t) {
        return null != t
    }
    ,
    s.falsy = function(t) {
        return !t
    }
    ,
    s.truthy = o(s.falsy),
    s.above = function(t, e) {
        return s.all.number(t, e) && e < t
    }
    ,
    s.above.api = ["not"],
    s.decimal = function(t) {
        return s.number(t) && t % 1 != 0
    }
    ,
    s.equal = function(t, e) {
        return s.all.number(t, e) ? t === e && 1 / t == 1 / e : s.all.string(t, e) || s.all.regexp(t, e) ? "" + t == "" + e : !!s.all.boolean(t, e) && t === e
    }
    ,
    s.equal.api = ["not"],
    s.even = function(t) {
        return s.number(t) && t % 2 == 0
    }
    ,
    s.finite = isFinite || function(t) {
        return s.not.infinite(t) && s.not.nan(t)
    }
    ,
    s.infinite = function(t) {
        return t === 1 / 0 || t === -1 / 0
    }
    ,
    s.integer = function(t) {
        return s.number(t) && t % 1 == 0
    }
    ,
    s.negative = function(t) {
        return s.number(t) && t < 0
    }
    ,
    s.odd = function(t) {
        return s.number(t) && t % 2 == 1
    }
    ,
    s.positive = function(t) {
        return s.number(t) && 0 < t
    }
    ,
    s.under = function(t, e) {
        return s.all.number(t, e) && t < e
    }
    ,
    s.under.api = ["not"],
    s.within = function(t, e, i) {
        return s.all.number(t, e, i) && e < t && t < i
    }
    ,
    s.within.api = ["not"];
    var f = {
        affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
        alphaNumeric: /^[A-Za-z0-9]+$/,
        caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
        creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
        dateString: /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
        hexadecimal: /^(?:0x)?[0-9a-fA-F]+$/,
        hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
        ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
        ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
        nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,
        timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
        ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
        url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
        usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
    };
    function t(e, i) {
        s[e] = function(t) {
            return i[e].test(t)
        }
    }
    for (var e in f)
        f.hasOwnProperty(e) && t(e, f);
    s.ip = function(t) {
        return s.ipv4(t) || s.ipv6(t)
    }
    ,
    s.capitalized = function(t) {
        if (s.not.string(t))
            return !1;
        for (var e = t.split(" "), i = 0; i < e.length; i++) {
            var n = e[i];
            if (n.length) {
                var r = n.charAt(0);
                if (r !== r.toUpperCase())
                    return !1
            }
        }
        return !0
    }
    ,
    s.endWith = function(t, e) {
        if (s.not.string(t))
            return !1;
        e += "";
        var i = t.length - e.length;
        return 0 <= i && t.indexOf(e, i) === i
    }
    ,
    s.endWith.api = ["not"],
    s.include = function(t, e) {
        return -1 < t.indexOf(e)
    }
    ,
    s.include.api = ["not"],
    s.lowerCase = function(t) {
        return s.string(t) && t === t.toLowerCase()
    }
    ,
    s.palindrome = function(t) {
        if (s.not.string(t))
            return !1;
        for (var e = (t = t.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase()).length - 1, i = 0, n = Math.floor(e / 2); i <= n; i++)
            if (t.charAt(i) !== t.charAt(e - i))
                return !1;
        return !0
    }
    ,
    s.space = function(t) {
        if (s.not.char(t))
            return !1;
        var e = t.charCodeAt(0);
        return 8 < e && e < 14 || 32 === e
    }
    ,
    s.startWith = function(t, e) {
        return s.string(t) && 0 === t.indexOf(e)
    }
    ,
    s.startWith.api = ["not"],
    s.upperCase = function(t) {
        return s.string(t) && t === t.toUpperCase()
    }
    ;
    var p = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
      , d = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    s.day = function(t, e) {
        return s.date(t) && e.toLowerCase() === p[t.getDay()]
    }
    ,
    s.day.api = ["not"],
    s.dayLightSavingTime = function(t) {
        var e = new Date(t.getFullYear(),0,1)
          , i = new Date(t.getFullYear(),6,1)
          , n = Math.max(e.getTimezoneOffset(), i.getTimezoneOffset());
        return t.getTimezoneOffset() < n
    }
    ,
    s.future = function(t) {
        var e = new Date;
        return s.date(t) && t.getTime() > e.getTime()
    }
    ,
    s.inDateRange = function(t, e, i) {
        if (s.not.date(t) || s.not.date(e) || s.not.date(i))
            return !1;
        var n = t.getTime();
        return n > e.getTime() && n < i.getTime()
    }
    ,
    s.inDateRange.api = ["not"],
    s.inLastMonth = function(t) {
        return s.inDateRange(t, new Date((new Date).setMonth((new Date).getMonth() - 1)), new Date)
    }
    ,
    s.inLastWeek = function(t) {
        return s.inDateRange(t, new Date((new Date).setDate((new Date).getDate() - 7)), new Date)
    }
    ,
    s.inLastYear = function(t) {
        return s.inDateRange(t, new Date((new Date).setFullYear((new Date).getFullYear() - 1)), new Date)
    }
    ,
    s.inNextMonth = function(t) {
        return s.inDateRange(t, new Date, new Date((new Date).setMonth((new Date).getMonth() + 1)))
    }
    ,
    s.inNextWeek = function(t) {
        return s.inDateRange(t, new Date, new Date((new Date).setDate((new Date).getDate() + 7)))
    }
    ,
    s.inNextYear = function(t) {
        return s.inDateRange(t, new Date, new Date((new Date).setFullYear((new Date).getFullYear() + 1)))
    }
    ,
    s.leapYear = function(t) {
        return s.number(t) && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0)
    }
    ,
    s.month = function(t, e) {
        return s.date(t) && e.toLowerCase() === d[t.getMonth()]
    }
    ,
    s.month.api = ["not"],
    s.past = function(t) {
        var e = new Date;
        return s.date(t) && t.getTime() < e.getTime()
    }
    ,
    s.quarterOfYear = function(t, e) {
        return s.date(t) && s.number(e) && e === Math.floor((t.getMonth() + 3) / 3)
    }
    ,
    s.quarterOfYear.api = ["not"],
    s.today = function(t) {
        var e = (new Date).toDateString();
        return s.date(t) && t.toDateString() === e
    }
    ,
    s.tomorrow = function(t) {
        var e = new Date
          , i = new Date(e.setDate(e.getDate() + 1)).toDateString();
        return s.date(t) && t.toDateString() === i
    }
    ,
    s.weekend = function(t) {
        return s.date(t) && (6 === t.getDay() || 0 === t.getDay())
    }
    ,
    s.weekday = o(s.weekend),
    s.year = function(t, e) {
        return s.date(t) && s.number(e) && e === t.getFullYear()
    }
    ,
    s.year.api = ["not"],
    s.yesterday = function(t) {
        var e = new Date
          , i = new Date(e.setDate(e.getDate() - 1)).toDateString();
        return s.date(t) && t.toDateString() === i
    }
    ;
    var _ = s.windowObject("object" == typeof global && global) && global
      , m = s.windowObject("object" == typeof self && self) && self
      , g = s.windowObject("object" == typeof this && this) && this
      , v = _ || m || g || Function("return this")()
      , y = m && m.document
      , x = v.is
      , T = m && m.navigator
      , b = (T && T.appVersion || "").toLowerCase()
      , w = (T && T.userAgent || "").toLowerCase()
      , P = (T && T.vendor || "").toLowerCase();
    return s.android = function() {
        return /android/.test(w)
    }
    ,
    s.android.api = ["not"],
    s.androidPhone = function() {
        return /android/.test(w) && /mobile/.test(w)
    }
    ,
    s.androidPhone.api = ["not"],
    s.androidTablet = function() {
        return /android/.test(w) && !/mobile/.test(w)
    }
    ,
    s.androidTablet.api = ["not"],
    s.blackberry = function() {
        return /blackberry/.test(w) || /bb10/.test(w)
    }
    ,
    s.blackberry.api = ["not"],
    s.chrome = function(t) {
        var e = /google inc/.test(P) ? w.match(/(?:chrome|crios)\/(\d+)/) : null;
        return null !== e && u(e[1], t)
    }
    ,
    s.chrome.api = ["not"],
    s.desktop = function() {
        return s.not.mobile() && s.not.tablet()
    }
    ,
    s.desktop.api = ["not"],
    s.edge = function(t) {
        var e = w.match(/edge\/(\d+)/);
        return null !== e && u(e[1], t)
    }
    ,
    s.edge.api = ["not"],
    s.firefox = function(t) {
        var e = w.match(/(?:firefox|fxios)\/(\d+)/);
        return null !== e && u(e[1], t)
    }
    ,
    s.firefox.api = ["not"],
    s.ie = function(t) {
        var e = w.match(/(?:msie |trident.+?; rv:)(\d+)/);
        return null !== e && u(e[1], t)
    }
    ,
    s.ie.api = ["not"],
    s.ios = function() {
        return s.iphone() || s.ipad() || s.ipod()
    }
    ,
    s.ios.api = ["not"],
    s.ipad = function(t) {
        var e = w.match(/ipad.+?os (\d+)/);
        return null !== e && u(e[1], t)
    }
    ,
    s.ipad.api = ["not"],
    s.iphone = function(t) {
        var e = w.match(/iphone(?:.+?os (\d+))?/);
        return null !== e && u(e[1] || 1, t)
    }
    ,
    s.iphone.api = ["not"],
    s.ipod = function(t) {
        var e = w.match(/ipod.+?os (\d+)/);
        return null !== e && u(e[1], t)
    }
    ,
    s.ipod.api = ["not"],
    s.linux = function() {
        return /linux/.test(b)
    }
    ,
    s.linux.api = ["not"],
    s.mac = function() {
        return /mac/.test(b)
    }
    ,
    s.mac.api = ["not"],
    s.mobile = function() {
        return s.iphone() || s.ipod() || s.androidPhone() || s.blackberry() || s.windowsPhone()
    }
    ,
    s.mobile.api = ["not"],
    s.offline = o(s.online),
    s.offline.api = ["not"],
    s.online = function() {
        return !T || !0 === T.onLine
    }
    ,
    s.online.api = ["not"],
    s.opera = function(t) {
        var e = w.match(/(?:^opera.+?version|opr)\/(\d+)/);
        return null !== e && u(e[1], t)
    }
    ,
    s.opera.api = ["not"],
    s.phantom = function(t) {
        var e = w.match(/phantomjs\/(\d+)/);
        return null !== e && u(e[1], t)
    }
    ,
    s.phantom.api = ["not"],
    s.safari = function(t) {
        var e = w.match(/version\/(\d+).+?safari/);
        return null !== e && u(e[1], t)
    }
    ,
    s.safari.api = ["not"],
    s.tablet = function() {
        return s.ipad() || s.androidTablet() || s.windowsTablet()
    }
    ,
    s.tablet.api = ["not"],
    s.touchDevice = function() {
        return !!y && ("ontouchstart"in m || "DocumentTouch"in m && y instanceof DocumentTouch)
    }
    ,
    s.touchDevice.api = ["not"],
    s.windows = function() {
        return /win/.test(b)
    }
    ,
    s.windows.api = ["not"],
    s.windowsPhone = function() {
        return s.windows() && /phone/.test(w)
    }
    ,
    s.windowsPhone.api = ["not"],
    s.windowsTablet = function() {
        return s.windows() && s.not.windowsPhone() && /touch/.test(w)
    }
    ,
    s.windowsTablet.api = ["not"],
    s.propertyCount = function(t, e) {
        if (s.not.object(t) || s.not.number(e))
            return !1;
        var i = 0;
        for (var n in t)
            if (r.call(t, n) && ++i > e)
                return !1;
        return i === e
    }
    ,
    s.propertyCount.api = ["not"],
    s.propertyDefined = function(t, e) {
        return s.object(t) && s.string(e) && e in t
    }
    ,
    s.propertyDefined.api = ["not"],
    s.inArray = function(t, e) {
        if (s.not.array(e))
            return !1;
        for (var i = 0; i < e.length; i++)
            if (e[i] === t)
                return !0;
        return !1
    }
    ,
    s.inArray.api = ["not"],
    s.sorted = function(t, e) {
        if (s.not.array(t))
            return !1;
        for (var i = h[e] || h[">="], n = 1; n < t.length; n++)
            if (!i(t[n], t[n - 1]))
                return !1;
        return !0
    }
    ,
    function() {
        var t = s;
        for (var e in t)
            if (r.call(t, e) && s.function(t[e]))
                for (var i = t[e].api || ["not", "all", "any"], n = 0; n < i.length; n++)
                    "not" === i[n] && (s.not[e] = o(s[e])),
                    "all" === i[n] && (s.all[e] = a(s[e])),
                    "any" === i[n] && (s.any[e] = l(s[e]))
    }(),
    s.setNamespace = function() {
        return v.is = x,
        this
    }
    ,
    s.setRegexp = function(t, e) {
        for (var i in f)
            r.call(f, i) && e === i && (f[i] = t)
    }
    ,
    s
});
