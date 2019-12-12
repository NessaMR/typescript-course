import Carro from './Carro'
import { ConcessionariaInterface } from './Concessionaria.interface';

export default class Concessionaria implements ConcessionariaInterface{
    private endereco!: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(){
        return this.endereco
    }

    public mostraListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorariosDeFuncionamento(): string {
        return "De segunda a quinta das 08:00h às 17:00"
    }
}