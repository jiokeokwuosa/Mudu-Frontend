import React, {useEffect} from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  StatusBar 
} from 'react-native';
import DailyPlan from './components/screens/Planner/index';

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);
  return (  
    <Provider store={store}>
       <DailyPlan /> 
    </Provider>
  )
};



export default App;
