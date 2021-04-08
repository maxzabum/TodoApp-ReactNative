import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FilterTab from "./components/FilterTab";
import TodoList from "./components/TodoList";
import Constants from 'expo-constants';
import AddTodoButton from "./components/AddTodoButton";
import NewTodoList from "./components/NewTodoList";
import {TodoProvider} from "./contexts/TodoProvider";
import MainComponent from "./components/MainComponent";

export default function App() {

    return (
        <TodoProvider>
            <View style={{width: '100%', height: '100%'}}>
                <MainComponent/>
            </View>
        </TodoProvider>
    )
}

