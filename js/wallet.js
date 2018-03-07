class Transaction {
	constructor() {
		this.txID = null;
		this.txDate = null;
		this.txDestination = null;
		this.txAmount = null;
		this.txFee = null;
		this.txMessage = null;
		return this;
	}
}

class Wallet {
	constructor() {
		this.publicKey = null;
		this.privateKey = null;
		this.balance = null;
		this.ellipticCurve = new elliptic.ec('secp256k1');
		this.transactionHistory = null;
		return this;
	}
	addTransactionToHistory(id,date,destination,amount,fee,message) {
		let transaction = new Transaction(id,date,destination,amount,fee,message);
		this.transactionHistory.push(transaction);
		return transaction;
	}
}

