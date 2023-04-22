import React, { Fragment, useEffect } from "react";
import { Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../components/util/auth";

const Root = () => {
    const navigation = useNavigation()
    const token = useLoaderData()
    const submit = useSubmit()

    // logging out automatically after token time expiration
    useEffect(() => {

        if(!token) {
            return
        }

        if(token === "EXPIRED") {
            submit(null, {action: "/logout", method: "post"})
            return
        }

        const tokenDuration = getTokenDuration()
        console.log(tokenDuration)

        setTimeout(() => {
            submit(null, {action: "/logout", method: "post"})
        }, tokenDuration)
    }, [token, submit])

    return(
        <Fragment>
            <MainNavigation />
            <main>
                {navigation.state === "loading" && <p>Loading...</p>}
                <Outlet />
            </main>
        </Fragment>
    )
}

export default Root

/**
 * useNavigation() -> use to check current route transition state
 * 
 * there are three states (loading / idle / submitting)
 * 
 * loader indicator should nt be added to page which transitioning to,
 * it should be added to some page or component which is already visible
 */
