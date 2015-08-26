if(window.__JS_ERRORS=[],window.onerror=function(t,e,n,i,r){if(void 0!==r&&null!==r)window.__JS_ERRORS.push({message:r.message,stack:r.stack})
else{var s="Error: "+t+"\n    at "+e+":"+n
void 0!==i&&(s+=":"+i),window.__JS_ERRORS.push({message:t,stack:s})}return!1},function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document")
return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e="length"in t&&t.length,n=Z.type(t)
return"function"===n||Z.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}function i(t,e,n){if(Z.isFunction(e))return Z.grep(t,function(t,i){return!!e.call(t,i,t)!==n})
if(e.nodeType)return Z.grep(t,function(t){return t===e!==n})
if("string"==typeof e){if(ae.test(e))return Z.filter(e,t,n)
e=Z.filter(e,t)}return Z.grep(t,function(t){return U.call(e,t)>=0!==n})}function r(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function s(t){var e=fe[t]={}
return Z.each(t.match(pe)||[],function(t,n){e[n]=!0}),e}function o(){J.removeEventListener("DOMContentLoaded",o,!1),t.removeEventListener("load",o,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function l(t,e,n){var i
if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace($e,"-$1").toLowerCase(),n=t.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:ye.test(n)?Z.parseJSON(n):n}catch(r){}be.set(t,e,n)}else n=void 0
return n}function u(){return!0}function c(){return!1}function h(){try{return J.activeElement}catch(t){}}function d(t,e){return Z.nodeName(t,"table")&&Z.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function p(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function f(t){var e=He.exec(t.type)
return e?t.type=e[1]:t.removeAttribute("type"),t}function m(t,e){for(var n=0,i=t.length;i>n;n++)ve.set(t[n],"globalEval",!e||ve.get(e[n],"globalEval"))}function g(t,e){var n,i,r,s,o,a,l,u
if(1===e.nodeType){if(ve.hasData(t)&&(s=ve.access(t),o=ve.set(e,s),u=s.events)){delete o.handle,o.events={}
for(r in u)for(n=0,i=u[r].length;i>n;n++)Z.event.add(e,r,u[r][n])}be.hasData(t)&&(a=be.access(t),l=Z.extend({},a),be.set(e,l))}}function v(t,e){var n=t.getElementsByTagName?t.getElementsByTagName(e||"*"):t.querySelectorAll?t.querySelectorAll(e||"*"):[]
return void 0===e||e&&Z.nodeName(t,e)?Z.merge([t],n):n}function b(t,e){var n=e.nodeName.toLowerCase()
"input"===n&&Ce.test(t.type)?e.checked=t.checked:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}function y(e,n){var i,r=Z(n.createElement(e)).appendTo(n.body),s=t.getDefaultComputedStyle&&(i=t.getDefaultComputedStyle(r[0]))?i.display:Z.css(r[0],"display")
return r.detach(),s}function $(t){var e=J,n=ze[t]
return n||(n=y(t,e),"none"!==n&&n||(Fe=(Fe||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=Fe[0].contentDocument,e.write(),e.close(),n=y(t,e),Fe.detach()),ze[t]=n),n}function w(t,e,n){var i,r,s,o,a=t.style
return n=n||Le(t),n&&(o=n.getPropertyValue(e)||n[e]),n&&(""!==o||Z.contains(t.ownerDocument,t)||(o=Z.style(t,e)),qe.test(o)&&We.test(e)&&(i=a.width,r=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=o,o=n.width,a.width=i,a.minWidth=r,a.maxWidth=s)),void 0!==o?o+"":o}function x(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function _(t,e){if(e in t)return e
for(var n=e[0].toUpperCase()+e.slice(1),i=e,r=Xe.length;r--;)if(e=Xe[r]+n,e in t)return e
return i}function C(t,e,n){var i=Be.exec(e)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function k(t,e,n,i,r){for(var s=n===(i?"border":"content")?4:"width"===e?1:0,o=0;4>s;s+=2)"margin"===n&&(o+=Z.css(t,n+xe[s],!0,r)),i?("content"===n&&(o-=Z.css(t,"padding"+xe[s],!0,r)),"margin"!==n&&(o-=Z.css(t,"border"+xe[s]+"Width",!0,r))):(o+=Z.css(t,"padding"+xe[s],!0,r),"padding"!==n&&(o+=Z.css(t,"border"+xe[s]+"Width",!0,r)))
return o}function T(t,e,n){var i=!0,r="width"===e?t.offsetWidth:t.offsetHeight,s=Le(t),o="border-box"===Z.css(t,"boxSizing",!1,s)
if(0>=r||null==r){if(r=w(t,e,s),(0>r||null==r)&&(r=t.style[e]),qe.test(r))return r
i=o&&(G.boxSizingReliable()||r===t.style[e]),r=parseFloat(r)||0}return r+k(t,e,n||(o?"border":"content"),i,s)+"px"}function D(t,e){for(var n,i,r,s=[],o=0,a=t.length;a>o;o++)i=t[o],i.style&&(s[o]=ve.get(i,"olddisplay"),n=i.style.display,e?(s[o]||"none"!==n||(i.style.display=""),""===i.style.display&&_e(i)&&(s[o]=ve.access(i,"olddisplay",$(i.nodeName)))):(r=_e(i),"none"===n&&r||ve.set(i,"olddisplay",r?n:Z.css(i,"display"))))
for(o=0;a>o;o++)i=t[o],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?s[o]||"":"none"))
return t}function E(t,e,n,i,r){return new E.prototype.init(t,e,n,i,r)}function S(){return setTimeout(function(){Ge=void 0}),Ge=Z.now()}function I(t,e){var n,i=0,r={height:t}
for(e=e?1:0;4>i;i+=2-e)n=xe[i],r["margin"+n]=r["padding"+n]=t
return e&&(r.opacity=r.width=t),r}function M(t,e,n){for(var i,r=(nn[e]||[]).concat(nn["*"]),s=0,o=r.length;o>s;s++)if(i=r[s].call(n,e,t))return i}function A(t,e,n){var i,r,s,o,a,l,u,c,h=this,d={},p=t.style,f=t.nodeType&&_e(t),m=ve.get(t,"fxshow")
n.queue||(a=Z._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,h.always(function(){h.always(function(){a.unqueued--,Z.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],u=Z.css(t,"display"),c="none"===u?ve.get(t,"olddisplay")||$(t.nodeName):u,"inline"===c&&"none"===Z.css(t,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",h.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}))
for(i in e)if(r=e[i],Qe.exec(r)){if(delete e[i],s=s||"toggle"===r,r===(f?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue
f=!0}d[i]=m&&m[i]||Z.style(t,i)}else u=void 0
if(Z.isEmptyObject(d))"inline"===("none"===u?$(t.nodeName):u)&&(p.display=u)
else{m?"hidden"in m&&(f=m.hidden):m=ve.access(t,"fxshow",{}),s&&(m.hidden=!f),f?Z(t).show():h.done(function(){Z(t).hide()}),h.done(function(){var e
ve.remove(t,"fxshow")
for(e in d)Z.style(t,e,d[e])})
for(i in d)o=M(f?m[i]:0,i,h),i in m||(m[i]=o.start,f&&(o.end=o.start,o.start="width"===i||"height"===i?1:0))}}function O(t,e){var n,i,r,s,o
for(n in t)if(i=Z.camelCase(n),r=e[i],s=t[n],Z.isArray(s)&&(r=s[1],s=t[n]=s[0]),n!==i&&(t[i]=s,delete t[n]),o=Z.cssHooks[i],o&&"expand"in o){s=o.expand(s),delete t[i]
for(n in s)n in t||(t[n]=s[n],e[n]=r)}else e[i]=r}function N(t,e,n){var i,r,s=0,o=en.length,a=Z.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1
for(var e=Ge||S(),n=Math.max(0,u.startTime+u.duration-e),i=n/u.duration||0,s=1-i,o=0,l=u.tweens.length;l>o;o++)u.tweens[o].run(s)
return a.notifyWith(t,[u,s,n]),1>s&&l?n:(a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:Z.extend({},e),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:Ge||S(),duration:n.duration,tweens:[],createTween:function(e,n){var i=Z.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing)
return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0
if(r)return this
for(r=!0;i>n;n++)u.tweens[n].run(1)
return e?a.resolveWith(t,[u,e]):a.rejectWith(t,[u,e]),this}}),c=u.props
for(O(c,u.opts.specialEasing);o>s;s++)if(i=en[s].call(u,t,c,u.opts))return i
return Z.map(c,M,u),Z.isFunction(u.opts.start)&&u.opts.start.call(t,u),Z.fx.timer(Z.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function P(t){return function(e,n){"string"!=typeof e&&(n=e,e="*")
var i,r=0,s=e.toLowerCase().match(pe)||[]
if(Z.isFunction(n))for(;i=s[r++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function H(t,e,n,i){function r(a){var l
return s[a]=!0,Z.each(t[a]||[],function(t,a){var u=a(e,n,i)
return"string"!=typeof u||o||s[u]?o?!(l=u):void 0:(e.dataTypes.unshift(u),r(u),!1)}),l}var s={},o=t===$n
return r(e.dataTypes[0])||!s["*"]&&r("*")}function j(t,e){var n,i,r=Z.ajaxSettings.flatOptions||{}
for(n in e)void 0!==e[n]&&((r[n]?t:i||(i={}))[n]=e[n])
return i&&Z.extend(!0,t,i),t}function R(t,e,n){for(var i,r,s,o,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"))
if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r)
break}if(l[0]in n)s=l[0]
else{for(r in n){if(!l[0]||t.converters[r+" "+l[0]]){s=r
break}o||(o=r)}s=s||o}return s?(s!==l[0]&&l.unshift(s),n[s]):void 0}function F(t,e,n,i){var r,s,o,a,l,u={},c=t.dataTypes.slice()
if(c[1])for(o in t.converters)u[o.toLowerCase()]=t.converters[o]
for(s=c.shift();s;)if(t.responseFields[s]&&(n[t.responseFields[s]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=c.shift())if("*"===s)s=l
else if("*"!==l&&l!==s){if(o=u[l+" "+s]||u["* "+s],!o)for(r in u)if(a=r.split(" "),a[1]===s&&(o=u[l+" "+a[0]]||u["* "+a[0]])){o===!0?o=u[r]:u[r]!==!0&&(s=a[0],c.unshift(a[1]))
break}if(o!==!0)if(o&&t["throws"])e=o(e)
else try{e=o(e)}catch(h){return{state:"parsererror",error:o?h:"No conversion from "+l+" to "+s}}}return{state:"success",data:e}}function z(t,e,n,i){var r
if(Z.isArray(e))Z.each(e,function(e,r){n||kn.test(t)?i(t,r):z(t+"["+("object"==typeof r?e:"")+"]",r,n,i)})
else if(n||"object"!==Z.type(e))i(t,e)
else for(r in e)z(t+"["+r+"]",e[r],n,i)}function W(t){return Z.isWindow(t)?t:9===t.nodeType&&t.defaultView}var q=[],L=q.slice,V=q.concat,B=q.push,U=q.indexOf,Y={},K=Y.toString,X=Y.hasOwnProperty,G={},J=t.document,Q="2.1.4",Z=function(t,e){return new Z.fn.init(t,e)},te=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ee=/^-ms-/,ne=/-([\da-z])/gi,ie=function(t,e){return e.toUpperCase()}
Z.fn=Z.prototype={jquery:Q,constructor:Z,selector:"",length:0,toArray:function(){return L.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:L.call(this)},pushStack:function(t){var e=Z.merge(this.constructor(),t)
return e.prevObject=this,e.context=this.context,e},each:function(t,e){return Z.each(this,t,e)},map:function(t){return this.pushStack(Z.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(L.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0)
return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:q.sort,splice:q.splice},Z.extend=Z.fn.extend=function(){var t,e,n,i,r,s,o=arguments[0]||{},a=1,l=arguments.length,u=!1
for("boolean"==typeof o&&(u=o,o=arguments[a]||{},a++),"object"==typeof o||Z.isFunction(o)||(o={}),a===l&&(o=this,a--);l>a;a++)if(null!=(t=arguments[a]))for(e in t)n=o[e],i=t[e],o!==i&&(u&&i&&(Z.isPlainObject(i)||(r=Z.isArray(i)))?(r?(r=!1,s=n&&Z.isArray(n)?n:[]):s=n&&Z.isPlainObject(n)?n:{},o[e]=Z.extend(u,s,i)):void 0!==i&&(o[e]=i))
return o},Z.extend({expando:"jQuery"+(Q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===Z.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){return!Z.isArray(t)&&t-parseFloat(t)+1>=0},isPlainObject:function(t){return"object"!==Z.type(t)||t.nodeType||Z.isWindow(t)?!1:t.constructor&&!X.call(t.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(t){var e
for(e in t)return!1
return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?Y[K.call(t)]||"object":typeof t},globalEval:function(t){var e,n=eval
t=Z.trim(t),t&&(1===t.indexOf("use strict")?(e=J.createElement("script"),e.text=t,J.head.appendChild(e).parentNode.removeChild(e)):n(t))},camelCase:function(t){return t.replace(ee,"ms-").replace(ne,ie)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,i){var r,s=0,o=t.length,a=n(t)
if(i){if(a)for(;o>s&&(r=e.apply(t[s],i),r!==!1);s++);else for(s in t)if(r=e.apply(t[s],i),r===!1)break}else if(a)for(;o>s&&(r=e.call(t[s],s,t[s]),r!==!1);s++);else for(s in t)if(r=e.call(t[s],s,t[s]),r===!1)break
return t},trim:function(t){return null==t?"":(t+"").replace(te,"")},makeArray:function(t,e){var i=e||[]
return null!=t&&(n(Object(t))?Z.merge(i,"string"==typeof t?[t]:t):B.call(i,t)),i},inArray:function(t,e,n){return null==e?-1:U.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,r=t.length;n>i;i++)t[r++]=e[i]
return t.length=r,t},grep:function(t,e,n){for(var i,r=[],s=0,o=t.length,a=!n;o>s;s++)i=!e(t[s],s),i!==a&&r.push(t[s])
return r},map:function(t,e,i){var r,s=0,o=t.length,a=n(t),l=[]
if(a)for(;o>s;s++)r=e(t[s],s,i),null!=r&&l.push(r)
else for(s in t)r=e(t[s],s,i),null!=r&&l.push(r)
return V.apply([],l)},guid:1,proxy:function(t,e){var n,i,r
return"string"==typeof e&&(n=t[e],e=t,t=n),Z.isFunction(t)?(i=L.call(arguments,2),r=function(){return t.apply(e||this,i.concat(L.call(arguments)))},r.guid=t.guid=t.guid||Z.guid++,r):void 0},now:Date.now,support:G}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Y["[object "+e+"]"]=e.toLowerCase()})
var re=function(t){function e(t,e,n,i){var r,s,o,a,l,u,h,p,f,m
if((e?e.ownerDocument||e:z)!==A&&M(e),e=e||A,n=n||[],a=e.nodeType,"string"!=typeof t||!t||1!==a&&9!==a&&11!==a)return n
if(!i&&N){if(11!==a&&(r=be.exec(t)))if(o=r[1]){if(9===a){if(s=e.getElementById(o),!s||!s.parentNode)return n
if(s.id===o)return n.push(s),n}else if(e.ownerDocument&&(s=e.ownerDocument.getElementById(o))&&R(e,s)&&s.id===o)return n.push(s),n}else{if(r[2])return Q.apply(n,e.getElementsByTagName(t)),n
if((o=r[3])&&w.getElementsByClassName)return Q.apply(n,e.getElementsByClassName(o)),n}if(w.qsa&&(!P||!P.test(t))){if(p=h=F,f=e,m=1!==a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(u=k(t),(h=e.getAttribute("id"))?p=h.replace($e,"\\$&"):e.setAttribute("id",p),p="[id='"+p+"'] ",l=u.length;l--;)u[l]=p+d(u[l])
f=ye.test(t)&&c(e.parentNode)||e,m=u.join(",")}if(m)try{return Q.apply(n,f.querySelectorAll(m)),n}catch(g){}finally{h||e.removeAttribute("id")}}}return D(t.replace(le,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>x.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[]
return t}function i(t){return t[F]=!0,t}function r(t){var e=A.createElement("div")
try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function s(t,e){for(var n=t.split("|"),i=t.length;i--;)x.attrHandle[n[i]]=e}function o(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||Y)-(~t.sourceIndex||Y)
if(i)return i
if(n)for(;n=n.nextSibling;)if(n===e)return-1
return t?1:-1}function a(t){return function(e){var n=e.nodeName.toLowerCase()
return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase()
return("input"===n||"button"===n)&&e.type===t}}function u(t){return i(function(e){return e=+e,i(function(n,i){for(var r,s=t([],n.length,e),o=s.length;o--;)n[r=s[o]]&&(n[r]=!(i[r]=n[r]))})})}function c(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function h(){}function d(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value
return i}function p(t,e,n){var i=e.dir,r=n&&"parentNode"===i,s=q++
return e.first?function(e,n,s){for(;e=e[i];)if(1===e.nodeType||r)return t(e,n,s)}:function(e,n,o){var a,l,u=[W,s]
if(o){for(;e=e[i];)if((1===e.nodeType||r)&&t(e,n,o))return!0}else for(;e=e[i];)if(1===e.nodeType||r){if(l=e[F]||(e[F]={}),(a=l[i])&&a[0]===W&&a[1]===s)return u[2]=a[2]
if(l[i]=u,u[2]=t(e,n,o))return!0}}}function f(t){return t.length>1?function(e,n,i){for(var r=t.length;r--;)if(!t[r](e,n,i))return!1
return!0}:t[0]}function m(t,n,i){for(var r=0,s=n.length;s>r;r++)e(t,n[r],i)
return i}function g(t,e,n,i,r){for(var s,o=[],a=0,l=t.length,u=null!=e;l>a;a++)(s=t[a])&&(!n||n(s,i,r))&&(o.push(s),u&&e.push(a))
return o}function v(t,e,n,r,s,o){return r&&!r[F]&&(r=v(r)),s&&!s[F]&&(s=v(s,o)),i(function(i,o,a,l){var u,c,h,d=[],p=[],f=o.length,v=i||m(e||"*",a.nodeType?[a]:a,[]),b=!t||!i&&e?v:g(v,d,t,a,l),y=n?s||(i?t:f||r)?[]:o:b
if(n&&n(b,y,a,l),r)for(u=g(y,p),r(u,[],a,l),c=u.length;c--;)(h=u[c])&&(y[p[c]]=!(b[p[c]]=h))
if(i){if(s||t){if(s){for(u=[],c=y.length;c--;)(h=y[c])&&u.push(b[c]=h)
s(null,y=[],u,l)}for(c=y.length;c--;)(h=y[c])&&(u=s?te(i,h):d[c])>-1&&(i[u]=!(o[u]=h))}}else y=g(y===o?y.splice(f,y.length):y),s?s(null,o,y,l):Q.apply(o,y)})}function b(t){for(var e,n,i,r=t.length,s=x.relative[t[0].type],o=s||x.relative[" "],a=s?1:0,l=p(function(t){return t===e},o,!0),u=p(function(t){return te(e,t)>-1},o,!0),c=[function(t,n,i){var r=!s&&(i||n!==E)||((e=n).nodeType?l(t,n,i):u(t,n,i))
return e=null,r}];r>a;a++)if(n=x.relative[t[a].type])c=[p(f(c),n)]
else{if(n=x.filter[t[a].type].apply(null,t[a].matches),n[F]){for(i=++a;r>i&&!x.relative[t[i].type];i++);return v(a>1&&f(c),a>1&&d(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(le,"$1"),n,i>a&&b(t.slice(a,i)),r>i&&b(t=t.slice(i)),r>i&&d(t))}c.push(n)}return f(c)}function y(t,n){var r=n.length>0,s=t.length>0,o=function(i,o,a,l,u){var c,h,d,p=0,f="0",m=i&&[],v=[],b=E,y=i||s&&x.find.TAG("*",u),$=W+=null==b?1:Math.random()||.1,w=y.length
for(u&&(E=o!==A&&o);f!==w&&null!=(c=y[f]);f++){if(s&&c){for(h=0;d=t[h++];)if(d(c,o,a)){l.push(c)
break}u&&(W=$)}r&&((c=!d&&c)&&p--,i&&m.push(c))}if(p+=f,r&&f!==p){for(h=0;d=n[h++];)d(m,v,o,a)
if(i){if(p>0)for(;f--;)m[f]||v[f]||(v[f]=G.call(l))
v=g(v)}Q.apply(l,v),u&&!i&&v.length>0&&p+n.length>1&&e.uniqueSort(l)}return u&&(W=$,E=b),m}
return r?i(o):o}var $,w,x,_,C,k,T,D,E,S,I,M,A,O,N,P,H,j,R,F="sizzle"+1*new Date,z=t.document,W=0,q=0,L=n(),V=n(),B=n(),U=function(t,e){return t===e&&(I=!0),0},Y=1<<31,K={}.hasOwnProperty,X=[],G=X.pop,J=X.push,Q=X.push,Z=X.slice,te=function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n
return-1},ee="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=ie.replace("w","w#"),se="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+se+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),le=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),he=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(oe),pe=new RegExp("^"+re+"$"),fe={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+se),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+ee+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},me=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,be=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,$e=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(t,e,n){var i="0x"+e-65536
return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},_e=function(){M()}
try{Q.apply(X=Z.call(z.childNodes),z.childNodes),X[z.childNodes.length].nodeType}catch(Ce){Q={apply:X.length?function(t,e){J.apply(t,Z.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}w=e.support={},C=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement
return e?"HTML"!==e.nodeName:!1},M=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:z
return i!==A&&9===i.nodeType&&i.documentElement?(A=i,O=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",_e,!1):n.attachEvent&&n.attachEvent("onunload",_e)),N=!C(i),w.attributes=r(function(t){return t.className="i",!t.getAttribute("className")}),w.getElementsByTagName=r(function(t){return t.appendChild(i.createComment("")),!t.getElementsByTagName("*").length}),w.getElementsByClassName=ve.test(i.getElementsByClassName),w.getById=r(function(t){return O.appendChild(t).id=F,!i.getElementsByName||!i.getElementsByName(F).length}),w.getById?(x.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&N){var n=e.getElementById(t)
return n&&n.parentNode?[n]:[]}},x.filter.ID=function(t){var e=t.replace(we,xe)
return function(t){return t.getAttribute("id")===e}}):(delete x.find.ID,x.filter.ID=function(t){var e=t.replace(we,xe)
return function(t){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id")
return n&&n.value===e}}),x.find.TAG=w.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):w.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],r=0,s=e.getElementsByTagName(t)
if("*"===t){for(;n=s[r++];)1===n.nodeType&&i.push(n)
return i}return s},x.find.CLASS=w.getElementsByClassName&&function(t,e){return N?e.getElementsByClassName(t):void 0},H=[],P=[],(w.qsa=ve.test(i.querySelectorAll))&&(r(function(t){O.appendChild(t).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\f]' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+ee+")"),t.querySelectorAll("[id~="+F+"-]").length||P.push("~="),t.querySelectorAll(":checked").length||P.push(":checked"),t.querySelectorAll("a#"+F+"+*").length||P.push(".#.+[+~]")}),r(function(t){var e=i.createElement("input")
e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),P.push(",.*:")})),(w.matchesSelector=ve.test(j=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&r(function(t){w.disconnectedMatch=j.call(t,"div"),j.call(t,"[s!='']:x"),H.push("!=",oe)}),P=P.length&&new RegExp(P.join("|")),H=H.length&&new RegExp(H.join("|")),e=ve.test(O.compareDocumentPosition),R=e||ve.test(O.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode
return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0
return!1},U=e?function(t,e){if(t===e)return I=!0,0
var n=!t.compareDocumentPosition-!e.compareDocumentPosition
return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!w.sortDetached&&e.compareDocumentPosition(t)===n?t===i||t.ownerDocument===z&&R(z,t)?-1:e===i||e.ownerDocument===z&&R(z,e)?1:S?te(S,t)-te(S,e):0:4&n?-1:1)}:function(t,e){if(t===e)return I=!0,0
var n,r=0,s=t.parentNode,a=e.parentNode,l=[t],u=[e]
if(!s||!a)return t===i?-1:e===i?1:s?-1:a?1:S?te(S,t)-te(S,e):0
if(s===a)return o(t,e)
for(n=t;n=n.parentNode;)l.unshift(n)
for(n=e;n=n.parentNode;)u.unshift(n)
for(;l[r]===u[r];)r++
return r?o(l[r],u[r]):l[r]===z?-1:u[r]===z?1:0},i):A},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==A&&M(t),n=n.replace(he,"='$1']"),!(!w.matchesSelector||!N||H&&H.test(n)||P&&P.test(n)))try{var i=j.call(t,n)
if(i||w.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(r){}return e(n,A,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==A&&M(t),R(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==A&&M(t)
var n=x.attrHandle[e.toLowerCase()],i=n&&K.call(x.attrHandle,e.toLowerCase())?n(t,e,!N):void 0
return void 0!==i?i:w.attributes||!N?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,r=0
if(I=!w.detectDuplicates,S=!w.sortStable&&t.slice(0),t.sort(U),I){for(;e=t[r++];)e===t[r]&&(i=n.push(r))
for(;i--;)t.splice(n[i],1)}return S=null,t},_=e.getText=function(t){var e,n="",i=0,r=t.nodeType
if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent
for(t=t.firstChild;t;t=t.nextSibling)n+=_(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[i++];)n+=_(e)
return n},x=e.selectors={cacheLength:50,createPseudo:i,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(we,xe),t[3]=(t[3]||t[4]||t[5]||"").replace(we,xe),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2]
return fe.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&de.test(n)&&(e=k(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(we,xe).toLowerCase()
return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=L[t+" "]
return e||(e=new RegExp("(^|"+ne+")"+t+"("+ne+"|$)"))&&L(t,function(t){return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(r){var s=e.attr(r,t)
return null==s?"!="===n:n?(s+="","="===n?s===i:"!="===n?s!==i:"^="===n?i&&0===s.indexOf(i):"*="===n?i&&s.indexOf(i)>-1:"$="===n?i&&s.slice(-i.length)===i:"~="===n?(" "+s.replace(ae," ")+" ").indexOf(i)>-1:"|="===n?s===i||s.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(t,e,n,i,r){var s="nth"!==t.slice(0,3),o="last"!==t.slice(-4),a="of-type"===e
return 1===i&&0===r?function(t){return!!t.parentNode}:function(e,n,l){var u,c,h,d,p,f,m=s!==o?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),b=!l&&!a
if(g){if(s){for(;m;){for(h=e;h=h[m];)if(a?h.nodeName.toLowerCase()===v:1===h.nodeType)return!1
f=m="only"===t&&!f&&"nextSibling"}return!0}if(f=[o?g.firstChild:g.lastChild],o&&b){for(c=g[F]||(g[F]={}),u=c[t]||[],p=u[0]===W&&u[1],d=u[0]===W&&u[2],h=p&&g.childNodes[p];h=++p&&h&&h[m]||(d=p=0)||f.pop();)if(1===h.nodeType&&++d&&h===e){c[t]=[W,p,d]
break}}else if(b&&(u=(e[F]||(e[F]={}))[t])&&u[0]===W)d=u[1]
else for(;(h=++p&&h&&h[m]||(d=p=0)||f.pop())&&((a?h.nodeName.toLowerCase()!==v:1!==h.nodeType)||!++d||(b&&((h[F]||(h[F]={}))[t]=[W,d]),h!==e)););return d-=r,d===i||d%i===0&&d/i>=0}}},PSEUDO:function(t,n){var r,s=x.pseudos[t]||x.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t)
return s[F]?s(n):s.length>1?(r=[t,t,"",n],x.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,r=s(t,n),o=r.length;o--;)i=te(t,r[o]),t[i]=!(e[i]=r[o])}):function(t){return s(t,0,r)}):s}},pseudos:{not:i(function(t){var e=[],n=[],r=T(t.replace(le,"$1"))
return r[F]?i(function(t,e,n,i){for(var s,o=r(t,null,i,[]),a=t.length;a--;)(s=o[a])&&(t[a]=!(e[a]=s))}):function(t,i,s){return e[0]=t,r(e,null,s,n),e[0]=null,!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(we,xe),function(e){return(e.textContent||e.innerText||_(e)).indexOf(t)>-1}}),lang:i(function(t){return pe.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(we,xe).toLowerCase(),function(e){var n
do if(n=N?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-")
while((e=e.parentNode)&&1===e.nodeType)
return!1}}),target:function(e){var n=t.location&&t.location.hash
return n&&n.slice(1)===e.id},root:function(t){return t===O},focus:function(t){return t===A.activeElement&&(!A.hasFocus||A.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase()
return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1
return!0},parent:function(t){return!x.pseudos.empty(t)},header:function(t){return ge.test(t.nodeName)},input:function(t){return me.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase()
return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e
return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:u(function(){return[0]}),last:u(function(t,e){return[e-1]}),eq:u(function(t,e,n){return[0>n?n+e:n]}),even:u(function(t,e){for(var n=0;e>n;n+=2)t.push(n)
return t}),odd:u(function(t,e){for(var n=1;e>n;n+=2)t.push(n)
return t}),lt:u(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i)
return t}),gt:u(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i)
return t})}},x.pseudos.nth=x.pseudos.eq
for($ in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[$]=a($)
for($ in{submit:!0,reset:!0})x.pseudos[$]=l($)
return h.prototype=x.filters=x.pseudos,x.setFilters=new h,k=e.tokenize=function(t,n){var i,r,s,o,a,l,u,c=V[t+" "]
if(c)return n?0:c.slice(0)
for(a=t,l=[],u=x.preFilter;a;){(!i||(r=ue.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(s=[])),i=!1,(r=ce.exec(a))&&(i=r.shift(),s.push({value:i,type:r[0].replace(le," ")}),a=a.slice(i.length))
for(o in x.filter)!(r=fe[o].exec(a))||u[o]&&!(r=u[o](r))||(i=r.shift(),s.push({value:i,type:o,matches:r}),a=a.slice(i.length))
if(!i)break}return n?a.length:a?e.error(t):V(t,l).slice(0)},T=e.compile=function(t,e){var n,i=[],r=[],s=B[t+" "]
if(!s){for(e||(e=k(t)),n=e.length;n--;)s=b(e[n]),s[F]?i.push(s):r.push(s)
s=B(t,y(r,i)),s.selector=t}return s},D=e.select=function(t,e,n,i){var r,s,o,a,l,u="function"==typeof t&&t,h=!i&&k(t=u.selector||t)
if(n=n||[],1===h.length){if(s=h[0]=h[0].slice(0),s.length>2&&"ID"===(o=s[0]).type&&w.getById&&9===e.nodeType&&N&&x.relative[s[1].type]){if(e=(x.find.ID(o.matches[0].replace(we,xe),e)||[])[0],!e)return n
u&&(e=e.parentNode),t=t.slice(s.shift().value.length)}for(r=fe.needsContext.test(t)?0:s.length;r--&&(o=s[r],!x.relative[a=o.type]);)if((l=x.find[a])&&(i=l(o.matches[0].replace(we,xe),ye.test(s[0].type)&&c(e.parentNode)||e))){if(s.splice(r,1),t=i.length&&d(s),!t)return Q.apply(n,i),n
break}}return(u||T(t,h))(i,e,!N,n,ye.test(t)&&c(e.parentNode)||e),n},w.sortStable=F.split("").sort(U).join("")===F,w.detectDuplicates=!!I,M(),w.sortDetached=r(function(t){return 1&t.compareDocumentPosition(A.createElement("div"))}),r(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||s("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),w.attributes&&r(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||s("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),r(function(t){return null==t.getAttribute("disabled")})||s(ee,function(t,e,n){var i
return n?void 0:t[e]===!0?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t)
Z.find=re,Z.expr=re.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=re.uniqueSort,Z.text=re.getText,Z.isXMLDoc=re.isXML,Z.contains=re.contains
var se=Z.expr.match.needsContext,oe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ae=/^.[^:#\[\.,]*$/
Z.filter=function(t,e,n){var i=e[0]
return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?Z.find.matchesSelector(i,t)?[i]:[]:Z.find.matches(t,Z.grep(e,function(t){return 1===t.nodeType}))},Z.fn.extend({find:function(t){var e,n=this.length,i=[],r=this
if("string"!=typeof t)return this.pushStack(Z(t).filter(function(){for(e=0;n>e;e++)if(Z.contains(r[e],this))return!0}))
for(e=0;n>e;e++)Z.find(t,r[e],i)
return i=this.pushStack(n>1?Z.unique(i):i),i.selector=this.selector?this.selector+" "+t:t,i},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(t){return!!i(this,"string"==typeof t&&se.test(t)?Z(t):t||[],!1).length}})
var le,ue=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=Z.fn.init=function(t,e){var n,i
if(!t)return this
if("string"==typeof t){if(n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:ue.exec(t),!n||!n[1]&&e)return!e||e.jquery?(e||le).find(t):this.constructor(e).find(t)
if(n[1]){if(e=e instanceof Z?e[0]:e,Z.merge(this,Z.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:J,!0)),oe.test(n[1])&&Z.isPlainObject(e))for(n in e)Z.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n])
return this}return i=J.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=J,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):Z.isFunction(t)?"undefined"!=typeof le.ready?le.ready(t):t(Z):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),Z.makeArray(t,this))}
ce.prototype=Z.fn,le=Z(J)
var he=/^(?:parents|prev(?:Until|All))/,de={children:!0,contents:!0,next:!0,prev:!0}
Z.extend({dir:function(t,e,n){for(var i=[],r=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(r&&Z(t).is(n))break
i.push(t)}return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t)
return n}}),Z.fn.extend({has:function(t){var e=Z(t,this),n=e.length
return this.filter(function(){for(var t=0;n>t;t++)if(Z.contains(this,e[t]))return!0})},closest:function(t,e){for(var n,i=0,r=this.length,s=[],o=se.test(t)||"string"!=typeof t?Z(t,e||this.context):0;r>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,t))){s.push(n)
break}return this.pushStack(s.length>1?Z.unique(s):s)},index:function(t){return t?"string"==typeof t?U.call(Z(t),this[0]):U.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(Z.unique(Z.merge(this.get(),Z(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),Z.each({parent:function(t){var e=t.parentNode
return e&&11!==e.nodeType?e:null},parents:function(t){return Z.dir(t,"parentNode")},parentsUntil:function(t,e,n){return Z.dir(t,"parentNode",n)},next:function(t){return r(t,"nextSibling")},prev:function(t){return r(t,"previousSibling")},nextAll:function(t){return Z.dir(t,"nextSibling")},prevAll:function(t){return Z.dir(t,"previousSibling")},nextUntil:function(t,e,n){return Z.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return Z.dir(t,"previousSibling",n)},siblings:function(t){return Z.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return Z.sibling(t.firstChild)},contents:function(t){return t.contentDocument||Z.merge([],t.childNodes)}},function(t,e){Z.fn[t]=function(n,i){var r=Z.map(this,e,n)
return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=Z.filter(i,r)),this.length>1&&(de[t]||Z.unique(r),he.test(t)&&r.reverse()),this.pushStack(r)}})
var pe=/\S+/g,fe={}
Z.Callbacks=function(t){t="string"==typeof t?fe[t]||s(t):Z.extend({},t)
var e,n,i,r,o,a,l=[],u=!t.once&&[],c=function(s){for(e=t.memory&&s,n=!0,a=r||0,r=0,o=l.length,i=!0;l&&o>a;a++)if(l[a].apply(s[0],s[1])===!1&&t.stopOnFalse){e=!1
break}i=!1,l&&(u?u.length&&c(u.shift()):e?l=[]:h.disable())},h={add:function(){if(l){var n=l.length
!function s(e){Z.each(e,function(e,n){var i=Z.type(n)
"function"===i?t.unique&&h.has(n)||l.push(n):n&&n.length&&"string"!==i&&s(n)})}(arguments),i?o=l.length:e&&(r=n,c(e))}return this},remove:function(){return l&&Z.each(arguments,function(t,e){for(var n;(n=Z.inArray(e,l,n))>-1;)l.splice(n,1),i&&(o>=n&&o--,a>=n&&a--)}),this},has:function(t){return t?Z.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=e=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,e||h.disable(),this},locked:function(){return!u},fireWith:function(t,e){return!l||n&&!u||(e=e||[],e=[t,e.slice?e.slice():e],i?u.push(e):c(e)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!n}}
return h},Z.extend({Deferred:function(t){var e=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var t=arguments
return Z.Deferred(function(n){Z.each(e,function(e,s){var o=Z.isFunction(t[e])&&t[e]
r[s[1]](function(){var t=o&&o.apply(this,arguments)
t&&Z.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s[0]+"With"](this===i?n.promise():this,o?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?Z.extend(t,i):i}},r={}
return i.pipe=i.then,Z.each(e,function(t,s){var o=s[2],a=s[3]
i[s[1]]=o.add,a&&o.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),r[s[0]]=function(){return r[s[0]+"With"](this===r?i:this,arguments),this},r[s[0]+"With"]=o.fireWith}),i.promise(r),t&&t.call(r,r),r},when:function(t){var e,n,i,r=0,s=L.call(arguments),o=s.length,a=1!==o||t&&Z.isFunction(t.promise)?o:0,l=1===a?t:Z.Deferred(),u=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?L.call(arguments):r,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}}
if(o>1)for(e=new Array(o),n=new Array(o),i=new Array(o);o>r;r++)s[r]&&Z.isFunction(s[r].promise)?s[r].promise().done(u(r,i,s)).fail(l.reject).progress(u(r,n,e)):--a
return a||l.resolveWith(i,s),l.promise()}})
var me
Z.fn.ready=function(t){return Z.ready.promise().done(t),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(t){t?Z.readyWait++:Z.ready(!0)},ready:function(t){(t===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,t!==!0&&--Z.readyWait>0||(me.resolveWith(J,[Z]),Z.fn.triggerHandler&&(Z(J).triggerHandler("ready"),Z(J).off("ready"))))}}),Z.ready.promise=function(e){return me||(me=Z.Deferred(),"complete"===J.readyState?setTimeout(Z.ready):(J.addEventListener("DOMContentLoaded",o,!1),t.addEventListener("load",o,!1))),me.promise(e)},Z.ready.promise()
var ge=Z.access=function(t,e,n,i,r,s,o){var a=0,l=t.length,u=null==n
if("object"===Z.type(n)){r=!0
for(a in n)Z.access(t,e,a,n[a],!0,s,o)}else if(void 0!==i&&(r=!0,Z.isFunction(i)||(o=!0),u&&(o?(e.call(t,i),e=null):(u=e,e=function(t,e,n){return u.call(Z(t),n)})),e))for(;l>a;a++)e(t[a],n,o?i:i.call(t[a],a,e(t[a],n)))
return r?t:u?e.call(t):l?e(t[0],n):s}
Z.acceptData=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(t){if(!a.accepts(t))return 0
var e={},n=t[this.expando]
if(!n){n=a.uid++
try{e[this.expando]={value:n},Object.defineProperties(t,e)}catch(i){e[this.expando]=n,Z.extend(t,e)}}return this.cache[n]||(this.cache[n]={}),n},set:function(t,e,n){var i,r=this.key(t),s=this.cache[r]
if("string"==typeof e)s[e]=n
else if(Z.isEmptyObject(s))Z.extend(this.cache[r],e)
else for(i in e)s[i]=e[i]
return s},get:function(t,e){var n=this.cache[this.key(t)]
return void 0===e?n:n[e]},access:function(t,e,n){var i
return void 0===e||e&&"string"==typeof e&&void 0===n?(i=this.get(t,e),void 0!==i?i:this.get(t,Z.camelCase(e))):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i,r,s=this.key(t),o=this.cache[s]
if(void 0===e)this.cache[s]={}
else{Z.isArray(e)?i=e.concat(e.map(Z.camelCase)):(r=Z.camelCase(e),e in o?i=[e,r]:(i=r,i=i in o?[i]:i.match(pe)||[])),n=i.length
for(;n--;)delete o[i[n]]}},hasData:function(t){return!Z.isEmptyObject(this.cache[t[this.expando]]||{})},discard:function(t){t[this.expando]&&delete this.cache[t[this.expando]]}}
var ve=new a,be=new a,ye=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,$e=/([A-Z])/g
Z.extend({hasData:function(t){return be.hasData(t)||ve.hasData(t)},data:function(t,e,n){return be.access(t,e,n)},removeData:function(t,e){be.remove(t,e)},_data:function(t,e,n){return ve.access(t,e,n)},_removeData:function(t,e){ve.remove(t,e)}}),Z.fn.extend({data:function(t,e){var n,i,r,s=this[0],o=s&&s.attributes
if(void 0===t){if(this.length&&(r=be.get(s),1===s.nodeType&&!ve.get(s,"hasDataAttrs"))){for(n=o.length;n--;)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=Z.camelCase(i.slice(5)),l(s,i,r[i])))
ve.set(s,"hasDataAttrs",!0)}return r}return"object"==typeof t?this.each(function(){be.set(this,t)}):ge(this,function(e){var n,i=Z.camelCase(t)
if(s&&void 0===e){if(n=be.get(s,t),void 0!==n)return n
if(n=be.get(s,i),void 0!==n)return n
if(n=l(s,i,void 0),void 0!==n)return n}else this.each(function(){var n=be.get(this,i)
be.set(this,i,e),-1!==t.indexOf("-")&&void 0!==n&&be.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){be.remove(this,t)})}}),Z.extend({queue:function(t,e,n){var i
return t?(e=(e||"fx")+"queue",i=ve.get(t,e),n&&(!i||Z.isArray(n)?i=ve.access(t,e,Z.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx"
var n=Z.queue(t,e),i=n.length,r=n.shift(),s=Z._queueHooks(t,e),o=function(){Z.dequeue(t,e)}
"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===e&&n.unshift("inprogress"),delete s.stop,r.call(t,o,s)),!i&&s&&s.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks"
return ve.get(t,n)||ve.access(t,n,{empty:Z.Callbacks("once memory").add(function(){ve.remove(t,[e+"queue",n])})})}}),Z.fn.extend({queue:function(t,e){var n=2
return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?Z.queue(this[0],t):void 0===e?this:this.each(function(){var n=Z.queue(this,t,e)
Z._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&Z.dequeue(this,t)})},dequeue:function(t){return this.each(function(){Z.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,r=Z.Deferred(),s=this,o=this.length,a=function(){--i||r.resolveWith(s,[s])}
for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";o--;)n=ve.get(s[o],t+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a))
return a(),r.promise(e)}})
var we=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,xe=["Top","Right","Bottom","Left"],_e=function(t,e){return t=e||t,"none"===Z.css(t,"display")||!Z.contains(t.ownerDocument,t)},Ce=/^(?:checkbox|radio)$/i
!function(){var t=J.createDocumentFragment(),e=t.appendChild(J.createElement("div")),n=J.createElement("input")
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),G.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",G.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}()
var ke="undefined"
G.focusinBubbles="onfocusin"in t
var Te=/^key/,De=/^(?:mouse|pointer|contextmenu)|click/,Ee=/^(?:focusinfocus|focusoutblur)$/,Se=/^([^.]*)(?:\.(.+)|)$/
Z.event={global:{},add:function(t,e,n,i,r){var s,o,a,l,u,c,h,d,p,f,m,g=ve.get(t)
if(g)for(n.handler&&(s=n,n=s.handler,r=s.selector),n.guid||(n.guid=Z.guid++),(l=g.events)||(l=g.events={}),(o=g.handle)||(o=g.handle=function(e){return typeof Z!==ke&&Z.event.triggered!==e.type?Z.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(pe)||[""],u=e.length;u--;)a=Se.exec(e[u])||[],p=m=a[1],f=(a[2]||"").split(".").sort(),p&&(h=Z.event.special[p]||{},p=(r?h.delegateType:h.bindType)||p,h=Z.event.special[p]||{},c=Z.extend({type:p,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&Z.expr.match.needsContext.test(r),namespace:f.join(".")},s),(d=l[p])||(d=l[p]=[],d.delegateCount=0,h.setup&&h.setup.call(t,i,f,o)!==!1||t.addEventListener&&t.addEventListener(p,o,!1)),h.add&&(h.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,c):d.push(c),Z.event.global[p]=!0)},remove:function(t,e,n,i,r){var s,o,a,l,u,c,h,d,p,f,m,g=ve.hasData(t)&&ve.get(t)
if(g&&(l=g.events)){for(e=(e||"").match(pe)||[""],u=e.length;u--;)if(a=Se.exec(e[u])||[],p=m=a[1],f=(a[2]||"").split(".").sort(),p){for(h=Z.event.special[p]||{},p=(i?h.delegateType:h.bindType)||p,d=l[p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;s--;)c=d[s],!r&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(d.splice(s,1),c.selector&&d.delegateCount--,h.remove&&h.remove.call(t,c))
o&&!d.length&&(h.teardown&&h.teardown.call(t,f,g.handle)!==!1||Z.removeEvent(t,p,g.handle),delete l[p])}else for(p in l)Z.event.remove(t,p+e[u],n,i,!0)
Z.isEmptyObject(l)&&(delete g.handle,ve.remove(t,"events"))}},trigger:function(e,n,i,r){var s,o,a,l,u,c,h,d=[i||J],p=X.call(e,"type")?e.type:e,f=X.call(e,"namespace")?e.namespace.split("."):[]
if(o=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!Ee.test(p+Z.event.triggered)&&(p.indexOf(".")>=0&&(f=p.split("."),p=f.shift(),f.sort()),u=p.indexOf(":")<0&&"on"+p,e=e[Z.expando]?e:new Z.Event(p,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=f.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:Z.makeArray(n,[e]),h=Z.event.special[p]||{},r||!h.trigger||h.trigger.apply(i,n)!==!1)){if(!r&&!h.noBubble&&!Z.isWindow(i)){for(l=h.delegateType||p,Ee.test(l+p)||(o=o.parentNode);o;o=o.parentNode)d.push(o),a=o
a===(i.ownerDocument||J)&&d.push(a.defaultView||a.parentWindow||t)}for(s=0;(o=d[s++])&&!e.isPropagationStopped();)e.type=s>1?l:h.bindType||p,c=(ve.get(o,"events")||{})[e.type]&&ve.get(o,"handle"),c&&c.apply(o,n),c=u&&o[u],c&&c.apply&&Z.acceptData(o)&&(e.result=c.apply(o,n),e.result===!1&&e.preventDefault())
return e.type=p,r||e.isDefaultPrevented()||h._default&&h._default.apply(d.pop(),n)!==!1||!Z.acceptData(i)||u&&Z.isFunction(i[p])&&!Z.isWindow(i)&&(a=i[u],a&&(i[u]=null),Z.event.triggered=p,i[p](),Z.event.triggered=void 0,a&&(i[u]=a)),e.result}},dispatch:function(t){t=Z.event.fix(t)
var e,n,i,r,s,o=[],a=L.call(arguments),l=(ve.get(this,"events")||{})[t.type]||[],u=Z.event.special[t.type]||{}
if(a[0]=t,t.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,t)!==!1){for(o=Z.event.handlers.call(this,t,l),e=0;(r=o[e++])&&!t.isPropagationStopped();)for(t.currentTarget=r.elem,n=0;(s=r.handlers[n++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(s.namespace))&&(t.handleObj=s,t.data=s.data,i=((Z.event.special[s.origType]||{}).handle||s.handler).apply(r.elem,a),void 0!==i&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()))
return u.postDispatch&&u.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,r,s,o=[],a=e.delegateCount,l=t.target
if(a&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==t.type){for(i=[],n=0;a>n;n++)s=e[n],r=s.selector+" ",void 0===i[r]&&(i[r]=s.needsContext?Z(r,this).index(l)>=0:Z.find(r,this,null,[l]).length),i[r]&&i.push(s)
i.length&&o.push({elem:l,handlers:i})}return a<e.length&&o.push({elem:this,handlers:e.slice(a)}),o},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,i,r,s=e.button
return null==t.pageX&&null!=e.clientX&&(n=t.target.ownerDocument||J,i=n.documentElement,r=n.body,t.pageX=e.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),t.pageY=e.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),t.which||void 0===s||(t.which=1&s?1:2&s?3:4&s?2:0),t}},fix:function(t){if(t[Z.expando])return t
var e,n,i,r=t.type,s=t,o=this.fixHooks[r]
for(o||(this.fixHooks[r]=o=De.test(r)?this.mouseHooks:Te.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,t=new Z.Event(s),e=i.length;e--;)n=i[e],t[n]=s[n]
return t.target||(t.target=J),3===t.target.nodeType&&(t.target=t.target.parentNode),o.filter?o.filter(t,s):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==h()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return Z.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n,i){var r=Z.extend(new Z.Event,n,{type:t,isSimulated:!0,originalEvent:{}})
i?Z.event.trigger(r,null,e):Z.event.dispatch.call(e,r),r.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)},Z.Event=function(t,e){return this instanceof Z.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?u:c):this.type=t,e&&Z.extend(this,e),this.timeStamp=t&&t.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(t,e)},Z.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var t=this.originalEvent
this.isDefaultPrevented=u,t&&t.preventDefault&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent
this.isPropagationStopped=u,t&&t.stopPropagation&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent
this.isImmediatePropagationStopped=u,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){Z.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,r=t.relatedTarget,s=t.handleObj
return(!r||r!==i&&!Z.contains(i,r))&&(t.type=s.origType,n=s.handler.apply(this,arguments),t.type=e),n}}}),G.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){Z.event.simulate(e,t.target,Z.event.fix(t),!0)}
Z.event.special[e]={setup:function(){var i=this.ownerDocument||this,r=ve.access(i,e)
r||i.addEventListener(t,n,!0),ve.access(i,e,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=ve.access(i,e)-1
r?ve.access(i,e,r):(i.removeEventListener(t,n,!0),ve.remove(i,e))}}}),Z.fn.extend({on:function(t,e,n,i,r){var s,o
if("object"==typeof t){"string"!=typeof e&&(n=n||e,e=void 0)
for(o in t)this.on(o,e,n,t[o],r)
return this}if(null==n&&null==i?(i=e,n=e=void 0):null==i&&("string"==typeof e?(i=n,n=void 0):(i=n,n=e,e=void 0)),i===!1)i=c
else if(!i)return this
return 1===r&&(s=i,i=function(t){return Z().off(t),s.apply(this,arguments)},i.guid=s.guid||(s.guid=Z.guid++)),this.each(function(){Z.event.add(this,t,i,n,e)})},one:function(t,e,n,i){return this.on(t,e,n,i,1)},off:function(t,e,n){var i,r
if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,Z(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
if("object"==typeof t){for(r in t)this.off(r,e,t[r])
return this}return(e===!1||"function"==typeof e)&&(n=e,e=void 0),n===!1&&(n=c),this.each(function(){Z.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){Z.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0]
return n?Z.event.trigger(t,e,n,!0):void 0}})
var Ie=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Me=/<([\w:]+)/,Ae=/<|&#?\w+;/,Oe=/<(?:script|style|link)/i,Ne=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^$|\/(?:java|ecma)script/i,He=/^true\/(.*)/,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Re={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
Re.optgroup=Re.option,Re.tbody=Re.tfoot=Re.colgroup=Re.caption=Re.thead,Re.th=Re.td,Z.extend({clone:function(t,e,n){var i,r,s,o,a=t.cloneNode(!0),l=Z.contains(t.ownerDocument,t)
if(!(G.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||Z.isXMLDoc(t)))for(o=v(a),s=v(t),i=0,r=s.length;r>i;i++)b(s[i],o[i])
if(e)if(n)for(s=s||v(t),o=o||v(a),i=0,r=s.length;r>i;i++)g(s[i],o[i])
else g(t,a)
return o=v(a,"script"),o.length>0&&m(o,!l&&v(t,"script")),a},buildFragment:function(t,e,n,i){for(var r,s,o,a,l,u,c=e.createDocumentFragment(),h=[],d=0,p=t.length;p>d;d++)if(r=t[d],r||0===r)if("object"===Z.type(r))Z.merge(h,r.nodeType?[r]:r)
else if(Ae.test(r)){for(s=s||c.appendChild(e.createElement("div")),o=(Me.exec(r)||["",""])[1].toLowerCase(),a=Re[o]||Re._default,s.innerHTML=a[1]+r.replace(Ie,"<$1></$2>")+a[2],u=a[0];u--;)s=s.lastChild
Z.merge(h,s.childNodes),s=c.firstChild,s.textContent=""}else h.push(e.createTextNode(r))
for(c.textContent="",d=0;r=h[d++];)if((!i||-1===Z.inArray(r,i))&&(l=Z.contains(r.ownerDocument,r),s=v(c.appendChild(r),"script"),l&&m(s),n))for(u=0;r=s[u++];)Pe.test(r.type||"")&&n.push(r)
return c},cleanData:function(t){for(var e,n,i,r,s=Z.event.special,o=0;void 0!==(n=t[o]);o++){if(Z.acceptData(n)&&(r=n[ve.expando],r&&(e=ve.cache[r]))){if(e.events)for(i in e.events)s[i]?Z.event.remove(n,i):Z.removeEvent(n,i,e.handle)
ve.cache[r]&&delete ve.cache[r]}delete be.cache[n[be.expando]]}}}),Z.fn.extend({text:function(t){return ge(this,function(t){return void 0===t?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=d(this,t)
e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=d(this,t)
e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var n,i=t?Z.filter(t,this):this,r=0;null!=(n=i[r]);r++)e||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(e&&Z.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n))
return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(Z.cleanData(v(t,!1)),t.textContent="")
return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return Z.clone(this,t,e)})},html:function(t){return ge(this,function(t){var e=this[0]||{},n=0,i=this.length
if(void 0===t&&1===e.nodeType)return e.innerHTML
if("string"==typeof t&&!Oe.test(t)&&!Re[(Me.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(Ie,"<$1></$2>")
try{for(;i>n;n++)e=this[n]||{},1===e.nodeType&&(Z.cleanData(v(e,!1)),e.innerHTML=t)
e=0}catch(r){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0]
return this.domManip(arguments,function(e){t=this.parentNode,Z.cleanData(v(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=V.apply([],t)
var n,i,r,s,o,a,l=0,u=this.length,c=this,h=u-1,d=t[0],m=Z.isFunction(d)
if(m||u>1&&"string"==typeof d&&!G.checkClone&&Ne.test(d))return this.each(function(n){var i=c.eq(n)
m&&(t[0]=d.call(this,n,i.html())),i.domManip(t,e)})
if(u&&(n=Z.buildFragment(t,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(r=Z.map(v(n,"script"),p),s=r.length;u>l;l++)o=n,l!==h&&(o=Z.clone(o,!0,!0),s&&Z.merge(r,v(o,"script"))),e.call(this[l],o,l)
if(s)for(a=r[r.length-1].ownerDocument,Z.map(r,f),l=0;s>l;l++)o=r[l],Pe.test(o.type||"")&&!ve.access(o,"globalEval")&&Z.contains(a,o)&&(o.src?Z._evalUrl&&Z._evalUrl(o.src):Z.globalEval(o.textContent.replace(je,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){Z.fn[t]=function(t){for(var n,i=[],r=Z(t),s=r.length-1,o=0;s>=o;o++)n=o===s?this:this.clone(!0),Z(r[o])[e](n),B.apply(i,n.get())
return this.pushStack(i)}})
var Fe,ze={},We=/^margin/,qe=new RegExp("^("+we+")(?!px)[a-z%]+$","i"),Le=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):t.getComputedStyle(e,null)}
!function(){function e(){o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o.innerHTML="",r.appendChild(s)
var e=t.getComputedStyle(o,null)
n="1%"!==e.top,i="4px"===e.width,r.removeChild(s)}var n,i,r=J.documentElement,s=J.createElement("div"),o=J.createElement("div")
o.style&&(o.style.backgroundClip="content-box",o.cloneNode(!0).style.backgroundClip="",G.clearCloneStyle="content-box"===o.style.backgroundClip,s.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",s.appendChild(o),t.getComputedStyle&&Z.extend(G,{pixelPosition:function(){return e(),n},boxSizingReliable:function(){return null==i&&e(),i},reliableMarginRight:function(){var e,n=o.appendChild(J.createElement("div"))
return n.style.cssText=o.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",o.style.width="1px",r.appendChild(s),e=!parseFloat(t.getComputedStyle(n,null).marginRight),r.removeChild(s),o.removeChild(n),e}}))}(),Z.swap=function(t,e,n,i){var r,s,o={}
for(s in e)o[s]=t.style[s],t.style[s]=e[s]
r=n.apply(t,i||[])
for(s in e)t.style[s]=o[s]
return r}
var Ve=/^(none|table(?!-c[ea]).+)/,Be=new RegExp("^("+we+")(.*)$","i"),Ue=new RegExp("^([+-])=("+we+")","i"),Ye={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","O","Moz","ms"]
Z.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=w(t,"opacity")
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var r,s,o,a=Z.camelCase(e),l=t.style
return e=Z.cssProps[a]||(Z.cssProps[a]=_(l,a)),o=Z.cssHooks[e]||Z.cssHooks[a],void 0===n?o&&"get"in o&&void 0!==(r=o.get(t,!1,i))?r:l[e]:(s=typeof n,"string"===s&&(r=Ue.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(Z.css(t,e)),s="number"),null!=n&&n===n&&("number"!==s||Z.cssNumber[a]||(n+="px"),G.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),o&&"set"in o&&void 0===(n=o.set(t,n,i))||(l[e]=n)),void 0)}},css:function(t,e,n,i){var r,s,o,a=Z.camelCase(e)
return e=Z.cssProps[a]||(Z.cssProps[a]=_(t.style,a)),o=Z.cssHooks[e]||Z.cssHooks[a],o&&"get"in o&&(r=o.get(t,!0,n)),void 0===r&&(r=w(t,e,i)),"normal"===r&&e in Ke&&(r=Ke[e]),""===n||n?(s=parseFloat(r),n===!0||Z.isNumeric(s)?s||0:r):r}}),Z.each(["height","width"],function(t,e){Z.cssHooks[e]={get:function(t,n,i){return n?Ve.test(Z.css(t,"display"))&&0===t.offsetWidth?Z.swap(t,Ye,function(){return T(t,e,i)}):T(t,e,i):void 0},set:function(t,n,i){var r=i&&Le(t)
return C(t,n,i?k(t,e,i,"border-box"===Z.css(t,"boxSizing",!1,r),r):0)}}}),Z.cssHooks.marginRight=x(G.reliableMarginRight,function(t,e){return e?Z.swap(t,{display:"inline-block"},w,[t,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(t,e){Z.cssHooks[t+e]={expand:function(n){for(var i=0,r={},s="string"==typeof n?n.split(" "):[n];4>i;i++)r[t+xe[i]+e]=s[i]||s[i-2]||s[0]
return r}},We.test(t)||(Z.cssHooks[t+e].set=C)}),Z.fn.extend({css:function(t,e){return ge(this,function(t,e,n){var i,r,s={},o=0
if(Z.isArray(e)){for(i=Le(t),r=e.length;r>o;o++)s[e[o]]=Z.css(t,e[o],!1,i)
return s}return void 0!==n?Z.style(t,e,n):Z.css(t,e)},t,e,arguments.length>1)},show:function(){return D(this,!0)},hide:function(){return D(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){_e(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=E,E.prototype={constructor:E,init:function(t,e,n,i,r,s){this.elem=t,this.prop=n,this.easing=r||"swing",this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=s||(Z.cssNumber[n]?"":"px")},cur:function(){var t=E.propHooks[this.prop]
return t&&t.get?t.get(this):E.propHooks._default.get(this)},run:function(t){var e,n=E.propHooks[this.prop]
return this.pos=e=this.options.duration?Z.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):E.propHooks._default.set(this),this}},E.prototype.init.prototype=E.prototype,E.propHooks={_default:{get:function(t){var e
return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=Z.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){Z.fx.step[t.prop]?Z.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[Z.cssProps[t.prop]]||Z.cssHooks[t.prop])?Z.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},E.propHooks.scrollTop=E.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},Z.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},Z.fx=E.prototype.init,Z.fx.step={}
var Ge,Je,Qe=/^(?:toggle|show|hide)$/,Ze=new RegExp("^(?:([+-])=|)("+we+")([a-z%]*)$","i"),tn=/queueHooks$/,en=[A],nn={"*":[function(t,e){var n=this.createTween(t,e),i=n.cur(),r=Ze.exec(e),s=r&&r[3]||(Z.cssNumber[t]?"":"px"),o=(Z.cssNumber[t]||"px"!==s&&+i)&&Ze.exec(Z.css(n.elem,t)),a=1,l=20
if(o&&o[3]!==s){s=s||o[3],r=r||[],o=+i||1
do a=a||".5",o/=a,Z.style(n.elem,t,o+s)
while(a!==(a=n.cur()/i)&&1!==a&&--l)}return r&&(o=n.start=+o||+i||0,n.unit=s,n.end=r[1]?o+(r[1]+1)*r[2]:+r[2]),n}]}
Z.Animation=Z.extend(N,{tweener:function(t,e){Z.isFunction(t)?(e=t,t=["*"]):t=t.split(" ")
for(var n,i=0,r=t.length;r>i;i++)n=t[i],nn[n]=nn[n]||[],nn[n].unshift(e)},prefilter:function(t,e){e?en.unshift(t):en.push(t)}}),Z.speed=function(t,e,n){var i=t&&"object"==typeof t?Z.extend({},t):{complete:n||!n&&e||Z.isFunction(t)&&t,duration:t,easing:n&&e||e&&!Z.isFunction(e)&&e}
return i.duration=Z.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in Z.fx.speeds?Z.fx.speeds[i.duration]:Z.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){Z.isFunction(i.old)&&i.old.call(this),i.queue&&Z.dequeue(this,i.queue)},i},Z.fn.extend({fadeTo:function(t,e,n,i){return this.filter(_e).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var r=Z.isEmptyObject(t),s=Z.speed(e,n,i),o=function(){var e=N(this,Z.extend({},t),s);(r||ve.get(this,"finish"))&&e.stop(!0)}
return o.finish=o,r||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(t,e,n){var i=function(t){var e=t.stop
delete t.stop,e(n)}
return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,r=null!=t&&t+"queueHooks",s=Z.timers,o=ve.get(this)
if(r)o[r]&&o[r].stop&&i(o[r])
else for(r in o)o[r]&&o[r].stop&&tn.test(r)&&i(o[r])
for(r=s.length;r--;)s[r].elem!==this||null!=t&&s[r].queue!==t||(s[r].anim.stop(n),e=!1,s.splice(r,1));(e||!n)&&Z.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=ve.get(this),i=n[t+"queue"],r=n[t+"queueHooks"],s=Z.timers,o=i?i.length:0
for(n.finish=!0,Z.queue(this,t,[]),r&&r.stop&&r.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1))
for(e=0;o>e;e++)i[e]&&i[e].finish&&i[e].finish.call(this)
delete n.finish})}}),Z.each(["toggle","show","hide"],function(t,e){var n=Z.fn[e]
Z.fn[e]=function(t,i,r){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(I(e,!0),t,i,r)}}),Z.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){Z.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),Z.timers=[],Z.fx.tick=function(){var t,e=0,n=Z.timers
for(Ge=Z.now();e<n.length;e++)t=n[e],t()||n[e]!==t||n.splice(e--,1)
n.length||Z.fx.stop(),Ge=void 0},Z.fx.timer=function(t){Z.timers.push(t),t()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Je||(Je=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Je),Je=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(t,e){return t=Z.fx?Z.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var i=setTimeout(e,t)
n.stop=function(){clearTimeout(i)}})},function(){var t=J.createElement("input"),e=J.createElement("select"),n=e.appendChild(J.createElement("option"))
t.type="checkbox",G.checkOn=""!==t.value,G.optSelected=n.selected,e.disabled=!0,G.optDisabled=!n.disabled,t=J.createElement("input"),t.value="t",t.type="radio",G.radioValue="t"===t.value}()
var rn,sn,on=Z.expr.attrHandle
Z.fn.extend({attr:function(t,e){return ge(this,Z.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){Z.removeAttr(this,t)})}}),Z.extend({attr:function(t,e,n){var i,r,s=t.nodeType
if(t&&3!==s&&8!==s&&2!==s)return typeof t.getAttribute===ke?Z.prop(t,e,n):(1===s&&Z.isXMLDoc(t)||(e=e.toLowerCase(),i=Z.attrHooks[e]||(Z.expr.match.bool.test(e)?sn:rn)),void 0===n?i&&"get"in i&&null!==(r=i.get(t,e))?r:(r=Z.find.attr(t,e),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:(t.setAttribute(e,n+""),n):void Z.removeAttr(t,e))},removeAttr:function(t,e){var n,i,r=0,s=e&&e.match(pe)
if(s&&1===t.nodeType)for(;n=s[r++];)i=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(t[i]=!1),t.removeAttribute(n)},attrHooks:{type:{set:function(t,e){if(!G.radioValue&&"radio"===e&&Z.nodeName(t,"input")){var n=t.value
return t.setAttribute("type",e),n&&(t.value=n),e}}}}}),sn={set:function(t,e,n){return e===!1?Z.removeAttr(t,n):t.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(t,e){var n=on[e]||Z.find.attr
on[e]=function(t,e,i){var r,s
return i||(s=on[e],on[e]=r,r=null!=n(t,e,i)?e.toLowerCase():null,on[e]=s),r}})
var an=/^(?:input|select|textarea|button)$/i
Z.fn.extend({prop:function(t,e){return ge(this,Z.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[Z.propFix[t]||t]})}}),Z.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(t,e,n){var i,r,s,o=t.nodeType
if(t&&3!==o&&8!==o&&2!==o)return s=1!==o||!Z.isXMLDoc(t),s&&(e=Z.propFix[e]||e,r=Z.propHooks[e]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:t[e]=n:r&&"get"in r&&null!==(i=r.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){return t.hasAttribute("tabindex")||an.test(t.nodeName)||t.href?t.tabIndex:-1}}}}),G.optSelected||(Z.propHooks.selected={get:function(t){var e=t.parentNode
return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this})
var ln=/[\t\r\n\f]/g
Z.fn.extend({addClass:function(t){var e,n,i,r,s,o,a="string"==typeof t&&t,l=0,u=this.length
if(Z.isFunction(t))return this.each(function(e){Z(this).addClass(t.call(this,e,this.className))})
if(a)for(e=(t||"").match(pe)||[];u>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):" ")){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ")
o=Z.trim(i),n.className!==o&&(n.className=o)}return this},removeClass:function(t){var e,n,i,r,s,o,a=0===arguments.length||"string"==typeof t&&t,l=0,u=this.length
if(Z.isFunction(t))return this.each(function(e){Z(this).removeClass(t.call(this,e,this.className))})
if(a)for(e=(t||"").match(pe)||[];u>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ln," "):"")){for(s=0;r=e[s++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ")
o=t?Z.trim(i):"",n.className!==o&&(n.className=o)}return this},toggleClass:function(t,e){var n=typeof t
return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):this.each(Z.isFunction(t)?function(n){Z(this).toggleClass(t.call(this,n,this.className,e),e)}:function(){if("string"===n)for(var e,i=0,r=Z(this),s=t.match(pe)||[];e=s[i++];)r.hasClass(e)?r.removeClass(e):r.addClass(e)
else(n===ke||"boolean"===n)&&(this.className&&ve.set(this,"__className__",this.className),this.className=this.className||t===!1?"":ve.get(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(ln," ").indexOf(e)>=0)return!0
return!1}})
var un=/\r/g
Z.fn.extend({val:function(t){var e,n,i,r=this[0]
{if(arguments.length)return i=Z.isFunction(t),this.each(function(n){var r
1===this.nodeType&&(r=i?t.call(this,n,Z(this).val()):t,null==r?r="":"number"==typeof r?r+="":Z.isArray(r)&&(r=Z.map(r,function(t){return null==t?"":t+""})),e=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,r,"value")||(this.value=r))})
if(r)return e=Z.valHooks[r.type]||Z.valHooks[r.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(un,""):null==n?"":n)}}}),Z.extend({valHooks:{option:{get:function(t){var e=Z.find.attr(t,"value")
return null!=e?e:Z.trim(Z.text(t))}},select:{get:function(t){for(var e,n,i=t.options,r=t.selectedIndex,s="select-one"===t.type||0>r,o=s?null:[],a=s?r+1:i.length,l=0>r?a:s?r:0;a>l;l++)if(n=i[l],!(!n.selected&&l!==r||(G.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(e=Z(n).val(),s)return e
o.push(e)}return o},set:function(t,e){for(var n,i,r=t.options,s=Z.makeArray(e),o=r.length;o--;)i=r[o],(i.selected=Z.inArray(i.value,s)>=0)&&(n=!0)
return n||(t.selectedIndex=-1),s}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(t,e){return Z.isArray(e)?t.checked=Z.inArray(Z(t).val(),e)>=0:void 0}},G.checkOn||(Z.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){Z.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),Z.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}})
var cn=Z.now(),hn=/\?/
Z.parseJSON=function(t){return JSON.parse(t+"")},Z.parseXML=function(t){var e,n
if(!t||"string"!=typeof t)return null
try{n=new DOMParser,e=n.parseFromString(t,"text/xml")}catch(i){e=void 0}return(!e||e.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+t),e}
var dn=/#.*$/,pn=/([?&])_=[^&]*/,fn=/^(.*?):[ \t]*([^\r\n]*)$/gm,mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,gn=/^(?:GET|HEAD)$/,vn=/^\/\//,bn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,yn={},$n={},wn="*/".concat("*"),xn=t.location.href,_n=bn.exec(xn.toLowerCase())||[]
Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xn,type:"GET",isLocal:mn.test(_n[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?j(j(t,Z.ajaxSettings),e):j(Z.ajaxSettings,t)},ajaxPrefilter:P(yn),ajaxTransport:P($n),ajax:function(t,e){function n(t,e,n,o){var l,c,v,b,$,x=e
2!==y&&(y=2,a&&clearTimeout(a),i=void 0,s=o||"",w.readyState=t>0?4:0,l=t>=200&&300>t||304===t,n&&(b=R(h,w,n)),b=F(h,b,w,l),l?(h.ifModified&&($=w.getResponseHeader("Last-Modified"),$&&(Z.lastModified[r]=$),$=w.getResponseHeader("etag"),$&&(Z.etag[r]=$)),204===t||"HEAD"===h.type?x="nocontent":304===t?x="notmodified":(x=b.state,c=b.data,v=b.error,l=!v)):(v=x,(t||!x)&&(x="error",0>t&&(t=0))),w.status=t,w.statusText=(e||x)+"",l?f.resolveWith(d,[c,x,w]):f.rejectWith(d,[w,x,v]),w.statusCode(g),g=void 0,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[w,h,l?c:v]),m.fireWith(d,[w,x]),u&&(p.trigger("ajaxComplete",[w,h]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{}
var i,r,s,o,a,l,u,c,h=Z.ajaxSetup({},e),d=h.context||h,p=h.context&&(d.nodeType||d.jquery)?Z(d):Z.event,f=Z.Deferred(),m=Z.Callbacks("once memory"),g=h.statusCode||{},v={},b={},y=0,$="canceled",w={readyState:0,getResponseHeader:function(t){var e
if(2===y){if(!o)for(o={};e=fn.exec(s);)o[e[1].toLowerCase()]=e[2]
e=o[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===y?s:null},setRequestHeader:function(t,e){var n=t.toLowerCase()
return y||(t=b[n]=b[n]||t,v[t]=e),this},overrideMimeType:function(t){return y||(h.mimeType=t),this},statusCode:function(t){var e
if(t)if(2>y)for(e in t)g[e]=[g[e],t[e]]
else w.always(t[w.status])
return this},abort:function(t){var e=t||$
return i&&i.abort(e),n(0,e),this}}
if(f.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,h.url=((t||h.url||xn)+"").replace(dn,"").replace(vn,_n[1]+"//"),h.type=e.method||e.type||h.method||h.type,h.dataTypes=Z.trim(h.dataType||"*").toLowerCase().match(pe)||[""],null==h.crossDomain&&(l=bn.exec(h.url.toLowerCase()),h.crossDomain=!(!l||l[1]===_n[1]&&l[2]===_n[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(_n[3]||("http:"===_n[1]?"80":"443")))),h.data&&h.processData&&"string"!=typeof h.data&&(h.data=Z.param(h.data,h.traditional)),H(yn,h,e,w),2===y)return w
u=Z.event&&h.global,u&&0===Z.active++&&Z.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!gn.test(h.type),r=h.url,h.hasContent||(h.data&&(r=h.url+=(hn.test(r)?"&":"?")+h.data,delete h.data),h.cache===!1&&(h.url=pn.test(r)?r.replace(pn,"$1_="+cn++):r+(hn.test(r)?"&":"?")+"_="+cn++)),h.ifModified&&(Z.lastModified[r]&&w.setRequestHeader("If-Modified-Since",Z.lastModified[r]),Z.etag[r]&&w.setRequestHeader("If-None-Match",Z.etag[r])),(h.data&&h.hasContent&&h.contentType!==!1||e.contentType)&&w.setRequestHeader("Content-Type",h.contentType),w.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+wn+"; q=0.01":""):h.accepts["*"])
for(c in h.headers)w.setRequestHeader(c,h.headers[c])
if(h.beforeSend&&(h.beforeSend.call(d,w,h)===!1||2===y))return w.abort()
$="abort"
for(c in{success:1,error:1,complete:1})w[c](h[c])
if(i=H($n,h,e,w)){w.readyState=1,u&&p.trigger("ajaxSend",[w,h]),h.async&&h.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},h.timeout))
try{y=1,i.send(v,n)}catch(x){if(!(2>y))throw x
n(-1,x)}}else n(-1,"No Transport")
return w},getJSON:function(t,e,n){return Z.get(t,e,n,"json")},getScript:function(t,e){return Z.get(t,void 0,e,"script")}}),Z.each(["get","post"],function(t,e){Z[e]=function(t,n,i,r){return Z.isFunction(n)&&(r=r||i,i=n,n=void 0),Z.ajax({url:t,type:e,dataType:r,data:n,success:i})}}),Z._evalUrl=function(t){return Z.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Z.fn.extend({wrapAll:function(t){var e
return Z.isFunction(t)?this.each(function(e){Z(this).wrapAll(t.call(this,e))}):(this[0]&&(e=Z(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild
return t}).append(this)),this)},wrapInner:function(t){return this.each(Z.isFunction(t)?function(e){Z(this).wrapInner(t.call(this,e))}:function(){var e=Z(this),n=e.contents()
n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=Z.isFunction(t)
return this.each(function(n){Z(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0},Z.expr.filters.visible=function(t){return!Z.expr.filters.hidden(t)}
var Cn=/%20/g,kn=/\[\]$/,Tn=/\r?\n/g,Dn=/^(?:submit|button|image|reset|file)$/i,En=/^(?:input|select|textarea|keygen)/i
Z.param=function(t,e){var n,i=[],r=function(t,e){e=Z.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)}
if(void 0===e&&(e=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(t)||t.jquery&&!Z.isPlainObject(t))Z.each(t,function(){r(this.name,this.value)})
else for(n in t)z(n,t[n],e,r)
return i.join("&").replace(Cn,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=Z.prop(this,"elements")
return t?Z.makeArray(t):this}).filter(function(){var t=this.type
return this.name&&!Z(this).is(":disabled")&&En.test(this.nodeName)&&!Dn.test(t)&&(this.checked||!Ce.test(t))}).map(function(t,e){var n=Z(this).val()
return null==n?null:Z.isArray(n)?Z.map(n,function(t){return{name:e.name,value:t.replace(Tn,"\r\n")}}):{name:e.name,value:n.replace(Tn,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(t){}}
var Sn=0,In={},Mn={0:200,1223:204},An=Z.ajaxSettings.xhr()
t.attachEvent&&t.attachEvent("onunload",function(){for(var t in In)In[t]()}),G.cors=!!An&&"withCredentials"in An,G.ajax=An=!!An,Z.ajaxTransport(function(t){var e
return G.cors||An&&!t.crossDomain?{send:function(n,i){var r,s=t.xhr(),o=++Sn
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(r in t.xhrFields)s[r]=t.xhrFields[r]
t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest")
for(r in n)s.setRequestHeader(r,n[r])
e=function(t){return function(){e&&(delete In[o],e=s.onload=s.onerror=null,"abort"===t?s.abort():"error"===t?i(s.status,s.statusText):i(Mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:void 0,s.getAllResponseHeaders()))}},s.onload=e(),s.onerror=e("error"),e=In[o]=e("abort")
try{s.send(t.hasContent&&t.data||null)}catch(a){if(e)throw a}},abort:function(){e&&e()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return Z.globalEval(t),t}}}),Z.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),Z.ajaxTransport("script",function(t){if(t.crossDomain){var e,n
return{send:function(i,r){e=Z("<script>").prop({async:!0,charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&r("error"===t.type?404:200,t.type)}),J.head.appendChild(e[0])},abort:function(){n&&n()}}}})
var On=[],Nn=/(=)\?(?=&|$)|\?\?/
Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=On.pop()||Z.expando+"_"+cn++
return this[t]=!0,t}}),Z.ajaxPrefilter("json jsonp",function(e,n,i){var r,s,o,a=e.jsonp!==!1&&(Nn.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Nn.test(e.data)&&"data")
return a||"jsonp"===e.dataTypes[0]?(r=e.jsonpCallback=Z.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Nn,"$1"+r):e.jsonp!==!1&&(e.url+=(hn.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||Z.error(r+" was not called"),o[0]},e.dataTypes[0]="json",s=t[r],t[r]=function(){o=arguments},i.always(function(){t[r]=s,e[r]&&(e.jsonpCallback=n.jsonpCallback,On.push(r)),o&&Z.isFunction(s)&&s(o[0]),o=s=void 0}),"script"):void 0}),Z.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null
"boolean"==typeof e&&(n=e,e=!1),e=e||J
var i=oe.exec(t),r=!n&&[]
return i?[e.createElement(i[1])]:(i=Z.buildFragment([t],e,r),r&&r.length&&Z(r).remove(),Z.merge([],i.childNodes))}
var Pn=Z.fn.load
Z.fn.load=function(t,e,n){if("string"!=typeof t&&Pn)return Pn.apply(this,arguments)
var i,r,s,o=this,a=t.indexOf(" ")
return a>=0&&(i=Z.trim(t.slice(a)),t=t.slice(0,a)),Z.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(r="POST"),o.length>0&&Z.ajax({url:t,type:r,dataType:"html",data:e}).done(function(t){s=arguments,o.html(i?Z("<div>").append(Z.parseHTML(t)).find(i):t)}).complete(n&&function(t,e){o.each(n,s||[t.responseText,e,t])}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){Z.fn[e]=function(t){return this.on(e,t)}}),Z.expr.filters.animated=function(t){return Z.grep(Z.timers,function(e){return t===e.elem}).length}
var Hn=t.document.documentElement
Z.offset={setOffset:function(t,e,n){var i,r,s,o,a,l,u,c=Z.css(t,"position"),h=Z(t),d={}
"static"===c&&(t.style.position="relative"),a=h.offset(),s=Z.css(t,"top"),l=Z.css(t,"left"),u=("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1,u?(i=h.position(),o=i.top,r=i.left):(o=parseFloat(s)||0,r=parseFloat(l)||0),Z.isFunction(e)&&(e=e.call(t,n,a)),null!=e.top&&(d.top=e.top-a.top+o),null!=e.left&&(d.left=e.left-a.left+r),"using"in e?e.using.call(t,d):h.css(d)}},Z.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){Z.offset.setOffset(this,t,e)})
var e,n,i=this[0],r={top:0,left:0},s=i&&i.ownerDocument
if(s)return e=s.documentElement,Z.contains(e,i)?(typeof i.getBoundingClientRect!==ke&&(r=i.getBoundingClientRect()),n=W(s),{top:r.top+n.pageYOffset-e.clientTop,left:r.left+n.pageXOffset-e.clientLeft}):r},position:function(){if(this[0]){var t,e,n=this[0],i={top:0,left:0}
return"fixed"===Z.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),Z.nodeName(t[0],"html")||(i=t.offset()),i.top+=Z.css(t[0],"borderTopWidth",!0),i.left+=Z.css(t[0],"borderLeftWidth",!0)),{top:e.top-i.top-Z.css(n,"marginTop",!0),left:e.left-i.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||Hn;t&&!Z.nodeName(t,"html")&&"static"===Z.css(t,"position");)t=t.offsetParent
return t||Hn})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var i="pageYOffset"===n
Z.fn[e]=function(r){return ge(this,function(e,r,s){var o=W(e)
return void 0===s?o?o[n]:e[r]:void(o?o.scrollTo(i?t.pageXOffset:s,i?s:t.pageYOffset):e[r]=s)},e,r,arguments.length,null)}}),Z.each(["top","left"],function(t,e){Z.cssHooks[e]=x(G.pixelPosition,function(t,n){return n?(n=w(t,e),qe.test(n)?Z(t).position()[e]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(t,e){Z.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){Z.fn[i]=function(i,r){var s=arguments.length&&(n||"boolean"!=typeof i),o=n||(i===!0||r===!0?"margin":"border")
return ge(this,function(e,n,i){var r
return Z.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+t],r["scroll"+t],e.body["offset"+t],r["offset"+t],r["client"+t])):void 0===i?Z.css(e,n,o):Z.style(e,n,i,o)},e,s?i:void 0,s,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z})
var jn=t.jQuery,Rn=t.$
return Z.noConflict=function(e){return t.$===Z&&(t.$=Rn),e&&t.jQuery===Z&&(t.jQuery=jn),Z},typeof e===ke&&(t.jQuery=t.$=Z),Z}),function(t,e,n){"use strict"
function i(t,e){return e=e||Error,function(){var n,i,r=2,s=arguments,o=s[0],a="["+(t?t+":":"")+o+"] ",l=s[1]
for(a+=l.replace(/\{\d+\}/g,function(t){var e=+t.slice(1,-1),n=e+r
return n<s.length?ye(s[n]):t}),a+="\nhttp://errors.angularjs.org/1.4.6/"+(t?t+"/":"")+o,i=r,n="?";i<s.length;i++,n="&")a+=n+"p"+(i-r)+"="+encodeURIComponent(ye(s[i]))
return new e(a)}}function r(t){if(null==t||E(t))return!1
var e="length"in Object(t)&&t.length
return t.nodeType===Br&&e?!0:_(t)||Hr(t)||0===e||"number"==typeof e&&e>0&&e-1 in t}function s(t,e,n){var i,o
if(t)if(T(t))for(i in t)"prototype"==i||"length"==i||"name"==i||t.hasOwnProperty&&!t.hasOwnProperty(i)||e.call(n,t[i],i,t)
else if(Hr(t)||r(t)){var a="object"!=typeof t
for(i=0,o=t.length;o>i;i++)(a||i in t)&&e.call(n,t[i],i,t)}else if(t.forEach&&t.forEach!==s)t.forEach(e,n,t)
else if(x(t))for(i in t)e.call(n,t[i],i,t)
else if("function"==typeof t.hasOwnProperty)for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)
else for(i in t)yr.call(t,i)&&e.call(n,t[i],i,t)
return t}function o(t,e,n){for(var i=Object.keys(t).sort(),r=0;r<i.length;r++)e.call(n,t[i[r]],i[r])
return i}function a(t){return function(e,n){t(n,e)}}function l(){return++Nr}function u(t,e){e?t.$$hashKey=e:delete t.$$hashKey}function c(t,e,n){for(var i=t.$$hashKey,r=0,s=e.length;s>r;++r){var o=e[r]
if(w(o)||T(o))for(var a=Object.keys(o),l=0,h=a.length;h>l;l++){var d=a[l],p=o[d]
n&&w(p)?k(p)?t[d]=new Date(p.valueOf()):D(p)?t[d]=new RegExp(p):(w(t[d])||(t[d]=Hr(p)?[]:{}),c(t[d],[p],!0)):t[d]=p}}return u(t,i),t}function h(t){return c(t,Dr.call(arguments,1),!1)}function d(t){return c(t,Dr.call(arguments,1),!0)}function p(t){return parseInt(t,10)}function f(t,e){return h(Object.create(t),e)}function m(){}function g(t){return t}function v(t){return function(){return t}}function b(t){return T(t.toString)&&t.toString!==Object.prototype.toString}function y(t){return"undefined"==typeof t}function $(t){return"undefined"!=typeof t}function w(t){return null!==t&&"object"==typeof t}function x(t){return null!==t&&"object"==typeof t&&!Mr(t)}function _(t){return"string"==typeof t}function C(t){return"number"==typeof t}function k(t){return"[object Date]"===Ir.call(t)}function T(t){return"function"==typeof t}function D(t){return"[object RegExp]"===Ir.call(t)}function E(t){return t&&t.window===t}function S(t){return t&&t.$evalAsync&&t.$watch}function I(t){return"[object File]"===Ir.call(t)}function M(t){return"[object FormData]"===Ir.call(t)}function A(t){return"[object Blob]"===Ir.call(t)}function O(t){return"boolean"==typeof t}function N(t){return t&&T(t.then)}function P(t){return jr.test(Ir.call(t))}function H(t){return!(!t||!(t.nodeName||t.prop&&t.attr&&t.find))}function j(t){var e,n={},i=t.split(",")
for(e=0;e<i.length;e++)n[i[e]]=!0
return n}function R(t){return br(t.nodeName||t[0]&&t[0].nodeName)}function F(t,e){var n=t.indexOf(e)
return n>=0&&t.splice(n,1),n}function z(t,e,n,i){if(E(t)||S(t))throw Ar("cpws","Can't copy! Making copies of Window or Scope instances is not supported.")
if(P(e))throw Ar("cpta","Can't copy! TypedArray destination cannot be mutated.")
if(e){if(t===e)throw Ar("cpi","Can't copy! Source and destination are identical.")
n=n||[],i=i||[],w(t)&&(n.push(t),i.push(e))
var r
if(Hr(t)){e.length=0
for(var o=0;o<t.length;o++)e.push(z(t[o],null,n,i))}else{var a=e.$$hashKey
if(Hr(e)?e.length=0:s(e,function(t,n){delete e[n]}),x(t))for(r in t)e[r]=z(t[r],null,n,i)
else if(t&&"function"==typeof t.hasOwnProperty)for(r in t)t.hasOwnProperty(r)&&(e[r]=z(t[r],null,n,i))
else for(r in t)yr.call(t,r)&&(e[r]=z(t[r],null,n,i))
u(e,a)}}else if(e=t,w(t)){var l
if(n&&-1!==(l=n.indexOf(t)))return i[l]
if(Hr(t))return z(t,[],n,i)
if(P(t))e=new t.constructor(t)
else if(k(t))e=new Date(t.getTime())
else if(D(t))e=new RegExp(t.source,t.toString().match(/[^\/]*$/)[0]),e.lastIndex=t.lastIndex
else{if(!T(t.cloneNode)){var c=Object.create(Mr(t))
return z(t,c,n,i)}e=t.cloneNode(!0)}i&&(n.push(t),i.push(e))}return e}function W(t,e){if(Hr(t)){e=e||[]
for(var n=0,i=t.length;i>n;n++)e[n]=t[n]}else if(w(t)){e=e||{}
for(var r in t)("$"!==r.charAt(0)||"$"!==r.charAt(1))&&(e[r]=t[r])}return e||t}function q(t,e){if(t===e)return!0
if(null===t||null===e)return!1
if(t!==t&&e!==e)return!0
var n,i,r,s=typeof t,o=typeof e
if(s==o&&"object"==s){if(!Hr(t)){if(k(t))return k(e)?q(t.getTime(),e.getTime()):!1
if(D(t))return D(e)?t.toString()==e.toString():!1
if(S(t)||S(e)||E(t)||E(e)||Hr(e)||k(e)||D(e))return!1
r=ge()
for(i in t)if("$"!==i.charAt(0)&&!T(t[i])){if(!q(t[i],e[i]))return!1
r[i]=!0}for(i in e)if(!(i in r)&&"$"!==i.charAt(0)&&$(e[i])&&!T(e[i]))return!1
return!0}if(!Hr(e))return!1
if((n=t.length)==e.length){for(i=0;n>i;i++)if(!q(t[i],e[i]))return!1
return!0}}return!1}function L(t,e,n){return t.concat(Dr.call(e,n))}function V(t,e){return Dr.call(t,e||0)}function B(t,e){var n=arguments.length>2?V(arguments,2):[]
return!T(e)||e instanceof RegExp?e:n.length?function(){return arguments.length?e.apply(t,L(n,arguments,0)):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}}function U(t,i){var r=i
return"string"==typeof t&&"$"===t.charAt(0)&&"$"===t.charAt(1)?r=n:E(i)?r="$WINDOW":i&&e===i?r="$DOCUMENT":S(i)&&(r="$SCOPE"),r}function Y(t,e){return"undefined"==typeof t?n:(C(e)||(e=e?2:null),JSON.stringify(t,U,e))}function K(t){return _(t)?JSON.parse(t):t}function X(t,e){var n=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4
return isNaN(n)?e:n}function G(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function J(t,e,n){n=n?-1:1
var i=X(e,t.getTimezoneOffset())
return G(t,n*(i-t.getTimezoneOffset()))}function Q(t){t=Cr(t).clone()
try{t.empty()}catch(e){}var n=Cr("<div>").append(t).html()
try{return t[0].nodeType===Yr?br(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(t,e){return"<"+br(e)})}catch(e){return br(n)}}function Z(t){try{return decodeURIComponent(t)}catch(e){}}function te(t){var e={}
return s((t||"").split("&"),function(t){var n,i,r
t&&(i=t=t.replace(/\+/g,"%20"),n=t.indexOf("="),-1!==n&&(i=t.substring(0,n),r=t.substring(n+1)),i=Z(i),$(i)&&(r=$(r)?Z(r):!0,yr.call(e,i)?Hr(e[i])?e[i].push(r):e[i]=[e[i],r]:e[i]=r))}),e}function ee(t){var e=[]
return s(t,function(t,n){Hr(t)?s(t,function(t){e.push(ie(n,!0)+(t===!0?"":"="+ie(t,!0)))}):e.push(ie(n,!0)+(t===!0?"":"="+ie(t,!0)))}),e.length?e.join("&"):""}function ne(t){return ie(t,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ie(t,e){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,e?"%20":"+")}function re(t,e){var n,i,r=qr.length
for(i=0;r>i;++i)if(n=qr[i]+e,_(n=t.getAttribute(n)))return n
return null}function se(t,e){var n,i,r={}
s(qr,function(e){var r=e+"app"
!n&&t.hasAttribute&&t.hasAttribute(r)&&(n=t,i=t.getAttribute(r))}),s(qr,function(e){var r,s=e+"app"
!n&&(r=t.querySelector("["+s.replace(":","\\:")+"]"))&&(n=r,i=r.getAttribute(s))}),n&&(r.strictDi=null!==re(n,"strict-di"),e(n,i?[i]:[],r))}function oe(n,i,r){w(r)||(r={})
var o={strictDi:!1}
r=h(o,r)
var a=function(){if(n=Cr(n),n.injector()){var t=n[0]===e?"document":Q(n)
throw Ar("btstrpd","App Already Bootstrapped with this Element '{0}'",t.replace(/</,"&lt;").replace(/>/,"&gt;"))}i=i||[],i.unshift(["$provide",function(t){t.value("$rootElement",n)}]),r.debugInfoEnabled&&i.push(["$compileProvider",function(t){t.debugInfoEnabled(!0)}]),i.unshift("ng")
var s=Qe(i,r.strictDi)
return s.invoke(["$rootScope","$rootElement","$compile","$injector",function(t,e,n,i){t.$apply(function(){e.data("$injector",i),n(e)(t)})}]),s},l=/^NG_ENABLE_DEBUG_INFO!/,u=/^NG_DEFER_BOOTSTRAP!/
return t&&l.test(t.name)&&(r.debugInfoEnabled=!0,t.name=t.name.replace(l,"")),t&&!u.test(t.name)?a():(t.name=t.name.replace(u,""),Or.resumeBootstrap=function(t){return s(t,function(t){i.push(t)}),a()},void(T(Or.resumeDeferredBootstrap)&&Or.resumeDeferredBootstrap()))}function ae(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name,t.location.reload()}function le(t){var e=Or.element(t).injector()
if(!e)throw Ar("test","no injector found for element argument to getTestability")
return e.get("$$testability")}function ue(t,e){return e=e||"_",t.replace(Lr,function(t,n){return(n?e:"")+t.toLowerCase()})}function ce(){var e
if(!Vr){var i=Wr()
kr=y(i)?t.jQuery:i?t[i]:n,kr&&kr.fn.on?(Cr=kr,h(kr.fn,{scope:hs.scope,isolateScope:hs.isolateScope,controller:hs.controller,injector:hs.injector,inheritedData:hs.inheritedData}),e=kr.cleanData,kr.cleanData=function(t){var n
if(Pr)Pr=!1
else for(var i,r=0;null!=(i=t[r]);r++)n=kr._data(i,"events"),n&&n.$destroy&&kr(i).triggerHandler("$destroy")
e(t)}):Cr=Ee,Or.element=Cr,Vr=!0}}function he(t,e,n){if(!t)throw Ar("areq","Argument '{0}' is {1}",e||"?",n||"required")
return t}function de(t,e,n){return n&&Hr(t)&&(t=t[t.length-1]),he(T(t),e,"not a function, got "+(t&&"object"==typeof t?t.constructor.name||"Object":typeof t)),t}function pe(t,e){if("hasOwnProperty"===t)throw Ar("badname","hasOwnProperty is not a valid {0} name",e)}function fe(t,e,n){if(!e)return t
for(var i,r=e.split("."),s=t,o=r.length,a=0;o>a;a++)i=r[a],t&&(t=(s=t)[i])
return!n&&T(t)?B(s,t):t}function me(t){for(var e,n=t[0],i=t[t.length-1],r=1;n!==i&&(n=n.nextSibling);r++)(e||t[r]!==n)&&(e||(e=Cr(Dr.call(t,0,r))),e.push(n))
return e||t}function ge(){return Object.create(null)}function ve(t){function e(t,e,n){return t[e]||(t[e]=n())}var n=i("$injector"),r=i("ng"),s=e(t,"angular",Object)
return s.$$minErr=s.$$minErr||i,e(s,"module",function(){var t={}
return function(i,s,o){var a=function(t,e){if("hasOwnProperty"===t)throw r("badname","hasOwnProperty is not a valid {0} name",e)}
return a(i,"module"),s&&t.hasOwnProperty(i)&&(t[i]=null),e(t,i,function(){function t(t,e,n,i){return i||(i=r),function(){return i[n||"push"]([t,e,arguments]),c}}function e(t,e){return function(n,s){return s&&T(s)&&(s.$$moduleName=i),r.push([t,e,arguments]),c}}if(!s)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",i)
var r=[],a=[],l=[],u=t("$injector","invoke","push",a),c={_invokeQueue:r,_configBlocks:a,_runBlocks:l,requires:s,name:i,provider:e("$provide","provider"),factory:e("$provide","factory"),service:e("$provide","service"),value:t("$provide","value"),constant:t("$provide","constant","unshift"),decorator:e("$provide","decorator"),animation:e("$animateProvider","register"),filter:e("$filterProvider","register"),controller:e("$controllerProvider","register"),directive:e("$compileProvider","directive"),config:u,run:function(t){return l.push(t),this}}
return o&&u(o),c})}})}function be(t){var e=[]
return JSON.stringify(t,function(t,n){if(n=U(t,n),w(n)){if(e.indexOf(n)>=0)return"..."
e.push(n)}return n})}function ye(t){return"function"==typeof t?t.toString().replace(/ \{[\s\S]*$/,""):y(t)?"undefined":"string"!=typeof t?be(t):t}function $e(e){h(e,{bootstrap:oe,copy:z,extend:h,merge:d,equals:q,element:Cr,forEach:s,injector:Qe,noop:m,bind:B,toJson:Y,fromJson:K,identity:g,isUndefined:y,isDefined:$,isString:_,isFunction:T,isObject:w,isNumber:C,isElement:H,isArray:Hr,version:Jr,isDate:k,lowercase:br,uppercase:$r,callbacks:{counter:0},getTestability:le,$$minErr:i,$$csp:zr,reloadWithDebugInfo:ae}),(Tr=ve(t))("ng",["ngLocale"],["$provide",function(t){t.provider({$$sanitizeUri:mi}),t.provider("$compile",un).directive({a:ho,input:So,textarea:So,form:vo,script:wa,select:Ca,style:Ta,option:ka,ngBind:Ao,ngBindHtml:No,ngBindTemplate:Oo,ngClass:Ho,ngClassEven:Ro,ngClassOdd:jo,ngCloak:Fo,ngController:zo,ngForm:bo,ngHide:ma,ngIf:Lo,ngInclude:Vo,ngInit:Uo,ngNonBindable:oa,ngPluralize:ca,ngRepeat:ha,ngShow:fa,ngStyle:ga,ngSwitch:va,ngSwitchWhen:ba,ngSwitchDefault:ya,ngOptions:ua,ngTransclude:$a,ngModel:ia,ngList:Yo,ngChange:Po,pattern:Ea,ngPattern:Ea,required:Da,ngRequired:Da,minlength:Ia,ngMinlength:Ia,maxlength:Sa,ngMaxlength:Sa,ngValue:Mo,ngModelOptions:sa}).directive({ngInclude:Bo}).directive(po).directive(Wo),t.provider({$anchorScroll:Ze,$animate:Ts,$animateCss:Ds,$$animateQueue:ks,$$AnimateRunner:Cs,$browser:on,$cacheFactory:an,$controller:fn,$document:mn,$exceptionHandler:gn,$filter:Si,$$forceReflow:As,$interpolate:In,$interval:Mn,$http:Tn,$httpParamSerializer:bn,$httpParamSerializerJQLike:yn,$httpBackend:En,$location:Bn,$log:Un,$parse:ui,$rootScope:fi,$q:ci,$$q:hi,$sce:yi,$sceDelegate:bi,$sniffer:$i,$templateCache:ln,$templateRequest:wi,$$testability:xi,$timeout:_i,$window:Ti,$$rAF:pi,$$jqLite:Ye,$$HashMap:ms,$$cookieReader:Ei})}])}function we(){return++Zr}function xe(t){return t.replace(ns,function(t,e,n,i){return i?n.toUpperCase():n}).replace(is,"Moz$1")}function _e(t){return!as.test(t)}function Ce(t){var e=t.nodeType
return e===Br||!e||e===Xr}function ke(t){for(var e in Qr[t.ng339])return!0
return!1}function Te(t,e){var n,i,r,o,a=e.createDocumentFragment(),l=[]
if(_e(t))l.push(e.createTextNode(t))
else{for(n=n||a.appendChild(e.createElement("div")),i=(ls.exec(t)||["",""])[1].toLowerCase(),r=cs[i]||cs._default,n.innerHTML=r[1]+t.replace(us,"<$1></$2>")+r[2],o=r[0];o--;)n=n.lastChild
l=L(l,n.childNodes),n=a.firstChild,n.textContent=""}return a.textContent="",a.innerHTML="",s(l,function(t){a.appendChild(t)}),a}function De(t,n){n=n||e
var i
return(i=os.exec(t))?[n.createElement(i[1])]:(i=Te(t,n))?i.childNodes:[]}function Ee(t){if(t instanceof Ee)return t
var e
if(_(t)&&(t=Rr(t),e=!0),!(this instanceof Ee)){if(e&&"<"!=t.charAt(0))throw ss("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element")
return new Ee(t)}e?Re(this,De(t)):Re(this,t)}function Se(t){return t.cloneNode(!0)}function Ie(t,e){if(e||Ae(t),t.querySelectorAll)for(var n=t.querySelectorAll("*"),i=0,r=n.length;r>i;i++)Ae(n[i])}function Me(t,e,n,i){if($(i))throw ss("offargs","jqLite#off() does not support the `selector` argument")
var r=Oe(t),o=r&&r.events,a=r&&r.handle
if(a)if(e)s(e.split(" "),function(e){if($(n)){var i=o[e]
if(F(i||[],n),i&&i.length>0)return}es(t,e,a),delete o[e]})
else for(e in o)"$destroy"!==e&&es(t,e,a),delete o[e]}function Ae(t,e){var i=t.ng339,r=i&&Qr[i]
if(r){if(e)return void delete r.data[e]
r.handle&&(r.events.$destroy&&r.handle({},"$destroy"),Me(t)),delete Qr[i],t.ng339=n}}function Oe(t,e){var i=t.ng339,r=i&&Qr[i]
return e&&!r&&(t.ng339=i=we(),r=Qr[i]={events:{},data:{},handle:n}),r}function Ne(t,e,n){if(Ce(t)){var i=$(n),r=!i&&e&&!w(e),s=!e,o=Oe(t,!r),a=o&&o.data
if(i)a[e]=n
else{if(s)return a
if(r)return a&&a[e]
h(a,e)}}}function Pe(t,e){return t.getAttribute?(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+e+" ")>-1:!1}function He(t,e){e&&t.setAttribute&&s(e.split(" "),function(e){t.setAttribute("class",Rr((" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Rr(e)+" "," ")))})}function je(t,e){if(e&&t.setAttribute){var n=(" "+(t.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ")
s(e.split(" "),function(t){t=Rr(t),-1===n.indexOf(" "+t+" ")&&(n+=t+" ")}),t.setAttribute("class",Rr(n))}}function Re(t,e){if(e)if(e.nodeType)t[t.length++]=e
else{var n=e.length
if("number"==typeof n&&e.window!==e){if(n)for(var i=0;n>i;i++)t[t.length++]=e[i]}else t[t.length++]=e}}function Fe(t,e){return ze(t,"$"+(e||"ngController")+"Controller")}function ze(t,e,n){t.nodeType==Xr&&(t=t.documentElement)
for(var i=Hr(e)?e:[e];t;){for(var r=0,s=i.length;s>r;r++)if($(n=Cr.data(t,i[r])))return n
t=t.parentNode||t.nodeType===Gr&&t.host}}function We(t){for(Ie(t,!0);t.firstChild;)t.removeChild(t.firstChild)}function qe(t,e){e||Ie(t)
var n=t.parentNode
n&&n.removeChild(t)}function Le(e,n){n=n||t,"complete"===n.document.readyState?n.setTimeout(e):Cr(n).on("load",e)}function Ve(t,e){var n=ds[e.toLowerCase()]
return n&&ps[R(t)]&&n}function Be(t){return fs[t]}function Ue(t,e){var n=function(n,i){n.isDefaultPrevented=function(){return n.defaultPrevented}
var r=e[i||n.type],s=r?r.length:0
if(s){if(y(n.immediatePropagationStopped)){var o=n.stopImmediatePropagation
n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),o&&o.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0},s>1&&(r=W(r))
for(var a=0;s>a;a++)n.isImmediatePropagationStopped()||r[a].call(t,n)}}
return n.elem=t,n}function Ye(){this.$get=function(){return h(Ee,{hasClass:function(t,e){return t.attr&&(t=t[0]),Pe(t,e)},addClass:function(t,e){return t.attr&&(t=t[0]),je(t,e)},removeClass:function(t,e){return t.attr&&(t=t[0]),He(t,e)}})}}function Ke(t,e){var n=t&&t.$$hashKey
if(n)return"function"==typeof n&&(n=t.$$hashKey()),n
var i=typeof t
return n="function"==i||"object"==i&&null!==t?t.$$hashKey=i+":"+(e||l)():i+":"+t}function Xe(t,e){if(e){var n=0
this.nextUid=function(){return++n}}s(t,this.put,this)}function Ge(t){var e=t.toString().replace(ys,""),n=e.match(gs)
return n?"function("+(n[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Je(t,e,n){var i,r,o,a
if("function"==typeof t){if(!(i=t.$inject)){if(i=[],t.length){if(e)throw _(n)&&n||(n=t.name||Ge(t)),$s("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n)
r=t.toString().replace(ys,""),o=r.match(gs),s(o[1].split(vs),function(t){t.replace(bs,function(t,e,n){i.push(n)})})}t.$inject=i}}else Hr(t)?(a=t.length-1,de(t[a],"fn"),i=t.slice(0,a)):de(t,"fn",!0)
return i}function Qe(t,e){function i(t){return function(e,n){return w(e)?void s(e,a(t)):t(e,n)}}function r(t,e){if(pe(t,"service"),(T(e)||Hr(e))&&(e=C.instantiate(e)),!e.$get)throw $s("pget","Provider '{0}' must define $get factory method.",t)
return x[t+g]=e}function o(t,e){return function(){var n=D.invoke(e,this)
if(y(n))throw $s("undef","Provider '{0}' must return a value from $get factory method.",t)
return n}}function l(t,e,n){return r(t,{$get:n!==!1?o(t,e):e})}function u(t,e){return l(t,["$injector",function(t){return t.instantiate(e)}])}function c(t,e){return l(t,v(e),!1)}function h(t,e){pe(t,"constant"),x[t]=e,k[t]=e}function d(t,e){var n=C.get(t+g),i=n.$get
n.$get=function(){var t=D.invoke(i,n)
return D.invoke(e,null,{$delegate:t})}}function p(t){he(y(t)||Hr(t),"modulesToLoad","not an array")
var e,n=[]
return s(t,function(t){function i(t){var e,n
for(e=0,n=t.length;n>e;e++){var i=t[e],r=C.get(i[0])
r[i[1]].apply(r,i[2])}}if(!$.get(t)){$.put(t,!0)
try{_(t)?(e=Tr(t),n=n.concat(p(e.requires)).concat(e._runBlocks),i(e._invokeQueue),i(e._configBlocks)):T(t)?n.push(C.invoke(t)):Hr(t)?n.push(C.invoke(t)):de(t,"module")}catch(r){throw Hr(t)&&(t=t[t.length-1]),r.message&&r.stack&&-1==r.stack.indexOf(r.message)&&(r=r.message+"\n"+r.stack),$s("modulerr","Failed to instantiate module {0} due to:\n{1}",t,r.stack||r.message||r)}}}),n}function f(t,n){function i(e,i){if(t.hasOwnProperty(e)){if(t[e]===m)throw $s("cdep","Circular dependency found: {0}",e+" <- "+b.join(" <- "))
return t[e]}try{return b.unshift(e),t[e]=m,t[e]=n(e,i)}catch(r){throw t[e]===m&&delete t[e],r}finally{b.shift()}}function r(t,n,r,s){"string"==typeof r&&(s=r,r=null)
var o,a,l,u=[],c=Qe.$$annotate(t,e,s)
for(a=0,o=c.length;o>a;a++){if(l=c[a],"string"!=typeof l)throw $s("itkn","Incorrect injection token! Expected service name as string, got {0}",l)
u.push(r&&r.hasOwnProperty(l)?r[l]:i(l,s))}return Hr(t)&&(t=t[o]),t.apply(n,u)}function s(t,e,n){var i=Object.create((Hr(t)?t[t.length-1]:t).prototype||null),s=r(t,i,e,n)
return w(s)||T(s)?s:i}return{invoke:r,instantiate:s,get:i,annotate:Qe.$$annotate,has:function(e){return x.hasOwnProperty(e+g)||t.hasOwnProperty(e)}}}e=e===!0
var m={},g="Provider",b=[],$=new Xe([],!0),x={$provide:{provider:i(r),factory:i(l),service:i(u),value:i(c),constant:i(h),decorator:d}},C=x.$injector=f(x,function(t,e){throw Or.isString(e)&&b.push(e),$s("unpr","Unknown provider: {0}",b.join(" <- "))}),k={},D=k.$injector=f(k,function(t,e){var i=C.get(t+g,e)
return D.invoke(i.$get,i,n,t)})
return s(p(t),function(t){t&&D.invoke(t)}),D}function Ze(){var t=!0
this.disableAutoScrolling=function(){t=!1},this.$get=["$window","$location","$rootScope",function(e,n,i){function r(t){var e=null
return Array.prototype.some.call(t,function(t){return"a"===R(t)?(e=t,!0):void 0}),e}function s(){var t=a.yOffset
if(T(t))t=t()
else if(H(t)){var n=t[0],i=e.getComputedStyle(n)
t="fixed"!==i.position?0:n.getBoundingClientRect().bottom}else C(t)||(t=0)
return t}function o(t){if(t){t.scrollIntoView()
var n=s()
if(n){var i=t.getBoundingClientRect().top
e.scrollBy(0,i-n)}}else e.scrollTo(0,0)}function a(t){t=_(t)?t:n.hash()
var e
t?(e=l.getElementById(t))?o(e):(e=r(l.getElementsByName(t)))?o(e):"top"===t&&o(null):o(null)}var l=e.document
return t&&i.$watch(function(){return n.hash()},function(t,e){(t!==e||""!==t)&&Le(function(){i.$evalAsync(a)})}),a}]}function tn(t,e){return t||e?t?e?(Hr(t)&&(t=t.join(" ")),Hr(e)&&(e=e.join(" ")),t+" "+e):t:e:""}function en(t){for(var e=0;e<t.length;e++){var n=t[e]
if(n.nodeType===xs)return n}}function nn(t){_(t)&&(t=t.split(" "))
var e=ge()
return s(t,function(t){t.length&&(e[t]=!0)}),e}function rn(t){return w(t)?t:{}}function sn(t,e,n,i){function r(t){try{t.apply(null,V(arguments,1))}finally{if(b--,0===b)for(;$.length;)try{$.pop()()}catch(e){n.error(e)}}}function o(t){var e=t.indexOf("#")
return-1===e?"":t.substr(e)}function a(){k=null,u(),c()}function l(){try{return p.state}catch(t){}}function u(){w=l(),w=y(w)?null:w,q(w,E)&&(w=E),E=w}function c(){(_!==h.url()||x!==w)&&(_=h.url(),x=w,s(T,function(t){t(h.url(),w)}))}var h=this,d=(e[0],t.location),p=t.history,f=t.setTimeout,g=t.clearTimeout,v={}
h.isMock=!1
var b=0,$=[]
h.$$completeOutstandingRequest=r,h.$$incOutstandingRequestCount=function(){b++},h.notifyWhenNoOutstandingRequests=function(t){0===b?t():$.push(t)}
var w,x,_=d.href,C=e.find("base"),k=null
u(),x=w,h.url=function(e,n,r){if(y(r)&&(r=null),d!==t.location&&(d=t.location),p!==t.history&&(p=t.history),e){var s=x===r
if(_===e&&(!i.history||s))return h
var a=_&&Hn(_)===Hn(e)
return _=e,x=r,!i.history||a&&s?((!a||k)&&(k=e),n?d.replace(e):a?d.hash=o(e):d.href=e,d.href!==e&&(k=e)):(p[n?"replaceState":"pushState"](r,"",e),u(),x=w),h}return k||d.href.replace(/%27/g,"'")},h.state=function(){return w}
var T=[],D=!1,E=null
h.onUrlChange=function(e){return D||(i.history&&Cr(t).on("popstate",a),Cr(t).on("hashchange",a),D=!0),T.push(e),e},h.$$applicationDestroyed=function(){Cr(t).off("hashchange popstate",a)},h.$$checkUrlChange=c,h.baseHref=function(){var t=C.attr("href")
return t?t.replace(/^(https?\:)?\/\/[^\/]*/,""):""},h.defer=function(t,e){var n
return b++,n=f(function(){delete v[n],r(t)},e||0),v[n]=!0,n},h.defer.cancel=function(t){return v[t]?(delete v[t],g(t),r(m),!0):!1}}function on(){this.$get=["$window","$log","$sniffer","$document",function(t,e,n,i){return new sn(t,i,e,n)}]}function an(){this.$get=function(){function t(t,n){function r(t){t!=d&&(p?p==t&&(p=t.n):p=t,s(t.n,t.p),s(t,d),d=t,d.n=null)}function s(t,e){t!=e&&(t&&(t.p=e),e&&(e.n=t))}if(t in e)throw i("$cacheFactory")("iid","CacheId '{0}' is already taken!",t)
var o=0,a=h({},n,{id:t}),l={},u=n&&n.capacity||Number.MAX_VALUE,c={},d=null,p=null
return e[t]={put:function(t,e){if(!y(e)){if(u<Number.MAX_VALUE){var n=c[t]||(c[t]={key:t})
r(n)}return t in l||o++,l[t]=e,o>u&&this.remove(p.key),e}},get:function(t){if(u<Number.MAX_VALUE){var e=c[t]
if(!e)return
r(e)}return l[t]},remove:function(t){if(u<Number.MAX_VALUE){var e=c[t]
if(!e)return
e==d&&(d=e.p),e==p&&(p=e.n),s(e.n,e.p),delete c[t]}delete l[t],o--},removeAll:function(){l={},o=0,c={},d=p=null},destroy:function(){l=null,a=null,c=null,delete e[t]},info:function(){return h({},a,{size:o})}}}var e={}
return t.info=function(){var t={}
return s(e,function(e,n){t[n]=e.info()}),t},t.get=function(t){return e[t]},t}}function ln(){this.$get=["$cacheFactory",function(t){return t("templates")}]}function un(t,i){function r(t,e,n){var i=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,r={}
return s(t,function(t,s){var o=t.match(i)
if(!o)throw Es("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",e,s,t,n?"controller bindings definition":"isolate scope definition")
r[s]={mode:o[1][0],collection:"*"===o[2],optional:"?"===o[3],attrName:o[4]||s}}),r}function o(t,e){var n={isolateScope:null,bindToController:null}
if(w(t.scope)&&(t.bindToController===!0?(n.bindToController=r(t.scope,e,!0),n.isolateScope={}):n.isolateScope=r(t.scope,e,!1)),w(t.bindToController)&&(n.bindToController=r(t.bindToController,e,!0)),w(n.bindToController)){var i=t.controller,s=t.controllerAs
if(!i)throw Es("noctrl","Cannot bind to controller without directive '{0}'s controller.",e)
if(!pn(i,s))throw Es("noident","Cannot bind to controller without identifier for directive '{0}'.",e)}return n}function l(t){var e=t.charAt(0)
if(!e||e!==br(e))throw Es("baddir","Directive name '{0}' is invalid. The first character must be a lowercase letter",t)
if(t!==t.trim())throw Es("baddir","Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces",t)}var u={},c="Directive",d=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,p=/(([\w\-]+)(?:\:([^;]+))?;?)/,b=j("ngSrc,ngSrcset,src,srcset"),x=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,C=/^(on[a-z]+|formaction)$/
this.directive=function D(e,n){return pe(e,"directive"),_(e)?(l(e),he(n,"directiveFactory"),u.hasOwnProperty(e)||(u[e]=[],t.factory(e+c,["$injector","$exceptionHandler",function(t,n){var i=[]
return s(u[e],function(r,s){try{var a=t.invoke(r)
T(a)?a={compile:v(a)}:!a.compile&&a.link&&(a.compile=v(a.link)),a.priority=a.priority||0,a.index=s,a.name=a.name||e,a.require=a.require||a.controller&&a.name,a.restrict=a.restrict||"EA"
var l=a.$$bindings=o(a,a.name)
w(l.isolateScope)&&(a.$$isolateBindings=l.isolateScope),a.$$moduleName=r.$$moduleName,i.push(a)}catch(u){n(u)}}),i}])),u[e].push(n)):s(e,a(D)),this},this.aHrefSanitizationWhitelist=function(t){return $(t)?(i.aHrefSanitizationWhitelist(t),this):i.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(t){return $(t)?(i.imgSrcSanitizationWhitelist(t),this):i.imgSrcSanitizationWhitelist()}
var k=!0
this.debugInfoEnabled=function(t){return $(t)?(k=t,this):k},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(t,i,r,o,a,l,v,$,D,E,I){function M(t,e){try{t.addClass(e)}catch(n){}}function A(t,e,n,i,r){t instanceof Cr||(t=Cr(t)),s(t,function(e,n){e.nodeType==Yr&&e.nodeValue.match(/\S+/)&&(t[n]=Cr(e).wrap("<span></span>").parent()[0])})
var o=N(t,e,t,n,i,r)
A.$$addScopeClass(t)
var a=null
return function(e,n,i){he(e,"scope"),i=i||{}
var r=i.parentBoundTranscludeFn,s=i.transcludeControllers,l=i.futureParentElement
r&&r.$$boundTransclude&&(r=r.$$boundTransclude),a||(a=O(l))
var u
if(u="html"!==a?Cr(Z(a,Cr("<div>").append(t).html())):n?hs.clone.call(t):t,s)for(var c in s)u.data("$"+c+"Controller",s[c].instance)
return A.$$addScopeInfo(u,e),n&&n(u,e),o&&o(e,u,u,r),u}}function O(t){var e=t&&t[0]
return e&&"foreignobject"!==R(e)&&e.toString().match(/SVG/)?"svg":"html"}function N(t,e,i,r,s,o){function a(t,i,r,s){var o,a,l,u,c,h,d,p,g
if(f){var v=i.length
for(g=new Array(v),c=0;c<m.length;c+=3)d=m[c],g[d]=i[d]}else g=i
for(c=0,h=m.length;h>c;)if(l=g[m[c++]],o=m[c++],a=m[c++],o){if(o.scope){u=t.$new(),A.$$addScopeInfo(Cr(l),u)
var b=o.$$destroyBindings
b&&(o.$$destroyBindings=null,u.$on("$destroyed",b))}else u=t
p=o.transcludeOnThisElement?P(t,o.transclude,s):!o.templateOnThisElement&&s?s:!s&&e?P(t,e):null,o(a,u,l,r,p,o)}else a&&a(t,l.childNodes,n,s)}for(var l,u,c,h,d,p,f,m=[],g=0;g<t.length;g++)l=new oe,u=H(t[g],[],l,0===g?r:n,s),c=u.length?W(u,t[g],l,e,i,null,[],[],o):null,c&&c.scope&&A.$$addScopeClass(l.$$element),d=c&&c.terminal||!(h=t[g].childNodes)||!h.length?null:N(h,c?(c.transcludeOnThisElement||!c.templateOnThisElement)&&c.transclude:e),(c||d)&&(m.push(g,c,d),p=!0,f=f||c),o=null
return p?a:null}function P(t,e,n){var i=function(i,r,s,o,a){return i||(i=t.$new(!1,a),i.$$transcluded=!0),e(i,r,{parentBoundTranscludeFn:n,transcludeControllers:s,futureParentElement:o})}
return i}function H(t,e,n,i,r){var s,o,a=t.nodeType,l=n.$attr
switch(a){case Br:B(e,cn(R(t)),"E",i,r)
for(var u,c,h,f,m,g,v=t.attributes,b=0,y=v&&v.length;y>b;b++){var $=!1,x=!1
u=v[b],c=u.name,m=Rr(u.value),f=cn(c),(g=de.test(f))&&(c=c.replace(Ss,"").substr(8).replace(/_(.)/g,function(t,e){return e.toUpperCase()}))
var C=f.replace(/(Start|End)$/,"")
U(C)&&f===C+"Start"&&($=c,x=c.substr(0,c.length-5)+"end",c=c.substr(0,c.length-6)),h=cn(c.toLowerCase()),l[h]=c,(g||!n.hasOwnProperty(h))&&(n[h]=m,Ve(t,h)&&(n[h]=!0)),ee(t,e,m,h,g),B(e,h,"A",i,r,$,x)}if(o=t.className,w(o)&&(o=o.animVal),_(o)&&""!==o)for(;s=p.exec(o);)h=cn(s[2]),B(e,h,"C",i,r)&&(n[h]=Rr(s[3])),o=o.substr(s.index+s[0].length)
break
case Yr:if(11===_r)for(;t.parentNode&&t.nextSibling&&t.nextSibling.nodeType===Yr;)t.nodeValue=t.nodeValue+t.nextSibling.nodeValue,t.parentNode.removeChild(t.nextSibling)
J(e,t.nodeValue)
break
case Kr:try{s=d.exec(t.nodeValue),s&&(h=cn(s[1]),B(e,h,"M",i,r)&&(n[h]=Rr(s[2])))}catch(k){}}return e.sort(X),e}function j(t,e,n){var i=[],r=0
if(e&&t.hasAttribute&&t.hasAttribute(e)){do{if(!t)throw Es("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",e,n)
t.nodeType==Br&&(t.hasAttribute(e)&&r++,t.hasAttribute(n)&&r--),i.push(t),t=t.nextSibling}while(r>0)}else i.push(t)
return Cr(i)}function z(t,e,n){return function(i,r,s,o,a){return r=j(r[0],e,n),t(i,r,s,o,a)}}function W(t,i,s,o,a,u,c,h,d){function p(t,e,n,i){t&&(n&&(t=z(t,n,i)),t.require=v.require,t.directiveName=b,(I===v||v.$$isolateScope)&&(t=ie(t,{isolateScope:!0})),c.push(t)),e&&(n&&(e=z(e,n,i)),e.require=v.require,e.directiveName=b,(I===v||v.$$isolateScope)&&(e=ie(e,{isolateScope:!0})),h.push(e))}function f(t,e,n,i){var r
if(_(e)){var s=e.match(x),o=e.substring(s[0].length),a=s[1]||s[3],l="?"===s[2]
if("^^"===a?n=n.parent():(r=i&&i[o],r=r&&r.instance),!r){var u="$"+o+"Controller"
r=a?n.inheritedData(u):n.data(u)}if(!r&&!l)throw Es("ctreq","Controller '{0}', required by directive '{1}', can't be found!",o,t)}else if(Hr(e)){r=[]
for(var c=0,h=e.length;h>c;c++)r[c]=f(t,e[c],n,i)}return r||null}function m(t,e,n,i,r,s){var o=ge()
for(var a in i){var u=i[a],c={$scope:u===I||u.$$isolateScope?r:s,$element:t,$attrs:e,$transclude:n},h=u.controller
"@"==h&&(h=e[u.name])
var d=l(h,c,!0,u.controllerAs)
o[u.name]=d,R||t.data("$"+u.name+"Controller",d.instance)}return o}function g(t,e,r,o,a,l){function u(t,e,i){var r
return S(t)||(i=e,e=t,t=n),R&&(r=y),i||(i=R?w.parent():w),a(t,e,r,i,O)}var d,p,g,v,b,y,$,w,x
if(i===r?(x=s,w=s.$$element):(w=Cr(r),x=new oe(w,s)),I&&(b=e.$new(!0)),a&&($=u,$.$$boundTransclude=a),E&&(y=m(w,x,$,E,b,e)),I&&(A.$$addScopeInfo(w,b,!0,!(M&&(M===I||M===I.$$originalDirective))),A.$$addScopeClass(w,!0),b.$$isolateBindings=I.$$isolateBindings,se(e,x,b,b.$$isolateBindings,I,b)),y){var _,C,k=I||D
k&&y[k.name]&&(_=k.$$bindings.bindToController,v=y[k.name],v&&v.identifier&&_&&(C=v,l.$$destroyBindings=se(e,x,v.instance,_,k)))
for(d in y){v=y[d]
var T=v()
T!==v.instance&&(v.instance=T,w.data("$"+d+"Controller",T),v===C&&(l.$$destroyBindings(),l.$$destroyBindings=se(e,x,T,_,k)))}}for(d=0,p=c.length;p>d;d++)g=c[d],re(g,g.isolateScope?b:e,w,x,g.require&&f(g.directiveName,g.require,w,y),$)
var O=e
for(I&&(I.template||null===I.templateUrl)&&(O=b),t&&t(O,r.childNodes,n,a),d=h.length-1;d>=0;d--)g=h[d],re(g,g.isolateScope?b:e,w,x,g.require&&f(g.directiveName,g.require,w,y),$)}d=d||{}
for(var v,b,y,$,C,k=-Number.MAX_VALUE,D=d.newScopeDirective,E=d.controllerDirectives,I=d.newIsolateScopeDirective,M=d.templateDirective,O=d.nonTlbTranscludeDirective,N=!1,P=!1,R=d.hasElementTranscludeDirective,F=s.$$element=Cr(i),W=u,q=o,B=0,U=t.length;U>B;B++){v=t[B]
var X=v.$$start,J=v.$$end
if(X&&(F=j(i,X,J)),y=n,k>v.priority)break
if((C=v.scope)&&(v.templateUrl||(w(C)?(G("new/isolated scope",I||D,v,F),I=v):G("new/isolated scope",I,v,F)),D=D||v),b=v.name,!v.templateUrl&&v.controller&&(C=v.controller,E=E||ge(),G("'"+b+"' controller",E[b],v,F),E[b]=v),(C=v.transclude)&&(N=!0,v.$$tlb||(G("transclusion",O,v,F),O=v),"element"==C?(R=!0,k=v.priority,y=F,F=s.$$element=Cr(e.createComment(" "+b+": "+s[b]+" ")),i=F[0],ne(a,V(y),i),q=A(y,o,k,W&&W.name,{nonTlbTranscludeDirective:O})):(y=Cr(Se(i)).contents(),F.empty(),q=A(y,o))),v.template)if(P=!0,G("template",M,v,F),M=v,C=T(v.template)?v.template(F,s):v.template,C=ce(C),v.replace){if(W=v,y=_e(C)?[]:dn(Z(v.templateNamespace,Rr(C))),i=y[0],1!=y.length||i.nodeType!==Br)throw Es("tplrt","Template for directive '{0}' must have exactly one root element. {1}",b,"")
ne(a,F,i)
var te={$attr:{}},ee=H(i,[],te),ae=t.splice(B+1,t.length-(B+1))
I&&L(ee),t=t.concat(ee).concat(ae),Y(s,te),U=t.length}else F.html(C)
if(v.templateUrl)P=!0,G("template",M,v,F),M=v,v.replace&&(W=v),g=K(t.splice(B,t.length-B),F,s,a,N&&q,c,h,{controllerDirectives:E,newScopeDirective:D!==v&&D,newIsolateScopeDirective:I,templateDirective:M,nonTlbTranscludeDirective:O}),U=t.length
else if(v.compile)try{$=v.compile(F,s,q),T($)?p(null,$,X,J):$&&p($.pre,$.post,X,J)}catch(le){r(le,Q(F))}v.terminal&&(g.terminal=!0,k=Math.max(k,v.priority))}return g.scope=D&&D.scope===!0,g.transcludeOnThisElement=N,g.templateOnThisElement=P,g.transclude=q,d.hasElementTranscludeDirective=R,g}function L(t){for(var e=0,n=t.length;n>e;e++)t[e]=f(t[e],{$$isolateScope:!0})}function B(e,n,i,s,o,a,l){if(n===o)return null
var h=null
if(u.hasOwnProperty(n))for(var d,p=t.get(n+c),m=0,g=p.length;g>m;m++)try{d=p[m],(y(s)||s>d.priority)&&-1!=d.restrict.indexOf(i)&&(a&&(d=f(d,{$$start:a,$$end:l})),e.push(d),h=d)}catch(v){r(v)}return h}function U(e){if(u.hasOwnProperty(e))for(var n,i=t.get(e+c),r=0,s=i.length;s>r;r++)if(n=i[r],n.multiElement)return!0
return!1}function Y(t,e){var n=e.$attr,i=t.$attr,r=t.$$element
s(t,function(i,r){"$"!=r.charAt(0)&&(e[r]&&e[r]!==i&&(i+=("style"===r?";":" ")+e[r]),t.$set(r,i,!0,n[r]))}),s(e,function(e,s){"class"==s?(M(r,e),t["class"]=(t["class"]?t["class"]+" ":"")+e):"style"==s?(r.attr("style",r.attr("style")+";"+e),t.style=(t.style?t.style+";":"")+e):"$"==s.charAt(0)||t.hasOwnProperty(s)||(t[s]=e,i[s]=n[s])})}function K(t,e,n,i,r,a,l,u){var c,h,d=[],p=e[0],m=t.shift(),g=f(m,{templateUrl:null,transclude:null,replace:null,$$originalDirective:m}),v=T(m.templateUrl)?m.templateUrl(e,n):m.templateUrl,b=m.templateNamespace
return e.empty(),o(v).then(function(o){var f,y,$,x
if(o=ce(o),m.replace){if($=_e(o)?[]:dn(Z(b,Rr(o))),f=$[0],1!=$.length||f.nodeType!==Br)throw Es("tplrt","Template for directive '{0}' must have exactly one root element. {1}",m.name,v)
y={$attr:{}},ne(i,e,f)
var _=H(f,[],y)
w(m.scope)&&L(_),t=_.concat(t),Y(n,y)}else f=p,e.html(o)
for(t.unshift(g),c=W(t,f,n,r,e,m,a,l,u),s(i,function(t,n){t==f&&(i[n]=e[0])}),h=N(e[0].childNodes,r);d.length;){var C=d.shift(),k=d.shift(),T=d.shift(),D=d.shift(),E=e[0]
if(!C.$$destroyed){if(k!==p){var S=k.className
u.hasElementTranscludeDirective&&m.replace||(E=Se(f)),ne(T,Cr(k),E),M(Cr(E),S)}x=c.transcludeOnThisElement?P(C,c.transclude,D):D,c(h,C,E,i,x,c)}}d=null}),function(t,e,n,i,r){var s=r
e.$$destroyed||(d?d.push(e,n,i,s):(c.transcludeOnThisElement&&(s=P(e,c.transclude,r)),c(h,e,n,i,s,c)))}}function X(t,e){var n=e.priority-t.priority
return 0!==n?n:t.name!==e.name?t.name<e.name?-1:1:t.index-e.index}function G(t,e,n,i){function r(t){return t?" (module: "+t+")":""}if(e)throw Es("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",e.name,r(e.$$moduleName),n.name,r(n.$$moduleName),t,Q(i))}function J(t,e){var n=i(e,!0)
n&&t.push({priority:0,compile:function(t){var e=t.parent(),i=!!e.length
return i&&A.$$addBindingClass(e),function(t,e){var r=e.parent()
i||A.$$addBindingClass(r),A.$$addBindingInfo(r,n.expressions),t.$watch(n,function(t){e[0].nodeValue=t})}}})}function Z(t,n){switch(t=br(t||"html")){case"svg":case"math":var i=e.createElement("div")
return i.innerHTML="<"+t+">"+n+"</"+t+">",i.childNodes[0].childNodes
default:return n}}function te(t,e){if("srcdoc"==e)return D.HTML
var n=R(t)
return"xlinkHref"==e||"form"==n&&"action"==e||"img"!=n&&("src"==e||"ngSrc"==e)?D.RESOURCE_URL:void 0}function ee(t,e,n,r,s){var o=te(t,r)
s=b[r]||s
var a=i(n,!0,o,s)
if(a){if("multiple"===r&&"select"===R(t))throw Es("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",Q(t))
e.push({priority:100,compile:function(){return{pre:function(t,e,l){var u=l.$$observers||(l.$$observers={})
if(C.test(r))throw Es("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.")
var c=l[r]
c!==n&&(a=c&&i(c,!0,o,s),n=c),a&&(l[r]=a(t),(u[r]||(u[r]=[])).$$inter=!0,(l.$$observers&&l.$$observers[r].$$scope||t).$watch(a,function(t,e){"class"===r&&t!=e?l.$updateClass(t,e):l.$set(r,t)}))}}}})}}function ne(t,n,i){var r,s,o=n[0],a=n.length,l=o.parentNode
if(t)for(r=0,s=t.length;s>r;r++)if(t[r]==o){t[r++]=i
for(var u=r,c=u+a-1,h=t.length;h>u;u++,c++)h>c?t[u]=t[c]:delete t[u]
t.length-=a-1,t.context===o&&(t.context=i)
break}l&&l.replaceChild(i,o)
var d=e.createDocumentFragment()
d.appendChild(o),Cr.hasData(o)&&(Cr(i).data(Cr(o).data()),kr?(Pr=!0,kr.cleanData([o])):delete Cr.cache[o[Cr.expando]])
for(var p=1,f=n.length;f>p;p++){var m=n[p]
Cr(m).remove(),d.appendChild(m),delete n[p]}n[0]=i,n.length=1}function ie(t,e){return h(function(){return t.apply(null,arguments)},t,e)}function re(t,e,n,i,s,o){try{t(e,n,i,s,o)}catch(a){r(a,Q(n))}}function se(t,e,n,r,o,l){var u
s(r,function(r,s){var l,c,h,d,p=r.attrName,f=r.optional,g=r.mode
switch(g){case"@":f||yr.call(e,p)||(n[s]=e[p]=void 0),e.$observe(p,function(t){_(t)&&(n[s]=t)}),e.$$observers[p].$$scope=t,_(e[p])&&(n[s]=i(e[p])(t))
break
case"=":if(!yr.call(e,p)){if(f)break
e[p]=void 0}if(f&&!e[p])break
c=a(e[p]),d=c.literal?q:function(t,e){return t===e||t!==t&&e!==e},h=c.assign||function(){throw l=n[s]=c(t),Es("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",e[p],o.name)},l=n[s]=c(t)
var v=function(e){return d(e,n[s])||(d(e,l)?h(t,e=n[s]):n[s]=e),l=e}
v.$stateful=!0
var b
b=r.collection?t.$watchCollection(e[p],v):t.$watch(a(e[p],v),null,c.literal),u=u||[],u.push(b)
break
case"&":if(c=e.hasOwnProperty(p)?a(e[p]):m,c===m&&f)break
n[s]=function(e){return c(t,e)}}})
var c=u?function(){for(var t=0,e=u.length;e>t;++t)u[t]()}:m
return l&&c!==m?(l.$on("$destroy",c),m):c}var oe=function(t,e){if(e){var n,i,r,s=Object.keys(e)
for(n=0,i=s.length;i>n;n++)r=s[n],this[r]=e[r]}else this.$attr={}
this.$$element=t}
oe.prototype={$normalize:cn,$addClass:function(t){t&&t.length>0&&E.addClass(this.$$element,t)},$removeClass:function(t){t&&t.length>0&&E.removeClass(this.$$element,t)},$updateClass:function(t,e){var n=hn(t,e)
n&&n.length&&E.addClass(this.$$element,n)
var i=hn(e,t)
i&&i.length&&E.removeClass(this.$$element,i)},$set:function(t,e,n,i){var o,a=this.$$element[0],l=Ve(a,t),u=Be(t),c=t
if(l?(this.$$element.prop(t,e),i=l):u&&(this[u]=e,c=u),this[t]=e,i?this.$attr[t]=i:(i=this.$attr[t],i||(this.$attr[t]=i=ue(t,"-"))),o=R(this.$$element),"a"===o&&"href"===t||"img"===o&&"src"===t)this[t]=e=I(e,"src"===t)
else if("img"===o&&"srcset"===t){for(var h="",d=Rr(e),p=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,f=/\s/.test(d)?p:/(,)/,m=d.split(f),g=Math.floor(m.length/2),v=0;g>v;v++){var b=2*v
h+=I(Rr(m[b]),!0),h+=" "+Rr(m[b+1])}var $=Rr(m[2*v]).split(/\s/)
h+=I(Rr($[0]),!0),2===$.length&&(h+=" "+Rr($[1])),this[t]=e=h}n!==!1&&(null===e||y(e)?this.$$element.removeAttr(i):this.$$element.attr(i,e))
var w=this.$$observers
w&&s(w[c],function(t){try{t(e)}catch(n){r(n)}})},$observe:function(t,e){var n=this,i=n.$$observers||(n.$$observers=ge()),r=i[t]||(i[t]=[])
return r.push(e),v.$evalAsync(function(){r.$$inter||!n.hasOwnProperty(t)||y(n[t])||e(n[t])}),function(){F(r,e)}}}
var ae=i.startSymbol(),le=i.endSymbol(),ce="{{"==ae||"}}"==le?g:function(t){return t.replace(/\{\{/g,ae).replace(/}}/g,le)},de=/^ngAttr[A-Z]/
return A.$$addBindingInfo=k?function(t,e){var n=t.data("$binding")||[]
Hr(e)?n=n.concat(e):n.push(e),t.data("$binding",n)}:m,A.$$addBindingClass=k?function(t){M(t,"ng-binding")}:m,A.$$addScopeInfo=k?function(t,e,n,i){var r=n?i?"$isolateScopeNoTemplate":"$isolateScope":"$scope"
t.data(r,e)}:m,A.$$addScopeClass=k?function(t,e){M(t,e?"ng-isolate-scope":"ng-scope")}:m,A}]}function cn(t){return xe(t.replace(Ss,""))}function hn(t,e){var n="",i=t.split(/\s+/),r=e.split(/\s+/)
t:for(var s=0;s<i.length;s++){for(var o=i[s],a=0;a<r.length;a++)if(o==r[a])continue t
n+=(n.length>0?" ":"")+o}return n}function dn(t){t=Cr(t)
var e=t.length
if(1>=e)return t
for(;e--;){var n=t[e]
n.nodeType===Kr&&Er.call(t,e,1)}return t}function pn(t,e){if(e&&_(e))return e
if(_(t)){var n=Ms.exec(t)
if(n)return n[3]}}function fn(){var t={},e=!1
this.register=function(e,n){pe(e,"controller"),w(e)?h(t,e):t[e]=n},this.allowGlobals=function(){e=!0},this.$get=["$injector","$window",function(r,s){function o(t,e,n,r){if(!t||!w(t.$scope))throw i("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",r,e)
t.$scope[e]=n}return function(i,a,l,u){var c,d,p,f
if(l=l===!0,u&&_(u)&&(f=u),_(i)){if(d=i.match(Ms),!d)throw Is("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",i)
p=d[1],f=f||d[3],i=t.hasOwnProperty(p)?t[p]:fe(a.$scope,p,!0)||(e?fe(s,p,!0):n),de(i,p,!0)}if(l){var m=(Hr(i)?i[i.length-1]:i).prototype
c=Object.create(m||null),f&&o(a,f,c,p||i.name)
var g
return g=h(function(){var t=r.invoke(i,c,a,p)
return t!==c&&(w(t)||T(t))&&(c=t,f&&o(a,f,c,p||i.name)),c},{instance:c,identifier:f})}return c=r.instantiate(i,a,p),f&&o(a,f,c,p||i.name),c}}]}function mn(){this.$get=["$window",function(t){return Cr(t.document)}]}function gn(){this.$get=["$log",function(t){return function(){t.error.apply(t,arguments)}}]}function vn(t){return w(t)?k(t)?t.toISOString():Y(t):t}function bn(){this.$get=function(){return function(t){if(!t)return""
var e=[]
return o(t,function(t,n){null===t||y(t)||(Hr(t)?s(t,function(t){e.push(ie(n)+"="+ie(vn(t)))}):e.push(ie(n)+"="+ie(vn(t))))}),e.join("&")}}}function yn(){this.$get=function(){return function(t){function e(t,i,r){null===t||y(t)||(Hr(t)?s(t,function(t,n){e(t,i+"["+(w(t)?n:"")+"]")}):w(t)&&!k(t)?o(t,function(t,n){e(t,i+(r?"":"[")+n+(r?"":"]"))}):n.push(ie(i)+"="+ie(vn(t))))}if(!t)return""
var n=[]
return e(t,"",!0),n.join("&")}}}function $n(t,e){if(_(t)){var n=t.replace(js,"").trim()
if(n){var i=e("Content-Type");(i&&0===i.indexOf(Os)||wn(n))&&(t=K(n))}}return t}function wn(t){var e=t.match(Ps)
return e&&Hs[e[0]].test(t)}function xn(t){function e(t,e){t&&(i[t]=i[t]?i[t]+", "+e:e)}var n,i=ge()
return _(t)?s(t.split("\n"),function(t){n=t.indexOf(":"),e(br(Rr(t.substr(0,n))),Rr(t.substr(n+1)))}):w(t)&&s(t,function(t,n){e(br(n),Rr(t))}),i}function _n(t){var e
return function(n){if(e||(e=xn(t)),n){var i=e[br(n)]
return void 0===i&&(i=null),i}return e}}function Cn(t,e,n,i){return T(i)?i(t,e,n):(s(i,function(i){t=i(t,e,n)}),t)}function kn(t){return t>=200&&300>t}function Tn(){var t=this.defaults={transformResponse:[$n],transformRequest:[function(t){return!w(t)||I(t)||A(t)||M(t)?t:Y(t)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:W(Ns),put:W(Ns),patch:W(Ns)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},e=!1
this.useApplyAsync=function(t){return $(t)?(e=!!t,this):e}
var r=!0
this.useLegacyPromiseExtensions=function(t){return $(t)?(r=!!t,this):r}
var o=this.interceptors=[]
this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(a,l,u,c,d,p){function f(e){function o(t){var e=h({},t)
return e.data=t.data?Cn(t.data,t.headers,t.status,u.transformResponse):t.data,kn(t.status)?e:d.reject(e)}function a(t,e){var n,i={}
return s(t,function(t,r){T(t)?(n=t(e),null!=n&&(i[r]=n)):i[r]=t}),i}function l(e){var n,i,r,s=t.headers,o=h({},e.headers)
s=h({},s.common,s[br(e.method)])
t:for(n in s){i=br(n)
for(r in o)if(br(r)===i)continue t
o[n]=s[n]}return a(o,W(e))}if(!Or.isObject(e))throw i("$http")("badreq","Http request configuration must be an object.  Received: {0}",e)
var u=h({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse,paramSerializer:t.paramSerializer},e)
u.headers=l(e),u.method=$r(u.method),u.paramSerializer=_(u.paramSerializer)?p.get(u.paramSerializer):u.paramSerializer
var c=function(e){var i=e.headers,r=Cn(e.data,_n(i),n,e.transformRequest)
return y(r)&&s(i,function(t,e){"content-type"===br(e)&&delete i[e]}),y(e.withCredentials)&&!y(t.withCredentials)&&(e.withCredentials=t.withCredentials),v(e,r).then(o,o)},f=[c,n],m=d.when(u)
for(s(C,function(t){(t.request||t.requestError)&&f.unshift(t.request,t.requestError),(t.response||t.responseError)&&f.push(t.response,t.responseError)});f.length;){var g=f.shift(),b=f.shift()
m=m.then(g,b)}return r?(m.success=function(t){return de(t,"fn"),m.then(function(e){t(e.data,e.status,e.headers,u)}),m},m.error=function(t){return de(t,"fn"),m.then(null,function(e){t(e.data,e.status,e.headers,u)}),m}):(m.success=Fs("success"),m.error=Fs("error")),m}function m(){s(arguments,function(t){f[t]=function(e,n){return f(h({},n||{},{method:t,url:e}))}})}function g(){s(arguments,function(t){f[t]=function(e,n,i){return f(h({},i||{},{method:t,url:e,data:n}))}})}function v(i,r){function s(t,n,i,r){function s(){o(n,t,i,r)}p&&(kn(t)?p.put(C,[t,n,xn(i),r]):p.remove(C)),e?c.$applyAsync(s):(s(),c.$$phase||c.$apply())}function o(t,e,n,r){e=e>=-1?e:0,(kn(e)?g.resolve:g.reject)({data:t,status:e,headers:_n(n),config:i,statusText:r})}function u(t){o(t.data,t.status,W(t.headers()),t.statusText)}function h(){var t=f.pendingRequests.indexOf(i);-1!==t&&f.pendingRequests.splice(t,1)}var p,m,g=d.defer(),v=g.promise,_=i.headers,C=b(i.url,i.paramSerializer(i.params))
if(f.pendingRequests.push(i),v.then(h,h),!i.cache&&!t.cache||i.cache===!1||"GET"!==i.method&&"JSONP"!==i.method||(p=w(i.cache)?i.cache:w(t.cache)?t.cache:x),p&&(m=p.get(C),$(m)?N(m)?m.then(u,u):Hr(m)?o(m[1],m[0],W(m[2]),m[3]):o(m,200,{},"OK"):p.put(C,v)),y(m)){var k=ki(i.url)?l()[i.xsrfCookieName||t.xsrfCookieName]:n
k&&(_[i.xsrfHeaderName||t.xsrfHeaderName]=k),a(i.method,C,r,s,_,i.timeout,i.withCredentials,i.responseType)}return v}function b(t,e){return e.length>0&&(t+=(-1==t.indexOf("?")?"?":"&")+e),t}var x=u("$http")
t.paramSerializer=_(t.paramSerializer)?p.get(t.paramSerializer):t.paramSerializer
var C=[]
return s(o,function(t){C.unshift(_(t)?p.get(t):p.invoke(t))}),f.pendingRequests=[],m("get","delete","head","jsonp"),g("post","put","patch"),f.defaults=t,f}]}function Dn(){return new t.XMLHttpRequest}function En(){this.$get=["$browser","$window","$document",function(t,e,n){return Sn(t,Dn,t.defer,e.angular.callbacks,n[0])}]}function Sn(t,e,n,i,r){function o(t,e,n){var s=r.createElement("script"),o=null
return s.type="text/javascript",s.src=t,s.async=!0,o=function(t){es(s,"load",o),es(s,"error",o),r.body.removeChild(s),s=null
var a=-1,l="unknown"
t&&("load"!==t.type||i[e].called||(t={type:"error"}),l=t.type,a="error"===t.type?404:200),n&&n(a,l)},ts(s,"load",o),ts(s,"error",o),r.body.appendChild(s),o}return function(r,a,l,u,c,h,d,p){function f(){b&&b(),w&&w.abort()}function g(e,i,r,s,o){$(C)&&n.cancel(C),b=w=null,e(i,r,s,o),t.$$completeOutstandingRequest(m)}if(t.$$incOutstandingRequestCount(),a=a||t.url(),"jsonp"==br(r)){var v="_"+(i.counter++).toString(36)
i[v]=function(t){i[v].data=t,i[v].called=!0}
var b=o(a.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(t,e){g(u,t,i[v].data,"",e),i[v]=m})}else{var w=e()
w.open(r,a,!0),s(c,function(t,e){$(t)&&w.setRequestHeader(e,t)}),w.onload=function(){var t=w.statusText||"",e="response"in w?w.response:w.responseText,n=1223===w.status?204:w.status
0===n&&(n=e?200:"file"==Ci(a).protocol?404:0),g(u,n,e,w.getAllResponseHeaders(),t)}
var x=function(){g(u,-1,null,null,"")}
if(w.onerror=x,w.onabort=x,d&&(w.withCredentials=!0),p)try{w.responseType=p}catch(_){if("json"!==p)throw _}w.send(y(l)?null:l)}if(h>0)var C=n(f,h)
else N(h)&&h.then(f)}}function In(){var t="{{",e="}}"
this.startSymbol=function(e){return e?(t=e,this):t},this.endSymbol=function(t){return t?(e=t,this):e},this.$get=["$parse","$exceptionHandler","$sce",function(n,i,r){function s(t){return"\\\\\\"+t}function o(n){return n.replace(d,t).replace(p,e)}function a(t){if(null==t)return""
switch(typeof t){case"string":break
case"number":t=""+t
break
default:t=Y(t)}return t}function l(s,l,d,p){function f(t){try{return t=E(t),p&&!$(t)?t:a(t)}catch(e){i(zs.interr(s,e))}}p=!!p
for(var m,g,v,b=0,w=[],x=[],_=s.length,C=[],k=[];_>b;){if(-1==(m=s.indexOf(t,b))||-1==(g=s.indexOf(e,m+u))){b!==_&&C.push(o(s.substring(b)))
break}b!==m&&C.push(o(s.substring(b,m))),v=s.substring(m+u,g),w.push(v),x.push(n(v,f)),b=g+c,k.push(C.length),C.push("")}if(d&&C.length>1&&zs.throwNoconcat(s),!l||w.length){var D=function(t){for(var e=0,n=w.length;n>e;e++){if(p&&y(t[e]))return
C[k[e]]=t[e]}return C.join("")},E=function(t){return d?r.getTrusted(d,t):r.valueOf(t)}
return h(function(t){var e=0,n=w.length,r=new Array(n)
try{for(;n>e;e++)r[e]=x[e](t)
return D(r)}catch(o){i(zs.interr(s,o))}},{exp:s,expressions:w,$$watchDelegate:function(t,e){var n
return t.$watchGroup(x,function(i,r){var s=D(i)
T(e)&&e.call(this,s,i!==r?n:s,t),n=s})}})}}var u=t.length,c=e.length,d=new RegExp(t.replace(/./g,s),"g"),p=new RegExp(e.replace(/./g,s),"g")
return l.startSymbol=function(){return t},l.endSymbol=function(){return e},l}]}function Mn(){this.$get=["$rootScope","$window","$q","$$q",function(t,e,n,i){function r(r,o,a,l){var u=arguments.length>4,c=u?V(arguments,4):[],h=e.setInterval,d=e.clearInterval,p=0,f=$(l)&&!l,m=(f?i:n).defer(),g=m.promise
return a=$(a)?a:0,g.then(null,null,u?function(){r.apply(null,c)}:r),g.$$intervalId=h(function(){m.notify(p++),a>0&&p>=a&&(m.resolve(p),d(g.$$intervalId),delete s[g.$$intervalId]),f||t.$apply()},o),s[g.$$intervalId]=m,g}var s={}
return r.cancel=function(t){return t&&t.$$intervalId in s?(s[t.$$intervalId].reject("canceled"),e.clearInterval(t.$$intervalId),delete s[t.$$intervalId],!0):!1},r}]}function An(t){for(var e=t.split("/"),n=e.length;n--;)e[n]=ne(e[n])
return e.join("/")}function On(t,e){var n=Ci(t)
e.$$protocol=n.protocol,e.$$host=n.hostname,e.$$port=p(n.port)||qs[n.protocol]||null}function Nn(t,e){var n="/"!==t.charAt(0)
n&&(t="/"+t)
var i=Ci(t)
e.$$path=decodeURIComponent(n&&"/"===i.pathname.charAt(0)?i.pathname.substring(1):i.pathname),e.$$search=te(i.search),e.$$hash=decodeURIComponent(i.hash),e.$$path&&"/"!=e.$$path.charAt(0)&&(e.$$path="/"+e.$$path)}function Pn(t,e){return 0===e.indexOf(t)?e.substr(t.length):void 0}function Hn(t){var e=t.indexOf("#")
return-1==e?t:t.substr(0,e)}function jn(t){return t.replace(/(#.+)|#$/,"$1")}function Rn(t){return t.substr(0,Hn(t).lastIndexOf("/")+1)}function Fn(t){return t.substring(0,t.indexOf("/",t.indexOf("//")+2))}function zn(t,e,n){this.$$html5=!0,n=n||"",On(t,this),this.$$parse=function(t){var n=Pn(e,t)
if(!_(n))throw Ls("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',t,e)
Nn(n,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var t=ee(this.$$search),n=this.$$hash?"#"+ne(this.$$hash):""
this.$$url=An(this.$$path)+(t?"?"+t:"")+n,this.$$absUrl=e+this.$$url.substr(1)},this.$$parseLinkUrl=function(i,r){if(r&&"#"===r[0])return this.hash(r.slice(1)),!0
var s,o,a
return $(s=Pn(t,i))?(o=s,a=$(s=Pn(n,s))?e+(Pn("/",s)||s):t+o):$(s=Pn(e,i))?a=e+s:e==i+"/"&&(a=e),a&&this.$$parse(a),!!a}}function Wn(t,e,n){On(t,this),this.$$parse=function(i){function r(t,e,n){var i,r=/^\/[A-Z]:(\/.*)/
return 0===e.indexOf(n)&&(e=e.replace(n,"")),r.exec(e)?t:(i=r.exec(t),i?i[1]:t)}var s,o=Pn(t,i)||Pn(e,i)
y(o)||"#"!==o.charAt(0)?this.$$html5?s=o:(s="",y(o)&&(t=i,this.replace())):(s=Pn(n,o),y(s)&&(s=o)),Nn(s,this),this.$$path=r(this.$$path,s,t),this.$$compose()},this.$$compose=function(){var e=ee(this.$$search),i=this.$$hash?"#"+ne(this.$$hash):""
this.$$url=An(this.$$path)+(e?"?"+e:"")+i,this.$$absUrl=t+(this.$$url?n+this.$$url:"")},this.$$parseLinkUrl=function(e){return Hn(t)==Hn(e)?(this.$$parse(e),!0):!1}}function qn(t,e,n){this.$$html5=!0,Wn.apply(this,arguments),this.$$parseLinkUrl=function(i,r){if(r&&"#"===r[0])return this.hash(r.slice(1)),!0
var s,o
return t==Hn(i)?s=i:(o=Pn(e,i))?s=t+n+o:e===i+"/"&&(s=e),s&&this.$$parse(s),!!s},this.$$compose=function(){var e=ee(this.$$search),i=this.$$hash?"#"+ne(this.$$hash):""
this.$$url=An(this.$$path)+(e?"?"+e:"")+i,this.$$absUrl=t+n+this.$$url}}function Ln(t){return function(){return this[t]}}function Vn(t,e){return function(n){return y(n)?this[t]:(this[t]=e(n),this.$$compose(),this)}}function Bn(){var t="",e={enabled:!1,requireBase:!0,rewriteLinks:!0}
this.hashPrefix=function(e){return $(e)?(t=e,this):t},this.html5Mode=function(t){return O(t)?(e.enabled=t,this):w(t)?(O(t.enabled)&&(e.enabled=t.enabled),O(t.requireBase)&&(e.requireBase=t.requireBase),O(t.rewriteLinks)&&(e.rewriteLinks=t.rewriteLinks),this):e},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,i,r,s,o){function a(t,e,n){var r=u.url(),s=u.$$state
try{i.url(t,e,n),u.$$state=i.state()}catch(o){throw u.url(r),u.$$state=s,o}}function l(t,e){n.$broadcast("$locationChangeSuccess",u.absUrl(),t,u.$$state,e)}var u,c,h,d=i.baseHref(),p=i.url()
if(e.enabled){if(!d&&e.requireBase)throw Ls("nobase","$location in HTML5 mode requires a <base> tag to be present!")
h=Fn(p)+(d||"/"),c=r.history?zn:qn}else h=Hn(p),c=Wn
var f=Rn(h)
u=new c(h,f,"#"+t),u.$$parseLinkUrl(p,p),u.$$state=i.state()
var m=/^\s*(javascript|mailto):/i
s.on("click",function(t){if(e.rewriteLinks&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&2!=t.which&&2!=t.button){for(var r=Cr(t.target);"a"!==R(r[0]);)if(r[0]===s[0]||!(r=r.parent())[0])return
var a=r.prop("href"),l=r.attr("href")||r.attr("xlink:href")
w(a)&&"[object SVGAnimatedString]"===a.toString()&&(a=Ci(a.animVal).href),m.test(a)||!a||r.attr("target")||t.isDefaultPrevented()||u.$$parseLinkUrl(a,l)&&(t.preventDefault(),u.absUrl()!=i.url()&&(n.$apply(),o.angular["ff-684208-preventDefault"]=!0))}}),jn(u.absUrl())!=jn(p)&&i.url(u.absUrl(),!0)
var g=!0
return i.onUrlChange(function(t,e){return y(Pn(f,t))?void(o.location.href=t):(n.$evalAsync(function(){var i,r=u.absUrl(),s=u.$$state
u.$$parse(t),u.$$state=e,i=n.$broadcast("$locationChangeStart",t,r,e,s).defaultPrevented,u.absUrl()===t&&(i?(u.$$parse(r),u.$$state=s,a(r,!1,s)):(g=!1,l(r,s)))}),void(n.$$phase||n.$digest()))}),n.$watch(function(){var t=jn(i.url()),e=jn(u.absUrl()),s=i.state(),o=u.$$replace,c=t!==e||u.$$html5&&r.history&&s!==u.$$state;(g||c)&&(g=!1,n.$evalAsync(function(){var e=u.absUrl(),i=n.$broadcast("$locationChangeStart",e,t,u.$$state,s).defaultPrevented
u.absUrl()===e&&(i?(u.$$parse(t),u.$$state=s):(c&&a(e,o,s===u.$$state?null:u.$$state),l(t,s)))})),u.$$replace=!1}),u}]}function Un(){var t=!0,e=this
this.debugEnabled=function(e){return $(e)?(t=e,this):t},this.$get=["$window",function(n){function i(t){return t instanceof Error&&(t.stack?t=t.message&&-1===t.stack.indexOf(t.message)?"Error: "+t.message+"\n"+t.stack:t.stack:t.sourceURL&&(t=t.message+"\n"+t.sourceURL+":"+t.line)),t}function r(t){var e=n.console||{},r=e[t]||e.log||m,o=!1
try{o=!!r.apply}catch(a){}return o?function(){var t=[]
return s(arguments,function(e){t.push(i(e))}),r.apply(e,t)}:function(t,e){r(t,null==e?"":e)}}return{log:r("log"),info:r("info"),warn:r("warn"),error:r("error"),debug:function(){var n=r("debug")
return function(){t&&n.apply(e,arguments)}}()}}]}function Yn(t,e){if(t=w(t)&&t.toString?t.toString():t,"__defineGetter__"===t||"__defineSetter__"===t||"__lookupGetter__"===t||"__lookupSetter__"===t||"__proto__"===t)throw Bs("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",e)
return t}function Kn(t,e){if(t){if(t.constructor===t)throw Bs("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e)
if(t.window===t)throw Bs("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",e)
if(t.children&&(t.nodeName||t.prop&&t.attr&&t.find))throw Bs("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",e)
if(t===Object)throw Bs("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",e)}return t}function Xn(t,e){if(t){if(t.constructor===t)throw Bs("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",e)
if(t===Us||t===Ys||t===Ks)throw Bs("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",e)}}function Gn(t,e){return"undefined"!=typeof t?t:e}function Jn(t,e){return"undefined"==typeof t?e:"undefined"==typeof e?t:t+e}function Qn(t,e){var n=t(e)
return!n.$stateful}function Zn(t,e){var n,i
switch(t.type){case Qs.Program:n=!0,s(t.body,function(t){Zn(t.expression,e),n=n&&t.expression.constant}),t.constant=n
break
case Qs.Literal:t.constant=!0,t.toWatch=[]
break
case Qs.UnaryExpression:Zn(t.argument,e),t.constant=t.argument.constant,t.toWatch=t.argument.toWatch
break
case Qs.BinaryExpression:Zn(t.left,e),Zn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.left.toWatch.concat(t.right.toWatch)
break
case Qs.LogicalExpression:Zn(t.left,e),Zn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=t.constant?[]:[t]
break
case Qs.ConditionalExpression:Zn(t.test,e),Zn(t.alternate,e),Zn(t.consequent,e),t.constant=t.test.constant&&t.alternate.constant&&t.consequent.constant,t.toWatch=t.constant?[]:[t]
break
case Qs.Identifier:t.constant=!1,t.toWatch=[t]
break
case Qs.MemberExpression:Zn(t.object,e),t.computed&&Zn(t.property,e),t.constant=t.object.constant&&(!t.computed||t.property.constant),t.toWatch=[t]
break
case Qs.CallExpression:n=t.filter?Qn(e,t.callee.name):!1,i=[],s(t.arguments,function(t){Zn(t,e),n=n&&t.constant,t.constant||i.push.apply(i,t.toWatch)}),t.constant=n,t.toWatch=t.filter&&Qn(e,t.callee.name)?i:[t]
break
case Qs.AssignmentExpression:Zn(t.left,e),Zn(t.right,e),t.constant=t.left.constant&&t.right.constant,t.toWatch=[t]
break
case Qs.ArrayExpression:n=!0,i=[],s(t.elements,function(t){Zn(t,e),n=n&&t.constant,t.constant||i.push.apply(i,t.toWatch)}),t.constant=n,t.toWatch=i
break
case Qs.ObjectExpression:n=!0,i=[],s(t.properties,function(t){Zn(t.value,e),n=n&&t.value.constant,t.value.constant||i.push.apply(i,t.value.toWatch)}),t.constant=n,t.toWatch=i
break
case Qs.ThisExpression:t.constant=!1,t.toWatch=[]}}function ti(t){if(1==t.length){var e=t[0].expression,i=e.toWatch
return 1!==i.length?i:i[0]!==e?i:n}}function ei(t){return t.type===Qs.Identifier||t.type===Qs.MemberExpression}function ni(t){return 1===t.body.length&&ei(t.body[0].expression)?{type:Qs.AssignmentExpression,left:t.body[0].expression,right:{type:Qs.NGValueParameter},operator:"="}:void 0}function ii(t){return 0===t.body.length||1===t.body.length&&(t.body[0].expression.type===Qs.Literal||t.body[0].expression.type===Qs.ArrayExpression||t.body[0].expression.type===Qs.ObjectExpression)}function ri(t){return t.constant}function si(t,e){this.astBuilder=t,this.$filter=e}function oi(t,e){this.astBuilder=t,this.$filter=e}function ai(t){return"constructor"==t}function li(t){return T(t.valueOf)?t.valueOf():to.call(t)}function ui(){var t=ge(),e=ge()
this.$get=["$filter",function(i){function r(t,e){return null==t||null==e?t===e:"object"==typeof t&&(t=li(t),"object"==typeof t)?!1:t===e||t!==t&&e!==e}function o(t,e,i,s,o){var a,l=s.inputs
if(1===l.length){var u=r
return l=l[0],t.$watch(function(t){var e=l(t)
return r(e,u)||(a=s(t,n,n,[e]),u=e&&li(e)),a},e,i,o)}for(var c=[],h=[],d=0,p=l.length;p>d;d++)c[d]=r,h[d]=null
return t.$watch(function(t){for(var e=!1,i=0,o=l.length;o>i;i++){var u=l[i](t);(e||(e=!r(u,c[i])))&&(h[i]=u,c[i]=u&&li(u))}return e&&(a=s(t,n,n,h)),a},e,i,o)}function a(t,e,n,i){var r,s
return r=t.$watch(function(t){return i(t)},function(t,n,i){s=t,T(e)&&e.apply(this,arguments),$(t)&&i.$$postDigest(function(){$(s)&&r()})},n)}function l(t,e,n,i){function r(t){var e=!0
return s(t,function(t){$(t)||(e=!1)}),e}var o,a
return o=t.$watch(function(t){return i(t)},function(t,n,i){a=t,T(e)&&e.call(this,t,n,i),r(t)&&i.$$postDigest(function(){r(a)&&o()})},n)}function u(t,e,n,i){var r
return r=t.$watch(function(t){return i(t)},function(){T(e)&&e.apply(this,arguments),r()},n)}function c(t,e){if(!e)return t
var n=t.$$watchDelegate,i=n!==l&&n!==a,r=i?function(n,i,r,s){var o=t(n,i,r,s)
return e(o,n,i)}:function(n,i,r,s){var o=t(n,i,r,s),a=e(o,n,i)
return $(o)?a:o}
return t.$$watchDelegate&&t.$$watchDelegate!==o?r.$$watchDelegate=t.$$watchDelegate:e.$stateful||(r.$$watchDelegate=o,r.inputs=t.inputs?t.inputs:[t]),r}var h=zr().noUnsafeEval,d={csp:h,expensiveChecks:!1},p={csp:h,expensiveChecks:!0}
return function(n,r,s){var h,f,g
switch(typeof n){case"string":n=n.trim(),g=n
var v=s?e:t
if(h=v[g],!h){":"===n.charAt(0)&&":"===n.charAt(1)&&(f=!0,n=n.substring(2))
var b=s?p:d,y=new Js(b),$=new Zs(y,i,b)
h=$.parse(n),h.constant?h.$$watchDelegate=u:f?h.$$watchDelegate=h.literal?l:a:h.inputs&&(h.$$watchDelegate=o),v[g]=h}return c(h,r)
case"function":return c(n,r)
default:return m}}}]}function ci(){this.$get=["$rootScope","$exceptionHandler",function(t,e){return di(function(e){t.$evalAsync(e)},e)}]}function hi(){this.$get=["$browser","$exceptionHandler",function(t,e){return di(function(e){t.defer(e)},e)}]}function di(t,e){function r(t,e,n){function i(e){return function(n){r||(r=!0,e.call(t,n))}}var r=!1
return[i(e),i(n)]}function o(){this.$$state={status:0}}function a(t,e){return function(n){e.call(t,n)}}function l(t){var i,r,s
s=t.pending,t.processScheduled=!1,t.pending=n
for(var o=0,a=s.length;a>o;++o){r=s[o][0],i=s[o][t.status]
try{T(i)?r.resolve(i(t.value)):1===t.status?r.resolve(t.value):r.reject(t.value)}catch(l){r.reject(l),e(l)}}}function u(e){!e.processScheduled&&e.pending&&(e.processScheduled=!0,t(function(){l(e)}))}function c(){this.promise=new o,this.resolve=a(this,this.resolve),this.reject=a(this,this.reject),this.notify=a(this,this.notify)}function d(t){var e=new c,n=0,i=Hr(t)?[]:{}
return s(t,function(t,r){n++,b(t).then(function(t){i.hasOwnProperty(r)||(i[r]=t,--n||e.resolve(i))},function(t){i.hasOwnProperty(r)||e.reject(t)})}),0===n&&e.resolve(i),e.promise}var p=i("$q",TypeError),f=function(){return new c}
h(o.prototype,{then:function(t,e,n){if(y(t)&&y(e)&&y(n))return this
var i=new c
return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([i,t,e,n]),this.$$state.status>0&&u(this.$$state),i.promise},"catch":function(t){return this.then(null,t)},"finally":function(t,e){return this.then(function(e){return v(e,!0,t)},function(e){return v(e,!1,t)},e)}}),h(c.prototype,{resolve:function(t){this.promise.$$state.status||(t===this.promise?this.$$reject(p("qcycle","Expected promise to be resolved with value other than itself '{0}'",t)):this.$$resolve(t))},$$resolve:function(t){var n,i
i=r(this,this.$$resolve,this.$$reject)
try{(w(t)||T(t))&&(n=t&&t.then),T(n)?(this.promise.$$state.status=-1,n.call(t,i[0],i[1],this.notify)):(this.promise.$$state.value=t,this.promise.$$state.status=1,u(this.promise.$$state))}catch(s){i[1](s),e(s)}},reject:function(t){this.promise.$$state.status||this.$$reject(t)},$$reject:function(t){this.promise.$$state.value=t,this.promise.$$state.status=2,u(this.promise.$$state)},notify:function(n){var i=this.promise.$$state.pending
this.promise.$$state.status<=0&&i&&i.length&&t(function(){for(var t,r,s=0,o=i.length;o>s;s++){r=i[s][0],t=i[s][3]
try{r.notify(T(t)?t(n):n)}catch(a){e(a)}}})}})
var m=function(t){var e=new c
return e.reject(t),e.promise},g=function(t,e){var n=new c
return e?n.resolve(t):n.reject(t),n.promise},v=function(t,e,n){var i=null
try{T(n)&&(i=n())}catch(r){return g(r,!1)}return N(i)?i.then(function(){return g(t,e)},function(t){return g(t,!1)}):g(t,e)},b=function(t,e,n,i){var r=new c
return r.resolve(t),r.promise.then(e,n,i)},$=b,x=function _(t){function e(t){i.resolve(t)}function n(t){i.reject(t)}if(!T(t))throw p("norslvr","Expected resolverFn, got '{0}'",t)
if(!(this instanceof _))return new _(t)
var i=new c
return t(e,n),i.promise}
return x.defer=f,x.reject=m,x.when=b,x.resolve=$,x.all=d,x}function pi(){this.$get=["$window","$timeout",function(t,e){var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame,i=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.webkitCancelRequestAnimationFrame,r=!!n,s=r?function(t){var e=n(t)
return function(){i(e)}}:function(t){var n=e(t,16.66,!1)
return function(){e.cancel(n)}}
return s.supported=r,s}]}function fi(){function t(t){function e(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=l(),this.$$ChildScope=null}return e.prototype=t,e}var e=10,n=i("$rootScope"),o=null,a=null
this.digestTtl=function(t){return arguments.length&&(e=t),e},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(i,u,c,h){function d(t){t.currentScope.$$destroyed=!0}function p(){this.$id=l(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function f(t){if(C.$$phase)throw n("inprog","{0} already in progress",C.$$phase)
C.$$phase=t}function g(){C.$$phase=null}function v(t,e){do t.$$watchersCount+=e
while(t=t.$parent)}function b(t,e,n){do t.$$listenerCount[n]-=e,0===t.$$listenerCount[n]&&delete t.$$listenerCount[n]
while(t=t.$parent)}function $(){}function x(){for(;E.length;)try{E.shift()()}catch(t){u(t)}a=null}function _(){null===a&&(a=h.defer(function(){C.$apply(x)}))}p.prototype={constructor:p,$new:function(e,n){var i
return n=n||this,e?(i=new p,i.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=t(this)),i=new this.$$ChildScope),i.$parent=n,i.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=i,n.$$childTail=i):n.$$childHead=n.$$childTail=i,(e||n!=this)&&i.$on("$destroy",d),i},$watch:function(t,e,n,i){var r=c(t)
if(r.$$watchDelegate)return r.$$watchDelegate(this,e,n,r,t)
var s=this,a=s.$$watchers,l={fn:e,last:$,get:r,exp:i||t,eq:!!n}
return o=null,T(e)||(l.fn=m),a||(a=s.$$watchers=[]),a.unshift(l),v(this,1),function(){F(a,l)>=0&&v(s,-1),o=null}},$watchGroup:function(t,e){function n(){l=!1,u?(u=!1,e(r,r,a)):e(r,i,a)}var i=new Array(t.length),r=new Array(t.length),o=[],a=this,l=!1,u=!0
if(!t.length){var c=!0
return a.$evalAsync(function(){c&&e(r,r,a)}),function(){c=!1}}return 1===t.length?this.$watch(t[0],function(t,n,s){r[0]=t,i[0]=n,e(r,t===n?r:i,s)}):(s(t,function(t,e){var s=a.$watch(t,function(t,s){r[e]=t,i[e]=s,l||(l=!0,a.$evalAsync(n))})
o.push(s)}),function(){for(;o.length;)o.shift()()})},$watchCollection:function(t,e){function n(t){s=t
var e,n,i,a,l
if(!y(s)){if(w(s))if(r(s)){o!==p&&(o=p,g=o.length=0,h++),e=s.length,g!==e&&(h++,o.length=g=e)
for(var u=0;e>u;u++)l=o[u],a=s[u],i=l!==l&&a!==a,i||l===a||(h++,o[u]=a)}else{o!==f&&(o=f={},g=0,h++),e=0
for(n in s)yr.call(s,n)&&(e++,a=s[n],l=o[n],n in o?(i=l!==l&&a!==a,i||l===a||(h++,o[n]=a)):(g++,o[n]=a,h++))
if(g>e){h++
for(n in o)yr.call(s,n)||(g--,delete o[n])}}else o!==s&&(o=s,h++)
return h}}function i(){if(m?(m=!1,e(s,s,l)):e(s,a,l),u)if(w(s))if(r(s)){a=new Array(s.length)
for(var t=0;t<s.length;t++)a[t]=s[t]}else{a={}
for(var n in s)yr.call(s,n)&&(a[n]=s[n])}else a=s}n.$stateful=!0
var s,o,a,l=this,u=e.length>1,h=0,d=c(t,n),p=[],f={},m=!0,g=0
return this.$watch(d,i)},$digest:function(){var t,i,r,s,l,c,d,p,m,v,b=e,y=this,w=[]
f("$digest"),h.$$checkUrlChange(),this===C&&null!==a&&(h.defer.cancel(a),x()),o=null
do{for(c=!1,p=y;k.length;){try{v=k.shift(),v.scope.$eval(v.expression,v.locals)}catch(_){u(_)}o=null}t:do{if(s=p.$$watchers)for(l=s.length;l--;)try{if(t=s[l])if((i=t.get(p))===(r=t.last)||(t.eq?q(i,r):"number"==typeof i&&"number"==typeof r&&isNaN(i)&&isNaN(r))){if(t===o){c=!1
break t}}else c=!0,o=t,t.last=t.eq?z(i,null):i,t.fn(i,r===$?i:r,p),5>b&&(m=4-b,w[m]||(w[m]=[]),w[m].push({msg:T(t.exp)?"fn: "+(t.exp.name||t.exp.toString()):t.exp,newVal:i,oldVal:r}))}catch(_){u(_)}if(!(d=p.$$watchersCount&&p.$$childHead||p!==y&&p.$$nextSibling))for(;p!==y&&!(d=p.$$nextSibling);)p=p.$parent}while(p=d)
if((c||k.length)&&!b--)throw g(),n("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",e,w)}while(c||k.length)
for(g();D.length;)try{D.shift()()}catch(_){u(_)}},$destroy:function(){if(!this.$$destroyed){var t=this.$parent
this.$broadcast("$destroy"),this.$$destroyed=!0,this===C&&h.$$applicationDestroyed(),v(this,-this.$$watchersCount)
for(var e in this.$$listenerCount)b(this,this.$$listenerCount[e],e)
t&&t.$$childHead==this&&(t.$$childHead=this.$$nextSibling),t&&t.$$childTail==this&&(t.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=m,this.$on=this.$watch=this.$watchGroup=function(){return m},this.$$listeners={},this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(t,e){return c(t)(this,e)},$evalAsync:function(t,e){C.$$phase||k.length||h.defer(function(){k.length&&C.$digest()}),k.push({scope:this,expression:t,locals:e})},$$postDigest:function(t){D.push(t)},$apply:function(t){try{f("$apply")
try{return this.$eval(t)}finally{g()}}catch(e){u(e)}finally{try{C.$digest()}catch(e){throw u(e),e}}},$applyAsync:function(t){function e(){n.$eval(t)}var n=this
t&&E.push(e),_()},$on:function(t,e){var n=this.$$listeners[t]
n||(this.$$listeners[t]=n=[]),n.push(e)
var i=this
do i.$$listenerCount[t]||(i.$$listenerCount[t]=0),i.$$listenerCount[t]++
while(i=i.$parent)
var r=this
return function(){var i=n.indexOf(e);-1!==i&&(n[i]=null,b(r,1,t))}},$emit:function(t){var e,n,i,r=[],s=this,o=!1,a={name:t,targetScope:s,stopPropagation:function(){o=!0},preventDefault:function(){a.defaultPrevented=!0},defaultPrevented:!1},l=L([a],arguments,1)
do{for(e=s.$$listeners[t]||r,a.currentScope=s,n=0,i=e.length;i>n;n++)if(e[n])try{e[n].apply(null,l)}catch(c){u(c)}else e.splice(n,1),n--,i--
if(o)return a.currentScope=null,a
s=s.$parent}while(s)
return a.currentScope=null,a},$broadcast:function(t){var e=this,n=e,i=e,r={name:t,targetScope:e,preventDefault:function(){r.defaultPrevented=!0},defaultPrevented:!1}
if(!e.$$listenerCount[t])return r
for(var s,o,a,l=L([r],arguments,1);n=i;){for(r.currentScope=n,s=n.$$listeners[t]||[],o=0,a=s.length;a>o;o++)if(s[o])try{s[o].apply(null,l)}catch(c){u(c)}else s.splice(o,1),o--,a--
if(!(i=n.$$listenerCount[t]&&n.$$childHead||n!==e&&n.$$nextSibling))for(;n!==e&&!(i=n.$$nextSibling);)n=n.$parent}return r.currentScope=null,r}}
var C=new p,k=C.$$asyncQueue=[],D=C.$$postDigestQueue=[],E=C.$$applyAsyncQueue=[]
return C}]}function mi(){var t=/^\s*(https?|ftp|mailto|tel|file):/,e=/^\s*((https?|ftp|file|blob):|data:image\/)/
this.aHrefSanitizationWhitelist=function(e){return $(e)?(t=e,this):t},this.imgSrcSanitizationWhitelist=function(t){return $(t)?(e=t,this):e},this.$get=function(){return function(n,i){var r,s=i?e:t
return r=Ci(n).href,""===r||r.match(s)?n:"unsafe:"+r}}}function gi(t){if("self"===t)return t
if(_(t)){if(t.indexOf("***")>-1)throw eo("iwcard","Illegal sequence *** in string matcher.  String: {0}",t)
return t=Fr(t).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+t+"$")}if(D(t))return new RegExp("^"+t.source+"$")
throw eo("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function vi(t){var e=[]
return $(t)&&s(t,function(t){e.push(gi(t))}),e}function bi(){this.SCE_CONTEXTS=no
var t=["self"],e=[]
this.resourceUrlWhitelist=function(e){return arguments.length&&(t=vi(e)),t},this.resourceUrlBlacklist=function(t){return arguments.length&&(e=vi(t)),e},this.$get=["$injector",function(n){function i(t,e){return"self"===t?ki(e):!!t.exec(e.href)}function r(n){var r,s,o=Ci(n.toString()),a=!1
for(r=0,s=t.length;s>r;r++)if(i(t[r],o)){a=!0
break}if(a)for(r=0,s=e.length;s>r;r++)if(i(e[r],o)){a=!1
break}return a}function s(t){var e=function(t){this.$$unwrapTrustedValue=function(){return t}}
return t&&(e.prototype=new t),e.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},e.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},e}function o(t,e){var n=h.hasOwnProperty(t)?h[t]:null
if(!n)throw eo("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",t,e)
if(null===e||y(e)||""===e)return e
if("string"!=typeof e)throw eo("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",t)
return new n(e)}function a(t){return t instanceof c?t.$$unwrapTrustedValue():t}function l(t,e){if(null===e||y(e)||""===e)return e
var n=h.hasOwnProperty(t)?h[t]:null
if(n&&e instanceof n)return e.$$unwrapTrustedValue()
if(t===no.RESOURCE_URL){if(r(e))return e
throw eo("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",e.toString())}if(t===no.HTML)return u(e)
throw eo("unsafe","Attempting to use an unsafe value in a safe context.")}var u=function(){throw eo("unsafe","Attempting to use an unsafe value in a safe context.")}
n.has("$sanitize")&&(u=n.get("$sanitize"))
var c=s(),h={}
return h[no.HTML]=s(c),h[no.CSS]=s(c),h[no.URL]=s(c),h[no.JS]=s(c),h[no.RESOURCE_URL]=s(h[no.URL]),{trustAs:o,getTrusted:l,valueOf:a}}]}function yi(){var t=!0
this.enabled=function(e){return arguments.length&&(t=!!e),t},this.$get=["$parse","$sceDelegate",function(e,n){if(t&&8>_r)throw eo("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.")
var i=W(no)
i.isEnabled=function(){return t},i.trustAs=n.trustAs,i.getTrusted=n.getTrusted,i.valueOf=n.valueOf,t||(i.trustAs=i.getTrusted=function(t,e){return e},i.valueOf=g),i.parseAs=function(t,n){var r=e(n)
return r.literal&&r.constant?r:e(n,function(e){return i.getTrusted(t,e)})}
var r=i.parseAs,o=i.getTrusted,a=i.trustAs
return s(no,function(t,e){var n=br(e)
i[xe("parse_as_"+n)]=function(e){return r(t,e)},i[xe("get_trusted_"+n)]=function(e){return o(t,e)},i[xe("trust_as_"+n)]=function(e){return a(t,e)}}),i}]}function $i(){this.$get=["$window","$document",function(t,e){var n,i,r={},s=p((/android (\d+)/.exec(br((t.navigator||{}).userAgent))||[])[1]),o=/Boxee/i.test((t.navigator||{}).userAgent),a=e[0]||{},l=/^(Moz|webkit|ms)(?=[A-Z])/,u=a.body&&a.body.style,c=!1,h=!1
if(u){for(var d in u)if(i=l.exec(d)){n=i[0],n=n.substr(0,1).toUpperCase()+n.substr(1)
break}n||(n="WebkitOpacity"in u&&"webkit"),c=!!("transition"in u||n+"Transition"in u),h=!!("animation"in u||n+"Animation"in u),!s||c&&h||(c=_(u.webkitTransition),h=_(u.webkitAnimation))}return{history:!(!t.history||!t.history.pushState||4>s||o),hasEvent:function(t){if("input"===t&&11>=_r)return!1
if(y(r[t])){var e=a.createElement("div")
r[t]="on"+t in e}return r[t]},csp:zr(),vendorPrefix:n,transitions:c,animations:h,android:s}}]}function wi(){this.$get=["$templateCache","$http","$q","$sce",function(t,e,n,i){function r(s,o){function a(t){if(!o)throw Es("tpload","Failed to load template: {0} (HTTP status: {1} {2})",s,t.status,t.statusText)
return n.reject(t)}r.totalPendingRequests++,_(s)&&t.get(s)||(s=i.getTrustedResourceUrl(s))
var l=e.defaults&&e.defaults.transformResponse
Hr(l)?l=l.filter(function(t){return t!==$n}):l===$n&&(l=null)
var u={cache:t,transformResponse:l}
return e.get(s,u)["finally"](function(){r.totalPendingRequests--}).then(function(e){return t.put(s,e.data),e.data},a)}return r.totalPendingRequests=0,r}]}function xi(){this.$get=["$rootScope","$browser","$location",function(t,e,n){var i={}
return i.findBindings=function(t,e,n){var i=t.getElementsByClassName("ng-binding"),r=[]
return s(i,function(t){var i=Or.element(t).data("$binding")
i&&s(i,function(i){if(n){var s=new RegExp("(^|\\s)"+Fr(e)+"(\\s|\\||$)")
s.test(i)&&r.push(t)}else-1!=i.indexOf(e)&&r.push(t)})}),r},i.findModels=function(t,e,n){for(var i=["ng-","data-ng-","ng\\:"],r=0;r<i.length;++r){var s=n?"=":"*=",o="["+i[r]+"model"+s+'"'+e+'"]',a=t.querySelectorAll(o)
if(a.length)return a}},i.getLocation=function(){return n.url()},i.setLocation=function(e){e!==n.url()&&(n.url(e),t.$digest())},i.whenStable=function(t){e.notifyWhenNoOutstandingRequests(t)},i}]}function _i(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(t,e,n,i,r){function s(s,a,l){T(s)||(l=a,a=s,s=m)
var u,c=V(arguments,3),h=$(l)&&!l,d=(h?i:n).defer(),p=d.promise
return u=e.defer(function(){try{d.resolve(s.apply(null,c))}catch(e){d.reject(e),r(e)}finally{delete o[p.$$timeoutId]}h||t.$apply()},a),p.$$timeoutId=u,o[u]=d,p}var o={}
return s.cancel=function(t){return t&&t.$$timeoutId in o?(o[t.$$timeoutId].reject("canceled"),delete o[t.$$timeoutId],e.defer.cancel(t.$$timeoutId)):!1},s}]}function Ci(t){var e=t
return _r&&(io.setAttribute("href",e),e=io.href),io.setAttribute("href",e),{href:io.href,protocol:io.protocol?io.protocol.replace(/:$/,""):"",host:io.host,search:io.search?io.search.replace(/^\?/,""):"",hash:io.hash?io.hash.replace(/^#/,""):"",hostname:io.hostname,port:io.port,pathname:"/"===io.pathname.charAt(0)?io.pathname:"/"+io.pathname}}function ki(t){var e=_(t)?Ci(t):t
return e.protocol===ro.protocol&&e.host===ro.host}function Ti(){this.$get=v(t)}function Di(t){function e(t){try{return decodeURIComponent(t)}catch(e){return t}}var n=t[0]||{},i={},r=""
return function(){var t,s,o,a,l,u=n.cookie||""
if(u!==r)for(r=u,t=r.split("; "),i={},o=0;o<t.length;o++)s=t[o],a=s.indexOf("="),a>0&&(l=e(s.substring(0,a)),y(i[l])&&(i[l]=e(s.substring(a+1))))
return i}}function Ei(){this.$get=Di}function Si(t){function e(i,r){if(w(i)){var o={}
return s(i,function(t,n){o[n]=e(n,t)}),o}return t.factory(i+n,r)}var n="Filter"
this.register=e,this.$get=["$injector",function(t){return function(e){return t.get(e+n)}}],e("currency",Ni),e("date",Yi),e("filter",Ii),e("json",Ki),e("limitTo",Xi),e("lowercase",uo),e("number",Pi),e("orderBy",Gi),e("uppercase",co)}function Ii(){return function(t,e,n){if(!r(t)){if(null==t)return t
throw i("filter")("notarray","Expected array but received: {0}",t)}var s,o,a=Oi(e)
switch(a){case"function":s=e
break
case"boolean":case"null":case"number":case"string":o=!0
case"object":s=Mi(e,n,o)
break
default:return t}return Array.prototype.filter.call(t,s)}}function Mi(t,e,n){var i,r=w(t)&&"$"in t
return e===!0?e=q:T(e)||(e=function(t,e){return y(t)?!1:null===t||null===e?t===e:w(e)||w(t)&&!b(t)?!1:(t=br(""+t),e=br(""+e),-1!==t.indexOf(e))}),i=function(i){return r&&!w(i)?Ai(i,t.$,e,!1):Ai(i,t,e,n)}}function Ai(t,e,n,i,r){var s=Oi(t),o=Oi(e)
if("string"===o&&"!"===e.charAt(0))return!Ai(t,e.substring(1),n,i)
if(Hr(t))return t.some(function(t){return Ai(t,e,n,i)})
switch(s){case"object":var a
if(i){for(a in t)if("$"!==a.charAt(0)&&Ai(t[a],e,n,!0))return!0
return r?!1:Ai(t,e,n,!1)}if("object"===o){for(a in e){var l=e[a]
if(!T(l)&&!y(l)){var u="$"===a,c=u?t:t[a]
if(!Ai(c,l,n,u,u))return!1}}return!0}return n(t,e)
case"function":return!1
default:return n(t,e)}}function Oi(t){return null===t?"null":typeof t}function Ni(t){var e=t.NUMBER_FORMATS
return function(t,n,i){return y(n)&&(n=e.CURRENCY_SYM),y(i)&&(i=e.PATTERNS[1].maxFrac),null==t?t:Hi(t,e.PATTERNS[1],e.GROUP_SEP,e.DECIMAL_SEP,i).replace(/\u00A4/g,n)}}function Pi(t){var e=t.NUMBER_FORMATS
return function(t,n){return null==t?t:Hi(t,e.PATTERNS[0],e.GROUP_SEP,e.DECIMAL_SEP,n)}}function Hi(t,e,n,i,r){if(w(t))return""
var s=0>t
t=Math.abs(t)
var o=1/0===t
if(!o&&!isFinite(t))return""
var a=t+"",l="",u=!1,c=[]
if(o&&(l="∞"),!o&&-1!==a.indexOf("e")){var h=a.match(/([\d\.]+)e(-?)(\d+)/)
h&&"-"==h[2]&&h[3]>r+1?t=0:(l=a,u=!0)}if(o||u)r>0&&1>t&&(l=t.toFixed(r),t=parseFloat(l))
else{var d=(a.split(so)[1]||"").length
y(r)&&(r=Math.min(Math.max(e.minFrac,d),e.maxFrac)),t=+(Math.round(+(t.toString()+"e"+r)).toString()+"e"+-r)
var p=(""+t).split(so),f=p[0]
p=p[1]||""
var m,g=0,v=e.lgSize,b=e.gSize
if(f.length>=v+b)for(g=f.length-v,m=0;g>m;m++)(g-m)%b===0&&0!==m&&(l+=n),l+=f.charAt(m)
for(m=g;m<f.length;m++)(f.length-m)%v===0&&0!==m&&(l+=n),l+=f.charAt(m)
for(;p.length<r;)p+="0"
r&&"0"!==r&&(l+=i+p.substr(0,r))}return 0===t&&(s=!1),c.push(s?e.negPre:e.posPre,l,s?e.negSuf:e.posSuf),c.join("")}function ji(t,e,n){var i=""
for(0>t&&(i="-",t=-t),t=""+t;t.length<e;)t="0"+t
return n&&(t=t.substr(t.length-e)),i+t}function Ri(t,e,n,i){return n=n||0,function(r){var s=r["get"+t]()
return(n>0||s>-n)&&(s+=n),0===s&&-12==n&&(s=12),ji(s,e,i)}}function Fi(t,e){return function(n,i){var r=n["get"+t](),s=$r(e?"SHORT"+t:t)
return i[s][r]}}function zi(t,e,n){var i=-1*n,r=i>=0?"+":""
return r+=ji(Math[i>0?"floor":"ceil"](i/60),2)+ji(Math.abs(i%60),2)}function Wi(t){var e=new Date(t,0,1).getDay()
return new Date(t,0,(4>=e?5:12)-e)}function qi(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+(4-t.getDay()))}function Li(t){return function(e){var n=Wi(e.getFullYear()),i=qi(e),r=+i-+n,s=1+Math.round(r/6048e5)
return ji(s,t)}}function Vi(t,e){return t.getHours()<12?e.AMPMS[0]:e.AMPMS[1]}function Bi(t,e){return t.getFullYear()<=0?e.ERAS[0]:e.ERAS[1]}function Ui(t,e){return t.getFullYear()<=0?e.ERANAMES[0]:e.ERANAMES[1]}function Yi(t){function e(t){var e
if(e=t.match(n)){var i=new Date(0),r=0,s=0,o=e[8]?i.setUTCFullYear:i.setFullYear,a=e[8]?i.setUTCHours:i.setHours
e[9]&&(r=p(e[9]+e[10]),s=p(e[9]+e[11])),o.call(i,p(e[1]),p(e[2])-1,p(e[3]))
var l=p(e[4]||0)-r,u=p(e[5]||0)-s,c=p(e[6]||0),h=Math.round(1e3*parseFloat("0."+(e[7]||0)))
return a.call(i,l,u,c,h),i}return t}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
return function(n,i,r){var o,a,l="",u=[]
if(i=i||"mediumDate",i=t.DATETIME_FORMATS[i]||i,_(n)&&(n=lo.test(n)?p(n):e(n)),C(n)&&(n=new Date(n)),!k(n)||!isFinite(n.getTime()))return n
for(;i;)a=ao.exec(i),a?(u=L(u,a,1),i=u.pop()):(u.push(i),i=null)
var c=n.getTimezoneOffset()
return r&&(c=X(r,n.getTimezoneOffset()),n=J(n,r,!0)),s(u,function(e){o=oo[e],l+=o?o(n,t.DATETIME_FORMATS,c):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),l}}function Ki(){return function(t,e){return y(e)&&(e=2),Y(t,e)}}function Xi(){return function(t,e,n){return e=1/0===Math.abs(Number(e))?Number(e):p(e),isNaN(e)?t:(C(t)&&(t=t.toString()),Hr(t)||_(t)?(n=!n||isNaN(n)?0:p(n),n=0>n&&n>=-t.length?t.length+n:n,e>=0?t.slice(n,n+e):0===n?t.slice(e,t.length):t.slice(Math.max(0,n+e),n)):t)}}function Gi(t){function e(e,n){return n=n?-1:1,e.map(function(e){var i=1,r=g
if(T(e))r=e
else if(_(e)&&(("+"==e.charAt(0)||"-"==e.charAt(0))&&(i="-"==e.charAt(0)?-1:1,e=e.substring(1)),""!==e&&(r=t(e),r.constant))){var s=r()
r=function(t){return t[s]}}return{get:r,descending:i*n}})}function n(t){switch(typeof t){case"number":case"boolean":case"string":return!0
default:return!1}}function i(t,e){return"function"==typeof t.valueOf&&(t=t.valueOf(),n(t))?t:b(t)&&(t=t.toString(),n(t))?t:e}function s(t,e){var n=typeof t
return null===t?(n="string",t="null"):"string"===n?t=t.toLowerCase():"object"===n&&(t=i(t,e)),{value:t,type:n}}function o(t,e){var n=0
return t.type===e.type?t.value!==e.value&&(n=t.value<e.value?-1:1):n=t.type<e.type?-1:1,n}return function(t,n,i){function a(t,e){return{value:t,predicateValues:u.map(function(n){return s(n.get(t),e)})}}function l(t,e){for(var n=0,i=0,r=u.length;r>i&&!(n=o(t.predicateValues[i],e.predicateValues[i])*u[i].descending);++i);return n}if(!r(t))return t
Hr(n)||(n=[n]),0===n.length&&(n=["+"])
var u=e(n,i)
u.push({get:function(){return{}},descending:i?-1:1})
var c=Array.prototype.map.call(t,a)
return c.sort(l),t=c.map(function(t){return t.value})}}function Ji(t){return T(t)&&(t={link:t}),t.restrict=t.restrict||"AC",v(t)}function Qi(t,e){t.$name=e}function Zi(t,e,i,r,o){var a=this,l=[]
a.$error={},a.$$success={},a.$pending=n,a.$name=o(e.name||e.ngForm||"")(i),a.$dirty=!1,a.$pristine=!0,a.$valid=!0,a.$invalid=!1,a.$submitted=!1,a.$$parentForm=fo,a.$rollbackViewValue=function(){s(l,function(t){t.$rollbackViewValue()})},a.$commitViewValue=function(){s(l,function(t){t.$commitViewValue()})},a.$addControl=function(t){pe(t.$name,"input"),l.push(t),t.$name&&(a[t.$name]=t),t.$$parentForm=a},a.$$renameControl=function(t,e){var n=t.$name
a[n]===t&&delete a[n],a[e]=t,t.$name=e},a.$removeControl=function(t){t.$name&&a[t.$name]===t&&delete a[t.$name],s(a.$pending,function(e,n){a.$setValidity(n,null,t)}),s(a.$error,function(e,n){a.$setValidity(n,null,t)}),s(a.$$success,function(e,n){a.$setValidity(n,null,t)}),F(l,t),t.$$parentForm=fo},fr({ctrl:this,$element:t,set:function(t,e,n){var i=t[e]
if(i){var r=i.indexOf(n);-1===r&&i.push(n)}else t[e]=[n]},unset:function(t,e,n){var i=t[e]
i&&(F(i,n),0===i.length&&delete t[e])},$animate:r}),a.$setDirty=function(){r.removeClass(t,Go),r.addClass(t,Jo),a.$dirty=!0,a.$pristine=!1,a.$$parentForm.$setDirty()},a.$setPristine=function(){r.setClass(t,Go,Jo+" "+mo),a.$dirty=!1,a.$pristine=!0,a.$submitted=!1,s(l,function(t){t.$setPristine()})},a.$setUntouched=function(){s(l,function(t){t.$setUntouched()})},a.$setSubmitted=function(){r.addClass(t,mo),a.$submitted=!0,a.$$parentForm.$setSubmitted()}}function tr(t){t.$formatters.push(function(e){return t.$isEmpty(e)?e:e.toString()})}function er(t,e,n,i,r,s){nr(t,e,n,i,r,s),tr(i)}function nr(t,e,n,i,r,s){var o=br(e[0].type)
if(!r.android){var a=!1
e.on("compositionstart",function(){a=!0}),e.on("compositionend",function(){a=!1,l()})}var l=function(t){if(u&&(s.defer.cancel(u),u=null),!a){var r=e.val(),l=t&&t.type
"password"===o||n.ngTrim&&"false"===n.ngTrim||(r=Rr(r)),(i.$viewValue!==r||""===r&&i.$$hasNativeValidators)&&i.$setViewValue(r,l)}}
if(r.hasEvent("input"))e.on("input",l)
else{var u,c=function(t,e,n){u||(u=s.defer(function(){u=null,e&&e.value===n||l(t)}))}
e.on("keydown",function(t){var e=t.keyCode
91===e||e>15&&19>e||e>=37&&40>=e||c(t,this,this.value)}),r.hasEvent("paste")&&e.on("paste cut",c)}e.on("change",l),i.$render=function(){var t=i.$isEmpty(i.$viewValue)?"":i.$viewValue
e.val()!==t&&e.val(t)}}function ir(t,e){if(k(t))return t
if(_(t)){ko.lastIndex=0
var n=ko.exec(t)
if(n){var i=+n[1],r=+n[2],s=0,o=0,a=0,l=0,u=Wi(i),c=7*(r-1)
return e&&(s=e.getHours(),o=e.getMinutes(),a=e.getSeconds(),l=e.getMilliseconds()),new Date(i,0,u.getDate()+c,s,o,a,l)}}return 0/0}function rr(t,e){return function(n,i){var r,o
if(k(n))return n
if(_(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),yo.test(n))return new Date(n)
if(t.lastIndex=0,r=t.exec(n))return r.shift(),o=i?{yyyy:i.getFullYear(),MM:i.getMonth()+1,dd:i.getDate(),HH:i.getHours(),mm:i.getMinutes(),ss:i.getSeconds(),sss:i.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(r,function(t,n){n<e.length&&(o[e[n]]=+t)}),new Date(o.yyyy,o.MM-1,o.dd,o.HH,o.mm,o.ss||0,1e3*o.sss||0)}return 0/0}}function sr(t,e,i,r){return function(s,o,a,l,u,c,h){function d(t){return t&&!(t.getTime&&t.getTime()!==t.getTime())}function p(t){return $(t)&&!k(t)?i(t)||n:t}or(s,o,a,l),nr(s,o,a,l,u,c)
var f,m=l&&l.$options&&l.$options.timezone
if(l.$$parserName=t,l.$parsers.push(function(t){if(l.$isEmpty(t))return null
if(e.test(t)){var r=i(t,f)
return m&&(r=J(r,m)),r}return n}),l.$formatters.push(function(t){if(t&&!k(t))throw ea("datefmt","Expected `{0}` to be a date",t)
return d(t)?(f=t,f&&m&&(f=J(f,m,!0)),h("date")(t,r,m)):(f=null,"")}),$(a.min)||a.ngMin){var g
l.$validators.min=function(t){return!d(t)||y(g)||i(t)>=g},a.$observe("min",function(t){g=p(t),l.$validate()})}if($(a.max)||a.ngMax){var v
l.$validators.max=function(t){return!d(t)||y(v)||i(t)<=v},a.$observe("max",function(t){v=p(t),l.$validate()})}}}function or(t,e,i,r){var s=e[0],o=r.$$hasNativeValidators=w(s.validity)
o&&r.$parsers.push(function(t){var i=e.prop(vr)||{}
return i.badInput&&!i.typeMismatch?n:t})}function ar(t,e,i,r,s,o){if(or(t,e,i,r),nr(t,e,i,r,s,o),r.$$parserName="number",r.$parsers.push(function(t){return r.$isEmpty(t)?null:xo.test(t)?parseFloat(t):n}),r.$formatters.push(function(t){if(!r.$isEmpty(t)){if(!C(t))throw ea("numfmt","Expected `{0}` to be a number",t)
t=t.toString()}return t}),$(i.min)||i.ngMin){var a
r.$validators.min=function(t){return r.$isEmpty(t)||y(a)||t>=a},i.$observe("min",function(t){$(t)&&!C(t)&&(t=parseFloat(t,10)),a=C(t)&&!isNaN(t)?t:n,r.$validate()})}if($(i.max)||i.ngMax){var l
r.$validators.max=function(t){return r.$isEmpty(t)||y(l)||l>=t},i.$observe("max",function(t){$(t)&&!C(t)&&(t=parseFloat(t,10)),l=C(t)&&!isNaN(t)?t:n,r.$validate()})}}function lr(t,e,n,i,r,s){nr(t,e,n,i,r,s),tr(i),i.$$parserName="url",i.$validators.url=function(t,e){var n=t||e
return i.$isEmpty(n)||$o.test(n)}}function ur(t,e,n,i,r,s){nr(t,e,n,i,r,s),tr(i),i.$$parserName="email",i.$validators.email=function(t,e){var n=t||e
return i.$isEmpty(n)||wo.test(n)}}function cr(t,e,n,i){y(n.name)&&e.attr("name",l())
var r=function(t){e[0].checked&&i.$setViewValue(n.value,t&&t.type)}
e.on("click",r),i.$render=function(){var t=n.value
e[0].checked=t==i.$viewValue},n.$observe("value",i.$render)}function hr(t,e,n,i,r){var s
if($(i)){if(s=t(i),!s.constant)throw ea("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,i)
return s(e)}return r}function dr(t,e,n,i,r,s,o,a){var l=hr(a,t,"ngTrueValue",n.ngTrueValue,!0),u=hr(a,t,"ngFalseValue",n.ngFalseValue,!1),c=function(t){i.$setViewValue(e[0].checked,t&&t.type)}
e.on("click",c),i.$render=function(){e[0].checked=i.$viewValue},i.$isEmpty=function(t){return t===!1},i.$formatters.push(function(t){return q(t,l)}),i.$parsers.push(function(t){return t?l:u})}function pr(t,e){return t="ngClass"+t,["$animate",function(n){function i(t,e){var n=[]
t:for(var i=0;i<t.length;i++){for(var r=t[i],s=0;s<e.length;s++)if(r==e[s])continue t
n.push(r)}return n}function r(t){var e=[]
return Hr(t)?(s(t,function(t){e=e.concat(r(t))}),e):_(t)?t.split(" "):w(t)?(s(t,function(t,n){t&&(e=e.concat(n.split(" ")))}),e):t}return{restrict:"AC",link:function(o,a,l){function u(t){var e=h(t,1)
l.$addClass(e)}function c(t){var e=h(t,-1)
l.$removeClass(e)}function h(t,e){var n=a.data("$classCounts")||ge(),i=[]
return s(t,function(t){(e>0||n[t])&&(n[t]=(n[t]||0)+e,n[t]===+(e>0)&&i.push(t))}),a.data("$classCounts",n),i.join(" ")}function d(t,e){var r=i(e,t),s=i(t,e)
r=h(r,1),s=h(s,-1),r&&r.length&&n.addClass(a,r),s&&s.length&&n.removeClass(a,s)}function p(t){if(e===!0||o.$index%2===e){var n=r(t||[])
if(f){if(!q(t,f)){var i=r(f)
d(i,n)}}else u(n)}f=W(t)}var f
o.$watch(l[t],p,!0),l.$observe("class",function(){p(o.$eval(l[t]))}),"ngClass"!==t&&o.$watch("$index",function(n,i){var s=1&n
if(s!==(1&i)){var a=r(o.$eval(l[t]))
s===e?u(a):c(a)}})}}}]}function fr(t){function e(t,e,l){y(e)?i("$pending",t,l):r("$pending",t,l),O(e)?e?(h(a.$error,t,l),c(a.$$success,t,l)):(c(a.$error,t,l),h(a.$$success,t,l)):(h(a.$error,t,l),h(a.$$success,t,l)),a.$pending?(s(ta,!0),a.$valid=a.$invalid=n,o("",null)):(s(ta,!1),a.$valid=mr(a.$error),a.$invalid=!a.$valid,o("",a.$valid))
var u
u=a.$pending&&a.$pending[t]?n:a.$error[t]?!1:a.$$success[t]?!0:null,o(t,u),a.$$parentForm.$setValidity(t,u,a)}function i(t,e,n){a[t]||(a[t]={}),c(a[t],e,n)}function r(t,e,i){a[t]&&h(a[t],e,i),mr(a[t])&&(a[t]=n)}function s(t,e){e&&!u[t]?(d.addClass(l,t),u[t]=!0):!e&&u[t]&&(d.removeClass(l,t),u[t]=!1)}function o(t,e){t=t?"-"+ue(t,"-"):"",s(Ko+t,e===!0),s(Xo+t,e===!1)}var a=t.ctrl,l=t.$element,u={},c=t.set,h=t.unset,d=t.$animate
u[Xo]=!(u[Ko]=l.hasClass(Ko)),a.$setValidity=e}function mr(t){if(t)for(var e in t)if(t.hasOwnProperty(e))return!1
return!0}var gr=/^\/(.+)\/([a-z]*)$/,vr="validity",br=function(t){return _(t)?t.toLowerCase():t},yr=Object.prototype.hasOwnProperty,$r=function(t){return _(t)?t.toUpperCase():t},wr=function(t){return _(t)?t.replace(/[A-Z]/g,function(t){return String.fromCharCode(32|t.charCodeAt(0))}):t},xr=function(t){return _(t)?t.replace(/[a-z]/g,function(t){return String.fromCharCode(-33&t.charCodeAt(0))}):t}
"i"!=="I".toLowerCase()&&(br=wr,$r=xr)
var _r,Cr,kr,Tr,Dr=[].slice,Er=[].splice,Sr=[].push,Ir=Object.prototype.toString,Mr=Object.getPrototypeOf,Ar=i("ng"),Or=t.angular||(t.angular={}),Nr=0
_r=e.documentMode,m.$inject=[],g.$inject=[]
var Pr,Hr=Array.isArray,jr=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,Rr=function(t){return _(t)?t.trim():t},Fr=function(t){return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},zr=function(){function t(){try{return new Function(""),!1}catch(t){return!0}}if(!$(zr.rules)){var n=e.querySelector("[ng-csp]")||e.querySelector("[data-ng-csp]")
if(n){var i=n.getAttribute("ng-csp")||n.getAttribute("data-ng-csp")
zr.rules={noUnsafeEval:!i||-1!==i.indexOf("no-unsafe-eval"),noInlineStyle:!i||-1!==i.indexOf("no-inline-style")}}else zr.rules={noUnsafeEval:t(),noInlineStyle:!1}}return zr.rules},Wr=function(){if($(Wr.name_))return Wr.name_
var t,n,i,r,s=qr.length
for(n=0;s>n;++n)if(i=qr[n],t=e.querySelector("["+i.replace(":","\\:")+"jq]")){r=t.getAttribute(i+"jq")
break}return Wr.name_=r},qr=["ng-","data-ng-","ng:","x-ng-"],Lr=/[A-Z]/g,Vr=!1,Br=1,Ur=2,Yr=3,Kr=8,Xr=9,Gr=11,Jr={full:"1.4.6",major:1,minor:4,dot:6,codeName:"multiplicative-elevation"}
Ee.expando="ng339"
var Qr=Ee.cache={},Zr=1,ts=function(t,e,n){t.addEventListener(e,n,!1)},es=function(t,e,n){t.removeEventListener(e,n,!1)}
Ee._data=function(t){return this.cache[t[this.expando]]||{}}
var ns=/([\:\-\_]+(.))/g,is=/^moz([A-Z])/,rs={mouseleave:"mouseout",mouseenter:"mouseover"},ss=i("jqLite"),os=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,as=/<|&#?\w+;/,ls=/<([\w:]+)/,us=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,cs={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
cs.optgroup=cs.option,cs.tbody=cs.tfoot=cs.colgroup=cs.caption=cs.thead,cs.th=cs.td
var hs=Ee.prototype={ready:function(n){function i(){r||(r=!0,n())}var r=!1
"complete"===e.readyState?setTimeout(i):(this.on("DOMContentLoaded",i),Ee(t).on("load",i))},toString:function(){var t=[]
return s(this,function(e){t.push(""+e)}),"["+t.join(", ")+"]"},eq:function(t){return Cr(t>=0?this[t]:this[this.length+t])},length:0,push:Sr,sort:[].sort,splice:[].splice},ds={}
s("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(t){ds[br(t)]=t})
var ps={}
s("input,select,option,textarea,button,form,details".split(","),function(t){ps[t]=!0})
var fs={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"}
s({data:Ne,removeData:Ae,hasData:ke},function(t,e){Ee[e]=t}),s({data:Ne,inheritedData:ze,scope:function(t){return Cr.data(t,"$scope")||ze(t.parentNode||t,["$isolateScope","$scope"])},isolateScope:function(t){return Cr.data(t,"$isolateScope")||Cr.data(t,"$isolateScopeNoTemplate")},controller:Fe,injector:function(t){return ze(t,"$injector")},removeAttr:function(t,e){t.removeAttribute(e)},hasClass:Pe,css:function(t,e,n){return e=xe(e),$(n)?void(t.style[e]=n):t.style[e]},attr:function(t,e,i){var r=t.nodeType
if(r!==Yr&&r!==Ur&&r!==Kr){var s=br(e)
if(ds[s]){if(!$(i))return t[e]||(t.attributes.getNamedItem(e)||m).specified?s:n
i?(t[e]=!0,t.setAttribute(e,s)):(t[e]=!1,t.removeAttribute(s))}else if($(i))t.setAttribute(e,i)
else if(t.getAttribute){var o=t.getAttribute(e,2)
return null===o?n:o}}},prop:function(t,e,n){return $(n)?void(t[e]=n):t[e]},text:function(){function t(t,e){if(y(e)){var n=t.nodeType
return n===Br||n===Yr?t.textContent:""}t.textContent=e}return t.$dv="",t}(),val:function(t,e){if(y(e)){if(t.multiple&&"select"===R(t)){var n=[]
return s(t.options,function(t){t.selected&&n.push(t.value||t.text)}),0===n.length?null:n}return t.value}t.value=e},html:function(t,e){return y(e)?t.innerHTML:(Ie(t,!0),void(t.innerHTML=e))},empty:We},function(t,e){Ee.prototype[e]=function(e,n){var i,r,s=this.length
if(t!==We&&y(2==t.length&&t!==Pe&&t!==Fe?e:n)){if(w(e)){for(i=0;s>i;i++)if(t===Ne)t(this[i],e)
else for(r in e)t(this[i],r,e[r])
return this}for(var o=t.$dv,a=y(o)?Math.min(s,1):s,l=0;a>l;l++){var u=t(this[l],e,n)
o=o?o+u:u}return o}for(i=0;s>i;i++)t(this[i],e,n)
return this}}),s({removeData:Ae,on:function Ma(t,e,n,i){if($(i))throw ss("onargs","jqLite#on() does not support the `selector` or `eventData` parameters")
if(Ce(t)){var r=Oe(t,!0),s=r.events,o=r.handle
o||(o=r.handle=Ue(t,s))
for(var a=e.indexOf(" ")>=0?e.split(" "):[e],l=a.length;l--;){e=a[l]
var u=s[e]
u||(s[e]=[],"mouseenter"===e||"mouseleave"===e?Ma(t,rs[e],function(t){var n=this,i=t.relatedTarget;(!i||i!==n&&!n.contains(i))&&o(t,e)}):"$destroy"!==e&&ts(t,e,o),u=s[e]),u.push(n)}}},off:Me,one:function(t,e,n){t=Cr(t),t.on(e,function i(){t.off(e,n),t.off(e,i)}),t.on(e,n)},replaceWith:function(t,e){var n,i=t.parentNode
Ie(t),s(new Ee(e),function(e){n?i.insertBefore(e,n.nextSibling):i.replaceChild(e,t),n=e})},children:function(t){var e=[]
return s(t.childNodes,function(t){t.nodeType===Br&&e.push(t)}),e},contents:function(t){return t.contentDocument||t.childNodes||[]},append:function(t,e){var n=t.nodeType
if(n===Br||n===Gr){e=new Ee(e)
for(var i=0,r=e.length;r>i;i++){var s=e[i]
t.appendChild(s)}}},prepend:function(t,e){if(t.nodeType===Br){var n=t.firstChild
s(new Ee(e),function(e){t.insertBefore(e,n)})}},wrap:function(t,e){e=Cr(e).eq(0).clone()[0]
var n=t.parentNode
n&&n.replaceChild(e,t),e.appendChild(t)},remove:qe,detach:function(t){qe(t,!0)},after:function(t,e){var n=t,i=t.parentNode
e=new Ee(e)
for(var r=0,s=e.length;s>r;r++){var o=e[r]
i.insertBefore(o,n.nextSibling),n=o}},addClass:je,removeClass:He,toggleClass:function(t,e,n){e&&s(e.split(" "),function(e){var i=n
y(i)&&(i=!Pe(t,e)),(i?je:He)(t,e)})},parent:function(t){var e=t.parentNode
return e&&e.nodeType!==Gr?e:null},next:function(t){return t.nextElementSibling},find:function(t,e){return t.getElementsByTagName?t.getElementsByTagName(e):[]},clone:Se,triggerHandler:function(t,e,n){var i,r,o,a=e.type||e,l=Oe(t),u=l&&l.events,c=u&&u[a]
c&&(i={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:m,type:a,target:t},e.type&&(i=h(i,e)),r=W(c),o=n?[i].concat(n):[i],s(r,function(e){i.isImmediatePropagationStopped()||e.apply(t,o)}))}},function(t,e){Ee.prototype[e]=function(e,n,i){for(var r,s=0,o=this.length;o>s;s++)y(r)?(r=t(this[s],e,n,i),$(r)&&(r=Cr(r))):Re(r,t(this[s],e,n,i))
return $(r)?r:this},Ee.prototype.bind=Ee.prototype.on,Ee.prototype.unbind=Ee.prototype.off}),Xe.prototype={put:function(t,e){this[Ke(t,this.nextUid)]=e},get:function(t){return this[Ke(t,this.nextUid)]},remove:function(t){var e=this[t=Ke(t,this.nextUid)]
return delete this[t],e}}
var ms=[function(){this.$get=[function(){return Xe}]}],gs=/^[^\(]*\(\s*([^\)]*)\)/m,vs=/,/,bs=/^\s*(_?)(\S+?)\1\s*$/,ys=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,$s=i("$injector")
Qe.$$annotate=Je
var ws=i("$animate"),xs=1,_s="ng-animate",Cs=function(){this.$get=["$q","$$rAF",function(t,e){function n(){}return n.all=m,n.chain=m,n.prototype={end:m,cancel:m,resume:m,pause:m,complete:m,then:function(n,i){return t(function(t){e(function(){t()})}).then(n,i)}},n}]},ks=function(){var t=new Xe,e=[]
this.$get=["$$AnimateRunner","$rootScope",function(n,i){function r(t,e,n){var i=!1
return e&&(e=_(e)?e.split(" "):Hr(e)?e:[],s(e,function(e){e&&(i=!0,t[e]=n)})),i}function o(){s(e,function(e){var n=t.get(e)
if(n){var i=nn(e.attr("class")),r="",o=""
s(n,function(t,e){var n=!!i[e]
t!==n&&(t?r+=(r.length?" ":"")+e:o+=(o.length?" ":"")+e)}),s(e,function(t){r&&je(t,r),o&&He(t,o)}),t.remove(e)}}),e.length=0}function a(n,s,a){var l=t.get(n)||{},u=r(l,s,!0),c=r(l,a,!1);(u||c)&&(t.put(n,l),e.push(n),1===e.length&&i.$$postDigest(o))}return{enabled:m,on:m,off:m,pin:m,push:function(t,e,i,r){return r&&r(),i=i||{},i.from&&t.css(i.from),i.to&&t.css(i.to),(i.addClass||i.removeClass)&&a(t,i.addClass,i.removeClass),new n}}}]},Ts=["$provide",function(t){var e=this
this.$$registeredAnimations=Object.create(null),this.register=function(n,i){if(n&&"."!==n.charAt(0))throw ws("notcsel","Expecting class selector starting with '.' got '{0}'.",n)
var r=n+"-animation"
e.$$registeredAnimations[n.substr(1)]=r,t.factory(r,i)},this.classNameFilter=function(t){if(1===arguments.length&&(this.$$classNameFilter=t instanceof RegExp?t:null,this.$$classNameFilter)){var e=new RegExp("(\\s+|\\/)"+_s+"(\\s+|\\/)")
if(e.test(this.$$classNameFilter.toString()))throw ws("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',_s)}return this.$$classNameFilter},this.$get=["$$animateQueue",function(t){function e(t,e,n){if(n){var i=en(n)
!i||i.parentNode||i.previousElementSibling||(n=null)}n?n.after(t):e.prepend(t)}return{on:t.on,off:t.off,pin:t.pin,enabled:t.enabled,cancel:function(t){t.end&&t.end()},enter:function(n,i,r,s){return i=i&&Cr(i),r=r&&Cr(r),i=i||r.parent(),e(n,i,r),t.push(n,"enter",rn(s))},move:function(n,i,r,s){return i=i&&Cr(i),r=r&&Cr(r),i=i||r.parent(),e(n,i,r),t.push(n,"move",rn(s))},leave:function(e,n){return t.push(e,"leave",rn(n),function(){e.remove()})},addClass:function(e,n,i){return i=rn(i),i.addClass=tn(i.addclass,n),t.push(e,"addClass",i)},removeClass:function(e,n,i){return i=rn(i),i.removeClass=tn(i.removeClass,n),t.push(e,"removeClass",i)},setClass:function(e,n,i,r){return r=rn(r),r.addClass=tn(r.addClass,n),r.removeClass=tn(r.removeClass,i),t.push(e,"setClass",r)},animate:function(e,n,i,r,s){return s=rn(s),s.from=s.from?h(s.from,n):n,s.to=s.to?h(s.to,i):i,r=r||"ng-inline-animate",s.tempClasses=tn(s.tempClasses,r),t.push(e,"animate",s)}}}]}],Ds=function(){this.$get=["$$rAF","$q",function(t,e){var n=function(){}
return n.prototype={done:function(t){this.defer&&this.defer[t===!0?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){return this.defer||(this.defer=e.defer()),this.defer.promise},then:function(t,e){return this.getPromise().then(t,e)},"catch":function(t){return this.getPromise()["catch"](t)},"finally":function(t){return this.getPromise()["finally"](t)}},function(e,i){function r(){return t(function(){s(),o||a.done(),o=!0}),a}function s(){i.addClass&&(e.addClass(i.addClass),i.addClass=null),i.removeClass&&(e.removeClass(i.removeClass),i.removeClass=null),i.to&&(e.css(i.to),i.to=null)}i.from&&(e.css(i.from),i.from=null)
var o,a=new n
return{start:r,end:r}}}]},Es=i("$compile")
un.$inject=["$provide","$$sanitizeUriProvider"]
var Ss=/^((?:x|data)[\:\-_])/i,Is=i("$controller"),Ms=/^(\S+)(\s+as\s+(\w+))?$/,As=function(){this.$get=["$document",function(t){return function(e){return e?!e.nodeType&&e instanceof Cr&&(e=e[0]):e=t[0].body,e.offsetWidth+1}}]},Os="application/json",Ns={"Content-Type":Os+";charset=utf-8"},Ps=/^\[|^\{(?!\{)/,Hs={"[":/]$/,"{":/}$/},js=/^\)\]\}',?\n/,Rs=i("$http"),Fs=function(t){return function(){throw Rs("legacy","The method `{0}` on the promise returned from `$http` has been disabled.",t)}},zs=Or.$interpolateMinErr=i("$interpolate")
zs.throwNoconcat=function(t){throw zs("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",t)},zs.interr=function(t,e){return zs("interr","Can't interpolate: {0}\n{1}",t,e.toString())}
var Ws=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,qs={http:80,https:443,ftp:21},Ls=i("$location"),Vs={$$html5:!1,$$replace:!1,absUrl:Ln("$$absUrl"),url:function(t){if(y(t))return this.$$url
var e=Ws.exec(t)
return(e[1]||""===t)&&this.path(decodeURIComponent(e[1])),(e[2]||e[1]||""===t)&&this.search(e[3]||""),this.hash(e[5]||""),this},protocol:Ln("$$protocol"),host:Ln("$$host"),port:Ln("$$port"),path:Vn("$$path",function(t){return t=null!==t?t.toString():"","/"==t.charAt(0)?t:"/"+t}),search:function(t,e){switch(arguments.length){case 0:return this.$$search
case 1:if(_(t)||C(t))t=t.toString(),this.$$search=te(t)
else{if(!w(t))throw Ls("isrcharg","The first argument of the `$location#search()` call must be a string or an object.")
t=z(t,{}),s(t,function(e,n){null==e&&delete t[n]}),this.$$search=t}break
default:y(e)||null===e?delete this.$$search[t]:this.$$search[t]=e}return this.$$compose(),this},hash:Vn("$$hash",function(t){return null!==t?t.toString():""}),replace:function(){return this.$$replace=!0,this}}
s([qn,Wn,zn],function(t){t.prototype=Object.create(Vs),t.prototype.state=function(e){if(!arguments.length)return this.$$state
if(t!==zn||!this.$$html5)throw Ls("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API")
return this.$$state=y(e)?null:e,this}})
var Bs=i("$parse"),Us=Function.prototype.call,Ys=Function.prototype.apply,Ks=Function.prototype.bind,Xs=ge()
s("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(t){Xs[t]=!0})
var Gs={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},Js=function(t){this.options=t}
Js.prototype={constructor:Js,lex:function(t){for(this.text=t,this.index=0,this.tokens=[];this.index<this.text.length;){var e=this.text.charAt(this.index)
if('"'===e||"'"===e)this.readString(e)
else if(this.isNumber(e)||"."===e&&this.isNumber(this.peek()))this.readNumber()
else if(this.isIdent(e))this.readIdent()
else if(this.is(e,"(){}[].,;:?"))this.tokens.push({index:this.index,text:e}),this.index++
else if(this.isWhitespace(e))this.index++
else{var n=e+this.peek(),i=n+this.peek(2),r=Xs[e],s=Xs[n],o=Xs[i]
if(r||s||o){var a=o?i:s?n:e
this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(t,e){return-1!==e.indexOf(t)},peek:function(t){var e=t||1
return this.index+e<this.text.length?this.text.charAt(this.index+e):!1},isNumber:function(t){return t>="0"&&"9">=t&&"string"==typeof t},isWhitespace:function(t){return" "===t||"\r"===t||"	"===t||"\n"===t||""===t||" "===t},isIdent:function(t){return t>="a"&&"z">=t||t>="A"&&"Z">=t||"_"===t||"$"===t},isExpOperator:function(t){return"-"===t||"+"===t||this.isNumber(t)},throwError:function(t,e,n){n=n||this.index
var i=$(e)?"s "+e+"-"+this.index+" ["+this.text.substring(e,n)+"]":" "+n
throw Bs("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",t,i,this.text)},readNumber:function(){for(var t="",e=this.index;this.index<this.text.length;){var n=br(this.text.charAt(this.index))
if("."==n||this.isNumber(n))t+=n
else{var i=this.peek()
if("e"==n&&this.isExpOperator(i))t+=n
else if(this.isExpOperator(n)&&i&&this.isNumber(i)&&"e"==t.charAt(t.length-1))t+=n
else{if(!this.isExpOperator(n)||i&&this.isNumber(i)||"e"!=t.charAt(t.length-1))break
this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:e,text:t,constant:!0,value:Number(t)})},readIdent:function(){for(var t=this.index;this.index<this.text.length;){var e=this.text.charAt(this.index)
if(!this.isIdent(e)&&!this.isNumber(e))break
this.index++}this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(t){var e=this.index
this.index++
for(var n="",i=t,r=!1;this.index<this.text.length;){var s=this.text.charAt(this.index)
if(i+=s,r){if("u"===s){var o=this.text.substring(this.index+1,this.index+5)
o.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+o+"]"),this.index+=4,n+=String.fromCharCode(parseInt(o,16))}else{var a=Gs[s]
n+=a||s}r=!1}else if("\\"===s)r=!0
else{if(s===t)return this.index++,void this.tokens.push({index:e,text:i,constant:!0,value:n})
n+=s}this.index++}this.throwError("Unterminated quote",e)}}
var Qs=function(t,e){this.lexer=t,this.options=e}
Qs.Program="Program",Qs.ExpressionStatement="ExpressionStatement",Qs.AssignmentExpression="AssignmentExpression",Qs.ConditionalExpression="ConditionalExpression",Qs.LogicalExpression="LogicalExpression",Qs.BinaryExpression="BinaryExpression",Qs.UnaryExpression="UnaryExpression",Qs.CallExpression="CallExpression",Qs.MemberExpression="MemberExpression",Qs.Identifier="Identifier",Qs.Literal="Literal",Qs.ArrayExpression="ArrayExpression",Qs.Property="Property",Qs.ObjectExpression="ObjectExpression",Qs.ThisExpression="ThisExpression",Qs.NGValueParameter="NGValueParameter",Qs.prototype={ast:function(t){this.text=t,this.tokens=this.lexer.lex(t)
var e=this.program()
return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),e},program:function(){for(var t=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&t.push(this.expressionStatement()),!this.expect(";"))return{type:Qs.Program,body:t}},expressionStatement:function(){return{type:Qs.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var t,e=this.expression();t=this.expect("|");)e=this.filter(e)
return e},expression:function(){return this.assignment()},assignment:function(){var t=this.ternary()
return this.expect("=")&&(t={type:Qs.AssignmentExpression,left:t,right:this.assignment(),operator:"="}),t},ternary:function(){var t,e,n=this.logicalOR()
return this.expect("?")&&(t=this.expression(),this.consume(":"))?(e=this.expression(),{type:Qs.ConditionalExpression,test:n,alternate:t,consequent:e}):n},logicalOR:function(){for(var t=this.logicalAND();this.expect("||");)t={type:Qs.LogicalExpression,operator:"||",left:t,right:this.logicalAND()}
return t},logicalAND:function(){for(var t=this.equality();this.expect("&&");)t={type:Qs.LogicalExpression,operator:"&&",left:t,right:this.equality()}
return t},equality:function(){for(var t,e=this.relational();t=this.expect("==","!=","===","!==");)e={type:Qs.BinaryExpression,operator:t.text,left:e,right:this.relational()}
return e},relational:function(){for(var t,e=this.additive();t=this.expect("<",">","<=",">=");)e={type:Qs.BinaryExpression,operator:t.text,left:e,right:this.additive()}
return e},additive:function(){for(var t,e=this.multiplicative();t=this.expect("+","-");)e={type:Qs.BinaryExpression,operator:t.text,left:e,right:this.multiplicative()}
return e},multiplicative:function(){for(var t,e=this.unary();t=this.expect("*","/","%");)e={type:Qs.BinaryExpression,operator:t.text,left:e,right:this.unary()}
return e},unary:function(){var t
return(t=this.expect("+","-","!"))?{type:Qs.UnaryExpression,operator:t.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var t
this.expect("(")?(t=this.filterChain(),this.consume(")")):this.expect("[")?t=this.arrayDeclaration():this.expect("{")?t=this.object():this.constants.hasOwnProperty(this.peek().text)?t=z(this.constants[this.consume().text]):this.peek().identifier?t=this.identifier():this.peek().constant?t=this.constant():this.throwError("not a primary expression",this.peek())
for(var e;e=this.expect("(","[",".");)"("===e.text?(t={type:Qs.CallExpression,callee:t,arguments:this.parseArguments()},this.consume(")")):"["===e.text?(t={type:Qs.MemberExpression,object:t,property:this.expression(),computed:!0},this.consume("]")):"."===e.text?t={type:Qs.MemberExpression,object:t,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE")
return t},filter:function(t){for(var e=[t],n={type:Qs.CallExpression,callee:this.identifier(),arguments:e,filter:!0};this.expect(":");)e.push(this.expression())
return n},parseArguments:function(){var t=[]
if(")"!==this.peekToken().text)do t.push(this.expression())
while(this.expect(","))
return t},identifier:function(){var t=this.consume()
return t.identifier||this.throwError("is not a valid identifier",t),{type:Qs.Identifier,name:t.text}},constant:function(){return{type:Qs.Literal,value:this.consume().value}},arrayDeclaration:function(){var t=[]
if("]"!==this.peekToken().text)do{if(this.peek("]"))break
t.push(this.expression())}while(this.expect(","))
return this.consume("]"),{type:Qs.ArrayExpression,elements:t}},object:function(){var t,e=[]
if("}"!==this.peekToken().text)do{if(this.peek("}"))break
t={type:Qs.Property,kind:"init"},this.peek().constant?t.key=this.constant():this.peek().identifier?t.key=this.identifier():this.throwError("invalid key",this.peek()),this.consume(":"),t.value=this.expression(),e.push(t)}while(this.expect(","))
return this.consume("}"),{type:Qs.ObjectExpression,properties:e}},throwError:function(t,e){throw Bs("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",e.text,t,e.index+1,this.text,this.text.substring(e.index))},consume:function(t){if(0===this.tokens.length)throw Bs("ueoe","Unexpected end of expression: {0}",this.text)
var e=this.expect(t)
return e||this.throwError("is unexpected, expecting ["+t+"]",this.peek()),e},peekToken:function(){if(0===this.tokens.length)throw Bs("ueoe","Unexpected end of expression: {0}",this.text)
return this.tokens[0]},peek:function(t,e,n,i){return this.peekAhead(0,t,e,n,i)},peekAhead:function(t,e,n,i,r){if(this.tokens.length>t){var s=this.tokens[t],o=s.text
if(o===e||o===n||o===i||o===r||!e&&!n&&!i&&!r)return s}return!1},expect:function(t,e,n,i){var r=this.peek(t,e,n,i)
return r?(this.tokens.shift(),r):!1},constants:{"true":{type:Qs.Literal,value:!0},"false":{type:Qs.Literal,value:!1},"null":{type:Qs.Literal,value:null},undefined:{type:Qs.Literal,value:n},"this":{type:Qs.ThisExpression}}},si.prototype={compile:function(t,e){var i=this,r=this.astBuilder.ast(t)
this.state={nextId:0,filters:{},expensiveChecks:e,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},Zn(r,i.$filter)
var o,a=""
if(this.stage="assign",o=ni(r)){this.state.computing="assign"
var l=this.nextId()
this.recurse(o,l),this.return_(l),a="fn.assign="+this.generateFunction("assign","s,v,l")}var u=ti(r.body)
i.stage="inputs",s(u,function(t,e){var n="fn"+e
i.state[n]={vars:[],body:[],own:{}},i.state.computing=n
var r=i.nextId()
i.recurse(t,r),i.return_(r),i.state.inputs.push(n),t.watchId=e}),this.state.computing="fn",this.stage="main",this.recurse(r)
var c='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+a+this.watchFns()+"return fn;",h=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",c)(this.$filter,Yn,Kn,Xn,Gn,Jn,t)
return this.state=this.stage=n,h.literal=ii(r),h.constant=ri(r),h},USE:"use",STRICT:"strict",watchFns:function(){var t=[],e=this.state.inputs,n=this
return s(e,function(e){t.push("var "+e+"="+n.generateFunction(e,"s"))}),e.length&&t.push("fn.inputs=["+e.join(",")+"];"),t.join("")},generateFunction:function(t,e){return"function("+e+"){"+this.varsPrefix(t)+this.body(t)+"};"},filterPrefix:function(){var t=[],e=this
return s(this.state.filters,function(n,i){t.push(n+"=$filter("+e.escape(i)+")")}),t.length?"var "+t.join(",")+";":""},varsPrefix:function(t){return this.state[t].vars.length?"var "+this.state[t].vars.join(",")+";":""},body:function(t){return this.state[t].body.join("")},recurse:function(t,e,i,r,o,a){var l,u,c,h,d=this
if(r=r||m,!a&&$(t.watchId))return e=e||this.nextId(),void this.if_("i",this.lazyAssign(e,this.computedMember("i",t.watchId)),this.lazyRecurse(t,e,i,r,o,!0))
switch(t.type){case Qs.Program:s(t.body,function(e,i){d.recurse(e.expression,n,n,function(t){u=t}),i!==t.body.length-1?d.current().body.push(u,";"):d.return_(u)})
break
case Qs.Literal:h=this.escape(t.value),this.assign(e,h),r(h)
break
case Qs.UnaryExpression:this.recurse(t.argument,n,n,function(t){u=t}),h=t.operator+"("+this.ifDefined(u,0)+")",this.assign(e,h),r(h)
break
case Qs.BinaryExpression:this.recurse(t.left,n,n,function(t){l=t}),this.recurse(t.right,n,n,function(t){u=t}),h="+"===t.operator?this.plus(l,u):"-"===t.operator?this.ifDefined(l,0)+t.operator+this.ifDefined(u,0):"("+l+")"+t.operator+"("+u+")",this.assign(e,h),r(h)
break
case Qs.LogicalExpression:e=e||this.nextId(),d.recurse(t.left,e),d.if_("&&"===t.operator?e:d.not(e),d.lazyRecurse(t.right,e)),r(e)
break
case Qs.ConditionalExpression:e=e||this.nextId(),d.recurse(t.test,e),d.if_(e,d.lazyRecurse(t.alternate,e),d.lazyRecurse(t.consequent,e)),r(e)
break
case Qs.Identifier:e=e||this.nextId(),i&&(i.context="inputs"===d.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",t.name)+"?l:s"),i.computed=!1,i.name=t.name),Yn(t.name),d.if_("inputs"===d.stage||d.not(d.getHasOwnProperty("l",t.name)),function(){d.if_("inputs"===d.stage||"s",function(){o&&1!==o&&d.if_(d.not(d.nonComputedMember("s",t.name)),d.lazyAssign(d.nonComputedMember("s",t.name),"{}")),d.assign(e,d.nonComputedMember("s",t.name))})},e&&d.lazyAssign(e,d.nonComputedMember("l",t.name))),(d.state.expensiveChecks||ai(t.name))&&d.addEnsureSafeObject(e),r(e)
break
case Qs.MemberExpression:l=i&&(i.context=this.nextId())||this.nextId(),e=e||this.nextId(),d.recurse(t.object,l,n,function(){d.if_(d.notNull(l),function(){t.computed?(u=d.nextId(),d.recurse(t.property,u),d.addEnsureSafeMemberName(u),o&&1!==o&&d.if_(d.not(d.computedMember(l,u)),d.lazyAssign(d.computedMember(l,u),"{}")),h=d.ensureSafeObject(d.computedMember(l,u)),d.assign(e,h),i&&(i.computed=!0,i.name=u)):(Yn(t.property.name),o&&1!==o&&d.if_(d.not(d.nonComputedMember(l,t.property.name)),d.lazyAssign(d.nonComputedMember(l,t.property.name),"{}")),h=d.nonComputedMember(l,t.property.name),(d.state.expensiveChecks||ai(t.property.name))&&(h=d.ensureSafeObject(h)),d.assign(e,h),i&&(i.computed=!1,i.name=t.property.name))},function(){d.assign(e,"undefined")}),r(e)},!!o)
break
case Qs.CallExpression:e=e||this.nextId(),t.filter?(u=d.filter(t.callee.name),c=[],s(t.arguments,function(t){var e=d.nextId()
d.recurse(t,e),c.push(e)}),h=u+"("+c.join(",")+")",d.assign(e,h),r(e)):(u=d.nextId(),l={},c=[],d.recurse(t.callee,u,l,function(){d.if_(d.notNull(u),function(){d.addEnsureSafeFunction(u),s(t.arguments,function(t){d.recurse(t,d.nextId(),n,function(t){c.push(d.ensureSafeObject(t))})}),l.name?(d.state.expensiveChecks||d.addEnsureSafeObject(l.context),h=d.member(l.context,l.name,l.computed)+"("+c.join(",")+")"):h=u+"("+c.join(",")+")",h=d.ensureSafeObject(h),d.assign(e,h)},function(){d.assign(e,"undefined")}),r(e)}))
break
case Qs.AssignmentExpression:if(u=this.nextId(),l={},!ei(t.left))throw Bs("lval","Trying to assing a value to a non l-value")
this.recurse(t.left,n,l,function(){d.if_(d.notNull(l.context),function(){d.recurse(t.right,u),d.addEnsureSafeObject(d.member(l.context,l.name,l.computed)),h=d.member(l.context,l.name,l.computed)+t.operator+u,d.assign(e,h),r(e||h)})},1)
break
case Qs.ArrayExpression:c=[],s(t.elements,function(t){d.recurse(t,d.nextId(),n,function(t){c.push(t)})}),h="["+c.join(",")+"]",this.assign(e,h),r(h)
break
case Qs.ObjectExpression:c=[],s(t.properties,function(t){d.recurse(t.value,d.nextId(),n,function(e){c.push(d.escape(t.key.type===Qs.Identifier?t.key.name:""+t.key.value)+":"+e)})}),h="{"+c.join(",")+"}",this.assign(e,h),r(h)
break
case Qs.ThisExpression:this.assign(e,"s"),r("s")
break
case Qs.NGValueParameter:this.assign(e,"v"),r("v")}},getHasOwnProperty:function(t,e){var n=t+"."+e,i=this.current().own
return i.hasOwnProperty(n)||(i[n]=this.nextId(!1,t+"&&("+this.escape(e)+" in "+t+")")),i[n]},assign:function(t,e){return t?(this.current().body.push(t,"=",e,";"),t):void 0},filter:function(t){return this.state.filters.hasOwnProperty(t)||(this.state.filters[t]=this.nextId(!0)),this.state.filters[t]},ifDefined:function(t,e){return"ifDefined("+t+","+this.escape(e)+")"},plus:function(t,e){return"plus("+t+","+e+")"},return_:function(t){this.current().body.push("return ",t,";")},if_:function(t,e,n){if(t===!0)e()
else{var i=this.current().body
i.push("if(",t,"){"),e(),i.push("}"),n&&(i.push("else{"),n(),i.push("}"))}},not:function(t){return"!("+t+")"},notNull:function(t){return t+"!=null"},nonComputedMember:function(t,e){return t+"."+e},computedMember:function(t,e){return t+"["+e+"]"},member:function(t,e,n){return n?this.computedMember(t,e):this.nonComputedMember(t,e)},addEnsureSafeObject:function(t){this.current().body.push(this.ensureSafeObject(t),";")},addEnsureSafeMemberName:function(t){this.current().body.push(this.ensureSafeMemberName(t),";")},addEnsureSafeFunction:function(t){this.current().body.push(this.ensureSafeFunction(t),";")},ensureSafeObject:function(t){return"ensureSafeObject("+t+",text)"},ensureSafeMemberName:function(t){return"ensureSafeMemberName("+t+",text)"},ensureSafeFunction:function(t){return"ensureSafeFunction("+t+",text)"},lazyRecurse:function(t,e,n,i,r,s){var o=this
return function(){o.recurse(t,e,n,i,r,s)}},lazyAssign:function(t,e){var n=this
return function(){n.assign(t,e)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)},escape:function(t){if(_(t))return"'"+t.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'"
if(C(t))return t.toString()
if(t===!0)return"true"
if(t===!1)return"false"
if(null===t)return"null"
if("undefined"==typeof t)return"undefined"
throw Bs("esc","IMPOSSIBLE")},nextId:function(t,e){var n="v"+this.state.nextId++
return t||this.current().vars.push(n+(e?"="+e:"")),n},current:function(){return this.state[this.state.computing]}},oi.prototype={compile:function(t,e){var n=this,i=this.astBuilder.ast(t)
this.expression=t,this.expensiveChecks=e,Zn(i,n.$filter)
var r,o;(r=ni(i))&&(o=this.recurse(r))
var a,l=ti(i.body)
l&&(a=[],s(l,function(t,e){var i=n.recurse(t)
t.input=i,a.push(i),t.watchId=e}))
var u=[]
s(i.body,function(t){u.push(n.recurse(t.expression))})
var c=0===i.body.length?function(){}:1===i.body.length?u[0]:function(t,e){var n
return s(u,function(i){n=i(t,e)}),n}
return o&&(c.assign=function(t,e,n){return o(t,n,e)}),a&&(c.inputs=a),c.literal=ii(i),c.constant=ri(i),c},recurse:function(t,e,i){var r,o,a,l=this
if(t.input)return this.inputs(t.input,t.watchId)
switch(t.type){case Qs.Literal:return this.value(t.value,e)
case Qs.UnaryExpression:return o=this.recurse(t.argument),this["unary"+t.operator](o,e)
case Qs.BinaryExpression:return r=this.recurse(t.left),o=this.recurse(t.right),this["binary"+t.operator](r,o,e)
case Qs.LogicalExpression:return r=this.recurse(t.left),o=this.recurse(t.right),this["binary"+t.operator](r,o,e)
case Qs.ConditionalExpression:return this["ternary?:"](this.recurse(t.test),this.recurse(t.alternate),this.recurse(t.consequent),e)
case Qs.Identifier:return Yn(t.name,l.expression),l.identifier(t.name,l.expensiveChecks||ai(t.name),e,i,l.expression)
case Qs.MemberExpression:return r=this.recurse(t.object,!1,!!i),t.computed||(Yn(t.property.name,l.expression),o=t.property.name),t.computed&&(o=this.recurse(t.property)),t.computed?this.computedMember(r,o,e,i,l.expression):this.nonComputedMember(r,o,l.expensiveChecks,e,i,l.expression)
case Qs.CallExpression:return a=[],s(t.arguments,function(t){a.push(l.recurse(t))}),t.filter&&(o=this.$filter(t.callee.name)),t.filter||(o=this.recurse(t.callee,!0)),t.filter?function(t,i,r,s){for(var l=[],u=0;u<a.length;++u)l.push(a[u](t,i,r,s))
var c=o.apply(n,l,s)
return e?{context:n,name:n,value:c}:c}:function(t,n,i,r){var s,u=o(t,n,i,r)
if(null!=u.value){Kn(u.context,l.expression),Xn(u.value,l.expression)
for(var c=[],h=0;h<a.length;++h)c.push(Kn(a[h](t,n,i,r),l.expression))
s=Kn(u.value.apply(u.context,c),l.expression)}return e?{value:s}:s}
case Qs.AssignmentExpression:return r=this.recurse(t.left,!0,1),o=this.recurse(t.right),function(t,n,i,s){var a=r(t,n,i,s),u=o(t,n,i,s)
return Kn(a.value,l.expression),a.context[a.name]=u,e?{value:u}:u}
case Qs.ArrayExpression:return a=[],s(t.elements,function(t){a.push(l.recurse(t))}),function(t,n,i,r){for(var s=[],o=0;o<a.length;++o)s.push(a[o](t,n,i,r))
return e?{value:s}:s}
case Qs.ObjectExpression:return a=[],s(t.properties,function(t){a.push({key:t.key.type===Qs.Identifier?t.key.name:""+t.key.value,value:l.recurse(t.value)})}),function(t,n,i,r){for(var s={},o=0;o<a.length;++o)s[a[o].key]=a[o].value(t,n,i,r)
return e?{value:s}:s}
case Qs.ThisExpression:return function(t){return e?{value:t}:t}
case Qs.NGValueParameter:return function(t,n,i){return e?{value:i}:i}}},"unary+":function(t,e){return function(n,i,r,s){var o=t(n,i,r,s)
return o=$(o)?+o:0,e?{value:o}:o}},"unary-":function(t,e){return function(n,i,r,s){var o=t(n,i,r,s)
return o=$(o)?-o:0,e?{value:o}:o}},"unary!":function(t,e){return function(n,i,r,s){var o=!t(n,i,r,s)
return e?{value:o}:o}},"binary+":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o),l=e(i,r,s,o),u=Jn(a,l)
return n?{value:u}:u}},"binary-":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o),l=e(i,r,s,o),u=($(a)?a:0)-($(l)?l:0)
return n?{value:u}:u}},"binary*":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)*e(i,r,s,o)
return n?{value:a}:a}},"binary/":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)/e(i,r,s,o)
return n?{value:a}:a}},"binary%":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)%e(i,r,s,o)
return n?{value:a}:a}},"binary===":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)===e(i,r,s,o)
return n?{value:a}:a}},"binary!==":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)!==e(i,r,s,o)
return n?{value:a}:a}},"binary==":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)==e(i,r,s,o)
return n?{value:a}:a}},"binary!=":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)!=e(i,r,s,o)
return n?{value:a}:a}},"binary<":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)<e(i,r,s,o)
return n?{value:a}:a}},"binary>":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)>e(i,r,s,o)
return n?{value:a}:a}},"binary<=":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)<=e(i,r,s,o)
return n?{value:a}:a}},"binary>=":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)>=e(i,r,s,o)
return n?{value:a}:a}},"binary&&":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)&&e(i,r,s,o)
return n?{value:a}:a}},"binary||":function(t,e,n){return function(i,r,s,o){var a=t(i,r,s,o)||e(i,r,s,o)
return n?{value:a}:a}},"ternary?:":function(t,e,n,i){return function(r,s,o,a){var l=t(r,s,o,a)?e(r,s,o,a):n(r,s,o,a)
return i?{value:l}:l}},value:function(t,e){return function(){return e?{context:n,name:n,value:t}:t}},identifier:function(t,e,i,r,s){return function(o,a){var l=a&&t in a?a:o
r&&1!==r&&l&&!l[t]&&(l[t]={})
var u=l?l[t]:n
return e&&Kn(u,s),i?{context:l,name:t,value:u}:u}},computedMember:function(t,e,n,i,r){return function(s,o,a,l){var u,c,h=t(s,o,a,l)
return null!=h&&(u=e(s,o,a,l),Yn(u,r),i&&1!==i&&h&&!h[u]&&(h[u]={}),c=h[u],Kn(c,r)),n?{context:h,name:u,value:c}:c}},nonComputedMember:function(t,e,i,r,s,o){return function(a,l,u,c){var h=t(a,l,u,c)
s&&1!==s&&h&&!h[e]&&(h[e]={})
var d=null!=h?h[e]:n
return(i||ai(e))&&Kn(d,o),r?{context:h,name:e,value:d}:d}},inputs:function(t,e){return function(n,i,r,s){return s?s[e]:t(n,i,r)}}}
var Zs=function(t,e,n){this.lexer=t,this.$filter=e,this.options=n,this.ast=new Qs(this.lexer),this.astCompiler=n.csp?new oi(this.ast,e):new si(this.ast,e)}
Zs.prototype={constructor:Zs,parse:function(t){return this.astCompiler.compile(t,this.options.expensiveChecks)}}
var to=(ge(),ge(),Object.prototype.valueOf),eo=i("$sce"),no={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Es=i("$compile"),io=e.createElement("a"),ro=Ci(t.location.href)
Di.$inject=["$document"],Si.$inject=["$provide"],Ni.$inject=["$locale"],Pi.$inject=["$locale"]
var so=".",oo={yyyy:Ri("FullYear",4),yy:Ri("FullYear",2,0,!0),y:Ri("FullYear",1),MMMM:Fi("Month"),MMM:Fi("Month",!0),MM:Ri("Month",2,1),M:Ri("Month",1,1),dd:Ri("Date",2),d:Ri("Date",1),HH:Ri("Hours",2),H:Ri("Hours",1),hh:Ri("Hours",2,-12),h:Ri("Hours",1,-12),mm:Ri("Minutes",2),m:Ri("Minutes",1),ss:Ri("Seconds",2),s:Ri("Seconds",1),sss:Ri("Milliseconds",3),EEEE:Fi("Day"),EEE:Fi("Day",!0),a:Vi,Z:zi,ww:Li(2),w:Li(1),G:Bi,GG:Bi,GGG:Bi,GGGG:Ui},ao=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,lo=/^\-?\d+$/
Yi.$inject=["$locale"]
var uo=v(br),co=v($r)
Gi.$inject=["$parse"]
var ho=v({restrict:"E",compile:function(t,e){return e.href||e.xlinkHref?void 0:function(t,e){if("a"===e[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===Ir.call(e.prop("href"))?"xlink:href":"href"
e.on("click",function(t){e.attr(n)||t.preventDefault()})}}}}),po={}
s(ds,function(t,e){function n(t,n,r){t.$watch(r[i],function(t){r.$set(e,!!t)})}if("multiple"!=t){var i=cn("ng-"+e),r=n
"checked"===t&&(r=function(t,e,r){r.ngModel!==r[i]&&n(t,e,r)}),po[i]=function(){return{restrict:"A",priority:100,link:r}}}}),s(fs,function(t,e){po[e]=function(){return{priority:100,link:function(t,n,i){if("ngPattern"===e&&"/"==i.ngPattern.charAt(0)){var r=i.ngPattern.match(gr)
if(r)return void i.$set("ngPattern",new RegExp(r[1],r[2]))}t.$watch(i[e],function(t){i.$set(e,t)})}}}}),s(["src","srcset","href"],function(t){var e=cn("ng-"+t)
po[e]=function(){return{priority:99,link:function(n,i,r){var s=t,o=t
"href"===t&&"[object SVGAnimatedString]"===Ir.call(i.prop("href"))&&(o="xlinkHref",r.$attr[o]="xlink:href",s=null),r.$observe(e,function(e){return e?(r.$set(o,e),void(_r&&s&&i.prop(s,r[o]))):void("href"===t&&r.$set(o,null))})}}}})
var fo={$addControl:m,$$renameControl:Qi,$removeControl:m,$setValidity:m,$setDirty:m,$setPristine:m,$setSubmitted:m},mo="ng-submitted"
Zi.$inject=["$element","$attrs","$scope","$animate","$interpolate"]
var go=function(t){return["$timeout","$parse",function(e,i){function r(t){return""===t?i('this[""]').assign:i(t).assign||m}var s={name:"form",restrict:t?"EAC":"E",require:["form","^^?form"],controller:Zi,compile:function(i,s){i.addClass(Go).addClass(Ko)
var o=s.name?"name":t&&s.ngForm?"ngForm":!1
return{pre:function(t,i,s,a){var l=a[0]
if(!("action"in s)){var u=function(e){t.$apply(function(){l.$commitViewValue(),l.$setSubmitted()}),e.preventDefault()}
ts(i[0],"submit",u),i.on("$destroy",function(){e(function(){es(i[0],"submit",u)},0,!1)})}var c=a[1]||l.$$parentForm
c.$addControl(l)
var d=o?r(l.$name):m
o&&(d(t,l),s.$observe(o,function(e){l.$name!==e&&(d(t,n),l.$$parentForm.$$renameControl(l,e),(d=r(l.$name))(t,l))})),i.on("$destroy",function(){l.$$parentForm.$removeControl(l),d(t,n),h(l,fo)})}}}}
return s}]},vo=go(),bo=go(!0),yo=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$o=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,wo=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,xo=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,_o=/^(\d{4})-(\d{2})-(\d{2})$/,Co=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ko=/^(\d{4})-W(\d\d)$/,To=/^(\d{4})-(\d\d)$/,Do=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Eo={text:er,date:sr("date",_o,rr(_o,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":sr("datetimelocal",Co,rr(Co,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:sr("time",Do,rr(Do,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:sr("week",ko,ir,"yyyy-Www"),month:sr("month",To,rr(To,["yyyy","MM"]),"yyyy-MM"),number:ar,url:lr,email:ur,radio:cr,checkbox:dr,hidden:m,button:m,submit:m,reset:m,file:m},So=["$browser","$sniffer","$filter","$parse",function(t,e,n,i){return{restrict:"E",require:["?ngModel"],link:{pre:function(r,s,o,a){a[0]&&(Eo[br(o.type)]||Eo.text)(r,s,o,a[0],e,t,n,i)}}}}],Io=/^(true|false|\d+)$/,Mo=function(){return{restrict:"A",priority:100,compile:function(t,e){return Io.test(e.ngValue)?function(t,e,n){n.$set("value",t.$eval(n.ngValue))}:function(t,e,n){t.$watch(n.ngValue,function(t){n.$set("value",t)})}}}},Ao=["$compile",function(t){return{restrict:"AC",compile:function(e){return t.$$addBindingClass(e),function(e,n,i){t.$$addBindingInfo(n,i.ngBind),n=n[0],e.$watch(i.ngBind,function(t){n.textContent=y(t)?"":t})}}}}],Oo=["$interpolate","$compile",function(t,e){return{compile:function(n){return e.$$addBindingClass(n),function(n,i,r){var s=t(i.attr(r.$attr.ngBindTemplate))
e.$$addBindingInfo(i,s.expressions),i=i[0],r.$observe("ngBindTemplate",function(t){i.textContent=y(t)?"":t})}}}}],No=["$sce","$parse","$compile",function(t,e,n){return{restrict:"A",compile:function(i,r){var s=e(r.ngBindHtml),o=e(r.ngBindHtml,function(t){return(t||"").toString()})
return n.$$addBindingClass(i),function(e,i,r){n.$$addBindingInfo(i,r.ngBindHtml),e.$watch(o,function(){i.html(t.getTrustedHtml(s(e))||"")})}}}}],Po=v({restrict:"A",require:"ngModel",link:function(t,e,n,i){i.$viewChangeListeners.push(function(){t.$eval(n.ngChange)})}}),Ho=pr("",!0),jo=pr("Odd",0),Ro=pr("Even",1),Fo=Ji({compile:function(t,e){e.$set("ngCloak",n),t.removeClass("ng-cloak")}}),zo=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Wo={},qo={blur:!0,focus:!0}
s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(t){var e=cn("ng-"+t)
Wo[e]=["$parse","$rootScope",function(n,i){return{restrict:"A",compile:function(r,s){var o=n(s[e],null,!0)
return function(e,n){n.on(t,function(n){var r=function(){o(e,{$event:n})}
qo[t]&&i.$$phase?e.$evalAsync(r):e.$apply(r)})}}}}]})
var Lo=["$animate",function(t){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,i,r,s,o){var a,l,u
n.$watch(r.ngIf,function(n){n?l||o(function(n,s){l=s,n[n.length++]=e.createComment(" end ngIf: "+r.ngIf+" "),a={clone:n},t.enter(n,i.parent(),i)}):(u&&(u.remove(),u=null),l&&(l.$destroy(),l=null),a&&(u=me(a.clone),t.leave(u).then(function(){u=null}),a=null))})}}}],Vo=["$templateRequest","$anchorScroll","$animate",function(t,e,n){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Or.noop,compile:function(i,r){var s=r.ngInclude||r.src,o=r.onload||"",a=r.autoscroll
return function(i,r,l,u,c){var h,d,p,f=0,m=function(){d&&(d.remove(),d=null),h&&(h.$destroy(),h=null),p&&(n.leave(p).then(function(){d=null}),d=p,p=null)}
i.$watch(s,function(s){var l=function(){!$(a)||a&&!i.$eval(a)||e()},d=++f
s?(t(s,!0).then(function(t){if(d===f){var e=i.$new()
u.template=t
var a=c(e,function(t){m(),n.enter(t,null,r).then(l)})
h=e,p=a,h.$emit("$includeContentLoaded",s),i.$eval(o)}},function(){d===f&&(m(),i.$emit("$includeContentError",s))}),i.$emit("$includeContentRequested",s)):(m(),u.template=null)})}}}}],Bo=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(n,i,r,s){return/SVG/.test(i[0].toString())?(i.empty(),void t(Te(s.template,e).childNodes)(n,function(t){i.append(t)},{futureParentElement:i})):(i.html(s.template),void t(i.contents())(n))}}}],Uo=Ji({priority:450,compile:function(){return{pre:function(t,e,n){t.$eval(n.ngInit)}}}}),Yo=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(t,e,i,r){var o=e.attr(i.$attr.ngList)||", ",a="false"!==i.ngTrim,l=a?Rr(o):o,u=function(t){if(!y(t)){var e=[]
return t&&s(t.split(l),function(t){t&&e.push(a?Rr(t):t)}),e}}
r.$parsers.push(u),r.$formatters.push(function(t){return Hr(t)?t.join(o):n}),r.$isEmpty=function(t){return!t||!t.length}}}},Ko="ng-valid",Xo="ng-invalid",Go="ng-pristine",Jo="ng-dirty",Qo="ng-untouched",Zo="ng-touched",ta="ng-pending",ea=i("ngModel"),na=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(t,e,i,r,o,a,l,u,c,h){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=n,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=n,this.$name=h(i.name||"",!1)(t),this.$$parentForm=fo
var d,p=o(i.ngModel),f=p.assign,g=p,v=f,b=null,w=this
this.$$setOptions=function(t){if(w.$options=t,t&&t.getterSetter){var e=o(i.ngModel+"()"),n=o(i.ngModel+"($$$p)")
g=function(t){var n=p(t)
return T(n)&&(n=e(t)),n},v=function(t){T(p(t))?n(t,{$$$p:w.$modelValue}):f(t,w.$modelValue)}}else if(!p.assign)throw ea("nonassign","Expression '{0}' is non-assignable. Element: {1}",i.ngModel,Q(r))},this.$render=m,this.$isEmpty=function(t){return y(t)||""===t||null===t||t!==t}
var x=0
fr({ctrl:this,$element:r,set:function(t,e){t[e]=!0},unset:function(t,e){delete t[e]},$animate:a}),this.$setPristine=function(){w.$dirty=!1,w.$pristine=!0,a.removeClass(r,Jo),a.addClass(r,Go)},this.$setDirty=function(){w.$dirty=!0,w.$pristine=!1,a.removeClass(r,Go),a.addClass(r,Jo),w.$$parentForm.$setDirty()},this.$setUntouched=function(){w.$touched=!1,w.$untouched=!0,a.setClass(r,Qo,Zo)},this.$setTouched=function(){w.$touched=!0,w.$untouched=!1,a.setClass(r,Zo,Qo)},this.$rollbackViewValue=function(){l.cancel(b),w.$viewValue=w.$$lastCommittedViewValue,w.$render()},this.$validate=function(){if(!C(w.$modelValue)||!isNaN(w.$modelValue)){var t=w.$$lastCommittedViewValue,e=w.$$rawModelValue,i=w.$valid,r=w.$modelValue,s=w.$options&&w.$options.allowInvalid
w.$$runValidators(e,t,function(t){s||i===t||(w.$modelValue=t?e:n,w.$modelValue!==r&&w.$$writeModelToScope())})}},this.$$runValidators=function(t,e,i){function r(){var t=w.$$parserName||"parse"
return y(d)?(l(t,null),!0):(d||(s(w.$validators,function(t,e){l(e,null)}),s(w.$asyncValidators,function(t,e){l(e,null)})),l(t,d),d)}function o(){var n=!0
return s(w.$validators,function(i,r){var s=i(t,e)
n=n&&s,l(r,s)}),n?!0:(s(w.$asyncValidators,function(t,e){l(e,null)}),!1)}function a(){var i=[],r=!0
s(w.$asyncValidators,function(s,o){var a=s(t,e)
if(!N(a))throw ea("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",a)
l(o,n),i.push(a.then(function(){l(o,!0)},function(){r=!1,l(o,!1)}))}),i.length?c.all(i).then(function(){u(r)},m):u(!0)}function l(t,e){h===x&&w.$setValidity(t,e)}function u(t){h===x&&i(t)}x++
var h=x
return r()&&o()?void a():void u(!1)},this.$commitViewValue=function(){var t=w.$viewValue
l.cancel(b),(w.$$lastCommittedViewValue!==t||""===t&&w.$$hasNativeValidators)&&(w.$$lastCommittedViewValue=t,w.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function e(){w.$modelValue!==o&&w.$$writeModelToScope()}var i=w.$$lastCommittedViewValue,r=i
if(d=y(r)?n:!0)for(var s=0;s<w.$parsers.length;s++)if(r=w.$parsers[s](r),y(r)){d=!1
break}C(w.$modelValue)&&isNaN(w.$modelValue)&&(w.$modelValue=g(t))
var o=w.$modelValue,a=w.$options&&w.$options.allowInvalid
w.$$rawModelValue=r,a&&(w.$modelValue=r,e()),w.$$runValidators(r,w.$$lastCommittedViewValue,function(t){a||(w.$modelValue=t?r:n,e())})},this.$$writeModelToScope=function(){v(t,w.$modelValue),s(w.$viewChangeListeners,function(t){try{t()}catch(n){e(n)}})},this.$setViewValue=function(t,e){w.$viewValue=t,(!w.$options||w.$options.updateOnDefault)&&w.$$debounceViewValueCommit(e)},this.$$debounceViewValueCommit=function(e){var n,i=0,r=w.$options
r&&$(r.debounce)&&(n=r.debounce,C(n)?i=n:C(n[e])?i=n[e]:C(n["default"])&&(i=n["default"])),l.cancel(b),i?b=l(function(){w.$commitViewValue()},i):u.$$phase?w.$commitViewValue():t.$apply(function(){w.$commitViewValue()})},t.$watch(function(){var e=g(t)
if(e!==w.$modelValue&&(w.$modelValue===w.$modelValue||e===e)){w.$modelValue=w.$$rawModelValue=e,d=n
for(var i=w.$formatters,r=i.length,s=e;r--;)s=i[r](s)
w.$viewValue!==s&&(w.$viewValue=w.$$lastCommittedViewValue=s,w.$render(),w.$$runValidators(e,s,m))}return e})}],ia=["$rootScope",function(t){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:na,priority:1,compile:function(e){return e.addClass(Go).addClass(Qo).addClass(Ko),{pre:function(t,e,n,i){var r=i[0],s=i[1]||r.$$parentForm
r.$$setOptions(i[2]&&i[2].$options),s.$addControl(r),n.$observe("name",function(t){r.$name!==t&&r.$$parentForm.$$renameControl(r,t)}),t.$on("$destroy",function(){r.$$parentForm.$removeControl(r)})},post:function(e,n,i,r){var s=r[0]
s.$options&&s.$options.updateOn&&n.on(s.$options.updateOn,function(t){s.$$debounceViewValueCommit(t&&t.type)}),n.on("blur",function(){s.$touched||(t.$$phase?e.$evalAsync(s.$setTouched):e.$apply(s.$setTouched))})}}}}}],ra=/(\s+|^)default(\s+|$)/,sa=function(){return{restrict:"A",controller:["$scope","$attrs",function(t,e){var n=this
this.$options=z(t.$eval(e.ngModelOptions)),$(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=Rr(this.$options.updateOn.replace(ra,function(){return n.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},oa=Ji({terminal:!0,priority:1e3}),aa=i("ngOptions"),la=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,ua=["$compile","$parse",function(t,n){function i(t,e,i){function s(t,e,n,i,r){this.selectValue=t,this.viewValue=e,this.label=n,this.group=i,this.disabled=r}function o(t){var e
if(!u&&r(t))e=t
else{e=[]
for(var n in t)t.hasOwnProperty(n)&&"$"!==n.charAt(0)&&e.push(n)}return e}var a=t.match(la)
if(!a)throw aa("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",t,Q(e))
var l=a[5]||a[7],u=a[6],c=/ as /.test(a[0])&&a[1],h=a[9],d=n(a[2]?a[1]:l),p=c&&n(c),f=p||d,m=h&&n(h),g=h?function(t,e){return m(i,e)}:function(t){return Ke(t)},v=function(t,e){return g(t,_(t,e))},b=n(a[2]||a[1]),y=n(a[3]||""),$=n(a[4]||""),w=n(a[8]),x={},_=u?function(t,e){return x[u]=e,x[l]=t,x}:function(t){return x[l]=t,x}
return{trackBy:h,getTrackByValue:v,getWatchables:n(w,function(t){var e=[]
t=t||[]
for(var n=o(t),r=n.length,s=0;r>s;s++){var l=t===n?s:n[s],u=(t[l],_(t[l],l)),c=g(t[l],u)
if(e.push(c),a[2]||a[1]){var h=b(i,u)
e.push(h)}if(a[4]){var d=$(i,u)
e.push(d)}}return e}),getOptions:function(){for(var t=[],e={},n=w(i)||[],r=o(n),a=r.length,l=0;a>l;l++){var u=n===r?l:r[l],c=n[u],d=_(c,u),p=f(i,d),m=g(p,d),x=b(i,d),C=y(i,d),k=$(i,d),T=new s(m,p,x,C,k)
t.push(T),e[m]=T}return{items:t,selectValueMap:e,getOptionFromViewValue:function(t){return e[v(t)]},getViewValueFromOption:function(t){return h?Or.copy(t.viewValue):t.viewValue}}}}}var o=e.createElement("option"),a=e.createElement("optgroup")
return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(e,n,r,l){function u(t,e){t.element=e,e.disabled=t.disabled,t.value!==e.value&&(e.value=t.selectValue),t.label!==e.label&&(e.label=t.label,e.textContent=t.label)}function c(t,e,n,i){var r
return e&&br(e.nodeName)===n?r=e:(r=i.cloneNode(!1),e?t.insertBefore(r,e):t.appendChild(r)),r}function h(t){for(var e;t;)e=t.nextSibling,qe(t),t=e}function d(t){var e=m&&m[0],n=x&&x[0]
if(e||n)for(;t&&(t===e||t===n);)t=t.nextSibling
return t}function p(){var t=_&&g.readValue()
_=C.getOptions()
var e={},i=n[0].firstChild
if(w&&n.prepend(m),i=d(i),_.items.forEach(function(t){var r,s,l
t.group?(r=e[t.group],r||(s=c(n[0],i,"optgroup",a),i=s.nextSibling,s.label=t.group,r=e[t.group]={groupElement:s,currentOptionElement:s.firstChild}),l=c(r.groupElement,r.currentOptionElement,"option",o),u(t,l),r.currentOptionElement=l.nextSibling):(l=c(n[0],i,"option",o),u(t,l),i=l.nextSibling)}),Object.keys(e).forEach(function(t){h(e[t].currentOptionElement)}),h(i),f.$render(),!f.$isEmpty(t)){var r=g.readValue();(C.trackBy?q(t,r):t===r)||(f.$setViewValue(r),f.$render())}}var f=l[1]
if(f){for(var m,g=l[0],v=r.multiple,b=0,y=n.children(),$=y.length;$>b;b++)if(""===y[b].value){m=y.eq(b)
break}var w=!!m,x=Cr(o.cloneNode(!1))
x.val("?")
var _,C=i(r.ngOptions,n,e),k=function(){w||n.prepend(m),n.val(""),m.prop("selected",!0),m.attr("selected",!0)},T=function(){w||m.remove()},D=function(){n.prepend(x),n.val("?"),x.prop("selected",!0),x.attr("selected",!0)},E=function(){x.remove()}
v?(f.$isEmpty=function(t){return!t||0===t.length},g.writeValue=function(t){_.items.forEach(function(t){t.element.selected=!1}),t&&t.forEach(function(t){var e=_.getOptionFromViewValue(t)
e&&!e.disabled&&(e.element.selected=!0)})},g.readValue=function(){var t=n.val()||[],e=[]
return s(t,function(t){var n=_.selectValueMap[t]
n&&!n.disabled&&e.push(_.getViewValueFromOption(n))}),e},C.trackBy&&e.$watchCollection(function(){return Hr(f.$viewValue)?f.$viewValue.map(function(t){return C.getTrackByValue(t)}):void 0},function(){f.$render()})):(g.writeValue=function(t){var e=_.getOptionFromViewValue(t)
e&&!e.disabled?n[0].value!==e.selectValue&&(E(),T(),n[0].value=e.selectValue,e.element.selected=!0,e.element.setAttribute("selected","selected")):null===t||w?(E(),k()):(T(),D())},g.readValue=function(){var t=_.selectValueMap[n.val()]
return t&&!t.disabled?(T(),E(),_.getViewValueFromOption(t)):null},C.trackBy&&e.$watch(function(){return C.getTrackByValue(f.$viewValue)},function(){f.$render()})),w?(m.remove(),t(m)(e),m.removeClass("ng-scope")):m=Cr(o.cloneNode(!1)),p(),e.$watchCollection(C.getWatchables,p)}}}}],ca=["$locale","$interpolate","$log",function(t,e,n){var i=/{}/g,r=/^when(Minus)?(.+)$/
return{link:function(o,a,l){function u(t){a.text(t||"")}var c,h=l.count,d=l.$attr.when&&a.attr(l.$attr.when),p=l.offset||0,f=o.$eval(d)||{},g={},v=e.startSymbol(),b=e.endSymbol(),$=v+h+"-"+p+b,w=Or.noop
s(l,function(t,e){var n=r.exec(e)
if(n){var i=(n[1]?"-":"")+br(n[2])
f[i]=a.attr(l.$attr[e])}}),s(f,function(t,n){g[n]=e(t.replace(i,$))}),o.$watch(h,function(e){var i=parseFloat(e),r=isNaN(i)
if(r||i in f||(i=t.pluralCat(i-p)),i!==c&&!(r&&C(c)&&isNaN(c))){w()
var s=g[i]
y(s)?(null!=e&&n.debug("ngPluralize: no rule defined for '"+i+"' in "+d),w=m,u()):w=o.$watch(s,u),c=i}})}}}],ha=["$parse","$animate",function(t,o){var a="$$NG_REMOVED",l=i("ngRepeat"),u=function(t,e,n,i,r,s,o){t[n]=i,r&&(t[r]=s),t.$index=e,t.$first=0===e,t.$last=e===o-1,t.$middle=!(t.$first||t.$last),t.$odd=!(t.$even=0===(1&e))},c=function(t){return t.clone[0]},h=function(t){return t.clone[t.clone.length-1]}
return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(i,d){var p=d.ngRepeat,f=e.createComment(" end ngRepeat: "+p+" "),m=p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)
if(!m)throw l("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",p)
var g=m[1],v=m[2],b=m[3],y=m[4]
if(m=g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!m)throw l("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",g)
var $=m[3]||m[1],w=m[2]
if(b&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(b)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(b)))throw l("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",b)
var x,_,C,k,T={$id:Ke}
return y?x=t(y):(C=function(t,e){return Ke(e)},k=function(t){return t}),function(t,e,i,d,m){x&&(_=function(e,n,i){return w&&(T[w]=e),T[$]=n,T.$index=i,x(t,T)})
var g=ge()
t.$watchCollection(v,function(i){var d,v,y,x,T,D,E,S,I,M,A,O,N=e[0],P=ge()
if(b&&(t[b]=i),r(i))I=i,S=_||C
else{S=_||k,I=[]
for(var H in i)yr.call(i,H)&&"$"!==H.charAt(0)&&I.push(H)}for(x=I.length,A=new Array(x),d=0;x>d;d++)if(T=i===I?d:I[d],D=i[T],E=S(T,D,d),g[E])M=g[E],delete g[E],P[E]=M,A[d]=M
else{if(P[E])throw s(A,function(t){t&&t.scope&&(g[t.id]=t)}),l("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",p,E,D)
A[d]={id:E,scope:n,clone:n},P[E]=!0}for(var j in g){if(M=g[j],O=me(M.clone),o.leave(O),O[0].parentNode)for(d=0,v=O.length;v>d;d++)O[d][a]=!0
M.scope.$destroy()}for(d=0;x>d;d++)if(T=i===I?d:I[d],D=i[T],M=A[d],M.scope){y=N
do y=y.nextSibling
while(y&&y[a])
c(M)!=y&&o.move(me(M.clone),null,Cr(N)),N=h(M),u(M.scope,d,$,D,w,T,x)}else m(function(t,e){M.scope=e
var n=f.cloneNode(!1)
t[t.length++]=n,o.enter(t,null,Cr(N)),N=n,M.clone=t,P[M.id]=M,u(M.scope,d,$,D,w,T,x)})
g=P})}}}}],da="ng-hide",pa="ng-hide-animate",fa=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,i){e.$watch(i.ngShow,function(e){t[e?"removeClass":"addClass"](n,da,{tempClasses:pa})})}}}],ma=["$animate",function(t){return{restrict:"A",multiElement:!0,link:function(e,n,i){e.$watch(i.ngHide,function(e){t[e?"addClass":"removeClass"](n,da,{tempClasses:pa})})}}}],ga=Ji(function(t,e,n){t.$watch(n.ngStyle,function(t,n){n&&t!==n&&s(n,function(t,n){e.css(n,"")}),t&&e.css(t)},!0)}),va=["$animate",function(t){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,i,r,o){var a=r.ngSwitch||r.on,l=[],u=[],c=[],h=[],d=function(t,e){return function(){t.splice(e,1)}}
n.$watch(a,function(n){var i,r
for(i=0,r=c.length;r>i;++i)t.cancel(c[i])
for(c.length=0,i=0,r=h.length;r>i;++i){var a=me(u[i].clone)
h[i].$destroy()
var p=c[i]=t.leave(a)
p.then(d(c,i))}u.length=0,h.length=0,(l=o.cases["!"+n]||o.cases["?"])&&s(l,function(n){n.transclude(function(i,r){h.push(r)
var s=n.element
i[i.length++]=e.createComment(" end ngSwitchWhen: ")
var o={clone:i}
u.push(o),t.enter(i,s.parent(),s)})})})}}}],ba=Ji({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,i,r){i.cases["!"+n.ngSwitchWhen]=i.cases["!"+n.ngSwitchWhen]||[],i.cases["!"+n.ngSwitchWhen].push({transclude:r,element:e})}}),ya=Ji({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(t,e,n,i,r){i.cases["?"]=i.cases["?"]||[],i.cases["?"].push({transclude:r,element:e})}}),$a=Ji({restrict:"EAC",link:function(t,e,n,r,s){if(!s)throw i("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",Q(e))
s(function(t){e.empty(),e.append(t)})}}),wa=["$templateCache",function(t){return{restrict:"E",terminal:!0,compile:function(e,n){if("text/ng-template"==n.type){var i=n.id,r=e[0].text
t.put(i,r)}}}}],xa={$setViewValue:m,$render:m},_a=["$element","$scope","$attrs",function(t,i){var r=this,s=new Xe
r.ngModelCtrl=xa,r.unknownOption=Cr(e.createElement("option")),r.renderUnknownOption=function(e){var n="? "+Ke(e)+" ?"
r.unknownOption.val(n),t.prepend(r.unknownOption),t.val(n)},i.$on("$destroy",function(){r.renderUnknownOption=m}),r.removeUnknownOption=function(){r.unknownOption.parent()&&r.unknownOption.remove()},r.readValue=function(){return r.removeUnknownOption(),t.val()},r.writeValue=function(e){r.hasOption(e)?(r.removeUnknownOption(),t.val(e),""===e&&r.emptyOption.prop("selected",!0)):null==e&&r.emptyOption?(r.removeUnknownOption(),t.val("")):r.renderUnknownOption(e)},r.addOption=function(t,e){pe(t,'"option value"'),""===t&&(r.emptyOption=e)
var n=s.get(t)||0
s.put(t,n+1)},r.removeOption=function(t){var e=s.get(t)
e&&(1===e?(s.remove(t),""===t&&(r.emptyOption=n)):s.put(t,e-1))},r.hasOption=function(t){return!!s.get(t)}}],Ca=function(){return{restrict:"E",require:["select","?ngModel"],controller:_a,link:function(t,e,n,i){var r=i[1]
if(r){var o=i[0]
if(o.ngModelCtrl=r,r.$render=function(){o.writeValue(r.$viewValue)},e.on("change",function(){t.$apply(function(){r.$setViewValue(o.readValue())})}),n.multiple){o.readValue=function(){var t=[]
return s(e.find("option"),function(e){e.selected&&t.push(e.value)}),t},o.writeValue=function(t){var n=new Xe(t)
s(e.find("option"),function(t){t.selected=$(n.get(t.value))})}
var a,l=0/0
t.$watch(function(){l!==r.$viewValue||q(a,r.$viewValue)||(a=W(r.$viewValue),r.$render()),l=r.$viewValue}),r.$isEmpty=function(t){return!t||0===t.length}}}}}},ka=["$interpolate",function(t){function e(t){t[0].hasAttribute("selected")&&(t[0].selected=!0)}return{restrict:"E",priority:100,compile:function(n,i){if($(i.value))var r=t(i.value,!0)
else{var s=t(n.text(),!0)
s||i.$set("value",n.text())}return function(t,n,i){function o(t){u.addOption(t,n),u.ngModelCtrl.$render(),e(n)}var a="$selectController",l=n.parent(),u=l.data(a)||l.parent().data(a)
if(u&&u.ngModelCtrl){if(r){var c
i.$observe("value",function(t){$(c)&&u.removeOption(c),c=t,o(t)})}else s?t.$watch(s,function(t,e){i.$set("value",t),e!==t&&u.removeOption(e),o(t)}):o(i.value)
n.on("$destroy",function(){u.removeOption(i.value),u.ngModelCtrl.$render()})}}}}}],Ta=v({restrict:"E",terminal:!1}),Da=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,i){i&&(n.required=!0,i.$validators.required=function(t,e){return!n.required||!i.$isEmpty(e)},n.$observe("required",function(){i.$validate()}))}}},Ea=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,r,s){if(s){var o,a=r.ngPattern||r.pattern
r.$observe("pattern",function(t){if(_(t)&&t.length>0&&(t=new RegExp("^"+t+"$")),t&&!t.test)throw i("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",a,t,Q(e))
o=t||n,s.$validate()}),s.$validators.pattern=function(t,e){return s.$isEmpty(e)||y(o)||o.test(e)}}}}},Sa=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,i){if(i){var r=-1
n.$observe("maxlength",function(t){var e=p(t)
r=isNaN(e)?-1:e,i.$validate()}),i.$validators.maxlength=function(t,e){return 0>r||i.$isEmpty(e)||e.length<=r}}}}},Ia=function(){return{restrict:"A",require:"?ngModel",link:function(t,e,n,i){if(i){var r=0
n.$observe("minlength",function(t){r=p(t)||0,i.$validate()}),i.$validators.minlength=function(t,e){return i.$isEmpty(e)||e.length>=r}}}}}
t.angular.bootstrap||(ce(),$e(Or),Or.module("ngLocale",[],["$provide",function(t){function e(t){t+=""
var e=t.indexOf(".")
return-1==e?0:t.length-e-1}function i(t,i){var r=i
n===r&&(r=Math.min(e(t),3))
var s=Math.pow(10,r),o=(t*s|0)%s
return{v:r,f:o}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"}
t.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",pluralCat:function(t,e){var n=0|t,s=i(t,e)
return 1==n&&0==s.v?r.ONE:r.OTHER}})}]),Cr(e).ready(function(){se(e,oe)}))}(window,document),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(t,e,n){function i(t){for(var e in t)if(void 0!==s.style[e])return t[e]}var r=function(i,s,o){o=o||{}
var a=t.defer(),l=r[o.animation?"animationEndEventName":"transitionEndEventName"],u=function(){n.$apply(function(){i.unbind(l,u),a.resolve(i)})}
return l&&i.bind(l,u),e(function(){angular.isString(s)?i.addClass(s):angular.isFunction(s)?s(i):angular.isObject(s)&&i.css(s),l||a.resolve(i)}),a.promise.cancel=function(){l&&i.unbind(l,u),a.reject("Transition cancelled")},a.promise},s=document.createElement("trans"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},a={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"}
return r.transitionEndEventName=i(o),r.animationEndEventName=i(a),r}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(t){return{link:function(e,n,i){function r(e){function i(){u===r&&(u=void 0)}var r=t(n,e)
return u&&u.cancel(),u=r,r.then(i,i),r}function s(){c?(c=!1,o()):(n.removeClass("collapse").addClass("collapsing"),r({height:n[0].scrollHeight+"px"}).then(o))}function o(){n.removeClass("collapsing"),n.addClass("collapse in"),n.css({height:"auto"})}function a(){if(c)c=!1,l(),n.css({height:0})
else{n.css({height:n[0].scrollHeight+"px"})
{n[0].offsetWidth}n.removeClass("collapse in").addClass("collapsing"),r({height:0}).then(l)}}function l(){n.removeClass("collapsing"),n.addClass("collapse")}var u,c=!0
e.$watch(i.collapse,function(t){t?a():s()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(t,e,n){this.groups=[],this.closeOthers=function(i){var r=angular.isDefined(e.closeOthers)?t.$eval(e.closeOthers):n.closeOthers
r&&angular.forEach(this.groups,function(t){t!==i&&(t.isOpen=!1)})},this.addGroup=function(t){var e=this
this.groups.push(t),t.$on("$destroy",function(){e.removeGroup(t)})},this.removeGroup=function(t){var e=this.groups.indexOf(t);-1!==e&&this.groups.splice(e,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(t){this.heading=t}},link:function(t,e,n,i){i.addGroup(t),t.$watch("isOpen",function(e){e&&i.closeOthers(t)}),t.toggleOpen=function(){t.isDisabled||(t.isOpen=!t.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(t,e,n,i,r){i.setHeading(r(t,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(t,e,n,i){t.$watch(function(){return i[n.accordionTransclude]},function(t){t&&(e.html(""),e.append(t))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(t,e){t.closeable="close"in e,this.close=t.close}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}).directive("dismissOnTimeout",["$timeout",function(t){return{require:"alert",link:function(e,n,i,r){t(function(){r.close()},parseInt(i.dismissOnTimeout,10))}}}]),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(t,e,n){e.addClass("ng-binding").data("$binding",n.bindHtmlUnsafe),t.$watch(n.bindHtmlUnsafe,function(t){e.html(t||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(t){this.activeClass=t.activeClass||"active",this.toggleEvent=t.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(t,e,n,i){var r=i[0],s=i[1]
s.$render=function(){e.toggleClass(r.activeClass,angular.equals(s.$modelValue,t.$eval(n.btnRadio)))},e.bind(r.toggleEvent,function(){var i=e.hasClass(r.activeClass);(!i||angular.isDefined(n.uncheckable))&&t.$apply(function(){s.$setViewValue(i?null:t.$eval(n.btnRadio)),s.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(t,e,n,i){function r(){return o(n.btnCheckboxTrue,!0)}function s(){return o(n.btnCheckboxFalse,!1)}function o(e,n){var i=t.$eval(e)
return angular.isDefined(i)?i:n}var a=i[0],l=i[1]
l.$render=function(){e.toggleClass(a.activeClass,angular.equals(l.$modelValue,r()))},e.bind(a.toggleEvent,function(){t.$apply(function(){l.$setViewValue(e.hasClass(a.activeClass)?s():r()),l.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$interval","$transition",function(t,e,n,i){function r(){s()
var e=+t.interval
!isNaN(e)&&e>0&&(a=n(o,e))}function s(){a&&(n.cancel(a),a=null)}function o(){var e=+t.interval
l&&!isNaN(e)&&e>0?t.next():t.pause()}var a,l,u=this,c=u.slides=t.slides=[],h=-1
u.currentSlide=null
var d=!1
u.select=t.select=function(n,s){function o(){if(!d){if(u.currentSlide&&angular.isString(s)&&!t.noTransition&&n.$element){n.$element.addClass(s)
{n.$element[0].offsetWidth}angular.forEach(c,function(t){angular.extend(t,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(n,{direction:s,active:!0,entering:!0}),angular.extend(u.currentSlide||{},{direction:s,leaving:!0}),t.$currentTransition=i(n.$element,{}),function(e,n){t.$currentTransition.then(function(){a(e,n)},function(){a(e,n)})}(n,u.currentSlide)}else a(n,u.currentSlide)
u.currentSlide=n,h=l,r()}}function a(e,n){angular.extend(e,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(n||{},{direction:"",active:!1,leaving:!1,entering:!1}),t.$currentTransition=null}var l=c.indexOf(n)
void 0===s&&(s=l>h?"next":"prev"),n&&n!==u.currentSlide&&(t.$currentTransition?(t.$currentTransition.cancel(),e(o)):o())},t.$on("$destroy",function(){d=!0}),u.indexOfSlide=function(t){return c.indexOf(t)},t.next=function(){var e=(h+1)%c.length
return t.$currentTransition?void 0:u.select(c[e],"next")},t.prev=function(){var e=0>h-1?c.length-1:h-1
return t.$currentTransition?void 0:u.select(c[e],"prev")},t.isActive=function(t){return u.currentSlide===t},t.$watch("interval",r),t.$on("$destroy",s),t.play=function(){l||(l=!0,r())},t.pause=function(){t.noPause||(l=!1,s())},u.addSlide=function(e,n){e.$element=n,c.push(e),1===c.length||e.active?(u.select(c[c.length-1]),1==c.length&&t.play()):e.active=!1},u.removeSlide=function(t){var e=c.indexOf(t)
c.splice(e,1),c.length>0&&t.active?u.select(e>=c.length?c[e-1]:c[e]):h>e&&h--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(t,e,n,i){i.addSlide(t,e),t.$on("$destroy",function(){i.removeSlide(t)}),t.$watch("active",function(e){e&&i.select(t)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(t,e){function n(t){var n=[],i=t.split("")
return angular.forEach(r,function(e,r){var s=t.indexOf(r)
if(s>-1){t=t.split(""),i[s]="("+e.regex+")",t[s]="$"
for(var o=s+1,a=s+r.length;a>o;o++)i[o]="",t[o]="$"
t=t.join(""),n.push({index:s,apply:e.apply})}}),{regex:new RegExp("^"+i.join("")+"$"),map:e(n,"index")}}function i(t,e,n){return 1===e&&n>28?29===n&&(t%4===0&&t%100!==0||t%400===0):3===e||5===e||8===e||10===e?31>n:!0}this.parsers={}
var r={yyyy:{regex:"\\d{4}",apply:function(t){this.year=+t}},yy:{regex:"\\d{2}",apply:function(t){this.year=+t+2e3}},y:{regex:"\\d{1,4}",apply:function(t){this.year=+t}},MMMM:{regex:t.DATETIME_FORMATS.MONTH.join("|"),apply:function(e){this.month=t.DATETIME_FORMATS.MONTH.indexOf(e)}},MMM:{regex:t.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(e){this.month=t.DATETIME_FORMATS.SHORTMONTH.indexOf(e)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(t){this.month=t-1}},M:{regex:"[1-9]|1[0-2]",apply:function(t){this.month=t-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(t){this.date=+t}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(t){this.date=+t}},EEEE:{regex:t.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:t.DATETIME_FORMATS.SHORTDAY.join("|")}}
this.parse=function(e,r){if(!angular.isString(e)||!r)return e
r=t.DATETIME_FORMATS[r]||r,this.parsers[r]||(this.parsers[r]=n(r))
var s=this.parsers[r],o=s.regex,a=s.map,l=e.match(o)
if(l&&l.length){for(var u,c={year:1900,month:0,date:1,hours:0},h=1,d=l.length;d>h;h++){var p=a[h-1]
p.apply&&p.apply.call(c,l[h])}return i(c.year,c.month,c.date)&&(u=new Date(c.year,c.month,c.date,c.hours)),u}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(t,e){function n(t,n){return t.currentStyle?t.currentStyle[n]:e.getComputedStyle?e.getComputedStyle(t)[n]:t.style[n]}function i(t){return"static"===(n(t,"position")||"static")}var r=function(e){for(var n=t[0],r=e.offsetParent||n;r&&r!==n&&i(r);)r=r.offsetParent
return r||n}
return{position:function(e){var n=this.offset(e),i={top:0,left:0},s=r(e[0])
s!=t[0]&&(i=this.offset(angular.element(s)),i.top+=s.clientTop-s.scrollTop,i.left+=s.clientLeft-s.scrollLeft)
var o=e[0].getBoundingClientRect()
return{width:o.width||e.prop("offsetWidth"),height:o.height||e.prop("offsetHeight"),top:n.top-i.top,left:n.left-i.left}},offset:function(n){var i=n[0].getBoundingClientRect()
return{width:i.width||n.prop("offsetWidth"),height:i.height||n.prop("offsetHeight"),top:i.top+(e.pageYOffset||t[0].documentElement.scrollTop),left:i.left+(e.pageXOffset||t[0].documentElement.scrollLeft)}},positionElements:function(t,e,n,i){var r,s,o,a,l=n.split("-"),u=l[0],c=l[1]||"center"
r=i?this.offset(t):this.position(t),s=e.prop("offsetWidth"),o=e.prop("offsetHeight")
var h={center:function(){return r.left+r.width/2-s/2},left:function(){return r.left},right:function(){return r.left+r.width}},d={center:function(){return r.top+r.height/2-o/2},top:function(){return r.top},bottom:function(){return r.top+r.height}}
switch(u){case"right":a={top:d[c](),left:h[u]()}
break
case"left":a={top:d[c](),left:r.left-s}
break
case"bottom":a={top:d[u](),left:h[c]()}
break
default:a={top:r.top-o,left:h[c]()}}return a}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(t,e,n,i,r,s,o,a){var l=this,u={$setViewValue:angular.noop}
this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(n,r){l[n]=angular.isDefined(e[n])?8>r?i(e[n])(t.$parent):t.$parent.$eval(e[n]):a[n]}),angular.forEach(["minDate","maxDate"],function(i){e[i]?t.$parent.$watch(n(e[i]),function(t){l[i]=t?new Date(t):null,l.refreshView()}):l[i]=a[i]?new Date(a[i]):null}),t.datepickerMode=t.datepickerMode||a.datepickerMode,t.uniqueId="datepicker-"+t.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(e.initDate)?t.$parent.$eval(e.initDate):new Date,t.isActive=function(e){return 0===l.compare(e.date,l.activeDate)?(t.activeDateId=e.uid,!0):!1},this.init=function(t){u=t,u.$render=function(){l.render()}},this.render=function(){if(u.$modelValue){var t=new Date(u.$modelValue),e=!isNaN(t)
e?this.activeDate=t:s.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),u.$setValidity("date",e)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView()
var t=u.$modelValue?new Date(u.$modelValue):null
u.$setValidity("date-disabled",!t||this.element&&!this.isDisabled(t))}},this.createDateObject=function(t,e){var n=u.$modelValue?new Date(u.$modelValue):null
return{date:t,label:o(t,e),selected:n&&0===this.compare(t,n),disabled:this.isDisabled(t),current:0===this.compare(t,new Date)}},this.isDisabled=function(n){return this.minDate&&this.compare(n,this.minDate)<0||this.maxDate&&this.compare(n,this.maxDate)>0||e.dateDisabled&&t.dateDisabled({date:n,mode:t.datepickerMode})},this.split=function(t,e){for(var n=[];t.length>0;)n.push(t.splice(0,e))
return n},t.select=function(e){if(t.datepickerMode===l.minMode){var n=u.$modelValue?new Date(u.$modelValue):new Date(0,0,0,0,0,0,0)
n.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),u.$setViewValue(n),u.$render()}else l.activeDate=e,t.datepickerMode=l.modes[l.modes.indexOf(t.datepickerMode)-1]},t.move=function(t){var e=l.activeDate.getFullYear()+t*(l.step.years||0),n=l.activeDate.getMonth()+t*(l.step.months||0)
l.activeDate.setFullYear(e,n,1),l.refreshView()},t.toggleMode=function(e){e=e||1,t.datepickerMode===l.maxMode&&1===e||t.datepickerMode===l.minMode&&-1===e||(t.datepickerMode=l.modes[l.modes.indexOf(t.datepickerMode)+e])},t.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"}
var c=function(){r(function(){l.element[0].focus()},0,!1)}
t.$on("datepicker.focus",c),t.keydown=function(e){var n=t.keys[e.which]
if(n&&!e.shiftKey&&!e.altKey)if(e.preventDefault(),e.stopPropagation(),"enter"===n||"space"===n){if(l.isDisabled(l.activeDate))return
t.select(l.activeDate),c()}else!e.ctrlKey||"up"!==n&&"down"!==n?(l.handleKeyDown(n,e),l.refreshView()):(t.toggleMode("up"===n?1:-1),c())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(t,e,n,i){var r=i[0],s=i[1]
s&&r.init(s)}}}).directive("daypicker",["dateFilter",function(t){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(e,n,i,r){function s(t,e){return 1!==e||t%4!==0||t%100===0&&t%400!==0?l[e]:29}function o(t,e){var n=new Array(e),i=new Date(t),r=0
for(i.setHours(12);e>r;)n[r++]=new Date(i),i.setDate(i.getDate()+1)
return n}function a(t){var e=new Date(t)
e.setDate(e.getDate()+4-(e.getDay()||7))
var n=e.getTime()
return e.setMonth(0),e.setDate(1),Math.floor(Math.round((n-e)/864e5)/7)+1}e.showWeeks=r.showWeeks,r.step={months:1},r.element=n
var l=[31,28,31,30,31,30,31,31,30,31,30,31]
r._refreshView=function(){var n=r.activeDate.getFullYear(),i=r.activeDate.getMonth(),s=new Date(n,i,1),l=r.startingDay-s.getDay(),u=l>0?7-l:-l,c=new Date(s)
u>0&&c.setDate(-u+1)
for(var h=o(c,42),d=0;42>d;d++)h[d]=angular.extend(r.createDateObject(h[d],r.formatDay),{secondary:h[d].getMonth()!==i,uid:e.uniqueId+"-"+d})
e.labels=new Array(7)
for(var p=0;7>p;p++)e.labels[p]={abbr:t(h[p].date,r.formatDayHeader),full:t(h[p].date,"EEEE")}
if(e.title=t(r.activeDate,r.formatDayTitle),e.rows=r.split(h,7),e.showWeeks){e.weekNumbers=[]
for(var f=a(e.rows[0][0].date),m=e.rows.length;e.weekNumbers.push(f++)<m;);}},r.compare=function(t,e){return new Date(t.getFullYear(),t.getMonth(),t.getDate())-new Date(e.getFullYear(),e.getMonth(),e.getDate())},r.handleKeyDown=function(t){var e=r.activeDate.getDate()
if("left"===t)e-=1
else if("up"===t)e-=7
else if("right"===t)e+=1
else if("down"===t)e+=7
else if("pageup"===t||"pagedown"===t){var n=r.activeDate.getMonth()+("pageup"===t?-1:1)
r.activeDate.setMonth(n,1),e=Math.min(s(r.activeDate.getFullYear(),r.activeDate.getMonth()),e)}else"home"===t?e=1:"end"===t&&(e=s(r.activeDate.getFullYear(),r.activeDate.getMonth()))
r.activeDate.setDate(e)},r.refreshView()}}}]).directive("monthpicker",["dateFilter",function(t){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(e,n,i,r){r.step={years:1},r.element=n,r._refreshView=function(){for(var n=new Array(12),i=r.activeDate.getFullYear(),s=0;12>s;s++)n[s]=angular.extend(r.createDateObject(new Date(i,s,1),r.formatMonth),{uid:e.uniqueId+"-"+s})
e.title=t(r.activeDate,r.formatMonthTitle),e.rows=r.split(n,3)},r.compare=function(t,e){return new Date(t.getFullYear(),t.getMonth())-new Date(e.getFullYear(),e.getMonth())},r.handleKeyDown=function(t){var e=r.activeDate.getMonth()
if("left"===t)e-=1
else if("up"===t)e-=3
else if("right"===t)e+=1
else if("down"===t)e+=3
else if("pageup"===t||"pagedown"===t){var n=r.activeDate.getFullYear()+("pageup"===t?-1:1)
r.activeDate.setFullYear(n)}else"home"===t?e=0:"end"===t&&(e=11)
r.activeDate.setMonth(e)},r.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(t,e,n,i){function r(t){return parseInt((t-1)/s,10)*s+1}var s=i.yearRange
i.step={years:s},i.element=e,i._refreshView=function(){for(var e=new Array(s),n=0,o=r(i.activeDate.getFullYear());s>n;n++)e[n]=angular.extend(i.createDateObject(new Date(o+n,0,1),i.formatYear),{uid:t.uniqueId+"-"+n})
t.title=[e[0].label,e[s-1].label].join(" - "),t.rows=i.split(e,5)},i.compare=function(t,e){return t.getFullYear()-e.getFullYear()},i.handleKeyDown=function(t){var e=i.activeDate.getFullYear()
"left"===t?e-=1:"up"===t?e-=5:"right"===t?e+=1:"down"===t?e+=5:"pageup"===t||"pagedown"===t?e+=("pageup"===t?-1:1)*i.step.years:"home"===t?e=r(i.activeDate.getFullYear()):"end"===t&&(e=r(i.activeDate.getFullYear())+s-1),i.activeDate.setFullYear(e)},i.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(t,e,n,i,r,s,o){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(a,l,u,c){function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function d(t){if(t){if(angular.isDate(t)&&!isNaN(t))return c.$setValidity("date",!0),t
if(angular.isString(t)){var e=s.parse(t,p)||new Date(t)
return isNaN(e)?void c.$setValidity("date",!1):(c.$setValidity("date",!0),e)}return void c.$setValidity("date",!1)}return c.$setValidity("date",!0),null}var p,f=angular.isDefined(u.closeOnDateSelection)?a.$parent.$eval(u.closeOnDateSelection):o.closeOnDateSelection,m=angular.isDefined(u.datepickerAppendToBody)?a.$parent.$eval(u.datepickerAppendToBody):o.appendToBody
a.showButtonBar=angular.isDefined(u.showButtonBar)?a.$parent.$eval(u.showButtonBar):o.showButtonBar,a.getText=function(t){return a[t+"Text"]||o[t+"Text"]},u.$observe("datepickerPopup",function(t){p=t||o.datepickerPopup,c.$render()})
var g=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>")
g.attr({"ng-model":"date","ng-change":"dateSelection()"})
var v=angular.element(g.children()[0])
u.datepickerOptions&&angular.forEach(a.$parent.$eval(u.datepickerOptions),function(t,e){v.attr(h(e),t)}),a.watchData={},angular.forEach(["minDate","maxDate","datepickerMode"],function(t){if(u[t]){var n=e(u[t])
if(a.$parent.$watch(n,function(e){a.watchData[t]=e}),v.attr(h(t),"watchData."+t),"datepickerMode"===t){var i=n.assign
a.$watch("watchData."+t,function(t,e){t!==e&&i(a.$parent,t)})}}}),u.dateDisabled&&v.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),c.$parsers.unshift(d),a.dateSelection=function(t){angular.isDefined(t)&&(a.date=t),c.$setViewValue(a.date),c.$render(),f&&(a.isOpen=!1,l[0].focus())},l.bind("input change keyup",function(){a.$apply(function(){a.date=c.$modelValue})}),c.$render=function(){var t=c.$viewValue?r(c.$viewValue,p):""
l.val(t),a.date=d(c.$modelValue)}
var b=function(t){a.isOpen&&t.target!==l[0]&&a.$apply(function(){a.isOpen=!1})},y=function(t){a.keydown(t)}
l.bind("keydown",y),a.keydown=function(t){27===t.which?(t.preventDefault(),t.stopPropagation(),a.close()):40!==t.which||a.isOpen||(a.isOpen=!0)},a.$watch("isOpen",function(t){t?(a.$broadcast("datepicker.focus"),a.position=m?i.offset(l):i.position(l),a.position.top=a.position.top+l.prop("offsetHeight"),n.bind("click",b)):n.unbind("click",b)}),a.select=function(t){if("today"===t){var e=new Date
angular.isDate(c.$modelValue)?(t=new Date(c.$modelValue),t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate())):t=new Date(e.setHours(0,0,0,0))}a.dateSelection(t)},a.close=function(){a.isOpen=!1,l[0].focus()}
var $=t(g)(a)
g.remove(),m?n.find("body").append($):l.after($),a.$on("$destroy",function(){$.remove(),l.unbind("keydown",y),n.unbind("click",b)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(t,e){e.bind("click",function(t){t.preventDefault(),t.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(t){var e=null
this.open=function(r){e||(t.bind("click",n),t.bind("keydown",i)),e&&e!==r&&(e.isOpen=!1),e=r},this.close=function(r){e===r&&(e=null,t.unbind("click",n),t.unbind("keydown",i))}
var n=function(t){if(e){var n=e.getToggleElement()
t&&n&&n[0].contains(t.target)||e.$apply(function(){e.isOpen=!1})}},i=function(t){27===t.which&&(e.focusToggleElement(),n())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(t,e,n,i,r,s){var o,a=this,l=t.$new(),u=i.openClass,c=angular.noop,h=e.onToggle?n(e.onToggle):angular.noop
this.init=function(i){a.$element=i,e.isOpen&&(o=n(e.isOpen),c=o.assign,t.$watch(o,function(t){l.isOpen=!!t}))},this.toggle=function(t){return l.isOpen=arguments.length?!!t:!l.isOpen},this.isOpen=function(){return l.isOpen},l.getToggleElement=function(){return a.toggleElement},l.focusToggleElement=function(){a.toggleElement&&a.toggleElement[0].focus()},l.$watch("isOpen",function(e,n){s[e?"addClass":"removeClass"](a.$element,u),e?(l.focusToggleElement(),r.open(l)):r.close(l),c(t,e),angular.isDefined(e)&&e!==n&&h(t,{open:!!e})}),t.$on("$locationChangeSuccess",function(){l.isOpen=!1}),t.$on("$destroy",function(){l.$destroy()})}]).directive("dropdown",function(){return{controller:"DropdownController",link:function(t,e,n,i){i.init(e)}}}).directive("dropdownToggle",function(){return{require:"?^dropdown",link:function(t,e,n,i){if(i){i.toggleElement=e
var r=function(r){r.preventDefault(),e.hasClass("disabled")||n.disabled||t.$apply(function(){i.toggle()})}
e.bind("click",r),e.attr({"aria-haspopup":!0,"aria-expanded":!1}),t.$watch(i.isOpen,function(t){e.attr("aria-expanded",!!t)}),t.$on("$destroy",function(){e.unbind("click",r)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var t=[]
return{add:function(e,n){t.push({key:e,value:n})},get:function(e){for(var n=0;n<t.length;n++)if(e==t[n].key)return t[n]},keys:function(){for(var e=[],n=0;n<t.length;n++)e.push(t[n].key)
return e},top:function(){return t[t.length-1]},remove:function(e){for(var n=-1,i=0;i<t.length;i++)if(e==t[i].key){n=i
break}return t.splice(n,1)[0]},removeTop:function(){return t.splice(t.length-1,1)[0]},length:function(){return t.length}}}}}).directive("modalBackdrop",["$timeout",function(t){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(e,n,i){e.backdropClass=i.backdropClass||"",e.animate=!1,t(function(){e.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(t,e){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(t,e){return e.templateUrl||"template/modal/window.html"},link:function(n,i,r){i.addClass(r.windowClass||""),n.size=r.size,e(function(){n.animate=!0,i[0].querySelectorAll("[autofocus]").length||i[0].focus()}),n.close=function(e){var n=t.getTop()
n&&n.value.backdrop&&"static"!=n.value.backdrop&&e.target===e.currentTarget&&(e.preventDefault(),e.stopPropagation(),t.dismiss(n.key,"backdrop click"))}}}}]).directive("modalTransclude",function(){return{link:function(t,e,n,i,r){r(t.$parent,function(t){e.empty(),e.append(t)})}}}).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(t,e,n,i,r,s){function o(){for(var t=-1,e=p.keys(),n=0;n<e.length;n++)p.get(e[n]).value.backdrop&&(t=n)
return t}function a(t){var e=n.find("body").eq(0),i=p.get(t).value
p.remove(t),u(i.modalDomEl,i.modalScope,300,function(){i.modalScope.$destroy(),e.toggleClass(d,p.length()>0),l()})}function l(){if(c&&-1==o()){var t=h
u(c,h,150,function(){t.$destroy(),t=null}),c=void 0,h=void 0}}function u(n,i,r,s){function o(){o.done||(o.done=!0,n.remove(),s&&s())}i.animate=!1
var a=t.transitionEndEventName
if(a){var l=e(o,r)
n.bind(a,function(){e.cancel(l),o(),i.$apply()})}else e(o)}var c,h,d="modal-open",p=s.createNew(),f={}
return r.$watch(o,function(t){h&&(h.index=t)}),n.bind("keydown",function(t){var e
27===t.which&&(e=p.top(),e&&e.value.keyboard&&(t.preventDefault(),r.$apply(function(){f.dismiss(e.key,"escape key press")})))}),f.open=function(t,e){p.add(t,{deferred:e.deferred,modalScope:e.scope,backdrop:e.backdrop,keyboard:e.keyboard})
var s=n.find("body").eq(0),a=o()
if(a>=0&&!c){h=r.$new(!0),h.index=a
var l=angular.element("<div modal-backdrop></div>")
l.attr("backdrop-class",e.backdropClass),c=i(l)(h),s.append(c)}var u=angular.element("<div modal-window></div>")
u.attr({"template-url":e.windowTemplateUrl,"window-class":e.windowClass,size:e.size,index:p.length()-1,animate:"animate"}).html(e.content)
var f=i(u)(e.scope)
p.top().value.modalDomEl=f,s.append(f),s.addClass(d)},f.close=function(t,e){var n=p.get(t)
n&&(n.value.deferred.resolve(e),a(t))},f.dismiss=function(t,e){var n=p.get(t)
n&&(n.value.deferred.reject(e),a(t))},f.dismissAll=function(t){for(var e=this.getTop();e;)this.dismiss(e.key,t),e=this.getTop()},f.getTop=function(){return p.top()},f}]).provider("$modal",function(){var t={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(e,n,i,r,s,o,a){function l(t){return t.template?i.when(t.template):r.get(angular.isFunction(t.templateUrl)?t.templateUrl():t.templateUrl,{cache:s}).then(function(t){return t.data})}function u(t){var n=[]
return angular.forEach(t,function(t){(angular.isFunction(t)||angular.isArray(t))&&n.push(i.when(e.invoke(t)))}),n}var c={}
return c.open=function(e){var r=i.defer(),s=i.defer(),c={result:r.promise,opened:s.promise,close:function(t){a.close(c,t)},dismiss:function(t){a.dismiss(c,t)}}
if(e=angular.extend({},t.options,e),e.resolve=e.resolve||{},!e.template&&!e.templateUrl)throw new Error("One of template or templateUrl options is required.")
var h=i.all([l(e)].concat(u(e.resolve)))
return h.then(function(t){var i=(e.scope||n).$new()
i.$close=c.close,i.$dismiss=c.dismiss
var s,l={},u=1
e.controller&&(l.$scope=i,l.$modalInstance=c,angular.forEach(e.resolve,function(e,n){l[n]=t[u++]}),s=o(e.controller,l),e.controllerAs&&(i[e.controllerAs]=s)),a.open(c,{scope:i,deferred:r,content:t[0],backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,size:e.size})},function(t){r.reject(t)}),h.then(function(){s.resolve(!0)},function(){s.reject(!1)}),c},c}]}
return t}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(t,e,n){var i=this,r={$setViewValue:angular.noop},s=e.numPages?n(e.numPages).assign:angular.noop
this.init=function(s,o){r=s,this.config=o,r.$render=function(){i.render()},e.itemsPerPage?t.$parent.$watch(n(e.itemsPerPage),function(e){i.itemsPerPage=parseInt(e,10),t.totalPages=i.calculateTotalPages()}):this.itemsPerPage=o.itemsPerPage},this.calculateTotalPages=function(){var e=this.itemsPerPage<1?1:Math.ceil(t.totalItems/this.itemsPerPage)
return Math.max(e||0,1)},this.render=function(){t.page=parseInt(r.$viewValue,10)||1},t.selectPage=function(e){t.page!==e&&e>0&&e<=t.totalPages&&(r.$setViewValue(e),r.$render())},t.getText=function(e){return t[e+"Text"]||i.config[e+"Text"]},t.noPrevious=function(){return 1===t.page},t.noNext=function(){return t.page===t.totalPages},t.$watch("totalItems",function(){t.totalPages=i.calculateTotalPages()}),t.$watch("totalPages",function(e){s(t.$parent,e),t.page>e?t.selectPage(e):r.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(t,e){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(n,i,r,s){function o(t,e,n){return{number:t,text:e,active:n}}function a(t,e){var n=[],i=1,r=e,s=angular.isDefined(c)&&e>c
s&&(h?(i=Math.max(t-Math.floor(c/2),1),r=i+c-1,r>e&&(r=e,i=r-c+1)):(i=(Math.ceil(t/c)-1)*c+1,r=Math.min(i+c-1,e)))
for(var a=i;r>=a;a++){var l=o(a,a,a===t)
n.push(l)}if(s&&!h){if(i>1){var u=o(i-1,"...",!1)
n.unshift(u)}if(e>r){var d=o(r+1,"...",!1)
n.push(d)}}return n}var l=s[0],u=s[1]
if(u){var c=angular.isDefined(r.maxSize)?n.$parent.$eval(r.maxSize):e.maxSize,h=angular.isDefined(r.rotate)?n.$parent.$eval(r.rotate):e.rotate
n.boundaryLinks=angular.isDefined(r.boundaryLinks)?n.$parent.$eval(r.boundaryLinks):e.boundaryLinks,n.directionLinks=angular.isDefined(r.directionLinks)?n.$parent.$eval(r.directionLinks):e.directionLinks,l.init(u,e),r.maxSize&&n.$parent.$watch(t(r.maxSize),function(t){c=parseInt(t,10),l.render()})
var d=l.render
l.render=function(){d(),n.page>0&&n.page<=n.totalPages&&(n.pages=a(n.page,n.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(t){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(e,n,i,r){var s=r[0],o=r[1]
o&&(e.align=angular.isDefined(i.align)?e.$parent.$eval(i.align):t.align,s.init(o,t))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function t(t){var e=/[A-Z]/g,n="-"
return t.replace(e,function(t,e){return(e?n:"")+t.toLowerCase()})}var e={placement:"top",animation:!0,popupDelay:0},n={mouseenter:"mouseleave",click:"click",focus:"blur"},i={}
this.options=function(t){angular.extend(i,t)},this.setTriggers=function(t){angular.extend(n,t)},this.$get=["$window","$compile","$timeout","$document","$position","$interpolate",function(r,s,o,a,l,u){return function(r,c,h){function d(t){var e=t||p.trigger||h,i=n[e]||e
return{show:e,hide:i}}var p=angular.extend({},e,i),f=t(r),m=u.startSymbol(),g=u.endSymbol(),v="<div "+f+'-popup title="'+m+"title"+g+'" content="'+m+"content"+g+'" placement="'+m+"placement"+g+'" animation="animation" is-open="isOpen"></div>'
return{restrict:"EA",compile:function(){var t=s(v)
return function(e,n,i){function s(){S.isOpen?h():u()}function u(){(!E||e.$eval(i[c+"Enable"]))&&(b(),S.popupDelay?k||(k=o(f,S.popupDelay,!1),k.then(function(t){t()})):f()())}function h(){e.$apply(function(){m()})}function f(){return k=null,C&&(o.cancel(C),C=null),S.content?(g(),x.css({top:0,left:0,display:"block"}),S.$digest(),I(),S.isOpen=!0,S.$digest(),I):angular.noop}function m(){S.isOpen=!1,o.cancel(k),k=null,S.animation?C||(C=o(v,500)):v()}function g(){x&&v(),_=S.$new(),x=t(_,function(t){T?a.find("body").append(t):n.after(t)})}function v(){C=null,x&&(x.remove(),x=null),_&&(_.$destroy(),_=null)}function b(){y(),$()}function y(){var t=i[c+"Placement"]
S.placement=angular.isDefined(t)?t:p.placement}function $(){var t=i[c+"PopupDelay"],e=parseInt(t,10)
S.popupDelay=isNaN(e)?p.popupDelay:e}function w(){var t=i[c+"Trigger"]
M(),D=d(t),D.show===D.hide?n.bind(D.show,s):(n.bind(D.show,u),n.bind(D.hide,h))}var x,_,C,k,T=angular.isDefined(p.appendToBody)?p.appendToBody:!1,D=d(void 0),E=angular.isDefined(i[c+"Enable"]),S=e.$new(!0),I=function(){var t=l.positionElements(n,x,S.placement,T)
t.top+="px",t.left+="px",x.css(t)}
S.isOpen=!1,i.$observe(r,function(t){S.content=t,!t&&S.isOpen&&m()}),i.$observe(c+"Title",function(t){S.title=t})
var M=function(){n.unbind(D.show,u),n.unbind(D.hide,h)}
w()
var A=e.$eval(i[c+"Animation"])
S.animation=angular.isDefined(A)?!!A:p.animation
var O=e.$eval(i[c+"AppendToBody"])
T=angular.isDefined(O)?O:T,T&&e.$on("$locationChangeSuccess",function(){S.isOpen&&m()}),e.$on("$destroy",function(){o.cancel(C),o.cancel(k),M(),v(),S=null})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(t){return t("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(t){return t("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(t){return t("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(t,e,n){var i=this,r=angular.isDefined(e.animate)?t.$parent.$eval(e.animate):n.animate
this.bars=[],t.max=angular.isDefined(e.max)?t.$parent.$eval(e.max):n.max,this.addBar=function(e,n){r||n.css({transition:"none"}),this.bars.push(e),e.$watch("value",function(n){e.percent=+(100*n/t.max).toFixed(2)}),e.$on("$destroy",function(){n=null,i.removeBar(e)})},this.removeBar=function(t){this.bars.splice(this.bars.indexOf(t),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(t,e,n,i){i.addBar(t,e)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(t,e,n,i){i.addBar(t,angular.element(e.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(t,e,n){var i={$setViewValue:angular.noop}
this.init=function(r){i=r,i.$render=this.render,this.stateOn=angular.isDefined(e.stateOn)?t.$parent.$eval(e.stateOn):n.stateOn,this.stateOff=angular.isDefined(e.stateOff)?t.$parent.$eval(e.stateOff):n.stateOff
var s=angular.isDefined(e.ratingStates)?t.$parent.$eval(e.ratingStates):new Array(angular.isDefined(e.max)?t.$parent.$eval(e.max):n.max)
t.range=this.buildTemplateObjects(s)},this.buildTemplateObjects=function(t){for(var e=0,n=t.length;n>e;e++)t[e]=angular.extend({index:e},{stateOn:this.stateOn,stateOff:this.stateOff},t[e])
return t},t.rate=function(e){!t.readonly&&e>=0&&e<=t.range.length&&(i.$setViewValue(e),i.$render())},t.enter=function(e){t.readonly||(t.value=e),t.onHover({value:e})},t.reset=function(){t.value=i.$viewValue,t.onLeave()},t.onKeydown=function(e){/(37|38|39|40)/.test(e.which)&&(e.preventDefault(),e.stopPropagation(),t.rate(t.value+(38===e.which||39===e.which?1:-1)))},this.render=function(){t.value=i.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(t,e,n,i){var r=i[0],s=i[1]
s&&r.init(s)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(t){var e=this,n=e.tabs=t.tabs=[]
e.select=function(t){angular.forEach(n,function(e){e.active&&e!==t&&(e.active=!1,e.onDeselect())}),t.active=!0,t.onSelect()},e.addTab=function(t){n.push(t),1===n.length?t.active=!0:t.active&&e.select(t)},e.removeTab=function(t){var r=n.indexOf(t)
if(t.active&&n.length>1&&!i){var s=r==n.length-1?r-1:r+1
e.select(n[s])}n.splice(r,1)}
var i
t.$on("$destroy",function(){i=!0})}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(t,e,n){t.vertical=angular.isDefined(n.vertical)?t.$parent.$eval(n.vertical):!1,t.justified=angular.isDefined(n.justified)?t.$parent.$eval(n.justified):!1}}}).directive("tab",["$parse",function(t){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(e,n,i){return function(e,n,r,s){e.$watch("active",function(t){t&&s.select(e)}),e.disabled=!1,r.disabled&&e.$parent.$watch(t(r.disabled),function(t){e.disabled=!!t}),e.select=function(){e.disabled||(e.active=!0)},s.addTab(e),e.$on("$destroy",function(){s.removeTab(e)}),e.$transcludeFn=i}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(t,e){t.$watch("headingElement",function(t){t&&(e.html(""),e.append(t))})}}}]).directive("tabContentTransclude",function(){function t(t){return t.tagName&&(t.hasAttribute("tab-heading")||t.hasAttribute("data-tab-heading")||"tab-heading"===t.tagName.toLowerCase()||"data-tab-heading"===t.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(e,n,i){var r=e.$eval(i.tabContentTransclude)
r.$transcludeFn(r.$parent,function(e){angular.forEach(e,function(e){t(e)?r.headingElement=e:n.append(e)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(t,e,n,i,r,s){function o(){var e=parseInt(t.hours,10),n=t.showMeridian?e>0&&13>e:e>=0&&24>e
return n?(t.showMeridian&&(12===e&&(e=0),t.meridian===m[1]&&(e+=12)),e):void 0}function a(){var e=parseInt(t.minutes,10)
return e>=0&&60>e?e:void 0}function l(t){return angular.isDefined(t)&&t.toString().length<2?"0"+t:t}function u(t){c(),f.$setViewValue(new Date(p)),h(t)}function c(){f.$setValidity("time",!0),t.invalidHours=!1,t.invalidMinutes=!1}function h(e){var n=p.getHours(),i=p.getMinutes()
t.showMeridian&&(n=0===n||12===n?12:n%12),t.hours="h"===e?n:l(n),t.minutes="m"===e?i:l(i),t.meridian=p.getHours()<12?m[0]:m[1]}function d(t){var e=new Date(p.getTime()+6e4*t)
p.setHours(e.getHours(),e.getMinutes()),u()}var p=new Date,f={$setViewValue:angular.noop},m=angular.isDefined(e.meridians)?t.$parent.$eval(e.meridians):s.meridians||r.DATETIME_FORMATS.AMPMS
this.init=function(n,i){f=n,f.$render=this.render
var r=i.eq(0),o=i.eq(1),a=angular.isDefined(e.mousewheel)?t.$parent.$eval(e.mousewheel):s.mousewheel
a&&this.setupMousewheelEvents(r,o),t.readonlyInput=angular.isDefined(e.readonlyInput)?t.$parent.$eval(e.readonlyInput):s.readonlyInput,this.setupInputEvents(r,o)}
var g=s.hourStep
e.hourStep&&t.$parent.$watch(n(e.hourStep),function(t){g=parseInt(t,10)})
var v=s.minuteStep
e.minuteStep&&t.$parent.$watch(n(e.minuteStep),function(t){v=parseInt(t,10)}),t.showMeridian=s.showMeridian,e.showMeridian&&t.$parent.$watch(n(e.showMeridian),function(e){if(t.showMeridian=!!e,f.$error.time){var n=o(),i=a()
angular.isDefined(n)&&angular.isDefined(i)&&(p.setHours(n),u())}else h()}),this.setupMousewheelEvents=function(e,n){var i=function(t){t.originalEvent&&(t=t.originalEvent)
var e=t.wheelDelta?t.wheelDelta:-t.deltaY
return t.detail||e>0}
e.bind("mousewheel wheel",function(e){t.$apply(i(e)?t.incrementHours():t.decrementHours()),e.preventDefault()}),n.bind("mousewheel wheel",function(e){t.$apply(i(e)?t.incrementMinutes():t.decrementMinutes()),e.preventDefault()})},this.setupInputEvents=function(e,n){if(t.readonlyInput)return t.updateHours=angular.noop,void(t.updateMinutes=angular.noop)
var i=function(e,n){f.$setViewValue(null),f.$setValidity("time",!1),angular.isDefined(e)&&(t.invalidHours=e),angular.isDefined(n)&&(t.invalidMinutes=n)}
t.updateHours=function(){var t=o()
angular.isDefined(t)?(p.setHours(t),u("h")):i(!0)},e.bind("blur",function(){!t.invalidHours&&t.hours<10&&t.$apply(function(){t.hours=l(t.hours)})}),t.updateMinutes=function(){var t=a()
angular.isDefined(t)?(p.setMinutes(t),u("m")):i(void 0,!0)},n.bind("blur",function(){!t.invalidMinutes&&t.minutes<10&&t.$apply(function(){t.minutes=l(t.minutes)})})},this.render=function(){var t=f.$modelValue?new Date(f.$modelValue):null
isNaN(t)?(f.$setValidity("time",!1),i.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(t&&(p=t),c(),h())},t.incrementHours=function(){d(60*g)},t.decrementHours=function(){d(60*-g)},t.incrementMinutes=function(){d(v)},t.decrementMinutes=function(){d(-v)},t.toggleMeridian=function(){d(720*(p.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(t,e,n,i){var r=i[0],s=i[1]
s&&r.init(s,e.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(t){var e=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/
return{parse:function(n){var i=n.match(e)
if(!i)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+n+'".')
return{itemName:i[3],source:t(i[4]),viewMapper:t(i[2]||i[1]),modelMapper:t(i[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(t,e,n,i,r,s,o){var a=[9,13,27,38,40]
return{require:"ngModel",link:function(l,u,c,h){var d,p=l.$eval(c.typeaheadMinLength)||1,f=l.$eval(c.typeaheadWaitMs)||0,m=l.$eval(c.typeaheadEditable)!==!1,g=e(c.typeaheadLoading).assign||angular.noop,v=e(c.typeaheadOnSelect),b=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,y=c.typeaheadAppendToBody?l.$eval(c.typeaheadAppendToBody):!1,$=l.$eval(c.typeaheadFocusFirst)!==!1,w=e(c.ngModel).assign,x=o.parse(c.typeahead),_=l.$new()
l.$on("$destroy",function(){_.$destroy()})
var C="typeahead-"+_.$id+"-"+Math.floor(1e4*Math.random())
u.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":C})
var k=angular.element("<div typeahead-popup></div>")
k.attr({id:C,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(c.typeaheadTemplateUrl)&&k.attr("template-url",c.typeaheadTemplateUrl)
var T=function(){_.matches=[],_.activeIdx=-1,u.attr("aria-expanded",!1)},D=function(t){return C+"-option-"+t}
_.$watch("activeIdx",function(t){0>t?u.removeAttr("aria-activedescendant"):u.attr("aria-activedescendant",D(t))})
var E=function(t){var e={$viewValue:t}
g(l,!0),n.when(x.source(l,e)).then(function(n){var i=t===h.$viewValue
if(i&&d)if(n.length>0){_.activeIdx=$?0:-1,_.matches.length=0
for(var r=0;r<n.length;r++)e[x.itemName]=n[r],_.matches.push({id:D(r),label:x.viewMapper(_,e),model:n[r]})
_.query=t,_.position=y?s.offset(u):s.position(u),_.position.top=_.position.top+u.prop("offsetHeight"),u.attr("aria-expanded",!0)}else T()
i&&g(l,!1)},function(){T(),g(l,!1)})}
T(),_.query=void 0
var S,I=function(t){S=i(function(){E(t)},f)},M=function(){S&&i.cancel(S)}
h.$parsers.unshift(function(t){return d=!0,t&&t.length>=p?f>0?(M(),I(t)):E(t):(g(l,!1),M(),T()),m?t:t?void h.$setValidity("editable",!1):(h.$setValidity("editable",!0),t)}),h.$formatters.push(function(t){var e,n,i={}
return b?(i.$model=t,b(l,i)):(i[x.itemName]=t,e=x.viewMapper(l,i),i[x.itemName]=void 0,n=x.viewMapper(l,i),e!==n?e:t)}),_.select=function(t){var e,n,r={}
r[x.itemName]=n=_.matches[t].model,e=x.modelMapper(l,r),w(l,e),h.$setValidity("editable",!0),v(l,{$item:n,$model:e,$label:x.viewMapper(l,r)}),T(),i(function(){u[0].focus()},0,!1)},u.bind("keydown",function(t){0!==_.matches.length&&-1!==a.indexOf(t.which)&&(-1!=_.activeIdx||13!==t.which&&9!==t.which)&&(t.preventDefault(),40===t.which?(_.activeIdx=(_.activeIdx+1)%_.matches.length,_.$digest()):38===t.which?(_.activeIdx=(_.activeIdx>0?_.activeIdx:_.matches.length)-1,_.$digest()):13===t.which||9===t.which?_.$apply(function(){_.select(_.activeIdx)}):27===t.which&&(t.stopPropagation(),T(),_.$digest()))}),u.bind("blur",function(){d=!1})
var A=function(t){u[0]!==t.target&&(T(),_.$digest())}
r.bind("click",A),l.$on("$destroy",function(){r.unbind("click",A),y&&O.remove()})
var O=t(k)(_)
y?r.find("body").append(O):u.after(O)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(t,e,n){t.templateUrl=n.templateUrl,t.isOpen=function(){return t.matches.length>0},t.isActive=function(e){return t.active==e},t.selectActive=function(e){t.active=e},t.selectMatch=function(e){t.select({activeIdx:e})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(t,e,n,i){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(r,s,o){var a=i(o.templateUrl)(r.$parent)||"template/typeahead/typeahead-match.html"
t.get(a,{cache:e}).success(function(t){s.replaceWith(n(t.trim())(r))})}}}]).filter("typeaheadHighlight",function(){function t(t){return t.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(e,n){return n?(""+e).replace(new RegExp(t(n),"gi"),"<strong>$&</strong>"):e}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(t){t.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(t){t.put("template/accordion/accordion.html",'<div class=panel-group ng-transclude=""></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(t){t.put("template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(t){t.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(t){t.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(t){t.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(t){t.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(t){t.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(t){t.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(t){t.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(t){t.put("template/modal/backdrop.html",'<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(t){t.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(t){t.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(t){t.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(t){t.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(t){t.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(t){t.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(t){t.put("template/progressbar/bar.html",'<div class=progress-bar ng-class="type &amp;&amp; \'progress-bar-\' + type" role=progressbar aria-valuenow={{value}} aria-valuemin=0 aria-valuemax={{max}} ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude=""></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(t){t.put("template/progressbar/progress.html",'<div class=progress ng-transclude=""></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(t){t.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(t){t.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(t){t.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(t){t.put("template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(t){t.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(t){t.put("template/typeahead/typeahead-match.html",'<a tabindex=-1 bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(t){t.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),function(t,e){"use strict"
function n(){function t(t,n){return e.extend(Object.create(t),n)}function n(t,e){var n=e.caseInsensitiveMatch,i={originalPath:t,regexp:t},r=i.keys=[]
return t=t.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(t,e,n,i){var s="?"===i?i:null,o="*"===i?i:null
return r.push({name:n,optional:!!s}),e=e||"",""+(s?"":e)+"(?:"+(s?e:"")+(o&&"(.+?)"||"([^/]+)")+(s||"")+")"+(s||"")}).replace(/([\/$\*])/g,"\\$1"),i.regexp=new RegExp("^"+t+"$",n?"i":""),i}var i={}
this.when=function(t,r){var s=e.copy(r)
if(e.isUndefined(s.reloadOnSearch)&&(s.reloadOnSearch=!0),e.isUndefined(s.caseInsensitiveMatch)&&(s.caseInsensitiveMatch=this.caseInsensitiveMatch),i[t]=e.extend(s,t&&n(t,s)),t){var o="/"==t[t.length-1]?t.substr(0,t.length-1):t+"/"
i[o]=e.extend({redirectTo:t},n(o,s))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(t){return"string"==typeof t&&(t={redirectTo:t}),this.when(null,t),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(n,r,s,o,l,u,c){function h(t,e){var n=e.keys,i={}
if(!e.regexp)return null
var r=e.regexp.exec(t)
if(!r)return null
for(var s=1,o=r.length;o>s;++s){var a=n[s-1],l=r[s]
a&&l&&(i[a.name]=l)}return i}function d(t){var i=y.current
g=f(),v=g&&i&&g.$$route===i.$$route&&e.equals(g.pathParams,i.pathParams)&&!g.reloadOnSearch&&!b,v||!i&&!g||n.$broadcast("$routeChangeStart",g,i).defaultPrevented&&t&&t.preventDefault()}function p(){var t=y.current,i=g
v?(t.params=i.params,e.copy(t.params,s),n.$broadcast("$routeUpdate",t)):(i||t)&&(b=!1,y.current=i,i&&i.redirectTo&&(e.isString(i.redirectTo)?r.path(m(i.redirectTo,i.params)).search(i.params).replace():r.url(i.redirectTo(i.pathParams,r.path(),r.search())).replace()),o.when(i).then(function(){if(i){var t,n,r=e.extend({},i.resolve)
return e.forEach(r,function(t,n){r[n]=e.isString(t)?l.get(t):l.invoke(t,null,null,n)}),e.isDefined(t=i.template)?e.isFunction(t)&&(t=t(i.params)):e.isDefined(n=i.templateUrl)&&(e.isFunction(n)&&(n=n(i.params)),e.isDefined(n)&&(i.loadedTemplateUrl=c.valueOf(n),t=u(n))),e.isDefined(t)&&(r.$template=t),o.all(r)}}).then(function(r){i==y.current&&(i&&(i.locals=r,e.copy(i.params,s)),n.$broadcast("$routeChangeSuccess",i,t))},function(e){i==y.current&&n.$broadcast("$routeChangeError",i,t,e)}))}function f(){var n,s
return e.forEach(i,function(i){!s&&(n=h(r.path(),i))&&(s=t(i,{params:e.extend({},r.search(),n),pathParams:n}),s.$$route=i)}),s||i[null]&&t(i[null],{params:{},pathParams:{}})}function m(t,n){var i=[]
return e.forEach((t||"").split(":"),function(t,e){if(0===e)i.push(t)
else{var r=t.match(/(\w+)(?:[?*])?(.*)/),s=r[1]
i.push(n[s]),i.push(r[2]||""),delete n[s]}}),i.join("")}var g,v,b=!1,y={routes:i,reload:function(){b=!0,n.$evalAsync(function(){d(),p()})},updateParams:function(t){if(!this.current||!this.current.$$route)throw a("norout","Tried updating route when with no current route")
t=e.extend({},this.current.params,t),r.path(m(this.current.$$route.originalPath,t)),r.search(t)}}
return n.$on("$locationChangeStart",d),n.$on("$locationChangeSuccess",p),y}]}function i(){this.$get=function(){return{}}}function r(t,n,i){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(r,s,o,a,l){function u(){p&&(i.cancel(p),p=null),h&&(h.$destroy(),h=null),d&&(p=i.leave(d),p.then(function(){p=null}),d=null)}function c(){var o=t.current&&t.current.locals,a=o&&o.$template
if(e.isDefined(a)){var c=r.$new(),p=t.current,g=l(c,function(t){i.enter(t,null,d||s).then(function(){!e.isDefined(f)||f&&!r.$eval(f)||n()}),u()})
d=g,h=p.scope=c,h.$emit("$viewContentLoaded"),h.$eval(m)}else u()}var h,d,p,f=o.autoscroll,m=o.onload||""
r.$on("$routeChangeSuccess",c),c()}}}function s(t,e,n){return{restrict:"ECA",priority:-400,link:function(i,r){var s=n.current,o=s.locals
r.html(o.$template)
var a=t(r.contents())
if(s.controller){o.$scope=i
var l=e(s.controller,o)
s.controllerAs&&(i[s.controllerAs]=l),r.data("$ngControllerController",l),r.children().data("$ngControllerController",l)}a(i)}}}var o=e.module("ngRoute",["ng"]).provider("$route",n),a=e.$$minErr("ngRoute")
o.provider("$routeParams",i),o.directive("ngView",r),o.directive("ngView",s),r.$inject=["$route","$anchorScroll","$animate"],s.$inject=["$compile","$controller","$route"]}(window,window.angular),angular.module("monospaced.elastic",[]).constant("msdElasticConfig",{append:""}).directive("msdElastic",["$timeout","$window","msdElasticConfig",function(t,e,n){"use strict"
return{require:"ngModel",restrict:"A, C",link:function(i,r,s,o){function a(){var t=v
p=c,$=getComputedStyle(c),angular.forEach(E,function(e){t+=e+":"+$.getPropertyValue(e)+";"}),y.setAttribute("style",t)}function l(){var e,n,r,s,o
p!==c&&a(),f||(f=!0,y.value=c.value+m,y.style.overflowY=c.style.overflowY,e=""===c.style.height?"auto":parseInt(c.style.height,10),n=getComputedStyle(c).getPropertyValue("width"),"px"===n.substr(n.length-2,2)&&(s=parseInt(n,10)-_.width,y.style.width=s+"px"),r=y.scrollHeight,r>D?(r=D,o="scroll"):T>r&&(r=T),r+=_.height,c.style.overflowY=o||"hidden",e!==r&&(c.style.height=r+"px",i.$emit("elastic:resize",h)),t(function(){f=!1},1))}function u(){f=!1,l()}var c=r[0],h=r
if("TEXTAREA"===c.nodeName&&e.getComputedStyle){h.css({overflow:"hidden","overflow-y":"hidden","word-wrap":"break-word"})
var d=c.value
c.value="",c.value=d
var p,f,m=s.msdElastic?s.msdElastic.replace(/\\n/g,"\n"):n.append,g=angular.element(e),v="position: absolute; top: -999px; right: auto; bottom: auto;left: 0; overflow: hidden; -webkit-box-sizing: content-box;-moz-box-sizing: content-box; box-sizing: content-box;min-height: 0 !important; height: 0 !important; padding: 0;word-wrap: break-word; border: 0;",b=angular.element('<textarea tabindex="-1" style="'+v+'"/>').data("elastic",!0),y=b[0],$=getComputedStyle(c),w=$.getPropertyValue("resize"),x="border-box"===$.getPropertyValue("box-sizing")||"border-box"===$.getPropertyValue("-moz-box-sizing")||"border-box"===$.getPropertyValue("-webkit-box-sizing"),_=x?{width:parseInt($.getPropertyValue("border-right-width"),10)+parseInt($.getPropertyValue("padding-right"),10)+parseInt($.getPropertyValue("padding-left"),10)+parseInt($.getPropertyValue("border-left-width"),10),height:parseInt($.getPropertyValue("border-top-width"),10)+parseInt($.getPropertyValue("padding-top"),10)+parseInt($.getPropertyValue("padding-bottom"),10)+parseInt($.getPropertyValue("border-bottom-width"),10)}:{width:0,height:0},C=parseInt($.getPropertyValue("min-height"),10),k=parseInt($.getPropertyValue("height"),10),T=Math.max(C,k)-_.height,D=parseInt($.getPropertyValue("max-height"),10),E=["font-family","font-size","font-weight","font-style","letter-spacing","line-height","text-transform","word-spacing","text-indent"]
h.data("elastic")||(D=D&&D>0?D:9e4,y.parentNode!==document.body&&angular.element(document.body).append(y),h.css({resize:"none"===w||"vertical"===w?"none":"horizontal"}).data("elastic",!0),c.oninput="onpropertychange"in c&&"oninput"in c?c.onkeyup=l:l,g.bind("resize",u),i.$watch(function(){return o.$modelValue},function(){u()}),i.$on("elastic:adjust",function(){a(),u()}),t(l),i.$on("$destroy",function(){b.remove(),g.unbind("resize",u)}))}}}}]),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e,i){var r,s,o,a=e.nodeName.toLowerCase()
return"area"===a?(r=e.parentNode,s=r.name,e.href&&s&&"map"===r.nodeName.toLowerCase()?(o=t("img[usemap='#"+s+"']")[0],!!o&&n(o)):!1):(/^(input|select|textarea|button|object)$/.test(a)?!e.disabled:"a"===a?e.href||i:i)&&n(e)}function n(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}function i(t){for(var e,n;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(n=parseInt(t.css("zIndex"),10),!isNaN(n)&&0!==n))return n
t=t.parent()}return 0}function r(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var n="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"
return e.delegate(n,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(n,"mouseover",o)}function o(){t.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,n){t.extend(e,n)
for(var i in n)null==n[i]&&(e[i]=n[i])
return e}function l(t){return function(){var e=this.element.val()
t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var n=this.css("position"),i="absolute"===n,r=e?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var e=t(this)
return i&&"static"===e.css("position")?!1:r.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0)
return"fixed"!==n&&s.length?s:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0
return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(n){return!!t.data(n,e)}}):function(e,n,i){return!!t.data(e,i[3])},focusable:function(n){return e(n,!isNaN(t.attr(n,"tabindex")))},tabbable:function(n){var i=t.attr(n,"tabindex"),r=isNaN(i)
return(r||i>=0)&&e(n,!r)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,n){function i(e,n,i,s){return t.each(r,function(){n-=parseFloat(t.css(e,"padding"+this))||0,i&&(n-=parseFloat(t.css(e,"border"+this+"Width"))||0),s&&(n-=parseFloat(t.css(e,"margin"+this))||0)}),n}var r="Width"===n?["Left","Right"]:["Top","Bottom"],s=n.toLowerCase(),o={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight}
t.fn["inner"+n]=function(e){return void 0===e?o["inner"+n].call(this):this.each(function(){t(this).css(s,i(this,e)+"px")})},t.fn["outer"+n]=function(e,r){return"number"!=typeof e?o["outer"+n].call(this,e):this.each(function(){t(this).css(s,i(this,e,!0,r)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(n){return arguments.length?e.call(this,t.camelCase(n)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(n,i){return"number"==typeof n?this.each(function(){var e=this
setTimeout(function(){t(e).focus(),i&&i.call(e)},n)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown"
return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e)
if(this.length)for(var n,i,r=t(this[0]);r.length&&r[0]!==document;){if(n=r.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(i=parseInt(r.css("zIndex"),10),!isNaN(i)&&0!==i))return i
r=r.parent()}return 0}}),t.ui.plugin={add:function(e,n,i){var r,s=t.ui[e].prototype
for(r in i)s.plugins[r]=s.plugins[r]||[],s.plugins[r].push([n,i[r]])},call:function(t,e,n,i){var r,s=t.plugins[e]
if(s&&(i||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(r=0;r<s.length;r++)t.options[s[r][0]]&&s[r][1].apply(t.element,n)}}
var u=0,c=Array.prototype.slice
t.cleanData=function(e){return function(n){var i,r,s
for(s=0;null!=(r=n[s]);s++)try{i=t._data(r,"events"),i&&i.remove&&t(r).triggerHandler("remove")}catch(o){}e(n)}}(t.cleanData),t.widget=function(e,n,i){var r,s,o,a,l={},u=e.split(".")[0]
return e=e.split(".")[1],r=u+"-"+e,i||(i=n,n=t.Widget),t.expr[":"][r.toLowerCase()]=function(e){return!!t.data(e,r)},t[u]=t[u]||{},s=t[u][e],o=t[u][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new o(t,e)},t.extend(o,s,{version:i.version,_proto:t.extend({},i),_childConstructors:[]}),a=new n,a.options=t.widget.extend({},a.options),t.each(i,function(e,i){return t.isFunction(i)?void(l[e]=function(){var t=function(){return n.prototype[e].apply(this,arguments)},r=function(t){return n.prototype[e].apply(this,t)}
return function(){var e,n=this._super,s=this._superApply
return this._super=t,this._superApply=r,e=i.apply(this,arguments),this._super=n,this._superApply=s,e}}()):void(l[e]=i)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:s?a.widgetEventPrefix||e:e},l,{constructor:o,namespace:u,widgetName:e,widgetFullName:r}),s?(t.each(s._childConstructors,function(e,n){var i=n.prototype
t.widget(i.namespace+"."+i.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var n,i,r=c.call(arguments,1),s=0,o=r.length;o>s;s++)for(n in r[s])i=r[s][n],r[s].hasOwnProperty(n)&&void 0!==i&&(e[n]=t.isPlainObject(i)?t.isPlainObject(e[n])?t.widget.extend({},e[n],i):t.widget.extend({},i):i)
return e},t.widget.bridge=function(e,n){var i=n.prototype.widgetFullName||e
t.fn[e]=function(r){var s="string"==typeof r,o=c.call(arguments,1),a=this
return s?this.each(function(){var n,s=t.data(this,i)
return"instance"===r?(a=s,!1):s?t.isFunction(s[r])&&"_"!==r.charAt(0)?(n=s[r].apply(s,o),n!==s&&void 0!==n?(a=n&&n.jquery?a.pushStack(n.get()):n,!1):void 0):t.error("no such method '"+r+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+r+"'")}):(o.length&&(r=t.widget.extend.apply(null,[r].concat(o))),this.each(function(){var e=t.data(this,i)
e?(e.option(r||{}),e._init&&e._init()):t.data(this,i,new n(r,this))})),a}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=u++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,n){var i,r,s,o=e
if(0===arguments.length)return t.widget.extend({},this.options)
if("string"==typeof e)if(o={},i=e.split("."),e=i.shift(),i.length){for(r=o[e]=t.widget.extend({},this.options[e]),s=0;s<i.length-1;s++)r[i[s]]=r[i[s]]||{},r=r[i[s]]
if(e=i.pop(),1===arguments.length)return void 0===r[e]?null:r[e]
r[e]=n}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e]
o[e]=n}return this._setOptions(o),this},_setOptions:function(t){var e
for(e in t)this._setOption(e,t[e])
return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,n,i){var r,s=this
"boolean"!=typeof e&&(i=n,n=e,e=!1),i?(n=r=t(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,r=this.widget()),t.each(i,function(i,o){function a(){return e||s.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?s[o]:o).apply(s,arguments):void 0}"string"!=typeof o&&(a.guid=o.guid=o.guid||a.guid||t.guid++)
var l=i.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+s.eventNamespace,c=l[2]
c?r.delegate(c,u,a):n.bind(u,a)})},_off:function(e,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(n).undelegate(n),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function n(){return("string"==typeof t?i[t]:t).apply(i,arguments)}var i=this
return setTimeout(n,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,n,i){var r,s,o=this.options[e]
if(i=i||{},n=t.Event(n),n.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),n.target=this.element[0],s=n.originalEvent)for(r in s)r in n||(n[r]=s[r])
return this.element.trigger(n,i),!(t.isFunction(o)&&o.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,n){t.Widget.prototype["_"+e]=function(i,r,s){"string"==typeof r&&(r={effect:r})
var o,a=r?r===!0||"number"==typeof r?n:r.effect||n:e
r=r||{},"number"==typeof r&&(r={duration:r}),o=!t.isEmptyObject(r),r.complete=s,r.delay&&i.delay(r.delay),o&&t.effects&&t.effects.effect[a]?i[e](r):a!==e&&i[a]?i[a](r.duration,r.easing,s):i.queue(function(n){t(this)[e](),s&&s.call(i[0]),n()})}})
var h=(t.widget,!1)
t(document).mouseup(function(){h=!1})
t.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this
this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(n){return!0===t.data(n.target,e.widgetName+".preventClickEvent")?(t.removeData(n.target,e.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!h){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e
var n=this,i=1===e.which,r="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1
return i&&!r&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){n.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return n._mouseMove(t)},this._mouseUpDelegate=function(t){return n._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),h=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e)
if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),h=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})
!function(){function e(t,e,n){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?n/100:1)]}function n(e,n){return parseInt(t.css(e,n),10)||0}function i(e){var n=e[0]
return 9===n.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(n)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{}
var r,s,o=Math.max,a=Math.abs,l=Math.round,u=/left|center|right/,c=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position
t.position={scrollbarWidth:function(){if(void 0!==r)return r
var e,n,i=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=i.children()[0]
return t("body").append(i),e=s.offsetWidth,i.css("overflow","scroll"),n=s.offsetWidth,e===n&&(n=i[0].clientWidth),i.remove(),r=e-n},getScrollInfo:function(e){var n=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),i=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),r="scroll"===n||"auto"===n&&e.width<e.element[0].scrollWidth,s="scroll"===i||"auto"===i&&e.height<e.element[0].scrollHeight
return{width:s?t.position.scrollbarWidth():0,height:r?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var n=t(e||window),i=t.isWindow(n[0]),r=!!n[0]&&9===n[0].nodeType
return{element:n,isWindow:i,isDocument:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:i||r?n.width():n.outerWidth(),height:i||r?n.height():n.outerHeight()}}},t.fn.position=function(r){if(!r||!r.of)return f.apply(this,arguments)
r=t.extend({},r)
var p,m,g,v,b,y,$=t(r.of),w=t.position.getWithinInfo(r.within),x=t.position.getScrollInfo(w),_=(r.collision||"flip").split(" "),C={}
return y=i($),$[0].preventDefault&&(r.at="left top"),m=y.width,g=y.height,v=y.offset,b=t.extend({},v),t.each(["my","at"],function(){var t,e,n=(r[this]||"").split(" ")
1===n.length&&(n=u.test(n[0])?n.concat(["center"]):c.test(n[0])?["center"].concat(n):["center","center"]),n[0]=u.test(n[0])?n[0]:"center",n[1]=c.test(n[1])?n[1]:"center",t=h.exec(n[0]),e=h.exec(n[1]),C[this]=[t?t[0]:0,e?e[0]:0],r[this]=[d.exec(n[0])[0],d.exec(n[1])[0]]}),1===_.length&&(_[1]=_[0]),"right"===r.at[0]?b.left+=m:"center"===r.at[0]&&(b.left+=m/2),"bottom"===r.at[1]?b.top+=g:"center"===r.at[1]&&(b.top+=g/2),p=e(C.at,m,g),b.left+=p[0],b.top+=p[1],this.each(function(){var i,u,c=t(this),h=c.outerWidth(),d=c.outerHeight(),f=n(this,"marginLeft"),y=n(this,"marginTop"),k=h+f+n(this,"marginRight")+x.width,T=d+y+n(this,"marginBottom")+x.height,D=t.extend({},b),E=e(C.my,c.outerWidth(),c.outerHeight())
"right"===r.my[0]?D.left-=h:"center"===r.my[0]&&(D.left-=h/2),"bottom"===r.my[1]?D.top-=d:"center"===r.my[1]&&(D.top-=d/2),D.left+=E[0],D.top+=E[1],s||(D.left=l(D.left),D.top=l(D.top)),i={marginLeft:f,marginTop:y},t.each(["left","top"],function(e,n){t.ui.position[_[e]]&&t.ui.position[_[e]][n](D,{targetWidth:m,targetHeight:g,elemWidth:h,elemHeight:d,collisionPosition:i,collisionWidth:k,collisionHeight:T,offset:[p[0]+E[0],p[1]+E[1]],my:r.my,at:r.at,within:w,elem:c})}),r.using&&(u=function(t){var e=v.left-D.left,n=e+m-h,i=v.top-D.top,s=i+g-d,l={target:{element:$,left:v.left,top:v.top,width:m,height:g},element:{element:c,left:D.left,top:D.top,width:h,height:d},horizontal:0>n?"left":e>0?"right":"center",vertical:0>s?"top":i>0?"bottom":"middle"}
h>m&&a(e+n)<m&&(l.horizontal="center"),d>g&&a(i+s)<g&&(l.vertical="middle"),l.important=o(a(e),a(n))>o(a(i),a(s))?"horizontal":"vertical",r.using.call(this,t,l)}),c.offset(t.extend(D,{using:u}))})},t.ui.position={fit:{left:function(t,e){var n,i=e.within,r=i.isWindow?i.scrollLeft:i.offset.left,s=i.width,a=t.left-e.collisionPosition.marginLeft,l=r-a,u=a+e.collisionWidth-s-r
e.collisionWidth>s?l>0&&0>=u?(n=t.left+l+e.collisionWidth-s-r,t.left+=l-n):t.left=u>0&&0>=l?r:l>u?r+s-e.collisionWidth:r:l>0?t.left+=l:u>0?t.left-=u:t.left=o(t.left-a,t.left)},top:function(t,e){var n,i=e.within,r=i.isWindow?i.scrollTop:i.offset.top,s=e.within.height,a=t.top-e.collisionPosition.marginTop,l=r-a,u=a+e.collisionHeight-s-r
e.collisionHeight>s?l>0&&0>=u?(n=t.top+l+e.collisionHeight-s-r,t.top+=l-n):t.top=u>0&&0>=l?r:l>u?r+s-e.collisionHeight:r:l>0?t.top+=l:u>0?t.top-=u:t.top=o(t.top-a,t.top)}},flip:{left:function(t,e){var n,i,r=e.within,s=r.offset.left+r.scrollLeft,o=r.width,l=r.isWindow?r.scrollLeft:r.offset.left,u=t.left-e.collisionPosition.marginLeft,c=u-l,h=u+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0]
0>c?(n=t.left+d+p+f+e.collisionWidth-o-s,(0>n||n<a(c))&&(t.left+=d+p+f)):h>0&&(i=t.left-e.collisionPosition.marginLeft+d+p+f-l,(i>0||a(i)<h)&&(t.left+=d+p+f))},top:function(t,e){var n,i,r=e.within,s=r.offset.top+r.scrollTop,o=r.height,l=r.isWindow?r.scrollTop:r.offset.top,u=t.top-e.collisionPosition.marginTop,c=u-l,h=u+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1]
0>c?(i=t.top+p+f+m+e.collisionHeight-o-s,(0>i||i<a(c))&&(t.top+=p+f+m)):h>0&&(n=t.top-e.collisionPosition.marginTop+p+f+m-l,(n>0||a(n)<h)&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,n,i,r,o,a=document.getElementsByTagName("body")[0],l=document.createElement("div")
e=document.createElement(a?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"})
for(o in i)e.style[o]=i[o]
e.appendChild(l),n=a||document.documentElement,n.insertBefore(e,n.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",r=t(l).offset().left,s=r>10&&11>r,e.innerHTML="",n.removeChild(e)}()}()
t.ui.position,t.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options
this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons
e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?void this._activate(e):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void("disabled"===t&&(this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e))))},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var n=t.ui.keyCode,i=this.headers.length,r=this.headers.index(e.target),s=!1
switch(e.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(r+1)%i]
break
case n.LEFT:case n.UP:s=this.headers[(r-1+i)%i]
break
case n.SPACE:case n.ENTER:this._eventHandler(e)
break
case n.HOME:s=this.headers[0]
break
case n.END:s=this.headers[i-1]}s&&(t(e.target).attr("tabIndex",-1),t(s).attr("tabIndex",0),s.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options
this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels
this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,n=this.options,i=n.heightStyle,r=this.element.parent()
this.active=this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var e=t(this),n=e.uniqueId().attr("id"),i=e.next(),r=i.uniqueId().attr("id")
e.attr("aria-controls",r),i.attr("aria-labelledby",n)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(n.event),"fill"===i?(e=r.height(),this.element.siblings(":visible").each(function(){var n=t(this),i=n.css("position")
"absolute"!==i&&"fixed"!==i&&(e-=n.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===i&&(e=0,this.headers.next().each(function(){e=Math.max(e,t(this).css("height","").height())}).height(e))},_activate:function(e){var n=this._findActive(e)[0]
n!==this.active[0]&&(n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var n={keydown:"_keydown"}
e&&t.each(e.split(" "),function(t,e){n[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,n),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var n=this.options,i=this.active,r=t(e.currentTarget),s=r[0]===i[0],o=s&&n.collapsible,a=o?t():r.next(),l=i.next(),u={oldHeader:i,oldPanel:l,newHeader:o?t():r,newPanel:a}
e.preventDefault(),s&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=o?!1:this.headers.index(r),this.active=s?t():r,this._toggle(u),i.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),r.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var n=e.newPanel,i=this.prevShow.length?this.prevShow:e.oldPanel
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=i,this.options.animate?this._animate(n,i,e):(i.hide(),n.show(),this._toggleComplete(e)),i.attr({"aria-hidden":"true"}),i.prev().attr({"aria-selected":"false","aria-expanded":"false"}),n.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):n.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),n.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,n){var i,r,s,o=this,a=0,l=t.css("box-sizing"),u=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},h=u&&c.down||c,d=function(){o._toggleComplete(n)}
return"number"==typeof h&&(s=h),"string"==typeof h&&(r=h),r=r||h.easing||c.easing,s=s||h.duration||c.duration,e.length?t.length?(i=t.show().outerHeight(),e.animate(this.hideProps,{duration:s,easing:r,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:s,easing:r,complete:d,step:function(t,n){n.now=Math.round(t),"height"!==n.prop?"content-box"===l&&(a+=n.now):"content"!==o.options.heightStyle&&(n.now=Math.round(i-e.outerHeight()-a),a=0)}})):e.animate(this.hideProps,s,r,d):t.animate(this.showProps,s,r,d)},_toggleComplete:function(t){var e=t.oldPanel
e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var n=t(e.target)
!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),n.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var n=t(e.currentTarget)
n.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(e,n)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var n=this.active||this.element.find(this.options.items).eq(0)
e||this.focus(t,n)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this)
e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){var n,i,r,s,o=!0
switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e)
break
case t.ui.keyCode.PAGE_DOWN:this.nextPage(e)
break
case t.ui.keyCode.HOME:this._move("first","first",e)
break
case t.ui.keyCode.END:this._move("last","last",e)
break
case t.ui.keyCode.UP:this.previous(e)
break
case t.ui.keyCode.DOWN:this.next(e)
break
case t.ui.keyCode.LEFT:this.collapse(e)
break
case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e)
break
case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e)
break
case t.ui.keyCode.ESCAPE:this.collapse(e)
break
default:o=!1,i=this.previousFilter||"",r=String.fromCharCode(e.keyCode),s=!1,clearTimeout(this.filterTimer),r===i?s=!0:r=i+r,n=this._filterMenuItems(r),n=s&&-1!==n.index(this.active.next())?this.active.nextAll(".ui-menu-item"):n,n.length||(r=String.fromCharCode(e.keyCode),n=this._filterMenuItems(r)),n.length?(this.focus(e,n),this.previousFilter=r,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(t):this.select(t))},refresh:function(){var e,n,i=this,r=this.options.icons.submenu,s=this.element.find(this.options.menus)
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),n=e.parent(),i=t("<span>").addClass("ui-menu-icon ui-icon "+r).data("ui-menu-submenu-carat",!0)
n.attr("aria-haspopup","true").prepend(i),e.attr("aria-labelledby",n.attr("id"))}),e=s.add(this.element),n=e.find(this.options.items),n.not(".ui-menu-item").each(function(){var e=t(this)
i._isDivider(e)&&e.addClass("ui-widget-content ui-menu-divider")}),n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),n.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},focus:function(t,e){var n,i
this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),i=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",i.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=e.children(".ui-menu"),n.length&&t&&/^mouse/.test(t.type)&&this._startOpening(n),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var n,i,r,s,o,a
this._hasScroll()&&(n=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,r=e.offset().top-this.activeMenu.offset().top-n-i,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),a=e.outerHeight(),0>r?this.activeMenu.scrollTop(s+r):r+a>o&&this.activeMenu.scrollTop(s+r-o+a))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var n=t.extend({of:this.active},this.options.position)
clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(e,n){clearTimeout(this.timer),this.timer=this._delay(function(){var i=n?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"))
i.length||(i=this.element),this._close(i),this.blur(e),this.activeMenu=i},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element)
e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first()
e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,n){var i
this.active&&(i="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),i&&i.length&&this.active||(i=this.activeMenu.find(this.options.items)[e]()),this.focus(n,i)},nextPage:function(e){var n,i,r
return this.active?void(this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,r=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=t(this),n.offset().top-i-r<0}),this.focus(e,n)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(e)},previousPage:function(e){var n,i,r
return this.active?void(this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,r=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=t(this),n.offset().top-i+r>0}),this.focus(e,n)):this.focus(e,this.activeMenu.find(this.options.items).first()))):void this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item")
var n={item:this.active}
this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,n)},_filterMenuItems:function(e){var n=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),i=new RegExp("^"+n,"i")
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return i.test(t.trim(t(this).text()))})}})
t.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,n,i,r=this.element[0].nodeName.toLowerCase(),s="textarea"===r,o="input"===r
this.isMultiLine=s?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[s||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(r){if(this.element.prop("readOnly"))return e=!0,i=!0,void(n=!0)
e=!1,i=!1,n=!1
var s=t.ui.keyCode
switch(r.keyCode){case s.PAGE_UP:e=!0,this._move("previousPage",r)
break
case s.PAGE_DOWN:e=!0,this._move("nextPage",r)
break
case s.UP:e=!0,this._keyEvent("previous",r)
break
case s.DOWN:e=!0,this._keyEvent("next",r)
break
case s.ENTER:this.menu.active&&(e=!0,r.preventDefault(),this.menu.select(r))
break
case s.TAB:this.menu.active&&this.menu.select(r)
break
case s.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(r),r.preventDefault())
break
default:n=!0,this._searchTimeout(r)}},keypress:function(i){if(e)return e=!1,void((!this.isMultiLine||this.menu.element.is(":visible"))&&i.preventDefault())
if(!n){var r=t.ui.keyCode
switch(i.keyCode){case r.PAGE_UP:this._move("previousPage",i)
break
case r.PAGE_DOWN:this._move("nextPage",i)
break
case r.UP:this._keyEvent("previous",i)
break
case r.DOWN:this._keyEvent("next",i)}}},input:function(t){return i?(i=!1,void t.preventDefault()):void this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(t),void this._change(t))}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur})
var n=this.menu.element[0]
t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this
this.document.one("mousedown",function(i){i.target===e.element[0]||i.target===n||t.contains(n,i.target)||e.close()})})},menufocus:function(e,n){var i,r
return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),void this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)})):(r=n.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:r})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(r.value),i=n.item.attr("aria-label")||r.value,void(i&&t.trim(i).length&&(this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))))},menuselect:function(t,e){var n=e.item.data("ui-autocomplete-item"),i=this.previous
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=i,this._delay(function(){this.previous=i,this.selectedItem=n})),!1!==this._trigger("select",t,{item:n})&&this._value(n.value),this.term=this._value(),this.close(t),this.selectedItem=n}}),this.liveRegion=t("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo
return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,n,i=this
t.isArray(this.options.source)?(e=this.options.source,this.source=function(n,i){i(t.ui.autocomplete.filter(e,n.term))}):"string"==typeof this.options.source?(n=this.options.source,this.source=function(e,r){i.xhr&&i.xhr.abort(),i.xhr=t.ajax({url:n,data:e,dataType:"json",success:function(t){r(t)},error:function(){r([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),n=this.menu.element.is(":visible"),i=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!n&&!i)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex
return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var n=this.menu.element.empty()
this._renderMenu(n,e),this.isNewMenu=!0,this.menu.refresh(),n.show(),this._resizeMenu(),n.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element
t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,n){var i=this
t.each(n,function(t,n){i._renderItemData(e,n)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,n){return t("<li>").text(n.label).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e):void this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,n){var i=new RegExp(t.ui.autocomplete.escapeRegex(n),"i")
return t.grep(e,function(t){return i.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var n
this._superApply(arguments),this.options.disabled||this.cancelSearch||(n=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(n).appendTo(this.liveRegion))}})
var d,p=(t.ui.autocomplete,"ui-button ui-widget ui-state-default ui-corner-all"),f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var e=t(this)
setTimeout(function(){e.find(":ui-button").button("refresh")},1)},g=function(e){var n=e.name,i=e.form,r=t([])
return n&&(n=n.replace(/'/g,"\\'"),r=i?t(i).find("[name='"+n+"'][type=radio]"):t("[name='"+n+"'][type=radio]",e.ownerDocument).filter(function(){return!this.form})),r}
t.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title")
var e=this,n=this.options,i="checkbox"===this.type||"radio"===this.type,r=i?"":"ui-state-active"
null===n.label&&(n.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){n.disabled||this===d&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){n.disabled||t(this).removeClass(r)}).bind("click"+this.eventNamespace,function(t){n.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),i&&this.element.bind("change"+this.eventNamespace,function(){e.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return n.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(n.disabled)return!1
t(this).addClass("ui-state-active"),e.buttonElement.attr("aria-pressed","true")
var i=e.element[0]
g(i).not(i).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return n.disabled?!1:(t(this).addClass("ui-state-active"),d=this,void e.document.one("mouseup",function(){d=null}))}).bind("mouseup"+this.eventNamespace,function(){return n.disabled?!1:void t(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(e){return n.disabled?!1:void((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"))}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",n.disabled),this._resetButton()},_determineButtonType:function(){var t,e,n
this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),void(e&&this.buttonElement.removeClass("checkbox"===this.type||"radio"===this.type?"ui-state-focus":"ui-state-focus ui-state-active"))):void this._resetButton()},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled")
e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?g(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return void(this.options.label&&this.element.val(this.options.label))
var e=this.buttonElement.removeClass(f),n=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),i=this.options.icons,r=i.primary&&i.secondary,s=[]
i.primary||i.secondary?(this.options.text&&s.push("ui-button-text-icon"+(r?"s":i.primary?"-primary":"-secondary")),i.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>"),i.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>"),this.options.text||(s.push(r?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(n)))):s.push("ui-button-text-only"),e.addClass(s.join(" "))}}),t.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction"),n=this.element.find(this.options.items),i=n.filter(":ui-button")
n.not(":ui-button").button(),i.button("refresh"),this.buttons=n.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})
t.ui.button
t.extend(t.ui,{datepicker:{version:"1.11.4"}})
var v
t.extend(r.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,n){var i,r,s
i=e.nodeName.toLowerCase(),r="div"===i||"span"===i,e.id||(this.uuid+=1,e.id="dp"+this.uuid),s=this._newInst(t(e),r),s.settings=t.extend({},n||{}),"input"===i?this._connectDatepicker(e,s):r&&this._inlineDatepicker(e,s)},_newInst:function(e,n){var i=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1")
return{id:i,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:n?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,n){var i=t(e)
n.append=t([]),n.trigger=t([]),i.hasClass(this.markerClassName)||(this._attachments(i,n),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(n),t.data(e,"datepicker",n),n.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,n){var i,r,s,o=this._get(n,"appendText"),a=this._get(n,"isRTL")
n.append&&n.append.remove(),o&&(n.append=t("<span class='"+this._appendClass+"'>"+o+"</span>"),e[a?"before":"after"](n.append)),e.unbind("focus",this._showDatepicker),n.trigger&&n.trigger.remove(),i=this._get(n,"showOn"),("focus"===i||"both"===i)&&e.focus(this._showDatepicker),("button"===i||"both"===i)&&(r=this._get(n,"buttonText"),s=this._get(n,"buttonImage"),n.trigger=t(this._get(n,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:s,alt:r,title:r}):t("<button type='button'></button>").addClass(this._triggerClass).html(s?t("<img/>").attr({src:s,alt:r,title:r}):r)),e[a?"before":"after"](n.trigger),n.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,n,i,r,s=new Date(2009,11,20),o=this._get(t,"dateFormat")
o.match(/[DM]/)&&(e=function(t){for(n=0,i=0,r=0;r<t.length;r++)t[r].length>n&&(n=t[r].length,i=r)
return i},s.setMonth(e(this._get(t,o.match(/MM/)?"monthNames":"monthNamesShort"))),s.setDate(e(this._get(t,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())),t.input.attr("size",this._formatDate(t,s).length)}},_inlineDatepicker:function(e,n){var i=t(e)
i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(n.dpDiv),t.data(e,"datepicker",n),this._setDate(n,this._getDefaultDate(n),!0),this._updateDatepicker(n),this._updateAlternate(n),n.settings.disabled&&this._disableDatepicker(e),n.dpDiv.css("display","block"))},_dialogDatepicker:function(e,n,i,r,s){var o,l,u,c,h,d=this._dialogInst
return d||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,r||{}),n=n&&n.constructor===Date?this._formatDate(d,n):n,this._dialogInput.val(n),this._pos=s?s.length?s:[s.pageX,s.pageY]:null,this._pos||(l=document.documentElement.clientWidth,u=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,u/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var n,i=t(e),r=t.data(e,"datepicker")
i.hasClass(this.markerClassName)&&(n=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===n?(r.append.remove(),r.trigger.remove(),i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===n||"span"===n)&&i.removeClass(this.markerClassName).empty(),v===r&&(v=null))},_enableDatepicker:function(e){var n,i,r=t(e),s=t.data(e,"datepicker")
r.hasClass(this.markerClassName)&&(n=e.nodeName.toLowerCase(),"input"===n?(e.disabled=!1,s.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===n||"span"===n)&&(i=r.children("."+this._inlineClass),i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var n,i,r=t(e),s=t.data(e,"datepicker")
r.hasClass(this.markerClassName)&&(n=e.nodeName.toLowerCase(),"input"===n?(e.disabled=!0,s.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===n||"span"===n)&&(i=r.children("."+this._inlineClass),i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1
for(var e=0;e<this._disabledInputs.length;e++)if(this._disabledInputs[e]===t)return!0
return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(n){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,n,i){var r,s,o,l,u=this._getInst(e)
return 2===arguments.length&&"string"==typeof n?"defaults"===n?t.extend({},t.datepicker._defaults):u?"all"===n?t.extend({},u.settings):this._get(u,n):null:(r=n||{},"string"==typeof n&&(r={},r[n]=i),void(u&&(this._curInst===u&&this._hideDatepicker(),s=this._getDateDatepicker(e,!0),o=this._getMinMaxDate(u,"min"),l=this._getMinMaxDate(u,"max"),a(u.settings,r),null!==o&&void 0!==r.dateFormat&&void 0===r.minDate&&(u.settings.minDate=this._formatDate(u,o)),null!==l&&void 0!==r.dateFormat&&void 0===r.maxDate&&(u.settings.maxDate=this._formatDate(u,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),u),this._autoSize(u),this._setDate(u,s),this._updateAlternate(u),this._updateDatepicker(u))))},_changeDatepicker:function(t,e,n){this._optionDatepicker(t,e,n)},_refreshDatepicker:function(t){var e=this._getInst(t)
e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var n=this._getInst(t)
n&&(this._setDate(n,e),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(t,e){var n=this._getInst(t)
return n&&!n.inline&&this._setDateFromField(n,e),n?this._getDate(n):null},_doKeyDown:function(e){var n,i,r,s=t.datepicker._getInst(e.target),o=!0,a=s.dpDiv.is(".ui-datepicker-rtl")
if(s._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),o=!1
break
case 13:return r=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",s.dpDiv),r[0]&&t.datepicker._selectDay(e.target,s.selectedMonth,s.selectedYear,r[0]),n=t.datepicker._get(s,"onSelect"),n?(i=t.datepicker._formatDate(s),n.apply(s.input?s.input[0]:null,[i,s])):t.datepicker._hideDatepicker(),!1
case 27:t.datepicker._hideDatepicker()
break
case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(s,"stepBigMonths"):-t.datepicker._get(s,"stepMonths"),"M")
break
case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(s,"stepBigMonths"):+t.datepicker._get(s,"stepMonths"),"M")
break
case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),o=e.ctrlKey||e.metaKey
break
case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),o=e.ctrlKey||e.metaKey
break
case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,a?1:-1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(s,"stepBigMonths"):-t.datepicker._get(s,"stepMonths"),"M")
break
case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),o=e.ctrlKey||e.metaKey
break
case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,a?-1:1,"D"),o=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(s,"stepBigMonths"):+t.datepicker._get(s,"stepMonths"),"M")
break
case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),o=e.ctrlKey||e.metaKey
break
default:o=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):o=!1
o&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var n,i,r=t.datepicker._getInst(e.target)
return t.datepicker._get(r,"constrainInput")?(n=t.datepicker._possibleChars(t.datepicker._get(r,"dateFormat")),i=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">i||!n||n.indexOf(i)>-1):void 0},_doKeyUp:function(e){var n,i=t.datepicker._getInst(e.target)
if(i.input.val()!==i.lastVal)try{n=t.datepicker.parseDate(t.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,t.datepicker._getFormatConfig(i)),n&&(t.datepicker._setDateFromField(i),t.datepicker._updateAlternate(i),t.datepicker._updateDatepicker(i))}catch(r){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var n,r,s,o,l,u,c
n=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==n&&(t.datepicker._curInst.dpDiv.stop(!0,!0),n&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),r=t.datepicker._get(n,"beforeShow"),s=r?r.apply(e,[e,n]):{},s!==!1&&(a(n.settings,s),n.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(n),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),o=!1,t(e).parents().each(function(){return o|="fixed"===t(this).css("position"),!o}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(n),l=t.datepicker._checkOffset(n,l,o),n.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":o?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),n.inline||(u=t.datepicker._get(n,"showAnim"),c=t.datepicker._get(n,"duration"),n.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[u]?n.dpDiv.show(u,t.datepicker._get(n,"showOptions"),c):n.dpDiv[u||"show"](u?c:null),t.datepicker._shouldFocusInput(n)&&n.input.focus(),t.datepicker._curInst=n))}},_updateDatepicker:function(e){this.maxRows=4,v=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e)
var n,i=this._getNumberOfMonths(e),r=i[1],s=17,a=e.dpDiv.find("."+this._dayOverClass+" a")
a.length>0&&o.apply(a.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),r>1&&e.dpDiv.addClass("ui-datepicker-multi-"+r).css("width",s*r+"em"),e.dpDiv[(1!==i[0]||1!==i[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(n=e.yearshtml,setTimeout(function(){n===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),n=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,n,i){var r=e.dpDiv.outerWidth(),s=e.dpDiv.outerHeight(),o=e.input?e.input.outerWidth():0,a=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(i?0:t(document).scrollLeft()),u=document.documentElement.clientHeight+(i?0:t(document).scrollTop())
return n.left-=this._get(e,"isRTL")?r-o:0,n.left-=i&&n.left===e.input.offset().left?t(document).scrollLeft():0,n.top-=i&&n.top===e.input.offset().top+a?t(document).scrollTop():0,n.left-=Math.min(n.left,n.left+r>l&&l>r?Math.abs(n.left+r-l):0),n.top-=Math.min(n.top,n.top+s>u&&u>s?Math.abs(s+a):0),n},_findPos:function(e){for(var n,i=this._getInst(e),r=this._get(i,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[r?"previousSibling":"nextSibling"]
return n=t(e).offset(),[n.left,n.top]},_hideDatepicker:function(e){var n,i,r,s,o=this._curInst
!o||e&&o!==t.data(e,"datepicker")||this._datepickerShowing&&(n=this._get(o,"showAnim"),i=this._get(o,"duration"),r=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[n]||t.effects[n])?o.dpDiv.hide(n,t.datepicker._get(o,"showOptions"),i,r):o.dpDiv["slideDown"===n?"slideUp":"fadeIn"===n?"fadeOut":"hide"](n?i:null,r),n||r(),this._datepickerShowing=!1,s=this._get(o,"onClose"),s&&s.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var n=t(e.target),i=t.datepicker._getInst(n[0]);(n[0].id!==t.datepicker._mainDivId&&0===n.parents("#"+t.datepicker._mainDivId).length&&!n.hasClass(t.datepicker.markerClassName)&&!n.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||n.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==i)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,n,i){var r=t(e),s=this._getInst(r[0])
this._isDisabledDatepicker(r[0])||(this._adjustInstDate(s,n+("M"===i?this._get(s,"showCurrentAtPos"):0),i),this._updateDatepicker(s))},_gotoToday:function(e){var n,i=t(e),r=this._getInst(i[0])
this._get(r,"gotoCurrent")&&r.currentDay?(r.selectedDay=r.currentDay,r.drawMonth=r.selectedMonth=r.currentMonth,r.drawYear=r.selectedYear=r.currentYear):(n=new Date,r.selectedDay=n.getDate(),r.drawMonth=r.selectedMonth=n.getMonth(),r.drawYear=r.selectedYear=n.getFullYear()),this._notifyChange(r),this._adjustDate(i)},_selectMonthYear:function(e,n,i){var r=t(e),s=this._getInst(r[0])
s["selected"+("M"===i?"Month":"Year")]=s["draw"+("M"===i?"Month":"Year")]=parseInt(n.options[n.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(r)},_selectDay:function(e,n,i,r){var s,o=t(e)
t(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(s=this._getInst(o[0]),s.selectedDay=s.currentDay=t("a",r).html(),s.selectedMonth=s.currentMonth=n,s.selectedYear=s.currentYear=i,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear)))},_clearDate:function(e){var n=t(e)
this._selectDate(n,"")},_selectDate:function(e,n){var i,r=t(e),s=this._getInst(r[0])
n=null!=n?n:this._formatDate(s),s.input&&s.input.val(n),this._updateAlternate(s),i=this._get(s,"onSelect"),i?i.apply(s.input?s.input[0]:null,[n,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],"object"!=typeof s.input[0]&&s.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var n,i,r,s=this._get(e,"altField")
s&&(n=this._get(e,"altFormat")||this._get(e,"dateFormat"),i=this._getDate(e),r=this.formatDate(n,i,this._getFormatConfig(e)),t(s).each(function(){t(this).val(r)}))},noWeekends:function(t){var e=t.getDay()
return[e>0&&6>e,""]},iso8601Week:function(t){var e,n=new Date(t.getTime())
return n.setDate(n.getDate()+4-(n.getDay()||7)),e=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((e-n)/864e5)/7)+1},parseDate:function(e,n,i){if(null==e||null==n)throw"Invalid arguments"
if(n="object"==typeof n?n.toString():n+"",""===n)return null
var r,s,o,a,l=0,u=(i?i.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof u?u:(new Date).getFullYear()%100+parseInt(u,10),h=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,d=(i?i.dayNames:null)||this._defaults.dayNames,p=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,f=(i?i.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,b=-1,y=!1,$=function(t){var n=r+1<e.length&&e.charAt(r+1)===t
return n&&r++,n},w=function(t){var e=$(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,r="y"===t?i:1,s=new RegExp("^\\d{"+r+","+i+"}"),o=n.substring(l).match(s)
if(!o)throw"Missing number at position "+l
return l+=o[0].length,parseInt(o[0],10)},x=function(e,i,r){var s=-1,o=t.map($(e)?r:i,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)})
if(t.each(o,function(t,e){var i=e[1]
return n.substr(l,i.length).toLowerCase()===i.toLowerCase()?(s=e[0],l+=i.length,!1):void 0}),-1!==s)return s+1
throw"Unknown name at position "+l},_=function(){if(n.charAt(l)!==e.charAt(r))throw"Unexpected literal at position "+l
l++}
for(r=0;r<e.length;r++)if(y)"'"!==e.charAt(r)||$("'")?_():y=!1
else switch(e.charAt(r)){case"d":v=w("d")
break
case"D":x("D",h,d)
break
case"o":b=w("o")
break
case"m":g=w("m")
break
case"M":g=x("M",p,f)
break
case"y":m=w("y")
break
case"@":a=new Date(w("@")),m=a.getFullYear(),g=a.getMonth()+1,v=a.getDate()
break
case"!":a=new Date((w("!")-this._ticksTo1970)/1e4),m=a.getFullYear(),g=a.getMonth()+1,v=a.getDate()
break
case"'":$("'")?_():y=!0
break
default:_()}if(l<n.length&&(o=n.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o
if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=m?0:-100)),b>-1)for(g=1,v=b;;){if(s=this._getDaysInMonth(m,g-1),s>=v)break
g++,v-=s}if(a=this._daylightSavingAdjust(new Date(m,g-1,v)),a.getFullYear()!==m||a.getMonth()+1!==g||a.getDate()!==v)throw"Invalid date"
return a},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(t,e,n){if(!e)return""
var i,r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,a=(n?n.monthNames:null)||this._defaults.monthNames,l=function(e){var n=i+1<t.length&&t.charAt(i+1)===e
return n&&i++,n},u=function(t,e,n){var i=""+e
if(l(t))for(;i.length<n;)i="0"+i
return i},c=function(t,e,n,i){return l(t)?i[e]:n[e]},h="",d=!1
if(e)for(i=0;i<t.length;i++)if(d)"'"!==t.charAt(i)||l("'")?h+=t.charAt(i):d=!1
else switch(t.charAt(i)){case"d":h+=u("d",e.getDate(),2)
break
case"D":h+=c("D",e.getDay(),r,s)
break
case"o":h+=u("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3)
break
case"m":h+=u("m",e.getMonth()+1,2)
break
case"M":h+=c("M",e.getMonth(),o,a)
break
case"y":h+=l("y")?e.getFullYear():(e.getYear()%100<10?"0":"")+e.getYear()%100
break
case"@":h+=e.getTime()
break
case"!":h+=1e4*e.getTime()+this._ticksTo1970
break
case"'":l("'")?h+="'":d=!0
break
default:h+=t.charAt(i)}return h},_possibleChars:function(t){var e,n="",i=!1,r=function(n){var i=e+1<t.length&&t.charAt(e+1)===n
return i&&e++,i}
for(e=0;e<t.length;e++)if(i)"'"!==t.charAt(e)||r("'")?n+=t.charAt(e):i=!1
else switch(t.charAt(e)){case"d":case"m":case"y":case"@":n+="0123456789"
break
case"D":case"M":return null
case"'":r("'")?n+="'":i=!0
break
default:n+=t.charAt(e)}return n},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var n=this._get(t,"dateFormat"),i=t.lastVal=t.input?t.input.val():null,r=this._getDefaultDate(t),s=r,o=this._getFormatConfig(t)
try{s=this.parseDate(n,i,o)||r}catch(a){i=e?"":i}t.selectedDay=s.getDate(),t.drawMonth=t.selectedMonth=s.getMonth(),t.drawYear=t.selectedYear=s.getFullYear(),t.currentDay=i?s.getDate():0,t.currentMonth=i?s.getMonth():0,t.currentYear=i?s.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,n,i){var r=function(t){var e=new Date
return e.setDate(e.getDate()+t),e},s=function(n){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),n,t.datepicker._getFormatConfig(e))}catch(i){}for(var r=(n.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,s=r.getFullYear(),o=r.getMonth(),a=r.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,u=l.exec(n);u;){switch(u[2]||"d"){case"d":case"D":a+=parseInt(u[1],10)
break
case"w":case"W":a+=7*parseInt(u[1],10)
break
case"m":case"M":o+=parseInt(u[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(s,o))
break
case"y":case"Y":s+=parseInt(u[1],10),a=Math.min(a,t.datepicker._getDaysInMonth(s,o))}u=l.exec(n)}return new Date(s,o,a)},o=null==n||""===n?i:"string"==typeof n?s(n):"number"==typeof n?isNaN(n)?i:r(n):new Date(n.getTime())
return o=o&&"Invalid Date"===o.toString()?i:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,n){var i=!e,r=t.selectedMonth,s=t.selectedYear,o=this._restrictMinMax(t,this._determineDate(t,e,new Date))
t.selectedDay=t.currentDay=o.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=o.getMonth(),t.drawYear=t.selectedYear=t.currentYear=o.getFullYear(),r===t.selectedMonth&&s===t.selectedYear||n||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(i?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))
return e},_attachHandlers:function(e){var n=this._get(e,"stepMonths"),i="#"+e.id.replace(/\\\\/g,"\\")
e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(i,-n,"M")},next:function(){t.datepicker._adjustDate(i,+n,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(i)},selectDay:function(){return t.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(i,this,"Y"),!1}}
t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,n,i,r,s,o,a,l,u,c,h,d,p,f,m,g,v,b,y,$,w,x,_,C,k,T,D,E,S,I,M,A,O,N,P,H,j,R,F,z=new Date,W=this._daylightSavingAdjust(new Date(z.getFullYear(),z.getMonth(),z.getDate())),q=this._get(t,"isRTL"),L=this._get(t,"showButtonPanel"),V=this._get(t,"hideIfNoPrevNext"),B=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),Y=this._get(t,"showCurrentAtPos"),K=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-Y,te=t.drawYear
if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--)
for(t.drawMonth=Z,t.drawYear=te,n=this._get(t,"prevText"),n=B?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z-K,1)),this._getFormatConfig(t)):n,i=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(q?"e":"w")+"'>"+n+"</span></a>":V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(q?"e":"w")+"'>"+n+"</span></a>",r=this._get(t,"nextText"),r=B?this.formatDate(r,this._daylightSavingAdjust(new Date(te,Z+K,1)),this._getFormatConfig(t)):r,s=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+r+"'><span class='ui-icon ui-icon-circle-triangle-"+(q?"w":"e")+"'>"+r+"</span></a>":V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+r+"'><span class='ui-icon ui-icon-circle-triangle-"+(q?"w":"e")+"'>"+r+"</span></a>",o=this._get(t,"currentText"),a=this._get(t,"gotoCurrent")&&t.currentDay?G:W,o=B?this.formatDate(o,a,this._getFormatConfig(t)):o,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",u=L?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(q?l:"")+(this._isInRange(t,a)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(q?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,h=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),b=this._get(t,"selectOtherMonths"),y=this._getDefaultDate(t),$="",x=0;x<U[0];x++){for(_="",this.maxRows=4,C=0;C<U[1];C++){if(k=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),T=" ui-corner-all",D="",X){if(D+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:D+=" ui-datepicker-group-first",T=" ui-corner-"+(q?"right":"left")
break
case U[1]-1:D+=" ui-datepicker-group-last",T=" ui-corner-"+(q?"left":"right")
break
default:D+=" ui-datepicker-group-middle",T=""}D+="'>"}for(D+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===x?q?s:i:"")+(/all|right/.test(T)&&0===x?q?i:s:"")+this._generateMonthYearHeader(t,Z,te,J,Q,x>0||C>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead><tr>",E=h?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)S=(w+c)%7,E+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+d[S]+"'>"+p[S]+"</span></th>"
for(D+=E+"</tr></thead><tbody>",I=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),M=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((M+I)/7),O=X&&this.maxRows>A?this.maxRows:A,this.maxRows=O,N=this._daylightSavingAdjust(new Date(te,Z,1-M)),P=0;O>P;P++){for(D+="<tr>",H=h?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(N)+"</td>":"",w=0;7>w;w++)j=g?g.apply(t.input?t.input[0]:null,[N]):[!0,""],R=N.getMonth()!==Z,F=R&&!b||!j[0]||J&&J>N||Q&&N>Q,H+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(R?" ui-datepicker-other-month":"")+(N.getTime()===k.getTime()&&Z===t.selectedMonth&&t._keyEvent||y.getTime()===N.getTime()&&y.getTime()===k.getTime()?" "+this._dayOverClass:"")+(F?" "+this._unselectableClass+" ui-state-disabled":"")+(R&&!v?"":" "+j[1]+(N.getTime()===G.getTime()?" "+this._currentClass:"")+(N.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(R&&!v||!j[2]?"":" title='"+j[2].replace(/'/g,"&#39;")+"'")+(F?"":" data-handler='selectDay' data-event='click' data-month='"+N.getMonth()+"' data-year='"+N.getFullYear()+"'")+">"+(R&&!v?"&#xa0;":F?"<span class='ui-state-default'>"+N.getDate()+"</span>":"<a class='ui-state-default"+(N.getTime()===W.getTime()?" ui-state-highlight":"")+(N.getTime()===G.getTime()?" ui-state-active":"")+(R?" ui-priority-secondary":"")+"' href='#'>"+N.getDate()+"</a>")+"</td>",N.setDate(N.getDate()+1),N=this._daylightSavingAdjust(N)
D+=H+"</tr>"}Z++,Z>11&&(Z=0,te++),D+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),_+=D}$+=_}return $+=u,t._keyEvent=!1,$},_generateMonthYearHeader:function(t,e,n,i,r,s,o,a){var l,u,c,h,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),b=this._get(t,"showMonthAfterYear"),y="<div class='ui-datepicker-title'>",$=""
if(s||!g)$+="<span class='ui-datepicker-month'>"+o[e]+"</span>"
else{for(l=i&&i.getFullYear()===n,u=r&&r.getFullYear()===n,$+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=i.getMonth())&&(!u||c<=r.getMonth())&&($+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+a[c]+"</option>")
$+="</select>"}if(b||(y+=$+(!s&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",s||!v)y+="<span class='ui-datepicker-year'>"+n+"</span>"
else{for(h=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?n+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10)
return isNaN(e)?d:e},f=p(h[0]),m=Math.max(f,p(h[1]||"")),f=i?Math.max(f,i.getFullYear()):f,m=r?Math.min(m,r.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===n?" selected='selected'":"")+">"+f+"</option>"
t.yearshtml+="</select>",y+=t.yearshtml,t.yearshtml=null}return y+=this._get(t,"yearSuffix"),b&&(y+=(!s&&g&&v?"":"&#xa0;")+$),y+="</div>"},_adjustInstDate:function(t,e,n){var i=t.drawYear+("Y"===n?e:0),r=t.drawMonth+("M"===n?e:0),s=Math.min(t.selectedDay,this._getDaysInMonth(i,r))+("D"===n?e:0),o=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(i,r,s)))
t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),("M"===n||"Y"===n)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var n=this._getMinMaxDate(t,"min"),i=this._getMinMaxDate(t,"max"),r=n&&n>e?n:e
return i&&r>i?i:r},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear")
e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths")
return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,n,i){var r=this._getNumberOfMonths(t),s=this._daylightSavingAdjust(new Date(n,i+(0>e?e:r[0]*r[1]),1))
return 0>e&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(t,s)},_isInRange:function(t,e){var n,i,r=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),o=null,a=null,l=this._get(t,"yearRange")
return l&&(n=l.split(":"),i=(new Date).getFullYear(),o=parseInt(n[0],10),a=parseInt(n[1],10),n[0].match(/[+\-].*/)&&(o+=i),n[1].match(/[+\-].*/)&&(a+=i)),(!r||e.getTime()>=r.getTime())&&(!s||e.getTime()<=s.getTime())&&(!o||e.getFullYear()>=o)&&(!a||e.getFullYear()<=a)},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff")
return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,n,i){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear)
var r=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(i,n,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay))
return this.formatDate(this._get(t,"dateFormat"),r,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this
t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv)
var n=Array.prototype.slice.call(arguments,1)
return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(n)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(n)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(n))},t.datepicker=new r,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.11.4"
t.datepicker
t.widget("ui.draggable",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(e){var n=this.options
return this._blurActiveElement(e),this.helper||n.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blockFrames(n.iframeFix===!0?"iframe":n.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this)
return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var n=this.document[0]
if(this.handleElement.is(e.target))try{n.activeElement&&"body"!==n.activeElement.nodeName.toLowerCase()&&t(n.activeElement).blur()}catch(i){}},_mouseStart:function(e){var n=this.options
return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._normalizeRightBottom(),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,n){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!n){var i=this._uiHash()
if(this._trigger("drag",e,i)===!1)return this._mouseUp({}),!1
this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var n=this,i=!1
return t.ui.ddmanager&&!this.options.dropBehaviour&&(i=t.ui.ddmanager.drop(this,e)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){n._trigger("stop",e)!==!1&&n._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.focus(),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(e){var n=this.options,i=t.isFunction(n.helper),r=i?t(n.helper.apply(this.element[0],[e])):"clone"===n.helper?this.element.clone().removeAttr("id"):this.element
return r.parents("body").length||r.appendTo("parent"===n.appendTo?this.element[0].parentNode:n.appendTo),i&&r[0]===this.element[0]&&this._setPositionRelative(),r[0]===this.element[0]||/(fixed|absolute)/.test(r.css("position"))||r.css("position","absolute"),r},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),n=this.document[0]
return"absolute"===this.cssPosition&&this.scrollParent[0]!==n&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0}
var t=this.element.position(),e=this._isRootNode(this.scrollParent[0])
return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,n,i,r=this.options,s=this.document[0]
return this.relativeContainer=null,r.containment?"window"===r.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===r.containment?void(this.containment=[0,0,t(s).width()-this.helperProportions.width-this.margins.left,(t(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):r.containment.constructor===Array?void(this.containment=r.containment):("parent"===r.containment&&(r.containment=this.helper[0].parentNode),n=t(r.containment),i=n[0],void(i&&(e=/(scroll|auto)/.test(n.css("overflow")),this.containment=[(parseInt(n.css("borderLeftWidth"),10)||0)+(parseInt(n.css("paddingLeft"),10)||0),(parseInt(n.css("borderTopWidth"),10)||0)+(parseInt(n.css("paddingTop"),10)||0),(e?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(n.css("borderRightWidth"),10)||0)-(parseInt(n.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(n.css("borderBottomWidth"),10)||0)-(parseInt(n.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=n))):void(this.containment=null)},_convertPositionTo:function(t,e){e||(e=this.position)
var n="absolute"===t?1:-1,i=this._isRootNode(this.scrollParent[0])
return{top:e.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*n,left:e.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*n}},_generatePosition:function(t,e){var n,i,r,s,o=this.options,a=this._isRootNode(this.scrollParent[0]),l=t.pageX,u=t.pageY
return a&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(i=this.relativeContainer.offset(),n=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(l=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(u=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(l=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(u=n[3]+this.offset.click.top)),o.grid&&(r=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=n?r-this.offset.click.top>=n[1]||r-this.offset.click.top>n[3]?r:r-this.offset.click.top>=n[1]?r-o.grid[1]:r+o.grid[1]:r,s=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s),"y"===o.axis&&(l=this.originalPageX),"x"===o.axis&&(u=this.originalPageY)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:a?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:a?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(e,n,i){return i=i||this._uiHash(),t.ui.plugin.call(this,e,[n,i,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,n,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,n,i){var r=t.extend({},n,{item:i.element})
i.sortables=[],t(i.options.connectToSortable).each(function(){var n=t(this).sortable("instance")
n&&!n.options.disabled&&(i.sortables.push(n),n.refreshPositions(),n._trigger("activate",e,r))})},stop:function(e,n,i){var r=t.extend({},n,{item:i.element})
i.cancelHelperRemoval=!1,t.each(i.sortables,function(){var t=this
t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,r))})},drag:function(e,n,i){t.each(i.sortables,function(){var r=!1,s=this
s.positionAbs=i.positionAbs,s.helperProportions=i.helperProportions,s.offset.click=i.offset.click,s._intersectsWith(s.containerCache)&&(r=!0,t.each(i.sortables,function(){return this.positionAbs=i.positionAbs,this.helperProportions=i.helperProportions,this.offset.click=i.offset.click,this!==s&&this._intersectsWith(this.containerCache)&&t.contains(s.element[0],this.element[0])&&(r=!1),r})),r?(s.isOver||(s.isOver=1,i._parent=n.helper.parent(),s.currentItem=n.helper.appendTo(s.element).data("ui-sortable-item",!0),s.options._helper=s.options.helper,s.options.helper=function(){return n.helper[0]},e.target=s.currentItem[0],s._mouseCapture(e,!0),s._mouseStart(e,!0,!0),s.offset.click.top=i.offset.click.top,s.offset.click.left=i.offset.click.left,s.offset.parent.left-=i.offset.parent.left-s.offset.parent.left,s.offset.parent.top-=i.offset.parent.top-s.offset.parent.top,i._trigger("toSortable",e),i.dropped=s.element,t.each(i.sortables,function(){this.refreshPositions()}),i.currentItem=i.element,s.fromOutside=i),s.currentItem&&(s._mouseDrag(e),n.position=s.position)):s.isOver&&(s.isOver=0,s.cancelHelperRemoval=!0,s.options._revert=s.options.revert,s.options.revert=!1,s._trigger("out",e,s._uiHash(s)),s._mouseStop(e,!0),s.options.revert=s.options._revert,s.options.helper=s.options._helper,s.placeholder&&s.placeholder.remove(),n.helper.appendTo(i._parent),i._refreshOffsets(e),n.position=i._generatePosition(e,!0),i._trigger("fromSortable",e),i.dropped=!1,t.each(i.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,n,i){var r=t("body"),s=i.options
r.css("cursor")&&(s._cursor=r.css("cursor")),r.css("cursor",s.cursor)},stop:function(e,n,i){var r=i.options
r._cursor&&t("body").css("cursor",r._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,n,i){var r=t(n.helper),s=i.options
r.css("opacity")&&(s._opacity=r.css("opacity")),r.css("opacity",s.opacity)},stop:function(e,n,i){var r=i.options
r._opacity&&t(n.helper).css("opacity",r._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,n){n.scrollParentNotHidden||(n.scrollParentNotHidden=n.helper.scrollParent(!1)),n.scrollParentNotHidden[0]!==n.document[0]&&"HTML"!==n.scrollParentNotHidden[0].tagName&&(n.overflowOffset=n.scrollParentNotHidden.offset())},drag:function(e,n,i){var r=i.options,s=!1,o=i.scrollParentNotHidden[0],a=i.document[0]
o!==a&&"HTML"!==o.tagName?(r.axis&&"x"===r.axis||(i.overflowOffset.top+o.offsetHeight-e.pageY<r.scrollSensitivity?o.scrollTop=s=o.scrollTop+r.scrollSpeed:e.pageY-i.overflowOffset.top<r.scrollSensitivity&&(o.scrollTop=s=o.scrollTop-r.scrollSpeed)),r.axis&&"y"===r.axis||(i.overflowOffset.left+o.offsetWidth-e.pageX<r.scrollSensitivity?o.scrollLeft=s=o.scrollLeft+r.scrollSpeed:e.pageX-i.overflowOffset.left<r.scrollSensitivity&&(o.scrollLeft=s=o.scrollLeft-r.scrollSpeed))):(r.axis&&"x"===r.axis||(e.pageY-t(a).scrollTop()<r.scrollSensitivity?s=t(a).scrollTop(t(a).scrollTop()-r.scrollSpeed):t(window).height()-(e.pageY-t(a).scrollTop())<r.scrollSensitivity&&(s=t(a).scrollTop(t(a).scrollTop()+r.scrollSpeed))),r.axis&&"y"===r.axis||(e.pageX-t(a).scrollLeft()<r.scrollSensitivity?s=t(a).scrollLeft(t(a).scrollLeft()-r.scrollSpeed):t(window).width()-(e.pageX-t(a).scrollLeft())<r.scrollSensitivity&&(s=t(a).scrollLeft(t(a).scrollLeft()+r.scrollSpeed)))),s!==!1&&t.ui.ddmanager&&!r.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,n,i){var r=i.options
i.snapElements=[],t(r.snap.constructor!==String?r.snap.items||":data(ui-draggable)":r.snap).each(function(){var e=t(this),n=e.offset()
this!==i.element[0]&&i.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:n.top,left:n.left})})},drag:function(e,n,i){var r,s,o,a,l,u,c,h,d,p,f=i.options,m=f.snapTolerance,g=n.offset.left,v=g+i.helperProportions.width,b=n.offset.top,y=b+i.helperProportions.height
for(d=i.snapElements.length-1;d>=0;d--)l=i.snapElements[d].left-i.margins.left,u=l+i.snapElements[d].width,c=i.snapElements[d].top-i.margins.top,h=c+i.snapElements[d].height,l-m>v||g>u+m||c-m>y||b>h+m||!t.contains(i.snapElements[d].item.ownerDocument,i.snapElements[d].item)?(i.snapElements[d].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[d].item})),i.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(r=Math.abs(c-y)<=m,s=Math.abs(h-b)<=m,o=Math.abs(l-v)<=m,a=Math.abs(u-g)<=m,r&&(n.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top),s&&(n.position.top=i._convertPositionTo("relative",{top:h,left:0}).top),o&&(n.position.left=i._convertPositionTo("relative",{top:0,left:l-i.helperProportions.width}).left),a&&(n.position.left=i._convertPositionTo("relative",{top:0,left:u}).left)),p=r||s||o||a,"outer"!==f.snapMode&&(r=Math.abs(c-b)<=m,s=Math.abs(h-y)<=m,o=Math.abs(l-g)<=m,a=Math.abs(u-v)<=m,r&&(n.position.top=i._convertPositionTo("relative",{top:c,left:0}).top),s&&(n.position.top=i._convertPositionTo("relative",{top:h-i.helperProportions.height,left:0}).top),o&&(n.position.left=i._convertPositionTo("relative",{top:0,left:l}).left),a&&(n.position.left=i._convertPositionTo("relative",{top:0,left:u-i.helperProportions.width}).left)),!i.snapElements[d].snapping&&(r||s||o||a||p)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[d].item})),i.snapElements[d].snapping=r||s||o||a||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,n,i){var r,s=i.options,o=t.makeArray(t(s.stack)).sort(function(e,n){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(n).css("zIndex"),10)||0)})
o.length&&(r=parseInt(t(o[0]).css("zIndex"),10)||0,t(o).each(function(e){t(this).css("zIndex",r+e)}),this.css("zIndex",r+o.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,n,i){var r=t(n.helper),s=i.options
r.css("zIndex")&&(s._zIndex=r.css("zIndex")),r.css("zIndex",s.zIndex)},stop:function(e,n,i){var r=i.options
r._zIndex&&t(n.helper).css("zIndex",r._zIndex)}})
t.ui.draggable
t.widget("ui.resizable",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(e,n){if("hidden"===t(e).css("overflow"))return!1
var i=n&&"left"===n?"scrollLeft":"scrollTop",r=!1
return e[i]>0?!0:(e[i]=1,r=e[i]>0,e[i]=0,r)},_create:function(){var e,n,i,r,s,o=this,a=this.options
if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},n=0;n<e.length;n++)i=t.trim(e[n]),s="ui-resizable-"+i,r=t("<div class='ui-resizable-handle "+s+"'></div>"),r.css({zIndex:a.zIndex}),"se"===i&&r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[i]=".ui-resizable-"+i,this.element.append(r)
this._renderAxis=function(e){var n,i,r,s
e=e||this.element
for(n in this.handles)this.handles[n].constructor===String?this.handles[n]=this.element.children(this.handles[n]).first().show():(this.handles[n].jquery||this.handles[n].nodeType)&&(this.handles[n]=t(this.handles[n]),this._on(this.handles[n],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(i=t(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?i.outerHeight():i.outerWidth(),r=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),e.css(r,s),this._proportionallyResize()),this._handles=this._handles.add(this.handles[n])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(r=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=r&&r[1]?r[1]:"se")}),a.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){a.disabled||(t(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){a.disabled||o.resizing||(t(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy()
var e,n=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()}
return this.elementIsWrapper&&(n(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(e){var n,i,r=!1
for(n in this.handles)i=t(this.handles[n])[0],(i===e.target||t.contains(i,e.target))&&(r=!0)
return!this.options.disabled&&r},_mouseStart:function(e){var n,i,r,s=this.options,o=this.element
return this.resizing=!0,this._renderProxy(),n=this._num(this.helper.css("left")),i=this._num(this.helper.css("top")),s.containment&&(n+=t(s.containment).scrollLeft()||0,i+=t(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:n,top:i},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:n,top:i},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof s.aspectRatio?s.aspectRatio:this.originalSize.width/this.originalSize.height||1,r=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===r?this.axis+"-resize":r),o.addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var n,i,r=this.originalMousePosition,s=this.axis,o=e.pageX-r.left||0,a=e.pageY-r.top||0,l=this._change[s]
return this._updatePrevProperties(),l?(n=l.apply(this,[e,o,a]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(n=this._updateRatio(n,e)),n=this._respectSize(n,e),this._updateCache(n),this._propagate("resize",e),i=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(i)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1
var n,i,r,s,o,a,l,u=this.options,c=this
return this._helper&&(n=this._proportionallyResizeElements,i=n.length&&/textarea/i.test(n[0].nodeName),r=i&&this._hasScroll(n[0],"left")?0:c.sizeDiff.height,s=i?0:c.sizeDiff.width,o={width:c.helper.width()-s,height:c.helper.height()-r},a=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,l=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,u.animate||this.element.css(t.extend(o,{top:l,left:a})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!u.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={}
return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,n,i,r,s,o=this.options
s={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(e=s.minHeight*this.aspectRatio,i=s.minWidth/this.aspectRatio,n=s.maxHeight*this.aspectRatio,r=s.maxWidth/this.aspectRatio,e>s.minWidth&&(s.minWidth=e),i>s.minHeight&&(s.minHeight=i),n<s.maxWidth&&(s.maxWidth=n),r<s.maxHeight&&(s.maxHeight=r)),this._vBoundaries=s},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,n=this.size,i=this.axis
return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===i&&(t.left=e.left+(n.width-t.width),t.top=null),"nw"===i&&(t.top=e.top+(n.height-t.height),t.left=e.left+(n.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,n=this.axis,i=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,r=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,s=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,o=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n)
return s&&(t.width=e.minWidth),o&&(t.height=e.minHeight),i&&(t.width=e.maxWidth),r&&(t.height=e.maxHeight),s&&u&&(t.left=a-e.minWidth),i&&u&&(t.left=a-e.maxWidth),o&&c&&(t.top=l-e.minHeight),r&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,n=[],i=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],r=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)n[e]=parseInt(i[e],10)||0,n[e]+=parseInt(r[e],10)||0
return{height:n[0]+n[2],width:n[1]+n[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,n=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:n.height()-this.outerDimensions.height||0,width:n.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,n=this.options
this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var n=this.originalSize,i=this.originalPosition
return{left:i.left+e,width:n.width-e}},n:function(t,e,n){var i=this.originalSize,r=this.originalPosition
return{top:r.top+n,height:i.height-n}},s:function(t,e,n){return{height:this.originalSize.height+n}},se:function(e,n,i){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,n,i]))},sw:function(e,n,i){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,n,i]))},ne:function(e,n,i){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,n,i]))},nw:function(e,n,i){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,n,i]))}},_propagate:function(e,n){t.ui.plugin.call(this,e,[n,this.ui()]),"resize"!==e&&this._trigger(e,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var n=t(this).resizable("instance"),i=n.options,r=n._proportionallyResizeElements,s=r.length&&/textarea/i.test(r[0].nodeName),o=s&&n._hasScroll(r[0],"left")?0:n.sizeDiff.height,a=s?0:n.sizeDiff.width,l={width:n.size.width-a,height:n.size.height-o},u=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,c=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null
n.element.animate(t.extend(l,c&&u?{top:c,left:u}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var i={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)}
r&&r.length&&t(r[0]).css({width:i.width,height:i.height}),n._updateCache(i),n._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,n,i,r,s,o,a,l=t(this).resizable("instance"),u=l.options,c=l.element,h=u.containment,d=h instanceof t?h.get(0):/parent/.test(h)?c.parent().get(0):h
d&&(l.containerElement=t(d),/document/.test(h)||h===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),n=[],t(["Top","Right","Left","Bottom"]).each(function(t,i){n[t]=l._num(e.css("padding"+i))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-n[3],width:e.innerWidth()-n[1]},i=l.containerOffset,r=l.containerSize.height,s=l.containerSize.width,o=l._hasScroll(d,"left")?d.scrollWidth:s,a=l._hasScroll(d)?d.scrollHeight:r,l.parentData={element:d,left:i.left,top:i.top,width:o,height:a}))},resize:function(e){var n,i,r,s,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,u=o.position,c=o._aspectRatio||e.shiftKey,h={top:0,left:0},d=o.containerElement,p=!0
d[0]!==document&&/static/.test(d.css("position"))&&(h=l),u.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-h.left),c&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=a.helper?l.left:0),u.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),c&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?l.top:0),r=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),r&&s?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),n=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-h.left:o.offset.left-l.left)),i=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-h.top:o.offset.top-l.top)),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,c&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),i+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-i,c&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),n=e.options,i=e.containerOffset,r=e.containerPosition,s=e.containerElement,o=t(e.helper),a=o.offset(),l=o.outerWidth()-e.sizeDiff.width,u=o.outerHeight()-e.sizeDiff.height
e._helper&&!n.animate&&/relative/.test(s.css("position"))&&t(this).css({left:a.left-r.left-i.left,width:l,height:u}),e._helper&&!n.animate&&/static/.test(s.css("position"))&&t(this).css({left:a.left-r.left-i.left,width:l,height:u})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),n=e.options
t(n.alsoResize).each(function(){var e=t(this)
e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})},resize:function(e,n){var i=t(this).resizable("instance"),r=i.options,s=i.originalSize,o=i.originalPosition,a={height:i.size.height-s.height||0,width:i.size.width-s.width||0,top:i.position.top-o.top||0,left:i.position.left-o.left||0}
t(r.alsoResize).each(function(){var e=t(this),i=t(this).data("ui-resizable-alsoresize"),r={},s=e.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"]
t.each(s,function(t,e){var n=(i[e]||0)+(a[e]||0)
n&&n>=0&&(r[e]=n||null)}),e.css(r)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),n=e.options,i=e.size
e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof n.ghost?n.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance")
e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance")
e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,n=t(this).resizable("instance"),i=n.options,r=n.size,s=n.originalSize,o=n.originalPosition,a=n.axis,l="number"==typeof i.grid?[i.grid,i.grid]:i.grid,u=l[0]||1,c=l[1]||1,h=Math.round((r.width-s.width)/u)*u,d=Math.round((r.height-s.height)/c)*c,p=s.width+h,f=s.height+d,m=i.maxWidth&&i.maxWidth<p,g=i.maxHeight&&i.maxHeight<f,v=i.minWidth&&i.minWidth>p,b=i.minHeight&&i.minHeight>f
i.grid=l,v&&(p+=u),b&&(f+=c),m&&(p-=u),g&&(f-=c),/^(se|s|e)$/.test(a)?(n.size.width=p,n.size.height=f):/^(ne)$/.test(a)?(n.size.width=p,n.size.height=f,n.position.top=o.top-d):/^(sw)$/.test(a)?(n.size.width=p,n.size.height=f,n.position.left=o.left-h):((0>=f-c||0>=p-u)&&(e=n._getPaddingPlusBorderDimensions(this)),f-c>0?(n.size.height=f,n.position.top=o.top-d):(f=c-e.height,n.size.height=f,n.position.top=o.top+s.height-f),p-u>0?(n.size.width=p,n.position.left=o.left-h):(p=u-e.width,n.size.width=p,n.position.left=o.left+s.width-p))}})
t.ui.resizable,t.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var n=t(this).css(e).offset().top
0>n&&t(this).css("top",e.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo
return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition
this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var n,i=this
if(this._isOpen&&this._trigger("beforeClose",e)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{n=this.document[0].activeElement,n&&"body"!==n.nodeName.toLowerCase()&&t(n).blur()}catch(r){}this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,n){var i=!1,r=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),s=Math.max.apply(null,r)
return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),i=!0),i&&!n&&this._trigger("focus",e),i},open:function(){var e=this
return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement
t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function n(){var e=this.document[0].activeElement,n=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e)
n||this._focusTabbable()}e.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e)
if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var n=this.uiDialog.find(":tabbable"),i=n.filter(":first"),r=n.filter(":last")
e.target!==r[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==i[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){r.focus()}),e.preventDefault()):(this._delay(function(){i.focus()}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e
this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,n=this.options.buttons
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(n)||t.isArray(n)&&!n.length?void this.uiDialog.removeClass("ui-dialog-buttons"):(t.each(n,function(n,i){var r,s
i=t.isFunction(i)?{click:i,text:n}:i,i=t.extend({type:"button"},i),r=i.click,i.click=function(){r.apply(e.element[0],arguments)},s={icons:i.icons,text:i.showText},delete i.icons,delete i.showText,t("<button></button>",i).button(s).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var n=this,i=this.options
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(i,r){t(this).addClass("ui-dialog-dragging"),n._blockFrames(),n._trigger("dragStart",i,e(r))},drag:function(t,i){n._trigger("drag",t,e(i))},stop:function(r,s){var o=s.offset.left-n.document.scrollLeft(),a=s.offset.top-n.document.scrollTop()
i.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" top"+(a>=0?"+":"")+a,of:n.window},t(this).removeClass("ui-dialog-dragging"),n._unblockFrames(),n._trigger("dragStop",r,e(s))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var n=this,i=this.options,r=i.resizable,s=this.uiDialog.css("position"),o="string"==typeof r?r:"n,e,s,w,se,sw,ne,nw"
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:this._minHeight(),handles:o,start:function(i,r){t(this).addClass("ui-dialog-resizing"),n._blockFrames(),n._trigger("resizeStart",i,e(r))},resize:function(t,i){n._trigger("resize",t,e(i))},stop:function(r,s){var o=n.uiDialog.offset(),a=o.left-n.document.scrollLeft(),l=o.top-n.document.scrollTop()
i.height=n.uiDialog.height(),i.width=n.uiDialog.width(),i.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:n.window},t(this).removeClass("ui-dialog-resizing"),n._unblockFrames(),n._trigger("resizeStop",r,e(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),n=t.inArray(this,e);-1!==n&&e.splice(n,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances")
return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options
return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible")
t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var n=this,i=!1,r={}
t.each(e,function(t,e){n._setOption(t,e),t in n.sizeRelatedOptions&&(i=!0),t in n.resizableRelatedOptions&&(r[t]=e)}),i&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",r)},_setOption:function(t,e){var n,i,r=this.uiDialog
"dialogClass"===t&&r.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(n=r.is(":data(ui-draggable)"),n&&!e&&r.draggable("destroy"),!n&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(i=r.is(":data(ui-resizable)"),i&&!e&&r.resizable("destroy"),i&&"string"==typeof e&&r.resizable("option","handles",e),i||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,n,i=this.options
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),i.minWidth>i.width&&(i.width=i.minWidth),t=this.uiDialog.css({height:"auto",width:i.width}).outerHeight(),e=Math.max(0,i.minHeight-t),n="number"==typeof i.maxHeight?Math.max(0,i.maxHeight-t):"none","auto"===i.height?this.element.css({minHeight:e,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,i.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this)
return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0
this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1
t?this.document.data("ui-dialog-overlays",t):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}})
t.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,n=this.options,i=n.accept
this.isover=!1,this.isout=!0,this.accept=t.isFunction(i)?i:function(t){return t.is(i)},this.proportions=function(){return arguments.length?void(e=arguments[0]):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(n.scope),n.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope]
this._splice(e),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,n){if("accept"===e)this.accept=t.isFunction(n)?n:function(t){return t.is(n)}
else if("scope"===e){var i=t.ui.ddmanager.droppables[this.options.scope]
this._splice(i),this._addToManager(n)}this._super(e,n)},_activate:function(e){var n=t.ui.ddmanager.current
this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",e,this.ui(n))},_deactivate:function(e){var n=t.ui.ddmanager.current
this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",e,this.ui(n))},_over:function(e){var n=t.ui.ddmanager.current
n&&(n.currentItem||n.element)[0]!==this.element[0]&&this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(n)))},_out:function(e){var n=t.ui.ddmanager.current
n&&(n.currentItem||n.element)[0]!==this.element[0]&&this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(n)))},_drop:function(e,n){var i=n||t.ui.ddmanager.current,r=!1
return i&&(i.currentItem||i.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var n=t(this).droppable("instance")
return n.options.greedy&&!n.options.disabled&&n.options.scope===i.options.scope&&n.accept.call(n.element[0],i.currentItem||i.element)&&t.ui.intersect(i,t.extend(n,{offset:n.element.offset()}),n.options.tolerance,e)?(r=!0,!1):void 0}),r?!1:this.accept.call(this.element[0],i.currentItem||i.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(i)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(){function t(t,e,n){return t>=e&&e+n>t}return function(e,n,i,r){if(!n.offset)return!1
var s=(e.positionAbs||e.position.absolute).left+e.margins.left,o=(e.positionAbs||e.position.absolute).top+e.margins.top,a=s+e.helperProportions.width,l=o+e.helperProportions.height,u=n.offset.left,c=n.offset.top,h=u+n.proportions().width,d=c+n.proportions().height
switch(i){case"fit":return s>=u&&h>=a&&o>=c&&d>=l
case"intersect":return u<s+e.helperProportions.width/2&&a-e.helperProportions.width/2<h&&c<o+e.helperProportions.height/2&&l-e.helperProportions.height/2<d
case"pointer":return t(r.pageY,c,n.proportions().height)&&t(r.pageX,u,n.proportions().width)
case"touch":return(o>=c&&d>=o||l>=c&&d>=l||c>o&&l>d)&&(s>=u&&h>=s||a>=u&&h>=a||u>s&&a>h)
default:return!1}}}(),t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,n){var i,r,s=t.ui.ddmanager.droppables[e.options.scope]||[],o=n?n.type:null,a=(e.currentItem||e.element).find(":data(ui-droppable)").addBack()
t:for(i=0;i<s.length;i++)if(!(s[i].options.disabled||e&&!s[i].accept.call(s[i].element[0],e.currentItem||e.element))){for(r=0;r<a.length;r++)if(a[r]===s[i].element[0]){s[i].proportions().height=0
continue t}s[i].visible="none"!==s[i].element.css("display"),s[i].visible&&("mousedown"===o&&s[i]._activate.call(s[i],n),s[i].offset=s[i].element.offset(),s[i].proportions({width:s[i].element[0].offsetWidth,height:s[i].element[0].offsetHeight}))}},drop:function(e,n){var i=!1
return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance,n)&&(i=this._drop.call(this,n)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,n)))}),i},dragStart:function(e,n){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,n)})},drag:function(e,n){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,n),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var i,r,s,o=t.ui.intersect(e,this,this.options.tolerance,n),a=!o&&this.isover?"isout":o&&!this.isover?"isover":null
a&&(this.options.greedy&&(r=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===r}),s.length&&(i=t(s[0]).droppable("instance"),i.greedyChild="isover"===a)),i&&"isover"===a&&(i.isover=!1,i.isout=!0,i._out.call(i,n)),this[a]=!0,this["isout"===a?"isover":"isout"]=!1,this["isover"===a?"_over":"_out"].call(this,n),i&&"isout"===a&&(i.isout=!1,i.isover=!0,i._over.call(i,n)))}})},dragStop:function(e,n){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,n)}}
var b=(t.ui.droppable,"ui-effects-"),y=t
t.effects={effect:{}},function(t,e){function n(t,e,n){var i=h[e.type]||{}
return null==t?n||!e.def?null:e.def:(t=i.floor?~~t:parseFloat(t),isNaN(t)?e.def:i.mod?(t+i.mod)%i.mod:0>t?0:i.max<t?i.max:t)}function i(e){var n=u(),i=n._rgba=[]
return e=e.toLowerCase(),f(l,function(t,r){var s,o=r.re.exec(e),a=o&&r.parse(o),l=r.space||"rgba"
return a?(s=n[l](a),n[c[l].cache]=s[c[l].cache],i=n._rgba=s._rgba,!1):void 0}),i.length?("0,0,0,0"===i.join()&&t.extend(i,s.transparent),n):s[e]}function r(t,e,n){return n=(n+1)%1,1>6*n?t+(e-t)*n*6:1>2*n?e:2>3*n?t+(e-t)*(2/3-n)*6:t}var s,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],u=t.Color=function(e,n,i,r){return new t.Color.fn.parse(e,n,i,r)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=u.support={},p=t("<p>")[0],f=t.each
p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),u.fn=t.extend(u.prototype,{parse:function(r,o,a,l){if(r===e)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=t(r).css(o),o=e)
var h=this,d=t.type(r),p=this._rgba=[]
return o!==e&&(r=[r,o,a,l],d="array"),"string"===d?this.parse(i(r)||s._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=n(r[e.idx],e)}),this):"object"===d?(r instanceof u?f(c,function(t,e){r[e.cache]&&(h[e.cache]=r[e.cache].slice())}):f(c,function(e,i){var s=i.cache
f(i.props,function(t,e){if(!h[s]&&i.to){if("alpha"===t||null==r[t])return
h[s]=i.to(h._rgba)}h[s][e.idx]=n(r[t],e,!0)}),h[s]&&t.inArray(null,h[s].slice(0,3))<0&&(h[s][3]=1,i.from&&(h._rgba=i.from(h[s])))}),this):void 0},is:function(t){var e=u(t),n=!0,i=this
return f(c,function(t,r){var s,o=e[r.cache]
return o&&(s=i[r.cache]||r.to&&r.to(i._rgba)||[],f(r.props,function(t,e){return null!=o[e.idx]?n=o[e.idx]===s[e.idx]:void 0})),n}),n},_space:function(){var t=[],e=this
return f(c,function(n,i){e[i.cache]&&t.push(n)}),t.pop()},transition:function(t,e){var i=u(t),r=i._space(),s=c[r],o=0===this.alpha()?u("transparent"):this,a=o[s.cache]||s.to(o._rgba),l=a.slice()
return i=i[s.cache],f(s.props,function(t,r){var s=r.idx,o=a[s],u=i[s],c=h[r.type]||{}
null!==u&&(null===o?l[s]=u:(c.mod&&(u-o>c.mod/2?o+=c.mod:o-u>c.mod/2&&(o-=c.mod)),l[s]=n((u-o)*e+o,r)))}),this[r](l)},blend:function(e){if(1===this._rgba[3])return this
var n=this._rgba.slice(),i=n.pop(),r=u(e)._rgba
return u(t.map(n,function(t,e){return(1-i)*r[e]+i*t}))},toRgbaString:function(){var e="rgba(",n=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t})
return 1===n[3]&&(n.pop(),e="rgb("),e+n.join()+")"},toHslaString:function(){var e="hsla(",n=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t})
return 1===n[3]&&(n.pop(),e="hsl("),e+n.join()+")"},toHexString:function(e){var n=this._rgba.slice(),i=n.pop()
return e&&n.push(~~(255*i)),"#"+t.map(n,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]]
var e,n,i=t[0]/255,r=t[1]/255,s=t[2]/255,o=t[3],a=Math.max(i,r,s),l=Math.min(i,r,s),u=a-l,c=a+l,h=.5*c
return e=l===a?0:i===a?60*(r-s)/u+360:r===a?60*(s-i)/u+120:60*(i-r)/u+240,n=0===u?0:.5>=h?u/c:u/(2-c),[Math.round(e)%360,n,h,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]]
var e=t[0]/360,n=t[1],i=t[2],s=t[3],o=.5>=i?i*(1+n):i+n-i*n,a=2*i-o
return[Math.round(255*r(a,o,e+1/3)),Math.round(255*r(a,o,e)),Math.round(255*r(a,o,e-1/3)),s]},f(c,function(i,r){var s=r.props,o=r.cache,l=r.to,c=r.from
u.fn[i]=function(i){if(l&&!this[o]&&(this[o]=l(this._rgba)),i===e)return this[o].slice()
var r,a=t.type(i),h="array"===a||"object"===a?i:arguments,d=this[o].slice()
return f(s,function(t,e){var i=h["object"===a?t:e.idx]
null==i&&(i=d[e.idx]),d[e.idx]=n(i,e)}),c?(r=u(c(d)),r[o]=d,r):u(d)},f(s,function(e,n){u.fn[e]||(u.fn[e]=function(r){var s,o=t.type(r),l="alpha"===e?this._hsla?"hsla":"rgba":i,u=this[l](),c=u[n.idx]
return"undefined"===o?c:("function"===o&&(r=r.call(this,c),o=t.type(r)),null==r&&n.empty?this:("string"===o&&(s=a.exec(r),s&&(r=c+parseFloat(s[2])*("+"===s[1]?1:-1))),u[n.idx]=r,this[l](u)))})})}),u.hook=function(e){var n=e.split(" ")
f(n,function(e,n){t.cssHooks[n]={set:function(e,r){var s,o,a=""
if("transparent"!==r&&("string"!==t.type(r)||(s=i(r)))){if(r=u(s||r),!d.rgba&&1!==r._rgba[3]){for(o="backgroundColor"===n?e.parentNode:e;(""===a||"transparent"===a)&&o&&o.style;)try{a=t.css(o,"backgroundColor"),o=o.parentNode}catch(l){}r=r.blend(a&&"transparent"!==a?a:"_default")}r=r.toRgbaString()}try{e.style[n]=r}catch(l){}}},t.fx.step[n]=function(e){e.colorInit||(e.start=u(e.elem,n),e.end=u(e.end),e.colorInit=!0),t.cssHooks[n].set(e.elem,e.start.transition(e.end,e.pos))}})},u.hook(o),t.cssHooks.borderColor={expand:function(t){var e={}
return f(["Top","Right","Bottom","Left"],function(n,i){e["border"+i+"Color"]=t}),e}},s=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(y),function(){function e(e){var n,i,r=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,s={}
if(r&&r.length&&r[0]&&r[r[0]])for(i=r.length;i--;)n=r[i],"string"==typeof r[n]&&(s[t.camelCase(n)]=r[n])
else for(n in r)"string"==typeof r[n]&&(s[n]=r[n])
return s}function n(e,n){var i,s,o={}
for(i in n)s=n[i],e[i]!==s&&(r[i]||(t.fx.step[i]||!isNaN(parseFloat(s)))&&(o[i]=s))
return o}var i=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1}
t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,n){t.fx.step[n]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(y.style(t.elem,n,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(r,s,o,a){var l=t.speed(s,o,a)
return this.queue(function(){var s,o=t(this),a=o.attr("class")||"",u=l.children?o.find("*").addBack():o
u=u.map(function(){var n=t(this)
return{el:n,start:e(this)}}),s=function(){t.each(i,function(t,e){r[e]&&o[e+"Class"](r[e])})},s(),u=u.map(function(){return this.end=e(this.el[0]),this.diff=n(this.start,this.end),this}),o.attr("class",a),u=u.map(function(){var e=this,n=t.Deferred(),i=t.extend({},l,{queue:!1,complete:function(){n.resolve(e)}})
return this.el.animate(this.diff,i),n.promise()}),t.when.apply(t,u.get()).done(function(){s(),t.each(arguments,function(){var e=this.el
t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(n,i,r,s){return i?t.effects.animateClass.call(this,{add:n},i,r,s):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(n,i,r,s){return arguments.length>1?t.effects.animateClass.call(this,{remove:n},i,r,s):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(n,i,r,s,o){return"boolean"==typeof i||void 0===i?r?t.effects.animateClass.call(this,i?{add:n}:{remove:n},r,s,o):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:n},i,r,s)}}(t.fn.toggleClass),switchClass:function(e,n,i,r,s){return t.effects.animateClass.call(this,{add:n,remove:e},i,r,s)}})}(),function(){function e(e,n,i,r){return t.isPlainObject(e)&&(n=e,e=e.effect),e={effect:e},null==n&&(n={}),t.isFunction(n)&&(r=n,i=null,n={}),("number"==typeof n||t.fx.speeds[n])&&(r=i,i=n,n={}),t.isFunction(i)&&(r=i,i=null),n&&t.extend(e,n),i=i||n.duration,e.duration=t.fx.off?0:"number"==typeof i?i:i in t.fx.speeds?t.fx.speeds[i]:t.fx.speeds._default,e.complete=r||n.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.11.4",save:function(t,e){for(var n=0;n<e.length;n++)null!==e[n]&&t.data(b+e[n],t[0].style[e[n]])},restore:function(t,e){var n,i
for(i=0;i<e.length;i++)null!==e[i]&&(n=t.data(b+e[i]),void 0===n&&(n=""),t.css(e[i],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var n,i
switch(t[0]){case"top":n=0
break
case"middle":n=.5
break
case"bottom":n=1
break
default:n=t[0]/e.height}switch(t[1]){case"left":i=0
break
case"center":i=.5
break
case"right":i=1
break
default:i=t[1]/e.width}return{x:i,y:n}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent()
var n={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},i=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:e.width(),height:e.height()},s=document.activeElement
try{s.id}catch(o){s=document.body}return e.wrap(i),(e[0]===s||t.contains(e[0],s))&&t(s).focus(),i=e.parent(),"static"===e.css("position")?(i.css({position:"relative"}),e.css({position:"relative"})):(t.extend(n,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,i){n[i]=e.css(i),isNaN(parseInt(n[i],10))&&(n[i]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(r),i.css(n).show()},removeWrapper:function(e){var n=document.activeElement
return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===n||t.contains(e[0],n))&&t(n).focus()),e},setTransition:function(e,n,i,r){return r=r||{},t.each(n,function(t,n){var s=e.cssUnit(n)
s[0]>0&&(r[n]=s[0]*i+s[1])}),r}}),t.fn.extend({effect:function(){function n(e){function n(){t.isFunction(s)&&s.call(r[0]),t.isFunction(e)&&e()}var r=t(this),s=i.complete,a=i.mode;(r.is(":hidden")?"hide"===a:"show"===a)?(r[a](),n()):o.call(r[0],i,n)}var i=e.apply(this,arguments),r=i.mode,s=i.queue,o=t.effects.effect[i.effect]
return t.fx.off||!o?r?this[r](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):s===!1?this.each(n):this.queue(s||"fx",n)},show:function(t){return function(i){if(n(i))return t.apply(this,arguments)
var r=e.apply(this,arguments)
return r.mode="show",this.effect.call(this,r)}}(t.fn.show),hide:function(t){return function(i){if(n(i))return t.apply(this,arguments)
var r=e.apply(this,arguments)
return r.mode="hide",this.effect.call(this,r)}}(t.fn.hide),toggle:function(t){return function(i){if(n(i)||"boolean"==typeof i)return t.apply(this,arguments)
var r=e.apply(this,arguments)
return r.mode="toggle",this.effect.call(this,r)}}(t.fn.toggle),cssUnit:function(e){var n=this.css(e),i=[]
return t.each(["em","px","%","pt"],function(t,e){n.indexOf(e)>0&&(i=[parseFloat(n),e])}),i}})}(),function(){var e={}
t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,n){e[n]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,n){t.easing["easeIn"+e]=n,t.easing["easeOut"+e]=function(t){return 1-n(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?n(2*t)/2:1-n(-2*t+2)/2}})}()
t.effects,t.effects.effect.blind=function(e,n){var i,r,s,o=t(this),a=/up|down|vertical/,l=/up|left|vertical|horizontal/,u=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(o,e.mode||"hide"),h=e.direction||"up",d=a.test(h),p=d?"height":"width",f=d?"top":"left",m=l.test(h),g={},v="show"===c
o.parent().is(".ui-effects-wrapper")?t.effects.save(o.parent(),u):t.effects.save(o,u),o.show(),i=t.effects.createWrapper(o).css({overflow:"hidden"}),r=i[p](),s=parseFloat(i.css(f))||0,g[p]=v?r:0,m||(o.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[f]=v?s:r+s),v&&(i.css(p,0),m||i.css(f,s+r)),i.animate(g,{duration:e.duration,easing:e.easing,queue:!1,complete:function(){"hide"===c&&o.hide(),t.effects.restore(o,u),t.effects.removeWrapper(o),n()}})},t.effects.effect.bounce=function(e,n){var i,r,s,o=t(this),a=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"effect"),u="hide"===l,c="show"===l,h=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||u?1:0),m=e.duration/f,g=e.easing,v="up"===h||"down"===h?"top":"left",b="up"===h||"left"===h,y=o.queue(),$=y.length
for((c||u)&&a.push("opacity"),t.effects.save(o,a),o.show(),t.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(s={opacity:1},s[v]=0,o.css("opacity",0).css(v,b?2*-d:2*d).animate(s,m,g)),u&&(d/=Math.pow(2,p-1)),s={},s[v]=0,i=0;p>i;i++)r={},r[v]=(b?"-=":"+=")+d,o.animate(r,m,g).animate(s,m,g),d=u?2*d:d/2
u&&(r={opacity:0},r[v]=(b?"-=":"+=")+d,o.animate(r,m,g)),o.queue(function(){u&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),n()}),$>1&&y.splice.apply(y,[1,0].concat(y.splice($,f+1))),o.dequeue()},t.effects.effect.clip=function(e,n){var i,r,s,o=t(this),a=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"hide"),u="show"===l,c=e.direction||"vertical",h="vertical"===c,d=h?"height":"width",p=h?"top":"left",f={}
t.effects.save(o,a),o.show(),i=t.effects.createWrapper(o).css({overflow:"hidden"}),r="IMG"===o[0].tagName?i:o,s=r[d](),u&&(r.css(d,0),r.css(p,s/2)),f[d]=u?s:0,f[p]=u?0:s/2,r.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){u||o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),n()}})},t.effects.effect.drop=function(e,n){var i,r=t(this),s=["position","top","bottom","left","right","opacity","height","width"],o=t.effects.setMode(r,e.mode||"hide"),a="show"===o,l=e.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l?"pos":"neg",h={opacity:a?1:0}
t.effects.save(r,s),r.show(),t.effects.createWrapper(r),i=e.distance||r["top"===u?"outerHeight":"outerWidth"](!0)/2,a&&r.css("opacity",0).css(u,"pos"===c?-i:i),h[u]=(a?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+i,r.animate(h,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&r.hide(),t.effects.restore(r,s),t.effects.removeWrapper(r),n()}})},t.effects.effect.explode=function(e,n){function i(){y.push(this),y.length===h*d&&r()}function r(){p.css({visibility:"visible"}),t(y).remove(),m||p.hide(),n()}var s,o,a,l,u,c,h=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=h,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),b=Math.ceil(p.outerHeight()/h),y=[]
for(s=0;h>s;s++)for(l=g.top+s*b,c=s-(h-1)/2,o=0;d>o;o++)a=g.left+o*v,u=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-s*b}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:b,left:a+(m?u*v:0),top:l+(m?c*b:0),opacity:m?0:1}).animate({left:a+(m?0:u*v),top:l+(m?0:c*b),opacity:m?1:0},e.duration||500,e.easing,i)},t.effects.effect.fade=function(e,n){var i=t(this),r=t.effects.setMode(i,e.mode||"toggle")
i.animate({opacity:r},{queue:!1,duration:e.duration,easing:e.easing,complete:n})},t.effects.effect.fold=function(e,n){var i,r,s=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(s,e.mode||"hide"),l="show"===a,u="hide"===a,c=e.size||15,h=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=l!==d,f=p?["width","height"]:["height","width"],m=e.duration/2,g={},v={}
t.effects.save(s,o),s.show(),i=t.effects.createWrapper(s).css({overflow:"hidden"}),r=p?[i.width(),i.height()]:[i.height(),i.width()],h&&(c=parseInt(h[1],10)/100*r[u?0:1]),l&&i.css(d?{height:0,width:c}:{height:c,width:0}),g[f[0]]=l?r[0]:c,v[f[1]]=l?r[1]:0,i.animate(g,m,e.easing).animate(v,m,e.easing,function(){u&&s.hide(),t.effects.restore(s,o),t.effects.removeWrapper(s),n()})},t.effects.effect.highlight=function(e,n){var i=t(this),r=["backgroundImage","backgroundColor","opacity"],s=t.effects.setMode(i,e.mode||"show"),o={backgroundColor:i.css("backgroundColor")}
"hide"===s&&(o.opacity=0),t.effects.save(i,r),i.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===s&&i.hide(),t.effects.restore(i,r),n()}})},t.effects.effect.size=function(e,n){var i,r,s,o=t(this),a=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],u=["width","height","overflow"],c=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(o,e.mode||"effect"),f=e.restore||"effect"!==p,m=e.scale||"both",g=e.origin||["middle","center"],v=o.css("position"),b=f?a:l,y={height:0,width:0,outerHeight:0,outerWidth:0}
"show"===p&&o.show(),i={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===e.mode&&"show"===p?(o.from=e.to||y,o.to=e.from||i):(o.from=e.from||("show"===p?y:i),o.to=e.to||("hide"===p?y:i)),s={from:{y:o.from.height/i.height,x:o.from.width/i.width},to:{y:o.to.height/i.height,x:o.to.width/i.width}},("box"===m||"both"===m)&&(s.from.y!==s.to.y&&(b=b.concat(h),o.from=t.effects.setTransition(o,h,s.from.y,o.from),o.to=t.effects.setTransition(o,h,s.to.y,o.to)),s.from.x!==s.to.x&&(b=b.concat(d),o.from=t.effects.setTransition(o,d,s.from.x,o.from),o.to=t.effects.setTransition(o,d,s.to.x,o.to))),("content"===m||"both"===m)&&s.from.y!==s.to.y&&(b=b.concat(c).concat(u),o.from=t.effects.setTransition(o,c,s.from.y,o.from),o.to=t.effects.setTransition(o,c,s.to.y,o.to)),t.effects.save(o,b),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(r=t.effects.getBaseline(g,i),o.from.top=(i.outerHeight-o.outerHeight())*r.y,o.from.left=(i.outerWidth-o.outerWidth())*r.x,o.to.top=(i.outerHeight-o.to.outerHeight)*r.y,o.to.left=(i.outerWidth-o.to.outerWidth)*r.x),o.css(o.from),("content"===m||"both"===m)&&(h=h.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),u=a.concat(h).concat(d),o.find("*[width]").each(function(){var n=t(this),i={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()}
f&&t.effects.save(n,u),n.from={height:i.height*s.from.y,width:i.width*s.from.x,outerHeight:i.outerHeight*s.from.y,outerWidth:i.outerWidth*s.from.x},n.to={height:i.height*s.to.y,width:i.width*s.to.x,outerHeight:i.height*s.to.y,outerWidth:i.width*s.to.x},s.from.y!==s.to.y&&(n.from=t.effects.setTransition(n,h,s.from.y,n.from),n.to=t.effects.setTransition(n,h,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=t.effects.setTransition(n,d,s.from.x,n.from),n.to=t.effects.setTransition(n,d,s.to.x,n.to)),n.css(n.from),n.animate(n.to,e.duration,e.easing,function(){f&&t.effects.restore(n,u)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),t.effects.restore(o,b),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,n){var i=parseInt(n,10),r=t?o.to.left:o.to.top
return"auto"===n?r+"px":i+r+"px"})})),t.effects.removeWrapper(o),n()}})},t.effects.effect.scale=function(e,n){var i=t(this),r=t.extend(!0,{},e),s=t.effects.setMode(i,e.mode||"effect"),o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===s?0:100),a=e.direction||"both",l=e.origin,u={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()},c={y:"horizontal"!==a?o/100:1,x:"vertical"!==a?o/100:1}
r.effect="size",r.queue=!1,r.complete=n,"effect"!==s&&(r.origin=l||["middle","center"],r.restore=!0),r.from=e.from||("show"===s?{height:0,width:0,outerHeight:0,outerWidth:0}:u),r.to={height:u.height*c.y,width:u.width*c.x,outerHeight:u.outerHeight*c.y,outerWidth:u.outerWidth*c.x},r.fade&&("show"===s&&(r.from.opacity=0,r.to.opacity=1),"hide"===s&&(r.from.opacity=1,r.to.opacity=0)),i.effect(r)},t.effects.effect.puff=function(e,n){var i=t(this),r=t.effects.setMode(i,e.mode||"hide"),s="hide"===r,o=parseInt(e.percent,10)||150,a=o/100,l={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()}
t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:r,complete:n,percent:s?o:100,from:s?l:{height:l.height*a,width:l.width*a,outerHeight:l.outerHeight*a,outerWidth:l.outerWidth*a}}),i.effect(e)},t.effects.effect.pulsate=function(e,n){var i,r=t(this),s=t.effects.setMode(r,e.mode||"show"),o="show"===s,a="hide"===s,l=o||"hide"===s,u=2*(e.times||5)+(l?1:0),c=e.duration/u,h=0,d=r.queue(),p=d.length
for((o||!r.is(":visible"))&&(r.css("opacity",0).show(),h=1),i=1;u>i;i++)r.animate({opacity:h},c,e.easing),h=1-h
r.animate({opacity:h},c,e.easing),r.queue(function(){a&&r.hide(),n()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,u+1))),r.dequeue()},t.effects.effect.shake=function(e,n){var i,r=t(this),s=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(r,e.mode||"effect"),a=e.direction||"left",l=e.distance||20,u=e.times||3,c=2*u+1,h=Math.round(e.duration/c),d="up"===a||"down"===a?"top":"left",p="up"===a||"left"===a,f={},m={},g={},v=r.queue(),b=v.length
for(t.effects.save(r,s),r.show(),t.effects.createWrapper(r),f[d]=(p?"-=":"+=")+l,m[d]=(p?"+=":"-=")+2*l,g[d]=(p?"-=":"+=")+2*l,r.animate(f,h,e.easing),i=1;u>i;i++)r.animate(m,h,e.easing).animate(g,h,e.easing)
r.animate(m,h,e.easing).animate(f,h/2,e.easing).queue(function(){"hide"===o&&r.hide(),t.effects.restore(r,s),t.effects.removeWrapper(r),n()}),b>1&&v.splice.apply(v,[1,0].concat(v.splice(b,c+1))),r.dequeue()},t.effects.effect.slide=function(e,n){var i,r=t(this),s=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(r,e.mode||"show"),a="show"===o,l=e.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,h={}
t.effects.save(r,s),r.show(),i=e.distance||r["top"===u?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(r).css({overflow:"hidden"}),a&&r.css(u,c?isNaN(i)?"-"+i:-i:i),h[u]=(a?c?"+=":"-=":c?"-=":"+=")+i,r.animate(h,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&r.hide(),t.effects.restore(r,s),t.effects.removeWrapper(r),n()}})},t.effects.effect.transfer=function(e,n){var i=t(this),r=t(e.to),s="fixed"===r.css("position"),o=t("body"),a=s?o.scrollTop():0,l=s?o.scrollLeft():0,u=r.offset(),c={top:u.top-a,left:u.left-l,height:r.innerHeight(),width:r.innerWidth()},h=i.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:h.top-a,left:h.left-l,height:i.innerHeight(),width:i.innerWidth(),position:s?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),n()})},t.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),void this._refreshValue())},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value
delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!e).attr("aria-disabled",e),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,n=this._percentage()
this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(n.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,n=this
this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(n.options.filter,n.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),n=e.offset()
t.data(this,"selectable-item",{element:this,$element:e,left:n.left,top:n.top,right:n.left+e.outerWidth(),bottom:n.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var n=this,i=this.options
this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(i.filter,this.element[0]),this._trigger("start",e),t(i.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),i.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var i=t.data(this,"selectable-item")
i.startselected=!0,e.metaKey||e.ctrlKey||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,n._trigger("unselecting",e,{unselecting:i.element}))}),t(e.target).parents().addBack().each(function(){var i,r=t.data(this,"selectable-item")
return r?(i=!e.metaKey&&!e.ctrlKey||!r.$element.hasClass("ui-selected"),r.$element.removeClass(i?"ui-unselecting":"ui-selected").addClass(i?"ui-selecting":"ui-unselecting"),r.unselecting=!i,r.selecting=i,r.selected=i,i?n._trigger("selecting",e,{selecting:r.element}):n._trigger("unselecting",e,{unselecting:r.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var n,i=this,r=this.options,s=this.opos[0],o=this.opos[1],a=e.pageX,l=e.pageY
return s>a&&(n=a,a=s,s=n),o>l&&(n=l,l=o,o=n),this.helper.css({left:s,top:o,width:a-s,height:l-o}),this.selectees.each(function(){var n=t.data(this,"selectable-item"),u=!1
n&&n.element!==i.element[0]&&("touch"===r.tolerance?u=!(n.left>a||n.right<s||n.top>l||n.bottom<o):"fit"===r.tolerance&&(u=n.left>s&&n.right<a&&n.top>o&&n.bottom<l),u?(n.selected&&(n.$element.removeClass("ui-selected"),n.selected=!1),n.unselecting&&(n.$element.removeClass("ui-unselecting"),n.unselecting=!1),n.selecting||(n.$element.addClass("ui-selecting"),n.selecting=!0,i._trigger("selecting",e,{selecting:n.element}))):(n.selecting&&((e.metaKey||e.ctrlKey)&&n.startselected?(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.$element.addClass("ui-selected"),n.selected=!0):(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.startselected&&(n.$element.addClass("ui-unselecting"),n.unselecting=!0),i._trigger("unselecting",e,{unselecting:n.element}))),n.selected&&(e.metaKey||e.ctrlKey||n.startselected||(n.$element.removeClass("ui-selected"),n.selected=!1,n.$element.addClass("ui-unselecting"),n.unselecting=!0,i._trigger("unselecting",e,{unselecting:n.element})))))}),!1}},_mouseStop:function(e){var n=this
return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var i=t.data(this,"selectable-item")
i.$element.removeClass("ui-unselecting"),i.unselecting=!1,i.startselected=!1,n._trigger("unselected",e,{unselected:i.element})}),t(".ui-selecting",this.element[0]).each(function(){var i=t.data(this,"selectable-item")
i.$element.removeClass("ui-selecting").addClass("ui-selected"),i.selecting=!1,i.selected=!0,i.startselected=!0,n._trigger("selected",e,{selected:i.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var t=this.element.uniqueId().attr("id")
this.ids={element:t,button:t+"-button",menu:t+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var e=this
this.label=t("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),t("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=t("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){e.menuItems||e._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var e=this
this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(t,n){t.preventDefault(),e._setSelection(),e._select(n.item.data("ui-selectmenu-item"),t)},focus:function(t,n){var i=n.item.data("ui-selectmenu-item")
null!=e.focusIndex&&i.index!==e.focusIndex&&(e._trigger("focus",t,{item:i}),e.isOpen||e._select(i,t)),e.focusIndex=i.index,e.button.attr("aria-activedescendant",e.menuItems.eq(i.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty()
var t,e=this.element.find("option")
e.length&&(this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(e,n){var i=this,r=""
t.each(n,function(n,s){s.optgroup!==r&&(t("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(s.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:s.optgroup}).appendTo(e),r=s.optgroup),i._renderItemData(e,s)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,n){var i=t("<li>")
return n.disabled&&i.addClass("ui-state-disabled"),this._setText(i,n.label),i.appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var n,i,r=".ui-menu-item"
this.isOpen?n=this.menuItems.eq(this.focusIndex):(n=this.menuItems.eq(this.element[0].selectedIndex),r+=":not(.ui-state-disabled)"),i="first"===t||"last"===t?n["first"===t?"prevAll":"nextAll"](r).eq(-1):n[t+"All"](r).eq(0),i.length&&this.menuInstance.focus(e,i)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t
this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t
window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var n=!0
switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),n=!1
break
case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e)
break
case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e)
break
case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e)
break
case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e)
break
case t.ui.keyCode.LEFT:this._move("prev",e)
break
case t.ui.keyCode.RIGHT:this._move("next",e)
break
case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e)
break
case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e)
break
default:this.menu.trigger(e),n=!1}n&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex)
e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var n=this.element[0].selectedIndex
this.element[0].selectedIndex=t.index,this._setText(this.buttonText,t.label),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==n&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id")
this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){"icons"===t&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button),this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"disabled"===t&&(this.menuInstance.option("disabled",e),this.button.toggleClass("ui-state-disabled",e).attr("aria-disabled",e),this.element.prop("disabled",e),e?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===t&&this._resizeButton()},_appendTo:function(){var e=this.options.appendTo
return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width
t||(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(e){var n=[]
e.each(function(e,i){var r=t(i),s=r.parent("optgroup")
n.push({element:r,index:e,value:r.val(),label:r.text(),optgroup:s.attr("label")||"",disabled:s.prop("disabled")||r.prop("disabled")})}),this.items=n},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),t.widget("ui.slider",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,n,i=this.options,r=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[]
for(n=i.values&&i.values.length||1,r.length>n&&(r.slice(n).remove(),r=r.slice(0,n)),e=r.length;n>e;e++)o.push(s)
this.handles=r.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,n=""
e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),n="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(n+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var n,i,r,s,o,a,l,u,c=this,h=this.options
return h.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(n),r=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var n=Math.abs(i-c.values(e));(r>n||r===n&&(e===c._lastChangedValue||c.values(e)===h.min))&&(r=n,s=t(this),o=e)}),a=this._start(e,o),a===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),l=s.offset(),u=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=u?{left:0,top:0}:{left:e.pageX-l.left-s.width()/2,top:e.pageY-l.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,i),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},n=this._normValueFromMouse(e)
return this._slide(t,this._handleIndex,n),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,n,i,r,s
return"horizontal"===this.orientation?(e=this.elementSize.width,n=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,n=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),i=n/e,i>1&&(i=1),0>i&&(i=0),"vertical"===this.orientation&&(i=1-i),r=this._valueMax()-this._valueMin(),s=this._valueMin()+i*r,this._trimAlignValue(s)},_start:function(t,e){var n={handle:this.handles[e],value:this.value()}
return this.options.values&&this.options.values.length&&(n.value=this.values(e),n.values=this.values()),this._trigger("start",t,n)},_slide:function(t,e,n){var i,r,s
this.options.values&&this.options.values.length?(i=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&n>i||1===e&&i>n)&&(n=i),n!==this.values(e)&&(r=this.values(),r[e]=n,s=this._trigger("slide",t,{handle:this.handles[e],value:n,values:r}),i=this.values(e?0:1),s!==!1&&this.values(e,n))):n!==this.value()&&(s=this._trigger("slide",t,{handle:this.handles[e],value:n}),s!==!1&&this.value(n))},_stop:function(t,e){var n={handle:this.handles[e],value:this.value()}
this.options.values&&this.options.values.length&&(n.value=this.values(e),n.values=this.values()),this._trigger("stop",t,n)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[e],value:this.value()}
this.options.values&&this.options.values.length&&(n.value=this.values(e),n.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,n)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,n){var i,r,s
if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(n),this._refreshValue(),void this._change(null,e)
if(!arguments.length)return this._values()
if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value()
for(i=this.options.values,r=arguments[0],s=0;s<i.length;s+=1)i[s]=this._trimAlignValue(r[s]),this._change(null,s)
this._refreshValue()},_setOption:function(e,n){var i,r=0
switch("range"===e&&this.options.range===!0&&("min"===n?(this.options.value=this._values(0),this.options.values=null):"max"===n&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(r=this.options.values.length),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!n),this._super(e,n),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===n?"bottom":"left","")
break
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1
break
case"values":for(this._animateOff=!0,this._refreshValue(),i=0;r>i;i+=1)this._change(null,i)
this._animateOff=!1
break
case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1
break
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value
return t=this._trimAlignValue(t)},_values:function(t){var e,n,i
if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e)
if(this.options.values&&this.options.values.length){for(n=this.options.values.slice(),i=0;i<n.length;i+=1)n[i]=this._trimAlignValue(n[i])
return n}return[]},_trimAlignValue:function(t){if(t<=this._valueMin())return this._valueMin()
if(t>=this._valueMax())return this._valueMax()
var e=this.options.step>0?this.options.step:1,n=(t-this._valueMin())%e,i=t-n
return 2*Math.abs(n)>=e&&(i+=n>0?e:-e),parseFloat(i.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),n=this.options.step,i=Math.floor(+(t-e).toFixed(this._precision())/n)*n
t=i+e,this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step)
return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),n=e.indexOf(".")
return-1===n?0:e.length-n-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var e,n,i,r,s,o=this.options.range,a=this.options,l=this,u=this._animateOff?!1:a.animate,c={}
this.options.values&&this.options.values.length?this.handles.each(function(i){n=(l.values(i)-l._valueMin())/(l._valueMax()-l._valueMin())*100,c["horizontal"===l.orientation?"left":"bottom"]=n+"%",t(this).stop(1,1)[u?"animate":"css"](c,a.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===i&&l.range.stop(1,1)[u?"animate":"css"]({left:n+"%"},a.animate),1===i&&l.range[u?"animate":"css"]({width:n-e+"%"},{queue:!1,duration:a.animate})):(0===i&&l.range.stop(1,1)[u?"animate":"css"]({bottom:n+"%"},a.animate),1===i&&l.range[u?"animate":"css"]({height:n-e+"%"},{queue:!1,duration:a.animate}))),e=n}):(i=this.value(),r=this._valueMin(),s=this._valueMax(),n=s!==r?(i-r)/(s-r)*100:0,c["horizontal"===this.orientation?"left":"bottom"]=n+"%",this.handle.stop(1,1)[u?"animate":"css"](c,a.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({width:n+"%"},a.animate),"max"===o&&"horizontal"===this.orientation&&this.range[u?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:a.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[u?"animate":"css"]({height:n+"%"},a.animate),"max"===o&&"vertical"===this.orientation&&this.range[u?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:a.animate}))},_handleEvents:{keydown:function(e){var n,i,r,s,o=t(e.target).data("ui-slider-handle-index")
switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(e.target).addClass("ui-state-active"),n=this._start(e,o),n===!1))return}switch(s=this.options.step,i=r=this.options.values&&this.options.values.length?this.values(o):this.value(),e.keyCode){case t.ui.keyCode.HOME:r=this._valueMin()
break
case t.ui.keyCode.END:r=this._valueMax()
break
case t.ui.keyCode.PAGE_UP:r=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/this.numPages)
break
case t.ui.keyCode.PAGE_DOWN:r=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/this.numPages)
break
case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(i===this._valueMax())return
r=this._trimAlignValue(i+s)
break
case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i===this._valueMin())return
r=this._trimAlignValue(i-s)}this._slide(e,o,r)},keyup:function(e){var n=t(e.target).data("ui-slider-handle-index")
this._keySliding&&(this._keySliding=!1,this._stop(e,n),this._change(e,n),t(e.target).removeClass("ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,n){return t>=e&&e+n>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),t.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy()
for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item")
return this},_mouseCapture:function(e,n){var i=null,r=!1,s=this
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,s.widgetName+"-item")===s?(i=t(this),!1):void 0}),t.data(e.target,s.widgetName+"-item")===s&&(i=t(e.target)),i&&(!this.options.handle||n||(t(this.options.handle,i).find("*").addBack().each(function(){this===e.target&&(r=!0)}),r))?(this.currentItem=i,this._removeCurrentsFromItems(),!0):!1)},_mouseStart:function(e,n,i){var r,s,o=this.options
if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(s=this.document.find("body"),this.storedCursor=s.css("cursor"),s.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(s)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!i)for(r=this.containers.length-1;r>=0;r--)this.containers[r]._trigger("activate",e,this._uiHash(this))
return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var n,i,r,s,o=this.options,a=!1
for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=a=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=a=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-this.document.scrollTop()<o.scrollSensitivity?a=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<o.scrollSensitivity&&(a=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),e.pageX-this.document.scrollLeft()<o.scrollSensitivity?a=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(a=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),a!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),n=this.items.length-1;n>=0;n--)if(i=this.items[n],r=i.item[0],s=this._intersectsWithPointer(i),s&&i.instance===this.currentContainer&&r!==this.currentItem[0]&&this.placeholder[1===s?"next":"prev"]()[0]!==r&&!t.contains(this.placeholder[0],r)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],r):!0)){if(this.direction=1===s?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(i))break
this._rearrange(e,i),this._trigger("change",e,this._uiHash())
break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,n){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var i=this,r=this.placeholder.offset(),s=this.options.axis,o={}
s&&"x"!==s||(o.left=r.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),s&&"y"!==s||(o.top=r.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){i._clear(e)})}else this._clear(e,n)
return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show()
for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var n=this._getItemsAsjQuery(e&&e.connected),i=[]
return e=e||{},t(n).each(function(){var n=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/)
n&&i.push((e.key||n[1]+"[]")+"="+(e.key&&e.expression?n[1]:n[2]))}),!i.length&&e.key&&i.push(e.key+"="),i.join("&")},toArray:function(e){var n=this._getItemsAsjQuery(e&&e.connected),i=[]
return e=e||{},n.each(function(){i.push(t(e.item||this).attr(e.attribute||"id")||"")}),i},_intersectsWith:function(t){var e=this.positionAbs.left,n=e+this.helperProportions.width,i=this.positionAbs.top,r=i+this.helperProportions.height,s=t.left,o=s+t.width,a=t.top,l=a+t.height,u=this.offset.click.top,c=this.offset.click.left,h="x"===this.options.axis||i+u>a&&l>i+u,d="y"===this.options.axis||e+c>s&&o>e+c,p=h&&d
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:s<e+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&a<i+this.helperProportions.height/2&&r-this.helperProportions.height/2<l},_intersectsWithPointer:function(t){var e="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),i=e&&n,r=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection()
return i?this.floating?s&&"right"===s||"down"===r?2:1:r&&("down"===r?2:1):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),n=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection()
return this.floating&&r?"right"===r&&n||"left"===r&&!n:i&&("down"===i&&e||"up"===i&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top
return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left
return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options
return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function n(){a.push(this)}var i,r,s,o,a=[],l=[],u=this._connectWith()
if(u&&e)for(i=u.length-1;i>=0;i--)for(s=t(u[i],this.document[0]),r=s.length-1;r>=0;r--)o=t.data(s[r],this.widgetFullName),o&&o!==this&&!o.options.disabled&&l.push([t.isFunction(o.options.items)?o.options.items.call(o.element):t(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o])
for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=l.length-1;i>=0;i--)l[i][0].each(n)
return t(a)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)")
this.items=t.grep(this.items,function(t){for(var n=0;n<e.length;n++)if(e[n]===t.item[0])return!1
return!0})},_refreshItems:function(e){this.items=[],this.containers=[this]
var n,i,r,s,o,a,l,u,c=this.items,h=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith()
if(d&&this.ready)for(n=d.length-1;n>=0;n--)for(r=t(d[n],this.document[0]),i=r.length-1;i>=0;i--)s=t.data(r[i],this.widgetFullName),s&&s!==this&&!s.options.disabled&&(h.push([t.isFunction(s.options.items)?s.options.items.call(s.element[0],e,{item:this.currentItem}):t(s.options.items,s.element),s]),this.containers.push(s))
for(n=h.length-1;n>=0;n--)for(o=h[n][1],a=h[n][0],i=0,u=a.length;u>i;i++)l=t(a[i]),l.data(this.widgetName+"-item",o),c.push({item:l,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset())
var n,i,r,s
for(n=this.items.length-1;n>=0;n--)i=this.items[n],i.instance!==this.currentContainer&&this.currentContainer&&i.item[0]!==this.currentItem[0]||(r=this.options.toleranceElement?t(this.options.toleranceElement,i.item):i.item,e||(i.width=r.outerWidth(),i.height=r.outerHeight()),s=r.offset(),i.left=s.left,i.top=s.top)
if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this)
else for(n=this.containers.length-1;n>=0;n--)s=this.containers[n].element.offset(),this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight()
return this},_createPlaceholder:function(e){e=e||this
var n,i=e.options
i.placeholder&&i.placeholder.constructor!==String||(n=i.placeholder,i.placeholder={element:function(){var i=e.currentItem[0].nodeName.toLowerCase(),r=t("<"+i+">",e.document[0]).addClass(n||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")
return"tbody"===i?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(r)):"tr"===i?e._createTrPlaceholder(e.currentItem,r):"img"===i&&r.attr("src",e.currentItem.attr("src")),n||r.css("visibility","hidden"),r},update:function(t,r){(!n||i.forcePlaceholderSize)&&(r.height()||r.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),r.width()||r.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(i.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),i.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,n){var i=this
e.children().each(function(){t("<td>&#160;</td>",i.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)})},_contactContainers:function(e){var n,i,r,s,o,a,l,u,c,h,d=null,p=null
for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(d&&t.contains(this.containers[n].element[0],d.element[0]))continue
d=this.containers[n],p=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",e,this._uiHash(this)),this.containers[n].containerCache.over=0)
if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1)
else{for(r=1e4,s=null,c=d.floating||this._isFloating(this.currentItem),o=c?"left":"top",a=c?"width":"height",h=c?"clientX":"clientY",i=this.items.length-1;i>=0;i--)t.contains(this.containers[p].element[0],this.items[i].item[0])&&this.items[i].item[0]!==this.currentItem[0]&&(l=this.items[i].item.offset()[o],u=!1,e[h]-l>this.items[i][a]/2&&(u=!0),Math.abs(e[h]-l)<r&&(r=Math.abs(e[h]-l),s=this.items[i],this.direction=u?"up":"down"))
if(!s&&!this.options.dropOnEmpty)return
if(this.currentContainer===this.containers[p])return void(this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1))
s?this._rearrange(e,s,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var n=this.options,i=t.isFunction(n.helper)?t(n.helper.apply(this.element[0],[e,this.currentItem])):"clone"===n.helper?this.currentItem.clone():this.currentItem
return i.parents("body").length||t("parent"!==n.appendTo?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!i[0].style.width||n.forceHelperSize)&&i.width(this.currentItem.width()),(!i[0].style.height||n.forceHelperSize)&&i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var e=this.offsetParent.offset()
return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position()
return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,n,i,r=this.options
"parent"===r.containment&&(r.containment=this.helper[0].parentNode),("document"===r.containment||"window"===r.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===r.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===r.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(r.containment)||(e=t(r.containment)[0],n=t(r.containment).offset(),i="hidden"!==t(e).css("overflow"),this.containment=[n.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,n.left+(i?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(i?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,n){n||(n=this.position)
var i="absolute"===e?1:-1,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(r[0].tagName)
return{top:n.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():s?0:r.scrollTop())*i,left:n.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():s?0:r.scrollLeft())*i}},_generatePosition:function(e){var n,i,r=this.options,s=e.pageX,o=e.pageY,a="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(a[0].tagName)
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),r.grid&&(n=this.originalPageY+Math.round((o-this.originalPageY)/r.grid[1])*r.grid[1],o=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-r.grid[1]:n+r.grid[1]:n,i=this.originalPageX+Math.round((s-this.originalPageX)/r.grid[0])*r.grid[0],s=this.containment?i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2]?i:i-this.offset.click.left>=this.containment[0]?i-r.grid[0]:i+r.grid[0]:i)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:a.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:a.scrollLeft())}},_rearrange:function(t,e,n,i){n?n[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1
var r=this.counter
this._delay(function(){r===this.counter&&this.refreshPositions(!i)})},_clear:function(t,e){function n(t,e,n){return function(i){n._trigger(t,i,e._uiHash(e))}}this.reverting=!1
var i,r=[]
if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="")
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show()
for(this.fromOutside&&!e&&r.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||r.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(r.push(function(t){this._trigger("remove",t,this._uiHash())}),r.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||r.push(n("deactivate",this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(n("out",this,this.containers[i])),this.containers[i].containerCache.over=0)
if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(i=0;i<r.length;i++)r[i].call(this,t)
this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var n=e||this
return{helper:n.helper,placeholder:n.placeholder||t([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},n=this.element
return t.each(["min","max","step"],function(t,i){var r=n.attr(i)
void 0!==r&&r.length&&(e[i]=r)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",t)))},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1
this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function n(){var t=this.element[0]===this.document[0].activeElement
t||(this.element.focus(),this.previous=i,this._delay(function(){this.previous=i}))}var i
i=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),n.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,n.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:void this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var n=this.options,i=t.ui.keyCode
switch(e.keyCode){case i.UP:return this._repeat(null,1,e),!0
case i.DOWN:return this._repeat(null,-1,e),!0
case i.PAGE_UP:return this._repeat(null,n.page,e),!0
case i.PAGE_DOWN:return this._repeat(null,-n.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,n){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,n)},t),this._spin(e*this.options.step,n)},_spin:function(t,e){var n=this.value()||0
this.counter||(this.counter=1),n=this._adjustValue(n+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:n})===!1||(this._value(n),this.counter++)},_increment:function(e){var n=this.options.incremental
return n?t.isFunction(n)?n(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step)
return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=t.toString(),n=e.indexOf(".")
return-1===n?0:e.length-n-1},_adjustValue:function(t){var e,n,i=this.options
return e=null!==i.min?i.min:0,n=t-e,n=Math.round(n/i.step)*i.step,t=e+n,t=parseFloat(t.toFixed(this._precision())),null!==i.max&&t>i.max?i.max:null!==i.min&&t<i.min?i.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var n=this._parse(this.element.val())
return this.options[t]=e,void this.element.val(this._format(n))}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),this.buttons.button(e?"disable":"enable"))},_setOptions:l(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value()
return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var n
""!==t&&(n=this._parse(t),null!==n&&(e||(n=this._adjustValue(n)),t=this._format(n))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:l(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:l(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:l(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:l(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?void l(this._value).call(this,t):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/
return function(e){var n,i
e=e.cloneNode(!1),n=e.href.replace(t,""),i=location.href.replace(t,"")
try{n=decodeURIComponent(n)}catch(r){}try{i=decodeURIComponent(i)}catch(r){}return e.hash.length>1&&n===i}}(),_create:function(){var e=this,n=this.options
this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible),this._processTabs(),n.active=this._initialActive(),t.isArray(n.disabled)&&(n.disabled=t.unique(n.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(n.active):t(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var e=this.options.active,n=this.options.collapsible,i=location.hash.substring(1)
return null===e&&(i&&this.tabs.each(function(n,r){return t(r).attr("aria-controls")===i?(e=n,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=n?!1:0)),!n&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var n=t(this.document[0].activeElement).closest("li"),i=this.tabs.index(n),r=!0
if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:i++
break
case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:r=!1,i--
break
case t.ui.keyCode.END:i=this.anchors.length-1
break
case t.ui.keyCode.HOME:i=0
break
case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),void this._activate(i)
case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),void this._activate(i===this.options.active?!1:i)
default:return}e.preventDefault(),clearTimeout(this.activating),i=this._focusNextTab(i,r),e.ctrlKey||e.metaKey||(n.attr("aria-selected","false"),this.tabs.eq(i).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",i)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,n){function i(){return e>r&&(e=0),0>e&&(e=r),e}for(var r=this.tabs.length-1;-1!==t.inArray(i(),this.options.disabled);)e=n?e+1:e-1
return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,e){return"active"===t?void this._activate(e):"disabled"===t?void this._setupDisabled(e):(this._super(t,e),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),void("heightStyle"===t&&this._setupHeightStyle(e)))},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,n=this.tablist.children(":has(a[href])")
e.disabled=t.map(n.filter(".ui-state-disabled"),function(t){return n.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,n=this.tabs,i=this.anchors,r=this.panels
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(n,i){var r,s,o,a=t(i).uniqueId().attr("id"),l=t(i).closest("li"),u=l.attr("aria-controls")
e._isLocal(i)?(r=i.hash,o=r.substring(1),s=e.element.find(e._sanitizeSelector(r))):(o=l.attr("aria-controls")||t({}).uniqueId()[0].id,r="#"+o,s=e.element.find(r),s.length||(s=e._createPanel(o),s.insertAfter(e.panels[n-1]||e.tablist)),s.attr("aria-live","polite")),s.length&&(e.panels=e.panels.add(s)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":o,"aria-labelledby":a}),s.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),n&&(this._off(n.not(this.tabs)),this._off(i.not(this.anchors)),this._off(r.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1)
for(var n,i=0;n=this.tabs[i];i++)e===!0||-1!==t.inArray(i,e)?t(n).addClass("ui-state-disabled").attr("aria-disabled","true"):t(n).removeClass("ui-state-disabled").removeAttr("aria-disabled")
this.options.disabled=e},_setupEvents:function(e){var n={}
e&&t.each(e.split(" "),function(t,e){n[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var n,i=this.element.parent()
"fill"===e?(n=i.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),i=e.css("position")
"absolute"!==i&&"fixed"!==i&&(n-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){n-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,n-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(n=0,this.panels.each(function(){n=Math.max(n,t(this).height("").height())}).height(n))},_eventHandler:function(e){var n=this.options,i=this.active,r=t(e.currentTarget),s=r.closest("li"),o=s[0]===i[0],a=o&&n.collapsible,l=a?t():this._getPanelForTab(s),u=i.length?this._getPanelForTab(i):t(),c={oldTab:i,oldPanel:u,newTab:a?t():s,newPanel:l}
e.preventDefault(),s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",e,c)===!1||(n.active=a?!1:this.tabs.index(s),this.active=o?t():s,this.xhr&&this.xhr.abort(),u.length||l.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),l.length&&this.load(this.tabs.index(s),e),this._toggle(e,c))},_toggle:function(e,n){function i(){s.running=!1,s._trigger("activate",e,n)}function r(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&s.options.show?s._show(o,s.options.show,i):(o.show(),i())}var s=this,o=n.newPanel,a=n.oldPanel
this.running=!0,a.length&&this.options.hide?this._hide(a,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),a.hide(),r()),a.attr("aria-hidden","true"),n.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&a.length?n.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),n.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var n,i=this._findActive(e)
i[0]!==this.active[0]&&(i.length||(i=this.active),n=i.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),n=e.data("ui-tabs-aria-controls")
n?e.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var n=this.options.disabled
n!==!1&&(void 0===e?n=!1:(e=this._getIndex(e),n=t.isArray(n)?t.map(n,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,n){return n!==e?n:null})),this._setupDisabled(n))},disable:function(e){var n=this.options.disabled
if(n!==!0){if(void 0===e)n=!0
else{if(e=this._getIndex(e),-1!==t.inArray(e,n))return
n=t.isArray(n)?t.merge([e],n).sort():[e]}this._setupDisabled(n)}},load:function(e,n){e=this._getIndex(e)
var i=this,r=this.tabs.eq(e),s=r.find(".ui-tabs-anchor"),o=this._getPanelForTab(r),a={tab:r,panel:o},l=function(t,e){"abort"===e&&i.panels.stop(!1,!0),r.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),t===i.xhr&&delete i.xhr}
this._isLocal(s[0])||(this.xhr=t.ajax(this._ajaxSettings(s,n,a)),this.xhr&&"canceled"!==this.xhr.statusText&&(r.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done(function(t,e,r){setTimeout(function(){o.html(t),i._trigger("load",n,a),l(r,e)},1)}).fail(function(t,e){setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,n,i){var r=this
return{url:e.attr("href"),beforeSend:function(e,s){return r._trigger("beforeLoad",n,t.extend({jqXHR:e,ajaxSettings:s},i))}}},_getPanelForTab:function(e){var n=t(e).attr("aria-controls")
return this.element.find(this._sanitizeSelector("#"+n))}}),t.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var e=t(this).attr("title")||""
return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(e,n){var i=(e.attr("aria-describedby")||"").split(/\s+/)
i.push(n),e.data("ui-tooltip-id",n).attr("aria-describedby",t.trim(i.join(" ")))},_removeDescribedBy:function(e){var n=e.data("ui-tooltip-id"),i=(e.attr("aria-describedby")||"").split(/\s+/),r=t.inArray(n,i);-1!==r&&i.splice(r,1),e.removeData("ui-tooltip-id"),i=t.trim(i.join(" ")),i?e.attr("aria-describedby",i):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(e,n){var i=this
return"disabled"===e?(this[n?"_disable":"_enable"](),void(this.options[e]=n)):(this._super(e,n),void("content"===e&&t.each(this.tooltips,function(t,e){i._updateContent(e.element)})))},_disable:function(){var e=this
t.each(this.tooltips,function(n,i){var r=t.Event("blur")
r.target=r.currentTarget=i.element[0],e.close(r,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this)
e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this)
e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var n=this,i=t(e?e.target:this.element).closest(this.options.items)
i.length&&!i.data("ui-tooltip-id")&&(i.attr("title")&&i.data("ui-tooltip-title",i.attr("title")),i.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&i.parents().each(function(){var e,i=t(this)
i.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,n.close(e,!0)),i.attr("title")&&(i.uniqueId(),n.parents[this.id]={element:this,title:i.attr("title")},i.attr("title",""))}),this._registerCloseHandlers(e,i),this._updateContent(i,e))},_updateContent:function(t,e){var n,i=this.options.content,r=this,s=e?e.type:null
return"string"==typeof i?this._open(e,t,i):(n=i.call(t[0],function(n){r._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=s),this._open(e,t,n))})}),void(n&&this._open(e,t,n)))},_open:function(e,n,i){function r(t){u.of=t,o.is(":hidden")||o.position(u)}var s,o,a,l,u=t.extend({},this.options.position)
if(i){if(s=this._find(n))return void s.tooltip.find(".ui-tooltip-content").html(i)
n.is("[title]")&&(e&&"mouseover"===e.type?n.attr("title",""):n.removeAttr("title")),s=this._tooltip(n),o=s.tooltip,this._addDescribedBy(n,o.attr("id")),o.find(".ui-tooltip-content").html(i),this.liveRegion.children().hide(),i.clone?(l=i.clone(),l.removeAttr("id").find("[id]").removeAttr("id")):l=i,t("<div>").html(l).appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:r}),r(e)):o.position(t.extend({of:n},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(a=this.delayedShow=setInterval(function(){o.is(":visible")&&(r(u.of),clearInterval(a))},t.fx.interval)),this._trigger("open",e,{tooltip:o})}},_registerCloseHandlers:function(e,n){var i={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e)
i.currentTarget=n[0],this.close(i,!0)}}}
n[0]!==this.element[0]&&(i.remove=function(){this._removeTooltip(this._find(n).tooltip)}),e&&"mouseover"!==e.type||(i.mouseleave="close"),e&&"focusin"!==e.type||(i.focusout="close"),this._on(!0,n,i)},close:function(e){var n,i=this,r=t(e?e.currentTarget:this.element),s=this._find(r)
return s?(n=s.tooltip,void(s.closing||(clearInterval(this.delayedShow),r.data("ui-tooltip-title")&&!r.attr("title")&&r.attr("title",r.data("ui-tooltip-title")),this._removeDescribedBy(r),s.hiding=!0,n.stop(!0),this._hide(n,this.options.hide,function(){i._removeTooltip(t(this))}),r.removeData("ui-tooltip-open"),this._off(r,"mouseleave focusout keyup"),r[0]!==this.element[0]&&this._off(r,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,n){t(n.element).attr("title",n.title),delete i.parents[e]}),s.closing=!0,this._trigger("close",e,{tooltip:n}),s.hiding||(s.closing=!1)))):void r.removeData("ui-tooltip-open")},_tooltip:function(e){var n=t("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),i=n.uniqueId().attr("id")
return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]={element:e,tooltip:n}},_find:function(t){var e=t.data("ui-tooltip-id")
return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this
t.each(this.tooltips,function(n,i){var r=t.Event("blur"),s=i.element
r.target=r.currentTarget=s[0],e.close(r,!0),t("#"+n).remove(),s.data("ui-tooltip-title")&&(s.attr("title")||s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})}),function(t,e,n){"use strict"
e.module("ui.sortable",[]).value("uiSortableConfig",{}).directive("uiSortable",["uiSortableConfig","$timeout","$log",function(t,i,r){return{require:"?ngModel",scope:{ngModel:"=",uiSortable:"="},link:function(s,o,a,l){function u(t,e){return e&&"function"==typeof e?function(){t.apply(this,arguments),e.apply(this,arguments)}:t}function c(t){var e=t.data("ui-sortable")
return e&&"object"==typeof e&&"ui-sortable"===e.widgetFullName?e:null}function h(t,e){var n=t.sortable("option","helper")
return"clone"===n||"function"==typeof n&&e.item.sortable.isCustomHelperUsed()}function d(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}function p(t,e){for(var n=null,i=0;i<t.length;i++){var r=t[i]
if(r.element[0]===e[0]){n=r.scope
break}}return n}function f(t,e){e.item.sortable._destroy()}var m,g={},v={"ui-floating":n},b={receive:null,remove:null,start:null,stop:null,update:null},y={helper:null}
return e.extend(g,v,t,s.uiSortable),e.element.fn&&e.element.fn.jquery?(l?(s.$watch("ngModel.length",function(){i(function(){c(o)&&o.sortable("refresh")},0,!1)}),b.start=function(t,i){if("auto"===g["ui-floating"]){var r=i.item.siblings(),s=c(e.element(t.target))
s.floating=d(r)}i.item.sortable={model:l.$modelValue[i.item.index()],index:i.item.index(),source:i.item.parent(),sourceModel:l.$modelValue,cancel:function(){i.item.sortable._isCanceled=!0},isCanceled:function(){return i.item.sortable._isCanceled},isCustomHelperUsed:function(){return!!i.item.sortable._isCustomHelperUsed},_isCanceled:!1,_isCustomHelperUsed:i.item.sortable._isCustomHelperUsed,_destroy:function(){e.forEach(i.item.sortable,function(t,e){i.item.sortable[e]=n})}}},b.activate=function(t,n){m=o.contents()
var i=o.sortable("option","placeholder")
if(i&&i.element&&"function"==typeof i.element){var r=i.element()
r=e.element(r)
var a=o.find('[class="'+r.attr("class")+'"]:not([ng-repeat], [data-ng-repeat])')
m=m.not(a)}var l=n.item.sortable._connectedSortables||[]
l.push({element:o,scope:s}),n.item.sortable._connectedSortables=l},b.update=function(t,e){if(!e.item.sortable.received){e.item.sortable.dropindex=e.item.index()
var n=e.item.parent()
e.item.sortable.droptarget=n
var i=p(e.item.sortable._connectedSortables,n)
e.item.sortable.droptargetModel=i.ngModel,o.sortable("cancel")}h(o,e)&&!e.item.sortable.received&&"parent"===o.sortable("option","appendTo")&&(m=m.not(m.last())),m.appendTo(o),e.item.sortable.received&&(m=null),e.item.sortable.received&&!e.item.sortable.isCanceled()&&s.$apply(function(){l.$modelValue.splice(e.item.sortable.dropindex,0,e.item.sortable.moved)})},b.stop=function(t,e){!e.item.sortable.received&&"dropindex"in e.item.sortable&&!e.item.sortable.isCanceled()?s.$apply(function(){l.$modelValue.splice(e.item.sortable.dropindex,0,l.$modelValue.splice(e.item.sortable.index,1)[0])}):"dropindex"in e.item.sortable&&!e.item.sortable.isCanceled()||h(o,e)||m.appendTo(o),m=null},b.receive=function(t,e){e.item.sortable.received=!0},b.remove=function(t,e){"dropindex"in e.item.sortable||(o.sortable("cancel"),e.item.sortable.cancel()),e.item.sortable.isCanceled()||s.$apply(function(){e.item.sortable.moved=l.$modelValue.splice(e.item.sortable.index,1)[0]})},y.helper=function(t){return t&&"function"==typeof t?function(e,n){var i=t.apply(this,arguments)
return n.sortable._isCustomHelperUsed=n!==i,i}:t},s.$watch("uiSortable",function(t){var n=c(o)
n&&e.forEach(t,function(t,e){return e in v?("ui-floating"!==e||t!==!1&&t!==!0||(n.floating=t),void(g[e]=t)):(b[e]?("stop"===e&&(t=u(t,function(){s.$apply()}),t=u(t,f)),t=u(b[e],t)):y[e]&&(t=y[e](t)),g[e]=t,void o.sortable("option",e,t))})},!0),e.forEach(b,function(t,e){g[e]=u(t,g[e]),"stop"===e&&(g[e]=u(g[e],f))})):r.info("ui.sortable: ngModel not provided!",o),void o.sortable(g)):void r.error("ui.sortable: jQuery should be included before AngularJS!")}}}])}(window,window.angular),function(t){function e(t,e){if(!(t.originalEvent.touches.length>1)){t.preventDefault()
var n=t.originalEvent.changedTouches[0],i=document.createEvent("MouseEvents")
i.initMouseEvent(e,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(i)}}if(t.support.touch="ontouchend"in document,t.support.touch){var n,i=t.ui.mouse.prototype,r=i._mouseInit
i._touchStart=function(t){var i=this
!n&&i._mouseCapture(t.originalEvent.changedTouches[0])&&(n=!0,i._touchMoved=!1,e(t,"mouseover"),e(t,"mousemove"),e(t,"mousedown"))},i._touchMove=function(t){n&&(this._touchMoved=!0,e(t,"mousemove"))},i._touchEnd=function(t){n&&(e(t,"mouseup"),e(t,"mouseout"),this._touchMoved||e(t,"click"),n=!1)},i._mouseInit=function(){var e=this
e.element.bind("touchstart",t.proxy(e,"_touchStart")).bind("touchmove",t.proxy(e,"_touchMove")).bind("touchend",t.proxy(e,"_touchEnd")),r.call(e)}}}(jQuery),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){var e=t.fn.jquery.split(" ")[0].split(".")
if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict"
function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var n in e)if(void 0!==t.style[n])return{end:e[n]}
return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this
t(this).one("bsTransitionEnd",function(){n=!0})
var r=function(){n||t(i).trigger(t.support.transition.end)}
return setTimeout(r,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var n=t(this),r=n.data("bs.alert")
r||n.data("bs.alert",r=new i(this)),"string"==typeof e&&r[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close)}
i.VERSION="3.3.1",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function n(){o.detach().trigger("closed.bs.alert").remove()}var r=t(this),s=r.attr("data-target")
s||(s=r.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""))
var o=t(s)
e&&e.preventDefault(),o.length||(o=r.closest(".alert")),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())}
var r=t.fn.alert
t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=r,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),r=i.data("bs.button"),s="object"==typeof e&&e
r||i.data("bs.button",r=new n(this,s)),"toggle"==e?r.toggle():e&&r.setState(e)})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.isLoading=!1}
n.VERSION="3.3.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",i=this.$element,r=i.is("input")?"val":"html",s=i.data()
e+="Text",null==s.resetText&&i.data("resetText",i[r]()),setTimeout(t.proxy(function(){i[r](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]')
if(e.length){var n=this.$element.find("input")
"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&n.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"))
t&&this.$element.toggleClass("active")}
var i=t.fn.button
t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=t(n.target)
i.hasClass("btn")||(i=i.closest(".btn")),e.call(i,"toggle"),n.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),r=i.data("bs.carousel"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),o="string"==typeof e?e:s.slide
r||i.data("bs.carousel",r=new n(this,s)),"number"==typeof e?r.to(e):o?r[o]():s.interval&&r.pause().cycle()})}var n=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))}
n.VERSION="3.3.1",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev()
break
case 39:this.next()
break
default:return}t.preventDefault()}},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.getItemForDirection=function(t,e){var n="prev"==t?-1:1,i=this.getItemIndex(e),r=(i+n)%this.$items.length
return this.$items.eq(r)},n.prototype.to=function(t){var e=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"))
return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",this.$items.eq(t))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,i){var r=this.$element.find(".item.active"),s=i||this.getItemForDirection(e,r),o=this.interval,a="next"==e?"left":"right",l="next"==e?"first":"last",u=this
if(!s.length){if(!this.options.wrap)return
s=this.$element.find(".item")[l]()}if(s.hasClass("active"))return this.sliding=!1
var c=s[0],h=t.Event("slide.bs.carousel",{relatedTarget:c,direction:a})
if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active")
var d=t(this.$indicators.children()[this.getItemIndex(s)])
d&&d.addClass("active")}var p=t.Event("slid.bs.carousel",{relatedTarget:c,direction:a})
return t.support.transition&&this.$element.hasClass("slide")?(s.addClass(e),s[0].offsetWidth,r.addClass(a),s.addClass(a),r.one("bsTransitionEnd",function(){s.removeClass([e,a].join(" ")).addClass("active"),r.removeClass(["active",a].join(" ")),u.sliding=!1,setTimeout(function(){u.$element.trigger(p)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(r.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(p)),o&&this.cycle(),this}}
var i=t.fn.carousel
t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this}
var r=function(n){var i,r=t(this),s=t(r.attr("data-target")||(i=r.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""))
if(s.hasClass("carousel")){var o=t.extend({},s.data(),r.data()),a=r.attr("data-slide-to")
a&&(o.interval=!1),e.call(s,o),a&&s.data("bs.carousel").to(a),n.preventDefault()}}
t(document).on("click.bs.carousel.data-api","[data-slide]",r).on("click.bs.carousel.data-api","[data-slide-to]",r),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this)
e.call(n,n.data())})})}(jQuery),+function(t){"use strict"
function e(e){var n,i=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")
return t(i)}function n(e){return this.each(function(){var n=t(this),r=n.data("bs.collapse"),s=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e)
!r&&s.toggle&&"show"==e&&(s.toggle=!1),r||n.data("bs.collapse",r=new i(this,s)),"string"==typeof e&&r[e]()})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.$trigger=t(this.options.trigger).filter('[href="#'+e.id+'"], [data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()}
i.VERSION="3.3.1",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},i.prototype.dimension=function(){var t=this.$element.hasClass("width")
return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,r=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing")
if(!(r&&r.length&&(e=r.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse")
if(this.$element.trigger(s),!s.isDefaultPrevented()){r&&r.length&&(n.call(r,"hide"),e||r.data("bs.collapse",null))
var o=this.dimension()
this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1
var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")}
if(!t.support.transition)return a.call(this)
var l=t.camelCase(["scroll",o].join("-"))
this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[o](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse")
if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension()
this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1
var r=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")}
return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(i.TRANSITION_DURATION):r.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,i){var r=t(i)
this.addAriaAndCollapsedClass(e(r),r)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in")
t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)}
var r=t.fn.collapse
t.fn.collapse=n,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=r,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var r=t(this)
r.attr("data-target")||i.preventDefault()
var s=e(r),o=s.data("bs.collapse"),a=o?"toggle":t.extend({},r.data(),{trigger:this})
n.call(s,a)})}(jQuery),+function(t){"use strict"
function e(e){e&&3===e.which||(t(r).remove(),t(s).each(function(){var i=t(this),r=n(i),s={relatedTarget:this}
r.hasClass("open")&&(r.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(i.attr("aria-expanded","false"),r.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function n(e){var n=e.attr("data-target")
n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""))
var i=n&&t(n)
return i&&i.length?i:e.parent()}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown")
i||n.data("bs.dropdown",i=new o(this)),"string"==typeof e&&i[e].call(n)})}var r=".dropdown-backdrop",s='[data-toggle="dropdown"]',o=function(e){t(e).on("click.bs.dropdown",this.toggle)}
o.VERSION="3.3.1",o.prototype.toggle=function(i){var r=t(this)
if(!r.is(".disabled, :disabled")){var s=n(r),o=s.hasClass("open")
if(e(),!o){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e)
var a={relatedTarget:this}
if(s.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return
r.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},o.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var i=t(this)
if(e.preventDefault(),e.stopPropagation(),!i.is(".disabled, :disabled")){var r=n(i),o=r.hasClass("open")
if(!o&&27!=e.which||o&&27==e.which)return 27==e.which&&r.find(s).trigger("focus"),i.trigger("click")
var a=" li:not(.divider):visible a",l=r.find('[role="menu"]'+a+', [role="listbox"]'+a)
if(l.length){var u=l.index(e.target)
38==e.which&&u>0&&u--,40==e.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}}
var a=t.fn.dropdown
t.fn.dropdown=i,t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,o.prototype.toggle).on("keydown.bs.dropdown.data-api",s,o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',o.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',o.prototype.keydown)}(jQuery),+function(t){"use strict"
function e(e,i){return this.each(function(){var r=t(this),s=r.data("bs.modal"),o=t.extend({},n.DEFAULTS,r.data(),"object"==typeof e&&e)
s||r.data("bs.modal",s=new n(this,o)),"string"==typeof e?s[e](i):o.show&&s.show(i)})}var n=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}
n.VERSION="3.3.1",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var i=this,r=t.Event("show.bs.modal",{relatedTarget:e})
this.$element.trigger(r),this.isShown||r.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var r=t.support.transition&&i.$element.hasClass("fade")
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.options.backdrop&&i.adjustBackdrop(),i.adjustDialog(),r&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus()
var s=t.Event("shown.bs.modal",{relatedTarget:e})
r?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(s)}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var t=this
this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var i=this,r=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var s=t.support.transition&&r
if(this.$backdrop=t('<div class="modal-backdrop '+r+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return
s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
var o=function(){i.removeBackdrop(),e&&e()}
t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):o()}else e&&e()},n.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},n.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},n.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10)
this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},n.prototype.measureScrollbar=function(){var t=document.createElement("div")
t.className="modal-scrollbar-measure",this.$body.append(t)
var e=t.offsetWidth-t.clientWidth
return this.$body[0].removeChild(t),e}
var i=t.fn.modal
t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=t(this),r=i.attr("href"),s=t(i.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),o=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(r)&&r},s.data(),i.data())
i.is("a")&&n.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(s,o,this)})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),r=i.data("bs.tooltip"),s="object"==typeof e&&e,o=s&&s.selector;(r||"destroy"!=e)&&(o?(r||i.data("bs.tooltip",r={}),r[o]||(r[o]=new n(this,s))):r||i.data("bs.tooltip",r=new n(this,s)),"string"==typeof e&&r[e]())})}var n=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)}
n.VERSION="3.3.1",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,i){this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport)
for(var r=this.options.trigger.split(" "),s=r.length;s--;){var o=r[s]
if("click"==o)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this))
else if("manual"!=o){var a="hover"==o?"mouseenter":"focusin",l="hover"==o?"mouseleave":"focusout"
this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults()
return this._options&&t.each(this._options,function(t,i){n[t]!=i&&(e[t]=i)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type)
return n&&n.$tip&&n.$tip.is(":visible")?void(n.hoverState="in"):(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type)
return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},n.prototype.show=function(){var e=t.Event("show.bs."+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!i)return
var r=this,s=this.tip(),o=this.getUID(this.type)
this.setContent(),s.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&s.addClass("fade")
var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,u=l.test(a)
u&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element)
var c=this.getPosition(),h=s[0].offsetWidth,d=s[0].offsetHeight
if(u){var p=a,f=this.options.container?t(this.options.container):this.$element.parent(),m=this.getPosition(f)
a="bottom"==a&&c.bottom+d>m.bottom?"top":"top"==a&&c.top-d<m.top?"bottom":"right"==a&&c.right+h>m.width?"left":"left"==a&&c.left-h<m.left?"right":a,s.removeClass(p).addClass(a)}var g=this.getCalculatedOffset(a,c,h,d)
this.applyPlacement(g,a)
var v=function(){var t=r.hoverState
r.$element.trigger("shown.bs."+r.type),r.hoverState=null,"out"==t&&r.leave(r)}
t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",v).emulateTransitionEnd(n.TRANSITION_DURATION):v()}},n.prototype.applyPlacement=function(e,n){var i=this.tip(),r=i[0].offsetWidth,s=i[0].offsetHeight,o=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10)
isNaN(o)&&(o=0),isNaN(a)&&(a=0),e.top=e.top+o,e.left=e.left+a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in")
var l=i[0].offsetWidth,u=i[0].offsetHeight
"top"==n&&u!=s&&(e.top=e.top+s-u)
var c=this.getViewportAdjustedDelta(n,e,l,u)
c.left?e.left+=c.left:e.top+=c.top
var h=/top|bottom/.test(n),d=h?2*c.left-r+l:2*c.top-s+u,p=h?"offsetWidth":"offsetHeight"
i.offset(e),this.replaceArrow(d,i[0][p],h)},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle()
t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(e){function i(){"in"!=r.hoverState&&s.detach(),r.$element.removeAttr("aria-describedby").trigger("hidden.bs."+r.type),e&&e()}var r=this,s=this.tip(),o=t.Event("hide.bs."+this.type)
return this.$element.trigger(o),o.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element
var n=e[0],i="BODY"==n.tagName,r=n.getBoundingClientRect()
null==r.width&&(r=t.extend({},r,{width:r.right-r.left,height:r.bottom-r.top}))
var s=i?{top:0,left:0}:e.offset(),o={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=i?{width:t(window).width(),height:t(window).height()}:null
return t.extend({},r,o,a,s)},n.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,i){var r={top:0,left:0}
if(!this.$viewport)return r
var s=this.options.viewport&&this.options.viewport.padding||0,o=this.getPosition(this.$viewport)
if(/right|left/.test(t)){var a=e.top-s-o.scroll,l=e.top+s-o.scroll+i
a<o.top?r.top=o.top-a:l>o.top+o.height&&(r.top=o.top+o.height-l)}else{var u=e.left-s,c=e.left+s+n
u<o.left?r.left=o.left-u:c>o.width&&(r.left=o.left+o.width-c)}return r},n.prototype.getTitle=function(){var t,e=this.$element,n=this.options
return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},n.prototype.getUID=function(t){do t+=~~(1e6*Math.random())
while(document.getElementById(t))
return t},n.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this
e&&(n=t(e.currentTarget).data("bs."+this.type),n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var t=this
clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})}
var i=t.fn.tooltip
t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),r=i.data("bs.popover"),s="object"==typeof e&&e,o=s&&s.selector;(r||"destroy"!=e)&&(o?(r||i.data("bs.popover",r={}),r[o]||(r[o]=new n(this,s))):r||i.data("bs.popover",r=new n(this,s)),"string"==typeof e&&r[e]())})}var n=function(t,e){this.init("popover",t,e)}
if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js")
n.VERSION="3.3.1",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent()
t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options
return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},n.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip}
var i=t.fn.popover
t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),+function(t){"use strict"
function e(n,i){var r=t.proxy(this.process,this)
this.$body=t("body"),this.$scrollElement=t(t(n).is("body")?window:n),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",r),this.refresh(),this.process()}function n(n){return this.each(function(){var i=t(this),r=i.data("bs.scrollspy"),s="object"==typeof n&&n
r||i.data("bs.scrollspy",r=new e(this,s)),"string"==typeof n&&r[n]()})}e.VERSION="3.3.1",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",n=0
t.isWindow(this.$scrollElement[0])||(e="position",n=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight()
var i=this
this.$body.find(this.selector).map(function(){var i=t(this),r=i.data("target")||i.attr("href"),s=/^#./.test(r)&&t(r)
return s&&s.length&&s.is(":visible")&&[[s[e]().top+n,r]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),r=this.offsets,s=this.targets,o=this.activeTarget
if(this.scrollHeight!=n&&this.refresh(),e>=i)return o!=(t=s[s.length-1])&&this.activate(t)
if(o&&e<r[0])return this.activeTarget=null,this.clear()
for(t=r.length;t--;)o!=s[t]&&e>=r[t]&&(!r[t+1]||e<=r[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear()
var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parents("li").addClass("active")
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")}
var i=t.fn.scrollspy
t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this)
n.call(e,e.data())})})}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),r=i.data("bs.tab")
r||i.data("bs.tab",r=new n(this)),"string"==typeof e&&r[e]()})}var n=function(e){this.element=t(e)}
n.VERSION="3.3.1",n.TRANSITION_DURATION=150,n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target")
if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var r=n.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),o=t.Event("show.bs.tab",{relatedTarget:r[0]})
if(r.trigger(s),e.trigger(o),!o.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(i)
this.activate(e.closest("li"),n),this.activate(a,a.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}}},n.prototype.activate=function(e,i,r){function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),r&&r()}var o=i.find("> .active"),a=r&&t.support.transition&&(o.length&&o.hasClass("fade")||!!i.find("> .fade").length)
o.length&&a?o.one("bsTransitionEnd",s).emulateTransitionEnd(n.TRANSITION_DURATION):s(),o.removeClass("in")}
var i=t.fn.tab
t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this}
var r=function(n){n.preventDefault(),e.call(t(this),"show")}
t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery),+function(t){"use strict"
function e(e){return this.each(function(){var i=t(this),r=i.data("bs.affix"),s="object"==typeof e&&e
r||i.data("bs.affix",r=new n(this,s)),"string"==typeof e&&r[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()}
n.VERSION="3.3.1",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(t,e,n,i){var r=this.$target.scrollTop(),s=this.$element.offset(),o=this.$target.height()
if(null!=n&&"top"==this.affixed)return n>r?"top":!1
if("bottom"==this.affixed)return null!=n?r+this.unpin<=s.top?!1:"bottom":t-i>=r+o?!1:"bottom"
var a=null==this.affixed,l=a?r:s.top,u=a?o:e
return null!=n&&n>=l?"top":null!=i&&l+u>=t-i?"bottom":!1},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(n.RESET).addClass("affix")
var t=this.$target.scrollTop(),e=this.$element.offset()
return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,r=i.top,s=i.bottom,o=t("body").height()
"object"!=typeof i&&(s=r=i),"function"==typeof r&&(r=i.top(this.$element)),"function"==typeof s&&(s=i.bottom(this.$element))
var a=this.getState(o,e,r,s)
if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","")
var l="affix"+(a?"-"+a:""),u=t.Event(l+".bs.affix")
if(this.$element.trigger(u),u.isDefaultPrevented())return
this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:o-e-s})}}
var i=t.fn.affix
t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data()
i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(jQuery),angular.module("toastr",[]).directive("toast",["$compile","$interval","toastr",function(t,e,n){return{replace:!0,templateUrl:"templates/toastr/toastr.html",link:function(i,r){function s(t){return e(function(){n.remove(i.toastId)},t,1)}var o
if(i.toastClass=i.options.toastClass,i.titleClass=i.options.titleClass,i.messageClass=i.options.messageClass,i.options.closeHtml){var a=angular.element(i.options.closeHtml)
a.addClass("toast-close-button"),a.attr("ng-click","close()"),t(a)(i),r.prepend(a)}i.init=function(){i.options.timeOut&&(o=s(i.options.timeOut))},r.on("mouseenter",function(){o&&e.cancel(o)}),i.tapToast=function(){i.options.tapToDismiss&&i.close()},i.close=function(){n.remove(i.toastId)},r.on("mouseleave",function(){(0!==i.options.timeOut||0!==i.options.extendedTimeOut)&&(o=s(i.options.extendedTimeOut))})}}}]).constant("toastrConfig",{allowHtml:!1,closeButton:!1,closeHtml:"<button>&times;</button>",containerId:"toast-container",extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},messageClass:"toast-message",newestOnTop:!0,positionClass:"toast-top-right",tapToDismiss:!0,timeOut:5e3,titleClass:"toast-title",toastClass:"toast"}).factory("toastr",["$animate","$compile","$document","$rootScope","$sce","toastrConfig","$q",function(t,e,n,i,r,s,o){function a(t){if(t)m(t.toastId)
else for(var e=0;e<b.length;e++)m(b[e].toastId)}function l(t,e,n){return f({iconClass:d().iconClasses.error,message:t,optionsOverride:n,title:e})}function u(t,e,n){return f({iconClass:d().iconClasses.info,message:t,optionsOverride:n,title:e})}function c(t,e,n){return f({iconClass:d().iconClasses.success,message:t,optionsOverride:n,title:e})}function h(t,e,n){return f({iconClass:d().iconClasses.warning,message:t,optionsOverride:n,title:e})}function d(){return angular.extend({},s)}function p(e){if(g)return y.promise
g=angular.element("<div></div>"),g.attr("id",e.containerId),g.addClass(e.positionClass),g.css({"pointer-events":"auto"})
var i=n.find("body").eq(0)
return t.enter(g,i).then(function(){y.resolve()}),y.promise}function f(n){function s(t,e,n){n.allowHtml?(t.scope.allowHtml=!0,t.scope.title=r.trustAsHtml(e.title),t.scope.message=r.trustAsHtml(e.message)):(t.scope.title=e.title,t.scope.message=e.message),t.scope.toastType=t.iconClass,t.scope.toastId=t.toastId,t.scope.options={extendedTimeOut:n.extendedTimeOut,messageClass:n.messageClass,tapToDismiss:n.tapToDismiss,timeOut:n.timeOut,titleClass:n.titleClass,toastClass:n.toastClass},n.closeButton&&(t.scope.options.closeHtml=n.closeHtml)}function o(t){var n=angular.element("<div toast></div>")
return e(n)(t)}var a=d(),l={toastId:v++,scope:i.$new()}
return l.iconClass=n.iconClass,n.optionsOverride&&(a=angular.extend(a,n.optionsOverride),l.iconClass=n.optionsOverride.iconClass||l.iconClass),s(l,n,a),l.el=o(l.scope),b.push(l),p(a).then(function(){a.newestOnTop?t.enter(l.el,g).then(function(){l.scope.init()}):t.enter(l.el,g,g[0].lastChild).then(function(){l.scope.init()})}),l}function m(e){function n(t){for(var e=0;e<b.length;e++)if(b[e].toastId===t)return b[e]}var i=n(e)
i&&t.leave(i.el).then(function(){i.scope.$destroy(),g&&0===g.children().length&&(b=[],g.remove(),g=null,y=o.defer())})}var g,v=0,b=[],y=o.defer(),$={clear:a,error:l,info:u,remove:m,success:c,warning:h}
return $}]),angular.module("toastr").run(["$templateCache",function(t){"use strict"
t.put("templates/toastr/toastr.html",'<div class="{{toastClass}} {{toastType}}" ng-click="tapToast()">\n  <div ng-switch on="allowHtml">\n    <div ng-switch-default ng-if="title" class="{{titleClass}}">{{title}}</div>\n    <div ng-switch-default class="{{messageClass}}">{{message}}</div>\n    <div ng-switch-when="true" ng-if="title" class="{{titleClass}}" ng-bind-html="title"></div>\n    <div ng-switch-when="true" class="{{messageClass}}" ng-bind-html="message"></div>\n  </div>\n</div>')}]),!function t(e,n,i){function r(o,a){if(!n[o]){if(!e[o]){var l="function"==typeof require&&require
if(!a&&l)return l(o,!0)
if(s)return s(o,!0)
var u=new Error("Cannot find module '"+o+"'")
throw u.code="MODULE_NOT_FOUND",u}var c=n[o]={exports:{}}
e[o][0].call(c.exports,function(t){var n=e[o][1][t]
return r(n?n:t)},c,c.exports,t,e,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o])
return r}({1:[function(t,e){"use strict"
function n(t,e,n,a,l,u,c,h,d){function p(t,e){e.clientId!==u.getClientId()&&c.publish(t,e)}var f,m=i(n)
return r(t,e,s(a,{post:function(t,e,n){return m.post("/commands/"+t,e,n)}},h,d),function(){if(f)throw Error("Should only use event client builder once")
return f=o("/events",p,m,h,l,d)},m,c,u)}var i=t("./http"),r=t("./client"),s=t("spoo/command-client"),o=t("spoo/event-client")
e.exports=n},{"./client":2,"./http":3,"spoo/command-client":4,"spoo/event-client":5}],2:[function(t,e){"use strict"
function n(t,e,n,r,s,o,a){function l(t){a.setApiKey(t),s.setApiKey(t),u||c||(u=r())}var u,c=!1,h=a.getClientId()
s.setClientId(h)
var d=a.getApiKey()
return d&&(s.setApiKey(d),u=r()),{setApiKey:l,getApiKey:a.getApiKey,exec:function(r,o){a.getApiKey()?(t[r].call(t,o),n.exec(r,o)):s.get("/services/generateApiKey",function(s,a,u,c,h){l(h.apiKey),i.serializeRepoStateToCommands(e).forEach(function(t){n.exec(t.cmd,t.message)}),t[r].call(t,o),n.exec(r,o)})},disable:function(){c=!0,n.disable(),u&&u.disable()}}}var i=t("../domain/graph")
e.exports=n},{"../domain/graph":19}],3:[function(t,e){"use strict"
function n(t){var e,n
return{setApiKey:function(t){e=t},getApiKey:function(){return e},setClientId:function(t){n=t},get:function(r,s){var o=t+r
i.get(o).set("X-ClientId",n).set("X-APIKey",e?e:"none").end(function(t,e){s(t,r,e?e.status:-1,e?e.headers:{},e?e.body:{})})},post:function(r,s,o){var a=t+r
i.post(a).send(JSON.stringify(s)).set("X-ClientId",n).set("X-APIKey",e).set("Content-Type","application/json; charset=utf-8").end(function(t,e){o(t,r,e?e.status:-1,e?e.headers:{},e?e.body:{})})}}}var i=t("superagent")
e.exports=n},{superagent:6}],4:[function(t,e){"use strict"
function n(t,e,n,i){function r(s){function a(){t.removeFirst(),i.setTimeout(r,0)}function l(t,e){var n=t(s)
i.setTimeout(e.bind(null,n),0),i.setTimeout(r.bind(null,n),n)}function u(t,e,r,s,o){if(t)i.console.error(t),l(n.clientErrorIncrease,n.clientErrorCallback)
else if(r>=200&&300>r)a()
else{if(!(r>=500&&600>r))throw i.console.error(o),new Error("Unexpected response: uri="+e+", status="+r+", headers="+s+", body="+o)
i.console.error(o),l(n.serverErrorIncrease,n.serverErrorCallback)}}var c=t.getFirst()
return c?(s=s||0,o=!0,void e.post(c.cmd,c.data,u)):void(o=!1)}if(void 0===t)throw new Error("Provide a repo")
if(void 0===e)throw new Error("Provide an http client implementation")
void 0===n&&(n={serverErrorIncrease:function(t){return t+5e3},clientErrorIncrease:function(t){return t+1e4},serverErrorCallback:function(){},clientErrorCallback:function(){}}),void 0===i&&(i={setTimeout:function(){setTimeout.apply(null,arguments)},console:console})
var s=!1,o=!1
return{disable:function(){s=!0},exec:function(e,n){t.add(e,n),s||o||r()}}}e.exports=n},{}],5:[function(t,e){"use strict"
function n(t,e,n){var i=!0
return{poll:function(r,s,o){t.setTimeout(function(){i&&n.get(r,function(n,i,r,a,l){o&&t.setTimeout(function(){o(n,i,r,a,l)},0),e.exec(n,s,i,r,a,l)})},s)},disable:function(){i=!1}}}function i(t){t=t||function(){return"the provided arguments"}
var e=[]
return{exec:function(n,i,r,s,o,a){for(var l=null,u=0;u<e.length;u++)if(e[u].canHandle(n,r,s,o,a)){if(null!==l)throw Error("Only one strategy is allowed to handle a set of data, but candidates "+l+" and "+u+" both handle: "+t(arguments))
l=u}if(null===l)throw Error("No strategy can handle: "+t(arguments))
e[l].exec(n,i,r,s,o,a)},add:function(t){e.push(t)}}}function r(){return{transitionedTo:function(){},latest:function(){}}}function s(t,e,s,o,a,l){function u(t,n,i,r,s){if(200!==i)throw Error("Did not expect non-200 transition")
if(void 0===s.type||void 0===s.message)throw Error("Expected both type and message to be set in body")
a.transitionedTo(n),e(s.type,s.message)}if(void 0===t)throw Error("Provide an initial uri")
if(void 0===e||void 0===e.call||2!==e.length)throw Error("Provide an event callback with 2 params: eventType, eventMessage")
if(void 0===s)throw Error("Provide an http interface")
void 0===o&&(o={serverErrorIncrease:function(t){return t+5e3},clientErrorIncrease:function(t){return t+1e4},waitingIncrease:function(){return 500},serverErrorCallback:function(t,e,n){l.console.log("Server error polling "+t+", waiting "+n+"ms")},clientErrorCallback:function(t,e,n){l.console.log("Client error polling "+t+", waiting "+n+"ms")},waitingCallback:function(){}}),a=a||r(),void 0===l&&(l={setTimeout:function(){setTimeout.apply(null,arguments)},console:console})
var c=i(function(t){return"{err: "+t[0]+", uri: "+t[2]+", status: "+t[3]+", headers: "+JSON.stringify(t[4])+", body: "+JSON.stringify(t[5])+"}"}),h=n(l,c,s)
c.add({canHandle:function(t,e,n){return 204===n},exec:function(t,e,n){e=o.waitingIncrease(e),o.waitingCallback&&l.setTimeout(function(){o.waitingCallback(n,e)},0),h.poll(n,e)}}),c.add({canHandle:function(t,e,n,i,r){return 200===n&&void 0===r.message&&void 0!==r.next},exec:function(t,e,n,i,r,s){h.poll(s.next,o.waitingIncrease(e),u)}}),c.add({canHandle:function(t,e,n,i,r){return 200===n&&void 0!==r.message&&void 0===r.next},exec:function(t,e,n){o.waitingCallback&&l.setTimeout(function(){o.waitingCallback(n,e)},0),h.poll(n,o.waitingIncrease(e))}}),c.add({canHandle:function(t,e,n,i,r){return 200===n&&void 0!==r.message&&void 0!==r.next},exec:function(t,e,n,i,r,s){h.poll(s.next,o.waitingIncrease(e),u)}}),c.add({canHandle:function(t,e,n){return n>=500&&600>n},exec:function(t,e,n){e=o.serverErrorIncrease(e),o.serverErrorCallback&&l.setTimeout(function(){o.serverErrorCallback(n,t,e)},0),h.poll(n,e)}}),c.add({canHandle:function(t){return void 0!==t&&null!==t},exec:function(t,e,n){e=o.clientErrorIncrease(e),o.clientErrorCallback&&l.setTimeout(function(){o.clientErrorCallback(n,t,e)},0),h.poll(n,e)}})
var d=a.latest()
return d&&(t=d),h.poll(t,0),{disable:function(){h.disable()}}}e.exports=s},{}],6:[function(t,e){function n(){}function i(t){var e={}.toString.call(t)
switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0
default:return!1}}function r(){if(g.XMLHttpRequest&&("file:"!=g.location.protocol||!g.ActiveXObject))return new XMLHttpRequest
try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1}function s(t){return t===Object(t)}function o(t){if(!s(t))return t
var e=[]
for(var n in t)null!=t[n]&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]))
return e.join("&")}function a(t){for(var e,n,i={},r=t.split("&"),s=0,o=r.length;o>s;++s)n=r[s],e=n.split("="),i[decodeURIComponent(e[0])]=decodeURIComponent(e[1])
return i}function l(t){var e,n,i,r,s=t.split(/\r?\n/),o={}
s.pop()
for(var a=0,l=s.length;l>a;++a)n=s[a],e=n.indexOf(":"),i=n.slice(0,e).toLowerCase(),r=v(n.slice(e+1)),o[i]=r
return o}function u(t){return t.split(/ *; */).shift()}function c(t){return m(t.split(/ *; */),function(t,e){var n=e.split(/ *= */),i=n.shift(),r=n.shift()
return i&&r&&(t[i]=r),t},{})}function h(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text=this.xhr.responseText,this.setStatusProperties(this.xhr.status),this.header=this.headers=l(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text):null}function d(t,e){var n=this
f.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var e=new h(n)
"HEAD"==t&&(e.text=null),n.callback(null,e)})}function p(t,e){return"function"==typeof e?new d("GET",t).end(e):1==arguments.length?new d("GET",t):new d(t,e)}var f=t("emitter"),m=t("reduce"),g="undefined"==typeof window?this:window,v="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")}
p.serializeObject=o,p.parseString=a,p.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},p.serialize={"application/x-www-form-urlencoded":o,"application/json":JSON.stringify},p.parse={"application/x-www-form-urlencoded":a,"application/json":JSON.parse},h.prototype.get=function(t){return this.header[t.toLowerCase()]},h.prototype.setHeaderProperties=function(){var t=this.header["content-type"]||""
this.type=u(t)
var e=c(t)
for(var n in e)this[n]=e[n]},h.prototype.parseBody=function(t){var e=p.parse[this.type]
return e?e(t):null},h.prototype.setStatusProperties=function(t){var e=t/100|0
this.status=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t||1223==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},h.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,i="cannot "+e+" "+n+" ("+this.status+")",r=new Error(i)
return r.status=this.status,r.method=e,r.url=n,r},p.Response=h,f(d.prototype),d.prototype.use=function(t){return t(this),this},d.prototype.timeout=function(t){return this._timeout=t,this},d.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},d.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},d.prototype.set=function(t,e){if(s(t)){for(var n in t)this.set(n,t[n])
return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},d.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},d.prototype.type=function(t){return this.set("Content-Type",p.types[t]||t),this},d.prototype.accept=function(t){return this.set("Accept",p.types[t]||t),this},d.prototype.auth=function(t,e){var n=btoa(t+":"+e)
return this.set("Authorization","Basic "+n),this},d.prototype.query=function(t){return"string"!=typeof t&&(t=o(t)),t&&this._query.push(t),this},d.prototype.field=function(t,e){return this._formData||(this._formData=new FormData),this._formData.append(t,e),this},d.prototype.attach=function(t,e,n){return this._formData||(this._formData=new FormData),this._formData.append(t,e,n),this},d.prototype.send=function(t){var e=s(t),n=this.getHeader("Content-Type")
if(e&&s(this._data))for(var i in t)this._data[i]=t[i]
else"string"==typeof t?(n||this.type("form"),n=this.getHeader("Content-Type"),this._data="application/x-www-form-urlencoded"==n?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t
return e?(n||this.type("json"),this):this},d.prototype.callback=function(t,e){var n=this._callback
return 2==n.length?n(t,e):t?this.emit("error",t):void n(e)},d.prototype.crossDomainError=function(){var t=new Error("Origin is not allowed by Access-Control-Allow-Origin")
t.crossDomain=!0,this.callback(t)},d.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded")
e.timeout=t,this.callback(e)},d.prototype.withCredentials=function(){return this._withCredentials=!0,this},d.prototype.end=function(t){var e=this,s=this.xhr=r(),o=this._query.join("&"),a=this._timeout,l=this._formData||this._data
if(this._callback=t||n,s.onreadystatechange=function(){return 4==s.readyState?0==s.status?e.aborted?e.timeoutError():e.crossDomainError():void e.emit("end"):void 0},s.upload&&(s.upload.onprogress=function(t){t.percent=t.loaded/t.total*100,e.emit("progress",t)}),a&&!this._timer&&(this._timer=setTimeout(function(){e.abort()},a)),o&&(o=p.serializeObject(o),this.url+=~this.url.indexOf("?")?"&"+o:"?"+o),s.open(this.method,this.url,!0),this._withCredentials&&(s.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof l&&!i(l)){var u=p.serialize[this.getHeader("Content-Type")]
u&&(l=u(l))}for(var c in this.header)null!=this.header[c]&&s.setRequestHeader(c,this.header[c])
return this.emit("request",this),s.send(l),this},p.Request=d,p.get=function(t,e,n){var i=p("GET",t)
return"function"==typeof e&&(n=e,e=null),e&&i.query(e),n&&i.end(n),i},p.head=function(t,e,n){var i=p("HEAD",t)
return"function"==typeof e&&(n=e,e=null),e&&i.send(e),n&&i.end(n),i},p.del=function(t,e){var n=p("DELETE",t)
return e&&n.end(e),n},p.patch=function(t,e,n){var i=p("PATCH",t)
return"function"==typeof e&&(n=e,e=null),e&&i.send(e),n&&i.end(n),i},p.post=function(t,e,n){var i=p("POST",t)
return"function"==typeof e&&(n=e,e=null),e&&i.send(e),n&&i.end(n),i},p.put=function(t,e,n){var i=p("PUT",t)
return"function"==typeof e&&(n=e,e=null),e&&i.send(e),n&&i.end(n),i},e.exports=p},{emitter:7,reduce:8}],7:[function(t,e){function n(t){return t?i(t):void 0}function i(t){for(var e in n.prototype)t[e]=n.prototype[e]
return t}e.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){i.off(t,n),e.apply(this,arguments)}var i=this
return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this
var n=this._callbacks[t]
if(!n)return this
if(1==arguments.length)return delete this._callbacks[t],this
for(var i,r=0;r<n.length;r++)if(i=n[r],i===e||i.fn===e){n.splice(r,1)
break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{}
var e=[].slice.call(arguments,1),n=this._callbacks[t]
if(n){n=n.slice(0)
for(var i=0,r=n.length;r>i;++i)n[i].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],8:[function(t,e){e.exports=function(t,e,n){for(var i=0,r=t.length,s=3==arguments.length?n:t[i++];r>i;)s=e.call(null,s,t[i],++i,t)
return s}},{}],9:[function(t,e){(function(){function t(t,e,n){var i=e&&n||0,r=0
for(e=e||[],t.toLowerCase().replace(/[0-9a-f]{2}/g,function(t){16>r&&(e[i+r++]=p[t])});16>r;)e[i+r++]=0
return e}function n(t,e){var n=e||0,i=d
return i[t[n++]]+i[t[n++]]+i[t[n++]]+i[t[n++]]+"-"+i[t[n++]]+i[t[n++]]+"-"+i[t[n++]]+i[t[n++]]+"-"+i[t[n++]]+i[t[n++]]+"-"+i[t[n++]]+i[t[n++]]+i[t[n++]]+i[t[n++]]+i[t[n++]]+i[t[n++]]}function i(t,e,i){var r=e&&i||0,s=e||[]
t=t||{}
var o=null!=t.clockseq?t.clockseq:v,a=null!=t.msecs?t.msecs:(new Date).getTime(),l=null!=t.nsecs?t.nsecs:y+1,u=a-b+(l-y)/1e4
if(0>u&&null==t.clockseq&&(o=o+1&16383),(0>u||a>b)&&null==t.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
b=a,y=l,v=o,a+=122192928e5
var c=(1e4*(268435455&a)+l)%4294967296
s[r++]=c>>>24&255,s[r++]=c>>>16&255,s[r++]=c>>>8&255,s[r++]=255&c
var h=a/4294967296*1e4&268435455
s[r++]=h>>>8&255,s[r++]=255&h,s[r++]=h>>>24&15|16,s[r++]=h>>>16&255,s[r++]=o>>>8|128,s[r++]=255&o
for(var d=t.node||g,p=0;6>p;p++)s[r+p]=d[p]
return e?e:n(s)}function r(t,e,i){var r=e&&i||0
"string"==typeof t&&(e="binary"==t?new h(16):null,t=null),t=t||{}
var o=t.random||(t.rng||s)()
if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var a=0;16>a;a++)e[r+a]=o[a]
return e||n(o)}var s,o=this
if("function"==typeof o.require)try{var a=o.require("crypto").randomBytes
s=a&&function(){return a(16)}}catch(l){}if(!s&&o.crypto&&crypto.getRandomValues){var u=new Uint8Array(16)
s=function(){return crypto.getRandomValues(u),u}}if(!s){var c=new Array(16)
s=function(){for(var t,e=0;16>e;e++)0===(3&e)&&(t=4294967296*Math.random()),c[e]=t>>>((3&e)<<3)&255
return c}}for(var h="function"==typeof o.Buffer?o.Buffer:Array,d=[],p={},f=0;256>f;f++)d[f]=(f+256).toString(16).substr(1),p[d[f]]=f
var m=s(),g=[1|m[0],m[1],m[2],m[3],m[4],m[5]],v=16383&(m[6]<<8|m[7]),b=0,y=0,$=r
if($.v1=i,$.v4=r,$.parse=t,$.unparse=n,$.BufferClass=h,"undefined"!=typeof e&&e.exports)e.exports=$
else if("function"==typeof define&&define.amd)define(function(){return $})
else{var w=o.uuid
$.noConflict=function(){return o.uuid=w,$},o.uuid=$}}).call(this)},{}],10:[function(t,e){"use strict"
function n(){var t={},e=[]
return{subscribe:function(e,n){void 0===t[e]&&(t[e]=[]),t[e].push(n)},subscribeGlobal:function(t){e.push(t)},unsubscribe:function(e,n){if(void 0!==t[e])for(var i=0;i<t[e].length;i++)if(t[e][i]===n)return void t[e].splice(i,1)
throw Error("Couldn't find listener to remove")},unsubscribeGlobal:function(t){for(var n=0;n<e.length;n++)if(e[n]===t)return void e.splice(n,1)
throw Error("Couldn't find listener to remove")},publish:function(n){var i=[].slice.call(arguments,1)
e.forEach(function(t){setTimeout(Object.bind.apply(t,[null,n].concat(i)),0)}),void 0!==t[n]&&t[n].forEach(function(t){setTimeout(Object.bind.apply(t,[null].concat(i)),0)})}}}function i(){var t={},e=[]
return{subscribe:function(e,n){void 0===t[e]&&(t[e]=[]),t[e].push(n)},subscribeGlobal:function(t){e.push(t)},unsubscribe:function(e,n){if(void 0!==t[e])for(var i=0;i<t[e].length;i++)if(t[e][i]===n)return void t[e].splice(i,1)
throw Error("Couldn't find listener to remove")},unsubscribeGlobal:function(t){for(var n=0;n<e.length;n++)if(e[n]===t)return void e.splice(n,1)
throw Error("Couldn't find listener to remove")},publish:function(n){var i,r,s=t[n],o=arguments.length,a=void 0===s?0:s.length,l=e.length
for(i=0;l>i;i++)switch(r=e[i],o){case 1:r(n)
break
case 2:r(n,arguments[1])
break
case 3:r(n,arguments[1],arguments[2])
break
case 4:r(n,arguments[1],arguments[2],arguments[3])
break
case 5:r(n,arguments[1],arguments[2],arguments[3],arguments[4])
break
case 6:r(n,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
break
default:r.apply(null,arguments)}for(i=0;a>i;i++)switch(r=s[i],o){case 1:r()
break
case 2:r(arguments[1])
break
case 3:r(arguments[1],arguments[2])
break
case 4:r(arguments[1],arguments[2],arguments[3])
break
case 5:r(arguments[1],arguments[2],arguments[3],arguments[4])
break
case 6:r(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])
break
default:var u=Array(o-1)
for(i=1;o>i;i++)u[i-1]=arguments[i]
r.apply(null,u)}}}}n.Production=i,e.exports=n},{}],11:[function(t){"use strict"
function e(){function t(t,e){switch(t){case"synced":return"http://api.mapdone.com"
case"local-sync-port":if(!e)throw new Error("Invalid port specified")
return"http://localhost:"+e
case"local-only":}}function e(t){function e(t,e){d[t].call(d,e)}var n=r()
if(t){var i=s(d,h,t,l(),u(),n,c)
return i}return{exec:e,setApiKey:n.setApiKey,getApiKey:n.getApiKey}}function i(t){var e=t.match(/^#\/(([^\/=]+)=?([0-9]+)?)(\/node\/.*?([^\/]+)?)?/)
return e?{fullMode:e[1],mode:e[2],port:e[3],node:e[5]}:void 0}function o(t){if(h.rootIsSet())document.location.hash="#/"+t+"/node/"+h.getRootId()
else{var e={id:n.v4(),name:"All of the Things",description:'This is the centre of your "todo" universe - welcome home! Try clicking the + below to add more items. Click on the items for more detail, and to add stuff to them in turn. You can edit/delete this text by clicking on the pencil to the right.',children:[]}
d.createRoot({id:e.id,name:e.name,description:e.description})}}function a(){var n=i(document.location.hash)
return n?p&&n.fullMode!==p?void document.location.reload():(p=n.fullMode,f||(f=e(t(n.mode,n.port))),void(n.node||o(n.fullMode,f))):void(document.location.hash="#/synced/")}var p,f
return{inferState:a,navigateToNode:function(t){var e=i(document.location.hash)
return e?void(document.location.hash="#/"+e.fullMode+"/node/"+t):void document.location.hash("#/synced/node/"+t)},getClient:function(){return f}}}var n=t("node-uuid"),i=t("../../../domain/graph"),r=t("./mapdone-local/client-repo"),s=t("../../../api/buildClient"),o=t("upubsub"),a=t("./mapdone-local/node-repo"),l=t("./mapdone-local/command-repo"),u=t("./mapdone-local/event-repo"),c=o(),h=a(c),d=i(c,h),p=e()
h.rootIsSet()||c.subscribe("RootCreated",function(t){p.navigateToNode(t.id)}),window.onhashchange=p.inferState,p.inferState(),t("./controllers.js")
var f=angular.module("mapdoneServices",[])
f.factory("CommandHandler",[function(){return p.getClient()}]),f.factory("Repo",[function(){return h}]),f.factory("EventPubSub",[function(){return c}]),f.factory("IdGenerator",[n.v4])
var m=angular.module("mapdoneApp",["ngRoute","ui.sortable","ui.bootstrap","toastr","monospaced.elastic","mapdoneControllers","mapdoneServices"])
m.config(["$routeProvider",function(t){t.when("/:connectivityMode/node/:nodePath*",{templateUrl:"partials/node-detail.html",controller:"NodeCtrl"})}])},{"../../../api/buildClient":1,"../../../domain/graph":19,"./controllers.js":12,"./mapdone-local/client-repo":13,"./mapdone-local/command-repo":14,"./mapdone-local/event-repo":15,"./mapdone-local/node-repo":16,"node-uuid":9,upubsub:10}],12:[function(t){"use strict"
function e(t,e,n){var i
for(t.node=e.getNode(n),t.node.children=[],i=0;i<t.node.childIds.length;i++)t.node.children.push(e.getNode(t.node.childIds[i]))}function n(t,n,i){e(t,n,i),t.$apply()}function i(t,e,i,r,s){function o(e){return e===t.node.id||-1!==t.node.childIds.indexOf(e)}function a(e){r.subscribe(e+"Edited",function(e){o(e.id)&&n(t,s,t.node.id)})}r.subscribe("ChildAdded",function(e){e.parentId===t.node.id&&n(t,s,t.node.id)}),r.subscribe("ChildRemoved",function(e){e.parentId===t.node.id&&n(t,s,t.node.id)}),a("Name"),a("Description"),a("Done")}function r(t,e,n,i){t.newChild=function(t){var n=e.open({templateUrl:"modal-node.html",controller:"ModalNodeCtrl",resolve:{existingNode:function(){return{}}}})
n.result.then(function(e){i.exec("addChild",{parentId:t.id,id:s.v4(),name:e.name,done:e.done,description:e.description})})},t.editSyncKey=function(){var t=e.open({templateUrl:"modal-synckey.html",controller:"ModalSyncKeyCtrl",resolve:{existingSyncKey:function(){return i.getApiKey()}}})
t.result.then(function(t){return i.setApiKey(t)})},t.editNode=function(t){var n=e.open({templateUrl:"modal-node.html",controller:"ModalNodeCtrl",resolve:{existingNode:function(){return t}}})
n.result.then(function(e){["name","done","description"].forEach(function(n){t[n]!==e[n]&&i.exec("edit"+n.substr(0,1).toUpperCase()+n.substr(1),{id:t.id,from:t[n],to:e[n]})})})},t.attachExisting=function(){n.error("Not yet implemented")},t.addChild=function(){i.exec("addChild",{parentId:t.node.id,id:s.v4(),name:t.newChild.name}),t.newChild.name="",t.newChild.show=!1},t.removeChild=function(t,e){i.exec("removeChild",{parentId:t.id,childId:e.id})},t.toggleDone=function(t){i.exec("editDone",{id:t.id,from:!t.done,to:t.done})}}var s=t("node-uuid")
angular.module("ui.bootstrap.modal").directive("modalWindow",function(t){return{priority:1,link:function(e,n){t(function(){n.find("[autofocus]").focus()})}}})
var o=angular.module("mapdoneControllers",[])
o.controller("ModalSyncKeyCtrl",["$scope","$modalInstance","existingSyncKey",function(t,e,n){t.synckey=n,t.ok=function(){e.close(t.synckey)},t.cancel=function(){e.dismiss("cancel")}}]),o.controller("ModalNodeCtrl",["$scope","$modalInstance","existingNode",function(t,e,n){t.input={},t.input.node={}
for(var i in n)t.input.node[i]=n[i]
t.input.node.type=null===t.input.node.done?"note":"todo",t.ok=function(){t.input.node.done="todo"===t.input.node.type?n.done===!0?!0:!1:null,e.close(t.input.node)},t.cancel=function(){e.dismiss("cancel")}}]),o.controller("NodeCtrl",["$scope","$routeParams","$location","$modal","toastr","Repo","CommandHandler","EventPubSub",function(t,n,s,o,a,l,u,c){var h=n.nodePath.replace(/^.*\//,"")
e(t,l,h)
var d=n.nodePath.split("/")
t.breadcrumbs=[]
for(var p="",f=0;f<d.length-1;f++){var m=d[f]
p+="/"+d[f],t.breadcrumbs.push({path:p,name:l.getNode(m).name})}r(t,o,a,u),i(t,s,a,c,l),t.absoluteNavigate=function(t){s.path(s.path().replace(/\/node\/.*/,"/node"+t))},t.relativeNavigate=function(t){s.path(s.path()+"/"+t.id)},t.sortableOptions={containment:"parent",cursor:"ns-resize",tolerance:"pointer",stop:function(){u.exec("reorderChildren",{id:t.node.id,from:t.node.childIds,to:t.node.children.map(function(t){return t.id})})}}}])},{"node-uuid":9}],13:[function(t,e){"use strict"
function n(){return{getApiKey:function(){return localStorage.getItem("apiKey")},setApiKey:function(t){return localStorage.setItem("apiKey",t)},getClientId:function(){var t=localStorage.getItem("clientId")
return t||(t=i.v4(),localStorage.setItem("clientId",t)),t}}}var i=t("node-uuid")
e.exports=n},{"node-uuid":9}],14:[function(t,e){"use strict"
function n(){return{getFirst:function(){var t=localStorage.getItem("commands")
return null!==t?(t=JSON.parse(t),t[0]):void 0},add:function(t,e){var n=localStorage.getItem("commands")
n=null===n?[]:JSON.parse(n),n.push({cmd:t,data:e}),localStorage.setItem("commands",JSON.stringify(n))},removeFirst:function(){var t=JSON.parse(localStorage.getItem("commands"))
t.shift(),localStorage.setItem("commands",JSON.stringify(t))}}}e.exports=n},{}],15:[function(t,e){"use strict"
function n(){return{transitionedTo:function(t){localStorage.setItem("event-position",t)},latest:function(){return localStorage.getItem("event-position")}}}e.exports=n},{}],16:[function(t,e){"use strict"
function n(t){function e(t){return"node-"+t}function n(t){return null!==localStorage.getItem(e(t))}function i(t){var n=localStorage.getItem(e(t))
if(null===n)throw Error("Node "+t+" does not exist")
return n=JSON.parse(n),n.id=t,n}function r(){return null!==localStorage.getItem(e("root_id"))}function s(t){localStorage.setItem(e("root_id"),t)}function o(){if(!r())throw Error("Root is not yet defined")
return localStorage.getItem(e("root_id"))}function a(t){localStorage.setItem(e(t.id),JSON.stringify({name:t.name,description:t.description,childIds:t.childIds||[],done:t.done}))}function l(t){localStorage.removeItem(e(t))}function u(e){var n=e.substr(0,1).toLowerCase()+e.substr(1)
t.subscribe(e+"Edited",function(t){var e=i(t.id)
e[n]=t.value,a(e)})}return t.subscribe("RootCreated",function(t){a(t),s(t.id)}),t.subscribe("ChildAdded",function(t){var e=i(t.parentId)
if(n(t.id))throw new Error("dupe!")
a(t),e.childIds.push(t.id),a(e)}),t.subscribe("ChildRemoved",function(t){var e=i(t.parentId)
e.childIds=e.childIds.filter(function(e){return e!==t.childId}),a(e),l(t.childId)}),u("Name"),u("Done"),u("Description"),t.subscribe("ChildrenReordered",function(t){var e=i(t.id)
e.childIds=t.to,a(e)}),{rootIsSet:r,getRootId:o,nodeExists:n,getNode:i}}e.exports=n},{}],17:[function(t,e){"use strict"
function n(t){if(!(t instanceof Error))throw new Error("Error is required")
var e=Object.create(i)
return t.name=i.name,e.message=t.message,e.stack=t.stack,e}var i=Object.create(Error.prototype)
i.constructor=n,i.name=i.constructor.name,i.constructor.prototype=i,e.exports=n},{}],18:[function(t,e){"use strict"
function n(t){if(!(t instanceof Error))throw new Error("Error is required")
var e=Object.create(i)
return t.name=i.name,e.message=t.message,e.stack=t.stack,e}var i=Object.create(Error.prototype)
i.constructor=n,i.name=i.constructor.name,i.constructor.prototype=i,e.exports=n},{}],19:[function(t,e){"use strict"
function n(t,e){function n(t){e.nodes[t.id]={id:t.id,name:t.name,description:t.description,childIds:t.childIds||[],done:t.done}}function i(t){if(!(t in e.nodes))throw new Error("Node "+t+" does not exist")
return e.nodes[t]}function r(){return"root"in e}function s(e){var r=e.substr(0,1).toLowerCase()+e.substr(1)
t.subscribe(e+"Edited",function(t){var e=i(t.id)
e[r]=t.value,n(e)})}return e=e||{},"nodes"in e||(e.nodes={}),t.subscribe("RootCreated",function(t){n(t),e.root=t.id}),t.subscribe("ChildAdded",function(t){var e=i(t.parentId)
e.childIds.push(t.id),n(t),n(e)}),t.subscribe("ChildRemoved",function(t){var r=i(t.parentId)
r.childIds=r.childIds.filter(function(e){return e!==t.childId}),n(r),delete e[t.childId]}),s("Name"),s("Done"),s("Description"),t.subscribe("ChildrenReordered",function(t){var e=i(t.id)
e.childIds=t.to,n(e)}),{getNode:i,rootIsSet:r,getRootId:function(){if(!r())throw new Error("Root is not yet defined")
return e.root},nodeExists:function(t){return t in e.nodes}}}function i(e,r,s,o){function a(t,n){var i=t.substr(0,1).toLowerCase()+t.substr(1)
return function(a,u){u=u||e.publish
var c
if(a=l(n,a,o),a.to===a.from)throw o(new Error("Invalid transition to existing value"))
if(!r.nodeExists(a.id))throw s(new Error("Node '"+a.id+"' does not exist"))
if(c=r.getNode(a.id),c[i]!==a.from)throw s(new Error("Mismatch on '"+i+"' field, expected existing value to be: "+a.from+", found: "+c[i]))
u(t+"Edited",Object.freeze({id:a.id,value:a.to}))}}return r=r||n(e),s=s||function(){var e=t("./consistency-error")
return function(t){return e(t)}}(),o=o||function(){var e=t("./client-error")
return function(t){return e(t)}}(),{createRoot:function(t,n){if(n=n||e.publish,t=l(i.commands.createRoot,t,o),r.rootIsSet())throw s(new Error("The root id "+r.getRootId()+" cannot be overriden by id "+t.id))
return n("RootCreated",t),this},addChild:function(t,n){n=n||e.publish
var a
if(t=l(i.commands.addChild,t,o),r.nodeExists(t.id))throw o(new Error("Cannot replace existing child "+t.id))
if(a=r.getNode(t.parentId),-1!==a.childIds.indexOf(t.id))throw s(new Error("Child "+t.id+" cannot be re-added"))
return n("ChildAdded",t),this},removeChild:function(t,n){n=n||e.publish
var a
if(t=l(i.commands.removeChild,t,o),a=r.getNode(t.parentId),-1===a.childIds.indexOf(t.childId))throw s(new Error("Child "+t.childId+" cannot be removed as it is not a known child"))
return n("ChildRemoved",t),this},editName:a("Name",i.commands.editName),editDescription:a("Description",i.commands.editDescription),editDone:function(t,n){n=n||e.publish
var a
if(t=l(i.commands.editDone,t,o),t.to===t.from)throw o(new Error("Invalid transition to existing value"))
if(a=r.getNode(t.id),a.done!==t.from)throw s(new Error("Mismatch on 'done' field, expected existing value to be: "+t.from+", found: "+a.done))
n("DoneEdited",Object.freeze({id:t.id,value:t.to}))},reorderChildren:function(t,n){n=n||e.publish
var a,u,c
if(t=l(i.commands.reorderChildren,t,o),a=r.getNode(t.id),u=t.from.join(","),u===t.to.join(","))throw o(new Error("No point in reordering if nothing changed"))
if(c=a.childIds.join(","),c!==u)throw s(new Error("The 'from' ("+u+") does not match the current state ("+c+")"))
if(t.to.length!==a.childIds.length)throw s(new Error("The 'to' array length does not match the current state"))
for(var h=a.childIds.slice(0),d=0;d<h.length;d++)if(-1===t.to.indexOf(h[d]))throw s(new Error("The 'to' array doesn't contain all of the items in the current state"))
return a.childIds=t.to,n("ChildrenReordered",Object.freeze({id:t.id,to:t.to})),this}}}function r(t){var e=Object.getOwnPropertyNames(t)
return e.forEach(function(e){var n=t[e]
null===n||"object"!=typeof n||Object.isFrozen(n)||r(n)}),Object.freeze(t)}function s(t,e){var n={id:t.id,name:t.name,description:t.description,done:t.done}
return void 0!==e&&(n.parentId=e),n}function o(t,e,n,i,r){e.push({cmd:i,message:s(n,r)})
for(var a=0;a<n.childIds.length;a++)o(t,e,t.getNode(n.childIds[a]),"addChild",n.id)}function a(t){var e=[]
return t.rootIsSet()?(o(t,e,t.getNode(t.getRootId()),"createRoot"),e):e}var l=t("../../utils/validated"),u=t("../../utils/message-validators").isScalar,c=t("../../utils/message-validators").isString,h=t("../../utils/message-validators").isBoolOrNull,d=t("../../utils/message-validators").isArrayOfScalars
i.commands=r({createRoot:{id:{test:u},name:{test:c},done:{test:h,"default":null},description:{test:c,"default":""}},addChild:{parentId:{test:u},id:{test:u},name:{test:c},done:{test:h,"default":!1},description:{test:c,"default":""}},removeChild:{parentId:{test:u},childId:{test:u}},editName:{id:{test:u},from:{test:c},to:{test:c}},editDone:{id:{test:u},from:{test:h},to:{test:h}},editDescription:{id:{test:u},from:{test:c},to:{test:c}},reorderChildren:{id:{test:u},from:{test:d},to:{test:d}}}),i.Repo=n,i.serializeRepoStateToCommands=a,e.exports=Object.freeze(i)},{"../../utils/message-validators":20,"../../utils/validated":21,"./client-error":17,"./consistency-error":18}],20:[function(t,e){"use strict"
function n(t){return void 0!==t}function i(t){return t===!0||t===!1}function r(t){return t===!0||t===!1||null===t}function s(t){return null!==t.match(/^.../)}function o(t){return null!==t.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i)}function a(t){return"object"!=typeof t?!1:void 0===t.length?!1:!0}function l(t){if(!a(t))return!1
var e
for(e=0;e<t.length;e++)if(!o(t[e]))return!1
return!0}function u(t){var e=typeof t
return"string"===e||"number"===e}function c(t){return"string"==typeof t}function h(t){if(!a(t))return!1
var e
for(e=0;e<t.length;e++)if(!u(t[e]))return!1
return!0}n.toJSON=function(){return"<>"},i.toJSON=function(){return"<bool>"},r.toJSON=function(){return"<bool|null>"},o.toJSON=function(){return"<uuidv4>"},a.toJSON=function(){return"[]"},l.toJSON=function(){return"[<uuidv4>]"},u.toJSON=function(){return"<scalar>"},c.toJSON=function(){return"<string>"},h.toJSON=function(){return"[<scalar>]"},e.exports={isDefined:n,isBool:i,isBoolOrNull:r,isValidName:s,isValidUuidV4:o,isArrayOfUuidV4s:l,isScalar:u,isString:c,isArrayOfScalars:h}},{}],21:[function(t,e){"use strict"
function n(t,e,n){var i,r={}
if(n=n||function(t){return t},"object"!=typeof t)throw n(Error("A schema (object) should be passed in, received: "+typeof t))
if("object"!=typeof e)throw n(Error("A message (object) should be passed in, received: "+typeof e))
var s=[]
for(i in e)i in t||s.push(i)
if(s.length>0)throw n(Error("Keys in message have no schema defined: "+s.join(", ")))
for(i in t)if("default"in t[i]&&void 0===e[i])r[i]=t[i]["default"]
else{if("test"in t[i]&&!t[i].test(e[i])){if("default"in t[i]){r[i]=t[i]["default"]
continue}throw n(Error("Parameter '"+i+"' with value '"+e[i]+"' failed test "+t[i].test))}if(i in e&&(r[i]=e[i]),!(i in r))throw n(Error("Parameter '"+i+"' is not set"))}return Object.freeze(r)}e.exports=n},{}]},{},[11])
;//# sourceMappingURL=file:///home/adam/repos/mapdone/client-html5/gen/application.js.map
