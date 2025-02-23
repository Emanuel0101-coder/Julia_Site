document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart");
    const contador = document.getElementById("contador");
    const playButton = document.getElementById("play-button");
    const messagePlay = document.getElementById("message-play");
    const videoContainer = document.querySelector(".video-container");
    const iframe = videoContainer.querySelector("iframe");
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
            // Exibe o botão de Play, a mensagem e o vídeo
            playButton.style.display = "inline-block";
            messagePlay.style.display = "block"; // Exibe a mensagem

            // Quando o botão de play for clicado, exibe o vídeo e começa o áudio
            playButton.addEventListener("click", () => {
                videoContainer.style.display = "block"; // Exibe o vídeo
                iframe.src = "https://www.youtube.com/embed/SETK2maosQY?autoplay=1"; // Adiciona o autoplay ao iframe
            });
        }
    });
});


