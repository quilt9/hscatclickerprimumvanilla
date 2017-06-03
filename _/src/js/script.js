document.addEventListener("DOMContentLoaded", function() { 
  // listen for clicks
  var catainer1 = document.getElementById('catainer1');
  var catainer2 = document.getElementById('catainer2');
  catainer1.addEventListener('click', function() {
    // toggle kitten image with each click
    if(catainer1.innerHTML=='<img class="img-responsive" alt="Responsive image" src="dist/images_src/kitten1.jpg">') {
      catainer1.innerHTML='<img class="img-responsive" alt="Responsive image" src="dist/images_src/kitten2.jpg">';
    } else {
      catainer1.innerHTML='<img class="img-responsive" alt="Responsive image" src="dist/images_src/kitten1.jpg">';
    }
    
  })
});
