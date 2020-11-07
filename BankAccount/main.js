class BankAccount {

  constructor(accountNumber, owner){
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transactions = []
  }


  balance(){
    let balance = 0
  //This method does not take any input, and returns the current balance on the account. 
  //The balance is computed by summing up the amounts in the transactions array.
  for (let i = 0; i < this.transactions.length; i++) {
    balance += this.transactions[i].amount
  }
  return balance

  }


  //This method takes in a single input, the deposit amount.  (Should not allow negative deposit)
  //This method should create a new transaction representing the deposit, and add it to the transactions array.
  deposit(amount){

    if (amount < 0){ //doesn't allow negative number
      return;
    } else {
      let newDeposit = new Transaction(amount) //creates new transaction
      this.transactions.push(newDeposit) //adds the amount to the transaction array
    }
  }


  //This method takes in the payee and amount, creates a new transaction with the payee and amount, 
  //and adds the transaction to the transaction array.
  //You should not be able to charge an amount that would make your balance dip below 0
  charge(payee, amount){
    let chargeAmount = amount * -1

    if ((this.balance() + chargeAmount) < 0){ //stops over-draft
      return 
    } else {
      let newCharge = new Transaction(chargeAmount, payee) //creates a new transaction
      this.transactions.push(newCharge) //adds the charge to the transactions array
    }
    
  }
}

class Transaction {

  constructor(amount, payee){
    this.amount = amount;
    this.payee = payee;
    this.date = Date()
  }

}

let sampleAccount = new BankAccount (0001, "Claire Sheek")
console.log("sampleAccount is: ", sampleAccount)git

sampleAccount.deposit(200)
console.log("Balance after $200 deposit: ", sampleAccount.balance())

sampleAccount.charge("mom", 300)
console.log("Balance after $300 charge (over-draft): ", sampleAccount.balance())

sampleAccount.deposit(300)
console.log("Balance after $200 deposit: ", sampleAccount.balance())

sampleAccount.charge("mom", 300)
console.log("Balance after $300 charge (valid): ", sampleAccount.balance())

console.log("sampleAccount is now: ", sampleAccount)
