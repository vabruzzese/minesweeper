import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {AppHeader} from '../AppHeader/AppHeader';
import {GameContent} from '../GameContent/GameContent';
import {createBoard} from '../../utils/board';

export const App = () => {
  const [board, setBoard] = useState(createBoard());
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <AppHeader />
          <GameContent board={board} setBoard={setBoard} />
        </View>
      </SafeAreaView>
    </>
  );
};
