import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Contacts from "./routes/contacts.jsx";
import AboutUs from "./routes/about_us.jsx";
import Feedback from "./routes/feedback.jsx";
import Registration from "./routes/registration.jsx";
import FillProfile from "./routes/fill-profile.jsx";
import Auth from "./routes/auth.jsx";
import {UserProvider} from "./context/UserContext.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/contacts",
        element: <Contacts/>,
        // errorElement: <ErrorPage/>
    },
    {
        path: "/about-us",
        element: <AboutUs/>,
    },
    {
        path: "/feedback",
        element: <Feedback/>,
    },
    {
        path: "/registration",
        element: <Registration/>,
    },
    {
        path: "/fill-profile",
        element: <FillProfile/>,
    },
    {
        path: "/auth",
        element: <Auth/>,
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserProvider>
            <RouterProvider router={router}/>
        </UserProvider>
    </StrictMode>,
)
