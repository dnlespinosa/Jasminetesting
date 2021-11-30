describe("Payments", function() {
    beforeEach(function () {
      billAmtInput.value = 20
      tipAmtInput.value = 10
    });

    it('should calculate tip percent of submitPaymentInfo()', function(){
        submitPaymentInfo();
        expect(allPayments['payment1']['tipPercent']).toEqual(50);
    })

    it('should create an object with 3 values createCurPayment()', function(){
        expect(Object.keys(createCurPayment()).length).toEqual(3);
    })

    it('should create a new table to display amounts appendPaymentTable()', function(){
        expect(paymentTbody.children.length).toEqual(1);
    })

    it('should display total percent avg for the shift updateSummary()', function(){
        expect(document.querySelectorAll('#summaryTable tbody tr td')[2].innerText).toEqual('50%');
    });
  
    afterEach(function() {
      
    });
  });










  