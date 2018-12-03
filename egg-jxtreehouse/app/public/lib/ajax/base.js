!function () { String.prototype.replaceAll || ($.extend(String.prototype, { format: function () { var d, a = $.makeArray(arguments), b = this, c = !1; return a[0] === !0 ? (d = '<font style="color:red;font-weight:bold">', c = !0, a.shift(1)) : a[0] === !1 && (d = '<font style="color:green;font-weight:bold">', c = !0, a.shift(1)), 0 === a.length || 1 === a.length && (null === a[0] || void 0 === a[0]) ? b.replace(/\{(\w+)\}/g, "") : 1 !== a.length || "object" != typeof a[0] ? b.replace(/\{(\w+)\}/g, function (b, e) { var f = a[e]; return (null === f || void 0 === f) && (f = ""), "" !== f && c === !0 ? d + f + "</font>" : f }) : b.replace(/\{([^}]+)\}/g, function (b, e) { var f = $MT.get(a[0], e); return (null === f || void 0 === f) && (f = ""), "" !== f && c === !0 ? d + f + "</font>" : f }) }, htmlDecode: function () { var a = this; return a && ("&nbsp;" === a || "&#160;" === a || 1 === a.length && 160 === a.charCodeAt(0)) ? "" : a ? String(a).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&") : a }, htmlEncode: function () { var a = this; return a ? String(a).replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : a }, encode: function () { var d, e, f, a = this, b = a.length, c = []; for (e = 0; b > e; e++)if (d = a.charCodeAt(e), d > 255) { for (tmp = d.toString(16), f = tmp.length; 4 > f; f++)tmp = "0" + tmp; c.push("^" + tmp) } else if (48 > d || d > 57 && 65 > d || d > 90 && 97 > d || d > 122) { for (tmp = d.toString(16), f = tmp.length; 2 > f; f++)tmp = "0" + tmp; c.push("~" + tmp) } else c.push(a.charAt(e)); return c.join("") }, decode: function () { var d, e, a = this, b = a.length, c = []; for (e = 0; b > e; e++)switch (d = a.charAt(e)) { case "~": d = a.substring(e + 1, e + 3), d = parseInt(d, 16), d = String.fromCharCode(d), c.push(d), e += 2; break; case "^": d = a.substring(e + 1, e + 5), d = parseInt(d, 16), d = String.fromCharCode(d), c.push(d), e += 4; break; default: c.push(d) }return c.join("") }, lengthEx: function (a) { var b, c, d, e; if (void 0 === a || (a = !0), a) { for (b = 0, c = this, d = 0, e = c.length; e > d; d++)c.charCodeAt(d) < 27 || c.charCodeAt(d) > 126 ? b += 2 : b++; return b } return this.length }, replaceAll: function (a, b) { return this.replace(new RegExp(a, "gm"), b) }, trim: function () { return this.replace(/(^\s*)|(\s*$)/g, "") }, ltrim: function () { return this.replace(/(^\s*)/g, "") }, rtrim: function () { return this.replace(/(\s*$)/g, "") }, guid: function () { return escape(this).split(/(?:%u|%)/).join("") }, endWith: function (a) { return new RegExp(a + "$").test(this) }, startWith: function (a) { return new RegExp("^" + a).test(this) } }), $.extend(Number.prototype, { round: function (a) { return void 0 === a && (a = 0), Math.round(this * Math.pow(10, a)) / Math.pow(10, a) }, toUpperCase: function () { var e, a = this + "00", b = "千百拾亿千百拾万千百拾元角分", c = "", d = a.indexOf("."); for (d >= 0 && (a = a.substring(0, d) + a.substr(d + 1, 2)), b = b.substr(b.length - a.length), e = 0; e < a.length; e++)c += "零壹贰叁肆伍陆柒捌玖".charAt(a.charAt(e)) + b.charAt(e); return c.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整") } }), Array.prototype.reduce || (Array.prototype.reduce = function (a) { var b, c; if (0 !== this.length) { for (b = this[0], c = 1; c < this.length; c++)b = a(b, this[c]); return b } }), $.extend(Array.prototype, { each: function (a) { var b, c, d; for (b = 0, c = this.length; c > b && (d = a.call(this[b], b, this[b]), d !== !1); b++); }, indexOB: function () { var f, g, b, c, d, e, h, i, a = $.makeArray(arguments); switch (a.length) { case 0: return -1; case 1: a.unshift(!1); break; case 2: "boolean" != typeof a[0] && a.unshift(!1) }for (b = a[0], c = a[1], d = a[2], e = [], h = 0, i = this.length; i > h; h++)if ("function" == typeof c ? g = c.call(this[h], h, this[h]) : (f = void 0 !== d ? $MT.get(this[h], d) : this[h], g = c == f), g) { if (!b) return h; e.push(h) } return b ? e : -1 }, indexOfEx: function () { var f, g, b, c, d, e, h, i, a = $.makeArray(arguments); switch (a.length) { case 0: return -1; case 1: a.unshift(!1); break; case 2: "boolean" != typeof a[0] && a.unshift(!1) }for (b = a[0], c = a[1], d = a[2], e = [], h = 0, i = this.length; i > h; h++)if ("function" == typeof c ? g = c.call(this[h], h, this[h]) : (f = void 0 !== d ? $MT.get(this[h], d) : this[h], g = c === f), g) { if (!b) return h; e.push(h) } return b ? e : -1 }, joinEx: function (a, b) { var d, e, c = []; for (d = 0, e = this.length; e > d; d++)c.push($MT.get(this[d], b)); return c.join(a) }, find: function () { var f, g, b, c, d, e, h, i, a = $.makeArray(arguments); switch (a.length) { case 0: return -1; case 1: a.unshift(!1); break; case 2: "boolean" != typeof a[0] && a.unshift(!1) }for (b = a[0], c = a[1], d = a[2], e = [], h = 0, i = this.length; i > h; h++)if ("function" == typeof c ? g = c.call(this[h], h, this[h]) : (f = void 0 !== d ? $MT.get(this[h], d) : this[h], g = c == f), g === !0) { if (!b) return this[h]; e.push(this[h]) } return b ? e : void 0 }, findEx: function () { var f, g, b, c, d, e, h, i, a = $.makeArray(arguments); switch (a.length) { case 0: return -1; case 1: a.unshift(!1); break; case 2: "boolean" != typeof a[0] && a.unshift(!1) }for (b = a[0], c = a[1], d = a[2], e = [], h = 0, i = this.length; i > h; h++)if ("function" == typeof c ? g = c.call(this[h], h, this[h]) : (f = void 0 !== d ? $MT.get(this[h], d) : this[h], g = c === f), g) { if (!b) return this[h]; e.push(this[h]) } return b ? e : void 0 }, format: function (a, b, c) { var d, e, f, g; for ("string" == typeof a && (c = b, b = a, a = -1), d = [], e = 0, f = this.length; f > e; e++)g = this[e], void 0 !== c ? -1 === a ? $MT.set(g, c, b.format($MT.get(this[e], c))) : $MT.set(g, c, b.format(a, $MT.get(this[e], c))) : g = -1 === a ? b.format(g) : b.format(a, g), d.push(g); return d }, convert: function (a) { var c, d, b = []; for (c = 0, d = this.length; d > c; c++)b.push($MT.get(this[c], a)); return b }, pushEx: function (a, b, c) { var d, e; void 0 !== this && ("boolean" == typeof b && (c = b, b = null), void 0 === c && (c = !1), d = void 0 !== b ? $MT.get(a, b) : a, e = this[c ? "indexOfEx" : "indexOB"], void 0 !== e && (e = e(d, b), -1 == e ? this.push(a) : this[e] = a)) }, unshiftEx: function (a, b, c) { "boolean" == typeof b && (c = b, b = null), void 0 === c && (c = !1); var d = this[c ? "indexOfEx" : "indexOB"](a, b); void 0 !== d && (d = d(a, b), -1 == d ? this.unshift(a) : this[d] = a) }, compare: function (a, b, c, d) { var e, g, h, i; if ("boolean" == typeof b && (d = b, b = null), void 0 === d && (d = !1), e = { shareIndex1: [], share1: [], shareIndex2: [], share2: [], uniqueIndex1: [], unique1: [], uniqueIndex2: [], unique2: [] }, void 0 === a || null === a) return e; for (g = 0, h = this.length; h > g; g++)i = a[d ? "indexOfEx" : "indexOB"](void 0 === b || null === b ? this[g] : $MT.get(this[g], b), c), -1 === i ? (e.unique1.push(this[g]), e.uniqueIndex1.push(g)) : (e.share1.push(this[g]), e.shareIndex1.push(g), e.share2.push(a[i]), e.shareIndex2.push(i)); for (g = 0, h = a.length; h > g; g++)i = this[d ? "indexOfEx" : "indexOB"](void 0 === b || null === b ? a[g] : $MT.get(a[g], c), b), -1 === i && (e.unique2.push(a[g]), e.uniqueIndex2.push(g)); return e }, calc: function (a, b) { var c, d; if (0 !== this.length) return c = function (b, c) { if (isNaN(b) || isNaN(c)) switch (a) { case "sum": return 0; case "avg": return 0; case "max": return Number.MIN_VALUE; case "min": return Number.MAX_VALUE }switch (a) { case "sum": return +b + +c; case "avg": return +b + +c; case "max": return Math.max(+b, +c); case "min": return Math.min(+b, +c) } }, void 0 !== b ? (d = this.convert(b), d = d.reduce(c), $.map(this, c)) : d = this.reduce(c), "avg" === a && (d /= this.length), d } })), window.$MT || (window.$MT = { isBlank: function (a) { return null === a || void 0 === a || 0 == a }, money: function (a, b) { var c, d, e, f, g, i, j, k; if (b = void 0 === b ? "￥" : new String, c = { name: "formatCurrency", colorize: !1, region: "", global: !0, roundToDecimalPlace: 2, eventOnDecimalsEntered: !1, symbol: b, positiveFormat: "%s%n", negativeFormat: "(%s%n)", decimalSymbol: ".", digitGroupSymbol: ",", groupDigits: !0 }, c.regex = "" === c.symbol ? new RegExp("[^\\d" + c.decimalSymbol + "-]", "g") : new RegExp(c.symbol.replace("$", "\\$").replace(".", "\\.") + "|[^\\d" + c.decimalSymbol + "-]", "g"), a = String(a), a.search("\\(") >= 0 && (a = "-" + a), "" !== a) { if (isNaN(a)) { if (a = a.replace(c.regex, ""), "" === a) return; "." != c.decimalSymbol && (a = a.replace(c.decimalSymbol, ".")), isNaN(a) && (a = "0") } if (d = String(a).split("."), e = a == Math.abs(a), f = d.length > 1, g = f ? d[1].toString() : "0", a = Math.abs(d[0]), a = isNaN(a) ? 0 : a, c.roundToDecimalPlace >= 0 && (g = parseFloat("1." + g), g = g.toFixed(c.roundToDecimalPlace), "2" == g.substring(0, 1) && (a = Number(a) + 1), g = g.substring(2)), a = String(a), c.groupDigits) for (i = 0; i < Math.floor((a.length - (1 + i)) / 3); i++)a = a.substring(0, a.length - (4 * i + 3)) + c.digitGroupSymbol + a.substring(a.length - (4 * i + 3)); return (f && -1 == c.roundToDecimalPlace || c.roundToDecimalPlace > 0) && (a += c.decimalSymbol + g), j = e ? c.positiveFormat : c.negativeFormat, k = j.replace(/%s/g, c.symbol), k = k.replace(/%n/g, a) } }, norepeat: function (a, b) { var f, c = function () { return "object" == typeof a ? $(a).data("clickDate") : ($.clickDate = $.clickDate || {}, $.clickDate[a]) }, d = function (b) { "object" == typeof a ? $(a).data("clickDate", b) : ($.clickDate = $.clickDate || {}, $.clickDate[a] = b) }, e = c(); return void 0 === b && (b = 1e3), void 0 === e ? (d(new Date), !0) : (f = new Date, d(f), f.getTime() - e.getTime() <= 1e3 ? !1 : !0) }, logout: function (a, b, c) { var e, d = 0; for (e = 0; e < a.length; e++)$MT.ajax(a + "/ajax.do?action=clearSessionSelf", null, function () { d++ , d === a.length && (window.location = b + "/loginAction.do?action=clearSessionSelf&otherApp=true&successPage=" + c) }, function () { return d++ , d === a.length && (window.location = b + "/loginAction.do?action=clearSessionSelf&otherApp=true&successPage=" + c), !0 }) }, doError: function (a, b) { var c = window; switch (+a) { case 0: c.history.back(); break; case 1: break; case 2: window.top.location = window.top.oxhidePath || basePath; break; case 3: for (c = window; void 0 === c.dg && c.parent && void 0 === c.parent.sihe && c.parent.location !== c.location;)c = c.parent; c.dg && dg.close(); break; case 4: for (; c.parent && void 0 === c.parent.sihe && c.parent.location !== c.location;)c = c.parent; ui("close", { tabid: c.name }); break; case 5: for (; c.parent && void 0 === c.parent.sihe && c.parent.location !== c.location;)c = c.parent; ui("close", { tabid: c.name }); break; case 6: window.close(); break; case 7: b ? b.jqGrid("load", !1) : window.location.href = window.location.href } }, selectCreate: function (a, b, c, d, e, f) { var g, i, j, k, l, m, n, o, p; if (a) { for (void 0 === c && (c = b), ("false" === d || d === !1 || void 0 === d || null === d) && (d = ""), ("false" === e || e === !1 || void 0 === e || null === e) && (e = ""), g = {}, i = [], j = {}, k = 0, l = a.length; l > k; k++)if (m = a[k], f !== !0 || j[m[b]] !== !0) { m[d] || (m[d] = ""), g[m[d]] || (g[m[d]] = []), n = [], o = []; for (p in m) p && "object" != typeof m[p] && (n.push(p + '="' + m[p] + '"'), o.push(p)); n.push('_oxhide_attr_names_="' + o.join(",") + '"'), g[m[d]].push('<option value="{0}" {1}>{2}</option>'.format(m[b], n.join(" "), m[c])), f === !0 && (j[m[b]] = !0) } for (k in g) k ? i.push('<optgroup label="{0}" >{1}</optgroup>'.format(k, g[k].join(""))) : i.push(g[k].join("")); return "" !== e && i.unshift('<option value="">' + e + "</option>"), i.join("") } }, close: function () { navigator.userAgent.indexOf("MSIE") > 0 ? navigator.userAgent.indexOf("MSIE 6.0") > 0 ? (window.opener = null, window.close()) : (window.open("", "_top"), window.top.close()) : navigator.userAgent.indexOf("Firefox") > 0 ? window.location.href = "about:blank " : (window.opener = null, window.open("", "_self", ""), window.close()) }, dataRevise: function (a) { var c, b = []; return a.each(function (a, d) { c = []; for (var a in d) c.push(d[a]); 1 === c.length ? b.push(c[0]) : b.push(c) }), b }, formatDate: function (a, b) { var c, e, f, g, d = "yyyy-MM-dd"; switch (typeof a) { case "string": c = new Date, d = a; break; case "object": c = a || new Date, b && (d = b); break; case "undefined": c = new Date }e = { "M+": c.getMonth() + 1, "d+": c.getDate(), "h+": 0 == c.getHours() % 12 ? 12 : c.getHours() % 12, "H+": c.getHours(), "m+": c.getMinutes(), "s+": c.getSeconds(), "q+": Math.floor((c.getMonth() + 3) / 3), S: c.getMilliseconds() }, f = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" }, /(y+)/.test(d) && (d = d.replace(RegExp.$1, (c.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(d) && (d = d.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + f[c.getDay() + ""])); for (g in e) new RegExp("(" + g + ")").test(d) && (d = d.replace(RegExp.$1, 1 == RegExp.$1.length ? e[g] : ("00" + e[g]).substr(("" + e[g]).length))); return d }, oxhideTime: function (a) { a.format || (a.format = "yy-mm-dd"), a.format = a.format.replace("yyyy", "yy").replace("YYYY", "yy").replace("MM", "mm"); var b = a.format.split(" "), c = b[0].toLowerCase(); return c.indexOf("y") > -1 || c.indexOf("d") > -1 ? (a.dateFormat = b[0], 1 == b.length ? a.showTimepicker = !1 : (a.timeFormat = a.format.substr(b[0].length).trim(), a.addSliderAccess = !1, a.sliderAccessArgs = { touchonly: !1 })) : (a.timeFormat = a.format, a.timeOnly = !0, a.addSliderAccess = !0, a.sliderAccessArgs = { touchonly: !1 }), a }, get: function (a, b) { if (void 0 === b) return a; var c, d, f, e = []; if ("function" == typeof b) return b.call(a); if (c = a[b], void 0 === c) try { if ("string" == typeof b && (e = b.split(".")), f = e.length) for (c = a; c && f--;)d = e.shift(), c = c[d] } catch (g) { } return c }, set: function (a, b, c, d) { var e, f, h, g = []; if ("function" == typeof c && (c = c.call(a)), b in a) d === !1 ? a.hasOwnProperty(b) || (a[b] = c) : d === !0 ? void 0 === c || null === c || "" === c || void 0 !== a[b] && null !== a[b] && "" !== a[b] || (a[b] = c) : a[b] = c; else try { if ("string" == typeof b && (g = b.split(".")), h = g.length) for (e = a; h--;) { if (f = g.shift(), !h) { d === !1 ? e.hasOwnProperty(f) || (e[f] = c) : d === !0 ? void 0 === c || null === c || "" === c || void 0 !== e[f] && null !== e[f] && "" !== e[f] || (e[f] = c) : e[f] = c; break } e[f] || (e[f] = isNaN(f) ? {} : []), e = e[f] } } catch (i) { } return a }, revise: function (a) { var c, b = {}; for (c in a) $MT.set(b, c, a[c]); return b }, getArgs: function (a, b) { var g, d, e, f, h, c = $MT.args && $MT.args[a] || ($MT.args = {}) && null; if (!c) { for (d = $("script"), e = d.length, f = 0; e > f && (g = document.querySelector ? d[f].src : d[f].getAttribute("src", 4), -1 === g.substr(g.lastIndexOf("/")).indexOf(a)); f++); if (g = g.split("?"), g.length > 1) { for (g = g[1].split("&"), c = {}, f = 0, e = g.length; e > f; f++)h = g[f].split("="), c[h[0]] = h[1]; $MT.args[a] = c } else $MT.args[a] = c = {} } return c[b] }, getParam: function (a) { var b, f, c, d, e, g; if (a = a.split("?"), 1 === a.length) return { url: a[0] }; for (b = a[0], a = a[1], c = a.split("&"), d = 0, e = c.length, g = {}; e > d; d++)f = c[d].split("="), g[f[0]] = f[1]; return { url: b, param: g } }, importCss: function (a, b, c, d) { if (b || (b = window), !b.$("#" + d).length) { d || (d = $MT.guid()); var e = $('<link rel="stylesheet" href="' + a + '"  id="' + d + '" />'); return b.$("head").before(e), c && e.bind("load", c), d } }, guid: function (a) { var c, b = ""; for (a || (a = 1), c = 0; a > c; c++)b += function () { var e, f, a = new Date, b = a.getSeconds() + "", c = a.getMinutes() + "", d = a.getMilliseconds() + ""; for (e = b.length, f = 2; f > e; e++)b = "0" + b; for (e = c.length, f = 2; f > e; e++)c = "0" + c; for (e = d.length, f = 3; f > e; e++)d = "0" + d; return b + c + d + (0 | 65536 * (1 + Math.random())).toString(16).substring(1) + (0 | 65536 * (1 + Math.random())).toString(16) }(); return b.toUpperCase() }, appendParam: function (a, b) { var e, c = -1 === a.indexOf("?"), d = [a]; for (e in b) c ? (d.push("?{0}={1}".format(e, b[e])), c = !1) : d.push("&{0}={1}".format(e, b[e])); return d.join("") }, obj2str: function (a, b, c, d, e, f, g) { var i, j, h = []; if ("string" == typeof a) return 0 == a.trim().length && null !== g && void 0 !== g && g !== !1 ? g : '"' + a + '"'; if ("number" == typeof a) return a; if (null === a) return void 0 === e || null === e ? "null" : e; if (void 0 === a) return void 0 === f || null === f ? '""' : f; if ("object" == typeof a) { if ($.isArray(a)) { for (h[0] = "[", i = !1, j = 0; j < a.length; j++)c && c.indexOfEx(j) > -1 || b && b.indexOfEx(a[j]) > -1 || d && d.indexOfEx($.type(a[j])) > -1 || (h[h.length] = $MT.obj2str(a[j], b, c, d, e, f, g), h[h.length] = ",", i = !0); h[i ? h.length - 1 : h.length] = "]" } else { h[0] = "{", i = !1; for (j in a) c && c.indexOfEx(j) > -1 || b && b.indexOfEx(a[j]) > -1 || d && d.indexOfEx($.type(a[j])) > -1 || (h[h.length] = '"' + j + '"', h[h.length] = ":", h[h.length] = $MT.obj2str(a[j], b, c, d, e, f, g), h[h.length] = ",", i = !0); h[i ? h.length - 1 : h.length] = "}" } return h.join("") } return a.toString() }, makePY: function (a) { var c, d, b = { all: !1, upper: !0, array: !1 }; return "string" == typeof a ? a = $.extend(b, { word: a }) : $.extend(b, a), c = a.fn, delete a.fn, c ? ($MT.ajax(basePath + "/ajax." + actionDo + "?action=pinyin", a, c), void 0) : ($MT.ajax(basePath + "/ajax." + actionDo + "?action=pinyin", a, function (a) { d = a }, null, !1), d) }, buildPager: function (a) { var d, e, f, g, b = {}; if (a.pageSize = +a.pageSize, a.count = +a.count, a.pageNow = +a.pageNow, a.pageInfoTeml && a.info && (a.count > 0 ? a.info.html(a.pageInfoTeml.format(a.pageSize * (a.pageNow - 1) + 1, a.count > 10 * a.pageNow ? 10 * a.pageNow : a.count, a.count)) : a.info.html("没有找到记录!")), a.pageCount = parseInt((a.count + a.pageSize - 1) / a.pageSize), (a.pageMax < 5 || !a.paramMax) && (a.pageMax = 5), 0 == a.pageMax % 2 && a.pageMax++ , a.count > 0) { for (b.page = [], d = a.pageCount - a.pageNow, e = a.pageNow - 1, f = (a.pageMax - 1) / 2, d > a.pageMax - 1 && (d = a.pageMax - 1), e >= f && d >= f ? e = d = f : e >= f && f > d ? (e += f - d, e > a.pageMax - 1 - d && (e = a.pageMax - 1 - d)) : f > e && d >= f && (d += f - e, d > a.pageMax - 1 - e && (d = a.pageMax - 1 - e)), g = 1; e >= g; g++)b.page.unshift(a.pageTeml.format(a.pageNow - g)); for (b.page.push(a.pageTemlNow.format(a.pageNow)), g = 1; d >= g; g++)b.page.push(a.pageTeml.format(g + a.pageNow)); a.pageNow < a.pageCount && b.page.push(a.pageTeml.format("»")), a.pageNow > 1 && b.page.unshift(a.pageTeml.format("«")), a.page.html(b.page.join("")).find(a.select).bind("click", function () { var b = $(this).html(); "«" == b ? a.pageForword(!1) : "»" == b ? a.pageForword(!0) : a.pageForword(b) }) } else a.page.empty() }, showList: function (a, b, c, d) { var e, f, g, h; if (a = $.extend({ ajax: !0, size: -1, page: -1, _table_withSql_: !0, sqlLocal: !0, action: basePath + "/baseShowAction.do?action=showList" }, a), a.rows = a.size, delete a.size, a.alias) { a.columnTableName = []; for (e in a.alias) a.columnTableName.push(e + "," + a.alias[e]); delete a.alias } if (a.order) { f = 0, g = []; for (e in a.order) 0 == f ? (a.sidx = e, g.push(a.order[e])) : g.push(e + " " + a.order[e]), f++; a.sord = g.join(",") } a.search && (a.rules = [], a.search.each(function (b, c) { a.rules.push("{name}#{name}#{op}#{value}#{group}#{null}#{table}#{id}".format($.extend({ group: "and", "null": !0, id: $MT.guid() }, c))) }), delete a.search), a.flow && (a._flow_Id_ = a.flow.id, a._flow_Code_ = a.flow.code, delete a.flow), h = a.action, delete a.action, $MT.ajax(h, a, b, c, d) }, query: function (a, b, c, d, e, f, g, h) { a = "string" == typeof a ? $.extend({ code: a, param: b || {}, local: void 0 === c ? !0 : c, ok: d, error: e, begin: f, pages: g, async: h }, a) : $.extend({ code: "", param: {}, local: !0, ok: "", error: "", begin: "", pages: "", async: !0 }, a), a.param["_code_"] = a.code, a.param["_local_"] = a.local, a.param["_begin_"] = a.begin, a.param["_pages_"] = a.pages, $MT.ajax(basePath + "/ajax." + actionDo + "?action=query", a.param, a.ok, a.error, a.async) }, dictionary: function (a) { a = $.extend({ code: "", ok: "", error: "", codeContent: "", codeFilter: "", valueFilter: "", size: "" }, a); var b = { _code_: a.code, _codeContent_: a.codeContent, _codeFilter_: a.codeFilter, _valueFilter_: a.valueFilter, _size_: a.size }; $MT.ajax(basePath + "/ajax." + actionDo + "?action=dictionary", b, a.ok, a.error) }, ajax: function (a, b, c, d, e, f) { (null === b || void 0 === b) && (b = { ajax: !0 }), null === f || void 0 === f ? f = "POST" : "GET" == f && (b.sxsihe = (new Date).getTime()); var g = $MT.paramSign(a.split("action=")[1], b); $.ajax({ url: a, dataType: "json", type: f, data: b, async: e !== !1, traditional: !0, beforeSend: function (a) { if (jQuery.cookie("token")) a.setRequestHeader("token", jQuery.cookie("token")); a.setRequestHeader("sign", g) }, success: function (g) { var h, j; try { g && g.error ? (h = d && d(g.error), h !== !0 && alert((oxhideDebug && a + "\n") + g.error)) : "token不正确" == g.message ? (j = { userid: jQuery.cookie("userid"), token: jQuery.cookie("token") }, $MT.ajax(get, j, function (g) { var h, i; if (g.result) jQuery.cookie("token", g.token), delete b.token, delete b.sign, $MT.ajax(a, b, c, d, e, f); else { console.log("token不正确"); if (h = document.cookie.match(/[^ =;]+(?=\=)/g)) for (i = h.length; i--;)document.cookie = h[i] + "=0;expires=" + new Date(0).toUTCString(); window.location.href = localStorage.getItem("login") } })) : c && c(g) } catch (k) { } }, error: function (a) { var e, f; try { if (200 == a.status && "" == a.responseText) return c && c(), void 0; if (0 != a.readyState && (e = document.cookie.match(/[^ =;]+(?=\=)/g))) for (f = e.length; f--;)document.cookie = e[f] + "=0;expires=" + new Date(0).toUTCString() } catch (g) { } } }) }, paramSign: function (a, b) { var e, f, c = "", d = []; for (e in b) "token" != e && (e.indexOf("_nosign") > -1 ? b[e.split("_nosign")[0]] = b[e] : d.push(e)); for (d.sort(), f = 0; f < d.length; f++)c += d[f] + "=" + b[d[f]] + "&"; return jQuery.cookie("token") != null && (c += "token=" + jQuery.cookie("token") + "&"), "" == c && (c = "&"), c += "appkey=" + appkey, $.md5(SHA256(c).toUpperCase()).toUpperCase() }, each: function (a, b) { if ("array" === $.type(a)) a.each(b); else for (var c in a) b.call(a[c], c, a[c]) }, url: function (a, b, c) { return b && "object" == typeof b && (c = b, b = basePath), ui("url", a, b === !1 ? !1 : b || basePath, !1, !0, !1, !1, !1, c) }, tip: function (a) { "string" == typeof a ? $.mobile.loading("show", { text: a, textVisible: !0 }) : a === !0 ? $.mobile.loading("show") : $.mobile.loading("hide") }, open: function (a, b) { a += a.indexOf("?") > -1 ? "&sessionid=" + sessionId : "?sessionid=" + sessionId, window.jsb ? jsb.require("messagebox", { head: b, url: a }) : window.open(a, b) } }) }(), function () { window.basePath || (window.basePath = function () { var f, g, a = $("script[src*=resource]"), b = document.querySelector ? a.attr("src") : a[0].getAttribute("src", 4), c = (b + "").split("/"), d = []; for (f = 0, g = c.length; g > f && !(c[f].indexOf("resource") > -1); f++)c[f] && d.push(c[f]); return d[0] += "/", d[d.length - 1] += "/", d.join("/") }()), window.actionDo = "do", window.oxhideDebug = $MT.getArgs("base", "debug") || "true", window.oxhideHost = $MT.getArgs("base", "oxhidehost"), window.oxhideHost || (window.oxhideHost = basePath), window.sessionId = $MT.getArgs("base", "sessionId") }(), function (a) { a.fn.refresh = function () { var c, d, e, f, g, h, b = this; for (c = 0, d = b.length; d > c; c++)switch (e = a(b[c]), f = e.prop("nodeName").toLowerCase(), g = e.prop("type"), h = "input" == f ? f + "_" + g : f, h) { case "button": case "input_button": break; case "select": e.selectmenu("refresh", !0); break; case "input_text": case "input_password": case "textarea": break; case "body": }return b }, function (a) { a.fn.pageClick = function (b, c) { var f, d = this, e = $MT.guid(); return "string" == typeof b ? a.fn.pageClick[b] && a.fn.pageClick[b].apply(d, a.makeArray(arguments).slice(1)) : (void 0 === c && (c = !0), f = function (e) { var f = e.target, g = !1; d.each(function () { var b = a(this); return b.is(f) ? (g = !0, !1) : void 0 }), g || c && d.each(function () { var c, b = this; if (b.each) { for (c = 0; c < b.length; c++)if (g = a.contains(b[c], f)) return !1 } else if (g = a.contains(b, f)) return !1 }), g || b.call(d, e, g) }, a("body").bind("click." + e, f), d.each(function () { a(this).data("pageClick", e) }), d) }, a.fn.pageClick.unbind = function () { var b = this, c = b.data("pageClick"); return c && (a("body").unbind("click." + c), b.removeData("pageClick")), b } }(a), function (a) { a.fn.mvvm = function (b, c) { var d, e, f; return 0 === this.length ? this : "string" == typeof b ? (d = a.fn.mvvm[b], d ? d.apply(this, Array.prototype.slice.call(arguments, 1)) : (e = this, f = e.data("mvvm_p"), void 0 === c ? f[b] : (f[b] = c, e))) : (e = this, e.data("mvvm_p", b), a.fn.mvvm._init.call(e), e) }, a.extend(a.fn.mvvm, { reset: function (b) { var c = this, d = c.data("mvvm_p"); return b === !0 ? a.fn.mvvm._init.call(c) : a.fn.mvvm._set.call(c, d.data), c }, submit: function (b) { var c = this, d = c.data("mvvm_p"), e = a.fn.mvvm._get.call(c); if (b === !0) { if (!d.saveAction) return e; a.fn.mvvm._submit.call(c, e) } else { if (b === !1) return e; if (!d.saveAction) return !1; a.fn.mvvm._submit.call(c, e) } return c }, check: function () { var d, b = this, e = (b.data("mvvm_p"), !0); return a.fn.mvvm._getEles.call(b).each(function (b, c) { return d = a(c), d.check() === !1 ? e = !1 : void 0 }), e }, get: function (a) { var b = this, c = b.data("mvvm_p"); return $MT.get(c.data, a) }, set: function (b, c, d) { var h, e = this, f = e.data("mvvm_p"), g = function (b, c) { var g, h; if ($MT.set(f.data, b, c), d !== !1) { if (g = a("#" + b, e), 0 === g.length && (g = a("[name=" + b + "]", e)), 0 === g.length) return; switch (h = g.prop("nodeName").toLowerCase(), h = "input" == h ? h + "_" + g.prop("type") : h, b = f.set && g.attr(f.set) || g.attr("id") || g.attr("name"), void 0 === c && (c = ""), h) { case "select": g.val(c).refresh(); break; case "input_text": case "input_password": case "input_range": case "textarea": case "input_hidden": g.val(c); break; case "input_checkbox": g[0].checked = g.attr("v") == c } } }; if ("object" == typeof b) { d = c; for (h in b) g(h, b[h]) } else g(b, c); return e }, remove: function (b, c) { var f, d = this, e = d.data("mvvm_p"); delete e.data[b], c === !0 && (f = a("#" + b, d), 0 === f.length && (f = a("[name=" + b + "]", d)), f.remove()) }, _getEles: function () { var b = this, c = b.data("mvvm_p"); return c.sel ? a(c.sel, b) : c.unsel ? a("input[type=text],input[type=password],textarea,select,input[type=checkbox],input[type=hidden],input[type=range]", b) : a("input[type=text],input[type=password],textarea,select,input[type=checkbox],input[type=hidden],input[type=range]", b).not(c.unsel) }, _submit: function (b) { var f, g, c = this, d = c.data("mvvm_p"), e = b; return d.postParamName && (f = {}, f[postParamName] = $MT.obj2str(e, null, null, null, null, "null", "null"), e = f), g = a.fn.mvvm.check.call(c), g === !1 ? c : (g = d.onsubmit && d.onsubmit.call(c, b), g === !1 ? c : ($MT.ajax(d.saveAction, e, function () { a.extend(c.data("mvvm_p").data, b) }, function () { }, d.async), c)) }, _init: function () { var b = this, c = b.data("mvvm_p"); return c.showAction ? a.fn.mvvm._ajax.call(b, c.showAction, c.param) : c.sqlcode ? a.fn.mvvm._query.call(b, c.sqlcode, c.param) : c.data ? a.fn.mvvm._set.call(b, c.data) : c.data = a.fn.mvvm._get.call(b), b }, _set: function (b) { var e, f, g, c = this, d = c.data("mvvm_p"); return d.data = b, d.onload && d.onload.call(c, b), a.fn.mvvm._getEles.call(c).each(function (c, h) { if (e = a(h), f = e.prop("nodeName").toLowerCase(), f = "input" == f ? f + "_" + e.prop("type") : f, name = d.set && e.attr(d.set) || e.attr("id") || e.attr("name"), g = $MT.get(b, name), void 0 !== g) switch (f) { case "select": e.val(g).refresh(); break; case "input_text": case "input_password": case "textarea": case "input_range": case "input_hidden": e.val(g); break; case "input_checkbox": e[0].checked = e.attr("value") == g } }), c }, _get: function () { var d, e, f, b = this, c = b.data("mvvm_p"), g = {}; return a.fn.mvvm._getEles.call(b).each(function (b, h) { switch (d = a(h), e = d.prop("nodeName").toLowerCase(), e = "input" == e ? e + "_" + d.prop("type") : e, f = c.get && d.attr(c.get) || d.attr("id") || d.attr("name"), e) { case "select": case "input_text": case "input_password": case "textarea": case "input_range": case "input_hidden": $MT.set(g, f, d.val()); break; case "input_checkbox": d[0].checked = d.attr("value") == g[b], d[0].checked === !0 ? $MT.set(g, f, d.attr("value")) : $MT.set(g, f, d.attr("offvalue") || null) } }), g }, _ajax: function () { var b = this, c = b.data("mvvm_p"); return $MT.ajax(c.showAction, c.param, function (c) { c.length > 0 && (c = c[0], a.fn.mvvm._set.call(b, c)) }, function () { }, c.async), b }, _sql: function () { var b = this, c = b.data("mvvm_p"); return $MT.query({ code: c.sqlcode, param: c.param, ok: function (c) { c.length > 0 && (c = c[0], a.fn.mvvm._set.call(b, c)) }, async: c.async }), b } }) }(jQuery) }(jQuery), !function () { var g, h, i, b = "jsb", c = "__JavascriptBridge__", d = 200, e = window[b] = {}, f = window[c] || null; return f ? (g = {}, e.addJavascriptMethod = function (a, b) { g[a] = b }, e.require = function (a, b, c) { b = b || "{}"; var d = f.require(a, JSON.stringify(b)); c && d && (d = JSON.parse(d)), c && c(d) }, h = function (a) { var c, b = g[a.cmd]; b instanceof Function && (c = b.call(window, a.params), c && f.setResult(a.serial, JSON.stringify(c))) }, i = { _timer: 0, _timerFunc: function () { var c, a = f.getCommands(), b = JSON.parse(a); if (b.length) for (c in b) h(b[c]); i.run() }, run: function () { this._timer = setTimeout(this._timerFunc, d) }, stop: function () { clearTimeout(this._timer), this._timer = 0 } }, i.run(), void 0) : (window[b] = null, void 0) }();