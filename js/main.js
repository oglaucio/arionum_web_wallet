function openLoginModal() {
	var modal = document.getElementById('loginModal');
	modal.classList.remove('inactive');
}

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

function togglePageInactive(page) {
	page.classList.add('inactive');
}

function togglePageActive(targetPage) {
	window.allPages = document.getElementsByClassName('page');
	for (let i = 0; i < allPages.length; i++) {
		togglePageInactive(allPages[i]);
	}
	targetPage.classList.remove('inactive');
}

function openPage(page) {
	togglePageActive(document.getElementById(page));
}