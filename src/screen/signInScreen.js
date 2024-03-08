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
          Welcome Back!
        </Text>
      </View>

      {/**Form Section */}

      <View style={{ marginTop: 130 }}>
        {/**Email and TextInput */}
        <View>
          <Text style={{
          color: "#7C7C7C", 
          fontWeight: "bold", 
          fontSize: 15
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
        <Text style={{
          color: "#7C7C7C", 
          fontWeight: "bold", 
          fontSize: 15,
          marginTop: 10
           }}>
            Password
          </Text>
        {/**Password and TextInput */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
  <TextInput
    style={{
      borderWidth: 1,
      borderColor: "gray",
      marginTop: 10,
      padding: 10,
      borderRadius: 10,
      flex: 1,
    }}
    placeholder="Enter your password"
  />
  <View style={{ position: 'absolute', right: 10 }}>
    <TouchableOpacity>
      <Image source={eyeIcon} style={{ width: 20, height: 20 }} />
    </TouchableOpacity>
  </View>
</View>

        {/**Remember me  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#7C7C7C",
            }}
          >
            Remember me
          </Text>

          <Text>todo</Text>
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
        <Text style={{ color: "white", fontWeight: "bold" }}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;