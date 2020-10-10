import { IonApp, IonContent } from '@ionic/react';
import React, { useState } from 'react';
import './App.css';
import { SearchBox } from './components/SearchBox';
import { SearchResults } from './components/SearchResults';
import { TitleBar } from './components/TitleBar';
import { Details } from './models/MovieDetails';

// index.js:1 Warning: findDOMNode is deprecated in StrictMode.
// https://github.com/ionic-team/ionic-framework/issues/20972

function App() {
  const [searchResult, setSearchResult] = useState<Details[] | undefined>();

  return (
    <IonApp>
      <IonContent>
        <TitleBar />
        <SearchBox resultChange={setSearchResult} />
        <SearchResults results={searchResult} />
      </IonContent>
    </IonApp>
  );
}

export default App;
