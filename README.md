# MERN Basic Auth0 Dashboard

A full-stack MERN application with **React + Vite frontend**, **Express + MongoDB backend**, and **Auth0 authentication**.  
Users can sign up, log in, and add items that are stored in their own personal MongoDB collection.  

---

## Features

- User authentication using **Auth0**
  - Email/password signup/login
  - Optional social logins (Google, GitHub, etc.)
  - JWT access token for secure API calls
  - Automatic token refresh and session persistence
- Per-user data storage in **MongoDB**
  - Add items (`{ working: true }`) to your account
  - Fetch only your own items
- Protected routes in React using `ProtectedRoute` component
- Clean React + Vite frontend with login/signup/logout flow

---

## Tech Stack

**Frontend:**  
- React 18 + Vite  
- React Router  
- Axios for API calls  
- Auth0 React SDK  

**Backend:**  
- Node.js + Express  
- MongoDB (Atlas)  
- JWT verification with Auth0 (`express-jwt + jwks-rsa`)


