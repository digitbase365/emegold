const mburger = document.querySelector('header .navbar-toggler') 
const mobile_menu = document.querySelector('header ul.navbar-nav') 
const menu_item = document.querySelectorAll('header ul.navbar-nav li a') 
const nav_div = document.getElementById('navbarSupportedContent')

mburger.addEventListener('click', ()=>{ 
  mobile_menu.classList.remove('activ')
})

menu_item.forEach(item => {
  item.addEventListener('click', ()=>{
  mobile_menu.classList.toggle('activ')
  nav_div.classList.remove('show')
  })
})