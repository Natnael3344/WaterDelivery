import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { navigationRef } from "./RootNavigation";
import { connect } from 'react-redux';
function Router(props) {
    let token;
   if(props.user?.data !== undefined)
    {
      token = props.user?.data[0]?.token;
    }
  // console.log("----",token,token !== undefined,props.user?.data[0])
    return (
      <NavigationContainer ref={navigationRef}>
       {/* { token ? <AppStack /> : <AuthStack />   }  */}
      {   <AppStack /> }  
      </NavigationContainer>
    );
  }
  
  const mapStateToProps = function(state) {
    return {
      //  user : state.otp.user
    }
  }
  
  export default connect(mapStateToProps)(Router);