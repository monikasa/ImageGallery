const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Looping through images */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `ImageGallery/Images/${image}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => displayedImage.src = e.target.src);
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
