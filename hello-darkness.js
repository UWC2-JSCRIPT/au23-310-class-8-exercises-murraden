
let rgb = 255;

let darkeness = setInterval(() => {
    if (rgb > 0) {
        rgb--;
        document.body.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
    } else {
        clearInterval(darkeness);
    }
    }, 50
);
