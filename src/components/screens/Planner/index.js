import React, { useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {retrieveData, storeData} from './../../../../assets/js/storage'
import AddPlan from '../../widgets/AddPlan';
import Login from '../../widgets/Login';
import Register from '../../widgets/Register';
import Box from '../../widgets/PlanBox';
import {inputChange} from './../../../redux/actions/authActions'

const Planner = () => {
  const dispatch = useDispatch()
  const authenticated = useSelector((state)=>state.auth.isAuthenticated)
  useEffect(()=>{
    async function fetchData() {
      const isAuthenticated =   await retrieveData('isAuthenticated') 
      if(isAuthenticated || authenticated){
        setActiveNav(3)
      }
    }
    fetchData();
  })
  const articles = useSelector((state)=>state.article.articles)
  const [modalVisible, setModalVisible] = useState(false);
  const [activeNav, setActiveNav] = useState(1);


  const planList = () => {
    if (articles && articles.length > 0) {
      return articles.map((item, index) => {
        return (
          <Box title={item?.text} key={index} index={index} />
        );
      });
    } else {
      return <Text style={styles.center}>No exisiting list</Text>;
    }
  };

  const logout = async() =>{
    setActiveNav(1)
    await storeData('isAuthenticated', '')
    dispatch(inputChange('isAuthenticated', false))
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headingBox}><Text style={[styles.text, styles.headingText]}>List App</Text></View>
        <View style={styles.topMenu}>
          {activeNav === 3?
           <>
            <Text style={[styles.text, styles.addTask]} onPress={() => setModalVisible(true)}>Add to List</Text> 
            <Text style={[styles.text, styles.addTask]} onPress={logout}>Logout</Text>                   
           </>
          :null }          
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewBox}>
          {activeNav === 1 ?
            <Login handleNav={setActiveNav} />
            : activeNav === 2 ? <Register handleNav={setActiveNav}/> : planList()
          }
        </ScrollView>
      </View>
      <AddPlan show={modalVisible} setShow={setModalVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'monospace',
    color: '#20232a',
    fontSize: 18
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  center: {
    textAlign: 'center'
  },
  addTask: {
    textAlign: 'center',
    textDecorationColor: 'red',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    marginTop: 20
  },
  headingBox: {
    backgroundColor: '#191970',
    paddingVertical: 20,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  headingText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  scrollViewBox: {
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 20
  }
});

const mapStateToProps = (state) => ({
  articles: state.articles
});

export default Planner;

