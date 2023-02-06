import { IonButton,IonContent, IonMenuButton,IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
				<IonButton slot = "start">
					<IonMenuButton/>
					</IonButton>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Add some content here…
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
