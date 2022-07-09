import React, { Fragment } from "react";
import { StyleSheet, Text, View, AppRegistry, ScrollView } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faHandshakeAngle,
  faTree,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

import Tree from "./pages/Tree";
import Funds from "./pages/Funds";
import Volunteer from "./pages/Volunteer";
import Profile from "./pages/Profile";
import Redeem from "./pages/Redeem";
import Activity from "./pages/Activity";
import RedeemDetail from "./pages/RedeemDetail"
import FundsDetail from "./pages/FundsDetail";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <ScrollView
          style={styles.contentWrapper}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Routes>
            <Route exact path="/" element={<Volunteer />} />
            <Route path="/tree" element={<Tree />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activity" element={<Activity />} />

            <Route path="/redeem" element={<Redeem />} />
            <Route path="/redeem/:slug" element={<RedeemDetail />} />
            <Route path="/funds/:slug" element={<FundsDetail />} />
          </Routes>
        </ScrollView>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Fragment>
              <FontAwesomeIcon icon={faHandshakeAngle} />
              <Text>Volunteer</Text>
            </Fragment>
          </Link>
          <Link to="/tree" underlayColor="#f0f4f7" style={"123" == "tree" ? styles.navItemActive : styles.navItem}>
            <Fragment>
              <FontAwesomeIcon icon={faTree} />
              <Text>Tree</Text>
            </Fragment>
          </Link>
          <Link to="/funds" underlayColor="#f0f4f7" style={styles.navItem}>
            <Fragment>
              <FontAwesomeIcon  icon={faSackDollar} />
              <Text>Funds</Text>
            </Fragment>
          </Link>
          <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
            <Fragment>
              <FontAwesomeIcon icon={faUser} />
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
    flex: 1,
    height: "100vh"
  },
  contentWrapper: {
    marginBottom: 66
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#AAA7A7",
    padding: 5,
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  navIcon: {
    height: 20,
    width: 20,
    marginBottom: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});
