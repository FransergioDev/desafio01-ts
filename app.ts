import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { UniversityAccount } from './class/UniversityAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(25)
peopleAccount.withdraw(5)
console.log(peopleAccount.getName())
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log("\n")
console.log(companyAccount)
companyAccount.deposit(27)
companyAccount.withdraw(15)
console.log(companyAccount.getName())
companyAccount.getLoan(10000);
companyAccount.getBalance();


const universityAccount: UniversityAccount = new UniversityAccount('Fransérgio', 30)
console.log("\n")
console.log(universityAccount)
universityAccount.depositPremium(100);
universityAccount.getBalance();
universityAccount.deposit(100);
universityAccount.withdraw(25);
console.log(universityAccount.getName())
universityAccount.getBalance();
