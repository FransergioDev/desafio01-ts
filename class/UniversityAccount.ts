import { DioAccount } from "./DioAccount"

export class UniversityAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getBalance = (): void => {
        super.getBalance();
    }

    depositPremium = (valueForDeposit: number): void => {
        const additionalValue = 10;
        super.deposit(valueForDeposit + additionalValue)
    }
}  