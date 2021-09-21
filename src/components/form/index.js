import { useState } from 'react';

import './form.scss';

function Form (props) {

  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }

  function handleClick (e) {
    setMethod(e.target.id);
  }

  function handleChange (e) {
    setUrl(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange={handleChange} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleClick} id="get">GET</span>
          <span onClick={handleClick} id="post">POST</span>
          <span onClick={handleClick} id="put">PUT</span>
          <span onClick={handleClick} id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;