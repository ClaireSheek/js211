class BankAccount {

  transactions: []

  constructor(accountNumber, owner){
    this.accountNumber = accountNumber;
    this.owner = owner;
  }

  balance(){

  }

  deposit(amt){

  }

  charge(payee, amt){

  }

}

class Transaction extends BankAccount {
  

  constructor(amount, payee){

  }

}