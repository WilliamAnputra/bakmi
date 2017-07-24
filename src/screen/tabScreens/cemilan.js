import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import MenuComponent from '../../components/menuComponent';

const basoGoreng = require('../../images/cemilan/baso_goreng.png');
const pangsit = require('../../images/cemilan/pangsit.png');
const cakwe = require('../../images/cemilan/cakwe.png');
const siomay = require('../../images/cemilan/siomay.png');

export default class bakmi extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[{}]}
          keyExtractor={item => item}
          renderItem={() =>
            <View>
              <MenuComponent
                imageURI={basoGoreng}
                title="Baso Goreng"
                price="8.000"
                index={13}
              />
              <MenuComponent
                imageURI={pangsit}
                title="Pangsit isi 5"
                price="13.000"
                index={14}
              />
              <MenuComponent
                imageURI={cakwe}
                title="Cakwe ( per porsi )"
                price="20.000"
                index={15}
              />
              <MenuComponent
                imageURI={siomay}
                title="Siomay ( per pcs )"
                price="9.000"
                index={16}
              />
            </View>}
        />
      </View>
    );
  }
}
