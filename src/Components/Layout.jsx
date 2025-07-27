import { Outlet } from "react-router-dom"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({user, setuser})=>{
    return (
        <div>
            <Header user={user} setuser={setuser}/>
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout;