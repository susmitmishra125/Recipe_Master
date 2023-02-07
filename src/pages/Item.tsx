import {IonInput,IonList,IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonButtons, IonBackButton } from '@ionic/react';
import React, {useState} from 'react';
import { useParams } from 'react-router';
import data from '../data/data_generated.json';

import Grid from './Grid';



const Item : React.FC = () => {
  const {item}  = useParams<{item:string}>();
	const units = data[item]['yield'][1];
	const [serving, setServing] = useState('');
	const [persons, setPersons] = useState('');
	console.log(persons,serving);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
					<IonButtons slot="start">
						<IonBackButton></IonBackButton>
					</IonButtons>
          <IonTitle>Item</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonLabel>
					Item Name: {item}
				</IonLabel>
				<IonList >
					<IonItem>
						<IonLabel position= 'floating'>No of persons: </IonLabel>
						<IonInput placeholder="0"
							value = {persons} onIonChange = {(event) => {setPersons(event.detail.value); }}>
						</IonInput>
					</IonItem>
					<IonItem>
						<IonLabel position= 'floating'>Serving size (in {units}): </IonLabel>
						<IonInput placeholder="0"
							value = {serving} onIonChange = {(event) => setServing(event.detail.value)}>
						</IonInput>
					</IonItem>
				</IonList>	
    	</IonContent>
			{/* add a submit button */}
			
			{/* <Grid name = {item} persons = {persons} serving = {serving}/> */}
    </IonPage>
  );
};

export default Item;