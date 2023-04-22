import React, { useState } from "react";
import { Form } from "react-router-dom";

import classes from "./AuthForm.module.css"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState()

    const switchAuthHandler = () => {
        setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin)
    }
    
    return(
        <Form method="post" className={classes.form}>
            <h1>{isLogin ? "Login" : "Create a new user"}</h1>
            <p>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" required />
            </p>
            <div className={classes.actions}>
                <button onClick={switchAuthHandler} type="button">
                    {isLogin ? "Create a new user" : "Login"}
                </button>
                <button>Save</button>
            </div>
        </Form>
    )
}

export default AuthForm
