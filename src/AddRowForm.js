import React, { useState } from 'react';

const AddRowForm = ({ onAddRow, tableLength }) => {

  const [id, setId] = useState('')
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: We will need to update our function for generating ID after we add a 
    // remove row function, because keys still need to be unique
    onAddRow({ id: tableLength + 1, name: name, age: age });
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <button type="submit" >Add Row</button>
    </form>
  );
};

export default AddRowForm;