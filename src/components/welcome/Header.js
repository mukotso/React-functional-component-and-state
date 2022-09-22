import React from "react";
const Header = (props)=>{
    return (
        <>
            <nav className={"font-bold bg-blue-300 p-4  flex justify-center"}>
                <a className={"mx-4"}>{props.link1}</a>
                <a className={"mx-4"}> {props.link2}</a>
                <a className={"mx-4"}> {props.link3}</a>
            </nav>
        </>
    );
}

export default Header;