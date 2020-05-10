import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {AppHeader} from '../AppHeader';
import {GameContent} from '../GameContent';
import {createBoard} from '../../utils/board';
import {GameOver} from '../GameOver';
import {WonGame} from '../WonGame';
import {MAX_NUMBER_OF_FLAGS} from '../../utils/constants';

export const App = () => {
  const [board, setBoard] = useState(createBoard());
  const [gameOver, setGameOver] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [flagsLeft, setFlagsLeft] = useState(MAX_NUMBER_OF_FLAGS);
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
            setWonGame={setWonGame}
            flagsLeft={flagsLeft}
            setFlagsLeft={setFlagsLeft}
          />
          {gameOver && (
            <GameOver
              gameOver={gameOver}
              setGameOver={setGameOver}
              setBoard={setBoard}
              setFlagsLeft={setFlagsLeft}
            />
          )}
          {wonGame && (
            <WonGame
              gameOver={gameOver}
              setWonGame={setWonGame}
              setBoard={setBoard}
              setFlagsLeft={setFlagsLeft}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};
