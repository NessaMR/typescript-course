export default class Veiculo{
    //Atributos
    protected modelo!: string
    protected velocidade: number = 0

    //Métodos
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
        //this faz menção a variável que está dentro do contexto da classe.
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}