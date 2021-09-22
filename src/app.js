import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App () {

  const [data, setData] = useState({});
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = (requestParams) => {
    setLoading(true);
    setRequest(requestParams);
  };

  useEffect( async () => {
    if (request) {
      let response = await axios(request);
      setData(response.data);
      setLoading(false);
    } 
  }, [request]);

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {data.method}</div>
      <div>URL: {data.url}</div>
      {loading ? <div>Loading...</div> : <div></div>}
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
