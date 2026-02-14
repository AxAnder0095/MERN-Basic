import { useAuth0 } from "@auth0/auth0-react";

export const SignIn = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    try{
        loginWithRedirect();
    }
    catch(error){
      console.error("Error during sign in:", error);
    }
  }

  return (
    <button onClick={handleSignIn}>
      Sign In
    </button>
  );
}
