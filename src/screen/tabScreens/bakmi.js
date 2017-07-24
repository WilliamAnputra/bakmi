import React, { Component } from 'react';
import { View, FlatList, Alert } from 'react-native';
import MenuComponent from '../../components/menuComponent';

const bakmiLebar = require('../../images/bakmi/bakmi_lebar.png');
const bakmiHijau = require('../../images/bakmi/bakmi_hijau.png');
const bihun = require('../../images/bakmi/bihun.png');
const kwetiau = require('../../images/bakmi/kwetiau.png');
const locupan = require('../../images/bakmi/locupan.png');
const nasiTim = require('../../images/bakmi//nasi_tim.png');
const mieKangkung = require('../../images/bakmi//mie_kangkung.png');

const data = [
  {
    imageURI: bakmiLebar,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 0
  },
  {
    imageURI: bakmiLebar,
    title: 'Bakmi Lebar Ayam Pangsit/baso',
    price: '30.000',
    id: 1
  },
  {
    imageURI: bakmiHijau,
    title: 'Bakmi Hijau Ayam',
    price: '27.000',
    id: 2
  },
  {
    imageURI: bakmiHijau,
    title: 'Bakmi Hijau Ayam Pangsit/baso',
    price: '25.000',
    id: 3
  },
  {
    imageURI: bihun,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 4
  },
  {
    imageURI: bihun,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 5
  },
  {
    imageURI: kwetiau,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 6
  },
  {
    imageURI: kwetiau,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 7
  },
  {
    imageURI: locupan,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 8
  },
  {
    imageURI: locupan,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 9
  },
  {
    imageURI: nasiTim,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 10
  },
  {
    imageURI: nasiTim,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 11
  },
  {
    imageURI: mieKangkung,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 12
  },
  {
    imageURI: mieKangkung,
    title: 'Bakmi Lebar Ayam',
    price: '25.000',
    id: 13
  }
];

export default class bakmi extends Component {
  whichItem = item => {
    return Alert.alert('Alert Title', item.toString(), [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed')
      }
    ]);
  };
  render() {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <MenuComponent
              imageURI={item.imageURI}
              title={item.title}
              price={item.price}
              onPress={() => this.whichItem(item.id)}
            />}
        />
      </View>
    );
  }
}
