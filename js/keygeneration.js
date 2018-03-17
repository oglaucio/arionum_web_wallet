var _keyMap = {};

function ECDSAKey(mnemonicArray) {
	var ec = new elliptic.ec('secp256k1');
	var key = ec.genKeyPair();
	return key;
}

function createNewKey(mnemonicArray) {
	var newKey = new ECDSAKey(mnemonicArray);
	_keyMap = {
		privateKey: newKey.getPrivate('hex'),
		publicKey: newKey.getPublic('hex'),
		mnemonicWords: mnemonicArray.join(' ')
	}
	console.log(_keyMap);
}

function createMnemonic() {
	const mnemonic = new Mnemonic(256);
	const mnemonicWords = mnemonic.toWords().join(' ');
	console.log('New mnemonic', mnemonic, 'to words:', mnemonic.toWords());
	document.getElementById('privateLoginKey').textContent = mnemonicWords;
}

function confirmPassphrase() {
	var generatedPassphraseField = document.getElementById('privateLoginKey');
	var confirmPassphraseField = document.getElementById('privateLoginKeyConfirmationField');
	var generatedPassphrase = generatedPassphraseField.textContent;
	var confirmPassphrase = confirmPassphraseField.value;
	var confirmPassphraseArray = confirmPassphrase.split(',');
	var passphraseConfirmationError = document.getElementById('passphraseConfirmationError');
	console.log('Generated Passphrase', generatedPassphrase);
	console.log('Confirm passphrase array', confirmPassphraseArray);
	if (generatedPassphrase == confirmPassphrase) {
		console.log('Passphrase matches!');
		passphraseConfirmationError.classList.add('inactive');
		createNewKey(confirmPassphraseArray);
		confirmPassphraseField.value = '';
		loginSuccessful();
	} else {
		console.warn('Passphrase Does not match!');
		passphraseConfirmationError.classList.remove('inactive');
	}
}