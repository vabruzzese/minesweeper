import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Search} from '../../../Icons/Search';
import {styles} from './styles';
import {SELECTED_OPTION} from '../../../../utils/constants';

export const SearchButton = ({setSelectedOption}) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => setSelectedOption(SELECTED_OPTION.SEARCH)}>
    <Search />
  </TouchableOpacity>
);
