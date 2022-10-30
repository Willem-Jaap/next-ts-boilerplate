// Package imports
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
