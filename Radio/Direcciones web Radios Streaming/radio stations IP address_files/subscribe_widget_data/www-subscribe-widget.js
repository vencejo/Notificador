(function(){var m,p=this;function q(a){a=a.split(".");for(var b=p,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function ba(a){a.getInstance=function(){return a.V?a.V:a.V=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function ea(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var fa="closure_uid_"+(1E9*Math.random()>>>0),ga=0;function ha(a,b,c){return a.call.apply(a.bind,arguments)}
function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return t.apply(null,arguments)}
var ka=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=p;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}}
;var la;var ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function na(a,b){return a<b?-1:a>b?1:0}
;var oa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},pa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},qa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function ra(a,b){var c;a:{c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function sa(a,b){return 0<=oa(a,b)}
function ta(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function wa(a,b,c,d){return Array.prototype.splice.apply(a,xa(arguments,1))}
function xa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function ya(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function za(a,b){return a.classList?a.classList.contains(b):sa(ya(a),b)}
function Aa(a,b){a.classList?a.classList.add(b):za(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Ba(a,b){a.classList?a.classList.remove(b):za(a,b)&&(a.className=pa(ya(a),function(a){return a!=b}).join(" "))}
function Ca(a,b,c){c?Aa(a,b):Ba(a,b)}
;function Da(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ea(a){var b=Fa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ha(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ga.length;f++)c=Ga[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ia;a:{var Ja=p.navigator;if(Ja){var Ka=Ja.userAgent;if(Ka){Ia=Ka;break a}}Ia=""}function x(a){return-1!=Ia.indexOf(a)}
;function La(){this.h="";this.f=null}
function Ma(a,b){var c=new La;c.h=a;c.f=b;return c}
Ma("<!DOCTYPE html>",0);Ma("",0);Ma("<br>",0);function y(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
y.prototype.clone=function(){return new y(this.x,this.y)};
y.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
y.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
y.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Na(a,b){this.width=a;this.height=b}
m=Na.prototype;m.clone=function(){return new Na(this.width,this.height)};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Oa=x("Opera")||x("OPR"),z=x("Trident")||x("MSIE"),Pa=x("Edge"),Qa=x("Gecko")&&!(-1!=Ia.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Ra=-1!=Ia.toLowerCase().indexOf("webkit")&&!x("Edge"),Sa=x("Windows");function Ta(){var a=p.document;return a?a.documentMode:void 0}
var Ua;a:{var Va="",Wa=function(){var a=Ia;if(Qa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Pa)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ra)return/WebKit\/(\S+)/.exec(a);if(Oa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wa&&(Va=Wa?Wa[1]:"");if(z){var Xa=Ta();if(null!=Xa&&Xa>parseFloat(Va)){Ua=String(Xa);break a}}Ua=Va}var Ya=Ua,Za={};
function $a(a){var b;if(!(b=Za[a])){b=0;for(var c=ma(String(Ya)).split("."),d=ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var n=k.exec(g)||["","",""],L=l.exec(h)||["","",""];if(0==n[0].length&&0==L[0].length)break;b=na(0==n[1].length?0:parseInt(n[1],10),0==L[1].length?0:parseInt(L[1],10))||na(0==n[2].length,0==L[2].length)||na(n[2],L[2])}while(0==b)}b=Za[a]=0<=b}return b}
var ab=p.document,bb=ab&&z?Ta()||("CSS1Compat"==ab.compatMode?parseInt(Ya,10):5):void 0;!Qa&&!z||z&&9<=Number(bb)||Qa&&$a("1.9.1");var cb=z&&!$a("9");function db(a){return a?new eb(fb(a)):la||(la=new eb)}
function A(a){var b=document;return r(a)?b.getElementById(a):a}
function gb(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):ib(a)}
function ib(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&sa(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function jb(a){return"CSS1Compat"==a.compatMode}
function fb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function kb(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);c=fb(a);a.appendChild(c.createTextNode(String(b)))}}
var lb={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},nb={IMG:" ",BR:"\n"};function ob(a){if(cb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];pb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");cb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function pb(a,b,c){if(!(a.nodeName in lb))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in nb)b.push(nb[a.nodeName]);else for(a=a.firstChild;a;)pb(a,b,c),a=a.nextSibling}
function qb(a){var b=rb.fa;return b?sb(a,function(a){return!b||r(a.className)&&sa(a.className.split(/\s+/),b)},!0,void 0):null}
function sb(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function eb(a){this.f=a||p.document||document}
eb.prototype.createElement=function(a){return this.f.createElement(a)};
eb.prototype.isElement=function(a){return ea(a)&&1==a.nodeType};
eb.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function tb(a){p.setTimeout(function(){throw a;},0)}
var ub;
function vb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.T;c.T=null;a()}};
return function(a){d.next={T:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function wb(a,b,c){this.l=c;this.j=a;this.m=b;this.h=0;this.f=null}
wb.prototype.get=function(){var a;0<this.h?(this.h--,a=this.f,this.f=a.next,a.next=null):a=this.j();return a};function xb(){this.h=this.f=null}
var zb=new wb(function(){return new yb},function(a){a.reset()},100);
xb.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function yb(){this.next=this.h=this.f=null}
yb.prototype.set=function(a,b){this.f=a;this.h=b;this.next=null};
yb.prototype.reset=function(){this.next=this.h=this.f=null};function Ab(a){Bb||Cb();Db||(Bb(),Db=!0);var b=Eb,c=zb.get();c.set(a,void 0);b.h?b.h.next=c:b.f=c;b.h=c}
var Bb;function Cb(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Bb=function(){a.then(Fb)}}else Bb=function(){var a=Fb;
"function"!=ca(p.setImmediate)||p.Window&&p.Window.prototype&&!x("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(ub||(ub=vb()),ub(a)):p.setImmediate(a)}}
var Db=!1,Eb=new xb;function Fb(){for(var a=null;a=Eb.remove();){try{a.f.call(a.h)}catch(c){tb(c)}var b=zb;b.m(a);b.h<b.l&&(b.h++,a.next=b.f,b.f=a)}Db=!1}
;function Gb(){this.h=this.h;this.j=this.j}
Gb.prototype.h=!1;Gb.prototype.isDisposed=function(){return this.h};
Gb.prototype.dispose=function(){this.h||(this.h=!0,this.L())};
Gb.prototype.L=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function B(a){Gb.call(this);this.G=1;this.l=[];this.m=0;this.f=[];this.o={};this.ba=!!a}
v(B,Gb);m=B.prototype;m.subscribe=function(a,b,c){var d=this.o[a];d||(d=this.o[a]=[]);var e=this.G;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.G=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.o[a]){var d=this.f;if(a=ra(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.D(a)}return!1};
m.D=function(a){var b=this.f[a];if(b){var c=this.o[b];if(0!=this.m)this.l.push(a),this.f[a+1]=aa;else{if(c){var d=oa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
m.H=function(a,b){var c=this.o[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.ba)for(e=0;e<c.length;e++){var g=c[e];Hb(this.f[g+1],this.f[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.D(c)}}return 0!=e}return!1};
function Hb(a,b,c){Ab(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.o[a];b&&(w(b,this.D,this),delete this.o[a])}else this.f.length=0,this.o={}};
function Ib(a,b){if(b){var c=a.o[b];return c?c.length:0}var c=0,d;for(d in a.o)c+=Ib(a,d);return c}
m.L=function(){B.N.L.call(this);this.clear();this.l.length=0};var Jb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Jb);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var Kb=window.yt&&window.yt.msgs_||q("window.ytcfg.msgs")||{};u("yt.msgs_",Kb);function Lb(a){var b=arguments;if(1<b.length){var c=b[0];Jb[c]=b[1]}else for(c in b=b[0],b)Jb[c]=b[c]}
function C(a,b){return a in Jb?Jb[a]:b}
function D(a,b){"function"==ca(a)&&(a=Mb(a));return window.setTimeout(a,b)}
function Mb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Nb(b),b;}}:a}
function Nb(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0):(b=C("ERRORS",[]),b.push([a,void 0,void 0,void 0]),Lb("ERRORS",b))}
;function Ob(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():D(a,b||0)}
;function E(a,b){this.version=a;this.args=b}
function Pb(a){if(!a.ca){var b={};a.call(b);a.ca=b.version}return a.ca}
function Qb(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Pb(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function F(a,b){this.h=a;this.f=b}
F.prototype.toString=function(){return this.h};var Rb=q("yt.pubsub2.instance_")||new B;B.prototype.subscribe=B.prototype.subscribe;B.prototype.unsubscribeByKey=B.prototype.D;B.prototype.publish=B.prototype.H;B.prototype.clear=B.prototype.clear;u("yt.pubsub2.instance_",Rb);var Sb=q("yt.pubsub2.subscribedKeys_")||{};u("yt.pubsub2.subscribedKeys_",Sb);var Tb=q("yt.pubsub2.topicToKeys_")||{};u("yt.pubsub2.topicToKeys_",Tb);var Ub=q("yt.pubsub2.isAsync_")||{};u("yt.pubsub2.isAsync_",Ub);u("yt.pubsub2.skipSubKey_",null);
function G(a,b){var c=Vb();c&&c.publish.call(c,a.toString(),a,b)}
function H(a,b,c){var d=Vb();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var h=function(){if(Sb[e])try{if(g&&a instanceof F&&a!=d)try{g=Qb(a.f,g)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){Nb(k)}};
Ub[a.toString()]?q("yt.scheduler.instance")?Ob(h):D(h,0):h()}});
Sb[e]=!0;Tb[a.toString()]||(Tb[a.toString()]=[]);Tb[a.toString()].push(e);return e}
function Wb(a){var b=Vb();b&&("number"==typeof a&&(a=[a]),w(a,function(a){b.unsubscribeByKey(a);delete Sb[a]}))}
function Vb(){return q("yt.pubsub2.instance_")}
;var I=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Xb(a){return a?decodeURI(a):a}
function Yb(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Zb(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function $b(a,b,c){for(c=c||0;c<b.length;c+=2)Zb(b[c],b[c+1],a);return a}
function ac(a,b){for(var c in b)Zb(c,b[c],a);return a}
function bc(a){a=ac([],a);a[0]="";return a.join("")}
function cc(a,b){return Yb(2==arguments.length?$b([a],arguments[1],0):$b([a],arguments,1))}
;var dc={},ec=0,fc=q("yt.net.ping.workerUrl_")||null;u("yt.net.ping.workerUrl_",fc);function gc(a){var b=new Image,c=""+ec++;dc[c]=b;b.onload=b.onerror=function(){delete dc[c]};
b.src=a}
;function hc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ca(b[f])?va(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function ic(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=hc(d[1]||""),e;for(e in b)d[e]=b[e];return Yb(ac([a],d))+c}
;function jc(a){E.call(this,1,arguments);this.f=a}
v(jc,E);function J(a){E.call(this,1,arguments);this.f=a}
v(J,E);function kc(a,b){E.call(this,1,arguments);this.f=a;this.h=b}
v(kc,E);function lc(a,b,c,d,e){E.call(this,2,arguments);this.h=a;this.f=b;this.l=c||null;this.j=d||null;this.m=e||null}
v(lc,E);function mc(a,b,c){E.call(this,1,arguments);this.f=a;this.h=b}
v(mc,E);function nc(a,b,c,d,e,f,g){E.call(this,1,arguments);this.h=a;this.G=b;this.f=c;this.ba=d||null;this.l=e||null;this.j=f||null;this.m=g||null}
v(nc,E);
var oc=new F("subscription-batch-subscribe",jc),pc=new F("subscription-batch-unsubscribe",jc),qc=new F("subscription-pref-email",kc),rc=new F("subscription-subscribe",lc),sc=new F("subscription-subscribe-loading",J),tc=new F("subscription-subscribe-loaded",J),uc=new F("subscription-subscribe-success",mc),vc=new F("subscription-subscribe-external",lc),wc=new F("subscription-unsubscribe",nc),xc=new F("subscription-unsubscirbe-loading",J),yc=new F("subscription-unsubscribe-loaded",J),zc=new F("subscription-unsubscribe-success",J),
Ac=new F("subscription-external-unsubscribe",nc),Bc=new F("subscription-enable-ypc",J),Cc=new F("subscription-disable-ypc",J);var Dc=q("yt.pubsub.instance_")||new B;B.prototype.subscribe=B.prototype.subscribe;B.prototype.unsubscribeByKey=B.prototype.D;B.prototype.publish=B.prototype.H;B.prototype.clear=B.prototype.clear;u("yt.pubsub.instance_",Dc);var Ec=q("yt.pubsub.subscribedKeys_")||{};u("yt.pubsub.subscribedKeys_",Ec);var Fc=q("yt.pubsub.topicToKeys_")||{};u("yt.pubsub.topicToKeys_",Fc);var Gc=q("yt.pubsub.isSynchronous_")||{};u("yt.pubsub.isSynchronous_",Gc);var Hc=q("yt.pubsub.skipSubId_")||null;
u("yt.pubsub.skipSubId_",Hc);function Ic(a,b,c){var d=Jc();if(d){var e=d.subscribe(a,function(){if(!Hc||Hc!=e){var d=arguments,g;g=function(){Ec[e]&&b.apply(c||window,d)};
try{Gc[a]?g():D(g,0)}catch(h){Nb(h)}}},c);
Ec[e]=!0;Fc[a]||(Fc[a]=[]);Fc[a].push(e);return e}return 0}
function Kc(a){var b=Jc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete Ec[a]}))}
function Lc(a,b){var c=Jc();return c?c.publish.apply(c,arguments):!1}
function Jc(){return q("yt.pubsub.instance_")}
;function Mc(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=cc(b,"mode","subscribe"),b=cc("/signin?context=popup","next",b),b=cc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Ic("LOGGED_IN",function(b){Kc(C("LOGGED_IN_PUBSUB_KEY",void 0));Lb("LOGGED_IN",!0);a(b)});
Lb("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",Lc);function Nc(a){return eval("("+a+")")}
;var Oc=null;"undefined"!=typeof XMLHttpRequest?Oc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Oc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Pc(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Mb(b)(k)}
var k=Oc&&Oc();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=Qc(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function Qc(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(I)[1]||null,e=Xb(a.match(I)[3]||null);d&&e?(d=c,c=a.match(I),d=d.match(I),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Xb(c.match(I)[3]||null)==e&&(Number(c.match(I)[4]||null)||null)==(Number(a.match(I)[4]||null)||null):!0;for(var f in Rc){if((e=d=C(Rc[f]))&&!(e=c)){var e=f,g=C("CORS_HEADER_WHITELIST")||{},h=Xb(a.match(I)[3]||null);e=h?(g=g[h])?sa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Sc(a,b){var c=C("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ca&&(!Xb(a.match(I)[3]||null)||b.withCredentials||Xb(a.match(I)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.A&&b.A[c])}
function Tc(a,b){var c=b.format||"JSON";b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=C("XSRF_FIELD_NAME",void 0),e=C("XSRF_TOKEN",void 0),f=b.aa;f&&(f[d]&&delete f[d],a=ic(a,f||{}));var g=b.Ea||"",f=b.A;Sc(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=hc(g),Ha(d,f),g=bc(d));var h=!1,k,l=Pc(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Uc(c,a,b.Ba);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||p;d?b.C&&b.C.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.M&&b.M.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.ta&&0<b.timeout&&(k=D(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.ta.call(b.context||p,l))},b.timeout))}
function Uc(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Nc(a));break;case "XML":if(b=(b=b.responseXML)?Vc(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=Wc(a)})}c&&Xc(d);
return d}
function Xc(a){if(ea(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Ma(a[b],null);a[c]=d}else Xc(a[b])}}
function Vc(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Wc(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Rc={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function K(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=K.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new K(this.top,this.right,this.bottom,this.left)};
m.contains=function(a){return this&&a?a instanceof K?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Yc(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
m=Yc.prototype;m.clone=function(){return new Yc(this.left,this.top,this.width,this.height)};
m.contains=function(a){return a instanceof Yc?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
m.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function M(a,b){var c=fb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Zc(a,b){return M(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function $c(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ad(a){"number"==typeof a&&(a=a+"px");return a}
function bd(a){var b=cd;if("none"!=Zc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function cd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Ra&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=$c(a),new Na(a.right-a.left,a.bottom-a.top)):new Na(b,c)}
function dd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function ed(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?dd(a,c):0}
var fd={thin:2,medium:4,thick:6};function gd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in fd?fd[c]:dd(a,c)}
;var hd=Ra?"webkit":Qa?"moz":z?"ms":Oa?"o":"",id=q("yt.dom.getNextId_");if(!id){id=function(){return++jd};
u("yt.dom.getNextId_",id);var jd=0}function kd(){var a=document,b;qa(["fullscreenElement","fullScreenElement"],function(c){c in a?b=a[c]:(c=hd+c.charAt(0).toUpperCase()+c.substr(1),b=c in a?a[c]:void 0);return!!b});
return b}
;function ld(a,b){(a=A(a))&&a.style&&(a.style.display=b?"":"none",Ca(a,"hid",!b))}
function md(a){w(arguments,function(a){!da(a)||a instanceof Element?ld(a,!0):w(a,function(a){md(a)})})}
function nd(a){w(arguments,function(a){!da(a)||a instanceof Element?ld(a,!1):w(a,function(a){nd(a)})})}
;function od(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in pd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&
(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
od.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
od.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
od.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var pd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Fa=q("yt.events.listeners_")||{};u("yt.events.listeners_",Fa);var qd=q("yt.events.counter_")||{count:0};u("yt.events.counter_",qd);function rd(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ea(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function N(a,b){var c=document,d=sd;if(c&&(c.addEventListener||c.attachEvent)){var e=!!b,f=rd(c,a,d,e);if(!f){var f=++qd.count+"",g=!("mouseenter"!=a&&"mouseleave"!=a||!c.addEventListener||"onmouseenter"in document),h;h=g?function(b){b=new od(b);if(!sb(b.relatedTarget,function(a){return a==c},!0))return b.currentTarget=c,b.type=a,d.call(c,b)}:function(a){a=new od(a);
a.currentTarget=c;return d.call(c,a)};
h=Mb(h);c.addEventListener?("mouseenter"==a&&g?a="mouseover":"mouseleave"==a&&g?a="mouseout":"mousewheel"==a&&"MozBoxSizing"in document.documentElement.style&&(a="MozMousePixelScroll"),c.addEventListener(a,h,e)):c.attachEvent("on"+a,h);Fa[f]=[c,a,d,h,e]}}}
;var O={},td="ontouchstart"in document;function ud(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return sb(c,function(a){return za(a,b)},!0,d)}
function sd(a){var b="mouseover"==a.type&&"mouseenter"in O||"mouseout"==a.type&&"mouseleave"in O,c=a.type in O||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=O[b],d;for(d in c.o){var e=ud(b,d,a.target);e&&!sb(a.relatedTarget,function(a){return a==e},!0)&&c.H(d,e,b,a)}}if(b=O[a.type])for(d in b.o)(e=ud(a.type,d,a.target))&&b.H(d,e,a.type,a)}}
N("blur",!0);N("change",!0);N("click");N("focus",!0);N("mouseover");N("mouseout");N("mousedown");N("keydown");N("keyup");N("keypress");N("cut");N("paste");td&&(N("touchstart"),N("touchend"),N("touchcancel"));function P(a,b,c){a&&(a.dataset?a.dataset[vd(b)]=c:a.setAttribute("data-"+b,c))}
function Q(a,b){return a?a.dataset?a.dataset[vd(b)]:a.getAttribute("data-"+b):null}
function R(a,b){a&&(a.dataset?delete a.dataset[vd(b)]:a.removeAttribute("data-"+b))}
var wd={};function vd(a){return wd[a]||(wd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function S(a){this.m=a;this.j={};this.I=[];this.l=[]}
function T(a,b){return"yt-uix"+(a.m?"-"+a.m:"")+(b?"-"+b:"")}
S.prototype.unregister=function(){Kc(this.I);this.I.length=0;Wb(this.l);this.l.length=0};
S.prototype.init=aa;S.prototype.dispose=aa;function U(a,b,c){a.l.push(H(b,c,a))}
function V(a,b,c){var d=T(a,void 0),e=t(c,a);b in O||(O[b]=new B);O[b].subscribe(d,e);a.j[c]=e}
function W(a,b,c){if(b in O){var d=O[b];d.unsubscribe(T(a,void 0),a.j[c]);0>=Ib(d)&&(d.dispose(),delete O[b])}delete a.j[c]}
function xd(a,b){P(a,"tooltip-text",b)}
;function yd(){S.call(this,"tooltip");this.f=0;this.h={}}
v(yd,S);ba(yd);m=yd.prototype;m.register=function(){V(this,"mouseover",this.F);V(this,"mouseout",this.v);V(this,"focus",this.U);V(this,"blur",this.S);V(this,"click",this.v);V(this,"touchstart",this.$);V(this,"touchend",this.J);V(this,"touchcancel",this.J)};
m.unregister=function(){W(this,"mouseover",this.F);W(this,"mouseout",this.v);W(this,"focus",this.U);W(this,"blur",this.S);W(this,"click",this.v);W(this,"touchstart",this.$);W(this,"touchend",this.J);W(this,"touchcancel",this.J);this.dispose();yd.N.unregister.call(this)};
m.dispose=function(){for(var a in this.h)this.v(this.h[a]);this.h={}};
m.F=function(a){if(!(this.f&&1E3>ka()-this.f)){var b=parseInt(Q(a,"tooltip-hide-timer"),10);b&&(R(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){zd(this,a);R(a,"tooltip-show-timer")},this),c=parseInt(Q(a,"tooltip-show-delay"),10)||0,b=D(b,c);
P(a,"tooltip-show-timer",b.toString());a.title&&(xd(a,Ad(a)),a.title="");b=(a[fa]||(a[fa]=++ga)).toString();this.h[b]=a}};
m.v=function(a){var b=parseInt(Q(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),R(a,"tooltip-show-timer"));b=t(function(){if(a){var b=A(Bd(this,a));b&&(Cd(b),b&&b.parentNode&&b.parentNode.removeChild(b),R(a,"content-id"));(b=A(Bd(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}R(a,"tooltip-hide-timer")},this);
b=D(b,50);P(a,"tooltip-hide-timer",b.toString());if(b=Q(a,"tooltip-text"))a.title=b;b=(a[fa]||(a[fa]=++ga)).toString();delete this.h[b]};
m.U=function(a){this.f=0;this.F(a)};
m.S=function(a){this.f=0;this.v(a)};
m.$=function(a,b,c){c.changedTouches&&(this.f=0,a=ud(b,T(this),c.changedTouches[0].target),this.F(a))};
m.J=function(a,b,c){c.changedTouches&&(this.f=ka(),a=ud(b,T(this),c.changedTouches[0].target),this.v(a))};
function Dd(a,b){xd(a,b);var c=Q(a,"content-id");(c=A(c))&&kb(c,b)}
function Ad(a){return Q(a,"tooltip-text")||a.title}
function zd(a,b){if(b){var c=Ad(b);if(c){var d=A(Bd(a,b));if(!d){d=document.createElement("div");d.id=Bd(a,b);d.className=T(a,"tip");var e=document.createElement("div");e.className=T(a,"tip-body");var f=document.createElement("div");f.className=T(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=T(a,"tip-content");var h=Ed(a,b),k=Bd(a,b,"content");g.id=k;P(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var k=
ob(b),l=Bd(a,b,"arialabel"),f=document.createElement("div");Aa(f,T(a,"arialabel"));f.id=l;"rtl"==document.body.getAttribute("dir")?kb(f,c+" "+k):kb(f,k+" "+c);b.setAttribute("aria-labelledby",l);k=kd()||document.body;k.appendChild(f);k.appendChild(d);Dd(b,c);(c=parseInt(Q(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",Aa(g,T(a,"normal-wrap")));g=za(b,T(a,"reverse"));Fd(a,b,d,e,h,g)||Fd(a,b,d,e,h,!g);var n=T(a,"tip-visible");D(function(){Aa(d,n)},0)}}}}
function Fd(a,b,c,d,e,f){Ca(c,T(a,"tip-reverse"),f);var g=0;f&&(g=1);a=bd(b);f=new y((a.width-10)/2,f?a.height:0);var h=fb(b),k=new y(0,0),l;l=h?fb(h):document;l=!z||9<=Number(bb)||jb(db(l).f)?l.documentElement:l.body;if(b!=l){l=$c(b);var n=db(h).f,h=n.scrollingElement?n.scrollingElement:!Ra&&jb(n)?n.documentElement:n.body||n.documentElement,n=n.parentWindow||n.defaultView,h=z&&$a("10")&&n.pageYOffset!=h.scrollTop?new y(h.scrollLeft,h.scrollTop):new y(n.pageXOffset||h.scrollLeft,n.pageYOffset||h.scrollTop);
k.x=l.left+h.x;k.y=l.top+h.y}f=new y(k.x+f.x,k.y+f.y);f=f.clone();k=(g&8&&"rtl"==Zc(c,"direction")?g^4:g)&-9;g=bd(c);l=g.clone();h=f.clone();l=l.clone();0!=k&&(k&4?h.x-=l.width+0:k&2&&(h.x-=l.width/2),k&1&&(h.y-=l.height+0));f=new Yc(0,0,0,0);f.left=h.x;f.top=h.y;f.width=l.width;f.height=l.height;l=new y(f.left,f.top);l instanceof y?(k=l.x,l=l.y):(k=l,l=void 0);c.style.left=ad(k);c.style.top=ad(l);l=new Na(f.width,f.height);if(!(g==l||g&&l&&g.width==l.width&&g.height==l.height))if(g=l,f=fb(c),k=jb(db(f).f),
!z||$a("10")||k&&$a("8"))f=c.style,Qa?f.MozBoxSizing="border-box":Ra?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.width,0)+"px",f.height=Math.max(g.height,0)+"px";else if(f=c.style,k){z?(k=ed(c,"paddingLeft"),l=ed(c,"paddingRight"),h=ed(c,"paddingTop"),n=ed(c,"paddingBottom"),k=new K(h,l,n,k)):(k=M(c,"paddingLeft"),l=M(c,"paddingRight"),h=M(c,"paddingTop"),n=M(c,"paddingBottom"),k=new K(parseFloat(h),parseFloat(l),parseFloat(n),parseFloat(k)));if(!z||9<=Number(bb))l=
M(c,"borderLeftWidth"),h=M(c,"borderRightWidth"),n=M(c,"borderTopWidth"),L=M(c,"borderBottomWidth"),l=new K(parseFloat(n),parseFloat(h),parseFloat(L),parseFloat(l));else{l=gd(c,"borderLeft");var h=gd(c,"borderRight"),n=gd(c,"borderTop"),L=gd(c,"borderBottom");l=new K(n,h,L,l)}f.pixelWidth=g.width-l.left-k.left-k.right-l.right;f.pixelHeight=g.height-l.top-k.top-k.bottom-l.bottom}else f.pixelWidth=g.width,f.pixelHeight=g.height;g=window.document;g=jb(g)?g.documentElement:g.body;f=new Na(g.clientWidth,
g.clientHeight);1==c.nodeType?(c=$c(c),l=new y(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,l=new y(c.clientX,c.clientY));c=bd(d);h=Math.floor(c.width/2);g=!!(f.height<l.y+a.height);a=!!(l.y<a.height);k=!!(l.x<h);f=!!(f.width<l.x+h);l=(c.width+3)/-2- -5;b=Q(b,"force-tooltip-direction");if("left"==b||k)l=-5;else if("right"==b||f)l=20-c.width-3;b=Math.floor(l)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||a)}
function Bd(a,b,c){a=T(a);var d=b.__yt_uid_key;d||(d=id(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Ed(a,b){var c=null;Sa&&za(b,T(a,"masked"))&&((c=A("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),md(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=T(a,"tip-mask")));return c}
function Cd(a){var b=A("yt-uix-tooltip-shared-mask"),c=b&&sb(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),nd(b),document.body.appendChild(b))}
;function X(){S.call(this,"subscription-button")}
v(X,S);ba(X);X.prototype.register=function(){V(this,"click",this.K);U(this,sc,this.X);U(this,tc,this.W);U(this,uc,this.sa);U(this,xc,this.X);U(this,yc,this.W);U(this,zc,this.ua);U(this,Bc,this.ra);U(this,Cc,this.qa)};
X.prototype.unregister=function(){W(this,"click",this.K);X.N.unregister.call(this)};
var rb={O:"hover-enabled",da:"yt-uix-button-subscribe",ea:"yt-uix-button-subscribed",va:"ypc-enabled",fa:"yt-uix-button-subscription-container",ga:"yt-subscription-button-disabled-mask-container"},Y={wa:"channel-external-id",ha:"subscriber-count-show-when-subscribed",ia:"subscriber-count-tooltip",ka:"subscriber-count-title",xa:"href",P:"is-subscribed",ya:"parent-url",za:"clicktracking",la:"style-type",R:"subscription-id",Aa:"target",ma:"ypc-enabled"};m=X.prototype;
m.K=function(a){var b=Q(a,"href"),c;c=(c=C("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!C("SESSION_INDEX")&&!C("LOGGED_IN"));if(b)a=Q(a,"target")||"_self",window.open(b,a);else if(c){b=Q(a,"channel-external-id");c=Q(a,"clicktracking");var d;if(Q(a,"ypc-enabled")){d=Q(a,"ypc-item-type");var e=Q(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=Q(a,"parent-url");if(Q(a,"is-subscribed")){var f=Q(a,"subscription-id");G(wc,new nc(b,f,d,a,c,e))}else G(rc,new lc(b,
d,c,e))}else Gd(this,a)};
m.X=function(a){this.B(a.f,this.Y,!0)};
m.W=function(a){this.B(a.f,this.Y,!1)};
m.sa=function(a){this.B(a.f,this.Z,!0,a.h)};
m.ua=function(a){this.B(a.f,this.Z,!1)};
m.ra=function(a){this.B(a.f,this.pa)};
m.qa=function(a){this.B(a.f,this.oa)};
m.Z=function(a,b,c){b?(P(a,Y.P,"true"),c&&P(a,Y.R,c)):(R(a,Y.P),R(a,Y.R));Hd(a)};
m.Y=function(a,b){var c;c=qb(a);Ca(c,rb.ga,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Hd(a){var b=Q(a,Y.la),c=!!Q(a,"is-subscribed"),b="-"+b,d=rb.ea+b;Ca(a,rb.da+b,!c);Ca(a,d,c);Q(a,Y.ia)&&!Q(a,Y.ha)&&(b=T(yd.getInstance()),Ca(a,b,!c),a.title=c?"":Q(a,Y.ka));c?D(function(){Aa(a,rb.O)},1E3):Ba(a,rb.O)}
m.pa=function(a){var b=!!Q(a,"ypc-item-type"),c=!!Q(a,"ypc-item-id");!Q(a,"ypc-enabled")&&b&&c&&(Aa(a,"ypc-enabled"),P(a,Y.ma,"true"))};
m.oa=function(a){Q(a,"ypc-enabled")&&(Ba(a,"ypc-enabled"),R(a,"ypc-enabled"))};
function Id(a,b){var c=gb(T(a));return pa(c,function(a){return b==Q(a,"channel-external-id")},a)}
m.na=function(a,b,c){var d=xa(arguments,2);w(a,function(a){b.apply(this,ta(a,d))},this)};
m.B=function(a,b,c){var d=Id(this,a),d=ta([d],xa(arguments,1));this.na.apply(this,d)};
function Gd(a,b){var c=t(function(a){a.discoverable_subscriptions&&Lb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.K(b)},a);
Mc(c)}
;var Jd=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Jd);function Kd(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&gc(c)}}
;function Ld(a){E.call(this,1,arguments)}
v(Ld,E);function Md(a,b){E.call(this,2,arguments);this.h=a;this.f=b}
v(Md,E);function Nd(a,b,c,d){E.call(this,1,arguments);this.f=b;this.j=c||null;this.h=d||null}
v(Nd,E);function Od(a,b){E.call(this,1,arguments);this.h=a;this.f=b||null}
v(Od,E);function Pd(a){E.call(this,1,arguments)}
v(Pd,E);var Qd=new F("ypc-core-load",Ld),Rd=new F("ypc-guide-sync-success",Md),Sd=new F("ypc-purchase-success",Nd),Td=new F("ypc-subscription-cancel",Pd),Ud=new F("ypc-subscription-cancel-success",Od),Vd=new F("ypc-init-subscription",Pd);var Wd=!1,Xd=[],Yd=[];function Zd(a){a.f?Wd?G(vc,a):G(Qd,new Ld(function(){G(Vd,new Pd(a.f))})):$d(a.h,a.l,a.j,a.m)}
function ae(a){a.f?Wd?G(Ac,a):G(Qd,new Ld(function(){G(Td,new Pd(a.f))})):be(a.h,a.G,a.l,a.j,a.m)}
function ce(a){de(ua(a.f))}
function ee(a){fe(ua(a.f))}
function ge(a){he(a.f,a.h,null)}
function ie(a,b,c,d){he(a,b,c,d)}
function je(a){var b=a.h,c=a.f.subscriptionId;b&&c&&G(uc,new mc(b,c,a.f.channelInfo))}
function ke(a){var b=a.f;Da(a.h,function(a,d){G(uc,new mc(d,a,b[d]))})}
function le(a){G(zc,new J(a.h.itemId));a.f&&a.f.length&&(me(a.f,zc),me(a.f,Bc))}
function $d(a,b,c,d){var e=new J(a);G(sc,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=C("PLAYBACK_ID"))&&(c.plid=d);(d=C("EVENT_ID"))&&(c.ei=d);b&&ne(b,c);Tc("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",aa:f,A:c,C:function(b,c){var d=c.response;G(uc,new mc(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Lc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Kd(d.actions)},
M:function(){G(tc,e)}})}
function be(a,b,c,d,e){var f=new J(a);G(xc,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=C("PLAYBACK_ID"))&&(d.plid=a);(a=C("EVENT_ID"))&&(d.ei=a);c&&ne(c,d);Tc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",aa:g,A:d,C:function(a,b){var c=b.response;G(zc,f);c.actions&&Kd(c.actions)},
M:function(){G(yc,f)}})}
function he(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Tc("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",A:e,onError:function(){d&&d()}})}}
function de(a){if(a.length){var b=wa(a,0,40);G("subscription-batch-subscribe-loading");me(b,sc);var c={};c.a=b.join(",");var d=function(){G("subscription-batch-subscribe-loaded");me(b,tc)};
Tc("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",A:c,C:function(c,f){d();var g=f.response,h=g.id;if("array"==ca(h)&&h.length==b.length){var k=g.channel_info_map;w(h,function(a,c){var d=b[c];G(uc,new mc(d,a,k[d]))});
a.length?de(a):G("subscription-batch-subscribe-finished")}},
onError:function(){d();G("subscription-batch-subscribe-failure")}})}}
function fe(a){if(a.length){var b=wa(a,0,40);G("subscription-batch-unsubscribe-loading");me(b,xc);var c={};c.c=b.join(",");var d=function(){G("subscription-batch-unsubscribe-loaded");me(b,yc)};
Tc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",A:c,C:function(){d();me(b,zc);a.length&&fe(a)},
onError:function(){d()}})}}
function me(a,b){w(a,function(a){G(b,new J(a))})}
function ne(a,b){var c=hc(a),d;for(d in c)b[d]=c[d]}
;Wd=!0;Yd.push(H(rc,Zd),H(wc,ae));Wd||(Yd.push(H(vc,Zd),H(Ac,ae),H(oc,ce),H(pc,ee),H(qc,ge)),Xd.push(Ic("subscription-prefs",ie)),Yd.push(H(Sd,je),H(Ud,le),H(Rd,ke)));var Z=X.getInstance(),oe=T(Z);oe in Jd||(Z.register(),Z.I.push(Ic("yt-uix-init-"+oe,Z.init,Z)),Z.I.push(Ic("yt-uix-dispose-"+oe,Z.dispose,Z)),Jd[oe]=Z);u("yt.setConfig",Lb);})();
