/* eslint-disable camelcase */
import {
  IonCard,
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
  const { name, type_line, image_uris } = card;
  return (
    <IonCard>
      <IonImg src={image_uris?.art_crop} />
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>{type_line}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default CardDisplay;
