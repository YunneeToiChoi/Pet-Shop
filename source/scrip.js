
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

