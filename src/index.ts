export default class RocIdValidator {

  static validate(identity: string): boolean {

    const code: { [key: string]: number } = {
      A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, G: 16, H: 17, I: 34, J: 18, K: 19, L: 20, M: 21
      , N: 22, O: 35, P: 23, Q: 24, R: 25, S: 26, T: 27, U: 28, V: 29, W: 32, X: 30, Y: 31, Z: 33
    };

    if (!identity || !/^([A-Z][12]\d{8})$/.test(identity)) {
      return false;
    }

    const letterCode = code[identity[0]];
    const nums = [letterCode / 10, letterCode % 10, ...identity.substring(1, identity.length).split('').map(Number)];
    const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1];
    const sum = nums.reduce((acc, curr, idx) => acc + curr * weights[idx], 0);
    return sum % 10 === 0;
  }

}