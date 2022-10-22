
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {
    amount: 10000,
    years: 4,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual('216.95');

  values = {
    amount: 100000,
    years: 1,
    rate: 25
  };
  expect(calculateMonthlyPayment(values)).toEqual('9504.42');
});


it("should return a result with 2 decimal places", function () {
  // ..
  let values = {
    amount: 98194.5,
    years: 8,
    rate: 6.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('1300.00');

  values = {
    amount: 6548654684,
    years: 50,
    rate: 30
  };
  expect(calculateMonthlyPayment(values)).toEqual('163716427.32');


});

/// etc
