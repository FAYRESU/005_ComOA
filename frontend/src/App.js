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
    <>
      {message && <p style={{ textAlign: "center" }}>{message}</p>}
      <div style={{ textAlign: "center", marginTop: "20%" }}>
        <h1>React + Express Demo</h1>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          คลิกที่นี่
        </button>
      </div>
    </>
  );
}

export default App;
