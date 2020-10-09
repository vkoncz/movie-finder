import React from 'react';
import { IonButton, IonCol, IonRow, IonGrid, IonIcon, IonSearchbar } from '@ionic/react';
import { search, videocam } from 'ionicons/icons';
import './SearchBox.css';

export const SearchBox: React.FC = () => {
  return (
    <>
      <IonGrid class="ion-center">
        <IonRow class="ion-align-items-center">
          <IonCol class="ion-no-padding">
            <IonSearchbar autocomplete="on" placeholder="Search movies" searchIcon={videocam} />
          </IonCol>
          <IonCol size="auto" class="ion-no-padding ion-align-self-center">
            <IonButton>
              <IonIcon icon={search} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};
