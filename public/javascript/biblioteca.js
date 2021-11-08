const bibliotecaForm = document.getElementById("bibliotecaForm");
const jogosContainer = document.querySelector(".jogos");
const nameInput = bibliotecaForm["name"];
const categoryInput = bibliotecaForm["category"];
const priceInput = bibliotecaForm["price"];
const clear = document.getElementById("clear")
const checklocal = document.getElementById("checklocal")

checklocal.addEventListener("click", () => {
    const jogos = JSON.parse(localStorage.getItem("jogos")) || [];
    console.log(jogos)
})

clear.addEventListener("click", () => {
    localStorage.clear()    
    location.reload()
})

const jogos = JSON.parse(localStorage.getItem("jogos")) || [];

const addGame = (name, category, price) => {
    jogos.push({
        name,
        category,
        price,
    });

    localStorage.setItem("jogos", JSON.stringify(jogos));

    return { name, category, price };
};

const createGame = ({ name, category, price }) => {
    // Create elements
    const gameDiv = document.createElement("div");
    const gameName = document.createElement("h3");
    const gameCategory = document.createElement("p");
    const gamePrice = document.createElement("p");
    const aviso = document.createElement("p");

    // Fill the content
    gameName.innerText = "Nome do jogo: " + name;
    gameCategory.innerText = "Categoría: " + category;
    gamePrice.innerText = "Preco: R$" + price;

    // Add to the DOM

    gameDiv.append(gameName, gameCategory, gamePrice);
    jogosContainer.appendChild(gameDiv);
    jogosContainer.style.display = jogos.length === 0 ? "none" : "flex";
};

jogosContainer.style.display = jogos.length === 0 ? "none" : "flex";

jogos.forEach(createGame);

bibliotecaForm.onsubmit = e => {
    e.preventDefault();

    const newGame = addGame(
        nameInput.value,
        categoryInput.value,
        priceInput.value
    );

    createGame(newGame);
    nameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
};