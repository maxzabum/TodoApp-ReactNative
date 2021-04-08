import React, {useState,useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FilterTab from "../components/FilterTab";
import AddTodoButton from "../components/AddTodoButton";
import NewTodoList from "../components/NewTodoList";
import {TodoContext} from "../contexts/TodoProvider";
import TodoList from "./TodoList";


const MainComponent = (props) =>{
    const [isActive, setActive] = useState(false)
    const [newTask, setNewTask] = useState([{text: "eiei", id: 1}])
    const [newTodoIsActive, setTodoIsActive] = useState(false)
    const [isEditActive, setEditActive] = useState(false)
    const {todo,filterTodo} = useContext(TodoContext)
    const filterButton = <Icon onPress={() => setActive(!isActive)} name="filter" size={30} color="#43c4e8"/>;
    const onAddTask = () => {
        console.log("dsaewq", todo)
        setTodoIsActive(!newTodoIsActive)
    }
    const mapTodo =()=>{
        console.log(todo)
    }
    return(
            <View style={styles.container}>
                <View style={styles.header}>
                    {/*<FilterButton/>*/}
                    {filterButton}
                    <Text>รายการทั้งหมด</Text>
                    <Text onPress={() => setEditActive(!isEditActive)}>แก้ไข</Text>
                </View>
                <View style={styles.filterTab}>
                    {isActive ? <FilterTab/> : null}
                </View>
                <View style={styles.content}>
                    <SafeAreaView style={styles.scrollContainer}>
                        <ScrollView style={styles.scrollView}>
                            {
                                newTodoIsActive ? <NewTodoList onAddTask={onAddTask}/>
                                    : null
                            }
                            {todo.map(todo=>{
                                return <TodoList isEditActive={isEditActive}  id={todo.id} text={todo.text} active={todo.active}/>
                            })}
                        </ScrollView>
                    </SafeAreaView>
                </View>
                <View style={styles.footer}>
                    <AddTodoButton onAddTask={onAddTask}/>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    header: {
        flex: 0,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
    }
    , content: {
        width: '100%',
        flex: 5,
        backgroundColor: '#f3f3f3',
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        left: 10,

    },
    scrollContainer: {
        flex: 1,
    },
    filterTab: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a8a8a8'
    }
});
export default MainComponent