import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-components.js";

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit' , function(event) {
    try {
        event.preventDefault(); // submeter o formulario sem recarregar a página
        if (!elementoFormulario.checkValidity()) {
            alert ('Por favor, preencha todos os campos da transação!');
            return;
            }
        
        const inputTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
        const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;
        
        let tipoTransacao: TipoTransacao = inputTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date (inputData.value + "00:00:00:00");
        
        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        }

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();

    }

    catch (erro) {
        if (erro instanceof Error) { // esse teste garante que erro realmente é uma instância da classe Error, e só nesse caso acessamos erro.message
            alert(erro.message);
        } else {
            alert('Ocorreu um erro inesperado.');
        }
    }

});

