import{
	IonTitle,
	IonHeader,
	IonPage,
	IonSplitPane,
	IonMenu,
	IonRouterOutlet,
	IonToolbar,
	IonContent,
	IonMenuToggle,
	IonItem,
	IonIcon,
} from '@ionic/react'
import{
	searchOutline,
	settingsOutline,
	walletOutline,
} from 'ionicons/icons'

import { Route } from 'react-router-dom';

import ItemSearch from './ItemSearch';
import SettingsPage from './SettingsPage';
import Item from './Item';
import IngredientsList from './IngredientsList';
import Purchase from './Purchase';

const Menu: React.FC = () => {
	const paths = [
		{name : 'Search', path: '/ItemSearch',icon: searchOutline},
		{name : 'Settings', path: '/settings', icon: settingsOutline},
		{name : 'Events', path: '/purchase', icon : walletOutline}
	]

	return (
		<IonPage>
			<IonSplitPane contentId='main'>
				<IonMenu contentId='main'>
					<IonHeader>
						<IonToolbar>
							<IonTitle>
								Menu
							</IonTitle>
						</IonToolbar>
					</IonHeader>

					<IonContent>
						{paths.map((item,index)=>(
							<IonMenuToggle key ={index}>
								<IonItem routerLink = {item.path}>
									<IonIcon icon={item.icon} slot="start"></IonIcon>
									{item.name}
								</IonItem>
							</IonMenuToggle>
						))}
					</IonContent>
				</IonMenu>
				<IonRouterOutlet id="main">
					<Route exact path='/ItemSearch' component={ItemSearch}/>
					<Route exact path='/settings' component={SettingsPage}/>
					<Route exact path='/item/:item' component={Item}/>
					<Route path='/Ingredients/:item/:person/:serving' component={IngredientsList}/>
					<Route exact path = '/purchase' component={Purchase}/>
				</IonRouterOutlet>
			</IonSplitPane>
		</IonPage>
	);
};
export default Menu;