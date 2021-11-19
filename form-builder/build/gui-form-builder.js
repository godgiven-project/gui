(function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$4=Symbol();class s$3{constructor(t,s){if(s!==e$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return t$1&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n$4=new Map,o$4=t=>{let o=n$4.get(t);return void 0===o&&n$4.set(t,o=new s$3(t,e$4)),o},r$2=t=>o$4("string"==typeof t?t:t+""),i$3=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,o)=>e+(t=>{if(t instanceof s$3)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[o+1]),t[0]);return o$4(n)},S$1=(e,s)=>{t$1?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s);}));},u$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$2,e$3,h$2,r$1;const o$3={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$3=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:o$3,reflect:!1,hasChanged:n$3};class a$2 extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u();}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const h=this[t];this[i]=e,this.requestUpdate(t,h,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(u$1(i));}else void 0!==i&&s.push(u$1(i));return s}static Πp(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1);}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0);}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t));}attributeChangedCallback(t,i,s){this.K(t,s);}Πj(t,i,s=l$3){var e,h;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:o$3.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null;}}K(t,i){var s,e,h;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:o$3.fromAttribute;this.Πh=n,this[n]=a(i,t.type),this.Πh=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$3)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq());}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo;}catch(t){Promise.reject(t);}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$();}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s);}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}Π$(){this.L=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return !0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map,a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null===(e$3=(s$2=globalThis).reactiveElementPlatformSupport)||void 0===e$3||e$3.call(s$2,{ReactiveElement:a$2}),(null!==(h$2=(r$1=globalThis).reactiveElementVersions)&&void 0!==h$2?h$2:r$1.reactiveElementVersions=[]).push("1.0.0-rc.2");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t,i$2,s$1,e$2;const o$2=globalThis.trustedTypes,l$2=o$2?o$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,n$2=`lit$${(Math.random()+"").slice(9)}$`,h$1="?"+n$2,r=`<${h$1}>`,u=document,c=(t="")=>u.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,a$1=t=>{var i;return v(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,g=/"/g,y=/^(?:script|style|textarea)$/i,b=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),T=b(1),w=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),P=new WeakMap,V=(t,i,s)=>{var e,o;const l=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=l._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;l._$litPart$=n=new C(i.insertBefore(c(),t),t,void 0,s);}return n.I(t),n},E=u.createTreeWalker(u,129,null,!1),M=(t,i)=>{const s=t.length-1,e=[];let o,h=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let l,c,d=-1,v=0;for(;v<s.length&&(u.lastIndex=v,c=u.exec(s),null!==c);)v=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(o=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=o?o:f,d=-1):void 0===c[1]?d=-2:(d=u.lastIndex-c[2].length,l=c[1],u=void 0===c[3]?p:'"'===c[3]?g:$):u===g||u===$?u=p:u===_||u===m?u=f:(u=p,o=void 0);const a=u===p&&t[i+1].startsWith("/>")?" ":"";h+=u===f?s+r:d>=0?(e.push(l),s.slice(0,d)+"$lit$"+s.slice(d)+n$2+a):s+n$2+(-2===d?(e.push(void 0),i):a);}const c=h+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==l$2?l$2.createHTML(c):c,e]};class N{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let l=0,r=0;const u=t.length-1,d=this.parts,[v,a]=M(t,i);if(this.el=N.createElement(v,s),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=E.nextNode())&&d.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n$2)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n$2),i=/([.?@])?(.*)/.exec(s);d.push({type:1,index:l,name:i[2],strings:t,ctor:"."===i[1]?I:"?"===i[1]?L:"@"===i[1]?R:H});}else d.push({type:6,index:l});}for(const i of t)e.removeAttribute(i);}if(y.test(e.tagName)){const t=e.textContent.split(n$2),i=t.length-1;if(i>0){e.textContent=o$2?o$2.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],c()),E.nextNode(),d.push({type:2,index:++l});e.append(t[i],c());}}}else if(8===e.nodeType)if(e.data===h$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=e.data.indexOf(n$2,t+1));)d.push({type:7,index:l}),t+=n$2.length-1;}l++;}}static createElement(t,i){const s=u.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,l,n,h;if(i===w)return i;let r=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(l=null==r?void 0:r.O)||void 0===l||l.call(r,!1),void 0===u?r=void 0:(r=new u(t),r.T(t,s,e)),void 0!==e?(null!==(n=(h=s).Σi)&&void 0!==n?n:h.Σi=[])[e]=r:s.Σo=r),void 0!==r&&(i=S(t,r.S(t,i.values),r,e)),i}class k{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i;}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:u).importNode(s,!0);E.currentNode=o;let l=E.nextNode(),n=0,h=0,r=e[0];for(;void 0!==r;){if(n===r.index){let i;2===r.type?i=new C(l,l.nextSibling,this,t):1===r.type?i=new r.ctor(l,r.name,r.strings,this,t):6===r.type&&(i=new z(l,this,t)),this.l.push(i),r=e[++h];}n!==(null==r?void 0:r.index)&&(l=E.nextNode(),n++);}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++;}}class C{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e;}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t);}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this.H!==A&&this.R(),this.H=A):t!==this.H&&t!==w&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a$1(t)?this.g(t):this.m(t);}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t));}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(u.createTextNode(t)),this.H=t;}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=N.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else {const t=new k(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t;}}C(t){let i=P.get(t.strings);return void 0===i&&P.set(t.strings,i=new N(t)),i}g(t){v(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new C(this.k(c()),this.k(c()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e);}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i;}}}class H{constructor(t,i,s,e,o){this.type=1,this.H=A,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(A),this.strings=s):this.H=A;}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let l=!1;if(void 0===o)t=S(this,t,i,0),l=!d(t)||t!==this.H&&t!==w,l&&(this.H=t);else {const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=S(this,e[s+n],i,n),h===w&&(h=this.H[n]),l||(l=!d(h)||h!==this.H[n]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[n+1]),this.H[n]=h;}l&&!e&&this.W(t);}W(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class I extends H{constructor(){super(...arguments),this.type=3;}W(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}W(t){t&&t!==A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class R extends H{constructor(){super(...arguments),this.type=5;}I(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===w)return;const e=this.H,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,l=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),l&&this.element.addEventListener(this.name,this,t),this.H=t;}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s;}I(t){S(this,t);}}null===(i$2=(t=globalThis).litHtmlPlatformSupport)||void 0===i$2||i$2.call(t,N,C),(null!==(s$1=(e$2=globalThis).litHtmlVersions)&&void 0!==s$1?s$1:e$2.litHtmlVersions=[]).push("2.0.0-rc.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var i$1,l$1,o$1,s,n$1,a;(null!==(i$1=(a=globalThis).litElementVersions)&&void 0!==i$1?i$1:a.litElementVersions=[]).push("3.0.0-rc.2");class h extends a$2{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0;}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const r=this.render();super.update(t),this.Φt=V(r,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1);}render(){return w}}h.finalized=!0,h._$litElement$=!0,null===(o$1=(l$1=globalThis).litElementHydrateSupport)||void 0===o$1||o$1.call(l$1,{LitElement:h}),null===(n$1=(s=globalThis).litElementPlatformSupport)||void 0===n$1||n$1.call(s,{LitElement:h});

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const n=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$1(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function e(e){return o({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const l=l=>null!=l?l:A;

    const TextField = {
        template(item, formBuilder) {
            if (formBuilder == null) {
                return A;
            }
            return T `
      <label for="${item.key}">
        ${item.label}
      </label>
      <input 
        type="text" 
        name="${item.key}" 
        placeholder=${l(item.placeholder)}
      />
    `;
        },
        value(item, formBuilder) {
            const element = formBuilder.renderRoot.querySelector(`input[name="${item.key}"]`);
            const value = element === null || element === void 0 ? void 0 : element.value;
            if (value == null) {
                return '';
            }
            return value;
        },
        validate(item, formBuilder) {
            var _a, _b, _c;
            const value = this.value(item, formBuilder);
            if (((_a = item.validate) === null || _a === void 0 ? void 0 : _a.required) === true && value === undefined) {
                formBuilder.Error = new Error(`IsRequired_${item.key}`);
                return false;
            }
            if (((_b = item.validate) === null || _b === void 0 ? void 0 : _b.required) === true && value.length <= 0) {
                formBuilder.Error = new Error(`IsRequired_${item.key}`);
                return false;
            }
            if (((_c = item.validate) === null || _c === void 0 ? void 0 : _c.pattern) != null) {
                if (value == null) {
                    formBuilder.Error = new Error(`IsRequired_${item.key}`);
                    return false;
                }
                const regex = new RegExp(item.validate.pattern);
                if (!regex.test(value)) {
                    formBuilder.Error = new Error(`IsNotValid_${item.key}`);
                    return false;
                }
            }
            return true;
        }
    };

    const Password = {
        template(item, formBuilder) {
            if (formBuilder == null) {
                return A;
            }
            return T `
      <label for="${item.key}">
        ${item.label}
      </label>
      <input
        type="password"
        name="${item.key}"
        placeholder=${l(item.placeholder)}
      />
    `;
        },
        value(item, formBuilder) {
            const element = formBuilder.renderRoot.querySelector(`input[name="${item.key}"]`);
            const value = element === null || element === void 0 ? void 0 : element.value;
            if (value == null) {
                return '';
            }
            return value;
        },
        validate(item, formBuilder) {
            var _a, _b, _c;
            const value = this.value(item, formBuilder);
            if (((_a = item.validate) === null || _a === void 0 ? void 0 : _a.required) === true && value === undefined) {
                formBuilder.Error = new Error(`IsRequired_${item.key}`);
                return false;
            }
            if (((_b = item.validate) === null || _b === void 0 ? void 0 : _b.required) === true && value.length <= 0) {
                formBuilder.Error = new Error(`IsRequired_${item.key}`);
                return false;
            }
            if (((_c = item.validate) === null || _c === void 0 ? void 0 : _c.pattern) != null) {
                if (value == null) {
                    formBuilder.Error = new Error(`IsRequired_${item.key}`);
                    return false;
                }
                const regex = new RegExp(item.validate.pattern);
                if (!regex.test(value)) {
                    formBuilder.Error = new Error(`IsNotValid_${item.key}`);
                    return false;
                }
            }
            return true;
        }
    };

    const Image = {
        template(item, formBuilder) {
            if (formBuilder == null) {
                return A;
            }
            return T `
    <img
      id="${item.key}"
      src="${l(item.value)}"
      alt="${l(item.label)}" 
    />`;
        },
        byPass() { return true; }
    };

    const Submit = {
        template(item, formBuilder) {
            if (formBuilder == null) {
                return A;
            }
            return T `
      <button
        type="button"
        name="${item.key}"
        @click=${formBuilder.sendData}
      >
        ${item.label}
      </button>
    `;
        },
        byPass() { return true; }
    };

    exports.GuiFormBuilderElementClass = class GuiFormBuilderElementClass extends h {
        constructor() {
            super();
            this.ElementList = {
                TextField,
                Password,
                Image,
                Submit
            };
            this.GridArea = false;
            this.Send = false;
            this.Resolve = {};
            this.Error = {};
            this.Loading = false;
            this.headerList = {
                'Content-Type': 'application/json'
            };
            this.sendData = this.sendData.bind(this);
        }
        sendData() {
            var _a, _b, _c;
            if (((_a = this.Data) === null || _a === void 0 ? void 0 : _a.elementList) == null) {
                return;
            }
            if (this.Loading) {
                return;
            }
            const data = {};
            const elementList = (_b = this.Data) === null || _b === void 0 ? void 0 : _b.elementList;
            for (let index = 0; index < elementList.length; index++) {
                const element = elementList[index];
                if ('byPass' in this.ElementList[element.type]) {
                    if (this.ElementList[element.type].byPass(element) === true) {
                        continue;
                    }
                }
                const value = this.ElementList[element.type].value(element, this);
                const validate = this.ElementList[element.type].validate(element, this);
                if (validate !== true) {
                    return;
                }
                data[element.key] = value !== null && value !== void 0 ? value : '';
            }
            this.Resolve = data;
            if (this.Send === false) {
                this.formAction(data);
                return;
            }
            if (this.Data.headers != null) {
                this.headerList = this.Data.headers;
            }
            let action = this.Data.action;
            const method = (_c = this.Data.method) !== null && _c !== void 0 ? _c : 'POST';
            if (method === 'GET') {
                const query = Object.keys(data).map(function (k) {
                    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
                }).join('&');
                action = `${action}?${query}`;
            }
            this.Loading = true;
            fetch(action, {
                method: method,
                headers: this.headerList,
                body: method === 'GET' ? null : JSON.stringify(data),
            })
                .then(async (response) => {
                var _a;
                if (response.status !== 200 && response.status !== 201) {
                    this.Loading = false;
                    this.Error = new Error(`ApiNotWork_${(_a = response.status) !== null && _a !== void 0 ? _a : ''}`);
                }
                else {
                    const data = await response.json();
                    this.Loading = false;
                    this.Resolve = data;
                    this.formAction(data);
                }
            })
                .catch((error) => {
                var _a;
                this.Loading = false;
                this.Error = new Error(`NetworkError_${(_a = error) !== null && _a !== void 0 ? _a : ''}`);
            });
        }
        formAction(data) {
            const action = this.getAttribute('form-action');
            this.dispatchEvent(new CustomEvent('form-action', {
                detail: data
            }));
            if (action != null) {
                (0, eval)(action);
            }
        }
        formError(data) {
            const action = this.getAttribute('form-error');
            this.dispatchEvent(new CustomEvent('form-error', {
                detail: data
            }));
            if (action != null) {
                (0, eval)(action);
            }
        }
        render() {
            var _a;
            if (((_a = this.Data) === null || _a === void 0 ? void 0 : _a.elementList) == null) {
                return A;
            }
            return T ` 
      ${this.contentTemplate()}
    `;
        }
        contentTemplate() {
            return T `${this.Data.elementList.map((item) => {
            if (item.type in this.ElementList) {
                const align = item.align != null ? 'gui-' + item.align : '';
                if (this.GridArea === true) {
                    return T `
              <div 
                style="grid-area:${item.key};" 
                class=${item.key + ' gui-form-builder ' + align}
              >
                ${this.ElementList[item.type].template(item, this)}
              </div>
            `;
                }
                else {
                    return T `
              <div
                class=${item.key + ' gui-form-builder ' + align}
              >
                ${this.ElementList[item.type].template(item, this)}
              </div>
            `;
                }
            }
            else {
                return T ``;
            }
        })}`;
        }
    };
    exports.GuiFormBuilderElementClass.styles = [
        i$3 `
      :host{
        display: grid;
        --gui-builder-height-element: 32px;
        --gui-builder-primary:        #40a9ff;
        --gui-builder-main-color:     #fff;
        --gui-builder-loading-color:  #dedede;
        --gui-builder-input-font:     1.5em;
        --gui-builder-input-padding:  0.3em;
        --gui-builder-input-margin:   0.3em;
        --gui-builder-input-border:   0.03em solid #d9d9d9;
        --gui-builder-input-text-color: rgba(0,0,0,.85);
        --gui-builder-input-text-loading-color: rgba(0,0,0,.3);
        --gui-builder-input-radius: 0.06em;
        --gui-builder-input-outline: none;
        --gui-builder-end-padding:  1em;
      }

      :host([loading]){
        pointer-events: none;
      }

      input, 
      textarea, 
      button {
        font-family: inherit;
      }

      :host([loading]) input,
      :host([loading]) input:hover{ 
        color: var(--gui-builder-input-text-loading-color);
        background: var(--gui-builder-loading-color) !important;
      }

      button,
      input[type="text"],
      input[type="password"]{
        transition: all .3s cubic-bezier(.645,.045,.355,1);
        transition-property: all;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        transition-delay: 0s;
      }
      input[type="text"],
      input[type="password"] {
        font: var( --gui-builder-input-font );
        padding: var( --gui-builder-input-padding );
        margin: var( --gui-builder-input-margin );
        border: var( --gui-builder-input-border );
        background: var( --gui-builder-main-color ) !important;
        color: var( --gui-builder-input-text-color ) ;
        border-radius: var(--gui-builder-input-radius);
        outline: var(--gui-builder-input-outline);
        box-sizing: border-box;
        width: calc( 100% - var(--gui-builder-end-padding) );
        margin:0em;
      }
      input[type="text"]:hover,
      input[type="password"]:hover {
        border-color: var(--gui-builder-primary);
      }
      input[type="text"]:focus,
      input[type="password"]:focus{
        border-color: var(--gui-builder-primary);
        box-shadow: 0 0 0 0.06em rgb(24 144 255 / 20%);
        outline: 0;
      }
      .gui-form-builder{
        padding-inline-end: var(--gui-builder-end-padding);
        padding-bottom: 1em;
      }
      button{
        outline: 0;
        height: var(--gui-builder-height-element);
        font-size: 14px;
        font-weight: 400;
        padding: 4px 15px;
        border-radius: 2px;
        background: #fff;
        line-height: 1.5715;
        display: inline-block;
        border: var(--gui-builder-input-border);
      }
      button:hover{
        border-color: var(--gui-builder-primary);
        color: var(--gui-builder-primary);
      }

      .gui-center{
        text-align: center;
      }

      .gui-left{
        text-align: left;
      }

      .gui-right{
        text-align: right;
      }
    `
    ];
    __decorate([
        e$1({ type: Object, attribute: false }),
        __metadata("design:type", Object)
    ], exports.GuiFormBuilderElementClass.prototype, "Data", void 0);
    __decorate([
        e$1({ type: Object, attribute: false }),
        __metadata("design:type", Object)
    ], exports.GuiFormBuilderElementClass.prototype, "ElementList", void 0);
    __decorate([
        e$1({ type: Boolean, reflect: true }),
        __metadata("design:type", Boolean)
    ], exports.GuiFormBuilderElementClass.prototype, "GridArea", void 0);
    __decorate([
        e$1({ type: Boolean, reflect: true }),
        __metadata("design:type", Boolean)
    ], exports.GuiFormBuilderElementClass.prototype, "Send", void 0);
    __decorate([
        e$1({ type: Object, attribute: false }),
        __metadata("design:type", Object)
    ], exports.GuiFormBuilderElementClass.prototype, "Resolve", void 0);
    __decorate([
        e$1({ type: Object, attribute: false }),
        __metadata("design:type", Object)
    ], exports.GuiFormBuilderElementClass.prototype, "Error", void 0);
    __decorate([
        e$1({ type: Boolean, reflect: true }),
        __metadata("design:type", Boolean)
    ], exports.GuiFormBuilderElementClass.prototype, "Loading", void 0);
    __decorate([
        e({ passive: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], exports.GuiFormBuilderElementClass.prototype, "sendData", null);
    exports.GuiFormBuilderElementClass = __decorate([
        n('gui-form-builder'),
        __metadata("design:paramtypes", [])
    ], exports.GuiFormBuilderElementClass);

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
