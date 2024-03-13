import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,alert
} from "react-native";

import auth from "@react-native-firebase/auth";
import { Avatar } from "react-native-elements";

const Settings = ({navigation}) => {
  const imageUrl = 'https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg';
  const [user,setUser]=useState();
  useEffect(()=>{
    const subscriber=auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });return subscriber;
  },[])
  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure? You want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            auth()
              .signOut()
              .then(() => navigation.replace("Login"))
              // .catch((error) => {
              //   console.log(error);
              //   if (error.code === "auth/no-current-user")
              //     navigation.replace("Auth");
              //   else alert(error);
              // });
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
           <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{color:'black',fontSize:25,fontWeight:'bold'}}
          >
            Your profile
          </Text>
          <Avatar
          rounded
          source={{ uri: imageUrl }}
          size='large'
          />
          {user ? (
            <Text  style={styles.text}>
              Welcome{" "}
              {user.displayName
                ? user.displayName
                : user.email}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={logout}
          >
            <Text style={styles.buttonTextStyle}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({

  buttonStyle: {
    minWidth: 300,
    backgroundColor: "red",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  text:{
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
    color:'black'
  }
});