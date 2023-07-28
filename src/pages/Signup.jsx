import React from "react";

export default function SignUp () {

    const [formData, setFormData] = React.useState({
        firstname : '',
        laststname : '',
        email : '',
        password : ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        console.log(formData)
    }

   

    return (
        <div className="signup--container">
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