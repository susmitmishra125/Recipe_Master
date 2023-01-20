import React, { useState } from 'react';
import data from '../data/data.json';

function ItemIngredients() {
  const [name, setName] = useState('');
  const [person, setPerson] = useState('');
  const [serving, setServing] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let Yield = person * serving;
    setIngredients([]);
    setError('');
    if (name in data) {
      for (let row of data[name]["ingredients"]) {
        let s = row[0] + " : " + (row[1] * Yield / data[name]["yield"][0]).toFixed(2) + row[2];
        if (row.length > 3) {
          s = s + " - " + row[3];
        }
        setIngredients(ingredients => [...ingredients, s]);
      }
    } else {
      setError("Please enter a valid dish name");
    }
  }

  return (
    <div>
      <h3>Enter the item name, no of persons and serving</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="no of persons" value={person} onChange={e => setPerson(e.target.value)} />
        <input type="text" placeholder="servings" value={serving} onChange={e => setServing(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <ul>
        {error && <li>{error}</li>}
      </ul>
    </div>
  );
}

export default ItemIngredients;

