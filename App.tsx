import React from 'react';
import {Alert, Modal, StyleSheet, Text, View} from 'react-native';
import {DefaultButton} from './src/components';

import {DEVICE_HEIGHT, DEVICE_WIDTH} from './src/utils/dimensions';
import {colors} from './src/utils/theme';

const showAlert = () => {
  Alert.alert('hola');
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.tittle}>Hola!</Text>
      <Text>Subtitulo</Text>
      <Text>
        {DEVICE_HEIGHT} {DEVICE_WIDTH}
      </Text>
      <DefaultButton
        type="primary"
        texto="Hola!"
        onPress={showAlert}></DefaultButton>
      <DefaultButton
        type="secondary"
        texto="Mundo!"
        onPress={showAlert}></DefaultButton>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    width: '100%',
  },
  tittle: {
    color: colors.mainOrange,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
