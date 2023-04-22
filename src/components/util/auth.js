import { redirect } from "react-router-dom"

// get token expiration time from time that token create
export const getTokenDuration = () => {
    const storedExpirationDate = localStorage.getItem("expiration")
    const expirationDate = new Date(storedExpirationDate)
    const now = new Date()
    const duration = expirationDate.getTime() - now.getTime()
    return duration
}

export const getAuthToken = () => {
    const token = localStorage.getItem("token")

    if(!token) {
        return null
    }

    const tokenDuration = getTokenDuration()

    if(tokenDuration < 0) {
        return "EXPIRED"
    }

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
