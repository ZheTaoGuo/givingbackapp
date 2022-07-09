import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-native";

const donations = {
  title: "Unicef Donation Drive",
  tag: ["Food", "Variable"],
  image: "url",
  logo: "url",
  description:
    "In post mean shot ye. There out her child sir his lived. Design at uneasy me season of branch on praise esteem. Abilities discourse believing consisted remaining to no. Mistaken no me denoting dashwood as screened. Whence or esteem easily he on. Dissuade husbands at of no if disposal.",
  point: 200,
};

export default function RedeemDetail() {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  const btnHandle = () => {
    console.log("btn pressed");
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <View style={{ height: "100vh" }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={navigateBack}>
          <FontAwesomeIcon icon={faAngleLeft} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Redeem Detail</Text>
      </View>

      <SafeAreaView>
        <Image
          style={styles.itemProfile}
          source={require("../assets/donate_1.jpg")}
        />
        <View style={styles.redeemContainer}>
          <View style={styles.item}>
            <View style={styles.card}>
              <Text style={styles.itemTitle}>{donations.title}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                {donations.tag.map((t, key) => {
                  return (
                    <Text
                      style={{
                        display: "inline-block",
                        width: "fit-content",
                        color: "white",
                        padding: 6,
                        borderRadius: 4,
                        backgroundColor: "#00997F",
                      }}
                      key={key}
                    >
                      {t}
                    </Text>
                  );
                })}
              </View>

              <Text>{donations.description}</Text>
              <Text style={styles.itemPoint}>
                321 / {donations.point} points
              </Text>
              <progress
                style={{ width: "100%" }}
                value="32"
                max="100"
              ></progress>
            </View>
          </View>
        </View>
      </SafeAreaView>


      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 80,
          zIndex: 5,
          boxShadow:
            "0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {donations.point < 321 ? (
          <TouchableOpacity
            style={styles.donateBtn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "white", fontSize: "1.25rem" }}>
              Donate Now
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={styles.donateBtnDisabled}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "white", fontSize: "1.25rem" }}>
              {donations.point - 321} more points
            </Text>
          </View>
        )}
      </View>

      
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    textAlign: "center",
    paddingTop: 16,
    padding: 10,
    paddingBottom: 16,
    position: "relative",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#AAA7A7",
  },
  headerText: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  backBtn: {
    position: "absolute",
    top: "35%",
    zIndex: 1,
  },
  redeemContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: -25,
  },
  item: {
    width: "100%",
  },
  donateBtn: {
    backgroundColor: "#00997F",
    width: "fit-content",
    padding: 16,
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
  },
  donateBtnDisabled: {
    backgroundColor: "#00997f80",
    width: "fit-content",
    padding: 16,
    borderRadius: 8,
    color: "white",
    paddingTop: 8,
    paddingBottom: 8,
  },
  card: {
    padding: "1rem",
    borderRadius: 16,
    backgroundColor: "white",
    display: "flex",
    gap: 8,
    height: "100%",
  },

  itemProfile: {
    width: "100%",
    height: 240,
  },
  itemTitle: {
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  itemDesc: {
    color: "grey",
    fontSize: ".75rem",
  },
  itemPoint: {
    fontWeight: 600,
    fontSize: "1rem",
  },
  imagebtn: {
    height: 64,
    width: 64,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
