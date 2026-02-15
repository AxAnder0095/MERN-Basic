import { useAuth0 } from "@auth0/auth0-react";
import { SignIn } from "./Signin.jsx";
import { SignUp } from "./SignUp.jsx";
import { Navigate } from "react-router-dom";

export const AuthButtons = () => {
  const { isAuthenticated, error } = useAuth0();

  return (
    <div>
      {error && <p>{error.message}</p>}
      {!isAuthenticated ? (
        <>
          <SignIn />
          <SignUp />
        </>
      ) : (
        <>
          <Navigate to="/dashboard" />
        </>
      )}
    </div>
  );
}
