const detailsContainer = document.querySelector(".our_jackets");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "http://rainy-days.local/wp-json/wc/store/products/" + id;
const proxy = "https://noroffcors.herokuapp.com/";
const productUrl = proxy + url;

console.log(url);

async function details() {

    try {
        const response = await fetch(url); 
        const results = await response.json();

        console.log(results);

        createHtml(results);

    } catch(error) {
        detailsContainer.innerHTML = `<div class="error">Ups! An error has occured.</div>`;
    }

}

details();

function createHtml(results) {
    detailsContainer.innerHTML += `<h1>${results.name}</h1>`;
}