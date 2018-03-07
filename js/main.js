var navItemLogin = document.getElementById('navItemLogin');
var loginModal = document.getElementById('loginModal');
navItemLogin.addEventListener('click', function() {
	console.log('clicked');
	loginModal.classList.remove('inactive');
});

function closeLoginModal() {
	var modal = document.getElementById('loginModal');
	modal.classList.add('inactive');
}