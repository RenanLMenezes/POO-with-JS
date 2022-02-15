import { AuthenticatorSystem } from "./AuthenticatorSystem.js"
import { Client } from "./Client.js"
import { Manager } from "./Employers/Manager.js"
import { Principal } from "./Employers/Principal.js"

// import { CheckingAccount } from "./Accounts/CheckingAccount.js"
// import { SavingAccount } from "./Accounts/SavingAccount.js"
// import { SalaryAccount } from "./Accounts/SalaryAccount.js"
 
// const client1 = new Client("Renan", 1111111111)

// const account = new CheckingAccount(0, client1, 1000)
// const account2 = new SavingAccount(10, client1, 1000)
// const account3 = new SalaryAccount(client1)

// console.log(account)
// console.log(account2)
// console.log(account3)
const client1 = new Client("Renan", 1111111111, "12")

const principal = new Principal ("Renan", 100000, 12345678910)
const manager = new Manager ("Renan", 10000, 12345678910)

console.clear()

principal.registerPassword("1234")
const login = AuthenticatorSystem.login(principal, "1234")
manager.registerPassword("123")
const login2 = AuthenticatorSystem.login(manager, "1234")
const login3 = AuthenticatorSystem.login(client1, "12")
console.log(login, login2, login3);
