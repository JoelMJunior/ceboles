const verifyText = document.querySelector('#text-original');
const btnDeleteText = document.querySelector('#btn-delete-text');
const sendedText = document.querySelector("#text-original");
const translatedText = document.querySelector("#text-translated");


btnDeleteText.addEventListener('click', () => {
    sendedText.value = "";
    translatedText.value = "";
    btnDeleteText.style.display = 'none';
});

verifyText.addEventListener('input', () => {
    if(verifyText.value === "") {
        btnDeleteText.style.display = 'none';
    } else {
        btnDeleteText.style.display = 'flex';
    }
});