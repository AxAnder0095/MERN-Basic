import { Logout } from "../components/Logout.jsx";
import { useItems } from "../hooks/useItems.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Dashboard.scss";

export const Dashboard = () => {
  const { items, postItem } = useItems();
  const { user } = useAuth0();

  if (!items) {
    return <p>Loading...</p>;
  }


  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <h3>Welcome {user?.name}!</h3>
        <button onClick={postItem}>Add Item</button>

        <Logout />
      </div>
    </div>
  );
}



// {items.length > 0 ? (
//         <ul>
//           {items.map((item) => (
//             <li key={item._id}>
//               Working: {item.working ? "true" : "false"}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <span>No items found.</span>
//       )}