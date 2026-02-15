import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { api } from "../api/testApi.js";

export function useItems() {
    const { getAccessTokenSilently } = useAuth0();
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                },
            });
            // console.log("Access Token:", token); // Log the token for debugging

            const res = await api.get("/test", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setItems(res.data);
        }catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    const postItem = async () => {
        const token = await getAccessTokenSilently({
            authorizationParams: {
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            },
        });

        await api.post(
            "/test",
            { working: true },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        fetchItems();
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return {
        items,
        postItem,
    }
}