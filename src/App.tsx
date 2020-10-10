import React, { useState } from 'react';
import './App.css';
import { SearchBox } from './components/SearchBox';
import { TitleBar } from './components/TitleBar';
import { Details } from './models/MovieDetails';

// index.js:1 Warning: findDOMNode is deprecated in StrictMode.
// https://github.com/ionic-team/ionic-framework/issues/20972

function App() {
  const [searchResult, setSearchResult] = useState({
    isLoading: false,
    results: undefined as Details[] | undefined,
  });

  return (
    <>
      <TitleBar />
      <SearchBox resultChange={(isLoading, results) => setSearchResult({ isLoading, results })} />
    </>
  );
}

export default App;
