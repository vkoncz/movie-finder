export interface MovieDetails {
  data: {
    movies: {
      search: {
        edges: {
          node?: {
            details: Details;
          };
        }[];
      };
    };
  };
}

export interface Details {
  genres: {
    name: string;
  }[];
  rating: number;
  title: string;
}
