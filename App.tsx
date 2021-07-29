import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {DefaultButton} from './src/components';

import {colors} from './src/utils/theme';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.tittle}>Hola mundo!</Text>
      <DefaultButton
        type="secondary"
        texto="Abrir!"
        onPress={showModal}></DefaultButton>

      <Modal animationType="fade" transparent visible={isModalVisible}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width: '100%',
          }}>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: '#FFFFFF',
              width: '90%',
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Hola Mundo!</Text>
            <DefaultButton
              type="primary"
              texto="Aceptar!"
              onPress={closeModal}></DefaultButton>
          </View>
        </View>
      </Modal>
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
