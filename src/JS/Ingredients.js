
import data from '../data/data.json'

function Ingredients(name, persons, serving){
	let ingredients = [];
	let Yield = persons * serving;
	for(let row of data[name]['ingredients']){
			let s=[row[0],(row[1] * Yield / data[name]["yield"][0]).toFixed(2),row[2]]// calculation part
			if (row.length > 3) {
				s.push(row[3])
			}
			else
				s.push("");
			// s.push(['Name','Quantity','Unit','Info']);// adding headers for the table 
			ingredients.push(s);
	}
	return ingredients;
}

export default Ingredients;
