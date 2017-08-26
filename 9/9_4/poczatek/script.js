const image = document.querySelector('img');

fetch('callback.png').then(response => {
    console.log("Obrazek pobrany - status:" + response.status);
    return response.blob();
}).then(blob => {
    let imageUrl = URL.createObjectURL(blob);
    image.src = imageUrl;
})