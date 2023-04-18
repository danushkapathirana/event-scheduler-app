import React from "react";
import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

const NewEvent = () => {
    return(
        <EventForm />
    )
}

export default NewEvent


export const newEventAction = async ({ request, params }) => {
    // formData() can use to access the form elements data
    const data = await request.formData()

    // use names attributes to extract the data in text fields
    const enteredData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description")
    }

    const response = await fetch("http://localhost:8080/events", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
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
