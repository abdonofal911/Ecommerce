import {StatusBar} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hi there</Text>
      <Text style={styles.regText}>Hi there</Text>

      <StatusBar barStyle="dark-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  Text: {fontSize: 24, fontFamily: 'Poppins Bold'},
  regText: {fontSize: 24},
});
