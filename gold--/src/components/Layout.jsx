// src/components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gold to-light text-gray-800">
            {children}
        </div>
    );
};

export default Layout;
