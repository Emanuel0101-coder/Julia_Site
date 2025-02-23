document.addEventListener("DOMContentLoaded", () => {
    const heart = document.querySelector(".heart");
    const contador = document.getElementById("contador");
    const playButton = document.getElementById("play-button");
    const messagePlay = document.getElementById("message-play");
    const videoContainer = document.querySelector(".video-container");
    const iframe = document.getElementById("video-iframe");
    const playLink = document.getElementById("play-link");
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
            playButton.style.display = "inline-block"; // Exibe o botão de Play
            messagePlay.style.display = "block"; // Exibe a mensagem
        }
    });

    // Quando o botão de Play for clicado, o usuário é redirecionado para o vídeo do YouTube
    playLink.addEventListener("click", (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link para evitar recarregar a página
        
        // Redireciona para o vídeo do YouTube
        window.location.href = "https://www.youtube.com/watch?v=SETK2maosQY"; // URL do vídeo no YouTube
    });
});

