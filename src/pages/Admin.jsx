import React from "react";
import AdminHero from "../components/AdminHero";

import Login from "./Login";

export default function Admin() {

    const [isTokenAvailable, setIsTokenAvailable] = React.useState(localStorage.getItem('jwtToken'))

    const [isValidUser, setIsValidUser] = React.useState(null)

    React.useEffect (() => {
        if (isTokenAvailable) {
            const token = localStorage.getItem('jwtToken')
            fetch('http://localhost:4000/admin', {
                method: 'GET',
                headers: {
                    Authorization: `${token}`
                }
            })
                .then(res =>  { 
                    updateValidUser(res.ok)
                   return res.json()
                })
                .then(data => {
                    console.log(data)
                })
        }
    },[])

    function updateValidUser(OkState) {
        if (OkState === true) {
            setIsValidUser(true)
        }
        
    }

    function displayLogic() {
        if (!isTokenAvailable) {
            return <Login/>
        } else if (isValidUser) {
           return <AdminHero/>
        } else if (!isValidUser) {
            return <Login/>
        }
    }

   
    return (
        <>
        { displayLogic()}    
        </>

    )
}