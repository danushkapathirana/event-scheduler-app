import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import EventsRoot from "./pages/EventsRoot";
import Events, { eventsLoader } from "./pages/Events";
import EventDetails, { eventDetailsLoader } from "./pages/EventDetails";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Error from "./pages/Error";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {index: true, element: <Home />},
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {index: true, element: <Events />, loader: eventsLoader},
            {
              path: ":eventId",
              id: "event-details",
              loader: eventDetailsLoader,
              children: [
                {index: true, element: <EventDetails />},
                {path: "edit", element: <EditEvent />}

              ]
            },
            {path: "new", element: <NewEvent />},
          ]
        }
      ]
    }
  ])

  return(
    <RouterProvider router={routes} />
  )
}

export default App
