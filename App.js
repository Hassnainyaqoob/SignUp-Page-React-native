import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicon } from "react-native-vector-icons/Ionicons"
import React from 'react'



function App() {
  return (


    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style={{ flex: 0.3, marginTop: 22 }}>

        <Text style={{ fontSize: 25, textAlign: "center", color: "black", fontSize: 45, fontWeight: "bold", marginTop: 18 }}>Sign Up</Text>
      </View>

      <View style={{ flex: 0.6, alignItems: "center", marginTop: 36 }}>
        <TextInput placeholder='Name' placeholderTextColor="black" style={{ backgroundColor: "lightgray", fontSize: 16, width: 290, paddingHorizontal: 15, marginBottom: 30 }} />

        <TextInput placeholder='Email' placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 15, fontSize: 16, marginBottom: 30 }} />
        <TextInput placeholder='Password' secureTextEntry={true} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 15, fontSize: 16 }} />
      </View>


      <View style={{ flex: 0.4, alignItems: "center", marginTop: 55 }}>

        <TouchableOpacity style={{ backgroundColor: "black", width: 120, borderRadius: 13, marginTop: 15 }}>
          <Text style={{ color: "lightgray", fontSize: 25, padding: 15 }}>Sign Up</Text>
        </TouchableOpacity>

      </View>

    </View>








  )
}

export default App

const styles = StyleSheet.create({})