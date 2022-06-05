import { productArray } from "./constants/productList.js";
const productsContainer = document.querySelector(".our_jackets"); 
const cart = document.querySelector(".secondcart");
const cartList = document.querySelector(".cart-list");
let cartArray = [];

productArray.forEach(function(product){
    productsContainer.innerHTML +=
    `
    <div class="product_list"> 
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button class="cta_small">Add to cart</button>
    </div>
    `
})

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.onclick = function(event){
        const itemToAdd = productArray.find(item => item.id === event.target.dataset.product);
        cartArray.push(itemToAdd); 
        showCart(cartArray);
    }
})

function showCart(cartItems){
    cart.style.display = "block";
    cartList.innerHTML = "";
    cartItems.forEach(function(cartElement){
        cartList.innerHTML += 
        `<div class="cart-item">
            <h4>${cartElement.name}</h4>
        </div>
        `
    })
}