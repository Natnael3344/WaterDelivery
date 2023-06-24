import { View, Text } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/GlobalConstants'
import { POPPINSBOLD } from '../../assets/css/styles'
import CustomButton from '../../components/loader/CustomButton'

const FirstScreen = ({navigation}) => {
    const onDone = () => {
        navigation.navigate('StartScreen')
        //setShowRealApp(true);
      };
  return (
    <View style={{backgroundColor:COLOR.BACKGROUND_COLOR,flex:1,justifyContent:'center'}}>
      <Text style={{fontFamily:POPPINSBOLD,alignSelf:'center', fontSize:96,color:'white'}}>RUWA</Text>
    <CustomButton bottom={115} color={'white'} color1={COLOR.BACKGROUND_COLOR} onPress={onDone} text={'Get Started'}/>
    </View>
  )
}

export default FirstScreen