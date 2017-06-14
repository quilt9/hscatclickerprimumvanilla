$(function(){

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
    },
    /* 14 */
    getCurrentCat: function() {
      return model.currentCat;
    }
  };




  /* ============== VIEW ============= */
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
          //create a new cat list item and set its text
          elem = document.createElement('li');
          elem.textContent = cat.name;
          // set up click function for each cat element
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
  var catDisplayView = {
    init: function() {
      // store pointers to our DOM elements for easy access later
      this.catElem = document.getElementById('catainer');
      this.catNameElem = document.getElementById('cat-name');
      this.catImageElem = document.getElementById('cat-img');
      this.countElem = document.getElementById('cat-count');
      // set up click event to cat container
      this.catElem.addEventListener('click', function() {
        // increment the current cat's counter from octopus
        /* 12 */
        console.log("Seriously.");
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
      this.countElem.textContent = currentCat.clickCount;
      this.catNameElem.textContent = currentCat.name;
      this.catImageElem.src = currentCat.imgSrc;
      this.catImageElem.alt = currentCat.imgAlt;
    }
  };


  // Initialize the app
  /* 1 */
  octopus.init();

});