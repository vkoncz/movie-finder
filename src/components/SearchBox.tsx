import React, { useState } from 'react';
import { IonButton, IonCol, IonRow, IonGrid, IonIcon, IonSearchbar, IonToast } from '@ionic/react';
import { search, videocam } from 'ionicons/icons';
import './SearchBox.css';
import { Details } from '../models/MovieDetails';
import { graphSearchClient } from '../data/fetch/graphSearchClient';

interface Props {
  resultChange: (isLoading: boolean, results?: Details[]) => void;
}

export const SearchBox: React.FC<Props> = ({ resultChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showError, setShowError] = useState(false);

  const fetchData = () => {
    resultChange(true);
    graphSearchClient(searchTerm)
      .then(result => {
        resultChange(false, result);
      })
      .catch(error => {
        console.log('Connection error:', error);
        setShowError(true);
        resultChange(false);
      });
  };

  return (
    <>
      <IonGrid class="ion-center">
        <IonRow class="ion-align-items-center">
          <IonCol class="ion-no-padding">
            <IonSearchbar
              autocomplete="on"
              placeholder="Search movies"
              searchIcon={videocam}
              value={searchTerm}
              onIonChange={e => setSearchTerm(e.detail.value!)}
              onKeyUp={e => {
                if (e.key === 'Enter') fetchData();
              }}
            />
          </IonCol>
          <IonCol size="auto" class="ion-no-padding ion-align-self-center">
            <IonButton onClick={fetchData}>
              <IonIcon icon={search} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonToast
        isOpen={showError}
        onDidDismiss={() => setShowError(false)}
        message="Connection error, please try it again later"
        duration={5000}
      />
    </>
  );
};
