
var istatus = document.querySelector('h5');
var btn = document.querySelector('#friend'); 

const originalBg = btn.style.backgroundColor;
const originalColor = btn.style.color;

let flag = 0;

btn.addEventListener('click', function() {
    if (flag === 0) {
        istatus.textContent = 'Friends';
        istatus.style.color = 'green';
        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
        btn.textContent = 'Unfriend';
        flag = 1;
    } else {
        istatus.textContent = 'Stranger';
        istatus.style.color = 'red';
        btn.style.backgroundColor = originalBg;
        btn.style.color = originalColor;
        btn.textContent = 'Add Friend';
        flag = 0;
    }
});