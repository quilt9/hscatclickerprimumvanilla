/*! clickcatapp - v - 2017-06-15 */$(function(){

  /* ============= MODEL ============= */
  var model = {
    /* 4 */
    currentCat: null,
  	cats: [
      {
        clickCount: 0,
        name: "Orson Carte",
  			imgSrc: "dist/images_src/kitten1.jpg",
  			imgAlt: "Cute kitten staring at you with love"
      }, {
        clickCount: 0,
        name: "Warren Peace",
  			imgSrc: "dist/images_src/kitten2.jpg",
  			imgAlt: "Fury cat defending her food"	
      }, {
        clickCount: 0,
        name: "Jack Paw",
  			imgSrc: "dist/images_src/kitten3.jpg",
  			imgAlt: "Grey cat readying to scratch"
      }, {
        clickCount: 0,
        name: "Carl E. Bird",
  			imgSrc: "dist/images_src/kitten4.jpg",
  			imgAlt: "Cat about to dose off"
      }, {
        clickCount: 0,
    		name: "Furry Dan",
  			imgSrc: "dist/images_src/kitten5.jpg",
  			imgAlt: "Cat laying on its side and relaxing"
      }
    ]
  };

  /* ============ OCTOPUS ============ */
  var octopus = {
    /* 2 */
    init: function() {
      // set our current cat to the first one in the cat list
      /* 5 */
      model.currentCat = model.cats[0];

      // initialize the cat list view and cat display view separately
      /* 6 */
      catListView.init();
      /* 11 */
      catDisplayView.init();
      /* 15 */
      adminView.init();
    },
    /* 9 */
    getCats: function() {
      return model.cats;
    },
    /* 10 */
    // set the currently-selected cat to the object passed in from catListView.render()
    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },
    /* 12 */
    incrumentCounter: function() {
      model.currentCat.clickCount++;
      catDisplayView.render();
      adminView.render();
    },
    /* 14 */
    getCurrentCat: function() {
      return model.currentCat;
    }
  };

  /* ============== VIEW ============= */
  // Visual - create a list of cats by name

  var catListView = {
    /* 7 */
    init: function() {
      // store the DOM element for easy access later
      this.catListElem = document.getElementById('panel-list');
      // render this (cat list) view (update the DOM elements with the right values)
      this.render();
    },
    /* 8 */
    render: function() {
      // create the variables needed in render
      var cat, elem, i;
      // get the cats we'll be rendering from the octopus
      /* 9 */
      var cats = octopus.getCats();
      // empty the cat list
      this.catListElem.innerHTML = '';
      // loop over cats
      for(i=0; i<cats.length; i++) {
        // this is the cat we're currently looping over
        cat = cats[i];
          // create a new cat list item and set its text
          elem = document.createElement('li');
          elem.textContent = cat.name;
          // set up click function for each cat element
          /* Interaction - When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat. */
          elem.addEventListener('click', (function(catCopy) {
            return function() {
              // setCurrentCat from the octopus
              /* 10 */
              octopus.setCurrentCat(catCopy);
              // render the catDisplayView
              /* 11 */
              catDisplayView.render();
            };
          })(cat));
          // add cat element to the list
          this.catListElem.appendChild(elem);
      }// loop
    }
  };

  /* 11 */
  // Visual - create an area to display the selected cat
  var catDisplayView = {
    init: function() {
      // store pointers to our DOM elements for easy access later
      this.catElem = document.getElementById('catainer');
      this.catNameElem = document.getElementById('cat-name');
      this.catImageElem = document.getElementById('cat-img');
      this.countElem = document.getElementById('cat-count');
      // set up click event to cat container
      /* Interaction - The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked. */
      this.catElem.addEventListener('click', function() {
        // increment the current cat's counter from octopus
        /* 12 */
        octopus.incrumentCounter();
      });
      // render this view (update the DOM elements with the right values)
      /* 13 */
      this.render();
    },
    /* 13 */
    render: function() {
      // update the DOM elements with values from the current cat
      /* 14 */
      var currentCat = octopus.getCurrentCat();
      // Visual - create text showing the number of clicks
      this.countElem.textContent = currentCat.clickCount;
      // Visual - create the cat's name
      this.catNameElem.textContent = currentCat.name;
      // Visual - create a picture of the cat
      this.catImageElem.src = currentCat.imgSrc;
      this.catImageElem.alt = currentCat.imgAlt;
    }
  };

/* 15 */
var adminView = {
  init: function() {
    // store pointers to our DOM elements for easy access later    
    this.adminButton = document.getElementById('admin-button');
    this.adminPanel = document.getElementById('admin-container');
    this.adminSave = document.getElementById('admin-save');
    this.adminCancel = document.getElementById('admin-cancel');
    this.inputCatName = document.getElementById('inputCatName');
    this.inputCatImgSrc = document.getElementById('inputCatImgSrc');
    this.inputCatCount = document.getElementById('inputCatCount');
    // Make sure the admin panel is hidden
    this.adminPanel.style.display = 'none';
    // Visual - When the admin button is clicked
    this.adminButton.addEventListener('click', function() {
      // Visual - the admin area should appear
      document.getElementById('admin-container').style.display = 'block';
    });
    // Visual - When the cancel button in the admin area is pressed, the admin area disappears.
    this.adminCancel.addEventListener('click', function() {
      document.getElementById('admin-container').style.display = 'none';
    });
    // Visual - inputs filled in for the currently-selected cat.
    this.render();
  },
  render: function() {
    // update the DOM elements with values from the current cat
    var currentCat = octopus.getCurrentCat();
    // Visual - input text cat's name
    this.inputCatName.value = currentCat.name;
    // Visual - input text cat image url
    this.inputCatImgSrc.value = currentCat.imgSrc;
    // Visual - input text the number of clicks
    this.inputCatCount.value = currentCat.clickCount;
  }
  /*
  update: function() {
    this.adminSave.addEventListener('click', function() {
      console.log("Saved.");
      this.inputCatName.value = input.value;
      // Visual - input text cat image url
      this.inputCatImgSrc.value = input.value;
      // Visual - input text the number of clicks
      this.inputCatCount.value = input.value;
    });
  }
  */
};


  // Initialize the app
  /* 1 */
  octopus.init();

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
  }else{
  }
});

 