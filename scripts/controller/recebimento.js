function atualizarDataHora() {
    
    const agora = new Date(); // obtém a data e hora atuais do sistema
    
    const dataFormatada = agora.toLocaleDateString('pt-BR'); // formata a data no formato "dd/mm/yyyy"

    const horaFormatada = agora.toLocaleTimeString('pt-BR'); // formata a hora no formato "hh:mm:ss"

    const elementoData = document.getElementById('data'); // localiza a div onde a data e a hora serão exibidas
    const elementoHora = document.getElementById('hora');

    elementoData.textContent = `Data: ${dataFormatada}` ; // define o conteúdo da div como a data formatada
    elementoHora.textContent = `Hora: ${horaFormatada}`;
}

setInterval(atualizarDataHora, 1000);
atualizarDataHora();