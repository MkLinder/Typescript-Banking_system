export class DioAccount {
    private readonly name: string
    private readonly accountNumber: number // readonly = apenas leitura, não pode ser alterado.
    private balance: number = 0 
    private status: boolean = true

    constructor(name:string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (value:number, res?:string): void => {
        if (this.validateStatus()){
            this.balance += value
            if (res === undefined){
                res = 'depositou'
            }
            console.log(`Você ${res} R$ ${value},00`);
        }
    }

    withdraw = (value:number): void => {
        if (this.validateStatus()){
            if (value > this.balance){
                console.log(`Saldo insuficiente!`);
            }else{
                this.balance -= value
                console.log(`Você sacou R$ ${value},00`);
            }
        }
    }

    getBalance = (): void => { // Métodos getters: usados para aceessar variáveis privadas de uma classe.
        console.log(this.balance);
    }

    // setName = (name:string): void => { //Métodos setters: usados para "setar"(modificar) variáveis privadas de uma classe.
    //     this.name = name
    //     console.log('Nome alterado com sucesso!');
    // }

    getName = (): string => {
        return this.name
    }

    private validateStatus = (): boolean => {
        if (this.status){
            return this.status
        }

        throw new Error('Conta inativa!')
    }
}