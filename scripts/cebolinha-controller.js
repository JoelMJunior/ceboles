const imgCebolinha = document.querySelector('.img-cebolinha').querySelector('img');
const imgBalloon = document.querySelector('.balloon').querySelector('img');
const textBalloon = document.querySelector('.text-balloon');
const text1 = 'Meu nome completo é Cebolácio Júnior Menezes da Silva!';
const text2 = 'Sou o menino mais inteligente da <b><i>lua</b></i> e do mundo!';
const text3 = 'Eu tenho um <b><i>cacholinho</b></i> chamado Floquinho!';
const text4 = 'Um dia eu vou conseguir <b><i>delotar</b></i> a dentuça da Mônica!';
const allTexts = [text1, text2, text3, text4];

let nextText = 1;

imgCebolinha.addEventListener('click', () => {
    imgCebolinha.style.opacity = '0';
    imgBalloon.style.opacity = '0';
    textBalloon.style.opacity = '0';
    
    setTimeout(() => {
        textBalloon.innerHTML = allTexts[nextText];
        imgCebolinha.src = `./images/cebolinha-apresentacao${nextText+1}.png`;
        posicionaTexto(nextText);
        imgBalloon.src = `./images/balao-normal${nextText+1}.png`;
        console.log(imgCebolinha.scr);
        nextText += 1;
        if(nextText === allTexts.length) {
            nextText = 0;
        }
        imgCebolinha.style.opacity = '1';
        imgBalloon.style.opacity = '1';
        textBalloon.style.opacity = '1';
    }, 255);
});

function posicionaTexto(ntext) {
    if(screen.width > 1024) {
        if(ntext === 0) {
            textBalloon.style.top = '48px';
            textBalloon.style.marginLeft = '48px';
        } else if(ntext === 1) {
            textBalloon.style.top = '48px';
            textBalloon.style.marginLeft = '60px';
        } else if(ntext === 2) {
            textBalloon.style.top = '93px';
            textBalloon.style.marginLeft = '0px';
        } else if(ntext === 3) {
            textBalloon.style.top = '62px';
            textBalloon.style.marginLeft = '50px';
        }
    } else if(screen.width <= 1024 && screen.width > 600) {
        if(ntext === 0) {
            textBalloon.style.top = '34px';
            textBalloon.style.marginLeft = '39px';
            textBalloon.style.fontSize = '0.95em';
            imgBalloon.style.width = '220px';
        } else if(ntext === 1) {
            textBalloon.style.top = '39px';
            textBalloon.style.marginLeft = '50px';
        } else if(ntext === 2) {
            textBalloon.style.top = '68px';
            textBalloon.style.marginLeft = '14px';
            textBalloon.style.marginRight = '41px';
        } else if(ntext === 3) {
            textBalloon.style.top = '55px';
            textBalloon.style.marginLeft = '44px';
            textBalloon.style.marginRight = '24px';
            textBalloon.style.fontSize = '0.9em';
            imgBalloon.style.width = '240px';
        }
    } else if(screen.width <= 600) {
        if(ntext === 0) {
            imgBalloon.style.marginLeft = '0px';
            textBalloon.style.top = '31px';
            textBalloon.style.marginLeft = '31px';
            textBalloon.style.marginRight = '19px';
        } else if(ntext === 1) {
            imgBalloon.style.marginLeft = '47px';
            textBalloon.style.top = '37px';
            textBalloon.style.marginLeft = '89px';
        } else if(ntext === 2) {
            imgBalloon.style.width = '170px';
            imgBalloon.style.marginLeft = '65px';
            textBalloon.style.top = '41px';
            textBalloon.style.marginLeft = '73px';
            textBalloon.style.marginRight = '29px';
        } else if(ntext === 3) {
            imgBalloon.style.width = '200px';
            imgBalloon.style.marginLeft = '34px';
            textBalloon.style.top = '37px';
            textBalloon.style.marginLeft = '79px';
            textBalloon.style.marginRight = '25px';
        }  
    }
}