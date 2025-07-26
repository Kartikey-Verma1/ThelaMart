import { useState } from "react";
import "./signup.css";

const SignUp = ()=>{
    const [role, setrole] = useState(false);
    const [fssainum, setfssainum] = useState("");
    return(
        <div className="signup">
            <form className="signup_form">
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Enter Your Name" className="signup_name"/>

                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Enter Your Gamil" className="signup_email"/>

                <label>
                    <input type="radio" name="role" value="Vendor" onChange={(e)=>{setrole(e.target.value)}} className="signup_vendor"/>
                    Vendor
                </label>
                <label>
                    <input type="radio" name="role" value="Provider" onChange={(e)=>{setrole(e.target.value)}} className="signup_provider"/>
                    Provider
                </label>

                {
                    role && 
                    <label>
                        <input type="text" placeholder="Enter FSSAI Number" className="signup_fssai"/>
                    </label>
                }

                <label htmlFor="passwordinit"></label>
                <input type="text" id="passwordinit" placeholder="Create a Password" className="signup_passwordinit"/>
                <label htmlFor="passwordrepeat"></label>
                <input type="text" id="passwordrepeat" placeholder="Repeat your Password" className="signup_passwordrepeat"/>
            </form>
        </div>
    )
}
export default SignUp;