var button = document.getElementById("enterButton");
var input = document.getElementById('userInput');
var clearbtn = document.getElementById("clearButton");
var ul = document.querySelector("ul");

function listSize() {
	return document.getElementsByTagName("li").length;
}

function createListElement() {
	var li = document.createElement('li');
	li.classList.add('listItem');
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', deleteSpecificItem);
	ul.appendChild(li);
	input.value = "";

	if(listSize() > 0) {
		var metaData = document.querySelector("h3");
		metaData.style.display = "none";
	}
	function deleteSpecificItem() {
		li.classList.toggle('done');
		setTimeout(function deleteNow() {
			li.remove();
			if(listSize() == 0) {
				var metaData = document.querySelector("h3");
				metaData.style.display = "block";
			}
		}, 3000);
	}
}
function addNewItemKeyPress(event) {
	if(input.value.length > 0 && event.keyCode == 13) {
		createListElement();
	}
}
function addNewItem() {
	if(input.value.length > 0) {
		createListElement();
	}
	else {
		alert("No item to enter");
	}
}
function clearAll() {
	var ul = document.querySelector("ul");
	while(listSize() != 0) {
		ul.removeChild(ul.getElementsByTagName("li")[0]);
	}
	var metaData = document.querySelector("h3");
	metaData.style.display = "block";
}

button.addEventListener('click', addNewItem);

input.addEventListener('keypress', addNewItemKeyPress);

clearbtn.addEventListener('click', clearAll);
