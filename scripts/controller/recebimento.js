function atualizarDataHora() {
    
    const agora = new Date(); // obtém a data e hora atuais do sistema
    
    const dataFormatada = agora.toLocaleDateString('pt-BR'); // formata a data no formato "dd/mm/yyyy"

    const horaFormatada = agora.toLocaleTimeString('pt-BR'); // formata a hora no formato "hh:mm:ss"

    const elementoDataHora = document.getElementById('data_hora'); // localiza a div onde a data e a hora serão exibidas

    elementoDataHora.textContent = `${dataFormatada} ${horaFormatada}`; // define o conteúdo da div como a data e a hora formatadas
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();