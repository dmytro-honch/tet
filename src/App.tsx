import React from 'react';

import './styles/App.css';

import { useAppSelector } from './hoocks';
import { selectTheme } from './store/themeSwitcherReducer';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { TetrisPage } from './pages/TetrisPage';

function App() {
  const currentTheme = useAppSelector(selectTheme);

  return (
    <div className={`${currentTheme} app-styles container`}>
      <Header />
      <React.Suspense fallback={<Loader />}>
        <TetrisPage />
      </React.Suspense>
    </div>
  );
}

// todo: https://pixabay.com/music/search/genre/video%20games/

export default App;
