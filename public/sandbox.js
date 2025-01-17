const form = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const username = usernameInput.value
    const password = passwordInput.value

    const usernamePattern = /^[a-åA-Å]{6,12}$/;
    const passwordPattern = /^[a-zA-Z0-9]{8,16}$/;


    let isUsernameValid = usernamePattern.test(username);
    let isPasswordValid = passwordPattern.test(password);

    if (!isUsernameValid) {
        alert('Brukernavn må være mellom 6-12 bokstaver (a-å, A-Å).');
    };
    if (!isPasswordValid) {
        alert('Passord må være mellom 8-16 tegn og inneholde bokstaver og tall.');
    };
});