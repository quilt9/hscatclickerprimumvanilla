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
      /* 15 */
      // initialize admin panel
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
      //adminView.render();
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
      // admin panel elements
      this.inputCatName = document.getElementById('inputCatName');
      this.inputCatImgSrc = document.getElementById('inputCatImgSrc');
      this.inputCatCount = document.getElementById('inputCatCount');
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
      /* 15 */
      // Visual - inputs filled in for the currently-selected cat.
      // Visual - input text cat's name
      this.inputCatName.value = currentCat.name;
      // Visual - input text cat image url
      this.inputCatImgSrc.value = currentCat.imgSrc;
      // Visual - input text the number of clicks
      this.inputCatCount.value = currentCat.clickCount;
      console.log("Back to square one.");
    }
  };

  /* 15 */
  var adminView = {
    init: function() {
      // store pointers to our DOM elements for easy access later   
      this.adminPanel = document.getElementById('admin-container'); 
      //this.adminSave = document.getElementById('admin-save');
      //this.adminClose = document.getElementById('admin-cancel');
      // Make sure the admin panel is hidden
      this.adminPanel.style.display = 'none';
      adminOpen.init();
      adminClose.init();
    }
  };
  var adminOpen = {
    init: function() {
      // store pointers to our DOM elements for easy access later    
      this.adminButton = document.getElementById('admin-button');
      this.adminPanel = document.getElementById('admin-container');
      this.render();
    },
    render: function() {
      // Visual - When the admin button is clicked
      this.adminButton.addEventListener('click', function() {
        var cat = octopus.getCurrentCat();
        alert(cat.name);
        // Visual - the admin area should appear
        document.getElementById('admin-container').style.display = 'block';
        catDisplayView.render();
        return;
      });
    }
  };
  var adminClose = {
    init: function() {
      this.adminClose = document.getElementById('admin-cancel');
      this.adminPanel = document.getElementById('admin-container');
      this.render();
    },
    render: function() {
      this.adminClose.addEventListener('click', function() {
        document.getElementById('admin-container').style.display = 'none';
      });
    }
  };


  // Initialize the app
  /* 1 */
  octopus.init();

});