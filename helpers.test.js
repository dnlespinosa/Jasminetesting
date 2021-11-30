it ('should calculate correct tip percent calculateTipPercent()', function(){
    expect(calculateTipPercent(50, 10)).toEqual(20);
})

it ('should return a number sumPaymentTotal()',  function() {
    expect(sumPaymentTotal('tipPercent')).toEqual(50)
})

it ('should create a td in payment info appendTd()', function() {
    expect(document.getElementById('payment1').children.length).toEqual(4);
})

it('should create a X button appendDeleteBtn', function() {
    
    expect(document.querySelector('#payment1').lastElementChild.innerText).toEqual('X');
})