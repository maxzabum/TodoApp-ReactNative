import React, {useState, useContext} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TodoContext} from "../contexts/TodoProvider";

const TodoList = (props) => {
    const {setActive, todo, delTodo} = useContext(TodoContext)
    const [isEanable, setEnable] = useState(false)
    const [isEnableConfirm, setEnableConfirm] = useState(false)
    const deleteButton = <Icon name="minus-circle" size={35} color="#f27461" onPress={() => onDelTodo(props.id)}/>;
    const checkIcon = <Icon name="circle" size={35} color="#b2ff8f"/>;
    const applyIcon = <Icon  name="plus-circle" size={35} color="#b2ff8f" />;
    const [textInput, setTextInput] = useState(props.text)
    const onSetActive = (id) => {
        for (var i = 0; i < todo.length; i++) {
            if (todo[i].id === id) {
                todo[i].active = !todo[i].active
            }
        }
        setActive(todo)
    }
    const onDelTodo = (id) => {
        delTodo(id)
    }
    const onEditTodo = () => {
        console.log(textInput,'dsad')
    }
    return (
        <View style={styles.todoContainer}>
            {props.isEditActive
                ? <TextInput  onChange={(e) => setTextInput(e.nativeEvent.text)} defaultValue={props.text}
                              style={styles.inputTodo}/>
                : <Text style={styles.textTodo}>{props.text}</Text>
            }
            <TouchableOpacity
                onPress={() => onSetActive(props.id)}
                style={{
                    flex: 0,
                    borderWidth: 2,
                    borderColor: 'rgba(0,0,0,0.1)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    backgroundColor: '#fff',
                    borderRadius: 20,
                }}
            >
                {props.isEditActive ? deleteButton : props.active ? checkIcon : null}
            </TouchableOpacity>
            {props.isEditActive ?
                <TouchableOpacity
                    onPress={() => onEditTodo()}
                    style={{
                        flex: 0,
                        borderWidth: 2,
                        borderColor: 'rgba(0,0,0,0.1)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 5,
                        width: 40,
                        height: 40,
                        backgroundColor: '#fff',
                        borderRadius: 20,
                    }}
                >
                    {applyIcon}
                </TouchableOpacity> :
                null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    todoContainer: {
        paddingLeft: 20,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderRadius: 30,
        margin: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 9.5,

        elevation: 15,
    },
    textTodo: {
        flex: 1,
        paddingRight: 10,
        color: '#a8a8a8',
        fontSize: 18
    },
    inputTodo: {
        flex: 1,
        paddingRight: 10,
        color: '#404040',
        fontSize: 18,

    },
})
export default TodoList