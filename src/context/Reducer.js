import React from 'react'
import { useReducer } from 'react'

function Reducer() {
    //useReducer(() => {}, {define state})
    //action should be dispatched to use
    const [state, dispatch] = useReducer(
        (state, action) => {
            console.log(state, action) //{name: 'mickenzie', btn: 1, password: 12345}, {type: 'update', value: 'Micheal'}

            //action Types
            if (action.type === "update") {
                return {
                    ...state,
                    name: action.value
                }
            }
            if (action.type === "password") {
                return {
                    ...state,
                    password: action.value
                }
            }
            if (action.type === "inc") {
                return {
                    ...state,
                    btn: state.btn + 1
                }
            }
            if (action.type === "dec") {
                return {
                    ...state,
                    btn: state.btn - 1
                }
            }
        }, {
        name: "mickenzie",
        btn: 1,
        password: 12345
    })
    return (
        <div>
            <h1>Reducer</h1>
            <p>{state.name}</p>
            <p>password {state.password} </p>
            <p>{state.btn}</p>
            <input type='text' onChange={(e) => dispatch({ type: "password", value: e.target.value })} />
            <button onClick={() => dispatch({ type: "update", value: "Micheal" })} >Get value</button>
            <button onClick={() => dispatch({ type: "inc" })} >Increase</button>
            <button onClick={() => dispatch({ type: "dec" })} >Decrease</button>
        </div>
    )
}

export default Reducer