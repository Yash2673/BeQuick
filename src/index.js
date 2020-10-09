import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { rootReducer } from './store/reducers/rootReducer';
import {getFirebase,reactReduxFirebase} from 'react-redux-firebase'
import {getFirestore,reduxFirestore} from 'redux-firestore'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady : true }),
    reduxFirestore(fbConfig)
    )
  );

  store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
