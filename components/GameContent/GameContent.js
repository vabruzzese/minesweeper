import React, {useState} from 'react';
import {View} from 'native-base';
import {styles} from './styles';
import {GameHeader} from './GameHeader';
import {GameBody} from './GameBody';
import {GameBanner} from './GameBanner';
import {SELECTED_OPTION, MAX_NUMBER_OF_FLAGS} from '../../utils/constants';

export const GameContent = ({board, setBoard, gameOver, setGameOver}) => {
  const [selectedOption, setSelectedOption] = useState(SELECTED_OPTION.SEARCH);
  const [flagsLeft, setFlagsLeft] = useState(MAX_NUMBER_OF_FLAGS);
  return (
    <View style={styles.gameBoard}>
      <GameHeader
        gameOver={gameOver}
        setSelectedOption={setSelectedOption}
        flagsLeft={flagsLeft}
      />
      <GameBody
        board={board}
        setBoard={setBoard}
        selectedOption={selectedOption}
        setGameOver={setGameOver}
        flagsLeft={flagsLeft}
        setFlagsLeft={setFlagsLeft}
      />
      <GameBanner selectedOption={selectedOption} />
    </View>
  );
};
