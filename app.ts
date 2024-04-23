import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { InvestAccount } from './class/InvestAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Natália', 155123)
// peopleAccount.deposit(100)
// peopleAccount.withdraw(150)
// console.log(peopleAccount);



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 2120)
// companyAccount.getLoan(2000)



const investAccount: InvestAccount = new InvestAccount('José', 245112)
investAccount.invest(1000)
console.log(investAccount);




