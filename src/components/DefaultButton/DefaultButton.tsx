import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface Props {
  texto: string;
  onPress: () => void;
  type: string;
}

const typeButton = (type: string) => {
  const style = {
    backgroundColor: '#FF0000',
  };
  if (type == 'primary') style.backgroundColor = '#FF0044';
  if (type == 'secondary') style.backgroundColor = '#00FF88';
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
