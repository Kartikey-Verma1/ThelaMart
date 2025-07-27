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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <img src="/profile_logo.png" alt="Profile" className="profile" onClick={handledrop}/>
                        {isdrop && (
                            user ? (
                                <ul className="header_profile_drop">
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li onClick={() => setuser(null)}><Link to="/">Log Out</Link></li>
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