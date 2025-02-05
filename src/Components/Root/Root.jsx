import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
// import Home from "../Home/Home";
// import Listed from "../Listed/Listed";
// import ReadPages from "../ReadPages/ReadPages";

const Root = () => {
    return (
        <div>
           <div className=" h-20">
           <Navbar></Navbar>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;