import React from "react";

export default function Login() {

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
            .then(res => res.json)
            .then(data => console.log(data))

        setFormData({
            email: '',
            password: ''
        })
    }

    return (
        <div className="login--container">
             <h1>Login :</h1>
            <form action="" className="login--form">
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