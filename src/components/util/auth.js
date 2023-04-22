import { redirect } from "react-router-dom"

export const getAuthToken = () => {
    const token = localStorage.getItem("token")
    return token
}

export const tokenLoader = () => {
    return getAuthToken()
}

// adding rout protection
// prevent the accessing url manually when does not have token
export const checkAuthLoader = () => {
    const token = getAuthToken()

    if(!token) {
        return redirect("/auth")
    }

    return null
}
