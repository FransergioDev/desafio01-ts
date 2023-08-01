export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valueForDeposit: number): void => {
    if (this.validateStatus() && this.validateValueForDeposit(valueForDeposit)){
      this.balance += valueForDeposit;
      console.log(`Voce depositou o valor de ${valueForDeposit}`)
    }
  }

  withdraw = (valueForDraw: number): void => {
    if (this.validateStatus() && this.validateWithdrawalAmount(valueForDraw)) {
      this.balance -= valueForDraw;
      console.log(`Voce sacou o valor de ${valueForDraw}`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateValueForDeposit = (valueForDeposit: number): boolean => {
    const valueForDepositIsValid = (valueForDeposit > 0);
    if (valueForDepositIsValid) return valueForDepositIsValid;

    throw new Error('Valor para depósito inválido')
  }

  private validateWithdrawalAmount = (valueForDraw: number): boolean => {
    const valueForDrawIsValid = valueForDraw > 0;
    const accountHasWithdrawalBalance = this.balance > valueForDraw;

    if (valueForDrawIsValid && accountHasWithdrawalBalance) return true;

    throw new Error('Valor para saque inválido')
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
