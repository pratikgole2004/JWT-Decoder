const JWTInput = ({ token, setToken, decode }) => {
    return (
      <div>
        <textarea
          className="jwt-input"
          placeholder="Enter JWT Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        ></textarea>
        <button className="decode-button" onClick={decode}>
          Decode
        </button>
      </div>
    );
  };
  
  export default JWTInput;
  