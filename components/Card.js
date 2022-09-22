import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import love from '../assets/love.png';
import loveActive from '../assets/loveActive.png';
import StartComp from './StartComp';

const ws = Dimensions.get('screen').width;
const hs = Dimensions.get('screen').height;
const Card = props => {
  const {url, fav, stock, newProd, name, price, disk, rating} = props;
  return (
    <View style={styles.page}>
      <View style={styles.cardHead}>
        {!stock ? (
          <View style={styles.conStok}>
            <Text style={styles.txtStock}>Out of stock</Text>
          </View>
        ) : newProd ? (
          <Text style={styles.txtFav}>New</Text>
        ) : (
          <View />
        )}
        <Image source={fav ? loveActive : love} style={styles.favSty} />
      </View>
      <Image source={{uri: url}} style={styles.img} resizeMode="contain" />
      <View style={styles.detailSty}>
        <StartComp rating={rating} />
        <Text style={styles.txtName} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.conPrice}>
          <Text style={styles.priceSty}>{price}</Text>
          <Text style={styles.diskSty}>{disk}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: ws * 0.43,
    height: hs * 0.25,
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
  img: {
    width: ws * 0.38,
    height: hs * 0.14,
    marginTop: hs * 0.03,
  },
  cardHead: {
    width: ws * 0.43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'flex-end',
    position: 'absolute',
    top: 10,
  },
  txtFav: {fontWeight: '700', fontSize: 16, color: 'black'},
  favSty: {width: 17, height: 15},
  conStok: {backgroundColor: 'red', borderRadius: 5, marginLeft: -5},
  txtStock: {
    color: 'white',
    fontSize: 13,
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
  detailSty: {
    justifyContent: 'flex-start',
    width: ws * 0.43,
    paddingHorizontal: 10,
  },
  txtName: {fontSize: 14, fontWeight: '600', color: 'grey'},
  conPrice: {flexDirection: 'row', justifyContent: 'space-between'},
  priceSty: {fontSize: 16, fontWeight: 'bold', color: 'black'},
  diskSty: {fontSize: 13, color: 'grey'},
});
