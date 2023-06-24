import { View, Text, Image } from 'react-native'
import React from 'react'
import RectangleBig from '../../assets/images/RectangleBig.png';
import { POPPINSBOLD } from '../../assets/css/styles';
import CustomAboutText from '../../components/CustomAboutText';
import CustomBlackButton from '../../components/CustomBlackButton';
import CustomButton from '../../components/loader/CustomButton';
import { COLOR } from '../../constants/GlobalConstants';
const AboutProduct = () => {
  return (
    <View style={{backgroundColor:'white',flex:1,alignContent:'center',paddingHorizontal:20}}>
        <Image source={RectangleBig} style={{alignSelf:'center'}}/>
        <Text style={{color:'black',fontSize:32,fontFamily:POPPINSBOLD,fontWeight:'bold',alignSelf:'center'}}>Mansar Water</Text>
        <Text style={{color:'black', fontSize:20,fontFamily:POPPINSBOLD,alignSelf:'center'}}>Disposable</Text>
        <CustomAboutText text={'Product Quantity'} text1={'200 Bags'}/>
        <CustomAboutText text={'Product Quantity'} text1={'N20,000'}/>
        <CustomAboutText text={'Use or Type'} text1={'Drinking Water'}/>
        <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between',alignItems:'center',paddingHorizontal:20}}>
        <CustomBlackButton text={'Cancel'}/>
        <CustomButton color={COLOR.BACKGROUND_COLOR} color1={'white'} text={'Add to basket'}/>
        </View>
        
    </View>
  )
}

export default AboutProduct