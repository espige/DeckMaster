import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import * as Scry from 'scryfall-sdk';

const CardSearch: React.FC = () => {
  const [searchString, setSearchString] = useState('');
  const [cardList, setCardList] = useState<string[]>([]);

  useEffect(() => {
    const getCard = async () => {
      // const card = await Scry.Cards.byName('Omnath, Locus of the Roill', true);
      // console.log(card);
      // const rulings = await Scry.Rulings.byId(card.id);
      // console.log(rulings);
      const cards = await Scry.Cards.autoCompleteName(searchString);
      setCardList(cards);
    };
    getCard();
  }, [searchString]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Card Search</IonTitle>
        </IonToolbar>
        <IonSearchbar
          value={searchString}
          onIonChange={(e) => setSearchString(e.detail.value!)}
        />
      </IonHeader>
      <IonContent>
        <IonList className="ion-padding">
          {cardList.map((card) => (
            <IonItem key={card}>{card}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CardSearch;
