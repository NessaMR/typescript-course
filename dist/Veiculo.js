"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    //Métodos
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
        //this faz menção a variável que está dentro do contexto da classe.
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
