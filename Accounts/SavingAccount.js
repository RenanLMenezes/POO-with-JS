import { Account } from "./Account.js"

export class SavingAccount extends Account{
    constructor(openingBalance, client, agency){
        super(openingBalance, client, agency)
    }

    toWithdraw(value){
        const tax = 1.02
        return super._toWithdraw(value, tax)
    }
}