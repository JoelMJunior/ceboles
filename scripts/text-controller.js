import { translateText, whichLanguage } from "./translators/ceboles-translator.js";

const languages = document.getElementsByClassName('language');
const btnMobNav = document.querySelector('.lang-mob-nav');
const languagesMob = document.getElementsByClassName('language-mob');
const btnDeleteText = document.querySelector('#btn-delete-text');
const btnCopyText = document.querySelector('#btn-copy-text');
const sendedText = document.querySelector('#text-original');
const translatedText = document.querySelector('#text-translated');
const textsOriExamp = document.getElementsByClassName('only-txt-ori-exp');
const textsTransExamp = document.getElementsByClassName('only-txt-trans-exp');
const btnTranslate = document.querySelector('#btn-send-text');
const btnTransExamp = document.getElementsByClassName('btn-trans-examp');
const btnsCopyExamp = document.getElementsByClassName('btn-copy-examp');
let indLanguage = 0;

btnMobNav.addEventListener('click', () => {
    document.querySelector('#lang-btn-mob').style.display = 'block';
});

btnDeleteText.addEventListener('click', () => {
    sendedText.value = "";
    translatedText.value = "";
    btnDeleteText.style.display = 'none';
    btnCopyText.style.display = 'none';
    sendedText.focus();
});

btnCopyText.addEventListener('click', () => {
    navigator.clipboard.writeText(translatedText.value);
});

sendedText.addEventListener('input', () => {
    verifyText();
    hasScroll();
});

btnTranslate.addEventListener('click', () => {
    translateText(sendedText.value);
    verifyText();
    hasScroll();
}); 

addEvent();
function addEvent() {
    for(let i = 0; i < languages.length; i++) {
        languages[i].addEventListener('click', () => {
            buttonLanguage(i);
            hasScroll();
        });
        languagesMob[i].addEventListener('click', () => {
            buttonLanguage(i);
            hasScroll();
            document.querySelector('#lang-btn-mob').style.display = 'none';
            const textButton = languagesMob[i].innerText;
            btnMobNav.innerText = textButton;
        });
    }
    for(let i=0; i < btnTransExamp.length; i++) {
        btnTransExamp[i].addEventListener('click', () => {
            if(textsOriExamp[i].style.display === 'block' || getComputedStyle(textsOriExamp[i]).display === 'block') {
                textsOriExamp[i].style.display = 'none';
                textsTransExamp[i].style.display = 'block';
                btnTransExamp[i].innerText = 'Destraduzir';
            }
            else if(textsOriExamp[i].style.display === 'none' && getComputedStyle(textsOriExamp[i]).display === 'none') {
                textsOriExamp[i].style.display = 'block';
                textsTransExamp[i].style.display = 'none';
                btnTransExamp[i].innerText = 'Traduzir';
            }
        });
    }
    for(let i=0; i < btnsCopyExamp.length; i++) {
        btnsCopyExamp[i].addEventListener('click', () => {
            if(textsOriExamp[i].style.display === 'block' || getComputedStyle(textsOriExamp[i]).display === 'block') {
                navigator.clipboard.writeText(textsOriExamp[i].querySelector('i').innerText);
            } else {
                navigator.clipboard.writeText(textsTransExamp[i].querySelector('i').innerText);
            }
        });
    }
}

function buttonLanguage(value) {
    for(let y = 0; y < languages.length; y++) {
        languages[y].parentNode.classList.remove('active');
    }
    languages[value].parentNode.classList.add('active');
    
    indLanguage = value;

    whichLanguage();
}

function hasScroll() {
    const elem1 = document.getElementById('text-original');
    if(elem1.clientHeight < elem1.scrollHeight) {
        btnDeleteText.style.right = '11px';
    } else {
        btnDeleteText.style.right = '6px';
    }
    
    const elem2 = document.getElementById('text-translated');
    if(elem2.clientHeight < elem2.scrollHeight) {
        btnCopyText.style.right = '11px';
    } else {
        btnCopyText.style.right = '6px';
    }
}

function verifyText() {
    if(sendedText.value === "") {
        btnDeleteText.style.display = 'none';
    } else {
        btnDeleteText.style.display = 'flex';
    }
    if(translatedText.value === "") {
        btnCopyText.style.display = 'none';
    } else {
        btnCopyText.style.display = 'flex';
    }
}

export { indLanguage };