document.addEventListener("DOMContentLoaded", (event) => {
  document.body.addEventListener('click', e => {
  if(e.target.matches('button')) {
    const button = e.target
    if(button.hasAttribute('aria-expanded')) {
      const value = button.getAttribute('aria-expanded') !== "false"
      button.setAttribute('aria-expanded', !value)
    }

    if(button.hasAttribute('aria-pressed')) {
      const value = button.getAttribute('aria-pressed') !== "false"
      button.setAttribute('aria-pressed', !value)
    }
  }
})
})


// accordion.addEventListener('click', e => {
//   const button = e.target.closest('[aria-expanded]')
//   const isOpen = button.getAttribute('aria-expanded') === "false"

//   if (button) {
//     button.setAttribute('aria-expanded', isOpen) 
//   }p
// })




















// login.querySelector('.show-hide').addEventListener('click', e => {
//   const button = e.target
  
//   if(button.hasAttribute('aria-expanded')) {
//     const value = button.getAttribute('aria-expanded') === "false"
//     button.setAttribute('aria-expanded', !value)
//   }
// })