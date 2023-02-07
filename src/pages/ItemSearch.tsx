import {IonMenuButton,IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem } from '@ionic/react';
import React, { useState } from 'react';
import data from '../data/data_generated.json';
import { useHistory } from 'react-router-dom';


const items = Object.keys(data);
// sort
items.sort();

const ItemSearch: React.FC = () => {
	// const items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon', 'ssfdg', '1', '2', '3','4', '5', '6','7', '8', '9', ];
  const [ItemName, setItemName] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const history = useHistory();

  const handleChange = (event) => {
		// search filter
    const name = event.detail.value;
    setItemName(name);
    setFilteredItems(
      items.filter(item => item.toLowerCase().includes(name.toLowerCase()))
    );
  };

  const handleClick = (item: string) => {
    history.push(`/item/${item}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
					<IonButton slot = "start">
						<IonMenuButton/>
					</IonButton>
          <IonTitle>Item Search</IonTitle>
        </IonToolbar>
      </IonHeader>
			{/* search bar */}
      <IonContent className="ion-padding">
        <IonSearchbar showClearButton="focus" value={ItemName} onIonChange={handleChange}></IonSearchbar>
        <IonList>
          {filteredItems.map(item => (
            <IonItem key={item} onClick={() => handleClick(item)}>{item}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ItemSearch;
