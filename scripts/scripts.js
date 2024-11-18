function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-location').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-location').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
}