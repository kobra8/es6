const image = document.querySelector('img');

fetch('callback.png').then(function(response){
	return response.blob();
}).then(function(blob){
	let imageURL = URL.createObjectURL(blob);
	image.src = imageURL;
});