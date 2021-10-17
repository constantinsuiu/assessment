import chalk from "chalk";
import _ from 'lodash';
import prompt from 'prompt-sync';


const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const success = chalk.bold.green;

function countDividors(n) {
    let dividorCount = 0;

    const numbers = _.range(n+1)
    for (let number in numbers) {
        if (n % number == 0) {
            dividorCount++;
        }
    }
    return dividorCount;
}

function numbersWith3Dividers(startNumber, endNumber) {
    let obj = {};
    let numWith3Dividers = 0;
    let range = _.range(startNumber, endNumber+1);
    range.forEach((number) => {
        if (countDividors(number) == 3) {
            obj[number] = countDividors(number)
            numWith3Dividers++;
        }
    })
    console.log(obj);
    console.log(success(`There ${numWith3Dividers} dividors between ${startNumber} and ${endNumber}`));
}

function main() {
    let startNumber, endNumber;
    let startInput = true;
    let Prompt = prompt()
    console.log(warning('ENTER EXIT TO EXIT THE RUNNER.'))

    //Get and validate data from input
    while (startInput) {
        startNumber = Prompt('Enter start number: ');
        if (startNumber.toLowerCase() === 'exit') {
            startInput = false;
            return;
        }
        if (validateData(startNumber)) {
            startInput = false;
        }
    }
    
    startInput = true;
    while (startInput) {
        endNumber = Prompt('Enter end number: ');
        if (endNumber.toLowerCase() === 'exit') {
            startInput = false;
            return;
        }
        if (validateData(endNumber)) {
            startInput = false;
        }
    }
    if (startNumber > endNumber) {
        console.log(error('The end number is bigger than the start number. Please re-enter the numbers'));
        main();
        return;
    }

    numbersWith3Dividers(parseInt(startNumber), parseInt(endNumber))
}

function validateData(value) {
    let regEx = /^[0-9]{1,9}$/
    if (!regEx.test(value)) {
        console.log(error('The number has more than 9 digits. Please enter a smaller number'));
        return false;
    }

    if(!parseInt(value)) {
        console.log(error('The argument entered is not a number. Please enter a number.'));
        return false;
    }

    return true;
}

main()