import React from 'react';
import {Ticker} from './Ticker';
import {Smile} from '../../Icons/Smile';
import {Sad} from '../../Icons/Sad';
import {View} from 'native-base';
import {styles} from './styles';
import {SearchButton} from './SearchButton/SearchButton';
import {FlagButton} from './FlagButton';

export const GameHeader = ({gameOver, setSelectedOption, flagsLeft}) => (
  <View style={styles.gameHeader}>
    <Ticker number={flagsLeft} />
    <SearchButton setSelectedOption={setSelectedOption} />
    {!gameOver && <Smile />}
    {gameOver && <Sad />}
    <FlagButton setSelectedOption={setSelectedOption} />
    <Ticker />
  </View>
);
