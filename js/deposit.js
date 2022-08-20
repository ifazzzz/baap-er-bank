// step-1: add event listeners to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
// get the amount from the deposit input field
// for input field .value to the value inside the input field
const depositfield = document.getElementById('deposit-field');
const newDepositAmountstring = depositfield.value;
// change string to number for addition
const newDepositAmount = parseFloat(newDepositAmountstring);

// get the current deposit total amount

const depositTotal = document.getElementById('deposit-total');
const previousDepositTotalstring = depositTotal.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalstring);

// step-4: add numbers to set the total deposit

const currentDepositAmount = previousDepositTotal + newDepositAmount;
depositTotal.innerText = currentDepositAmount;

// step-5: get current total balance

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalstring = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

// step -6 : calculate total balance

const currentTotalBalance = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentTotalBalance;

// clear the deposit field
depositfield.value = '';
})