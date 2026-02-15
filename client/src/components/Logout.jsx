import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
    const { logout } = useAuth0();

    return (
        <button type="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
        </button>
    );
}
