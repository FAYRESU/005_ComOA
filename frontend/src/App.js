import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // The backend URL is read from an environment variable
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/hello`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error("Error fetching data: ", error);
        setMessage("Failed to load data from backend.");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Message from backend: <strong>{message}</strong>
        p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
