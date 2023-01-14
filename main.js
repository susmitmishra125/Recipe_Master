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
		if (name in dict_data)
		{
			console.log("present");
			// loop through the dict 
			var multiplier = person*serving;
			let list = document.getElementById("myList");
			list.innerHTML='';// to clear text
			for (var key in dict_data[name]) {
				let listItem = document.createElement("li");
				console.log(key + " : " + scale(dict_data[name][key],multiplier));
				listItem.innerText = key + " : " + scale(dict_data[name][key],multiplier);
				list.appendChild(listItem);
				let br = document.createElement("br");
				list.appendChild(br);
			}
		}
		else
		{
			console.log("not present");
			let error = document.getElementById("errormsg");
			error.innerText = "Please enter a valid dish name";
		}
});