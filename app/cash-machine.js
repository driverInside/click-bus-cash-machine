function isInteger(number) {
  return (number === parseInt(number, 10)) && number > 0;
}

function getCash(amount) {
  if(amount == null || amount === 0) return [];

  if(!isInteger(amount)){
    throw new TypeError('InvalidArgumentException');
  }

  var availableBills = [100, 50, 20, 10];
  var resultSet = [];

  for (var i = 0; i < availableBills.length; i++) {
    while(amount >= availableBills[i]) {
      amount -= availableBills[i];
      resultSet.push(availableBills[i]);
    }
  }

  if(amount > 0) {
    throw new TypeError('NoteUnavailableException');
  }

  return resultSet;

}

exports.getCash = getCash;
exports.isInteger = isInteger;