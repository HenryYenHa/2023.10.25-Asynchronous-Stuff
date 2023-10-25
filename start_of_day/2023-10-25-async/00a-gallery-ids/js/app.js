// A list of pre-selected image IDs from Lorem Picsum
const imgList = [40, 237, 433, 577, 582, 593, 659, 718, 783, 790, 837, 1024, 1025, 1074, 1084]; 

// Create an empty string variable where we will store the html that will eventually be printed to the page

let content = '';

// Loop through `imgList` using a `for...of` loop. 
for (const imgID of imgList) {
  // For each image ID, 
  // 1. create an img element using string literals
  // 2. point the image `src` to Lorem Picusm, using the current image ID in the URL.
  // 3. append the `img` html string to the html variable you created earlier
  
  content += `<img src="https://picsum.photos/id/${imgID}/300/300" alt="Random Animal Image">`;
  console.log(imgID);
}
console.log(content);

// Using `document.querySelector()`, assign the .gallery element to a variable.
const gallery = document.querySelector('.gallery');
console.log(gallery);

// Using element.innHTML, add the html img list to the .gallery variable you created earlier.
gallery.innerHTML = content;