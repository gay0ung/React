import React from 'react';
import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

function App() {
    return (
        <>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/posts/:id'}>Post Detail</Link>
                <Link to={'/posts/new'}>Post New</Link>
                <Link to={'/posts/edit/:id'}>Post Edit</Link>
                <Link to={'/profile'}>Profile</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/posts" element={<h1>Post List Page</h1>} />
                <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
                <Route path="/posts/new" element={<h1>Post New Page</h1>} />
                <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>} />
                <Route path="/profile" element={<h1>Profile Page</h1>} />
                <Route path="*" element={<Navigate replace to={'/'} />} />
            </Routes>
        </>
    );
}

export default App;
