'use strict';

(function($) {
  /*
   * Body class toggle
   */
  $('.toggle-body-js').on('click', function(event) {
    const $target = $(event.currentTarget);
    const value = $target.attr('data-toggle-value');

    $("body").toggleClass(value);

    if (window.shuffleInstance) {
      shuffleInstance.update();
    }
  });

  /*
   * Cards
   */
  const el = document.querySelector('.js-cards');
  if (el) {
    window.shuffleInstance = new Shuffle(el, {
      itemSelector: '.js-card',
      filterMode: Shuffle.FilterMode.ANY
    });
  }

  /*
   * Filters
   */
  var options = [];

  $('.dropdown-filter-js a').on('click', function(event) {
    const $target = $(event.currentTarget);
    const value = $target.attr('data-value');
    const $input = $target.find('input');
    let idx;

    if (value === 'reset') {
      $('.dropdown-filter-js input[type=checkbox]').prop('checked', false);
      options = [];
    } else {
      if ((idx = options.indexOf(value)) > -1) {
        options.splice(idx, 1);
        setTimeout(function() { $input.prop('checked', false) }, 0);
      } else {
        options.push(value);
        setTimeout(function() { $input.prop('checked', true) }, 0);
      }
    }


    $(event.target).blur();

    if (window.shuffleInstance) {
      shuffleInstance.filter(options);
    }

    return false;
  });


  /*
   * Sort
   */
  $('.dropdown-sort-js a').on('click', function(event) {
    const $target = $(event.currentTarget);
    const value = $target.attr('data-value');
    function sortByTitle(element) {
      return element.getAttribute('data-title').toLowerCase();
    }
    function sortByCategory(element) {
      return element.getAttribute('data-category');
    }
    function sortByPhase(element) {
      return element.getAttribute('data-phase');
    }
    let options;

    if (value === 'title') {
      options = {
        by: sortByTitle
      };
    } else if (value === 'category') {
      options = {
        by: sortByCategory
      };
    } else if (value === 'phase') {
      options = {
        by: sortByPhase
      };
    } else {
      options = {};
    }

    if (window.shuffleInstance) {
      shuffleInstance.sort(options);
    }

    return false;
  });


})(jQuery);

/*!
 * css-vars-ponyfill
 * v1.16.4
 * https://github.com/jhildenbiddle/css-vars-ponyfill
 * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).cssVars=t()}(this,function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},r=Array.isArray(e)?e:[e],o=Array.apply(null,Array(r.length)).map(function(e){return null});function s(){return!("<"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().charAt(0))}function a(e,t){n.onError(e,r[t],t)}function c(e,t){var s=n.onSuccess(e,r[t],t);e=!1===s?"":s||e,o[t]=e,-1===o.indexOf(null)&&n.onComplete(o)}var i=document.createElement("a");r.forEach(function(e,t){if(i.setAttribute("href",e),i.href=String(i.href),Boolean(document.all&&!window.atob)&&i.host.split(":")[0]!==location.host.split(":")[0]){if(i.protocol===location.protocol){var r=new XDomainRequest;r.open("GET",e),r.timeout=0,r.onprogress=Function.prototype,r.ontimeout=Function.prototype,r.onload=function(){s(r.responseText)?c(r.responseText,t):a(r,t)},r.onerror=function(e){a(r,t)},setTimeout(function(){r.send()},0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),a(null,t)}else{var o=new XMLHttpRequest;o.open("GET",e),n.mimeType&&o.overrideMimeType&&o.overrideMimeType(n.mimeType),n.onBeforeSend(o,e,t),o.onreadystatechange=function(){4===o.readyState&&(200===o.status&&s(o.responseText)?c(o.responseText,t):a(o,t))},o.send()}})}function r(e){var t={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},r={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},s=Array.apply(null,r.rootElement.querySelectorAll(r.include)).filter(function(e){return t=e,n=r.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,n);var t,n}),a=Array.apply(null,Array(s.length)).map(function(e){return null});function c(){if(-1===a.indexOf(null)){var e=a.join("");r.onComplete(e,a,s)}}function i(e,t,o,s){var i=r.onSuccess(e,o,s);(function e(t,o,s,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];var l=u(t,s,i);l.rules.length?n(l.absoluteUrls,{onBeforeSend:function(e,t,n){r.onBeforeSend(e,o,t)},onSuccess:function(e,t,n){var s=r.onSuccess(e,o,t),a=u(e=!1===s?"":s||e,t,i);return a.rules.forEach(function(t,n){e=e.replace(t,a.absoluteRules[n])}),e},onError:function(n,r,u){c.push({xhr:n,url:r}),i.push(l.rules[u]),e(t,o,s,a,c,i)},onComplete:function(n){n.forEach(function(e,n){t=t.replace(l.rules[n],e)}),e(t,o,s,a,c,i)}}):a(t,c)})(e=void 0!==i&&!1===Boolean(i)?"":i||e,o,s,function(e,n){null===a[t]&&(n.forEach(function(e){return r.onError(e.xhr,o,e.url)}),!r.filter||r.filter.test(e)?a[t]=e:a[t]="",c())})}function u(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s={};return s.rules=(e.replace(t.cssComments,"").match(t.cssImports)||[]).filter(function(e){return-1===r.indexOf(e)}),s.urls=s.rules.map(function(e){return e.replace(t.cssImports,"$1")}),s.absoluteUrls=s.urls.map(function(e){return o(e,n)}),s.absoluteRules=s.rules.map(function(e,t){var r=s.urls[t],a=o(s.absoluteUrls[t],n);return e.replace(r,a)}),s}s.length?s.forEach(function(e,t){var s=e.getAttribute("href"),u=e.getAttribute("rel"),l="LINK"===e.nodeName&&s&&u&&"stylesheet"===u.toLowerCase(),f="STYLE"===e.nodeName;if(l)n(s,{mimeType:"text/css",onBeforeSend:function(t,n,o){r.onBeforeSend(t,e,n)},onSuccess:function(n,r,a){var c=o(s,location.href);i(n,t,e,c)},onError:function(n,o,s){a[t]="",r.onError(n,e,o),c()}});else if(f){var p=e.textContent;r.useCSSOM&&(p=Array.apply(null,e.sheet.cssRules).map(function(e){return e.cssText}).join("")),i(p,t,e,location.href)}else a[t]="",c()}):r.onComplete("",[])}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),r.href=t,o.href=e,o.href}var s=a;function a(e,t,n){e instanceof RegExp&&(e=c(e,n)),t instanceof RegExp&&(t=c(t,n));var r=i(e,t,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+e.length,r[1]),post:n.slice(r[1]+t.length)}}function c(e,t){var n=t.match(e);return n?n[0]:null}function i(e,t,n){var r,o,s,a,c,i=n.indexOf(e),u=n.indexOf(t,i+1),l=i;if(i>=0&&u>0){for(r=[],s=n.length;l>=0&&!c;)l==i?(r.push(l),i=n.indexOf(e,l+1)):1==r.length?c=[r.pop(),u]:((o=r.pop())<s&&(s=o,a=u),u=n.indexOf(t,l+1)),l=i<u&&i>=0?i:u;r.length&&(c=[s,a])}return c}function u(t){var n=e({},{onlyVars:!1,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});function r(e){throw new Error("CSS parse error: ".concat(e))}function o(e){var n=e.exec(t);if(n)return t=t.slice(n[0].length),n}function a(){return o(/^{\s*/)}function c(){return o(/^}/)}function i(){o(/^\s*/)}function u(){if(i(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return r("end of comment is missing");var n=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:n}}}function l(){for(var e,t=[];e=u();)t.push(e);return n.removeComments?[]:t}function f(){for(i();"}"===t[0];)r("extra closing bracket");var e=o(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function p(){o(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=o(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!o(/^:\s*/))return r("property missing ':'");var n=o(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),s={type:"declaration",property:t.replace(e,""),value:n?n[0].replace(e,"").trim():""};return o(/^[;\s]*/),s}}function d(){if(!a())return r("missing '{'");for(var e,t=l();e=p();)t.push(e),t=t.concat(l());return c()?t:r("missing '}'")}function m(){i();for(var e,t=[];e=o(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),o(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:d()}}function v(){if(i(),"@"===t[0]){var e=function(){var e=o(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=o(/^([-\w]+)\s*/)))return r("@keyframes missing name");var n,s=e[1];if(!a())return r("@keyframes missing '{'");for(var i=l();n=m();)i.push(n),i=i.concat(l());return c()?{type:"keyframes",name:s,vendor:t,keyframes:i}:r("@keyframes missing '}'")}}()||function(){var e=o(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:h()}}()||function(){if(o(/^@host\s*/))return{type:"host",rules:h()}}()||function(){var e=o(/^@media *([^{]+)/);if(e)return{type:"media",media:e[1].trim(),rules:h()}}()||function(){var e=o(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(o(/^@page */))return{type:"page",selectors:f()||[],declarations:d()}}()||function(){var e=o(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:h()}}()||function(){if(o(/^@font-face\s*/))return{type:"font-face",declarations:d()}}()||function(){var e=o(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}();if(e&&n.onlyVars){var s=!1;if(e.declarations)s=e.declarations.some(function(e){return/var\(/.test(e.value)});else s=(e.keyframes||e.rules||[]).some(function(e){return(e.declarations||[]).some(function(e){return/var\(/.test(e.value)})});return s?e:{}}return e}}function y(){if(n.onlyVars){var e=s("{","}",t);if(e){var o=-1!==e.pre.indexOf(":root")&&/--\S*\s*:/.test(e.body),a=/var\(/.test(e.body);if(!o&&!a)return t=t.slice(e.end+1),{}}}var c=f()||[],i=n.onlyVars?d().filter(function(e){var t=c.some(function(e){return-1!==e.indexOf(":root")})&&/^--\S/.test(e.property),n=/var\(/.test(e.value);return t||n}):d();return c.length||r("selector missing"),{type:"rule",selectors:c,declarations:i}}function h(e){if(!e&&!a())return r("missing '{'");for(var n,o=l();t.length&&(e||"}"!==t[0])&&(n=v()||y());)n.type&&o.push(n),o=o.concat(l());return e||c()?o:r("missing '}'")}return{type:"stylesheet",stylesheet:{rules:h(!0),errors:[]}}}a.range=i;var l="--",f="var",p={dom:{},temp:{},user:{}};function d(t){var n,r,o=e({},{fixNestedCalc:!0,onlyVars:!1,persist:!1,preserve:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),a=o.persist?p.dom:p.temp=JSON.parse(JSON.stringify(p.dom)),c=u(t,{onlyVars:o.onlyVars});if(c.stylesheet.rules.forEach(function(e){var t=[];if("rule"===e.type&&1===e.selectors.length&&":root"===e.selectors[0]&&(e.declarations.forEach(function(e,n){var r=e.property,o=e.value;r&&0===r.indexOf(l)&&(a[r]=o,t.push(n))}),!o.preserve))for(var n=t.length-1;n>=0;n--)e.declarations.splice(t[n],1)}),Object.keys(p.user).forEach(function(e){a[e]=p.user[e]}),Object.keys(o.variables).length){var i={declarations:[],selectors:[":root"],type:"rule"};Object.keys(o.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=o.variables[e];o.persist&&(p.user[t]=n),a[t]!==n&&(a[t]=n,i.declarations.push({type:"declaration",property:t,value:n}))}),o.preserve&&i.declarations.length&&c.stylesheet.rules.push(i)}return function e(t,n){t.rules.forEach(function(r){r.rules?e(r,n):r.keyframes?r.keyframes.forEach(function(e){"keyframe"===e.type&&n(e.declarations,r)}):r.declarations&&n(r.declarations,t)})}(c.stylesheet,function(e,t){for(var n,r,s,c=0;c<e.length;c++)s=(n=e[c]).value,"declaration"===n.type&&s&&-1!==s.indexOf(f+"(")&&(r=m(s,a,o))!==n.value&&(o.preserve?(e.splice(c,0,{type:n.type,property:n.property,value:r}),c++):n.value=r)}),o.fixNestedCalc&&(n=c.stylesheet.rules,r=/(-[a-z]+-)?calc\(/,n.forEach(function(e){e.declarations&&e.declarations.forEach(function(e){for(var t=e.value,n="";r.test(t);){var o=s("calc(",")",t||"");for(t=t.slice(o.end);r.test(o.body);){var a=s(r,")",o.body);o.body="".concat(a.pre,"(").concat(a.body,")").concat(a.post)}n+="".concat(o.pre,"calc(").concat(o.body),n+=r.test(t)?"":")".concat(o.post)}e.value=n||e.value})})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+o(e.rules)+"}"},"font-face":function(e){return"@font-face{"+o(e.declarations)+"}"},host:function(e){return"@host{"+o(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+o(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+o(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+o(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+o(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+o(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+o(e.rules)+"}"}};function o(e){for(var o="",s=0;s<e.length;s++){var a=e[s];n&&n(a);var c=r[a.type](a);c&&(o+=c,c.length&&a.selectors&&(o+=t))}return o}return o(e.stylesheet.rules)}(c)}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(-1===e.indexOf("var("))return e;var o=s("(",")",e),a="CSS transform warning:";return o?"var"===o.pre.slice(-3)?0===o.body.trim().length?(n.onWarning("".concat(a," var() must contain a non-whitespace string")),e):o.pre.slice(0,-3)+function(e){var o=e.split(",")[0].replace(/[\s\n\t]/g,""),s=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],c=t.hasOwnProperty(o)?String(t[o]):void 0,i=c||(s?String(s):void 0),u=r||e;return c||n.onWarning("".concat(a,' variable "').concat(o,'" is undefined')),i&&"undefined"!==i&&i.length>0?m(i,t,n,u):"var(".concat(u,")")}(o.body)+m(o.post,t,n):o.pre+"(".concat(m(o.body,t,n),")")+m(o.post,t,n):(-1!==e.indexOf("var(")&&n.onWarning("".concat(a,' missing closing ")" in the value "').concat(e,'"')),e)}var v="css-vars-ponyfill",y="undefined"!=typeof window,h=y&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),g={rootElement:y?document:null,include:"style,link[rel=stylesheet]",exclude:"",fixNestedCalc:!0,onlyLegacy:!0,onlyVars:!1,preserve:!1,shadowDOM:!1,silent:!1,updateDOM:!0,updateURLs:!0,variables:{},watch:null,onBeforeSend:function(){},onSuccess:function(){},onWarning:function(){},onError:function(){},onComplete:function(){}},S={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssRootRules:/(?::root\s*{\s*[^}]*})/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVars:/(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},E=null,b=!1;function x(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e({},g,n),s=v;function a(e,t,n,r){o.silent||console.error("".concat(e,"\n"),t),o.onError(e,t,n,r)}function c(e){o.silent||console.warn(e),o.onWarning(e)}if(o.exclude="#".concat(s)+(o.exclude?",".concat(o.exclude):""),y)if("loading"!==document.readyState){var i=o.shadowDOM||o.rootElement.shadowRoot||o.rootElement.host;if(h&&o.onlyLegacy){if(o.updateDOM){var u=o.rootElement.host||(o.rootElement===document?document.documentElement:o.rootElement);Object.keys(o.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=o.variables[e];u.style.setProperty(t,n)})}}else i&&!b?r({rootElement:g.rootElement,include:g.include,exclude:o.exclude,onSuccess:function(e,t,n){return(e.match(S.cssRootRules)||[]).join("")||!1},onComplete:function(e,t,n){d(e,{persist:!0}),b=!0,x(o)}}):(o.watch?function(e,t){if(!window.MutationObserver)return;var n=function(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")},r=function(e){return"STYLE"===e.tagName&&(!t||e.id!==t)},o=null;E&&E.disconnect();e.watch=g.watch,(E=new MutationObserver(function(t){var s=!1;t.forEach(function(t){if("attributes"===t.type)s=n(t.target)||r(t.target);else if("childList"===t.type){var a=Array.apply(null,t.addedNodes),c=Array.apply(null,t.removedNodes);s=[].concat(a,c).some(function(e){var t=n(e)&&!e.disabled,o=r(e)&&!e.disabled&&S.cssVars.test(e.textContent);return t||o})}s&&(clearTimeout(o),o=setTimeout(function(){x(e)},1))})})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0})}(o,s):!1===o.watch&&E&&E.disconnect(),r({rootElement:o.rootElement,include:o.include,exclude:o.exclude,filter:o.onlyVars?S.cssVars:null,onBeforeSend:o.onBeforeSend,onSuccess:function(e,t,n){var r=o.onSuccess(e,t,n);(e=void 0!==r&&!1===Boolean(r)?"":r||e,o.updateURLs)&&(e.replace(S.cssComments,"").match(S.cssUrls)||[]).forEach(function(t){var r=t.replace(S.cssUrls,"$1"),o=C(r,n);e=e.replace(t,t.replace(r,o))});return e},onError:function(e,t,n){var r=e.responseURL||C(n,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");a("CSS XHR Error: ".concat(r," ").concat(e.status," ").concat(o),t,e,r)},onComplete:function(n,r,i){var u=null;n=r.map(function(e,t){return S.cssVars.test(e)?e:"/*__CSSVARSPONYFILL-".concat(t,"__*/")}).join("");try{n=d(n,{fixNestedCalc:o.fixNestedCalc,onlyVars:o.onlyVars,persist:o.updateDOM,preserve:o.preserve,variables:o.variables,onWarning:c});var l=S.cssKeyframes.test(n);if(n=n.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g,function(e,t){return r[t]}),o.updateDOM&&i&&i.length){var f=i[i.length-1];(u=o.rootElement.querySelector("#".concat(s))||document.createElement("style")).setAttribute("id",s),u.textContent!==n&&(u.textContent=n),f.nextSibling!==u&&f.parentNode&&f.parentNode.insertBefore(u,f.nextSibling),l&&function(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(t){for(var n=e.getElementsByTagName("*"),r=[],o=0,s=n.length;o<s;o++){var a=n[o],c=getComputedStyle(a)[t];"none"!==c&&(a.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",r.push(a))}document.body.offsetHeight;for(var i=0,u=r.length;i<u;i++){var l=r[i].style;l[t]=l[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}(o.rootElement)}}catch(e){var m=!1;r.forEach(function(e,t){try{e=d(e,o)}catch(e){var n=i[t-0];m=!0,a(e.message,n)}}),m||a(e.message||e)}if(o.shadowDOM)for(var v,y=[o.rootElement].concat(t(o.rootElement.querySelectorAll("*"))),h=0;v=y[h];++h){if(v.shadowRoot&&v.shadowRoot.querySelector("style"))x(e({},o,{rootElement:v.shadowRoot,variables:p.dom}))}o.onComplete(n,u,JSON.parse(JSON.stringify(o.updateDOM?p.dom:p.temp)))}}))}else document.addEventListener("DOMContentLoaded",function e(t){x(n),document.removeEventListener("DOMContentLoaded",e)})}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),r.href=t,o.href=e,o.href}return x});
//# sourceMappingURL=css-vars-ponyfill.min.js.map
