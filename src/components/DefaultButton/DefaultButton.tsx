import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  texto: String;
  onPress: () => void;
}

export const DefaultButton = ({onPress, texto, additionalStyle}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, additionalStyle]}
      onPress={onPress}>
      <Text style={styles.text}>{texto}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
};
