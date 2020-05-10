import React, {useEffect} from 'react';
import {View, Text, Button} from 'native-base';
import {Modal, Animated, Dimensions} from 'react-native';
import {styles} from './styles';
import {createBoard} from '../../utils/board';
import {
  MAX_NUMBER_OF_FLAGS,
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
} from '../../utils/constants';
import {animateModal} from '../../utils/modal';

export const WonGame = ({
  gameOver,
  setWonGame,
  setBoard,
  setFlagsLeft,
  setBlocksLeft,
}) => {
  const modalHeight = Dimensions.get('window').height / 2;
  const easeAnime = new Animated.Value(0);
  const scaleX = new Animated.Value(1);
  const scaleY = new Animated.Value(1);
  useEffect(() => {
    animateModal(easeAnime, modalHeight, scaleX, scaleY);
  }, [gameOver]);
  const resetGame = () => {
    setWonGame(false);
    const newBoard = createBoard();
    setBoard(newBoard);
    setFlagsLeft(MAX_NUMBER_OF_FLAGS);
    const numOfBlocks = NUMBER_OF_ROWS * NUMBER_OF_COLUMNS;
    setBlocksLeft(numOfBlocks);
  };
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.topView}>
        <Animated.View
          style={[
            styles.innerView,
            {
              marginBottom: easeAnime,
              transform: [{scaleX: scaleX}, {scaleY: scaleY}],
            },
          ]}>
          <Text style={styles.title}>YOU WIN</Text>
          <Text style={styles.sentence}>
            Select the 'Retry' button to play again
          </Text>
          <Button style={styles.button} onPress={resetGame}>
            <Text style={styles.buttonText}>Retry</Text>
          </Button>
        </Animated.View>
      </View>
    </Modal>
  );
};
