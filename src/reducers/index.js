//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
export const initialState = {
    smurfs: [],
    newSmurf: {
        id: Math.random(),
        name: '',
        nickname: '',
        position: '',
        description: '',
    },
    isLoading: false,
    error: ''
}

//2. Setup your reducer to take the state and action as peremeters
export const reducer = (state = initialState, action)=>{
    //3. Add in cases to your reducer to handle:
    switch(action.type){
        // - The start of an api call
        case('START_FETCH'): 
            return({
                ...state,
                isLoading: true,
                error: '',
            })
            // - The end of an api call
            case('FETCH_SMURF_LIST'):
            return({
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: '',
            })
            // - The adding a smurf to the smurf list when added into payload
            case('ADD_SMURF'):
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isLoading: false,
                error: '',
            })
            // - Setting Error Text
            case('FETCH_ERROR'):
            return({
                ...state,
                error: action.payload,
                isLoading: false
            })
        default: 
            return state;
    }
}

export default reducer 
//Task List:

//      - Any other state changes you see as necessary

// if(!state.smurf.data.includes(action.payload)){
//     return dispatch({type: 'FETCH_ERROR', payload: action.payload})
// } else {
//     return state
// }