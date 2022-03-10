const modalWindow = document.querySelector('.header__btn')
const modalAuth = document.querySelector('.modal-window')
const closeAuth = document.querySelector('.modal-close')
const logInForm = document.getElementById('logInForm')
const buttonOut = document.querySelector('.header__out')
const userName = document.querySelector('.user-name')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')

console.log(userName);
console.log(buttonOut);

const login = (user) => {  
    modalWindow.style.display = 'none'
    

    userName.style.display = 'block'
    buttonOut.style.display = 'block'
    userName.textContent = user.login

    modalAuth.classList.remove('active');
}

const logout = () => {
    modalWindow.style.display = 'block'
    

    userName.style.display = 'none'
    buttonOut.style.display = 'none'
}



modalWindow.addEventListener('click', () => {
    modalAuth.classList.toggle('active');
    console.log(modalAuth)
})

closeAuth.addEventListener('click', () => {
    modalAuth.classList.remove('active');
    console.log(modalAuth)
})

buttonOut.addEventListener('click', () => {
    logout()
})

logInForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }

    localStorage.setItem('user', JSON.stringify(user))
    login(user);
})

if (localStorage.getItem('user')) {
    login(JSON.stringify(localStorage.getItem('user')));
}


 