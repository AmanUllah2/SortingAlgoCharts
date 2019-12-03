insertionSort = (array) => {
  for (outer = 1; outer < array.length; outer++) {
    for (inner = 0; inner < outer; inner++) {
      //displaying the backend process or each step taken by insertion sort in console
      console.log(array.join(' '))
      if (array[outer] < array[inner]) {
        const [element] = array.splice(outer, 1)
        array.splice(inner, 0, element)
      }
    }
  }
  //displaying sorted array using insertion sort
  document.getElementById("demo_i2").innerHTML = array.join(' ');
  console.log(array.join(' '))
  //Calculating time using performance.now js builtin function
  var globalVariable = {
  t1 : performance.now()
  };
  document.getElementById("demo_i3").innerHTML = "Time Taken by insertion sort: " + globalVariable.t1 + " milliseconds";
  return array;
}

