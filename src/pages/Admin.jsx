import React from "react";

export default function  Admin() {

    const [isAuthenticated, setIsAuthenticated] = React.useState(localStorage.getItem(localStorage.getItem('jwtToken')))

    if (isAuthenticated) {
        
    }
    return (
        <div className="admin--container">
            <h1>Welcome admin:</h1>
        </div>
    )
}