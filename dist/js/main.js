/*! PizzaWebPageOptimization - v - 2017-06-09 */// Images Array
var imgGroup = [
	'dist/images_src/kitten1.jp',
	'dist/images_src/kitten2.jp',
	'dist/images_src/kitten3.jp',
	'dist/images_src/kitten4.jp'
];

// HTML for one image
var imgRow = '<div class="row"></div>';
var imgContainer = '<div class="container col-md-6"></div>';
var imgHeader = '<h2><span class="counter">1</span> Clicks</h2>';
var imgPict = '<img class="img-fluid" alt="Responsive image" src="%data%"/>';


  ;// Shorthand for $( document ).ready()
$(function() {
  console.log( "ready!" );
  $('#catImg-1').on({
    'click': function() {
      //Change image
      var src = ($(this).attr('src') === 'dist/images_src/kitten1.jpg')
        ? 'dist/images_src/kitten2.jpg'
        : 'dist/images_src/kitten1.jpg';
      $(this).attr('src', src);
      //Add one to counter
      var counter = parseInt($('#catainer-1 span.counter').text());
      ++counter;
      $('#catainer-1 span.counter').text(counter);
  }
  });//catImg-1
  $('#catImg-2').on({
    'click': function() {
      //Change image
      var src = ($(this).attr('src') === 'dist/images_src/kitten3.jpg')
        ? 'dist/images_src/kitten4.jpg'
        : 'dist/images_src/kitten3.jpg';
      $(this).attr('src', src);
      //Add one to counter
      var counter = parseInt($('#catainer-2 span.counter').text());
      ++counter;
      $('#catainer-2 span.counter').text(counter);
    }
  });//catImg-2
});;// slideout.js
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.Slideout=t()}}(function(){var t,e,n;return function i(t,e,n){function o(s,a){if(!e[s]){if(!t[s]){var u=typeof require=="function"&&require;if(!a&&u)return u(s,!0);if(r)return r(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var l=e[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,i,t,e,n)}return e[s].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,n){"use strict";var i=t("decouple");var o=t("emitter");var r;var s=false;var a=window.document;var u=a.documentElement;var f=window.navigator.msPointerEnabled;var l={start:f?"MSPointerDown":"touchstart",move:f?"MSPointerMove":"touchmove",end:f?"MSPointerUp":"touchend"};var c=function _(){var t=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;var e=a.getElementsByTagName("script")[0].style;for(var n in e){if(t.test(n)){return"-"+n.match(t)[0].toLowerCase()+"-"}}if("WebkitOpacity"in e){return"-webkit-"}if("KhtmlOpacity"in e){return"-khtml-"}return""}();function p(t,e){for(var n in e){if(e[n]){t[n]=e[n]}}return t}function h(t,e){t.prototype=p(t.prototype||{},e.prototype)}function d(t){t=t||{};this._startOffsetX=0;this._currentOffsetX=0;this._opening=false;this._moved=false;this._opened=false;this._preventOpen=false;this._touch=t.touch===undefined?true:t.touch&&true;this.panel=t.panel;this.menu=t.menu;this.panel.className+=" slideout-panel";this.menu.className+=" slideout-menu";this._fx=t.fx||"ease";this._duration=parseInt(t.duration,10)||300;this._tolerance=parseInt(t.tolerance,10)||70;this._padding=this._translateTo=parseInt(t.padding,10)||256;this._orientation=t.side==="right"?-1:1;this._translateTo*=this._orientation;if(this._touch){this._initTouchEvents()}}h(d,o);d.prototype.open=function(){var t=this;this.emit("beforeopen");if(u.className.search("slideout-open")===-1){u.className+=" slideout-open"}this._setTransition();this._translateXTo(this._translateTo);this._opened=true;setTimeout(function(){t.panel.style.transition=t.panel.style["-webkit-transition"]="";t.emit("open")},this._duration+50);return this};d.prototype.close=function(){var t=this;if(!this.isOpen()&&!this._opening){return this}this.emit("beforeclose");this._setTransition();this._translateXTo(0);this._opened=false;setTimeout(function(){u.className=u.className.replace(/ slideout-open/,"");t.panel.style.transition=t.panel.style["-webkit-transition"]=t.panel.style[c+"transform"]=t.panel.style.transform="";t.emit("close")},this._duration+50);return this};d.prototype.toggle=function(){return this.isOpen()?this.close():this.open()};d.prototype.isOpen=function(){return this._opened};d.prototype._translateXTo=function(t){this._currentOffsetX=t;this.panel.style[c+"transform"]=this.panel.style.transform="translate3d("+t+"px, 0, 0)"};d.prototype._setTransition=function(){this.panel.style[c+"transition"]=this.panel.style.transition=c+"transform "+this._duration+"ms "+this._fx};d.prototype._initTouchEvents=function(){var t=this;i(a,"scroll",function(){if(!t._moved){clearTimeout(r);s=true;r=setTimeout(function(){s=false},250)}});a.addEventListener(l.move,function(e){if(t._moved){e.preventDefault()}});this.panel.addEventListener(l.start,function(e){if(typeof e.touches==="undefined"){return}t._moved=false;t._opening=false;t._startOffsetX=e.touches[0].pageX;t._preventOpen=!t._touch||!t.isOpen()&&t.menu.clientWidth!==0});this.panel.addEventListener("touchcancel",function(){t._moved=false;t._opening=false});this.panel.addEventListener(l.end,function(){if(t._moved){t._opening&&Math.abs(t._currentOffsetX)>t._tolerance?t.open():t.close()}t._moved=false});this.panel.addEventListener(l.move,function(e){if(s||t._preventOpen||typeof e.touches==="undefined"){return}var n=e.touches[0].clientX-t._startOffsetX;var i=t._currentOffsetX=n;if(Math.abs(i)>t._padding){return}if(Math.abs(n)>20){t._opening=true;var o=n*t._orientation;if(t._opened&&o>0||!t._opened&&o<0){return}if(o<=0){i=n+t._padding*t._orientation;t._opening=false}if(!t._moved&&u.className.search("slideout-open")===-1){u.className+=" slideout-open"}t.panel.style[c+"transform"]=t.panel.style.transform="translate3d("+i+"px, 0, 0)";t.emit("translate",i);t._moved=true}})};d.prototype.enableTouch=function(){this._touch=true;return this};d.prototype.disableTouch=function(){this._touch=false;return this};e.exports=d},{decouple:2,emitter:3}],2:[function(t,e,n){"use strict";var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t,e,n){var o,r=false;function s(t){o=t;a()}function a(){if(!r){i(u);r=true}}function u(){n.call(t,o);r=false}t.addEventListener(e,s,false)}e.exports=o},{}],3:[function(t,e,n){"use strict";var i=function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}};n.__esModule=true;var o=function(){function t(){i(this,t)}t.prototype.on=function e(t,n){this._eventCollection=this._eventCollection||{};this._eventCollection[t]=this._eventCollection[t]||[];this._eventCollection[t].push(n);return this};t.prototype.once=function n(t,e){var n=this;function i(){n.off(t,i);e.apply(this,arguments)}i.listener=e;this.on(t,i);return this};t.prototype.off=function o(t,e){var n=undefined;if(!this._eventCollection||!(n=this._eventCollection[t])){return this}n.forEach(function(t,i){if(t===e||t.listener===e){n.splice(i,1)}});if(n.length===0){delete this._eventCollection[t]}return this};t.prototype.emit=function r(t){var e=this;for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++){i[o-1]=arguments[o]}var r=undefined;if(!this._eventCollection||!(r=this._eventCollection[t])){return this}r=r.slice(0);r.forEach(function(t){return t.apply(e,i)});return this};return t}();n["default"]=o;e.exports=n["default"]},{}]},{},[1])(1)});

// Config Options
var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('navbar-main'),
  'padding': 256,
  'tolerance': 70
});

// Default Open
slideout.close();

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
  if(slideout.isOpen()){
    alert("You Opened!");
  }else{
    alert("You Closed!");
  }
});

 