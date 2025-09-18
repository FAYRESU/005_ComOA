// frontend/src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");

  const handleClick = () => {
    alert("คุณได้คลิกปุ่มแล้วเย่ะ!");
  };

  // GET /api/hello เมื่อโหลดหน้า
  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  // POST /api/greet
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/greet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    if (res.ok) {
      setGreet(data.message);
    } else {
      setGreet(data.error || "เกิดข้อผิดพลาด");
    }
  };

  return (
    <div className="container">
      <div className="card">
        {message && <p className="message">{message}</p>}
        <h1>React + Express Demo</h1>
        <button className="btn" onClick={handleClick}>
          คลิกที่นี่
        </button>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="กรอกชื่อของคุณ"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <button type="submit" className="btn">
            ส่งชื่อ
          </button>
        </form>

        {greet && <p className="message">{greet}</p>}
      </div>
    </div>
  );
}

export default App;
