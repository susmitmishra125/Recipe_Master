import React, { useState } from 'react';
import { IonList, IonItem, IonMenuButton, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonInput, IonDatetime } from '@ionic/react';

const Purchase: React.FC = () => {
	const [showModal, setShowModal] = useState(false);
	const [eventName, setEventName] = useState('');
	const [eventDate, setEventDate] = useState('');
	const [events, setEvents] = useState<Array<{ name: string, date: string }>>([]);

	const handleEventNameChange = (e: any) => {
		setEventName(e.target.value);
	};

	const handleEventDateChange = (e: any) => {
		setEventDate(e.target.value);
	};

	const handleAddEvent = () => {
		setEvents([...events, { name: eventName, date: eventDate }]);
		setShowModal(false);
		setEventName('');
		setEventDate('');
	};
	const handleCancel = () => {
		setShowModal(false);
		setEventName('');
		setEventDate('');
	};

	const CancelModalButton: React.FC = () => {
		return (
			<IonButton onClick={() => setShowModal(false)}>
				Cancel
			</IonButton>
		);
	};
	const sortedEvents = events.sort((a, b) => {
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	});
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButton slot="start">
						<IonMenuButton />
					</IonButton>
					<IonTitle>Events</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonButton onClick={() => setShowModal(true)}>
					Add Event
				</IonButton>
				{sortedEvents.map((event, index) => (
					<p key={index}>{index + 1}. {event.name} - {event.date}</p>
				))}
				<IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
					<IonHeader>
						<IonToolbar>
							<IonTitle>Add Event</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonContent className='ion-padding'>
						<IonList>
							<IonItem>
								<IonInput
									placeholder="Event Name"
									value={eventName}
									onIonChange={handleEventNameChange}
								/>
							</IonItem>
							<IonItem>
								<IonInput type="date"
									placeholder="Select Date"
									value={eventDate}
									onIonChange={handleEventDateChange}
								/>
							</IonItem>

						</IonList>
						<IonButton onClick={handleAddEvent}>Add Event</IonButton>
						<CancelModalButton />
					</IonContent>
				</IonModal>
			</IonContent>
		</IonPage>
	);
};

export default Purchase;