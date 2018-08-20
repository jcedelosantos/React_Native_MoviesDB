
'use strict'
import React, { Component } from 'react';
import{View,StyleSheet,Text,ImageBackground,ListView, TouchableOpacity}from 'react-native';
import {DetailsView} from './screenames';



const REQUEST_URL = "https://api.themoviedb.org/3/discover/movie?api_key=01b138e7c7bbf88e2f55d86ec919e1f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const REQUEST_URL_IMAGE = "https://image.tmdb.org/t/p/w500";

class MoviesView extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 !== row2
            }),
            loaded: false 
        }
    }
    //carga la data luego que el componente se ha montado
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        fetch(REQUEST_URL)
        .then((response)=> response.json())
        .then((responseData)=>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.results),
                loaded: true    
            })
        })
    }

    //Breve texto mientras se carga la data desde el api
    renderLoadingView(){
        return(
            <View style = {styles.container}>
                <Text>Cargando Movies..</Text>
            </View>
        )
    }

    //renderizacion de las peliculas
    renderMovie = (movie) => { 
        const{navigation} = this.props;
        return(
            //boton por cada una de imagenes, 
            <TouchableOpacity onPress = {() => {
                //navegacion que se encarga de enviar a la pestana de detalles, enviando el parametro movie 
                navigation.navigate(DetailsView,movie);                
            }} >
                <ImageBackground source = {{uri:REQUEST_URL_IMAGE+movie.poster_path}} style = {styles.backgroundImage}>
                    <View style ={styles.rightContainer}>
                        <Text style = {styles.title}>{movie.title}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity >
        )

    }
    //renderizacion de la data, si no ha cargado muestra el texto "cargando movies", sino devuelve un listview con la data 
    render(){
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return(
            <ListView 
                dataSource = {this.state.dataSource }   
                renderRow = {this.renderMovie} 
                style = {styles.ListView}
            />
        )
    }



}
//estilos
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
     },
    backgroundImage:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height:300
    },
    rightContainer:{
        backgroundColor: 'rgba(52,52,52,0.5)',
        alignSelf: 'stretch',
        paddingTop: 30,
        height: 150  
    },
    title:{
        fontSize: 27,
        marginBottom: 8,
        color: 'white',
        backgroundColor: 'rgba(52,52,52,0)'
        
    },
    available:{
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'rgba(52,52,52,0)'
    },
    listView:{
        paddingTop:65,
        marginBottom:50
    }
});
module.exports = MoviesView;