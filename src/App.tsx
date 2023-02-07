import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import ItemSearch from './pages/ItemSearch';
import SettingsPage from './pages/SettingsPage';
import Item from './pages/Item';
import Menu from './pages/Menu';
import IngredientsList from './pages/IngredientsList';
import { IonReactRouter } from '@ionic/react-router';
const App: React.FC = () => {
  return (
    <IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route exact path='/ItemSearch' component={ItemSearch}/>
					<Route exact path='/settings' component={SettingsPage}/>
					<Route exact path='/item/:item' component={Item}/>
					<Route path='/Ingredients/:item/:person/:serving' component={IngredientsList}/>
					<Route path = '/' component={Menu}/>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
  );
};

export default App;
