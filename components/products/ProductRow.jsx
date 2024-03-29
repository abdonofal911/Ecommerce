import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './ProductRow.style';
import {SIZES} from '../../assets/constants';
import ProductCradView from './ProductCradView';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCradView />}
        horizontal
        contentContainerStyle={{columnGap: SIZES.medium}}
      />
    </View>
  );
};

export default ProductRow;
