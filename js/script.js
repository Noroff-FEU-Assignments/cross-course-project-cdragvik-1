const url = "https://rainy-days.local/wp-json/wc/store/products";
const productContainer = document.querySelector(".our_jackets");

async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getProducts();


function createHTML(products){
    products.forEach(function(product){

        productContainer.innerHTML += `<div class="product_list"> 
        <img src="${product.images[0].src}" alt="${product.name}" class="jacket_img">
        <h3>${product.name}</h3> 
        <p>${product.prices.price} kr </p>
        <a href="http://127.0.0.1:5501/product_specific.html?id=${product.id}"><button class="cta_small">View more</button></a>
        </div>`;
    })
}