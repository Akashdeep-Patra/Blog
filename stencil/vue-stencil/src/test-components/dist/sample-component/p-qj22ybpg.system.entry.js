System.register(["./p-052a4994.system.js","./p-60251a1a.system.js"],function(t,e){"use strict";var i,n,u;return{setters:[function(t){i=t.d;n=t.g},function(t){u=t.a}],execute:function(){var e=function(){function t(t){i(this,t);this.titleSuffix="";this.pageTitle=""}t.prototype.updateDocumentTitle=function(){var t=this.el;if(t.ownerDocument){t.ownerDocument.title=""+this.pageTitle+(this.titleSuffix||"")}};t.prototype.componentWillLoad=function(){this.updateDocumentTitle()};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{pageTitle:["updateDocumentTitle"]}},enumerable:true,configurable:true});return t}();t("stencil_route_title",e);u.injectProps(e,["titleSuffix"])}}});