import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { api } from "../api/testApi.js";

export const TestList = () => {
  const { getAccessTokenSilently } = useAuth0();

  const fetchData = async () => {
    try{
      const token = await getAccessTokenSilently();

      const res = await api.get("/test", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log("Data fetched:", res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
