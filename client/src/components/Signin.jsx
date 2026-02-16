import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Sign.scss"

export const SignIn = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignIn = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <button type="button" onClick={handleSignIn} className="sign-btn">
      Sign In
    </button>
  );
}
