import { SafeAreaView, StyleSheet, Text, View, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const Experience = () => {
  const amdocsData = [
    "Ngành Học: Technology Information.",
    "Chuyên Ngành: Software Engineer.",
    "GPA: 3.5/4.",
    "Tốt nghiệp loại Giỏi toàn khóa học.",
    // "Built several reusable components in React & React-Native.",
  ];
  const tcsData = [
    "Front-End Developer",
    "Công nghệ sử dụng cho dự án: ReactJS, Tailwind CSS, Github,...",
    "Top 1. Sinh Viên Thực Tập Xuất Sắc.",
  ];
  const FirstRoute = () => (
    <View style={styles.scene}>
      <Text style={styles.title}>
        University of Technology HCMC
        {/* <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://www.amdocs.com/")}
        >
          AMDOCS
        </Text> */}
      </Text>
      {/* <Text style={styles.title2}>
        Ngành Học: Technology Information
      </Text>
      <Text style={styles.title2}>
        Chuyên Ngành: Software Engineer
      </Text> */}
      <Text style={styles.subTitle}>2020 - 2024</Text>
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
        Công ty TNHH Giải Pháp và Công Nghệ {""}
        {/* <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://www.tcs.com/")}
        >
          TCS
        </Text> */}
      </Text>
      {/* <Text style={styles.title2}>
        Front-End Developer
      </Text> */}
      <Text style={styles.subTitle}>April 2024 - July 2024</Text>
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
    { key: "first", title: "University 🏫" },
    { key: "second", title: "Intern 👨‍💻" },
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
          <Text style={styles.heading}>Experience</Text>
          <View
            style={{
              flex: 1,
              height: 2,
              marginTop: 16,
              marginLeft: 10,
              // backgroundColor: "#8892b0",
              backgroundColor: "#ffffff",
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
    // color: "#8892b0",
    color: "#ffffff",
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
    // color: "#8892b0",
    color: "#ffffff",
    width: "90%",
    lineHeight: 25,
  },
  title: {
    fontSize: 19,
    // color: "#8892b0",
    color: "#ffffff",
    marginTop: 25,
    marginBottom: 10,
    fontWeight: "500",
  },
  title2: {
    fontSize: 19,
    color: "#8892b0",
    marginBottom: 10,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 15,
    // color: "#8892b0",
    color: "#ffffff",
    marginBottom: 25,
    fontWeight: "500",
  },
});

export default Experience;
