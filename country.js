let img = document.getElementById('flag');
let countryTitle = document.querySelector('.countrytitle');
let nativeName = document.querySelector('.native');
let population = document.querySelector('.population');
let region = document.querySelector('.region');
let subRegion = document.querySelector('.sub');
let capital = document.querySelector('.capital');
let topLevel = document.querySelector('.toplvl');
let currency = document.querySelector('.currency');
let language = document.querySelector('.language');
let btnDiv = document.querySelector('.btnstyle');
let backButton = document.querySelector('.backBtn button');
const countryName = new URLSearchParams(window.location.search).get('name');

backButton.addEventListener('click', (() => {
    window.location.href = "index.html";
}))

fetch(`https://restcountries.com/v3.1/name/${countryName}?fulltext=true`)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(val => {
            
            console.log(val.borders);

            img.src = val.flags.svg ? `${val.flags.svg}` : "N/A"

            countryTitle.innerText = val.name.common ? val.name.common : "N/A";

            nativeName.innerText = Object.values(val.name.nativeName)[0].common;

            population.innerText = val.population ? val.population : "Population N/A";

            region.innerText = val.region ? val.region : "Region N/A";

            subRegion.innerText = val.subregion ? val.subregion : "SubRegion N/A";

            capital.innerText = val.capital ? val.capital : "Capital N/A";

            topLevel.innerText = val.tld ? val.tld : "TLD N/A";

            currency.innerText = val.currencies
                ? Object.values(val.currencies)[0].name
                : currency.innerText = "Currency N/A";

            language.innerText = val.languages
                ? Object.values(val.languages).slice(0, 3).join(",")
                : language.innerText = "Language N/A";

            val.borders? val.borders.forEach((el,index)=>{
                let a = document.createElement('a')
                a.innerText = el
                console.log(index,el)
                btnDiv.append(a);
            }): btnDiv.innerHTML = `<p>Borders N/A</p>`;


        });
    })


