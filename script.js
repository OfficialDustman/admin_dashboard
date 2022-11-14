const navBar = document.querySelector('.fa-bars'),
      overlayEl = document.querySelector('.overlay'),
      closeBtn= document.querySelector('.fa-xmark'),
      navMenu = document.querySelector('nav');

navBar.onclick = function() {
    navMenu.classList.toggle('active')
    overlayEl.classList.toggle('dark')
}

closeBtn.onclick = function() {
    navMenu.classList.remove('active')
    overlayEl.classList.remove('dark')   
}

overlayEl.onclick = function() {
    navMenu.classList.remove('active')
    overlayEl.classList.remove('dark')   
}

window.onscroll = function() {
    navMenu.classList.remove('active')
    overlayEl.classList.remove('dark')
}


