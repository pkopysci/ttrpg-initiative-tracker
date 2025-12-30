(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const I=globalThis,F=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),Y=new WeakMap;let ct=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}};const $t=r=>new ct(typeof r=="string"?r:r+"",void 0,V),ht=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1]),r[0]);return new ct(e,r,V)},vt=(r,t)=>{if(F)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=I.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},tt=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return $t(e)})(r):r;const{is:yt,defineProperty:_t,getOwnPropertyDescriptor:gt,getOwnPropertyNames:bt,getOwnPropertySymbols:At,getPrototypeOf:xt}=Object,L=globalThis,et=L.trustedTypes,wt=et?et.emptyScript:"",Et=L.reactiveElementPolyfillSupport,q=(r,t)=>r,Z={toAttribute(r,t){switch(t){case Boolean:r=r?wt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},W=(r,t)=>!yt(r,t),st={attribute:!0,type:String,converter:Z,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),L.litPropertyMetadata??=new WeakMap;let T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&_t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=gt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){const e=this.properties,s=[...bt(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(tt(i))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:Z).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Z;this._$Em=i;const l=n.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??W)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[q("elementProperties")]=new Map,T[q("finalized")]=new Map,Et?.({ReactiveElement:T}),(L.reactiveElementVersions??=[]).push("2.1.1");const K=globalThis,R=K.trustedTypes,it=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,dt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+_,Tt=`<${pt}>`,E=document,C=()=>E.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",J=Array.isArray,St=r=>J(r)||typeof r?.[Symbol.iterator]=="function",z=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,A=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,ut=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),v=Pt(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),lt=new WeakMap,x=E.createTreeWalker(E,129);function mt(r,t){if(!J(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Mt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=M;for(let l=0;l<e;l++){const a=r[l];let d,p,c=-1,$=0;for(;$<a.length&&(n.lastIndex=$,p=n.exec(a),p!==null);)$=n.lastIndex,n===M?p[1]==="!--"?n=rt:p[1]!==void 0?n=ot:p[2]!==void 0?(ut.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=A):p[3]!==void 0&&(n=A):n===A?p[0]===">"?(n=i??M,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?A:p[3]==='"'?at:nt):n===at||n===nt?n=A:n===rt||n===ot?n=M:(n=A,i=void 0);const y=n===A&&r[l+1].startsWith("/>")?" ":"";o+=n===M?a+Tt:c>=0?(s.push(d),a.slice(0,c)+dt+a.slice(c)+_+y):a+_+(c===-2?l:y)}return[mt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[d,p]=Mt(t,e);if(this.el=N.createElement(d,s),x.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=x.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(dt)){const $=p[n++],y=i.getAttribute(c).split(_),k=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:k[2],strings:y,ctor:k[1]==="."?Ct:k[1]==="?"?Ot:k[1]==="@"?Nt:j}),i.removeAttribute(c)}else c.startsWith(_)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(ut.test(i.tagName)){const c=i.textContent.split(_),$=c.length-1;if($>0){i.textContent=R?R.emptyScript:"";for(let y=0;y<$;y++)i.append(c[y],C()),x.nextNode(),a.push({type:2,index:++o});i.append(c[$],C())}}}else if(i.nodeType===8)if(i.data===pt)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(_,c+1))!==-1;)a.push({type:7,index:o}),c+=_.length-1}o++}}static createElement(t,e){const s=E.createElement("template");return s.innerHTML=t,s}}function P(r,t,e=r,s){if(t===S)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=O(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=P(r,i._$AS(r,t.values),i,s)),t}class qt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??E).importNode(e,!0);x.currentNode=i;let o=x.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new U(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new Ht(o,this,t)),this._$AV.push(d),a=s[++l]}n!==a?.index&&(o=x.nextNode(),n++)}return x.currentNode=E,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),O(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):St(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(mt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new qt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new N(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new U(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const l=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=P(this,l[s+a],e,a),d===S&&(d=this._$AH[a]),n||=!O(d)||d!==this._$AH[a],d===h?t=h:t!==h&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Ot extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Nt extends j{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??h)===S)return;const s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const Ut=K.litHtmlPolyfillSupport;Ut?.(N,U),(K.litHtmlVersions??=[]).push("3.3.1");const kt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new U(t.insertBefore(C(),o),o,void 0,e??{})}return i._$AI(r),i};const G=globalThis;class w extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}}w._$litElement$=!0,w.finalized=!0,G.litElementHydrateSupport?.({LitElement:w});const It=G.litElementPolyfillSupport;It?.({LitElement:w});(G.litElementVersions??=[]).push("4.2.1");const Q=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};const Zt={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:W},Rt=(r=Zt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function u(r){return(t,e)=>typeof e=="object"?Rt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}const Lt=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function D(r,t){return(e,s,i)=>{const o=n=>n.renderRoot?.querySelector(r)??null;return Lt(e,s,{get(){return o(this)}})}}const ft=ht`
    :host {
      /* Light‑mode defaults */
      --primary-background-color: #ffffff;
      --secondary-background-color: #c1c2c2;
      --card-background-color: #f0f0f0;
      --primary-text-color: #2e2828;
      --secondary-text-color: #5f5f5f;
      --divider-color: #ced0da;
      --button-color-idle: #009ac7;
      --button-color-focus: #005f7c;
      --button-color-text: #f0f0f0;

      font-family: sans-serif;
    }

    /* Dark‑mode overrides */
    :host([darkmode]) {
      --primary-background-color: #000000;
      --secondary-background-color: #313131;
      --card-background-color: #181717;
      --primary-text-color: #FFFFFF;
      --secondary-text-color: #909495;
      --divider-color: #3f3f3f;

      font-family: sans-serif;
    }

    h1 {
      font-size: 1.5rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1em;
      border: none;
      margin: 0;
      padding: 10px;
      border-radius: 20px;
      color: var(--button-color-text);
      background-color: var(--button-color-idle);
    }
    button:hover {
      background-color: var(--button-color-focus);
      cursor: pointer;
    }

    input {
      border: solid 1px var(--divider-color);
      background-color: var(--secondary-background-color);
      font-size: 1rem;
      color: var(--primary-text-color);
    }

    .init-card {
      display:flex;
      gap: 20px;
      flex-direction: column;
      background-color: var(--card-background-color);
      color: var(--primary-text-color);
      padding: 20px;
      border: solid 1px var(--divider-color);
      border-radius: 10px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .header {
      display: flex;
      justify-content: space-between
    }

    .title-span {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .round-counter {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: var(--secondary-background-color);
      border-radius: 10px;
    }

    .empty-notice {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border: solid 1px var(--divider-color);
      border-radius: 10px;
      color: var(--secondary-text-color);
    }

    .table-header {
      font-weight: bold;
    }
    .row {
      display: grid;
      grid-template-columns: 10% 40% 20% 30%;
      padding: 10px 0 ;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid var(--divider-color);
    }
    .row input {
      padding: 10px;
    }
    .row button {
      width: 50px;
      height: 50px;
      background: none;
      color: var(--button-color-idle);
    }

    .add-turn-section {
      display: flex;
      gap: 10px;
      justify-content: space-between;
    }
    .add-turn-section input {
      flex-grow: 1;
    }

    .round-controls {
      display: flex;
      flex-direction: column;
    }
    .round-controls span {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      gap: 20px;
    }
    .round-controls button {
      flex-grow: 1;
      max-width: 300px;
    }

    @media(max-width: 530px) {
      .add-turn-section {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
      }
      .add-turn-section input {
        width: 75%;
        height: 35px;
      }
      .add-turn-section button {
        width: 50%;
      }
    }
  `,B={swords:"M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z",trashcan:"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z",error:"M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",left:"M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z",right:"m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z",sort:"M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z",reset:"M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z",save:"M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z",edit:"M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z",check:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",cancel:"m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"};function jt(r){return B.hasOwnProperty(r)?B[r]:B.error}var Dt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,X=(r,t,e,s)=>{for(var i=s>1?void 0:s?zt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Dt(t,e,i),i};let H=class extends w{constructor(){super(...arguments),this.icon="",this.size=24}render(){return v`
          <svg xmlns="http://www.w3.org/2000/svg" height="${this.size}px" viewBox="0 -960 960 960" width="${this.size}px">
            <path d=${jt(this.icon)}/>
          </svg>
      `}};H.styles=ht`
    host {
      display: inline-block;
      vertical-align: middle;
    }
    svg {
      fill: currentColor; /* inherits text colour */
    }
    `;X([u({type:String})],H.prototype,"icon",2);X([u({type:Number})],H.prototype,"size",2);H=X([Q("mat-icon")],H);var Bt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,g=(r,t,e,s)=>{for(var i=s>1?void 0:s?Ft(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Bt(t,e,i),i};let m=class extends w{constructor(){super(...arguments),this.activeTurn=!1,this.name="",this.roll=0,this.index=0,this.inEditMode=!1,this.onDelete=()=>{this.dispatchEvent(new CustomEvent("onDelete",{bubbles:!0,composed:!0,detail:{index:this.index}}))},this.enterEditMode=()=>{this.inEditMode=!0},this.cancelEditMode=()=>{this.inEditMode=!1},this.confirmEdit=()=>{this.inEditMode=!1,!(!this.nameInput||!this.rollInput)&&this.dispatchEvent(new CustomEvent("onEdit",{bubbles:!0,composed:!0,detail:{index:this.index,name:this.nameInput.value,roll:Number(this.rollInput.value)}}))}}render(){return this.inEditMode?v`
            <div class="row">
                <span>
                    ${this.activeTurn?v`<mat-icon icon="swords" size=20></mat-icon>`:h}
                </span>
                <input id='name-input' type="text" value=${this.name} />
                <input id='roll-input'  type="number" value=${this.roll} />
                <span style="display: flex; gap: 20;">
                    <button @click=${this.confirmEdit}>
                        <mat-icon icon="check"></mat-icon>
                    </button>
                    <button @click=${this.cancelEditMode}>
                    <mat-icon icon="cancel"></mat-icon>
                    </button>
                </span>
            </div>
            `:v`
            <div class="row">
                <span>
                ${this.activeTurn?v`<mat-icon icon="swords" size=20></mat-icon>`:h}
                </span>
                <span>${this.name}</span>
                <span>${this.roll}</span>
                <span style="display: flex; gap: 20;">
                    <button @click=${this.enterEditMode}>
                        <mat-icon icon="edit"></mat-icon>
                    </button>
                    <button @click=${this.onDelete}>
                    <mat-icon icon="trashcan" size=20></mat-icon>
                    </button>
                </span>
            </div>
            `}};m.styles=ft;g([u({type:Boolean})],m.prototype,"activeTurn",2);g([u({type:String})],m.prototype,"name",2);g([u({type:Number})],m.prototype,"roll",2);g([u({type:Number})],m.prototype,"index",2);g([u({type:Boolean,attribute:!1})],m.prototype,"inEditMode",2);g([D("#name-input")],m.prototype,"nameInput",2);g([D("#roll-input")],m.prototype,"rollInput",2);m=g([Q("table-row")],m);var Vt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,b=(r,t,e,s)=>{for(var i=s>1?void 0:s?Wt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Vt(t,e,i),i};let f=class extends w{constructor(){super(...arguments),this._defaultItems=[],this.darkMode=!0,this.title="Initiative Order",this.round=1,this.items=[],this.currentTurn=0,this.sortList=()=>{this.items=[...this.items].sort((r,t)=>t.roll-r.roll)},this.resetList=()=>{this.items=[...this._defaultItems],this.round=1},this.setPreviousTurn=()=>{let r=this.currentTurn-1;r<0&&(this.round=this.round===1?1:this.round-1,r=this.items.length-1),this.currentTurn=r},this.setNextTurn=()=>{let r=this.currentTurn+1;r>=this.items.length&&(this.round++,r=0),this.currentTurn=r},this.removeItem=r=>{this.items=this.items.filter(t=>this.items.indexOf(t)!==r.detail.index)},this.addItem=()=>{if(!this.nameInput||!this.rollInput)return;const r=this.nameInput.value.trim(),t=this.rollInput.value.trim();if(!r||!t)return;const e=Number(t);if(Number.isNaN(e))return;const s={name:r,roll:e,editing:!1};this.items=[...this.items,s],this.nameInput.value="",this.rollInput.value=""},this.editItem=r=>{let t=r.detail.index,e=r.detail.name,s=r.detail.roll;if(t<0||t>=this.items.length||!e||s<0)return;const i={...this.items[t],name:e,roll:s},o=[...this.items];o[t]=i,this.items=o},this.showTable=()=>this.items.length===0?v`
        <div class="empty-notice">
          <p>So quiet...</p>
        </div>
      `:v`
      <div class='table'>
          <div class="table-header row">
            <span></span>
            <span>Name</span>
            <span>Roll</span>
            <span></span>
          </div>

          ${this.items.map((r,t)=>v`
              <table-row
              name=${r.name}
              roll=${r.roll}
              index=${t}
              ?activeturn=${this.currentTurn===t}
              @onDelete=${this.removeItem}
              @onEdit=${this.editItem}></table-row>
          `)}
        </div>
      `}set hass(r){this._hass=r}setConfig(r){if(!r){console.warn("[ttrpg-initiative-tracker] No config supplied.");return}r.items&&(this._defaultItems=r.items.map(i=>({name:i.name,roll:i.roll})),this.items=[...this._defaultItems]);const t=typeof r.darkMode=="boolean"?r.darkMode:void 0,e=r.options&&typeof r.options.darkMode=="boolean"?r.options.darkMode:void 0,s=t??e??this.darkMode;this.darkMode=s}render(){return v`
    <div class="init-card">
      <div class="header">
        <span class="title-span">
          <mat-icon icon="swords" size=25></mat-icon>
          <h1>${this.title}</h1>
        </span>
        <span class="round-counter">
          Round: ${this.round}
        </span>
      </div>

      <div class='content'>
        
        ${this.showTable()}

        <div class="add-turn-section">
          <input type="text" id="new-name" placeholder="Name" />
          <input type="number" id="new-roll" placeholder="Roll" />
          <button @click=${this.addItem}>
            <mat-icon icon="add"></mat-icon>
          </button>
        </div>

        <div class="round-controls">
          <span>
            <button @click=${this.setPreviousTurn}>
              <mat-icon icon="left"></mat-icon>
            </button>
            <button @click=${this.setNextTurn}>
              <mat-icon icon="right"></mat-icon>
            </button>
          </span>
          <span>
            <button @click=${this.sortList}>
              <mat-icon icon="sort"></mat-icon>
              Sort
            </button>
            <button @click=${this.resetList}>
              <mat-icon icon="reset"></mat-icon>
              Reset
            </button>
          </span>
        </div>

      </div>
    </div>
    `}};f.styles=ft;b([u({type:Boolean,reflect:!0})],f.prototype,"darkMode",2);b([u({type:String})],f.prototype,"title",2);b([u({type:Number})],f.prototype,"round",2);b([u({type:Array})],f.prototype,"items",2);b([u({type:Number})],f.prototype,"currentTurn",2);b([D("#new-name")],f.prototype,"nameInput",2);b([D("#new-roll")],f.prototype,"rollInput",2);f=b([Q("ttrpg-initiative-tracker")],f);
