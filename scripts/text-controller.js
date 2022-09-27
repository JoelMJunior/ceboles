const btnDeleteText = document.querySelector('#btn-delete-text');
const btnCopyText = document.querySelector('#btn-copy-text');
const sendedText = document.querySelector('#text-original');
const translatedText = document.querySelector('#text-translated');
const languages = document.getElementsByClassName('language');
let indexBtnLang;


btnDeleteText.addEventListener('click', () => {
    sendedText.value = "";
    translatedText.value = "";
    btnDeleteText.style.display = 'none';
});

btnCopyText.addEventListener('click', () => {
    navigator.clipboard.writeText(translatedText.value);
});

sendedText.addEventListener('input', () => {
    if (sendedText.value === "") {
        btnDeleteText.style.display = 'none';
        btnCopyText.style.display = 'none';
    } else {
        btnDeleteText.style.display = 'flex';
        btnCopyText.style.display = 'flex';
    }
});

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