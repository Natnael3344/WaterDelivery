import { useState } from "react";
import image from '../../assets/images/image.png';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { POPPINSBOLD, POPPINSREGULAR } from "../../assets/css/styles";
import CustomButton from "../../components/loader/CustomButton";
import { COLOR } from "../../constants/GlobalConstants";
const StartScreen = ({ navigation, screenName }) => {
    const [showRealApp, setShowRealApp] = useState(false);
    // const dispatch = useDispatch();
  
    
  
    const onDone = () => {
      navigation.navigate('Login')
      //setShowRealApp(true);
    };
    const onSkip = () => {
      navigation.navigate('Login')
      //setShowRealApp(true);
    };
   
   
     const RenderItem = ({item}) => {
     
      onFinish = () => {
        navigation.navigate('Login')
      }
      //console.log(item);
      return (
        
            <View style={{flex:1,backgroundColor:'white',paddingHorizontal:30,justifyContent:'center'}}>
          <Text style={{fontFamily:POPPINSBOLD,fontSize:36,textAlign:'center',color:'#46C4F5',fontWeight:'700'}}>{item.title}</Text>
          <Text style={{fontWeight:'400',fontSize:14,color:'black',fontFamily:POPPINSREGULAR,textAlign:'center',marginBottom:70}}>{item.text}</Text>
          <Image source={item.image} resizeMode='contain' style={{width:'100%',marginBottom:70}}/>
          <CustomButton color={COLOR.BACKGROUND_COLOR} color1={'white'} bottom={60} onPress={onSkip} text={'Get Started'}/>
              
            
            {/* <Text style={globalStyles.appIntroBody}>{item.text}</Text> */}
           
          
          </View>
      );
    };
    
    return (
      <>
        {showRealApp ? (
          <SafeAreaView >
            <View >
              {/* <Text style={styles.titleStyle}>
                React Native App Intro Slider using AppIntroSlider
              </Text>
              <Text style={styles.paragraphStyle}>
                This will be your screen when you click Skip
                from any slide or Done button at last
              </Text> */}
              <Button
                title="Show Intro Slider again"
                onPress={() => setShowRealApp(false)}
              />
            </View>
          </SafeAreaView>
        ) : (
          <AppIntroSlider
            data={slides}
            renderItem={({ item }) => <RenderItem item={item}/>}
            showDoneButton={false}
            showSkipButton={false}
            showNextButton={false}
            onDone={onDone}
            onSkip={onSkip}
            dotStyle={{backgroundColor:'gray'}}
            activeDotStyle={{backgroundColor:COLOR.BACKGROUND_COLOR}}	
          />
        )}
      </>
    );
  };
  
  export default StartScreen;
  
  
  
  
  
  const slides = [
    {
      key: 's1',
      title:'BOOK THROUGH APP',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: image
      ,
      backgroundColor: '#20d2bb',
      colors:['#fdf1f1', '#fdf1f3', '#fdf1f3'],
      colorText:'#272262'
    },
    {
      key: 's2',
      title:'RECIEVE ORDER',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: image1
         ,
      colors:['#fed46a', '#fee9b0', '#ffd889'],
      backgroundColor: '#febe29',
    },
    {
      key: 's3',
      title:'EN ROUTE DELIVERY',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: image2,
      backgroundColor: '#22bcb5',
      colors:['#4eb888', '#d6ecd7', '#a7d8bc']
    },
   
  ];