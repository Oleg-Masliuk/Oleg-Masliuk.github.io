let Card = localStorage.getItem("Card") || [];
const generateCards = (defCard = Card) => {
    if (!Card.length) {
        cardsNew.innerHTML = "Empty cards"
    }
}
generateCards();



let CardNew = JSON.parse(localStorage.getItem("Card")) || [];
const generateCardsNew = (defCard = CardNew) => {
    const cardDiv = document.createElement("div") 
    cardDiv.classList.add("listitem-content")
    CardNew = JSON.parse(localStorage.getItem("Card")) || [];
    defCard.forEach((CardNew) => {  
        const cardHTML = `
            <li id ="cardItem" data-title =${CardNew.title}> <img class="listitem-content__foto" src="assents/images/ListItem/${CardNew.img}" alt="${CardNew.imgAlt}">
                <div class="headsets-dscr">
                    <h5 class="headsets-dscr__name">${CardNew.title}</h5>
                    <p class="headsets-dscr__text">
                        ${CardNew.caption}
                    </p>
                </div>
            </li>
    `    
        cardDiv.innerHTML += cardHTML      
    })
    listitemContent.appendChild(cardDiv) 
};
