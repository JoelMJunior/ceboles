import { indLanguage } from "../text-controller.js";

const textoEnviado = document.querySelector("#text-original");
const textoTraduzido = document.querySelector("#text-translated");
const symbolsString = ',.;?!)}]"\'';
let novoTexto;
let novoTextoWhatsApp;
let novoTextoHtml;


function translateText(text) {
    const texts = separaPalavras(text);
    novoTexto = texts.newText;
    novoTextoWhatsApp = texts.newTextWhatsApp;
    novoTextoHtml = texts.newTextHTML;
    whichLanguage();
}

function separaPalavras(palavras) {
    let palavrasSeparadas = palavras.replaceAll('\n', '^^^~~~').split('^^^').join(' ').split(' ');
    let newText = [], newTextWhatsApp = [], newTextHTML = [];
    
    for(let el of palavrasSeparadas) {
        const words = trocaLetras(el);

        newText.push(words.newWord);
        newTextWhatsApp.push(words.newWordWhats);
        newTextHTML.push(words.newWordHTML);
    }
    return { newText, newTextWhatsApp, newTextHTML};
}

function trocaLetras(palavra) {
    let newline = '\n';
    let hasNewLine = false;
    if(palavra.includes('~~~')) {
        hasNewLine = true;
        palavra = palavra.replace('~~~', '');
    }

    let newWord = palavra;
    let newWordWhats = palavra;
    let newWordHTML = palavra;
    
    if(newWord.includes('RR') || newWord.includes('rr')) {
        let hasSymbol = false;
        for(let simb of symbolsString) {
            if(newWord.includes(simb)) {
                hasSymbol = true;
                break;
            }
        }

        if(hasSymbol === true) {
            newWord = newWord.replace('RR', 'L').replaceAll('rr', 'l');
            let auxIndex = newWord.length;
            for (let i = newWord.length - 1; i >= 0; i--) {
                const lastChar = newWord.charAt(i);
                if (symbolsString.includes(lastChar)) {
                    auxIndex = i;
                } else {
                    break; // se não for um símbolo, sai do loop
                }
            }
            let half2 = newWord.slice(auxIndex);
            let half1 = newWord.slice(0, auxIndex);
            newWordWhats = `*_${half1}_*${half2}`;
            newWordHTML = `<b><i>${half1}</i></b>${half2}`;
        } else {
            newWord = newWord.replace('RR', 'L').replaceAll('rr', 'l');
            newWordWhats = `*_${newWord}_*`;
            newWordHTML = `<b><i>${newWord}</i></b>`;
        }
    }

    if(newWord.includes('R') || newWord.includes('r')) {
        let hasSymbol = false;
        for(let simb of symbolsString) {
            if(newWord.includes(simb)) {
                hasSymbol = true;
                break;
            }
        }
        if(hasSymbol === true) {
            for(let letter of newWord) {
                if(letter === 'R' && symbolsString.includes(newWord[newWord.indexOf(letter) + 1])) {
                    /* NÃO TROCA A LETRA */
                } else if(letter === 'R') {
                    let auxIndex;
                    for (let i = newWord.length - 1; i >= 0; i--) {
                        const lastChar = newWord.charAt(i);
                        if (symbolsString.includes(lastChar)) {
                            auxIndex = i;
                        } else {
                            break; // se não for um símbolo, sai do loop
                        }
                    }
                    newWord = newWord.replace('R', 'L');
                    let half2 = newWord.slice(auxIndex);
                    let half1 = newWord.slice(0, auxIndex);
                    newWordWhats = `*_${half1}_*${half2}`;
                    newWordHTML = `<b><i>${half1}</i></b>${half2}`;
                } else if(letter === 'r' && symbolsString.includes(newWord[newWord.indexOf(letter) + 1])) {
                    /* NÃO TROCA A LETRA */
                } else if(letter === 'r') {
                    let auxIndex;
                    for (let i = newWord.length - 1; i >= 0; i--) {
                        const lastChar = newWord.charAt(i);
                        if (symbolsString.includes(lastChar)) {
                            auxIndex = i;
                        } else {
                            break; // se não for um símbolo, sai do loop
                        }
                    }
                    newWord = newWord.replace('r', 'l');
                    let half2 = newWord.slice(auxIndex);
                    let half1 = newWord.slice(0, auxIndex);
                    newWordWhats = `*_${half1}_*${half2}`;
                    newWordHTML = `<b><i>${half1}</i></b>${half2}`;
                }
            }
        } else {
            for(let letter of newWord) {
                if(letter === 'R' && newWord.indexOf(letter) !== (newWord.length - 1)) {
                    newWord = newWord.replace('R', 'L');
                    newWordWhats = `*_${newWord}_*`;
                    newWordHTML = `<b><i>${newWord}</i></b>`;
                } else if(letter === 'r' && newWord.indexOf(letter) !== (newWord.length - 1)) {
                    newWord = newWord.replace('r', 'l');
                    newWordWhats = `*_${newWord}_*`;
                    newWordHTML = `<b><i>${newWord}</i></b>`;
                }
            }
        }
    }

    if(hasNewLine === true) {
        newWord = `${newline}${newWord}`;
        newWordWhats = `${newline}${newWordWhats}`;
        newWordHTML = `${newline}${newWordHTML}`;
    }

    return { newWord, newWordWhats, newWordHTML }; 
}

function whichLanguage() {
    if(textoEnviado.value != "") {
        if(indLanguage === 0) {
            textoTraduzido.value = novoTexto.join(" ");
        } else if(indLanguage === 1) {
            textoTraduzido.value = novoTextoWhatsApp.join(" ");
        } else if(indLanguage === 2) {
            textoTraduzido.value = novoTextoHtml.join(" ");
        }
    }
}

export { translateText, whichLanguage };
