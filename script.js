// Average Calculator by Mr. H

// Event Listener
document.getElementById("calc-btn").addEventListener("click", calcArea);

// Event Function
function calcArea() {
  // Input
  let sidea = +document.getElementById("sidea").value;
  let sideb = +document.getElementById("sideb").value;
  let height = +document.getElementById("height").value;

  // Process
  let calcArea = ((sidea + sideb) * height / 2);

  // Output
  document.getElementById("area-out").innerHTML = calcArea;
}