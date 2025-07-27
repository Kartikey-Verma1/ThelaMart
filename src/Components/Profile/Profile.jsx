import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = ({user, setuser})=>{
    const handleDelete = async (itemId) => {
    try {
        const res = await fetch("http://localhost:5000/provider/remove-item", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, itemId })
        });

        if (res.ok) {
        const updatedUser = await res.json();
        setuser(updatedUser);
        } else {
        alert("Failed to delete item");
        }
    } catch (err) {
        console.error(err);
        alert("Error deleting item");
    }
    };

    return(
        <div className="profile">
            <div className="profile_info_container">
                <h2 className="profile_head">Profile</h2>
                <div className="profile_info">
                    <div className="name"><p className="name_title">Name:</p><p className="name_user">{user.name}</p></div>
                    <div className="email"><p className="email_title">Email:</p><p className="email_user">{user.email}</p></div>
                    {(user?.fssai) && <div className="fssai"><p className="fssai_title">Fssai:</p><p className="email_user">{user.fssai}</p></div>}
                    {(user?.fssai) ? 
                        <div className="role"><p className="role_title">Role:</p><p className="role_user">Provider</p></div>:
                        <div className="role"><p className="role_title">Role:</p><p className="role_user">Vendor</p></div>
                    }
                </div>
            </div>
            {
                (user?.fssai) && 
                <div className="profile_items">
                    <h3>Items</h3>
                    {user.items.map((item)=>(
                        <div className="item" key={item?._id}>
                            <div className="item_name"><p className="item_name_title">Name:</p><p className="item_name_user">{item?.name}</p></div>        
                            <div className="item_price"><p className="item_price_title">Price:</p><p className="item_price_user">{item?.price}</p></div>        
                            <div className="item_description"><p className="item_description_title">Description:</p><p className="item_description_user">{item?.description}</p></div>
                            <button className="delete_item_button" onClick={() => handleDelete(item._id)}> Delete </button>  
                        </div>
                    ))}
                    <button className="add_items"><Link to="/additems" >Add Items+</Link></button>
                </div>
            }
            
        </div>
    )
}
export default Profile;