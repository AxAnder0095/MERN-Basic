import { useAuth0 } from "@auth0/auth0-react";
import { SignIn } from "./Signin.jsx";
import { SignUp } from "./SignUp.jsx";
import { Navigate } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import "../styles/AuthButtons.scss";

export const AuthButtons = () => {
  const { isAuthenticated, error } = useAuth0();

  return (
    <div>
      {error && <p>{error.message}</p>}
      {!isAuthenticated ? (
        <div className="splash-page">
          <div className="splash-content">
            <p className="splash-title">LifeBook</p>
            <p className="splash-sub-title">Your personal journaling app</p>
            <FaCameraRetro fill="#FFF" className="splash-icon" size={120} />
            <SignIn />
            <SignUp />
          </div>
        </div>
      ) : (
        <>
          <Navigate to="/dashboard" />
        </>
      )}
    </div>
  );
}
