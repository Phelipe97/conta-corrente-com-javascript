import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas=0;
    agencia;
    #cliente;
    #saldo =0;



    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente=novoValor;
        }
        
    }
    get cliente(){
        return this.#cliente;
    }
    
    get saldo(){
        return this.#saldo;
    }

    constructor(agencia,cliente){
        this.agencia=agencia;
        this.cliente=cliente;
        ContaCorrente.numeroDeContas+=1;
    }

    deposito(valor) {
        if (valor <= 0) {
            return;
        }
        this.#saldo += valor;
    }
    saque(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor
            return valor;
        } else {
            console.log("valor impossivel de sacar");
        }
    }
    transferir(valor,conta){
        const valorSacado=this.saque(valor);
        conta.deposito(valorSacado);
    }
}