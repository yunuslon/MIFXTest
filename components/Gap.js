import React from 'react';
import {View} from 'react-native';

const Gap = ({height, width, bgColor}) => {
  return (
    <View style={{height: height, width: width, backgroundColor: bgColor}} />
  );
};

export default Gap;
