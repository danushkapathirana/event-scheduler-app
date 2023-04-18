import React from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css"

const EventForm = ({ method, event }) => {
    const navigate = useNavigate()
    const actionData = useActionData()

    const cancelHandler = () => {
        navigate("..")
    }

    return(
        <Form method="post" className={classes.form}>
            {/* backend validation check; refer this with backend code */}
            {
                actionData && actionData.errors && <ul>
                    {Object.values(actionData.errors).map((error) => (
                        <li key={error}>
                            {error}
                        </li>
                    ))}
                </ul>
            }

            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required defaultValue={event ? event.title : ""} />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" required defaultValue={event ? event.image : ""} />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" required defaultValue={event ? event.date : ""} />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <input id="description" name="description" rows="5" required defaultValue={event ? event.description : ""} />
            </p>

            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>Cancel</button>
                <button>Save</button>
            </div>
        </Form>
    )
}

export default EventForm

/**
 * <Form>
 * 
 * provided by react router dom
 * 
 * this Form tag will omit sending default request to backend but
 * it will take that request that would've been sent and give it to our action
 * 
 * all the input elements must have name attribute
 */

// useActionData() -> use to get access to the data which returned by action
