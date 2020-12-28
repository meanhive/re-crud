import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" to="/">RestAPI</NavLink>
                    <button className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse" id="menu">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink to="/">Course</NavLink>
                        </li>
                        <li>
                            <NavLink to="/new">Create New</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
