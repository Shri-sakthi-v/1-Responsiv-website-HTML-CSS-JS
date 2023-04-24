/*============menu show y hidden==========*/
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')
  
  //show
  toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
  })

  //hidden
  closeMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
  })

  /*===========REMOVE MENU==========*/
  const navLink = document.querySelectorAll('.nav__link')
  function linkAction(){
    navMenu.classList.remove('show')
  }
  navLink.forEach(n => n.addEventListener('click',linkAction))

  /*===========Scroll section Active link======*/

  const sections = document.querySelectorAll('section[id]')
  window.addEventListener('scroll',scrollActive)

  function scrollActive(){
    
  }
