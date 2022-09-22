import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarActive from '../assets/StarActive.png';
import Star from '../assets/Star.png';
import HalfStar from '../assets/halfStart.png';

const StartComp = d => {
  var rating = d.rating;
  const startFilter = i => {
    if (rating > i) {
      if (
        (rating == 1.5 && i == 1) ||
        (rating == 2.5 && i == 2) ||
        (rating == 3.5 && i == 3) ||
        (rating == 4.5 && i == 4)
      ) {
        return <Image source={HalfStar} style={{width: 15, height: 15}} />;
      } else {
        return <Image source={StarActive} style={{width: 15, height: 15}} />;
      }
    } else {
      return <Image source={Star} style={{width: 15, height: 15}} />;
    }
  };
  var tmp = [];
  for (var i = 0; i <= 5; i++) {
    tmp.push(startFilter(i, rating));
  }
  return <View style={styles.page}>{tmp.slice(0, -1)}</View>;
};

export default StartComp;

const styles = StyleSheet.create({
  page: {flexDirection: 'row', alignItems: 'center'},
});
