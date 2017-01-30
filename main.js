function toChineseNumeral(num){
	var numerals = {
		"-":"負",
		".":"點",
		0:"零",
		1:"一",
		2:"二",
		3:"三",
		4:"四",
		5:"五",
		6:"六",
		7:"七",
		8:"八",
		9:"九",
		10:"十",
		100:"百",
		1000:"千",
		10000:"萬"
	};

	var result = '';
	var neg = num < 0;
	num = Math.abs(num);
	arr = (num+'').split('.');
	arr[0] = arr[0].split('');
	while(arr[0].length > 0) {
		var t = arr[0].shift();
		var digit = Math.pow(10, arr[0].length);
		if (t !== '0' || result.length === 0)
			result += `${digit === 10 && t === '1' && result.length === 0 ? '' : numerals[t]}${digit > 1 ? numerals[digit]:''}`;
		else if (t === '0' && result.substr(result.length-1) != numerals[t])
			result += numerals[t];
	}
	if (result.substr(result.length-1) === numerals['0'] && result.length > 1)
		result = result.substring(0, result.length-1);
	if (arr.length > 1) {
		result += numerals['.'];
		arr[1] = arr[1].split('');
		while(arr[1].length > 0) {
			result += numerals[arr[1].shift()];
		}
	}
	if (neg) {
		result = numerals['-'] + result;
	}

	return result;
}

module.exports.toChineseNumeral = toChineseNumeral;