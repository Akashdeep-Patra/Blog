import{d as t,h as e,f as s,g as r}from"./p-6b891a11.js";import{a as i}from"./p-252e4780.js";import"./p-7be683ab.js";import{a as o}from"./p-82a77372.js";const l=()=>((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),a=(t,e,s)=>i(t,{path:e,exact:s,strict:!0}),c=t=>"STENCIL-ROUTE"===t.tagName;class n{constructor(s){t(this,s),this.group=l(),this.subscribers=[],this.queue=e(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(c).map((s,r)=>{const i=a(t.pathname,s.url,s.exact);return i&&-1===e&&(e=r),{el:s,match:i}}),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const s=this.subscribers[this.activeIndex];this.scrollTopOffset&&(s.el.scrollTopOffset=this.scrollTopOffset),s.el.group=this.group,s.el.match=s.match,s.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return r(this)}static get watchers(){return{location:["regenerateSubscribers"]}}}o.injectProps(n,["location","routeViewsUpdated"]);export{n as stencil_route_switch};