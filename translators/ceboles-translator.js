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
    
    for (el of palavrasSeparadas) {
        novoTexto.push(trocaLetras(el));
    }
    textoTraduzido.value = novoTexto.join(" ");
}

function trocaLetras(palavra) {
    let plvr;
    let novaPalavra = palavra.replace('RR', 'L').replaceAll('rr', 'l');
    
    if (novaPalavra.includes('R') || novaPalavra.includes('r')) {
        for(letra of novaPalavra) {
            if (novaPalavra.includes(',') || 
            novaPalavra.includes('.') || 
            novaPalavra.includes(';') || 
            novaPalavra.includes('?') || 
            novaPalavra.includes('!') ||
            novaPalavra.includes(')') ||
            novaPalavra.includes('}') ||
            novaPalavra.includes(']') ||
            novaPalavra.includes('"') ||
            novaPalavra.includes("'")) {
                if(letra === 'R' && (
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf(',') - 1)) || 
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf('.') - 1)) ||
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf(';') - 1)) ||
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf('?') - 1)) ||
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf('!') - 1)) ||
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf(')') - 1)) ||
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf('}') - 1)) ||
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf(']') - 1)) ||
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf('"') - 1)) ||
                (novaPalavra.indexOf('R') === (novaPalavra.indexOf("'") - 1)))) {
                    /* NÃO TROCA A LETRA */
                } else if(letra === 'R') {
                    console.log('entrou R ponto');
                    plvr = novaPalavra.replace('R', 'L');
                    novaPalavra = plvr;
                } else if(letra === 'r' && (
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf(',') - 1)) || 
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf('.') - 1)) ||
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf(';') - 1)) ||
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf('?') - 1)) ||
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf('!') - 1)) ||
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf(')') - 1)) ||
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf('}') - 1)) ||
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf(']') - 1)) ||
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf('"') - 1)) ||
                (novaPalavra.indexOf('r') === (novaPalavra.indexOf("'") - 1)))) {
                    /* NÃO TROCA A LETRA */
                    console.log('entrou r index igual');
                } else if(letra === 'r') {
                    console.log('entrou r ponto');
                    console.log(novaPalavra.indexOf('r'));
                    plvr = novaPalavra.replace('r', 'l');
                    novaPalavra = plvr;
                }
            } else if(letra === 'R' && novaPalavra.indexOf('R') !== (novaPalavra.length - 1)) {
                plvr = novaPalavra.replace('R', 'L');
                novaPalavra = plvr;
            } else if(letra === 'r' && novaPalavra.indexOf('r') !== (novaPalavra.length - 1)) {
                plvr = novaPalavra.replace('r', 'l');
                novaPalavra = plvr;
            }
        }
    } 

    return novaPalavra;
}
