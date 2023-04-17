import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {id: "e1", title: "event 1"},
    {id: "e2", title: "event 2"},
    {id: "e3", title: "event 3"},
    {id: "e4", title: "event 4"},
]

const Events = () => {
    return(
        <Fragment>
            <h1>Events</h1>
            <ul>
                {
                    DUMMY_EVENTS.map((event) => (
                        <li key={event.id}>
                            <Link to={event.id}>{event.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

export default Events

// <Link to={`/events/${event.id}`}>{event.title}</Link>
