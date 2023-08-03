import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './home.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Cairo - Egypt</Text>
          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cutCount}>
              <Text style={styles.cutNumber}> 8 </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
