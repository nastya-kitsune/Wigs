// Burger-menu
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
    const sidebar = document.querySelector('.sidebar');
	const header = document.querySelector('.header');
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('active');
        sidebar.classList.toggle('active');
		header.classList.toggle('active');
    });
}


// Like
const circles = document.querySelectorAll('.card__circle');
for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function(e) {
    circles[i].classList.toggle('active');
    });
}
