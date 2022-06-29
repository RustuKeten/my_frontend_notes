//*=========================================================
//*                     FLAG-APP
//*=========================================================


const fetchCountry = async(name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            renderError(`Something went wrong:${res.status}`);
            throw new Error()  
        }
        const data = await res.json();
        // console.log(data[0]);
        renderCountry(data[0]);
    } catch (error) {
        console.log(error);
    }
};

const renderError = (err)=>{
    const countiresDiv = document.querySelector('.countries');
    countiresDiv.innerHTML = 
    `<h1 class="text-danger">${err}</h1>
    <img src="./404.png" alt=""/>`;
};
const renderCountry = (country)=>{
    console.log(country);
    const countiresDiv = document.querySelector(".countries");
    const {capital,
         name:{common},
        region,
    flags:{svg},
    languages,
    currencies,
} = country;
    // console.log(capital,common, region, svg);
    // console.log(Object.values(languages)); //*Object.values(objectname) kullanarak farklı keylere rağmen o keyin valuesunu alabiliriz
    // console.log(Object.values(currencies)[0].name);
    // console.log(Object.values(currencies)[0].symbol);

    countiresDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${common}</h5>
    <p class="card-text">${region}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> <i class="fas fa-lg fa-landmark"></i>  ${capital}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values(
      languages
    )}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i>
    ${Object.values(currencies)[0].name},
    ${Object.values(currencies)[0].symbol}</li>
  </ul>
</div>`;
}

fetchCountry('turkey');
fetchCountry('belgium');
fetchCountry('usa');
fetchCountry('south africa');

//** ödev  */
// ortaya bir drop down commo box, select box
// apiden fetch name
// addEventListener onchange ile event verip
// apiden 
// forEach ile selecti doldururak, seçilen ülkenin card ekrana yansıtacağiz


    
    

    