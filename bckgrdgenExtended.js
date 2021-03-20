var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.getElementById("btn");
var copyTxt = document.getElementById("copyTxt");

//get current background style, convert to string, extract the two colors
var bckg = getComputedStyle(body).background;
var str = String(bckg);
var vx = str.substring(17, 76);
var v1 = vx.substring(30, 39).replace(/\s/g, "");
var v2 = vx.substring(46, 57).replace(/\s/g, "");

//split v1 and v2 into individual strings and convert to numbers
var r1 = Number(v1.split(",")[0]);
var g1 = Number(v1.split(",")[1]);
var b1 = Number(v1.split(",")[2]);
var r2 = Number(v2.split(",")[0]);
var g2 = Number(v2.split(",")[1]);
var b2 = Number(v2.split(",")[2]);

function RGBToHex(r,g,b) {

// convert each number from base 10 to base 16
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

// if it is single digit, put a '0' in front
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

//add '#' to the front to complete hex notation
  return "#" + r + g + b;
}

var v1a = RGBToHex(r1,g1,b1);
var v2a = RGBToHex(r2,g2,b2);

color1.value = v1a;
color2.value = v2a;

h3.innerHTML = String(vx) + ";";

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", " + color2.value + ")";

	h3.innerHTML = body.style.background +";";
  // or "h3.textContent = ..."
}

function randomizeColors(){
	// generate random hex values
	var col1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var col2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

	body.style.background = "linear-gradient(to right, "
	+ col1 + ", " + col2 + ")";

	h3.innerHTML = body.style.background +";";

	color1.value = col1;
	color2.value = col2;
}

function copyToClipboard(elementId) {

  // Create an auxiliary hidden input
  var aux = document.createElement("input");

  // Get the text from the element passed into the input
  aux.setAttribute("value", h3.innerHTML);

  // Append the aux input to the body
  document.body.appendChild(aux);

  // Highlight the content
  aux.select();

  // Execute the copy command
  document.execCommand("copy");

  // Remove the input from the body
  document.body.removeChild(aux);

  alert("Copied the text: " + h3.innerHTML);

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomize.addEventListener("click", randomizeColors);

copyTxt.addEventListener("click", copyToClipboard);

// To change background with js: element.style.background = "color"

