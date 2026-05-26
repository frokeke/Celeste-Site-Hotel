const url = 'http://localhost:3000/users/login'
const form = document.getElementById('login-form')

form.addEventListener('submit', async(event) => {
    event.preventDefault()

    const loginData = {
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(loginData)
        })
        const data = await response.json()

        console.log(data)
        
        if(!data.user){
            alert('Login Inválido')
            return
        }
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        alert('Login realizado!')

        window.location.href = './index.html'
    } catch(error) {
        console.error(error)
    }
})

const user = JSON.parse(localStorage.getItem('user'))
if(user){console.log(user.name)}

function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    window.location.href='./login.html'
}