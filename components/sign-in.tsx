import { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props { 
    navigate: ()=>void; 
}

const SignIn: FunctionComponent<Props> = ({navigate}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var errorMessages = ["", "", ""]
  
  useEffect(() => {
    errorMessages[0] = "";
  }, [username]) // Username must be at least 5 characters long
  useEffect(() => {
    errorMessages[1] = "";
  }, [password]) // Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.
    
  const handleSubmit = () => {
    errorMessages[2] = ""
    navigate() // navigate one credentials verified
  }
    
    return(
        <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    padding: 5,
    margin: 5,
    borderWidth: 1,
  }
});
export default SignIn;