import React,{createContext,useReducer} from 'react'
export const TodoContext = createContext({})


const initialState = {
    todo:[
    ],
    filterTodo:"all"
}

const todoReducer = (state,action) =>{
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todo:state.todo.concat({text:action.payload,id:state.todo.length,active:false})
            }
        case "SET_ACTIVE":
            return {
                ...state,
                todo:action.payload
            }
        case "DEL_TODO":
            const delTodo = state.todo.filter(todo => todo.id !== action.payload)
            console.log(delTodo)
            return {
                ...state,
                todo:delTodo
            }
        case "EDIT_TODO":
            return {
                ...state,
            }
    }
}

export const TodoProvider = ({children})=>{
    const [todoState,todoDispatch] = useReducer(
        todoReducer,
        initialState
    )
    const {todo,filterTodo} = todoState
    const addTodo = payload => {
        todoDispatch({type:'ADD_TODO',payload})
    }
    const setActive = payload=>{
        todoDispatch({type:'SET_ACTIVE',payload})
    }
    const delTodo = payload=>{
        todoDispatch({type:'DEL_TODO',payload})
    }

    return(
        <TodoContext.Provider value={{addTodo,todo,filterTodo,setActive,delTodo }}>
            {children}
        </TodoContext.Provider>
    )
}