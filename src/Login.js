import { useState } from "react"
import { Link } from "react-router-dom"
const Login = ({setIsLoggedIn}) => {
    const [form, setForm] = useState({  password: '', email: '' })
    const [loading, setLoading] = useState(false)
    const formControl = (e) => {
        const { name, value } = e.target
        setForm((prev) => { return ({ ...prev, [name]: value }) })
    }
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/signin", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({...form})
        })
        const result = await res.json()
        // console.log(result);
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
    return (
        <div>
            <h1 align="center" className="my-5">Login</h1>

            <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Enter email" onChange={formControl} required/>
                    <input type="password" name="password" placeholder="Password" onChange={formControl} required/>
                <button variant="primary" type="submit" disabled={loading}>
                    {loading?"Loading...":"Submit"}
                </button>
            </form>
            <div ><Link to="/signup">Don't have an account? Signup</Link></div>

        </div>
    )
}

export default Login