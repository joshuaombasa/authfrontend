import React from "react";
import AdminHero from "../components/AdminHero";

import Login from "./Login";

export default function Admin() {

    const [isTokenAvailable, setIsTokenAvailable] = React.useState(localStorage.getItem('jwtToken'))

    const [isValidUser, setIsValidUser] = React.useState(null)

    React.useEffect (() => {
        if (isTokenAvailable) {
            const token = localStorage.getItem('jwtToken')

            const checkAuth = async() => {
                try {

                    const res = await fetch('http://localhost:4000/admin', {
                                           method: 'GET',
                                           headers: {
                                               Authorization: `${token}`
                                              }
                                        })
                const data = await res.json()
                updateValidUser(res.ok)
                console.log(data)

                } catch(error) {
                    
                    console.log(error)
                }

            }

            checkAuth()
        }
    }, [])

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