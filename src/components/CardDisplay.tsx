/* eslint-disable camelcase */
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';
import React from 'react';
import { Card } from 'scryfall-sdk';

interface CardDisplayProps {
  card: Card;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card }) => {
  console.log(card);
  const {
    name,
    type_line,
    image_uris,
    mana_cost,
    oracle_text,
    power,
    toughness,
  } = card;
  return (
    <IonCard>
      <IonImg alt={`Art for ${name}`} src={image_uris?.art_crop} />
      <IonCardHeader>
        <IonCardSubtitle>{mana_cost}</IonCardSubtitle>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>{type_line}</IonCardSubtitle>
        <IonCardContent
          className="ion-no-padding"
          style={{ whiteSpace: 'pre-line' }}
        >
          {oracle_text}
        </IonCardContent>
        {power && toughness && (
          <IonCardContent>
            {power}/{toughness}
          </IonCardContent>
        )}
      </IonCardHeader>
    </IonCard>
  );
};

export default CardDisplay;
