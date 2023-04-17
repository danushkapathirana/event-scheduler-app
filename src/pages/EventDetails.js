import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const params = useParams()

    return(
        <Fragment>
            <h1>Event Details</h1>
            <p>Event Id: {params.eventId}</p>
        </Fragment>
    )
}

export default EventDetails

// useParams() -> use to access the parameters data
