"use strict";
//Aula sobre Orientação a Objetos (Classes nos arquivos Carro.ts, Concessionaria.ts e Pessoa.ts)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
//Criar carros
var carroA = new Carro_1.default("Civic", 4);
var carroB = new Carro_1.default("Logan", 4);
var carroC = new Carro_1.default("Uno", 2);
var carroD = new Carro_1.default("Corsa", 2);
var carroE = new Carro_1.default("Corsa", 4);
//Montar lista de carros da concessionária
var listaDeCarros = [carroA, carroB, carroC, carroD, carroE];
//O que fica entre <> é o tipo que iremos solicitar, nese caso é o tipo Carro, também poderia ser demonstrado como: Carro[]
//Instanciando a concessionária
var concessionaria = new Concessionaria_1.default("Av Paulista", listaDeCarros);
//Exibir a lista de carros
//console.log(concessionaria.mostraListaDeCarros())
//Instanciando a pessoa
var cliente = new Pessoa_1.default("Maria", "Civic");
//Ver qual o carro preferido da pessoa
//console.log(cliente.dizerCarroPreferido())
//Verificar se o carro preferido existe na lista da concessionária
concessionaria.mostraListaDeCarros().map(function (carro) {
    //console.log(carro)
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.comprarCarro(carro);
    }
});
//Variaveis do tipo array possuem varios métodos e atributos embutidos que nos ajudam a trabalhar com os mesmos. 
//A funçao map fará um looping, percorrendo as posições do array. A cada posição podemos recuperar o valor e fazer uma determinada ação através de uma função de callback.
console.log(cliente.dizerCarroQueTem());
