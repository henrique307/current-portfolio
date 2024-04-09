import { generateRandomNumber } from "./utils/generateRandomNumber.js"

export function starsHandler() {

    var currentX = '';
    var currentY = '';
    var header = document.querySelector("header .parallax");
    var H1title = document.querySelector("h1")
    var movementConstant = .002;

    allTheStars(header, 150)

    var layers = document.querySelectorAll(".parallax div.star-layer");
    H1title.setAttribute("style", `z-index: ${layers.length + 1}`)


    $(document.querySelector("header")).mousemove(function (e) {
        if (currentX == '') currentX = e.pageX;
        var xdiff = e.pageX - currentX;
        currentX = e.pageX;
        if (currentY == '') currentY = e.pageY;
        var ydiff = e.pageY - currentY;
        currentY = e.pageY;

        $('.parallax div.star-layer').each(function (i, el) {
            var movement = (i + 1) * (xdiff * movementConstant);
            var movementy = (i + 1) * (ydiff * movementConstant);
            var newX = $(el).position().left - movement;
            var newY = $(el).position().top - movementy;

            $(el).css({
                "transform": `translate(${newX}px,${newY}px)`
            });
        });
    });

    $('.parallax div.star-layer').each(function (i, el) {
        window.addEventListener("devicemotion", (e) => {
            const limiteMovimento = 4

            if (
                !(-5 < e.rotationRate.beta && e.rotationRate.beta < 5) &&
                !(-5 < e.rotationRate.alpha && e.rotationRate.alpha < 5)
            ) {

                $(el).css({
                    "transform": `translate(${e.rotationRate.beta / limiteMovimento}px,${e.rotationRate.alpha / limiteMovimento}px)`
                });
            }
        })
    })
}

export function allTheStars(Element, number = 100) {
    const randomNumber = generateRandomNumber(0, 100) + number
    const layers = Math.floor(randomNumber / 10)
    const getStarStyles = () => {
        const tamanho = `${generateRandomNumber(1, 3)}px`
        return `
            top: ${generateRandomNumber(0, 100)}%;
            left: ${generateRandomNumber(0, 100)}%;
            height: ${tamanho};
            width: ${tamanho};
            opacity: ${generateRandomNumber(.5, 1, false)};
            animation: pisca ${generateRandomNumber(1, 85)}s infinite;
        `
    }

    const getLayerStyles = (i) => {
        return `
            z-index: ${i + 1};
            scale: 1.0000${i};
        `
    }

    const elements = [];

    new Array(layers).fill(null).map((_, i) => {
        elements.push(`
            <div class="star-layer" style="${getLayerStyles(i)}">
                ${new Array(Math.floor(randomNumber / layers)).fill(null).map(start => {
            return `<div class="star" style="${getStarStyles()}"></div>`
        })}
            </div>
        `)
    })

    $(document).ready(function () {
        if ($(window).width() < 500) {
            $(".parallax div.star-layer").each((i, el) => {
                $(el).css({
                    "scale": `1.${i}`
                })
            })
        }
    })

    Element.innerHTML += elements.toString().replace(/\,/g, "")
}