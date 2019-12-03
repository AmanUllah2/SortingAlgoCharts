quickSort = (array) => {
  if (array.length < 2) {
    return array
  }
  const chosenIndex = array.length - 1
  const chosen = array[chosenIndex]
  const a = []
  const b = []
  for (let i = 0; i < chosenIndex; i++) {
    const temp = array[i]
    temp < chosen ? a.push(temp) : b.push(temp)
  }

  const output = [...quickSort(a), chosen, ...quickSort(b)]
  console.log(output.join(' '))
  document.getElementById("demo_q2").innerHTML = output.join(' ');
   //Calculating time using performance.now js builtin function
   var t3 = performance.now();
   document.getElementById("demo_q3").innerHTML = "Time Taken by quick sort: " + t3 + " milliseconds";
  return output
}
