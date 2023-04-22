import React from "react";
import { Form, Link, useActionData, useNavigation, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css"

const AuthForm = () => {
    const data = useActionData()
    const navigation = useNavigation()
    // const [searchParams, setSearchParams] = useSearchParams()
    const [searchParams] = useSearchParams()
    const isLogin = searchParams.get("mode") === "login"
    const isSubmitting = navigation.state === "submitting"
    
    return(
        <Form method="post" className={classes.form}>
            <h1>{isLogin ? "Login" : "Create a new user"}</h1>

            {/* backend validations */}
            {
                data && data.errors &&
                <ul>
                    {Object.values(data.errors).map((error) => (
                        <li key={error}>
                            {error}
                        </li>
                    ))}
                </ul>
            }
            {
                data && data.message &&
                <p>{data.message}</p>
            }
            
            <p>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
            </p>
            <p>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" required />
            </p>
            <div className={classes.actions}>
                <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                    {isLogin ? "Create a new user" : "Login"}
                </Link>
                <button disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Save"}</button>
            </div>
        </Form>
    )
}

export default AuthForm
