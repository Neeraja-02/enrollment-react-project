import React from "react";
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <>
        <div className="nav">
            <div className="left">
                <h2>Logo</h2>
            </div>
        <div className="right">
         <Link to={"/addstudent"}><h2>Add Student</h2></Link>
         <Link to={"/viewstudent"}><h2>View Student</h2></Link>
        </div>
        </div>
        </>
    )
}
export default Nav