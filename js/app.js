const showMenu = document.querySelector('.showMenu');
const close  =  document.querySelector('.close');
const bars = document.querySelector('.bars');

bars.addEventListener('click', () =>{
    showMenu.classList.add('show')
})
close.addEventListener('click', () =>{
    showMenu.classList.remove('show')
})

