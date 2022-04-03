/**
 * @param num The number to round
 * @param precision The number of decimal places to preserve
 */
// TODO: add tests
export const roundUp = (num, precision = null) => {
  if (precision) {
    const afterZero = Math.pow(10, precision);
    return Math.ceil(num * afterZero) / afterZero;
  }
  return Math.ceil(num);
}
