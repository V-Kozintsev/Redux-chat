/*! For license information please see main.23d9e1e552975a6e7c54.js.LICENSE.txt */
(()=>{"use strict";function e(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var t=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),r=()=>Math.random().toString(36).substring(7).split("").join("."),n={INIT:`@@redux/INIT${r()}`,REPLACE:`@@redux/REPLACE${r()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${r()}`};function o(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function i(r,a,c){if("function"!=typeof r)throw new Error(e(2));if("function"==typeof a&&"function"==typeof c||"function"==typeof c&&"function"==typeof arguments[3])throw new Error(e(0));if("function"==typeof a&&void 0===c&&(c=a,a=void 0),void 0!==c){if("function"!=typeof c)throw new Error(e(1));return c(i)(r,a)}let s=r,u=a,f=new Map,l=f,p=0,d=!1;function h(){l===f&&(l=new Map,f.forEach(((e,t)=>{l.set(t,e)})))}function y(){if(d)throw new Error(e(3));return u}function m(t){if("function"!=typeof t)throw new Error(e(4));if(d)throw new Error(e(5));let r=!0;h();const n=p++;return l.set(n,t),function(){if(r){if(d)throw new Error(e(6));r=!1,h(),l.delete(n),f=null}}}function g(t){if(!o(t))throw new Error(e(7));if(void 0===t.type)throw new Error(e(8));if("string"!=typeof t.type)throw new Error(e(17));if(d)throw new Error(e(9));try{d=!0,u=s(u,t)}finally{d=!1}return(f=l).forEach((e=>{e()})),t}return g({type:n.INIT}),{dispatch:g,subscribe:m,getState:y,replaceReducer:function(t){if("function"!=typeof t)throw new Error(e(10));s=t,g({type:n.REPLACE})},[t]:function(){const r=m;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(e(11));function n(){const e=t;e.next&&e.next(y())}return n(),{unsubscribe:r(n)}},[t](){return this}}}}}function a(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...r)=>e(t(...r))))}function c(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var s=c(),u=c,f=Symbol.for("immer-nothing"),l=Symbol.for("immer-draftable"),p=Symbol.for("immer-state");function d(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var h=Object.getPrototypeOf;function y(e){return!!e&&!!e[p]}function m(e){return!!e&&(v(e)||Array.isArray(e)||!!e[l]||!!e.constructor?.[l]||O(e)||S(e))}var g=Object.prototype.constructor.toString();function v(e){if(!e||"object"!=typeof e)return!1;const t=h(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===g}function w(e,t){0===b(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function b(e){const t=e[p];return t?t.type_:Array.isArray(e)?1:O(e)?2:S(e)?3:0}function _(e,t){return 2===b(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function E(e,t,r){const n=b(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function O(e){return e instanceof Map}function S(e){return e instanceof Set}function j(e){return e.copy_||e.base_}function P(e,t){if(O(e))return new Map(e);if(S(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=v(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[p];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(h(e),t)}{const t=h(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function x(e,t=!1){return C(e)||y(e)||!m(e)||(b(e)>1&&(e.set=e.add=e.clear=e.delete=k),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>x(t,!0)))),e}function k(){d(2)}function C(e){return Object.isFrozen(e)}var N,L={};function T(e){const t=L[e];return t||d(0),t}function A(){return N}function M(e,t){t&&(T("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function R(e){I(e),e.drafts_.forEach(z),e.drafts_=null}function I(e){e===N&&(N=e.parent_)}function D(e){return N={drafts_:[],parent_:N,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function z(e){const t=e[p];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function F(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[p].modified_&&(R(t),d(4)),m(e)&&(e=B(t,e),t.parent_||$(t,e)),t.patches_&&T("Patches").generateReplacementPatches_(r[p].base_,e,t.patches_,t.inversePatches_)):e=B(t,r,[]),R(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==f?e:void 0}function B(e,t,r){if(C(t))return t;const n=t[p];if(!n)return w(t,((o,i)=>U(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return $(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),w(o,((o,a)=>U(e,n,t,o,a,r,i))),$(e,t,!1),r&&e.patches_&&T("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function U(e,t,r,n,o,i,a){if(y(o)){const a=B(e,o,i&&t&&3!==t.type_&&!_(t.assigned_,n)?i.concat(n):void 0);if(E(r,n,a),!y(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(m(o)&&!C(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;B(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||$(e,o)}}function $(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&x(t,r)}var W={get(e,t){if(t===p)return e;const r=j(e);if(!_(r,t))return function(e,t,r){const n=G(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!m(n)?n:n===X(e.base_,t)?(V(e),e.copy_[t]=H(n,e)):n},has:(e,t)=>t in j(e),ownKeys:e=>Reflect.ownKeys(j(e)),set(e,t,r){const n=G(j(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=X(j(e),t),a=n?.[p];if(a&&a.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((o=r)===(i=n)?0!==o||1/o==1/i:o!=o&&i!=i)&&(void 0!==r||_(e.base_,t)))return!0;V(e),q(e)}var o,i;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==X(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,V(e),q(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=j(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){d(11)},getPrototypeOf:e=>h(e.base_),setPrototypeOf(){d(12)}},K={};function X(e,t){const r=e[p];return(r?j(r):e)[t]}function G(e,t){if(!(t in e))return;let r=h(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=h(r)}}function q(e){e.modified_||(e.modified_=!0,e.parent_&&q(e.parent_))}function V(e){e.copy_||(e.copy_=P(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function H(e,t){const r=O(e)?T("MapSet").proxyMap_(e,t):S(e)?T("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:A(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=W;r&&(o=[n],i=K);const{revoke:a,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=a,c}(e,t);return(t?t.scope_:A()).drafts_.push(r),r}function J(e){if(!m(e)||C(e))return e;const t=e[p];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=P(e,t.scope_.immer_.useStrictShallowCopy_)}else r=P(e,!0);return w(r,((e,t)=>{E(r,e,J(t))})),t&&(t.finalized_=!1),r}w(W,((e,t)=>{K[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),K.deleteProperty=function(e,t){return K.set.call(this,e,t,void 0)},K.set=function(e,t,r){return W.set.call(this,e[0],t,r,e[0])};var Y=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&d(6),void 0!==r&&"function"!=typeof r&&d(7),m(e)){const o=D(this),i=H(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?R(o):I(o)}return M(o,r),F(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===f&&(n=void 0),this.autoFreeze_&&x(n,!0),r){const t=[],o=[];T("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}d(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;m(e)||d(8),y(e)&&(y(t=e)||d(10),e=J(t));const r=D(this),n=H(e,void 0);return n[p].isManual_=!0,I(r),n}finishDraft(e,t){const r=e&&e[p];r&&r.isManual_||d(9);const{scope_:n}=r;return M(n,t),F(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=T("Patches").applyPatches_;return y(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},Q=Y.produce;Y.produceWithPatches.bind(Y),Y.setAutoFreeze.bind(Y),Y.setUseStrictShallowCopy.bind(Y),Y.applyPatches.bind(Y),Y.createDraft.bind(Y),Y.finishDraft.bind(Y);var Z="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?a:a.apply(null,arguments)};function ee(e,t){function r(...r){if(t){let n=t(...r);if(!n)throw new Error(he(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>function(e){return o(e)&&"type"in e&&"string"==typeof e.type}(t)&&t.type===e,r}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var te=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function re(e){return m(e)?Q(e,(()=>{})):e}function ne(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}var oe=e=>t=>{setTimeout(t,e)};function ie(e){const t={},r=[];let n;const o={addCase(e,r){const n="string"==typeof e?e:e.type;if(!n)throw new Error(he(28));if(n in t)throw new Error(he(29));return t[n]=r,o},addMatcher:(e,t)=>(r.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(n=e,o)};return e(o),[t,r,n]}var ae=Symbol.for("rtk-slice-createasyncthunk");function ce(e,t){return`${e}/${t}`}function se({creators:e}={}){const t=e?.asyncThunk?.[ae];return function(e){const{name:r,reducerPath:n=r}=e;if(!r)throw new Error(he(11));const o=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(o),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(e,t){const r="string"==typeof e?e:e.type;if(!r)throw new Error(he(12));if(r in a.sliceCaseReducersByType)throw new Error(he(13));return a.sliceCaseReducersByType[r]=t,c},addMatcher:(e,t)=>(a.sliceMatchers.push({matcher:e,reducer:t}),c),exposeAction:(e,t)=>(a.actionCreators[e]=t,c),exposeCaseReducer:(e,t)=>(a.sliceCaseReducersByName[e]=t,c)};function s(){const[t={},r=[],n]="function"==typeof e.extraReducers?ie(e.extraReducers):[e.extraReducers],o={...t,...a.sliceCaseReducersByType};return function(e){let t,[i,c,s]=ie((e=>{for(let t in o)e.addCase(t,o[t]);for(let t of a.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)}));if("function"==typeof e)t=()=>re(e());else{const r=re(e);t=()=>r}function u(e=t(),r){let n=[i[r.type],...c.filter((({matcher:e})=>e(r))).map((({reducer:e})=>e))];return 0===n.filter((e=>!!e)).length&&(n=[s]),n.reduce(((e,t)=>{if(t){if(y(e)){const n=t(e,r);return void 0===n?e:n}if(m(e))return Q(e,(e=>t(e,r)));{const n=t(e,r);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}}return e}),e)}return u.getInitialState=t,u}(e.initialState)}i.forEach((n=>{const i=o[n],a={reducerName:n,type:ce(r,n),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(i)?function({type:e,reducerName:t,createNotation:r},n,o){let i,a;if("reducer"in n){if(r&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(n))throw new Error(he(17));i=n.reducer,a=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,a?ee(e,a):ee(e))}(a,i,c):function({type:e,reducerName:t},r,n,o){if(!o)throw new Error(he(18));const{payloadCreator:i,fulfilled:a,pending:c,rejected:s,settled:u,options:f}=r,l=o(e,i,f);n.exposeAction(t,l),a&&n.addCase(l.fulfilled,a),c&&n.addCase(l.pending,c),s&&n.addCase(l.rejected,s),u&&n.addMatcher(l.settled,u),n.exposeCaseReducer(t,{fulfilled:a||le,pending:c||le,rejected:s||le,settled:u||le})}(a,i,c,t)}));const u=e=>e,f=new Map;let l;function p(e,t){return l||(l=s()),l(e,t)}function d(){return l||(l=s()),l.getInitialState()}function h(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=d()),n}function o(t=u){const n=ne(f,r,(()=>new WeakMap));return ne(n,t,(()=>{const n={};for(const[o,i]of Object.entries(e.selectors??{}))n[o]=ue(i,t,d,r);return n}))}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}const g={name:r,reducer:p,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:d,...h(n),injectInto(e,{reducerPath:t,...r}={}){const o=t??n;return e.inject({reducerPath:o,reducer:p},r),{...g,...h(o,!0)}}};return g}}function ue(e,t,r,n){function o(o,...i){let a=t(o);return void 0===a&&n&&(a=r()),e(a,...i)}return o.unwrapped=e,o}var fe=se();function le(){}var pe,{assign:de}=Object;function he(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function ye(e){return ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(e)}function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach((function(t){ve(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ve(e,t,r){return(t=function(e){var t=function(e){if("object"!=ye(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=ye(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==ye(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function we(){we=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:P(e,r,c)}),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",d="suspendedYield",h="executing",y="completed",m={};function g(){}function v(){}function w(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(L([])));E&&E!==r&&n.call(E,a)&&(b=E);var O=w.prototype=g.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(o,i,a,c){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==ye(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function P(t,r,n){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=x(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var u=l(t,r,n);if("normal"===u.type){if(o=n.done?y:d,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function x(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=l(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(ye(t)+" is not iterable")}return v.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=u(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},S(j.prototype),u(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(O),u(O,s,"Generator"),u(O,a,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}function be(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function _e(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){be(i,n,o,a,c,"next",e)}function c(e){be(i,n,o,a,c,"throw",e)}a(void 0)}))}}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Symbol.for("rtk-state-proxy-original");var Oe=fe({name:"chat",initialState:{messages:[],originalMessages:[],users:[],error:null},reducers:{setMessages:function(e,t){e.messages=t.payload,e.originalMessages=t.payload},addMessage:function(e,t){e.messages.push(t.payload),e.originalMessages.push(t.payload)},setUsers:function(e,t){e.users=t.payload},setError:function(e,t){e.error=t.payload},searchMessage:function(e,t){var r,n=t.payload.toLowerCase();e.messages=n?e.originalMessages.filter((function(e){return!(!e||"string"!=typeof e.message||"string"!=typeof e.nickname)&&(e.message.toLowerCase().includes(n)||e.nickname.toLowerCase().includes(n))})):function(e){if(Array.isArray(e))return Ee(e)}(r=e.originalMessages)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return Ee(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ee(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}),Se=function(t){const r=function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{};let i=new te;return t&&("boolean"==typeof t?i.push(s):i.push(u(t.extraArgument))),i},{reducer:c,middleware:f,devTools:l=!0,preloadedState:p,enhancers:d}=t||{};let h,y;if("function"==typeof c)h=c;else{if(!o(c))throw new Error(he(1));h=function(t){const r=Object.keys(t),o={};for(let e=0;e<r.length;e++){const n=r[e];"function"==typeof t[n]&&(o[n]=t[n])}const i=Object.keys(o);let a;try{!function(t){Object.keys(t).forEach((r=>{const o=t[r];if(void 0===o(void 0,{type:n.INIT}))throw new Error(e(12));if(void 0===o(void 0,{type:n.PROBE_UNKNOWN_ACTION()}))throw new Error(e(13))}))}(o)}catch(e){a=e}return function(t={},r){if(a)throw a;let n=!1;const c={};for(let a=0;a<i.length;a++){const s=i[a],u=o[s],f=t[s],l=u(f,r);if(void 0===l)throw r&&r.type,new Error(e(14));c[s]=l,n=n||l!==f}return n=n||i.length!==Object.keys(t).length,n?c:t}}(c)}y="function"==typeof f?f(r):r();let m=a;l&&(m=Z({trace:!1,..."object"==typeof l&&l}));const g=function(...t){return r=>(n,o)=>{const i=r(n,o);let c=()=>{throw new Error(e(15))};const s={getState:i.getState,dispatch:(e,...t)=>c(e,...t)},u=t.map((e=>e(s)));return c=a(...u)(i.dispatch),{...i,dispatch:c}}}(...y),v=(e=>function(t){const{autoBatch:r=!0}=t??{};let n=new te(e);return r&&n.push(((e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,i=!1,a=!1;const c=new Set,s="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:oe(10):"callback"===e.type?e.queueNotification:oe(e.timeout),u=()=>{a=!1,i&&(i=!1,c.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>o&&e()));return c.add(e),()=>{t(),c.delete(e)}},dispatch(e){try{return o=!e?.meta?.RTK_autoBatch,i=!o,i&&(a||(a=!0,s(u))),n.dispatch(e)}finally{o=!0}}})})("object"==typeof r?r:void 0)),n})(g);return i(h,p,m(..."function"==typeof d?d(v):v()))}({reducer:{chat:Oe.reducer}});function je(){return Pe.apply(this,arguments)}function Pe(){return(Pe=_e(we().mark((function e(){var t,r;return we().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Network response was not ok");case 6:return e.next=8,t.json();case 8:return r=e.sent,e.abrupt("return",Object.values(r).map((function(e){return ge(ge({},e),{},{date:e.date})})));case 12:e.prev=12,e.t0=e.catch(0),console.error("Error fetching messages:",e.t0),Se.dispatch(Oe.actions.setError(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function xe(e){return ke.apply(this,arguments)}function ke(){return ke=_e(we().mark((function e(t){var r,n=arguments;return we().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:(new Date).toISOString(),e.prev=1,e.next=4,fetch("https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json",{method:"POST",body:JSON.stringify(ge(ge({},t),{},{date:r})),headers:{"Content-Type":"application/json"}});case 4:if(e.sent.ok){e.next=7;break}throw new Error("Failed to send message");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Error sending message:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),ke.apply(this,arguments)}function Ce(e){var t=document.getElementById("messages");t.innerHTML="",e.forEach((function(e){var r=new Date(e.date).toLocaleString(),n=document.createElement("div");n.classList.add("message"),n.innerHTML='\n<span class="nickname">'.concat(e.nickname,":</span>\n<span>").concat(e.message,'</span>\n<span class="date">').concat(r,"</span>\n"),t.appendChild(n)})),t.scrollTop=t.scrollHeight}function Ne(){return(Ne=_e(we().mark((function e(){var t;return we().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:Se.dispatch(Oe.actions.setMessages(t)),Ce(t),Le((function(e){Se.dispatch(Oe.actions.addMessage(e)),Ce(Se.getState().chat.messages)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Le(e){new EventSource("https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json").addEventListener("put",(function(t){var r=JSON.parse(t.data);e(r.data)}))}null===(pe=document.getElementById("send-button"))||void 0===pe||pe.addEventListener("click",_e(we().mark((function e(){var t,r,n,o;return we().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("message-input"),r=document.getElementById("nickname-input"),n=t.value,o=r.value||"Anonymous",""!==n.trim()){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,xe({message:n,nickname:o,date:""});case 8:t.value="";case 9:case"end":return e.stop()}}),e)})))),document.getElementById("search-input").addEventListener("input",(function(){var e=document.getElementById("search-input").value;Se.dispatch(Oe.actions.searchMessage(e)),Ce(Se.getState().chat.messages)})),function(){Ne.apply(this,arguments)}()})();