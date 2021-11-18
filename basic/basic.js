const COLOR = {
  RED: 'red',
  BLUE: 'blue'
};

// set function name similar to feature description
function changeStyle() {
  document.querySelector(".example").style.backgroundColor = COLOR.RED;
}
function addStyle() {
  document.getElementById("p1").style.color = COLOR.BLUE;
  document.getElementById("p1").style.fontFamily = "Arial";
  document.getElementById("p1").style.fontSize = "larger";
}
function changeText() {
  document.getElementById("p1").innerHTML = "New text!";
}
function addText() {
  var add = document.createTextNode(" I'm new dev! ");
  document.getElementById("p1").appendChild(add);
}

function removeElement() {
  var remove = document.getElementById("demo");
  remove.remove();
}

function addElement() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.getElementsByClassName("content")[0].appendChild(btn);
}

function addAttributes() {
  var h1 = document.getElementsByTagName("h1")[0];
  var att = document.createAttribute("class");
  att.value = "democlass";
  h1.setAttributeNode(att);
}

function changeAttributes() {
  document.getElementsByTagName("h1")[0].setAttribute("class", "democlass2");
}

function removeAttributes() {
  document.getElementsByTagName("h1")[0].removeAttribute("class", "democlass2");
}
