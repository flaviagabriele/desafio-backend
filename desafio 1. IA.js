document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Exibe a mensagem de agradecimento
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Agradecimento</h2>
        <p>Obrigado por responder ao formulário!</p>
    `;

    // Limpa o formulário após o envio
    this.reset();
});
