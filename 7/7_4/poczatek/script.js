window.onload = function() {
    let paragraphs = document.querySelectorAll("p");
    console.log(paragraphs);

    for (let p of paragraphs) {
        p.className = "blue";
    }
}