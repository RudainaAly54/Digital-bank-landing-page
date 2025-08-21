const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Create overlay dynamically
const overlay = document.createElement('div');

overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  overlay.classList.toggle('show');
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  overlay.classList.remove('show');
});

// Request button Eventlistener
document.addEventListener('DOMContentLoaded', () =>{
  const popup = document.getElementById('popupBox');
  const popupTitle = document.getElementById('popupTitle');
  const closePopup = document.getElementById('closePopup');

  //Close logic 
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === popup) popup.style.display = 'none';
});

  //Request button
  document.querySelectorAll('.request-button').forEach(btn => {
    btn.addEventListener('click', () => {
      popup.style.display = 'flex';
      popupTitle.textContent = 'Your request have been sent';
    })
  })
});