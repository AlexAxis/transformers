const INITIAL_STATE = {
    list: [],
    name: ''
}
//as ACÇÕES
//REDUCER (STATE,ACTION)
export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'NAME_CHANGE':
            return { ...state, name: action.payload }
        case 'TRANSFORMER_FETCH':
            return { ...state, list: action.payload }

        default:
            return state
    }
}
