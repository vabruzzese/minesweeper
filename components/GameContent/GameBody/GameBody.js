import React from 'react';
import {View} from 'native-base';
import {styles} from './styles';
import {BlockRow} from './BlockRow';

export const GameBody = ({
  board,
  setBoard,
  selectedOption,
  setGameOver,
  flagsLeft,
  setFlagsLeft,
}) => {
  return (
    <View style={styles.body}>
      {board.map(row => (
        <BlockRow
          key={row[0].y}
          row={row}
          board={board}
          setBoard={setBoard}
          selectedOption={selectedOption}
          setGameOver={setGameOver}
          flagsLeft={flagsLeft}
          setFlagsLeft={setFlagsLeft}
        />
      ))}
    </View>
  );
};
