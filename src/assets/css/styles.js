import { StyleSheet,Platform , Dimensions} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import { globalConstants } from '../../constants/GlobalConstants';
const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let DEVICE_WIDTH               =    Dimensions.get('window').width;
let DEVICE_HEIGHT              =    Dimensions.get('window').height;

export const IOS_PLATFORM      =   (Platform.OS === globalConstants.IOS ) ? true : false; 

export const CAMBRIABOLD       =   IOS_PLATFORM ? 'Poppins-Bold'        : 'Poppins-Bold';
export const CAMBRIA           =   IOS_PLATFORM ? 'Poppins-Black'       : 'Poppins-Black';
export const MONSTERREGULAR    =   IOS_PLATFORM ? 'Poppins-Regular' 	: 'Poppins-Regular';

const DAGGERSQUARE      	   =   IOS_PLATFORM ? 'Poppins-Black'       : 'Poppins-Black';
const MONSTERBOLD       	   =   IOS_PLATFORM ? 'Poppins-Bold'     	: 'Poppins-Bold';
const MONSTERSEMIBOLD   	   =   IOS_PLATFORM ? 'Poppins-SemiBold' 	: 'Poppins-SemiBold';
const MONSTERITALIC            =   IOS_PLATFORM ? 'Poppins-Italic'   	: 'Poppins-Italic';

const MONSTERTHIN              =   IOS_PLATFORM ? 'Poppins-Thin'     	: 'Poppins-Thin';
const MONSTERMEDIUM            =   IOS_PLATFORM ? 'Poppins-Medium'   	: 'Poppins-Medium';

export const POPPINSBLACK      =   IOS_PLATFORM ? 'Poppins-Black'       : 'Poppins-Black';
export const POPPINSREGULAR    =   IOS_PLATFORM ? 'Poppins-Regular' 	: 'Poppins-Regular';
export const POPPINSBOLD       =   IOS_PLATFORM ? 'Poppins-Bold'        : 'Poppins-Bold';
export const POPPINSSEMIBOLD   =   IOS_PLATFORM ? 'Poppins-SemiBold' 	: 'Poppins-SemiBold';
export const POPPINSITALIC     =   IOS_PLATFORM ? 'Poppins-Italic'   	: 'Poppins-Italic';
export const POPPINSTHIN       =   IOS_PLATFORM ? 'Poppins-Thin'     	: 'Poppins-Thin';
export const POPPINSMEDIUM     =   IOS_PLATFORM ? 'Poppins-Medium' : 'Poppins-Medium';



const globalStyles = StyleSheet.create({ 
             
      //// Activity Indiacator \\\

      activityIndicatorContainer: {     
        flex: 1,
        flexDirection:"row",
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:"#fff",   
     },
    activityIndicator: {     
        justifyContent: 'center',
        alignItems: 'center',    
        backgroundColor:"#fff",       
     },
/// Login Screen \\\

textInputContainer : {height:responsiveHeight(15) },
AuthTextInput: {
   height:responsiveHeight(20),
},

})
export default globalStyles;
