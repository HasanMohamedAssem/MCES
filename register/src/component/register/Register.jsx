import React from "react";
import "./register.style.css"

export default function Register(){

    
        const [formData,setFormData] = React.useState(
            {
                email:"",
                password:"",
                passwordConfirm:"",
                joinedNewLetter:true
            }
        

    )

    function handleSubmit(event)
    {
        event.preventDefault()

        if(formData.password === formData.passwordConfirm){
            console.log("YUPPPPPP")
        }
        else{
            console.log("NOP")
        }

    }
    function handleChange(event)
    {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData=>({
            ...prevFormData,
            [name]: type==="checkbox"? checked : value
        }))
        
    }

    console.log(formData)

return(
    <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Email Address !"
            className="form--input"
            name="email"
            onChange={handleChange}
            value={formData.email}

            />
            <input
            type="password"
            placeholder="Password !"
            className="form--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
            />
            <input
            type="password"
            placeholder="Confirm Password !"
            className="form--input"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
            />
            

            <input 
            id="okayToEmail"
            type="checkbox"
            name="joinedNewLetter"
            onChange={handleChange}
            checked={formData.joinedNewLetter}
            />
            <label htmlFor="okayToEmail"> I want to join the Newsletter</label>

            <button>Submit</button>


        </form>
    </div>
)

}