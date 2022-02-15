import { Account } from "./Account.js";

export class SalaryAccount extends Account{
    constructor(client){
        super(0, client, 100)
    }

    toWithdraw(value){
        const tax = 1.01
        return super._toWithdraw(value, tax)
    }
}