import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

const url = "https://api.adviceslip.com/advice";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    fetch(url, { cache: "no-cache" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Data not found");
      })
      .then((data) => setData(data.slip))
      .catch((error) => alert(`${error.name}: ${error.message}`))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    setTimeout(fetchData, 1000);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <main>
      <Card data={data} onClick={handleClick} />
    </main>
  );
}

export default App;
