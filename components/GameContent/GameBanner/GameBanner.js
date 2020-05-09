import React from 'react';
import {View, Text} from 'native-base';
import {Flag} from '../../Icons/Flag';
import {Search} from '../../Icons/Search';
import {styles} from './styles';
import {SELECTED_OPTION} from '../../../utils/constants';

export const GameBanner = ({selectedOption}) => (
  <View style={styles.banner}>
    <Text style={styles.selection}>Selected Option: </Text>
    {selectedOption === SELECTED_OPTION.SEARCH && <Search />}
    {selectedOption === SELECTED_OPTION.FLAG && <Flag />}
  </View>
);
