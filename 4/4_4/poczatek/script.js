let giftCard = {
	sku: 'sk001',
	name: 'Karta podarunkowa',
	price: 50,
	class: 'gift'
}
function createMark(product) {
	// Znak backtick musi zaczynać się w lini razem z return
	return `  
	<div class="product ${product.class}">
	<h3>${product.name}</h3>
	<span>${product.sku}</span>
	<span>${product.price}</span>
	</div>
	`
}
window.onload = function() {
	var content = document.querySelector(".content");
	content.innerHTML = createMark(giftCard);	
}


