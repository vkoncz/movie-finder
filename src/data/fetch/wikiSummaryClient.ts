import { movieConstants } from '../../constants';
import { WikiSummary } from '../../models/WikiSummary';

export async function wikiSummaryClient(title: string): Promise<WikiSummary> {
  const url = `${movieConstants.wikiSummaryUrl}/${encodeURIComponent(title)}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  });

  if (!response.ok) throw Error('Unsuccessful request');

  const wikiSummary: WikiSummary = await response.json();

  return wikiSummary;
}
