const table = document.querySelector("table");
const liveRegion = document.querySelector("[role='status']");
let toSort;
let direction = "ascending";

table.addEventListener("click", (e) => {
	const button = e.target.closest("thead button");

	if (button) {
		const cell = button.parentNode;
		const tbody = table.querySelector("tbody");
		const rows = tbody.querySelectorAll("tr");

		toSort = [];
		getRows(cell, rows);
		updateButton(cell);
		sortRows(rows);
		updateLiveRegion();
	}
});

const getRows = (cell, rows) => {
	const index = [...cell.parentNode.children].indexOf(cell);

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i];
		const cells = row.querySelectorAll("td");

		toSort.push([cells[index].innerText, row.cloneNode(true)]);
	}
};

const sortRows = (rows) => {
	toSort.sort(function (a, b) {
		const comp = a[0].localeCompare(b[0], "en", { numeric: true });
		return comp;
	});

	if (direction === "descending") {
		toSort.reverse();
	}

	for (let i = 0; i < rows.length; i++) {
		const row = rows[i];
		row.parentNode.replaceChild(toSort[i][1], row);
	}

	console.log(direction);
};

const updateButton = (cell) => {
	const sortedColumn = table.querySelector("[aria-sort]");
	if (sortedColumn && sortedColumn !== cell) {
		sortedColumn.removeAttribute("aria-sort");
	}

	direction =
		cell.getAttribute("aria-sort") === "ascending" ? "descending" : "ascending";
	cell.setAttribute("aria-sort", direction);
};

const updateLiveRegion = () => {
	liveRegion.textContent = `Sorted ${direction}`;

	setTimeout(() => {
		liveRegion.textContent = ``;
	}, 1000);
};
