// const menuMobile = document.querySelector('.menu-hamburger')
// const navLinks = document.querySelector('.nav-links')
// const mobileLink = document.querySelectorAll('.nav-link')
// const mobileMenu = document.querySelector('.mobile-menu')

// menuMobile.addEventListener('click', () => {
// 	navLinks.classList.toggle('mobile-menu')
// })

const menuMobile = document.querySelector('.menu-hamburger')
const navLinks = document.querySelector('.nav-links')
const mobileLink = document.querySelectorAll('.nav-link')
const mobileMenu = document.querySelector('.mobile-menu')

menuMobile.addEventListener('click', () => {
	navLinks.classList.toggle('mobile-menu')
})

mobileLink.forEach(link => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('mobile-menu')
	})
})
