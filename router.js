import {
    createStackNavigator,
  } from 'react-navigation';
  import Login from './src/components/login/login';
  import Home from './src/components/home/home';
  const Router = createStackNavigator({
   
    Login: { screen: Login },
    Home: { screen: Home , header: { visible:false } },
   
  
  });
  
  export default Router;