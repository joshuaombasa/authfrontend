import React from "react";

export default function UseTokenAuth() {

    function getToken() {
        localStorage.getItem('jwtToken')
    }

    function saveToken(token) {
        localStorage.setItem('jwtToken', token)
    }

    function clearToken() {
        localStorage.removeItem('jwtToken')
    }

    return {
        getToken,
        saveToken,
        clearToken
    }
}