import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonButton,IonContent, IonMenuButton,IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useParams } from 'react-router-dom';

import Ingredients from '../JS/Ingredients';
import '../main.css'

const IngredientsList : React.FC = () => {
	const {item, person, serving} = useParams<{item:string, person:string, serving:string}>();
	var ingredients = Ingredients(item, person, serving);
	console.log(ingredients)
	return (
  <>
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButton slot = "start">
						<IonMenuButton/>
					</IonButton>
					<IonTitle>
						Ingredients List
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent >
				<IonGrid>
					<IonRow className="header">
							<IonCol size = "3">Name</IonCol>
							<IonCol size = "3" >Quantity</IonCol>
							<IonCol size = "2">Unit</IonCol>
							<IonCol size = "4">Info</IonCol>
					</IonRow>
							
					{ingredients.map((ingredient, index) => (
						<IonRow key={index} className="rows">
							<IonCol size="4" className="ingredient-name">{ingredient[0]}</IonCol>
							<IonCol size="2" className="ingredient-quantity">{ingredient[1]}</IonCol>
							<IonCol size="2" className="ingredient-unit">{ingredient[2]}</IonCol>
							<IonCol size="4" className="ingredient-info">{ingredient[3]}</IonCol>
						</IonRow>
						))}
				</IonGrid>
			</IonContent>
		</IonPage>
  </>
	);
}
export default IngredientsList;