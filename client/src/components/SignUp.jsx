import { useAuth0 } from "@auth0/auth0-react";

export const SignUp = () => {
    const { loginWithRedirect } = useAuth0();

    const handleSignUp = () => {
        try {
            loginWithRedirect({
                authorizationParams: {
                    screen_hint: "signup",
                },
            });
        } catch (error) {
            console.error("Error during sign up:", error);
        }
    };

    return (
        <button onClick={handleSignUp}>
            Sign Up
        </button>
    );
}
