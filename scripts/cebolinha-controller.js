const imgCebolinha = document.querySelector('.img-cebolinha').querySelector('img');
const textBalloon = document.querySelector('.text-balloon');
const text1 = 'Meu nome completo é Cebolácio Júnior Menezes da Silva!';
const text2 = 'Sou o menino mais inteligente da <b><i>lua</b></i> e do mundo!';
const text3 = 'Eu tenho um <b><i>cacholinho</b></i> chamado Floquinho!';
const text4 = 'Um dia eu vou conseguir <b><i>delotar</b></i> a dentuça da Mônica!';
const allTexts = [text1, text2, text3, text4];

let nextText = 1;

imgCebolinha.addEventListener('click', () => {
    textBalloon.innerHTML = allTexts[nextText];
    imgCebolinha.src = `./images/cebolinha-apresentacao${nextText+1}.png`;
    console.log(imgCebolinha.scr);
    nextText += 1;
    if(nextText === allTexts.length) {
        nextText = 0;
    }
});