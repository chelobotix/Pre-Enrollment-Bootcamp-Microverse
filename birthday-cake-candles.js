function birthdayCakeCandles(candles) {
      // Write your code here
      let max = Math.max.apply(null, candles);
      let sum = 0
      for (let i = 0; i < candles.length; i++) {
            if (candles[i] === max) {
                  sum++;
            }

      }
      return sum

}
array = [3, 2, 1, 3]
console.log(birthdayCakeCandles(array));
