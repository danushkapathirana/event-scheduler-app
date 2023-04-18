import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./EventList.module.css"

const EventsList = ({ events }) => {
    return(
        <div className={classes.events}>
            <h1>All Event</h1>
            <ul className={classes.list}>
                {
                    events.map((event) => (
                        <li key={event.id} className={classes.item}>
                            <NavLink to={event.id}>
                                <img src={event.image} alt={event.image} />
                                <div className={classes.content}>
                                    <h2>{event.title}</h2>
                                    <time>{event.date}</time>
                                </div>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default EventsList
