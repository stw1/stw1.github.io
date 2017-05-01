"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function e(t,o,n){function r(l,a){if(!o[l]){if(!t[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+l+"'")}var f=o[l]={exports:{}};t[l][0].call(f.exports,function(e){var o=t[l][1][e];return r(o||e)},f,f.exports,e,t,o,n)}return o[l].exports}for(var i="function"==typeof require&&require,l=0;l<n.length;l++)r(n[l]);return r}({1:[function(e,t,o){window.jQuery||alert("The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery."),function(e){function t(e){return"object"==(void 0===e?"undefined":_typeof(e))?e:{top:e,left:e}}var o=e.scrollTo=function(t,o,n){e(window).scrollTo(t,o,n)};o.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0},o.window=function(t){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this;if(t.nodeName&&-1==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]))return t;var o=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||"BackCompat"==o.compatMode?o.body:o.documentElement})},e.fn.scrollTo=function(n,r,i){return"object"==(void 0===r?"undefined":_typeof(r))&&(i=r,r=0),"function"==typeof i&&(i={onAfter:i}),"max"==n&&(n=9e9),i=e.extend({},o.defaults,i),r=r||i.duration,i.queue=i.queue&&i.axis.length>1,i.queue&&(r/=2),i.offset=t(i.offset),i.over=t(i.over),this._scrollable().each(function(){function l(e){f.animate(c,r,i.easing,e&&function(){e.call(this,n,i)})}if(null!=n){var a,s=this,f=e(s),u=n,c={},d=f.is("html,body");switch(void 0===u?"undefined":_typeof(u)){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(u)){u=t(u);break}if(u=e(u,this),!u.length)return;case"object":(u.is||u.style)&&(a=(u=e(u)).offset())}e.each(i.axis.split(""),function(e,t){var n="x"==t?"Left":"Top",r=n.toLowerCase(),h="scroll"+n,m=s[h],p=o.max(s,t);if(a)c[h]=a[r]+(d?0:m-f.offset()[r]),i.margin&&(c[h]-=parseInt(u.css("margin"+n))||0,c[h]-=parseInt(u.css("border"+n+"Width"))||0),c[h]+=i.offset[r]||0,i.over[r]&&(c[h]+=u["x"==t?"width":"height"]()*i.over[r]);else{var y=u[r];c[h]=y.slice&&"%"==y.slice(-1)?parseFloat(y)/100*p:y}i.limit&&/^\d+$/.test(c[h])&&(c[h]=c[h]<=0?0:Math.min(c[h],p)),!e&&i.queue&&(m!=c[h]&&l(i.onAfterFirst),delete c[h])}),l(i.onAfter)}}).end()},o.max=function(t,o){var n="x"==o?"Width":"Height",r="scroll"+n;if(!e(t).is("html,body"))return t[r]-e(t)[n.toLowerCase()]();var i="client"+n,l=t.ownerDocument.documentElement,a=t.ownerDocument.body;return Math.max(l[r],a[r])-Math.min(l[i],a[i])}}(jQuery),function(e){function t(t,o,n){var r=o.hash.slice(1),i=document.getElementById(r)||document.getElementsByName(r)[0];if(i){t&&t.preventDefault();var l=e(n.target);if(!(n.lock&&l.is(":animated")||n.onBefore&&!1===n.onBefore(t,i,l))){if(n.stop&&l._scrollable().stop(!0),n.hash){var t=i.id==r?"id":"name",a=e("<a> </a>").attr(t,r).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});i[t]="",e("body").prepend(a),location=o.hash,a.remove(),i[t]=r}l.scrollTo(i,n).trigger("notify.serialScroll",[i])}}}var o=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0},n.hash=function(o){if(location.hash){if(o=e.extend({},n.defaults,o),o.hash=!1,o.reset){var r=o.duration;delete o.duration,e(o.target).scrollTo(0,o),o.duration=r}t(0,location,o)}},e.fn.localScroll=function(r){function i(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==o&&(!r.filter||e(this).is(r.filter))}return r=e.extend({},n.defaults,r),r.lazy?this.bind(r.event,function(o){var n=e([o.target,o.target.parentNode]).filter(i)[0];n&&t(o,n,r)}):this.find("a,area").filter(i).bind(r.event,function(e){t(e,this,r)}).end().end()}}(jQuery),jQuery(function(e){e.localScroll({filter:".smoothScroll"})})},{}]},{},[1]);