import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { buttonStyles, textStyles } from './buttonStyles';

type Props = {
  onPress(): void;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      style={props.style ? props.style : buttonStyles.default}
      onPress={props.onPress}>
      <Text style={props.textStyle ? props.textStyle : textStyles.default}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
