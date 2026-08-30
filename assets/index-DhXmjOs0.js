var y0=Object.defineProperty;var T0=(n,t,e)=>t in n?y0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var _=(n,t,e)=>T0(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const I0=()=>{};var jc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},w0=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],u=n[e++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},e2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,u=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,p=i>>2,g=(i&3)<<4|u>>4;let y=(u&15)<<2|h>>6,C=h&63;c||(C=64,o||(y=64)),r.push(e[p],e[g],e[y],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(t2(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):w0(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const h=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||u==null||h==null||g==null)throw new A0;const y=i<<2|u>>4;if(r.push(y),h!==64){const C=u<<4&240|h>>2;if(r.push(C),g!==64){const O=h<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class A0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const v0=function(n){const t=t2(n);return e2.encodeByteArray(t,!0)},Yi=function(n){return v0(n).replace(/\./g,"")},n2=function(n){try{return e2.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=()=>R0().__FIREBASE_DEFAULTS__,C0=()=>{if(typeof process>"u"||typeof jc>"u")return;const n=jc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},P0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&n2(n[1]);return t&&JSON.parse(t)},wo=()=>{try{return I0()||S0()||C0()||P0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},r2=n=>{var t,e;return(e=(t=wo())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},b0=n=>{const t=r2(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},s2=()=>{var n;return(n=wo())==null?void 0:n.config},i2=n=>{var t;return(t=wo())==null?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Yi(JSON.stringify(e)),Yi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function k0(){var t;const n=(t=wo())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function D0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function x0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function L0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M0(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function F0(){return!k0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function o2(){try{return typeof indexedDB=="object"}catch{return!1}}function a2(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(e){t(e)}})}function U0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="FirebaseError";class Ue extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=B0,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?$0(i,r):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new Ue(s,u,r)}}function $0(n,t){return n.replace(q0,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const q0=/\{\$([^}]+)}/g;function H0(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Xn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(Gc(i)&&Gc(o)){if(!Xn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Gc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j0(n,t){const e=new G0(n,t);return e.subscribe.bind(e)}class G0{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");z0(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=va),s.error===void 0&&(s.error=va),s.complete===void 0&&(s.complete=va);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z0(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function va(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function u2(n){return(await fetch(n,{credentials:"include"})).ok}class xe{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new N0;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Y0(t))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Hn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Hn){return this.instances.has(t)}getOptions(t=Hn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&o.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K0(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Hn){return this.component?this.component.multipleInstances?t:Hn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K0(n){return n===Hn?void 0:n}function Y0(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new W0(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(st||(st={}));const X0={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},J0=st.INFO,Z0={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},tp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Z0[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ao{constructor(t){this.name=t,this._logLevel=J0,this._logHandler=tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in st))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?X0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...t),this._logHandler(this,st.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...t),this._logHandler(this,st.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,st.INFO,...t),this._logHandler(this,st.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,st.WARN,...t),this._logHandler(this,st.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...t),this._logHandler(this,st.ERROR,...t)}}const ep=(n,t)=>t.some(e=>n instanceof e);let zc,Wc;function np(){return zc||(zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rp(){return Wc||(Wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c2=new WeakMap,Wa=new WeakMap,l2=new WeakMap,Ra=new WeakMap,C1=new WeakMap;function sp(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(mn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&c2.set(e,n)}).catch(()=>{}),C1.set(t,n),t}function ip(n){if(Wa.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Wa.set(n,t)}let Ka={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Wa.get(n);if(t==="objectStoreNames")return n.objectStoreNames||l2.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return mn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function op(n){Ka=n(Ka)}function ap(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Sa(this),t,...e);return l2.set(r,t.sort?t.sort():[t]),mn(r)}:rp().includes(n)?function(...t){return n.apply(Sa(this),t),mn(c2.get(this))}:function(...t){return mn(n.apply(Sa(this),t))}}function up(n){return typeof n=="function"?ap(n):(n instanceof IDBTransaction&&ip(n),ep(n,np())?new Proxy(n,Ka):n)}function mn(n){if(n instanceof IDBRequest)return sp(n);if(Ra.has(n))return Ra.get(n);const t=up(n);return t!==n&&(Ra.set(n,t),C1.set(t,n)),t}const Sa=n=>C1.get(n);function h2(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),u=mn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(mn(o.result),c.oldVersion,c.newVersion,mn(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const cp=["get","getKey","getAll","getAllKeys","count"],lp=["put","add","delete","clear"],Ca=new Map;function Kc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ca.get(t))return Ca.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=lp.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cp.includes(e)))return;const i=async function(o,...u){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(u.shift())),(await Promise.all([h[e](...u),s&&c.done]))[0]};return Ca.set(t,i),i}op(n=>({...n,get:(t,e,r)=>Kc(t,e)||n.get(t,e,r),has:(t,e)=>!!Kc(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(fp(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function fp(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ya="@firebase/app",Yc="0.15.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new Ao("@firebase/app"),dp="@firebase/app-compat",pp="@firebase/analytics-compat",gp="@firebase/analytics",mp="@firebase/app-check-compat",_p="@firebase/app-check",Ep="@firebase/auth",yp="@firebase/auth-compat",Tp="@firebase/database",Ip="@firebase/data-connect",wp="@firebase/database-compat",Ap="@firebase/functions",vp="@firebase/functions-compat",Rp="@firebase/installations",Sp="@firebase/installations-compat",Cp="@firebase/messaging",Pp="@firebase/messaging-compat",bp="@firebase/performance",Np="@firebase/performance-compat",Op="@firebase/remote-config",Vp="@firebase/remote-config-compat",kp="@firebase/storage",Dp="@firebase/storage-compat",xp="@firebase/firestore",Lp="@firebase/ai",Mp="@firebase/firestore-compat",Fp="firebase",Up="12.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]",Bp={[Ya]:"fire-core",[dp]:"fire-core-compat",[gp]:"fire-analytics",[pp]:"fire-analytics-compat",[_p]:"fire-app-check",[mp]:"fire-app-check-compat",[Ep]:"fire-auth",[yp]:"fire-auth-compat",[Tp]:"fire-rtdb",[Ip]:"fire-data-connect",[wp]:"fire-rtdb-compat",[Ap]:"fire-fn",[vp]:"fire-fn-compat",[Rp]:"fire-iid",[Sp]:"fire-iid-compat",[Cp]:"fire-fcm",[Pp]:"fire-fcm-compat",[bp]:"fire-perf",[Np]:"fire-perf-compat",[Op]:"fire-rc",[Vp]:"fire-rc-compat",[kp]:"fire-gcs",[Dp]:"fire-gcs-compat",[xp]:"fire-fst",[Mp]:"fire-fst-compat",[Lp]:"fire-vertex","fire-js":"fire-js",[Fp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Map,$p=new Map,Xa=new Map;function Qc(n,t){try{n.container.addComponent(t)}catch(e){ze.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function We(n){const t=n.name;if(Xa.has(t))return ze.debug(`There were multiple attempts to register component ${t}.`),!1;Xa.set(t,n);for(const e of Qi.values())Qc(e,n);for(const e of $p.values())Qc(e,n);return!0}function Lr(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ce(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new sr("app","Firebase",qp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=Up;function f2(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Qa,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(e||(e=s2()),!e)throw _n.create("no-options");const i=Qi.get(s);if(i){if(Xn(e,i.options)&&Xn(r,i.config))return i;throw _n.create("duplicate-app",{appName:s})}const o=new Q0(s);for(const c of Xa.values())o.addComponent(c);const u=new Hp(e,r,o);return Qi.set(s,u),u}function P1(n=Qa){const t=Qi.get(n);if(!t&&n===Qa&&s2())return f2();if(!t)throw _n.create("no-app",{appName:n});return t}function Ee(n,t,e){let r=Bp[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ze.warn(o.join(" "));return}We(new xe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="firebase-heartbeat-database",Gp=1,bs="firebase-heartbeat-store";let Pa=null;function d2(){return Pa||(Pa=h2(jp,Gp,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(bs)}catch(e){console.warn(e)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),Pa}async function zp(n){try{const e=(await d2()).transaction(bs),r=await e.objectStore(bs).get(p2(n));return await e.done,r}catch(t){if(t instanceof Ue)ze.warn(t.message);else{const e=_n.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ze.warn(e.message)}}}async function Xc(n,t){try{const r=(await d2()).transaction(bs,"readwrite");await r.objectStore(bs).put(t,p2(n)),await r.done}catch(e){if(e instanceof Ue)ze.warn(e.message);else{const r=_n.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ze.warn(r.message)}}}function p2(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=1024,Kp=30;class Yp{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xp(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jc();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Kp){const o=Jp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ze.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jc(),{heartbeatsToSend:r,unsentEntries:s}=Qp(this._heartbeatsCache.heartbeats),i=Yi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ze.warn(e),""}}}function Jc(){return new Date().toISOString().substring(0,10)}function Qp(n,t=Wp){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zc(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Zc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Xp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return o2()?a2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await zp(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xc(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Zc(n){return Yi(JSON.stringify({version:2,heartbeats:n})).length}function Jp(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(n){We(new xe("platform-logger",t=>new hp(t),"PRIVATE")),We(new xe("heartbeat",t=>new Yp(t),"PRIVATE")),Ee(Ya,Yc,n),Ee(Ya,Yc,"esm2020"),Ee("fire-js","")}Zp("");var t7="firebase",e7="12.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(t7,e7,"app");function g2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n7=g2,m2=new sr("auth","Firebase",g2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Ao("@firebase/auth");function r7(n,...t){Xi.logLevel<=st.WARN&&Xi.warn(`Auth (${Mr}): ${n}`,...t)}function Mi(n,...t){Xi.logLevel<=st.ERROR&&Xi.error(`Auth (${Mr}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,...t){throw b1(n,...t)}function be(n,...t){return b1(n,...t)}function _2(n,t,e){const r={...n7(),[t]:e};return new sr("auth","Firebase",r).create(t,{appName:n.name})}function Wn(n){return _2(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b1(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return m2.create(n,...t)}function Q(n,t,...e){if(!n)throw b1(t,...e)}function $e(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Mi(t),new Error(t)}function Ye(n,t){n||$e(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function s7(){return tl()==="http:"||tl()==="https:"}function tl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i7(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s7()||x0()||"connection"in navigator)?navigator.onLine:!0}function o7(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e){this.shortDelay=t,this.longDelay=e,Ye(e>t,"Short delay should be less than long delay!"),this.isMobile=V0()||L0()}get(){return i7()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n,t){Ye(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a7={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u7=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],c7=new Xs(3e4,6e4);function O1(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function Fr(n,t,e,r,s={}){return y2(n,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const u=Ys({...o,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:t,headers:c,...i};return D0()||(h.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Qs(n.emulatorConfig.host)&&(h.credentials="include"),E2.fetch()(await T2(n,n.config.apiHost,e,u),h)})}async function y2(n,t,e){n._canInitEmulator=!1;const r={...a7,...t};try{const s=new h7(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ci(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const u=i.ok?o.errorMessage:o.error.message,[c,h]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ci(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ci(n,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _2(n,p,h);Ke(n,p)}}catch(s){if(s instanceof Ue)throw s;Ke(n,"network-request-failed",{message:String(s)})}}async function l7(n,t,e,r,s={}){const i=await Fr(n,t,e,r,s);return"mfaPendingCredential"in i&&Ke(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function T2(n,t,e,r){const s=`${t}${e}?${r}`,i=n,o=i.config.emulator?N1(n.config,s):`${n.config.apiScheme}://${s}`;return u7.includes(e)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class h7{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(be(this.auth,"network-request-failed")),c7.get())})}}function Ci(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=be(n,t,r);return s.customData._tokenResponse=e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f7(n,t){return Fr(n,"POST","/v1/accounts:delete",t)}async function Ji(n,t){return Fr(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function d7(n,t=!1){const e=Wt(n),r=await e.getIdToken(t),s=V1(r);Q(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ms(ba(s.auth_time)),issuedAtTime:ms(ba(s.iat)),expirationTime:ms(ba(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ba(n){return Number(n)*1e3}function V1(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const s=n2(e);return s?JSON.parse(s):(Mi("Failed to decode base64 JWT payload"),null)}catch(s){return Mi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function el(n){const t=V1(n);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ue&&p7(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function p7({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g7{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(n){var g;const t=n.auth,e=await n.getIdToken(),r=await Ns(n,Ji(t,{idToken:e}));Q(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?I2(s.providerUserInfo):[],o=_7(n.providerData,i),u=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Za(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function m7(n){const t=Wt(n);await Zi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _7(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function I2(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E7(n,t){const e=await y2(n,{},async()=>{const r=Ys({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await T2(n,s,"/v1/token",`key=${i}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:u,body:r};return n.emulatorConfig&&Qs(n.emulatorConfig.host)&&(c.credentials="include"),E2.fetch()(o,c)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function y7(n,t){return Fr(n,"POST","/v2/accounts:revokeToken",O1(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):el(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const e=el(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await E7(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,o=new Er;return r&&(Q(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return $e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n,t){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class we{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new g7(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Za(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ns(this,this.stsTokenManager.getToken(this.auth,t));return Q(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return d7(this,t)}reload(){return m7(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new we({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Zi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ce(this.auth.app))return Promise.reject(Wn(this.auth));const t=await this.getIdToken();return await Ns(this,f7(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,i=e.phoneNumber??void 0,o=e.photoURL??void 0,u=e.tenantId??void 0,c=e._redirectEventId??void 0,h=e.createdAt??void 0,p=e.lastLoginAt??void 0,{uid:g,emailVerified:y,isAnonymous:C,providerData:O,stsTokenManager:M}=e;Q(g&&M,t,"internal-error");const U=Er.fromJSON(this.name,M);Q(typeof g=="string",t,"internal-error"),an(r,t.name),an(s,t.name),Q(typeof y=="boolean",t,"internal-error"),Q(typeof C=="boolean",t,"internal-error"),an(i,t.name),an(o,t.name),an(u,t.name),an(c,t.name),an(h,t.name),an(p,t.name);const X=new we({uid:g,auth:t,email:s,emailVerified:y,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:i,tenantId:u,stsTokenManager:U,createdAt:h,lastLoginAt:p});return O&&Array.isArray(O)&&(X.providerData=O.map(ut=>({...ut}))),c&&(X._redirectEventId=c),X}static async _fromIdTokenResponse(t,e,r=!1){const s=new Er;s.updateFromServerResponse(e);const i=new we({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Zi(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?I2(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new Er;u.updateFromIdToken(r);const c=new we({uid:s.localId,auth:t,stsTokenManager:u,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Za(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map;function qe(n){Ye(n instanceof Function,"Expected a class definition");let t=nl.get(n);return t?(Ye(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,nl.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}w2.type="NONE";const rl=w2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n,t,e){return`firebase:${n}:${t}:${e}`}class yr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fi("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Ji(this.auth,{idToken:t}).catch(()=>{});return e?we._fromGetAccountInfoResponse(this.auth,e,t):null}return we._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new yr(qe(rl),t,r);const s=(await Promise.all(e.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||qe(rl);const o=Fi(r,t.config.apiKey,t.name);let u=null;for(const h of e)try{const p=await h._get(o);if(p){let g;if(typeof p=="string"){const y=await Ji(t,{idToken:p}).catch(()=>{});if(!y)break;g=await we._fromGetAccountInfoResponse(t,y,p)}else g=we._fromJSON(t,p);h!==i&&(u=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yr(i,t,r):(i=c[0],u&&await i._set(o,u.toJSON()),await Promise.all(e.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new yr(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(S2(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(A2(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(P2(t))return"Blackberry";if(b2(t))return"Webos";if(v2(t))return"Safari";if((t.includes("chrome/")||R2(t))&&!t.includes("edge/"))return"Chrome";if(C2(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function A2(n=zt()){return/firefox\//i.test(n)}function v2(n=zt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function R2(n=zt()){return/crios\//i.test(n)}function S2(n=zt()){return/iemobile/i.test(n)}function C2(n=zt()){return/android/i.test(n)}function P2(n=zt()){return/blackberry/i.test(n)}function b2(n=zt()){return/webos/i.test(n)}function k1(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function T7(n=zt()){var t;return k1(n)&&!!((t=window.navigator)!=null&&t.standalone)}function I7(){return M0()&&document.documentMode===10}function N2(n=zt()){return k1(n)||C2(n)||b2(n)||P2(n)||/windows phone/i.test(n)||S2(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(n,t=[]){let e;switch(n){case"Browser":e=sl(zt());break;case"Worker":e=`${sl(zt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w7{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((o,u)=>{try{const c=t(i);o(c)}catch(c){u(c)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A7(n,t={}){return Fr(n,"GET","/v2/passwordPolicy",O1(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v7=6;class R7{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??v7,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S7{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new il(this),this.idTokenSubscription=new il(this),this.beforeStateQueue=new w7(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=qe(e)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await yr.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ji(this,{idToken:t}),r=await we._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Ce(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,u=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===u)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Zi(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=o7()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ce(this.app))return Promise.reject(Wn(this));const e=t?Wt(t):null;return e&&Q(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ce(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ce(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await A7(this),e=new R7(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new sr("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await y7(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&qe(t)||this._popupRedirectResolver;Q(e,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[qe(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(u,this,"internal-error"),u.then(()=>{o||i(this.currentUser)}),typeof e=="function"){const c=t.addObserver(e,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(e);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=O2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Ce(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&r7(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function D1(n){return Wt(n)}class il{constructor(t){this.auth=t,this.observer=null,this.addObserver=j0(e=>this.observer=e)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x1={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function C7(n){x1=n}function P7(n){return x1.loadJS(n)}function b7(){return x1.gapiScript}function N7(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O7(n,t){const e=Lr(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(Xn(i,t??{}))return s;Ke(s,"already-initialized")}return e.initialize({options:t})}function V7(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(qe);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function k7(n,t,e){const r=D1(n);Q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=V2(t),{host:o,port:u}=D7(t),c=u===null?"":`:${u}`,h={url:`${i}//${o}${c}/`},p=Object.freeze({host:o,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Xn(h,r.config.emulator)&&Xn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Qs(o)?u2(`${i}//${o}${c}`):x7()}function V2(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function D7(n){const t=V2(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ol(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ol(o)}}}function ol(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function x7(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return $e("not implemented")}_getIdTokenResponse(t){return $e("not implemented")}_linkToIdToken(t,e){return $e("not implemented")}_getReauthenticationResolver(t){return $e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(n,t){return l7(n,"POST","/v1/accounts:signInWithIdp",O1(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L7="http://localhost";class Jn extends k2{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ke("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=e;if(!r||!s)return null;const o=new Jn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Tr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Tr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Tr(t,e)}buildRequest(){const t={requestUri:L7,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ys(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends D2{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Js{constructor(){super("facebook.com")}static credential(t){return Jn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cn.credential(t.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Jn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return ln.credential(e,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Js{constructor(){super("github.com")}static credential(t){return Jn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hn.credential(t.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Js{constructor(){super("twitter.com")}static credential(t,e){return Jn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return fn.credentialFromTaggedObject(t)}static credentialFromError(t){return fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return fn.credential(e,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await we._fromIdTokenResponse(t,r,s),o=al(r);return new Sr({user:i,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=al(r);return new Sr({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function al(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Ue{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,to.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new to(t,e,r,s)}}function x2(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?to._fromErrorAndOperation(n,i,t,r):i})}async function M7(n,t,e=!1){const r=await Ns(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Sr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F7(n,t,e=!1){const{auth:r}=n;if(Ce(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await Ns(n,x2(r,s,t,n),e);Q(i.idToken,r,"internal-error");const o=V1(i.idToken);Q(o,r,"internal-error");const{sub:u}=o;return Q(n.uid===u,r,"user-mismatch"),Sr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U7(n,t,e=!1){if(Ce(n.app))return Promise.reject(Wn(n));const r="signIn",s=await x2(n,r,t),i=await Sr._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}function B7(n,t,e,r){return Wt(n).onIdTokenChanged(t,e,r)}function $7(n,t,e){return Wt(n).beforeAuthStateChanged(t,e)}const eo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(eo,"1"),this.storage.removeItem(eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q7=1e3,H7=10;class M2 extends L2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=N2(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,u,c)=>{this.notifyListeners(o,c)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);I7()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,H7):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},q7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}M2.type="LOCAL";const j7=M2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2 extends L2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}F2.type="SESSION";const U2=F2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G7(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new vo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(o).map(async h=>h(e.origin,i)),c=await G7(u);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z7{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((u,c)=>{const h=L1("",20);s.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(y.data.response);break;default:clearTimeout(p),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return window}function W7(n){Ne().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(){return typeof Ne().WorkerGlobalScope<"u"&&typeof Ne().importScripts=="function"}async function K7(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y7(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Q7(){return B2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="firebaseLocalStorageDb",X7=1,no="firebaseLocalStorage",q2="fbase_key";class Zs{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ro(n,t){return n.transaction([no],t?"readwrite":"readonly").objectStore(no)}function J7(){const n=indexedDB.deleteDatabase($2);return new Zs(n).toPromise()}function H2(){const n=indexedDB.open($2,X7);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(no,{keyPath:q2})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(no)?t(r):(r.close(),await J7(),t(await H2()))})})}async function ul(n,t,e){const r=Ro(n,!0).put({[q2]:t,value:e});return new Zs(r).toPromise()}async function Z7(n,t){const e=Ro(n,!1).get(t),r=await new Zs(e).toPromise();return r===void 0?null:r.value}function cl(n,t){const e=Ro(n,!0).delete(t);return new Zs(e).toPromise()}const t4=800,e4=3;class j2{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=H2(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>e4)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return B2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vo._getInstance(Q7()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await K7(),!this.activeServiceWorker)return;this.sender=new z7(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Y7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async t=>{await ul(t,eo,"1"),await cl(t,eo)}),!0):!1}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ul(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Z7(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>cl(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ro(s,!1).getAll();return new Zs(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j2.type="LOCAL";const n4=j2;new Xs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(n,t){return t?qe(t):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1 extends k2{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Tr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Tr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Tr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function s4(n){return U7(n.auth,new M1(n),n.bypassAuthState)}function i4(n){const{auth:t,user:e}=n;return Q(e,t,"internal-error"),F7(e,new M1(n),n.bypassAuthState)}async function o4(n){const{auth:t,user:e}=n;return Q(e,t,"internal-error"),M7(e,new M1(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:o,type:u}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return s4;case"linkViaPopup":case"linkViaRedirect":return o4;case"reauthViaPopup":case"reauthViaRedirect":return i4;default:Ke(this.auth,"internal-error")}}resolve(t){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=new Xs(2e3,1e4);class mr extends G2{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const t=L1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,a4.get())};t()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4="pendingRedirect",Ui=new Map;class c4 extends G2{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ui.get(this.auth._key());if(!t){try{const r=await l4(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ui.set(this.auth._key(),t)}return this.bypassAuthState||Ui.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l4(n,t){const e=d4(t),r=f4(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function h4(n,t){Ui.set(n._key(),t)}function f4(n){return qe(n._redirectPersistence)}function d4(n){return Fi(u4,n.config.apiKey,n.name)}async function p4(n,t,e=!1){if(Ce(n.app))return Promise.reject(Wn(n));const r=D1(n),s=r4(r,t),o=await new c4(r,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=10*60*1e3;class m4{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_4(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!z2(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(be(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=g4&&this.cachedEventUids.clear(),this.cachedEventUids.has(ll(t))}saveEventToCache(t){this.cachedEventUids.add(ll(t)),this.lastProcessedEventTime=Date.now()}}function ll(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function z2({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function _4(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z2(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E4(n,t={}){return Fr(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T4=/^https?/;async function I4(n){if(n.config.emulator)return;const{authorizedDomains:t}=await E4(n);for(const e of t)try{if(w4(e))return}catch{}Ke(n,"unauthorized-domain")}function w4(n){const t=Ja(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!T4.test(e))return!1;if(y4.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4=new Xs(3e4,6e4);function hl(){const n=Ne().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function v4(n){return new Promise((t,e)=>{var s,i,o;function r(){hl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hl(),e(be(n,"network-request-failed"))},timeout:A4.get()})}if((i=(s=Ne().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)t(gapi.iframes.getContext());else if((o=Ne().gapi)!=null&&o.load)r();else{const u=N7("iframefcb");return Ne()[u]=()=>{gapi.load?r():e(be(n,"network-request-failed"))},P7(`${b7()}?onload=${u}`).catch(c=>e(c))}}).catch(t=>{throw Bi=null,t})}let Bi=null;function R4(n){return Bi=Bi||v4(n),Bi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S4=new Xs(5e3,15e3),C4="__/auth/iframe",P4="emulator/auth/iframe",b4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O4(n){const t=n.config;Q(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?N1(t,P4):`https://${n.config.authDomain}/${C4}`,r={apiKey:t.apiKey,appName:n.name,v:Mr},s=N4.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${Ys(r).slice(1)}`}async function V4(n){const t=await R4(n),e=Ne().gapi;return Q(e,n,"internal-error"),t.open({where:document.body,url:O4(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=be(n,"network-request-failed"),u=Ne().setTimeout(()=>{i(o)},S4.get());function c(){Ne().clearTimeout(u),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D4=500,x4=600,L4="_blank",M4="http://localhost";class fl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F4(n,t,e,r=D4,s=x4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c={...k4,width:r.toString(),height:s.toString(),top:i,left:o},h=zt().toLowerCase();e&&(u=R2(h)?L4:e),A2(h)&&(t=t||M4,c.scrollbars="yes");const p=Object.entries(c).reduce((y,[C,O])=>`${y}${C}=${O},`,"");if(T7(h)&&u!=="_self")return U4(t||"",u),new fl(null);const g=window.open(t||"",u,p);Q(g,n,"popup-blocked");try{g.focus()}catch{}return new fl(g)}function U4(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4="__/auth/handler",$4="emulator/auth/handler",q4=encodeURIComponent("fac");async function dl(n,t,e,r,s,i){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Mr,eventId:s};if(t instanceof D2){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",H0(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(t instanceof Js){const p=t.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}n.tenantId&&(o.tid=n.tenantId);const u=o;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const c=await n._getAppCheckToken(),h=c?`#${q4}=${encodeURIComponent(c)}`:"";return`${H4(n)}?${Ys(u).slice(1)}${h}`}function H4({config:n}){return n.emulator?N1(n,$4):`https://${n.authDomain}/${B4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="webStorageSupport";class j4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U2,this._completeRedirectFn=p4,this._overrideRedirectResult=h4}async _openPopup(t,e,r,s){var o;Ye((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await dl(t,e,r,Ja(),s);return F4(t,i,L1())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await dl(t,e,r,Ja(),s);return W7(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(Ye(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await V4(t),r=new m4(t);return e.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Na,{type:Na},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Na];i!==void 0&&e(!!i),Ke(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=I4(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return N2()||v2()||k1()}}const G4=j4;var pl="@firebase/auth",gl="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K4(n){We(new xe("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O2(n)},h=new S7(r,s,i,c);return V7(h,e),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),We(new xe("auth-internal",t=>{const e=D1(t.getProvider("auth").getImmediate());return(r=>new z4(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ee(pl,gl,W4(n)),Ee(pl,gl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4=5*60,Q4=i2("authIdTokenMaxAge")||Y4;let ml=null;const X4=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Q4)return;const s=e==null?void 0:e.token;ml!==s&&(ml=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function J4(n=P1()){const t=Lr(n,"auth");if(t.isInitialized())return t.getImmediate();const e=O7(n,{popupRedirectResolver:G4,persistence:[n4,j7,U2]}),r=i2("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=X4(i.toString());$7(e,o,()=>o(e.currentUser)),B7(e,u=>o(u))}}const s=r2("auth");return s&&k7(e,`http://${s}`),e}function Z4(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}C7({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=be("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Z4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K4("Browser");var _l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var En,W2;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,E){function I(){}I.prototype=E.prototype,v.F=E.prototype,v.prototype=new I,v.prototype.constructor=v,v.D=function(R,A,P){for(var T=Array(arguments.length-2),te=2;te<arguments.length;te++)T[te-2]=arguments[te];return E.prototype[A].apply(R,T)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,I){I||(I=0);const R=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)R[A]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(A=0;A<16;++A)R[A]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=v.g[0],I=v.g[1],A=v.g[2];let P=v.g[3],T;T=E+(P^I&(A^P))+R[0]+3614090360&4294967295,E=I+(T<<7&4294967295|T>>>25),T=P+(A^E&(I^A))+R[1]+3905402710&4294967295,P=E+(T<<12&4294967295|T>>>20),T=A+(I^P&(E^I))+R[2]+606105819&4294967295,A=P+(T<<17&4294967295|T>>>15),T=I+(E^A&(P^E))+R[3]+3250441966&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(P^I&(A^P))+R[4]+4118548399&4294967295,E=I+(T<<7&4294967295|T>>>25),T=P+(A^E&(I^A))+R[5]+1200080426&4294967295,P=E+(T<<12&4294967295|T>>>20),T=A+(I^P&(E^I))+R[6]+2821735955&4294967295,A=P+(T<<17&4294967295|T>>>15),T=I+(E^A&(P^E))+R[7]+4249261313&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(P^I&(A^P))+R[8]+1770035416&4294967295,E=I+(T<<7&4294967295|T>>>25),T=P+(A^E&(I^A))+R[9]+2336552879&4294967295,P=E+(T<<12&4294967295|T>>>20),T=A+(I^P&(E^I))+R[10]+4294925233&4294967295,A=P+(T<<17&4294967295|T>>>15),T=I+(E^A&(P^E))+R[11]+2304563134&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(P^I&(A^P))+R[12]+1804603682&4294967295,E=I+(T<<7&4294967295|T>>>25),T=P+(A^E&(I^A))+R[13]+4254626195&4294967295,P=E+(T<<12&4294967295|T>>>20),T=A+(I^P&(E^I))+R[14]+2792965006&4294967295,A=P+(T<<17&4294967295|T>>>15),T=I+(E^A&(P^E))+R[15]+1236535329&4294967295,I=A+(T<<22&4294967295|T>>>10),T=E+(A^P&(I^A))+R[1]+4129170786&4294967295,E=I+(T<<5&4294967295|T>>>27),T=P+(I^A&(E^I))+R[6]+3225465664&4294967295,P=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(P^E))+R[11]+643717713&4294967295,A=P+(T<<14&4294967295|T>>>18),T=I+(P^E&(A^P))+R[0]+3921069994&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^P&(I^A))+R[5]+3593408605&4294967295,E=I+(T<<5&4294967295|T>>>27),T=P+(I^A&(E^I))+R[10]+38016083&4294967295,P=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(P^E))+R[15]+3634488961&4294967295,A=P+(T<<14&4294967295|T>>>18),T=I+(P^E&(A^P))+R[4]+3889429448&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^P&(I^A))+R[9]+568446438&4294967295,E=I+(T<<5&4294967295|T>>>27),T=P+(I^A&(E^I))+R[14]+3275163606&4294967295,P=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(P^E))+R[3]+4107603335&4294967295,A=P+(T<<14&4294967295|T>>>18),T=I+(P^E&(A^P))+R[8]+1163531501&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(A^P&(I^A))+R[13]+2850285829&4294967295,E=I+(T<<5&4294967295|T>>>27),T=P+(I^A&(E^I))+R[2]+4243563512&4294967295,P=E+(T<<9&4294967295|T>>>23),T=A+(E^I&(P^E))+R[7]+1735328473&4294967295,A=P+(T<<14&4294967295|T>>>18),T=I+(P^E&(A^P))+R[12]+2368359562&4294967295,I=A+(T<<20&4294967295|T>>>12),T=E+(I^A^P)+R[5]+4294588738&4294967295,E=I+(T<<4&4294967295|T>>>28),T=P+(E^I^A)+R[8]+2272392833&4294967295,P=E+(T<<11&4294967295|T>>>21),T=A+(P^E^I)+R[11]+1839030562&4294967295,A=P+(T<<16&4294967295|T>>>16),T=I+(A^P^E)+R[14]+4259657740&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^P)+R[1]+2763975236&4294967295,E=I+(T<<4&4294967295|T>>>28),T=P+(E^I^A)+R[4]+1272893353&4294967295,P=E+(T<<11&4294967295|T>>>21),T=A+(P^E^I)+R[7]+4139469664&4294967295,A=P+(T<<16&4294967295|T>>>16),T=I+(A^P^E)+R[10]+3200236656&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^P)+R[13]+681279174&4294967295,E=I+(T<<4&4294967295|T>>>28),T=P+(E^I^A)+R[0]+3936430074&4294967295,P=E+(T<<11&4294967295|T>>>21),T=A+(P^E^I)+R[3]+3572445317&4294967295,A=P+(T<<16&4294967295|T>>>16),T=I+(A^P^E)+R[6]+76029189&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(I^A^P)+R[9]+3654602809&4294967295,E=I+(T<<4&4294967295|T>>>28),T=P+(E^I^A)+R[12]+3873151461&4294967295,P=E+(T<<11&4294967295|T>>>21),T=A+(P^E^I)+R[15]+530742520&4294967295,A=P+(T<<16&4294967295|T>>>16),T=I+(A^P^E)+R[2]+3299628645&4294967295,I=A+(T<<23&4294967295|T>>>9),T=E+(A^(I|~P))+R[0]+4096336452&4294967295,E=I+(T<<6&4294967295|T>>>26),T=P+(I^(E|~A))+R[7]+1126891415&4294967295,P=E+(T<<10&4294967295|T>>>22),T=A+(E^(P|~I))+R[14]+2878612391&4294967295,A=P+(T<<15&4294967295|T>>>17),T=I+(P^(A|~E))+R[5]+4237533241&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~P))+R[12]+1700485571&4294967295,E=I+(T<<6&4294967295|T>>>26),T=P+(I^(E|~A))+R[3]+2399980690&4294967295,P=E+(T<<10&4294967295|T>>>22),T=A+(E^(P|~I))+R[10]+4293915773&4294967295,A=P+(T<<15&4294967295|T>>>17),T=I+(P^(A|~E))+R[1]+2240044497&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~P))+R[8]+1873313359&4294967295,E=I+(T<<6&4294967295|T>>>26),T=P+(I^(E|~A))+R[15]+4264355552&4294967295,P=E+(T<<10&4294967295|T>>>22),T=A+(E^(P|~I))+R[6]+2734768916&4294967295,A=P+(T<<15&4294967295|T>>>17),T=I+(P^(A|~E))+R[13]+1309151649&4294967295,I=A+(T<<21&4294967295|T>>>11),T=E+(A^(I|~P))+R[4]+4149444226&4294967295,E=I+(T<<6&4294967295|T>>>26),T=P+(I^(E|~A))+R[11]+3174756917&4294967295,P=E+(T<<10&4294967295|T>>>22),T=A+(E^(P|~I))+R[2]+718787259&4294967295,A=P+(T<<15&4294967295|T>>>17),T=I+(P^(A|~E))+R[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.v=function(v,E){E===void 0&&(E=v.length);const I=E-this.blockSize,R=this.C;let A=this.h,P=0;for(;P<E;){if(A==0)for(;P<=I;)s(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<E;)if(R[A++]=v.charCodeAt(P++),A==this.blockSize){s(this,R),A=0;break}}else for(;P<E;)if(R[A++]=v[P++],A==this.blockSize){s(this,R),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;E=this.o*8;for(var I=v.length-8;I<v.length;++I)v[I]=E&255,E/=256;for(this.v(v),v=Array(16),E=0,I=0;I<4;++I)for(let R=0;R<32;R+=8)v[E++]=this.g[I]>>>R&255;return v};function i(v,E){var I=u;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=E(v)}function o(v,E){this.h=E;const I=[];let R=!0;for(let A=v.length-1;A>=0;A--){const P=v[A]|0;R&&P==E||(I[A]=P,R=!1)}this.g=I}var u={};function c(v){return-128<=v&&v<128?i(v,function(E){return new o([E|0],E<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return g;if(v<0)return U(h(-v));const E=[];let I=1;for(let R=0;v>=I;R++)E[R]=v/I|0,I*=4294967296;return new o(E,0)}function p(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return U(p(v.substring(1),E));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(E,8));let R=g;for(let P=0;P<v.length;P+=8){var A=Math.min(8,v.length-P);const T=parseInt(v.substring(P,P+A),E);A<8?(A=h(Math.pow(E,A)),R=R.j(A).add(h(T))):(R=R.j(I),R=R.add(h(T)))}return R}var g=c(0),y=c(1),C=c(16777216);n=o.prototype,n.m=function(){if(M(this))return-U(this).m();let v=0,E=1;for(let I=0;I<this.g.length;I++){const R=this.i(I);v+=(R>=0?R:4294967296+R)*E,E*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(O(this))return"0";if(M(this))return"-"+U(this).toString(v);const E=h(Math.pow(v,6));var I=this;let R="";for(;;){const A=ge(I,E).g;I=X(I,A.j(E));let P=((I.g.length>0?I.g[0]:I.h)>>>0).toString(v);if(I=A,O(I))return P+R;for(;P.length<6;)P="0"+P;R=P+R}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function O(v){if(v.h!=0)return!1;for(let E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function M(v){return v.h==-1}n.l=function(v){return v=X(this,v),M(v)?-1:O(v)?0:1};function U(v){const E=v.g.length,I=[];for(let R=0;R<E;R++)I[R]=~v.g[R];return new o(I,~v.h).add(y)}n.abs=function(){return M(this)?U(this):this},n.add=function(v){const E=Math.max(this.g.length,v.g.length),I=[];let R=0;for(let A=0;A<=E;A++){let P=R+(this.i(A)&65535)+(v.i(A)&65535),T=(P>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);R=T>>>16,P&=65535,T&=65535,I[A]=T<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function X(v,E){return v.add(U(E))}n.j=function(v){if(O(this)||O(v))return g;if(M(this))return M(v)?U(this).j(U(v)):U(U(this).j(v));if(M(v))return U(this.j(U(v)));if(this.l(C)<0&&v.l(C)<0)return h(this.m()*v.m());const E=this.g.length+v.g.length,I=[];for(var R=0;R<2*E;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<v.g.length;A++){const P=this.i(R)>>>16,T=this.i(R)&65535,te=v.i(A)>>>16,Mn=v.i(A)&65535;I[2*R+2*A]+=T*Mn,ut(I,2*R+2*A),I[2*R+2*A+1]+=P*Mn,ut(I,2*R+2*A+1),I[2*R+2*A+1]+=T*te,ut(I,2*R+2*A+1),I[2*R+2*A+2]+=P*te,ut(I,2*R+2*A+2)}for(v=0;v<E;v++)I[v]=I[2*v+1]<<16|I[2*v];for(v=E;v<2*E;v++)I[v]=0;return new o(I,0)};function ut(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function _t(v,E){this.g=v,this.h=E}function ge(v,E){if(O(E))throw Error("division by zero");if(O(v))return new _t(g,g);if(M(v))return E=ge(U(v),E),new _t(U(E.g),U(E.h));if(M(E))return E=ge(v,U(E)),new _t(U(E.g),E.h);if(v.g.length>30){if(M(v)||M(E))throw Error("slowDivide_ only works with positive integers.");for(var I=y,R=E;R.l(v)<=0;)I=Mt(I),R=Mt(R);var A=Ft(I,1),P=Ft(R,1);for(R=Ft(R,2),I=Ft(I,2);!O(R);){var T=P.add(R);T.l(v)<=0&&(A=A.add(I),P=T),R=Ft(R,1),I=Ft(I,1)}return E=X(v,A.j(E)),new _t(A,E)}for(A=g;v.l(E)>=0;){for(I=Math.max(1,Math.floor(v.m()/E.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),P=h(I),T=P.j(E);M(T)||T.l(v)>0;)I-=R,P=h(I),T=P.j(E);O(P)&&(P=y),A=A.add(P),v=X(v,T)}return new _t(A,v)}n.B=function(v){return ge(this,v).h},n.and=function(v){const E=Math.max(this.g.length,v.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)&v.i(R);return new o(I,this.h&v.h)},n.or=function(v){const E=Math.max(this.g.length,v.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)|v.i(R);return new o(I,this.h|v.h)},n.xor=function(v){const E=Math.max(this.g.length,v.g.length),I=[];for(let R=0;R<E;R++)I[R]=this.i(R)^v.i(R);return new o(I,this.h^v.h)};function Mt(v){const E=v.g.length+1,I=[];for(let R=0;R<E;R++)I[R]=v.i(R)<<1|v.i(R-1)>>>31;return new o(I,v.h)}function Ft(v,E){const I=E>>5;E%=32;const R=v.g.length-I,A=[];for(let P=0;P<R;P++)A[P]=E>0?v.i(P+I)>>>E|v.i(P+I+1)<<32-E:v.i(P+I);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,W2=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,En=o}).apply(typeof _l<"u"?_l:typeof self<"u"?self:typeof window<"u"?window:{});var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var K2,hs,Y2,$i,t1,Q2,X2,J2;(function(){var n,t=Object.defineProperty;function e(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pi=="object"&&Pi];for(var l=0;l<a.length;++l){var f=a[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=e(this);function s(a,l){if(l)t:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in f))break t;f=f[S]}a=a[a.length-1],m=f[a],l=l(m),l!=m&&l!=null&&t(f,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var f=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&f.push([m,l[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function u(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function c(a,l,f){return a.call.apply(a.bind,arguments)}function h(a,l,f){return h=c,h.apply(null,arguments)}function p(a,l){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function g(a,l){function f(){}f.prototype=l.prototype,a.Z=l.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(m,S,N){for(var F=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)F[nt-2]=arguments[nt];return l.prototype[S].apply(m,F)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const l=a.length;if(l>0){const f=Array(l);for(let m=0;m<l;m++)f[m]=a[m];return f}return[]}function O(a,l){for(let m=1;m<arguments.length;m++){const S=arguments[m];var f=typeof S;if(f=f!="object"?f:S?Array.isArray(S)?"array":f:"null",f=="array"||f=="object"&&typeof S.length=="number"){f=a.length||0;const N=S.length||0;a.length=f+N;for(let F=0;F<N;F++)a[f+F]=S[F]}else a.push(S)}}class M{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(a){o.setTimeout(()=>{throw a},0)}function X(){var a=v;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ut{constructor(){this.h=this.g=null}add(l,f){const m=_t.get();m.set(l,f),this.h?this.h.next=m:this.g=m,this.h=m}}var _t=new M(()=>new ge,a=>a.reset());class ge{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Mt,Ft=!1,v=new ut,E=()=>{const a=Promise.resolve(void 0);Mt=()=>{a.then(I)}};function I(){for(var a;a=X();){try{a.h.call(a.g)}catch(f){U(f)}var l=_t;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Ft=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,l),o.removeEventListener("test",f,l)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function te(a,l){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}g(te,A),te.prototype.init=function(a,l){const f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(f=="mouseover"?l=a.fromElement:f=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Mn="closure_listenable_"+(Math.random()*1e6|0),$d=0;function qd(a,l,f,m,S){this.listener=a,this.proxy=null,this.src=l,this.type=f,this.capture=!!m,this.ha=S,this.key=++$d,this.da=this.fa=!1}function fi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function di(a,l,f){for(const m in a)l.call(f,a[m],m,a)}function Hd(a,l){for(const f in a)l.call(void 0,a[f],f,a)}function Hu(a){const l={};for(const f in a)l[f]=a[f];return l}const ju="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gu(a,l){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)a[f]=m[f];for(let N=0;N<ju.length;N++)f=ju[N],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function pi(a){this.src=a,this.g={},this.h=0}pi.prototype.add=function(a,l,f,m,S){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const F=ea(a,l,m,S);return F>-1?(l=a[F],f||(l.fa=!1)):(l=new qd(l,this.src,N,!!m,S),l.fa=f,a.push(l)),l};function ta(a,l){const f=l.type;if(f in a.g){var m=a.g[f],S=Array.prototype.indexOf.call(m,l,void 0),N;(N=S>=0)&&Array.prototype.splice.call(m,S,1),N&&(fi(l),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ea(a,l,f,m){for(let S=0;S<a.length;++S){const N=a[S];if(!N.da&&N.listener==l&&N.capture==!!f&&N.ha==m)return S}return-1}var na="closure_lm_"+(Math.random()*1e6|0),ra={};function zu(a,l,f,m,S){if(Array.isArray(l)){for(let N=0;N<l.length;N++)zu(a,l[N],f,m,S);return null}return f=Yu(f),a&&a[Mn]?a.J(l,f,u(m)?!!m.capture:!1,S):jd(a,l,f,!1,m,S)}function jd(a,l,f,m,S,N){if(!l)throw Error("Invalid event type");const F=u(S)?!!S.capture:!!S;let nt=ia(a);if(nt||(a[na]=nt=new pi(a)),f=nt.add(l,f,m,F,N),f.proxy)return f;if(m=Gd(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)P||(S=F),S===void 0&&(S=!1),a.addEventListener(l.toString(),m,S);else if(a.attachEvent)a.attachEvent(Ku(l.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Gd(){function a(f){return l.call(a.src,a.listener,f)}const l=zd;return a}function Wu(a,l,f,m,S){if(Array.isArray(l))for(var N=0;N<l.length;N++)Wu(a,l[N],f,m,S);else m=u(m)?!!m.capture:!!m,f=Yu(f),a&&a[Mn]?(a=a.i,N=String(l).toString(),N in a.g&&(l=a.g[N],f=ea(l,f,m,S),f>-1&&(fi(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete a.g[N],a.h--)))):a&&(a=ia(a))&&(l=a.g[l.toString()],a=-1,l&&(a=ea(l,f,m,S)),(f=a>-1?l[a]:null)&&sa(f))}function sa(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Mn])ta(l.i,a);else{var f=a.type,m=a.proxy;l.removeEventListener?l.removeEventListener(f,m,a.capture):l.detachEvent?l.detachEvent(Ku(f),m):l.addListener&&l.removeListener&&l.removeListener(m),(f=ia(l))?(ta(f,a),f.h==0&&(f.src=null,l[na]=null)):fi(a)}}}function Ku(a){return a in ra?ra[a]:ra[a]="on"+a}function zd(a,l){if(a.da)a=!0;else{l=new te(l,this);const f=a.listener,m=a.ha||a.src;a.fa&&sa(a),a=f.call(m,l)}return a}function ia(a){return a=a[na],a instanceof pi?a:null}var oa="__closure_events_fn_"+(Math.random()*1e9>>>0);function Yu(a){return typeof a=="function"?a:(a[oa]||(a[oa]=function(l){return a.handleEvent(l)}),a[oa])}function Ut(){R.call(this),this.i=new pi(this),this.M=this,this.G=null}g(Ut,R),Ut.prototype[Mn]=!0,Ut.prototype.removeEventListener=function(a,l,f,m){Wu(this,a,l,f,m)};function Yt(a,l){var f,m=a.G;if(m)for(f=[];m;m=m.G)f.push(m);if(a=a.M,m=l.type||l,typeof l=="string")l=new A(l,a);else if(l instanceof A)l.target=l.target||a;else{var S=l;l=new A(m,a),Gu(l,S)}S=!0;let N,F;if(f)for(F=f.length-1;F>=0;F--)N=l.g=f[F],S=gi(N,m,!0,l)&&S;if(N=l.g=a,S=gi(N,m,!0,l)&&S,S=gi(N,m,!1,l)&&S,f)for(F=0;F<f.length;F++)N=l.g=f[F],S=gi(N,m,!1,l)&&S}Ut.prototype.N=function(){if(Ut.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const f=a.g[l];for(let m=0;m<f.length;m++)fi(f[m]);delete a.g[l],a.h--}}this.G=null},Ut.prototype.J=function(a,l,f,m){return this.i.add(String(a),l,!1,f,m)},Ut.prototype.K=function(a,l,f,m){return this.i.add(String(a),l,!0,f,m)};function gi(a,l,f,m){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let N=0;N<l.length;++N){const F=l[N];if(F&&!F.da&&F.capture==f){const nt=F.listener,Ct=F.ha||F.src;F.fa&&ta(a.i,F),S=nt.call(Ct,m)!==!1&&S}}return S&&!m.defaultPrevented}function Wd(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Qu(a){a.g=Wd(()=>{a.g=null,a.i&&(a.i=!1,Qu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Kd extends R{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Qu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(a){R.call(this),this.h=a,this.g={}}g(Wr,R);var Xu=[];function Ju(a){di(a.g,function(l,f){this.g.hasOwnProperty(f)&&sa(l)},a),a.g={}}Wr.prototype.N=function(){Wr.Z.N.call(this),Ju(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=o.JSON.stringify,Yd=o.JSON.parse,Qd=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Zu(){}function tc(){}var Kr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ua(){A.call(this,"d")}g(ua,A);function ca(){A.call(this,"c")}g(ca,A);var Fn={},ec=null;function mi(){return ec=ec||new Ut}Fn.Ia="serverreachability";function nc(a){A.call(this,Fn.Ia,a)}g(nc,A);function Yr(a){const l=mi();Yt(l,new nc(l))}Fn.STAT_EVENT="statevent";function rc(a,l){A.call(this,Fn.STAT_EVENT,a),this.stat=l}g(rc,A);function Qt(a){const l=mi();Yt(l,new rc(l,a))}Fn.Ja="timingevent";function sc(a,l){A.call(this,Fn.Ja,a),this.size=l}g(sc,A);function Qr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function Xr(){this.g=!0}Xr.prototype.ua=function(){this.g=!1};function Xd(a,l,f,m,S,N){a.info(function(){if(a.g)if(N){var F="",nt=N.split("&");for(let ht=0;ht<nt.length;ht++){var Ct=nt[ht].split("=");if(Ct.length>1){const Vt=Ct[0];Ct=Ct[1];const Re=Vt.split("_");F=Re.length>=2&&Re[1]=="type"?F+(Vt+"="+Ct+"&"):F+(Vt+"=redacted&")}}}else F=null;else F=N;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+l+`
`+f+`
`+F})}function Jd(a,l,f,m,S,N,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+l+`
`+f+`
`+N+" "+F})}function cr(a,l,f,m){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+t0(a,f)+(m?" "+m:"")})}function Zd(a,l){a.info(function(){return"TIMEOUT: "+l})}Xr.prototype.info=function(){};function t0(a,l){if(!a.g)return l;if(!l)return null;try{const N=JSON.parse(l);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var f=N[a];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var S=m[0];if(S!="noop"&&S!="stop"&&S!="close")for(let F=1;F<m.length;F++)m[F]=""}}}}return aa(N)}catch{return l}}var _i={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ic={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},oc;function la(){}g(la,Zu),la.prototype.g=function(){return new XMLHttpRequest},oc=new la;function Jr(a){return encodeURIComponent(String(a))}function e0(a){var l=1;a=a.split(":");const f=[];for(;l>0&&a.length;)f.push(a.shift()),l--;return a.length&&f.push(a.join(":")),f}function tn(a,l,f,m){this.j=a,this.i=l,this.l=f,this.S=m||1,this.V=new Wr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ac}function ac(){this.i=null,this.g="",this.h=!1}var uc={},ha={};function fa(a,l,f){a.M=1,a.A=yi(ve(l)),a.u=f,a.R=!0,cc(a,null)}function cc(a,l){a.F=Date.now(),Ei(a),a.B=ve(a.A);var f=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),wc(f.i,"t",m),a.C=0,f=a.j.L,a.h=new ac,a.g=Bc(a.j,f?l:null,!a.u),a.P>0&&(a.O=new Kd(h(a.Y,a,a.g),a.P)),l=a.V,f=a.g,m=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(Xu[0]=S.toString()),S=Xu);for(let N=0;N<S.length;N++){const F=zu(f,S[N],m||l.handleEvent,!1,l.h||l);if(!F)break;l.g[F.key]=F}l=a.J?Hu(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Yr(),Xd(a.i,a.v,a.B,a.l,a.S,a.u)}tn.prototype.ba=function(a){a=a.target;const l=this.O;l&&rn(a)==3?l.j():this.Y(a)},tn.prototype.Y=function(a){try{if(a==this.g)t:{const nt=rn(this.g),Ct=this.g.ya(),ht=this.g.ca();if(!(nt<3)&&(nt!=3||this.g&&(this.h.h||this.g.la()||bc(this.g)))){this.K||nt!=4||Ct==7||(Ct==8||ht<=0?Yr(3):Yr(2)),da(this);var l=this.g.ca();this.X=l;var f=n0(this);if(this.o=l==200,Jd(this.i,this.v,this.B,this.l,this.S,nt,l),this.o){if(this.U&&!this.L){e:{if(this.g){var m,S=this.g;if((m=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var N=m;break e}}N=null}if(a=N)cr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pa(this,a);else{this.o=!1,this.m=3,Qt(12),Un(this),Zr(this);break t}}if(this.R){a=!0;let Vt;for(;!this.K&&this.C<f.length;)if(Vt=r0(this,f),Vt==ha){nt==4&&(this.m=4,Qt(14),a=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==uc){this.m=4,Qt(15),cr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else cr(this.i,this.l,Vt,null),pa(this,Vt);if(lc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||f.length!=0||this.h.h||(this.m=1,Qt(16),a=!1),this.o=this.o&&a,!a)cr(this.i,this.l,f,"[Invalid Chunked Response]"),Un(this),Zr(this);else if(f.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),wa(F),F.P=!0,Qt(11))}}else cr(this.i,this.l,f,null),pa(this,f);nt==4&&Un(this),this.o&&!this.K&&(nt==4?Lc(this.j,this):(this.o=!1,Ei(this)))}else _0(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,Qt(12)):(this.m=0,Qt(13)),Un(this),Zr(this)}}}catch{}finally{}};function n0(a){if(!lc(a))return a.g.la();const l=bc(a.g);if(l==="")return"";let f="";const m=l.length,S=rn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Un(a),Zr(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,f+=a.h.i.decode(l[N],{stream:!(S&&N==m-1)});return l.length=0,a.h.g+=f,a.C=0,a.h.g}function lc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function r0(a,l){var f=a.C,m=l.indexOf(`
`,f);return m==-1?ha:(f=Number(l.substring(f,m)),isNaN(f)?uc:(m+=1,m+f>l.length?ha:(l=l.slice(m,m+f),a.C=m+f,l)))}tn.prototype.cancel=function(){this.K=!0,Un(this)};function Ei(a){a.T=Date.now()+a.H,hc(a,a.H)}function hc(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Qr(h(a.aa,a),l)}function da(a){a.D&&(o.clearTimeout(a.D),a.D=null)}tn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Zd(this.i,this.B),this.M!=2&&(Yr(),Qt(17)),Un(this),this.m=2,Zr(this)):hc(this,this.T-a)};function Zr(a){a.j.I==0||a.K||Lc(a.j,a)}function Un(a){da(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Ju(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function pa(a,l){try{var f=a.j;if(f.I!=0&&(f.g==a||ga(f.h,a))){if(!a.L&&ga(f.h,a)&&f.I==3){try{var m=f.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)vi(f),wi(f);else break t;Ia(f),Qt(18)}}else f.xa=S[1],0<f.xa-f.K&&S[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Qr(h(f.Va,f),6e3));pc(f.h)<=1&&f.ta&&(f.ta=void 0)}else $n(f,11)}else if((a.L||f.g==a)&&vi(f),!T(l))for(S=f.Ba.g.parse(l),l=0;l<S.length;l++){let ht=S[l];const Vt=ht[0];if(!(Vt<=f.K))if(f.K=Vt,ht=ht[1],f.I==2)if(ht[0]=="c"){f.M=ht[1],f.ba=ht[2];const Re=ht[3];Re!=null&&(f.ka=Re,f.j.info("VER="+f.ka));const qn=ht[4];qn!=null&&(f.za=qn,f.j.info("SVER="+f.za));const sn=ht[5];sn!=null&&typeof sn=="number"&&sn>0&&(m=1.5*sn,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const on=a.g;if(on){const Si=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var N=m.h;N.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ma(N,N.h),N.h=null))}if(m.G){const Aa=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Aa&&(m.wa=Aa,ft(m.J,m.G,Aa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var F=a;if(m.na=Uc(m,m.L?m.ba:null,m.W),F.L){gc(m.h,F);var nt=F,Ct=m.O;Ct&&(nt.H=Ct),nt.D&&(da(nt),Ei(nt)),m.g=F}else Dc(m);f.i.length>0&&Ai(f)}else ht[0]!="stop"&&ht[0]!="close"||$n(f,7);else f.I==3&&(ht[0]=="stop"||ht[0]=="close"?ht[0]=="stop"?$n(f,7):Ta(f):ht[0]!="noop"&&f.l&&f.l.qa(ht),f.A=0)}}Yr(4)}catch{}}var s0=class{constructor(a,l){this.g=a,this.map=l}};function fc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function dc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pc(a){return a.h?1:a.g?a.g.size:0}function ga(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function ma(a,l){a.g?a.g.add(l):a.h=l}function gc(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}fc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const f of a.g.values())l=l.concat(f.G);return l}return C(a.i)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function i0(a,l){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const m=a[f].indexOf("=");let S,N=null;m>=0?(S=a[f].substring(0,m),N=a[f].substring(m+1)):S=a[f],l(S,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function en(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof en?(this.l=a.l,ts(this,a.j),this.o=a.o,this.g=a.g,es(this,a.u),this.h=a.h,_a(this,Ac(a.i)),this.m=a.m):a&&(l=String(a).match(_c))?(this.l=!1,ts(this,l[1]||"",!0),this.o=ns(l[2]||""),this.g=ns(l[3]||"",!0),es(this,l[4]),this.h=ns(l[5]||"",!0),_a(this,l[6]||"",!0),this.m=ns(l[7]||"")):(this.l=!1,this.i=new ss(null,this.l))}en.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(rs(l,Ec,!0),":");var f=this.g;return(f||l=="file")&&(a.push("//"),(l=this.o)&&a.push(rs(l,Ec,!0),"@"),a.push(Jr(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(rs(f,f.charAt(0)=="/"?u0:a0,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",rs(f,l0)),a.join("")},en.prototype.resolve=function(a){const l=ve(this);let f=!!a.j;f?ts(l,a.j):f=!!a.o,f?l.o=a.o:f=!!a.g,f?l.g=a.g:f=a.u!=null;var m=a.h;if(f)es(l,a.u);else if(f=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var S=l.h.lastIndexOf("/");S!=-1&&(m=l.h.slice(0,S+1)+m)}if(S=m,S==".."||S==".")m="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){m=S.lastIndexOf("/",0)==0,S=S.split("/");const N=[];for(let F=0;F<S.length;){const nt=S[F++];nt=="."?m&&F==S.length&&N.push(""):nt==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&F==S.length&&N.push("")):(N.push(nt),m=!0)}m=N.join("/")}else m=S}return f?l.h=m:f=a.i.toString()!=="",f?_a(l,Ac(a.i)):f=!!a.m,f&&(l.m=a.m),l};function ve(a){return new en(a)}function ts(a,l,f){a.j=f?ns(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function es(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function _a(a,l,f){l instanceof ss?(a.i=l,h0(a.i,a.l)):(f||(l=rs(l,c0)),a.i=new ss(l,a.l))}function ft(a,l,f){a.i.set(l,f)}function yi(a){return ft(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ns(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function rs(a,l,f){return typeof a=="string"?(a=encodeURI(a).replace(l,o0),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function o0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ec=/[#\/\?@]/g,a0=/[#\?:]/g,u0=/[#\?]/g,c0=/[#\?@]/g,l0=/#/g;function ss(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Bn(a){a.g||(a.g=new Map,a.h=0,a.i&&i0(a.i,function(l,f){a.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=ss.prototype,n.add=function(a,l){Bn(this),this.i=null,a=lr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(l),this.h+=1,this};function yc(a,l){Bn(a),l=lr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Tc(a,l){return Bn(a),l=lr(a,l),a.g.has(l)}n.forEach=function(a,l){Bn(this),this.g.forEach(function(f,m){f.forEach(function(S){a.call(l,S,m,this)},this)},this)};function Ic(a,l){Bn(a);let f=[];if(typeof l=="string")Tc(a,l)&&(f=f.concat(a.g.get(lr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)f=f.concat(a[l]);return f}n.set=function(a,l){return Bn(this),this.i=null,a=lr(this,a),Tc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=Ic(this,a),a.length>0?String(a[0]):l):l};function wc(a,l,f){yc(a,l),f.length>0&&(a.i=null,a.g.set(lr(a,l),C(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var f=l[m];const S=Jr(f);f=Ic(this,f);for(let N=0;N<f.length;N++){let F=S;f[N]!==""&&(F+="="+Jr(f[N])),a.push(F)}}return this.i=a.join("&")};function Ac(a){const l=new ss;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function lr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function h0(a,l){l&&!a.j&&(Bn(a),a.i=null,a.g.forEach(function(f,m){const S=m.toLowerCase();m!=S&&(yc(this,m),wc(this,S,f))},a)),a.j=l}function f0(a,l){const f=new Xr;if(o.Image){const m=new Image;m.onload=p(nn,f,"TestLoadImage: loaded",!0,l,m),m.onerror=p(nn,f,"TestLoadImage: error",!1,l,m),m.onabort=p(nn,f,"TestLoadImage: abort",!1,l,m),m.ontimeout=p(nn,f,"TestLoadImage: timeout",!1,l,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else l(!1)}function d0(a,l){const f=new Xr,m=new AbortController,S=setTimeout(()=>{m.abort(),nn(f,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(S),N.ok?nn(f,"TestPingServer: ok",!0,l):nn(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),nn(f,"TestPingServer: error",!1,l)})}function nn(a,l,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function p0(){this.g=new Qd}function Ea(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Ea,Zu),Ea.prototype.g=function(){return new Ti(this.i,this.h)};function Ti(a,l){Ut.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ti,Ut),n=Ti.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,os(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function vc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?is(this):os(this),this.readyState==3&&vc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,is(this))},n.Na=function(a){this.g&&(this.response=a,is(this))},n.ga=function(){this.g&&is(this)};function is(a){a.readyState=4,a.l=null,a.j=null,a.B=null,os(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=l.next();return a.join(`\r
`)};function os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rc(a){let l="";return di(a,function(f,m){l+=m,l+=":",l+=f,l+=`\r
`}),l}function ya(a,l,f){t:{for(m in f){var m=!1;break t}m=!0}m||(f=Rc(f),typeof a=="string"?f!=null&&Jr(f):ft(a,l,f))}function Et(a){Ut.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Et,Ut);var g0=/^https?$/i,m0=["POST","PUT"];n=Et.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():oc.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(N){Sc(this,N);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(m0,l,void 0)>=0)||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of f)this.g.setRequestHeader(N,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Sc(this,N)}};function Sc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Cc(a),Ii(a)}function Cc(a){a.A||(a.A=!0,Yt(a,"complete"),Yt(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Yt(this,"complete"),Yt(this,"abort"),Ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),Et.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Pc(this):this.Xa())},n.Xa=function(){Pc(this)};function Pc(a){if(a.h&&typeof i<"u"){if(a.v&&rn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Yt(a,"readystatechange"),rn(a)==4){a.h=!1;try{const N=a.ca();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var f;if(!(f=l)){var m;if(m=N===0){let F=String(a.D).match(_c)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),m=!g0.test(F?F.toLowerCase():"")}f=m}if(f)Yt(a,"complete"),Yt(a,"success");else{a.o=6;try{var S=rn(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",Cc(a)}}finally{Ii(a)}}}}function Ii(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,l||Yt(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function rn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return rn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Yd(l)}};function bc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _0(a){const l={};a=(a.g&&rn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var f=e0(a[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=l[S]||[];l[S]=N,N.push(f)}Hd(l,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(a,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||l}function Nc(a){this.za=0,this.i=[],this.j=new Xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=as("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=as("baseRetryDelayMs",5e3,a),this.Za=as("retryDelaySeedMs",1e4,a),this.Ta=as("forwardChannelMaxRetries",2,a),this.va=as("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new fc(a&&a.concurrentRequestLimit),this.Ba=new p0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Nc.prototype,n.ka=8,n.I=1,n.connect=function(a,l,f,m){Qt(0),this.W=a,this.H=l||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=Uc(this,null,this.W),Ai(this)};function Ta(a){if(Oc(a),a.I==3){var l=a.V++,f=ve(a.J);if(ft(f,"SID",a.M),ft(f,"RID",l),ft(f,"TYPE","terminate"),us(a,f),l=new tn(a,a.j,l),l.M=2,l.A=yi(ve(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=l.A,f=!0),f||(l.g=Bc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ei(l)}Fc(a)}function wi(a){a.g&&(wa(a),a.g.cancel(),a.g=null)}function Oc(a){wi(a),a.v&&(o.clearTimeout(a.v),a.v=null),vi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ai(a){if(!dc(a.h)&&!a.m){a.m=!0;var l=a.Ea;Mt||E(),Ft||(Mt(),Ft=!0),v.add(l,a),a.D=0}}function E0(a,l){return pc(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Qr(h(a.Ea,a,l),Mc(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new tn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=Hu(N),Gu(N,this.U)):N=this.U),this.u!==null||this.R||(S.J=N,N=null),this.S)t:{for(var l=0,f=0;f<this.i.length;f++){e:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=f;break t}if(l===4096||f===this.i.length-1){l=f+1;break t}}l=1e3}else l=1e3;l=kc(this,S,l),f=ve(this.J),ft(f,"RID",a),ft(f,"CVER",22),this.G&&ft(f,"X-HTTP-Session-Id",this.G),us(this,f),N&&(this.R?l="headers="+Jr(Rc(N))+"&"+l:this.u&&ya(f,this.u,N)),ma(this.h,S),this.Ra&&ft(f,"TYPE","init"),this.S?(ft(f,"$req",l),ft(f,"SID","null"),S.U=!0,fa(S,f,null)):fa(S,f,l),this.I=2}}else this.I==3&&(a?Vc(this,a):this.i.length==0||dc(this.h)||Vc(this))};function Vc(a,l){var f;l?f=l.l:f=a.V++;const m=ve(a.J);ft(m,"SID",a.M),ft(m,"RID",f),ft(m,"AID",a.K),us(a,m),a.u&&a.o&&ya(m,a.u,a.o),f=new tn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),l&&(a.i=l.G.concat(a.i)),l=kc(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ma(a.h,f),fa(f,m,l)}function us(a,l){a.H&&di(a.H,function(f,m){ft(l,m,f)}),a.l&&di({},function(f,m){ft(l,m,f)})}function kc(a,l,f){f=Math.min(a.i.length,f);const m=a.l?h(a.l.Ka,a.l,a):null;t:{var S=a.i;let nt=-1;for(;;){const Ct=["count="+f];nt==-1?f>0?(nt=S[0].g,Ct.push("ofs="+nt)):nt=0:Ct.push("ofs="+nt);let ht=!0;for(let Vt=0;Vt<f;Vt++){var N=S[Vt].g;const Re=S[Vt].map;if(N-=nt,N<0)nt=Math.max(0,S[Vt].g-100),ht=!1;else try{N="req"+N+"_"||"";try{var F=Re instanceof Map?Re:Object.entries(Re);for(const[qn,sn]of F){let on=sn;u(sn)&&(on=aa(sn)),Ct.push(N+qn+"="+encodeURIComponent(on))}}catch(qn){throw Ct.push(N+"type="+encodeURIComponent("_badmap")),qn}}catch{m&&m(Re)}}if(ht){F=Ct.join("&");break t}}F=void 0}return a=a.i.splice(0,f),l.G=a,F}function Dc(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Mt||E(),Ft||(Mt(),Ft=!0),v.add(l,a),a.A=0}}function Ia(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Qr(h(a.Da,a),Mc(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,xc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Qr(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Qt(10),wi(this),xc(this))};function wa(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function xc(a){a.g=new tn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=ve(a.na);ft(l,"RID","rpc"),ft(l,"SID",a.M),ft(l,"AID",a.K),ft(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&ft(l,"TO",a.ia),ft(l,"TYPE","xmlhttp"),us(a,l),a.u&&a.o&&ya(l,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=yi(ve(l)),f.u=null,f.R=!0,cc(f,a)}n.Va=function(){this.C!=null&&(this.C=null,wi(this),Ia(this),Qt(19))};function vi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Lc(a,l){var f=null;if(a.g==l){vi(a),wa(a),a.g=null;var m=2}else if(ga(a.h,l))f=l.G,gc(a.h,l),m=1;else return;if(a.I!=0){if(l.o)if(m==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var S=a.D;m=mi(),Yt(m,new sc(m,f)),Ai(a)}else Dc(a);else if(S=l.m,S==3||S==0&&l.X>0||!(m==1&&E0(a,l)||m==2&&Ia(a)))switch(f&&f.length>0&&(l=a.h,l.i=l.i.concat(f)),S){case 1:$n(a,5);break;case 4:$n(a,10);break;case 3:$n(a,6);break;default:$n(a,2)}}}function Mc(a,l){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*l}function $n(a,l){if(a.j.info("Error code "+l),l==2){var f=h(a.bb,a),m=a.Ua;const S=!m;m=new en(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ts(m,"https"),yi(m),S?f0(m.toString(),f):d0(m.toString(),f)}else Qt(2);a.I=0,a.l&&a.l.pa(l),Fc(a),Oc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Qt(2)):(this.j.info("Failed to ping google.com"),Qt(1))};function Fc(a){if(a.I=0,a.ja=[],a.l){const l=mc(a.h);(l.length!=0||a.i.length!=0)&&(O(a.ja,l),O(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function Uc(a,l,f){var m=f instanceof en?ve(f):new en(f);if(m.g!="")l&&(m.g=l+"."+m.g),es(m,m.u);else{var S=o.location;m=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const N=new en(null);m&&ts(N,m),l&&(N.g=l),S&&es(N,S),f&&(N.h=f),m=N}return f=a.G,l=a.wa,f&&l&&ft(m,f,l),ft(m,"VER",a.ka),us(a,m),m}function Bc(a,l,f){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new Et(new Ea({ab:f})):new Et(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $c(){}n=$c.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ri(){}Ri.prototype.g=function(a,l){return new ce(a,l)};function ce(a,l){Ut.call(this),this.g=new Nc(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!T(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!T(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new hr(this)}g(ce,Ut),ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ce.prototype.close=function(){Ta(this.g)},ce.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=aa(a),a=f);l.i.push(new s0(l.Ya++,a)),l.I==3&&Ai(l)},ce.prototype.N=function(){this.g.l=null,delete this.j,Ta(this.g),delete this.g,ce.Z.N.call(this)};function qc(a){ua.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){t:{for(const f in l){a=f;break t}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}g(qc,ua);function Hc(){ca.call(this),this.status=1}g(Hc,ca);function hr(a){this.g=a}g(hr,$c),hr.prototype.ra=function(){Yt(this.g,"a")},hr.prototype.qa=function(a){Yt(this.g,new qc(a))},hr.prototype.pa=function(a){Yt(this.g,new Hc)},hr.prototype.oa=function(){Yt(this.g,"b")},Ri.prototype.createWebChannel=Ri.prototype.g,ce.prototype.send=ce.prototype.o,ce.prototype.open=ce.prototype.m,ce.prototype.close=ce.prototype.close,J2=function(){return new Ri},X2=function(){return mi()},Q2=Fn,t1={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_i.NO_ERROR=0,_i.TIMEOUT=8,_i.HTTP_ERROR=6,$i=_i,ic.COMPLETE="complete",Y2=ic,tc.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",Ut.prototype.listen=Ut.prototype.J,hs=tc,Et.prototype.listenOnce=Et.prototype.K,Et.prototype.getLastError=Et.prototype.Ha,Et.prototype.getLastErrorCode=Et.prototype.ya,Et.prototype.getStatus=Et.prototype.ca,Et.prototype.getResponseJson=Et.prototype.La,Et.prototype.getResponseText=Et.prototype.la,Et.prototype.send=Et.prototype.ea,Et.prototype.setWithCredentials=Et.prototype.Fa,K2=Et}).apply(typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const gt=class gt{};_(gt,"FOLD_CASE",1),_(gt,"LITERAL",2),_(gt,"CLASS_NL",4),_(gt,"DOT_NL",8),_(gt,"ONE_LINE",16),_(gt,"NON_GREEDY",32),_(gt,"PERL_X",64),_(gt,"UNICODE_GROUPS",128),_(gt,"WAS_DOLLAR",256),_(gt,"MATCH_NL",gt.CLASS_NL|gt.DOT_NL),_(gt,"PERL",gt.CLASS_NL|gt.ONE_LINE|gt.PERL_X|gt.UNICODE_GROUPS),_(gt,"POSIX",0),_(gt,"UNANCHORED",0),_(gt,"ANCHOR_START",1),_(gt,"ANCHOR_BOTH",2);let $=gt;class b{static toUpperCase(t){const e=String.fromCodePoint(t).toUpperCase();if(e.length>1)return t;const r=String.fromCodePoint(e.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==t?t:e.codePointAt(0)}static toLowerCase(t){const e=String.fromCodePoint(t).toLowerCase();if(e.length>1)return t;const r=String.fromCodePoint(e.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==t?t:e.codePointAt(0)}}_(b,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const d=class d{};_(d,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),_(d,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),_(d,"Cc",[[0,31,1],[127,159,1]]),_(d,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),_(d,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),_(d,"Cs",[[55296,57343,1]]),_(d,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),_(d,"foldL",[[837,837,1]]),_(d,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),_(d,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),_(d,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),_(d,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),_(d,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),_(d,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),_(d,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),_(d,"Upper",d.Lu),_(d,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),_(d,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),_(d,"foldM",[[921,953,32],[8126,8126,1]]),_(d,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),_(d,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),_(d,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),_(d,"foldMn",[[921,953,32],[8126,8126,1]]),_(d,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),_(d,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),_(d,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),_(d,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),_(d,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),_(d,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),_(d,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),_(d,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),_(d,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),_(d,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),_(d,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),_(d,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),_(d,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),_(d,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),_(d,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),_(d,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),_(d,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),_(d,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),_(d,"Zl",[[8232,8232,1]]),_(d,"Zp",[[8233,8233,1]]),_(d,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),_(d,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),_(d,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),_(d,"Anatolian_Hieroglyphs",[[82944,83526,1]]),_(d,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),_(d,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),_(d,"Avestan",[[68352,68405,1],[68409,68415,1]]),_(d,"Balinese",[[6912,6988,1],[6992,7038,1]]),_(d,"Bamum",[[42656,42743,1],[92160,92728,1]]),_(d,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),_(d,"Batak",[[7104,7155,1],[7164,7167,1]]),_(d,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),_(d,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),_(d,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),_(d,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),_(d,"Braille",[[10240,10495,1]]),_(d,"Buginese",[[6656,6683,1],[6686,6687,1]]),_(d,"Buhid",[[5952,5971,1]]),_(d,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),_(d,"Carian",[[66208,66256,1]]),_(d,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),_(d,"Chakma",[[69888,69940,1],[69942,69959,1]]),_(d,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),_(d,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),_(d,"Chorasmian",[[69552,69579,1]]),_(d,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),_(d,"foldCommon",[[924,956,32]]),_(d,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),_(d,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),_(d,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),_(d,"Cypro_Minoan",[[77712,77810,1]]),_(d,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),_(d,"Deseret",[[66560,66639,1]]),_(d,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),_(d,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),_(d,"Dogra",[[71680,71739,1]]),_(d,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),_(d,"Egyptian_Hieroglyphs",[[77824,78933,1]]),_(d,"Elbasan",[[66816,66855,1]]),_(d,"Elymaic",[[69600,69622,1]]),_(d,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),_(d,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),_(d,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),_(d,"Gothic",[[66352,66378,1]]),_(d,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),_(d,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),_(d,"foldGreek",[[181,837,656]]),_(d,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),_(d,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),_(d,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),_(d,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),_(d,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),_(d,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),_(d,"Hanunoo",[[5920,5940,1]]),_(d,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),_(d,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),_(d,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),_(d,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),_(d,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),_(d,"foldInherited",[[921,953,32],[8126,8126,1]]),_(d,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),_(d,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),_(d,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),_(d,"Kaithi",[[69760,69826,1],[69837,69837,1]]),_(d,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),_(d,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),_(d,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),_(d,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),_(d,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),_(d,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),_(d,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),_(d,"Khojki",[[70144,70161,1],[70163,70209,1]]),_(d,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),_(d,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),_(d,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),_(d,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),_(d,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),_(d,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),_(d,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),_(d,"Lisu",[[42192,42239,1],[73648,73648,1]]),_(d,"Lycian",[[66176,66204,1]]),_(d,"Lydian",[[67872,67897,1],[67903,67903,1]]),_(d,"Mahajani",[[69968,70006,1]]),_(d,"Makasar",[[73440,73464,1]]),_(d,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),_(d,"Mandaic",[[2112,2139,1],[2142,2142,1]]),_(d,"Manichaean",[[68288,68326,1],[68331,68342,1]]),_(d,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),_(d,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),_(d,"Medefaidrin",[[93760,93850,1]]),_(d,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),_(d,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),_(d,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),_(d,"Meroitic_Hieroglyphs",[[67968,67999,1]]),_(d,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),_(d,"Modi",[[71168,71236,1],[71248,71257,1]]),_(d,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),_(d,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),_(d,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),_(d,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),_(d,"Nabataean",[[67712,67742,1],[67751,67759,1]]),_(d,"Nag_Mundari",[[124112,124153,1]]),_(d,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),_(d,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),_(d,"Newa",[[70656,70747,1],[70749,70753,1]]),_(d,"Nko",[[1984,2042,1],[2045,2047,1]]),_(d,"Nushu",[[94177,110960,16783],[110961,111355,1]]),_(d,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),_(d,"Ogham",[[5760,5788,1]]),_(d,"Ol_Chiki",[[7248,7295,1]]),_(d,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),_(d,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),_(d,"Old_North_Arabian",[[68224,68255,1]]),_(d,"Old_Permic",[[66384,66426,1]]),_(d,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),_(d,"Old_Sogdian",[[69376,69415,1]]),_(d,"Old_South_Arabian",[[68192,68223,1]]),_(d,"Old_Turkic",[[68608,68680,1]]),_(d,"Old_Uyghur",[[69488,69513,1]]),_(d,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),_(d,"Osage",[[66736,66771,1],[66776,66811,1]]),_(d,"Osmanya",[[66688,66717,1],[66720,66729,1]]),_(d,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),_(d,"Palmyrene",[[67680,67711,1]]),_(d,"Pau_Cin_Hau",[[72384,72440,1]]),_(d,"Phags_Pa",[[43072,43127,1]]),_(d,"Phoenician",[[67840,67867,1],[67871,67871,1]]),_(d,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),_(d,"Rejang",[[43312,43347,1],[43359,43359,1]]),_(d,"Runic",[[5792,5866,1],[5870,5880,1]]),_(d,"Samaritan",[[2048,2093,1],[2096,2110,1]]),_(d,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),_(d,"Sharada",[[70016,70111,1]]),_(d,"Shavian",[[66640,66687,1]]),_(d,"Siddham",[[71040,71093,1],[71096,71133,1]]),_(d,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),_(d,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),_(d,"Sogdian",[[69424,69465,1]]),_(d,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),_(d,"Soyombo",[[72272,72354,1]]),_(d,"Sundanese",[[7040,7103,1],[7360,7367,1]]),_(d,"Syloti_Nagri",[[43008,43052,1]]),_(d,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),_(d,"Tagalog",[[5888,5909,1],[5919,5919,1]]),_(d,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),_(d,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),_(d,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),_(d,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),_(d,"Takri",[[71296,71353,1],[71360,71369,1]]),_(d,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),_(d,"Tangsa",[[92784,92862,1],[92864,92873,1]]),_(d,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),_(d,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),_(d,"Thaana",[[1920,1969,1]]),_(d,"Thai",[[3585,3642,1],[3648,3675,1]]),_(d,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),_(d,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),_(d,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),_(d,"Toto",[[123536,123566,1]]),_(d,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),_(d,"Vai",[[42240,42539,1]]),_(d,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),_(d,"Wancho",[[123584,123641,1],[123647,123647,1]]),_(d,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),_(d,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),_(d,"Yi",[[40960,42124,1],[42128,42182,1]]),_(d,"Zanabazar_Square",[[72192,72263,1]]),_(d,"CATEGORIES",new Map([["C",d.C],["Cc",d.Cc],["Cf",d.Cf],["Co",d.Co],["Cs",d.Cs],["L",d.L],["Ll",d.Ll],["Lm",d.Lm],["Lo",d.Lo],["Lt",d.Lt],["Lu",d.Lu],["M",d.M],["Mc",d.Mc],["Me",d.Me],["Mn",d.Mn],["N",d.N],["Nd",d.Nd],["Nl",d.Nl],["No",d.No],["P",d.P],["Pc",d.Pc],["Pd",d.Pd],["Pe",d.Pe],["Pf",d.Pf],["Pi",d.Pi],["Po",d.Po],["Ps",d.Ps],["S",d.S],["Sc",d.Sc],["Sk",d.Sk],["Sm",d.Sm],["So",d.So],["Z",d.Z],["Zl",d.Zl],["Zp",d.Zp],["Zs",d.Zs]])),_(d,"SCRIPTS",new Map([["Adlam",d.Adlam],["Ahom",d.Ahom],["Anatolian_Hieroglyphs",d.Anatolian_Hieroglyphs],["Arabic",d.Arabic],["Armenian",d.Armenian],["Avestan",d.Avestan],["Balinese",d.Balinese],["Bamum",d.Bamum],["Bassa_Vah",d.Bassa_Vah],["Batak",d.Batak],["Bengali",d.Bengali],["Bhaiksuki",d.Bhaiksuki],["Bopomofo",d.Bopomofo],["Brahmi",d.Brahmi],["Braille",d.Braille],["Buginese",d.Buginese],["Buhid",d.Buhid],["Canadian_Aboriginal",d.Canadian_Aboriginal],["Carian",d.Carian],["Caucasian_Albanian",d.Caucasian_Albanian],["Chakma",d.Chakma],["Cham",d.Cham],["Cherokee",d.Cherokee],["Chorasmian",d.Chorasmian],["Common",d.Common],["Coptic",d.Coptic],["Cuneiform",d.Cuneiform],["Cypriot",d.Cypriot],["Cypro_Minoan",d.Cypro_Minoan],["Cyrillic",d.Cyrillic],["Deseret",d.Deseret],["Devanagari",d.Devanagari],["Dives_Akuru",d.Dives_Akuru],["Dogra",d.Dogra],["Duployan",d.Duployan],["Egyptian_Hieroglyphs",d.Egyptian_Hieroglyphs],["Elbasan",d.Elbasan],["Elymaic",d.Elymaic],["Ethiopic",d.Ethiopic],["Georgian",d.Georgian],["Glagolitic",d.Glagolitic],["Gothic",d.Gothic],["Grantha",d.Grantha],["Greek",d.Greek],["Gujarati",d.Gujarati],["Gunjala_Gondi",d.Gunjala_Gondi],["Gurmukhi",d.Gurmukhi],["Han",d.Han],["Hangul",d.Hangul],["Hanifi_Rohingya",d.Hanifi_Rohingya],["Hanunoo",d.Hanunoo],["Hatran",d.Hatran],["Hebrew",d.Hebrew],["Hiragana",d.Hiragana],["Imperial_Aramaic",d.Imperial_Aramaic],["Inherited",d.Inherited],["Inscriptional_Pahlavi",d.Inscriptional_Pahlavi],["Inscriptional_Parthian",d.Inscriptional_Parthian],["Javanese",d.Javanese],["Kaithi",d.Kaithi],["Kannada",d.Kannada],["Katakana",d.Katakana],["Kawi",d.Kawi],["Kayah_Li",d.Kayah_Li],["Kharoshthi",d.Kharoshthi],["Khitan_Small_Script",d.Khitan_Small_Script],["Khmer",d.Khmer],["Khojki",d.Khojki],["Khudawadi",d.Khudawadi],["Lao",d.Lao],["Latin",d.Latin],["Lepcha",d.Lepcha],["Limbu",d.Limbu],["Linear_A",d.Linear_A],["Linear_B",d.Linear_B],["Lisu",d.Lisu],["Lycian",d.Lycian],["Lydian",d.Lydian],["Mahajani",d.Mahajani],["Makasar",d.Makasar],["Malayalam",d.Malayalam],["Mandaic",d.Mandaic],["Manichaean",d.Manichaean],["Marchen",d.Marchen],["Masaram_Gondi",d.Masaram_Gondi],["Medefaidrin",d.Medefaidrin],["Meetei_Mayek",d.Meetei_Mayek],["Mende_Kikakui",d.Mende_Kikakui],["Meroitic_Cursive",d.Meroitic_Cursive],["Meroitic_Hieroglyphs",d.Meroitic_Hieroglyphs],["Miao",d.Miao],["Modi",d.Modi],["Mongolian",d.Mongolian],["Mro",d.Mro],["Multani",d.Multani],["Myanmar",d.Myanmar],["Nabataean",d.Nabataean],["Nag_Mundari",d.Nag_Mundari],["Nandinagari",d.Nandinagari],["New_Tai_Lue",d.New_Tai_Lue],["Newa",d.Newa],["Nko",d.Nko],["Nushu",d.Nushu],["Nyiakeng_Puachue_Hmong",d.Nyiakeng_Puachue_Hmong],["Ogham",d.Ogham],["Ol_Chiki",d.Ol_Chiki],["Old_Hungarian",d.Old_Hungarian],["Old_Italic",d.Old_Italic],["Old_North_Arabian",d.Old_North_Arabian],["Old_Permic",d.Old_Permic],["Old_Persian",d.Old_Persian],["Old_Sogdian",d.Old_Sogdian],["Old_South_Arabian",d.Old_South_Arabian],["Old_Turkic",d.Old_Turkic],["Old_Uyghur",d.Old_Uyghur],["Oriya",d.Oriya],["Osage",d.Osage],["Osmanya",d.Osmanya],["Pahawh_Hmong",d.Pahawh_Hmong],["Palmyrene",d.Palmyrene],["Pau_Cin_Hau",d.Pau_Cin_Hau],["Phags_Pa",d.Phags_Pa],["Phoenician",d.Phoenician],["Psalter_Pahlavi",d.Psalter_Pahlavi],["Rejang",d.Rejang],["Runic",d.Runic],["Samaritan",d.Samaritan],["Saurashtra",d.Saurashtra],["Sharada",d.Sharada],["Shavian",d.Shavian],["Siddham",d.Siddham],["SignWriting",d.SignWriting],["Sinhala",d.Sinhala],["Sogdian",d.Sogdian],["Sora_Sompeng",d.Sora_Sompeng],["Soyombo",d.Soyombo],["Sundanese",d.Sundanese],["Syloti_Nagri",d.Syloti_Nagri],["Syriac",d.Syriac],["Tagalog",d.Tagalog],["Tagbanwa",d.Tagbanwa],["Tai_Le",d.Tai_Le],["Tai_Tham",d.Tai_Tham],["Tai_Viet",d.Tai_Viet],["Takri",d.Takri],["Tamil",d.Tamil],["Tangsa",d.Tangsa],["Tangut",d.Tangut],["Telugu",d.Telugu],["Thaana",d.Thaana],["Thai",d.Thai],["Tibetan",d.Tibetan],["Tifinagh",d.Tifinagh],["Tirhuta",d.Tirhuta],["Toto",d.Toto],["Ugaritic",d.Ugaritic],["Vai",d.Vai],["Vithkuqi",d.Vithkuqi],["Wancho",d.Wancho],["Warang_Citi",d.Warang_Citi],["Yezidi",d.Yezidi],["Yi",d.Yi],["Zanabazar_Square",d.Zanabazar_Square]])),_(d,"FOLD_CATEGORIES",new Map([["L",d.foldL],["Ll",d.foldLl],["Lt",d.foldLt],["Lu",d.foldLu],["M",d.foldM],["Mn",d.foldMn]])),_(d,"FOLD_SCRIPT",new Map([["Common",d.foldCommon],["Greek",d.foldGreek],["Inherited",d.foldInherited]]));let $t=d;class Y{static is32(t,e){let r=0,s=t.length;for(;r<s;){let i=r+Math.floor((s-r)/2),o=t[i];if(o[0]<=e&&e<=o[1])return(e-o[0])%o[2]===0;e<o[0]?s=i:r=i+1}return!1}static is(t,e){if(e<=this.MAX_LATIN1){for(let r of t)if(!(e>r[1]))return e<r[0]?!1:(e-r[0])%r[2]===0;return!1}return t.length>0&&e>=t[0][0]&&this.is32(t,e)}static isUpper(t){if(t<=this.MAX_LATIN1){const e=String.fromCodePoint(t);return e.toUpperCase()===e&&e.toLowerCase()!==e}return this.is($t.Upper,t)}static isPrint(t){return t<=this.MAX_LATIN1?t>=32&&t<127||t>=161&&t!==173:this.is($t.L,t)||this.is($t.M,t)||this.is($t.N,t)||this.is($t.P,t)||this.is($t.S,t)}static simpleFold(t){if($t.CASE_ORBIT.has(t))return $t.CASE_ORBIT.get(t);const e=b.toLowerCase(t);return e!==t?e:b.toUpperCase(t)}static equalsIgnoreCase(t,e){if(t<0||e<0||t===e)return!0;if(t<=this.MAX_ASCII&&e<=this.MAX_ASCII)return b.CODES.get("A")<=t&&t<=b.CODES.get("Z")&&(t|=32),b.CODES.get("A")<=e&&e<=b.CODES.get("Z")&&(e|=32),t===e;for(let r=this.simpleFold(t);r!==t;r=this.simpleFold(r))if(r===e)return!0;return!1}}_(Y,"MAX_RUNE",1114111),_(Y,"MAX_ASCII",127),_(Y,"MAX_LATIN1",255),_(Y,"MAX_BMP",65535),_(Y,"MIN_FOLD",65),_(Y,"MAX_FOLD",125251);class tt{static emptyInts(){return[]}static isalnum(t){return b.CODES.get("0")<=t&&t<=b.CODES.get("9")||b.CODES.get("a")<=t&&t<=b.CODES.get("z")||b.CODES.get("A")<=t&&t<=b.CODES.get("Z")}static unhex(t){return b.CODES.get("0")<=t&&t<=b.CODES.get("9")?t-b.CODES.get("0"):b.CODES.get("a")<=t&&t<=b.CODES.get("f")?t-b.CODES.get("a")+10:b.CODES.get("A")<=t&&t<=b.CODES.get("F")?t-b.CODES.get("A")+10:-1}static escapeRune(t){let e="";if(Y.isPrint(t))this.METACHARACTERS.indexOf(String.fromCodePoint(t))>=0&&(e+="\\"),e+=String.fromCodePoint(t);else switch(t){case b.CODES.get('"'):e+='\\"';break;case b.CODES.get("\\"):e+="\\\\";break;case b.CODES.get("	"):e+="\\t";break;case b.CODES.get(`
`):e+="\\n";break;case b.CODES.get("\r"):e+="\\r";break;case b.CODES.get("\b"):e+="\\b";break;case b.CODES.get("\f"):e+="\\f";break;default:{let r=t.toString(16);t<256?(e+="\\x",r.length===1&&(e+="0"),e+=r):e+=`\\x{${r}}`;break}}return e}static stringToRunes(t){return String(t).split("").map(e=>e.codePointAt(0))}static runeToString(t){return String.fromCodePoint(t)}static isWordRune(t){return b.CODES.get("a")<=t&&t<=b.CODES.get("z")||b.CODES.get("A")<=t&&t<=b.CODES.get("Z")||b.CODES.get("0")<=t&&t<=b.CODES.get("9")||t===b.CODES.get("_")}static emptyOpContext(t,e){let r=0;return t<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),t===b.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),e<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),e===b.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(t)!==this.isWordRune(e)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(t){return t.split("").map(e=>this.METACHARACTERS.indexOf(e)>=0?`\\${e}`:e).join("")}static charCount(t){return t>Y.MAX_BMP?2:1}static stringToUtf8ByteArray(t){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(t));{let e=[],r=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e}}static utf8ByteArrayToString(t){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(t));{let e=[],r=0,s=0;for(;r<t.length;){let i=t[r++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=t[r++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=t[r++],u=t[r++],c=t[r++],h=((i&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{let o=t[r++],u=t[r++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return e.join("")}}}_(tt,"METACHARACTERS","\\.+*?()|[]{}^$"),_(tt,"EMPTY_BEGIN_LINE",1),_(tt,"EMPTY_END_LINE",2),_(tt,"EMPTY_BEGIN_TEXT",4),_(tt,"EMPTY_END_TEXT",8),_(tt,"EMPTY_WORD_BOUNDARY",16),_(tt,"EMPTY_NO_WORD_BOUNDARY",32),_(tt,"EMPTY_ALL",-1);const Z2=(n=[],t=0)=>{const e={};for(let r=0;r<n.length;r++){const s=n[r],i=t+r;e[s]=i,e[i]=s}return Object.freeze(e)},Ps=class Ps{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Ps.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Ps.Encoding.UTF_16}};_(Ps,"Encoding",Z2(["UTF_16","UTF_8"]));let An=Ps;class El extends An{constructor(t=null){super(),this.bytes=t}getEncoding(){return An.Encoding.UTF_8}asCharSequence(){return tt.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class t3 extends An{constructor(t=null){super(),this.charSequence=t}getEncoding(){return An.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(t=>t.codePointAt(0))}length(){return this.charSequence.length}}class ro{static utf16(t){return new t3(t)}static utf8(t){return Array.isArray(t)?new El(t):new El(tt.stringToUtf8ByteArray(t))}}class So extends Error{constructor(t){super(t),this.name="RE2JSException"}}class yt extends So{constructor(t,e=null){let r=`error parsing regexp: ${t}`;e&&(r+=`: \`${e}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=t,this.input=e}getDescription(){return this.error}getPattern(){return this.input}}class e3 extends So{constructor(t){super(t),this.name="RE2JSCompileException"}}class Be extends So{constructor(t){super(t),this.name="RE2JSGroupException"}}class n3 extends So{constructor(t){super(t),this.name="RE2JSFlagsException"}}class r3{static quoteReplacement(t){return t.indexOf("\\")<0&&t.indexOf("$")<0?t:t.split("").map(e=>{const r=e.codePointAt(0);return r===b.CODES["\\"]||r===b.CODES.$?`\\${e}`:e}).join("")}constructor(t,e){if(t===null)throw new Error("pattern is null");this.patternInput=t;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,e instanceof An?this.resetMatcherInput(e):Array.isArray(e)?this.resetMatcherInput(ro.utf8(e)):this.resetMatcherInput(ro.utf16(e))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(t){if(t===null)throw new Error("input is null");return this.matcherInput=t,this.reset(),this}start(t=0){if(typeof t=="string"){const e=this.namedGroups[t];if(!Number.isFinite(e))throw new Be(`group '${t}' not found`);t=e}return this.loadGroup(t),this.groups[2*t]}end(t=0){if(typeof t=="string"){const e=this.namedGroups[t];if(!Number.isFinite(e))throw new Be(`group '${t}' not found`);t=e}return this.loadGroup(t),this.groups[2*t+1]}group(t=0){if(typeof t=="string"){const s=this.namedGroups[t];if(!Number.isFinite(s))throw new Be(`group '${t}' not found`);t=s}const e=this.start(t),r=this.end(t);return e<0&&r<0?null:this.substring(e,r)}groupCount(){return this.patternGroupCount}loadGroup(t){if(t<0||t>this.patternGroupCount)throw new Be(`Group index out of bounds: ${t}`);if(!this.hasMatch)throw new Be("perhaps no match attempted");if(t===0||this.hasGroups)return;let e=this.groups[1]+1;e>this.matcherInputLength&&(e=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],e,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new Be("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,$.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,$.ANCHOR_START)}find(t=null){if(t!==null){if(t<0||t>this.matcherInputLength)throw new Be(`start index out of bounds: ${t}`);return this.reset(),this.genMatch(t,0)}return t=0,this.hasMatch&&(t=this.groups[1],this.groups[0]===this.groups[1]&&t++),this.genMatch(t,$.UNANCHORED)}genMatch(t,e){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,t,this.matcherInputLength,e,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=e,!0):!1}substring(t,e){return this.matcherInput.isUTF8Encoding()?tt.utf8ByteArrayToString(this.matcherInput.asBytes().slice(t,e)):this.matcherInput.asCharSequence().substring(t,e).toString()}inputLength(){return this.matcherInputLength}appendReplacement(t,e=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=e?this.appendReplacementInternalPerl(t):this.appendReplacementInternal(t),r}appendReplacementInternal(t){let e="",r=0;const s=t.length;for(let i=0;i<s-1;i++){if(t.codePointAt(i)===b.CODES.get("\\")){r<i&&(e+=t.substring(r,i)),i++,r=i;continue}if(t.codePointAt(i)===b.CODES.get("$")){let o=t.codePointAt(i+1);if(b.CODES.get("0")<=o&&o<=b.CODES.get("9")){let u=o-b.CODES.get("0");for(r<i&&(e+=t.substring(r,i)),i+=2;i<s&&(o=t.codePointAt(i),!(o<b.CODES.get("0")||o>b.CODES.get("9")||u*10+o-b.CODES.get("0")>this.patternGroupCount));i++)u=u*10+o-b.CODES.get("0");if(u>this.patternGroupCount)throw new Be(`n > number of groups: ${u}`);const c=this.group(u);c!==null&&(e+=c),r=i,i--;continue}else if(o===b.CODES.get("{")){r<i&&(e+=t.substring(r,i)),i++;let u=i+1;for(;u<t.length&&t.codePointAt(u)!==b.CODES.get("}")&&t.codePointAt(u)!==b.CODES.get(" ");)u++;if(u===t.length||t.codePointAt(u)!==b.CODES.get("}"))throw new Be("named capture group is missing trailing '}'");const c=t.substring(i+1,u);e+=this.group(c),r=u+1}}}return r<s&&(e+=t.substring(r,s)),e}appendReplacementInternalPerl(t){let e="",r=0;const s=t.length;for(let i=0;i<s-1;i++)if(t.codePointAt(i)===b.CODES.get("$")){let o=t.codePointAt(i+1);if(b.CODES.get("$")===o){r<i&&(e+=t.substring(r,i)),e+="$",i++,r=i+1;continue}else if(b.CODES.get("&")===o){r<i&&(e+=t.substring(r,i));const u=this.group(0);u!==null?e+=u:e+="$&",i++,r=i+1;continue}else if(b.CODES.get("1")<=o&&o<=b.CODES.get("9")){let u=o-b.CODES.get("0");for(r<i&&(e+=t.substring(r,i)),i+=2;i<s&&(o=t.codePointAt(i),!(o<b.CODES.get("0")||o>b.CODES.get("9")||u*10+o-b.CODES.get("0")>this.patternGroupCount));i++)u=u*10+o-b.CODES.get("0");if(u>this.patternGroupCount){e+=`$${u}`,r=i,i--;continue}const c=this.group(u);c!==null&&(e+=c),r=i,i--;continue}else if(o===b.CODES.get("<")){r<i&&(e+=t.substring(r,i)),i++;let u=i+1;for(;u<t.length&&t.codePointAt(u)!==b.CODES.get(">")&&t.codePointAt(u)!==b.CODES.get(" ");)u++;if(u===t.length||t.codePointAt(u)!==b.CODES.get(">")){e+=t.substring(i-1,u+1),r=u+1;continue}const c=t.substring(i+1,u);Object.prototype.hasOwnProperty.call(this.namedGroups,c)?e+=this.group(c):e+=`$<${c}>`,r=u+1}}return r<s&&(e+=t.substring(r,s)),e}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(t,e=!1){return this.replace(t,!0,e)}replaceFirst(t,e=!1){return this.replace(t,!1,e)}replace(t,e=!0,r=!1){let s="";for(this.reset();this.find()&&(s+=this.appendReplacement(t,r),!!e););return s+=this.appendTail(),s}}class dn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class s3 extends dn{constructor(t,e=0,r=t.length){super(),this.bytes=t,this.start=e,this.end=r}step(t){if(t+=this.start,t>=this.end)return dn.EOF();let e=this.bytes[t++]&255;return e&128?(e&224)===192?(e=e&31,t>=this.end?dn.EOF():(e=e<<6|this.bytes[t++]&63,e<<3|2)):(e&240)===224?(e=e&15,t+1>=this.end?dn.EOF():(e=e<<6|this.bytes[t++]&63,e=e<<6|this.bytes[t++]&63,e<<3|3)):(e=e&7,t+2>=this.end?dn.EOF():(e=e<<6|this.bytes[t++]&63,e=e<<6|this.bytes[t++]&63,e=e<<6|this.bytes[t++]&63,e<<3|4)):e<<3|1}index(t,e){e+=this.start;const r=this.indexOf(this.bytes,t.prefixUTF8,e);return r<0?r:r-e}context(t){t+=this.start;let e=-1;if(t>this.start&&t<=this.end){let s=t-1;if(e=this.bytes[s--],e>=128){let i=t-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),e=this.step(s)>>3}}const r=t<this.end?this.step(t)>>3:-1;return tt.emptyOpContext(e,r)}indexOf(t,e,r=0){let s=e.length;if(s===0)return-1;let i=t.length;for(let o=r;o<=i-s;o++)for(let u=0;u<s&&t[o+u]===e[u];u++)if(u===s-1)return o;return-1}}class i3 extends dn{constructor(t,e=0,r=t.length){super(),this.charSequence=t,this.start=e,this.end=r}step(t){if(t+=this.start,t<this.end){const e=this.charSequence.codePointAt(t);return e<<3|tt.charCount(e)}else return dn.EOF()}index(t,e){e+=this.start;const r=this.charSequence.indexOf(t.prefix,e);return r<0?r:r-e}context(t){t+=this.start;const e=t>0&&t<=this.charSequence.length?this.charSequence.codePointAt(t-1):-1,r=t<this.charSequence.length?this.charSequence.codePointAt(t):-1;return tt.emptyOpContext(e,r)}}class Tt{static fromUTF8(t,e=0,r=t.length){return new s3(t,e,r)}static fromUTF16(t,e=0,r=t.length){return new i3(t,e,r)}}const K=class K{static isPseudoOp(t){return t>=K.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(t){return t===b.CODES.get("-")?"\\":""}static fromRegexp(t){const e=new K(t.op);return e.flags=t.flags,e.subs=t.subs,e.runes=t.runes,e.cap=t.cap,e.min=t.min,e.max=t.max,e.name=t.name,e.namedGroups=t.namedGroups,e}constructor(t){this.op=t,this.flags=0,this.subs=K.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=K.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let t="";switch(this.op){case K.Op.NO_MATCH:t+="[^\\x00-\\x{10FFFF}]";break;case K.Op.EMPTY_MATCH:t+="(?:)";break;case K.Op.STAR:case K.Op.PLUS:case K.Op.QUEST:case K.Op.REPEAT:{const e=this.subs[0];switch(e.op>K.Op.CAPTURE||e.op===K.Op.LITERAL&&e.runes.length>1?t+=`(?:${e.appendTo()})`:t+=e.appendTo(),this.op){case K.Op.STAR:t+="*";break;case K.Op.PLUS:t+="+";break;case K.Op.QUEST:t+="?";break;case K.Op.REPEAT:t+=`{${this.min}`,this.min!==this.max&&(t+=",",this.max>=0&&(t+=this.max)),t+="}";break}this.flags&$.NON_GREEDY&&(t+="?");break}case K.Op.CONCAT:{for(let e of this.subs)e.op===K.Op.ALTERNATE?t+=`(?:${e.appendTo()})`:t+=e.appendTo();break}case K.Op.ALTERNATE:{let e="";for(let r of this.subs)t+=e,e="|",t+=r.appendTo();break}case K.Op.LITERAL:this.flags&$.FOLD_CASE&&(t+="(?i:");for(let e of this.runes)t+=tt.escapeRune(e);this.flags&$.FOLD_CASE&&(t+=")");break;case K.Op.ANY_CHAR_NOT_NL:t+="(?-s:.)";break;case K.Op.ANY_CHAR:t+="(?s:.)";break;case K.Op.CAPTURE:this.name===null||this.name.length===0?t+="(":t+=`(?P<${this.name}>`,this.subs[0].op!==K.Op.EMPTY_MATCH&&(t+=this.subs[0].appendTo()),t+=")";break;case K.Op.BEGIN_TEXT:t+="\\A";break;case K.Op.END_TEXT:this.flags&$.WAS_DOLLAR?t+="(?-m:$)":t+="\\z";break;case K.Op.BEGIN_LINE:t+="^";break;case K.Op.END_LINE:t+="$";break;case K.Op.WORD_BOUNDARY:t+="\\b";break;case K.Op.NO_WORD_BOUNDARY:t+="\\B";break;case K.Op.CHAR_CLASS:if(this.runes.length%2!==0){t+="[invalid char class]";break}if(t+="[",this.runes.length===0)t+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===Y.MAX_RUNE){t+="^";for(let e=1;e<this.runes.length-1;e+=2){const r=this.runes[e]+1,s=this.runes[e+1]-1;t+=K.quoteIfHyphen(r),t+=tt.escapeRune(r),r!==s&&(t+="-",t+=K.quoteIfHyphen(s),t+=tt.escapeRune(s))}}else for(let e=0;e<this.runes.length;e+=2){const r=this.runes[e],s=this.runes[e+1];t+=K.quoteIfHyphen(r),t+=tt.escapeRune(r),r!==s&&(t+="-",t+=K.quoteIfHyphen(s),t+=tt.escapeRune(s))}t+="]";break;default:t+=this.op;break}return t}maxCap(){let t=0;if(this.op===K.Op.CAPTURE&&(t=this.cap),this.subs!==null)for(let e of this.subs){const r=e.maxCap();t<r&&(t=r)}return t}equals(t){if(!(t!==null&&t instanceof K)||this.op!==t.op)return!1;switch(this.op){case K.Op.END_TEXT:{if((this.flags&$.WAS_DOLLAR)!==(t.flags&$.WAS_DOLLAR))return!1;break}case K.Op.LITERAL:case K.Op.CHAR_CLASS:{if(this.runes===null&&t.runes===null)break;if(this.runes===null||t.runes===null||this.runes.length!==t.runes.length)return!1;for(let e=0;e<this.runes.length;e++)if(this.runes[e]!==t.runes[e])return!1;break}case K.Op.ALTERNATE:case K.Op.CONCAT:{if(this.subs.length!==t.subs.length)return!1;for(let e=0;e<this.subs.length;++e)if(!this.subs[e].equals(t.subs[e]))return!1;break}case K.Op.STAR:case K.Op.PLUS:case K.Op.QUEST:{if((this.flags&$.NON_GREEDY)!==(t.flags&$.NON_GREEDY)||!this.subs[0].equals(t.subs[0]))return!1;break}case K.Op.REPEAT:{if((this.flags&$.NON_GREEDY)!==(t.flags&$.NON_GREEDY)||this.min!==t.min||this.max!==t.max||!this.subs[0].equals(t.subs[0]))return!1;break}case K.Op.CAPTURE:{if(this.cap!==t.cap||(this.name===null?t.name!==null:this.name!==t.name)||!this.subs[0].equals(t.subs[0]))return!1;break}}return!0}};_(K,"Op",Z2(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let k=K;const lt=class lt{static isRuneOp(t){return lt.RUNE<=t&&t<=lt.RUNE_ANY_NOT_NL}static escapeRunes(t){let e='"';for(let r of t)e+=tt.escapeRune(r);return e+='"',e}constructor(t){this.op=t,this.out=0,this.arg=0,this.runes=null}matchRune(t){if(this.runes.length===1){const s=this.runes[0];return this.arg&$.FOLD_CASE?Y.equalsIgnoreCase(s,t):t===s}for(let s=0;s<this.runes.length&&s<=8;s+=2){if(t<this.runes[s])return!1;if(t<=this.runes[s+1])return!0}let e=0,r=this.runes.length/2|0;for(;e<r;){const s=e+((r-e)/2|0);if(this.runes[2*s]<=t){if(t<=this.runes[2*s+1])return!0;e=s+1}else r=s}return!1}toString(){switch(this.op){case lt.ALT:return`alt -> ${this.out}, ${this.arg}`;case lt.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case lt.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case lt.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case lt.MATCH:return"match";case lt.FAIL:return"fail";case lt.NOP:return`nop -> ${this.out}`;case lt.RUNE:return this.runes===null?"rune <null>":["rune ",lt.escapeRunes(this.runes),this.arg&$.FOLD_CASE?"/i":""," -> ",this.out].join("");case lt.RUNE1:return`rune1 ${lt.escapeRunes(this.runes)} -> ${this.out}`;case lt.RUNE_ANY:return`any -> ${this.out}`;case lt.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};_(lt,"ALT",1),_(lt,"ALT_MATCH",2),_(lt,"CAPTURE",3),_(lt,"EMPTY_WIDTH",4),_(lt,"FAIL",5),_(lt,"MATCH",6),_(lt,"NOP",7),_(lt,"RUNE",8),_(lt,"RUNE1",9),_(lt,"RUNE_ANY",10),_(lt,"RUNE_ANY_NOT_NL",11);let et=lt;class o3{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(t){return this.inst[t]}numInst(){return this.inst.length}addInst(t){this.inst.push(new et(t))}skipNop(t){let e=this.inst[t];for(;e.op===et.NOP||e.op===et.CAPTURE;)e=this.inst[t],t=e.out;return e}prefix(){let t="",e=this.skipNop(this.start);if(!et.isRuneOp(e.op)||e.runes.length!==1)return[e.op===et.MATCH,t];for(;et.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&$.FOLD_CASE);)t+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===et.MATCH,t]}startCond(){let t=0,e=this.start;t:for(;;){const r=this.inst[e];switch(r.op){case et.EMPTY_WIDTH:t|=r.arg;break;case et.FAIL:return-1;case et.CAPTURE:case et.NOP:break;default:break t}e=r.out}return t}next(t){const e=this.inst[t>>1];return t&1?e.arg:e.out}patch(t,e){for(;t!==0;){const r=this.inst[t>>1];t&1?(t=r.arg,r.arg=e):(t=r.out,r.out=e)}}append(t,e){if(t===0)return e;if(e===0)return t;let r=t;for(;;){const i=this.next(r);if(i===0)break;r=i}const s=this.inst[r>>1];return r&1?s.arg=e:s.out=e,t}toString(){let t="";for(let e=0;e<this.inst.length;e++){const r=t.length;t+=e,e===this.start&&(t+="*"),t+="        ".substring(t.length-r),t+=this.inst[e],t+=`
`}return t}}class bi{constructor(t=0,e=0,r=!1){this.i=t,this.out=e,this.nullable=r}}class _s{static ANY_RUNE_NOT_NL(){return[0,b.CODES.get(`
`)-1,b.CODES.get(`
`)+1,Y.MAX_RUNE]}static ANY_RUNE(){return[0,Y.MAX_RUNE]}static compileRegexp(t){const e=new _s,r=e.compile(t);return e.prog.patch(r.out,e.newInst(et.MATCH).i),e.prog.start=r.i,e.prog}constructor(){this.prog=new o3,this.newInst(et.FAIL)}newInst(t){return this.prog.addInst(t),new bi(this.prog.numInst()-1,0,!0)}nop(){const t=this.newInst(et.NOP);return t.out=t.i<<1,t}fail(){return new bi}cap(t){const e=this.newInst(et.CAPTURE);return e.out=e.i<<1,this.prog.getInst(e.i).arg=t,this.prog.numCap<t+1&&(this.prog.numCap=t+1),e}cat(t,e){return t.i===0||e.i===0?this.fail():(this.prog.patch(t.out,e.i),new bi(t.i,e.out,t.nullable&&e.nullable))}alt(t,e){if(t.i===0)return e;if(e.i===0)return t;const r=this.newInst(et.ALT),s=this.prog.getInst(r.i);return s.out=t.i,s.arg=e.i,r.out=this.prog.append(t.out,e.out),r.nullable=t.nullable||e.nullable,r}loop(t,e){const r=this.newInst(et.ALT),s=this.prog.getInst(r.i);return e?(s.arg=t.i,r.out=r.i<<1):(s.out=t.i,r.out=r.i<<1|1),this.prog.patch(t.out,r.i),r}quest(t,e){const r=this.newInst(et.ALT),s=this.prog.getInst(r.i);return e?(s.arg=t.i,r.out=r.i<<1):(s.out=t.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,t.out),r}star(t,e){return t.nullable?this.quest(this.plus(t,e),e):this.loop(t,e)}plus(t,e){return new bi(t.i,this.loop(t,e).out,t.nullable)}empty(t){const e=this.newInst(et.EMPTY_WIDTH);return this.prog.getInst(e.i).arg=t,e.out=e.i<<1,e}rune(t,e){const r=this.newInst(et.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=t,e&=$.FOLD_CASE,(t.length!==1||Y.simpleFold(t[0])===t[0])&&(e&=-2),s.arg=e,r.out=r.i<<1,!(e&$.FOLD_CASE)&&t.length===1||t.length===2&&t[0]===t[1]?s.op=et.RUNE1:t.length===2&&t[0]===0&&t[1]===Y.MAX_RUNE?s.op=et.RUNE_ANY:t.length===4&&t[0]===0&&t[1]===b.CODES.get(`
`)-1&&t[2]===b.CODES.get(`
`)+1&&t[3]===Y.MAX_RUNE&&(s.op=et.RUNE_ANY_NOT_NL),r}compile(t){switch(t.op){case k.Op.NO_MATCH:return this.fail();case k.Op.EMPTY_MATCH:return this.nop();case k.Op.LITERAL:if(t.runes.length===0)return this.nop();{let e=null;for(let r of t.runes){const s=this.rune([r],t.flags);e=e===null?s:this.cat(e,s)}return e}case k.Op.CHAR_CLASS:return this.rune(t.runes,t.flags);case k.Op.ANY_CHAR_NOT_NL:return this.rune(_s.ANY_RUNE_NOT_NL(),0);case k.Op.ANY_CHAR:return this.rune(_s.ANY_RUNE(),0);case k.Op.BEGIN_LINE:return this.empty(tt.EMPTY_BEGIN_LINE);case k.Op.END_LINE:return this.empty(tt.EMPTY_END_LINE);case k.Op.BEGIN_TEXT:return this.empty(tt.EMPTY_BEGIN_TEXT);case k.Op.END_TEXT:return this.empty(tt.EMPTY_END_TEXT);case k.Op.WORD_BOUNDARY:return this.empty(tt.EMPTY_WORD_BOUNDARY);case k.Op.NO_WORD_BOUNDARY:return this.empty(tt.EMPTY_NO_WORD_BOUNDARY);case k.Op.CAPTURE:{const e=this.cap(t.cap<<1),r=this.compile(t.subs[0]),s=this.cap(t.cap<<1|1);return this.cat(this.cat(e,r),s)}case k.Op.STAR:return this.star(this.compile(t.subs[0]),(t.flags&$.NON_GREEDY)!==0);case k.Op.PLUS:return this.plus(this.compile(t.subs[0]),(t.flags&$.NON_GREEDY)!==0);case k.Op.QUEST:return this.quest(this.compile(t.subs[0]),(t.flags&$.NON_GREEDY)!==0);case k.Op.CONCAT:{if(t.subs.length===0)return this.nop();{let e=null;for(let r of t.subs){const s=this.compile(r);e=e===null?s:this.cat(e,s)}return e}}case k.Op.ALTERNATE:{if(t.subs.length===0)return this.nop();{let e=null;for(let r of t.subs){const s=this.compile(r);e=e===null?s:this.alt(e,s)}return e}}default:throw new e3("regexp: unhandled case in compile")}}}class Te{static simplify(t){if(t===null)return null;switch(t.op){case k.Op.CAPTURE:case k.Op.CONCAT:case k.Op.ALTERNATE:{let e=t;for(let r=0;r<t.subs.length;r++){const s=t.subs[r],i=Te.simplify(s);e===t&&i!==s&&(e=k.fromRegexp(t),e.runes=null,e.subs=t.subs.slice(0,t.subs.length)),e!==t&&(e.subs[r]=i)}return e}case k.Op.STAR:case k.Op.PLUS:case k.Op.QUEST:{const e=Te.simplify(t.subs[0]);return Te.simplify1(t.op,t.flags,e,t)}case k.Op.REPEAT:{if(t.min===0&&t.max===0)return new k(k.Op.EMPTY_MATCH);const e=Te.simplify(t.subs[0]);if(t.max===-1){if(t.min===0)return Te.simplify1(k.Op.STAR,t.flags,e,null);if(t.min===1)return Te.simplify1(k.Op.PLUS,t.flags,e,null);const s=new k(k.Op.CONCAT),i=[];for(let o=0;o<t.min-1;o++)i.push(e);return i.push(Te.simplify1(k.Op.PLUS,t.flags,e,null)),s.subs=i.slice(0),s}if(t.min===1&&t.max===1)return e;let r=null;if(t.min>0){r=[];for(let s=0;s<t.min;s++)r.push(e)}if(t.max>t.min){let s=Te.simplify1(k.Op.QUEST,t.flags,e,null);for(let i=t.min+1;i<t.max;i++){const o=new k(k.Op.CONCAT);o.subs=[e,s],s=Te.simplify1(k.Op.QUEST,t.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new k(k.Op.CONCAT);return s.subs=r.slice(0),s}return new k(k.Op.NO_MATCH)}}return t}static simplify1(t,e,r,s){return r.op===k.Op.EMPTY_MATCH||t===r.op&&(e&$.NON_GREEDY)===(r.flags&$.NON_GREEDY)?r:(s!==null&&s.op===t&&(s.flags&$.NON_GREEDY)===(e&$.NON_GREEDY)&&r===s.subs[0]||(s=new k(t),s.flags=e,s.subs=[r]),s)}}class at{constructor(t,e){this.sign=t,this.cls=e}}const yl=[48,57],Tl=[9,10,12,13,32,32],Il=[48,57,65,90,95,95,97,122],wl=new Map([["\\d",new at(1,yl)],["\\D",new at(-1,yl)],["\\s",new at(1,Tl)],["\\S",new at(-1,Tl)],["\\w",new at(1,Il)],["\\W",new at(-1,Il)]]),Al=[48,57,65,90,97,122],vl=[65,90,97,122],Rl=[0,127],Sl=[9,9,32,32],Cl=[0,31,127,127],Pl=[48,57],bl=[33,126],Nl=[97,122],Ol=[32,126],Vl=[33,47,58,64,91,96,123,126],kl=[9,13,32,32],Dl=[65,90],xl=[48,57,65,90,95,95,97,122],Ll=[48,57,65,70,97,102],Ml=new Map([["[:alnum:]",new at(1,Al)],["[:^alnum:]",new at(-1,Al)],["[:alpha:]",new at(1,vl)],["[:^alpha:]",new at(-1,vl)],["[:ascii:]",new at(1,Rl)],["[:^ascii:]",new at(-1,Rl)],["[:blank:]",new at(1,Sl)],["[:^blank:]",new at(-1,Sl)],["[:cntrl:]",new at(1,Cl)],["[:^cntrl:]",new at(-1,Cl)],["[:digit:]",new at(1,Pl)],["[:^digit:]",new at(-1,Pl)],["[:graph:]",new at(1,bl)],["[:^graph:]",new at(-1,bl)],["[:lower:]",new at(1,Nl)],["[:^lower:]",new at(-1,Nl)],["[:print:]",new at(1,Ol)],["[:^print:]",new at(-1,Ol)],["[:punct:]",new at(1,Vl)],["[:^punct:]",new at(-1,Vl)],["[:space:]",new at(1,kl)],["[:^space:]",new at(-1,kl)],["[:upper:]",new at(1,Dl)],["[:^upper:]",new at(-1,Dl)],["[:word:]",new at(1,xl)],["[:^word:]",new at(-1,xl)],["[:xdigit:]",new at(1,Ll)],["[:^xdigit:]",new at(-1,Ll)]]);class qt{static charClassToString(t,e){let r="[";for(let s=0;s<e;s+=2){s>0&&(r+=" ");const i=t[s],o=t[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(t,e,r,s){const i=t[e]-r;return i!==0?i:s-t[e+1]}static qsortIntPair(t,e,r){const s=((e+r)/2|0)&-2,i=t[s],o=t[s+1];let u=e,c=r;for(;u<=c;){for(;u<r&&qt.cmp(t,u,i,o)<0;)u+=2;for(;c>e&&qt.cmp(t,c,i,o)>0;)c-=2;if(u<=c){if(u!==c){let h=t[u];t[u]=t[c],t[c]=h,h=t[u+1],t[u+1]=t[c+1],t[c+1]=h}u+=2,c-=2}}e<c&&qt.qsortIntPair(t,e,c),u<r&&qt.qsortIntPair(t,u,r)}constructor(t=tt.emptyInts()){this.r=t,this.len=t.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;qt.qsortIntPair(this.r,0,this.len-2);let t=2;for(let e=2;e<this.len;e+=2){const r=this.r[e],s=this.r[e+1];if(r<=this.r[t-1]+1){s>this.r[t-1]&&(this.r[t-1]=s);continue}this.r[t]=r,this.r[t+1]=s,t+=2}return this.len=t,this}appendLiteral(t,e){return e&$.FOLD_CASE?this.appendFoldedRange(t,t):this.appendRange(t,t)}appendRange(t,e){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(t<=i+1&&s<=e+1)return t<s&&(this.r[this.len-r]=t),e>i&&(this.r[this.len-r+1]=e),this}}return this.r[this.len++]=t,this.r[this.len++]=e,this}appendFoldedRange(t,e){if(t<=Y.MIN_FOLD&&e>=Y.MAX_FOLD)return this.appendRange(t,e);if(e<Y.MIN_FOLD||t>Y.MAX_FOLD)return this.appendRange(t,e);t<Y.MIN_FOLD&&(this.appendRange(t,Y.MIN_FOLD-1),t=Y.MIN_FOLD),e>Y.MAX_FOLD&&(this.appendRange(Y.MAX_FOLD+1,e),e=Y.MAX_FOLD);for(let r=t;r<=e;r++){this.appendRange(r,r);for(let s=Y.simpleFold(r);s!==r;s=Y.simpleFold(s))this.appendRange(s,s)}return this}appendClass(t){for(let e=0;e<t.length;e+=2)this.appendRange(t[e],t[e+1]);return this}appendFoldedClass(t){for(let e=0;e<t.length;e+=2)this.appendFoldedRange(t[e],t[e+1]);return this}appendNegatedClass(t){let e=0;for(let r=0;r<t.length;r+=2){const s=t[r],i=t[r+1];e<=s-1&&this.appendRange(e,s-1),e=i+1}return e<=Y.MAX_RUNE&&this.appendRange(e,Y.MAX_RUNE),this}appendTable(t){for(let e of t){const r=e[0],s=e[1],i=e[2];if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(t){let e=0;for(let r of t){const s=r[0],i=r[1],o=r[2];if(o===1){e<=s-1&&this.appendRange(e,s-1),e=i+1;continue}for(let u=s;u<=i;u+=o)e<=u-1&&this.appendRange(e,u-1),e=u+1}return e<=Y.MAX_RUNE&&this.appendRange(e,Y.MAX_RUNE),this}appendTableWithSign(t,e){return e<0?this.appendNegatedTable(t):this.appendTable(t)}negateClass(){let t=0,e=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];t<=s-1&&(this.r[e]=t,this.r[e+1]=s-1,e+=2),t=i+1}return this.len=e,t<=Y.MAX_RUNE&&(this.r[this.len++]=t,this.r[this.len++]=Y.MAX_RUNE),this}appendClassWithSign(t,e){return e<0?this.appendNegatedClass(t):this.appendClass(t)}appendGroup(t,e){let r=t.cls;return e&&(r=new qt().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,t.sign)}toString(){return qt.charClassToString(this.r,this.len)}}class Es{static of(t,e){return new Es(t,e)}constructor(t,e){this.first=t,this.second=e}}class a3{constructor(t){this.str=t,this.position=0}pos(){return this.position}rewindTo(t){this.position=t}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(t){this.position+=t}skipString(t){this.position+=t.length}pop(){const t=this.str.codePointAt(this.position);return this.position+=tt.charCount(t),t}lookingAt(t){return this.rest().startsWith(t)}rest(){return this.str.substring(this.position)}from(t){return this.str.substring(t,this.position)}toString(){return this.rest()}}const j=class j{static ANY_TABLE(){return[[0,Y.MAX_RUNE,1]]}static unicodeTable(t){return t==="Any"?Es.of(j.ANY_TABLE(),j.ANY_TABLE()):$t.CATEGORIES.has(t)?Es.of($t.CATEGORIES.get(t),$t.FOLD_CATEGORIES.get(t)):$t.SCRIPTS.has(t)?Es.of($t.SCRIPTS.get(t),$t.FOLD_SCRIPT.get(t)):null}static minFoldRune(t){if(t<Y.MIN_FOLD||t>Y.MAX_FOLD)return t;let e=t;const r=t;for(t=Y.simpleFold(t);t!==r;t=Y.simpleFold(t))e>t&&(e=t);return e}static leadingRegexp(t){if(t.op===k.Op.EMPTY_MATCH)return null;if(t.op===k.Op.CONCAT&&t.subs.length>0){const e=t.subs[0];return e.op===k.Op.EMPTY_MATCH?null:e}return t}static literalRegexp(t,e){const r=new k(k.Op.LITERAL);return r.flags=e,r.runes=tt.stringToRunes(t),r}static parse(t,e){return new j(t,e).parseInternal()}static parseRepeat(t){const e=t.pos();if(!t.more()||!t.lookingAt("{"))return-1;t.skip(1);const r=j.parseInt(t);if(r===-1||!t.more())return-1;let s;if(!t.lookingAt(","))s=r;else{if(t.skip(1),!t.more())return-1;if(t.lookingAt("}"))s=-1;else if((s=j.parseInt(t))===-1)return-1}if(!t.more()||!t.lookingAt("}"))return-1;if(t.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new yt(j.ERR_INVALID_REPEAT_SIZE,t.from(e));return r<<16|s&Y.MAX_BMP}static isValidCaptureName(t){if(t.length===0)return!1;for(let e=0;e<t.length;e++){const r=t.codePointAt(e);if(r!==b.CODES.get("_")&&!tt.isalnum(r))return!1}return!0}static parseInt(t){const e=t.pos();for(;t.more()&&t.peek()>=b.CODES.get("0")&&t.peek()<=b.CODES.get("9");)t.skip(1);const r=t.from(e);return r.length===0||r.length>1&&r.codePointAt(0)===b.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(t){return t.op===k.Op.LITERAL&&t.runes.length===1||t.op===k.Op.CHAR_CLASS||t.op===k.Op.ANY_CHAR_NOT_NL||t.op===k.Op.ANY_CHAR}static matchRune(t,e){switch(t.op){case k.Op.LITERAL:return t.runes.length===1&&t.runes[0]===e;case k.Op.CHAR_CLASS:for(let r=0;r<t.runes.length;r+=2)if(t.runes[r]<=e&&e<=t.runes[r+1])return!0;return!1;case k.Op.ANY_CHAR_NOT_NL:return e!==b.CODES.get(`
`);case k.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(t,e){switch(t.op){case k.Op.ANY_CHAR:break;case k.Op.ANY_CHAR_NOT_NL:j.matchRune(e,b.CODES.get(`
`))&&(t.op=k.Op.ANY_CHAR);break;case k.Op.CHAR_CLASS:e.op===k.Op.LITERAL?t.runes=new qt(t.runes).appendLiteral(e.runes[0],e.flags).toArray():t.runes=new qt(t.runes).appendClass(e.runes).toArray();break;case k.Op.LITERAL:if(e.runes[0]===t.runes[0]&&e.flags===t.flags)break;t.op=k.Op.CHAR_CLASS,t.runes=new qt().appendLiteral(t.runes[0],t.flags).appendLiteral(e.runes[0],e.flags).toArray();break}}static parseEscape(t){const e=t.pos();if(t.skip(1),!t.more())throw new yt(j.ERR_TRAILING_BACKSLASH);let r=t.pop();t:switch(r){case b.CODES.get("1"):case b.CODES.get("2"):case b.CODES.get("3"):case b.CODES.get("4"):case b.CODES.get("5"):case b.CODES.get("6"):case b.CODES.get("7"):if(!t.more()||t.peek()<b.CODES.get("0")||t.peek()>b.CODES.get("7"))break;case b.CODES.get("0"):{let s=r-b.CODES.get("0");for(let i=1;i<3&&!(!t.more()||t.peek()<b.CODES.get("0")||t.peek()>b.CODES.get("7"));i++)s=s*8+t.peek()-b.CODES.get("0"),t.skip(1);return s}case b.CODES.get("x"):{if(!t.more())break;if(r=t.pop(),r===b.CODES.get("{")){let o=0,u=0;for(;;){if(!t.more())break t;if(r=t.pop(),r===b.CODES.get("}"))break;const c=tt.unhex(r);if(c<0||(u=u*16+c,u>Y.MAX_RUNE))break t;o++}if(o===0)break t;return u}const s=tt.unhex(r);if(!t.more())break;r=t.pop();const i=tt.unhex(r);if(s<0||i<0)break;return s*16+i}case b.CODES.get("a"):return b.CODES.get("\x07");case b.CODES.get("f"):return b.CODES.get("\f");case b.CODES.get("n"):return b.CODES.get(`
`);case b.CODES.get("r"):return b.CODES.get("\r");case b.CODES.get("t"):return b.CODES.get("	");case b.CODES.get("v"):return b.CODES.get("\v");default:if(!tt.isalnum(r))return r;break}throw new yt(j.ERR_INVALID_ESCAPE,t.from(e))}static parseClassChar(t,e){if(!t.more())throw new yt(j.ERR_MISSING_BRACKET,t.from(e));return t.lookingAt("\\")?j.parseEscape(t):t.pop()}static concatRunes(t,e){return[...t,...e]}constructor(t,e=0){this.wholeRegexp=t,this.flags=e,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(t){let e=this.free;return e!==null&&e.subs!==null&&e.subs.length>0?(this.free=e.subs[0],e.reinit(),e.op=t):e=new k(t),e}reuse(t){t.subs!==null&&t.subs.length>0&&(t.subs[0]=this.free),this.free=t}pop(){return this.stack.pop()}popToPseudo(){const t=this.stack.length;let e=t;for(;e>0&&!k.isPseudoOp(this.stack[e-1].op);)e--;const r=this.stack.slice(e,t);return this.stack=this.stack.slice(0,e),r}push(t){if(t.op===k.Op.CHAR_CLASS&&t.runes.length===2&&t.runes[0]===t.runes[1]){if(this.maybeConcat(t.runes[0],this.flags&-2))return null;t.op=k.Op.LITERAL,t.runes=[t.runes[0]],t.flags=this.flags&-2}else if(t.op===k.Op.CHAR_CLASS&&t.runes.length===4&&t.runes[0]===t.runes[1]&&t.runes[2]===t.runes[3]&&Y.simpleFold(t.runes[0])===t.runes[2]&&Y.simpleFold(t.runes[2])===t.runes[0]||t.op===k.Op.CHAR_CLASS&&t.runes.length===2&&t.runes[0]+1===t.runes[1]&&Y.simpleFold(t.runes[0])===t.runes[1]&&Y.simpleFold(t.runes[1])===t.runes[0]){if(this.maybeConcat(t.runes[0],this.flags|$.FOLD_CASE))return null;t.op=k.Op.LITERAL,t.runes=[t.runes[0]],t.flags=this.flags|$.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(t),t}maybeConcat(t,e){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==k.Op.LITERAL||i.op!==k.Op.LITERAL||(s.flags&$.FOLD_CASE)!==(i.flags&$.FOLD_CASE)?!1:(i.runes=j.concatRunes(i.runes,s.runes),t>=0?(s.runes=[t],s.flags=e,!0):(this.pop(),this.reuse(s),!1))}newLiteral(t,e){const r=this.newRegexp(k.Op.LITERAL);return r.flags=e,e&$.FOLD_CASE&&(t=j.minFoldRune(t)),r.runes=[t],r}literal(t){this.push(this.newLiteral(t,this.flags))}op(t){const e=this.newRegexp(t);return e.flags=this.flags,this.push(e)}repeat(t,e,r,s,i,o){let u=this.flags;if(u&$.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),u^=$.NON_GREEDY),o!==-1))throw new yt(j.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new yt(j.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.stack[c-1];if(k.isPseudoOp(h.op))throw new yt(j.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const p=this.newRegexp(t);p.min=e,p.max=r,p.flags=u,p.subs=[h],this.stack[c-1]=p}concat(){this.maybeConcat(-1,0);const t=this.popToPseudo();return t.length===0?this.push(this.newRegexp(k.Op.EMPTY_MATCH)):this.push(this.collapse(t,k.Op.CONCAT))}alternate(){const t=this.popToPseudo();return t.length>0&&this.cleanAlt(t[t.length-1]),t.length===0?this.push(this.newRegexp(k.Op.NO_MATCH)):this.push(this.collapse(t,k.Op.ALTERNATE))}cleanAlt(t){t.op===k.Op.CHAR_CLASS&&(t.runes=new qt(t.runes).cleanClass().toArray(),t.runes.length===2&&t.runes[0]===0&&t.runes[1]===Y.MAX_RUNE?(t.runes=null,t.op=k.Op.ANY_CHAR):t.runes.length===4&&t.runes[0]===0&&t.runes[1]===b.CODES.get(`
`)-1&&t.runes[2]===b.CODES.get(`
`)+1&&t.runes[3]===Y.MAX_RUNE&&(t.runes=null,t.op=k.Op.ANY_CHAR_NOT_NL))}collapse(t,e){if(t.length===1)return t[0];let r=0;for(let u of t)r+=u.op===e?u.subs.length:1;let s=new Array(r).fill(null),i=0;for(let u of t)u.op===e?(s.splice(i,u.subs.length,...u.subs),i+=u.subs.length,this.reuse(u)):s[i++]=u;let o=this.newRegexp(e);if(o.subs=s,e===k.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const u=o;o=o.subs[0],this.reuse(u)}return o}factor(t){if(t.length<2)return t;let e=0,r=t.length,s=0,i=null,o=0,u=0,c=0;for(let p=0;p<=r;p++){let g=null,y=0,C=0;if(p<r){let O=t[e+p];if(O.op===k.Op.CONCAT&&O.subs.length>0&&(O=O.subs[0]),O.op===k.Op.LITERAL&&(g=O.runes,y=O.runes.length,C=O.flags&$.FOLD_CASE),C===u){let M=0;for(;M<o&&M<y&&i[M]===g[M];)M++;if(M>0){o=M;continue}}}if(p!==c)if(p===c+1)t[s++]=t[e+c];else{const O=this.newRegexp(k.Op.LITERAL);O.flags=u,O.runes=i.slice(0,o);for(let X=c;X<p;X++)t[e+X]=this.removeLeadingString(t[e+X],o);const M=this.collapse(t.slice(e+c,e+p),k.Op.ALTERNATE),U=this.newRegexp(k.Op.CONCAT);U.subs=[O,M],t[s++]=U}c=p,i=g,o=y,u=C}r=s,e=0,c=0,s=0;let h=null;for(let p=0;p<=r;p++){let g=null;if(!(p<r&&(g=j.leadingRegexp(t[e+p]),h!==null&&h.equals(g)&&(j.isCharClass(h)||h.op===k.Op.REPEAT&&h.min===h.max&&j.isCharClass(h.subs[0]))))){if(p!==c)if(p===c+1)t[s++]=t[e+c];else{const y=h;for(let M=c;M<p;M++){const U=M!==c;t[e+M]=this.removeLeadingRegexp(t[e+M],U)}const C=this.collapse(t.slice(e+c,e+p),k.Op.ALTERNATE),O=this.newRegexp(k.Op.CONCAT);O.subs=[y,C],t[s++]=O}c=p,h=g}}r=s,e=0,c=0,s=0;for(let p=0;p<=r;p++)if(!(p<r&&j.isCharClass(t[e+p]))){if(p!==c)if(p===c+1)t[s++]=t[e+c];else{let g=c;for(let C=c+1;C<p;C++){const O=t[e+g],M=t[e+C];(O.op<M.op||O.op===M.op&&(O.runes!==null?O.runes.length:0)<(M.runes!==null?M.runes.length:0))&&(g=C)}const y=t[e+c];t[e+c]=t[e+g],t[e+g]=y;for(let C=c+1;C<p;C++)j.mergeCharClass(t[e+c],t[e+C]),this.reuse(t[e+C]);this.cleanAlt(t[e+c]),t[s++]=t[e+c]}p<r&&(t[s++]=t[e+p]),c=p+1}r=s,e=0,c=0,s=0;for(let p=0;p<r;++p)p+1<r&&t[e+p].op===k.Op.EMPTY_MATCH&&t[e+p+1].op===k.Op.EMPTY_MATCH||(t[s++]=t[e+p]);return r=s,e=0,t.slice(e,r)}removeLeadingString(t,e){if(t.op===k.Op.CONCAT&&t.subs.length>0){const r=this.removeLeadingString(t.subs[0],e);if(t.subs[0]=r,r.op===k.Op.EMPTY_MATCH)switch(this.reuse(r),t.subs.length){case 0:case 1:t.op=k.Op.EMPTY_MATCH,t.subs=null;break;case 2:{const s=t;t=t.subs[1],this.reuse(s);break}default:t.subs=t.subs.slice(1,t.subs.length);break}return t}return t.op===k.Op.LITERAL&&(t.runes=t.runes.slice(e,t.runes.length),t.runes.length===0&&(t.op=k.Op.EMPTY_MATCH)),t}removeLeadingRegexp(t,e){if(t.op===k.Op.CONCAT&&t.subs.length>0){switch(e&&this.reuse(t.subs[0]),t.subs=t.subs.slice(1,t.subs.length),t.subs.length){case 0:{t.op=k.Op.EMPTY_MATCH,t.subs=k.emptySubs();break}case 1:{const r=t;t=t.subs[0],this.reuse(r);break}}return t}return e&&this.reuse(t),this.newRegexp(k.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&$.LITERAL)return j.literalRegexp(this.wholeRegexp,this.flags);let t=-1,e=-1,r=-1;const s=new a3(this.wholeRegexp);for(;s.more();){let o=-1;t:switch(s.peek()){case b.CODES.get("("):if(this.flags&$.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(k.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case b.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case b.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case b.CODES.get("^"):this.flags&$.ONE_LINE?this.op(k.Op.BEGIN_TEXT):this.op(k.Op.BEGIN_LINE),s.skip(1);break;case b.CODES.get("$"):this.flags&$.ONE_LINE?this.op(k.Op.END_TEXT).flags|=$.WAS_DOLLAR:this.op(k.Op.END_LINE),s.skip(1);break;case b.CODES.get("."):this.flags&$.DOT_NL?this.op(k.Op.ANY_CHAR):this.op(k.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case b.CODES.get("["):this.parseClass(s);break;case b.CODES.get("*"):case b.CODES.get("+"):case b.CODES.get("?"):{o=s.pos();let u=null;switch(s.pop()){case b.CODES.get("*"):u=k.Op.STAR;break;case b.CODES.get("+"):u=k.Op.PLUS;break;case b.CODES.get("?"):u=k.Op.QUEST;break}this.repeat(u,e,r,o,s,t);break}case b.CODES.get("{"):{o=s.pos();const u=j.parseRepeat(s);if(u<0){s.rewindTo(o),this.literal(s.pop());break}e=u>>16,r=(u&Y.MAX_BMP)<<16>>16,this.repeat(k.Op.REPEAT,e,r,o,s,t);break}case b.CODES.get("\\"):{const u=s.pos();if(s.skip(1),this.flags&$.PERL_X&&s.more())switch(s.pop()){case b.CODES.get("A"):this.op(k.Op.BEGIN_TEXT);break t;case b.CODES.get("b"):this.op(k.Op.WORD_BOUNDARY);break t;case b.CODES.get("B"):this.op(k.Op.NO_WORD_BOUNDARY);break t;case b.CODES.get("C"):throw new yt(j.ERR_INVALID_ESCAPE,"\\C");case b.CODES.get("Q"):{let g=s.rest();const y=g.indexOf("\\E");y>=0&&(g=g.substring(0,y)),s.skipString(g),s.skipString("\\E");let C=0;for(;C<g.length;){const O=g.codePointAt(C);this.literal(O),C+=tt.charCount(O)}break t}case b.CODES.get("z"):this.op(k.Op.END_TEXT);break t;default:s.rewindTo(u);break}const c=this.newRegexp(k.Op.CHAR_CLASS);if(c.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const p=new qt;if(this.parseUnicodeClass(s,p)){c.runes=p.toArray(),this.push(c);break t}}const h=new qt;if(this.parsePerlClassEscape(s,h)){c.runes=h.toArray(),this.push(c);break t}s.rewindTo(u),this.reuse(c),this.literal(j.parseEscape(s));break}default:this.literal(s.pop());break}t=o}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new yt(j.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(t){const e=t.pos(),r=t.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const u=r.charAt(2)==="P"?4:3,c=r.indexOf(">");if(c<0)throw new yt(j.ERR_INVALID_NAMED_CAPTURE,r);const h=r.substring(u,c);if(t.skipString(h),t.skip(u+1),!j.isValidCaptureName(h))throw new yt(j.ERR_INVALID_NAMED_CAPTURE,r.substring(0,c+1));const p=this.op(k.Op.LEFT_PAREN);if(p.cap=++this.numCap,this.namedGroups[h])throw new yt(j.ERR_DUPLICATE_NAMED_CAPTURE,h);this.namedGroups[h]=this.numCap,p.name=h;return}t.skip(2);let s=this.flags,i=1,o=!1;t:for(;t.more();){const u=t.pop();switch(u){case b.CODES.get("i"):s|=$.FOLD_CASE,o=!0;break;case b.CODES.get("m"):s&=-17,o=!0;break;case b.CODES.get("s"):s|=$.DOT_NL,o=!0;break;case b.CODES.get("U"):s|=$.NON_GREEDY,o=!0;break;case b.CODES.get("-"):if(i<0)break t;i=-1,s=~s,o=!1;break;case b.CODES.get(":"):case b.CODES.get(")"):if(i<0){if(!o)break t;s=~s}u===b.CODES.get(":")&&this.op(k.Op.LEFT_PAREN),this.flags=s;return;default:break t}}throw new yt(j.ERR_INVALID_PERL_OP,t.from(e))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(k.Op.VERTICAL_BAR)}swapVerticalBar(){const t=this.stack.length;if(t>=3&&this.stack[t-2].op===k.Op.VERTICAL_BAR&&j.isCharClass(this.stack[t-1])&&j.isCharClass(this.stack[t-3])){let e=this.stack[t-1],r=this.stack[t-3];if(e.op>r.op){const s=r;r=e,e=s,this.stack[t-3]=r}return j.mergeCharClass(r,e),this.reuse(e),this.pop(),!0}if(t>=2){const e=this.stack[t-1],r=this.stack[t-2];if(r.op===k.Op.VERTICAL_BAR)return t>=3&&this.cleanAlt(this.stack[t-3]),this.stack[t-2]=e,this.stack[t-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new yt(j.ERR_INTERNAL_ERROR,"stack underflow");const e=this.pop(),r=this.pop();if(r.op!==k.Op.LEFT_PAREN)throw new yt(j.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(e):(r.op=k.Op.CAPTURE,r.subs=[e],this.push(r))}parsePerlClassEscape(t,e){const r=t.pos();if(!(this.flags&$.PERL_X)||!t.more()||t.pop()!==b.CODES.get("\\")||!t.more())return!1;t.pop();const s=t.from(r),i=wl.has(s)?wl.get(s):null;return i===null?!1:(e.appendGroup(i,(this.flags&$.FOLD_CASE)!==0),!0)}parseNamedClass(t,e){const r=t.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);t.skipString(i);const o=Ml.has(i)?Ml.get(i):null;if(o===null)throw new yt(j.ERR_INVALID_CHAR_RANGE,i);return e.appendGroup(o,(this.flags&$.FOLD_CASE)!==0),!0}parseUnicodeClass(t,e){const r=t.pos();if(!(this.flags&$.UNICODE_GROUPS)||!t.lookingAt("\\p")&&!t.lookingAt("\\P"))return!1;t.skip(1);let s=1,i=t.pop();if(i===b.CODES.get("P")&&(s=-1),!t.more())throw t.rewindTo(r),new yt(j.ERR_INVALID_CHAR_RANGE,t.rest());i=t.pop();let o;if(i!==b.CODES.get("{"))o=tt.runeToString(i);else{const p=t.rest(),g=p.indexOf("}");if(g<0)throw t.rewindTo(r),new yt(j.ERR_INVALID_CHAR_RANGE,t.rest());o=p.substring(0,g),t.skipString(o),t.skip(1)}o.length!==0&&o.codePointAt(0)===b.CODES.get("^")&&(s=0-s,o=o.substring(1));const u=j.unicodeTable(o);if(u===null)throw new yt(j.ERR_INVALID_CHAR_RANGE,t.from(r));const c=u.first,h=u.second;if(!(this.flags&$.FOLD_CASE)||h===null)e.appendTableWithSign(c,s);else{const p=new qt().appendTable(c).appendTable(h).cleanClass().toArray();e.appendClassWithSign(p,s)}return!0}parseClass(t){const e=t.pos();t.skip(1);const r=this.newRegexp(k.Op.CHAR_CLASS);r.flags=this.flags;const s=new qt;let i=1;t.more()&&t.lookingAt("^")&&(i=-1,t.skip(1),this.flags&$.CLASS_NL||s.appendRange(b.CODES.get(`
`),b.CODES.get(`
`)));let o=!0;for(;!t.more()||t.peek()!==b.CODES.get("]")||o;){if(t.more()&&t.lookingAt("-")&&!(this.flags&$.PERL_X)&&!o){const p=t.rest();if(p==="-"||!p.startsWith("-]"))throw t.rewindTo(e),new yt(j.ERR_INVALID_CHAR_RANGE,t.rest())}o=!1;const u=t.pos();if(t.lookingAt("[:")){if(this.parseNamedClass(t,s))continue;t.rewindTo(u)}if(this.parseUnicodeClass(t,s)||this.parsePerlClassEscape(t,s))continue;t.rewindTo(u);const c=j.parseClassChar(t,e);let h=c;if(t.more()&&t.lookingAt("-")){if(t.skip(1),t.more()&&t.lookingAt("]"))t.skip(-1);else if(h=j.parseClassChar(t,e),h<c)throw new yt(j.ERR_INVALID_CHAR_RANGE,t.from(u))}this.flags&$.FOLD_CASE?s.appendFoldedRange(c,h):s.appendRange(c,h)}t.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}};_(j,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),_(j,"ERR_INVALID_CHAR_RANGE","invalid character class range"),_(j,"ERR_INVALID_ESCAPE","invalid escape sequence"),_(j,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),_(j,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),_(j,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),_(j,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),_(j,"ERR_MISSING_BRACKET","missing closing ]"),_(j,"ERR_MISSING_PAREN","missing closing )"),_(j,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),_(j,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),_(j,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let e1=j;class u3{constructor(){this.inst=null,this.cap=[]}}class Fl{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(t){const e=this.sparse[t];return e<this.size&&this.densePcs[e]===t}isEmpty(){return this.size===0}add(t){const e=this.size++;return this.sparse[t]=e,this.denseThreads[e]=null,this.densePcs[e]=t,e}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let t="{";for(let e=0;e<this.size;e++)e!==0&&(t+=", "),t+=this.densePcs[e];return t+="}",t}}class Ir{static fromRE2(t){const e=new Ir;return e.prog=t.prog,e.re2=t,e.q0=new Fl(e.prog.numInst()),e.q1=new Fl(e.prog.numInst()),e.pool=[],e.poolSize=0,e.matched=!1,e.matchcap=Array(e.prog.numCap<2?2:e.prog.numCap).fill(0),e.ncap=0,e}static fromMachine(t){const e=new Ir;return e.re2=t.re2,e.prog=t.prog,e.q0=t.q0,e.q1=t.q1,e.pool=t.pool,e.poolSize=t.poolSize,e.matched=t.matched,e.matchcap=t.matchcap,e.ncap=t.ncap,e}init(t){this.ncap=t,t>this.matchcap.length?this.initNewCap(t):this.resetCap(t)}resetCap(t){for(let e=0;e<this.poolSize;e++){const r=this.pool[e];r.cap=Array(t).fill(0)}}initNewCap(t){for(let e=0;e<this.poolSize;e++){const r=this.pool[e];r.cap=Array(t).fill(0)}this.matchcap=Array(t).fill(0)}submatches(){return this.ncap===0?tt.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(t){let e;return this.poolSize>0?(this.poolSize--,e=this.pool[this.poolSize]):e=new u3,e.inst=t,e}freeQueue(t,e=0){const r=t.size-e,s=this.poolSize+r;this.pool.length<s&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,s)));for(let i=e;i<t.size;i++){const o=t.denseThreads[i];o!==null&&(this.pool[this.poolSize]=o,this.poolSize++)}t.clear()}freeThread(t){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=t,this.poolSize++}match(t,e,r){const s=this.re2.cond;if(s===tt.EMPTY_ALL||(r===$.ANCHOR_START||r===$.ANCHOR_BOTH)&&e!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,o=this.q1,u=t.step(e),c=u>>3,h=u&7,p=-1,g=0;u!==dn.EOF()&&(u=t.step(e+h),p=u>>3,g=u&7);let y;for(e===0?y=tt.emptyOpContext(-1,c):y=t.context(e);;){if(i.isEmpty()){if(s&tt.EMPTY_BEGIN_TEXT&&e!==0||this.matched)break;if(this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&t.canCheckPrefix()){const M=t.index(this.re2,e);if(M<0)break;e+=M,u=t.step(e),c=u>>3,h=u&7,u=t.step(e+h),p=u>>3,g=u&7}}!this.matched&&(e===0||r===$.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=e),this.add(i,this.prog.start,e,this.matchcap,y,null));const C=e+h;if(y=t.context(C),this.step(i,o,e,C,c,y,r,e===t.endPos()),h===0||this.ncap===0&&this.matched)break;e+=h,c=p,h=g,c!==-1&&(u=t.step(e+h),p=u>>3,g=u&7);const O=i;i=o,o=O}return this.freeQueue(o),this.matched}step(t,e,r,s,i,o,u,c){const h=this.re2.longest;for(let p=0;p<t.size;p++){let g=t.denseThreads[p];if(g===null)continue;if(h&&this.matched&&this.ncap>0&&this.matchcap[0]<g.cap[0]){this.freeThread(g);continue}const y=g.inst;let C=!1;switch(y.op){case et.MATCH:if(u===$.ANCHOR_BOTH&&!c)break;this.ncap>0&&(!h||!this.matched||this.matchcap[1]<r)&&(g.cap[1]=r,this.matchcap=g.cap.slice(0,this.ncap)),h||this.freeQueue(t,p+1),this.matched=!0;break;case et.RUNE:C=y.matchRune(i);break;case et.RUNE1:C=i===y.runes[0];break;case et.RUNE_ANY:C=!0;break;case et.RUNE_ANY_NOT_NL:C=i!==b.CODES.get(`
`);break;default:throw new Error("bad inst")}C&&(g=this.add(e,y.out,s,g.cap,o,g)),g!==null&&(this.freeThread(g),t.denseThreads[p]=null)}t.clear()}add(t,e,r,s,i,o){if(e===0||t.contains(e))return o;const u=t.add(e),c=this.prog.inst[e];switch(c.op){case et.FAIL:break;case et.ALT:case et.ALT_MATCH:o=this.add(t,c.out,r,s,i,o),o=this.add(t,c.arg,r,s,i,o);break;case et.EMPTY_WIDTH:c.arg&~i||(o=this.add(t,c.out,r,s,i,o));break;case et.NOP:o=this.add(t,c.out,r,s,i,o);break;case et.CAPTURE:if(c.arg<this.ncap){const h=s[c.arg];s[c.arg]=r,this.add(t,c.out,r,s,i,null),s[c.arg]=h}else o=this.add(t,c.out,r,s,i,o);break;case et.MATCH:case et.RUNE:case et.RUNE1:case et.RUNE_ANY:case et.RUNE_ANY_NOT_NL:o===null?o=this.alloc(c):o.inst=c,this.ncap>0&&o.cap!==s&&(o.cap=s.slice(0,this.ncap)),t.denseThreads[u]=o,o=null;break;default:throw new Error("unhandled")}return o}}class c3{constructor(t){this.value=t}get(){return this.value}set(t){this.value=t}compareAndSet(t,e){return this.value===t?(this.value=e,!0):!1}}class un{static initTest(t){const e=un.compile(t),r=new un(e.expr,e.prog,e.numSubexp,e.longest);return r.cond=e.cond,r.prefix=e.prefix,r.prefixUTF8=e.prefixUTF8,r.prefixComplete=e.prefixComplete,r.prefixRune=e.prefixRune,r}static compile(t){return un.compileImpl(t,$.PERL,!1)}static compilePOSIX(t){return un.compileImpl(t,$.POSIX,!0)}static compileImpl(t,e,r){let s=e1.parse(t,e);const i=s.maxCap();s=Te.simplify(s);const o=_s.compileRegexp(s),u=new un(t,o,i,r),[c,h]=o.prefix();return u.prefixComplete=c,u.prefix=h,u.prefixUTF8=tt.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(t,e){return un.compile(t).match(e)}constructor(t,e,r=0,s=0){this.expr=t,this.prog=e,this.numSubexp=r,this.longest=s,this.cond=e.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new c3}numberOfCapturingGroups(){return this.numSubexp}get(){let t;do t=this.pooled.get();while(t&&!this.pooled.compareAndSet(t,t.next));return t}reset(){this.pooled.set(null)}put(t,e){let r=this.pooled.get();do r=this.pooled.get(),!e&&r&&(t=Ir.fromMachine(t),e=!0),t.next!==r&&(t.next=r);while(!this.pooled.compareAndSet(r,t))}toString(){return this.expr}doExecute(t,e,r,s){let i=this.get(),o=!1;i?i.next!==null&&(i=Ir.fromMachine(i),o=!0):(i=Ir.fromRE2(this),o=!0),i.init(s);const u=i.match(t,e,r)?i.submatches():null;return this.put(i,o),u}match(t){return this.doExecute(Tt.fromUTF16(t),0,$.UNANCHORED,0)!==null}matchWithGroup(t,e,r,s,i){return t instanceof An||(t=ro.utf16(t)),this.matchMachineInput(t,e,r,s,i)}matchMachineInput(t,e,r,s,i){if(e>r)return[!1,null];const o=t.isUTF16Encoding()?Tt.fromUTF16(t.asCharSequence(),0,r):Tt.fromUTF8(t.asBytes(),0,r),u=this.doExecute(o,e,s,2*i);return u===null?[!1,null]:[!0,u]}matchUTF8(t){return this.doExecute(Tt.fromUTF8(t),0,$.UNANCHORED,0)!==null}replaceAll(t,e){return this.replaceAllFunc(t,()=>e,2*t.length+1)}replaceFirst(t,e){return this.replaceAllFunc(t,()=>e,1)}replaceAllFunc(t,e,r){let s=0,i=0,o="";const u=Tt.fromUTF16(t);let c=0;for(;i<=t.length;){const h=this.doExecute(u,i,$.UNANCHORED,2);if(h===null||h.length===0)break;o+=t.substring(s,h[0]),(h[1]>s||h[0]===0)&&(o+=e(t.substring(h[0],h[1])),c++),s=h[1];const p=u.step(i)&7;if(i+p>h[1]?i+=p:i+1>h[1]?i++:i=h[1],c>=r)break}return o+=t.substring(s),o}pad(t){if(t===null)return null;let e=(1+this.numSubexp)*2;if(t.length<e){let r=new Array(e).fill(-1);for(let s=0;s<t.length;s++)r[s]=t[s];t=r}return t}allMatches(t,e,r=s=>s){let s=[];const i=t.endPos();e<0&&(e=i+1);let o=0,u=0,c=-1;for(;u<e&&o<=i;){const h=this.doExecute(t,o,$.UNANCHORED,this.prog.numCap);if(h===null||h.length===0)break;let p=!0;if(h[1]===o){h[0]===c&&(p=!1);const g=t.step(o);g<0?o=i+1:o+=g&7}else o=h[1];c=h[1],p&&(s.push(r(this.pad(h))),u++)}return s}findUTF8(t){const e=this.doExecute(Tt.fromUTF8(t),0,$.UNANCHORED,2);return e===null?null:t.slice(e[0],e[1])}findUTF8Index(t){const e=this.doExecute(Tt.fromUTF8(t),0,$.UNANCHORED,2);return e===null?null:e.slice(0,2)}find(t){const e=this.doExecute(Tt.fromUTF16(t),0,$.UNANCHORED,2);return e===null?"":t.substring(e[0],e[1])}findIndex(t){return this.doExecute(Tt.fromUTF16(t),0,$.UNANCHORED,2)}findUTF8Submatch(t){const e=this.doExecute(Tt.fromUTF8(t),0,$.UNANCHORED,this.prog.numCap);if(e===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<e.length&&e[2*s]>=0&&(r[s]=t.slice(e[2*s],e[2*s+1]));return r}findUTF8SubmatchIndex(t){return this.pad(this.doExecute(Tt.fromUTF8(t),0,$.UNANCHORED,this.prog.numCap))}findSubmatch(t){const e=this.doExecute(Tt.fromUTF16(t),0,$.UNANCHORED,this.prog.numCap);if(e===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<e.length&&e[2*s]>=0&&(r[s]=t.substring(e[2*s],e[2*s+1]));return r}findSubmatchIndex(t){return this.pad(this.doExecute(Tt.fromUTF16(t),0,$.UNANCHORED,this.prog.numCap))}findAllUTF8(t,e){const r=this.allMatches(Tt.fromUTF8(t),e,s=>t.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(t,e){const r=this.allMatches(Tt.fromUTF8(t),e,s=>s.slice(0,2));return r.length===0?null:r}findAll(t,e){const r=this.allMatches(Tt.fromUTF16(t),e,s=>t.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(t,e){const r=this.allMatches(Tt.fromUTF16(t),e,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(t,e){const r=this.allMatches(Tt.fromUTF8(t),e,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=t.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(t,e){const r=this.allMatches(Tt.fromUTF8(t),e);return r.length===0?null:r}findAllSubmatch(t,e){const r=this.allMatches(Tt.fromUTF16(t),e,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=t.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(t,e){const r=this.allMatches(Tt.fromUTF16(t),e);return r.length===0?null:r}}const Xt=class Xt{static quote(t){return tt.quoteMeta(t)}static compile(t,e=0){let r=t;if(e&Xt.CASE_INSENSITIVE&&(r=`(?i)${r}`),e&Xt.DOTALL&&(r=`(?s)${r}`),e&Xt.MULTILINE&&(r=`(?m)${r}`),e&-32)throw new n3("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let s=$.PERL;e&Xt.DISABLE_UNICODE_GROUPS&&(s&=-129);const i=new Xt(t,e);return i.re2Input=un.compileImpl(r,s,(e&Xt.LONGEST_MATCH)!==0),i}static matches(t,e){return Xt.compile(t).matcher(e).matches()}static initTest(t,e,r){if(t==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new Xt(t,e);return s.re2Input=r,s}constructor(t,e){this.patternInput=t,this.flagsInput=e}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(t){return this.matcher(t).matches()}matcher(t){return Array.isArray(t)&&(t=ro.utf8(t)),new r3(this,t)}split(t,e=0){const r=this.matcher(t),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(e>0&&s.length===e-1)break;if(o===r.start()){if(e===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(e===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(e!==0||s.length===0)&&s.push(r.substring(o,r.inputLength())),s}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(t){return this===t?!0:t===null||this.constructor!==t.constructor?!1:this.flagsInput===t.flagsInput&&this.patternInput===t.patternInput}};_(Xt,"CASE_INSENSITIVE",1),_(Xt,"DOTALL",2),_(Xt,"MULTILINE",4),_(Xt,"DISABLE_UNICODE_GROUPS",8),_(Xt,"LONGEST_MATCH",16);let Os=Xt;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur="12.15.0";function l3(n){Ur=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Ao("@firebase/firestore");function fr(){return Zn.logLevel}function B(n,...t){if(Zn.logLevel<=st.DEBUG){const e=t.map(F1);Zn.debug(`Firestore (${Ur}): ${n}`,...e)}}function Qe(n,...t){if(Zn.logLevel<=st.ERROR){const e=t.map(F1);Zn.error(`Firestore (${Ur}): ${n}`,...e)}}function Ae(n,...t){if(Zn.logLevel<=st.WARN){const e=t.map(F1);Zn.warn(`Firestore (${Ur}): ${n}`,...e)}}function F1(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,t6(n,r,e)}function t6(n,t,e){let r=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Qe(r),new Error(r)}function H(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||t6(t,s,r)}function Z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ue{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class h3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ht.UNAUTHENTICATED))}shutdown(){}}class f3{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class d3{constructor(t){this.t=t,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string",31837,{l:r}),new e6(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string",2055,{h:t}),new Ht(t)}}class p3{constructor(t,e,r){this.T=t,this.P=e,this.R=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const t=this.A();return t&&this.I.set("Authorization",t),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class g3{constructor(t,e,r){this.T=t,this.P=e,this.R=r}getToken(){return Promise.resolve(new p3(this.T,this.P,this.R))}start(t,e){t.enqueueRetryable(()=>e(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ul{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m3{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ce(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){H(this.o===void 0,3512);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ul(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(H(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ul(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _3(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_3(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function it(n,t){return n<t?-1:n>t?1:0}function n1(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return Oa(s)===Oa(i)?it(s,i):Oa(s)?1:-1}return it(n.length,t.length)}const E3=55296,y3=57343;function Oa(n){const t=n.charCodeAt(0);return t>=E3&&t<=y3}function Cr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="__name__";class Se{constructor(t,e,r){e===void 0?e=0:e>t.length&&z(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&z(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Se.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Se?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=Se.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return it(t.length,e.length)}static compareSegments(t,e){const r=Se.isNumericId(t),s=Se.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Se.extractNumericId(t).compare(Se.extractNumericId(e)):n1(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return En.fromString(t.substring(4,t.length-2))}}class ct extends Se{construct(t,e,r){return new ct(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new q(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ct(e)}static emptyPath(){return new ct([])}}const T3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Se{construct(t,e,r){return new Pt(t,e,r)}static isValidIdentifier(t){return T3.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pr}static keyField(){return new Pt([Pr])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new q(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(r+=u,s++):(i(),s++)}if(i(),o)throw new q(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pt(e)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.path=t}static fromPath(t){return new G(ct.fromString(t))}static fromName(t){return new G(ct.fromString(t).popFirst(5))}static empty(){return new G(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ct.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new G(new ct(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n6(n,t,e){if(!e)throw new q(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function I3(n,t,e,r){if(t===!0&&r===!0)throw new q(x.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Bl(n){if(!G.isDocumentKey(n))throw new q(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $l(n){if(G.isDocumentKey(n))throw new q(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ti(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function B1(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function je(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new q(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=B1(n);throw new q(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,t){const e={typeString:n};return t&&(e.value=t),e}function ei(n,t){if(!ti(n))throw new q(x.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new q(x.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=-62135596800,Hl=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(t){return dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Hl);return new dt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ql)throw new q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hl}_compareTo(t){return this.seconds===t.seconds?it(this.nanoseconds,t.nanoseconds):it(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ei(t,dt._jsonSchema))return new dt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ql;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}dt._jsonSchemaVersion="firestore/timestamp/1.0",dt._jsonSchema={type:At("string",dt._jsonSchemaVersion),seconds:At("number"),nanoseconds:At("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(t){return new J(t)}static min(){return new J(new dt(0,0))}static max(){return new J(new dt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=-1;function w3(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new dt(e+1,0):new dt(e,r));return new vn(s,G.empty(),t)}function A3(n){return new vn(n.readTime,n.key,Vs)}class vn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new vn(J.min(),G.empty(),Vs)}static max(){return new vn(J.max(),G.empty(),Vs)}}function v3(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=G.comparator(n.documentKey,t.documentKey),e!==0?e:it(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class S3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==R3)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof D?e:D.resolve(e)}catch(e){return D.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):D.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):D.reject(e)}static resolve(t){return new D((e,r)=>{e(t)})}static reject(t){return new D((e,r)=>{r(t)})}static waitFor(t){return new D((e,r)=>{let s=0,i=0,o=!1;t.forEach(u=>{++s,u.next(()=>{++i,o&&i===s&&e()},c=>r(c))}),o=!0,i===s&&e()})}static or(t){let e=D.resolve(!1);for(const r of t)e=e.next(s=>s?D.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new D((r,s)=>{const i=t.length,o=new Array(i);let u=0;for(let c=0;c<i;c++){const h=c;e(t[h]).next(p=>{o[h]=p,++u,u===i&&r(o)},p=>s(p))}})}static doWhile(t,e){return new D((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}function C3(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Co.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=-1;function Po(n){return n==null}function ks(n){return n===0&&1/n==-1/0}function P3(n){return typeof n=="number"&&Number.isInteger(n)&&!ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function b3(n){return typeof n=="string"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6="";function N3(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=jl(t)),t=O3(n.get(e),t);return jl(t)}function O3(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case r6:e+="";break;default:e+=i}}return e}function jl(n){return n+r6+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e){this.comparator=t,this.root=e||xt.EMPTY}insert(t,e){return new pt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(t){return new pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ni(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ni(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ni(this.root,t,this.comparator,!0)}}class Ni{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??xt.RED,this.left=s??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new xt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw z(27949);return t+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.comparator=t,this.data=new pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Gl(this.data.getIterator())}getIteratorFrom(t){return new Gl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof vt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new vt(this.comparator);return e.data=t,e}}class Gl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.fields=t,t.sort(Pt.comparator)}static empty(){return new fe([])}unionWith(t){let e=new vt(Pt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new fe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Cr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function xn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function V3(n,t){const e=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.push(t(n[r],r,n));return e}function s6(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new i6("Invalid base64 string: "+i):i}}(t);return new Rt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return it(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const k3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(n){if(H(!!n,39018),typeof n=="string"){let t=0;const e=k3.exec(n);if(H(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:mt(n.seconds),nanos:mt(n.nanos)}}function mt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sn(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o6="server_timestamp",a6="__type__",u6="__previous_value__",c6="__local_write_time__";function bo(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[a6])==null?void 0:r.stringValue)===o6}function ni(n){const t=n.mapValue.fields[u6];return bo(t)?ni(t):t}function br(n){const t=Rn(n.mapValue.fields[c6].timestampValue);return new dt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(t,e,r,s,i,o,u,c,h,p,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const io="(default)";class Ds{constructor(t,e){this.projectId=t,this.database=e||io}static empty(){return new Ds("","")}get isDefaultDatabase(){return this.database===io}isEqual(t){return t instanceof Ds&&t.projectId===this.projectId&&t.database===this.database}}function x3(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new q(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ds(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l6="__type__",L3="__max__",Oi={mapValue:{}},h6="__vector__",xs="value",Nr={nullValue:"NULL_VALUE"},oe={booleanValue:!0},Dt={booleanValue:!1};function St(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bo(n)?4:M3(n)?9007199254740991:oo(n)?10:11:z(28295,{value:n})}function ye(n,t,e){if(n===t)return!0;const r=St(n);if(r!==St(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return br(n).isEqual(br(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Rn(i.timestampValue),c=Rn(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Sn(i.bytesValue).isEqual(Sn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return mt(i.geoPointValue.latitude)===mt(o.geoPointValue.latitude)&&mt(i.geoPointValue.longitude)===mt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o,u){if("integerValue"in i&&"integerValue"in o)return mt(i.integerValue)===mt(o.integerValue);let c,h;if("doubleValue"in i&&"doubleValue"in o)c=mt(i.doubleValue),h=mt(o.doubleValue);else{if(!(u!=null&&u.Ee))return!1;c=mt(i.integerValue??i.doubleValue),h=mt(o.integerValue??o.doubleValue)}return c===h?!!(u!=null&&u.he)||ks(c)===ks(h):!!(u===void 0||u.Te)&&isNaN(c)&&isNaN(h)}(n,t,e);case 9:return Cr(n.arrayValue.values||[],t.arrayValue.values||[],(s,i)=>ye(s,i,e));case 10:case 11:return function(i,o,u){const c=i.mapValue.fields||{},h=o.mapValue.fields||{};if(so(c)!==so(h))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(h[p]===void 0||!ye(c[p],h[p],u)))return!1;return!0}(n,t,e);default:return z(52216,{left:n})}}function Ls(n,t){return(n.values||[]).find(e=>ye(e,t))!==void 0}function ae(n,t){if(n===t)return 0;const e=St(n),r=St(t);if(e!==r)return it(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return it(n.booleanValue,t.booleanValue);case 2:return function(i,o){const u=mt(i.integerValue||i.doubleValue),c=mt(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(n,t);case 3:return zl(n.timestampValue,t.timestampValue);case 4:return zl(br(n),br(t));case 5:return n1(n.stringValue,t.stringValue);case 6:return function(i,o){const u=Sn(i),c=Sn(o);return u.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const u=i.split("/"),c=o.split("/");for(let h=0;h<u.length&&h<c.length;h++){const p=it(u[h],c[h]);if(p!==0)return p}return it(u.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const u=it(mt(i.latitude),mt(o.latitude));return u!==0?u:it(mt(i.longitude),mt(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Wl(n.arrayValue,t.arrayValue);case 10:return function(i,o){var y,C,O,M;const u=i.fields||{},c=o.fields||{},h=(y=u[xs])==null?void 0:y.arrayValue,p=(C=c[xs])==null?void 0:C.arrayValue,g=it(((O=h==null?void 0:h.values)==null?void 0:O.length)||0,((M=p==null?void 0:p.values)==null?void 0:M.length)||0);return g!==0?g:Wl(h,p)}(n.mapValue,t.mapValue);case 11:return function(i,o){if(i===Oi.mapValue&&o===Oi.mapValue)return 0;if(i===Oi.mapValue)return 1;if(o===Oi.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),h=o.fields||{},p=Object.keys(h);c.sort(),p.sort();for(let g=0;g<c.length&&g<p.length;++g){const y=n1(c[g],p[g]);if(y!==0)return y;const C=ae(u[c[g]],h[p[g]]);if(C!==0)return C}return it(c.length,p.length)}(n.mapValue,t.mapValue);default:throw z(23264,{Pe:e})}}function zl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return it(n,t);const e=Rn(n),r=Rn(t),s=it(e.seconds,r.seconds);return s!==0?s:it(e.nanos,r.nanos)}function Wl(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=ae(e[s],r[s]);if(i!==void 0&&i!==0)return i}return it(e.length,r.length)}function Or(n){return r1(n)}function r1(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Rn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Sn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return G.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=r1(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${r1(e.fields[o])}`;return s+"}"}(n.mapValue):z(61005,{value:n})}function qi(n){switch(St(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ni(n);return t?16+qi(t):16;case 5:return 2*n.stringValue.length;case 6:return Sn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+qi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return xn(r.fields,(i,o)=>{s+=i.length+qi(o)}),s}(n.mapValue);default:throw z(13486,{value:n})}}function Pe(n){return!!n&&"integerValue"in n}function Gn(n){return!!n&&"doubleValue"in n}function Cn(n){return Pe(n)||Gn(n)}function Vr(n){return!!n&&"arrayValue"in n}function de(n){return!!n&&"nullValue"in n}function ue(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kn(n){return!!n&&"mapValue"in n}function oo(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[l6])==null?void 0:r.stringValue)===h6}function s1(n){var t,e;return(e=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[xs])==null?void 0:e.arrayValue}function ys(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return xn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ys(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ys(n.arrayValue.values[e]);return t}return{...n}}function M3(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===L3}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.value=t}static empty(){return new Jt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Kn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ys(e)}setAll(t){let e=Pt.emptyPath(),r={},s=[];t.forEach((o,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,r,s),r={},s=[],e=u.popLast()}o?r[u.lastSegment()]=ys(o):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Kn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ye(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Kn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){xn(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Jt(ys(this.value))}}function f6(n){const t=[];return xn(n.fields,(e,r)=>{const s=new Pt([e]);if(Kn(r)){const i=f6(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new fe(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ks(t)?"-0":t}}function q1(n){return{integerValue:""+n}}function H1(n,t,e){return Number.isInteger(t)&&(e!=null&&e.preferIntegers)||P3(t)?q1(t):No(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this._=void 0}}function F3(n,t,e){return n instanceof Ms?function(s,i){const o={fields:{[a6]:{stringValue:o6},[c6]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bo(i)&&(i=ni(i)),i&&(o.fields[u6]=i),{mapValue:o}}(e,t):n instanceof Fs?p6(n,t):n instanceof Us?g6(n,t):n instanceof Bs?function(s,i){const o=d6(s,i),u=co(o)+co(s.Re);return Pe(o)&&Pe(s.Re)?q1(u):No(s.serializer,u)}(n,t):n instanceof ao?function(s,i){return Kl(s,i,Math.min)}(n,t):n instanceof uo?function(s,i){return Kl(s,i,Math.max)}(n,t):void 0}function U3(n,t,e){return n instanceof Fs?p6(n,t):n instanceof Us?g6(n,t):e}function d6(n,t){return n instanceof Bs?Cn(t)?t:{integerValue:0}:null}class Ms extends Oo{}class Fs extends Oo{constructor(t){super(),this.elements=t}}function p6(n,t){const e=m6(t);for(const r of n.elements)e.some(s=>ye(s,r))||e.push(r);return{arrayValue:{values:e}}}class Us extends Oo{constructor(t){super(),this.elements=t}}function g6(n,t){let e=m6(t);for(const r of n.elements)e=e.filter(s=>!ye(s,r));return{arrayValue:{values:e}}}class j1 extends Oo{constructor(t,e){super(),this.serializer=t,this.Re=e}}class Bs extends j1{}class ao extends j1{}class uo extends j1{}function Kl(n,t,e){if(!Cn(t))return n.Re;const r=e(co(t),co(n.Re));return Pe(t)&&Pe(n.Re)?q1(r):No(n.serializer,r)}function co(n){return mt(n.integerValue||n.doubleValue)}function m6(n){return Vr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B3{constructor(t,e){this.field=t,this.transform=e}}function $3(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Fs&&s instanceof Fs||r instanceof Us&&s instanceof Us?Cr(r.elements,s.elements,ye):r instanceof Bs&&s instanceof Bs||r instanceof ao&&s instanceof ao||r instanceof uo&&s instanceof uo?ye(r.Re,s.Re):r instanceof Ms&&s instanceof Ms}(n.transform,t.transform)}class q3{constructor(t,e){this.version=t,this.transformResults=e}}class Oe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Oe}static exists(t){return new Oe(void 0,t)}static updateTime(t){return new Oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Vo{}function _6(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new y6(n.key,Oe.none()):new ri(n.key,n.data,Oe.none());{const e=n.data,r=Jt.empty();let s=new vt(Pt.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ln(n.key,r,new fe(s.toArray()),Oe.none())}}function H3(n,t,e){n instanceof ri?function(s,i,o){const u=s.value.clone(),c=Ql(s.fieldTransforms,i,o.transformResults);u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Ln?function(s,i,o){if(!Hi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=Ql(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(E6(s)),c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ts(n,t,e,r){return n instanceof ri?function(i,o,u,c){if(!Hi(i.precondition,o))return u;const h=i.value.clone(),p=Xl(i.fieldTransforms,c,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ln?function(i,o,u,c){if(!Hi(i.precondition,o))return u;const h=Xl(i.fieldTransforms,c,o),p=o.data;return p.setAll(E6(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,t,e,r):function(i,o,u){return Hi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(n,t,e)}function j3(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=d6(r.transform,s||null);i!=null&&(e===null&&(e=Jt.empty()),e.set(r.field,i))}return e||null}function Yl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cr(r,s,(i,o)=>$3(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ri extends Vo{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ln extends Vo{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function E6(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ql(n,t,e){const r=new Map;H(n.length===e.length,32656,{Ie:e.length,Ae:n.length});for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,u=t.data.field(i.field);r.set(i.field,U3(o,u,e[s]))}return r}function Xl(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,F3(i,o,t))}return r}class y6 extends Vo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class G3 extends Vo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,e){this.position=t,this.inclusive=e}}function Jl(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),e.key):r=ae(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ye(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T6{}class bt extends T6{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new W3(t,e,r):e==="array-contains"?new Q3(t,r):e==="in"?new X3(t,r):e==="not-in"?new J3(t,r):e==="array-contains-any"?new Z3(t,r):new bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new K3(t,r):new Y3(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ae(e,this.value)):e!==null&&St(this.value)===St(e)&&this.matchesComparison(ae(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Le extends T6{constructor(t,e){super(),this.filters=t,this.op=e,this.Ve=null}static create(t,e){return new Le(t,e)}matches(t){return I6(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function I6(n){return n.op==="and"}function w6(n){return z3(n)&&I6(n)}function z3(n){for(const t of n.filters)if(t instanceof Le)return!1;return!0}function i1(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+Or(n.value);if(w6(n))return n.filters.map(t=>i1(t)).join(",");{const t=n.filters.map(e=>i1(e)).join(",");return`${n.op}(${t})`}}function A6(n,t){return n instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&ye(r.value,s.value)}(n,t):n instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,u)=>i&&A6(o,s.filters[u]),!0):!1}(n,t):void z(19439)}function v6(n){return n instanceof bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Or(e.value)}`}(n):n instanceof Le?function(e){return e.op.toString()+" {"+e.getFilters().map(v6).join(" ,")+"}"}(n):"Filter"}class W3 extends bt{constructor(t,e,r){super(t,e,r),this.key=G.fromName(r.referenceValue)}matches(t){const e=G.comparator(t.key,this.key);return this.matchesComparison(e)}}class K3 extends bt{constructor(t,e){super(t,"in",e),this.keys=R6("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Y3 extends bt{constructor(t,e){super(t,"not-in",e),this.keys=R6("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function R6(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>G.fromName(r.referenceValue))}class Q3 extends bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vr(e)&&Ls(e.arrayValue,this.value)}}class X3 extends bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ls(this.value.arrayValue,e)}}class J3 extends bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ls(this.value.arrayValue,e)}}class Z3 extends bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ls(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,e="asc"){this.field=t,this.dir=e}}function tg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e,r,s,i,o,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(t){return new Gt(t,0,J.min(),J.min(),J.min(),Jt.empty(),0)}static newFoundDocument(t,e,r,s){return new Gt(t,1,e,J.min(),r,s,0)}static newNoDocument(t,e){return new Gt(t,2,e,J.min(),J.min(),Jt.empty(),0)}static newUnknownDocument(t,e){return new Gt(t,3,e,J.min(),J.min(),Jt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,e=null,r=[],s=[],i=null,o=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.de=null}}function th(n,t=null,e=[],r=[],s=null,i=null,o=null){return new eg(n,t,e,r,s,i,o)}function S6(n){const t=Z(n);if(t.de===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>i1(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Po(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Or(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Or(r)).join(",")),t.de=e}return t.de}function C6(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!tg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!A6(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Zl(n.startAt,t.startAt)&&Zl(n.endAt,t.endAt)}function jn(n){return!!n.isCorePipeline}function P6(n){return!!n.path&&G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e=null,r=[],s=[],i=null,o="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=c,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function ng(n,t,e,r,s,i,o,u){return new ko(n,t,e,r,s,i,o,u)}function Do(n){return new ko(n)}function eh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rg(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function sg(n){return n.collectionGroup!==null}function Is(n){const t=Z(n);if(t.fe===null){t.fe=[];const e=new Set;for(const i of t.explicitOrderBy)t.fe.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new vt(Pt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.fe.push(new ho(i,r))}),e.has(Pt.keyField().canonicalString())||t.fe.push(new ho(Pt.keyField(),r))}return t.fe}function Ve(n){const t=Z(n);return t.me||(t.me=ig(t,Is(n))),t.me}function ig(n,t){if(n.limitType==="F")return th(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ho(s.field,i)});const e=n.endAt?new lo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new lo(n.startAt.position,n.startAt.inclusive):null;return th(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function o1(n,t,e){return new ko(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function og(n,t){return C6(Ve(n),Ve(t))&&n.limitType===t.limitType}function ws(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>v6(s)).join(", ")}]`),Po(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Or(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Or(s)).join(",")),`Target(${r})`}(Ve(n))}; limitType=${n.limitType})`}function xo(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of Is(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,u,c){const h=Jl(o,u,c);return o.inclusive?h<=0:h<0}(r.startAt,Is(r),s)||r.endAt&&!function(o,u,c){const h=Jl(o,u,c);return o.inclusive?h>=0:h>0}(r.endAt,Is(r),s))}(n,t)}function G1(n){return(t,e)=>{let r=!1;for(const s of Is(n)){const i=ag(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ag(n,t,e){const r=n.field.isKeyField()?G.comparator(t.key,e.key):function(i,o,u){const c=o.data.field(i),h=u.data.field(i);return c!==null&&h!==null?ae(c,h):z(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,ot;function cg(n){switch(n){case x.OK:return z(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function b6(n){if(n===void 0)return Qe("GRPC error has no .code"),x.UNKNOWN;switch(n){case wt.OK:return x.OK;case wt.CANCELLED:return x.CANCELLED;case wt.UNKNOWN:return x.UNKNOWN;case wt.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case wt.INTERNAL:return x.INTERNAL;case wt.UNAVAILABLE:return x.UNAVAILABLE;case wt.UNAUTHENTICATED:return x.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case wt.NOT_FOUND:return x.NOT_FOUND;case wt.ALREADY_EXISTS:return x.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return x.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case wt.ABORTED:return x.ABORTED;case wt.OUT_OF_RANGE:return x.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return x.UNIMPLEMENTED;case wt.DATA_LOSS:return x.DATA_LOSS;default:return z(39323,{code:n})}}(ot=wt||(wt={}))[ot.OK=0]="OK",ot[ot.CANCELLED=1]="CANCELLED",ot[ot.UNKNOWN=2]="UNKNOWN",ot[ot.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ot[ot.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ot[ot.NOT_FOUND=5]="NOT_FOUND",ot[ot.ALREADY_EXISTS=6]="ALREADY_EXISTS",ot[ot.PERMISSION_DENIED=7]="PERMISSION_DENIED",ot[ot.UNAUTHENTICATED=16]="UNAUTHENTICATED",ot[ot.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ot[ot.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ot[ot.ABORTED=10]="ABORTED",ot[ot.OUT_OF_RANGE=11]="OUT_OF_RANGE",ot[ot.UNIMPLEMENTED=12]="UNIMPLEMENTED",ot[ot.INTERNAL=13]="INTERNAL",ot[ot.UNAVAILABLE=14]="UNAVAILABLE",ot[ot.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){xn(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return s6(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new pt(G.comparator);function se(){return lg}const N6=new pt(G.comparator);function dr(...n){let t=N6;for(const e of n)t=t.insert(e.key,e);return t}function O6(n){let t=N6;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function pn(){return As()}function V6(){return As()}function As(){return new ir(n=>n.toString(),(n,t)=>n.isEqual(t))}const hg=new pt(G.comparator),fg=new vt(G.comparator);function rt(...n){let t=fg;for(const e of n)t=t.add(e);return t}const dg=new vt(it);function pg(){return dg}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new En([4294967295,4294967295],0);function nh(n){const t=gg().encode(n),e=new W2;return e.update(t),new Uint8Array(e.digest())}function rh(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new En([e,r],0),new En([s,i],0)]}class z1{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new fs(`Invalid padding: ${e}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new fs(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.ye=En.fromNumber(this.ge)}we(t,e,r){let s=t.add(e.multiply(En.fromNumber(r)));return s.compare(mg)===1&&(s=new En([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=nh(t),[r,s]=rh(e);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new z1(i,s,e);return r.forEach(u=>o.insert(u)),o}insert(t){if(this.ge===0)return;const e=nh(t),[r,s]=rh(e);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.ve(o)}}ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,r,s,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,ii.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new si(J.min(),s,new pt(it),se(),se(),rt())}}class ii{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ii(r,e,rt(),rt(),rt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class k6{constructor(t,e){this.targetId=t,this.xe=e}}class D6{constructor(t,e,r=Rt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class sh{constructor(t){this.targetId=t,this.Ce=0,this.Fe=ih(),this.Oe=Rt.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(t){t.approximateByteSize()>0&&(this.Ne=!0,this.Oe=t)}ke(){let t=rt(),e=rt(),r=rt();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:z(38017,{changeType:i})}}),new ii(this.Oe,this.Me,t,e,r)}qe(){this.Ne=!1,this.Fe=ih()}$e(t,e){this.Ne=!0,this.Fe=this.Fe.insert(t,e)}Ke(t){this.Ne=!0,this.Fe=this.Fe.remove(t)}We(){this.Ce+=1}Qe(){this.Ce-=1,H(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const cs="WatchChangeAggregator";class _g{constructor(t){this.ze=t,this.je=new Map,this.He=se(),this.Je=Vi(),this.Ye=se(),this.Ze=Vi(),this.Xe=new pt(it)}et(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.tt(e,t.De):this.nt(e,t.key,t.De);for(const e of t.removedTargetIds)this.nt(e,t.key,t.De)}rt(t){this.forEachTarget(t,e=>{const r=this.je.get(e);if(r)switch(t.state){case 0:this.it(e)&&r.Ue(t.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(t.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.Ue(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.Ue(t.resumeToken));break;default:z(56790,{state:t.state})}else B(cs,`handleTargetChange received targetChange for untracked target ID (${e}) with state (${t.state})`)})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}_t(t){var e;return jn(t)?t.getPipelineSourceType()==="documents"&&((e=t.getPipelineDocuments())==null?void 0:e.length)===1:P6(t)}ot(t){const e=t.targetId,r=t.xe.count,s=this.ut(e);if(s){const i=s.target;if(this._t(i))if(r===0){const o=new G(jn(i)?ct.fromString(i.getPipelineDocuments()[0]):i.path);this.nt(e,o,Gt.newNoDocument(o,J.min()))}else H(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.ct(e);if(o!==r){const u=this.lt(t),c=u?this.Et(u,t,o):1;if(c!==0){this.st(e);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(e,h)}}}}}lt(t){const e=t.xe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,u;try{o=Sn(r).toUint8Array()}catch(c){if(c instanceof i6)return Ae("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new z1(o,s,i)}catch(c){return Ae(c instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.ge===0?null:u}Et(t,e,r){return e.xe.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.ze.Tt(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.nt(e,i,null),s++)}),s}Rt(t){const e=new Map;this.je.forEach((i,o)=>{const u=this.ut(o);if(u){if(i.current&&this._t(u.target)){const c=jn(u.target)?ct.fromString(u.target.getPipelineDocuments()[0]):u.target.path,h=new G(c);this.It(h).has(o)||this.At(o,h)||this.nt(o,h,Gt.newNoDocument(h,t))}i.Be&&(e.set(o,i.ke()),i.qe())}});let r=rt();this.Ze.forEach((i,o)=>{let u=!0;o.forEachWhile(c=>{const h=this.ut(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(t)),this.Ye.forEach((i,o)=>o.setReadTime(t));const s=new si(t,e,this.Xe,this.He,this.Ye,r);return this.He=se(),this.Je=Vi(),this.Ye=se(),this.Ze=Vi(),this.Xe=new pt(it),s}tt(t,e){const r=this.je.get(t);if(!r||!this.it(t))return void B(cs,`addDocumentToTarget received document for unknown inactive target (${t})`);const s=this.At(t,e.key)?2:0;r.$e(e.key,s),jn(this.ut(t).target)&&this.ut(t).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(e.key,e):this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.Ze=this.Ze.insert(e.key,this.Vt(e.key).add(t))}nt(t,e,r){const s=this.je.get(t);s&&this.it(t)?(this.At(t,e)?s.$e(e,1):s.Ke(e),this.Ze=this.Ze.insert(e,this.Vt(e).delete(t)),this.Ze=this.Ze.insert(e,this.Vt(e).add(t)),r&&(jn(this.ut(t).target)&&this.ut(t).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(e,r):this.He=this.He.insert(e,r))):B(cs,`removeDocumentFromTarget received document for unknown or inactive target (${t})`)}removeTarget(t){this.je.delete(t)}ct(t){const e=this.je.get(t);if(!e)return 0;const r=e.ke();return this.ze.getRemoteKeysForTarget(t).size+r.addedDocuments.size-r.removedDocuments.size}We(t){let e=this.je.get(t);e||(B(cs,`recordPendingTargetRequest set up tracking for target ID ${t}`),e=new sh(t),this.je.set(t,e)),e.We()}Vt(t){let e=this.Ze.get(t);return e||(e=new vt(it),this.Ze=this.Ze.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new vt(it),this.Je=this.Je.insert(t,e)),e}it(t){const e=this.ut(t)!==null;return e||B(cs,"Detected inactive target",t),e}ut(t){const e=this.je.get(t);return e===void 0||e.Le?null:this.ze.dt(t)}st(t){this.je.set(t,new sh(t)),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.nt(t,e,null)})}At(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Vi(){return new pt(G.comparator)}function ih(){return new pt(G.comparator)}const Eg={asc:"ASCENDING",desc:"DESCENDING"},yg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tg={and:"AND",or:"OR"};class Ig{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function a1(n,t){return n.useProto3Json||Po(t)?t:{value:t}}function fo(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function W1(n){const t=Rn(n);return new dt(t.seconds,t.nanos)}function x6(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Gi(n,t){return fo(n,t.toTimestamp())}function ke(n){return H(!!n,49232),J.fromTimestamp(W1(n))}function K1(n,t){return u1(n,t).canonicalString()}function u1(n,t){const e=function(s){return new ct(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function L6(n){const t=ct.fromString(n);return H($6(t),10190,{key:t.toString()}),t}function po(n,t){return K1(n.databaseId,t.path)}function Va(n,t){const e=L6(t);if(e.get(1)!==n.databaseId.projectId)throw new q(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new q(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new G(F6(e))}function M6(n,t){return K1(n.databaseId,t)}function wg(n){const t=L6(n);return t.length===4?ct.emptyPath():F6(t)}function c1(n){return new ct(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function F6(n){return H(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function oh(n,t,e){return{name:po(n,t),fields:e.value.mapValue.fields}}function Ag(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(H(p===void 0||typeof p=="string",58123),Rt.fromBase64String(p||"")):(H(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Rt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,u=o&&function(h){const p=h.code===void 0?x.UNKNOWN:b6(h.code);return new q(p,h.message||"")}(o);e=new D6(r,s,i,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Va(n,r.document.name),i=ke(r.document.updateTime),o=r.document.createTime?ke(r.document.createTime):J.min(),u=new Jt({mapValue:{fields:r.document.fields}}),c=Gt.newFoundDocument(s,i,o,u),h=r.targetIds||[],p=r.removedTargetIds||[];e=new ji(h,p,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Va(n,r.document),i=r.readTime?ke(r.readTime):J.min(),o=Gt.newNoDocument(s,i),u=r.removedTargetIds||[];e=new ji([],u,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Va(n,r.document),i=r.removedTargetIds||[];e=new ji([],i,s,null)}else{if(!("filter"in t))return z(11601,{ft:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ug(s,i),u=r.targetId;e=new k6(u,o)}}return e}function vg(n,t){let e;if(t instanceof ri)e={update:oh(n,t.key,t.value)};else if(t instanceof y6)e={delete:po(n,t.key)};else if(t instanceof Ln)e={update:oh(n,t.key,t.data),updateMask:Dg(t.fieldMask)};else{if(!(t instanceof G3))return z(16599,{gt:t.type});e={verify:po(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const u=o.transform;if(u instanceof Ms)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Fs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Us)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Bs)return{fieldPath:o.field.canonicalString(),increment:u.Re};if(u instanceof ao)return{fieldPath:o.field.canonicalString(),minimum:u.Re};if(u instanceof uo)return{fieldPath:o.field.canonicalString(),maximum:u.Re};throw z(20930,{transform:o.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gi(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z(27497)}(n,t.precondition)),e}function Rg(n,t){return n&&n.length>0?(H(t!==void 0,14353),n.map(e=>function(s,i){let o=s.updateTime?ke(s.updateTime):ke(i);return o.isEqual(J.min())&&(o=ke(i)),new q3(o,s.transformResults||[])}(e,t))):[]}function Sg(n,t){return{documents:[M6(n,t.path)]}}function Cg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=M6(n,s);const i=function(h){if(h.length!==0)return B6(Le.create(h,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(y){return{field:pr(y.field),direction:Og(y.dir)}}(p))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const u=a1(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{yt:e,parent:s}}function Pg(n){let t=wg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){H(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let i=[];e.where&&(i=function(g){const y=U6(g);return y instanceof Le&&w6(y)?y.getFilters():[y]}(e.where));let o=[];e.orderBy&&(o=function(g){return g.map(y=>function(O){return new ho(gr(O.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(y))}(e.orderBy));let u=null;e.limit&&(u=function(g){let y;return y=typeof g=="object"?g.value:g,Po(y)?null:y}(e.limit));let c=null;e.startAt&&(c=function(g){const y=!!g.before,C=g.values||[];return new lo(C,y)}(e.startAt));let h=null;return e.endAt&&(h=function(g){const y=!g.before,C=g.values||[];return new lo(C,y)}(e.endAt)),ng(t,s,o,i,u,"F",c,h)}function bg(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ng(n,t){return{structuredPipeline:{pipeline:{stages:t.stages.map(e=>e._toProto(n))}}}}function U6(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=gr(e.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gr(e.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gr(e.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gr(e.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}}(n):n.fieldFilter!==void 0?function(e){return bt.create(gr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Le.create(e.compositeFilter.filters.map(r=>U6(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z(1026)}}(e.compositeFilter.op))}(n):z(30097,{filter:n})}function Og(n){return Eg[n]}function Vg(n){return yg[n]}function kg(n){return Tg[n]}function pr(n){return{fieldPath:n.canonicalString()}}function gr(n){return Pt.fromServerFormat(n.fieldPath)}function B6(n){return n instanceof bt?function(e){if(e.op==="=="){if(ue(e.value))return{unaryFilter:{field:pr(e.field),op:"IS_NAN"}};if(de(e.value))return{unaryFilter:{field:pr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ue(e.value))return{unaryFilter:{field:pr(e.field),op:"IS_NOT_NAN"}};if(de(e.value))return{unaryFilter:{field:pr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pr(e.field),op:Vg(e.op),value:e.value}}}(n):n instanceof Le?function(e){const r=e.getFilters().map(s=>B6(s));return r.length===1?r[0]:{compositeFilter:{op:kg(e.op),filters:r}}}(n):z(54877,{filter:n})}function Dg(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $6(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function q6(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function $s(n,t){const e={fields:{}};return t.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);e.fields[s]=r._toProto(n)}),{mapValue:e}}function H6(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n){return new Ig(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new _e(Rt.fromBase64String(t))}catch(e){throw new q(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new _e(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:_e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ei(t,_e._jsonSchema))return _e.fromBase64String(t.bytes)}}_e._jsonSchemaVersion="firestore/bytes/1.0",_e._jsonSchema={type:At("string",_e._jsonSchemaVersion),bytes:At("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new q(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function xg(){return new Mo(Pr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new q(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new q(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return it(this._lat,t._lat)||it(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:De._jsonSchemaVersion}}static fromJSON(t){if(ei(t,De._jsonSchema))return new De(t.latitude,t.longitude)}}function j6(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De._jsonSchemaVersion="firestore/geoPoint/1.0",De._jsonSchema={type:At("string",De._jsonSchemaVersion),latitude:At("number"),longitude:At("number")};class Lg{bt(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="ConnectivityMonitor";class uh{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(t){this.Ct.push(t)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){B(ah,"Network connectivity changed: AVAILABLE");for(const t of this.Ct)t(0)}xt(){B(ah,"Network connectivity changed: UNAVAILABLE");for(const t of this.Ct)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki=null;function l1(){return ki===null?ki=function(){return 268435456+Math.round(2147483648*Math.random())}():ki++,"0x"+ki.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="RestConnection",Mg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Fg{get Ot(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Mt=e+"://"+t.host,this.Nt=`projects/${r}/databases/${s}`,this.Lt=this.databaseId.database===io?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Bt(t,e,r,s,i){const o=l1(),u=this.Ut(t,e.toUriEncodedString());B(ka,`Sending RPC '${t}' ${o}:`,u,r);const c={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(c,s,i);const{host:h}=new URL(u),p=Qs(h);return this.qt(t,u,c,r,p).then(g=>(B(ka,`Received RPC '${t}' ${o}: `,g),g),g=>{throw Ae(ka,`RPC '${t}' ${o} failed with error: `,g,"url: ",u,"request:",r),g})}$t(t,e,r,s,i,o){return this.Bt(t,e,r,s,i)}kt(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ur}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}Ut(t,e){const r=Mg[t];let s=`${this.Mt}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t){this.Kt=t.Kt,this.Wt=t.Wt}Qt(t){this.Gt=t}zt(t){this.jt=t}Ht(t){this.Jt=t}onMessage(t){this.Yt=t}close(){this.Wt()}send(t){this.Kt(t)}Zt(){this.Gt()}Xt(){this.jt()}en(t){this.Jt(t)}tn(t){this.Yt(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection",ls=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class wr extends Fg{constructor(t){super(t),this.nn=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static rn(){if(!wr.sn){const t=X2();ls(t,Q2.STAT_EVENT,e=>{e.stat===t1.PROXY?B(Bt,"STAT_EVENT: detected buffering proxy"):e.stat===t1.NOPROXY&&B(Bt,"STAT_EVENT: detected no buffering proxy")}),wr.sn=!0}}qt(t,e,r,s,i){const o=l1();return new Promise((u,c)=>{const h=new K2;h.setWithCredentials(!0),h.listenOnce(Y2.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case $i.NO_ERROR:const g=h.getResponseJson();B(Bt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),u(g);break;case $i.TIMEOUT:B(Bt,`RPC '${t}' ${o} timed out`),c(new q(x.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const y=h.getStatus();if(B(Bt,`RPC '${t}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const O=C==null?void 0:C.error;if(O&&O.status&&O.message){const M=function(X){const ut=X.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(ut)>=0?ut:x.UNKNOWN}(O.status);c(new q(M,O.message))}else c(new q(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new q(x.UNAVAILABLE,"Connection failed."));break;default:z(9055,{_n:t,streamId:o,an:h.getLastErrorCode(),un:h.getLastError()})}}finally{B(Bt,`RPC '${t}' ${o} completed.`)}});const p=JSON.stringify(s);B(Bt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",p,r,15)})}cn(t,e,r){const s=l1(),i=[this.Mt,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.kt(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const h=i.join("");B(Bt,`Creating RPC '${t}' stream ${s}: ${h}`,u);const p=o.createWebChannel(h,u);this.En(p);let g=!1,y=!1;const C=new Ug({Kt:O=>{y?B(Bt,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(g||(B(Bt,`Opening RPC '${t}' stream ${s} transport.`),p.open(),g=!0),B(Bt,`RPC '${t}' stream ${s} sending:`,O),p.send(O))},Wt:()=>p.close()});return ls(p,hs.EventType.OPEN,()=>{y||(B(Bt,`RPC '${t}' stream ${s} transport opened.`),C.Zt())}),ls(p,hs.EventType.CLOSE,()=>{y||(y=!0,B(Bt,`RPC '${t}' stream ${s} transport closed`),C.en(),this.hn(p))}),ls(p,hs.EventType.ERROR,O=>{y||(y=!0,Ae(Bt,`RPC '${t}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),C.en(new q(x.UNAVAILABLE,"The operation could not be completed")))}),ls(p,hs.EventType.MESSAGE,O=>{var M;if(!y){const U=O.data[0];H(!!U,16349);const X=U,ut=(X==null?void 0:X.error)||((M=X[0])==null?void 0:M.error);if(ut){B(Bt,`RPC '${t}' stream ${s} received error:`,ut);const _t=ut.status;let ge=function(v){const E=wt[v];if(E!==void 0)return b6(E)}(_t),Mt=ut.message;_t==="NOT_FOUND"&&Mt.includes("database")&&Mt.includes("does not exist")&&Mt.includes(this.databaseId.database)&&Ae(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ge===void 0&&(ge=x.INTERNAL,Mt="Unknown error status: "+_t+" with message "+ut.message),y=!0,C.en(new q(ge,Mt)),p.close()}else B(Bt,`RPC '${t}' stream ${s} received:`,U),C.tn(U)}}),wr.rn(),setTimeout(()=>{C.Xt()},0),C}terminate(){this.nn.forEach(t=>t.close()),this.nn=[]}En(t){this.nn.push(t)}hn(t){this.nn=this.nn.filter(e=>e===t)}kt(t,e,r){super.kt(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return J2()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n){return new wr(n)}wr.sn=!1;class G6{constructor(t,e,r=1e3,s=1.5,i=6e4){this.Tn=t,this.timerId=e,this.Pn=r,this.Rn=s,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(t){this.cancel();const e=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),s=Math.max(0,e-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.An} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,s,()=>(this.dn=Date.now(),t())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="PersistentStream";class z6{constructor(t,e,r,s,i,o,u,c){this.Tn=t,this.yn=r,this.wn=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new G6(t,e)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,()=>this.Ln()))}Bn(t){this.Un(),this.stream.send(t)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(t,e){this.Un(),this.kn(),this.xn.cancel(),this.bn++,t!==4?this.xn.reset():e&&e.code===x.RESOURCE_EXHAUSTED?(Qe(e.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):e&&e.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ht(e)}qn(){}auth(){this.state=1;const t=this.$n(this.bn),e=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.bn===e&&this.Kn(r,s)},r=>{t(()=>{const s=new q(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(s)})})}Kn(t,e){const r=this.$n(this.bn);this.stream=this.Qn(t,e),this.stream.Qt(()=>{r(()=>this.listener.Qt())}),this.stream.zt(()=>{r(()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,()=>(this.Fn()&&(this.state=3),Promise.resolve())),this.listener.zt()))}),this.stream.Ht(s=>{r(()=>this.Wn(s))}),this.stream.onMessage(s=>{r(()=>++this.Dn==1?this.Gn(s):this.onNext(s))})}On(){this.state=5,this.xn.mn(async()=>{this.state=0,this.start()})}Wn(t){return B(ch,`close with error: ${t}`),this.stream=null,this.close(4,t)}$n(t){return e=>{this.Tn.enqueueAndForget(()=>this.bn===t?e():(B(ch,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $g extends z6{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}Qn(t,e){return this.connection.cn("Listen",t,e)}Gn(t){return this.onNext(t)}onNext(t){this.xn.reset();const e=Ag(this.serializer,t),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?ke(o.readTime):J.min()}(t);return this.listener.zn(e,r)}jn(t){const e={};e.database=c1(this.serializer),e.addTarget=function(i,o){let u;const c=o.target;if(u=jn(c)?{pipelineQuery:Ng(i,c)}:P6(c)?{documents:Sg(i,c)}:{query:Cg(i,c).yt},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=x6(i,o.resumeToken);const h=a1(i,o.expectedCount);h!==null&&(u.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){u.readTime=fo(i,o.snapshotVersion.toTimestamp());const h=a1(i,o.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,t);const r=bg(this.serializer,t);r&&(e.labels=r),this.Bn(e)}Hn(t){const e={};e.database=c1(this.serializer),e.removeTarget=t,this.Bn(e)}}class qg extends z6{constructor(t,e,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(t,e){return this.connection.cn("Write",t,e)}Gn(t){return H(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0,55816),this.listener.Zn()}onNext(t){H(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.xn.reset();const e=Rg(t.writeResults,t.commitTime),r=ke(t.commitTime);return this.listener.Xn(r,e)}er(){const t={};t.database=c1(this.serializer),this.Bn(t)}Yn(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>vg(this.serializer,r))};this.Bn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{}class jg extends Hg{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.tr=!1}nr(){if(this.tr)throw new q(x.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(t,e,r,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Bt(t,u1(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(x.UNKNOWN,i.toString())})}$t(t,e,r,s,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.$t(t,u1(e,r),s,o,u,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(x.UNKNOWN,o.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function Gg(n,t,e,r){return new jg(n,t,e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="ComponentProvider",lh=new Map;function Wg(n,t,e,r,s){return new D3(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,j6(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W6=41943040;class ee{static withCacheSize(t){return new ee(t,ee.DEFAULT_COLLECTION_PERCENTILE,ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}ee.DEFAULT_COLLECTION_PERCENTILE=10,ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ee.DEFAULT=new ee(W6,ee.DEFAULT_COLLECTION_PERCENTILE,ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ee.DISABLED=new ee(-1,0,0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="LruGarbageCollector",Kg=1048576;function dh([n,t],[e,r]){const s=it(n,e);return s===0?it(t,r):s}class Yg{constructor(t){this.rr=t,this.buffer=new vt(dh),this.ir=0}sr(){return++this.ir}_r(t){const e=[t,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();dh(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Qg{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(t){B(fh,`Garbage collection scheduled in ${t}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){$r(e)?B(fh,"Ignoring IndexedDB error during garbage collection: ",e):await Br(e)}await this.ur(3e5)})}}class Xg{constructor(t,e){this.cr=t,this.params=e}calculateTargetCount(t,e){return this.cr.lr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return D.resolve(Co.ce);const r=new Yg(e);return this.cr.forEachTarget(t,s=>r._r(s.sequenceNumber)).next(()=>this.cr.Er(t,s=>r._r(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.cr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.cr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(hh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hh):this.hr(t,e))}getCacheSize(t){return this.cr.getCacheSize(t)}hr(t,e){let r,s,i,o,u,c,h;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(r=g,u=Date.now(),this.removeTargets(t,r,e))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(g=>(h=Date.now(),fr()<=st.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(u-o)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Jg(n,t){return new Xg(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K6="firestore.googleapis.com",ph=!0;class gh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new q(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=K6,this.ssl=ph}else this.host=t.host,this.ssl=t.ssl??ph;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=W6;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Kg)throw new q(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}I3("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=j6(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Uo{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new q(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new h3;switch(r.type){case"firstParty":return new g3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=lh.get(e);r&&(B(zg,"Removing Datastore"),lh.delete(e),r.terminate())}(this),Promise.resolve()}}function Zg(n,t,e,r={}){var h;n=je(n,Uo);const s=Qs(t),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&u2(`https://${u}`),i.host!==K6&&i.host!==u&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:u,ssl:s,emulatorOptions:r};if(!Xn(c,o)&&(n._setSettings(c),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=Ht.MOCK_USER;else{p=O0(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ht(y)}n._authCredentials=new f3(new e6(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Bo(this.firestore,t,this._query)}}class It{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(ei(e,It._jsonSchema))return new It(t,r||null,new G(ct.fromString(e.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:At("string",It._jsonSchemaVersion),referencePath:At("string")};class Tn extends Bo{constructor(t,e,r){super(t,e,Do(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new G(t))}withConverter(t){return new Tn(this.firestore,t,this._path)}}function or(n,t,...e){if(n=Wt(n),n6("collection","path",t),n instanceof Uo){const r=ct.fromString(t,...e);return $l(r),new Tn(n,null,r)}{if(!(n instanceof It||n instanceof Tn))throw new q(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ct.fromString(t,...e));return $l(r),new Tn(n.firestore,null,r)}}function Y1(n,t,...e){if(n=Wt(n),arguments.length===1&&(t=U1.newId()),n6("doc","path",t),n instanceof Uo){const r=ct.fromString(t,...e);return Bl(r),new It(n,null,new G(r))}{if(!(n instanceof It||n instanceof Tn))throw new q(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ct.fromString(t,...e));return Bl(r),new It(n.firestore,n instanceof Tn?n.converter:null,new G(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:ie._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ei(t,ie._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new ie(t.vectorValues);throw new q(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ie._jsonSchemaVersion="firestore/vectorValue/1.0",ie._jsonSchema={type:At("string",ie._jsonSchemaVersion),vectorValues:At("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=/^__.*__$/;class em{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ln(t,this.data,this.fieldMask,e,this.fieldTransforms):new ri(t,this.data,e,this.fieldTransforms)}}class Y6{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ln(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Q6(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:n})}}class Q1{constructor(t,e,r,s,i,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Q1({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return go(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Q6(this.dataSource)&&tm.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class nm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Lo(t)}createContext(t,e,r,s=!1){return new Q1({dataSource:t,methodName:e,targetDoc:r,path:Pt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function X6(n){const t=n._freezeSettings(),e=Lo(n._databaseId);return new nm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function rm(n,t,e,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,t,e,s);J1("Data must be an object, but it was:",o,r);const u=J6(r,o);let c,h;if(i.merge)c=new fe(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const y=kr(t,g,e);if(!o.contains(y))throw new q(x.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);ef(p,y)||p.push(y)}c=new fe(p),h=o.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=o.fieldTransforms;return new em(new Jt(u),c,h)}class $o extends Fo{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $o}}class X1 extends Fo{_toFieldTransform(t){return new B3(t.path,new Ms)}isEqual(t){return t instanceof X1}}function sm(n,t,e,r){const s=n.createContext(1,t,e);J1("Data must be an object, but it was:",s,r);const i=[],o=Jt.empty();xn(r,(c,h)=>{const p=tf(t,c,e);h=Wt(h);const g=s.childContextForFieldPath(p);if(h instanceof $o)i.push(p);else{const y=tr(h,g);y!=null&&(i.push(p),o.set(p,y))}});const u=new fe(i);return new Y6(o,u,s.fieldTransforms)}function im(n,t,e,r,s,i){const o=n.createContext(1,t,e),u=[kr(t,r,e)],c=[s];if(i.length%2!=0)throw new q(x.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)u.push(kr(t,i[y])),c.push(i[y+1]);const h=[],p=Jt.empty();for(let y=u.length-1;y>=0;--y)if(!ef(h,u[y])){const C=u[y];let O=c[y];O=Wt(O);const M=o.childContextForFieldPath(C);if(O instanceof $o)h.push(C);else{const U=tr(O,M);U!=null&&(h.push(C),p.set(C,U))}}const g=new fe(h);return new Y6(p,g,o.fieldTransforms)}function tr(n,t,e){if(Z6(n=Wt(n)))return J1("Unsupported field value:",t,n),J6(n,t);if(n instanceof Fo)return function(s,i){if(!Q6(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(s,i){const o=[];let u=0;for(const c of s){let h=tr(c,i.childContextForArray(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(s,i,o){if((s=Wt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return H1(i.serializer,s,o);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=dt.fromDate(s);return{timestampValue:fo(i.serializer,u)}}if(s instanceof dt){const u=new dt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:fo(i.serializer,u)}}if(s instanceof De)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _e)return{bytesValue:x6(i.serializer,s._byteString)};if(s instanceof It){const u=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(u))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:K1(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ie)return function(c,h){const p=c instanceof ie?c.toArray():c;return{mapValue:{fields:{[l6]:{stringValue:h6},[xs]:{arrayValue:{values:p.map(y=>{if(typeof y!="number")throw h.createError("VectorValues must only contain numeric values.");return No(h.serializer,y)})}}}}}}(s,i);if(q6(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${B1(s)}`)}(n,t,e)}function J6(n,t){const e={};return s6(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xn(n,(r,s)=>{const i=tr(s,t.childContextForField(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Z6(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof De||n instanceof _e||n instanceof It||n instanceof Fo||n instanceof ie||q6(n))}function J1(n,t,e){if(!Z6(e)||!ti(e)){const r=B1(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function kr(n,t,e){if((t=Wt(t))instanceof Mo)return t._internalPath;if(typeof t=="string")return tf(n,t);throw go("Field path arguments must be of type string or ",n,!1,void 0,e)}const om=new RegExp("[~\\*/\\[\\]]");function tf(n,t,e){if(t.search(om)>=0)throw go(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Mo(...t.split("."))._internalPath}catch{throw go(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function go(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new q(x.INVALID_ARGUMENT,u+n+c)}function ef(n,t){return n.some(e=>e.isEqual(t))}function am(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.optionDefinitions=t}_getKnownOptions(t,e){const r=Jt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in t){const o=t[s];let u;i.nestedOptions&&ti(o)?u={mapValue:{fields:new Kt(i.nestedOptions).getOptionsProto(e,o)}}:o&&(u=tr(o,e)??void 0),u&&r.set(Pt.fromServerFormat(i.serverName),u)}}return r}getOptionsProto(t,e,r){const s=this._getKnownOptions(e,t);if(r){const i=new Map(V3(r,(o,u)=>[Pt.fromServerFormat(u),o!==void 0?tr(o,t):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(e){return typeof e=="object"&&e!==null&&"seconds"in e&&(e.seconds===null||typeof e.seconds=="number"||typeof e.seconds=="string")&&"nanos"in e&&(e.nanos===null||typeof e.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(e){return typeof e=="object"&&e!==null&&"latitude"in e&&(e.latitude===null||typeof e.latitude=="number")&&"longitude"in e&&(e.longitude===null||typeof e.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(e){return typeof e=="object"&&e!==null&&!(!("values"in e)||e.values!==null&&!Array.isArray(e.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(e){return typeof e=="object"&&e!==null&&!(!("fields"in e)||e.fields!==null&&!ti(e.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(e){return typeof e=="object"&&e!==null&&!(!("name"in e)||e.name!==null&&typeof e.name!="string"||!("args"in e)||e.args!==null&&!Array.isArray(e.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(e){return typeof e=="object"&&e!==null&&!(!("stages"in e)||e.stages!==null&&!Array.isArray(e.stages))}(n.pipelineValue)))}function er(){return new X1("serverTimestamp")}function cm(n){return new ie(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n){let t;return n instanceof ar?n:(t=ti(n)?gm(n):n instanceof Array?mm(n):nf(n,void 0),t)}function Da(n){if(n instanceof ar)return n;if(n instanceof ie)return qs(n);if(Array.isArray(n))return qs(cm(n));throw new Error("Unsupported value: "+typeof n)}function Z1(n){return b3(n)?fm(n):L(n)}class ar{constructor(){this._protoValueType="ProtoValue"}add(t){return new V("add",[this,L(t)],"add")}asBoolean(){if(this instanceof Pn)return this;if(this instanceof qr)return new sf(this);if(this instanceof oi)return new pm(this);if(this instanceof V)return new rf(this);throw new q("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(t){return new V("subtract",[this,L(t)],"subtract")}multiply(t){return new V("multiply",[this,L(t)],"multiply")}divide(t){return new V("divide",[this,L(t)],"divide")}mod(t){return new V("mod",[this,L(t)],"mod")}equal(t){return new V("equal",[this,L(t)],"equal").asBoolean()}notEqual(t){return new V("not_equal",[this,L(t)],"notEqual").asBoolean()}lessThan(t){return new V("less_than",[this,L(t)],"lessThan").asBoolean()}lessThanOrEqual(t){return new V("less_than_or_equal",[this,L(t)],"lessThanOrEqual").asBoolean()}greaterThan(t){return new V("greater_than",[this,L(t)],"greaterThan").asBoolean()}greaterThanOrEqual(t){return new V("greater_than_or_equal",[this,L(t)],"greaterThanOrEqual").asBoolean()}arrayConcat(t,...e){const r=[t,...e].map(s=>L(s));return new V("array_concat",[this,...r],"arrayConcat")}arrayContains(t){return new V("array_contains",[this,L(t)],"arrayContains").asBoolean()}arrayContainsAll(t){const e=Array.isArray(t)?new ds(t.map(L),"arrayContainsAll"):t;return new V("array_contains_all",[this,e],"arrayContainsAll").asBoolean()}arrayContainsAny(t){const e=Array.isArray(t)?new ds(t.map(L),"arrayContainsAny"):t;return new V("array_contains_any",[this,e],"arrayContainsAny").asBoolean()}arrayReverse(){return new V("array_reverse",[this])}arrayLength(){return new V("array_length",[this],"arrayLength")}equalAny(t){const e=Array.isArray(t)?new ds(t.map(L),"equalAny"):t;return new V("equal_any",[this,e],"equalAny").asBoolean()}notEqualAny(t){const e=Array.isArray(t)?new ds(t.map(L),"notEqualAny"):t;return new V("not_equal_any",[this,e],"notEqualAny").asBoolean()}exists(){return new V("exists",[this],"exists").asBoolean()}charLength(){return new V("char_length",[this],"charLength")}like(t){return new V("like",[this,L(t)],"like").asBoolean()}regexContains(t){return new V("regex_contains",[this,L(t)],"regexContains").asBoolean()}regexFind(t){return new V("regex_find",[this,L(t)],"regexFind")}regexFindAll(t){return new V("regex_find_all",[this,L(t)],"regexFindAll")}regexMatch(t){return new V("regex_match",[this,L(t)],"regexMatch").asBoolean()}stringContains(t){return new V("string_contains",[this,L(t)],"stringContains").asBoolean()}startsWith(t){return new V("starts_with",[this,L(t)],"startsWith").asBoolean()}endsWith(t){return new V("ends_with",[this,L(t)],"endsWith").asBoolean()}toLower(){return new V("to_lower",[this],"toLower")}toUpper(){return new V("to_upper",[this],"toUpper")}trim(t){const e=[this];return t&&e.push(L(t)),new V("trim",e,"trim")}ltrim(t){const e=[this];return t&&e.push(L(t)),new V("ltrim",e,"ltrim")}rtrim(t){const e=[this];return t&&e.push(L(t)),new V("rtrim",e,"rtrim")}type(){return new V("type",[this])}isType(t){return new V("is_type",[this,qs(t)],"isType").asBoolean()}stringConcat(t,...e){const r=[t,...e].map(L);return new V("string_concat",[this,...r],"stringConcat")}stringIndexOf(t){return new V("string_index_of",[this,L(t)],"stringIndexOf")}stringRepeat(t){return new V("string_repeat",[this,L(t)],"stringRepeat")}stringReplaceAll(t,e){return new V("string_replace_all",[this,L(t),L(e)],"stringReplaceAll")}stringReplaceOne(t,e){return new V("string_replace_one",[this,L(t),L(e)],"stringReplaceOne")}concat(t,...e){const r=[t,...e].map(L);return new V("concat",[this,...r],"concat")}reverse(){return new V("reverse",[this],"reverse")}arrayFilter(t,e){return new V("array_filter",[this,L(t),e],"arrayFilter")}arrayTransform(t,e){return new V("array_transform",[this,L(t),e],"arrayTransform")}arrayTransformWithIndex(t,e,r){return new V("array_transform",[this,L(t),L(e),r],"arrayTransformWithIndex")}arraySlice(t,e){const r=[this,L(t)];return e!==void 0&&r.push(L(e)),new V("array_slice",r,"arraySlice")}arrayFirst(){return new V("array_first",[this],"arrayFirst")}arrayFirstN(t){return new V("array_first_n",[this,L(t)],"arrayFirstN")}arrayLast(){return new V("array_last",[this],"arrayLast")}arrayLastN(t){return new V("array_last_n",[this,L(t)],"arrayLastN")}arrayMaximum(){return new V("maximum",[this],"arrayMaximum")}arrayMaximumN(t){return new V("maximum_n",[this,L(t)],"arrayMaximumN")}arrayMinimum(){return new V("minimum",[this],"arrayMinimum")}arrayMinimumN(t){return new V("minimum_n",[this,L(t)],"arrayMinimumN")}arrayIndexOf(t){return new V("array_index_of",[this,L(t),L("first")],"arrayIndexOf")}arrayLastIndexOf(t){return new V("array_index_of",[this,L(t),L("last")],"arrayLastIndexOf")}arrayIndexOfAll(t){return new V("array_index_of_all",[this,L(t)],"arrayIndexOfAll")}byteLength(){return new V("byte_length",[this],"byteLength")}ceil(){return new V("ceil",[this])}floor(){return new V("floor",[this])}abs(){return new V("abs",[this])}exp(){return new V("exp",[this])}mapGet(t){return new V("map_get",[this,qs(t)],"mapGet")}mapSet(t,e,...r){const s=[this,L(t),L(e),...r.map(L)];return new V("map_set",s,"mapSet")}mapKeys(){return new V("map_keys",[this],"mapKeys")}mapValues(){return new V("map_values",[this],"mapValues")}mapEntries(){return new V("map_entries",[this],"mapEntries")}getField(t){return new V("get_field",[this,L(t)],"get_field")}count(){return he._create("count",[this],"count")}sum(){return he._create("sum",[this],"sum")}average(){return he._create("average",[this],"average")}minimum(){return he._create("minimum",[this],"minimum")}maximum(){return he._create("maximum",[this],"maximum")}first(){return he._create("first",[this],"first")}last(){return he._create("last",[this],"last")}arrayAgg(){return he._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return he._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return he._create("count_distinct",[this],"countDistinct")}logicalMaximum(t,...e){const r=[t,...e];return new V("maximum",[this,...r.map(L)],"logicalMaximum")}logicalMinimum(t,...e){const r=[t,...e];return new V("minimum",[this,...r.map(L)],"minimum")}vectorLength(){return new V("vector_length",[this],"vectorLength")}cosineDistance(t){return new V("cosine_distance",[this,Da(t)],"cosineDistance")}dotProduct(t){return new V("dot_product",[this,Da(t)],"dotProduct")}euclideanDistance(t){return new V("euclidean_distance",[this,Da(t)],"euclideanDistance")}unixMicrosToTimestamp(){return new V("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new V("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new V("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new V("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new V("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new V("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(t,e){return new V("timestamp_add",[this,L(t),L(e)],"timestampAdd")}timestampSubtract(t,e){return new V("timestamp_subtract",[this,L(t),L(e)],"timestampSubtract")}timestampDiff(t,e){return new V("timestamp_diff",[this,Z1(t),L(e)],"timestampDiff")}timestampExtract(t,e){const r=[this,L(t)];return e&&r.push(L(e)),new V("timestamp_extract",r,"timestampExtract")}documentId(){return new V("document_id",[this],"documentId")}parent(){return new V("parent",[this],"parent")}substring(t,e){const r=L(t);return new V("substring",e===void 0?[this,r]:[this,r,L(e)],"substring")}arrayGet(t){return new V("array_get",[this,L(t)],"arrayGet")}isError(){return new V("is_error",[this],"isError").asBoolean()}ifError(t){const e=new V("if_error",[this,L(t)],"ifError");return t instanceof Pn?e.asBoolean():e}isAbsent(){return new V("is_absent",[this],"isAbsent").asBoolean()}mapRemove(t){return new V("map_remove",[this,L(t)],"mapRemove")}mapMerge(t,...e){const r=L(t),s=e.map(L);return new V("map_merge",[this,r,...s],"mapMerge")}pow(t){return new V("pow",[this,L(t)])}trunc(t){return t===void 0?new V("trunc",[this]):new V("trunc",[this,L(t)],"trunc")}round(t){return t===void 0?new V("round",[this]):new V("round",[this,L(t)],"round")}collectionId(){return new V("collection_id",[this])}length(){return new V("length",[this])}ln(){return new V("ln",[this])}sqrt(){return new V("sqrt",[this])}stringReverse(){return new V("string_reverse",[this])}ifAbsent(t){return new V("if_absent",[this,L(t)],"ifAbsent")}ifNull(t){return new V("if_null",[this,L(t)],"ifNull")}coalesce(t,...e){return new V("coalesce",[this,L(t),...e.map(L)],"coalesce")}join(t){return new V("join",[this,L(t)],"join")}log10(){return new V("log10",[this])}arraySum(){return new V("sum",[this])}split(t){return new V("split",[this,L(t)])}timestampTruncate(t,e){const r=[this,L(t)];return e&&r.push(L(e)),new V("timestamp_trunc",r)}ascending(){return _m(this)}descending(){return Em(this)}as(t){return new hm(this,t,"as")}}class he{constructor(t,e){this.name=t,this.params=e,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(t,e,r){const s=new he(t,e);return s._methodName=r,s}as(t){return new lm(this,t,"as")}_toProto(t){return{functionValue:{name:this.name,args:this.params.map(e=>e._toProto(t))}}}_readUserData(t){t=this._methodName?t.contextWith({methodName:this._methodName}):t,this.params.forEach(e=>e._readUserData(t))}}class lm{constructor(t,e,r){this.aggregate=t,this.alias=e,this._methodName=r}_readUserData(t){this.aggregate._readUserData(t)}}class hm{constructor(t,e,r){this.expr=t,this.alias=e,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(t){this.expr._readUserData(t)}}class ds extends ar{constructor(t,e){super(),this.Rr=t,this._methodName=e,this.expressionType="ListOfExpressions"}_toProto(t){return{arrayValue:{values:this.Rr.map(e=>e._toProto(t))}}}_readUserData(t){this.Rr.forEach(e=>e._readUserData(t))}}class oi extends ar{constructor(t,e){super(),this.fieldPath=t,this._methodName=e,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(t){return new V("geo_distance",[this,L(t)],"geoDistance")}_toProto(t){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(t){}}function fm(n){return dm(n,"field")}function dm(n,t){return new oi(typeof n=="string"?Pr===n?xg()._internalPath:kr("field",n):n._internalPath,t)}class qr extends ar{constructor(t,e){super(),this.value=t,this._methodName=e,this.expressionType="Constant"}static _fromProto(t){const e=new qr(t,void 0);return e._protoValue=t,e}_toProto(t){return H(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(t){t=this._methodName?t.contextWith({methodName:this._methodName}):t,um(this._protoValue)||(this._protoValue=tr(this.value,t))}}function qs(n,t){return nf(n,"constant")}function nf(n,t){const e=new qr(n,t);return typeof n=="boolean"?new sf(e):e}class V extends ar{constructor(t,e,r,s){super(),this.name=t,this.params=e,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Kt({})}_toProto(t){const e={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(t))}};return this._optionsProto&&(e.functionValue.options=this._optionsProto),e}_readUserData(t){t=this._methodName?t.contextWith({methodName:this._methodName}):t,this.params.forEach(e=>e._readUserData(t)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(t,this._options))}}class Pn extends ar{get _methodName(){return this._expr._methodName}countIf(){return he._create("count_if",[this],"countIf")}not(){return new V("not",[this],"not").asBoolean()}conditional(t,e){return new V("conditional",[this,t,e],"conditional")}ifError(t){const e=L(t),r=new V("if_error",[this,e],"ifError");return e instanceof Pn?r.asBoolean():r}_toProto(t){return this._expr._toProto(t)}_readUserData(t){this._expr._readUserData(t)}}class rf extends Pn{constructor(t){super(),this._expr=t,this.expressionType="Function"}}class sf extends Pn{constructor(t){super(),this._expr=t,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class pm extends Pn{constructor(t){super(),this._expr=t,this.expressionType="Field"}}function gm(n,t){const e=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];e.push(qs(r)),e.push(L(s))}return new V("map",e,"map")}function mm(n){return function(e,r){return new V("array",e.map(s=>L(s)),r)}(n,"array")}function _m(n){return new of(Z1(n),"ascending","ascending")}function Em(n){return new of(Z1(n),"descending","descending")}class of{constructor(t,e,r){this.expr=t,this.direction=e,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(t){return{mapValue:{fields:{direction:H6(this.direction),expression:this.expr._toProto(t)}}}}_readUserData(t){this.expr._readUserData(t)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=t}_readUserData(t){this.optionsProto=this._optionsUtil.getOptionsProto(t,this.knownOptions,this.rawOptions)}_toProto(t){return{name:this._name,options:this.optionsProto}}}class af extends pe{get _name(){return"add_fields"}get _optionsUtil(){return new Kt({})}constructor(t,e){super(e),this.fields=t}_toProto(t){return{...super._toProto(t),args:[$s(t,this.fields)]}}_readUserData(t){super._readUserData(t),bn(this.fields,t)}}class uf extends pe{get _name(){return"aggregate"}get _optionsUtil(){return new Kt({})}constructor(t,e,r){super(r),this.groups=t,this.accumulators=e}_toProto(t){return{...super._toProto(t),args:[$s(t,this.accumulators),$s(t,this.groups)]}}_readUserData(t){super._readUserData(t),bn(this.groups,t),bn(this.accumulators,t)}}class cf extends pe{get _name(){return"distinct"}get _optionsUtil(){return new Kt({})}constructor(t,e){super(e),this.groups=t}_toProto(t){return{...super._toProto(t),args:[$s(t,this.groups)]}}_readUserData(t){super._readUserData(t),bn(this.groups,t)}}class qo extends pe{get _name(){return"collection"}get _optionsUtil(){return new Kt({forceIndex:{serverName:"force_index"}})}constructor(t,e){super(e),this.Vr=t.startsWith("/")?t:"/"+t}_toProto(t){return{...super._toProto(t),args:[{referenceValue:this.Vr}]}}_readUserData(t){super._readUserData(t)}}class Ho extends pe{get _name(){return"collection_group"}get _optionsUtil(){return new Kt({forceIndex:{serverName:"force_index"}})}constructor(t,e){super(e),this.collectionId=t}_toProto(t){return{...super._toProto(t),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(t){super._readUserData(t)}}class tu extends pe{get _name(){return"database"}get _optionsUtil(){return new Kt({})}_toProto(t){return{...super._toProto(t)}}_readUserData(t){super._readUserData(t)}}class eu extends pe{get _name(){return"documents"}get _optionsUtil(){return new Kt({})}constructor(t,e){if(super(e),!t||t.length===0)throw new q(x.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=t.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new q(x.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=s}_toProto(t){return{...super._toProto(t),args:this.dr.map(e=>({referenceValue:e}))}}_readUserData(t){super._readUserData(t)}}class nu extends pe{get _name(){return"where"}get _optionsUtil(){return new Kt({})}constructor(t,e){super(e),this.condition=t}_toProto(t){return{...super._toProto(t),args:[this.condition._toProto(t)]}}_readUserData(t){super._readUserData(t),bn(this.condition,t)}}class Hs extends pe{get _name(){return"limit"}get _optionsUtil(){return new Kt({})}constructor(t,e){H(!isNaN(t)&&t!==1/0&&t!==-1/0,34860),super(e),this.limit=t}_toProto(t){return{...super._toProto(t),args:[H1(t,this.limit)]}}}class mh extends pe{get _name(){return"offset"}get _optionsUtil(){return new Kt({})}constructor(t,e){super(e),this.offset=t}_toProto(t){return{...super._toProto(t),args:[H1(t,this.offset)]}}}class ym extends pe{get _name(){return"select"}get _optionsUtil(){return new Kt({})}constructor(t,e){super(e),this.selections=t}_toProto(t){return{...super._toProto(t),args:[$s(t,this.selections)]}}_readUserData(t){super._readUserData(t),bn(this.selections,t)}}class ru extends pe{get _name(){return"sort"}get _optionsUtil(){return new Kt({})}constructor(t,e){super(e),this.orderings=t}_toProto(t){return{...super._toProto(t),args:this.orderings.map(e=>e._toProto(t))}}_readUserData(t){super._readUserData(t),bn(this.orderings,t)}}class su extends pe{get _name(){return"replace_with"}get _optionsUtil(){return new Kt({})}constructor(t,e){super(e),this.map=t}_toProto(t){return{...super._toProto(t),args:[this.map._toProto(t),H6(su.pr)]}}_readUserData(t){super._readUserData(t),bn(this.map,t)}}su.pr="full_replace";function bn(n,t){return am(n)?n._readUserData(t):Array.isArray(n)?n.forEach(e=>e._readUserData(t)):n instanceof Map?n.forEach(e=>e._readUserData(t)):Object.values(n).forEach(e=>e._readUserData(t)),n}// Copyright 2024 Google LLC* @license
class re{constructor(t,e,r){this.serializer=t,this.stages=e,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return jo(this)}getPipelineCollectionGroup(){return iu(this)}getPipelineCollectionId(){return Tm(this)}getPipelineDocuments(){return h1(this)}getPipelineFlavor(){return function(e){let r="exact";return e.stages.forEach((s,i)=>{s._name!==cf.name&&s._name!==uf.name||(r="keyless"),s._name===ym.name&&r==="exact"&&(r="augmented"),s._name===af.name&&i<e.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return In(this)}}function In(n){const t=n.stages[0];return t instanceof qo||t instanceof Ho||t instanceof tu||t instanceof eu?t._name:"unknown"}function jo(n){if(In(n)==="collection")return n.stages[0].Vr}function iu(n){if(In(n)==="collection_group")return n.stages[0].collectionId}function Tm(n){switch(In(n)){case"collection":return ct.fromString(jo(n)).lastSegment();case"collection_group":return iu(n);default:return}}function h1(n){if(In(n)==="documents")return n.stages[0].dr}// Copyright 2024 Google LLC* @license
class w{constructor(t,e){this.type=t,this.value=e}static vr(){return new w("ERROR",void 0)}static Sr(){return new w("UNSET",void 0)}static Dr(){return new w("NULL",Nr)}static newValue(t){return de(t)?new w("NULL",Nr):function(r){return!!r&&"booleanValue"in r}(t)?new w("BOOLEAN",t):Pe(t)?new w("INT",t):Gn(t)?new w("DOUBLE",t):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(t)?new w("TIMESTAMP",t):function(r){return!!r&&"stringValue"in r}(t)?new w("STRING",t):function(r){return!!r&&"bytesValue"in r}(t)?new w("BYTES",t):t.referenceValue?new w("REFERENCE",t):t.geoPointValue?new w("GEO_POINT",t):Vr(t)?new w("ARRAY",t):oo(t)?new w("VECTOR",t):Kn(t)?new w("MAP",t):new w("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function vs(n){if(!n.Cr())return n.value}function lf(n){return n instanceof Pn?n._expr:n}function W(n){if((n=lf(n))instanceof oi)return new Im(n);if(n instanceof qr)return new wm(n);if(n instanceof ds)return new Am(n);if(n instanceof V){if(n.name==="add")return new Sm(n);if(n.name==="subtract")return new Cm(n);if(n.name==="multiply")return new Pm(n);if(n.name==="divide")return new bm(n);if(n.name==="mod")return new Nm(n);if(n.name==="and")return new Om(n);if(n.name==="equal")return new Hm(n);if(n.name==="not_equal")return new jm(n);if(n.name==="less_than")return new Gm(n);if(n.name==="less_than_or_equal")return new zm(n);if(n.name==="greater_than")return new Wm(n);if(n.name==="greater_than_or_equal")return new Km(n);if(n.name==="array_concat")return new Ym(n);if(n.name==="array_reverse")return new Qm(n);if(n.name==="array_contains")return new Xm(n);if(n.name==="array_contains_all")return new Jm(n);if(n.name==="array_contains_any")return new Zm(n);if(n.name==="array_length")return new t9(n);if(n.name==="array_element")return new e9(n);if(n.name==="equal_any")return new hf(n);if(n.name==="not_equal_any")return new km(n);if(n.name==="is_nan")return new Dm(n);if(n.name==="is_not_nan")return new xm(n);if(n.name==="is_null")return new Lm(n);if(n.name==="is_not_null")return new Mm(n);if(n.name==="is_error")return new Fm(n);if(n.name==="exists")return new Um(n);if(n.name==="not")return new Go(n);if(n.name==="or")return new Vm(n);if(n.name==="xor")return new ou(n);if(n.name==="conditional")return new Bm(n);if(n.name==="maximum")return new $m(n);if(n.name==="minimum")return new qm(n);if(n.name==="reverse")return new n9(n);if(n.name==="replace_first")return new r9(n);if(n.name==="replace_all")return new s9(n);if(n.name==="char_length")return new i9(n);if(n.name==="byte_length")return new o9(n);if(n.name==="like")return new a9(n);if(n.name==="regex_contains")return new u9(n);if(n.name==="regex_match")return new c9(n);if(n.name==="string_contains")return new l9(n);if(n.name==="starts_with")return new h9(n);if(n.name==="ends_with")return new f9(n);if(n.name==="to_lower")return new d9(n);if(n.name==="to_upper")return new p9(n);if(n.name==="trim")return new g9(n);if(n.name==="string_concat")return new m9(n);if(n.name==="map_get")return new _9(n);if(n.name==="cosine_distance")return new E9(n);if(n.name==="dot_product")return new y9(n);if(n.name==="euclidean_distance")return new T9(n);if(n.name==="vector_length")return new I9(n);if(n.name==="unix_micros_to_timestamp")return new S9(n);if(n.name==="timestamp_to_unix_micros")return new b9(n);if(n.name==="unix_millis_to_timestamp")return new C9(n);if(n.name==="timestamp_to_unix_millis")return new N9(n);if(n.name==="unix_seconds_to_timestamp")return new P9(n);if(n.name==="timestamp_to_unix_seconds")return new O9(n);if(n.name==="timestamp_add")return new V9(n);if(n.name==="timestamp_subtract")return new k9(n)}throw new Error(`Unknown Expr : ${n}`)}class Im{constructor(t){this.expr=t}evaluate(t,e){if(this.expr.fieldName===Pr)return w.newValue({referenceValue:po(t.serializer,e.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:Gi(t.serializer,e.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:Gi(t.serializer,e.createTime)});const r=e.data.field(this.expr._fieldPath);return r?bo(r)?w.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Gi(i.serializer,J.fromTimestamp(br(o)))};if(i.serverTimestampBehavior==="previous"){const u=ni(o);if(u)return u}return{nullValue:"NULL_VALUE"}}(t,r)):w.newValue(r):w.Sr()}}class wm{constructor(t){this.expr=t}evaluate(t,e){return w.newValue(this.expr._getValue())}}class Am{constructor(t){this.expr=t}evaluate(t,e){const r=this.expr.Rr.map(s=>W(s).evaluate(t,e));return r.some(s=>s.Cr())?w.vr():w.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function Lt(n){return Gn(n)?Number(n.doubleValue):Number(n.integerValue)}function Me(n){return BigInt(n.integerValue)}const vm=BigInt("0x7fffffffffffffff"),Rm=-BigInt("0x8000000000000000");class ai{constructor(t){this.expr=t}evaluate(t,e){H(this.expr.params.length>=2,24778);const r=W(this.expr.params[0]).evaluate(t,e),s=W(this.expr.params[1]).evaluate(t,e);let i=this.Or(r,s);for(const o of this.expr.params.slice(2)){const u=W(o).evaluate(t,e);i=this.Or(i,u)}return i}Or(t,e){if(t.Cr()||e.Cr())return w.vr();if(t.Fr()||e.Fr())return w.Dr();const r=t.value,s=e.value;if(!Gn(r)&&!Pe(r)||!Gn(s)&&!Pe(s))return w.vr();if(Gn(r)||Gn(s)){const i=this.Mr(r,s);return i?w.newValue(i):w.vr()}if(Pe(r)&&Pe(s)){const i=this.Nr(r,s);return i===void 0?w.vr():typeof i=="number"?w.newValue({doubleValue:i}):i<Rm||i>vm?w.vr():w.newValue({integerValue:`${i}`})}return w.vr()}}function Xe(n,t){return St(n)!==St(t)?"TYPE_MISMATCH":ue(n)||ue(t)?"NOT_EQ":de(n)&&de(t)?"EQ":de(n)||de(t)?"NULL":Vr(n)&&Vr(t)?function(r,s){var o,u,c;if(((o=r.values)==null?void 0:o.length)!==((u=s.values)==null?void 0:u.length))return"NOT_EQ";let i=!1;for(let h=0;h<(((c=r.values)==null?void 0:c.length)??0);h++){const p=r.values[h],g=s.values[h];switch(Xe(p,g)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:z(44609,{Lr:p,Br:g})}}return i?"NULL":"EQ"}(n.arrayValue,t.arrayValue):oo(n)&&oo(t)||Kn(n)&&Kn(t)?function(r,s){const i=r.fields||{},o=s.fields||{};if(so(i)!==so(o))return"NOT_EQ";let u=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(Xe(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":u=!0}}return u?"NULL":"EQ"}(n.mapValue,t.mapValue):function(r,s){return ye(r,s,{Te:!1,Ee:!0,he:!0})}(n,t)?"EQ":"NOT_EQ"}class Sm extends ai{Nr(t,e){return Me(t)+Me(e)}Mr(t,e){return{doubleValue:Lt(t)+Lt(e)}}}class Cm extends ai{constructor(t){super(t),this.expr=t}Nr(t,e){return Me(t)-Me(e)}Mr(t,e){return{doubleValue:Lt(t)-Lt(e)}}}class Pm extends ai{constructor(t){super(t),this.expr=t}Nr(t,e){return Me(t)*Me(e)}Mr(t,e){return{doubleValue:Lt(t)*Lt(e)}}}class bm extends ai{constructor(t){super(t),this.expr=t}Nr(t,e){const r=Me(e);if(r!==BigInt(0))return Me(t)/r}Mr(t,e){const r=Lt(e);return r===0?{doubleValue:ks(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Lt(t)/r}}}class Nm extends ai{constructor(t){super(t),this.expr=t}Nr(t,e){const r=Me(e);if(r!==BigInt(0))return Me(t)%r}Mr(t,e){const r=Lt(e);if(r!==0)return{doubleValue:Lt(t)%r}}}class Om{constructor(t){this.expr=t}evaluate(t,e){var i;let r=!1,s=!1;for(const o of this.expr.params){const u=W(o).evaluate(t,e);switch(u.type){case"BOOLEAN":if(!((i=u.value)!=null&&i.booleanValue))return w.newValue(Dt);break;case"NULL":s=!0;break;default:r=!0}}return r?w.vr():s?w.Dr():w.newValue(oe)}}class Go{constructor(t){this.expr=t}evaluate(t,e){var s;H(this.expr.params.length===1,9634);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"BOOLEAN":return w.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return w.Dr();default:return w.vr()}}}class Vm{constructor(t){this.expr=t}evaluate(t,e){var i;let r=!1,s=!1;for(const o of this.expr.params){const u=W(o).evaluate(t,e);switch(u.type){case"BOOLEAN":if((i=u.value)!=null&&i.booleanValue)return w.newValue(oe);break;case"NULL":s=!0;break;default:r=!0}}return r?w.vr():s?w.Dr():w.newValue(Dt)}}class ou{constructor(t){this.expr=t}evaluate(t,e){var i;let r=!1,s=!1;for(const o of this.expr.params){const u=W(o).evaluate(t,e);switch(u.type){case"BOOLEAN":r=ou.xor(r,!!((i=u.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return w.vr()}}return s?w.Dr():w.newValue({booleanValue:r})}static xor(t,e){return(t||e)&&!(t&&e)}}class hf{constructor(t){this.expr=t}evaluate(t,e){var o,u;H(this.expr.params.length===2,55094);let r=!1;const s=W(this.expr.params[0]).evaluate(t,e);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return w.vr()}const i=W(this.expr.params[1]).evaluate(t,e);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.vr()}if(r)return w.Dr();for(const c of((u=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:u.values)??[])switch(de(s.value)&&de(c)?"EQ":Xe(s.value,c)){case"EQ":return w.newValue(oe);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:z(44608,{value:s.value,candidate:c})}return r?w.Dr():w.newValue(Dt)}}class km{constructor(t){this.expr=t}evaluate(t,e){return new Go(new V("not",[new V("equal_any",this.expr.params)])).evaluate(t,e)}}class Dm{constructor(t){this.expr=t}evaluate(t,e){H(this.expr.params.length===1,23322);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"INT":return w.newValue(Dt);case"DOUBLE":return w.newValue({booleanValue:isNaN(Lt(r.value))});case"NULL":return w.Dr();default:return w.vr()}}}class xm{constructor(t){this.expr=t}evaluate(t,e){return H(this.expr.params.length===1,50406),new Go(new V("not",[new V("is_nan",this.expr.params)])).evaluate(t,e)}}class Lm{constructor(t){this.expr=t}evaluate(t,e){switch(H(this.expr.params.length===1,23123),W(this.expr.params[0]).evaluate(t,e).type){case"NULL":return w.newValue(oe);case"UNSET":case"ERROR":return w.vr();default:return w.newValue(Dt)}}}class Mm{constructor(t){this.expr=t}evaluate(t,e){return H(this.expr.params.length===1,23167),new Go(new V("not",[new V("is_null",this.expr.params)])).evaluate(t,e)}}class Fm{constructor(t){this.expr=t}evaluate(t,e){return H(this.expr.params.length===1,5228),W(this.expr.params[0]).evaluate(t,e).type==="ERROR"?w.newValue(oe):w.newValue(Dt)}}class Um{constructor(t){this.expr=t}evaluate(t,e){switch(H(this.expr.params.length===1,6877),W(this.expr.params[0]).evaluate(t,e).type){case"ERROR":return w.vr();case"UNSET":return w.newValue(Dt);default:return w.newValue(oe)}}}class Bm{constructor(t){this.expr=t}evaluate(t,e){var s;H(this.expr.params.length===3,11706);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?W(this.expr.params[1]).evaluate(t,e):W(this.expr.params[2]).evaluate(t,e);case"NULL":return W(this.expr.params[2]).evaluate(t,e);default:return w.vr()}}}class $m{constructor(t){this.expr=t}evaluate(t,e){const r=this.expr.params.map(i=>W(i).evaluate(t,e));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ae(i.value,s.value)>0?i:s}return s===void 0?w.Dr():s}}class qm{constructor(t){this.expr=t}evaluate(t,e){const r=this.expr.params.map(i=>W(i).evaluate(t,e));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ae(i.value,s.value)<0?i:s}return s===void 0?w.Dr():s}}class Hr{constructor(t){this.expr=t}evaluate(t,e){H(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"ERROR":case"UNSET":return w.vr()}const s=W(this.expr.params[1]).evaluate(t,e);switch(s.type){case"ERROR":case"UNSET":return w.vr()}return this.Ur(r,s)}}class Hm extends Hr{constructor(t){super(t),this.expr=t}Ur(t,e){if(t.Fr()&&e.Fr())return w.newValue(oe);if(t.Fr()||e.Fr()||ue(t.value)||ue(e.value)||St(t.value)!==St(e.value))return w.newValue(Dt);switch(Xe(t.value,e.value)){case"EQ":return w.newValue(oe);case"NOT_EQ":return w.newValue(Dt);case"NULL":return w.Dr();default:z(44615,{left:t,right:e})}}}class jm extends Hr{constructor(t){super(t),this.expr=t}Ur(t,e){switch(Xe(t.value,e.value)){case"EQ":return w.newValue(Dt);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(oe);case"NULL":return w.Dr();default:z(44614,{left:t,right:e})}}}class Gm extends Hr{constructor(t){super(t),this.expr=t}Ur(t,e){return St(t.value)!==St(e.value)||ue(t.value)||ue(e.value)?w.newValue(Dt):w.newValue({booleanValue:ae(t.value,e.value)<0})}}class zm extends Hr{constructor(t){super(t),this.expr=t}Ur(t,e){return St(t.value)!==St(e.value)||ue(t.value)||ue(e.value)?w.newValue(Dt):Xe(t.value,e.value)==="EQ"?w.newValue(oe):w.newValue({booleanValue:ae(t.value,e.value)<0})}}class Wm extends Hr{constructor(t){super(t),this.expr=t}Ur(t,e){return St(t.value)!==St(e.value)||ue(t.value)||ue(e.value)?w.newValue(Dt):w.newValue({booleanValue:ae(t.value,e.value)>0})}}class Km extends Hr{constructor(t){super(t),this.expr=t}Ur(t,e){return St(t.value)!==St(e.value)||ue(t.value)||ue(e.value)?w.newValue(Dt):Xe(t.value,e.value)==="EQ"?w.newValue(oe):w.newValue({booleanValue:ae(t.value,e.value)>0})}}class Ym{constructor(t){this.expr=t}evaluate(t,e){throw new Error("Unimplemented")}}class Qm{constructor(t){this.expr=t}evaluate(t,e){var s;H(this.expr.params.length===1,216);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"NULL":return w.Dr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.vr()}}}class Xm{constructor(t){this.expr=t}evaluate(t,e){return H(this.expr.params.length===2,52884),new hf(new V("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(t,e)}}class Jm{constructor(t){this.expr=t}evaluate(t,e){var c,h,p,g;H(this.expr.params.length===2,1392);let r=!1;const s=W(this.expr.params[0]).evaluate(t,e);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.vr()}const i=W(this.expr.params[1]).evaluate(t,e);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.vr()}if(r)return w.Dr();const o=((h=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:h.values)??[],u=((g=(p=s.value)==null?void 0:p.arrayValue)==null?void 0:g.values)??[];for(const y of o){let C=!1;r=!1;for(const O of u){switch(de(y)&&de(O)?"EQ":Xe(y,O)){case"EQ":C=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:z(44613,{value:O,search:y})}if(C)break}if(!C)return w.newValue(Dt)}return w.newValue(oe)}}class Zm{constructor(t){this.expr=t}evaluate(t,e){var c,h,p,g;H(this.expr.params.length===2,2680);let r=!1;const s=W(this.expr.params[0]).evaluate(t,e);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.vr()}const i=W(this.expr.params[1]).evaluate(t,e);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return w.vr()}if(r)return w.Dr();const o=((h=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:h.values)??[],u=((g=(p=s.value)==null?void 0:p.arrayValue)==null?void 0:g.values)??[];for(const y of u)for(const C of o)switch(de(y)&&de(C)?"EQ":Xe(y,C)){case"EQ":return w.newValue(oe);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:z(44608,{value:y,search:C})}return r?w.Dr():w.newValue(Dt)}}class t9{constructor(t){this.expr=t}evaluate(t,e){var s,i,o;H(this.expr.params.length===1,38605);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"NULL":return w.Dr();case"ARRAY":return w.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return w.vr()}}}class e9{constructor(t){this.expr=t}evaluate(t,e){throw new Error("Unimplemented")}}class n9{constructor(t){this.expr=t}evaluate(t,e){var s,i;H(this.expr.params.length===1,1508);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"NULL":return w.Dr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const u=Rt.fromBase64String(o).toUint8Array();return u.reverse(),w.newValue({bytesValue:Rt.fromUint8Array(u).toBase64()})}return w.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,u=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),c=Array.from(u,h=>h.segment).reverse();return w.newValue({stringValue:c.join("")})}default:return w.vr()}}}class r9{constructor(t){this.expr=t}evaluate(t,e){throw new Error("Unimplemented")}}class s9{constructor(t){this.expr=t}evaluate(t,e){throw new Error("Unimplemented")}}class i9{constructor(t){this.expr=t}evaluate(t,e){H(this.expr.params.length===1,19400);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"NULL":return w.Dr();case"STRING":{const s=function(o){let u=0;for(let c=0;c<o.length;c++){const h=o.codePointAt(c);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const p=o.codePointAt(c+1);p!==void 0&&p>=56320&&p<=57343?(u+=1,c++):u+=1}else u+=1;else u+=1;else{if(!(h<=1114111))return;u+=1,c++}}return u}(r.value.stringValue);return s===void 0?w.vr():w.newValue({integerValue:s})}default:return w.vr()}}}class o9{constructor(t){this.expr=t}evaluate(t,e){var s,i;H(this.expr.params.length===1,8486);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?w.newValue({integerValue:Rt.fromBase64String(o).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(c){let h=0;for(let p=0;p<c.length;p++){const g=c.codePointAt(p);if(g===void 0)return;if(g>=55296&&g<=57343){if(!(g<=56319))return;{const y=c.codePointAt(p+1);if(y===void 0||!(y>=56320&&y<=57343))return;h+=4,p++}}else if(g<=127)h+=1;else if(g<=2047)h+=2;else if(g<=65535)h+=3;else{if(!(g<=1114111))return;h+=4,p++}}return h}((i=r.value)==null?void 0:i.stringValue);return o===void 0?w.vr():w.newValue({integerValue:o})}case"NULL":return w.Dr();default:return w.vr()}}}class jr{constructor(t){this.expr=t}evaluate(t,e){var o,u;H(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=W(this.expr.params[0]).evaluate(t,e);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return w.vr()}const i=W(this.expr.params[1]).evaluate(t,e);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return w.vr()}return r?w.Dr():this.kr((o=s.value)==null?void 0:o.stringValue,(u=i.value)==null?void 0:u.stringValue)}}class a9 extends jr{kr(t,e){try{const r=function(o){let u="";for(let c=0;c<o.length;c++){const h=o.charAt(c);switch(h){case"_":u+=".";break;case"%":u+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":u+="\\"+h;break;default:u+=h}}return"^"+u+"$"}(e),s=Os.compile(r);return w.newValue({booleanValue:s.matches(t)})}catch(r){return Ae(`Invalid LIKE pattern converted to regex: ${e}, returning error. Error: ${r}`),w.vr()}}}class u9 extends jr{kr(t,e){try{const r=Os.compile(e);return w.newValue({booleanValue:r.matcher(t).find()})}catch{return Ae(`Invalid regex pattern found in regex_contains: ${e}, returning error`),w.vr()}}}class c9 extends jr{kr(t,e){try{return w.newValue({booleanValue:Os.compile(e).matches(t)})}catch{return Ae(`Invalid regex pattern found in regex_match: ${e}, returning error`),w.vr()}}}class l9 extends jr{kr(t,e){return w.newValue({booleanValue:t.includes(e)})}}class h9 extends jr{kr(t,e){return w.newValue({booleanValue:t.startsWith(e)})}}class f9 extends jr{kr(t,e){return w.newValue({booleanValue:t.endsWith(e)})}}class d9{constructor(t){this.expr=t}evaluate(t,e){var s,i;H(this.expr.params.length===1,29079);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.Dr();default:return w.vr()}}}class p9{constructor(t){this.expr=t}evaluate(t,e){var s,i;H(this.expr.params.length===1,60487);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.Dr();default:return w.vr()}}}class g9{constructor(t){this.expr=t}evaluate(t,e){var s,i;H(this.expr.params.length===1,28544);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"STRING":return w.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return w.Dr();default:return w.vr()}}}class m9{constructor(t){this.expr=t}evaluate(t,e){const r=this.expr.params.map(o=>W(o).evaluate(t,e));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return w.vr()}return i?w.Dr():w.newValue({stringValue:s})}}class _9{constructor(t){this.expr=t}evaluate(t,e){var o,u,c,h;H(this.expr.params.length===2,4483);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"UNSET":return w.Sr();case"MAP":break;default:return w.vr()}const s=W(this.expr.params[1]).evaluate(t,e);if(s.type!=="STRING")return w.vr();const i=(h=(u=(o=r.value)==null?void 0:o.mapValue)==null?void 0:u.fields)==null?void 0:h[(c=s.value)==null?void 0:c.stringValue];return i===void 0?w.Sr():w.newValue(i)}}class au{constructor(t){this.expr=t}evaluate(t,e){var h,p;H(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=W(this.expr.params[0]).evaluate(t,e);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return w.vr()}const i=W(this.expr.params[1]).evaluate(t,e);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return w.vr()}if(r)return w.Dr();const o=s1(s.value),u=s1(i.value);if(o===void 0||u===void 0||((h=o.values)==null?void 0:h.length)!==((p=u.values)==null?void 0:p.length))return w.vr();const c=this.qr(o,u);return c===void 0||isNaN(c)?w.vr():w.newValue({doubleValue:c})}}class E9 extends au{qr(t,e){const r=(t==null?void 0:t.values)??[],s=(e==null?void 0:e.values)??[];if(r.length===0)return;let i=0,o=0,u=0;for(let h=0;h<r.length;h++){if(!Cn(r[h])||!Cn(s[h]))return;const p=Lt(r[h]),g=Lt(s[h]);i+=p*g,o+=p*p,u+=g*g}const c=Math.sqrt(o)*Math.sqrt(u);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class y9 extends au{qr(t,e){const r=(t==null?void 0:t.values)??[],s=(e==null?void 0:e.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Cn(r[o])||!Cn(s[o]))return;i+=Lt(r[o])*Lt(s[o])}return i}}class T9 extends au{qr(t,e){const r=(t==null?void 0:t.values)??[],s=(e==null?void 0:e.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!Cn(r[o])||!Cn(s[o]))return;const u=Lt(r[o]),c=Lt(s[o]);i+=Math.pow(u-c,2)}return Math.sqrt(i)}}class I9{constructor(t){this.expr=t}evaluate(t,e){var s;H(this.expr.params.length===1,39044);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"VECTOR":{const i=s1(r.value);return w.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return w.Dr();default:return w.vr()}}}const js=BigInt(-62135596800),Gs=BigInt(253402300799),mo=BigInt(1e3),wn=BigInt(1e6),w9=js*mo,A9=Gs*mo+BigInt(999),v9=js*wn,R9=Gs*wn+BigInt(999999);function uu(n){return n>=v9&&n<=R9}function ff(n){return n>=js&&n<=Gs}function zs(n,t){const e=BigInt(n);return!(e<js||e>Gs)&&!(t<0||t>=1e9)&&(e!==js||t===0)&&!(e===Gs&&t>999999999)}function df(n,t){return t<0?{seconds:n-1,nanos:t+1e9}:{seconds:n,nanos:t}}function cu(n){return BigInt(n.seconds)*wn+BigInt(Math.trunc(n.nanoseconds/1e3))}class lu{constructor(t){this.expr=t}evaluate(t,e){H(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return w.Dr();default:return w.vr()}}}class S9 extends lu{toTimestamp(t){if(!uu(t))return w.vr();let e=Number(t/wn),r=Number(t%wn*BigInt(1e3));const s=df(e,r);return e=s.seconds,r=s.nanos,zs(e,r)?w.newValue({timestampValue:{seconds:e,nanos:r}}):w.vr()}}class C9 extends lu{toTimestamp(t){if(!function(o){return o>=w9&&o<=A9}(t))return w.vr();let e=Number(t/mo),r=Number(t%mo*BigInt(1e6));const s=df(e,r);return e=s.seconds,r=s.nanos,zs(e,r)?w.newValue({timestampValue:{seconds:e,nanos:r}}):w.vr()}}class P9 extends lu{toTimestamp(t){if(!ff(t))return w.vr();const e=Number(t);return w.newValue({timestampValue:{seconds:e,nanos:0}})}}class hu{constructor(t){this.expr=t}evaluate(t,e){H(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=W(this.expr.params[0]).evaluate(t,e);switch(r.type){case"TIMESTAMP":break;case"NULL":return w.Dr();default:return w.vr()}const s=W1(r.value.timestampValue);return zs(s.seconds,s.nanoseconds)?this.$r(s):w.vr()}}class b9 extends hu{$r(t){const e=cu(t);return uu(e)?w.newValue({integerValue:`${e.toString()}`}):w.vr()}}class N9 extends hu{$r(t){const e=cu(t),r=e/BigInt(1e3),s=e%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?w.newValue({integerValue:r.toString()}):w.newValue({integerValue:(r-BigInt(1)).toString()})}}class O9 extends hu{$r(t){const e=BigInt(t.seconds);return ff(e)?w.newValue({integerValue:e.toString()}):w.vr()}}class pf{constructor(t){this.expr=t}evaluate(t,e){H(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=W(this.expr.params[0]).evaluate(t,e);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return w.vr()}const i=W(this.expr.params[1]).evaluate(t,e);let o;switch(i.type){case"STRING":if(o=function(ut){switch(ut){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return w.vr();break;case"NULL":r=!0;break;default:return w.vr()}const u=W(this.expr.params[2]).evaluate(t,e);switch(u.type){case"INT":break;case"NULL":r=!0;break;default:return w.vr()}if(r)return w.Dr();const c=BigInt(u.value.integerValue);let h;try{switch(o){case"microsecond":h=c;break;case"millisecond":h=c*BigInt(1e3);break;case"second":h=c*BigInt(1e6);break;case"minute":h=c*BigInt(6e7);break;case"hour":h=c*BigInt(36e8);break;case"day":h=c*BigInt(864e8);break;default:return w.vr()}if(o!=="microsecond"&&c!==BigInt(0)&&h/c!==BigInt(this.Kr(o)))return w.vr()}catch(X){return Ae(`Error during timestamp arithmetic: ${X}`),w.vr()}const p=W1(s.value.timestampValue);if(!zs(p.seconds,p.nanoseconds))return w.vr();const g=cu(p),y=this.Wr(g,h);if(!uu(y))return w.vr();const C=Number(y/wn),O=y%wn,M=Number((O<0?O+wn:O)*BigInt(1e3)),U=O<0?C-1:C;return zs(U,M)?w.newValue({timestampValue:{seconds:U,nanos:M}}):w.vr()}Kr(t){switch(t){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class V9 extends pf{Wr(t,e){return t+e}}class k9 extends pf{Wr(t,e){return t-e}}function Ws(n){if((n=lf(n))instanceof oi)return`fld(${n.fieldName})`;if(n instanceof qr)return`cst(${function(e){return e===null?"null":typeof e=="number"?e.toString():typeof e=="string"?`"${e}"`:e instanceof It?`ref(${e.path})`:e instanceof ie?`vec(${JSON.stringify(e)})`:JSON.stringify(e)}(n.value)})`;if(n instanceof V)return`fn(${n.name},[${n.params.map(Ws).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(Ws).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function D9(n){if(n instanceof af)return`${n._name}(${Di(n.fields)})`;if(n instanceof uf){let t=`${n._name}(${Di(n.accumulators)})`;return n.groups.size>0&&(t+=`grouping(${Di(n.groups)})`),t}if(n instanceof cf)return`${n._name}(${Di(n.groups)})`;if(n instanceof qo)return`${n._name}(${n.Vr})`;if(n instanceof Ho)return`${n._name}(${n.collectionId})`;if(n instanceof tu)return`${n._name}()`;if(n instanceof eu)return`${n._name}(${n.dr.sort()})`;if(n instanceof nu)return`${n._name}(${Ws(n.condition)})`;if(n instanceof Hs)return`${n._name}(${n.limit})`;if(n instanceof ru)return`${n._name}(${function(e){return e.map(r=>`${Ws(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Di(n){return`${Array.from(n.entries()).sort().map(([t,e])=>`${t}=${Ws(e)}`).join(",")}`}function Ge(n){return n.stages.map(t=>D9(t)).join("|")}function gf(n,t){return Ge(n)===Ge(t)}function Nt(n){return n instanceof re}function _h(n){return Nt(n)?Ge(n):ws(n)}function mf(n){return Nt(n)?Ge(n):function(e){return`${S6(Ve(e))}|lt:${e.limitType}`}(n)}function zo(n,t){return n instanceof re&&t instanceof re?gf(n,t):!(n instanceof re&&!(t instanceof re)||!(n instanceof re)&&t instanceof re)&&og(n,t)}function _f(n){return jn(n)?Ge(n):S6(n)}function Ef(n,t){return n instanceof re&&t instanceof re?gf(n,t):!(n instanceof re&&!(t instanceof re)||!(n instanceof re)&&t instanceof re)&&C6(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x9{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&H3(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ts(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ts(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=V6();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=e.has(s.key)?null:u;const c=_6(o,u);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),rt())}isEqual(t){return this.batchId===t.batchId&&Cr(this.mutations,t.mutations,(e,r)=>Yl(e,r))&&Cr(this.baseMutations,t.baseMutations,(e,r)=>Yl(e,r))}}class fu{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){H(t.mutations.length===r.length,58842,{Qr:t.mutations.length,Gr:r.length});let s=function(){return hg}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new fu(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L9{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e,r,s,i=J.min(),o=J.min(),u=Rt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new He(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M9{constructor(t){this.zr=t}}function F9(n){const t=Pg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?o1(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U9{constructor(){this.Hi=new B9}addToCollectionParentIndex(t,e){return this.Hi.add(e),D.resolve()}getCollectionParents(t,e){return D.resolve(this.Hi.getEntries(e))}addFieldIndex(t,e){return D.resolve()}deleteFieldIndex(t,e){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,e){return D.resolve()}getDocumentsMatchingTarget(t,e){return D.resolve(null)}getIndexType(t,e){return D.resolve(0)}getFieldIndexes(t,e){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,e){return D.resolve(vn.min())}getMinOffsetFromCollectionGroup(t,e){return D.resolve(vn.min())}updateCollectionGroup(t,e,r){return D.resolve()}updateIndexEntries(t,e){return D.resolve()}}class B9{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new vt(ct.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new vt(ct.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.Ds=t}next(){return this.Ds+=2,this.Ds}static xs(){return new Nn(0)}static Cs(){return new Nn(-1)}}// Copyright 2024 Google LLC* @license
function yf(n,t){var r;let e=t;for(const s of n.stages)e=q9({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,e);return e}function Wo(n,t){return yf(n,[t]).length>0}function $9(n,t){return Nt(n)?Wo(n,t):xo(n,t)}function q9(n,t,e){if(t instanceof qo)return function(s,i,o){return o.filter(u=>u.isFoundDocument()&&`/${u.key.getCollectionPath().canonicalString()}`===i.Vr)}(0,t,e);if(t instanceof nu)return function(s,i,o){return o.filter(u=>{const c=vs(W(i.condition).evaluate(s,u));return c!==void 0&&ye(c,oe)})}(n,t,e);if(t instanceof Ho)return function(s,i,o){return o.filter(u=>u.isFoundDocument()&&u.key.getCollectionPath().lastSegment()===i.collectionId)}(0,t,e);if(t instanceof tu)return function(s,i,o){return o.filter(u=>u.isFoundDocument())}(0,0,e);if(t instanceof eu)return function(s,i,o){return o.filter(u=>u.isFoundDocument()&&i.mr.has(u.key.path.toStringWithLeadingSlash()))}(0,t,e);if(t instanceof Hs)return function(s,i,o){return o.slice(0,i.limit)}(0,t,e);if(t instanceof ru)return function(s,i,o){const u=i.orderings.map(c=>({ks:W(c.expr),direction:c.direction}));return[...o].sort((c,h)=>{for(const{ks:p,direction:g}of u){const y=vs(p.evaluate(s,c)),C=vs(p.evaluate(s,h)),O=ae(y??Nr,C??Nr);if(O!==0)return g==="ascending"?O:-O}return 0})}(n,t,e);throw new Error(`Unknown stage: ${t._name}`)}function f1(n){const t=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof ru)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(e,r)=>{for(const s of t){const i=vs(W(s.expr).evaluate({serializer:n.serializer},e)),o=vs(W(s.expr).evaluate({serializer:n.serializer},r)),u=ae(i||Nr,o||Nr);if(u!==0)return s.direction==="ascending"?u:-u}return 0}}function xa(n){for(let t=n.stages.length-1;t>=0;t--){const e=n.stages[t];if(e instanceof Hs)return{limit:e.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9{constructor(){this.changes=new ir(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?D.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j9{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G9{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Ts(r.mutation,s,fe.empty(),dt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,rt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=rt()){const s=pn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=dr();return i.forEach((u,c)=>{o=o.insert(u,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=pn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,rt()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,u)=>{e.set(o,u)})})}computeViews(t,e,r,s){let i=se();const o=As(),u=function(){return As()}();return e.forEach((c,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Ln)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Ts(p.mutation,h,p.mutation.getFieldMask(),dt.now())):o.set(h.key,fe.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,p)=>o.set(h,p)),e.forEach((h,p)=>u.set(h,new j9(p,o.get(h)??null))),u))}recalculateAndSaveOverlays(t,e){const r=As();let s=new pt((o,u)=>o-u),i=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const u of o)u.keys().forEach(c=>{const h=e.get(c);if(h===null)return;let p=r.get(c)||fe.empty();p=u.applyToLocalView(h,p),r.set(c,p);const g=(s.get(u.batchId)||rt()).add(c);s=s.insert(u.batchId,g)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,p=c.value,g=V6();p.forEach(y=>{if(!i.has(y)){const C=_6(e.get(y),r.get(y));C!==null&&g.set(y,C),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,g))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return Nt(e)?this.getDocumentsMatchingPipeline(t,e,r,s):rg(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):sg(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):D.resolve(pn());let u=Vs,c=i;return o.next(h=>D.forEach(h,(p,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(p)?D.resolve():this.remoteDocumentCache.getEntry(t,p).next(y=>{c=c.insert(p,y)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,rt())).next(p=>({batchId:u,changes:O6(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new G(e)).next(r=>{let s=dr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=dr();return this.indexManager.getCollectionParents(t,i).next(u=>D.forEach(u,c=>{const h=function(g,y){return new ko(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(p=>{p.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,u=>xo(e,u)))}getDocumentsMatchingPipeline(t,e,r,s){if(In(e)==="collection_group"){const i=iu(e);let o=dr();return this.indexManager.getCollectionParents(t,i).next(u=>D.forEach(u,c=>{const h=function(g,y){const C=g.stages.map(O=>O instanceof Ho?new qo(y.canonicalString(),{}):O);return new re(g.serializer,C)}(e,c.child(i));return this.getDocumentsMatchingPipeline(t,h,r,s).next(p=>{p.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(t,e,r.largestBatchId).next(o=>{switch(i=o,In(e)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s);case"documents":let u=rt();for(const c of h1(e))u=u.add(G.fromPath(c));return this.remoteDocumentCache.getEntries(t,u);case"database":return this.remoteDocumentCache.getAllEntries(t);default:throw new q("invalid-argument",`Invalid pipeline source to execute offline: ${Ge(e)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,u=>Wo(e,u)))}}retrieveMatchingLocalDocuments(t,e,r){t.forEach((i,o)=>{const u=o.getKey();e.get(u)===null&&(e=e.insert(u,Gt.newInvalidDocument(u)))});let s=dr();return e.forEach((i,o)=>{const u=t.get(i);u!==void 0&&Ts(u.mutation,o,fe.empty(),dt.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(t,e,r){switch(In(e)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(t,ct.fromString(jo(e)),r);case"collection_group":throw new q("invalid-argument",`Unexpected collection group pipeline: ${Ge(e)}`);case"documents":return this.documentOverlayCache.getOverlays(t,h1(e).map(s=>G.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(t,r);default:throw new q("invalid-argument",`Failed to get overlays for pipeline: ${Ge(e)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(t){this.serializer=t,this.Hs=new Map,this.Js=new Map}getBundleMetadata(t,e){return D.resolve(this.Hs.get(e))}saveBundleMetadata(t,e){return this.Hs.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ke(s.createTime)}}(e)),D.resolve()}getNamedQuery(t,e){return D.resolve(this.Js.get(e))}saveNamedQuery(t,e){return this.Js.set(e.name,function(s){return{name:s.name,query:F9(s.bundledQuery),readTime:ke(s.readTime)}}(e)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W9{constructor(){this.overlays=new pt(G.comparator),this.Ys=new Map}getOverlay(t,e){return D.resolve(this.overlays.get(e))}getOverlays(t,e){const r=pn();return D.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(t,e){const r=pn();return this.overlays.forEach((s,i)=>{i.largestBatchId>e&&r.set(s,i)}),D.resolve(r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.Hr(t,e,i)}),D.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ys.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ys.delete(r)),D.resolve()}getOverlaysForCollection(t,e,r){const s=pn(),i=e.length+1,o=new G(e.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new pt((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=pn(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const u=pn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,p)=>u.set(h,p)),!(u.size()>=s)););return D.resolve(u)}Hr(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ys.get(s.largestBatchId).delete(r.key);this.Ys.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new L9(e,r));let i=this.Ys.get(e);i===void 0&&(i=rt(),this.Ys.set(e,i)),this.Ys.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.Zs=new vt(kt.Xs),this.e_=new vt(kt.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(t,e){const r=new kt(t,e);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.r_(new kt(t,e))}i_(t,e){t.forEach(r=>this.removeReference(r,e))}s_(t){const e=new G(new ct([])),r=new kt(e,t),s=new kt(e,t+1),i=[];return this.e_.forEachInRange([r,s],o=>{this.r_(o),i.push(o.key)}),i}__(){this.Zs.forEach(t=>this.r_(t))}r_(t){this.Zs=this.Zs.delete(t),this.e_=this.e_.delete(t)}o_(t){const e=new G(new ct([])),r=new kt(e,t),s=new kt(e,t+1);let i=rt();return this.e_.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new kt(t,0),r=this.Zs.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class kt{constructor(t,e){this.key=t,this.a_=e}static Xs(t,e){return G.comparator(t.key,e.key)||it(t.a_,e.a_)}static t_(t,e){return it(t.a_,e.a_)||G.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y9{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gs=1,this.u_=new vt(kt.Xs)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new x9(i,e,r,s);this.mutationQueue.push(o);for(const u of s)this.u_=this.u_.add(new kt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return D.resolve(o)}lookupMutationBatch(t,e){return D.resolve(this.c_(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.l_(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?$1:this.gs-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new kt(e,0),s=new kt(e,Number.POSITIVE_INFINITY),i=[];return this.u_.forEachInRange([r,s],o=>{const u=this.c_(o.a_);i.push(u)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new vt(it);return e.forEach(s=>{const i=new kt(s,0),o=new kt(s,Number.POSITIVE_INFINITY);this.u_.forEachInRange([i,o],u=>{r=r.add(u.a_)})}),D.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new kt(new G(i),0);let u=new vt(it);return this.u_.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(u=u.add(c.a_)),!0)},o),D.resolve(this.E_(u))}E_(t){const e=[];return t.forEach(r=>{const s=this.c_(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){H(this.h_(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return D.forEach(e.mutations,s=>{const i=new kt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.u_=r})}bs(t){}containsKey(t,e){const r=new kt(e,0),s=this.u_.firstAfterOrEqual(r);return D.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}h_(t,e){return this.l_(t)}l_(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}c_(t){const e=this.l_(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q9{constructor(t){this.T_=t,this.docs=function(){return new pt(G.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.T_(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return D.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(e))}getEntries(t,e){let r=se();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Gt.newInvalidDocument(s))}),D.resolve(r)}getAllEntries(t){let e=se();return this.docs.forEach((r,s)=>{e=e.insert(r,s.document)}),D.resolve(e)}getDocumentsMatchingQuery(t,e,r,s){let i,o;Nt(e)?(i=ct.fromString(jo(e)),o=p=>Wo(e,p)):(i=e.path,o=p=>xo(e,p));let u=se();const c=new G(i.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:p,value:{document:g}}=h.getNext();if(!i.isPrefixOf(p.path))break;p.path.length>i.length+1||v3(A3(g),r)<=0||(s.has(g.key)||o(g))&&(u=u.insert(g.key,g.mutableCopy()))}return D.resolve(u)}getAllFromCollectionGroup(t,e,r,s){z(9500)}P_(t,e){return D.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new X9(this)}getSize(t){return D.resolve(this.size)}}class X9 extends H9{constructor(t){super(),this.zs=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.zs.addEntry(t,s)):this.zs.removeEntry(r)}),D.waitFor(e)}getFromCache(t,e){return this.zs.getEntry(t,e)}getAllFromCache(t,e){return this.zs.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J9{constructor(t){this.persistence=t,this.R_=new ir(e=>_f(e),Ef),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.I_=0,this.A_=new du,this.targetCount=0,this.V_=Nn.xs()}forEachTarget(t,e){return this.R_.forEach((r,s)=>e(s)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.I_)}allocateTargetId(t){return this.highestTargetId=this.V_.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.I_&&(this.I_=e),D.resolve()}Ms(t){this.R_.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.V_=new Nn(e),this.highestTargetId=e),t.sequenceNumber>this.I_&&(this.I_=t.sequenceNumber)}addTargetData(t,e){return this.Ms(e),this.targetCount+=1,D.resolve()}updateTargetData(t,e){return this.Ms(e),D.resolve()}removeTargetData(t,e){return this.R_.delete(e.target),this.A_.s_(e.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.R_.forEach((o,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.R_.delete(o),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,e){const r=this.R_.get(e)||null;return D.resolve(r)}addMatchingKeys(t,e,r){return this.A_.n_(e,r),D.resolve()}removeMatchingKeys(t,e,r){this.A_.i_(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.A_.s_(e),D.resolve()}getMatchingKeysForTargetId(t,e){const r=this.A_.o_(e);return D.resolve(r)}containsKey(t,e){return D.resolve(this.A_.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,e){this.d_={},this.overlays={},this.f_=new Co(0),this.m_=!1,this.m_=!0,this.p_=new K9,this.referenceDelegate=t(this),this.g_=new J9(this),this.indexManager=new U9,this.remoteDocumentCache=function(s){return new Q9(s)}(r=>this.referenceDelegate.y_(r)),this.serializer=new M9(e),this.w_=new z9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new W9,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.d_[t.toKey()];return r||(r=new Y9(e,this.referenceDelegate),this.d_[t.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(t,e,r){B("MemoryPersistence","Starting transaction:",t);const s=new Z9(this.f_.next());return this.referenceDelegate.b_(),r(s).next(i=>this.referenceDelegate.v_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}S_(t,e){return D.or(Object.values(this.d_).map(r=>()=>r.containsKey(t,e)))}}class Z9 extends S3{constructor(t){super(),this.currentSequenceNumber=t}}class pu{constructor(t){this.persistence=t,this.D_=new du,this.x_=null}static C_(t){return new pu(t)}get F_(){if(this.x_)return this.x_;throw z(60996)}addReference(t,e,r){return this.D_.addReference(r,e),this.F_.delete(r.toString()),D.resolve()}removeReference(t,e,r){return this.D_.removeReference(r,e),this.F_.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,e){return this.F_.add(e.toString()),D.resolve()}removeTarget(t,e){this.D_.s_(e.targetId).forEach(s=>this.F_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.F_.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}b_(){this.x_=new Set}v_(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.F_,r=>{const s=G.fromPath(r);return this.O_(t,s).next(i=>{i||e.removeEntry(s,J.min())})}).next(()=>(this.x_=null,e.apply(t)))}updateLimboDocument(t,e){return this.O_(t,e).next(r=>{r?this.F_.delete(e.toString()):this.F_.add(e.toString())})}y_(t){return 0}O_(t,e){return D.or([()=>D.resolve(this.D_.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.S_(t,e)])}}class _o{constructor(t,e){this.persistence=t,this.M_=new ir(r=>N3(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Jg(this,e)}static C_(t,e){return new _o(t,e)}b_(){}v_(t){return D.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}lr(t){const e=this.Ls(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}Ls(t){let e=0;return this.Er(t,r=>{e++}).next(()=>e)}Er(t,e){return D.forEach(this.M_,(r,s)=>this.Us(t,r,s).next(i=>i?D.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.P_(t,o=>this.Us(t,o,e).next(u=>{u||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.M_.set(e,t.currentSequenceNumber),D.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.M_.set(r,t.currentSequenceNumber),D.resolve()}removeReference(t,e,r){return this.M_.set(r,t.currentSequenceNumber),D.resolve()}updateLimboDocument(t,e){return this.M_.set(e,t.currentSequenceNumber),D.resolve()}y_(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=qi(t.data.value)),e}Us(t,e,r){return D.or([()=>this.persistence.S_(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.M_.get(e);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.wo=r,this.bo=s}static vo(t,e){let r=rt(),s=rt();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gu(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t8(n,t){return G.comparator(n.key,t.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return F0()?8:C3(zt())>0?6:4}()}initialize(t,e){this.Fo=t,this.indexManager=e,this.So=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.Oo(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Mo(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new e8;return this.No(t,e,o).next(u=>{if(i.result=u,this.Do)return this.Lo(t,e,o,u.size)})}).next(()=>i.result)}Lo(t,e,r,s){return Nt(e)?D.resolve():r.documentReadCount<this.xo?(fr()<=st.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ws(e),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),D.resolve()):(fr()<=st.DEBUG&&B("QueryEngine","Query:",ws(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Co*s?(fr()<=st.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ws(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ve(e))):D.resolve())}Oo(t,e){if(Nt(e))return D.resolve(null);let r=e;if(eh(r))return D.resolve(null);let s=Ve(r);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=o1(r,null,"F"),s=Ve(r)),this.indexManager.getDocumentsMatchingTarget(t,s).next(o=>{const u=rt(...o);return this.Fo.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,s).next(h=>{const p=this.Bo(r,c);return this.Uo(r,p,u,h.readTime)?this.Oo(t,o1(r,null,"F")):this.ko(t,p,r,h)}))})))}Mo(t,e,r,s){return(Nt(e)?function(o){for(const u of o.stages){if(u instanceof Hs||u instanceof mh)return!1;if(u instanceof nu){if(u.condition instanceof rf&&u.condition._expr.name==="exists"&&u.condition._expr.params[0]instanceof oi&&u.condition._expr.params[0].fieldName===Pr)continue;return!1}}return!0}(e):eh(e))||s.isEqual(J.min())?D.resolve(null):this.Fo.getDocuments(t,r).next(i=>{const o=this.Bo(e,i);return this.Uo(e,o,r,s)?D.resolve(null):(fr()<=st.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_h(e)),this.ko(t,o,e,w3(s,Vs)).next(u=>u))})}Bo(t,e){let r,s;return Nt(t)?(r=new vt(t8),s=i=>Wo(t,i)):(r=new vt(G1(t)),s=i=>xo(t,i)),e.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Uo(t,e,r,s){if(Nt(t))return function(u){return u.stages.some(c=>c instanceof Hs||c instanceof mh)}(t);if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}No(t,e,r){return fr()<=st.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",_h(e)),this.Fo.getDocumentsMatchingQuery(t,e,vn.min(),r)}ko(t,e,r,s){return this.Fo.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="LocalStore",r8=3e8;class s8{constructor(t,e,r,s){this.persistence=t,this.qo=e,this.serializer=s,this.$o=new pt(it),this.Ko=new ir(i=>_f(i),Ef),this.Wo=new Map,this.Qo=t.getRemoteDocumentCache(),this.g_=t.getTargetCache(),this.w_=t.getBundleCache(),this.Go(r)}Go(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new G9(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.$o))}}function i8(n,t,e,r){return new s8(n,t,e,r)}async function If(n,t){const e=Z(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e.Go(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],u=[];let c=rt();for(const h of s){o.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}for(const h of i){u.push(h.batchId);for(const p of h.mutations)c=c.add(p.key)}return e.localDocuments.getDocuments(r,c).next(h=>({zo:h,removedBatchIds:o,addedBatchIds:u}))})})}function o8(n,t){const e=Z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=e.Qo.newChangeBuffer({trackRemovals:!0});return function(u,c,h,p){const g=h.batch,y=g.keys();let C=D.resolve();return y.forEach(O=>{C=C.next(()=>p.getEntry(c,O)).next(M=>{const U=h.docVersions.get(O);H(U!==null,48541),M.version.compareTo(U)<0&&(g.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),p.addEntry(M)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(c,g))}(e,r,t,i).next(()=>i.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=rt();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function wf(n){const t=Z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.g_.getLastRemoteSnapshotVersion(e))}function a8(n,t){const e=Z(n),r=t.snapshotVersion;let s=e.$o;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.Qo.newChangeBuffer({trackRemovals:!0});s=e.$o;const u=[];t.targetChanges.forEach((p,g)=>{const y=s.get(g);if(!y)return;u.push(e.g_.removeMatchingKeys(i,p.removedDocuments,g).next(()=>e.g_.addMatchingKeys(i,p.addedDocuments,g)));let C=y.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?C=C.withResumeToken(Rt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),s=s.insert(g,C),function(M,U,X){return M.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=r8?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(y,C,p)&&u.push(e.g_.updateTargetData(i,C))});let c=se(),h=rt();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,p))}),u.push(u8(i,o,t.documentUpdates).next(p=>{c=p.jo,h=p.Ho})),!r.isEqual(J.min())){const p=e.g_.getLastRemoteSnapshotVersion(i).next(g=>e.g_.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(p)}return D.waitFor(u).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(e.$o=s,i))}function u8(n,t,e){let r=rt(),s=rt();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=se();return e.forEach((u,c)=>{const h=i.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(J.min())?(t.removeEntry(u,c.readTime),o=o.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),o=o.insert(u,c)):B(mu,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{jo:o,Ho:s}})}function c8(n,t){const e=Z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=$1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function l8(n,t){const e=Z(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.g_.getTargetData(r,t).next(i=>i?(s=i,D.resolve(s)):e.g_.allocateTargetId(r).next(o=>(s=new He(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.g_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.$o.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.$o=e.$o.insert(r.targetId,r),e.Ko.set(t,r.targetId)),r})}async function d1(n,t,e){const r=Z(n),s=r.$o.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$r(o))throw o;B(mu,`Failed to update sequence numbers for target ${t}: ${o}`)}r.$o=r.$o.remove(t),r.Ko.delete(s.target)}function Eh(n,t,e){const r=Z(n);let s=J.min(),i=rt();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,p){const g=Z(c),y=g.Ko.get(p);return y!==void 0?D.resolve(g.$o.get(y)):g.g_.getTargetData(h,p)}(r,o,Nt(t)?t:Ve(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(o,u.targetId).next(c=>{i=c})}).next(()=>r.qo.getDocumentsMatchingQuery(o,t,e?s:J.min(),e?i:rt())).next(u=>(h8(r,u),{documents:u,Jo:i})))}function h8(n,t){t.forEach((e,r)=>{const s=r.key.getCollectionGroup(),i=n.Wo.get(s)||J.min();r.readTime.compareTo(i)>0&&n.Wo.set(s,r.readTime)})}class yh{constructor(){this.activeTargetIds=pg()}na(t){this.activeTargetIds=this.activeTargetIds.add(t)}ra(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ta(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class f8{constructor(){this.Ua=new yh,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Ua.na(t),this.ka[t]||"not-current"}updateQueryState(t,e,r){this.ka[t]=e}removeLocalQueryTarget(t){this.Ua.ra(t)}isLocalQueryTarget(t){return this.Ua.activeTargetIds.has(t)}clearQueryState(t){delete this.ka[t]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(t){return this.Ua.activeTargetIds.has(t)}start(){return this.Ua=new yh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}function La(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d8{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(t){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Qa("Offline")))}set(t){this.ja(),this.qa=0,t==="Online"&&(this.Ka=!1),this.Qa(t)}Qa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ga(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(Qe(e),this.Ka=!1):B("OnlineStateTracker",e)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="RemoteStore";class p8{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new Nn(1e3),this.eu=new Nn(1001),this.tu=new Set,this.nu=[],this.ru=i,this.ru.bt(o=>{r.enqueueAndForget(async()=>{ur(this)&&(B(Fe,"Restarting streams for network reachability change."),await async function(c){const h=Z(c);h.tu.add(4),await ui(h),h.iu.set("Unknown"),h.tu.delete(4),await Ko(h)}(this))})}),this.iu=new d8(r,s)}}async function Ko(n){if(ur(n))for(const t of n.nu)await t(!0)}async function ui(n){for(const t of n.nu)await t(!1)}function p1(n,t){return n.Ya.get(t)||void 0}function Af(n,t){const e=Z(n),r=p1(e,t.targetId);if(r!==void 0&&e.Ja.has(r))return;const s=function(u,c){const h=p1(u,c);h!==void 0&&u.Za.delete(h);const p=function(y,C){return C%2!=0?y.eu.next():y.Xa.next()}(u,c);return u.Ya.set(c,p),u.Za.set(p,c),p}(e,t.targetId);B(Fe,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const i=new He(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ja.set(s,i),Tu(e)?yu(e):Gr(e).Fn()&&Eu(e,i)}function _u(n,t){const e=Z(n),r=Gr(e),s=p1(e,t);B(Fe,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),e.Ja.delete(s),e.Ya.delete(t),e.Za.delete(s),r.Fn()&&vf(e,s),e.Ja.size===0&&(r.Fn()?r.Nn():ur(e)&&e.iu.set("Unknown"))}function Eu(n,t){if(n.su.We(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const e=n.Za.get(t.targetId);if(e===void 0)return void B(Fe,"SDK target ID not found for remote ID: "+t.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(r)}Gr(n).jn(t)}function vf(n,t){n.su.We(t),Gr(n).Hn(t)}function yu(n){n.su=new _g({getRemoteKeysForTarget:t=>{const e=n.Za.get(t);return e!==void 0?n.remoteSyncer.getRemoteKeysForTarget(e):rt()},dt:t=>n.Ja.get(t)||null,Tt:()=>n.datastore.serializer.databaseId}),Gr(n).start(),n.iu.Wa()}function Tu(n){return ur(n)&&!Gr(n).Cn()&&n.Ja.size>0}function ur(n){return Z(n).tu.size===0}function Rf(n){n.su=void 0}async function g8(n){n.iu.set("Online")}async function m8(n){n.Ja.forEach((t,e)=>{Eu(n,t)})}async function _8(n,t){Rf(n),Tu(n)?(n.iu.za(t),yu(n)):n.iu.set("Unknown")}async function E8(n,t,e){if(n.iu.set("Online"),t instanceof D6&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const u of i.targetIds){if(s.Ja.has(u)){const c=s.Za.get(u);c!==void 0&&(await s.remoteSyncer.rejectListen(c,o),s.Ya.delete(c),s.Za.delete(u)),s.Ja.delete(u)}s.su.removeTarget(u)}}(n,t)}catch(r){B(Fe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Eo(n,r)}else if(t instanceof ji?n.su.et(t):t instanceof k6?n.su.ot(t):n.su.rt(t),!e.isEqual(J.min()))try{const r=await wf(n.localStore);e.compareTo(r)>=0&&await function(i,o){const u=i.su.Rt(o);u.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const g=i.Ja.get(p);g&&i.Ja.set(p,g.withResumeToken(h.resumeToken,o))}}),u.targetMismatches.forEach((h,p)=>{const g=i.Ja.get(h);if(!g)return;i.Ja.set(h,g.withResumeToken(Rt.EMPTY_BYTE_STRING,g.snapshotVersion)),vf(i,h);const y=new He(g.target,h,p,g.sequenceNumber);Eu(i,y)});const c=function(p,g){const y=new Map;g.targetChanges.forEach((O,M)=>{const U=p.Za.get(M);U!==void 0&&y.set(U,O)});let C=new pt(it);return g.targetMismatches.forEach((O,M)=>{const U=p.Za.get(O);U!==void 0&&(C=C.insert(U,M))}),new si(g.snapshotVersion,y,C,g.documentUpdates,g.augmentedDocumentUpdates,g.resolvedLimboDocuments)}(i,u);return i.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){B(Fe,"Failed to raise snapshot:",r),await Eo(n,r)}}async function Eo(n,t,e){if(!$r(t))throw t;n.tu.add(1),await ui(n),n.iu.set("Offline"),e||(e=()=>wf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B(Fe,"Retrying IndexedDB access"),await e(),n.tu.delete(1),await Ko(n)})}function Sf(n,t){return t().catch(e=>Eo(n,e,t))}async function Yo(n){const t=Z(n),e=On(t);let r=t.Ha.length>0?t.Ha[t.Ha.length-1].batchId:$1;for(;y8(t);)try{const s=await c8(t.localStore,r);if(s===null){t.Ha.length===0&&e.Nn();break}r=s.batchId,T8(t,s)}catch(s){await Eo(t,s)}Cf(t)&&Pf(t)}function y8(n){return ur(n)&&n.Ha.length<10}function T8(n,t){n.Ha.push(t);const e=On(n);e.Fn()&&e.Jn&&e.Yn(t.mutations)}function Cf(n){return ur(n)&&!On(n).Cn()&&n.Ha.length>0}function Pf(n){On(n).start()}async function I8(n){On(n).er()}async function w8(n){const t=On(n);for(const e of n.Ha)t.Yn(e.mutations)}async function A8(n,t,e){const r=n.Ha.shift(),s=fu.from(r,t,e);await Sf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Yo(n)}async function v8(n,t){t&&On(n).Jn&&await async function(r,s){if(function(o){return cg(o)&&o!==x.ABORTED}(s.code)){const i=r.Ha.shift();On(r).Mn(),await Sf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yo(r)}}(n,t),Cf(n)&&Pf(n)}async function Th(n,t){const e=Z(n);e.asyncQueue.verifyOperationInProgress(),B(Fe,"RemoteStore received new credentials");const r=ur(e);e.tu.add(3),await ui(e),r&&e.iu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.tu.delete(3),await Ko(e)}async function R8(n,t){const e=Z(n);t?(e.tu.delete(2),await Ko(e)):t||(e.tu.add(2),await ui(e),e.iu.set("Unknown"))}function Gr(n){return n._u||(n._u=function(e,r,s){const i=Z(e);return i.nr(),new $g(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Qt:g8.bind(null,n),zt:m8.bind(null,n),Ht:_8.bind(null,n),zn:E8.bind(null,n)}),n.nu.push(async t=>{t?(n._u.Mn(),Tu(n)?yu(n):n.iu.set("Unknown")):(await n._u.stop(),Rf(n))})),n._u}function On(n){return n.ou||(n.ou=function(e,r,s){const i=Z(e);return i.nr(),new qg(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:I8.bind(null,n),Ht:v8.bind(null,n),Zn:w8.bind(null,n),Xn:A8.bind(null,n)}),n.nu.push(async t=>{t?(n.ou.Mn(),await Yo(n)):(await n.ou.stop(),n.Ha.length>0&&(B(Fe,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))})),n.ou}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,u=new Iu(t,e,o,s,i);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wu(n,t){if(Qe("AsyncQueue",`${t}: ${n}`),$r(n))return new q(x.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{static emptySet(t){return new Yn(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||G.comparator(e.key,r.key):(e,r)=>G.comparator(e.key,r.key),this.keyedMap=dr(),this.sortedSet=new pt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Yn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Yn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.au=new pt(G.comparator)}track(t){const e=t.doc.key,r=this.au.get(e);r?t.type!==0&&r.type===3?this.au=this.au.insert(e,t):t.type===3&&r.type!==1?this.au=this.au.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.au=this.au.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.au=this.au.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.au=this.au.remove(e):t.type===1&&r.type===2?this.au=this.au.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.au=this.au.insert(e,{type:2,doc:t.doc}):z(63341,{ft:t,uu:r}):this.au=this.au.insert(e,t)}cu(){const t=[];return this.au.inorderTraversal((e,r)=>{t.push(r)}),t}}class Dr{constructor(t,e,r,s,i,o,u,c,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(u=>{o.push({type:0,doc:u})}),new Dr(t,e,Yn.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S8{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some(t=>t.Tu())}}class C8{constructor(){this.queries=wh(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(e,r){const s=Z(e),i=s.queries;s.queries=wh(),i.forEach((o,u)=>{for(const c of u.Eu)c.onError(r)})})(this,new q(x.ABORTED,"Firestore shutting down"))}}function wh(){return new ir(n=>mf(n),zo)}async function bf(n,t){const e=Z(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.hu()&&t.Tu()&&(r=2):(i=new S8,r=t.Tu()?0:1);try{switch(r){case 0:i.lu=await e.onListen(s,!0);break;case 1:i.lu=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const u=wu(o,`Initialization of query '${Nt(t.query)?Ge(t.query):ws(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Eu.push(t),t.Ru(e.onlineState),i.lu&&t.Iu(i.lu)&&Au(e)}async function Nf(n,t){const e=Z(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const o=i.Eu.indexOf(t);o>=0&&(i.Eu.splice(o,1),i.Eu.length===0?s=t.Tu()?0:1:!i.hu()&&t.Tu()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function P8(n,t){const e=Z(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const u of o.Eu)u.Iu(s)&&(r=!0);o.lu=s}}r&&Au(e)}function b8(n,t,e){const r=Z(n),s=r.queries.get(t);if(s)for(const i of s.Eu)i.onError(e);r.queries.delete(t)}function Au(n){n.Pu.forEach(t=>{t.next()})}var g1;(function(n){n.Default="default",n.Cache="cache"})(g1||(g1={}));class Of{constructor(t,e,r){this.query=t,this.Au=e,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Dr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.fu(t)&&(this.Au.next(t),e=!0):this.mu(t,this.onlineState)&&(this.pu(t),e=!0),this.du=t,e}onError(t){this.Au.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.du&&!this.Vu&&this.mu(this.du,t)&&(this.pu(this.du),e=!0),e}mu(t,e){if(!t.fromCache||!this.Tu())return!0;const r=e!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}fu(t){if(t.docChanges.length>0)return!0;const e=this.du&&this.du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}pu(t){t=Dr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.Au.next(t)}Tu(){return this.options.source!==g1.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.key=t}}class kf{constructor(t){this.key=t}}class N8{constructor(t,e){this.query=t,this.Ou=e,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=rt(),this.mutatedKeys=rt(),this.Lu=Nt(t)?f1(t):G1(t),this.Bu=new Yn(this.Lu)}get Uu(){return this.Ou}ku(t,e){const r=e?e.qu:new Ih,s=e?e.Bu:this.Bu;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,u=!1;const[c,h]=this.$u(this.query,s);t.inorderTraversal((g,y)=>{const C=s.get(g),O=$9(this.query,y)?y:null,M=!!C&&this.mutatedKeys.has(C.key),U=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let X=!1;C&&O?C.data.isEqual(O.data)?M!==U&&(r.track({type:3,doc:O}),X=!0):this.Ku(C,O)||(r.track({type:2,doc:O}),X=!0,(c&&this.Lu(O,c)>0||h&&this.Lu(O,h)<0)&&(u=!0)):!C&&O?(r.track({type:0,doc:O}),X=!0):C&&!O&&(r.track({type:1,doc:C}),X=!0,(c||h)&&(u=!0)),X&&(O?(o=o.add(O),i=U?i.add(g):i.delete(g)):(o=o.delete(g),i=i.delete(g)))});const p=this.Wu(this.query);if(p)if(Nt(this.query)){const g=[];o.forEach(O=>g.push(O));const y=yf(this.query,g);let C=new Yn(f1(this.query));for(const O of y)C=C.add(O);o.forEach(O=>{C.has(O.key)||(i=i.delete(O.key),r.track({type:1,doc:O}))}),o=C}else{const g=this.Qu(this.query);for(;o.size>p;){const y=g==="F"?o.last():o.first();o=o.delete(y.key),i=i.delete(y.key),r.track({type:1,doc:y})}}return{Bu:o,qu:r,Uo:u,mutatedKeys:i}}Wu(t){var e;return Nt(t)?(e=xa(t))==null?void 0:e.limit:t.limit||void 0}Qu(t){if(Nt(t)){const e=xa(t);return e&&e.limit<0?"L":"F"}return t.limitType}$u(t,e){var r;if(Nt(t)){const s=(r=xa(t))==null?void 0:r.limit;return[e.size===s?e.last():null,null]}return[t.limitType==="F"&&e.size===this.Wu(this.query)?e.last():null,t.limitType==="L"&&e.size===this.Wu(this.query)?e.first():null]}Ku(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Bu;this.Bu=t.Bu,this.mutatedKeys=t.mutatedKeys;const o=t.qu.cu();o.sort((p,g)=>function(C,O){const M=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{ft:U})}};return M(C)-M(O)}(p.type,g.type)||this.Lu(p.doc,g.doc)),this.Gu(r),s=s??!1;const u=e&&!s?this.zu():[],c=this.Nu.size===0&&this.current&&!s?1:0,h=c!==this.Mu;return this.Mu=c,o.length!==0||h?{snapshot:new Dr(this.query,t.Bu,i,o,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:u}:{ju:u}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new Ih,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(t){return!this.Ou.has(t)&&!!this.Bu.has(t)&&!this.Bu.get(t).hasLocalMutations}Gu(t){t&&(t.addedDocuments.forEach(e=>this.Ou=this.Ou.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ou=this.Ou.delete(e)),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Nu;this.Nu=rt(),this.Bu.forEach(r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))});const e=[];return t.forEach(r=>{this.Nu.has(r)||e.push(new kf(r))}),this.Nu.forEach(r=>{t.has(r)||e.push(new Vf(r))}),e}Ju(t){this.Ou=t.Jo,this.Nu=rt();const e=this.ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Dr.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const vu="SyncEngine";class O8{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class V8{constructor(t){this.key=t,this.Zu=!1}}class k8{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Xu={},this.ec=new ir(u=>mf(u),zo),this.tc=new Map,this.nc=new Set,this.rc=new pt(G.comparator),this.sc=new Map,this._c=new du,this.oc={},this.ac=new Map,this.uc=Nn.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function D8(n,t,e=!0){const r=Uf(n);let s;const i=r.ec.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Yu()):s=await Df(r,t,e,!0),s}async function x8(n,t){const e=Uf(n);await Df(e,t,!0,!1)}async function Df(n,t,e,r){const s=await l8(n.localStore,Nt(t)?t:Ve(t)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,e);let u;return r&&(u=await L8(n,t,i,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Af(n.remoteStore,s),u}async function L8(n,t,e,r,s){n.lc=(g,y,C)=>async function(M,U,X,ut){let _t=U.view.ku(X);_t.Uo&&(_t=await Eh(M.localStore,U.query,!1).then(({documents:v})=>U.view.ku(v,_t)));const ge=ut&&ut.targetChanges.get(U.targetId),Mt=ut&&ut.targetMismatches.get(U.targetId)!=null,Ft=U.view.applyChanges(_t,M.isPrimaryClient,ge,Mt);return vh(M,U.targetId,Ft.ju),Ft.snapshot}(n,g,y,C);const i=await Eh(n.localStore,t,!0),o=new N8(t,i.Jo),u=o.ku(i.documents),c=ii.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),h=o.applyChanges(u,n.isPrimaryClient,c);vh(n,e,h.ju);const p=new O8(t,e,o);return n.ec.set(t,p),n.tc.has(e)?n.tc.get(e).push(t):n.tc.set(e,[t]),h.snapshot}async function M8(n,t,e){const r=Z(n),s=r.ec.get(t),i=r.tc.get(s.targetId);if(i.length>1)return r.tc.set(s.targetId,i.filter(o=>!zo(o,t))),void r.ec.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await d1(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&_u(r.remoteStore,s.targetId),m1(r,s.targetId)}).catch(Br)):(m1(r,s.targetId),await d1(r.localStore,s.targetId,!0))}async function F8(n,t){const e=Z(n),r=e.ec.get(t),s=e.tc.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),_u(e.remoteStore,r.targetId))}async function U8(n,t,e){const r=z8(n);try{const s=await function(o,u){const c=Z(o),h=dt.now(),p=u.reduce((C,O)=>C.add(O.key),rt());let g,y;return c.persistence.runTransaction("Locally write mutations","readwrite",C=>{let O=se(),M=rt();return c.Qo.getEntries(C,p).next(U=>{O=U,O.forEach((X,ut)=>{ut.isValidDocument()||(M=M.add(X))})}).next(()=>c.localDocuments.getOverlayedDocuments(C,O)).next(U=>{g=U;const X=[];for(const ut of u){const _t=j3(ut,g.get(ut.key).overlayedDocument);_t!=null&&X.push(new Ln(ut.key,_t,f6(_t.value.mapValue),Oe.exists(!0)))}return c.mutationQueue.addMutationBatch(C,h,X,u)}).next(U=>{y=U;const X=U.applyToLocalDocumentSet(g,M);return c.documentOverlayCache.saveOverlays(C,U.batchId,X)})}).then(()=>({batchId:y.batchId,changes:O6(g)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,u,c){let h=o.oc[o.currentUser.toKey()];h||(h=new pt(it)),h=h.insert(u,c),o.oc[o.currentUser.toKey()]=h}(r,s.batchId,e),await ci(r,s.changes),await Yo(r.remoteStore)}catch(s){const i=wu(s,"Failed to persist write");e.reject(i)}}async function xf(n,t){const e=Z(n);try{const r=await a8(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.sc.get(i);o&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Zu=!0:s.modifiedDocuments.size>0?H(o.Zu,14607):s.removedDocuments.size>0&&(H(o.Zu,42227),o.Zu=!1))}),await ci(e,r,t)}catch(r){await Br(r)}}function Ah(n,t,e){const r=Z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ec.forEach((i,o)=>{const u=o.view.Ru(t);u.snapshot&&s.push(u.snapshot)}),function(o,u){const c=Z(o);c.onlineState=u;let h=!1;c.queries.forEach((p,g)=>{for(const y of g.Eu)y.Ru(u)&&(h=!0)}),h&&Au(c)}(r.eventManager,t),s.length&&r.Xu.zn(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function B8(n,t,e){const r=Z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.sc.get(t),i=s&&s.key;if(i){let o=new pt(G.comparator);o=o.insert(i,Gt.newNoDocument(i,J.min()));const u=rt().add(i),c=new si(J.min(),new Map,new pt(it),o,se(),u);await xf(r,c),r.rc=r.rc.remove(i),r.sc.delete(t),Ru(r)}else await d1(r.localStore,t,!1).then(()=>m1(r,t,e)).catch(Br)}async function $8(n,t){const e=Z(n),r=t.batch.batchId;try{const s=await o8(e.localStore,t);Mf(e,r,null),Lf(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ci(e,s)}catch(s){await Br(s)}}async function q8(n,t,e){const r=Z(n);try{const s=await function(o,u){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return c.mutationQueue.lookupMutationBatch(h,u).next(g=>(H(g!==null,37113),p=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,p,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>c.localDocuments.getDocuments(h,p))})}(r.localStore,t);Mf(r,t,e),Lf(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ci(r,s)}catch(s){await Br(s)}}function Lf(n,t){(n.ac.get(t)||[]).forEach(e=>{e.resolve()}),n.ac.delete(t)}function Mf(n,t,e){const r=Z(n);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.oc[r.currentUser.toKey()]=s}}function m1(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.tc.get(t))n.ec.delete(r),e&&n.Xu.Ec(r,e);n.tc.delete(t),n.isPrimaryClient&&n._c.s_(t).forEach(r=>{n._c.containsKey(r)||Ff(n,r)})}function Ff(n,t){n.nc.delete(t.path.canonicalString());const e=n.rc.get(t);e!==null&&(_u(n.remoteStore,e),n.rc=n.rc.remove(t),n.sc.delete(e),Ru(n))}function vh(n,t,e){for(const r of e)r instanceof Vf?(n._c.addReference(r.key,t),H8(n,r)):r instanceof kf?(B(vu,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,t),n._c.containsKey(r.key)||Ff(n,r.key)):z(19791,{hc:r})}function H8(n,t){const e=t.key,r=e.path.canonicalString();n.rc.get(e)||n.nc.has(r)||(B(vu,"New document in limbo: "+e),n.nc.add(r),Ru(n))}function Ru(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const t=n.nc.values().next().value;n.nc.delete(t);const e=new G(ct.fromString(t)),r=n.uc.next();n.sc.set(r,new V8(e)),n.rc=n.rc.insert(e,r),Af(n.remoteStore,new He(Ve(Do(e.path)),r,"TargetPurposeLimboResolution",Co.ce))}}async function ci(n,t,e){const r=Z(n),s=[],i=[],o=[];r.ec.isEmpty()||(r.ec.forEach((u,c)=>{o.push(r.lc(c,t,e).then(h=>{var p;if((h||e)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=e==null?void 0:e.targetChanges.get(c.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=gu.vo(c.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Xu.zn(s),await async function(c,h){const p=Z(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(h,y=>D.forEach(y.wo,C=>p.persistence.referenceDelegate.addReference(g,y.targetId,C)).next(()=>D.forEach(y.bo,C=>p.persistence.referenceDelegate.removeReference(g,y.targetId,C)))))}catch(g){if(!$r(g))throw g;B(mu,"Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const C=p.$o.get(y),O=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(O);p.$o=p.$o.insert(y,M)}}}(r.localStore,i))}async function j8(n,t){const e=Z(n);if(!e.currentUser.isEqual(t)){B(vu,"User change. New user:",t.toKey());const r=await If(e.localStore,t);e.currentUser=t,function(i,o){i.ac.forEach(u=>{u.forEach(c=>{c.reject(new q(x.CANCELLED,o))})}),i.ac.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ci(e,r.zo)}}function G8(n,t){const e=Z(n),r=e.sc.get(t);if(r&&r.Zu)return rt().add(r.key);{let s=rt();const i=e.tc.get(t);if(!i)return s;for(const o of i??[]){const u=e.ec.get(o);s=s.unionWith(u.view.Uu)}return s}}function Uf(n){const t=Z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=xf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=G8.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=B8.bind(null,t),t.Xu.zn=P8.bind(null,t.eventManager),t.Xu.Ec=b8.bind(null,t.eventManager),t}function z8(n){const t=Z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$8.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=q8.bind(null,t),t}class yo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Lo(t.databaseInfo.databaseId),this.sharedClientState=this.Rc(t),this.persistence=this.Ic(t),await this.persistence.start(),this.localStore=this.Ac(t),this.gcScheduler=this.Vc(t,this.localStore),this.indexBackfillerScheduler=this.dc(t,this.localStore)}Vc(t,e){return null}dc(t,e){return null}Ac(t){return i8(this.persistence,new n8,t.initialUser,this.serializer)}Ic(t){return new Tf(pu.C_,this.serializer)}Rc(t){return new f8}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yo.provider={build:()=>new yo};class W8 extends yo{constructor(t){super(),this.cacheSizeBytes=t}Vc(t,e){H(this.persistence.referenceDelegate instanceof _o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Qg(r,t.asyncQueue,e)}Ic(t){const e=this.cacheSizeBytes!==void 0?ee.withCacheSize(this.cacheSizeBytes):ee.DEFAULT;return new Tf(r=>_o.C_(r,e),this.serializer)}}class _1{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ah(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=j8.bind(null,this.syncEngine),await R8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new C8}()}createDatastore(t){const e=Lo(t.databaseInfo.databaseId),r=Bg(t.databaseInfo);return Gg(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,u){return new p8(r,s,i,o,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ah(this.syncEngine,e,0),function(){return uh.C()?new uh:new Lg}())}createSyncEngine(t,e){return function(s,i,o,u,c,h,p){const g=new k8(s,i,o,u,c,h);return p&&(g.cc=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=Z(s);B(Fe,"RemoteStore shutting down."),i.tu.add(5),await ui(i),i.ru.shutdown(),i.iu.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}_1.provider={build:()=>new _1};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.mc(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.mc(this.observer.error,t):Qe("Uncaught Error in snapshot listener:",t.toString()))}gc(){this.muted=!0}mc(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="FirestoreClient";class K8{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=Ht.UNAUTHENTICATED,this.clientId=U1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{B(Vn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Vn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=wu(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ma(n,t){n.asyncQueue.verifyOperationInProgress(),B(Vn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await If(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Rh(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Y8(n);B(Vn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Th(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Th(t.remoteStore,s)),n._onlineComponents=t}async function Y8(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(Vn,"Using user provided OfflineComponentProvider");try{await Ma(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ae("Error using user provided cache. Falling back to memory cache: "+e),await Ma(n,new yo)}}else B(Vn,"Using default OfflineComponentProvider"),await Ma(n,new W8(void 0));return n._offlineComponents}async function $f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(Vn,"Using user provided OnlineComponentProvider"),await Rh(n,n._uninitializedComponentsProvider._online)):(B(Vn,"Using default OnlineComponentProvider"),await Rh(n,new _1))),n._onlineComponents}function Q8(n){return $f(n).then(t=>t.syncEngine)}async function E1(n){const t=await $f(n),e=t.eventManager;return e.onListen=D8.bind(null,t.syncEngine),e.onUnlisten=M8.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=x8.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=F8.bind(null,t.syncEngine),e}function X8(n,t,e,r){const s=new Bf(r),i=new Of(t,s,e);return n.asyncQueue.enqueueAndForget(async()=>bf(await E1(n),i)),()=>{s.gc(),n.asyncQueue.enqueueAndForget(async()=>Nf(await E1(n),i))}}function J8(n,t,e={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,u,c,h){const p=new Bf({next:y=>{p.gc(),o.enqueueAndForget(()=>Nf(i,g));const C=y.docs.has(u);!C&&y.fromCache?h.reject(new q(x.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&y.fromCache&&c&&c.source==="server"?h.reject(new q(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new Of(Do(u.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return bf(i,g)}(await E1(n),n.asyncQueue,t,e,r)),r.promise}function Z8(n,t){const e=new yn;return n.asyncQueue.enqueueAndForget(async()=>U8(await Q8(n),t,e)),e.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="AsyncQueue";class Ch{constructor(t=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new G6(this,"async_queue_retry"),this.jc=()=>{const r=La();r&&B(Sh,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=t;const e=La();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.$c){this.$c=!0,this.Gc=t||!1;const e=La();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Jc(),this.$c)return new Promise(()=>{});const e=new yn;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.qc.push(t),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(t){if(!$r(t))throw t;B(Sh,"Operation failed with retryable error: "+t)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(t){const e=this.Hc.then(()=>(this.Qc=!0,t().catch(r=>{throw this.Wc=r,this.Qc=!1,Qe("INTERNAL UNHANDLED ERROR: ",Ph(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=e,e}enqueueAfterDelay(t,e,r){this.Jc(),this.zc.indexOf(t)>-1&&(e=0);const s=Iu.createAndSchedule(this,t,e,r,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Wc&&z(47125,{el:Ph(this.Wc)})}verifyOperationInProgress(){}async tl(){let t;do t=this.Hc,await t;while(t!==this.Hc)}nl(t){for(const e of this.Kc)if(e.timerId===t)return!0;return!1}rl(t){return this.tl().then(()=>{this.Kc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Kc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tl()})}il(t){this.zc.push(t)}Xc(t){const e=this.Kc.indexOf(t);this.Kc.splice(e,1)}}function Ph(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class xr extends Uo{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ch,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ch(t),this._firestoreClient=void 0,await t}}}function t5(n,t){const e=typeof n=="object"?n:P1(),r=typeof n=="string"?n:io,s=Lr(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=b0("firestore");i&&Zg(s,...i)}return s}function Su(n){if(n._terminated)throw new q(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||e5(n),n._firestoreClient}function e5(n){var r,s,i,o;const t=n._freezeSettings(),e=Wg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new K8(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{convertValue(t,e="none"){switch(St(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Sn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return xn(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertVectorValue(t){var r,s,i;const e=(i=(s=(r=t.fields)==null?void 0:r[xs].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>mt(o.doubleValue));return new ie(e)}convertGeoPoint(t){return new De(mt(t.latitude),mt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ni(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(br(t));default:return null}}convertTimestamp(t){const e=Rn(t);return new dt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ct.fromString(t);H($6(r),9688,{name:t});const s=new Ds(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(e)||Qe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends n5{constructor(t){super(),this.firestore=t}convertBytes(t){return new _e(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}const bh="@firebase/firestore",Nh="4.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new r5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(kr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class r5 extends Hf{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s5(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function i5(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class ps{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qn extends Hf{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(kr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Qn._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Qn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qn._jsonSchema={type:At("string",Qn._jsonSchemaVersion),bundleSource:At("string","DocumentSnapshot"),bundleName:At("string"),bundle:At("string")};class zi extends Qn{data(t={}){return super.data(t)}}class Ar{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ps(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new zi(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new q(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(u=>{Nt(s._snapshot.query)?f1(s._snapshot.query):G1(s.query._query);const c=new zi(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ps(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new zi(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ps(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return u.type!==0&&(h=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),p=o.indexOf(u.doc.key)),{type:o5(u.type),doc:c,oldIndex:h,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ar._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=U1.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function o5(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ar._jsonSchemaVersion="firestore/querySnapshot/1.0",Ar._jsonSchema={type:At("string",Ar._jsonSchemaVersion),bundleSource:At("string","QuerySnapshot"),bundleName:At("string"),bundle:At("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a5(n){n=je(n,It);const t=je(n.firestore,xr),e=Su(t);return J8(e,n._key).then(r=>Gf(t,n,r))}function u5(n,t,e,...r){n=je(n,It);const s=je(n.firestore,xr),i=X6(s);let o;return o=typeof(t=Wt(t))=="string"||t instanceof Mo?im(i,"updateDoc",n._key,t,e,r):sm(i,"updateDoc",n._key,t),jf(s,[o.toMutation(n._key,Oe.exists(!0))])}function li(n,t){const e=je(n.firestore,xr),r=Y1(n),s=i5(n.converter,t),i=X6(n.firestore);return jf(e,[rm(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function Cu(n,...t){var h,p,g;n=Wt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Oh(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Oh(t[r])){const y=t[r];t[r]=(h=y.next)==null?void 0:h.bind(y),t[r+1]=(p=y.error)==null?void 0:p.bind(y),t[r+2]=(g=y.complete)==null?void 0:g.bind(y)}let i,o,u;if(n instanceof It)o=je(n.firestore,xr),u=Do(n._key.path),i={next:y=>{t[r]&&t[r](Gf(o,n,y))},error:t[r+1],complete:t[r+2]};else{const y=je(n,Bo);o=je(y.firestore,xr),u=y._query;const C=new qf(o);i={next:O=>{t[r]&&t[r](new Ar(o,C,y,O))},error:t[r+1],complete:t[r+2]},s5(n._query)}const c=Su(o);return X8(c,u,s,i)}function jf(n,t){const e=Su(n);return Z8(e,t)}function Gf(n,t,e){const r=e.docs.get(t._key),s=new qf(n);return new Qn(n,s,t._key,r,new ps(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){l3(Mr),We(new xe("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),u=new xr(new d3(r.getProvider("auth-internal")),new m3(o,r.getProvider("app-check-internal")),x3(o,s),o);return i={useFetchStreams:e,...i},u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),Ee(bh,Nh,t),Ee(bh,Nh,"esm2020")})();var y1,Vh,Qo=function(){var n=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(n&&n.responseStart>0&&n.responseStart<performance.now())return n},zf=function(n){if(document.readyState==="loading")return"loading";var t=Qo();if(t){if(n<t.domInteractive)return"loading";if(t.domContentLoadedEventStart===0||n<t.domContentLoadedEventStart)return"dom-interactive";if(t.domComplete===0||n<t.domComplete)return"dom-content-loaded"}return"complete"},c5=function(n){var t=n.nodeName;return n.nodeType===1?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},Pu=function(n,t){var e="";try{for(;n&&n.nodeType!==9;){var r=n,s=r.id?"#"+r.id:c5(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(e.length+s.length>(t||100)-1)return e||s;if(e=e?s+">"+e:s,r.id)break;n=r.parentNode}}catch{}return e},Wf=-1,l5=function(){return Wf},hi=function(n){addEventListener("pageshow",function(t){t.persisted&&(Wf=t.timeStamp,n(t))},!0)},bu=function(){var n=Qo();return n&&n.activationStart||0},kn=function(n,t){var e=Qo(),r="navigate";return l5()>=0?r="back-forward-cache":e&&(document.prerendering||bu()>0?r="prerender":document.wasDiscarded?r="restore":e.type&&(r=e.type.replace(/_/g,"-"))),{name:n,value:t===void 0?-1:t,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},zr=function(n,t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver(function(s){Promise.resolve().then(function(){t(s.getEntries())})});return r.observe(Object.assign({type:n,buffered:!0},e||{})),r}}catch{}},Dn=function(n,t,e,r){var s,i;return function(o){t.value>=0&&(o||r)&&((i=t.value-(s||0))||s===void 0)&&(s=t.value,t.delta=i,t.rating=function(u,c){return u>c[1]?"poor":u>c[0]?"needs-improvement":"good"}(t.value,e),n(t))}},Nu=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},Xo=function(n){document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&n()})},Ou=function(n){var t=!1;return function(){t||(n(),t=!0)}},_r=-1,kh=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},To=function(n){document.visibilityState==="hidden"&&_r>-1&&(_r=n.type==="visibilitychange"?n.timeStamp:0,h5())},Dh=function(){addEventListener("visibilitychange",To,!0),addEventListener("prerenderingchange",To,!0)},h5=function(){removeEventListener("visibilitychange",To,!0),removeEventListener("prerenderingchange",To,!0)},Kf=function(){return _r<0&&(_r=kh(),Dh(),hi(function(){setTimeout(function(){_r=kh(),Dh()},0)})),{get firstHiddenTime(){return _r}}},Vu=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},xh=[1800,3e3],f5=function(n,t){t=t||{},Vu(function(){var e,r=Kf(),s=kn("FCP"),i=zr("paint",function(o){o.forEach(function(u){u.name==="first-contentful-paint"&&(i.disconnect(),u.startTime<r.firstHiddenTime&&(s.value=Math.max(u.startTime-bu(),0),s.entries.push(u),e(!0)))})});i&&(e=Dn(n,s,xh,t.reportAllChanges),hi(function(o){s=kn("FCP"),e=Dn(n,s,xh,t.reportAllChanges),Nu(function(){s.value=performance.now()-o.timeStamp,e(!0)})}))})},Lh=[.1,.25],d5=function(n,t){(function(e,r){r=r||{},f5(Ou(function(){var s,i=kn("CLS",0),o=0,u=[],c=function(p){p.forEach(function(g){if(!g.hadRecentInput){var y=u[0],C=u[u.length-1];o&&g.startTime-C.startTime<1e3&&g.startTime-y.startTime<5e3?(o+=g.value,u.push(g)):(o=g.value,u=[g])}}),o>i.value&&(i.value=o,i.entries=u,s())},h=zr("layout-shift",c);h&&(s=Dn(e,i,Lh,r.reportAllChanges),Xo(function(){c(h.takeRecords()),s(!0)}),hi(function(){o=0,i=kn("CLS",0),s=Dn(e,i,Lh,r.reportAllChanges),Nu(function(){return s()})}),setTimeout(s,0))}))})(function(e){var r=function(s){var i,o={};if(s.entries.length){var u=s.entries.reduce(function(h,p){return h&&h.value>p.value?h:p});if(u&&u.sources&&u.sources.length){var c=(i=u.sources).find(function(h){return h.node&&h.node.nodeType===1})||i[0];c&&(o={largestShiftTarget:Pu(c.node),largestShiftTime:u.startTime,largestShiftValue:u.value,largestShiftSource:c,largestShiftEntry:u,loadState:zf(u.startTime)})}}return Object.assign(s,{attribution:o})}(e);n(r)},t)},Yf=0,Fa=1/0,xi=0,p5=function(n){n.forEach(function(t){t.interactionId&&(Fa=Math.min(Fa,t.interactionId),xi=Math.max(xi,t.interactionId),Yf=xi?(xi-Fa)/7+1:0)})},Qf=function(){return y1?Yf:performance.interactionCount||0},g5=function(){"interactionCount"in performance||y1||(y1=zr("event",p5,{type:"event",buffered:!0,durationThreshold:0}))},Ie=[],Rs=new Map,Xf=0,m5=function(){var n=Math.min(Ie.length-1,Math.floor((Qf()-Xf)/50));return Ie[n]},Jf=[],_5=function(n){if(Jf.forEach(function(s){return s(n)}),n.interactionId||n.entryType==="first-input"){var t=Ie[Ie.length-1],e=Rs.get(n.interactionId);if(e||Ie.length<10||n.duration>t.latency){if(e)n.duration>e.latency?(e.entries=[n],e.latency=n.duration):n.duration===e.latency&&n.startTime===e.entries[0].startTime&&e.entries.push(n);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};Rs.set(r.id,r),Ie.push(r)}Ie.sort(function(s,i){return i.latency-s.latency}),Ie.length>10&&Ie.splice(10).forEach(function(s){return Rs.delete(s.id)})}}},ku=function(n){var t=self.requestIdleCallback||self.setTimeout,e=-1;return n=Ou(n),document.visibilityState==="hidden"?n():(e=t(n),Xo(n)),e},Mh=[200,500],E5=function(n,t){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(t=t||{},Vu(function(){var e;g5();var r,s=kn("INP"),i=function(u){ku(function(){u.forEach(_5);var c=m5();c&&c.latency!==s.value&&(s.value=c.latency,s.entries=c.entries,r())})},o=zr("event",i,{durationThreshold:(e=t.durationThreshold)!==null&&e!==void 0?e:40});r=Dn(n,s,Mh,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),Xo(function(){i(o.takeRecords()),r(!0)}),hi(function(){Xf=Qf(),Ie.length=0,Rs.clear(),s=kn("INP"),r=Dn(n,s,Mh,t.reportAllChanges)}))}))},vr=[],gn=[],T1=0,Du=new WeakMap,Rr=new Map,I1=-1,y5=function(n){vr=vr.concat(n),Zf()},Zf=function(){I1<0&&(I1=ku(T5))},T5=function(){Rr.size>10&&Rr.forEach(function(o,u){Rs.has(u)||Rr.delete(u)});var n=Ie.map(function(o){return Du.get(o.entries[0])}),t=gn.length-50;gn=gn.filter(function(o,u){return u>=t||n.includes(o)});for(var e=new Set,r=0;r<gn.length;r++){var s=gn[r];td(s.startTime,s.processingEnd).forEach(function(o){e.add(o)})}var i=vr.length-1-50;vr=vr.filter(function(o,u){return o.startTime>T1&&u>i||e.has(o)}),I1=-1};Jf.push(function(n){n.interactionId&&n.target&&!Rr.has(n.interactionId)&&Rr.set(n.interactionId,n.target)},function(n){var t,e=n.startTime+n.duration;T1=Math.max(T1,n.processingEnd);for(var r=gn.length-1;r>=0;r--){var s=gn[r];if(Math.abs(e-s.renderTime)<=8){(t=s).startTime=Math.min(n.startTime,t.startTime),t.processingStart=Math.min(n.processingStart,t.processingStart),t.processingEnd=Math.max(n.processingEnd,t.processingEnd),t.entries.push(n);break}}t||(t={startTime:n.startTime,processingStart:n.processingStart,processingEnd:n.processingEnd,renderTime:e,entries:[n]},gn.push(t)),(n.interactionId||n.entryType==="first-input")&&Du.set(n,t),Zf()});var td=function(n,t){for(var e,r=[],s=0;e=vr[s];s++)if(!(e.startTime+e.duration<n)){if(e.startTime>t)break;r.push(e)}return r},I5=function(n,t){Vh||(Vh=zr("long-animation-frame",y5)),E5(function(e){var r=function(s){var i=s.entries[0],o=Du.get(i),u=i.processingStart,c=o.processingEnd,h=o.entries.sort(function(U,X){return U.processingStart-X.processingStart}),p=td(i.startTime,c),g=s.entries.find(function(U){return U.target}),y=g&&g.target||Rr.get(i.interactionId),C=[i.startTime+i.duration,c].concat(p.map(function(U){return U.startTime+U.duration})),O=Math.max.apply(Math,C),M={interactionTarget:Pu(y),interactionTargetElement:y,interactionType:i.name.startsWith("key")?"keyboard":"pointer",interactionTime:i.startTime,nextPaintTime:O,processedEventEntries:h,longAnimationFrameEntries:p,inputDelay:u-i.startTime,processingDuration:c-u,presentationDelay:Math.max(O-c,0),loadState:zf(i.startTime)};return Object.assign(s,{attribution:M})}(e);n(r)},t)},Fh=[2500,4e3],Ua={},w5=function(n,t){(function(e,r){r=r||{},Vu(function(){var s,i=Kf(),o=kn("LCP"),u=function(p){r.reportAllChanges||(p=p.slice(-1)),p.forEach(function(g){g.startTime<i.firstHiddenTime&&(o.value=Math.max(g.startTime-bu(),0),o.entries=[g],s())})},c=zr("largest-contentful-paint",u);if(c){s=Dn(e,o,Fh,r.reportAllChanges);var h=Ou(function(){Ua[o.id]||(u(c.takeRecords()),c.disconnect(),Ua[o.id]=!0,s(!0))});["keydown","click"].forEach(function(p){addEventListener(p,function(){return ku(h)},{once:!0,capture:!0})}),Xo(h),hi(function(p){o=kn("LCP"),s=Dn(e,o,Fh,r.reportAllChanges),Nu(function(){o.value=performance.now()-p.timeStamp,Ua[o.id]=!0,s(!0)})})}})})(function(e){var r=function(s){var i={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:s.value};if(s.entries.length){var o=Qo();if(o){var u=o.activationStart||0,c=s.entries[s.entries.length-1],h=c.url&&performance.getEntriesByType("resource").filter(function(O){return O.name===c.url})[0],p=Math.max(0,o.responseStart-u),g=Math.max(p,h?(h.requestStart||h.startTime)-u:0),y=Math.max(g,h?h.responseEnd-u:0),C=Math.max(y,c.startTime-u);i={element:Pu(c.element),timeToFirstByte:p,resourceLoadDelay:g-p,resourceLoadDuration:y-g,elementRenderDelay:C-y,navigationEntry:o,lcpEntry:c},c.url&&(i.url=c.url),h&&(i.lcpResourceEntry=h)}}return Object.assign(s,{attribution:i})}(e);n(r)},t)};const ed="@firebase/installations",xu="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=1e4,rd=`w:${xu}`,sd="FIS_v2",A5="https://firebaseinstallations.googleapis.com/v1",v5=60*60*1e3,R5="installations",S5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nr=new sr(R5,S5,C5);function id(n){return n instanceof Ue&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od({projectId:n}){return`${A5}/projects/${n}/installations`}function ad(n){return{token:n.token,requestStatus:2,expiresIn:b5(n.expiresIn),creationTime:Date.now()}}async function ud(n,t){const r=(await t.json()).error;return nr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cd({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function P5(n,{refreshToken:t}){const e=cd(n);return e.append("Authorization",N5(t)),e}async function ld(n){const t=await n();return t.status>=500&&t.status<600?n():t}function b5(n){return Number(n.replace("s","000"))}function N5(n){return`${sd} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O5({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=od(n),s=cd(n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:e,authVersion:sd,appId:n.appId,sdkVersion:rd},u={method:"POST",headers:s,body:JSON.stringify(o)},c=await ld(()=>fetch(r,u));if(c.ok){const h=await c.json();return{fid:h.fid||e,registrationStatus:2,refreshToken:h.refreshToken,authToken:ad(h.authToken)}}else throw await ud("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V5(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5=/^[cdef][\w-]{21}$/,w1="";function D5(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=x5(n);return k5.test(e)?e:w1}catch{return w1}}function x5(n){return V5(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Map;function dd(n,t){const e=Jo(n);pd(e,t),L5(e,t)}function pd(n,t){const e=fd.get(n);if(e)for(const r of e)r(t)}function L5(n,t){const e=M5();e&&e.postMessage({key:n,fid:t}),F5()}let zn=null;function M5(){return!zn&&"BroadcastChannel"in self&&(zn=new BroadcastChannel("[Firebase] FID Change"),zn.onmessage=n=>{pd(n.data.key,n.data.fid)}),zn}function F5(){fd.size===0&&zn&&(zn.close(),zn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U5="firebase-installations-database",B5=1,rr="firebase-installations-store";let Ba=null;function Lu(){return Ba||(Ba=h2(U5,B5,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(rr)}}})),Ba}async function Io(n,t){const e=Jo(n),s=(await Lu()).transaction(rr,"readwrite"),i=s.objectStore(rr),o=await i.get(e);return await i.put(t,e),await s.done,(!o||o.fid!==t.fid)&&dd(n,t.fid),t}async function gd(n){const t=Jo(n),r=(await Lu()).transaction(rr,"readwrite");await r.objectStore(rr).delete(t),await r.done}async function Zo(n,t){const e=Jo(n),s=(await Lu()).transaction(rr,"readwrite"),i=s.objectStore(rr),o=await i.get(e),u=t(o);return u===void 0?await i.delete(e):await i.put(u,e),await s.done,u&&(!o||o.fid!==u.fid)&&dd(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(n){let t;const e=await Zo(n.appConfig,r=>{const s=$5(r),i=q5(n,s);return t=i.registrationPromise,i.installationEntry});return e.fid===w1?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function $5(n){const t=n||{fid:D5(),registrationStatus:0};return md(t)}function q5(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=H5(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:j5(n)}:{installationEntry:t}}async function H5(n,t){try{const e=await O5(n,t);return Io(n.appConfig,e)}catch(e){throw id(e)&&e.customData.serverCode===409?await gd(n.appConfig):await Io(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function j5(n){let t=await Uh(n.appConfig);for(;t.registrationStatus===1;)await hd(100),t=await Uh(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Mu(n);return r||e}return t}function Uh(n){return Zo(n,t=>{if(!t)throw nr.create("installation-not-found");return md(t)})}function md(n){return G5(n)?{fid:n.fid,registrationStatus:0}:n}function G5(n){return n.registrationStatus===1&&n.registrationTime+nd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z5({appConfig:n,heartbeatServiceProvider:t},e){const r=W5(n,e),s=P5(n,e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:rd,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(o)},c=await ld(()=>fetch(r,u));if(c.ok){const h=await c.json();return ad(h)}else throw await ud("Generate Auth Token",c)}function W5(n,{fid:t}){return`${od(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(n,t=!1){let e;const r=await Zo(n.appConfig,i=>{if(!_d(i))throw nr.create("not-registered");const o=i.authToken;if(!t&&Q5(o))return i;if(o.requestStatus===1)return e=K5(n,t),i;{if(!navigator.onLine)throw nr.create("app-offline");const u=J5(i);return e=Y5(n,u),u}});return e?await e:r.authToken}async function K5(n,t){let e=await Bh(n.appConfig);for(;e.authToken.requestStatus===1;)await hd(100),e=await Bh(n.appConfig);const r=e.authToken;return r.requestStatus===0?Fu(n,t):r}function Bh(n){return Zo(n,t=>{if(!_d(t))throw nr.create("not-registered");const e=t.authToken;return Z5(e)?{...t,authToken:{requestStatus:0}}:t})}async function Y5(n,t){try{const e=await z5(n,t),r={...t,authToken:e};return await Io(n.appConfig,r),e}catch(e){if(id(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await gd(n.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Io(n.appConfig,r)}throw e}}function _d(n){return n!==void 0&&n.registrationStatus===2}function Q5(n){return n.requestStatus===2&&!X5(n)}function X5(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+v5}function J5(n){const t={requestStatus:1,requestTime:Date.now()};return{...n,authToken:t}}function Z5(n){return n.requestStatus===1&&n.requestTime+nd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(n){const t=n,{installationEntry:e,registrationPromise:r}=await Mu(t);return r?r.catch(console.error):Fu(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(n,t=!1){const e=n;return await n_(e),(await Fu(e,t)).token}async function n_(n){const{registrationPromise:t}=await Mu(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n){if(!n||!n.options)throw $a("App Configuration");if(!n.name)throw $a("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw $a(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function $a(n){return nr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="installations",s_="installations-internal",i_=n=>{const t=n.getProvider("app").getImmediate(),e=r_(t),r=Lr(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},o_=n=>{const t=n.getProvider("app").getImmediate(),e=Lr(t,Ed).getImmediate();return{getId:()=>t_(e),getToken:s=>e_(e,s)}};function a_(){We(new xe(Ed,i_,"PUBLIC")),We(new xe(s_,o_,"PRIVATE"))}a_();Ee(ed,xu);Ee(ed,xu,"esm2020");const $h="@firebase/performance",A1="0.7.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=A1,u_="FB-PERF-TRACE-START",c_="FB-PERF-TRACE-STOP",v1="FB-PERF-TRACE-MEASURE",Td="_wt_",Id="_fp",wd="_fcp",Ad="_fid",vd="_lcp",l_="lcp_element",Rd="_inp",h_="inp_interactionTarget",Sd="_cls",f_="cls_largestShiftTarget",Cd="@firebase/performance/config",Pd="@firebase/performance/configexpire",d_="performance",bd="Performance";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},jt=new sr(d_,bd,p_);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Ao(bd);Je.logLevel=st.INFO;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa,Nd;class Ot{constructor(t){if(this.window=t,!t)throw jt.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay),this.onLCP=w5,this.onINP=I5,this.onCLS=d5}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){!this.performance||!this.performance.mark||this.performance.mark(t)}measure(t,e,r){!this.performance||!this.performance.measure||this.performance.measure(t,e,r)}getEntriesByType(t){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(t)}getEntriesByName(t){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(t)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!U0()?(Je.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):o2()?!0:(Je.info("IndexedDB is not supported by current browser"),!1)}setupObserver(t,e){if(!this.PerformanceObserver)return;new this.PerformanceObserver(s=>{for(const i of s.getEntries())e(i)}).observe({entryTypes:[t]})}static getInstance(){return qa===void 0&&(qa=new Ot(Nd)),qa}}function g_(n){Nd=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Od;function m_(n){const t=n.getId();return t.then(e=>{Od=e}),t}function Uu(){return Od}function __(n){const t=n.getToken();return t.then(e=>{}),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,t){const e=n.length-t.length;if(e<0||e>1)throw jt.create("invalid String merger input");const r=[];for(let s=0;s<n.length;s++)r.push(n.charAt(s)),t.length>s&&r.push(t.charAt(s));return r.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha;class Zt{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=qh("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=qh("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return Ha===void 0&&(Ha=new Zt),Ha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ss;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VISIBLE=1]="VISIBLE",n[n.HIDDEN=2]="HIDDEN"})(Ss||(Ss={}));const E_=["firebase_","google_","ga_"],y_=new RegExp("^[a-zA-Z]\\w*$"),T_=40,R1=100;function I_(){const n=Ot.getInstance().navigator;return n!=null&&n.serviceWorker?n.serviceWorker.controller?2:3:1}function w_(){switch(Ot.getInstance().document.visibilityState){case"visible":return Ss.VISIBLE;case"hidden":return Ss.HIDDEN;default:return Ss.UNKNOWN}}function A_(){const t=Ot.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function v_(n){return n.length===0||n.length>T_?!1:!E_.some(e=>n.startsWith(e))&&!!n.match(y_)}function R_(n){return n.length!==0&&n.length<=R1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){var e;const t=(e=n.options)==null?void 0:e.appId;if(!t)throw jt.create("no app id");return t}function S_(n){var e;const t=(e=n.options)==null?void 0:e.projectId;if(!t)throw jt.create("no project id");return t}function C_(n){var e;const t=(e=n.options)==null?void 0:e.apiKey;if(!t)throw jt.create("no api key");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="0.0.1",le={loggingEnabled:!0},b_="FIREBASE_INSTALLATIONS_AUTH";function N_(n,t){const e=O_();return e?(Hh(e),Promise.resolve()):D_(n,t).then(Hh).then(r=>V_(r),()=>{})}function O_(){const n=Ot.getInstance().localStorage;if(!n)return;const t=n.getItem(Pd);if(!t||!x_(t))return;const e=n.getItem(Cd);if(e)try{return JSON.parse(e)}catch{return}}function V_(n){const t=Ot.getInstance().localStorage;!n||!t||(t.setItem(Cd,JSON.stringify(n)),t.setItem(Pd,String(Date.now()+Zt.getInstance().configTimeToLive*60*60*1e3)))}const k_="Could not fetch config, will use default configs";function D_(n,t){return __(n.installations).then(e=>{const r=S_(n.app),s=C_(n.app),i=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${s}`,o=new Request(i,{method:"POST",headers:{Authorization:`${b_} ${e}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:Vd(n.app),app_version:yd,sdk_version:P_})});return fetch(o).then(u=>{if(u.ok)return u.json();throw jt.create("RC response not ok")})}).catch(()=>{Je.info(k_)})}function Hh(n){if(!n)return n;const t=Zt.getInstance(),e=n.entries||{};return e.fpr_enabled!==void 0?t.loggingEnabled=String(e.fpr_enabled)==="true":t.loggingEnabled=le.loggingEnabled,e.fpr_log_source?t.logSource=Number(e.fpr_log_source):le.logSource&&(t.logSource=le.logSource),e.fpr_log_endpoint_url?t.logEndPointUrl=e.fpr_log_endpoint_url:le.logEndPointUrl&&(t.logEndPointUrl=le.logEndPointUrl),e.fpr_log_transport_key?t.transportKey=e.fpr_log_transport_key:le.transportKey&&(t.transportKey=le.transportKey),e.fpr_vc_network_request_sampling_rate!==void 0?t.networkRequestsSamplingRate=Number(e.fpr_vc_network_request_sampling_rate):le.networkRequestsSamplingRate!==void 0&&(t.networkRequestsSamplingRate=le.networkRequestsSamplingRate),e.fpr_vc_trace_sampling_rate!==void 0?t.tracesSamplingRate=Number(e.fpr_vc_trace_sampling_rate):le.tracesSamplingRate!==void 0&&(t.tracesSamplingRate=le.tracesSamplingRate),e.fpr_log_max_flush_size?t.logMaxFlushSize=Number(e.fpr_log_max_flush_size):le.logMaxFlushSize&&(t.logMaxFlushSize=le.logMaxFlushSize),t.logTraceAfterSampling=jh(t.tracesSamplingRate),t.logNetworkAfterSampling=jh(t.networkRequestsSamplingRate),n}function x_(n){return Number(n)>Date.now()}function jh(n){return Math.random()<=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=1,ja;function kd(n){return Bu=2,ja=ja||M_(n),ja}function L_(){return Bu===3}function M_(n){return F_().then(()=>m_(n.installations)).then(t=>N_(n,t)).then(()=>Gh(),()=>Gh())}function F_(){const n=Ot.getInstance().document;return new Promise(t=>{if(n&&n.readyState!=="complete"){const e=()=>{n.readyState==="complete"&&(n.removeEventListener("readystatechange",e),t())};n.addEventListener("readystatechange",e)}else t()})}function Gh(){Bu=3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=10*1e3,U_=5.5*1e3,B_=1e3,xd=3,$_=65536,q_=new TextEncoder;let Wi=xd,me=[],zh=!1;function H_(){zh||($u(U_),zh=!0)}function $u(n){setTimeout(()=>{Wi<=0||(me.length>0&&j_(),$u(Dd))},n)}function j_(){const n=me.splice(0,B_),t=S1(n);G_(t).then(()=>{Wi=xd}).catch(()=>{me=[...n,...me],Wi--,Je.info(`Tries left: ${Wi}.`),$u(Dd)})}function S1(n){const t=n.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),e={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Zt.getInstance().logSource,log_event:t};return JSON.stringify(e)}function G_(n){const t=Zt.getInstance().getFlTransportFullUrl();return q_.encode(n).length<=$_&&navigator.sendBeacon&&navigator.sendBeacon(t,n)?Promise.resolve():fetch(t,{method:"POST",body:n})}function z_(n){if(!n.eventTime||!n.message)throw jt.create("invalid cc log");me=[...me,n]}function W_(n){return(...t)=>{const e=n(...t);z_({message:e,eventTime:Date.now()})}}function K_(){const n=Zt.getInstance().getFlTransportFullUrl();for(;me.length>0;){const t=me.splice(-Zt.getInstance().logMaxFlushSize),e=S1(t);if(!(navigator.sendBeacon&&navigator.sendBeacon(n,e))){me=[...me,...t];break}}if(me.length>0){const t=S1(me);fetch(n,{method:"POST",body:t}).catch(()=>{Je.info("Failed flushing queued events.")})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs;function Ld(n,t){Cs||(Cs={send:W_(X_),flush:K_}),Cs.send(n,t)}function Li(n){const t=Zt.getInstance();!t.instrumentationEnabled&&n.isAuto||!t.dataCollectionEnabled&&!n.isAuto||Ot.getInstance().requiredApisAvailable()&&(L_()?Ga(n):kd(n.performanceController).then(()=>Ga(n),()=>Ga(n)))}function Y_(){Cs&&Cs.flush()}function Ga(n){if(!Uu())return;const t=Zt.getInstance();!t.loggingEnabled||!t.logTraceAfterSampling||Ld(n,1)}function Q_(n){const t=Zt.getInstance();if(!t.instrumentationEnabled)return;const e=n.url,r=t.logEndPointUrl.split("?")[0],s=t.flTransportEndpointUrl.split("?")[0];e===r||e===s||!t.loggingEnabled||!t.logNetworkAfterSampling||Ld(n,0)}function X_(n,t){return t===0?J_(n):Z_(n)}function J_(n){const t={url:n.url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},e={application_info:Md(n.performanceController.app),network_request_metric:t};return JSON.stringify(e)}function Z_(n){const t={name:n.name,is_auto:n.isAuto,client_start_time_us:n.startTimeUs,duration_us:n.durationUs};Object.keys(n.counters).length!==0&&(t.counters=n.counters);const e=n.getAttributes();Object.keys(e).length!==0&&(t.custom_attributes=e);const r={application_info:Md(n.performanceController.app),trace_metric:t};return JSON.stringify(r)}function Md(n){return{google_app_id:Vd(n),app_instance_id:Uu(),web_app_info:{sdk_version:yd,page_url:Ot.getInstance().getUrl(),service_worker_status:I_(),visibility_state:w_(),effective_connection_type:A_()},application_process_state:0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n,t){const e=t;if(!e||e.responseStart===void 0)return;const r=Ot.getInstance().getTimeOrigin(),s=Math.floor((e.startTime+r)*1e3),i=e.responseStart?Math.floor((e.responseStart-e.startTime)*1e3):void 0,o=Math.floor((e.responseEnd-e.startTime)*1e3),u=e.name&&e.name.split("?")[0],c={performanceController:n,url:u,responsePayloadBytes:e.transferSize,startTimeUs:s,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o};Q_(c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=100,eE="_",nE=[Id,wd,Ad,vd,Sd,Rd];function rE(n,t){return n.length===0||n.length>tE?!1:t&&t.startsWith(Td)&&nE.indexOf(n)>-1||!n.startsWith(eE)}function sE(n){const t=Math.floor(n);return t<n&&Je.info(`Metric value should be an Integer, setting the value as : ${t}.`),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e,r=!1,s){this.performanceController=t,this.name=e,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=Ot.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${u_}-${this.randomId}-${this.name}`,this.traceStopMark=`${c_}-${this.randomId}-${this.name}`,this.traceMeasure=s||`${v1}-${this.randomId}-${this.name}`,s&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw jt.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw jt.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),Li(this)}record(t,e,r){if(t<=0)throw jt.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw jt.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(e*1e3),this.startTimeUs=Math.floor(t*1e3),r&&r.attributes&&(this.customAttributes={...r.attributes}),r&&r.metrics)for(const s of Object.keys(r.metrics))isNaN(Number(r.metrics[s]))||(this.counters[s]=Math.floor(Number(r.metrics[s])));Li(this)}incrementMetric(t,e=1){this.counters[t]===void 0?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)}putMetric(t,e){if(rE(t,this.name))this.counters[t]=sE(e??0);else throw jt.create("invalid custom metric name",{customMetricName:t})}getMetric(t){return this.counters[t]||0}putAttribute(t,e){const r=v_(t),s=R_(e);if(r&&s){this.customAttributes[t]=e;return}if(!r)throw jt.create("invalid attribute name",{attributeName:t});if(!s)throw jt.create("invalid attribute value",{attributeValue:e})}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){this.customAttributes[t]!==void 0&&delete this.customAttributes[t]}getAttributes(){return{...this.customAttributes}}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(e.duration*1e3),this.startTimeUs=Math.floor((e.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(t,e,r,s,i){const o=Ot.getInstance().getUrl();if(!o)return;const u=new Ks(t,Td+o,!0),c=Math.floor(Ot.getInstance().getTimeOrigin()*1e3);u.setStartTime(c),e&&e[0]&&(u.setDuration(Math.floor(e[0].duration*1e3)),u.putMetric("domInteractive",Math.floor(e[0].domInteractive*1e3)),u.putMetric("domContentLoadedEventEnd",Math.floor(e[0].domContentLoadedEventEnd*1e3)),u.putMetric("loadEventEnd",Math.floor(e[0].loadEventEnd*1e3)));const h="first-paint",p="first-contentful-paint";if(r){const g=r.find(C=>C.name===h);g&&g.startTime&&u.putMetric(Id,Math.floor(g.startTime*1e3));const y=r.find(C=>C.name===p);y&&y.startTime&&u.putMetric(wd,Math.floor(y.startTime*1e3)),i&&u.putMetric(Ad,Math.floor(i*1e3))}this.addWebVitalMetric(u,vd,l_,s.lcp),this.addWebVitalMetric(u,Sd,f_,s.cls),this.addWebVitalMetric(u,Rd,h_,s.inp),Li(u),Y_()}static addWebVitalMetric(t,e,r,s){s&&(t.putMetric(e,Math.floor(s.value*1e3)),s.elementAttribution&&(s.elementAttribution.length>R1?t.putAttribute(r,s.elementAttribution.substring(0,R1)):t.putAttribute(r,s.elementAttribution)))}static createUserTimingTrace(t,e){const r=new Ks(t,e,!1,e);Li(r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki={},Kh=!1,Fd;function Yh(n){Uu()&&(setTimeout(()=>oE(n),0),setTimeout(()=>iE(n),0),setTimeout(()=>aE(n),0))}function iE(n){const t=Ot.getInstance(),e=t.getEntriesByType("resource");for(const r of e)Wh(n,r);t.setupObserver("resource",r=>Wh(n,r))}function oE(n){const t=Ot.getInstance();"onpagehide"in window?t.document.addEventListener("pagehide",()=>za(n)):t.document.addEventListener("unload",()=>za(n)),t.document.addEventListener("visibilitychange",()=>{t.document.visibilityState==="hidden"&&za(n)}),t.onFirstInputDelay&&t.onFirstInputDelay(e=>{Fd=e}),t.onLCP(e=>{var r;Ki.lcp={value:e.value,elementAttribution:(r=e.attribution)==null?void 0:r.element}}),t.onCLS(e=>{var r;Ki.cls={value:e.value,elementAttribution:(r=e.attribution)==null?void 0:r.largestShiftTarget}}),t.onINP(e=>{var r;Ki.inp={value:e.value,elementAttribution:(r=e.attribution)==null?void 0:r.interactionTarget}})}function aE(n){const t=Ot.getInstance(),e=t.getEntriesByType("measure");for(const r of e)Qh(n,r);t.setupObserver("measure",r=>Qh(n,r))}function Qh(n,t){const e=t.name;e.substring(0,v1.length)!==v1&&Ks.createUserTimingTrace(n,e)}function za(n){if(!Kh){Kh=!0;const t=Ot.getInstance(),e=t.getEntriesByType("navigation"),r=t.getEntriesByType("paint");setTimeout(()=>{Ks.createOobTrace(n,e,r,Ki,Fd)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(t,e){this.app=t,this.installations=e,this.initialized=!1}_init(t){this.initialized||((t==null?void 0:t.dataCollectionEnabled)!==void 0&&(this.dataCollectionEnabled=t.dataCollectionEnabled),(t==null?void 0:t.instrumentationEnabled)!==void 0&&(this.instrumentationEnabled=t.instrumentationEnabled),Ot.getInstance().requiredApisAvailable()?a2().then(e=>{e&&(H_(),kd(this).then(()=>Yh(this),()=>Yh(this)),this.initialized=!0)}).catch(e=>{Je.info(`Environment doesn't support IndexedDB: ${e}`)}):Je.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){Zt.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return Zt.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){Zt.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return Zt.getInstance().dataCollectionEnabled}}const cE="[DEFAULT]";function lE(n=P1()){return n=Wt(n),Lr(n,"performance").getImmediate()}const hE=(n,{options:t})=>{const e=n.getProvider("app").getImmediate(),r=n.getProvider("installations-internal").getImmediate();if(e.name!==cE)throw jt.create("FB not default");if(typeof window>"u")throw jt.create("no window");g_(window);const s=new uE(e,r);return s._init(t),s};function fE(){We(new xe("performance",hE,"PUBLIC")),Ee($h,A1),Ee($h,A1,"esm2020")}fE();const dE={apiKey:"AIzaSyB8LhPWA9gFW2GBCOlKl2DHllQsDBz-ooY",authDomain:"strategy-games-b42ee.firebaseapp.com",projectId:"strategy-games-b42ee",storageBucket:"strategy-games-b42ee.firebasestorage.app",messagingSenderId:"378940662151",appId:"1:378940662151:web:6de3fc92a892f4a1dc7322"},qu=f2(dE),pE=J4(qu),Ze=t5(qu);lE(qu);async function gE(){try{const n=await li(or(Ze,"conexion_juego"),{mensaje:"¡Mi app de Capacitor se ha conectado con éxito!",fecha:new Date,estado:"Listo para programar"});console.log("Documento creado con ID:",n.id)}catch(n){console.error("Error al conectar con Firestore local:",n)}}gE();async function mE(n,t="classic"){return(await li(or(Ze,"games"),{ownerId:n,mode:t,status:"active",createdAt:er(),updatedAt:er()})).id}async function Xh(n,t){await li(or(Ze,`games/${n}/players`),{userId:t,score:0,joinedAt:er()})}async function _E(n,t){await li(or(Ze,`games/${n}/turns`),{...t,createdAt:er()})}async function Ud(n,t={}){var e;await li(or(Ze,"analytics"),{type:n,userId:((e=pE.currentUser)==null?void 0:e.uid)||"anonymous",metadata:t,createdAt:er()})}async function EE(n){const t=Y1(Ze,"games",n),e=await a5(t);if(!e.exists())throw new Error("La partida no existe");const r=e.data();if(r.status==="finished"){console.warn("La partida ya está finalizada");return}const s=(r.turnNumber||0)+1;return await u5(t,{turnNumber:s,updatedAt:er()}),await Ud("turn_advanced",{gameId:n,turn:s}),console.log(`Turno ${s} avanzado correctamente`),s}async function Jh(n,t,e,r={}){await _E(n,{playerId:t,action:e,payload:r,timestamp:er()}),await Ud("player_action",{gameId:n,playerId:t,action:e,payload:r}),console.log(`Acción registrada: ${e}`)}function yE(n){const t=n.players.filter(e=>e.status!=="defeated");return t.length===1?t[0].id:null}function TE(n,t,e){const{baseDamage:r,weaponType:s="normal",ability:i=null}=e;let o=r;o*={normal:1,heavy:1.3,magic:1.5,ranged:1.2}[s]||1;const c=t.defense||0;o-=c*.5;const h=n.critChance||.1,p=n.critMultiplier||2,g=Math.random()<h;return g&&(o*=p),i&&(o=IE(n,t,i,o)),o<1&&(o=1),{damage:Math.round(o),isCrit:g}}function IE(n,t,e,r){switch(e){case"power_strike":return r*1.4;case"armor_break":return t.defense=Math.max(0,t.defense-10),r;case"life_steal":return n.hp+=r*.3,r;case"double_hit":return r*2;case"fireball":return r+25;default:return r}}function wE(n,t){const{damage:e,isCrit:r}=t;return n.hp-=e,n.hp<=0&&(n.hp=0,n.status="defeated"),{target:n,damage:e,isCrit:r}}function AE(n,t,e){const r=TE(n,t,e),s=wE(t,r);return{attacker:n,target:s.target,damage:s.damage,isCrit:s.isCrit}}function vE(n=10){const t=["grass","forest","mountain","water","desert"],e=[];for(let r=0;r<n;r++){const s=[];for(let i=0;i<n;i++){const o=t[Math.floor(Math.random()*t.length)];s.push({x:i,y:r,terrain:o,obstacle:RE(o),bonus:SE(o)})}e.push(s)}return e}function RE(n){const e={forest:["tree","bush",null],mountain:["rock","cliff",null],water:["lake","river",null],desert:["dune",null],grass:[null]}[n]||[null];return e[Math.floor(Math.random()*e.length)]}function SE(n){return{forest:{defense:2},mountain:{defense:4,attack:1},water:{speed:-2},desert:{speed:-1},grass:{speed:1}}[n]||{}}function Bd(n,t,e){return!n[e]||!n[e][t]?null:n[e][t]}function CE(n,t,e){const r=Bd(n,t,e);return!(!r||r.terrain==="water"&&r.obstacle==="lake"||r.terrain==="mountain"&&r.obstacle==="cliff")}function PE(n,t){if(!t||!t.bonus)return n;const e={...n};return t.bonus.defense&&(e.defense=(e.defense||0)+t.bonus.defense),t.bonus.attack&&(e.attack=(e.attack||0)+t.bonus.attack),t.bonus.speed&&(e.speed=(e.speed||0)+t.bonus.speed),e}function Zh(n,t){return Math.abs(n.x-t.x)+Math.abs(n.y-t.y)}function bE(n,t,e){const r=[],s=new Map,i=new Map,o=new Map,u=c=>`${c.x},${c.y}`;for(i.set(u(t),0),o.set(u(t),Zh(t,e)),r.push(t);r.length>0;){r.sort((p,g)=>o.get(u(p))-o.get(u(g)));const c=r.shift();if(c.x===e.x&&c.y===e.y)return NE(s,c);const h=OE(n,c);for(const p of h){const g=i.get(u(c))+1;g<(i.get(u(p))||1/0)&&(s.set(u(p),c),i.set(u(p),g),o.set(u(p),g+Zh(p,e)),r.find(y=>y.x===p.x&&y.y===p.y)||r.push(p))}}return null}function NE(n,t){const e=[t],r=s=>`${s.x},${s.y}`;for(;n.has(r(t));)t=n.get(r(t)),e.unshift(t);return e}function OE(n,t){const e=[{x:0,y:-1},{x:0,y:1},{x:-1,y:0},{x:1,y:0}],r=[];for(const s of e){const i=t.x+s.x,o=t.y+s.y;CE(n,i,o)&&r.push({x:i,y:o})}return r}function VE(n,t){const e=Y1(Ze,"games",n);return Cu(e,r=>{r.exists()?t(r.data()):console.warn("La partida ya no existe")})}function kE(n,t){const e=or(Ze,`games/${n}/players`);return Cu(e,r=>{const s=r.docs.map(i=>({id:i.id,...i.data()}));t(s)})}function DE(n,t){const e=or(Ze,`games/${n}/turns`);return Cu(e,r=>{const s=r.docs.map(i=>({id:i.id,...i.data()}));t(s)})}function xE(n,t){let e={game:null,players:[],turns:[]};const r=VE(n,o=>{e.game=o,t(e)}),s=kE(n,o=>{e.players=o,t(e)}),i=DE(n,o=>{e.turns=o,t(e)});return()=>{r(),s(),i()}}const LE={submitScore:async({leaderboardID:n,score:t})=>await Capacitor.Plugins.PGS.submitScore({leaderboardID:n,score:t}),unlock:async({achievementID:n})=>await Capacitor.Plugins.PGS.unlock({achievementID:n})};async function ne(n,t){try{await LE.submitScore({leaderboardID:n,score:t}),console.log("Score sent:",n,t)}catch(e){console.warn("Error sending score:",n,e)}}async function ME(){console.log("Iniciando partida…");const n=await mE("USER_123","classic");await Xh(n,"USER_123"),await Xh(n,"USER_456"),console.log("Partida creada:",n);const t=vE(10);console.log("Mapa generado:",t),xE(n,p=>{console.log("Estado sincronizado:",p)}),await EE(n);const s=bE(t,{x:0,y:0},{x:5,y:7});console.log("Ruta encontrada:",s);for(const p of s){const g=Bd(t,p.x,p.y);let y={id:"USER_123",hp:100,defense:5,speed:3,position:{x:p.x,y:p.y}};y=PE(y,g),console.log(`Jugador movido a (${p.x}, ${p.y})`,y),await Jh(n,"USER_123","move",{direction:"path",position:p})}const i={id:"USER_123",baseDamage:15,defense:5,hp:100,critChance:.1,critMultiplier:2},u=AE(i,{id:"USER_456",defense:3,hp:80},{baseDamage:i.baseDamage,weaponType:"heavy",ability:"power_strike"});console.log("Resultado del ataque:",u),await Jh(n,"USER_123","attack",u);const c={players:[i,u.target]},h=yE(c);return h&&console.log("Ganador detectado:",h),ne("chess_elo",1200),ne("go_wins",3),ne("tetris_lines",s.length),ne("minesweeper_best_time",42),ne("snake_highscore",150),ne("2048_best_tile",4096),ne("reversi_wins",1),{gameId:n,map:t,path:s,attackResult:u,winner:h}}function FE(n){switch(n.game){case"snake":ne("snake_highscore",n.score);break;case"2048":ne("2048_best_tile",n.tile);break;case"tetris":ne("tetris_lines",n.lines);break;case"mines":ne("minesweeper_best_time",n.time);break;case"chess":ne("chess_elo",n.elo);break;case"go":ne("go_wins",n.wins);break;case"reversi":ne("reversi_wins",n.wins);break;default:console.warn("Juego no reconocido:",n.game)}}const UE=document.getElementById("log");function gs(n){UE.textContent+=`
`+n,console.log(n)}document.querySelectorAll("[data-game]").forEach(n=>{n.addEventListener("click",async()=>{const t=n.dataset.game;gs("Iniciando "+t+"...");try{const e=await ME();gs("Partida OK: "+e.gameId),FE({game:t,score:100,tile:2048,lines:10,time:42,elo:1200,wins:1}),gs("Score enviado a Play Games")}catch(e){gs("Error: "+e.message+" "+e.stack)}})});gs("Arcade listo - 7 juegos");
