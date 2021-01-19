import React from "react";
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a className="navbar-brand" href="#">
                    ADIWIYATA
                </a>

                {/** Show and hide menu */}
                <button className="navbar-toggler" data-togler="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"/>
                </button>

                {/** Menu */}
                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar=nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/calendar" className="nav-link">Calendar</Link>
                        </li>
                    </ul>
                </div>
            </div> 
        )
    }
}
export default Navbar;