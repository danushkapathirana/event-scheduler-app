import React from "react";
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventList";

const Events = () => {
    const data = useLoaderData()

    return(
        <EventsList events={data.events} />
    )
}

export default Events


export const eventsLoader = async () => {
    const response = await fetch("http://localhost:8080/events")

    if(!response.ok) {

    } else {
        const responseData = await response.json()
        return responseData
    }
}

// <Link to={`/events/${event.id}`}>{event.title}</Link>

/**
 * issue:
 * if we use useEffect() to fetch the data inside jsx component,
 * when we have multiple nested components there, those nested components
 * will be render even before fetching the data from backend
 * 
 * solution:
 * therefore we tweak the code that data fetching logic
 * goes into path using loader prop, so it will be execute
 * before component load
 * 
 * inside the jsx component we use useLoaderData() to access the returned data
 * 
 * useLoaderData(), data will be only available for in any component on the
 * same level or lower levels in the route path configuration
 * 
 * inside loader function cannot use any hook
 * because it's a just function not jsx component
 */

/**
 * build our own response using browser "Response" object
 * 
 * const res = new Response(any_type_of_data_at_your_choice, {status: 200})
 * return res
 * 
 * return response
 * here the loader function we can just return response instead of response.json()...
 * because react router package can automatically extract the data in the response
 */
