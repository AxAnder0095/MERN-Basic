import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Sign.scss"

export const SignUp = () => {
    const { loginWithRedirect } = useAuth0();

    const handleSignUp = async () => {
        try {
            await loginWithRedirect({
                authorizationParams: {
                    screen_hint: "signup",
                },
            });
        } catch (error) {
            console.error("Error during sign up:", error);
        }
    };

    return (
        <button type="button" onClick={handleSignUp} className="sign-btn">
            Sign Up
        </button>
    );
}
