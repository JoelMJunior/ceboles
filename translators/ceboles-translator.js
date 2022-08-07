const btn_enviarTexto = document.querySelector("#btn-send-text");
const textoEnviado = document.querySelector("#text-original");
const textoTraduzido = document.querySelector("#text-translated");
let novoTexto = [];

btn_enviarTexto.addEventListener('click', () => {
    novoTexto = [];
    separaPalvras(textoEnviado.value);
});

function separaPalvras(palavras) {
    const palavrasSeparadas = palavras.split(" ");
    
    for (el of palavrasSeparadas) {
        novoTexto.push(trocaLetras(el));
    }
    textoTraduzido.value = novoTexto.join(" ");
}

function trocaLetras(palavra) {
    let plvr;
    let novaPalavra = palavra.replaceAll('rr', 'l');
    
    if (novaPalavra.includes('R') || novaPalavra.includes('r')) {
        for(letra of novaPalavra) {
            if (novaPalavra.includes(',') || novaPalavra.includes('.') || novaPalavra.includes(';')  || 
            novaPalavra.includes('?') || novaPalavra.includes('!')) {
                if((letra === 'R' && novaPalavra.indexOf('R') !== (novaPalavra.length - 2)) ||
                (letra === 'r' && novaPalavra.indexOf('r') !== (novaPalavra.length - 2))) {
                    plvr = novaPalavra.replace('R', 'L').replace('r', 'l');
                    novaPalavra = plvr;
                }
            } else if((letra === 'R' && novaPalavra.indexOf('R') !== (novaPalavra.length - 1)) ||
            (letra === 'r' && novaPalavra.indexOf('r') !== (novaPalavra.length - 1))) {
                plvr = novaPalavra.replace('R', 'L').replace('r', 'l');
                novaPalavra = plvr;
            }
        }
    } 

    return novaPalavra;
}
