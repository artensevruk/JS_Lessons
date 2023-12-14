
import getImageSize from './imageSearch.js';


getImageSize(
  "https://static.boredpanda.com/blog/wp-content/uploads/2015/07/smiling-cat-33__605.jpg"
).then((image) => console.log([image.width, image.height]));
