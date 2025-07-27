import { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { adduser, fetchDataByRole } from "../../../Utils/functions";

const SignUp = ({setuser})=>{
    const [role, setrole] = useState(false);
    const [fssainum, setfssainum] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [passwordinit, setpasswordinit] = useState("");
    const [passwordrepeat, setpasswordrepeat] = useState("");
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(passwordinit != passwordrepeat){
            alert("Password must match");
            return;
        }
        if(role === "Provider" && fssainum.length != 14){
            alert("enter valid fssai number");
            return;
        }
        // check duplicate user
        try {
            setloading(true);
            
            const userList = await fetchDataByRole({role});
            const ifpresent = userList.find(user => user.email === email);
            if (ifpresent) {
                alert("User already exists");
                return;
            }
        } catch (err){ 
            console.log(err) 
        } finally {setloading(false)}
        
        // add user
        setloading(true);
        try{
            await adduser({name, email, passwordinit, fssainum, role, navigate, setuser});
        } catch (err) {
            alert("Something went wrong please try again!");
        } finally {
            setloading(false);
        }
    }

    return(
        <div className="signup">
            <h2 className="sign_up_head">SignUp</h2>
            <form className="signup_form" onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter Your Name" 
                    required className="signup_name" 
                    onChange={(e)=>{setname(e.target.value)}}/>

                <label htmlFor="email"></label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter Your Email" 
                    required className="signup_email" 
                    onChange={(e)=>(setemail(e.target.value))}/>

                <label>
                    <input 
                        type="radio" 
                        name="role" 
                        value="Vendor" 
                        required 
                        onChange={(e)=>{setrole(e.target.value)}} className="signup_vendor"/>
                    Vendor
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="role" 
                        value="Provider" 
                        required 
                        onChange={(e)=>{setrole(e.target.value)}} className="signup_provider"/>
                    Provider
                </label>

                {
                    role == "Provider" && 
                    <label>
                        <input 
                            type="text" 
                            placeholder="Enter FSSAI Number" 
                            required  className="signup_fssai" 
                            onChange={(e)=>(setfssainum(e.target.value))}/>
                    </label>
                }

                <label htmlFor="passwordinit"></label>
                <input 
                    type="text" 
                    id="passwordinit" 
                    placeholder="Create Password" 
                    required className="signup_passwordinit" 
                    autoComplete="off"
                    onChange={(e)=>{setpasswordinit(e.target.value)}}/>
                <label htmlFor="passwordrepeat"></label>
                <input 
                    type="text" 
                    id="passwordrepeat" 
                    placeholder="Confirm Password" 
                    required className="signup_passwordrepeat" 
                    autoComplete="off"
                    onChange={(e)=>{setpasswordrepeat(e.target.value)}}/>

                <button className="signup_submit" type="submit" disabled={loading}>
                    {loading? "Registering...": "Submit"}
                </button>
            </form>
        </div>
    )
}
export default SignUp;