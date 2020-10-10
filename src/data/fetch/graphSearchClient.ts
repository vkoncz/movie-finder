import { movieConstants } from '../../constants';
import { Details, MovieDetails } from '../../models/MovieDetails';

export async function graphSearchClient(searchTerm: string): Promise<Details[]> {
  const query = `{
      movies {
        search(term: "${searchTerm}") {
          edges {
            node {
              details {
                title
                rating
                genres {
                  name
                }
              }
            }
          }
        }
      }
    }`;

  const response = await fetch(movieConstants.tmdbUrl, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify({ query, variables: null }),
  });

  const movieDetails: MovieDetails = await response.json();

  return movieDetails.data
    ? movieDetails.data.movies.search.edges
        .filter(edge => edge.node)
        .map(edge => edge.node!.details)
    : [];
}
