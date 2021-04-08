import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TodoContext} from "../contexts/TodoProvider";

const NewTodoList = (props) =>{
    const {todo,addTodo} = useContext(TodoContext)
    const applyIcon = <Icon  name="plus-circle" size={35} color="#b2ff8f" />;
    const cancleIcon = <Icon name="plus-circle" size={35} color="#f27461" />;
    const [todoText,setTodoText] = useState("")
    const onHandleChange = (e)=>{
        setTodoText(e.nativeEvent.text)
    }
    return(
        <View style={styles.todoContainer}>
            <TextInput onChange={e=>onHandleChange(e)} style={styles.inputTodo} placeholder="What you need todo?" />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=>{
                        if(todoText.length>0){
                            addTodo(todoText)
                            props.onAddTask()
                        }

                    }}
                    style={{
                        flex: 0,
                        borderWidth:2,
                        borderColor:'rgba(0,0,0,0.1)',
                        alignItems:'center',
                        justifyContent:'center',
                        marginRight:5,
                        width:40,
                        height:40,
                        backgroundColor:'#fff',
                        borderRadius:20,
                    }}
                >
                    {applyIcon}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        props.onAddTask()
                        setTodoText("")
                    }}
                    style={{
                        flex: 0,
                        borderWidth:2,
                        borderColor:'rgba(0,0,0,0.1)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:40,
                        height:40,
                        backgroundColor:'#fff',
                        borderRadius:20,
                        transform: [{ rotate: "45deg" }]
                    }}
                >
                    {cancleIcon}
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    todoContainer:{
        paddingLeft:20,
        padding:12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#97e6be',
        borderRadius:30,
        margin:10,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.05)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 9.5,

        elevation: 15,
    },
    inputTodo:{
        flex:1,
        paddingRight: 10,
        color:'#404040',
        fontSize:18,

    },
    buttonContainer:{
        flexDirection: 'row',
    }

})
export default NewTodoList