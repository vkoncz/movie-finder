import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
} from '@ionic/react';
import React from 'react';
import { Details } from '../models/MovieDetails';
import { star, pricetag } from 'ionicons/icons';

interface Props {
  results?: Details[];
}

export const SearchResults: React.FC<Props> = ({ results }) => {
  const message = !results || results?.length ? '' : 'No results found';

  return (
    <IonGrid>
      <IonRow>
        {results
          ? results.map(result => (
              <IonCol sizeXl="3" sizeLg="4" sizeMd="6" size="12">
                <IonCard>
                  <IonCardHeader color="medium">
                    <IonCardTitle>{result.title}</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    <IonItem lines="none">
                      <IonIcon icon={star} slot="start" size="small"></IonIcon>
                      <IonLabel>{result.rating}</IonLabel>
                    </IonItem>
                    <IonItem lines="none">
                      <IonIcon icon={pricetag} slot="start" size="small"></IonIcon>
                      <IonLabel>{result.genres.map(genre => genre.name).join(', ')}</IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))
          : ''}
        <IonText>{message}</IonText>
      </IonRow>
    </IonGrid>
  );
};
