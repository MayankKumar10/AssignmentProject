import { cw as v, r as A, q as i, cx as o, cy as E, p as N, cz as I, cA as L, O, K as V } from "./index.61feb879.js";

var p = Object.getOwnPropertySymbols;
var y = Object.prototype.hasOwnProperty,
    j = Object.prototype.propertyIsEnumerable;
var G = (e, m) => {
    var c = {};
    for (var s in e) y.call(e, s) && m.indexOf(s) < 0 && (c[s] = e[s]);
    if (e != null && p) for (var s of p(e)) m.indexOf(s) < 0 && j.call(e, s) && (c[s] = e[s]);
    return c;
};
function K(b) {
    var d = b,
        { list: e, header: m, className: c, loadingSize: s, isMakeup: h, onCallBack: u } = d,
        w = G(d, ["list", "header", "className", "loadingSize", "isMakeup", "onCallBack"]);
    const { ref: f, num: r } = v();
    A.exports.useEffect(() => {
        r && u && u(r);
    }, [r]);
    const x = s != null ? s : r;
    let n;
    if (e && e.length === 0) n = i("div", { className: "grid-list", children: i(V, {}) });
    else if (!e) n = i(o, { ref: f, num: r, className: "grid-list", children: new Array(x).fill(null).map((l, a) => i(E, {}, a)) });
    else {
        let l = 0;
        if (h) {
            const a = e.filter((g) => g.iconWide).length,
                t = (e.length + a) % r;
            l = t && r - t;
        }
        n = N(o, { ref: f, num: r, className: "grid-list", children: [e && e.map((a, t) => i(I, { data: Object.assign(a, w) }, t)), l > 0 && new Array(l).fill(null).map((a, t) => i(L, {}, t))] });
    }
    return m ? N("div", { className: O(W, c), children: [m, n] }) : n;
}
const W = "l1autedk";
export { K as G };
