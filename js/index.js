const countries = document.querySelector('.countries');
const inputField = document.getElementById('input');
const filterSearch = document.getElementById('select');
let allData;

// const themeButton = document.querySelector('.darkmode');

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
      //     console.log(el.target.value);
          // console.log(allData);
          const filteredData = allData.filter((val)=> val.name.common.toLowerCase().includes(el.target.value.toLowerCase()))
          // console.log(filteredData) 
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






// const body = document.body;
// const themeButton = document.querySelector('.darkmode');

// // 2️⃣ Check saved theme on page load
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//   body.classList.add(savedTheme); // apply dark mode
//   if (themeButton) {
//     themeButton.innerText = savedTheme === "dark-mode" ? "Light Mode" : "Dark Mode";
//   }
// }

// // 3️⃣ Toggle dark mode
// if (themeButton) {
//   themeButton.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
    
//     if (body.classList.contains("dark-mode")) {
//       localStorage.setItem("theme", "dark-mode");
//       themeButton.innerText = "Light Mode";
//     } else {
//       localStorage.removeItem("theme"); // removes dark mode
//       themeButton.innerText = "Dark Mode";
//     }
//   });
// }
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//   document.body.classList.add(savedTheme);
//   if (themeButton) {
   
    
//   }
// }
// if (themeButton) {

//  themeButton.addEventListener("click", () => {
//  document.body.classList.toggle("dark-mode");
    
//       if (document.body.classList.contains("dark-mode")) {
//       localStorage.setItem("theme", "dark-mode");
//          themeButton.innerHTML = `<p class="darkmode"><i class="fa-solid fa-sun moon"></i>Light Mode</p>`
//       }

//      else {
//       localStorage.setItem("theme", "");
//       themeButton.innerHTML = `<p class="darkmode"><i class="fa-regular fa-moon moon"></i>Dark mode</p>`;
//     }
//   });
// }





