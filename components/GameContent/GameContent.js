import React, {useState} from 'react';
import {View} from 'native-base';
import {styles} from './styles';
import {GameHeader} from './GameHeader';
import {GameBody} from './GameBody';
import {GameBanner} from './GameBanner';
import {SELECTED_OPTION} from '../../utils/constants';

export const GameContent = ({
  board,
  setBoard,
  gameOver,
  wonGame,
  setGameOver,
  setWonGame,
  flagsLeft,
  setFlagsLeft,
}) => {
  const [selectedOption, setSelectedOption] = useState(SELECTED_OPTION.SEARCH);
  return (
    <View style={styles.gameBoard}>
      <GameHeader
        wonGame={wonGame}
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
        setWonGame={setWonGame}
      />
      <GameBanner selectedOption={selectedOption} />
    </View>
  );
};
