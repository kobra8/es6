class Article {
    constructor(
        id, title
    ) {
        this.id = id;
        this.title = title;
    }
}

const art = new Article(9898, 'Filtry w CSS3');
console.log(art.id);
console.log(art.title);