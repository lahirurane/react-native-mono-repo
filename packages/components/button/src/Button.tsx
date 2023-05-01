import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { Size, getButtonStyles } from './styles';

export type ButtonProps = {
  /**Text to diplay within the button */
  title: string;
  /** Disable button */
  disabled?: boolean;
  /** Indicating loading animation */
  isLoading?: boolean;
  /** Method to trigger on press/click */
  handleOnPress: () => void;
  /** Button size */
  size?: Size;
  /** override Button container styles */
  containerStyles?: { [key: string]: string };
};
export const Button = ({
  title,
  disabled = false,
  isLoading = false,
  size = 'medium',
  containerStyles = {},
  handleOnPress,
}: ButtonProps) => {
  const styles = getButtonStyles();
  return (
    <TouchableOpacity style={{ ...styles.container, ...containerStyles }} disabled={disabled} onPress={handleOnPress}>
      {isLoading && (
        <View>
          <ActivityIndicator size={size === 'medium' ? 'small' : size} />
        </View>
      )}

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
