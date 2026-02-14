import { useEffect, useState } from "react";
import { fetchTests, addTest } from "../api/testApi";

export default function TestList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const tests = await fetchTests();
    setData(tests);
  };

  const handleAdd = async () => {
    await addTest({ working: true });
    loadData(); // refresh list
  };

  return (
    <div>
      <h1>Test Items</h1>
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {item.working ? "Working ✅" : "Not working ❌"} (ID: {item._id})
          </li>
        ))}
      </ul>
    </div>
  );
}
