const client = [
    {
        id: "user1",
        description: "I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!",
        img: "Ellipse 11.png",
        imgAlt: "fhotouser1",
        name: "Denny Hilguston",
        address: "@denny.hill",  
    },
    {
        id: "user2",
        description: "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
        img: "Ellipse 11 (1).png",
        imgAlt: "fhotouser2",
        name: "Vani Pandey",
        address: "@vani.pandey",  
    },
    {
        id: "user3",
        description: "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
        img: "Ellipse 11 (3).png",
        imgAlt: "fhotouser3",
        name: "milly Singh",
        address: "@milly.singh",  
    }
]
const generateClient = (defClient = client) => {
    const clientDiv = document.createElement("div")
    clientDiv.classList.add("clients-user")
    defClient.forEach((client) => {  
        const clientHTML = `
                <li class="clients-user__item">
                    <span class="user-text">starstarstar</span>
                    <p class="user-description">${client.description}</p>
                    <div class="user-person">
                        <img src="assents/images/clients/${client.img}" alt="${client.imgAlt}">
                        <div class="person-name">
                            <p class="person-name__foto">${client.name}</p>
                            <address class="parson-name__address">${client.address}</address>
                        </div>
                    </div>
                </li
    `
        
        clientDiv.innerHTML += clientHTML 
        
    })
    clientsUser.appendChild(clientDiv)
};
generateClient();