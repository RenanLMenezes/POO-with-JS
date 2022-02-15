// abstract class 
export class Account{
    constructor(openingBalance, client, agency){
        if(this.constructor == Account){
            throw new Error("You can't instance an object of type Account")
        }
        this._openingBalance = openingBalance
        this._client = client
        this._agency = agency
    }
    
    toWithdraw(value){
        throw new Error("The account withdrawal method is abstract")
    }

    _toWithdraw(value, tax){
        const amountWithdrawn = tax * value

        if(this._balance >= amountWithdrawn){
            this._balance -= amountWithdrawn
            return amountWithdrawn
        }

        return 0;
    }

    toDeposit(value){
        if(value <= 0){
            return
        }
        this._balance +=value
    }

    toTransfer(value, Account){
        const valueWithdrawn = this.toWithdraw(value)
        Account.toDeposit(valueWithdrawn)
    }
}