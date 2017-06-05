/*! PizzaWebPageOptimization - v - 2017-06-05 */// Shorthand for $( document ).ready()
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