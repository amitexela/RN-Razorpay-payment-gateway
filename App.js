/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import RNUpiPayment from './src/UPI';
import RNUpiPayment from 'react-native-upi-pay';

import RozorpayPayment from './src/Razorpay';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Button
            onPress={() => {
              RNUpiPayment.initializePayment({
                vpa: 'amitrathee987@ybl',
                payeeName: 'Amit',
                amount: '1',
                transactionRef: 'aasf-332-aoei-fn'
              }, successCallback, failureCallback);
    
              function successCallback(data) {
                console.log(data);
                Alert.alert('Success', JSON.stringify(data));
              }
    
              function failureCallback(data) {
                console.log(data);
                Alert.alert('Failure', JSON.stringify(data));
              }
            }}
            title="NPM UPI Payment"
            />
        </View>
        <View style={{marginTop: 50}}>
          <Button 
            title={'Razorpay'}
            onPress={() => RozorpayPayment()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
