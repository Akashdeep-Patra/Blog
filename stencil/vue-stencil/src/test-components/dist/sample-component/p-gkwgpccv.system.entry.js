System.register(["./p-052a4994.system.js","./p-6b96489b.system.js","./p-60251a1a.system.js","./p-4b952a9c.system.js"],function(t,e){"use strict";var n,r,o,i,a,s,f,c,u,l,v,h,d,p,y,g,m,b,w,P;return{setters:[function(t){n=t.d;r=t.h;o=t.f;i=t.g},function(t){a=t.b;s=t.c;f=t.d;c=t.e;u=t.f;l=t.g;v=t.h;h=t.i;d=t.j},function(t){p=t.a},function(t){y=t.a;g=t.b;m=t.c;b=t.d;w=t.e;P=t.f}],execute:function(){var e=function(t){var e=[];for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}if(!t){console.warn.apply(console,e)}};var T=function(){var t;var n=[];var r=function(n){e(t==null,"A history supports only one prompt at a time");t=n;return function(){if(t===n){t=null}}};var o=function(n,r,o,i){if(t!=null){var a=typeof t==="function"?t(n,r):t;if(typeof a==="string"){if(typeof o==="function"){o(a,i)}else{e(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(a!==false)}}else{i(true)}};var i=function(t){var e=true;var r=function(){var n=[];for(var r=0;r<arguments.length;r++){n[r]=arguments[r]}if(e){t.apply(void 0,n)}};n.push(r);return function(){e=false;n=n.filter(function(t){return t!==r})}};var a=function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}n.forEach(function(e){return e.apply(void 0,t)})};return{setPrompt:r,confirmTransitionTo:o,appendListener:i,notifyListeners:a}};var k=function(t,e){if(e===void 0){e="scrollPositions"}var n=new Map;var r=function(e,r){n.set(e,r);if(y(t,"sessionStorage")){var o=[];n.forEach(function(t,e){o.push([e,t])});t.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}};var o=function(t){return n.get(t)};var i=function(t){return n.has(t)};var a=function(e){r(e,[t.scrollX,t.scrollY])};if(y(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);n=s?new Map(JSON.parse(s)):n}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:r,get:o,has:i,capture:a}};var O="popstate";var L="hashchange";var S=function(t,n){if(n===void 0){n={}}var r=false;var o=t.history;var i=t.location;var h=t.navigator;var d=g(t);var p=!m(h);var y=k(t);var P=n.forceRefresh!=null?n.forceRefresh:false;var S=n.getUserConfirmation!=null?n.getUserConfirmation:b;var x=n.keyLength!=null?n.keyLength:6;var E=n.basename?a(s(n.basename)):"";var j=function(){try{return t.history.state||{}}catch(t){return{}}};var U=function(t){t=t||{};var n=t.key,r=t.state;var o=i.pathname,a=i.search,s=i.hash;var v=o+a+s;e(!E||u(v,E),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+v+'" to begin with "'+E+'".');if(E){v=l(v,E)}return f(v,r,n||c(x))};var H=T();var A=function(t){y.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=y.get(K.location.key);K.length=o.length;H.notifyListeners(K.location,K.action)};var I=function(t){if(!w(h,t)){C(U(t.state))}};var R=function(){C(U(j()))};var C=function(t){if(r){r=false;A()}else{var e="POP";H.confirmTransitionTo(t,e,S,function(n){if(n){A({action:e,location:t})}else{B(t)}})}};var B=function(t){var e=K.location;var n=Y.indexOf(e.key);var o=Y.indexOf(t.key);if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;D(i)}};var V=U(j());var Y=[V.key];var q=0;var M=false;var F=function(t){return E+v(t)};var J=function(t,n){e(!(typeof t==="object"&&t.state!==undefined&&n!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var a=f(t,n,c(x),K.location);H.confirmTransitionTo(a,r,S,function(t){if(!t){return}var n=F(a);var s=a.key,f=a.state;if(d){o.pushState({key:s,state:f},"",n);if(P){i.href=n}else{var c=Y.indexOf(K.location.key);var u=Y.slice(0,c===-1?0:c+1);u.push(a.key);Y=u;A({action:r,location:a})}}else{e(f===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=n}})};var N=function(t,n){e(!(typeof t==="object"&&t.state!==undefined&&n!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var a=f(t,n,c(x),K.location);H.confirmTransitionTo(a,r,S,function(t){if(!t){return}var n=F(a);var s=a.key,f=a.state;if(d){o.replaceState({key:s,state:f},"",n);if(P){i.replace(n)}else{var c=Y.indexOf(K.location.key);if(c!==-1){Y[c]=a.key}A({action:r,location:a})}}else{e(f===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(n)}})};var D=function(t){o.go(t)};var W=function(){return D(-1)};var X=function(){return D(1)};var _=function(e){q+=e;if(q===1){t.addEventListener(O,I);if(p){t.addEventListener(L,R)}}else if(q===0){t.removeEventListener(O,I);if(p){t.removeEventListener(L,R)}}};var z=function(t){if(t===void 0){t=""}var e=H.setPrompt(t);if(!M){_(1);M=true}return function(){if(M){M=false;_(-1)}return e()}};var G=function(t){var e=H.appendListener(t);_(1);return function(){_(-1);e()}};var K={length:o.length,action:"POP",location:V,createHref:F,push:J,replace:N,go:D,goBack:W,goForward:X,block:z,listen:G,win:t};return K};var x="hashchange";var E={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+h(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:h,decodePath:s},slash:{encodePath:s,decodePath:s}};var j=function(t,n){if(n===void 0){n={}}var r=false;var o=null;var i=0;var h=false;var p=t.location;var y=t.history;var g=P(t.navigator);var m=n.keyLength!=null?n.keyLength:6;var w=n.getUserConfirmation,k=w===void 0?b:w,O=n.hashType,L=O===void 0?"slash":O;var S=n.basename?a(s(n.basename)):"";var j=E[L],U=j.encodePath,H=j.decodePath;var A=function(){var t=p.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var I=function(t){return p.hash=t};var R=function(t){var e=p.href.indexOf("#");p.replace(p.href.slice(0,e>=0?e:0)+"#"+t)};var C=function(){var t=H(A());e(!S||u(t,S),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+S+'".');if(S){t=l(t,S)}return f(t,undefined,c(m))};var B=T();var V=function(t){Object.assign(tt,t);tt.length=y.length;B.notifyListeners(tt.location,tt.action)};var Y=function(){var t=A();var e=U(t);if(t!==e){R(e)}else{var n=C();var i=tt.location;if(!r&&d(i,n)){return}if(o===v(n)){return}o=null;q(n)}};var q=function(t){if(r){r=false;V()}else{var e="POP";B.confirmTransitionTo(t,e,k,function(n){if(n){V({action:e,location:t})}else{M(t)}})}};var M=function(t){var e=tt.location;var n=D.lastIndexOf(v(e));var o=D.lastIndexOf(v(t));if(n===-1){n=0}if(o===-1){o=0}var i=n-o;if(i){r=true;z(i)}};var F=A();var J=U(F);if(F!==J){R(J)}var N=C();var D=[v(N)];var W=function(t){return"#"+U(S+v(t))};var X=function(t,n){e(n===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var i=f(t,undefined,c(m),tt.location);B.confirmTransitionTo(i,r,k,function(t){if(!t){return}var n=v(i);var a=U(S+n);var s=A()!==a;if(s){o=n;I(a);var f=D.lastIndexOf(v(tt.location));var c=D.slice(0,f===-1?0:f+1);c.push(n);D=c;V({action:r,location:i})}else{e(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");V()}})};var _=function(t,n){e(n===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var i=f(t,undefined,c(m),tt.location);B.confirmTransitionTo(i,r,k,function(t){if(!t){return}var e=v(i);var n=U(S+e);var a=A()!==n;if(a){o=e;R(n)}var s=D.indexOf(v(tt.location));if(s!==-1){D[s]=e}V({action:r,location:i})})};var z=function(t){e(g,"Hash history go(n) causes a full page reload in this browser");y.go(t)};var G=function(){return z(-1)};var K=function(){return z(1)};var Q=function(t,e){i+=e;if(i===1){t.addEventListener(x,Y)}else if(i===0){t.removeEventListener(x,Y)}};var Z=function(e){if(e===void 0){e=""}var n=B.setPrompt(e);if(!h){Q(t,1);h=true}return function(){if(h){h=false;Q(t,-1)}return n()}};var $=function(e){var n=B.appendListener(e);Q(t,1);return function(){Q(t,-1);n()}};var tt={length:y.length,action:"POP",location:N,createHref:W,push:X,replace:_,go:z,goBack:G,goForward:K,block:Z,listen:$,win:t};return tt};var U=function(t,e){var n=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})};var H={browser:S,hash:j};var A=function(){function t(t){var e=this;n(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(e.history&&t.scrollToId&&e.historyType==="browser"){var n=e.history.win.document.getElementById(t.scrollToId);if(n){return n.scrollIntoView()}}e.scrollTo(t.scrollTopOffset||e.scrollTopOffset)};this.isServer=r(this,"isServer");this.queue=r(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=H[this.historyType](this.el.ownerDocument.defaultView);this.history.listen(function(e){e=U(e,t.root);t.location=e});this.location=U(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write(function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}})}return this.queue.write(function(){e.win.scrollTo(0,t)})};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return o(p.Provider,{state:t},o("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});return t}();t("stencil_router",A)}}});