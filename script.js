
// Função para atualizar o ano automaticamente no footer
function updateYear() {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;  // Atualiza o ano
}


document.addEventListener('DOMContentLoaded', function() {
    updateYear();
});
