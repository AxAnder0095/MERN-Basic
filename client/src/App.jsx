import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(`/api/test`);
    setData(data);
  };

  const addItem = async () => {
    await axios.post(`/api/test`, { working: true });
    fetchData();
  };

  return (
    <div>
      <h1>Test Data</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            <p>ID: {item._id}</p>
            <p>Status: {item.working ? "✅" : "❌"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
