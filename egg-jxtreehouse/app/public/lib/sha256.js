function SHA256(a){function d(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function e(a,b){return a>>>b|a<<32-b}function f(a,b){return a>>>b}function g(a,b,c){return a&b^~a&c}function h(a,b,c){return a&b^a&c^b&c}function i(a){return e(a,2)^e(a,13)^e(a,22)}function j(a){return e(a,6)^e(a,11)^e(a,25)}function k(a){return e(a,7)^e(a,18)^f(a,3)}function l(a){return e(a,17)^e(a,19)^f(a,10)}function m(a,b){var m,n,o,p,q,r,s,t,u,v,w,x,c=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),e=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),f=new Array(64);for(a[b>>5]|=128<<24-b%32,a[(b+64>>9<<4)+15]=b,u=0;u<a.length;u+=16){for(m=e[0],n=e[1],o=e[2],p=e[3],q=e[4],r=e[5],s=e[6],t=e[7],v=0;64>v;v++)f[v]=16>v?a[v+u]:d(d(d(l(f[v-2]),f[v-7]),k(f[v-15])),f[v-16]),w=d(d(d(d(t,j(q)),g(q,r,s)),c[v]),f[v]),x=d(i(m),h(m,n,o)),t=s,s=r,r=q,q=d(p,w),p=o,o=n,n=m,m=d(w,x);e[0]=d(m,e[0]),e[1]=d(n,e[1]),e[2]=d(o,e[2]),e[3]=d(p,e[3]),e[4]=d(q,e[4]),e[5]=d(r,e[5]),e[6]=d(s,e[6]),e[7]=d(t,e[7])}return e}function n(a){var e,c=Array(),d=(1<<b)-1;for(e=0;e<a.length*b;e+=b)c[e>>5]|=(a.charCodeAt(e/b)&d)<<24-e%32;return c}function o(a){var b,c,d;for(a=a.replace(/\r\n/g,"\n"),b="",c=0;c<a.length;c++)d=a.charCodeAt(c),128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(192|d>>6),b+=String.fromCharCode(128|63&d)):(b+=String.fromCharCode(224|d>>12),b+=String.fromCharCode(128|63&d>>6),b+=String.fromCharCode(128|63&d));return b}function p(a){var e,b=c?"ABCDEF0123456789":"abcdef0123456789",d="";for(e=0;e<4*a.length;e++)d+=b.charAt(15&a[e>>2]>>8*(3-e%4)+4)+b.charAt(15&a[e>>2]>>8*(3-e%4));return d}var b=8,c=0;return a=o(a),p(m(n(a),a.length*b))}