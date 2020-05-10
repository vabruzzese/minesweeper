import {Animated, Easing} from 'react-native';

export const animateModal = (easeAnime, modalHeight, scaleX, scaleY) => {
  Animated.timing(easeAnime, {
    toValue: modalHeight,
    duration: 1000,
    easing: Easing.out(Easing.ease),
  }).start(() => {
    Animated.parallel([
      Animated.timing(scaleX, {
        toValue: 1.4,
        duration: 250,
      }).start(() => {
        Animated.timing(scaleX, {
          toValue: 1,
          duration: 250,
        }).start();
      }),
      Animated.timing(scaleY, {
        toValue: 1.4,
        duration: 250,
      }).start(() => {
        Animated.timing(scaleY, {
          toValue: 1,
          duration: 250,
        }).start();
      }),
    ]);
  });
};
