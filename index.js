const countries = document.querySelector('.countries')
fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,subregion,languages,currencies,borders')
.then((res)=>res.json())
.then((data)=>{
        data.forEach(val => {
   
           const countriesList = document.createElement('a');
           countriesList.classList.add('countriesList');
           countriesList.href=`/country.html?name=${val.name.common}`
           console.log(val)
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
      
   });
});
