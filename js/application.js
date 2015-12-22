!function t(e,n,r){function o(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[a]={exports:{}};e[a][0].call(d.exports,function(t){var n=e[a][1][t];return o(n?n:t)},d,d.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){"use strict";function r(t,e,n,r,c,u,d,l,f){function h(t,e){e.clientId!==u.getClientId()&&d.publish(t,e)}var p,m=o(n);return i(t,e,a(r,{post:function(t,e,n){return m.post("/commands/"+t,e,n)}},l,f),function(){if(p)throw Error("Should only use event client builder once");return p=s("/events",h,m,l,c,f)},m,d,u)}var o=t("./http"),i=t("./client"),a=t("spoo/command-client"),s=t("spoo/event-client");e.exports=r},{"./client":2,"./http":3,"spoo/command-client":4,"spoo/event-client":5}],2:[function(t,e,n){"use strict";function r(t,e,n,r,i,a,s){function c(t){s.setApiKey(t),i.setApiKey(t),u||d||(u=r())}var u,d=!1,l=s.getClientId();i.setClientId(l);var f=s.getApiKey();return f&&(i.setApiKey(f),u=r()),{setApiKey:c,getApiKey:s.getApiKey,exec:function(r,a){s.getApiKey()?(t[r].call(t,a),n.exec(r,a)):i.get("/services/generateApiKey",function(i,s,u,d,l){c(l.apiKey),o.serializeRepoStateToCommands(e).forEach(function(t){n.exec(t.cmd,t.message)}),t[r].call(t,a),n.exec(r,a)})},disable:function(){d=!0,n.disable(),u&&u.disable()}}}var o=t("../domain/graph");e.exports=r},{"../domain/graph":19}],3:[function(t,e,n){"use strict";function r(t){var e,n;return{setApiKey:function(t){e=t},getApiKey:function(){return e},setClientId:function(t){n=t},get:function(r,i){var a=t+r;o.get(a).set("X-ClientId",n).set("X-APIKey",e?e:"none").end(function(t,e){i(t,r,e?e.status:-1,e?e.headers:{},e?e.body:{})})},post:function(r,i,a){var s=t+r;o.post(s).send(JSON.stringify(i)).set("X-ClientId",n).set("X-APIKey",e).set("Content-Type","application/json; charset=utf-8").end(function(t,e){a(t,r,e?e.status:-1,e?e.headers:{},e?e.body:{})})}}}var o=t("superagent");e.exports=r},{superagent:6}],4:[function(t,e,n){"use strict";function r(t,e,n,r){function o(i){function s(){t.removeFirst(),r.setTimeout(o,0)}function c(t,e){var n=t(i);r.setTimeout(e.bind(null,n),0),r.setTimeout(o.bind(null,n),n)}function u(t,e,o,i,a){if(t)r.console.error(t),c(n.clientErrorIncrease,n.clientErrorCallback);else if(o>=200&&300>o)s();else{if(!(o>=500&&600>o))throw r.console.error(a),new Error("Unexpected response: uri="+e+", status="+o+", headers="+i+", body="+a);r.console.error(a),c(n.serverErrorIncrease,n.serverErrorCallback)}}var d=t.getFirst();return d?(i=i||0,a=!0,void e.post(d.cmd,d.data,u)):void(a=!1)}if(void 0===t)throw new Error("Provide a repo");if(void 0===e)throw new Error("Provide an http client implementation");void 0===n&&(n={serverErrorIncrease:function(t){return t+5e3},clientErrorIncrease:function(t){return t+1e4},serverErrorCallback:function(){},clientErrorCallback:function(){}}),void 0===r&&(r={setTimeout:function(){setTimeout.apply(null,arguments)},console:console});var i=!1,a=!1;return{disable:function(){i=!0},exec:function(e,n){t.add(e,n),i||a||o()}}}e.exports=r},{}],5:[function(t,e,n){"use strict";function r(t,e,n){var r=!0;return{poll:function(o,i,a){t.setTimeout(function(){r&&n.get(o,function(n,r,o,s,c){a&&t.setTimeout(function(){a(n,r,o,s,c)},0),e.exec(n,i,r,o,s,c)})},i)},disable:function(){r=!1}}}function o(t){t=t||function(t){return"the provided arguments"};var e=[];return{exec:function(n,r,o,i,a,s){for(var c=null,u=0;u<e.length;u++)if(e[u].canHandle(n,o,i,a,s)){if(null!==c)throw Error("Only one strategy is allowed to handle a set of data, but candidates "+c+" and "+u+" both handle: "+t(arguments));c=u}if(null===c)throw Error("No strategy can handle: "+t(arguments));e[c].exec(n,r,o,i,a,s)},add:function(t){e.push(t)}}}function i(){return{transitionedTo:function(t){},latest:function(){}}}function a(t,e,n,a,s,c){function u(t,n,r,o,i){if(200!==r)throw Error("Did not expect non-200 transition");if(void 0===i.type||void 0===i.message)throw Error("Expected both type and message to be set in body");s.transitionedTo(n),e(i.type,i.message)}if(void 0===t)throw Error("Provide an initial uri");if(void 0===e||void 0===e.call||2!==e.length)throw Error("Provide an event callback with 2 params: eventType, eventMessage");if(void 0===n)throw Error("Provide an http interface");void 0===a&&(a={serverErrorIncrease:function(t){return t+5e3},clientErrorIncrease:function(t){return t+1e4},waitingIncrease:function(t){return 500},serverErrorCallback:function(t,e,n){c.console.log("Server error polling "+t+", waiting "+n+"ms")},clientErrorCallback:function(t,e,n){c.console.log("Client error polling "+t+", waiting "+n+"ms")},waitingCallback:function(){}}),s=s||i(),void 0===c&&(c={setTimeout:function(){setTimeout.apply(null,arguments)},console:console});var d=o(function(t){return"{err: "+t[0]+", uri: "+t[2]+", status: "+t[3]+", headers: "+JSON.stringify(t[4])+", body: "+JSON.stringify(t[5])+"}"}),l=r(c,d,n);d.add({canHandle:function(t,e,n,r,o){return 204===n},exec:function(t,e,n,r,o,i){e=a.waitingIncrease(e),a.waitingCallback&&c.setTimeout(function(){a.waitingCallback(n,e)},0),l.poll(n,e)}}),d.add({canHandle:function(t,e,n,r,o){return 200===n&&void 0===o.message&&void 0!==o.next},exec:function(t,e,n,r,o,i){l.poll(i.next,a.waitingIncrease(e),u)}}),d.add({canHandle:function(t,e,n,r,o){return 200===n&&void 0!==o.message&&void 0===o.next},exec:function(t,e,n,r,o,i){a.waitingCallback&&c.setTimeout(function(){a.waitingCallback(n,e)},0),l.poll(n,a.waitingIncrease(e))}}),d.add({canHandle:function(t,e,n,r,o){return 200===n&&void 0!==o.message&&void 0!==o.next},exec:function(t,e,n,r,o,i){l.poll(i.next,a.waitingIncrease(e),u)}}),d.add({canHandle:function(t,e,n,r,o){return n>=500&&600>n},exec:function(t,e,n,r,o,i){e=a.serverErrorIncrease(e),a.serverErrorCallback&&c.setTimeout(function(){a.serverErrorCallback(n,t,e)},0),l.poll(n,e)}}),d.add({canHandle:function(t,e,n,r,o){return void 0!==t&&null!==t},exec:function(t,e,n,r,o,i){e=a.clientErrorIncrease(e),a.clientErrorCallback&&c.setTimeout(function(){a.clientErrorCallback(n,t,e)},0),l.poll(n,e)}});var f=s.latest();return f&&(t=f),l.poll(t,0),{disable:function(){l.disable()}}}e.exports=a},{}],6:[function(t,e,n){function r(){}function o(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function i(){if(g.XMLHttpRequest&&("file:"!=g.location.protocol||!g.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1}function a(t){return t===Object(t)}function s(t){if(!a(t))return t;var e=[];for(var n in t)null!=t[n]&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}function c(t){for(var e,n,r={},o=t.split("&"),i=0,a=o.length;a>i;++i)n=o[i],e=n.split("="),r[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return r}function u(t){var e,n,r,o,i=t.split(/\r?\n/),a={};i.pop();for(var s=0,c=i.length;c>s;++s)n=i[s],e=n.indexOf(":"),r=n.slice(0,e).toLowerCase(),o=b(n.slice(e+1)),a[r]=o;return a}function d(t){return t.split(/ *; */).shift()}function l(t){return v(t.split(/ *; */),function(t,e){var n=e.split(/ *= */),r=n.shift(),o=n.shift();return r&&o&&(t[r]=o),t},{})}function f(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text=this.xhr.responseText,this.setStatusProperties(this.xhr.status),this.header=this.headers=u(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text):null}function h(t,e){var n=this;m.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var e=new f(n);"HEAD"==t&&(e.text=null),n.callback(null,e)})}function p(t,e){return"function"==typeof e?new h("GET",t).end(e):1==arguments.length?new h("GET",t):new h(t,e)}var m=t("emitter"),v=t("reduce"),g="undefined"==typeof window?this:window,b="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};p.serializeObject=s,p.parseString=c,p.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},p.serialize={"application/x-www-form-urlencoded":s,"application/json":JSON.stringify},p.parse={"application/x-www-form-urlencoded":c,"application/json":JSON.parse},f.prototype.get=function(t){return this.header[t.toLowerCase()]},f.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=d(e);var n=l(e);for(var r in n)this[r]=n[r]},f.prototype.parseBody=function(t){var e=p.parse[this.type];return e?e(t):null},f.prototype.setStatusProperties=function(t){var e=t/100|0;this.status=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t||1223==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},f.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,r="cannot "+e+" "+n+" ("+this.status+")",o=new Error(r);return o.status=this.status,o.method=e,o.url=n,o},p.Response=f,m(h.prototype),h.prototype.use=function(t){return t(this),this},h.prototype.timeout=function(t){return this._timeout=t,this},h.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},h.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},h.prototype.set=function(t,e){if(a(t)){for(var n in t)this.set(n,t[n]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},h.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},h.prototype.type=function(t){return this.set("Content-Type",p.types[t]||t),this},h.prototype.accept=function(t){return this.set("Accept",p.types[t]||t),this},h.prototype.auth=function(t,e){var n=btoa(t+":"+e);return this.set("Authorization","Basic "+n),this},h.prototype.query=function(t){return"string"!=typeof t&&(t=s(t)),t&&this._query.push(t),this},h.prototype.field=function(t,e){return this._formData||(this._formData=new FormData),this._formData.append(t,e),this},h.prototype.attach=function(t,e,n){return this._formData||(this._formData=new FormData),this._formData.append(t,e,n),this},h.prototype.send=function(t){var e=a(t),n=this.getHeader("Content-Type");if(e&&a(this._data))for(var r in t)this._data[r]=t[r];else"string"==typeof t?(n||this.type("form"),n=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return e?(n||this.type("json"),this):this},h.prototype.callback=function(t,e){var n=this._callback;return 2==n.length?n(t,e):t?this.emit("error",t):void n(e)},h.prototype.crossDomainError=function(){var t=new Error("Origin is not allowed by Access-Control-Allow-Origin");t.crossDomain=!0,this.callback(t)},h.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},h.prototype.withCredentials=function(){return this._withCredentials=!0,this},h.prototype.end=function(t){var e=this,n=this.xhr=i(),a=this._query.join("&"),s=this._timeout,c=this._formData||this._data;if(this._callback=t||r,n.onreadystatechange=function(){return 4==n.readyState?0==n.status?e.aborted?e.timeoutError():e.crossDomainError():void e.emit("end"):void 0},n.upload&&(n.upload.onprogress=function(t){t.percent=t.loaded/t.total*100,e.emit("progress",t)}),s&&!this._timer&&(this._timer=setTimeout(function(){e.abort()},s)),a&&(a=p.serializeObject(a),this.url+=~this.url.indexOf("?")?"&"+a:"?"+a),n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof c&&!o(c)){var u=p.serialize[this.getHeader("Content-Type")];u&&(c=u(c))}for(var d in this.header)null!=this.header[d]&&n.setRequestHeader(d,this.header[d]);return this.emit("request",this),n.send(c),this},p.Request=h,p.get=function(t,e,n){var r=p("GET",t);return"function"==typeof e&&(n=e,e=null),e&&r.query(e),n&&r.end(n),r},p.head=function(t,e,n){var r=p("HEAD",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},p.del=function(t,e){var n=p("DELETE",t);return e&&n.end(e),n},p.patch=function(t,e,n){var r=p("PATCH",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},p.post=function(t,e,n){var r=p("POST",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},p.put=function(t,e,n){var r=p("PUT",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},e.exports=p},{emitter:7,reduce:8}],7:[function(t,e,n){function r(t){return t?o(t):void 0}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){r.off(t,n),e.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n){n=n.slice(0);for(var r=0,o=n.length;o>r;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],8:[function(t,e,n){e.exports=function(t,e,n){for(var r=0,o=t.length,i=3==arguments.length?n:t[r++];o>r;)i=e.call(null,i,t[r],++r,t);return i}},{}],9:[function(t,e,n){(function(){function t(t,e,n){var r=e&&n||0,o=0;for(e=e||[],t.toLowerCase().replace(/[0-9a-f]{2}/g,function(t){16>o&&(e[r+o++]=h[t])});16>o;)e[r+o++]=0;return e}function n(t,e){var n=e||0,r=f;return r[t[n++]]+r[t[n++]]+r[t[n++]]+r[t[n++]]+"-"+r[t[n++]]+r[t[n++]]+"-"+r[t[n++]]+r[t[n++]]+"-"+r[t[n++]]+r[t[n++]]+"-"+r[t[n++]]+r[t[n++]]+r[t[n++]]+r[t[n++]]+r[t[n++]]+r[t[n++]]}function r(t,e,r){var o=e&&r||0,i=e||[];t=t||{};var a=null!=t.clockseq?t.clockseq:g,s=null!=t.msecs?t.msecs:(new Date).getTime(),c=null!=t.nsecs?t.nsecs:y+1,u=s-b+(c-y)/1e4;if(0>u&&null==t.clockseq&&(a=a+1&16383),(0>u||s>b)&&null==t.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");b=s,y=c,g=a,s+=122192928e5;var d=(1e4*(268435455&s)+c)%4294967296;i[o++]=d>>>24&255,i[o++]=d>>>16&255,i[o++]=d>>>8&255,i[o++]=255&d;var l=s/4294967296*1e4&268435455;i[o++]=l>>>8&255,i[o++]=255&l,i[o++]=l>>>24&15|16,i[o++]=l>>>16&255,i[o++]=a>>>8|128,i[o++]=255&a;for(var f=t.node||v,h=0;6>h;h++)i[o+h]=f[h];return e?e:n(i)}function o(t,e,r){var o=e&&r||0;"string"==typeof t&&(e="binary"==t?new l(16):null,t=null),t=t||{};var a=t.random||(t.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e)for(var s=0;16>s;s++)e[o+s]=a[s];return e||n(a)}var i,a=this;if("function"==typeof a.require)try{var s=a.require("crypto").randomBytes;i=s&&function(){return s(16)}}catch(c){}if(!i&&a.crypto&&crypto.getRandomValues){var u=new Uint8Array(16);i=function(){return crypto.getRandomValues(u),u}}if(!i){var d=new Array(16);i=function(){for(var t,e=0;16>e;e++)0===(3&e)&&(t=4294967296*Math.random()),d[e]=t>>>((3&e)<<3)&255;return d}}for(var l="function"==typeof a.Buffer?a.Buffer:Array,f=[],h={},p=0;256>p;p++)f[p]=(p+256).toString(16).substr(1),h[f[p]]=p;var m=i(),v=[1|m[0],m[1],m[2],m[3],m[4],m[5]],g=16383&(m[6]<<8|m[7]),b=0,y=0,w=o;if(w.v1=r,w.v4=o,w.parse=t,w.unparse=n,w.BufferClass=l,"undefined"!=typeof e&&e.exports)e.exports=w;else if("function"==typeof define&&define.amd)define(function(){return w});else{var I=a.uuid;w.noConflict=function(){return a.uuid=I,w},a.uuid=w}}).call(this)},{}],10:[function(t,e,n){"use strict";function r(){var t={},e=[];return{subscribe:function(e,n){void 0===t[e]&&(t[e]=[]),t[e].push(n)},subscribeGlobal:function(t){e.push(t)},unsubscribe:function(e,n){if(void 0!==t[e])for(var r=0;r<t[e].length;r++)if(t[e][r]===n)return void t[e].splice(r,1);throw Error("Couldn't find listener to remove")},unsubscribeGlobal:function(t){for(var n=0;n<e.length;n++)if(e[n]===t)return void e.splice(n,1);throw Error("Couldn't find listener to remove")},publish:function(n,r){var o=[].slice.call(arguments,1);e.forEach(function(t){setTimeout(Object.bind.apply(t,[null,n].concat(o)),0)}),void 0!==t[n]&&t[n].forEach(function(t){setTimeout(Object.bind.apply(t,[null].concat(o)),0)})}}}function o(){var t={},e=[];return{subscribe:function(e,n){void 0===t[e]&&(t[e]=[]),t[e].push(n)},subscribeGlobal:function(t){e.push(t)},unsubscribe:function(e,n){if(void 0!==t[e])for(var r=0;r<t[e].length;r++)if(t[e][r]===n)return void t[e].splice(r,1);throw Error("Couldn't find listener to remove")},unsubscribeGlobal:function(t){for(var n=0;n<e.length;n++)if(e[n]===t)return void e.splice(n,1);throw Error("Couldn't find listener to remove")},publish:function(n,r){var o,i,a=t[n],s=arguments.length,c=void 0===a?0:a.length,u=e.length;for(o=0;u>o;o++)switch(i=e[o],s){case 1:i(n);break;case 2:i(n,arguments[1]);break;case 3:i(n,arguments[1],arguments[2]);break;case 4:i(n,arguments[1],arguments[2],arguments[3]);break;case 5:i(n,arguments[1],arguments[2],arguments[3],arguments[4]);break;case 6:i(n,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);break;default:i.apply(null,arguments)}for(o=0;c>o;o++)switch(i=a[o],s){case 1:i();break;case 2:i(arguments[1]);break;case 3:i(arguments[1],arguments[2]);break;case 4:i(arguments[1],arguments[2],arguments[3]);break;case 5:i(arguments[1],arguments[2],arguments[3],arguments[4]);break;case 6:i(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);break;default:var d=Array(s-1);for(o=1;s>o;o++)d[o-1]=arguments[o];i.apply(null,d)}}}}r.Production=o,e.exports=r},{}],11:[function(t,e,n){"use strict";function r(){function t(t,e){switch(t){case"synced":return"http://api.mapdone.com";case"local-sync-port":if(!e)throw new Error("Invalid port specified");return"http://localhost:"+e;case"local-only":break;default:console.error("Unrecognised conntectivity mode: "+JSON.stringify(t))}}function e(t){function e(t,e){p[t].call(p,e)}var n=a();if(t){var r=s(p,h,t,d(),l(),n,f);return r}return{exec:e,setApiKey:function(t){h.clearRootNode(),n.setApiKey(t)},getApiKey:n.getApiKey}}function n(t){var e=t.match(/^#\/(([^\/=]+)=?([0-9]+)?)(\/node\/.*?([^\/]+)?)?/);if(e)return{fullMode:e[1],mode:e[2],port:e[3],node:e[5]}}function r(t,e){if(h.rootIsSet())document.location.hash="#/"+t+"/node/"+h.getRootId();else{var n={id:o.v4(),name:"All of the Things",description:'This is the centre of your "todo" universe - welcome home! Try clicking the + below to add more items. Click on the items for more detail, and to add stuff to them in turn. You can edit/delete this text by clicking on the pencil to the right.',children:[]};p.createRoot({id:n.id,name:n.name,description:n.description})}}function i(){var o=n(document.location.hash);return o?c&&o.fullMode!==c?void document.location.reload():(c=o.fullMode,u||(u=e(t(o.mode,o.port))),void(o.node||r(o.fullMode,u))):void(document.location.hash="#/synced/")}var c,u;return{inferState:i,navigateToNode:function(t){var e=n(document.location.hash);return e?void(document.location.hash="#/"+e.fullMode+"/node/"+t):void document.location.hash("#/synced/node/"+t)},getClient:function(){return u}}}var o=t("node-uuid"),i=t("../../../domain/graph"),a=t("./mapdone-local/client-repo"),s=t("../../../api/buildClient"),c=t("upubsub"),u=t("./mapdone-local/node-repo"),d=t("./mapdone-local/command-repo"),l=t("./mapdone-local/event-repo"),f=c(),h=u(f),p=i(f,h),m=r();h.rootIsSet()||f.subscribe("RootCreated",function(t){m.navigateToNode(t.id)}),window.onhashchange=m.inferState,m.inferState(),t("./controllers.js");var v=angular.module("mapdoneServices",[]);v.factory("CommandHandler",[function(){return m.getClient()}]),v.factory("Repo",[function(){return h}]),v.factory("EventPubSub",[function(){return f}]),v.factory("IdGenerator",[o.v4]);var g=angular.module("mapdoneApp",["ngRoute","ui.sortable","ui.bootstrap","toastr","monospaced.elastic","mapdoneControllers","mapdoneServices"]);g.config(["$routeProvider",function(t){t.when("/:connectivityMode/node/:nodePath*",{templateUrl:"partials/node-detail.html",controller:"NodeCtrl"})}])},{"../../../api/buildClient":1,"../../../domain/graph":19,"./controllers.js":12,"./mapdone-local/client-repo":13,"./mapdone-local/command-repo":14,"./mapdone-local/event-repo":15,"./mapdone-local/node-repo":16,"node-uuid":9,upubsub:10}],12:[function(t,e,n){"use strict";function r(t,e,n){var r;for(t.node=e.getNode(n),t.node.children=[],r=0;r<t.node.childIds.length;r++)t.node.children.push(e.getNode(t.node.childIds[r]))}function o(t,e,n){r(t,e,n),t.$apply()}function i(t,e,n,r,i){function a(e){return e===t.node.id||-1!==t.node.childIds.indexOf(e)}function s(e){r.subscribe(e+"Edited",function(e){a(e.id)&&o(t,i,t.node.id)})}r.subscribe("ChildAdded",function(e){e.parentId===t.node.id&&o(t,i,t.node.id)}),r.subscribe("ChildRemoved",function(e){e.parentId===t.node.id&&o(t,i,t.node.id)}),s("Name"),s("Description"),s("Done")}function a(t,e,n,r){t.newChild=function(t){var n=e.open({templateUrl:"modal-node.html",controller:"ModalNodeCtrl",resolve:{existingNode:function(){return{}}}});n.result.then(function(e){r.exec("addChild",{parentId:t.id,id:s.v4(),name:e.name,done:e.done,description:e.description})})},t.editSyncKey=function(){var t=e.open({templateUrl:"modal-synckey.html",controller:"ModalSyncKeyCtrl",resolve:{existingSyncKey:function(){return r.getApiKey()}}});t.result.then(function(t){return r.setApiKey(t)})},t.editNode=function(t){var n=e.open({templateUrl:"modal-node.html",controller:"ModalNodeCtrl",resolve:{existingNode:function(){return t}}});n.result.then(function(e){["name","done","description"].forEach(function(n){t[n]!==e[n]&&r.exec("edit"+n.substr(0,1).toUpperCase()+n.substr(1),{id:t.id,from:t[n],to:e[n]})})})},t.attachExisting=function(t){n.error("Not yet implemented")},t.addChild=function(){r.exec("addChild",{parentId:t.node.id,id:s.v4(),name:t.newChild.name}),t.newChild.name="",t.newChild.show=!1},t.removeChild=function(t,e){r.exec("removeChild",{parentId:t.id,childId:e.id})},t.toggleDone=function(t){r.exec("editDone",{id:t.id,from:!t.done,to:t.done})}}var s=t("node-uuid");angular.module("ui.bootstrap.modal").directive("modalWindow",function(t){return{priority:1,link:function(e,n,r){t(function(){n.find("[autofocus]").focus()})}}});var c=angular.module("mapdoneControllers",[]);c.controller("ModalSyncKeyCtrl",["$scope","$modalInstance","existingSyncKey",function(t,e,n){t.synckey=n,t.ok=function(){e.close(t.synckey)},t.cancel=function(){e.dismiss("cancel")}}]),c.controller("ModalNodeCtrl",["$scope","$modalInstance","existingNode",function(t,e,n){t.input={},t.input.node={};for(var r in n)t.input.node[r]=n[r];null===t.input.node.done?t.input.node.type="note":t.input.node.type="todo",t.ok=function(){"todo"===t.input.node.type?n.done===!0?t.input.node.done=!0:t.input.node.done=!1:t.input.node.done=null,e.close(t.input.node)},t.cancel=function(){e.dismiss("cancel")}}]),c.controller("NodeCtrl",["$scope","$routeParams","$location","$modal","toastr","Repo","CommandHandler","EventPubSub",function(t,e,n,o,s,c,u,d){var l=e.nodePath.replace(/^.*\//,"");r(t,c,l);var f=e.nodePath.split("/");t.breadcrumbs=[];for(var h="",p=0;p<f.length-1;p++){var m=f[p];h+="/"+f[p],t.breadcrumbs.push({path:h,name:c.getNode(m).name})}a(t,o,s,u),i(t,n,s,d,c),t.absoluteNavigate=function(t){n.path(n.path().replace(/\/node\/.*/,"/node"+t))},t.relativeNavigate=function(t){n.path(n.path()+"/"+t.id)},t.sortableOptions={containment:"parent",cursor:"ns-resize",tolerance:"pointer",stop:function(e,n){u.exec("reorderChildren",{id:t.node.id,from:t.node.childIds,to:t.node.children.map(function(t){return t.id})})}}}])},{"node-uuid":9}],13:[function(t,e,n){"use strict";function r(){return{apiKeyIsSet:function(){return null!==localStorage.getItem("apiKey")},getApiKey:function(){return localStorage.getItem("apiKey")},setApiKey:function(t){return localStorage.setItem("apiKey",t)},getClientId:function(){var t=localStorage.getItem("clientId");return t||(t=o.v4(),localStorage.setItem("clientId",t)),t}}}var o=t("node-uuid");e.exports=r},{"node-uuid":9}],14:[function(t,e,n){"use strict";function r(){return{getFirst:function(){var t=localStorage.getItem("commands");if(null!==t)return t=JSON.parse(t),t[0]},add:function(t,e){var n=localStorage.getItem("commands");n=null===n?[]:JSON.parse(n),n.push({cmd:t,data:e}),localStorage.setItem("commands",JSON.stringify(n))},removeFirst:function(){var t=JSON.parse(localStorage.getItem("commands"));t.shift(),localStorage.setItem("commands",JSON.stringify(t))}}}e.exports=r},{}],15:[function(t,e,n){"use strict";function r(){return{transitionedTo:function(t){localStorage.setItem("event-position",t)},latest:function(){return localStorage.getItem("event-position")}}}e.exports=r},{}],16:[function(t,e,n){"use strict";function r(t){function e(t){return"node-"+t}function n(t){return null!==localStorage.getItem(e(t))}function r(t){var n=localStorage.getItem(e(t));if(null===n)throw Error("Node "+t+" does not exist");return n=JSON.parse(n),n.id=t,n}function o(){return null!==localStorage.getItem(e("root_id"))}function i(t){localStorage.setItem(e("root_id"),t)}function a(){if(!o())throw Error("Root is not yet defined");return localStorage.getItem(e("root_id"))}function s(){localStorage.removeItem(e("root_id"))}function c(t){localStorage.setItem(e(t.id),JSON.stringify({name:t.name,description:t.description,childIds:t.childIds||[],done:t.done}))}function u(t){localStorage.removeItem(e(t))}function d(e){var n=e.substr(0,1).toLowerCase()+e.substr(1);t.subscribe(e+"Edited",function(t){var e=r(t.id);e[n]=t.value,c(e)})}return t.subscribe("RootCreated",function(t){c(t),i(t.id)}),t.subscribe("ChildAdded",function(t){var e=r(t.parentId);if(n(t.id))throw new Error("dupe!");c(t),e.childIds.push(t.id),c(e)}),t.subscribe("ChildRemoved",function(t){var e=r(t.parentId);e.childIds=e.childIds.filter(function(e){return e!==t.childId}),c(e),u(t.childId)}),d("Name"),d("Done"),d("Description"),t.subscribe("ChildrenReordered",function(t){var e=r(t.id);e.childIds=t.to,c(e)}),{rootIsSet:o,getRootId:a,nodeExists:n,getNode:r,clearRootNode:s}}e.exports=r},{}],17:[function(t,e,n){"use strict";function r(t){if(!(t instanceof Error))throw new Error("Error is required");var e=Object.create(o);return t.name=o.name,e.message=t.message,e.stack=t.stack,e}var o=Object.create(Error.prototype);o.constructor=r,o.name=o.constructor.name,o.constructor.prototype=o,e.exports=r},{}],18:[function(t,e,n){"use strict";function r(t){if(!(t instanceof Error))throw new Error("Error is required");var e=Object.create(o);return t.name=o.name,e.message=t.message,e.stack=t.stack,e}var o=Object.create(Error.prototype);o.constructor=r,o.name=o.constructor.name,o.constructor.prototype=o,e.exports=r},{}],19:[function(t,e,n){"use strict";function r(t,e){function n(t){e.nodes[t.id]={id:t.id,name:t.name,description:t.description,childIds:t.childIds||[],done:t.done}}function r(t){if(!(t in e.nodes))throw new Error("Node "+t+" does not exist");return e.nodes[t]}function o(){return"root"in e}function i(e){var o=e.substr(0,1).toLowerCase()+e.substr(1);t.subscribe(e+"Edited",function(t){var e=r(t.id);e[o]=t.value,n(e)})}return e=e||{},"nodes"in e||(e.nodes={}),t.subscribe("RootCreated",function(t){n(t),e.root=t.id}),t.subscribe("ChildAdded",function(t){var e=r(t.parentId);e.childIds.push(t.id),n(t),n(e)}),t.subscribe("ChildRemoved",function(t){var o=r(t.parentId);o.childIds=o.childIds.filter(function(e){return e!==t.childId}),n(o),delete e[t.childId]}),i("Name"),i("Done"),i("Description"),t.subscribe("ChildrenReordered",function(t){var e=r(t.id);e.childIds=t.to,n(e)}),{getNode:r,rootIsSet:o,getRootId:function(){if(!o())throw new Error("Root is not yet defined");return e.root},nodeExists:function(t){return t in e.nodes}}}function o(e,n,i,a){function s(t,r){var o=t.substr(0,1).toLowerCase()+t.substr(1);return function(s,c){c=c||e.publish;var d;if(s=u(r,s,a),s.to===s.from)throw a(new Error("Invalid transition to existing value"));if(!n.nodeExists(s.id))throw i(new Error("Node '"+s.id+"' does not exist"));if(d=n.getNode(s.id),d[o]!==s.from)throw i(new Error("Mismatch on '"+o+"' field, expected existing value to be: "+s.from+", found: "+d[o]));c(t+"Edited",Object.freeze({id:s.id,value:s.to}))}}return n=n||r(e),i=i||function(){var e=t("./consistency-error");return function(t){return e(t)}}(),a=a||function(){var e=t("./client-error");return function(t){return e(t)}}(),{createRoot:function(t,r){if(r=r||e.publish,t=u(o.commands.createRoot,t,a),n.rootIsSet())throw i(new Error("The root id "+n.getRootId()+" cannot be overriden by id "+t.id));return r("RootCreated",t),this},addChild:function(t,r){r=r||e.publish;var s;if(t=u(o.commands.addChild,t,a),n.nodeExists(t.id))throw a(new Error("Cannot replace existing child "+t.id));if(s=n.getNode(t.parentId),-1!==s.childIds.indexOf(t.id))throw i(new Error("Child "+t.id+" cannot be re-added"));return r("ChildAdded",t),this},removeChild:function(t,r){r=r||e.publish;var s;if(t=u(o.commands.removeChild,t,a),s=n.getNode(t.parentId),-1===s.childIds.indexOf(t.childId))throw i(new Error("Child "+t.childId+" cannot be removed as it is not a known child"));return r("ChildRemoved",t),this},editName:s("Name",o.commands.editName),editDescription:s("Description",o.commands.editDescription),editDone:function(t,r){r=r||e.publish;var s;if(t=u(o.commands.editDone,t,a),t.to===t.from)throw a(new Error("Invalid transition to existing value"));if(s=n.getNode(t.id),s.done!==t.from)throw i(new Error("Mismatch on 'done' field, expected existing value to be: "+t.from+", found: "+s.done));r("DoneEdited",Object.freeze({id:t.id,value:t.to}))},reorderChildren:function(t,r){r=r||e.publish;var s,c,d;if(t=u(o.commands.reorderChildren,t,a),s=n.getNode(t.id),c=t.from.join(","),c===t.to.join(","))throw a(new Error("No point in reordering if nothing changed"));if(d=s.childIds.join(","),d!==c)throw i(new Error("The 'from' ("+c+") does not match the current state ("+d+")"));if(t.to.length!==s.childIds.length)throw i(new Error("The 'to' array length does not match the current state"));for(var l=s.childIds.slice(0),f=0;f<l.length;f++)if(-1===t.to.indexOf(l[f]))throw i(new Error("The 'to' array doesn't contain all of the items in the current state"));return s.childIds=t.to,r("ChildrenReordered",Object.freeze({id:t.id,to:t.to})),this}}}function i(t){var e=Object.getOwnPropertyNames(t);return e.forEach(function(e){var n=t[e];null===n||"object"!=typeof n||Object.isFrozen(n)||i(n)}),Object.freeze(t)}function a(t,e){var n={id:t.id,name:t.name,description:t.description,done:t.done};return void 0!==e&&(n.parentId=e),n}function s(t,e,n,r,o){e.push({cmd:r,message:a(n,o)});for(var i=0;i<n.childIds.length;i++)s(t,e,t.getNode(n.childIds[i]),"addChild",n.id)}function c(t){var e=[];return t.rootIsSet()?(s(t,e,t.getNode(t.getRootId()),"createRoot"),e):e}var u=t("../../utils/validated"),d=t("../../utils/message-validators").isScalar,l=t("../../utils/message-validators").isString,f=t("../../utils/message-validators").isBoolOrNull,h=t("../../utils/message-validators").isArrayOfScalars;
o.commands=i({createRoot:{id:{test:d},name:{test:l},done:{test:f,"default":null},description:{test:l,"default":""}},addChild:{parentId:{test:d},id:{test:d},name:{test:l},done:{test:f,"default":!1},description:{test:l,"default":""}},removeChild:{parentId:{test:d},childId:{test:d}},editName:{id:{test:d},from:{test:l},to:{test:l}},editDone:{id:{test:d},from:{test:f},to:{test:f}},editDescription:{id:{test:d},from:{test:l},to:{test:l}},reorderChildren:{id:{test:d},from:{test:h},to:{test:h}}}),o.Repo=r,o.serializeRepoStateToCommands=c,e.exports=Object.freeze(o)},{"../../utils/message-validators":20,"../../utils/validated":21,"./client-error":17,"./consistency-error":18}],20:[function(t,e,n){"use strict";function r(t){return void 0!==t}function o(t){return t===!0||t===!1}function i(t){return t===!0||t===!1||null===t}function a(t){return null!==t.match(/^.../)}function s(t){return null!==t.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i)}function c(t){return"object"!=typeof t?!1:void 0===t.length?!1:!0}function u(t){if(!c(t))return!1;var e;for(e=0;e<t.length;e++)if(!s(t[e]))return!1;return!0}function d(t){var e=typeof t;return"string"===e||"number"===e}function l(t){return"string"==typeof t}function f(t){if(!c(t))return!1;var e;for(e=0;e<t.length;e++)if(!d(t[e]))return!1;return!0}r.toJSON=function(){return"<>"},o.toJSON=function(){return"<bool>"},i.toJSON=function(){return"<bool|null>"},s.toJSON=function(){return"<uuidv4>"},c.toJSON=function(){return"[]"},u.toJSON=function(){return"[<uuidv4>]"},d.toJSON=function(){return"<scalar>"},l.toJSON=function(){return"<string>"},f.toJSON=function(){return"[<scalar>]"},e.exports={isDefined:r,isBool:o,isBoolOrNull:i,isValidName:a,isValidUuidV4:s,isArrayOfUuidV4s:u,isScalar:d,isString:l,isArrayOfScalars:f}},{}],21:[function(t,e,n){"use strict";function r(t,e,n){var r,o={};if(n=n||function(t){return t},"object"!=typeof t)throw n(Error("A schema (object) should be passed in, received: "+typeof t));if("object"!=typeof e)throw n(Error("A message (object) should be passed in, received: "+typeof e));var i=[];for(r in e)r in t||i.push(r);if(i.length>0)throw n(Error("Keys in message have no schema defined: "+i.join(", ")));for(r in t)if("default"in t[r]&&void 0===e[r])o[r]=t[r]["default"];else{if("test"in t[r]&&!t[r].test(e[r])){if("default"in t[r]){o[r]=t[r]["default"];continue}throw n(Error("Parameter '"+r+"' with value '"+e[r]+"' failed test "+t[r].test))}if(r in e&&(o[r]=e[r]),!(r in o))throw n(Error("Parameter '"+r+"' is not set"))}return Object.freeze(o)}e.exports=r},{}]},{},[11]);
//# sourceMappingURL=file:///home/adam/repos/mapdone/client-html5/build_intermediate/application.js.map