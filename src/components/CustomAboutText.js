import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLOR } from '../constants/GlobalConstants';
import { POPPINSBOLD } from '../assets/css/styles';
const CustomAboutText = ({text,text1}) => {
  return (
    <View style={{flexDirection:'row',marginTop:45}}>
      <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',width:30,height:30,borderRadius:15,borderColor:COLOR.BACKGROUND_COLOR,borderStyle:"dotted",marginRight:20}}>
        <MaterialIcons name="keyboard-arrow-right" color={COLOR.BACKGROUND_COLOR}/>
       </View>
       <Text style={{color:'black',fontFamily:POPPINSBOLD,textAlign:'right',marginRight:50,alignSelf:'center'}}>{text}</Text>
        <Text style={{color:'black',fontSize:20,fontFamily:POPPINSBOLD,fontWeight:'bold',alignSelf:'center'}}>{text1}</Text>
      
    </View>
  )
}

export default CustomAboutText