import { SafeAreaView, StyleSheet, Text, View, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const Experience = () => {
  const amdocsData = [
    "Working as a Front End Developer on developing modules & their story book in React.",
    "Working on getting requirements from client and make Web Pages and Mobile Apps as per XDC/Figma design provided by the client.",
    "Working on integrating frontend with Rest Api.",
    "Working on React, Redux, Typescript, React-Native, Material-UI, Scss Tech Stack.",
    "Built several reusable components in React & React-Native.",
  ];
  const tcsData = [
    "Worked on Micro Front End apps in NextJS, TailwindCSS and ContentStack from scratch.",
    "Worked on different features, stories & enhancements for a US based client's retail e-Commerce websites.",
    "Worked on performance improvement of websites.",
    "Worked on Migrating the same retail websites from Drupal to ContentStack.",
    "Built several reusable components in React.",
  ];
  const FirstRoute = () => (
    <View style={styles.scene}>
      <Text style={styles.title}>
        Software Developer @
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://www.amdocs.com/")}
        >
          AMDOCS
        </Text>
      </Text>
      <Text style={styles.subTitle}>July 2022 - Present</Text>
      {amdocsData.map((item) => (
        <View style={styles.list} key={item}>
          <MaterialIcons
            name="arrow-right"
            size={24}
            color="#64ffda"
            style={styles.arrow}
          />
          <Text style={styles.item}>{item}</Text>
        </View>
      ))}
    </View>
  );
  const SecondRoute = () => (
    <View style={styles.scene}>
      <Text style={styles.title}>
        Assistant System Enginner @
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://www.tcs.com/")}
        >
          TCS
        </Text>
      </Text>
      <Text style={styles.subTitle}>Sept 2020 - July 2k22</Text>
      {tcsData.map((item) => (
        <View style={styles.list} key={item}>
          <MaterialIcons
            name="arrow-right"
            size={24}
            color="#64ffda"
            style={styles.arrow}
          />
          <Text style={styles.item}>{item}</Text>
        </View>
      ))}
    </View>
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "AMDOCS" },
    { key: "second", title: "TCS" },
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#64ffda" }}
      labelStyle={{ fontWeight: "500" }}
      activeColor="#64ffda"
      style={{
        backgroundColor: "transparent",
      }}
    />
  );
  return (
    <SafeAreaView>
      <View style={styles.section}>
        <View style={styles.headingDiv}>
          <Text style={[styles.heading, styles.mainColor]}>02. </Text>
          <Text style={styles.heading}>Where I've Worked</Text>
          <View
            style={{
              flex: 1,
              height: 2,
              marginTop: 16,
              marginLeft: 10,
              backgroundColor: "#8892b0",
            }}
          />
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
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
    height: 700,
  },
  heading: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 25,
    color: "#8892b0",
  },
  headingDiv: {
    display: "flex",
    flexDirection: "row",
  },
  mainColor: {
    color: "#64ffda",
  },
  link: {
    color: "#64ffda",
    marginLeft: 2,
  },
  arrow: {
    marginLeft: -7,
    marginRight: 5,
  },
  list: {
    flexDirection: "row",
    marginBottom: 15,
  },
  item: {
    fontSize: 18,
    color: "#8892b0",
    width: "90%",
    lineHeight: 25,
  },
  title: {
    fontSize: 19,
    color: "#8892b0",
    marginTop: 25,
    marginBottom: 10,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 15,
    color: "#8892b0",
    marginBottom: 25,
    fontWeight: "500",
  },
});

export default Experience;
