(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    screen.value = "";
    console.log("Screen value", screen.value);


    buttons.forEach(function(button) {
        button.addEventListener('click', function(evt) {
            let value = evt.target.dataset.num;
            console.log("Before", screen.value, value);
            screen.value += value;
            console.log("After", screen.value);
        });
    });

    equal.addEventListener('click',function(evt) {
        if (screen.value === '') {
            screen.value = "Please enter";
        }
        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener('click', function(evt) {
        screen.value = "";
    });

})();