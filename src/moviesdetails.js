
'use strict'
import React, { Component } from 'react';
import{View,StyleSheet,Text,ImageBackground}from 'react-native';

//REQUEST_URL_IMAGE constante para concatenar la url de la imagen
const REQUEST_URL_IMAGE = "https://image.tmdb.org/t/p/w500";

export class MoviesDetails extends Component{
    
    render(){
        //variable movie contiene las props del navegador
        let movie = this.props.navigation.state.params;
        return(
            <View style = {styles.container}  >
                <ImageBackground style = {styles.image} source = {{uri: REQUEST_URL_IMAGE+movie.poster_path}} >                
                </ImageBackground>
                <Text style = {styles.title} >{movie.title}</Text>
                <Text style = {styles.description} >{movie.vote_average }</Text>
                 <Text style = {styles.description} >{movie.overview}</Text>
            </View>
        );
    }    
}

//estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
     },
    description:{
        fontSize: 14
    },
    title:{
        fontSize: 20,
        marginBottom: 6,
        color: '#007AFF'
        
    },
    image:{
        alignSelf: 'stretch',
        height: 325
    }
 
});
module.exports = MoviesDetails;