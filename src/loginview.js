
'use strict'
import React, { Component } from 'react';
import {View,Text,ImageBackground,StyleSheet,TextInput}from 'react-native';
import {MainView} from './screenames';

import Button from 'react-native-button';


class LoginView extends Component{
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state = {
          isAuthenticated: false,
          typedEmail: '',
          typedPassword: '',
          user: null
        };
      }

    //parte del codigo comentado por error en las dependencias con Firebase.
/*
    onAnonymousLogin=() =>{
        firebase.auth().signInAnonymously()
          .then(()=>{
            console.log('logiado');
            this.state({
              isAuthenticated: true
            });
          })
          .catch((error)=>{
            console.log(`Login failed. Error = ${error}`)
          });
      }
    
      onRegister=() =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail,this.state.typedPassword)
        .then((loggedInUser)=>{
          this.setState({user:loggedInUser})
          console.log(`Register with user: ${JSON.stringify(loggedInUser.toJSON())}`);
    
        }).catch((error)=>{
          console.log(`Register fail with error :  ${error}`);
        });
      }
    
      onLogin=() =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.typedEmail,this.state.typedPassword)
        .then((loggedInUser)=>{
          this.setState({user:loggedInUser})
          console.log(`Login with user: ${JSON.stringify(loggedInUser.toJSON())}`);
    
        }).catch((error)=>{
          console.log(`Login fail with error :  ${error}`);
        });
     
      }
*/
    render(){
    const{navigation} = this.props;
 
        return(
            <ImageBackground style= {styles.containerbackground} source = {{uri: 'https://ips.pepitastore.com/storefront/img/resized/squareenix-store/dad21075073c5e1f254f2d62c4a881ed_1920_KR.jpg'}} > 
            <View >
              <Text style =  {styles.text} >
                Login with Firebase
              </Text>
              <Text style = {{margin:20,fontSize:15,color:'black'}}> {this.state.isAuthenticated ==true ? 'Logged in Anonymosus':''} </Text>
              <TextInput style={styles.textinputemail}
                keyboardType='email-address'
                placeholder = 'Enter your email'
                autoCapitalize = 'none'
                onChangeText = {
                  (text) =>{
                    this.setState({typedEmail:text})
                  }
                }
              ></TextInput>
                 <TextInput style={styles.textinputemail}
                keyboardType='default'
                placeholder = 'Enter your password'
                secureTextEntry = {true}
                onChangeText = {
                  (text) =>{
                    this.setState({typedPassword:text})
                  }
                }
              ></TextInput>
              <View style={styles.viewrow}>
              <Button containerStyle ={styles.button}
                  style={styles.texttbutton}
                  onPress = {this.onRegister}
                  >Register  
              </Button>
              <Button containerStyle ={styles.button}
                  style={styles.texttbutton}
                  onPress = {this.onLogin}
                  >Login  
              </Button>
              <Button containerStyle ={styles.button}
                  style={styles.texttbutton}
                  onPress = {() => {navigation.replace(MainView)}}
                  >Anonymous   
              </Button>
    
              </View>
    
            </View>
          </ImageBackground>  
        );
        
    }
    
}

//estilos
const styles = StyleSheet.create({
    containerbackground: {
      flex: 1, 
      alignItems: 'stretch',
      padding: 30
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 0,
      color: 'grey'
    },
    button: {
      margin: 5,
      padding: 2,
      borderRadius: 4,
      backgroundColor: 'grey',
    },
    texttbutton: {
      fontSize: 18,
      color: 'white',
    },
    textinputemail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: 250,
      margin: 10,
      padding: 10,
      borderColor: 'grey',
      borderWidth: 1,
      color: 'white',
    },
    viewrow: {
      flexDirection: 'row',
    },
  });
  
module.exports = LoginView;