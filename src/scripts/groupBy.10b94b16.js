import { b as s } from "./_baseAssignValue.32afc38d.js";
import { bL as b, bM as f, bN as p } from "./index.61feb879.js";
function u(r, n, t, e) {
    for (var o = -1, a = r == null ? 0 : r.length; ++o < a; ) {
        var g = r[o];
        n(e, g, t(g), r);
    }
    return e;
}
function c(r, n, t, e) {
    return (
        b(r, function (o, a, g) {
            n(e, o, t(o), g);
        }),
        e
    );
}
function i(r, n) {
    return function (t, e) {
        var o = f(t) ? u : c,
            a = n ? n() : {};
        return o(t, r, p(e), a);
    };
}
var h = Object.prototype,
    A = h.hasOwnProperty,
    v = i(function (r, n, t) {
        A.call(r, t) ? r[t].push(n) : s(r, t, [n]);
    }),
    y = v;
export { y as g };
