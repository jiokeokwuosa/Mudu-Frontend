import React, {FC} from 'react';
import { 
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity 
} from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteArticle } from './../../redux/actions/articleActions';


const RemovePlan = ({show,setShow,index}) => {   
    const dispatch = useDispatch()
    const handleDeleteTask = () =>{      
       dispatch(deleteArticle(index))
       setShow(false)
    }    
    return (  
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}       
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={[styles.text,styles.heading]}>Proceed to Delete?</Text>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={handleDeleteTask}
                    >                     
                    <View style={styles.submitButton}>
                        <Text style={[styles.text, styles.buttonText]}>Yes</Text>
                    </View>
                    </TouchableOpacity>   
                </View>
            </View>
        </Modal> 
    );
};

const styles = StyleSheet.create({ 
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:'80%'
  },
  heading:{
      fontSize:20
  },
  textInput:{     
    height:40,
    borderBottomWidth:0.7,
    borderBottomColor:'black',
    marginBottom:10,
    fontSize:14,
    marginTop:10,
    width:'100%'
  },
  text:{
    fontFamily:'monospace',
    color:'#20232a',
    fontSize:18
  },
  submitButton:{
    backgroundColor: '#6A5ACD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 15,    
  },
  buttonText:{
    color:'white'
  },
  timeBox:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      marginVertical:10
  },
  timeBoxText:{
      fontSize:12
  }
});


export default RemovePlan;
