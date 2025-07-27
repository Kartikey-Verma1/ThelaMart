import { useState } from "react";
import { fetchDataByRole } from "../../../Utils/functions";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = ({setuser})=>{
    const [loading, setloading] = useState(false);
    const [role, setrole] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

        setloading(true);
        try {
            const userList = await fetchDataByRole({role});
            const user = userList.find(user => user.email == email && user.password == password);
            if(user){
                setuser(user);
                navigate("/");
                console.log(user)
            }
            else{
                alert("Invalid Credentials");
            }
        } catch (err) {
            console.error(err);
        } finally{
            setloading(false);
        }
    };
    return (
        <div className="signin">
            <h2 className="signin_head">SignIn</h2>
            <form className="signin_form" onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Enter Your Email" className="signin_email" onChange={(e)=>{setemail(e.target.value)}}/>
                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="Enter Password" className="signin_password" autoComplete="off" onChange={(e)=>(setpassword(e.target.value))}/>
                <label>
                    <input 
                        type="radio" 
                        name="role" 
                        value="Vendor" 
                        required 
                        onChange={(e)=>{setrole(e.target.value)}} className="signin_vendor"/>
                    Vendor
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="role" 
                        value="Provider" 
                        required 
                        onChange={(e)=>{setrole(e.target.value)}} className="signin_provider"/>
                    Provider
                </label>
                <button className="signin_submit" type="submit">
                    {(loading)? "Submitting...": "Submit"}
                </button>
            </form>
            <p className="signin_ques">Do you have an account?<Link to={"/signup"}>SignUp</Link></p>
        </div>
    )
}
export default SignIn;