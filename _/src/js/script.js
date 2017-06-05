/*
document.addEventListener("DOMContentLoaded", function() { 
  // listen for clicks
  var catainer1 = document.getElementById('catainer-1');
  var catainer2 = document.getElementById('catainer-2');
  var catImg1 = document.getElementById('catImg-1');
  catainer1.addEventListener('click', function() {
    alert("You Click 1");
    // toggle kitten image with each click
    if(catImg1.src='dist/images_src/kitten1.jpg') {
      catImg1.src='/path/to/dist/images_src/kitten2.jpg';
    } else {
      catImg1.src='/path/to/dist/images_src/kitten1.jpg';
    }
    
  })
});
*/

// Shorthand for $( document ).ready()
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