const images = document.querySelectorAll('.swap-image');
const caption = document.getElementById('caption');

const captions = [
  {
    title: "Brentwood Medical Group",
    text: "We provide a variety of medical services to our patients based on their needs."
  },
  {
    title: "Our Physicians round on our patients every day.",
    text: "We see our own patients, we do not use Hospitalists."
  }
];

let current = 0;

function swapImages() {
  // slide caption down
  caption.classList.remove('visible');

  setTimeout(() => {
    // swap images
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');

    // inject new structured caption
    const { title, text } = captions[current];
    caption.innerHTML = `<h2>${title}</h2><p>${text}</p>`;

    // slide caption up again
    setTimeout(() => caption.classList.add('visible'), 500);
  }, 1000);
}

// initial slide‐in
setTimeout(() => {
  // inject the very first caption
  const { title, text } = captions[current];
  caption.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
  caption.classList.add('visible');
}, 1000);

// loop
setInterval(swapImages, 10000);
