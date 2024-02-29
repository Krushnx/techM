class BankAccount {
    private owner: string;
    private balance: number;

    constructor(owner: string, initialBalance: number) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} into ${this.owner}'s account.`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log(`Insufficient funds for ${this.owner} to withdraw ${amount}.`);
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.owner}'s account.`);
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

// Usage:
const account1 = new BankAccount('John Doe', 1000);
const account2 = new BankAccount('Jane Doe', 500);

account1.deposit(500);
account1.withdraw(200);
console.log(`John's Balance: ${account1.getBalance()}`);

account2.deposit(1000);
account2.withdraw(700);
console.log(`Jane's Balance: ${account2.getBalance()}`);
