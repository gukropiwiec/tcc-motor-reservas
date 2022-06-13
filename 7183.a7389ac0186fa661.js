"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7183],{7183:(Ht,W,T)=>{T.r(W),T.d(W,{HomePageModule:()=>Nt});var B=T(9808),J=T(4182),f=T(5649),q=T(501);function m(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function G(e){return m(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function v(e){m(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function V(e){if(m(1,arguments),!G(e)&&"number"!=typeof e)return!1;var t=v(e);return!isNaN(Number(t))}var $={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function S(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var ae={date:S({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:S({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:S({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},ie={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function M(e){return function(t,n){var i,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):u;i=e.formattingValues[d]||e.formattingValues[u]}else{var c=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;i=e.values[l]||e.values[c]}return i[e.argumentCallback?e.argumentCallback(t):t]}}function O(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var l,u=i[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(d)?Te(d,function(h){return h.test(u)}):we(d,function(h){return h.test(u)});l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;var g=t.slice(u.length);return{value:l,rest:g}}}function we(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function Te(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const Ae={code:"en-US",formatDistance:function(e,t,n){var r,o=$[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:ae,formatRelative:function(e,t,n,r){return ie[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:M({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:M({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:M({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:M({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:M({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function be(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var o=r[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];u=n.valueCallback?n.valueCallback(u):u;var d=t.slice(o.length);return{value:u,rest:d}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:O({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:O({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:O({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:O({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function We(e,t){m(2,arguments);var n=v(e).getTime(),r=p(t);return new Date(n+r)}function Ne(e,t){m(2,arguments);var n=p(t);return We(e,-n)}function x(e){m(1,arguments);var t=1,n=v(e),r=n.getUTCDay(),o=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function N(e){m(1,arguments);var t=v(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=x(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var u=x(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}function Fe(e){m(1,arguments);var t=N(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=x(n);return r}var He=6048e5;function Z(e,t){m(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:p(o),u=null==n.weekStartsOn?i:p(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=v(e),c=d.getUTCDay(),l=(c<u?7:0)+c-u;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function Y(e,t){m(1,arguments);var n=v(e),r=n.getUTCFullYear(),o=t||{},i=o.locale,u=i&&i.options&&i.options.firstWeekContainsDate,d=null==u?1:p(u),c=null==o.firstWeekContainsDate?d:p(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var g=Z(l,t),h=new Date(0);h.setUTCFullYear(r,0,c),h.setUTCHours(0,0,0,0);var D=Z(h,t);return n.getTime()>=g.getTime()?r+1:n.getTime()>=D.getTime()?r:r-1}function Le(e,t){m(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.firstWeekContainsDate,i=null==o?1:p(o),u=null==n.firstWeekContainsDate?i:p(n.firstWeekContainsDate),d=Y(e,t),c=new Date(0);c.setUTCFullYear(d,0,u),c.setUTCHours(0,0,0,0);var l=Z(c,t);return l}var Qe=6048e5;function s(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const b_y=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return s("yy"===t?r%100:r,t.length)},b_M=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):s(n+1,2)},b_d=function(e,t){return s(e.getUTCDate(),t.length)},b_h=function(e,t){return s(e.getUTCHours()%12||12,t.length)},b_H=function(e,t){return s(e.getUTCHours(),t.length)},b_m=function(e,t){return s(e.getUTCMinutes(),t.length)},b_s=function(e,t){return s(e.getUTCSeconds(),t.length)},b_S=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return s(Math.floor(r*Math.pow(10,n-3)),t.length)};function R(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),i=r%60;if(0===i)return n+String(o);var u=t||"";return n+String(o)+u+s(i,2)}function F(e,t){return e%60==0?(e>0?"-":"+")+s(Math.abs(e)/60,2):C(e,t)}function C(e,t){var n=t||"",r=e>0?"-":"+",o=Math.abs(e);return r+s(Math.floor(o/60),2)+n+s(o%60,2)}const Be={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear();return n.ordinalNumber(r>0?r:1-r,{unit:"year"})}return b_y(e,t)},Y:function(e,t,n,r){var o=Y(e,r),i=o>0?o:1-o;return"YY"===t?s(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(e,t){return s(N(e),t.length)},u:function(e,t){return s(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return s(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return b_M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var o=function je(e,t){m(1,arguments);var n=v(e),r=Z(n,t).getTime()-Le(n,t).getTime();return Math.round(r/Qe)+1}(e,r);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):s(o,t.length)},I:function(e,t,n){var r=function Ie(e){m(1,arguments);var t=v(e),n=x(t).getTime()-Fe(t).getTime();return Math.round(n/He)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):s(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):b_d(e,t)},D:function(e,t,n){var r=function Re(e){m(1,arguments);var t=v(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime();return Math.floor((n-r)/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):s(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var o=e.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var o=e.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return s(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var o=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,t,n){var o,r=e.getUTCHours();switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,t,n){var o,r=e.getUTCHours();switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b_h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):b_H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):b_m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):b_s(e,t)},S:function(e,t){return b_S(e,t)},X:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();if(0===i)return"Z";switch(t){case"X":return F(i);case"XXXX":case"XX":return C(i);default:return C(i,":")}},x:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return F(i);case"xxxx":case"xx":return C(i);default:return C(i,":")}},O:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+R(i,":");default:return"GMT"+C(i,":")}},z:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+R(i,":");default:return"GMT"+C(i,":")}},t:function(e,t,n,r){return s(Math.floor((r._originalDate||e).getTime()/1e3),t.length)},T:function(e,t,n,r){return s((r._originalDate||e).getTime(),t.length)}};function H(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function I(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}const Ve={p:I,P:function Je(e,t){var i,n=e.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return H(e,t);switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;default:i=t.dateTime({width:"full"})}return i.replace("{{date}}",H(r,t)).replace("{{time}}",I(o,t))}};function $e(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var Ke=["D","DD"],et=["YY","YYYY"];function tt(e){return-1!==Ke.indexOf(e)}function nt(e){return-1!==et.indexOf(e)}function L(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,it=/''/g,ut=/[a-zA-Z]/;function ct(e){return e.match(ot)[1].replace(it,"'")}Math.pow(10,8);var j=36e5,_={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ft=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,mt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,gt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ht(e){var r,t={},n=e.split(_.dateTimeDelimiter);if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],_.timeZoneDelimiter.test(t.date)&&(t.date=e.split(_.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){var o=_.timezone.exec(r);o?(t.time=r.replace(o[1],""),t.timezone=o[1]):t.time=r}return t}function vt(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?o:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function pt(e,t){if(null===t)return new Date(NaN);var n=e.match(ft);if(!n)return new Date(NaN);var r=!!n[4],o=P(n[1]),i=P(n[2])-1,u=P(n[3]),d=P(n[4]),c=P(n[5])-1;if(r)return function Dt(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,c)?function bt(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var i=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+i),r}(t,d,c):new Date(NaN);var l=new Date(0);return function Ct(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(yt[t]||(z(e)?29:28))}(t,i,u)&&function Ut(e,t){return t>=1&&t<=(z(e)?366:365)}(t,o)?(l.setUTCFullYear(t,i,Math.max(o,u)),l):new Date(NaN)}function P(e){return e?parseInt(e):1}function wt(e){var t=e.match(mt);if(!t)return NaN;var n=A(t[1]),r=A(t[2]),o=A(t[3]);return function Mt(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,o)?n*j+6e4*r+1e3*o:NaN}function A(e){return e&&parseFloat(e.replace(",","."))||0}function Tt(e){if("Z"===e)return 0;var t=e.match(gt);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return function Ot(e,t){return t>=0&&t<=59}(0,o)?n*(r*j+6e4*o):NaN}var yt=[31,null,31,30,31,30,31,31,30,31,30,31];function z(e){return e%400==0||e%4==0&&e%100!=0}var a=T(2096),_t=T(4662);function kt(e,t){if(1&e){const n=a.EpF();a.TgZ(0,"ion-datetime",44,45),a.NdJ("ionChange",function(){a.CHM(n);const o=a.MAs(1),i=a.oxw();return i.checkinDate=i.formatDate(o.value)}),a.qZA()}}function Et(e,t){if(1&e){const n=a.EpF();a.TgZ(0,"ion-datetime",44,46),a.NdJ("ionChange",function(){a.CHM(n);const o=a.MAs(1),i=a.oxw();return i.checkoutDate=i.formatDate(o.value)}),a.qZA()}}const qt=function(){return["/quartos"]},k=function(){return["/detalhes-quarto/1"]},St=[{path:"",component:(()=>{class e{constructor(){this.checkinDate="-",this.checkoutDate="-"}ngOnInit(){}confirm(){this.datetime.nativeEl.confirm()}reset(){this.datetime.nativeEl.reset()}formatDate(n){return function st(e,t,n){m(2,arguments);var r=String(t),o=n||{},i=o.locale||Ae,u=i.options&&i.options.firstWeekContainsDate,d=null==u?1:p(u),c=null==o.firstWeekContainsDate?d:p(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=i.options&&i.options.weekStartsOn,g=null==l?0:p(l),h=null==o.weekStartsOn?g:p(o.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var D=v(e);if(!V(D))throw new RangeError("Invalid time value");var Yt=$e(D),Rt=Ne(D,Yt),X={firstWeekContainsDate:c,weekStartsOn:h,locale:i,_originalDate:D};return r.match(at).map(function(w){var y=w[0];return"p"===y||"P"===y?(0,Ve[y])(w,i.formatLong,X):w}).join("").match(rt).map(function(w){if("''"===w)return"'";var y=w[0];if("'"===y)return ct(w);var E=Be[y];if(E)return!o.useAdditionalWeekYearTokens&&nt(w)&&L(w,t,e),!o.useAdditionalDayOfYearTokens&&tt(w)&&L(w,t,e),E(Rt,w,i.localize,X);if(y.match(ut))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return w}).join("")}(function lt(e,t){m(1,arguments);var n=t||{},r=null==n.additionalDigits?2:p(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,o=ht(e);if(o.date){var u=vt(o.date,r);i=pt(u.restDateString,u.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var l,d=i.getTime(),c=0;if(o.time&&(c=wt(o.time),isNaN(c)))return new Date(NaN);if(!o.timezone){var g=new Date(d+c),h=new Date(0);return h.setFullYear(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate()),h.setHours(g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds()),h}return l=Tt(o.timezone),isNaN(l)?new Date(NaN):new Date(d+c+l)}(n),"dd/MM/yyyy")}isDateEnabled(n){const r=new Date(n);return!(1===function Pt(e){return m(1,arguments),v(e).getDate()}(r)&&0===function xt(e){return m(1,arguments),v(e).getMonth()}(r)&&2022===function Zt(e){return m(1,arguments),v(e).getFullYear()}(r))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(n,r){if(1&n&&a.Gf(f.x4,7),2&n){let o;a.iGM(o=a.CRH())&&(r.datetime=o.first)}},decls:192,vars:13,consts:[[3,"fullscreen"],["id","container",1,"container","mt-5"],[1,"banner","mt-2","mb-5"],[1,"h-100"],[1,"h-100","align-items-center","justify-content-center","ion-hide-lg-down",2,"display","flex"],[1,"banner-text"],[1,"h-100","d-flex","align-items-center","justify-content-center"],[1,"card-banner"],["button","true","id","open-date-input","lines","none",1,"input-card"],["slot","start","icon","calendar-clear-outline"],["slot","end",1,"text-center"],["trigger","open-date-input","show-backdrop","false"],["button","true","id","open-date-input2","lines","none",1,"input-card"],["trigger","open-date-input2","show-backdrop","false"],["id","open-date-input2","lines","none",1,"input-card"],["placeholder","-"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["value","6"],["color","danger","expand","block",3,"routerLink"],[1,"nossos-quartos"],["size","auto"],[1,"fw-bold","divider-title"],[1,"card-quartos","d-flex","align-items-center","justify-content-center","cursor-pointer",2,"background-image","url('assets/images/quarto-exemplo-1.png')",3,"routerLink"],[1,"text-center"],[1,"text-price"],[1,"card-quartos","d-flex","align-items-center","justify-content-center","cursor-pointer",2,"background-image","url('assets/images/quarto-exemplo-2.png')",3,"routerLink"],[1,"card-quartos","d-flex","align-items-center","justify-content-center","cursor-pointer",2,"background-image","url('assets/images/quarto-exemplo-3.png')",3,"routerLink"],[1,"card-quartos","d-flex","align-items-center","justify-content-center","cursor-pointer",2,"background-image","url('assets/images/quarto-exemplo-4.png')",3,"routerLink"],[1,"o-que-oferecemos","my-5"],["size","12","sizeLg","4"],[1,"card-promotions"],["icon","business","size","large"],[1,"text-warning","fw-bold","title-card-promotions-section","my-3"],[1,"ion-text-uppercase"],["icon","fast-food","size","large"],["icon","star","size","large"],[1,"como-reservar-um-quarto","my-5"],["icon","bed","size","large"],["icon","list","size","large"],["icon","bag-check","size","large"],["presentation","date",3,"ionChange"],["popoverDatetime1",""],["popoverDatetime2",""]],template:function(n,r){1&n&&(a.TgZ(0,"ion-content",0)(1,"div",1)(2,"section",2)(3,"ion-row",3)(4,"ion-col",4)(5,"h4",5),a._uU(6," UM LUGAR ESPECIAL ONDE VOC\xca PODE FICAR E RELAXAR "),a.qZA()(),a.TgZ(7,"ion-col",6)(8,"ion-card",7)(9,"ion-card-header")(10,"ion-card-title"),a._uU(11,"RESERVAR UM QUARTO"),a.qZA()(),a.TgZ(12,"ion-card-content")(13,"ion-row")(14,"ion-col")(15,"ion-item",8)(16,"ion-label"),a._UZ(17,"ion-icon",9),a._uU(18," Check-in"),a.qZA(),a.TgZ(19,"ion-text",10),a._uU(20),a.qZA(),a.TgZ(21,"ion-popover",11),a.YNc(22,kt,2,0,"ng-template"),a.qZA()()()(),a.TgZ(23,"ion-row")(24,"ion-col")(25,"ion-item",12)(26,"ion-label"),a._UZ(27,"ion-icon",9),a._uU(28," Check-out"),a.qZA(),a.TgZ(29,"ion-text",10),a._uU(30),a.qZA(),a.TgZ(31,"ion-popover",13),a.YNc(32,Et,2,0,"ng-template"),a.qZA()()()(),a.TgZ(33,"ion-row")(34,"ion-col")(35,"ion-item",14)(36,"ion-label"),a._UZ(37,"ion-icon",9),a._uU(38," H\xf3spedes"),a.qZA(),a.TgZ(39,"ion-select",15)(40,"ion-select-option",16),a._uU(41,"1"),a.qZA(),a.TgZ(42,"ion-select-option",17),a._uU(43,"2"),a.qZA(),a.TgZ(44,"ion-select-option",18),a._uU(45,"3"),a.qZA(),a.TgZ(46,"ion-select-option",19),a._uU(47,"4"),a.qZA(),a.TgZ(48,"ion-select-option",20),a._uU(49,"5"),a.qZA(),a.TgZ(50,"ion-select-option",21),a._uU(51,"6"),a.qZA()()()()(),a.TgZ(52,"ion-row")(53,"ion-col")(54,"ion-item",14)(55,"ion-label"),a._UZ(56,"ion-icon",9),a._uU(57," Quartos"),a.qZA(),a.TgZ(58,"ion-select",15)(59,"ion-select-option",16),a._uU(60,"1"),a.qZA(),a.TgZ(61,"ion-select-option",17),a._uU(62,"2"),a.qZA(),a.TgZ(63,"ion-select-option",18),a._uU(64,"3"),a.qZA(),a.TgZ(65,"ion-select-option",19),a._uU(66,"4"),a.qZA(),a.TgZ(67,"ion-select-option",20),a._uU(68,"5"),a.qZA(),a.TgZ(69,"ion-select-option",21),a._uU(70,"6"),a.qZA()()()()(),a.TgZ(71,"ion-row")(72,"ion-col")(73,"ion-button",22),a._uU(74,"Pesquisar"),a.qZA()()()()()()()(),a.TgZ(75,"section",23)(76,"ion-row")(77,"ion-col",24)(78,"h5",25),a._uU(79,"NOSSOS QUARTOS"),a.qZA()(),a.TgZ(80,"ion-col"),a._UZ(81,"hr"),a.qZA()(),a.TgZ(82,"ion-row")(83,"ion-col")(84,"div",26)(85,"ion-row")(86,"ion-col")(87,"h4",27),a._uU(88,"QUARTO DUPLO "),a._UZ(89,"br")(90,"br"),a.TgZ(91,"span",28),a._uU(92,"R$ 300"),a.qZA(),a._uU(93," / noite"),a.qZA()()()()(),a.TgZ(94,"ion-col")(95,"div",29)(96,"ion-row")(97,"ion-col")(98,"h4",27),a._uU(99,"QUARTO EXECUTIVO "),a._UZ(100,"br")(101,"br"),a.TgZ(102,"span",28),a._uU(103,"R$ 500"),a.qZA(),a._uU(104," / noite"),a.qZA()()()()(),a.TgZ(105,"ion-col")(106,"div",30)(107,"ion-row")(108,"ion-col")(109,"h4",27),a._uU(110,"QUARTO DE SOLTEIRO "),a._UZ(111,"br")(112,"br"),a.TgZ(113,"span",28),a._uU(114,"R$ 250"),a.qZA(),a._uU(115," / noite"),a.qZA()()()()(),a.TgZ(116,"ion-col")(117,"div",31)(118,"ion-row")(119,"ion-col")(120,"h4",27),a._uU(121,"VIP SUITE "),a._UZ(122,"br")(123,"br"),a.TgZ(124,"span",28),a._uU(125,"R$ 650"),a.qZA(),a._uU(126," / noite"),a.qZA()()()()()()(),a.TgZ(127,"section",32)(128,"ion-row")(129,"ion-col",24)(130,"h5",25),a._uU(131,"O QUE OFERECEMOS"),a.qZA()(),a.TgZ(132,"ion-col"),a._UZ(133,"hr"),a.qZA()(),a.TgZ(134,"ion-row")(135,"ion-col",33)(136,"ion-card",34)(137,"ion-card-content",27),a._UZ(138,"ion-icon",35),a.TgZ(139,"h5",36),a._uU(140,"ACOMODA\xc7\xd5ES"),a.qZA(),a.TgZ(141,"h6",37),a._uU(142,"Nossos quartos oferecem acomoda\xe7\xf5es confort\xe1veis \u200b\u200bcom Wi-Fi gratuito, aquecimento central etc."),a.qZA()()()(),a.TgZ(143,"ion-col",33)(144,"ion-card",34)(145,"ion-card-content",27),a._UZ(146,"ion-icon",38),a.TgZ(147,"h5",36),a._uU(148,"JANTAR"),a.qZA(),a.TgZ(149,"h6",37),a._uU(150,"Jante com estilo e no seu melhor no Restaurante Resort, que serve uma grande variedade de gostos."),a.qZA()()()(),a.TgZ(151,"ion-col",33)(152,"ion-card",34)(153,"ion-card-content",27),a._UZ(154,"ion-icon",39),a.TgZ(155,"h5",36),a._uU(156,"SERVI\xc7O DE QUARTO"),a.qZA(),a.TgZ(157,"h6",37),a._uU(158,"O servi\xe7o de quarto est\xe1 dispon\xedvel 24 horas, incluindo entregas de caf\xe9 da manh\xe3."),a.qZA()()()()()(),a.TgZ(159,"section",40)(160,"ion-row")(161,"ion-col",24)(162,"h5",25),a._uU(163,"COMO RESERVAR UM QUARTO"),a.qZA()(),a.TgZ(164,"ion-col"),a._UZ(165,"hr"),a.qZA()(),a.TgZ(166,"ion-row")(167,"ion-col",33)(168,"ion-card",34)(169,"ion-card-content",27),a._UZ(170,"ion-icon",41),a.TgZ(171,"h5",36),a._uU(172,"SELECIONE UMA ACOMODA\xc7\xc3O"),a.qZA(),a.TgZ(173,"h6",37),a._uU(174,"Voc\xea tamb\xe9m pode selecionar um tipo de quarto exato durante a confirma\xe7\xe3o da reserva."),a.qZA()()()(),a.TgZ(175,"ion-col",33)(176,"ion-card",34)(177,"ion-card-content",27),a._UZ(178,"ion-icon",42),a.TgZ(179,"h5",36),a._uU(180,"PREENCHA O FORMUL\xc1RIO ONLINE"),a.qZA(),a.TgZ(181,"h6",37),a._uU(182,"Tudo come\xe7a com o preenchimento do formul\xe1rio de reserva em nosso site."),a.qZA()()()(),a.TgZ(183,"ion-col",33)(184,"ion-card",34)(185,"ion-card-content",27),a._UZ(186,"ion-icon",43),a.TgZ(187,"h5",36),a._uU(188,"CHECK-IN NO HOTEL"),a.qZA(),a.TgZ(189,"h6",37),a._uU(190,"Ao chegar ao hotel, n\xe3o se esque\xe7a de fazer o check-in na recep\xe7\xe3o."),a.qZA()()()()()()(),a._UZ(191,"app-footer"),a.qZA()),2&n&&(a.Q6J("fullscreen",!0),a.xp6(20),a.Oqu(r.checkinDate),a.xp6(10),a.Oqu(r.checkoutDate),a.xp6(43),a.Q6J("routerLink",a.DdM(8,qt)),a.xp6(11),a.Q6J("routerLink",a.DdM(9,k)),a.xp6(11),a.Q6J("routerLink",a.DdM(10,k)),a.xp6(11),a.Q6J("routerLink",a.DdM(11,k)),a.xp6(11),a.Q6J("routerLink",a.DdM(12,k)))},directives:[f.W2,f.Nd,f.wI,f.PM,f.Zi,f.Dq,f.FN,f.Ie,f.Q$,f.gu,f.yW,f.d8,f.x4,f.QI,f.t9,f.n0,f.YG,f.YI,q.rH,_t.c],styles:[".banner[_ngcontent-%COMP%]{height:40vh;background-image:url(bg-banner.c9eda401e6dc80ed.png);background-size:cover;background-repeat:no-repeat;background-position:center center;border-radius:5px}.banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]{color:#fff;font-weight:700;margin:0 10vw;text-shadow:0px 4px 4px rgba(0,0,0,.25)}.banner[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]{background-color:#f0f0f5}.banner[_ngcontent-%COMP%]   .card-banner[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-weight:700}.banner[_ngcontent-%COMP%]   .input-card[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{width:86px}@media (max-height: 992px){.banner[_ngcontent-%COMP%]{min-height:60vh}}.divider-title[_ngcontent-%COMP%]{color:#41414db2}.title-card-promotions-section[_ngcontent-%COMP%]{font-size:1.1rem}.card-promotions[_ngcontent-%COMP%]{min-height:180px}.card-quartos[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:center center;border-radius:5px;height:350px;color:#fff}.card-quartos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700}.card-quartos[_ngcontent-%COMP%]   .text-price[_ngcontent-%COMP%]{color:#ffe600}"]}),e})()}];let At=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[q.Bz.forChild(St)],q.Bz]}),e})();var Wt=T(5642);let Nt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[B.ez,J.u5,f.Pc,At,Wt.K]]}),e})()}}]);