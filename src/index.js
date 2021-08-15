module.exports = function toReadable (number) {
  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let tenTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  //Обрабатывает значения до 99
  const parseTenths = (number) => {

    if (number >= 0 && number <10) {
        return ones[number];
    }

    if (number >= 10 && number <20) {
        return tenTwenty[number % 10];
    }

    let firstDigit = Math.floor(number / 10);
    let secondDigit = number % 10;

    if (secondDigit === 0) {
		return `${tens[firstDigit]}`
	}
	else{
		return `${tens[firstDigit]} ${ones[secondDigit]}`;
	}
  }

  // Возвращает значение от 0 до 99
  if (number >= 0 && number <= 99) {
    return parseTenths(number);
  }

  // Возвращает значения от 99 до 999
  else if(number > 99 && number <= 999) {
    let firstDigit = Math.floor(number / 100);

    // Возвращает значение, если число кратно 100
    if(number % 100 === 0) {
        return `${ones[firstDigit]} hundred`;
    }

    // Возвращает значение, если число не кратно 100
    let secondDigit = parseTenths(number % 100);
    return `${ones[firstDigit]} hundred ${secondDigit}`;
  }
}
