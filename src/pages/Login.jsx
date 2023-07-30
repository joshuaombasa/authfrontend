import React from "react";
import UseTokenAuth from "../hooks/UseAuthToken";


export default function Login() {

    // const [token, setToken] = React.useState(null)

    // const { getToken, saveToken, clearToken } = UseTokenAuth()
    // React.useEffect(() => {
    //     setToken(localStorage.getItem('jwtToken'))
    // },[])

    const [formData, setFormData] = React.useState({
        
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

        const token = localStorage.getItem('jwtToken')

        fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setFormData({
            email: '',
            password: ''
        })
    }

  

    return (
        <div className="login--container">
             <h1>Login :</h1>
            <form onSubmit={handleSubmit} className="login--form">
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