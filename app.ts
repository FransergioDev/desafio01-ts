import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { UniversityAccount } from './class/UniversityAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(25)
peopleAccount.withdraw(5)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(27)
companyAccount.withdraw(15)
companyAccount.getLoan(10000);
console.log(companyAccount)

const universityAccount: UniversityAccount = new UniversityAccount('Fransérgio', 30)
universityAccount.deposit(110);
console.log(universityAccount)