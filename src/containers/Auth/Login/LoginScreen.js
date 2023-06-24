import React, {useEffect} from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { loginActions } from './Login.actions';
// import validate from '../../../config/Validator';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTextField } from '../../../components/renderInput';
import globalStyles, { POPPINSBOLD, POPPINSREGULAR } from '../../../assets/css/styles';
import { LargeButton } from '../../../components/renderButton';
import { useSelector,useDispatch } from 'react-redux';
import CustomButton from '../../../components/loader/CustomButton';
import { COLOR } from '../../../constants/GlobalConstants';
import { Image } from 'native-base';
import LoginImage from '../../../assets/images/login.png';
const LoginScreen = (props) => {

  const { handleSubmit, reset, submitting,navigation } = props;

  navigateToRegisterScreen = () => {
    navigation.navigate("Otp");
  }

  _onSubmit = (values) => {
    Keyboard.dismiss()
    // props.login(values)
  }
  
  return( 
    
      <View style={{backgroundColor:'white',flex:1}}>
        <Image source={LoginImage} width={300} style={{marginTop:50,marginLeft:35}}/>
          <Text style={{fontFamily:POPPINSBOLD,color:'black',fontSize:36,fontWeight:'700',alignSelf:'center',marginTop:60,marginBottom:20}}>Login</Text>
          <Text style={{fontFamily:POPPINSREGULAR,fontSize:13,textAlign:'center',color:'#C4C4C4',alignSelf:'center',marginBottom:40,width:200}}>Enter your mobile number, we will send you OTP to verify later</Text>
            <Text style={{fontFamily:POPPINSREGULAR,fontSize:13,fontWeight:'400',marginLeft:50,color:'#C4C4C4'}}>Enter mobile number</Text>
            <Field
                name="username"
                label="Mobile Number *"                              
                // inputStyle={StyleSheet.create({marginLeft:70})}
                component={renderTextField}
              />
              <CustomButton color={COLOR.BACKGROUND_COLOR} color1={"white"} bottom={100} text={'Continue'} onPress={navigateToRegisterScreen}/>
          
      </View>

);
}


const mapStateToPros = (state) => {
  return ({ 
      // user: state.login,
      // loading : state.login.loading 
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
      // login: (values) => dispatch(loginActions.login(values)),
      // socialLogin : (socialData,data) => dispatch(loginActions.socialLogin(socialData,data))
  }
}

Login = connect(
  mapStateToPros,
  mapDispatchToProps
)(LoginScreen)



export default reduxForm({
  form: 'Login',
  // validate
})(Login);


