import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Phelipe",45142569865);//instancias de classes ou objetos

const cliente2 = new Cliente("Raphael",46342578905);

//console.log(cliente1);


const conta1 = new ContaCorrente(1001,cliente1);

//console.log(conta1);

conta1.deposito(500);

const conta2 = new ContaCorrente(1002,cliente2);

conta1.transferir(200,conta2);


console.log(ContaCorrente.numeroDeContas);
//console.log(conta1);
//console.log(conta2);

//console.log(cliente1);
//console.log(cliente2);