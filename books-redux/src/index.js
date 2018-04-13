import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducer from './store/reducers'; // file je index.js pa ne mora
import { createStore } from 'redux';

const store = createStore(reducer);

ReactDOM.render
((
<Provider store={store}>
    <App />
</Provider>
), document.getElementById('root'));
registerServiceWorker();
