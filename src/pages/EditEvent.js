import React from "react";
import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

const EditEvent = () => {
    const data = useRouteLoaderData("event-details")

    return(
        <EventForm event={data.event} />
    )
}

export default EditEvent

/**
 * useRouterLoaderData()
 * 
 * use to access the higher level data of route path
 */
