import { useAuth0 } from "@auth0/auth0-react";
import { SignIn } from "./Signin.jsx";
import { SignUp } from "./SignUp.jsx";
import {Logout} from "./Logout.jsx";

export const AuthButtons = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <>
          <SignIn />
          <SignUp />
        </>
      ) : (
        <>
          <span>Welcome {user?.name}</span>
          <Logout />
        </>
      )}
    </div>
  );
}
