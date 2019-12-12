//Aula sobre Orientação a Objetos (Classes nos arquivos Carro.ts, Concessionaria.ts e Pessoa.ts)

//IMPORTANTE: Class é uma feature do ES6. 
//Então não adianta criar scripts Javascript e tentar entrar implantá-los em uma página simples HTML, 
//pois os navegadores ainda estão limitados ao ES5. 
//Ainda é necessário que se passe por um processo de compilação para o ES5.

// class Carro{
//     //Atributos
//     private modelo: string
//     private numeroDePortas: number
//     private velocidade: number = 0

//     constructor(modelo: string, numeroDePortas: number){
//         this.modelo = modelo
//         this.numeroDePortas = numeroDePortas
//     }

//     //Métodos
//     public acelerar(): void {
//         this.velocidade = this.velocidade + 10
//         //this faz menção a variável que está dentro do contexto da classe.
//     }

//     public parar(): void {
//         this.velocidade = 0
//     }

//     public velocidadeAtual(): number {
//         return this.velocidade
//     }
// }

// //Exemplos de Instância
// // let carro = new Carro("Veloster",3)
// // console.log(carro)
// // carro.acelerar()
// // console.log(carro)
// // carro.acelerar()
// // carro.acelerar()
// // carro.acelerar()
// // console.log(carro)

// class Concessionaria{
//     private endereco!: string
//     private listaDeCarros: Array<Carro>

//     constructor(endereco: string, listadeCarros: Array<Carro>){
//         this.endereco = endereco
//         this.listaDeCarros = listaDeCarros
//     }

//     public fornecerEndereco(){
//         return this.endereco
//     }

//     public mostraListaDeCarros(): Array<Carro> {
//         return this.listaDeCarros
//     }
// }

// class Pessoa{
//     private nome: string
//     private carroPreferido: string
//     private carro!: Carro

//     constructor(nome: string, carroPreferido: string){
//         this.nome = nome,
//         this.carroPreferido = carroPreferido
//     }

//     public dizerNome() : string{
//         return this.nome
//     }

//     public dizerCarroPreferido(): string {
//         return this.carroPreferido
//     }

//     public comprarCarro(carro: Carro): void {
//         this.carro = carro
//     }

//     public dizerCarroQueTem(): Carro {
//         return this.carro
//     }
// }

import Carro  from '../Carro'
import Concessionaria  from '../Concessionaria'
import Pessoa  from '../Pessoa'

//Criar carros
let carroA = new Carro("Civic", 4)
let carroB = new Carro("Logan", 4)
let carroC = new Carro("Uno", 2)
let carroD = new Carro("Corsa", 2)
let carroE = new Carro("Corsa", 4)

//Montar lista de carros da concessionária
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC, carroD, carroE]
//O que fica entre <> é o tipo que iremos solicitar, nese caso é o tipo Carro, também poderia ser demonstrado como: Carro[]

//Instanciando a concessionária
let concessionaria = new Concessionaria("Av Paulista", listaDeCarros)

//Exibir a lista de carros
//console.log(concessionaria.mostraListaDeCarros())

//Instanciando a pessoa
let cliente = new Pessoa("Maria", "Civic")

//Ver qual o carro preferido da pessoa
//console.log(cliente.dizerCarroPreferido())

//Verificar se o carro preferido existe na lista da concessionária
concessionaria.mostraListaDeCarros().map((carro: Carro) => {
    //console.log(carro)
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //comprar o carro
        cliente.comprarCarro(carro)
    }
})
//Variaveis do tipo array possuem varios métodos e atributos embutidos que nos ajudam a trabalhar com os mesmos. 
//A funçao map fará um looping, percorrendo as posições do array. A cada posição podemos recuperar o valor e fazer uma determinada ação através de uma função de callback.

console.log(cliente.dizerCarroQueTem())