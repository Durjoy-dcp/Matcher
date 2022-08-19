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
    document.getElementById('actionLeft').innerText = 3;
    let number = generator();
    document.getElementById('numberShow').value = number;

})
document.getElementById('calculator').addEventListener('click', function (event) {
    const buttonPresse = event.target.innerText;
    let displayNumber = document.getElementById('display-number');
    // console.log(displayNumber);
    if (isNaN(buttonPresse)) {
        if (buttonPresse === 'C') {
            displayNumber.value = '';
        }
        if (buttonPresse === '<') {
            displayNumber.value = displayNumber.value.substring(0, displayNumber.value.length - 1);

        }
        if (buttonPresse === 'Submit') {
            let notifyS = document.getElementById('notify-s');
            let notifyF = document.getElementById('notify-f');



            if (document.getElementById('numberShow').value === displayNumber.value) {
                // console.log('correct');
                notifyS.style.display = 'block';
                notifyF.style.display = 'none';
            } else {
                // console.log('incorrect');
                notifyS.style.display = 'none';
                notifyF.style.display = 'block';
                let cont = parseInt(document.getElementById('actionLeft').innerText);
                cont--;
                if (cont == 0) {
                    alert("You have 0 attempt ,please generate the number again");
                    location.reload();
                } else {

                    document.getElementById('actionLeft').innerText = cont;
                }

            }
        }
        // console.log(buttonPresse);
    } else {
        displayNumber.value += buttonPresse;

    }
})