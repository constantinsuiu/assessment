"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _lodash = _interopRequireDefault(require("lodash"));

var _promptSync = _interopRequireDefault(require("prompt-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const error = _chalk.default.bold.red;

const warning = _chalk.default.keyword('orange');

const success = _chalk.default.bold.green;

function countDividors(n) {
  let dividorCount = 0;

  const numbers = _lodash.default.range(n + 1);

  for (let number in numbers) {
    if (n % number == 0) {
      dividorCount++;
    }
  }

  return dividorCount;
}

function numbersWith3Dividers(startNumber, endNumber) {
  let numWith3Dividers = 0;

  for (let number in _lodash.default.range(startNumber, endNumber)) {
    if (countDividors(number) == 3) {
      numWith3Dividers++;
    }
  }

  console.log(success(`There ${numWith3Dividers} dividors between ${startNumber} and ${endNumber}`));
}

function main() {
  let startNumber, endNumber;
  let startInput = true;
  let Prompt = (0, _promptSync.default)();
  console.log(warning('ENTER EXIT TO EXIT THE RUNNER.')); //Get and validate data from input

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

  numbersWith3Dividers(startNumber, endNumber);
}

function validateData(value) {
  let regEx = /^[0-9]{1,9}$/;

  if (!regEx.test(value)) {
    console.log(error('The number has more than 9 digits. Please enter a smaller number'));
    return false;
  }

  if (!parseInt(value)) {
    console.log(error('The argument entered is not a number. Please enter a number.'));
    return false;
  }

  return true;
}

main();