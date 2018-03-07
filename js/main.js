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

function loginWithPrivateKey() {
	var privateKeyLoginWrapper = document.getElementById('loginWithPrivateKeyWrapper');
	var publicKeyLoginWrapper = document.getElementById('loginWithPublicKeyWrapper');
	var privateOptionButton = document.getElementById('privateKeyLoginButton');
	var publicOptionButton = document.getElementById('publicKeyLoginButton');
	privateKeyLoginWrapper.classList.remove('inactive');
	privateOptionButton.classList.add('active');
	publicKeyLoginWrapper.classList.add('inactive');
	publicOptionButton.classList.remove('active');
}

function loginWithPublicKey() {
	var privateKeyLoginWrapper = document.getElementById('loginWithPrivateKeyWrapper');
	var publicKeyLoginWrapper = document.getElementById('loginWithPublicKeyWrapper');
	var privateOptionButton = document.getElementById('privateKeyLoginButton');
	var publicOptionButton = document.getElementById('publicKeyLoginButton');
	privateKeyLoginWrapper.classList.add('inactive');
	privateOptionButton.classList.remove('active');
	publicKeyLoginWrapper.classList.remove('inactive');
	publicOptionButton.classList.add('active');
}