import React from "react";
import UseTokenAuth from "../hooks/UseAuthToken";

export default function SignUp() {

    // const { getToken, saveToken, clearToken } = UseTokenAuth()

    const [formData, setFormData] = React.useState({
        firstname: '',
        laststname: '',
        email: '',
        password: ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const jwtToken = data.token
                localStorage.setItem('jwtToken', jwtToken)
            })

        setFormData({
            firstname: '',
            laststname: '',
            email: '',
            password: ''
        })
    }



    return (
        <div className="signup--container">
            <h1>Sign up :</h1>
            <form onSubmit={handleSubmit} className="signup--form">
                <label htmlFor="firstname">Firstname:</label>
                <input
                    type="text"
                    className="firstname"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                />
                <label htmlFor="lastname">Lastname:</label>
                <input
                    type="text"
                    className="laststname"
                    id="laststname"
                    name="laststname"
                    value={formData.laststname}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password" >Password:</label>
                <input
                    type="password"
                    className="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button className="submit--btn">Submit</button>
            </form>
        </div>
    )
}