const form = document.querySelector("form");
const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const list = document.querySelector('[role="region"]')

let emptyInputs = inputs

let errors = 0;

form.addEventListener("submit", (e) => {
  console.log('submit')
  emptyInputs = Array.from(inputs).filter(i => i.value.length === 0)
  console.log(emptyInputs)

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (input.value.length) {
      input.removeAttribute('aria-invalid')
    } else {
      input.setAttribute('aria-invalid', 'true')
    }
  }

  if (emptyInputs.length) {
    e.preventDefault();

    if (emptyInputs.length > 1) {
      list.classList.remove('hidden')
      list.focus()
    } else {
      list.classList.add('hidden')
      emptyInputs[0].focus()
    }
  } else {
      list.classList.add('hidden')
  }

  // errors = 0;
  
	// for (let i = 0; i < inputs.length; i++) {
	// 	const input = inputs[i];
	// 	if (!input.value.length) {
	// 		errors++;
	// 	}
	// }

  // if (errors) {

  //   inputs[0].setAttribute('aria-invalid', 'true')
    

  // }
});
