import { DioAccount } from "./DioAccount";

export class InvestAccount extends DioAccount {

    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    invest = (value:number): void => {
        this.deposit(value + 10)
    }
}