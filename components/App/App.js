import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {AppHeader} from '../AppHeader/AppHeader';
import {GameContent} from '../GameContent/GameContent';
import {createBoard} from '../../utils/board';
import {GameOver} from '../GameOver';

export const App = () => {
  const [board, setBoard] = useState(createBoard());
  const [gameOver, setGameOver] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <AppHeader />
          <GameContent board={board} setBoard={setBoard} gameOver={gameOver} setGameOver={setGameOver} />
          {gameOver && <GameOver setGameOver={setGameOver} setBoard={setBoard} />}
        </View>
      </SafeAreaView>
    </>
  );
};
