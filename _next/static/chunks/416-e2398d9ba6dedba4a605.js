(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[416],{14:function(e,t,n){"use strict";n.d(t,{L:function(){return fe},Kq:function(){return X},AK:function(){return be},eh:function(){return ne},Hf:function(){return he},xf:function(){return se},cC:function(){return me}});var r=n(178),o=n.n(r),a=n(7294),i=n.t(a,2),u=n(3935);"undefined"!==typeof window&&a.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let c=new Map,s=new Set;function f(){if("undefined"===typeof window)return;let e=t=>{let n=c.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),c.delete(t.target)),0===c.size)){for(let e of s)e();s.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=c.get(t.target);n||(n=new Set,c.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?f():document.addEventListener("DOMContentLoaded",f));"undefined"!==typeof window&&window.visualViewport;new Map;function l(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function d(){return l(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const v=a.createContext(null);v.displayName="PressResponderContext";let h=null,y=new Set,m=!1,b=!1;const g={Tab:!0,Escape:!0};function w(e,t){for(let n of y)n(e,t)}function E(e){b=!0,function(e){return!(e.metaKey||!d()&&e.altKey||e.ctrlKey)}(e)&&(h="keyboard",w("keyboard",e))}function j(e){h="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,w("pointer",e))}function O(e){p(e)&&(b=!0,h="virtual")}function C(e){e.target!==window&&e.target!==document&&(b||(h="virtual",w("virtual",e)),b=!1)}function S(){b=!1}function M(){if("undefined"===typeof window||m)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",E,!0),document.addEventListener("keyup",E,!0),document.addEventListener("click",O,!0),window.addEventListener("focus",C,!0),window.addEventListener("blur",S,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",j,!0),document.addEventListener("pointermove",j,!0),document.addEventListener("pointerup",j,!0)):(document.addEventListener("mousedown",j,!0),document.addEventListener("mousemove",j,!0),document.addEventListener("mouseup",j,!0)),m=!0}function A(){return"pointer"!==h}function x(e){void 0===e&&(e={}),M();let{isTextInput:t,autoFocus:n}=e,[r,o]=(0,a.useState)(n||A());return(0,a.useEffect)((()=>{let e=(e,n)=>{t&&"keyboard"===e&&n instanceof KeyboardEvent&&!g[n.key]||o(A())};return y.add(e),()=>{y.delete(e)}}),[t]),{isFocusVisible:r}}"undefined"!==typeof document&&("loading"!==document.readyState?M():document.addEventListener("DOMContentLoaded",M));new Set;const P=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];P.join(":not([hidden]),");P.push('[tabindex]:not([tabindex="-1"]):not([disabled])');P.join(':not([hidden]):not([tabindex="-1"]),');function k(e){void 0===e&&(e={});let{within:t}=e,[n,r]=(0,a.useState)(!1),[o,i]=(0,a.useState)(!1),{isFocusVisible:u}=x(e),{focusProps:c}=function(e){if(e.isDisabled)return{focusProps:{}};let t,n;return(e.onFocus||e.onFocusChange)&&(t=t=>{t.target===t.currentTarget&&(e.onFocus&&e.onFocus(t),e.onFocusChange&&e.onFocusChange(!0))}),(e.onBlur||e.onFocusChange)&&(n=t=>{t.target===t.currentTarget&&(e.onBlur&&e.onBlur(t),e.onFocusChange&&e.onFocusChange(!1))}),{focusProps:{onFocus:t,onBlur:n}}}({isDisabled:t,onFocusChange:r}),{focusWithinProps:s}=function(e){let t=(0,a.useRef)({isFocusWithin:!1}).current;return e.isDisabled?{focusWithinProps:{}}:{focusWithinProps:{onFocus:n=>{t.isFocusWithin||(e.onFocusWithin&&e.onFocusWithin(n),e.onFocusWithinChange&&e.onFocusWithinChange(!0),t.isFocusWithin=!0)},onBlur:n=>{t.isFocusWithin&&!n.currentTarget.contains(n.relatedTarget)&&(e.onBlurWithin&&e.onBlurWithin(n),e.onFocusWithinChange&&e.onFocusWithinChange(!1),t.isFocusWithin=!1)}}}}({isDisabled:!t,onFocusWithinChange:i});return{isFocused:t?o:n,isFocusVisible:(t?o:n)&&u,focusProps:t?s:c}}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function _(e){return null!=e}function W(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var u=i[a];u in e&&(t[u]=e[u])}return t}function D(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var u=i[a];r.includes(u)||(t[u]=e[u])}return t}function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=I(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var U="undefined"!==typeof window,N=Symbol("NONE"),R=U?a.useLayoutEffect:a.useEffect;function K(e,t,n){return Array.isArray(n)?a.createElement.apply(a,[e,t].concat(n)):n||"children"in t?a.createElement(e,t,n):a.createElement(e,t)}function Z(e){return Array.isArray(e)?1===e.length?e[0]:a.createElement.apply(a,[a.Fragment,{}].concat(e)):e}function $(e){for(var t=L({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var u=i[a],c=0,s=Object.keys(u);c<s.length;c++){var f=s[c];t[f]=z(f,t[f],u[f])}return t}function V(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=I(t);!(n=r()).done;){V(n.value,e)}}}function z(e,t,n){return t===N||n===N?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?L({},t,n):"ref"===e?B(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function Q(e,t,n,r){var o=t.children,a=T(t,["children"]),i=Y(o,null!=n&&n);return K(e,L({ref:r},a),i)}function q(e,t){var n=e.as,r=e.hasGap;return Q(null!=n?n:"div",T(e,["as","hasGap"]),r,t)}var G=(0,a.forwardRef)(q),J=function(e){return(0,a.forwardRef)((function(t,n){var r=t.hasGap,o=T(t,["hasGap"]);return Q(e,o,r,n)}))},X=Object.assign(G,{div:J("div"),a:J("a"),button:J("button"),h1:J("h1"),h2:J("h2"),h3:J("h3"),h4:J("h4"),h5:J("h5"),h6:J("h6"),label:J("label"),form:J("form"),section:J("section"),head:J("head"),main:J("main"),nav:J("nav")});function Y(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?a.createElement.apply(i,["div",{className:n}].concat(e)):(0,a.createElement)("div",{className:n},e):null}function ee(e,t,n,r){var o=ie(e),a=ae(n,o.props);if("render"===o.type)return o.render(a,t);var i=t;"as"===o.type&&o.as&&(t===X?a.as=o.as:i=o.as);var u=a.children;o.wrapChildren&&(u=o.wrapChildren(Z(u))),r&&(u=Y(u,!0));var c=K(i,a,u);return o.wrap&&(c=o.wrap(c)),c}var te=new Map;function ne(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var c=re.apply(void 0,[e,t].concat(i));if(n&&te.set(n,c),r){var s,f=o?null!=(s=te.get(o))?s:null:c;return te.clear(),f}return c}function re(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return ee(r,e,$.apply(void 0,[t,0===u.length?{}:{children:Z(u)}].concat(a)),o)}var oe=Symbol("UNSET");function ae(e,t){if(!t)return e;for(var n=L({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],u=t[a];u===oe?delete n[a]:(null!=u||"className"===a||"style"===a||a.startsWith("on")&&"function"===typeof i||(u=N),n[a]=z(a,i,u))}return n}function ie(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||a.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?L({},e,{props:e.props||{},type:"as"}):"render"in e?L({},e,{type:"render"}):"props"in e?L({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?L({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function ue(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=ce(e[a],t[a])}return n}function ce(e,t){var n,r;if(!e)return t;if(!t)return e;var o=ie(e),a=ie(t),i=H.apply(void 0,[o.wrap,a.wrap].filter(_)),u=H.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(_)),c=ae(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};var s=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return L({props:c,wrap:i,wrapChildren:u},s?{as:s}:{})}function se(e,t){var n,r,o,a,i,u,c,s,f=t.name,l=t.descendantNames,d=t.internalVariantPropNames,p=t.internalArgPropNames,v=["variants","args","overrides"],h=(a=D.apply(void 0,[W.apply(void 0,[e].concat(d))].concat(v)),i=null!=(n=e.variants)?n:{},L({},a,i)),y=(u=D.apply(void 0,[W.apply(void 0,[e].concat(p))].concat(v)),c=null!=(r=e.args)?r:{},L({},u,c)),m=ue(D.apply(void 0,[W.apply(void 0,[e].concat(l))].concat(p,d,v)),null!=(o=e.overrides)?o:{}),b=D.apply(void 0,[e,"variants","args","overrides"].concat(l,d,p));Object.keys(b).length>0&&(m=ue(m,((s={})[f]={props:b},s)));return{variants:h,args:y,overrides:m}}function fe(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return a.createElement(e.component,W.apply(void 0,[e].concat(t)),a.createElement("a",Object.assign({},D.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(n=e.href,/^\/(?!\/)/.test(n))?a.createElement(e.component,L({},D(e,"component","platform","href"),{to:e.href})):a.createElement("a",Object.assign({},D(e,"component","platform")));var n}var le=[],de={};function pe(){return U?Object.entries(de).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ve=void 0;function he(e,t){return Object.assign(de,t),function(){var t=(0,a.useState)()[1],n=(0,a.useRef)(ve||[]);return R((function(){var e=function(){ve&&n.current.join("")!==ve.join("")&&(n.current=ve,t({}))};return le.push(e),void 0===ve&&(ve=pe()),e(),function(){le.splice(le.indexOf(e),1)}}),[]),e?ve||[]:ve?ve[ve.length-1]:void 0}}U&&window.addEventListener("resize",(function(){var e=pe();ve&&e.join("")===ve.join("")||(ve=e,u.unstable_batchedUpdates((function(){return le.forEach((function(e){return e()}))})))}));var ye={useHover:function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return[t,{onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)}}]},useFocused:function(e){var t=k({within:!1,isTextInput:e.isTextInput});return[t.isFocused,t.focusProps]},useFocusVisible:function(e){var t=k({within:!1,isTextInput:e.isTextInput});return[t.isFocusVisible,t.focusProps]},useFocusedWithin:function(e){var t=k({within:!0,isTextInput:e.isTextInput});return[t.isFocused,t.focusProps]},useFocusVisibleWithin:function(e){var t=k({within:!0,isTextInput:e.isTextInput});return[t.isFocusVisible,t.focusProps]},usePressed:function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return[t,{onMouseDown:function(){return n(!0)},onMouseUp:function(){return n(!1)}}]}};function me(e,t){return ye[e](t)}var be=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},110:function(e,t,n){"use strict";n.d(t,{ih:function(){return p},ZP:function(){return h}});var r=n(7294),o=n(9630),a=n(8507),i=n(7828),u=n(8481);const c={Homepage:o.ZP,TwojeSpacery:a.ZP,TourThumbnail:i.ZP},s={Screen:{component:u.wd,isContext:!Boolean("ScreenVariantProvider")}},f={Homepage:{h9nWMgL3KT7o2EC7U4D2QA:o.ZP},TwojeSpacery:{h9nWMgL3KT7o2EC7U4D2QA:a.ZP},TourThumbnail:{h9nWMgL3KT7o2EC7U4D2QA:i.ZP}},l={Screen:{h9nWMgL3KT7o2EC7U4D2QA:{component:u.wd,isContext:!Boolean(void 0)}}},d={"/":{name:"Homepage",projectId:"h9nWMgL3KT7o2EC7U4D2QA"},"/your-tours":{name:"TwojeSpacery",projectId:"h9nWMgL3KT7o2EC7U4D2QA"}};function p(e){return Array.isArray(e)&&(e=e.join("/")),e.startsWith("/")||(e="/"+e),d[e]}function v(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if(s[e]){const{component:t,isContext:r}=s[e];return[r?t.Provider:t,n]}if(!l[e])throw new Error(`The provider ${e} could not be found.`);if(!l[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(l[e])}`);const{component:r,isContext:o}=l[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function h({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const a=function(e,t){if(c[t])return c[t];if(!f[t])throw new Error(`The component ${t} could not be found.`);if(!f[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(f[t])}`);return f[t][e]}(e,t);return v(r.createElement(a,n),e,o)}},6071:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var a=o(n(7294)),i=n(1689),u=n(2441),c=n(5749),s={};function f(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.asPath||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),w=g&&"object"===typeof g&&g.ref,E=(0,c.useIntersection)({rootMargin:"200px"}),j=r(E,2),O=j[0],C=j[1],S=a.default.useCallback((function(e){O(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,O]);(0,a.useEffect)((function(){var e=C&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,C,b,t,n]);var M={ref:S,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}))}(e,n,d,p,h,y,m,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var A="undefined"!==typeof b?b:n&&n.locale,x=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,A,n&&n.locales,n&&n.domainLocales);M.href=x||(0,i.addBasePath)((0,i.addLocale)(p,A,n&&n.defaultLocale))}return a.default.cloneElement(g,M)};t.default=l},5749:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||l||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!i&&!l){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=n(7294),a=n(8391),i="undefined"!==typeof IntersectionObserver;var u=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(617))&&a.__esModule?a:{default:a},c=n(3367),s=n(4287),f=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var v=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=v.length;c<s;c++){var f=v[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],d=r[f]||new Set;"name"===f&&i||!d.has(l)?(d.add(l),r[f]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},617:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),u=n(7690),c=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},3179:function(){},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},5093:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(355);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9999:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5093);var o=n(355);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},355:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5093);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()}}}]);