import { SafeAreaView, StyleSheet, Text, View, Linking, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Footer = () => {
  return (
    <SafeAreaView>
      <View style={styles.section}>
        <View style={styles.iconDiv}>
          <AntDesign
            style={styles.icon}
            name="github"
            size={24}
            color="#8892b0"
            onPress={() => Linking.openURL("https://github.com/abc-26")}
          />
          <AntDesign
            style={styles.icon}
            name="linkedin-square"
            size={24}
            color="#8892b0"
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/abc-929354153/"
              )
            }
          />
          <AntDesign
            style={styles.icon}
            name="instagram"
            size={24}
            color="#8892b0"
            onPress={() =>
              Linking.openURL("https://www.instagram.com/vips.26/")
            }
          />
          <AntDesign
            style={[styles.icon, styles.lastIcon]}
            name="twitter"
            size={24}
            color="#8892b0"
            onPress={() =>
              Linking.openURL("https://twitter.com/abc")
            }
          />
        </View>
        <Text style={styles.email}>huynhvinhtien.84@gmail.com</Text>
          <View style={styles.container_footer}>
            <Text style={styles.footDesc}>
              Huỳnh Vĩnh Tiến <Text style={styles.heart}>&#10084;</Text> Việt Nam
            </Text>
            <Image
              style={styles.vietnam}
              source={require('../../assets/vietnam.png')}
            />            
          </View>
        <Text style={styles.copyright}>&copy; All Rights Reserved | 2024</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
    marginTop: "15%",
    backgroundColor: "#172a45",
  },
  email: {
    fontSize: 18,
    marginBottom: 15,
    color: "#00ced1",
    textAlign: "center",
    fontWeight: "bold",
  },
  container_footer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  footDesc: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    // color: "#8892b0",
    color: "#ffe700",
    fontWeight: "bold",
  },
  heart: {
    color: "red",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 10,
  },
  icon: {
    marginRight: 30,
    color: "#ffffff",
  },
  lastIcon: {
    marginRight: 0,
  },
  vietnam:{
    width: 40,
    height: 25,
    marginLeft: 5,
  },
  copyright:{
    // color: "#8892b0",
    color: "#ff0000",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold", 
  }
});

export default Footer;
