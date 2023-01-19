fetch('data/data.json')
.then(response => response.json())
.then(data => {
	dict_data=data;
	// dict_data contains the dictionary for the information in json file
	});

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