import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from '../../utils/theme';
import {styles} from './styles';

interface Props {
  texto: String;
  onPress: () => void;
  type: String;
}

const typeButton = (type: String) => {
  const style = {
    backgroundColor: '#FF0000',
  };
  if (type == 'primary') style.backgroundColor = '#FF0000';
  if (type == 'secondary') style.backgroundColor = '#00FF00';
  return style;
};

export const DefaultButton = ({onPress, texto, type}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, typeButton(type)]}
      onPress={onPress}>
      <Text style={styles.text}>{texto}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
};
