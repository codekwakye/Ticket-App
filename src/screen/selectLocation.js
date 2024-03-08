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
        marginTop: 170,
        alignItems: "center",
      }}>

        <Image source={require("./assets/location.jpg")} />
        <View style={{
          alignItems:"center",
        }}>
        <Text style={{
          marginTop: 40,
          fontSize: 15,
          fontWeight: "bold",
        }}>Select Location </Text>


        <Text style={{
          marginTop:10,
        }}>
        Let’s find your next event. Stay in tune with what’s happening in your area!
        </Text>
        </View>

        
      </View>

      {/**Sign In and Sign Up Section */}

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 60,
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0DCDAA",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Choose city</Text>
      </TouchableOpacity>
    </View>

    
  );
};

export default App;
