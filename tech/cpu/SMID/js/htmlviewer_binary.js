(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},h;if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var ba={B:!0},ca={};try{ca.__proto__=ba;k=ca.B;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=h;
function ea(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.l=b.prototype}var l=this||self;function m(){}function fa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}function n(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ha(a,b,c){return a.call.apply(a.bind,arguments)}function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p=ha:p=ia;return p.apply(null,arguments)}
function q(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function r(a,b){function c(){}c.prototype=b.prototype;a.l=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var ka=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function t(a,b){return a<b?-1:a>b?1:0};var u;a:{var la=l.navigator;if(la){var ma=la.userAgent;if(ma){u=ma;break a}}u=""};function na(a,b,c){for(var d in a)b.call(c,a[d],d,a)}var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<oa.length;f++)c=oa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function qa(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}function ra(a){return a.replace(/(^|[\s]+)([a-z])/g,function(b,c,d){return c+d.toUpperCase()})};function v(a){v[" "](a);return a}v[" "]=m;var sa=-1!=u.indexOf("Opera"),w=-1!=u.indexOf("Trident")||-1!=u.indexOf("MSIE"),ta=-1!=u.indexOf("Edge"),y=-1!=u.indexOf("Gecko")&&!(-1!=u.toLowerCase().indexOf("webkit")&&-1==u.indexOf("Edge"))&&!(-1!=u.indexOf("Trident")||-1!=u.indexOf("MSIE"))&&-1==u.indexOf("Edge"),ua=-1!=u.toLowerCase().indexOf("webkit")&&-1==u.indexOf("Edge");function va(){var a=l.document;return a?a.documentMode:void 0}var z;
a:{var A="",B=function(){var a=u;if(y)return/rv:([^\);]+)(\)|;)/.exec(a);if(ta)return/Edge\/([\d\.]+)/.exec(a);if(w)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ua)return/WebKit\/(\S+)/.exec(a);if(sa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();B&&(A=B?B[1]:"");if(w){var C=va();if(null!=C&&C>parseFloat(A)){z=String(C);break a}}z=A}var wa=z,D={},E;if(l.document&&w){var xa=va();E=xa?xa:parseInt(wa,10)||void 0}else E=void 0;var ya=E;function F(){this.h=this.h;this.b=this.b}F.prototype.h=!1;F.prototype.o=function(){this.h||(this.h=!0,this.g())};function G(a,b,c){a.h?void 0!==c?b.call(c):b():(a.b||(a.b=[]),a.b.push(void 0!==c?p(b,c):b))}F.prototype.g=function(){if(this.b)for(;this.b.length;)this.b.shift()()};function H(a){a&&"function"==typeof a.o&&a.o()};var I;(I=!w)||(I=9<=Number(ya));var za=I,J;
if(J=w){var Aa;if(Object.prototype.hasOwnProperty.call(D,"9"))Aa=D["9"];else{for(var K=0,Ba=ka(String(wa)).split("."),Ca=ka("9").split("."),Da=Math.max(Ba.length,Ca.length),L=0;0==K&&L<Da;L++){var Ea=Ba[L]||"",Fa=Ca[L]||"";do{var M=/(\d*)(\D*)(.*)/.exec(Ea)||["","","",""],N=/(\d*)(\D*)(.*)/.exec(Fa)||["","","",""];if(0==M[0].length&&0==N[0].length)break;K=t(0==M[1].length?0:parseInt(M[1],10),0==N[1].length?0:parseInt(N[1],10))||t(0==M[2].length,0==N[2].length)||t(M[2],N[2]);Ea=M[3];Fa=N[3]}while(0==
K)}Aa=D["9"]=0<=K}J=!Aa}var Ga=J,Ha=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",m,b),l.removeEventListener("test",m,b)}catch(c){}return a}();function O(a,b){this.type=a;this.a=this.target=b;this.defaultPrevented=!1}O.prototype.b=function(){this.defaultPrevented=!0};function P(a,b){O.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(y){a:{try{v(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ia[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b()}}r(P,O);var Ia={2:"touch",3:"pen",4:"mouse"};P.prototype.b=function(){P.l.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ga)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Q="closure_listenable_"+(1E6*Math.random()|0),Ja=0;function Ka(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.capture=!!d;this.j=e;this.key=++Ja;this.f=this.i=!1}function R(a){a.f=!0;a.listener=null;a.a=null;a.src=null;a.j=null};function S(a){this.src=a;this.a={};this.b=0}S.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=La(a,b,d,e);-1<g?(b=a[g],c||(b.i=!1)):(b=new Ka(b,this.src,f,!!d,e),b.i=c,a.push(b));return b};function Ma(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(R(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}
function La(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.f&&f.listener==b&&f.capture==!!c&&f.j==d)return e}return-1};var Na="closure_lm_"+(1E6*Math.random()|0),Oa={},Pa=0;function Qa(a,b,c,d,e){if(d&&d.once)return Ra(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)Qa(a,b[f],c,d,e);return null}c=Sa(c);return a&&a[Q]?a.a.add(String(b),c,!1,n(d)?!!d.capture:!!d,e):Ta(a,b,c,!1,d,e)}
function Ta(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=n(e)?!!e.capture:!!e,x=T(a);x||(a[Na]=x=new S(a));c=x.add(b,c,d,g,f);if(c.a)return c;d=Ua();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)Ha||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Va(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Pa++;return c}
function Ua(){var a=Wa,b=za?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Ra(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)Ra(a,b[f],c,d,e);return null}c=Sa(c);return a&&a[Q]?a.a.add(String(b),c,!0,n(d)?!!d.capture:!!d,e):Ta(a,b,c,!0,d,e)}
function Xa(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xa(a,b[f],c,d,e);else(d=n(d)?!!d.capture:!!d,c=Sa(c),a&&a[Q])?(a=a.a,b=String(b).toString(),b in a.a&&(f=a.a[b],c=La(f,c,d,e),-1<c&&(R(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=T(a))&&(b=a.a[b.toString()],a=-1,b&&(a=La(b,c,d,e)),(c=-1<a?b[a]:null)&&Ya(c))}
function Ya(a){if("number"!==typeof a&&a&&!a.f){var b=a.src;if(b&&b[Q])Ma(b.a,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Va(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pa--;(c=T(b))?(Ma(c,a),0==c.b&&(c.src=null,b[Na]=null)):R(a)}}}function Va(a){return a in Oa?Oa[a]:Oa[a]="on"+a}
function Za(a,b,c,d){var e=!0;if(a=T(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.f&&(f=$a(f,d),e=e&&!1!==f)}return e}function $a(a,b){var c=a.listener,d=a.j||a.src;a.i&&Ya(a);return c.call(d,b)}
function Wa(a,b){if(a.f)return!0;if(!za){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new P(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=Za(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=Za(d[e],a,!1,b),c=c&&f}return c}return $a(a,
new P(b,this))}function T(a){a=a[Na];return a instanceof S?a:null}var ab="__closure_events_fn_"+(1E9*Math.random()>>>0);function Sa(a){if("function"==fa(a))return a;a[ab]||(a[ab]=function(b){return a.handleEvent(b)});return a[ab]};function U(a){F.call(this);this.c=a;this.a={}}r(U,F);var bb=[];function V(a,b,c,d){Array.isArray(c)||(c&&(bb[0]=c.toString()),c=bb);for(var e=0;e<c.length;e++){var f=Qa(b,c[e],d||a.handleEvent,!1,a.c||a);if(!f)break;a.a[f.key]=f}return a}function cb(a){na(a.a,function(b,c){this.a.hasOwnProperty(c)&&Ya(b)},a);a.a={}}U.prototype.g=function(){U.l.g.call(this);cb(this)};U.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function W(){F.call(this);this.a=new S(this);this.C=this;this.m=null}r(W,F);W.prototype[Q]=!0;W.prototype.addEventListener=function(a,b,c,d){Qa(this,a,b,c,d)};W.prototype.removeEventListener=function(a,b,c,d){Xa(this,a,b,c,d)};
function db(a,b){var c=a.m;if(c){var d=[];for(var e=1;c;c=c.m)d.push(c),++e}a=a.C;c=b.type||b;"string"===typeof b?b=new O(b,a):b instanceof O?b.target=b.target||a:(e=b,b=new O(c,a),pa(b,e));e=!0;if(d)for(var f=d.length-1;0<=f;f--){var g=b.a=d[f];e=X(g,c,!0,b)&&e}g=b.a=a;e=X(g,c,!0,b)&&e;e=X(g,c,!1,b)&&e;if(d)for(f=0;f<d.length;f++)g=b.a=d[f],e=X(g,c,!1,b)&&e}
W.prototype.g=function(){W.l.g.call(this);if(this.a){var a=this.a,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,R(d[e]);delete a.a[c];a.b--}}this.m=null};function X(a,b,c,d){b=a.a.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.f&&g.capture==c){var x=g.listener,mb=g.j||g.src;g.i&&Ma(a.a,g);e=!1!==x.call(mb,d)&&e}}return e&&!d.defaultPrevented};function Y(a){W.call(this);this.c=a||l;this.A="screen";this.s=new U(this);G(this,q(H,this.s));V(V(this.s,this.c,"beforeprint",this.u),this.c,"afterprint",this.v);if(this.c.matchMedia){a=p(this.D,this);for(var b in eb){var c=this.c.matchMedia(eb[b]);c.addListener(a);G(this,q(c.removeListener,a),c)}}}ea(Y,W);Y.prototype.u=function(){fb(this,"print")&&db(this,"a")};Y.prototype.v=function(){fb(this,"screen")&&db(this,"b")};function fb(a,b){var c=a.A!=b;a.A=b;return c}
Y.prototype.D=function(){this.c.matchMedia("screen").matches?this.v():this.c.matchMedia("print").matches&&this.u()};var eb={F:"print",G:"screen"};function Z(a,b){this.width=a;this.height=b}Z.prototype.aspectRatio=function(){return this.width/this.height};Z.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};Z.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};Z.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function gb(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function hb(){var a=document.body;if(a.classList)a.classList.add("docs-ml-noselect");else{if(a.classList)var b=a.classList.contains("docs-ml-noselect");else b=a.classList?a.classList:gb(a).match(/\S+/g)||[],b=0<=ja(b,"docs-ml-noselect");b||(b=gb(a),b+=0<b.length?" docs-ml-noselect":"docs-ml-noselect","string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b))}};function ib(a,b,c){if("string"===typeof b)(b=jb(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=jb(c,d);f&&(c.style[f]=e)}}var kb={};function jb(a,b){var c=kb[b];if(!c){var d=qa(b);c=d;void 0===a.style[d]&&(d=(ua?"Webkit":y?"Moz":w?"ms":sa?"O":null)+ra(d),void 0!==a.style[d]&&(c=d));kb[b]=c}return c};function lb(){F.call(this);this.a=new U(this);G(this,q(H,this.a));V(this.a,window,"resize",function(){return nb()})}ea(lb,F);function ob(a){hb();var b=new Y;G(a,q(H,b));V(V(a.a,b,"a",function(){document.body.style.display="none"}),b,"b",function(){document.body.style.display=""})}
function nb(){var a=document.body,b=window.document;b="CSS1Compat"==b.compatMode?b.documentElement:b.body;b=(new Z(b.clientWidth,b.clientHeight)).width/a.scrollWidth;1<b&&(b=1);ib(a,"transform","scale("+b+")");ib(a,"transform-origin","0 0")}l.SK_initHtmlViewer=function(a){var b=new lb;a&&ob(b);nb()};}).call(this);
