import React, { useEffect, useState } from "react";

import EventsList from "../components/EventList";

const Events = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [fetchedEvents, setFetchedEvents] = useState()

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true)
            const response = await fetch("http://localhost:8080/events")

            if(!response.ok) {
                setError("Fetching events failed!")
            } else {
                const responseData = await response.json()
                setFetchedEvents(responseData.events)
            }
            setIsLoading(false)
        }
        fetchEvents()

    }, [])

    return(
        <div style={{ textAlign: "center" }}>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div>
                {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
            </div>
        </div>
    )
}

export default Events

// <Link to={`/events/${event.id}`}>{event.title}</Link>
