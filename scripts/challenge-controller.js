const loloInpt = document.querySelector('#lolo');
const macalaoaInpt = document.querySelector('#macalao');
const lindo1Inpt = document.querySelector('#lindo-1');
const lindo2Inpt = document.querySelector('#lindo-2');
const bula1Inpt = document.querySelector('#bula-1');
const bula2Inpt = document.querySelector('#bula-2');
const calo1Inpt = document.querySelector('#calo-1');
const calo2Inpt = document.querySelector('#calo-2');
const calo3Inpt = document.querySelector('#calo-3');
const objArray = [loloInpt, macalaoaInpt, lindo1Inpt, lindo2Inpt, bula1Inpt, bula2Inpt, calo1Inpt, calo2Inpt, calo3Inpt];
const answerArray = ['rolo', 'macarrão', 'lindo', 'rindo', 'bula', 'burra', 'calo', 'carro', 'caro'];

for(let obj of objArray) {
    obj.addEventListener('change', () => {
        verifyChallengeAnswer(obj.value, objArray.indexOf(obj), obj);
    });
};

function verifyChallengeAnswer (guess, answer, obj) {
    answer = answerArray[answer];
    guess = guess.toLowerCase();
    
    if (guess === answer) {
        obj.style.backgroundColor = '#31D394';
    } else {
        obj.style.backgroundColor = '#b3381d';
    }
}