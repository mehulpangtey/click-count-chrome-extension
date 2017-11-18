import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';


const Find_id = document.querySelector(':scope #related');

const anchor = document.createElement('h1');
anchor.id = 'rcr-anchor-peve';

Find_id.prepend(anchor);

const proxyStore =  new Store({
  state: {},
  portName: 'RSC'
});

render(
  <Provider store={proxyStore}>
    <App/>
  </Provider>
  , document.getElementById('rcr-anchor-peve'));
