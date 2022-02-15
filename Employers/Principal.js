import { Employer } from "./Employer.js"

export class Principal extends Employer {
    constructor(name, salary, cpf){
        super(name, salary, cpf)
        this._bonus = 2
    }
}