import React from 'react';

import './App.css';
import HeaderComponent from './components/header';
import BodyContainer from './components/body';
import FooterComponent from './components/footer'

import { Provider } from "react-redux";
import counterStore from './redux/store';

function App() {
  return (
    <Provider store={counterStore}>
    <HeaderComponent/>
   <BodyContainer />
   <FooterComponent />
    </Provider>
  
  );
}

export default App;
