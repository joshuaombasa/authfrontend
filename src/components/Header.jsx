import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header--section">
            <a href="" className="logo">AUTHY</a>
            <div className="c">
                <Link to='login' className="login--link">Login</Link>
                <Link to='signup' className="singup--link">Sign up</Link>
                <Link to='admin' className="singup--link">Admin</Link>
            </div>
        </div>
    )
}