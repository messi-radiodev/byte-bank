import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    try {
        event.preventDefault(); // submeter o formulario sem recarregar a página
        if (!elementoFormulario.checkValidity()) {
            alert('Por favor, preencha todos os campos da transação!');
            return;
        }
        const inputTransacao = elementoFormulario.querySelector('#tipoTransacao');
        const inputValor = elementoFormulario.querySelector('#valor');
        const inputData = elementoFormulario.querySelector('#data');
        let tipoTransacao = inputTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value);
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        if (erro instanceof Error) { // esse teste garante que erro realmente é uma instância da classe Error, e só nesse caso acessamos erro.message
            alert(erro.message);
        }
        else {
            alert('Ocorreu um erro inesperado.');
        }
    }
});
