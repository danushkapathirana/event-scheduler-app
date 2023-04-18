import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./EventsNavigation.module.css"

const EventsNavigation = () => {
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events/new" className={({ isActive }) => isActive ? classes.active : undefined}>New Events</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default EventsNavigation
