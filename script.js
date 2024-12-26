// Formulário de login
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Chamada para a API de login
    // fetch('/api/login', { ... })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));

    // Limpar os campos após o envio, se desejar
    // document.getElementById('login-email').value = '';
    // document.getElementById('login-password').value = '';
});

// Troca para o formulário de cadastro
document.getElementById('go-to-signup').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';

    // Limpar os campos de signup ao alternar para o formulário de cadastro
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
});

// Troca para o formulário de login
document.getElementById('go-to-login').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';

    // Limpar os campos de login ao alternar para o formulário de login
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
});

// Formulário de cadastro
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const url = `http://127.0.0.1:8000/usuarios/?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(password)}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na criação do usuário');
        }
        return response.json();
    })
    .then(data => {
        console.log('Usuário cadastrado com sucesso:', data);
        alert('Cadastro realizado com sucesso!');

        // Limpar os campos após o cadastro, se desejar
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro ao realizar o cadastro.');
    });
});
