import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import EditPlan from './EditPlan';
import DeletePlan from './DeletePlan';


const PlanBox = ({title, index}) => { 
  const [modalVisible, setModalVisible] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const handleEdit = () =>{
    setModalVisible(true)
  }
  const handleDelete = () =>{
    setOpenDeleteDialog(true)
  }
  return (
    <>  
    <View style={styles.listBox}>
      <Text style={[styles.text, styles.textPad]}>{title}</Text>
      <View>
        <Text onPress={handleEdit}>Edit</Text>
        <Text onPress={handleDelete}>Delete</Text>
      </View>      
    </View> 
    <EditPlan show={modalVisible} setShow={setModalVisible} title={title} index={index}/>
    <DeletePlan show={openDeleteDialog} setShow={setOpenDeleteDialog} index={index}/>
    </>     
  );
};

const styles = StyleSheet.create({
  text:{
    fontFamily:'monospace',
    color:'#20232a',
    fontSize:18
  },
  textPad:{
    marginTop:1
  },
  timeSection:{
    fontSize:13,
    fontFamily:'arial',
    color:'grey',    
  },
  listBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 22,
    marginTop: 7,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 3
  } 
});

export default PlanBox;
