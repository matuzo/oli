const btn = document.querySelector('button');
const bar = document.querySelector('.toast-bar');
const template = document.querySelector('#template');

btn.addEventListener('click', e => {
  const toast = template.content.cloneNode(true);
  console.log(toast)
  bar.append(toast)

  setTimeout(() => {
    bar.remove()
  }, 3000);
})