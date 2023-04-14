const btn_traduzir = document.querySelector("#btn-send-text");
const textoEnviado = document.querySelector("#text-original");
const textoTraduzido = document.querySelector("#text-translated");
const linguagens = document.getElementsByClassName('language');
const symbolsString = ',.;?!)}]"\'';
let novoTexto; let novaPalavra;
let novoTextoWhatsApp; let novaPalavraWhats;
let novoTextoHtml; let novaPalavraHtml;
let indLinguagem = 0;


btn_traduzir.addEventListener('click', () => {
    novoTexto = [];
    novoTextoWhatsApp = [];
    novoTextoHtml = [];
    separaPalavras(textoEnviado.value);
});

function separaPalavras(palavras) {
    const palavrasSeparadas = palavras.split(" ");
    
    for(let el of palavrasSeparadas) {
        const words = trocaLetras(el);
        novoTexto.push(words.newWord);
        novoTextoWhatsApp.push(words.newWordWhats);
        novoTextoHtml.push(words.newWordHTML);
    }
    qualLinguagem();
    return { novoTextoHtml };
}

function trocaLetras(palavra) {
    let newWord = palavra;
    let newWordWhats = palavra;
    let newWordHTML = palavra;

    if(newWord.includes('RR') || newWord.includes('rr')) {
        newWord = newWord.replace('RR', 'L').replaceAll('rr', 'l');
        newWordWhats = `*_${newWord}_*`;
        newWordHTML = `<b><i>${newWord}</i></b>`;
    }

    if(newWord.includes('R') || newWord.includes('r')) {
        if(newWord.includes(',') || 
        newWord.includes('.') || 
        newWord.includes(';') || 
        newWord.includes('?') || 
        newWord.includes('!') ||
        newWord.includes(')') ||
        newWord.includes('}') ||
        newWord.includes(']') ||
        newWord.includes('"') ||
        newWord.includes("'")) {
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
                    newWordHTML = `<b><i>${half1}</i></b>*${half2}`;
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
    return { newWord, newWordWhats, newWordHTML }; 
}

function qualLinguagem() {
    if(indLinguagem === 0) {
        textoTraduzido.value = novoTexto.join(" ");
    } else if(indLinguagem === 1) {
        textoTraduzido.value = novoTextoWhatsApp.join(" ");
    } else if(indLinguagem === 2) {
        textoTraduzido.value = novoTextoHtml.join(" ");
    }
}

for(let i = 0; i < linguagens.length; i++) {
    linguagens[i].addEventListener('click', () => {
        buttonLanguage(i);
    });
}

function buttonLanguage(value) {
    for(let y = 0; y < linguagens.length; y++) {
        linguagens[y].parentNode.classList.remove('active');
    }
    linguagens[value].parentNode.classList.add('active');
    indLinguagem = value;
    if(textoEnviado.value !== "") {
        qualLinguagem();
    }
}
