const menutoggle = document.querySelector('.toggle')
const Menu = document.querySelector('.menu_box')
menutoggle.addEventListener('click',() => {
  menutoggle.classList.toggle('active')
  Menu.classList.toggle('active')
})