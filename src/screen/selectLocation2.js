import React from "react";
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  return (
    <SafeAreaView style={{
      marginLeft: 20,
      marginRight: 20,
      marginTop: 80,
    }}>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginRight: 15
        }}
      >
      <Ionicons style={{
        marginRight: 10,
      }}
      name="arrow-back" size={24} color="black" />
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              padding: 10,
              borderRadius: 10,
              flex: 1,
            }}
            placeholder="Select your location"
          />
          <TouchableOpacity style={{ marginLeft: -40 }}>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        marginTop: 30,
      }}>
          <Text style={{
            color: "#7C7C7C",
            fontSize: 15,
          }}> Most searched</Text>
        </View>
        <View style={{
          marginTop:20
        }}>
          <View>
            <Text style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#262627"
            }}>Barcelona</Text>
            <Text>spain</Text>

            <Text style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#262627",
              marginTop:20}}
              >Madrid</Text>
            <Text>spain</Text>

            <Text style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#262627",
              marginTop:20
              }}
              >London</Text>
            <Text>United Kingdom</Text>

            <Text style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#262627",
              marginTop:20
              }} >Berlin</Text>
            <Text>German</Text>

            <Text style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#262627",
              marginTop:20
            }}>Rome</Text>
            <Text>Italy</Text>

            <Text style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#262627",
              marginTop:20
            }}>Kumasi</Text>
            <Text>Ghana</Text>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default App;
