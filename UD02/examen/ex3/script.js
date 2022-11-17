let a = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
let b = a.split(",");

for(i = 0; i < b.length; i++) {
    console.log((i + 1) + " - " + b[i].trim());
}

for(i = 0; i < b.length; i++) {
    console.log((i + 1 + 26) + " - a" + b[i].trim());
}