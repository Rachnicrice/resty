import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

import superagent from 'superagent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      loading: false,
    };
  }

  callApi = (requestParams) => {
    let method = requestParams.method.toUpperCase();
    let url = requestParams.url;

    this.setState({loading: true});

    superagent(method, url).end((err, res) => {
      const data = res.body;
      this.setState({data, requestParams});
      this.setState({loading: false});
    });

  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        {this.state.loading ? <div>Loading...</div> : <div></div>}
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
