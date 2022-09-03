const verifyText = document.querySelector('#text-original');


verifyText.addEventListener('input', () => {
    if(verifyText.value === "") {
        console.log('sem texto');
    } else {
        console.log('com texto');
    }
});