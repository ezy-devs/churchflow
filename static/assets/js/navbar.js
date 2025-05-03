const hamburgerMenu = document.getElementById('hamburger-menu');

function openNav() {
  sidebar.style.display = "block";
  document.getElementById('close-btn').style.display = 'grid';
  document.getElementById('open-btn').style.display = 'none';
  hamburgerMenu.classList.remove('open-btn')
}
function closeNav() {
  document.getElementById('open-btn').style.display = 'grid';
  document.getElementById('close-btn').style.display = 'none';
  sidebar.style.display = "none";
}