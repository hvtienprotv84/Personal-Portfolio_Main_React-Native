import { SafeAreaView, StyleSheet, Text, View, Linking, TouchableOpacity, Image } from "react-native";
import { Button } from "@react-native-material/core";
import React from "react";
import TypeWriter from "../Typewriter";

const Hero = () => {
  const openURL_Website = () => {
    Linking.openURL('https://prsonal-portfolio-main.vercel.app/')
      .catch(err => console.error('An error occurred', err)); // Handle error if any
  };

  const openURL_Github = () => {
    Linking.openURL('https://github.com/hvtienprotv84')
      .catch(err => console.error('An error occurred', err)); // Handle error if any
  };

  return (
    <SafeAreaView>
      <View style={styles.section}>
        <Text style={styles.overline}>Xin Chào Mọi Người, Tôi là</Text>
        <TypeWriter
          style={styles.name}
          words={["Huỳnh Vĩnh Tiến"]}
          wait={3000}
        />
        <Text style={styles.shortDesc}>
          Software Engineer
        </Text>
        <Text style={styles.description}>
          I&lsquo;m a Front-End developer based in Pune, India, specializing in
          developing high-quality websites with the latest technologies & best
          practices.
        </Text>
        <View style={styles.container_button}>

        <TouchableOpacity onPress={openURL_Website}>
        <View style={styles.button}>
          <View style={styles.flex_button}>
            <Image
              style={styles.Logo_Website}
              source={require('../../assets/web.png')} // Kiểm tra lại đường dẫn ảnh
            />
            <Text style={styles.text_button}>Website</Text>
          </View>
        </View>
      </TouchableOpacity>

          <TouchableOpacity onPress={openURL_Github}>
            <View style={[styles.button, styles.button2]}>
              <View style={styles.flex_button}>
                <Image
                  style={styles.Logo_Website}
                  source={require('../../assets/github.png')} // Kiểm tra lại đường dẫn ảnh
                />
                  <Text style={styles.text_button}>Github</Text>
              </View>
            </View>
          </TouchableOpacity>
        
          {/* <Button
            style={styles.button}
            title="Website"
            uppercase={false}
            tintColor="#64ffda"
            titleStyle={styles.btnTitle}
            onPress={() =>
              Linking.openURL(
                `mailto:abc@gmail.com?subject=Get%20In%20Touch&body=Hello%20ABC,`
              )
            }
          /> */}
          {/* <Button
            style={[styles.button, styles.button2]} // Áp dụng thêm style cụ thể
            id="ok"
            title="Github"
            uppercase={false}
            tintColor="#64ffda"
            titleStyle={styles.btnTitle}
            onPress={() =>
              Linking.openURL(
                `mailto:abc@gmail.com?subject=Get%20In%20Touch&body=Hello%20ABC,`
              )
            }
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container_button:{
    display: "flex",
    flexDirection: "row",

  },
  overline: {
    fontSize: 24,
    fontWeight: "600",
    color: "#64ffda",
    marginTop: "8%",
    marginBottom: 10,
  },
  section: {
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#ffffff",
    height: 45,
  },
  shortDesc: {
    fontSize: 28,
    color: "#fffa00",
    lineHeight: 35,
    fontWeight: "bold"
  },
  description: {
    fontSize: 18,
    color: "#8892b0",
    marginTop: 16,
    lineHeight: 28,
  },
  text_button:{
    color: "#64ffda",
    fontSize: 24,
    fontWeight: "400",
    marginLeft: 5,
  }, 
  button: {
    marginTop: "10%",
    width: 170,
    borderColor: "#64ffda",
    borderStyle: "dashed",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  button2:{
    marginLeft: 10,
  },
  Logo_Website:{
    width: 28,
    height: 28,
  },
  flex_button:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
    
  },
});

export default Hero;
