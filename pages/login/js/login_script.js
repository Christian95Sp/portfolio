// Variable Declaration

const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

// Login button function
loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
})

// Register button function
registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
})


//far muovere casina icona
/* function moveHome() {
    let rocket_icon = document.getElementById("home-icon");
    rocket_icon.classList.add("bx-tada-hover");
}
 */


const credenziali = { username: "Lucky", password: "1224" };
let loginTrue = document.getElementById("login-button");

/* function loginAreaPrivata() {
    let loginTrue = document.getElementById("login-button");
    loginTrue.link("../area_privata/area_privata.html");
}
 */
function credenzialiEsatta(usernameInserito, passwordInserita) {
    let usernameInserito = document.getElementById("username").value;
    let passwordInserita = document.getElementById("password").value;

    if ((credenziali.username == usernameInserito) && (credenziali.password == passwordInserita))
        loginTrue.link("../area_privata/area_privata.html");
    else (alert("login Fallito"));
}

