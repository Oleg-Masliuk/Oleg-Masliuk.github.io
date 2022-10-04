const cardForm = document.getElementById("cardForm"); 
const cardName = document.getElementById("cardName"); 
const cardDescription = document.getElementById("cardDescription");
const cardImg = document.getElementById("cardImg");

let userCard = "";
let date = "";
const handleCardInput = (e) => {
    userCard = { ...userCard, [e.target.name]: e.target.value, date: Date.parse(new Date)}   
};

const handlecardForm = (e) => {
   
    e.preventDefault();
    overlayAddCard.style.display = "none"
    CardNew.push({ ...userCard, [e.target.name]: e.target.value })
    localStorage.setItem("Card", JSON.stringify(CardNew));
    listitemContent.innerHTML = "";
    cardsNew.style.display = "none"
    pages = numPages(cards)
    
    if (CardNew.length == 1 || (CardNew.length - 1) % 6 == 0) {
        el = document.getElementById('pages')
        el.innerHTML =""
        changePage(CardNew.length)
        addPages() 
    } else changePage(pages);
    }
        
cardName.addEventListener("change", handleCardInput);
cardDescription.addEventListener("change", handleCardInput);
cardImg.addEventListener("change", handleCardInput);
cardForm.addEventListener("submit", handlecardForm);



      //add card
const overlayAddCard = document.getElementById("overlayAddCard"); 
const cardAdd = document.getElementById("cardAdd"); 
const userMenuCard = document.getElementById("userMenuCard"); 

const handleheroBtnNow = (e) => {
    if (localStorage.getItem("User") != null || localStorage.getItem("Password") != null)
    {overlayAddCard.style.display = "block"}
    else {alert ("only registered users can add cards")}
};
const handleoverlayAddCard = (e) => {
    overlayAddCard.style.display = "none"
};

const handlecardAdd = (e) => {
e.stopPropagation();   
overlayAddCard.style.display = "block"
};

overlayAddCard.addEventListener("click", handleoverlayAddCard);
cardAdd.addEventListener("click", handlecardAdd);
heroBtnNow.addEventListener("click", handleheroBtnNow);
userMenuCard.addEventListener("click", handleheroBtnNow);

