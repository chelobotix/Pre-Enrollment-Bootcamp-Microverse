function staircase(n) {
      // Write your code here
      let space = n - 1
      let symbol = 1
      for (let i = 1; i <= n; i++) {
            let str = "";
            for (let j = 0; j < space; j++) {
                  str += " "
            }
            space--
            for (let q = 0; q < symbol; q++) {
                  str += "#"
            }
            symbol++
            console.log(str);
      }

}

staircase(6)
