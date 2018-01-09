var a = 6,
    b = 4,
   	value = (a * a) - (2 * a * b) + (b * b);
   	console.log(('Equation: ('+ a + '*' + a + ') - (2*' + a + '*' + b + ') + (' + b + '*' + b + ') gives result: ' + value));
   	
if  ( value < 0 ) {
	console.log('Result is negative');
}	
else if ( value > 0) {
	console.log('Result is positive');
}

if ( value === 0) {
	console.log('Result = 0');
}	
else if (( value < 0 ) || ( value > 0 )) {
	console.log('Result is not 0');
}
