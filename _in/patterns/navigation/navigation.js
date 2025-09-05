document.body.addEventListener('click', e => {
  if(e.target.matches('button')) {
    if(e.targe.hasAttribute('aria-expanded')) {
      const value = e.targe.getAttribute('aria-expanded') !== "false"
      e.targe.setAttribute('aria-expanded', !value)
    }
  }
});