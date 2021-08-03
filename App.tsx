import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DefaultButton, Typography} from './src/components';
import {DefaultModal} from './src/components/DefaultModal/DefaultModal';

import {colors} from './src/utils/theme';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.mainContainer}>
      <Typography color={colors.mainOrange} size={30}>
        Hola mundo
      </Typography>
      <Typography>Subtitulo</Typography>
      <DefaultButton
        type="secondary"
        texto="Abrir!"
        onPress={showModal}></DefaultButton>
      <DefaultModal
        primaryButtonText="Ok"
        onPressPrimaryButton={closeModal}
        secondaryButtonText="Cancel"
        onPressSecondaryButton={closeModal}
        visible={isModalVisible}></DefaultModal>
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
