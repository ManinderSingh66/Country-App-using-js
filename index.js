const countries = document.querySelector('.countries');
const inputField = document.getElementById('input');
const filterSearch = document.getElementById('select');
let allData;

fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,subregion,languages,currencies,borders')
.then((res)=>res.json())
.then((data)=>{
      allData = data;
      renderCards(data);
});

filterSearch.addEventListener('change', ((el) => {
     fetch(`https://restcountries.com/v3.1/region/${filterSearch.value}`)
          .then((res) => res.json())
          .then(renderCards)
     }))

inputField.addEventListener('input',(el)=>{
          console.log(el.target.value);
          // console.log(allData);
          const filteredData = allData.filter((val)=> val.name.common.toLowerCase().includes(el.target.value))
          console.log(filteredData) 
          renderCards(filteredData)
 });

function renderCards(data){
     //   console.log(data);
           countries.innerHTML = ""

       data.forEach((val)=>{
           let countriesList = document.createElement('a');

           countriesList.classList.add('countriesList');
           countriesList.href=`/country.html?name=${val.name.common}`
   
           countriesList.innerHTML =  `
                 <img src=${val.flags.svg} alt="flag">
                    <div class="details">
                    <h2>${val.name.common}</h2>
                    <p><b>Population: </b>${val.population.toLocaleString('en-IN')}</p>
                    <p><b>Region: </b>${val.region}</p>
                    <p><b>Capital: </b>${val.capital}</p>
                   </div>
`
      countries.append(countriesList);

   })
}