let output_value = '';
let screen = document.getElementById('screen');
    keys = document.querySelectorAll('button');
for (elements of keys) {
    elements.addEventListener('click', (e) => {
        input = e.target.innerText;
        console.log('Button text is ', input);
        if (input == 'C') {
            output_value = "";
            screen.value = output_value;
        }
        else if (input == '=') {
            screen.value = eval(output_value);
        }
        else if (input == 'X') {
            input = '*';
            output_value += input;
            screen.value = output_value;
        }
        else {
            output_value += input;
            screen.value = output_value;
        }

    })
}

