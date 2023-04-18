import React, { Fragment } from "react";
import { json, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

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
