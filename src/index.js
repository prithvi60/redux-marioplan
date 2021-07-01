
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducer/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// pass root reducer to create store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();