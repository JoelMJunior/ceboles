const btn_traduzir = document.querySelector("#btn-send-text");
const textoEnviado = document.querySelector("#text-original");
const textoTraduzido = document.querySelector("#text-translated");
const linguagens = document.getElementsByClassName('language');
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
    
    for(el of palavrasSeparadas) {
        trocaLetras(el);
        novoTexto.push(novaPalavra);
        novoTextoWhatsApp.push(novaPalavraWhats);
        novoTextoHtml.push(novaPalavraHtml);
    }
    qualLinguagem();
}

function trocaLetras(palavra) {
    novaPalavra = palavra;
    novaPalavraWhats = palavra;
    novaPalavraHtml = palavra;

    if(novaPalavra.includes('RR') || novaPalavra.includes('rr')) {
        novaPalavra = novaPalavra.replace('RR', 'L').replaceAll('rr', 'l');
        novaPalavraWhats = `*_${novaPalavra}_*`;
        novaPalavraHtml = `<b><i>${novaPalavra}</i></b>`;
    }

    if(novaPalavra.includes('R') || novaPalavra.includes('r')) {
        if(novaPalavra.includes(',') || 
        novaPalavra.includes('.') || 
        novaPalavra.includes(';') || 
        novaPalavra.includes('?') || 
        novaPalavra.includes('!') ||
        novaPalavra.includes(')') ||
        novaPalavra.includes('}') ||
        novaPalavra.includes(']') ||
        novaPalavra.includes('"') ||
        novaPalavra.includes("'")) {
            for(letra of novaPalavra) {
                if(letra === 'R' && (
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf(',') - 1)) || 
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('.') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf(';') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('?') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('!') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf(')') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('}') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf(']') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('"') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf("'") - 1)))) {
                    /* NÃO TROCA A LETRA */
                } else if(letra === 'R') {
                    novaPalavra = novaPalavra.replace('R', 'L');
                    novaPalavraWhats = `*_${novaPalavra}_*`;
                    novaPalavraHtml = `<b><i>${novaPalavra}</i></b>`;
                } else if(letra === 'r' && (
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf(',') - 1)) || 
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('.') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf(';') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('?') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('!') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf(')') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('}') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf(']') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf('"') - 1)) ||
                (novaPalavra.indexOf(letra) === (novaPalavra.indexOf("'") - 1)))) {
                    /* NÃO TROCA A LETRA */
                } else if(letra === 'r') {
                    novaPalavra = novaPalavra.replace('r', 'l');
                    novaPalavraWhats = `*_${novaPalavra}_*`;
                    novaPalavraHtml = `<b><i>${novaPalavra}</i></b>`;
                }
            }
        } else {
            for(letra of novaPalavra) {
                if(letra === 'R' && novaPalavra.indexOf(letra) !== (novaPalavra.length - 1)) {
                    novaPalavra = novaPalavra.replace('R', 'L');
                    novaPalavraWhats = `*_${novaPalavra}_*`;
                    novaPalavraHtml = `<b><i>${novaPalavra}</i></b>`;
                } else if(letra === 'r' && novaPalavra.indexOf(letra) !== (novaPalavra.length - 1)) {
                    novaPalavra = novaPalavra.replace('r', 'l');
                    novaPalavraWhats = `*_${novaPalavra}_*`;
                    novaPalavraHtml = `<b><i>${novaPalavra}</i></b>`;
                }
            }
        }
    } 
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
