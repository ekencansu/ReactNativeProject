/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,View,TextInput,
  TouchableOpacity,Keyboard,Alert, FormInput,
} from 'react-native';



export default class App extends Component<{}> {
constructor(props){
  super(props);
  //this.state = {name : "My name", email: "titi@gmail.com"};
  this.state={
    fname:'',
    lname:'',
    email:''
  }
}


     /* validate = (text) => {
      console.log(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(text) === false)
      {
      console.log("Email is Not Correct");
      this.setState({email:text})
      return false;
  }
else {
  this.setState({email:text})
  console.log("Email is Correct");
}
}*/


myFun=() =>{
  const {fname,lname,email} = this.state;
  if(fname==""){
    //alert('please fill the first name');
    //this.setState({Error: 'please fill the first name' });
     Alert.alert('Validation', 'Please Enter First Name',);
  }
 if(lname==""){

   // alert('please fill the last name');
   //this.setState({Error: 'please fill the last name' });
    Alert.alert('Validation', 'Please Enter Last Name',);
   if(email==""){
   // this.setState({Error: 'please fill the email' })
    Alert.alert('Validation', 'Please Enter Email Adresss',);
    }
  }else{
    //alert('thank you');
    //this.setState({Error: 'Username and Email is True' });
    //this.showAlert;
    Alert.alert('Validation', 'Username and Email is True',);
    
   /* Alert.alert(
  'Validation',
  'Username and Email is True',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
}*/
    
  }

  Keyboard.dismiss();
}

  render() {
    const {fname,lname,email} = this.state;
    const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    return (
      
      
      <View style={styles.container}>

      <Text style={{color:'blue', textAlign:'center'}}>
      {this.state.Error}
      </Text>



 <FormInput
          label='Email'
          placeholder='type@your.email'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          value={email}
          valid={emailValid}
          message={email && !emailValid ? 'Please enter a valid email address' : null}
          onChangeText={(text) => { this.setState({email: text}) }}
        />

      
       <TextInput
       placeholder="first name"
       style={styles.myText}
       onChangeText={
        fname => this.setState({fname})
       }
       />

       <TextInput
       placeholder="last name"
       style={styles.myText}
       onChangeText={
        lname => this.setState({lname})
       }
       />

      <TextInput
       placeholder="email"
       style={styles.myText}
        //email => this.setState({email})
        onChangeText={(text) => this.validate(text)}
       value={this.state.email}
       
       />


       
       <TouchableOpacity
       onPress={this.myFun}
       style={{backgroundColor:'red',padding:10,width:150}}

       >

       <Text style={{color:'white',textAlign:'center',
       fontSize:20,fontWeight:'bold'}}>Validate</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

myText:{
borderWidth:1,borderColor:'#000',
margin:10, padding:10, width:'90%'

}

  
});
