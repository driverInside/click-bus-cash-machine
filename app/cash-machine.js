/**
 * Checks if a 'number' is an integer.
 * @param {Integer} number. Value to validate.
 * @return {Bool}
 * @public
 */

function isInteger(number) {
  return (number === parseInt(number, 10)) && number > 0;
}

/**
 * Returns a set of bills from an amount
 * @param {Integer} Amount. Value to 'convert'
 * @return {Array} Set of values
 * @throws InvalidArgumentException When the amount is invalid
 * @throws NoteUnavailableException When there is not bills available
 * @public
 */

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