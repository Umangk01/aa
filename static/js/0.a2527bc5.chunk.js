(this["webpackJsonpsynthetix.exchange"]=this["webpackJsonpsynthetix.exchange"]||[]).push([[0],{764:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(773),r=a(32);function u(t,e){Object(r.a)(2,arguments);var a=Object(n.a)(t,e)/36e5;return a>0?Math.floor(a):Math.ceil(a)}},765:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var n=a(40),r=a(45),u=a(32);function c(t,e){Object(u.a)(2,arguments);var a=Object(r.default)(t),c=Object(n.a)(e);if(isNaN(c))return new Date(NaN);if(!c)return a;var s=a.getDate(),i=new Date(a.getTime());i.setMonth(a.getMonth()+c+1,0);var f=i.getDate();return s>=f?i:(a.setFullYear(i.getFullYear(),i.getMonth(),s),a)}},766:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var n=a(40),r=a(45),u=a(32);function c(t,e){Object(u.a)(2,arguments);var a=Object(r.default)(t),c=Object(n.a)(e);return isNaN(c)?new Date(NaN):c?(a.setDate(a.getDate()+c),a):a}},769:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var n=a(45),r=a(32);function u(t,e){Object(r.a)(2,arguments);var a=Object(n.default)(t),u=Object(n.default)(e),c=a.getTime()-u.getTime();return c<0?-1:c>0?1:c}var c=a(791);function s(t,e){Object(r.a)(2,arguments);var a=Object(n.default)(t),s=Object(n.default)(e),i=u(a,s),f=Math.abs(Object(c.default)(a,s));a.setFullYear("1584"),s.setFullYear("1584");var o=u(a,s)===-i,b=i*(f-o);return 0===b?0:b}var i=a(794);function f(t,e){Object(r.a)(2,arguments);var a=Object(n.default)(t),c=Object(n.default)(e),s=u(a,c),f=Math.abs(Object(i.default)(a,c));a.setMonth(a.getMonth()-s*f);var o=u(a,c)===-s,b=s*(f-o);return 0===b?0:b}var o=a(789),b=a(764),l=a(773);function d(t,e){Object(r.a)(2,arguments);var a=Object(l.a)(t,e)/6e4;return a>0?Math.floor(a):Math.ceil(a)}function j(t,e){Object(r.a)(2,arguments);var a=Object(l.a)(t,e)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var O=a(264),v=a(793),h=a(792),g=a(40);function M(t,e){if(Object(r.a)(2,arguments),!e||"object"!==typeof e)return new Date(NaN);var a="years"in e?Object(g.a)(e.years):0,u="months"in e?Object(g.a)(e.months):0,c="weeks"in e?Object(g.a)(e.weeks):0,s="days"in e?Object(g.a)(e.days):0,i="hours"in e?Object(g.a)(e.hours):0,f="minutes"in e?Object(g.a)(e.minutes):0,o="seconds"in e?Object(g.a)(e.seconds):0,b=Object(h.default)(Object(n.default)(t),u+12*a),l=Object(v.default)(b,s+7*c),d=f+60*i,j=o+60*d,O=1e3*j,M=new Date(l.getTime()-O);return M}function m(t){var e=t.start,a=t.end;Object(r.a)(1,arguments);var c=Object(n.default)(e),i=Object(n.default)(a);if(!Object(O.default)(c))throw new RangeError("Start Date is invalid");if(!Object(O.default)(i))throw new RangeError("End Date is invalid");var l={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},v=u(c,i);l.years=Math.abs(s(c,i));var h=M(c,{years:v*l.years});l.months=Math.abs(f(h,i));var g=M(h,{months:v*l.months});l.days=Math.abs(Object(o.a)(g,i));var m=M(g,{days:v*l.days});l.hours=Math.abs(Object(b.a)(m,i));var y=M(m,{hours:v*l.hours});l.minutes=Math.abs(d(y,i));var D=M(y,{minutes:v*l.minutes});return l.seconds=Math.abs(j(D,i)),l}},773:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(45),r=a(32);function u(t,e){Object(r.a)(2,arguments);var a=Object(n.default)(t),u=Object(n.default)(e);return a.getTime()-u.getTime()}},775:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u}));var n=a(45),r=a(32);function u(t){Object(r.a)(1,arguments);var e=Object(n.default)(t);return e.setHours(0,0,0,0),e}},789:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(45),r=a(790),u=a(32);function c(t,e){var a=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return a<0?-1:a>0?1:a}function s(t,e){Object(u.a)(2,arguments);var a=Object(n.default)(t),s=Object(n.default)(e),i=c(a,s),f=Math.abs(Object(r.default)(a,s));a.setDate(a.getDate()-i*f);var o=c(a,s)===-i,b=i*(f-o);return 0===b?0:b}},790:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var n=a(260),r=a(775),u=a(32);function c(t,e){Object(u.a)(2,arguments);var a=Object(r.default)(t),c=Object(r.default)(e),s=a.getTime()-Object(n.a)(a),i=c.getTime()-Object(n.a)(c);return Math.round((s-i)/864e5)}},791:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u}));var n=a(45),r=a(32);function u(t,e){Object(r.a)(2,arguments);var a=Object(n.default)(t),u=Object(n.default)(e);return a.getFullYear()-u.getFullYear()}},792:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var n=a(40),r=a(765),u=a(32);function c(t,e){Object(u.a)(2,arguments);var a=Object(n.a)(e);return Object(r.default)(t,-a)}},793:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var n=a(40),r=a(766),u=a(32);function c(t,e){Object(u.a)(2,arguments);var a=Object(n.a)(e);return Object(r.default)(t,-a)}},794:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return u}));var n=a(45),r=a(32);function u(t,e){Object(r.a)(2,arguments);var a=Object(n.default)(t),u=Object(n.default)(e),c=a.getFullYear()-u.getFullYear(),s=a.getMonth()-u.getMonth();return 12*c+s}}}]);
//# sourceMappingURL=0.a2527bc5.chunk.js.map