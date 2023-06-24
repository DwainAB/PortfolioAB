import React from "react";
import "./MenuTop.css"
import Logo from "../../Assets/Pictures/logoikigai.png"

function MenuTop(){
    return(
        <div className="container-menu-top">
            <img className="img-container-menu-top" src={Logo} alt="" />
            <h1>Abrivard Dwain</h1>
        </div>
    )
}

export default MenuTop