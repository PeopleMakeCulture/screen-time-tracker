import React, { useState }  from 'react';
import AddRowForm from './AddRowForm.js'

const Table = () => {

  const seedData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 28 },
    { id: 4, name: 'Alice', age: 35 },
  ];

  const [ tableData, setTableData ] = useState(seedData)

  const handleAddRow = (row) => {
    setTableData([...tableData, row]);
  };

	return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
              <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddRowForm tableLength={tableData.length} onAddRow={handleAddRow} />
    </>
  );
};

export default Table;