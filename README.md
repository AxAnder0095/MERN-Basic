# LifeBook
Personal Jounal Application that lets a user login to their account, create their own journal entries and then
see them on their dashboard. 

---

## Purpose
This project's main purpose was to create a working MERN stack application with Auth0 handling user authentication. 
The application "LifeBook" that came out of this project was a welcome addition, as I had a great time making it. I could've 
added more to the to the app itself but, as I mentioned earlier, the main purpose of this project was 
to implement Auth0 into my MERN stack.

---

## MERN + Auth0 

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
  - Add posts (`{ title: "", content: "" }`) to your account
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


