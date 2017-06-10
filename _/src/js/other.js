// Cat Group //
var catGroup = {
    "cats": [{
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
    }]
};

// HTML for one image //
var imgRow = '<div class="row"></div>';
var imgContainer = '<div id="" class="container cat-catainer"><div class="card card-inverse"></div></div><!-- catainer1 -->';
var imgPict = '<img class="card-img img-fluid" alt="Card responsive image" src="%data%">';
var imgCard = '<div class="card-img-overlay"></div>';
var imgCardTitle = '<h4 class="card-title"><span class="click-counter"></span> <span class="larger-text heart">&hearts;</span> <span class="element-name">%data%</span></h4>';
             

/* Shorthand for $( document ).ready()
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
});
*/