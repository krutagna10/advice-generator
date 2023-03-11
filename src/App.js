import { useEffect, useState } from "react";

const url = "https://api.adviceslip.com/advice";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, { cache: "no-cache" });
      const data = await response.json();
      setData(data.slip);
      console.log(data.slip);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="app" style={{ maxWidth: "32rem" }}>
      <p>Advice Number: {data.id}</p>
      <h1>{data.advice}</h1>
      <button onClick={handleClick}>Generate Advice</button>
    </div>
  );
}

export default App;
