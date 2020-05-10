import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Text, View} from 'native-base';
import {styles} from './styles';
import {Flag} from '../../../../Icons/Flag';
import {Mine} from '../../../../Icons/Mine';
import {SELECTED_OPTION} from '../../../../../utils/constants';
import {
  revealSection,
  hasWonGame,
  updateFlags,
} from '../../../../../utils/board';

export const Block = ({
  block,
  board,
  setBoard,
  selectedOption,
  setGameOver,
  flagsLeft,
  setFlagsLeft,
  setWonGame,
}) => {
  const selectBlock = () => {
    const x = block.x;
    const y = block.y;
    if (selectedOption === SELECTED_OPTION.SEARCH) {
      if (board[y][x].hasMine) {
        board[y][x].isRevealed = true;
        setGameOver(true);
      } else if (board[y][x].number > 0) {
        board[y][x].isRevealed = true;
      } else {
        board[y][x].isRevealed = true;
        revealSection(block, board);
        updateFlags(board, flagsLeft, setFlagsLeft);
      }
    } else {
      if (flagsLeft > 0) {
        board[y][x].isFlagged = true;
        setFlagsLeft(flagsLeft - 1);
      }
    }
    setBoard([...board]);
    if (hasWonGame(board)) {
      setWonGame(true);
    }
  };
  const removeFlag = () => {
    const x = block.x;
    const y = block.y;
    if (selectedOption === SELECTED_OPTION.FLAG) {
      board[y][x].isFlagged = false;
      setFlagsLeft(flagsLeft + 1);
      setBoard([...board]);
    }
  };
  return (
    <>
      {!block.isRevealed && !block.isFlagged && (
        <Button style={styles.button} onPress={() => selectBlock(block)} />
      )}
      {block.isRevealed && !block.hasMine && (
        <View style={styles.numberView}>
          {block.number > 0 && (
            <Text style={styles.number}>{block.number}</Text>
          )}
        </View>
      )}
      {!block.isRevealed && block.isFlagged && (
        <TouchableOpacity style={styles.flagView} onPress={removeFlag}>
          <Flag />
        </TouchableOpacity>
      )}
      {block.isRevealed && block.hasMine && (
        <View style={styles.mineView}>
          <Mine />
        </View>
      )}
    </>
  );
};
