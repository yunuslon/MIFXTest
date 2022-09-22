import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ws = Dimensions.get('screen').width;
const hs = Dimensions.get('screen').height;
const Skeleton = ({type}) => {
  if (type == 'cardLabel') {
    return (
      <View style={styles.card}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            width={70}
            height={14}
            borderRadius={2}
            marginHorizontal={2}
          />
        </SkeletonPlaceholder>
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          width={ws * 0.38}
          height={hs * 0.14}
          borderRadius={5}
          marginHorizontal={2}
        />
        <SkeletonPlaceholder.Item
          width={ws * 0.18}
          height={20}
          marginTop={5}
          marginLeft={2}
        />
        <SkeletonPlaceholder.Item
          width={ws * 0.23}
          height={20}
          marginTop={5}
          marginLeft={2}
        />
        <SkeletonPlaceholder.Item
          width={ws * 0.12}
          height={20}
          marginTop={5}
          marginLeft={2}
        />
      </SkeletonPlaceholder>
    </View>
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    paddingLeft: 5,
    paddingVertical: 10,
    height: 35,
    borderRadius: 4,
    margin: 4,
    width: 90,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  page: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: ws * 0.43,
    height: hs * 0.25,
    paddingTop: 10,
    marginBottom: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
