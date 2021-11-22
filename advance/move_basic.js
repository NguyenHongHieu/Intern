var objs = [
  {
    id: 1,
    name: "Coffee",
  },
  {
    id: 2,
    name: "Coffee",
  },
  {
    id: 3,
    name: "Mineral water",
  },
  {
    id: 4,
    name: "Fruit Juice",
  },
];

function moveLast() {
  // Create a <li> node
  var node = document.createElement("LI");
  // Create a text node
  var textnode = document.createTextNode("Coca");
  // Append the text to <li>
  node.appendChild(textnode);
  // Append <li> to <ul> with id="Menu"
  document.getElementById("Menu").appendChild(node);
}

function moveFist() {
  // Create a <li> node
  var newItem = document.createElement("LI");
  // Create a text node
  var textnode = document.createTextNode("Pepso");
  // Append the text to <li>
  newItem.appendChild(textnode);
  // Get the <ul> element to insert a new node
  var list = document.getElementById("Menu");
  // Insert <li> before the first child of <ul>
  list.insertBefore(newItem, list.childNodes[0]);
}

//   function arrayMove(arr, fromIndex, toIndex) {
//     var element = arr[fromIndex];
//     arr.splice(fromIndex, 1);
//     arr.splice(toIndex, 0, element);
// }
