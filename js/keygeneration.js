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
    document.getElementById('passphrase').value = mnemonicWords;
}

function confirmPassphrase() {
    var generatedPassphraseField = document.getElementById('passphrase');
    var confirmPassphraseField = document.getElementById('passphraseConfirm');
    var generatedPassphrase = generatedPassphraseField.value;
    var confirmPassphrase = confirmPassphraseField.value;
    var confirmPassphraseArray = confirmPassphrase.split(',');
    if (generatedPassphrase == confirmPassphrase) {
        console.log('Passphrase matches!');
        createNewKey(confirmPassphraseArray);
    } else {
        throw 'Does not match!'
    }
}