import React from "react";
import { Footer } from "./footer";
import { Navbaruser } from "./navbaruser";
import { Sidebar } from "./sidebar";
export const Layout = ({children}) => {
    return  <div> 	

    <Sidebar/>
    <Navbaruser/>,
    { children }
    <Footer/>,

</div>
}