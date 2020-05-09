import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Flag} from '../../../Icons/Flag';
import {styles} from './styles';
import {SELECTED_OPTION} from '../../../../utils/constants';

export const FlagButton = ({setSelectedOption}) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => setSelectedOption(SELECTED_OPTION.FLAG)}>
    <Flag />
  </TouchableOpacity>
);
