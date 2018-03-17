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
	window.scrollTo(0, 0);
	togglePageActive(document.getElementById(page));
}

function loginSuccessful() {
	window.scrollTo(0, 0);
	var accountMenu = document.getElementById('accountMenu');
	var newAccountLink = document.getElementById('newAccountLink');
	var loginButton = document.getElementById('navItemLogin');
	var loginOut = document.getElementById('navItemLogout');
	var walletMenu = document.getElementById('walletMenu');
	var logo = document.getElementById('logo');
	var logoLink = logo.parentElement;
	accountMenu.classList.remove('inactive');
	loginOut.classList.remove('inactive');
	newAccountLink.classList.add('inactive');
	loginButton.classList.add('inactive');
	walletMenu.classList.remove('inactive');
	logoLink.classList.add('disabledLink');
	openPage('walletOverviewPage');
	activateMenuItem('overviewMenuItem');
}

function logOut() {
	var accountMenu = document.getElementById('accountMenu');
	var newAccountLink = document.getElementById('newAccountLink');
	var loginButton = document.getElementById('navItemLogin');
	var loginOut = document.getElementById('navItemLogout');
	var walletMenu = document.getElementById('walletMenu');
	var logo = document.getElementById('logo');
	var logoLink = logo.parentElement;
	accountMenu.classList.add('inactive');
	loginOut.classList.add('inactive');
	newAccountLink.classList.remove('inactive');
	loginButton.classList.remove('inactive');
	walletMenu.classList.add('inactive');
	logoLink.classList.remove('disabledLink');
	openPage('homePage');
}

function showAccountSubMenu() {
	var accountMenu = document.getElementById('accountMenu');
	var accountSubMenu = accountMenu.querySelector('ul');
	accountSubMenu.classList.remove('inactive');
	document.addEventListener('click', hideAccountSubMenu, true);
}

function hideAccountSubMenu() {
	var accountMenu = document.getElementById('accountMenu');
	var accountSubMenu = accountMenu.querySelector('ul');
	accountSubMenu.classList.add('inactive');
	document.removeEventListener('click', hideAccountSubMenu, true);
}

function toggleAccountSubMenu() {
	var accountMenu = document.getElementById('accountMenu');
	var accountSubMenu = accountMenu.querySelector('ul');
	if (accountSubMenu.classList.contains('inactive') === true) {
		showAccountSubMenu();
	} else {
		hideAccountSubMenu();
	}
}

function activateMenuItem(itemID) {
	var walletMenu = document.getElementById('walletMenu');
	var menuItems = walletMenu.querySelectorAll('a');
	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.remove('active');
	}
	var targetItem = document.getElementById(itemID);
	targetItem.classList.add('active');
}