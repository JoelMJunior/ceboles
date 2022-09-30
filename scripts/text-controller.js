const btnDeleteText = document.querySelector('#btn-delete-text');
const btnCopyText = document.querySelector('#btn-copy-text');
const sendedText = document.querySelector('#text-original');
const translatedText = document.querySelector('#text-translated');
const languages = document.getElementsByClassName('language');
const btnTranslate = document.querySelector("#btn-send-text");
let indexBtnLang;


btnDeleteText.addEventListener('click', () => {
    sendedText.value = "";
    translatedText.value = "";
    btnDeleteText.style.display = 'none';
    btnCopyText.style.display = 'none';
});

btnCopyText.addEventListener('click', () => {
    navigator.clipboard.writeText(translatedText.value);
});

sendedText.addEventListener('input', () => {
    verifyText();
    hasScroll();
});

btnTranslate.addEventListener('click', () => {
    verifyText();
    hasScroll();
}); 

function hasScroll() {
    const elem1 = document.getElementById('text-original');
    if(elem1.clientHeight < elem1.scrollHeight) {
        btnDeleteText.style.right = '18px';
    } else {
        btnDeleteText.style.right = '6px';
    }
    
    const elem2 = document.getElementById('text-translated');
    if(elem2.clientHeight < elem2.scrollHeight) {
        btnCopyText.style.right = '18px';
    } else {
        btnCopyText.style.right = '6px';
    }
}

for(let i = 0; i < languages.length; i++) {
    languages[i].addEventListener('click', () => {
        buttonLanguage(i);
    });
}

function buttonLanguage(value) {
    for(let y = 0; y < languages.length; y++) {
        languages[y].parentNode.classList.remove('active');
    }
    languages[value].parentNode.classList.add('active');
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