import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { api } from "../api/testApi.js";
import { Logout } from "../components/Logout.jsx";

export const Dashboard = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const token = await getAccessTokenSilently();

    const res = await api.get("/test", { 
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setItems(res.data);
  };

  const addItem = async () => {
    const token = await getAccessTokenSilently();

    await api.post(
      "/test",
      { working: true },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            Working: {item.working ? "true" : "false"}
          </li>
        ))}
      </ul>
      <Logout />
    </div>
  );
}
