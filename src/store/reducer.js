const initialState = {
    a: 1,
    b: 1
}

const reducer = (state = initialState, action) => {
    
    if(action.type === 'UPDATE_A'){
        
        return {
            ...state,
            a: state.a + state.b
        }


    } else if(action.type === 'UPDATE_B') {

       return { ...state,
        b: state.a + state.b
       }
    }

    return state;

}

export default reducer
// const initialState = {
//     age:21,
//     history: []
// }
// // const initialState is there a default state passed into the reducer****

// const reducer = (state = initialState, action) => {
//     const newState = {...state};

//     if (action.type === 'AGE_UP'){

//        // newState.age++;
//        return {
//            ...state,
//            age: state.age + action.value,
//            history: state.history.concat({age: state.age + action.value})
//        }
//     } else if (action.type === 'AGE_DOWN'){
//        // newState.age--;
//        return {
//         ...state,
//         age: state.age - action.value,
//         history: state.history.concat({id:Math.random(), age: state.age - action.value})
//         }
//     } else if (action.type === 'DEL_ITEM'){
       
//         return {
//          ...state,         
//          history: state.history.filter(el => el.id !== action.key)
//          }

         
//      }
//     return newState;
// }



// export default reducer;