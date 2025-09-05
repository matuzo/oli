let next = 5;
const items = document.querySelectorAll(".page li");
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
	if (next < items.length) {
		for (let i = next; i < next + 5; i++) {
			const item = items[i];
			item.style.display = "list-item";
      setTimeout(() => {
        console.log(items[next])
      }, 0);
		}
    items[next].querySelector('a').focus();
		next += 5;

		if (next >= items.length) {
			button.remove();
		}
	}
});
