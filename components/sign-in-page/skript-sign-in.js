const signForm = document.getElementById("signForm"); 
const userInput = document.getElementById("user"); 
const passwordInput = document.getElementById("password");

let userName = "";
let userPassword = "";
const handleUserInput = (e) => {
    userName = {...userName, [e.target.name]: e.target.value}
};

const handleSignInBtn = (e) => {
    e.preventDefault();
    localStorage.setItem("User", JSON.stringify(userInput.value));
    localStorage.setItem("Password", JSON.stringify(passwordInput.value));
    headerSignBtn.style.display = "none"
    userPhoto.style.display = "block"
    overlaySign.style.display = "none"
    }

userInput.addEventListener("change", handleUserInput);
passwordInput.addEventListener("change", handleUserInput);
signForm.addEventListener("submit", handleSignInBtn);

const headerSignBtn = document.getElementById("headerSignBtn"); 
const overlaySign = document.getElementById("overlaySign"); 
const signIn = document.getElementById("signIn");
const userMenuLogout = document.getElementById("userMenuLogout"); 

const handleHeaderSignBtn = (e) => {
    overlaySign.style.display = "block"
    };
const handleoverlaySign = (e) => {
    overlaySign.style.display = "none"
    };

const handlesignIn = (e) => {
    e.stopPropagation();   
    overlaySign.style.display = "block"
    };
const handleUserMenuLogout = (e) => { 
    headerSignBtn.style.display = "block"
    userPhoto.style.display = "none"
    userMenu.style.display = "none"
    localStorage.removeItem("User")
    localStorage.removeItem("Password")
    };
headerSignBtn.addEventListener("click", handleHeaderSignBtn);
overlaySign.addEventListener("click", handleoverlaySign);
signIn.addEventListener("click", handlesignIn);
userMenuLogout.addEventListener("click", handleUserMenuLogout);
 