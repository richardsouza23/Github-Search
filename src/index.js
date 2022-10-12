import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { githubApiBuilder } from './api/githubApiBuilder';
import reducers from './state/reducers';

import App from './component/app/App';

import './index.css';
import "./reset.css";
import rootSaga from './sagas/rootSaga';
import { Provider } from 'react-redux';


const githubApiBaseUrl = process.env.REACT_APP_GITHUB_API_URL || "";
const githubApiToken = process.env.REACT_APP_GITHUB_API_TOKEN || "";
const githubApiMaxRepoPages = process.env.REACT_APP_MAX_REPO_PAGES_QTY || "";

const githubApi = githubApiBuilder(githubApiBaseUrl, githubApiToken, githubApiMaxRepoPages);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga, {githubApi});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);