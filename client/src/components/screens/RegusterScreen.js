import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const RegisterScreen = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <div >
        <form>
            <label htmlFor="name">Username:</label>
            <input type="text" required id="username" placeholder="Enter username" value = {username} />

            <label htmlFor="name">Email:</label>
            <input type="text" required id="email" placeholder="Enter email" value = {email}/>

            <label htmlFor="name">Password:</label>
            <input type="text" required id="password" placeholder="Enter password" value = {password}/>

            <label htmlFor="name">Confirm:</label>
            <input type="text" required id="name" placeholder="Enter confirm password" value = {confirmPassword}/>
        </form>
    </div>
    )
}

export default RegisterScreen;