import React from 'react';
import './App.css';
import { SearchBox } from './components/SearchBox';
import { TitleBar } from './components/TitleBar';

// index.js:1 Warning: findDOMNode is deprecated in StrictMode.
// https://github.com/ionic-team/ionic-framework/issues/20972

function App() {
  return (
    <>
      <TitleBar />
      <SearchBox />
    </>
  );
}

export default App;
