const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input
}

function allClear() {
    display.value = ''
}

function calculate() {
    try {
        const expression = display.value.replace(/%/g, "/100")
        display.value = eval(expression)
    }
    catch(error) {
        display.value = "Invaild Input"
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1)
}

function toggleSign() {
    if (display.value == '') return
    try {eval(display.value)} catch(error) {return}
    if (display.value.startsWith('(') && display.value.endsWith(')')) {
        display.value = display.value.slice(1, -1);
    }
    if (display.value.startsWith('-')) {
        display.value = display.value.slice(1)
    } else {
        display.value = '(-' + display.value + ')'
    }
}