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
