window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let obj = getCurrentUIValues();
  document.getElementById('loan-amount').value = '0';
  document.getElementById('loan-years').value = '0';
  document.getElementById('loan-rate').value = '0';
  calculateMonthlyPayment(obj);
  document.getElementById('monthly-payment').innerHTML = '0.00'
}
// Get the current values from the UI
// Update the monthly payment
function update() {
  let obj = getCurrentUIValues();
  if (obj.amount === 0 || obj.years === 0 || obj.rate === 0){
    alert('you need to enter a value into all boxes');
  } else {
    updateMonthly(obj);
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P  = values.amount;
  let i = (values.rate/12);
  let n = (values.years*12);
  let equation = ((P * i)/(1-(1+i)**(-n)));
  return equation.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let newTotal = calculateMonthlyPayment(monthly);
  document.getElementById('monthly-payment').innerHTML = newTotal;
}
