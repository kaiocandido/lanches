
// lista de itens
const listall = document.querySelector("ul")

// botão menu
const buttonShow = document.querySelector(".showMenu")

// botão desconto
const buttonsmap = document.querySelector(".mapear-all")

//botão somar menu todo
const resultButton = document.querySelector(".result")

//listar vegan bugger
const veganBuger = document.querySelector(".vegan")




// Menu

function showProdutcs(value) {

    listAllProduts = ""

    value.forEach((value) => {

        listAllProduts += `
    <li>
                <img src=${value.src}>
                <p>${value.name}</p>
                <p class="item-price">${formatMoney(value.price)}</p>
            </li>
    `
    })

    listall.innerHTML = listAllProduts

}



//Desconto

function DescontallPrice() {


    const double = menuOptions.map((value) => (
        {
            ...value,
            price: value.price - (value.price / 10),
        }
    ));


    showProdutcs(double)

}

// somar menu

function sumTotalResult() {

    const result = menuOptions.reduce((acc, value) => {
        total = acc + value.price
        return total

    }, 0)

    listall.innerHTML = `
    <li>
    <p>O valor total do cardapio é: ${formatMoney(result)}</p>
    </li>
    `



}

//filtro vegano

function filter() {
    const filterJustVegan = menuOptions.filter( (value) => value.vegan === true)
    showProdutcs(filterJustVegan)
}

// Converter moeda

function formatMoney(value) {
    const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return newValue
}

// button desconto
buttonsmap.addEventListener("click",  DescontallPrice)
// button  menu
buttonShow.addEventListener("click", () => showProdutcs(menuOptions))
// Botão somar menu todo
resultButton.addEventListener("click", sumTotalResult)
// Botão vegan list
veganBuger.addEventListener("click", filter)