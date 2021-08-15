import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './styles/App.css';

import { routingTree } from './routing/rouringTree';
import { useAppSelector } from './hoocks';
import { selectTheme } from './store/themeSwitcherReducer';
import { Loader } from './components/Loader';
import { Header } from './components/Header';


function App() {
  const currentTheme = useAppSelector(selectTheme);

  return <Router>
    <div className={`${currentTheme} app-styles container`}>
      <Header />
      <React.Suspense fallback={<Loader />}>
        <Switch>
          {routingTree.map((route) => <Route {...route} />)}
        </Switch>
      </React.Suspense>
    </div>
  </Router>;
}


export default App;
