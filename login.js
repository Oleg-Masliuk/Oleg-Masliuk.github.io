

const loginUser = () => {
    if (localStorage.getItem("User") !=null ||localStorage.getItem("Password")!=null){
    headerSignBtn.style.display = "none"
    userPhoto.style.display = "block"
    overlaySign.style.display = "none"
    }
};
loginUser();