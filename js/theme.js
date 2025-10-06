let body = document.body;
let themeButton = document.querySelector('.darkmode');
let button = document.querySelector('.dark');


function applyTheme(theme){
     if(theme ==='active'){
        body.classList.add('dark-mode');
        themeButton.innerHTML = `<i class="fa-solid fa-sun moon"></i>Light Mode`;
     }else{
        body.classList.remove('dark-mode');
        themeButton.innerHTML = `<i class="fa-regular fa-moon moon"></i>Dark mode`;
     }
}
let savedTheme = localStorage.getItem('theme');
applyTheme(savedTheme);

if(button){
     button.addEventListener('click',()=>{
         let currentTheme = localStorage.getItem('theme');
         let newTheme;
         if(currentTheme ==='active'){
             newTheme = 'inactive';
         }else{
             newTheme = 'active';
         }
         localStorage.setItem('theme',newTheme);
         applyTheme(newTheme)
     })
}