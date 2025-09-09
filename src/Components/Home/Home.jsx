import { fetchDataByRole } from "../../Utils/functions";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer/Shimmer";
import "./Home.css"

const Home = ()=>{
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await fetchDataByRole({ role: "Provider" });
            if (data) setUserList(data);
        };
        fetchUsers();
    }, []);
    return (
        <div className="home">
            {   
                (userList.length === 0) ? 
                (userList.map((user)=>(
                    <div className="usercard" key={user._id}>
                        <div className="name"><p className="name_title">Name:</p><p className="name_user">{user.name}</p></div>
                        <div className="phone"><p className="phone_title">Phone:</p><p className="phone_user">{user.phone}</p></div>
                        <div className="email"><p className="email_title">Email:</p><p className="email_user">{user.email}</p></div>
                    </div>
                ))) :
                <Shimmer />
            }
        </div>
    )
}
export default Home;