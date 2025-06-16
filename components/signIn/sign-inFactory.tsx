
import { navigate } from "expo-router/build/global-state/routing"
import users from "../../credentials.json"

export default function handleSignIn(username:String, password:String){
    // This function would typically handle the login logic

    for (let user of users.users) {
        if (user.username === username && user.password === password) {
            // Simulate successful login
            return true
        }
    }
}