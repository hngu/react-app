import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BurgerApp from './containers/BurgerApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BurgerApp />, document.getElementById('root'));
registerServiceWorker();
