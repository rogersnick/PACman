const canvas = document.getElementById('pacman');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);

function loadImage(url)
{
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    })
}

function loadPacman() {
    return loadImage('/img/sprites.png')
    .then(image => {
        console.log(image);
        const canvas = document.getElementById('pacman');
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
    });
}