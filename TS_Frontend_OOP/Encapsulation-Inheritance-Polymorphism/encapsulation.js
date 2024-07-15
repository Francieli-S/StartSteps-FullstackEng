"use strict";
class banckAccount {
    constructor() {
        this.balance = 0;
        this.deposit = (amount) => {
            if (amount >= 0) {
                this.balance += amount;
            }
            else {
                console.log('The amount should be more than 100');
            }
        };
        this.withdraw = (amount) => {
            if (amount > this.balance) {
                return 'Not enough money in your account';
            }
            else {
                this.balance -= amount;
                return this.balance.toString();
            }
        };
        this.getBalance = () => {
            return this.balance;
        };
    }
}
const userOneBankAccount = new banckAccount();
userOneBankAccount.deposit(200);
// console.log(userOneBankAccount.balance); // balance is private, it can't be accessed
userOneBankAccount.getBalance();
