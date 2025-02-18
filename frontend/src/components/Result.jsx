const Result = ({ decoded }) => {
    return (
      <pre className="jwt-result">
        {JSON.stringify(decoded, null, 2)}
      </pre>
    );
  };
  
  export default Result;
  