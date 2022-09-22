import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Gap, Header, Card, Skeleton} from './components';
import {Category, Login, Product} from './Service';

const App = () => {
  const [Token, setToken] = useState('');
  const [_Category, setCategory] = useState([]);
  const [_Product, setProduct] = useState([]);
  React.useEffect(() => {
    if (Token == '') {
      Login(e => {
        setToken(e.token);
      });
    } else {
      Category(Token, e => setCategory(e));
      Product(Token, e => setProduct(e));
    }
  }, [Token]);
  var tmpCatgory = [];
  var tmpProduct = [];
  for (var i = 0; i <= 5; i++) {
    tmpCatgory.push(<Skeleton type={'cardLabel'} key={i} />);
  }

  for (var i = 0; i <= 6; i++) {
    tmpProduct.push(<Skeleton key={i} />);
  }

  return (
    <SafeAreaView style={styles.page}>
      <Gap height={20} />
      <Header />
      <Gap height={30} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.conCategory}>
          {_Category.length != 0
            ? _Category.map((d, i) => {
                return (
                  <TouchableOpacity key={i} style={styles.item}>
                    <Text style={styles.itemTxt}>{d.name}</Text>
                  </TouchableOpacity>
                );
              })
            : tmpCatgory}
        </View>
      </ScrollView>
      <Gap height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {_Product.length != 0
            ? _Product.map((d, i) => {
                return (
                  <Card
                    key={i}
                    url={d.image}
                    fav={d.isFav}
                    stock={d.out_of_stock}
                    newProd={d.new}
                    name={d.name}
                    price={d.price}
                    disk={d.off}
                    rating={d.rating}
                  />
                );
              })
            : tmpProduct}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'dedede',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  conCategory: {flexDirection: 'row', height: 70},
  item: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 45,
    borderRadius: 4,
    margin: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemTxt: {color: 'black', textAlign: 'center', fontSize: 15},
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
});
