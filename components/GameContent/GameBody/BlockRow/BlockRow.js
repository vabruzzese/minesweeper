import React from 'react';
import {View} from 'native-base';
import {Block} from './Block/Block';
import {styles} from './styles';

export const BlockRow = ({
  row,
  board,
  setBoard,
  selectedOption,
  setGameOver,
  flagsLeft,
  setFlagsLeft,
}) => (
  <View style={styles.blockRow}>
    {row.map(block => (
      <Block
        key={`${block.x}+${block.y}`}
        block={block}
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
