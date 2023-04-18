import React, { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const Root = () => {
    const navigation = useNavigation()

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
