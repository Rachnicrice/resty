import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const initialState = {
  activeState: null,
  history: [],
  loading: false,
};

function appReducer ( state, action) {
  let {type, payload} = action;

  switch(type) {

  case 'new-request':
    return { ...state, activeState: {request: payload} };

  case 'set-request-data':
    return { ...state, activeState: {...state.activeState, data: payload} };

  case 'add-to-history':
    return { ...state, history: [...state.history, payload]};

  case 'display-history':
    return { ...state, activeState: state.history.filter( request => request.id === payload )[0]};

  case 'set-loading':
    return { ...state, loading: payload};
    
  default:
    return state;
  }

}

function App () {
 
  const [state, dispatch] = useReducer(appReducer, initialState);

  const callApi = (requestParams) => {
    let request = {
      type: 'new-request',
      payload: requestParams,
    };

    let loading = {
      type: 'set-loading',
      payload: true,
    };

    if (state.activeState) {
      let history = {
        type: 'add-to-history',
        payload: state.activeState,
      };

      dispatch(history);
    }

    dispatch(loading);
    dispatch(request);
  };

  useEffect( async () => {
    if (state.activeState) {
      let response = await axios(state.activeState.request);

      let loading = {
        type: 'set-loading',
        payload: false,
      };

      let data = {
        type:'set-request-data',
        payload: response.data,
      };

      dispatch(data);
      dispatch(loading);
    } 
  }, [state.activeState]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.activeState ? state.activeState.request.method : ''}</div>
      <div>URL: {state.activeState ? state.activeState.request.url : ''}</div>
      {state.loading ? <div>Loading...</div> : <div></div>}
      <Form handleApiCall={callApi} />
      <History history={state.history}></History>
      <Results data={state.activeState} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
