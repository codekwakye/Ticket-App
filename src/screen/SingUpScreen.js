import React from "react";
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

// Import the eye icon for viewing password
import eyeIcon from "./assets/eye_icon.png";

//todo: Understand flex direction, safeAreaView, TextInput

const App = () => {
  return (
    <SafeAreaView style={{
     flex: 1, 
     marginLeft: 20,
     marginRight: 20, 
     marginTop: 80,
    }}>
      {/**Header Section */}
      <View
        style={{
          marginLeft: 40,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
         <Ionicons style={{
        marginRight: 10,
      }}
      name="arrow-back" size={24} color="black" />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          create new account
        </Text>
      </View>

      {/**Form Section */}

      <View style={{ marginTop: 90 }}>
        {/**Email and TextInput */}
        <View>
          <Text style={{
          color: "#7C7C7C", 
          fontWeight: "bold", 
          fontSize: 15
           }}>
            Full name
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Enter your name"
          />
        </View>
        <View>
          <Text style={{
          color: "#7C7C7C", 
          fontWeight: "bold", 
          fontSize: 15,
          marginTop: 10, 
           }}>
            Email address
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="name@example.com"
          />
        </View>
        <View>
          <Text style={{
          color: "#7C7C7C", 
          fontWeight: "bold", 
          fontSize: 15,
          marginTop: 10,
           }}>
            create Password
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Enter your Password"
          />
        </View>

        <View>
          <Text style={{
          color: "#7C7C7C", 
          fontWeight: "bold", 
          fontSize: 15,
          marginTop: 10,
           }}>
            Repeat Password
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginTop: 10,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Repeat new password"
          />
        </View>
       
      </View>

      {/**Button Section */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 60,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0DCDAA",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;