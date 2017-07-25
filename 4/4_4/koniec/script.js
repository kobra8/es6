let giftCard = {
	sku: 'sk001',
	name: 'Karta podarunkowa',
	price: 50,
	class: 'gift'
}

function createMarkup(product) {
	return `
	<div class="product ${product.class}">
		<h2>${product.name}</h2>
		<span class="sku">${product.sku}</span>
		<span class="price">${product.price}</span>
	</div>
	`
}

window.onload = function() {
	var content = document.querySelector(".content");
	content.innerHTML = createMarkup(giftCard);
}


