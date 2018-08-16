import { AppRegistry } from 'react-native';
import{StackNavigator} from 'react-navigation'
//import App from './App';
import LoginComponents from './src/loginview';
import MainViewComponents from './src/moviesview';
import DetailsComponents from './src/moviesdetails';
import {LoginView, MainView, DetailsView} from './src/screenames'

//configuracion del stack navigator
//tres ventanas Login, Movies Db, Movies Details
const App = StackNavigator({
    LoginView: {
        screen: LoginComponents, 
        navigationOptions: {
            headerTitle: 'Login'
        },
    },
    MainView:{
        screen: MainViewComponents,
        navigationOptions: {
            headerTitle: 'Movies DB'
        },
    },
    DetailsView:{
        screen: DetailsComponents,
        navigationOptions: {
            headerTitle: 'Movie Details'
        },

    }

})
AppRegistry.registerComponent('pelis', () => App);
