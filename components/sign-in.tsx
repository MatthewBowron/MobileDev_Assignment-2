"use client"
import { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import users from "../credentials.json"

interface Props { 
    navigate: ()=>void; 
}

const SignIn: FunctionComponent<Props> = ({navigate}) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");
  
  useEffect(() => {
    if (username != "" && username.length < 5)
      setErrorMessage1("Username must be at least 5 characters long.");
    else
      setErrorMessage1("");
    if (password != "" && password.length < 8){
      setErrorMessage2("Password must be at least 8 characters long");
    }else if (password != "" && !passwordRegex.test(password.trim()))
      setErrorMessage2("Password must include an uppercase letter, lowercase letter, number, and special character.");
    else
      setErrorMessage2("");
  }, [username, password]) 

  const handleSubmit = () => {
    if (username.length < 5) {
      setErrorMessage3("Username too short.");
    }else if(!passwordRegex.test(password.trim())){
      setErrorMessage3("Incorrect password format.");
    }else{
      setErrorMessage3("Username not found.");
      for (let user of users.users) {
        if (user.username == username) {
          if(user.password == password){
            setErrorMessage3("");
            navigate();
          }else{
            setErrorMessage3("Incorrect password.");
          }
        }
      }
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
        <Text style={styles.errorMssg}>{errorMessage1}</Text>
        
        <TextInput 
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.errorMssg}>{errorMessage2}</Text>
        
        <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.errorMssg}>{errorMessage3}</Text>

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