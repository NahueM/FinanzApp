import { createStore } from 'redux';

// Action generators --> funciones que devuelven objetos


// const incrementCount = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ setCount = 1 } = {}) => ({
    type: 'SET',
    setCount
})

const resetCount = () => ({
    type: 'RESET',
})

//REDUCERS
// 1. Reducers are pure functions (lo que devuelven tiene que ver con lo que reciben)
// 2. nunca cambiar el state o action directamente

const countReducer= (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setCount
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer)


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})



// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());



store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setCount: 258 }));
store.dispatch(resetCount())









