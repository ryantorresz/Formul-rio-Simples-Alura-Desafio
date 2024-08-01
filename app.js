function submitForm() {
    // Recuperar os valores digitados nos campos de entrada
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    // Verificar se a idade está no intervalo permitido
     if (age < 1 || age > 150) {
        alert('Por favor, insira uma idade válida entre 1 e 150.');
        return;
    }

    // Exibir os valores no console
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Idade: ${age}`);

    // Exibir os valores na tela
    let output = document.getElementById('output');
    output.innerHTML = `<strong>Nome:</strong> ${name} <br>
                        <strong>Email:</strong> ${email} <br>
                        <strong>Idade:</strong> ${age}`;
}