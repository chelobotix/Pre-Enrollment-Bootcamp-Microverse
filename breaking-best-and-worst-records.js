function breakingRecords(scores) {
      // Write your code here
      var max = scores[0];
      var min = scores[0];
      var greaterMax = 0;
      var greaterMin = 0;

      for (let i = 1; i < scores.length; i++) {
            if (scores[i] > max) {
                  greaterMax++;
                  max = scores[i];
            }
            if (scores[i] < min) {
                  greaterMin++;
                  min = scores[i];
            }

      }

      var result = [greaterMax, greaterMin];

      return result;
}

array = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
console.log(breakingRecords(array));
