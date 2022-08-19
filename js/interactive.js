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