const frm = document.querySelector('form');


frm.addEventListener("submit", e => {
    e.preventDefault();

    const resp = document.getElementById('respDias');
    const respDataAtual = document.getElementById('respDataAtual');

    const data1 = document.getElementById('idData1');
    const data2 = document.getElementById('idData2');

    
    if(!verificarData(data1.value)){
        alert("Data inicial inexistente!");
        data1.focus();
    }else if(!verificarData(data2.value)){
        alert("Data final inexistente!");
        data2.focus();
    }else if (!verificarDataMaior(data1.value, data2.value)){
        alert("As datas não correspondem!");
        data1.focus();
    }else{
        let intervalo = calcularIntervalo(data1.value, data2.value);
        let data = dataAtual();

        resp.innerHTML=`O intervalo de dias entre as datas é de ${intervalo} dias.`
        respDataAtual.innerHTML = `Data e hora atual: ${data}`
    }
});

function trasnformarDate(data){
    const [dia, mes, ano] = data.split('/');
    const dataVerif = new Date(`${ano}/${mes}/${dia}`);
    console.log(dataVerif);
    return dataVerif;
}


function verificarData(data){
    const dataVerif = new Date(trasnformarDate(data));

    const dia = dataVerif.getDate();
    const mes = dataVerif.getMonth() + 1; 
    const ano = dataVerif.getFullYear();
    
    return (
        dataVerif.getDate() == dia &&
        dataVerif.getMonth() + 1 == mes && 
        dataVerif.getFullYear() == ano
    );
}

function verificarDataMaior(data1, data2){
    const dataVerif1 = new Date(trasnformarDate(data1));

    const dataVerif2 = new Date(trasnformarDate(data2));

    return dataVerif1 < dataVerif2;
}


function calcularIntervalo(data1, data2){
    const mili1 = new Date(Date.parse(data1));
    const mili2 = new Date(Date.parse(data2));

    const diferenca = mili2 - mili1;

    const intervalo = new Date(diferenca);
    console.log(intervalo);

    const dia = intervalo.getDate();
    const mes = intervalo.getMonth();
    const ano = intervalo.getFullYear();

    const dias = dia + (mes * 30) + ((ano - 1970) * 365) - 29;

    return dias;
    
}

function dataAtual() {
    const data = new Date();

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');

    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}