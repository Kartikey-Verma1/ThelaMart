import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = ()=>{
    return (
        <div className="signin">
            <h2 className="signin_head">SignIn</h2>
            <form className="signin_form">
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Enter Your Gmail" className="signin_email"/>
                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="Enter Password" className="signin_password"/>
                <button className="signin_submit">submit</button>
            </form>
            <p className="signin_ques">Do you have an account?<Link to={"/signup"}>SignUp</Link></p>
        </div>
    )
}
export default SignIn;