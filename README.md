# Image Existence Checker

A simple JavaScript function to check if an image exists by handling the `onload` and `onerror` events.
  
## How to Use
 
1. Copy the `checkImage` function into your JavaScript code.   

2. Replace the `imageUrl` variable with the path to the image you want to check.

3. Call the `checkImage` function with appropriate success and error callbacks.

```javascript
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
