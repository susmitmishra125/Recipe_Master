fetch('data/data.json')
.then(response => response.json())
.then(data => {
	dict_data=data;
	// dict_data contains the dictionary for the information in json file
	});


// create a function to return string
function scale(s,multipler)
{
	let pattern = /^\s*([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\s*([a-zA-Z]+)?\s*$/;
	let match = pattern.exec(s);
	let quantity = match[1];
	let unit = match[2];
	// multiply quantity with multipler
	quantity = quantity*multipler;
	if(unit)
		return quantity+unit;
	return quantity;
}
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let person = document.getElementById("person").value;
    let serving = document.getElementById("serving").value;
		let yield = person*serving;
		let list = document.getElementById("myList");
		let error = document.getElementById("errormsg");
		list.innerHTML='';// to clear text
		error.innerText = '';// to clear text
		if (name in dict_data)
		{
			// item is present in the json file
			// console.log("present");
			// loop through the dict 
			// console.log(dict_data[name]["ingredients"]);
			for (let row of dict_data[name]["ingredients"]) {
				let listItem = document.createElement("li");
				listItem.innerText = row[0] + " : " + (row[1]*yield/dict_data[name]["yield"][0]).toFixed(2)+row[2];
				list.appendChild(listItem);
				let br = document.createElement("br");
				list.appendChild(br);
			}
		}
		else
		{
			console.log("not present");
			error.innerText = "Please enter a valid dish name";
		}
});