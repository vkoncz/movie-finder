import React, { useState } from 'react';
import {
  IonButton,
  IonCol,
  IonRow,
  IonGrid,
  IonIcon,
  IonSearchbar,
  IonToast,
  IonLoading,
} from '@ionic/react';
import { search, videocam } from 'ionicons/icons';
import './SearchBox.css';
import { Details } from '../models/MovieDetails';
import { graphSearchClient } from '../data/fetch/graphSearchClient';

interface Props {
  resultChange: (results?: Details[]) => void;
}

export const SearchBox: React.FC<Props> = ({ resultChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    graphSearchClient(searchTerm)
      .then(result => {
        resultChange(result);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Connection error:', error);
        setShowError(true);
        setIsLoading(false);
      });
  };

  return (
    <>
      <IonGrid class="ion-center search-container">
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
            <IonButton onClick={fetchData} class="search-button">
              <IonIcon icon={search} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonLoading isOpen={isLoading} message="Searching movies..." />

      <IonToast
        isOpen={showError}
        onDidDismiss={() => setShowError(false)}
        message="Connection error, please try it again later"
        duration={5000}
      />
    </>
  );
};
