class Estacionamento {
            constructor(valorPago) {
                this.valorPago = parseFloat(valorPago);
            }

            calcular() {
                if (isNaN(this.valorPago)) {
                    return { mensagem: 'Por favor, insira um valor válido.' };
                }

                if (this.valorPago < 1.00) {
                    return { mensagem: 'Valor insuficiente.' };
                } else if (this.valorPago < 1.75) {
                    return {
                        tempo: '30 minutos',
                        troco: (this.valorPago - 1.00).toFixed(2)
                    };
                } else if (this.valorPago < 3.00) {
                    return {
                        tempo: '60 minutos',
                        troco: (this.valorPago - 1.75).toFixed(2)
                    };
                } else {
                    return {
                        tempo: '120 minutos',
                        troco: (this.valorPago - 3.00).toFixed(2)
                    };
                }
            }
        }

        class App {
            executar() {
                const valor = document.getElementById('valorPago').value;
                const resultadoDiv = document.getElementById('resultado');

                const estacionamento = new Estacionamento(valor);
                const resultado = estacionamento.calcular();

                if (resultado.mensagem) {
                    resultadoDiv.innerText = resultado.mensagem;
                } else {
                    resultadoDiv.innerText = `Tempo: ${resultado.tempo}\nTroco: R$ ${resultado.troco}`;
                }
            }
        }

        const app = new App();