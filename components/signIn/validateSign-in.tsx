// This file contains the logic for validating user sign-in credentials

import { navigate } from "expo-router/build/global-state/routing"
import users from "../../credentials.json"


export default function validateSignIn(username:string, password:string){
    // This function validate if username and password are in the credentials.json file
    // and return true if they are, otherwise return false

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/; // password is at least 8 characters long and includes at least one uppercase letter, one lowercase letter, one number, and one special character

    if (username.length < 5) {
        // if username is less than 5 characters long
        alert("Username must be at least 5 characters long.")
        return false
    }
    
    if (!passwordRegex.test(password.trim())) {
    // if password does not meet the requirements
    alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
    return false;
    }

    for (let user of users.users) {
        if (user.username === username && user.password === password) {
            // if username and password return true
            return true
        } else {
            // if username and password do not match
            alert("Username or password is incorrect.");
            return false;
        }
    }
}
