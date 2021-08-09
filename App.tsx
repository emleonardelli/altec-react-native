import React, {useState} from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {DefaultButton, Typography} from './src/components';
import {DefaultModal} from './src/components/DefaultModal/DefaultModal';

import {colors} from './src/utils/theme';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <React.Fragment>
      <SafeAreaView style={{backgroundColor: colors.veryLightBlue}} />
      <ScrollView
        style={{backgroundColor: colors.veryLightBlue}}
        contentContainerStyle={styles.mainContainer}>
        <Typography color={colors.mainOrange} size={30}>
          Hola mundo
        </Typography>
        <Typography variant="bold">Subtitulo</Typography>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
        <DefaultButton
          type="secondary"
          texto="Abrir!"
          onPress={showModal}></DefaultButton>
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
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    width: '100%',
    paddingTop: 50,
    paddingBottom: 30,
  },
  tittle: {
    color: colors.mainOrange,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
