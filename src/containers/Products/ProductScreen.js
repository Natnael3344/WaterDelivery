import { View, Text } from 'react-native'
import React from 'react'
import CustomPressable from '../../components/CustomPressable'
import Home from '../../assets/images/Depot.png';
import Shop from '../../assets/images/Shop.png';
import Delivery from '../../assets/images/Delivery.png';
import ProductCard from '../../components/ProductCard';
import Rectangle50 from '../../assets/images/Rectangle50.png';
import Rectangle66 from '../../assets/images/Rectangle66.png';
import Rectangle68 from '../../assets/images/Rectangle68.png';
import Rectangle72 from '../../assets/images/Rectangle72.png';
const ProductScreen = () => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingHorizontal:20,marginBottom:40,marginVertical:20}}>
            <CustomPressable image={Home} text={'Pickup'}/>
            <CustomPressable image={Shop} text={'Wholesale'}/>
            <CustomPressable image={Delivery} text={'Deivery'}/>
        </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <ProductCard image={Rectangle50} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
        <ProductCard image={Rectangle66} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
        <ProductCard image={Rectangle68} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <ProductCard image={Rectangle50} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
        <ProductCard image={Rectangle66} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
        <ProductCard image={Rectangle72} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <ProductCard image={Rectangle50} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
        <ProductCard image={Rectangle66} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
        <ProductCard image={Rectangle68} text={'Mansar Water'} text1={'Disposable'} text2={'200'}/>
      </View>
    </View>
  )
}

export default ProductScreen