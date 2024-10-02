var navmenu = document.querySelector('.menu')
var navlist = document.querySelector('.navset')

navmenu.addEventListener('click', function(event){
  navlist.classList.toggle('showmenu')
})