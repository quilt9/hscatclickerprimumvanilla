/*! PizzaWebPageOptimization - v - 2017-06-05 */// Shorthand for $( document ).ready()
$(function() {
  console.log( "ready!" );
  $('#catImg-1').on({
    'click': function() {
      alert("You click 1");
         var src = ($(this).attr('src') === 'dist/images_src/kitten1.jpg')
            ? 'dist/images_src/kitten2.jpg'
            : 'dist/images_src/kitten1.jpg';
         $(this).attr('src', src);
    }
  });//catImg-1
  $('#catImg-2').on({
    'click': function() {
      alert("You click 2");
         var src = ($(this).attr('src') === 'dist/images_src/kitten3.jpg')
            ? 'dist/images_src/kitten4.jpg'
            : 'dist/images_src/kitten3.jpg';
         $(this).attr('src', src);
    }
  });//catImg-1
});