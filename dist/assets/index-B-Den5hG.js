var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=ee,D=function(){te.postMessage(null)}}else D=function(){_(ee,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),O=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case O:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(wt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=gn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Ut(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};gn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),kt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function M(e,t,n,r){return ci(e,t,n,r),di(e)}function li(e,t){return ci(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case O:return e=mi(31,n,t,a),e.elementType=O,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=mi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-We(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else t===27?(t=N,Zd(e.type)?(e=lf,lf=null,N=e):N=t):N=zi?cf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=ue(null),F=null,Zi=null;function Qi(e,t,n){j(Xi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Xi.current,de(Xi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){F=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(F,e)}function oa(e,t){return F===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,I={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new ca,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=k.S;k.S=function(e,t){X=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=ue(null);function Sa(){var e=xa.current;return e===null?G.pooledCache:e}function Ca(e,t){t===null?j(xa,xa.current):j(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:I._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case D:return t=ja(t),f(e,t,n)}if(oe(t)||re(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,oa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=ja(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,oa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=ja(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,oa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=ja(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,oa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return ci(e,r,t,n),di(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=ue(null),no=ue(0);function ro(e,t){e=Gl,j(no,e),j(to,t),Gl=e|t.baseLanes}function io(){j(no,Gl),j(to,to.current)}function ao(){Gl=no.current,de(to),de(no)}var oo=ue(null),so=null;function co(e){var t=e.alternate;j(mo,mo.current&1),j(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){j(mo,mo.current),j(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(j(mo,mo.current),j(oo,e),so===null&&(so=e)):fo(e)}function fo(){j(mo,mo.current),j(oo,oo.current)}function po(e){de(oo),so===e&&(so=null),de(mo)}var mo=ue(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,z=null,_o=!1,vo=!1,yo=!1,bo=0,xo=0,So=null,Co=0;function B(){throw Error(i(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function To(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Hs:Us,yo=!1,a=n(r,i),yo=!1,vo&&(a=Do(t,n,r,i)),Eo(e),a}function Eo(e){k.H=Vs;var t=R!==null&&R.next!==null;if(go=0,z=R=L=null,_o=!1,xo=0,So=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&ra(e)&&(V=!0))}function Do(e,t,n,r){L=e;var a=0;do{if(vo&&(So=null),xo=0,vo=!1,25<=a)throw Error(i(301));if(a+=1,z=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Ws,o=t(n,r)}while(vo);return o}function Oo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function ko(){var e=bo!==0;return bo=0,e}function Ao(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jo(e){if(_o){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_o=!1}go=0,z=R=L=null,vo=!1,xo=bo=0,So=null}function Mo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z===null?L.memoizedState=z=e:z=z.next=e,z}function No(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=z===null?L.memoizedState:z.next;if(t!==null)z=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},z===null?L.memoizedState=z=e:z=z.next=e}return z}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=xo;return xo+=1,So===null&&(So=[]),e=Aa(So,e,t),t=L,(z===null?t.memoizedState:z.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===C)return aa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(No(),R,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((go&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Kl|=p;f=u.action,yo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=No(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=L,a=No(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((R||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||z!==null&&z.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||go&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Po(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=li(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=Mo();if(typeof e==`function`){var n=e;if(e=n(),yo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,R,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(P){var n=G.formState;if(n!==null){a:{var r=L;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=cf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=Mo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,L,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,L,!1,r.queue),r=Mo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(No(),R,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Ta?Da:e}else r=t;t=No();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=No(),n=R;if(n!==null)return as(t,n,e);No(),t=t.memoizedState,n=No();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Po(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return No().memoizedState}function us(e,t,n,r){var i=Mo();L.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=No();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&wo(r,R.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(L.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Po(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=No().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=No();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&wo(t,r[1]))return r[0];if(r=e(),yo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||go&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),L.lanes|=e,Kl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:to.current===null?!(go&42)||go&1073741824&&!(q&261930)?(V=!0,e.memoizedState=n):(e=mu(),L.lanes|=e,Kl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Ls(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,ya(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,se,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return aa(Qf)}function js(){return No().memoizedState}function Ms(){return No().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=M(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),G===null&&si(),!1}catch{}if(n=M(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=M(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===L||t!==null&&t===L}function zs(e,t){vo=_o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Vs={readContext:aa,use:Io,useCallback:B,useContext:B,useEffect:B,useImperativeHandle:B,useLayoutEffect:B,useInsertionEffect:B,useMemo:B,useReducer:B,useRef:B,useState:B,useDebugValue:B,useDeferredValue:B,useTransition:B,useSyncExternalStore:B,useId:B,useHostTransitionStatus:B,useFormState:B,useActionState:B,useOptimistic:B,useMemoCache:B,useCacheRefresh:B};Vs.useEffectEvent=B;var Hs={readContext:aa,use:Io,useCallback:function(e,t){return Mo().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=Mo();t=t===void 0?null:t;var r=e();if(yo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mo();if(n!==void 0){var i=n(t);if(yo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=Mo();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Mo(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,L,e.queue,!0,!1),Mo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=Mo();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=Mo(),t=G.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=Mo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return Mo().memoizedState=Ns.bind(null,L)},useEffectEvent:function(e){var t=Mo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:aa,use:Io,useCallback:xs,useContext:aa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(No(),R.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(No(),R,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:aa,use:Io,useCallback:xs,useContext:aa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=No();return R===null?Cs(n,e,t):ws(n,R.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=No().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=No();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,R,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ka(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(P)return t=oo.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=tc(e.stateNode,r,a),Ya(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=To(e,t,n,o,a,i),s=ko(),e!==null&&!V?(Ao(e,t,i),jc(e,t,i)):(P&&s&&Ii(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),fo(t)):(Ca(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:I._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Va(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(lo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||na(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=G,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,N=cf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=pc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return ia(t),n=To(e,t,n,r,void 0,i),r=ko(),e!==null&&!V?(Ao(e,t,i),jc(e,t,i)):(P&&r&&Ii(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=Do(t,r,n,i),Eo(e),r=ko(),e!==null&&!V?(Ao(e,t,a),jc(e,t,a)):(P&&r&&Ii(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ua||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ua||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return qi(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:wa()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(mo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(P){if(a?co(t):fo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(co(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||na(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=G,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=cf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=wa():(l=I._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Va(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,j(mo,o),oc(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ra(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Qi(t,I,e.memoizedState.cache),qi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(mo,mo.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:Qi(t,I,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,I,r),r!==o.cache&&ta(t,[I],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=cf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&P&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),zi=t,Vi=!0,a=N,Zd(t.type)?(lf=a,N=cf(r.firstChild)):N=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=tf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=cf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=To(e,t,Oo,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=nf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return wc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(I),e===null?(a=Sa(),a===null&&(a=G,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Qi(t,I,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,I,r),r!==a.cache&&ta(t,[I],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,I,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,Ea}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ma=Oa,Ea}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Xl|=t)}function zc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(I),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=fe.current,Ki(t)?Wi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=fe.current,Ki(t))Wi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ui(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return $i(t.type),H(t),null;case 19:if(de(mo),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return j(mo,mo.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return H(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=mo.current,j(mo,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(I),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(I),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(mo),null;case 4:return _e(),null;case 10:return $i(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&de(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(I),null;case 25:return null;default:return null}}function Hc(e,t){switch(Li(t),t.tag){case 3:$i(I),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:de(mo);break;case 10:$i(t.type);break;case 22:case 23:po(t),ao(),e!==null&&de(xa);break;case 24:$i(I)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,rl=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Uc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||rl,i=nl;var a=rl;nl=r,(rl=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),nl=i,rl=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:rl||Jc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rl||Jc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:rl||Jc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),rl||Wc(4,n,t),dl(e,t,n);break;case 1:rl||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:rl=(r=rl)||n.memoizedState!==null,dl(e,t,n),rl=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(rl||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=rl;if(nl=u||a,rl=d||l,_l(t,e),rl=d,nl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||rl||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Cl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Uc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),qc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Uc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=aa(I),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(I).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,X=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:k.T===null?ut():dd()}function mu(){if(Yl===0)if(!(q&536870912)||P){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Yl=e}else Yl=536870912;return e=oo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),rt(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Me(),10<a)){if(yu(r,t,Yl,!Hl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,nu,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,nu,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Nl(t,a,d);var m=(a&62914560)===a?eu-Me():(a&4194048)===a?X-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,Zi=F=null,jo(e),Fa=null,Ia=0,e=K;for(;e!==null;)Hc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=gi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=$e(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,si(),n}function Cu(e,t){L=null,k.H=Vs,t===Ta||t===Da?(t=Na(),J=3):t===Ea?(t=Na(),J=4):J=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,$s(e,wi(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(q&4194048)===q?so===null:(q&62914560)===q||q&536870912?e===so:!1}function Tu(){var e=k.H;return k.H=Vs,e===null?Vs:e}function Eu(){var e=k.A;return k.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&oo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(nu=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=F=null,W=r,k.H=i,k.A=a,K===null&&(G=null,q=0,si()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(nu=null,tu=Me()+500,Su(e,t)):Ul=$e(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:ka(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Zi=F=null,k.H=r,k.A=a,W=n,K===null?(G=null,q=0,si(),Y):0}function ju(){for(;K!==null&&!Ae();)Mu(K)}function Mu(e){var t=Pc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:jo(t);default:Hc(n,t),t=K=_i(t,Gl),t=Pc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){Zi=F=null,jo(t),Fa=null,Ia=0;var i=t.return;try{if(ic(e,i,t,n,q)){Y=1,$s(e,wi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,$s(e,wi(n,e.current)),K=null;return}t.flags&32768?(P||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Bc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,it(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,A.p=a,k.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,A.p=r,k.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,A.p=r,k.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=tc(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=wi(n,e),n=nc(2),r=qa(t,n,2),r!==null&&(rc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Me()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=li(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=Qe(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=Qe(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case qr:case Jr:case Yr:l=Rn;break;case $r:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c))if(vr)v=Dr;else{v=Tr;var y=wr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=li(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function w(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return O(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:te(t)}return re(t,n,null,e)}function T(e,t){if(e===!1||e==null)throw Error(t)}function E(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ee(){return Math.random().toString(36).substring(2,10)}function D(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function O(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ne(t):t,state:n,key:t&&t.key||r||ee(),unstable_mask:i}}function te({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ne(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function re(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:O(h.location,e,t);n&&n(r,e),l=u()+1;let d=D(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:O(h.location,e,t);n&&n(r,e),l=u();let i=D(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ie(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ie(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),T(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:te(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ae(e,t,n=`/`){return oe(e,t,n,!1)}function oe(e,t,n,r){let i=xe((typeof t==`string`?ne(t):t).pathname||`/`,n);if(i==null)return null;let a=A(e);ce(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=be(i);o=_e(a[e],t,r)}return o}function k(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function A(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;T(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=ke([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(T(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),A(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:he(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of se(e.path))a(e,t,!0,n)}),t}function se(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=se(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function ce(e){e.sort((e,t)=>e.score===t.score?ge(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var le=/^:[\w-]+$/,ue=3,de=2,j=1,fe=10,pe=-2,me=e=>e===`*`;function he(e,t){let n=e.split(`/`),r=n.length;return n.some(me)&&(r+=pe),t&&(r+=de),n.filter(e=>!me(e)).reduce((e,t)=>e+(le.test(t)?ue:t===``?j:fe),r)}function ge(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function _e(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=ve({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=ve({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:ke([a,u.pathname]),pathnameBase:Ae(ke([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=ke([a,u.pathnameBase]))}return o}function ve(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ye(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function ye(e,t=!1,n=!0){E(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function be(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function xe(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Se=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ce(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ne(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?we(n.substring(1),`/`):we(n,t)):a=t,{pathname:a,search:je(r),hash:Me(i)}}function we(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Te(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ee(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function De(e){let t=Ee(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Oe(e,t,n,r=!1){let i;typeof e==`string`?i=ne(e):(i={...e},T(!i.pathname||!i.pathname.includes(`?`),Te(`?`,`pathname`,`search`,i)),T(!i.pathname||!i.pathname.includes(`#`),Te(`#`,`pathname`,`hash`,i)),T(!i.search||!i.search.includes(`#`),Te(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ce(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ke=e=>e.join(`/`).replace(/\/\/+/g,`/`),Ae=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),je=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Me=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ne=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Pe(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Fe(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var Ie=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Le(e,t){let n=e;if(typeof n!=`string`||!Se.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ie)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=xe(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{E(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Re=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Re);var ze=[`GET`,...Re];new Set(ze);var Be=x.createContext(null);Be.displayName=`DataRouter`;var Ve=x.createContext(null);Ve.displayName=`DataRouterState`;var He=x.createContext(!1);function Ue(){return x.useContext(He)}var We=x.createContext({isTransitioning:!1});We.displayName=`ViewTransition`;var Ge=x.createContext(new Map);Ge.displayName=`Fetchers`;var Ke=x.createContext(null);Ke.displayName=`Await`;var qe=x.createContext(null);qe.displayName=`Navigation`;var Je=x.createContext(null);Je.displayName=`Location`;var Ye=x.createContext({outlet:null,matches:[],isDataRoute:!1});Ye.displayName=`Route`;var Xe=x.createContext(null);Xe.displayName=`RouteError`;var Ze=`REACT_ROUTER_ERROR`,Qe=`REDIRECT`,$e=`ROUTE_ERROR_RESPONSE`;function et(e){if(e.startsWith(`${Ze}:${Qe}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function tt(e){if(e.startsWith(`${Ze}:${$e}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ne(t.status,t.statusText,t.data)}catch{}}function nt(e,{relative:t}={}){T(rt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext(qe),{hash:i,pathname:a,search:o}=lt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:ke([n,a])),r.createHref({pathname:s,search:o,hash:i})}function rt(){return x.useContext(Je)!=null}function it(){return T(rt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(Je).location}var at=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ot(e){x.useContext(qe).static||x.useLayoutEffect(e)}function st(){let{isDataRoute:e}=x.useContext(Ye);return e?Ot():ct()}function ct(){T(rt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Be),{basename:t,navigator:n}=x.useContext(qe),{matches:r}=x.useContext(Ye),{pathname:i}=it(),a=JSON.stringify(De(r)),o=x.useRef(!1);return ot(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(E(o.current,at),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Oe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:ke([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}x.createContext(null);function lt(e,{relative:t}={}){let{matches:n}=x.useContext(Ye),{pathname:r}=it(),i=JSON.stringify(De(n));return x.useMemo(()=>Oe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ut(e,t){return dt(e,t)}function dt(e,t,n){T(rt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext(qe),{matches:i}=x.useContext(Ye),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;At(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=it(),d;if(t){let e=typeof t==`string`?ne(t):t;T(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=ae(e,{pathname:p});E(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),E(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=vt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:ke([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:ke([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(Je.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function ft(){let e=Dt(),t=Pe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var pt=x.createElement(ft,null),mt=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=tt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(Ye.Provider,{value:this.props.routeContext},x.createElement(Xe.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(gt,{error:e},t):t}};mt.contextType=He;var ht=new WeakMap;function gt({children:e,error:t}){let{basename:n}=x.useContext(qe);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=et(t.digest);if(e){let r=ht.get(t);if(r)throw r;let i=Le(e.location,n);if(Ie&&!ht.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw ht.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function _t({routeContext:e,match:t,children:n}){let r=x.useContext(Be);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Ye.Provider,{value:e},n)}function vt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);T(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Fe(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||pt,o&&(s<0&&c===0?(At(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(_t,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(mt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function yt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bt(e){let t=x.useContext(Be);return T(t,yt(e)),t}function xt(e){let t=x.useContext(Ve);return T(t,yt(e)),t}function St(e){let t=x.useContext(Ye);return T(t,yt(e)),t}function Ct(e){let t=St(e),n=t.matches[t.matches.length-1];return T(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function wt(){return Ct(`useRouteId`)}function Tt(){return xt(`useNavigation`).navigation}function Et(){let{matches:e,loaderData:t}=xt(`useMatches`);return x.useMemo(()=>e.map(e=>k(e,t)),[e,t])}function Dt(){let e=x.useContext(Xe),t=xt(`useRouteError`),n=Ct(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Ot(){let{router:e}=bt(`useNavigate`),t=Ct(`useNavigate`),n=x.useRef(!1);return ot(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{E(n.current,at),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var kt={};function At(e,t,n){!t&&!kt[e]&&(kt[e]=!0,E(!1,n))}x.useOptimistic,x.memo(jt);function jt({routes:e,future:t,state:n,isStatic:r,onError:i}){return dt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Mt(e){T(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Nt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){T(!rt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ne(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=x.useMemo(()=>{let e=xe(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return E(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement(qe.Provider,{value:c},x.createElement(Je.Provider,{children:t,value:h}))}function Pt({children:e,location:t}){return ut(Ft(e),t)}x.Component;function Ft(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Ft(e.props.children,i));return}T(e.type===Mt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),T(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ft(e.props.children,i)),n.push(a)}),n}var It=`get`,Lt=`application/x-www-form-urlencoded`;function Rt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function zt(e){return Rt(e)&&e.tagName.toLowerCase()===`button`}function Bt(e){return Rt(e)&&e.tagName.toLowerCase()===`form`}function Vt(e){return Rt(e)&&e.tagName.toLowerCase()===`input`}function Ht(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ut(e,t){return e.button===0&&(!t||t===`_self`)&&!Ht(e)}function Wt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Gt(e,t){let n=Wt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Kt=null;function qt(){if(Kt===null)try{new FormData(document.createElement(`form`),0),Kt=!1}catch{Kt=!0}return Kt}var Jt=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Yt(e){return e!=null&&!Jt.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lt}"`),null):e}function Xt(e,t){let n,r,i,a,o;if(Bt(e)){let o=e.getAttribute(`action`);r=o?xe(o,t):null,n=e.getAttribute(`method`)||It,i=Yt(e.getAttribute(`enctype`))||Lt,a=new FormData(e)}else if(zt(e)||Vt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?xe(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||It,i=Yt(e.getAttribute(`formenctype`))||Yt(o.getAttribute(`enctype`))||Lt,a=new FormData(o,e),!qt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Rt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=It,r=null,i=Lt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Zt={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Qt=/[&><\u2028\u2029]/g;function $t(e){return e.replace(Qt,e=>Zt[e])}function en(e,t){if(e===!1||e==null)throw Error(t)}function tn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&xe(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function nn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rn(e){return e!=null&&typeof e.page==`string`}function an(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function on(e,t,n){return dn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await nn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(an).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function sn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function cn(e,t,{includeHydrateFallback:n}={}){return ln(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function ln(e){return[...new Set(e)]}function un(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function dn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!rn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(un(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function fn(){let e=x.useContext(Be);return en(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function pn(){let e=x.useContext(Ve);return en(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var mn=x.createContext(void 0);mn.displayName=`FrameworkContext`;function hn(){let e=x.useContext(mn);return en(e,`You must render this element inside a <HydratedRouter> element`),e}function gn(e,t){let n=x.useContext(mn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:_n(s,p),onBlur:_n(c,m),onMouseEnter:_n(l,p),onMouseLeave:_n(u,m),onTouchStart:_n(d,p)}]:[a,f,{}]:[!1,f,{}]}function _n(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function vn({page:e,...t}){let n=Ue(),{router:r}=fn(),i=x.useMemo(()=>ae(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(bn,{page:e,matches:i,...t}):x.createElement(xn,{page:e,matches:i,...t}):null}function yn(e){let{manifest:t,routeModules:n}=hn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return on(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function bn({page:e,matches:t,...n}){let r=it(),{future:i}=hn(),{basename:a}=fn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=tn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function xn({page:e,matches:t,...n}){let r=it(),{future:i,manifest:a,routeModules:o}=hn(),{basename:s}=fn(),{loaderData:c,matches:l}=pn(),u=x.useMemo(()=>sn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>sn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=tn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>cn(d,a),[d,a]),m=yn(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Sn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Cn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Cn&&(window.__reactRouterVersion=`7.14.0`)}catch{}function wn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=x.useRef();i.current??=w({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Nt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function Tn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Nt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Tn.displayName=`unstable_HistoryRouter`;var En=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dn=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=x.useContext(qe),v=typeof l==`string`&&En.test(l),y=Le(l,h);l=y.to;let b=nt(l,{relative:r}),S=it(),C=null;if(o){let e=Oe(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:ke([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=gn(n,p),ee=Pn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function D(t){e&&e(t),t.defaultPrevented||ee(t)}let O=!(y.isExternal||i),te=x.createElement(`a`,{...p,...E,href:(O?C:void 0)||y.absoluteURL||b,onClick:O?D:e,ref:Sn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?x.createElement(x.Fragment,null,te,x.createElement(vn,{page:b})):te});Dn.displayName=`Link`;var On=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=lt(a,{relative:c.relative}),d=it(),f=x.useContext(Ve),{navigator:p,basename:m}=x.useContext(qe),h=f!=null&&Gn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=xe(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:b,isPending:S,isTransitioning:h},w=b?e:void 0,T;T=typeof n==`function`?n(C):[n,b?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return x.createElement(Dn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});On.displayName=`NavLink`;var kn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=It,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=x.useContext(qe),g=Rn(),_=zn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&En.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});kn.displayName=`Form`;function An({getKey:e,storageKey:t,...n}){let r=x.useContext(mn),{basename:i}=x.useContext(qe),a=it(),o=Et();Un({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Hn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${$t(JSON.stringify(t||Bn))}, ${$t(JSON.stringify(s))})`}})}An.displayName=`ScrollRestoration`;function jn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mn(e){let t=x.useContext(Be);return T(t,jn(e)),t}function Nn(e){let t=x.useContext(Ve);return T(t,jn(e)),t}function Pn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=st(),d=it(),f=lt(e,{relative:o});return x.useCallback(p=>{if(Ut(p,t)){p.preventDefault();let t=n===void 0?te(d)===te(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function Fn(e){E(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=x.useRef(Wt(e)),n=x.useRef(!1),r=it(),i=x.useMemo(()=>Gt(r.search,n.current?null:t.current),[r.search]),a=st();return[i,x.useCallback((e,t)=>{let r=Wt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var In=0,Ln=()=>`__${String(++In)}__`;function Rn(){let{router:e}=Mn(`useSubmit`),{basename:t}=x.useContext(qe),n=wt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Xt(e,t);a.navigate===!1?await r(a.fetcherKey||Ln(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function zn(e,{relative:t}={}){let{basename:n}=x.useContext(qe),r=x.useContext(Ye);T(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...lt(e||`.`,{relative:t})},o=it();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:ke([n,a.pathname])),te(a)}var Bn=`react-router-scroll-positions`,Vn={};function Hn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:xe(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Un({getKey:e,storageKey:t}={}){let{router:n}=Mn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Nn(`useScrollRestoration`),{basename:a}=x.useContext(qe),o=it(),s=Et(),c=Tt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Wn(x.useCallback(()=>{if(c.state===`idle`){let t=Hn(o,s,a,e);Vn[t]=window.scrollY}try{sessionStorage.setItem(t||Bn,JSON.stringify(Vn))}catch(e){E(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Bn);e&&(Vn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Vn,()=>window.scrollY,e?(t,n)=>Hn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{E(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Wn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Gn(e,{relative:t}={}){let n=x.useContext(We);T(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mn(`useViewTransitionState`),i=lt(e,{relative:t});if(!n.isTransitioning)return!1;let a=xe(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=xe(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ve(i.pathname,o)!=null||ve(i.pathname,a)!=null}var Kn=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useSyncExternalStore,a=t.useRef,o=t.useEffect,s=t.useMemo,c=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,l,u){var d=a(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s(function(){function e(e){if(!i){if(i=!0,a=e,e=l(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return o=t}return o=e}if(t=o,r(a,e))return t;var n=l(e);return u!==void 0&&u(t,n)?(a=e,t):(a=e,o=n)}var i=!1,a,o,s=n===void 0?null:n;return[function(){return e(t())},s===null?void 0:function(){return e(s())}]},[t,n,l,u]);var p=i(e,d[0],d[1]);return o(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}})),qn=o(((e,t)=>{t.exports=Kn()})),Jn=g(),Yn=qn();function Xn(e){e()}function Zn(){let e=null,t=null;return{clear(){e=null,t=null},notify(){Xn(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Qn={notify(){},get:()=>[]};function $n(e,t){let n,r=Qn,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=Zn())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Qn)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var er=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,tr=typeof navigator<`u`&&navigator.product===`ReactNative`,nr=er||tr?x.useLayoutEffect:x.useEffect;function rr(e,t){return e===t?e!==0||t!==0||1/e==1/t:e!==e&&t!==t}function ir(e,t){if(rr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!rr(e[n[r]],t[n[r]]))return!1;return!0}var ar=Symbol.for(`react-redux-context`),or=typeof globalThis<`u`?globalThis:{};function sr(){if(!x.createContext)return{};let e=or[ar]??=new Map,t=e.get(x.createContext);return t||(t=x.createContext(null),e.set(x.createContext,t)),t}var cr=sr();function lr(e){let{children:t,context:n,serverState:r,store:i}=e,a=x.useMemo(()=>({store:i,subscription:$n(i),getServerState:r?()=>r:void 0}),[i,r]),o=x.useMemo(()=>i.getState(),[i]);nr(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||cr;return x.createElement(s.Provider,{value:a},t)}var ur=lr;function dr(e=cr){return function(){return x.useContext(e)}}var fr=dr();function pr(e=cr){let t=e===cr?fr:dr(e),n=()=>{let{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var mr=pr();function hr(e=cr){let t=e===cr?mr:pr(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var gr=hr(),_r=(e,t)=>e===t;function vr(e=cr){let t=e===cr?fr:dr(e),n=(e,n={})=>{let{equalityFn:r=_r}=typeof n==`function`?{equalityFn:n}:n,{store:i,subscription:a,getServerState:o}=t();x.useRef(!0);let s=x.useCallback({[e.name](t){return e(t)}}[e.name],[e]),c=(0,Yn.useSyncExternalStoreWithSelector)(a.addNestedSub,i.getState,o||i.getState,s,r);return x.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var yr=vr(),br=Xn;function xr(e){return xr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},xr(e)}function Sr(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Cr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wr(e,t,n){return t&&Cr(e.prototype,t),n&&Cr(e,n),e}function Tr(e,t){return t&&(xr(t)===`object`||typeof t==`function`)?t:Dr(e)}function Er(e){return Er=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Er(e)}function Dr(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Or(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&kr(e,t)}function kr(e,t){return kr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},kr(e,t)}function Ar(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var jr=function(e){Or(t,e);function t(){var e,n;Sr(this,t);var r=[...arguments];return n=Tr(this,(e=Er(t)).call.apply(e,[this].concat(r))),Ar(Dr(n),`state`,{bootstrapped:!1}),Ar(Dr(n),`_unsubscribe`,void 0),Ar(Dr(n),`handlePersistorState`,function(){n.props.persistor.getState().bootstrapped&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally(function(){return n.setState({bootstrapped:!0})}):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())}),n}return wr(t,[{key:`componentDidMount`,value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:`componentWillUnmount`,value:function(){this._unsubscribe&&this._unsubscribe()}},{key:`render`,value:function(){return typeof this.props.children==`function`?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(x.PureComponent);Ar(jr,`defaultProps`,{children:null,loading:null});function Mr(e){"@babel/helpers - typeof";return Mr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Mr(e)}function Nr(e,t){if(Mr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Mr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Pr(e){var t=Nr(e,`string`);return Mr(t)==`symbol`?t:t+``}function Fr(e,t,n){return(t=Pr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ir(e){if(Array.isArray(e))return e}function Lr(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Rr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function zr(e,t){if(e){if(typeof e==`string`)return Rr(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Rr(e,t):void 0}}function Br(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vr(e,t){return Ir(e)||Lr(e,t)||zr(e,t)||Br()}function Hr(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Ur(e,t){if(e==null)return{};var n,r,i=Hr(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Wr(e){function t(t,i,a,o){var s=i?n+t+e.e+i:n+t,c=s;if(a){var l=` `+c+e.m;for(var u in a)if(a.hasOwnProperty(u)){var d=a[u];!0===d?c+=l+u:d&&(c+=l+u+r+d)}}if(o!==void 0)for(var f=0,p=(o=Array.isArray(o)?o:[o]).length;f<p;f++){var m=o[f];if(m&&typeof m.valueOf()==`string`)for(var h=m.valueOf().split(` `),g=0;g<h.length;g++){var _=h[g];_!==s&&(c+=` `+_)}}return c}var n=e.n||``,r=e.v||e.m;return function(e,n){return function(r,i,a){return typeof r==`string`?typeof i==`string`||Array.isArray(i)?t(e,r,void 0,i):t(e,r,i,a):t(e,n,r,i)}}}Wr({e:`-`,m:`_`});function Gr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Kr(e){for(var t,n=1;n<arguments.length;n++)t=arguments[n]==null?{}:arguments[n],n%2?Gr(Object(t),!0).forEach(function(n){Fr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Gr(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}var qr={e:`-`,m:`_`,v:`_`},Jr=Wr(qr),Yr=function(e){return Wr(Kr({n:`${e}--`},qr))};Yr(`canary`),Yr(`deprecated`);var Xr={color:{primary:`gpnDefault`,accent:`gpnDark`,invert:`gpnDark`},control:`gpnDefault`,font:`gpnDefault`,size:`gpnDefault`,space:`gpnDefault`,shadow:`gpnDefault`},Zr=[`className`,`children`,`preset`];function Qr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $r(e){for(var t,n=1;n<arguments.length;n++)t=arguments[n]==null?{}:arguments[n],n%2?Qr(Object(t),!0).forEach(function(n){Fr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Qr(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}var ei=Jr(`Theme`),ti=function(e){return{color:{primary:ei({color:e.color.primary}),accent:ei({color:e.color.accent}),invert:ei({color:e.color.invert})},control:ei({control:e.control}),font:ei({font:e.font}),size:ei({size:e.size}),space:ei({space:e.space}),shadow:ei({shadow:e.shadow})}},ni=function(e){var t=``;return Object.keys(e).map(function(n){t+=n===`color`?e.color.accent+e.color.invert+e.color.primary:e[n]}),t},ri={theme:Xr,themeClassNames:ti(Xr)},ii=(0,x.createContext)(ri),ai=x.forwardRef(function(e,t){var n=e.className,r=e.children,i=e.preset,a=Ur(e,Zr),o=Vr((0,x.useMemo)(function(){return[{theme:i,themeClassNames:ti(i)},$r($r({},i),{},{color:i.color.primary})]},[ni(i)]),2),s=o[0],c=o[1];return x.createElement(ii.Provider,{value:s},x.createElement(`div`,Object.assign({},a,{ref:t,className:ei(c,[n])}),r))});function oi(){return(0,x.useContext)(ii)}var si={root:`_root_1rcn4_1`,navigation:`_navigation_1rcn4_22`,content:`_content_1rcn4_33`},ci=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),M=o(((e,t)=>{t.exports=ci()}))(),li=({content:e,navigation:t})=>(0,M.jsxs)(`div`,{className:si.root,children:[(0,M.jsx)(`aside`,{className:si.navigation,children:t}),(0,M.jsx)(`main`,{className:si.content,children:e})]});function ui(e,t){typeof e==`function`?e(t):e&&`current`in e&&(e.current=t)}function di(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=fi(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0},f:function e(){try{a||n.return==null||n.return()}finally{if(o)throw e}}}}function fi(e,t){if(e){if(typeof e==`string`)return pi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pi(e,t):void 0}}function pi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var mi=function(e){return e.length?function(t){var n,r=di(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;ui(i,t)}}catch(e){r.e(e)}finally{r.f()}}:null},hi=function(e){return(0,x.useMemo)(function(){return mi(e)},e)};function gi(e){if(Array.isArray(e))return Rr(e)}function _i(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function vi(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yi(e){return gi(e)||_i(e)||zr(e)||vi()}var bi=Jr(`MixSpace`),xi=function(e){if(!e)return``;var t=e.p,n=e.m,r=e.pV,i=e.pH,a=e.mV,o=e.mH,s=e.mT,c=e.mL,l=e.mR,u=e.mB,d=e.pT,f=e.pL,p=e.pR,m=e.pB;return bi({pT:d||r||t,pL:f||i||t,pR:p||i||t,pB:m||r||t,mT:s||a||n,mL:c||o||n,mR:l||o||n,mB:u||a||n})},Si=[`verticalSpace`,`horizontalSpace`];function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function wi(e){for(var t,n=1;n<arguments.length;n++)t=arguments[n]==null?{}:arguments[n],n%2?Ci(Object(t),!0).forEach(function(n){Fr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ci(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}var Ti=Jr(`MixCard`),Ei=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],n=e.verticalSpace,r=e.horizontalSpace;return Ti(wi({},Ur(e,Si)),[xi({pV:n,pH:r})].concat(yi(t)))};function Di(e){return x.forwardRef(e)}var Oi=x.createContext(void 0),ki=function(e,t,n){var r=x.useContext(Oi);if(!r)return t;var i=r.eventHandler,a=r.map[e];return a?a(t,i,n):t},Ai=[`verticalSpace`,`horizontalSpace`,`status`,`form`,`shadow`,`children`,`tabIndex`,`border`,`className`,`as`],ji=`round`,Mi=`Card`,Ni=Jr(`Card`),Pi=Di(function(e,t){var n=(0,x.useRef)(null),r=ki(Mi,e,n),i=r.verticalSpace,a=r.horizontalSpace,o=r.status,s=r.form,c=s===void 0?ji:s,l=r.shadow,u=r.children,d=r.tabIndex,f=r.border,p=r.className,m=r.as,h=m===void 0?`div`:m,g=Ur(r,Ai);return x.createElement(h,Object.assign({tabIndex:d,ref:hi([n,t]),className:Ni(null,[Ei({verticalSpace:i,horizontalSpace:a,shadow:l===void 0||l,form:c,status:o,border:f}),p])},g),u)}),Fi=[`className`,`size`,`type`,`view`],Ii=Jr(`Loader`),Li=x.forwardRef(function(e,t){var n=e.className,r=e.size,i=r===void 0?`m`:r,a=e.type,o=a===void 0?`dots`:a,s=e.view,c=s===void 0?`primary`:s,l=Ur(e,Fi);return x.createElement(`div`,Object.assign({},l,{ref:t,className:Ii({size:i,view:c,type:o},[n])}),o===`dots`&&x.createElement(`div`,{className:Ii(`Dot`)}))}),Ri=[`as`,`align`,`cursor`,`decoration`,`display`,`font`,`lineHeight`,`size`,`spacing`,`fontStyle`,`transform`,`view`,`weight`,`width`,`className`,`children`,`truncate`],zi=Jr(`Text`),N=Di(function(e,t){var n=e.as,r=n===void 0?`div`:n,i=e.align,a=e.cursor,o=e.decoration,s=e.display,c=e.font,l=e.lineHeight,u=e.size,d=e.spacing,f=e.fontStyle,p=e.transform,m=e.view,h=e.weight,g=e.width,_=e.className,v=e.children,y=e.truncate,b=Ur(e,Ri);return x.createElement(r,Object.assign({},b,{className:zi({align:i,cursor:a,decoration:o,display:s,font:c,lineHeight:l,size:u,spacing:d,fontStyle:f,transform:p,view:m,weight:h,width:g,truncate:y},[_]),ref:t}),v)}),P={root:`_root_1txip_1`},Bi=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`),Vi=e=>{let t=Bi(e);return t=t.replace(/`([^`]+)`/g,(e,t)=>`<code>${Bi(t)}</code>`),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(e,t,n)=>`<a href="${Bi(n)}" target="_blank" rel="noreferrer">${Bi(t)}</a>`),t=t.replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`),t=t.replace(/(^|[\s(])\*([^*]+)\*(?=[\s).,!?:;]|$)/g,`$1<em>$2</em>`),t=t.replace(/(^|[\s(])_([^_]+)_(?=[\s).,!?:;]|$)/g,`$1<em>$2</em>`),t},Hi=e=>e.trim().replace(/^\||\|$/g,``).split(`|`).map(e=>e.trim()),Ui=e=>/^-{3,}$/.test(e.trim()),Wi=e=>e.trim().startsWith("```"),Gi=e=>/^\|?(\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?$/.test(e.trim()),Ki=e=>/^(\*|-)\s+/.test(e.trim()),qi=e=>/^\d+\.\s+/.test(e.trim()),Ji=e=>`<p>${Vi(e.join(` `))}</p>`,Yi=e=>{let t=e.replaceAll(`\r
`,`
`).split(`
`),n=[];for(let e=0;e<t.length;){let r=t[e].trim();if(!r){e+=1;continue}if(Wi(r)){let i=r.slice(3).trim().split(/\s+/)[0],a=[];for(e+=1;e<t.length&&!Wi(t[e]);)a.push(t[e]),e+=1;e<t.length&&(e+=1);let o=i?` class="language-${Bi(i)}"`:``;n.push(`<pre><code${o}>${Bi(a.join(`
`))}</code></pre>`);continue}let i=r.match(/^(#{1,6})\s+(.+)$/);if(i){let t=i[1].length;n.push(`<h${t}>${Vi(i[2].trim())}</h${t}>`),e+=1;continue}if(Ui(r)){n.push(`<hr />`),e+=1;continue}if(r.startsWith(`>`)){let r=[];for(;e<t.length&&t[e].trim().startsWith(`>`);)r.push(t[e].trim().replace(/^>\s?/,``)),e+=1;n.push(`<blockquote>${r.map(Vi).join(`<br />`)}</blockquote>`);continue}if(r.includes(`|`)&&e+1<t.length&&Gi(t[e+1])){let i=Hi(r),a=[];for(e+=2;e<t.length&&t[e].trim().includes(`|`);)a.push(Hi(t[e])),e+=1;let o=i.map(e=>`<th>${Vi(e)}</th>`).join(``),s=a.map(e=>`<tr>${e.map(e=>`<td>${Vi(e)}</td>`).join(``)}</tr>`).join(``);n.push(`<table><thead><tr>${o}</tr></thead><tbody>${s}</tbody></table>`);continue}if(Ki(r)||qi(r)){let i=qi(r),a=[];for(;e<t.length&&(i?qi(t[e].trim()):Ki(t[e].trim()));)a.push(t[e].trim().replace(i?/^\d+\.\s+/:/^(\*|-)\s+/,``)),e+=1;let o=i?`ol`:`ul`,s=a.map(e=>`<li>${Vi(e)}</li>`).join(``);n.push(`<${o}>${s}</${o}>`);continue}let a=[];for(;e<t.length&&t[e].trim()&&!Wi(t[e].trim())&&!Ui(t[e].trim())&&!t[e].trim().startsWith(`>`)&&!t[e].trim().match(/^(#{1,6})\s+/)&&!(t[e].trim().includes(`|`)&&e+1<t.length&&Gi(t[e+1]))&&!Ki(t[e].trim())&&!qi(t[e].trim());)a.push(t[e].trim()),e+=1;n.push(Ji(a))}return n.join(``)},Xi=({content:e})=>(0,M.jsx)(`div`,{className:P.root,dangerouslySetInnerHTML:{__html:Yi(e)}});function F(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Zi=typeof Symbol==`function`&&Symbol.observable||`@@observable`,Qi=()=>Math.random().toString(36).substring(7).split(``).join(`.`),$i={INIT:`@@redux/INIT${Qi()}`,REPLACE:`@@redux/REPLACE${Qi()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Qi()}`};function ea(e){if(typeof e!=`object`||!e)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ta(e,t,n){if(typeof e!=`function`)throw Error(F(2));if(typeof t==`function`&&typeof n==`function`||typeof n==`function`&&typeof arguments[3]==`function`)throw Error(F(0));if(typeof t==`function`&&n===void 0&&(n=t,t=void 0),n!==void 0){if(typeof n!=`function`)throw Error(F(1));return n(ta)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,c=!1;function l(){o===a&&(o=new Map,a.forEach((e,t)=>{o.set(t,e)}))}function u(){if(c)throw Error(F(3));return i}function d(e){if(typeof e!=`function`)throw Error(F(4));if(c)throw Error(F(5));let t=!0;l();let n=s++;return o.set(n,e),function(){if(t){if(c)throw Error(F(6));t=!1,l(),o.delete(n),a=null}}}function f(e){if(!ea(e))throw Error(F(7));if(e.type===void 0)throw Error(F(8));if(typeof e.type!=`string`)throw Error(F(17));if(c)throw Error(F(9));try{c=!0,i=r(i,e)}finally{c=!1}return(a=o).forEach(e=>{e()}),e}function p(e){if(typeof e!=`function`)throw Error(F(10));r=e,f({type:$i.REPLACE})}function m(){let e=d;return{subscribe(t){if(typeof t!=`object`||!t)throw Error(F(11));function n(){let e=t;e.next&&e.next(u())}return n(),{unsubscribe:e(n)}},[Zi](){return this}}}return f({type:$i.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[Zi]:m}}function na(e){Object.keys(e).forEach(t=>{let n=e[t];if(n(void 0,{type:$i.INIT})===void 0)throw Error(F(12));if(n(void 0,{type:$i.PROBE_UNKNOWN_ACTION()})===void 0)throw Error(F(13))})}function ra(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof e[i]==`function`&&(n[i]=e[i])}let r=Object.keys(n),i;try{na(n)}catch(e){i=e}return function(e={},t){if(i)throw i;let a=!1,o={};for(let i=0;i<r.length;i++){let s=r[i],c=n[s],l=e[s],u=c(l,t);if(u===void 0)throw t&&t.type,Error(F(14));o[s]=u,a||=u!==l}return a||=r.length!==Object.keys(e).length,a?o:e}}function ia(...e){return e.length===0?e=>e:e.length===1?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function aa(...e){return t=>(n,r)=>{let i=t(n,r),a=()=>{throw Error(F(15))},o={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=ia(...e.map(e=>e(o)))(i.dispatch),{...i,dispatch:a}}}function oa(e){return ea(e)&&`type`in e&&typeof e.type==`string`}var sa=Symbol.for(`immer-nothing`),ca=Symbol.for(`immer-draftable`),la=Symbol.for(`immer-state`);function ua(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var I=Object,da=I.getPrototypeOf,fa=`constructor`,pa=`prototype`,ma=`configurable`,ha=`enumerable`,ga=`writable`,_a=`value`,va=e=>!!e&&!!e[la];function ya(e){return e?Sa(e)||Aa(e)||!!e[ca]||!!e[fa]?.[ca]||ja(e)||Ma(e):!1}var ba=I[pa][fa].toString(),xa=new WeakMap;function Sa(e){if(!e||!Na(e))return!1;let t=da(e);if(t===null||t===I[pa])return!0;let n=I.hasOwnProperty.call(t,fa)&&t[fa];if(n===Object)return!0;if(!Pa(n))return!1;let r=xa.get(n);return r===void 0&&(r=Function.toString.call(n),xa.set(n,r)),r===ba}function Ca(e){return va(e)||ua(15,e),e[la].base_}function wa(e,t,n=!0){Ta(e)===0?(n?Reflect.ownKeys(e):I.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Ta(e){let t=e[la];return t?t.type_:Aa(e)?1:ja(e)?2:Ma(e)?3:0}var Ea=(e,t,n=Ta(e))=>n===2?e.has(t):I[pa].hasOwnProperty.call(e,t),Da=(e,t,n=Ta(e))=>n===2?e.get(t):e[t],Oa=(e,t,n,r=Ta(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function ka(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var Aa=Array.isArray,ja=e=>e instanceof Map,Ma=e=>e instanceof Set,Na=e=>typeof e==`object`,Pa=e=>typeof e==`function`,Fa=e=>typeof e==`boolean`;function Ia(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var La=e=>Na(e)?e?.[la]:null,Ra=e=>e.copy_||e.base_,za=e=>e.modified_?e.copy_:e.base_;function Ba(e,t){if(ja(e))return new Map(e);if(Ma(e))return new Set(e);if(Aa(e))return Array[pa].slice.call(e);let n=Sa(e);if(t===!0||t===`class_only`&&!n){let t=I.getOwnPropertyDescriptors(e);delete t[la];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[ga]===!1&&(a[ga]=!0,a[ma]=!0),(a.get||a.set)&&(t[i]={[ma]:!0,[ga]:!0,[ha]:a[ha],[_a]:e[i]})}return I.create(da(e),t)}else{let t=da(e);if(t!==null&&n)return{...e};let r=I.create(t);return I.assign(r,e)}}function Va(e,t=!1){return Wa(e)||va(e)||!ya(e)?e:(Ta(e)>1&&I.defineProperties(e,{set:Ua,add:Ua,clear:Ua,delete:Ua}),I.freeze(e),t&&wa(e,(e,t)=>{Va(t,!0)},!1),e)}function Ha(){ua(2)}var Ua={[_a]:Ha};function Wa(e){return e===null||!Na(e)?!0:I.isFrozen(e)}var Ga=`MapSet`,Ka=`Patches`,qa=`ArrayMethods`,Ja={};function Ya(e){let t=Ja[e];return t||ua(0,e),t}var Xa=e=>!!Ja[e];function Za(e,t){Ja[e]||(Ja[e]=t)}var Qa,$a=()=>Qa,eo=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Xa(Ga)?Ya(Ga):void 0,arrayMethodsPlugin_:Xa(qa)?Ya(qa):void 0});function to(e,t){t&&(e.patchPlugin_=Ya(Ka),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function no(e){ro(e),e.drafts_.forEach(ao),e.drafts_=null}function ro(e){e===Qa&&(Qa=e.parent_)}var io=e=>Qa=eo(Qa,e);function ao(e){let t=e[la];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function oo(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[la].modified_&&(no(t),ua(4)),ya(e)&&(e=so(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[la].base_,e,t)}else e=so(t,n);return co(t,e,!0),no(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===sa?void 0:e}function so(e,t){if(Wa(t))return t;let n=t[la];if(!n)return L(t,e.handledSet_,e);if(!uo(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);ho(n,e)}return n.copy_}function co(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Va(t,n)}function lo(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var uo=(e,t)=>e.scope_===t,fo=[];function po(e,t,n,r){let i=Ra(e),a=e.type_;if(r!==void 0&&Da(i,r,a)===t){Oa(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;wa(i,(e,n)=>{if(va(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??fo;for(let e of o)Oa(i,e,n,a)}function mo(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!uo(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=za(i);po(e,i.draft_??i,a,n),ho(i,r)})}function ho(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}lo(e)}}function go(e,t,n){let{scope_:r}=e;if(va(n)){let i=n[la];uo(i,r)&&i.callbacks_.push(function(){So(e),po(e,n,za(i),t)})}else ya(n)&&e.callbacks_.push(function(){let i=Ra(e);e.type_===3?i.has(n)&&L(n,r.handledSet_,r):Da(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&L(Da(e.copy_,t,e.type_),r.handledSet_,r)})}function L(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||va(e)||t.has(e)||!ya(e)||Wa(e)?e:(t.add(e),wa(e,(r,i)=>{if(va(i)){let t=i[la];uo(t,n)&&(Oa(e,r,za(t),e.type_),lo(t))}else ya(i)&&L(i,t,n)}),e)}function R(e,t){let n=Aa(e),r={type_:+!!n,scope_:t?t.scope_:$a(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=z;n&&(i=[r],a=_o);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var z={get(e,t){if(t===la)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=Ra(e);if(!Ea(i,t,e.type_))return yo(e,i,t);let a=i[t];if(e.finalized_||!ya(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&Ia(t))return a;if(a===vo(e.base_,t)){So(e);let n=e.type_===1?+t:t,r=B(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in Ra(e)},ownKeys(e){return Reflect.ownKeys(Ra(e))},set(e,t,n){let r=bo(Ra(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=vo(Ra(e),t),i=r?.[la];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(ka(n,r)&&(n!==void 0||Ea(e.base_,t,e.type_)))return!0;So(e),xo(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),go(e,t,n),!0)},deleteProperty(e,t){return So(e),vo(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),xo(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=Ra(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[ga]:!0,[ma]:e.type_!==1||t!==`length`,[ha]:r[ha],[_a]:n[t]}},defineProperty(){ua(11)},getPrototypeOf(e){return da(e.base_)},setPrototypeOf(){ua(12)}},_o={};for(let e in z){let t=z[e];_o[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}_o.deleteProperty=function(e,t){return _o.set.call(this,e,t,void 0)},_o.set=function(e,t,n){return z.set.call(this,e[0],t,n,e[0])};function vo(e,t){let n=e[la];return(n?Ra(n):e)[t]}function yo(e,t,n){let r=bo(t,n);return r?_a in r?r[_a]:r.get?.call(e.draft_):void 0}function bo(e,t){if(!(t in e))return;let n=da(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=da(n)}}function xo(e){e.modified_||(e.modified_=!0,e.parent_&&xo(e.parent_))}function So(e){e.copy_||=(e.assigned_=new Map,Ba(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Co=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(Pa(e)&&!Pa(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}Pa(t)||ua(6),n!==void 0&&!Pa(n)&&ua(7);let r;if(ya(e)){let i=io(this),a=B(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?no(i):ro(i)}return to(i,n),oo(r,i)}else if(!e||!Na(e)){if(r=t(e),r===void 0&&(r=e),r===sa&&(r=void 0),this.autoFreeze_&&Va(r,!0),n){let t=[],i=[];Ya(Ka).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}else ua(1,e)},this.produceWithPatches=(e,t)=>{if(Pa(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},Fa(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Fa(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Fa(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){ya(e)||ua(8),va(e)&&(e=wo(e));let t=io(this),n=B(t,e,void 0);return n[la].isManual_=!0,ro(t),n}finishDraft(e,t){let n=e&&e[la];(!n||!n.isManual_)&&ua(9);let{scope_:r}=n;return to(r,t),oo(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=Ya(Ka).applyPatches_;return va(e)?r(e,t):this.produce(e,e=>r(e,t))}};function B(e,t,n,r){let[i,a]=ja(t)?Ya(Ga).proxyMap_(t,n):Ma(t)?Ya(Ga).proxySet_(t,n):R(t,n);return(n?.scope_??$a()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?mo(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function wo(e){return va(e)||ua(10,e),To(e)}function To(e){if(!ya(e)||Wa(e))return e;let t=e[la],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ba(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Ba(e,!0);return wa(n,(e,t)=>{Oa(n,e,To(t))},r),t&&(t.finalized_=!1),n}function Eo(){function e(n,r=[]){if(n.key_!==void 0){let e=n.parent_.copy_??n.parent_.base_,t=La(Da(e,n.key_)),i=Da(e,n.key_);if(i===void 0||i!==n.draft_&&i!==n.base_&&i!==n.copy_||t!=null&&t.base_!==n.base_)return null;let a=n.parent_.type_===3,o;if(a){let e=n.parent_;o=Array.from(e.drafts_.keys()).indexOf(n.key_)}else o=n.key_;if(!(a&&e.size>o||Ea(e,o)))return null;r.push(o)}if(n.parent_)return e(n.parent_,r);r.reverse();try{t(n.copy_,r)}catch{return null}return r}function t(e,t){let n=e;for(let e=0;e<t.length-1;e++){let r=t[e];if(n=Da(n,r),!Na(n)||n===null)throw Error(`Cannot resolve path at '${t.join(`/`)}'`)}return n}let n=`replace`,r=`remove`;function i(e,t,n){if(e.scope_.processedForPatches_.has(e))return;e.scope_.processedForPatches_.add(e);let{patches_:r,inversePatches_:i}=n;switch(e.type_){case 0:case 2:return o(e,t,r,i);case 1:return a(e,t,r,i);case 3:return s(e,t,r,i)}}function a(e,t,i,a){let{base_:o,assigned_:s}=e,c=e.copy_;c.length<o.length&&([o,c]=[c,o],[i,a]=[a,i]);let l=e.allIndicesReassigned_===!0;for(let e=0;e<o.length;e++){let r=c[e],u=o[e];if((l||s?.get(e.toString()))&&r!==u){let o=r?.[la];if(o&&o.modified_)continue;let s=t.concat([e]);i.push({op:n,path:s,value:d(r)}),a.push({op:n,path:s,value:d(u)})}}for(let e=o.length;e<c.length;e++){let n=t.concat([e]);i.push({op:`add`,path:n,value:d(c[e])})}for(let e=c.length-1;o.length<=e;--e){let n=t.concat([e]);a.push({op:r,path:n})}}function o(e,t,i,a){let{base_:o,copy_:s,type_:c}=e;wa(e.assigned_,(e,l)=>{let u=Da(o,e,c),f=Da(s,e,c),p=l?Ea(o,e)?n:`add`:r;if(u===f&&p===n)return;let m=t.concat(e);i.push(p===r?{op:p,path:m}:{op:p,path:m,value:d(f)}),a.push(p===`add`?{op:r,path:m}:p===r?{op:`add`,path:m,value:d(u)}:{op:n,path:m,value:d(u)})})}function s(e,t,n,i){let{base_:a,copy_:o}=e,s=0;a.forEach(e=>{if(!o.has(e)){let a=t.concat([s]);n.push({op:r,path:a,value:e}),i.unshift({op:`add`,path:a,value:e})}s++}),s=0,o.forEach(e=>{if(!a.has(e)){let a=t.concat([s]);n.push({op:`add`,path:a,value:e}),i.unshift({op:r,path:a,value:e})}s++})}function c(e,t,r){let{patches_:i,inversePatches_:a}=r;i.push({op:n,path:[],value:t===sa?void 0:t}),a.push({op:n,path:[],value:e})}function l(e,t){return t.forEach(t=>{let{path:i,op:a}=t,o=e;for(let e=0;e<i.length-1;e++){let t=Ta(o),n=i[e];typeof n!=`string`&&typeof n!=`number`&&(n=``+n),(t===0||t===1)&&(n===`__proto__`||n===fa)&&ua(19),Pa(o)&&n===pa&&ua(19),o=Da(o,n),Na(o)||ua(18,i.join(`/`))}let s=Ta(o),c=u(t.value),l=i[i.length-1];switch(a){case n:switch(s){case 2:return o.set(l,c);case 3:ua(16);default:return o[l]=c}case`add`:switch(s){case 1:return l===`-`?o.push(c):o.splice(l,0,c);case 2:return o.set(l,c);case 3:return o.add(c);default:return o[l]=c}case r:switch(s){case 1:return o.splice(l,1);case 2:return o.delete(l);case 3:return o.delete(t.value);default:return delete o[l]}default:ua(17,a)}}),e}function u(e){if(!ya(e))return e;if(Aa(e))return e.map(u);if(ja(e))return new Map(Array.from(e.entries()).map(([e,t])=>[e,u(t)]));if(Ma(e))return new Set(Array.from(e).map(u));let t=Object.create(da(e));for(let n in e)t[n]=u(e[n]);return Ea(e,ca)&&(t[ca]=e[ca]),t}function d(e){return va(e)?u(e):e}Za(Ka,{applyPatches_:l,generatePatches_:i,generateReplacementPatches_:c,getPath:e})}var Do=new Co,Oo=Do.produce,ko=Do.produceWithPatches.bind(Do),Ao=Do.applyPatches.bind(Do);function jo(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!=`function`)throw TypeError(t)}function Mo(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!=`object`)throw TypeError(t)}function No(e,t=`expected all items to be functions, instead received the following types: `){if(!e.every(e=>typeof e==`function`)){let n=e.map(e=>typeof e==`function`?`function ${e.name||`unnamed`}()`:typeof e).join(`, `);throw TypeError(`${t}[${n}]`)}}var Po=e=>Array.isArray(e)?e:[e];function Fo(e){let t=Array.isArray(e[0])?e[0]:e;return No(t,`createSelector expects all input-selectors to be functions, but received the following types: `),t}function Io(e,t){let n=[],{length:r}=e;for(let i=0;i<r;i++)n.push(e[i].apply(null,t));return n}var Lo=class{constructor(e){this.value=e}deref(){return this.value}},Ro=typeof WeakRef<`u`?WeakRef:Lo,zo=0,Bo=1;function Vo(){return{s:zo,v:void 0,o:null,p:null}}function Ho(e,t={}){let n=Vo(),{resultEqualityCheck:r}=t,i,a=0;function o(){let t=n,{length:o}=arguments;for(let e=0,n=o;e<n;e++){let n=arguments[e];if(typeof n==`function`||typeof n==`object`&&n){let e=t.o;e===null&&(t.o=e=new WeakMap);let r=e.get(n);r===void 0?(t=Vo(),e.set(n,t)):t=r}else{let e=t.p;e===null&&(t.p=e=new Map);let r=e.get(n);r===void 0?(t=Vo(),e.set(n,t)):t=r}}let s=t,c;if(t.s===Bo)c=t.v;else if(c=e.apply(null,arguments),a++,r){let e=i?.deref?.()??i;e!=null&&r(e,c)&&(c=e,a!==0&&a--),i=typeof c==`object`&&c||typeof c==`function`?new Ro(c):c}return s.s=Bo,s.v=c,c}return o.clearCache=()=>{n=Vo(),o.resetResultsCount()},o.resultsCount=()=>a,o.resetResultsCount=()=>{a=0},o}function Uo(e,...t){let n=typeof e==`function`?{memoize:e,memoizeOptions:t}:e,r=(...e)=>{let t=0,r=0,i,a={},o=e.pop();typeof o==`object`&&(a=o,o=e.pop()),jo(o,`createSelector expects an output function after the inputs, but received: [${typeof o}]`);let{memoize:s,memoizeOptions:c=[],argsMemoize:l=Ho,argsMemoizeOptions:u=[],devModeChecks:d={}}={...n,...a},f=Po(c),p=Po(u),m=Fo(e),h=s(function(){return t++,o.apply(null,arguments)},...f),g=l(function(){r++;let e=Io(m,arguments);return i=h.apply(null,e),i},...p);return Object.assign(g,{resultFunc:o,memoizedResultFunc:h,dependencies:m,dependencyRecomputations:()=>r,resetDependencyRecomputations:()=>{r=0},lastResult:()=>i,recomputations:()=>t,resetRecomputations:()=>{t=0},memoize:s,argsMemoize:l})};return Object.assign(r,{withTypes:()=>r}),r}var Wo=Uo(Ho),Go=Object.assign((e,t=Wo)=>{Mo(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);let n=Object.keys(e);return t(n.map(t=>e[t]),(...e)=>e.reduce((e,t,r)=>(e[n[r]]=t,e),{}))},{withTypes:()=>Go});function Ko(e){return({dispatch:t,getState:n})=>r=>i=>typeof i==`function`?i(t,n,e):r(i)}var qo=Ko(),Jo=Ko,Yo=typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]==`object`?ia:ia.apply(null,arguments)};typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var Xo=e=>e&&typeof e.match==`function`;function Zo(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw Error(Xs(0));return{type:e,payload:r.payload,...`meta`in r&&{meta:r.meta},...`error`in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>oa(t)&&t.type===e,n}var Qo=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function $o(e){return ya(e)?Oo(e,()=>{}):e}function es(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function ts(e){return typeof e==`boolean`}var ns=()=>function(e){let{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{},a=new Qo;return t&&(ts(t)?a.push(qo):a.push(Jo(t.extraArgument))),a},rs=`RTK_autoBatch`,is=()=>e=>({payload:e,meta:{[rs]:!0}}),as=e=>t=>{setTimeout(t,e)},os=(e={type:`raf`})=>t=>(...n)=>{let r=t(...n),i=!0,a=!1,o=!1,s=new Set,c=e.type===`tick`?queueMicrotask:e.type===`raf`?typeof window<`u`&&window.requestAnimationFrame?window.requestAnimationFrame:as(10):e.type===`callback`?e.queueNotification:as(e.timeout),l=()=>{o=!1,a&&(a=!1,s.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){let t=r.subscribe(()=>i&&e());return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return i=!e?.meta?.[rs],a=!i,a&&(o||(o=!0,c(l))),r.dispatch(e)}finally{i=!0}}})},ss=e=>function(t){let{autoBatch:n=!0}=t??{},r=new Qo(e);return n&&r.push(os(typeof n==`object`?n:void 0)),r};function cs(e){let t=ns(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{},c;if(typeof n==`function`)c=n;else if(ea(n))c=ra(n);else throw Error(Xs(1));let l;l=typeof r==`function`?r(t):t();let u=ia;i&&(u=Yo({trace:!1,...typeof i==`object`&&i}));let d=ss(aa(...l)),f=typeof s==`function`?s(d):d(),p=u(...f);return ta(c,o,p)}function ls(e){let t={},n=[],r,i={addCase(e,n){let r=typeof e==`string`?e:e.type;if(!r)throw Error(Xs(28));if(r in t)throw Error(Xs(29));return t[r]=n,i},addAsyncThunk(e,r){return r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),i},addMatcher(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase(e){return r=e,i}};return e(i),[t,n,r]}function us(e){return typeof e==`function`}function ds(e,t){let[n,r,i]=ls(t),a;if(us(e))a=()=>$o(e());else{let t=$o(e);a=()=>t}function o(e=a(),t){let o=[n[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return o.filter(e=>!!e).length===0&&(o=[i]),o.reduce((e,n)=>{if(n)if(va(e)){let r=n(e,t);return r===void 0?e:r}else if(ya(e))return Oo(e,e=>n(e,t));else{let r=n(e,t);if(r===void 0){if(e===null)return e;throw Error(`A case reducer on a non-draftable value must not return undefined`)}return r}return e},e)}return o.getInitialState=a,o}var fs=(e,t)=>Xo(e)?e.match(t):e(t);function ps(...e){return t=>e.some(e=>fs(e,t))}function ms(...e){return t=>e.every(e=>fs(e,t))}function hs(e,t){if(!e||!e.meta)return!1;let n=typeof e.meta.requestId==`string`,r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function gs(e){return typeof e[0]==`function`&&`pending`in e[0]&&`fulfilled`in e[0]&&`rejected`in e[0]}function _s(...e){return e.length===0?e=>hs(e,[`pending`]):gs(e)?ps(...e.map(e=>e.pending)):_s()(e[0])}function vs(...e){return e.length===0?e=>hs(e,[`rejected`]):gs(e)?ps(...e.map(e=>e.rejected)):vs()(e[0])}function ys(...e){let t=e=>e&&e.meta&&e.meta.rejectedWithValue;return e.length===0||gs(e)?ms(vs(...e),t):ys()(e[0])}function bs(...e){return e.length===0?e=>hs(e,[`fulfilled`]):gs(e)?ps(...e.map(e=>e.fulfilled)):bs()(e[0])}function xs(...e){return e.length===0?e=>hs(e,[`pending`,`fulfilled`,`rejected`]):gs(e)?ps(...e.flatMap(e=>[e.pending,e.rejected,e.fulfilled])):xs()(e[0])}var Ss=`ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,Cs=(e=21)=>{let t=``,n=e;for(;n--;)t+=Ss[Math.random()*64|0];return t},ws=[`name`,`message`,`stack`,`code`],Ts=class{constructor(e,t){this.payload=e,this.meta=t}_type},Es=class{constructor(e,t){this.payload=e,this.meta=t}_type},Ds=e=>{if(typeof e==`object`&&e){let t={};for(let n of ws)typeof e[n]==`string`&&(t[n]=e[n]);return t}return{message:String(e)}},Os=`External signal was aborted`,ks=(()=>{function e(e,t,n){let r=Zo(e+`/fulfilled`,(e,t,n,r)=>({payload:e,meta:{...r||{},arg:n,requestId:t,requestStatus:`fulfilled`}})),i=Zo(e+`/pending`,(e,t,n)=>({payload:void 0,meta:{...n||{},arg:t,requestId:e,requestStatus:`pending`}})),a=Zo(e+`/rejected`,(e,t,r,i,a)=>({payload:i,error:(n&&n.serializeError||Ds)(e||`Rejected`),meta:{...a||{},arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:`rejected`,aborted:e?.name===`AbortError`,condition:e?.name===`ConditionError`}}));function o(e,{signal:o}={}){return(s,c,l)=>{let u=n?.idGenerator?n.idGenerator(e):Cs(),d=new AbortController,f,p;function m(e){p=e,d.abort()}o&&(o.aborted?m(Os):o.addEventListener(`abort`,()=>m(Os),{once:!0}));let h=async function(){let o;try{let a=n?.condition?.(e,{getState:c,extra:l});if(js(a)&&(a=await a),a===!1||d.signal.aborted)throw{name:`ConditionError`,message:`Aborted due to condition callback returning false.`};let h=new Promise((e,t)=>{f=()=>{t({name:`AbortError`,message:p||`Aborted`})},d.signal.addEventListener(`abort`,f,{once:!0})});s(i(u,e,n?.getPendingMeta?.({requestId:u,arg:e},{getState:c,extra:l}))),o=await Promise.race([h,Promise.resolve(t(e,{dispatch:s,getState:c,extra:l,requestId:u,signal:d.signal,abort:m,rejectWithValue:(e,t)=>new Ts(e,t),fulfillWithValue:(e,t)=>new Es(e,t)})).then(t=>{if(t instanceof Ts)throw t;return t instanceof Es?r(t.payload,u,e,t.meta):r(t,u,e)})])}catch(t){o=t instanceof Ts?a(null,u,e,t.payload,t.meta):a(t,u,e)}finally{f&&d.signal.removeEventListener(`abort`,f)}return n&&!n.dispatchConditionRejection&&a.match(o)&&o.meta.condition||s(o),o}();return Object.assign(h,{abort:m,requestId:u,arg:e,unwrap(){return h.then(As)}})}}return Object.assign(o,{pending:i,rejected:a,fulfilled:r,settled:ps(a,r),typePrefix:e})}return e.withTypes=()=>e,e})();function As(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function js(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}var Ms=Symbol.for(`rtk-slice-createasyncthunk`);function Ns(e,t){return`${e}/${t}`}function Ps({creators:e}={}){let t=e?.asyncThunk?.[Ms];return function(e){let{name:n,reducerPath:r=n}=e;if(!n)throw Error(Xs(11));let i=(typeof e.reducers==`function`?e.reducers(Ls()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){let n=typeof e==`string`?e:e.type;if(!n)throw Error(Xs(12));if(n in o.sliceCaseReducersByType)throw Error(Xs(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher(e,t){return o.sliceMatchers.push({matcher:e,reducer:t}),s},exposeAction(e,t){return o.actionCreators[e]=t,s},exposeCaseReducer(e,t){return o.sliceCaseReducersByName[e]=t,s}};a.forEach(r=>{let a=i[r],o={reducerName:r,type:Ns(n,r),createNotation:typeof e.reducers==`function`};zs(a)?Vs(o,a,s,t):Rs(o,a,s)});function c(){let[t={},n=[],r=void 0]=typeof e.extraReducers==`function`?ls(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return ds(e.initialState,e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}let l=e=>e,u=new Map,d=new WeakMap,f;function p(e,t){return f||=c(),f(e,t)}function m(){return f||=c(),f.getInitialState()}function h(t,n=!1){function r(e){let i=e[t];return i===void 0&&n&&(i=es(d,r,m)),i}function i(t=l){return es(es(u,n,()=>new WeakMap),t,()=>{let r={};for(let[i,a]of Object.entries(e.selectors??{}))r[i]=Fs(a,t,()=>es(d,t,m),n);return r})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}let g={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){let i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...g,...h(i,!0)}}};return g}}function Fs(e,t,n,r){function i(i,...a){let o=t(i);return o===void 0&&r&&(o=n()),e(o,...a)}return i.unwrapped=e,i}var Is=Ps();function Ls(){function e(e,t){return{_reducerDefinitionType:`asyncThunk`,payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:`reducer`})},preparedReducer(e,t){return{_reducerDefinitionType:`reducerWithPrepare`,prepare:e,reducer:t}},asyncThunk:e}}function Rs({type:e,reducerName:t,createNotation:n},r,i){let a,o;if(`reducer`in r){if(n&&!Bs(r))throw Error(Xs(17));a=r.reducer,o=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?Zo(e,o):Zo(e))}function zs(e){return e._reducerDefinitionType===`asyncThunk`}function Bs(e){return e._reducerDefinitionType===`reducerWithPrepare`}function Vs({type:e,reducerName:t},n,r,i){if(!i)throw Error(Xs(18));let{payloadCreator:a,fulfilled:o,pending:s,rejected:c,settled:l,options:u}=n,d=i(e,a,u);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),s&&r.addCase(d.pending,s),c&&r.addCase(d.rejected,c),l&&r.addMatcher(d.settled,l),r.exposeCaseReducer(t,{fulfilled:o||Hs,pending:s||Hs,rejected:c||Hs,settled:l||Hs})}function Hs(){}var Us=`listener`,Ws=`completed`,Gs=`cancelled`;`${Gs}`,`${Ws}`,`${Us}${Gs}`,`${Us}${Ws}`;var{assign:Ks}=Object,qs=`listenerMiddleware`,Js=Ks(Zo(`${qs}/add`),{withTypes:()=>Js});`${qs}`;var Ys=Ks(Zo(`${qs}/remove`),{withTypes:()=>Ys});function Xs(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Zs=class extends Error{issues;constructor(e){super(e[0].message),this.name=`SchemaError`,this.issues=e}},Qs=(e=>(e.uninitialized=`uninitialized`,e.pending=`pending`,e.fulfilled=`fulfilled`,e.rejected=`rejected`,e))(Qs||{}),$s=`uninitialized`,ec=`pending`,tc=`fulfilled`,nc=`rejected`;function rc(e){return{status:e,isUninitialized:e===$s,isLoading:e===ec,isSuccess:e===tc,isError:e===nc}}var ic=ea;function ac(e,t){if(e===t||!(ic(e)&&ic(t)||Array.isArray(e)&&Array.isArray(t)))return t;let n=Object.keys(t),r=Object.keys(e),i=n.length===r.length,a=Array.isArray(t)?[]:{};for(let r of n)a[r]=ac(e[r],t[r]),i&&=e[r]===a[r];return i?e:a}function V(e,t,n){return e.reduce((e,r,i)=>(t(r,i)&&e.push(n(r,i)),e),[]).flat()}function oc(){return typeof document>`u`?!0:document.visibilityState!==`hidden`}function sc(e){return e!=null}function cc(e){return[...e?.values()??[]].filter(sc)}function lc(){return typeof navigator>`u`||navigator.onLine===void 0?!0:navigator.onLine}function uc(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var dc=()=>new Map,fc=class{constructor(e,t=void 0){this.value=e,this.meta=t}},pc=`__rtkq/`,mc=`online`,hc=`offline`,gc=`focused`,_c=Zo(`${pc}${gc}`),vc=Zo(`${pc}un${gc}`),yc=Zo(`${pc}${mc}`),bc=Zo(`${pc}${hc}`),xc=`query`,Sc=`mutation`,Cc=`infinitequery`;function wc(e){return e.type===xc}function Tc(e){return e.type===Sc}function Ec(e){return e.type===Cc}function Dc(e){return wc(e)||Ec(e)}function Oc(e,t,n,r,i,a){let o=kc(e)?e(t,n,r,i):e;return o?V(o,sc,e=>a(Ac(e))):[]}function kc(e){return typeof e==`function`}function Ac(e){return typeof e==`string`?{type:e}:e}function jc(e,t){return e.catch(t)}var Mc=(e,t)=>e.endpointDefinitions[t],Nc=Symbol(`forceQueryFn`),Pc=e=>typeof e[Nc]==`function`;function Fc({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:r,api:i,context:a,getInternalState:o}){let s=e=>o(e)?.runningQueries,c=e=>o(e)?.runningMutations,{unsubscribeQueryResult:l,removeMutationResult:u,updateSubscriptionOptions:d}=i.internalActions;return{buildInitiateQuery:_,buildInitiateInfiniteQuery:v,buildInitiateMutation:y,getRunningQueryThunk:f,getRunningMutationThunk:p,getRunningQueriesThunk:m,getRunningMutationsThunk:h};function f(t,n){return r=>{let i=e({queryArgs:n,endpointDefinition:Mc(a,t),endpointName:t});return s(r)?.get(i)}}function p(e,t){return e=>c(e)?.get(t)}function m(){return e=>cc(s(e))}function h(){return e=>cc(c(e))}function g(r,a){let o=(c,{subscribe:u=!0,forceRefetch:f,subscriptionOptions:p,[Nc]:m,...h}={})=>(g,_)=>{let v=e({queryArgs:c,endpointDefinition:a,endpointName:r}),y,b={...h,type:xc,subscribe:u,forceRefetch:f,subscriptionOptions:p,endpointName:r,originalArgs:c,queryCacheKey:v,[Nc]:m};if(wc(a))y=t(b);else{let{direction:e,initialPageParam:t,refetchCachedPages:r}=h;y=n({...b,direction:e,initialPageParam:t,refetchCachedPages:r})}let x=i.endpoints[r].select(c),S=g(y),C=x(_()),{requestId:w,abort:T}=S,E=C.requestId!==w,ee=s(g)?.get(v),D=()=>x(_()),O=Object.assign(m?S.then(D):E&&!ee?Promise.resolve(C):Promise.all([ee,S]).then(D),{arg:c,requestId:w,subscriptionOptions:p,queryCacheKey:v,abort:T,async unwrap(){let e=await O;if(e.isError)throw e.error;return e.data},refetch:e=>g(o(c,{subscribe:!1,forceRefetch:!0,...e})),unsubscribe(){u&&g(l({queryCacheKey:v,requestId:w}))},updateSubscriptionOptions(e){O.subscriptionOptions=e,g(d({endpointName:r,requestId:w,queryCacheKey:v,options:e}))}});if(!ee&&!E&&!m){let e=s(g);e.set(v,O),O.then(()=>{e.delete(v)})}return O};return o}function _(e,t){return g(e,t)}function v(e,t){return g(e,t)}function y(e){return(t,{track:n=!0,fixedCacheKey:i}={})=>(a,o)=>{let s=a(r({type:`mutation`,endpointName:e,originalArgs:t,track:n,fixedCacheKey:i})),{requestId:l,abort:d,unwrap:f}=s,p=jc(s.unwrap().then(e=>({data:e})),e=>({error:e})),m=Object.assign(p,{arg:s.arg,requestId:l,abort:d,unwrap:f,reset:()=>{a(u({requestId:l,fixedCacheKey:i}))}}),h=c(a);return h.set(l,m),m.then(()=>{h.delete(l)}),i&&(h.set(i,m),m.then(()=>{h.get(i)===m&&h.delete(i)})),m}}}var Ic=class extends Zs{constructor(e,t,n,r){super(e),this.value=t,this.schemaName=n,this._bqMeta=r}},Lc=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function Rc(e,t,n,r){let i=await e[`~standard`].validate(t);if(i.issues)throw new Ic(i.issues,t,n,r);return i.value}function zc(e){return e}var H=(e={})=>({...e,[rs]:!0});function Bc({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:r,api:i,assertTagType:a,selectors:o,onSchemaFailure:s,catchSchemaFailure:c,skipSchemaValidation:l}){let u=(e,t,o,s)=>(c,l)=>{let u=n[e],d=r({queryArgs:t,endpointDefinition:u,endpointName:e});if(c(i.internalActions.queryResultPatched({queryCacheKey:d,patches:o})),!s)return;let f=i.endpoints[e].select(t)(l()),p=Oc(u.providesTags,f.data,void 0,t,{},a);c(i.internalActions.updateProvidedBy([{queryCacheKey:d,providedTags:p}]))};function d(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}function f(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}let p=(e,t,n,r=!0)=>(a,o)=>{let s=i.endpoints[e].select(t)(o()),c={patches:[],inversePatches:[],undo:()=>a(i.util.patchQueryData(e,t,c.inversePatches,r))};if(s.status===$s)return c;let l;if(`data`in s)if(ya(s.data)){let[e,t,r]=ko(s.data,n);c.patches.push(...t),c.inversePatches.push(...r),l=e}else l=n(s.data),c.patches.push({op:`replace`,path:[],value:l}),c.inversePatches.push({op:`replace`,path:[],value:s.data});return c.patches.length===0||a(i.util.patchQueryData(e,t,c.patches,r)),c},m=(e,t,n)=>r=>r(i.endpoints[e].initiate(t,{subscribe:!1,forceRefetch:!0,[Nc]:()=>({data:n})})),h=(e,t)=>e.query&&e[t]?e[t]:zc,g=async(e,{signal:r,abort:i,rejectWithValue:a,fulfillWithValue:u,dispatch:p,getState:m,extra:g})=>{let v=n[e.endpointName],{metaSchema:y,skipSchemaValidation:b=l}=v,x=e.type===xc;try{let n=zc,a={signal:r,abort:i,dispatch:p,getState:m,extra:g,endpoint:e.endpointName,type:e.type,forced:x?_(e,m()):void 0,queryCacheKey:x?e.queryCacheKey:void 0},s=x?e[Nc]:void 0,c,l=async(t,n,r,i)=>{if(n==null&&t.pages.length)return Promise.resolve({data:t});let a=await S({queryArg:e.originalArgs,pageParam:n}),o=i?d:f;return{data:{pages:o(t.pages,a.data,r),pageParams:o(t.pageParams,n,r)},meta:a.meta}};async function S(e){let r,{extraOptions:i,argSchema:o,rawResponseSchema:c,responseSchema:l}=v;if(o&&!Lc(b,`arg`)&&(e=await Rc(o,e,`argSchema`,{})),s?r=s():v.query?(n=h(v,`transformResponse`),r=await t(v.query(e),a,i)):r=await v.queryFn(e,a,i,e=>t(e,a,i)),r.error)throw new fc(r.error,r.meta);let{data:u}=r;c&&!Lc(b,`rawResponse`)&&(u=await Rc(c,r.data,`rawResponseSchema`,r.meta));let d=await n(u,r.meta,e);return l&&!Lc(b,`response`)&&(d=await Rc(l,d,`responseSchema`,r.meta)),{...r,data:d}}if(x&&`infiniteQueryOptions`in v){let{infiniteQueryOptions:t}=v,{maxPages:n=1/0}=t,r=e.refetchCachedPages??t.refetchCachedPages??!0,i,a={pages:[],pageParams:[]},u=o.selectQueryEntry(m(),e.queryCacheKey)?.data,d=_(e,m())&&!e.direction||!u?a:u;if(`direction`in e&&e.direction&&d.pages.length){let r=e.direction===`backward`;i=await l(d,(r?Hc:Vc)(t,d,e.originalArgs),n,r)}else{let{initialPageParam:a=t.initialPageParam}=e,o=u?.pageParams??[],c=o[0]??a,f=o.length;if(i=await l(d,c,n),s&&(i={data:i.data.pages[0]}),r)for(let r=1;r<f;r++){let r=Vc(t,i.data,e.originalArgs);i=await l(i.data,r,n)}}c=i}else c=await S(e.originalArgs);return y&&!Lc(b,`meta`)&&c.meta&&(c.meta=await Rc(y,c.meta,`metaSchema`,c.meta)),u(c.data,H({fulfilledTimeStamp:Date.now(),baseQueryMeta:c.meta}))}catch(t){let n=t;if(n instanceof fc){let t=h(v,`transformErrorResponse`),{rawErrorResponseSchema:r,errorResponseSchema:i}=v,{value:o,meta:s}=n;try{r&&!Lc(b,`rawErrorResponse`)&&(o=await Rc(r,o,`rawErrorResponseSchema`,s)),y&&!Lc(b,`meta`)&&(s=await Rc(y,s,`metaSchema`,s));let n=await t(o,s,e.originalArgs);return i&&!Lc(b,`errorResponse`)&&(n=await Rc(i,n,`errorResponseSchema`,s)),a(n,H({baseQueryMeta:s}))}catch(e){n=e}}try{if(n instanceof Ic){let t={endpoint:e.endpointName,arg:e.originalArgs,type:e.type,queryCacheKey:x?e.queryCacheKey:void 0};v.onSchemaFailure?.(n,t),s?.(n,t);let{catchSchemaFailure:r=c}=v;if(r)return a(r(n,t),H({baseQueryMeta:n._bqMeta}))}}catch(e){n=e}throw console.error(n),n}};function _(e,t){let n=o.selectQueryEntry(t,e.queryCacheKey),r=o.selectConfig(t).refetchOnMountOrArgChange,i=n?.fulfilledTimeStamp,a=e.forceRefetch??(e.subscribe&&r);return a?a===!0||(Number(new Date)-Number(i))/1e3>=a:!1}let v=()=>ks(`${e}/executeQuery`,g,{getPendingMeta({arg:e}){let t=n[e.endpointName];return H({startedTimeStamp:Date.now(),...Ec(t)?{direction:e.direction}:{}})},condition(e,{getState:t}){let r=t(),i=o.selectQueryEntry(r,e.queryCacheKey),a=i?.fulfilledTimeStamp,s=e.originalArgs,c=i?.originalArgs,l=n[e.endpointName],u=e.direction;return Pc(e)?!0:i?.status===`pending`?!1:_(e,r)||wc(l)&&l?.forceRefetch?.({currentArg:s,previousArg:c,endpointState:i,state:r})?!0:!(a&&!u)},dispatchConditionRejection:!0}),y=v(),b=v(),x=ks(`${e}/executeMutation`,g,{getPendingMeta(){return H({startedTimeStamp:Date.now()})}}),S=e=>`force`in e,C=e=>`ifOlderThan`in e,w=(e,t,n={})=>(r,a)=>{let o=S(n)&&n.force,s=C(n)&&n.ifOlderThan,c=(n=!0)=>{let r={forceRefetch:n,subscribe:!1};return i.endpoints[e].initiate(t,r)},l=i.endpoints[e].select(t)(a());if(o)r(c());else if(s){let e=l?.fulfilledTimeStamp;if(!e){r(c());return}(Number(new Date)-Number(new Date(e)))/1e3>=s&&r(c())}else r(c(!1))};function T(e){return t=>t?.meta?.arg?.endpointName===e}function E(e,t){return{matchPending:ms(_s(e),T(t)),matchFulfilled:ms(bs(e),T(t)),matchRejected:ms(vs(e),T(t))}}return{queryThunk:y,mutationThunk:x,infiniteQueryThunk:b,prefetch:w,updateQueryData:p,upsertQueryData:m,patchQueryData:u,buildMatchThunkActions:E}}function Vc(e,{pages:t,pageParams:n},r){let i=t.length-1;return e.getNextPageParam(t[i],t,n[i],n,r)}function Hc(e,{pages:t,pageParams:n},r){return e.getPreviousPageParam?.(t[0],t,n[0],n,r)}function Uc(e,t,n,r){return Oc(n[e.meta.arg.endpointName][t],bs(e)?e.payload:void 0,ys(e)?e.payload:void 0,e.meta.arg.originalArgs,`baseQueryMeta`in e.meta?e.meta.baseQueryMeta:void 0,r)}function Wc(e){return va(e)?wo(e):e}function Gc(e,t,n){let r=e[t];r&&n(r)}function Kc(e){return(`arg`in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function qc(e,t,n){let r=e[Kc(t)];r&&n(r)}var Jc={};function Yc({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:r,context:{endpointDefinitions:i,apiUid:a,extractRehydrationInfo:o,hasRehydrationInfo:s},assertTagType:c,config:l}){let u=Zo(`${e}/resetApiState`);function d(e,t,n,r){e[t.queryCacheKey]??={status:$s,endpointName:t.endpointName},Gc(e,t.queryCacheKey,e=>{e.status=ec,e.requestId=n&&e.requestId?e.requestId:r.requestId,t.originalArgs!==void 0&&(e.originalArgs=t.originalArgs),e.startedTimeStamp=r.startedTimeStamp;let a=i[r.arg.endpointName];Ec(a)&&`direction`in t&&(e.direction=t.direction)})}function f(e,t,n,r){Gc(e,t.arg.queryCacheKey,e=>{if(e.requestId!==t.requestId&&!r)return;let{merge:a}=i[t.arg.endpointName];if(e.status=tc,a)if(e.data!==void 0){let{fulfilledTimeStamp:r,arg:i,baseQueryMeta:o,requestId:s}=t;e.data=Oo(e.data,e=>a(e,n,{arg:i.originalArgs,baseQueryMeta:o,fulfilledTimeStamp:r,requestId:s}))}else e.data=n;else e.data=i[t.arg.endpointName].structuralSharing??!0?ac(va(e.data)?Ca(e.data):e.data,n):n;delete e.error,e.fulfilledTimeStamp=t.fulfilledTimeStamp})}let p=Is({name:`${e}/queries`,initialState:Jc,reducers:{removeQueryResult:{reducer(e,{payload:{queryCacheKey:t}}){delete e[t]},prepare:is()},cacheEntriesUpserted:{reducer(e,t){for(let n of t.payload){let{queryDescription:r,value:i}=n;d(e,r,!0,{arg:r,requestId:t.meta.requestId,startedTimeStamp:t.meta.timestamp}),f(e,{arg:r,requestId:t.meta.requestId,fulfilledTimeStamp:t.meta.timestamp,baseQueryMeta:{}},i,!0)}},prepare:e=>({payload:e.map(e=>{let{endpointName:t,arg:n,value:a}=e,o=i[t];return{queryDescription:{type:xc,endpointName:t,originalArgs:e.arg,queryCacheKey:r({queryArgs:n,endpointDefinition:o,endpointName:t})},value:a}}),meta:{[rs]:!0,requestId:Cs(),timestamp:Date.now()}})},queryResultPatched:{reducer(e,{payload:{queryCacheKey:t,patches:n}}){Gc(e,t,e=>{e.data=Ao(e.data,n.concat())})},prepare:is()}},extraReducers(e){e.addCase(t.pending,(e,{meta:t,meta:{arg:n}})=>{d(e,n,Pc(n),t)}).addCase(t.fulfilled,(e,{meta:t,payload:n})=>{f(e,t,n,Pc(t.arg))}).addCase(t.rejected,(e,{meta:{condition:t,arg:n,requestId:r},error:i,payload:a})=>{Gc(e,n.queryCacheKey,e=>{if(!t){if(e.requestId!==r)return;e.status=nc,e.error=a??i}})}).addMatcher(s,(e,t)=>{let{queries:n}=o(t);for(let[t,r]of Object.entries(n))(r?.status===tc||r?.status===nc)&&(e[t]=r)})}}),m=Is({name:`${e}/mutations`,initialState:Jc,reducers:{removeMutationResult:{reducer(e,{payload:t}){let n=Kc(t);n in e&&delete e[n]},prepare:is()}},extraReducers(e){e.addCase(n.pending,(e,{meta:t,meta:{requestId:n,arg:r,startedTimeStamp:i}})=>{r.track&&(e[Kc(t)]={requestId:n,status:ec,endpointName:r.endpointName,startedTimeStamp:i})}).addCase(n.fulfilled,(e,{payload:t,meta:n})=>{n.arg.track&&qc(e,n,e=>{e.requestId===n.requestId&&(e.status=tc,e.data=t,e.fulfilledTimeStamp=n.fulfilledTimeStamp)})}).addCase(n.rejected,(e,{payload:t,error:n,meta:r})=>{r.arg.track&&qc(e,r,e=>{e.requestId===r.requestId&&(e.status=nc,e.error=t??n)})}).addMatcher(s,(e,t)=>{let{mutations:n}=o(t);for(let[t,r]of Object.entries(n))(r?.status===tc||r?.status===nc)&&t!==r?.requestId&&(e[t]=r)})}}),h=Is({name:`${e}/invalidation`,initialState:{tags:{},keys:{}},reducers:{updateProvidedBy:{reducer(e,t){for(let{queryCacheKey:n,providedTags:r}of t.payload){g(e,n);for(let{type:t,id:i}of r){let r=(e.tags[t]??={})[i||`__internal_without_id`]??=[];r.includes(n)||r.push(n)}e.keys[n]=r}},prepare:is()}},extraReducers(e){e.addCase(p.actions.removeQueryResult,(e,{payload:{queryCacheKey:t}})=>{g(e,t)}).addMatcher(s,(e,t)=>{let{provided:n}=o(t);for(let[t,r]of Object.entries(n.tags??{}))for(let[i,a]of Object.entries(r)){let r=(e.tags[t]??={})[i||`__internal_without_id`]??=[];for(let t of a)r.includes(t)||r.push(t),e.keys[t]=n.keys[t]}}).addMatcher(ps(bs(t),ys(t)),(e,t)=>{_(e,[t])}).addMatcher(p.actions.cacheEntriesUpserted.match,(e,t)=>{_(e,t.payload.map(({queryDescription:e,value:t})=>({type:`UNKNOWN`,payload:t,meta:{requestStatus:`fulfilled`,requestId:`UNKNOWN`,arg:e}})))})}});function g(e,t){let n=Wc(e.keys[t]??[]);for(let r of n){let n=r.type,i=r.id??`__internal_without_id`,a=e.tags[n]?.[i];a&&(e.tags[n][i]=Wc(a).filter(e=>e!==t))}delete e.keys[t]}function _(e,t){let n=t.map(e=>{let t=Uc(e,`providesTags`,i,c),{queryCacheKey:n}=e.meta.arg;return{queryCacheKey:n,providedTags:t}});h.caseReducers.updateProvidedBy(e,h.actions.updateProvidedBy(n))}let v=Is({name:`${e}/subscriptions`,initialState:Jc,reducers:{updateSubscriptionOptions(e,t){},unsubscribeQueryResult(e,t){},internal_getRTKQSubscriptions(){}}}),y=Is({name:`${e}/internalSubscriptions`,initialState:Jc,reducers:{subscriptionsUpdated:{reducer(e,t){return Ao(e,t.payload)},prepare:is()}}}),b=Is({name:`${e}/config`,initialState:{online:lc(),focused:oc(),middlewareRegistered:!1,...l},reducers:{middlewareRegistered(e,{payload:t}){e.middlewareRegistered=e.middlewareRegistered===`conflict`||a!==t?`conflict`:!0}},extraReducers:e=>{e.addCase(yc,e=>{e.online=!0}).addCase(bc,e=>{e.online=!1}).addCase(_c,e=>{e.focused=!0}).addCase(vc,e=>{e.focused=!1}).addMatcher(s,e=>({...e}))}}),x=ra({queries:p.reducer,mutations:m.reducer,provided:h.reducer,subscriptions:y.reducer,config:b.reducer});return{reducer:(e,t)=>x(u.match(t)?void 0:e,t),actions:{...b.actions,...p.actions,...v.actions,...y.actions,...m.actions,...h.actions,resetApiState:u}}}var Xc=Symbol.for(`RTKQ/skipToken`),Zc={status:$s},Qc=Oo(Zc,()=>{}),$c=Oo(Zc,()=>{});function el({serializeQueryArgs:e,reducerPath:t,createSelector:n}){let r=e=>Qc,i=e=>$c;return{buildQuerySelector:f,buildInfiniteQuerySelector:p,buildMutationSelector:m,selectInvalidatedBy:h,selectCachedArgsForQuery:g,selectApiState:o,selectQueries:s,selectMutations:l,selectQueryEntry:c,selectConfig:u};function a(e){return{...e,...rc(e.status)}}function o(e){return e[t]}function s(e){return o(e)?.queries}function c(e,t){return s(e)?.[t]}function l(e){return o(e)?.mutations}function u(e){return o(e)?.config}function d(t,i,a){return o=>{if(o===Xc)return n(r,a);let s=e({queryArgs:o,endpointDefinition:i,endpointName:t});return n(e=>c(e,s)??Qc,a)}}function f(e,t){return d(e,t,a)}function p(e,t){let{infiniteQueryOptions:n}=t;function r(e){let t={...e,...rc(e.status)},{isLoading:r,isError:i,direction:a}=t,o=a===`forward`,s=a===`backward`;return{...t,hasNextPage:_(n,t.data,t.originalArgs),hasPreviousPage:v(n,t.data,t.originalArgs),isFetchingNextPage:r&&o,isFetchingPreviousPage:r&&s,isFetchNextPageError:i&&o,isFetchPreviousPageError:i&&s}}return d(e,t,r)}function m(){return e=>{let t;return t=typeof e==`object`?Kc(e)??Xc:e,n(t===Xc?i:e=>o(e)?.mutations?.[t]??$c,a)}}function h(e,n){let r=e[t],i=new Set,a=V(n,sc,Ac);for(let e of a){let t=r.provided.tags[e.type];if(!t)continue;let n=(e.id===void 0?Object.values(t).flat():t[e.id])??[];for(let e of n)i.add(e)}return Array.from(i.values()).flatMap(e=>{let t=r.queries[e];return t?{queryCacheKey:e,endpointName:t.endpointName,originalArgs:t.originalArgs}:[]})}function g(e,t){return V(Object.values(s(e)),e=>e?.endpointName===t&&e.status!==$s,e=>e.originalArgs)}function _(e,t,n){return t?Vc(e,t,n)!=null:!1}function v(e,t,n){return!t||!e.getPreviousPageParam?!1:Hc(e,t,n)!=null}}var tl=WeakMap?new WeakMap:void 0,nl=({endpointName:e,queryArgs:t})=>{let n=``,r=tl?.get(t);if(typeof r==`string`)n=r;else{let e=JSON.stringify(t,(e,t)=>(t=typeof t==`bigint`?{$bigint:t.toString()}:t,t=ea(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t,t));ea(t)&&tl?.set(t,e),n=e}return`${e}(${n})`};function rl(...e){return function(t){let n=Ho(e=>t.extractRehydrationInfo?.(e,{reducerPath:t.reducerPath??`api`})),r={reducerPath:`api`,keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:`delayed`,...t,extractRehydrationInfo:n,serializeQueryArgs(e){let n=nl;if(`serializeQueryArgs`in e.endpointDefinition){let t=e.endpointDefinition.serializeQueryArgs;n=e=>{let n=t(e);return typeof n==`string`?n:nl({...e,queryArgs:n})}}else t.serializeQueryArgs&&(n=t.serializeQueryArgs);return n(e)},tagTypes:[...t.tagTypes||[]]},i={endpointDefinitions:{},batch(e){e()},apiUid:Cs(),extractRehydrationInfo:n,hasRehydrationInfo:Ho(e=>n(e)!=null)},a={injectEndpoints:s,enhanceEndpoints({addTagTypes:e,endpoints:t}){if(e)for(let t of e)r.tagTypes.includes(t)||r.tagTypes.push(t);if(t)for(let[e,n]of Object.entries(t))typeof n==`function`?n(Mc(i,e)):Object.assign(Mc(i,e)||{},n);return a}},o=e.map(e=>e.init(a,r,i));function s(e){let t=e.endpoints({query:e=>({...e,type:xc}),mutation:e=>({...e,type:Sc}),infiniteQuery:e=>({...e,type:Cc})});for(let[n,r]of Object.entries(t)){if(e.overrideExisting!==!0&&n in i.endpointDefinitions){if(e.overrideExisting===`throw`)throw Error(Xs(39));continue}i.endpointDefinitions[n]=r;for(let e of o)e.injectEndpoint(n,r)}return a}return a.injectEndpoints({endpoints:t.endpoints})}}function il(){return function(){throw Error(Xs(33))}}function al(e,...t){return Object.assign(e,...t)}var ol=({api:e,queryThunk:t,internalState:n,mwApi:r})=>{let i=`${e.reducerPath}/subscriptions`,a=null,o=null,{updateSubscriptionOptions:s,unsubscribeQueryResult:c}=e.internalActions,l=(n,r)=>{if(s.match(r)){let{queryCacheKey:e,requestId:t,options:i}=r.payload,a=n.get(e);return a?.has(t)&&a.set(t,i),!0}if(c.match(r)){let{queryCacheKey:e,requestId:t}=r.payload,i=n.get(e);return i&&i.delete(t),!0}if(e.internalActions.removeQueryResult.match(r))return n.delete(r.payload.queryCacheKey),!0;if(t.pending.match(r)){let{meta:{arg:e,requestId:t}}=r,i=uc(n,e.queryCacheKey,dc);return e.subscribe&&i.set(t,e.subscriptionOptions??i.get(t)??{}),!0}let i=!1;if(t.rejected.match(r)){let{meta:{condition:e,arg:t,requestId:a}}=r;if(e&&t.subscribe){let e=uc(n,t.queryCacheKey,dc);e.set(a,t.subscriptionOptions??e.get(a)??{}),i=!0}}return i},u=()=>n.currentSubscriptions,d={getSubscriptions:u,getSubscriptionCount:e=>u().get(e)?.size??0,isRequestSubscribed:(e,t)=>!!u()?.get(e)?.get(t)};function f(e){return JSON.parse(JSON.stringify(Object.fromEntries([...e].map(([e,t])=>[e,Object.fromEntries(t)]))))}return(r,s)=>{if(a||=f(n.currentSubscriptions),e.util.resetApiState.match(r))return a={},n.currentSubscriptions.clear(),o=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(r))return[!1,d];let c=l(n.currentSubscriptions,r),u=!0;if(c){o||=setTimeout(()=>{let t=f(n.currentSubscriptions),[,r]=ko(a,()=>t);s.next(e.internalActions.subscriptionsUpdated(r)),a=t,o=null},500);let c=typeof r.type==`string`&&!!r.type.startsWith(i),l=t.rejected.match(r)&&r.meta.condition&&!!r.meta.arg.subscribe;u=!c&&!l}return[u,!1]}},sl=2147483647/1e3-1,cl=({reducerPath:e,api:t,queryThunk:n,context:r,internalState:i,selectors:{selectQueryEntry:a,selectConfig:o},getRunningQueryThunk:s,mwApi:c})=>{let{removeQueryResult:l,unsubscribeQueryResult:u,cacheEntriesUpserted:d}=t.internalActions,f=ps(u.match,n.fulfilled,n.rejected,d.match);function p(e){let t=i.currentSubscriptions.get(e);return t?t.size>0:!1}let m={};function h(e){for(let t of e.values())t?.abort?.()}let g=(e,n)=>{let a=o(n.getState());if(f(e)){let t;if(d.match(e))t=e.payload.map(e=>e.queryDescription.queryCacheKey);else{let{queryCacheKey:n}=u.match(e)?e.payload:e.meta.arg;t=[n]}_(t,n,a)}if(t.util.resetApiState.match(e)){for(let[e,t]of Object.entries(m))t&&clearTimeout(t),delete m[e];h(i.runningQueries),h(i.runningMutations)}if(r.hasRehydrationInfo(e)){let{queries:t}=r.extractRehydrationInfo(e);_(Object.keys(t),n,a)}};function _(e,t,n){let r=t.getState();for(let i of e){let e=a(r,i);e?.endpointName&&v(i,e.endpointName,t,n)}}function v(e,t,n,i){let o=Mc(r,t)?.keepUnusedDataFor??i.keepUnusedDataFor;if(o===1/0)return;let c=Math.max(0,Math.min(o,sl));if(!p(e)){let t=m[e];t&&clearTimeout(t),m[e]=setTimeout(()=>{if(!p(e)){let t=a(n.getState(),e);t?.endpointName&&n.dispatch(s(t.endpointName,t.originalArgs))?.abort(),n.dispatch(l({queryCacheKey:e}))}delete m[e]},c*1e3)}}return g},ll=Error(`Promise never resolved before cacheEntryRemoved.`),U=({api:e,reducerPath:t,context:n,queryThunk:r,mutationThunk:i,internalState:a,selectors:{selectQueryEntry:o,selectApiState:s}})=>{let c=xs(r),l=xs(i),u=bs(r,i),d={},{removeQueryResult:f,removeMutationResult:p,cacheEntriesUpserted:m}=e.internalActions;function h(e,t,n){let r=d[e];r?.valueResolved&&(r.valueResolved({data:t,meta:n}),delete r.valueResolved)}function g(e){let t=d[e];t&&(delete d[e],t.cacheEntryRemoved())}function _(e){let{arg:t,requestId:n}=e.meta,{endpointName:r,originalArgs:i}=t;return[r,i,n]}let v=(n,a,s)=>{let c=y(n);function l(e,t,n,r){let i=o(s,t),c=o(a.getState(),t);!i&&c&&b(e,r,t,a,n)}if(r.pending.match(n)){let[e,t,r]=_(n);l(e,c,r,t)}else if(m.match(n))for(let{queryDescription:e,value:t}of n.payload){let{endpointName:r,originalArgs:i,queryCacheKey:a}=e;l(r,a,n.meta.requestId,i),h(a,t,{})}else if(i.pending.match(n)){if(a.getState()[t].mutations[c]){let[e,t,r]=_(n);b(e,t,c,a,r)}}else if(u(n))h(c,n.payload,n.meta.baseQueryMeta);else if(f.match(n)||p.match(n))g(c);else if(e.util.resetApiState.match(n))for(let e of Object.keys(d))g(e)};function y(e){return c(e)?e.meta.arg.queryCacheKey:l(e)?e.meta.arg.fixedCacheKey??e.meta.requestId:f.match(e)?e.payload.queryCacheKey:p.match(e)?Kc(e.payload):``}function b(t,r,i,a,o){let s=Mc(n,t),c=s?.onCacheEntryAdded;if(!c)return;let l={},u=new Promise(e=>{l.cacheEntryRemoved=e}),f=Promise.race([new Promise(e=>{l.valueResolved=e}),u.then(()=>{throw ll})]);f.catch(()=>{}),d[i]=l;let p=e.endpoints[t].select(Dc(s)?r:i),m=a.dispatch((e,t,n)=>n),h=c(r,{...a,getCacheEntry:()=>p(a.getState()),requestId:o,extra:m,updateCachedData:Dc(s)?n=>a.dispatch(e.util.updateQueryData(t,r,n)):void 0,cacheDataLoaded:f,cacheEntryRemoved:u});Promise.resolve(h).catch(e=>{if(e!==ll)throw e})}return v},ul=({api:e,context:{apiUid:t},reducerPath:n})=>(n,r)=>{e.util.resetApiState.match(n)&&r.dispatch(e.internalActions.middlewareRegistered(t))},dl=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:r,queryThunk:i,api:a,assertTagType:o,refetchQuery:s,internalState:c})=>{let{removeQueryResult:l}=a.internalActions,u=ps(bs(r),ys(r)),d=ps(bs(i,r),vs(i,r)),f=[],p=0,m=(e,t)=>{(i.pending.match(e)||r.pending.match(e))&&p++,d(e)&&(p=Math.max(0,p-1)),u(e)?g(Uc(e,`invalidatesTags`,n,o),t):d(e)?g([],t):a.util.invalidateTags.match(e)&&g(Oc(e.payload,void 0,void 0,void 0,void 0,o),t)};function h(){return p>0}function g(n,r){let i=r.getState(),o=i[e];if(f.push(...n),o.config.invalidationBehavior===`delayed`&&h())return;let u=f;if(f=[],u.length===0)return;let d=a.util.selectInvalidatedBy(i,u);t.batch(()=>{let e=Array.from(d.values());for(let{queryCacheKey:t}of e){let e=o.queries[t],n=uc(c.currentSubscriptions,t,dc);e&&(n.size===0?r.dispatch(l({queryCacheKey:t})):e.status!==$s&&r.dispatch(s(e)))}})}return m},fl=({reducerPath:e,queryThunk:t,api:n,refetchQuery:r,internalState:i})=>{let{currentPolls:a,currentSubscriptions:o}=i,s=new Set,c=null,l=(e,r)=>{(n.internalActions.updateSubscriptionOptions.match(e)||n.internalActions.unsubscribeQueryResult.match(e))&&u(e.payload.queryCacheKey,r),(t.pending.match(e)||t.rejected.match(e)&&e.meta.condition)&&u(e.meta.arg.queryCacheKey,r),(t.fulfilled.match(e)||t.rejected.match(e)&&!e.meta.condition)&&d(e.meta.arg,r),n.util.resetApiState.match(e)&&(m(),c&&=(clearTimeout(c),null),s.clear())};function u(e,t){s.add(e),c||=setTimeout(()=>{for(let e of s)f({queryCacheKey:e},t);s.clear(),c=null},0)}function d({queryCacheKey:t},n){let i=n.getState()[e],s=i.queries[t],c=o.get(t);if(!s||s.status===$s)return;let{lowestPollingInterval:l,skipPollingIfUnfocused:u}=h(c);if(!Number.isFinite(l))return;let f=a.get(t);f?.timeout&&(clearTimeout(f.timeout),f.timeout=void 0);let p=Date.now()+l;a.set(t,{nextPollTimestamp:p,pollingInterval:l,timeout:setTimeout(()=>{(i.config.focused||!u)&&n.dispatch(r(s)),d({queryCacheKey:t},n)},l)})}function f({queryCacheKey:t},n){let r=n.getState()[e].queries[t],i=o.get(t);if(!r||r.status===$s)return;let{lowestPollingInterval:s}=h(i);if(!Number.isFinite(s)){p(t);return}let c=a.get(t),l=Date.now()+s;(!c||l<c.nextPollTimestamp)&&d({queryCacheKey:t},n)}function p(e){let t=a.get(e);t?.timeout&&clearTimeout(t.timeout),a.delete(e)}function m(){for(let e of a.keys())p(e)}function h(e=new Map){let t=!1,n=1/0;for(let r of e.values())r.pollingInterval&&(n=Math.min(r.pollingInterval,n),t=r.skipPollingIfUnfocused||t);return{lowestPollingInterval:n,skipPollingIfUnfocused:t}}return l},pl=({api:e,context:t,queryThunk:n,mutationThunk:r})=>{let i=_s(n,r),a=vs(n,r),o=bs(n,r),s={};return(n,r)=>{if(i(n)){let{requestId:i,arg:{endpointName:a,originalArgs:o}}=n.meta,c=Mc(t,a),l=c?.onQueryStarted;if(l){let t={},n=new Promise((e,n)=>{t.resolve=e,t.reject=n});n.catch(()=>{}),s[i]=t;let u=e.endpoints[a].select(Dc(c)?o:i),d=r.dispatch((e,t,n)=>n);l(o,{...r,getCacheEntry:()=>u(r.getState()),requestId:i,extra:d,updateCachedData:Dc(c)?t=>r.dispatch(e.util.updateQueryData(a,o,t)):void 0,queryFulfilled:n})}}else if(o(n)){let{requestId:e,baseQueryMeta:t}=n.meta;s[e]?.resolve({data:n.payload,meta:t}),delete s[e]}else if(a(n)){let{requestId:e,rejectedWithValue:t,baseQueryMeta:r}=n.meta;s[e]?.reject({error:n.payload??n.error,isUnhandledError:!t,meta:r}),delete s[e]}}},ml=({reducerPath:e,context:t,api:n,refetchQuery:r,internalState:i})=>{let{removeQueryResult:a}=n.internalActions,o=(e,t)=>{_c.match(e)&&s(t,`refetchOnFocus`),yc.match(e)&&s(t,`refetchOnReconnect`)};function s(n,o){let s=n.getState()[e],c=s.queries,l=i.currentSubscriptions;t.batch(()=>{for(let e of l.keys()){let t=c[e],i=l.get(e);if(!i||!t)continue;let u=[...i.values()];(u.some(e=>e[o]===!0)||u.every(e=>e[o]===void 0)&&s.config[o])&&(i.size===0?n.dispatch(a({queryCacheKey:e})):t.status!==$s&&n.dispatch(r(t)))}})}return o};function hl(e){let{reducerPath:t,queryThunk:n,api:r,context:i,getInternalState:a}=e,{apiUid:o}=i,s={invalidateTags:Zo(`${t}/invalidateTags`)},c=e=>e.type.startsWith(`${t}/`),l=[ul,cl,dl,fl,U,pl];return{middleware:n=>{let s=!1,d=a(n.dispatch),f={...e,internalState:d,refetchQuery:u,isThisApiSliceAction:c,mwApi:n},p=l.map(e=>e(f)),m=ol(f),h=ml(f);return e=>a=>{if(!oa(a))return e(a);s||(s=!0,n.dispatch(r.internalActions.middlewareRegistered(o)));let l={...n,next:e},u=n.getState(),[d,f]=m(a,l,u),g;if(g=d?e(a):f,n.getState()[t]&&(h(a,l,u),c(a)||i.hasRehydrationInfo(a)))for(let e of p)e(a,l,u);return g}},actions:s};function u(t){return e.api.endpoints[t.endpointName].initiate(t.originalArgs,{subscribe:!1,forceRefetch:!0})}}var gl=Symbol(),_l=({createSelector:e=Wo}={})=>({name:gl,init(t,{baseQuery:n,tagTypes:r,reducerPath:i,serializeQueryArgs:a,keepUnusedDataFor:o,refetchOnMountOrArgChange:s,refetchOnFocus:c,refetchOnReconnect:l,invalidationBehavior:u,onSchemaFailure:d,catchSchemaFailure:f,skipSchemaValidation:p},m){Eo();let h=e=>e;Object.assign(t,{reducerPath:i,endpoints:{},internalActions:{onOnline:yc,onOffline:bc,onFocus:_c,onFocusLost:vc},util:{}});let g=el({serializeQueryArgs:a,reducerPath:i,createSelector:e}),{selectInvalidatedBy:_,selectCachedArgsForQuery:v,buildQuerySelector:y,buildInfiniteQuerySelector:b,buildMutationSelector:x}=g;al(t.util,{selectInvalidatedBy:_,selectCachedArgsForQuery:v});let{queryThunk:S,infiniteQueryThunk:C,mutationThunk:w,patchQueryData:T,updateQueryData:E,upsertQueryData:ee,prefetch:D,buildMatchThunkActions:O}=Bc({baseQuery:n,reducerPath:i,context:m,api:t,serializeQueryArgs:a,assertTagType:h,selectors:g,onSchemaFailure:d,catchSchemaFailure:f,skipSchemaValidation:p}),{reducer:te,actions:ne}=Yc({context:m,queryThunk:S,infiniteQueryThunk:C,mutationThunk:w,serializeQueryArgs:a,reducerPath:i,assertTagType:h,config:{refetchOnFocus:c,refetchOnReconnect:l,refetchOnMountOrArgChange:s,keepUnusedDataFor:o,reducerPath:i,invalidationBehavior:u}});al(t.util,{patchQueryData:T,updateQueryData:E,upsertQueryData:ee,prefetch:D,resetApiState:ne.resetApiState,upsertQueryEntries:ne.cacheEntriesUpserted}),al(t.internalActions,ne);let re=new WeakMap,ie=e=>uc(re,e,()=>({currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map})),{buildInitiateQuery:ae,buildInitiateInfiniteQuery:oe,buildInitiateMutation:k,getRunningMutationThunk:A,getRunningMutationsThunk:se,getRunningQueriesThunk:ce,getRunningQueryThunk:le}=Fc({queryThunk:S,mutationThunk:w,infiniteQueryThunk:C,api:t,serializeQueryArgs:a,context:m,getInternalState:ie});al(t.util,{getRunningMutationThunk:A,getRunningMutationsThunk:se,getRunningQueryThunk:le,getRunningQueriesThunk:ce});let{middleware:ue,actions:de}=hl({reducerPath:i,context:m,queryThunk:S,mutationThunk:w,infiniteQueryThunk:C,api:t,assertTagType:h,selectors:g,getRunningQueryThunk:le,getInternalState:ie});return al(t.util,de),al(t,{reducer:te,middleware:ue}),{name:gl,injectEndpoint(e,n){let r=t,i=r.endpoints[e]??={};wc(n)&&al(i,{name:e,select:y(e,n),initiate:ae(e,n)},O(S,e)),Tc(n)&&al(i,{name:e,select:x(),initiate:k(e)},O(w,e)),Ec(n)&&al(i,{name:e,select:b(e,n),initiate:oe(e,n)},O(S,e))}}}});_l();function vl(e){return e.replace(e[0],e[0].toUpperCase())}var yl=`query`,bl=`mutation`,xl=`infinitequery`;function Sl(e){return e.type===yl}function Cl(e){return e.type===bl}function wl(e){return e.type===xl}function Tl(e,...t){return Object.assign(e,...t)}var El=Symbol();function Dl(e){let t=(0,x.useRef)(e),n=(0,x.useMemo)(()=>ac(t.current,e),[e]);return(0,x.useEffect)(()=>{t.current!==n&&(t.current=n)},[n]),n}function Ol(e){let t=(0,x.useRef)(e);return(0,x.useEffect)(()=>{ir(t.current,e)||(t.current=e)},[e]),ir(t.current,e)?t.current:e}var kl=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Al=typeof navigator<`u`&&navigator.product===`ReactNative`,jl=kl||Al?x.useLayoutEffect:x.useEffect,Ml=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:Qs.pending}:e;function Nl(e,...t){let n={};return t.forEach(t=>{n[t]=e[t]}),n}var Pl=[`data`,`status`,`isLoading`,`isSuccess`,`isError`,`error`];function Fl({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:r,useStore:i},unstable__sideEffectsInRender:a,createSelector:o},serializeQueryArgs:s,context:c}){let l=a?e=>e():x.useEffect,u=e=>e.current?.unsubscribe?.(),d=c.endpointDefinitions;return{buildQueryHooks:y,buildInfiniteQueryHooks:b,buildMutationHook:S,usePrefetch:m};function f(e,t,n){if(t?.endpointName&&e.isUninitialized){let{endpointName:e}=t,r=d[e];n!==Xc&&s({queryArgs:t.originalArgs,endpointDefinition:r,endpointName:e})===s({queryArgs:n,endpointDefinition:r,endpointName:e})&&(t=void 0)}let r=e.isSuccess?e.data:t?.data;r===void 0&&(r=e.data);let i=r!==void 0,a=e.isLoading,o=(!t||t.isLoading||t.isUninitialized)&&!i&&a,c=e.isSuccess||i&&(a&&!t?.isError||e.isUninitialized);return{...e,data:r,currentData:e.data,isFetching:a,isLoading:o,isSuccess:c}}function p(e,t,n){if(t?.endpointName&&e.isUninitialized){let{endpointName:e}=t,r=d[e];n!==Xc&&s({queryArgs:t.originalArgs,endpointDefinition:r,endpointName:e})===s({queryArgs:n,endpointDefinition:r,endpointName:e})&&(t=void 0)}let r=e.isSuccess?e.data:t?.data;r===void 0&&(r=e.data);let i=r!==void 0,a=e.isLoading,o=(!t||t.isLoading||t.isUninitialized)&&!i&&a,c=e.isSuccess||a&&i;return{...e,data:r,currentData:e.data,isFetching:a,isLoading:o,isSuccess:c}}function m(t,r){let i=n(),a=Ol(r);return(0,x.useCallback)((n,r)=>i(e.util.prefetch(t,n,{...a,...r})),[t,i,a])}function h(t,r,{refetchOnReconnect:i,refetchOnFocus:a,refetchOnMountOrArgChange:o,skip:s=!1,pollingInterval:c=0,skipPollingIfUnfocused:u=!1,...f}={}){let{initiate:p}=e.endpoints[t],m=n(),h=(0,x.useRef)(void 0);h.current||=m(e.internalActions.internal_getRTKQSubscriptions());let g=Dl(s?Xc:r),_=Ol({refetchOnReconnect:i,refetchOnFocus:a,pollingInterval:c,skipPollingIfUnfocused:u}),v=f.initialPageParam,y=Ol(v),b=f.refetchCachedPages,S=Ol(b),C=(0,x.useRef)(void 0),{queryCacheKey:w,requestId:T}=C.current||{},E=!1;w&&T&&(E=h.current.isRequestSubscribed(w,T));let ee=!E&&C.current!==void 0;return l(()=>{ee&&(C.current=void 0)},[ee]),l(()=>{let e=C.current;if(g===Xc){e?.unsubscribe(),C.current=void 0;return}let n=C.current?.subscriptionOptions;!e||e.arg!==g?(e?.unsubscribe(),C.current=m(p(g,{subscriptionOptions:_,forceRefetch:o,...wl(d[t])?{initialPageParam:y,refetchCachedPages:S}:{}}))):_!==n&&e.updateSubscriptionOptions(_)},[m,p,o,g,_,ee,y,S,t]),[C,m,p,_]}function g(t,n){return(a,{skip:s=!1,selectFromResult:c}={})=>{let{select:l}=e.endpoints[t],u=Dl(s?Xc:a),d=(0,x.useRef)(void 0),f=(0,x.useMemo)(()=>o([l(u),(e,t)=>t,e=>u],n,{memoizeOptions:{resultEqualityCheck:ir}}),[l,u]),p=(0,x.useMemo)(()=>c?o([f],c,{devModeChecks:{identityFunctionCheck:`never`}}):f,[f,c]),m=r(e=>p(e,d.current),ir),h=f(i().getState(),d.current);return jl(()=>{d.current=h},[h]),m}}function _(e){(0,x.useEffect)(()=>()=>{u(e),e.current=void 0},[e])}function v(e){if(!e.current)throw Error(Xs(38));return e.current.refetch()}function y(r){let i=(e,t={})=>{let[n]=h(r,e,t);return _(n),(0,x.useMemo)(()=>({refetch:()=>v(n)}),[n])},a=({refetchOnReconnect:i,refetchOnFocus:a,pollingInterval:o=0,skipPollingIfUnfocused:s=!1}={})=>{let{initiate:c}=e.endpoints[r],d=n(),[f,p]=(0,x.useState)(El),m=(0,x.useRef)(void 0),h=Ol({refetchOnReconnect:i,refetchOnFocus:a,pollingInterval:o,skipPollingIfUnfocused:s});l(()=>{h!==m.current?.subscriptionOptions&&m.current?.updateSubscriptionOptions(h)},[h]);let g=(0,x.useRef)(h);l(()=>{g.current=h},[h]);let _=(0,x.useCallback)(function(e,n=!1){let r;return t(()=>{u(m),m.current=r=d(c(e,{subscriptionOptions:g.current,forceRefetch:!n})),p(e)}),r},[d,c]),v=(0,x.useCallback)(()=>{m.current?.queryCacheKey&&d(e.internalActions.removeQueryResult({queryCacheKey:m.current?.queryCacheKey}))},[d]);return(0,x.useEffect)(()=>()=>{u(m)},[]),(0,x.useEffect)(()=>{f!==El&&!m.current&&_(f,!0)},[f,_]),(0,x.useMemo)(()=>[_,f,{reset:v}],[_,f,v])},o=g(r,f);return{useQueryState:o,useQuerySubscription:i,useLazyQuerySubscription:a,useLazyQuery(e){let[t,n,{reset:r}]=a(e),i=o(n,{...e,skip:n===El}),s=(0,x.useMemo)(()=>({lastArg:n}),[n]);return(0,x.useMemo)(()=>[t,{...i,reset:r},s],[t,i,r,s])},useQuery(e,t){let n=i(e,t),r=o(e,{selectFromResult:e===Xc||t?.skip?void 0:Ml,...t});return(0,x.useDebugValue)(Nl(r,...Pl)),(0,x.useMemo)(()=>({...r,...n}),[r,n])}}}function b(e){let n=(n,r={})=>{let[i,a,o,s]=h(e,n,r),c=(0,x.useRef)(s);l(()=>{c.current=s},[s]);let d=r.refetchCachedPages,f=Ol(d),p=(0,x.useCallback)(function(e,n){let r;return t(()=>{u(i),i.current=r=a(o(e,{subscriptionOptions:c.current,direction:n}))}),r},[i,a,o]);_(i);let m=Dl(r.skip?Xc:n),g=(0,x.useCallback)(e=>{if(!i.current)throw Error(Xs(38));let t={refetchCachedPages:e?.refetchCachedPages??f};return i.current.refetch(t)},[i,f]);return(0,x.useMemo)(()=>({trigger:p,refetch:g,fetchNextPage:()=>p(m,`forward`),fetchPreviousPage:()=>p(m,`backward`)}),[g,p,m])},r=g(e,p);return{useInfiniteQueryState:r,useInfiniteQuerySubscription:n,useInfiniteQuery(e,t){let{refetch:i,fetchNextPage:a,fetchPreviousPage:o}=n(e,t),s=r(e,{selectFromResult:e===Xc||t?.skip?void 0:Ml,...t});return(0,x.useDebugValue)(Nl(s,...Pl,`hasNextPage`,`hasPreviousPage`)),(0,x.useMemo)(()=>({...s,fetchNextPage:a,fetchPreviousPage:o,refetch:i}),[s,a,o,i])}}}function S(i){return({selectFromResult:a,fixedCacheKey:s}={})=>{let{select:c,initiate:l}=e.endpoints[i],u=n(),[d,f]=(0,x.useState)();(0,x.useEffect)(()=>()=>{d?.arg.fixedCacheKey||d?.reset()},[d]);let p=(0,x.useCallback)(function(e){let t=u(l(e,{fixedCacheKey:s}));return f(t),t},[u,l,s]),{requestId:m}=d||{},h=(0,x.useMemo)(()=>c({fixedCacheKey:s,requestId:d?.requestId}),[s,d,c]),g=r((0,x.useMemo)(()=>a?o([h],a):h,[a,h]),ir),_=s==null?d?.arg.originalArgs:void 0,v=(0,x.useCallback)(()=>{t(()=>{d&&f(void 0),s&&u(e.internalActions.removeMutationResult({requestId:m,fixedCacheKey:s}))})},[u,s,d,m]);(0,x.useDebugValue)(Nl(g,...Pl,`endpointName`));let y=(0,x.useMemo)(()=>({...g,originalArgs:_,reset:v}),[g,_,v]);return(0,x.useMemo)(()=>[p,y],[p,y])}}}var Il=Symbol(),Ll=rl(_l(),(({batch:e=br,hooks:t={useDispatch:gr,useSelector:yr,useStore:mr},createSelector:n=Wo,unstable__sideEffectsInRender:r=!1,...i}={})=>({name:Il,init(i,{serializeQueryArgs:a},o){let s=i,{buildQueryHooks:c,buildInfiniteQueryHooks:l,buildMutationHook:u,usePrefetch:d}=Fl({api:i,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:r,createSelector:n},serializeQueryArgs:a,context:o});return Tl(s,{usePrefetch:d}),Tl(o,{batch:e}),{injectEndpoint(e,t){if(Sl(t)){let{useQuery:t,useLazyQuery:n,useLazyQuerySubscription:r,useQueryState:a,useQuerySubscription:o}=c(e);Tl(s.endpoints[e],{useQuery:t,useLazyQuery:n,useLazyQuerySubscription:r,useQueryState:a,useQuerySubscription:o}),i[`use${vl(e)}Query`]=t,i[`useLazy${vl(e)}Query`]=n}if(Cl(t)){let t=u(e);Tl(s.endpoints[e],{useMutation:t}),i[`use${vl(e)}Mutation`]=t}else if(wl(t)){let{useInfiniteQuery:t,useInfiniteQuerySubscription:n,useInfiniteQueryState:r}=l(e);Tl(s.endpoints[e],{useInfiniteQuery:t,useInfiniteQuerySubscription:n,useInfiniteQueryState:r}),i[`use${vl(e)}InfiniteQuery`]=t}}}}}))()),Rl=[...[{content:`# Урок 1 — Знакомство с JavaScript: что такое JavaScript, Node.js и как запускать скрипты

# 1. Что такое JavaScript

## Простое объяснение

**JavaScript — это язык программирования.**

На нём пишут инструкции, которые выполняет компьютер.

JavaScript используется в трёх основных местах:

1. **В браузере** (сайты)
2. **На сервере** (через Node.js)
3. **В приложениях и макросах** (например в таблицах)

В вашем случае JavaScript используется для **автоматизации действий в таблицах**.

То есть вы будете писать код, который:

* читает данные из таблицы
* делает вычисления
* записывает результат

---

## Аналогия

Если Excel — это **калькулятор с таблицами**,
то JavaScript — это **способ написать инструкцию для автоматической обработки таблицы**.

Например:

> Возьми все значения в столбце
> посчитай сумму
> запиши результат в другую ячейку

Вместо ручной работы это делает программа.

---

# 2. Что такое Node.js

## Простое объяснение

**Node.js — это программа, которая умеет запускать JavaScript вне браузера.**

То есть она позволяет запускать \`.js\` файлы прямо на компьютере.

Фактически:

\`\`\`
JavaScript = язык
Node.js = программа, которая выполняет этот язык
\`\`\`

---

## Аналогия

Представьте:

* рецепт — это JavaScript
* повар — это Node.js

Без повара рецепт просто текст.

Node.js — это "повар", который **выполняет инструкции JavaScript**.

---

# 3. Что такое JS-файл

Код обычно хранится в файлах с расширением:

\`\`\`
.js
\`\`\`

Пример файла:

\`\`\`
test.js
\`\`\`

Содержимое:

\`\`\`javascript
console.log("Привет");
\`\`\`

---

# 4. Что такое VS Code

**VS Code** — это редактор кода.

В нём удобно:

* писать код
* запускать программы
* проверять ошибки

Главное, что нам понадобится — **терминал**.

---

# 5. Что такое терминал

Терминал — это окно, куда можно вводить команды.

Пример команды:

\`\`\`
node test.js
\`\`\`

Она означает:

> Node.js, запусти файл test.js

---

# 6. Как запустить JavaScript-скрипт

## Шаг 1 — установить Node.js

Скачать:

[https://nodejs.org](https://nodejs.org)

После установки появится команда:

\`\`\`
node
\`\`\`

---

## Шаг 2 — создать файл

Создайте файл:

\`\`\`
test.js
\`\`\`

Напишите код:

\`\`\`javascript
console.log("JavaScript работает!");
\`\`\`

---

## Шаг 3 — открыть папку в VS Code

В VS Code:

\`\`\`
File → Open Folder
\`\`\`

Выберите папку с файлом.

---

## Шаг 4 — открыть терминал

В VS Code:

\`\`\`
Terminal → New Terminal
\`\`\`

Откроется окно терминала.

---

## Шаг 5 — запустить программу

Введите команду:

\`\`\`
node test.js
\`\`\`

Результат:

\`\`\`
JavaScript работает!
\`\`\`

---

# 7. Второй пример

Файл:

\`\`\`
calc.js
\`\`\`

Код:

\`\`\`javascript
let a = 10;
let b = 20;

let result = a + b;

console.log(result);
\`\`\`

---

## Разбор строк

\`\`\`
let a = 10;
\`\`\`

создаём переменную \`a\`

\`\`\`
let b = 20;
\`\`\`

создаём переменную \`b\`

\`\`\`
let result = a + b;
\`\`\`

складываем значения

\`\`\`
console.log(result);
\`\`\`

выводим результат.

---

## Запуск

\`\`\`
node calc.js
\`\`\`

Результат:

\`\`\`
30
\`\`\`

---

# 8. Как понять, что Node.js установлен

В терминале введите:

\`\`\`
node -v
\`\`\`

Если всё работает — появится версия:

\`\`\`
v20.10.0
\`\`\`

---

# 9. Частые ошибки новичков

### Ошибка 1

\`\`\`
node: command not found
\`\`\`

Node.js не установлен.

---

### Ошибка 2

\`\`\`
Cannot find module
\`\`\`

Файл написан неправильно.

Например:

\`\`\`
node tes.js
\`\`\`

а файл называется

\`\`\`
test.js
\`\`\`

---

### Ошибка 3

Запуск из неправильной папки.

Терминал должен находиться **в той же папке, где файл**.

---

# Практика

## Задание 1

Создайте файл:

\`\`\`
hello.js
\`\`\`

Напишите:

\`\`\`javascript
console.log("Hello JavaScript");
\`\`\`

Запустите через терминал.

---

## Задание 2

Создайте файл:

\`\`\`
math.js
\`\`\`

Напишите программу:

* создаёт 2 числа
* складывает их
* выводит результат

---

## Задание 3 (чуть сложнее)

Напишите программу, которая считает:

\`\`\`
100 * 5 + 20
\`\`\`

---

# Разбор решений

### Задание 1

\`\`\`javascript
console.log("Hello JavaScript");
\`\`\`

---

### Задание 2

\`\`\`javascript
let a = 10;
let b = 5;

let result = a + b;

console.log(result);
\`\`\`

---

### Задание 3

\`\`\`javascript
let result = 100 * 5 + 20;

console.log(result);
\`\`\`

---

# Главное, что нужно запомнить

1️⃣ **JavaScript** — язык программирования
2️⃣ **Node.js** — программа, которая запускает JavaScript
3️⃣ Код хранится в файлах **.js**
4️⃣ Запуск через терминал:

\`\`\`
node имя_файла.js
\`\`\``,fileName:`(1) Знакомство с JavaScript.md`,order:1,slug:`1-знакомство-с-javascript`,title:`Знакомство с JavaScript`,url:`/lessons/(1)%20%D0%97%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%81%D1%82%D0%B2%D0%BE%20%D1%81%20JavaScript.md`},{content:`# Урок 1 — Знакомство с JavaScript: что такое программа и как её читать

## **Простое объяснение**

Программа — это **набор инструкций**, которые компьютер выполняет по порядку.

Компьютер не “думает”. Он:

1. Читает строку
2. Выполняет её
3. Переходит к следующей

JavaScript — это язык, на котором мы пишем эти инструкции.

---

## **Аналогия**

Представьте инструкцию для стажёра:

1. Открой таблицу
2. Возьми значение из ячейки A1
3. Умножь на 2
4. Запиши результат в B1

Если пропустить шаг — результат будет неправильный.
С кодом — так же.

---

## **Первый пример кода**

\`\`\`javascript
console.log("Привет, мир!");
\`\`\`

Разбор:

* \`console.log()\` — команда "вывести сообщение"
* \`"Привет, мир!"\` — текст
* \`;\` — конец инструкции

Компьютер просто выводит текст.

---

Пример №2:

\`\`\`javascript
console.log(2 + 3);
\`\`\`

Разбор:

* \`2 + 3\` — вычисление
* \`console.log()\` — показать результат
* Результат будет 5

---

## **Главное правило**

Код читается сверху вниз.
Каждая строка — это действие.

---

## **Практика**

### Задание 1 (простое)

Напишите код, который выведет число 100.

---

### Задание 2 (чуть сложнее)

Выведите результат выражения 50 + 25.

---

### Задание 3 (на понимание)

Что будет выведено?

\`\`\`javascript
console.log(10);
console.log(20);
\`\`\`

---

## **Разбор решений**

**1**

\`\`\`javascript
console.log(100);
\`\`\`

**2**

\`\`\`javascript
console.log(50 + 25);
\`\`\`

**3**

Будет выведено:

\`\`\`
10
20
\`\`\`

Потому что строки выполняются по порядку.`,fileName:`(1) Знакомство с JavaScript (доп).md`,order:1,slug:`1-знакомство-с-javascript-доп`,title:`Знакомство с JavaScript (доп)`,url:`/lessons/(1)%20%D0%97%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%81%D1%82%D0%B2%D0%BE%20%D1%81%20JavaScript%20(%D0%B4%D0%BE%D0%BF).md`},{content:`# Урок 1 — Переменные и типы данных

Этот урок объясняет **одну из самых базовых вещей в программировании** — где хранить данные и какие вообще бывают данные.

---

# 1. Что такое переменная

## Простое объяснение

**Переменная — это место в памяти компьютера, где хранится значение.**

Проще говоря — это **коробка с именем**, в которой лежит какое-то значение.

---

## Аналогия

Представьте стол с папками.

На каждой папке написано имя:

\`\`\`
Зарплата
Имя сотрудника
Количество
\`\`\`

Внутри лежат данные.

В JavaScript это выглядит так:

\`\`\`javascript
let salary = 70000;
\`\`\`

Мы создали "папку" с именем **salary** и положили туда число **70000**.

---

# 2. Как создать переменную

Переменная создаётся с помощью слова **let**.

Пример:

\`\`\`javascript
let price = 100;
\`\`\`

Разбор строки:

\`\`\`
let      — команда создать переменную
price    — имя переменной
=        — положить значение
100      — значение
;        — конец инструкции
\`\`\`

---

# 3. Как использовать переменную

После создания переменной её можно использовать.

\`\`\`javascript
let price = 100;

console.log(price);
\`\`\`

Разбор:

\`\`\`
price хранит значение 100
console.log() выводит значение на экран
\`\`\`

Результат:

\`\`\`
100
\`\`\`

---

# 4. Переменную можно менять

Название "переменная" означает, что значение можно изменить.

Пример:

\`\`\`javascript
let salary = 50000;

salary = 60000;

console.log(salary);
\`\`\`

Разбор:

\`\`\`
создали переменную salary
потом поменяли её значение
вывели результат
\`\`\`

Результат:

\`\`\`
60000
\`\`\`

---

# 5. Типы данных

В переменных могут храниться **разные типы данных**.

Тип данных — это **вид значения**.

Например:

\`\`\`
число
текст
да/нет
\`\`\`

---

# 6. Тип данных — число (Number)

Число используется для вычислений.

Пример:

\`\`\`javascript
let amount = 500;
let price = 200;
\`\`\`

Можно делать вычисления:

\`\`\`javascript
let total = amount + price;

console.log(total);
\`\`\`

Результат:

\`\`\`
700
\`\`\`

---

# 7. Тип данных — строка (String)

Строка — это **текст**.

Текст всегда пишется в кавычках.

Пример:

\`\`\`javascript
let name = "Иван";
\`\`\`

Можно вывести:

\`\`\`javascript
console.log(name);
\`\`\`

Результат:

\`\`\`
Иван
\`\`\`

---

# 8. Тип данных — логическое значение (Boolean)

Этот тип хранит **да или нет**.

Есть только два значения:

\`\`\`
true  — да
false — нет
\`\`\`

Пример:

\`\`\`javascript
let isManager = true;
\`\`\`

Можно вывести:

\`\`\`javascript
console.log(isManager);
\`\`\`

Результат:

\`\`\`
true
\`\`\`

---

# 9. Пример программы

\`\`\`javascript
let employeeName = "Иван";
let salary = 80000;
let isManager = false;

console.log(employeeName);
console.log(salary);
console.log(isManager);
\`\`\`

Разбор:

\`\`\`
создаём три переменные
в каждой хранится разный тип данных
выводим их на экран
\`\`\`

---

# Практика

## Задание 1

Создайте переменную:

\`\`\`
salary
\`\`\`

со значением:

\`\`\`
70000
\`\`\`

И выведите её.

---

## Задание 2

Создайте переменную:

\`\`\`
employeeName
\`\`\`

и запишите туда своё имя.

---

## Задание 3

Создайте переменную:

\`\`\`
isRemote
\`\`\`

со значением:

\`\`\`
true
\`\`\`

---

# Разбор решений

### Задание 1

\`\`\`javascript
let salary = 70000;

console.log(salary);
\`\`\`

---

### Задание 2

\`\`\`javascript
let employeeName = "Павел";

console.log(employeeName);
\`\`\`

---

### Задание 3

\`\`\`javascript
let isRemote = true;

console.log(isRemote);
\`\`\`

---

# Дополнительная информация — какие ещё бывают типы данных

Мы изучили **три основных типа**, которые используются чаще всего:

\`\`\`
Number
String
Boolean
\`\`\`

Но в JavaScript есть и другие типы.

Их делят на **две группы**.

---

# 1. Примитивные типы (простые)

Это самые базовые типы данных.

Полный список:

\`\`\`
Number
String
Boolean
Null
Undefined
Symbol
BigInt
\`\`\`

Кратко:

\`\`\`
Number      — число
String      — текст
Boolean     — true или false
Null        — пустое значение
Undefined   — значение не задано
Symbol      — специальный уникальный идентификатор
BigInt      — очень большие числа
\`\`\`

В повседневной работе чаще всего используются:

\`\`\`
Number
String
Boolean
Null
Undefined
\`\`\`

---

# 2. Сложные типы (объектные)

Это более сложные структуры данных.

Основные:

\`\`\`
Object
Array
Function
Date
Map
Set
\`\`\`

Например:

\`\`\`
Object  — набор свойств
Array   — список значений
Function — блок кода
\`\`\`

В следующих уроках курса мы будем использовать:

\`\`\`
Array
Function
\`\`\`

---

# Главное, что нужно запомнить

Переменная — это **имя для хранения данных**.

Простейшие типы данных:

\`\`\`
Number
String
Boolean
\`\`\`

Но в JavaScript существует **несколько других типов**, которые используются в более сложных программах.`,fileName:`(1) Переменные и типы данных.md`,order:1,slug:`1-переменные-и-типы-данных`,title:`Переменные и типы данных`,url:`/lessons/(1)%20%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D1%82%D0%B8%D0%BF%D1%8B%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.md`},{content:`# Урок 2 — Операторы и выражения

## Простое объяснение

Операторы — это действия.

Выражение — это комбинация значений и операторов, которая даёт результат.

---

## **Аналогия**

Excel:

\`\`\`id="k2m9x1"
=A1 + B1 * 2
\`\`\`

JavaScript:

\`\`\`javascript id="z8d4pl"
let result = 10 + 5 * 2;
\`\`\`

👉 Это выражение

---

## **1. Арифметические операторы**

| Оператор | Значение           |
| -------- | ------------------ |
| \`+\`      | сложение           |
| \`-\`      | вычитание          |
| \`*\`      | умножение          |
| \`/\`      | деление            |
| \`%\`      | остаток от деления |

---

### Пример

\`\`\`javascript id="p3r8dn"
let price = 200;
let quantity = 3;

let total = price * quantity;

console.log(total);
\`\`\`

---

## **2. Оператор остатка (%)**

\`\`\`javascript id="q1w9tm"
let result = 10 % 3;

console.log(result); // 1
\`\`\`

👉 полезен для проверок (например, чётное число)

---

## **3. Операторы сравнения**

| Оператор | Значение         |
| -------- | ---------------- |
| \`>\`      | больше           |
| \`<\`      | меньше           |
| \`>=\`     | больше или равно |
| \`<=\`     | меньше или равно |
| \`===\`    | строго равно     |
| \`!==\`    | не равно         |

---

### Пример

\`\`\`javascript id="r5v2jk"
let a = 10;
let b = 5;

console.log(a > b); // true
\`\`\`

---

## **4. Логические операторы**

| Оператор | Значение |   |     |
| -------- | -------- | - | --- |
| \`&&\`     | И        |   |     |
| \`        |          | \` | ИЛИ |
| \`!\`      | НЕ       |   |     |

---

### Пример

\`\`\`javascript id="n8c3wx"
let age = 25;

let result = age > 18 && age < 60;

console.log(result);
\`\`\`

---

## **5. Операторы присваивания**

\`\`\`javascript id="m4k2qs"
let x = 10;

x = x + 5;   // 15
x += 5;      // 20
x -= 3;      // 17
\`\`\`

👉 сокращённая запись

---

## **6. Инкремент и декремент**

\`\`\`javascript id="t9v1pe"
let count = 1;

count++; // 2
count--; // 1
\`\`\`

---

## **7. Приоритет операций**

\`\`\`javascript id="u7k3zw"
let result = 10 + 5 * 2;
\`\`\`

👉 сначала умножение → потом сложение

Если нужно изменить порядок:

\`\`\`javascript id="y2p6df"
let result = (10 + 5) * 2;
\`\`\`

---

## **8. Что такое выражение**

Выражение — это всё, что возвращает значение:

\`\`\`javascript id="e5m8zn"
10 + 5
a > b
price * quantity
\`\`\`

---

## **9. Комбинированные выражения**

\`\`\`javascript id="w1r7kt"
let total = price * quantity + tax;
\`\`\`

---

## **10. Практические кейсы**

### Пример 1 — расчёт суммы

\`\`\`javascript id="f3q9lx"
let total = 150 * 4;
\`\`\`

---

### Пример 2 — расчёт налога

\`\`\`javascript id="b8n2dp"
let tax = 1000 * 0.2;
\`\`\`

---

### Пример 3 — проверка условия

\`\`\`javascript id="c6v4mr"
let salary = 80000;

let isHigh = salary > 100000;
\`\`\`

---

### Пример 4 — проверка чётности

\`\`\`javascript id="g9t2xs"
let number = 10;

let isEven = number % 2 === 0;
\`\`\`

---

## **Практика**

### Задание 1

Посчитайте сумму: 150 × 4

---

### Задание 2

Вычислите налог 20% от 1000

---

### Задание 3

Есть зарплата 80000
После премии +10000

---

### Задание 4

Проверьте: число 7 чётное или нет

---

### Задание 5

Проверьте: возраст от 18 до 60

---

## **Разбор (пример)**

\`\`\`javascript id="j5w8pq"
let total = 150 * 4;

let tax = 1000 * 0.2;

let salary = 80000;
salary += 10000;
\`\`\`

---

## **Типовые ошибки**

| Ошибка                 | Причина                |
| ---------------------- | ---------------------- |
| \`==\` вместо \`===\`      | приведение типов       |
| забыли скобки          | неправильный результат |
| путаница в приоритетах | логическая ошибка      |
| неверный оператор      | ошибка вычисления      |

---

## **Контроль**

Вы должны уметь:

✔ использовать арифметические операторы
✔ сравнивать значения
✔ использовать логические операторы
✔ строить выражения

---

## **Контрольные вопросы**

1. Что такое выражение?
2. Чем \`===\` отличается от \`==\`?
3. Что делает \`%\`?
4. Как работает \`&&\`?

---

## **Краткий вывод**

* Операторы — это действия
* Выражения — это вычисления
* Они лежат в основе любой логики программы`,fileName:`(2) Операторы и выражения.md`,order:2,slug:`2-операторы-и-выражения`,title:`Операторы и выражения`,url:`/lessons/(2)%20%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B%20%D0%B8%20%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.md`},{content:`# Урок 3 — Условия и ветвление (if, else, switch)

## Простое объяснение

Условие — это проверка.

Если правда — делаем одно.
Если нет — другое.

---

## Аналогия

Если в ячейке больше 100 — написать "Большое значение".
Если нет — "Обычное".

---

## Пример

\`\`\`javascript
let amount = 150;

if (amount > 100) {
  console.log("Большое значение");
} else {
  console.log("Обычное значение");
}
\`\`\`

Разбор:

* \`if\` — если
* \`(amount > 100)\` — проверка
* \`{}\` — блок действий
* \`else\` — иначе

---

## Операторы сравнения

* \`>\` больше
* \`<\` меньше
* \`===\` равно
* \`!==\` не равно

---

## Практика

### Задание 1

Если зарплата больше 100000 — вывести "Высокая".
Иначе — "Обычная".

---

### Задание 2

Если значение равно 0 — вывести "Пусто".

---

### Задание 3

Если количество больше 10 — вывести "Опт".

---

## Разбор

(пример)

\`\`\`javascript
let salary = 120000;

if (salary > 100000) {
  console.log("Высокая");
} else {
  console.log("Обычная");
}
\`\`\`

---

# Дополнение: конструкция \`switch\`

## Простое объяснение

\`switch\` — это альтернатива множественным \`if\`.

Используется, когда нужно проверить **одно значение на несколько вариантов**.

---

## Аналогия

Если в ячейке указано:

* "A" → отлично
* "B" → хорошо
* "C" → нормально

---

## Пример

\`\`\`javascript
let grade = "B";

switch (grade) {
  case "A":
    console.log("Отлично");
    break;

  case "B":
    console.log("Хорошо");
    break;

  case "C":
    console.log("Нормально");
    break;

  default:
    console.log("Неизвестная оценка");
}
\`\`\`

---

## Разбор

* \`switch (grade)\` — проверяем значение переменной
* \`case\` — вариант значения
* \`break\` — остановка выполнения (очень важно!)
* \`default\` — если ни один вариант не подошёл

---

## Важно понимать

Без \`break\` код **провалится дальше**:

\`\`\`javascript
let value = 2;

switch (value) {
  case 1:
    console.log("Один");

  case 2:
    console.log("Два");

  case 3:
    console.log("Три");
}
\`\`\`

👉 Выведет:

\`\`\`
Два
Три
\`\`\`

Почему? Потому что нет \`break\`.

---

## Когда использовать switch

Используй \`switch\`, если:

✔ проверяешь **одно значение**
✔ есть **много вариантов (3+)**
✔ значения фиксированные (строки, числа)

Не используй, если:

❌ сложные условия (\`>\`, \`<\`, логика) → лучше \`if\`

---

## Практика

### Задание 4

Если день недели:

* "Пн" → "Начало недели"
* "Сб" или "Вс" → "Выходной"
* иначе → "Рабочий день"

---

## Пример решения

\`\`\`javascript
let day = "Сб";

switch (day) {
  case "Пн":
    console.log("Начало недели");
    break;

  case "Сб":
  case "Вс":
    console.log("Выходной");
    break;

  default:
    console.log("Рабочий день");
}
\`\`\`

---

# Ключевая мысль

👉 \`if\` — для логики и условий
👉 \`switch\` — для выбора из вариантов`,fileName:`(3) Условия и ветвление (if, else, switch).md`,order:3,slug:`3-условия-и-ветвление-if-else-switch`,title:`Условия и ветвление (if, else, switch)`,url:`/lessons/(3)%20%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%20%D0%B8%20%D0%B2%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20(if%2C%20else%2C%20switch).md`},{content:`# Урок 4 — Циклы

Циклы — это один из самых полезных инструментов в программировании.
Они позволяют **повторять одно и то же действие много раз**.

Без циклов практически невозможно обрабатывать:

* строки таблиц
* списки данных
* массивы значений

---

# 1. Что такое цикл

## Простое объяснение

Цикл — это конструкция, которая **повторяет выполнение кода несколько раз**.

---

## Аналогия

Представьте таблицу с зарплатами сотрудников:

\`\`\`
50000
60000
70000
80000
\`\`\`

Если нужно:

* проверить каждую зарплату
* или посчитать сумму

то нужно **пройти по всем строкам таблицы**.

Цикл делает именно это.

---

# 2. Основной цикл — \`for\`

Это **самый распространённый цикл в JavaScript**.

Именно его чаще всего используют для работы с массивами.

---

## Синтаксис

\`\`\`javascript
for (начало; условие; изменение) {
  код
}
\`\`\`

---

## Пример

\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
\`\`\`

---

## Разбор строки

\`\`\`javascript
let i = 0
\`\`\`

создаём счётчик

\`\`\`
i = 0
\`\`\`

---

\`\`\`javascript
i < 5
\`\`\`

пока условие выполняется — цикл работает.

---

\`\`\`javascript
i++
\`\`\`

увеличиваем значение на 1.

---

## Результат

\`\`\`
0
1
2
3
4
\`\`\`

---

# 3. Цикл \`for\` для массива

Самая частая задача — пройти по массиву.

---

## Пример

\`\`\`javascript
let numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
\`\`\`

---

## Разбор

\`\`\`javascript
let numbers = [10, 20, 30];
\`\`\`

массив значений

---

\`\`\`javascript
numbers.length
\`\`\`

количество элементов в массиве.

---

\`\`\`javascript
numbers[i]
\`\`\`

получаем элемент массива.

---

## Результат

\`\`\`
10
20
30
\`\`\`

---

# 4. Цикл \`while\`

Этот цикл выполняется **пока условие истинно**.

---

## Синтаксис

\`\`\`javascript
while (условие) {
  код
}
\`\`\`

---

## Пример

\`\`\`javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
\`\`\`

---

## Разбор

\`\`\`javascript
let i = 0
\`\`\`

счётчик

---

\`\`\`javascript
while (i < 5)
\`\`\`

пока меньше пяти — цикл работает

---

\`\`\`javascript
i++
\`\`\`

увеличиваем счётчик.

Если этого не сделать — будет **бесконечный цикл**.

---

# 5. Цикл \`do...while\`

Это разновидность \`while\`.

Разница:

\`\`\`
while сначала проверяет условие
do...while сначала выполняет код
\`\`\`

---

## Синтаксис

\`\`\`javascript
do {
  код
} while (условие);
\`\`\`

---

## Пример

\`\`\`javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 3);
\`\`\`

---

## Результат

\`\`\`
0
1
2
\`\`\`

---

# 6. Цикл \`for...of\`

Этот цикл используется **для перебора элементов массива**.

Он проще обычного \`for\`.

---

## Пример

\`\`\`javascript
let numbers = [10, 20, 30];

for (let number of numbers) {
  console.log(number);
}
\`\`\`

---

## Разбор

\`\`\`javascript
number
\`\`\`

каждый элемент массива.

---

\`\`\`javascript
numbers
\`\`\`

массив, по которому идёт перебор.

---

## Результат

\`\`\`
10
20
30
\`\`\`

---

# 7. Цикл \`for...in\`

Этот цикл используется **для перебора свойств объекта**.

Новичкам он почти не нужен, но знать о нём полезно.

---

## Пример

\`\`\`javascript
let numbers = [10, 20, 30];

for (let index in numbers) {
  console.log(index);
}
\`\`\`

---

## Результат

\`\`\`
0
1
2
\`\`\`

Он перебирает **индексы**, а не значения.

---

# 8. Управление циклом

Иногда нужно **прервать цикл или пропустить шаг**.

Для этого используются специальные команды.

---

# \`break\`

Останавливает цикл.

---

## Пример

\`\`\`javascript
for (let i = 0; i < 10; i++) {

  if (i === 5) {
    break;
  }

  console.log(i);
}
\`\`\`

---

## Результат

\`\`\`
0
1
2
3
4
\`\`\`

Цикл остановился на 5.

---

# \`continue\`

Пропускает текущий шаг цикла.

---

## Пример

\`\`\`javascript
for (let i = 0; i < 5; i++) {

  if (i === 2) {
    continue;
  }

  console.log(i);
}
\`\`\`

---

## Результат

\`\`\`
0
1
3
4
\`\`\`

Число 2 пропущено.

---

# 9. Пример практической задачи

Есть массив продаж:

\`\`\`javascript
let sales = [1000, 2000, 1500, 3000];
\`\`\`

Нужно посчитать сумму.

---

## Решение

\`\`\`javascript
let sales = [1000, 2000, 1500, 3000];

let total = 0;

for (let i = 0; i < sales.length; i++) {
  total = total + sales[i];
}

console.log(total);
\`\`\`

---

## Разбор

\`\`\`
создаём переменную суммы
проходим по массиву
добавляем каждое значение
\`\`\`

---

# Практика

## Задание 1

Выведите числа от **1 до 5** с помощью цикла \`for\`.

---

## Задание 2

Есть массив:

\`\`\`javascript
let salaries = [50000, 60000, 70000];
\`\`\`

Выведите каждую зарплату.

---

## Задание 3

Посчитайте сумму массива:

\`\`\`javascript
let numbers = [5, 10, 15];
\`\`\`

---

# Разбор решений

### Задание 1

\`\`\`javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
\`\`\`

---

### Задание 2

\`\`\`javascript
let salaries = [50000, 60000, 70000];

for (let salary of salaries) {
  console.log(salary);
}
\`\`\`

---

### Задание 3

\`\`\`javascript
let numbers = [5, 10, 15];

let sum = 0;

for (let n of numbers) {
  sum = sum + n;
}

console.log(sum);
\`\`\`

---

# Какой цикл использовать на практике

В реальной работе чаще всего используют:

\`\`\`
for
for...of
\`\`\`

Реже:

\`\`\`
while
do...while
\`\`\`

И почти никогда в простых задачах:

\`\`\`
for...in
\`\`\`

---

# Главное, что нужно запомнить

Цикл нужен, когда нужно:

\`\`\`
повторить действие
обработать список
пройти по таблице
посчитать значения
\`\`\`

Самый универсальный цикл:

\`\`\`javascript
for (let i = 0; i < array.length; i++)
\`\`\``,fileName:`(4) Циклы (for, while, do...while).md`,order:4,slug:`4-циклы-for-while-do-while`,title:`Циклы (for, while, do...while)`,url:`/lessons/(4)%20%D0%A6%D0%B8%D0%BA%D0%BB%D1%8B%20(for%2C%20while%2C%20do...while).md`},{content:`# Урок 5 — Функции — основа программы

## **Простое объяснение**

Функция — это кусок кода, который можно запускать много раз.

Она принимает данные → обрабатывает → возвращает результат.

---

## **Аналогия**

Формула в Excel:

\`\`\`
=SUM(A1:A5)
\`\`\`

Ты задаёшь вход → получаешь результат.

---

## **Базовый пример**

\`\`\`javascript
function sum(a, b) {
  return a + b;
}

let result = sum(10, 20);
console.log(result);
\`\`\`

---

## **Разбор**

* \`function\` — объявление функции
* \`sum\` — имя функции
* \`a, b\` — параметры (входные данные)
* \`return\` — вернуть результат
* \`sum(10, 20)\` — вызов функции

---

## **1. Функция без return**

\`\`\`javascript
function sayHello() {
  console.log("Привет");
}

sayHello();
\`\`\`

👉 Такая функция **ничего не возвращает**, только выполняет действие.

---

## **2. Параметры и аргументы**

\`\`\`javascript
function greet(name) {
  console.log("Привет, " + name);
}

greet("Алексей");
\`\`\`

* \`name\` — параметр
* \`"Алексей"\` — аргумент

---

## **3. Значения по умолчанию**

\`\`\`javascript
function greet(name = "Гость") {
  console.log("Привет, " + name);
}

greet(); // Привет, Гость
\`\`\`

---

## **4. Функции с несколькими действиями**

\`\`\`javascript
function calculateTotal(price, tax) {
  let total = price + price * tax;
  return total;
}
\`\`\`

---

## **5. Функция внутри функции**

\`\`\`javascript
function outer() {
  function inner() {
    console.log("Внутренняя функция");
  }

  inner();
}
\`\`\`

---

## **6. Область видимости (важно)**

\`\`\`javascript
function test() {
  let x = 10;
}

console.log(x); // ошибка
\`\`\`

👉 Переменные внутри функции **не видны снаружи**

---

## **7. Стрелочные функции (современный JS)**

\`\`\`javascript
const sum = (a, b) => {
  return a + b;
};
\`\`\`

Короткая запись:

\`\`\`javascript
const sum = (a, b) => a + b;
\`\`\`

---

## **8. Когда использовать функции**

Используй функции, если:

✔ код повторяется
✔ нужно упростить логику
✔ нужно разделить программу на части

---

## **9. Практические кейсы (реальный уровень)**

### Пример 1 — расчёт зарплаты

\`\`\`javascript
function calculateSalary(base, bonus) {
  return base + bonus;
}
\`\`\`

---

### Пример 2 — проверка доступа

\`\`\`javascript
function checkAccess(role) {
  if (role === "admin") {
    return true;
  }
  return false;
}
\`\`\`

---

### Пример 3 — работа с числами

\`\`\`javascript
function isEven(number) {
  return number % 2 === 0;
}
\`\`\`

---

## **Практика**

### Задание 1

Создайте функцию умножения двух чисел

---

### Задание 2

Создайте функцию расчёта налога 20%

---

### Задание 3

Создайте функцию, которая проверяет — число чётное или нет

---

### Задание 4

Создайте функцию, которая принимает имя и возраст и выводит строку:
"Ивану 30 лет"

---

## **Разбор (пример)**

\`\`\`javascript
function multiply(a, b) {
  return a * b;
}
\`\`\`

---

## **Типовые ошибки**

| Ошибка                 | Причина                        |
| ---------------------- | ------------------------------ |
| забыли \`return\`        | функция возвращает \`undefined\` |
| неправильные параметры | ошибка в логике                |
| глобальные переменные  | трудно отлаживать              |
| дублирование кода      | нет функций                    |

---

## **Контроль**

Вы должны уметь:

✔ создавать функции
✔ передавать параметры
✔ возвращать значения
✔ использовать стрелочные функции

---

## **Контрольные вопросы**

1. Что делает \`return\`?
2. Чем функция отличается от переменной?
3. Что будет без \`return\`?
4. Когда использовать стрелочные функции?

---

## **Краткий вывод**

* Функции — основа любого кода
* Они уменьшают дублирование
* Делают код понятным и управляемым`,fileName:`(5) Функции — основа программы.md`,order:5,slug:`5-функции-основа-программы`,title:`Функции — основа программы`,url:`/lessons/(5)%20%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%E2%80%94%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B.md`},{content:`# Урок 6 — Массивы**

## **Простое объяснение**

Массив — это список значений.

Позволяет хранить много данных в одной переменной.

---

## **Аналогия**

Столбец в таблице:

\`\`\`id="k7m3r1"
100
200
300
\`\`\`

---

## **Создание массива**

\`\`\`javascript id="m9k2za"
let prices = [100, 200, 300];
\`\`\`

---

## **Получение значения**

\`\`\`javascript id="3n6jkl"
console.log(prices[0]);
\`\`\`

👉 Важно: отсчёт начинается с **0**

---

## **1. Изменение массива**

\`\`\`javascript id="w8tq9d"
let prices = [100, 200, 300];

prices[1] = 500;

console.log(prices); // [100, 500, 300]
\`\`\`

---

## **2. Добавление элементов**

### В конец

\`\`\`javascript id="zq4mpt"
prices.push(400);
\`\`\`

### В начало

\`\`\`javascript id="7d2rxy"
prices.unshift(50);
\`\`\`

---

## **3. Удаление элементов**

### С конца

\`\`\`javascript id="p8x1vk"
prices.pop();
\`\`\`

### С начала

\`\`\`javascript id="q2m9ne"
prices.shift();
\`\`\`

---

## **4. Длина массива**

\`\`\`javascript id="t5v8ab"
console.log(prices.length);
\`\`\`

---

## **5. Перебор массива (цикл)**

\`\`\`javascript id="h4k2sd"
let prices = [100, 200, 300];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
\`\`\`

---

## **6. Упрощённый перебор**

\`\`\`javascript id="c9x7qp"
for (let price of prices) {
  console.log(price);
}
\`\`\`

---

## **7. Метод map (изменение данных)**

\`\`\`javascript id="b2r6wu"
let prices = [100, 200, 300];

let newPrices = prices.map(p => p * 1.2);

console.log(newPrices);
\`\`\`

👉 Создаёт новый массив

---

## **8. Метод filter (фильтрация)**

\`\`\`javascript id="g7y1fk"
let prices = [100, 200, 300];

let filtered = prices.filter(p => p > 150);

console.log(filtered);
\`\`\`

---

## **9. Метод find (поиск)**

\`\`\`javascript id="x8n3qw"
let prices = [100, 200, 300];

let found = prices.find(p => p > 150);

console.log(found);
\`\`\`

👉 Вернёт первое найденное значение

---

## **10. Метод reduce (сумма)**

\`\`\`javascript id="v5k2ds"
let prices = [100, 200, 300];

let sum = prices.reduce((acc, p) => acc + p, 0);

console.log(sum);
\`\`\`

---

## **11. Когда использовать массивы**

✔ список значений
✔ работа с данными
✔ аналитика
✔ обработка таблиц

---

## **12. Практические кейсы**

### Пример 1 — сумма зарплат

\`\`\`javascript id="n4t8mz"
let salaries = [50000, 60000, 70000];

let total = salaries.reduce((acc, s) => acc + s, 0);
\`\`\`

---

### Пример 2 — фильтр сотрудников

\`\`\`javascript id="j7f3la"
let ages = [20, 35, 40, 18];

let adults = ages.filter(a => a >= 18);
\`\`\`

---

### Пример 3 — увеличение цен

\`\`\`javascript id="e6r1kp"
let prices = [100, 200, 300];

let newPrices = prices.map(p => p * 1.1);
\`\`\`

---

## **Практика**

### Задание 1

Создайте массив из 3 зарплат

---

### Задание 2

Выведите второе значение

---

### Задание 3

Добавьте новое значение в конец

---

### Задание 4

Найдите сумму всех значений

---

### Задание 5

Отфильтруйте значения больше 100

---

## **Разбор (пример)**

\`\`\`javascript id="s8y4mf"
let salaries = [50000, 60000, 70000];

console.log(salaries[1]);
\`\`\`

---

## **Типовые ошибки**

| Ошибка                   | Причина             |
| ------------------------ | ------------------- |
| индекс не с 0            | путаница            |
| забыли \`.length\`         | цикл ломается       |
| изменили исходный массив | неожиданные баги    |
| неправильный метод       | путаница map/filter |

---

## **Контроль**

Вы должны уметь:

✔ создавать массивы
✔ получать и менять элементы
✔ использовать методы (\`map\`, \`filter\`, \`reduce\`)
✔ перебирать массив

---

## **Контрольные вопросы**

1. С какого числа начинается индекс?
2. Чем \`map\` отличается от \`filter\`?
3. Что делает \`reduce\`?
4. Как узнать длину массива?

---

## **Краткий вывод**

* Массив — базовая структура данных
* Позволяет работать со списками
* Методы делают код кратким и мощным`,fileName:`(6) Массивы.md`,order:6,slug:`6-массивы`,title:`Массивы`,url:`/lessons/(6)%20%D0%9C%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D1%8B.md`},{content:`# Урок 6 — Объекты

## **Простое объяснение**

Объект — это набор данных с именами.

Он хранит значения в формате:

👉 **ключ → значение**

---

## **Аналогия**

Карточка сотрудника:

\`\`\`id="k3x1qa"
Имя: Иван
Возраст: 30
Должность: инженер
\`\`\`

---

## **Создание объекта**

\`\`\`javascript
let user = {
  name: "Иван",
  age: 30,
  job: "инженер"
};
\`\`\`

---

## **Разбор**

* \`user\` — объект
* \`name\`, \`age\`, \`job\` — ключи
* \`"Иван"\`, \`30\` — значения

---

## **1. Получение значения**

\`\`\`javascript
console.log(user.name);
\`\`\`

или

\`\`\`javascript
console.log(user["age"]);
\`\`\`

---

## **2. Изменение значения**

\`\`\`javascript
user.age = 31;
\`\`\`

---

## **3. Добавление нового свойства**

\`\`\`javascript
user.salary = 100000;
\`\`\`

---

## **4. Удаление свойства**

\`\`\`javascript
delete user.job;
\`\`\`

---

## **5. Объект с разными типами данных**

\`\`\`javascript
let product = {
  name: "Телефон",
  price: 20000,
  inStock: true
};
\`\`\`

---

## **6. Вложенные объекты**

\`\`\`javascript
let user = {
  name: "Иван",
  address: {
    city: "Москва",
    street: "Ленина"
  }
};

console.log(user.address.city);
\`\`\`

---

## **7. Массив объектов (очень важно)**

\`\`\`javascript
let users = [
  { name: "Иван", age: 30 },
  { name: "Анна", age: 25 }
];
\`\`\`

---

## **8. Перебор объектов в массиве**

\`\`\`javascript
for (let user of users) {
  console.log(user.name);
}
\`\`\`

---

## **9. Методы объекта (функции внутри)**

\`\`\`javascript
let user = {
  name: "Иван",
  sayHello: function() {
    console.log("Привет!");
  }
};

user.sayHello();
\`\`\`

---

## **10. Ключевое слово this**

\`\`\`javascript
let user = {
  name: "Иван",
  greet: function() {
    console.log("Привет, " + this.name);
  }
};
\`\`\`

👉 \`this\` — ссылка на текущий объект

---

## **11. Когда использовать объекты**

✔ хранение структурированных данных
✔ работа с сущностями (человек, товар, документ)
✔ основа API и JSON

---

## **12. Практические кейсы**

### Пример 1 — сотрудник

\`\`\`javascript
let employee = {
  name: "Иван",
  salary: 80000
};
\`\`\`

---

### Пример 2 — проверка статуса

\`\`\`javascript
let permit = {
  status: "danger"
};

let isDanger = permit.status === "danger";
\`\`\`

---

### Пример 3 — список объектов

\`\`\`javascript
let permits = [
  { status: "ok" },
  { status: "danger" },
  { status: "ok" }
];
\`\`\`

---

## **Практика**

### Задание 1

Создайте объект с именем и возрастом

---

### Задание 2

Выведите имя

---

### Задание 3

Добавьте поле "зарплата"

---

### Задание 4

Создайте массив из 3 объектов

---

### Задание 5

Выведите все имена из массива

---

## **Разбор (пример)**

\`\`\`javascript
let user = {
  name: "Иван",
  age: 30
};

console.log(user.name);
\`\`\`

---

## **Типовые ошибки**

| Ошибка                            | Причина               |
| --------------------------------- | --------------------- |
| забыли запятую                    | синтаксис             |
| обращение к несуществующему ключу | \`undefined\`           |
| путаница \`.\` и \`[]\`               | ошибка доступа        |
| потеря \`this\`                     | неправильный контекст |

---

## **Контроль**

Вы должны уметь:

✔ создавать объекты
✔ получать и изменять данные
✔ работать с массивом объектов
✔ использовать методы

---

## **Контрольные вопросы**

1. Что такое объект?
2. Как получить значение?
3. Что делает \`this\`?
4. Чем объект отличается от массива?

---

## **Краткий вывод**

* Объекты — основа структур данных
* Используются везде (API, базы, фронтенд)
* Позволяют описывать реальные сущности`,fileName:`(7) Объекты.md`,order:7,slug:`7-объекты`,title:`Объекты`,url:`/lessons/(7)%20%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B.md`},{content:`# Урок 8 — Работа со строками и числами

## **Простое объяснение**

**Строка (string)** — это текст
**Число (number)** — это числовое значение

---

## **Аналогия**

Excel:

\`\`\`id="p1k9as"
"Иван"   → текст  
100      → число  
\`\`\`

---

## **1. Строки (string)**

### Создание строки

\`\`\`javascript id="s4k2mz"
let name = "Иван";
\`\`\`

---

### Объединение строк

\`\`\`javascript id="d7m3qw"
let firstName = "Иван";
let lastName = "Иванов";

let fullName = firstName + " " + lastName;
\`\`\`

---

### Шаблонные строки (современный способ)

\`\`\`javascript id="z9k1rt"
let name = "Иван";
let age = 30;

let text = \`Имя: \${name}, возраст: \${age}\`;
\`\`\`

---

## **2. Длина строки**

\`\`\`javascript id="x2q8mn"
let text = "Привет";

console.log(text.length);
\`\`\`

---

## **3. Получение символа**

\`\`\`javascript id="r4p7ld"
let text = "Привет";

console.log(text[0]); // П
\`\`\`

---

## **4. Методы строк**

### Перевод в верхний/нижний регистр

\`\`\`javascript id="n6v3tx"
let text = "Привет";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
\`\`\`

---

### Поиск в строке

\`\`\`javascript id="b5c2wp"
let text = "Привет мир";

console.log(text.includes("мир")); // true
\`\`\`

---

### Замена текста

\`\`\`javascript id="k8m1zs"
let text = "Привет мир";

let newText = text.replace("мир", "JavaScript");
\`\`\`

---

### Обрезка пробелов

\`\`\`javascript id="j3q9rd"
let text = "   Привет   ";

console.log(text.trim());
\`\`\`

---

## **5. Числа (number)**

### Создание числа

\`\`\`javascript id="h7t4kc"
let price = 100;
let tax = 0.2;
\`\`\`

---

## **6. Основные операции**

\`\`\`javascript id="u2n8zp"
let total = price * 2;
let result = 10 + 5;
\`\`\`

---

## **7. Округление**

\`\`\`javascript id="e4m9vy"
let num = 10.7;

console.log(Math.round(num)); // 11
console.log(Math.floor(num)); // 10
console.log(Math.ceil(num));  // 11
\`\`\`

---

## **8. Преобразование типов**

### Строка → число

\`\`\`javascript id="v9k2dw"
let value = "100";

let num = Number(value);
\`\`\`

---

### Число → строка

\`\`\`javascript id="y1r6qk"
let num = 100;

let str = String(num);
\`\`\`

---

## **9. Проверка числа**

\`\`\`javascript id="m3p8zs"
let value = "abc";

console.log(isNaN(value)); // true
\`\`\`

---

## **10. Практические кейсы**

### Пример 1 — расчёт стоимости

\`\`\`javascript id="q7t2nx"
let price = 100;
let quantity = 3;

let total = price * quantity;
\`\`\`

---

### Пример 2 — форматирование текста

\`\`\`javascript id="c8w5mk"
let name = "иван";

let formatted = name.toUpperCase();
\`\`\`

---

### Пример 3 — проверка строки

\`\`\`javascript id="p2n4rt"
let email = "test@mail.com";

let isValid = email.includes("@");
\`\`\`

---

## **Практика**

### Задание 1

Создайте строку с именем

---

### Задание 2

Выведите длину строки

---

### Задание 3

Сделайте строку в верхнем регистре

---

### Задание 4

Преобразуйте строку "100" в число

---

### Задание 5

Округлите число 10.7

---

## **Разбор (пример)**

\`\`\`javascript id="z4x9kt"
let name = "Иван";

console.log(name.length);

let num = Number("100");
\`\`\`

---

## **Типовые ошибки**

| Ошибка                 | Причина                     |
| ---------------------- | --------------------------- |
| \`"100" + 50 = "10050"\` | строка + число              |
| забыли Number()        | не произошло преобразование |
| \`NaN\`                  | неправильное значение       |
| лишние пробелы         | нет \`trim()\`                |

---

## **Контроль**

Вы должны уметь:

✔ работать со строками
✔ использовать методы (\`includes\`, \`replace\`)
✔ преобразовывать типы
✔ работать с числами

---

## **Контрольные вопросы**

1. Что такое строка?
2. Как узнать длину?
3. Чем \`Number()\` отличается от строки?
4. Что делает \`Math.round()\`?

---

## **Краткий вывод**

* Строки — для текста
* Числа — для расчётов
* Их комбинация — основа любой программы`,fileName:`(8) Работа со строками и числами.md`,order:8,slug:`8-работа-со-строками-и-числами`,title:`Работа со строками и числами`,url:`/lessons/(8)%20%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%20%D1%81%D0%BE%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B0%D0%BC%D0%B8%20%D0%B8%20%D1%87%D0%B8%D1%81%D0%BB%D0%B0%D0%BC%D0%B8.md`},{content:`# Урок 9 — Введение в DOM (Document Object Model)

## **Простое объяснение**

DOM — это представление HTML-страницы в виде структуры, с которой можно работать через JavaScript.

👉 JS может:

* находить элементы
* менять текст
* менять стили
* реагировать на действия пользователя

---

## **Аналогия**

HTML — это документ
DOM — это «дерево элементов»

\`\`\`id="k3m8qx"
Страница
 ├─ Заголовок
 ├─ Кнопка
 └─ Текст
\`\`\`

---

## **1. Пример HTML**

\`\`\`html
<h1 id="title">Привет</h1>
<button id="btn">Нажми</button>
\`\`\`

---

## **2. Получение элемента**

\`\`\`javascript id="d8p2zt"
let title = document.getElementById("title");
\`\`\`

---

## **3. Изменение текста**

\`\`\`javascript id="m5k9wx"
title.textContent = "Новый текст";
\`\`\`

---

## **4. Работа с кнопкой**

\`\`\`javascript id="q1r7nb"
let btn = document.getElementById("btn");

btn.onclick = function() {
  console.log("Кнопка нажата");
};
\`\`\`

---

## **5. Изменение стиля**

\`\`\`javascript id="z3v6mt"
title.style.color = "red";
\`\`\`

---

## **6. Поиск элементов**

### По классу

\`\`\`javascript id="c8n2pq"
document.getElementsByClassName("item");
\`\`\`

---

### Современный способ

\`\`\`javascript id="y4t9ks"
document.querySelector("#title");
document.querySelectorAll(".item");
\`\`\`

---

## **7. Добавление элементов**

\`\`\`javascript id="h2m7df"
let div = document.createElement("div");

div.textContent = "Новый элемент";

document.body.appendChild(div);
\`\`\`

---

## **8. Удаление элементов**

\`\`\`javascript id="r9k1xp"
div.remove();
\`\`\`

---

## **9. События (важно)**

\`\`\`javascript id="w6p3zn"
btn.addEventListener("click", function() {
  alert("Нажали кнопку");
});
\`\`\`

---

## **10. Когда используется DOM**

✔ кнопки
✔ формы
✔ интерфейсы
✔ веб-приложения

---

## **11. Практические кейсы**

### Пример 1 — изменение текста

\`\`\`javascript id="t2q8xm"
let title = document.getElementById("title");
title.textContent = "Добро пожаловать";
\`\`\`

---

### Пример 2 — кнопка

\`\`\`javascript id="n7v4kp"
btn.addEventListener("click", function() {
  title.textContent = "Клик!";
});
\`\`\`

---

### Пример 3 — динамический элемент

\`\`\`javascript id="b5r9wd"
let p = document.createElement("p");
p.textContent = "Новый текст";

document.body.appendChild(p);
\`\`\`

---

## **Практика**

### Задание 1

Создайте HTML с заголовком и получите его через JS

---

### Задание 2

Измените текст заголовка

---

### Задание 3

Создайте кнопку и обработайте клик

---

### Задание 4

Добавьте новый элемент на страницу

---

### Задание 5

Измените цвет текста

---

## **Разбор (пример)**

\`\`\`javascript id="x4m2rq"
let title = document.getElementById("title");

title.textContent = "Новый текст";
\`\`\`

---

## **Типовые ошибки**

| Ошибка                     | Причина               |
| -------------------------- | --------------------- |
| элемент не найден          | неправильный id       |
| JS запускается раньше HTML | скрипт не внизу       |
| забыли \`#\` или \`.\`         | ошибка в selector     |
| работа с null              | элемент не существует |

---

## **Контроль**

Вы должны уметь:

✔ находить элементы
✔ изменять содержимое
✔ работать с событиями
✔ добавлять элементы

---

## **Контрольные вопросы**

1. Что такое DOM?
2. Как получить элемент по id?
3. Чем \`querySelector\` лучше?
4. Что делает \`addEventListener\`?

---

## **Краткий вывод**

* DOM — это мост между HTML и JavaScript
* Позволяет управлять страницей
* Основа всех веб-приложений`,fileName:`(9) Введение в DOM (Document Object Model).md`,order:9,slug:`9-введение-в-dom-document-object-model`,title:`Введение в DOM (Document Object Model)`,url:`/lessons/(9)%20%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20DOM%20(Document%20Object%20Model).md`},{content:`# Урок 10 — События в браузере

## **Простое объяснение**

Событие — это действие пользователя или браузера.

👉 Примеры:

* клик мыши
* ввод текста
* нажатие клавиши
* загрузка страницы

JavaScript может **отслеживать события и реагировать на них**.

---

## **Аналогия**

Кнопка в интерфейсе:

\`\`\`id="k4m2sx"
Нажал → произошло действие
\`\`\`

---

## **1. Пример HTML**

\`\`\`html id="z8n3pq"
<button id="btn">Нажми</button>
\`\`\`

---

## **2. Обработка события (базово)**

\`\`\`javascript id="d7k1rw"
let btn = document.getElementById("btn");

btn.onclick = function() {
  console.log("Клик!");
};
\`\`\`

---

## **3. Современный способ (рекомендуется)**

\`\`\`javascript id="m5v9tz"
btn.addEventListener("click", function() {
  console.log("Кнопка нажата");
});
\`\`\`

👉 можно навесить несколько обработчиков

---

## **4. Основные события**

| Событие   | Когда происходит   |
| --------- | ------------------ |
| \`click\`   | клик               |
| \`input\`   | ввод текста        |
| \`change\`  | изменение значения |
| \`keydown\` | нажатие клавиши    |
| \`submit\`  | отправка формы     |

---

## **5. Работа с input**

\`\`\`html id="q2p8mn"
<input id="name" />
\`\`\`

\`\`\`javascript id="w4r6kp"
let input = document.getElementById("name");

input.addEventListener("input", function() {
  console.log(input.value);
});
\`\`\`

---

## **6. Объект события (event)**

\`\`\`javascript id="t9k3zx"
btn.addEventListener("click", function(event) {
  console.log(event);
});
\`\`\`

👉 содержит информацию о событии

---

## **7. Предотвращение действия (важно)**

\`\`\`html id="y8m2rq"
<form id="form">
  <button>Отправить</button>
</form>
\`\`\`

\`\`\`javascript id="u3v7kn"
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Форма не отправлена");
});
\`\`\`

---

## **8. Работа с клавиатурой**

\`\`\`javascript id="p6n4xm"
document.addEventListener("keydown", function(event) {
  console.log(event.key);
});
\`\`\`

---

## **9. Делегирование событий (продвинутый уровень)**

\`\`\`javascript id="c7k9zw"
document.body.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Нажата кнопка");
  }
});
\`\`\`

👉 работает для динамических элементов

---

## **10. Когда используются события**

✔ кнопки
✔ формы
✔ интерфейсы
✔ интерактивные приложения

---

## **11. Практические кейсы**

### Пример 1 — кнопка

\`\`\`javascript id="v2m8qx"
btn.addEventListener("click", function() {
  alert("Нажали");
});
\`\`\`

---

### Пример 2 — ввод текста

\`\`\`javascript id="n5r1kp"
input.addEventListener("input", function() {
  console.log("Ввод:", input.value);
});
\`\`\`

---

### Пример 3 — форма

\`\`\`javascript id="b3k7mz"
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Отправка формы");
});
\`\`\`

---

## **Практика**

### Задание 1

Создайте кнопку и обработайте клик

---

### Задание 2

Отследите ввод текста

---

### Задание 3

Обработайте нажатие клавиши

---

### Задание 4

Создайте форму и отмените отправку

---

### Задание 5

Выведите значение input при вводе

---

## **Разбор (пример)**

\`\`\`javascript id="x8m2tp"
btn.addEventListener("click", function() {
  console.log("Клик");
});
\`\`\`

---

## **Типовые ошибки**

| Ошибка                              | Причина                   |
| ----------------------------------- | ------------------------- |
| \`onclick\` вместо \`addEventListener\` | устаревший подход         |
| нет \`event.preventDefault()\`        | форма перезагружается     |
| неправильный selector               | элемент не найден         |
| работа с \`null\`                     | JS запускается раньше DOM |

---

## **Контроль**

Вы должны уметь:

✔ обрабатывать события
✔ работать с \`event\`
✔ использовать \`addEventListener\`
✔ работать с формами

---

## **Контрольные вопросы**

1. Что такое событие?
2. Чем \`onclick\` хуже?
3. Что делает \`event.preventDefault()\`?
4. Как получить значение input?

---

## **Краткий вывод**

* События делают страницу интерактивной
* Через них пользователь взаимодействует с интерфейсом
* Это основа фронтенда`,fileName:`(10) События в браузере.md`,order:10,slug:`10-события-в-браузере`,title:`События в браузере`,url:`/lessons/(10)%20%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F%20%D0%B2%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5.md`},{content:`# Как читать ошибки JavaScript

Это **один из самых полезных уроков для новичков**.

Практика показывает:
90% времени программист тратит **не на написание кода, а на поиск ошибок**.

Поэтому важно научиться **спокойно и системно читать сообщения об ошибках**.

---

# 1. Что такое ошибка в программе

## Простое объяснение

Ошибка — это ситуация, когда программа **не может выполнить инструкцию**.

Компьютер сообщает об этом через **сообщение об ошибке**.

---

## Аналогия

Представьте инструкцию сотруднику:

> Возьми файл из папки "Отчёты"

Но папки **не существует**.

Сотрудник скажет:

> Я не могу выполнить задачу — папки нет.

Ошибка JavaScript — это **такое же сообщение**.

---

# 2. Где появляются ошибки

Если вы запускаете программу через Node.js:

\`\`\`bash
node test.js
\`\`\`

Ошибка будет показана **в терминале**.

Пример:

\`\`\`text
ReferenceError: x is not defined
\`\`\`

---

# 3. Структура сообщения об ошибке

Пример ошибки:

\`\`\`text
/test.js:3
console.log(total)
            ^

ReferenceError: total is not defined
\`\`\`

Разберём по частям.

---

## 1️⃣ Имя файла

\`\`\`text
/test.js:3
\`\`\`

Это означает:

\`\`\`
файл: test.js
строка: 3
\`\`\`

То есть ошибка произошла **в третьей строке**.

---

## 2️⃣ Строка кода

\`\`\`javascript
console.log(total)
\`\`\`

Это строка, где возникла ошибка.

---

## 3️⃣ Стрелка

\`\`\`text
            ^
\`\`\`

Стрелка показывает **точное место ошибки**.

---

## 4️⃣ Тип ошибки

\`\`\`text
ReferenceError
\`\`\`

Это **вид ошибки**.

---

## 5️⃣ Объяснение

\`\`\`text
total is not defined
\`\`\`

Это значит:

> Переменная \`total\` не существует.

---

# 4. Самые частые ошибки новичков

---

# Ошибка №1 — переменная не объявлена

### Код

\`\`\`javascript
console.log(price);
\`\`\`

Ошибка:

\`\`\`text
ReferenceError: price is not defined
\`\`\`

Причина:

Переменная не создана.

---

### Правильно

\`\`\`javascript
let price = 100;

console.log(price);
\`\`\`

---

# Ошибка №2 — опечатка в имени

### Код

\`\`\`javascript
let salary = 50000;

console.log(salery);
\`\`\`

Ошибка:

\`\`\`text
ReferenceError: salery is not defined
\`\`\`

Проблема:

\`\`\`text
salary
salery
\`\`\`

Опечатка.

---

# Ошибка №3 — пропущена скобка

### Код

\`\`\`javascript
console.log("Hello";
\`\`\`

Ошибка:

\`\`\`text
SyntaxError
\`\`\`

Причина:

нет закрывающей скобки.

---

### Правильно

\`\`\`javascript
console.log("Hello");
\`\`\`

---

# Ошибка №4 — пропущена кавычка

### Код

\`\`\`javascript
console.log("Hello);
\`\`\`

Ошибка:

\`\`\`text
SyntaxError
\`\`\`

Причина — строка не закрыта.

---

# Ошибка №5 — неправильное имя файла

Команда:

\`\`\`bash
node tes.js
\`\`\`

Но файл называется:

\`\`\`
test.js
\`\`\`

Ошибка:

\`\`\`text
Cannot find module
\`\`\`

---

# 5. Главное правило работы с ошибками

Когда видите ошибку — делайте три шага.

---

## Шаг 1

Найдите **тип ошибки**

Например:

\`\`\`
ReferenceError
SyntaxError
\`\`\`

---

## Шаг 2

Посмотрите **номер строки**

\`\`\`
test.js:7
\`\`\`

---

## Шаг 3

Прочитайте **текст ошибки**

Например:

\`\`\`
price is not defined
\`\`\`

Это означает:

> переменная \`price\` не существует.

---

# 6. Пример реального разбора ошибки

### Код

\`\`\`javascript
let price = 100;
let quantity = 5;

let total = price * quantity;

console.log(totl);
\`\`\`

Ошибка:

\`\`\`text
ReferenceError: totl is not defined
\`\`\`

---

## Анализ

Смотрим строку:

\`\`\`javascript
console.log(totl);
\`\`\`

Переменная написана:

\`\`\`
totl
\`\`\`

А должна быть:

\`\`\`
total
\`\`\`

---

## Исправленный код

\`\`\`javascript
let price = 100;
let quantity = 5;

let total = price * quantity;

console.log(total);
\`\`\`

---

# 7. Ещё один пример

### Код

\`\`\`javascript
let numbers = [10, 20, 30]

for (let i = 0; i < numbers.length; i++ {
  console.log(numbers[i]);
}
\`\`\`

Ошибка:

\`\`\`text
SyntaxError
\`\`\`

Причина:

в строке цикла нет закрывающей скобки.

---

### Правильно

\`\`\`javascript
for (let i = 0; i < numbers.length; i++) {
\`\`\`

---

# Практика

## Задание 1

Найдите ошибку.

\`\`\`javascript
let price = 200
let quantity = 3

console.log(price * quntity)
\`\`\`

---

## Задание 2

Что здесь не так?

\`\`\`javascript
console.log("Hello)
\`\`\`

---

## Задание 3

Исправьте программу.

\`\`\`javascript
let numbers = [10,20,30]

for (let i = 0; i < numbers.length; i++) {
console.log(number[i])
}
\`\`\`

---

# Разбор решений

---

### Задание 1

Ошибка:

\`\`\`
quntity
\`\`\`

Правильно:

\`\`\`
quantity
\`\`\`

Исправленный код:

\`\`\`javascript
let price = 200
let quantity = 3

console.log(price * quantity)
\`\`\`

---

### Задание 2

Нет закрывающей кавычки.

Правильно:

\`\`\`javascript
console.log("Hello")
\`\`\`

---

### Задание 3

Ошибка:

\`\`\`
number
\`\`\`

Правильно:

\`\`\`
numbers
\`\`\`

Исправленный код:

\`\`\`javascript
let numbers = [10,20,30]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
\`\`\`

---

# Самая важная мысль урока

Ошибка — это **не проблема, а подсказка**.

Программа **уже показывает**, где искать.

Поэтому алгоритм такой:

\`\`\`
1 смотрим тип ошибки
2 смотрим строку
3 читаем сообщение
4 ищем опечатку или пропущенный символ
\`\`\`

---

Если хочешь, я могу ещё добавить **два очень полезных урока для этого курса** (они резко снижают уровень тупняка у новичков):

1️⃣ **Как читать чужой JavaScript-код**
2️⃣ **Как правильно гуглить и спрашивать нейросеть о коде**

Это реально **ключевые навыки для людей без программистского опыта**.`,fileName:`(11) Как читать ошибки.md`,order:11,slug:`11-как-читать-ошибки`,title:`Как читать ошибки`,url:`/lessons/(11)%20%D0%9A%D0%B0%D0%BA%20%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B8.md`}]],zl=(e,t=`LessonsApiError`)=>({message:e,name:t}),Bl=e=>Rl.find(t=>t.slug===e),W=e=>{let{content:t,...n}=e;return n},G=Ll({reducerPath:`lessonsApi`,baseQuery:il(),endpoints:e=>({getLessons:e.query({queryFn:async()=>({data:Rl.map(W)})}),getLessonContent:e.query({async queryFn(e){let t=Bl(e);return t?{data:t}:{error:zl(`Урок со slug "${e}" не найден.`,`NotFoundError`)}}})})}),{useGetLessonContentQuery:K,useGetLessonsQuery:q}=G,J=`lesson`,Vl=e=>typeof e==`object`&&e&&`message`in e&&typeof e.message==`string`?e.message:`Не удалось загрузить урок.`,Hl=()=>{let{data:e=[],error:t,isError:n,isLoading:r}=q(),[i]=Fn(),a=i.get(J),o=e.find(e=>e.slug===a)??e[0],s=K(o?.slug??``,{skip:!o});return{errorMessage:n?Vl(t):s.isError?Vl(s.error):``,hasLessons:e.length>0,isError:n||s.isError,isLoading:r||s.isLoading||s.isFetching,lesson:s.data}},Ul={card:`_card_sypes_1`,stateCard:`_stateCard_sypes_7`,stateText:`_stateText_sypes_16`},Wl=()=>{let{errorMessage:e,hasLessons:t,isError:n,isLoading:r,lesson:i}=Hl();return r?(0,M.jsx)(Pi,{className:Ul.stateCard,border:!0,shadow:!0,form:`round`,verticalSpace:`4xl`,children:(0,M.jsx)(Li,{size:`m`})}):t?n||!i?(0,M.jsxs)(Pi,{className:Ul.stateCard,border:!0,form:`round`,shadow:!0,status:`alert`,verticalSpace:`4xl`,children:[(0,M.jsx)(N,{as:`h2`,size:`xl`,weight:`bold`,children:`Не удалось открыть урок`}),(0,M.jsx)(N,{className:Ul.stateText,size:`m`,view:`secondary`,children:e})]}):(0,M.jsx)(Pi,{className:Ul.card,border:!0,shadow:!0,form:`round`,verticalSpace:`2xl`,horizontalSpace:`2xl`,children:(0,M.jsx)(Xi,{content:i.content})}):(0,M.jsxs)(Pi,{className:Ul.stateCard,border:!0,form:`round`,shadow:!0,verticalSpace:`4xl`,children:[(0,M.jsx)(N,{as:`h2`,size:`xl`,weight:`bold`,children:`Уроки пока не найдены`}),(0,M.jsx)(N,{className:Ul.stateText,size:`m`,view:`secondary`,children:"Добавьте `.md` файлы в публичную директорию `/lessons`, и они появятся в меню автоматически."})]})},Gl=()=>(0,M.jsx)(Wl,{}),Y=o((e=>{e.match=o,e.parse=s;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,r=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function o(e,t){return s(e).some(function(e){var n=e.inverse,r=e.type===`all`||t.type===e.type;if(r&&n||!(r||n))return!1;var i=e.expressions.every(function(e){var n=e.feature,r=e.modifier,i=e.value,a=t[n];if(!a)return!1;switch(n){case`orientation`:case`scan`:return a.toLowerCase()===i.toLowerCase();case`width`:case`height`:case`device-width`:case`device-height`:i=u(i),a=u(a);break;case`resolution`:i=l(i),a=l(a);break;case`aspect-ratio`:case`device-aspect-ratio`:case`device-pixel-ratio`:i=c(i),a=c(a);break;case`grid`:case`color`:case`color-index`:case`monochrome`:i=parseInt(i,10)||1,a=parseInt(a,10)||0;break}switch(r){case`min`:return a>=i;case`max`:return a<=i;default:return a===i}});return i&&!n||!i&&n})}function s(e){return e.split(`,`).map(function(e){e=e.trim();var i=e.match(t),a=i[1],o=i[2],s=i[3]||``,c={};return c.inverse=!!a&&a.toLowerCase()===`not`,c.type=o?o.toLowerCase():`all`,s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map(function(e){var t=e.match(n),i=t[1].toLowerCase().match(r);return{modifier:i[1],feature:i[2],value:t[2]}}),c})}function c(e){var t=Number(e),n;return t||=(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),n[1]/n[2]),t}function l(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case`dpcm`:return t/2.54;case`dppx`:return t*96;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case`em`:return t*16;case`rem`:return t*16;case`cm`:return t*96/2.54;case`mm`:return t*96/2.54/10;case`in`:return t*96;case`pt`:return t*72;case`pc`:return t*72/12;default:return t}}})),Kl=c(o(((e,t)=>{var n=Y().match,r=typeof window<`u`?window.matchMedia:null;function i(e,t,i){var a=this,o;r&&!i&&(o=r.call(window,e)),o?(this.matches=o.matches,this.media=o.media,o.addListener(l)):(this.matches=n(e,t),this.media=e),this.addListener=s,this.removeListener=c,this.dispose=u;function s(e){o&&o.addListener(e)}function c(e){o&&o.removeListener(e)}function l(e){a.matches=e.matches,a.media=e.media}function u(){o&&o.removeListener(l)}}function a(e,t,n){return new i(e,t,n)}t.exports=a}))()),ql=/[A-Z]/g,Jl=/^ms-/,Yl={};function Xl(e){return`-`+e.toLowerCase()}function Zl(e){if(Yl.hasOwnProperty(e))return Yl[e];var t=e.replace(ql,Xl);return Yl[e]=Jl.test(t)?`-`+t:t}function Ql(e,t){if(e===t)return!0;if(!e||!t)return!1;let n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(let r=0;r<i;r++){let i=n[r];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}var $l=o(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),eu=o(((e,t)=>{var n=$l();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),X=c(o(((e,t)=>{t.exports=eu()()}))()),tu=X.default.oneOfType([X.default.string,X.default.number]),nu={all:X.default.bool,grid:X.default.bool,aural:X.default.bool,braille:X.default.bool,handheld:X.default.bool,print:X.default.bool,projection:X.default.bool,screen:X.default.bool,tty:X.default.bool,tv:X.default.bool,embossed:X.default.bool},ru={orientation:X.default.oneOf([`portrait`,`landscape`]),scan:X.default.oneOf([`progressive`,`interlace`]),aspectRatio:X.default.string,deviceAspectRatio:X.default.string,height:tu,deviceHeight:tu,width:tu,deviceWidth:tu,color:X.default.bool,colorIndex:X.default.bool,monochrome:X.default.bool,resolution:tu,type:Object.keys(nu)},{type:iu,...au}=ru,ou={minAspectRatio:X.default.string,maxAspectRatio:X.default.string,minDeviceAspectRatio:X.default.string,maxDeviceAspectRatio:X.default.string,minHeight:tu,maxHeight:tu,minDeviceHeight:tu,maxDeviceHeight:tu,minWidth:tu,maxWidth:tu,minDeviceWidth:tu,maxDeviceWidth:tu,minColor:X.default.number,maxColor:X.default.number,minColorIndex:X.default.number,maxColorIndex:X.default.number,minMonochrome:X.default.number,maxMonochrome:X.default.number,minResolution:tu,maxResolution:tu,...au},su={all:{...nu,...ou},types:nu,matchers:ru,features:ou},cu=e=>`not ${e}`,lu=(e,t)=>{let n=Zl(e);return typeof t==`number`&&(t=`${t}px`),t===!0?n:t===!1?cu(n):`(${n}: ${t})`},uu=e=>e.join(` and `),du=e=>{let t=[];return Object.keys(su.all).forEach(n=>{let r=e[n];r!=null&&t.push(lu(n,r))}),uu(t)},fu=(0,x.createContext)(void 0),pu=e=>e.query||du(e),mu=e=>{if(e)return Object.keys(e).reduce((t,n)=>(t[Zl(n)]=e[n],t),{})},hu=()=>{let e=(0,x.useRef)(!1);return(0,x.useEffect)(()=>{e.current=!0},[]),e.current},gu=e=>{let t=(0,x.useContext)(fu),n=()=>mu(e)||mu(t),[r,i]=(0,x.useState)(n);return(0,x.useEffect)(()=>{let e=n();Ql(r,e)||i(e)},[e,t]),r},_u=e=>{let t=()=>pu(e),[n,r]=(0,x.useState)(t);return(0,x.useEffect)(()=>{let e=t();n!==e&&r(e)},[e]),n},vu=(e,t)=>{let n=()=>(0,Kl.default)(e,t||{},!!t),[r,i]=(0,x.useState)(n),a=hu();return(0,x.useEffect)(()=>{if(a){let e=n();return i(e),()=>{e&&e.dispose()}}},[e,t]),r},yu=e=>{let[t,n]=(0,x.useState)(e.matches);return(0,x.useEffect)(()=>{let t=e=>{n(e.matches)};return e.addListener(t),n(e.matches),()=>{e.removeListener(t)}},[e]),t},bu=(e,t,n)=>{let r=gu(t),i=_u(e);if(!i)throw Error(`Invalid or missing MediaQuery!`);let a=vu(i,r),o=yu(a),s=hu();return(0,x.useEffect)(()=>{s&&n&&n(o)},[o]),(0,x.useEffect)(()=>()=>{a&&a.dispose()},[]),o};function xu(){for(var e=[...arguments],t=``,n=new Set,r=0,i=e.join(` `).split(` `);r<i.length;r++){var a=i[r];a===``||n.has(a)||(n.add(a),t.length>0&&(t+=` `),t+=a)}return t}var Su=Jr(`Badge`),Cu=function(e){return e===`error`?`alert`:e},wu={xs:`xs`,s:`xs`,m:`s`,l:`s`},Tu={xs:`2xs`,s:`2xs`,m:`xs`,l:`xs`},Eu=function(e,t,n){return n?void 0:t===`default`?`var(--space-${Tu[e]})`:`var(--space-${wu[e]})`},Du={xs:`m`,s:`l`,m:`xl`,l:`2xl`},Ou={xs:10,s:16,m:24,l:32},ku=function(e,t){return t?`${Ou[e]}px`:`var(--space-${Du[e]})`},Au={xs:`calc(var(--size-text-m) / 2)`,s:`var(--size-text-2xs)`,m:`var(--size-text-xs)`,l:`var(--badge-text-size)`},ju=function(e){return Au[e]},Mu={xs:2,s:3,m:4,l:5},Nu=function(e,t){return t?`${Mu[e]}px`:void 0},Pu=function(e){return e===`disabled`?`var(--color-control-bg-disable)`:`var(--color-bg-${e})`},Fu=function(e,t){return e===`disabled`?`var(--color-control-typo-disable)`:e===`system`?`var(--color-typo-secondary)`:t===`filled`?`var(--color-typo-primary)`:`var(--color-typo-${e})`},Iu=function(e,t){return t===`stroked`&&e===`disabled`?`var(--color-control-bg-border-disable)`:t===`stroked`?`var(--color-bg-${e})`:void 0},Lu=function(e,t){return t===`tinted`&&e===`system`?`30%`:t===`tinted`&&e===`disabled`?`100%`:t===`tinted`?`10%`:void 0},Ru=`filled`,zu=`normal`,Bu=`default`,Vu=[`size`,`view`,`status`,`form`,`icon`,`iconLeft`,`iconRight`,`minified`,`label`,`as`,`title`,`style`];function Hu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Uu(e){for(var t,n=1;n<arguments.length;n++)t=arguments[n]==null?{}:arguments[n],n%2?Hu(Object(t),!0).forEach(function(n){Fr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Hu(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}var Wu=function(e){return e?x.createElement(e,{size:`xs`,className:Su(`Icon`)}):null},Z=Di(function(e,t){var n=e.size,r=n===void 0?`m`:n,i=e.view,a=i===void 0?Ru:i,o=e.status,s=o===void 0?zu:o,c=e.form,l=c===void 0?Bu:c,u=e.icon,d=e.iconLeft,f=e.iconRight,p=e.minified,m=p!==void 0&&p,h=e.label,g=e.as,_=g===void 0?`div`:g,v=e.title,y=e.style,b=Ur(e,Vu),S=Cu(s),C=oi().themeClassNames,w=S!==`system`&&S!==`disabled`&&a===`filled`?xu(e.className,C.color.accent):e.className,T=d??u,E=[u,d,f,h].filter(Boolean).length===1&&1>=(h?.length||0);return x.createElement(_,Object.assign({},b,{className:Su(Uu({minified:m},!m&&{view:a,form:l,counter:E}),[w]),ref:t,title:v||m&&h||void 0,style:Uu(Uu({},y),{},{"--badge-bg-color":Pu(S),"--badge-border-color":Iu(S,a),"--badge-horizontal-padding":Eu(r,l,m),"--badge-minified-border-size":Nu(r,m),"--badge-size":ku(r,m),"--badge-text-color":Fu(S,a),"--badge-text-size":ju(r),"--badge-degree-mixing":Lu(S,a)})}),!m&&x.createElement(x.Fragment,null,Wu(T),h,Wu(f)))}),Gu=Jr(`MixFocus`);function Ku(e,t,n){return n||e[t]}var qu=[`size`,`view`,`width`,`form`,`iconLeft`,`iconRight`,`label`,`className`,`onClick`,`disabled`,`loading`,`type`,`tabIndex`,`as`,`onlyIcon`,`iconSize`,`formId`],Ju=`m`,Yu=`primary`,Xu=`default`,Zu=[`default`,`brick`,`round`,`brickRound`,`roundBrick`,`brickDefault`,`defaultBrick`],Qu={default:`default`,defaultClear:`defaultBrick`,defaultBrick:`defaultBrick`,brick:`brick`,brickDefault:`brickDefault`,brickClear:`brick`,brickRound:`brickRound`,round:`round`,roundClear:`roundBrick`,roundBrick:`roundBrick`,clearRound:`brickRound`,clearDefault:`brickDefault`,clearBrick:`brick`,clearClear:`brick`},$u=Zu[0],ed=`Button`,td=Jr(`Button`),nd={xs:`xs`,s:`xs`,m:`s`,l:`m`},rd={xs:`xs`,s:`s`,m:`m`,l:`m`},id=Di(function(e,t){var n=(0,x.useRef)(null),r=ki(ed,e,n),i=r.size,a=i===void 0?Ju:i,o=r.view,s=o===void 0?Yu:o,c=r.width,l=c===void 0?Xu:c,u=r.form,d=u===void 0?$u:u,f=r.iconLeft,p=r.iconRight,m=r.label,h=r.className,g=r.onClick,_=r.disabled,v=r.loading,y=r.type,b=y===void 0?`button`:y,S=r.tabIndex,C=r.as,w=C===void 0?`button`:C,T=r.onlyIcon,E=r.iconSize,ee=r.formId,D=Ur(r,qu),O=(!m||T)&&(f||p),te=f,ne=p,re=e.title||!!O&&m||void 0,ie=Ku(O?rd:nd,a,E);return x.createElement(w,Object.assign({},D,{onClick:g?function(e){_||v||!g||g(e)}:void 0,form:ee,type:b,className:td({size:a,view:s,width:l,form:Qu[d],loading:v,disabled:_,withIcon:!!f||!!p,onlyIcon:!!O},[_||v?void 0:Gu(),h]),disabled:_,tabIndex:S,title:re,ref:hi([t,n])}),O&&x.createElement(O,{className:td(`Icon`),size:ie}),!O&&((te||ne)&&m?x.createElement(x.Fragment,null,te&&x.createElement(te,{className:td(`Icon`,{position:`left`}),size:ie}),x.createElement(`span`,{className:td(`Label`)},m),ne&&x.createElement(ne,{className:td(`Icon`,{position:`right`}),size:ie})):m),v&&x.createElement(`div`,{className:td(`Loader`)},x.createElement(Li,{size:rd[a],type:`circle`})))});function ad(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function od(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ad(Object(n),!0).forEach(function(t){Fr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ad(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var sd={n:`icons--`,e:`-`,m:`_`,v:`_`},cd=Wr(sd),ld=e=>Wr(od(od({},sd),{},{n:e+sd.n}));ld(`canary`),ld(`deprecated`);var ud=cd(`Icon`),dd={l:`default`,m:`default`,s:`default`,xs:`default`},fd=[`size`,`className`,`view`,`as`,`children`,`color`,`name`],pd=Di((e,t)=>{let{size:n=`m`,className:r,view:i,as:a=`span`,children:o,color:s=`mono`,name:c}=e,l=Ur(e,fd),u=a;return x.createElement(u,Object.assign({},l,{className:ud({size:n,view:i,color:s},[c,r]),ref:t}),o)}),md=(e,t)=>{let n=t;return Di((t,r)=>x.createElement(pd,Object.assign({},t,{color:e.color,name:e.name,ref:r}),x.createElement(n,{className:ud(`Svg`),size:t.size})))},hd={l:e=>x.createElement(`svg`,Object.assign({viewBox:`0 0 28 28`,xmlns:`http://www.w3.org/2000/svg`},e),x.createElement(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M6 2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10.828a2 2 0 0 0-.586-1.414l-6.828-6.828A2 2 0 0 0 15.172 2H6Zm16 10-8-8v6a2 2 0 0 0 2 2h6Z`})),m:e=>x.createElement(`svg`,Object.assign({viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`},e),x.createElement(`path`,{d:`M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.414a1 1 0 0 0-.293-.707l-5.414-5.414A1 1 0 0 0 13.586 2H6zm8 7a1 1 0 0 1-1-1V3.5L18.5 9H14z`})),s:e=>x.createElement(`svg`,Object.assign({viewBox:`0 0 16 16`,xmlns:`http://www.w3.org/2000/svg`},e),x.createElement(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M14 5.414a1.5 1.5 0 0 0-.44-1.06L9.647.439A1.5 1.5 0 0 0 8.586 0H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.414zM12.793 5H9.5a.5.5 0 0 1-.5-.5V1.207L12.793 5z`})),xs:e=>x.createElement(`svg`,Object.assign({viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`},e),x.createElement(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M2 2c0-.5.5-1 1-1h3.138c.248 0 .373 0 .48.044.108.045.198.134.378.315l2.669 2.738c.195.194.29.289.335.403.043.108.043.232.043.475L10 10c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1V2zm7 2.5L6.5 2v2a.5.5 0 0 0 .5.5h2z`})),name:`IconDocBlank`,renderType:{l:`use`,m:`use`,s:`use`,xs:`use`},color:`mono`};m(),(0,x.memo)(({element:e,name:t})=>(0,x.isValidElement)(e)?x.createElement(`svg`,{key:_d(t)},x.createElement(`symbol`,{id:`${_d(t)}`},e.props.children)):null,({name:e},{name:t})=>e===t);var gd={addIcon:void 0,removeIcon:void 0},_d=cd(`Icons`),vd=(0,x.createContext)(gd),yd=[`size`,`className`],Q=[`children`],bd=e=>t=>{let{name:n,renderType:r=dd}=e,{size:i=`m`,className:a}=t,o=Ur(t,yd),s=e[i],{addIcon:c,removeIcon:l}=(0,x.useContext)(vd),u=(0,x.useMemo)(()=>r[i]===`use`?s({className:a}):null,[s]),d=(0,x.isValidElement)(u)&&u?.props||{},{children:f}=d,p=Ur(d,Q);return(0,x.useEffect)(()=>{r[i]===`use`&&c?.(n,i,u)},[u,r,i]),(0,x.useEffect)(()=>()=>{r[i]===`use`&&l?.(n,i)},[s,r,i]),c&&r[i]===`use`?x.createElement(`svg`,Object.assign({},o,p),x.createElement(`use`,{x:`0`,y:`0`,xlinkHref:`#${_d(`${n}_${i}`)}`})):x.createElement(s,{className:a})},xd=md(hd,bd(hd)),Sd=e=>x.createElement(`svg`,Object.assign({viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`},e),x.createElement(`path`,{d:`M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z`})),Cd={l:Sd,m:Sd,s:e=>x.createElement(`svg`,Object.assign({viewBox:`0 0 16 16`,xmlns:`http://www.w3.org/2000/svg`},e),x.createElement(`path`,{d:`M4 3H2v2h2V3zm10 0H5v2h9V3zM5 7h9v2H5V7zm9 4H5v2h9v-2zM2 7h2v2H2V7zm2 4H2v2h2v-2z`})),xs:e=>x.createElement(`svg`,Object.assign({viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`},e),x.createElement(`path`,{d:`M1 3h1v1H1V3ZM1 6h1v1H1V6ZM1 9h1v1H1V9ZM3 3h8v1H3V3ZM3 6h8v1H3V6ZM3 9h8v1H3V9Z`})),name:`IconList`,renderType:{l:`use`,m:`use`,s:`use`,xs:`use`},color:`mono`},wd=md(Cd,bd(Cd)),Td=`lesson`,Ed=e=>typeof e==`object`&&e&&`message`in e&&typeof e.message==`string`?e.message:`Не удалось получить список уроков.`,Dd=()=>{let{data:e=[],error:t,isError:n,isLoading:r}=q(),[i,a]=Fn(),o=i.get(Td);return{activeSlug:(e.find(e=>e.slug===o)??e[0])?.slug??``,errorMessage:n?Ed(t):``,isError:n,isLoading:r,lessons:e,selectLesson:t=>{let n=new URLSearchParams(i);t===e[0]?.slug?n.delete(Td):n.set(Td,t),a(n)}}},Od={card:`_card_1cn1l_1`,header:`_header_1cn1l_8`,caption:`_caption_1cn1l_15`,toggle:`_toggle_1cn1l_19`,state:`_state_1cn1l_23`,list:`_list_1cn1l_30`,item:`_item_1cn1l_35`,itemActive:`_itemActive_1cn1l_35`,itemIcon:`_itemIcon_1cn1l_61`,itemText:`_itemText_1cn1l_66`},kd=768,Ad=()=>{let{activeSlug:e,errorMessage:t,isError:n,isLoading:r,lessons:i,selectLesson:a}=Dd(),o=bu({maxWidth:kd}),[s,c]=(0,x.useState)(!1),l=o?s:!0;return(0,M.jsxs)(Pi,{className:Od.card,border:!0,shadow:!0,form:`round`,verticalSpace:`xl`,horizontalSpace:`xl`,children:[(0,M.jsxs)(`div`,{className:Od.header,children:[(0,M.jsx)(`div`,{children:(0,M.jsx)(N,{as:`h1`,size:`2xl`,weight:`bold`,children:`Документация`})}),(0,M.jsx)(Z,{label:`Уроков: ${i.length}`,status:`system`,view:`tinted`})]}),o&&(0,M.jsx)(id,{className:Od.toggle,iconLeft:wd,label:l?`Скрыть список`:`Показать список`,onClick:()=>c(e=>!e),size:`m`,type:`button`,view:`secondary`,width:`full`}),r&&(0,M.jsx)(`div`,{className:Od.state,children:(0,M.jsx)(Li,{size:`m`})}),n&&!r&&(0,M.jsx)(`div`,{className:Od.state,children:(0,M.jsx)(N,{size:`s`,view:`alert`,children:t})}),!r&&!n&&l&&(0,M.jsx)(`div`,{className:Od.list,children:i.map(t=>{let n=t.slug===e;return(0,M.jsxs)(`button`,{className:n?Od.itemActive:Od.item,onClick:()=>a(t.slug),type:`button`,children:[(0,M.jsx)(xd,{className:Od.itemIcon,size:`s`}),(0,M.jsx)(`span`,{className:Od.itemText,children:(0,M.jsx)(N,{size:`s`,weight:n?`bold`:`regular`,children:t.title})})]},t.slug)})})]})},jd=()=>(0,M.jsx)(Ad,{}),Md=()=>(0,M.jsx)(li,{content:(0,M.jsx)(Gl,{}),navigation:(0,M.jsx)(jd,{})}),$=`persist:`,Nd=`persist/FLUSH`,Pd=`persist/REHYDRATE`,Fd=`persist/PAUSE`,Id=`persist/PERSIST`,Ld=`persist/PURGE`,Rd=`persist/REGISTER`;function zd(e){return zd=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},zd(e)}function Bd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Vd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Bd(n,!0).forEach(function(t){Hd(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bd(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Hd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ud(e,t,n,r){r.debug;var i=Vd({},n);return e&&zd(e)===`object`&&Object.keys(e).forEach(function(r){r!==`_persist`&&t[r]===n[r]&&(i[r]=e[r])}),i}function Wd(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,a=`${e.keyPrefix===void 0?$:e.keyPrefix}${e.key}`,o=e.storage,s=e.serialize===!1?function(e){return e}:typeof e.serialize==`function`?e.serialize:Gd,c=e.writeFailHandler||null,l={},u={},d=[],f=null,p=null,m=function(e){Object.keys(e).forEach(function(t){_(t)&&l[t]!==e[t]&&d.indexOf(t)===-1&&d.push(t)}),Object.keys(l).forEach(function(t){e[t]===void 0&&_(t)&&d.indexOf(t)===-1&&l[t]!==void 0&&d.push(t)}),f===null&&(f=setInterval(h,i)),l=e};function h(){if(d.length===0){f&&clearInterval(f),f=null;return}var e=d.shift(),t=r.reduce(function(t,n){return n.in(t,e,l)},l[e]);if(t!==void 0)try{u[e]=s(t)}catch(e){console.error(`redux-persist/createPersistoid: error serializing state`,e)}else delete u[e];d.length===0&&g()}function g(){Object.keys(u).forEach(function(e){l[e]===void 0&&delete u[e]}),p=o.setItem(a,s(u)).catch(v)}function _(e){return!(n&&n.indexOf(e)===-1&&e!==`_persist`||t&&t.indexOf(e)!==-1)}function v(e){c&&c(e)}return{update:m,flush:function(){for(;d.length!==0;)h();return p||Promise.resolve()}}}function Gd(e){return JSON.stringify(e)}function Kd(e){var t=e.transforms||[],n=`${e.keyPrefix===void 0?$:e.keyPrefix}${e.key}`,r=e.storage;e.debug;var i=e.deserialize===!1?function(e){return e}:typeof e.deserialize==`function`?e.deserialize:qd;return r.getItem(n).then(function(e){if(e)try{var n={},r=i(e);return Object.keys(r).forEach(function(e){n[e]=t.reduceRight(function(t,n){return n.out(t,e,r)},i(r[e]))}),n}catch(e){throw e}else return})}function qd(e){return JSON.parse(e)}function Jd(e){var t=e.storage,n=`${e.keyPrefix===void 0?$:e.keyPrefix}${e.key}`;return t.removeItem(n,Yd)}function Yd(e){}function Xd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Zd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Xd(n,!0).forEach(function(t){Qd(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xd(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Qd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $d(e,t){if(e==null)return{};var n=ef(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ef(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var tf=5e3;function nf(e,t){var n=e.version===void 0?-1:e.version;e.debug;var r=e.stateReconciler===void 0?Ud:e.stateReconciler,i=e.getStoredState||Kd,a=e.timeout===void 0?tf:e.timeout,o=null,s=!1,c=!0,l=function(e){return e._persist.rehydrated&&o&&!c&&o.update(e),e};return function(u,d){var f=u||{},p=f._persist,m=$d(f,[`_persist`]);if(d.type===`persist/PERSIST`){var h=!1,g=function(t,n){h||=(d.rehydrate(e.key,t,n),!0)};if(a&&setTimeout(function(){!h&&g(void 0,Error(`redux-persist: persist timed out for persist key "${e.key}"`))},a),c=!1,o||=Wd(e),p)return Zd({},t(m,d),{_persist:p});if(typeof d.rehydrate!=`function`||typeof d.register!=`function`)throw Error(`redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.`);return d.register(e.key),i(e).then(function(t){(e.migrate||function(e,t){return Promise.resolve(e)})(t,n).then(function(e){g(e)},function(e){g(void 0,e)})},function(e){g(void 0,e)}),Zd({},t(m,d),{_persist:{version:n,rehydrated:!1}})}else if(d.type===`persist/PURGE`)return s=!0,d.result(Jd(e)),Zd({},t(m,d),{_persist:p});else if(d.type===`persist/FLUSH`)return d.result(o&&o.flush()),Zd({},t(m,d),{_persist:p});else if(d.type===`persist/PAUSE`)c=!0;else if(d.type===`persist/REHYDRATE`){if(s)return Zd({},m,{_persist:Zd({},p,{rehydrated:!0})});if(d.key===e.key){var _=t(m,d),v=d.payload;return l(Zd({},r!==!1&&v!==void 0?r(v,u,_,e):_,{_persist:Zd({},p,{rehydrated:!0})}))}}if(!p)return t(u,d);var y=t(m,d);return y===m?u:l(Zd({},y,{_persist:p}))}}function rf(e){return sf(e)||of(e)||af()}function af(){throw TypeError(`Invalid attempt to spread non-iterable instance`)}function of(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)===`[object Arguments]`)return Array.from(e)}function sf(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function lf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?cf(n,!0).forEach(function(t){uf(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cf(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function uf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var df={registry:[],bootstrapped:!1},ff=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:df,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Rd:return lf({},e,{registry:[].concat(rf(e.registry),[t.key])});case Pd:var n=e.registry.indexOf(t.key),r=rf(e.registry);return r.splice(n,1),lf({},e,{registry:r,bootstrapped:r.length===0});default:return e}};function pf(e,t,n){var r=n||!1,i=ta(ff,df,t&&t.enhancer?t.enhancer:void 0),a=function(e){i.dispatch({type:Rd,key:e})},o=function(t,n,a){var o={type:Pd,payload:n,err:a,key:t};e.dispatch(o),i.dispatch(o),r&&s.getState().bootstrapped&&(r(),r=!1)},s=lf({},i,{purge:function(){var t=[];return e.dispatch({type:Ld,result:function(e){t.push(e)}}),Promise.all(t)},flush:function(){var t=[];return e.dispatch({type:Nd,result:function(e){t.push(e)}}),Promise.all(t)},pause:function(){e.dispatch({type:Fd})},persist:function(){e.dispatch({type:Id,register:a,rehydrate:o})}});return t&&t.manualPersist||s.persist(),s}var mf=Is({name:`auth`,initialState:{isAuth:!1,authUserId:null,userRoles:null},reducers:{login(e,t){e.isAuth=t.payload.isAuth,e.authUserId=t.payload.authUserId,e.userRoles=t.payload.userRoles},logout(e){e.isAuth=!1,e.authUserId=null,e.userRoles=null}}}),{login:hf,logout:gf}=mf.actions,_f=mf.reducer,vf=typeof window<`u`?{getItem:e=>Promise.resolve(localStorage.getItem(e)),setItem:(e,t)=>(localStorage.setItem(e,t),Promise.resolve(t)),removeItem:e=>(localStorage.removeItem(e),Promise.resolve())}:{getItem:async e=>null,setItem:async(e,t)=>t,removeItem:async e=>{}},yf=ra({auth:_f,[G.reducerPath]:G.reducer}),bf=cs({reducer:nf({key:`root`,storage:vf,whitelist:[]},yf),middleware:e=>e({serializableCheck:{ignoredActions:[Nd,Pd,Fd,Id,Ld,Rd]}}).concat(G.middleware)}),xf=pf(bf);function Sf(){return(0,M.jsx)(ur,{store:bf,children:(0,M.jsx)(jr,{loading:null,persistor:xf,children:(0,M.jsx)(ai,{preset:Xr,children:(0,M.jsx)(wn,{children:(0,M.jsx)(Pt,{children:(0,M.jsx)(Mt,{path:`/`,element:(0,M.jsx)(Md,{})})})})})})})}(0,Jn.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(x.StrictMode,{children:(0,M.jsx)(Sf,{})}));