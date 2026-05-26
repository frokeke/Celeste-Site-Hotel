const url = "http://localhost:3000/users"

async function postUsuario() {
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    }
    try{
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    const data = await response.json()
    console.log(data)
    alert('Usuário cadastrado com sucesso!')
    }catch(error){
        console.error('Erro ao cadastrar usuário:', error)
        alert('Erro ao cadastrar usuário.')
    }
}