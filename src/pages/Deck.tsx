import React, { useEffect } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';
import * as Scry from 'scryfall-sdk';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    const getCard = async () => {
      const card = await Scry.Cards.byName('Omnath, Locus of the Roill', true);
      console.log(card);
      const rulings = await Scry.Rulings.byId(card.id);
      console.log(rulings);
    };
    getCard();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
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
      </IonContent>
    </IonPage>
  );
};

export default Page;
