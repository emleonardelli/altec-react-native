import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {colors} from '../../utils/theme';

const typographyVariant = {
  bold: 'Raleway-Bold',
  italic: 'Raleway-Italic',
  medium: 'Raleway-Medium',
  regular: 'Raleway-Regular',
};

interface Props {
  children: ReactNode;
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: string;
  size?: number;
  variant?: keyof typeof typographyVariant;
}

const getTextStyle = ({
  color,
  size,
  align,
  variant = 'regular',
}: Pick<Props, 'color' | 'size' | 'align' | 'variant'>) => {
  const textStyle = {
    color,
    fontSize: size,
    textAlign: align,
    fontFamily: typographyVariant[variant],
  };

  return textStyle;
};

const Typography = ({children, size, align, color, variant}: Props) => {
  const textStyle = getTextStyle({color, size, align, variant});
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
  variant: 'regular',
};

export default Typography;
