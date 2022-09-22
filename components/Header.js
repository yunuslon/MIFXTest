import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import left from '../assets/left.png';
import seting from '../assets/seting.png';
const Header = () => {
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.leftSty}>
        <Image source={left} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.txt}>Shoes</Text>
      <TouchableOpacity style={styles.stg}>
        <Image source={seting} style={styles.icon2} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {flexDirection: 'row', alignItems: 'center'},
  leftSty: {
    backgroundColor: 'white',
    width: 38,
    height: 38,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {width: 24, height: 13},
  txt: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black',
  },
  stg: {
    backgroundColor: 'white',
    width: 37,
    height: 37,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon2: {width: 19, height: 19},
});
