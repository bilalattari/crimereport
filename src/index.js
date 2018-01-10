import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import store from'./store'
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import SignUp from './signUp'


ReactDOM.render(
  <Provider store = {store}>
  <MuiThemeProvider>
<App />
  </MuiThemeProvider>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
