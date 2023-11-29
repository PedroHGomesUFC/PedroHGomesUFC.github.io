async function getName() {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        return response.data.results[0].name.first;
    } catch (error) {
        console.error(error);
    }
}

async function adicionarPrimeiroNome() {
    let inputname = document.getElementById('first-name');
    inputname.value = await getName();
}

adicionarPrimeiroNome();

async function getLastName() {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        return response.data.results[0].name.last;
    } catch (error) {
        console.error(error);
    }
}
async function adicionarSobrenome() {
    let inputname = document.getElementById('last-name');
    inputname.value = await getLastName();
}

adicionarSobrenome()

async function getCell() {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        return response.data.results[0].cell;
    } catch (error) {
        console.error(error);
    }
}
async function adicionarTelefone() {
    let inputname = document.getElementById('cell-phone');
    inputname.value = await getCell();
}

adicionarTelefone()

async function getdate() {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        return response.data.results[0].dob.date;
    } catch (error) {
        console.error(error);
    }
}
async function adicionarDataNascimento() {
    let inputname = document.getElementById('birth');
    inputname.value = await getCell();
}

adicionarDataNascimento()

async function getEmail() {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        return response.data.results[0].email;
    } catch (error) {
        console.error(error);
    }
}
async function adicionarEmail() {
    let inputname = document.getElementById('email');
    inputname.value = await getEmail();
}

adicionarEmail()

async function getPassword() {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        return response.data.results[0].login.password;
    } catch (error) {
        console.error(error);
    }
}
async function adicionarSenha() {
    let inputname = document.getElementById('senha');
    inputname.value = await getPassword();
}

adicionarSenha()


  /** response.data.results[0].cell, response.data.results[0].dob.date, response.data.results[0].email, response.data.results[0].login.password */