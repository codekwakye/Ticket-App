import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center"
    }}>
      {/* Welcome And Image Section */}
      <View style={{
        marginTop: 150,
        alignItems: "center",
      }}>
  
        <Text style={{
          fontSize: 35,
          fontWeight: "bold",
        }}>Welcome!</Text>

        <Text style={{
          color: "#7c7c7c",
          marginTop: 9,
          marginBottom: 70,
        }}>Sign in or create a new account</Text>
      

        <Image source={require("./assets/Frame.jpg")} />
      </View>

      {/**Sign In and Sign Up Section */}

      <View style={{
        marginTop: 90,
      }}>
        {/** sign in button*/}
        <TouchableOpacity style={{
          backgroundColor:"#0dcdaa",
          padding: 10,
          width: 250,
          height: 40,
          alignItems: "center",
          borderRadius: 10,
        }}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor:"white",
          padding: 10,
          marginTop: 10,
          width: 250,
          height: 40,
          alignItems: "center",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#7C7C7C",
        }}>
          <Text style={{ color: "#7C7C7C" }}>No account yet? <Text style={{ color: "#0dcdaa" }}>Sign up</Text></Text>
        </TouchableOpacity>
      </View>
    </View>

    
  );
};

export default App;
