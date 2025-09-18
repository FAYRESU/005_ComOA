import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    alert("คุณได้คลิกปุ่มแล้วเย่ะ!");
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="card">
        {message && <p className="message">{message}</p>}
        <h1>React + Express Demo</h1>
        <button onClick={handleClick} className="btn">
          คลิกที่นี่
        </button>
      </div>
    </div>
  );
}

export default App;
