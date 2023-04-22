import React, { Fragment } from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";
import { getAuthToken } from "../components/util/auth";

const EventDetails = () => {
    const data = useRouteLoaderData("event-details")

    return(
        <Fragment>
            <EventItem event={data.event} />
        </Fragment>
    )
}

export default EventDetails

// useParams() -> use to access the parameters data


export const eventDetailsLoader = async ({ request, params }) => {
    const id = params.eventId

    const response = await fetch("http://localhost:8080/events/" + id)

    if(!response.ok) {
        throw json({message: "Could not fetch event details!"}, {status: 500})

    } else {
        return response
    }
}

export const eventDeleteAction = async ({ request, params }) => {
    const id = params.eventId

    const token = getAuthToken()

    const response = await fetch("http://localhost:8080/events/" + id, {
        method: request.method,
        headers: {
            "Authorization": "Bearer " + token
        }
    })

    if(!response.ok) {
        throw json({message: "Could not delete event!"}, {status: 500})
    }

    return redirect("/events")
}
