import { SafeAreaView, StyleSheet, Text, View, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Projects = () => {
  const List = [
    {
      name: "Portfolio",
      description:
        "My portfolio website which shows me, my experience, works, and projects.",
      tech: [
        "next-js",
        "tailwindcss",
        "javascript",
        "css3",
        "seo-friendly",
        "animate.css",
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
      name: "Checkbox Data Filter",
      description:
        "A sample product listing page with filter functionality like Flipkart.",
      tech: [
        "react",
        "axios",
        "bootstrap",
        "react-outside-click-handler",
        "seo-friendly",
        "css3",
        "javascript",
        "react-icons",
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
      name: "My Blog",
      description: "A Blog website created using next-js & next-js api.",
      tech: [
        "react",
        "axios",
        "tailwindcss",
        "nextjs-progressbar",
        "react-markdown",
        "react-mailchimp-subscribe",
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
      name: "Online Written Ability Test",
      description:
        "An online written ability test react app with more than 10 sets & choice of a time limit.",
      tech: [
        "react",
        "react-bootstrap",
        "react-router-dom",
        "javascript",
        "css3",
        "react-avatar",
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
      name: "Sample Blog",
      description: "A sample blog page using react, redux & firebase.",
      tech: [
        "react",
        "react-redux",
        "redux-thunk",
        "firebase",
        "react-redux-firebase",
        "redux-firestore",
        "moment",
        "materialise-css",
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
    {
      name: "My Expenses",
      description: "An expense tracker page to track your expenses.",
      tech: [
        "react",
        "react-redux",
        "typescript",
        "react-toastify",
        "react-modal",
        "redux-devtools-extension",
      ],
      links: [
        {
          iconName: "github",
          url: "https://github.com/abc-26/MyExpenses",
        },
        {
          iconName: "external-link",
          url: "https://my-expenses-tau.vercel.app/",
        },
      ],
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.section} id="projects">
        <View style={styles.headingDiv}>
          <Text style={[styles.heading, styles.mainColor]}>03. </Text>
          <Text style={styles.heading}>Significant Projects</Text>
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
                      color="#8892b0"
                      onPress={() => Linking.openURL(data.links[0].url)}
                    />
                    <Feather
                      name="external-link"
                      size={20}
                      color="#8892b0"
                      onPress={() => Linking.openURL(data.links[1].url)}
                    />
                  </View>
                </View>
                <View style={styles.projectBody}>
                  <Text style={styles.name}>{data.name}</Text>
                  <Text style={styles.desc}>{data.description}</Text>
                  <View style={styles.techList}>
                    {data.tech.map((techData) => {
                      return (
                        <Text style={styles.tech} key={techData}>
                          {techData}
                        </Text>
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
    marginTop: "2%",
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
  name: {
    fontSize: 20,
    color: "#8892b0",
    marginBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
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
});

export default Projects;
