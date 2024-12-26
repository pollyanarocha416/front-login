document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Adicione aqui a chamada para a API de login
    // Exemplo:
    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ email, password })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
});

document.getElementById('go-to-signup').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('go-to-login').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});


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
        // Aqui você pode redirecionar o usuário ou limpar o formulário
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro ao realizar o cadastro.');
    });
});
