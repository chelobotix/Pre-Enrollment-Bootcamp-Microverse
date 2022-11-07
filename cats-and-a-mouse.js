function catAndMouse(x, y, z) {
      let str;
      if (Math.abs(x - z) < Math.abs(y - z)) {
            str = "Cat A";
      }
      else if (Math.abs(x - z) > Math.abs(y - z)) {
            str = "Cat B";
      }
      else {
            str = "Mouse C";
      }
      return str
}


console.log(catAndMouse(1, 3, 2));
