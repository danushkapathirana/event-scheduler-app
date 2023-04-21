import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventList";

const Events = () => {
    const data = useLoaderData()

    // 1
    // if(data.isError) {
    //     return <p>{data.message}</p>
    // }

    return(
        // <EventsList events={data.events} />
        <Suspense fallback={<p style={{textAlign: "center"}}>Loading...!</p>}>
            <Await resolve={data.events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    )
}

export default Events

const loadEvents = async () => {
    const response = await fetch("http://localhost:8080/events")
    
    if(!response.ok) {
        // 1
        // return{isError: true, message: "Could not fetch events!"}
    
        // 2
        // throw Error
    
        // 3
        // throw new Response(JSON.stringify({message: "Could not fetch events!"}), {status: 500})
        throw json({message: "Could not fetch events!"}, {status: 500})
    
    } else {
        const responseData = await response.json()
        return responseData.events
    }
}

export const eventsLoader = () => {
    return defer({
        events: loadEvents()
    })
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

/**
 * json() function
 * 
 * this function creates a response object that include data in the json format
 */

/**
 * defer is used to load page before the data is there
 * here this example "Home" and "New Events" button will load even before
 * the events load
 * 
 * if you have async loader with defer functions, you can simply add the "await"
 * keyword here, and that will make sure that defer waits for this data to be loaded
 * before loading that component at all
 * 
 * sample code below
 */

// export async function loader({ request, params }) {
//     const id = params.eventId;

//     return defer({
//         event: await loadEvent(id),
//         events: loadEvents(),
//     })
// }
