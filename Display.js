class Display {
    constructor(dispalyValorAnterior, dispalyValorActual) {
        this.dispalyValorActual = dispalyValorActual
        this.dispalyValorAnterior = dispalyValorAnterior
        this.calculador = new Calculadora();
        this.tipoOperaction = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.sinais = {
            somar: '+',
            dividir: '/',
            multiplicar: 'x',
            menos: '-',
        }
    }

    borracha() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrachaTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperaction = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperaction !== 'igual' && this.calcular();
        this.tipoOperaction = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) 
        return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.dispalyValorActual.textContent = this.valorActual;
        this.dispalyValorAnterior.textContent = `${this.valorAnterior} ${this.sinais[this.tipoOperaction] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) )
        return
        this.valorActual = this.calculador[this.tipoOperaction](valorAnterior, valorActual);
    }
} 