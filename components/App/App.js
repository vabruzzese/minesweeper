import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {AppHeader} from '../AppHeader';
import {GameContent} from '../GameContent';
import {createBoard} from '../../utils/board';
import {GameOver} from '../GameOver';
import {WonGame} from '../WonGame';
import {
  MAX_NUMBER_OF_FLAGS,
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
} from '../../utils/constants';

export const App = () => {
  const [board, setBoard] = useState(createBoard());
  const [gameOver, setGameOver] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [flagsLeft, setFlagsLeft] = useState(MAX_NUMBER_OF_FLAGS);
  const numOfBlocks = NUMBER_OF_ROWS * NUMBER_OF_COLUMNS;
  const [blocksLeft, setBlocksLeft] = useState(numOfBlocks);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <AppHeader />
          <GameContent
            board={board}
            setBoard={setBoard}
            gameOver={gameOver}
            setGameOver={setGameOver}
            wonGame={wonGame}
            setWonGame={setWonGame}
            flagsLeft={flagsLeft}
            setFlagsLeft={setFlagsLeft}
            blocksLeft={blocksLeft}
            setBlocksLeft={setBlocksLeft}
          />
          {gameOver && (
            <GameOver
              gameOver={gameOver}
              setGameOver={setGameOver}
              setBoard={setBoard}
              setFlagsLeft={setFlagsLeft}
              setBlocksLeft={setBlocksLeft}
            />
          )}
          {wonGame && (
            <WonGame
              gameOver={gameOver}
              setWonGame={setWonGame}
              setBoard={setBoard}
              setFlagsLeft={setFlagsLeft}
              setBlocksLeft={setBlocksLeft}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};
