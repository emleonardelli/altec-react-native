import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {colors} from '../../utils/theme';

interface Props {
  children: ReactNode;
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: string;
  size?: number;
}

const getTextStyle = ({
  color,
  size,
  align,
}: Pick<Props, 'color' | 'size' | 'align'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
  };

  return textStyle;
};

const Typography = ({children, size, align, color}: Props) => {
  const textStyle = getTextStyle({color, size, align});
  return (
    <Text allowFontScaling={false} style={textStyle}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  align: 'left',
  color: colors.black,
  size: 14,
};

export default Typography;
