import { SafeAreaView, StyleSheet, Text, View, Linking, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Projects = () => {
  const List = [
    {
      name: "ReactJS Portfolio",
      description:
        "My portfolio website which shows me, my experience, works, and projects.",
      tech: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
      ],
      links: [
        {
          iconName: "github",
          url: "https://github.com/abc-26/portfolio",
        },
        {
          iconName: "external-link",
          url: "https://www.abc.in.net/",
        },
      ],
    },
    {
      name: "VueJS Portfolio",
      description:
        "A sample product listing page with filter functionality like Flipkart.",
      tech: [
        "VueJS",
        "JavaScript",
        "Tailwind CSS",
      ],
      links: [
        {
          iconName: "github",
          url: "https://github.com/abc-26/Checkbox-Data-Filter",
        },
        {
          iconName: "external-link",
          url: "https://checkbox-data-filter.vercel.app/",
        },
      ],
    },
    {
      name: "NextJS Portfolio",
      description: "A Blog website created using next-js & next-js api.",
      tech: [
        "NextJS",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "Tailwind CSS",
      ],
      links: [
        {
          iconName: "github",
          url: "https://github.com/abc-26/My-Blog",
        },
        {
          iconName: "external-link",
          url: "https://blog-abc-26.vercel.app/",
        },
      ],
    },
    {
      name: "React Native Portfolio",
      description:
        "An online written ability test react app with more than 10 sets & choice of a time limit.",
      tech: [
        "React Native",
        "JavaScript",
      ],
      links: [
        {
          iconName: "github",
          url: "https://github.com/abc-26/Written-Ability-Test",
        },
        {
          iconName: "external-link",
          url: "https://written-ability-test.vercel.app/",
        },
      ],
    },
    {
      name: "Angular Portfolio",
      description: "A sample blog page using react, redux & firebase.",
      tech: [
        "Angular",
        "JavaScript",
        "TypeScript",
        "CSS",
      ],
      links: [
        {
          iconName: "github",
          url: "https://github.com/abc-26/sample-blog",
        },
        {
          iconName: "external-link",
          url: "https://sample-blog-36a85.firebaseapp.com/",
        },
      ],
    },
    // {
    //   name: "My Expenses",
    //   description: "An expense tracker page to track your expenses.",
    //   tech: [
    //     "react",
    //     "react-redux",
    //     "typescript",
    //     "react-toastify",
    //     "react-modal",
    //     "redux-devtools-extension",
    //   ],
    //   links: [
    //     {
    //       iconName: "github",
    //       url: "https://github.com/abc-26/MyExpenses",
    //     },
    //     {
    //       iconName: "external-link",
    //       url: "https://my-expenses-tau.vercel.app/",
    //     },
    //   ],
    // },
  ];
  return (
    <SafeAreaView>
      <View style={styles.section} id="projects">
        <View style={styles.headingDiv}>
          <Text style={[styles.heading, styles.mainColor]}>03. </Text>
          <Text style={styles.heading}>Personal Projects</Text>
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
        <View style={styles.projects}>
          {List.map((data) => {
            return (
              <View style={styles.project} key={data.name}>
                <View style={styles.projectHead}>
                  <View>
                    <AntDesign name="folderopen" size={30} color="#64ffda" />
                  </View>
                  <View style={styles.projectHeadLink}>
                    <AntDesign
                      name="github"
                      stye={styles.github}
                      size={20}
                      // color="#8892b0"
                      color="#ffffff"
                      onPress={() => Linking.openURL(data.links[0].url)}
                    />
                    <Feather
                      name="external-link"
                      size={20}
                      // color="#8892b0"
                      color="#ffffff"
                      onPress={() => Linking.openURL(data.links[1].url)}
                    />
                  </View>
                </View>
                <View style={styles.projectBody}>
                  <View style={styles.projectname_logo}>
                    <Text style={styles.name}>{data.name}</Text>
                      <Image
                        source={
                          data.name === 'ReactJS Portfolio'
                            ? require('../../assets/skill/react.png') // đường dẫn đến ảnh React
                            : data.name === 'VueJS Portfolio'
                            ? require('../../assets/skill/vue.png') // đường dẫn đến ảnh Vue
                            : data.name === 'NextJS Portfolio'
                            ? require('../../assets/skill/next.png')
                            : data.name === 'React Native Portfolio'
                            ? require('../../assets/skill/react-native.png')
                            : data.name === 'Angular Portfolio'
                            ? require('../../assets/skill/angular.png')
                            : null // không hiển thị ảnh nếu không phải tên phù hợp
                        }
                        style={styles.projectImage} // kiểu cho ảnh (nếu cần)
                      />
                  </View>
                  <Text style={styles.desc}>{data.description}</Text>
                  {/* <View style={styles.techList}>
                    {data.tech.map((techData) => {
                      return (
                        <Text style={styles.tech} key={techData}>
                          {techData}
                        </Text>
                      );
                    })}
                  </View> */}

                  <View style={styles.techList}>
                    {data.tech.map((techData) => {
                      return (
                        <View key={techData} style={styles.techWrapper}>
                          {/* Thẻ View chứa nền bên trái */}
                          <View
                            style={[
                              styles.techBackground,
                              techData === 'JavaScript' ? { backgroundColor: '#FFD700' } :
                              techData === 'ReactJS' ? { backgroundColor: '#08ddff' } :
                              techData === 'Tailwind CSS' ? { backgroundColor: '#1dc0cd' } :
                              techData === 'VueJS' ? { backgroundColor: '#47ba87' } :
                              techData === 'TypeScript' ? { backgroundColor: '#1E90FF' } :
                              techData === 'NextJS' ? { backgroundColor: '#ffffff' } :
                              techData === 'Angular' ? { backgroundColor: '#e6303e' } :
                              techData === 'CSS' ? { backgroundColor: '#2d53e5' } :
                              techData === 'React Native' ? { backgroundColor: '#08acda' } :
                              null // Không thay đổi màu nền nếu không phải Java hoặc React
                            ]}
                          />

                          {/* Thẻ Text chứa chữ */}
                          <Text style={styles.tech}>
                            {techData}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                  
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingLeft: "8%",
    paddingRight: "8%",
    // marginTop: "2%",
    marginTop: "-70%",
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
  projects: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  project: {
    backgroundColor: "#172a45",
    shadowColor: "#ccd6f6",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 25,
    minHeight: 300,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 4,
  },
  projectHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  projectHeadLink: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "20%",
  },
  github: {
    marginRight: 10,
  },
  projectname_logo:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  projectImage:{
    width: 30,
    height: 30,
  },
  name: {
    fontSize: 20,
    // color: "#8892b0",
    color: "#ffffff",
    marginBottom: 15,
    // paddingLeft: 25,
    paddingRight: 5,
    fontWeight: "700"

  },
  desc: {
    fontSize: 16,
    color: "#8892b0",
    marginBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    lineHeight: 22,
  },
  techList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25,
  },
  tech: {
    fontSize: 16,
    color: "#8892b0",
    marginRight: 10,
    lineHeight: 25,
    fontWeight: "500",
  },
  techWrapper: {
    flexDirection: 'row', // Sắp xếp các phần tử theo chiều ngang
    alignItems: 'center', // Căn chỉnh các phần tử theo chiều dọc
    marginBottom: 5, // Khoảng cách giữa các phần tử
  },
  techBackground: {
    width: 15, // Chiều rộng của nền (bên trái chữ)
    height: 15, // Chiều cao của nền
    marginRight: 5, // Khoảng cách giữa nền và chữ
    borderRadius: 100, // Bo góc nền nếu muốn
  },
});

export default Projects;
