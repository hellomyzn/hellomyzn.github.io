/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright 2008-2020 Brian Turek, 1998-2009 Paul Johnston & Contributors
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information
*/
"use strict";
(function (K) {
  function w(c, a, d) {
    var g = 0,
      b = [],
      h = 0,
      e,
      k,
      n,
      f,
      l,
      q,
      y,
      p,
      m = !1,
      t = [],
      r = [],
      u,
      z = !1;
    d = d || {};
    e = d.encoding || "UTF8";
    u = d.numRounds || 1;
    if (u !== parseInt(u, 10) || 1 > u)
      throw Error("numRounds must a integer >= 1");
    if (0 === c.lastIndexOf("SHA-", 0))
      if (
        ((q = function (a, b) {
          return A(a, b, c);
        }),
        (y = function (a, b, g, h) {
          var d, e;
          if ("SHA-224" === c || "SHA-256" === c)
            (d = (((b + 65) >>> 9) << 4) + 15), (e = 16);
          else throw Error("Unexpected error in SHA-2 implementation");
          for (; a.length <= d; ) a.push(0);
          a[b >>> 5] |= 128 << (24 - (b % 32));
          b = b + g;
          a[d] = b & 4294967295;
          a[d - 1] = (b / 4294967296) | 0;
          g = a.length;
          for (b = 0; b < g; b += e) h = A(a.slice(b, b + e), h, c);
          if ("SHA-224" === c) a = [h[0], h[1], h[2], h[3], h[4], h[5], h[6]];
          else if ("SHA-256" === c) a = h;
          else throw Error("Unexpected error in SHA-2 implementation");
          return a;
        }),
        (p = function (b) {
          return b.slice();
        }),
        "SHA-224" === c)
      )
        (l = 512), (f = 224);
      else if ("SHA-256" === c) (l = 512), (f = 256);
      else throw Error("Chosen SHA variant is not supported");
    else throw Error("Chosen SHA variant is not supported");
    n = B(a, e);
    k = x(c);
    this.setHMACKey = function (b, a, h) {
      var d;
      if (!0 === m) throw Error("HMAC key already set");
      if (!0 === z) throw Error("Cannot set HMAC key after calling update");
      e = (h || {}).encoding || "UTF8";
      a = B(a, e)(b);
      b = a.binLen;
      a = a.value;
      d = l >>> 3;
      h = d / 4 - 1;
      for (d < b / 8 && (a = y(a, b, 0, x(c))); a.length <= h; ) a.push(0);
      for (b = 0; b <= h; b += 1)
        (t[b] = a[b] ^ 909522486), (r[b] = a[b] ^ 1549556828);
      k = q(t, k);
      g = l;
      m = !0;
    };
    this.update = function (a) {
      var c,
        d,
        e,
        f = 0,
        p = l >>> 5;
      c = n(a, b, h);
      a = c.binLen;
      d = c.value;
      c = a >>> 5;
      for (e = 0; e < c; e += p)
        f + l <= a && ((k = q(d.slice(e, e + p), k)), (f += l));
      g += f;
      b = d.slice(f >>> 5);
      h = a % l;
      z = !0;
    };
    this.getHash = function (a, d) {
      var e, l, n, q;
      if (!0 === m) throw Error("Cannot call getHash after setting HMAC key");
      n = C(d);
      switch (a) {
        case "HEX":
          e = function (a) {
            return D(a, f, n);
          };
          break;
        case "B64":
          e = function (a) {
            return E(a, f, n);
          };
          break;
        case "BYTES":
          e = function (a) {
            return F(a, f);
          };
          break;
        case "ARRAYBUFFER":
          try {
            l = new ArrayBuffer(0);
          } catch (v) {
            throw Error("ARRAYBUFFER not supported by this environment");
          }
          e = function (a) {
            return G(a, f);
          };
          break;
        case "UINT8ARRAY":
          try {
            l = new Uint8Array(0);
          } catch (v) {
            throw Error("UINT8ARRAY not supported by this environment");
          }
          e = function (a) {
            return H(a, f);
          };
          break;
        default:
          throw Error(
            "format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY"
          );
      }
      q = y(b.slice(), h, g, p(k));
      for (l = 1; l < u; l += 1) q = y(q, f, 0, x(c));
      return e(q);
    };
    this.getHMAC = function (a, e) {
      var d, n, t, u;
      if (!1 === m)
        throw Error("Cannot call getHMAC without first setting HMAC key");
      t = C(e);
      switch (a) {
        case "HEX":
          d = function (a) {
            return D(a, f, t);
          };
          break;
        case "B64":
          d = function (a) {
            return E(a, f, t);
          };
          break;
        case "BYTES":
          d = function (a) {
            return F(a, f);
          };
          break;
        case "ARRAYBUFFER":
          try {
            d = new ArrayBuffer(0);
          } catch (v) {
            throw Error("ARRAYBUFFER not supported by this environment");
          }
          d = function (a) {
            return G(a, f);
          };
          break;
        case "UINT8ARRAY":
          try {
            d = new Uint8Array(0);
          } catch (v) {
            throw Error("UINT8ARRAY not supported by this environment");
          }
          d = function (a) {
            return H(a, f);
          };
          break;
        default:
          throw Error(
            "outputFormat must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY"
          );
      }
      n = y(b.slice(), h, g, p(k));
      u = q(r, x(c));
      u = y(n, f, l, u);
      return d(u);
    };
  }
  function m() {}
  function I(c, a, d) {
    var g, b, h, e;
    a = a || [0];
    d = d || 0;
    b = d >>> 3;
    for (g = 0; g < c.length; g += 1)
      (e = g + b),
        (h = e >>> 2),
        a.length <= h && a.push(0),
        (a[h] |= c[g] << (8 * (3 + (e % 4) * -1)));
    return { value: a, binLen: 8 * c.length + d };
  }
  function D(c, a, d) {
    var g = "";
    a /= 8;
    var b, h;
    for (b = 0; b < a; b += 1)
      (h = c[b >>> 2] >>> (8 * (3 + (b % 4) * -1))),
        (g +=
          "0123456789abcdef".charAt((h >>> 4) & 15) +
          "0123456789abcdef".charAt(h & 15));
    return d.outputUpper ? g.toUpperCase() : g;
  }
  function E(c, a, d) {
    var g = "",
      b = a / 8,
      h,
      e,
      k;
    for (h = 0; h < b; h += 3)
      for (
        e = h + 1 < b ? c[(h + 1) >>> 2] : 0,
          k = h + 2 < b ? c[(h + 2) >>> 2] : 0,
          k =
            (((c[h >>> 2] >>> (8 * (3 + (h % 4) * -1))) & 255) << 16) |
            (((e >>> (8 * (3 + ((h + 1) % 4) * -1))) & 255) << 8) |
            ((k >>> (8 * (3 + ((h + 2) % 4) * -1))) & 255),
          e = 0;
        4 > e;
        e += 1
      )
        8 * h + 6 * e <= a
          ? (g +=
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                (k >>> (6 * (3 - e))) & 63
              ))
          : (g += d.b64Pad);
    return g;
  }
  function F(c, a) {
    var d = "",
      g = a / 8,
      b,
      h;
    for (b = 0; b < g; b += 1)
      (h = (c[b >>> 2] >>> (8 * (3 + (b % 4) * -1))) & 255),
        (d += String.fromCharCode(h));
    return d;
  }
  function G(c, a) {
    var d = a / 8,
      g,
      b = new ArrayBuffer(d),
      h;
    h = new Uint8Array(b);
    for (g = 0; g < d; g += 1)
      h[g] = (c[g >>> 2] >>> (8 * (3 + (g % 4) * -1))) & 255;
    return b;
  }
  function H(c, a) {
    var d = a / 8,
      g,
      b = new Uint8Array(d);
    for (g = 0; g < d; g += 1)
      b[g] = (c[g >>> 2] >>> (8 * (3 + (g % 4) * -1))) & 255;
    return b;
  }
  function C(c) {
    var a = { outputUpper: !1, b64Pad: "=", shakeLen: -1 };
    c = c || {};
    a.outputUpper = c.outputUpper || !1;
    !0 === c.hasOwnProperty("b64Pad") && (a.b64Pad = c.b64Pad);
    if ("boolean" !== typeof a.outputUpper)
      throw Error("Invalid outputUpper formatting option");
    if ("string" !== typeof a.b64Pad)
      throw Error("Invalid b64Pad formatting option");
    return a;
  }
  function B(c, a) {
    var d;
    switch (a) {
      case "UTF8":
      case "UTF16BE":
      case "UTF16LE":
        break;
      default:
        throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
    }
    switch (c) {
      case "HEX":
        d = function (a, b, c) {
          var d = a.length,
            k,
            n,
            f,
            l,
            q;
          if (0 !== d % 2)
            throw Error("String of HEX type must be in byte increments");
          b = b || [0];
          c = c || 0;
          q = c >>> 3;
          for (k = 0; k < d; k += 2) {
            n = parseInt(a.substr(k, 2), 16);
            if (isNaN(n))
              throw Error("String of HEX type contains invalid characters");
            l = (k >>> 1) + q;
            for (f = l >>> 2; b.length <= f; ) b.push(0);
            b[f] |= n << (8 * (3 + (l % 4) * -1));
          }
          return { value: b, binLen: 4 * d + c };
        };
        break;
      case "TEXT":
        d = function (c, b, d) {
          var e,
            k,
            n = 0,
            f,
            l,
            q,
            m,
            p,
            r;
          b = b || [0];
          d = d || 0;
          q = d >>> 3;
          if ("UTF8" === a)
            for (r = 3, f = 0; f < c.length; f += 1)
              for (
                e = c.charCodeAt(f),
                  k = [],
                  128 > e
                    ? k.push(e)
                    : 2048 > e
                    ? (k.push(192 | (e >>> 6)), k.push(128 | (e & 63)))
                    : 55296 > e || 57344 <= e
                    ? k.push(
                        224 | (e >>> 12),
                        128 | ((e >>> 6) & 63),
                        128 | (e & 63)
                      )
                    : ((f += 1),
                      (e =
                        65536 +
                        (((e & 1023) << 10) | (c.charCodeAt(f) & 1023))),
                      k.push(
                        240 | (e >>> 18),
                        128 | ((e >>> 12) & 63),
                        128 | ((e >>> 6) & 63),
                        128 | (e & 63)
                      )),
                  l = 0;
                l < k.length;
                l += 1
              ) {
                p = n + q;
                for (m = p >>> 2; b.length <= m; ) b.push(0);
                b[m] |= k[l] << (8 * (r + (p % 4) * -1));
                n += 1;
              }
          else if ("UTF16BE" === a || "UTF16LE" === a)
            for (
              r = 2,
                k = ("UTF16LE" === a && !0) || ("UTF16LE" !== a && !1),
                f = 0;
              f < c.length;
              f += 1
            ) {
              e = c.charCodeAt(f);
              !0 === k && ((l = e & 255), (e = (l << 8) | (e >>> 8)));
              p = n + q;
              for (m = p >>> 2; b.length <= m; ) b.push(0);
              b[m] |= e << (8 * (r + (p % 4) * -1));
              n += 2;
            }
          return { value: b, binLen: 8 * n + d };
        };
        break;
      case "B64":
        d = function (a, b, c) {
          var d = 0,
            k,
            n,
            f,
            l,
            q,
            m,
            p;
          if (-1 === a.search(/^[a-zA-Z0-9=+\/]+$/))
            throw Error("Invalid character in base-64 string");
          n = a.indexOf("=");
          a = a.replace(/\=/g, "");
          if (-1 !== n && n < a.length)
            throw Error("Invalid '=' found in base-64 string");
          b = b || [0];
          c = c || 0;
          m = c >>> 3;
          for (n = 0; n < a.length; n += 4) {
            q = a.substr(n, 4);
            for (f = l = 0; f < q.length; f += 1)
              (k =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                  q.charAt(f)
                )),
                (l |= k << (18 - 6 * f));
            for (f = 0; f < q.length - 1; f += 1) {
              p = d + m;
              for (k = p >>> 2; b.length <= k; ) b.push(0);
              b[k] |= ((l >>> (16 - 8 * f)) & 255) << (8 * (3 + (p % 4) * -1));
              d += 1;
            }
          }
          return { value: b, binLen: 8 * d + c };
        };
        break;
      case "BYTES":
        d = function (a, b, c) {
          var d, k, n, f, l;
          b = b || [0];
          c = c || 0;
          n = c >>> 3;
          for (k = 0; k < a.length; k += 1)
            (d = a.charCodeAt(k)),
              (l = k + n),
              (f = l >>> 2),
              b.length <= f && b.push(0),
              (b[f] |= d << (8 * (3 + (l % 4) * -1)));
          return { value: b, binLen: 8 * a.length + c };
        };
        break;
      case "ARRAYBUFFER":
        try {
          d = new ArrayBuffer(0);
        } catch (g) {
          throw Error("ARRAYBUFFER not supported by this environment");
        }
        d = function (a, b, c) {
          return I(new Uint8Array(a), b, c);
        };
        break;
      case "UINT8ARRAY":
        try {
          d = new Uint8Array(0);
        } catch (g) {
          throw Error("UINT8ARRAY not supported by this environment");
        }
        d = function (a, b, c) {
          return I(a, b, c);
        };
        break;
      default:
        throw Error(
          "format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY"
        );
    }
    return d;
  }
  function r(c, a) {
    return (c >>> a) | (c << (32 - a));
  }
  function L(c, a, d) {
    return (c & a) ^ (~c & d);
  }
  function M(c, a, d) {
    return (c & a) ^ (c & d) ^ (a & d);
  }
  function N(c) {
    return r(c, 2) ^ r(c, 13) ^ r(c, 22);
  }
  function O(c) {
    return r(c, 6) ^ r(c, 11) ^ r(c, 25);
  }
  function P(c) {
    return r(c, 7) ^ r(c, 18) ^ (c >>> 3);
  }
  function Q(c) {
    return r(c, 17) ^ r(c, 19) ^ (c >>> 10);
  }
  function R(c, a) {
    var d = (c & 65535) + (a & 65535);
    return (
      ((((c >>> 16) + (a >>> 16) + (d >>> 16)) & 65535) << 16) | (d & 65535)
    );
  }
  function S(c, a, d, g) {
    var b = (c & 65535) + (a & 65535) + (d & 65535) + (g & 65535);
    return (
      ((((c >>> 16) + (a >>> 16) + (d >>> 16) + (g >>> 16) + (b >>> 16)) &
        65535) <<
        16) |
      (b & 65535)
    );
  }
  function T(c, a, d, g, b) {
    var h = (c & 65535) + (a & 65535) + (d & 65535) + (g & 65535) + (b & 65535);
    return (
      ((((c >>> 16) +
        (a >>> 16) +
        (d >>> 16) +
        (g >>> 16) +
        (b >>> 16) +
        (h >>> 16)) &
        65535) <<
        16) |
      (h & 65535)
    );
  }
  function x(c) {
    var a = [],
      d;
    if (0 === c.lastIndexOf("SHA-", 0))
      switch (
        ((a = [
          3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
          1694076839, 3204075428,
        ]),
        (d = [
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        c)
      ) {
        case "SHA-224":
          break;
        case "SHA-256":
          a = d;
          break;
        case "SHA-384":
          a = [
            new m(),
            new m(),
            new m(),
            new m(),
            new m(),
            new m(),
            new m(),
            new m(),
          ];
          break;
        case "SHA-512":
          a = [
            new m(),
            new m(),
            new m(),
            new m(),
            new m(),
            new m(),
            new m(),
            new m(),
          ];
          break;
        default:
          throw Error("Unknown SHA variant");
      }
    else throw Error("No SHA variants supported");
    return a;
  }
  function A(c, a, d) {
    var g,
      b,
      h,
      e,
      k,
      n,
      f,
      l,
      m,
      r,
      p,
      w,
      t,
      x,
      u,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      v = [],
      G;
    if ("SHA-224" === d || "SHA-256" === d)
      (r = 64),
        (w = 1),
        (F = Number),
        (t = R),
        (x = S),
        (u = T),
        (z = P),
        (A = Q),
        (B = N),
        (C = O),
        (E = M),
        (D = L),
        (G = J);
    else throw Error("Unexpected error in SHA-2 implementation");
    d = a[0];
    g = a[1];
    b = a[2];
    h = a[3];
    e = a[4];
    k = a[5];
    n = a[6];
    f = a[7];
    for (p = 0; p < r; p += 1)
      16 > p
        ? ((m = p * w),
          (l = c.length <= m ? 0 : c[m]),
          (m = c.length <= m + 1 ? 0 : c[m + 1]),
          (v[p] = new F(l, m)))
        : (v[p] = x(A(v[p - 2]), v[p - 7], z(v[p - 15]), v[p - 16])),
        (l = u(f, C(e), D(e, k, n), G[p], v[p])),
        (m = t(B(d), E(d, g, b))),
        (f = n),
        (n = k),
        (k = e),
        (e = t(h, l)),
        (h = b),
        (b = g),
        (g = d),
        (d = t(l, m));
    a[0] = t(d, a[0]);
    a[1] = t(g, a[1]);
    a[2] = t(b, a[2]);
    a[3] = t(h, a[3]);
    a[4] = t(e, a[4]);
    a[5] = t(k, a[5]);
    a[6] = t(n, a[6]);
    a[7] = t(f, a[7]);
    return a;
  }
  var J;
  J = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
  "function" === typeof define && define.amd
    ? define(function () {
        return w;
      })
    : "undefined" !== typeof exports
    ? ("undefined" !== typeof module && module.exports && (module.exports = w),
      (exports = w))
    : (K.jsSHA = w);
})(this);
