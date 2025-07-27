import { Link } from "react-router-dom";
import "./Header.css"
import { useState } from "react";

const Header = ({user, setuser}) => {
    const [isdrop, setisdrop] = useState(false);
    const handledrop = ()=>{
        setisdrop(!isdrop)
    }
    return (
        <div className="header">
            <div className="header_logo">
                <img src="/logo.png" alt="logo" className="header_logo_img"/>
            </div>
            <div className="header_options">
                <ul className="header_options_list">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li><img src="/cart.png" alt="Cart" className="cart"/></li>
                    <li>
                        <img src="/profile_logo.png" alt="Profile" className="profile" onClick={handledrop}/>
                        {isdrop && (
                            user ? (
                                <ul className="header_profile_drop">
                                    <Link to="/profile"><li>Profile</li></Link>
                                    <li onClick={() => setuser(null)}>Log Out</li>
                                </ul>
                            ) : (
                                <ul className="header_profile_drop">
                                    <Link to="/signin"><li>Sign In</li></Link>
                                    <Link to="/signup"><li>Sign Up</li></Link>
                                </ul>
                            )
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;