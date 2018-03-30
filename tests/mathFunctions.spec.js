var calculator = require ('../scripts/mathFunctions.js');

describe('add', function() {
	it('adds 0 and 0', function() {
		expect(calculator.add(0, 0)).toEqual(0);
	});
	it('adds 2 and 2', function() {
		expect(calculator.add(2, 2)).toEqual(4);
	});
	it('adds large numbers', function() {
		expect(calculator.add(2000, 1505)).toEqual(3505);
	});
	it('add negative numbers', function() {
		expect(calculator.add(10, -3)).toEqual(7);
	});
});

describe('subtract', function() {
	it('subtracts numbers', function() {
		expect(calculator.subtract(10, 4)).toEqual(6);
	});
	it('subtracts large numbers', function() {
		expect(calculator.subtract(1035, 979)).toEqual(56);
	});
	it('subtracts larger numbers from smaller numbers', function() {
		expect(calculator.subtract(100, 500)).toEqual(-400);
	});
});

describe('multiply', function() {
	it('multiplies two numbers', function() {
		expect(calculator.multiply(2, 4)).toEqual(8);
	});
	it('multiplies large numbers', function() {
		expect(calculator.multiply(1000, 100)).toEqual(100000);
	});
  it('multiplies a negative and a positive', function() {
    expect(calculator.multiply(-2, 5)).toEqual(-10);
  });
  it('multiplies two negative numbers', function() {
    expect(calculator.multiply(-5, -6)).toEqual(30);
  })
});

describe('divide', function() {
  it('divides two numbers', function() {
    expect(calculator.divide(4, 2)).toEqual(2);
  });
  it('divides large numbers', function() {
    expect(calculator.divide(5000, 160)).toEqual(31.25);
  });
	it('divides a large number into a small number', function() {
		expect(calculator.divide(10, 100)).toEqual(0.1);
	});
});
