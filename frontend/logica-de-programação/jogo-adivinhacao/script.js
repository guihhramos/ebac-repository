// Gerar número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Configurações iniciais
let tentativasMaximas = 10;
let tentativasRestantes = tentativasMaximas;

// Elementos HTML
const input = document.getElementById("palpite");
const botao = document.getElementById("btnChutar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

// Mostrar tentativas iniciais
tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

botao.addEventListener("click", () => {
    let palpite = parseInt(input.value);

    // Validação
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Digite um número válido entre 1 e 100!";
        return;
    }

    // Decrementa tentativas
    tentativasRestantes--;

    // Lógica do jogo
    if (palpite === numeroSecreto) {
        mensagem.textContent = "🎉 Você acertou!";
        encerrarJogo();
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "🔼 O número secreto é MAIOR";
    } else {
        mensagem.textContent = "🔽 O número secreto é MENOR";
    }

    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // Verifica derrota
    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        mensagem.textContent = `❌ Você perdeu! O número era ${numeroSecreto}`;
        encerrarJogo();
    }

    input.value = "";
});

// Função para encerrar jogo
function encerrarJogo() {
    input.disabled = true;
    botao.disabled = true;
}