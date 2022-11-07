function bonAppetit(bill, k, b) {
      // Write your code here
      // Write your code here
      let total = 0;
      for (let i = 0; i < bill.length; i++) {
            if (i != k) {
                  total = total + bill[i];

            }
      }

      total = total / 2;

      if (total - b === 0) {
            console.log("Bon Appetit");
      }
      else {
            console.log(Math.abs(total - b));
      }


}
let array = [3, 10, 2, 9]
bonAppetit(array, 1, 12)
