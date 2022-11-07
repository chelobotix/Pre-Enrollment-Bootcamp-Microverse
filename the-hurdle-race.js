function hurdleRace(k, height) {
      // Write your code here
      let max = Math.max.apply(null, height);

      if (k >= max) {
            return 0
      }
      else {
            return (max - k)
      }

}
let array = [1, 2, 3, 3, 2]
console.log(hurdleRace(1, array));
