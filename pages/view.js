import { useEffect, useState } from 'react';

function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('/api/getData');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h1>Data Page</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
              <p>Email: {item.email}</p>
              <p>City: {item.city}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default DataPage;
