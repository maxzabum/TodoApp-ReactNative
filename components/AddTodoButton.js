import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddTodoButton = (props) =>{
    const addIcon = <Icon name="plus" size={40} color="#FFF" onPress={props.onAddTask}/>;
    return(
        <View>
            <TouchableOpacity

                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    width:80,
                    height:80,
                    backgroundColor:'#43c4e8',
                    borderRadius:40,
                }}
            >
                {addIcon}
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default AddTodoButton