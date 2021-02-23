
function clix(val) {
    document.getElementById('screen').value=document.getElementById('screen').value+val;
    console.log(val)
}

function resetScreen() {
    document.getElementById('screen').value=" "
}

function eql() {
    let text=document.getElementById('screen').value;
    let result=eval(text);
    document.getElementById('screen').value=result;
    console.log(result)
}










// function perc() {
//     let calcPerc = document.getElementById('screen').value;
//     let result=eval(calcPerc / 100);
//     document.getElementById('screen').value=result;
//     console.log('dis aint workin')
//     console.log(calcPerc)
// }

// Percentage Calculator
  
// const myForm     = document.getElementById('my-form');

// myForm.oninput = () => {
//     myForm.result.value = percentageCalculator(myForm.amount.value, myForm.percent.value);
// }

// function percentageCalculator(amount, percent) {       
//     return ((percent * amount) / 100).toFixed(2)
// }
