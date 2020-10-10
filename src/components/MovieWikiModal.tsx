import { IonContent, IonSkeletonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { wikiSummaryClient } from '../data/fetch/wikiSummaryClient';

interface Props {
  movieTitle: string;
}

export const MovieWikiModal: React.FC<Props> = ({ movieTitle }) => {
  const [wikiSummary, setWikiSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [missingWiki, setMissingWiki] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setMissingWiki(false);

    wikiSummaryClient(movieTitle)
      .then(result => {
        setWikiSummary(result.extract);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setMissingWiki(true);
      });
  }, [movieTitle]);

  return (
    <>
      <IonToolbar color="medium">
        <IonTitle>{movieTitle}</IonTitle>
      </IonToolbar>
      <IonContent>
        <p className="ion-padding-start ion-padding-end">
          {isLoading ? (
            <>
              <IonSkeletonText animated style={{ width: '60%' }} />
              <IonSkeletonText animated />
              <IonSkeletonText animated style={{ width: '88%' }} />
              <IonSkeletonText animated style={{ width: '70%' }} />
            </>
          ) : (
            wikiSummary
          )}
          {missingWiki ? 'Cannot found Wikipedia article' : ''}
        </p>
      </IonContent>
    </>
  );
};
