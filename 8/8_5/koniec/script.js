class Article {
	constructor(id, title) {
		this.id = id;
		this.title = title;
	}
	getId() {
		return this.id;
	}
	static compareId(a, b) {
		const id1 = a.id;
		const id2 = b.id;
		if (id1 > id2) {
			return true;
		} else {
			return false;
		}
	}
}

class BlogArticle extends Article {
	constructor(id, title, category) {
		super(id, title);
		this.category = category;
	}
}

const blog1 = new BlogArticle(23, 'Tworzenie aplikacji z Angular', 'Frameworki');
console.log(blog1);
console.log(blog1.getId());


