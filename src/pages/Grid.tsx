import { IonCol, IonGrid, IonRow } from '@ionic/react';

import Ingredients from '../JS/Ingredients';
import '../main.css';


function Grid(props) {
	var persons = props.persons;
	var serving = props.serving;
	var name = props.name;

	var ingredients = Ingredients(name, persons, serving);
	console.log(ingredients)
	return (
		<>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>7</IonCol>
          <IonCol>8</IonCol>
          <IonCol>9</IonCol>
          <IonCol>10</IonCol>
          <IonCol>11</IonCol>
          <IonCol>12</IonCol>
        </IonRow>
      </IonGrid>
    </>
    // <>
			// <IonGrid>
			// 	<IonRow className="ingredientTable">
			// 		<IonCol>Name</IonCol>
			// 		<IonCol size = "24">Quantity</IonCol>
			// 		<IonCol size = "24">Unit</IonCol>
			// 		<IonCol size = "24">Info</IonCol>
			// 	</IonRow>
			// 	{/* {ingredients.map((ingredient, index) => (
			// 		<IonRow key={index}>
			// 			<IonCol className="ingredient-name">{ingredient[0]}</IonCol>
			// 			<IonCol className="ingredient-quantity">{ingredient[1]}</IonCol>
			// 			<IonCol className="ingredient-unit">{ingredient[2]}</IonCol>
			// 			<IonCol className="ingredient-info">{ingredient[3]}</IonCol>
			// 		</IonRow>
			// 	))} */}
			// </IonGrid>
    // </>
  );
}
export default Grid;