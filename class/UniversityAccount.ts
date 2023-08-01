import { DioAccount } from "./DioAccount"

export class UniversityAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    depositPremium = (valueForDeposit: number): void => {
        const additionalValue = 10;
        this.deposit(valueForDeposit + additionalValue)
    }
}  