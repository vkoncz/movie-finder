import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React from 'react';
import { Details } from '../models/MovieDetails';
import { star, pricetag } from 'ionicons/icons';
import { MovieInfo } from '../models/MovieInfo';

interface Props {
  details: Details;
  onMovieClick: (movieInfo: MovieInfo) => void;
}

export const SearchResultCard: React.FC<Props> = ({ details, onMovieClick }) => {
  return (
    <IonCard
      button={true}
      onClick={() => {
        onMovieClick({ title: details.title, imdb: details.externalIds.imdb });
      }}
    >
      <IonCardHeader color="medium">
        <IonCardTitle>{details.title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonItem lines="none">
          <IonIcon icon={star} slot="start" size="small"></IonIcon>
          <IonLabel>{details.rating}</IonLabel>
        </IonItem>
        <IonItem lines="none">
          <IonIcon icon={pricetag} slot="start" size="small"></IonIcon>
          <IonLabel>{details.genres.map(genre => genre.name).join(', ')}</IonLabel>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
};
