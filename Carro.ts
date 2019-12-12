import Veiculo from './Veiculo';

export default class Carro extends Veiculo{
    //Atributos
    private numeroDePortas: number

    constructor(modelo: string, numeroDePortas: number){
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

}

//Exemplos de Instância
// let carro = new Carro("Veloster",3)
// console.log(carro)
// carro.acelerar()
// console.log(carro)
// carro.acelerar()
// carro.acelerar()
// carro.acelerar()
// console.log(carro)


