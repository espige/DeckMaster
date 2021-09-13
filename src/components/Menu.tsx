import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import * as React from 'react';
import {
  addCircleOutline,
  createOutline,
  downloadOutline,
} from 'ionicons/icons';

const Menu2: React.FC = () => (
  <IonMenu contentId="main" side="start" type="overlay">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem button>
          <IonIcon icon={addCircleOutline} slot="start" />
          <IonLabel>Add Card</IonLabel>
        </IonItem>
        <IonItem button>
          <IonIcon icon={createOutline} slot="start" />
          <IonLabel>Edit Deck</IonLabel>
        </IonItem>
        <IonItem button>
          <IonIcon icon={downloadOutline} slot="start" />
          <IonLabel>Export</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Menu2;
