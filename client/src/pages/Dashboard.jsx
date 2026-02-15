import { Logout } from "../components/Logout.jsx";
import { useItems } from "../hooks/useItems.jsx";
import { useAuth0 } from "@auth0/auth0-react";

export const Dashboard = () => {
  const { items, postItem } = useItems();
  const { user } = useAuth0();


  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Welcome {user?.name}!</h3>
      <button onClick={postItem}>Add Item</button>

      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              Working: {item.working ? "true" : "false"}
            </li>
          ))}
        </ul>
      ) : (
        <span>No items found.</span>
      )}
      <Logout />
    </div>
  );
}
