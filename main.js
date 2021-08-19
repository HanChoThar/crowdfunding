let btn = document.querySelector('.head_menu');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let headerMenu = document.querySelector('.header-menu');
let bookmark = document.querySelector('.bookmark');
let popup = document.querySelector('.popup');
let popClose = document.querySelector('.popup_close');

btn.addEventListener('click', function(){
  if(second.classList.contains('close')){
    first.classList.add('close');
    second.classList.remove('close');
    headerMenu.style.display = 'block';
    // change.style.display = 'block';

  } else if(first.classList.contains('close')){
    second.classList.add('close');
    first.classList.remove('close');
    headerMenu.style.display = 'none';
  }
});

bookmark.addEventListener('click', function(){
  popup.style.display = 'block';
});
popClose.addEventListener('click', function(){
  popup.style.display = 'none';
})