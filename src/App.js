import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import EventsRoot from "./pages/EventsRoot";
import Events, { eventsLoader } from "./pages/Events";
import EventDetails, { eventDeleteAction, eventDetailsLoader } from "./pages/EventDetails";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Error from "./pages/Error";
import { eventAction } from "./components/EventForm";
import Newsletter, { newsletterAction } from "./pages/Newsletter";
import Authentication, { authenticationAction } from "./pages/Authentication";
import { logoutAction } from "./pages/Logout";

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
                {index: true, element: <EventDetails />, action: eventDeleteAction},
                {path: "edit", element: <EditEvent />, action: eventAction}

              ]
            },
            {path: "new", element: <NewEvent />, action: eventAction},
          ]
        },
        {path: "auth", element: <Authentication />, action: authenticationAction},
        {path: "newsletter", element: <Newsletter />, action: newsletterAction},
        {path: "logout", action: logoutAction}
      ]
    }
  ])

  return(
    <RouterProvider router={routes} />
  )
}

export default App
