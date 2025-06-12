let saldo: number = 3000;

const elementoSaldo = document.querySelector('.block-saldo .valor') as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time')


if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}