let currentPage = 'page1'
const resultsWrapper = document.querySelector('[tabindex="-1"]')
const results = document.querySelector('.page')

document.body.addEventListener('click', e => {
  if(e.target.matches('.pagination a')) {
    e.preventDefault()
    
    const link = e.target
    const page = link.getAttribute('href').replace('#', '')
    results.classList.replace(currentPage, `page${page}`)
    currentPage = `page${page}`
    // resultsWrapper.focus()
  }
})