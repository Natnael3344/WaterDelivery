
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, View } from 'react-native';
import FirstScreen from '../containers/App-Intro/FirstScreen';
import { COLOR } from '../constants/GlobalConstants';
import StartScreen from '../containers/App-Intro/StartScreen';
import LoginScreen from '../containers/Auth/Login/LoginScreen';
import OtpScreen from '../containers/Auth/OTP/OtpScreen';
import Dashboard from '../containers/Dashboard/Dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../assets/images/Home.png';
import Notification from '../assets/images/Notification.png';
import Calendar from '../assets/images/Calendar.png';
import Bag2 from '../assets/images/Bag2.png';
import Bag3 from '../assets/images/Bag3.png';
import globalStyles, { POPPINSBOLD } from '../assets/css/styles';
import Menu from '../assets/images/XboxMenu.png';
import ProductScreen from '../containers/Products/ProductScreen';
import AboutProduct from '../containers/Products/AboutProduct';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

logout = () => {
  OTPActions.logout();
};

// const DrawerHeader = props => {
//   return (
//     <View>
//       <View style={drawerHeaderStyle.imageContainer}>
//         <Image style={drawerHeaderStyle.imageStyle} source={Logo} />
//       </View>
//       <View style={drawerHeaderStyle.detailsContainer}>
//         <Text style={drawerHeaderStyle.nameTextStyle}>Adivid Tech </Text>
//       </View>
//     </View>
//   );
// };

// const DrawerFooter = props => {
//   return (
//     <View style={DrawerFooterStyle.component}>
//       <View style={{paddingHorizontal: 20}}>
//         <CustomButton
//           text={'Logout'}
//           onPress={() =>
//             Alert.alert(
//               'Log out',
//               'Do you want to logout?',
//               [
//                 {
//                   text: 'Cancel',
//                   onPress: () => {
//                     props.navigation.dispatch(DrawerActions.closeDrawer());
//                   },
//                 },
//                 {
//                   text: 'Confirm',
//                   onPress: () => {
//                     AsyncStorage.clear();
//                    // props.navigation.navigate('StartScreen');
//                   },
//                 },
//               ],
//               {cancelable: false},
//             )
//           }
//         />
//       </View>
//       <Text style={DrawerFooterStyle.RightsTextStyle}>
//         © All rights are reserved with My Ambar Suraksha Chakra
//       </Text>
//     </View>
//   );
// };

const BottomTabsFirstStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="bottom"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerLeft: () => (
          <Ionicons
            name="chevron-back-sharp"
            size={25}
            color="black"
            onPress={() => navigation.goBack()}
            style={{marginLeft: 15}}
          />
        ),
        headerTintColor: 'black',
        headerTitleStyle:{fontSize:20,fontFamily:POPPINSBOLD,color:'black',fontWeight:'bold',marginLeft:45},
        
      }}>
       <Stack.Screen
        name="bottom"
        component={BottomTabStack}
        options={{
          headerShown: false,
          title: 'Home', //Set Header Title
        }}
      />
     {/* <Stack.Screen
        name="fileComplaint"
        component={FileComplaint}
        options={{
          title: 'File A complaint', //Set Header Title
        }}
      />
      <Stack.Screen
        name="faq"
        component={FAQScreen}
        options={{
          title: 'FAQ', //Set Header Title
        }}
      />

      <Stack.Screen
        name="trackComplaint"
        component={TrackComplaint}
        options={{
          title: 'Track A complaint', //Set Header Title
        }}
      />
      <Stack.Screen
        name="BlogDetail"
        component={BlogDetailScreen}
        options={{
          title: 'Blogs', //Set Header Title
        }}
      /> */}
         <Stack.Screen name="FirstScreen" component={FirstScreen} 
          options={{
            headerShown: false,
           
          }}
         />
         <Stack.Screen name="StartScreen" component={StartScreen} 
          options={{
            headerShown: false,
           
          }}
         />
        <Stack.Screen name="Login" component={LoginScreen} 
          options={{
            headerShown: false,
           
          }}
         />
         <Stack.Screen name="Otp" component={OtpScreen} 
          options={{
            headerShown: false,
           
          }}
         />
        <Stack.Screen
        name="about"
        component={AboutProduct}
        options={{
          title: 'About Product', //Set Header Title
        }}
      /> 
         
    </Stack.Navigator>
  );
};

// const LogoTitle = props => {
//   return (
//     <View style={globalStyles.dashBoardAppBar}>
//       <View style={{flex: 1, alignItems: 'flex-start'}}>
//         <TouchableOpacity
//           onPress={() =>
//             props.navigation.dispatch(DrawerActions.toggleDrawer())
//           }>
//           <Image
//             source={Menu}
//             resizeMode="contain"
//             style={{width: 25, height: 25}}
//           />
//         </TouchableOpacity>
//       </View>
//       <View style={{flex: 1, alignSelf: 'center'}}>
//         <Image
//           source={Logo}
//           resizeMode="contain"
//           style={globalStyles.dashboardLogo}
//         />
//       </View>
//       <View style={{flex: 2}} />
//     </View>
//   );
// };
// const BackHeader = props => {
//   return (
//     <View style={globalStyles.dashBoardAppBar}>
//       <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 5}}>
//         <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
//           <Image source={ARROWBACK} resizeMode="contain" />
//         </TouchableOpacity>
//       </View>
//       <View style={{flex: 5}}>
//         <Text>{props.title}</Text>
//       </View>
//     </View>
//   );
// };

// function CustomDrawerContent(props) {
//   return (
//     <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
//       <View style={{flex: 1}}>
//         <DrawerHeader />
//         <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
//           <DrawerItemList {...props} />
//         </ScrollView>
//         <DrawerFooter {...props} />
//       </View>
//     </SafeAreaView>
//   );
// }

// const CustomDrawerContentold = props => (
//   <ScrollView>
//     <SafeAreaView
//       style={{flex: 1}}
//       forceInset={{top: 'always', horizontal: 'never'}}>
//       <DrawerItemList {...props} />
//     </SafeAreaView>
//   </ScrollView>
// );

// function CustomDrawerContentOld(props) {
//   return (
//     <View style={{flex: 1}}>
//       <View
//         style={{
//           backgroundColor: COLOR.BACKGROUND_COLOR,
//           flexDirection: 'row',
//           alignItems: 'center',
//           alignContent: 'center',
//           paddingVertical: 40,
//           paddingHorizontal: 10,
//         }}>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             source={Avatar}
//             resizeMode="contain"
//             style={{
//               width: 70,
//               height: 70,
//               borderRadius: 35,
//               borderWidth: 3,
//               borderColor: '#ccc',
//             }}
//           />
//         </View>
//         <Text
//           style={{
//             marginLeft: 10,
//             color: 'white',
//             fontWeight: 'bold',
//             fontSize: 16,
//           }}>
//           John Doe
//         </Text>
//       </View>
//       <DrawerContentScrollView {...props} style={{marginTop: -50}}>
//         <DrawerItemList {...props} />
//       </DrawerContentScrollView>
//       <View
//         style={{
//           backgroundColor: COLOR.BACKGROUND_COLOR,
//           height: 50,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <TouchableOpacity onPress={logout}>
//           <Text style={{color: 'white', fontSize: 16}}>Logout</Text>
//         </TouchableOpacity>

//       </View>
//     </View>
//   );
// }

const DrawerNavigator = props => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerItemStyle: {marginVertical: 0},
        drawerActiveTintColor: '#000000',
        drawerActiveBackgroundColor: 'transparent',
        inactiveTintColor: '#000000',
        inactiveBackgroundColor: '',
        backBehavior: 'history',
        // header : ({ navigation, route, options }) => { return <BackHeader title={route.name} navigation={navigation} />}
        headerStyle: {
          backgroundColor: COLOR.BACKGROUND_COLOR,
        },
        // headerLeft: () => (
        //   <Ionicons
        //     name="ios-arrow-back"
        //     size={30}
        //     color="white"
        //     onPress={() => navigation.goBack()}
        //     style={{marginLeft: 15}}
        //   />
        // ),
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name="home"
        component={BottomTabsFirstStack}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      {/* <Drawer.Screen
        name="about-us"
        component={AboutUs}
        options={{
          title: 'About Us',
        }}
      />
     
      <Drawer.Screen
        name="how"
        component={HowItWorks}
        options={{
          title: 'How it works', //Set Header Title
        }}
      />
      <Drawer.Screen
        name="laws"
        component={LawsScreen}
        options={{
          title: 'Laws',
        }}
      />
      <Drawer.Screen
        name="research"
        component={ResearchScreen}
        options={{
          title: 'Research',
        }}
      />
      <Drawer.Screen
        name="learning"
        component={LearningDocumentsScreen}
        options={{
          title: 'Learning Documents',
        }}
      />
      <Drawer.Screen
        name="videos"
        component={VideosScreen}
        options={{
          title: 'Videos',
        }}
      />
      <Drawer.Screen
        name="blogs"
        component={BlogsScreen}
        options={{
          title: 'Blogs',
        }}
      />
      <Drawer.Screen
        name="articles"
        component={ArticlesScreen}
        options={{
          title: 'Articles',
        }}
      />
       <Drawer.Screen
        name="terms-conditions"
        component={Terms}
        options={{
          title: 'Terms & Condtions', //Set Header Title
        }}
      />
      <Drawer.Screen
        name="privacy"
        component={PrivacyPolicy}
        options={{
          title: 'Privacy Policy',
        }}
      />
      <Drawer.Screen
        name="confidentiality"
        component={Confidentiality}
        options={{
          title: 'Confidentiality',
        }}
      /> */}

    </Drawer.Navigator>
  );
};

const BottomTabStack = ({navigation}) => {
  // const navigation = useNavigation();
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator
        initialRouteName="dashboard"
        screenOptions={{
          // tabBarStyle: globalStyles.dashBoardBottomBar,
          // headerStyle: {
          //  marginLeft:20,
          // },

          headerLeft: () => (
            <Image source={Menu} style={{marginLeft:20,}}/>
          ),
          // headerTintColor: 'white',
          // headerTitleAlign: 'center',
        }}
        
        >
        
        <Tab.Screen
          name="Screen2"
          component={FirstScreen}
          options={{
            title: 'Profile',
            tabBarLabel: '',
            tabBarIcon: () => <Image source={Bag2} resizeMode="contain" />,
          }}
        />

        <Tab.Screen
          name="Screen3"
          component={LoginScreen}
          options={{
            title: 'Contact Us',
            tabBarLabel: '',
            tabBarIcon: () => <Image source={Bag3} resizeMode="contain" />,
          }}
        />
        <Tab.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            // header: ({navigation, route, options}) => {
            //   return <LogoTitle title={route.name} navigation={navigation} />;
            // },
            title: '',
            tabBarIcon: () => <View style={{backgroundColor:'black', width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center'}}><Image source={Home} resizeMode="contain" style={{alignSelf:'center'}}/></View>,
          }}
        />
        <Tab.Screen
          name="Screen4"
          component={OtpScreen}
          options={{
            title: 'Share',
            tabBarLabel: '',
            tabBarIcon: () => 
            
            <Image source={Calendar} resizeMode="contain" />
            
          }}
        />
        <Tab.Screen
          name="Screen5"
          component={StartScreen}
          options={{
            title: 'Share',
            tabBarLabel: '',
            tabBarIcon: () => 
            
            <Image source={Notification} resizeMode="contain" />
            
          }}
        />
        {/* <Stack.Screen name="product" component={ProductScreen} 
          options={{
            headerShown: false,
            title:'',
          }}
         /> */}
          <Tab.Screen
          name="product"
          component={ProductScreen}
          options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            headerShown:false
          }
          }
        />
      </Tab.Navigator>
    </View>
  );
};

export const AppStack = () => {
  return <DrawerNavigator />;
};
