import { Link } from "react-router-dom";
import "./Header.css"
import { useState } from "react";

const Header = () => {
    const [isdrop, setisdrop] = useState(false);
    const handledrop = ()=>{
        setisdrop(!isdrop)
    }
    return (
        <div className="header">
            <div className="header_logo">
                <img src="../../../public/logo2.png" alt="logo" className="header_logo_img"/>
            </div>
            <div className="header_options">
                <ul className="header_options_list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><img src="../../../../public/cart.png" alt="Cart" className="cart"/></li>
                    <li>
                        <img src="../../../../public/profile_logo.png" alt="Profile" className="profile" onClick={handledrop}/>
                        {
                            (isdrop) &&
                            <ul className="header_profile_drop">
                                <Link to={"/signin"}><li>Sign In</li></Link>
                                <Link to={"/signup"}><li>Sign Up</li></Link>
                            </ul>
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;