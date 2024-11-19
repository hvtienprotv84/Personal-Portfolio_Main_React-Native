import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Linking,
  ScrollView,
  Platform,
} from "react-native";
import { AppBar, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Svg, { Polygon, G } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const App = () => {
  const [isHamMenuOpen, setHamMenuOpen] = React.useState(false);
  const [ref, setRef] = React.useState();

  const goToSection = (position) => {
    ref.scrollTo({
      x: 0,
      y: position,
      animated: true,
    });
    setHamMenuOpen(false);
  };

  return (
    <SafeAreaView style={styles.home}>
      <StatusBar style="light" />
      <AppBar
        leading={(props) => (
          <View>
            {/* <Svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 84 96"
              width="40"
              height="40"
              style={styles.svg}
            >
              <G id="Logo" transform="translate(-8.000000, -2.000000)">
                <G transform="translate(11.000000, 5.000000)">
                  <Polygon
                    id="Shape"
                    stroke="#64ffda"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                  />
                </G>
              </G>
            </Svg> */}
            <Image
            style={styles.tinyLogo}
            source={require('./assets/logo_1.png')}
          />
            {/* <Text style={styles.V}>Huỳnh Vĩnh Tiến</Text> */}
          </View>
        )}
        trailing={(props) => (
          <IconButton
            onPress={() => setHamMenuOpen(true)}
            style={{ marginRight: 10 }}
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
        color="#0a192f"
      />
      {isHamMenuOpen && (
        <View style={styles.hamDiv}>
          <AntDesign
            name="close"
            size={26}
            color="#64ffda"
            style={styles.closeIcon}
            onPress={() => setHamMenuOpen(false)}
          />
          <View>
            <FlatList
              data={[
                { key: "About", value: "01.", position: 500 },
                { key: "Experience", value: "02.", position: 1520 },
                { key: "Projects", value: "03.", position: 2170 },
                { key: "Contact", value: "04.", position: 4250 },
                { key: "Contact123", value: "05.", position: 0 },
              ]}
              style={styles.lists}
              renderItem={({ item }) => (
                <View style={styles.list}>
                  <Text style={styles.value}>{item.value}</Text>
                  <Text
                    style={styles.item}
                    onPress={() => goToSection(item.position)}
                  >
                    {item.key}
                  </Text>
                </View>
              )}
            />
          </View>
          <Button
            style={styles.button}
            title="Resume"
            uppercase={false}
            tintColor="#64ffda"
            titleStyle={styles.btnTitle}
            onPress={() =>
              Linking.openURL("https://www.abc.in.net/ABCResume.pdf")
            }
          />
        </View>
      )}
      <ScrollView
        ref={(ref) => {
          setRef(ref);
        }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    display: "flex",
    backgroundColor: "#0a192f",
    color: "#8892b0",
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  tinyLogo:{
    maxWidth: 100,
    width: 50,
    height: 50,
    // backgroundColor: "red",
    marginLeft: 20,
  },
  svg: {
    marginLeft: 25,
  },
  V: {
    position: "absolute",
    top: 6.5,
    left: 38,
    fontSize: 19.5,
    color: "#64ffda",
  },
  hamDiv: {
    width: "75%",
    height: "100%",
    zIndex: 9,
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#020c1b",
  },
  closeIcon: {
    marginTop: "15%",
    position: "absolute",
    right: "10%",
    zIndex: 99999999,
  },
  item: {
    color: "white",
    fontSize: 20,
    marginBottom: 5,
    textAlign: "center",
  },
  value: {
    color: "#64ffda",
    fontSize: 20,
    marginBottom: 5,
    textAlign: "center",
  },
  lists: {
    marginTop: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  list: {
    marginBottom: 10,
  },
  button: {
    marginTop: "10%",
    width: 170,
    borderColor: "#64ffda",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "transparent",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
  btnTitle: {
    fontSize: 18,
  },
});

export default App;
