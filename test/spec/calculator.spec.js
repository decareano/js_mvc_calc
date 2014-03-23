
(function(){
  describe('Calculator', function() {

   describe('Calculator instantiation', function() {
		it('should instantiate', function() {
			var calc = new app.Calculator();
			expect(calc).toNotBe(undefined);
		});
		
		it('should be instance of Calculator', function() {
			var calc = new app.Calculator();
			expect(calc instanceof app.Calculator).toBeTruthy();
		});
	});

	describe('Calculator functios:', function() {
		var calc;

		beforeEach(function() {
            calc = new app.Calculator();
            calc.clear();
		});

		it('should read digits', function() {
            calc.addDigit(2);
            calc.addDigit(5);
			expect(calc.getResult()).toBe( 25 );
		});

        it('should sum numbers', function() {
            calc.addDigit(1);
            calc.addDigit(0);
            calc.applyOperaton( app.operations.factory(app.operations.PLUS) );
            calc.addDigit(3);
            calc.addDigit(3);
            calc.calculate();
            expect(calc.getResult()).toBe( 10 + 33 );
        });

        it('should substract numbers', function() {
            calc.addDigit(5);
            calc.addDigit(5);
            calc.applyOperaton( app.operations.factory(app.operations.MINUS) );
            calc.addDigit(3);
            calc.addDigit(0);
            calc.calculate();
            expect(calc.getResult()).toBe( 55 - 30 );
        });

        it('should multiply numbers', function() {
            calc.addDigit(1);
            calc.addDigit(0);
            calc.applyOperaton( app.operations.factory(app.operations.MULTIPLY) );
            calc.addDigit(2);
            calc.addDigit(5);
            calc.calculate();
            expect(calc.getResult()).toBe( 10 * 25 );
        });

	});
	
  });

})();