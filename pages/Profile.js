import React, { useMemo, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar  } from "@fortawesome/free-solid-svg-icons";

import { Badge, Button, Card } from "@rneui/themed";
import { Calendar } from 'react-native-calendars';

export default function Profile() {
  const INITIAL_DATE = (new Date()).toISOString().substring(0, 10);
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [event, setEvent] = useState(null);

  const displayEvent = (date) => {
    switch (date.dateString) {
      case "2022-07-22":
        setEvent({
          title: "Helping the Elderly", 
          description: "A fun and rewarding event to help the elderly enjoy their day trip to the Singapore Botanic Gardens. ", 
          tags: ["elderly", "garden", "outing"],
          startTime: "10:30 AM", 
          endTime: "5:00 PM",
          ...date
        });
        break;
      case "2022-07-23":
        setEvent({
          title: "Junior Buddies", 
          description: "A fun event where you get to help those suffering from learning difficulties learn science in a practical and experimental manner. ", 
          tags: ["learning", "difficulties", "science"],
          startTime: "11:30 AM", 
          endTime: "3:00 PM",
          ...date
        });
        break;
      case "2022-07-24":
        setEvent({
          title: "Food for the heart", 
          description: "A rewarding event where you ould get to cook food and disrtibute them to those in need. ", 
          tags: ["cooking", "food"],
          startTime: "10:30 AM", 
          endTime: "4:00 PM",
          ...date
        });
        break;
      default:
        setEvent(null);
        break;
    }
  }

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'orange',
        selectedTextColor: 'red'
      },
      ['2022-07-22']: {
        dotColor: 'red',
        marked: true
      }, 
      ['2022-07-23']: {
        dotColor: 'blue',
        marked: true
      }, 
      ['2022-07-24']: {
        dotColor: 'green',
        marked: true
      }
    };
  }, [selected]);

  const renderEventDetails = () => {
    return (
      <Card>
        <Card.Title>{ event.dateString }</Card.Title>
        <Card.Divider />
        <View style={styles.cardContent}>
          <View style={styles.cardContentTime}>
            <Text>{ event.startTime }</Text>
            <Text>|</Text>
            <Text>{ event.endTime }</Text>
          </View>
          <View style={styles.cardContentDetails}>
            <Text style={styles.cardContentTitle}>{ event.title }</Text>
            <Text style={styles.cardContentDesc}>{ event.description }</Text>
            <View style={styles.cardContentTags}>
              { event.tags.map((tag, idx) => {
                return (
                  <Badge key={idx} value={ tag } status="warning" badgeStyle={ styles.cardContentBadge } />
                )
              }) }
            </View>
          </View>
        </View>
      </Card>
    )
  }

  return (
    <View style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImage}>
          <Image 
            source={require("../assets/profile.png")}
          />
        </View>
        <View>
          <Text style={styles.profileName}>Amirah <Badge value="Novice" status="success" /></Text>
          <View style={styles.profilePoints}>
            <Text style={styles.profileText}>321&nbsp;</Text>
            <FontAwesomeIcon icon={faStar} size={32} color="#2fac97" />
            <Text style={styles.profileText}>&nbsp;earned</Text>
          </View>
          <Text style={styles.profileSub}>432 <FontAwesomeIcon icon={faStar} color="#2fac97" badgeStyle={styles.profileSub} /> more to <Badge value="Intermediate" status="error" badgeStyle={styles.profileSub} /></Text>
        </View>
      </View>
      <View style={styles.calendarStyle}><Calendar markedDates={marked} onDayPress={(date) => displayEvent(date)} /></View>
      { event ? renderEventDetails() : <></> }
      <View style={styles.logOut}>
        <Button title="Log Out"
          icon={{
            name: 'arrow-right',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(199, 43, 98, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }} 
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    flexGrow: 1,
  },
  containerContent: {
    flexGrow: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30, 
    marginLeft: 10, 
    marginRight: 10, 
    paddingTop: 10, 
    paddingBottom: 10, 
    borderColor: 'rgba(0, 0, 0, 0.1)', 
    borderStyle: 'solid', 
    borderWidth: 1, 
    borderRadius: "10px", 
    backgroundColor: '#fff', 
  }, 
  profileImage: {
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  profileName: {
    fontSize: 25, 
    fontWeight: 'bold',
    color: "#2fac97", 
    marginBottom: 10
  }, 
  profilePoints: {
    flexDirection: 'row', 
    marginBottom: 10, 
  }, 
  profileText: {
    fontSize: 30
  }, 
  profileSmall: {
    fontSize: 15
  }, 
  profileSub: {
    opacity: 0.7
  },
  calendarStyle: {
    marginLeft: 10, 
    marginRight: 10,
    marginTop: 10, 
    marginBottom: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)', 
    borderStyle: 'solid', 
    borderWidth: 1
  }, 
  logOut: {
    justifyContent: 'center',
    alignItems: 'center', 
    justifySelf: "bottom"
  }, 
  cardContent: {
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexDirection: 'row'
  }, 
  cardContentTime: {
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 2
  }, 
  cardContentDetails: {
    justifyContent: 'center', 
    alignItems: 'center', 
    width: "80%"
  }, 
  cardContentTitle: {
    fontSize: 20, 
    alignSelf: "start", 
    marginBottom: 3
  },
  cardContentDesc: {
    fontSize: 10, 
    marginBottom: 3, 
    alignSelf: "start", 
  },
  cardContentTags: {
    justifyContent: 'start', 
    alignItems: 'center', 
    alignSelf: "start",
    flexDirection: 'row'
  }, 
  cardContentBadge: {
    marginRight: 4
  }
});
