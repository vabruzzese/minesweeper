import React from 'react';
import {View, Text} from 'native-base';
import {styles} from './styles';

export const Ticker = ({number}) => (
  <View style={styles.ticker}>
    <Text style={styles.text}>{number}</Text>
  </View>
);
