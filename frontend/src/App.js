import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // State for the initial message from /api/hello
  const [initialMessage, setInitialMessage] = useState('Loading...');
  
  // State for the interactive greeting form
  const [nameInput, setNameInput] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');

  // Fetch the initial message when the component mounts
  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/hello`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setInitialMessage(data.message))
      .catch(error => {
        console.error("Error fetching initial data: ", error);
        setInitialMessage("Failed to load data from backend.");
      });
  }, []);

  // Handle the form submission to greet the user
  const handleGreetSubmit = async (event) => {
    event.preventDefault(); // Prevent the browser from reloading the page
    if (!nameInput) {
      setGreetingMessage('Please enter a name.');
      return;
    }

    const apiUrl = `${process.env.REACT_APP_API_URL}/api/greet`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nameInput }),
      });
      const data = await response.json();
      if (response.ok) {
        setGreetingMessage(data.message);
      } else {
        setGreetingMessage(data.error || 'An error occurred.');
      }
    } catch (error) {
      console.error("Error posting data: ", error);
      setGreetingMessage('Failed to connect to the backend.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Display the initial message */}
        <p>{initialMessage}</p>

        {/* Interactive Greeting Form */}
        <form onSubmit={handleGreetSubmit}>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Enter your name"
          />
          <button type="submit">Greet Me!</button>
        </form>

        {/* Display the personalized greeting */}
        {greetingMessage && <p style={{ marginTop: '20px' }}>{greetingMessage}</p>}

      </header>
    </div>
  );
}

export default App;
