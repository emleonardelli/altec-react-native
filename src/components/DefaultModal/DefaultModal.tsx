import React from 'react';
import {Modal, Text, View} from 'react-native';
import DefaultButton from '../DefaultButton';
import {styles} from '../DefaultButton/styles';

interface Props {
  visible: boolean;
  primaryButtonText: string;
  onPressPrimaryButton: () => void;
  secondaryButtonText?: string;
  onPressSecondaryButton?: () => void;
}

export const DefaultModal = ({
  visible,
  primaryButtonText,
  onPressPrimaryButton,
  secondaryButtonText,
  onPressSecondaryButton,
}: Props) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
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
            type="secondary"
            texto={primaryButtonText}
            onPress={onPressPrimaryButton}></DefaultButton>
          {secondaryButtonText && onPressSecondaryButton ? (
            <DefaultButton
              type="primary"
              texto={secondaryButtonText}
              onPress={onPressSecondaryButton}></DefaultButton>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

DefaultModal.defaultProps = {
  additionalStyle: {},
};
