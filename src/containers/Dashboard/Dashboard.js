import { View, Text,Image } from 'react-native'
import React from 'react'
import Rectangle177 from '../../assets/images/Rectangle177.png';
import { POPPINSBOLD } from '../../assets/css/styles';
import CustomCard from '../../components/CustomCard';
import Image1 from '../../assets/images/Ellipse132.png';
import Image2 from '../../assets/images/Ellipse133.png';
import Image3 from '../../assets/images/Ellipse134.png';
import Image4 from '../../assets/images/Ellipse135.png';
import Slider from '../../assets/images/Slider.png';
const Dashboard = () => {
    
  return (
    <View style={{paddingHorizontal:20,flex:1,backgroundColor:'white'}}>
      <Image source={Rectangle177} style={{alignSelf:'center',marginHorizontal:20,width:380,resizeMode:'contain'}}/>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20,marginTop:15}}> 
        <Text style={{color: 'black',fontSize: 20,fontFamily: POPPINSBOLD,fontWeight: 'bold'}}>Shop By Categories</Text>
        <Image source={Slider} />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <CustomCard image={Image1} text={'Bottle water'}/>
        <View style={{width:6}}/>
        <CustomCard image={Image2} text={'Water Dispenser'}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <CustomCard image={Image3} text={'Pure Water'}/>
        <View style={{width:6}}/>
        <CustomCard image={Image4} text={'Sachet Water'}/>
      </View>
    </View>
  )
}

export default Dashboard;
