import React, { useState } from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet,TouchableOpacity, Text, View, Dimensions } from 'react-native';
import axios from 'axios';

export default function SelectLocation() {
  const[selectedLong,setLongitude]=useState<number | null>(null);
  const[selectedLat,setLatitude]=useState<number | null>(null);

  const handleSubmitChange = () => {
    console.log(selectedLong);
    console.log(selectedLat);
    const data = {
      longitude:`${selectedLong}`,
      latitude:`${selectedLat}`
    };
    axios({
      method: "POST",
      data,
      url: `http://192.168.1.4:5000/user/addMark`,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        region={{
          latitude:33.888630 ,
          longitude:35.495480,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker coordinate={{latitude: 33.888630, longitude:35.495480}}
          pinColor='#FF914A'
          draggable={true}
          onDragEnd={(e)=>{
            setLatitude(e.nativeEvent.coordinate.latitude);
            setLongitude(e.nativeEvent.coordinate.longitude);
          }}
        >
          <Callout>
            <Text>Purrfect</Text>
          </Callout>
        </Marker>
      </MapView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmitChange}>
        <Text style={styles.saveText}>Set Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height:"90%",
    top:"-10%"
  },
  saveButton:{
    height:55,
    width:"55%",
    elevation:3,
    backgroundColor:"#fe5932",
    position:"relative",
    bottom:"5%",
    borderRadius:10
  },
  saveText:{
    fontSize:18,
    textAlign:"center",
    padding:13,
    color:"white",
  }
});
