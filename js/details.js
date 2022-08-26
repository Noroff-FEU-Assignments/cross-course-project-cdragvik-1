const detailsContainer = document.querySelector(".jacket_spesific");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://rainydays.cdragvik.one/wp-json/wc/store/products/" + id;
const proxy = "https://noroffcors.herokuapp.com/";
const productUrl = proxy + url;

console.log(url);

async function details() {

    try {
        const response = await fetch(url); 
        const results = await response.json();

        console.log(results);

        newPageTitle = results.name;
        document.title = newPageTitle;

        createHtml(results);

    } catch(error) {
        detailsContainer.innerHTML = `<div class="error">Ups! An error has occured.</div>`;
    }

}

details();

function createHtml(results) {
    detailsContainer.innerHTML += `<h1>${results.name}</h1>
                                    <img src="${results.images[0].src}" alt="${results.name}" class="product_image">
                                    <h2>${results.prices.price} kr</h2>
                                    <p>${results.description}</p>
                                    <a href="added_to_cart.html"><button class="cta_small">Add to cart</button></a>`;
}



