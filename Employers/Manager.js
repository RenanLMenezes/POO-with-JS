import { Employer } from "./Employer.js"

export class Manager extends Employer {
    constructor(name, salary, cpf){
        super(name, salary, cpf)
        this._bonus = 1.1
    }
}