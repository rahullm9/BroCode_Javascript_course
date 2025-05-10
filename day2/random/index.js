let min = document.getElementById('min');
let max = document.getElementById('max');
let btn = document.getElementById('btn');
let result = document.getElementById('result');


btn.onclick = function(){
    let minValue = Number(min.value);
    let maxValue = Number(max.value);

    result.textContent = Math.floor(Math.random() * maxValue) + minValue;
}