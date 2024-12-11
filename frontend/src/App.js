import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/monitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Error: Unable to connect to the backend.');
    }
  };

  return (
    <div>
      <h1>Website Monitor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Monitor</button>
      </form>
    </div>
  );
}

export default App;
