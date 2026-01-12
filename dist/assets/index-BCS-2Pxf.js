;(function () {
    const c = document.createElement('link').relList
    if (c && c.supports && c.supports('modulepreload')) return
    for (const h of document.querySelectorAll('link[rel="modulepreload"]')) f(h)
    new MutationObserver((h) => {
        for (const g of h)
            if (g.type === 'childList')
                for (const b of g.addedNodes)
                    b.tagName === 'LINK' && b.rel === 'modulepreload' && f(b)
    }).observe(document, { childList: !0, subtree: !0 })
    function o(h) {
        const g = {}
        return (
            h.integrity && (g.integrity = h.integrity),
            h.referrerPolicy && (g.referrerPolicy = h.referrerPolicy),
            h.crossOrigin === 'use-credentials'
                ? (g.credentials = 'include')
                : h.crossOrigin === 'anonymous'
                  ? (g.credentials = 'omit')
                  : (g.credentials = 'same-origin'),
            g
        )
    }
    function f(h) {
        if (h.ep) return
        h.ep = !0
        const g = o(h)
        fetch(h.href, g)
    }
})()
var Ef = { exports: {} },
    Mn = {}
var Kh
function V0() {
    if (Kh) return Mn
    Kh = 1
    var r = Symbol.for('react.transitional.element'),
        c = Symbol.for('react.fragment')
    function o(f, h, g) {
        var b = null
        if (
            (g !== void 0 && (b = '' + g),
            h.key !== void 0 && (b = '' + h.key),
            'key' in h)
        ) {
            g = {}
            for (var A in h) A !== 'key' && (g[A] = h[A])
        } else g = h
        return (
            (h = g.ref),
            {
                $$typeof: r,
                type: f,
                key: b,
                ref: h !== void 0 ? h : null,
                props: g,
            }
        )
    }
    return ((Mn.Fragment = c), (Mn.jsx = o), (Mn.jsxs = o), Mn)
}
var Jh
function K0() {
    return (Jh || ((Jh = 1), (Ef.exports = V0())), Ef.exports)
}
var $ = K0(),
    xf = { exports: {} },
    w = {}
var $h
function J0() {
    if ($h) return w
    $h = 1
    var r = Symbol.for('react.transitional.element'),
        c = Symbol.for('react.portal'),
        o = Symbol.for('react.fragment'),
        f = Symbol.for('react.strict_mode'),
        h = Symbol.for('react.profiler'),
        g = Symbol.for('react.consumer'),
        b = Symbol.for('react.context'),
        A = Symbol.for('react.forward_ref'),
        x = Symbol.for('react.suspense'),
        p = Symbol.for('react.memo'),
        U = Symbol.for('react.lazy'),
        N = Symbol.for('react.activity'),
        H = Symbol.iterator
    function Z(y) {
        return y === null || typeof y != 'object'
            ? null
            : ((y = (H && y[H]) || y['@@iterator']),
              typeof y == 'function' ? y : null)
    }
    var Q = {
            isMounted: function () {
                return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        at = Object.assign,
        wt = {}
    function Et(y, R, B) {
        ;((this.props = y),
            (this.context = R),
            (this.refs = wt),
            (this.updater = B || Q))
    }
    ;((Et.prototype.isReactComponent = {}),
        (Et.prototype.setState = function (y, R) {
            if (typeof y != 'object' && typeof y != 'function' && y != null)
                throw Error(
                    'takes an object of state variables to update or a function which returns an object of state variables.'
                )
            this.updater.enqueueSetState(this, y, R, 'setState')
        }),
        (Et.prototype.forceUpdate = function (y) {
            this.updater.enqueueForceUpdate(this, y, 'forceUpdate')
        }))
    function Vt() {}
    Vt.prototype = Et.prototype
    function zt(y, R, B) {
        ;((this.props = y),
            (this.context = R),
            (this.refs = wt),
            (this.updater = B || Q))
    }
    var jt = (zt.prototype = new Vt())
    ;((jt.constructor = zt),
        at(jt, Et.prototype),
        (jt.isPureReactComponent = !0))
    var ht = Array.isArray
    function lt() {}
    var X = { H: null, A: null, T: null, S: null },
        Yt = Object.prototype.hasOwnProperty
    function Kt(y, R, B) {
        var j = B.ref
        return {
            $$typeof: r,
            type: y,
            key: R,
            ref: j !== void 0 ? j : null,
            props: B,
        }
    }
    function Be(y, R) {
        return Kt(y.type, R, y.props)
    }
    function kt(y) {
        return typeof y == 'object' && y !== null && y.$$typeof === r
    }
    function Jt(y) {
        var R = { '=': '=0', ':': '=2' }
        return (
            '$' +
            y.replace(/[=:]/g, function (B) {
                return R[B]
            })
        )
    }
    var Ml = /\/+/g
    function qe(y, R) {
        return typeof y == 'object' && y !== null && y.key != null
            ? Jt('' + y.key)
            : R.toString(36)
    }
    function _e(y) {
        switch (y.status) {
            case 'fulfilled':
                return y.value
            case 'rejected':
                throw y.reason
            default:
                switch (
                    (typeof y.status == 'string'
                        ? y.then(lt, lt)
                        : ((y.status = 'pending'),
                          y.then(
                              function (R) {
                                  y.status === 'pending' &&
                                      ((y.status = 'fulfilled'), (y.value = R))
                              },
                              function (R) {
                                  y.status === 'pending' &&
                                      ((y.status = 'rejected'), (y.reason = R))
                              }
                          )),
                    y.status)
                ) {
                    case 'fulfilled':
                        return y.value
                    case 'rejected':
                        throw y.reason
                }
        }
        throw y
    }
    function O(y, R, B, j, V) {
        var W = typeof y
        ;(W === 'undefined' || W === 'boolean') && (y = null)
        var ct = !1
        if (y === null) ct = !0
        else
            switch (W) {
                case 'bigint':
                case 'string':
                case 'number':
                    ct = !0
                    break
                case 'object':
                    switch (y.$$typeof) {
                        case r:
                        case c:
                            ct = !0
                            break
                        case U:
                            return (
                                (ct = y._init),
                                O(ct(y._payload), R, B, j, V)
                            )
                    }
            }
        if (ct)
            return (
                (V = V(y)),
                (ct = j === '' ? '.' + qe(y, 0) : j),
                ht(V)
                    ? ((B = ''),
                      ct != null && (B = ct.replace(Ml, '$&/') + '/'),
                      O(V, R, B, '', function (Ha) {
                          return Ha
                      }))
                    : V != null &&
                      (kt(V) &&
                          (V = Be(
                              V,
                              B +
                                  (V.key == null || (y && y.key === V.key)
                                      ? ''
                                      : ('' + V.key).replace(Ml, '$&/') + '/') +
                                  ct
                          )),
                      R.push(V)),
                1
            )
        ct = 0
        var Wt = j === '' ? '.' : j + ':'
        if (ht(y))
            for (var Ot = 0; Ot < y.length; Ot++)
                ((j = y[Ot]), (W = Wt + qe(j, Ot)), (ct += O(j, R, B, W, V)))
        else if (((Ot = Z(y)), typeof Ot == 'function'))
            for (y = Ot.call(y), Ot = 0; !(j = y.next()).done; )
                ((j = j.value),
                    (W = Wt + qe(j, Ot++)),
                    (ct += O(j, R, B, W, V)))
        else if (W === 'object') {
            if (typeof y.then == 'function') return O(_e(y), R, B, j, V)
            throw (
                (R = String(y)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (R === '[object Object]'
                            ? 'object with keys {' +
                              Object.keys(y).join(', ') +
                              '}'
                            : R) +
                        '). If you meant to render a collection of children, use an array instead.'
                )
            )
        }
        return ct
    }
    function C(y, R, B) {
        if (y == null) return y
        var j = [],
            V = 0
        return (
            O(y, j, '', '', function (W) {
                return R.call(B, W, V++)
            }),
            j
        )
    }
    function L(y) {
        if (y._status === -1) {
            var R = y._result
            ;((R = R()),
                R.then(
                    function (B) {
                        ;(y._status === 0 || y._status === -1) &&
                            ((y._status = 1), (y._result = B))
                    },
                    function (B) {
                        ;(y._status === 0 || y._status === -1) &&
                            ((y._status = 2), (y._result = B))
                    }
                ),
                y._status === -1 && ((y._status = 0), (y._result = R)))
        }
        if (y._status === 1) return y._result.default
        throw y._result
    }
    var dt =
            typeof reportError == 'function'
                ? reportError
                : function (y) {
                      if (
                          typeof window == 'object' &&
                          typeof window.ErrorEvent == 'function'
                      ) {
                          var R = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  typeof y == 'object' &&
                                  y !== null &&
                                  typeof y.message == 'string'
                                      ? String(y.message)
                                      : String(y),
                              error: y,
                          })
                          if (!window.dispatchEvent(R)) return
                      } else if (
                          typeof process == 'object' &&
                          typeof process.emit == 'function'
                      ) {
                          process.emit('uncaughtException', y)
                          return
                      }
                      console.error(y)
                  },
        pt = {
            map: C,
            forEach: function (y, R, B) {
                C(
                    y,
                    function () {
                        R.apply(this, arguments)
                    },
                    B
                )
            },
            count: function (y) {
                var R = 0
                return (
                    C(y, function () {
                        R++
                    }),
                    R
                )
            },
            toArray: function (y) {
                return (
                    C(y, function (R) {
                        return R
                    }) || []
                )
            },
            only: function (y) {
                if (!kt(y))
                    throw Error(
                        'React.Children.only expected to receive a single React element child.'
                    )
                return y
            },
        }
    return (
        (w.Activity = N),
        (w.Children = pt),
        (w.Component = Et),
        (w.Fragment = o),
        (w.Profiler = h),
        (w.PureComponent = zt),
        (w.StrictMode = f),
        (w.Suspense = x),
        (w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
        (w.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (y) {
                return X.H.useMemoCache(y)
            },
        }),
        (w.cache = function (y) {
            return function () {
                return y.apply(null, arguments)
            }
        }),
        (w.cacheSignal = function () {
            return null
        }),
        (w.cloneElement = function (y, R, B) {
            if (y == null)
                throw Error(
                    'The argument must be a React element, but you passed ' +
                        y +
                        '.'
                )
            var j = at({}, y.props),
                V = y.key
            if (R != null)
                for (W in (R.key !== void 0 && (V = '' + R.key), R))
                    !Yt.call(R, W) ||
                        W === 'key' ||
                        W === '__self' ||
                        W === '__source' ||
                        (W === 'ref' && R.ref === void 0) ||
                        (j[W] = R[W])
            var W = arguments.length - 2
            if (W === 1) j.children = B
            else if (1 < W) {
                for (var ct = Array(W), Wt = 0; Wt < W; Wt++)
                    ct[Wt] = arguments[Wt + 2]
                j.children = ct
            }
            return Kt(y.type, V, j)
        }),
        (w.createContext = function (y) {
            return (
                (y = {
                    $$typeof: b,
                    _currentValue: y,
                    _currentValue2: y,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (y.Provider = y),
                (y.Consumer = { $$typeof: g, _context: y }),
                y
            )
        }),
        (w.createElement = function (y, R, B) {
            var j,
                V = {},
                W = null
            if (R != null)
                for (j in (R.key !== void 0 && (W = '' + R.key), R))
                    Yt.call(R, j) &&
                        j !== 'key' &&
                        j !== '__self' &&
                        j !== '__source' &&
                        (V[j] = R[j])
            var ct = arguments.length - 2
            if (ct === 1) V.children = B
            else if (1 < ct) {
                for (var Wt = Array(ct), Ot = 0; Ot < ct; Ot++)
                    Wt[Ot] = arguments[Ot + 2]
                V.children = Wt
            }
            if (y && y.defaultProps)
                for (j in ((ct = y.defaultProps), ct))
                    V[j] === void 0 && (V[j] = ct[j])
            return Kt(y, W, V)
        }),
        (w.createRef = function () {
            return { current: null }
        }),
        (w.forwardRef = function (y) {
            return { $$typeof: A, render: y }
        }),
        (w.isValidElement = kt),
        (w.lazy = function (y) {
            return {
                $$typeof: U,
                _payload: { _status: -1, _result: y },
                _init: L,
            }
        }),
        (w.memo = function (y, R) {
            return { $$typeof: p, type: y, compare: R === void 0 ? null : R }
        }),
        (w.startTransition = function (y) {
            var R = X.T,
                B = {}
            X.T = B
            try {
                var j = y(),
                    V = X.S
                ;(V !== null && V(B, j),
                    typeof j == 'object' &&
                        j !== null &&
                        typeof j.then == 'function' &&
                        j.then(lt, dt))
            } catch (W) {
                dt(W)
            } finally {
                ;(R !== null && B.types !== null && (R.types = B.types),
                    (X.T = R))
            }
        }),
        (w.unstable_useCacheRefresh = function () {
            return X.H.useCacheRefresh()
        }),
        (w.use = function (y) {
            return X.H.use(y)
        }),
        (w.useActionState = function (y, R, B) {
            return X.H.useActionState(y, R, B)
        }),
        (w.useCallback = function (y, R) {
            return X.H.useCallback(y, R)
        }),
        (w.useContext = function (y) {
            return X.H.useContext(y)
        }),
        (w.useDebugValue = function () {}),
        (w.useDeferredValue = function (y, R) {
            return X.H.useDeferredValue(y, R)
        }),
        (w.useEffect = function (y, R) {
            return X.H.useEffect(y, R)
        }),
        (w.useEffectEvent = function (y) {
            return X.H.useEffectEvent(y)
        }),
        (w.useId = function () {
            return X.H.useId()
        }),
        (w.useImperativeHandle = function (y, R, B) {
            return X.H.useImperativeHandle(y, R, B)
        }),
        (w.useInsertionEffect = function (y, R) {
            return X.H.useInsertionEffect(y, R)
        }),
        (w.useLayoutEffect = function (y, R) {
            return X.H.useLayoutEffect(y, R)
        }),
        (w.useMemo = function (y, R) {
            return X.H.useMemo(y, R)
        }),
        (w.useOptimistic = function (y, R) {
            return X.H.useOptimistic(y, R)
        }),
        (w.useReducer = function (y, R, B) {
            return X.H.useReducer(y, R, B)
        }),
        (w.useRef = function (y) {
            return X.H.useRef(y)
        }),
        (w.useState = function (y) {
            return X.H.useState(y)
        }),
        (w.useSyncExternalStore = function (y, R, B) {
            return X.H.useSyncExternalStore(y, R, B)
        }),
        (w.useTransition = function () {
            return X.H.useTransition()
        }),
        (w.version = '19.2.3'),
        w
    )
}
var Wh
function Bf() {
    return (Wh || ((Wh = 1), (xf.exports = J0())), xf.exports)
}
var bt = Bf(),
    _f = { exports: {} },
    Dn = {},
    Of = { exports: {} },
    Mf = {}
var Fh
function $0() {
    return (
        Fh ||
            ((Fh = 1),
            (function (r) {
                function c(O, C) {
                    var L = O.length
                    O.push(C)
                    t: for (; 0 < L; ) {
                        var dt = (L - 1) >>> 1,
                            pt = O[dt]
                        if (0 < h(pt, C)) ((O[dt] = C), (O[L] = pt), (L = dt))
                        else break t
                    }
                }
                function o(O) {
                    return O.length === 0 ? null : O[0]
                }
                function f(O) {
                    if (O.length === 0) return null
                    var C = O[0],
                        L = O.pop()
                    if (L !== C) {
                        O[0] = L
                        t: for (
                            var dt = 0, pt = O.length, y = pt >>> 1;
                            dt < y;
                        ) {
                            var R = 2 * (dt + 1) - 1,
                                B = O[R],
                                j = R + 1,
                                V = O[j]
                            if (0 > h(B, L))
                                j < pt && 0 > h(V, B)
                                    ? ((O[dt] = V), (O[j] = L), (dt = j))
                                    : ((O[dt] = B), (O[R] = L), (dt = R))
                            else if (j < pt && 0 > h(V, L))
                                ((O[dt] = V), (O[j] = L), (dt = j))
                            else break t
                        }
                    }
                    return C
                }
                function h(O, C) {
                    var L = O.sortIndex - C.sortIndex
                    return L !== 0 ? L : O.id - C.id
                }
                if (
                    ((r.unstable_now = void 0),
                    typeof performance == 'object' &&
                        typeof performance.now == 'function')
                ) {
                    var g = performance
                    r.unstable_now = function () {
                        return g.now()
                    }
                } else {
                    var b = Date,
                        A = b.now()
                    r.unstable_now = function () {
                        return b.now() - A
                    }
                }
                var x = [],
                    p = [],
                    U = 1,
                    N = null,
                    H = 3,
                    Z = !1,
                    Q = !1,
                    at = !1,
                    wt = !1,
                    Et = typeof setTimeout == 'function' ? setTimeout : null,
                    Vt =
                        typeof clearTimeout == 'function' ? clearTimeout : null,
                    zt = typeof setImmediate < 'u' ? setImmediate : null
                function jt(O) {
                    for (var C = o(p); C !== null; ) {
                        if (C.callback === null) f(p)
                        else if (C.startTime <= O)
                            (f(p), (C.sortIndex = C.expirationTime), c(x, C))
                        else break
                        C = o(p)
                    }
                }
                function ht(O) {
                    if (((at = !1), jt(O), !Q))
                        if (o(x) !== null) ((Q = !0), lt || ((lt = !0), Jt()))
                        else {
                            var C = o(p)
                            C !== null && _e(ht, C.startTime - O)
                        }
                }
                var lt = !1,
                    X = -1,
                    Yt = 5,
                    Kt = -1
                function Be() {
                    return wt ? !0 : !(r.unstable_now() - Kt < Yt)
                }
                function kt() {
                    if (((wt = !1), lt)) {
                        var O = r.unstable_now()
                        Kt = O
                        var C = !0
                        try {
                            t: {
                                ;((Q = !1),
                                    at && ((at = !1), Vt(X), (X = -1)),
                                    (Z = !0))
                                var L = H
                                try {
                                    e: {
                                        for (
                                            jt(O), N = o(x);
                                            N !== null &&
                                            !(N.expirationTime > O && Be());
                                        ) {
                                            var dt = N.callback
                                            if (typeof dt == 'function') {
                                                ;((N.callback = null),
                                                    (H = N.priorityLevel))
                                                var pt = dt(
                                                    N.expirationTime <= O
                                                )
                                                if (
                                                    ((O = r.unstable_now()),
                                                    typeof pt == 'function')
                                                ) {
                                                    ;((N.callback = pt),
                                                        jt(O),
                                                        (C = !0))
                                                    break e
                                                }
                                                ;(N === o(x) && f(x), jt(O))
                                            } else f(x)
                                            N = o(x)
                                        }
                                        if (N !== null) C = !0
                                        else {
                                            var y = o(p)
                                            ;(y !== null &&
                                                _e(ht, y.startTime - O),
                                                (C = !1))
                                        }
                                    }
                                    break t
                                } finally {
                                    ;((N = null), (H = L), (Z = !1))
                                }
                                C = void 0
                            }
                        } finally {
                            C ? Jt() : (lt = !1)
                        }
                    }
                }
                var Jt
                if (typeof zt == 'function')
                    Jt = function () {
                        zt(kt)
                    }
                else if (typeof MessageChannel < 'u') {
                    var Ml = new MessageChannel(),
                        qe = Ml.port2
                    ;((Ml.port1.onmessage = kt),
                        (Jt = function () {
                            qe.postMessage(null)
                        }))
                } else
                    Jt = function () {
                        Et(kt, 0)
                    }
                function _e(O, C) {
                    X = Et(function () {
                        O(r.unstable_now())
                    }, C)
                }
                ;((r.unstable_IdlePriority = 5),
                    (r.unstable_ImmediatePriority = 1),
                    (r.unstable_LowPriority = 4),
                    (r.unstable_NormalPriority = 3),
                    (r.unstable_Profiling = null),
                    (r.unstable_UserBlockingPriority = 2),
                    (r.unstable_cancelCallback = function (O) {
                        O.callback = null
                    }),
                    (r.unstable_forceFrameRate = function (O) {
                        0 > O || 125 < O
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                              )
                            : (Yt = 0 < O ? Math.floor(1e3 / O) : 5)
                    }),
                    (r.unstable_getCurrentPriorityLevel = function () {
                        return H
                    }),
                    (r.unstable_next = function (O) {
                        switch (H) {
                            case 1:
                            case 2:
                            case 3:
                                var C = 3
                                break
                            default:
                                C = H
                        }
                        var L = H
                        H = C
                        try {
                            return O()
                        } finally {
                            H = L
                        }
                    }),
                    (r.unstable_requestPaint = function () {
                        wt = !0
                    }),
                    (r.unstable_runWithPriority = function (O, C) {
                        switch (O) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break
                            default:
                                O = 3
                        }
                        var L = H
                        H = O
                        try {
                            return C()
                        } finally {
                            H = L
                        }
                    }),
                    (r.unstable_scheduleCallback = function (O, C, L) {
                        var dt = r.unstable_now()
                        switch (
                            (typeof L == 'object' && L !== null
                                ? ((L = L.delay),
                                  (L =
                                      typeof L == 'number' && 0 < L
                                          ? dt + L
                                          : dt))
                                : (L = dt),
                            O)
                        ) {
                            case 1:
                                var pt = -1
                                break
                            case 2:
                                pt = 250
                                break
                            case 5:
                                pt = 1073741823
                                break
                            case 4:
                                pt = 1e4
                                break
                            default:
                                pt = 5e3
                        }
                        return (
                            (pt = L + pt),
                            (O = {
                                id: U++,
                                callback: C,
                                priorityLevel: O,
                                startTime: L,
                                expirationTime: pt,
                                sortIndex: -1,
                            }),
                            L > dt
                                ? ((O.sortIndex = L),
                                  c(p, O),
                                  o(x) === null &&
                                      O === o(p) &&
                                      (at ? (Vt(X), (X = -1)) : (at = !0),
                                      _e(ht, L - dt)))
                                : ((O.sortIndex = pt),
                                  c(x, O),
                                  Q ||
                                      Z ||
                                      ((Q = !0), lt || ((lt = !0), Jt()))),
                            O
                        )
                    }),
                    (r.unstable_shouldYield = Be),
                    (r.unstable_wrapCallback = function (O) {
                        var C = H
                        return function () {
                            var L = H
                            H = C
                            try {
                                return O.apply(this, arguments)
                            } finally {
                                H = L
                            }
                        }
                    }))
            })(Mf)),
        Mf
    )
}
var Ih
function W0() {
    return (Ih || ((Ih = 1), (Of.exports = $0())), Of.exports)
}
var Df = { exports: {} },
    $t = {}
var Ph
function F0() {
    if (Ph) return $t
    Ph = 1
    var r = Bf()
    function c(x) {
        var p = 'https://react.dev/errors/' + x
        if (1 < arguments.length) {
            p += '?args[]=' + encodeURIComponent(arguments[1])
            for (var U = 2; U < arguments.length; U++)
                p += '&args[]=' + encodeURIComponent(arguments[U])
        }
        return (
            'Minified React error #' +
            x +
            '; visit ' +
            p +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        )
    }
    function o() {}
    var f = {
            d: {
                f: o,
                r: function () {
                    throw Error(c(522))
                },
                D: o,
                C: o,
                L: o,
                m: o,
                X: o,
                S: o,
                M: o,
            },
            p: 0,
            findDOMNode: null,
        },
        h = Symbol.for('react.portal')
    function g(x, p, U) {
        var N =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null
        return {
            $$typeof: h,
            key: N == null ? null : '' + N,
            children: x,
            containerInfo: p,
            implementation: U,
        }
    }
    var b = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    function A(x, p) {
        if (x === 'font') return ''
        if (typeof p == 'string') return p === 'use-credentials' ? p : ''
    }
    return (
        ($t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
        ($t.createPortal = function (x, p) {
            var U =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null
            if (
                !p ||
                (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
            )
                throw Error(c(299))
            return g(x, p, null, U)
        }),
        ($t.flushSync = function (x) {
            var p = b.T,
                U = f.p
            try {
                if (((b.T = null), (f.p = 2), x)) return x()
            } finally {
                ;((b.T = p), (f.p = U), f.d.f())
            }
        }),
        ($t.preconnect = function (x, p) {
            typeof x == 'string' &&
                (p
                    ? ((p = p.crossOrigin),
                      (p =
                          typeof p == 'string'
                              ? p === 'use-credentials'
                                  ? p
                                  : ''
                              : void 0))
                    : (p = null),
                f.d.C(x, p))
        }),
        ($t.prefetchDNS = function (x) {
            typeof x == 'string' && f.d.D(x)
        }),
        ($t.preinit = function (x, p) {
            if (typeof x == 'string' && p && typeof p.as == 'string') {
                var U = p.as,
                    N = A(U, p.crossOrigin),
                    H = typeof p.integrity == 'string' ? p.integrity : void 0,
                    Z =
                        typeof p.fetchPriority == 'string'
                            ? p.fetchPriority
                            : void 0
                U === 'style'
                    ? f.d.S(
                          x,
                          typeof p.precedence == 'string'
                              ? p.precedence
                              : void 0,
                          { crossOrigin: N, integrity: H, fetchPriority: Z }
                      )
                    : U === 'script' &&
                      f.d.X(x, {
                          crossOrigin: N,
                          integrity: H,
                          fetchPriority: Z,
                          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
                      })
            }
        }),
        ($t.preinitModule = function (x, p) {
            if (typeof x == 'string')
                if (typeof p == 'object' && p !== null) {
                    if (p.as == null || p.as === 'script') {
                        var U = A(p.as, p.crossOrigin)
                        f.d.M(x, {
                            crossOrigin: U,
                            integrity:
                                typeof p.integrity == 'string'
                                    ? p.integrity
                                    : void 0,
                            nonce:
                                typeof p.nonce == 'string' ? p.nonce : void 0,
                        })
                    }
                } else p == null && f.d.M(x)
        }),
        ($t.preload = function (x, p) {
            if (
                typeof x == 'string' &&
                typeof p == 'object' &&
                p !== null &&
                typeof p.as == 'string'
            ) {
                var U = p.as,
                    N = A(U, p.crossOrigin)
                f.d.L(x, U, {
                    crossOrigin: N,
                    integrity:
                        typeof p.integrity == 'string' ? p.integrity : void 0,
                    nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
                    type: typeof p.type == 'string' ? p.type : void 0,
                    fetchPriority:
                        typeof p.fetchPriority == 'string'
                            ? p.fetchPriority
                            : void 0,
                    referrerPolicy:
                        typeof p.referrerPolicy == 'string'
                            ? p.referrerPolicy
                            : void 0,
                    imageSrcSet:
                        typeof p.imageSrcSet == 'string'
                            ? p.imageSrcSet
                            : void 0,
                    imageSizes:
                        typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
                    media: typeof p.media == 'string' ? p.media : void 0,
                })
            }
        }),
        ($t.preloadModule = function (x, p) {
            if (typeof x == 'string')
                if (p) {
                    var U = A(p.as, p.crossOrigin)
                    f.d.m(x, {
                        as:
                            typeof p.as == 'string' && p.as !== 'script'
                                ? p.as
                                : void 0,
                        crossOrigin: U,
                        integrity:
                            typeof p.integrity == 'string'
                                ? p.integrity
                                : void 0,
                    })
                } else f.d.m(x)
        }),
        ($t.requestFormReset = function (x) {
            f.d.r(x)
        }),
        ($t.unstable_batchedUpdates = function (x, p) {
            return x(p)
        }),
        ($t.useFormState = function (x, p, U) {
            return b.H.useFormState(x, p, U)
        }),
        ($t.useFormStatus = function () {
            return b.H.useHostTransitionStatus()
        }),
        ($t.version = '19.2.3'),
        $t
    )
}
var td
function I0() {
    if (td) return Df.exports
    td = 1
    function r() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (c) {
                console.error(c)
            }
    }
    return (r(), (Df.exports = F0()), Df.exports)
}
var ed
function P0() {
    if (ed) return Dn
    ed = 1
    var r = W0(),
        c = Bf(),
        o = I0()
    function f(t) {
        var e = 'https://react.dev/errors/' + t
        if (1 < arguments.length) {
            e += '?args[]=' + encodeURIComponent(arguments[1])
            for (var l = 2; l < arguments.length; l++)
                e += '&args[]=' + encodeURIComponent(arguments[l])
        }
        return (
            'Minified React error #' +
            t +
            '; visit ' +
            e +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        )
    }
    function h(t) {
        return !(
            !t ||
            (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
        )
    }
    function g(t) {
        var e = t,
            l = t
        if (t.alternate) for (; e.return; ) e = e.return
        else {
            t = e
            do
                ((e = t),
                    (e.flags & 4098) !== 0 && (l = e.return),
                    (t = e.return))
            while (t)
        }
        return e.tag === 3 ? l : null
    }
    function b(t) {
        if (t.tag === 13) {
            var e = t.memoizedState
            if (
                (e === null &&
                    ((t = t.alternate), t !== null && (e = t.memoizedState)),
                e !== null)
            )
                return e.dehydrated
        }
        return null
    }
    function A(t) {
        if (t.tag === 31) {
            var e = t.memoizedState
            if (
                (e === null &&
                    ((t = t.alternate), t !== null && (e = t.memoizedState)),
                e !== null)
            )
                return e.dehydrated
        }
        return null
    }
    function x(t) {
        if (g(t) !== t) throw Error(f(188))
    }
    function p(t) {
        var e = t.alternate
        if (!e) {
            if (((e = g(t)), e === null)) throw Error(f(188))
            return e !== t ? null : t
        }
        for (var l = t, a = e; ; ) {
            var n = l.return
            if (n === null) break
            var u = n.alternate
            if (u === null) {
                if (((a = n.return), a !== null)) {
                    l = a
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u; ) {
                    if (u === l) return (x(n), t)
                    if (u === a) return (x(n), e)
                    u = u.sibling
                }
                throw Error(f(188))
            }
            if (l.return !== a.return) ((l = n), (a = u))
            else {
                for (var i = !1, s = n.child; s; ) {
                    if (s === l) {
                        ;((i = !0), (l = n), (a = u))
                        break
                    }
                    if (s === a) {
                        ;((i = !0), (a = n), (l = u))
                        break
                    }
                    s = s.sibling
                }
                if (!i) {
                    for (s = u.child; s; ) {
                        if (s === l) {
                            ;((i = !0), (l = u), (a = n))
                            break
                        }
                        if (s === a) {
                            ;((i = !0), (a = u), (l = n))
                            break
                        }
                        s = s.sibling
                    }
                    if (!i) throw Error(f(189))
                }
            }
            if (l.alternate !== a) throw Error(f(190))
        }
        if (l.tag !== 3) throw Error(f(188))
        return l.stateNode.current === l ? t : e
    }
    function U(t) {
        var e = t.tag
        if (e === 5 || e === 26 || e === 27 || e === 6) return t
        for (t = t.child; t !== null; ) {
            if (((e = U(t)), e !== null)) return e
            t = t.sibling
        }
        return null
    }
    var N = Object.assign,
        H = Symbol.for('react.element'),
        Z = Symbol.for('react.transitional.element'),
        Q = Symbol.for('react.portal'),
        at = Symbol.for('react.fragment'),
        wt = Symbol.for('react.strict_mode'),
        Et = Symbol.for('react.profiler'),
        Vt = Symbol.for('react.consumer'),
        zt = Symbol.for('react.context'),
        jt = Symbol.for('react.forward_ref'),
        ht = Symbol.for('react.suspense'),
        lt = Symbol.for('react.suspense_list'),
        X = Symbol.for('react.memo'),
        Yt = Symbol.for('react.lazy'),
        Kt = Symbol.for('react.activity'),
        Be = Symbol.for('react.memo_cache_sentinel'),
        kt = Symbol.iterator
    function Jt(t) {
        return t === null || typeof t != 'object'
            ? null
            : ((t = (kt && t[kt]) || t['@@iterator']),
              typeof t == 'function' ? t : null)
    }
    var Ml = Symbol.for('react.client.reference')
    function qe(t) {
        if (t == null) return null
        if (typeof t == 'function')
            return t.$$typeof === Ml ? null : t.displayName || t.name || null
        if (typeof t == 'string') return t
        switch (t) {
            case at:
                return 'Fragment'
            case Et:
                return 'Profiler'
            case wt:
                return 'StrictMode'
            case ht:
                return 'Suspense'
            case lt:
                return 'SuspenseList'
            case Kt:
                return 'Activity'
        }
        if (typeof t == 'object')
            switch (t.$$typeof) {
                case Q:
                    return 'Portal'
                case zt:
                    return t.displayName || 'Context'
                case Vt:
                    return (t._context.displayName || 'Context') + '.Consumer'
                case jt:
                    var e = t.render
                    return (
                        (t = t.displayName),
                        t ||
                            ((t = e.displayName || e.name || ''),
                            (t =
                                t !== ''
                                    ? 'ForwardRef(' + t + ')'
                                    : 'ForwardRef')),
                        t
                    )
                case X:
                    return (
                        (e = t.displayName || null),
                        e !== null ? e : qe(t.type) || 'Memo'
                    )
                case Yt:
                    ;((e = t._payload), (t = t._init))
                    try {
                        return qe(t(e))
                    } catch {}
            }
        return null
    }
    var _e = Array.isArray,
        O = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        C = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        L = { pending: !1, data: null, method: null, action: null },
        dt = [],
        pt = -1
    function y(t) {
        return { current: t }
    }
    function R(t) {
        0 > pt || ((t.current = dt[pt]), (dt[pt] = null), pt--)
    }
    function B(t, e) {
        ;(pt++, (dt[pt] = t.current), (t.current = e))
    }
    var j = y(null),
        V = y(null),
        W = y(null),
        ct = y(null)
    function Wt(t, e) {
        switch ((B(W, e), B(V, t), B(j, null), e.nodeType)) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? yh(t) : 0
                break
            default:
                if (((t = e.tagName), (e = e.namespaceURI)))
                    ((e = yh(e)), (t = ph(e, t)))
                else
                    switch (t) {
                        case 'svg':
                            t = 1
                            break
                        case 'math':
                            t = 2
                            break
                        default:
                            t = 0
                    }
        }
        ;(R(j), B(j, t))
    }
    function Ot() {
        ;(R(j), R(V), R(W))
    }
    function Ha(t) {
        t.memoizedState !== null && B(ct, t)
        var e = j.current,
            l = ph(e, t.type)
        e !== l && (B(V, t), B(j, l))
    }
    function Hn(t) {
        ;(V.current === t && (R(j), R(V)),
            ct.current === t && (R(ct), (En._currentValue = L)))
    }
    var ui, wf
    function Dl(t) {
        if (ui === void 0)
            try {
                throw Error()
            } catch (l) {
                var e = l.stack.trim().match(/\n( *(at )?)/)
                ;((ui = (e && e[1]) || ''),
                    (wf =
                        -1 <
                        l.stack.indexOf(`
    at`)
                            ? ' (<anonymous>)'
                            : -1 < l.stack.indexOf('@')
                              ? '@unknown:0:0'
                              : ''))
            }
        return (
            `
` +
            ui +
            t +
            wf
        )
    }
    var ii = !1
    function ci(t, e) {
        if (!t || ii) return ''
        ii = !0
        var l = Error.prepareStackTrace
        Error.prepareStackTrace = void 0
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (e) {
                            var D = function () {
                                throw Error()
                            }
                            if (
                                (Object.defineProperty(D.prototype, 'props', {
                                    set: function () {
                                        throw Error()
                                    },
                                }),
                                typeof Reflect == 'object' && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(D, [])
                                } catch (E) {
                                    var z = E
                                }
                                Reflect.construct(t, [], D)
                            } else {
                                try {
                                    D.call()
                                } catch (E) {
                                    z = E
                                }
                                t.call(D.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (E) {
                                z = E
                            }
                            ;(D = t()) &&
                                typeof D.catch == 'function' &&
                                D.catch(function () {})
                        }
                    } catch (E) {
                        if (E && z && typeof E.stack == 'string')
                            return [E.stack, z.stack]
                    }
                    return [null, null]
                },
            }
            a.DetermineComponentFrameRoot.displayName =
                'DetermineComponentFrameRoot'
            var n = Object.getOwnPropertyDescriptor(
                a.DetermineComponentFrameRoot,
                'name'
            )
            n &&
                n.configurable &&
                Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
                    value: 'DetermineComponentFrameRoot',
                })
            var u = a.DetermineComponentFrameRoot(),
                i = u[0],
                s = u[1]
            if (i && s) {
                var d = i.split(`
`),
                    T = s.split(`
`)
                for (
                    n = a = 0;
                    a < d.length &&
                    !d[a].includes('DetermineComponentFrameRoot');
                )
                    a++
                for (
                    ;
                    n < T.length &&
                    !T[n].includes('DetermineComponentFrameRoot');
                )
                    n++
                if (a === d.length || n === T.length)
                    for (
                        a = d.length - 1, n = T.length - 1;
                        1 <= a && 0 <= n && d[a] !== T[n];
                    )
                        n--
                for (; 1 <= a && 0 <= n; a--, n--)
                    if (d[a] !== T[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if ((a--, n--, 0 > n || d[a] !== T[n])) {
                                    var _ =
                                        `
` + d[a].replace(' at new ', ' at ')
                                    return (
                                        t.displayName &&
                                            _.includes('<anonymous>') &&
                                            (_ = _.replace(
                                                '<anonymous>',
                                                t.displayName
                                            )),
                                        _
                                    )
                                }
                            while (1 <= a && 0 <= n)
                        break
                    }
            }
        } finally {
            ;((ii = !1), (Error.prepareStackTrace = l))
        }
        return (l = t ? t.displayName || t.name : '') ? Dl(l) : ''
    }
    function Ad(t, e) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Dl(t.type)
            case 16:
                return Dl('Lazy')
            case 13:
                return t.child !== e && e !== null
                    ? Dl('Suspense Fallback')
                    : Dl('Suspense')
            case 19:
                return Dl('SuspenseList')
            case 0:
            case 15:
                return ci(t.type, !1)
            case 11:
                return ci(t.type.render, !1)
            case 1:
                return ci(t.type, !0)
            case 31:
                return Dl('Activity')
            default:
                return ''
        }
    }
    function Vf(t) {
        try {
            var e = '',
                l = null
            do ((e += Ad(t, l)), (l = t), (t = t.return))
            while (t)
            return e
        } catch (a) {
            return (
                `
Error generating stack: ` +
                a.message +
                `
` +
                a.stack
            )
        }
    }
    var fi = Object.prototype.hasOwnProperty,
        si = r.unstable_scheduleCallback,
        ri = r.unstable_cancelCallback,
        Ed = r.unstable_shouldYield,
        xd = r.unstable_requestPaint,
        ie = r.unstable_now,
        _d = r.unstable_getCurrentPriorityLevel,
        Kf = r.unstable_ImmediatePriority,
        Jf = r.unstable_UserBlockingPriority,
        Bn = r.unstable_NormalPriority,
        Od = r.unstable_LowPriority,
        $f = r.unstable_IdlePriority,
        Md = r.log,
        Dd = r.unstable_setDisableYieldValue,
        Ba = null,
        ce = null
    function al(t) {
        if (
            (typeof Md == 'function' && Dd(t),
            ce && typeof ce.setStrictMode == 'function')
        )
            try {
                ce.setStrictMode(Ba, t)
            } catch {}
    }
    var fe = Math.clz32 ? Math.clz32 : Nd,
        Rd = Math.log,
        Ud = Math.LN2
    function Nd(t) {
        return ((t >>>= 0), t === 0 ? 32 : (31 - ((Rd(t) / Ud) | 0)) | 0)
    }
    var qn = 256,
        jn = 262144,
        Yn = 4194304
    function Rl(t) {
        var e = t & 42
        if (e !== 0) return e
        switch (t & -t) {
            case 1:
                return 1
            case 2:
                return 2
            case 4:
                return 4
            case 8:
                return 8
            case 16:
                return 16
            case 32:
                return 32
            case 64:
                return 64
            case 128:
                return 128
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return t & 261888
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560
            case 67108864:
                return 67108864
            case 134217728:
                return 134217728
            case 268435456:
                return 268435456
            case 536870912:
                return 536870912
            case 1073741824:
                return 0
            default:
                return t
        }
    }
    function kn(t, e, l) {
        var a = t.pendingLanes
        if (a === 0) return 0
        var n = 0,
            u = t.suspendedLanes,
            i = t.pingedLanes
        t = t.warmLanes
        var s = a & 134217727
        return (
            s !== 0
                ? ((a = s & ~u),
                  a !== 0
                      ? (n = Rl(a))
                      : ((i &= s),
                        i !== 0
                            ? (n = Rl(i))
                            : l || ((l = s & ~t), l !== 0 && (n = Rl(l)))))
                : ((s = a & ~u),
                  s !== 0
                      ? (n = Rl(s))
                      : i !== 0
                        ? (n = Rl(i))
                        : l || ((l = a & ~t), l !== 0 && (n = Rl(l)))),
            n === 0
                ? 0
                : e !== 0 &&
                    e !== n &&
                    (e & u) === 0 &&
                    ((u = n & -n),
                    (l = e & -e),
                    u >= l || (u === 32 && (l & 4194048) !== 0))
                  ? e
                  : n
        )
    }
    function qa(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function Cd(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1
            default:
                return -1
        }
    }
    function Wf() {
        var t = Yn
        return ((Yn <<= 1), (Yn & 62914560) === 0 && (Yn = 4194304), t)
    }
    function oi(t) {
        for (var e = [], l = 0; 31 > l; l++) e.push(t)
        return e
    }
    function ja(t, e) {
        ;((t.pendingLanes |= e),
            e !== 268435456 &&
                ((t.suspendedLanes = 0),
                (t.pingedLanes = 0),
                (t.warmLanes = 0)))
    }
    function Hd(t, e, l, a, n, u) {
        var i = t.pendingLanes
        ;((t.pendingLanes = l),
            (t.suspendedLanes = 0),
            (t.pingedLanes = 0),
            (t.warmLanes = 0),
            (t.expiredLanes &= l),
            (t.entangledLanes &= l),
            (t.errorRecoveryDisabledLanes &= l),
            (t.shellSuspendCounter = 0))
        var s = t.entanglements,
            d = t.expirationTimes,
            T = t.hiddenUpdates
        for (l = i & ~l; 0 < l; ) {
            var _ = 31 - fe(l),
                D = 1 << _
            ;((s[_] = 0), (d[_] = -1))
            var z = T[_]
            if (z !== null)
                for (T[_] = null, _ = 0; _ < z.length; _++) {
                    var E = z[_]
                    E !== null && (E.lane &= -536870913)
                }
            l &= ~D
        }
        ;(a !== 0 && Ff(t, a, 0),
            u !== 0 &&
                n === 0 &&
                t.tag !== 0 &&
                (t.suspendedLanes |= u & ~(i & ~e)))
    }
    function Ff(t, e, l) {
        ;((t.pendingLanes |= e), (t.suspendedLanes &= ~e))
        var a = 31 - fe(e)
        ;((t.entangledLanes |= e),
            (t.entanglements[a] =
                t.entanglements[a] | 1073741824 | (l & 261930)))
    }
    function If(t, e) {
        var l = (t.entangledLanes |= e)
        for (t = t.entanglements; l; ) {
            var a = 31 - fe(l),
                n = 1 << a
            ;((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n))
        }
    }
    function Pf(t, e) {
        var l = e & -e
        return (
            (l = (l & 42) !== 0 ? 1 : hi(l)),
            (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
        )
    }
    function hi(t) {
        switch (t) {
            case 2:
                t = 1
                break
            case 8:
                t = 4
                break
            case 32:
                t = 16
                break
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128
                break
            case 268435456:
                t = 134217728
                break
            default:
                t = 0
        }
        return t
    }
    function di(t) {
        return (
            (t &= -t),
            2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
        )
    }
    function ts() {
        var t = C.p
        return t !== 0
            ? t
            : ((t = window.event), t === void 0 ? 32 : Gh(t.type))
    }
    function es(t, e) {
        var l = C.p
        try {
            return ((C.p = t), e())
        } finally {
            C.p = l
        }
    }
    var nl = Math.random().toString(36).slice(2),
        Gt = '__reactFiber$' + nl,
        Pt = '__reactProps$' + nl,
        Wl = '__reactContainer$' + nl,
        mi = '__reactEvents$' + nl,
        Bd = '__reactListeners$' + nl,
        qd = '__reactHandles$' + nl,
        ls = '__reactResources$' + nl,
        Ya = '__reactMarker$' + nl
    function gi(t) {
        ;(delete t[Gt], delete t[Pt], delete t[mi], delete t[Bd], delete t[qd])
    }
    function Fl(t) {
        var e = t[Gt]
        if (e) return e
        for (var l = t.parentNode; l; ) {
            if ((e = l[Wl] || l[Gt])) {
                if (
                    ((l = e.alternate),
                    e.child !== null || (l !== null && l.child !== null))
                )
                    for (t = Eh(t); t !== null; ) {
                        if ((l = t[Gt])) return l
                        t = Eh(t)
                    }
                return e
            }
            ;((t = l), (l = t.parentNode))
        }
        return null
    }
    function Il(t) {
        if ((t = t[Gt] || t[Wl])) {
            var e = t.tag
            if (
                e === 5 ||
                e === 6 ||
                e === 13 ||
                e === 31 ||
                e === 26 ||
                e === 27 ||
                e === 3
            )
                return t
        }
        return null
    }
    function ka(t) {
        var e = t.tag
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode
        throw Error(f(33))
    }
    function Pl(t) {
        var e = t[ls]
        return (
            e ||
                (e = t[ls] =
                    {
                        hoistableStyles: new Map(),
                        hoistableScripts: new Map(),
                    }),
            e
        )
    }
    function Bt(t) {
        t[Ya] = !0
    }
    var as = new Set(),
        ns = {}
    function Ul(t, e) {
        ;(ta(t, e), ta(t + 'Capture', e))
    }
    function ta(t, e) {
        for (ns[t] = e, t = 0; t < e.length; t++) as.add(e[t])
    }
    var jd = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
        ),
        us = {},
        is = {}
    function Yd(t) {
        return fi.call(is, t)
            ? !0
            : fi.call(us, t)
              ? !1
              : jd.test(t)
                ? (is[t] = !0)
                : ((us[t] = !0), !1)
    }
    function Gn(t, e, l) {
        if (Yd(e))
            if (l === null) t.removeAttribute(e)
            else {
                switch (typeof l) {
                    case 'undefined':
                    case 'function':
                    case 'symbol':
                        t.removeAttribute(e)
                        return
                    case 'boolean':
                        var a = e.toLowerCase().slice(0, 5)
                        if (a !== 'data-' && a !== 'aria-') {
                            t.removeAttribute(e)
                            return
                        }
                }
                t.setAttribute(e, '' + l)
            }
    }
    function Qn(t, e, l) {
        if (l === null) t.removeAttribute(e)
        else {
            switch (typeof l) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    t.removeAttribute(e)
                    return
            }
            t.setAttribute(e, '' + l)
        }
    }
    function je(t, e, l, a) {
        if (a === null) t.removeAttribute(l)
        else {
            switch (typeof a) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    t.removeAttribute(l)
                    return
            }
            t.setAttributeNS(e, l, '' + a)
        }
    }
    function ye(t) {
        switch (typeof t) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
                return t
            case 'object':
                return t
            default:
                return ''
        }
    }
    function cs(t) {
        var e = t.type
        return (
            (t = t.nodeName) &&
            t.toLowerCase() === 'input' &&
            (e === 'checkbox' || e === 'radio')
        )
    }
    function kd(t, e, l) {
        var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
        if (
            !t.hasOwnProperty(e) &&
            typeof a < 'u' &&
            typeof a.get == 'function' &&
            typeof a.set == 'function'
        ) {
            var n = a.get,
                u = a.set
            return (
                Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                        return n.call(this)
                    },
                    set: function (i) {
                        ;((l = '' + i), u.call(this, i))
                    },
                }),
                Object.defineProperty(t, e, { enumerable: a.enumerable }),
                {
                    getValue: function () {
                        return l
                    },
                    setValue: function (i) {
                        l = '' + i
                    },
                    stopTracking: function () {
                        ;((t._valueTracker = null), delete t[e])
                    },
                }
            )
        }
    }
    function yi(t) {
        if (!t._valueTracker) {
            var e = cs(t) ? 'checked' : 'value'
            t._valueTracker = kd(t, e, '' + t[e])
        }
    }
    function fs(t) {
        if (!t) return !1
        var e = t._valueTracker
        if (!e) return !0
        var l = e.getValue(),
            a = ''
        return (
            t && (a = cs(t) ? (t.checked ? 'true' : 'false') : t.value),
            (t = a),
            t !== l ? (e.setValue(t), !0) : !1
        )
    }
    function Ln(t) {
        if (
            ((t = t || (typeof document < 'u' ? document : void 0)),
            typeof t > 'u')
        )
            return null
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var Gd = /[\n"\\]/g
    function pe(t) {
        return t.replace(Gd, function (e) {
            return '\\' + e.charCodeAt(0).toString(16) + ' '
        })
    }
    function pi(t, e, l, a, n, u, i, s) {
        ;((t.name = ''),
            i != null &&
            typeof i != 'function' &&
            typeof i != 'symbol' &&
            typeof i != 'boolean'
                ? (t.type = i)
                : t.removeAttribute('type'),
            e != null
                ? i === 'number'
                    ? ((e === 0 && t.value === '') || t.value != e) &&
                      (t.value = '' + ye(e))
                    : t.value !== '' + ye(e) && (t.value = '' + ye(e))
                : (i !== 'submit' && i !== 'reset') ||
                  t.removeAttribute('value'),
            e != null
                ? vi(t, i, ye(e))
                : l != null
                  ? vi(t, i, ye(l))
                  : a != null && t.removeAttribute('value'),
            n == null && u != null && (t.defaultChecked = !!u),
            n != null &&
                (t.checked =
                    n && typeof n != 'function' && typeof n != 'symbol'),
            s != null &&
            typeof s != 'function' &&
            typeof s != 'symbol' &&
            typeof s != 'boolean'
                ? (t.name = '' + ye(s))
                : t.removeAttribute('name'))
    }
    function ss(t, e, l, a, n, u, i, s) {
        if (
            (u != null &&
                typeof u != 'function' &&
                typeof u != 'symbol' &&
                typeof u != 'boolean' &&
                (t.type = u),
            e != null || l != null)
        ) {
            if (!((u !== 'submit' && u !== 'reset') || e != null)) {
                yi(t)
                return
            }
            ;((l = l != null ? '' + ye(l) : ''),
                (e = e != null ? '' + ye(e) : l),
                s || e === t.value || (t.value = e),
                (t.defaultValue = e))
        }
        ;((a = a ?? n),
            (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
            (t.checked = s ? t.checked : !!a),
            (t.defaultChecked = !!a),
            i != null &&
                typeof i != 'function' &&
                typeof i != 'symbol' &&
                typeof i != 'boolean' &&
                (t.name = i),
            yi(t))
    }
    function vi(t, e, l) {
        ;(e === 'number' && Ln(t.ownerDocument) === t) ||
            t.defaultValue === '' + l ||
            (t.defaultValue = '' + l)
    }
    function ea(t, e, l, a) {
        if (((t = t.options), e)) {
            e = {}
            for (var n = 0; n < l.length; n++) e['$' + l[n]] = !0
            for (l = 0; l < t.length; l++)
                ((n = e.hasOwnProperty('$' + t[l].value)),
                    t[l].selected !== n && (t[l].selected = n),
                    n && a && (t[l].defaultSelected = !0))
        } else {
            for (l = '' + ye(l), e = null, n = 0; n < t.length; n++) {
                if (t[n].value === l) {
                    ;((t[n].selected = !0), a && (t[n].defaultSelected = !0))
                    return
                }
                e !== null || t[n].disabled || (e = t[n])
            }
            e !== null && (e.selected = !0)
        }
    }
    function rs(t, e, l) {
        if (
            e != null &&
            ((e = '' + ye(e)), e !== t.value && (t.value = e), l == null)
        ) {
            t.defaultValue !== e && (t.defaultValue = e)
            return
        }
        t.defaultValue = l != null ? '' + ye(l) : ''
    }
    function os(t, e, l, a) {
        if (e == null) {
            if (a != null) {
                if (l != null) throw Error(f(92))
                if (_e(a)) {
                    if (1 < a.length) throw Error(f(93))
                    a = a[0]
                }
                l = a
            }
            ;(l == null && (l = ''), (e = l))
        }
        ;((l = ye(e)),
            (t.defaultValue = l),
            (a = t.textContent),
            a === l && a !== '' && a !== null && (t.value = a),
            yi(t))
    }
    function la(t, e) {
        if (e) {
            var l = t.firstChild
            if (l && l === t.lastChild && l.nodeType === 3) {
                l.nodeValue = e
                return
            }
        }
        t.textContent = e
    }
    var Qd = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' '
        )
    )
    function hs(t, e, l) {
        var a = e.indexOf('--') === 0
        l == null || typeof l == 'boolean' || l === ''
            ? a
                ? t.setProperty(e, '')
                : e === 'float'
                  ? (t.cssFloat = '')
                  : (t[e] = '')
            : a
              ? t.setProperty(e, l)
              : typeof l != 'number' || l === 0 || Qd.has(e)
                ? e === 'float'
                    ? (t.cssFloat = l)
                    : (t[e] = ('' + l).trim())
                : (t[e] = l + 'px')
    }
    function ds(t, e, l) {
        if (e != null && typeof e != 'object') throw Error(f(62))
        if (((t = t.style), l != null)) {
            for (var a in l)
                !l.hasOwnProperty(a) ||
                    (e != null && e.hasOwnProperty(a)) ||
                    (a.indexOf('--') === 0
                        ? t.setProperty(a, '')
                        : a === 'float'
                          ? (t.cssFloat = '')
                          : (t[a] = ''))
            for (var n in e)
                ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && hs(t, n, a))
        } else for (var u in e) e.hasOwnProperty(u) && hs(t, u, e[u])
    }
    function bi(t) {
        if (t.indexOf('-') === -1) return !1
        switch (t) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
                return !1
            default:
                return !0
        }
    }
    var Ld = new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
        ]),
        Xd =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
    function Xn(t) {
        return Xd.test('' + t)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : t
    }
    function Ye() {}
    var Si = null
    function Ti(t) {
        return (
            (t = t.target || t.srcElement || window),
            t.correspondingUseElement && (t = t.correspondingUseElement),
            t.nodeType === 3 ? t.parentNode : t
        )
    }
    var aa = null,
        na = null
    function ms(t) {
        var e = Il(t)
        if (e && (t = e.stateNode)) {
            var l = t[Pt] || null
            t: switch (((t = e.stateNode), e.type)) {
                case 'input':
                    if (
                        (pi(
                            t,
                            l.value,
                            l.defaultValue,
                            l.defaultValue,
                            l.checked,
                            l.defaultChecked,
                            l.type,
                            l.name
                        ),
                        (e = l.name),
                        l.type === 'radio' && e != null)
                    ) {
                        for (l = t; l.parentNode; ) l = l.parentNode
                        for (
                            l = l.querySelectorAll(
                                'input[name="' + pe('' + e) + '"][type="radio"]'
                            ),
                                e = 0;
                            e < l.length;
                            e++
                        ) {
                            var a = l[e]
                            if (a !== t && a.form === t.form) {
                                var n = a[Pt] || null
                                if (!n) throw Error(f(90))
                                pi(
                                    a,
                                    n.value,
                                    n.defaultValue,
                                    n.defaultValue,
                                    n.checked,
                                    n.defaultChecked,
                                    n.type,
                                    n.name
                                )
                            }
                        }
                        for (e = 0; e < l.length; e++)
                            ((a = l[e]), a.form === t.form && fs(a))
                    }
                    break t
                case 'textarea':
                    rs(t, l.value, l.defaultValue)
                    break t
                case 'select':
                    ;((e = l.value), e != null && ea(t, !!l.multiple, e, !1))
            }
        }
    }
    var zi = !1
    function gs(t, e, l) {
        if (zi) return t(e, l)
        zi = !0
        try {
            var a = t(e)
            return a
        } finally {
            if (
                ((zi = !1),
                (aa !== null || na !== null) &&
                    (Ru(),
                    aa && ((e = aa), (t = na), (na = aa = null), ms(e), t)))
            )
                for (e = 0; e < t.length; e++) ms(t[e])
        }
    }
    function Ga(t, e) {
        var l = t.stateNode
        if (l === null) return null
        var a = l[Pt] || null
        if (a === null) return null
        l = a[e]
        t: switch (e) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
                ;((a = !a.disabled) ||
                    ((t = t.type),
                    (a = !(
                        t === 'button' ||
                        t === 'input' ||
                        t === 'select' ||
                        t === 'textarea'
                    ))),
                    (t = !a))
                break t
            default:
                t = !1
        }
        if (t) return null
        if (l && typeof l != 'function') throw Error(f(231, e, typeof l))
        return l
    }
    var ke = !(
            typeof window > 'u' ||
            typeof window.document > 'u' ||
            typeof window.document.createElement > 'u'
        ),
        Ai = !1
    if (ke)
        try {
            var Qa = {}
            ;(Object.defineProperty(Qa, 'passive', {
                get: function () {
                    Ai = !0
                },
            }),
                window.addEventListener('test', Qa, Qa),
                window.removeEventListener('test', Qa, Qa))
        } catch {
            Ai = !1
        }
    var ul = null,
        Ei = null,
        Zn = null
    function ys() {
        if (Zn) return Zn
        var t,
            e = Ei,
            l = e.length,
            a,
            n = 'value' in ul ? ul.value : ul.textContent,
            u = n.length
        for (t = 0; t < l && e[t] === n[t]; t++);
        var i = l - t
        for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
        return (Zn = n.slice(t, 1 < a ? 1 - a : void 0))
    }
    function wn(t) {
        var e = t.keyCode
        return (
            'charCode' in t
                ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
                : (t = e),
            t === 10 && (t = 13),
            32 <= t || t === 13 ? t : 0
        )
    }
    function Vn() {
        return !0
    }
    function ps() {
        return !1
    }
    function te(t) {
        function e(l, a, n, u, i) {
            ;((this._reactName = l),
                (this._targetInst = n),
                (this.type = a),
                (this.nativeEvent = u),
                (this.target = i),
                (this.currentTarget = null))
            for (var s in t)
                t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(u) : u[s]))
            return (
                (this.isDefaultPrevented = (
                    u.defaultPrevented != null
                        ? u.defaultPrevented
                        : u.returnValue === !1
                )
                    ? Vn
                    : ps),
                (this.isPropagationStopped = ps),
                this
            )
        }
        return (
            N(e.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0
                    var l = this.nativeEvent
                    l &&
                        (l.preventDefault
                            ? l.preventDefault()
                            : typeof l.returnValue != 'unknown' &&
                              (l.returnValue = !1),
                        (this.isDefaultPrevented = Vn))
                },
                stopPropagation: function () {
                    var l = this.nativeEvent
                    l &&
                        (l.stopPropagation
                            ? l.stopPropagation()
                            : typeof l.cancelBubble != 'unknown' &&
                              (l.cancelBubble = !0),
                        (this.isPropagationStopped = Vn))
                },
                persist: function () {},
                isPersistent: Vn,
            }),
            e
        )
    }
    var Nl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Kn = te(Nl),
        La = N({}, Nl, { view: 0, detail: 0 }),
        Zd = te(La),
        xi,
        _i,
        Xa,
        Jn = N({}, La, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Mi,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
                return t.relatedTarget === void 0
                    ? t.fromElement === t.srcElement
                        ? t.toElement
                        : t.fromElement
                    : t.relatedTarget
            },
            movementX: function (t) {
                return 'movementX' in t
                    ? t.movementX
                    : (t !== Xa &&
                          (Xa && t.type === 'mousemove'
                              ? ((xi = t.screenX - Xa.screenX),
                                (_i = t.screenY - Xa.screenY))
                              : (_i = xi = 0),
                          (Xa = t)),
                      xi)
            },
            movementY: function (t) {
                return 'movementY' in t ? t.movementY : _i
            },
        }),
        vs = te(Jn),
        wd = N({}, Jn, { dataTransfer: 0 }),
        Vd = te(wd),
        Kd = N({}, La, { relatedTarget: 0 }),
        Oi = te(Kd),
        Jd = N({}, Nl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        $d = te(Jd),
        Wd = N({}, Nl, {
            clipboardData: function (t) {
                return 'clipboardData' in t
                    ? t.clipboardData
                    : window.clipboardData
            },
        }),
        Fd = te(Wd),
        Id = N({}, Nl, { data: 0 }),
        bs = te(Id),
        Pd = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
        },
        tm = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
        },
        em = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
        }
    function lm(t) {
        var e = this.nativeEvent
        return e.getModifierState
            ? e.getModifierState(t)
            : (t = em[t])
              ? !!e[t]
              : !1
    }
    function Mi() {
        return lm
    }
    var am = N({}, La, {
            key: function (t) {
                if (t.key) {
                    var e = Pd[t.key] || t.key
                    if (e !== 'Unidentified') return e
                }
                return t.type === 'keypress'
                    ? ((t = wn(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
                    : t.type === 'keydown' || t.type === 'keyup'
                      ? tm[t.keyCode] || 'Unidentified'
                      : ''
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Mi,
            charCode: function (t) {
                return t.type === 'keypress' ? wn(t) : 0
            },
            keyCode: function (t) {
                return t.type === 'keydown' || t.type === 'keyup'
                    ? t.keyCode
                    : 0
            },
            which: function (t) {
                return t.type === 'keypress'
                    ? wn(t)
                    : t.type === 'keydown' || t.type === 'keyup'
                      ? t.keyCode
                      : 0
            },
        }),
        nm = te(am),
        um = N({}, Jn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        Ss = te(um),
        im = N({}, La, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Mi,
        }),
        cm = te(im),
        fm = N({}, Nl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        sm = te(fm),
        rm = N({}, Jn, {
            deltaX: function (t) {
                return 'deltaX' in t
                    ? t.deltaX
                    : 'wheelDeltaX' in t
                      ? -t.wheelDeltaX
                      : 0
            },
            deltaY: function (t) {
                return 'deltaY' in t
                    ? t.deltaY
                    : 'wheelDeltaY' in t
                      ? -t.wheelDeltaY
                      : 'wheelDelta' in t
                        ? -t.wheelDelta
                        : 0
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        om = te(rm),
        hm = N({}, Nl, { newState: 0, oldState: 0 }),
        dm = te(hm),
        mm = [9, 13, 27, 32],
        Di = ke && 'CompositionEvent' in window,
        Za = null
    ke && 'documentMode' in document && (Za = document.documentMode)
    var gm = ke && 'TextEvent' in window && !Za,
        Ts = ke && (!Di || (Za && 8 < Za && 11 >= Za)),
        zs = ' ',
        As = !1
    function Es(t, e) {
        switch (t) {
            case 'keyup':
                return mm.indexOf(e.keyCode) !== -1
            case 'keydown':
                return e.keyCode !== 229
            case 'keypress':
            case 'mousedown':
            case 'focusout':
                return !0
            default:
                return !1
        }
    }
    function xs(t) {
        return (
            (t = t.detail),
            typeof t == 'object' && 'data' in t ? t.data : null
        )
    }
    var ua = !1
    function ym(t, e) {
        switch (t) {
            case 'compositionend':
                return xs(e)
            case 'keypress':
                return e.which !== 32 ? null : ((As = !0), zs)
            case 'textInput':
                return ((t = e.data), t === zs && As ? null : t)
            default:
                return null
        }
    }
    function pm(t, e) {
        if (ua)
            return t === 'compositionend' || (!Di && Es(t, e))
                ? ((t = ys()), (Zn = Ei = ul = null), (ua = !1), t)
                : null
        switch (t) {
            case 'paste':
                return null
            case 'keypress':
                if (
                    !(e.ctrlKey || e.altKey || e.metaKey) ||
                    (e.ctrlKey && e.altKey)
                ) {
                    if (e.char && 1 < e.char.length) return e.char
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null
            case 'compositionend':
                return Ts && e.locale !== 'ko' ? null : e.data
            default:
                return null
        }
    }
    var vm = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    }
    function _s(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase()
        return e === 'input' ? !!vm[t.type] : e === 'textarea'
    }
    function Os(t, e, l, a) {
        ;(aa ? (na ? na.push(a) : (na = [a])) : (aa = a),
            (e = ju(e, 'onChange')),
            0 < e.length &&
                ((l = new Kn('onChange', 'change', null, l, a)),
                t.push({ event: l, listeners: e })))
    }
    var wa = null,
        Va = null
    function bm(t) {
        rh(t, 0)
    }
    function $n(t) {
        var e = ka(t)
        if (fs(e)) return t
    }
    function Ms(t, e) {
        if (t === 'change') return e
    }
    var Ds = !1
    if (ke) {
        var Ri
        if (ke) {
            var Ui = 'oninput' in document
            if (!Ui) {
                var Rs = document.createElement('div')
                ;(Rs.setAttribute('oninput', 'return;'),
                    (Ui = typeof Rs.oninput == 'function'))
            }
            Ri = Ui
        } else Ri = !1
        Ds = Ri && (!document.documentMode || 9 < document.documentMode)
    }
    function Us() {
        wa && (wa.detachEvent('onpropertychange', Ns), (Va = wa = null))
    }
    function Ns(t) {
        if (t.propertyName === 'value' && $n(Va)) {
            var e = []
            ;(Os(e, Va, t, Ti(t)), gs(bm, e))
        }
    }
    function Sm(t, e, l) {
        t === 'focusin'
            ? (Us(), (wa = e), (Va = l), wa.attachEvent('onpropertychange', Ns))
            : t === 'focusout' && Us()
    }
    function Tm(t) {
        if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
            return $n(Va)
    }
    function zm(t, e) {
        if (t === 'click') return $n(e)
    }
    function Am(t, e) {
        if (t === 'input' || t === 'change') return $n(e)
    }
    function Em(t, e) {
        return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
    }
    var se = typeof Object.is == 'function' ? Object.is : Em
    function Ka(t, e) {
        if (se(t, e)) return !0
        if (
            typeof t != 'object' ||
            t === null ||
            typeof e != 'object' ||
            e === null
        )
            return !1
        var l = Object.keys(t),
            a = Object.keys(e)
        if (l.length !== a.length) return !1
        for (a = 0; a < l.length; a++) {
            var n = l[a]
            if (!fi.call(e, n) || !se(t[n], e[n])) return !1
        }
        return !0
    }
    function Cs(t) {
        for (; t && t.firstChild; ) t = t.firstChild
        return t
    }
    function Hs(t, e) {
        var l = Cs(t)
        t = 0
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (((a = t + l.textContent.length), t <= e && a >= e))
                    return { node: l, offset: e - t }
                t = a
            }
            t: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling
                        break t
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Cs(l)
        }
    }
    function Bs(t, e) {
        return t && e
            ? t === e
                ? !0
                : t && t.nodeType === 3
                  ? !1
                  : e && e.nodeType === 3
                    ? Bs(t, e.parentNode)
                    : 'contains' in t
                      ? t.contains(e)
                      : t.compareDocumentPosition
                        ? !!(t.compareDocumentPosition(e) & 16)
                        : !1
            : !1
    }
    function qs(t) {
        t =
            t != null &&
            t.ownerDocument != null &&
            t.ownerDocument.defaultView != null
                ? t.ownerDocument.defaultView
                : window
        for (var e = Ln(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var l = typeof e.contentWindow.location.href == 'string'
            } catch {
                l = !1
            }
            if (l) t = e.contentWindow
            else break
            e = Ln(t.document)
        }
        return e
    }
    function Ni(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase()
        return (
            e &&
            ((e === 'input' &&
                (t.type === 'text' ||
                    t.type === 'search' ||
                    t.type === 'tel' ||
                    t.type === 'url' ||
                    t.type === 'password')) ||
                e === 'textarea' ||
                t.contentEditable === 'true')
        )
    }
    var xm = ke && 'documentMode' in document && 11 >= document.documentMode,
        ia = null,
        Ci = null,
        Ja = null,
        Hi = !1
    function js(t, e, l) {
        var a =
            l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
        Hi ||
            ia == null ||
            ia !== Ln(a) ||
            ((a = ia),
            'selectionStart' in a && Ni(a)
                ? (a = { start: a.selectionStart, end: a.selectionEnd })
                : ((a = (
                      (a.ownerDocument && a.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (a = {
                      anchorNode: a.anchorNode,
                      anchorOffset: a.anchorOffset,
                      focusNode: a.focusNode,
                      focusOffset: a.focusOffset,
                  })),
            (Ja && Ka(Ja, a)) ||
                ((Ja = a),
                (a = ju(Ci, 'onSelect')),
                0 < a.length &&
                    ((e = new Kn('onSelect', 'select', null, e, l)),
                    t.push({ event: e, listeners: a }),
                    (e.target = ia))))
    }
    function Cl(t, e) {
        var l = {}
        return (
            (l[t.toLowerCase()] = e.toLowerCase()),
            (l['Webkit' + t] = 'webkit' + e),
            (l['Moz' + t] = 'moz' + e),
            l
        )
    }
    var ca = {
            animationend: Cl('Animation', 'AnimationEnd'),
            animationiteration: Cl('Animation', 'AnimationIteration'),
            animationstart: Cl('Animation', 'AnimationStart'),
            transitionrun: Cl('Transition', 'TransitionRun'),
            transitionstart: Cl('Transition', 'TransitionStart'),
            transitioncancel: Cl('Transition', 'TransitionCancel'),
            transitionend: Cl('Transition', 'TransitionEnd'),
        },
        Bi = {},
        Ys = {}
    ke &&
        ((Ys = document.createElement('div').style),
        'AnimationEvent' in window ||
            (delete ca.animationend.animation,
            delete ca.animationiteration.animation,
            delete ca.animationstart.animation),
        'TransitionEvent' in window || delete ca.transitionend.transition)
    function Hl(t) {
        if (Bi[t]) return Bi[t]
        if (!ca[t]) return t
        var e = ca[t],
            l
        for (l in e) if (e.hasOwnProperty(l) && l in Ys) return (Bi[t] = e[l])
        return t
    }
    var ks = Hl('animationend'),
        Gs = Hl('animationiteration'),
        Qs = Hl('animationstart'),
        _m = Hl('transitionrun'),
        Om = Hl('transitionstart'),
        Mm = Hl('transitioncancel'),
        Ls = Hl('transitionend'),
        Xs = new Map(),
        qi =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' '
            )
    qi.push('scrollEnd')
    function Oe(t, e) {
        ;(Xs.set(t, e), Ul(e, [t]))
    }
    var Wn =
            typeof reportError == 'function'
                ? reportError
                : function (t) {
                      if (
                          typeof window == 'object' &&
                          typeof window.ErrorEvent == 'function'
                      ) {
                          var e = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message:
                                  typeof t == 'object' &&
                                  t !== null &&
                                  typeof t.message == 'string'
                                      ? String(t.message)
                                      : String(t),
                              error: t,
                          })
                          if (!window.dispatchEvent(e)) return
                      } else if (
                          typeof process == 'object' &&
                          typeof process.emit == 'function'
                      ) {
                          process.emit('uncaughtException', t)
                          return
                      }
                      console.error(t)
                  },
        ve = [],
        fa = 0,
        ji = 0
    function Fn() {
        for (var t = fa, e = (ji = fa = 0); e < t; ) {
            var l = ve[e]
            ve[e++] = null
            var a = ve[e]
            ve[e++] = null
            var n = ve[e]
            ve[e++] = null
            var u = ve[e]
            if (((ve[e++] = null), a !== null && n !== null)) {
                var i = a.pending
                ;(i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
                    (a.pending = n))
            }
            u !== 0 && Zs(l, n, u)
        }
    }
    function In(t, e, l, a) {
        ;((ve[fa++] = t),
            (ve[fa++] = e),
            (ve[fa++] = l),
            (ve[fa++] = a),
            (ji |= a),
            (t.lanes |= a),
            (t = t.alternate),
            t !== null && (t.lanes |= a))
    }
    function Yi(t, e, l, a) {
        return (In(t, e, l, a), Pn(t))
    }
    function Bl(t, e) {
        return (In(t, null, null, e), Pn(t))
    }
    function Zs(t, e, l) {
        t.lanes |= l
        var a = t.alternate
        a !== null && (a.lanes |= l)
        for (var n = !1, u = t.return; u !== null; )
            ((u.childLanes |= l),
                (a = u.alternate),
                a !== null && (a.childLanes |= l),
                u.tag === 22 &&
                    ((t = u.stateNode),
                    t === null || t._visibility & 1 || (n = !0)),
                (t = u),
                (u = u.return))
        return t.tag === 3
            ? ((u = t.stateNode),
              n &&
                  e !== null &&
                  ((n = 31 - fe(l)),
                  (t = u.hiddenUpdates),
                  (a = t[n]),
                  a === null ? (t[n] = [e]) : a.push(e),
                  (e.lane = l | 536870912)),
              u)
            : null
    }
    function Pn(t) {
        if (50 < pn) throw ((pn = 0), (Kc = null), Error(f(185)))
        for (var e = t.return; e !== null; ) ((t = e), (e = t.return))
        return t.tag === 3 ? t.stateNode : null
    }
    var sa = {}
    function Dm(t, e, l, a) {
        ;((this.tag = t),
            (this.key = l),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = e),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null))
    }
    function re(t, e, l, a) {
        return new Dm(t, e, l, a)
    }
    function ki(t) {
        return ((t = t.prototype), !(!t || !t.isReactComponent))
    }
    function Ge(t, e) {
        var l = t.alternate
        return (
            l === null
                ? ((l = re(t.tag, e, t.key, t.mode)),
                  (l.elementType = t.elementType),
                  (l.type = t.type),
                  (l.stateNode = t.stateNode),
                  (l.alternate = t),
                  (t.alternate = l))
                : ((l.pendingProps = e),
                  (l.type = t.type),
                  (l.flags = 0),
                  (l.subtreeFlags = 0),
                  (l.deletions = null)),
            (l.flags = t.flags & 65011712),
            (l.childLanes = t.childLanes),
            (l.lanes = t.lanes),
            (l.child = t.child),
            (l.memoizedProps = t.memoizedProps),
            (l.memoizedState = t.memoizedState),
            (l.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (l.dependencies =
                e === null
                    ? null
                    : { lanes: e.lanes, firstContext: e.firstContext }),
            (l.sibling = t.sibling),
            (l.index = t.index),
            (l.ref = t.ref),
            (l.refCleanup = t.refCleanup),
            l
        )
    }
    function ws(t, e) {
        t.flags &= 65011714
        var l = t.alternate
        return (
            l === null
                ? ((t.childLanes = 0),
                  (t.lanes = e),
                  (t.child = null),
                  (t.subtreeFlags = 0),
                  (t.memoizedProps = null),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  (t.dependencies = null),
                  (t.stateNode = null))
                : ((t.childLanes = l.childLanes),
                  (t.lanes = l.lanes),
                  (t.child = l.child),
                  (t.subtreeFlags = 0),
                  (t.deletions = null),
                  (t.memoizedProps = l.memoizedProps),
                  (t.memoizedState = l.memoizedState),
                  (t.updateQueue = l.updateQueue),
                  (t.type = l.type),
                  (e = l.dependencies),
                  (t.dependencies =
                      e === null
                          ? null
                          : { lanes: e.lanes, firstContext: e.firstContext })),
            t
        )
    }
    function tu(t, e, l, a, n, u) {
        var i = 0
        if (((a = t), typeof t == 'function')) ki(t) && (i = 1)
        else if (typeof t == 'string')
            i = H0(t, l, j.current)
                ? 26
                : t === 'html' || t === 'head' || t === 'body'
                  ? 27
                  : 5
        else
            t: switch (t) {
                case Kt:
                    return (
                        (t = re(31, l, e, n)),
                        (t.elementType = Kt),
                        (t.lanes = u),
                        t
                    )
                case at:
                    return ql(l.children, n, u, e)
                case wt:
                    ;((i = 8), (n |= 24))
                    break
                case Et:
                    return (
                        (t = re(12, l, e, n | 2)),
                        (t.elementType = Et),
                        (t.lanes = u),
                        t
                    )
                case ht:
                    return (
                        (t = re(13, l, e, n)),
                        (t.elementType = ht),
                        (t.lanes = u),
                        t
                    )
                case lt:
                    return (
                        (t = re(19, l, e, n)),
                        (t.elementType = lt),
                        (t.lanes = u),
                        t
                    )
                default:
                    if (typeof t == 'object' && t !== null)
                        switch (t.$$typeof) {
                            case zt:
                                i = 10
                                break t
                            case Vt:
                                i = 9
                                break t
                            case jt:
                                i = 11
                                break t
                            case X:
                                i = 14
                                break t
                            case Yt:
                                ;((i = 16), (a = null))
                                break t
                        }
                    ;((i = 29),
                        (l = Error(f(130, t === null ? 'null' : typeof t, ''))),
                        (a = null))
            }
        return (
            (e = re(i, l, e, n)),
            (e.elementType = t),
            (e.type = a),
            (e.lanes = u),
            e
        )
    }
    function ql(t, e, l, a) {
        return ((t = re(7, t, a, e)), (t.lanes = l), t)
    }
    function Gi(t, e, l) {
        return ((t = re(6, t, null, e)), (t.lanes = l), t)
    }
    function Vs(t) {
        var e = re(18, null, null, 0)
        return ((e.stateNode = t), e)
    }
    function Qi(t, e, l) {
        return (
            (e = re(4, t.children !== null ? t.children : [], t.key, e)),
            (e.lanes = l),
            (e.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation,
            }),
            e
        )
    }
    var Ks = new WeakMap()
    function be(t, e) {
        if (typeof t == 'object' && t !== null) {
            var l = Ks.get(t)
            return l !== void 0
                ? l
                : ((e = { value: t, source: e, stack: Vf(e) }), Ks.set(t, e), e)
        }
        return { value: t, source: e, stack: Vf(e) }
    }
    var ra = [],
        oa = 0,
        eu = null,
        $a = 0,
        Se = [],
        Te = 0,
        il = null,
        Re = 1,
        Ue = ''
    function Qe(t, e) {
        ;((ra[oa++] = $a), (ra[oa++] = eu), (eu = t), ($a = e))
    }
    function Js(t, e, l) {
        ;((Se[Te++] = Re), (Se[Te++] = Ue), (Se[Te++] = il), (il = t))
        var a = Re
        t = Ue
        var n = 32 - fe(a) - 1
        ;((a &= ~(1 << n)), (l += 1))
        var u = 32 - fe(e) + n
        if (30 < u) {
            var i = n - (n % 5)
            ;((u = (a & ((1 << i) - 1)).toString(32)),
                (a >>= i),
                (n -= i),
                (Re = (1 << (32 - fe(e) + n)) | (l << n) | a),
                (Ue = u + t))
        } else ((Re = (1 << u) | (l << n) | a), (Ue = t))
    }
    function Li(t) {
        t.return !== null && (Qe(t, 1), Js(t, 1, 0))
    }
    function Xi(t) {
        for (; t === eu; )
            ((eu = ra[--oa]), (ra[oa] = null), ($a = ra[--oa]), (ra[oa] = null))
        for (; t === il; )
            ((il = Se[--Te]),
                (Se[Te] = null),
                (Ue = Se[--Te]),
                (Se[Te] = null),
                (Re = Se[--Te]),
                (Se[Te] = null))
    }
    function $s(t, e) {
        ;((Se[Te++] = Re),
            (Se[Te++] = Ue),
            (Se[Te++] = il),
            (Re = e.id),
            (Ue = e.overflow),
            (il = t))
    }
    var Qt = null,
        St = null,
        et = !1,
        cl = null,
        ze = !1,
        Zi = Error(f(519))
    function fl(t) {
        var e = Error(
            f(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                    ? 'text'
                    : 'HTML',
                ''
            )
        )
        throw (Wa(be(e, t)), Zi)
    }
    function Ws(t) {
        var e = t.stateNode,
            l = t.type,
            a = t.memoizedProps
        switch (((e[Gt] = t), (e[Pt] = a), l)) {
            case 'dialog':
                ;(I('cancel', e), I('close', e))
                break
            case 'iframe':
            case 'object':
            case 'embed':
                I('load', e)
                break
            case 'video':
            case 'audio':
                for (l = 0; l < bn.length; l++) I(bn[l], e)
                break
            case 'source':
                I('error', e)
                break
            case 'img':
            case 'image':
            case 'link':
                ;(I('error', e), I('load', e))
                break
            case 'details':
                I('toggle', e)
                break
            case 'input':
                ;(I('invalid', e),
                    ss(
                        e,
                        a.value,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name,
                        !0
                    ))
                break
            case 'select':
                I('invalid', e)
                break
            case 'textarea':
                ;(I('invalid', e), os(e, a.value, a.defaultValue, a.children))
        }
        ;((l = a.children),
            (typeof l != 'string' &&
                typeof l != 'number' &&
                typeof l != 'bigint') ||
            e.textContent === '' + l ||
            a.suppressHydrationWarning === !0 ||
            mh(e.textContent, l)
                ? (a.popover != null && (I('beforetoggle', e), I('toggle', e)),
                  a.onScroll != null && I('scroll', e),
                  a.onScrollEnd != null && I('scrollend', e),
                  a.onClick != null && (e.onclick = Ye),
                  (e = !0))
                : (e = !1),
            e || fl(t, !0))
    }
    function Fs(t) {
        for (Qt = t.return; Qt; )
            switch (Qt.tag) {
                case 5:
                case 31:
                case 13:
                    ze = !1
                    return
                case 27:
                case 3:
                    ze = !0
                    return
                default:
                    Qt = Qt.return
            }
    }
    function ha(t) {
        if (t !== Qt) return !1
        if (!et) return (Fs(t), (et = !0), !1)
        var e = t.tag,
            l
        if (
            ((l = e !== 3 && e !== 27) &&
                ((l = e === 5) &&
                    ((l = t.type),
                    (l =
                        !(l !== 'form' && l !== 'button') ||
                        sf(t.type, t.memoizedProps))),
                (l = !l)),
            l && St && fl(t),
            Fs(t),
            e === 13)
        ) {
            if (
                ((t = t.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
            )
                throw Error(f(317))
            St = Ah(t)
        } else if (e === 31) {
            if (
                ((t = t.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
            )
                throw Error(f(317))
            St = Ah(t)
        } else
            e === 27
                ? ((e = St),
                  zl(t.type) ? ((t = mf), (mf = null), (St = t)) : (St = e))
                : (St = Qt ? Ee(t.stateNode.nextSibling) : null)
        return !0
    }
    function jl() {
        ;((St = Qt = null), (et = !1))
    }
    function wi() {
        var t = cl
        return (
            t !== null &&
                (ne === null ? (ne = t) : ne.push.apply(ne, t), (cl = null)),
            t
        )
    }
    function Wa(t) {
        cl === null ? (cl = [t]) : cl.push(t)
    }
    var Vi = y(null),
        Yl = null,
        Le = null
    function sl(t, e, l) {
        ;(B(Vi, e._currentValue), (e._currentValue = l))
    }
    function Xe(t) {
        ;((t._currentValue = Vi.current), R(Vi))
    }
    function Ki(t, e, l) {
        for (; t !== null; ) {
            var a = t.alternate
            if (
                ((t.childLanes & e) !== e
                    ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
                    : a !== null &&
                      (a.childLanes & e) !== e &&
                      (a.childLanes |= e),
                t === l)
            )
                break
            t = t.return
        }
    }
    function Ji(t, e, l, a) {
        var n = t.child
        for (n !== null && (n.return = t); n !== null; ) {
            var u = n.dependencies
            if (u !== null) {
                var i = n.child
                u = u.firstContext
                t: for (; u !== null; ) {
                    var s = u
                    u = n
                    for (var d = 0; d < e.length; d++)
                        if (s.context === e[d]) {
                            ;((u.lanes |= l),
                                (s = u.alternate),
                                s !== null && (s.lanes |= l),
                                Ki(u.return, l, t),
                                a || (i = null))
                            break t
                        }
                    u = s.next
                }
            } else if (n.tag === 18) {
                if (((i = n.return), i === null)) throw Error(f(341))
                ;((i.lanes |= l),
                    (u = i.alternate),
                    u !== null && (u.lanes |= l),
                    Ki(i, l, t),
                    (i = null))
            } else i = n.child
            if (i !== null) i.return = n
            else
                for (i = n; i !== null; ) {
                    if (i === t) {
                        i = null
                        break
                    }
                    if (((n = i.sibling), n !== null)) {
                        ;((n.return = i.return), (i = n))
                        break
                    }
                    i = i.return
                }
            n = i
        }
    }
    function da(t, e, l, a) {
        t = null
        for (var n = e, u = !1; n !== null; ) {
            if (!u) {
                if ((n.flags & 524288) !== 0) u = !0
                else if ((n.flags & 262144) !== 0) break
            }
            if (n.tag === 10) {
                var i = n.alternate
                if (i === null) throw Error(f(387))
                if (((i = i.memoizedProps), i !== null)) {
                    var s = n.type
                    se(n.pendingProps.value, i.value) ||
                        (t !== null ? t.push(s) : (t = [s]))
                }
            } else if (n === ct.current) {
                if (((i = n.alternate), i === null)) throw Error(f(387))
                i.memoizedState.memoizedState !==
                    n.memoizedState.memoizedState &&
                    (t !== null ? t.push(En) : (t = [En]))
            }
            n = n.return
        }
        ;(t !== null && Ji(e, t, l, a), (e.flags |= 262144))
    }
    function lu(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!se(t.context._currentValue, t.memoizedValue)) return !0
            t = t.next
        }
        return !1
    }
    function kl(t) {
        ;((Yl = t),
            (Le = null),
            (t = t.dependencies),
            t !== null && (t.firstContext = null))
    }
    function Lt(t) {
        return Is(Yl, t)
    }
    function au(t, e) {
        return (Yl === null && kl(t), Is(t, e))
    }
    function Is(t, e) {
        var l = e._currentValue
        if (((e = { context: e, memoizedValue: l, next: null }), Le === null)) {
            if (t === null) throw Error(f(308))
            ;((Le = e),
                (t.dependencies = { lanes: 0, firstContext: e }),
                (t.flags |= 524288))
        } else Le = Le.next = e
        return l
    }
    var Rm =
            typeof AbortController < 'u'
                ? AbortController
                : function () {
                      var t = [],
                          e = (this.signal = {
                              aborted: !1,
                              addEventListener: function (l, a) {
                                  t.push(a)
                              },
                          })
                      this.abort = function () {
                          ;((e.aborted = !0),
                              t.forEach(function (l) {
                                  return l()
                              }))
                      }
                  },
        Um = r.unstable_scheduleCallback,
        Nm = r.unstable_NormalPriority,
        Rt = {
            $$typeof: zt,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        }
    function $i() {
        return { controller: new Rm(), data: new Map(), refCount: 0 }
    }
    function Fa(t) {
        ;(t.refCount--,
            t.refCount === 0 &&
                Um(Nm, function () {
                    t.controller.abort()
                }))
    }
    var Ia = null,
        Wi = 0,
        ma = 0,
        ga = null
    function Cm(t, e) {
        if (Ia === null) {
            var l = (Ia = [])
            ;((Wi = 0),
                (ma = Pc()),
                (ga = {
                    status: 'pending',
                    value: void 0,
                    then: function (a) {
                        l.push(a)
                    },
                }))
        }
        return (Wi++, e.then(Ps, Ps), e)
    }
    function Ps() {
        if (--Wi === 0 && Ia !== null) {
            ga !== null && (ga.status = 'fulfilled')
            var t = Ia
            ;((Ia = null), (ma = 0), (ga = null))
            for (var e = 0; e < t.length; e++) (0, t[e])()
        }
    }
    function Hm(t, e) {
        var l = [],
            a = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (n) {
                    l.push(n)
                },
            }
        return (
            t.then(
                function () {
                    ;((a.status = 'fulfilled'), (a.value = e))
                    for (var n = 0; n < l.length; n++) (0, l[n])(e)
                },
                function (n) {
                    for (
                        a.status = 'rejected', a.reason = n, n = 0;
                        n < l.length;
                        n++
                    )
                        (0, l[n])(void 0)
                }
            ),
            a
        )
    }
    var tr = O.S
    O.S = function (t, e) {
        ;((Yo = ie()),
            typeof e == 'object' &&
                e !== null &&
                typeof e.then == 'function' &&
                Cm(t, e),
            tr !== null && tr(t, e))
    }
    var Gl = y(null)
    function Fi() {
        var t = Gl.current
        return t !== null ? t : vt.pooledCache
    }
    function nu(t, e) {
        e === null ? B(Gl, Gl.current) : B(Gl, e.pool)
    }
    function er() {
        var t = Fi()
        return t === null ? null : { parent: Rt._currentValue, pool: t }
    }
    var ya = Error(f(460)),
        Ii = Error(f(474)),
        uu = Error(f(542)),
        iu = { then: function () {} }
    function lr(t) {
        return ((t = t.status), t === 'fulfilled' || t === 'rejected')
    }
    function ar(t, e, l) {
        switch (
            ((l = t[l]),
            l === void 0 ? t.push(e) : l !== e && (e.then(Ye, Ye), (e = l)),
            e.status)
        ) {
            case 'fulfilled':
                return e.value
            case 'rejected':
                throw ((t = e.reason), ur(t), t)
            default:
                if (typeof e.status == 'string') e.then(Ye, Ye)
                else {
                    if (((t = vt), t !== null && 100 < t.shellSuspendCounter))
                        throw Error(f(482))
                    ;((t = e),
                        (t.status = 'pending'),
                        t.then(
                            function (a) {
                                if (e.status === 'pending') {
                                    var n = e
                                    ;((n.status = 'fulfilled'), (n.value = a))
                                }
                            },
                            function (a) {
                                if (e.status === 'pending') {
                                    var n = e
                                    ;((n.status = 'rejected'), (n.reason = a))
                                }
                            }
                        ))
                }
                switch (e.status) {
                    case 'fulfilled':
                        return e.value
                    case 'rejected':
                        throw ((t = e.reason), ur(t), t)
                }
                throw ((Ll = e), ya)
        }
    }
    function Ql(t) {
        try {
            var e = t._init
            return e(t._payload)
        } catch (l) {
            throw l !== null &&
                typeof l == 'object' &&
                typeof l.then == 'function'
                ? ((Ll = l), ya)
                : l
        }
    }
    var Ll = null
    function nr() {
        if (Ll === null) throw Error(f(459))
        var t = Ll
        return ((Ll = null), t)
    }
    function ur(t) {
        if (t === ya || t === uu) throw Error(f(483))
    }
    var pa = null,
        Pa = 0
    function cu(t) {
        var e = Pa
        return ((Pa += 1), pa === null && (pa = []), ar(pa, t, e))
    }
    function tn(t, e) {
        ;((e = e.props.ref), (t.ref = e !== void 0 ? e : null))
    }
    function fu(t, e) {
        throw e.$$typeof === H
            ? Error(f(525))
            : ((t = Object.prototype.toString.call(e)),
              Error(
                  f(
                      31,
                      t === '[object Object]'
                          ? 'object with keys {' +
                                Object.keys(e).join(', ') +
                                '}'
                          : t
                  )
              ))
    }
    function ir(t) {
        function e(v, m) {
            if (t) {
                var S = v.deletions
                S === null ? ((v.deletions = [m]), (v.flags |= 16)) : S.push(m)
            }
        }
        function l(v, m) {
            if (!t) return null
            for (; m !== null; ) (e(v, m), (m = m.sibling))
            return null
        }
        function a(v) {
            for (var m = new Map(); v !== null; )
                (v.key !== null ? m.set(v.key, v) : m.set(v.index, v),
                    (v = v.sibling))
            return m
        }
        function n(v, m) {
            return ((v = Ge(v, m)), (v.index = 0), (v.sibling = null), v)
        }
        function u(v, m, S) {
            return (
                (v.index = S),
                t
                    ? ((S = v.alternate),
                      S !== null
                          ? ((S = S.index),
                            S < m ? ((v.flags |= 67108866), m) : S)
                          : ((v.flags |= 67108866), m))
                    : ((v.flags |= 1048576), m)
            )
        }
        function i(v) {
            return (t && v.alternate === null && (v.flags |= 67108866), v)
        }
        function s(v, m, S, M) {
            return m === null || m.tag !== 6
                ? ((m = Gi(S, v.mode, M)), (m.return = v), m)
                : ((m = n(m, S)), (m.return = v), m)
        }
        function d(v, m, S, M) {
            var k = S.type
            return k === at
                ? _(v, m, S.props.children, M, S.key)
                : m !== null &&
                    (m.elementType === k ||
                        (typeof k == 'object' &&
                            k !== null &&
                            k.$$typeof === Yt &&
                            Ql(k) === m.type))
                  ? ((m = n(m, S.props)), tn(m, S), (m.return = v), m)
                  : ((m = tu(S.type, S.key, S.props, null, v.mode, M)),
                    tn(m, S),
                    (m.return = v),
                    m)
        }
        function T(v, m, S, M) {
            return m === null ||
                m.tag !== 4 ||
                m.stateNode.containerInfo !== S.containerInfo ||
                m.stateNode.implementation !== S.implementation
                ? ((m = Qi(S, v.mode, M)), (m.return = v), m)
                : ((m = n(m, S.children || [])), (m.return = v), m)
        }
        function _(v, m, S, M, k) {
            return m === null || m.tag !== 7
                ? ((m = ql(S, v.mode, M, k)), (m.return = v), m)
                : ((m = n(m, S)), (m.return = v), m)
        }
        function D(v, m, S) {
            if (
                (typeof m == 'string' && m !== '') ||
                typeof m == 'number' ||
                typeof m == 'bigint'
            )
                return ((m = Gi('' + m, v.mode, S)), (m.return = v), m)
            if (typeof m == 'object' && m !== null) {
                switch (m.$$typeof) {
                    case Z:
                        return (
                            (S = tu(m.type, m.key, m.props, null, v.mode, S)),
                            tn(S, m),
                            (S.return = v),
                            S
                        )
                    case Q:
                        return ((m = Qi(m, v.mode, S)), (m.return = v), m)
                    case Yt:
                        return ((m = Ql(m)), D(v, m, S))
                }
                if (_e(m) || Jt(m))
                    return ((m = ql(m, v.mode, S, null)), (m.return = v), m)
                if (typeof m.then == 'function') return D(v, cu(m), S)
                if (m.$$typeof === zt) return D(v, au(v, m), S)
                fu(v, m)
            }
            return null
        }
        function z(v, m, S, M) {
            var k = m !== null ? m.key : null
            if (
                (typeof S == 'string' && S !== '') ||
                typeof S == 'number' ||
                typeof S == 'bigint'
            )
                return k !== null ? null : s(v, m, '' + S, M)
            if (typeof S == 'object' && S !== null) {
                switch (S.$$typeof) {
                    case Z:
                        return S.key === k ? d(v, m, S, M) : null
                    case Q:
                        return S.key === k ? T(v, m, S, M) : null
                    case Yt:
                        return ((S = Ql(S)), z(v, m, S, M))
                }
                if (_e(S) || Jt(S))
                    return k !== null ? null : _(v, m, S, M, null)
                if (typeof S.then == 'function') return z(v, m, cu(S), M)
                if (S.$$typeof === zt) return z(v, m, au(v, S), M)
                fu(v, S)
            }
            return null
        }
        function E(v, m, S, M, k) {
            if (
                (typeof M == 'string' && M !== '') ||
                typeof M == 'number' ||
                typeof M == 'bigint'
            )
                return ((v = v.get(S) || null), s(m, v, '' + M, k))
            if (typeof M == 'object' && M !== null) {
                switch (M.$$typeof) {
                    case Z:
                        return (
                            (v = v.get(M.key === null ? S : M.key) || null),
                            d(m, v, M, k)
                        )
                    case Q:
                        return (
                            (v = v.get(M.key === null ? S : M.key) || null),
                            T(m, v, M, k)
                        )
                    case Yt:
                        return ((M = Ql(M)), E(v, m, S, M, k))
                }
                if (_e(M) || Jt(M))
                    return ((v = v.get(S) || null), _(m, v, M, k, null))
                if (typeof M.then == 'function') return E(v, m, S, cu(M), k)
                if (M.$$typeof === zt) return E(v, m, S, au(m, M), k)
                fu(m, M)
            }
            return null
        }
        function q(v, m, S, M) {
            for (
                var k = null, nt = null, Y = m, J = (m = 0), tt = null;
                Y !== null && J < S.length;
                J++
            ) {
                Y.index > J ? ((tt = Y), (Y = null)) : (tt = Y.sibling)
                var ut = z(v, Y, S[J], M)
                if (ut === null) {
                    Y === null && (Y = tt)
                    break
                }
                ;(t && Y && ut.alternate === null && e(v, Y),
                    (m = u(ut, m, J)),
                    nt === null ? (k = ut) : (nt.sibling = ut),
                    (nt = ut),
                    (Y = tt))
            }
            if (J === S.length) return (l(v, Y), et && Qe(v, J), k)
            if (Y === null) {
                for (; J < S.length; J++)
                    ((Y = D(v, S[J], M)),
                        Y !== null &&
                            ((m = u(Y, m, J)),
                            nt === null ? (k = Y) : (nt.sibling = Y),
                            (nt = Y)))
                return (et && Qe(v, J), k)
            }
            for (Y = a(Y); J < S.length; J++)
                ((tt = E(Y, v, J, S[J], M)),
                    tt !== null &&
                        (t &&
                            tt.alternate !== null &&
                            Y.delete(tt.key === null ? J : tt.key),
                        (m = u(tt, m, J)),
                        nt === null ? (k = tt) : (nt.sibling = tt),
                        (nt = tt)))
            return (
                t &&
                    Y.forEach(function (Ol) {
                        return e(v, Ol)
                    }),
                et && Qe(v, J),
                k
            )
        }
        function G(v, m, S, M) {
            if (S == null) throw Error(f(151))
            for (
                var k = null,
                    nt = null,
                    Y = m,
                    J = (m = 0),
                    tt = null,
                    ut = S.next();
                Y !== null && !ut.done;
                J++, ut = S.next()
            ) {
                Y.index > J ? ((tt = Y), (Y = null)) : (tt = Y.sibling)
                var Ol = z(v, Y, ut.value, M)
                if (Ol === null) {
                    Y === null && (Y = tt)
                    break
                }
                ;(t && Y && Ol.alternate === null && e(v, Y),
                    (m = u(Ol, m, J)),
                    nt === null ? (k = Ol) : (nt.sibling = Ol),
                    (nt = Ol),
                    (Y = tt))
            }
            if (ut.done) return (l(v, Y), et && Qe(v, J), k)
            if (Y === null) {
                for (; !ut.done; J++, ut = S.next())
                    ((ut = D(v, ut.value, M)),
                        ut !== null &&
                            ((m = u(ut, m, J)),
                            nt === null ? (k = ut) : (nt.sibling = ut),
                            (nt = ut)))
                return (et && Qe(v, J), k)
            }
            for (Y = a(Y); !ut.done; J++, ut = S.next())
                ((ut = E(Y, v, J, ut.value, M)),
                    ut !== null &&
                        (t &&
                            ut.alternate !== null &&
                            Y.delete(ut.key === null ? J : ut.key),
                        (m = u(ut, m, J)),
                        nt === null ? (k = ut) : (nt.sibling = ut),
                        (nt = ut)))
            return (
                t &&
                    Y.forEach(function (w0) {
                        return e(v, w0)
                    }),
                et && Qe(v, J),
                k
            )
        }
        function yt(v, m, S, M) {
            if (
                (typeof S == 'object' &&
                    S !== null &&
                    S.type === at &&
                    S.key === null &&
                    (S = S.props.children),
                typeof S == 'object' && S !== null)
            ) {
                switch (S.$$typeof) {
                    case Z:
                        t: {
                            for (var k = S.key; m !== null; ) {
                                if (m.key === k) {
                                    if (((k = S.type), k === at)) {
                                        if (m.tag === 7) {
                                            ;(l(v, m.sibling),
                                                (M = n(m, S.props.children)),
                                                (M.return = v),
                                                (v = M))
                                            break t
                                        }
                                    } else if (
                                        m.elementType === k ||
                                        (typeof k == 'object' &&
                                            k !== null &&
                                            k.$$typeof === Yt &&
                                            Ql(k) === m.type)
                                    ) {
                                        ;(l(v, m.sibling),
                                            (M = n(m, S.props)),
                                            tn(M, S),
                                            (M.return = v),
                                            (v = M))
                                        break t
                                    }
                                    l(v, m)
                                    break
                                } else e(v, m)
                                m = m.sibling
                            }
                            S.type === at
                                ? ((M = ql(S.props.children, v.mode, M, S.key)),
                                  (M.return = v),
                                  (v = M))
                                : ((M = tu(
                                      S.type,
                                      S.key,
                                      S.props,
                                      null,
                                      v.mode,
                                      M
                                  )),
                                  tn(M, S),
                                  (M.return = v),
                                  (v = M))
                        }
                        return i(v)
                    case Q:
                        t: {
                            for (k = S.key; m !== null; ) {
                                if (m.key === k)
                                    if (
                                        m.tag === 4 &&
                                        m.stateNode.containerInfo ===
                                            S.containerInfo &&
                                        m.stateNode.implementation ===
                                            S.implementation
                                    ) {
                                        ;(l(v, m.sibling),
                                            (M = n(m, S.children || [])),
                                            (M.return = v),
                                            (v = M))
                                        break t
                                    } else {
                                        l(v, m)
                                        break
                                    }
                                else e(v, m)
                                m = m.sibling
                            }
                            ;((M = Qi(S, v.mode, M)), (M.return = v), (v = M))
                        }
                        return i(v)
                    case Yt:
                        return ((S = Ql(S)), yt(v, m, S, M))
                }
                if (_e(S)) return q(v, m, S, M)
                if (Jt(S)) {
                    if (((k = Jt(S)), typeof k != 'function'))
                        throw Error(f(150))
                    return ((S = k.call(S)), G(v, m, S, M))
                }
                if (typeof S.then == 'function') return yt(v, m, cu(S), M)
                if (S.$$typeof === zt) return yt(v, m, au(v, S), M)
                fu(v, S)
            }
            return (typeof S == 'string' && S !== '') ||
                typeof S == 'number' ||
                typeof S == 'bigint'
                ? ((S = '' + S),
                  m !== null && m.tag === 6
                      ? (l(v, m.sibling),
                        (M = n(m, S)),
                        (M.return = v),
                        (v = M))
                      : (l(v, m),
                        (M = Gi(S, v.mode, M)),
                        (M.return = v),
                        (v = M)),
                  i(v))
                : l(v, m)
        }
        return function (v, m, S, M) {
            try {
                Pa = 0
                var k = yt(v, m, S, M)
                return ((pa = null), k)
            } catch (Y) {
                if (Y === ya || Y === uu) throw Y
                var nt = re(29, Y, null, v.mode)
                return ((nt.lanes = M), (nt.return = v), nt)
            }
        }
    }
    var Xl = ir(!0),
        cr = ir(!1),
        rl = !1
    function Pi(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        }
    }
    function tc(t, e) {
        ;((t = t.updateQueue),
            e.updateQueue === t &&
                (e.updateQueue = {
                    baseState: t.baseState,
                    firstBaseUpdate: t.firstBaseUpdate,
                    lastBaseUpdate: t.lastBaseUpdate,
                    shared: t.shared,
                    callbacks: null,
                }))
    }
    function ol(t) {
        return { lane: t, tag: 0, payload: null, callback: null, next: null }
    }
    function hl(t, e, l) {
        var a = t.updateQueue
        if (a === null) return null
        if (((a = a.shared), (it & 2) !== 0)) {
            var n = a.pending
            return (
                n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
                (a.pending = e),
                (e = Pn(t)),
                Zs(t, null, l),
                e
            )
        }
        return (In(t, a, e, l), Pn(t))
    }
    function en(t, e, l) {
        if (
            ((e = e.updateQueue),
            e !== null && ((e = e.shared), (l & 4194048) !== 0))
        ) {
            var a = e.lanes
            ;((a &= t.pendingLanes), (l |= a), (e.lanes = l), If(t, l))
        }
    }
    function ec(t, e) {
        var l = t.updateQueue,
            a = t.alternate
        if (a !== null && ((a = a.updateQueue), l === a)) {
            var n = null,
                u = null
            if (((l = l.firstBaseUpdate), l !== null)) {
                do {
                    var i = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null,
                    }
                    ;(u === null ? (n = u = i) : (u = u.next = i), (l = l.next))
                } while (l !== null)
                u === null ? (n = u = e) : (u = u.next = e)
            } else n = u = e
            ;((l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks,
            }),
                (t.updateQueue = l))
            return
        }
        ;((t = l.lastBaseUpdate),
            t === null ? (l.firstBaseUpdate = e) : (t.next = e),
            (l.lastBaseUpdate = e))
    }
    var lc = !1
    function ln() {
        if (lc) {
            var t = ga
            if (t !== null) throw t
        }
    }
    function an(t, e, l, a) {
        lc = !1
        var n = t.updateQueue
        rl = !1
        var u = n.firstBaseUpdate,
            i = n.lastBaseUpdate,
            s = n.shared.pending
        if (s !== null) {
            n.shared.pending = null
            var d = s,
                T = d.next
            ;((d.next = null), i === null ? (u = T) : (i.next = T), (i = d))
            var _ = t.alternate
            _ !== null &&
                ((_ = _.updateQueue),
                (s = _.lastBaseUpdate),
                s !== i &&
                    (s === null ? (_.firstBaseUpdate = T) : (s.next = T),
                    (_.lastBaseUpdate = d)))
        }
        if (u !== null) {
            var D = n.baseState
            ;((i = 0), (_ = T = d = null), (s = u))
            do {
                var z = s.lane & -536870913,
                    E = z !== s.lane
                if (E ? (P & z) === z : (a & z) === z) {
                    ;(z !== 0 && z === ma && (lc = !0),
                        _ !== null &&
                            (_ = _.next =
                                {
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: null,
                                    next: null,
                                }))
                    t: {
                        var q = t,
                            G = s
                        z = e
                        var yt = l
                        switch (G.tag) {
                            case 1:
                                if (((q = G.payload), typeof q == 'function')) {
                                    D = q.call(yt, D, z)
                                    break t
                                }
                                D = q
                                break t
                            case 3:
                                q.flags = (q.flags & -65537) | 128
                            case 0:
                                if (
                                    ((q = G.payload),
                                    (z =
                                        typeof q == 'function'
                                            ? q.call(yt, D, z)
                                            : q),
                                    z == null)
                                )
                                    break t
                                D = N({}, D, z)
                                break t
                            case 2:
                                rl = !0
                        }
                    }
                    ;((z = s.callback),
                        z !== null &&
                            ((t.flags |= 64),
                            E && (t.flags |= 8192),
                            (E = n.callbacks),
                            E === null ? (n.callbacks = [z]) : E.push(z)))
                } else
                    ((E = {
                        lane: z,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null,
                    }),
                        _ === null ? ((T = _ = E), (d = D)) : (_ = _.next = E),
                        (i |= z))
                if (((s = s.next), s === null)) {
                    if (((s = n.shared.pending), s === null)) break
                    ;((E = s),
                        (s = E.next),
                        (E.next = null),
                        (n.lastBaseUpdate = E),
                        (n.shared.pending = null))
                }
            } while (!0)
            ;(_ === null && (d = D),
                (n.baseState = d),
                (n.firstBaseUpdate = T),
                (n.lastBaseUpdate = _),
                u === null && (n.shared.lanes = 0),
                (pl |= i),
                (t.lanes = i),
                (t.memoizedState = D))
        }
    }
    function fr(t, e) {
        if (typeof t != 'function') throw Error(f(191, t))
        t.call(e)
    }
    function sr(t, e) {
        var l = t.callbacks
        if (l !== null)
            for (t.callbacks = null, t = 0; t < l.length; t++) fr(l[t], e)
    }
    var va = y(null),
        su = y(0)
    function rr(t, e) {
        ;((t = Ie), B(su, t), B(va, e), (Ie = t | e.baseLanes))
    }
    function ac() {
        ;(B(su, Ie), B(va, va.current))
    }
    function nc() {
        ;((Ie = su.current), R(va), R(su))
    }
    var oe = y(null),
        Ae = null
    function dl(t) {
        var e = t.alternate
        ;(B(Mt, Mt.current & 1),
            B(oe, t),
            Ae === null &&
                (e === null ||
                    va.current !== null ||
                    e.memoizedState !== null) &&
                (Ae = t))
    }
    function uc(t) {
        ;(B(Mt, Mt.current), B(oe, t), Ae === null && (Ae = t))
    }
    function or(t) {
        t.tag === 22
            ? (B(Mt, Mt.current), B(oe, t), Ae === null && (Ae = t))
            : ml()
    }
    function ml() {
        ;(B(Mt, Mt.current), B(oe, oe.current))
    }
    function he(t) {
        ;(R(oe), Ae === t && (Ae = null), R(Mt))
    }
    var Mt = y(0)
    function ru(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var l = e.memoizedState
                if (
                    l !== null &&
                    ((l = l.dehydrated), l === null || hf(l) || df(l))
                )
                    return e
            } else if (
                e.tag === 19 &&
                (e.memoizedProps.revealOrder === 'forwards' ||
                    e.memoizedProps.revealOrder === 'backwards' ||
                    e.memoizedProps.revealOrder ===
                        'unstable_legacy-backwards' ||
                    e.memoizedProps.revealOrder === 'together')
            ) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                ;((e.child.return = e), (e = e.child))
                continue
            }
            if (e === t) break
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return null
                e = e.return
            }
            ;((e.sibling.return = e.return), (e = e.sibling))
        }
        return null
    }
    var Ze = 0,
        K = null,
        mt = null,
        Ut = null,
        ou = !1,
        ba = !1,
        Zl = !1,
        hu = 0,
        nn = 0,
        Sa = null,
        Bm = 0
    function xt() {
        throw Error(f(321))
    }
    function ic(t, e) {
        if (e === null) return !1
        for (var l = 0; l < e.length && l < t.length; l++)
            if (!se(t[l], e[l])) return !1
        return !0
    }
    function cc(t, e, l, a, n, u) {
        return (
            (Ze = u),
            (K = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (O.H = t === null || t.memoizedState === null ? Jr : zc),
            (Zl = !1),
            (u = l(a, n)),
            (Zl = !1),
            ba && (u = dr(e, l, a, n)),
            hr(t),
            u
        )
    }
    function hr(t) {
        O.H = fn
        var e = mt !== null && mt.next !== null
        if (
            ((Ze = 0),
            (Ut = mt = K = null),
            (ou = !1),
            (nn = 0),
            (Sa = null),
            e)
        )
            throw Error(f(300))
        t === null ||
            Nt ||
            ((t = t.dependencies), t !== null && lu(t) && (Nt = !0))
    }
    function dr(t, e, l, a) {
        K = t
        var n = 0
        do {
            if ((ba && (Sa = null), (nn = 0), (ba = !1), 25 <= n))
                throw Error(f(301))
            if (((n += 1), (Ut = mt = null), t.updateQueue != null)) {
                var u = t.updateQueue
                ;((u.lastEffect = null),
                    (u.events = null),
                    (u.stores = null),
                    u.memoCache != null && (u.memoCache.index = 0))
            }
            ;((O.H = $r), (u = e(l, a)))
        } while (ba)
        return u
    }
    function qm() {
        var t = O.H,
            e = t.useState()[0]
        return (
            (e = typeof e.then == 'function' ? un(e) : e),
            (t = t.useState()[0]),
            (mt !== null ? mt.memoizedState : null) !== t && (K.flags |= 1024),
            e
        )
    }
    function fc() {
        var t = hu !== 0
        return ((hu = 0), t)
    }
    function sc(t, e, l) {
        ;((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l))
    }
    function rc(t) {
        if (ou) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue
                ;(e !== null && (e.pending = null), (t = t.next))
            }
            ou = !1
        }
        ;((Ze = 0), (Ut = mt = K = null), (ba = !1), (nn = hu = 0), (Sa = null))
    }
    function Ft() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        }
        return (
            Ut === null ? (K.memoizedState = Ut = t) : (Ut = Ut.next = t),
            Ut
        )
    }
    function Dt() {
        if (mt === null) {
            var t = K.alternate
            t = t !== null ? t.memoizedState : null
        } else t = mt.next
        var e = Ut === null ? K.memoizedState : Ut.next
        if (e !== null) ((Ut = e), (mt = t))
        else {
            if (t === null)
                throw K.alternate === null ? Error(f(467)) : Error(f(310))
            ;((mt = t),
                (t = {
                    memoizedState: mt.memoizedState,
                    baseState: mt.baseState,
                    baseQueue: mt.baseQueue,
                    queue: mt.queue,
                    next: null,
                }),
                Ut === null ? (K.memoizedState = Ut = t) : (Ut = Ut.next = t))
        }
        return Ut
    }
    function du() {
        return { lastEffect: null, events: null, stores: null, memoCache: null }
    }
    function un(t) {
        var e = nn
        return (
            (nn += 1),
            Sa === null && (Sa = []),
            (t = ar(Sa, t, e)),
            (e = K),
            (Ut === null ? e.memoizedState : Ut.next) === null &&
                ((e = e.alternate),
                (O.H = e === null || e.memoizedState === null ? Jr : zc)),
            t
        )
    }
    function mu(t) {
        if (t !== null && typeof t == 'object') {
            if (typeof t.then == 'function') return un(t)
            if (t.$$typeof === zt) return Lt(t)
        }
        throw Error(f(438, String(t)))
    }
    function oc(t) {
        var e = null,
            l = K.updateQueue
        if ((l !== null && (e = l.memoCache), e == null)) {
            var a = K.alternate
            a !== null &&
                ((a = a.updateQueue),
                a !== null &&
                    ((a = a.memoCache),
                    a != null &&
                        (e = {
                            data: a.data.map(function (n) {
                                return n.slice()
                            }),
                            index: 0,
                        })))
        }
        if (
            (e == null && (e = { data: [], index: 0 }),
            l === null && ((l = du()), (K.updateQueue = l)),
            (l.memoCache = e),
            (l = e.data[e.index]),
            l === void 0)
        )
            for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Be
        return (e.index++, l)
    }
    function we(t, e) {
        return typeof e == 'function' ? e(t) : e
    }
    function gu(t) {
        var e = Dt()
        return hc(e, mt, t)
    }
    function hc(t, e, l) {
        var a = t.queue
        if (a === null) throw Error(f(311))
        a.lastRenderedReducer = l
        var n = t.baseQueue,
            u = a.pending
        if (u !== null) {
            if (n !== null) {
                var i = n.next
                ;((n.next = u.next), (u.next = i))
            }
            ;((e.baseQueue = n = u), (a.pending = null))
        }
        if (((u = t.baseState), n === null)) t.memoizedState = u
        else {
            e = n.next
            var s = (i = null),
                d = null,
                T = e,
                _ = !1
            do {
                var D = T.lane & -536870913
                if (D !== T.lane ? (P & D) === D : (Ze & D) === D) {
                    var z = T.revertLane
                    if (z === 0)
                        (d !== null &&
                            (d = d.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: T.action,
                                    hasEagerState: T.hasEagerState,
                                    eagerState: T.eagerState,
                                    next: null,
                                }),
                            D === ma && (_ = !0))
                    else if ((Ze & z) === z) {
                        ;((T = T.next), z === ma && (_ = !0))
                        continue
                    } else
                        ((D = {
                            lane: 0,
                            revertLane: T.revertLane,
                            gesture: null,
                            action: T.action,
                            hasEagerState: T.hasEagerState,
                            eagerState: T.eagerState,
                            next: null,
                        }),
                            d === null
                                ? ((s = d = D), (i = u))
                                : (d = d.next = D),
                            (K.lanes |= z),
                            (pl |= z))
                    ;((D = T.action),
                        Zl && l(u, D),
                        (u = T.hasEagerState ? T.eagerState : l(u, D)))
                } else
                    ((z = {
                        lane: D,
                        revertLane: T.revertLane,
                        gesture: T.gesture,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null,
                    }),
                        d === null ? ((s = d = z), (i = u)) : (d = d.next = z),
                        (K.lanes |= D),
                        (pl |= D))
                T = T.next
            } while (T !== null && T !== e)
            if (
                (d === null ? (i = u) : (d.next = s),
                !se(u, t.memoizedState) &&
                    ((Nt = !0), _ && ((l = ga), l !== null)))
            )
                throw l
            ;((t.memoizedState = u),
                (t.baseState = i),
                (t.baseQueue = d),
                (a.lastRenderedState = u))
        }
        return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch])
    }
    function dc(t) {
        var e = Dt(),
            l = e.queue
        if (l === null) throw Error(f(311))
        l.lastRenderedReducer = t
        var a = l.dispatch,
            n = l.pending,
            u = e.memoizedState
        if (n !== null) {
            l.pending = null
            var i = (n = n.next)
            do ((u = t(u, i.action)), (i = i.next))
            while (i !== n)
            ;(se(u, e.memoizedState) || (Nt = !0),
                (e.memoizedState = u),
                e.baseQueue === null && (e.baseState = u),
                (l.lastRenderedState = u))
        }
        return [u, a]
    }
    function mr(t, e, l) {
        var a = K,
            n = Dt(),
            u = et
        if (u) {
            if (l === void 0) throw Error(f(407))
            l = l()
        } else l = e()
        var i = !se((mt || n).memoizedState, l)
        if (
            (i && ((n.memoizedState = l), (Nt = !0)),
            (n = n.queue),
            yc(pr.bind(null, a, n, t), [t]),
            n.getSnapshot !== e ||
                i ||
                (Ut !== null && Ut.memoizedState.tag & 1))
        ) {
            if (
                ((a.flags |= 2048),
                Ta(9, { destroy: void 0 }, yr.bind(null, a, n, l, e), null),
                vt === null)
            )
                throw Error(f(349))
            u || (Ze & 127) !== 0 || gr(a, e, l)
        }
        return l
    }
    function gr(t, e, l) {
        ;((t.flags |= 16384),
            (t = { getSnapshot: e, value: l }),
            (e = K.updateQueue),
            e === null
                ? ((e = du()), (K.updateQueue = e), (e.stores = [t]))
                : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)))
    }
    function yr(t, e, l, a) {
        ;((e.value = l), (e.getSnapshot = a), vr(e) && br(t))
    }
    function pr(t, e, l) {
        return l(function () {
            vr(e) && br(t)
        })
    }
    function vr(t) {
        var e = t.getSnapshot
        t = t.value
        try {
            var l = e()
            return !se(t, l)
        } catch {
            return !0
        }
    }
    function br(t) {
        var e = Bl(t, 2)
        e !== null && ue(e, t, 2)
    }
    function mc(t) {
        var e = Ft()
        if (typeof t == 'function') {
            var l = t
            if (((t = l()), Zl)) {
                al(!0)
                try {
                    l()
                } finally {
                    al(!1)
                }
            }
        }
        return (
            (e.memoizedState = e.baseState = t),
            (e.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: we,
                lastRenderedState: t,
            }),
            e
        )
    }
    function Sr(t, e, l, a) {
        return ((t.baseState = l), hc(t, mt, typeof a == 'function' ? a : we))
    }
    function jm(t, e, l, a, n) {
        if (vu(t)) throw Error(f(485))
        if (((t = e.action), t !== null)) {
            var u = {
                payload: n,
                action: t,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (i) {
                    u.listeners.push(i)
                },
            }
            ;(O.T !== null ? l(!0) : (u.isTransition = !1),
                a(u),
                (l = e.pending),
                l === null
                    ? ((u.next = e.pending = u), Tr(e, u))
                    : ((u.next = l.next), (e.pending = l.next = u)))
        }
    }
    function Tr(t, e) {
        var l = e.action,
            a = e.payload,
            n = t.state
        if (e.isTransition) {
            var u = O.T,
                i = {}
            O.T = i
            try {
                var s = l(n, a),
                    d = O.S
                ;(d !== null && d(i, s), zr(t, e, s))
            } catch (T) {
                gc(t, e, T)
            } finally {
                ;(u !== null && i.types !== null && (u.types = i.types),
                    (O.T = u))
            }
        } else
            try {
                ;((u = l(n, a)), zr(t, e, u))
            } catch (T) {
                gc(t, e, T)
            }
    }
    function zr(t, e, l) {
        l !== null && typeof l == 'object' && typeof l.then == 'function'
            ? l.then(
                  function (a) {
                      Ar(t, e, a)
                  },
                  function (a) {
                      return gc(t, e, a)
                  }
              )
            : Ar(t, e, l)
    }
    function Ar(t, e, l) {
        ;((e.status = 'fulfilled'),
            (e.value = l),
            Er(e),
            (t.state = l),
            (e = t.pending),
            e !== null &&
                ((l = e.next),
                l === e
                    ? (t.pending = null)
                    : ((l = l.next), (e.next = l), Tr(t, l))))
    }
    function gc(t, e, l) {
        var a = t.pending
        if (((t.pending = null), a !== null)) {
            a = a.next
            do ((e.status = 'rejected'), (e.reason = l), Er(e), (e = e.next))
            while (e !== a)
        }
        t.action = null
    }
    function Er(t) {
        t = t.listeners
        for (var e = 0; e < t.length; e++) (0, t[e])()
    }
    function xr(t, e) {
        return e
    }
    function _r(t, e) {
        if (et) {
            var l = vt.formState
            if (l !== null) {
                t: {
                    var a = K
                    if (et) {
                        if (St) {
                            e: {
                                for (var n = St, u = ze; n.nodeType !== 8; ) {
                                    if (!u) {
                                        n = null
                                        break e
                                    }
                                    if (((n = Ee(n.nextSibling)), n === null)) {
                                        n = null
                                        break e
                                    }
                                }
                                ;((u = n.data),
                                    (n = u === 'F!' || u === 'F' ? n : null))
                            }
                            if (n) {
                                ;((St = Ee(n.nextSibling)),
                                    (a = n.data === 'F!'))
                                break t
                            }
                        }
                        fl(a)
                    }
                    a = !1
                }
                a && (e = l[0])
            }
        }
        return (
            (l = Ft()),
            (l.memoizedState = l.baseState = e),
            (a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: xr,
                lastRenderedState: e,
            }),
            (l.queue = a),
            (l = wr.bind(null, K, a)),
            (a.dispatch = l),
            (a = mc(!1)),
            (u = Tc.bind(null, K, !1, a.queue)),
            (a = Ft()),
            (n = { state: e, dispatch: null, action: t, pending: null }),
            (a.queue = n),
            (l = jm.bind(null, K, n, u, l)),
            (n.dispatch = l),
            (a.memoizedState = t),
            [e, l, !1]
        )
    }
    function Or(t) {
        var e = Dt()
        return Mr(e, mt, t)
    }
    function Mr(t, e, l) {
        if (
            ((e = hc(t, e, xr)[0]),
            (t = gu(we)[0]),
            typeof e == 'object' && e !== null && typeof e.then == 'function')
        )
            try {
                var a = un(e)
            } catch (i) {
                throw i === ya ? uu : i
            }
        else a = e
        e = Dt()
        var n = e.queue,
            u = n.dispatch
        return (
            l !== e.memoizedState &&
                ((K.flags |= 2048),
                Ta(9, { destroy: void 0 }, Ym.bind(null, n, l), null)),
            [a, u, t]
        )
    }
    function Ym(t, e) {
        t.action = e
    }
    function Dr(t) {
        var e = Dt(),
            l = mt
        if (l !== null) return Mr(e, l, t)
        ;(Dt(), (e = e.memoizedState), (l = Dt()))
        var a = l.queue.dispatch
        return ((l.memoizedState = t), [e, a, !1])
    }
    function Ta(t, e, l, a) {
        return (
            (t = { tag: t, create: l, deps: a, inst: e, next: null }),
            (e = K.updateQueue),
            e === null && ((e = du()), (K.updateQueue = e)),
            (l = e.lastEffect),
            l === null
                ? (e.lastEffect = t.next = t)
                : ((a = l.next),
                  (l.next = t),
                  (t.next = a),
                  (e.lastEffect = t)),
            t
        )
    }
    function Rr() {
        return Dt().memoizedState
    }
    function yu(t, e, l, a) {
        var n = Ft()
        ;((K.flags |= t),
            (n.memoizedState = Ta(
                1 | e,
                { destroy: void 0 },
                l,
                a === void 0 ? null : a
            )))
    }
    function pu(t, e, l, a) {
        var n = Dt()
        a = a === void 0 ? null : a
        var u = n.memoizedState.inst
        mt !== null && a !== null && ic(a, mt.memoizedState.deps)
            ? (n.memoizedState = Ta(e, u, l, a))
            : ((K.flags |= t), (n.memoizedState = Ta(1 | e, u, l, a)))
    }
    function Ur(t, e) {
        yu(8390656, 8, t, e)
    }
    function yc(t, e) {
        pu(2048, 8, t, e)
    }
    function km(t) {
        K.flags |= 4
        var e = K.updateQueue
        if (e === null) ((e = du()), (K.updateQueue = e), (e.events = [t]))
        else {
            var l = e.events
            l === null ? (e.events = [t]) : l.push(t)
        }
    }
    function Nr(t) {
        var e = Dt().memoizedState
        return (
            km({ ref: e, nextImpl: t }),
            function () {
                if ((it & 2) !== 0) throw Error(f(440))
                return e.impl.apply(void 0, arguments)
            }
        )
    }
    function Cr(t, e) {
        return pu(4, 2, t, e)
    }
    function Hr(t, e) {
        return pu(4, 4, t, e)
    }
    function Br(t, e) {
        if (typeof e == 'function') {
            t = t()
            var l = e(t)
            return function () {
                typeof l == 'function' ? l() : e(null)
            }
        }
        if (e != null)
            return (
                (t = t()),
                (e.current = t),
                function () {
                    e.current = null
                }
            )
    }
    function qr(t, e, l) {
        ;((l = l != null ? l.concat([t]) : null),
            pu(4, 4, Br.bind(null, e, t), l))
    }
    function pc() {}
    function jr(t, e) {
        var l = Dt()
        e = e === void 0 ? null : e
        var a = l.memoizedState
        return e !== null && ic(e, a[1])
            ? a[0]
            : ((l.memoizedState = [t, e]), t)
    }
    function Yr(t, e) {
        var l = Dt()
        e = e === void 0 ? null : e
        var a = l.memoizedState
        if (e !== null && ic(e, a[1])) return a[0]
        if (((a = t()), Zl)) {
            al(!0)
            try {
                t()
            } finally {
                al(!1)
            }
        }
        return ((l.memoizedState = [a, e]), a)
    }
    function vc(t, e, l) {
        return l === void 0 || ((Ze & 1073741824) !== 0 && (P & 261930) === 0)
            ? (t.memoizedState = e)
            : ((t.memoizedState = l), (t = Go()), (K.lanes |= t), (pl |= t), l)
    }
    function kr(t, e, l, a) {
        return se(l, e)
            ? l
            : va.current !== null
              ? ((t = vc(t, l, a)), se(t, e) || (Nt = !0), t)
              : (Ze & 42) === 0 ||
                  ((Ze & 1073741824) !== 0 && (P & 261930) === 0)
                ? ((Nt = !0), (t.memoizedState = l))
                : ((t = Go()), (K.lanes |= t), (pl |= t), e)
    }
    function Gr(t, e, l, a, n) {
        var u = C.p
        C.p = u !== 0 && 8 > u ? u : 8
        var i = O.T,
            s = {}
        ;((O.T = s), Tc(t, !1, e, l))
        try {
            var d = n(),
                T = O.S
            if (
                (T !== null && T(s, d),
                d !== null &&
                    typeof d == 'object' &&
                    typeof d.then == 'function')
            ) {
                var _ = Hm(d, a)
                cn(t, e, _, ge(t))
            } else cn(t, e, a, ge(t))
        } catch (D) {
            cn(
                t,
                e,
                { then: function () {}, status: 'rejected', reason: D },
                ge()
            )
        } finally {
            ;((C.p = u),
                i !== null && s.types !== null && (i.types = s.types),
                (O.T = i))
        }
    }
    function Gm() {}
    function bc(t, e, l, a) {
        if (t.tag !== 5) throw Error(f(476))
        var n = Qr(t).queue
        Gr(
            t,
            n,
            e,
            L,
            l === null
                ? Gm
                : function () {
                      return (Lr(t), l(a))
                  }
        )
    }
    function Qr(t) {
        var e = t.memoizedState
        if (e !== null) return e
        e = {
            memoizedState: L,
            baseState: L,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: we,
                lastRenderedState: L,
            },
            next: null,
        }
        var l = {}
        return (
            (e.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: we,
                    lastRenderedState: l,
                },
                next: null,
            }),
            (t.memoizedState = e),
            (t = t.alternate),
            t !== null && (t.memoizedState = e),
            e
        )
    }
    function Lr(t) {
        var e = Qr(t)
        ;(e.next === null && (e = t.alternate.memoizedState),
            cn(t, e.next.queue, {}, ge()))
    }
    function Sc() {
        return Lt(En)
    }
    function Xr() {
        return Dt().memoizedState
    }
    function Zr() {
        return Dt().memoizedState
    }
    function Qm(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
                case 24:
                case 3:
                    var l = ge()
                    t = ol(l)
                    var a = hl(e, t, l)
                    ;(a !== null && (ue(a, e, l), en(a, e, l)),
                        (e = { cache: $i() }),
                        (t.payload = e))
                    return
            }
            e = e.return
        }
    }
    function Lm(t, e, l) {
        var a = ge()
        ;((l = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            vu(t)
                ? Vr(e, l)
                : ((l = Yi(t, e, l, a)),
                  l !== null && (ue(l, t, a), Kr(l, e, a))))
    }
    function wr(t, e, l) {
        var a = ge()
        cn(t, e, l, a)
    }
    function cn(t, e, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }
        if (vu(t)) Vr(e, n)
        else {
            var u = t.alternate
            if (
                t.lanes === 0 &&
                (u === null || u.lanes === 0) &&
                ((u = e.lastRenderedReducer), u !== null)
            )
                try {
                    var i = e.lastRenderedState,
                        s = u(i, l)
                    if (((n.hasEagerState = !0), (n.eagerState = s), se(s, i)))
                        return (In(t, e, n, 0), vt === null && Fn(), !1)
                } catch {}
            if (((l = Yi(t, e, n, a)), l !== null))
                return (ue(l, t, a), Kr(l, e, a), !0)
        }
        return !1
    }
    function Tc(t, e, l, a) {
        if (
            ((a = {
                lane: 2,
                revertLane: Pc(),
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            vu(t))
        ) {
            if (e) throw Error(f(479))
        } else ((e = Yi(t, l, a, 2)), e !== null && ue(e, t, 2))
    }
    function vu(t) {
        var e = t.alternate
        return t === K || (e !== null && e === K)
    }
    function Vr(t, e) {
        ba = ou = !0
        var l = t.pending
        ;(l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
            (t.pending = e))
    }
    function Kr(t, e, l) {
        if ((l & 4194048) !== 0) {
            var a = e.lanes
            ;((a &= t.pendingLanes), (l |= a), (e.lanes = l), If(t, l))
        }
    }
    var fn = {
        readContext: Lt,
        use: mu,
        useCallback: xt,
        useContext: xt,
        useEffect: xt,
        useImperativeHandle: xt,
        useLayoutEffect: xt,
        useInsertionEffect: xt,
        useMemo: xt,
        useReducer: xt,
        useRef: xt,
        useState: xt,
        useDebugValue: xt,
        useDeferredValue: xt,
        useTransition: xt,
        useSyncExternalStore: xt,
        useId: xt,
        useHostTransitionStatus: xt,
        useFormState: xt,
        useActionState: xt,
        useOptimistic: xt,
        useMemoCache: xt,
        useCacheRefresh: xt,
    }
    fn.useEffectEvent = xt
    var Jr = {
            readContext: Lt,
            use: mu,
            useCallback: function (t, e) {
                return ((Ft().memoizedState = [t, e === void 0 ? null : e]), t)
            },
            useContext: Lt,
            useEffect: Ur,
            useImperativeHandle: function (t, e, l) {
                ;((l = l != null ? l.concat([t]) : null),
                    yu(4194308, 4, Br.bind(null, e, t), l))
            },
            useLayoutEffect: function (t, e) {
                return yu(4194308, 4, t, e)
            },
            useInsertionEffect: function (t, e) {
                yu(4, 2, t, e)
            },
            useMemo: function (t, e) {
                var l = Ft()
                e = e === void 0 ? null : e
                var a = t()
                if (Zl) {
                    al(!0)
                    try {
                        t()
                    } finally {
                        al(!1)
                    }
                }
                return ((l.memoizedState = [a, e]), a)
            },
            useReducer: function (t, e, l) {
                var a = Ft()
                if (l !== void 0) {
                    var n = l(e)
                    if (Zl) {
                        al(!0)
                        try {
                            l(e)
                        } finally {
                            al(!1)
                        }
                    }
                } else n = e
                return (
                    (a.memoizedState = a.baseState = n),
                    (t = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: t,
                        lastRenderedState: n,
                    }),
                    (a.queue = t),
                    (t = t.dispatch = Lm.bind(null, K, t)),
                    [a.memoizedState, t]
                )
            },
            useRef: function (t) {
                var e = Ft()
                return ((t = { current: t }), (e.memoizedState = t))
            },
            useState: function (t) {
                t = mc(t)
                var e = t.queue,
                    l = wr.bind(null, K, e)
                return ((e.dispatch = l), [t.memoizedState, l])
            },
            useDebugValue: pc,
            useDeferredValue: function (t, e) {
                var l = Ft()
                return vc(l, t, e)
            },
            useTransition: function () {
                var t = mc(!1)
                return (
                    (t = Gr.bind(null, K, t.queue, !0, !1)),
                    (Ft().memoizedState = t),
                    [!1, t]
                )
            },
            useSyncExternalStore: function (t, e, l) {
                var a = K,
                    n = Ft()
                if (et) {
                    if (l === void 0) throw Error(f(407))
                    l = l()
                } else {
                    if (((l = e()), vt === null)) throw Error(f(349))
                    ;(P & 127) !== 0 || gr(a, e, l)
                }
                n.memoizedState = l
                var u = { value: l, getSnapshot: e }
                return (
                    (n.queue = u),
                    Ur(pr.bind(null, a, u, t), [t]),
                    (a.flags |= 2048),
                    Ta(9, { destroy: void 0 }, yr.bind(null, a, u, l, e), null),
                    l
                )
            },
            useId: function () {
                var t = Ft(),
                    e = vt.identifierPrefix
                if (et) {
                    var l = Ue,
                        a = Re
                    ;((l = (a & ~(1 << (32 - fe(a) - 1))).toString(32) + l),
                        (e = '_' + e + 'R_' + l),
                        (l = hu++),
                        0 < l && (e += 'H' + l.toString(32)),
                        (e += '_'))
                } else ((l = Bm++), (e = '_' + e + 'r_' + l.toString(32) + '_'))
                return (t.memoizedState = e)
            },
            useHostTransitionStatus: Sc,
            useFormState: _r,
            useActionState: _r,
            useOptimistic: function (t) {
                var e = Ft()
                e.memoizedState = e.baseState = t
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null,
                }
                return (
                    (e.queue = l),
                    (e = Tc.bind(null, K, !0, l)),
                    (l.dispatch = e),
                    [t, e]
                )
            },
            useMemoCache: oc,
            useCacheRefresh: function () {
                return (Ft().memoizedState = Qm.bind(null, K))
            },
            useEffectEvent: function (t) {
                var e = Ft(),
                    l = { impl: t }
                return (
                    (e.memoizedState = l),
                    function () {
                        if ((it & 2) !== 0) throw Error(f(440))
                        return l.impl.apply(void 0, arguments)
                    }
                )
            },
        },
        zc = {
            readContext: Lt,
            use: mu,
            useCallback: jr,
            useContext: Lt,
            useEffect: yc,
            useImperativeHandle: qr,
            useInsertionEffect: Cr,
            useLayoutEffect: Hr,
            useMemo: Yr,
            useReducer: gu,
            useRef: Rr,
            useState: function () {
                return gu(we)
            },
            useDebugValue: pc,
            useDeferredValue: function (t, e) {
                var l = Dt()
                return kr(l, mt.memoizedState, t, e)
            },
            useTransition: function () {
                var t = gu(we)[0],
                    e = Dt().memoizedState
                return [typeof t == 'boolean' ? t : un(t), e]
            },
            useSyncExternalStore: mr,
            useId: Xr,
            useHostTransitionStatus: Sc,
            useFormState: Or,
            useActionState: Or,
            useOptimistic: function (t, e) {
                var l = Dt()
                return Sr(l, mt, t, e)
            },
            useMemoCache: oc,
            useCacheRefresh: Zr,
        }
    zc.useEffectEvent = Nr
    var $r = {
        readContext: Lt,
        use: mu,
        useCallback: jr,
        useContext: Lt,
        useEffect: yc,
        useImperativeHandle: qr,
        useInsertionEffect: Cr,
        useLayoutEffect: Hr,
        useMemo: Yr,
        useReducer: dc,
        useRef: Rr,
        useState: function () {
            return dc(we)
        },
        useDebugValue: pc,
        useDeferredValue: function (t, e) {
            var l = Dt()
            return mt === null ? vc(l, t, e) : kr(l, mt.memoizedState, t, e)
        },
        useTransition: function () {
            var t = dc(we)[0],
                e = Dt().memoizedState
            return [typeof t == 'boolean' ? t : un(t), e]
        },
        useSyncExternalStore: mr,
        useId: Xr,
        useHostTransitionStatus: Sc,
        useFormState: Dr,
        useActionState: Dr,
        useOptimistic: function (t, e) {
            var l = Dt()
            return mt !== null
                ? Sr(l, mt, t, e)
                : ((l.baseState = t), [t, l.queue.dispatch])
        },
        useMemoCache: oc,
        useCacheRefresh: Zr,
    }
    $r.useEffectEvent = Nr
    function Ac(t, e, l, a) {
        ;((e = t.memoizedState),
            (l = l(a, e)),
            (l = l == null ? e : N({}, e, l)),
            (t.memoizedState = l),
            t.lanes === 0 && (t.updateQueue.baseState = l))
    }
    var Ec = {
        enqueueSetState: function (t, e, l) {
            t = t._reactInternals
            var a = ge(),
                n = ol(a)
            ;((n.payload = e),
                l != null && (n.callback = l),
                (e = hl(t, n, a)),
                e !== null && (ue(e, t, a), en(e, t, a)))
        },
        enqueueReplaceState: function (t, e, l) {
            t = t._reactInternals
            var a = ge(),
                n = ol(a)
            ;((n.tag = 1),
                (n.payload = e),
                l != null && (n.callback = l),
                (e = hl(t, n, a)),
                e !== null && (ue(e, t, a), en(e, t, a)))
        },
        enqueueForceUpdate: function (t, e) {
            t = t._reactInternals
            var l = ge(),
                a = ol(l)
            ;((a.tag = 2),
                e != null && (a.callback = e),
                (e = hl(t, a, l)),
                e !== null && (ue(e, t, l), en(e, t, l)))
        },
    }
    function Wr(t, e, l, a, n, u, i) {
        return (
            (t = t.stateNode),
            typeof t.shouldComponentUpdate == 'function'
                ? t.shouldComponentUpdate(a, u, i)
                : e.prototype && e.prototype.isPureReactComponent
                  ? !Ka(l, a) || !Ka(n, u)
                  : !0
        )
    }
    function Fr(t, e, l, a) {
        ;((t = e.state),
            typeof e.componentWillReceiveProps == 'function' &&
                e.componentWillReceiveProps(l, a),
            typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
                e.UNSAFE_componentWillReceiveProps(l, a),
            e.state !== t && Ec.enqueueReplaceState(e, e.state, null))
    }
    function wl(t, e) {
        var l = e
        if ('ref' in e) {
            l = {}
            for (var a in e) a !== 'ref' && (l[a] = e[a])
        }
        if ((t = t.defaultProps)) {
            l === e && (l = N({}, l))
            for (var n in t) l[n] === void 0 && (l[n] = t[n])
        }
        return l
    }
    function Ir(t) {
        Wn(t)
    }
    function Pr(t) {
        console.error(t)
    }
    function to(t) {
        Wn(t)
    }
    function bu(t, e) {
        try {
            var l = t.onUncaughtError
            l(e.value, { componentStack: e.stack })
        } catch (a) {
            setTimeout(function () {
                throw a
            })
        }
    }
    function eo(t, e, l) {
        try {
            var a = t.onCaughtError
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null,
            })
        } catch (n) {
            setTimeout(function () {
                throw n
            })
        }
    }
    function xc(t, e, l) {
        return (
            (l = ol(l)),
            (l.tag = 3),
            (l.payload = { element: null }),
            (l.callback = function () {
                bu(t, e)
            }),
            l
        )
    }
    function lo(t) {
        return ((t = ol(t)), (t.tag = 3), t)
    }
    function ao(t, e, l, a) {
        var n = l.type.getDerivedStateFromError
        if (typeof n == 'function') {
            var u = a.value
            ;((t.payload = function () {
                return n(u)
            }),
                (t.callback = function () {
                    eo(e, l, a)
                }))
        }
        var i = l.stateNode
        i !== null &&
            typeof i.componentDidCatch == 'function' &&
            (t.callback = function () {
                ;(eo(e, l, a),
                    typeof n != 'function' &&
                        (vl === null ? (vl = new Set([this])) : vl.add(this)))
                var s = a.stack
                this.componentDidCatch(a.value, {
                    componentStack: s !== null ? s : '',
                })
            })
    }
    function Xm(t, e, l, a, n) {
        if (
            ((l.flags |= 32768),
            a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
            if (
                ((e = l.alternate),
                e !== null && da(e, l, n, !0),
                (l = oe.current),
                l !== null)
            ) {
                switch (l.tag) {
                    case 31:
                    case 13:
                        return (
                            Ae === null
                                ? Uu()
                                : l.alternate === null && _t === 0 && (_t = 3),
                            (l.flags &= -257),
                            (l.flags |= 65536),
                            (l.lanes = n),
                            a === iu
                                ? (l.flags |= 16384)
                                : ((e = l.updateQueue),
                                  e === null
                                      ? (l.updateQueue = new Set([a]))
                                      : e.add(a),
                                  Wc(t, a, n)),
                            !1
                        )
                    case 22:
                        return (
                            (l.flags |= 65536),
                            a === iu
                                ? (l.flags |= 16384)
                                : ((e = l.updateQueue),
                                  e === null
                                      ? ((e = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: new Set([a]),
                                        }),
                                        (l.updateQueue = e))
                                      : ((l = e.retryQueue),
                                        l === null
                                            ? (e.retryQueue = new Set([a]))
                                            : l.add(a)),
                                  Wc(t, a, n)),
                            !1
                        )
                }
                throw Error(f(435, l.tag))
            }
            return (Wc(t, a, n), Uu(), !1)
        }
        if (et)
            return (
                (e = oe.current),
                e !== null
                    ? ((e.flags & 65536) === 0 && (e.flags |= 256),
                      (e.flags |= 65536),
                      (e.lanes = n),
                      a !== Zi &&
                          ((t = Error(f(422), { cause: a })), Wa(be(t, l))))
                    : (a !== Zi &&
                          ((e = Error(f(423), { cause: a })), Wa(be(e, l))),
                      (t = t.current.alternate),
                      (t.flags |= 65536),
                      (n &= -n),
                      (t.lanes |= n),
                      (a = be(a, l)),
                      (n = xc(t.stateNode, a, n)),
                      ec(t, n),
                      _t !== 4 && (_t = 2)),
                !1
            )
        var u = Error(f(520), { cause: a })
        if (
            ((u = be(u, l)),
            yn === null ? (yn = [u]) : yn.push(u),
            _t !== 4 && (_t = 2),
            e === null)
        )
            return !0
        ;((a = be(a, l)), (l = e))
        do {
            switch (l.tag) {
                case 3:
                    return (
                        (l.flags |= 65536),
                        (t = n & -n),
                        (l.lanes |= t),
                        (t = xc(l.stateNode, a, t)),
                        ec(l, t),
                        !1
                    )
                case 1:
                    if (
                        ((e = l.type),
                        (u = l.stateNode),
                        (l.flags & 128) === 0 &&
                            (typeof e.getDerivedStateFromError == 'function' ||
                                (u !== null &&
                                    typeof u.componentDidCatch == 'function' &&
                                    (vl === null || !vl.has(u)))))
                    )
                        return (
                            (l.flags |= 65536),
                            (n &= -n),
                            (l.lanes |= n),
                            (n = lo(n)),
                            ao(n, t, l, a),
                            ec(l, n),
                            !1
                        )
            }
            l = l.return
        } while (l !== null)
        return !1
    }
    var _c = Error(f(461)),
        Nt = !1
    function Xt(t, e, l, a) {
        e.child = t === null ? cr(e, null, l, a) : Xl(e, t.child, l, a)
    }
    function no(t, e, l, a, n) {
        l = l.render
        var u = e.ref
        if ('ref' in a) {
            var i = {}
            for (var s in a) s !== 'ref' && (i[s] = a[s])
        } else i = a
        return (
            kl(e),
            (a = cc(t, e, l, i, u, n)),
            (s = fc()),
            t !== null && !Nt
                ? (sc(t, e, n), Ve(t, e, n))
                : (et && s && Li(e), (e.flags |= 1), Xt(t, e, a, n), e.child)
        )
    }
    function uo(t, e, l, a, n) {
        if (t === null) {
            var u = l.type
            return typeof u == 'function' &&
                !ki(u) &&
                u.defaultProps === void 0 &&
                l.compare === null
                ? ((e.tag = 15), (e.type = u), io(t, e, u, a, n))
                : ((t = tu(l.type, null, a, e, e.mode, n)),
                  (t.ref = e.ref),
                  (t.return = e),
                  (e.child = t))
        }
        if (((u = t.child), !Hc(t, n))) {
            var i = u.memoizedProps
            if (
                ((l = l.compare),
                (l = l !== null ? l : Ka),
                l(i, a) && t.ref === e.ref)
            )
                return Ve(t, e, n)
        }
        return (
            (e.flags |= 1),
            (t = Ge(u, a)),
            (t.ref = e.ref),
            (t.return = e),
            (e.child = t)
        )
    }
    function io(t, e, l, a, n) {
        if (t !== null) {
            var u = t.memoizedProps
            if (Ka(u, a) && t.ref === e.ref)
                if (((Nt = !1), (e.pendingProps = a = u), Hc(t, n)))
                    (t.flags & 131072) !== 0 && (Nt = !0)
                else return ((e.lanes = t.lanes), Ve(t, e, n))
        }
        return Oc(t, e, l, a, n)
    }
    function co(t, e, l, a) {
        var n = a.children,
            u = t !== null ? t.memoizedState : null
        if (
            (t === null &&
                e.stateNode === null &&
                (e.stateNode = {
                    _visibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                }),
            a.mode === 'hidden')
        ) {
            if ((e.flags & 128) !== 0) {
                if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
                    for (a = e.child = t.child, n = 0; a !== null; )
                        ((n = n | a.lanes | a.childLanes), (a = a.sibling))
                    a = n & ~u
                } else ((a = 0), (e.child = null))
                return fo(t, e, u, l, a)
            }
            if ((l & 536870912) !== 0)
                ((e.memoizedState = { baseLanes: 0, cachePool: null }),
                    t !== null && nu(e, u !== null ? u.cachePool : null),
                    u !== null ? rr(e, u) : ac(),
                    or(e))
            else
                return (
                    (a = e.lanes = 536870912),
                    fo(t, e, u !== null ? u.baseLanes | l : l, l, a)
                )
        } else
            u !== null
                ? (nu(e, u.cachePool), rr(e, u), ml(), (e.memoizedState = null))
                : (t !== null && nu(e, null), ac(), ml())
        return (Xt(t, e, n, l), e.child)
    }
    function sn(t, e) {
        return (
            (t !== null && t.tag === 22) ||
                e.stateNode !== null ||
                (e.stateNode = {
                    _visibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                }),
            e.sibling
        )
    }
    function fo(t, e, l, a, n) {
        var u = Fi()
        return (
            (u = u === null ? null : { parent: Rt._currentValue, pool: u }),
            (e.memoizedState = { baseLanes: l, cachePool: u }),
            t !== null && nu(e, null),
            ac(),
            or(e),
            t !== null && da(t, e, a, !0),
            (e.childLanes = n),
            null
        )
    }
    function Su(t, e) {
        return (
            (e = zu({ mode: e.mode, children: e.children }, t.mode)),
            (e.ref = t.ref),
            (t.child = e),
            (e.return = t),
            e
        )
    }
    function so(t, e, l) {
        return (
            Xl(e, t.child, null, l),
            (t = Su(e, e.pendingProps)),
            (t.flags |= 2),
            he(e),
            (e.memoizedState = null),
            t
        )
    }
    function Zm(t, e, l) {
        var a = e.pendingProps,
            n = (e.flags & 128) !== 0
        if (((e.flags &= -129), t === null)) {
            if (et) {
                if (a.mode === 'hidden')
                    return ((t = Su(e, a)), (e.lanes = 536870912), sn(null, t))
                if (
                    (uc(e),
                    (t = St)
                        ? ((t = zh(t, ze)),
                          (t = t !== null && t.data === '&' ? t : null),
                          t !== null &&
                              ((e.memoizedState = {
                                  dehydrated: t,
                                  treeContext:
                                      il !== null
                                          ? { id: Re, overflow: Ue }
                                          : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (l = Vs(t)),
                              (l.return = e),
                              (e.child = l),
                              (Qt = e),
                              (St = null)))
                        : (t = null),
                    t === null)
                )
                    throw fl(e)
                return ((e.lanes = 536870912), null)
            }
            return Su(e, a)
        }
        var u = t.memoizedState
        if (u !== null) {
            var i = u.dehydrated
            if ((uc(e), n))
                if (e.flags & 256) ((e.flags &= -257), (e = so(t, e, l)))
                else if (e.memoizedState !== null)
                    ((e.child = t.child), (e.flags |= 128), (e = null))
                else throw Error(f(558))
            else if (
                (Nt || da(t, e, l, !1), (n = (l & t.childLanes) !== 0), Nt || n)
            ) {
                if (
                    ((a = vt),
                    a !== null &&
                        ((i = Pf(a, l)), i !== 0 && i !== u.retryLane))
                )
                    throw ((u.retryLane = i), Bl(t, i), ue(a, t, i), _c)
                ;(Uu(), (e = so(t, e, l)))
            } else
                ((t = u.treeContext),
                    (St = Ee(i.nextSibling)),
                    (Qt = e),
                    (et = !0),
                    (cl = null),
                    (ze = !1),
                    t !== null && $s(e, t),
                    (e = Su(e, a)),
                    (e.flags |= 4096))
            return e
        }
        return (
            (t = Ge(t.child, { mode: a.mode, children: a.children })),
            (t.ref = e.ref),
            (e.child = t),
            (t.return = e),
            t
        )
    }
    function Tu(t, e) {
        var l = e.ref
        if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816)
        else {
            if (typeof l != 'function' && typeof l != 'object')
                throw Error(f(284))
            ;(t === null || t.ref !== l) && (e.flags |= 4194816)
        }
    }
    function Oc(t, e, l, a, n) {
        return (
            kl(e),
            (l = cc(t, e, l, a, void 0, n)),
            (a = fc()),
            t !== null && !Nt
                ? (sc(t, e, n), Ve(t, e, n))
                : (et && a && Li(e), (e.flags |= 1), Xt(t, e, l, n), e.child)
        )
    }
    function ro(t, e, l, a, n, u) {
        return (
            kl(e),
            (e.updateQueue = null),
            (l = dr(e, a, l, n)),
            hr(t),
            (a = fc()),
            t !== null && !Nt
                ? (sc(t, e, u), Ve(t, e, u))
                : (et && a && Li(e), (e.flags |= 1), Xt(t, e, l, u), e.child)
        )
    }
    function oo(t, e, l, a, n) {
        if ((kl(e), e.stateNode === null)) {
            var u = sa,
                i = l.contextType
            ;(typeof i == 'object' && i !== null && (u = Lt(i)),
                (u = new l(a, u)),
                (e.memoizedState =
                    u.state !== null && u.state !== void 0 ? u.state : null),
                (u.updater = Ec),
                (e.stateNode = u),
                (u._reactInternals = e),
                (u = e.stateNode),
                (u.props = a),
                (u.state = e.memoizedState),
                (u.refs = {}),
                Pi(e),
                (i = l.contextType),
                (u.context = typeof i == 'object' && i !== null ? Lt(i) : sa),
                (u.state = e.memoizedState),
                (i = l.getDerivedStateFromProps),
                typeof i == 'function' &&
                    (Ac(e, l, i, a), (u.state = e.memoizedState)),
                typeof l.getDerivedStateFromProps == 'function' ||
                    typeof u.getSnapshotBeforeUpdate == 'function' ||
                    (typeof u.UNSAFE_componentWillMount != 'function' &&
                        typeof u.componentWillMount != 'function') ||
                    ((i = u.state),
                    typeof u.componentWillMount == 'function' &&
                        u.componentWillMount(),
                    typeof u.UNSAFE_componentWillMount == 'function' &&
                        u.UNSAFE_componentWillMount(),
                    i !== u.state && Ec.enqueueReplaceState(u, u.state, null),
                    an(e, a, u, n),
                    ln(),
                    (u.state = e.memoizedState)),
                typeof u.componentDidMount == 'function' &&
                    (e.flags |= 4194308),
                (a = !0))
        } else if (t === null) {
            u = e.stateNode
            var s = e.memoizedProps,
                d = wl(l, s)
            u.props = d
            var T = u.context,
                _ = l.contextType
            ;((i = sa), typeof _ == 'object' && _ !== null && (i = Lt(_)))
            var D = l.getDerivedStateFromProps
            ;((_ =
                typeof D == 'function' ||
                typeof u.getSnapshotBeforeUpdate == 'function'),
                (s = e.pendingProps !== s),
                _ ||
                    (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof u.componentWillReceiveProps != 'function') ||
                    ((s || T !== i) && Fr(e, u, a, i)),
                (rl = !1))
            var z = e.memoizedState
            ;((u.state = z),
                an(e, a, u, n),
                ln(),
                (T = e.memoizedState),
                s || z !== T || rl
                    ? (typeof D == 'function' &&
                          (Ac(e, l, D, a), (T = e.memoizedState)),
                      (d = rl || Wr(e, l, d, a, z, T, i))
                          ? (_ ||
                                (typeof u.UNSAFE_componentWillMount !=
                                    'function' &&
                                    typeof u.componentWillMount !=
                                        'function') ||
                                (typeof u.componentWillMount == 'function' &&
                                    u.componentWillMount(),
                                typeof u.UNSAFE_componentWillMount ==
                                    'function' &&
                                    u.UNSAFE_componentWillMount()),
                            typeof u.componentDidMount == 'function' &&
                                (e.flags |= 4194308))
                          : (typeof u.componentDidMount == 'function' &&
                                (e.flags |= 4194308),
                            (e.memoizedProps = a),
                            (e.memoizedState = T)),
                      (u.props = a),
                      (u.state = T),
                      (u.context = i),
                      (a = d))
                    : (typeof u.componentDidMount == 'function' &&
                          (e.flags |= 4194308),
                      (a = !1)))
        } else {
            ;((u = e.stateNode),
                tc(t, e),
                (i = e.memoizedProps),
                (_ = wl(l, i)),
                (u.props = _),
                (D = e.pendingProps),
                (z = u.context),
                (T = l.contextType),
                (d = sa),
                typeof T == 'object' && T !== null && (d = Lt(T)),
                (s = l.getDerivedStateFromProps),
                (T =
                    typeof s == 'function' ||
                    typeof u.getSnapshotBeforeUpdate == 'function') ||
                    (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof u.componentWillReceiveProps != 'function') ||
                    ((i !== D || z !== d) && Fr(e, u, a, d)),
                (rl = !1),
                (z = e.memoizedState),
                (u.state = z),
                an(e, a, u, n),
                ln())
            var E = e.memoizedState
            i !== D ||
            z !== E ||
            rl ||
            (t !== null && t.dependencies !== null && lu(t.dependencies))
                ? (typeof s == 'function' &&
                      (Ac(e, l, s, a), (E = e.memoizedState)),
                  (_ =
                      rl ||
                      Wr(e, l, _, a, z, E, d) ||
                      (t !== null &&
                          t.dependencies !== null &&
                          lu(t.dependencies)))
                      ? (T ||
                            (typeof u.UNSAFE_componentWillUpdate !=
                                'function' &&
                                typeof u.componentWillUpdate != 'function') ||
                            (typeof u.componentWillUpdate == 'function' &&
                                u.componentWillUpdate(a, E, d),
                            typeof u.UNSAFE_componentWillUpdate == 'function' &&
                                u.UNSAFE_componentWillUpdate(a, E, d)),
                        typeof u.componentDidUpdate == 'function' &&
                            (e.flags |= 4),
                        typeof u.getSnapshotBeforeUpdate == 'function' &&
                            (e.flags |= 1024))
                      : (typeof u.componentDidUpdate != 'function' ||
                            (i === t.memoizedProps && z === t.memoizedState) ||
                            (e.flags |= 4),
                        typeof u.getSnapshotBeforeUpdate != 'function' ||
                            (i === t.memoizedProps && z === t.memoizedState) ||
                            (e.flags |= 1024),
                        (e.memoizedProps = a),
                        (e.memoizedState = E)),
                  (u.props = a),
                  (u.state = E),
                  (u.context = d),
                  (a = _))
                : (typeof u.componentDidUpdate != 'function' ||
                      (i === t.memoizedProps && z === t.memoizedState) ||
                      (e.flags |= 4),
                  typeof u.getSnapshotBeforeUpdate != 'function' ||
                      (i === t.memoizedProps && z === t.memoizedState) ||
                      (e.flags |= 1024),
                  (a = !1))
        }
        return (
            (u = a),
            Tu(t, e),
            (a = (e.flags & 128) !== 0),
            u || a
                ? ((u = e.stateNode),
                  (l =
                      a && typeof l.getDerivedStateFromError != 'function'
                          ? null
                          : u.render()),
                  (e.flags |= 1),
                  t !== null && a
                      ? ((e.child = Xl(e, t.child, null, n)),
                        (e.child = Xl(e, null, l, n)))
                      : Xt(t, e, l, n),
                  (e.memoizedState = u.state),
                  (t = e.child))
                : (t = Ve(t, e, n)),
            t
        )
    }
    function ho(t, e, l, a) {
        return (jl(), (e.flags |= 256), Xt(t, e, l, a), e.child)
    }
    var Mc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
    }
    function Dc(t) {
        return { baseLanes: t, cachePool: er() }
    }
    function Rc(t, e, l) {
        return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= me), t)
    }
    function mo(t, e, l) {
        var a = e.pendingProps,
            n = !1,
            u = (e.flags & 128) !== 0,
            i
        if (
            ((i = u) ||
                (i =
                    t !== null && t.memoizedState === null
                        ? !1
                        : (Mt.current & 2) !== 0),
            i && ((n = !0), (e.flags &= -129)),
            (i = (e.flags & 32) !== 0),
            (e.flags &= -33),
            t === null)
        ) {
            if (et) {
                if (
                    (n ? dl(e) : ml(),
                    (t = St)
                        ? ((t = zh(t, ze)),
                          (t = t !== null && t.data !== '&' ? t : null),
                          t !== null &&
                              ((e.memoizedState = {
                                  dehydrated: t,
                                  treeContext:
                                      il !== null
                                          ? { id: Re, overflow: Ue }
                                          : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (l = Vs(t)),
                              (l.return = e),
                              (e.child = l),
                              (Qt = e),
                              (St = null)))
                        : (t = null),
                    t === null)
                )
                    throw fl(e)
                return (df(t) ? (e.lanes = 32) : (e.lanes = 536870912), null)
            }
            var s = a.children
            return (
                (a = a.fallback),
                n
                    ? (ml(),
                      (n = e.mode),
                      (s = zu({ mode: 'hidden', children: s }, n)),
                      (a = ql(a, n, l, null)),
                      (s.return = e),
                      (a.return = e),
                      (s.sibling = a),
                      (e.child = s),
                      (a = e.child),
                      (a.memoizedState = Dc(l)),
                      (a.childLanes = Rc(t, i, l)),
                      (e.memoizedState = Mc),
                      sn(null, a))
                    : (dl(e), Uc(e, s))
            )
        }
        var d = t.memoizedState
        if (d !== null && ((s = d.dehydrated), s !== null)) {
            if (u)
                e.flags & 256
                    ? (dl(e), (e.flags &= -257), (e = Nc(t, e, l)))
                    : e.memoizedState !== null
                      ? (ml(),
                        (e.child = t.child),
                        (e.flags |= 128),
                        (e = null))
                      : (ml(),
                        (s = a.fallback),
                        (n = e.mode),
                        (a = zu({ mode: 'visible', children: a.children }, n)),
                        (s = ql(s, n, l, null)),
                        (s.flags |= 2),
                        (a.return = e),
                        (s.return = e),
                        (a.sibling = s),
                        (e.child = a),
                        Xl(e, t.child, null, l),
                        (a = e.child),
                        (a.memoizedState = Dc(l)),
                        (a.childLanes = Rc(t, i, l)),
                        (e.memoizedState = Mc),
                        (e = sn(null, a)))
            else if ((dl(e), df(s))) {
                if (((i = s.nextSibling && s.nextSibling.dataset), i))
                    var T = i.dgst
                ;((i = T),
                    (a = Error(f(419))),
                    (a.stack = ''),
                    (a.digest = i),
                    Wa({ value: a, source: null, stack: null }),
                    (e = Nc(t, e, l)))
            } else if (
                (Nt || da(t, e, l, !1), (i = (l & t.childLanes) !== 0), Nt || i)
            ) {
                if (
                    ((i = vt),
                    i !== null &&
                        ((a = Pf(i, l)), a !== 0 && a !== d.retryLane))
                )
                    throw ((d.retryLane = a), Bl(t, a), ue(i, t, a), _c)
                ;(hf(s) || Uu(), (e = Nc(t, e, l)))
            } else
                hf(s)
                    ? ((e.flags |= 192), (e.child = t.child), (e = null))
                    : ((t = d.treeContext),
                      (St = Ee(s.nextSibling)),
                      (Qt = e),
                      (et = !0),
                      (cl = null),
                      (ze = !1),
                      t !== null && $s(e, t),
                      (e = Uc(e, a.children)),
                      (e.flags |= 4096))
            return e
        }
        return n
            ? (ml(),
              (s = a.fallback),
              (n = e.mode),
              (d = t.child),
              (T = d.sibling),
              (a = Ge(d, { mode: 'hidden', children: a.children })),
              (a.subtreeFlags = d.subtreeFlags & 65011712),
              T !== null
                  ? (s = Ge(T, s))
                  : ((s = ql(s, n, l, null)), (s.flags |= 2)),
              (s.return = e),
              (a.return = e),
              (a.sibling = s),
              (e.child = a),
              sn(null, a),
              (a = e.child),
              (s = t.child.memoizedState),
              s === null
                  ? (s = Dc(l))
                  : ((n = s.cachePool),
                    n !== null
                        ? ((d = Rt._currentValue),
                          (n = n.parent !== d ? { parent: d, pool: d } : n))
                        : (n = er()),
                    (s = { baseLanes: s.baseLanes | l, cachePool: n })),
              (a.memoizedState = s),
              (a.childLanes = Rc(t, i, l)),
              (e.memoizedState = Mc),
              sn(t.child, a))
            : (dl(e),
              (l = t.child),
              (t = l.sibling),
              (l = Ge(l, { mode: 'visible', children: a.children })),
              (l.return = e),
              (l.sibling = null),
              t !== null &&
                  ((i = e.deletions),
                  i === null
                      ? ((e.deletions = [t]), (e.flags |= 16))
                      : i.push(t)),
              (e.child = l),
              (e.memoizedState = null),
              l)
    }
    function Uc(t, e) {
        return (
            (e = zu({ mode: 'visible', children: e }, t.mode)),
            (e.return = t),
            (t.child = e)
        )
    }
    function zu(t, e) {
        return ((t = re(22, t, null, e)), (t.lanes = 0), t)
    }
    function Nc(t, e, l) {
        return (
            Xl(e, t.child, null, l),
            (t = Uc(e, e.pendingProps.children)),
            (t.flags |= 2),
            (e.memoizedState = null),
            t
        )
    }
    function go(t, e, l) {
        t.lanes |= e
        var a = t.alternate
        ;(a !== null && (a.lanes |= e), Ki(t.return, e, l))
    }
    function Cc(t, e, l, a, n, u) {
        var i = t.memoizedState
        i === null
            ? (t.memoizedState = {
                  isBackwards: e,
                  rendering: null,
                  renderingStartTime: 0,
                  last: a,
                  tail: l,
                  tailMode: n,
                  treeForkCount: u,
              })
            : ((i.isBackwards = e),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = a),
              (i.tail = l),
              (i.tailMode = n),
              (i.treeForkCount = u))
    }
    function yo(t, e, l) {
        var a = e.pendingProps,
            n = a.revealOrder,
            u = a.tail
        a = a.children
        var i = Mt.current,
            s = (i & 2) !== 0
        if (
            (s ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
            B(Mt, i),
            Xt(t, e, a, l),
            (a = et ? $a : 0),
            !s && t !== null && (t.flags & 128) !== 0)
        )
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13) t.memoizedState !== null && go(t, l, e)
                else if (t.tag === 19) go(t, l, e)
                else if (t.child !== null) {
                    ;((t.child.return = t), (t = t.child))
                    continue
                }
                if (t === e) break t
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) break t
                    t = t.return
                }
                ;((t.sibling.return = t.return), (t = t.sibling))
            }
        switch (n) {
            case 'forwards':
                for (l = e.child, n = null; l !== null; )
                    ((t = l.alternate),
                        t !== null && ru(t) === null && (n = l),
                        (l = l.sibling))
                ;((l = n),
                    l === null
                        ? ((n = e.child), (e.child = null))
                        : ((n = l.sibling), (l.sibling = null)),
                    Cc(e, !1, n, l, u, a))
                break
            case 'backwards':
            case 'unstable_legacy-backwards':
                for (l = null, n = e.child, e.child = null; n !== null; ) {
                    if (((t = n.alternate), t !== null && ru(t) === null)) {
                        e.child = n
                        break
                    }
                    ;((t = n.sibling), (n.sibling = l), (l = n), (n = t))
                }
                Cc(e, !0, l, null, u, a)
                break
            case 'together':
                Cc(e, !1, null, null, void 0, a)
                break
            default:
                e.memoizedState = null
        }
        return e.child
    }
    function Ve(t, e, l) {
        if (
            (t !== null && (e.dependencies = t.dependencies),
            (pl |= e.lanes),
            (l & e.childLanes) === 0)
        )
            if (t !== null) {
                if ((da(t, e, l, !1), (l & e.childLanes) === 0)) return null
            } else return null
        if (t !== null && e.child !== t.child) throw Error(f(153))
        if (e.child !== null) {
            for (
                t = e.child,
                    l = Ge(t, t.pendingProps),
                    e.child = l,
                    l.return = e;
                t.sibling !== null;
            )
                ((t = t.sibling),
                    (l = l.sibling = Ge(t, t.pendingProps)),
                    (l.return = e))
            l.sibling = null
        }
        return e.child
    }
    function Hc(t, e) {
        return (t.lanes & e) !== 0
            ? !0
            : ((t = t.dependencies), !!(t !== null && lu(t)))
    }
    function wm(t, e, l) {
        switch (e.tag) {
            case 3:
                ;(Wt(e, e.stateNode.containerInfo),
                    sl(e, Rt, t.memoizedState.cache),
                    jl())
                break
            case 27:
            case 5:
                Ha(e)
                break
            case 4:
                Wt(e, e.stateNode.containerInfo)
                break
            case 10:
                sl(e, e.type, e.memoizedProps.value)
                break
            case 31:
                if (e.memoizedState !== null)
                    return ((e.flags |= 128), uc(e), null)
                break
            case 13:
                var a = e.memoizedState
                if (a !== null)
                    return a.dehydrated !== null
                        ? (dl(e), (e.flags |= 128), null)
                        : (l & e.child.childLanes) !== 0
                          ? mo(t, e, l)
                          : (dl(e),
                            (t = Ve(t, e, l)),
                            t !== null ? t.sibling : null)
                dl(e)
                break
            case 19:
                var n = (t.flags & 128) !== 0
                if (
                    ((a = (l & e.childLanes) !== 0),
                    a || (da(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
                    n)
                ) {
                    if (a) return yo(t, e, l)
                    e.flags |= 128
                }
                if (
                    ((n = e.memoizedState),
                    n !== null &&
                        ((n.rendering = null),
                        (n.tail = null),
                        (n.lastEffect = null)),
                    B(Mt, Mt.current),
                    a)
                )
                    break
                return null
            case 22:
                return ((e.lanes = 0), co(t, e, l, e.pendingProps))
            case 24:
                sl(e, Rt, t.memoizedState.cache)
        }
        return Ve(t, e, l)
    }
    function po(t, e, l) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) Nt = !0
            else {
                if (!Hc(t, l) && (e.flags & 128) === 0)
                    return ((Nt = !1), wm(t, e, l))
                Nt = (t.flags & 131072) !== 0
            }
        else ((Nt = !1), et && (e.flags & 1048576) !== 0 && Js(e, $a, e.index))
        switch (((e.lanes = 0), e.tag)) {
            case 16:
                t: {
                    var a = e.pendingProps
                    if (
                        ((t = Ql(e.elementType)),
                        (e.type = t),
                        typeof t == 'function')
                    )
                        ki(t)
                            ? ((a = wl(t, a)),
                              (e.tag = 1),
                              (e = oo(null, e, t, a, l)))
                            : ((e.tag = 0), (e = Oc(null, e, t, a, l)))
                    else {
                        if (t != null) {
                            var n = t.$$typeof
                            if (n === jt) {
                                ;((e.tag = 11), (e = no(null, e, t, a, l)))
                                break t
                            } else if (n === X) {
                                ;((e.tag = 14), (e = uo(null, e, t, a, l)))
                                break t
                            }
                        }
                        throw ((e = qe(t) || t), Error(f(306, e, '')))
                    }
                }
                return e
            case 0:
                return Oc(t, e, e.type, e.pendingProps, l)
            case 1:
                return (
                    (a = e.type),
                    (n = wl(a, e.pendingProps)),
                    oo(t, e, a, n, l)
                )
            case 3:
                t: {
                    if ((Wt(e, e.stateNode.containerInfo), t === null))
                        throw Error(f(387))
                    a = e.pendingProps
                    var u = e.memoizedState
                    ;((n = u.element), tc(t, e), an(e, a, null, l))
                    var i = e.memoizedState
                    if (
                        ((a = i.cache),
                        sl(e, Rt, a),
                        a !== u.cache && Ji(e, [Rt], l, !0),
                        ln(),
                        (a = i.element),
                        u.isDehydrated)
                    )
                        if (
                            ((u = {
                                element: a,
                                isDehydrated: !1,
                                cache: i.cache,
                            }),
                            (e.updateQueue.baseState = u),
                            (e.memoizedState = u),
                            e.flags & 256)
                        ) {
                            e = ho(t, e, a, l)
                            break t
                        } else if (a !== n) {
                            ;((n = be(Error(f(424)), e)),
                                Wa(n),
                                (e = ho(t, e, a, l)))
                            break t
                        } else
                            for (
                                t = e.stateNode.containerInfo,
                                    t.nodeType === 9
                                        ? (t = t.body)
                                        : (t =
                                              t.nodeName === 'HTML'
                                                  ? t.ownerDocument.body
                                                  : t),
                                    St = Ee(t.firstChild),
                                    Qt = e,
                                    et = !0,
                                    cl = null,
                                    ze = !0,
                                    l = cr(e, null, a, l),
                                    e.child = l;
                                l;
                            )
                                ((l.flags = (l.flags & -3) | 4096),
                                    (l = l.sibling))
                    else {
                        if ((jl(), a === n)) {
                            e = Ve(t, e, l)
                            break t
                        }
                        Xt(t, e, a, l)
                    }
                    e = e.child
                }
                return e
            case 26:
                return (
                    Tu(t, e),
                    t === null
                        ? (l = Mh(e.type, null, e.pendingProps, null))
                            ? (e.memoizedState = l)
                            : et ||
                              ((l = e.type),
                              (t = e.pendingProps),
                              (a = Yu(W.current).createElement(l)),
                              (a[Gt] = e),
                              (a[Pt] = t),
                              Zt(a, l, t),
                              Bt(a),
                              (e.stateNode = a))
                        : (e.memoizedState = Mh(
                              e.type,
                              t.memoizedProps,
                              e.pendingProps,
                              t.memoizedState
                          )),
                    null
                )
            case 27:
                return (
                    Ha(e),
                    t === null &&
                        et &&
                        ((a = e.stateNode =
                            xh(e.type, e.pendingProps, W.current)),
                        (Qt = e),
                        (ze = !0),
                        (n = St),
                        zl(e.type)
                            ? ((mf = n), (St = Ee(a.firstChild)))
                            : (St = n)),
                    Xt(t, e, e.pendingProps.children, l),
                    Tu(t, e),
                    t === null && (e.flags |= 4194304),
                    e.child
                )
            case 5:
                return (
                    t === null &&
                        et &&
                        ((n = a = St) &&
                            ((a = T0(a, e.type, e.pendingProps, ze)),
                            a !== null
                                ? ((e.stateNode = a),
                                  (Qt = e),
                                  (St = Ee(a.firstChild)),
                                  (ze = !1),
                                  (n = !0))
                                : (n = !1)),
                        n || fl(e)),
                    Ha(e),
                    (n = e.type),
                    (u = e.pendingProps),
                    (i = t !== null ? t.memoizedProps : null),
                    (a = u.children),
                    sf(n, u)
                        ? (a = null)
                        : i !== null && sf(n, i) && (e.flags |= 32),
                    e.memoizedState !== null &&
                        ((n = cc(t, e, qm, null, null, l)),
                        (En._currentValue = n)),
                    Tu(t, e),
                    Xt(t, e, a, l),
                    e.child
                )
            case 6:
                return (
                    t === null &&
                        et &&
                        ((t = l = St) &&
                            ((l = z0(l, e.pendingProps, ze)),
                            l !== null
                                ? ((e.stateNode = l),
                                  (Qt = e),
                                  (St = null),
                                  (t = !0))
                                : (t = !1)),
                        t || fl(e)),
                    null
                )
            case 13:
                return mo(t, e, l)
            case 4:
                return (
                    Wt(e, e.stateNode.containerInfo),
                    (a = e.pendingProps),
                    t === null ? (e.child = Xl(e, null, a, l)) : Xt(t, e, a, l),
                    e.child
                )
            case 11:
                return no(t, e, e.type, e.pendingProps, l)
            case 7:
                return (Xt(t, e, e.pendingProps, l), e.child)
            case 8:
                return (Xt(t, e, e.pendingProps.children, l), e.child)
            case 12:
                return (Xt(t, e, e.pendingProps.children, l), e.child)
            case 10:
                return (
                    (a = e.pendingProps),
                    sl(e, e.type, a.value),
                    Xt(t, e, a.children, l),
                    e.child
                )
            case 9:
                return (
                    (n = e.type._context),
                    (a = e.pendingProps.children),
                    kl(e),
                    (n = Lt(n)),
                    (a = a(n)),
                    (e.flags |= 1),
                    Xt(t, e, a, l),
                    e.child
                )
            case 14:
                return uo(t, e, e.type, e.pendingProps, l)
            case 15:
                return io(t, e, e.type, e.pendingProps, l)
            case 19:
                return yo(t, e, l)
            case 31:
                return Zm(t, e, l)
            case 22:
                return co(t, e, l, e.pendingProps)
            case 24:
                return (
                    kl(e),
                    (a = Lt(Rt)),
                    t === null
                        ? ((n = Fi()),
                          n === null &&
                              ((n = vt),
                              (u = $i()),
                              (n.pooledCache = u),
                              u.refCount++,
                              u !== null && (n.pooledCacheLanes |= l),
                              (n = u)),
                          (e.memoizedState = { parent: a, cache: n }),
                          Pi(e),
                          sl(e, Rt, n))
                        : ((t.lanes & l) !== 0 &&
                              (tc(t, e), an(e, null, null, l), ln()),
                          (n = t.memoizedState),
                          (u = e.memoizedState),
                          n.parent !== a
                              ? ((n = { parent: a, cache: a }),
                                (e.memoizedState = n),
                                e.lanes === 0 &&
                                    (e.memoizedState = e.updateQueue.baseState =
                                        n),
                                sl(e, Rt, a))
                              : ((a = u.cache),
                                sl(e, Rt, a),
                                a !== n.cache && Ji(e, [Rt], l, !0))),
                    Xt(t, e, e.pendingProps.children, l),
                    e.child
                )
            case 29:
                throw e.pendingProps
        }
        throw Error(f(156, e.tag))
    }
    function Ke(t) {
        t.flags |= 4
    }
    function Bc(t, e, l, a, n) {
        if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
            if (((t.flags |= 16777216), (n & 335544128) === n))
                if (t.stateNode.complete) t.flags |= 8192
                else if (Zo()) t.flags |= 8192
                else throw ((Ll = iu), Ii)
        } else t.flags &= -16777217
    }
    function vo(t, e) {
        if (e.type !== 'stylesheet' || (e.state.loading & 4) !== 0)
            t.flags &= -16777217
        else if (((t.flags |= 16777216), !Ch(e)))
            if (Zo()) t.flags |= 8192
            else throw ((Ll = iu), Ii)
    }
    function Au(t, e) {
        ;(e !== null && (t.flags |= 4),
            t.flags & 16384 &&
                ((e = t.tag !== 22 ? Wf() : 536870912),
                (t.lanes |= e),
                (xa |= e)))
    }
    function rn(t, e) {
        if (!et)
            switch (t.tailMode) {
                case 'hidden':
                    e = t.tail
                    for (var l = null; e !== null; )
                        (e.alternate !== null && (l = e), (e = e.sibling))
                    l === null ? (t.tail = null) : (l.sibling = null)
                    break
                case 'collapsed':
                    l = t.tail
                    for (var a = null; l !== null; )
                        (l.alternate !== null && (a = l), (l = l.sibling))
                    a === null
                        ? e || t.tail === null
                            ? (t.tail = null)
                            : (t.tail.sibling = null)
                        : (a.sibling = null)
            }
    }
    function Tt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            l = 0,
            a = 0
        if (e)
            for (var n = t.child; n !== null; )
                ((l |= n.lanes | n.childLanes),
                    (a |= n.subtreeFlags & 65011712),
                    (a |= n.flags & 65011712),
                    (n.return = t),
                    (n = n.sibling))
        else
            for (n = t.child; n !== null; )
                ((l |= n.lanes | n.childLanes),
                    (a |= n.subtreeFlags),
                    (a |= n.flags),
                    (n.return = t),
                    (n = n.sibling))
        return ((t.subtreeFlags |= a), (t.childLanes = l), e)
    }
    function Vm(t, e, l) {
        var a = e.pendingProps
        switch ((Xi(e), e.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (Tt(e), null)
            case 1:
                return (Tt(e), null)
            case 3:
                return (
                    (l = e.stateNode),
                    (a = null),
                    t !== null && (a = t.memoizedState.cache),
                    e.memoizedState.cache !== a && (e.flags |= 2048),
                    Xe(Rt),
                    Ot(),
                    l.pendingContext &&
                        ((l.context = l.pendingContext),
                        (l.pendingContext = null)),
                    (t === null || t.child === null) &&
                        (ha(e)
                            ? Ke(e)
                            : t === null ||
                              (t.memoizedState.isDehydrated &&
                                  (e.flags & 256) === 0) ||
                              ((e.flags |= 1024), wi())),
                    Tt(e),
                    null
                )
            case 26:
                var n = e.type,
                    u = e.memoizedState
                return (
                    t === null
                        ? (Ke(e),
                          u !== null
                              ? (Tt(e), vo(e, u))
                              : (Tt(e), Bc(e, n, null, a, l)))
                        : u
                          ? u !== t.memoizedState
                              ? (Ke(e), Tt(e), vo(e, u))
                              : (Tt(e), (e.flags &= -16777217))
                          : ((t = t.memoizedProps),
                            t !== a && Ke(e),
                            Tt(e),
                            Bc(e, n, t, a, l)),
                    null
                )
            case 27:
                if (
                    (Hn(e),
                    (l = W.current),
                    (n = e.type),
                    t !== null && e.stateNode != null)
                )
                    t.memoizedProps !== a && Ke(e)
                else {
                    if (!a) {
                        if (e.stateNode === null) throw Error(f(166))
                        return (Tt(e), null)
                    }
                    ;((t = j.current),
                        ha(e)
                            ? Ws(e)
                            : ((t = xh(n, a, l)), (e.stateNode = t), Ke(e)))
                }
                return (Tt(e), null)
            case 5:
                if ((Hn(e), (n = e.type), t !== null && e.stateNode != null))
                    t.memoizedProps !== a && Ke(e)
                else {
                    if (!a) {
                        if (e.stateNode === null) throw Error(f(166))
                        return (Tt(e), null)
                    }
                    if (((u = j.current), ha(e))) Ws(e)
                    else {
                        var i = Yu(W.current)
                        switch (u) {
                            case 1:
                                u = i.createElementNS(
                                    'http://www.w3.org/2000/svg',
                                    n
                                )
                                break
                            case 2:
                                u = i.createElementNS(
                                    'http://www.w3.org/1998/Math/MathML',
                                    n
                                )
                                break
                            default:
                                switch (n) {
                                    case 'svg':
                                        u = i.createElementNS(
                                            'http://www.w3.org/2000/svg',
                                            n
                                        )
                                        break
                                    case 'math':
                                        u = i.createElementNS(
                                            'http://www.w3.org/1998/Math/MathML',
                                            n
                                        )
                                        break
                                    case 'script':
                                        ;((u = i.createElement('div')),
                                            (u.innerHTML =
                                                '<script><\/script>'),
                                            (u = u.removeChild(u.firstChild)))
                                        break
                                    case 'select':
                                        ;((u =
                                            typeof a.is == 'string'
                                                ? i.createElement('select', {
                                                      is: a.is,
                                                  })
                                                : i.createElement('select')),
                                            a.multiple
                                                ? (u.multiple = !0)
                                                : a.size && (u.size = a.size))
                                        break
                                    default:
                                        u =
                                            typeof a.is == 'string'
                                                ? i.createElement(n, {
                                                      is: a.is,
                                                  })
                                                : i.createElement(n)
                                }
                        }
                        ;((u[Gt] = e), (u[Pt] = a))
                        t: for (i = e.child; i !== null; ) {
                            if (i.tag === 5 || i.tag === 6)
                                u.appendChild(i.stateNode)
                            else if (
                                i.tag !== 4 &&
                                i.tag !== 27 &&
                                i.child !== null
                            ) {
                                ;((i.child.return = i), (i = i.child))
                                continue
                            }
                            if (i === e) break t
                            for (; i.sibling === null; ) {
                                if (i.return === null || i.return === e) break t
                                i = i.return
                            }
                            ;((i.sibling.return = i.return), (i = i.sibling))
                        }
                        e.stateNode = u
                        t: switch ((Zt(u, n, a), n)) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                a = !!a.autoFocus
                                break t
                            case 'img':
                                a = !0
                                break t
                            default:
                                a = !1
                        }
                        a && Ke(e)
                    }
                }
                return (
                    Tt(e),
                    Bc(
                        e,
                        e.type,
                        t === null ? null : t.memoizedProps,
                        e.pendingProps,
                        l
                    ),
                    null
                )
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== a && Ke(e)
                else {
                    if (typeof a != 'string' && e.stateNode === null)
                        throw Error(f(166))
                    if (((t = W.current), ha(e))) {
                        if (
                            ((t = e.stateNode),
                            (l = e.memoizedProps),
                            (a = null),
                            (n = Qt),
                            n !== null)
                        )
                            switch (n.tag) {
                                case 27:
                                case 5:
                                    a = n.memoizedProps
                            }
                        ;((t[Gt] = e),
                            (t = !!(
                                t.nodeValue === l ||
                                (a !== null &&
                                    a.suppressHydrationWarning === !0) ||
                                mh(t.nodeValue, l)
                            )),
                            t || fl(e, !0))
                    } else
                        ((t = Yu(t).createTextNode(a)),
                            (t[Gt] = e),
                            (e.stateNode = t))
                }
                return (Tt(e), null)
            case 31:
                if (
                    ((l = e.memoizedState),
                    t === null || t.memoizedState !== null)
                ) {
                    if (((a = ha(e)), l !== null)) {
                        if (t === null) {
                            if (!a) throw Error(f(318))
                            if (
                                ((t = e.memoizedState),
                                (t = t !== null ? t.dehydrated : null),
                                !t)
                            )
                                throw Error(f(557))
                            t[Gt] = e
                        } else
                            (jl(),
                                (e.flags & 128) === 0 &&
                                    (e.memoizedState = null),
                                (e.flags |= 4))
                        ;(Tt(e), (t = !1))
                    } else
                        ((l = wi()),
                            t !== null &&
                                t.memoizedState !== null &&
                                (t.memoizedState.hydrationErrors = l),
                            (t = !0))
                    if (!t) return e.flags & 256 ? (he(e), e) : (he(e), null)
                    if ((e.flags & 128) !== 0) throw Error(f(558))
                }
                return (Tt(e), null)
            case 13:
                if (
                    ((a = e.memoizedState),
                    t === null ||
                        (t.memoizedState !== null &&
                            t.memoizedState.dehydrated !== null))
                ) {
                    if (((n = ha(e)), a !== null && a.dehydrated !== null)) {
                        if (t === null) {
                            if (!n) throw Error(f(318))
                            if (
                                ((n = e.memoizedState),
                                (n = n !== null ? n.dehydrated : null),
                                !n)
                            )
                                throw Error(f(317))
                            n[Gt] = e
                        } else
                            (jl(),
                                (e.flags & 128) === 0 &&
                                    (e.memoizedState = null),
                                (e.flags |= 4))
                        ;(Tt(e), (n = !1))
                    } else
                        ((n = wi()),
                            t !== null &&
                                t.memoizedState !== null &&
                                (t.memoizedState.hydrationErrors = n),
                            (n = !0))
                    if (!n) return e.flags & 256 ? (he(e), e) : (he(e), null)
                }
                return (
                    he(e),
                    (e.flags & 128) !== 0
                        ? ((e.lanes = l), e)
                        : ((l = a !== null),
                          (t = t !== null && t.memoizedState !== null),
                          l &&
                              ((a = e.child),
                              (n = null),
                              a.alternate !== null &&
                                  a.alternate.memoizedState !== null &&
                                  a.alternate.memoizedState.cachePool !==
                                      null &&
                                  (n =
                                      a.alternate.memoizedState.cachePool.pool),
                              (u = null),
                              a.memoizedState !== null &&
                                  a.memoizedState.cachePool !== null &&
                                  (u = a.memoizedState.cachePool.pool),
                              u !== n && (a.flags |= 2048)),
                          l !== t && l && (e.child.flags |= 8192),
                          Au(e, e.updateQueue),
                          Tt(e),
                          null)
                )
            case 4:
                return (
                    Ot(),
                    t === null && af(e.stateNode.containerInfo),
                    Tt(e),
                    null
                )
            case 10:
                return (Xe(e.type), Tt(e), null)
            case 19:
                if ((R(Mt), (a = e.memoizedState), a === null))
                    return (Tt(e), null)
                if (
                    ((n = (e.flags & 128) !== 0), (u = a.rendering), u === null)
                )
                    if (n) rn(a, !1)
                    else {
                        if (_t !== 0 || (t !== null && (t.flags & 128) !== 0))
                            for (t = e.child; t !== null; ) {
                                if (((u = ru(t)), u !== null)) {
                                    for (
                                        e.flags |= 128,
                                            rn(a, !1),
                                            t = u.updateQueue,
                                            e.updateQueue = t,
                                            Au(e, t),
                                            e.subtreeFlags = 0,
                                            t = l,
                                            l = e.child;
                                        l !== null;
                                    )
                                        (ws(l, t), (l = l.sibling))
                                    return (
                                        B(Mt, (Mt.current & 1) | 2),
                                        et && Qe(e, a.treeForkCount),
                                        e.child
                                    )
                                }
                                t = t.sibling
                            }
                        a.tail !== null &&
                            ie() > Mu &&
                            ((e.flags |= 128),
                            (n = !0),
                            rn(a, !1),
                            (e.lanes = 4194304))
                    }
                else {
                    if (!n)
                        if (((t = ru(u)), t !== null)) {
                            if (
                                ((e.flags |= 128),
                                (n = !0),
                                (t = t.updateQueue),
                                (e.updateQueue = t),
                                Au(e, t),
                                rn(a, !0),
                                a.tail === null &&
                                    a.tailMode === 'hidden' &&
                                    !u.alternate &&
                                    !et)
                            )
                                return (Tt(e), null)
                        } else
                            2 * ie() - a.renderingStartTime > Mu &&
                                l !== 536870912 &&
                                ((e.flags |= 128),
                                (n = !0),
                                rn(a, !1),
                                (e.lanes = 4194304))
                    a.isBackwards
                        ? ((u.sibling = e.child), (e.child = u))
                        : ((t = a.last),
                          t !== null ? (t.sibling = u) : (e.child = u),
                          (a.last = u))
                }
                return a.tail !== null
                    ? ((t = a.tail),
                      (a.rendering = t),
                      (a.tail = t.sibling),
                      (a.renderingStartTime = ie()),
                      (t.sibling = null),
                      (l = Mt.current),
                      B(Mt, n ? (l & 1) | 2 : l & 1),
                      et && Qe(e, a.treeForkCount),
                      t)
                    : (Tt(e), null)
            case 22:
            case 23:
                return (
                    he(e),
                    nc(),
                    (a = e.memoizedState !== null),
                    t !== null
                        ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
                        : a && (e.flags |= 8192),
                    a
                        ? (l & 536870912) !== 0 &&
                          (e.flags & 128) === 0 &&
                          (Tt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                        : Tt(e),
                    (l = e.updateQueue),
                    l !== null && Au(e, l.retryQueue),
                    (l = null),
                    t !== null &&
                        t.memoizedState !== null &&
                        t.memoizedState.cachePool !== null &&
                        (l = t.memoizedState.cachePool.pool),
                    (a = null),
                    e.memoizedState !== null &&
                        e.memoizedState.cachePool !== null &&
                        (a = e.memoizedState.cachePool.pool),
                    a !== l && (e.flags |= 2048),
                    t !== null && R(Gl),
                    null
                )
            case 24:
                return (
                    (l = null),
                    t !== null && (l = t.memoizedState.cache),
                    e.memoizedState.cache !== l && (e.flags |= 2048),
                    Xe(Rt),
                    Tt(e),
                    null
                )
            case 25:
                return null
            case 30:
                return null
        }
        throw Error(f(156, e.tag))
    }
    function Km(t, e) {
        switch ((Xi(e), e.tag)) {
            case 1:
                return (
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                )
            case 3:
                return (
                    Xe(Rt),
                    Ot(),
                    (t = e.flags),
                    (t & 65536) !== 0 && (t & 128) === 0
                        ? ((e.flags = (t & -65537) | 128), e)
                        : null
                )
            case 26:
            case 27:
            case 5:
                return (Hn(e), null)
            case 31:
                if (e.memoizedState !== null) {
                    if ((he(e), e.alternate === null)) throw Error(f(340))
                    jl()
                }
                return (
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                )
            case 13:
                if (
                    (he(e),
                    (t = e.memoizedState),
                    t !== null && t.dehydrated !== null)
                ) {
                    if (e.alternate === null) throw Error(f(340))
                    jl()
                }
                return (
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                )
            case 19:
                return (R(Mt), null)
            case 4:
                return (Ot(), null)
            case 10:
                return (Xe(e.type), null)
            case 22:
            case 23:
                return (
                    he(e),
                    nc(),
                    t !== null && R(Gl),
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                )
            case 24:
                return (Xe(Rt), null)
            case 25:
                return null
            default:
                return null
        }
    }
    function bo(t, e) {
        switch ((Xi(e), e.tag)) {
            case 3:
                ;(Xe(Rt), Ot())
                break
            case 26:
            case 27:
            case 5:
                Hn(e)
                break
            case 4:
                Ot()
                break
            case 31:
                e.memoizedState !== null && he(e)
                break
            case 13:
                he(e)
                break
            case 19:
                R(Mt)
                break
            case 10:
                Xe(e.type)
                break
            case 22:
            case 23:
                ;(he(e), nc(), t !== null && R(Gl))
                break
            case 24:
                Xe(Rt)
        }
    }
    function on(t, e) {
        try {
            var l = e.updateQueue,
                a = l !== null ? l.lastEffect : null
            if (a !== null) {
                var n = a.next
                l = n
                do {
                    if ((l.tag & t) === t) {
                        a = void 0
                        var u = l.create,
                            i = l.inst
                        ;((a = u()), (i.destroy = a))
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (s) {
            rt(e, e.return, s)
        }
    }
    function gl(t, e, l) {
        try {
            var a = e.updateQueue,
                n = a !== null ? a.lastEffect : null
            if (n !== null) {
                var u = n.next
                a = u
                do {
                    if ((a.tag & t) === t) {
                        var i = a.inst,
                            s = i.destroy
                        if (s !== void 0) {
                            ;((i.destroy = void 0), (n = e))
                            var d = l,
                                T = s
                            try {
                                T()
                            } catch (_) {
                                rt(n, d, _)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (_) {
            rt(e, e.return, _)
        }
    }
    function So(t) {
        var e = t.updateQueue
        if (e !== null) {
            var l = t.stateNode
            try {
                sr(e, l)
            } catch (a) {
                rt(t, t.return, a)
            }
        }
    }
    function To(t, e, l) {
        ;((l.props = wl(t.type, t.memoizedProps)), (l.state = t.memoizedState))
        try {
            l.componentWillUnmount()
        } catch (a) {
            rt(t, e, a)
        }
    }
    function hn(t, e) {
        try {
            var l = t.ref
            if (l !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = t.stateNode
                        break
                    case 30:
                        a = t.stateNode
                        break
                    default:
                        a = t.stateNode
                }
                typeof l == 'function' ? (t.refCleanup = l(a)) : (l.current = a)
            }
        } catch (n) {
            rt(t, e, n)
        }
    }
    function Ne(t, e) {
        var l = t.ref,
            a = t.refCleanup
        if (l !== null)
            if (typeof a == 'function')
                try {
                    a()
                } catch (n) {
                    rt(t, e, n)
                } finally {
                    ;((t.refCleanup = null),
                        (t = t.alternate),
                        t != null && (t.refCleanup = null))
                }
            else if (typeof l == 'function')
                try {
                    l(null)
                } catch (n) {
                    rt(t, e, n)
                }
            else l.current = null
    }
    function zo(t) {
        var e = t.type,
            l = t.memoizedProps,
            a = t.stateNode
        try {
            t: switch (e) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                    l.autoFocus && a.focus()
                    break t
                case 'img':
                    l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            rt(t, t.return, n)
        }
    }
    function qc(t, e, l) {
        try {
            var a = t.stateNode
            ;(g0(a, t.type, l, e), (a[Pt] = e))
        } catch (n) {
            rt(t, t.return, n)
        }
    }
    function Ao(t) {
        return (
            t.tag === 5 ||
            t.tag === 3 ||
            t.tag === 26 ||
            (t.tag === 27 && zl(t.type)) ||
            t.tag === 4
        )
    }
    function jc(t) {
        t: for (;;) {
            for (; t.sibling === null; ) {
                if (t.return === null || Ao(t.return)) return null
                t = t.return
            }
            for (
                t.sibling.return = t.return, t = t.sibling;
                t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
            ) {
                if (
                    (t.tag === 27 && zl(t.type)) ||
                    t.flags & 2 ||
                    t.child === null ||
                    t.tag === 4
                )
                    continue t
                ;((t.child.return = t), (t = t.child))
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }
    function Yc(t, e, l) {
        var a = t.tag
        if (a === 5 || a === 6)
            ((t = t.stateNode),
                e
                    ? (l.nodeType === 9
                          ? l.body
                          : l.nodeName === 'HTML'
                            ? l.ownerDocument.body
                            : l
                      ).insertBefore(t, e)
                    : ((e =
                          l.nodeType === 9
                              ? l.body
                              : l.nodeName === 'HTML'
                                ? l.ownerDocument.body
                                : l),
                      e.appendChild(t),
                      (l = l._reactRootContainer),
                      l != null || e.onclick !== null || (e.onclick = Ye)))
        else if (
            a !== 4 &&
            (a === 27 && zl(t.type) && ((l = t.stateNode), (e = null)),
            (t = t.child),
            t !== null)
        )
            for (Yc(t, e, l), t = t.sibling; t !== null; )
                (Yc(t, e, l), (t = t.sibling))
    }
    function Eu(t, e, l) {
        var a = t.tag
        if (a === 5 || a === 6)
            ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t))
        else if (
            a !== 4 &&
            (a === 27 && zl(t.type) && (l = t.stateNode),
            (t = t.child),
            t !== null)
        )
            for (Eu(t, e, l), t = t.sibling; t !== null; )
                (Eu(t, e, l), (t = t.sibling))
    }
    function Eo(t) {
        var e = t.stateNode,
            l = t.memoizedProps
        try {
            for (var a = t.type, n = e.attributes; n.length; )
                e.removeAttributeNode(n[0])
            ;(Zt(e, a, l), (e[Gt] = t), (e[Pt] = l))
        } catch (u) {
            rt(t, t.return, u)
        }
    }
    var Je = !1,
        Ct = !1,
        kc = !1,
        xo = typeof WeakSet == 'function' ? WeakSet : Set,
        qt = null
    function Jm(t, e) {
        if (((t = t.containerInfo), (cf = wu), (t = qs(t)), Ni(t))) {
            if ('selectionStart' in t)
                var l = { start: t.selectionStart, end: t.selectionEnd }
            else
                t: {
                    l = ((l = t.ownerDocument) && l.defaultView) || window
                    var a = l.getSelection && l.getSelection()
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode
                        var n = a.anchorOffset,
                            u = a.focusNode
                        a = a.focusOffset
                        try {
                            ;(l.nodeType, u.nodeType)
                        } catch {
                            l = null
                            break t
                        }
                        var i = 0,
                            s = -1,
                            d = -1,
                            T = 0,
                            _ = 0,
                            D = t,
                            z = null
                        e: for (;;) {
                            for (
                                var E;
                                D !== l ||
                                    (n !== 0 && D.nodeType !== 3) ||
                                    (s = i + n),
                                    D !== u ||
                                        (a !== 0 && D.nodeType !== 3) ||
                                        (d = i + a),
                                    D.nodeType === 3 &&
                                        (i += D.nodeValue.length),
                                    (E = D.firstChild) !== null;
                            )
                                ((z = D), (D = E))
                            for (;;) {
                                if (D === t) break e
                                if (
                                    (z === l && ++T === n && (s = i),
                                    z === u && ++_ === a && (d = i),
                                    (E = D.nextSibling) !== null)
                                )
                                    break
                                ;((D = z), (z = D.parentNode))
                            }
                            D = E
                        }
                        l = s === -1 || d === -1 ? null : { start: s, end: d }
                    } else l = null
                }
            l = l || { start: 0, end: 0 }
        } else l = null
        for (
            ff = { focusedElem: t, selectionRange: l }, wu = !1, qt = e;
            qt !== null;
        )
            if (
                ((e = qt),
                (t = e.child),
                (e.subtreeFlags & 1028) !== 0 && t !== null)
            )
                ((t.return = e), (qt = t))
            else
                for (; qt !== null; ) {
                    switch (
                        ((e = qt), (u = e.alternate), (t = e.flags), e.tag)
                    ) {
                        case 0:
                            if (
                                (t & 4) !== 0 &&
                                ((t = e.updateQueue),
                                (t = t !== null ? t.events : null),
                                t !== null)
                            )
                                for (l = 0; l < t.length; l++)
                                    ((n = t[l]), (n.ref.impl = n.nextImpl))
                            break
                        case 11:
                        case 15:
                            break
                        case 1:
                            if ((t & 1024) !== 0 && u !== null) {
                                ;((t = void 0),
                                    (l = e),
                                    (n = u.memoizedProps),
                                    (u = u.memoizedState),
                                    (a = l.stateNode))
                                try {
                                    var q = wl(l.type, n)
                                    ;((t = a.getSnapshotBeforeUpdate(q, u)),
                                        (a.__reactInternalSnapshotBeforeUpdate =
                                            t))
                                } catch (G) {
                                    rt(l, l.return, G)
                                }
                            }
                            break
                        case 3:
                            if ((t & 1024) !== 0) {
                                if (
                                    ((t = e.stateNode.containerInfo),
                                    (l = t.nodeType),
                                    l === 9)
                                )
                                    of(t)
                                else if (l === 1)
                                    switch (t.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            of(t)
                                            break
                                        default:
                                            t.textContent = ''
                                    }
                            }
                            break
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break
                        default:
                            if ((t & 1024) !== 0) throw Error(f(163))
                    }
                    if (((t = e.sibling), t !== null)) {
                        ;((t.return = e.return), (qt = t))
                        break
                    }
                    qt = e.return
                }
    }
    function _o(t, e, l) {
        var a = l.flags
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                ;(We(t, l), a & 4 && on(5, l))
                break
            case 1:
                if ((We(t, l), a & 4))
                    if (((t = l.stateNode), e === null))
                        try {
                            t.componentDidMount()
                        } catch (i) {
                            rt(l, l.return, i)
                        }
                    else {
                        var n = wl(l.type, e.memoizedProps)
                        e = e.memoizedState
                        try {
                            t.componentDidUpdate(
                                n,
                                e,
                                t.__reactInternalSnapshotBeforeUpdate
                            )
                        } catch (i) {
                            rt(l, l.return, i)
                        }
                    }
                ;(a & 64 && So(l), a & 512 && hn(l, l.return))
                break
            case 3:
                if ((We(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
                    if (((e = null), l.child !== null))
                        switch (l.child.tag) {
                            case 27:
                            case 5:
                                e = l.child.stateNode
                                break
                            case 1:
                                e = l.child.stateNode
                        }
                    try {
                        sr(t, e)
                    } catch (i) {
                        rt(l, l.return, i)
                    }
                }
                break
            case 27:
                e === null && a & 4 && Eo(l)
            case 26:
            case 5:
                ;(We(t, l),
                    e === null && a & 4 && zo(l),
                    a & 512 && hn(l, l.return))
                break
            case 12:
                We(t, l)
                break
            case 31:
                ;(We(t, l), a & 4 && Do(t, l))
                break
            case 13:
                ;(We(t, l),
                    a & 4 && Ro(t, l),
                    a & 64 &&
                        ((t = l.memoizedState),
                        t !== null &&
                            ((t = t.dehydrated),
                            t !== null && ((l = a0.bind(null, l)), A0(t, l)))))
                break
            case 22:
                if (((a = l.memoizedState !== null || Je), !a)) {
                    ;((e = (e !== null && e.memoizedState !== null) || Ct),
                        (n = Je))
                    var u = Ct
                    ;((Je = a),
                        (Ct = e) && !u
                            ? Fe(t, l, (l.subtreeFlags & 8772) !== 0)
                            : We(t, l),
                        (Je = n),
                        (Ct = u))
                }
                break
            case 30:
                break
            default:
                We(t, l)
        }
    }
    function Oo(t) {
        var e = t.alternate
        ;(e !== null && ((t.alternate = null), Oo(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            t.tag === 5 && ((e = t.stateNode), e !== null && gi(e)),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null))
    }
    var At = null,
        ee = !1
    function $e(t, e, l) {
        for (l = l.child; l !== null; ) (Mo(t, e, l), (l = l.sibling))
    }
    function Mo(t, e, l) {
        if (ce && typeof ce.onCommitFiberUnmount == 'function')
            try {
                ce.onCommitFiberUnmount(Ba, l)
            } catch {}
        switch (l.tag) {
            case 26:
                ;(Ct || Ne(l, e),
                    $e(t, e, l),
                    l.memoizedState
                        ? l.memoizedState.count--
                        : l.stateNode &&
                          ((l = l.stateNode), l.parentNode.removeChild(l)))
                break
            case 27:
                Ct || Ne(l, e)
                var a = At,
                    n = ee
                ;(zl(l.type) && ((At = l.stateNode), (ee = !1)),
                    $e(t, e, l),
                    Tn(l.stateNode),
                    (At = a),
                    (ee = n))
                break
            case 5:
                Ct || Ne(l, e)
            case 6:
                if (
                    ((a = At),
                    (n = ee),
                    (At = null),
                    $e(t, e, l),
                    (At = a),
                    (ee = n),
                    At !== null)
                )
                    if (ee)
                        try {
                            ;(At.nodeType === 9
                                ? At.body
                                : At.nodeName === 'HTML'
                                  ? At.ownerDocument.body
                                  : At
                            ).removeChild(l.stateNode)
                        } catch (u) {
                            rt(l, e, u)
                        }
                    else
                        try {
                            At.removeChild(l.stateNode)
                        } catch (u) {
                            rt(l, e, u)
                        }
                break
            case 18:
                At !== null &&
                    (ee
                        ? ((t = At),
                          Sh(
                              t.nodeType === 9
                                  ? t.body
                                  : t.nodeName === 'HTML'
                                    ? t.ownerDocument.body
                                    : t,
                              l.stateNode
                          ),
                          Ca(t))
                        : Sh(At, l.stateNode))
                break
            case 4:
                ;((a = At),
                    (n = ee),
                    (At = l.stateNode.containerInfo),
                    (ee = !0),
                    $e(t, e, l),
                    (At = a),
                    (ee = n))
                break
            case 0:
            case 11:
            case 14:
            case 15:
                ;(gl(2, l, e), Ct || gl(4, l, e), $e(t, e, l))
                break
            case 1:
                ;(Ct ||
                    (Ne(l, e),
                    (a = l.stateNode),
                    typeof a.componentWillUnmount == 'function' && To(l, e, a)),
                    $e(t, e, l))
                break
            case 21:
                $e(t, e, l)
                break
            case 22:
                ;((Ct = (a = Ct) || l.memoizedState !== null),
                    $e(t, e, l),
                    (Ct = a))
                break
            default:
                $e(t, e, l)
        }
    }
    function Do(t, e) {
        if (
            e.memoizedState === null &&
            ((t = e.alternate),
            t !== null && ((t = t.memoizedState), t !== null))
        ) {
            t = t.dehydrated
            try {
                Ca(t)
            } catch (l) {
                rt(e, e.return, l)
            }
        }
    }
    function Ro(t, e) {
        if (
            e.memoizedState === null &&
            ((t = e.alternate),
            t !== null &&
                ((t = t.memoizedState),
                t !== null && ((t = t.dehydrated), t !== null)))
        )
            try {
                Ca(t)
            } catch (l) {
                rt(e, e.return, l)
            }
    }
    function $m(t) {
        switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var e = t.stateNode
                return (e === null && (e = t.stateNode = new xo()), e)
            case 22:
                return (
                    (t = t.stateNode),
                    (e = t._retryCache),
                    e === null && (e = t._retryCache = new xo()),
                    e
                )
            default:
                throw Error(f(435, t.tag))
        }
    }
    function xu(t, e) {
        var l = $m(t)
        e.forEach(function (a) {
            if (!l.has(a)) {
                l.add(a)
                var n = n0.bind(null, t, a)
                a.then(n, n)
            }
        })
    }
    function le(t, e) {
        var l = e.deletions
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a],
                    u = t,
                    i = e,
                    s = i
                t: for (; s !== null; ) {
                    switch (s.tag) {
                        case 27:
                            if (zl(s.type)) {
                                ;((At = s.stateNode), (ee = !1))
                                break t
                            }
                            break
                        case 5:
                            ;((At = s.stateNode), (ee = !1))
                            break t
                        case 3:
                        case 4:
                            ;((At = s.stateNode.containerInfo), (ee = !0))
                            break t
                    }
                    s = s.return
                }
                if (At === null) throw Error(f(160))
                ;(Mo(u, i, n),
                    (At = null),
                    (ee = !1),
                    (u = n.alternate),
                    u !== null && (u.return = null),
                    (n.return = null))
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; ) (Uo(e, t), (e = e.sibling))
    }
    var Me = null
    function Uo(t, e) {
        var l = t.alternate,
            a = t.flags
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ;(le(e, t),
                    ae(t),
                    a & 4 && (gl(3, t, t.return), on(3, t), gl(5, t, t.return)))
                break
            case 1:
                ;(le(e, t),
                    ae(t),
                    a & 512 && (Ct || l === null || Ne(l, l.return)),
                    a & 64 &&
                        Je &&
                        ((t = t.updateQueue),
                        t !== null &&
                            ((a = t.callbacks),
                            a !== null &&
                                ((l = t.shared.hiddenCallbacks),
                                (t.shared.hiddenCallbacks =
                                    l === null ? a : l.concat(a))))))
                break
            case 26:
                var n = Me
                if (
                    (le(e, t),
                    ae(t),
                    a & 512 && (Ct || l === null || Ne(l, l.return)),
                    a & 4)
                ) {
                    var u = l !== null ? l.memoizedState : null
                    if (((a = t.memoizedState), l === null))
                        if (a === null)
                            if (t.stateNode === null) {
                                t: {
                                    ;((a = t.type),
                                        (l = t.memoizedProps),
                                        (n = n.ownerDocument || n))
                                    e: switch (a) {
                                        case 'title':
                                            ;((u =
                                                n.getElementsByTagName(
                                                    'title'
                                                )[0]),
                                                (!u ||
                                                    u[Ya] ||
                                                    u[Gt] ||
                                                    u.namespaceURI ===
                                                        'http://www.w3.org/2000/svg' ||
                                                    u.hasAttribute(
                                                        'itemprop'
                                                    )) &&
                                                    ((u = n.createElement(a)),
                                                    n.head.insertBefore(
                                                        u,
                                                        n.querySelector(
                                                            'head > title'
                                                        )
                                                    )),
                                                Zt(u, a, l),
                                                (u[Gt] = t),
                                                Bt(u),
                                                (a = u))
                                            break t
                                        case 'link':
                                            var i = Uh('link', 'href', n).get(
                                                a + (l.href || '')
                                            )
                                            if (i) {
                                                for (
                                                    var s = 0;
                                                    s < i.length;
                                                    s++
                                                )
                                                    if (
                                                        ((u = i[s]),
                                                        u.getAttribute(
                                                            'href'
                                                        ) ===
                                                            (l.href == null ||
                                                            l.href === ''
                                                                ? null
                                                                : l.href) &&
                                                            u.getAttribute(
                                                                'rel'
                                                            ) ===
                                                                (l.rel == null
                                                                    ? null
                                                                    : l.rel) &&
                                                            u.getAttribute(
                                                                'title'
                                                            ) ===
                                                                (l.title == null
                                                                    ? null
                                                                    : l.title) &&
                                                            u.getAttribute(
                                                                'crossorigin'
                                                            ) ===
                                                                (l.crossOrigin ==
                                                                null
                                                                    ? null
                                                                    : l.crossOrigin))
                                                    ) {
                                                        i.splice(s, 1)
                                                        break e
                                                    }
                                            }
                                            ;((u = n.createElement(a)),
                                                Zt(u, a, l),
                                                n.head.appendChild(u))
                                            break
                                        case 'meta':
                                            if (
                                                (i = Uh(
                                                    'meta',
                                                    'content',
                                                    n
                                                ).get(a + (l.content || '')))
                                            ) {
                                                for (s = 0; s < i.length; s++)
                                                    if (
                                                        ((u = i[s]),
                                                        u.getAttribute(
                                                            'content'
                                                        ) ===
                                                            (l.content == null
                                                                ? null
                                                                : '' +
                                                                  l.content) &&
                                                            u.getAttribute(
                                                                'name'
                                                            ) ===
                                                                (l.name == null
                                                                    ? null
                                                                    : l.name) &&
                                                            u.getAttribute(
                                                                'property'
                                                            ) ===
                                                                (l.property ==
                                                                null
                                                                    ? null
                                                                    : l.property) &&
                                                            u.getAttribute(
                                                                'http-equiv'
                                                            ) ===
                                                                (l.httpEquiv ==
                                                                null
                                                                    ? null
                                                                    : l.httpEquiv) &&
                                                            u.getAttribute(
                                                                'charset'
                                                            ) ===
                                                                (l.charSet ==
                                                                null
                                                                    ? null
                                                                    : l.charSet))
                                                    ) {
                                                        i.splice(s, 1)
                                                        break e
                                                    }
                                            }
                                            ;((u = n.createElement(a)),
                                                Zt(u, a, l),
                                                n.head.appendChild(u))
                                            break
                                        default:
                                            throw Error(f(468, a))
                                    }
                                    ;((u[Gt] = t), Bt(u), (a = u))
                                }
                                t.stateNode = a
                            } else Nh(n, t.type, t.stateNode)
                        else t.stateNode = Rh(n, a, t.memoizedProps)
                    else
                        u !== a
                            ? (u === null
                                  ? l.stateNode !== null &&
                                    ((l = l.stateNode),
                                    l.parentNode.removeChild(l))
                                  : u.count--,
                              a === null
                                  ? Nh(n, t.type, t.stateNode)
                                  : Rh(n, a, t.memoizedProps))
                            : a === null &&
                              t.stateNode !== null &&
                              qc(t, t.memoizedProps, l.memoizedProps)
                }
                break
            case 27:
                ;(le(e, t),
                    ae(t),
                    a & 512 && (Ct || l === null || Ne(l, l.return)),
                    l !== null &&
                        a & 4 &&
                        qc(t, t.memoizedProps, l.memoizedProps))
                break
            case 5:
                if (
                    (le(e, t),
                    ae(t),
                    a & 512 && (Ct || l === null || Ne(l, l.return)),
                    t.flags & 32)
                ) {
                    n = t.stateNode
                    try {
                        la(n, '')
                    } catch (q) {
                        rt(t, t.return, q)
                    }
                }
                ;(a & 4 &&
                    t.stateNode != null &&
                    ((n = t.memoizedProps),
                    qc(t, n, l !== null ? l.memoizedProps : n)),
                    a & 1024 && (kc = !0))
                break
            case 6:
                if ((le(e, t), ae(t), a & 4)) {
                    if (t.stateNode === null) throw Error(f(162))
                    ;((a = t.memoizedProps), (l = t.stateNode))
                    try {
                        l.nodeValue = a
                    } catch (q) {
                        rt(t, t.return, q)
                    }
                }
                break
            case 3:
                if (
                    ((Qu = null),
                    (n = Me),
                    (Me = ku(e.containerInfo)),
                    le(e, t),
                    (Me = n),
                    ae(t),
                    a & 4 && l !== null && l.memoizedState.isDehydrated)
                )
                    try {
                        Ca(e.containerInfo)
                    } catch (q) {
                        rt(t, t.return, q)
                    }
                kc && ((kc = !1), No(t))
                break
            case 4:
                ;((a = Me),
                    (Me = ku(t.stateNode.containerInfo)),
                    le(e, t),
                    ae(t),
                    (Me = a))
                break
            case 12:
                ;(le(e, t), ae(t))
                break
            case 31:
                ;(le(e, t),
                    ae(t),
                    a & 4 &&
                        ((a = t.updateQueue),
                        a !== null && ((t.updateQueue = null), xu(t, a))))
                break
            case 13:
                ;(le(e, t),
                    ae(t),
                    t.child.flags & 8192 &&
                        (t.memoizedState !== null) !=
                            (l !== null && l.memoizedState !== null) &&
                        (Ou = ie()),
                    a & 4 &&
                        ((a = t.updateQueue),
                        a !== null && ((t.updateQueue = null), xu(t, a))))
                break
            case 22:
                n = t.memoizedState !== null
                var d = l !== null && l.memoizedState !== null,
                    T = Je,
                    _ = Ct
                if (
                    ((Je = T || n),
                    (Ct = _ || d),
                    le(e, t),
                    (Ct = _),
                    (Je = T),
                    ae(t),
                    a & 8192)
                )
                    t: for (
                        e = t.stateNode,
                            e._visibility = n
                                ? e._visibility & -2
                                : e._visibility | 1,
                            n && (l === null || d || Je || Ct || Vl(t)),
                            l = null,
                            e = t;
                        ;
                    ) {
                        if (e.tag === 5 || e.tag === 26) {
                            if (l === null) {
                                d = l = e
                                try {
                                    if (((u = d.stateNode), n))
                                        ((i = u.style),
                                            typeof i.setProperty == 'function'
                                                ? i.setProperty(
                                                      'display',
                                                      'none',
                                                      'important'
                                                  )
                                                : (i.display = 'none'))
                                    else {
                                        s = d.stateNode
                                        var D = d.memoizedProps.style,
                                            z =
                                                D != null &&
                                                D.hasOwnProperty('display')
                                                    ? D.display
                                                    : null
                                        s.style.display =
                                            z == null || typeof z == 'boolean'
                                                ? ''
                                                : ('' + z).trim()
                                    }
                                } catch (q) {
                                    rt(d, d.return, q)
                                }
                            }
                        } else if (e.tag === 6) {
                            if (l === null) {
                                d = e
                                try {
                                    d.stateNode.nodeValue = n
                                        ? ''
                                        : d.memoizedProps
                                } catch (q) {
                                    rt(d, d.return, q)
                                }
                            }
                        } else if (e.tag === 18) {
                            if (l === null) {
                                d = e
                                try {
                                    var E = d.stateNode
                                    n ? Th(E, !0) : Th(d.stateNode, !1)
                                } catch (q) {
                                    rt(d, d.return, q)
                                }
                            }
                        } else if (
                            ((e.tag !== 22 && e.tag !== 23) ||
                                e.memoizedState === null ||
                                e === t) &&
                            e.child !== null
                        ) {
                            ;((e.child.return = e), (e = e.child))
                            continue
                        }
                        if (e === t) break t
                        for (; e.sibling === null; ) {
                            if (e.return === null || e.return === t) break t
                            ;(l === e && (l = null), (e = e.return))
                        }
                        ;(l === e && (l = null),
                            (e.sibling.return = e.return),
                            (e = e.sibling))
                    }
                a & 4 &&
                    ((a = t.updateQueue),
                    a !== null &&
                        ((l = a.retryQueue),
                        l !== null && ((a.retryQueue = null), xu(t, l))))
                break
            case 19:
                ;(le(e, t),
                    ae(t),
                    a & 4 &&
                        ((a = t.updateQueue),
                        a !== null && ((t.updateQueue = null), xu(t, a))))
                break
            case 30:
                break
            case 21:
                break
            default:
                ;(le(e, t), ae(t))
        }
    }
    function ae(t) {
        var e = t.flags
        if (e & 2) {
            try {
                for (var l, a = t.return; a !== null; ) {
                    if (Ao(a)) {
                        l = a
                        break
                    }
                    a = a.return
                }
                if (l == null) throw Error(f(160))
                switch (l.tag) {
                    case 27:
                        var n = l.stateNode,
                            u = jc(t)
                        Eu(t, u, n)
                        break
                    case 5:
                        var i = l.stateNode
                        l.flags & 32 && (la(i, ''), (l.flags &= -33))
                        var s = jc(t)
                        Eu(t, s, i)
                        break
                    case 3:
                    case 4:
                        var d = l.stateNode.containerInfo,
                            T = jc(t)
                        Yc(t, T, d)
                        break
                    default:
                        throw Error(f(161))
                }
            } catch (_) {
                rt(t, t.return, _)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function No(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t
                ;(No(e),
                    e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                    (t = t.sibling))
            }
    }
    function We(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                (_o(t, e.alternate, e), (e = e.sibling))
    }
    function Vl(t) {
        for (t = t.child; t !== null; ) {
            var e = t
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ;(gl(4, e, e.return), Vl(e))
                    break
                case 1:
                    Ne(e, e.return)
                    var l = e.stateNode
                    ;(typeof l.componentWillUnmount == 'function' &&
                        To(e, e.return, l),
                        Vl(e))
                    break
                case 27:
                    Tn(e.stateNode)
                case 26:
                case 5:
                    ;(Ne(e, e.return), Vl(e))
                    break
                case 22:
                    e.memoizedState === null && Vl(e)
                    break
                case 30:
                    Vl(e)
                    break
                default:
                    Vl(e)
            }
            t = t.sibling
        }
    }
    function Fe(t, e, l) {
        for (
            l = l && (e.subtreeFlags & 8772) !== 0, e = e.child;
            e !== null;
        ) {
            var a = e.alternate,
                n = t,
                u = e,
                i = u.flags
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    ;(Fe(n, u, l), on(4, u))
                    break
                case 1:
                    if (
                        (Fe(n, u, l),
                        (a = u),
                        (n = a.stateNode),
                        typeof n.componentDidMount == 'function')
                    )
                        try {
                            n.componentDidMount()
                        } catch (T) {
                            rt(a, a.return, T)
                        }
                    if (((a = u), (n = a.updateQueue), n !== null)) {
                        var s = a.stateNode
                        try {
                            var d = n.shared.hiddenCallbacks
                            if (d !== null)
                                for (
                                    n.shared.hiddenCallbacks = null, n = 0;
                                    n < d.length;
                                    n++
                                )
                                    fr(d[n], s)
                        } catch (T) {
                            rt(a, a.return, T)
                        }
                    }
                    ;(l && i & 64 && So(u), hn(u, u.return))
                    break
                case 27:
                    Eo(u)
                case 26:
                case 5:
                    ;(Fe(n, u, l),
                        l && a === null && i & 4 && zo(u),
                        hn(u, u.return))
                    break
                case 12:
                    Fe(n, u, l)
                    break
                case 31:
                    ;(Fe(n, u, l), l && i & 4 && Do(n, u))
                    break
                case 13:
                    ;(Fe(n, u, l), l && i & 4 && Ro(n, u))
                    break
                case 22:
                    ;(u.memoizedState === null && Fe(n, u, l), hn(u, u.return))
                    break
                case 30:
                    break
                default:
                    Fe(n, u, l)
            }
            e = e.sibling
        }
    }
    function Gc(t, e) {
        var l = null
        ;(t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
            (t = null),
            e.memoizedState !== null &&
                e.memoizedState.cachePool !== null &&
                (t = e.memoizedState.cachePool.pool),
            t !== l && (t != null && t.refCount++, l != null && Fa(l)))
    }
    function Qc(t, e) {
        ;((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Fa(t)))
    }
    function De(t, e, l, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) (Co(t, e, l, a), (e = e.sibling))
    }
    function Co(t, e, l, a) {
        var n = e.flags
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ;(De(t, e, l, a), n & 2048 && on(9, e))
                break
            case 1:
                De(t, e, l, a)
                break
            case 3:
                ;(De(t, e, l, a),
                    n & 2048 &&
                        ((t = null),
                        e.alternate !== null &&
                            (t = e.alternate.memoizedState.cache),
                        (e = e.memoizedState.cache),
                        e !== t && (e.refCount++, t != null && Fa(t))))
                break
            case 12:
                if (n & 2048) {
                    ;(De(t, e, l, a), (t = e.stateNode))
                    try {
                        var u = e.memoizedProps,
                            i = u.id,
                            s = u.onPostCommit
                        typeof s == 'function' &&
                            s(
                                i,
                                e.alternate === null ? 'mount' : 'update',
                                t.passiveEffectDuration,
                                -0
                            )
                    } catch (d) {
                        rt(e, e.return, d)
                    }
                } else De(t, e, l, a)
                break
            case 31:
                De(t, e, l, a)
                break
            case 13:
                De(t, e, l, a)
                break
            case 23:
                break
            case 22:
                ;((u = e.stateNode),
                    (i = e.alternate),
                    e.memoizedState !== null
                        ? u._visibility & 2
                            ? De(t, e, l, a)
                            : dn(t, e)
                        : u._visibility & 2
                          ? De(t, e, l, a)
                          : ((u._visibility |= 2),
                            za(
                                t,
                                e,
                                l,
                                a,
                                (e.subtreeFlags & 10256) !== 0 || !1
                            )),
                    n & 2048 && Gc(i, e))
                break
            case 24:
                ;(De(t, e, l, a), n & 2048 && Qc(e.alternate, e))
                break
            default:
                De(t, e, l, a)
        }
    }
    function za(t, e, l, a, n) {
        for (
            n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
            e !== null;
        ) {
            var u = t,
                i = e,
                s = l,
                d = a,
                T = i.flags
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    ;(za(u, i, s, d, n), on(8, i))
                    break
                case 23:
                    break
                case 22:
                    var _ = i.stateNode
                    ;(i.memoizedState !== null
                        ? _._visibility & 2
                            ? za(u, i, s, d, n)
                            : dn(u, i)
                        : ((_._visibility |= 2), za(u, i, s, d, n)),
                        n && T & 2048 && Gc(i.alternate, i))
                    break
                case 24:
                    ;(za(u, i, s, d, n), n && T & 2048 && Qc(i.alternate, i))
                    break
                default:
                    za(u, i, s, d, n)
            }
            e = e.sibling
        }
    }
    function dn(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var l = t,
                    a = e,
                    n = a.flags
                switch (a.tag) {
                    case 22:
                        ;(dn(l, a), n & 2048 && Gc(a.alternate, a))
                        break
                    case 24:
                        ;(dn(l, a), n & 2048 && Qc(a.alternate, a))
                        break
                    default:
                        dn(l, a)
                }
                e = e.sibling
            }
    }
    var mn = 8192
    function Aa(t, e, l) {
        if (t.subtreeFlags & mn)
            for (t = t.child; t !== null; ) (Ho(t, e, l), (t = t.sibling))
    }
    function Ho(t, e, l) {
        switch (t.tag) {
            case 26:
                ;(Aa(t, e, l),
                    t.flags & mn &&
                        t.memoizedState !== null &&
                        B0(l, Me, t.memoizedState, t.memoizedProps))
                break
            case 5:
                Aa(t, e, l)
                break
            case 3:
            case 4:
                var a = Me
                ;((Me = ku(t.stateNode.containerInfo)), Aa(t, e, l), (Me = a))
                break
            case 22:
                t.memoizedState === null &&
                    ((a = t.alternate),
                    a !== null && a.memoizedState !== null
                        ? ((a = mn), (mn = 16777216), Aa(t, e, l), (mn = a))
                        : Aa(t, e, l))
                break
            default:
                Aa(t, e, l)
        }
    }
    function Bo(t) {
        var e = t.alternate
        if (e !== null && ((t = e.child), t !== null)) {
            e.child = null
            do ((e = t.sibling), (t.sibling = null), (t = e))
            while (t !== null)
        }
    }
    function gn(t) {
        var e = t.deletions
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l]
                    ;((qt = a), jo(a, t))
                }
            Bo(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) (qo(t), (t = t.sibling))
    }
    function qo(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                ;(gn(t), t.flags & 2048 && gl(9, t, t.return))
                break
            case 3:
                gn(t)
                break
            case 12:
                gn(t)
                break
            case 22:
                var e = t.stateNode
                t.memoizedState !== null &&
                e._visibility & 2 &&
                (t.return === null || t.return.tag !== 13)
                    ? ((e._visibility &= -3), _u(t))
                    : gn(t)
                break
            default:
                gn(t)
        }
    }
    function _u(t) {
        var e = t.deletions
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var a = e[l]
                    ;((qt = a), jo(a, t))
                }
            Bo(t)
        }
        for (t = t.child; t !== null; ) {
            switch (((e = t), e.tag)) {
                case 0:
                case 11:
                case 15:
                    ;(gl(8, e, e.return), _u(e))
                    break
                case 22:
                    ;((l = e.stateNode),
                        l._visibility & 2 && ((l._visibility &= -3), _u(e)))
                    break
                default:
                    _u(e)
            }
            t = t.sibling
        }
    }
    function jo(t, e) {
        for (; qt !== null; ) {
            var l = qt
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    gl(8, l, e)
                    break
                case 23:
                case 22:
                    if (
                        l.memoizedState !== null &&
                        l.memoizedState.cachePool !== null
                    ) {
                        var a = l.memoizedState.cachePool.pool
                        a != null && a.refCount++
                    }
                    break
                case 24:
                    Fa(l.memoizedState.cache)
            }
            if (((a = l.child), a !== null)) ((a.return = l), (qt = a))
            else
                t: for (l = t; qt !== null; ) {
                    a = qt
                    var n = a.sibling,
                        u = a.return
                    if ((Oo(a), a === l)) {
                        qt = null
                        break t
                    }
                    if (n !== null) {
                        ;((n.return = u), (qt = n))
                        break t
                    }
                    qt = u
                }
        }
    }
    var Wm = {
            getCacheForType: function (t) {
                var e = Lt(Rt),
                    l = e.data.get(t)
                return (l === void 0 && ((l = t()), e.data.set(t, l)), l)
            },
            cacheSignal: function () {
                return Lt(Rt).controller.signal
            },
        },
        Fm = typeof WeakMap == 'function' ? WeakMap : Map,
        it = 0,
        vt = null,
        F = null,
        P = 0,
        st = 0,
        de = null,
        yl = !1,
        Ea = !1,
        Lc = !1,
        Ie = 0,
        _t = 0,
        pl = 0,
        Kl = 0,
        Xc = 0,
        me = 0,
        xa = 0,
        yn = null,
        ne = null,
        Zc = !1,
        Ou = 0,
        Yo = 0,
        Mu = 1 / 0,
        Du = null,
        vl = null,
        Ht = 0,
        bl = null,
        _a = null,
        Pe = 0,
        wc = 0,
        Vc = null,
        ko = null,
        pn = 0,
        Kc = null
    function ge() {
        return (it & 2) !== 0 && P !== 0 ? P & -P : O.T !== null ? Pc() : ts()
    }
    function Go() {
        if (me === 0)
            if ((P & 536870912) === 0 || et) {
                var t = jn
                ;((jn <<= 1), (jn & 3932160) === 0 && (jn = 262144), (me = t))
            } else me = 536870912
        return ((t = oe.current), t !== null && (t.flags |= 32), me)
    }
    function ue(t, e, l) {
        ;(((t === vt && (st === 2 || st === 9)) ||
            t.cancelPendingCommit !== null) &&
            (Oa(t, 0), Sl(t, P, me, !1)),
            ja(t, l),
            ((it & 2) === 0 || t !== vt) &&
                (t === vt &&
                    ((it & 2) === 0 && (Kl |= l), _t === 4 && Sl(t, P, me, !1)),
                Ce(t)))
    }
    function Qo(t, e, l) {
        if ((it & 6) !== 0) throw Error(f(327))
        var a =
                (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) ||
                qa(t, e),
            n = a ? t0(t, e) : $c(t, e, !0),
            u = a
        do {
            if (n === 0) {
                Ea && !a && Sl(t, e, 0, !1)
                break
            } else {
                if (((l = t.current.alternate), u && !Im(l))) {
                    ;((n = $c(t, e, !1)), (u = !1))
                    continue
                }
                if (n === 2) {
                    if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0
                    else
                        ((i = t.pendingLanes & -536870913),
                            (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0))
                    if (i !== 0) {
                        e = i
                        t: {
                            var s = t
                            n = yn
                            var d = s.current.memoizedState.isDehydrated
                            if (
                                (d && (Oa(s, i).flags |= 256),
                                (i = $c(s, i, !1)),
                                i !== 2)
                            ) {
                                if (Lc && !d) {
                                    ;((s.errorRecoveryDisabledLanes |= u),
                                        (Kl |= u),
                                        (n = 4))
                                    break t
                                }
                                ;((u = ne),
                                    (ne = n),
                                    u !== null &&
                                        (ne === null
                                            ? (ne = u)
                                            : ne.push.apply(ne, u)))
                            }
                            n = i
                        }
                        if (((u = !1), n !== 2)) continue
                    }
                }
                if (n === 1) {
                    ;(Oa(t, 0), Sl(t, e, 0, !0))
                    break
                }
                t: {
                    switch (((a = t), (u = n), u)) {
                        case 0:
                        case 1:
                            throw Error(f(345))
                        case 4:
                            if ((e & 4194048) !== e) break
                        case 6:
                            Sl(a, e, me, !yl)
                            break t
                        case 2:
                            ne = null
                            break
                        case 3:
                        case 5:
                            break
                        default:
                            throw Error(f(329))
                    }
                    if (
                        (e & 62914560) === e &&
                        ((n = Ou + 300 - ie()), 10 < n)
                    ) {
                        if ((Sl(a, e, me, !yl), kn(a, 0, !0) !== 0)) break t
                        ;((Pe = e),
                            (a.timeoutHandle = vh(
                                Lo.bind(
                                    null,
                                    a,
                                    l,
                                    ne,
                                    Du,
                                    Zc,
                                    e,
                                    me,
                                    Kl,
                                    xa,
                                    yl,
                                    u,
                                    'Throttled',
                                    -0,
                                    0
                                ),
                                n
                            )))
                        break t
                    }
                    Lo(a, l, ne, Du, Zc, e, me, Kl, xa, yl, u, null, -0, 0)
                }
            }
            break
        } while (!0)
        Ce(t)
    }
    function Lo(t, e, l, a, n, u, i, s, d, T, _, D, z, E) {
        if (
            ((t.timeoutHandle = -1),
            (D = e.subtreeFlags),
            D & 8192 || (D & 16785408) === 16785408)
        ) {
            ;((D = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Ye,
            }),
                Ho(e, u, D))
            var q =
                (u & 62914560) === u
                    ? Ou - ie()
                    : (u & 4194048) === u
                      ? Yo - ie()
                      : 0
            if (((q = q0(D, q)), q !== null)) {
                ;((Pe = u),
                    (t.cancelPendingCommit = q(
                        Wo.bind(
                            null,
                            t,
                            e,
                            u,
                            l,
                            a,
                            n,
                            i,
                            s,
                            d,
                            _,
                            D,
                            null,
                            z,
                            E
                        )
                    )),
                    Sl(t, u, i, !T))
                return
            }
        }
        Wo(t, e, u, l, a, n, i, s, d)
    }
    function Im(t) {
        for (var e = t; ; ) {
            var l = e.tag
            if (
                (l === 0 || l === 11 || l === 15) &&
                e.flags & 16384 &&
                ((l = e.updateQueue),
                l !== null && ((l = l.stores), l !== null))
            )
                for (var a = 0; a < l.length; a++) {
                    var n = l[a],
                        u = n.getSnapshot
                    n = n.value
                    try {
                        if (!se(u(), n)) return !1
                    } catch {
                        return !1
                    }
                }
            if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
                ((l.return = e), (e = l))
            else {
                if (e === t) break
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) return !0
                    e = e.return
                }
                ;((e.sibling.return = e.return), (e = e.sibling))
            }
        }
        return !0
    }
    function Sl(t, e, l, a) {
        ;((e &= ~Xc),
            (e &= ~Kl),
            (t.suspendedLanes |= e),
            (t.pingedLanes &= ~e),
            a && (t.warmLanes |= e),
            (a = t.expirationTimes))
        for (var n = e; 0 < n; ) {
            var u = 31 - fe(n),
                i = 1 << u
            ;((a[u] = -1), (n &= ~i))
        }
        l !== 0 && Ff(t, l, e)
    }
    function Ru() {
        return (it & 6) === 0 ? (vn(0), !1) : !0
    }
    function Jc() {
        if (F !== null) {
            if (st === 0) var t = F.return
            else
                ((t = F),
                    (Le = Yl = null),
                    rc(t),
                    (pa = null),
                    (Pa = 0),
                    (t = F))
            for (; t !== null; ) (bo(t.alternate, t), (t = t.return))
            F = null
        }
    }
    function Oa(t, e) {
        var l = t.timeoutHandle
        ;(l !== -1 && ((t.timeoutHandle = -1), v0(l)),
            (l = t.cancelPendingCommit),
            l !== null && ((t.cancelPendingCommit = null), l()),
            (Pe = 0),
            Jc(),
            (vt = t),
            (F = l = Ge(t.current, null)),
            (P = e),
            (st = 0),
            (de = null),
            (yl = !1),
            (Ea = qa(t, e)),
            (Lc = !1),
            (xa = me = Xc = Kl = pl = _t = 0),
            (ne = yn = null),
            (Zc = !1),
            (e & 8) !== 0 && (e |= e & 32))
        var a = t.entangledLanes
        if (a !== 0)
            for (t = t.entanglements, a &= e; 0 < a; ) {
                var n = 31 - fe(a),
                    u = 1 << n
                ;((e |= t[n]), (a &= ~u))
            }
        return ((Ie = e), Fn(), l)
    }
    function Xo(t, e) {
        ;((K = null),
            (O.H = fn),
            e === ya || e === uu
                ? ((e = nr()), (st = 3))
                : e === Ii
                  ? ((e = nr()), (st = 4))
                  : (st =
                        e === _c
                            ? 8
                            : e !== null &&
                                typeof e == 'object' &&
                                typeof e.then == 'function'
                              ? 6
                              : 1),
            (de = e),
            F === null && ((_t = 1), bu(t, be(e, t.current))))
    }
    function Zo() {
        var t = oe.current
        return t === null
            ? !0
            : (P & 4194048) === P
              ? Ae === null
              : (P & 62914560) === P || (P & 536870912) !== 0
                ? t === Ae
                : !1
    }
    function wo() {
        var t = O.H
        return ((O.H = fn), t === null ? fn : t)
    }
    function Vo() {
        var t = O.A
        return ((O.A = Wm), t)
    }
    function Uu() {
        ;((_t = 4),
            yl || ((P & 4194048) !== P && oe.current !== null) || (Ea = !0),
            ((pl & 134217727) === 0 && (Kl & 134217727) === 0) ||
                vt === null ||
                Sl(vt, P, me, !1))
    }
    function $c(t, e, l) {
        var a = it
        it |= 2
        var n = wo(),
            u = Vo()
        ;((vt !== t || P !== e) && ((Du = null), Oa(t, e)), (e = !1))
        var i = _t
        t: do
            try {
                if (st !== 0 && F !== null) {
                    var s = F,
                        d = de
                    switch (st) {
                        case 8:
                            ;(Jc(), (i = 6))
                            break t
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            oe.current === null && (e = !0)
                            var T = st
                            if (
                                ((st = 0), (de = null), Ma(t, s, d, T), l && Ea)
                            ) {
                                i = 0
                                break t
                            }
                            break
                        default:
                            ;((T = st), (st = 0), (de = null), Ma(t, s, d, T))
                    }
                }
                ;(Pm(), (i = _t))
                break
            } catch (_) {
                Xo(t, _)
            }
        while (!0)
        return (
            e && t.shellSuspendCounter++,
            (Le = Yl = null),
            (it = a),
            (O.H = n),
            (O.A = u),
            F === null && ((vt = null), (P = 0), Fn()),
            i
        )
    }
    function Pm() {
        for (; F !== null; ) Ko(F)
    }
    function t0(t, e) {
        var l = it
        it |= 2
        var a = wo(),
            n = Vo()
        vt !== t || P !== e
            ? ((Du = null), (Mu = ie() + 500), Oa(t, e))
            : (Ea = qa(t, e))
        t: do
            try {
                if (st !== 0 && F !== null) {
                    e = F
                    var u = de
                    e: switch (st) {
                        case 1:
                            ;((st = 0), (de = null), Ma(t, e, u, 1))
                            break
                        case 2:
                        case 9:
                            if (lr(u)) {
                                ;((st = 0), (de = null), Jo(e))
                                break
                            }
                            ;((e = function () {
                                ;((st !== 2 && st !== 9) ||
                                    vt !== t ||
                                    (st = 7),
                                    Ce(t))
                            }),
                                u.then(e, e))
                            break t
                        case 3:
                            st = 7
                            break t
                        case 4:
                            st = 5
                            break t
                        case 7:
                            lr(u)
                                ? ((st = 0), (de = null), Jo(e))
                                : ((st = 0), (de = null), Ma(t, e, u, 7))
                            break
                        case 5:
                            var i = null
                            switch (F.tag) {
                                case 26:
                                    i = F.memoizedState
                                case 5:
                                case 27:
                                    var s = F
                                    if (i ? Ch(i) : s.stateNode.complete) {
                                        ;((st = 0), (de = null))
                                        var d = s.sibling
                                        if (d !== null) F = d
                                        else {
                                            var T = s.return
                                            T !== null
                                                ? ((F = T), Nu(T))
                                                : (F = null)
                                        }
                                        break e
                                    }
                            }
                            ;((st = 0), (de = null), Ma(t, e, u, 5))
                            break
                        case 6:
                            ;((st = 0), (de = null), Ma(t, e, u, 6))
                            break
                        case 8:
                            ;(Jc(), (_t = 6))
                            break t
                        default:
                            throw Error(f(462))
                    }
                }
                e0()
                break
            } catch (_) {
                Xo(t, _)
            }
        while (!0)
        return (
            (Le = Yl = null),
            (O.H = a),
            (O.A = n),
            (it = l),
            F !== null ? 0 : ((vt = null), (P = 0), Fn(), _t)
        )
    }
    function e0() {
        for (; F !== null && !Ed(); ) Ko(F)
    }
    function Ko(t) {
        var e = po(t.alternate, t, Ie)
        ;((t.memoizedProps = t.pendingProps), e === null ? Nu(t) : (F = e))
    }
    function Jo(t) {
        var e = t,
            l = e.alternate
        switch (e.tag) {
            case 15:
            case 0:
                e = ro(l, e, e.pendingProps, e.type, void 0, P)
                break
            case 11:
                e = ro(l, e, e.pendingProps, e.type.render, e.ref, P)
                break
            case 5:
                rc(e)
            default:
                ;(bo(l, e), (e = F = ws(e, Ie)), (e = po(l, e, Ie)))
        }
        ;((t.memoizedProps = t.pendingProps), e === null ? Nu(t) : (F = e))
    }
    function Ma(t, e, l, a) {
        ;((Le = Yl = null), rc(e), (pa = null), (Pa = 0))
        var n = e.return
        try {
            if (Xm(t, n, e, l, P)) {
                ;((_t = 1), bu(t, be(l, t.current)), (F = null))
                return
            }
        } catch (u) {
            if (n !== null) throw ((F = n), u)
            ;((_t = 1), bu(t, be(l, t.current)), (F = null))
            return
        }
        e.flags & 32768
            ? (et || a === 1
                  ? (t = !0)
                  : Ea || (P & 536870912) !== 0
                    ? (t = !1)
                    : ((yl = t = !0),
                      (a === 2 || a === 9 || a === 3 || a === 6) &&
                          ((a = oe.current),
                          a !== null && a.tag === 13 && (a.flags |= 16384))),
              $o(e, t))
            : Nu(e)
    }
    function Nu(t) {
        var e = t
        do {
            if ((e.flags & 32768) !== 0) {
                $o(e, yl)
                return
            }
            t = e.return
            var l = Vm(e.alternate, e, Ie)
            if (l !== null) {
                F = l
                return
            }
            if (((e = e.sibling), e !== null)) {
                F = e
                return
            }
            F = e = t
        } while (e !== null)
        _t === 0 && (_t = 5)
    }
    function $o(t, e) {
        do {
            var l = Km(t.alternate, t)
            if (l !== null) {
                ;((l.flags &= 32767), (F = l))
                return
            }
            if (
                ((l = t.return),
                l !== null &&
                    ((l.flags |= 32768),
                    (l.subtreeFlags = 0),
                    (l.deletions = null)),
                !e && ((t = t.sibling), t !== null))
            ) {
                F = t
                return
            }
            F = t = l
        } while (t !== null)
        ;((_t = 6), (F = null))
    }
    function Wo(t, e, l, a, n, u, i, s, d) {
        t.cancelPendingCommit = null
        do Cu()
        while (Ht !== 0)
        if ((it & 6) !== 0) throw Error(f(327))
        if (e !== null) {
            if (e === t.current) throw Error(f(177))
            if (
                ((u = e.lanes | e.childLanes),
                (u |= ji),
                Hd(t, l, u, i, s, d),
                t === vt && ((F = vt = null), (P = 0)),
                (_a = e),
                (bl = t),
                (Pe = l),
                (wc = u),
                (Vc = n),
                (ko = a),
                (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
                    ? ((t.callbackNode = null),
                      (t.callbackPriority = 0),
                      u0(Bn, function () {
                          return (eh(), null)
                      }))
                    : ((t.callbackNode = null), (t.callbackPriority = 0)),
                (a = (e.flags & 13878) !== 0),
                (e.subtreeFlags & 13878) !== 0 || a)
            ) {
                ;((a = O.T),
                    (O.T = null),
                    (n = C.p),
                    (C.p = 2),
                    (i = it),
                    (it |= 4))
                try {
                    Jm(t, e, l)
                } finally {
                    ;((it = i), (C.p = n), (O.T = a))
                }
            }
            ;((Ht = 1), Fo(), Io(), Po())
        }
    }
    function Fo() {
        if (Ht === 1) {
            Ht = 0
            var t = bl,
                e = _a,
                l = (e.flags & 13878) !== 0
            if ((e.subtreeFlags & 13878) !== 0 || l) {
                ;((l = O.T), (O.T = null))
                var a = C.p
                C.p = 2
                var n = it
                it |= 4
                try {
                    Uo(e, t)
                    var u = ff,
                        i = qs(t.containerInfo),
                        s = u.focusedElem,
                        d = u.selectionRange
                    if (
                        i !== s &&
                        s &&
                        s.ownerDocument &&
                        Bs(s.ownerDocument.documentElement, s)
                    ) {
                        if (d !== null && Ni(s)) {
                            var T = d.start,
                                _ = d.end
                            if (
                                (_ === void 0 && (_ = T), 'selectionStart' in s)
                            )
                                ((s.selectionStart = T),
                                    (s.selectionEnd = Math.min(
                                        _,
                                        s.value.length
                                    )))
                            else {
                                var D = s.ownerDocument || document,
                                    z = (D && D.defaultView) || window
                                if (z.getSelection) {
                                    var E = z.getSelection(),
                                        q = s.textContent.length,
                                        G = Math.min(d.start, q),
                                        yt =
                                            d.end === void 0
                                                ? G
                                                : Math.min(d.end, q)
                                    !E.extend &&
                                        G > yt &&
                                        ((i = yt), (yt = G), (G = i))
                                    var v = Hs(s, G),
                                        m = Hs(s, yt)
                                    if (
                                        v &&
                                        m &&
                                        (E.rangeCount !== 1 ||
                                            E.anchorNode !== v.node ||
                                            E.anchorOffset !== v.offset ||
                                            E.focusNode !== m.node ||
                                            E.focusOffset !== m.offset)
                                    ) {
                                        var S = D.createRange()
                                        ;(S.setStart(v.node, v.offset),
                                            E.removeAllRanges(),
                                            G > yt
                                                ? (E.addRange(S),
                                                  E.extend(m.node, m.offset))
                                                : (S.setEnd(m.node, m.offset),
                                                  E.addRange(S)))
                                    }
                                }
                            }
                        }
                        for (D = [], E = s; (E = E.parentNode); )
                            E.nodeType === 1 &&
                                D.push({
                                    element: E,
                                    left: E.scrollLeft,
                                    top: E.scrollTop,
                                })
                        for (
                            typeof s.focus == 'function' && s.focus(), s = 0;
                            s < D.length;
                            s++
                        ) {
                            var M = D[s]
                            ;((M.element.scrollLeft = M.left),
                                (M.element.scrollTop = M.top))
                        }
                    }
                    ;((wu = !!cf), (ff = cf = null))
                } finally {
                    ;((it = n), (C.p = a), (O.T = l))
                }
            }
            ;((t.current = e), (Ht = 2))
        }
    }
    function Io() {
        if (Ht === 2) {
            Ht = 0
            var t = bl,
                e = _a,
                l = (e.flags & 8772) !== 0
            if ((e.subtreeFlags & 8772) !== 0 || l) {
                ;((l = O.T), (O.T = null))
                var a = C.p
                C.p = 2
                var n = it
                it |= 4
                try {
                    _o(t, e.alternate, e)
                } finally {
                    ;((it = n), (C.p = a), (O.T = l))
                }
            }
            Ht = 3
        }
    }
    function Po() {
        if (Ht === 4 || Ht === 3) {
            ;((Ht = 0), xd())
            var t = bl,
                e = _a,
                l = Pe,
                a = ko
            ;(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
                ? (Ht = 5)
                : ((Ht = 0), (_a = bl = null), th(t, t.pendingLanes))
            var n = t.pendingLanes
            if (
                (n === 0 && (vl = null),
                di(l),
                (e = e.stateNode),
                ce && typeof ce.onCommitFiberRoot == 'function')
            )
                try {
                    ce.onCommitFiberRoot(
                        Ba,
                        e,
                        void 0,
                        (e.current.flags & 128) === 128
                    )
                } catch {}
            if (a !== null) {
                ;((e = O.T), (n = C.p), (C.p = 2), (O.T = null))
                try {
                    for (
                        var u = t.onRecoverableError, i = 0;
                        i < a.length;
                        i++
                    ) {
                        var s = a[i]
                        u(s.value, { componentStack: s.stack })
                    }
                } finally {
                    ;((O.T = e), (C.p = n))
                }
            }
            ;((Pe & 3) !== 0 && Cu(),
                Ce(t),
                (n = t.pendingLanes),
                (l & 261930) !== 0 && (n & 42) !== 0
                    ? t === Kc
                        ? pn++
                        : ((pn = 0), (Kc = t))
                    : (pn = 0),
                vn(0))
        }
    }
    function th(t, e) {
        ;(t.pooledCacheLanes &= e) === 0 &&
            ((e = t.pooledCache), e != null && ((t.pooledCache = null), Fa(e)))
    }
    function Cu() {
        return (Fo(), Io(), Po(), eh())
    }
    function eh() {
        if (Ht !== 5) return !1
        var t = bl,
            e = wc
        wc = 0
        var l = di(Pe),
            a = O.T,
            n = C.p
        try {
            ;((C.p = 32 > l ? 32 : l), (O.T = null), (l = Vc), (Vc = null))
            var u = bl,
                i = Pe
            if (((Ht = 0), (_a = bl = null), (Pe = 0), (it & 6) !== 0))
                throw Error(f(331))
            var s = it
            if (
                ((it |= 4),
                qo(u.current),
                Co(u, u.current, i, l),
                (it = s),
                vn(0, !1),
                ce && typeof ce.onPostCommitFiberRoot == 'function')
            )
                try {
                    ce.onPostCommitFiberRoot(Ba, u)
                } catch {}
            return !0
        } finally {
            ;((C.p = n), (O.T = a), th(t, e))
        }
    }
    function lh(t, e, l) {
        ;((e = be(l, e)),
            (e = xc(t.stateNode, e, 2)),
            (t = hl(t, e, 2)),
            t !== null && (ja(t, 2), Ce(t)))
    }
    function rt(t, e, l) {
        if (t.tag === 3) lh(t, t, l)
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    lh(e, t, l)
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode
                    if (
                        typeof e.type.getDerivedStateFromError == 'function' ||
                        (typeof a.componentDidCatch == 'function' &&
                            (vl === null || !vl.has(a)))
                    ) {
                        ;((t = be(l, t)),
                            (l = lo(2)),
                            (a = hl(e, l, 2)),
                            a !== null && (ao(l, a, e, t), ja(a, 2), Ce(a)))
                        break
                    }
                }
                e = e.return
            }
    }
    function Wc(t, e, l) {
        var a = t.pingCache
        if (a === null) {
            a = t.pingCache = new Fm()
            var n = new Set()
            a.set(e, n)
        } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)))
        n.has(l) ||
            ((Lc = !0), n.add(l), (t = l0.bind(null, t, e, l)), e.then(t, t))
    }
    function l0(t, e, l) {
        var a = t.pingCache
        ;(a !== null && a.delete(e),
            (t.pingedLanes |= t.suspendedLanes & l),
            (t.warmLanes &= ~l),
            vt === t &&
                (P & l) === l &&
                (_t === 4 ||
                (_t === 3 && (P & 62914560) === P && 300 > ie() - Ou)
                    ? (it & 2) === 0 && Oa(t, 0)
                    : (Xc |= l),
                xa === P && (xa = 0)),
            Ce(t))
    }
    function ah(t, e) {
        ;(e === 0 && (e = Wf()),
            (t = Bl(t, e)),
            t !== null && (ja(t, e), Ce(t)))
    }
    function a0(t) {
        var e = t.memoizedState,
            l = 0
        ;(e !== null && (l = e.retryLane), ah(t, l))
    }
    function n0(t, e) {
        var l = 0
        switch (t.tag) {
            case 31:
            case 13:
                var a = t.stateNode,
                    n = t.memoizedState
                n !== null && (l = n.retryLane)
                break
            case 19:
                a = t.stateNode
                break
            case 22:
                a = t.stateNode._retryCache
                break
            default:
                throw Error(f(314))
        }
        ;(a !== null && a.delete(e), ah(t, l))
    }
    function u0(t, e) {
        return si(t, e)
    }
    var Hu = null,
        Da = null,
        Fc = !1,
        Bu = !1,
        Ic = !1,
        Tl = 0
    function Ce(t) {
        ;(t !== Da &&
            t.next === null &&
            (Da === null ? (Hu = Da = t) : (Da = Da.next = t)),
            (Bu = !0),
            Fc || ((Fc = !0), c0()))
    }
    function vn(t, e) {
        if (!Ic && Bu) {
            Ic = !0
            do
                for (var l = !1, a = Hu; a !== null; ) {
                    if (t !== 0) {
                        var n = a.pendingLanes
                        if (n === 0) var u = 0
                        else {
                            var i = a.suspendedLanes,
                                s = a.pingedLanes
                            ;((u = (1 << (31 - fe(42 | t) + 1)) - 1),
                                (u &= n & ~(i & ~s)),
                                (u =
                                    u & 201326741
                                        ? (u & 201326741) | 1
                                        : u
                                          ? u | 2
                                          : 0))
                        }
                        u !== 0 && ((l = !0), ch(a, u))
                    } else
                        ((u = P),
                            (u = kn(
                                a,
                                a === vt ? u : 0,
                                a.cancelPendingCommit !== null ||
                                    a.timeoutHandle !== -1
                            )),
                            (u & 3) === 0 || qa(a, u) || ((l = !0), ch(a, u)))
                    a = a.next
                }
            while (l)
            Ic = !1
        }
    }
    function i0() {
        nh()
    }
    function nh() {
        Bu = Fc = !1
        var t = 0
        Tl !== 0 && p0() && (t = Tl)
        for (var e = ie(), l = null, a = Hu; a !== null; ) {
            var n = a.next,
                u = uh(a, e)
            ;(u === 0
                ? ((a.next = null),
                  l === null ? (Hu = n) : (l.next = n),
                  n === null && (Da = l))
                : ((l = a), (t !== 0 || (u & 3) !== 0) && (Bu = !0)),
                (a = n))
        }
        ;((Ht !== 0 && Ht !== 5) || vn(t), Tl !== 0 && (Tl = 0))
    }
    function uh(t, e) {
        for (
            var l = t.suspendedLanes,
                a = t.pingedLanes,
                n = t.expirationTimes,
                u = t.pendingLanes & -62914561;
            0 < u;
        ) {
            var i = 31 - fe(u),
                s = 1 << i,
                d = n[i]
            ;(d === -1
                ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = Cd(s, e))
                : d <= e && (t.expiredLanes |= s),
                (u &= ~s))
        }
        if (
            ((e = vt),
            (l = P),
            (l = kn(
                t,
                t === e ? l : 0,
                t.cancelPendingCommit !== null || t.timeoutHandle !== -1
            )),
            (a = t.callbackNode),
            l === 0 ||
                (t === e && (st === 2 || st === 9)) ||
                t.cancelPendingCommit !== null)
        )
            return (
                a !== null && a !== null && ri(a),
                (t.callbackNode = null),
                (t.callbackPriority = 0)
            )
        if ((l & 3) === 0 || qa(t, l)) {
            if (((e = l & -l), e === t.callbackPriority)) return e
            switch ((a !== null && ri(a), di(l))) {
                case 2:
                case 8:
                    l = Jf
                    break
                case 32:
                    l = Bn
                    break
                case 268435456:
                    l = $f
                    break
                default:
                    l = Bn
            }
            return (
                (a = ih.bind(null, t)),
                (l = si(l, a)),
                (t.callbackPriority = e),
                (t.callbackNode = l),
                e
            )
        }
        return (
            a !== null && a !== null && ri(a),
            (t.callbackPriority = 2),
            (t.callbackNode = null),
            2
        )
    }
    function ih(t, e) {
        if (Ht !== 0 && Ht !== 5)
            return ((t.callbackNode = null), (t.callbackPriority = 0), null)
        var l = t.callbackNode
        if (Cu() && t.callbackNode !== l) return null
        var a = P
        return (
            (a = kn(
                t,
                t === vt ? a : 0,
                t.cancelPendingCommit !== null || t.timeoutHandle !== -1
            )),
            a === 0
                ? null
                : (Qo(t, a, e),
                  uh(t, ie()),
                  t.callbackNode != null && t.callbackNode === l
                      ? ih.bind(null, t)
                      : null)
        )
    }
    function ch(t, e) {
        if (Cu()) return null
        Qo(t, e, !0)
    }
    function c0() {
        b0(function () {
            ;(it & 6) !== 0 ? si(Kf, i0) : nh()
        })
    }
    function Pc() {
        if (Tl === 0) {
            var t = ma
            ;(t === 0 &&
                ((t = qn), (qn <<= 1), (qn & 261888) === 0 && (qn = 256)),
                (Tl = t))
        }
        return Tl
    }
    function fh(t) {
        return t == null || typeof t == 'symbol' || typeof t == 'boolean'
            ? null
            : typeof t == 'function'
              ? t
              : Xn('' + t)
    }
    function sh(t, e) {
        var l = e.ownerDocument.createElement('input')
        return (
            (l.name = e.name),
            (l.value = e.value),
            t.id && l.setAttribute('form', t.id),
            e.parentNode.insertBefore(l, e),
            (t = new FormData(t)),
            l.parentNode.removeChild(l),
            t
        )
    }
    function f0(t, e, l, a, n) {
        if (e === 'submit' && l && l.stateNode === n) {
            var u = fh((n[Pt] || null).action),
                i = a.submitter
            i &&
                ((e = (e = i[Pt] || null)
                    ? fh(e.formAction)
                    : i.getAttribute('formAction')),
                e !== null && ((u = e), (i = null)))
            var s = new Kn('action', 'action', null, a, n)
            t.push({
                event: s,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (a.defaultPrevented) {
                                if (Tl !== 0) {
                                    var d = i ? sh(n, i) : new FormData(n)
                                    bc(
                                        l,
                                        {
                                            pending: !0,
                                            data: d,
                                            method: n.method,
                                            action: u,
                                        },
                                        null,
                                        d
                                    )
                                }
                            } else
                                typeof u == 'function' &&
                                    (s.preventDefault(),
                                    (d = i ? sh(n, i) : new FormData(n)),
                                    bc(
                                        l,
                                        {
                                            pending: !0,
                                            data: d,
                                            method: n.method,
                                            action: u,
                                        },
                                        u,
                                        d
                                    ))
                        },
                        currentTarget: n,
                    },
                ],
            })
        }
    }
    for (var tf = 0; tf < qi.length; tf++) {
        var ef = qi[tf],
            s0 = ef.toLowerCase(),
            r0 = ef[0].toUpperCase() + ef.slice(1)
        Oe(s0, 'on' + r0)
    }
    ;(Oe(ks, 'onAnimationEnd'),
        Oe(Gs, 'onAnimationIteration'),
        Oe(Qs, 'onAnimationStart'),
        Oe('dblclick', 'onDoubleClick'),
        Oe('focusin', 'onFocus'),
        Oe('focusout', 'onBlur'),
        Oe(_m, 'onTransitionRun'),
        Oe(Om, 'onTransitionStart'),
        Oe(Mm, 'onTransitionCancel'),
        Oe(Ls, 'onTransitionEnd'),
        ta('onMouseEnter', ['mouseout', 'mouseover']),
        ta('onMouseLeave', ['mouseout', 'mouseover']),
        ta('onPointerEnter', ['pointerout', 'pointerover']),
        ta('onPointerLeave', ['pointerout', 'pointerover']),
        Ul(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
                ' '
            )
        ),
        Ul(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
                ' '
            )
        ),
        Ul('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
        ]),
        Ul(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
                ' '
            )
        ),
        Ul(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
                ' '
            )
        ),
        Ul(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
                ' '
            )
        ))
    var bn =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' '
            ),
        o0 = new Set(
            'beforetoggle cancel close invalid load scroll scrollend toggle'
                .split(' ')
                .concat(bn)
        )
    function rh(t, e) {
        e = (e & 4) !== 0
        for (var l = 0; l < t.length; l++) {
            var a = t[l],
                n = a.event
            a = a.listeners
            t: {
                var u = void 0
                if (e)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var s = a[i],
                            d = s.instance,
                            T = s.currentTarget
                        if (
                            ((s = s.listener),
                            d !== u && n.isPropagationStopped())
                        )
                            break t
                        ;((u = s), (n.currentTarget = T))
                        try {
                            u(n)
                        } catch (_) {
                            Wn(_)
                        }
                        ;((n.currentTarget = null), (u = d))
                    }
                else
                    for (i = 0; i < a.length; i++) {
                        if (
                            ((s = a[i]),
                            (d = s.instance),
                            (T = s.currentTarget),
                            (s = s.listener),
                            d !== u && n.isPropagationStopped())
                        )
                            break t
                        ;((u = s), (n.currentTarget = T))
                        try {
                            u(n)
                        } catch (_) {
                            Wn(_)
                        }
                        ;((n.currentTarget = null), (u = d))
                    }
            }
        }
    }
    function I(t, e) {
        var l = e[mi]
        l === void 0 && (l = e[mi] = new Set())
        var a = t + '__bubble'
        l.has(a) || (oh(e, t, 2, !1), l.add(a))
    }
    function lf(t, e, l) {
        var a = 0
        ;(e && (a |= 4), oh(l, t, a, e))
    }
    var qu = '_reactListening' + Math.random().toString(36).slice(2)
    function af(t) {
        if (!t[qu]) {
            ;((t[qu] = !0),
                as.forEach(function (l) {
                    l !== 'selectionchange' &&
                        (o0.has(l) || lf(l, !1, t), lf(l, !0, t))
                }))
            var e = t.nodeType === 9 ? t : t.ownerDocument
            e === null || e[qu] || ((e[qu] = !0), lf('selectionchange', !1, e))
        }
    }
    function oh(t, e, l, a) {
        switch (Gh(e)) {
            case 2:
                var n = k0
                break
            case 8:
                n = G0
                break
            default:
                n = bf
        }
        ;((l = n.bind(null, e, l, t)),
            (n = void 0),
            !Ai ||
                (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
                (n = !0),
            a
                ? n !== void 0
                    ? t.addEventListener(e, l, { capture: !0, passive: n })
                    : t.addEventListener(e, l, !0)
                : n !== void 0
                  ? t.addEventListener(e, l, { passive: n })
                  : t.addEventListener(e, l, !1))
    }
    function nf(t, e, l, a, n) {
        var u = a
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
            t: for (;;) {
                if (a === null) return
                var i = a.tag
                if (i === 3 || i === 4) {
                    var s = a.stateNode.containerInfo
                    if (s === n) break
                    if (i === 4)
                        for (i = a.return; i !== null; ) {
                            var d = i.tag
                            if (
                                (d === 3 || d === 4) &&
                                i.stateNode.containerInfo === n
                            )
                                return
                            i = i.return
                        }
                    for (; s !== null; ) {
                        if (((i = Fl(s)), i === null)) return
                        if (
                            ((d = i.tag),
                            d === 5 || d === 6 || d === 26 || d === 27)
                        ) {
                            a = u = i
                            continue t
                        }
                        s = s.parentNode
                    }
                }
                a = a.return
            }
        gs(function () {
            var T = u,
                _ = Ti(l),
                D = []
            t: {
                var z = Xs.get(t)
                if (z !== void 0) {
                    var E = Kn,
                        q = t
                    switch (t) {
                        case 'keypress':
                            if (wn(l) === 0) break t
                        case 'keydown':
                        case 'keyup':
                            E = nm
                            break
                        case 'focusin':
                            ;((q = 'focus'), (E = Oi))
                            break
                        case 'focusout':
                            ;((q = 'blur'), (E = Oi))
                            break
                        case 'beforeblur':
                        case 'afterblur':
                            E = Oi
                            break
                        case 'click':
                            if (l.button === 2) break t
                        case 'auxclick':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mousemove':
                        case 'mouseup':
                        case 'mouseout':
                        case 'mouseover':
                        case 'contextmenu':
                            E = vs
                            break
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            E = Vd
                            break
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            E = cm
                            break
                        case ks:
                        case Gs:
                        case Qs:
                            E = $d
                            break
                        case Ls:
                            E = sm
                            break
                        case 'scroll':
                        case 'scrollend':
                            E = Zd
                            break
                        case 'wheel':
                            E = om
                            break
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            E = Fd
                            break
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            E = Ss
                            break
                        case 'toggle':
                        case 'beforetoggle':
                            E = dm
                    }
                    var G = (e & 4) !== 0,
                        yt = !G && (t === 'scroll' || t === 'scrollend'),
                        v = G ? (z !== null ? z + 'Capture' : null) : z
                    G = []
                    for (var m = T, S; m !== null; ) {
                        var M = m
                        if (
                            ((S = M.stateNode),
                            (M = M.tag),
                            (M !== 5 && M !== 26 && M !== 27) ||
                                S === null ||
                                v === null ||
                                ((M = Ga(m, v)),
                                M != null && G.push(Sn(m, M, S))),
                            yt)
                        )
                            break
                        m = m.return
                    }
                    0 < G.length &&
                        ((z = new E(z, q, null, l, _)),
                        D.push({ event: z, listeners: G }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (
                        ((z = t === 'mouseover' || t === 'pointerover'),
                        (E = t === 'mouseout' || t === 'pointerout'),
                        z &&
                            l !== Si &&
                            (q = l.relatedTarget || l.fromElement) &&
                            (Fl(q) || q[Wl]))
                    )
                        break t
                    if (
                        (E || z) &&
                        ((z =
                            _.window === _
                                ? _
                                : (z = _.ownerDocument)
                                  ? z.defaultView || z.parentWindow
                                  : window),
                        E
                            ? ((q = l.relatedTarget || l.toElement),
                              (E = T),
                              (q = q ? Fl(q) : null),
                              q !== null &&
                                  ((yt = g(q)),
                                  (G = q.tag),
                                  q !== yt ||
                                      (G !== 5 && G !== 27 && G !== 6)) &&
                                  (q = null))
                            : ((E = null), (q = T)),
                        E !== q)
                    ) {
                        if (
                            ((G = vs),
                            (M = 'onMouseLeave'),
                            (v = 'onMouseEnter'),
                            (m = 'mouse'),
                            (t === 'pointerout' || t === 'pointerover') &&
                                ((G = Ss),
                                (M = 'onPointerLeave'),
                                (v = 'onPointerEnter'),
                                (m = 'pointer')),
                            (yt = E == null ? z : ka(E)),
                            (S = q == null ? z : ka(q)),
                            (z = new G(M, m + 'leave', E, l, _)),
                            (z.target = yt),
                            (z.relatedTarget = S),
                            (M = null),
                            Fl(_) === T &&
                                ((G = new G(v, m + 'enter', q, l, _)),
                                (G.target = S),
                                (G.relatedTarget = yt),
                                (M = G)),
                            (yt = M),
                            E && q)
                        )
                            e: {
                                for (
                                    G = h0, v = E, m = q, S = 0, M = v;
                                    M;
                                    M = G(M)
                                )
                                    S++
                                M = 0
                                for (var k = m; k; k = G(k)) M++
                                for (; 0 < S - M; ) ((v = G(v)), S--)
                                for (; 0 < M - S; ) ((m = G(m)), M--)
                                for (; S--; ) {
                                    if (
                                        v === m ||
                                        (m !== null && v === m.alternate)
                                    ) {
                                        G = v
                                        break e
                                    }
                                    ;((v = G(v)), (m = G(m)))
                                }
                                G = null
                            }
                        else G = null
                        ;(E !== null && hh(D, z, E, G, !1),
                            q !== null && yt !== null && hh(D, yt, q, G, !0))
                    }
                }
                t: {
                    if (
                        ((z = T ? ka(T) : window),
                        (E = z.nodeName && z.nodeName.toLowerCase()),
                        E === 'select' || (E === 'input' && z.type === 'file'))
                    )
                        var nt = Ms
                    else if (_s(z))
                        if (Ds) nt = Am
                        else {
                            nt = Tm
                            var Y = Sm
                        }
                    else
                        ((E = z.nodeName),
                            !E ||
                            E.toLowerCase() !== 'input' ||
                            (z.type !== 'checkbox' && z.type !== 'radio')
                                ? T && bi(T.elementType) && (nt = Ms)
                                : (nt = zm))
                    if (nt && (nt = nt(t, T))) {
                        Os(D, nt, l, _)
                        break t
                    }
                    ;(Y && Y(t, z, T),
                        t === 'focusout' &&
                            T &&
                            z.type === 'number' &&
                            T.memoizedProps.value != null &&
                            vi(z, 'number', z.value))
                }
                switch (((Y = T ? ka(T) : window), t)) {
                    case 'focusin':
                        ;(_s(Y) || Y.contentEditable === 'true') &&
                            ((ia = Y), (Ci = T), (Ja = null))
                        break
                    case 'focusout':
                        Ja = Ci = ia = null
                        break
                    case 'mousedown':
                        Hi = !0
                        break
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ;((Hi = !1), js(D, l, _))
                        break
                    case 'selectionchange':
                        if (xm) break
                    case 'keydown':
                    case 'keyup':
                        js(D, l, _)
                }
                var J
                if (Di)
                    t: {
                        switch (t) {
                            case 'compositionstart':
                                var tt = 'onCompositionStart'
                                break t
                            case 'compositionend':
                                tt = 'onCompositionEnd'
                                break t
                            case 'compositionupdate':
                                tt = 'onCompositionUpdate'
                                break t
                        }
                        tt = void 0
                    }
                else
                    ua
                        ? Es(t, l) && (tt = 'onCompositionEnd')
                        : t === 'keydown' &&
                          l.keyCode === 229 &&
                          (tt = 'onCompositionStart')
                ;(tt &&
                    (Ts &&
                        l.locale !== 'ko' &&
                        (ua || tt !== 'onCompositionStart'
                            ? tt === 'onCompositionEnd' && ua && (J = ys())
                            : ((ul = _),
                              (Ei = 'value' in ul ? ul.value : ul.textContent),
                              (ua = !0))),
                    (Y = ju(T, tt)),
                    0 < Y.length &&
                        ((tt = new bs(tt, t, null, l, _)),
                        D.push({ event: tt, listeners: Y }),
                        J
                            ? (tt.data = J)
                            : ((J = xs(l)), J !== null && (tt.data = J)))),
                    (J = gm ? ym(t, l) : pm(t, l)) &&
                        ((tt = ju(T, 'onBeforeInput')),
                        0 < tt.length &&
                            ((Y = new bs(
                                'onBeforeInput',
                                'beforeinput',
                                null,
                                l,
                                _
                            )),
                            D.push({ event: Y, listeners: tt }),
                            (Y.data = J))),
                    f0(D, t, T, l, _))
            }
            rh(D, e)
        })
    }
    function Sn(t, e, l) {
        return { instance: t, listener: e, currentTarget: l }
    }
    function ju(t, e) {
        for (var l = e + 'Capture', a = []; t !== null; ) {
            var n = t,
                u = n.stateNode
            if (
                ((n = n.tag),
                (n !== 5 && n !== 26 && n !== 27) ||
                    u === null ||
                    ((n = Ga(t, l)),
                    n != null && a.unshift(Sn(t, n, u)),
                    (n = Ga(t, e)),
                    n != null && a.push(Sn(t, n, u))),
                t.tag === 3)
            )
                return a
            t = t.return
        }
        return []
    }
    function h0(t) {
        if (t === null) return null
        do t = t.return
        while (t && t.tag !== 5 && t.tag !== 27)
        return t || null
    }
    function hh(t, e, l, a, n) {
        for (var u = e._reactName, i = []; l !== null && l !== a; ) {
            var s = l,
                d = s.alternate,
                T = s.stateNode
            if (((s = s.tag), d !== null && d === a)) break
            ;((s !== 5 && s !== 26 && s !== 27) ||
                T === null ||
                ((d = T),
                n
                    ? ((T = Ga(l, u)), T != null && i.unshift(Sn(l, T, d)))
                    : n || ((T = Ga(l, u)), T != null && i.push(Sn(l, T, d)))),
                (l = l.return))
        }
        i.length !== 0 && t.push({ event: e, listeners: i })
    }
    var d0 = /\r\n?/g,
        m0 = /\u0000|\uFFFD/g
    function dh(t) {
        return (typeof t == 'string' ? t : '' + t)
            .replace(
                d0,
                `
`
            )
            .replace(m0, '')
    }
    function mh(t, e) {
        return ((e = dh(e)), dh(t) === e)
    }
    function gt(t, e, l, a, n, u) {
        switch (l) {
            case 'children':
                typeof a == 'string'
                    ? e === 'body' || (e === 'textarea' && a === '') || la(t, a)
                    : (typeof a == 'number' || typeof a == 'bigint') &&
                      e !== 'body' &&
                      la(t, '' + a)
                break
            case 'className':
                Qn(t, 'class', a)
                break
            case 'tabIndex':
                Qn(t, 'tabindex', a)
                break
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                Qn(t, l, a)
                break
            case 'style':
                ds(t, a, u)
                break
            case 'data':
                if (e !== 'object') {
                    Qn(t, 'data', a)
                    break
                }
            case 'src':
            case 'href':
                if (a === '' && (e !== 'a' || l !== 'href')) {
                    t.removeAttribute(l)
                    break
                }
                if (
                    a == null ||
                    typeof a == 'function' ||
                    typeof a == 'symbol' ||
                    typeof a == 'boolean'
                ) {
                    t.removeAttribute(l)
                    break
                }
                ;((a = Xn('' + a)), t.setAttribute(l, a))
                break
            case 'action':
            case 'formAction':
                if (typeof a == 'function') {
                    t.setAttribute(
                        l,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                    )
                    break
                } else
                    typeof u == 'function' &&
                        (l === 'formAction'
                            ? (e !== 'input' &&
                                  gt(t, e, 'name', n.name, n, null),
                              gt(t, e, 'formEncType', n.formEncType, n, null),
                              gt(t, e, 'formMethod', n.formMethod, n, null),
                              gt(t, e, 'formTarget', n.formTarget, n, null))
                            : (gt(t, e, 'encType', n.encType, n, null),
                              gt(t, e, 'method', n.method, n, null),
                              gt(t, e, 'target', n.target, n, null)))
                if (
                    a == null ||
                    typeof a == 'symbol' ||
                    typeof a == 'boolean'
                ) {
                    t.removeAttribute(l)
                    break
                }
                ;((a = Xn('' + a)), t.setAttribute(l, a))
                break
            case 'onClick':
                a != null && (t.onclick = Ye)
                break
            case 'onScroll':
                a != null && I('scroll', t)
                break
            case 'onScrollEnd':
                a != null && I('scrollend', t)
                break
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a))
                        throw Error(f(61))
                    if (((l = a.__html), l != null)) {
                        if (n.children != null) throw Error(f(60))
                        t.innerHTML = l
                    }
                }
                break
            case 'multiple':
                t.multiple = a && typeof a != 'function' && typeof a != 'symbol'
                break
            case 'muted':
                t.muted = a && typeof a != 'function' && typeof a != 'symbol'
                break
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
                break
            case 'autoFocus':
                break
            case 'xlinkHref':
                if (
                    a == null ||
                    typeof a == 'function' ||
                    typeof a == 'boolean' ||
                    typeof a == 'symbol'
                ) {
                    t.removeAttribute('xlink:href')
                    break
                }
                ;((l = Xn('' + a)),
                    t.setAttributeNS(
                        'http://www.w3.org/1999/xlink',
                        'xlink:href',
                        l
                    ))
                break
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
                a != null && typeof a != 'function' && typeof a != 'symbol'
                    ? t.setAttribute(l, '' + a)
                    : t.removeAttribute(l)
                break
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
                a && typeof a != 'function' && typeof a != 'symbol'
                    ? t.setAttribute(l, '')
                    : t.removeAttribute(l)
                break
            case 'capture':
            case 'download':
                a === !0
                    ? t.setAttribute(l, '')
                    : a !== !1 &&
                        a != null &&
                        typeof a != 'function' &&
                        typeof a != 'symbol'
                      ? t.setAttribute(l, a)
                      : t.removeAttribute(l)
                break
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
                a != null &&
                typeof a != 'function' &&
                typeof a != 'symbol' &&
                !isNaN(a) &&
                1 <= a
                    ? t.setAttribute(l, a)
                    : t.removeAttribute(l)
                break
            case 'rowSpan':
            case 'start':
                a == null ||
                typeof a == 'function' ||
                typeof a == 'symbol' ||
                isNaN(a)
                    ? t.removeAttribute(l)
                    : t.setAttribute(l, a)
                break
            case 'popover':
                ;(I('beforetoggle', t), I('toggle', t), Gn(t, 'popover', a))
                break
            case 'xlinkActuate':
                je(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a)
                break
            case 'xlinkArcrole':
                je(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a)
                break
            case 'xlinkRole':
                je(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a)
                break
            case 'xlinkShow':
                je(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a)
                break
            case 'xlinkTitle':
                je(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a)
                break
            case 'xlinkType':
                je(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a)
                break
            case 'xmlBase':
                je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a)
                break
            case 'xmlLang':
                je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a)
                break
            case 'xmlSpace':
                je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a)
                break
            case 'is':
                Gn(t, 'is', a)
                break
            case 'innerText':
            case 'textContent':
                break
            default:
                ;(!(2 < l.length) ||
                    (l[0] !== 'o' && l[0] !== 'O') ||
                    (l[1] !== 'n' && l[1] !== 'N')) &&
                    ((l = Ld.get(l) || l), Gn(t, l, a))
        }
    }
    function uf(t, e, l, a, n, u) {
        switch (l) {
            case 'style':
                ds(t, a, u)
                break
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a))
                        throw Error(f(61))
                    if (((l = a.__html), l != null)) {
                        if (n.children != null) throw Error(f(60))
                        t.innerHTML = l
                    }
                }
                break
            case 'children':
                typeof a == 'string'
                    ? la(t, a)
                    : (typeof a == 'number' || typeof a == 'bigint') &&
                      la(t, '' + a)
                break
            case 'onScroll':
                a != null && I('scroll', t)
                break
            case 'onScrollEnd':
                a != null && I('scrollend', t)
                break
            case 'onClick':
                a != null && (t.onclick = Ye)
                break
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
                break
            case 'innerText':
            case 'textContent':
                break
            default:
                if (!ns.hasOwnProperty(l))
                    t: {
                        if (
                            l[0] === 'o' &&
                            l[1] === 'n' &&
                            ((n = l.endsWith('Capture')),
                            (e = l.slice(2, n ? l.length - 7 : void 0)),
                            (u = t[Pt] || null),
                            (u = u != null ? u[l] : null),
                            typeof u == 'function' &&
                                t.removeEventListener(e, u, n),
                            typeof a == 'function')
                        ) {
                            ;(typeof u != 'function' &&
                                u !== null &&
                                (l in t
                                    ? (t[l] = null)
                                    : t.hasAttribute(l) &&
                                      t.removeAttribute(l)),
                                t.addEventListener(e, a, n))
                            break t
                        }
                        l in t
                            ? (t[l] = a)
                            : a === !0
                              ? t.setAttribute(l, '')
                              : Gn(t, l, a)
                    }
        }
    }
    function Zt(t, e, l) {
        switch (e) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break
            case 'img':
                ;(I('error', t), I('load', t))
                var a = !1,
                    n = !1,
                    u
                for (u in l)
                    if (l.hasOwnProperty(u)) {
                        var i = l[u]
                        if (i != null)
                            switch (u) {
                                case 'src':
                                    a = !0
                                    break
                                case 'srcSet':
                                    n = !0
                                    break
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(f(137, e))
                                default:
                                    gt(t, e, u, i, l, null)
                            }
                    }
                ;(n && gt(t, e, 'srcSet', l.srcSet, l, null),
                    a && gt(t, e, 'src', l.src, l, null))
                return
            case 'input':
                I('invalid', t)
                var s = (u = i = n = null),
                    d = null,
                    T = null
                for (a in l)
                    if (l.hasOwnProperty(a)) {
                        var _ = l[a]
                        if (_ != null)
                            switch (a) {
                                case 'name':
                                    n = _
                                    break
                                case 'type':
                                    i = _
                                    break
                                case 'checked':
                                    d = _
                                    break
                                case 'defaultChecked':
                                    T = _
                                    break
                                case 'value':
                                    u = _
                                    break
                                case 'defaultValue':
                                    s = _
                                    break
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (_ != null) throw Error(f(137, e))
                                    break
                                default:
                                    gt(t, e, a, _, l, null)
                            }
                    }
                ss(t, u, s, d, T, i, n, !1)
                return
            case 'select':
                ;(I('invalid', t), (a = i = u = null))
                for (n in l)
                    if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
                        switch (n) {
                            case 'value':
                                u = s
                                break
                            case 'defaultValue':
                                i = s
                                break
                            case 'multiple':
                                a = s
                            default:
                                gt(t, e, n, s, l, null)
                        }
                ;((e = u),
                    (l = i),
                    (t.multiple = !!a),
                    e != null
                        ? ea(t, !!a, e, !1)
                        : l != null && ea(t, !!a, l, !0))
                return
            case 'textarea':
                ;(I('invalid', t), (u = n = a = null))
                for (i in l)
                    if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
                        switch (i) {
                            case 'value':
                                a = s
                                break
                            case 'defaultValue':
                                n = s
                                break
                            case 'children':
                                u = s
                                break
                            case 'dangerouslySetInnerHTML':
                                if (s != null) throw Error(f(91))
                                break
                            default:
                                gt(t, e, i, s, l, null)
                        }
                os(t, a, n, u)
                return
            case 'option':
                for (d in l)
                    l.hasOwnProperty(d) &&
                        ((a = l[d]), a != null) &&
                        (d === 'selected'
                            ? (t.selected =
                                  a &&
                                  typeof a != 'function' &&
                                  typeof a != 'symbol')
                            : gt(t, e, d, a, l, null))
                return
            case 'dialog':
                ;(I('beforetoggle', t),
                    I('toggle', t),
                    I('cancel', t),
                    I('close', t))
                break
            case 'iframe':
            case 'object':
                I('load', t)
                break
            case 'video':
            case 'audio':
                for (a = 0; a < bn.length; a++) I(bn[a], t)
                break
            case 'image':
                ;(I('error', t), I('load', t))
                break
            case 'details':
                I('toggle', t)
                break
            case 'embed':
            case 'source':
            case 'link':
                ;(I('error', t), I('load', t))
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (T in l)
                    if (l.hasOwnProperty(T) && ((a = l[T]), a != null))
                        switch (T) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(f(137, e))
                            default:
                                gt(t, e, T, a, l, null)
                        }
                return
            default:
                if (bi(e)) {
                    for (_ in l)
                        l.hasOwnProperty(_) &&
                            ((a = l[_]),
                            a !== void 0 && uf(t, e, _, a, l, void 0))
                    return
                }
        }
        for (s in l)
            l.hasOwnProperty(s) &&
                ((a = l[s]), a != null && gt(t, e, s, a, l, null))
    }
    function g0(t, e, l, a) {
        switch (e) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break
            case 'input':
                var n = null,
                    u = null,
                    i = null,
                    s = null,
                    d = null,
                    T = null,
                    _ = null
                for (E in l) {
                    var D = l[E]
                    if (l.hasOwnProperty(E) && D != null)
                        switch (E) {
                            case 'checked':
                                break
                            case 'value':
                                break
                            case 'defaultValue':
                                d = D
                            default:
                                a.hasOwnProperty(E) || gt(t, e, E, null, a, D)
                        }
                }
                for (var z in a) {
                    var E = a[z]
                    if (
                        ((D = l[z]),
                        a.hasOwnProperty(z) && (E != null || D != null))
                    )
                        switch (z) {
                            case 'type':
                                u = E
                                break
                            case 'name':
                                n = E
                                break
                            case 'checked':
                                T = E
                                break
                            case 'defaultChecked':
                                _ = E
                                break
                            case 'value':
                                i = E
                                break
                            case 'defaultValue':
                                s = E
                                break
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (E != null) throw Error(f(137, e))
                                break
                            default:
                                E !== D && gt(t, e, z, E, a, D)
                        }
                }
                pi(t, i, s, d, T, _, u, n)
                return
            case 'select':
                E = i = s = z = null
                for (u in l)
                    if (((d = l[u]), l.hasOwnProperty(u) && d != null))
                        switch (u) {
                            case 'value':
                                break
                            case 'multiple':
                                E = d
                            default:
                                a.hasOwnProperty(u) || gt(t, e, u, null, a, d)
                        }
                for (n in a)
                    if (
                        ((u = a[n]),
                        (d = l[n]),
                        a.hasOwnProperty(n) && (u != null || d != null))
                    )
                        switch (n) {
                            case 'value':
                                z = u
                                break
                            case 'defaultValue':
                                s = u
                                break
                            case 'multiple':
                                i = u
                            default:
                                u !== d && gt(t, e, n, u, a, d)
                        }
                ;((e = s),
                    (l = i),
                    (a = E),
                    z != null
                        ? ea(t, !!l, z, !1)
                        : !!a != !!l &&
                          (e != null
                              ? ea(t, !!l, e, !0)
                              : ea(t, !!l, l ? [] : '', !1)))
                return
            case 'textarea':
                E = z = null
                for (s in l)
                    if (
                        ((n = l[s]),
                        l.hasOwnProperty(s) &&
                            n != null &&
                            !a.hasOwnProperty(s))
                    )
                        switch (s) {
                            case 'value':
                                break
                            case 'children':
                                break
                            default:
                                gt(t, e, s, null, a, n)
                        }
                for (i in a)
                    if (
                        ((n = a[i]),
                        (u = l[i]),
                        a.hasOwnProperty(i) && (n != null || u != null))
                    )
                        switch (i) {
                            case 'value':
                                z = n
                                break
                            case 'defaultValue':
                                E = n
                                break
                            case 'children':
                                break
                            case 'dangerouslySetInnerHTML':
                                if (n != null) throw Error(f(91))
                                break
                            default:
                                n !== u && gt(t, e, i, n, a, u)
                        }
                rs(t, z, E)
                return
            case 'option':
                for (var q in l)
                    ((z = l[q]),
                        l.hasOwnProperty(q) &&
                            z != null &&
                            !a.hasOwnProperty(q) &&
                            (q === 'selected'
                                ? (t.selected = !1)
                                : gt(t, e, q, null, a, z)))
                for (d in a)
                    ((z = a[d]),
                        (E = l[d]),
                        a.hasOwnProperty(d) &&
                            z !== E &&
                            (z != null || E != null) &&
                            (d === 'selected'
                                ? (t.selected =
                                      z &&
                                      typeof z != 'function' &&
                                      typeof z != 'symbol')
                                : gt(t, e, d, z, a, E)))
                return
            case 'img':
            case 'link':
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'embed':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'source':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (var G in l)
                    ((z = l[G]),
                        l.hasOwnProperty(G) &&
                            z != null &&
                            !a.hasOwnProperty(G) &&
                            gt(t, e, G, null, a, z))
                for (T in a)
                    if (
                        ((z = a[T]),
                        (E = l[T]),
                        a.hasOwnProperty(T) &&
                            z !== E &&
                            (z != null || E != null))
                    )
                        switch (T) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (z != null) throw Error(f(137, e))
                                break
                            default:
                                gt(t, e, T, z, a, E)
                        }
                return
            default:
                if (bi(e)) {
                    for (var yt in l)
                        ((z = l[yt]),
                            l.hasOwnProperty(yt) &&
                                z !== void 0 &&
                                !a.hasOwnProperty(yt) &&
                                uf(t, e, yt, void 0, a, z))
                    for (_ in a)
                        ((z = a[_]),
                            (E = l[_]),
                            !a.hasOwnProperty(_) ||
                                z === E ||
                                (z === void 0 && E === void 0) ||
                                uf(t, e, _, z, a, E))
                    return
                }
        }
        for (var v in l)
            ((z = l[v]),
                l.hasOwnProperty(v) &&
                    z != null &&
                    !a.hasOwnProperty(v) &&
                    gt(t, e, v, null, a, z))
        for (D in a)
            ((z = a[D]),
                (E = l[D]),
                !a.hasOwnProperty(D) ||
                    z === E ||
                    (z == null && E == null) ||
                    gt(t, e, D, z, a, E))
    }
    function gh(t) {
        switch (t) {
            case 'css':
            case 'script':
            case 'font':
            case 'img':
            case 'image':
            case 'input':
            case 'link':
                return !0
            default:
                return !1
        }
    }
    function y0() {
        if (typeof performance.getEntriesByType == 'function') {
            for (
                var t = 0,
                    e = 0,
                    l = performance.getEntriesByType('resource'),
                    a = 0;
                a < l.length;
                a++
            ) {
                var n = l[a],
                    u = n.transferSize,
                    i = n.initiatorType,
                    s = n.duration
                if (u && s && gh(i)) {
                    for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
                        var d = l[a],
                            T = d.startTime
                        if (T > s) break
                        var _ = d.transferSize,
                            D = d.initiatorType
                        _ &&
                            gh(D) &&
                            ((d = d.responseEnd),
                            (i += _ * (d < s ? 1 : (s - T) / (d - T))))
                    }
                    if (
                        (--a,
                        (e += (8 * (u + i)) / (n.duration / 1e3)),
                        t++,
                        10 < t)
                    )
                        break
                }
            }
            if (0 < t) return e / t / 1e6
        }
        return navigator.connection &&
            ((t = navigator.connection.downlink), typeof t == 'number')
            ? t
            : 5
    }
    var cf = null,
        ff = null
    function Yu(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function yh(t) {
        switch (t) {
            case 'http://www.w3.org/2000/svg':
                return 1
            case 'http://www.w3.org/1998/Math/MathML':
                return 2
            default:
                return 0
        }
    }
    function ph(t, e) {
        if (t === 0)
            switch (e) {
                case 'svg':
                    return 1
                case 'math':
                    return 2
                default:
                    return 0
            }
        return t === 1 && e === 'foreignObject' ? 0 : t
    }
    function sf(t, e) {
        return (
            t === 'textarea' ||
            t === 'noscript' ||
            typeof e.children == 'string' ||
            typeof e.children == 'number' ||
            typeof e.children == 'bigint' ||
            (typeof e.dangerouslySetInnerHTML == 'object' &&
                e.dangerouslySetInnerHTML !== null &&
                e.dangerouslySetInnerHTML.__html != null)
        )
    }
    var rf = null
    function p0() {
        var t = window.event
        return t && t.type === 'popstate'
            ? t === rf
                ? !1
                : ((rf = t), !0)
            : ((rf = null), !1)
    }
    var vh = typeof setTimeout == 'function' ? setTimeout : void 0,
        v0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        bh = typeof Promise == 'function' ? Promise : void 0,
        b0 =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof bh < 'u'
                  ? function (t) {
                        return bh.resolve(null).then(t).catch(S0)
                    }
                  : vh
    function S0(t) {
        setTimeout(function () {
            throw t
        })
    }
    function zl(t) {
        return t === 'head'
    }
    function Sh(t, e) {
        var l = e,
            a = 0
        do {
            var n = l.nextSibling
            if ((t.removeChild(l), n && n.nodeType === 8))
                if (((l = n.data), l === '/$' || l === '/&')) {
                    if (a === 0) {
                        ;(t.removeChild(n), Ca(e))
                        return
                    }
                    a--
                } else if (
                    l === '$' ||
                    l === '$?' ||
                    l === '$~' ||
                    l === '$!' ||
                    l === '&'
                )
                    a++
                else if (l === 'html') Tn(t.ownerDocument.documentElement)
                else if (l === 'head') {
                    ;((l = t.ownerDocument.head), Tn(l))
                    for (var u = l.firstChild; u; ) {
                        var i = u.nextSibling,
                            s = u.nodeName
                        ;(u[Ya] ||
                            s === 'SCRIPT' ||
                            s === 'STYLE' ||
                            (s === 'LINK' &&
                                u.rel.toLowerCase() === 'stylesheet') ||
                            l.removeChild(u),
                            (u = i))
                    }
                } else l === 'body' && Tn(t.ownerDocument.body)
            l = n
        } while (l)
        Ca(e)
    }
    function Th(t, e) {
        var l = t
        t = 0
        do {
            var a = l.nextSibling
            if (
                (l.nodeType === 1
                    ? e
                        ? ((l._stashedDisplay = l.style.display),
                          (l.style.display = 'none'))
                        : ((l.style.display = l._stashedDisplay || ''),
                          l.getAttribute('style') === '' &&
                              l.removeAttribute('style'))
                    : l.nodeType === 3 &&
                      (e
                          ? ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
                          : (l.nodeValue = l._stashedText || '')),
                a && a.nodeType === 8)
            )
                if (((l = a.data), l === '/$')) {
                    if (t === 0) break
                    t--
                } else
                    (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || t++
            l = a
        } while (l)
    }
    function of(t) {
        var e = t.firstChild
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var l = e
            switch (((e = e.nextSibling), l.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    ;(of(l), gi(l))
                    continue
                case 'SCRIPT':
                case 'STYLE':
                    continue
                case 'LINK':
                    if (l.rel.toLowerCase() === 'stylesheet') continue
            }
            t.removeChild(l)
        }
    }
    function T0(t, e, l, a) {
        for (; t.nodeType === 1; ) {
            var n = l
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break
            } else if (a) {
                if (!t[Ya])
                    switch (e) {
                        case 'meta':
                            if (!t.hasAttribute('itemprop')) break
                            return t
                        case 'link':
                            if (
                                ((u = t.getAttribute('rel')),
                                u === 'stylesheet' &&
                                    t.hasAttribute('data-precedence'))
                            )
                                break
                            if (
                                u !== n.rel ||
                                t.getAttribute('href') !==
                                    (n.href == null || n.href === ''
                                        ? null
                                        : n.href) ||
                                t.getAttribute('crossorigin') !==
                                    (n.crossOrigin == null
                                        ? null
                                        : n.crossOrigin) ||
                                t.getAttribute('title') !==
                                    (n.title == null ? null : n.title)
                            )
                                break
                            return t
                        case 'style':
                            if (t.hasAttribute('data-precedence')) break
                            return t
                        case 'script':
                            if (
                                ((u = t.getAttribute('src')),
                                (u !== (n.src == null ? null : n.src) ||
                                    t.getAttribute('type') !==
                                        (n.type == null ? null : n.type) ||
                                    t.getAttribute('crossorigin') !==
                                        (n.crossOrigin == null
                                            ? null
                                            : n.crossOrigin)) &&
                                    u &&
                                    t.hasAttribute('async') &&
                                    !t.hasAttribute('itemprop'))
                            )
                                break
                            return t
                        default:
                            return t
                    }
            } else if (e === 'input' && t.type === 'hidden') {
                var u = n.name == null ? null : '' + n.name
                if (n.type === 'hidden' && t.getAttribute('name') === u)
                    return t
            } else return t
            if (((t = Ee(t.nextSibling)), t === null)) break
        }
        return null
    }
    function z0(t, e, l) {
        if (e === '') return null
        for (; t.nodeType !== 3; )
            if (
                ((t.nodeType !== 1 ||
                    t.nodeName !== 'INPUT' ||
                    t.type !== 'hidden') &&
                    !l) ||
                ((t = Ee(t.nextSibling)), t === null)
            )
                return null
        return t
    }
    function zh(t, e) {
        for (; t.nodeType !== 8; )
            if (
                ((t.nodeType !== 1 ||
                    t.nodeName !== 'INPUT' ||
                    t.type !== 'hidden') &&
                    !e) ||
                ((t = Ee(t.nextSibling)), t === null)
            )
                return null
        return t
    }
    function hf(t) {
        return t.data === '$?' || t.data === '$~'
    }
    function df(t) {
        return (
            t.data === '$!' ||
            (t.data === '$?' && t.ownerDocument.readyState !== 'loading')
        )
    }
    function A0(t, e) {
        var l = t.ownerDocument
        if (t.data === '$~') t._reactRetry = e
        else if (t.data !== '$?' || l.readyState !== 'loading') e()
        else {
            var a = function () {
                ;(e(), l.removeEventListener('DOMContentLoaded', a))
            }
            ;(l.addEventListener('DOMContentLoaded', a), (t._reactRetry = a))
        }
    }
    function Ee(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType
            if (e === 1 || e === 3) break
            if (e === 8) {
                if (
                    ((e = t.data),
                    e === '$' ||
                        e === '$!' ||
                        e === '$?' ||
                        e === '$~' ||
                        e === '&' ||
                        e === 'F!' ||
                        e === 'F')
                )
                    break
                if (e === '/$' || e === '/&') return null
            }
        }
        return t
    }
    var mf = null
    function Ah(t) {
        t = t.nextSibling
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data
                if (l === '/$' || l === '/&') {
                    if (e === 0) return Ee(t.nextSibling)
                    e--
                } else
                    (l !== '$' &&
                        l !== '$!' &&
                        l !== '$?' &&
                        l !== '$~' &&
                        l !== '&') ||
                        e++
            }
            t = t.nextSibling
        }
        return null
    }
    function Eh(t) {
        t = t.previousSibling
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data
                if (
                    l === '$' ||
                    l === '$!' ||
                    l === '$?' ||
                    l === '$~' ||
                    l === '&'
                ) {
                    if (e === 0) return t
                    e--
                } else (l !== '/$' && l !== '/&') || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function xh(t, e, l) {
        switch (((e = Yu(l)), t)) {
            case 'html':
                if (((t = e.documentElement), !t)) throw Error(f(452))
                return t
            case 'head':
                if (((t = e.head), !t)) throw Error(f(453))
                return t
            case 'body':
                if (((t = e.body), !t)) throw Error(f(454))
                return t
            default:
                throw Error(f(451))
        }
    }
    function Tn(t) {
        for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0])
        gi(t)
    }
    var xe = new Map(),
        _h = new Set()
    function ku(t) {
        return typeof t.getRootNode == 'function'
            ? t.getRootNode()
            : t.nodeType === 9
              ? t
              : t.ownerDocument
    }
    var tl = C.d
    C.d = { f: E0, r: x0, D: _0, C: O0, L: M0, m: D0, X: U0, S: R0, M: N0 }
    function E0() {
        var t = tl.f(),
            e = Ru()
        return t || e
    }
    function x0(t) {
        var e = Il(t)
        e !== null && e.tag === 5 && e.type === 'form' ? Lr(e) : tl.r(t)
    }
    var Ra = typeof document > 'u' ? null : document
    function Oh(t, e, l) {
        var a = Ra
        if (a && typeof e == 'string' && e) {
            var n = pe(e)
            ;((n = 'link[rel="' + t + '"][href="' + n + '"]'),
                typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
                _h.has(n) ||
                    (_h.add(n),
                    (t = { rel: t, crossOrigin: l, href: e }),
                    a.querySelector(n) === null &&
                        ((e = a.createElement('link')),
                        Zt(e, 'link', t),
                        Bt(e),
                        a.head.appendChild(e))))
        }
    }
    function _0(t) {
        ;(tl.D(t), Oh('dns-prefetch', t, null))
    }
    function O0(t, e) {
        ;(tl.C(t, e), Oh('preconnect', t, e))
    }
    function M0(t, e, l) {
        tl.L(t, e, l)
        var a = Ra
        if (a && t && e) {
            var n = 'link[rel="preload"][as="' + pe(e) + '"]'
            e === 'image' && l && l.imageSrcSet
                ? ((n += '[imagesrcset="' + pe(l.imageSrcSet) + '"]'),
                  typeof l.imageSizes == 'string' &&
                      (n += '[imagesizes="' + pe(l.imageSizes) + '"]'))
                : (n += '[href="' + pe(t) + '"]')
            var u = n
            switch (e) {
                case 'style':
                    u = Ua(t)
                    break
                case 'script':
                    u = Na(t)
            }
            xe.has(u) ||
                ((t = N(
                    {
                        rel: 'preload',
                        href: e === 'image' && l && l.imageSrcSet ? void 0 : t,
                        as: e,
                    },
                    l
                )),
                xe.set(u, t),
                a.querySelector(n) !== null ||
                    (e === 'style' && a.querySelector(zn(u))) ||
                    (e === 'script' && a.querySelector(An(u))) ||
                    ((e = a.createElement('link')),
                    Zt(e, 'link', t),
                    Bt(e),
                    a.head.appendChild(e)))
        }
    }
    function D0(t, e) {
        tl.m(t, e)
        var l = Ra
        if (l && t) {
            var a = e && typeof e.as == 'string' ? e.as : 'script',
                n =
                    'link[rel="modulepreload"][as="' +
                    pe(a) +
                    '"][href="' +
                    pe(t) +
                    '"]',
                u = n
            switch (a) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    u = Na(t)
            }
            if (
                !xe.has(u) &&
                ((t = N({ rel: 'modulepreload', href: t }, e)),
                xe.set(u, t),
                l.querySelector(n) === null)
            ) {
                switch (a) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (l.querySelector(An(u))) return
                }
                ;((a = l.createElement('link')),
                    Zt(a, 'link', t),
                    Bt(a),
                    l.head.appendChild(a))
            }
        }
    }
    function R0(t, e, l) {
        tl.S(t, e, l)
        var a = Ra
        if (a && t) {
            var n = Pl(a).hoistableStyles,
                u = Ua(t)
            e = e || 'default'
            var i = n.get(u)
            if (!i) {
                var s = { loading: 0, preload: null }
                if ((i = a.querySelector(zn(u)))) s.loading = 5
                else {
                    ;((t = N(
                        { rel: 'stylesheet', href: t, 'data-precedence': e },
                        l
                    )),
                        (l = xe.get(u)) && gf(t, l))
                    var d = (i = a.createElement('link'))
                    ;(Bt(d),
                        Zt(d, 'link', t),
                        (d._p = new Promise(function (T, _) {
                            ;((d.onload = T), (d.onerror = _))
                        })),
                        d.addEventListener('load', function () {
                            s.loading |= 1
                        }),
                        d.addEventListener('error', function () {
                            s.loading |= 2
                        }),
                        (s.loading |= 4),
                        Gu(i, e, a))
                }
                ;((i = { type: 'stylesheet', instance: i, count: 1, state: s }),
                    n.set(u, i))
            }
        }
    }
    function U0(t, e) {
        tl.X(t, e)
        var l = Ra
        if (l && t) {
            var a = Pl(l).hoistableScripts,
                n = Na(t),
                u = a.get(n)
            u ||
                ((u = l.querySelector(An(n))),
                u ||
                    ((t = N({ src: t, async: !0 }, e)),
                    (e = xe.get(n)) && yf(t, e),
                    (u = l.createElement('script')),
                    Bt(u),
                    Zt(u, 'link', t),
                    l.head.appendChild(u)),
                (u = { type: 'script', instance: u, count: 1, state: null }),
                a.set(n, u))
        }
    }
    function N0(t, e) {
        tl.M(t, e)
        var l = Ra
        if (l && t) {
            var a = Pl(l).hoistableScripts,
                n = Na(t),
                u = a.get(n)
            u ||
                ((u = l.querySelector(An(n))),
                u ||
                    ((t = N({ src: t, async: !0, type: 'module' }, e)),
                    (e = xe.get(n)) && yf(t, e),
                    (u = l.createElement('script')),
                    Bt(u),
                    Zt(u, 'link', t),
                    l.head.appendChild(u)),
                (u = { type: 'script', instance: u, count: 1, state: null }),
                a.set(n, u))
        }
    }
    function Mh(t, e, l, a) {
        var n = (n = W.current) ? ku(n) : null
        if (!n) throw Error(f(446))
        switch (t) {
            case 'meta':
            case 'title':
                return null
            case 'style':
                return typeof l.precedence == 'string' &&
                    typeof l.href == 'string'
                    ? ((e = Ua(l.href)),
                      (l = Pl(n).hoistableStyles),
                      (a = l.get(e)),
                      a ||
                          ((a = {
                              type: 'style',
                              instance: null,
                              count: 0,
                              state: null,
                          }),
                          l.set(e, a)),
                      a)
                    : { type: 'void', instance: null, count: 0, state: null }
            case 'link':
                if (
                    l.rel === 'stylesheet' &&
                    typeof l.href == 'string' &&
                    typeof l.precedence == 'string'
                ) {
                    t = Ua(l.href)
                    var u = Pl(n).hoistableStyles,
                        i = u.get(t)
                    if (
                        (i ||
                            ((n = n.ownerDocument || n),
                            (i = {
                                type: 'stylesheet',
                                instance: null,
                                count: 0,
                                state: { loading: 0, preload: null },
                            }),
                            u.set(t, i),
                            (u = n.querySelector(zn(t))) &&
                                !u._p &&
                                ((i.instance = u), (i.state.loading = 5)),
                            xe.has(t) ||
                                ((l = {
                                    rel: 'preload',
                                    as: 'style',
                                    href: l.href,
                                    crossOrigin: l.crossOrigin,
                                    integrity: l.integrity,
                                    media: l.media,
                                    hrefLang: l.hrefLang,
                                    referrerPolicy: l.referrerPolicy,
                                }),
                                xe.set(t, l),
                                u || C0(n, t, l, i.state))),
                        e && a === null)
                    )
                        throw Error(f(528, ''))
                    return i
                }
                if (e && a !== null) throw Error(f(529, ''))
                return null
            case 'script':
                return (
                    (e = l.async),
                    (l = l.src),
                    typeof l == 'string' &&
                    e &&
                    typeof e != 'function' &&
                    typeof e != 'symbol'
                        ? ((e = Na(l)),
                          (l = Pl(n).hoistableScripts),
                          (a = l.get(e)),
                          a ||
                              ((a = {
                                  type: 'script',
                                  instance: null,
                                  count: 0,
                                  state: null,
                              }),
                              l.set(e, a)),
                          a)
                        : {
                              type: 'void',
                              instance: null,
                              count: 0,
                              state: null,
                          }
                )
            default:
                throw Error(f(444, t))
        }
    }
    function Ua(t) {
        return 'href="' + pe(t) + '"'
    }
    function zn(t) {
        return 'link[rel="stylesheet"][' + t + ']'
    }
    function Dh(t) {
        return N({}, t, { 'data-precedence': t.precedence, precedence: null })
    }
    function C0(t, e, l, a) {
        t.querySelector('link[rel="preload"][as="style"][' + e + ']')
            ? (a.loading = 1)
            : ((e = t.createElement('link')),
              (a.preload = e),
              e.addEventListener('load', function () {
                  return (a.loading |= 1)
              }),
              e.addEventListener('error', function () {
                  return (a.loading |= 2)
              }),
              Zt(e, 'link', l),
              Bt(e),
              t.head.appendChild(e))
    }
    function Na(t) {
        return '[src="' + pe(t) + '"]'
    }
    function An(t) {
        return 'script[async]' + t
    }
    function Rh(t, e, l) {
        if ((e.count++, e.instance === null))
            switch (e.type) {
                case 'style':
                    var a = t.querySelector(
                        'style[data-href~="' + pe(l.href) + '"]'
                    )
                    if (a) return ((e.instance = a), Bt(a), a)
                    var n = N({}, l, {
                        'data-href': l.href,
                        'data-precedence': l.precedence,
                        href: null,
                        precedence: null,
                    })
                    return (
                        (a = (t.ownerDocument || t).createElement('style')),
                        Bt(a),
                        Zt(a, 'style', n),
                        Gu(a, l.precedence, t),
                        (e.instance = a)
                    )
                case 'stylesheet':
                    n = Ua(l.href)
                    var u = t.querySelector(zn(n))
                    if (u)
                        return (
                            (e.state.loading |= 4),
                            (e.instance = u),
                            Bt(u),
                            u
                        )
                    ;((a = Dh(l)),
                        (n = xe.get(n)) && gf(a, n),
                        (u = (t.ownerDocument || t).createElement('link')),
                        Bt(u))
                    var i = u
                    return (
                        (i._p = new Promise(function (s, d) {
                            ;((i.onload = s), (i.onerror = d))
                        })),
                        Zt(u, 'link', a),
                        (e.state.loading |= 4),
                        Gu(u, l.precedence, t),
                        (e.instance = u)
                    )
                case 'script':
                    return (
                        (u = Na(l.src)),
                        (n = t.querySelector(An(u)))
                            ? ((e.instance = n), Bt(n), n)
                            : ((a = l),
                              (n = xe.get(u)) && ((a = N({}, l)), yf(a, n)),
                              (t = t.ownerDocument || t),
                              (n = t.createElement('script')),
                              Bt(n),
                              Zt(n, 'link', a),
                              t.head.appendChild(n),
                              (e.instance = n))
                    )
                case 'void':
                    return null
                default:
                    throw Error(f(443, e.type))
            }
        else
            e.type === 'stylesheet' &&
                (e.state.loading & 4) === 0 &&
                ((a = e.instance),
                (e.state.loading |= 4),
                Gu(a, l.precedence, t))
        return e.instance
    }
    function Gu(t, e, l) {
        for (
            var a = l.querySelectorAll(
                    'link[rel="stylesheet"][data-precedence],style[data-precedence]'
                ),
                n = a.length ? a[a.length - 1] : null,
                u = n,
                i = 0;
            i < a.length;
            i++
        ) {
            var s = a[i]
            if (s.dataset.precedence === e) u = s
            else if (u !== n) break
        }
        u
            ? u.parentNode.insertBefore(t, u.nextSibling)
            : ((e = l.nodeType === 9 ? l.head : l),
              e.insertBefore(t, e.firstChild))
    }
    function gf(t, e) {
        ;(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.title == null && (t.title = e.title))
    }
    function yf(t, e) {
        ;(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.integrity == null && (t.integrity = e.integrity))
    }
    var Qu = null
    function Uh(t, e, l) {
        if (Qu === null) {
            var a = new Map(),
                n = (Qu = new Map())
            n.set(l, a)
        } else ((n = Qu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)))
        if (a.has(t)) return a
        for (
            a.set(t, null), l = l.getElementsByTagName(t), n = 0;
            n < l.length;
            n++
        ) {
            var u = l[n]
            if (
                !(
                    u[Ya] ||
                    u[Gt] ||
                    (t === 'link' && u.getAttribute('rel') === 'stylesheet')
                ) &&
                u.namespaceURI !== 'http://www.w3.org/2000/svg'
            ) {
                var i = u.getAttribute(e) || ''
                i = t + i
                var s = a.get(i)
                s ? s.push(u) : a.set(i, [u])
            }
        }
        return a
    }
    function Nh(t, e, l) {
        ;((t = t.ownerDocument || t),
            t.head.insertBefore(
                l,
                e === 'title' ? t.querySelector('head > title') : null
            ))
    }
    function H0(t, e, l) {
        if (l === 1 || e.itemProp != null) return !1
        switch (t) {
            case 'meta':
            case 'title':
                return !0
            case 'style':
                if (
                    typeof e.precedence != 'string' ||
                    typeof e.href != 'string' ||
                    e.href === ''
                )
                    break
                return !0
            case 'link':
                if (
                    typeof e.rel != 'string' ||
                    typeof e.href != 'string' ||
                    e.href === '' ||
                    e.onLoad ||
                    e.onError
                )
                    break
                return e.rel === 'stylesheet'
                    ? ((t = e.disabled),
                      typeof e.precedence == 'string' && t == null)
                    : !0
            case 'script':
                if (
                    e.async &&
                    typeof e.async != 'function' &&
                    typeof e.async != 'symbol' &&
                    !e.onLoad &&
                    !e.onError &&
                    e.src &&
                    typeof e.src == 'string'
                )
                    return !0
        }
        return !1
    }
    function Ch(t) {
        return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0)
    }
    function B0(t, e, l, a) {
        if (
            l.type === 'stylesheet' &&
            (typeof a.media != 'string' ||
                matchMedia(a.media).matches !== !1) &&
            (l.state.loading & 4) === 0
        ) {
            if (l.instance === null) {
                var n = Ua(a.href),
                    u = e.querySelector(zn(n))
                if (u) {
                    ;((e = u._p),
                        e !== null &&
                            typeof e == 'object' &&
                            typeof e.then == 'function' &&
                            (t.count++, (t = Lu.bind(t)), e.then(t, t)),
                        (l.state.loading |= 4),
                        (l.instance = u),
                        Bt(u))
                    return
                }
                ;((u = e.ownerDocument || e),
                    (a = Dh(a)),
                    (n = xe.get(n)) && gf(a, n),
                    (u = u.createElement('link')),
                    Bt(u))
                var i = u
                ;((i._p = new Promise(function (s, d) {
                    ;((i.onload = s), (i.onerror = d))
                })),
                    Zt(u, 'link', a),
                    (l.instance = u))
            }
            ;(t.stylesheets === null && (t.stylesheets = new Map()),
                t.stylesheets.set(l, e),
                (e = l.state.preload) &&
                    (l.state.loading & 3) === 0 &&
                    (t.count++,
                    (l = Lu.bind(t)),
                    e.addEventListener('load', l),
                    e.addEventListener('error', l)))
        }
    }
    var pf = 0
    function q0(t, e) {
        return (
            t.stylesheets && t.count === 0 && Zu(t, t.stylesheets),
            0 < t.count || 0 < t.imgCount
                ? function (l) {
                      var a = setTimeout(function () {
                          if (
                              (t.stylesheets && Zu(t, t.stylesheets),
                              t.unsuspend)
                          ) {
                              var u = t.unsuspend
                              ;((t.unsuspend = null), u())
                          }
                      }, 6e4 + e)
                      0 < t.imgBytes && pf === 0 && (pf = 62500 * y0())
                      var n = setTimeout(
                          function () {
                              if (
                                  ((t.waitingForImages = !1),
                                  t.count === 0 &&
                                      (t.stylesheets && Zu(t, t.stylesheets),
                                      t.unsuspend))
                              ) {
                                  var u = t.unsuspend
                                  ;((t.unsuspend = null), u())
                              }
                          },
                          (t.imgBytes > pf ? 50 : 800) + e
                      )
                      return (
                          (t.unsuspend = l),
                          function () {
                              ;((t.unsuspend = null),
                                  clearTimeout(a),
                                  clearTimeout(n))
                          }
                      )
                  }
                : null
        )
    }
    function Lu() {
        if (
            (this.count--,
            this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
        ) {
            if (this.stylesheets) Zu(this, this.stylesheets)
            else if (this.unsuspend) {
                var t = this.unsuspend
                ;((this.unsuspend = null), t())
            }
        }
    }
    var Xu = null
    function Zu(t, e) {
        ;((t.stylesheets = null),
            t.unsuspend !== null &&
                (t.count++,
                (Xu = new Map()),
                e.forEach(j0, t),
                (Xu = null),
                Lu.call(t)))
    }
    function j0(t, e) {
        if (!(e.state.loading & 4)) {
            var l = Xu.get(t)
            if (l) var a = l.get(null)
            else {
                ;((l = new Map()), Xu.set(t, l))
                for (
                    var n = t.querySelectorAll(
                            'link[data-precedence],style[data-precedence]'
                        ),
                        u = 0;
                    u < n.length;
                    u++
                ) {
                    var i = n[u]
                    ;(i.nodeName === 'LINK' ||
                        i.getAttribute('media') !== 'not all') &&
                        (l.set(i.dataset.precedence, i), (a = i))
                }
                a && l.set(null, a)
            }
            ;((n = e.instance),
                (i = n.getAttribute('data-precedence')),
                (u = l.get(i) || a),
                u === a && l.set(null, n),
                l.set(i, n),
                this.count++,
                (a = Lu.bind(this)),
                n.addEventListener('load', a),
                n.addEventListener('error', a),
                u
                    ? u.parentNode.insertBefore(n, u.nextSibling)
                    : ((t = t.nodeType === 9 ? t.head : t),
                      t.insertBefore(n, t.firstChild)),
                (e.state.loading |= 4))
        }
    }
    var En = {
        $$typeof: zt,
        Provider: null,
        Consumer: null,
        _currentValue: L,
        _currentValue2: L,
        _threadCount: 0,
    }
    function Y0(t, e, l, a, n, u, i, s, d) {
        ;((this.tag = 1),
            (this.containerInfo = t),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
                this.next =
                this.pendingContext =
                this.context =
                this.cancelPendingCommit =
                    null),
            (this.callbackPriority = 0),
            (this.expirationTimes = oi(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = oi(0)),
            (this.hiddenUpdates = oi(null)),
            (this.identifierPrefix = a),
            (this.onUncaughtError = n),
            (this.onCaughtError = u),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = d),
            (this.incompleteTransitions = new Map()))
    }
    function Hh(t, e, l, a, n, u, i, s, d, T, _, D) {
        return (
            (t = new Y0(t, e, l, i, d, T, _, D, s)),
            (e = 1),
            u === !0 && (e |= 24),
            (u = re(3, null, null, e)),
            (t.current = u),
            (u.stateNode = t),
            (e = $i()),
            e.refCount++,
            (t.pooledCache = e),
            e.refCount++,
            (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
            Pi(u),
            t
        )
    }
    function Bh(t) {
        return t ? ((t = sa), t) : sa
    }
    function qh(t, e, l, a, n, u) {
        ;((n = Bh(n)),
            a.context === null ? (a.context = n) : (a.pendingContext = n),
            (a = ol(e)),
            (a.payload = { element: l }),
            (u = u === void 0 ? null : u),
            u !== null && (a.callback = u),
            (l = hl(t, a, e)),
            l !== null && (ue(l, t, e), en(l, t, e)))
    }
    function jh(t, e) {
        if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
            var l = t.retryLane
            t.retryLane = l !== 0 && l < e ? l : e
        }
    }
    function vf(t, e) {
        ;(jh(t, e), (t = t.alternate) && jh(t, e))
    }
    function Yh(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Bl(t, 67108864)
            ;(e !== null && ue(e, t, 67108864), vf(t, 67108864))
        }
    }
    function kh(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ge()
            e = hi(e)
            var l = Bl(t, e)
            ;(l !== null && ue(l, t, e), vf(t, e))
        }
    }
    var wu = !0
    function k0(t, e, l, a) {
        var n = O.T
        O.T = null
        var u = C.p
        try {
            ;((C.p = 2), bf(t, e, l, a))
        } finally {
            ;((C.p = u), (O.T = n))
        }
    }
    function G0(t, e, l, a) {
        var n = O.T
        O.T = null
        var u = C.p
        try {
            ;((C.p = 8), bf(t, e, l, a))
        } finally {
            ;((C.p = u), (O.T = n))
        }
    }
    function bf(t, e, l, a) {
        if (wu) {
            var n = Sf(a)
            if (n === null) (nf(t, e, a, Vu, l), Qh(t, a))
            else if (L0(n, t, e, l, a)) a.stopPropagation()
            else if ((Qh(t, a), e & 4 && -1 < Q0.indexOf(t))) {
                for (; n !== null; ) {
                    var u = Il(n)
                    if (u !== null)
                        switch (u.tag) {
                            case 3:
                                if (
                                    ((u = u.stateNode),
                                    u.current.memoizedState.isDehydrated)
                                ) {
                                    var i = Rl(u.pendingLanes)
                                    if (i !== 0) {
                                        var s = u
                                        for (
                                            s.pendingLanes |= 2,
                                                s.entangledLanes |= 2;
                                            i;
                                        ) {
                                            var d = 1 << (31 - fe(i))
                                            ;((s.entanglements[1] |= d),
                                                (i &= ~d))
                                        }
                                        ;(Ce(u),
                                            (it & 6) === 0 &&
                                                ((Mu = ie() + 500), vn(0)))
                                    }
                                }
                                break
                            case 31:
                            case 13:
                                ;((s = Bl(u, 2)),
                                    s !== null && ue(s, u, 2),
                                    Ru(),
                                    vf(u, 2))
                        }
                    if (
                        ((u = Sf(a)), u === null && nf(t, e, a, Vu, l), u === n)
                    )
                        break
                    n = u
                }
                n !== null && a.stopPropagation()
            } else nf(t, e, a, null, l)
        }
    }
    function Sf(t) {
        return ((t = Ti(t)), Tf(t))
    }
    var Vu = null
    function Tf(t) {
        if (((Vu = null), (t = Fl(t)), t !== null)) {
            var e = g(t)
            if (e === null) t = null
            else {
                var l = e.tag
                if (l === 13) {
                    if (((t = b(e)), t !== null)) return t
                    t = null
                } else if (l === 31) {
                    if (((t = A(e)), t !== null)) return t
                    t = null
                } else if (l === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null
                    t = null
                } else e !== t && (t = null)
            }
        }
        return ((Vu = t), null)
    }
    function Gh(t) {
        switch (t) {
            case 'beforetoggle':
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'toggle':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
                return 2
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
                return 8
            case 'message':
                switch (_d()) {
                    case Kf:
                        return 2
                    case Jf:
                        return 8
                    case Bn:
                    case Od:
                        return 32
                    case $f:
                        return 268435456
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var zf = !1,
        Al = null,
        El = null,
        xl = null,
        xn = new Map(),
        _n = new Map(),
        _l = [],
        Q0 =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' '
            )
    function Qh(t, e) {
        switch (t) {
            case 'focusin':
            case 'focusout':
                Al = null
                break
            case 'dragenter':
            case 'dragleave':
                El = null
                break
            case 'mouseover':
            case 'mouseout':
                xl = null
                break
            case 'pointerover':
            case 'pointerout':
                xn.delete(e.pointerId)
                break
            case 'gotpointercapture':
            case 'lostpointercapture':
                _n.delete(e.pointerId)
        }
    }
    function On(t, e, l, a, n, u) {
        return t === null || t.nativeEvent !== u
            ? ((t = {
                  blockedOn: e,
                  domEventName: l,
                  eventSystemFlags: a,
                  nativeEvent: u,
                  targetContainers: [n],
              }),
              e !== null && ((e = Il(e)), e !== null && Yh(e)),
              t)
            : ((t.eventSystemFlags |= a),
              (e = t.targetContainers),
              n !== null && e.indexOf(n) === -1 && e.push(n),
              t)
    }
    function L0(t, e, l, a, n) {
        switch (e) {
            case 'focusin':
                return ((Al = On(Al, t, e, l, a, n)), !0)
            case 'dragenter':
                return ((El = On(El, t, e, l, a, n)), !0)
            case 'mouseover':
                return ((xl = On(xl, t, e, l, a, n)), !0)
            case 'pointerover':
                var u = n.pointerId
                return (xn.set(u, On(xn.get(u) || null, t, e, l, a, n)), !0)
            case 'gotpointercapture':
                return (
                    (u = n.pointerId),
                    _n.set(u, On(_n.get(u) || null, t, e, l, a, n)),
                    !0
                )
        }
        return !1
    }
    function Lh(t) {
        var e = Fl(t.target)
        if (e !== null) {
            var l = g(e)
            if (l !== null) {
                if (((e = l.tag), e === 13)) {
                    if (((e = b(l)), e !== null)) {
                        ;((t.blockedOn = e),
                            es(t.priority, function () {
                                kh(l)
                            }))
                        return
                    }
                } else if (e === 31) {
                    if (((e = A(l)), e !== null)) {
                        ;((t.blockedOn = e),
                            es(t.priority, function () {
                                kh(l)
                            }))
                        return
                    }
                } else if (
                    e === 3 &&
                    l.stateNode.current.memoizedState.isDehydrated
                ) {
                    t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Ku(t) {
        if (t.blockedOn !== null) return !1
        for (var e = t.targetContainers; 0 < e.length; ) {
            var l = Sf(t.nativeEvent)
            if (l === null) {
                l = t.nativeEvent
                var a = new l.constructor(l.type, l)
                ;((Si = a), l.target.dispatchEvent(a), (Si = null))
            } else
                return ((e = Il(l)), e !== null && Yh(e), (t.blockedOn = l), !1)
            e.shift()
        }
        return !0
    }
    function Xh(t, e, l) {
        Ku(t) && l.delete(e)
    }
    function X0() {
        ;((zf = !1),
            Al !== null && Ku(Al) && (Al = null),
            El !== null && Ku(El) && (El = null),
            xl !== null && Ku(xl) && (xl = null),
            xn.forEach(Xh),
            _n.forEach(Xh))
    }
    function Ju(t, e) {
        t.blockedOn === e &&
            ((t.blockedOn = null),
            zf ||
                ((zf = !0),
                r.unstable_scheduleCallback(r.unstable_NormalPriority, X0)))
    }
    var $u = null
    function Zh(t) {
        $u !== t &&
            (($u = t),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
                $u === t && ($u = null)
                for (var e = 0; e < t.length; e += 3) {
                    var l = t[e],
                        a = t[e + 1],
                        n = t[e + 2]
                    if (typeof a != 'function') {
                        if (Tf(a || l) === null) continue
                        break
                    }
                    var u = Il(l)
                    u !== null &&
                        (t.splice(e, 3),
                        (e -= 3),
                        bc(
                            u,
                            {
                                pending: !0,
                                data: n,
                                method: l.method,
                                action: a,
                            },
                            a,
                            n
                        ))
                }
            }))
    }
    function Ca(t) {
        function e(d) {
            return Ju(d, t)
        }
        ;(Al !== null && Ju(Al, t),
            El !== null && Ju(El, t),
            xl !== null && Ju(xl, t),
            xn.forEach(e),
            _n.forEach(e))
        for (var l = 0; l < _l.length; l++) {
            var a = _l[l]
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < _l.length && ((l = _l[0]), l.blockedOn === null); )
            (Lh(l), l.blockedOn === null && _l.shift())
        if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
            for (a = 0; a < l.length; a += 3) {
                var n = l[a],
                    u = l[a + 1],
                    i = n[Pt] || null
                if (typeof u == 'function') i || Zh(l)
                else if (i) {
                    var s = null
                    if (u && u.hasAttribute('formAction')) {
                        if (((n = u), (i = u[Pt] || null))) s = i.formAction
                        else if (Tf(n) !== null) continue
                    } else s = i.action
                    ;(typeof s == 'function'
                        ? (l[a + 1] = s)
                        : (l.splice(a, 3), (a -= 3)),
                        Zh(l))
                }
            }
    }
    function wh() {
        function t(u) {
            u.canIntercept &&
                u.info === 'react-transition' &&
                u.intercept({
                    handler: function () {
                        return new Promise(function (i) {
                            return (n = i)
                        })
                    },
                    focusReset: 'manual',
                    scroll: 'manual',
                })
        }
        function e() {
            ;(n !== null && (n(), (n = null)), a || setTimeout(l, 20))
        }
        function l() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry
                u &&
                    u.url != null &&
                    navigation.navigate(u.url, {
                        state: u.getState(),
                        info: 'react-transition',
                        history: 'replace',
                    })
            }
        }
        if (typeof navigation == 'object') {
            var a = !1,
                n = null
            return (
                navigation.addEventListener('navigate', t),
                navigation.addEventListener('navigatesuccess', e),
                navigation.addEventListener('navigateerror', e),
                setTimeout(l, 100),
                function () {
                    ;((a = !0),
                        navigation.removeEventListener('navigate', t),
                        navigation.removeEventListener('navigatesuccess', e),
                        navigation.removeEventListener('navigateerror', e),
                        n !== null && (n(), (n = null)))
                }
            )
        }
    }
    function Af(t) {
        this._internalRoot = t
    }
    ;((Wu.prototype.render = Af.prototype.render =
        function (t) {
            var e = this._internalRoot
            if (e === null) throw Error(f(409))
            var l = e.current,
                a = ge()
            qh(l, a, t, e, null, null)
        }),
        (Wu.prototype.unmount = Af.prototype.unmount =
            function () {
                var t = this._internalRoot
                if (t !== null) {
                    this._internalRoot = null
                    var e = t.containerInfo
                    ;(qh(t.current, 2, null, t, null, null),
                        Ru(),
                        (e[Wl] = null))
                }
            }))
    function Wu(t) {
        this._internalRoot = t
    }
    Wu.prototype.unstable_scheduleHydration = function (t) {
        if (t) {
            var e = ts()
            t = { blockedOn: null, target: t, priority: e }
            for (
                var l = 0;
                l < _l.length && e !== 0 && e < _l[l].priority;
                l++
            );
            ;(_l.splice(l, 0, t), l === 0 && Lh(t))
        }
    }
    var Vh = c.version
    if (Vh !== '19.2.3') throw Error(f(527, Vh, '19.2.3'))
    C.findDOMNode = function (t) {
        var e = t._reactInternals
        if (e === void 0)
            throw typeof t.render == 'function'
                ? Error(f(188))
                : ((t = Object.keys(t).join(',')), Error(f(268, t)))
        return (
            (t = p(e)),
            (t = t !== null ? U(t) : null),
            (t = t === null ? null : t.stateNode),
            t
        )
    }
    var Z0 = {
        bundleType: 0,
        version: '19.2.3',
        rendererPackageName: 'react-dom',
        currentDispatcherRef: O,
        reconcilerVersion: '19.2.3',
    }
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var Fu = __REACT_DEVTOOLS_GLOBAL_HOOK__
        if (!Fu.isDisabled && Fu.supportsFiber)
            try {
                ;((Ba = Fu.inject(Z0)), (ce = Fu))
            } catch {}
    }
    return (
        (Dn.createRoot = function (t, e) {
            if (!h(t)) throw Error(f(299))
            var l = !1,
                a = '',
                n = Ir,
                u = Pr,
                i = to
            return (
                e != null &&
                    (e.unstable_strictMode === !0 && (l = !0),
                    e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
                    e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
                    e.onCaughtError !== void 0 && (u = e.onCaughtError),
                    e.onRecoverableError !== void 0 &&
                        (i = e.onRecoverableError)),
                (e = Hh(t, 1, !1, null, null, l, a, null, n, u, i, wh)),
                (t[Wl] = e.current),
                af(t),
                new Af(e)
            )
        }),
        (Dn.hydrateRoot = function (t, e, l) {
            if (!h(t)) throw Error(f(299))
            var a = !1,
                n = '',
                u = Ir,
                i = Pr,
                s = to,
                d = null
            return (
                l != null &&
                    (l.unstable_strictMode === !0 && (a = !0),
                    l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
                    l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
                    l.onCaughtError !== void 0 && (i = l.onCaughtError),
                    l.onRecoverableError !== void 0 &&
                        (s = l.onRecoverableError),
                    l.formState !== void 0 && (d = l.formState)),
                (e = Hh(t, 1, !0, e, l ?? null, a, n, d, u, i, s, wh)),
                (e.context = Bh(null)),
                (l = e.current),
                (a = ge()),
                (a = hi(a)),
                (n = ol(a)),
                (n.callback = null),
                hl(l, n, a),
                (l = a),
                (e.current.lanes = l),
                ja(e, l),
                Ce(e),
                (t[Wl] = e.current),
                af(t),
                new Wu(e)
            )
        }),
        (Dn.version = '19.2.3'),
        Dn
    )
}
var ld
function tg() {
    if (ld) return _f.exports
    ld = 1
    function r() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (c) {
                console.error(c)
            }
    }
    return (r(), (_f.exports = P0()), _f.exports)
}
var eg = tg()
const ad = (r, c = 50, o = 0) => {
    const [f, h] = bt.useState(''),
        [g, b] = bt.useState(!1),
        [A, x] = bt.useState(!1)
    return (
        bt.useEffect(() => {
            let p
            const U = () => {
                b(!0)
                let N = 0
                const H = () => {
                    N < r.length
                        ? (h(r.slice(0, N + 1)), N++, (p = setTimeout(H, c)))
                        : (b(!1), x(!0))
                }
                p = setTimeout(H, c)
            }
            return (o > 0 ? (p = setTimeout(U, o)) : U(), () => clearTimeout(p))
        }, [r, c, o]),
        { displayText: f, isTyping: g, isComplete: A }
    )
}
function qf() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
    }
}
var $l = qf()
function rd(r) {
    $l = r
}
var Nn = { exec: () => null }
function ft(r, c = '') {
    let o = typeof r == 'string' ? r : r.source
    const f = {
        replace: (h, g) => {
            let b = typeof g == 'string' ? g : g.source
            return ((b = b.replace(It.caret, '$1')), (o = o.replace(h, b)), f)
        },
        getRegex: () => new RegExp(o, c),
    }
    return f
}
var It = {
        codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
        outputLinkReplace: /\\([\[\]])/g,
        indentCodeCompensation: /^(\s+)(?:```)/,
        beginningSpace: /^\s+/,
        endingHash: /#$/,
        startingSpaceChar: /^ /,
        endingSpaceChar: / $/,
        nonSpaceChar: /[^ ]/,
        newLineCharGlobal: /\n/g,
        tabCharGlobal: /\t/g,
        multipleSpaceGlobal: /\s+/g,
        blankLine: /^[ \t]*$/,
        doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
        blockquoteStart: /^ {0,3}>/,
        blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
        listReplaceTabs: /^\t+/,
        listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
        listIsTask: /^\[[ xX]\] /,
        listReplaceTask: /^\[[ xX]\] +/,
        anyLine: /\n.*\n/,
        hrefBrackets: /^<(.*)>$/,
        tableDelimiter: /[:|]/,
        tableAlignChars: /^\||\| *$/g,
        tableRowBlankLine: /\n[ \t]*$/,
        tableAlignRight: /^ *-+: *$/,
        tableAlignCenter: /^ *:-+: *$/,
        tableAlignLeft: /^ *:-+ *$/,
        startATag: /^<a /i,
        endATag: /^<\/a>/i,
        startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
        endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
        startAngleBracket: /^</,
        endAngleBracket: />$/,
        pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
        unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
        escapeTest: /[&<>"']/,
        escapeReplace: /[&<>"']/g,
        escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode:
            /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
        unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
        caret: /(^|[^\[])\^/g,
        percentDecode: /%25/g,
        findPipe: /\|/g,
        splitPipe: / \|/,
        slashPipe: /\\\|/g,
        carriageReturn: /\r\n|\r/g,
        spaceLine: /^ +$/gm,
        notSpaceStart: /^\S*/,
        endingNewline: /\n$/,
        listItemRegex: (r) =>
            new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: (r) =>
            new RegExp(
                `^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
            ),
        hrRegex: (r) =>
            new RegExp(
                `^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
            ),
        fencesBeginRegex: (r) =>
            new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`),
        headingBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}#`),
        htmlBeginRegex: (r) =>
            new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, 'i'),
    },
    lg = /^(?:[ \t]*(?:\n|$))+/,
    ag = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    ng =
        /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    Cn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    ug = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    jf = /(?:[*+-]|\d{1,9}[.)])/,
    od =
        /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    hd = ft(od)
        .replace(/bull/g, jf)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/\|table/g, '')
        .getRegex(),
    ig = ft(od)
        .replace(/bull/g, jf)
        .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
        .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
        .replace(/blockquote/g, / {0,3}>/)
        .replace(/heading/g, / {0,3}#{1,6}/)
        .replace(/html/g, / {0,3}<[^\n>]+>\n/)
        .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
        .getRegex(),
    Yf =
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    cg = /^[^\n]+/,
    kf = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    fg = ft(
        /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/
    )
        .replace('label', kf)
        .replace(
            'title',
            /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        )
        .getRegex(),
    sg = ft(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
        .replace(/bull/g, jf)
        .getRegex(),
    ai =
        'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
    Gf = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    rg = ft(
        '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))',
        'i'
    )
        .replace('comment', Gf)
        .replace('tag', ai)
        .replace(
            'attribute',
            / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
        )
        .getRegex(),
    dd = ft(Yf)
        .replace('hr', Cn)
        .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
        .replace('|lheading', '')
        .replace('|table', '')
        .replace('blockquote', ' {0,3}>')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace(
            'html',
            '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
        )
        .replace('tag', ai)
        .getRegex(),
    og = ft(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
        .replace('paragraph', dd)
        .getRegex(),
    Qf = {
        blockquote: og,
        code: ag,
        def: fg,
        fences: ng,
        heading: ug,
        hr: Cn,
        html: rg,
        lheading: hd,
        list: sg,
        newline: lg,
        paragraph: dd,
        table: Nn,
        text: cg,
    },
    nd = ft(
        '^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'
    )
        .replace('hr', Cn)
        .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
        .replace('blockquote', ' {0,3}>')
        .replace('code', '(?: {4}| {0,3}	)[^\\n]')
        .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
        .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
        .replace(
            'html',
            '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
        )
        .replace('tag', ai)
        .getRegex(),
    hg = {
        ...Qf,
        lheading: ig,
        table: nd,
        paragraph: ft(Yf)
            .replace('hr', Cn)
            .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
            .replace('|lheading', '')
            .replace('table', nd)
            .replace('blockquote', ' {0,3}>')
            .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
            .replace(
                'html',
                '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
            )
            .replace('tag', ai)
            .getRegex(),
    },
    dg = {
        ...Qf,
        html: ft(
            `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
        )
            .replace('comment', Gf)
            .replace(
                /tag/g,
                '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
            )
            .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: Nn,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: ft(Yf)
            .replace('hr', Cn)
            .replace(
                'heading',
                ` *#{1,6} *[^
]`
            )
            .replace('lheading', hd)
            .replace('|table', '')
            .replace('blockquote', ' {0,3}>')
            .replace('|fences', '')
            .replace('|list', '')
            .replace('|html', '')
            .replace('|tag', '')
            .getRegex(),
    },
    mg = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    gg = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    md = /^( {2,}|\\)\n(?!\s*$)/,
    yg =
        /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    ni = /[\p{P}\p{S}]/u,
    Lf = /[\s\p{P}\p{S}]/u,
    gd = /[^\s\p{P}\p{S}]/u,
    pg = ft(/^((?![*_])punctSpace)/, 'u')
        .replace(/punctSpace/g, Lf)
        .getRegex(),
    yd = /(?!~)[\p{P}\p{S}]/u,
    vg = /(?!~)[\s\p{P}\p{S}]/u,
    bg = /(?:[^\s\p{P}\p{S}]|~)/u,
    Sg =
        /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
    pd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
    Tg = ft(pd, 'u').replace(/punct/g, ni).getRegex(),
    zg = ft(pd, 'u').replace(/punct/g, yd).getRegex(),
    vd =
        '^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)',
    Ag = ft(vd, 'gu')
        .replace(/notPunctSpace/g, gd)
        .replace(/punctSpace/g, Lf)
        .replace(/punct/g, ni)
        .getRegex(),
    Eg = ft(vd, 'gu')
        .replace(/notPunctSpace/g, bg)
        .replace(/punctSpace/g, vg)
        .replace(/punct/g, yd)
        .getRegex(),
    xg = ft(
        '^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)',
        'gu'
    )
        .replace(/notPunctSpace/g, gd)
        .replace(/punctSpace/g, Lf)
        .replace(/punct/g, ni)
        .getRegex(),
    _g = ft(/\\(punct)/, 'gu')
        .replace(/punct/g, ni)
        .getRegex(),
    Og = ft(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
        .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
        .replace(
            'email',
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
        )
        .getRegex(),
    Mg = ft(Gf).replace('(?:-->|$)', '-->').getRegex(),
    Dg = ft(
        '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>'
    )
        .replace('comment', Mg)
        .replace(
            'attribute',
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
        )
        .getRegex(),
    ti = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    Rg = ft(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/)
        .replace('label', ti)
        .replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
        .replace(
            'title',
            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
        )
        .getRegex(),
    bd = ft(/^!?\[(label)\]\[(ref)\]/)
        .replace('label', ti)
        .replace('ref', kf)
        .getRegex(),
    Sd = ft(/^!?\[(ref)\](?:\[\])?/)
        .replace('ref', kf)
        .getRegex(),
    Ug = ft('reflink|nolink(?!\\()', 'g')
        .replace('reflink', bd)
        .replace('nolink', Sd)
        .getRegex(),
    Xf = {
        _backpedal: Nn,
        anyPunctuation: _g,
        autolink: Og,
        blockSkip: Sg,
        br: md,
        code: gg,
        del: Nn,
        emStrongLDelim: Tg,
        emStrongRDelimAst: Ag,
        emStrongRDelimUnd: xg,
        escape: mg,
        link: Rg,
        nolink: Sd,
        punctuation: pg,
        reflink: bd,
        reflinkSearch: Ug,
        tag: Dg,
        text: yg,
        url: Nn,
    },
    Ng = {
        ...Xf,
        link: ft(/^!?\[(label)\]\((.*?)\)/)
            .replace('label', ti)
            .getRegex(),
        reflink: ft(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace('label', ti)
            .getRegex(),
    },
    Nf = {
        ...Xf,
        emStrongRDelimAst: Eg,
        emStrongLDelim: zg,
        url: ft(
            /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            'i'
        )
            .replace(
                'email',
                /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
            )
            .getRegex(),
        _backpedal:
            /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    },
    Cg = {
        ...Nf,
        br: ft(md).replace('{2,}', '*').getRegex(),
        text: ft(Nf.text)
            .replace('\\b_', '\\b_| {2,}\\n')
            .replace(/\{2,\}/g, '*')
            .getRegex(),
    },
    Iu = { normal: Qf, gfm: hg, pedantic: dg },
    Rn = { normal: Xf, gfm: Nf, breaks: Cg, pedantic: Ng },
    Hg = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    },
    ud = (r) => Hg[r]
function He(r, c) {
    if (c) {
        if (It.escapeTest.test(r)) return r.replace(It.escapeReplace, ud)
    } else if (It.escapeTestNoEncode.test(r))
        return r.replace(It.escapeReplaceNoEncode, ud)
    return r
}
function id(r) {
    try {
        r = encodeURI(r).replace(It.percentDecode, '%')
    } catch {
        return null
    }
    return r
}
function cd(r, c) {
    const o = r.replace(It.findPipe, (g, b, A) => {
            let x = !1,
                p = b
            for (; --p >= 0 && A[p] === '\\'; ) x = !x
            return x ? '|' : ' |'
        }),
        f = o.split(It.splitPipe)
    let h = 0
    if (
        (f[0].trim() || f.shift(),
        f.length > 0 && !f.at(-1)?.trim() && f.pop(),
        c)
    )
        if (f.length > c) f.splice(c)
        else for (; f.length < c; ) f.push('')
    for (; h < f.length; h++) f[h] = f[h].trim().replace(It.slashPipe, '|')
    return f
}
function Un(r, c, o) {
    const f = r.length
    if (f === 0) return ''
    let h = 0
    for (; h < f && r.charAt(f - h - 1) === c; ) h++
    return r.slice(0, f - h)
}
function Bg(r, c) {
    if (r.indexOf(c[1]) === -1) return -1
    let o = 0
    for (let f = 0; f < r.length; f++)
        if (r[f] === '\\') f++
        else if (r[f] === c[0]) o++
        else if (r[f] === c[1] && (o--, o < 0)) return f
    return o > 0 ? -2 : -1
}
function fd(r, c, o, f, h) {
    const g = c.href,
        b = c.title || null,
        A = r[1].replace(h.other.outputLinkReplace, '$1')
    f.state.inLink = !0
    const x = {
        type: r[0].charAt(0) === '!' ? 'image' : 'link',
        raw: o,
        href: g,
        title: b,
        text: A,
        tokens: f.inlineTokens(A),
    }
    return ((f.state.inLink = !1), x)
}
function qg(r, c, o) {
    const f = r.match(o.other.indentCodeCompensation)
    if (f === null) return c
    const h = f[1]
    return c
        .split(
            `
`
        )
        .map((g) => {
            const b = g.match(o.other.beginningSpace)
            if (b === null) return g
            const [A] = b
            return A.length >= h.length ? g.slice(h.length) : g
        }).join(`
`)
}
var ei = class {
        options
        rules
        lexer
        constructor(r) {
            this.options = r || $l
        }
        space(r) {
            const c = this.rules.block.newline.exec(r)
            if (c && c[0].length > 0) return { type: 'space', raw: c[0] }
        }
        code(r) {
            const c = this.rules.block.code.exec(r)
            if (c) {
                const o = c[0].replace(this.rules.other.codeRemoveIndent, '')
                return {
                    type: 'code',
                    raw: c[0],
                    codeBlockStyle: 'indented',
                    text: this.options.pedantic
                        ? o
                        : Un(
                              o,
                              `
`
                          ),
                }
            }
        }
        fences(r) {
            const c = this.rules.block.fences.exec(r)
            if (c) {
                const o = c[0],
                    f = qg(o, c[3] || '', this.rules)
                return {
                    type: 'code',
                    raw: o,
                    lang: c[2]
                        ? c[2]
                              .trim()
                              .replace(this.rules.inline.anyPunctuation, '$1')
                        : c[2],
                    text: f,
                }
            }
        }
        heading(r) {
            const c = this.rules.block.heading.exec(r)
            if (c) {
                let o = c[2].trim()
                if (this.rules.other.endingHash.test(o)) {
                    const f = Un(o, '#')
                    ;(this.options.pedantic ||
                        !f ||
                        this.rules.other.endingSpaceChar.test(f)) &&
                        (o = f.trim())
                }
                return {
                    type: 'heading',
                    raw: c[0],
                    depth: c[1].length,
                    text: o,
                    tokens: this.lexer.inline(o),
                }
            }
        }
        hr(r) {
            const c = this.rules.block.hr.exec(r)
            if (c)
                return {
                    type: 'hr',
                    raw: Un(
                        c[0],
                        `
`
                    ),
                }
        }
        blockquote(r) {
            const c = this.rules.block.blockquote.exec(r)
            if (c) {
                let o = Un(
                        c[0],
                        `
`
                    ).split(`
`),
                    f = '',
                    h = ''
                const g = []
                for (; o.length > 0; ) {
                    let b = !1
                    const A = []
                    let x
                    for (x = 0; x < o.length; x++)
                        if (this.rules.other.blockquoteStart.test(o[x]))
                            (A.push(o[x]), (b = !0))
                        else if (!b) A.push(o[x])
                        else break
                    o = o.slice(x)
                    const p = A.join(`
`),
                        U = p
                            .replace(
                                this.rules.other.blockquoteSetextReplace,
                                `
    $1`
                            )
                            .replace(
                                this.rules.other.blockquoteSetextReplace2,
                                ''
                            )
                    ;((f = f
                        ? `${f}
${p}`
                        : p),
                        (h = h
                            ? `${h}
${U}`
                            : U))
                    const N = this.lexer.state.top
                    if (
                        ((this.lexer.state.top = !0),
                        this.lexer.blockTokens(U, g, !0),
                        (this.lexer.state.top = N),
                        o.length === 0)
                    )
                        break
                    const H = g.at(-1)
                    if (H?.type === 'code') break
                    if (H?.type === 'blockquote') {
                        const Z = H,
                            Q =
                                Z.raw +
                                `
` +
                                o.join(`
`),
                            at = this.blockquote(Q)
                        ;((g[g.length - 1] = at),
                            (f =
                                f.substring(0, f.length - Z.raw.length) +
                                at.raw),
                            (h =
                                h.substring(0, h.length - Z.text.length) +
                                at.text))
                        break
                    } else if (H?.type === 'list') {
                        const Z = H,
                            Q =
                                Z.raw +
                                `
` +
                                o.join(`
`),
                            at = this.list(Q)
                        ;((g[g.length - 1] = at),
                            (f =
                                f.substring(0, f.length - H.raw.length) +
                                at.raw),
                            (h =
                                h.substring(0, h.length - Z.raw.length) +
                                at.raw),
                            (o = Q.substring(g.at(-1).raw.length).split(`
`)))
                        continue
                    }
                }
                return { type: 'blockquote', raw: f, tokens: g, text: h }
            }
        }
        list(r) {
            let c = this.rules.block.list.exec(r)
            if (c) {
                let o = c[1].trim()
                const f = o.length > 1,
                    h = {
                        type: 'list',
                        raw: '',
                        ordered: f,
                        start: f ? +o.slice(0, -1) : '',
                        loose: !1,
                        items: [],
                    }
                ;((o = f ? `\\d{1,9}\\${o.slice(-1)}` : `\\${o}`),
                    this.options.pedantic && (o = f ? o : '[*+-]'))
                const g = this.rules.other.listItemRegex(o)
                let b = !1
                for (; r; ) {
                    let x = !1,
                        p = '',
                        U = ''
                    if (!(c = g.exec(r)) || this.rules.block.hr.test(r)) break
                    ;((p = c[0]), (r = r.substring(p.length)))
                    let N = c[2]
                            .split(
                                `
`,
                                1
                            )[0]
                            .replace(this.rules.other.listReplaceTabs, (Et) =>
                                ' '.repeat(3 * Et.length)
                            ),
                        H = r.split(
                            `
`,
                            1
                        )[0],
                        Z = !N.trim(),
                        Q = 0
                    if (
                        (this.options.pedantic
                            ? ((Q = 2), (U = N.trimStart()))
                            : Z
                              ? (Q = c[1].length + 1)
                              : ((Q = c[2].search(
                                    this.rules.other.nonSpaceChar
                                )),
                                (Q = Q > 4 ? 1 : Q),
                                (U = N.slice(Q)),
                                (Q += c[1].length)),
                        Z &&
                            this.rules.other.blankLine.test(H) &&
                            ((p +=
                                H +
                                `
`),
                            (r = r.substring(H.length + 1)),
                            (x = !0)),
                        !x)
                    ) {
                        const Et = this.rules.other.nextBulletRegex(Q),
                            Vt = this.rules.other.hrRegex(Q),
                            zt = this.rules.other.fencesBeginRegex(Q),
                            jt = this.rules.other.headingBeginRegex(Q),
                            ht = this.rules.other.htmlBeginRegex(Q)
                        for (; r; ) {
                            const lt = r.split(
                                `
`,
                                1
                            )[0]
                            let X
                            if (
                                ((H = lt),
                                this.options.pedantic
                                    ? ((H = H.replace(
                                          this.rules.other.listReplaceNesting,
                                          '  '
                                      )),
                                      (X = H))
                                    : (X = H.replace(
                                          this.rules.other.tabCharGlobal,
                                          '    '
                                      )),
                                zt.test(H) ||
                                    jt.test(H) ||
                                    ht.test(H) ||
                                    Et.test(H) ||
                                    Vt.test(H))
                            )
                                break
                            if (
                                X.search(this.rules.other.nonSpaceChar) >= Q ||
                                !H.trim()
                            )
                                U +=
                                    `
` + X.slice(Q)
                            else {
                                if (
                                    Z ||
                                    N.replace(
                                        this.rules.other.tabCharGlobal,
                                        '    '
                                    ).search(this.rules.other.nonSpaceChar) >=
                                        4 ||
                                    zt.test(N) ||
                                    jt.test(N) ||
                                    Vt.test(N)
                                )
                                    break
                                U +=
                                    `
` + H
                            }
                            ;(!Z && !H.trim() && (Z = !0),
                                (p +=
                                    lt +
                                    `
`),
                                (r = r.substring(lt.length + 1)),
                                (N = X.slice(Q)))
                        }
                    }
                    h.loose ||
                        (b
                            ? (h.loose = !0)
                            : this.rules.other.doubleBlankLine.test(p) &&
                              (b = !0))
                    let at = null,
                        wt
                    ;(this.options.gfm &&
                        ((at = this.rules.other.listIsTask.exec(U)),
                        at &&
                            ((wt = at[0] !== '[ ] '),
                            (U = U.replace(
                                this.rules.other.listReplaceTask,
                                ''
                            )))),
                        h.items.push({
                            type: 'list_item',
                            raw: p,
                            task: !!at,
                            checked: wt,
                            loose: !1,
                            text: U,
                            tokens: [],
                        }),
                        (h.raw += p))
                }
                const A = h.items.at(-1)
                if (A) ((A.raw = A.raw.trimEnd()), (A.text = A.text.trimEnd()))
                else return
                h.raw = h.raw.trimEnd()
                for (let x = 0; x < h.items.length; x++)
                    if (
                        ((this.lexer.state.top = !1),
                        (h.items[x].tokens = this.lexer.blockTokens(
                            h.items[x].text,
                            []
                        )),
                        !h.loose)
                    ) {
                        const p = h.items[x].tokens.filter(
                                (N) => N.type === 'space'
                            ),
                            U =
                                p.length > 0 &&
                                p.some((N) =>
                                    this.rules.other.anyLine.test(N.raw)
                                )
                        h.loose = U
                    }
                if (h.loose)
                    for (let x = 0; x < h.items.length; x++)
                        h.items[x].loose = !0
                return h
            }
        }
        html(r) {
            const c = this.rules.block.html.exec(r)
            if (c)
                return {
                    type: 'html',
                    block: !0,
                    raw: c[0],
                    pre:
                        c[1] === 'pre' || c[1] === 'script' || c[1] === 'style',
                    text: c[0],
                }
        }
        def(r) {
            const c = this.rules.block.def.exec(r)
            if (c) {
                const o = c[1]
                        .toLowerCase()
                        .replace(this.rules.other.multipleSpaceGlobal, ' '),
                    f = c[2]
                        ? c[2]
                              .replace(this.rules.other.hrefBrackets, '$1')
                              .replace(this.rules.inline.anyPunctuation, '$1')
                        : '',
                    h = c[3]
                        ? c[3]
                              .substring(1, c[3].length - 1)
                              .replace(this.rules.inline.anyPunctuation, '$1')
                        : c[3]
                return { type: 'def', tag: o, raw: c[0], href: f, title: h }
            }
        }
        table(r) {
            const c = this.rules.block.table.exec(r)
            if (!c || !this.rules.other.tableDelimiter.test(c[2])) return
            const o = cd(c[1]),
                f = c[2]
                    .replace(this.rules.other.tableAlignChars, '')
                    .split('|'),
                h = c[3]?.trim()
                    ? c[3].replace(this.rules.other.tableRowBlankLine, '')
                          .split(`
`)
                    : [],
                g = {
                    type: 'table',
                    raw: c[0],
                    header: [],
                    align: [],
                    rows: [],
                }
            if (o.length === f.length) {
                for (const b of f)
                    this.rules.other.tableAlignRight.test(b)
                        ? g.align.push('right')
                        : this.rules.other.tableAlignCenter.test(b)
                          ? g.align.push('center')
                          : this.rules.other.tableAlignLeft.test(b)
                            ? g.align.push('left')
                            : g.align.push(null)
                for (let b = 0; b < o.length; b++)
                    g.header.push({
                        text: o[b],
                        tokens: this.lexer.inline(o[b]),
                        header: !0,
                        align: g.align[b],
                    })
                for (const b of h)
                    g.rows.push(
                        cd(b, g.header.length).map((A, x) => ({
                            text: A,
                            tokens: this.lexer.inline(A),
                            header: !1,
                            align: g.align[x],
                        }))
                    )
                return g
            }
        }
        lheading(r) {
            const c = this.rules.block.lheading.exec(r)
            if (c)
                return {
                    type: 'heading',
                    raw: c[0],
                    depth: c[2].charAt(0) === '=' ? 1 : 2,
                    text: c[1],
                    tokens: this.lexer.inline(c[1]),
                }
        }
        paragraph(r) {
            const c = this.rules.block.paragraph.exec(r)
            if (c) {
                const o =
                    c[1].charAt(c[1].length - 1) ===
                    `
`
                        ? c[1].slice(0, -1)
                        : c[1]
                return {
                    type: 'paragraph',
                    raw: c[0],
                    text: o,
                    tokens: this.lexer.inline(o),
                }
            }
        }
        text(r) {
            const c = this.rules.block.text.exec(r)
            if (c)
                return {
                    type: 'text',
                    raw: c[0],
                    text: c[0],
                    tokens: this.lexer.inline(c[0]),
                }
        }
        escape(r) {
            const c = this.rules.inline.escape.exec(r)
            if (c) return { type: 'escape', raw: c[0], text: c[1] }
        }
        tag(r) {
            const c = this.rules.inline.tag.exec(r)
            if (c)
                return (
                    !this.lexer.state.inLink &&
                    this.rules.other.startATag.test(c[0])
                        ? (this.lexer.state.inLink = !0)
                        : this.lexer.state.inLink &&
                          this.rules.other.endATag.test(c[0]) &&
                          (this.lexer.state.inLink = !1),
                    !this.lexer.state.inRawBlock &&
                    this.rules.other.startPreScriptTag.test(c[0])
                        ? (this.lexer.state.inRawBlock = !0)
                        : this.lexer.state.inRawBlock &&
                          this.rules.other.endPreScriptTag.test(c[0]) &&
                          (this.lexer.state.inRawBlock = !1),
                    {
                        type: 'html',
                        raw: c[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: c[0],
                    }
                )
        }
        link(r) {
            const c = this.rules.inline.link.exec(r)
            if (c) {
                const o = c[2].trim()
                if (
                    !this.options.pedantic &&
                    this.rules.other.startAngleBracket.test(o)
                ) {
                    if (!this.rules.other.endAngleBracket.test(o)) return
                    const g = Un(o.slice(0, -1), '\\')
                    if ((o.length - g.length) % 2 === 0) return
                } else {
                    const g = Bg(c[2], '()')
                    if (g === -2) return
                    if (g > -1) {
                        const A =
                            (c[0].indexOf('!') === 0 ? 5 : 4) + c[1].length + g
                        ;((c[2] = c[2].substring(0, g)),
                            (c[0] = c[0].substring(0, A).trim()),
                            (c[3] = ''))
                    }
                }
                let f = c[2],
                    h = ''
                if (this.options.pedantic) {
                    const g = this.rules.other.pedanticHrefTitle.exec(f)
                    g && ((f = g[1]), (h = g[3]))
                } else h = c[3] ? c[3].slice(1, -1) : ''
                return (
                    (f = f.trim()),
                    this.rules.other.startAngleBracket.test(f) &&
                        (this.options.pedantic &&
                        !this.rules.other.endAngleBracket.test(o)
                            ? (f = f.slice(1))
                            : (f = f.slice(1, -1))),
                    fd(
                        c,
                        {
                            href:
                                f &&
                                f.replace(
                                    this.rules.inline.anyPunctuation,
                                    '$1'
                                ),
                            title:
                                h &&
                                h.replace(
                                    this.rules.inline.anyPunctuation,
                                    '$1'
                                ),
                        },
                        c[0],
                        this.lexer,
                        this.rules
                    )
                )
            }
        }
        reflink(r, c) {
            let o
            if (
                (o = this.rules.inline.reflink.exec(r)) ||
                (o = this.rules.inline.nolink.exec(r))
            ) {
                const f = (o[2] || o[1]).replace(
                        this.rules.other.multipleSpaceGlobal,
                        ' '
                    ),
                    h = c[f.toLowerCase()]
                if (!h) {
                    const g = o[0].charAt(0)
                    return { type: 'text', raw: g, text: g }
                }
                return fd(o, h, o[0], this.lexer, this.rules)
            }
        }
        emStrong(r, c, o = '') {
            let f = this.rules.inline.emStrongLDelim.exec(r)
            if (!f || (f[3] && o.match(this.rules.other.unicodeAlphaNumeric)))
                return
            if (
                !(f[1] || f[2] || '') ||
                !o ||
                this.rules.inline.punctuation.exec(o)
            ) {
                const g = [...f[0]].length - 1
                let b,
                    A,
                    x = g,
                    p = 0
                const U =
                    f[0][0] === '*'
                        ? this.rules.inline.emStrongRDelimAst
                        : this.rules.inline.emStrongRDelimUnd
                for (
                    U.lastIndex = 0, c = c.slice(-1 * r.length + g);
                    (f = U.exec(c)) != null;
                ) {
                    if (
                        ((b = f[1] || f[2] || f[3] || f[4] || f[5] || f[6]), !b)
                    )
                        continue
                    if (((A = [...b].length), f[3] || f[4])) {
                        x += A
                        continue
                    } else if ((f[5] || f[6]) && g % 3 && !((g + A) % 3)) {
                        p += A
                        continue
                    }
                    if (((x -= A), x > 0)) continue
                    A = Math.min(A, A + x + p)
                    const N = [...f[0]][0].length,
                        H = r.slice(0, g + f.index + N + A)
                    if (Math.min(g, A) % 2) {
                        const Q = H.slice(1, -1)
                        return {
                            type: 'em',
                            raw: H,
                            text: Q,
                            tokens: this.lexer.inlineTokens(Q),
                        }
                    }
                    const Z = H.slice(2, -2)
                    return {
                        type: 'strong',
                        raw: H,
                        text: Z,
                        tokens: this.lexer.inlineTokens(Z),
                    }
                }
            }
        }
        codespan(r) {
            const c = this.rules.inline.code.exec(r)
            if (c) {
                let o = c[2].replace(this.rules.other.newLineCharGlobal, ' ')
                const f = this.rules.other.nonSpaceChar.test(o),
                    h =
                        this.rules.other.startingSpaceChar.test(o) &&
                        this.rules.other.endingSpaceChar.test(o)
                return (
                    f && h && (o = o.substring(1, o.length - 1)),
                    { type: 'codespan', raw: c[0], text: o }
                )
            }
        }
        br(r) {
            const c = this.rules.inline.br.exec(r)
            if (c) return { type: 'br', raw: c[0] }
        }
        del(r) {
            const c = this.rules.inline.del.exec(r)
            if (c)
                return {
                    type: 'del',
                    raw: c[0],
                    text: c[2],
                    tokens: this.lexer.inlineTokens(c[2]),
                }
        }
        autolink(r) {
            const c = this.rules.inline.autolink.exec(r)
            if (c) {
                let o, f
                return (
                    c[2] === '@'
                        ? ((o = c[1]), (f = 'mailto:' + o))
                        : ((o = c[1]), (f = o)),
                    {
                        type: 'link',
                        raw: c[0],
                        text: o,
                        href: f,
                        tokens: [{ type: 'text', raw: o, text: o }],
                    }
                )
            }
        }
        url(r) {
            let c
            if ((c = this.rules.inline.url.exec(r))) {
                let o, f
                if (c[2] === '@') ((o = c[0]), (f = 'mailto:' + o))
                else {
                    let h
                    do
                        ((h = c[0]),
                            (c[0] =
                                this.rules.inline._backpedal.exec(c[0])?.[0] ??
                                ''))
                    while (h !== c[0])
                    ;((o = c[0]),
                        c[1] === 'www.' ? (f = 'http://' + c[0]) : (f = c[0]))
                }
                return {
                    type: 'link',
                    raw: c[0],
                    text: o,
                    href: f,
                    tokens: [{ type: 'text', raw: o, text: o }],
                }
            }
        }
        inlineText(r) {
            const c = this.rules.inline.text.exec(r)
            if (c) {
                const o = this.lexer.state.inRawBlock
                return { type: 'text', raw: c[0], text: c[0], escaped: o }
            }
        }
    },
    el = class Cf {
        tokens
        options
        state
        tokenizer
        inlineQueue
        constructor(c) {
            ;((this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = c || $l),
                (this.options.tokenizer = this.options.tokenizer || new ei()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, top: !0 }))
            const o = { other: It, block: Iu.normal, inline: Rn.normal }
            ;(this.options.pedantic
                ? ((o.block = Iu.pedantic), (o.inline = Rn.pedantic))
                : this.options.gfm &&
                  ((o.block = Iu.gfm),
                  this.options.breaks
                      ? (o.inline = Rn.breaks)
                      : (o.inline = Rn.gfm)),
                (this.tokenizer.rules = o))
        }
        static get rules() {
            return { block: Iu, inline: Rn }
        }
        static lex(c, o) {
            return new Cf(o).lex(c)
        }
        static lexInline(c, o) {
            return new Cf(o).inlineTokens(c)
        }
        lex(c) {
            ;((c = c.replace(
                It.carriageReturn,
                `
`
            )),
                this.blockTokens(c, this.tokens))
            for (let o = 0; o < this.inlineQueue.length; o++) {
                const f = this.inlineQueue[o]
                this.inlineTokens(f.src, f.tokens)
            }
            return ((this.inlineQueue = []), this.tokens)
        }
        blockTokens(c, o = [], f = !1) {
            for (
                this.options.pedantic &&
                (c = c
                    .replace(It.tabCharGlobal, '    ')
                    .replace(It.spaceLine, ''));
                c;
            ) {
                let h
                if (
                    this.options.extensions?.block?.some((b) =>
                        (h = b.call({ lexer: this }, c, o))
                            ? ((c = c.substring(h.raw.length)), o.push(h), !0)
                            : !1
                    )
                )
                    continue
                if ((h = this.tokenizer.space(c))) {
                    c = c.substring(h.raw.length)
                    const b = o.at(-1)
                    h.raw.length === 1 && b !== void 0
                        ? (b.raw += `
`)
                        : o.push(h)
                    continue
                }
                if ((h = this.tokenizer.code(c))) {
                    c = c.substring(h.raw.length)
                    const b = o.at(-1)
                    b?.type === 'paragraph' || b?.type === 'text'
                        ? ((b.raw +=
                              `
` + h.raw),
                          (b.text +=
                              `
` + h.text),
                          (this.inlineQueue.at(-1).src = b.text))
                        : o.push(h)
                    continue
                }
                if ((h = this.tokenizer.fences(c))) {
                    ;((c = c.substring(h.raw.length)), o.push(h))
                    continue
                }
                if ((h = this.tokenizer.heading(c))) {
                    ;((c = c.substring(h.raw.length)), o.push(h))
                    continue
                }
                if ((h = this.tokenizer.hr(c))) {
                    ;((c = c.substring(h.raw.length)), o.push(h))
                    continue
                }
                if ((h = this.tokenizer.blockquote(c))) {
                    ;((c = c.substring(h.raw.length)), o.push(h))
                    continue
                }
                if ((h = this.tokenizer.list(c))) {
                    ;((c = c.substring(h.raw.length)), o.push(h))
                    continue
                }
                if ((h = this.tokenizer.html(c))) {
                    ;((c = c.substring(h.raw.length)), o.push(h))
                    continue
                }
                if ((h = this.tokenizer.def(c))) {
                    c = c.substring(h.raw.length)
                    const b = o.at(-1)
                    b?.type === 'paragraph' || b?.type === 'text'
                        ? ((b.raw +=
                              `
` + h.raw),
                          (b.text +=
                              `
` + h.raw),
                          (this.inlineQueue.at(-1).src = b.text))
                        : this.tokens.links[h.tag] ||
                          (this.tokens.links[h.tag] = {
                              href: h.href,
                              title: h.title,
                          })
                    continue
                }
                if ((h = this.tokenizer.table(c))) {
                    ;((c = c.substring(h.raw.length)), o.push(h))
                    continue
                }
                if ((h = this.tokenizer.lheading(c))) {
                    ;((c = c.substring(h.raw.length)), o.push(h))
                    continue
                }
                let g = c
                if (this.options.extensions?.startBlock) {
                    let b = 1 / 0
                    const A = c.slice(1)
                    let x
                    ;(this.options.extensions.startBlock.forEach((p) => {
                        ;((x = p.call({ lexer: this }, A)),
                            typeof x == 'number' &&
                                x >= 0 &&
                                (b = Math.min(b, x)))
                    }),
                        b < 1 / 0 && b >= 0 && (g = c.substring(0, b + 1)))
                }
                if (this.state.top && (h = this.tokenizer.paragraph(g))) {
                    const b = o.at(-1)
                    ;(f && b?.type === 'paragraph'
                        ? ((b.raw +=
                              `
` + h.raw),
                          (b.text +=
                              `
` + h.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = b.text))
                        : o.push(h),
                        (f = g.length !== c.length),
                        (c = c.substring(h.raw.length)))
                    continue
                }
                if ((h = this.tokenizer.text(c))) {
                    c = c.substring(h.raw.length)
                    const b = o.at(-1)
                    b?.type === 'text'
                        ? ((b.raw +=
                              `
` + h.raw),
                          (b.text +=
                              `
` + h.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue.at(-1).src = b.text))
                        : o.push(h)
                    continue
                }
                if (c) {
                    const b = 'Infinite loop on byte: ' + c.charCodeAt(0)
                    if (this.options.silent) {
                        console.error(b)
                        break
                    } else throw new Error(b)
                }
            }
            return ((this.state.top = !0), o)
        }
        inline(c, o = []) {
            return (this.inlineQueue.push({ src: c, tokens: o }), o)
        }
        inlineTokens(c, o = []) {
            let f = c,
                h = null
            if (this.tokens.links) {
                const A = Object.keys(this.tokens.links)
                if (A.length > 0)
                    for (
                        ;
                        (h =
                            this.tokenizer.rules.inline.reflinkSearch.exec(
                                f
                            )) != null;
                    )
                        A.includes(h[0].slice(h[0].lastIndexOf('[') + 1, -1)) &&
                            (f =
                                f.slice(0, h.index) +
                                '[' +
                                'a'.repeat(h[0].length - 2) +
                                ']' +
                                f.slice(
                                    this.tokenizer.rules.inline.reflinkSearch
                                        .lastIndex
                                ))
            }
            for (
                ;
                (h = this.tokenizer.rules.inline.anyPunctuation.exec(f)) !=
                null;
            )
                f =
                    f.slice(0, h.index) +
                    '++' +
                    f.slice(
                        this.tokenizer.rules.inline.anyPunctuation.lastIndex
                    )
            for (
                ;
                (h = this.tokenizer.rules.inline.blockSkip.exec(f)) != null;
            )
                f =
                    f.slice(0, h.index) +
                    '[' +
                    'a'.repeat(h[0].length - 2) +
                    ']' +
                    f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
            let g = !1,
                b = ''
            for (; c; ) {
                ;(g || (b = ''), (g = !1))
                let A
                if (
                    this.options.extensions?.inline?.some((p) =>
                        (A = p.call({ lexer: this }, c, o))
                            ? ((c = c.substring(A.raw.length)), o.push(A), !0)
                            : !1
                    )
                )
                    continue
                if ((A = this.tokenizer.escape(c))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                if ((A = this.tokenizer.tag(c))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                if ((A = this.tokenizer.link(c))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                if ((A = this.tokenizer.reflink(c, this.tokens.links))) {
                    c = c.substring(A.raw.length)
                    const p = o.at(-1)
                    A.type === 'text' && p?.type === 'text'
                        ? ((p.raw += A.raw), (p.text += A.text))
                        : o.push(A)
                    continue
                }
                if ((A = this.tokenizer.emStrong(c, f, b))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                if ((A = this.tokenizer.codespan(c))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                if ((A = this.tokenizer.br(c))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                if ((A = this.tokenizer.del(c))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                if ((A = this.tokenizer.autolink(c))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                if (!this.state.inLink && (A = this.tokenizer.url(c))) {
                    ;((c = c.substring(A.raw.length)), o.push(A))
                    continue
                }
                let x = c
                if (this.options.extensions?.startInline) {
                    let p = 1 / 0
                    const U = c.slice(1)
                    let N
                    ;(this.options.extensions.startInline.forEach((H) => {
                        ;((N = H.call({ lexer: this }, U)),
                            typeof N == 'number' &&
                                N >= 0 &&
                                (p = Math.min(p, N)))
                    }),
                        p < 1 / 0 && p >= 0 && (x = c.substring(0, p + 1)))
                }
                if ((A = this.tokenizer.inlineText(x))) {
                    ;((c = c.substring(A.raw.length)),
                        A.raw.slice(-1) !== '_' && (b = A.raw.slice(-1)),
                        (g = !0))
                    const p = o.at(-1)
                    p?.type === 'text'
                        ? ((p.raw += A.raw), (p.text += A.text))
                        : o.push(A)
                    continue
                }
                if (c) {
                    const p = 'Infinite loop on byte: ' + c.charCodeAt(0)
                    if (this.options.silent) {
                        console.error(p)
                        break
                    } else throw new Error(p)
                }
            }
            return o
        }
    },
    li = class {
        options
        parser
        constructor(r) {
            this.options = r || $l
        }
        space(r) {
            return ''
        }
        code({ text: r, lang: c, escaped: o }) {
            const f = (c || '').match(It.notSpaceStart)?.[0],
                h =
                    r.replace(It.endingNewline, '') +
                    `
`
            return f
                ? '<pre><code class="language-' +
                      He(f) +
                      '">' +
                      (o ? h : He(h, !0)) +
                      `</code></pre>
`
                : '<pre><code>' +
                      (o ? h : He(h, !0)) +
                      `</code></pre>
`
        }
        blockquote({ tokens: r }) {
            return `<blockquote>
${this.parser.parse(r)}</blockquote>
`
        }
        html({ text: r }) {
            return r
        }
        heading({ tokens: r, depth: c }) {
            return `<h${c}>${this.parser.parseInline(r)}</h${c}>
`
        }
        hr(r) {
            return `<hr>
`
        }
        list(r) {
            const c = r.ordered,
                o = r.start
            let f = ''
            for (let b = 0; b < r.items.length; b++) {
                const A = r.items[b]
                f += this.listitem(A)
            }
            const h = c ? 'ol' : 'ul',
                g = c && o !== 1 ? ' start="' + o + '"' : ''
            return (
                '<' +
                h +
                g +
                `>
` +
                f +
                '</' +
                h +
                `>
`
            )
        }
        listitem(r) {
            let c = ''
            if (r.task) {
                const o = this.checkbox({ checked: !!r.checked })
                r.loose
                    ? r.tokens[0]?.type === 'paragraph'
                        ? ((r.tokens[0].text = o + ' ' + r.tokens[0].text),
                          r.tokens[0].tokens &&
                              r.tokens[0].tokens.length > 0 &&
                              r.tokens[0].tokens[0].type === 'text' &&
                              ((r.tokens[0].tokens[0].text =
                                  o + ' ' + He(r.tokens[0].tokens[0].text)),
                              (r.tokens[0].tokens[0].escaped = !0)))
                        : r.tokens.unshift({
                              type: 'text',
                              raw: o + ' ',
                              text: o + ' ',
                              escaped: !0,
                          })
                    : (c += o + ' ')
            }
            return (
                (c += this.parser.parse(r.tokens, !!r.loose)),
                `<li>${c}</li>
`
            )
        }
        checkbox({ checked: r }) {
            return (
                '<input ' +
                (r ? 'checked="" ' : '') +
                'disabled="" type="checkbox">'
            )
        }
        paragraph({ tokens: r }) {
            return `<p>${this.parser.parseInline(r)}</p>
`
        }
        table(r) {
            let c = '',
                o = ''
            for (let h = 0; h < r.header.length; h++)
                o += this.tablecell(r.header[h])
            c += this.tablerow({ text: o })
            let f = ''
            for (let h = 0; h < r.rows.length; h++) {
                const g = r.rows[h]
                o = ''
                for (let b = 0; b < g.length; b++) o += this.tablecell(g[b])
                f += this.tablerow({ text: o })
            }
            return (
                f && (f = `<tbody>${f}</tbody>`),
                `<table>
<thead>
` +
                    c +
                    `</thead>
` +
                    f +
                    `</table>
`
            )
        }
        tablerow({ text: r }) {
            return `<tr>
${r}</tr>
`
        }
        tablecell(r) {
            const c = this.parser.parseInline(r.tokens),
                o = r.header ? 'th' : 'td'
            return (
                (r.align ? `<${o} align="${r.align}">` : `<${o}>`) +
                c +
                `</${o}>
`
            )
        }
        strong({ tokens: r }) {
            return `<strong>${this.parser.parseInline(r)}</strong>`
        }
        em({ tokens: r }) {
            return `<em>${this.parser.parseInline(r)}</em>`
        }
        codespan({ text: r }) {
            return `<code>${He(r, !0)}</code>`
        }
        br(r) {
            return '<br>'
        }
        del({ tokens: r }) {
            return `<del>${this.parser.parseInline(r)}</del>`
        }
        link({ href: r, title: c, tokens: o }) {
            const f = this.parser.parseInline(o),
                h = id(r)
            if (h === null) return f
            r = h
            let g = '<a href="' + r + '"'
            return (
                c && (g += ' title="' + He(c) + '"'),
                (g += '>' + f + '</a>'),
                g
            )
        }
        image({ href: r, title: c, text: o, tokens: f }) {
            f && (o = this.parser.parseInline(f, this.parser.textRenderer))
            const h = id(r)
            if (h === null) return He(o)
            r = h
            let g = `<img src="${r}" alt="${o}"`
            return (c && (g += ` title="${He(c)}"`), (g += '>'), g)
        }
        text(r) {
            return 'tokens' in r && r.tokens
                ? this.parser.parseInline(r.tokens)
                : 'escaped' in r && r.escaped
                  ? r.text
                  : He(r.text)
        }
    },
    Zf = class {
        strong({ text: r }) {
            return r
        }
        em({ text: r }) {
            return r
        }
        codespan({ text: r }) {
            return r
        }
        del({ text: r }) {
            return r
        }
        html({ text: r }) {
            return r
        }
        text({ text: r }) {
            return r
        }
        link({ text: r }) {
            return '' + r
        }
        image({ text: r }) {
            return '' + r
        }
        br() {
            return ''
        }
    },
    ll = class Hf {
        options
        renderer
        textRenderer
        constructor(c) {
            ;((this.options = c || $l),
                (this.options.renderer = this.options.renderer || new li()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.renderer.parser = this),
                (this.textRenderer = new Zf()))
        }
        static parse(c, o) {
            return new Hf(o).parse(c)
        }
        static parseInline(c, o) {
            return new Hf(o).parseInline(c)
        }
        parse(c, o = !0) {
            let f = ''
            for (let h = 0; h < c.length; h++) {
                const g = c[h]
                if (this.options.extensions?.renderers?.[g.type]) {
                    const A = g,
                        x = this.options.extensions.renderers[A.type].call(
                            { parser: this },
                            A
                        )
                    if (
                        x !== !1 ||
                        ![
                            'space',
                            'hr',
                            'heading',
                            'code',
                            'table',
                            'blockquote',
                            'list',
                            'html',
                            'paragraph',
                            'text',
                        ].includes(A.type)
                    ) {
                        f += x || ''
                        continue
                    }
                }
                const b = g
                switch (b.type) {
                    case 'space': {
                        f += this.renderer.space(b)
                        continue
                    }
                    case 'hr': {
                        f += this.renderer.hr(b)
                        continue
                    }
                    case 'heading': {
                        f += this.renderer.heading(b)
                        continue
                    }
                    case 'code': {
                        f += this.renderer.code(b)
                        continue
                    }
                    case 'table': {
                        f += this.renderer.table(b)
                        continue
                    }
                    case 'blockquote': {
                        f += this.renderer.blockquote(b)
                        continue
                    }
                    case 'list': {
                        f += this.renderer.list(b)
                        continue
                    }
                    case 'html': {
                        f += this.renderer.html(b)
                        continue
                    }
                    case 'paragraph': {
                        f += this.renderer.paragraph(b)
                        continue
                    }
                    case 'text': {
                        let A = b,
                            x = this.renderer.text(A)
                        for (; h + 1 < c.length && c[h + 1].type === 'text'; )
                            ((A = c[++h]),
                                (x +=
                                    `
` + this.renderer.text(A)))
                        o
                            ? (f += this.renderer.paragraph({
                                  type: 'paragraph',
                                  raw: x,
                                  text: x,
                                  tokens: [
                                      {
                                          type: 'text',
                                          raw: x,
                                          text: x,
                                          escaped: !0,
                                      },
                                  ],
                              }))
                            : (f += x)
                        continue
                    }
                    default: {
                        const A =
                            'Token with "' + b.type + '" type was not found.'
                        if (this.options.silent) return (console.error(A), '')
                        throw new Error(A)
                    }
                }
            }
            return f
        }
        parseInline(c, o = this.renderer) {
            let f = ''
            for (let h = 0; h < c.length; h++) {
                const g = c[h]
                if (this.options.extensions?.renderers?.[g.type]) {
                    const A = this.options.extensions.renderers[g.type].call(
                        { parser: this },
                        g
                    )
                    if (
                        A !== !1 ||
                        ![
                            'escape',
                            'html',
                            'link',
                            'image',
                            'strong',
                            'em',
                            'codespan',
                            'br',
                            'del',
                            'text',
                        ].includes(g.type)
                    ) {
                        f += A || ''
                        continue
                    }
                }
                const b = g
                switch (b.type) {
                    case 'escape': {
                        f += o.text(b)
                        break
                    }
                    case 'html': {
                        f += o.html(b)
                        break
                    }
                    case 'link': {
                        f += o.link(b)
                        break
                    }
                    case 'image': {
                        f += o.image(b)
                        break
                    }
                    case 'strong': {
                        f += o.strong(b)
                        break
                    }
                    case 'em': {
                        f += o.em(b)
                        break
                    }
                    case 'codespan': {
                        f += o.codespan(b)
                        break
                    }
                    case 'br': {
                        f += o.br(b)
                        break
                    }
                    case 'del': {
                        f += o.del(b)
                        break
                    }
                    case 'text': {
                        f += o.text(b)
                        break
                    }
                    default: {
                        const A =
                            'Token with "' + b.type + '" type was not found.'
                        if (this.options.silent) return (console.error(A), '')
                        throw new Error(A)
                    }
                }
            }
            return f
        }
    },
    Pu = class {
        options
        block
        constructor(r) {
            this.options = r || $l
        }
        static passThroughHooks = new Set([
            'preprocess',
            'postprocess',
            'processAllTokens',
        ])
        preprocess(r) {
            return r
        }
        postprocess(r) {
            return r
        }
        processAllTokens(r) {
            return r
        }
        provideLexer() {
            return this.block ? el.lex : el.lexInline
        }
        provideParser() {
            return this.block ? ll.parse : ll.parseInline
        }
    },
    jg = class {
        defaults = qf()
        options = this.setOptions
        parse = this.parseMarkdown(!0)
        parseInline = this.parseMarkdown(!1)
        Parser = ll
        Renderer = li
        TextRenderer = Zf
        Lexer = el
        Tokenizer = ei
        Hooks = Pu
        constructor(...r) {
            this.use(...r)
        }
        walkTokens(r, c) {
            let o = []
            for (const f of r)
                switch (((o = o.concat(c.call(this, f))), f.type)) {
                    case 'table': {
                        const h = f
                        for (const g of h.header)
                            o = o.concat(this.walkTokens(g.tokens, c))
                        for (const g of h.rows)
                            for (const b of g)
                                o = o.concat(this.walkTokens(b.tokens, c))
                        break
                    }
                    case 'list': {
                        const h = f
                        o = o.concat(this.walkTokens(h.items, c))
                        break
                    }
                    default: {
                        const h = f
                        this.defaults.extensions?.childTokens?.[h.type]
                            ? this.defaults.extensions.childTokens[
                                  h.type
                              ].forEach((g) => {
                                  const b = h[g].flat(1 / 0)
                                  o = o.concat(this.walkTokens(b, c))
                              })
                            : h.tokens &&
                              (o = o.concat(this.walkTokens(h.tokens, c)))
                    }
                }
            return o
        }
        use(...r) {
            const c = this.defaults.extensions || {
                renderers: {},
                childTokens: {},
            }
            return (
                r.forEach((o) => {
                    const f = { ...o }
                    if (
                        ((f.async = this.defaults.async || f.async || !1),
                        o.extensions &&
                            (o.extensions.forEach((h) => {
                                if (!h.name)
                                    throw new Error('extension name required')
                                if ('renderer' in h) {
                                    const g = c.renderers[h.name]
                                    g
                                        ? (c.renderers[h.name] = function (
                                              ...b
                                          ) {
                                              let A = h.renderer.apply(this, b)
                                              return (
                                                  A === !1 &&
                                                      (A = g.apply(this, b)),
                                                  A
                                              )
                                          })
                                        : (c.renderers[h.name] = h.renderer)
                                }
                                if ('tokenizer' in h) {
                                    if (
                                        !h.level ||
                                        (h.level !== 'block' &&
                                            h.level !== 'inline')
                                    )
                                        throw new Error(
                                            "extension level must be 'block' or 'inline'"
                                        )
                                    const g = c[h.level]
                                    ;(g
                                        ? g.unshift(h.tokenizer)
                                        : (c[h.level] = [h.tokenizer]),
                                        h.start &&
                                            (h.level === 'block'
                                                ? c.startBlock
                                                    ? c.startBlock.push(h.start)
                                                    : (c.startBlock = [h.start])
                                                : h.level === 'inline' &&
                                                  (c.startInline
                                                      ? c.startInline.push(
                                                            h.start
                                                        )
                                                      : (c.startInline = [
                                                            h.start,
                                                        ]))))
                                }
                                'childTokens' in h &&
                                    h.childTokens &&
                                    (c.childTokens[h.name] = h.childTokens)
                            }),
                            (f.extensions = c)),
                        o.renderer)
                    ) {
                        const h =
                            this.defaults.renderer || new li(this.defaults)
                        for (const g in o.renderer) {
                            if (!(g in h))
                                throw new Error(
                                    `renderer '${g}' does not exist`
                                )
                            if (['options', 'parser'].includes(g)) continue
                            const b = g,
                                A = o.renderer[b],
                                x = h[b]
                            h[b] = (...p) => {
                                let U = A.apply(h, p)
                                return (
                                    U === !1 && (U = x.apply(h, p)),
                                    U || ''
                                )
                            }
                        }
                        f.renderer = h
                    }
                    if (o.tokenizer) {
                        const h =
                            this.defaults.tokenizer || new ei(this.defaults)
                        for (const g in o.tokenizer) {
                            if (!(g in h))
                                throw new Error(
                                    `tokenizer '${g}' does not exist`
                                )
                            if (['options', 'rules', 'lexer'].includes(g))
                                continue
                            const b = g,
                                A = o.tokenizer[b],
                                x = h[b]
                            h[b] = (...p) => {
                                let U = A.apply(h, p)
                                return (U === !1 && (U = x.apply(h, p)), U)
                            }
                        }
                        f.tokenizer = h
                    }
                    if (o.hooks) {
                        const h = this.defaults.hooks || new Pu()
                        for (const g in o.hooks) {
                            if (!(g in h))
                                throw new Error(`hook '${g}' does not exist`)
                            if (['options', 'block'].includes(g)) continue
                            const b = g,
                                A = o.hooks[b],
                                x = h[b]
                            Pu.passThroughHooks.has(g)
                                ? (h[b] = (p) => {
                                      if (this.defaults.async)
                                          return Promise.resolve(
                                              A.call(h, p)
                                          ).then((N) => x.call(h, N))
                                      const U = A.call(h, p)
                                      return x.call(h, U)
                                  })
                                : (h[b] = (...p) => {
                                      let U = A.apply(h, p)
                                      return (
                                          U === !1 && (U = x.apply(h, p)),
                                          U
                                      )
                                  })
                        }
                        f.hooks = h
                    }
                    if (o.walkTokens) {
                        const h = this.defaults.walkTokens,
                            g = o.walkTokens
                        f.walkTokens = function (b) {
                            let A = []
                            return (
                                A.push(g.call(this, b)),
                                h && (A = A.concat(h.call(this, b))),
                                A
                            )
                        }
                    }
                    this.defaults = { ...this.defaults, ...f }
                }),
                this
            )
        }
        setOptions(r) {
            return ((this.defaults = { ...this.defaults, ...r }), this)
        }
        lexer(r, c) {
            return el.lex(r, c ?? this.defaults)
        }
        parser(r, c) {
            return ll.parse(r, c ?? this.defaults)
        }
        parseMarkdown(r) {
            return (o, f) => {
                const h = { ...f },
                    g = { ...this.defaults, ...h },
                    b = this.onError(!!g.silent, !!g.async)
                if (this.defaults.async === !0 && h.async === !1)
                    return b(
                        new Error(
                            'marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.'
                        )
                    )
                if (typeof o > 'u' || o === null)
                    return b(
                        new Error(
                            'marked(): input parameter is undefined or null'
                        )
                    )
                if (typeof o != 'string')
                    return b(
                        new Error(
                            'marked(): input parameter is of type ' +
                                Object.prototype.toString.call(o) +
                                ', string expected'
                        )
                    )
                g.hooks && ((g.hooks.options = g), (g.hooks.block = r))
                const A = g.hooks
                        ? g.hooks.provideLexer()
                        : r
                          ? el.lex
                          : el.lexInline,
                    x = g.hooks
                        ? g.hooks.provideParser()
                        : r
                          ? ll.parse
                          : ll.parseInline
                if (g.async)
                    return Promise.resolve(g.hooks ? g.hooks.preprocess(o) : o)
                        .then((p) => A(p, g))
                        .then((p) =>
                            g.hooks ? g.hooks.processAllTokens(p) : p
                        )
                        .then((p) =>
                            g.walkTokens
                                ? Promise.all(
                                      this.walkTokens(p, g.walkTokens)
                                  ).then(() => p)
                                : p
                        )
                        .then((p) => x(p, g))
                        .then((p) => (g.hooks ? g.hooks.postprocess(p) : p))
                        .catch(b)
                try {
                    g.hooks && (o = g.hooks.preprocess(o))
                    let p = A(o, g)
                    ;(g.hooks && (p = g.hooks.processAllTokens(p)),
                        g.walkTokens && this.walkTokens(p, g.walkTokens))
                    let U = x(p, g)
                    return (g.hooks && (U = g.hooks.postprocess(U)), U)
                } catch (p) {
                    return b(p)
                }
            }
        }
        onError(r, c) {
            return (o) => {
                if (
                    ((o.message += `
Please report this to https://github.com/markedjs/marked.`),
                    r)
                ) {
                    const f =
                        '<p>An error occurred:</p><pre>' +
                        He(o.message + '', !0) +
                        '</pre>'
                    return c ? Promise.resolve(f) : f
                }
                if (c) return Promise.reject(o)
                throw o
            }
        }
    },
    Jl = new jg()
function ot(r, c) {
    return Jl.parse(r, c)
}
ot.options = ot.setOptions = function (r) {
    return (Jl.setOptions(r), (ot.defaults = Jl.defaults), rd(ot.defaults), ot)
}
ot.getDefaults = qf
ot.defaults = $l
ot.use = function (...r) {
    return (Jl.use(...r), (ot.defaults = Jl.defaults), rd(ot.defaults), ot)
}
ot.walkTokens = function (r, c) {
    return Jl.walkTokens(r, c)
}
ot.parseInline = Jl.parseInline
ot.Parser = ll
ot.parser = ll.parse
ot.Renderer = li
ot.TextRenderer = Zf
ot.Lexer = el
ot.lexer = el.lex
ot.Tokenizer = ei
ot.Hooks = Pu
ot.parse = ot
ot.options
ot.setOptions
ot.use
ot.walkTokens
ot.parseInline
ll.parse
el.lex
const Rf = {
        command: 'prompt "Who is Damian Poole?"',
        prompt: {
            path: 'damianpoole.com',
            branch: 'main',
            nodeVersion: 'v22.11.0',
        },
        output: `
# Damian Poole
**Full Stack Engineer / DevOps / Allotment Novice**

Damian is a UK-based software engineer who has been building for the web since the **IE6 era**. He has survived the "Browser Wars," the rise and fall of jQuery, and more "revolutionary" JavaScript frameworks than he cares to admit. With 20 years in the game, he’s seen it all—and usually has the scars to prove it.

### The System Log
* **The Day Job:** Currently navigating the complexities of **Full Stack and DevOps** at [AND Digital](https://www.and.digital/). He spends his time orchestrating **Azure/AWS** infrastructure with **Terraform**, wrestling with **GitHub Actions**, and writing **TypeScript/React** that (mostly) works on the first try.
* **The Philosophy:** A **Stoic Pragmatist**. He believes a simple solution that ships is infinitely superior to a "perfect" one that lives forever in a Jira backlog. 
* **The Hot Take:** He maintains that modern Agile is largely a collection of expensive meetings that slows down real progress.
### Known Vulnerabilities & Interests
* **Neovim Obsession:** Spends an irrational amount of time "optimizing" a text editor that was already perfect in the 90s. He’s recently moved his entire life into **obsidian.nvim** because Notion felt too "user-friendly."
* **Side Projects:** Currently building an indie game in **PhaserJS**. It’s a humbling reminder that moving a sprite across a screen is sometimes more complex than managing a microservice.
* **The Great Outdoors:** When he isn't staring at a terminal, he's likely hiking in **Northumberland**, snowboarding, or losing a battle against weeds at his **allotment**.

### Technical Metadata
* **Modern:** React, Next.js, Svelte, Vitest, Azure, AWS, K8s, AI Tooling.
* **Vintage:** C#, .NET, MongoDB, Jenkins, and the dark art of CSS hacks for Internet Explorer.

### Contact
* [github.com/damianpoole](https://github.com/damianpoole)
* [linkedin.com/in/damianpoole](https://linkedin.com/in/damianpoole)
* Email: damian.poole@gmail.com

> The goal is to solve the problem, not to win an argument about the solution.
`,
    },
    Yg = ({ path: r, branch: c, nodeVersion: o }) =>
        $.jsxs('div', {
            className: 'mb-2 flex flex-wrap items-center gap-x-2 gap-y-1',
            children: [
                $.jsx('span', {
                    className: 'font-bold text-cat-blue',
                    children: '~',
                }),
                $.jsx('span', {
                    className: 'text-cat-subtext0',
                    children: '/',
                }),
                $.jsx('span', {
                    className: 'font-bold text-cat-teal',
                    children: r,
                }),
                $.jsx('span', {
                    className: 'text-cat-subtext0',
                    children: 'on',
                }),
                $.jsxs('div', {
                    className: 'flex items-center gap-1',
                    children: [
                        $.jsxs('svg', {
                            className: 'h-5 w-5 text-cat-blue',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            stroke: 'currentColor',
                            strokeWidth: '2.5',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            children: [
                                $.jsx('line', {
                                    x1: '6',
                                    y1: '3',
                                    x2: '6',
                                    y2: '15',
                                }),
                                $.jsx('circle', { cx: '18', cy: '6', r: '3' }),
                                $.jsx('circle', { cx: '6', cy: '18', r: '3' }),
                                $.jsx('path', { d: 'M18 9a9 9 0 0 1-9 9' }),
                            ],
                        }),
                        $.jsx('span', {
                            className: 'font-bold text-cat-blue',
                            children: c,
                        }),
                    ],
                }),
                $.jsx('span', {
                    className: 'text-cat-subtext0',
                    children: 'via',
                }),
                $.jsxs('div', {
                    className: 'flex items-center gap-1',
                    children: [
                        $.jsxs('svg', {
                            className: 'h-5 w-5 text-cat-green',
                            viewBox: '0 0 24 24',
                            fill: 'currentColor',
                            children: [
                                $.jsx('path', {
                                    d: 'M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z',
                                }),
                                $.jsx('path', {
                                    d: 'M21 7.5l-9-5.2-9 5.2v10l9 5.2 9-5.2v-10zm-9 13.7l-7.5-4.3v-8.6l7.5 4.3v8.6zm.5-9.8l-7.5-4.3 7.5-4.3 7.5 4.3-7.5 4.3z',
                                }),
                            ],
                        }),
                        $.jsx('span', {
                            className: 'font-bold text-cat-green',
                            children: o,
                        }),
                    ],
                }),
                $.jsx('span', {
                    className: 'font-bold text-cat-green',
                    children: '❯',
                }),
            ],
        }),
    kg = ({ command: r, isTyping: c }) =>
        $.jsxs('div', {
            className: 'mb-6 flex items-center gap-2',
            children: [
                $.jsx('span', {
                    className: 'font-bold text-cat-blue',
                    children: '❯',
                }),
                $.jsx('span', { className: 'text-cat-text', children: r }),
                c &&
                    $.jsx('span', {
                        className:
                            'inline-block h-6 w-3 animate-pulse bg-cat-subtext0 align-middle',
                    }),
            ],
        }),
    Gg = ({ html: r, isProcessing: c, isTyping: o }) =>
        c
            ? $.jsxs('div', {
                  className:
                      'text-cat-subtext0 animate-in fade-in mb-4 flex items-center gap-2 duration-300',
                  children: [
                      $.jsx('span', {
                          className: 'animate-spin',
                          children: '⟳',
                      }),
                      ' Processing request...',
                  ],
              })
            : $.jsxs('div', {
                  className: 'terminal-output animate-in fade-in duration-300',
                  children: [
                      $.jsx('div', {
                          className:
                              'prose prose-invert prose-lg max-w-none leading-relaxed',
                          dangerouslySetInnerHTML: { __html: r },
                      }),
                      o &&
                          $.jsx('span', {
                              className:
                                  'bg-cat-blue mt-4 inline-block h-6 w-3 animate-pulse align-middle',
                          }),
                  ],
              }),
    Qg = () => {
        const [r, c] = bt.useState(0),
            { displayText: o, isComplete: f } = ad(Rf.command, 50, 500),
            { displayText: h, isComplete: g } = ad(
                r === 2 ? Rf.output : '',
                5,
                0
            ),
            b = bt.useMemo(() => ot.parse(h), [h])
        return (
            bt.useEffect(() => {
                if (f && r === 0) {
                    const A = setTimeout(() => {
                        ;(c(1), setTimeout(() => c(2), 800))
                    }, 0)
                    return () => clearTimeout(A)
                }
            }, [f, r]),
            $.jsx('div', {
                className: 'w-full font-mono text-lg text-cat-text md:text-xl',
                children: $.jsxs('div', {
                    className: 'w-full max-w-screen-lg p-4 md:p-8',
                    children: [
                        $.jsx(Yg, { ...Rf.prompt }),
                        $.jsx(kg, { command: o, isTyping: r === 0 }),
                        (r === 1 || r === 2) &&
                            $.jsx(Gg, {
                                html: b,
                                isProcessing: r === 1,
                                isTyping: r === 2 && !g,
                            }),
                    ],
                }),
            })
        )
    }
var Lg = (r, c, o, f, h, g, b, A) => {
        let x = document.documentElement,
            p = ['light', 'dark']
        function U(Z) {
            ;((Array.isArray(r) ? r : [r]).forEach((Q) => {
                let at = Q === 'class',
                    wt = at && g ? h.map((Et) => g[Et] || Et) : h
                at
                    ? (x.classList.remove(...wt),
                      x.classList.add(g && g[Z] ? g[Z] : Z))
                    : x.setAttribute(Q, Z)
            }),
                N(Z))
        }
        function N(Z) {
            A && p.includes(Z) && (x.style.colorScheme = Z)
        }
        function H() {
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
        }
        if (f) U(f)
        else
            try {
                let Z = localStorage.getItem(c) || o,
                    Q = b && Z === 'system' ? H() : Z
                U(Q)
            } catch {}
    },
    sd = ['light', 'dark'],
    Td = '(prefers-color-scheme: dark)',
    Xg = typeof window > 'u',
    zd = bt.createContext(void 0),
    Zg = (r) =>
        bt.useContext(zd)
            ? bt.createElement(bt.Fragment, null, r.children)
            : bt.createElement(Vg, { ...r }),
    wg = ['light', 'dark'],
    Vg = ({
        forcedTheme: r,
        disableTransitionOnChange: c = !1,
        enableSystem: o = !0,
        enableColorScheme: f = !0,
        storageKey: h = 'theme',
        themes: g = wg,
        defaultTheme: b = o ? 'system' : 'light',
        attribute: A = 'data-theme',
        value: x,
        children: p,
        nonce: U,
        scriptProps: N,
    }) => {
        let [H, Z] = bt.useState(() => Jg(h, b)),
            [Q, at] = bt.useState(() => (H === 'system' ? Uf() : H)),
            wt = x ? Object.values(x) : g,
            Et = bt.useCallback(
                (ht) => {
                    let lt = ht
                    if (!lt) return
                    ht === 'system' && o && (lt = Uf())
                    let X = x ? x[lt] : lt,
                        Yt = c ? $g(U) : null,
                        Kt = document.documentElement,
                        Be = (kt) => {
                            kt === 'class'
                                ? (Kt.classList.remove(...wt),
                                  X && Kt.classList.add(X))
                                : kt.startsWith('data-') &&
                                  (X
                                      ? Kt.setAttribute(kt, X)
                                      : Kt.removeAttribute(kt))
                        }
                    if ((Array.isArray(A) ? A.forEach(Be) : Be(A), f)) {
                        let kt = sd.includes(b) ? b : null,
                            Jt = sd.includes(lt) ? lt : kt
                        Kt.style.colorScheme = Jt
                    }
                    Yt?.()
                },
                [U]
            ),
            Vt = bt.useCallback(
                (ht) => {
                    let lt = typeof ht == 'function' ? ht(H) : ht
                    Z(lt)
                    try {
                        localStorage.setItem(h, lt)
                    } catch {}
                },
                [H]
            ),
            zt = bt.useCallback(
                (ht) => {
                    let lt = Uf(ht)
                    ;(at(lt), H === 'system' && o && !r && Et('system'))
                },
                [H, r]
            )
        ;(bt.useEffect(() => {
            let ht = window.matchMedia(Td)
            return (ht.addListener(zt), zt(ht), () => ht.removeListener(zt))
        }, [zt]),
            bt.useEffect(() => {
                let ht = (lt) => {
                    lt.key === h && (lt.newValue ? Z(lt.newValue) : Vt(b))
                }
                return (
                    window.addEventListener('storage', ht),
                    () => window.removeEventListener('storage', ht)
                )
            }, [Vt]),
            bt.useEffect(() => {
                Et(r ?? H)
            }, [r, H]))
        let jt = bt.useMemo(
            () => ({
                theme: H,
                setTheme: Vt,
                forcedTheme: r,
                resolvedTheme: H === 'system' ? Q : H,
                themes: o ? [...g, 'system'] : g,
                systemTheme: o ? Q : void 0,
            }),
            [H, Vt, r, Q, o, g]
        )
        return bt.createElement(
            zd.Provider,
            { value: jt },
            bt.createElement(Kg, {
                forcedTheme: r,
                storageKey: h,
                attribute: A,
                enableSystem: o,
                enableColorScheme: f,
                defaultTheme: b,
                value: x,
                themes: g,
                nonce: U,
                scriptProps: N,
            }),
            p
        )
    },
    Kg = bt.memo(
        ({
            forcedTheme: r,
            storageKey: c,
            attribute: o,
            enableSystem: f,
            enableColorScheme: h,
            defaultTheme: g,
            value: b,
            themes: A,
            nonce: x,
            scriptProps: p,
        }) => {
            let U = JSON.stringify([o, c, g, r, A, b, f, h]).slice(1, -1)
            return bt.createElement('script', {
                ...p,
                suppressHydrationWarning: !0,
                nonce: typeof window > 'u' ? x : '',
                dangerouslySetInnerHTML: { __html: `(${Lg.toString()})(${U})` },
            })
        }
    ),
    Jg = (r, c) => {
        if (Xg) return
        let o
        try {
            o = localStorage.getItem(r) || void 0
        } catch {}
        return o || c
    },
    $g = (r) => {
        let c = document.createElement('style')
        return (
            r && c.setAttribute('nonce', r),
            c.appendChild(
                document.createTextNode(
                    '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
                )
            ),
            document.head.appendChild(c),
            () => {
                ;(window.getComputedStyle(document.body),
                    setTimeout(() => {
                        document.head.removeChild(c)
                    }, 1))
            }
        )
    },
    Uf = (r) => (r || (r = window.matchMedia(Td)), r.matches ? 'dark' : 'light')
function Wg({ children: r, ...c }) {
    return $.jsx(Zg, { ...c, children: r })
}
function Fg() {
    return $.jsx(Wg, {
        attribute: 'class',
        defaultTheme: 'system',
        enableSystem: !0,
        disableTransitionOnChange: !0,
        children: $.jsx('div', {
            className:
                'min-h-screen w-full bg-[#303446] text-[#c6d0f5] flex flex-col',
            children: $.jsx(Qg, {}),
        }),
    })
}
eg.createRoot(document.getElementById('root')).render(
    $.jsx(bt.StrictMode, { children: $.jsx(Fg, {}) })
)
