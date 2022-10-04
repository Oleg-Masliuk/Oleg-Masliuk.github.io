
const itemsPerPage = 6;

let currentPage = 1;

let cards = JSON.parse(localStorage.getItem("Card")) || [];

let pages = numPages(cards)

function numPages(cardsArray) {
  return Math.ceil(cardsArray.length / itemsPerPage)
}

function changePage(page) {
  cards = JSON.parse(localStorage.getItem("Card")) || [];
  pages = numPages(cards)
  const mapPagin = [];
  if (page < 1) page = 1
  if (page > pages) page = pages
  
  listitemContent.innerHTML = ""
  
  for (let i = (page - 1) * itemsPerPage; i < (page * itemsPerPage) && i < cards.length; i++) {
    mapPagin.push(cards[i]) 
    console.log (mapPagin)
  }
  generateCardsNew(defCard = mapPagin)
  cardItem = document.querySelectorAll("#cardItem")
  cardItem.forEach((item) => {
    
    item.addEventListener("click", (e) => {
        
        const cardItemTitle = item.dataset.title 
      const Titl = mapPagin.find((tit) => tit.title === cardItemTitle)
      console.log (Titl)
        const modalDiv = document.createElement("div")
        modalDiv.classList.add("page")
        modalContent.innerHTML = ""
        const modalHTML = `
        <section class="page">
            <button id="modalClose">Close</button>
             <img class="page-img" src="assents/images/ListItem/${Titl.img}" alt="Foto_user">
            <h4 class="page-title">${Titl.title}</h4>
            <p class="page-text">${Titl.caption}</p>           
        </section>
    `
    modalDiv.innerHTML=modalHTML
    modalContent.appendChild(modalDiv)
    const modalClose = document.getElementById("modalClose");
    const handleModalClose = (e) => { 
    modalContent.innerHTML = ""
    };
    modalClose.addEventListener("click", handleModalClose);     

    });
})
}

function nextPage() {
  if (currentPage < pages) changePage(++currentPage)
}

function prevPage() {
  if (currentPage > 1) changePage(--currentPage)
}

function gotoPage(page) {
  currentPage = page
  changePage(page)
}

function addPages() {
  const el = document.getElementById('pages')
  for (let i = 1; i < pages + 1; i++) {
    el.innerHTML += `<li ><a id="contentBtn" href="javascript:gotoPage(${i})">${i}</a></li>`
  }
}

const Test = (defCard = Card) => {
  Card = localStorage.getItem("Card") || [];
    if (Card.length) {
        window.onload = function () {
        changePage(1) 
        addPages() 
};
    }
}
Test ();



