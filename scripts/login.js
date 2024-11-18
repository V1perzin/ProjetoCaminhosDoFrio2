// Usuário e senha fictícios
const validUsername = "usuario";
const validPassword = "1234";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        // Armazena o nome do usuário e vai para o perfil
        localStorage.setItem("username", username);
        window.location.href = "profile.html";
    } else {
        // Exibe erro
        document.getElementById("error-message").textContent = "Usuário ou senha incorretos!";
    }
});
