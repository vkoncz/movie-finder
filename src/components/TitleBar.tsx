import React from 'react';
import { IonTitle, IonToolbar } from '@ionic/react';

export const TitleBar: React.FC = () => {
  return (
    <IonToolbar color="primary">
      <IonTitle>Movie Finder</IonTitle>
    </IonToolbar>
  );
};
