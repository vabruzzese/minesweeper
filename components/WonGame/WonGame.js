import React from 'react';
import {View, Text, Button} from 'native-base';
import {Modal} from 'react-native';
import {styles} from './styles';
import {createBoard} from '../../utils/board';
import {MAX_NUMBER_OF_FLAGS} from '../../utils/constants';

export const WonGame = ({setWonGame, setBoard, setFlagsLeft}) => {
  const resetGame = () => {
    setWonGame(false);
    const newBoard = createBoard();
    setBoard(newBoard);
    setFlagsLeft(MAX_NUMBER_OF_FLAGS);
  };
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.topView}>
        <View style={styles.innerView}>
          <Text style={styles.title}>YOU WIN</Text>
          <Text style={styles.sentence}>
            Select the 'Retry' button to play again
          </Text>
          <Button style={styles.button}>
            <Text style={styles.buttonText} onPress={resetGame}>
              Retry
            </Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};
