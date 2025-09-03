function atualizarRelogio() {
    const agora = new Date();
    let horas = agora.getHours().toString().padStart(2, '0');
    let minutos = agora.getMinutes().toString().padStart(2, '0');
    let segundos = agora.getSeconds().toString().padStart(2, '0');

    const horaAtual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('clock').textContent = horaAtual;
}

// Inicializa o relógio imediatamente e atualiza a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);
