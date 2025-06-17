"use client"
import { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import  validateSignIn  from "./validateSign-in";

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
 

  const cleanUp = () => {
    setUsername("");
    setPassword("");
  }


  const handleSubmit = () => { // handles the form submission, validates the input, and navigates to the next screen if successful
    if (validateSignIn(username, password)) {
      navigate();
    }
    else {
      cleanUp(); // cleans up the input fields
    }
  }

    
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Sign In to App</Text>


        <TextInput 
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />


        <Text style={styles.errorMssg}>{errorMessages[0]}</Text>
        
        
        <TextInput 
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        
        
        <Text style={styles.errorMssg}>{errorMessages[1]}</Text>

        
        <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
        
        
        <Text style={styles.errorMssg}>{errorMessages[2]}</Text>
      
      
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#26D',
    fontSize: 24,
    marginBottom: 25,
  },
  input: {
    width: 250,
    fontSize: 18,
    padding: 8,
    margin: 5,
    borderWidth: 1,
  },
  errorMssg: {
    color: '#B22',
    marginBottom: 10,
  },
  button: {
    fontSize: 20,
    paddingHorizontal: 25,
    paddingVertical: 8,
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#28E',
    color: '#FFF',
  }
});

export default SignIn;