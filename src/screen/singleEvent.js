import React from "react";
import { View, ImageBackground, SafeAreaView, TouchableOpacity, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const App = () => {
  return (
    <SafeAreaView style={{
       flex: 1,
    }}>
      <View style={{ flex: 1, }}>
        <ImageBackground 
          source={require("./assets/roseline.jpg")}
          style={{
            width: "100%",
            height: 285,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            top:-50, 
          }}
          resizeMode="cover"
        >
          <View style={{ flexDirection: "row", 
                         marginBottom: 10
          }}>
            <TouchableOpacity style={{ marginRight: 320, }}>
            <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 10}}>
              <FontAwesome5 name="heart" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
            <Feather style={{
              marginRight: 8
            }}name="share-2" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View>
          <Text style={{ 
            marginTop: -25,
            fontSize: 20,
            fontWeight: "bold", 
            marginLeft: 20,
            color: "#000000"
          }}>
          La Rosalia
          </Text>
        </View>
        <View style={{
          flexDirection: "row",
          marginTop: 20
        }}>
      <AntDesign style={{
        marginLeft: 20
      }}name="calendar" size={24} color="black" />
    <Text style={{
      marginLeft: 10,
      fontWeight: "bold",
    }}>
      Mon, Apr 18 · 21:00 Pm
      </Text>
      </View>
      <View style={{
        marginLeft: 55,
        marginTop: -1,
      }}>
      <Text>
      21:00 Pm - 23.30 Pm
      </Text>
      <TouchableOpacity>
      <Text style={{
        color: "#2854C6",
        fontSize: 12,
        marginTop:3
      }}>Add to calandar</Text>
      </TouchableOpacity>
      </View>
      <View style={{
          flexDirection: "row",
          marginTop: 20
        }}>
      <EvilIcons style={{
        marginLeft:13
      }} name="location" size={29} color="black" />
    <Text style={{
      marginLeft: 10,
      fontWeight: "bold",
    }}>
      Palau Sant Jordi
      </Text>
      </View>
      <View style={{
        marginLeft: 54,
        marginTop: -1,
        fontSize: 6
      }}>
      <Text>
      Passeig Olímpic, 5-7, 08038 Barcelona
      </Text>
      <TouchableOpacity>
      <Text style={{
        color: "#2854C6",
        fontSize: 12,
        marginTop:3
      }}>View on maps</Text>
      </TouchableOpacity>
      </View>
      <View style={{
          flexDirection: "row",
          marginTop: 20
        }}>
     <Foundation style={{
      marginLeft: 20
     }} name="dollar" size={29} color="black" />
    <Text style={{
      marginLeft: 15,
      fontWeight: "bold",
    }}>
     Refund Policy
      </Text>
      </View>
      <View style={{
        marginLeft: 50,
        marginTop: -1,
        fontSize: 6
      }}>
      <Text>
      Flut fee is not-refundable.
      </Text>
      
      </View>
      <View style={{
          marginTop: 30
        }}>
     
    <Text style={{
      marginLeft: 15,
      fontWeight: "bold",
    }}>
     About
      </Text>
      </View>
      <View style={{
        marginLeft: 15,
        marginTop: 2,
        fontSize: 6
      }}>
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      
      </View>
      <View  style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 130,
          backgroundColor: "#F2F2F2",
          padding: 20,
          borderRadius: 10,
          flexDirection: "row",
        }}>
          <Text
         style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 8
         }}>Price</Text>
          
          
         <TouchableOpacity style={{
          width: "50%",
          height: 50,
          backgroundColor: "#0DCDAA",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderRadius: 10,
          marginLeft: 150}}>
            <Text style={{color: "white"}}>Tickets</Text>
          </TouchableOpacity>
        
      </View>
      <View  style={{
          position: "relative",
          bottom: 0,
          marginTop: 128,
          marginLeft:10
          }} ><Text>€ 35.00 - € 75.00</Text></View>
      </View>
     
    </SafeAreaView>
  );
};

export default App;
