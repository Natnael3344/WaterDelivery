/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Router from './src/navigation/RouteNavigation';
import {extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { AlertHelper } from './src/helpers/AlertHelper';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/config/Store';
import ActivityLoader from './src/components/loader/ActivityLoader';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`


const App = () => {
  return (
    <Provider store={store}>
						<PersistGate loading={<ActivityLoader />} persistor={persistor}>
            <NativeBaseProvider theme={theme}>

									<Router />
									{/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
									<DropdownAlert
										updateStatusBar={true}
										defaultContainer={{ 
										paddingTop: StatusBar.currentHeight,
										paddingBottom: responsiveHeight(2),
										paddingHorizontal:responsiveWidth(2),               
										}}
										contentContainerStyle={{
										flexDirection:'column',              
										}}
										ref={ref => AlertHelper.setDropDown(ref)}
										imageStyle={{display:'none'}}
										onClose={() => AlertHelper.invokeOnClose()}
										closeInterval={4000}
										translucent={true}
										successColor={'#0AD561'}
										errorColor={"#DC3545"}
										activeStatusBarBackgroundColor={"transparent"}
										inactiveStatusBarBackgroundColor={"transparent"}
									/>
								</NativeBaseProvider>
						</PersistGate>
					</Provider>

    
  );
}

export default App;