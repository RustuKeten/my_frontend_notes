const taxRate = localStorage.getItem("taxRate");
const shippingPrice = localStorage.getItem("shippingPrice");

window.addEventListener("load", () => {
  localStorage.getItem("shippingPrice");
  localStorage.getItem("taxRate");
  // sessionStorage.setItem("shippingPrice");
  // sessionStorage.setItem("taxRate");
});
console.log(taxRate);
console.log(shippingPrice);

//**capturing method */

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click",(e)=>{
    console.log(e.target);
    
      if (e.target.classList.contains("minus")) {
        let quantityP = e.target.nextElementSibling;
        quantityP.textContent--;
        if (quantityP.innerText == 0) {
          e.target.parentElement.parentElement.parentElement.remove();
        }
        // console.log(quantityP.textContent--);
        addminusProductTotal(e.target.parentElement.parentElement);
      }
    if (e.target.classList.contains("plus")) {
      let quantityP = e.target.previousElementSibling;
      console.log(quantityP);
      quantityP.innerHTML++;
      //     // e.target.previousElementSibling.innerHTML++;
      addminusProductTotal(e.target.parentElement.parentElement);
    }

});

let addminusProductTotal = (productInfoDiv) =>{
    let price= productInfoDiv.querySelector("strong").innerText;
    let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
    let productTotal = productInfoDiv.querySelector(".product-line-price");
    productTotal.innerText = (price * quantity).toFixed(2)

    upDateCart()//**fonksiyonu burda tanımladık ki tek seferde ikisini beraber çalıştırsın */


};
// let addProductTotal = (productInfoDiv) => {
//   let price = productInfoDiv.querySelector("strong").innerText;
//   let quantity = productInfoDiv.querySelector("#product-quantity").innerText;
//   let productTotal = productInfoDiv.querySelector(".product-line-price");
//   productTotal.innerText = (price * quantity).toFixed(2);
// };

let upDateCart =()=>{
    let productTotalPrices = document.querySelectorAll(".product-line-price");
  
    let subTotal = 0;
    productTotalPrices.forEach(price=>{
      subTotal += Number(price.innerText);
      // console.log(subTotal.toFixed(2));
    })

   document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subTotal.toFixed(2); 
   
   let taxValue = subTotal * taxRate;
   document.querySelector("#cart-tax p:nth-child(2)").innerText =taxValue.toFixed(2);

   let shipping =
     subTotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0;
     document.querySelector("#cart-shipping p:nth-child(2)").innerText =
       shipping.toFixed(2);

   let grandTotal = subTotal + taxValue + shipping;
   document.querySelector("#cart-total p:nth-child(2)").innerText = Number(grandTotal).toFixed(2); 


};

