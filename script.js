    document.addEventListener("DOMContentLoaded", (Event) => {  

    const burgerMenuBtn = document.getElementById("burgerMenu"); 
    const burgerMenuList = document.getElementById("headerBurgerList");
    const burgerMenuOpen = () => {                              
        burgerMenuList.classList.toggle ("burger-list")
    };

    burgerMenuBtn.addEventListener("click", burgerMenuOpen);   
    
        const burgerTextHome = document.getElementById("burgerTextHome"); 
        const burgerTextCompany = document.getElementById("burgerTextCompany"); 
        const burgerTextFeatures = document.getElementById("burgerTextFeatures"); 

    const handleBurgerTextHome = (e) => { 
        burgerTextHome.classList.add ("item__name__text--active")
        burgerTextCompany.classList.remove ("item__name__text--active")
        burgerTextFeatures.classList.remove ("item__name__text--active")
        
    };

    const handleBurgerTextCompany = (e) => {  
        burgerTextCompany.classList.add("item__name__text--active")
        burgerTextHome.classList.remove("item__name__text--active")
        burgerTextFeatures.classList.remove ("item__name__text--active")
        
    };

    const handleBurgerTextFeatures = (e) => {  
        burgerTextFeatures.classList.add("item__name__text--active")
        burgerTextHome.classList.remove ("item__name__text--active")
        burgerTextCompany.classList.remove("item__name__text--active")
      
    };
    burgerTextHome.addEventListener("click", handleBurgerTextHome);
    burgerTextCompany.addEventListener("click", handleBurgerTextCompany);
    burgerTextFeatures.addEventListener("click", handleBurgerTextFeatures);


    //Select
    const sortSelect = document.getElementById("sortSelect"); 
    const handleSortSelectChange = (e) => {
        CardNew = JSON.parse(localStorage.getItem("Card")) || [];
        listitemContent.innerHTML = ""; 
        switch (e.target.value) {
            case 'New first':
                const sortCardNew = CardNew.sort((a, b) => a.date - b.date);
                localStorage.setItem("Card", JSON.stringify(sortCardNew))
                changePage(pages)
                brack;
            case 'Last first':
                const sortCardLast = CardNew.sort((a, b) => b.date - a.date);
                localStorage.setItem("Card", JSON.stringify(sortCardLast))
                changePage(pages)
                brack;
            default: generateCardsNew(defCard = CardNew)
                break;
        }

        
    };
    sortSelect.addEventListener("change", handleSortSelectChange);


    //Header
    const headerHome = document.getElementById("headerHome"); 
    const headerCompany = document.getElementById("headerCompany"); 
    const headerFeature = document.getElementById("headerFeature"); 

    const handleHeaderHome = (e) => { 
        headerHome.classList.add ("item__name__text--active")
        headerCompany.classList.remove ("item__name__text--active")
        headerFeature.classList.remove ("item__name__text--active")
    };

    const handleHeaderCompany = (e) => {  
        headerCompany.classList.add("item__name__text--active")
        headerHome.classList.remove("item__name__text--active")
        headerFeature.classList.remove ("item__name__text--active")
    };

    const handleHeaderFeature = (e) => {  
        headerFeature.classList.add("item__name__text--active")
        headerHome.classList.remove ("item__name__text--active")
        headerCompany.classList.remove("item__name__text--active")
    };

    headerHome.addEventListener("click", handleHeaderHome);
    headerCompany.addEventListener("click", handleHeaderCompany);
    headerFeature.addEventListener("click", handleHeaderFeature);



    //footerForm
    const footerForm = document.getElementById("footerForm"); 
    const footerBtn = document.getElementById("footerBtn"); 

    const handleFooterForm = (e) => {   
        console.log(e.target.value)
        return (e.target.value)
    };
    const handleFooterBtn = (e) => {                  
        console.log(handleFooterForm (e))
        console.log("Start")
        localStorage.setItem("Email", JSON.stringify(footerForm.value));
    };
footerForm.addEventListener("change", handleFooterForm);
footerBtn.addEventListener("click", handleFooterBtn);

    
   
    const heroBtnNow = document.getElementById("heroBtnNow"); 
    const heroBtnDevice = document.getElementById("heroBtnDevice"); 

    const handleHeroBtnNow = (e) => { 
        e.preventDefault();
        heroBtnNow.classList.add("hero-choice__button--active")
        heroBtnDevice.classList.remove("hero-choice__button--active")
        console.log("Let’s Explore Three-Dimensional visual")
    };

    const handleHeroBtnDevice = () => {
    heroBtnDevice.classList.add("hero-choice__button--active")
    heroBtnNow.classList.remove("hero-choice__button--active")
    console.log("Let’s Explore Three-Dimensional visual")
}
    heroBtnNow.addEventListener("click", handleHeroBtnNow);
    heroBtnDevice.addEventListener("click", handleHeroBtnDevice);

    //content
    const contentBtn = document.getElementById("contentBtn"); 

    const handlecontentBtn = () => {
    console.log("Get it Now")
    };
    contentBtn.addEventListener("click", handlecontentBtn);
    
    //HEADER USER MENU
    const userMenu = document.getElementById("userMenu"); 
    const closeUserMenu = document.getElementById("closeUserMenu"); 
    const handleuserPhoto = () => {
    userMenu.style.display = "block"
    };
    const handlecloseUserMenu = () => {
    userMenu.style.display = "none"
    };
    closeUserMenu.addEventListener("click", handlecloseUserMenu);
    userPhoto.addEventListener("click", handleuserPhoto);
});




