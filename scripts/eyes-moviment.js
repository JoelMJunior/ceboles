const blackEyes = document.querySelector("#eyes-black");
let widthWindow = window.innerWidth;


moviment();

function moviment() {
    widthWindow = window.innerWidth;

    if(widthWindow > 860) {
        document.onmousemove = function(e) {
            var x = e.clientX * 100 / window.innerWidth + "%";
            var y = e.clientY * 100 / window.innerHeight + "%";
            
            blackEyes.style.left = x; 
            blackEyes.style.top = y;  
            blackEyes.style.transform = `translate(-${x}, -${y})`;
        }
    } else {
        document.onmousemove = function() {

        }
    }
};

window.onresize = moviment;