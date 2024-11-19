import { SafeAreaView, StyleSheet, Text, View, Linking } from "react-native";
import { Button } from "@react-native-material/core";
import React from "react";

const Contact = () => {
  return (
    <SafeAreaView>
      <View style={styles.section}>
        <View style={styles.headingDiv}>
          <Text style={[styles.heading, styles.mainColor]}>04. </Text>
          <Text style={styles.heading}>What's Next?</Text>
        </View>
        <Text style={styles.title}>Get In Touch</Text>
        <Text style={styles.desc}>
          However I&lsquo;m not presently searching for freelance opportunities,
          my inbox is usually open. Whether or not for a possible project or
          simply to mention hi, I&lsquo;ll strive my best to answer your email!
        </Text>
        <Button
          style={styles.button}
          title="Say Hello"
          uppercase={false}
          tintColor="#64ffda"
          titleStyle={styles.btnTitle}
          onPress={() =>
            Linking.openURL(
              `mailto:abc@gmail.com?subject=Get%20In%20Touch&body=Hello%20ABC,`
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: "8%",
    paddingRight: "8%",
    marginTop: "15%",
    marginBottom: "5%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 15,
    color: "#64ffda",
    textAlign: "center",
  },
  headingDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  mainColor: {
    color: "#64ffda",
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
    color: "#8892b0",
    textAlign: "center",
  },
  desc: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "#8892b0",
    lineHeight: 25,
  },
  button: {
    marginTop: "10%",
    width: 175,
    borderColor: "#64ffda",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnTitle: {
    fontSize: 18,
  },
});

export default Contact;
