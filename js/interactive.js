function generator() {
    let number = Math.round(Math.random() * 10000);

    let numberString = number + '';
    if (numberString.length < 4) {

        return generator();
    } else {
        return number;
    }
}

document.getElementById('generator').addEventListener('click', function () {

    let number = generator();
    document.getElementById('numberShow').value = number;

})
document.getElementById('calculator').addEventListener('click', function (event) {
    const buttonPresse = event.target.innerText;
    let displayNumber = document.getElementById('display-number');
    console.log(displayNumber);
    if (isNaN(buttonPresse)) {
        if (buttonPresse === 'C') {
            displayNumber.value = '';
        }
        if (buttonPresse === '<') {
            displayNumber.value = displayNumber.value.substring(0, displayNumber.value.length - 1);

        }
        console.log(buttonPresse);
    } else {
        displayNumber.value += buttonPresse;

    }
})