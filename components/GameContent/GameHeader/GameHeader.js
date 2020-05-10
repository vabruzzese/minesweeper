import React from 'react';
import {Ticker} from './Ticker';
import {Smile} from '../../Icons/Smile';
import {Sad} from '../../Icons/Sad';
import {View} from 'native-base';
import {styles} from './styles';
import {SearchButton} from './SearchButton/SearchButton';
import {FlagButton} from './FlagButton';
import { Cool } from '../../Icons/Cool';

export const GameHeader = ({
  wonGame,
  gameOver,
  setSelectedOption,
  flagsLeft,
}) => (
  <View style={styles.gameHeader}>
    <Ticker number={flagsLeft} />
    <SearchButton setSelectedOption={setSelectedOption} />
    {!gameOver && !wonGame && <Smile />}
    {wonGame && <Cool />}
    {gameOver && <Sad />}
    <FlagButton setSelectedOption={setSelectedOption} />
    <Ticker />
  </View>
);
