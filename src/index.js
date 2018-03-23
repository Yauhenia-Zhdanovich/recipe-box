import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import store from "./store";
import { saveStore } from './localStorage';
import throttle from 'lodash/throttle';

store.subscribe(throttle(()=>{
    saveStore(store.getState());
},1000));


ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

