let cardItem = document.querySelectorAll("#cardItem");
cardItem.forEach((item) => {
    
    item.addEventListener("click", (e) => {
        
        const cardItemTitle = item.dataset.title 
        const Titl = CardNew.find((tit) => tit.title === cardItemTitle)
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
