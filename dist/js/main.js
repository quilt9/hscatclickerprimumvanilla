/*! PizzaWebPageOptimization - v - 2017-06-03 */document.addEventListener("DOMContentLoaded", function() { 
  // listen for clicks
  var catImg = document.getElementById('catImg');
  var catainer = document.getElementById('catainer');
  document.addEventListener('click', function() {
    // toggle kitten image with each click
    if(catainer.innerHTML=='<img id="catImg" src="dist/images_src/kitten1.jpg">') {
      catainer.innerHTML='<img id="catImg" src="dist/images_src/kitten2.jpg">';
    } else {
      catainer.innerHTML='<img id="catImg" src="dist/images_src/kitten1.jpg">';
    }
    
  })
});
