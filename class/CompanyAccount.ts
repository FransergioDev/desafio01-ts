import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valueForLoan: number): void => {
    this.deposit(valueForLoan);
    console.log('Voce pegou um empréstimo')
  }
}
