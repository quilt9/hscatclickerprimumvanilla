$(function(){

  var model = {

  	cats: [{
      "name": "Orson Carte",
			"pict": "dist/images_src/kitten1.jpg",
			"alt": "Cute kitten staring at you with love"
    }, {
      "name": "Warren Peace",
			"pict": "dist/images_src/kitten2.jpg",
			"alt": "Fury cat defending her food"	
    }, {
      "name": "Jack Paw",
			"pict": "dist/images_src/kitten3.jpg",
			"alt": "Grey cat readying to scratch"
    }, {
      "name": "Carl E. Bird",
			"pict": "dist/images_src/kitten4.jpg",
			"alt": "Cat about to dose off"
    }, {
  		"name": "Furry Dan",
			"pict": "dist/images_src/kitten5.jpg",
			"alt": "Cat laying on its side and relaxing"
    }],

    init: function() {
      if (!cats.length > 0) {
          var catsNum = model.cats.length;
      }
    }
  };


  var octopus = {
      getCats: function() {
      	return model.cats;
      },
/*
      catDisplay = function() {

      }
*/
			init: function () {
				viewList.init();
			}
  };


  var viewList = {
    init: function() {
    	// HTML for one image //
			var imgRow = '<div class="row"></div>';
			var imgContainer = '<div id="" class="container cat-catainer"><div class="card card-inverse"></div></div><!-- catainer1 -->';
			var imgPict = '<img class="card-img img-fluid" alt="Card responsive image" src="%data%">';
			var imgCard = '<div class="card-img-overlay"></div>';
			var imgCardTitle = '<h4 class="card-title"><span class="click-counter"></span> <span class="larger-text heart">&hearts;</span> <span class="element-name">%data%</span></h4>';

      var catElem = document.getElementById('catainer');
      catElem.append(imgRow);
      catElem.append(imgContainer);
      catElem.append(imgPict);
/*
      viewList.render();
*/
			console.log("Init!");
    },
    render: function(){
    	
      var htmlStr = '';
      octopus.getCats().forEach(function(cat){
        htmlStr += 'imgRow';
      });
      
    }
  };

/*
// HTML for one image //
var imgRow = '<div class="row"></div>';
var imgContainer = '<div id="" class="container cat-catainer"><div class="card card-inverse"></div></div><!-- catainer1 -->';
var imgPict = '<img class="card-img img-fluid" alt="Card responsive image" src="%data%">';
var imgCard = '<div class="card-img-overlay"></div>';
var imgCardTitle = '<h4 class="card-title"><span class="click-counter"></span> <span class="larger-text heart">&hearts;</span> <span class="element-name">%data%</span></h4>';
*/


  var viewDisplay = {
  	init: function() {

  		viewDisplay.render();
  	},
  	render: function() {

  	}
  };

  octopus.init();
});