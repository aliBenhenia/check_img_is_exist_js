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
  var imageUrl = 'path/to/your/image.jpg';
  
  checkImage(
    imageUrl,
    function() {
      console.log('Image exists!');
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
  var imageUrl = 'path/to/your/image.jpg';
  
  checkImage(
    imageUrl,
    function() {
      console.log('Image exists!');
    },
    function() { 
      console.log('Image does not exist or cannot be loaded.');
    }
  );
    
