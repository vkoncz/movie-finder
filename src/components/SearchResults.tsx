import { IonCol, IonGrid, IonModal, IonRow, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { Details } from '../models/MovieDetails';
import { MovieInfo } from '../models/MovieInfo';
import { MovieWikiModal } from './MovieWikiModal';
import { SearchResultCard } from './SearchResultCard';

interface Props {
  results?: Details[];
}

export const SearchResults: React.FC<Props> = ({ results }) => {
  const message = !results || results?.length ? '' : 'No results found';
  const [selectedMovieInfo, setSelectedMovieInfo] = useState<MovieInfo>({ imdb: '', title: '' });
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <IonGrid>
        <IonRow>
          {results
            ? results.map((result, key) => (
                <IonCol key={key} sizeXl="3" sizeLg="4" sizeMd="6" size="12">
                  <SearchResultCard
                    details={result}
                    onMovieClick={title => {
                      setModalVisible(true);
                      setSelectedMovieInfo(title);
                    }}
                  />
                </IonCol>
              ))
            : ''}
          <IonText>{message}</IonText>
        </IonRow>
      </IonGrid>

      <IonModal isOpen={modalVisible} onDidDismiss={() => setModalVisible(false)}>
        <MovieWikiModal movieInfo={selectedMovieInfo} modalClose={() => setModalVisible(false)} />
      </IonModal>
    </>
  );
};
