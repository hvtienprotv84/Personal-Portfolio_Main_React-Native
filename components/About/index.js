import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  FlatList,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

const About = ({item}) => {
  
  const data = [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "VueJS",
    "Angular",
    "Redux",
    "React Native",
    "Tailwind CSS",
    "SASS",
    "Bootstrap",
    "Docker", 
    "Git",
  ];

  return (
    <SafeAreaView>
      <View style={styles.section}>
        <View style={styles.headingDiv}>
          <Text style={[styles.heading, styles.mainColor]}>01. </Text>
          <Text style={styles.heading}>About Me</Text>
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
        <Text style={styles.text}>
          Hello! I&lsquo;m ABC, a Front-End developer based primarily in Pune,
          VietNam, who has been jubilantly writing code for responsive websites
          and mobile apps.
        </Text>
        <Text style={styles.text}>
          After my graduation from
          <Text> </Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.trubainstitute.ac.in/")}
          >
            TCST
          </Text>
          , Bhopal, I started my career as a front-end developer and today,
          after 2.8+ years, as a front-end developer, I worked on a good short
          of web & mobile apps.
        </Text>
        <Text style={styles.text}>
          Currently, I&lsquo;m working with
          <Text> </Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.amdocs.com/")}
          >
            AMDOCS
          </Text>
          .
        </Text>
        

        <FlatList
          numColumns={2}
          data={data}
          style={styles.lists}
          renderItem={({ item }) => {
            // Xác định màu sắc dựa trên item
            let itemColor = 'black'; // Màu mặc định
            let imageSource;

            // Nếu item là "JavaScript", đặt màu vàng
            if (item === 'JavaScript') {
              itemColor = '#FFD700'; // Màu vàng cho JavaScript
              imageSource = require('../../assets/skill/js.png'); // Đường dẫn ảnh JavaScript
            } else if (item === 'TypeScript') {
              itemColor = '#1E90FF'; // Màu xanh dương cho React
              imageSource = require('../../assets/skill/ts.png'); // Đường dẫn ảnh React
            } else if (item === 'ReactJS') {
              itemColor = '#08ddff';             
              imageSource = require('../../assets/skill/react.png');
            } else if (item === 'NextJS') {
              itemColor = '#ffffff';             
              imageSource = require('../../assets/skill/next.png');
            } else if (item === 'VueJS') {
              itemColor = '#47ba87';             
              imageSource = require('../../assets/skill/vue.png');
            } else if (item === 'Angular') {
              itemColor = '#e6303e';             
              imageSource = require('../../assets/skill/angular.png');
            } else if (item === 'Redux') {
              itemColor = '#7a50be';             
              imageSource = require('../../assets/skill/redux.png');
            } else if (item === 'React Native') {
              itemColor = '#08acda';             
              imageSource = require('../../assets/skill/react-native.png');
            } else if (item === 'Tailwind CSS') {
              itemColor = '#1dc0cd';
              imageSource = require('../../assets/skill/tailwind.png');
            } else if (item === 'SASS') {
              itemColor = '#f06292';             
              imageSource = require('../../assets/skill/sass.png');
            } else if (item === 'Bootstrap') {
              itemColor = '#7c4dff';             
              imageSource = require('../../assets/skill/bootstrap.png');
            } else if (item === 'Docker') {
              itemColor = '#2395ec';             
              imageSource = require('../../assets/skill/docker.png');
            } else if (item === 'Git') {
              itemColor = '#f4511e';             
              imageSource = require('../../assets/skill/git.png');
            } else if (item === 'Redux') {
              itemColor = '#7a50be';             
              imageSource = require('../../assets/skill/redux.png');
            } else if (item === 'React Native') {
              itemColor = '#08acda';             
              imageSource = require('../../assets/skill/react-native.png');
            }

            return (
              <View style={styles.list}>
                <View style={styles.container_skill}>
                  {/* Nếu có ảnh, hiển thị ảnh */}
                  {imageSource && <Image source={imageSource} style={styles.image2} />}
                  {/* Áp dụng màu sắc động cho text */}
                  <Text style={[styles.item, { color: itemColor }]}>{item}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.container_resume}>
          {/* <Text style={styles.resume}>
            Download my
            <Text> </Text>
              <Image
                style={styles.logo_pdf}
                source={require('../../assets/pdf.png')}
              />
              <Text
                style={styles.link1}
                onPress={() =>
                  Linking.openURL("https://www.abc.in.net/ABCResume.pdf")
                }
              >
                Resume
              </Text>
            <Text> </Text>
            from here.
          </Text> */}
          <Text style={styles.resume}>Download My</Text>
          <Image
                style={styles.logo_pdf}
                source={require('../../assets/pdf.png')}
              />
              <Text
                style={styles.link1}
                onPress={() =>
                  Linking.openURL("https://www.abc.in.net/ABCResume.pdf")
                }
              >
                Resume
              </Text>
              <Text style={styles.resume}>Here.</Text>
        </View>
        <Image
          style={styles.image}
          source={require("../../assets/hero.png")}
        />
        <View style={styles.container_name_verification}>
          <Text style={styles.name_verification}>Huỳnh Vĩnh Tiến</Text>
          <Image
          style={styles.image_verification}
          source={require("../../assets/verification.webp")}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: "8%",
    paddingRight: "8%",
    marginTop: "20%",
    marginBottom: "5%",
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
  container_skill:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    color: "#8892b0",
    marginBottom: 18,
    lineHeight: 25,
  },
  link: {
    color: "#64ffda",
    marginLeft: 15,
    paddingLeft: "15",
  },
  link1: {
    color: "#64ffda",
    marginRight: 5,
    fontWeight: "500",
    fontSize: 18,
  },
  lists: {
    display: "flex",
    flexWrap: "wrap",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "55%",
    marginLeft: -5,
    marginBottom: 7,
  },
  item: {
    fontSize: 18,
    color: "#8892b0",
    marginLeft: 5,
    fontWeight: "bold",
  },
  resume: {
    fontSize: 18,
    // color: "#8892b0",
    color: "#ffffff",
    fontWeight: "500",
  },
  image: {
    width: 250,
    height: 280,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
  },
  image2: {
    width: 30, // Kích thước ảnh
    height: 30, // Kích thước ảnh
    marginLeft: 5,
  },
  logo_pdf:{
    width: 25, // Kích thước ảnh
    height: 25, // Kích thước ảnh
  },
  container_resume:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  container_name_verification:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",   
    marginTop: 10, 
  },
  image_verification:{
    width: 30, // Kích thước ảnh
    height: 30, // Kích thước ảnh
    marginLeft: 5,
  },
  name_verification:{
    fontSize: 24,
    color: "#ffffff",
    fontWeight: 700,
  },
});

export default About;
