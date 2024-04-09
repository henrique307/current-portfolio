import { generateRandomNumber } from "./utils/generateRandomNumber.js"


export function circlesHandler(qtd) {
    let circlesContainer = document.querySelector(".circles-container");
    let style = document.createElement('style')
    let animationNames = generateRandomStrings(qtd)
    let keyframes = "";

    style.setAttribute("type", "text/css");

    for(let i = 0; i < qtd; i++) {
        let startingFormat = generateRandomRadius();
        let startingPositionTop = generateRandomNumber(-20, 80)
        let startingPositionLeft = generateRandomNumber(-20, 80)

        keyframes += `
            @keyframes ${animationNames[i]} {
                0% {
                    top: ${startingPositionTop}%;
                    left: ${startingPositionLeft}%;
                    border-radius: ${startingFormat};
                }
                25% {
                    border-radius: ${generateRandomRadius()};
                    top: ${generateRandomNumber(-20, 80)}%;
                    left: ${generateRandomNumber(-20, 80)}%;
                }
                50% {
                    border-radius: ${generateRandomRadius()};
                    top: ${generateRandomNumber(-20, 80)}%;
                    left: ${generateRandomNumber(-20, 80)}%;
                }
                75% {
                    top: ${generateRandomNumber(-20, 80)}%;
                    left: ${generateRandomNumber(-20, 80)}%;
                    border-radius: ${generateRandomRadius()};
                }
                100% {
                    top: ${startingPositionTop}%;
                    left: ${startingPositionLeft}%;
                    border-radius: ${startingFormat};
                }
            }

        `
    }

    style.innerHTML = keyframes
    document.getElementsByTagName("head")[0].appendChild(style);

    function circlesStyle() {
        const thisCircleStyles = [];
        const circleSize = generateRandomNumber(200, 500)

        animationNames.forEach((name) => {
            thisCircleStyles.push(
                `
                    width: ${circleSize}px;
                    height: ${circleSize}px;
                    background: radial-gradient(${generateRandomColor()}. ${generateRandomColor()});
                    animation: ${name} ease-in-out infinite ${generateRandomNumber(15,30)}s;
                `
            )
        })

        return thisCircleStyles;
    }

    circlesContainer.innerHTML = `
        ${new Array(qtd).fill(null).map((_, i) => {
        return `<div class="circle" style="${circlesStyle()[i]}"></div>`
    })}
    `.replace(/,/g, "").replace(/\./g, ",")
}

function generateRandomRadius() {

    const values = []

    new Array(8).fill(null).map((_, i) => {
        i !== 4 ? values.push(`${generateRandomNumber(0, 100)}% `) : values.push(`/ ${generateRandomNumber(0, 100)}% `);
    })

    return values.join().replace(/,/g, "");
}

function generateRandomStrings(numero) {
    let letras = 'abcdefghijklmnopqrstuvwxyz';
    let resultado = [];

    for (let i = 0; i < numero; i++) {
        let nome = ""
        for (let i = 0; i < 4; i++) {
            let indice = Math.floor(Math.random() * letras.length);
            nome += letras.charAt(indice);
        }
        resultado.push(nome)
    }

    return resultado;
}

function generateRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}