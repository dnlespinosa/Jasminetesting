
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:10, years:20,rate:30})).toEqual('25.00');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:10, years:20, rate:30})).toBeCloseTo('25.00', 2);
});

/// etc
