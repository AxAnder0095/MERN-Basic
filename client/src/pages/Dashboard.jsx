import { Logout } from "../components/Logout.jsx";
import { useState } from "react";
import { useItems } from "../hooks/useItems.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "../components/Navbar.jsx";
import "../styles/Dashboard.scss";

export const Dashboard = () => {
  const [showPost, setShowPost] = useState(false);
  const { items, postItem } = useItems();
  const { user } = useAuth0();



  if (!items || items.length === 0) {
    return <p>Loading...</p>;
  }


  return (
    <div className="dashboard">
      <div className="dashboard-content-wrapper">
        <div className="dashboard-content">
          <div className="navigation">
            <Navbar />
          </div>
          <div className="posts">


            {items.map((item) => (
              <div key={item._id}>
                <button
                  className="post"
                  id={showPost ? "hidden" : ""}
                  onClick={() => setShowPost((prev) => !prev)}>
                  <p>UserID: {item.userId}</p>
                  <p>Working: {item.working ? "true" : "false"}</p>
                </button>
                {showPost && (
                  <div className="full-post">
                    <button className="close-post" onClick={() => setShowPost(false)}>Close</button>
                    <p>UserID: {item.userId}</p>
                    <p>Working: {item.working ? "true" : "false"}</p>
                    <p>Created At: {new Date(item.createdAt).toLocaleString()}</p>
                  </div>
                )}
              </div>
            ))}


          </div>
          <div className="post-count"></div>
          <div className="fav-image"></div>
          <div className="something"></div>
          <div className="calendar"></div>
        </div>
      </div>
    </div>
  );
}



{/* <h1>Dashboard</h1>
        <h3>Welcome {user?.name}!</h3>
        <button onClick={postItem}>Add Item</button>

        <Logout /> */}

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