import React from "react";
import { Form, json, redirect, useActionData, useNavigate } from "react-router-dom";

import { getAuthToken } from "./util/auth";

import classes from "./EventForm.module.css"

const EventForm = ({ method, event }) => {
    const navigate = useNavigate()
    const actionData = useActionData()

    const cancelHandler = () => {
        navigate("..")
    }

    return(
        <Form method={method} className={classes.form}>
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


export const eventAction = async ({ request, params }) => {
    const method = request.method

    // formData() can use to access the form elements data
    const data = await request.formData()

    // use names attributes to extract the data in text fields
    const enteredData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description")
    }

    const token = getAuthToken()

    let url = "http://localhost:8080/events"

    if(method === "PATCH") {
        const id = params.eventId
        url = "http://localhost:8080/events/" + id
    }

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(enteredData)
    })

    // backend validation check; refer this with backend code
    if(response.status === 422) {
        return response
    }

    if(!response.ok) {
        throw json({message: "Could not save event!"}, {status: 500})
    }

    return redirect("/events")
}

// redirect() -> special response object that simple redirect to a different page
