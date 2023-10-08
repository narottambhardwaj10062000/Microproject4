let display = document.getElementById('display');

let buttons = document.querySelectorAll("button");
let screenValue = ""

function hasOperator(symbole) {
    const oparray = ["+", "-", "*", "/"];
    return oparray.includes(symbole);
}

function hasFunc(func) {
    const features = ["DEL", "=", "RESET"];
    return features.includes(func);
}


for (item of buttons) {
    item.addEventListener('click', (inputbutton) => {
        let inputbtn = inputbutton.target.innerText;
        if (inputbtn === "x") {
            inputbtn = "*"
        }
        if (hasFunc(inputbtn)) {
            if (inputbtn === "=") {
                if (!hasOperator(screenValue.slice(-1)) && screenValue.slice(-1) != "") {
                    let calc = eval(screenValue)

                    display.value = calc;
                    screenValue = display.value;
                    console.log(calc)
                    if (display.value === "Infinity") {
                        screenValue = "";
                        return
                    }
                    return
                } else {
                    display.value = "Invalid Input";
                    screenValue = "";
                    console.log("please enter valid entry")
                    return
                }
            } else if (inputbtn === "DEL") {
                let del = screenValue.slice(0, -1);
                screenValue = del;
                display.value = screenValue;
                console.log("del here", screenValue)
                return
            } else {
                screenValue = ""
                display.value = screenValue;
                console.log("reset here")
                return
            }

        }
        if (hasOperator(inputbtn)) {

            if (screenValue.slice(-1) === "") {
                return
            }
            if (hasOperator(screenValue.slice(-1))) {
                if (screenValue.slice(-1) === inputbtn) {
                    console.log("You have entered the operator twis")
                    return
                } else {
                    screenValue = screenValue.slice(0, -1)
                    screenValue += inputbtn
                    display.value = screenValue;
                    console.log(screenValue)
                }
                return

            }


            screenValue += inputbtn
            display.value = screenValue;
        } else {
            screenValue += inputbtn
            display.value = screenValue;
        }
        console.log(screenValue)


    })

}