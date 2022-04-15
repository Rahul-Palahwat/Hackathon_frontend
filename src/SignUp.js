import {useState } from "react"
import { Link } from "react-router-dom"

const Signup = ({setIsLoggedIn}) => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({ name: '', password: '', email: '', address: '', phone: '',userLevel:0 })
   
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/signup", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({...form})
        })
        const result = await res.json()
        console.log(result);
        if (!result.id) {
            window.alert(result.message)
        }
        else {
            localStorage.setItem('token', result?.token)
            localStorage.setItem('following', JSON.stringify(result?.following))
            setIsLoggedIn(true)
        }
        setLoading(false)
    }
    const formControl = (e) => {
        const { name, value } = e.target
        setForm((prev) => { return ({ ...prev, [name]: value }) })
    }
    return (
        <div>
            <h1 align="center" className="my-5">Signup</h1>

            <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter name" required={true} onChange={formControl} name="name" />
                    <input type="email" placeholder="Enter email" required={true} onChange={formControl} name="email" />
                    <input type="text" placeholder="Enter phone" required={true} onChange={formControl} name="phone" />
                    <input type="text" placeholder="Enter address" required={true} onChange={formControl} name="address" />

                    <input type="password" placeholder="Password" required={true} onChange={formControl} name="password" />
                <button variant="primary" type="submit" disabled={loading}>
                    {loading?"Loading...":"Submit"}
                </button>
            </form>
            <div className="mt-4"></div>  <Link to="/login">Already Have an account? Login</Link>
        </div>
    )
}

export default Signup