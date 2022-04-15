import {useState } from "react"
import { Link ,useNavigate} from "react-router-dom"

const Signup = ({setIsLoggedIn}) => {
    const navigate=useNavigate()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({ name: '', password: '', email: '', address: '', phone: ''})
   
    const handleSubmit= async (e)=>{
        e.preventDefault()
        const {name,password,email,phone,address}=form
        console.log("Hello");
        console.log(email);
        const url="http://localhost:8000/signup"
        const response = await fetch(url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify({name,email,password,phone,address}) 
        });
        const json=await response.json();
        console.log(json);
        if(json.success){
          alert(`Welcome ${json.user.name}`);
          navigate('/');
          setIsLoggedIn(true)
        }else{
          alert(`${json.error}`)
        }
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