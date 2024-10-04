var navmenu = document.querySelector('.menu')
var navlist = document.querySelector('.navset')

navmenu.addEventListener('click', function(event){
  navlist.classList.toggle('showmenu')
})

const carousel = document.querySelector('.carousel')
const btns = document.querySelectorAll('.btn')
const imgList = ["carousel_1", "carousel_2","carousel_3"]

btns.forEach((button)=>{
    button.addEventListener('click', function(event){
        console.log('clicked')
    })
})
