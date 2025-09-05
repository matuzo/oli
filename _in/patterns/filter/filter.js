document.addEventListener('alpine:init', () => {
	Alpine.data('collection', () => ({
    artists: [],
		decades: [],
    filters: {
      year: '',
      artist: '',
    },
    records: [],
		itemsPerPage: 5,
		currentPage: 0,
    numOfPages() {
      return Math.ceil(this.filteredRecords.length / this.itemsPerPage)
    },
    page() {
      return this.filteredRecords.slice(this.currentPage * this.itemsPerPage, (this.currentPage + 1) * this.itemsPerPage)
    },
    async getRecords() {
      this.records = await (await fetch('/assets/json/patterns/all_records.data.json')).json();
			this.artists = [...new Set(this.records.map(record => record.artist))].sort();
		  this.decades = [...new Set(this.records.map(record => record.year.toString().slice(0, -1)))].sort();
      document.documentElement.classList.add('alpine');
    },
    get filteredRecords() {
      const filtered = this.records.filter((item) => {
        for (var key in this.filters) {
          if (this.filters[key] === '') {
            continue
          }

          if(!String(item[key]).includes(this.filters[key])) {
            return false
          }
        }

        return true
      });

      return filtered
    },
    message() {
		  return `${this.filteredRecords.length} records`;
	  },
    init() {
      this.getRecords();
      this.$watch('filters', filter => this.currentPage = 0);
	   }
	}))
})