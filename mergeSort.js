divide = (array) => {
  if (array.length < 2) {
    return array
  }
  const mid = Math.floor(array.length/2)
  const smallOne = array.slice(0, mid)
  const smallTwo = array.slice(mid)
  return sort(divide(smallOne), divide(smallTwo))
}

sort = (smallOne, smallTwo) => {
  const sorted = []
  while(smallOne.length && smallTwo.length) {
    if (smallOne[0] <= smallTwo[0]) {
      sorted.push(smallOne.shift())
    } else {
      sorted.push(smallTwo.shift())
    }
  }
  //Calculating time using performance.now js builtin function
  var t2 = performance.now();
  document.getElementById("demo_m3").innerHTML = "Time Taken by merge sort: " + t2 + " milliseconds";
  const output = [...sorted, ...smallOne, ...smallTwo]
  document.getElementById("demo_m2").innerHTML = output;
  console.log(output)
  return output
}

