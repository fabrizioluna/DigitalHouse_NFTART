
let formOption = null;

const Login = document.getElementById('login').addEventListener('click', () => {
    formOption = 'Login';
    showPopUp();
});

const Register = document.getElementById('register').addEventListener('click', () => {
    formOption = 'Register';
    showPopUp();
});

const popUpCloseLogin = document.getElementById('popUp__CloseLogin').addEventListener('click', ()=> {
    closePopUp();
});

const popUpCloseRegister = document.getElementById('popUp__CloseRegister').addEventListener('click', ()=> {
    closePopUp();
});

const popUpChangeScreen = document.getElementById('registerButton').addEventListener('click', () => {
    popUpBackdropLogin.style.display = 'none';
    popUpContentLogin.style.display = 'none';

    formOption = 'Register';
    showPopUp();
});

const popUpBackScreen = document.getElementById('popUp__BackRegister').addEventListener('click', () => {
    popUpBackdropRegister.style.display = 'none';
    popUpContentRegister.style.display = 'none';

    formOption = 'Login';
    showPopUp();
});

const popUpBackdropLogin = document.getElementById('popUpBackdropLogin');
const popUpContentLogin = document.getElementById('popUpContentLogin');

const popUpBackdropRegister = document.getElementById('popUpBackdropRegister');
const popUpContentRegister = document.getElementById('popUpContentRegister');

let popUpStatus = false;

function showPopUp(){
    return formOption === 'Login' ? showLoginPopUp() : showRegisterPopUp();
}

function showLoginPopUp(){
    popUpBackdropLogin.style.display = 'block';
    popUpContentLogin.style.display = 'block';
    return popUpStatus = true;
}

function showRegisterPopUp(){
    popUpBackdropRegister.style.display = 'block';
    popUpContentRegister.style.display = 'block';
    return popUpStatus = true;
}

function closePopUp(){
    popUpBackdropLogin.style.display = 'none';
    popUpContentLogin.style.display = 'none';
    popUpBackdropRegister.style.display = 'none';
    popUpContentRegister.style.display = 'none';
    return popUpStatus = false;
    
}