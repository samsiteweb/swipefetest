import Action_Types from "./action.types";


const INITIAL_STATE = {
    counter: 0
}

const CounterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action_Types.ADD:
            return {
                counter: ++state.counter
            }

        case Action_Types.MINUS:
            if (state.counter !== 0) {
                return {
                    counter: --state.counter
                }
            }
            else {
                return {
                    ...state,
                    counter: state.counter
                }
            }
    
        default:
            return state
    }
}

export default CounterReducer;