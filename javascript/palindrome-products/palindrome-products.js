export class Palindromes {
	static generate({maxFactor, minFactor}){
		if(minFactor > maxFactor) throw new Error("min must be <= max");

		var smallest = {value: null, factors: []},
			largest = {value: null, factors: []};

		for(var i = minFactor; i <= maxFactor; i++){
			for(var j = i; j <= maxFactor; j++){
				var value = i * j;

				if(value.toString().split("").reverse().join("") == value){
					var factors = [i, j];

					if(value <= smallest.value || !smallest.value) smallest = {value: value, factors: []};
					if(value == smallest.value) smallest.factors.push(factors);
					if(value > largest.value) largest = {value: value, factors: []};
					if(value == largest.value) largest.factors.push(factors);
				}
			}
		}

		return {smallest, largest};
	}
}