document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart");
    const contador = document.getElementById("contador");
    const playButton = document.getElementById("play-button");
    const messagePlay = document.getElementById("message-play");
    let contadorValue = 0;

    // Função para aumentar o contador
    heart.addEventListener("click", () => {
        heart.classList.add("pulse");

        // Remove a classe depois da animação para poder repetir
        setTimeout(() => {
            heart.classList.remove("pulse");
        }, 400);

        // Atualiza o contador
        contadorValue++;
        contador.textContent = contadorValue;

        // Quando o contador chega a 100, ativa os efeitos
        if (contadorValue >= 100) {
            // Exibe a caixa com o botão de Play e a mensagem
            playButton.style.display = "inline-block";
            messagePlay.style.display = "block"; // Exibe a mensagem
        }
    });
});

