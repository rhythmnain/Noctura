import React, { useEffect, useState } from "react";
import { fetchData } from "../api";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const result = await fetchData();
      setData(result);
    }
    getData();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Noctura</h1>
      {data ? <p>Data from backend: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
