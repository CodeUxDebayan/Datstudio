// FAQ Toggle
document.querySelectorAll('.faq-item h5').forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');

// Open lightbox when gallery item is clicked
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const captionText = item.getAttribute('data-caption');

    // Set image and caption in lightbox
    lightboxImg.src = imgSrc;
    lightboxCaption.innerText = captionText;

    // Show lightbox
    lightbox.style.display = 'flex';
  });
});

// Close lightbox when 'X' is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

document.getElementById('menu').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
  } else {
      mobileMenu.style.display = 'block';
  }
});

