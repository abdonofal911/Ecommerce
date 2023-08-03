import React from 'react';
import {Text, View} from 'react-native';
import styles from './welcome.style';
import {COLORS, SIZES} from '../../assets/constants';

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcometxt(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcometxt(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
