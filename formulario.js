document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado automaticamente

    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    // Expressão regular para validar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o campo de e-mail está vazio ou não corresponde ao padrão de e-mail
    if (email === '' || !emailRegex.test(email)) {
        document.getElementById('errorMessage').innerText = 'Por favor, insira um e-mail válido.';
        document.getElementById('errorMessage').style.display = 'block';
        emailInput.focus(); // Coloca o foco de volta no campo de e-mail
    } else {
        // Se o e-mail for válido, você pode prosseguir com o envio do formulário ou outra ação
        alert('E-mail válido!'); // Aqui você pode modificar para realizar a ação desejada após a validação
        document.getElementById('errorMessage').style.display = 'none'; // Esconde a mensagem de erro, caso esteja sendo exibida
    }
});
