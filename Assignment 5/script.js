const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (!hamburger || !navLinks) {
    console.error('Hamburger or navLinks element not found');
} else {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnails img');

if (!mainImage || thumbnails.length === 0) {
    console.error('Gallery elements not found');
} else {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src; 
            mainImage.alt = thumbnail.alt;
        });
    });
}

const form = document.getElementById('contactForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !password || !confirmPassword || !message) {
    errorMessage.textContent = "⚠️ All fields are required!";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorMessage.textContent = "⚠️ Please enter a valid email address!";

    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "⚠️ Passwords do not match!";

    return;
  }

  errorMessage.style.color = "green";
  errorMessage.textContent = "✅ Form submitted successfully!";

  form.reset();
});
