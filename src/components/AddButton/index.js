import React, {useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7f58ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    position: 'absolute',
    top: -65,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#fff',
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#7f58ff',
  },
});

export default function AddButton() {
  const buttonSize = useRef(new Animated.Value(1)).current;
  const mode = useRef(new Animated.Value(0)).current;

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  function handlePress() {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        duration: 350,
        useNativeDriver: false,
      }),
    ]).start();
  }

  const resizeButton = {
    transform: [
      {
        scale: buttonSize,
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: mode.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -100],
  });

  const thermometerY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const thermometerStyle = {
    position: 'absolute',
    left: thermometerX,
    top: thermometerY,
  };

  const timeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -24],
  });

  const timeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -150],
  });

  const timeStyle = {
    position: 'absolute',
    left: timeX,
    top: timeY,
  };

  const pulseX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, 50],
  });

  const pulseY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const pulseStyle = {
    position: 'absolute',
    left: pulseX,
    top: pulseY,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[thermometerStyle]}>
        <View style={styles.secondaryButton}>
          <Feather name="thermometer" size={24} color="#fff" />
        </View>
      </Animated.View>

      <Animated.View style={timeStyle}>
        <View style={styles.secondaryButton}>
          <Feather name="clock" size={24} color="#fff" />
        </View>
      </Animated.View>

      <Animated.View style={pulseStyle}>
        <View style={styles.secondaryButton}>
          <Feather name="activity" size={24} color="#fff" />
        </View>
      </Animated.View>

      <AnimatedTouchable
        activeOpacity={0.95}
        style={[styles.button, resizeButton]}
        onPress={handlePress}>
        <Animated.View style={rotation}>
          <FontAwesome5 name="plus" size={24} color="#fff" />
        </Animated.View>
      </AnimatedTouchable>
    </View>
  );
}
