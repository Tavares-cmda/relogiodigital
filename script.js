function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adicionar zero à esquerda
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const tempo = `${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio').textContent = tempo;
}

// Atualiza a cada 1 segundo
setInterval(atualizarRelogio, 1000);

// Inicializa imediatamente
atualizarRelogio();
