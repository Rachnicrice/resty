import React, { useState } from 'react';
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
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    setLoading(true);
    let response = await axios(requestParams);
    setData(response.data);
    setLoading(false);
  };

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
