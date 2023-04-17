import React from "react";

import classes from "./EventList.module.css"

const EventsList = ({ events }) => {
    return(
        <div className={classes.events}>
            <h1>All Event</h1>
            <ul className={classes.list}>
                {
                    events.map((event) => (
                        <li key={event.id} className={classes.item}>
                            <a href="...">
                                <img src={event.image} alt={event.image} />
                                <div className={classes.content}>
                                    <h2>{event.title}</h2>
                                    <time>{event.date}</time>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default EventsList
