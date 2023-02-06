import React, { useState } from 'react';
import data from '../data/data.json';
function ItemIngredients() {
  // State variables to store the input values
  const [name, setName] = useState('');
  const [person, setPerson] = useState('');
  const [serving, setServing] = useState('');
  // State variable to store the calculated ingredients
  const [ingredients, setIngredients] = useState([]);
	// show recipe
	const [recipeButton,setRecipeButton] = useState(false);
	const [recipe,setRecipe] = useState([]);
  // State variable to store any error message
  const [error, setError] = useState('');
  // Event handler for the form submit
  
	var nameList = [];
	var nameListLowerCase = [];
	for(var k in data) nameList.push(k);
	for(var k in data) nameListLowerCase.push(k.toLowerCase());
	const handleSubmit = (event) => {
    event.preventDefault();
    // Calculating the total yield
    let Yield = person * serving;
    // Resetting the ingredients and error states
    setIngredients([]);
    setError('');
		setRecipe(''); // second element is the recipe is availabe or not
		setRecipeButton(false); // first element is to check if to show recipe button or not
    // Checking if the dish name is valid
		// check if name is in the list
    if (nameListLowerCase.includes(name.toLowerCase())) {
			// Looping through the ingredients of the dish
      for (let row of data[name]["ingredients"]) {
				let s=[row[0],(row[1] * Yield / data[name]["yield"][0]).toFixed(2),row[2]]// calculation part
        // Checking if there is any additional information
        if (row.length > 3) {
					s.push(row[3])
        }
				else
					s.push("");
				s.push(['Name','Quantity','Unit','Info']);// adding headers for the table 
				setIngredients(ingredients => [...ingredients, s]);
      }
			setRecipeButton(true);
    } else {
      // Setting the error state if the dish name is not valid
      setError("Please enter a valid dish name");
			setRecipeButton(false);
    }
		console.log(ingredients[0][4]);
  }
	function toggleRecipeView(event){
		event.preventDefault();
		if(recipe=='')
			if("recipe" in data[name])
				setRecipe(data[name]['recipe']);
			else
				setRecipe('No recipe available');
		else
			setRecipe('');
	}
	// returns html
  return (
    <div className= "ingredients">
			<form onSubmit={handleSubmit}>
				<input className="item-input" type="text" placeholder="Search Item Name" value={name} onChange={e => setName(e.target.value)} /><br/>
        <input className="person-input" type="text" placeholder="No of persons" value={person} onChange={e => setPerson(e.target.value)} />
        <input className="serving-input" type="text" placeholder="Serving Size" value={serving} onChange={e => setServing(e.target.value)} />
        <button className = "submit-button" type="submit">Submit</button>
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
			<div>
			{
				recipeButton  && 
					<div>
						<form onSubmit={toggleRecipeView}>
							<button className = "recipe-button" type="submit" >Recipe</button>
						<p className = 'recipe-box'>{recipe}</p>
						</form>
					</div>
			}
			</div>
      <ul>
				{error && <li className="error-message">{error}</li>}
      </ul>
    </div>
  );
}


export default ItemIngredients;

