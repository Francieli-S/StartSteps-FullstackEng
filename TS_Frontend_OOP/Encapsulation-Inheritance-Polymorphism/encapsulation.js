"use strict";
// PRIVATE, PROTECTED, AND PUBLIC
Object.defineProperty(exports, "__esModule", { value: true });
class banckAccount {
    constructor(name = '') {
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
        this.balance = 0;
        this._userName = name;
    }
    get userName() {
        return this._userName;
    }
    // set userName(name: string): string { // with setter we should not especify the function return type
    set userName(name) {
        // with setter we should not especify the function return type
        if (name !== '') {
            this._userName = name;
        }
        else {
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
