let picture = document.querySelector('.mine');
picture.alt = "here"



function checkImage(src, onSuccess, onError) {
    var img = new Image();
    img.src = src;
  
    img.onload = function() {
      // Image exists
      onSuccess();
    };
  
    img.onerror = function() {
      // Image does not exist
      onError();
    };
}
  
  // Example usage:
  var imageUrl = './valid.jpg';
  
  checkImage(
    imageUrl,
    function() {
      console.log('Image exists!');
      picture.src = imageUrl
    },
    function() {
      console.log('Image does not exist or cannot be loaded.');
    }
  );
  function checkImage(src, onSuccess, onError) {
    var img = new Image();
    img.src = src;
  
    img.onload = function() {
      // Image exists
      onSuccess();
    };
  
    img.onerror = function() {
      // Image does not exist
      onError();
    };
  }
  
  // Example usage:
  var imageUrl = './valid.jpeg';
  
  checkImage(
    imageUrl,
    function() {
      console.log('Image exists!');
      picture.src = imageUrl
    },
    function() { 
      console.log('Image does not exist or cannot be loaded.');
      picture.src = "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
    }
  );
