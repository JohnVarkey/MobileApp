import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Image,
} from "react-native";

function LoginPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function onChange(stateName, newValue) {
    if (stateName === "Email") setEmail(newValue);
    else setPassword(newValue);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require("./Component.png")} style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Username or Email"
          value={Email}
          onChangeText={function (newValue) {
            onChange("Email", newValue);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={Password}
          onChangeText={function (newValue) {
            onChange("Password", newValue);
          }}
          style={styles.input}
        />
        <Pressable
          style={{ ...styles.button, backgroundColor: "#FFE600" }}
          onPress={function () {
            alert("Email = " + Email + "\nPassword = " + Password);
          }}
        >
          <Text>SIGN IN</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={function () {
            alert("Pressed Register");
          }}
        >
          <Text>REGISTER</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 45,
    width: 250,
    paddingLeft: 20,
    borderRadius: 8,
    marginTop: 30,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#359DD7",
    marginBottom: "20%",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  container: { flex: 1, backgroundColor: "#25787D", width: "100%" },
  button: {
    backgroundColor: "white",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 30,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoginPage;
