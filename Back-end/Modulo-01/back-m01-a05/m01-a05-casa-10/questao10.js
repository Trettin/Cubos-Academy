const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor){
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor
        })
        return `Depósito de R$${(valor/100).toFixed(2)} realizado para o(a) cliente: ${this.nome}.`;
    },
    sacar: function(valor){
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        } else {
            this.saldo -= valor;
            this.historicos.push({
                tipo: "Saque",
                valor: valor 
            })
            return `Saque de R$${(valor/100).toFixed(2)} realizado para o(a) cliente: ${this.nome}`;
        }
    },
    extrato: function() {

        let msgExtrato = `Extrato de ${this.nome} - Saldo: R$${(this.saldo/100).toFixed(2)} \n`;
        msgExtrato += "Histórico: \n";

        for (let item of this.historicos) {
            msgExtrato +=  `${item.tipo} de R$${(item.valor/100).toFixed(2)} \n`;
        }
        
        return msgExtrato;
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(10000));
console.log(contaBancaria.extrato());