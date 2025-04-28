const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

// hamburgerMenu.addEventListener('click', () => {
//     sidebar.style.display = "block";
// })


function openNav() {
    sidebar.style.display = "block";
    hamburgerMenu.classList.add('close-btn')
}

