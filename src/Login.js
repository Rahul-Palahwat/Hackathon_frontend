import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
const Login = ({setIsLoggedIn}) => {
const navigate=useNavigate()

    const [form, setForm] = useState({  password: '', email: '' })
    const [loading, setLoading] = useState(false)
    const formControl = (e) => {
        const { name, value } = e.target
        setForm((prev) => { return ({ ...prev, [name]: value }) })
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
        const {email,password}=form
        try {
        console.log("Hello");
        console.log(email);
        const url="http://localhost:8000/login"
        const response = await fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify({email,password}) 
        });
        const json=await response.json();
        console.log(json);
        if(json.success){
          
          navigate('/user');
          alert(`Welcome ${json.user.name}`);
        }else{
          console.log("I am else");
          alert(`${json.error}`)
        }
      } catch (error) {
        console.log("Internal server Error");
          
      }
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