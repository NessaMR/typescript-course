import Veiculo from './Veiculo';

export default class Moto extends Veiculo{
    //Exemplo de sobrescrita de métodos (a classe filha utilizar o método da classe pai de um jeito diferente)
    public acelerar(): void {
        this.velocidade = this.velocidade + 20
    }
}