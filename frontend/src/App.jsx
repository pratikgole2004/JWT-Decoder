import { useState } from "react";
import axios from "axios";
import JWTInput from "./components/JWTInput";
import Result from "./components/Result";
import "./index.css";

function App() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState(null);
  const [error, setError] = useState("");

  async function handleDecode() {
    setError("");
    setDecoded(null);
    if (!token) return setError("Please enter a JWT");

    try {
      const response = await axios.post("http://localhost:5000/decode", { token });
      setDecoded(response.data.decoded);
    } catch {
      setError("Invalid JWT");
    }
  }

  return (
    <div className="container">
      <h1>JWT Decoder</h1>
      <JWTInput token={token} setToken={setToken} decode={handleDecode} />
      {error && <p className="error">{error}</p>}
      {decoded && <Result decoded={decoded} />}
    </div>
  );
}

export default App;
