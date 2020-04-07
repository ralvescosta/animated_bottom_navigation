import React from 'react';
import {View, StatusBar, Text} from 'react-native';

// import { Container } from './styles';

export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: '#161924'}}>
      <StatusBar barStyle="light-content" backgroundColor="#161924" />
      <Text>HOME</Text>
    </View>
  );
}
