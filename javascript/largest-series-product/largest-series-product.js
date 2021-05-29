export const largestProduct = (number,series) => {
	if((number == '' && series == 0) || (series == 0)) return 1;
	if(valid(number,series)){
		let max = 0;
		let num_length = number.length - series;
		for(let id = 0;id <= num_length; id++){
			let series_elements = [...number.substr(id,series)];
			let product = get_product(series_elements);
			max = (product > max) ? product : max;
		}
		return max;
	}
};

const valid = (number,series) => {
	if(number.length < series)
		throw new Error('Span must be smaller than string length');
	if(series < 0)
		throw new Error('Span must be greater than zero');
	if(number.match(/[a-zA-Z]/g))
		throw new Error('Digits input must only contain digits');
	return true;
}

const get_product = (elements) => elements.reduce((num1 , num2) => Number(num1) * Number(num2));