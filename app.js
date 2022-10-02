(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let count = document.getElementById('.counter');

    screen.value = "value"

    buttons.forEach(function (button) {
        button.addEventListner('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;

            if (screen.value === '') {
                screen.value = answer;
            }
            else {
                let answer = eval(count);
                screen.value = answer;
            }
        });
    })
})