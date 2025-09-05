const accordion = document.querySelector('#accordion2')
const headings = accordion.querySelectorAll('h3')

for (let i = 0; i < headings.length; i++) { 
  const button = document.createElement('button') 
  const heading = headings[i]
  const content = heading.nextElementSibling
  const id = `accordion2_${i}`; 
  
  button.setAttribute('aria-expanded', false) 
  button.setAttribute('aria-controls', id)
  button.textContent = heading.textContent
  heading.innerHTML = ''
  heading.append(button)
  
  content.setAttribute('id', id)  
}