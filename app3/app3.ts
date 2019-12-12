//Aula sobre Heranças

import Carro from '../Carro';
import Moto from '../Moto';
import Concessionaria from '../Concessionaria';

let carro = new Carro('Veloster',3)

let moto = new Moto()
moto.acelerar();

console.log(carro)
console.log(moto)

//Exemplo do uso da Interface
let concessionaria = new Concessionaria('',[])
console.log(concessionaria.fornecerHorariosDeFuncionamento())