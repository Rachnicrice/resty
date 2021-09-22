import { useState } from 'react';

import './form.scss';

function Form (props) {

  const [formData, setFormData] = useState({});

  function handleSubmit (e) {
    e.preventDefault();
    props.handleApiCall(formData);
  }


  function handleChange (e) {
    const { name, value, id } = e.target;
    console.log('name ', e.target);
    id ? setFormData({ ...formData, method: id }) : setFormData({ ...formData, [name]: value });
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
          <span className={ formData.method === 'get' ? 'active' : '' } onClick={handleChange} id="get">GET</span>
          <span className={ formData.method === 'post' ? 'active' : '' } onClick={handleChange} id="post">POST</span>
          <span className={ formData.method === 'put' ? 'active' : '' } onClick={handleChange} id="put">PUT</span>
          <span className={ formData.method === 'delete' ? 'active' : '' } onClick={handleChange} id="delete">DELETE</span>
        </label>
        <label className="requestJson">
          <input onChange={handleChange} name='data' type='text' />
        </label>
      </form>
    </>
  );
}

export default Form;