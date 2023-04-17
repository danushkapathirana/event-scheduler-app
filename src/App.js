import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import EventsRoot from "./pages/EventsRoot";
import Events, { eventsLoader } from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {index: true, element: <Home />},
        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {index: true, element: <Events />, loader: eventsLoader},
            {path: ":eventId", element: <EventDetails />},
            {path: "new", element: <NewEvent />},
            {path: ":eventId/edit", element: <EditEvent />}
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
