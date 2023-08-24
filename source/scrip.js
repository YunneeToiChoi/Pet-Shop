
const forcushistory= document.querySelector('.header-desktop__search-input');
const thisforcushistory = document.querySelector('.header-history')
forcushistory.addEventListener('click',() =>{
    thisforcushistory.classList.add('open')
})
const removehistory= document.querySelectorAll('.header-history__item-close');
for ( var i =0 ; i < removehistory.length;i++ ){
    removehistory[i].addEventListener ('click',  ()=>{
        thisforcushistory.classList.remove('open')
    })
}
 // menu mobile
 const menu = document.querySelector('.mb-header-menu__bar')
 const navMenuMobile = document.querySelector('.mb-header-menu__container')
 menu.addEventListener('click', () => {
    navMenuMobile.classList.add('open')

 })
 const navMenuBack = document.querySelector('.mb-header-menu__back')

 navMenuBack.addEventListener('click',()=>{
    navMenuMobile.classList.remove('open')

 })

