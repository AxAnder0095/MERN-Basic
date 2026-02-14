import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {
        path: "/dashboard", 
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        )
    }
])