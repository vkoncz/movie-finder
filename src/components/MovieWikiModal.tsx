import React from 'react';

interface Props {
  movieTitle: string;
}

export const MovieWikiModal: React.FC<Props> = ({ movieTitle }) => {
  return <div>Movie modal for {movieTitle}</div>;
};
