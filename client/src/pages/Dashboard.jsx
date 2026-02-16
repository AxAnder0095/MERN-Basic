import { useState } from "react";
import { useItems } from "../hooks/useItems.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "../components/Navbar.jsx";
import "../styles/Dashboard.scss";

import worm from "../imgs/wormsquare.jpg";

import { IoCloseCircleSharp } from "react-icons/io5";

export const Dashboard = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const { items } = useItems();
  useAuth0();

  const getItemId = (item, index) => {
    if (typeof item?._id === "string") return item._id;
    if (typeof item?._id === "number") return String(item._id);
    if (item?._id?.$oid) return item._id.$oid;
    if (item?._id?.toString && item._id.toString() !== "[object Object]") {
      return item._id.toString();
    }

    return `item-${index}`;
  };
  const selectedPost = items.find((item, index) => getItemId(item, index) === selectedPostId);

  return (
    <div className="dashboard">
      <div className="dashboard-content-wrapper">
        <div className="dashboard-content">
          <div className="navigation">
            <Navbar />
          </div>
          <div className="posts">
            <div className="posts-wrapper">
              {items && items.length > 0 ?
                (
                  items.map((item, index) => {
                    const itemId = getItemId(item, index);

                    return (
                      <div key={itemId}>
                        <button
                          className="post"
                          id={selectedPostId ? "hidden" : ""}
                          onClick={() => setSelectedPostId(itemId)}>
                          <p>{item.title}</p>
                        </button>
                      </div>
                    )
                  })
                ) :
                (<p style={{ color: 'black' }}>No posts found.</p>)}
              {selectedPost && (
                <div className="full-post">
                  <button className="close-post" onClick={() => setSelectedPostId(null)}><IoCloseCircleSharp /></button>
                  <p className="date-posted">Date: {new Date(selectedPost.date).toLocaleString()}</p>
                  <h2>{selectedPost.title}</h2>
                  <p className="content">{selectedPost.content}</p>
                </div>
              )}
            </div>
          </div>
          <div className="post-count">
            {items && items.length > 0 ?
              <div>
                <p className="post-count-title">Total Posts</p>
                <p className="post-count-number">{items.length}</p>
              </div> :
              <p>No posts to count.</p>}
          </div>
          <div className="fav-image">
            <img src={worm} alt="Worm" className="fav-img" />
          </div>
          <div className="something"></div>
          <div className="calendar"></div>
        </div>
      </div>
    </div>
  );
}