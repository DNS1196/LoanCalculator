window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
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
  const val = { amount: 1000, years: 4, rate: 2 };
  const amountUI = document.getElementById('loan-amount');
  amountUI.value = val.amount;
  const yearsUI = document.getElementById('loan-years');
  yearsUI.value = val.years;
  const rateUI = document.getElementById('loan-rate');
  rateUI.value = val.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIVal = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIVal))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(val) {
  const monthlyRate = (val.rate / 100) / 12;
  const n = Math.floor(val.years * 12);
  return (
    (monthlyRate * val.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
