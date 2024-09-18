// import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Login = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//     <StatusBar barStyle={'light-content'} backgroundColor={'white'}/>
//     <View style={{alignItems:'center'}}>
//       <Text style={styles.Text}>LOGIN</Text>
//       <Text style={styles.text2}>For your Information</Text>
//       </View>
//       <View style={{padding:20,}}>
//       <Button title='Register' style={styles.button} onPress={()=> navigation.goBack()}/>
//       <View style={{alignItems:'center',marginTop:10}}>
//       <Text style={styles.text2}>Dont have a Account?<Text style={{color:'red'}}> Register</Text></Text>
//       </View>
//       </View>
//     </View>
//   )
// }

// export default Login

// const styles = StyleSheet.create({
//     container:{
//         // alignItems:'center',
//         flex:1,
//         backgroundColor:'white',
//         // fontFamily:'RubikGlitchPop-Regular',
//     },
//     Text:{
//         fontFamily:'RubikGlitchPop-Regular',
//         color:'black',
//         fontSize:60
//     },
//     button:{
//         backgroundColor:'blue'
//     },
//     text2:{
//         // fontFamily:'RubikGlitchPop-Regular',
//         color:'black',
//         fontWeight:'bold'
//     }
// })

// import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'

// const Register = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//     <ImageBackground source={require('../assets/backroun.png')} resizeMode='cover' style={styles.bgr}>
//     <View style={{marginTop:-700}}>
//     <TouchableOpacity onPress={()=>navigation.goBack()}>
//     <Image source={require('../assets/back-arrow.png')} style={styles.back}/>
//       </TouchableOpacity>
//     </View>
//     <View style={{marginTop:20,marginLeft:20,}}>
//       <Text style={styles.Text}>Register</Text>
//        <TextInput style={styles.input}></TextInput>
//         </View>
//       </ImageBackground>
//     </View>
//   )
// }

// export default Register

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'grey'
//     },
//     Text:{
//         color:'black',
//         fontSize: 40,
//         fontWeight:'bold',
//     },
//     bgr:{
//       flex:1,
//       justifyContent:'center'
//     },
//     back:{
//       width:40,
//       height:40,
//       marginTop:120
//     },
//     input:{
//       color:'black',
//       marginLeft:15,
//       borderWidth:1,
//       borderColor:'black',
//       borderRadius:5,
//       width:380,
//       height:50,
//     },
//     srch:{
//       marginBottom:-50,
//       width:'80%',
//       height:90,
//       justifyContent:'center',
//     }
// })

import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';

const Register = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground source={require('../assets/tangan.png')} resizeMode='cover' style={styles.bgr}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/back-arrow.png')} style={styles.back} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.Text}>Register</Text>
        </View>
        <View style={styles.srch}>
          <TextInput style={styles.input} placeholder="email" />
          <TextInput style={styles.pass} placeholder="password" />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  Text: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50, // Added marginBottom to increase space between "Register" and TextInput
  },
  bgr: {
    flex: 1,
    justifyContent: 'center',
  },
  backButtonContainer: {
    marginTop: -140, // Adjusted to fit design
    marginLeft: 5,
    marginBottom:300
  },
  back: {
    width: 40,
    height: 40,
    marginTop:-190,
  },
  input: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
  },
  srch: {
    width: '80%',
    height: 90,
    alignSelf: 'center', 
    flexDirection:'column'
  },
  titleContainer: {
    marginLeft: 20,
    marginTop:-300
  }, 
  pass:{
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    marginTop:30,
  }
});
