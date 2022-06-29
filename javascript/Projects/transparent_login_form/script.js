const loginUser = document.getElementById("loginUser");
const loginPassword = document.getElementById("loginPassword");
const submitBtn = document.querySelectorAll(".submit-btn");
const email = document.getElementById("email");
const containerDiv = document.querySelector(".login-wrapper");


containerDiv.addEventListener("click",(e)=>{
    // e.preventDefault();
    // console.log(e.target);
   if(e.target.querySelectorAll(".submit-btn")){
       console.log(loginUser.value);
       console.log(loginPassword.value);
       console.log(email.value);
   } 
})