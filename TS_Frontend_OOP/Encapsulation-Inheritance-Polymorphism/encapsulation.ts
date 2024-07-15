// PRIVATE, PROTECTED, AND PUBLIC

class banckAccount {
  private balance: number;
  protected _userName: string; // we use _ to differentiate from the getters and setters.

  constructor(name: string = '') {
    this.balance = 0;
    this._userName = name;
  }

  deposit = (amount: number): void => {
    if (amount >= 0) {
      this.balance += amount;
    } else {
      console.log('The amount should be more than 100');
    }
  };

  withdraw = (amount: number): string => {
    if (amount > this.balance) {
      return 'Not enough money in your account';
    } else {
      this.balance -= amount;
      return this.balance.toString();
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  get userName(): string {
    return this._userName;
  }

  // set userName(name: string): string { // with setter we should not especify the function return type
  set userName(name: string) {
    // with setter we should not especify the function return type
    if (name !== '') {
      this._userName = name;
    } else {
      console.log('Name in not valid');
    }
  }
}

const userOneBankAccount = new banckAccount('Gato');
userOneBankAccount.deposit(200);
// userOneBankAccount.balance; // balance is private, it can't be accessed outside the class, just by using the getBalance method
console.log(userOneBankAccount.getBalance());

// userOneBankAccount._userName; // userName is protected, and only accessable within the class method, more about it when we lern inheritance
userOneBankAccount.userName = 'Foxy'; // with setters, we don't set the value as a normal function, we assign the value like a variable
console.log(userOneBankAccount.userName);
