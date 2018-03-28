var calculator = require ('./scripts/mathFunctions.js');

describe('add', function() {
	it('adds 0 and 0', function() {
		expect(calculator.add([0,0])).toEqual(0);
	});
	it('adds 2 and 2', function() {
		expect(calculator.add([2,2])).toEqual(4);
	});
	it('adds positive numbers', function() {
		expect(calculator.add([2,6])).toEqual(8);
	});
  it('adds many positive numbers', function() {
    expect(calculator.add([2,6,3,7,10])).toEqual(28);
  });
});

describe('subtract', function() {
	it('subtracts numbers', function() {
		expect(calculator.subtract([10,4])).toEqual(6);
	});
});

describe('multiply', function() {
	it('multiplies two numbers', function() {
		expect(calculator.multiply([2,4])).toEqual(8);
	});
	it('multiplies several numbers', function() {
		expect(calculator.multiply([2,4,6,8,10,12,14])).toEqual(645120);
	});
  it('multiplies a negative and a positive', function() {
    expect(calculator.multiply([-2, 5])).toEqual(-10);
  });
  it('multiplies two negative numbers', function() {
    expect(calculator.multiply([-5, -6])).toEqual(30);
  })
});

describe('divide', function() {
  it('divides two numbers', function() {
    expect(calculator.divide([4, 2])).toEqual(2);
  });
  it('divides several numbers', function() {
    expect(calculator.divide([16, 2, 4])).toEqual(2);
  });
});
