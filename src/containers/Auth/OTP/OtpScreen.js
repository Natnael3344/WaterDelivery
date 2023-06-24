// @ flow

import React, { Component,useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { OTPActions } from './OTP.actions';
// import validate from '../../../config/Validator';
import globalStyles, { POPPINSBOLD, POPPINSREGULAR } from '../../../assets/css/styles'
import CodeInput from 'react-native-confirmation-code-input';
//import TimerCountdown from "react-native-timer-countdown";
import ActivityLoading from "../../../components/loader/ActivityLoader"
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useSelector,useDispatch } from 'react-redux';
import LoginImage from '../../../assets/images/login.png';
import CustomButton from '../../../components/loader/CustomButton';
import { COLOR } from '../../../constants/GlobalConstants';
class OtpScreen extends Component {
    
    
    static navigationOptions = {
        header: null
    };
    
    constructor(props) {
        super(props);
        this.state = { 
            otpButton: 0, 
            isSent:true,
            timer: 90,
            resendOTP: true, };		    
		this.SMSReadSubscription = {};
    }

    
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    navigateToRegisterScreen = () => {
        this.props.navigation.navigate("Register");
    }
    navigateToDashboardScreen = () => {
        this.props.navigation.navigate("dashboard");
      }
   

    _onSubmit = (code) => {
        // console.log("submit",code);
        
        //  let navigationParams = this.props.route.params;
         
        //  console.log("navigationParams",navigationParams);
    
        //  this.props.otp(code, navigationParams);
     }

   

    _resendOTP = () => {
        
    
        let navigationParams = this.props.route.params;
         
        console.log("navigationParams",navigationParams);

        if(typeof navigationParams.personal_mobile != undefined)
        {
            this.setState({ timer: 90, resendOTP: false }, () => {
                this.interval = setInterval(() => {
                  this.setState((prevState) => ({ timer: prevState.timer - 1 }), () => {
                    const { timer } = this.state;
                    if (timer === 0) {
                      clearInterval(this.interval);
                      this.setState({ resendOTP: true });
                    }
                  });
                }, 1000);
              });
             this.props.resendOTP(navigationParams.personal_mobile);
        }
        else{
            navigation.navigate('Login');
        }

        this.refs.codeInputRef1.clear();
    }
	

    render() {
                
        const { handleSubmit, reset, submitting, language } = this.props;
        const { timer, resendOTP } = this.state;
        return (
          <View style={{backgroundColor:'white',flex:1}}>
              <Image source={LoginImage} width={300} style={{marginTop:50,marginLeft:35}}/>
          <Text style={{fontFamily:POPPINSBOLD,color:'black',fontSize:36,fontWeight:'700',alignSelf:'center',marginTop:60,marginBottom:20}}>Verify Number</Text>
          <Text style={{fontFamily:POPPINSREGULAR,fontSize:13,textAlign:'center',color:'#C4C4C4',alignSelf:'center',marginBottom:40,width:200}}>Enter 4 digit OTP sent to +2348076564312</Text>
              <CodeInput
                keyboardType="numeric"
                ref="codeInputRef1"
                secureTextEntry={false}
                className={'border-b'}
                space={10}
                autoFocus={false}
                codeLength={4}
                size={50}
                activeColor={COLOR.BACKGROUND_COLOR}
                inactiveColor={COLOR.BACKGROUND_COLOR}
                containerStyle={{marginBottom:60}}
                //a  className='border-box'
                inputPosition='center'
                onFulfill={(code) => this._onSubmit(code)}
                // inputPosition = 'center'
                codeInputStyle={globalStyles.codeInputStyle}
                />
               <CustomButton color={COLOR.BACKGROUND_COLOR} color1={"white"} bottom={100} text={'Verify OTP'} onPress={this.navigateToDashboardScreen}/> 
                { resendOTP ?(<TouchableOpacity onPress={this._resendOTP}>
                   <Text style={{alignSelf:'center',color:COLOR.BACKGROUND_COLOR,marginBottom:60}}>Resend OTP</Text>
                </TouchableOpacity>):(<Text style={{alignSelf: 'center',}}>Resend in {timer}s`</Text>)}
            
          </View>
       
           
        )
    }
}

const mapStateToPros = (state) => {
   
    return ({ 
        // user : state.login.user.data,
        // loading : state.otp.loading,
        // otpState: state.otp.user,
        // language: getLanguage(state),
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        // otp: (otp, user_id) => dispatch(OTPActions.OTP(otp, user_id)),
        // resendOTP: ( mobile_number) => dispatch(OTPActions.resendOTP(mobile_number))
    }
}

OtpScreen = connect(
    mapStateToPros,
    mapDispatchToProps
)(OtpScreen)

export default reduxForm({
    form: 'OtpScreen',
    // validate
})(OtpScreen);


