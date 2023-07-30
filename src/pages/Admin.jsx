import React from "react";
import AdminHero from "../components/AdminHero";

import Login from "./Login";

export default function Admin() {

    const [isAuthenticated, setIsAuthenticated] = React.useState(localStorage.getItem('jwtToken'))

    const [userData, setUserData] = React.useState(null)

    React.useEffect (() => {
        if (isAuthenticated) {
            const token = localStorage.getItem('jwtToken')
            fetch('http://localhost:4000/admin', {
                method: 'GET',
                headers: {
                    Authorization: `${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setUserData(data)
                })
        }
    },[])



   
    return (
        <>
        {isAuthenticated ? <AdminHero/> : <Login />}    
        </>

    )
}