import React, { useContext, useState } from 'react';
import {
  IonActionSheet,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  NavContext,
} from '@ionic/react';
import { useParams } from 'react-router';
import { addCircleOutline } from 'ionicons/icons';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { navigate } = useContext(NavContext);
  const [actionsOpen, setActionsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setActionsOpen(true)}>
              <IonIcon slot="icon-only" icon={addCircleOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>TEST</h1>
        <IonActionSheet
          isOpen={actionsOpen}
          onDidDismiss={() => setActionsOpen(false)}
          buttons={[
            {
              text: 'Add Card',
              handler: () => {
                navigate('/search', 'forward');
              },
            },
            {
              text: 'Edit Deck',
            },
            {
              text: 'Export',
            },
            {
              text: 'Save',
            },
            {
              text: 'Cancel',
              role: 'cancel',
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Page;
