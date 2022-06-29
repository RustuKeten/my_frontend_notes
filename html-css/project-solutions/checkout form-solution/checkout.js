const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    //set item to localStorage
    localStorage.setItem("taxRate",taxRate);
    localStorage.setItem("shippingPrice",shippingPrice)
    //set item to SessionStorage
    sessionStorage.setItem("taxRate",taxRate);
    sessionStorage.setItem('shippingPrice', shippingPrice);
});


//**Capturing method

let productsDiv =document.querySelector(".products");
productsDiv.addEventListener("click", (event)=>{
    console.log(event.target);
    if(event.target.className == "minus"){
        let quantityP=event.target
        if(event.target.nextElementSibling.innerText>1){
        event.target.nextElementSibling.innerText--;
        }
        else{
            if(confirm("Product will be deleted?")){
                event.target.parentElement.parentElement.parentElement.remove()
            }
        }
    }
    else if(event.target.classList.contains("plus")){
        event.target.previousElementSibling.innerText++;
    }
    else if (event.target.classList.contains("remove-product")){
        event.target.parentElement.parentElement.parentElement.remove();
    }
    else{
        console.log("other elements clicked");
    }
})
parseFloat