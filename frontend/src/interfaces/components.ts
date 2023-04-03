import { ColorValue, KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';

// Icon Props
export interface IconProps {
  iconColor?: string;
  iconName: string;
  iconSize?: number;
  iconStyle?: StyleProp<TextStyle>
}

// Keyboard Appearance Type
type KeyboardAppearanceOptions = 'default' | 'dark' | 'light' 

// Text Input Props
export interface TextInputProps {
  placeholder?: string | undefined
  placeholderTextColor?: ColorValue | undefined
  onChange?: ((text: string) => void) | undefined
  selectionColor?: string;
  value?: string | undefined
  keyboardType?: KeyboardTypeOptions | undefined
  keyboardAppearance?: KeyboardAppearanceOptions | undefined
  secureTextEntry?: boolean | undefined
}