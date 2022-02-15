import { Account } from "./Account.js"

export class CheckingAccount extends Account{
    //#balance = 0 private var proposal https://github.com/tc39/proposal-class-fields#private-fields
    //this._balance = 0 // accepted by the community as private 
    static amountAccount = 0

    constructor(Client, agency){
        super(0, Client, agency)
        CheckingAccount.amountAccount += 1
    }

    toWithdraw(value){
        const tax = 1.1
        return super._toWithdraw(value, tax)
    }

}