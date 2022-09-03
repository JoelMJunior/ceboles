const btn_enviarTexto = document.querySelector("#btn-send-text");
const textoEnviado = document.querySelector("#text-original");
const textoTraduzido = document.querySelector("#text-translated");
let novoTexto = [];

btn_enviarTexto.addEventListener('click', () => {
    novoTexto = [];
    separaPalavras(textoEnviado.value);
});

function separaPalavras(palavras) {
    const palavrasSeparadas = palavras.split(" ");
    
    for(el of palavrasSeparadas) {
        novoTexto.push(trocaLetras(el));
    }
    textoTraduzido.value = novoTexto.join(" ");
}

function trocaLetras(palavra) {
    let plvr;
    let novaPalavra = palavra.replace('RR', 'L').replaceAll('rr', 'l');
    
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
                    plvr = novaPalavra.replace('R', 'L');
                    novaPalavra = plvr;
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
                    plvr = novaPalavra.replace('r', 'l');
                    novaPalavra = plvr;
                }
            }
        } else {
            for(letra of novaPalavra) {
                if(letra === 'R' && novaPalavra.indexOf(letra) !== (novaPalavra.length - 1)) {
                plvr = novaPalavra.replace('R', 'L');
                novaPalavra = plvr;
                } else if(letra === 'r' && novaPalavra.indexOf(letra) !== (novaPalavra.length - 1)) {
                plvr = novaPalavra.replace('r', 'l');
                novaPalavra = plvr;
                }
            }
        }
    } 

    return novaPalavra;
}