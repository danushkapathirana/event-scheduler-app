import React from "react";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css"

const EventItem = ({ event }) => {
    const submit = useSubmit()
    const token = useRouteLoaderData("root")

    const startDeleteHandler = () => {
        const proceed = window.confirm("Are you sure?")

        if(proceed) {
            submit(null, {method: "delete"})
        }
    }

    return(
        <article className={classes.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>

            {token && (
                <menu className={classes.actions}>
                    <Link to="edit">Edit</Link>
                    <button onClick={startDeleteHandler}>Delete</button>
                </menu>
            )}
        </article>
    )
}

export default EventItem

// useSubmit() -> use to submit data and trigger an action programmatically
