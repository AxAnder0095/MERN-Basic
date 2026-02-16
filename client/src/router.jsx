import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Entry } from "./pages/Entry.jsx";
import { Settings } from "./pages/Settings.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        )
    },
    {
        path: "/entry",
        element: (
            <ProtectedRoute>
                <Entry />
            </ProtectedRoute>
        )
    },
    // {
    //     path: "/settings",
    //     element: (
    //         <ProtectedRoute>
    //             <Settings />
    //         </ProtectedRoute>
    //     )
    // },
])