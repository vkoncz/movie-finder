import {
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonRow,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { wikiSummaryClient } from '../data/fetch/wikiSummaryClient';
import { chevronBack, openOutline } from 'ionicons/icons';
import { MovieInfo } from '../models/MovieInfo';

interface Props {
  movieInfo: MovieInfo;
  modalClose: () => void;
}

export const MovieWikiModal: React.FC<Props> = ({ movieInfo, modalClose }) => {
  const [wikiSummary, setWikiSummary] = useState('');
  const [wikiLink, setWikiLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [missingWiki, setMissingWiki] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setMissingWiki(false);

    wikiSummaryClient(movieInfo.title)
      .then(result => {
        setWikiSummary(result.extract);
        setWikiLink(result.content_urls.desktop.page);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setMissingWiki(true);
      });
  }, [movieInfo]);

  return (
    <>
      <IonToolbar color="medium">
        <IonTitle>{movieInfo.title}</IonTitle>
      </IonToolbar>
      <IonContent>
        <p className="ion-padding-start ion-padding-end">
          {isLoading ? (
            <>
              <IonSkeletonText animated style={{ width: '60%' }} />
              <IonSkeletonText animated />
              <IonSkeletonText animated style={{ width: '90%' }} />
              <IonSkeletonText animated style={{ width: '70%' }} />
            </>
          ) : (
            wikiSummary
          )}
          {missingWiki ? 'Cannot found Wikipedia article' : ''}
        </p>

        {!isLoading && !missingWiki ? (
          <IonRow>
            <IonButton href={wikiLink} target="_blank" color="light">
              Open Wikipedia article
              <IonIcon icon={openOutline} />
            </IonButton>
          </IonRow>
        ) : (
          ''
        )}

        <IonRow>
          <IonButton
            href={`https://www.imdb.com/title/${movieInfo.imdb}`}
            target="_blank"
            color="light"
          >
            IMDB
            <IonIcon icon={openOutline} />
          </IonButton>
        </IonRow>

        <IonRow>
          <IonCol class="ion-text-center">
            <IonButton
              color="warning"
              class="ion-align-self-center"
              shape="round"
              onClick={modalClose}
            >
              <IonIcon icon={chevronBack} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </>
  );
};
