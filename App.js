import React, { Fragment } from "react";
import { StyleSheet, Text, View, AppRegistry, ScrollView } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faHandshakeAngle, faTree, faSackDollar  } from "@fortawesome/free-solid-svg-icons";

import Tree from "./pages/Tree";
import Funds from "./pages/Funds";
import Volunteer from "./pages/Volunteer";
import Profile from "./pages/Profile";

export default function App() {
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
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Fragment style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faHandshakeAngle} />
              <Text>Volunteer</Text>
            </Fragment>
          </Link>
          <Link to="/tree" underlayColor="#f0f4f7" style={styles.navItem}>
            <Fragment style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faTree} />
              <Text>Tree</Text>
            </Fragment>
          </Link>
          <Link to="/funds" underlayColor="#f0f4f7" style={styles.navItem}>
            <Fragment style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faSackDollar} />
              <Text>Funds</Text>
            </Fragment>
          </Link>
          <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
            <Fragment style={styles.subNavItem}>
              <FontAwesomeIcon style={styles.navIcon} icon={faUser} />
              <Text>Profile</Text>
            </Fragment>
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
    borderTopColor: "#AAA7A7",
    padding: 5,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
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
