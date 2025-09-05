const button = document.querySelector('.open')
button.addEventListener('click', e => {
  setTimeout(() => {

    if (button.getAttribute('aria-expanded') === "true") {
      document.querySelector('.close').focus();
    }

  }, 300);
})

const close = document.querySelector('.close')
close.addEventListener('click', e => {
  button.setAttribute('aria-expanded', 'false')
  button.focus()
})
