let rgb = 0;

let theLight = function() {
    rgb++;
    if (rgb <= 255) { 
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
        requestAnimationFrame(theLight)
    } else {
        cancelAnimationFrame(theLight);
    } 
}
requestAnimationFrame(theLight)