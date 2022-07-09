import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AppRegistry, ScrollView, TouchableWithoutFeedback } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faHandshakeAngle, faTree, faSackDollar  } from "@fortawesome/free-solid-svg-icons";

import Tree from "./pages/Tree";
import Funds from "./pages/Funds";
import Volunteer from "./pages/Volunteer";
import Profile from "./pages/Profile";

export default function App() {
  const [navIndex, setNavIndex] = useState(0);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <ScrollView>
          <Routes>
            <Route exact path="/" element={<Volunteer />} />
            <Route path="/tree" element={<Tree />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </ScrollView>
        <View style={styles.nav}>
          <Link to="/" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(0) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faHandshakeAngle} color={navIndex === 0 ? "#2fac97" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 0 ? styles.navItemSelectedText : styles.navItemText}>Volunteer</Text>
            </View>
          </Link>
          <Link to="/tree" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(1) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faTree} color={navIndex === 1 ? "#2fac97" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 1 ? styles.navItemSelectedText : styles.navItemText}>Tree</Text>
            </View>
          </Link>
          <Link to="/funds" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(2) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faSackDollar} color={navIndex === 2 ? "#2fac97" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 2 ? styles.navItemSelectedText : styles.navItemText}>Funds</Text>
            </View>
          </Link>
          <Link to="/profile" component={ TouchableWithoutFeedback } onPress={ () => setNavIndex(3) } underlayColor="#f0f4f7" style={styles.navItem}>
            <View style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faUser} color={navIndex === 3 ? "#2fac97" : "rgba(0, 0, 0, 0.3)"} />
              <Text style={navIndex === 3 ? styles.navItemSelectedText : styles.navItemText}>Profile</Text>
            </View>
          </Link>
        </View>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "rgba(170, 167, 167, 0.5)",
    padding: 7,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  navItemSelectedText: {
    color: "#2fac97"
  },
  navItemText: {
    color: "rgba(0, 0, 0, 0.3)"
  },
  subNavItem: {
    display: "flex",
    alignItems: "center",
  },
  navIcon:{
    height: 20,
    width: 20,
    marginBottom: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});
