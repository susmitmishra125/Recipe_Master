import React, { useState } from 'react';
import data from '../data/data.json';
function ItemIngredients() {
  // State variables to store the input values
  const [name, setName] = useState('');
  const [person, setPerson] = useState('');
  const [serving, setServing] = useState('');
  // State variable to store the calculated ingredients
  const [ingredients, setIngredients] = useState([]);
  // State variable to store any error message
  const [error, setError] = useState('');
  // Event handler for the form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Calculating the total yield
    let Yield = person * serving;
    // Resetting the ingredients and error states
    setIngredients([]);
    setError('');
    // Checking if the dish name is valid
    if (name in data) {
      // Looping through the ingredients of the dish
      for (let row of data[name]["ingredients"]) {
        // let s = row[0] + " : " + (row[1] * Yield / data[name]["yield"][0]).toFixed(2) + row[2];
				let s=[row[0],(row[1] * Yield / data[name]["yield"][0]).toFixed(2),row[2]]
        // Checking if there is any additional information
        if (row.length > 3) {
					s.push(row[3])
        }
				else
				s.push("");
				s.push(['Name','Quantity','Unit','Info']);
        // Adding the ingredient to the state
        setIngredients(ingredients => [...ingredients, s]);
      }
    } else {
      // Setting the error state if the dish name is not valid
      setError("Please enter a valid dish name");
    }
  }
	// returns html
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item name" value={name} onChange={e => setName(e.target.value)} /><br/>
        <input type="text" placeholder="no of persons" value={person} onChange={e => setPerson(e.target.value)} />
        <input type="text" placeholder="servings" value={serving} onChange={e => setServing(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <table className="ingredientTable">
				<tr>
					{ingredients[0] && ingredients[0][4].map((ingredient, index) => (
						<th key = {index}>{ingredient}</th>
					))}
				</tr>
        {ingredients.map((ingredient, index) => (
          <tr key={index} >
						<td className="ingredient-name">{ingredient[0]}</td>
						<td className="ingredient-quantity">{ingredient[1]}</td>
						<td className="ingredient-unit">{ingredient[2]}</td>
						<td className="ingredient-info">{ingredient[3]}</td>
          </tr>
        ))}
      </table>
      <ul>
				{error && <li className="error-message">{error}</li>}
      </ul>
    </div>
  );
}


export default ItemIngredients;

