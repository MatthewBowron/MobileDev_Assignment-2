// This file contains the logic for validating user sign-in credentials

import { navigate } from "expo-router/build/global-state/routing"
import users from "../../credentials.json"


export default function validateSignIn(username:String, password:String){
    // This function validate if username and password are in the credentials.json file
    // and return true if they are, otherwise return false

    for (let user of users.users) {
        if (user.username === username && user.password === password) {
            // if username and password return true
            return true
        }
    }
}
