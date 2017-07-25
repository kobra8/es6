class Article {
	constructor(id, title) {
		this.id = id;
		this.title = title;
	}
	constructor() {}
}

const art = new Article(987, 'Filtry w CSS3');
console.log(art.id);
console.log(art.title);